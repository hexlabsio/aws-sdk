import { Request, ImportExport as AWSImportExport } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSImportExport> = AWSImportExport[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSImportExport> = AWSImportExport[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSImportExport[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSImportExport, Extras> = AWSImportExport[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSImportExport> = AWSImportExport[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ImportExport {
  private constructor(private readonly client: AWSImportExport) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'importexport' as const;
  public readonly global = true as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["listJobs"] as const;
  
  cancelJob: (params: RawParamsFrom<'cancelJob'>) => Promise<ReturnTypeFrom<'cancelJob'>>  = async params => {
  // undefined
    return this.client.cancelJob(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  getShippingLabel: (params: RawParamsFrom<'getShippingLabel'>) => Promise<ReturnTypeFrom<'getShippingLabel'>>  = async params => {
  // undefined
    return this.client.getShippingLabel(params as any).promise();
  }

  getStatus: (params: RawParamsFrom<'getStatus'>) => Promise<ReturnTypeFrom<'getStatus'>>  = async params => {
  // undefined
    return this.client.getStatus(params as any).promise();
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string, limit?: number }>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxJobs","moreResults":"IsTruncated","outputToken":"Jobs[-1].JobId","resultKey":"Jobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxJobs: limit } : {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Jobs?.[result.Jobs?.length - 1]?.JobId ;
    const member = (Array.isArray(result.Jobs ?? []) ? (result.Jobs ?? []) : [result.Jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  updateJob: (params: RawParamsFrom<'updateJob'>) => Promise<ReturnTypeFrom<'updateJob'>>  = async params => {
  // undefined
    return this.client.updateJob(params as any).promise();
  }
  
  static fromClient(client: AWSImportExport): ImportExport {
    return new ImportExport(client) as any;
  }
  
  static client(options?: AWSImportExport.Types.ClientConfiguration): ImportExport {
    return new ImportExport(new AWSImportExport(options)) as any;
  }
}  
