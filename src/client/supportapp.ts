import { Request, SupportApp as AWSSupportApp } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSupportApp> = AWSSupportApp[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSupportApp> = AWSSupportApp[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSupportApp[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSupportApp, Extras> = AWSSupportApp[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSupportApp> = AWSSupportApp[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SupportApp {
  private constructor(private readonly client: AWSSupportApp) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'supportapp' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listSlackChannelConfigurations","listSlackWorkspaceConfigurations"] as const;
  
  createSlackChannelConfiguration: (params: RawParamsFrom<'createSlackChannelConfiguration'>) => Promise<ReturnTypeFrom<'createSlackChannelConfiguration'>>  = async params => {
  // undefined
    return this.client.createSlackChannelConfiguration(params as any).promise();
  }

  deleteAccountAlias: (params: RawParamsFrom<'deleteAccountAlias'>) => Promise<ReturnTypeFrom<'deleteAccountAlias'>>  = async params => {
  // undefined
    return this.client.deleteAccountAlias(params as any).promise();
  }

  deleteSlackChannelConfiguration: (params: RawParamsFrom<'deleteSlackChannelConfiguration'>) => Promise<ReturnTypeFrom<'deleteSlackChannelConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteSlackChannelConfiguration(params as any).promise();
  }

  deleteSlackWorkspaceConfiguration: (params: RawParamsFrom<'deleteSlackWorkspaceConfiguration'>) => Promise<ReturnTypeFrom<'deleteSlackWorkspaceConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteSlackWorkspaceConfiguration(params as any).promise();
  }

  getAccountAlias: (params: RawParamsFrom<'getAccountAlias'>) => Promise<ReturnTypeFrom<'getAccountAlias'>>  = async params => {
  // undefined
    return this.client.getAccountAlias(params as any).promise();
  }

  listSlackChannelConfigurations: (params: RawParamsFrom<'listSlackChannelConfigurations'>) => Promise<ReturnTypeFrom<'listSlackChannelConfigurations'>>  = async params => {
  // {"inputToken":"nextToken","outputToken":"nextToken"}
    return this.client.listSlackChannelConfigurations(params as any).promise();
  }

  listSlackWorkspaceConfigurations: (params: RawParamsFrom<'listSlackWorkspaceConfigurations'>) => Promise<ReturnTypeFrom<'listSlackWorkspaceConfigurations'>>  = async params => {
  // {"inputToken":"nextToken","outputToken":"nextToken"}
    return this.client.listSlackWorkspaceConfigurations(params as any).promise();
  }

  putAccountAlias: (params: RawParamsFrom<'putAccountAlias'>) => Promise<ReturnTypeFrom<'putAccountAlias'>>  = async params => {
  // undefined
    return this.client.putAccountAlias(params as any).promise();
  }

  updateSlackChannelConfiguration: (params: RawParamsFrom<'updateSlackChannelConfiguration'>) => Promise<ReturnTypeFrom<'updateSlackChannelConfiguration'>>  = async params => {
  // undefined
    return this.client.updateSlackChannelConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSSupportApp): SupportApp {
    return new SupportApp(client) as any;
  }
  
  static client(options?: AWSSupportApp.Types.ClientConfiguration): SupportApp {
    return new SupportApp(new AWSSupportApp(options)) as any;
  }
}  
