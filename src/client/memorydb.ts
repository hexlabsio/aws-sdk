import { Request, MemoryDB as AWSMemoryDB } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMemoryDB> = AWSMemoryDB[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMemoryDB> = AWSMemoryDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMemoryDB[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMemoryDB, Extras> = AWSMemoryDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMemoryDB> = AWSMemoryDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MemoryDB {
  private constructor(private readonly client: AWSMemoryDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'memory-db' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  batchUpdateCluster: (params: RawParamsFrom<'batchUpdateCluster'>) => Promise<ReturnTypeFrom<'batchUpdateCluster'>>  = async params => {
  // undefined
    return this.client.batchUpdateCluster(params as any).promise();
  }

  copySnapshot: (params: RawParamsFrom<'copySnapshot'>) => Promise<ReturnTypeFrom<'copySnapshot'>>  = async params => {
  // undefined
    return this.client.copySnapshot(params as any).promise();
  }

  createACL: (params: RawParamsFrom<'createACL'>) => Promise<ReturnTypeFrom<'createACL'>>  = async params => {
  // undefined
    return this.client.createACL(params as any).promise();
  }

  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createParameterGroup: (params: RawParamsFrom<'createParameterGroup'>) => Promise<ReturnTypeFrom<'createParameterGroup'>>  = async params => {
  // undefined
    return this.client.createParameterGroup(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createSubnetGroup: (params: RawParamsFrom<'createSubnetGroup'>) => Promise<ReturnTypeFrom<'createSubnetGroup'>>  = async params => {
  // undefined
    return this.client.createSubnetGroup(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deleteACL: (params: RawParamsFrom<'deleteACL'>) => Promise<ReturnTypeFrom<'deleteACL'>>  = async params => {
  // undefined
    return this.client.deleteACL(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteParameterGroup: (params: RawParamsFrom<'deleteParameterGroup'>) => Promise<ReturnTypeFrom<'deleteParameterGroup'>>  = async params => {
  // undefined
    return this.client.deleteParameterGroup(params as any).promise();
  }

  deleteSnapshot: (params: RawParamsFrom<'deleteSnapshot'>) => Promise<ReturnTypeFrom<'deleteSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteSnapshot(params as any).promise();
  }

  deleteSubnetGroup: (params: RawParamsFrom<'deleteSubnetGroup'>) => Promise<ReturnTypeFrom<'deleteSubnetGroup'>>  = async params => {
  // undefined
    return this.client.deleteSubnetGroup(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  describeACLs: (params: RawParamsFrom<'describeACLs'>) => Promise<ReturnTypeFrom<'describeACLs'>>  = async params => {
  // undefined
    return this.client.describeACLs(params as any).promise();
  }

  describeClusters: (params: RawParamsFrom<'describeClusters'>) => Promise<ReturnTypeFrom<'describeClusters'>>  = async params => {
  // undefined
    return this.client.describeClusters(params as any).promise();
  }

  describeEngineVersions: (params: RawParamsFrom<'describeEngineVersions'>) => Promise<ReturnTypeFrom<'describeEngineVersions'>>  = async params => {
  // undefined
    return this.client.describeEngineVersions(params as any).promise();
  }

  describeEvents: (params: RawParamsFrom<'describeEvents'>) => Promise<ReturnTypeFrom<'describeEvents'>>  = async params => {
  // undefined
    return this.client.describeEvents(params as any).promise();
  }

  describeParameterGroups: (params: RawParamsFrom<'describeParameterGroups'>) => Promise<ReturnTypeFrom<'describeParameterGroups'>>  = async params => {
  // undefined
    return this.client.describeParameterGroups(params as any).promise();
  }

  describeParameters: (params: RawParamsFrom<'describeParameters'>) => Promise<ReturnTypeFrom<'describeParameters'>>  = async params => {
  // undefined
    return this.client.describeParameters(params as any).promise();
  }

  describeServiceUpdates: (params: RawParamsFrom<'describeServiceUpdates'>) => Promise<ReturnTypeFrom<'describeServiceUpdates'>>  = async params => {
  // undefined
    return this.client.describeServiceUpdates(params as any).promise();
  }

  describeSnapshots: (params: RawParamsFrom<'describeSnapshots'>) => Promise<ReturnTypeFrom<'describeSnapshots'>>  = async params => {
  // undefined
    return this.client.describeSnapshots(params as any).promise();
  }

  describeSubnetGroups: (params: RawParamsFrom<'describeSubnetGroups'>) => Promise<ReturnTypeFrom<'describeSubnetGroups'>>  = async params => {
  // undefined
    return this.client.describeSubnetGroups(params as any).promise();
  }

  describeUsers: (params: RawParamsFrom<'describeUsers'>) => Promise<ReturnTypeFrom<'describeUsers'>>  = async params => {
  // undefined
    return this.client.describeUsers(params as any).promise();
  }

  failoverShard: (params: RawParamsFrom<'failoverShard'>) => Promise<ReturnTypeFrom<'failoverShard'>>  = async params => {
  // undefined
    return this.client.failoverShard(params as any).promise();
  }

  listAllowedNodeTypeUpdates: (params: RawParamsFrom<'listAllowedNodeTypeUpdates'>) => Promise<ReturnTypeFrom<'listAllowedNodeTypeUpdates'>>  = async params => {
  // undefined
    return this.client.listAllowedNodeTypeUpdates(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // undefined
    return this.client.listTags(params as any).promise();
  }

  resetParameterGroup: (params: RawParamsFrom<'resetParameterGroup'>) => Promise<ReturnTypeFrom<'resetParameterGroup'>>  = async params => {
  // undefined
    return this.client.resetParameterGroup(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateACL: (params: RawParamsFrom<'updateACL'>) => Promise<ReturnTypeFrom<'updateACL'>>  = async params => {
  // undefined
    return this.client.updateACL(params as any).promise();
  }

  updateCluster: (params: RawParamsFrom<'updateCluster'>) => Promise<ReturnTypeFrom<'updateCluster'>>  = async params => {
  // undefined
    return this.client.updateCluster(params as any).promise();
  }

  updateParameterGroup: (params: RawParamsFrom<'updateParameterGroup'>) => Promise<ReturnTypeFrom<'updateParameterGroup'>>  = async params => {
  // undefined
    return this.client.updateParameterGroup(params as any).promise();
  }

  updateSubnetGroup: (params: RawParamsFrom<'updateSubnetGroup'>) => Promise<ReturnTypeFrom<'updateSubnetGroup'>>  = async params => {
  // undefined
    return this.client.updateSubnetGroup(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }
  
  static fromClient(client: AWSMemoryDB): MemoryDB {
    return new MemoryDB(client) as any;
  }
  
  static client(options?: AWSMemoryDB.Types.ClientConfiguration): MemoryDB {
    return new MemoryDB(new AWSMemoryDB(options)) as any;
  }
}  
