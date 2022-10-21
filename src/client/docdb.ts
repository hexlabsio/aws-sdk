import { Request, DocDB as AWSDocDB } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDocDB> = AWSDocDB[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDocDB> = AWSDocDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDocDB[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDocDB, Extras> = AWSDocDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDocDB> = AWSDocDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DocDB {
  private constructor(private readonly client: AWSDocDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rds' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["describeCertificates","describeDBClusterParameterGroups","describeDBClusterSnapshots","describeDBClusters","describeDBEngineVersions","describeDBInstances","describeDBSubnetGroups","describeEventSubscriptions","describeEvents","describeGlobalClusters","describePendingMaintenanceActions"] as const;
  
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

  createDBCluster: (params: RawParamsFrom<'createDBCluster'>) => Promise<ReturnTypeFrom<'createDBCluster'>>  = async params => {
  // undefined
    return this.client.createDBCluster(params as any).promise();
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

  async describeCertificates(params: { [K in keyof ParamsFrom<'describeCertificates', { next?: string, limit?: number }>]: ParamsFrom<'describeCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCertificates'>]-?: ReturnTypeFrom<'describeCertificates'>[K]}['Certificates'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Certificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeCertificates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Certificates ?? []) ? (result.Certificates ?? []) : [result.Certificates]) as any;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusterParameterGroups' })).toString('base64') : undefined;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusterParameters' })).toString('base64') : undefined;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusterSnapshots' })).toString('base64') : undefined;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBClusters' })).toString('base64') : undefined;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBEngineVersions' })).toString('base64') : undefined;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DBInstances ?? []) ? (result.DBInstances ?? []) : [result.DBInstances]) as any;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDBSubnetGroups' })).toString('base64') : undefined;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeEventSubscriptions' })).toString('base64') : undefined;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeEvents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGlobalClusters(params: { [K in keyof ParamsFrom<'describeGlobalClusters', { next?: string, limit?: number }>]: ParamsFrom<'describeGlobalClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeGlobalClusters'>]-?: ReturnTypeFrom<'describeGlobalClusters'>[K]}['GlobalClusters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"GlobalClusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeGlobalClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeGlobalClusters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GlobalClusters ?? []) ? (result.GlobalClusters ?? []) : [result.GlobalClusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrderableDBInstanceOptions(params: { [K in keyof ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>]: ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOrderableDBInstanceOptions'>]-?: ReturnTypeFrom<'describeOrderableDBInstanceOptions'>[K]}['OrderableDBInstanceOptions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OrderableDBInstanceOptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOrderableDBInstanceOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeOrderableDBInstanceOptions' })).toString('base64') : undefined;
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
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describePendingMaintenanceActions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PendingMaintenanceActions ?? []) ? (result.PendingMaintenanceActions ?? []) : [result.PendingMaintenanceActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  failoverDBCluster: (params: RawParamsFrom<'failoverDBCluster'>) => Promise<ReturnTypeFrom<'failoverDBCluster'>>  = async params => {
  // undefined
    return this.client.failoverDBCluster(params as any).promise();
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

  rebootDBInstance: (params: RawParamsFrom<'rebootDBInstance'>) => Promise<ReturnTypeFrom<'rebootDBInstance'>>  = async params => {
  // undefined
    return this.client.rebootDBInstance(params as any).promise();
  }

  removeFromGlobalCluster: (params: RawParamsFrom<'removeFromGlobalCluster'>) => Promise<ReturnTypeFrom<'removeFromGlobalCluster'>>  = async params => {
  // undefined
    return this.client.removeFromGlobalCluster(params as any).promise();
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
  
  static fromClient(client: AWSDocDB): DocDB {
    return new DocDB(client) as any;
  }
  
  static client(options?: AWSDocDB.Types.ClientConfiguration): DocDB {
    return new DocDB(new AWSDocDB(options)) as any;
  }
}  
