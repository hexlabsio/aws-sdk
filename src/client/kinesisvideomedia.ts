import { Request, KinesisVideoMedia as AWSKinesisVideoMedia } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKinesisVideoMedia> = AWSKinesisVideoMedia[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKinesisVideoMedia> = AWSKinesisVideoMedia[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKinesisVideoMedia[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKinesisVideoMedia, Extras> = AWSKinesisVideoMedia[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKinesisVideoMedia> = AWSKinesisVideoMedia[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KinesisVideoMedia {
  private constructor(private readonly client: AWSKinesisVideoMedia) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = [] as const;
  
  getMedia: (params: RawParamsFrom<'getMedia'>) => Promise<ReturnTypeFrom<'getMedia'>>  = async params => {
  // undefined
    return this.client.getMedia(params as any).promise();
  }
  
  static fromClient(client: AWSKinesisVideoMedia): KinesisVideoMedia {
    return new KinesisVideoMedia(client) as any;
  }
  
  static client(options?: AWSKinesisVideoMedia.Types.ClientConfiguration): KinesisVideoMedia {
    return new KinesisVideoMedia(new AWSKinesisVideoMedia(options)) as any;
  }
}  
