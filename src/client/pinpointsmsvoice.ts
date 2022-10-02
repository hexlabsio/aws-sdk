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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sms-voice';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  createConfigurationSet: FunctionTypeFrom<'createConfigurationSet'>;

  createConfigurationSetEventDestination: FunctionTypeFrom<'createConfigurationSetEventDestination'>;

  deleteConfigurationSet: FunctionTypeFrom<'deleteConfigurationSet'>;

  deleteConfigurationSetEventDestination: FunctionTypeFrom<'deleteConfigurationSetEventDestination'>;

  getConfigurationSetEventDestinations: FunctionTypeFrom<'getConfigurationSetEventDestinations'>;

  listConfigurationSets: FunctionTypeFrom<'listConfigurationSets'>;

  sendVoiceMessage: FunctionTypeFrom<'sendVoiceMessage'>;

  updateConfigurationSetEventDestination: FunctionTypeFrom<'updateConfigurationSetEventDestination'>
}
 
export class PinpointSMSVoice implements ClientType {
  private constructor(private readonly client: AWSPinpointSMSVoice) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sms-voice';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async createConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSet(...args).promise()
  }

  async createConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSetEventDestination(...args).promise()
  }

  async deleteConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSet(...args).promise()
  }

  async deleteConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSetEventDestination(...args).promise()
  }

  async getConfigurationSetEventDestinations(...args: any): Promise<any> {
  // undefined
    return this.client.getConfigurationSetEventDestinations(...args).promise()
  }

  async listConfigurationSets(...args: any): Promise<any> {
  // undefined
    return this.client.listConfigurationSets(...args).promise()
  }

  async sendVoiceMessage(...args: any): Promise<any> {
  // undefined
    return this.client.sendVoiceMessage(...args).promise()
  }

  async updateConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationSetEventDestination(...args).promise()
  }
  
  static fromClient(client: AWSPinpointSMSVoice): ClientType {
    return new PinpointSMSVoice(client) as any;
  }
  
  static client(options?: AWSPinpointSMSVoice.Types.ClientConfiguration): ClientType {
    return new PinpointSMSVoice(new AWSPinpointSMSVoice(options)) as any;
  }
}  
