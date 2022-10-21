import { Request, IoTEventsData as AWSIoTEventsData } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTEventsData> = AWSIoTEventsData[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTEventsData> = AWSIoTEventsData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTEventsData[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTEventsData, Extras> = AWSIoTEventsData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTEventsData> = AWSIoTEventsData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTEventsData {
  private constructor(private readonly client: AWSIoTEventsData) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'data' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  batchAcknowledgeAlarm: (params: RawParamsFrom<'batchAcknowledgeAlarm'>) => Promise<ReturnTypeFrom<'batchAcknowledgeAlarm'>>  = async params => {
  // undefined
    return this.client.batchAcknowledgeAlarm(params as any).promise();
  }

  batchDeleteDetector: (params: RawParamsFrom<'batchDeleteDetector'>) => Promise<ReturnTypeFrom<'batchDeleteDetector'>>  = async params => {
  // undefined
    return this.client.batchDeleteDetector(params as any).promise();
  }

  batchDisableAlarm: (params: RawParamsFrom<'batchDisableAlarm'>) => Promise<ReturnTypeFrom<'batchDisableAlarm'>>  = async params => {
  // undefined
    return this.client.batchDisableAlarm(params as any).promise();
  }

  batchEnableAlarm: (params: RawParamsFrom<'batchEnableAlarm'>) => Promise<ReturnTypeFrom<'batchEnableAlarm'>>  = async params => {
  // undefined
    return this.client.batchEnableAlarm(params as any).promise();
  }

  batchPutMessage: (params: RawParamsFrom<'batchPutMessage'>) => Promise<ReturnTypeFrom<'batchPutMessage'>>  = async params => {
  // undefined
    return this.client.batchPutMessage(params as any).promise();
  }

  batchResetAlarm: (params: RawParamsFrom<'batchResetAlarm'>) => Promise<ReturnTypeFrom<'batchResetAlarm'>>  = async params => {
  // undefined
    return this.client.batchResetAlarm(params as any).promise();
  }

  batchSnoozeAlarm: (params: RawParamsFrom<'batchSnoozeAlarm'>) => Promise<ReturnTypeFrom<'batchSnoozeAlarm'>>  = async params => {
  // undefined
    return this.client.batchSnoozeAlarm(params as any).promise();
  }

  batchUpdateDetector: (params: RawParamsFrom<'batchUpdateDetector'>) => Promise<ReturnTypeFrom<'batchUpdateDetector'>>  = async params => {
  // undefined
    return this.client.batchUpdateDetector(params as any).promise();
  }

  describeAlarm: (params: RawParamsFrom<'describeAlarm'>) => Promise<ReturnTypeFrom<'describeAlarm'>>  = async params => {
  // undefined
    return this.client.describeAlarm(params as any).promise();
  }

  describeDetector: (params: RawParamsFrom<'describeDetector'>) => Promise<ReturnTypeFrom<'describeDetector'>>  = async params => {
  // undefined
    return this.client.describeDetector(params as any).promise();
  }

  listAlarms: (params: RawParamsFrom<'listAlarms'>) => Promise<ReturnTypeFrom<'listAlarms'>>  = async params => {
  // undefined
    return this.client.listAlarms(params as any).promise();
  }

  listDetectors: (params: RawParamsFrom<'listDetectors'>) => Promise<ReturnTypeFrom<'listDetectors'>>  = async params => {
  // undefined
    return this.client.listDetectors(params as any).promise();
  }
  
  static fromClient(client: AWSIoTEventsData): IoTEventsData {
    return new IoTEventsData(client) as any;
  }
  
  static client(options?: AWSIoTEventsData.Types.ClientConfiguration): IoTEventsData {
    return new IoTEventsData(new AWSIoTEventsData(options)) as any;
  }
}  
