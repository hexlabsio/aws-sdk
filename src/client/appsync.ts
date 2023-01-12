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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAppSync> = AWSAppSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AppSync {
  private constructor(private readonly client: AWSAppSync) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appsync' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = [] as const;
  
  associateApi: (params: RawParamsFrom<'associateApi'>) => Promise<ReturnTypeFrom<'associateApi'>>  = async params => {
  // undefined
    return this.client.associateApi(params as any).promise();
  }

  createApiCache: (params: RawParamsFrom<'createApiCache'>) => Promise<ReturnTypeFrom<'createApiCache'>>  = async params => {
  // undefined
    return this.client.createApiCache(params as any).promise();
  }

  createApiKey: (params: RawParamsFrom<'createApiKey'>) => Promise<ReturnTypeFrom<'createApiKey'>>  = async params => {
  // undefined
    return this.client.createApiKey(params as any).promise();
  }

  createDataSource: (params: RawParamsFrom<'createDataSource'>) => Promise<ReturnTypeFrom<'createDataSource'>>  = async params => {
  // undefined
    return this.client.createDataSource(params as any).promise();
  }

  createDomainName: (params: RawParamsFrom<'createDomainName'>) => Promise<ReturnTypeFrom<'createDomainName'>>  = async params => {
  // undefined
    return this.client.createDomainName(params as any).promise();
  }

  createFunction: (params: RawParamsFrom<'createFunction'>) => Promise<ReturnTypeFrom<'createFunction'>>  = async params => {
  // undefined
    return this.client.createFunction(params as any).promise();
  }

  createGraphqlApi: (params: RawParamsFrom<'createGraphqlApi'>) => Promise<ReturnTypeFrom<'createGraphqlApi'>>  = async params => {
  // undefined
    return this.client.createGraphqlApi(params as any).promise();
  }

  createResolver: (params: RawParamsFrom<'createResolver'>) => Promise<ReturnTypeFrom<'createResolver'>>  = async params => {
  // undefined
    return this.client.createResolver(params as any).promise();
  }

  createType: (params: RawParamsFrom<'createType'>) => Promise<ReturnTypeFrom<'createType'>>  = async params => {
  // undefined
    return this.client.createType(params as any).promise();
  }

  deleteApiCache: (params: RawParamsFrom<'deleteApiCache'>) => Promise<ReturnTypeFrom<'deleteApiCache'>>  = async params => {
  // undefined
    return this.client.deleteApiCache(params as any).promise();
  }

  deleteApiKey: (params: RawParamsFrom<'deleteApiKey'>) => Promise<ReturnTypeFrom<'deleteApiKey'>>  = async params => {
  // undefined
    return this.client.deleteApiKey(params as any).promise();
  }

  deleteDataSource: (params: RawParamsFrom<'deleteDataSource'>) => Promise<ReturnTypeFrom<'deleteDataSource'>>  = async params => {
  // undefined
    return this.client.deleteDataSource(params as any).promise();
  }

  deleteDomainName: (params: RawParamsFrom<'deleteDomainName'>) => Promise<ReturnTypeFrom<'deleteDomainName'>>  = async params => {
  // undefined
    return this.client.deleteDomainName(params as any).promise();
  }

  deleteFunction: (params: RawParamsFrom<'deleteFunction'>) => Promise<ReturnTypeFrom<'deleteFunction'>>  = async params => {
  // undefined
    return this.client.deleteFunction(params as any).promise();
  }

  deleteGraphqlApi: (params: RawParamsFrom<'deleteGraphqlApi'>) => Promise<ReturnTypeFrom<'deleteGraphqlApi'>>  = async params => {
  // undefined
    return this.client.deleteGraphqlApi(params as any).promise();
  }

  deleteResolver: (params: RawParamsFrom<'deleteResolver'>) => Promise<ReturnTypeFrom<'deleteResolver'>>  = async params => {
  // undefined
    return this.client.deleteResolver(params as any).promise();
  }

  deleteType: (params: RawParamsFrom<'deleteType'>) => Promise<ReturnTypeFrom<'deleteType'>>  = async params => {
  // undefined
    return this.client.deleteType(params as any).promise();
  }

  disassociateApi: (params: RawParamsFrom<'disassociateApi'>) => Promise<ReturnTypeFrom<'disassociateApi'>>  = async params => {
  // undefined
    return this.client.disassociateApi(params as any).promise();
  }

  evaluateCode: (params: RawParamsFrom<'evaluateCode'>) => Promise<ReturnTypeFrom<'evaluateCode'>>  = async params => {
  // undefined
    return this.client.evaluateCode(params as any).promise();
  }

  evaluateMappingTemplate: (params: RawParamsFrom<'evaluateMappingTemplate'>) => Promise<ReturnTypeFrom<'evaluateMappingTemplate'>>  = async params => {
  // undefined
    return this.client.evaluateMappingTemplate(params as any).promise();
  }

  flushApiCache: (params: RawParamsFrom<'flushApiCache'>) => Promise<ReturnTypeFrom<'flushApiCache'>>  = async params => {
  // undefined
    return this.client.flushApiCache(params as any).promise();
  }

  getApiAssociation: (params: RawParamsFrom<'getApiAssociation'>) => Promise<ReturnTypeFrom<'getApiAssociation'>>  = async params => {
  // undefined
    return this.client.getApiAssociation(params as any).promise();
  }

  getApiCache: (params: RawParamsFrom<'getApiCache'>) => Promise<ReturnTypeFrom<'getApiCache'>>  = async params => {
  // undefined
    return this.client.getApiCache(params as any).promise();
  }

  getDataSource: (params: RawParamsFrom<'getDataSource'>) => Promise<ReturnTypeFrom<'getDataSource'>>  = async params => {
  // undefined
    return this.client.getDataSource(params as any).promise();
  }

  getDomainName: (params: RawParamsFrom<'getDomainName'>) => Promise<ReturnTypeFrom<'getDomainName'>>  = async params => {
  // undefined
    return this.client.getDomainName(params as any).promise();
  }

  getFunction: (params: RawParamsFrom<'getFunction'>) => Promise<ReturnTypeFrom<'getFunction'>>  = async params => {
  // undefined
    return this.client.getFunction(params as any).promise();
  }

  getGraphqlApi: (params: RawParamsFrom<'getGraphqlApi'>) => Promise<ReturnTypeFrom<'getGraphqlApi'>>  = async params => {
  // undefined
    return this.client.getGraphqlApi(params as any).promise();
  }

  getIntrospectionSchema: (params: RawParamsFrom<'getIntrospectionSchema'>) => Promise<ReturnTypeFrom<'getIntrospectionSchema'>>  = async params => {
  // undefined
    return this.client.getIntrospectionSchema(params as any).promise();
  }

  getResolver: (params: RawParamsFrom<'getResolver'>) => Promise<ReturnTypeFrom<'getResolver'>>  = async params => {
  // undefined
    return this.client.getResolver(params as any).promise();
  }

  getSchemaCreationStatus: (params: RawParamsFrom<'getSchemaCreationStatus'>) => Promise<ReturnTypeFrom<'getSchemaCreationStatus'>>  = async params => {
  // undefined
    return this.client.getSchemaCreationStatus(params as any).promise();
  }

  getType: (params: RawParamsFrom<'getType'>) => Promise<ReturnTypeFrom<'getType'>>  = async params => {
  // undefined
    return this.client.getType(params as any).promise();
  }

  listApiKeys: (params: RawParamsFrom<'listApiKeys'>) => Promise<ReturnTypeFrom<'listApiKeys'>>  = async params => {
  // undefined
    return this.client.listApiKeys(params as any).promise();
  }

  listDataSources: (params: RawParamsFrom<'listDataSources'>) => Promise<ReturnTypeFrom<'listDataSources'>>  = async params => {
  // undefined
    return this.client.listDataSources(params as any).promise();
  }

  listDomainNames: (params: RawParamsFrom<'listDomainNames'>) => Promise<ReturnTypeFrom<'listDomainNames'>>  = async params => {
  // undefined
    return this.client.listDomainNames(params as any).promise();
  }

  listFunctions: (params: RawParamsFrom<'listFunctions'>) => Promise<ReturnTypeFrom<'listFunctions'>>  = async params => {
  // undefined
    return this.client.listFunctions(params as any).promise();
  }

  listGraphqlApis: (params: RawParamsFrom<'listGraphqlApis'>) => Promise<ReturnTypeFrom<'listGraphqlApis'>>  = async params => {
  // undefined
    return this.client.listGraphqlApis(params as any).promise();
  }

  listResolvers: (params: RawParamsFrom<'listResolvers'>) => Promise<ReturnTypeFrom<'listResolvers'>>  = async params => {
  // undefined
    return this.client.listResolvers(params as any).promise();
  }

  listResolversByFunction: (params: RawParamsFrom<'listResolversByFunction'>) => Promise<ReturnTypeFrom<'listResolversByFunction'>>  = async params => {
  // undefined
    return this.client.listResolversByFunction(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTypes: (params: RawParamsFrom<'listTypes'>) => Promise<ReturnTypeFrom<'listTypes'>>  = async params => {
  // undefined
    return this.client.listTypes(params as any).promise();
  }

  startSchemaCreation: (params: RawParamsFrom<'startSchemaCreation'>) => Promise<ReturnTypeFrom<'startSchemaCreation'>>  = async params => {
  // undefined
    return this.client.startSchemaCreation(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApiCache: (params: RawParamsFrom<'updateApiCache'>) => Promise<ReturnTypeFrom<'updateApiCache'>>  = async params => {
  // undefined
    return this.client.updateApiCache(params as any).promise();
  }

  updateApiKey: (params: RawParamsFrom<'updateApiKey'>) => Promise<ReturnTypeFrom<'updateApiKey'>>  = async params => {
  // undefined
    return this.client.updateApiKey(params as any).promise();
  }

  updateDataSource: (params: RawParamsFrom<'updateDataSource'>) => Promise<ReturnTypeFrom<'updateDataSource'>>  = async params => {
  // undefined
    return this.client.updateDataSource(params as any).promise();
  }

  updateDomainName: (params: RawParamsFrom<'updateDomainName'>) => Promise<ReturnTypeFrom<'updateDomainName'>>  = async params => {
  // undefined
    return this.client.updateDomainName(params as any).promise();
  }

  updateFunction: (params: RawParamsFrom<'updateFunction'>) => Promise<ReturnTypeFrom<'updateFunction'>>  = async params => {
  // undefined
    return this.client.updateFunction(params as any).promise();
  }

  updateGraphqlApi: (params: RawParamsFrom<'updateGraphqlApi'>) => Promise<ReturnTypeFrom<'updateGraphqlApi'>>  = async params => {
  // undefined
    return this.client.updateGraphqlApi(params as any).promise();
  }

  updateResolver: (params: RawParamsFrom<'updateResolver'>) => Promise<ReturnTypeFrom<'updateResolver'>>  = async params => {
  // undefined
    return this.client.updateResolver(params as any).promise();
  }

  updateType: (params: RawParamsFrom<'updateType'>) => Promise<ReturnTypeFrom<'updateType'>>  = async params => {
  // undefined
    return this.client.updateType(params as any).promise();
  }
  
  static fromClient(client: AWSAppSync): AppSync {
    return new AppSync(client) as any;
  }
  
  static client(options?: AWSAppSync.Types.ClientConfiguration): AppSync {
    return new AppSync(new AWSAppSync(options)) as any;
  }
}  
