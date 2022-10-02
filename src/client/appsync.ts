import { Request, AppSync as AWSAppSync } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAppSync> = AWSAppSync[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAppSync> = AWSAppSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAppSync[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAppSync, Extras> = AWSAppSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'appsync';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly [];
    
  associateApi: FunctionTypeFrom<'associateApi'>;

  createApiCache: FunctionTypeFrom<'createApiCache'>;

  createApiKey: FunctionTypeFrom<'createApiKey'>;

  createDataSource: FunctionTypeFrom<'createDataSource'>;

  createDomainName: FunctionTypeFrom<'createDomainName'>;

  createFunction: FunctionTypeFrom<'createFunction'>;

  createGraphqlApi: FunctionTypeFrom<'createGraphqlApi'>;

  createResolver: FunctionTypeFrom<'createResolver'>;

  createType: FunctionTypeFrom<'createType'>;

  deleteApiCache: FunctionTypeFrom<'deleteApiCache'>;

  deleteApiKey: FunctionTypeFrom<'deleteApiKey'>;

  deleteDataSource: FunctionTypeFrom<'deleteDataSource'>;

  deleteDomainName: FunctionTypeFrom<'deleteDomainName'>;

  deleteFunction: FunctionTypeFrom<'deleteFunction'>;

  deleteGraphqlApi: FunctionTypeFrom<'deleteGraphqlApi'>;

  deleteResolver: FunctionTypeFrom<'deleteResolver'>;

  deleteType: FunctionTypeFrom<'deleteType'>;

  disassociateApi: FunctionTypeFrom<'disassociateApi'>;

  evaluateMappingTemplate: FunctionTypeFrom<'evaluateMappingTemplate'>;

  flushApiCache: FunctionTypeFrom<'flushApiCache'>;

  getApiAssociation: FunctionTypeFrom<'getApiAssociation'>;

  getApiCache: FunctionTypeFrom<'getApiCache'>;

  getDataSource: FunctionTypeFrom<'getDataSource'>;

  getDomainName: FunctionTypeFrom<'getDomainName'>;

  getFunction: FunctionTypeFrom<'getFunction'>;

  getGraphqlApi: FunctionTypeFrom<'getGraphqlApi'>;

  getIntrospectionSchema: FunctionTypeFrom<'getIntrospectionSchema'>;

  getResolver: FunctionTypeFrom<'getResolver'>;

  getSchemaCreationStatus: FunctionTypeFrom<'getSchemaCreationStatus'>;

  getType: FunctionTypeFrom<'getType'>;

  listApiKeys: FunctionTypeFrom<'listApiKeys'>;

  listDataSources: FunctionTypeFrom<'listDataSources'>;

  listDomainNames: FunctionTypeFrom<'listDomainNames'>;

  listFunctions: FunctionTypeFrom<'listFunctions'>;

  listGraphqlApis: FunctionTypeFrom<'listGraphqlApis'>;

  listResolvers: FunctionTypeFrom<'listResolvers'>;

  listResolversByFunction: FunctionTypeFrom<'listResolversByFunction'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTypes: FunctionTypeFrom<'listTypes'>;

  startSchemaCreation: FunctionTypeFrom<'startSchemaCreation'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApiCache: FunctionTypeFrom<'updateApiCache'>;

  updateApiKey: FunctionTypeFrom<'updateApiKey'>;

  updateDataSource: FunctionTypeFrom<'updateDataSource'>;

  updateDomainName: FunctionTypeFrom<'updateDomainName'>;

  updateFunction: FunctionTypeFrom<'updateFunction'>;

  updateGraphqlApi: FunctionTypeFrom<'updateGraphqlApi'>;

  updateResolver: FunctionTypeFrom<'updateResolver'>;

  updateType: FunctionTypeFrom<'updateType'>
}
 
export class AppSync implements ClientType {
  private constructor(private readonly client: AWSAppSync) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appsync';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = [] as const;
  
  async associateApi(...args: any): Promise<any> {
  // undefined
    return this.client.associateApi(...args).promise()
  }

  async createApiCache(...args: any): Promise<any> {
  // undefined
    return this.client.createApiCache(...args).promise()
  }

  async createApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.createApiKey(...args).promise()
  }

  async createDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSource(...args).promise()
  }

  async createDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.createDomainName(...args).promise()
  }

  async createFunction(...args: any): Promise<any> {
  // undefined
    return this.client.createFunction(...args).promise()
  }

  async createGraphqlApi(...args: any): Promise<any> {
  // undefined
    return this.client.createGraphqlApi(...args).promise()
  }

  async createResolver(...args: any): Promise<any> {
  // undefined
    return this.client.createResolver(...args).promise()
  }

  async createType(...args: any): Promise<any> {
  // undefined
    return this.client.createType(...args).promise()
  }

  async deleteApiCache(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApiCache(...args).promise()
  }

  async deleteApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApiKey(...args).promise()
  }

  async deleteDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataSource(...args).promise()
  }

  async deleteDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomainName(...args).promise()
  }

  async deleteFunction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFunction(...args).promise()
  }

  async deleteGraphqlApi(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGraphqlApi(...args).promise()
  }

  async deleteResolver(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResolver(...args).promise()
  }

  async deleteType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteType(...args).promise()
  }

  async disassociateApi(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateApi(...args).promise()
  }

  async evaluateMappingTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.evaluateMappingTemplate(...args).promise()
  }

  async flushApiCache(...args: any): Promise<any> {
  // undefined
    return this.client.flushApiCache(...args).promise()
  }

  async getApiAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.getApiAssociation(...args).promise()
  }

  async getApiCache(...args: any): Promise<any> {
  // undefined
    return this.client.getApiCache(...args).promise()
  }

  async getDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.getDataSource(...args).promise()
  }

  async getDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainName(...args).promise()
  }

  async getFunction(...args: any): Promise<any> {
  // undefined
    return this.client.getFunction(...args).promise()
  }

  async getGraphqlApi(...args: any): Promise<any> {
  // undefined
    return this.client.getGraphqlApi(...args).promise()
  }

  async getIntrospectionSchema(...args: any): Promise<any> {
  // undefined
    return this.client.getIntrospectionSchema(...args).promise()
  }

  async getResolver(...args: any): Promise<any> {
  // undefined
    return this.client.getResolver(...args).promise()
  }

  async getSchemaCreationStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getSchemaCreationStatus(...args).promise()
  }

  async getType(...args: any): Promise<any> {
  // undefined
    return this.client.getType(...args).promise()
  }

  async listApiKeys(...args: any): Promise<any> {
  // undefined
    return this.client.listApiKeys(...args).promise()
  }

  async listDataSources(...args: any): Promise<any> {
  // undefined
    return this.client.listDataSources(...args).promise()
  }

  async listDomainNames(...args: any): Promise<any> {
  // undefined
    return this.client.listDomainNames(...args).promise()
  }

  async listFunctions(...args: any): Promise<any> {
  // undefined
    return this.client.listFunctions(...args).promise()
  }

  async listGraphqlApis(...args: any): Promise<any> {
  // undefined
    return this.client.listGraphqlApis(...args).promise()
  }

  async listResolvers(...args: any): Promise<any> {
  // undefined
    return this.client.listResolvers(...args).promise()
  }

  async listResolversByFunction(...args: any): Promise<any> {
  // undefined
    return this.client.listResolversByFunction(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTypes(...args: any): Promise<any> {
  // undefined
    return this.client.listTypes(...args).promise()
  }

  async startSchemaCreation(...args: any): Promise<any> {
  // undefined
    return this.client.startSchemaCreation(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApiCache(...args: any): Promise<any> {
  // undefined
    return this.client.updateApiCache(...args).promise()
  }

  async updateApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.updateApiKey(...args).promise()
  }

  async updateDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataSource(...args).promise()
  }

  async updateDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainName(...args).promise()
  }

  async updateFunction(...args: any): Promise<any> {
  // undefined
    return this.client.updateFunction(...args).promise()
  }

  async updateGraphqlApi(...args: any): Promise<any> {
  // undefined
    return this.client.updateGraphqlApi(...args).promise()
  }

  async updateResolver(...args: any): Promise<any> {
  // undefined
    return this.client.updateResolver(...args).promise()
  }

  async updateType(...args: any): Promise<any> {
  // undefined
    return this.client.updateType(...args).promise()
  }
  
  static fromClient(client: AWSAppSync): ClientType {
    return new AppSync(client) as any;
  }
  
  static client(options?: AWSAppSync.Types.ClientConfiguration): ClientType {
    return new AppSync(new AWSAppSync(options)) as any;
  }
}  
