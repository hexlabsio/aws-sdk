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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'data';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  batchAcknowledgeAlarm: FunctionTypeFrom<'batchAcknowledgeAlarm'>;

  batchDeleteDetector: FunctionTypeFrom<'batchDeleteDetector'>;

  batchDisableAlarm: FunctionTypeFrom<'batchDisableAlarm'>;

  batchEnableAlarm: FunctionTypeFrom<'batchEnableAlarm'>;

  batchPutMessage: FunctionTypeFrom<'batchPutMessage'>;

  batchResetAlarm: FunctionTypeFrom<'batchResetAlarm'>;

  batchSnoozeAlarm: FunctionTypeFrom<'batchSnoozeAlarm'>;

  batchUpdateDetector: FunctionTypeFrom<'batchUpdateDetector'>;

  describeAlarm: FunctionTypeFrom<'describeAlarm'>;

  describeDetector: FunctionTypeFrom<'describeDetector'>;

  listAlarms: FunctionTypeFrom<'listAlarms'>;

  listDetectors: FunctionTypeFrom<'listDetectors'>
}
 
export class IoTEventsData implements ClientType {
  private constructor(private readonly client: AWSIoTEventsData) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'data';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async batchAcknowledgeAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.batchAcknowledgeAlarm(...args).promise()
  }

  async batchDeleteDetector(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteDetector(...args).promise()
  }

  async batchDisableAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisableAlarm(...args).promise()
  }

  async batchEnableAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.batchEnableAlarm(...args).promise()
  }

  async batchPutMessage(...args: any): Promise<any> {
  // undefined
    return this.client.batchPutMessage(...args).promise()
  }

  async batchResetAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.batchResetAlarm(...args).promise()
  }

  async batchSnoozeAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.batchSnoozeAlarm(...args).promise()
  }

  async batchUpdateDetector(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateDetector(...args).promise()
  }

  async describeAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.describeAlarm(...args).promise()
  }

  async describeDetector(...args: any): Promise<any> {
  // undefined
    return this.client.describeDetector(...args).promise()
  }

  async listAlarms(...args: any): Promise<any> {
  // undefined
    return this.client.listAlarms(...args).promise()
  }

  async listDetectors(...args: any): Promise<any> {
  // undefined
    return this.client.listDetectors(...args).promise()
  }
  
  static fromClient(client: AWSIoTEventsData): ClientType {
    return new IoTEventsData(client) as any;
  }
  
  static client(options?: AWSIoTEventsData.Types.ClientConfiguration): ClientType {
    return new IoTEventsData(new AWSIoTEventsData(options)) as any;
  }
}  
