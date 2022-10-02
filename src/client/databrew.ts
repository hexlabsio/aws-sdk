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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'databrew';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["listDatasets","listJobs","listProjects","listRecipes","listRulesets","listSchedules"];
    
  batchDeleteRecipeVersion: FunctionTypeFrom<'batchDeleteRecipeVersion'>;

  createDataset: FunctionTypeFrom<'createDataset'>;

  createProfileJob: FunctionTypeFrom<'createProfileJob'>;

  createProject: FunctionTypeFrom<'createProject'>;

  createRecipe: FunctionTypeFrom<'createRecipe'>;

  createRecipeJob: FunctionTypeFrom<'createRecipeJob'>;

  createRuleset: FunctionTypeFrom<'createRuleset'>;

  createSchedule: FunctionTypeFrom<'createSchedule'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  deleteJob: FunctionTypeFrom<'deleteJob'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  deleteRecipeVersion: FunctionTypeFrom<'deleteRecipeVersion'>;

  deleteRuleset: FunctionTypeFrom<'deleteRuleset'>;

  deleteSchedule: FunctionTypeFrom<'deleteSchedule'>;

  describeDataset: FunctionTypeFrom<'describeDataset'>;

  describeJob: FunctionTypeFrom<'describeJob'>;

  describeJobRun: FunctionTypeFrom<'describeJobRun'>;

  describeProject: FunctionTypeFrom<'describeProject'>;

  describeRecipe: FunctionTypeFrom<'describeRecipe'>;

  describeRuleset: FunctionTypeFrom<'describeRuleset'>;

  describeSchedule: FunctionTypeFrom<'describeSchedule'>;

  listDatasets(params: { [K in keyof Omit<ParamsFrom<'listDatasets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatasets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['Datasets'] }>
  listDatasets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['Datasets'] }>;

  listJobRuns(params: { [K in keyof Omit<ParamsFrom<'listJobRuns', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listJobRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobRuns'>]-?: ReturnTypeFrom<'listJobRuns'>[K]}['JobRuns'] }>
  ;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'] }>
  listJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'] }>;

  listProjects(params: { [K in keyof Omit<ParamsFrom<'listProjects', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['Projects'] }>
  listProjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['Projects'] }>;

  listRecipeVersions(params: { [K in keyof Omit<ParamsFrom<'listRecipeVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRecipeVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecipeVersions'>]-?: ReturnTypeFrom<'listRecipeVersions'>[K]}['Recipes'] }>
  ;

  listRecipes(params: { [K in keyof Omit<ParamsFrom<'listRecipes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRecipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecipes'>]-?: ReturnTypeFrom<'listRecipes'>[K]}['Recipes'] }>
  listRecipes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecipes'>]-?: ReturnTypeFrom<'listRecipes'>[K]}['Recipes'] }>;

  listRulesets(params: { [K in keyof Omit<ParamsFrom<'listRulesets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRulesets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRulesets'>]-?: ReturnTypeFrom<'listRulesets'>[K]}['Rulesets'] }>
  listRulesets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRulesets'>]-?: ReturnTypeFrom<'listRulesets'>[K]}['Rulesets'] }>;

  listSchedules(params: { [K in keyof Omit<ParamsFrom<'listSchedules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchedules'>]-?: ReturnTypeFrom<'listSchedules'>[K]}['Schedules'] }>
  listSchedules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchedules'>]-?: ReturnTypeFrom<'listSchedules'>[K]}['Schedules'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  publishRecipe: FunctionTypeFrom<'publishRecipe'>;

  sendProjectSessionAction: FunctionTypeFrom<'sendProjectSessionAction'>;

  startJobRun: FunctionTypeFrom<'startJobRun'>;

  startProjectSession: FunctionTypeFrom<'startProjectSession'>;

  stopJobRun: FunctionTypeFrom<'stopJobRun'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDataset: FunctionTypeFrom<'updateDataset'>;

  updateProfileJob: FunctionTypeFrom<'updateProfileJob'>;

  updateProject: FunctionTypeFrom<'updateProject'>;

  updateRecipe: FunctionTypeFrom<'updateRecipe'>;

  updateRecipeJob: FunctionTypeFrom<'updateRecipeJob'>;

  updateRuleset: FunctionTypeFrom<'updateRuleset'>;

  updateSchedule: FunctionTypeFrom<'updateSchedule'>
}
 
export class DataBrew implements ClientType {
  private constructor(private readonly client: AWSDataBrew) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'databrew';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["listDatasets","listJobs","listProjects","listRecipes","listRulesets","listSchedules"] as const;
  
  async batchDeleteRecipeVersion(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteRecipeVersion(...args).promise()
  }

  async createDataset(...args: any): Promise<any> {
  // undefined
    return this.client.createDataset(...args).promise()
  }

  async createProfileJob(...args: any): Promise<any> {
  // undefined
    return this.client.createProfileJob(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async createRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.createRecipe(...args).promise()
  }

  async createRecipeJob(...args: any): Promise<any> {
  // undefined
    return this.client.createRecipeJob(...args).promise()
  }

  async createRuleset(...args: any): Promise<any> {
  // undefined
    return this.client.createRuleset(...args).promise()
  }

  async createSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.createSchedule(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async deleteJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJob(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async deleteRecipeVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecipeVersion(...args).promise()
  }

  async deleteRuleset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRuleset(...args).promise()
  }

  async deleteSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchedule(...args).promise()
  }

  async describeDataset(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataset(...args).promise()
  }

  async describeJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeJob(...args).promise()
  }

  async describeJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.describeJobRun(...args).promise()
  }

  async describeProject(...args: any): Promise<any> {
  // undefined
    return this.client.describeProject(...args).promise()
  }

  async describeRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.describeRecipe(...args).promise()
  }

  async describeRuleset(...args: any): Promise<any> {
  // undefined
    return this.client.describeRuleset(...args).promise()
  }

  async describeSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.describeSchedule(...args).promise()
  }

  async listDatasets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Datasets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Datasets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobRuns(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobRuns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobRuns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobRuns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Projects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Projects ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecipeVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Recipes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecipeVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Recipes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecipes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Recipes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecipes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Recipes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRulesets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Rulesets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRulesets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Rulesets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchedules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schedules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSchedules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Schedules ?? [];
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

  async publishRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.publishRecipe(...args).promise()
  }

  async sendProjectSessionAction(...args: any): Promise<any> {
  // undefined
    return this.client.sendProjectSessionAction(...args).promise()
  }

  async startJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.startJobRun(...args).promise()
  }

  async startProjectSession(...args: any): Promise<any> {
  // undefined
    return this.client.startProjectSession(...args).promise()
  }

  async stopJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.stopJobRun(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDataset(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataset(...args).promise()
  }

  async updateProfileJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateProfileJob(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }

  async updateRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.updateRecipe(...args).promise()
  }

  async updateRecipeJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateRecipeJob(...args).promise()
  }

  async updateRuleset(...args: any): Promise<any> {
  // undefined
    return this.client.updateRuleset(...args).promise()
  }

  async updateSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.updateSchedule(...args).promise()
  }
  
  static fromClient(client: AWSDataBrew): ClientType {
    return new DataBrew(client) as any;
  }
  
  static client(options?: AWSDataBrew.Types.ClientConfiguration): ClientType {
    return new DataBrew(new AWSDataBrew(options)) as any;
  }
}  
