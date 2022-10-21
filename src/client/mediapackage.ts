import { Request, MediaPackage as AWSMediaPackage } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMediaPackage> = AWSMediaPackage[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMediaPackage> = AWSMediaPackage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMediaPackage[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMediaPackage, Extras> = AWSMediaPackage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMediaPackage> = AWSMediaPackage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MediaPackage {
  private constructor(private readonly client: AWSMediaPackage) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediapackage' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listChannels","listHarvestJobs","listOriginEndpoints"] as const;
  
  configureLogs: (params: RawParamsFrom<'configureLogs'>) => Promise<ReturnTypeFrom<'configureLogs'>>  = async params => {
  // undefined
    return this.client.configureLogs(params as any).promise();
  }

  createChannel: (params: RawParamsFrom<'createChannel'>) => Promise<ReturnTypeFrom<'createChannel'>>  = async params => {
  // undefined
    return this.client.createChannel(params as any).promise();
  }

  createHarvestJob: (params: RawParamsFrom<'createHarvestJob'>) => Promise<ReturnTypeFrom<'createHarvestJob'>>  = async params => {
  // undefined
    return this.client.createHarvestJob(params as any).promise();
  }

  createOriginEndpoint: (params: RawParamsFrom<'createOriginEndpoint'>) => Promise<ReturnTypeFrom<'createOriginEndpoint'>>  = async params => {
  // undefined
    return this.client.createOriginEndpoint(params as any).promise();
  }

  deleteChannel: (params: RawParamsFrom<'deleteChannel'>) => Promise<ReturnTypeFrom<'deleteChannel'>>  = async params => {
  // undefined
    return this.client.deleteChannel(params as any).promise();
  }

  deleteOriginEndpoint: (params: RawParamsFrom<'deleteOriginEndpoint'>) => Promise<ReturnTypeFrom<'deleteOriginEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteOriginEndpoint(params as any).promise();
  }

  describeChannel: (params: RawParamsFrom<'describeChannel'>) => Promise<ReturnTypeFrom<'describeChannel'>>  = async params => {
  // undefined
    return this.client.describeChannel(params as any).promise();
  }

  describeHarvestJob: (params: RawParamsFrom<'describeHarvestJob'>) => Promise<ReturnTypeFrom<'describeHarvestJob'>>  = async params => {
  // undefined
    return this.client.describeHarvestJob(params as any).promise();
  }

  describeOriginEndpoint: (params: RawParamsFrom<'describeOriginEndpoint'>) => Promise<ReturnTypeFrom<'describeOriginEndpoint'>>  = async params => {
  // undefined
    return this.client.describeOriginEndpoint(params as any).promise();
  }

  async listChannels(params: { [K in keyof ParamsFrom<'listChannels', { next?: string, limit?: number }>]: ParamsFrom<'listChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Channels'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Channels"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listChannels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listChannels' })).toString('base64');
    const member = (Array.isArray(result.Channels ?? []) ? (result.Channels ?? []) : [result.Channels]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHarvestJobs(params: { [K in keyof ParamsFrom<'listHarvestJobs', { next?: string, limit?: number }>]: ParamsFrom<'listHarvestJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listHarvestJobs'>]-?: ReturnTypeFrom<'listHarvestJobs'>[K]}['HarvestJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HarvestJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHarvestJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listHarvestJobs' })).toString('base64');
    const member = (Array.isArray(result.HarvestJobs ?? []) ? (result.HarvestJobs ?? []) : [result.HarvestJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOriginEndpoints(params: { [K in keyof ParamsFrom<'listOriginEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'listOriginEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOriginEndpoints'>]-?: ReturnTypeFrom<'listOriginEndpoints'>[K]}['OriginEndpoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OriginEndpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOriginEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOriginEndpoints' })).toString('base64');
    const member = (Array.isArray(result.OriginEndpoints ?? []) ? (result.OriginEndpoints ?? []) : [result.OriginEndpoints]) as any;
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

  rotateChannelCredentials: (params: RawParamsFrom<'rotateChannelCredentials'>) => Promise<ReturnTypeFrom<'rotateChannelCredentials'>>  = async params => {
  // undefined
    return this.client.rotateChannelCredentials(params as any).promise();
  }

  rotateIngestEndpointCredentials: (params: RawParamsFrom<'rotateIngestEndpointCredentials'>) => Promise<ReturnTypeFrom<'rotateIngestEndpointCredentials'>>  = async params => {
  // undefined
    return this.client.rotateIngestEndpointCredentials(params as any).promise();
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

  updateOriginEndpoint: (params: RawParamsFrom<'updateOriginEndpoint'>) => Promise<ReturnTypeFrom<'updateOriginEndpoint'>>  = async params => {
  // undefined
    return this.client.updateOriginEndpoint(params as any).promise();
  }
  
  static fromClient(client: AWSMediaPackage): MediaPackage {
    return new MediaPackage(client) as any;
  }
  
  static client(options?: AWSMediaPackage.Types.ClientConfiguration): MediaPackage {
    return new MediaPackage(new AWSMediaPackage(options)) as any;
  }
}  
