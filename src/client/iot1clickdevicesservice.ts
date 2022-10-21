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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoT1ClickDevicesService> = AWSIoT1ClickDevicesService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoT1ClickDevicesService {
  private constructor(private readonly client: AWSIoT1ClickDevicesService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'devices' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  claimDevicesByClaimCode: (params: RawParamsFrom<'claimDevicesByClaimCode'>) => Promise<ReturnTypeFrom<'claimDevicesByClaimCode'>>  = async params => {
  // undefined
    return this.client.claimDevicesByClaimCode(params as any).promise();
  }

  describeDevice: (params: RawParamsFrom<'describeDevice'>) => Promise<ReturnTypeFrom<'describeDevice'>>  = async params => {
  // undefined
    return this.client.describeDevice(params as any).promise();
  }

  finalizeDeviceClaim: (params: RawParamsFrom<'finalizeDeviceClaim'>) => Promise<ReturnTypeFrom<'finalizeDeviceClaim'>>  = async params => {
  // undefined
    return this.client.finalizeDeviceClaim(params as any).promise();
  }

  getDeviceMethods: (params: RawParamsFrom<'getDeviceMethods'>) => Promise<ReturnTypeFrom<'getDeviceMethods'>>  = async params => {
  // undefined
    return this.client.getDeviceMethods(params as any).promise();
  }

  initiateDeviceClaim: (params: RawParamsFrom<'initiateDeviceClaim'>) => Promise<ReturnTypeFrom<'initiateDeviceClaim'>>  = async params => {
  // undefined
    return this.client.initiateDeviceClaim(params as any).promise();
  }

  invokeDeviceMethod: (params: RawParamsFrom<'invokeDeviceMethod'>) => Promise<ReturnTypeFrom<'invokeDeviceMethod'>>  = async params => {
  // undefined
    return this.client.invokeDeviceMethod(params as any).promise();
  }

  listDeviceEvents: (params: RawParamsFrom<'listDeviceEvents'>) => Promise<ReturnTypeFrom<'listDeviceEvents'>>  = async params => {
  // undefined
    return this.client.listDeviceEvents(params as any).promise();
  }

  listDevices: (params: RawParamsFrom<'listDevices'>) => Promise<ReturnTypeFrom<'listDevices'>>  = async params => {
  // undefined
    return this.client.listDevices(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  unclaimDevice: (params: RawParamsFrom<'unclaimDevice'>) => Promise<ReturnTypeFrom<'unclaimDevice'>>  = async params => {
  // undefined
    return this.client.unclaimDevice(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDeviceState: (params: RawParamsFrom<'updateDeviceState'>) => Promise<ReturnTypeFrom<'updateDeviceState'>>  = async params => {
  // undefined
    return this.client.updateDeviceState(params as any).promise();
  }
  
  static fromClient(client: AWSIoT1ClickDevicesService): IoT1ClickDevicesService {
    return new IoT1ClickDevicesService(client) as any;
  }
  
  static client(options?: AWSIoT1ClickDevicesService.Types.ClientConfiguration): IoT1ClickDevicesService {
    return new IoT1ClickDevicesService(new AWSIoT1ClickDevicesService(options)) as any;
  }
}  
