import { Request, KinesisVideo as AWSKinesisVideo } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKinesisVideo> = AWSKinesisVideo[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKinesisVideo> = AWSKinesisVideo[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKinesisVideo[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKinesisVideo, Extras> = AWSKinesisVideo[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kinesisvideo';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listSignalingChannels","listStreams"];
    
  createSignalingChannel: FunctionTypeFrom<'createSignalingChannel'>;

  createStream: FunctionTypeFrom<'createStream'>;

  deleteSignalingChannel: FunctionTypeFrom<'deleteSignalingChannel'>;

  deleteStream: FunctionTypeFrom<'deleteStream'>;

  describeImageGenerationConfiguration: FunctionTypeFrom<'describeImageGenerationConfiguration'>;

  describeNotificationConfiguration: FunctionTypeFrom<'describeNotificationConfiguration'>;

  describeSignalingChannel: FunctionTypeFrom<'describeSignalingChannel'>;

  describeStream: FunctionTypeFrom<'describeStream'>;

  getDataEndpoint: FunctionTypeFrom<'getDataEndpoint'>;

  getSignalingChannelEndpoint: FunctionTypeFrom<'getSignalingChannelEndpoint'>;

  listSignalingChannels(params: { [K in keyof Omit<ParamsFrom<'listSignalingChannels', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSignalingChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSignalingChannels'>]-?: ReturnTypeFrom<'listSignalingChannels'>[K]}['ChannelInfoList'] }>
  listSignalingChannels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSignalingChannels'>]-?: ReturnTypeFrom<'listSignalingChannels'>[K]}['ChannelInfoList'] }>;

  listStreams(params: { [K in keyof Omit<ParamsFrom<'listStreams', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['StreamInfoList'] }>
  listStreams(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['StreamInfoList'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTagsForStream: FunctionTypeFrom<'listTagsForStream'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  tagStream: FunctionTypeFrom<'tagStream'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  untagStream: FunctionTypeFrom<'untagStream'>;

  updateDataRetention: FunctionTypeFrom<'updateDataRetention'>;

  updateImageGenerationConfiguration: FunctionTypeFrom<'updateImageGenerationConfiguration'>;

  updateNotificationConfiguration: FunctionTypeFrom<'updateNotificationConfiguration'>;

  updateSignalingChannel: FunctionTypeFrom<'updateSignalingChannel'>;

  updateStream: FunctionTypeFrom<'updateStream'>
}
 
export class KinesisVideo implements ClientType {
  private constructor(private readonly client: AWSKinesisVideo) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listSignalingChannels","listStreams"] as const;
  
  async createSignalingChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createSignalingChannel(...args).promise()
  }

  async createStream(...args: any): Promise<any> {
  // undefined
    return this.client.createStream(...args).promise()
  }

  async deleteSignalingChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSignalingChannel(...args).promise()
  }

  async deleteStream(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStream(...args).promise()
  }

  async describeImageGenerationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeImageGenerationConfiguration(...args).promise()
  }

  async describeNotificationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeNotificationConfiguration(...args).promise()
  }

  async describeSignalingChannel(...args: any): Promise<any> {
  // undefined
    return this.client.describeSignalingChannel(...args).promise()
  }

  async describeStream(...args: any): Promise<any> {
  // undefined
    return this.client.describeStream(...args).promise()
  }

  async getDataEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getDataEndpoint(...args).promise()
  }

  async getSignalingChannelEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getSignalingChannelEndpoint(...args).promise()
  }

  async listSignalingChannels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ChannelInfoList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSignalingChannels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ChannelInfoList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStreams(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StreamInfoList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStreams(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StreamInfoList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTagsForStream(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForStream(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async tagStream(...args: any): Promise<any> {
  // undefined
    return this.client.tagStream(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async untagStream(...args: any): Promise<any> {
  // undefined
    return this.client.untagStream(...args).promise()
  }

  async updateDataRetention(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataRetention(...args).promise()
  }

  async updateImageGenerationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateImageGenerationConfiguration(...args).promise()
  }

  async updateNotificationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateNotificationConfiguration(...args).promise()
  }

  async updateSignalingChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateSignalingChannel(...args).promise()
  }

  async updateStream(...args: any): Promise<any> {
  // undefined
    return this.client.updateStream(...args).promise()
  }
  
  static fromClient(client: AWSKinesisVideo): ClientType {
    return new KinesisVideo(client) as any;
  }
  
  static client(options?: AWSKinesisVideo.Types.ClientConfiguration): ClientType {
    return new KinesisVideo(new AWSKinesisVideo(options)) as any;
  }
}  
