import { Request, KinesisVideoWebRTCStorage as AWSKinesisVideoWebRTCStorage } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKinesisVideoWebRTCStorage> = AWSKinesisVideoWebRTCStorage[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKinesisVideoWebRTCStorage> = AWSKinesisVideoWebRTCStorage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKinesisVideoWebRTCStorage[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKinesisVideoWebRTCStorage, Extras> = AWSKinesisVideoWebRTCStorage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKinesisVideoWebRTCStorage> = AWSKinesisVideoWebRTCStorage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KinesisVideoWebRTCStorage {
  private constructor(private readonly client: AWSKinesisVideoWebRTCStorage) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = [] as const;
  
  joinStorageSession: (params: RawParamsFrom<'joinStorageSession'>) => Promise<ReturnTypeFrom<'joinStorageSession'>>  = async params => {
  // undefined
    return this.client.joinStorageSession(params as any).promise();
  }
  
  static fromClient(client: AWSKinesisVideoWebRTCStorage): KinesisVideoWebRTCStorage {
    return new KinesisVideoWebRTCStorage(client) as any;
  }
  
  static client(options?: AWSKinesisVideoWebRTCStorage.Types.ClientConfiguration): KinesisVideoWebRTCStorage {
    return new KinesisVideoWebRTCStorage(new AWSKinesisVideoWebRTCStorage(options)) as any;
  }
}  
