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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'supportapp';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listSlackChannelConfigurations","listSlackWorkspaceConfigurations"];
    
  createSlackChannelConfiguration: FunctionTypeFrom<'createSlackChannelConfiguration'>;

  deleteAccountAlias: FunctionTypeFrom<'deleteAccountAlias'>;

  deleteSlackChannelConfiguration: FunctionTypeFrom<'deleteSlackChannelConfiguration'>;

  deleteSlackWorkspaceConfiguration: FunctionTypeFrom<'deleteSlackWorkspaceConfiguration'>;

  getAccountAlias: FunctionTypeFrom<'getAccountAlias'>;

  listSlackChannelConfigurations: FunctionTypeFrom<'listSlackChannelConfigurations'>;

  listSlackWorkspaceConfigurations: FunctionTypeFrom<'listSlackWorkspaceConfigurations'>;

  putAccountAlias: FunctionTypeFrom<'putAccountAlias'>;

  updateSlackChannelConfiguration: FunctionTypeFrom<'updateSlackChannelConfiguration'>
}
 
export class SupportApp implements ClientType {
  private constructor(private readonly client: AWSSupportApp) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'supportapp';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listSlackChannelConfigurations","listSlackWorkspaceConfigurations"] as const;
  
  async createSlackChannelConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createSlackChannelConfiguration(...args).promise()
  }

  async deleteAccountAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccountAlias(...args).promise()
  }

  async deleteSlackChannelConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSlackChannelConfiguration(...args).promise()
  }

  async deleteSlackWorkspaceConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSlackWorkspaceConfiguration(...args).promise()
  }

  async getAccountAlias(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountAlias(...args).promise()
  }

  async listSlackChannelConfigurations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","outputToken":"nextToken"}
    return this.client.listSlackChannelConfigurations(...args).promise()
  }

  async listSlackWorkspaceConfigurations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","outputToken":"nextToken"}
    return this.client.listSlackWorkspaceConfigurations(...args).promise()
  }

  async putAccountAlias(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountAlias(...args).promise()
  }

  async updateSlackChannelConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateSlackChannelConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSSupportApp): ClientType {
    return new SupportApp(client) as any;
  }
  
  static client(options?: AWSSupportApp.Types.ClientConfiguration): ClientType {
    return new SupportApp(new AWSSupportApp(options)) as any;
  }
}  
