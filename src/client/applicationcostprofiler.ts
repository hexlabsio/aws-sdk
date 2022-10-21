import { Request, ApplicationCostProfiler as AWSApplicationCostProfiler } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSApplicationCostProfiler> = AWSApplicationCostProfiler[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSApplicationCostProfiler> = AWSApplicationCostProfiler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSApplicationCostProfiler[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSApplicationCostProfiler, Extras> = AWSApplicationCostProfiler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSApplicationCostProfiler> = AWSApplicationCostProfiler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ApplicationCostProfiler {
  private constructor(private readonly client: AWSApplicationCostProfiler) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'application-cost-profiler' as const;
  public readonly global = false as const;
  public readonly category = 'AWS Cost Management' as const;
  public readonly topLevelCalls = ["listReportDefinitions"] as const;
  
  deleteReportDefinition: (params: RawParamsFrom<'deleteReportDefinition'>) => Promise<ReturnTypeFrom<'deleteReportDefinition'>>  = async params => {
  // undefined
    return this.client.deleteReportDefinition(params as any).promise();
  }

  getReportDefinition: (params: RawParamsFrom<'getReportDefinition'>) => Promise<ReturnTypeFrom<'getReportDefinition'>>  = async params => {
  // undefined
    return this.client.getReportDefinition(params as any).promise();
  }

  importApplicationUsage: (params: RawParamsFrom<'importApplicationUsage'>) => Promise<ReturnTypeFrom<'importApplicationUsage'>>  = async params => {
  // undefined
    return this.client.importApplicationUsage(params as any).promise();
  }

  async listReportDefinitions(params: { [K in keyof ParamsFrom<'listReportDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'listReportDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReportDefinitions'>]-?: ReturnTypeFrom<'listReportDefinitions'>[K]}['reportDefinitions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reportDefinitions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReportDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReportDefinitions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.reportDefinitions ?? []) ? (result.reportDefinitions ?? []) : [result.reportDefinitions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putReportDefinition: (params: RawParamsFrom<'putReportDefinition'>) => Promise<ReturnTypeFrom<'putReportDefinition'>>  = async params => {
  // undefined
    return this.client.putReportDefinition(params as any).promise();
  }

  updateReportDefinition: (params: RawParamsFrom<'updateReportDefinition'>) => Promise<ReturnTypeFrom<'updateReportDefinition'>>  = async params => {
  // undefined
    return this.client.updateReportDefinition(params as any).promise();
  }
  
  static fromClient(client: AWSApplicationCostProfiler): ApplicationCostProfiler {
    return new ApplicationCostProfiler(client) as any;
  }
  
  static client(options?: AWSApplicationCostProfiler.Types.ClientConfiguration): ApplicationCostProfiler {
    return new ApplicationCostProfiler(new AWSApplicationCostProfiler(options)) as any;
  }
}  
