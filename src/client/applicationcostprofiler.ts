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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'application-cost-profiler';
    global: false;
    category: 'AWS Cost Management'
    topLevelCalls: readonly ["listReportDefinitions"];
    
  deleteReportDefinition: FunctionTypeFrom<'deleteReportDefinition'>;

  getReportDefinition: FunctionTypeFrom<'getReportDefinition'>;

  importApplicationUsage: FunctionTypeFrom<'importApplicationUsage'>;

  listReportDefinitions(params: { [K in keyof Omit<ParamsFrom<'listReportDefinitions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listReportDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReportDefinitions'>]-?: ReturnTypeFrom<'listReportDefinitions'>[K]}['reportDefinitions'] }>
  listReportDefinitions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReportDefinitions'>]-?: ReturnTypeFrom<'listReportDefinitions'>[K]}['reportDefinitions'] }>;

  putReportDefinition: FunctionTypeFrom<'putReportDefinition'>;

  updateReportDefinition: FunctionTypeFrom<'updateReportDefinition'>
}
 
export class ApplicationCostProfiler implements ClientType {
  private constructor(private readonly client: AWSApplicationCostProfiler) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'application-cost-profiler';
  public readonly global = false;
  public readonly category = 'AWS Cost Management';
  public readonly topLevelCalls = ["listReportDefinitions"] as const;
  
  async deleteReportDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReportDefinition(...args).promise()
  }

  async getReportDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getReportDefinition(...args).promise()
  }

  async importApplicationUsage(...args: any): Promise<any> {
  // undefined
    return this.client.importApplicationUsage(...args).promise()
  }

  async listReportDefinitions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reportDefinitions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReportDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.reportDefinitions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putReportDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.putReportDefinition(...args).promise()
  }

  async updateReportDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateReportDefinition(...args).promise()
  }
  
  static fromClient(client: AWSApplicationCostProfiler): ClientType {
    return new ApplicationCostProfiler(client) as any;
  }
  
  static client(options?: AWSApplicationCostProfiler.Types.ClientConfiguration): ClientType {
    return new ApplicationCostProfiler(new AWSApplicationCostProfiler(options)) as any;
  }
}  
