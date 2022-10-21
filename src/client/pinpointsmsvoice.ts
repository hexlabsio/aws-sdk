import { Request, PinpointSMSVoice as AWSPinpointSMSVoice } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPinpointSMSVoice> = AWSPinpointSMSVoice[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPinpointSMSVoice> = AWSPinpointSMSVoice[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPinpointSMSVoice[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPinpointSMSVoice, Extras> = AWSPinpointSMSVoice[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPinpointSMSVoice> = AWSPinpointSMSVoice[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class PinpointSMSVoice {
  private constructor(private readonly client: AWSPinpointSMSVoice) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sms-voice' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  createConfigurationSet: (params: RawParamsFrom<'createConfigurationSet'>) => Promise<ReturnTypeFrom<'createConfigurationSet'>>  = async params => {
  // undefined
    return this.client.createConfigurationSet(params as any).promise();
  }

  createConfigurationSetEventDestination: (params: RawParamsFrom<'createConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'createConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.createConfigurationSetEventDestination(params as any).promise();
  }

  deleteConfigurationSet: (params: RawParamsFrom<'deleteConfigurationSet'>) => Promise<ReturnTypeFrom<'deleteConfigurationSet'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSet(params as any).promise();
  }

  deleteConfigurationSetEventDestination: (params: RawParamsFrom<'deleteConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'deleteConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSetEventDestination(params as any).promise();
  }

  getConfigurationSetEventDestinations: (params: RawParamsFrom<'getConfigurationSetEventDestinations'>) => Promise<ReturnTypeFrom<'getConfigurationSetEventDestinations'>>  = async params => {
  // undefined
    return this.client.getConfigurationSetEventDestinations(params as any).promise();
  }

  listConfigurationSets: (params: RawParamsFrom<'listConfigurationSets'>) => Promise<ReturnTypeFrom<'listConfigurationSets'>>  = async params => {
  // undefined
    return this.client.listConfigurationSets(params as any).promise();
  }

  sendVoiceMessage: (params: RawParamsFrom<'sendVoiceMessage'>) => Promise<ReturnTypeFrom<'sendVoiceMessage'>>  = async params => {
  // undefined
    return this.client.sendVoiceMessage(params as any).promise();
  }

  updateConfigurationSetEventDestination: (params: RawParamsFrom<'updateConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'updateConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.updateConfigurationSetEventDestination(params as any).promise();
  }
  
  static fromClient(client: AWSPinpointSMSVoice): PinpointSMSVoice {
    return new PinpointSMSVoice(client) as any;
  }
  
  static client(options?: AWSPinpointSMSVoice.Types.ClientConfiguration): PinpointSMSVoice {
    return new PinpointSMSVoice(new AWSPinpointSMSVoice(options)) as any;
  }
}  
