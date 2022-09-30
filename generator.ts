#!/usr/bin/env npx ts-node

import { Service, Request, AWSError } from 'aws-sdk';
//@ts-ignore
import * as fs from 'fs';
import * as AWSRuntime from 'aws-sdk';
import { serviceCategories } from './src/types';

export default class Generator {

  private extractParameter(e: AWSError): string {
    return e.message.substring(e.message.indexOf("'") + 1, e.message.lastIndexOf("'"));
  }

  private requiredParams(request: Request<any, any>): string[] {
    try {
      const validation = ((request as any)._events.validate ?? []).find((it: any) => it.name === 'VALIDATE_PARAMETERS');
      validation?.(request);
      return [];
    } catch(e) {
      if(e.code === 'MultipleValidationErrors') {
        return e.errors.filter((it: any) => it.code === 'MissingRequiredParameter').map((it: any) => this.extractParameter(it));
      } else if(e.code === 'MissingRequiredParameter') {
        return [this.extractParameter(e)];
      }
      console.log('Validation issue', e.code, e.message);
    }
    return [];
  }

  private fromService(serviceKey: string, service: Service) {
    const functions = Object.getOwnPropertyNames(Object.getPrototypeOf(service)).filter(it => it !== 'constructor' && typeof Object.getPrototypeOf(service)[it] === 'function');
    const mappedFunctions = functions.map(name => {
      try {
        const request: Request<any, any> = (service as any)[name]();
        const requiredParams = this.requiredParams(request);
        if(serviceKey === 'Lambda' ){
          console.log(serviceKey, name, requiredParams);
        }
        const s = (request as any).service;
        const o = (request as any).operation;
        try {
          return {
            name,
            requiredParams,
            info: s.paginationConfig(o, true)
          };
        } catch (e) {
          return {name}
        }
      } catch (e) {
        console.log(serviceKey, name, 'Failed');
      }
    });
    return {
      serviceHost: service.endpoint.host,
      isGlobalEndpoint: (service as any).isGlobalEndpoint,
      signingRegion: (service as any).signingRegion,
      serviceKey,
      mappedFunctions
    }
  }

  private categoryfor(service: string): string {
    return Object.keys(serviceCategories).find(category => (serviceCategories as any)[category].includes(service)) ?? 'Other';
  }

  private funcFrom(service: string, it: {name: string, requiredParams: string[]; info?: {"inputToken"?: string,"limitKey"?: string, "outputToken"?: string, "resultKey": string}}): string {
    if(it.info && it.info.resultKey && typeof it.info.resultKey === 'string' && !it.info?.outputToken?.includes('[') && !Array.isArray(it.info?.inputToken ?? [])) {
      const parts = it.info.resultKey.split('.');
      const dig = parts.length > 1 ? `.${parts.slice(0, parts.length - 1).join('.')}` : ''
      const tokenParts = it.info.outputToken?.split?.('.');
      return `  async ${it.name}(...args: any): Promise<any> {
    // ${JSON.stringify(it.requiredParams)}
    const {next, limit, ...rest} = args?.length ? args[0] : {} as any;
    const params = args?.length ? [{ ...rest${it.info.inputToken ? `, ${it.info.inputToken}: next`: ''}${it.info.limitKey ? `, ${it.info.limitKey}: limit`: ''}, ...args.slice(1) }] : args;
    const {${[parts[parts.length - 1], tokenParts?.[tokenParts.length - 1]].filter(it => !!it).join(', ')}, ...metadata} = (await this.client.${it.name}(...params).promise())${dig} ?? {};
    const member = ${parts[parts.length - 1]} ?? [];
    return {
      totalCount: member.length,${tokenParts ? `\n      next: ${tokenParts?.[tokenParts.length - 1]},` : ''}
      member,
      metadata
    }
  }`
    }
    return `  async ${it.name}(...args: any): Promise<any> {
    return this.client.${it.name}(...args).promise()
  }`
  }

  private typedFuncFrom(service: string, it: {name: string; requiredParams: string[]; info: any}): string {
    if(it.info && it.info.resultKey && typeof it.info.resultKey === 'string' && !it.info?.outputToken?.includes('[') && !Array.isArray(it.info?.inputToken ?? [])) {
      const {inputToken, limitKey} = it.info;
      const omits = [inputToken, limitKey].filter(it => !!it).map(it => `'${it}'`);
      const omitPrefix = omits.length > 0 ? 'Omit<' : '';
      const omitPostFix = omits.length > 0 ? `, ${omits.join(' | ')}>` : '';
      const digger = it.info.resultKey.split('.').map((it: any) => `['${it}']`).join('')
      const extras = (inputToken || limitKey) ? `{ ${inputToken ? `next?: string${limitKey ? ', ' : ''}${limitKey ? `limit?: number`: ''}`: ''} }`: '{}';
      return `  ${it.name}(params: { [K in keyof ${omitPrefix}ParamsFrom<'${it.name}', ${extras}>${omitPostFix}]: ParamsFrom<'${it.name}', ${extras}>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'${it.name}'>]-?: ReturnTypeFrom<'${it.name}'>[K]}${digger} }>
  ${it.requiredParams.length === 0 ? `${it.name}(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'${it.name}'>]-?: ReturnTypeFrom<'${it.name}'>[K]}${digger} }>` : ''}`
    }
    return `  ${it.name}: FunctionTypeFrom<'${it.name}'>`;
  }

  private serviceFromHost(host: string): string {
    const parts = host.split('.');
    if(parts[0] === 'api') return parts[1];
    return parts[0];
  }

  private fileFrom(info: {serviceHost: string; isGlobalEndpoint: boolean, signingRegion: string, serviceKey: string, mappedFunctions: {name: string, requiredParams: string[], info: any}[]}): string {
    return `import { Request, ${info.serviceKey} as AWS${info.serviceKey} } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWS${info.serviceKey}> = AWS${info.serviceKey}[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWS${info.serviceKey}> = AWS${info.serviceKey}[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWS${info.serviceKey}, Extras> = AWS${info.serviceKey}[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: '${this.serviceFromHost(info.serviceHost)}';
    global: ${info.isGlobalEndpoint};
    category: '${this.categoryfor(this.serviceFromHost(info.serviceHost))}'
    topLevelCalls: readonly ${JSON.stringify(info.mappedFunctions.filter(it => it.requiredParams?.length === 0).map(it => it.name))};
    
${info.mappedFunctions.map(it => this.typedFuncFrom(info.serviceKey, it)).join(';\n\n')}
}
 
export class ${info.serviceKey} implements ClientType {
  private constructor(private readonly client: AWS${info.serviceKey}) {}
  
  public readonly signingRegion = ${info.signingRegion ? `'${info.signingRegion}'` : undefined};
  public readonly service = '${this.serviceFromHost(info.serviceHost)}';
  public readonly global = ${info.isGlobalEndpoint};
  public readonly category = '${this.categoryfor(this.serviceFromHost(info.serviceHost))}';
  public readonly topLevelCalls = ${JSON.stringify(info.mappedFunctions.filter(it => it.requiredParams?.length === 0).map(it => it.name))} as const;
  
${info.mappedFunctions.map(it => this.funcFrom(info.serviceKey, it)).join('\n\n')}
  
  static fromClient(client: AWS${info.serviceKey}): ClientType {
    return new ${info.serviceKey}(client);
  }
  
  static client(options?: AWS${info.serviceKey}.Types.ClientConfiguration): ClientType {
    return new ${info.serviceKey}(new AWS${info.serviceKey}(options));
  }
}  
`;
  }

  generate() {
    const services = Object.keys(AWSRuntime).filter(it => (AWSRuntime as any)[it].prototype);
    const ignored = ['CredentialProviderChain', 'Budgets', 'Service', 'SequentialExecutor', 'Credentials', 'Config', 'HttpResponse', 'HttpClient', 'Response', 'ParamValidator', "IniLoader", "TemporaryCredentials", "ChainableTemporaryCredentials", "CognitoIdentityCredentials", "SAMLCredentials", "ProcessCredentials", "NodeHttpClient", "TokenFileWebIdentityCredentials", "MetadataService", "EC2MetadataCredentials", "RemoteCredentials", "ECSCredentials", "EnvironmentCredentials", "FileSystemCredentials", "SharedIniFileCredentials", "SsoCredentials", "Token", "TokenProviderChain"];
    const all = services.filter(it => !ignored.includes(it)).map(service => {
      try {
        return this.fromService(service, new (AWSRuntime as any)[service]());
      } catch(e) {
        // ignore
      }
    }).filter(it => !!it);

    try {
      fs.mkdirSync('src/client', { recursive: true })
    } catch(e) {
      // ignore
    }
    const errors: string[] = [];
    all.forEach(it => {
      try {
        fs.writeFileSync(`src/client/${it!.serviceKey.toLowerCase()}.ts`, this.fileFrom(it as any))
      } catch(e) {
        errors.push(it!.serviceKey);
        console.warn(e.message);
      }
    });
    fs.writeFileSync(`src/client/index.ts`, all.map(service => `export * from './${service!.serviceKey.toLowerCase()}'`).join('\n'))
  }
}

try {
  new Generator().generate();
} catch(e) {
  console.log(e.message);
}