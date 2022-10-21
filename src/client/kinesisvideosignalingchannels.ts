import { Request, KinesisVideoSignalingChannels as AWSKinesisVideoSignalingChannels } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKinesisVideoSignalingChannels> = AWSKinesisVideoSignalingChannels[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKinesisVideoSignalingChannels> = AWSKinesisVideoSignalingChannels[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKinesisVideoSignalingChannels[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKinesisVideoSignalingChannels, Extras> = AWSKinesisVideoSignalingChannels[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKinesisVideoSignalingChannels> = AWSKinesisVideoSignalingChannels[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KinesisVideoSignalingChannels {
  private constructor(private readonly client: AWSKinesisVideoSignalingChannels) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = [] as const;
  
  getIceServerConfig: (params: RawParamsFrom<'getIceServerConfig'>) => Promise<ReturnTypeFrom<'getIceServerConfig'>>  = async params => {
  // undefined
    return this.client.getIceServerConfig(params as any).promise();
  }

  sendAlexaOfferToMaster: (params: RawParamsFrom<'sendAlexaOfferToMaster'>) => Promise<ReturnTypeFrom<'sendAlexaOfferToMaster'>>  = async params => {
  // undefined
    return this.client.sendAlexaOfferToMaster(params as any).promise();
  }
  
  static fromClient(client: AWSKinesisVideoSignalingChannels): KinesisVideoSignalingChannels {
    return new KinesisVideoSignalingChannels(client) as any;
  }
  
  static client(options?: AWSKinesisVideoSignalingChannels.Types.ClientConfiguration): KinesisVideoSignalingChannels {
    return new KinesisVideoSignalingChannels(new AWSKinesisVideoSignalingChannels(options)) as any;
  }
}  
