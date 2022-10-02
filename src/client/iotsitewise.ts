import { Request, IoTSiteWise as AWSIoTSiteWise } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTSiteWise> = AWSIoTSiteWise[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTSiteWise> = AWSIoTSiteWise[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTSiteWise[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTSiteWise, Extras> = AWSIoTSiteWise[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iotsitewise';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly ["getAssetPropertyValueHistory","listAccessPolicies","listAssetModels","listAssets","listBulkImportJobs","listGateways","listPortals","listTimeSeries"];
    
  associateAssets: FunctionTypeFrom<'associateAssets'>;

  associateTimeSeriesToAssetProperty: FunctionTypeFrom<'associateTimeSeriesToAssetProperty'>;

  batchAssociateProjectAssets: FunctionTypeFrom<'batchAssociateProjectAssets'>;

  batchDisassociateProjectAssets: FunctionTypeFrom<'batchDisassociateProjectAssets'>;

  batchGetAssetPropertyAggregates: FunctionTypeFrom<'batchGetAssetPropertyAggregates'>;

  batchGetAssetPropertyValue: FunctionTypeFrom<'batchGetAssetPropertyValue'>;

  batchGetAssetPropertyValueHistory: FunctionTypeFrom<'batchGetAssetPropertyValueHistory'>;

  batchPutAssetPropertyValue: FunctionTypeFrom<'batchPutAssetPropertyValue'>;

  createAccessPolicy: FunctionTypeFrom<'createAccessPolicy'>;

  createAsset: FunctionTypeFrom<'createAsset'>;

  createAssetModel: FunctionTypeFrom<'createAssetModel'>;

  createBulkImportJob: FunctionTypeFrom<'createBulkImportJob'>;

  createDashboard: FunctionTypeFrom<'createDashboard'>;

  createGateway: FunctionTypeFrom<'createGateway'>;

  createPortal: FunctionTypeFrom<'createPortal'>;

  createProject: FunctionTypeFrom<'createProject'>;

  deleteAccessPolicy: FunctionTypeFrom<'deleteAccessPolicy'>;

  deleteAsset: FunctionTypeFrom<'deleteAsset'>;

  deleteAssetModel: FunctionTypeFrom<'deleteAssetModel'>;

  deleteDashboard: FunctionTypeFrom<'deleteDashboard'>;

  deleteGateway: FunctionTypeFrom<'deleteGateway'>;

  deletePortal: FunctionTypeFrom<'deletePortal'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  deleteTimeSeries: FunctionTypeFrom<'deleteTimeSeries'>;

  describeAccessPolicy: FunctionTypeFrom<'describeAccessPolicy'>;

  describeAsset: FunctionTypeFrom<'describeAsset'>;

  describeAssetModel: FunctionTypeFrom<'describeAssetModel'>;

  describeAssetProperty: FunctionTypeFrom<'describeAssetProperty'>;

  describeBulkImportJob: FunctionTypeFrom<'describeBulkImportJob'>;

  describeDashboard: FunctionTypeFrom<'describeDashboard'>;

  describeDefaultEncryptionConfiguration: FunctionTypeFrom<'describeDefaultEncryptionConfiguration'>;

  describeGateway: FunctionTypeFrom<'describeGateway'>;

  describeGatewayCapabilityConfiguration: FunctionTypeFrom<'describeGatewayCapabilityConfiguration'>;

  describeLoggingOptions: FunctionTypeFrom<'describeLoggingOptions'>;

  describePortal: FunctionTypeFrom<'describePortal'>;

  describeProject: FunctionTypeFrom<'describeProject'>;

  describeStorageConfiguration: FunctionTypeFrom<'describeStorageConfiguration'>;

  describeTimeSeries: FunctionTypeFrom<'describeTimeSeries'>;

  disassociateAssets: FunctionTypeFrom<'disassociateAssets'>;

  disassociateTimeSeriesFromAssetProperty: FunctionTypeFrom<'disassociateTimeSeriesFromAssetProperty'>;

  getAssetPropertyAggregates(params: { [K in keyof Omit<ParamsFrom<'getAssetPropertyAggregates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getAssetPropertyAggregates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getAssetPropertyAggregates'>]-?: ReturnTypeFrom<'getAssetPropertyAggregates'>[K]}['aggregatedValues'] }>
  ;

  getAssetPropertyValue: FunctionTypeFrom<'getAssetPropertyValue'>;

  getAssetPropertyValueHistory(params: { [K in keyof Omit<ParamsFrom<'getAssetPropertyValueHistory', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getAssetPropertyValueHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getAssetPropertyValueHistory'>]-?: ReturnTypeFrom<'getAssetPropertyValueHistory'>[K]}['assetPropertyValueHistory'] }>
  getAssetPropertyValueHistory(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getAssetPropertyValueHistory'>]-?: ReturnTypeFrom<'getAssetPropertyValueHistory'>[K]}['assetPropertyValueHistory'] }>;

  getInterpolatedAssetPropertyValues(params: { [K in keyof Omit<ParamsFrom<'getInterpolatedAssetPropertyValues', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getInterpolatedAssetPropertyValues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getInterpolatedAssetPropertyValues'>]-?: ReturnTypeFrom<'getInterpolatedAssetPropertyValues'>[K]}['interpolatedAssetPropertyValues'] }>
  ;

  listAccessPolicies(params: { [K in keyof Omit<ParamsFrom<'listAccessPolicies', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAccessPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccessPolicies'>]-?: ReturnTypeFrom<'listAccessPolicies'>[K]}['accessPolicySummaries'] }>
  listAccessPolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccessPolicies'>]-?: ReturnTypeFrom<'listAccessPolicies'>[K]}['accessPolicySummaries'] }>;

  listAssetModels(params: { [K in keyof Omit<ParamsFrom<'listAssetModels', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAssetModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssetModels'>]-?: ReturnTypeFrom<'listAssetModels'>[K]}['assetModelSummaries'] }>
  listAssetModels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssetModels'>]-?: ReturnTypeFrom<'listAssetModels'>[K]}['assetModelSummaries'] }>;

  listAssetRelationships(params: { [K in keyof Omit<ParamsFrom<'listAssetRelationships', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAssetRelationships', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssetRelationships'>]-?: ReturnTypeFrom<'listAssetRelationships'>[K]}['assetRelationshipSummaries'] }>
  ;

  listAssets(params: { [K in keyof Omit<ParamsFrom<'listAssets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssets'>]-?: ReturnTypeFrom<'listAssets'>[K]}['assetSummaries'] }>
  listAssets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssets'>]-?: ReturnTypeFrom<'listAssets'>[K]}['assetSummaries'] }>;

  listAssociatedAssets(params: { [K in keyof Omit<ParamsFrom<'listAssociatedAssets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAssociatedAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssociatedAssets'>]-?: ReturnTypeFrom<'listAssociatedAssets'>[K]}['assetSummaries'] }>
  ;

  listBulkImportJobs(params: { [K in keyof Omit<ParamsFrom<'listBulkImportJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listBulkImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBulkImportJobs'>]-?: ReturnTypeFrom<'listBulkImportJobs'>[K]}['jobSummaries'] }>
  listBulkImportJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBulkImportJobs'>]-?: ReturnTypeFrom<'listBulkImportJobs'>[K]}['jobSummaries'] }>;

  listDashboards(params: { [K in keyof Omit<ParamsFrom<'listDashboards', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDashboards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDashboards'>]-?: ReturnTypeFrom<'listDashboards'>[K]}['dashboardSummaries'] }>
  ;

  listGateways(params: { [K in keyof Omit<ParamsFrom<'listGateways', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['gatewaySummaries'] }>
  listGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['gatewaySummaries'] }>;

  listPortals(params: { [K in keyof Omit<ParamsFrom<'listPortals', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPortals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPortals'>]-?: ReturnTypeFrom<'listPortals'>[K]}['portalSummaries'] }>
  listPortals(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPortals'>]-?: ReturnTypeFrom<'listPortals'>[K]}['portalSummaries'] }>;

  listProjectAssets(params: { [K in keyof Omit<ParamsFrom<'listProjectAssets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listProjectAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjectAssets'>]-?: ReturnTypeFrom<'listProjectAssets'>[K]}['assetIds'] }>
  ;

  listProjects(params: { [K in keyof Omit<ParamsFrom<'listProjects', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projectSummaries'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTimeSeries(params: { [K in keyof Omit<ParamsFrom<'listTimeSeries', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTimeSeries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTimeSeries'>]-?: ReturnTypeFrom<'listTimeSeries'>[K]}['TimeSeriesSummaries'] }>
  listTimeSeries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTimeSeries'>]-?: ReturnTypeFrom<'listTimeSeries'>[K]}['TimeSeriesSummaries'] }>;

  putDefaultEncryptionConfiguration: FunctionTypeFrom<'putDefaultEncryptionConfiguration'>;

  putLoggingOptions: FunctionTypeFrom<'putLoggingOptions'>;

  putStorageConfiguration: FunctionTypeFrom<'putStorageConfiguration'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccessPolicy: FunctionTypeFrom<'updateAccessPolicy'>;

  updateAsset: FunctionTypeFrom<'updateAsset'>;

  updateAssetModel: FunctionTypeFrom<'updateAssetModel'>;

  updateAssetProperty: FunctionTypeFrom<'updateAssetProperty'>;

  updateDashboard: FunctionTypeFrom<'updateDashboard'>;

  updateGateway: FunctionTypeFrom<'updateGateway'>;

  updateGatewayCapabilityConfiguration: FunctionTypeFrom<'updateGatewayCapabilityConfiguration'>;

  updatePortal: FunctionTypeFrom<'updatePortal'>;

  updateProject: FunctionTypeFrom<'updateProject'>
}
 
export class IoTSiteWise implements ClientType {
  private constructor(private readonly client: AWSIoTSiteWise) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotsitewise';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = ["getAssetPropertyValueHistory","listAccessPolicies","listAssetModels","listAssets","listBulkImportJobs","listGateways","listPortals","listTimeSeries"] as const;
  
  async associateAssets(...args: any): Promise<any> {
  // undefined
    return this.client.associateAssets(...args).promise()
  }

  async associateTimeSeriesToAssetProperty(...args: any): Promise<any> {
  // undefined
    return this.client.associateTimeSeriesToAssetProperty(...args).promise()
  }

  async batchAssociateProjectAssets(...args: any): Promise<any> {
  // undefined
    return this.client.batchAssociateProjectAssets(...args).promise()
  }

  async batchDisassociateProjectAssets(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisassociateProjectAssets(...args).promise()
  }

  async batchGetAssetPropertyAggregates(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.batchGetAssetPropertyAggregates(...args).promise()
  }

  async batchGetAssetPropertyValue(...args: any): Promise<any> {
  // {"inputToken":"nextToken","outputToken":"nextToken"}
    return this.client.batchGetAssetPropertyValue(...args).promise()
  }

  async batchGetAssetPropertyValueHistory(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.batchGetAssetPropertyValueHistory(...args).promise()
  }

  async batchPutAssetPropertyValue(...args: any): Promise<any> {
  // undefined
    return this.client.batchPutAssetPropertyValue(...args).promise()
  }

  async createAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createAccessPolicy(...args).promise()
  }

  async createAsset(...args: any): Promise<any> {
  // undefined
    return this.client.createAsset(...args).promise()
  }

  async createAssetModel(...args: any): Promise<any> {
  // undefined
    return this.client.createAssetModel(...args).promise()
  }

  async createBulkImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createBulkImportJob(...args).promise()
  }

  async createDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.createDashboard(...args).promise()
  }

  async createGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createGateway(...args).promise()
  }

  async createPortal(...args: any): Promise<any> {
  // undefined
    return this.client.createPortal(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async deleteAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessPolicy(...args).promise()
  }

  async deleteAsset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAsset(...args).promise()
  }

  async deleteAssetModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssetModel(...args).promise()
  }

  async deleteDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDashboard(...args).promise()
  }

  async deleteGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGateway(...args).promise()
  }

  async deletePortal(...args: any): Promise<any> {
  // undefined
    return this.client.deletePortal(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async deleteTimeSeries(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTimeSeries(...args).promise()
  }

  async describeAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccessPolicy(...args).promise()
  }

  async describeAsset(...args: any): Promise<any> {
  // undefined
    return this.client.describeAsset(...args).promise()
  }

  async describeAssetModel(...args: any): Promise<any> {
  // undefined
    return this.client.describeAssetModel(...args).promise()
  }

  async describeAssetProperty(...args: any): Promise<any> {
  // undefined
    return this.client.describeAssetProperty(...args).promise()
  }

  async describeBulkImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeBulkImportJob(...args).promise()
  }

  async describeDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.describeDashboard(...args).promise()
  }

  async describeDefaultEncryptionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeDefaultEncryptionConfiguration(...args).promise()
  }

  async describeGateway(...args: any): Promise<any> {
  // undefined
    return this.client.describeGateway(...args).promise()
  }

  async describeGatewayCapabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeGatewayCapabilityConfiguration(...args).promise()
  }

  async describeLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoggingOptions(...args).promise()
  }

  async describePortal(...args: any): Promise<any> {
  // undefined
    return this.client.describePortal(...args).promise()
  }

  async describeProject(...args: any): Promise<any> {
  // undefined
    return this.client.describeProject(...args).promise()
  }

  async describeStorageConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeStorageConfiguration(...args).promise()
  }

  async describeTimeSeries(...args: any): Promise<any> {
  // undefined
    return this.client.describeTimeSeries(...args).promise()
  }

  async disassociateAssets(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateAssets(...args).promise()
  }

  async disassociateTimeSeriesFromAssetProperty(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTimeSeriesFromAssetProperty(...args).promise()
  }

  async getAssetPropertyAggregates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"aggregatedValues"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getAssetPropertyAggregates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.aggregatedValues ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getAssetPropertyValue(...args: any): Promise<any> {
  // undefined
    return this.client.getAssetPropertyValue(...args).promise()
  }

  async getAssetPropertyValueHistory(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetPropertyValueHistory"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getAssetPropertyValueHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assetPropertyValueHistory ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getInterpolatedAssetPropertyValues(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"interpolatedAssetPropertyValues"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getInterpolatedAssetPropertyValues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.interpolatedAssetPropertyValues ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccessPolicies(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accessPolicySummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccessPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.accessPolicySummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssetModels(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetModelSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssetModels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assetModelSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssetRelationships(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetRelationshipSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssetRelationships(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assetRelationshipSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assetSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociatedAssets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssociatedAssets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assetSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBulkImportJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBulkImportJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDashboards(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dashboardSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDashboards(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.dashboardSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGateways(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"gatewaySummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.gatewaySummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPortals(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"portalSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPortals(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.portalSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjectAssets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjectAssets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assetIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"projectSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.projectSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTimeSeries(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"TimeSeriesSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTimeSeries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.TimeSeriesSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putDefaultEncryptionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putDefaultEncryptionConfiguration(...args).promise()
  }

  async putLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putLoggingOptions(...args).promise()
  }

  async putStorageConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putStorageConfiguration(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccessPolicy(...args).promise()
  }

  async updateAsset(...args: any): Promise<any> {
  // undefined
    return this.client.updateAsset(...args).promise()
  }

  async updateAssetModel(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssetModel(...args).promise()
  }

  async updateAssetProperty(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssetProperty(...args).promise()
  }

  async updateDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.updateDashboard(...args).promise()
  }

  async updateGateway(...args: any): Promise<any> {
  // undefined
    return this.client.updateGateway(...args).promise()
  }

  async updateGatewayCapabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateGatewayCapabilityConfiguration(...args).promise()
  }

  async updatePortal(...args: any): Promise<any> {
  // undefined
    return this.client.updatePortal(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }
  
  static fromClient(client: AWSIoTSiteWise): ClientType {
    return new IoTSiteWise(client) as any;
  }
  
  static client(options?: AWSIoTSiteWise.Types.ClientConfiguration): ClientType {
    return new IoTSiteWise(new AWSIoTSiteWise(options)) as any;
  }
}  
