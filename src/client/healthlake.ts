import { Request, HealthLake as AWSHealthLake } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSHealthLake> = AWSHealthLake[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSHealthLake> = AWSHealthLake[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSHealthLake[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSHealthLake, Extras> = AWSHealthLake[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'healthlake';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listFHIRDatastores"];
    
  createFHIRDatastore: FunctionTypeFrom<'createFHIRDatastore'>;

  deleteFHIRDatastore: FunctionTypeFrom<'deleteFHIRDatastore'>;

  describeFHIRDatastore: FunctionTypeFrom<'describeFHIRDatastore'>;

  describeFHIRExportJob: FunctionTypeFrom<'describeFHIRExportJob'>;

  describeFHIRImportJob: FunctionTypeFrom<'describeFHIRImportJob'>;

  listFHIRDatastores: FunctionTypeFrom<'listFHIRDatastores'>;

  listFHIRExportJobs: FunctionTypeFrom<'listFHIRExportJobs'>;

  listFHIRImportJobs: FunctionTypeFrom<'listFHIRImportJobs'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startFHIRExportJob: FunctionTypeFrom<'startFHIRExportJob'>;

  startFHIRImportJob: FunctionTypeFrom<'startFHIRImportJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class HealthLake implements ClientType {
  private constructor(private readonly client: AWSHealthLake) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'healthlake';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listFHIRDatastores"] as const;
  
  async createFHIRDatastore(...args: any): Promise<any> {
  // undefined
    return this.client.createFHIRDatastore(...args).promise()
  }

  async deleteFHIRDatastore(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFHIRDatastore(...args).promise()
  }

  async describeFHIRDatastore(...args: any): Promise<any> {
  // undefined
    return this.client.describeFHIRDatastore(...args).promise()
  }

  async describeFHIRExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeFHIRExportJob(...args).promise()
  }

  async describeFHIRImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeFHIRImportJob(...args).promise()
  }

  async listFHIRDatastores(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFHIRDatastores(...args).promise()
  }

  async listFHIRExportJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFHIRExportJobs(...args).promise()
  }

  async listFHIRImportJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFHIRImportJobs(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startFHIRExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.startFHIRExportJob(...args).promise()
  }

  async startFHIRImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.startFHIRImportJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSHealthLake): ClientType {
    return new HealthLake(client) as any;
  }
  
  static client(options?: AWSHealthLake.Types.ClientConfiguration): ClientType {
    return new HealthLake(new AWSHealthLake(options)) as any;
  }
}  
