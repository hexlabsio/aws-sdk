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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMediaTailor> = AWSMediaTailor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MediaTailor {
  private constructor(private readonly client: AWSMediaTailor) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediatailor' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listChannels","listPlaybackConfigurations","listSourceLocations"] as const;
  
  configureLogsForPlaybackConfiguration: (params: RawParamsFrom<'configureLogsForPlaybackConfiguration'>) => Promise<ReturnTypeFrom<'configureLogsForPlaybackConfiguration'>>  = async params => {
  // undefined
    return this.client.configureLogsForPlaybackConfiguration(params as any).promise();
  }

  createChannel: (params: RawParamsFrom<'createChannel'>) => Promise<ReturnTypeFrom<'createChannel'>>  = async params => {
  // undefined
    return this.client.createChannel(params as any).promise();
  }

  createLiveSource: (params: RawParamsFrom<'createLiveSource'>) => Promise<ReturnTypeFrom<'createLiveSource'>>  = async params => {
  // undefined
    return this.client.createLiveSource(params as any).promise();
  }

  createPrefetchSchedule: (params: RawParamsFrom<'createPrefetchSchedule'>) => Promise<ReturnTypeFrom<'createPrefetchSchedule'>>  = async params => {
  // undefined
    return this.client.createPrefetchSchedule(params as any).promise();
  }

  createProgram: (params: RawParamsFrom<'createProgram'>) => Promise<ReturnTypeFrom<'createProgram'>>  = async params => {
  // undefined
    return this.client.createProgram(params as any).promise();
  }

  createSourceLocation: (params: RawParamsFrom<'createSourceLocation'>) => Promise<ReturnTypeFrom<'createSourceLocation'>>  = async params => {
  // undefined
    return this.client.createSourceLocation(params as any).promise();
  }

  createVodSource: (params: RawParamsFrom<'createVodSource'>) => Promise<ReturnTypeFrom<'createVodSource'>>  = async params => {
  // undefined
    return this.client.createVodSource(params as any).promise();
  }

  deleteChannel: (params: RawParamsFrom<'deleteChannel'>) => Promise<ReturnTypeFrom<'deleteChannel'>>  = async params => {
  // undefined
    return this.client.deleteChannel(params as any).promise();
  }

  deleteChannelPolicy: (params: RawParamsFrom<'deleteChannelPolicy'>) => Promise<ReturnTypeFrom<'deleteChannelPolicy'>>  = async params => {
  // undefined
    return this.client.deleteChannelPolicy(params as any).promise();
  }

  deleteLiveSource: (params: RawParamsFrom<'deleteLiveSource'>) => Promise<ReturnTypeFrom<'deleteLiveSource'>>  = async params => {
  // undefined
    return this.client.deleteLiveSource(params as any).promise();
  }

  deletePlaybackConfiguration: (params: RawParamsFrom<'deletePlaybackConfiguration'>) => Promise<ReturnTypeFrom<'deletePlaybackConfiguration'>>  = async params => {
  // undefined
    return this.client.deletePlaybackConfiguration(params as any).promise();
  }

  deletePrefetchSchedule: (params: RawParamsFrom<'deletePrefetchSchedule'>) => Promise<ReturnTypeFrom<'deletePrefetchSchedule'>>  = async params => {
  // undefined
    return this.client.deletePrefetchSchedule(params as any).promise();
  }

  deleteProgram: (params: RawParamsFrom<'deleteProgram'>) => Promise<ReturnTypeFrom<'deleteProgram'>>  = async params => {
  // undefined
    return this.client.deleteProgram(params as any).promise();
  }

  deleteSourceLocation: (params: RawParamsFrom<'deleteSourceLocation'>) => Promise<ReturnTypeFrom<'deleteSourceLocation'>>  = async params => {
  // undefined
    return this.client.deleteSourceLocation(params as any).promise();
  }

  deleteVodSource: (params: RawParamsFrom<'deleteVodSource'>) => Promise<ReturnTypeFrom<'deleteVodSource'>>  = async params => {
  // undefined
    return this.client.deleteVodSource(params as any).promise();
  }

  describeChannel: (params: RawParamsFrom<'describeChannel'>) => Promise<ReturnTypeFrom<'describeChannel'>>  = async params => {
  // undefined
    return this.client.describeChannel(params as any).promise();
  }

  describeLiveSource: (params: RawParamsFrom<'describeLiveSource'>) => Promise<ReturnTypeFrom<'describeLiveSource'>>  = async params => {
  // undefined
    return this.client.describeLiveSource(params as any).promise();
  }

  describeProgram: (params: RawParamsFrom<'describeProgram'>) => Promise<ReturnTypeFrom<'describeProgram'>>  = async params => {
  // undefined
    return this.client.describeProgram(params as any).promise();
  }

  describeSourceLocation: (params: RawParamsFrom<'describeSourceLocation'>) => Promise<ReturnTypeFrom<'describeSourceLocation'>>  = async params => {
  // undefined
    return this.client.describeSourceLocation(params as any).promise();
  }

  describeVodSource: (params: RawParamsFrom<'describeVodSource'>) => Promise<ReturnTypeFrom<'describeVodSource'>>  = async params => {
  // undefined
    return this.client.describeVodSource(params as any).promise();
  }

  getChannelPolicy: (params: RawParamsFrom<'getChannelPolicy'>) => Promise<ReturnTypeFrom<'getChannelPolicy'>>  = async params => {
  // undefined
    return this.client.getChannelPolicy(params as any).promise();
  }

  async getChannelSchedule(params: { [K in keyof ParamsFrom<'getChannelSchedule', { next?: string, limit?: number }>]: ParamsFrom<'getChannelSchedule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getChannelSchedule'>]-?: ReturnTypeFrom<'getChannelSchedule'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getChannelSchedule({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getChannelSchedule' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getPlaybackConfiguration: (params: RawParamsFrom<'getPlaybackConfiguration'>) => Promise<ReturnTypeFrom<'getPlaybackConfiguration'>>  = async params => {
  // undefined
    return this.client.getPlaybackConfiguration(params as any).promise();
  }

  getPrefetchSchedule: (params: RawParamsFrom<'getPrefetchSchedule'>) => Promise<ReturnTypeFrom<'getPrefetchSchedule'>>  = async params => {
  // undefined
    return this.client.getPrefetchSchedule(params as any).promise();
  }

  async listAlerts(params: { [K in keyof ParamsFrom<'listAlerts', { next?: string, limit?: number }>]: ParamsFrom<'listAlerts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAlerts'>]-?: ReturnTypeFrom<'listAlerts'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAlerts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAlerts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listChannels(params: { [K in keyof ParamsFrom<'listChannels', { next?: string, limit?: number }>]: ParamsFrom<'listChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listChannels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listChannels' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLiveSources(params: { [K in keyof ParamsFrom<'listLiveSources', { next?: string, limit?: number }>]: ParamsFrom<'listLiveSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLiveSources'>]-?: ReturnTypeFrom<'listLiveSources'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLiveSources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLiveSources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPlaybackConfigurations(params: { [K in keyof ParamsFrom<'listPlaybackConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'listPlaybackConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPlaybackConfigurations'>]-?: ReturnTypeFrom<'listPlaybackConfigurations'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPlaybackConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPlaybackConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPrefetchSchedules(params: { [K in keyof ParamsFrom<'listPrefetchSchedules', { next?: string, limit?: number }>]: ParamsFrom<'listPrefetchSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPrefetchSchedules'>]-?: ReturnTypeFrom<'listPrefetchSchedules'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPrefetchSchedules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPrefetchSchedules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSourceLocations(params: { [K in keyof ParamsFrom<'listSourceLocations', { next?: string, limit?: number }>]: ParamsFrom<'listSourceLocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSourceLocations'>]-?: ReturnTypeFrom<'listSourceLocations'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSourceLocations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSourceLocations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
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

  async listVodSources(params: { [K in keyof ParamsFrom<'listVodSources', { next?: string, limit?: number }>]: ParamsFrom<'listVodSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVodSources'>]-?: ReturnTypeFrom<'listVodSources'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listVodSources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listVodSources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putChannelPolicy: (params: RawParamsFrom<'putChannelPolicy'>) => Promise<ReturnTypeFrom<'putChannelPolicy'>>  = async params => {
  // undefined
    return this.client.putChannelPolicy(params as any).promise();
  }

  putPlaybackConfiguration: (params: RawParamsFrom<'putPlaybackConfiguration'>) => Promise<ReturnTypeFrom<'putPlaybackConfiguration'>>  = async params => {
  // undefined
    return this.client.putPlaybackConfiguration(params as any).promise();
  }

  startChannel: (params: RawParamsFrom<'startChannel'>) => Promise<ReturnTypeFrom<'startChannel'>>  = async params => {
  // undefined
    return this.client.startChannel(params as any).promise();
  }

  stopChannel: (params: RawParamsFrom<'stopChannel'>) => Promise<ReturnTypeFrom<'stopChannel'>>  = async params => {
  // undefined
    return this.client.stopChannel(params as any).promise();
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

  updateLiveSource: (params: RawParamsFrom<'updateLiveSource'>) => Promise<ReturnTypeFrom<'updateLiveSource'>>  = async params => {
  // undefined
    return this.client.updateLiveSource(params as any).promise();
  }

  updateSourceLocation: (params: RawParamsFrom<'updateSourceLocation'>) => Promise<ReturnTypeFrom<'updateSourceLocation'>>  = async params => {
  // undefined
    return this.client.updateSourceLocation(params as any).promise();
  }

  updateVodSource: (params: RawParamsFrom<'updateVodSource'>) => Promise<ReturnTypeFrom<'updateVodSource'>>  = async params => {
  // undefined
    return this.client.updateVodSource(params as any).promise();
  }
  
  static fromClient(client: AWSMediaTailor): MediaTailor {
    return new MediaTailor(client) as any;
  }
  
  static client(options?: AWSMediaTailor.Types.ClientConfiguration): MediaTailor {
    return new MediaTailor(new AWSMediaTailor(options)) as any;
  }
}  
