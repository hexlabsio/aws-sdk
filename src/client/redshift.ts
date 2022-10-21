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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRedshift> = AWSRedshift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Redshift {
  private constructor(private readonly client: AWSRedshift) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'redshift' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["describeClusterDbRevisions","describeClusterParameterGroups","describeClusterSecurityGroups","describeClusterSnapshots","describeClusterSubnetGroups","describeClusterTracks","describeClusterVersions","describeClusters","describeDataShares","describeDataSharesForConsumer","describeDataSharesForProducer","describeEndpointAccess","describeEndpointAuthorization","describeEventSubscriptions","describeEvents","describeHsmClientCertificates","describeHsmConfigurations","describeOrderableClusterOptions","describeReservedNodeExchangeStatus","describeReservedNodeOfferings","describeReservedNodes","describeScheduledActions","describeSnapshotCopyGrants","describeSnapshotSchedules","describeTableRestoreStatus","describeTags","describeUsageLimits"] as const;
  
  acceptReservedNodeExchange: (params: RawParamsFrom<'acceptReservedNodeExchange'>) => Promise<ReturnTypeFrom<'acceptReservedNodeExchange'>>  = async params => {
  // undefined
    return this.client.acceptReservedNodeExchange(params as any).promise();
  }

  addPartner: (params: RawParamsFrom<'addPartner'>) => Promise<ReturnTypeFrom<'addPartner'>>  = async params => {
  // undefined
    return this.client.addPartner(params as any).promise();
  }

  associateDataShareConsumer: (params: RawParamsFrom<'associateDataShareConsumer'>) => Promise<ReturnTypeFrom<'associateDataShareConsumer'>>  = async params => {
  // undefined
    return this.client.associateDataShareConsumer(params as any).promise();
  }

  authorizeClusterSecurityGroupIngress: (params: RawParamsFrom<'authorizeClusterSecurityGroupIngress'>) => Promise<ReturnTypeFrom<'authorizeClusterSecurityGroupIngress'>>  = async params => {
  // undefined
    return this.client.authorizeClusterSecurityGroupIngress(params as any).promise();
  }

  authorizeDataShare: (params: RawParamsFrom<'authorizeDataShare'>) => Promise<ReturnTypeFrom<'authorizeDataShare'>>  = async params => {
  // undefined
    return this.client.authorizeDataShare(params as any).promise();
  }

  authorizeEndpointAccess: (params: RawParamsFrom<'authorizeEndpointAccess'>) => Promise<ReturnTypeFrom<'authorizeEndpointAccess'>>  = async params => {
  // undefined
    return this.client.authorizeEndpointAccess(params as any).promise();
  }

  authorizeSnapshotAccess: (params: RawParamsFrom<'authorizeSnapshotAccess'>) => Promise<ReturnTypeFrom<'authorizeSnapshotAccess'>>  = async params => {
  // undefined
    return this.client.authorizeSnapshotAccess(params as any).promise();
  }

  batchDeleteClusterSnapshots: (params: RawParamsFrom<'batchDeleteClusterSnapshots'>) => Promise<ReturnTypeFrom<'batchDeleteClusterSnapshots'>>  = async params => {
  // undefined
    return this.client.batchDeleteClusterSnapshots(params as any).promise();
  }

  batchModifyClusterSnapshots: (params: RawParamsFrom<'batchModifyClusterSnapshots'>) => Promise<ReturnTypeFrom<'batchModifyClusterSnapshots'>>  = async params => {
  // undefined
    return this.client.batchModifyClusterSnapshots(params as any).promise();
  }

  cancelResize: (params: RawParamsFrom<'cancelResize'>) => Promise<ReturnTypeFrom<'cancelResize'>>  = async params => {
  // undefined
    return this.client.cancelResize(params as any).promise();
  }

  copyClusterSnapshot: (params: RawParamsFrom<'copyClusterSnapshot'>) => Promise<ReturnTypeFrom<'copyClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.copyClusterSnapshot(params as any).promise();
  }

  createAuthenticationProfile: (params: RawParamsFrom<'createAuthenticationProfile'>) => Promise<ReturnTypeFrom<'createAuthenticationProfile'>>  = async params => {
  // undefined
    return this.client.createAuthenticationProfile(params as any).promise();
  }

  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createClusterParameterGroup: (params: RawParamsFrom<'createClusterParameterGroup'>) => Promise<ReturnTypeFrom<'createClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.createClusterParameterGroup(params as any).promise();
  }

  createClusterSecurityGroup: (params: RawParamsFrom<'createClusterSecurityGroup'>) => Promise<ReturnTypeFrom<'createClusterSecurityGroup'>>  = async params => {
  // undefined
    return this.client.createClusterSecurityGroup(params as any).promise();
  }

  createClusterSnapshot: (params: RawParamsFrom<'createClusterSnapshot'>) => Promise<ReturnTypeFrom<'createClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.createClusterSnapshot(params as any).promise();
  }

  createClusterSubnetGroup: (params: RawParamsFrom<'createClusterSubnetGroup'>) => Promise<ReturnTypeFrom<'createClusterSubnetGroup'>>  = async params => {
  // undefined
    return this.client.createClusterSubnetGroup(params as any).promise();
  }

  createEndpointAccess: (params: RawParamsFrom<'createEndpointAccess'>) => Promise<ReturnTypeFrom<'createEndpointAccess'>>  = async params => {
  // undefined
    return this.client.createEndpointAccess(params as any).promise();
  }

  createEventSubscription: (params: RawParamsFrom<'createEventSubscription'>) => Promise<ReturnTypeFrom<'createEventSubscription'>>  = async params => {
  // undefined
    return this.client.createEventSubscription(params as any).promise();
  }

  createHsmClientCertificate: (params: RawParamsFrom<'createHsmClientCertificate'>) => Promise<ReturnTypeFrom<'createHsmClientCertificate'>>  = async params => {
  // undefined
    return this.client.createHsmClientCertificate(params as any).promise();
  }

  createHsmConfiguration: (params: RawParamsFrom<'createHsmConfiguration'>) => Promise<ReturnTypeFrom<'createHsmConfiguration'>>  = async params => {
  // undefined
    return this.client.createHsmConfiguration(params as any).promise();
  }

  createScheduledAction: (params: RawParamsFrom<'createScheduledAction'>) => Promise<ReturnTypeFrom<'createScheduledAction'>>  = async params => {
  // undefined
    return this.client.createScheduledAction(params as any).promise();
  }

  createSnapshotCopyGrant: (params: RawParamsFrom<'createSnapshotCopyGrant'>) => Promise<ReturnTypeFrom<'createSnapshotCopyGrant'>>  = async params => {
  // undefined
    return this.client.createSnapshotCopyGrant(params as any).promise();
  }

  createSnapshotSchedule: (params: RawParamsFrom<'createSnapshotSchedule'>) => Promise<ReturnTypeFrom<'createSnapshotSchedule'>>  = async params => {
  // undefined
    return this.client.createSnapshotSchedule(params as any).promise();
  }

  createTags: (params: RawParamsFrom<'createTags'>) => Promise<ReturnTypeFrom<'createTags'>>  = async params => {
  // undefined
    return this.client.createTags(params as any).promise();
  }

  createUsageLimit: (params: RawParamsFrom<'createUsageLimit'>) => Promise<ReturnTypeFrom<'createUsageLimit'>>  = async params => {
  // undefined
    return this.client.createUsageLimit(params as any).promise();
  }

  deauthorizeDataShare: (params: RawParamsFrom<'deauthorizeDataShare'>) => Promise<ReturnTypeFrom<'deauthorizeDataShare'>>  = async params => {
  // undefined
    return this.client.deauthorizeDataShare(params as any).promise();
  }

  deleteAuthenticationProfile: (params: RawParamsFrom<'deleteAuthenticationProfile'>) => Promise<ReturnTypeFrom<'deleteAuthenticationProfile'>>  = async params => {
  // undefined
    return this.client.deleteAuthenticationProfile(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteClusterParameterGroup: (params: RawParamsFrom<'deleteClusterParameterGroup'>) => Promise<ReturnTypeFrom<'deleteClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.deleteClusterParameterGroup(params as any).promise();
  }

  deleteClusterSecurityGroup: (params: RawParamsFrom<'deleteClusterSecurityGroup'>) => Promise<ReturnTypeFrom<'deleteClusterSecurityGroup'>>  = async params => {
  // undefined
    return this.client.deleteClusterSecurityGroup(params as any).promise();
  }

  deleteClusterSnapshot: (params: RawParamsFrom<'deleteClusterSnapshot'>) => Promise<ReturnTypeFrom<'deleteClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteClusterSnapshot(params as any).promise();
  }

  deleteClusterSubnetGroup: (params: RawParamsFrom<'deleteClusterSubnetGroup'>) => Promise<ReturnTypeFrom<'deleteClusterSubnetGroup'>>  = async params => {
  // undefined
    return this.client.deleteClusterSubnetGroup(params as any).promise();
  }

  deleteEndpointAccess: (params: RawParamsFrom<'deleteEndpointAccess'>) => Promise<ReturnTypeFrom<'deleteEndpointAccess'>>  = async params => {
  // undefined
    return this.client.deleteEndpointAccess(params as any).promise();
  }

  deleteEventSubscription: (params: RawParamsFrom<'deleteEventSubscription'>) => Promise<ReturnTypeFrom<'deleteEventSubscription'>>  = async params => {
  // undefined
    return this.client.deleteEventSubscription(params as any).promise();
  }

  deleteHsmClientCertificate: (params: RawParamsFrom<'deleteHsmClientCertificate'>) => Promise<ReturnTypeFrom<'deleteHsmClientCertificate'>>  = async params => {
  // undefined
    return this.client.deleteHsmClientCertificate(params as any).promise();
  }

  deleteHsmConfiguration: (params: RawParamsFrom<'deleteHsmConfiguration'>) => Promise<ReturnTypeFrom<'deleteHsmConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteHsmConfiguration(params as any).promise();
  }

  deletePartner: (params: RawParamsFrom<'deletePartner'>) => Promise<ReturnTypeFrom<'deletePartner'>>  = async params => {
  // undefined
    return this.client.deletePartner(params as any).promise();
  }

  deleteScheduledAction: (params: RawParamsFrom<'deleteScheduledAction'>) => Promise<ReturnTypeFrom<'deleteScheduledAction'>>  = async params => {
  // undefined
    return this.client.deleteScheduledAction(params as any).promise();
  }

  deleteSnapshotCopyGrant: (params: RawParamsFrom<'deleteSnapshotCopyGrant'>) => Promise<ReturnTypeFrom<'deleteSnapshotCopyGrant'>>  = async params => {
  // undefined
    return this.client.deleteSnapshotCopyGrant(params as any).promise();
  }

  deleteSnapshotSchedule: (params: RawParamsFrom<'deleteSnapshotSchedule'>) => Promise<ReturnTypeFrom<'deleteSnapshotSchedule'>>  = async params => {
  // undefined
    return this.client.deleteSnapshotSchedule(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  deleteUsageLimit: (params: RawParamsFrom<'deleteUsageLimit'>) => Promise<ReturnTypeFrom<'deleteUsageLimit'>>  = async params => {
  // undefined
    return this.client.deleteUsageLimit(params as any).promise();
  }

  describeAccountAttributes: (params: RawParamsFrom<'describeAccountAttributes'>) => Promise<ReturnTypeFrom<'describeAccountAttributes'>>  = async params => {
  // undefined
    return this.client.describeAccountAttributes(params as any).promise();
  }

  describeAuthenticationProfiles: (params: RawParamsFrom<'describeAuthenticationProfiles'>) => Promise<ReturnTypeFrom<'describeAuthenticationProfiles'>>  = async params => {
  // undefined
    return this.client.describeAuthenticationProfiles(params as any).promise();
  }

  async describeClusterDbRevisions(params: { [K in keyof ParamsFrom<'describeClusterDbRevisions', { next?: string, limit?: number }>]: ParamsFrom<'describeClusterDbRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusterDbRevisions'>]-?: ReturnTypeFrom<'describeClusterDbRevisions'>[K]}['ClusterDbRevisions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ClusterDbRevisions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterDbRevisions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusterDbRevisions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClusterDbRevisions ?? []) ? (result.ClusterDbRevisions ?? []) : [result.ClusterDbRevisions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterParameterGroups(params: { [K in keyof ParamsFrom<'describeClusterParameterGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeClusterParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusterParameterGroups'>]-?: ReturnTypeFrom<'describeClusterParameterGroups'>[K]}['ParameterGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ParameterGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterParameterGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusterParameterGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ParameterGroups ?? []) ? (result.ParameterGroups ?? []) : [result.ParameterGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterParameters(params: { [K in keyof ParamsFrom<'describeClusterParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeClusterParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusterParameters'>]-?: ReturnTypeFrom<'describeClusterParameters'>[K]}['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusterParameters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Parameters ?? []) ? (result.Parameters ?? []) : [result.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterSecurityGroups(params: { [K in keyof ParamsFrom<'describeClusterSecurityGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeClusterSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusterSecurityGroups'>]-?: ReturnTypeFrom<'describeClusterSecurityGroups'>[K]}['ClusterSecurityGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ClusterSecurityGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterSecurityGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusterSecurityGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClusterSecurityGroups ?? []) ? (result.ClusterSecurityGroups ?? []) : [result.ClusterSecurityGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterSnapshots(params: { [K in keyof ParamsFrom<'describeClusterSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeClusterSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusterSnapshots'>]-?: ReturnTypeFrom<'describeClusterSnapshots'>[K]}['Snapshots'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusterSnapshots' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Snapshots ?? []) ? (result.Snapshots ?? []) : [result.Snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterSubnetGroups(params: { [K in keyof ParamsFrom<'describeClusterSubnetGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeClusterSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusterSubnetGroups'>]-?: ReturnTypeFrom<'describeClusterSubnetGroups'>[K]}['ClusterSubnetGroups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ClusterSubnetGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterSubnetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusterSubnetGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClusterSubnetGroups ?? []) ? (result.ClusterSubnetGroups ?? []) : [result.ClusterSubnetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterTracks(params: { [K in keyof ParamsFrom<'describeClusterTracks', { next?: string, limit?: number }>]: ParamsFrom<'describeClusterTracks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusterTracks'>]-?: ReturnTypeFrom<'describeClusterTracks'>[K]}['MaintenanceTracks'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"MaintenanceTracks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterTracks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusterTracks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.MaintenanceTracks ?? []) ? (result.MaintenanceTracks ?? []) : [result.MaintenanceTracks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusterVersions(params: { [K in keyof ParamsFrom<'describeClusterVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeClusterVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusterVersions'>]-?: ReturnTypeFrom<'describeClusterVersions'>[K]}['ClusterVersions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ClusterVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusterVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusterVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClusterVersions ?? []) ? (result.ClusterVersions ?? []) : [result.ClusterVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusters(params: { [K in keyof ParamsFrom<'describeClusters', { next?: string, limit?: number }>]: ParamsFrom<'describeClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusters'>]-?: ReturnTypeFrom<'describeClusters'>[K]}['Clusters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"Clusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeClusters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Clusters ?? []) ? (result.Clusters ?? []) : [result.Clusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDataShares(params: { [K in keyof ParamsFrom<'describeDataShares', { next?: string, limit?: number }>]: ParamsFrom<'describeDataShares', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDataShares'>]-?: ReturnTypeFrom<'describeDataShares'>[K]}['DataShares'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DataShares"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDataShares({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDataShares' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DataShares ?? []) ? (result.DataShares ?? []) : [result.DataShares]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDataSharesForConsumer(params: { [K in keyof ParamsFrom<'describeDataSharesForConsumer', { next?: string, limit?: number }>]: ParamsFrom<'describeDataSharesForConsumer', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDataSharesForConsumer'>]-?: ReturnTypeFrom<'describeDataSharesForConsumer'>[K]}['DataShares'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DataShares"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDataSharesForConsumer({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDataSharesForConsumer' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DataShares ?? []) ? (result.DataShares ?? []) : [result.DataShares]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDataSharesForProducer(params: { [K in keyof ParamsFrom<'describeDataSharesForProducer', { next?: string, limit?: number }>]: ParamsFrom<'describeDataSharesForProducer', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDataSharesForProducer'>]-?: ReturnTypeFrom<'describeDataSharesForProducer'>[K]}['DataShares'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"DataShares"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDataSharesForProducer({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeDataSharesForProducer' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DataShares ?? []) ? (result.DataShares ?? []) : [result.DataShares]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDefaultClusterParameters(params: { [K in keyof ParamsFrom<'describeDefaultClusterParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeDefaultClusterParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDefaultClusterParameters'>]-?: ReturnTypeFrom<'describeDefaultClusterParameters'>[K]}['DefaultClusterParameters']['Parameters'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"DefaultClusterParameters.Marker","resultKey":"DefaultClusterParameters.Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeDefaultClusterParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.DefaultClusterParameters?.Marker ? Buffer.from(JSON.stringify({ token: result.DefaultClusterParameters?.Marker, operation: 'describeDefaultClusterParameters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DefaultClusterParameters?.Parameters ?? []) ? (result.DefaultClusterParameters?.Parameters ?? []) : [result.DefaultClusterParameters?.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEndpointAccess(params: { [K in keyof ParamsFrom<'describeEndpointAccess', { next?: string, limit?: number }>]: ParamsFrom<'describeEndpointAccess', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEndpointAccess'>]-?: ReturnTypeFrom<'describeEndpointAccess'>[K]}['EndpointAccessList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"EndpointAccessList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEndpointAccess({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeEndpointAccess' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EndpointAccessList ?? []) ? (result.EndpointAccessList ?? []) : [result.EndpointAccessList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEndpointAuthorization(params: { [K in keyof ParamsFrom<'describeEndpointAuthorization', { next?: string, limit?: number }>]: ParamsFrom<'describeEndpointAuthorization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEndpointAuthorization'>]-?: ReturnTypeFrom<'describeEndpointAuthorization'>[K]}['EndpointAuthorizationList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"EndpointAuthorizationList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEndpointAuthorization({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeEndpointAuthorization' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EndpointAuthorizationList ?? []) ? (result.EndpointAuthorizationList ?? []) : [result.EndpointAuthorizationList]) as any;
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

  async describeHsmClientCertificates(params: { [K in keyof ParamsFrom<'describeHsmClientCertificates', { next?: string, limit?: number }>]: ParamsFrom<'describeHsmClientCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeHsmClientCertificates'>]-?: ReturnTypeFrom<'describeHsmClientCertificates'>[K]}['HsmClientCertificates'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"HsmClientCertificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeHsmClientCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeHsmClientCertificates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.HsmClientCertificates ?? []) ? (result.HsmClientCertificates ?? []) : [result.HsmClientCertificates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHsmConfigurations(params: { [K in keyof ParamsFrom<'describeHsmConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'describeHsmConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeHsmConfigurations'>]-?: ReturnTypeFrom<'describeHsmConfigurations'>[K]}['HsmConfigurations'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"HsmConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeHsmConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeHsmConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.HsmConfigurations ?? []) ? (result.HsmConfigurations ?? []) : [result.HsmConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeLoggingStatus: (params: RawParamsFrom<'describeLoggingStatus'>) => Promise<ReturnTypeFrom<'describeLoggingStatus'>>  = async params => {
  // undefined
    return this.client.describeLoggingStatus(params as any).promise();
  }

  async describeNodeConfigurationOptions(params: { [K in keyof ParamsFrom<'describeNodeConfigurationOptions', { next?: string, limit?: number }>]: ParamsFrom<'describeNodeConfigurationOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNodeConfigurationOptions'>]-?: ReturnTypeFrom<'describeNodeConfigurationOptions'>[K]}['NodeConfigurationOptionList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"NodeConfigurationOptionList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeNodeConfigurationOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeNodeConfigurationOptions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NodeConfigurationOptionList ?? []) ? (result.NodeConfigurationOptionList ?? []) : [result.NodeConfigurationOptionList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrderableClusterOptions(params: { [K in keyof ParamsFrom<'describeOrderableClusterOptions', { next?: string, limit?: number }>]: ParamsFrom<'describeOrderableClusterOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOrderableClusterOptions'>]-?: ReturnTypeFrom<'describeOrderableClusterOptions'>[K]}['OrderableClusterOptions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"OrderableClusterOptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeOrderableClusterOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeOrderableClusterOptions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OrderableClusterOptions ?? []) ? (result.OrderableClusterOptions ?? []) : [result.OrderableClusterOptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describePartners: (params: RawParamsFrom<'describePartners'>) => Promise<ReturnTypeFrom<'describePartners'>>  = async params => {
  // undefined
    return this.client.describePartners(params as any).promise();
  }

  async describeReservedNodeExchangeStatus(params: { [K in keyof ParamsFrom<'describeReservedNodeExchangeStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedNodeExchangeStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedNodeExchangeStatus'>]-?: ReturnTypeFrom<'describeReservedNodeExchangeStatus'>[K]}['ReservedNodeExchangeStatusDetails'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodeExchangeStatusDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedNodeExchangeStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeReservedNodeExchangeStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedNodeExchangeStatusDetails ?? []) ? (result.ReservedNodeExchangeStatusDetails ?? []) : [result.ReservedNodeExchangeStatusDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedNodeOfferings(params: { [K in keyof ParamsFrom<'describeReservedNodeOfferings', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedNodeOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedNodeOfferings'>]-?: ReturnTypeFrom<'describeReservedNodeOfferings'>[K]}['ReservedNodeOfferings'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodeOfferings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedNodeOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeReservedNodeOfferings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedNodeOfferings ?? []) ? (result.ReservedNodeOfferings ?? []) : [result.ReservedNodeOfferings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedNodes(params: { [K in keyof ParamsFrom<'describeReservedNodes', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedNodes'>]-?: ReturnTypeFrom<'describeReservedNodes'>[K]}['ReservedNodes'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeReservedNodes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeReservedNodes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedNodes ?? []) ? (result.ReservedNodes ?? []) : [result.ReservedNodes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeResize: (params: RawParamsFrom<'describeResize'>) => Promise<ReturnTypeFrom<'describeResize'>>  = async params => {
  // undefined
    return this.client.describeResize(params as any).promise();
  }

  async describeScheduledActions(params: { [K in keyof ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>]: ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScheduledActions'>]-?: ReturnTypeFrom<'describeScheduledActions'>[K]}['ScheduledActions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ScheduledActions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeScheduledActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeScheduledActions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScheduledActions ?? []) ? (result.ScheduledActions ?? []) : [result.ScheduledActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshotCopyGrants(params: { [K in keyof ParamsFrom<'describeSnapshotCopyGrants', { next?: string, limit?: number }>]: ParamsFrom<'describeSnapshotCopyGrants', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSnapshotCopyGrants'>]-?: ReturnTypeFrom<'describeSnapshotCopyGrants'>[K]}['SnapshotCopyGrants'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"SnapshotCopyGrants"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeSnapshotCopyGrants({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeSnapshotCopyGrants' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SnapshotCopyGrants ?? []) ? (result.SnapshotCopyGrants ?? []) : [result.SnapshotCopyGrants]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshotSchedules(params: { [K in keyof ParamsFrom<'describeSnapshotSchedules', { next?: string, limit?: number }>]: ParamsFrom<'describeSnapshotSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSnapshotSchedules'>]-?: ReturnTypeFrom<'describeSnapshotSchedules'>[K]}['SnapshotSchedules'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"SnapshotSchedules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeSnapshotSchedules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeSnapshotSchedules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SnapshotSchedules ?? []) ? (result.SnapshotSchedules ?? []) : [result.SnapshotSchedules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeStorage: (params: RawParamsFrom<'describeStorage'>) => Promise<ReturnTypeFrom<'describeStorage'>>  = async params => {
  // undefined
    return this.client.describeStorage(params as any).promise();
  }

  async describeTableRestoreStatus(params: { [K in keyof ParamsFrom<'describeTableRestoreStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeTableRestoreStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTableRestoreStatus'>]-?: ReturnTypeFrom<'describeTableRestoreStatus'>[K]}['TableRestoreStatusDetails'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"TableRestoreStatusDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeTableRestoreStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeTableRestoreStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TableRestoreStatusDetails ?? []) ? (result.TableRestoreStatusDetails ?? []) : [result.TableRestoreStatusDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTags(params: { [K in keyof ParamsFrom<'describeTags', { next?: string, limit?: number }>]: ParamsFrom<'describeTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['TaggedResources'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"TaggedResources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeTags' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TaggedResources ?? []) ? (result.TaggedResources ?? []) : [result.TaggedResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUsageLimits(params: { [K in keyof ParamsFrom<'describeUsageLimits', { next?: string, limit?: number }>]: ParamsFrom<'describeUsageLimits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeUsageLimits'>]-?: ReturnTypeFrom<'describeUsageLimits'>[K]}['UsageLimits'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"UsageLimits"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeUsageLimits({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeUsageLimits' })).toString('base64') : undefined;
    const member = (Array.isArray(result.UsageLimits ?? []) ? (result.UsageLimits ?? []) : [result.UsageLimits]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disableLogging: (params: RawParamsFrom<'disableLogging'>) => Promise<ReturnTypeFrom<'disableLogging'>>  = async params => {
  // undefined
    return this.client.disableLogging(params as any).promise();
  }

  disableSnapshotCopy: (params: RawParamsFrom<'disableSnapshotCopy'>) => Promise<ReturnTypeFrom<'disableSnapshotCopy'>>  = async params => {
  // undefined
    return this.client.disableSnapshotCopy(params as any).promise();
  }

  disassociateDataShareConsumer: (params: RawParamsFrom<'disassociateDataShareConsumer'>) => Promise<ReturnTypeFrom<'disassociateDataShareConsumer'>>  = async params => {
  // undefined
    return this.client.disassociateDataShareConsumer(params as any).promise();
  }

  enableLogging: (params: RawParamsFrom<'enableLogging'>) => Promise<ReturnTypeFrom<'enableLogging'>>  = async params => {
  // undefined
    return this.client.enableLogging(params as any).promise();
  }

  enableSnapshotCopy: (params: RawParamsFrom<'enableSnapshotCopy'>) => Promise<ReturnTypeFrom<'enableSnapshotCopy'>>  = async params => {
  // undefined
    return this.client.enableSnapshotCopy(params as any).promise();
  }

  getClusterCredentials: (params: RawParamsFrom<'getClusterCredentials'>) => Promise<ReturnTypeFrom<'getClusterCredentials'>>  = async params => {
  // undefined
    return this.client.getClusterCredentials(params as any).promise();
  }

  getClusterCredentialsWithIAM: (params: RawParamsFrom<'getClusterCredentialsWithIAM'>) => Promise<ReturnTypeFrom<'getClusterCredentialsWithIAM'>>  = async params => {
  // undefined
    return this.client.getClusterCredentialsWithIAM(params as any).promise();
  }

  async getReservedNodeExchangeConfigurationOptions(params: { [K in keyof ParamsFrom<'getReservedNodeExchangeConfigurationOptions', { next?: string, limit?: number }>]: ParamsFrom<'getReservedNodeExchangeConfigurationOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getReservedNodeExchangeConfigurationOptions'>]-?: ReturnTypeFrom<'getReservedNodeExchangeConfigurationOptions'>[K]}['ReservedNodeConfigurationOptionList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodeConfigurationOptionList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.getReservedNodeExchangeConfigurationOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'getReservedNodeExchangeConfigurationOptions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedNodeConfigurationOptionList ?? []) ? (result.ReservedNodeConfigurationOptionList ?? []) : [result.ReservedNodeConfigurationOptionList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getReservedNodeExchangeOfferings(params: { [K in keyof ParamsFrom<'getReservedNodeExchangeOfferings', { next?: string, limit?: number }>]: ParamsFrom<'getReservedNodeExchangeOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getReservedNodeExchangeOfferings'>]-?: ReturnTypeFrom<'getReservedNodeExchangeOfferings'>[K]}['ReservedNodeOfferings'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker","resultKey":"ReservedNodeOfferings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.getReservedNodeExchangeOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'getReservedNodeExchangeOfferings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedNodeOfferings ?? []) ? (result.ReservedNodeOfferings ?? []) : [result.ReservedNodeOfferings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  modifyAquaConfiguration: (params: RawParamsFrom<'modifyAquaConfiguration'>) => Promise<ReturnTypeFrom<'modifyAquaConfiguration'>>  = async params => {
  // undefined
    return this.client.modifyAquaConfiguration(params as any).promise();
  }

  modifyAuthenticationProfile: (params: RawParamsFrom<'modifyAuthenticationProfile'>) => Promise<ReturnTypeFrom<'modifyAuthenticationProfile'>>  = async params => {
  // undefined
    return this.client.modifyAuthenticationProfile(params as any).promise();
  }

  modifyCluster: (params: RawParamsFrom<'modifyCluster'>) => Promise<ReturnTypeFrom<'modifyCluster'>>  = async params => {
  // undefined
    return this.client.modifyCluster(params as any).promise();
  }

  modifyClusterDbRevision: (params: RawParamsFrom<'modifyClusterDbRevision'>) => Promise<ReturnTypeFrom<'modifyClusterDbRevision'>>  = async params => {
  // undefined
    return this.client.modifyClusterDbRevision(params as any).promise();
  }

  modifyClusterIamRoles: (params: RawParamsFrom<'modifyClusterIamRoles'>) => Promise<ReturnTypeFrom<'modifyClusterIamRoles'>>  = async params => {
  // undefined
    return this.client.modifyClusterIamRoles(params as any).promise();
  }

  modifyClusterMaintenance: (params: RawParamsFrom<'modifyClusterMaintenance'>) => Promise<ReturnTypeFrom<'modifyClusterMaintenance'>>  = async params => {
  // undefined
    return this.client.modifyClusterMaintenance(params as any).promise();
  }

  modifyClusterParameterGroup: (params: RawParamsFrom<'modifyClusterParameterGroup'>) => Promise<ReturnTypeFrom<'modifyClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.modifyClusterParameterGroup(params as any).promise();
  }

  modifyClusterSnapshot: (params: RawParamsFrom<'modifyClusterSnapshot'>) => Promise<ReturnTypeFrom<'modifyClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.modifyClusterSnapshot(params as any).promise();
  }

  modifyClusterSnapshotSchedule: (params: RawParamsFrom<'modifyClusterSnapshotSchedule'>) => Promise<ReturnTypeFrom<'modifyClusterSnapshotSchedule'>>  = async params => {
  // undefined
    return this.client.modifyClusterSnapshotSchedule(params as any).promise();
  }

  modifyClusterSubnetGroup: (params: RawParamsFrom<'modifyClusterSubnetGroup'>) => Promise<ReturnTypeFrom<'modifyClusterSubnetGroup'>>  = async params => {
  // undefined
    return this.client.modifyClusterSubnetGroup(params as any).promise();
  }

  modifyEndpointAccess: (params: RawParamsFrom<'modifyEndpointAccess'>) => Promise<ReturnTypeFrom<'modifyEndpointAccess'>>  = async params => {
  // undefined
    return this.client.modifyEndpointAccess(params as any).promise();
  }

  modifyEventSubscription: (params: RawParamsFrom<'modifyEventSubscription'>) => Promise<ReturnTypeFrom<'modifyEventSubscription'>>  = async params => {
  // undefined
    return this.client.modifyEventSubscription(params as any).promise();
  }

  modifyScheduledAction: (params: RawParamsFrom<'modifyScheduledAction'>) => Promise<ReturnTypeFrom<'modifyScheduledAction'>>  = async params => {
  // undefined
    return this.client.modifyScheduledAction(params as any).promise();
  }

  modifySnapshotCopyRetentionPeriod: (params: RawParamsFrom<'modifySnapshotCopyRetentionPeriod'>) => Promise<ReturnTypeFrom<'modifySnapshotCopyRetentionPeriod'>>  = async params => {
  // undefined
    return this.client.modifySnapshotCopyRetentionPeriod(params as any).promise();
  }

  modifySnapshotSchedule: (params: RawParamsFrom<'modifySnapshotSchedule'>) => Promise<ReturnTypeFrom<'modifySnapshotSchedule'>>  = async params => {
  // undefined
    return this.client.modifySnapshotSchedule(params as any).promise();
  }

  modifyUsageLimit: (params: RawParamsFrom<'modifyUsageLimit'>) => Promise<ReturnTypeFrom<'modifyUsageLimit'>>  = async params => {
  // undefined
    return this.client.modifyUsageLimit(params as any).promise();
  }

  pauseCluster: (params: RawParamsFrom<'pauseCluster'>) => Promise<ReturnTypeFrom<'pauseCluster'>>  = async params => {
  // undefined
    return this.client.pauseCluster(params as any).promise();
  }

  purchaseReservedNodeOffering: (params: RawParamsFrom<'purchaseReservedNodeOffering'>) => Promise<ReturnTypeFrom<'purchaseReservedNodeOffering'>>  = async params => {
  // undefined
    return this.client.purchaseReservedNodeOffering(params as any).promise();
  }

  rebootCluster: (params: RawParamsFrom<'rebootCluster'>) => Promise<ReturnTypeFrom<'rebootCluster'>>  = async params => {
  // undefined
    return this.client.rebootCluster(params as any).promise();
  }

  rejectDataShare: (params: RawParamsFrom<'rejectDataShare'>) => Promise<ReturnTypeFrom<'rejectDataShare'>>  = async params => {
  // undefined
    return this.client.rejectDataShare(params as any).promise();
  }

  resetClusterParameterGroup: (params: RawParamsFrom<'resetClusterParameterGroup'>) => Promise<ReturnTypeFrom<'resetClusterParameterGroup'>>  = async params => {
  // undefined
    return this.client.resetClusterParameterGroup(params as any).promise();
  }

  resizeCluster: (params: RawParamsFrom<'resizeCluster'>) => Promise<ReturnTypeFrom<'resizeCluster'>>  = async params => {
  // undefined
    return this.client.resizeCluster(params as any).promise();
  }

  restoreFromClusterSnapshot: (params: RawParamsFrom<'restoreFromClusterSnapshot'>) => Promise<ReturnTypeFrom<'restoreFromClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreFromClusterSnapshot(params as any).promise();
  }

  restoreTableFromClusterSnapshot: (params: RawParamsFrom<'restoreTableFromClusterSnapshot'>) => Promise<ReturnTypeFrom<'restoreTableFromClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreTableFromClusterSnapshot(params as any).promise();
  }

  resumeCluster: (params: RawParamsFrom<'resumeCluster'>) => Promise<ReturnTypeFrom<'resumeCluster'>>  = async params => {
  // undefined
    return this.client.resumeCluster(params as any).promise();
  }

  revokeClusterSecurityGroupIngress: (params: RawParamsFrom<'revokeClusterSecurityGroupIngress'>) => Promise<ReturnTypeFrom<'revokeClusterSecurityGroupIngress'>>  = async params => {
  // undefined
    return this.client.revokeClusterSecurityGroupIngress(params as any).promise();
  }

  revokeEndpointAccess: (params: RawParamsFrom<'revokeEndpointAccess'>) => Promise<ReturnTypeFrom<'revokeEndpointAccess'>>  = async params => {
  // undefined
    return this.client.revokeEndpointAccess(params as any).promise();
  }

  revokeSnapshotAccess: (params: RawParamsFrom<'revokeSnapshotAccess'>) => Promise<ReturnTypeFrom<'revokeSnapshotAccess'>>  = async params => {
  // undefined
    return this.client.revokeSnapshotAccess(params as any).promise();
  }

  rotateEncryptionKey: (params: RawParamsFrom<'rotateEncryptionKey'>) => Promise<ReturnTypeFrom<'rotateEncryptionKey'>>  = async params => {
  // undefined
    return this.client.rotateEncryptionKey(params as any).promise();
  }

  updatePartnerStatus: (params: RawParamsFrom<'updatePartnerStatus'>) => Promise<ReturnTypeFrom<'updatePartnerStatus'>>  = async params => {
  // undefined
    return this.client.updatePartnerStatus(params as any).promise();
  }
  
  static fromClient(client: AWSRedshift): Redshift {
    return new Redshift(client) as any;
  }
  
  static client(options?: AWSRedshift.Types.ClientConfiguration): Redshift {
    return new Redshift(new AWSRedshift(options)) as any;
  }
}  
