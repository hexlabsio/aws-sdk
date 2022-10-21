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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDAX> = AWSDAX[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DAX {
  private constructor(private readonly client: AWSDAX) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dax' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = [] as const;
  
  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createParameterGroup: (params: RawParamsFrom<'createParameterGroup'>) => Promise<ReturnTypeFrom<'createParameterGroup'>>  = async params => {
  // undefined
    return this.client.createParameterGroup(params as any).promise();
  }

  createSubnetGroup: (params: RawParamsFrom<'createSubnetGroup'>) => Promise<ReturnTypeFrom<'createSubnetGroup'>>  = async params => {
  // undefined
    return this.client.createSubnetGroup(params as any).promise();
  }

  decreaseReplicationFactor: (params: RawParamsFrom<'decreaseReplicationFactor'>) => Promise<ReturnTypeFrom<'decreaseReplicationFactor'>>  = async params => {
  // undefined
    return this.client.decreaseReplicationFactor(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteParameterGroup: (params: RawParamsFrom<'deleteParameterGroup'>) => Promise<ReturnTypeFrom<'deleteParameterGroup'>>  = async params => {
  // undefined
    return this.client.deleteParameterGroup(params as any).promise();
  }

  deleteSubnetGroup: (params: RawParamsFrom<'deleteSubnetGroup'>) => Promise<ReturnTypeFrom<'deleteSubnetGroup'>>  = async params => {
  // undefined
    return this.client.deleteSubnetGroup(params as any).promise();
  }

  describeClusters: (params: RawParamsFrom<'describeClusters'>) => Promise<ReturnTypeFrom<'describeClusters'>>  = async params => {
  // undefined
    return this.client.describeClusters(params as any).promise();
  }

  describeDefaultParameters: (params: RawParamsFrom<'describeDefaultParameters'>) => Promise<ReturnTypeFrom<'describeDefaultParameters'>>  = async params => {
  // undefined
    return this.client.describeDefaultParameters(params as any).promise();
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

  describeSubnetGroups: (params: RawParamsFrom<'describeSubnetGroups'>) => Promise<ReturnTypeFrom<'describeSubnetGroups'>>  = async params => {
  // undefined
    return this.client.describeSubnetGroups(params as any).promise();
  }

  increaseReplicationFactor: (params: RawParamsFrom<'increaseReplicationFactor'>) => Promise<ReturnTypeFrom<'increaseReplicationFactor'>>  = async params => {
  // undefined
    return this.client.increaseReplicationFactor(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // undefined
    return this.client.listTags(params as any).promise();
  }

  rebootNode: (params: RawParamsFrom<'rebootNode'>) => Promise<ReturnTypeFrom<'rebootNode'>>  = async params => {
  // undefined
    return this.client.rebootNode(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
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
  
  static fromClient(client: AWSDAX): DAX {
    return new DAX(client) as any;
  }
  
  static client(options?: AWSDAX.Types.ClientConfiguration): DAX {
    return new DAX(new AWSDAX(options)) as any;
  }
}  
