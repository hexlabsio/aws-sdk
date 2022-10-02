import { Request, CodeBuild as AWSCodeBuild } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeBuild> = AWSCodeBuild[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeBuild> = AWSCodeBuild[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeBuild[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeBuild, Extras> = AWSCodeBuild[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codebuild';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["listBuildBatches","listBuildBatchesForProject","listBuilds","listProjects","listReportGroups","listReports","listSharedProjects","listSharedReportGroups"];
    
  batchDeleteBuilds: FunctionTypeFrom<'batchDeleteBuilds'>;

  batchGetBuildBatches: FunctionTypeFrom<'batchGetBuildBatches'>;

  batchGetBuilds: FunctionTypeFrom<'batchGetBuilds'>;

  batchGetProjects: FunctionTypeFrom<'batchGetProjects'>;

  batchGetReportGroups: FunctionTypeFrom<'batchGetReportGroups'>;

  batchGetReports: FunctionTypeFrom<'batchGetReports'>;

  createProject: FunctionTypeFrom<'createProject'>;

  createReportGroup: FunctionTypeFrom<'createReportGroup'>;

  createWebhook: FunctionTypeFrom<'createWebhook'>;

  deleteBuildBatch: FunctionTypeFrom<'deleteBuildBatch'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  deleteReport: FunctionTypeFrom<'deleteReport'>;

  deleteReportGroup: FunctionTypeFrom<'deleteReportGroup'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteSourceCredentials: FunctionTypeFrom<'deleteSourceCredentials'>;

  deleteWebhook: FunctionTypeFrom<'deleteWebhook'>;

  describeCodeCoverages(params: { [K in keyof Omit<ParamsFrom<'describeCodeCoverages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeCodeCoverages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCodeCoverages'>]-?: ReturnTypeFrom<'describeCodeCoverages'>[K]}['codeCoverages'] }>
  ;

  describeTestCases(params: { [K in keyof Omit<ParamsFrom<'describeTestCases', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeTestCases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTestCases'>]-?: ReturnTypeFrom<'describeTestCases'>[K]}['testCases'] }>
  ;

  getReportGroupTrend: FunctionTypeFrom<'getReportGroupTrend'>;

  getResourcePolicy: FunctionTypeFrom<'getResourcePolicy'>;

  importSourceCredentials: FunctionTypeFrom<'importSourceCredentials'>;

  invalidateProjectCache: FunctionTypeFrom<'invalidateProjectCache'>;

  listBuildBatches(params: { [K in keyof Omit<ParamsFrom<'listBuildBatches', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listBuildBatches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuildBatches'>]-?: ReturnTypeFrom<'listBuildBatches'>[K]}['ids'] }>
  listBuildBatches(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuildBatches'>]-?: ReturnTypeFrom<'listBuildBatches'>[K]}['ids'] }>;

  listBuildBatchesForProject(params: { [K in keyof Omit<ParamsFrom<'listBuildBatchesForProject', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listBuildBatchesForProject', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuildBatchesForProject'>]-?: ReturnTypeFrom<'listBuildBatchesForProject'>[K]}['ids'] }>
  listBuildBatchesForProject(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuildBatchesForProject'>]-?: ReturnTypeFrom<'listBuildBatchesForProject'>[K]}['ids'] }>;

  listBuilds(params: { [K in keyof Omit<ParamsFrom<'listBuilds', { next?: string }>, 'nextToken'>]: ParamsFrom<'listBuilds', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuilds'>]-?: ReturnTypeFrom<'listBuilds'>[K]}['ids'] }>
  listBuilds(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuilds'>]-?: ReturnTypeFrom<'listBuilds'>[K]}['ids'] }>;

  listBuildsForProject(params: { [K in keyof Omit<ParamsFrom<'listBuildsForProject', { next?: string }>, 'nextToken'>]: ParamsFrom<'listBuildsForProject', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuildsForProject'>]-?: ReturnTypeFrom<'listBuildsForProject'>[K]}['ids'] }>
  ;

  listCuratedEnvironmentImages: FunctionTypeFrom<'listCuratedEnvironmentImages'>;

  listProjects(params: { [K in keyof Omit<ParamsFrom<'listProjects', { next?: string }>, 'nextToken'>]: ParamsFrom<'listProjects', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'] }>
  listProjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'] }>;

  listReportGroups(params: { [K in keyof Omit<ParamsFrom<'listReportGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listReportGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReportGroups'>]-?: ReturnTypeFrom<'listReportGroups'>[K]}['reportGroups'] }>
  listReportGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReportGroups'>]-?: ReturnTypeFrom<'listReportGroups'>[K]}['reportGroups'] }>;

  listReports(params: { [K in keyof Omit<ParamsFrom<'listReports', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listReports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReports'>]-?: ReturnTypeFrom<'listReports'>[K]}['reports'] }>
  listReports(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReports'>]-?: ReturnTypeFrom<'listReports'>[K]}['reports'] }>;

  listReportsForReportGroup(params: { [K in keyof Omit<ParamsFrom<'listReportsForReportGroup', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listReportsForReportGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReportsForReportGroup'>]-?: ReturnTypeFrom<'listReportsForReportGroup'>[K]}['reports'] }>
  ;

  listSharedProjects(params: { [K in keyof Omit<ParamsFrom<'listSharedProjects', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSharedProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSharedProjects'>]-?: ReturnTypeFrom<'listSharedProjects'>[K]}['projects'] }>
  listSharedProjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSharedProjects'>]-?: ReturnTypeFrom<'listSharedProjects'>[K]}['projects'] }>;

  listSharedReportGroups(params: { [K in keyof Omit<ParamsFrom<'listSharedReportGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSharedReportGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSharedReportGroups'>]-?: ReturnTypeFrom<'listSharedReportGroups'>[K]}['reportGroups'] }>
  listSharedReportGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSharedReportGroups'>]-?: ReturnTypeFrom<'listSharedReportGroups'>[K]}['reportGroups'] }>;

  listSourceCredentials: FunctionTypeFrom<'listSourceCredentials'>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  retryBuild: FunctionTypeFrom<'retryBuild'>;

  retryBuildBatch: FunctionTypeFrom<'retryBuildBatch'>;

  startBuild: FunctionTypeFrom<'startBuild'>;

  startBuildBatch: FunctionTypeFrom<'startBuildBatch'>;

  stopBuild: FunctionTypeFrom<'stopBuild'>;

  stopBuildBatch: FunctionTypeFrom<'stopBuildBatch'>;

  updateProject: FunctionTypeFrom<'updateProject'>;

  updateProjectVisibility: FunctionTypeFrom<'updateProjectVisibility'>;

  updateReportGroup: FunctionTypeFrom<'updateReportGroup'>;

  updateWebhook: FunctionTypeFrom<'updateWebhook'>
}
 
export class CodeBuild implements ClientType {
  private constructor(private readonly client: AWSCodeBuild) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codebuild';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["listBuildBatches","listBuildBatchesForProject","listBuilds","listProjects","listReportGroups","listReports","listSharedProjects","listSharedReportGroups"] as const;
  
  async batchDeleteBuilds(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteBuilds(...args).promise()
  }

  async batchGetBuildBatches(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetBuildBatches(...args).promise()
  }

  async batchGetBuilds(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetBuilds(...args).promise()
  }

  async batchGetProjects(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetProjects(...args).promise()
  }

  async batchGetReportGroups(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetReportGroups(...args).promise()
  }

  async batchGetReports(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetReports(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async createReportGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createReportGroup(...args).promise()
  }

  async createWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.createWebhook(...args).promise()
  }

  async deleteBuildBatch(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBuildBatch(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async deleteReport(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReport(...args).promise()
  }

  async deleteReportGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReportGroup(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteSourceCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSourceCredentials(...args).promise()
  }

  async deleteWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWebhook(...args).promise()
  }

  async describeCodeCoverages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"codeCoverages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeCodeCoverages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.codeCoverages ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTestCases(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"testCases"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeTestCases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.testCases ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getReportGroupTrend(...args: any): Promise<any> {
  // undefined
    return this.client.getReportGroupTrend(...args).promise()
  }

  async getResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResourcePolicy(...args).promise()
  }

  async importSourceCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.importSourceCredentials(...args).promise()
  }

  async invalidateProjectCache(...args: any): Promise<any> {
  // undefined
    return this.client.invalidateProjectCache(...args).promise()
  }

  async listBuildBatches(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"ids"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBuildBatches(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.ids ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBuildBatchesForProject(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"ids"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBuildBatchesForProject(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.ids ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBuilds(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"ids"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listBuilds(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.ids ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBuildsForProject(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"ids"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listBuildsForProject(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.ids ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCuratedEnvironmentImages(...args: any): Promise<any> {
  // undefined
    return this.client.listCuratedEnvironmentImages(...args).promise()
  }

  async listProjects(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"projects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.projects ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReportGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reportGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReportGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.reportGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReports(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reports"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReports(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.reports ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReportsForReportGroup(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reports"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReportsForReportGroup(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.reports ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSharedProjects(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"projects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSharedProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.projects ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSharedReportGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reportGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSharedReportGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.reportGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSourceCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.listSourceCredentials(...args).promise()
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async retryBuild(...args: any): Promise<any> {
  // undefined
    return this.client.retryBuild(...args).promise()
  }

  async retryBuildBatch(...args: any): Promise<any> {
  // undefined
    return this.client.retryBuildBatch(...args).promise()
  }

  async startBuild(...args: any): Promise<any> {
  // undefined
    return this.client.startBuild(...args).promise()
  }

  async startBuildBatch(...args: any): Promise<any> {
  // undefined
    return this.client.startBuildBatch(...args).promise()
  }

  async stopBuild(...args: any): Promise<any> {
  // undefined
    return this.client.stopBuild(...args).promise()
  }

  async stopBuildBatch(...args: any): Promise<any> {
  // undefined
    return this.client.stopBuildBatch(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }

  async updateProjectVisibility(...args: any): Promise<any> {
  // undefined
    return this.client.updateProjectVisibility(...args).promise()
  }

  async updateReportGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateReportGroup(...args).promise()
  }

  async updateWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.updateWebhook(...args).promise()
  }
  
  static fromClient(client: AWSCodeBuild): ClientType {
    return new CodeBuild(client) as any;
  }
  
  static client(options?: AWSCodeBuild.Types.ClientConfiguration): ClientType {
    return new CodeBuild(new AWSCodeBuild(options)) as any;
  }
}  
