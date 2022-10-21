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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTSiteWise> = AWSIoTSiteWise[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTSiteWise {
  private constructor(private readonly client: AWSIoTSiteWise) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotsitewise' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = ["getAssetPropertyValueHistory","listAccessPolicies","listAssetModels","listAssets","listBulkImportJobs","listGateways","listPortals","listTimeSeries"] as const;
  
  associateAssets: (params: RawParamsFrom<'associateAssets'>) => Promise<ReturnTypeFrom<'associateAssets'>>  = async params => {
  // undefined
    return this.client.associateAssets(params as any).promise();
  }

  associateTimeSeriesToAssetProperty: (params: RawParamsFrom<'associateTimeSeriesToAssetProperty'>) => Promise<ReturnTypeFrom<'associateTimeSeriesToAssetProperty'>>  = async params => {
  // undefined
    return this.client.associateTimeSeriesToAssetProperty(params as any).promise();
  }

  batchAssociateProjectAssets: (params: RawParamsFrom<'batchAssociateProjectAssets'>) => Promise<ReturnTypeFrom<'batchAssociateProjectAssets'>>  = async params => {
  // undefined
    return this.client.batchAssociateProjectAssets(params as any).promise();
  }

  batchDisassociateProjectAssets: (params: RawParamsFrom<'batchDisassociateProjectAssets'>) => Promise<ReturnTypeFrom<'batchDisassociateProjectAssets'>>  = async params => {
  // undefined
    return this.client.batchDisassociateProjectAssets(params as any).promise();
  }

  batchGetAssetPropertyAggregates: (params: RawParamsFrom<'batchGetAssetPropertyAggregates'>) => Promise<ReturnTypeFrom<'batchGetAssetPropertyAggregates'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.batchGetAssetPropertyAggregates(params as any).promise();
  }

  batchGetAssetPropertyValue: (params: RawParamsFrom<'batchGetAssetPropertyValue'>) => Promise<ReturnTypeFrom<'batchGetAssetPropertyValue'>>  = async params => {
  // {"inputToken":"nextToken","outputToken":"nextToken"}
    return this.client.batchGetAssetPropertyValue(params as any).promise();
  }

  batchGetAssetPropertyValueHistory: (params: RawParamsFrom<'batchGetAssetPropertyValueHistory'>) => Promise<ReturnTypeFrom<'batchGetAssetPropertyValueHistory'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.batchGetAssetPropertyValueHistory(params as any).promise();
  }

  batchPutAssetPropertyValue: (params: RawParamsFrom<'batchPutAssetPropertyValue'>) => Promise<ReturnTypeFrom<'batchPutAssetPropertyValue'>>  = async params => {
  // undefined
    return this.client.batchPutAssetPropertyValue(params as any).promise();
  }

  createAccessPolicy: (params: RawParamsFrom<'createAccessPolicy'>) => Promise<ReturnTypeFrom<'createAccessPolicy'>>  = async params => {
  // undefined
    return this.client.createAccessPolicy(params as any).promise();
  }

  createAsset: (params: RawParamsFrom<'createAsset'>) => Promise<ReturnTypeFrom<'createAsset'>>  = async params => {
  // undefined
    return this.client.createAsset(params as any).promise();
  }

  createAssetModel: (params: RawParamsFrom<'createAssetModel'>) => Promise<ReturnTypeFrom<'createAssetModel'>>  = async params => {
  // undefined
    return this.client.createAssetModel(params as any).promise();
  }

  createBulkImportJob: (params: RawParamsFrom<'createBulkImportJob'>) => Promise<ReturnTypeFrom<'createBulkImportJob'>>  = async params => {
  // undefined
    return this.client.createBulkImportJob(params as any).promise();
  }

  createDashboard: (params: RawParamsFrom<'createDashboard'>) => Promise<ReturnTypeFrom<'createDashboard'>>  = async params => {
  // undefined
    return this.client.createDashboard(params as any).promise();
  }

  createGateway: (params: RawParamsFrom<'createGateway'>) => Promise<ReturnTypeFrom<'createGateway'>>  = async params => {
  // undefined
    return this.client.createGateway(params as any).promise();
  }

  createPortal: (params: RawParamsFrom<'createPortal'>) => Promise<ReturnTypeFrom<'createPortal'>>  = async params => {
  // undefined
    return this.client.createPortal(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  deleteAccessPolicy: (params: RawParamsFrom<'deleteAccessPolicy'>) => Promise<ReturnTypeFrom<'deleteAccessPolicy'>>  = async params => {
  // undefined
    return this.client.deleteAccessPolicy(params as any).promise();
  }

  deleteAsset: (params: RawParamsFrom<'deleteAsset'>) => Promise<ReturnTypeFrom<'deleteAsset'>>  = async params => {
  // undefined
    return this.client.deleteAsset(params as any).promise();
  }

  deleteAssetModel: (params: RawParamsFrom<'deleteAssetModel'>) => Promise<ReturnTypeFrom<'deleteAssetModel'>>  = async params => {
  // undefined
    return this.client.deleteAssetModel(params as any).promise();
  }

  deleteDashboard: (params: RawParamsFrom<'deleteDashboard'>) => Promise<ReturnTypeFrom<'deleteDashboard'>>  = async params => {
  // undefined
    return this.client.deleteDashboard(params as any).promise();
  }

  deleteGateway: (params: RawParamsFrom<'deleteGateway'>) => Promise<ReturnTypeFrom<'deleteGateway'>>  = async params => {
  // undefined
    return this.client.deleteGateway(params as any).promise();
  }

  deletePortal: (params: RawParamsFrom<'deletePortal'>) => Promise<ReturnTypeFrom<'deletePortal'>>  = async params => {
  // undefined
    return this.client.deletePortal(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  deleteTimeSeries: (params: RawParamsFrom<'deleteTimeSeries'>) => Promise<ReturnTypeFrom<'deleteTimeSeries'>>  = async params => {
  // undefined
    return this.client.deleteTimeSeries(params as any).promise();
  }

  describeAccessPolicy: (params: RawParamsFrom<'describeAccessPolicy'>) => Promise<ReturnTypeFrom<'describeAccessPolicy'>>  = async params => {
  // undefined
    return this.client.describeAccessPolicy(params as any).promise();
  }

  describeAsset: (params: RawParamsFrom<'describeAsset'>) => Promise<ReturnTypeFrom<'describeAsset'>>  = async params => {
  // undefined
    return this.client.describeAsset(params as any).promise();
  }

  describeAssetModel: (params: RawParamsFrom<'describeAssetModel'>) => Promise<ReturnTypeFrom<'describeAssetModel'>>  = async params => {
  // undefined
    return this.client.describeAssetModel(params as any).promise();
  }

  describeAssetProperty: (params: RawParamsFrom<'describeAssetProperty'>) => Promise<ReturnTypeFrom<'describeAssetProperty'>>  = async params => {
  // undefined
    return this.client.describeAssetProperty(params as any).promise();
  }

  describeBulkImportJob: (params: RawParamsFrom<'describeBulkImportJob'>) => Promise<ReturnTypeFrom<'describeBulkImportJob'>>  = async params => {
  // undefined
    return this.client.describeBulkImportJob(params as any).promise();
  }

  describeDashboard: (params: RawParamsFrom<'describeDashboard'>) => Promise<ReturnTypeFrom<'describeDashboard'>>  = async params => {
  // undefined
    return this.client.describeDashboard(params as any).promise();
  }

  describeDefaultEncryptionConfiguration: (params: RawParamsFrom<'describeDefaultEncryptionConfiguration'>) => Promise<ReturnTypeFrom<'describeDefaultEncryptionConfiguration'>>  = async params => {
  // undefined
    return this.client.describeDefaultEncryptionConfiguration(params as any).promise();
  }

  describeGateway: (params: RawParamsFrom<'describeGateway'>) => Promise<ReturnTypeFrom<'describeGateway'>>  = async params => {
  // undefined
    return this.client.describeGateway(params as any).promise();
  }

  describeGatewayCapabilityConfiguration: (params: RawParamsFrom<'describeGatewayCapabilityConfiguration'>) => Promise<ReturnTypeFrom<'describeGatewayCapabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.describeGatewayCapabilityConfiguration(params as any).promise();
  }

  describeLoggingOptions: (params: RawParamsFrom<'describeLoggingOptions'>) => Promise<ReturnTypeFrom<'describeLoggingOptions'>>  = async params => {
  // undefined
    return this.client.describeLoggingOptions(params as any).promise();
  }

  describePortal: (params: RawParamsFrom<'describePortal'>) => Promise<ReturnTypeFrom<'describePortal'>>  = async params => {
  // undefined
    return this.client.describePortal(params as any).promise();
  }

  describeProject: (params: RawParamsFrom<'describeProject'>) => Promise<ReturnTypeFrom<'describeProject'>>  = async params => {
  // undefined
    return this.client.describeProject(params as any).promise();
  }

  describeStorageConfiguration: (params: RawParamsFrom<'describeStorageConfiguration'>) => Promise<ReturnTypeFrom<'describeStorageConfiguration'>>  = async params => {
  // undefined
    return this.client.describeStorageConfiguration(params as any).promise();
  }

  describeTimeSeries: (params: RawParamsFrom<'describeTimeSeries'>) => Promise<ReturnTypeFrom<'describeTimeSeries'>>  = async params => {
  // undefined
    return this.client.describeTimeSeries(params as any).promise();
  }

  disassociateAssets: (params: RawParamsFrom<'disassociateAssets'>) => Promise<ReturnTypeFrom<'disassociateAssets'>>  = async params => {
  // undefined
    return this.client.disassociateAssets(params as any).promise();
  }

  disassociateTimeSeriesFromAssetProperty: (params: RawParamsFrom<'disassociateTimeSeriesFromAssetProperty'>) => Promise<ReturnTypeFrom<'disassociateTimeSeriesFromAssetProperty'>>  = async params => {
  // undefined
    return this.client.disassociateTimeSeriesFromAssetProperty(params as any).promise();
  }

  async getAssetPropertyAggregates(params: { [K in keyof ParamsFrom<'getAssetPropertyAggregates', { next?: string, limit?: number }>]: ParamsFrom<'getAssetPropertyAggregates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getAssetPropertyAggregates'>]-?: ReturnTypeFrom<'getAssetPropertyAggregates'>[K]}['aggregatedValues'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"aggregatedValues"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getAssetPropertyAggregates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getAssetPropertyAggregates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.aggregatedValues ?? []) ? (result.aggregatedValues ?? []) : [result.aggregatedValues]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getAssetPropertyValue: (params: RawParamsFrom<'getAssetPropertyValue'>) => Promise<ReturnTypeFrom<'getAssetPropertyValue'>>  = async params => {
  // undefined
    return this.client.getAssetPropertyValue(params as any).promise();
  }

  async getAssetPropertyValueHistory(params: { [K in keyof ParamsFrom<'getAssetPropertyValueHistory', { next?: string, limit?: number }>]: ParamsFrom<'getAssetPropertyValueHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getAssetPropertyValueHistory'>]-?: ReturnTypeFrom<'getAssetPropertyValueHistory'>[K]}['assetPropertyValueHistory'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetPropertyValueHistory"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getAssetPropertyValueHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getAssetPropertyValueHistory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assetPropertyValueHistory ?? []) ? (result.assetPropertyValueHistory ?? []) : [result.assetPropertyValueHistory]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getInterpolatedAssetPropertyValues(params: { [K in keyof ParamsFrom<'getInterpolatedAssetPropertyValues', { next?: string, limit?: number }>]: ParamsFrom<'getInterpolatedAssetPropertyValues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getInterpolatedAssetPropertyValues'>]-?: ReturnTypeFrom<'getInterpolatedAssetPropertyValues'>[K]}['interpolatedAssetPropertyValues'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"interpolatedAssetPropertyValues"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getInterpolatedAssetPropertyValues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getInterpolatedAssetPropertyValues' })).toString('base64') : undefined;
    const member = (Array.isArray(result.interpolatedAssetPropertyValues ?? []) ? (result.interpolatedAssetPropertyValues ?? []) : [result.interpolatedAssetPropertyValues]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccessPolicies(params: { [K in keyof ParamsFrom<'listAccessPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listAccessPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccessPolicies'>]-?: ReturnTypeFrom<'listAccessPolicies'>[K]}['accessPolicySummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accessPolicySummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccessPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAccessPolicies' })).toString('base64') : undefined;
    const member = (Array.isArray(result.accessPolicySummaries ?? []) ? (result.accessPolicySummaries ?? []) : [result.accessPolicySummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssetModels(params: { [K in keyof ParamsFrom<'listAssetModels', { next?: string, limit?: number }>]: ParamsFrom<'listAssetModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssetModels'>]-?: ReturnTypeFrom<'listAssetModels'>[K]}['assetModelSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetModelSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssetModels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAssetModels' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assetModelSummaries ?? []) ? (result.assetModelSummaries ?? []) : [result.assetModelSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssetRelationships(params: { [K in keyof ParamsFrom<'listAssetRelationships', { next?: string, limit?: number }>]: ParamsFrom<'listAssetRelationships', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssetRelationships'>]-?: ReturnTypeFrom<'listAssetRelationships'>[K]}['assetRelationshipSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetRelationshipSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssetRelationships({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAssetRelationships' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assetRelationshipSummaries ?? []) ? (result.assetRelationshipSummaries ?? []) : [result.assetRelationshipSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssets(params: { [K in keyof ParamsFrom<'listAssets', { next?: string, limit?: number }>]: ParamsFrom<'listAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssets'>]-?: ReturnTypeFrom<'listAssets'>[K]}['assetSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAssets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assetSummaries ?? []) ? (result.assetSummaries ?? []) : [result.assetSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociatedAssets(params: { [K in keyof ParamsFrom<'listAssociatedAssets', { next?: string, limit?: number }>]: ParamsFrom<'listAssociatedAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssociatedAssets'>]-?: ReturnTypeFrom<'listAssociatedAssets'>[K]}['assetSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssociatedAssets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAssociatedAssets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assetSummaries ?? []) ? (result.assetSummaries ?? []) : [result.assetSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBulkImportJobs(params: { [K in keyof ParamsFrom<'listBulkImportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listBulkImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBulkImportJobs'>]-?: ReturnTypeFrom<'listBulkImportJobs'>[K]}['jobSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBulkImportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listBulkImportJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.jobSummaries ?? []) ? (result.jobSummaries ?? []) : [result.jobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDashboards(params: { [K in keyof ParamsFrom<'listDashboards', { next?: string, limit?: number }>]: ParamsFrom<'listDashboards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDashboards'>]-?: ReturnTypeFrom<'listDashboards'>[K]}['dashboardSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dashboardSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDashboards({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDashboards' })).toString('base64') : undefined;
    const member = (Array.isArray(result.dashboardSummaries ?? []) ? (result.dashboardSummaries ?? []) : [result.dashboardSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGateways(params: { [K in keyof ParamsFrom<'listGateways', { next?: string, limit?: number }>]: ParamsFrom<'listGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['gatewaySummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"gatewaySummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.gatewaySummaries ?? []) ? (result.gatewaySummaries ?? []) : [result.gatewaySummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPortals(params: { [K in keyof ParamsFrom<'listPortals', { next?: string, limit?: number }>]: ParamsFrom<'listPortals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPortals'>]-?: ReturnTypeFrom<'listPortals'>[K]}['portalSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"portalSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPortals({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPortals' })).toString('base64') : undefined;
    const member = (Array.isArray(result.portalSummaries ?? []) ? (result.portalSummaries ?? []) : [result.portalSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjectAssets(params: { [K in keyof ParamsFrom<'listProjectAssets', { next?: string, limit?: number }>]: ParamsFrom<'listProjectAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjectAssets'>]-?: ReturnTypeFrom<'listProjectAssets'>[K]}['assetIds'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assetIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjectAssets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProjectAssets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assetIds ?? []) ? (result.assetIds ?? []) : [result.assetIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(params: { [K in keyof ParamsFrom<'listProjects', { next?: string, limit?: number }>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projectSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"projectSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProjects' })).toString('base64') : undefined;
    const member = (Array.isArray(result.projectSummaries ?? []) ? (result.projectSummaries ?? []) : [result.projectSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listTimeSeries(params: { [K in keyof ParamsFrom<'listTimeSeries', { next?: string, limit?: number }>]: ParamsFrom<'listTimeSeries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTimeSeries'>]-?: ReturnTypeFrom<'listTimeSeries'>[K]}['TimeSeriesSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"TimeSeriesSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTimeSeries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTimeSeries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TimeSeriesSummaries ?? []) ? (result.TimeSeriesSummaries ?? []) : [result.TimeSeriesSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putDefaultEncryptionConfiguration: (params: RawParamsFrom<'putDefaultEncryptionConfiguration'>) => Promise<ReturnTypeFrom<'putDefaultEncryptionConfiguration'>>  = async params => {
  // undefined
    return this.client.putDefaultEncryptionConfiguration(params as any).promise();
  }

  putLoggingOptions: (params: RawParamsFrom<'putLoggingOptions'>) => Promise<ReturnTypeFrom<'putLoggingOptions'>>  = async params => {
  // undefined
    return this.client.putLoggingOptions(params as any).promise();
  }

  putStorageConfiguration: (params: RawParamsFrom<'putStorageConfiguration'>) => Promise<ReturnTypeFrom<'putStorageConfiguration'>>  = async params => {
  // undefined
    return this.client.putStorageConfiguration(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccessPolicy: (params: RawParamsFrom<'updateAccessPolicy'>) => Promise<ReturnTypeFrom<'updateAccessPolicy'>>  = async params => {
  // undefined
    return this.client.updateAccessPolicy(params as any).promise();
  }

  updateAsset: (params: RawParamsFrom<'updateAsset'>) => Promise<ReturnTypeFrom<'updateAsset'>>  = async params => {
  // undefined
    return this.client.updateAsset(params as any).promise();
  }

  updateAssetModel: (params: RawParamsFrom<'updateAssetModel'>) => Promise<ReturnTypeFrom<'updateAssetModel'>>  = async params => {
  // undefined
    return this.client.updateAssetModel(params as any).promise();
  }

  updateAssetProperty: (params: RawParamsFrom<'updateAssetProperty'>) => Promise<ReturnTypeFrom<'updateAssetProperty'>>  = async params => {
  // undefined
    return this.client.updateAssetProperty(params as any).promise();
  }

  updateDashboard: (params: RawParamsFrom<'updateDashboard'>) => Promise<ReturnTypeFrom<'updateDashboard'>>  = async params => {
  // undefined
    return this.client.updateDashboard(params as any).promise();
  }

  updateGateway: (params: RawParamsFrom<'updateGateway'>) => Promise<ReturnTypeFrom<'updateGateway'>>  = async params => {
  // undefined
    return this.client.updateGateway(params as any).promise();
  }

  updateGatewayCapabilityConfiguration: (params: RawParamsFrom<'updateGatewayCapabilityConfiguration'>) => Promise<ReturnTypeFrom<'updateGatewayCapabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.updateGatewayCapabilityConfiguration(params as any).promise();
  }

  updatePortal: (params: RawParamsFrom<'updatePortal'>) => Promise<ReturnTypeFrom<'updatePortal'>>  = async params => {
  // undefined
    return this.client.updatePortal(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }
  
  static fromClient(client: AWSIoTSiteWise): IoTSiteWise {
    return new IoTSiteWise(client) as any;
  }
  
  static client(options?: AWSIoTSiteWise.Types.ClientConfiguration): IoTSiteWise {
    return new IoTSiteWise(new AWSIoTSiteWise(options)) as any;
  }
}  
