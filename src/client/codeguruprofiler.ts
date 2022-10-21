import { Request, CodeGuruProfiler as AWSCodeGuruProfiler } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeGuruProfiler> = AWSCodeGuruProfiler[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeGuruProfiler> = AWSCodeGuruProfiler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeGuruProfiler[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeGuruProfiler, Extras> = AWSCodeGuruProfiler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeGuruProfiler> = AWSCodeGuruProfiler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeGuruProfiler {
  private constructor(private readonly client: AWSCodeGuruProfiler) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codeguru-profiler' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["getFindingsReportAccountSummary","listProfilingGroups"] as const;
  
  addNotificationChannels: (params: RawParamsFrom<'addNotificationChannels'>) => Promise<ReturnTypeFrom<'addNotificationChannels'>>  = async params => {
  // undefined
    return this.client.addNotificationChannels(params as any).promise();
  }

  batchGetFrameMetricData: (params: RawParamsFrom<'batchGetFrameMetricData'>) => Promise<ReturnTypeFrom<'batchGetFrameMetricData'>>  = async params => {
  // undefined
    return this.client.batchGetFrameMetricData(params as any).promise();
  }

  configureAgent: (params: RawParamsFrom<'configureAgent'>) => Promise<ReturnTypeFrom<'configureAgent'>>  = async params => {
  // undefined
    return this.client.configureAgent(params as any).promise();
  }

  createProfilingGroup: (params: RawParamsFrom<'createProfilingGroup'>) => Promise<ReturnTypeFrom<'createProfilingGroup'>>  = async params => {
  // undefined
    return this.client.createProfilingGroup(params as any).promise();
  }

  deleteProfilingGroup: (params: RawParamsFrom<'deleteProfilingGroup'>) => Promise<ReturnTypeFrom<'deleteProfilingGroup'>>  = async params => {
  // undefined
    return this.client.deleteProfilingGroup(params as any).promise();
  }

  describeProfilingGroup: (params: RawParamsFrom<'describeProfilingGroup'>) => Promise<ReturnTypeFrom<'describeProfilingGroup'>>  = async params => {
  // undefined
    return this.client.describeProfilingGroup(params as any).promise();
  }

  getFindingsReportAccountSummary: (params: RawParamsFrom<'getFindingsReportAccountSummary'>) => Promise<ReturnTypeFrom<'getFindingsReportAccountSummary'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getFindingsReportAccountSummary(params as any).promise();
  }

  getNotificationConfiguration: (params: RawParamsFrom<'getNotificationConfiguration'>) => Promise<ReturnTypeFrom<'getNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.getNotificationConfiguration(params as any).promise();
  }

  getPolicy: (params: RawParamsFrom<'getPolicy'>) => Promise<ReturnTypeFrom<'getPolicy'>>  = async params => {
  // undefined
    return this.client.getPolicy(params as any).promise();
  }

  getProfile: (params: RawParamsFrom<'getProfile'>) => Promise<ReturnTypeFrom<'getProfile'>>  = async params => {
  // undefined
    return this.client.getProfile(params as any).promise();
  }

  getRecommendations: (params: RawParamsFrom<'getRecommendations'>) => Promise<ReturnTypeFrom<'getRecommendations'>>  = async params => {
  // undefined
    return this.client.getRecommendations(params as any).promise();
  }

  listFindingsReports: (params: RawParamsFrom<'listFindingsReports'>) => Promise<ReturnTypeFrom<'listFindingsReports'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listFindingsReports(params as any).promise();
  }

  async listProfileTimes(params: { [K in keyof ParamsFrom<'listProfileTimes', { next?: string, limit?: number }>]: ParamsFrom<'listProfileTimes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProfileTimes'>]-?: ReturnTypeFrom<'listProfileTimes'>[K]}['profileTimes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"profileTimes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProfileTimes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProfileTimes' })).toString('base64');
    const member = (Array.isArray(result.profileTimes ?? []) ? (result.profileTimes ?? []) : [result.profileTimes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listProfilingGroups: (params: RawParamsFrom<'listProfilingGroups'>) => Promise<ReturnTypeFrom<'listProfilingGroups'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listProfilingGroups(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  postAgentProfile: (params: RawParamsFrom<'postAgentProfile'>) => Promise<ReturnTypeFrom<'postAgentProfile'>>  = async params => {
  // undefined
    return this.client.postAgentProfile(params as any).promise();
  }

  putPermission: (params: RawParamsFrom<'putPermission'>) => Promise<ReturnTypeFrom<'putPermission'>>  = async params => {
  // undefined
    return this.client.putPermission(params as any).promise();
  }

  removeNotificationChannel: (params: RawParamsFrom<'removeNotificationChannel'>) => Promise<ReturnTypeFrom<'removeNotificationChannel'>>  = async params => {
  // undefined
    return this.client.removeNotificationChannel(params as any).promise();
  }

  removePermission: (params: RawParamsFrom<'removePermission'>) => Promise<ReturnTypeFrom<'removePermission'>>  = async params => {
  // undefined
    return this.client.removePermission(params as any).promise();
  }

  submitFeedback: (params: RawParamsFrom<'submitFeedback'>) => Promise<ReturnTypeFrom<'submitFeedback'>>  = async params => {
  // undefined
    return this.client.submitFeedback(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateProfilingGroup: (params: RawParamsFrom<'updateProfilingGroup'>) => Promise<ReturnTypeFrom<'updateProfilingGroup'>>  = async params => {
  // undefined
    return this.client.updateProfilingGroup(params as any).promise();
  }
  
  static fromClient(client: AWSCodeGuruProfiler): CodeGuruProfiler {
    return new CodeGuruProfiler(client) as any;
  }
  
  static client(options?: AWSCodeGuruProfiler.Types.ClientConfiguration): CodeGuruProfiler {
    return new CodeGuruProfiler(new AWSCodeGuruProfiler(options)) as any;
  }
}  
