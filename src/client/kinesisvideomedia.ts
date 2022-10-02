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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kinesisvideo';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly [];
    
  getMedia: FunctionTypeFrom<'getMedia'>
}
 
export class KinesisVideoMedia implements ClientType {
  private constructor(private readonly client: AWSKinesisVideoMedia) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = [] as const;
  
  async getMedia(...args: any): Promise<any> {
  // undefined
    return this.client.getMedia(...args).promise()
  }
  
  static fromClient(client: AWSKinesisVideoMedia): ClientType {
    return new KinesisVideoMedia(client) as any;
  }
  
  static client(options?: AWSKinesisVideoMedia.Types.ClientConfiguration): ClientType {
    return new KinesisVideoMedia(new AWSKinesisVideoMedia(options)) as any;
  }
}  
