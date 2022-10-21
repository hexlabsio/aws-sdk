import { Request, Kendra as AWSKendra } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKendra> = AWSKendra[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKendra> = AWSKendra[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKendra[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKendra, Extras> = AWSKendra[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKendra> = AWSKendra[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Kendra {
  private constructor(private readonly client: AWSKendra) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kendra' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listIndices"] as const;
  
  associateEntitiesToExperience: (params: RawParamsFrom<'associateEntitiesToExperience'>) => Promise<ReturnTypeFrom<'associateEntitiesToExperience'>>  = async params => {
  // undefined
    return this.client.associateEntitiesToExperience(params as any).promise();
  }

  associatePersonasToEntities: (params: RawParamsFrom<'associatePersonasToEntities'>) => Promise<ReturnTypeFrom<'associatePersonasToEntities'>>  = async params => {
  // undefined
    return this.client.associatePersonasToEntities(params as any).promise();
  }

  batchDeleteDocument: (params: RawParamsFrom<'batchDeleteDocument'>) => Promise<ReturnTypeFrom<'batchDeleteDocument'>>  = async params => {
  // undefined
    return this.client.batchDeleteDocument(params as any).promise();
  }

  batchGetDocumentStatus: (params: RawParamsFrom<'batchGetDocumentStatus'>) => Promise<ReturnTypeFrom<'batchGetDocumentStatus'>>  = async params => {
  // undefined
    return this.client.batchGetDocumentStatus(params as any).promise();
  }

  batchPutDocument: (params: RawParamsFrom<'batchPutDocument'>) => Promise<ReturnTypeFrom<'batchPutDocument'>>  = async params => {
  // undefined
    return this.client.batchPutDocument(params as any).promise();
  }

  clearQuerySuggestions: (params: RawParamsFrom<'clearQuerySuggestions'>) => Promise<ReturnTypeFrom<'clearQuerySuggestions'>>  = async params => {
  // undefined
    return this.client.clearQuerySuggestions(params as any).promise();
  }

  createAccessControlConfiguration: (params: RawParamsFrom<'createAccessControlConfiguration'>) => Promise<ReturnTypeFrom<'createAccessControlConfiguration'>>  = async params => {
  // undefined
    return this.client.createAccessControlConfiguration(params as any).promise();
  }

  createDataSource: (params: RawParamsFrom<'createDataSource'>) => Promise<ReturnTypeFrom<'createDataSource'>>  = async params => {
  // undefined
    return this.client.createDataSource(params as any).promise();
  }

  createExperience: (params: RawParamsFrom<'createExperience'>) => Promise<ReturnTypeFrom<'createExperience'>>  = async params => {
  // undefined
    return this.client.createExperience(params as any).promise();
  }

  createFaq: (params: RawParamsFrom<'createFaq'>) => Promise<ReturnTypeFrom<'createFaq'>>  = async params => {
  // undefined
    return this.client.createFaq(params as any).promise();
  }

  createIndex: (params: RawParamsFrom<'createIndex'>) => Promise<ReturnTypeFrom<'createIndex'>>  = async params => {
  // undefined
    return this.client.createIndex(params as any).promise();
  }

  createQuerySuggestionsBlockList: (params: RawParamsFrom<'createQuerySuggestionsBlockList'>) => Promise<ReturnTypeFrom<'createQuerySuggestionsBlockList'>>  = async params => {
  // undefined
    return this.client.createQuerySuggestionsBlockList(params as any).promise();
  }

  createThesaurus: (params: RawParamsFrom<'createThesaurus'>) => Promise<ReturnTypeFrom<'createThesaurus'>>  = async params => {
  // undefined
    return this.client.createThesaurus(params as any).promise();
  }

  deleteAccessControlConfiguration: (params: RawParamsFrom<'deleteAccessControlConfiguration'>) => Promise<ReturnTypeFrom<'deleteAccessControlConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteAccessControlConfiguration(params as any).promise();
  }

  deleteDataSource: (params: RawParamsFrom<'deleteDataSource'>) => Promise<ReturnTypeFrom<'deleteDataSource'>>  = async params => {
  // undefined
    return this.client.deleteDataSource(params as any).promise();
  }

  deleteExperience: (params: RawParamsFrom<'deleteExperience'>) => Promise<ReturnTypeFrom<'deleteExperience'>>  = async params => {
  // undefined
    return this.client.deleteExperience(params as any).promise();
  }

  deleteFaq: (params: RawParamsFrom<'deleteFaq'>) => Promise<ReturnTypeFrom<'deleteFaq'>>  = async params => {
  // undefined
    return this.client.deleteFaq(params as any).promise();
  }

  deleteIndex: (params: RawParamsFrom<'deleteIndex'>) => Promise<ReturnTypeFrom<'deleteIndex'>>  = async params => {
  // undefined
    return this.client.deleteIndex(params as any).promise();
  }

  deletePrincipalMapping: (params: RawParamsFrom<'deletePrincipalMapping'>) => Promise<ReturnTypeFrom<'deletePrincipalMapping'>>  = async params => {
  // undefined
    return this.client.deletePrincipalMapping(params as any).promise();
  }

  deleteQuerySuggestionsBlockList: (params: RawParamsFrom<'deleteQuerySuggestionsBlockList'>) => Promise<ReturnTypeFrom<'deleteQuerySuggestionsBlockList'>>  = async params => {
  // undefined
    return this.client.deleteQuerySuggestionsBlockList(params as any).promise();
  }

  deleteThesaurus: (params: RawParamsFrom<'deleteThesaurus'>) => Promise<ReturnTypeFrom<'deleteThesaurus'>>  = async params => {
  // undefined
    return this.client.deleteThesaurus(params as any).promise();
  }

  describeAccessControlConfiguration: (params: RawParamsFrom<'describeAccessControlConfiguration'>) => Promise<ReturnTypeFrom<'describeAccessControlConfiguration'>>  = async params => {
  // undefined
    return this.client.describeAccessControlConfiguration(params as any).promise();
  }

  describeDataSource: (params: RawParamsFrom<'describeDataSource'>) => Promise<ReturnTypeFrom<'describeDataSource'>>  = async params => {
  // undefined
    return this.client.describeDataSource(params as any).promise();
  }

  describeExperience: (params: RawParamsFrom<'describeExperience'>) => Promise<ReturnTypeFrom<'describeExperience'>>  = async params => {
  // undefined
    return this.client.describeExperience(params as any).promise();
  }

  describeFaq: (params: RawParamsFrom<'describeFaq'>) => Promise<ReturnTypeFrom<'describeFaq'>>  = async params => {
  // undefined
    return this.client.describeFaq(params as any).promise();
  }

  describeIndex: (params: RawParamsFrom<'describeIndex'>) => Promise<ReturnTypeFrom<'describeIndex'>>  = async params => {
  // undefined
    return this.client.describeIndex(params as any).promise();
  }

  describePrincipalMapping: (params: RawParamsFrom<'describePrincipalMapping'>) => Promise<ReturnTypeFrom<'describePrincipalMapping'>>  = async params => {
  // undefined
    return this.client.describePrincipalMapping(params as any).promise();
  }

  describeQuerySuggestionsBlockList: (params: RawParamsFrom<'describeQuerySuggestionsBlockList'>) => Promise<ReturnTypeFrom<'describeQuerySuggestionsBlockList'>>  = async params => {
  // undefined
    return this.client.describeQuerySuggestionsBlockList(params as any).promise();
  }

  describeQuerySuggestionsConfig: (params: RawParamsFrom<'describeQuerySuggestionsConfig'>) => Promise<ReturnTypeFrom<'describeQuerySuggestionsConfig'>>  = async params => {
  // undefined
    return this.client.describeQuerySuggestionsConfig(params as any).promise();
  }

  describeThesaurus: (params: RawParamsFrom<'describeThesaurus'>) => Promise<ReturnTypeFrom<'describeThesaurus'>>  = async params => {
  // undefined
    return this.client.describeThesaurus(params as any).promise();
  }

  disassociateEntitiesFromExperience: (params: RawParamsFrom<'disassociateEntitiesFromExperience'>) => Promise<ReturnTypeFrom<'disassociateEntitiesFromExperience'>>  = async params => {
  // undefined
    return this.client.disassociateEntitiesFromExperience(params as any).promise();
  }

  disassociatePersonasFromEntities: (params: RawParamsFrom<'disassociatePersonasFromEntities'>) => Promise<ReturnTypeFrom<'disassociatePersonasFromEntities'>>  = async params => {
  // undefined
    return this.client.disassociatePersonasFromEntities(params as any).promise();
  }

  getQuerySuggestions: (params: RawParamsFrom<'getQuerySuggestions'>) => Promise<ReturnTypeFrom<'getQuerySuggestions'>>  = async params => {
  // undefined
    return this.client.getQuerySuggestions(params as any).promise();
  }

  getSnapshots: (params: RawParamsFrom<'getSnapshots'>) => Promise<ReturnTypeFrom<'getSnapshots'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getSnapshots(params as any).promise();
  }

  listAccessControlConfigurations: (params: RawParamsFrom<'listAccessControlConfigurations'>) => Promise<ReturnTypeFrom<'listAccessControlConfigurations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccessControlConfigurations(params as any).promise();
  }

  listDataSourceSyncJobs: (params: RawParamsFrom<'listDataSourceSyncJobs'>) => Promise<ReturnTypeFrom<'listDataSourceSyncJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDataSourceSyncJobs(params as any).promise();
  }

  listDataSources: (params: RawParamsFrom<'listDataSources'>) => Promise<ReturnTypeFrom<'listDataSources'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDataSources(params as any).promise();
  }

  listEntityPersonas: (params: RawParamsFrom<'listEntityPersonas'>) => Promise<ReturnTypeFrom<'listEntityPersonas'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntityPersonas(params as any).promise();
  }

  listExperienceEntities: (params: RawParamsFrom<'listExperienceEntities'>) => Promise<ReturnTypeFrom<'listExperienceEntities'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken"}
    return this.client.listExperienceEntities(params as any).promise();
  }

  listExperiences: (params: RawParamsFrom<'listExperiences'>) => Promise<ReturnTypeFrom<'listExperiences'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExperiences(params as any).promise();
  }

  listFaqs: (params: RawParamsFrom<'listFaqs'>) => Promise<ReturnTypeFrom<'listFaqs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFaqs(params as any).promise();
  }

  listGroupsOlderThanOrderingId: (params: RawParamsFrom<'listGroupsOlderThanOrderingId'>) => Promise<ReturnTypeFrom<'listGroupsOlderThanOrderingId'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroupsOlderThanOrderingId(params as any).promise();
  }

  listIndices: (params: RawParamsFrom<'listIndices'>) => Promise<ReturnTypeFrom<'listIndices'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listIndices(params as any).promise();
  }

  listQuerySuggestionsBlockLists: (params: RawParamsFrom<'listQuerySuggestionsBlockLists'>) => Promise<ReturnTypeFrom<'listQuerySuggestionsBlockLists'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQuerySuggestionsBlockLists(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listThesauri: (params: RawParamsFrom<'listThesauri'>) => Promise<ReturnTypeFrom<'listThesauri'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listThesauri(params as any).promise();
  }

  putPrincipalMapping: (params: RawParamsFrom<'putPrincipalMapping'>) => Promise<ReturnTypeFrom<'putPrincipalMapping'>>  = async params => {
  // undefined
    return this.client.putPrincipalMapping(params as any).promise();
  }

  query: (params: RawParamsFrom<'query'>) => Promise<ReturnTypeFrom<'query'>>  = async params => {
  // undefined
    return this.client.query(params as any).promise();
  }

  startDataSourceSyncJob: (params: RawParamsFrom<'startDataSourceSyncJob'>) => Promise<ReturnTypeFrom<'startDataSourceSyncJob'>>  = async params => {
  // undefined
    return this.client.startDataSourceSyncJob(params as any).promise();
  }

  stopDataSourceSyncJob: (params: RawParamsFrom<'stopDataSourceSyncJob'>) => Promise<ReturnTypeFrom<'stopDataSourceSyncJob'>>  = async params => {
  // undefined
    return this.client.stopDataSourceSyncJob(params as any).promise();
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

  updateAccessControlConfiguration: (params: RawParamsFrom<'updateAccessControlConfiguration'>) => Promise<ReturnTypeFrom<'updateAccessControlConfiguration'>>  = async params => {
  // undefined
    return this.client.updateAccessControlConfiguration(params as any).promise();
  }

  updateDataSource: (params: RawParamsFrom<'updateDataSource'>) => Promise<ReturnTypeFrom<'updateDataSource'>>  = async params => {
  // undefined
    return this.client.updateDataSource(params as any).promise();
  }

  updateExperience: (params: RawParamsFrom<'updateExperience'>) => Promise<ReturnTypeFrom<'updateExperience'>>  = async params => {
  // undefined
    return this.client.updateExperience(params as any).promise();
  }

  updateIndex: (params: RawParamsFrom<'updateIndex'>) => Promise<ReturnTypeFrom<'updateIndex'>>  = async params => {
  // undefined
    return this.client.updateIndex(params as any).promise();
  }

  updateQuerySuggestionsBlockList: (params: RawParamsFrom<'updateQuerySuggestionsBlockList'>) => Promise<ReturnTypeFrom<'updateQuerySuggestionsBlockList'>>  = async params => {
  // undefined
    return this.client.updateQuerySuggestionsBlockList(params as any).promise();
  }

  updateQuerySuggestionsConfig: (params: RawParamsFrom<'updateQuerySuggestionsConfig'>) => Promise<ReturnTypeFrom<'updateQuerySuggestionsConfig'>>  = async params => {
  // undefined
    return this.client.updateQuerySuggestionsConfig(params as any).promise();
  }

  updateThesaurus: (params: RawParamsFrom<'updateThesaurus'>) => Promise<ReturnTypeFrom<'updateThesaurus'>>  = async params => {
  // undefined
    return this.client.updateThesaurus(params as any).promise();
  }
  
  static fromClient(client: AWSKendra): Kendra {
    return new Kendra(client) as any;
  }
  
  static client(options?: AWSKendra.Types.ClientConfiguration): Kendra {
    return new Kendra(new AWSKendra(options)) as any;
  }
}  
