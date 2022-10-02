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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ivs';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listChannels","listPlaybackKeyPairs","listRecordingConfigurations","listStreams"];
    
  batchGetChannel: FunctionTypeFrom<'batchGetChannel'>;

  batchGetStreamKey: FunctionTypeFrom<'batchGetStreamKey'>;

  createChannel: FunctionTypeFrom<'createChannel'>;

  createRecordingConfiguration: FunctionTypeFrom<'createRecordingConfiguration'>;

  createStreamKey: FunctionTypeFrom<'createStreamKey'>;

  deleteChannel: FunctionTypeFrom<'deleteChannel'>;

  deletePlaybackKeyPair: FunctionTypeFrom<'deletePlaybackKeyPair'>;

  deleteRecordingConfiguration: FunctionTypeFrom<'deleteRecordingConfiguration'>;

  deleteStreamKey: FunctionTypeFrom<'deleteStreamKey'>;

  getChannel: FunctionTypeFrom<'getChannel'>;

  getPlaybackKeyPair: FunctionTypeFrom<'getPlaybackKeyPair'>;

  getRecordingConfiguration: FunctionTypeFrom<'getRecordingConfiguration'>;

  getStream: FunctionTypeFrom<'getStream'>;

  getStreamKey: FunctionTypeFrom<'getStreamKey'>;

  getStreamSession: FunctionTypeFrom<'getStreamSession'>;

  importPlaybackKeyPair: FunctionTypeFrom<'importPlaybackKeyPair'>;

  listChannels: FunctionTypeFrom<'listChannels'>;

  listPlaybackKeyPairs: FunctionTypeFrom<'listPlaybackKeyPairs'>;

  listRecordingConfigurations: FunctionTypeFrom<'listRecordingConfigurations'>;

  listStreamKeys: FunctionTypeFrom<'listStreamKeys'>;

  listStreamSessions: FunctionTypeFrom<'listStreamSessions'>;

  listStreams: FunctionTypeFrom<'listStreams'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putMetadata: FunctionTypeFrom<'putMetadata'>;

  stopStream: FunctionTypeFrom<'stopStream'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateChannel: FunctionTypeFrom<'updateChannel'>
}
 
export class IVS implements ClientType {
  private constructor(private readonly client: AWSIVS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ivs';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listChannels","listPlaybackKeyPairs","listRecordingConfigurations","listStreams"] as const;
  
  async batchGetChannel(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetChannel(...args).promise()
  }

  async batchGetStreamKey(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetStreamKey(...args).promise()
  }

  async createChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createChannel(...args).promise()
  }

  async createRecordingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createRecordingConfiguration(...args).promise()
  }

  async createStreamKey(...args: any): Promise<any> {
  // undefined
    return this.client.createStreamKey(...args).promise()
  }

  async deleteChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannel(...args).promise()
  }

  async deletePlaybackKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.deletePlaybackKeyPair(...args).promise()
  }

  async deleteRecordingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecordingConfiguration(...args).promise()
  }

  async deleteStreamKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStreamKey(...args).promise()
  }

  async getChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getChannel(...args).promise()
  }

  async getPlaybackKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.getPlaybackKeyPair(...args).promise()
  }

  async getRecordingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getRecordingConfiguration(...args).promise()
  }

  async getStream(...args: any): Promise<any> {
  // undefined
    return this.client.getStream(...args).promise()
  }

  async getStreamKey(...args: any): Promise<any> {
  // undefined
    return this.client.getStreamKey(...args).promise()
  }

  async getStreamSession(...args: any): Promise<any> {
  // undefined
    return this.client.getStreamSession(...args).promise()
  }

  async importPlaybackKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.importPlaybackKeyPair(...args).promise()
  }

  async listChannels(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listChannels(...args).promise()
  }

  async listPlaybackKeyPairs(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPlaybackKeyPairs(...args).promise()
  }

  async listRecordingConfigurations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRecordingConfigurations(...args).promise()
  }

  async listStreamKeys(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listStreamKeys(...args).promise()
  }

  async listStreamSessions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listStreamSessions(...args).promise()
  }

  async listStreams(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listStreams(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.putMetadata(...args).promise()
  }

  async stopStream(...args: any): Promise<any> {
  // undefined
    return this.client.stopStream(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannel(...args).promise()
  }
  
  static fromClient(client: AWSIVS): ClientType {
    return new IVS(client) as any;
  }
  
  static client(options?: AWSIVS.Types.ClientConfiguration): ClientType {
    return new IVS(new AWSIVS(options)) as any;
  }
}  
