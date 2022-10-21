import { Request, RDS as AWSRDS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRDS> = AWSRDS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRDS> = AWSRDS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRDS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRDS, Extras> = AWSRDS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRDS> = AWSRDS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class RDS {
  private constructor(private readonly client: AWSRDS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rds' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["describeCertificates","describeDBClusterEndpoints","describeDBClusterParameterGroups","describeDBClusterSnapshots","describeDBClusters","describeDBEngineVersions","describeDBInstanceAutomatedBackups","describeDBInstances","describeDBParameterGroups","describeDBProxies","describeDBProxyEndpoints","describeDBSecurityGroups","describeDBSnapshots","describeDBSubnetGroups","describeEventSubscriptions","describeEvents","describeExportTasks","describeGlobalClusters","describeOptionGroups","describePendingMaintenanceActions","describeReservedDBInstances","describeReservedDBInstancesOfferings","describeSourceRegions"] as const;
  
  addRoleToDBCluster: (params: RawParamsFrom<'addRoleToDBCluster'>) => Promise<ReturnTypeFrom<'addRoleToDBCluster'>>  = async params => {
  // undefined
    return this.client.addRoleToDBCluster(params as any).promise();
  }

  addRoleToDBInstance: (params: RawParamsFrom<'addRoleToDBInstance'>) => Promise<ReturnTypeFrom<'addRoleToDBInstance'>>  = async params => {
  // undefined
    return this.client.addRoleToDBInstance(params as any).promise();
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

  authorizeDBSecurityGroupIngress: (params: RawParamsFrom<'authorizeDBSecurityGroupIngress'>) => Promise<ReturnTypeFrom<'authorizeDBSecurityGroupIngress'>>  = async params => {
  // undefined
    return this.client.authorizeDBSecurityGroupIngress(params as any).promise();
  }

  backtrackDBCluster: (params: RawParamsFrom<'backtrackDBCluster'>) => Promise<ReturnTypeFrom<'backtrackDBCluster'>>  = async params => {
  // undefined
    return this.client.backtrackDBCluster(params as any).promise();
  }

  cancelExportTask: (params: RawParamsFrom<'cancelExportTask'>) => Promise<ReturnTypeFrom<'cancelExportTask'>>  = async params => {
  // undefined
    return this.client.cancelExportTask(params as any).promise();
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

  copyDBSnapshot: (params: RawParamsFrom<'copyDBSnapshot'>) => Promise<ReturnTypeFrom<'copyDBSnapshot'>>  = async params => {
  // undefined
    return this.client.copyDBSnapshot(params as any).promise();
  }

  copyOptionGroup: (params: RawParamsFrom<'copyOptionGroup'>) => Promise<ReturnTypeFrom<'copyOptionGroup'>>  = async params => {
  // undefined
    return this.client.copyOptionGroup(params as any).promise();
  }

  createCustomDBEngineVersion: (params: RawParamsFrom<'createCustomDBEngineVersion'>) => Promise<ReturnTypeFrom<'createCustomDBEngineVersion'>>  = async params => {
  // undefined
    return this.client.createCustomDBEngineVersion(params as any).promise();
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

  createDBInstanceReadReplica: (params: RawParamsFrom<'createDBInstanceReadReplica'>) => Promise<ReturnTypeFrom<'createDBInstanceReadReplica'>>  = async params => {
  // undefined
    return this.client.createDBInstanceReadReplica(params as any).promise();
  }

  createDBParameterGroup: (params: RawParamsFrom<'createDBParameterGroup'>) => Promise<ReturnTypeFrom<'createDBParameterGroup'>>  = async params => {
  // undefined
    return this.client.createDBParameterGroup(params as any).promise();
  }

  createDBProxy: (params: RawParamsFrom<'createDBProxy'>) => Promise<ReturnTypeFrom<'createDBProxy'>>  = async params => {
  // undefined
    return this.client.createDBProxy(params as any).promise();
  }

  createDBProxyEndpoint: (params: RawParamsFrom<'createDBProxyEndpoint'>) => Promise<ReturnTypeFrom<'createDBProxyEndpoint'>>  = async params => {
  // undefined
    return this.client.createDBProxyEndpoint(params as any).promise();
  }

  createDBSecurityGroup: (params: RawParamsFrom<'createDBSecurityGroup'>) => Promise<ReturnTypeFrom<'createDBSecurityGroup'>>  = async params => {
  // undefined
    return this.client.createDBSecurityGroup(params as any).promise();
  }

  createDBSnapshot: (params: RawParamsFrom<'createDBSnapshot'>) => Promise<ReturnTypeFrom<'createDBSnapshot'>>  = async params => {
  // undefined
    return this.client.createDBSnapshot(params as any).promise();
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

  createOptionGroup: (params: RawParamsFrom<'createOptionGroup'>) => Promise<ReturnTypeFrom<'createOptionGroup'>>  = async params => {
  // undefined
    return this.client.createOptionGroup(params as any).promise();
  }

  deleteCustomDBEngineVersion: (params: RawParamsFrom<'deleteCustomDBEngineVersion'>) => Promise<ReturnTypeFrom<'deleteCustomDBEngineVersion'>>  = async params => {
  // undefined
    return this.client.deleteCustomDBEngineVersion(params as any).promise();
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

  deleteDBInstanceAutomatedBackup: (params: RawParamsFrom<'deleteDBInstanceAutomatedBackup'>) => Promise<ReturnTypeFrom<'deleteDBInstanceAutomatedBackup'>>  = async params => {
  // undefined
    return this.client.deleteDBInstanceAutomatedBackup(params as any).promise();
  }

  deleteDBParameterGroup: (params: RawParamsFrom<'deleteDBParameterGroup'>) => Promise<ReturnTypeFrom<'deleteDBParameterGroup'>>  = async params => {
  // undefined
    return this.client.deleteDBParameterGroup(params as any).promise();
  }

  deleteDBProxy: (params: RawParamsFrom<'deleteDBProxy'>) => Promise<ReturnTypeFrom<'deleteDBProxy'>>  = async params => {
  // undefined
    return this.client.deleteDBProxy(params as any).promise();
  }

  deleteDBProxyEndpoint: (params: RawParamsFrom<'deleteDBProxyEndpoint'>) => Promise<ReturnTypeFrom<'deleteDBProxyEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteDBProxyEndpoint(params as any).promise();
  }

  deleteDBSecurityGroup: (params: RawParamsFrom<'deleteDBSecurityGroup'>) => Promise<ReturnTypeFrom<'deleteDBSecurityGroup'>>  = async params => {
  // undefined
    return this.client.deleteDBSecurityGroup(params as any).promise();
  }

  deleteDBSnapshot: (params: RawParamsFrom<'deleteDBSnapshot'>) => Promise<ReturnTypeFrom<'deleteDBSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteDBSnapshot(params as any).promise();
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

  deleteOptionGroup: (params: RawParamsFrom<'deleteOptionGroup'>) => Promise<ReturnTypeFrom<'deleteOptionGroup'>>  = async params => {
  // undefined
    return this.client.deleteOptionGroup(params as any).promise();
  }

  deregisterDBProxyTargets: (params: RawParamsFrom<'deregisterDBProxyTargets'>) => Promise<ReturnTypeFrom<'deregisterDBProxyTargets'>>  = async params => {
  // undefined
    return this.client.deregisterDBProxyTargets(params as any).promise();
  }

  describeAccountAttributes: (params: RawParamsFrom<'describeAccountAttributes'>) => Promise<ReturnTypeFrom<'describeAccountAttributes'>>  = async params => {
  // undefined
    return this.client.describeAccountAttributes(params as any).promise();
  }

  async describeCertificates(params: { [K in keyof ParamsFrom<'describeCertificates', { next?: string, limit?: number }>]: ParamsFrom<'describeCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCertificates'>]-?: ReturnTypeFrom<'describeCertificates'>[K]}['Certificates'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Certificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.Certificates ?? []) ? (result.Certificates ?? []) : [result.Certificates]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBClusterBacktracks(params: { [K in keyof ParamsFrom<'describeDBClusterBacktracks', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterBacktracks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterBacktracks'>]-?: ReturnTypeFrom<'describeDBClusterBacktracks'>[K]}['DBClusterBacktracks'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterBacktracks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterBacktracks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBClusterBacktracks ?? []) ? (result.DBClusterBacktracks ?? []) : [result.DBClusterBacktracks]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBClusterEndpoints(params: { [K in keyof ParamsFrom<'describeDBClusterEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterEndpoints'>]-?: ReturnTypeFrom<'describeDBClusterEndpoints'>[K]}['DBClusterEndpoints'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterEndpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBClusterEndpoints ?? []) ? (result.DBClusterEndpoints ?? []) : [result.DBClusterEndpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBClusterParameterGroups(params: { [K in keyof ParamsFrom<'describeDBClusterParameterGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterParameterGroups'>]-?: ReturnTypeFrom<'describeDBClusterParameterGroups'>[K]}['DBClusterParameterGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterParameterGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterParameterGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBClusterParameterGroups ?? []) ? (result.DBClusterParameterGroups ?? []) : [result.DBClusterParameterGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBClusterParameters(params: { [K in keyof ParamsFrom<'describeDBClusterParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterParameters'>]-?: ReturnTypeFrom<'describeDBClusterParameters'>[K]}['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.Parameters ?? []) ? (result.Parameters ?? []) : [result.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeDBClusterSnapshotAttributes: (params: RawParamsFrom<'describeDBClusterSnapshotAttributes'>) => Promise<ReturnTypeFrom<'describeDBClusterSnapshotAttributes'>>  = async params => {
  // undefined
    return this.client.describeDBClusterSnapshotAttributes(params as any).promise();
  }

  async describeDBClusterSnapshots(params: { [K in keyof ParamsFrom<'describeDBClusterSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusterSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusterSnapshots'>]-?: ReturnTypeFrom<'describeDBClusterSnapshots'>[K]}['DBClusterSnapshots'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterSnapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBClusterSnapshots ?? []) ? (result.DBClusterSnapshots ?? []) : [result.DBClusterSnapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBClusters(params: { [K in keyof ParamsFrom<'describeDBClusters', { next?: string, limit?: number }>]: ParamsFrom<'describeDBClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBClusters'>]-?: ReturnTypeFrom<'describeDBClusters'>[K]}['DBClusters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBClusters ?? []) ? (result.DBClusters ?? []) : [result.DBClusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBEngineVersions(params: { [K in keyof ParamsFrom<'describeDBEngineVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeDBEngineVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBEngineVersions'>]-?: ReturnTypeFrom<'describeDBEngineVersions'>[K]}['DBEngineVersions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBEngineVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBEngineVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBEngineVersions ?? []) ? (result.DBEngineVersions ?? []) : [result.DBEngineVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBInstanceAutomatedBackups(params: { [K in keyof ParamsFrom<'describeDBInstanceAutomatedBackups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBInstanceAutomatedBackups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBInstanceAutomatedBackups'>]-?: ReturnTypeFrom<'describeDBInstanceAutomatedBackups'>[K]}['DBInstanceAutomatedBackups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBInstanceAutomatedBackups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBInstanceAutomatedBackups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBInstanceAutomatedBackups ?? []) ? (result.DBInstanceAutomatedBackups ?? []) : [result.DBInstanceAutomatedBackups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBInstances(params: { [K in keyof ParamsFrom<'describeDBInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeDBInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBInstances'>]-?: ReturnTypeFrom<'describeDBInstances'>[K]}['DBInstances'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBInstances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBInstances ?? []) ? (result.DBInstances ?? []) : [result.DBInstances]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBLogFiles(params: { [K in keyof ParamsFrom<'describeDBLogFiles', { next?: string, limit?: number }>]: ParamsFrom<'describeDBLogFiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBLogFiles'>]-?: ReturnTypeFrom<'describeDBLogFiles'>[K]}['DescribeDBLogFiles'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DescribeDBLogFiles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBLogFiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DescribeDBLogFiles ?? []) ? (result.DescribeDBLogFiles ?? []) : [result.DescribeDBLogFiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBParameterGroups(params: { [K in keyof ParamsFrom<'describeDBParameterGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBParameterGroups'>]-?: ReturnTypeFrom<'describeDBParameterGroups'>[K]}['DBParameterGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBParameterGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBParameterGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBParameterGroups ?? []) ? (result.DBParameterGroups ?? []) : [result.DBParameterGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBParameters(params: { [K in keyof ParamsFrom<'describeDBParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeDBParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBParameters'>]-?: ReturnTypeFrom<'describeDBParameters'>[K]}['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.Parameters ?? []) ? (result.Parameters ?? []) : [result.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBProxies(params: { [K in keyof ParamsFrom<'describeDBProxies', { next?: string, limit?: number }>]: ParamsFrom<'describeDBProxies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBProxies'>]-?: ReturnTypeFrom<'describeDBProxies'>[K]}['DBProxies'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBProxies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBProxies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBProxies ?? []) ? (result.DBProxies ?? []) : [result.DBProxies]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBProxyEndpoints(params: { [K in keyof ParamsFrom<'describeDBProxyEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'describeDBProxyEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBProxyEndpoints'>]-?: ReturnTypeFrom<'describeDBProxyEndpoints'>[K]}['DBProxyEndpoints'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBProxyEndpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBProxyEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBProxyEndpoints ?? []) ? (result.DBProxyEndpoints ?? []) : [result.DBProxyEndpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBProxyTargetGroups(params: { [K in keyof ParamsFrom<'describeDBProxyTargetGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBProxyTargetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBProxyTargetGroups'>]-?: ReturnTypeFrom<'describeDBProxyTargetGroups'>[K]}['TargetGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"TargetGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBProxyTargetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.TargetGroups ?? []) ? (result.TargetGroups ?? []) : [result.TargetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBProxyTargets(params: { [K in keyof ParamsFrom<'describeDBProxyTargets', { next?: string, limit?: number }>]: ParamsFrom<'describeDBProxyTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBProxyTargets'>]-?: ReturnTypeFrom<'describeDBProxyTargets'>[K]}['Targets'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Targets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBProxyTargets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.Targets ?? []) ? (result.Targets ?? []) : [result.Targets]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBSecurityGroups(params: { [K in keyof ParamsFrom<'describeDBSecurityGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBSecurityGroups'>]-?: ReturnTypeFrom<'describeDBSecurityGroups'>[K]}['DBSecurityGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBSecurityGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBSecurityGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBSecurityGroups ?? []) ? (result.DBSecurityGroups ?? []) : [result.DBSecurityGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeDBSnapshotAttributes: (params: RawParamsFrom<'describeDBSnapshotAttributes'>) => Promise<ReturnTypeFrom<'describeDBSnapshotAttributes'>>  = async params => {
  // undefined
    return this.client.describeDBSnapshotAttributes(params as any).promise();
  }

  async describeDBSnapshots(params: { [K in keyof ParamsFrom<'describeDBSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeDBSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBSnapshots'>]-?: ReturnTypeFrom<'describeDBSnapshots'>[K]}['DBSnapshots'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBSnapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBSnapshots ?? []) ? (result.DBSnapshots ?? []) : [result.DBSnapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDBSubnetGroups(params: { [K in keyof ParamsFrom<'describeDBSubnetGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeDBSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDBSubnetGroups'>]-?: ReturnTypeFrom<'describeDBSubnetGroups'>[K]}['DBSubnetGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBSubnetGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBSubnetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.DBSubnetGroups ?? []) ? (result.DBSubnetGroups ?? []) : [result.DBSubnetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeEngineDefaultClusterParameters: (params: RawParamsFrom<'describeEngineDefaultClusterParameters'>) => Promise<ReturnTypeFrom<'describeEngineDefaultClusterParameters'>>  = async params => {
  // undefined
    return this.client.describeEngineDefaultClusterParameters(params as any).promise();
  }

  async describeEngineDefaultParameters(params: { [K in keyof ParamsFrom<'describeEngineDefaultParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeEngineDefaultParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEngineDefaultParameters'>]-?: ReturnTypeFrom<'describeEngineDefaultParameters'>[K]}['EngineDefaults']['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"EngineDefaults.Marker","resultKey":"EngineDefaults.Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEngineDefaultParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.EngineDefaults?.Marker ;
    const member = (Array.isArray(result.EngineDefaults?.Parameters ?? []) ? (result.EngineDefaults?.Parameters ?? []) : [result.EngineDefaults?.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeEventCategories: (params: RawParamsFrom<'describeEventCategories'>) => Promise<ReturnTypeFrom<'describeEventCategories'>>  = async params => {
  // undefined
    return this.client.describeEventCategories(params as any).promise();
  }

  async describeEventSubscriptions(params: { [K in keyof ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>]: ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEventSubscriptions'>]-?: ReturnTypeFrom<'describeEventSubscriptions'>[K]}['EventSubscriptionsList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"EventSubscriptionsList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEventSubscriptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.EventSubscriptionsList ?? []) ? (result.EventSubscriptionsList ?? []) : [result.EventSubscriptionsList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeEvents(params: { [K in keyof ParamsFrom<'describeEvents', { next?: string, limit?: number }>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeExportTasks(params: { [K in keyof ParamsFrom<'describeExportTasks', { next?: string, limit?: number }>]: ParamsFrom<'describeExportTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeExportTasks'>]-?: ReturnTypeFrom<'describeExportTasks'>[K]}['ExportTasks'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ExportTasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeExportTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.ExportTasks ?? []) ? (result.ExportTasks ?? []) : [result.ExportTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeGlobalClusters(params: { [K in keyof ParamsFrom<'describeGlobalClusters', { next?: string, limit?: number }>]: ParamsFrom<'describeGlobalClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeGlobalClusters'>]-?: ReturnTypeFrom<'describeGlobalClusters'>[K]}['GlobalClusters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"GlobalClusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeGlobalClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.GlobalClusters ?? []) ? (result.GlobalClusters ?? []) : [result.GlobalClusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeOptionGroupOptions(params: { [K in keyof ParamsFrom<'describeOptionGroupOptions', { next?: string, limit?: number }>]: ParamsFrom<'describeOptionGroupOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOptionGroupOptions'>]-?: ReturnTypeFrom<'describeOptionGroupOptions'>[K]}['OptionGroupOptions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OptionGroupOptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOptionGroupOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.OptionGroupOptions ?? []) ? (result.OptionGroupOptions ?? []) : [result.OptionGroupOptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeOptionGroups(params: { [K in keyof ParamsFrom<'describeOptionGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeOptionGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOptionGroups'>]-?: ReturnTypeFrom<'describeOptionGroups'>[K]}['OptionGroupsList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OptionGroupsList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOptionGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.OptionGroupsList ?? []) ? (result.OptionGroupsList ?? []) : [result.OptionGroupsList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeOrderableDBInstanceOptions(params: { [K in keyof ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>]: ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOrderableDBInstanceOptions'>]-?: ReturnTypeFrom<'describeOrderableDBInstanceOptions'>[K]}['OrderableDBInstanceOptions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OrderableDBInstanceOptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOrderableDBInstanceOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.OrderableDBInstanceOptions ?? []) ? (result.OrderableDBInstanceOptions ?? []) : [result.OrderableDBInstanceOptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describePendingMaintenanceActions(params: { [K in keyof ParamsFrom<'describePendingMaintenanceActions', { next?: string, limit?: number }>]: ParamsFrom<'describePendingMaintenanceActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePendingMaintenanceActions'>]-?: ReturnTypeFrom<'describePendingMaintenanceActions'>[K]}['PendingMaintenanceActions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"PendingMaintenanceActions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describePendingMaintenanceActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.PendingMaintenanceActions ?? []) ? (result.PendingMaintenanceActions ?? []) : [result.PendingMaintenanceActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeReservedDBInstances(params: { [K in keyof ParamsFrom<'describeReservedDBInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedDBInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedDBInstances'>]-?: ReturnTypeFrom<'describeReservedDBInstances'>[K]}['ReservedDBInstances'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedDBInstances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedDBInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.ReservedDBInstances ?? []) ? (result.ReservedDBInstances ?? []) : [result.ReservedDBInstances]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeReservedDBInstancesOfferings(params: { [K in keyof ParamsFrom<'describeReservedDBInstancesOfferings', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedDBInstancesOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedDBInstancesOfferings'>]-?: ReturnTypeFrom<'describeReservedDBInstancesOfferings'>[K]}['ReservedDBInstancesOfferings'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedDBInstancesOfferings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedDBInstancesOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.ReservedDBInstancesOfferings ?? []) ? (result.ReservedDBInstancesOfferings ?? []) : [result.ReservedDBInstancesOfferings]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeSourceRegions(params: { [K in keyof ParamsFrom<'describeSourceRegions', { next?: string, limit?: number }>]: ParamsFrom<'describeSourceRegions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSourceRegions'>]-?: ReturnTypeFrom<'describeSourceRegions'>[K]}['SourceRegions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"SourceRegions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeSourceRegions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.SourceRegions ?? []) ? (result.SourceRegions ?? []) : [result.SourceRegions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeValidDBInstanceModifications: (params: RawParamsFrom<'describeValidDBInstanceModifications'>) => Promise<ReturnTypeFrom<'describeValidDBInstanceModifications'>>  = async params => {
  // undefined
    return this.client.describeValidDBInstanceModifications(params as any).promise();
  }

  async downloadDBLogFilePortion(params: { [K in keyof ParamsFrom<'downloadDBLogFilePortion', { next?: string, limit?: number }>]: ParamsFrom<'downloadDBLogFilePortion', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'downloadDBLogFilePortion'>]-?: ReturnTypeFrom<'downloadDBLogFilePortion'>[K]}['LogFileData'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"NumberOfLines","moreResults":"AdditionalDataPending","outputToken":"Marker","resultKey":"LogFileData"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { NumberOfLines: limit } : {};
    const result = await this.client.downloadDBLogFilePortion({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.LogFileData ?? []) ? (result.LogFileData ?? []) : [result.LogFileData]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
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
    const nextToken = undefined ;
    const member = (Array.isArray(result.TagList ?? []) ? (result.TagList ?? []) : [result.TagList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  modifyActivityStream: (params: RawParamsFrom<'modifyActivityStream'>) => Promise<ReturnTypeFrom<'modifyActivityStream'>>  = async params => {
  // undefined
    return this.client.modifyActivityStream(params as any).promise();
  }

  modifyCertificates: (params: RawParamsFrom<'modifyCertificates'>) => Promise<ReturnTypeFrom<'modifyCertificates'>>  = async params => {
  // undefined
    return this.client.modifyCertificates(params as any).promise();
  }

  modifyCurrentDBClusterCapacity: (params: RawParamsFrom<'modifyCurrentDBClusterCapacity'>) => Promise<ReturnTypeFrom<'modifyCurrentDBClusterCapacity'>>  = async params => {
  // undefined
    return this.client.modifyCurrentDBClusterCapacity(params as any).promise();
  }

  modifyCustomDBEngineVersion: (params: RawParamsFrom<'modifyCustomDBEngineVersion'>) => Promise<ReturnTypeFrom<'modifyCustomDBEngineVersion'>>  = async params => {
  // undefined
    return this.client.modifyCustomDBEngineVersion(params as any).promise();
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

  modifyDBProxy: (params: RawParamsFrom<'modifyDBProxy'>) => Promise<ReturnTypeFrom<'modifyDBProxy'>>  = async params => {
  // undefined
    return this.client.modifyDBProxy(params as any).promise();
  }

  modifyDBProxyEndpoint: (params: RawParamsFrom<'modifyDBProxyEndpoint'>) => Promise<ReturnTypeFrom<'modifyDBProxyEndpoint'>>  = async params => {
  // undefined
    return this.client.modifyDBProxyEndpoint(params as any).promise();
  }

  modifyDBProxyTargetGroup: (params: RawParamsFrom<'modifyDBProxyTargetGroup'>) => Promise<ReturnTypeFrom<'modifyDBProxyTargetGroup'>>  = async params => {
  // undefined
    return this.client.modifyDBProxyTargetGroup(params as any).promise();
  }

  modifyDBSnapshot: (params: RawParamsFrom<'modifyDBSnapshot'>) => Promise<ReturnTypeFrom<'modifyDBSnapshot'>>  = async params => {
  // undefined
    return this.client.modifyDBSnapshot(params as any).promise();
  }

  modifyDBSnapshotAttribute: (params: RawParamsFrom<'modifyDBSnapshotAttribute'>) => Promise<ReturnTypeFrom<'modifyDBSnapshotAttribute'>>  = async params => {
  // undefined
    return this.client.modifyDBSnapshotAttribute(params as any).promise();
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

  modifyOptionGroup: (params: RawParamsFrom<'modifyOptionGroup'>) => Promise<ReturnTypeFrom<'modifyOptionGroup'>>  = async params => {
  // undefined
    return this.client.modifyOptionGroup(params as any).promise();
  }

  promoteReadReplica: (params: RawParamsFrom<'promoteReadReplica'>) => Promise<ReturnTypeFrom<'promoteReadReplica'>>  = async params => {
  // undefined
    return this.client.promoteReadReplica(params as any).promise();
  }

  promoteReadReplicaDBCluster: (params: RawParamsFrom<'promoteReadReplicaDBCluster'>) => Promise<ReturnTypeFrom<'promoteReadReplicaDBCluster'>>  = async params => {
  // undefined
    return this.client.promoteReadReplicaDBCluster(params as any).promise();
  }

  purchaseReservedDBInstancesOffering: (params: RawParamsFrom<'purchaseReservedDBInstancesOffering'>) => Promise<ReturnTypeFrom<'purchaseReservedDBInstancesOffering'>>  = async params => {
  // undefined
    return this.client.purchaseReservedDBInstancesOffering(params as any).promise();
  }

  rebootDBCluster: (params: RawParamsFrom<'rebootDBCluster'>) => Promise<ReturnTypeFrom<'rebootDBCluster'>>  = async params => {
  // undefined
    return this.client.rebootDBCluster(params as any).promise();
  }

  rebootDBInstance: (params: RawParamsFrom<'rebootDBInstance'>) => Promise<ReturnTypeFrom<'rebootDBInstance'>>  = async params => {
  // undefined
    return this.client.rebootDBInstance(params as any).promise();
  }

  registerDBProxyTargets: (params: RawParamsFrom<'registerDBProxyTargets'>) => Promise<ReturnTypeFrom<'registerDBProxyTargets'>>  = async params => {
  // undefined
    return this.client.registerDBProxyTargets(params as any).promise();
  }

  removeFromGlobalCluster: (params: RawParamsFrom<'removeFromGlobalCluster'>) => Promise<ReturnTypeFrom<'removeFromGlobalCluster'>>  = async params => {
  // undefined
    return this.client.removeFromGlobalCluster(params as any).promise();
  }

  removeRoleFromDBCluster: (params: RawParamsFrom<'removeRoleFromDBCluster'>) => Promise<ReturnTypeFrom<'removeRoleFromDBCluster'>>  = async params => {
  // undefined
    return this.client.removeRoleFromDBCluster(params as any).promise();
  }

  removeRoleFromDBInstance: (params: RawParamsFrom<'removeRoleFromDBInstance'>) => Promise<ReturnTypeFrom<'removeRoleFromDBInstance'>>  = async params => {
  // undefined
    return this.client.removeRoleFromDBInstance(params as any).promise();
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

  restoreDBClusterFromS3: (params: RawParamsFrom<'restoreDBClusterFromS3'>) => Promise<ReturnTypeFrom<'restoreDBClusterFromS3'>>  = async params => {
  // undefined
    return this.client.restoreDBClusterFromS3(params as any).promise();
  }

  restoreDBClusterFromSnapshot: (params: RawParamsFrom<'restoreDBClusterFromSnapshot'>) => Promise<ReturnTypeFrom<'restoreDBClusterFromSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreDBClusterFromSnapshot(params as any).promise();
  }

  restoreDBClusterToPointInTime: (params: RawParamsFrom<'restoreDBClusterToPointInTime'>) => Promise<ReturnTypeFrom<'restoreDBClusterToPointInTime'>>  = async params => {
  // undefined
    return this.client.restoreDBClusterToPointInTime(params as any).promise();
  }

  restoreDBInstanceFromDBSnapshot: (params: RawParamsFrom<'restoreDBInstanceFromDBSnapshot'>) => Promise<ReturnTypeFrom<'restoreDBInstanceFromDBSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreDBInstanceFromDBSnapshot(params as any).promise();
  }

  restoreDBInstanceFromS3: (params: RawParamsFrom<'restoreDBInstanceFromS3'>) => Promise<ReturnTypeFrom<'restoreDBInstanceFromS3'>>  = async params => {
  // undefined
    return this.client.restoreDBInstanceFromS3(params as any).promise();
  }

  restoreDBInstanceToPointInTime: (params: RawParamsFrom<'restoreDBInstanceToPointInTime'>) => Promise<ReturnTypeFrom<'restoreDBInstanceToPointInTime'>>  = async params => {
  // undefined
    return this.client.restoreDBInstanceToPointInTime(params as any).promise();
  }

  revokeDBSecurityGroupIngress: (params: RawParamsFrom<'revokeDBSecurityGroupIngress'>) => Promise<ReturnTypeFrom<'revokeDBSecurityGroupIngress'>>  = async params => {
  // undefined
    return this.client.revokeDBSecurityGroupIngress(params as any).promise();
  }

  startActivityStream: (params: RawParamsFrom<'startActivityStream'>) => Promise<ReturnTypeFrom<'startActivityStream'>>  = async params => {
  // undefined
    return this.client.startActivityStream(params as any).promise();
  }

  startDBCluster: (params: RawParamsFrom<'startDBCluster'>) => Promise<ReturnTypeFrom<'startDBCluster'>>  = async params => {
  // undefined
    return this.client.startDBCluster(params as any).promise();
  }

  startDBInstance: (params: RawParamsFrom<'startDBInstance'>) => Promise<ReturnTypeFrom<'startDBInstance'>>  = async params => {
  // undefined
    return this.client.startDBInstance(params as any).promise();
  }

  startDBInstanceAutomatedBackupsReplication: (params: RawParamsFrom<'startDBInstanceAutomatedBackupsReplication'>) => Promise<ReturnTypeFrom<'startDBInstanceAutomatedBackupsReplication'>>  = async params => {
  // undefined
    return this.client.startDBInstanceAutomatedBackupsReplication(params as any).promise();
  }

  startExportTask: (params: RawParamsFrom<'startExportTask'>) => Promise<ReturnTypeFrom<'startExportTask'>>  = async params => {
  // undefined
    return this.client.startExportTask(params as any).promise();
  }

  stopActivityStream: (params: RawParamsFrom<'stopActivityStream'>) => Promise<ReturnTypeFrom<'stopActivityStream'>>  = async params => {
  // undefined
    return this.client.stopActivityStream(params as any).promise();
  }

  stopDBCluster: (params: RawParamsFrom<'stopDBCluster'>) => Promise<ReturnTypeFrom<'stopDBCluster'>>  = async params => {
  // undefined
    return this.client.stopDBCluster(params as any).promise();
  }

  stopDBInstance: (params: RawParamsFrom<'stopDBInstance'>) => Promise<ReturnTypeFrom<'stopDBInstance'>>  = async params => {
  // undefined
    return this.client.stopDBInstance(params as any).promise();
  }

  stopDBInstanceAutomatedBackupsReplication: (params: RawParamsFrom<'stopDBInstanceAutomatedBackupsReplication'>) => Promise<ReturnTypeFrom<'stopDBInstanceAutomatedBackupsReplication'>>  = async params => {
  // undefined
    return this.client.stopDBInstanceAutomatedBackupsReplication(params as any).promise();
  }

  switchoverReadReplica: (params: RawParamsFrom<'switchoverReadReplica'>) => Promise<ReturnTypeFrom<'switchoverReadReplica'>>  = async params => {
  // undefined
    return this.client.switchoverReadReplica(params as any).promise();
  }
  
  static fromClient(client: AWSRDS): RDS {
    return new RDS(client) as any;
  }
  
  static client(options?: AWSRDS.Types.ClientConfiguration): RDS {
    return new RDS(new AWSRDS(options)) as any;
  }
}  
