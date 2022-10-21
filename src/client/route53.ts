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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRoute53> = AWSRoute53[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Route53 {
  private constructor(private readonly client: AWSRoute53) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'route53' as const;
  public readonly global = true as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listCidrCollections","listHealthChecks","listHostedZones","listQueryLoggingConfigs"] as const;
  
  activateKeySigningKey: (params: RawParamsFrom<'activateKeySigningKey'>) => Promise<ReturnTypeFrom<'activateKeySigningKey'>>  = async params => {
  // undefined
    return this.client.activateKeySigningKey(params as any).promise();
  }

  associateVPCWithHostedZone: (params: RawParamsFrom<'associateVPCWithHostedZone'>) => Promise<ReturnTypeFrom<'associateVPCWithHostedZone'>>  = async params => {
  // undefined
    return this.client.associateVPCWithHostedZone(params as any).promise();
  }

  changeCidrCollection: (params: RawParamsFrom<'changeCidrCollection'>) => Promise<ReturnTypeFrom<'changeCidrCollection'>>  = async params => {
  // undefined
    return this.client.changeCidrCollection(params as any).promise();
  }

  changeResourceRecordSets: (params: RawParamsFrom<'changeResourceRecordSets'>) => Promise<ReturnTypeFrom<'changeResourceRecordSets'>>  = async params => {
  // undefined
    return this.client.changeResourceRecordSets(params as any).promise();
  }

  changeTagsForResource: (params: RawParamsFrom<'changeTagsForResource'>) => Promise<ReturnTypeFrom<'changeTagsForResource'>>  = async params => {
  // undefined
    return this.client.changeTagsForResource(params as any).promise();
  }

  createCidrCollection: (params: RawParamsFrom<'createCidrCollection'>) => Promise<ReturnTypeFrom<'createCidrCollection'>>  = async params => {
  // undefined
    return this.client.createCidrCollection(params as any).promise();
  }

  createHealthCheck: (params: RawParamsFrom<'createHealthCheck'>) => Promise<ReturnTypeFrom<'createHealthCheck'>>  = async params => {
  // undefined
    return this.client.createHealthCheck(params as any).promise();
  }

  createHostedZone: (params: RawParamsFrom<'createHostedZone'>) => Promise<ReturnTypeFrom<'createHostedZone'>>  = async params => {
  // undefined
    return this.client.createHostedZone(params as any).promise();
  }

  createKeySigningKey: (params: RawParamsFrom<'createKeySigningKey'>) => Promise<ReturnTypeFrom<'createKeySigningKey'>>  = async params => {
  // undefined
    return this.client.createKeySigningKey(params as any).promise();
  }

  createQueryLoggingConfig: (params: RawParamsFrom<'createQueryLoggingConfig'>) => Promise<ReturnTypeFrom<'createQueryLoggingConfig'>>  = async params => {
  // undefined
    return this.client.createQueryLoggingConfig(params as any).promise();
  }

  createReusableDelegationSet: (params: RawParamsFrom<'createReusableDelegationSet'>) => Promise<ReturnTypeFrom<'createReusableDelegationSet'>>  = async params => {
  // undefined
    return this.client.createReusableDelegationSet(params as any).promise();
  }

  createTrafficPolicy: (params: RawParamsFrom<'createTrafficPolicy'>) => Promise<ReturnTypeFrom<'createTrafficPolicy'>>  = async params => {
  // undefined
    return this.client.createTrafficPolicy(params as any).promise();
  }

  createTrafficPolicyInstance: (params: RawParamsFrom<'createTrafficPolicyInstance'>) => Promise<ReturnTypeFrom<'createTrafficPolicyInstance'>>  = async params => {
  // undefined
    return this.client.createTrafficPolicyInstance(params as any).promise();
  }

  createTrafficPolicyVersion: (params: RawParamsFrom<'createTrafficPolicyVersion'>) => Promise<ReturnTypeFrom<'createTrafficPolicyVersion'>>  = async params => {
  // undefined
    return this.client.createTrafficPolicyVersion(params as any).promise();
  }

  createVPCAssociationAuthorization: (params: RawParamsFrom<'createVPCAssociationAuthorization'>) => Promise<ReturnTypeFrom<'createVPCAssociationAuthorization'>>  = async params => {
  // undefined
    return this.client.createVPCAssociationAuthorization(params as any).promise();
  }

  deactivateKeySigningKey: (params: RawParamsFrom<'deactivateKeySigningKey'>) => Promise<ReturnTypeFrom<'deactivateKeySigningKey'>>  = async params => {
  // undefined
    return this.client.deactivateKeySigningKey(params as any).promise();
  }

  deleteCidrCollection: (params: RawParamsFrom<'deleteCidrCollection'>) => Promise<ReturnTypeFrom<'deleteCidrCollection'>>  = async params => {
  // undefined
    return this.client.deleteCidrCollection(params as any).promise();
  }

  deleteHealthCheck: (params: RawParamsFrom<'deleteHealthCheck'>) => Promise<ReturnTypeFrom<'deleteHealthCheck'>>  = async params => {
  // undefined
    return this.client.deleteHealthCheck(params as any).promise();
  }

  deleteHostedZone: (params: RawParamsFrom<'deleteHostedZone'>) => Promise<ReturnTypeFrom<'deleteHostedZone'>>  = async params => {
  // undefined
    return this.client.deleteHostedZone(params as any).promise();
  }

  deleteKeySigningKey: (params: RawParamsFrom<'deleteKeySigningKey'>) => Promise<ReturnTypeFrom<'deleteKeySigningKey'>>  = async params => {
  // undefined
    return this.client.deleteKeySigningKey(params as any).promise();
  }

  deleteQueryLoggingConfig: (params: RawParamsFrom<'deleteQueryLoggingConfig'>) => Promise<ReturnTypeFrom<'deleteQueryLoggingConfig'>>  = async params => {
  // undefined
    return this.client.deleteQueryLoggingConfig(params as any).promise();
  }

  deleteReusableDelegationSet: (params: RawParamsFrom<'deleteReusableDelegationSet'>) => Promise<ReturnTypeFrom<'deleteReusableDelegationSet'>>  = async params => {
  // undefined
    return this.client.deleteReusableDelegationSet(params as any).promise();
  }

  deleteTrafficPolicy: (params: RawParamsFrom<'deleteTrafficPolicy'>) => Promise<ReturnTypeFrom<'deleteTrafficPolicy'>>  = async params => {
  // undefined
    return this.client.deleteTrafficPolicy(params as any).promise();
  }

  deleteTrafficPolicyInstance: (params: RawParamsFrom<'deleteTrafficPolicyInstance'>) => Promise<ReturnTypeFrom<'deleteTrafficPolicyInstance'>>  = async params => {
  // undefined
    return this.client.deleteTrafficPolicyInstance(params as any).promise();
  }

  deleteVPCAssociationAuthorization: (params: RawParamsFrom<'deleteVPCAssociationAuthorization'>) => Promise<ReturnTypeFrom<'deleteVPCAssociationAuthorization'>>  = async params => {
  // undefined
    return this.client.deleteVPCAssociationAuthorization(params as any).promise();
  }

  disableHostedZoneDNSSEC: (params: RawParamsFrom<'disableHostedZoneDNSSEC'>) => Promise<ReturnTypeFrom<'disableHostedZoneDNSSEC'>>  = async params => {
  // undefined
    return this.client.disableHostedZoneDNSSEC(params as any).promise();
  }

  disassociateVPCFromHostedZone: (params: RawParamsFrom<'disassociateVPCFromHostedZone'>) => Promise<ReturnTypeFrom<'disassociateVPCFromHostedZone'>>  = async params => {
  // undefined
    return this.client.disassociateVPCFromHostedZone(params as any).promise();
  }

  enableHostedZoneDNSSEC: (params: RawParamsFrom<'enableHostedZoneDNSSEC'>) => Promise<ReturnTypeFrom<'enableHostedZoneDNSSEC'>>  = async params => {
  // undefined
    return this.client.enableHostedZoneDNSSEC(params as any).promise();
  }

  getAccountLimit: (params: RawParamsFrom<'getAccountLimit'>) => Promise<ReturnTypeFrom<'getAccountLimit'>>  = async params => {
  // undefined
    return this.client.getAccountLimit(params as any).promise();
  }

  getChange: (params: RawParamsFrom<'getChange'>) => Promise<ReturnTypeFrom<'getChange'>>  = async params => {
  // undefined
    return this.client.getChange(params as any).promise();
  }

  getCheckerIpRanges: (params: RawParamsFrom<'getCheckerIpRanges'>) => Promise<ReturnTypeFrom<'getCheckerIpRanges'>>  = async params => {
  // undefined
    return this.client.getCheckerIpRanges(params as any).promise();
  }

  getDNSSEC: (params: RawParamsFrom<'getDNSSEC'>) => Promise<ReturnTypeFrom<'getDNSSEC'>>  = async params => {
  // undefined
    return this.client.getDNSSEC(params as any).promise();
  }

  getGeoLocation: (params: RawParamsFrom<'getGeoLocation'>) => Promise<ReturnTypeFrom<'getGeoLocation'>>  = async params => {
  // undefined
    return this.client.getGeoLocation(params as any).promise();
  }

  getHealthCheck: (params: RawParamsFrom<'getHealthCheck'>) => Promise<ReturnTypeFrom<'getHealthCheck'>>  = async params => {
  // undefined
    return this.client.getHealthCheck(params as any).promise();
  }

  getHealthCheckCount: (params: RawParamsFrom<'getHealthCheckCount'>) => Promise<ReturnTypeFrom<'getHealthCheckCount'>>  = async params => {
  // undefined
    return this.client.getHealthCheckCount(params as any).promise();
  }

  getHealthCheckLastFailureReason: (params: RawParamsFrom<'getHealthCheckLastFailureReason'>) => Promise<ReturnTypeFrom<'getHealthCheckLastFailureReason'>>  = async params => {
  // undefined
    return this.client.getHealthCheckLastFailureReason(params as any).promise();
  }

  getHealthCheckStatus: (params: RawParamsFrom<'getHealthCheckStatus'>) => Promise<ReturnTypeFrom<'getHealthCheckStatus'>>  = async params => {
  // undefined
    return this.client.getHealthCheckStatus(params as any).promise();
  }

  getHostedZone: (params: RawParamsFrom<'getHostedZone'>) => Promise<ReturnTypeFrom<'getHostedZone'>>  = async params => {
  // undefined
    return this.client.getHostedZone(params as any).promise();
  }

  getHostedZoneCount: (params: RawParamsFrom<'getHostedZoneCount'>) => Promise<ReturnTypeFrom<'getHostedZoneCount'>>  = async params => {
  // undefined
    return this.client.getHostedZoneCount(params as any).promise();
  }

  getHostedZoneLimit: (params: RawParamsFrom<'getHostedZoneLimit'>) => Promise<ReturnTypeFrom<'getHostedZoneLimit'>>  = async params => {
  // undefined
    return this.client.getHostedZoneLimit(params as any).promise();
  }

  getQueryLoggingConfig: (params: RawParamsFrom<'getQueryLoggingConfig'>) => Promise<ReturnTypeFrom<'getQueryLoggingConfig'>>  = async params => {
  // undefined
    return this.client.getQueryLoggingConfig(params as any).promise();
  }

  getReusableDelegationSet: (params: RawParamsFrom<'getReusableDelegationSet'>) => Promise<ReturnTypeFrom<'getReusableDelegationSet'>>  = async params => {
  // undefined
    return this.client.getReusableDelegationSet(params as any).promise();
  }

  getReusableDelegationSetLimit: (params: RawParamsFrom<'getReusableDelegationSetLimit'>) => Promise<ReturnTypeFrom<'getReusableDelegationSetLimit'>>  = async params => {
  // undefined
    return this.client.getReusableDelegationSetLimit(params as any).promise();
  }

  getTrafficPolicy: (params: RawParamsFrom<'getTrafficPolicy'>) => Promise<ReturnTypeFrom<'getTrafficPolicy'>>  = async params => {
  // undefined
    return this.client.getTrafficPolicy(params as any).promise();
  }

  getTrafficPolicyInstance: (params: RawParamsFrom<'getTrafficPolicyInstance'>) => Promise<ReturnTypeFrom<'getTrafficPolicyInstance'>>  = async params => {
  // undefined
    return this.client.getTrafficPolicyInstance(params as any).promise();
  }

  getTrafficPolicyInstanceCount: (params: RawParamsFrom<'getTrafficPolicyInstanceCount'>) => Promise<ReturnTypeFrom<'getTrafficPolicyInstanceCount'>>  = async params => {
  // undefined
    return this.client.getTrafficPolicyInstanceCount(params as any).promise();
  }

  async listCidrBlocks(params: { [K in keyof ParamsFrom<'listCidrBlocks', { next?: string, limit?: number }>]: ParamsFrom<'listCidrBlocks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCidrBlocks'>]-?: ReturnTypeFrom<'listCidrBlocks'>[K]}['CidrBlocks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CidrBlocks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCidrBlocks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCidrBlocks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CidrBlocks ?? []) ? (result.CidrBlocks ?? []) : [result.CidrBlocks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCidrCollections(params: { [K in keyof ParamsFrom<'listCidrCollections', { next?: string, limit?: number }>]: ParamsFrom<'listCidrCollections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCidrCollections'>]-?: ReturnTypeFrom<'listCidrCollections'>[K]}['CidrCollections'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CidrCollections"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCidrCollections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCidrCollections' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CidrCollections ?? []) ? (result.CidrCollections ?? []) : [result.CidrCollections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCidrLocations(params: { [K in keyof ParamsFrom<'listCidrLocations', { next?: string, limit?: number }>]: ParamsFrom<'listCidrLocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCidrLocations'>]-?: ReturnTypeFrom<'listCidrLocations'>[K]}['CidrLocations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CidrLocations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCidrLocations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCidrLocations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CidrLocations ?? []) ? (result.CidrLocations ?? []) : [result.CidrLocations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listGeoLocations: (params: RawParamsFrom<'listGeoLocations'>) => Promise<ReturnTypeFrom<'listGeoLocations'>>  = async params => {
  // undefined
    return this.client.listGeoLocations(params as any).promise();
  }

  async listHealthChecks(params: { [K in keyof ParamsFrom<'listHealthChecks', { next?: string, limit?: number }>]: ParamsFrom<'listHealthChecks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listHealthChecks'>]-?: ReturnTypeFrom<'listHealthChecks'>[K]}['HealthChecks'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"NextMarker","resultKey":"HealthChecks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listHealthChecks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listHealthChecks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.HealthChecks ?? []) ? (result.HealthChecks ?? []) : [result.HealthChecks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHostedZones(params: { [K in keyof ParamsFrom<'listHostedZones', { next?: string, limit?: number }>]: ParamsFrom<'listHostedZones', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listHostedZones'>]-?: ReturnTypeFrom<'listHostedZones'>[K]}['HostedZones'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"NextMarker","resultKey":"HostedZones"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listHostedZones({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listHostedZones' })).toString('base64') : undefined;
    const member = (Array.isArray(result.HostedZones ?? []) ? (result.HostedZones ?? []) : [result.HostedZones]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listHostedZonesByName: (params: RawParamsFrom<'listHostedZonesByName'>) => Promise<ReturnTypeFrom<'listHostedZonesByName'>>  = async params => {
  // undefined
    return this.client.listHostedZonesByName(params as any).promise();
  }

  listHostedZonesByVPC: (params: RawParamsFrom<'listHostedZonesByVPC'>) => Promise<ReturnTypeFrom<'listHostedZonesByVPC'>>  = async params => {
  // undefined
    return this.client.listHostedZonesByVPC(params as any).promise();
  }

  async listQueryLoggingConfigs(params: { [K in keyof ParamsFrom<'listQueryLoggingConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listQueryLoggingConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listQueryLoggingConfigs'>]-?: ReturnTypeFrom<'listQueryLoggingConfigs'>[K]}['QueryLoggingConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QueryLoggingConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueryLoggingConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listQueryLoggingConfigs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.QueryLoggingConfigs ?? []) ? (result.QueryLoggingConfigs ?? []) : [result.QueryLoggingConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listResourceRecordSets: (params: RawParamsFrom<'listResourceRecordSets'>) => Promise<ReturnTypeFrom<'listResourceRecordSets'>>  = async params => {
  // {"inputToken":["StartRecordName","StartRecordType","StartRecordIdentifier"],"limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":["NextRecordName","NextRecordType","NextRecordIdentifier"],"resultKey":"ResourceRecordSets"}
    return this.client.listResourceRecordSets(params as any).promise();
  }

  listReusableDelegationSets: (params: RawParamsFrom<'listReusableDelegationSets'>) => Promise<ReturnTypeFrom<'listReusableDelegationSets'>>  = async params => {
  // undefined
    return this.client.listReusableDelegationSets(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTagsForResources: (params: RawParamsFrom<'listTagsForResources'>) => Promise<ReturnTypeFrom<'listTagsForResources'>>  = async params => {
  // undefined
    return this.client.listTagsForResources(params as any).promise();
  }

  listTrafficPolicies: (params: RawParamsFrom<'listTrafficPolicies'>) => Promise<ReturnTypeFrom<'listTrafficPolicies'>>  = async params => {
  // undefined
    return this.client.listTrafficPolicies(params as any).promise();
  }

  listTrafficPolicyInstances: (params: RawParamsFrom<'listTrafficPolicyInstances'>) => Promise<ReturnTypeFrom<'listTrafficPolicyInstances'>>  = async params => {
  // undefined
    return this.client.listTrafficPolicyInstances(params as any).promise();
  }

  listTrafficPolicyInstancesByHostedZone: (params: RawParamsFrom<'listTrafficPolicyInstancesByHostedZone'>) => Promise<ReturnTypeFrom<'listTrafficPolicyInstancesByHostedZone'>>  = async params => {
  // undefined
    return this.client.listTrafficPolicyInstancesByHostedZone(params as any).promise();
  }

  listTrafficPolicyInstancesByPolicy: (params: RawParamsFrom<'listTrafficPolicyInstancesByPolicy'>) => Promise<ReturnTypeFrom<'listTrafficPolicyInstancesByPolicy'>>  = async params => {
  // undefined
    return this.client.listTrafficPolicyInstancesByPolicy(params as any).promise();
  }

  listTrafficPolicyVersions: (params: RawParamsFrom<'listTrafficPolicyVersions'>) => Promise<ReturnTypeFrom<'listTrafficPolicyVersions'>>  = async params => {
  // undefined
    return this.client.listTrafficPolicyVersions(params as any).promise();
  }

  listVPCAssociationAuthorizations: (params: RawParamsFrom<'listVPCAssociationAuthorizations'>) => Promise<ReturnTypeFrom<'listVPCAssociationAuthorizations'>>  = async params => {
  // undefined
    return this.client.listVPCAssociationAuthorizations(params as any).promise();
  }

  testDNSAnswer: (params: RawParamsFrom<'testDNSAnswer'>) => Promise<ReturnTypeFrom<'testDNSAnswer'>>  = async params => {
  // undefined
    return this.client.testDNSAnswer(params as any).promise();
  }

  updateHealthCheck: (params: RawParamsFrom<'updateHealthCheck'>) => Promise<ReturnTypeFrom<'updateHealthCheck'>>  = async params => {
  // undefined
    return this.client.updateHealthCheck(params as any).promise();
  }

  updateHostedZoneComment: (params: RawParamsFrom<'updateHostedZoneComment'>) => Promise<ReturnTypeFrom<'updateHostedZoneComment'>>  = async params => {
  // undefined
    return this.client.updateHostedZoneComment(params as any).promise();
  }

  updateTrafficPolicyComment: (params: RawParamsFrom<'updateTrafficPolicyComment'>) => Promise<ReturnTypeFrom<'updateTrafficPolicyComment'>>  = async params => {
  // undefined
    return this.client.updateTrafficPolicyComment(params as any).promise();
  }

  updateTrafficPolicyInstance: (params: RawParamsFrom<'updateTrafficPolicyInstance'>) => Promise<ReturnTypeFrom<'updateTrafficPolicyInstance'>>  = async params => {
  // undefined
    return this.client.updateTrafficPolicyInstance(params as any).promise();
  }
  
  static fromClient(client: AWSRoute53): Route53 {
    return new Route53(client) as any;
  }
  
  static client(options?: AWSRoute53.Types.ClientConfiguration): Route53 {
    return new Route53(new AWSRoute53(options)) as any;
  }
}  
