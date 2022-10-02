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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'rds';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["describeCertificates","describeDBClusterEndpoints","describeDBClusterParameterGroups","describeDBClusterSnapshots","describeDBClusters","describeDBEngineVersions","describeDBInstanceAutomatedBackups","describeDBInstances","describeDBParameterGroups","describeDBProxies","describeDBProxyEndpoints","describeDBSecurityGroups","describeDBSnapshots","describeDBSubnetGroups","describeEventSubscriptions","describeEvents","describeExportTasks","describeGlobalClusters","describeOptionGroups","describePendingMaintenanceActions","describeReservedDBInstances","describeReservedDBInstancesOfferings","describeSourceRegions"];
    
  addRoleToDBCluster: FunctionTypeFrom<'addRoleToDBCluster'>;

  addRoleToDBInstance: FunctionTypeFrom<'addRoleToDBInstance'>;

  addSourceIdentifierToSubscription: FunctionTypeFrom<'addSourceIdentifierToSubscription'>;

  addTagsToResource: FunctionTypeFrom<'addTagsToResource'>;

  applyPendingMaintenanceAction: FunctionTypeFrom<'applyPendingMaintenanceAction'>;

  authorizeDBSecurityGroupIngress: FunctionTypeFrom<'authorizeDBSecurityGroupIngress'>;

  backtrackDBCluster: FunctionTypeFrom<'backtrackDBCluster'>;

  cancelExportTask: FunctionTypeFrom<'cancelExportTask'>;

  copyDBClusterParameterGroup: FunctionTypeFrom<'copyDBClusterParameterGroup'>;

  copyDBClusterSnapshot: FunctionTypeFrom<'copyDBClusterSnapshot'>;

  copyDBParameterGroup: FunctionTypeFrom<'copyDBParameterGroup'>;

  copyDBSnapshot: FunctionTypeFrom<'copyDBSnapshot'>;

  copyOptionGroup: FunctionTypeFrom<'copyOptionGroup'>;

  createCustomDBEngineVersion: FunctionTypeFrom<'createCustomDBEngineVersion'>;

  createDBCluster: FunctionTypeFrom<'createDBCluster'>;

  createDBClusterEndpoint: FunctionTypeFrom<'createDBClusterEndpoint'>;

  createDBClusterParameterGroup: FunctionTypeFrom<'createDBClusterParameterGroup'>;

  createDBClusterSnapshot: FunctionTypeFrom<'createDBClusterSnapshot'>;

  createDBInstance: FunctionTypeFrom<'createDBInstance'>;

  createDBInstanceReadReplica: FunctionTypeFrom<'createDBInstanceReadReplica'>;

  createDBParameterGroup: FunctionTypeFrom<'createDBParameterGroup'>;

  createDBProxy: FunctionTypeFrom<'createDBProxy'>;

  createDBProxyEndpoint: FunctionTypeFrom<'createDBProxyEndpoint'>;

  createDBSecurityGroup: FunctionTypeFrom<'createDBSecurityGroup'>;

  createDBSnapshot: FunctionTypeFrom<'createDBSnapshot'>;

  createDBSubnetGroup: FunctionTypeFrom<'createDBSubnetGroup'>;

  createEventSubscription: FunctionTypeFrom<'createEventSubscription'>;

  createGlobalCluster: FunctionTypeFrom<'createGlobalCluster'>;

  createOptionGroup: FunctionTypeFrom<'createOptionGroup'>;

  deleteCustomDBEngineVersion: FunctionTypeFrom<'deleteCustomDBEngineVersion'>;

  deleteDBCluster: FunctionTypeFrom<'deleteDBCluster'>;

  deleteDBClusterEndpoint: FunctionTypeFrom<'deleteDBClusterEndpoint'>;

  deleteDBClusterParameterGroup: FunctionTypeFrom<'deleteDBClusterParameterGroup'>;

  deleteDBClusterSnapshot: FunctionTypeFrom<'deleteDBClusterSnapshot'>;

  deleteDBInstance: FunctionTypeFrom<'deleteDBInstance'>;

  deleteDBInstanceAutomatedBackup: FunctionTypeFrom<'deleteDBInstanceAutomatedBackup'>;

  deleteDBParameterGroup: FunctionTypeFrom<'deleteDBParameterGroup'>;

  deleteDBProxy: FunctionTypeFrom<'deleteDBProxy'>;

  deleteDBProxyEndpoint: FunctionTypeFrom<'deleteDBProxyEndpoint'>;

  deleteDBSecurityGroup: FunctionTypeFrom<'deleteDBSecurityGroup'>;

  deleteDBSnapshot: FunctionTypeFrom<'deleteDBSnapshot'>;

  deleteDBSubnetGroup: FunctionTypeFrom<'deleteDBSubnetGroup'>;

  deleteEventSubscription: FunctionTypeFrom<'deleteEventSubscription'>;

  deleteGlobalCluster: FunctionTypeFrom<'deleteGlobalCluster'>;

  deleteOptionGroup: FunctionTypeFrom<'deleteOptionGroup'>;

  deregisterDBProxyTargets: FunctionTypeFrom<'deregisterDBProxyTargets'>;

  describeAccountAttributes: FunctionTypeFrom<'describeAccountAttributes'>;

  describeCertificates(params: { [K in keyof Omit<ParamsFrom<'describeCertificates', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCertificates'>]-?: ReturnTypeFrom<'describeCertificates'>[K]}['Certificates'] }>
  describeCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCertificates'>]-?: ReturnTypeFrom<'describeCertificates'>[K]}['Certificates'] }>;

  describeDBClusterBacktracks(params: { [K in keyof Omit<ParamsFrom<'describeDBClusterBacktracks', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBClusterBacktracks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusterBacktracks'>]-?: ReturnTypeFrom<'describeDBClusterBacktracks'>[K]}['DBClusterBacktracks'] }>
  ;

  describeDBClusterEndpoints(params: { [K in keyof Omit<ParamsFrom<'describeDBClusterEndpoints', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBClusterEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusterEndpoints'>]-?: ReturnTypeFrom<'describeDBClusterEndpoints'>[K]}['DBClusterEndpoints'] }>
  describeDBClusterEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusterEndpoints'>]-?: ReturnTypeFrom<'describeDBClusterEndpoints'>[K]}['DBClusterEndpoints'] }>;

  describeDBClusterParameterGroups(params: { [K in keyof Omit<ParamsFrom<'describeDBClusterParameterGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBClusterParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusterParameterGroups'>]-?: ReturnTypeFrom<'describeDBClusterParameterGroups'>[K]}['DBClusterParameterGroups'] }>
  describeDBClusterParameterGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusterParameterGroups'>]-?: ReturnTypeFrom<'describeDBClusterParameterGroups'>[K]}['DBClusterParameterGroups'] }>;

  describeDBClusterParameters(params: { [K in keyof Omit<ParamsFrom<'describeDBClusterParameters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBClusterParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusterParameters'>]-?: ReturnTypeFrom<'describeDBClusterParameters'>[K]}['Parameters'] }>
  ;

  describeDBClusterSnapshotAttributes: FunctionTypeFrom<'describeDBClusterSnapshotAttributes'>;

  describeDBClusterSnapshots(params: { [K in keyof Omit<ParamsFrom<'describeDBClusterSnapshots', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBClusterSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusterSnapshots'>]-?: ReturnTypeFrom<'describeDBClusterSnapshots'>[K]}['DBClusterSnapshots'] }>
  describeDBClusterSnapshots(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusterSnapshots'>]-?: ReturnTypeFrom<'describeDBClusterSnapshots'>[K]}['DBClusterSnapshots'] }>;

  describeDBClusters(params: { [K in keyof Omit<ParamsFrom<'describeDBClusters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusters'>]-?: ReturnTypeFrom<'describeDBClusters'>[K]}['DBClusters'] }>
  describeDBClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBClusters'>]-?: ReturnTypeFrom<'describeDBClusters'>[K]}['DBClusters'] }>;

  describeDBEngineVersions(params: { [K in keyof Omit<ParamsFrom<'describeDBEngineVersions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBEngineVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBEngineVersions'>]-?: ReturnTypeFrom<'describeDBEngineVersions'>[K]}['DBEngineVersions'] }>
  describeDBEngineVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBEngineVersions'>]-?: ReturnTypeFrom<'describeDBEngineVersions'>[K]}['DBEngineVersions'] }>;

  describeDBInstanceAutomatedBackups(params: { [K in keyof Omit<ParamsFrom<'describeDBInstanceAutomatedBackups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBInstanceAutomatedBackups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBInstanceAutomatedBackups'>]-?: ReturnTypeFrom<'describeDBInstanceAutomatedBackups'>[K]}['DBInstanceAutomatedBackups'] }>
  describeDBInstanceAutomatedBackups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBInstanceAutomatedBackups'>]-?: ReturnTypeFrom<'describeDBInstanceAutomatedBackups'>[K]}['DBInstanceAutomatedBackups'] }>;

  describeDBInstances(params: { [K in keyof Omit<ParamsFrom<'describeDBInstances', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBInstances'>]-?: ReturnTypeFrom<'describeDBInstances'>[K]}['DBInstances'] }>
  describeDBInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBInstances'>]-?: ReturnTypeFrom<'describeDBInstances'>[K]}['DBInstances'] }>;

  describeDBLogFiles(params: { [K in keyof Omit<ParamsFrom<'describeDBLogFiles', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBLogFiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBLogFiles'>]-?: ReturnTypeFrom<'describeDBLogFiles'>[K]}['DescribeDBLogFiles'] }>
  ;

  describeDBParameterGroups(params: { [K in keyof Omit<ParamsFrom<'describeDBParameterGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBParameterGroups'>]-?: ReturnTypeFrom<'describeDBParameterGroups'>[K]}['DBParameterGroups'] }>
  describeDBParameterGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBParameterGroups'>]-?: ReturnTypeFrom<'describeDBParameterGroups'>[K]}['DBParameterGroups'] }>;

  describeDBParameters(params: { [K in keyof Omit<ParamsFrom<'describeDBParameters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBParameters'>]-?: ReturnTypeFrom<'describeDBParameters'>[K]}['Parameters'] }>
  ;

  describeDBProxies(params: { [K in keyof Omit<ParamsFrom<'describeDBProxies', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBProxies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBProxies'>]-?: ReturnTypeFrom<'describeDBProxies'>[K]}['DBProxies'] }>
  describeDBProxies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBProxies'>]-?: ReturnTypeFrom<'describeDBProxies'>[K]}['DBProxies'] }>;

  describeDBProxyEndpoints(params: { [K in keyof Omit<ParamsFrom<'describeDBProxyEndpoints', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBProxyEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBProxyEndpoints'>]-?: ReturnTypeFrom<'describeDBProxyEndpoints'>[K]}['DBProxyEndpoints'] }>
  describeDBProxyEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBProxyEndpoints'>]-?: ReturnTypeFrom<'describeDBProxyEndpoints'>[K]}['DBProxyEndpoints'] }>;

  describeDBProxyTargetGroups(params: { [K in keyof Omit<ParamsFrom<'describeDBProxyTargetGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBProxyTargetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBProxyTargetGroups'>]-?: ReturnTypeFrom<'describeDBProxyTargetGroups'>[K]}['TargetGroups'] }>
  ;

  describeDBProxyTargets(params: { [K in keyof Omit<ParamsFrom<'describeDBProxyTargets', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBProxyTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBProxyTargets'>]-?: ReturnTypeFrom<'describeDBProxyTargets'>[K]}['Targets'] }>
  ;

  describeDBSecurityGroups(params: { [K in keyof Omit<ParamsFrom<'describeDBSecurityGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBSecurityGroups'>]-?: ReturnTypeFrom<'describeDBSecurityGroups'>[K]}['DBSecurityGroups'] }>
  describeDBSecurityGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBSecurityGroups'>]-?: ReturnTypeFrom<'describeDBSecurityGroups'>[K]}['DBSecurityGroups'] }>;

  describeDBSnapshotAttributes: FunctionTypeFrom<'describeDBSnapshotAttributes'>;

  describeDBSnapshots(params: { [K in keyof Omit<ParamsFrom<'describeDBSnapshots', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBSnapshots'>]-?: ReturnTypeFrom<'describeDBSnapshots'>[K]}['DBSnapshots'] }>
  describeDBSnapshots(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBSnapshots'>]-?: ReturnTypeFrom<'describeDBSnapshots'>[K]}['DBSnapshots'] }>;

  describeDBSubnetGroups(params: { [K in keyof Omit<ParamsFrom<'describeDBSubnetGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBSubnetGroups'>]-?: ReturnTypeFrom<'describeDBSubnetGroups'>[K]}['DBSubnetGroups'] }>
  describeDBSubnetGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBSubnetGroups'>]-?: ReturnTypeFrom<'describeDBSubnetGroups'>[K]}['DBSubnetGroups'] }>;

  describeEngineDefaultClusterParameters: FunctionTypeFrom<'describeEngineDefaultClusterParameters'>;

  describeEngineDefaultParameters(params: { [K in keyof Omit<ParamsFrom<'describeEngineDefaultParameters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEngineDefaultParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEngineDefaultParameters'>]-?: ReturnTypeFrom<'describeEngineDefaultParameters'>[K]}['EngineDefaults']['Parameters'] }>
  ;

  describeEventCategories: FunctionTypeFrom<'describeEventCategories'>;

  describeEventSubscriptions(params: { [K in keyof Omit<ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventSubscriptions'>]-?: ReturnTypeFrom<'describeEventSubscriptions'>[K]}['EventSubscriptionsList'] }>
  describeEventSubscriptions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventSubscriptions'>]-?: ReturnTypeFrom<'describeEventSubscriptions'>[K]}['EventSubscriptionsList'] }>;

  describeEvents(params: { [K in keyof Omit<ParamsFrom<'describeEvents', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>
  describeEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>;

  describeExportTasks(params: { [K in keyof Omit<ParamsFrom<'describeExportTasks', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeExportTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeExportTasks'>]-?: ReturnTypeFrom<'describeExportTasks'>[K]}['ExportTasks'] }>
  describeExportTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeExportTasks'>]-?: ReturnTypeFrom<'describeExportTasks'>[K]}['ExportTasks'] }>;

  describeGlobalClusters(params: { [K in keyof Omit<ParamsFrom<'describeGlobalClusters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeGlobalClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGlobalClusters'>]-?: ReturnTypeFrom<'describeGlobalClusters'>[K]}['GlobalClusters'] }>
  describeGlobalClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGlobalClusters'>]-?: ReturnTypeFrom<'describeGlobalClusters'>[K]}['GlobalClusters'] }>;

  describeOptionGroupOptions(params: { [K in keyof Omit<ParamsFrom<'describeOptionGroupOptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeOptionGroupOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOptionGroupOptions'>]-?: ReturnTypeFrom<'describeOptionGroupOptions'>[K]}['OptionGroupOptions'] }>
  ;

  describeOptionGroups(params: { [K in keyof Omit<ParamsFrom<'describeOptionGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeOptionGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOptionGroups'>]-?: ReturnTypeFrom<'describeOptionGroups'>[K]}['OptionGroupsList'] }>
  describeOptionGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOptionGroups'>]-?: ReturnTypeFrom<'describeOptionGroups'>[K]}['OptionGroupsList'] }>;

  describeOrderableDBInstanceOptions(params: { [K in keyof Omit<ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrderableDBInstanceOptions'>]-?: ReturnTypeFrom<'describeOrderableDBInstanceOptions'>[K]}['OrderableDBInstanceOptions'] }>
  ;

  describePendingMaintenanceActions(params: { [K in keyof Omit<ParamsFrom<'describePendingMaintenanceActions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describePendingMaintenanceActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePendingMaintenanceActions'>]-?: ReturnTypeFrom<'describePendingMaintenanceActions'>[K]}['PendingMaintenanceActions'] }>
  describePendingMaintenanceActions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePendingMaintenanceActions'>]-?: ReturnTypeFrom<'describePendingMaintenanceActions'>[K]}['PendingMaintenanceActions'] }>;

  describeReservedDBInstances(params: { [K in keyof Omit<ParamsFrom<'describeReservedDBInstances', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeReservedDBInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedDBInstances'>]-?: ReturnTypeFrom<'describeReservedDBInstances'>[K]}['ReservedDBInstances'] }>
  describeReservedDBInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedDBInstances'>]-?: ReturnTypeFrom<'describeReservedDBInstances'>[K]}['ReservedDBInstances'] }>;

  describeReservedDBInstancesOfferings(params: { [K in keyof Omit<ParamsFrom<'describeReservedDBInstancesOfferings', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeReservedDBInstancesOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedDBInstancesOfferings'>]-?: ReturnTypeFrom<'describeReservedDBInstancesOfferings'>[K]}['ReservedDBInstancesOfferings'] }>
  describeReservedDBInstancesOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedDBInstancesOfferings'>]-?: ReturnTypeFrom<'describeReservedDBInstancesOfferings'>[K]}['ReservedDBInstancesOfferings'] }>;

  describeSourceRegions(params: { [K in keyof Omit<ParamsFrom<'describeSourceRegions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeSourceRegions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSourceRegions'>]-?: ReturnTypeFrom<'describeSourceRegions'>[K]}['SourceRegions'] }>
  describeSourceRegions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSourceRegions'>]-?: ReturnTypeFrom<'describeSourceRegions'>[K]}['SourceRegions'] }>;

  describeValidDBInstanceModifications: FunctionTypeFrom<'describeValidDBInstanceModifications'>;

  downloadDBLogFilePortion(params: { [K in keyof Omit<ParamsFrom<'downloadDBLogFilePortion', { next?: string, limit?: number }>, 'Marker' | 'NumberOfLines'>]: ParamsFrom<'downloadDBLogFilePortion', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'downloadDBLogFilePortion'>]-?: ReturnTypeFrom<'downloadDBLogFilePortion'>[K]}['LogFileData'] }>
  ;

  failoverDBCluster: FunctionTypeFrom<'failoverDBCluster'>;

  failoverGlobalCluster: FunctionTypeFrom<'failoverGlobalCluster'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  modifyActivityStream: FunctionTypeFrom<'modifyActivityStream'>;

  modifyCertificates: FunctionTypeFrom<'modifyCertificates'>;

  modifyCurrentDBClusterCapacity: FunctionTypeFrom<'modifyCurrentDBClusterCapacity'>;

  modifyCustomDBEngineVersion: FunctionTypeFrom<'modifyCustomDBEngineVersion'>;

  modifyDBCluster: FunctionTypeFrom<'modifyDBCluster'>;

  modifyDBClusterEndpoint: FunctionTypeFrom<'modifyDBClusterEndpoint'>;

  modifyDBClusterParameterGroup: FunctionTypeFrom<'modifyDBClusterParameterGroup'>;

  modifyDBClusterSnapshotAttribute: FunctionTypeFrom<'modifyDBClusterSnapshotAttribute'>;

  modifyDBInstance: FunctionTypeFrom<'modifyDBInstance'>;

  modifyDBParameterGroup: FunctionTypeFrom<'modifyDBParameterGroup'>;

  modifyDBProxy: FunctionTypeFrom<'modifyDBProxy'>;

  modifyDBProxyEndpoint: FunctionTypeFrom<'modifyDBProxyEndpoint'>;

  modifyDBProxyTargetGroup: FunctionTypeFrom<'modifyDBProxyTargetGroup'>;

  modifyDBSnapshot: FunctionTypeFrom<'modifyDBSnapshot'>;

  modifyDBSnapshotAttribute: FunctionTypeFrom<'modifyDBSnapshotAttribute'>;

  modifyDBSubnetGroup: FunctionTypeFrom<'modifyDBSubnetGroup'>;

  modifyEventSubscription: FunctionTypeFrom<'modifyEventSubscription'>;

  modifyGlobalCluster: FunctionTypeFrom<'modifyGlobalCluster'>;

  modifyOptionGroup: FunctionTypeFrom<'modifyOptionGroup'>;

  promoteReadReplica: FunctionTypeFrom<'promoteReadReplica'>;

  promoteReadReplicaDBCluster: FunctionTypeFrom<'promoteReadReplicaDBCluster'>;

  purchaseReservedDBInstancesOffering: FunctionTypeFrom<'purchaseReservedDBInstancesOffering'>;

  rebootDBCluster: FunctionTypeFrom<'rebootDBCluster'>;

  rebootDBInstance: FunctionTypeFrom<'rebootDBInstance'>;

  registerDBProxyTargets: FunctionTypeFrom<'registerDBProxyTargets'>;

  removeFromGlobalCluster: FunctionTypeFrom<'removeFromGlobalCluster'>;

  removeRoleFromDBCluster: FunctionTypeFrom<'removeRoleFromDBCluster'>;

  removeRoleFromDBInstance: FunctionTypeFrom<'removeRoleFromDBInstance'>;

  removeSourceIdentifierFromSubscription: FunctionTypeFrom<'removeSourceIdentifierFromSubscription'>;

  removeTagsFromResource: FunctionTypeFrom<'removeTagsFromResource'>;

  resetDBClusterParameterGroup: FunctionTypeFrom<'resetDBClusterParameterGroup'>;

  resetDBParameterGroup: FunctionTypeFrom<'resetDBParameterGroup'>;

  restoreDBClusterFromS3: FunctionTypeFrom<'restoreDBClusterFromS3'>;

  restoreDBClusterFromSnapshot: FunctionTypeFrom<'restoreDBClusterFromSnapshot'>;

  restoreDBClusterToPointInTime: FunctionTypeFrom<'restoreDBClusterToPointInTime'>;

  restoreDBInstanceFromDBSnapshot: FunctionTypeFrom<'restoreDBInstanceFromDBSnapshot'>;

  restoreDBInstanceFromS3: FunctionTypeFrom<'restoreDBInstanceFromS3'>;

  restoreDBInstanceToPointInTime: FunctionTypeFrom<'restoreDBInstanceToPointInTime'>;

  revokeDBSecurityGroupIngress: FunctionTypeFrom<'revokeDBSecurityGroupIngress'>;

  startActivityStream: FunctionTypeFrom<'startActivityStream'>;

  startDBCluster: FunctionTypeFrom<'startDBCluster'>;

  startDBInstance: FunctionTypeFrom<'startDBInstance'>;

  startDBInstanceAutomatedBackupsReplication: FunctionTypeFrom<'startDBInstanceAutomatedBackupsReplication'>;

  startExportTask: FunctionTypeFrom<'startExportTask'>;

  stopActivityStream: FunctionTypeFrom<'stopActivityStream'>;

  stopDBCluster: FunctionTypeFrom<'stopDBCluster'>;

  stopDBInstance: FunctionTypeFrom<'stopDBInstance'>;

  stopDBInstanceAutomatedBackupsReplication: FunctionTypeFrom<'stopDBInstanceAutomatedBackupsReplication'>;

  switchoverReadReplica: FunctionTypeFrom<'switchoverReadReplica'>
}
 
export class RDS implements ClientType {
  private constructor(private readonly client: AWSRDS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rds';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["describeCertificates","describeDBClusterEndpoints","describeDBClusterParameterGroups","describeDBClusterSnapshots","describeDBClusters","describeDBEngineVersions","describeDBInstanceAutomatedBackups","describeDBInstances","describeDBParameterGroups","describeDBProxies","describeDBProxyEndpoints","describeDBSecurityGroups","describeDBSnapshots","describeDBSubnetGroups","describeEventSubscriptions","describeEvents","describeExportTasks","describeGlobalClusters","describeOptionGroups","describePendingMaintenanceActions","describeReservedDBInstances","describeReservedDBInstancesOfferings","describeSourceRegions"] as const;
  
  async addRoleToDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.addRoleToDBCluster(...args).promise()
  }

  async addRoleToDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.addRoleToDBInstance(...args).promise()
  }

  async addSourceIdentifierToSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.addSourceIdentifierToSubscription(...args).promise()
  }

  async addTagsToResource(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToResource(...args).promise()
  }

  async applyPendingMaintenanceAction(...args: any): Promise<any> {
  // undefined
    return this.client.applyPendingMaintenanceAction(...args).promise()
  }

  async authorizeDBSecurityGroupIngress(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeDBSecurityGroupIngress(...args).promise()
  }

  async backtrackDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.backtrackDBCluster(...args).promise()
  }

  async cancelExportTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelExportTask(...args).promise()
  }

  async copyDBClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.copyDBClusterParameterGroup(...args).promise()
  }

  async copyDBClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.copyDBClusterSnapshot(...args).promise()
  }

  async copyDBParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.copyDBParameterGroup(...args).promise()
  }

  async copyDBSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.copyDBSnapshot(...args).promise()
  }

  async copyOptionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.copyOptionGroup(...args).promise()
  }

  async createCustomDBEngineVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomDBEngineVersion(...args).promise()
  }

  async createDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createDBCluster(...args).promise()
  }

  async createDBClusterEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createDBClusterEndpoint(...args).promise()
  }

  async createDBClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDBClusterParameterGroup(...args).promise()
  }

  async createDBClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createDBClusterSnapshot(...args).promise()
  }

  async createDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createDBInstance(...args).promise()
  }

  async createDBInstanceReadReplica(...args: any): Promise<any> {
  // undefined
    return this.client.createDBInstanceReadReplica(...args).promise()
  }

  async createDBParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDBParameterGroup(...args).promise()
  }

  async createDBProxy(...args: any): Promise<any> {
  // undefined
    return this.client.createDBProxy(...args).promise()
  }

  async createDBProxyEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createDBProxyEndpoint(...args).promise()
  }

  async createDBSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDBSecurityGroup(...args).promise()
  }

  async createDBSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createDBSnapshot(...args).promise()
  }

  async createDBSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDBSubnetGroup(...args).promise()
  }

  async createEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createEventSubscription(...args).promise()
  }

  async createGlobalCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createGlobalCluster(...args).promise()
  }

  async createOptionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createOptionGroup(...args).promise()
  }

  async deleteCustomDBEngineVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomDBEngineVersion(...args).promise()
  }

  async deleteDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBCluster(...args).promise()
  }

  async deleteDBClusterEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBClusterEndpoint(...args).promise()
  }

  async deleteDBClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBClusterParameterGroup(...args).promise()
  }

  async deleteDBClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBClusterSnapshot(...args).promise()
  }

  async deleteDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBInstance(...args).promise()
  }

  async deleteDBInstanceAutomatedBackup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBInstanceAutomatedBackup(...args).promise()
  }

  async deleteDBParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBParameterGroup(...args).promise()
  }

  async deleteDBProxy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBProxy(...args).promise()
  }

  async deleteDBProxyEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBProxyEndpoint(...args).promise()
  }

  async deleteDBSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBSecurityGroup(...args).promise()
  }

  async deleteDBSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBSnapshot(...args).promise()
  }

  async deleteDBSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBSubnetGroup(...args).promise()
  }

  async deleteEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventSubscription(...args).promise()
  }

  async deleteGlobalCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGlobalCluster(...args).promise()
  }

  async deleteOptionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOptionGroup(...args).promise()
  }

  async deregisterDBProxyTargets(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterDBProxyTargets(...args).promise()
  }

  async describeAccountAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountAttributes(...args).promise()
  }

  async describeCertificates(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Certificates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Certificates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusterBacktracks(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterBacktracks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterBacktracks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBClusterBacktracks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusterEndpoints(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterEndpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBClusterEndpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusterParameterGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterParameterGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterParameterGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBClusterParameterGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusterParameters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterParameters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Parameters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusterSnapshotAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeDBClusterSnapshotAttributes(...args).promise()
  }

  async describeDBClusterSnapshots(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusterSnapshots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusterSnapshots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBClusterSnapshots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBClusters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBClusters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBClusters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBEngineVersions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBEngineVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBEngineVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBEngineVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBInstanceAutomatedBackups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBInstanceAutomatedBackups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBInstanceAutomatedBackups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBInstanceAutomatedBackups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBInstances(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBInstances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBInstances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBLogFiles(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DescribeDBLogFiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBLogFiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DescribeDBLogFiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBParameterGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBParameterGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBParameterGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBParameterGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBParameters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBParameters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Parameters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBProxies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBProxies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBProxies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBProxies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBProxyEndpoints(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBProxyEndpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBProxyEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBProxyEndpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBProxyTargetGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"TargetGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBProxyTargetGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.TargetGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBProxyTargets(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Targets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBProxyTargets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Targets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBSecurityGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBSecurityGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBSecurityGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBSecurityGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBSnapshotAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeDBSnapshotAttributes(...args).promise()
  }

  async describeDBSnapshots(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBSnapshots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBSnapshots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBSnapshots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDBSubnetGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DBSubnetGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDBSubnetGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DBSubnetGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEngineDefaultClusterParameters(...args: any): Promise<any> {
  // undefined
    return this.client.describeEngineDefaultClusterParameters(...args).promise()
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

  async describeEventCategories(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventCategories(...args).promise()
  }

  async describeEventSubscriptions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"EventSubscriptionsList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEventSubscriptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.EventSubscriptionsList ?? [];
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

  async describeExportTasks(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ExportTasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeExportTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ExportTasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGlobalClusters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"GlobalClusters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeGlobalClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.GlobalClusters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOptionGroupOptions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OptionGroupOptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOptionGroupOptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.OptionGroupOptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOptionGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OptionGroupsList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOptionGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.OptionGroupsList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrderableDBInstanceOptions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OrderableDBInstanceOptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOrderableDBInstanceOptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.OrderableDBInstanceOptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePendingMaintenanceActions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"PendingMaintenanceActions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describePendingMaintenanceActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.PendingMaintenanceActions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedDBInstances(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedDBInstances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedDBInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedDBInstances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedDBInstancesOfferings(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedDBInstancesOfferings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedDBInstancesOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedDBInstancesOfferings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSourceRegions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"SourceRegions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeSourceRegions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.SourceRegions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeValidDBInstanceModifications(...args: any): Promise<any> {
  // undefined
    return this.client.describeValidDBInstanceModifications(...args).promise()
  }

  async downloadDBLogFilePortion(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"NumberOfLines","moreResults":"AdditionalDataPending","outputToken":"Marker","resultKey":"LogFileData"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { NumberOfLines: limit } : {};
    const result = await this.client.downloadDBLogFilePortion(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.LogFileData ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async failoverDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.failoverDBCluster(...args).promise()
  }

  async failoverGlobalCluster(...args: any): Promise<any> {
  // undefined
    return this.client.failoverGlobalCluster(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // {"resultKey":"TagList"}
    return this.client.listTagsForResource(...args).promise()
  }

  async modifyActivityStream(...args: any): Promise<any> {
  // undefined
    return this.client.modifyActivityStream(...args).promise()
  }

  async modifyCertificates(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCertificates(...args).promise()
  }

  async modifyCurrentDBClusterCapacity(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCurrentDBClusterCapacity(...args).promise()
  }

  async modifyCustomDBEngineVersion(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCustomDBEngineVersion(...args).promise()
  }

  async modifyDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBCluster(...args).promise()
  }

  async modifyDBClusterEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBClusterEndpoint(...args).promise()
  }

  async modifyDBClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBClusterParameterGroup(...args).promise()
  }

  async modifyDBClusterSnapshotAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBClusterSnapshotAttribute(...args).promise()
  }

  async modifyDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBInstance(...args).promise()
  }

  async modifyDBParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBParameterGroup(...args).promise()
  }

  async modifyDBProxy(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBProxy(...args).promise()
  }

  async modifyDBProxyEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBProxyEndpoint(...args).promise()
  }

  async modifyDBProxyTargetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBProxyTargetGroup(...args).promise()
  }

  async modifyDBSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBSnapshot(...args).promise()
  }

  async modifyDBSnapshotAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBSnapshotAttribute(...args).promise()
  }

  async modifyDBSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBSubnetGroup(...args).promise()
  }

  async modifyEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.modifyEventSubscription(...args).promise()
  }

  async modifyGlobalCluster(...args: any): Promise<any> {
  // undefined
    return this.client.modifyGlobalCluster(...args).promise()
  }

  async modifyOptionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyOptionGroup(...args).promise()
  }

  async promoteReadReplica(...args: any): Promise<any> {
  // undefined
    return this.client.promoteReadReplica(...args).promise()
  }

  async promoteReadReplicaDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.promoteReadReplicaDBCluster(...args).promise()
  }

  async purchaseReservedDBInstancesOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseReservedDBInstancesOffering(...args).promise()
  }

  async rebootDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.rebootDBCluster(...args).promise()
  }

  async rebootDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.rebootDBInstance(...args).promise()
  }

  async registerDBProxyTargets(...args: any): Promise<any> {
  // undefined
    return this.client.registerDBProxyTargets(...args).promise()
  }

  async removeFromGlobalCluster(...args: any): Promise<any> {
  // undefined
    return this.client.removeFromGlobalCluster(...args).promise()
  }

  async removeRoleFromDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.removeRoleFromDBCluster(...args).promise()
  }

  async removeRoleFromDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.removeRoleFromDBInstance(...args).promise()
  }

  async removeSourceIdentifierFromSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.removeSourceIdentifierFromSubscription(...args).promise()
  }

  async removeTagsFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromResource(...args).promise()
  }

  async resetDBClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.resetDBClusterParameterGroup(...args).promise()
  }

  async resetDBParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.resetDBParameterGroup(...args).promise()
  }

  async restoreDBClusterFromS3(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDBClusterFromS3(...args).promise()
  }

  async restoreDBClusterFromSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDBClusterFromSnapshot(...args).promise()
  }

  async restoreDBClusterToPointInTime(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDBClusterToPointInTime(...args).promise()
  }

  async restoreDBInstanceFromDBSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDBInstanceFromDBSnapshot(...args).promise()
  }

  async restoreDBInstanceFromS3(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDBInstanceFromS3(...args).promise()
  }

  async restoreDBInstanceToPointInTime(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDBInstanceToPointInTime(...args).promise()
  }

  async revokeDBSecurityGroupIngress(...args: any): Promise<any> {
  // undefined
    return this.client.revokeDBSecurityGroupIngress(...args).promise()
  }

  async startActivityStream(...args: any): Promise<any> {
  // undefined
    return this.client.startActivityStream(...args).promise()
  }

  async startDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.startDBCluster(...args).promise()
  }

  async startDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.startDBInstance(...args).promise()
  }

  async startDBInstanceAutomatedBackupsReplication(...args: any): Promise<any> {
  // undefined
    return this.client.startDBInstanceAutomatedBackupsReplication(...args).promise()
  }

  async startExportTask(...args: any): Promise<any> {
  // undefined
    return this.client.startExportTask(...args).promise()
  }

  async stopActivityStream(...args: any): Promise<any> {
  // undefined
    return this.client.stopActivityStream(...args).promise()
  }

  async stopDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.stopDBCluster(...args).promise()
  }

  async stopDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.stopDBInstance(...args).promise()
  }

  async stopDBInstanceAutomatedBackupsReplication(...args: any): Promise<any> {
  // undefined
    return this.client.stopDBInstanceAutomatedBackupsReplication(...args).promise()
  }

  async switchoverReadReplica(...args: any): Promise<any> {
  // undefined
    return this.client.switchoverReadReplica(...args).promise()
  }
  
  static fromClient(client: AWSRDS): ClientType {
    return new RDS(client) as any;
  }
  
  static client(options?: AWSRDS.Types.ClientConfiguration): ClientType {
    return new RDS(new AWSRDS(options)) as any;
  }
}  
