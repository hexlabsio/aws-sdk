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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEMRServerless> = AWSEMRServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EMRServerless {
  private constructor(private readonly client: AWSEMRServerless) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'emr-serverless' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplications"] as const;
  
  cancelJobRun: (params: RawParamsFrom<'cancelJobRun'>) => Promise<ReturnTypeFrom<'cancelJobRun'>>  = async params => {
  // undefined
    return this.client.cancelJobRun(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  getApplication: (params: RawParamsFrom<'getApplication'>) => Promise<ReturnTypeFrom<'getApplication'>>  = async params => {
  // undefined
    return this.client.getApplication(params as any).promise();
  }

  getDashboardForJobRun: (params: RawParamsFrom<'getDashboardForJobRun'>) => Promise<ReturnTypeFrom<'getDashboardForJobRun'>>  = async params => {
  // undefined
    return this.client.getDashboardForJobRun(params as any).promise();
  }

  getJobRun: (params: RawParamsFrom<'getJobRun'>) => Promise<ReturnTypeFrom<'getJobRun'>>  = async params => {
  // undefined
    return this.client.getJobRun(params as any).promise();
  }

  async listApplications(params: { [K in keyof ParamsFrom<'listApplications', { next?: string, limit?: number }>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.applications ?? []) ? (result.applications ?? []) : [result.applications]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listJobRuns(params: { [K in keyof ParamsFrom<'listJobRuns', { next?: string, limit?: number }>]: ParamsFrom<'listJobRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobRuns'>]-?: ReturnTypeFrom<'listJobRuns'>[K]}['jobRuns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobRuns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobRuns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.jobRuns ?? []) ? (result.jobRuns ?? []) : [result.jobRuns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startApplication: (params: RawParamsFrom<'startApplication'>) => Promise<ReturnTypeFrom<'startApplication'>>  = async params => {
  // undefined
    return this.client.startApplication(params as any).promise();
  }

  startJobRun: (params: RawParamsFrom<'startJobRun'>) => Promise<ReturnTypeFrom<'startJobRun'>>  = async params => {
  // undefined
    return this.client.startJobRun(params as any).promise();
  }

  stopApplication: (params: RawParamsFrom<'stopApplication'>) => Promise<ReturnTypeFrom<'stopApplication'>>  = async params => {
  // undefined
    return this.client.stopApplication(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }
  
  static fromClient(client: AWSEMRServerless): EMRServerless {
    return new EMRServerless(client) as any;
  }
  
  static client(options?: AWSEMRServerless.Types.ClientConfiguration): EMRServerless {
    return new EMRServerless(new AWSEMRServerless(options)) as any;
  }
}  
