import { Request, Neptune as AWSNeptune } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSNeptune> = AWSNeptune[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSNeptune> = AWSNeptune[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSNeptune[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSNeptune, Extras> = AWSNeptune[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSNeptune> = AWSNeptune[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Neptune {
  private constructor(private readonly client: AWSNeptune) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rds' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["describeDBClusterEndpoints","describeDBClusterParameterGroups","describeDBClusterSnapshots","describeDBClusters","describeDBEngineVersions","describeDBInstances","describeDBParameterGroups","describeDBSubnetGroups","describeEventSubscriptions","describeEvents","describePendingMaintenanceActions"] as const;
  
  addRoleToDBCluster: (params: RawParamsFrom<'addRoleToDBCluster'>) => Promise<ReturnTypeFrom<'addRoleToDBCluster'>>  = async params => {
  // undefined
    return this.client.addRoleToDBCluster(params as any).promise();
  }

  addSourceIdentifierToSubscription: (params: RawParamsFrom<'addSourceIdentifierToSubscription'>) => Promise<ReturnTypeFrom<'addSourceIdentifierToSubscription'>>  = async params => {
  // undefined
    return this.client.addSourceIdentifierToSubscription(params as any).promise();
  }

  addTagsToResource: (params: RawParamsFrom<'addTagsToResource'>) => Promise<ReturnTypeFrom<'addTagsToResource'>>  = async params => {
  // undefined
    return this.client.addTagsToResource(params as any).promise();
  }

  applyPendingMaintenanceAction: (params: RawParamsFrom<'applyPendingMaintenanceAction'>) => Promise<ReturnTypeFrom<'applyPendingMaintenanceAction'>>  = async params => {
  // undefined
    return this.client.applyPendingMaintenanceAction(params as any).promise();
  }

  copyDBClusterParameterGroup: (params: RawParamsFrom<'copyDBClusterParameterGroup'>) => Promise<ReturnTypeFrom<'copyDBClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.copyDBClusterParameterGroup(params as any).promise();
  }

  copyDBClusterSnapshot: (params: RawParamsFrom<'copyDBClusterSnapshot'>) => Promise<ReturnTypeFrom<'copyDBClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.copyDBClusterSnapshot(params as any).promise();
  }

  copyDBParameterGroup: (params: RawParamsFrom<'copyDBParameterGroup'>) => Promise<ReturnTypeFrom<'copyDBParameterGroup'>>  = async params => {
  // undefined
    return this.client.copyDBParameterGroup(params as any).promise();
  }

  createDBCluster: (params: RawParamsFrom<'createDBCluster'>) => Promise<ReturnTypeFrom<'createDBCluster'>>  = async params => {
  // undefined
    return this.client.createDBCluster(params as any).promise();
  }

  createDBClusterEndpoint: (params: RawParamsFrom<'createDBClusterEndpoint'>) => Promise<ReturnTypeFrom<'createDBClusterEndpoint'>>  = async params => {
  // undefined
    return this.client.createDBClusterEndpoint(params as any).promise();
  }

  createDBClusterParameterGroup: (params: RawParamsFrom<'createDBClusterParameterGroup'>) => Promise<ReturnTypeFrom<'createDBClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.createDBClusterParameterGroup(params as any).promise();
  }

  createDBClusterSnapshot: (params: RawParamsFrom<'createDBClusterSnapshot'>) => Promise<ReturnTypeFrom<'createDBClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.createDBClusterSnapshot(params as any).promise();
  }

  createDBInstance: (params: RawParamsFrom<'createDBInstance'>) => Promise<ReturnTypeFrom<'createDBInstance'>>  = async params => {
  // undefined
    return this.client.createDBInstance(params as any).promise();
  }

  createDBParameterGroup: (params: RawParamsFrom<'createDBParameterGroup'>) => Promise<ReturnTypeFrom<'createDBParameterGroup'>>  = async params => {
  // undefined
    return this.client.createDBParameterGroup(params as any).promise();
  }

  createDBSubnetGroup: (params: RawParamsFrom<'createDBSubnetGroup'>) => Promise<ReturnTypeFrom<'createDBSubnetGroup'>>  = async params => {
  // undefined
    return this.client.createDBSubnetGroup(params as any).promise();
  }

  createEventSubscription: (params: RawParamsFrom<'createEventSubscription'>) => Promise<ReturnTypeFrom<'createEventSubscription'>>  = async params => {
  // undefined
    return this.client.createEventSubscription(params as any).promise();
  }

  createGlobalCluster: (params: RawParamsFrom<'createGlobalCluster'>) => Promise<ReturnTypeFrom<'createGlobalCluster'>>  = async params => {
  // undefined
    return this.client.createGlobalCluster(params as any).promise();
  }

  deleteDBCluster: (params: RawParamsFrom<'deleteDBCluster'>) => Promise<ReturnTypeFrom<'deleteDBCluster'>>  = async params => {
  // undefined
    return this.client.deleteDBCluster(params as any).promise();
  }

  deleteDBClusterEndpoint: (params: RawParamsFrom<'deleteDBClusterEndpoint'>) => Promise<ReturnTypeFrom<'deleteDBClusterEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteDBClusterEndpoint(params as any).promise();
  }

  deleteDBClusterParameterGroup: (params: RawParamsFrom<'deleteDBClusterParameterGroup'>) => Promise<ReturnTypeFrom<'deleteDBClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.deleteDBClusterParameterGroup(params as any).promise();
  }

  deleteDBClusterSnapshot: (params: RawParamsFrom<'deleteDBClusterSnapshot'>) => Promise<ReturnTypeFrom<'deleteDBClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteDBClusterSnapshot(params as any).promise();
  }

  deleteDBInstance: (params: RawParamsFrom<'deleteDBInstance'>) => Promise<ReturnTypeFrom<'deleteDBInstance'>>  = async params => {
  // undefined
    return this.client.deleteDBInstance(params as any).promise();
  }

  deleteDBParameterGroup: (params: RawParamsFrom<'deleteDBParameterGroup'>) => Promise<ReturnTypeFrom<'deleteDBParameterGroup'>>  = async params => {
  // undefined
    return this.client.deleteDBParameterGroup(params as any).promise();
  }

  deleteDBSubnetGroup: (params: RawParamsFrom<'deleteDBSubnetGroup'>) => Promise<ReturnTypeFrom<'deleteDBSubnetGroup'>>  = async params => {
  // undefined
    return this.client.deleteDBSubnetGroup(params as any).promise();
  }

  deleteEventSubscription: (params: RawParamsFrom<'deleteEventSubscription'>) => Promise<ReturnTypeFrom<'deleteEventSubscription'>>  = async params => {
  // undefined
    return this.client.deleteEventSubscription(params as any).promise();
  }

  deleteGlobalCluster: (params: RawParamsFrom<'deleteGlobalCluster'>) => Promise<ReturnTypeFrom<'deleteGlobalCluster'>>  = async params => {
  // undefined
    return this.client.deleteGlobalCluster(params as any).promise();
  }

  async describeDBClusterEndpoints(params: { [K in keyof ParamsFrom<'describeDBClusterEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterEndpoints'>]-?: ReturnTypeFrom<'describeDBClusterEndpoints'>[K]}['DBClusterEndpoints'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterEndpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusterEndpoints' })).toString('base64');
    const member = (Array.isArray(result.DBClusterEndpoints ?? []) ? (result.DBClusterEndpoints ?? []) : [result.DBClusterEndpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusterParameterGroups(params: { [K in keyof ParamsFrom<'describeDBClusterParameterGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterParameterGroups'>]-?: ReturnTypeFrom<'describeDBClusterParameterGroups'>[K]}['DBClusterParameterGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterParameterGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterParameterGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusterParameterGroups' })).toString('base64');
    const member = (Array.isArray(result.DBClusterParameterGroups ?? []) ? (result.DBClusterParameterGroups ?? []) : [result.DBClusterParameterGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusterParameters(params: { [K in keyof ParamsFrom<'describeDBClusterParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterParameters'>]-?: ReturnTypeFrom<'describeDBClusterParameters'>[K]}['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusterParameters' })).toString('base64');
    const member = (Array.isArray(result.Parameters ?? []) ? (result.Parameters ?? []) : [result.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeDBClusterSnapshotAttributes: (params: RawParamsFrom<'describeDBClusterSnapshotAttributes'>) => Promise<ReturnTypeFrom<'describeDBClusterSnapshotAttributes'>>  = async params => {
  // undefined
    return this.client.describeDBClusterSnapshotAttributes(params as any).promise();
  }

  async describeDBClusterSnapshots(params: { [K in keyof ParamsFrom<'describeDBClusterSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterSnapshots'>]-?: ReturnTypeFrom<'describeDBClusterSnapshots'>[K]}['DBClusterSnapshots'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterSnapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusterSnapshots' })).toString('base64');
    const member = (Array.isArray(result.DBClusterSnapshots ?? []) ? (result.DBClusterSnapshots ?? []) : [result.DBClusterSnapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusters(params: { [K in keyof ParamsFrom<'describeDBClusters', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusters'>]-?: ReturnTypeFrom<'describeDBClusters'>[K]}['DBClusters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusters' })).toString('base64');
    const member = (Array.isArray(result.DBClusters ?? []) ? (result.DBClusters ?? []) : [result.DBClusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBEngineVersions(params: { [K in keyof ParamsFrom<'describeDBEngineVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeDBEngineVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBEngineVersions'>]-?: ReturnTypeFrom<'describeDBEngineVersions'>[K]}['DBEngineVersions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBEngineVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBEngineVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBEngineVersions' })).toString('base64');
    const member = (Array.isArray(result.DBEngineVersions ?? []) ? (result.DBEngineVersions ?? []) : [result.DBEngineVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBInstances(params: { [K in keyof ParamsFrom<'describeDBInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeDBInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBInstances'>]-?: ReturnTypeFrom<'describeDBInstances'>[K]}['DBInstances'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBInstances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBInstances' })).toString('base64');
    const member = (Array.isArray(result.DBInstances ?? []) ? (result.DBInstances ?? []) : [result.DBInstances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBParameterGroups(params: { [K in keyof ParamsFrom<'describeDBParameterGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBParameterGroups'>]-?: ReturnTypeFrom<'describeDBParameterGroups'>[K]}['DBParameterGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBParameterGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBParameterGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBParameterGroups' })).toString('base64');
    const member = (Array.isArray(result.DBParameterGroups ?? []) ? (result.DBParameterGroups ?? []) : [result.DBParameterGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBParameters(params: { [K in keyof ParamsFrom<'describeDBParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeDBParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBParameters'>]-?: ReturnTypeFrom<'describeDBParameters'>[K]}['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBParameters' })).toString('base64');
    const member = (Array.isArray(result.Parameters ?? []) ? (result.Parameters ?? []) : [result.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBSubnetGroups(params: { [K in keyof ParamsFrom<'describeDBSubnetGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBSubnetGroups'>]-?: ReturnTypeFrom<'describeDBSubnetGroups'>[K]}['DBSubnetGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBSubnetGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBSubnetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBSubnetGroups' })).toString('base64');
    const member = (Array.isArray(result.DBSubnetGroups ?? []) ? (result.DBSubnetGroups ?? []) : [result.DBSubnetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeEngineDefaultClusterParameters: (params: RawParamsFrom<'describeEngineDefaultClusterParameters'>) => Promise<ReturnTypeFrom<'describeEngineDefaultClusterParameters'>>  = async params => {
  // undefined
    return this.client.describeEngineDefaultClusterParameters(params as any).promise();
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

  describeEventCategories: (params: RawParamsFrom<'describeEventCategories'>) => Promise<ReturnTypeFrom<'describeEventCategories'>>  = async params => {
  // undefined
    return this.client.describeEventCategories(params as any).promise();
  }

  async describeEventSubscriptions(params: { [K in keyof ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>]: ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEventSubscriptions'>]-?: ReturnTypeFrom<'describeEventSubscriptions'>[K]}['EventSubscriptionsList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"EventSubscriptionsList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEventSubscriptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeEventSubscriptions' })).toString('base64');
    const member = (Array.isArray(result.EventSubscriptionsList ?? []) ? (result.EventSubscriptionsList ?? []) : [result.EventSubscriptionsList]) as any;
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

  describeGlobalClusters: (params: RawParamsFrom<'describeGlobalClusters'>) => Promise<ReturnTypeFrom<'describeGlobalClusters'>>  = async params => {
  // undefined
    return this.client.describeGlobalClusters(params as any).promise();
  }

  async describeOrderableDBInstanceOptions(params: { [K in keyof ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>]: ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOrderableDBInstanceOptions'>]-?: ReturnTypeFrom<'describeOrderableDBInstanceOptions'>[K]}['OrderableDBInstanceOptions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OrderableDBInstanceOptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOrderableDBInstanceOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeOrderableDBInstanceOptions' })).toString('base64');
    const member = (Array.isArray(result.OrderableDBInstanceOptions ?? []) ? (result.OrderableDBInstanceOptions ?? []) : [result.OrderableDBInstanceOptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePendingMaintenanceActions(params: { [K in keyof ParamsFrom<'describePendingMaintenanceActions', { next?: string, limit?: number }>]: ParamsFrom<'describePendingMaintenanceActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePendingMaintenanceActions'>]-?: ReturnTypeFrom<'describePendingMaintenanceActions'>[K]}['PendingMaintenanceActions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"PendingMaintenanceActions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describePendingMaintenanceActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describePendingMaintenanceActions' })).toString('base64');
    const member = (Array.isArray(result.PendingMaintenanceActions ?? []) ? (result.PendingMaintenanceActions ?? []) : [result.PendingMaintenanceActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeValidDBInstanceModifications: (params: RawParamsFrom<'describeValidDBInstanceModifications'>) => Promise<ReturnTypeFrom<'describeValidDBInstanceModifications'>>  = async params => {
  // undefined
    return this.client.describeValidDBInstanceModifications(params as any).promise();
  }

  failoverDBCluster: (params: RawParamsFrom<'failoverDBCluster'>) => Promise<ReturnTypeFrom<'failoverDBCluster'>>  = async params => {
  // undefined
    return this.client.failoverDBCluster(params as any).promise();
  }

  failoverGlobalCluster: (params: RawParamsFrom<'failoverGlobalCluster'>) => Promise<ReturnTypeFrom<'failoverGlobalCluster'>>  = async params => {
  // undefined
    return this.client.failoverGlobalCluster(params as any).promise();
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', {}>]: ParamsFrom<'listTagsForResource', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['TagList'], undefined>}> {
    // {"resultKey":"TagList"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.TagList ?? []) ? (result.TagList ?? []) : [result.TagList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  modifyDBCluster: (params: RawParamsFrom<'modifyDBCluster'>) => Promise<ReturnTypeFrom<'modifyDBCluster'>>  = async params => {
  // undefined
    return this.client.modifyDBCluster(params as any).promise();
  }

  modifyDBClusterEndpoint: (params: RawParamsFrom<'modifyDBClusterEndpoint'>) => Promise<ReturnTypeFrom<'modifyDBClusterEndpoint'>>  = async params => {
  // undefined
    return this.client.modifyDBClusterEndpoint(params as any).promise();
  }

  modifyDBClusterParameterGroup: (params: RawParamsFrom<'modifyDBClusterParameterGroup'>) => Promise<ReturnTypeFrom<'modifyDBClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.modifyDBClusterParameterGroup(params as any).promise();
  }

  modifyDBClusterSnapshotAttribute: (params: RawParamsFrom<'modifyDBClusterSnapshotAttribute'>) => Promise<ReturnTypeFrom<'modifyDBClusterSnapshotAttribute'>>  = async params => {
  // undefined
    return this.client.modifyDBClusterSnapshotAttribute(params as any).promise();
  }

  modifyDBInstance: (params: RawParamsFrom<'modifyDBInstance'>) => Promise<ReturnTypeFrom<'modifyDBInstance'>>  = async params => {
  // undefined
    return this.client.modifyDBInstance(params as any).promise();
  }

  modifyDBParameterGroup: (params: RawParamsFrom<'modifyDBParameterGroup'>) => Promise<ReturnTypeFrom<'modifyDBParameterGroup'>>  = async params => {
  // undefined
    return this.client.modifyDBParameterGroup(params as any).promise();
  }

  modifyDBSubnetGroup: (params: RawParamsFrom<'modifyDBSubnetGroup'>) => Promise<ReturnTypeFrom<'modifyDBSubnetGroup'>>  = async params => {
  // undefined
    return this.client.modifyDBSubnetGroup(params as any).promise();
  }

  modifyEventSubscription: (params: RawParamsFrom<'modifyEventSubscription'>) => Promise<ReturnTypeFrom<'modifyEventSubscription'>>  = async params => {
  // undefined
    return this.client.modifyEventSubscription(params as any).promise();
  }

  modifyGlobalCluster: (params: RawParamsFrom<'modifyGlobalCluster'>) => Promise<ReturnTypeFrom<'modifyGlobalCluster'>>  = async params => {
  // undefined
    return this.client.modifyGlobalCluster(params as any).promise();
  }

  promoteReadReplicaDBCluster: (params: RawParamsFrom<'promoteReadReplicaDBCluster'>) => Promise<ReturnTypeFrom<'promoteReadReplicaDBCluster'>>  = async params => {
  // undefined
    return this.client.promoteReadReplicaDBCluster(params as any).promise();
  }

  rebootDBInstance: (params: RawParamsFrom<'rebootDBInstance'>) => Promise<ReturnTypeFrom<'rebootDBInstance'>>  = async params => {
  // undefined
    return this.client.rebootDBInstance(params as any).promise();
  }

  removeFromGlobalCluster: (params: RawParamsFrom<'removeFromGlobalCluster'>) => Promise<ReturnTypeFrom<'removeFromGlobalCluster'>>  = async params => {
  // undefined
    return this.client.removeFromGlobalCluster(params as any).promise();
  }

  removeRoleFromDBCluster: (params: RawParamsFrom<'removeRoleFromDBCluster'>) => Promise<ReturnTypeFrom<'removeRoleFromDBCluster'>>  = async params => {
  // undefined
    return this.client.removeRoleFromDBCluster(params as any).promise();
  }

  removeSourceIdentifierFromSubscription: (params: RawParamsFrom<'removeSourceIdentifierFromSubscription'>) => Promise<ReturnTypeFrom<'removeSourceIdentifierFromSubscription'>>  = async params => {
  // undefined
    return this.client.removeSourceIdentifierFromSubscription(params as any).promise();
  }

  removeTagsFromResource: (params: RawParamsFrom<'removeTagsFromResource'>) => Promise<ReturnTypeFrom<'removeTagsFromResource'>>  = async params => {
  // undefined
    return this.client.removeTagsFromResource(params as any).promise();
  }

  resetDBClusterParameterGroup: (params: RawParamsFrom<'resetDBClusterParameterGroup'>) => Promise<ReturnTypeFrom<'resetDBClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.resetDBClusterParameterGroup(params as any).promise();
  }

  resetDBParameterGroup: (params: RawParamsFrom<'resetDBParameterGroup'>) => Promise<ReturnTypeFrom<'resetDBParameterGroup'>>  = async params => {
  // undefined
    return this.client.resetDBParameterGroup(params as any).promise();
  }

  restoreDBClusterFromSnapshot: (params: RawParamsFrom<'restoreDBClusterFromSnapshot'>) => Promise<ReturnTypeFrom<'restoreDBClusterFromSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreDBClusterFromSnapshot(params as any).promise();
  }

  restoreDBClusterToPointInTime: (params: RawParamsFrom<'restoreDBClusterToPointInTime'>) => Promise<ReturnTypeFrom<'restoreDBClusterToPointInTime'>>  = async params => {
  // undefined
    return this.client.restoreDBClusterToPointInTime(params as any).promise();
  }

  startDBCluster: (params: RawParamsFrom<'startDBCluster'>) => Promise<ReturnTypeFrom<'startDBCluster'>>  = async params => {
  // undefined
    return this.client.startDBCluster(params as any).promise();
  }

  stopDBCluster: (params: RawParamsFrom<'stopDBCluster'>) => Promise<ReturnTypeFrom<'stopDBCluster'>>  = async params => {
  // undefined
    return this.client.stopDBCluster(params as any).promise();
  }
  
  static fromClient(client: AWSNeptune): Neptune {
    return new Neptune(client) as any;
  }
  
  static client(options?: AWSNeptune.Types.ClientConfiguration): Neptune {
    return new Neptune(new AWSNeptune(options)) as any;
  }
}  
