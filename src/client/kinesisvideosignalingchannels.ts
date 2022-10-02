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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kinesisvideo';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly [];
    
  getIceServerConfig: FunctionTypeFrom<'getIceServerConfig'>;

  sendAlexaOfferToMaster: FunctionTypeFrom<'sendAlexaOfferToMaster'>
}
 
export class KinesisVideoSignalingChannels implements ClientType {
  private constructor(private readonly client: AWSKinesisVideoSignalingChannels) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisvideo';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = [] as const;
  
  async getIceServerConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getIceServerConfig(...args).promise()
  }

  async sendAlexaOfferToMaster(...args: any): Promise<any> {
  // undefined
    return this.client.sendAlexaOfferToMaster(...args).promise()
  }
  
  static fromClient(client: AWSKinesisVideoSignalingChannels): ClientType {
    return new KinesisVideoSignalingChannels(client) as any;
  }
  
  static client(options?: AWSKinesisVideoSignalingChannels.Types.ClientConfiguration): ClientType {
    return new KinesisVideoSignalingChannels(new AWSKinesisVideoSignalingChannels(options)) as any;
  }
}  
