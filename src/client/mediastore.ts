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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mediastore';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listContainers"];
    
  createContainer: FunctionTypeFrom<'createContainer'>;

  deleteContainer: FunctionTypeFrom<'deleteContainer'>;

  deleteContainerPolicy: FunctionTypeFrom<'deleteContainerPolicy'>;

  deleteCorsPolicy: FunctionTypeFrom<'deleteCorsPolicy'>;

  deleteLifecyclePolicy: FunctionTypeFrom<'deleteLifecyclePolicy'>;

  deleteMetricPolicy: FunctionTypeFrom<'deleteMetricPolicy'>;

  describeContainer: FunctionTypeFrom<'describeContainer'>;

  getContainerPolicy: FunctionTypeFrom<'getContainerPolicy'>;

  getCorsPolicy: FunctionTypeFrom<'getCorsPolicy'>;

  getLifecyclePolicy: FunctionTypeFrom<'getLifecyclePolicy'>;

  getMetricPolicy: FunctionTypeFrom<'getMetricPolicy'>;

  listContainers: FunctionTypeFrom<'listContainers'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putContainerPolicy: FunctionTypeFrom<'putContainerPolicy'>;

  putCorsPolicy: FunctionTypeFrom<'putCorsPolicy'>;

  putLifecyclePolicy: FunctionTypeFrom<'putLifecyclePolicy'>;

  putMetricPolicy: FunctionTypeFrom<'putMetricPolicy'>;

  startAccessLogging: FunctionTypeFrom<'startAccessLogging'>;

  stopAccessLogging: FunctionTypeFrom<'stopAccessLogging'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class MediaStore implements ClientType {
  private constructor(private readonly client: AWSMediaStore) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediastore';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listContainers"] as const;
  
  async createContainer(...args: any): Promise<any> {
  // undefined
    return this.client.createContainer(...args).promise()
  }

  async deleteContainer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContainer(...args).promise()
  }

  async deleteContainerPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContainerPolicy(...args).promise()
  }

  async deleteCorsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCorsPolicy(...args).promise()
  }

  async deleteLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLifecyclePolicy(...args).promise()
  }

  async deleteMetricPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMetricPolicy(...args).promise()
  }

  async describeContainer(...args: any): Promise<any> {
  // undefined
    return this.client.describeContainer(...args).promise()
  }

  async getContainerPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerPolicy(...args).promise()
  }

  async getCorsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getCorsPolicy(...args).promise()
  }

  async getLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getLifecyclePolicy(...args).promise()
  }

  async getMetricPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getMetricPolicy(...args).promise()
  }

  async listContainers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listContainers(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putContainerPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putContainerPolicy(...args).promise()
  }

  async putCorsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putCorsPolicy(...args).promise()
  }

  async putLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putLifecyclePolicy(...args).promise()
  }

  async putMetricPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putMetricPolicy(...args).promise()
  }

  async startAccessLogging(...args: any): Promise<any> {
  // undefined
    return this.client.startAccessLogging(...args).promise()
  }

  async stopAccessLogging(...args: any): Promise<any> {
  // undefined
    return this.client.stopAccessLogging(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSMediaStore): ClientType {
    return new MediaStore(client) as any;
  }
  
  static client(options?: AWSMediaStore.Types.ClientConfiguration): ClientType {
    return new MediaStore(new AWSMediaStore(options)) as any;
  }
}  
