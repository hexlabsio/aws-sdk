import { Request, ChimeSDKMediaPipelines as AWSChimeSDKMediaPipelines } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSChimeSDKMediaPipelines> = AWSChimeSDKMediaPipelines[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSChimeSDKMediaPipelines> = AWSChimeSDKMediaPipelines[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSChimeSDKMediaPipelines[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSChimeSDKMediaPipelines, Extras> = AWSChimeSDKMediaPipelines[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'media-pipelines-chime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listMediaCapturePipelines","listMediaPipelines"];
    
  createMediaCapturePipeline: FunctionTypeFrom<'createMediaCapturePipeline'>;

  createMediaConcatenationPipeline: FunctionTypeFrom<'createMediaConcatenationPipeline'>;

  createMediaLiveConnectorPipeline: FunctionTypeFrom<'createMediaLiveConnectorPipeline'>;

  deleteMediaCapturePipeline: FunctionTypeFrom<'deleteMediaCapturePipeline'>;

  deleteMediaPipeline: FunctionTypeFrom<'deleteMediaPipeline'>;

  getMediaCapturePipeline: FunctionTypeFrom<'getMediaCapturePipeline'>;

  getMediaPipeline: FunctionTypeFrom<'getMediaPipeline'>;

  listMediaCapturePipelines: FunctionTypeFrom<'listMediaCapturePipelines'>;

  listMediaPipelines: FunctionTypeFrom<'listMediaPipelines'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class ChimeSDKMediaPipelines implements ClientType {
  private constructor(private readonly client: AWSChimeSDKMediaPipelines) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'media-pipelines-chime';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listMediaCapturePipelines","listMediaPipelines"] as const;
  
  async createMediaCapturePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createMediaCapturePipeline(...args).promise()
  }

  async createMediaConcatenationPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createMediaConcatenationPipeline(...args).promise()
  }

  async createMediaLiveConnectorPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createMediaLiveConnectorPipeline(...args).promise()
  }

  async deleteMediaCapturePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMediaCapturePipeline(...args).promise()
  }

  async deleteMediaPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMediaPipeline(...args).promise()
  }

  async getMediaCapturePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.getMediaCapturePipeline(...args).promise()
  }

  async getMediaPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.getMediaPipeline(...args).promise()
  }

  async listMediaCapturePipelines(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMediaCapturePipelines(...args).promise()
  }

  async listMediaPipelines(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMediaPipelines(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSChimeSDKMediaPipelines): ClientType {
    return new ChimeSDKMediaPipelines(client) as any;
  }
  
  static client(options?: AWSChimeSDKMediaPipelines.Types.ClientConfiguration): ClientType {
    return new ChimeSDKMediaPipelines(new AWSChimeSDKMediaPipelines(options)) as any;
  }
}  
