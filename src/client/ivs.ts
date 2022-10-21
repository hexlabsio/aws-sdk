import { Request, IVS as AWSIVS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIVS> = AWSIVS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIVS> = AWSIVS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIVS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIVS, Extras> = AWSIVS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIVS> = AWSIVS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IVS {
  private constructor(private readonly client: AWSIVS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ivs' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listChannels","listPlaybackKeyPairs","listRecordingConfigurations","listStreams"] as const;
  
  batchGetChannel: (params: RawParamsFrom<'batchGetChannel'>) => Promise<ReturnTypeFrom<'batchGetChannel'>>  = async params => {
  // undefined
    return this.client.batchGetChannel(params as any).promise();
  }

  batchGetStreamKey: (params: RawParamsFrom<'batchGetStreamKey'>) => Promise<ReturnTypeFrom<'batchGetStreamKey'>>  = async params => {
  // undefined
    return this.client.batchGetStreamKey(params as any).promise();
  }

  createChannel: (params: RawParamsFrom<'createChannel'>) => Promise<ReturnTypeFrom<'createChannel'>>  = async params => {
  // undefined
    return this.client.createChannel(params as any).promise();
  }

  createRecordingConfiguration: (params: RawParamsFrom<'createRecordingConfiguration'>) => Promise<ReturnTypeFrom<'createRecordingConfiguration'>>  = async params => {
  // undefined
    return this.client.createRecordingConfiguration(params as any).promise();
  }

  createStreamKey: (params: RawParamsFrom<'createStreamKey'>) => Promise<ReturnTypeFrom<'createStreamKey'>>  = async params => {
  // undefined
    return this.client.createStreamKey(params as any).promise();
  }

  deleteChannel: (params: RawParamsFrom<'deleteChannel'>) => Promise<ReturnTypeFrom<'deleteChannel'>>  = async params => {
  // undefined
    return this.client.deleteChannel(params as any).promise();
  }

  deletePlaybackKeyPair: (params: RawParamsFrom<'deletePlaybackKeyPair'>) => Promise<ReturnTypeFrom<'deletePlaybackKeyPair'>>  = async params => {
  // undefined
    return this.client.deletePlaybackKeyPair(params as any).promise();
  }

  deleteRecordingConfiguration: (params: RawParamsFrom<'deleteRecordingConfiguration'>) => Promise<ReturnTypeFrom<'deleteRecordingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteRecordingConfiguration(params as any).promise();
  }

  deleteStreamKey: (params: RawParamsFrom<'deleteStreamKey'>) => Promise<ReturnTypeFrom<'deleteStreamKey'>>  = async params => {
  // undefined
    return this.client.deleteStreamKey(params as any).promise();
  }

  getChannel: (params: RawParamsFrom<'getChannel'>) => Promise<ReturnTypeFrom<'getChannel'>>  = async params => {
  // undefined
    return this.client.getChannel(params as any).promise();
  }

  getPlaybackKeyPair: (params: RawParamsFrom<'getPlaybackKeyPair'>) => Promise<ReturnTypeFrom<'getPlaybackKeyPair'>>  = async params => {
  // undefined
    return this.client.getPlaybackKeyPair(params as any).promise();
  }

  getRecordingConfiguration: (params: RawParamsFrom<'getRecordingConfiguration'>) => Promise<ReturnTypeFrom<'getRecordingConfiguration'>>  = async params => {
  // undefined
    return this.client.getRecordingConfiguration(params as any).promise();
  }

  getStream: (params: RawParamsFrom<'getStream'>) => Promise<ReturnTypeFrom<'getStream'>>  = async params => {
  // undefined
    return this.client.getStream(params as any).promise();
  }

  getStreamKey: (params: RawParamsFrom<'getStreamKey'>) => Promise<ReturnTypeFrom<'getStreamKey'>>  = async params => {
  // undefined
    return this.client.getStreamKey(params as any).promise();
  }

  getStreamSession: (params: RawParamsFrom<'getStreamSession'>) => Promise<ReturnTypeFrom<'getStreamSession'>>  = async params => {
  // undefined
    return this.client.getStreamSession(params as any).promise();
  }

  importPlaybackKeyPair: (params: RawParamsFrom<'importPlaybackKeyPair'>) => Promise<ReturnTypeFrom<'importPlaybackKeyPair'>>  = async params => {
  // undefined
    return this.client.importPlaybackKeyPair(params as any).promise();
  }

  listChannels: (params: RawParamsFrom<'listChannels'>) => Promise<ReturnTypeFrom<'listChannels'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listChannels(params as any).promise();
  }

  listPlaybackKeyPairs: (params: RawParamsFrom<'listPlaybackKeyPairs'>) => Promise<ReturnTypeFrom<'listPlaybackKeyPairs'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPlaybackKeyPairs(params as any).promise();
  }

  listRecordingConfigurations: (params: RawParamsFrom<'listRecordingConfigurations'>) => Promise<ReturnTypeFrom<'listRecordingConfigurations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRecordingConfigurations(params as any).promise();
  }

  listStreamKeys: (params: RawParamsFrom<'listStreamKeys'>) => Promise<ReturnTypeFrom<'listStreamKeys'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listStreamKeys(params as any).promise();
  }

  listStreamSessions: (params: RawParamsFrom<'listStreamSessions'>) => Promise<ReturnTypeFrom<'listStreamSessions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listStreamSessions(params as any).promise();
  }

  listStreams: (params: RawParamsFrom<'listStreams'>) => Promise<ReturnTypeFrom<'listStreams'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listStreams(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putMetadata: (params: RawParamsFrom<'putMetadata'>) => Promise<ReturnTypeFrom<'putMetadata'>>  = async params => {
  // undefined
    return this.client.putMetadata(params as any).promise();
  }

  stopStream: (params: RawParamsFrom<'stopStream'>) => Promise<ReturnTypeFrom<'stopStream'>>  = async params => {
  // undefined
    return this.client.stopStream(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateChannel: (params: RawParamsFrom<'updateChannel'>) => Promise<ReturnTypeFrom<'updateChannel'>>  = async params => {
  // undefined
    return this.client.updateChannel(params as any).promise();
  }
  
  static fromClient(client: AWSIVS): IVS {
    return new IVS(client) as any;
  }
  
  static client(options?: AWSIVS.Types.ClientConfiguration): IVS {
    return new IVS(new AWSIVS(options)) as any;
  }
}  
