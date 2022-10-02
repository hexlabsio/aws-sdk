import { Request, CloudFront as AWSCloudFront } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudFront> = AWSCloudFront[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudFront> = AWSCloudFront[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudFront[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudFront, Extras> = AWSCloudFront[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cloudfront';
    global: true;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listCloudFrontOriginAccessIdentities","listDistributions","listStreamingDistributions"];
    
  associateAlias: FunctionTypeFrom<'associateAlias'>;

  createCachePolicy: FunctionTypeFrom<'createCachePolicy'>;

  createCloudFrontOriginAccessIdentity: FunctionTypeFrom<'createCloudFrontOriginAccessIdentity'>;

  createDistribution: FunctionTypeFrom<'createDistribution'>;

  createDistributionWithTags: FunctionTypeFrom<'createDistributionWithTags'>;

  createFieldLevelEncryptionConfig: FunctionTypeFrom<'createFieldLevelEncryptionConfig'>;

  createFieldLevelEncryptionProfile: FunctionTypeFrom<'createFieldLevelEncryptionProfile'>;

  createFunction: FunctionTypeFrom<'createFunction'>;

  createInvalidation: FunctionTypeFrom<'createInvalidation'>;

  createKeyGroup: FunctionTypeFrom<'createKeyGroup'>;

  createMonitoringSubscription: FunctionTypeFrom<'createMonitoringSubscription'>;

  createOriginAccessControl: FunctionTypeFrom<'createOriginAccessControl'>;

  createOriginRequestPolicy: FunctionTypeFrom<'createOriginRequestPolicy'>;

  createPublicKey: FunctionTypeFrom<'createPublicKey'>;

  createRealtimeLogConfig: FunctionTypeFrom<'createRealtimeLogConfig'>;

  createResponseHeadersPolicy: FunctionTypeFrom<'createResponseHeadersPolicy'>;

  createStreamingDistribution: FunctionTypeFrom<'createStreamingDistribution'>;

  createStreamingDistributionWithTags: FunctionTypeFrom<'createStreamingDistributionWithTags'>;

  deleteCachePolicy: FunctionTypeFrom<'deleteCachePolicy'>;

  deleteCloudFrontOriginAccessIdentity: FunctionTypeFrom<'deleteCloudFrontOriginAccessIdentity'>;

  deleteDistribution: FunctionTypeFrom<'deleteDistribution'>;

  deleteFieldLevelEncryptionConfig: FunctionTypeFrom<'deleteFieldLevelEncryptionConfig'>;

  deleteFieldLevelEncryptionProfile: FunctionTypeFrom<'deleteFieldLevelEncryptionProfile'>;

  deleteFunction: FunctionTypeFrom<'deleteFunction'>;

  deleteKeyGroup: FunctionTypeFrom<'deleteKeyGroup'>;

  deleteMonitoringSubscription: FunctionTypeFrom<'deleteMonitoringSubscription'>;

  deleteOriginAccessControl: FunctionTypeFrom<'deleteOriginAccessControl'>;

  deleteOriginRequestPolicy: FunctionTypeFrom<'deleteOriginRequestPolicy'>;

  deletePublicKey: FunctionTypeFrom<'deletePublicKey'>;

  deleteRealtimeLogConfig: FunctionTypeFrom<'deleteRealtimeLogConfig'>;

  deleteResponseHeadersPolicy: FunctionTypeFrom<'deleteResponseHeadersPolicy'>;

  deleteStreamingDistribution: FunctionTypeFrom<'deleteStreamingDistribution'>;

  describeFunction: FunctionTypeFrom<'describeFunction'>;

  getCachePolicy: FunctionTypeFrom<'getCachePolicy'>;

  getCachePolicyConfig: FunctionTypeFrom<'getCachePolicyConfig'>;

  getCloudFrontOriginAccessIdentity: FunctionTypeFrom<'getCloudFrontOriginAccessIdentity'>;

  getCloudFrontOriginAccessIdentityConfig: FunctionTypeFrom<'getCloudFrontOriginAccessIdentityConfig'>;

  getDistribution: FunctionTypeFrom<'getDistribution'>;

  getDistributionConfig: FunctionTypeFrom<'getDistributionConfig'>;

  getFieldLevelEncryption: FunctionTypeFrom<'getFieldLevelEncryption'>;

  getFieldLevelEncryptionConfig: FunctionTypeFrom<'getFieldLevelEncryptionConfig'>;

  getFieldLevelEncryptionProfile: FunctionTypeFrom<'getFieldLevelEncryptionProfile'>;

  getFieldLevelEncryptionProfileConfig: FunctionTypeFrom<'getFieldLevelEncryptionProfileConfig'>;

  getFunction: FunctionTypeFrom<'getFunction'>;

  getInvalidation: FunctionTypeFrom<'getInvalidation'>;

  getKeyGroup: FunctionTypeFrom<'getKeyGroup'>;

  getKeyGroupConfig: FunctionTypeFrom<'getKeyGroupConfig'>;

  getMonitoringSubscription: FunctionTypeFrom<'getMonitoringSubscription'>;

  getOriginAccessControl: FunctionTypeFrom<'getOriginAccessControl'>;

  getOriginAccessControlConfig: FunctionTypeFrom<'getOriginAccessControlConfig'>;

  getOriginRequestPolicy: FunctionTypeFrom<'getOriginRequestPolicy'>;

  getOriginRequestPolicyConfig: FunctionTypeFrom<'getOriginRequestPolicyConfig'>;

  getPublicKey: FunctionTypeFrom<'getPublicKey'>;

  getPublicKeyConfig: FunctionTypeFrom<'getPublicKeyConfig'>;

  getRealtimeLogConfig: FunctionTypeFrom<'getRealtimeLogConfig'>;

  getResponseHeadersPolicy: FunctionTypeFrom<'getResponseHeadersPolicy'>;

  getResponseHeadersPolicyConfig: FunctionTypeFrom<'getResponseHeadersPolicyConfig'>;

  getStreamingDistribution: FunctionTypeFrom<'getStreamingDistribution'>;

  getStreamingDistributionConfig: FunctionTypeFrom<'getStreamingDistributionConfig'>;

  listCachePolicies: FunctionTypeFrom<'listCachePolicies'>;

  listCloudFrontOriginAccessIdentities(params: { [K in keyof Omit<ParamsFrom<'listCloudFrontOriginAccessIdentities', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listCloudFrontOriginAccessIdentities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCloudFrontOriginAccessIdentities'>]-?: ReturnTypeFrom<'listCloudFrontOriginAccessIdentities'>[K]}['CloudFrontOriginAccessIdentityList']['Items'] }>
  listCloudFrontOriginAccessIdentities(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCloudFrontOriginAccessIdentities'>]-?: ReturnTypeFrom<'listCloudFrontOriginAccessIdentities'>[K]}['CloudFrontOriginAccessIdentityList']['Items'] }>;

  listConflictingAliases: FunctionTypeFrom<'listConflictingAliases'>;

  listDistributions(params: { [K in keyof Omit<ParamsFrom<'listDistributions', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listDistributions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDistributions'>]-?: ReturnTypeFrom<'listDistributions'>[K]}['DistributionList']['Items'] }>
  listDistributions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDistributions'>]-?: ReturnTypeFrom<'listDistributions'>[K]}['DistributionList']['Items'] }>;

  listDistributionsByCachePolicyId: FunctionTypeFrom<'listDistributionsByCachePolicyId'>;

  listDistributionsByKeyGroup: FunctionTypeFrom<'listDistributionsByKeyGroup'>;

  listDistributionsByOriginRequestPolicyId: FunctionTypeFrom<'listDistributionsByOriginRequestPolicyId'>;

  listDistributionsByRealtimeLogConfig: FunctionTypeFrom<'listDistributionsByRealtimeLogConfig'>;

  listDistributionsByResponseHeadersPolicyId: FunctionTypeFrom<'listDistributionsByResponseHeadersPolicyId'>;

  listDistributionsByWebACLId: FunctionTypeFrom<'listDistributionsByWebACLId'>;

  listFieldLevelEncryptionConfigs: FunctionTypeFrom<'listFieldLevelEncryptionConfigs'>;

  listFieldLevelEncryptionProfiles: FunctionTypeFrom<'listFieldLevelEncryptionProfiles'>;

  listFunctions: FunctionTypeFrom<'listFunctions'>;

  listInvalidations(params: { [K in keyof Omit<ParamsFrom<'listInvalidations', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listInvalidations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInvalidations'>]-?: ReturnTypeFrom<'listInvalidations'>[K]}['InvalidationList']['Items'] }>
  ;

  listKeyGroups: FunctionTypeFrom<'listKeyGroups'>;

  listOriginAccessControls: FunctionTypeFrom<'listOriginAccessControls'>;

  listOriginRequestPolicies: FunctionTypeFrom<'listOriginRequestPolicies'>;

  listPublicKeys: FunctionTypeFrom<'listPublicKeys'>;

  listRealtimeLogConfigs: FunctionTypeFrom<'listRealtimeLogConfigs'>;

  listResponseHeadersPolicies: FunctionTypeFrom<'listResponseHeadersPolicies'>;

  listStreamingDistributions(params: { [K in keyof Omit<ParamsFrom<'listStreamingDistributions', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listStreamingDistributions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreamingDistributions'>]-?: ReturnTypeFrom<'listStreamingDistributions'>[K]}['StreamingDistributionList']['Items'] }>
  listStreamingDistributions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreamingDistributions'>]-?: ReturnTypeFrom<'listStreamingDistributions'>[K]}['StreamingDistributionList']['Items'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  publishFunction: FunctionTypeFrom<'publishFunction'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testFunction: FunctionTypeFrom<'testFunction'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCachePolicy: FunctionTypeFrom<'updateCachePolicy'>;

  updateCloudFrontOriginAccessIdentity: FunctionTypeFrom<'updateCloudFrontOriginAccessIdentity'>;

  updateDistribution: FunctionTypeFrom<'updateDistribution'>;

  updateFieldLevelEncryptionConfig: FunctionTypeFrom<'updateFieldLevelEncryptionConfig'>;

  updateFieldLevelEncryptionProfile: FunctionTypeFrom<'updateFieldLevelEncryptionProfile'>;

  updateFunction: FunctionTypeFrom<'updateFunction'>;

  updateKeyGroup: FunctionTypeFrom<'updateKeyGroup'>;

  updateOriginAccessControl: FunctionTypeFrom<'updateOriginAccessControl'>;

  updateOriginRequestPolicy: FunctionTypeFrom<'updateOriginRequestPolicy'>;

  updatePublicKey: FunctionTypeFrom<'updatePublicKey'>;

  updateRealtimeLogConfig: FunctionTypeFrom<'updateRealtimeLogConfig'>;

  updateResponseHeadersPolicy: FunctionTypeFrom<'updateResponseHeadersPolicy'>;

  updateStreamingDistribution: FunctionTypeFrom<'updateStreamingDistribution'>
}
 
export class CloudFront implements ClientType {
  private constructor(private readonly client: AWSCloudFront) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'cloudfront';
  public readonly global = true;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listCloudFrontOriginAccessIdentities","listDistributions","listStreamingDistributions"] as const;
  
  async associateAlias(...args: any): Promise<any> {
  // undefined
    return this.client.associateAlias(...args).promise()
  }

  async createCachePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createCachePolicy(...args).promise()
  }

  async createCloudFrontOriginAccessIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.createCloudFrontOriginAccessIdentity(...args).promise()
  }

  async createDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.createDistribution(...args).promise()
  }

  async createDistributionWithTags(...args: any): Promise<any> {
  // undefined
    return this.client.createDistributionWithTags(...args).promise()
  }

  async createFieldLevelEncryptionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createFieldLevelEncryptionConfig(...args).promise()
  }

  async createFieldLevelEncryptionProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createFieldLevelEncryptionProfile(...args).promise()
  }

  async createFunction(...args: any): Promise<any> {
  // undefined
    return this.client.createFunction(...args).promise()
  }

  async createInvalidation(...args: any): Promise<any> {
  // undefined
    return this.client.createInvalidation(...args).promise()
  }

  async createKeyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createKeyGroup(...args).promise()
  }

  async createMonitoringSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createMonitoringSubscription(...args).promise()
  }

  async createOriginAccessControl(...args: any): Promise<any> {
  // undefined
    return this.client.createOriginAccessControl(...args).promise()
  }

  async createOriginRequestPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createOriginRequestPolicy(...args).promise()
  }

  async createPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.createPublicKey(...args).promise()
  }

  async createRealtimeLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createRealtimeLogConfig(...args).promise()
  }

  async createResponseHeadersPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createResponseHeadersPolicy(...args).promise()
  }

  async createStreamingDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.createStreamingDistribution(...args).promise()
  }

  async createStreamingDistributionWithTags(...args: any): Promise<any> {
  // undefined
    return this.client.createStreamingDistributionWithTags(...args).promise()
  }

  async deleteCachePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCachePolicy(...args).promise()
  }

  async deleteCloudFrontOriginAccessIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCloudFrontOriginAccessIdentity(...args).promise()
  }

  async deleteDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDistribution(...args).promise()
  }

  async deleteFieldLevelEncryptionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFieldLevelEncryptionConfig(...args).promise()
  }

  async deleteFieldLevelEncryptionProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFieldLevelEncryptionProfile(...args).promise()
  }

  async deleteFunction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFunction(...args).promise()
  }

  async deleteKeyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteKeyGroup(...args).promise()
  }

  async deleteMonitoringSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMonitoringSubscription(...args).promise()
  }

  async deleteOriginAccessControl(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOriginAccessControl(...args).promise()
  }

  async deleteOriginRequestPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOriginRequestPolicy(...args).promise()
  }

  async deletePublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.deletePublicKey(...args).promise()
  }

  async deleteRealtimeLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRealtimeLogConfig(...args).promise()
  }

  async deleteResponseHeadersPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResponseHeadersPolicy(...args).promise()
  }

  async deleteStreamingDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStreamingDistribution(...args).promise()
  }

  async describeFunction(...args: any): Promise<any> {
  // undefined
    return this.client.describeFunction(...args).promise()
  }

  async getCachePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getCachePolicy(...args).promise()
  }

  async getCachePolicyConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getCachePolicyConfig(...args).promise()
  }

  async getCloudFrontOriginAccessIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.getCloudFrontOriginAccessIdentity(...args).promise()
  }

  async getCloudFrontOriginAccessIdentityConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getCloudFrontOriginAccessIdentityConfig(...args).promise()
  }

  async getDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.getDistribution(...args).promise()
  }

  async getDistributionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getDistributionConfig(...args).promise()
  }

  async getFieldLevelEncryption(...args: any): Promise<any> {
  // undefined
    return this.client.getFieldLevelEncryption(...args).promise()
  }

  async getFieldLevelEncryptionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getFieldLevelEncryptionConfig(...args).promise()
  }

  async getFieldLevelEncryptionProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getFieldLevelEncryptionProfile(...args).promise()
  }

  async getFieldLevelEncryptionProfileConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getFieldLevelEncryptionProfileConfig(...args).promise()
  }

  async getFunction(...args: any): Promise<any> {
  // undefined
    return this.client.getFunction(...args).promise()
  }

  async getInvalidation(...args: any): Promise<any> {
  // undefined
    return this.client.getInvalidation(...args).promise()
  }

  async getKeyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getKeyGroup(...args).promise()
  }

  async getKeyGroupConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getKeyGroupConfig(...args).promise()
  }

  async getMonitoringSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.getMonitoringSubscription(...args).promise()
  }

  async getOriginAccessControl(...args: any): Promise<any> {
  // undefined
    return this.client.getOriginAccessControl(...args).promise()
  }

  async getOriginAccessControlConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getOriginAccessControlConfig(...args).promise()
  }

  async getOriginRequestPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getOriginRequestPolicy(...args).promise()
  }

  async getOriginRequestPolicyConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getOriginRequestPolicyConfig(...args).promise()
  }

  async getPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.getPublicKey(...args).promise()
  }

  async getPublicKeyConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getPublicKeyConfig(...args).promise()
  }

  async getRealtimeLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getRealtimeLogConfig(...args).promise()
  }

  async getResponseHeadersPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResponseHeadersPolicy(...args).promise()
  }

  async getResponseHeadersPolicyConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getResponseHeadersPolicyConfig(...args).promise()
  }

  async getStreamingDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.getStreamingDistribution(...args).promise()
  }

  async getStreamingDistributionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getStreamingDistributionConfig(...args).promise()
  }

  async listCachePolicies(...args: any): Promise<any> {
  // undefined
    return this.client.listCachePolicies(...args).promise()
  }

  async listCloudFrontOriginAccessIdentities(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"CloudFrontOriginAccessIdentityList.IsTruncated","outputToken":"CloudFrontOriginAccessIdentityList.NextMarker","resultKey":"CloudFrontOriginAccessIdentityList.Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listCloudFrontOriginAccessIdentities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.CloudFrontOriginAccessIdentityList?.NextMarker;
    const member = result.CloudFrontOriginAccessIdentityList?.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConflictingAliases(...args: any): Promise<any> {
  // undefined
    return this.client.listConflictingAliases(...args).promise()
  }

  async listDistributions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"DistributionList.IsTruncated","outputToken":"DistributionList.NextMarker","resultKey":"DistributionList.Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listDistributions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.DistributionList?.NextMarker;
    const member = result.DistributionList?.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDistributionsByCachePolicyId(...args: any): Promise<any> {
  // undefined
    return this.client.listDistributionsByCachePolicyId(...args).promise()
  }

  async listDistributionsByKeyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.listDistributionsByKeyGroup(...args).promise()
  }

  async listDistributionsByOriginRequestPolicyId(...args: any): Promise<any> {
  // undefined
    return this.client.listDistributionsByOriginRequestPolicyId(...args).promise()
  }

  async listDistributionsByRealtimeLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.listDistributionsByRealtimeLogConfig(...args).promise()
  }

  async listDistributionsByResponseHeadersPolicyId(...args: any): Promise<any> {
  // undefined
    return this.client.listDistributionsByResponseHeadersPolicyId(...args).promise()
  }

  async listDistributionsByWebACLId(...args: any): Promise<any> {
  // undefined
    return this.client.listDistributionsByWebACLId(...args).promise()
  }

  async listFieldLevelEncryptionConfigs(...args: any): Promise<any> {
  // undefined
    return this.client.listFieldLevelEncryptionConfigs(...args).promise()
  }

  async listFieldLevelEncryptionProfiles(...args: any): Promise<any> {
  // undefined
    return this.client.listFieldLevelEncryptionProfiles(...args).promise()
  }

  async listFunctions(...args: any): Promise<any> {
  // undefined
    return this.client.listFunctions(...args).promise()
  }

  async listInvalidations(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"InvalidationList.IsTruncated","outputToken":"InvalidationList.NextMarker","resultKey":"InvalidationList.Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listInvalidations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.InvalidationList?.NextMarker;
    const member = result.InvalidationList?.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKeyGroups(...args: any): Promise<any> {
  // undefined
    return this.client.listKeyGroups(...args).promise()
  }

  async listOriginAccessControls(...args: any): Promise<any> {
  // undefined
    return this.client.listOriginAccessControls(...args).promise()
  }

  async listOriginRequestPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.listOriginRequestPolicies(...args).promise()
  }

  async listPublicKeys(...args: any): Promise<any> {
  // undefined
    return this.client.listPublicKeys(...args).promise()
  }

  async listRealtimeLogConfigs(...args: any): Promise<any> {
  // undefined
    return this.client.listRealtimeLogConfigs(...args).promise()
  }

  async listResponseHeadersPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.listResponseHeadersPolicies(...args).promise()
  }

  async listStreamingDistributions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"StreamingDistributionList.IsTruncated","outputToken":"StreamingDistributionList.NextMarker","resultKey":"StreamingDistributionList.Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listStreamingDistributions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.StreamingDistributionList?.NextMarker;
    const member = result.StreamingDistributionList?.Items ?? [];
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

  async publishFunction(...args: any): Promise<any> {
  // undefined
    return this.client.publishFunction(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testFunction(...args: any): Promise<any> {
  // undefined
    return this.client.testFunction(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCachePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateCachePolicy(...args).promise()
  }

  async updateCloudFrontOriginAccessIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.updateCloudFrontOriginAccessIdentity(...args).promise()
  }

  async updateDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.updateDistribution(...args).promise()
  }

  async updateFieldLevelEncryptionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateFieldLevelEncryptionConfig(...args).promise()
  }

  async updateFieldLevelEncryptionProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateFieldLevelEncryptionProfile(...args).promise()
  }

  async updateFunction(...args: any): Promise<any> {
  // undefined
    return this.client.updateFunction(...args).promise()
  }

  async updateKeyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateKeyGroup(...args).promise()
  }

  async updateOriginAccessControl(...args: any): Promise<any> {
  // undefined
    return this.client.updateOriginAccessControl(...args).promise()
  }

  async updateOriginRequestPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateOriginRequestPolicy(...args).promise()
  }

  async updatePublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.updatePublicKey(...args).promise()
  }

  async updateRealtimeLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateRealtimeLogConfig(...args).promise()
  }

  async updateResponseHeadersPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateResponseHeadersPolicy(...args).promise()
  }

  async updateStreamingDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.updateStreamingDistribution(...args).promise()
  }
  
  static fromClient(client: AWSCloudFront): ClientType {
    return new CloudFront(client) as any;
  }
  
  static client(options?: AWSCloudFront.Types.ClientConfiguration): ClientType {
    return new CloudFront(new AWSCloudFront(options)) as any;
  }
}  
