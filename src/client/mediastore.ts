import { Request, MediaStore as AWSMediaStore } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMediaStore> = AWSMediaStore[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMediaStore> = AWSMediaStore[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMediaStore[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMediaStore, Extras> = AWSMediaStore[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMediaStore> = AWSMediaStore[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MediaStore {
  private constructor(private readonly client: AWSMediaStore) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediastore' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listContainers"] as const;
  
  createContainer: (params: RawParamsFrom<'createContainer'>) => Promise<ReturnTypeFrom<'createContainer'>>  = async params => {
  // undefined
    return this.client.createContainer(params as any).promise();
  }

  deleteContainer: (params: RawParamsFrom<'deleteContainer'>) => Promise<ReturnTypeFrom<'deleteContainer'>>  = async params => {
  // undefined
    return this.client.deleteContainer(params as any).promise();
  }

  deleteContainerPolicy: (params: RawParamsFrom<'deleteContainerPolicy'>) => Promise<ReturnTypeFrom<'deleteContainerPolicy'>>  = async params => {
  // undefined
    return this.client.deleteContainerPolicy(params as any).promise();
  }

  deleteCorsPolicy: (params: RawParamsFrom<'deleteCorsPolicy'>) => Promise<ReturnTypeFrom<'deleteCorsPolicy'>>  = async params => {
  // undefined
    return this.client.deleteCorsPolicy(params as any).promise();
  }

  deleteLifecyclePolicy: (params: RawParamsFrom<'deleteLifecyclePolicy'>) => Promise<ReturnTypeFrom<'deleteLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.deleteLifecyclePolicy(params as any).promise();
  }

  deleteMetricPolicy: (params: RawParamsFrom<'deleteMetricPolicy'>) => Promise<ReturnTypeFrom<'deleteMetricPolicy'>>  = async params => {
  // undefined
    return this.client.deleteMetricPolicy(params as any).promise();
  }

  describeContainer: (params: RawParamsFrom<'describeContainer'>) => Promise<ReturnTypeFrom<'describeContainer'>>  = async params => {
  // undefined
    return this.client.describeContainer(params as any).promise();
  }

  getContainerPolicy: (params: RawParamsFrom<'getContainerPolicy'>) => Promise<ReturnTypeFrom<'getContainerPolicy'>>  = async params => {
  // undefined
    return this.client.getContainerPolicy(params as any).promise();
  }

  getCorsPolicy: (params: RawParamsFrom<'getCorsPolicy'>) => Promise<ReturnTypeFrom<'getCorsPolicy'>>  = async params => {
  // undefined
    return this.client.getCorsPolicy(params as any).promise();
  }

  getLifecyclePolicy: (params: RawParamsFrom<'getLifecyclePolicy'>) => Promise<ReturnTypeFrom<'getLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.getLifecyclePolicy(params as any).promise();
  }

  getMetricPolicy: (params: RawParamsFrom<'getMetricPolicy'>) => Promise<ReturnTypeFrom<'getMetricPolicy'>>  = async params => {
  // undefined
    return this.client.getMetricPolicy(params as any).promise();
  }

  listContainers: (params: RawParamsFrom<'listContainers'>) => Promise<ReturnTypeFrom<'listContainers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listContainers(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putContainerPolicy: (params: RawParamsFrom<'putContainerPolicy'>) => Promise<ReturnTypeFrom<'putContainerPolicy'>>  = async params => {
  // undefined
    return this.client.putContainerPolicy(params as any).promise();
  }

  putCorsPolicy: (params: RawParamsFrom<'putCorsPolicy'>) => Promise<ReturnTypeFrom<'putCorsPolicy'>>  = async params => {
  // undefined
    return this.client.putCorsPolicy(params as any).promise();
  }

  putLifecyclePolicy: (params: RawParamsFrom<'putLifecyclePolicy'>) => Promise<ReturnTypeFrom<'putLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.putLifecyclePolicy(params as any).promise();
  }

  putMetricPolicy: (params: RawParamsFrom<'putMetricPolicy'>) => Promise<ReturnTypeFrom<'putMetricPolicy'>>  = async params => {
  // undefined
    return this.client.putMetricPolicy(params as any).promise();
  }

  startAccessLogging: (params: RawParamsFrom<'startAccessLogging'>) => Promise<ReturnTypeFrom<'startAccessLogging'>>  = async params => {
  // undefined
    return this.client.startAccessLogging(params as any).promise();
  }

  stopAccessLogging: (params: RawParamsFrom<'stopAccessLogging'>) => Promise<ReturnTypeFrom<'stopAccessLogging'>>  = async params => {
  // undefined
    return this.client.stopAccessLogging(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSMediaStore): MediaStore {
    return new MediaStore(client) as any;
  }
  
  static client(options?: AWSMediaStore.Types.ClientConfiguration): MediaStore {
    return new MediaStore(new AWSMediaStore(options)) as any;
  }
}  
