import { Request, IoTEvents as AWSIoTEvents } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTEvents> = AWSIoTEvents[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTEvents> = AWSIoTEvents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTEvents[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTEvents, Extras> = AWSIoTEvents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTEvents> = AWSIoTEvents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTEvents {
  private constructor(private readonly client: AWSIoTEvents) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotevents' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = [] as const;
  
  createAlarmModel: (params: RawParamsFrom<'createAlarmModel'>) => Promise<ReturnTypeFrom<'createAlarmModel'>>  = async params => {
  // undefined
    return this.client.createAlarmModel(params as any).promise();
  }

  createDetectorModel: (params: RawParamsFrom<'createDetectorModel'>) => Promise<ReturnTypeFrom<'createDetectorModel'>>  = async params => {
  // undefined
    return this.client.createDetectorModel(params as any).promise();
  }

  createInput: (params: RawParamsFrom<'createInput'>) => Promise<ReturnTypeFrom<'createInput'>>  = async params => {
  // undefined
    return this.client.createInput(params as any).promise();
  }

  deleteAlarmModel: (params: RawParamsFrom<'deleteAlarmModel'>) => Promise<ReturnTypeFrom<'deleteAlarmModel'>>  = async params => {
  // undefined
    return this.client.deleteAlarmModel(params as any).promise();
  }

  deleteDetectorModel: (params: RawParamsFrom<'deleteDetectorModel'>) => Promise<ReturnTypeFrom<'deleteDetectorModel'>>  = async params => {
  // undefined
    return this.client.deleteDetectorModel(params as any).promise();
  }

  deleteInput: (params: RawParamsFrom<'deleteInput'>) => Promise<ReturnTypeFrom<'deleteInput'>>  = async params => {
  // undefined
    return this.client.deleteInput(params as any).promise();
  }

  describeAlarmModel: (params: RawParamsFrom<'describeAlarmModel'>) => Promise<ReturnTypeFrom<'describeAlarmModel'>>  = async params => {
  // undefined
    return this.client.describeAlarmModel(params as any).promise();
  }

  describeDetectorModel: (params: RawParamsFrom<'describeDetectorModel'>) => Promise<ReturnTypeFrom<'describeDetectorModel'>>  = async params => {
  // undefined
    return this.client.describeDetectorModel(params as any).promise();
  }

  describeDetectorModelAnalysis: (params: RawParamsFrom<'describeDetectorModelAnalysis'>) => Promise<ReturnTypeFrom<'describeDetectorModelAnalysis'>>  = async params => {
  // undefined
    return this.client.describeDetectorModelAnalysis(params as any).promise();
  }

  describeInput: (params: RawParamsFrom<'describeInput'>) => Promise<ReturnTypeFrom<'describeInput'>>  = async params => {
  // undefined
    return this.client.describeInput(params as any).promise();
  }

  describeLoggingOptions: (params: RawParamsFrom<'describeLoggingOptions'>) => Promise<ReturnTypeFrom<'describeLoggingOptions'>>  = async params => {
  // undefined
    return this.client.describeLoggingOptions(params as any).promise();
  }

  getDetectorModelAnalysisResults: (params: RawParamsFrom<'getDetectorModelAnalysisResults'>) => Promise<ReturnTypeFrom<'getDetectorModelAnalysisResults'>>  = async params => {
  // undefined
    return this.client.getDetectorModelAnalysisResults(params as any).promise();
  }

  listAlarmModelVersions: (params: RawParamsFrom<'listAlarmModelVersions'>) => Promise<ReturnTypeFrom<'listAlarmModelVersions'>>  = async params => {
  // undefined
    return this.client.listAlarmModelVersions(params as any).promise();
  }

  listAlarmModels: (params: RawParamsFrom<'listAlarmModels'>) => Promise<ReturnTypeFrom<'listAlarmModels'>>  = async params => {
  // undefined
    return this.client.listAlarmModels(params as any).promise();
  }

  listDetectorModelVersions: (params: RawParamsFrom<'listDetectorModelVersions'>) => Promise<ReturnTypeFrom<'listDetectorModelVersions'>>  = async params => {
  // undefined
    return this.client.listDetectorModelVersions(params as any).promise();
  }

  listDetectorModels: (params: RawParamsFrom<'listDetectorModels'>) => Promise<ReturnTypeFrom<'listDetectorModels'>>  = async params => {
  // undefined
    return this.client.listDetectorModels(params as any).promise();
  }

  listInputRoutings: (params: RawParamsFrom<'listInputRoutings'>) => Promise<ReturnTypeFrom<'listInputRoutings'>>  = async params => {
  // undefined
    return this.client.listInputRoutings(params as any).promise();
  }

  listInputs: (params: RawParamsFrom<'listInputs'>) => Promise<ReturnTypeFrom<'listInputs'>>  = async params => {
  // undefined
    return this.client.listInputs(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putLoggingOptions: (params: RawParamsFrom<'putLoggingOptions'>) => Promise<ReturnTypeFrom<'putLoggingOptions'>>  = async params => {
  // undefined
    return this.client.putLoggingOptions(params as any).promise();
  }

  startDetectorModelAnalysis: (params: RawParamsFrom<'startDetectorModelAnalysis'>) => Promise<ReturnTypeFrom<'startDetectorModelAnalysis'>>  = async params => {
  // undefined
    return this.client.startDetectorModelAnalysis(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAlarmModel: (params: RawParamsFrom<'updateAlarmModel'>) => Promise<ReturnTypeFrom<'updateAlarmModel'>>  = async params => {
  // undefined
    return this.client.updateAlarmModel(params as any).promise();
  }

  updateDetectorModel: (params: RawParamsFrom<'updateDetectorModel'>) => Promise<ReturnTypeFrom<'updateDetectorModel'>>  = async params => {
  // undefined
    return this.client.updateDetectorModel(params as any).promise();
  }

  updateInput: (params: RawParamsFrom<'updateInput'>) => Promise<ReturnTypeFrom<'updateInput'>>  = async params => {
  // undefined
    return this.client.updateInput(params as any).promise();
  }
  
  static fromClient(client: AWSIoTEvents): IoTEvents {
    return new IoTEvents(client) as any;
  }
  
  static client(options?: AWSIoTEvents.Types.ClientConfiguration): IoTEvents {
    return new IoTEvents(new AWSIoTEvents(options)) as any;
  }
}  
