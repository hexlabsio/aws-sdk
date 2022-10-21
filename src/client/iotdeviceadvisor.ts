import { Request, IotDeviceAdvisor as AWSIotDeviceAdvisor } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIotDeviceAdvisor> = AWSIotDeviceAdvisor[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIotDeviceAdvisor> = AWSIotDeviceAdvisor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIotDeviceAdvisor[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIotDeviceAdvisor, Extras> = AWSIotDeviceAdvisor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIotDeviceAdvisor> = AWSIotDeviceAdvisor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IotDeviceAdvisor {
  private constructor(private readonly client: AWSIotDeviceAdvisor) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotdeviceadvisor' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = ["listSuiteDefinitions","listSuiteRuns"] as const;
  
  createSuiteDefinition: (params: RawParamsFrom<'createSuiteDefinition'>) => Promise<ReturnTypeFrom<'createSuiteDefinition'>>  = async params => {
  // undefined
    return this.client.createSuiteDefinition(params as any).promise();
  }

  deleteSuiteDefinition: (params: RawParamsFrom<'deleteSuiteDefinition'>) => Promise<ReturnTypeFrom<'deleteSuiteDefinition'>>  = async params => {
  // undefined
    return this.client.deleteSuiteDefinition(params as any).promise();
  }

  getEndpoint: (params: RawParamsFrom<'getEndpoint'>) => Promise<ReturnTypeFrom<'getEndpoint'>>  = async params => {
  // undefined
    return this.client.getEndpoint(params as any).promise();
  }

  getSuiteDefinition: (params: RawParamsFrom<'getSuiteDefinition'>) => Promise<ReturnTypeFrom<'getSuiteDefinition'>>  = async params => {
  // undefined
    return this.client.getSuiteDefinition(params as any).promise();
  }

  getSuiteRun: (params: RawParamsFrom<'getSuiteRun'>) => Promise<ReturnTypeFrom<'getSuiteRun'>>  = async params => {
  // undefined
    return this.client.getSuiteRun(params as any).promise();
  }

  getSuiteRunReport: (params: RawParamsFrom<'getSuiteRunReport'>) => Promise<ReturnTypeFrom<'getSuiteRunReport'>>  = async params => {
  // undefined
    return this.client.getSuiteRunReport(params as any).promise();
  }

  listSuiteDefinitions: (params: RawParamsFrom<'listSuiteDefinitions'>) => Promise<ReturnTypeFrom<'listSuiteDefinitions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSuiteDefinitions(params as any).promise();
  }

  listSuiteRuns: (params: RawParamsFrom<'listSuiteRuns'>) => Promise<ReturnTypeFrom<'listSuiteRuns'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSuiteRuns(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startSuiteRun: (params: RawParamsFrom<'startSuiteRun'>) => Promise<ReturnTypeFrom<'startSuiteRun'>>  = async params => {
  // undefined
    return this.client.startSuiteRun(params as any).promise();
  }

  stopSuiteRun: (params: RawParamsFrom<'stopSuiteRun'>) => Promise<ReturnTypeFrom<'stopSuiteRun'>>  = async params => {
  // undefined
    return this.client.stopSuiteRun(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateSuiteDefinition: (params: RawParamsFrom<'updateSuiteDefinition'>) => Promise<ReturnTypeFrom<'updateSuiteDefinition'>>  = async params => {
  // undefined
    return this.client.updateSuiteDefinition(params as any).promise();
  }
  
  static fromClient(client: AWSIotDeviceAdvisor): IotDeviceAdvisor {
    return new IotDeviceAdvisor(client) as any;
  }
  
  static client(options?: AWSIotDeviceAdvisor.Types.ClientConfiguration): IotDeviceAdvisor {
    return new IotDeviceAdvisor(new AWSIotDeviceAdvisor(options)) as any;
  }
}  
