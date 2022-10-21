import { Request, DataBrew as AWSDataBrew } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDataBrew> = AWSDataBrew[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDataBrew> = AWSDataBrew[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDataBrew[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDataBrew, Extras> = AWSDataBrew[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDataBrew> = AWSDataBrew[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DataBrew {
  private constructor(private readonly client: AWSDataBrew) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'databrew' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["listDatasets","listJobs","listProjects","listRecipes","listRulesets","listSchedules"] as const;
  
  batchDeleteRecipeVersion: (params: RawParamsFrom<'batchDeleteRecipeVersion'>) => Promise<ReturnTypeFrom<'batchDeleteRecipeVersion'>>  = async params => {
  // undefined
    return this.client.batchDeleteRecipeVersion(params as any).promise();
  }

  createDataset: (params: RawParamsFrom<'createDataset'>) => Promise<ReturnTypeFrom<'createDataset'>>  = async params => {
  // undefined
    return this.client.createDataset(params as any).promise();
  }

  createProfileJob: (params: RawParamsFrom<'createProfileJob'>) => Promise<ReturnTypeFrom<'createProfileJob'>>  = async params => {
  // undefined
    return this.client.createProfileJob(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  createRecipe: (params: RawParamsFrom<'createRecipe'>) => Promise<ReturnTypeFrom<'createRecipe'>>  = async params => {
  // undefined
    return this.client.createRecipe(params as any).promise();
  }

  createRecipeJob: (params: RawParamsFrom<'createRecipeJob'>) => Promise<ReturnTypeFrom<'createRecipeJob'>>  = async params => {
  // undefined
    return this.client.createRecipeJob(params as any).promise();
  }

  createRuleset: (params: RawParamsFrom<'createRuleset'>) => Promise<ReturnTypeFrom<'createRuleset'>>  = async params => {
  // undefined
    return this.client.createRuleset(params as any).promise();
  }

  createSchedule: (params: RawParamsFrom<'createSchedule'>) => Promise<ReturnTypeFrom<'createSchedule'>>  = async params => {
  // undefined
    return this.client.createSchedule(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  deleteJob: (params: RawParamsFrom<'deleteJob'>) => Promise<ReturnTypeFrom<'deleteJob'>>  = async params => {
  // undefined
    return this.client.deleteJob(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  deleteRecipeVersion: (params: RawParamsFrom<'deleteRecipeVersion'>) => Promise<ReturnTypeFrom<'deleteRecipeVersion'>>  = async params => {
  // undefined
    return this.client.deleteRecipeVersion(params as any).promise();
  }

  deleteRuleset: (params: RawParamsFrom<'deleteRuleset'>) => Promise<ReturnTypeFrom<'deleteRuleset'>>  = async params => {
  // undefined
    return this.client.deleteRuleset(params as any).promise();
  }

  deleteSchedule: (params: RawParamsFrom<'deleteSchedule'>) => Promise<ReturnTypeFrom<'deleteSchedule'>>  = async params => {
  // undefined
    return this.client.deleteSchedule(params as any).promise();
  }

  describeDataset: (params: RawParamsFrom<'describeDataset'>) => Promise<ReturnTypeFrom<'describeDataset'>>  = async params => {
  // undefined
    return this.client.describeDataset(params as any).promise();
  }

  describeJob: (params: RawParamsFrom<'describeJob'>) => Promise<ReturnTypeFrom<'describeJob'>>  = async params => {
  // undefined
    return this.client.describeJob(params as any).promise();
  }

  describeJobRun: (params: RawParamsFrom<'describeJobRun'>) => Promise<ReturnTypeFrom<'describeJobRun'>>  = async params => {
  // undefined
    return this.client.describeJobRun(params as any).promise();
  }

  describeProject: (params: RawParamsFrom<'describeProject'>) => Promise<ReturnTypeFrom<'describeProject'>>  = async params => {
  // undefined
    return this.client.describeProject(params as any).promise();
  }

  describeRecipe: (params: RawParamsFrom<'describeRecipe'>) => Promise<ReturnTypeFrom<'describeRecipe'>>  = async params => {
  // undefined
    return this.client.describeRecipe(params as any).promise();
  }

  describeRuleset: (params: RawParamsFrom<'describeRuleset'>) => Promise<ReturnTypeFrom<'describeRuleset'>>  = async params => {
  // undefined
    return this.client.describeRuleset(params as any).promise();
  }

  describeSchedule: (params: RawParamsFrom<'describeSchedule'>) => Promise<ReturnTypeFrom<'describeSchedule'>>  = async params => {
  // undefined
    return this.client.describeSchedule(params as any).promise();
  }

  async listDatasets(params: { [K in keyof ParamsFrom<'listDatasets', { next?: string, limit?: number }>]: ParamsFrom<'listDatasets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['Datasets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Datasets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Datasets ?? []) ? (result.Datasets ?? []) : [result.Datasets]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listJobRuns(params: { [K in keyof ParamsFrom<'listJobRuns', { next?: string, limit?: number }>]: ParamsFrom<'listJobRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobRuns'>]-?: ReturnTypeFrom<'listJobRuns'>[K]}['JobRuns'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobRuns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobRuns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.JobRuns ?? []) ? (result.JobRuns ?? []) : [result.JobRuns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string, limit?: number }>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Jobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Jobs ?? []) ? (result.Jobs ?? []) : [result.Jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listProjects(params: { [K in keyof ParamsFrom<'listProjects', { next?: string, limit?: number }>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['Projects'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Projects"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Projects ?? []) ? (result.Projects ?? []) : [result.Projects]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRecipeVersions(params: { [K in keyof ParamsFrom<'listRecipeVersions', { next?: string, limit?: number }>]: ParamsFrom<'listRecipeVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecipeVersions'>]-?: ReturnTypeFrom<'listRecipeVersions'>[K]}['Recipes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Recipes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecipeVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Recipes ?? []) ? (result.Recipes ?? []) : [result.Recipes]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRecipes(params: { [K in keyof ParamsFrom<'listRecipes', { next?: string, limit?: number }>]: ParamsFrom<'listRecipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecipes'>]-?: ReturnTypeFrom<'listRecipes'>[K]}['Recipes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Recipes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecipes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Recipes ?? []) ? (result.Recipes ?? []) : [result.Recipes]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRulesets(params: { [K in keyof ParamsFrom<'listRulesets', { next?: string, limit?: number }>]: ParamsFrom<'listRulesets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRulesets'>]-?: ReturnTypeFrom<'listRulesets'>[K]}['Rulesets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Rulesets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRulesets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Rulesets ?? []) ? (result.Rulesets ?? []) : [result.Rulesets]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSchedules(params: { [K in keyof ParamsFrom<'listSchedules', { next?: string, limit?: number }>]: ParamsFrom<'listSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchedules'>]-?: ReturnTypeFrom<'listSchedules'>[K]}['Schedules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schedules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSchedules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Schedules ?? []) ? (result.Schedules ?? []) : [result.Schedules]) as any;
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

  publishRecipe: (params: RawParamsFrom<'publishRecipe'>) => Promise<ReturnTypeFrom<'publishRecipe'>>  = async params => {
  // undefined
    return this.client.publishRecipe(params as any).promise();
  }

  sendProjectSessionAction: (params: RawParamsFrom<'sendProjectSessionAction'>) => Promise<ReturnTypeFrom<'sendProjectSessionAction'>>  = async params => {
  // undefined
    return this.client.sendProjectSessionAction(params as any).promise();
  }

  startJobRun: (params: RawParamsFrom<'startJobRun'>) => Promise<ReturnTypeFrom<'startJobRun'>>  = async params => {
  // undefined
    return this.client.startJobRun(params as any).promise();
  }

  startProjectSession: (params: RawParamsFrom<'startProjectSession'>) => Promise<ReturnTypeFrom<'startProjectSession'>>  = async params => {
  // undefined
    return this.client.startProjectSession(params as any).promise();
  }

  stopJobRun: (params: RawParamsFrom<'stopJobRun'>) => Promise<ReturnTypeFrom<'stopJobRun'>>  = async params => {
  // undefined
    return this.client.stopJobRun(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDataset: (params: RawParamsFrom<'updateDataset'>) => Promise<ReturnTypeFrom<'updateDataset'>>  = async params => {
  // undefined
    return this.client.updateDataset(params as any).promise();
  }

  updateProfileJob: (params: RawParamsFrom<'updateProfileJob'>) => Promise<ReturnTypeFrom<'updateProfileJob'>>  = async params => {
  // undefined
    return this.client.updateProfileJob(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }

  updateRecipe: (params: RawParamsFrom<'updateRecipe'>) => Promise<ReturnTypeFrom<'updateRecipe'>>  = async params => {
  // undefined
    return this.client.updateRecipe(params as any).promise();
  }

  updateRecipeJob: (params: RawParamsFrom<'updateRecipeJob'>) => Promise<ReturnTypeFrom<'updateRecipeJob'>>  = async params => {
  // undefined
    return this.client.updateRecipeJob(params as any).promise();
  }

  updateRuleset: (params: RawParamsFrom<'updateRuleset'>) => Promise<ReturnTypeFrom<'updateRuleset'>>  = async params => {
  // undefined
    return this.client.updateRuleset(params as any).promise();
  }

  updateSchedule: (params: RawParamsFrom<'updateSchedule'>) => Promise<ReturnTypeFrom<'updateSchedule'>>  = async params => {
  // undefined
    return this.client.updateSchedule(params as any).promise();
  }
  
  static fromClient(client: AWSDataBrew): DataBrew {
    return new DataBrew(client) as any;
  }
  
  static client(options?: AWSDataBrew.Types.ClientConfiguration): DataBrew {
    return new DataBrew(new AWSDataBrew(options)) as any;
  }
}  
