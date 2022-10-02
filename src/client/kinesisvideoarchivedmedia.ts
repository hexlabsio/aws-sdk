import { Request, KinesisVideoArchivedMedia as AWSKinesisVideoArchivedMedia } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKinesisVideoArchivedMedia> = AWSKinesisVideoArchivedMedia[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKinesisVideoArchivedMedia> = AWSKinesisVideoArchivedMedia[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKinesisVideoArchivedMedia[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKinesisVideoArchivedMedia, Extras> = AWSKinesisVideoArchivedMedia[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kinesisvideo';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listFragments"];
    
  getClip: FunctionTypeFrom<'getClip'>;

  getDASHStreamingSessionURL: FunctionTypeFrom<'getDASHStreamingSessionURL'>;

  getHLSStreamingSessionURL: FunctionTypeFrom<'getHLSStreamingSessionURL'>;

  getImages(params: { [K in keyof Omit<ParamsFrom<'getImages', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getImages'>]-?: ReturnTypeFrom<'getImages'>[K]}['Images'] }>
  ;

  getMediaForFragmentList: FunctionTypeFrom<'getMediaForFragmentList'>;

  listFragments(params: { [K in keyof Omit<ParamsFrom<'listFragments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFragments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFragments'>]-?: ReturnTypeFrom<'listFragments'>[K]}['Fragments'] }>
  listFragments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFragments'>]-?: ReturnTypeFrom<'listFragments'>[K]}['Fragments'] }>
}
 
export class KinesisVideoArchivedMedia implements ClientType {
  private constructor(private readonly client: AWSKinesisVideoArchivedMedia) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listFragments"] as const;
  
  async getClip(...args: any): Promise<any> {
  // undefined
    return this.client.getClip(...args).promise()
  }

  async getDASHStreamingSessionURL(...args: any): Promise<any> {
  // undefined
    return this.client.getDASHStreamingSessionURL(...args).promise()
  }

  async getHLSStreamingSessionURL(...args: any): Promise<any> {
  // undefined
    return this.client.getHLSStreamingSessionURL(...args).promise()
  }

  async getImages(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Images"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Images ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getMediaForFragmentList(...args: any): Promise<any> {
  // undefined
    return this.client.getMediaForFragmentList(...args).promise()
  }

  async listFragments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Fragments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFragments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Fragments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSKinesisVideoArchivedMedia): ClientType {
    return new KinesisVideoArchivedMedia(client) as any;
  }
  
  static client(options?: AWSKinesisVideoArchivedMedia.Types.ClientConfiguration): ClientType {
    return new KinesisVideoArchivedMedia(new AWSKinesisVideoArchivedMedia(options)) as any;
  }
}  
