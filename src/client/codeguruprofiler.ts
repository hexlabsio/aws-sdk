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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codeguru-profiler';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["getFindingsReportAccountSummary","listProfilingGroups"];
    
  addNotificationChannels: FunctionTypeFrom<'addNotificationChannels'>;

  batchGetFrameMetricData: FunctionTypeFrom<'batchGetFrameMetricData'>;

  configureAgent: FunctionTypeFrom<'configureAgent'>;

  createProfilingGroup: FunctionTypeFrom<'createProfilingGroup'>;

  deleteProfilingGroup: FunctionTypeFrom<'deleteProfilingGroup'>;

  describeProfilingGroup: FunctionTypeFrom<'describeProfilingGroup'>;

  getFindingsReportAccountSummary: FunctionTypeFrom<'getFindingsReportAccountSummary'>;

  getNotificationConfiguration: FunctionTypeFrom<'getNotificationConfiguration'>;

  getPolicy: FunctionTypeFrom<'getPolicy'>;

  getProfile: FunctionTypeFrom<'getProfile'>;

  getRecommendations: FunctionTypeFrom<'getRecommendations'>;

  listFindingsReports: FunctionTypeFrom<'listFindingsReports'>;

  listProfileTimes(params: { [K in keyof Omit<ParamsFrom<'listProfileTimes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listProfileTimes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProfileTimes'>]-?: ReturnTypeFrom<'listProfileTimes'>[K]}['profileTimes'] }>
  ;

  listProfilingGroups: FunctionTypeFrom<'listProfilingGroups'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  postAgentProfile: FunctionTypeFrom<'postAgentProfile'>;

  putPermission: FunctionTypeFrom<'putPermission'>;

  removeNotificationChannel: FunctionTypeFrom<'removeNotificationChannel'>;

  removePermission: FunctionTypeFrom<'removePermission'>;

  submitFeedback: FunctionTypeFrom<'submitFeedback'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateProfilingGroup: FunctionTypeFrom<'updateProfilingGroup'>
}
 
export class CodeGuruProfiler implements ClientType {
  private constructor(private readonly client: AWSCodeGuruProfiler) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codeguru-profiler';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["getFindingsReportAccountSummary","listProfilingGroups"] as const;
  
  async addNotificationChannels(...args: any): Promise<any> {
  // undefined
    return this.client.addNotificationChannels(...args).promise()
  }

  async batchGetFrameMetricData(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetFrameMetricData(...args).promise()
  }

  async configureAgent(...args: any): Promise<any> {
  // undefined
    return this.client.configureAgent(...args).promise()
  }

  async createProfilingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createProfilingGroup(...args).promise()
  }

  async deleteProfilingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProfilingGroup(...args).promise()
  }

  async describeProfilingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeProfilingGroup(...args).promise()
  }

  async getFindingsReportAccountSummary(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getFindingsReportAccountSummary(...args).promise()
  }

  async getNotificationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getNotificationConfiguration(...args).promise()
  }

  async getPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicy(...args).promise()
  }

  async getProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getProfile(...args).promise()
  }

  async getRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.getRecommendations(...args).promise()
  }

  async listFindingsReports(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listFindingsReports(...args).promise()
  }

  async listProfileTimes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"profileTimes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProfileTimes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.profileTimes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProfilingGroups(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listProfilingGroups(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async postAgentProfile(...args: any): Promise<any> {
  // undefined
    return this.client.postAgentProfile(...args).promise()
  }

  async putPermission(...args: any): Promise<any> {
  // undefined
    return this.client.putPermission(...args).promise()
  }

  async removeNotificationChannel(...args: any): Promise<any> {
  // undefined
    return this.client.removeNotificationChannel(...args).promise()
  }

  async removePermission(...args: any): Promise<any> {
  // undefined
    return this.client.removePermission(...args).promise()
  }

  async submitFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.submitFeedback(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateProfilingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateProfilingGroup(...args).promise()
  }
  
  static fromClient(client: AWSCodeGuruProfiler): ClientType {
    return new CodeGuruProfiler(client) as any;
  }
  
  static client(options?: AWSCodeGuruProfiler.Types.ClientConfiguration): ClientType {
    return new CodeGuruProfiler(new AWSCodeGuruProfiler(options)) as any;
  }
}  
