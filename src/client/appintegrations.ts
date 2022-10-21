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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAppIntegrations> = AWSAppIntegrations[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AppIntegrations {
  private constructor(private readonly client: AWSAppIntegrations) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'app-integrations' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  createDataIntegration: (params: RawParamsFrom<'createDataIntegration'>) => Promise<ReturnTypeFrom<'createDataIntegration'>>  = async params => {
  // undefined
    return this.client.createDataIntegration(params as any).promise();
  }

  createEventIntegration: (params: RawParamsFrom<'createEventIntegration'>) => Promise<ReturnTypeFrom<'createEventIntegration'>>  = async params => {
  // undefined
    return this.client.createEventIntegration(params as any).promise();
  }

  deleteDataIntegration: (params: RawParamsFrom<'deleteDataIntegration'>) => Promise<ReturnTypeFrom<'deleteDataIntegration'>>  = async params => {
  // undefined
    return this.client.deleteDataIntegration(params as any).promise();
  }

  deleteEventIntegration: (params: RawParamsFrom<'deleteEventIntegration'>) => Promise<ReturnTypeFrom<'deleteEventIntegration'>>  = async params => {
  // undefined
    return this.client.deleteEventIntegration(params as any).promise();
  }

  getDataIntegration: (params: RawParamsFrom<'getDataIntegration'>) => Promise<ReturnTypeFrom<'getDataIntegration'>>  = async params => {
  // undefined
    return this.client.getDataIntegration(params as any).promise();
  }

  getEventIntegration: (params: RawParamsFrom<'getEventIntegration'>) => Promise<ReturnTypeFrom<'getEventIntegration'>>  = async params => {
  // undefined
    return this.client.getEventIntegration(params as any).promise();
  }

  listDataIntegrationAssociations: (params: RawParamsFrom<'listDataIntegrationAssociations'>) => Promise<ReturnTypeFrom<'listDataIntegrationAssociations'>>  = async params => {
  // undefined
    return this.client.listDataIntegrationAssociations(params as any).promise();
  }

  listDataIntegrations: (params: RawParamsFrom<'listDataIntegrations'>) => Promise<ReturnTypeFrom<'listDataIntegrations'>>  = async params => {
  // undefined
    return this.client.listDataIntegrations(params as any).promise();
  }

  listEventIntegrationAssociations: (params: RawParamsFrom<'listEventIntegrationAssociations'>) => Promise<ReturnTypeFrom<'listEventIntegrationAssociations'>>  = async params => {
  // undefined
    return this.client.listEventIntegrationAssociations(params as any).promise();
  }

  listEventIntegrations: (params: RawParamsFrom<'listEventIntegrations'>) => Promise<ReturnTypeFrom<'listEventIntegrations'>>  = async params => {
  // undefined
    return this.client.listEventIntegrations(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDataIntegration: (params: RawParamsFrom<'updateDataIntegration'>) => Promise<ReturnTypeFrom<'updateDataIntegration'>>  = async params => {
  // undefined
    return this.client.updateDataIntegration(params as any).promise();
  }

  updateEventIntegration: (params: RawParamsFrom<'updateEventIntegration'>) => Promise<ReturnTypeFrom<'updateEventIntegration'>>  = async params => {
  // undefined
    return this.client.updateEventIntegration(params as any).promise();
  }
  
  static fromClient(client: AWSAppIntegrations): AppIntegrations {
    return new AppIntegrations(client) as any;
  }
  
  static client(options?: AWSAppIntegrations.Types.ClientConfiguration): AppIntegrations {
    return new AppIntegrations(new AWSAppIntegrations(options)) as any;
  }
}  
