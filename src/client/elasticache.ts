import { Request, ElastiCache as AWSElastiCache } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSElastiCache> = AWSElastiCache[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSElastiCache> = AWSElastiCache[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSElastiCache[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSElastiCache, Extras> = AWSElastiCache[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSElastiCache> = AWSElastiCache[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ElastiCache {
  private constructor(private readonly client: AWSElastiCache) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticache' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["describeCacheClusters","describeCacheEngineVersions","describeCacheParameterGroups","describeCacheSecurityGroups","describeCacheSubnetGroups","describeEvents","describeGlobalReplicationGroups","describeReplicationGroups","describeReservedCacheNodes","describeReservedCacheNodesOfferings","describeServiceUpdates","describeSnapshots","describeUpdateActions","describeUserGroups","describeUsers"] as const;
  
  addTagsToResource: (params: RawParamsFrom<'addTagsToResource'>) => Promise<ReturnTypeFrom<'addTagsToResource'>>  = async params => {
  // undefined
    return this.client.addTagsToResource(params as any).promise();
  }

  authorizeCacheSecurityGroupIngress: (params: RawParamsFrom<'authorizeCacheSecurityGroupIngress'>) => Promise<ReturnTypeFrom<'authorizeCacheSecurityGroupIngress'>>  = async params => {
  // undefined
    return this.client.authorizeCacheSecurityGroupIngress(params as any).promise();
  }

  batchApplyUpdateAction: (params: RawParamsFrom<'batchApplyUpdateAction'>) => Promise<ReturnTypeFrom<'batchApplyUpdateAction'>>  = async params => {
  // undefined
    return this.client.batchApplyUpdateAction(params as any).promise();
  }

  batchStopUpdateAction: (params: RawParamsFrom<'batchStopUpdateAction'>) => Promise<ReturnTypeFrom<'batchStopUpdateAction'>>  = async params => {
  // undefined
    return this.client.batchStopUpdateAction(params as any).promise();
  }

  completeMigration: (params: RawParamsFrom<'completeMigration'>) => Promise<ReturnTypeFrom<'completeMigration'>>  = async params => {
  // undefined
    return this.client.completeMigration(params as any).promise();
  }

  copySnapshot: (params: RawParamsFrom<'copySnapshot'>) => Promise<ReturnTypeFrom<'copySnapshot'>>  = async params => {
  // undefined
    return this.client.copySnapshot(params as any).promise();
  }

  createCacheCluster: (params: RawParamsFrom<'createCacheCluster'>) => Promise<ReturnTypeFrom<'createCacheCluster'>>  = async params => {
  // undefined
    return this.client.createCacheCluster(params as any).promise();
  }

  createCacheParameterGroup: (params: RawParamsFrom<'createCacheParameterGroup'>) => Promise<ReturnTypeFrom<'createCacheParameterGroup'>>  = async params => {
  // undefined
    return this.client.createCacheParameterGroup(params as any).promise();
  }

  createCacheSecurityGroup: (params: RawParamsFrom<'createCacheSecurityGroup'>) => Promise<ReturnTypeFrom<'createCacheSecurityGroup'>>  = async params => {
  // undefined
    return this.client.createCacheSecurityGroup(params as any).promise();
  }

  createCacheSubnetGroup: (params: RawParamsFrom<'createCacheSubnetGroup'>) => Promise<ReturnTypeFrom<'createCacheSubnetGroup'>>  = async params => {
  // undefined
    return this.client.createCacheSubnetGroup(params as any).promise();
  }

  createGlobalReplicationGroup: (params: RawParamsFrom<'createGlobalReplicationGroup'>) => Promise<ReturnTypeFrom<'createGlobalReplicationGroup'>>  = async params => {
  // undefined
    return this.client.createGlobalReplicationGroup(params as any).promise();
  }

  createReplicationGroup: (params: RawParamsFrom<'createReplicationGroup'>) => Promise<ReturnTypeFrom<'createReplicationGroup'>>  = async params => {
  // undefined
    return this.client.createReplicationGroup(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  createUserGroup: (params: RawParamsFrom<'createUserGroup'>) => Promise<ReturnTypeFrom<'createUserGroup'>>  = async params => {
  // undefined
    return this.client.createUserGroup(params as any).promise();
  }

  decreaseNodeGroupsInGlobalReplicationGroup: (params: RawParamsFrom<'decreaseNodeGroupsInGlobalReplicationGroup'>) => Promise<ReturnTypeFrom<'decreaseNodeGroupsInGlobalReplicationGroup'>>  = async params => {
  // undefined
    return this.client.decreaseNodeGroupsInGlobalReplicationGroup(params as any).promise();
  }

  decreaseReplicaCount: (params: RawParamsFrom<'decreaseReplicaCount'>) => Promise<ReturnTypeFrom<'decreaseReplicaCount'>>  = async params => {
  // undefined
    return this.client.decreaseReplicaCount(params as any).promise();
  }

  deleteCacheCluster: (params: RawParamsFrom<'deleteCacheCluster'>) => Promise<ReturnTypeFrom<'deleteCacheCluster'>>  = async params => {
  // undefined
    return this.client.deleteCacheCluster(params as any).promise();
  }

  deleteCacheParameterGroup: (params: RawParamsFrom<'deleteCacheParameterGroup'>) => Promise<ReturnTypeFrom<'deleteCacheParameterGroup'>>  = async params => {
  // undefined
    return this.client.deleteCacheParameterGroup(params as any).promise();
  }

  deleteCacheSecurityGroup: (params: RawParamsFrom<'deleteCacheSecurityGroup'>) => Promise<ReturnTypeFrom<'deleteCacheSecurityGroup'>>  = async params => {
  // undefined
    return this.client.deleteCacheSecurityGroup(params as any).promise();
  }

  deleteCacheSubnetGroup: (params: RawParamsFrom<'deleteCacheSubnetGroup'>) => Promise<ReturnTypeFrom<'deleteCacheSubnetGroup'>>  = async params => {
  // undefined
    return this.client.deleteCacheSubnetGroup(params as any).promise();
  }

  deleteGlobalReplicationGroup: (params: RawParamsFrom<'deleteGlobalReplicationGroup'>) => Promise<ReturnTypeFrom<'deleteGlobalReplicationGroup'>>  = async params => {
  // undefined
    return this.client.deleteGlobalReplicationGroup(params as any).promise();
  }

  deleteReplicationGroup: (params: RawParamsFrom<'deleteReplicationGroup'>) => Promise<ReturnTypeFrom<'deleteReplicationGroup'>>  = async params => {
  // undefined
    return this.client.deleteReplicationGroup(params as any).promise();
  }

  deleteSnapshot: (params: RawParamsFrom<'deleteSnapshot'>) => Promise<ReturnTypeFrom<'deleteSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteSnapshot(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  deleteUserGroup: (params: RawParamsFrom<'deleteUserGroup'>) => Promise<ReturnTypeFrom<'deleteUserGroup'>>  = async params => {
  // undefined
    return this.client.deleteUserGroup(params as any).promise();
  }

  async describeCacheClusters(params: { [K in keyof ParamsFrom<'describeCacheClusters', { next?: string, limit?: number }>]: ParamsFrom<'describeCacheClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCacheClusters'>]-?: ReturnTypeFrom<'describeCacheClusters'>[K]}['CacheClusters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheClusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeCacheClusters' })).toString('base64');
    const member = (Array.isArray(result.CacheClusters ?? []) ? (result.CacheClusters ?? []) : [result.CacheClusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheEngineVersions(params: { [K in keyof ParamsFrom<'describeCacheEngineVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeCacheEngineVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCacheEngineVersions'>]-?: ReturnTypeFrom<'describeCacheEngineVersions'>[K]}['CacheEngineVersions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheEngineVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheEngineVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeCacheEngineVersions' })).toString('base64');
    const member = (Array.isArray(result.CacheEngineVersions ?? []) ? (result.CacheEngineVersions ?? []) : [result.CacheEngineVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheParameterGroups(params: { [K in keyof ParamsFrom<'describeCacheParameterGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeCacheParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCacheParameterGroups'>]-?: ReturnTypeFrom<'describeCacheParameterGroups'>[K]}['CacheParameterGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheParameterGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheParameterGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeCacheParameterGroups' })).toString('base64');
    const member = (Array.isArray(result.CacheParameterGroups ?? []) ? (result.CacheParameterGroups ?? []) : [result.CacheParameterGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheParameters(params: { [K in keyof ParamsFrom<'describeCacheParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeCacheParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCacheParameters'>]-?: ReturnTypeFrom<'describeCacheParameters'>[K]}['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeCacheParameters' })).toString('base64');
    const member = (Array.isArray(result.Parameters ?? []) ? (result.Parameters ?? []) : [result.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheSecurityGroups(params: { [K in keyof ParamsFrom<'describeCacheSecurityGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeCacheSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCacheSecurityGroups'>]-?: ReturnTypeFrom<'describeCacheSecurityGroups'>[K]}['CacheSecurityGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheSecurityGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheSecurityGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeCacheSecurityGroups' })).toString('base64');
    const member = (Array.isArray(result.CacheSecurityGroups ?? []) ? (result.CacheSecurityGroups ?? []) : [result.CacheSecurityGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheSubnetGroups(params: { [K in keyof ParamsFrom<'describeCacheSubnetGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeCacheSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCacheSubnetGroups'>]-?: ReturnTypeFrom<'describeCacheSubnetGroups'>[K]}['CacheSubnetGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheSubnetGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheSubnetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeCacheSubnetGroups' })).toString('base64');
    const member = (Array.isArray(result.CacheSubnetGroups ?? []) ? (result.CacheSubnetGroups ?? []) : [result.CacheSubnetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEngineDefaultParameters(params: { [K in keyof ParamsFrom<'describeEngineDefaultParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeEngineDefaultParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEngineDefaultParameters'>]-?: ReturnTypeFrom<'describeEngineDefaultParameters'>[K]}['EngineDefaults']['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"EngineDefaults.Marker","resultKey":"EngineDefaults.Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEngineDefaultParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.EngineDefaults?.Marker, operation: 'describeEngineDefaultParameters' })).toString('base64');
    const member = (Array.isArray(result.EngineDefaults?.Parameters ?? []) ? (result.EngineDefaults?.Parameters ?? []) : [result.EngineDefaults?.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvents(params: { [K in keyof ParamsFrom<'describeEvents', { next?: string, limit?: number }>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeEvents' })).toString('base64');
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGlobalReplicationGroups(params: { [K in keyof ParamsFrom<'describeGlobalReplicationGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeGlobalReplicationGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeGlobalReplicationGroups'>]-?: ReturnTypeFrom<'describeGlobalReplicationGroups'>[K]}['GlobalReplicationGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"GlobalReplicationGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeGlobalReplicationGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeGlobalReplicationGroups' })).toString('base64');
    const member = (Array.isArray(result.GlobalReplicationGroups ?? []) ? (result.GlobalReplicationGroups ?? []) : [result.GlobalReplicationGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReplicationGroups(params: { [K in keyof ParamsFrom<'describeReplicationGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeReplicationGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReplicationGroups'>]-?: ReturnTypeFrom<'describeReplicationGroups'>[K]}['ReplicationGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReplicationGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReplicationGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeReplicationGroups' })).toString('base64');
    const member = (Array.isArray(result.ReplicationGroups ?? []) ? (result.ReplicationGroups ?? []) : [result.ReplicationGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedCacheNodes(params: { [K in keyof ParamsFrom<'describeReservedCacheNodes', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedCacheNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedCacheNodes'>]-?: ReturnTypeFrom<'describeReservedCacheNodes'>[K]}['ReservedCacheNodes'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedCacheNodes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedCacheNodes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeReservedCacheNodes' })).toString('base64');
    const member = (Array.isArray(result.ReservedCacheNodes ?? []) ? (result.ReservedCacheNodes ?? []) : [result.ReservedCacheNodes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedCacheNodesOfferings(params: { [K in keyof ParamsFrom<'describeReservedCacheNodesOfferings', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedCacheNodesOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedCacheNodesOfferings'>]-?: ReturnTypeFrom<'describeReservedCacheNodesOfferings'>[K]}['ReservedCacheNodesOfferings'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedCacheNodesOfferings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedCacheNodesOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeReservedCacheNodesOfferings' })).toString('base64');
    const member = (Array.isArray(result.ReservedCacheNodesOfferings ?? []) ? (result.ReservedCacheNodesOfferings ?? []) : [result.ReservedCacheNodesOfferings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeServiceUpdates(params: { [K in keyof ParamsFrom<'describeServiceUpdates', { next?: string, limit?: number }>]: ParamsFrom<'describeServiceUpdates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeServiceUpdates'>]-?: ReturnTypeFrom<'describeServiceUpdates'>[K]}['ServiceUpdates'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ServiceUpdates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeServiceUpdates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeServiceUpdates' })).toString('base64');
    const member = (Array.isArray(result.ServiceUpdates ?? []) ? (result.ServiceUpdates ?? []) : [result.ServiceUpdates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshots(params: { [K in keyof ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSnapshots'>]-?: ReturnTypeFrom<'describeSnapshots'>[K]}['Snapshots'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeSnapshots' })).toString('base64');
    const member = (Array.isArray(result.Snapshots ?? []) ? (result.Snapshots ?? []) : [result.Snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUpdateActions(params: { [K in keyof ParamsFrom<'describeUpdateActions', { next?: string, limit?: number }>]: ParamsFrom<'describeUpdateActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeUpdateActions'>]-?: ReturnTypeFrom<'describeUpdateActions'>[K]}['UpdateActions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"UpdateActions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeUpdateActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeUpdateActions' })).toString('base64');
    const member = (Array.isArray(result.UpdateActions ?? []) ? (result.UpdateActions ?? []) : [result.UpdateActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUserGroups(params: { [K in keyof ParamsFrom<'describeUserGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeUserGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeUserGroups'>]-?: ReturnTypeFrom<'describeUserGroups'>[K]}['UserGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"UserGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeUserGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeUserGroups' })).toString('base64');
    const member = (Array.isArray(result.UserGroups ?? []) ? (result.UserGroups ?? []) : [result.UserGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUsers(params: { [K in keyof ParamsFrom<'describeUsers', { next?: string, limit?: number }>]: ParamsFrom<'describeUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeUsers'>]-?: ReturnTypeFrom<'describeUsers'>[K]}['Users'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeUsers' })).toString('base64');
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disassociateGlobalReplicationGroup: (params: RawParamsFrom<'disassociateGlobalReplicationGroup'>) => Promise<ReturnTypeFrom<'disassociateGlobalReplicationGroup'>>  = async params => {
  // undefined
    return this.client.disassociateGlobalReplicationGroup(params as any).promise();
  }

  failoverGlobalReplicationGroup: (params: RawParamsFrom<'failoverGlobalReplicationGroup'>) => Promise<ReturnTypeFrom<'failoverGlobalReplicationGroup'>>  = async params => {
  // undefined
    return this.client.failoverGlobalReplicationGroup(params as any).promise();
  }

  increaseNodeGroupsInGlobalReplicationGroup: (params: RawParamsFrom<'increaseNodeGroupsInGlobalReplicationGroup'>) => Promise<ReturnTypeFrom<'increaseNodeGroupsInGlobalReplicationGroup'>>  = async params => {
  // undefined
    return this.client.increaseNodeGroupsInGlobalReplicationGroup(params as any).promise();
  }

  increaseReplicaCount: (params: RawParamsFrom<'increaseReplicaCount'>) => Promise<ReturnTypeFrom<'increaseReplicaCount'>>  = async params => {
  // undefined
    return this.client.increaseReplicaCount(params as any).promise();
  }

  listAllowedNodeTypeModifications: (params: RawParamsFrom<'listAllowedNodeTypeModifications'>) => Promise<ReturnTypeFrom<'listAllowedNodeTypeModifications'>>  = async params => {
  // undefined
    return this.client.listAllowedNodeTypeModifications(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  modifyCacheCluster: (params: RawParamsFrom<'modifyCacheCluster'>) => Promise<ReturnTypeFrom<'modifyCacheCluster'>>  = async params => {
  // undefined
    return this.client.modifyCacheCluster(params as any).promise();
  }

  modifyCacheParameterGroup: (params: RawParamsFrom<'modifyCacheParameterGroup'>) => Promise<ReturnTypeFrom<'modifyCacheParameterGroup'>>  = async params => {
  // undefined
    return this.client.modifyCacheParameterGroup(params as any).promise();
  }

  modifyCacheSubnetGroup: (params: RawParamsFrom<'modifyCacheSubnetGroup'>) => Promise<ReturnTypeFrom<'modifyCacheSubnetGroup'>>  = async params => {
  // undefined
    return this.client.modifyCacheSubnetGroup(params as any).promise();
  }

  modifyGlobalReplicationGroup: (params: RawParamsFrom<'modifyGlobalReplicationGroup'>) => Promise<ReturnTypeFrom<'modifyGlobalReplicationGroup'>>  = async params => {
  // undefined
    return this.client.modifyGlobalReplicationGroup(params as any).promise();
  }

  modifyReplicationGroup: (params: RawParamsFrom<'modifyReplicationGroup'>) => Promise<ReturnTypeFrom<'modifyReplicationGroup'>>  = async params => {
  // undefined
    return this.client.modifyReplicationGroup(params as any).promise();
  }

  modifyReplicationGroupShardConfiguration: (params: RawParamsFrom<'modifyReplicationGroupShardConfiguration'>) => Promise<ReturnTypeFrom<'modifyReplicationGroupShardConfiguration'>>  = async params => {
  // undefined
    return this.client.modifyReplicationGroupShardConfiguration(params as any).promise();
  }

  modifyUser: (params: RawParamsFrom<'modifyUser'>) => Promise<ReturnTypeFrom<'modifyUser'>>  = async params => {
  // undefined
    return this.client.modifyUser(params as any).promise();
  }

  modifyUserGroup: (params: RawParamsFrom<'modifyUserGroup'>) => Promise<ReturnTypeFrom<'modifyUserGroup'>>  = async params => {
  // undefined
    return this.client.modifyUserGroup(params as any).promise();
  }

  purchaseReservedCacheNodesOffering: (params: RawParamsFrom<'purchaseReservedCacheNodesOffering'>) => Promise<ReturnTypeFrom<'purchaseReservedCacheNodesOffering'>>  = async params => {
  // undefined
    return this.client.purchaseReservedCacheNodesOffering(params as any).promise();
  }

  rebalanceSlotsInGlobalReplicationGroup: (params: RawParamsFrom<'rebalanceSlotsInGlobalReplicationGroup'>) => Promise<ReturnTypeFrom<'rebalanceSlotsInGlobalReplicationGroup'>>  = async params => {
  // undefined
    return this.client.rebalanceSlotsInGlobalReplicationGroup(params as any).promise();
  }

  rebootCacheCluster: (params: RawParamsFrom<'rebootCacheCluster'>) => Promise<ReturnTypeFrom<'rebootCacheCluster'>>  = async params => {
  // undefined
    return this.client.rebootCacheCluster(params as any).promise();
  }

  removeTagsFromResource: (params: RawParamsFrom<'removeTagsFromResource'>) => Promise<ReturnTypeFrom<'removeTagsFromResource'>>  = async params => {
  // undefined
    return this.client.removeTagsFromResource(params as any).promise();
  }

  resetCacheParameterGroup: (params: RawParamsFrom<'resetCacheParameterGroup'>) => Promise<ReturnTypeFrom<'resetCacheParameterGroup'>>  = async params => {
  // undefined
    return this.client.resetCacheParameterGroup(params as any).promise();
  }

  revokeCacheSecurityGroupIngress: (params: RawParamsFrom<'revokeCacheSecurityGroupIngress'>) => Promise<ReturnTypeFrom<'revokeCacheSecurityGroupIngress'>>  = async params => {
  // undefined
    return this.client.revokeCacheSecurityGroupIngress(params as any).promise();
  }

  startMigration: (params: RawParamsFrom<'startMigration'>) => Promise<ReturnTypeFrom<'startMigration'>>  = async params => {
  // undefined
    return this.client.startMigration(params as any).promise();
  }

  testFailover: (params: RawParamsFrom<'testFailover'>) => Promise<ReturnTypeFrom<'testFailover'>>  = async params => {
  // undefined
    return this.client.testFailover(params as any).promise();
  }
  
  static fromClient(client: AWSElastiCache): ElastiCache {
    return new ElastiCache(client) as any;
  }
  
  static client(options?: AWSElastiCache.Types.ClientConfiguration): ElastiCache {
    return new ElastiCache(new AWSElastiCache(options)) as any;
  }
}  
