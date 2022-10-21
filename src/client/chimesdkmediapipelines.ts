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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSChimeSDKMediaPipelines> = AWSChimeSDKMediaPipelines[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ChimeSDKMediaPipelines {
  private constructor(private readonly client: AWSChimeSDKMediaPipelines) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'media-pipelines-chime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listMediaCapturePipelines","listMediaPipelines"] as const;
  
  createMediaCapturePipeline: (params: RawParamsFrom<'createMediaCapturePipeline'>) => Promise<ReturnTypeFrom<'createMediaCapturePipeline'>>  = async params => {
  // undefined
    return this.client.createMediaCapturePipeline(params as any).promise();
  }

  createMediaConcatenationPipeline: (params: RawParamsFrom<'createMediaConcatenationPipeline'>) => Promise<ReturnTypeFrom<'createMediaConcatenationPipeline'>>  = async params => {
  // undefined
    return this.client.createMediaConcatenationPipeline(params as any).promise();
  }

  createMediaLiveConnectorPipeline: (params: RawParamsFrom<'createMediaLiveConnectorPipeline'>) => Promise<ReturnTypeFrom<'createMediaLiveConnectorPipeline'>>  = async params => {
  // undefined
    return this.client.createMediaLiveConnectorPipeline(params as any).promise();
  }

  deleteMediaCapturePipeline: (params: RawParamsFrom<'deleteMediaCapturePipeline'>) => Promise<ReturnTypeFrom<'deleteMediaCapturePipeline'>>  = async params => {
  // undefined
    return this.client.deleteMediaCapturePipeline(params as any).promise();
  }

  deleteMediaPipeline: (params: RawParamsFrom<'deleteMediaPipeline'>) => Promise<ReturnTypeFrom<'deleteMediaPipeline'>>  = async params => {
  // undefined
    return this.client.deleteMediaPipeline(params as any).promise();
  }

  getMediaCapturePipeline: (params: RawParamsFrom<'getMediaCapturePipeline'>) => Promise<ReturnTypeFrom<'getMediaCapturePipeline'>>  = async params => {
  // undefined
    return this.client.getMediaCapturePipeline(params as any).promise();
  }

  getMediaPipeline: (params: RawParamsFrom<'getMediaPipeline'>) => Promise<ReturnTypeFrom<'getMediaPipeline'>>  = async params => {
  // undefined
    return this.client.getMediaPipeline(params as any).promise();
  }

  listMediaCapturePipelines: (params: RawParamsFrom<'listMediaCapturePipelines'>) => Promise<ReturnTypeFrom<'listMediaCapturePipelines'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMediaCapturePipelines(params as any).promise();
  }

  listMediaPipelines: (params: RawParamsFrom<'listMediaPipelines'>) => Promise<ReturnTypeFrom<'listMediaPipelines'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMediaPipelines(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSChimeSDKMediaPipelines): ChimeSDKMediaPipelines {
    return new ChimeSDKMediaPipelines(client) as any;
  }
  
  static client(options?: AWSChimeSDKMediaPipelines.Types.ClientConfiguration): ChimeSDKMediaPipelines {
    return new ChimeSDKMediaPipelines(new AWSChimeSDKMediaPipelines(options)) as any;
  }
}  
