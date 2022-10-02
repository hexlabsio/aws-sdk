import { Request, Personalize as AWSPersonalize } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPersonalize> = AWSPersonalize[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPersonalize> = AWSPersonalize[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPersonalize[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPersonalize, Extras> = AWSPersonalize[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'personalize';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listBatchInferenceJobs","listBatchSegmentJobs","listCampaigns","listDatasetExportJobs","listDatasetGroups","listDatasetImportJobs","listDatasets","listEventTrackers","listFilters","listRecipes","listRecommenders","listSchemas","listSolutionVersions","listSolutions"];
    
  createBatchInferenceJob: FunctionTypeFrom<'createBatchInferenceJob'>;

  createBatchSegmentJob: FunctionTypeFrom<'createBatchSegmentJob'>;

  createCampaign: FunctionTypeFrom<'createCampaign'>;

  createDataset: FunctionTypeFrom<'createDataset'>;

  createDatasetExportJob: FunctionTypeFrom<'createDatasetExportJob'>;

  createDatasetGroup: FunctionTypeFrom<'createDatasetGroup'>;

  createDatasetImportJob: FunctionTypeFrom<'createDatasetImportJob'>;

  createEventTracker: FunctionTypeFrom<'createEventTracker'>;

  createFilter: FunctionTypeFrom<'createFilter'>;

  createRecommender: FunctionTypeFrom<'createRecommender'>;

  createSchema: FunctionTypeFrom<'createSchema'>;

  createSolution: FunctionTypeFrom<'createSolution'>;

  createSolutionVersion: FunctionTypeFrom<'createSolutionVersion'>;

  deleteCampaign: FunctionTypeFrom<'deleteCampaign'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  deleteDatasetGroup: FunctionTypeFrom<'deleteDatasetGroup'>;

  deleteEventTracker: FunctionTypeFrom<'deleteEventTracker'>;

  deleteFilter: FunctionTypeFrom<'deleteFilter'>;

  deleteRecommender: FunctionTypeFrom<'deleteRecommender'>;

  deleteSchema: FunctionTypeFrom<'deleteSchema'>;

  deleteSolution: FunctionTypeFrom<'deleteSolution'>;

  describeAlgorithm: FunctionTypeFrom<'describeAlgorithm'>;

  describeBatchInferenceJob: FunctionTypeFrom<'describeBatchInferenceJob'>;

  describeBatchSegmentJob: FunctionTypeFrom<'describeBatchSegmentJob'>;

  describeCampaign: FunctionTypeFrom<'describeCampaign'>;

  describeDataset: FunctionTypeFrom<'describeDataset'>;

  describeDatasetExportJob: FunctionTypeFrom<'describeDatasetExportJob'>;

  describeDatasetGroup: FunctionTypeFrom<'describeDatasetGroup'>;

  describeDatasetImportJob: FunctionTypeFrom<'describeDatasetImportJob'>;

  describeEventTracker: FunctionTypeFrom<'describeEventTracker'>;

  describeFeatureTransformation: FunctionTypeFrom<'describeFeatureTransformation'>;

  describeFilter: FunctionTypeFrom<'describeFilter'>;

  describeRecipe: FunctionTypeFrom<'describeRecipe'>;

  describeRecommender: FunctionTypeFrom<'describeRecommender'>;

  describeSchema: FunctionTypeFrom<'describeSchema'>;

  describeSolution: FunctionTypeFrom<'describeSolution'>;

  describeSolutionVersion: FunctionTypeFrom<'describeSolutionVersion'>;

  getSolutionMetrics: FunctionTypeFrom<'getSolutionMetrics'>;

  listBatchInferenceJobs(params: { [K in keyof Omit<ParamsFrom<'listBatchInferenceJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listBatchInferenceJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBatchInferenceJobs'>]-?: ReturnTypeFrom<'listBatchInferenceJobs'>[K]}['batchInferenceJobs'] }>
  listBatchInferenceJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBatchInferenceJobs'>]-?: ReturnTypeFrom<'listBatchInferenceJobs'>[K]}['batchInferenceJobs'] }>;

  listBatchSegmentJobs(params: { [K in keyof Omit<ParamsFrom<'listBatchSegmentJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listBatchSegmentJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBatchSegmentJobs'>]-?: ReturnTypeFrom<'listBatchSegmentJobs'>[K]}['batchSegmentJobs'] }>
  listBatchSegmentJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBatchSegmentJobs'>]-?: ReturnTypeFrom<'listBatchSegmentJobs'>[K]}['batchSegmentJobs'] }>;

  listCampaigns(params: { [K in keyof Omit<ParamsFrom<'listCampaigns', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCampaigns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaigns'] }>
  listCampaigns(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaigns'] }>;

  listDatasetExportJobs(params: { [K in keyof Omit<ParamsFrom<'listDatasetExportJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDatasetExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetExportJobs'>]-?: ReturnTypeFrom<'listDatasetExportJobs'>[K]}['datasetExportJobs'] }>
  listDatasetExportJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetExportJobs'>]-?: ReturnTypeFrom<'listDatasetExportJobs'>[K]}['datasetExportJobs'] }>;

  listDatasetGroups(params: { [K in keyof Omit<ParamsFrom<'listDatasetGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDatasetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetGroups'>]-?: ReturnTypeFrom<'listDatasetGroups'>[K]}['datasetGroups'] }>
  listDatasetGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetGroups'>]-?: ReturnTypeFrom<'listDatasetGroups'>[K]}['datasetGroups'] }>;

  listDatasetImportJobs(params: { [K in keyof Omit<ParamsFrom<'listDatasetImportJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDatasetImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetImportJobs'>]-?: ReturnTypeFrom<'listDatasetImportJobs'>[K]}['datasetImportJobs'] }>
  listDatasetImportJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetImportJobs'>]-?: ReturnTypeFrom<'listDatasetImportJobs'>[K]}['datasetImportJobs'] }>;

  listDatasets(params: { [K in keyof Omit<ParamsFrom<'listDatasets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDatasets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['datasets'] }>
  listDatasets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['datasets'] }>;

  listEventTrackers(params: { [K in keyof Omit<ParamsFrom<'listEventTrackers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEventTrackers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEventTrackers'>]-?: ReturnTypeFrom<'listEventTrackers'>[K]}['eventTrackers'] }>
  listEventTrackers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEventTrackers'>]-?: ReturnTypeFrom<'listEventTrackers'>[K]}['eventTrackers'] }>;

  listFilters(params: { [K in keyof Omit<ParamsFrom<'listFilters', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFilters'>]-?: ReturnTypeFrom<'listFilters'>[K]}['Filters'] }>
  listFilters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFilters'>]-?: ReturnTypeFrom<'listFilters'>[K]}['Filters'] }>;

  listRecipes(params: { [K in keyof Omit<ParamsFrom<'listRecipes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRecipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecipes'>]-?: ReturnTypeFrom<'listRecipes'>[K]}['recipes'] }>
  listRecipes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecipes'>]-?: ReturnTypeFrom<'listRecipes'>[K]}['recipes'] }>;

  listRecommenders(params: { [K in keyof Omit<ParamsFrom<'listRecommenders', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRecommenders', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecommenders'>]-?: ReturnTypeFrom<'listRecommenders'>[K]}['recommenders'] }>
  listRecommenders(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecommenders'>]-?: ReturnTypeFrom<'listRecommenders'>[K]}['recommenders'] }>;

  listSchemas(params: { [K in keyof Omit<ParamsFrom<'listSchemas', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['schemas'] }>
  listSchemas(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['schemas'] }>;

  listSolutionVersions(params: { [K in keyof Omit<ParamsFrom<'listSolutionVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSolutionVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSolutionVersions'>]-?: ReturnTypeFrom<'listSolutionVersions'>[K]}['solutionVersions'] }>
  listSolutionVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSolutionVersions'>]-?: ReturnTypeFrom<'listSolutionVersions'>[K]}['solutionVersions'] }>;

  listSolutions(params: { [K in keyof Omit<ParamsFrom<'listSolutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSolutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSolutions'>]-?: ReturnTypeFrom<'listSolutions'>[K]}['solutions'] }>
  listSolutions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSolutions'>]-?: ReturnTypeFrom<'listSolutions'>[K]}['solutions'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startRecommender: FunctionTypeFrom<'startRecommender'>;

  stopRecommender: FunctionTypeFrom<'stopRecommender'>;

  stopSolutionVersionCreation: FunctionTypeFrom<'stopSolutionVersionCreation'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCampaign: FunctionTypeFrom<'updateCampaign'>;

  updateRecommender: FunctionTypeFrom<'updateRecommender'>
}
 
export class Personalize implements ClientType {
  private constructor(private readonly client: AWSPersonalize) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'personalize';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listBatchInferenceJobs","listBatchSegmentJobs","listCampaigns","listDatasetExportJobs","listDatasetGroups","listDatasetImportJobs","listDatasets","listEventTrackers","listFilters","listRecipes","listRecommenders","listSchemas","listSolutionVersions","listSolutions"] as const;
  
  async createBatchInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.createBatchInferenceJob(...args).promise()
  }

  async createBatchSegmentJob(...args: any): Promise<any> {
  // undefined
    return this.client.createBatchSegmentJob(...args).promise()
  }

  async createCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.createCampaign(...args).promise()
  }

  async createDataset(...args: any): Promise<any> {
  // undefined
    return this.client.createDataset(...args).promise()
  }

  async createDatasetExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createDatasetExportJob(...args).promise()
  }

  async createDatasetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDatasetGroup(...args).promise()
  }

  async createDatasetImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createDatasetImportJob(...args).promise()
  }

  async createEventTracker(...args: any): Promise<any> {
  // undefined
    return this.client.createEventTracker(...args).promise()
  }

  async createFilter(...args: any): Promise<any> {
  // undefined
    return this.client.createFilter(...args).promise()
  }

  async createRecommender(...args: any): Promise<any> {
  // undefined
    return this.client.createRecommender(...args).promise()
  }

  async createSchema(...args: any): Promise<any> {
  // undefined
    return this.client.createSchema(...args).promise()
  }

  async createSolution(...args: any): Promise<any> {
  // undefined
    return this.client.createSolution(...args).promise()
  }

  async createSolutionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createSolutionVersion(...args).promise()
  }

  async deleteCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCampaign(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async deleteDatasetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDatasetGroup(...args).promise()
  }

  async deleteEventTracker(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventTracker(...args).promise()
  }

  async deleteFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFilter(...args).promise()
  }

  async deleteRecommender(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecommender(...args).promise()
  }

  async deleteSchema(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchema(...args).promise()
  }

  async deleteSolution(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSolution(...args).promise()
  }

  async describeAlgorithm(...args: any): Promise<any> {
  // undefined
    return this.client.describeAlgorithm(...args).promise()
  }

  async describeBatchInferenceJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeBatchInferenceJob(...args).promise()
  }

  async describeBatchSegmentJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeBatchSegmentJob(...args).promise()
  }

  async describeCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.describeCampaign(...args).promise()
  }

  async describeDataset(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataset(...args).promise()
  }

  async describeDatasetExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeDatasetExportJob(...args).promise()
  }

  async describeDatasetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeDatasetGroup(...args).promise()
  }

  async describeDatasetImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeDatasetImportJob(...args).promise()
  }

  async describeEventTracker(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventTracker(...args).promise()
  }

  async describeFeatureTransformation(...args: any): Promise<any> {
  // undefined
    return this.client.describeFeatureTransformation(...args).promise()
  }

  async describeFilter(...args: any): Promise<any> {
  // undefined
    return this.client.describeFilter(...args).promise()
  }

  async describeRecipe(...args: any): Promise<any> {
  // undefined
    return this.client.describeRecipe(...args).promise()
  }

  async describeRecommender(...args: any): Promise<any> {
  // undefined
    return this.client.describeRecommender(...args).promise()
  }

  async describeSchema(...args: any): Promise<any> {
  // undefined
    return this.client.describeSchema(...args).promise()
  }

  async describeSolution(...args: any): Promise<any> {
  // undefined
    return this.client.describeSolution(...args).promise()
  }

  async describeSolutionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.describeSolutionVersion(...args).promise()
  }

  async getSolutionMetrics(...args: any): Promise<any> {
  // undefined
    return this.client.getSolutionMetrics(...args).promise()
  }

  async listBatchInferenceJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"batchInferenceJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBatchInferenceJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.batchInferenceJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBatchSegmentJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"batchSegmentJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBatchSegmentJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.batchSegmentJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCampaigns(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"campaigns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCampaigns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.campaigns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasetExportJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasetExportJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasetExportJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.datasetExportJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasetGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasetGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasetGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.datasetGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasetImportJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasetImportJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasetImportJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.datasetImportJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.datasets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEventTrackers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"eventTrackers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEventTrackers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.eventTrackers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFilters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"Filters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFilters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.Filters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecipes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recipes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRecipes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.recipes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecommenders(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recommenders"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRecommenders(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.recommenders ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemas(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"schemas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSchemas(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.schemas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSolutionVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"solutionVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSolutionVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.solutionVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSolutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"solutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSolutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.solutions ?? [];
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

  async startRecommender(...args: any): Promise<any> {
  // undefined
    return this.client.startRecommender(...args).promise()
  }

  async stopRecommender(...args: any): Promise<any> {
  // undefined
    return this.client.stopRecommender(...args).promise()
  }

  async stopSolutionVersionCreation(...args: any): Promise<any> {
  // undefined
    return this.client.stopSolutionVersionCreation(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.updateCampaign(...args).promise()
  }

  async updateRecommender(...args: any): Promise<any> {
  // undefined
    return this.client.updateRecommender(...args).promise()
  }
  
  static fromClient(client: AWSPersonalize): ClientType {
    return new Personalize(client) as any;
  }
  
  static client(options?: AWSPersonalize.Types.ClientConfiguration): ClientType {
    return new Personalize(new AWSPersonalize(options)) as any;
  }
}  
