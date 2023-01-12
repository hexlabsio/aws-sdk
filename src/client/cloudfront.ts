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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudFront> = AWSCloudFront[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudFront {
  private constructor(private readonly client: AWSCloudFront) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'cloudfront' as const;
  public readonly global = true as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listCloudFrontOriginAccessIdentities","listDistributions","listStreamingDistributions"] as const;
  
  associateAlias: (params: RawParamsFrom<'associateAlias'>) => Promise<ReturnTypeFrom<'associateAlias'>>  = async params => {
  // undefined
    return this.client.associateAlias(params as any).promise();
  }

  copyDistribution: (params: RawParamsFrom<'copyDistribution'>) => Promise<ReturnTypeFrom<'copyDistribution'>>  = async params => {
  // undefined
    return this.client.copyDistribution(params as any).promise();
  }

  createCachePolicy: (params: RawParamsFrom<'createCachePolicy'>) => Promise<ReturnTypeFrom<'createCachePolicy'>>  = async params => {
  // undefined
    return this.client.createCachePolicy(params as any).promise();
  }

  createCloudFrontOriginAccessIdentity: (params: RawParamsFrom<'createCloudFrontOriginAccessIdentity'>) => Promise<ReturnTypeFrom<'createCloudFrontOriginAccessIdentity'>>  = async params => {
  // undefined
    return this.client.createCloudFrontOriginAccessIdentity(params as any).promise();
  }

  createContinuousDeploymentPolicy: (params: RawParamsFrom<'createContinuousDeploymentPolicy'>) => Promise<ReturnTypeFrom<'createContinuousDeploymentPolicy'>>  = async params => {
  // undefined
    return this.client.createContinuousDeploymentPolicy(params as any).promise();
  }

  createDistribution: (params: RawParamsFrom<'createDistribution'>) => Promise<ReturnTypeFrom<'createDistribution'>>  = async params => {
  // undefined
    return this.client.createDistribution(params as any).promise();
  }

  createDistributionWithTags: (params: RawParamsFrom<'createDistributionWithTags'>) => Promise<ReturnTypeFrom<'createDistributionWithTags'>>  = async params => {
  // undefined
    return this.client.createDistributionWithTags(params as any).promise();
  }

  createFieldLevelEncryptionConfig: (params: RawParamsFrom<'createFieldLevelEncryptionConfig'>) => Promise<ReturnTypeFrom<'createFieldLevelEncryptionConfig'>>  = async params => {
  // undefined
    return this.client.createFieldLevelEncryptionConfig(params as any).promise();
  }

  createFieldLevelEncryptionProfile: (params: RawParamsFrom<'createFieldLevelEncryptionProfile'>) => Promise<ReturnTypeFrom<'createFieldLevelEncryptionProfile'>>  = async params => {
  // undefined
    return this.client.createFieldLevelEncryptionProfile(params as any).promise();
  }

  createFunction: (params: RawParamsFrom<'createFunction'>) => Promise<ReturnTypeFrom<'createFunction'>>  = async params => {
  // undefined
    return this.client.createFunction(params as any).promise();
  }

  createInvalidation: (params: RawParamsFrom<'createInvalidation'>) => Promise<ReturnTypeFrom<'createInvalidation'>>  = async params => {
  // undefined
    return this.client.createInvalidation(params as any).promise();
  }

  createKeyGroup: (params: RawParamsFrom<'createKeyGroup'>) => Promise<ReturnTypeFrom<'createKeyGroup'>>  = async params => {
  // undefined
    return this.client.createKeyGroup(params as any).promise();
  }

  createMonitoringSubscription: (params: RawParamsFrom<'createMonitoringSubscription'>) => Promise<ReturnTypeFrom<'createMonitoringSubscription'>>  = async params => {
  // undefined
    return this.client.createMonitoringSubscription(params as any).promise();
  }

  createOriginAccessControl: (params: RawParamsFrom<'createOriginAccessControl'>) => Promise<ReturnTypeFrom<'createOriginAccessControl'>>  = async params => {
  // undefined
    return this.client.createOriginAccessControl(params as any).promise();
  }

  createOriginRequestPolicy: (params: RawParamsFrom<'createOriginRequestPolicy'>) => Promise<ReturnTypeFrom<'createOriginRequestPolicy'>>  = async params => {
  // undefined
    return this.client.createOriginRequestPolicy(params as any).promise();
  }

  createPublicKey: (params: RawParamsFrom<'createPublicKey'>) => Promise<ReturnTypeFrom<'createPublicKey'>>  = async params => {
  // undefined
    return this.client.createPublicKey(params as any).promise();
  }

  createRealtimeLogConfig: (params: RawParamsFrom<'createRealtimeLogConfig'>) => Promise<ReturnTypeFrom<'createRealtimeLogConfig'>>  = async params => {
  // undefined
    return this.client.createRealtimeLogConfig(params as any).promise();
  }

  createResponseHeadersPolicy: (params: RawParamsFrom<'createResponseHeadersPolicy'>) => Promise<ReturnTypeFrom<'createResponseHeadersPolicy'>>  = async params => {
  // undefined
    return this.client.createResponseHeadersPolicy(params as any).promise();
  }

  createStreamingDistribution: (params: RawParamsFrom<'createStreamingDistribution'>) => Promise<ReturnTypeFrom<'createStreamingDistribution'>>  = async params => {
  // undefined
    return this.client.createStreamingDistribution(params as any).promise();
  }

  createStreamingDistributionWithTags: (params: RawParamsFrom<'createStreamingDistributionWithTags'>) => Promise<ReturnTypeFrom<'createStreamingDistributionWithTags'>>  = async params => {
  // undefined
    return this.client.createStreamingDistributionWithTags(params as any).promise();
  }

  deleteCachePolicy: (params: RawParamsFrom<'deleteCachePolicy'>) => Promise<ReturnTypeFrom<'deleteCachePolicy'>>  = async params => {
  // undefined
    return this.client.deleteCachePolicy(params as any).promise();
  }

  deleteCloudFrontOriginAccessIdentity: (params: RawParamsFrom<'deleteCloudFrontOriginAccessIdentity'>) => Promise<ReturnTypeFrom<'deleteCloudFrontOriginAccessIdentity'>>  = async params => {
  // undefined
    return this.client.deleteCloudFrontOriginAccessIdentity(params as any).promise();
  }

  deleteContinuousDeploymentPolicy: (params: RawParamsFrom<'deleteContinuousDeploymentPolicy'>) => Promise<ReturnTypeFrom<'deleteContinuousDeploymentPolicy'>>  = async params => {
  // undefined
    return this.client.deleteContinuousDeploymentPolicy(params as any).promise();
  }

  deleteDistribution: (params: RawParamsFrom<'deleteDistribution'>) => Promise<ReturnTypeFrom<'deleteDistribution'>>  = async params => {
  // undefined
    return this.client.deleteDistribution(params as any).promise();
  }

  deleteFieldLevelEncryptionConfig: (params: RawParamsFrom<'deleteFieldLevelEncryptionConfig'>) => Promise<ReturnTypeFrom<'deleteFieldLevelEncryptionConfig'>>  = async params => {
  // undefined
    return this.client.deleteFieldLevelEncryptionConfig(params as any).promise();
  }

  deleteFieldLevelEncryptionProfile: (params: RawParamsFrom<'deleteFieldLevelEncryptionProfile'>) => Promise<ReturnTypeFrom<'deleteFieldLevelEncryptionProfile'>>  = async params => {
  // undefined
    return this.client.deleteFieldLevelEncryptionProfile(params as any).promise();
  }

  deleteFunction: (params: RawParamsFrom<'deleteFunction'>) => Promise<ReturnTypeFrom<'deleteFunction'>>  = async params => {
  // undefined
    return this.client.deleteFunction(params as any).promise();
  }

  deleteKeyGroup: (params: RawParamsFrom<'deleteKeyGroup'>) => Promise<ReturnTypeFrom<'deleteKeyGroup'>>  = async params => {
  // undefined
    return this.client.deleteKeyGroup(params as any).promise();
  }

  deleteMonitoringSubscription: (params: RawParamsFrom<'deleteMonitoringSubscription'>) => Promise<ReturnTypeFrom<'deleteMonitoringSubscription'>>  = async params => {
  // undefined
    return this.client.deleteMonitoringSubscription(params as any).promise();
  }

  deleteOriginAccessControl: (params: RawParamsFrom<'deleteOriginAccessControl'>) => Promise<ReturnTypeFrom<'deleteOriginAccessControl'>>  = async params => {
  // undefined
    return this.client.deleteOriginAccessControl(params as any).promise();
  }

  deleteOriginRequestPolicy: (params: RawParamsFrom<'deleteOriginRequestPolicy'>) => Promise<ReturnTypeFrom<'deleteOriginRequestPolicy'>>  = async params => {
  // undefined
    return this.client.deleteOriginRequestPolicy(params as any).promise();
  }

  deletePublicKey: (params: RawParamsFrom<'deletePublicKey'>) => Promise<ReturnTypeFrom<'deletePublicKey'>>  = async params => {
  // undefined
    return this.client.deletePublicKey(params as any).promise();
  }

  deleteRealtimeLogConfig: (params: RawParamsFrom<'deleteRealtimeLogConfig'>) => Promise<ReturnTypeFrom<'deleteRealtimeLogConfig'>>  = async params => {
  // undefined
    return this.client.deleteRealtimeLogConfig(params as any).promise();
  }

  deleteResponseHeadersPolicy: (params: RawParamsFrom<'deleteResponseHeadersPolicy'>) => Promise<ReturnTypeFrom<'deleteResponseHeadersPolicy'>>  = async params => {
  // undefined
    return this.client.deleteResponseHeadersPolicy(params as any).promise();
  }

  deleteStreamingDistribution: (params: RawParamsFrom<'deleteStreamingDistribution'>) => Promise<ReturnTypeFrom<'deleteStreamingDistribution'>>  = async params => {
  // undefined
    return this.client.deleteStreamingDistribution(params as any).promise();
  }

  describeFunction: (params: RawParamsFrom<'describeFunction'>) => Promise<ReturnTypeFrom<'describeFunction'>>  = async params => {
  // undefined
    return this.client.describeFunction(params as any).promise();
  }

  getCachePolicy: (params: RawParamsFrom<'getCachePolicy'>) => Promise<ReturnTypeFrom<'getCachePolicy'>>  = async params => {
  // undefined
    return this.client.getCachePolicy(params as any).promise();
  }

  getCachePolicyConfig: (params: RawParamsFrom<'getCachePolicyConfig'>) => Promise<ReturnTypeFrom<'getCachePolicyConfig'>>  = async params => {
  // undefined
    return this.client.getCachePolicyConfig(params as any).promise();
  }

  getCloudFrontOriginAccessIdentity: (params: RawParamsFrom<'getCloudFrontOriginAccessIdentity'>) => Promise<ReturnTypeFrom<'getCloudFrontOriginAccessIdentity'>>  = async params => {
  // undefined
    return this.client.getCloudFrontOriginAccessIdentity(params as any).promise();
  }

  getCloudFrontOriginAccessIdentityConfig: (params: RawParamsFrom<'getCloudFrontOriginAccessIdentityConfig'>) => Promise<ReturnTypeFrom<'getCloudFrontOriginAccessIdentityConfig'>>  = async params => {
  // undefined
    return this.client.getCloudFrontOriginAccessIdentityConfig(params as any).promise();
  }

  getContinuousDeploymentPolicy: (params: RawParamsFrom<'getContinuousDeploymentPolicy'>) => Promise<ReturnTypeFrom<'getContinuousDeploymentPolicy'>>  = async params => {
  // undefined
    return this.client.getContinuousDeploymentPolicy(params as any).promise();
  }

  getContinuousDeploymentPolicyConfig: (params: RawParamsFrom<'getContinuousDeploymentPolicyConfig'>) => Promise<ReturnTypeFrom<'getContinuousDeploymentPolicyConfig'>>  = async params => {
  // undefined
    return this.client.getContinuousDeploymentPolicyConfig(params as any).promise();
  }

  getDistribution: (params: RawParamsFrom<'getDistribution'>) => Promise<ReturnTypeFrom<'getDistribution'>>  = async params => {
  // undefined
    return this.client.getDistribution(params as any).promise();
  }

  getDistributionConfig: (params: RawParamsFrom<'getDistributionConfig'>) => Promise<ReturnTypeFrom<'getDistributionConfig'>>  = async params => {
  // undefined
    return this.client.getDistributionConfig(params as any).promise();
  }

  getFieldLevelEncryption: (params: RawParamsFrom<'getFieldLevelEncryption'>) => Promise<ReturnTypeFrom<'getFieldLevelEncryption'>>  = async params => {
  // undefined
    return this.client.getFieldLevelEncryption(params as any).promise();
  }

  getFieldLevelEncryptionConfig: (params: RawParamsFrom<'getFieldLevelEncryptionConfig'>) => Promise<ReturnTypeFrom<'getFieldLevelEncryptionConfig'>>  = async params => {
  // undefined
    return this.client.getFieldLevelEncryptionConfig(params as any).promise();
  }

  getFieldLevelEncryptionProfile: (params: RawParamsFrom<'getFieldLevelEncryptionProfile'>) => Promise<ReturnTypeFrom<'getFieldLevelEncryptionProfile'>>  = async params => {
  // undefined
    return this.client.getFieldLevelEncryptionProfile(params as any).promise();
  }

  getFieldLevelEncryptionProfileConfig: (params: RawParamsFrom<'getFieldLevelEncryptionProfileConfig'>) => Promise<ReturnTypeFrom<'getFieldLevelEncryptionProfileConfig'>>  = async params => {
  // undefined
    return this.client.getFieldLevelEncryptionProfileConfig(params as any).promise();
  }

  getFunction: (params: RawParamsFrom<'getFunction'>) => Promise<ReturnTypeFrom<'getFunction'>>  = async params => {
  // undefined
    return this.client.getFunction(params as any).promise();
  }

  getInvalidation: (params: RawParamsFrom<'getInvalidation'>) => Promise<ReturnTypeFrom<'getInvalidation'>>  = async params => {
  // undefined
    return this.client.getInvalidation(params as any).promise();
  }

  getKeyGroup: (params: RawParamsFrom<'getKeyGroup'>) => Promise<ReturnTypeFrom<'getKeyGroup'>>  = async params => {
  // undefined
    return this.client.getKeyGroup(params as any).promise();
  }

  getKeyGroupConfig: (params: RawParamsFrom<'getKeyGroupConfig'>) => Promise<ReturnTypeFrom<'getKeyGroupConfig'>>  = async params => {
  // undefined
    return this.client.getKeyGroupConfig(params as any).promise();
  }

  getMonitoringSubscription: (params: RawParamsFrom<'getMonitoringSubscription'>) => Promise<ReturnTypeFrom<'getMonitoringSubscription'>>  = async params => {
  // undefined
    return this.client.getMonitoringSubscription(params as any).promise();
  }

  getOriginAccessControl: (params: RawParamsFrom<'getOriginAccessControl'>) => Promise<ReturnTypeFrom<'getOriginAccessControl'>>  = async params => {
  // undefined
    return this.client.getOriginAccessControl(params as any).promise();
  }

  getOriginAccessControlConfig: (params: RawParamsFrom<'getOriginAccessControlConfig'>) => Promise<ReturnTypeFrom<'getOriginAccessControlConfig'>>  = async params => {
  // undefined
    return this.client.getOriginAccessControlConfig(params as any).promise();
  }

  getOriginRequestPolicy: (params: RawParamsFrom<'getOriginRequestPolicy'>) => Promise<ReturnTypeFrom<'getOriginRequestPolicy'>>  = async params => {
  // undefined
    return this.client.getOriginRequestPolicy(params as any).promise();
  }

  getOriginRequestPolicyConfig: (params: RawParamsFrom<'getOriginRequestPolicyConfig'>) => Promise<ReturnTypeFrom<'getOriginRequestPolicyConfig'>>  = async params => {
  // undefined
    return this.client.getOriginRequestPolicyConfig(params as any).promise();
  }

  getPublicKey: (params: RawParamsFrom<'getPublicKey'>) => Promise<ReturnTypeFrom<'getPublicKey'>>  = async params => {
  // undefined
    return this.client.getPublicKey(params as any).promise();
  }

  getPublicKeyConfig: (params: RawParamsFrom<'getPublicKeyConfig'>) => Promise<ReturnTypeFrom<'getPublicKeyConfig'>>  = async params => {
  // undefined
    return this.client.getPublicKeyConfig(params as any).promise();
  }

  getRealtimeLogConfig: (params: RawParamsFrom<'getRealtimeLogConfig'>) => Promise<ReturnTypeFrom<'getRealtimeLogConfig'>>  = async params => {
  // undefined
    return this.client.getRealtimeLogConfig(params as any).promise();
  }

  getResponseHeadersPolicy: (params: RawParamsFrom<'getResponseHeadersPolicy'>) => Promise<ReturnTypeFrom<'getResponseHeadersPolicy'>>  = async params => {
  // undefined
    return this.client.getResponseHeadersPolicy(params as any).promise();
  }

  getResponseHeadersPolicyConfig: (params: RawParamsFrom<'getResponseHeadersPolicyConfig'>) => Promise<ReturnTypeFrom<'getResponseHeadersPolicyConfig'>>  = async params => {
  // undefined
    return this.client.getResponseHeadersPolicyConfig(params as any).promise();
  }

  getStreamingDistribution: (params: RawParamsFrom<'getStreamingDistribution'>) => Promise<ReturnTypeFrom<'getStreamingDistribution'>>  = async params => {
  // undefined
    return this.client.getStreamingDistribution(params as any).promise();
  }

  getStreamingDistributionConfig: (params: RawParamsFrom<'getStreamingDistributionConfig'>) => Promise<ReturnTypeFrom<'getStreamingDistributionConfig'>>  = async params => {
  // undefined
    return this.client.getStreamingDistributionConfig(params as any).promise();
  }

  listCachePolicies: (params: RawParamsFrom<'listCachePolicies'>) => Promise<ReturnTypeFrom<'listCachePolicies'>>  = async params => {
  // undefined
    return this.client.listCachePolicies(params as any).promise();
  }

  async listCloudFrontOriginAccessIdentities(params: { [K in keyof ParamsFrom<'listCloudFrontOriginAccessIdentities', { next?: string, limit?: number }>]: ParamsFrom<'listCloudFrontOriginAccessIdentities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCloudFrontOriginAccessIdentities'>]-?: ReturnTypeFrom<'listCloudFrontOriginAccessIdentities'>[K]}['CloudFrontOriginAccessIdentityList']['Items'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"CloudFrontOriginAccessIdentityList.IsTruncated","outputToken":"CloudFrontOriginAccessIdentityList.NextMarker","resultKey":"CloudFrontOriginAccessIdentityList.Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listCloudFrontOriginAccessIdentities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.CloudFrontOriginAccessIdentityList?.NextMarker ? Buffer.from(JSON.stringify({ token: result.CloudFrontOriginAccessIdentityList?.NextMarker, operation: 'listCloudFrontOriginAccessIdentities' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CloudFrontOriginAccessIdentityList?.Items ?? []) ? (result.CloudFrontOriginAccessIdentityList?.Items ?? []) : [result.CloudFrontOriginAccessIdentityList?.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listConflictingAliases: (params: RawParamsFrom<'listConflictingAliases'>) => Promise<ReturnTypeFrom<'listConflictingAliases'>>  = async params => {
  // undefined
    return this.client.listConflictingAliases(params as any).promise();
  }

  listContinuousDeploymentPolicies: (params: RawParamsFrom<'listContinuousDeploymentPolicies'>) => Promise<ReturnTypeFrom<'listContinuousDeploymentPolicies'>>  = async params => {
  // undefined
    return this.client.listContinuousDeploymentPolicies(params as any).promise();
  }

  async listDistributions(params: { [K in keyof ParamsFrom<'listDistributions', { next?: string, limit?: number }>]: ParamsFrom<'listDistributions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDistributions'>]-?: ReturnTypeFrom<'listDistributions'>[K]}['DistributionList']['Items'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"DistributionList.IsTruncated","outputToken":"DistributionList.NextMarker","resultKey":"DistributionList.Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listDistributions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.DistributionList?.NextMarker ? Buffer.from(JSON.stringify({ token: result.DistributionList?.NextMarker, operation: 'listDistributions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DistributionList?.Items ?? []) ? (result.DistributionList?.Items ?? []) : [result.DistributionList?.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listDistributionsByCachePolicyId: (params: RawParamsFrom<'listDistributionsByCachePolicyId'>) => Promise<ReturnTypeFrom<'listDistributionsByCachePolicyId'>>  = async params => {
  // undefined
    return this.client.listDistributionsByCachePolicyId(params as any).promise();
  }

  listDistributionsByKeyGroup: (params: RawParamsFrom<'listDistributionsByKeyGroup'>) => Promise<ReturnTypeFrom<'listDistributionsByKeyGroup'>>  = async params => {
  // undefined
    return this.client.listDistributionsByKeyGroup(params as any).promise();
  }

  listDistributionsByOriginRequestPolicyId: (params: RawParamsFrom<'listDistributionsByOriginRequestPolicyId'>) => Promise<ReturnTypeFrom<'listDistributionsByOriginRequestPolicyId'>>  = async params => {
  // undefined
    return this.client.listDistributionsByOriginRequestPolicyId(params as any).promise();
  }

  listDistributionsByRealtimeLogConfig: (params: RawParamsFrom<'listDistributionsByRealtimeLogConfig'>) => Promise<ReturnTypeFrom<'listDistributionsByRealtimeLogConfig'>>  = async params => {
  // undefined
    return this.client.listDistributionsByRealtimeLogConfig(params as any).promise();
  }

  listDistributionsByResponseHeadersPolicyId: (params: RawParamsFrom<'listDistributionsByResponseHeadersPolicyId'>) => Promise<ReturnTypeFrom<'listDistributionsByResponseHeadersPolicyId'>>  = async params => {
  // undefined
    return this.client.listDistributionsByResponseHeadersPolicyId(params as any).promise();
  }

  listDistributionsByWebACLId: (params: RawParamsFrom<'listDistributionsByWebACLId'>) => Promise<ReturnTypeFrom<'listDistributionsByWebACLId'>>  = async params => {
  // undefined
    return this.client.listDistributionsByWebACLId(params as any).promise();
  }

  listFieldLevelEncryptionConfigs: (params: RawParamsFrom<'listFieldLevelEncryptionConfigs'>) => Promise<ReturnTypeFrom<'listFieldLevelEncryptionConfigs'>>  = async params => {
  // undefined
    return this.client.listFieldLevelEncryptionConfigs(params as any).promise();
  }

  listFieldLevelEncryptionProfiles: (params: RawParamsFrom<'listFieldLevelEncryptionProfiles'>) => Promise<ReturnTypeFrom<'listFieldLevelEncryptionProfiles'>>  = async params => {
  // undefined
    return this.client.listFieldLevelEncryptionProfiles(params as any).promise();
  }

  listFunctions: (params: RawParamsFrom<'listFunctions'>) => Promise<ReturnTypeFrom<'listFunctions'>>  = async params => {
  // undefined
    return this.client.listFunctions(params as any).promise();
  }

  async listInvalidations(params: { [K in keyof ParamsFrom<'listInvalidations', { next?: string, limit?: number }>]: ParamsFrom<'listInvalidations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInvalidations'>]-?: ReturnTypeFrom<'listInvalidations'>[K]}['InvalidationList']['Items'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"InvalidationList.IsTruncated","outputToken":"InvalidationList.NextMarker","resultKey":"InvalidationList.Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listInvalidations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.InvalidationList?.NextMarker ? Buffer.from(JSON.stringify({ token: result.InvalidationList?.NextMarker, operation: 'listInvalidations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InvalidationList?.Items ?? []) ? (result.InvalidationList?.Items ?? []) : [result.InvalidationList?.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listKeyGroups: (params: RawParamsFrom<'listKeyGroups'>) => Promise<ReturnTypeFrom<'listKeyGroups'>>  = async params => {
  // undefined
    return this.client.listKeyGroups(params as any).promise();
  }

  listOriginAccessControls: (params: RawParamsFrom<'listOriginAccessControls'>) => Promise<ReturnTypeFrom<'listOriginAccessControls'>>  = async params => {
  // undefined
    return this.client.listOriginAccessControls(params as any).promise();
  }

  listOriginRequestPolicies: (params: RawParamsFrom<'listOriginRequestPolicies'>) => Promise<ReturnTypeFrom<'listOriginRequestPolicies'>>  = async params => {
  // undefined
    return this.client.listOriginRequestPolicies(params as any).promise();
  }

  listPublicKeys: (params: RawParamsFrom<'listPublicKeys'>) => Promise<ReturnTypeFrom<'listPublicKeys'>>  = async params => {
  // undefined
    return this.client.listPublicKeys(params as any).promise();
  }

  listRealtimeLogConfigs: (params: RawParamsFrom<'listRealtimeLogConfigs'>) => Promise<ReturnTypeFrom<'listRealtimeLogConfigs'>>  = async params => {
  // undefined
    return this.client.listRealtimeLogConfigs(params as any).promise();
  }

  listResponseHeadersPolicies: (params: RawParamsFrom<'listResponseHeadersPolicies'>) => Promise<ReturnTypeFrom<'listResponseHeadersPolicies'>>  = async params => {
  // undefined
    return this.client.listResponseHeadersPolicies(params as any).promise();
  }

  async listStreamingDistributions(params: { [K in keyof ParamsFrom<'listStreamingDistributions', { next?: string, limit?: number }>]: ParamsFrom<'listStreamingDistributions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStreamingDistributions'>]-?: ReturnTypeFrom<'listStreamingDistributions'>[K]}['StreamingDistributionList']['Items'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"StreamingDistributionList.IsTruncated","outputToken":"StreamingDistributionList.NextMarker","resultKey":"StreamingDistributionList.Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listStreamingDistributions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.StreamingDistributionList?.NextMarker ? Buffer.from(JSON.stringify({ token: result.StreamingDistributionList?.NextMarker, operation: 'listStreamingDistributions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StreamingDistributionList?.Items ?? []) ? (result.StreamingDistributionList?.Items ?? []) : [result.StreamingDistributionList?.Items]) as any;
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

  publishFunction: (params: RawParamsFrom<'publishFunction'>) => Promise<ReturnTypeFrom<'publishFunction'>>  = async params => {
  // undefined
    return this.client.publishFunction(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testFunction: (params: RawParamsFrom<'testFunction'>) => Promise<ReturnTypeFrom<'testFunction'>>  = async params => {
  // undefined
    return this.client.testFunction(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCachePolicy: (params: RawParamsFrom<'updateCachePolicy'>) => Promise<ReturnTypeFrom<'updateCachePolicy'>>  = async params => {
  // undefined
    return this.client.updateCachePolicy(params as any).promise();
  }

  updateCloudFrontOriginAccessIdentity: (params: RawParamsFrom<'updateCloudFrontOriginAccessIdentity'>) => Promise<ReturnTypeFrom<'updateCloudFrontOriginAccessIdentity'>>  = async params => {
  // undefined
    return this.client.updateCloudFrontOriginAccessIdentity(params as any).promise();
  }

  updateContinuousDeploymentPolicy: (params: RawParamsFrom<'updateContinuousDeploymentPolicy'>) => Promise<ReturnTypeFrom<'updateContinuousDeploymentPolicy'>>  = async params => {
  // undefined
    return this.client.updateContinuousDeploymentPolicy(params as any).promise();
  }

  updateDistribution: (params: RawParamsFrom<'updateDistribution'>) => Promise<ReturnTypeFrom<'updateDistribution'>>  = async params => {
  // undefined
    return this.client.updateDistribution(params as any).promise();
  }

  updateDistributionWithStagingConfig: (params: RawParamsFrom<'updateDistributionWithStagingConfig'>) => Promise<ReturnTypeFrom<'updateDistributionWithStagingConfig'>>  = async params => {
  // undefined
    return this.client.updateDistributionWithStagingConfig(params as any).promise();
  }

  updateFieldLevelEncryptionConfig: (params: RawParamsFrom<'updateFieldLevelEncryptionConfig'>) => Promise<ReturnTypeFrom<'updateFieldLevelEncryptionConfig'>>  = async params => {
  // undefined
    return this.client.updateFieldLevelEncryptionConfig(params as any).promise();
  }

  updateFieldLevelEncryptionProfile: (params: RawParamsFrom<'updateFieldLevelEncryptionProfile'>) => Promise<ReturnTypeFrom<'updateFieldLevelEncryptionProfile'>>  = async params => {
  // undefined
    return this.client.updateFieldLevelEncryptionProfile(params as any).promise();
  }

  updateFunction: (params: RawParamsFrom<'updateFunction'>) => Promise<ReturnTypeFrom<'updateFunction'>>  = async params => {
  // undefined
    return this.client.updateFunction(params as any).promise();
  }

  updateKeyGroup: (params: RawParamsFrom<'updateKeyGroup'>) => Promise<ReturnTypeFrom<'updateKeyGroup'>>  = async params => {
  // undefined
    return this.client.updateKeyGroup(params as any).promise();
  }

  updateOriginAccessControl: (params: RawParamsFrom<'updateOriginAccessControl'>) => Promise<ReturnTypeFrom<'updateOriginAccessControl'>>  = async params => {
  // undefined
    return this.client.updateOriginAccessControl(params as any).promise();
  }

  updateOriginRequestPolicy: (params: RawParamsFrom<'updateOriginRequestPolicy'>) => Promise<ReturnTypeFrom<'updateOriginRequestPolicy'>>  = async params => {
  // undefined
    return this.client.updateOriginRequestPolicy(params as any).promise();
  }

  updatePublicKey: (params: RawParamsFrom<'updatePublicKey'>) => Promise<ReturnTypeFrom<'updatePublicKey'>>  = async params => {
  // undefined
    return this.client.updatePublicKey(params as any).promise();
  }

  updateRealtimeLogConfig: (params: RawParamsFrom<'updateRealtimeLogConfig'>) => Promise<ReturnTypeFrom<'updateRealtimeLogConfig'>>  = async params => {
  // undefined
    return this.client.updateRealtimeLogConfig(params as any).promise();
  }

  updateResponseHeadersPolicy: (params: RawParamsFrom<'updateResponseHeadersPolicy'>) => Promise<ReturnTypeFrom<'updateResponseHeadersPolicy'>>  = async params => {
  // undefined
    return this.client.updateResponseHeadersPolicy(params as any).promise();
  }

  updateStreamingDistribution: (params: RawParamsFrom<'updateStreamingDistribution'>) => Promise<ReturnTypeFrom<'updateStreamingDistribution'>>  = async params => {
  // undefined
    return this.client.updateStreamingDistribution(params as any).promise();
  }
  
  static fromClient(client: AWSCloudFront): CloudFront {
    return new CloudFront(client) as any;
  }
  
  static client(options?: AWSCloudFront.Types.ClientConfiguration): CloudFront {
    return new CloudFront(new AWSCloudFront(options)) as any;
  }
}  
