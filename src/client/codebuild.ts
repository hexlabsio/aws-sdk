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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeBuild> = AWSCodeBuild[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeBuild {
  private constructor(private readonly client: AWSCodeBuild) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codebuild' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["listBuildBatches","listBuildBatchesForProject","listBuilds","listProjects","listReportGroups","listReports","listSharedProjects","listSharedReportGroups"] as const;
  
  batchDeleteBuilds: (params: RawParamsFrom<'batchDeleteBuilds'>) => Promise<ReturnTypeFrom<'batchDeleteBuilds'>>  = async params => {
  // undefined
    return this.client.batchDeleteBuilds(params as any).promise();
  }

  batchGetBuildBatches: (params: RawParamsFrom<'batchGetBuildBatches'>) => Promise<ReturnTypeFrom<'batchGetBuildBatches'>>  = async params => {
  // undefined
    return this.client.batchGetBuildBatches(params as any).promise();
  }

  batchGetBuilds: (params: RawParamsFrom<'batchGetBuilds'>) => Promise<ReturnTypeFrom<'batchGetBuilds'>>  = async params => {
  // undefined
    return this.client.batchGetBuilds(params as any).promise();
  }

  batchGetProjects: (params: RawParamsFrom<'batchGetProjects'>) => Promise<ReturnTypeFrom<'batchGetProjects'>>  = async params => {
  // undefined
    return this.client.batchGetProjects(params as any).promise();
  }

  batchGetReportGroups: (params: RawParamsFrom<'batchGetReportGroups'>) => Promise<ReturnTypeFrom<'batchGetReportGroups'>>  = async params => {
  // undefined
    return this.client.batchGetReportGroups(params as any).promise();
  }

  batchGetReports: (params: RawParamsFrom<'batchGetReports'>) => Promise<ReturnTypeFrom<'batchGetReports'>>  = async params => {
  // undefined
    return this.client.batchGetReports(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  createReportGroup: (params: RawParamsFrom<'createReportGroup'>) => Promise<ReturnTypeFrom<'createReportGroup'>>  = async params => {
  // undefined
    return this.client.createReportGroup(params as any).promise();
  }

  createWebhook: (params: RawParamsFrom<'createWebhook'>) => Promise<ReturnTypeFrom<'createWebhook'>>  = async params => {
  // undefined
    return this.client.createWebhook(params as any).promise();
  }

  deleteBuildBatch: (params: RawParamsFrom<'deleteBuildBatch'>) => Promise<ReturnTypeFrom<'deleteBuildBatch'>>  = async params => {
  // undefined
    return this.client.deleteBuildBatch(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  deleteReport: (params: RawParamsFrom<'deleteReport'>) => Promise<ReturnTypeFrom<'deleteReport'>>  = async params => {
  // undefined
    return this.client.deleteReport(params as any).promise();
  }

  deleteReportGroup: (params: RawParamsFrom<'deleteReportGroup'>) => Promise<ReturnTypeFrom<'deleteReportGroup'>>  = async params => {
  // undefined
    return this.client.deleteReportGroup(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteSourceCredentials: (params: RawParamsFrom<'deleteSourceCredentials'>) => Promise<ReturnTypeFrom<'deleteSourceCredentials'>>  = async params => {
  // undefined
    return this.client.deleteSourceCredentials(params as any).promise();
  }

  deleteWebhook: (params: RawParamsFrom<'deleteWebhook'>) => Promise<ReturnTypeFrom<'deleteWebhook'>>  = async params => {
  // undefined
    return this.client.deleteWebhook(params as any).promise();
  }

  async describeCodeCoverages(params: { [K in keyof ParamsFrom<'describeCodeCoverages', { next?: string, limit?: number }>]: ParamsFrom<'describeCodeCoverages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCodeCoverages'>]-?: ReturnTypeFrom<'describeCodeCoverages'>[K]}['codeCoverages'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"codeCoverages"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeCodeCoverages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeCodeCoverages' })).toString('base64');
    const member = (Array.isArray(result.codeCoverages ?? []) ? (result.codeCoverages ?? []) : [result.codeCoverages]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTestCases(params: { [K in keyof ParamsFrom<'describeTestCases', { next?: string, limit?: number }>]: ParamsFrom<'describeTestCases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTestCases'>]-?: ReturnTypeFrom<'describeTestCases'>[K]}['testCases'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"testCases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeTestCases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeTestCases' })).toString('base64');
    const member = (Array.isArray(result.testCases ?? []) ? (result.testCases ?? []) : [result.testCases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getReportGroupTrend: (params: RawParamsFrom<'getReportGroupTrend'>) => Promise<ReturnTypeFrom<'getReportGroupTrend'>>  = async params => {
  // undefined
    return this.client.getReportGroupTrend(params as any).promise();
  }

  getResourcePolicy: (params: RawParamsFrom<'getResourcePolicy'>) => Promise<ReturnTypeFrom<'getResourcePolicy'>>  = async params => {
  // undefined
    return this.client.getResourcePolicy(params as any).promise();
  }

  importSourceCredentials: (params: RawParamsFrom<'importSourceCredentials'>) => Promise<ReturnTypeFrom<'importSourceCredentials'>>  = async params => {
  // undefined
    return this.client.importSourceCredentials(params as any).promise();
  }

  invalidateProjectCache: (params: RawParamsFrom<'invalidateProjectCache'>) => Promise<ReturnTypeFrom<'invalidateProjectCache'>>  = async params => {
  // undefined
    return this.client.invalidateProjectCache(params as any).promise();
  }

  async listBuildBatches(params: { [K in keyof ParamsFrom<'listBuildBatches', { next?: string, limit?: number }>]: ParamsFrom<'listBuildBatches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBuildBatches'>]-?: ReturnTypeFrom<'listBuildBatches'>[K]}['ids'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"ids"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBuildBatches({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listBuildBatches' })).toString('base64');
    const member = (Array.isArray(result.ids ?? []) ? (result.ids ?? []) : [result.ids]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBuildBatchesForProject(params: { [K in keyof ParamsFrom<'listBuildBatchesForProject', { next?: string, limit?: number }>]: ParamsFrom<'listBuildBatchesForProject', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBuildBatchesForProject'>]-?: ReturnTypeFrom<'listBuildBatchesForProject'>[K]}['ids'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"ids"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBuildBatchesForProject({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listBuildBatchesForProject' })).toString('base64');
    const member = (Array.isArray(result.ids ?? []) ? (result.ids ?? []) : [result.ids]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBuilds(params: { [K in keyof ParamsFrom<'listBuilds', { next?: string }>]: ParamsFrom<'listBuilds', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBuilds'>]-?: ReturnTypeFrom<'listBuilds'>[K]}['ids'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"ids"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listBuilds({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listBuilds' })).toString('base64');
    const member = (Array.isArray(result.ids ?? []) ? (result.ids ?? []) : [result.ids]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBuildsForProject(params: { [K in keyof ParamsFrom<'listBuildsForProject', { next?: string }>]: ParamsFrom<'listBuildsForProject', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBuildsForProject'>]-?: ReturnTypeFrom<'listBuildsForProject'>[K]}['ids'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"ids"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listBuildsForProject({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listBuildsForProject' })).toString('base64');
    const member = (Array.isArray(result.ids ?? []) ? (result.ids ?? []) : [result.ids]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listCuratedEnvironmentImages: (params: RawParamsFrom<'listCuratedEnvironmentImages'>) => Promise<ReturnTypeFrom<'listCuratedEnvironmentImages'>>  = async params => {
  // undefined
    return this.client.listCuratedEnvironmentImages(params as any).promise();
  }

  async listProjects(params: { [K in keyof ParamsFrom<'listProjects', { next?: string }>]: ParamsFrom<'listProjects', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"projects"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProjects' })).toString('base64');
    const member = (Array.isArray(result.projects ?? []) ? (result.projects ?? []) : [result.projects]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReportGroups(params: { [K in keyof ParamsFrom<'listReportGroups', { next?: string, limit?: number }>]: ParamsFrom<'listReportGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReportGroups'>]-?: ReturnTypeFrom<'listReportGroups'>[K]}['reportGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reportGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReportGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReportGroups' })).toString('base64');
    const member = (Array.isArray(result.reportGroups ?? []) ? (result.reportGroups ?? []) : [result.reportGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReports(params: { [K in keyof ParamsFrom<'listReports', { next?: string, limit?: number }>]: ParamsFrom<'listReports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReports'>]-?: ReturnTypeFrom<'listReports'>[K]}['reports'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reports"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReports({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReports' })).toString('base64');
    const member = (Array.isArray(result.reports ?? []) ? (result.reports ?? []) : [result.reports]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReportsForReportGroup(params: { [K in keyof ParamsFrom<'listReportsForReportGroup', { next?: string, limit?: number }>]: ParamsFrom<'listReportsForReportGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReportsForReportGroup'>]-?: ReturnTypeFrom<'listReportsForReportGroup'>[K]}['reports'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reports"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReportsForReportGroup({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listReportsForReportGroup' })).toString('base64');
    const member = (Array.isArray(result.reports ?? []) ? (result.reports ?? []) : [result.reports]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSharedProjects(params: { [K in keyof ParamsFrom<'listSharedProjects', { next?: string, limit?: number }>]: ParamsFrom<'listSharedProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSharedProjects'>]-?: ReturnTypeFrom<'listSharedProjects'>[K]}['projects'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"projects"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSharedProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSharedProjects' })).toString('base64');
    const member = (Array.isArray(result.projects ?? []) ? (result.projects ?? []) : [result.projects]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSharedReportGroups(params: { [K in keyof ParamsFrom<'listSharedReportGroups', { next?: string, limit?: number }>]: ParamsFrom<'listSharedReportGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSharedReportGroups'>]-?: ReturnTypeFrom<'listSharedReportGroups'>[K]}['reportGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"reportGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSharedReportGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSharedReportGroups' })).toString('base64');
    const member = (Array.isArray(result.reportGroups ?? []) ? (result.reportGroups ?? []) : [result.reportGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listSourceCredentials: (params: RawParamsFrom<'listSourceCredentials'>) => Promise<ReturnTypeFrom<'listSourceCredentials'>>  = async params => {
  // undefined
    return this.client.listSourceCredentials(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  retryBuild: (params: RawParamsFrom<'retryBuild'>) => Promise<ReturnTypeFrom<'retryBuild'>>  = async params => {
  // undefined
    return this.client.retryBuild(params as any).promise();
  }

  retryBuildBatch: (params: RawParamsFrom<'retryBuildBatch'>) => Promise<ReturnTypeFrom<'retryBuildBatch'>>  = async params => {
  // undefined
    return this.client.retryBuildBatch(params as any).promise();
  }

  startBuild: (params: RawParamsFrom<'startBuild'>) => Promise<ReturnTypeFrom<'startBuild'>>  = async params => {
  // undefined
    return this.client.startBuild(params as any).promise();
  }

  startBuildBatch: (params: RawParamsFrom<'startBuildBatch'>) => Promise<ReturnTypeFrom<'startBuildBatch'>>  = async params => {
  // undefined
    return this.client.startBuildBatch(params as any).promise();
  }

  stopBuild: (params: RawParamsFrom<'stopBuild'>) => Promise<ReturnTypeFrom<'stopBuild'>>  = async params => {
  // undefined
    return this.client.stopBuild(params as any).promise();
  }

  stopBuildBatch: (params: RawParamsFrom<'stopBuildBatch'>) => Promise<ReturnTypeFrom<'stopBuildBatch'>>  = async params => {
  // undefined
    return this.client.stopBuildBatch(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }

  updateProjectVisibility: (params: RawParamsFrom<'updateProjectVisibility'>) => Promise<ReturnTypeFrom<'updateProjectVisibility'>>  = async params => {
  // undefined
    return this.client.updateProjectVisibility(params as any).promise();
  }

  updateReportGroup: (params: RawParamsFrom<'updateReportGroup'>) => Promise<ReturnTypeFrom<'updateReportGroup'>>  = async params => {
  // undefined
    return this.client.updateReportGroup(params as any).promise();
  }

  updateWebhook: (params: RawParamsFrom<'updateWebhook'>) => Promise<ReturnTypeFrom<'updateWebhook'>>  = async params => {
  // undefined
    return this.client.updateWebhook(params as any).promise();
  }
  
  static fromClient(client: AWSCodeBuild): CodeBuild {
    return new CodeBuild(client) as any;
  }
  
  static client(options?: AWSCodeBuild.Types.ClientConfiguration): CodeBuild {
    return new CodeBuild(new AWSCodeBuild(options)) as any;
  }
}  
