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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKinesisVideo> = AWSKinesisVideo[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KinesisVideo {
  private constructor(private readonly client: AWSKinesisVideo) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["describeMappedResourceConfiguration","listSignalingChannels","listStreams"] as const;
  
  createSignalingChannel: (params: RawParamsFrom<'createSignalingChannel'>) => Promise<ReturnTypeFrom<'createSignalingChannel'>>  = async params => {
  // undefined
    return this.client.createSignalingChannel(params as any).promise();
  }

  createStream: (params: RawParamsFrom<'createStream'>) => Promise<ReturnTypeFrom<'createStream'>>  = async params => {
  // undefined
    return this.client.createStream(params as any).promise();
  }

  deleteSignalingChannel: (params: RawParamsFrom<'deleteSignalingChannel'>) => Promise<ReturnTypeFrom<'deleteSignalingChannel'>>  = async params => {
  // undefined
    return this.client.deleteSignalingChannel(params as any).promise();
  }

  deleteStream: (params: RawParamsFrom<'deleteStream'>) => Promise<ReturnTypeFrom<'deleteStream'>>  = async params => {
  // undefined
    return this.client.deleteStream(params as any).promise();
  }

  describeEdgeConfiguration: (params: RawParamsFrom<'describeEdgeConfiguration'>) => Promise<ReturnTypeFrom<'describeEdgeConfiguration'>>  = async params => {
  // undefined
    return this.client.describeEdgeConfiguration(params as any).promise();
  }

  describeImageGenerationConfiguration: (params: RawParamsFrom<'describeImageGenerationConfiguration'>) => Promise<ReturnTypeFrom<'describeImageGenerationConfiguration'>>  = async params => {
  // undefined
    return this.client.describeImageGenerationConfiguration(params as any).promise();
  }

  async describeMappedResourceConfiguration(params: { [K in keyof ParamsFrom<'describeMappedResourceConfiguration', { next?: string, limit?: number }>]: ParamsFrom<'describeMappedResourceConfiguration', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMappedResourceConfiguration'>]-?: ReturnTypeFrom<'describeMappedResourceConfiguration'>[K]}['MappedResourceConfigurationList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MappedResourceConfigurationList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMappedResourceConfiguration({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMappedResourceConfiguration' })).toString('base64') : undefined;
    const member = (Array.isArray(result.MappedResourceConfigurationList ?? []) ? (result.MappedResourceConfigurationList ?? []) : [result.MappedResourceConfigurationList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeMediaStorageConfiguration: (params: RawParamsFrom<'describeMediaStorageConfiguration'>) => Promise<ReturnTypeFrom<'describeMediaStorageConfiguration'>>  = async params => {
  // undefined
    return this.client.describeMediaStorageConfiguration(params as any).promise();
  }

  describeNotificationConfiguration: (params: RawParamsFrom<'describeNotificationConfiguration'>) => Promise<ReturnTypeFrom<'describeNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.describeNotificationConfiguration(params as any).promise();
  }

  describeSignalingChannel: (params: RawParamsFrom<'describeSignalingChannel'>) => Promise<ReturnTypeFrom<'describeSignalingChannel'>>  = async params => {
  // undefined
    return this.client.describeSignalingChannel(params as any).promise();
  }

  describeStream: (params: RawParamsFrom<'describeStream'>) => Promise<ReturnTypeFrom<'describeStream'>>  = async params => {
  // undefined
    return this.client.describeStream(params as any).promise();
  }

  getDataEndpoint: (params: RawParamsFrom<'getDataEndpoint'>) => Promise<ReturnTypeFrom<'getDataEndpoint'>>  = async params => {
  // undefined
    return this.client.getDataEndpoint(params as any).promise();
  }

  getSignalingChannelEndpoint: (params: RawParamsFrom<'getSignalingChannelEndpoint'>) => Promise<ReturnTypeFrom<'getSignalingChannelEndpoint'>>  = async params => {
  // undefined
    return this.client.getSignalingChannelEndpoint(params as any).promise();
  }

  async listSignalingChannels(params: { [K in keyof ParamsFrom<'listSignalingChannels', { next?: string, limit?: number }>]: ParamsFrom<'listSignalingChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSignalingChannels'>]-?: ReturnTypeFrom<'listSignalingChannels'>[K]}['ChannelInfoList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ChannelInfoList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSignalingChannels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSignalingChannels' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ChannelInfoList ?? []) ? (result.ChannelInfoList ?? []) : [result.ChannelInfoList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStreams(params: { [K in keyof ParamsFrom<'listStreams', { next?: string, limit?: number }>]: ParamsFrom<'listStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['StreamInfoList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StreamInfoList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStreams({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStreams' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StreamInfoList ?? []) ? (result.StreamInfoList ?? []) : [result.StreamInfoList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTagsForStream: (params: RawParamsFrom<'listTagsForStream'>) => Promise<ReturnTypeFrom<'listTagsForStream'>>  = async params => {
  // undefined
    return this.client.listTagsForStream(params as any).promise();
  }

  startEdgeConfigurationUpdate: (params: RawParamsFrom<'startEdgeConfigurationUpdate'>) => Promise<ReturnTypeFrom<'startEdgeConfigurationUpdate'>>  = async params => {
  // undefined
    return this.client.startEdgeConfigurationUpdate(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  tagStream: (params: RawParamsFrom<'tagStream'>) => Promise<ReturnTypeFrom<'tagStream'>>  = async params => {
  // undefined
    return this.client.tagStream(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  untagStream: (params: RawParamsFrom<'untagStream'>) => Promise<ReturnTypeFrom<'untagStream'>>  = async params => {
  // undefined
    return this.client.untagStream(params as any).promise();
  }

  updateDataRetention: (params: RawParamsFrom<'updateDataRetention'>) => Promise<ReturnTypeFrom<'updateDataRetention'>>  = async params => {
  // undefined
    return this.client.updateDataRetention(params as any).promise();
  }

  updateImageGenerationConfiguration: (params: RawParamsFrom<'updateImageGenerationConfiguration'>) => Promise<ReturnTypeFrom<'updateImageGenerationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateImageGenerationConfiguration(params as any).promise();
  }

  updateMediaStorageConfiguration: (params: RawParamsFrom<'updateMediaStorageConfiguration'>) => Promise<ReturnTypeFrom<'updateMediaStorageConfiguration'>>  = async params => {
  // undefined
    return this.client.updateMediaStorageConfiguration(params as any).promise();
  }

  updateNotificationConfiguration: (params: RawParamsFrom<'updateNotificationConfiguration'>) => Promise<ReturnTypeFrom<'updateNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateNotificationConfiguration(params as any).promise();
  }

  updateSignalingChannel: (params: RawParamsFrom<'updateSignalingChannel'>) => Promise<ReturnTypeFrom<'updateSignalingChannel'>>  = async params => {
  // undefined
    return this.client.updateSignalingChannel(params as any).promise();
  }

  updateStream: (params: RawParamsFrom<'updateStream'>) => Promise<ReturnTypeFrom<'updateStream'>>  = async params => {
  // undefined
    return this.client.updateStream(params as any).promise();
  }
  
  static fromClient(client: AWSKinesisVideo): KinesisVideo {
    return new KinesisVideo(client) as any;
  }
  
  static client(options?: AWSKinesisVideo.Types.ClientConfiguration): KinesisVideo {
    return new KinesisVideo(new AWSKinesisVideo(options)) as any;
  }
}  
