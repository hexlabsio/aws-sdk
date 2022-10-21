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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPersonalize> = AWSPersonalize[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Personalize {
  private constructor(private readonly client: AWSPersonalize) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'personalize' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listBatchInferenceJobs","listBatchSegmentJobs","listCampaigns","listDatasetExportJobs","listDatasetGroups","listDatasetImportJobs","listDatasets","listEventTrackers","listFilters","listRecipes","listRecommenders","listSchemas","listSolutionVersions","listSolutions"] as const;
  
  createBatchInferenceJob: (params: RawParamsFrom<'createBatchInferenceJob'>) => Promise<ReturnTypeFrom<'createBatchInferenceJob'>>  = async params => {
  // undefined
    return this.client.createBatchInferenceJob(params as any).promise();
  }

  createBatchSegmentJob: (params: RawParamsFrom<'createBatchSegmentJob'>) => Promise<ReturnTypeFrom<'createBatchSegmentJob'>>  = async params => {
  // undefined
    return this.client.createBatchSegmentJob(params as any).promise();
  }

  createCampaign: (params: RawParamsFrom<'createCampaign'>) => Promise<ReturnTypeFrom<'createCampaign'>>  = async params => {
  // undefined
    return this.client.createCampaign(params as any).promise();
  }

  createDataset: (params: RawParamsFrom<'createDataset'>) => Promise<ReturnTypeFrom<'createDataset'>>  = async params => {
  // undefined
    return this.client.createDataset(params as any).promise();
  }

  createDatasetExportJob: (params: RawParamsFrom<'createDatasetExportJob'>) => Promise<ReturnTypeFrom<'createDatasetExportJob'>>  = async params => {
  // undefined
    return this.client.createDatasetExportJob(params as any).promise();
  }

  createDatasetGroup: (params: RawParamsFrom<'createDatasetGroup'>) => Promise<ReturnTypeFrom<'createDatasetGroup'>>  = async params => {
  // undefined
    return this.client.createDatasetGroup(params as any).promise();
  }

  createDatasetImportJob: (params: RawParamsFrom<'createDatasetImportJob'>) => Promise<ReturnTypeFrom<'createDatasetImportJob'>>  = async params => {
  // undefined
    return this.client.createDatasetImportJob(params as any).promise();
  }

  createEventTracker: (params: RawParamsFrom<'createEventTracker'>) => Promise<ReturnTypeFrom<'createEventTracker'>>  = async params => {
  // undefined
    return this.client.createEventTracker(params as any).promise();
  }

  createFilter: (params: RawParamsFrom<'createFilter'>) => Promise<ReturnTypeFrom<'createFilter'>>  = async params => {
  // undefined
    return this.client.createFilter(params as any).promise();
  }

  createRecommender: (params: RawParamsFrom<'createRecommender'>) => Promise<ReturnTypeFrom<'createRecommender'>>  = async params => {
  // undefined
    return this.client.createRecommender(params as any).promise();
  }

  createSchema: (params: RawParamsFrom<'createSchema'>) => Promise<ReturnTypeFrom<'createSchema'>>  = async params => {
  // undefined
    return this.client.createSchema(params as any).promise();
  }

  createSolution: (params: RawParamsFrom<'createSolution'>) => Promise<ReturnTypeFrom<'createSolution'>>  = async params => {
  // undefined
    return this.client.createSolution(params as any).promise();
  }

  createSolutionVersion: (params: RawParamsFrom<'createSolutionVersion'>) => Promise<ReturnTypeFrom<'createSolutionVersion'>>  = async params => {
  // undefined
    return this.client.createSolutionVersion(params as any).promise();
  }

  deleteCampaign: (params: RawParamsFrom<'deleteCampaign'>) => Promise<ReturnTypeFrom<'deleteCampaign'>>  = async params => {
  // undefined
    return this.client.deleteCampaign(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  deleteDatasetGroup: (params: RawParamsFrom<'deleteDatasetGroup'>) => Promise<ReturnTypeFrom<'deleteDatasetGroup'>>  = async params => {
  // undefined
    return this.client.deleteDatasetGroup(params as any).promise();
  }

  deleteEventTracker: (params: RawParamsFrom<'deleteEventTracker'>) => Promise<ReturnTypeFrom<'deleteEventTracker'>>  = async params => {
  // undefined
    return this.client.deleteEventTracker(params as any).promise();
  }

  deleteFilter: (params: RawParamsFrom<'deleteFilter'>) => Promise<ReturnTypeFrom<'deleteFilter'>>  = async params => {
  // undefined
    return this.client.deleteFilter(params as any).promise();
  }

  deleteRecommender: (params: RawParamsFrom<'deleteRecommender'>) => Promise<ReturnTypeFrom<'deleteRecommender'>>  = async params => {
  // undefined
    return this.client.deleteRecommender(params as any).promise();
  }

  deleteSchema: (params: RawParamsFrom<'deleteSchema'>) => Promise<ReturnTypeFrom<'deleteSchema'>>  = async params => {
  // undefined
    return this.client.deleteSchema(params as any).promise();
  }

  deleteSolution: (params: RawParamsFrom<'deleteSolution'>) => Promise<ReturnTypeFrom<'deleteSolution'>>  = async params => {
  // undefined
    return this.client.deleteSolution(params as any).promise();
  }

  describeAlgorithm: (params: RawParamsFrom<'describeAlgorithm'>) => Promise<ReturnTypeFrom<'describeAlgorithm'>>  = async params => {
  // undefined
    return this.client.describeAlgorithm(params as any).promise();
  }

  describeBatchInferenceJob: (params: RawParamsFrom<'describeBatchInferenceJob'>) => Promise<ReturnTypeFrom<'describeBatchInferenceJob'>>  = async params => {
  // undefined
    return this.client.describeBatchInferenceJob(params as any).promise();
  }

  describeBatchSegmentJob: (params: RawParamsFrom<'describeBatchSegmentJob'>) => Promise<ReturnTypeFrom<'describeBatchSegmentJob'>>  = async params => {
  // undefined
    return this.client.describeBatchSegmentJob(params as any).promise();
  }

  describeCampaign: (params: RawParamsFrom<'describeCampaign'>) => Promise<ReturnTypeFrom<'describeCampaign'>>  = async params => {
  // undefined
    return this.client.describeCampaign(params as any).promise();
  }

  describeDataset: (params: RawParamsFrom<'describeDataset'>) => Promise<ReturnTypeFrom<'describeDataset'>>  = async params => {
  // undefined
    return this.client.describeDataset(params as any).promise();
  }

  describeDatasetExportJob: (params: RawParamsFrom<'describeDatasetExportJob'>) => Promise<ReturnTypeFrom<'describeDatasetExportJob'>>  = async params => {
  // undefined
    return this.client.describeDatasetExportJob(params as any).promise();
  }

  describeDatasetGroup: (params: RawParamsFrom<'describeDatasetGroup'>) => Promise<ReturnTypeFrom<'describeDatasetGroup'>>  = async params => {
  // undefined
    return this.client.describeDatasetGroup(params as any).promise();
  }

  describeDatasetImportJob: (params: RawParamsFrom<'describeDatasetImportJob'>) => Promise<ReturnTypeFrom<'describeDatasetImportJob'>>  = async params => {
  // undefined
    return this.client.describeDatasetImportJob(params as any).promise();
  }

  describeEventTracker: (params: RawParamsFrom<'describeEventTracker'>) => Promise<ReturnTypeFrom<'describeEventTracker'>>  = async params => {
  // undefined
    return this.client.describeEventTracker(params as any).promise();
  }

  describeFeatureTransformation: (params: RawParamsFrom<'describeFeatureTransformation'>) => Promise<ReturnTypeFrom<'describeFeatureTransformation'>>  = async params => {
  // undefined
    return this.client.describeFeatureTransformation(params as any).promise();
  }

  describeFilter: (params: RawParamsFrom<'describeFilter'>) => Promise<ReturnTypeFrom<'describeFilter'>>  = async params => {
  // undefined
    return this.client.describeFilter(params as any).promise();
  }

  describeRecipe: (params: RawParamsFrom<'describeRecipe'>) => Promise<ReturnTypeFrom<'describeRecipe'>>  = async params => {
  // undefined
    return this.client.describeRecipe(params as any).promise();
  }

  describeRecommender: (params: RawParamsFrom<'describeRecommender'>) => Promise<ReturnTypeFrom<'describeRecommender'>>  = async params => {
  // undefined
    return this.client.describeRecommender(params as any).promise();
  }

  describeSchema: (params: RawParamsFrom<'describeSchema'>) => Promise<ReturnTypeFrom<'describeSchema'>>  = async params => {
  // undefined
    return this.client.describeSchema(params as any).promise();
  }

  describeSolution: (params: RawParamsFrom<'describeSolution'>) => Promise<ReturnTypeFrom<'describeSolution'>>  = async params => {
  // undefined
    return this.client.describeSolution(params as any).promise();
  }

  describeSolutionVersion: (params: RawParamsFrom<'describeSolutionVersion'>) => Promise<ReturnTypeFrom<'describeSolutionVersion'>>  = async params => {
  // undefined
    return this.client.describeSolutionVersion(params as any).promise();
  }

  getSolutionMetrics: (params: RawParamsFrom<'getSolutionMetrics'>) => Promise<ReturnTypeFrom<'getSolutionMetrics'>>  = async params => {
  // undefined
    return this.client.getSolutionMetrics(params as any).promise();
  }

  async listBatchInferenceJobs(params: { [K in keyof ParamsFrom<'listBatchInferenceJobs', { next?: string, limit?: number }>]: ParamsFrom<'listBatchInferenceJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBatchInferenceJobs'>]-?: ReturnTypeFrom<'listBatchInferenceJobs'>[K]}['batchInferenceJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"batchInferenceJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBatchInferenceJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.batchInferenceJobs ?? []) ? (result.batchInferenceJobs ?? []) : [result.batchInferenceJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listBatchSegmentJobs(params: { [K in keyof ParamsFrom<'listBatchSegmentJobs', { next?: string, limit?: number }>]: ParamsFrom<'listBatchSegmentJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBatchSegmentJobs'>]-?: ReturnTypeFrom<'listBatchSegmentJobs'>[K]}['batchSegmentJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"batchSegmentJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBatchSegmentJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.batchSegmentJobs ?? []) ? (result.batchSegmentJobs ?? []) : [result.batchSegmentJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listCampaigns(params: { [K in keyof ParamsFrom<'listCampaigns', { next?: string, limit?: number }>]: ParamsFrom<'listCampaigns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaigns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"campaigns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCampaigns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.campaigns ?? []) ? (result.campaigns ?? []) : [result.campaigns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDatasetExportJobs(params: { [K in keyof ParamsFrom<'listDatasetExportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listDatasetExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasetExportJobs'>]-?: ReturnTypeFrom<'listDatasetExportJobs'>[K]}['datasetExportJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasetExportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasetExportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.datasetExportJobs ?? []) ? (result.datasetExportJobs ?? []) : [result.datasetExportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDatasetGroups(params: { [K in keyof ParamsFrom<'listDatasetGroups', { next?: string, limit?: number }>]: ParamsFrom<'listDatasetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasetGroups'>]-?: ReturnTypeFrom<'listDatasetGroups'>[K]}['datasetGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasetGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.datasetGroups ?? []) ? (result.datasetGroups ?? []) : [result.datasetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDatasetImportJobs(params: { [K in keyof ParamsFrom<'listDatasetImportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listDatasetImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasetImportJobs'>]-?: ReturnTypeFrom<'listDatasetImportJobs'>[K]}['datasetImportJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasetImportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasetImportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.datasetImportJobs ?? []) ? (result.datasetImportJobs ?? []) : [result.datasetImportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDatasets(params: { [K in keyof ParamsFrom<'listDatasets', { next?: string, limit?: number }>]: ParamsFrom<'listDatasets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['datasets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.datasets ?? []) ? (result.datasets ?? []) : [result.datasets]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listEventTrackers(params: { [K in keyof ParamsFrom<'listEventTrackers', { next?: string, limit?: number }>]: ParamsFrom<'listEventTrackers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEventTrackers'>]-?: ReturnTypeFrom<'listEventTrackers'>[K]}['eventTrackers'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"eventTrackers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEventTrackers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.eventTrackers ?? []) ? (result.eventTrackers ?? []) : [result.eventTrackers]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listFilters(params: { [K in keyof ParamsFrom<'listFilters', { next?: string, limit?: number }>]: ParamsFrom<'listFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFilters'>]-?: ReturnTypeFrom<'listFilters'>[K]}['Filters'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"Filters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFilters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.Filters ?? []) ? (result.Filters ?? []) : [result.Filters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRecipes(params: { [K in keyof ParamsFrom<'listRecipes', { next?: string, limit?: number }>]: ParamsFrom<'listRecipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecipes'>]-?: ReturnTypeFrom<'listRecipes'>[K]}['recipes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recipes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRecipes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.recipes ?? []) ? (result.recipes ?? []) : [result.recipes]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRecommenders(params: { [K in keyof ParamsFrom<'listRecommenders', { next?: string, limit?: number }>]: ParamsFrom<'listRecommenders', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecommenders'>]-?: ReturnTypeFrom<'listRecommenders'>[K]}['recommenders'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recommenders"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRecommenders({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.recommenders ?? []) ? (result.recommenders ?? []) : [result.recommenders]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSchemas(params: { [K in keyof ParamsFrom<'listSchemas', { next?: string, limit?: number }>]: ParamsFrom<'listSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['schemas'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"schemas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSchemas({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.schemas ?? []) ? (result.schemas ?? []) : [result.schemas]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSolutionVersions(params: { [K in keyof ParamsFrom<'listSolutionVersions', { next?: string, limit?: number }>]: ParamsFrom<'listSolutionVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSolutionVersions'>]-?: ReturnTypeFrom<'listSolutionVersions'>[K]}['solutionVersions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"solutionVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSolutionVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.solutionVersions ?? []) ? (result.solutionVersions ?? []) : [result.solutionVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSolutions(params: { [K in keyof ParamsFrom<'listSolutions', { next?: string, limit?: number }>]: ParamsFrom<'listSolutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSolutions'>]-?: ReturnTypeFrom<'listSolutions'>[K]}['solutions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"solutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSolutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.solutions ?? []) ? (result.solutions ?? []) : [result.solutions]) as any;
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

  startRecommender: (params: RawParamsFrom<'startRecommender'>) => Promise<ReturnTypeFrom<'startRecommender'>>  = async params => {
  // undefined
    return this.client.startRecommender(params as any).promise();
  }

  stopRecommender: (params: RawParamsFrom<'stopRecommender'>) => Promise<ReturnTypeFrom<'stopRecommender'>>  = async params => {
  // undefined
    return this.client.stopRecommender(params as any).promise();
  }

  stopSolutionVersionCreation: (params: RawParamsFrom<'stopSolutionVersionCreation'>) => Promise<ReturnTypeFrom<'stopSolutionVersionCreation'>>  = async params => {
  // undefined
    return this.client.stopSolutionVersionCreation(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCampaign: (params: RawParamsFrom<'updateCampaign'>) => Promise<ReturnTypeFrom<'updateCampaign'>>  = async params => {
  // undefined
    return this.client.updateCampaign(params as any).promise();
  }

  updateRecommender: (params: RawParamsFrom<'updateRecommender'>) => Promise<ReturnTypeFrom<'updateRecommender'>>  = async params => {
  // undefined
    return this.client.updateRecommender(params as any).promise();
  }
  
  static fromClient(client: AWSPersonalize): Personalize {
    return new Personalize(client) as any;
  }
  
  static client(options?: AWSPersonalize.Types.ClientConfiguration): Personalize {
    return new Personalize(new AWSPersonalize(options)) as any;
  }
}  
