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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mediapackage';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listChannels","listHarvestJobs","listOriginEndpoints"];
    
  configureLogs: FunctionTypeFrom<'configureLogs'>;

  createChannel: FunctionTypeFrom<'createChannel'>;

  createHarvestJob: FunctionTypeFrom<'createHarvestJob'>;

  createOriginEndpoint: FunctionTypeFrom<'createOriginEndpoint'>;

  deleteChannel: FunctionTypeFrom<'deleteChannel'>;

  deleteOriginEndpoint: FunctionTypeFrom<'deleteOriginEndpoint'>;

  describeChannel: FunctionTypeFrom<'describeChannel'>;

  describeHarvestJob: FunctionTypeFrom<'describeHarvestJob'>;

  describeOriginEndpoint: FunctionTypeFrom<'describeOriginEndpoint'>;

  listChannels(params: { [K in keyof Omit<ParamsFrom<'listChannels', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Channels'] }>
  listChannels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listChannels'>]-?: ReturnTypeFrom<'listChannels'>[K]}['Channels'] }>;

  listHarvestJobs(params: { [K in keyof Omit<ParamsFrom<'listHarvestJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listHarvestJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHarvestJobs'>]-?: ReturnTypeFrom<'listHarvestJobs'>[K]}['HarvestJobs'] }>
  listHarvestJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHarvestJobs'>]-?: ReturnTypeFrom<'listHarvestJobs'>[K]}['HarvestJobs'] }>;

  listOriginEndpoints(params: { [K in keyof Omit<ParamsFrom<'listOriginEndpoints', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOriginEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOriginEndpoints'>]-?: ReturnTypeFrom<'listOriginEndpoints'>[K]}['OriginEndpoints'] }>
  listOriginEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOriginEndpoints'>]-?: ReturnTypeFrom<'listOriginEndpoints'>[K]}['OriginEndpoints'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  rotateChannelCredentials: FunctionTypeFrom<'rotateChannelCredentials'>;

  rotateIngestEndpointCredentials: FunctionTypeFrom<'rotateIngestEndpointCredentials'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateChannel: FunctionTypeFrom<'updateChannel'>;

  updateOriginEndpoint: FunctionTypeFrom<'updateOriginEndpoint'>
}
 
export class MediaPackage implements ClientType {
  private constructor(private readonly client: AWSMediaPackage) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediapackage';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listChannels","listHarvestJobs","listOriginEndpoints"] as const;
  
  async configureLogs(...args: any): Promise<any> {
  // undefined
    return this.client.configureLogs(...args).promise()
  }

  async createChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createChannel(...args).promise()
  }

  async createHarvestJob(...args: any): Promise<any> {
  // undefined
    return this.client.createHarvestJob(...args).promise()
  }

  async createOriginEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createOriginEndpoint(...args).promise()
  }

  async deleteChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannel(...args).promise()
  }

  async deleteOriginEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOriginEndpoint(...args).promise()
  }

  async describeChannel(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannel(...args).promise()
  }

  async describeHarvestJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeHarvestJob(...args).promise()
  }

  async describeOriginEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.describeOriginEndpoint(...args).promise()
  }

  async listChannels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Channels"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listChannels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Channels ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHarvestJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HarvestJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHarvestJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.HarvestJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOriginEndpoints(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OriginEndpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOriginEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OriginEndpoints ?? [];
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

  async rotateChannelCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.rotateChannelCredentials(...args).promise()
  }

  async rotateIngestEndpointCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.rotateIngestEndpointCredentials(...args).promise()
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

  async updateOriginEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.updateOriginEndpoint(...args).promise()
  }
  
  static fromClient(client: AWSMediaPackage): ClientType {
    return new MediaPackage(client) as any;
  }
  
  static client(options?: AWSMediaPackage.Types.ClientConfiguration): ClientType {
    return new MediaPackage(new AWSMediaPackage(options)) as any;
  }
}  
