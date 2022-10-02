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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'rds';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["describeCertificates","describeDBClusterParameterGroups","describeDBClusterSnapshots","describeDBClusters","describeDBEngineVersions","describeDBInstances","describeDBSubnetGroups","describeEventSubscriptions","describeEvents","describeGlobalClusters","describePendingMaintenanceActions"];
    
  addSourceIdentifierToSubscription: FunctionTypeFrom<'addSourceIdentifierToSubscription'>;

  addTagsToResource: FunctionTypeFrom<'addTagsToResource'>;

  applyPendingMaintenanceAction: FunctionTypeFrom<'applyPendingMaintenanceAction'>;

  copyDBClusterParameterGroup: FunctionTypeFrom<'copyDBClusterParameterGroup'>;

  copyDBClusterSnapshot: FunctionTypeFrom<'copyDBClusterSnapshot'>;

  createDBCluster: FunctionTypeFrom<'createDBCluster'>;

  createDBClusterParameterGroup: FunctionTypeFrom<'createDBClusterParameterGroup'>;

  createDBClusterSnapshot: FunctionTypeFrom<'createDBClusterSnapshot'>;

  createDBInstance: FunctionTypeFrom<'createDBInstance'>;

  createDBSubnetGroup: FunctionTypeFrom<'createDBSubnetGroup'>;

  createEventSubscription: FunctionTypeFrom<'createEventSubscription'>;

  createGlobalCluster: FunctionTypeFrom<'createGlobalCluster'>;

  deleteDBCluster: FunctionTypeFrom<'deleteDBCluster'>;

  deleteDBClusterParameterGroup: FunctionTypeFrom<'deleteDBClusterParameterGroup'>;

  deleteDBClusterSnapshot: FunctionTypeFrom<'deleteDBClusterSnapshot'>;

  deleteDBInstance: FunctionTypeFrom<'deleteDBInstance'>;

  deleteDBSubnetGroup: FunctionTypeFrom<'deleteDBSubnetGroup'>;

  deleteEventSubscription: FunctionTypeFrom<'deleteEventSubscription'>;

  deleteGlobalCluster: FunctionTypeFrom<'deleteGlobalCluster'>;

  describeCertificates(params: { [K in keyof Omit<ParamsFrom<'describeCertificates', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCertificates'>]-?: ReturnTypeFrom<'describeCertificates'>[K]}['Certificates'] }>
  describeCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCertificates'>]-?: ReturnTypeFrom<'describeCertificates'>[K]}['Certificates'] }>;

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

  describeDBInstances(params: { [K in keyof Omit<ParamsFrom<'describeDBInstances', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBInstances'>]-?: ReturnTypeFrom<'describeDBInstances'>[K]}['DBInstances'] }>
  describeDBInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBInstances'>]-?: ReturnTypeFrom<'describeDBInstances'>[K]}['DBInstances'] }>;

  describeDBSubnetGroups(params: { [K in keyof Omit<ParamsFrom<'describeDBSubnetGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeDBSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBSubnetGroups'>]-?: ReturnTypeFrom<'describeDBSubnetGroups'>[K]}['DBSubnetGroups'] }>
  describeDBSubnetGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDBSubnetGroups'>]-?: ReturnTypeFrom<'describeDBSubnetGroups'>[K]}['DBSubnetGroups'] }>;

  describeEngineDefaultClusterParameters: FunctionTypeFrom<'describeEngineDefaultClusterParameters'>;

  describeEventCategories: FunctionTypeFrom<'describeEventCategories'>;

  describeEventSubscriptions(params: { [K in keyof Omit<ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEventSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventSubscriptions'>]-?: ReturnTypeFrom<'describeEventSubscriptions'>[K]}['EventSubscriptionsList'] }>
  describeEventSubscriptions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventSubscriptions'>]-?: ReturnTypeFrom<'describeEventSubscriptions'>[K]}['EventSubscriptionsList'] }>;

  describeEvents(params: { [K in keyof Omit<ParamsFrom<'describeEvents', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>
  describeEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>;

  describeGlobalClusters(params: { [K in keyof Omit<ParamsFrom<'describeGlobalClusters', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeGlobalClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGlobalClusters'>]-?: ReturnTypeFrom<'describeGlobalClusters'>[K]}['GlobalClusters'] }>
  describeGlobalClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGlobalClusters'>]-?: ReturnTypeFrom<'describeGlobalClusters'>[K]}['GlobalClusters'] }>;

  describeOrderableDBInstanceOptions(params: { [K in keyof Omit<ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describeOrderableDBInstanceOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrderableDBInstanceOptions'>]-?: ReturnTypeFrom<'describeOrderableDBInstanceOptions'>[K]}['OrderableDBInstanceOptions'] }>
  ;

  describePendingMaintenanceActions(params: { [K in keyof Omit<ParamsFrom<'describePendingMaintenanceActions', { next?: string, limit?: number }>, 'Marker' | 'MaxRecords'>]: ParamsFrom<'describePendingMaintenanceActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePendingMaintenanceActions'>]-?: ReturnTypeFrom<'describePendingMaintenanceActions'>[K]}['PendingMaintenanceActions'] }>
  describePendingMaintenanceActions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePendingMaintenanceActions'>]-?: ReturnTypeFrom<'describePendingMaintenanceActions'>[K]}['PendingMaintenanceActions'] }>;

  failoverDBCluster: FunctionTypeFrom<'failoverDBCluster'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  modifyDBCluster: FunctionTypeFrom<'modifyDBCluster'>;

  modifyDBClusterParameterGroup: FunctionTypeFrom<'modifyDBClusterParameterGroup'>;

  modifyDBClusterSnapshotAttribute: FunctionTypeFrom<'modifyDBClusterSnapshotAttribute'>;

  modifyDBInstance: FunctionTypeFrom<'modifyDBInstance'>;

  modifyDBSubnetGroup: FunctionTypeFrom<'modifyDBSubnetGroup'>;

  modifyEventSubscription: FunctionTypeFrom<'modifyEventSubscription'>;

  modifyGlobalCluster: FunctionTypeFrom<'modifyGlobalCluster'>;

  rebootDBInstance: FunctionTypeFrom<'rebootDBInstance'>;

  removeFromGlobalCluster: FunctionTypeFrom<'removeFromGlobalCluster'>;

  removeSourceIdentifierFromSubscription: FunctionTypeFrom<'removeSourceIdentifierFromSubscription'>;

  removeTagsFromResource: FunctionTypeFrom<'removeTagsFromResource'>;

  resetDBClusterParameterGroup: FunctionTypeFrom<'resetDBClusterParameterGroup'>;

  restoreDBClusterFromSnapshot: FunctionTypeFrom<'restoreDBClusterFromSnapshot'>;

  restoreDBClusterToPointInTime: FunctionTypeFrom<'restoreDBClusterToPointInTime'>;

  startDBCluster: FunctionTypeFrom<'startDBCluster'>;

  stopDBCluster: FunctionTypeFrom<'stopDBCluster'>
}
 
export class DocDB implements ClientType {
  private constructor(private readonly client: AWSDocDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rds';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["describeCertificates","describeDBClusterParameterGroups","describeDBClusterSnapshots","describeDBClusters","describeDBEngineVersions","describeDBInstances","describeDBSubnetGroups","describeEventSubscriptions","describeEvents","describeGlobalClusters","describePendingMaintenanceActions"] as const;
  
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

  async copyDBClusterParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.copyDBClusterParameterGroup(...args).promise()
  }

  async copyDBClusterSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.copyDBClusterSnapshot(...args).promise()
  }

  async createDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createDBCluster(...args).promise()
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

  async deleteDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDBCluster(...args).promise()
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

  async failoverDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.failoverDBCluster(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // {"resultKey":"TagList"}
    return this.client.listTagsForResource(...args).promise()
  }

  async modifyDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDBCluster(...args).promise()
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

  async rebootDBInstance(...args: any): Promise<any> {
  // undefined
    return this.client.rebootDBInstance(...args).promise()
  }

  async removeFromGlobalCluster(...args: any): Promise<any> {
  // undefined
    return this.client.removeFromGlobalCluster(...args).promise()
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

  async restoreDBClusterFromSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDBClusterFromSnapshot(...args).promise()
  }

  async restoreDBClusterToPointInTime(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDBClusterToPointInTime(...args).promise()
  }

  async startDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.startDBCluster(...args).promise()
  }

  async stopDBCluster(...args: any): Promise<any> {
  // undefined
    return this.client.stopDBCluster(...args).promise()
  }
  
  static fromClient(client: AWSDocDB): ClientType {
    return new DocDB(client) as any;
  }
  
  static client(options?: AWSDocDB.Types.ClientConfiguration): ClientType {
    return new DocDB(new AWSDocDB(options)) as any;
  }
}  
