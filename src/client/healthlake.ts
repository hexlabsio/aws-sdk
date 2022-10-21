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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSHealthLake> = AWSHealthLake[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class HealthLake {
  private constructor(private readonly client: AWSHealthLake) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'healthlake' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listFHIRDatastores"] as const;
  
  createFHIRDatastore: (params: RawParamsFrom<'createFHIRDatastore'>) => Promise<ReturnTypeFrom<'createFHIRDatastore'>>  = async params => {
  // undefined
    return this.client.createFHIRDatastore(params as any).promise();
  }

  deleteFHIRDatastore: (params: RawParamsFrom<'deleteFHIRDatastore'>) => Promise<ReturnTypeFrom<'deleteFHIRDatastore'>>  = async params => {
  // undefined
    return this.client.deleteFHIRDatastore(params as any).promise();
  }

  describeFHIRDatastore: (params: RawParamsFrom<'describeFHIRDatastore'>) => Promise<ReturnTypeFrom<'describeFHIRDatastore'>>  = async params => {
  // undefined
    return this.client.describeFHIRDatastore(params as any).promise();
  }

  describeFHIRExportJob: (params: RawParamsFrom<'describeFHIRExportJob'>) => Promise<ReturnTypeFrom<'describeFHIRExportJob'>>  = async params => {
  // undefined
    return this.client.describeFHIRExportJob(params as any).promise();
  }

  describeFHIRImportJob: (params: RawParamsFrom<'describeFHIRImportJob'>) => Promise<ReturnTypeFrom<'describeFHIRImportJob'>>  = async params => {
  // undefined
    return this.client.describeFHIRImportJob(params as any).promise();
  }

  listFHIRDatastores: (params: RawParamsFrom<'listFHIRDatastores'>) => Promise<ReturnTypeFrom<'listFHIRDatastores'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFHIRDatastores(params as any).promise();
  }

  listFHIRExportJobs: (params: RawParamsFrom<'listFHIRExportJobs'>) => Promise<ReturnTypeFrom<'listFHIRExportJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFHIRExportJobs(params as any).promise();
  }

  listFHIRImportJobs: (params: RawParamsFrom<'listFHIRImportJobs'>) => Promise<ReturnTypeFrom<'listFHIRImportJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFHIRImportJobs(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startFHIRExportJob: (params: RawParamsFrom<'startFHIRExportJob'>) => Promise<ReturnTypeFrom<'startFHIRExportJob'>>  = async params => {
  // undefined
    return this.client.startFHIRExportJob(params as any).promise();
  }

  startFHIRImportJob: (params: RawParamsFrom<'startFHIRImportJob'>) => Promise<ReturnTypeFrom<'startFHIRImportJob'>>  = async params => {
  // undefined
    return this.client.startFHIRImportJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSHealthLake): HealthLake {
    return new HealthLake(client) as any;
  }
  
  static client(options?: AWSHealthLake.Types.ClientConfiguration): HealthLake {
    return new HealthLake(new AWSHealthLake(options)) as any;
  }
}  
