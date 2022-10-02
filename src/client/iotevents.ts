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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iotevents';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly [];
    
  createAlarmModel: FunctionTypeFrom<'createAlarmModel'>;

  createDetectorModel: FunctionTypeFrom<'createDetectorModel'>;

  createInput: FunctionTypeFrom<'createInput'>;

  deleteAlarmModel: FunctionTypeFrom<'deleteAlarmModel'>;

  deleteDetectorModel: FunctionTypeFrom<'deleteDetectorModel'>;

  deleteInput: FunctionTypeFrom<'deleteInput'>;

  describeAlarmModel: FunctionTypeFrom<'describeAlarmModel'>;

  describeDetectorModel: FunctionTypeFrom<'describeDetectorModel'>;

  describeDetectorModelAnalysis: FunctionTypeFrom<'describeDetectorModelAnalysis'>;

  describeInput: FunctionTypeFrom<'describeInput'>;

  describeLoggingOptions: FunctionTypeFrom<'describeLoggingOptions'>;

  getDetectorModelAnalysisResults: FunctionTypeFrom<'getDetectorModelAnalysisResults'>;

  listAlarmModelVersions: FunctionTypeFrom<'listAlarmModelVersions'>;

  listAlarmModels: FunctionTypeFrom<'listAlarmModels'>;

  listDetectorModelVersions: FunctionTypeFrom<'listDetectorModelVersions'>;

  listDetectorModels: FunctionTypeFrom<'listDetectorModels'>;

  listInputRoutings: FunctionTypeFrom<'listInputRoutings'>;

  listInputs: FunctionTypeFrom<'listInputs'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putLoggingOptions: FunctionTypeFrom<'putLoggingOptions'>;

  startDetectorModelAnalysis: FunctionTypeFrom<'startDetectorModelAnalysis'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAlarmModel: FunctionTypeFrom<'updateAlarmModel'>;

  updateDetectorModel: FunctionTypeFrom<'updateDetectorModel'>;

  updateInput: FunctionTypeFrom<'updateInput'>
}
 
export class IoTEvents implements ClientType {
  private constructor(private readonly client: AWSIoTEvents) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotevents';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = [] as const;
  
  async createAlarmModel(...args: any): Promise<any> {
  // undefined
    return this.client.createAlarmModel(...args).promise()
  }

  async createDetectorModel(...args: any): Promise<any> {
  // undefined
    return this.client.createDetectorModel(...args).promise()
  }

  async createInput(...args: any): Promise<any> {
  // undefined
    return this.client.createInput(...args).promise()
  }

  async deleteAlarmModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlarmModel(...args).promise()
  }

  async deleteDetectorModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDetectorModel(...args).promise()
  }

  async deleteInput(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInput(...args).promise()
  }

  async describeAlarmModel(...args: any): Promise<any> {
  // undefined
    return this.client.describeAlarmModel(...args).promise()
  }

  async describeDetectorModel(...args: any): Promise<any> {
  // undefined
    return this.client.describeDetectorModel(...args).promise()
  }

  async describeDetectorModelAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.describeDetectorModelAnalysis(...args).promise()
  }

  async describeInput(...args: any): Promise<any> {
  // undefined
    return this.client.describeInput(...args).promise()
  }

  async describeLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoggingOptions(...args).promise()
  }

  async getDetectorModelAnalysisResults(...args: any): Promise<any> {
  // undefined
    return this.client.getDetectorModelAnalysisResults(...args).promise()
  }

  async listAlarmModelVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listAlarmModelVersions(...args).promise()
  }

  async listAlarmModels(...args: any): Promise<any> {
  // undefined
    return this.client.listAlarmModels(...args).promise()
  }

  async listDetectorModelVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listDetectorModelVersions(...args).promise()
  }

  async listDetectorModels(...args: any): Promise<any> {
  // undefined
    return this.client.listDetectorModels(...args).promise()
  }

  async listInputRoutings(...args: any): Promise<any> {
  // undefined
    return this.client.listInputRoutings(...args).promise()
  }

  async listInputs(...args: any): Promise<any> {
  // undefined
    return this.client.listInputs(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putLoggingOptions(...args).promise()
  }

  async startDetectorModelAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.startDetectorModelAnalysis(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAlarmModel(...args: any): Promise<any> {
  // undefined
    return this.client.updateAlarmModel(...args).promise()
  }

  async updateDetectorModel(...args: any): Promise<any> {
  // undefined
    return this.client.updateDetectorModel(...args).promise()
  }

  async updateInput(...args: any): Promise<any> {
  // undefined
    return this.client.updateInput(...args).promise()
  }
  
  static fromClient(client: AWSIoTEvents): ClientType {
    return new IoTEvents(client) as any;
  }
  
  static client(options?: AWSIoTEvents.Types.ClientConfiguration): ClientType {
    return new IoTEvents(new AWSIoTEvents(options)) as any;
  }
}  
