import { Request, MediaTailor as AWSMediaTailor } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMediaTailor> = AWSMediaTailor[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMediaTailor> = AWSMediaTailor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMediaTailor[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMediaTailor, Extras> = AWSMediaTailor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mediatailor';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listChannels","listPlaybackConfigurations","listSourceLocations"];
    
  configureLogsForPlaybackConfiguration: FunctionTypeFrom<'configureLogsForPlaybackConfiguration'>;

  createChannel: FunctionTypeFrom<'createChannel'>;

  createLiveSource: FunctionTypeFrom<'createLiveSource'>;

  createPrefetchSchedule: FunctionTypeFrom<'createPrefetchSchedule'>;

  createProgram: FunctionTypeFrom<'createProgram'>;

  createSourceLocation: FunctionTypeFrom<'createSourceLocation'>;

  createVodSource: FunctionTypeFrom<'createVodSource'>;

  deleteChannel: FunctionTypeFrom<'deleteChannel'>;

  deleteChannelPolicy: FunctionTypeFrom<'deleteChannelPolicy'>;

  deleteLiveSource: FunctionTypeFrom<'deleteLiveSource'>;

  deletePlaybackConfiguration: FunctionTypeFrom<'deletePlaybackConfiguration'>;

  deletePrefetchSchedule: FunctionTypeFrom<'deletePrefetchSchedule'>;

  deleteProgram: FunctionTypeFrom<'deleteProgram'>;

  deleteSourceLocation: FunctionTypeFrom<'deleteSourceLocation'>;

  deleteVodSource: FunctionTypeFrom<'deleteVodSource'>;

  describeChannel: FunctionTypeFrom<'describeChannel'>;

  describeLiveSource: FunctionTypeFrom<'describeLiveSource'>;

  describeProgram: FunctionTypeFrom<'describeProgram'>;

  describeSourceLocation: FunctionTypeFrom<'describeSourceLocation'>;

  describeVodSource: FunctionTypeFrom<'describeVodSource'>;

  getChannelPolicy: FunctionTypeFrom<'getChannelPolicy'>;

  getChannelSchedule(params: { [K in keyof Omit<ParamsFrom<'getChannelSchedule', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getChannelSchedule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getChannelSchedule'>]-?: ReturnTypeFrom<'getChannelSchedule'>[K]}['Items'] }>
  ;

  getPlaybackConfiguration: FunctionTypeFrom<'getPlaybackConfiguration'>;

  getPrefetchSchedule: FunctionTypeFrom<'getPrefetchSchedule'>;

  listAlerts(params: { [K in keyof Omit<ParamsFrom<'listAlerts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAlerts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAlerts'>]-?: ReturnTypeFrom<'listAlerts'>[K]}['Items'] }>
  ;

  listChannels(params: { [K in keyof Omit<ParamsFrom<'listChannels', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Items'] }>
  listChannels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Items'] }>;

  listLiveSources(params: { [K in keyof Omit<ParamsFrom<'listLiveSources', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listLiveSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLiveSources'>]-?: ReturnTypeFrom<'listLiveSources'>[K]}['Items'] }>
  ;

  listPlaybackConfigurations(params: { [K in keyof Omit<ParamsFrom<'listPlaybackConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPlaybackConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlaybackConfigurations'>]-?: ReturnTypeFrom<'listPlaybackConfigurations'>[K]}['Items'] }>
  listPlaybackConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlaybackConfigurations'>]-?: ReturnTypeFrom<'listPlaybackConfigurations'>[K]}['Items'] }>;

  listPrefetchSchedules(params: { [K in keyof Omit<ParamsFrom<'listPrefetchSchedules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPrefetchSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPrefetchSchedules'>]-?: ReturnTypeFrom<'listPrefetchSchedules'>[K]}['Items'] }>
  ;

  listSourceLocations(params: { [K in keyof Omit<ParamsFrom<'listSourceLocations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSourceLocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSourceLocations'>]-?: ReturnTypeFrom<'listSourceLocations'>[K]}['Items'] }>
  listSourceLocations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSourceLocations'>]-?: ReturnTypeFrom<'listSourceLocations'>[K]}['Items'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listVodSources(params: { [K in keyof Omit<ParamsFrom<'listVodSources', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listVodSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVodSources'>]-?: ReturnTypeFrom<'listVodSources'>[K]}['Items'] }>
  ;

  putChannelPolicy: FunctionTypeFrom<'putChannelPolicy'>;

  putPlaybackConfiguration: FunctionTypeFrom<'putPlaybackConfiguration'>;

  startChannel: FunctionTypeFrom<'startChannel'>;

  stopChannel: FunctionTypeFrom<'stopChannel'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateChannel: FunctionTypeFrom<'updateChannel'>;

  updateLiveSource: FunctionTypeFrom<'updateLiveSource'>;

  updateSourceLocation: FunctionTypeFrom<'updateSourceLocation'>;

  updateVodSource: FunctionTypeFrom<'updateVodSource'>
}
 
export class MediaTailor implements ClientType {
  private constructor(private readonly client: AWSMediaTailor) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediatailor';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listChannels","listPlaybackConfigurations","listSourceLocations"] as const;
  
  async configureLogsForPlaybackConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.configureLogsForPlaybackConfiguration(...args).promise()
  }

  async createChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createChannel(...args).promise()
  }

  async createLiveSource(...args: any): Promise<any> {
  // undefined
    return this.client.createLiveSource(...args).promise()
  }

  async createPrefetchSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.createPrefetchSchedule(...args).promise()
  }

  async createProgram(...args: any): Promise<any> {
  // undefined
    return this.client.createProgram(...args).promise()
  }

  async createSourceLocation(...args: any): Promise<any> {
  // undefined
    return this.client.createSourceLocation(...args).promise()
  }

  async createVodSource(...args: any): Promise<any> {
  // undefined
    return this.client.createVodSource(...args).promise()
  }

  async deleteChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannel(...args).promise()
  }

  async deleteChannelPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelPolicy(...args).promise()
  }

  async deleteLiveSource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLiveSource(...args).promise()
  }

  async deletePlaybackConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deletePlaybackConfiguration(...args).promise()
  }

  async deletePrefetchSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.deletePrefetchSchedule(...args).promise()
  }

  async deleteProgram(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProgram(...args).promise()
  }

  async deleteSourceLocation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSourceLocation(...args).promise()
  }

  async deleteVodSource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVodSource(...args).promise()
  }

  async describeChannel(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannel(...args).promise()
  }

  async describeLiveSource(...args: any): Promise<any> {
  // undefined
    return this.client.describeLiveSource(...args).promise()
  }

  async describeProgram(...args: any): Promise<any> {
  // undefined
    return this.client.describeProgram(...args).promise()
  }

  async describeSourceLocation(...args: any): Promise<any> {
  // undefined
    return this.client.describeSourceLocation(...args).promise()
  }

  async describeVodSource(...args: any): Promise<any> {
  // undefined
    return this.client.describeVodSource(...args).promise()
  }

  async getChannelPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getChannelPolicy(...args).promise()
  }

  async getChannelSchedule(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getChannelSchedule(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getPlaybackConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getPlaybackConfiguration(...args).promise()
  }

  async getPrefetchSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.getPrefetchSchedule(...args).promise()
  }

  async listAlerts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAlerts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listChannels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listChannels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLiveSources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLiveSources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPlaybackConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPlaybackConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPrefetchSchedules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPrefetchSchedules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSourceLocations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSourceLocations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
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

  async listVodSources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listVodSources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putChannelPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putChannelPolicy(...args).promise()
  }

  async putPlaybackConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putPlaybackConfiguration(...args).promise()
  }

  async startChannel(...args: any): Promise<any> {
  // undefined
    return this.client.startChannel(...args).promise()
  }

  async stopChannel(...args: any): Promise<any> {
  // undefined
    return this.client.stopChannel(...args).promise()
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

  async updateLiveSource(...args: any): Promise<any> {
  // undefined
    return this.client.updateLiveSource(...args).promise()
  }

  async updateSourceLocation(...args: any): Promise<any> {
  // undefined
    return this.client.updateSourceLocation(...args).promise()
  }

  async updateVodSource(...args: any): Promise<any> {
  // undefined
    return this.client.updateVodSource(...args).promise()
  }
  
  static fromClient(client: AWSMediaTailor): ClientType {
    return new MediaTailor(client) as any;
  }
  
  static client(options?: AWSMediaTailor.Types.ClientConfiguration): ClientType {
    return new MediaTailor(new AWSMediaTailor(options)) as any;
  }
}  
