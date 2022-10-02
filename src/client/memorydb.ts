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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'memory-db';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  batchUpdateCluster: FunctionTypeFrom<'batchUpdateCluster'>;

  copySnapshot: FunctionTypeFrom<'copySnapshot'>;

  createACL: FunctionTypeFrom<'createACL'>;

  createCluster: FunctionTypeFrom<'createCluster'>;

  createParameterGroup: FunctionTypeFrom<'createParameterGroup'>;

  createSnapshot: FunctionTypeFrom<'createSnapshot'>;

  createSubnetGroup: FunctionTypeFrom<'createSubnetGroup'>;

  createUser: FunctionTypeFrom<'createUser'>;

  deleteACL: FunctionTypeFrom<'deleteACL'>;

  deleteCluster: FunctionTypeFrom<'deleteCluster'>;

  deleteParameterGroup: FunctionTypeFrom<'deleteParameterGroup'>;

  deleteSnapshot: FunctionTypeFrom<'deleteSnapshot'>;

  deleteSubnetGroup: FunctionTypeFrom<'deleteSubnetGroup'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  describeACLs: FunctionTypeFrom<'describeACLs'>;

  describeClusters: FunctionTypeFrom<'describeClusters'>;

  describeEngineVersions: FunctionTypeFrom<'describeEngineVersions'>;

  describeEvents: FunctionTypeFrom<'describeEvents'>;

  describeParameterGroups: FunctionTypeFrom<'describeParameterGroups'>;

  describeParameters: FunctionTypeFrom<'describeParameters'>;

  describeServiceUpdates: FunctionTypeFrom<'describeServiceUpdates'>;

  describeSnapshots: FunctionTypeFrom<'describeSnapshots'>;

  describeSubnetGroups: FunctionTypeFrom<'describeSubnetGroups'>;

  describeUsers: FunctionTypeFrom<'describeUsers'>;

  failoverShard: FunctionTypeFrom<'failoverShard'>;

  listAllowedNodeTypeUpdates: FunctionTypeFrom<'listAllowedNodeTypeUpdates'>;

  listTags: FunctionTypeFrom<'listTags'>;

  resetParameterGroup: FunctionTypeFrom<'resetParameterGroup'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateACL: FunctionTypeFrom<'updateACL'>;

  updateCluster: FunctionTypeFrom<'updateCluster'>;

  updateParameterGroup: FunctionTypeFrom<'updateParameterGroup'>;

  updateSubnetGroup: FunctionTypeFrom<'updateSubnetGroup'>;

  updateUser: FunctionTypeFrom<'updateUser'>
}
 
export class MemoryDB implements ClientType {
  private constructor(private readonly client: AWSMemoryDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'memory-db';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async batchUpdateCluster(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateCluster(...args).promise()
  }

  async copySnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.copySnapshot(...args).promise()
  }

  async createACL(...args: any): Promise<any> {
  // undefined
    return this.client.createACL(...args).promise()
  }

  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createParameterGroup(...args).promise()
  }

  async createSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshot(...args).promise()
  }

  async createSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createSubnetGroup(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async deleteACL(...args: any): Promise<any> {
  // undefined
    return this.client.deleteACL(...args).promise()
  }

  async deleteCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCluster(...args).promise()
  }

  async deleteParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteParameterGroup(...args).promise()
  }

  async deleteSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshot(...args).promise()
  }

  async deleteSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSubnetGroup(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async describeACLs(...args: any): Promise<any> {
  // undefined
    return this.client.describeACLs(...args).promise()
  }

  async describeClusters(...args: any): Promise<any> {
  // undefined
    return this.client.describeClusters(...args).promise()
  }

  async describeEngineVersions(...args: any): Promise<any> {
  // undefined
    return this.client.describeEngineVersions(...args).promise()
  }

  async describeEvents(...args: any): Promise<any> {
  // undefined
    return this.client.describeEvents(...args).promise()
  }

  async describeParameterGroups(...args: any): Promise<any> {
  // undefined
    return this.client.describeParameterGroups(...args).promise()
  }

  async describeParameters(...args: any): Promise<any> {
  // undefined
    return this.client.describeParameters(...args).promise()
  }

  async describeServiceUpdates(...args: any): Promise<any> {
  // undefined
    return this.client.describeServiceUpdates(...args).promise()
  }

  async describeSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.describeSnapshots(...args).promise()
  }

  async describeSubnetGroups(...args: any): Promise<any> {
  // undefined
    return this.client.describeSubnetGroups(...args).promise()
  }

  async describeUsers(...args: any): Promise<any> {
  // undefined
    return this.client.describeUsers(...args).promise()
  }

  async failoverShard(...args: any): Promise<any> {
  // undefined
    return this.client.failoverShard(...args).promise()
  }

  async listAllowedNodeTypeUpdates(...args: any): Promise<any> {
  // undefined
    return this.client.listAllowedNodeTypeUpdates(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
  // undefined
    return this.client.listTags(...args).promise()
  }

  async resetParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.resetParameterGroup(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateACL(...args: any): Promise<any> {
  // undefined
    return this.client.updateACL(...args).promise()
  }

  async updateCluster(...args: any): Promise<any> {
  // undefined
    return this.client.updateCluster(...args).promise()
  }

  async updateParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateParameterGroup(...args).promise()
  }

  async updateSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateSubnetGroup(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }
  
  static fromClient(client: AWSMemoryDB): ClientType {
    return new MemoryDB(client) as any;
  }
  
  static client(options?: AWSMemoryDB.Types.ClientConfiguration): ClientType {
    return new MemoryDB(new AWSMemoryDB(options)) as any;
  }
}  
