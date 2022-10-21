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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKinesisVideoArchivedMedia> = AWSKinesisVideoArchivedMedia[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KinesisVideoArchivedMedia {
  private constructor(private readonly client: AWSKinesisVideoArchivedMedia) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listFragments"] as const;
  
  getClip: (params: RawParamsFrom<'getClip'>) => Promise<ReturnTypeFrom<'getClip'>>  = async params => {
  // undefined
    return this.client.getClip(params as any).promise();
  }

  getDASHStreamingSessionURL: (params: RawParamsFrom<'getDASHStreamingSessionURL'>) => Promise<ReturnTypeFrom<'getDASHStreamingSessionURL'>>  = async params => {
  // undefined
    return this.client.getDASHStreamingSessionURL(params as any).promise();
  }

  getHLSStreamingSessionURL: (params: RawParamsFrom<'getHLSStreamingSessionURL'>) => Promise<ReturnTypeFrom<'getHLSStreamingSessionURL'>>  = async params => {
  // undefined
    return this.client.getHLSStreamingSessionURL(params as any).promise();
  }

  async getImages(params: { [K in keyof ParamsFrom<'getImages', { next?: string, limit?: number }>]: ParamsFrom<'getImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getImages'>]-?: ReturnTypeFrom<'getImages'>[K]}['Images'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Images"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Images ?? []) ? (result.Images ?? []) : [result.Images]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  getMediaForFragmentList: (params: RawParamsFrom<'getMediaForFragmentList'>) => Promise<ReturnTypeFrom<'getMediaForFragmentList'>>  = async params => {
  // undefined
    return this.client.getMediaForFragmentList(params as any).promise();
  }

  async listFragments(params: { [K in keyof ParamsFrom<'listFragments', { next?: string, limit?: number }>]: ParamsFrom<'listFragments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFragments'>]-?: ReturnTypeFrom<'listFragments'>[K]}['Fragments'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Fragments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFragments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Fragments ?? []) ? (result.Fragments ?? []) : [result.Fragments]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }
  
  static fromClient(client: AWSKinesisVideoArchivedMedia): KinesisVideoArchivedMedia {
    return new KinesisVideoArchivedMedia(client) as any;
  }
  
  static client(options?: AWSKinesisVideoArchivedMedia.Types.ClientConfiguration): KinesisVideoArchivedMedia {
    return new KinesisVideoArchivedMedia(new AWSKinesisVideoArchivedMedia(options)) as any;
  }
}  
