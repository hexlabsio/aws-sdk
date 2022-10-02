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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'elasticache';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["describeCacheClusters","describeCacheEngineVersions","describeCacheParameterGroups","describeCacheSecurityGroups","describeCacheSubnetGroups","describeEvents","describeGlobalReplicationGroups","describeReplicationGroups","describeReservedCacheNodes","describeReservedCacheNodesOfferings","describeServiceUpdates","describeSnapshots","describeUpdateActions","describeUserGroups","describeUsers"];
    
  addTagsToResource: FunctionTypeFrom<'addTagsToResource'>;

  authorizeCacheSecurityGroupIngress: FunctionTypeFrom<'authorizeCacheSecurityGroupIngress'>;

  batchApplyUpdateAction: FunctionTypeFrom<'batchApplyUpdateAction'>;

  batchStopUpdateAction: FunctionTypeFrom<'batchStopUpdateAction'>;

  completeMigration: FunctionTypeFrom<'completeMigration'>;

  copySnapshot: FunctionTypeFrom<'copySnapshot'>;

  createCacheCluster: FunctionTypeFrom<'createCacheCluster'>;

  createCacheParameterGroup: FunctionTypeFrom<'createCacheParameterGroup'>;

  createCacheSecurityGroup: FunctionTypeFrom<'createCacheSecurityGroup'>;

  createCacheSubnetGroup: FunctionTypeFrom<'createCacheSubnetGroup'>;

  createGlobalReplicationGroup: FunctionTypeFrom<'createGlobalReplicationGroup'>;

  createReplicationGroup: FunctionTypeFrom<'createReplicationGroup'>;

  createSnapshot: FunctionTypeFrom<'createSnapshot'>;

  createUser: FunctionTypeFrom<'createUser'>;

  createUserGroup: FunctionTypeFrom<'createUserGroup'>;

  decreaseNodeGroupsInGlobalReplicationGroup: FunctionTypeFrom<'decreaseNodeGroupsInGlobalReplicationGroup'>;

  decreaseReplicaCount: FunctionTypeFrom<'decreaseReplicaCount'>;

  deleteCacheCluster: FunctionTypeFrom<'deleteCacheCluster'>;

  deleteCacheParameterGroup: FunctionTypeFrom<'deleteCacheParameterGroup'>;

  deleteCacheSecurityGroup: FunctionTypeFrom<'deleteCacheSecurityGroup'>;

  deleteCacheSubnetGroup: FunctionTypeFrom<'deleteCacheSubnetGroup'>;

  deleteGlobalReplicationGroup: FunctionTypeFrom<'deleteGlobalReplicationGroup'>;

  deleteReplicationGroup: FunctionTypeFrom<'deleteReplicationGroup'>;

  deleteSnapshot: FunctionTypeFrom<'deleteSnapshot'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  deleteUserGroup: FunctionTypeFrom<'deleteUserGroup'>;

  describeCacheClusters(params: { [K in keyof Omit<ParamsFrom<'describeCacheClusters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeCacheClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheClusters'>]-?: ReturnTypeFrom<'describeCacheClusters'>[K]}['CacheClusters'] }>
  describeCacheClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheClusters'>]-?: ReturnTypeFrom<'describeCacheClusters'>[K]}['CacheClusters'] }>;

  describeCacheEngineVersions(params: { [K in keyof Omit<ParamsFrom<'describeCacheEngineVersions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeCacheEngineVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheEngineVersions'>]-?: ReturnTypeFrom<'describeCacheEngineVersions'>[K]}['CacheEngineVersions'] }>
  describeCacheEngineVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheEngineVersions'>]-?: ReturnTypeFrom<'describeCacheEngineVersions'>[K]}['CacheEngineVersions'] }>;

  describeCacheParameterGroups(params: { [K in keyof Omit<ParamsFrom<'describeCacheParameterGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeCacheParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheParameterGroups'>]-?: ReturnTypeFrom<'describeCacheParameterGroups'>[K]}['CacheParameterGroups'] }>
  describeCacheParameterGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheParameterGroups'>]-?: ReturnTypeFrom<'describeCacheParameterGroups'>[K]}['CacheParameterGroups'] }>;

  describeCacheParameters(params: { [K in keyof Omit<ParamsFrom<'describeCacheParameters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeCacheParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheParameters'>]-?: ReturnTypeFrom<'describeCacheParameters'>[K]}['Parameters'] }>
  ;

  describeCacheSecurityGroups(params: { [K in keyof Omit<ParamsFrom<'describeCacheSecurityGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeCacheSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheSecurityGroups'>]-?: ReturnTypeFrom<'describeCacheSecurityGroups'>[K]}['CacheSecurityGroups'] }>
  describeCacheSecurityGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheSecurityGroups'>]-?: ReturnTypeFrom<'describeCacheSecurityGroups'>[K]}['CacheSecurityGroups'] }>;

  describeCacheSubnetGroups(params: { [K in keyof Omit<ParamsFrom<'describeCacheSubnetGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeCacheSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheSubnetGroups'>]-?: ReturnTypeFrom<'describeCacheSubnetGroups'>[K]}['CacheSubnetGroups'] }>
  describeCacheSubnetGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCacheSubnetGroups'>]-?: ReturnTypeFrom<'describeCacheSubnetGroups'>[K]}['CacheSubnetGroups'] }>;

  describeEngineDefaultParameters(params: { [K in keyof Omit<ParamsFrom<'describeEngineDefaultParameters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEngineDefaultParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEngineDefaultParameters'>]-?: ReturnTypeFrom<'describeEngineDefaultParameters'>[K]}['EngineDefaults']['Parameters'] }>
  ;

  describeEvents(params: { [K in keyof Omit<ParamsFrom<'describeEvents', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>
  describeEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>;

  describeGlobalReplicationGroups(params: { [K in keyof Omit<ParamsFrom<'describeGlobalReplicationGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeGlobalReplicationGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGlobalReplicationGroups'>]-?: ReturnTypeFrom<'describeGlobalReplicationGroups'>[K]}['GlobalReplicationGroups'] }>
  describeGlobalReplicationGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGlobalReplicationGroups'>]-?: ReturnTypeFrom<'describeGlobalReplicationGroups'>[K]}['GlobalReplicationGroups'] }>;

  describeReplicationGroups(params: { [K in keyof Omit<ParamsFrom<'describeReplicationGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeReplicationGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReplicationGroups'>]-?: ReturnTypeFrom<'describeReplicationGroups'>[K]}['ReplicationGroups'] }>
  describeReplicationGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReplicationGroups'>]-?: ReturnTypeFrom<'describeReplicationGroups'>[K]}['ReplicationGroups'] }>;

  describeReservedCacheNodes(params: { [K in keyof Omit<ParamsFrom<'describeReservedCacheNodes', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeReservedCacheNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedCacheNodes'>]-?: ReturnTypeFrom<'describeReservedCacheNodes'>[K]}['ReservedCacheNodes'] }>
  describeReservedCacheNodes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedCacheNodes'>]-?: ReturnTypeFrom<'describeReservedCacheNodes'>[K]}['ReservedCacheNodes'] }>;

  describeReservedCacheNodesOfferings(params: { [K in keyof Omit<ParamsFrom<'describeReservedCacheNodesOfferings', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeReservedCacheNodesOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedCacheNodesOfferings'>]-?: ReturnTypeFrom<'describeReservedCacheNodesOfferings'>[K]}['ReservedCacheNodesOfferings'] }>
  describeReservedCacheNodesOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedCacheNodesOfferings'>]-?: ReturnTypeFrom<'describeReservedCacheNodesOfferings'>[K]}['ReservedCacheNodesOfferings'] }>;

  describeServiceUpdates(params: { [K in keyof Omit<ParamsFrom<'describeServiceUpdates', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeServiceUpdates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeServiceUpdates'>]-?: ReturnTypeFrom<'describeServiceUpdates'>[K]}['ServiceUpdates'] }>
  describeServiceUpdates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeServiceUpdates'>]-?: ReturnTypeFrom<'describeServiceUpdates'>[K]}['ServiceUpdates'] }>;

  describeSnapshots(params: { [K in keyof Omit<ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshots'>]-?: ReturnTypeFrom<'describeSnapshots'>[K]}['Snapshots'] }>
  describeSnapshots(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshots'>]-?: ReturnTypeFrom<'describeSnapshots'>[K]}['Snapshots'] }>;

  describeUpdateActions(params: { [K in keyof Omit<ParamsFrom<'describeUpdateActions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeUpdateActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUpdateActions'>]-?: ReturnTypeFrom<'describeUpdateActions'>[K]}['UpdateActions'] }>
  describeUpdateActions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUpdateActions'>]-?: ReturnTypeFrom<'describeUpdateActions'>[K]}['UpdateActions'] }>;

  describeUserGroups(params: { [K in keyof Omit<ParamsFrom<'describeUserGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeUserGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUserGroups'>]-?: ReturnTypeFrom<'describeUserGroups'>[K]}['UserGroups'] }>
  describeUserGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUserGroups'>]-?: ReturnTypeFrom<'describeUserGroups'>[K]}['UserGroups'] }>;

  describeUsers(params: { [K in keyof Omit<ParamsFrom<'describeUsers', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUsers'>]-?: ReturnTypeFrom<'describeUsers'>[K]}['Users'] }>
  describeUsers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUsers'>]-?: ReturnTypeFrom<'describeUsers'>[K]}['Users'] }>;

  disassociateGlobalReplicationGroup: FunctionTypeFrom<'disassociateGlobalReplicationGroup'>;

  failoverGlobalReplicationGroup: FunctionTypeFrom<'failoverGlobalReplicationGroup'>;

  increaseNodeGroupsInGlobalReplicationGroup: FunctionTypeFrom<'increaseNodeGroupsInGlobalReplicationGroup'>;

  increaseReplicaCount: FunctionTypeFrom<'increaseReplicaCount'>;

  listAllowedNodeTypeModifications: FunctionTypeFrom<'listAllowedNodeTypeModifications'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  modifyCacheCluster: FunctionTypeFrom<'modifyCacheCluster'>;

  modifyCacheParameterGroup: FunctionTypeFrom<'modifyCacheParameterGroup'>;

  modifyCacheSubnetGroup: FunctionTypeFrom<'modifyCacheSubnetGroup'>;

  modifyGlobalReplicationGroup: FunctionTypeFrom<'modifyGlobalReplicationGroup'>;

  modifyReplicationGroup: FunctionTypeFrom<'modifyReplicationGroup'>;

  modifyReplicationGroupShardConfiguration: FunctionTypeFrom<'modifyReplicationGroupShardConfiguration'>;

  modifyUser: FunctionTypeFrom<'modifyUser'>;

  modifyUserGroup: FunctionTypeFrom<'modifyUserGroup'>;

  purchaseReservedCacheNodesOffering: FunctionTypeFrom<'purchaseReservedCacheNodesOffering'>;

  rebalanceSlotsInGlobalReplicationGroup: FunctionTypeFrom<'rebalanceSlotsInGlobalReplicationGroup'>;

  rebootCacheCluster: FunctionTypeFrom<'rebootCacheCluster'>;

  removeTagsFromResource: FunctionTypeFrom<'removeTagsFromResource'>;

  resetCacheParameterGroup: FunctionTypeFrom<'resetCacheParameterGroup'>;

  revokeCacheSecurityGroupIngress: FunctionTypeFrom<'revokeCacheSecurityGroupIngress'>;

  startMigration: FunctionTypeFrom<'startMigration'>;

  testFailover: FunctionTypeFrom<'testFailover'>
}
 
export class ElastiCache implements ClientType {
  private constructor(private readonly client: AWSElastiCache) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticache';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["describeCacheClusters","describeCacheEngineVersions","describeCacheParameterGroups","describeCacheSecurityGroups","describeCacheSubnetGroups","describeEvents","describeGlobalReplicationGroups","describeReplicationGroups","describeReservedCacheNodes","describeReservedCacheNodesOfferings","describeServiceUpdates","describeSnapshots","describeUpdateActions","describeUserGroups","describeUsers"] as const;
  
  async addTagsToResource(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToResource(...args).promise()
  }

  async authorizeCacheSecurityGroupIngress(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeCacheSecurityGroupIngress(...args).promise()
  }

  async batchApplyUpdateAction(...args: any): Promise<any> {
  // undefined
    return this.client.batchApplyUpdateAction(...args).promise()
  }

  async batchStopUpdateAction(...args: any): Promise<any> {
  // undefined
    return this.client.batchStopUpdateAction(...args).promise()
  }

  async completeMigration(...args: any): Promise<any> {
  // undefined
    return this.client.completeMigration(...args).promise()
  }

  async copySnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.copySnapshot(...args).promise()
  }

  async createCacheCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCacheCluster(...args).promise()
  }

  async createCacheParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createCacheParameterGroup(...args).promise()
  }

  async createCacheSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createCacheSecurityGroup(...args).promise()
  }

  async createCacheSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createCacheSubnetGroup(...args).promise()
  }

  async createGlobalReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGlobalReplicationGroup(...args).promise()
  }

  async createReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationGroup(...args).promise()
  }

  async createSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshot(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async createUserGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createUserGroup(...args).promise()
  }

  async decreaseNodeGroupsInGlobalReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.decreaseNodeGroupsInGlobalReplicationGroup(...args).promise()
  }

  async decreaseReplicaCount(...args: any): Promise<any> {
  // undefined
    return this.client.decreaseReplicaCount(...args).promise()
  }

  async deleteCacheCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCacheCluster(...args).promise()
  }

  async deleteCacheParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCacheParameterGroup(...args).promise()
  }

  async deleteCacheSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCacheSecurityGroup(...args).promise()
  }

  async deleteCacheSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCacheSubnetGroup(...args).promise()
  }

  async deleteGlobalReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGlobalReplicationGroup(...args).promise()
  }

  async deleteReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationGroup(...args).promise()
  }

  async deleteSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshot(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async deleteUserGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserGroup(...args).promise()
  }

  async describeCacheClusters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheClusters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.CacheClusters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheEngineVersions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheEngineVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheEngineVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.CacheEngineVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheParameterGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheParameterGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheParameterGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.CacheParameterGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheParameters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheParameters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Parameters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheSecurityGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheSecurityGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheSecurityGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.CacheSecurityGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCacheSubnetGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"CacheSubnetGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCacheSubnetGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.CacheSubnetGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEngineDefaultParameters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"EngineDefaults.Marker","resultKey":"EngineDefaults.Parameters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEngineDefaultParameters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.EngineDefaults?.Marker;
    const member = result.EngineDefaults?.Parameters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvents(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGlobalReplicationGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"GlobalReplicationGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeGlobalReplicationGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.GlobalReplicationGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReplicationGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReplicationGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReplicationGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReplicationGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedCacheNodes(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedCacheNodes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedCacheNodes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedCacheNodes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedCacheNodesOfferings(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedCacheNodesOfferings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedCacheNodesOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedCacheNodesOfferings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeServiceUpdates(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ServiceUpdates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeServiceUpdates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ServiceUpdates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshots(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Snapshots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeSnapshots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Snapshots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUpdateActions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"UpdateActions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeUpdateActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.UpdateActions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUserGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"UserGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeUserGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.UserGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUsers(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disassociateGlobalReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateGlobalReplicationGroup(...args).promise()
  }

  async failoverGlobalReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.failoverGlobalReplicationGroup(...args).promise()
  }

  async increaseNodeGroupsInGlobalReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.increaseNodeGroupsInGlobalReplicationGroup(...args).promise()
  }

  async increaseReplicaCount(...args: any): Promise<any> {
  // undefined
    return this.client.increaseReplicaCount(...args).promise()
  }

  async listAllowedNodeTypeModifications(...args: any): Promise<any> {
  // undefined
    return this.client.listAllowedNodeTypeModifications(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async modifyCacheCluster(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCacheCluster(...args).promise()
  }

  async modifyCacheParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCacheParameterGroup(...args).promise()
  }

  async modifyCacheSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCacheSubnetGroup(...args).promise()
  }

  async modifyGlobalReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyGlobalReplicationGroup(...args).promise()
  }

  async modifyReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyReplicationGroup(...args).promise()
  }

  async modifyReplicationGroupShardConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.modifyReplicationGroupShardConfiguration(...args).promise()
  }

  async modifyUser(...args: any): Promise<any> {
  // undefined
    return this.client.modifyUser(...args).promise()
  }

  async modifyUserGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyUserGroup(...args).promise()
  }

  async purchaseReservedCacheNodesOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseReservedCacheNodesOffering(...args).promise()
  }

  async rebalanceSlotsInGlobalReplicationGroup(...args: any): Promise<any> {
  // undefined
    return this.client.rebalanceSlotsInGlobalReplicationGroup(...args).promise()
  }

  async rebootCacheCluster(...args: any): Promise<any> {
  // undefined
    return this.client.rebootCacheCluster(...args).promise()
  }

  async removeTagsFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromResource(...args).promise()
  }

  async resetCacheParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.resetCacheParameterGroup(...args).promise()
  }

  async revokeCacheSecurityGroupIngress(...args: any): Promise<any> {
  // undefined
    return this.client.revokeCacheSecurityGroupIngress(...args).promise()
  }

  async startMigration(...args: any): Promise<any> {
  // undefined
    return this.client.startMigration(...args).promise()
  }

  async testFailover(...args: any): Promise<any> {
  // undefined
    return this.client.testFailover(...args).promise()
  }
  
  static fromClient(client: AWSElastiCache): ClientType {
    return new ElastiCache(client) as any;
  }
  
  static client(options?: AWSElastiCache.Types.ClientConfiguration): ClientType {
    return new ElastiCache(new AWSElastiCache(options)) as any;
  }
}  
