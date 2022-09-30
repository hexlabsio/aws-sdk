#!/usr/bin/env npx ts-node

import { Service, Request } from 'aws-sdk';
//@ts-ignore
import * as fs from 'fs';
import * as AWSRuntime from 'aws-sdk';

export default class Generator {

  private fromService(serviceKey: string, service: Service) {
    const functions = Object.getOwnPropertyNames(Object.getPrototypeOf(service)).filter(it => it !== 'constructor' && typeof Object.getPrototypeOf(service)[it] === 'function');
    const mappedFunctions = functions.map(name => {
      try {
        const request: Request<any, any> = (service as any)[name]();

        const s = (request as any).service;
        const o = (request as any).operation;
        try {
          return {
            name,
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
      serviceKey,
      mappedFunctions
    }
  }

  private funcFrom(service: string, it: {name: string, info?: {"inputToken"?: string,"limitKey"?: string, "outputToken"?: string, "resultKey": string}}): string {
    if(it.info && it.info.resultKey && typeof it.info.resultKey === 'string' && !it.info?.outputToken?.includes('[') && !Array.isArray(it.info?.inputToken ?? [])) {
      const parts = it.info.resultKey.split('.');
      const dig = parts.length > 1 ? `.${parts.slice(0, parts.length - 1).join('.')}` : ''
      const tokenParts = it.info.outputToken?.split?.('.');
      return `  async ${it.name}(...args: any): Promise<any> {
    // ${JSON.stringify(it.info)}
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

  private typedFuncFrom(service: string, it: {name: string, info: any}): string {
    if(it.info && it.info.resultKey && typeof it.info.resultKey === 'string' && !it.info?.outputToken?.includes('[') && !Array.isArray(it.info?.inputToken ?? [])) {
      const {inputToken, limitKey} = it.info;
      const omits = [inputToken, limitKey].filter(it => !!it).map(it => `'${it}'`);
      const omitPrefix = omits.length > 0 ? 'Omit<' : '';
      const omitPostFix = omits.length > 0 ? `, ${omits.join(' | ')}>` : '';
      const digger = it.info.resultKey.split('.').map((it: any) => `['${it}']`).join('')
      const extras = (inputToken || limitKey) ? `{ ${inputToken ? `next?: string${limitKey ? ', ' : ''}${limitKey ? `limit?: number`: ''}`: ''} }`: '{}';
      return `  ${it.name}(params: { [K in keyof ${omitPrefix}ParamsFrom<'${it.name}', ${extras}>${omitPostFix}]: ParamsFrom<'${it.name}', ${extras}>[K]}): Promise<{ next?: string; totalItems: number; metadata: any; member: { [K in keyof ReturnTypeFrom<'${it.name}'>]-?: ReturnTypeFrom<'${it.name}'>[K]}${digger} }>`
    }
    return `  ${it.name}: FunctionTypeFrom<'${it.name}'>`;
  }

  private fileFrom(info: {serviceKey: string, mappedFunctions: {name: string, info: any}[]}): string {
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

export type ${info.serviceKey}Type = {
${info.mappedFunctions.map(it => this.typedFuncFrom(info.serviceKey, it)).join('\n\n')}
};

export class ${info.serviceKey} {
  static fromClient(client: AWS${info.serviceKey}): ${info.serviceKey}Type {
    return ${info.serviceKey}Wrapper.fromClient(client) as any;
  }
  
  static client(options?: AWS${info.serviceKey}.Types.ClientConfiguration): ${info.serviceKey}Type {
    return ${info.serviceKey}Wrapper.client(options) as any;
  }
}

class ${info.serviceKey}Wrapper {
  private constructor(private readonly client: AWS${info.serviceKey}) {}
  
${info.mappedFunctions.map(it => this.funcFrom(info.serviceKey, it)).join('\n\n')}
  
  static fromClient(client: AWS${info.serviceKey}) {
    return new ${info.serviceKey}Wrapper(client);
  }
  
  static client(options?: AWS${info.serviceKey}.Types.ClientConfiguration) {
    return new ${info.serviceKey}Wrapper(new AWS${info.serviceKey}(options));
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
    console.log(errors);
  }
}

try {
  new Generator().generate();
} catch(e) {
  console.log(e.message);
}