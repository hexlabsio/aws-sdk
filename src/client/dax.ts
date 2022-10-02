import { Request, DAX as AWSDAX } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDAX> = AWSDAX[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDAX> = AWSDAX[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDAX[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDAX, Extras> = AWSDAX[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'dax';
    global: false;
    category: 'Database'
    topLevelCalls: readonly [];
    
  createCluster: FunctionTypeFrom<'createCluster'>;

  createParameterGroup: FunctionTypeFrom<'createParameterGroup'>;

  createSubnetGroup: FunctionTypeFrom<'createSubnetGroup'>;

  decreaseReplicationFactor: FunctionTypeFrom<'decreaseReplicationFactor'>;

  deleteCluster: FunctionTypeFrom<'deleteCluster'>;

  deleteParameterGroup: FunctionTypeFrom<'deleteParameterGroup'>;

  deleteSubnetGroup: FunctionTypeFrom<'deleteSubnetGroup'>;

  describeClusters: FunctionTypeFrom<'describeClusters'>;

  describeDefaultParameters: FunctionTypeFrom<'describeDefaultParameters'>;

  describeEvents: FunctionTypeFrom<'describeEvents'>;

  describeParameterGroups: FunctionTypeFrom<'describeParameterGroups'>;

  describeParameters: FunctionTypeFrom<'describeParameters'>;

  describeSubnetGroups: FunctionTypeFrom<'describeSubnetGroups'>;

  increaseReplicationFactor: FunctionTypeFrom<'increaseReplicationFactor'>;

  listTags: FunctionTypeFrom<'listTags'>;

  rebootNode: FunctionTypeFrom<'rebootNode'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCluster: FunctionTypeFrom<'updateCluster'>;

  updateParameterGroup: FunctionTypeFrom<'updateParameterGroup'>;

  updateSubnetGroup: FunctionTypeFrom<'updateSubnetGroup'>
}
 
export class DAX implements ClientType {
  private constructor(private readonly client: AWSDAX) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dax';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = [] as const;
  
  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createParameterGroup(...args).promise()
  }

  async createSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createSubnetGroup(...args).promise()
  }

  async decreaseReplicationFactor(...args: any): Promise<any> {
  // undefined
    return this.client.decreaseReplicationFactor(...args).promise()
  }

  async deleteCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCluster(...args).promise()
  }

  async deleteParameterGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteParameterGroup(...args).promise()
  }

  async deleteSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSubnetGroup(...args).promise()
  }

  async describeClusters(...args: any): Promise<any> {
  // undefined
    return this.client.describeClusters(...args).promise()
  }

  async describeDefaultParameters(...args: any): Promise<any> {
  // undefined
    return this.client.describeDefaultParameters(...args).promise()
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

  async describeSubnetGroups(...args: any): Promise<any> {
  // undefined
    return this.client.describeSubnetGroups(...args).promise()
  }

  async increaseReplicationFactor(...args: any): Promise<any> {
  // undefined
    return this.client.increaseReplicationFactor(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
  // undefined
    return this.client.listTags(...args).promise()
  }

  async rebootNode(...args: any): Promise<any> {
  // undefined
    return this.client.rebootNode(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
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
  
  static fromClient(client: AWSDAX): ClientType {
    return new DAX(client) as any;
  }
  
  static client(options?: AWSDAX.Types.ClientConfiguration): ClientType {
    return new DAX(new AWSDAX(options)) as any;
  }
}  
