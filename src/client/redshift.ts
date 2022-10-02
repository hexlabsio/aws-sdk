import { Request, Redshift as AWSRedshift } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRedshift> = AWSRedshift[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRedshift> = AWSRedshift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRedshift[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRedshift, Extras> = AWSRedshift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'redshift';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["describeClusterDbRevisions","describeClusterParameterGroups","describeClusterSecurityGroups","describeClusterSnapshots","describeClusterSubnetGroups","describeClusterTracks","describeClusterVersions","describeClusters","describeDataShares","describeDataSharesForConsumer","describeDataSharesForProducer","describeEndpointAccess","describeEndpointAuthorization","describeEventSubscriptions","describeEvents","describeHsmClientCertificates","describeHsmConfigurations","describeOrderableClusterOptions","describeReservedNodeExchangeStatus","describeReservedNodeOfferings","describeReservedNodes","describeScheduledActions","describeSnapshotCopyGrants","describeSnapshotSchedules","describeTableRestoreStatus","describeTags","describeUsageLimits"];
    
  acceptReservedNodeExchange: FunctionTypeFrom<'acceptReservedNodeExchange'>;

  addPartner: FunctionTypeFrom<'addPartner'>;

  associateDataShareConsumer: FunctionTypeFrom<'associateDataShareConsumer'>;

  authorizeClusterSecurityGroupIngress: FunctionTypeFrom<'authorizeClusterSecurityGroupIngress'>;

  authorizeDataShare: FunctionTypeFrom<'authorizeDataShare'>;

  authorizeEndpointAccess: FunctionTypeFrom<'authorizeEndpointAccess'>;

  authorizeSnapshotAccess: FunctionTypeFrom<'authorizeSnapshotAccess'>;

  batchDeleteClusterSnapshots: FunctionTypeFrom<'batchDeleteClusterSnapshots'>;

  batchModifyClusterSnapshots: FunctionTypeFrom<'batchModifyClusterSnapshots'>;

  cancelResize: FunctionTypeFrom<'cancelResize'>;

  copyClusterSnapshot: FunctionTypeFrom<'copyClusterSnapshot'>;

  createAuthenticationProfile: FunctionTypeFrom<'createAuthenticationProfile'>;

  createCluster: FunctionTypeFrom<'createCluster'>;

  createClusterParameterGroup: FunctionTypeFrom<'createClusterParameterGroup'>;

  createClusterSecurityGroup: FunctionTypeFrom<'createClusterSecurityGroup'>;

  createClusterSnapshot: FunctionTypeFrom<'createClusterSnapshot'>;

  createClusterSubnetGroup: FunctionTypeFrom<'createClusterSubnetGroup'>;

  createEndpointAccess: FunctionTypeFrom<'createEndpointAccess'>;

  createEventSubscription: FunctionTypeFrom<'createEventSubscription'>;

  createHsmClientCertificate: FunctionTypeFrom<'createHsmClientCertificate'>;

  createHsmConfiguration: FunctionTypeFrom<'createHsmConfiguration'>;

  createScheduledAction: FunctionTypeFrom<'createScheduledAction'>;

  createSnapshotCopyGrant: FunctionTypeFrom<'createSnapshotCopyGrant'>;

  createSnapshotSchedule: FunctionTypeFrom<'createSnapshotSchedule'>;

  createTags: FunctionTypeFrom<'createTags'>;

  createUsageLimit: FunctionTypeFrom<'createUsageLimit'>;

  deauthorizeDataShare: FunctionTypeFrom<'deauthorizeDataShare'>;

  deleteAuthenticationProfile: FunctionTypeFrom<'deleteAuthenticationProfile'>;

  deleteCluster: FunctionTypeFrom<'deleteCluster'>;

  deleteClusterParameterGroup: FunctionTypeFrom<'deleteClusterParameterGroup'>;

  deleteClusterSecurityGroup: FunctionTypeFrom<'deleteClusterSecurityGroup'>;

  deleteClusterSnapshot: FunctionTypeFrom<'deleteClusterSnapshot'>;

  deleteClusterSubnetGroup: FunctionTypeFrom<'deleteClusterSubnetGroup'>;

  deleteEndpointAccess: FunctionTypeFrom<'deleteEndpointAccess'>;

  deleteEventSubscription: FunctionTypeFrom<'deleteEventSubscription'>;

  deleteHsmClientCertificate: FunctionTypeFrom<'deleteHsmClientCertificate'>;

  deleteHsmConfiguration: FunctionTypeFrom<'deleteHsmConfiguration'>;

  deletePartner: FunctionTypeFrom<'deletePartner'>;

  deleteScheduledAction: FunctionTypeFrom<'deleteScheduledAction'>;

  deleteSnapshotCopyGrant: FunctionTypeFrom<'deleteSnapshotCopyGrant'>;

  deleteSnapshotSchedule: FunctionTypeFrom<'deleteSnapshotSchedule'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  deleteUsageLimit: FunctionTypeFrom<'deleteUsageLimit'>;

  describeAccountAttributes: FunctionTypeFrom<'describeAccountAttributes'>;

  describeAuthenticationProfiles: FunctionTypeFrom<'describeAuthenticationProfiles'>;

  describeClusterDbRevisions(params: { [K in keyof Omit<ParamsFrom<'describeClusterDbRevisions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusterDbRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterDbRevisions'>]-?: ReturnTypeFrom<'describeClusterDbRevisions'>[K]}['ClusterDbRevisions'] }>
  describeClusterDbRevisions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterDbRevisions'>]-?: ReturnTypeFrom<'describeClusterDbRevisions'>[K]}['ClusterDbRevisions'] }>;

  describeClusterParameterGroups(params: { [K in keyof Omit<ParamsFrom<'describeClusterParameterGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusterParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterParameterGroups'>]-?: ReturnTypeFrom<'describeClusterParameterGroups'>[K]}['ParameterGroups'] }>
  describeClusterParameterGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterParameterGroups'>]-?: ReturnTypeFrom<'describeClusterParameterGroups'>[K]}['ParameterGroups'] }>;

  describeClusterParameters(params: { [K in keyof Omit<ParamsFrom<'describeClusterParameters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusterParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterParameters'>]-?: ReturnTypeFrom<'describeClusterParameters'>[K]}['Parameters'] }>
  ;

  describeClusterSecurityGroups(params: { [K in keyof Omit<ParamsFrom<'describeClusterSecurityGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusterSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterSecurityGroups'>]-?: ReturnTypeFrom<'describeClusterSecurityGroups'>[K]}['ClusterSecurityGroups'] }>
  describeClusterSecurityGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterSecurityGroups'>]-?: ReturnTypeFrom<'describeClusterSecurityGroups'>[K]}['ClusterSecurityGroups'] }>;

  describeClusterSnapshots(params: { [K in keyof Omit<ParamsFrom<'describeClusterSnapshots', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusterSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterSnapshots'>]-?: ReturnTypeFrom<'describeClusterSnapshots'>[K]}['Snapshots'] }>
  describeClusterSnapshots(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterSnapshots'>]-?: ReturnTypeFrom<'describeClusterSnapshots'>[K]}['Snapshots'] }>;

  describeClusterSubnetGroups(params: { [K in keyof Omit<ParamsFrom<'describeClusterSubnetGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusterSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterSubnetGroups'>]-?: ReturnTypeFrom<'describeClusterSubnetGroups'>[K]}['ClusterSubnetGroups'] }>
  describeClusterSubnetGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterSubnetGroups'>]-?: ReturnTypeFrom<'describeClusterSubnetGroups'>[K]}['ClusterSubnetGroups'] }>;

  describeClusterTracks(params: { [K in keyof Omit<ParamsFrom<'describeClusterTracks', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusterTracks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterTracks'>]-?: ReturnTypeFrom<'describeClusterTracks'>[K]}['MaintenanceTracks'] }>
  describeClusterTracks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterTracks'>]-?: ReturnTypeFrom<'describeClusterTracks'>[K]}['MaintenanceTracks'] }>;

  describeClusterVersions(params: { [K in keyof Omit<ParamsFrom<'describeClusterVersions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusterVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterVersions'>]-?: ReturnTypeFrom<'describeClusterVersions'>[K]}['ClusterVersions'] }>
  describeClusterVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusterVersions'>]-?: ReturnTypeFrom<'describeClusterVersions'>[K]}['ClusterVersions'] }>;

  describeClusters(params: { [K in keyof Omit<ParamsFrom<'describeClusters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusters'>]-?: ReturnTypeFrom<'describeClusters'>[K]}['Clusters'] }>
  describeClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClusters'>]-?: ReturnTypeFrom<'describeClusters'>[K]}['Clusters'] }>;

  describeDataShares(params: { [K in keyof Omit<ParamsFrom<'describeDataShares', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDataShares', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDataShares'>]-?: ReturnTypeFrom<'describeDataShares'>[K]}['DataShares'] }>
  describeDataShares(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDataShares'>]-?: ReturnTypeFrom<'describeDataShares'>[K]}['DataShares'] }>;

  describeDataSharesForConsumer(params: { [K in keyof Omit<ParamsFrom<'describeDataSharesForConsumer', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDataSharesForConsumer', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDataSharesForConsumer'>]-?: ReturnTypeFrom<'describeDataSharesForConsumer'>[K]}['DataShares'] }>
  describeDataSharesForConsumer(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDataSharesForConsumer'>]-?: ReturnTypeFrom<'describeDataSharesForConsumer'>[K]}['DataShares'] }>;

  describeDataSharesForProducer(params: { [K in keyof Omit<ParamsFrom<'describeDataSharesForProducer', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDataSharesForProducer', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDataSharesForProducer'>]-?: ReturnTypeFrom<'describeDataSharesForProducer'>[K]}['DataShares'] }>
  describeDataSharesForProducer(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDataSharesForProducer'>]-?: ReturnTypeFrom<'describeDataSharesForProducer'>[K]}['DataShares'] }>;

  describeDefaultClusterParameters(params: { [K in keyof Omit<ParamsFrom<'describeDefaultClusterParameters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDefaultClusterParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDefaultClusterParameters'>]-?: ReturnTypeFrom<'describeDefaultClusterParameters'>[K]}['DefaultClusterParameters']['Parameters'] }>
  ;

  describeEndpointAccess(params: { [K in keyof Omit<ParamsFrom<'describeEndpointAccess', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEndpointAccess', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEndpointAccess'>]-?: ReturnTypeFrom<'describeEndpointAccess'>[K]}['EndpointAccessList'] }>
  describeEndpointAccess(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEndpointAccess'>]-?: ReturnTypeFrom<'describeEndpointAccess'>[K]}['EndpointAccessList'] }>;

  describeEndpointAuthorization(params: { [K in keyof Omit<ParamsFrom<'describeEndpointAuthorization', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEndpointAuthorization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEndpointAuthorization'>]-?: ReturnTypeFrom<'describeEndpointAuthorization'>[K]}['EndpointAuthorizationList'] }>
  describeEndpointAuthorization(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEndpointAuthorization'>]-?: ReturnTypeFrom<'describeEndpointAuthorization'>[K]}['EndpointAuthorizationList'] }>;

  describeEventCategories: FunctionTypeFrom<'describeEventCategories'>;

  describeEventSubscriptions(params: { [K in keyof Omit<ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventSubscriptions'>]-?: ReturnTypeFrom<'describeEventSubscriptions'>[K]}['EventSubscriptionsList'] }>
  describeEventSubscriptions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventSubscriptions'>]-?: ReturnTypeFrom<'describeEventSubscriptions'>[K]}['EventSubscriptionsList'] }>;

  describeEvents(params: { [K in keyof Omit<ParamsFrom<'describeEvents', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>
  describeEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>;

  describeHsmClientCertificates(params: { [K in keyof Omit<ParamsFrom<'describeHsmClientCertificates', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeHsmClientCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHsmClientCertificates'>]-?: ReturnTypeFrom<'describeHsmClientCertificates'>[K]}['HsmClientCertificates'] }>
  describeHsmClientCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHsmClientCertificates'>]-?: ReturnTypeFrom<'describeHsmClientCertificates'>[K]}['HsmClientCertificates'] }>;

  describeHsmConfigurations(params: { [K in keyof Omit<ParamsFrom<'describeHsmConfigurations', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeHsmConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHsmConfigurations'>]-?: ReturnTypeFrom<'describeHsmConfigurations'>[K]}['HsmConfigurations'] }>
  describeHsmConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHsmConfigurations'>]-?: ReturnTypeFrom<'describeHsmConfigurations'>[K]}['HsmConfigurations'] }>;

  describeLoggingStatus: FunctionTypeFrom<'describeLoggingStatus'>;

  describeNodeConfigurationOptions(params: { [K in keyof Omit<ParamsFrom<'describeNodeConfigurationOptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeNodeConfigurationOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNodeConfigurationOptions'>]-?: ReturnTypeFrom<'describeNodeConfigurationOptions'>[K]}['NodeConfigurationOptionList'] }>
  ;

  describeOrderableClusterOptions(params: { [K in keyof Omit<ParamsFrom<'describeOrderableClusterOptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeOrderableClusterOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrderableClusterOptions'>]-?: ReturnTypeFrom<'describeOrderableClusterOptions'>[K]}['OrderableClusterOptions'] }>
  describeOrderableClusterOptions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrderableClusterOptions'>]-?: ReturnTypeFrom<'describeOrderableClusterOptions'>[K]}['OrderableClusterOptions'] }>;

  describePartners: FunctionTypeFrom<'describePartners'>;

  describeReservedNodeExchangeStatus(params: { [K in keyof Omit<ParamsFrom<'describeReservedNodeExchangeStatus', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeReservedNodeExchangeStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedNodeExchangeStatus'>]-?: ReturnTypeFrom<'describeReservedNodeExchangeStatus'>[K]}['ReservedNodeExchangeStatusDetails'] }>
  describeReservedNodeExchangeStatus(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedNodeExchangeStatus'>]-?: ReturnTypeFrom<'describeReservedNodeExchangeStatus'>[K]}['ReservedNodeExchangeStatusDetails'] }>;

  describeReservedNodeOfferings(params: { [K in keyof Omit<ParamsFrom<'describeReservedNodeOfferings', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeReservedNodeOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedNodeOfferings'>]-?: ReturnTypeFrom<'describeReservedNodeOfferings'>[K]}['ReservedNodeOfferings'] }>
  describeReservedNodeOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedNodeOfferings'>]-?: ReturnTypeFrom<'describeReservedNodeOfferings'>[K]}['ReservedNodeOfferings'] }>;

  describeReservedNodes(params: { [K in keyof Omit<ParamsFrom<'describeReservedNodes', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeReservedNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedNodes'>]-?: ReturnTypeFrom<'describeReservedNodes'>[K]}['ReservedNodes'] }>
  describeReservedNodes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedNodes'>]-?: ReturnTypeFrom<'describeReservedNodes'>[K]}['ReservedNodes'] }>;

  describeResize: FunctionTypeFrom<'describeResize'>;

  describeScheduledActions(params: { [K in keyof Omit<ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScheduledActions'>]-?: ReturnTypeFrom<'describeScheduledActions'>[K]}['ScheduledActions'] }>
  describeScheduledActions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScheduledActions'>]-?: ReturnTypeFrom<'describeScheduledActions'>[K]}['ScheduledActions'] }>;

  describeSnapshotCopyGrants(params: { [K in keyof Omit<ParamsFrom<'describeSnapshotCopyGrants', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeSnapshotCopyGrants', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshotCopyGrants'>]-?: ReturnTypeFrom<'describeSnapshotCopyGrants'>[K]}['SnapshotCopyGrants'] }>
  describeSnapshotCopyGrants(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshotCopyGrants'>]-?: ReturnTypeFrom<'describeSnapshotCopyGrants'>[K]}['SnapshotCopyGrants'] }>;

  describeSnapshotSchedules(params: { [K in keyof Omit<ParamsFrom<'describeSnapshotSchedules', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeSnapshotSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshotSchedules'>]-?: ReturnTypeFrom<'describeSnapshotSchedules'>[K]}['SnapshotSchedules'] }>
  describeSnapshotSchedules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshotSchedules'>]-?: ReturnTypeFrom<'describeSnapshotSchedules'>[K]}['SnapshotSchedules'] }>;

  describeStorage: FunctionTypeFrom<'describeStorage'>;

  describeTableRestoreStatus(params: { [K in keyof Omit<ParamsFrom<'describeTableRestoreStatus', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeTableRestoreStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTableRestoreStatus'>]-?: ReturnTypeFrom<'describeTableRestoreStatus'>[K]}['TableRestoreStatusDetails'] }>
  describeTableRestoreStatus(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTableRestoreStatus'>]-?: ReturnTypeFrom<'describeTableRestoreStatus'>[K]}['TableRestoreStatusDetails'] }>;

  describeTags(params: { [K in keyof Omit<ParamsFrom<'describeTags', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['TaggedResources'] }>
  describeTags(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['TaggedResources'] }>;

  describeUsageLimits(params: { [K in keyof Omit<ParamsFrom<'describeUsageLimits', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeUsageLimits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUsageLimits'>]-?: ReturnTypeFrom<'describeUsageLimits'>[K]}['UsageLimits'] }>
  describeUsageLimits(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeUsageLimits'>]-?: ReturnTypeFrom<'describeUsageLimits'>[K]}['UsageLimits'] }>;

  disableLogging: FunctionTypeFrom<'disableLogging'>;

  disableSnapshotCopy: FunctionTypeFrom<'disableSnapshotCopy'>;

  disassociateDataShareConsumer: FunctionTypeFrom<'disassociateDataShareConsumer'>;

  enableLogging: FunctionTypeFrom<'enableLogging'>;

  enableSnapshotCopy: FunctionTypeFrom<'enableSnapshotCopy'>;

  getClusterCredentials: FunctionTypeFrom<'getClusterCredentials'>;

  getClusterCredentialsWithIAM: FunctionTypeFrom<'getClusterCredentialsWithIAM'>;

  getReservedNodeExchangeConfigurationOptions(params: { [K in keyof Omit<ParamsFrom<'getReservedNodeExchangeConfigurationOptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'getReservedNodeExchangeConfigurationOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getReservedNodeExchangeConfigurationOptions'>]-?: ReturnTypeFrom<'getReservedNodeExchangeConfigurationOptions'>[K]}['ReservedNodeConfigurationOptionList'] }>
  ;

  getReservedNodeExchangeOfferings(params: { [K in keyof Omit<ParamsFrom<'getReservedNodeExchangeOfferings', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'getReservedNodeExchangeOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getReservedNodeExchangeOfferings'>]-?: ReturnTypeFrom<'getReservedNodeExchangeOfferings'>[K]}['ReservedNodeOfferings'] }>
  ;

  modifyAquaConfiguration: FunctionTypeFrom<'modifyAquaConfiguration'>;

  modifyAuthenticationProfile: FunctionTypeFrom<'modifyAuthenticationProfile'>;

  modifyCluster: FunctionTypeFrom<'modifyCluster'>;

  modifyClusterDbRevision: FunctionTypeFrom<'modifyClusterDbRevision'>;

  modifyClusterIamRoles: FunctionTypeFrom<'modifyClusterIamRoles'>;

  modifyClusterMaintenance: FunctionTypeFrom<'modifyClusterMaintenance'>;

  modifyClusterParameterGroup: FunctionTypeFrom<'modifyClusterParameterGroup'>;

  modifyClusterSnapshot: FunctionTypeFrom<'modifyClusterSnapshot'>;

  modifyClusterSnapshotSchedule: FunctionTypeFrom<'modifyClusterSnapshotSchedule'>;

  modifyClusterSubnetGroup: FunctionTypeFrom<'modifyClusterSubnetGroup'>;

  modifyEndpointAccess: FunctionTypeFrom<'modifyEndpointAccess'>;

  modifyEventSubscription: FunctionTypeFrom<'modifyEventSubscription'>;

  modifyScheduledAction: FunctionTypeFrom<'modifyScheduledAction'>;

  modifySnapshotCopyRetentionPeriod: FunctionTypeFrom<'modifySnapshotCopyRetentionPeriod'>;

  modifySnapshotSchedule: FunctionTypeFrom<'modifySnapshotSchedule'>;

  modifyUsageLimit: FunctionTypeFrom<'modifyUsageLimit'>;

  pauseCluster: FunctionTypeFrom<'pauseCluster'>;

  purchaseReservedNodeOffering: FunctionTypeFrom<'purchaseReservedNodeOffering'>;

  rebootCluster: FunctionTypeFrom<'rebootCluster'>;

  rejectDataShare: FunctionTypeFrom<'rejectDataShare'>;

  resetClusterParameterGroup: FunctionTypeFrom<'resetClusterParameterGroup'>;

  resizeCluster: FunctionTypeFrom<'resizeCluster'>;

  restoreFromClusterSnapshot: FunctionTypeFrom<'restoreFromClusterSnapshot'>;

  restoreTableFromClusterSnapshot: FunctionTypeFrom<'restoreTableFromClusterSnapshot'>;

  resumeCluster: FunctionTypeFrom<'resumeCluster'>;

  revokeClusterSecurityGroupIngress: FunctionTypeFrom<'revokeClusterSecurityGroupIngress'>;

  revokeEndpointAccess: FunctionTypeFrom<'revokeEndpointAccess'>;

  revokeSnapshotAccess: FunctionTypeFrom<'revokeSnapshotAccess'>;

  rotateEncryptionKey: FunctionTypeFrom<'rotateEncryptionKey'>;

  updatePartnerStatus: FunctionTypeFrom<'updatePartnerStatus'>
}
 
export class Redshift implements ClientType {
  private constructor(private readonly client: AWSRedshift) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'redshift';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["describeClusterDbRevisions","describeClusterParameterGroups","describeClusterSecurityGroups","describeClusterSnapshots","describeClusterSubnetGroups","describeClusterTracks","describeClusterVersions","describeClusters","describeDataShares","describeDataSharesForConsumer","describeDataSharesForProducer","describeEndpointAccess","describeEndpointAuthorization","describeEventSubscriptions","describeEvents","describeHsmClientCertificates","describeHsmConfigurations","describeOrderableClusterOptions","describeReservedNodeExchangeStatus","describeReservedNodeOfferings","describeReservedNodes","describeScheduledActions","describeSnapshotCopyGrants","describeSnapshotSchedules","describeTableRestoreStatus","describeTags","describeUsageLimits"] as const;
  
  async acceptReservedNodeExchange(...args: any): Promise<any> {
  // undefined
    return this.client.acceptReservedNodeExchange(...args).promise()
  }

  async addPartner(...args: any): Promise<any> {
  // undefined
    return this.client.addPartner(...args).promise()
  }

  async associateDataShareConsumer(...args: any): Promise<any> {
  // undefined
    return this.client.associateDataShareConsumer(...args).promise()
  }

  async authorizeClusterSecurityGroupIngress(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeClusterSecurityGroupIngress(...args).promise()
  }

  async authorizeDataShare(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeDataShare(...args).promise()
  }

  async authorizeEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeEndpointAccess(...args).promise()
  }

  async authorizeSnapshotAccess(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeSnapshotAccess(...args).promise()
  }

  async batchDeleteClusterSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteClusterSnapshots(...args).promise()
  }

  async batchModifyClusterSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.batchModifyClusterSnapshots(...args).promise()
  }

  async cancelResize(...args: any): Promise<any> {
  // undefined
    return this.client.cancelResize(...args).promise()
  }

  async copyClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.copyClusterSnapshot(...args).promise()
  }

  async createAuthenticationProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createAuthenticationProfile(...args).promise()
  }

  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createClusterParameterGroup(...args).promise()
  }

  async createClusterSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createClusterSecurityGroup(...args).promise()
  }

  async createClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createClusterSnapshot(...args).promise()
  }

  async createClusterSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createClusterSubnetGroup(...args).promise()
  }

  async createEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpointAccess(...args).promise()
  }

  async createEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createEventSubscription(...args).promise()
  }

  async createHsmClientCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.createHsmClientCertificate(...args).promise()
  }

  async createHsmConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createHsmConfiguration(...args).promise()
  }

  async createScheduledAction(...args: any): Promise<any> {
  // undefined
    return this.client.createScheduledAction(...args).promise()
  }

  async createSnapshotCopyGrant(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshotCopyGrant(...args).promise()
  }

  async createSnapshotSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshotSchedule(...args).promise()
  }

  async createTags(...args: any): Promise<any> {
  // undefined
    return this.client.createTags(...args).promise()
  }

  async createUsageLimit(...args: any): Promise<any> {
  // undefined
    return this.client.createUsageLimit(...args).promise()
  }

  async deauthorizeDataShare(...args: any): Promise<any> {
  // undefined
    return this.client.deauthorizeDataShare(...args).promise()
  }

  async deleteAuthenticationProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAuthenticationProfile(...args).promise()
  }

  async deleteCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCluster(...args).promise()
  }

  async deleteClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClusterParameterGroup(...args).promise()
  }

  async deleteClusterSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClusterSecurityGroup(...args).promise()
  }

  async deleteClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClusterSnapshot(...args).promise()
  }

  async deleteClusterSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClusterSubnetGroup(...args).promise()
  }

  async deleteEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpointAccess(...args).promise()
  }

  async deleteEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventSubscription(...args).promise()
  }

  async deleteHsmClientCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHsmClientCertificate(...args).promise()
  }

  async deleteHsmConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHsmConfiguration(...args).promise()
  }

  async deletePartner(...args: any): Promise<any> {
  // undefined
    return this.client.deletePartner(...args).promise()
  }

  async deleteScheduledAction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScheduledAction(...args).promise()
  }

  async deleteSnapshotCopyGrant(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshotCopyGrant(...args).promise()
  }

  async deleteSnapshotSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshotSchedule(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async deleteUsageLimit(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUsageLimit(...args).promise()
  }

  async describeAccountAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountAttributes(...args).promise()
  }

  async describeAuthenticationProfiles(...args: any): Promise<any> {
  // undefined
    return this.client.describeAuthenticationProfiles(...args).promise()
  }

  async describeClusterDbRevisions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ClusterDbRevisions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterDbRevisions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ClusterDbRevisions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterParameterGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ParameterGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterParameterGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ParameterGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterParameters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterParameters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Parameters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterSecurityGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ClusterSecurityGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterSecurityGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ClusterSecurityGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterSnapshots(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Snapshots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterSnapshots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Snapshots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterSubnetGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ClusterSubnetGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterSubnetGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ClusterSubnetGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterTracks(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"MaintenanceTracks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterTracks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.MaintenanceTracks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterVersions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ClusterVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ClusterVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Clusters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Clusters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDataShares(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DataShares"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDataShares(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DataShares ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDataSharesForConsumer(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DataShares"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDataSharesForConsumer(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DataShares ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDataSharesForProducer(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DataShares"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDataSharesForProducer(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.DataShares ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDefaultClusterParameters(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"DefaultClusterParameters.Marker","resultKey":"DefaultClusterParameters.Parameters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDefaultClusterParameters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.DefaultClusterParameters?.Marker;
    const member = result.DefaultClusterParameters?.Parameters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEndpointAccess(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"EndpointAccessList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEndpointAccess(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.EndpointAccessList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEndpointAuthorization(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"EndpointAuthorizationList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEndpointAuthorization(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.EndpointAuthorizationList ?? [];
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

  async describeHsmClientCertificates(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"HsmClientCertificates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeHsmClientCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.HsmClientCertificates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHsmConfigurations(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"HsmConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeHsmConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.HsmConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLoggingStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoggingStatus(...args).promise()
  }

  async describeNodeConfigurationOptions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"NodeConfigurationOptionList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeNodeConfigurationOptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.NodeConfigurationOptionList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrderableClusterOptions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OrderableClusterOptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOrderableClusterOptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.OrderableClusterOptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePartners(...args: any): Promise<any> {
  // undefined
    return this.client.describePartners(...args).promise()
  }

  async describeReservedNodeExchangeStatus(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodeExchangeStatusDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedNodeExchangeStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedNodeExchangeStatusDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedNodeOfferings(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodeOfferings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedNodeOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedNodeOfferings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedNodes(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedNodes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedNodes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeResize(...args: any): Promise<any> {
  // undefined
    return this.client.describeResize(...args).promise()
  }

  async describeScheduledActions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ScheduledActions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeScheduledActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ScheduledActions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshotCopyGrants(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"SnapshotCopyGrants"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeSnapshotCopyGrants(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.SnapshotCopyGrants ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshotSchedules(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"SnapshotSchedules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeSnapshotSchedules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.SnapshotSchedules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStorage(...args: any): Promise<any> {
  // undefined
    return this.client.describeStorage(...args).promise()
  }

  async describeTableRestoreStatus(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"TableRestoreStatusDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeTableRestoreStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.TableRestoreStatusDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTags(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"TaggedResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.TaggedResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUsageLimits(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"UsageLimits"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeUsageLimits(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.UsageLimits ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disableLogging(...args: any): Promise<any> {
  // undefined
    return this.client.disableLogging(...args).promise()
  }

  async disableSnapshotCopy(...args: any): Promise<any> {
  // undefined
    return this.client.disableSnapshotCopy(...args).promise()
  }

  async disassociateDataShareConsumer(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateDataShareConsumer(...args).promise()
  }

  async enableLogging(...args: any): Promise<any> {
  // undefined
    return this.client.enableLogging(...args).promise()
  }

  async enableSnapshotCopy(...args: any): Promise<any> {
  // undefined
    return this.client.enableSnapshotCopy(...args).promise()
  }

  async getClusterCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.getClusterCredentials(...args).promise()
  }

  async getClusterCredentialsWithIAM(...args: any): Promise<any> {
  // undefined
    return this.client.getClusterCredentialsWithIAM(...args).promise()
  }

  async getReservedNodeExchangeConfigurationOptions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodeConfigurationOptionList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.getReservedNodeExchangeConfigurationOptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedNodeConfigurationOptionList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getReservedNodeExchangeOfferings(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodeOfferings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.getReservedNodeExchangeOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ReservedNodeOfferings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async modifyAquaConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.modifyAquaConfiguration(...args).promise()
  }

  async modifyAuthenticationProfile(...args: any): Promise<any> {
  // undefined
    return this.client.modifyAuthenticationProfile(...args).promise()
  }

  async modifyCluster(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCluster(...args).promise()
  }

  async modifyClusterDbRevision(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClusterDbRevision(...args).promise()
  }

  async modifyClusterIamRoles(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClusterIamRoles(...args).promise()
  }

  async modifyClusterMaintenance(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClusterMaintenance(...args).promise()
  }

  async modifyClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClusterParameterGroup(...args).promise()
  }

  async modifyClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClusterSnapshot(...args).promise()
  }

  async modifyClusterSnapshotSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClusterSnapshotSchedule(...args).promise()
  }

  async modifyClusterSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClusterSubnetGroup(...args).promise()
  }

  async modifyEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.modifyEndpointAccess(...args).promise()
  }

  async modifyEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.modifyEventSubscription(...args).promise()
  }

  async modifyScheduledAction(...args: any): Promise<any> {
  // undefined
    return this.client.modifyScheduledAction(...args).promise()
  }

  async modifySnapshotCopyRetentionPeriod(...args: any): Promise<any> {
  // undefined
    return this.client.modifySnapshotCopyRetentionPeriod(...args).promise()
  }

  async modifySnapshotSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.modifySnapshotSchedule(...args).promise()
  }

  async modifyUsageLimit(...args: any): Promise<any> {
  // undefined
    return this.client.modifyUsageLimit(...args).promise()
  }

  async pauseCluster(...args: any): Promise<any> {
  // undefined
    return this.client.pauseCluster(...args).promise()
  }

  async purchaseReservedNodeOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseReservedNodeOffering(...args).promise()
  }

  async rebootCluster(...args: any): Promise<any> {
  // undefined
    return this.client.rebootCluster(...args).promise()
  }

  async rejectDataShare(...args: any): Promise<any> {
  // undefined
    return this.client.rejectDataShare(...args).promise()
  }

  async resetClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.resetClusterParameterGroup(...args).promise()
  }

  async resizeCluster(...args: any): Promise<any> {
  // undefined
    return this.client.resizeCluster(...args).promise()
  }

  async restoreFromClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.restoreFromClusterSnapshot(...args).promise()
  }

  async restoreTableFromClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.restoreTableFromClusterSnapshot(...args).promise()
  }

  async resumeCluster(...args: any): Promise<any> {
  // undefined
    return this.client.resumeCluster(...args).promise()
  }

  async revokeClusterSecurityGroupIngress(...args: any): Promise<any> {
  // undefined
    return this.client.revokeClusterSecurityGroupIngress(...args).promise()
  }

  async revokeEndpointAccess(...args: any): Promise<any> {
  // undefined
    return this.client.revokeEndpointAccess(...args).promise()
  }

  async revokeSnapshotAccess(...args: any): Promise<any> {
  // undefined
    return this.client.revokeSnapshotAccess(...args).promise()
  }

  async rotateEncryptionKey(...args: any): Promise<any> {
  // undefined
    return this.client.rotateEncryptionKey(...args).promise()
  }

  async updatePartnerStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updatePartnerStatus(...args).promise()
  }
  
  static fromClient(client: AWSRedshift): ClientType {
    return new Redshift(client) as any;
  }
  
  static client(options?: AWSRedshift.Types.ClientConfiguration): ClientType {
    return new Redshift(new AWSRedshift(options)) as any;
  }
}  
