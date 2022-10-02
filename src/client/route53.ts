import { Request, Route53 as AWSRoute53 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRoute53> = AWSRoute53[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRoute53> = AWSRoute53[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRoute53[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRoute53, Extras> = AWSRoute53[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'route53';
    global: true;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listCidrCollections","listHealthChecks","listHostedZones","listQueryLoggingConfigs"];
    
  activateKeySigningKey: FunctionTypeFrom<'activateKeySigningKey'>;

  associateVPCWithHostedZone: FunctionTypeFrom<'associateVPCWithHostedZone'>;

  changeCidrCollection: FunctionTypeFrom<'changeCidrCollection'>;

  changeResourceRecordSets: FunctionTypeFrom<'changeResourceRecordSets'>;

  changeTagsForResource: FunctionTypeFrom<'changeTagsForResource'>;

  createCidrCollection: FunctionTypeFrom<'createCidrCollection'>;

  createHealthCheck: FunctionTypeFrom<'createHealthCheck'>;

  createHostedZone: FunctionTypeFrom<'createHostedZone'>;

  createKeySigningKey: FunctionTypeFrom<'createKeySigningKey'>;

  createQueryLoggingConfig: FunctionTypeFrom<'createQueryLoggingConfig'>;

  createReusableDelegationSet: FunctionTypeFrom<'createReusableDelegationSet'>;

  createTrafficPolicy: FunctionTypeFrom<'createTrafficPolicy'>;

  createTrafficPolicyInstance: FunctionTypeFrom<'createTrafficPolicyInstance'>;

  createTrafficPolicyVersion: FunctionTypeFrom<'createTrafficPolicyVersion'>;

  createVPCAssociationAuthorization: FunctionTypeFrom<'createVPCAssociationAuthorization'>;

  deactivateKeySigningKey: FunctionTypeFrom<'deactivateKeySigningKey'>;

  deleteCidrCollection: FunctionTypeFrom<'deleteCidrCollection'>;

  deleteHealthCheck: FunctionTypeFrom<'deleteHealthCheck'>;

  deleteHostedZone: FunctionTypeFrom<'deleteHostedZone'>;

  deleteKeySigningKey: FunctionTypeFrom<'deleteKeySigningKey'>;

  deleteQueryLoggingConfig: FunctionTypeFrom<'deleteQueryLoggingConfig'>;

  deleteReusableDelegationSet: FunctionTypeFrom<'deleteReusableDelegationSet'>;

  deleteTrafficPolicy: FunctionTypeFrom<'deleteTrafficPolicy'>;

  deleteTrafficPolicyInstance: FunctionTypeFrom<'deleteTrafficPolicyInstance'>;

  deleteVPCAssociationAuthorization: FunctionTypeFrom<'deleteVPCAssociationAuthorization'>;

  disableHostedZoneDNSSEC: FunctionTypeFrom<'disableHostedZoneDNSSEC'>;

  disassociateVPCFromHostedZone: FunctionTypeFrom<'disassociateVPCFromHostedZone'>;

  enableHostedZoneDNSSEC: FunctionTypeFrom<'enableHostedZoneDNSSEC'>;

  getAccountLimit: FunctionTypeFrom<'getAccountLimit'>;

  getChange: FunctionTypeFrom<'getChange'>;

  getCheckerIpRanges: FunctionTypeFrom<'getCheckerIpRanges'>;

  getDNSSEC: FunctionTypeFrom<'getDNSSEC'>;

  getGeoLocation: FunctionTypeFrom<'getGeoLocation'>;

  getHealthCheck: FunctionTypeFrom<'getHealthCheck'>;

  getHealthCheckCount: FunctionTypeFrom<'getHealthCheckCount'>;

  getHealthCheckLastFailureReason: FunctionTypeFrom<'getHealthCheckLastFailureReason'>;

  getHealthCheckStatus: FunctionTypeFrom<'getHealthCheckStatus'>;

  getHostedZone: FunctionTypeFrom<'getHostedZone'>;

  getHostedZoneCount: FunctionTypeFrom<'getHostedZoneCount'>;

  getHostedZoneLimit: FunctionTypeFrom<'getHostedZoneLimit'>;

  getQueryLoggingConfig: FunctionTypeFrom<'getQueryLoggingConfig'>;

  getReusableDelegationSet: FunctionTypeFrom<'getReusableDelegationSet'>;

  getReusableDelegationSetLimit: FunctionTypeFrom<'getReusableDelegationSetLimit'>;

  getTrafficPolicy: FunctionTypeFrom<'getTrafficPolicy'>;

  getTrafficPolicyInstance: FunctionTypeFrom<'getTrafficPolicyInstance'>;

  getTrafficPolicyInstanceCount: FunctionTypeFrom<'getTrafficPolicyInstanceCount'>;

  listCidrBlocks(params: { [K in keyof Omit<ParamsFrom<'listCidrBlocks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCidrBlocks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCidrBlocks'>]-?: ReturnTypeFrom<'listCidrBlocks'>[K]}['CidrBlocks'] }>
  ;

  listCidrCollections(params: { [K in keyof Omit<ParamsFrom<'listCidrCollections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCidrCollections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCidrCollections'>]-?: ReturnTypeFrom<'listCidrCollections'>[K]}['CidrCollections'] }>
  listCidrCollections(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCidrCollections'>]-?: ReturnTypeFrom<'listCidrCollections'>[K]}['CidrCollections'] }>;

  listCidrLocations(params: { [K in keyof Omit<ParamsFrom<'listCidrLocations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCidrLocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCidrLocations'>]-?: ReturnTypeFrom<'listCidrLocations'>[K]}['CidrLocations'] }>
  ;

  listGeoLocations: FunctionTypeFrom<'listGeoLocations'>;

  listHealthChecks(params: { [K in keyof Omit<ParamsFrom<'listHealthChecks', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listHealthChecks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHealthChecks'>]-?: ReturnTypeFrom<'listHealthChecks'>[K]}['HealthChecks'] }>
  listHealthChecks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHealthChecks'>]-?: ReturnTypeFrom<'listHealthChecks'>[K]}['HealthChecks'] }>;

  listHostedZones(params: { [K in keyof Omit<ParamsFrom<'listHostedZones', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listHostedZones', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHostedZones'>]-?: ReturnTypeFrom<'listHostedZones'>[K]}['HostedZones'] }>
  listHostedZones(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHostedZones'>]-?: ReturnTypeFrom<'listHostedZones'>[K]}['HostedZones'] }>;

  listHostedZonesByName: FunctionTypeFrom<'listHostedZonesByName'>;

  listHostedZonesByVPC: FunctionTypeFrom<'listHostedZonesByVPC'>;

  listQueryLoggingConfigs(params: { [K in keyof Omit<ParamsFrom<'listQueryLoggingConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listQueryLoggingConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQueryLoggingConfigs'>]-?: ReturnTypeFrom<'listQueryLoggingConfigs'>[K]}['QueryLoggingConfigs'] }>
  listQueryLoggingConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQueryLoggingConfigs'>]-?: ReturnTypeFrom<'listQueryLoggingConfigs'>[K]}['QueryLoggingConfigs'] }>;

  listResourceRecordSets: FunctionTypeFrom<'listResourceRecordSets'>;

  listReusableDelegationSets: FunctionTypeFrom<'listReusableDelegationSets'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTagsForResources: FunctionTypeFrom<'listTagsForResources'>;

  listTrafficPolicies: FunctionTypeFrom<'listTrafficPolicies'>;

  listTrafficPolicyInstances: FunctionTypeFrom<'listTrafficPolicyInstances'>;

  listTrafficPolicyInstancesByHostedZone: FunctionTypeFrom<'listTrafficPolicyInstancesByHostedZone'>;

  listTrafficPolicyInstancesByPolicy: FunctionTypeFrom<'listTrafficPolicyInstancesByPolicy'>;

  listTrafficPolicyVersions: FunctionTypeFrom<'listTrafficPolicyVersions'>;

  listVPCAssociationAuthorizations: FunctionTypeFrom<'listVPCAssociationAuthorizations'>;

  testDNSAnswer: FunctionTypeFrom<'testDNSAnswer'>;

  updateHealthCheck: FunctionTypeFrom<'updateHealthCheck'>;

  updateHostedZoneComment: FunctionTypeFrom<'updateHostedZoneComment'>;

  updateTrafficPolicyComment: FunctionTypeFrom<'updateTrafficPolicyComment'>;

  updateTrafficPolicyInstance: FunctionTypeFrom<'updateTrafficPolicyInstance'>
}
 
export class Route53 implements ClientType {
  private constructor(private readonly client: AWSRoute53) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'route53';
  public readonly global = true;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listCidrCollections","listHealthChecks","listHostedZones","listQueryLoggingConfigs"] as const;
  
  async activateKeySigningKey(...args: any): Promise<any> {
  // undefined
    return this.client.activateKeySigningKey(...args).promise()
  }

  async associateVPCWithHostedZone(...args: any): Promise<any> {
  // undefined
    return this.client.associateVPCWithHostedZone(...args).promise()
  }

  async changeCidrCollection(...args: any): Promise<any> {
  // undefined
    return this.client.changeCidrCollection(...args).promise()
  }

  async changeResourceRecordSets(...args: any): Promise<any> {
  // undefined
    return this.client.changeResourceRecordSets(...args).promise()
  }

  async changeTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.changeTagsForResource(...args).promise()
  }

  async createCidrCollection(...args: any): Promise<any> {
  // undefined
    return this.client.createCidrCollection(...args).promise()
  }

  async createHealthCheck(...args: any): Promise<any> {
  // undefined
    return this.client.createHealthCheck(...args).promise()
  }

  async createHostedZone(...args: any): Promise<any> {
  // undefined
    return this.client.createHostedZone(...args).promise()
  }

  async createKeySigningKey(...args: any): Promise<any> {
  // undefined
    return this.client.createKeySigningKey(...args).promise()
  }

  async createQueryLoggingConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createQueryLoggingConfig(...args).promise()
  }

  async createReusableDelegationSet(...args: any): Promise<any> {
  // undefined
    return this.client.createReusableDelegationSet(...args).promise()
  }

  async createTrafficPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createTrafficPolicy(...args).promise()
  }

  async createTrafficPolicyInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createTrafficPolicyInstance(...args).promise()
  }

  async createTrafficPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createTrafficPolicyVersion(...args).promise()
  }

  async createVPCAssociationAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.createVPCAssociationAuthorization(...args).promise()
  }

  async deactivateKeySigningKey(...args: any): Promise<any> {
  // undefined
    return this.client.deactivateKeySigningKey(...args).promise()
  }

  async deleteCidrCollection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCidrCollection(...args).promise()
  }

  async deleteHealthCheck(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHealthCheck(...args).promise()
  }

  async deleteHostedZone(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHostedZone(...args).promise()
  }

  async deleteKeySigningKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteKeySigningKey(...args).promise()
  }

  async deleteQueryLoggingConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQueryLoggingConfig(...args).promise()
  }

  async deleteReusableDelegationSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReusableDelegationSet(...args).promise()
  }

  async deleteTrafficPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrafficPolicy(...args).promise()
  }

  async deleteTrafficPolicyInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrafficPolicyInstance(...args).promise()
  }

  async deleteVPCAssociationAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVPCAssociationAuthorization(...args).promise()
  }

  async disableHostedZoneDNSSEC(...args: any): Promise<any> {
  // undefined
    return this.client.disableHostedZoneDNSSEC(...args).promise()
  }

  async disassociateVPCFromHostedZone(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateVPCFromHostedZone(...args).promise()
  }

  async enableHostedZoneDNSSEC(...args: any): Promise<any> {
  // undefined
    return this.client.enableHostedZoneDNSSEC(...args).promise()
  }

  async getAccountLimit(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountLimit(...args).promise()
  }

  async getChange(...args: any): Promise<any> {
  // undefined
    return this.client.getChange(...args).promise()
  }

  async getCheckerIpRanges(...args: any): Promise<any> {
  // undefined
    return this.client.getCheckerIpRanges(...args).promise()
  }

  async getDNSSEC(...args: any): Promise<any> {
  // undefined
    return this.client.getDNSSEC(...args).promise()
  }

  async getGeoLocation(...args: any): Promise<any> {
  // undefined
    return this.client.getGeoLocation(...args).promise()
  }

  async getHealthCheck(...args: any): Promise<any> {
  // undefined
    return this.client.getHealthCheck(...args).promise()
  }

  async getHealthCheckCount(...args: any): Promise<any> {
  // undefined
    return this.client.getHealthCheckCount(...args).promise()
  }

  async getHealthCheckLastFailureReason(...args: any): Promise<any> {
  // undefined
    return this.client.getHealthCheckLastFailureReason(...args).promise()
  }

  async getHealthCheckStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getHealthCheckStatus(...args).promise()
  }

  async getHostedZone(...args: any): Promise<any> {
  // undefined
    return this.client.getHostedZone(...args).promise()
  }

  async getHostedZoneCount(...args: any): Promise<any> {
  // undefined
    return this.client.getHostedZoneCount(...args).promise()
  }

  async getHostedZoneLimit(...args: any): Promise<any> {
  // undefined
    return this.client.getHostedZoneLimit(...args).promise()
  }

  async getQueryLoggingConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getQueryLoggingConfig(...args).promise()
  }

  async getReusableDelegationSet(...args: any): Promise<any> {
  // undefined
    return this.client.getReusableDelegationSet(...args).promise()
  }

  async getReusableDelegationSetLimit(...args: any): Promise<any> {
  // undefined
    return this.client.getReusableDelegationSetLimit(...args).promise()
  }

  async getTrafficPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getTrafficPolicy(...args).promise()
  }

  async getTrafficPolicyInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getTrafficPolicyInstance(...args).promise()
  }

  async getTrafficPolicyInstanceCount(...args: any): Promise<any> {
  // undefined
    return this.client.getTrafficPolicyInstanceCount(...args).promise()
  }

  async listCidrBlocks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CidrBlocks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCidrBlocks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CidrBlocks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCidrCollections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CidrCollections"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCidrCollections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CidrCollections ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCidrLocations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CidrLocations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCidrLocations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CidrLocations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGeoLocations(...args: any): Promise<any> {
  // undefined
    return this.client.listGeoLocations(...args).promise()
  }

  async listHealthChecks(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"NextMarker","resultKey":"HealthChecks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listHealthChecks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.HealthChecks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHostedZones(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"NextMarker","resultKey":"HostedZones"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listHostedZones(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.HostedZones ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHostedZonesByName(...args: any): Promise<any> {
  // undefined
    return this.client.listHostedZonesByName(...args).promise()
  }

  async listHostedZonesByVPC(...args: any): Promise<any> {
  // undefined
    return this.client.listHostedZonesByVPC(...args).promise()
  }

  async listQueryLoggingConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QueryLoggingConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueryLoggingConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.QueryLoggingConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceRecordSets(...args: any): Promise<any> {
  // {"inputToken":["StartRecordName","StartRecordType","StartRecordIdentifier"],"limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":["NextRecordName","NextRecordType","NextRecordIdentifier"],"resultKey":"ResourceRecordSets"}
    return this.client.listResourceRecordSets(...args).promise()
  }

  async listReusableDelegationSets(...args: any): Promise<any> {
  // undefined
    return this.client.listReusableDelegationSets(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTagsForResources(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResources(...args).promise()
  }

  async listTrafficPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.listTrafficPolicies(...args).promise()
  }

  async listTrafficPolicyInstances(...args: any): Promise<any> {
  // undefined
    return this.client.listTrafficPolicyInstances(...args).promise()
  }

  async listTrafficPolicyInstancesByHostedZone(...args: any): Promise<any> {
  // undefined
    return this.client.listTrafficPolicyInstancesByHostedZone(...args).promise()
  }

  async listTrafficPolicyInstancesByPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.listTrafficPolicyInstancesByPolicy(...args).promise()
  }

  async listTrafficPolicyVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listTrafficPolicyVersions(...args).promise()
  }

  async listVPCAssociationAuthorizations(...args: any): Promise<any> {
  // undefined
    return this.client.listVPCAssociationAuthorizations(...args).promise()
  }

  async testDNSAnswer(...args: any): Promise<any> {
  // undefined
    return this.client.testDNSAnswer(...args).promise()
  }

  async updateHealthCheck(...args: any): Promise<any> {
  // undefined
    return this.client.updateHealthCheck(...args).promise()
  }

  async updateHostedZoneComment(...args: any): Promise<any> {
  // undefined
    return this.client.updateHostedZoneComment(...args).promise()
  }

  async updateTrafficPolicyComment(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrafficPolicyComment(...args).promise()
  }

  async updateTrafficPolicyInstance(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrafficPolicyInstance(...args).promise()
  }
  
  static fromClient(client: AWSRoute53): ClientType {
    return new Route53(client) as any;
  }
  
  static client(options?: AWSRoute53.Types.ClientConfiguration): ClientType {
    return new Route53(new AWSRoute53(options)) as any;
  }
}  
