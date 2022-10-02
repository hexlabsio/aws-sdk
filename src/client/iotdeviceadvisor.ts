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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iotdeviceadvisor';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly ["listSuiteDefinitions","listSuiteRuns"];
    
  createSuiteDefinition: FunctionTypeFrom<'createSuiteDefinition'>;

  deleteSuiteDefinition: FunctionTypeFrom<'deleteSuiteDefinition'>;

  getEndpoint: FunctionTypeFrom<'getEndpoint'>;

  getSuiteDefinition: FunctionTypeFrom<'getSuiteDefinition'>;

  getSuiteRun: FunctionTypeFrom<'getSuiteRun'>;

  getSuiteRunReport: FunctionTypeFrom<'getSuiteRunReport'>;

  listSuiteDefinitions: FunctionTypeFrom<'listSuiteDefinitions'>;

  listSuiteRuns: FunctionTypeFrom<'listSuiteRuns'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startSuiteRun: FunctionTypeFrom<'startSuiteRun'>;

  stopSuiteRun: FunctionTypeFrom<'stopSuiteRun'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateSuiteDefinition: FunctionTypeFrom<'updateSuiteDefinition'>
}
 
export class IotDeviceAdvisor implements ClientType {
  private constructor(private readonly client: AWSIotDeviceAdvisor) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotdeviceadvisor';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = ["listSuiteDefinitions","listSuiteRuns"] as const;
  
  async createSuiteDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createSuiteDefinition(...args).promise()
  }

  async deleteSuiteDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSuiteDefinition(...args).promise()
  }

  async getEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getEndpoint(...args).promise()
  }

  async getSuiteDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getSuiteDefinition(...args).promise()
  }

  async getSuiteRun(...args: any): Promise<any> {
  // undefined
    return this.client.getSuiteRun(...args).promise()
  }

  async getSuiteRunReport(...args: any): Promise<any> {
  // undefined
    return this.client.getSuiteRunReport(...args).promise()
  }

  async listSuiteDefinitions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSuiteDefinitions(...args).promise()
  }

  async listSuiteRuns(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSuiteRuns(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startSuiteRun(...args: any): Promise<any> {
  // undefined
    return this.client.startSuiteRun(...args).promise()
  }

  async stopSuiteRun(...args: any): Promise<any> {
  // undefined
    return this.client.stopSuiteRun(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateSuiteDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateSuiteDefinition(...args).promise()
  }
  
  static fromClient(client: AWSIotDeviceAdvisor): ClientType {
    return new IotDeviceAdvisor(client) as any;
  }
  
  static client(options?: AWSIotDeviceAdvisor.Types.ClientConfiguration): ClientType {
    return new IotDeviceAdvisor(new AWSIotDeviceAdvisor(options)) as any;
  }
}  
