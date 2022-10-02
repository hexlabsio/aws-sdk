import { Request, IoT1ClickDevicesService as AWSIoT1ClickDevicesService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoT1ClickDevicesService> = AWSIoT1ClickDevicesService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoT1ClickDevicesService> = AWSIoT1ClickDevicesService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoT1ClickDevicesService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoT1ClickDevicesService, Extras> = AWSIoT1ClickDevicesService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'devices';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  claimDevicesByClaimCode: FunctionTypeFrom<'claimDevicesByClaimCode'>;

  describeDevice: FunctionTypeFrom<'describeDevice'>;

  finalizeDeviceClaim: FunctionTypeFrom<'finalizeDeviceClaim'>;

  getDeviceMethods: FunctionTypeFrom<'getDeviceMethods'>;

  initiateDeviceClaim: FunctionTypeFrom<'initiateDeviceClaim'>;

  invokeDeviceMethod: FunctionTypeFrom<'invokeDeviceMethod'>;

  listDeviceEvents: FunctionTypeFrom<'listDeviceEvents'>;

  listDevices: FunctionTypeFrom<'listDevices'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  unclaimDevice: FunctionTypeFrom<'unclaimDevice'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDeviceState: FunctionTypeFrom<'updateDeviceState'>
}
 
export class IoT1ClickDevicesService implements ClientType {
  private constructor(private readonly client: AWSIoT1ClickDevicesService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'devices';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async claimDevicesByClaimCode(...args: any): Promise<any> {
  // undefined
    return this.client.claimDevicesByClaimCode(...args).promise()
  }

  async describeDevice(...args: any): Promise<any> {
  // undefined
    return this.client.describeDevice(...args).promise()
  }

  async finalizeDeviceClaim(...args: any): Promise<any> {
  // undefined
    return this.client.finalizeDeviceClaim(...args).promise()
  }

  async getDeviceMethods(...args: any): Promise<any> {
  // undefined
    return this.client.getDeviceMethods(...args).promise()
  }

  async initiateDeviceClaim(...args: any): Promise<any> {
  // undefined
    return this.client.initiateDeviceClaim(...args).promise()
  }

  async invokeDeviceMethod(...args: any): Promise<any> {
  // undefined
    return this.client.invokeDeviceMethod(...args).promise()
  }

  async listDeviceEvents(...args: any): Promise<any> {
  // undefined
    return this.client.listDeviceEvents(...args).promise()
  }

  async listDevices(...args: any): Promise<any> {
  // undefined
    return this.client.listDevices(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async unclaimDevice(...args: any): Promise<any> {
  // undefined
    return this.client.unclaimDevice(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDeviceState(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeviceState(...args).promise()
  }
  
  static fromClient(client: AWSIoT1ClickDevicesService): ClientType {
    return new IoT1ClickDevicesService(client) as any;
  }
  
  static client(options?: AWSIoT1ClickDevicesService.Types.ClientConfiguration): ClientType {
    return new IoT1ClickDevicesService(new AWSIoT1ClickDevicesService(options)) as any;
  }
}  
