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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'importexport';
    global: true;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["listJobs"];
    
  cancelJob: FunctionTypeFrom<'cancelJob'>;

  createJob: FunctionTypeFrom<'createJob'>;

  getShippingLabel: FunctionTypeFrom<'getShippingLabel'>;

  getStatus: FunctionTypeFrom<'getStatus'>;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string, limit?: number }>, 'Marker' | 'MaxJobs'>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'] }>
  listJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'] }>;

  updateJob: FunctionTypeFrom<'updateJob'>
}
 
export class ImportExport implements ClientType {
  private constructor(private readonly client: AWSImportExport) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'importexport';
  public readonly global = true;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["listJobs"] as const;
  
  async cancelJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJob(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async getShippingLabel(...args: any): Promise<any> {
  // undefined
    return this.client.getShippingLabel(...args).promise()
  }

  async getStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getStatus(...args).promise()
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxJobs","moreResults":"IsTruncated","outputToken":"Jobs[-1].JobId","resultKey":"Jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxJobs: limit } : {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Jobs?.[result.Jobs?.length - 1]?.JobId;
    const member = result.Jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async updateJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateJob(...args).promise()
  }
  
  static fromClient(client: AWSImportExport): ClientType {
    return new ImportExport(client) as any;
  }
  
  static client(options?: AWSImportExport.Types.ClientConfiguration): ClientType {
    return new ImportExport(new AWSImportExport(options)) as any;
  }
}  
