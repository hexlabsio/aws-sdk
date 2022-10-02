import { Request, AppIntegrations as AWSAppIntegrations } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAppIntegrations> = AWSAppIntegrations[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAppIntegrations> = AWSAppIntegrations[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAppIntegrations[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAppIntegrations, Extras> = AWSAppIntegrations[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'app-integrations';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  createDataIntegration: FunctionTypeFrom<'createDataIntegration'>;

  createEventIntegration: FunctionTypeFrom<'createEventIntegration'>;

  deleteDataIntegration: FunctionTypeFrom<'deleteDataIntegration'>;

  deleteEventIntegration: FunctionTypeFrom<'deleteEventIntegration'>;

  getDataIntegration: FunctionTypeFrom<'getDataIntegration'>;

  getEventIntegration: FunctionTypeFrom<'getEventIntegration'>;

  listDataIntegrationAssociations: FunctionTypeFrom<'listDataIntegrationAssociations'>;

  listDataIntegrations: FunctionTypeFrom<'listDataIntegrations'>;

  listEventIntegrationAssociations: FunctionTypeFrom<'listEventIntegrationAssociations'>;

  listEventIntegrations: FunctionTypeFrom<'listEventIntegrations'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDataIntegration: FunctionTypeFrom<'updateDataIntegration'>;

  updateEventIntegration: FunctionTypeFrom<'updateEventIntegration'>
}
 
export class AppIntegrations implements ClientType {
  private constructor(private readonly client: AWSAppIntegrations) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'app-integrations';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async createDataIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.createDataIntegration(...args).promise()
  }

  async createEventIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.createEventIntegration(...args).promise()
  }

  async deleteDataIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataIntegration(...args).promise()
  }

  async deleteEventIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventIntegration(...args).promise()
  }

  async getDataIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.getDataIntegration(...args).promise()
  }

  async getEventIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.getEventIntegration(...args).promise()
  }

  async listDataIntegrationAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.listDataIntegrationAssociations(...args).promise()
  }

  async listDataIntegrations(...args: any): Promise<any> {
  // undefined
    return this.client.listDataIntegrations(...args).promise()
  }

  async listEventIntegrationAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.listEventIntegrationAssociations(...args).promise()
  }

  async listEventIntegrations(...args: any): Promise<any> {
  // undefined
    return this.client.listEventIntegrations(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDataIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataIntegration(...args).promise()
  }

  async updateEventIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventIntegration(...args).promise()
  }
  
  static fromClient(client: AWSAppIntegrations): ClientType {
    return new AppIntegrations(client) as any;
  }
  
  static client(options?: AWSAppIntegrations.Types.ClientConfiguration): ClientType {
    return new AppIntegrations(new AWSAppIntegrations(options)) as any;
  }
}  
