import { Request, EMRServerless as AWSEMRServerless } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEMRServerless> = AWSEMRServerless[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEMRServerless> = AWSEMRServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEMRServerless[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEMRServerless, Extras> = AWSEMRServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'emr-serverless';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listApplications"];
    
  cancelJobRun: FunctionTypeFrom<'cancelJobRun'>;

  createApplication: FunctionTypeFrom<'createApplication'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  getApplication: FunctionTypeFrom<'getApplication'>;

  getDashboardForJobRun: FunctionTypeFrom<'getDashboardForJobRun'>;

  getJobRun: FunctionTypeFrom<'getJobRun'>;

  listApplications(params: { [K in keyof Omit<ParamsFrom<'listApplications', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'] }>
  listApplications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'] }>;

  listJobRuns(params: { [K in keyof Omit<ParamsFrom<'listJobRuns', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listJobRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobRuns'>]-?: ReturnTypeFrom<'listJobRuns'>[K]}['jobRuns'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startApplication: FunctionTypeFrom<'startApplication'>;

  startJobRun: FunctionTypeFrom<'startJobRun'>;

  stopApplication: FunctionTypeFrom<'stopApplication'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>
}
 
export class EMRServerless implements ClientType {
  private constructor(private readonly client: AWSEMRServerless) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'emr-serverless';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listApplications"] as const;
  
  async cancelJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJobRun(...args).promise()
  }

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async getApplication(...args: any): Promise<any> {
  // undefined
    return this.client.getApplication(...args).promise()
  }

  async getDashboardForJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.getDashboardForJobRun(...args).promise()
  }

  async getJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.getJobRun(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.applications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobRuns(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobRuns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobRuns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobRuns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startApplication(...args: any): Promise<any> {
  // undefined
    return this.client.startApplication(...args).promise()
  }

  async startJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.startJobRun(...args).promise()
  }

  async stopApplication(...args: any): Promise<any> {
  // undefined
    return this.client.stopApplication(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }
  
  static fromClient(client: AWSEMRServerless): ClientType {
    return new EMRServerless(client) as any;
  }
  
  static client(options?: AWSEMRServerless.Types.ClientConfiguration): ClientType {
    return new EMRServerless(new AWSEMRServerless(options)) as any;
  }
}  
