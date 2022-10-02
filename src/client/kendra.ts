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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kendra';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listIndices"];
    
  associateEntitiesToExperience: FunctionTypeFrom<'associateEntitiesToExperience'>;

  associatePersonasToEntities: FunctionTypeFrom<'associatePersonasToEntities'>;

  batchDeleteDocument: FunctionTypeFrom<'batchDeleteDocument'>;

  batchGetDocumentStatus: FunctionTypeFrom<'batchGetDocumentStatus'>;

  batchPutDocument: FunctionTypeFrom<'batchPutDocument'>;

  clearQuerySuggestions: FunctionTypeFrom<'clearQuerySuggestions'>;

  createAccessControlConfiguration: FunctionTypeFrom<'createAccessControlConfiguration'>;

  createDataSource: FunctionTypeFrom<'createDataSource'>;

  createExperience: FunctionTypeFrom<'createExperience'>;

  createFaq: FunctionTypeFrom<'createFaq'>;

  createIndex: FunctionTypeFrom<'createIndex'>;

  createQuerySuggestionsBlockList: FunctionTypeFrom<'createQuerySuggestionsBlockList'>;

  createThesaurus: FunctionTypeFrom<'createThesaurus'>;

  deleteAccessControlConfiguration: FunctionTypeFrom<'deleteAccessControlConfiguration'>;

  deleteDataSource: FunctionTypeFrom<'deleteDataSource'>;

  deleteExperience: FunctionTypeFrom<'deleteExperience'>;

  deleteFaq: FunctionTypeFrom<'deleteFaq'>;

  deleteIndex: FunctionTypeFrom<'deleteIndex'>;

  deletePrincipalMapping: FunctionTypeFrom<'deletePrincipalMapping'>;

  deleteQuerySuggestionsBlockList: FunctionTypeFrom<'deleteQuerySuggestionsBlockList'>;

  deleteThesaurus: FunctionTypeFrom<'deleteThesaurus'>;

  describeAccessControlConfiguration: FunctionTypeFrom<'describeAccessControlConfiguration'>;

  describeDataSource: FunctionTypeFrom<'describeDataSource'>;

  describeExperience: FunctionTypeFrom<'describeExperience'>;

  describeFaq: FunctionTypeFrom<'describeFaq'>;

  describeIndex: FunctionTypeFrom<'describeIndex'>;

  describePrincipalMapping: FunctionTypeFrom<'describePrincipalMapping'>;

  describeQuerySuggestionsBlockList: FunctionTypeFrom<'describeQuerySuggestionsBlockList'>;

  describeQuerySuggestionsConfig: FunctionTypeFrom<'describeQuerySuggestionsConfig'>;

  describeThesaurus: FunctionTypeFrom<'describeThesaurus'>;

  disassociateEntitiesFromExperience: FunctionTypeFrom<'disassociateEntitiesFromExperience'>;

  disassociatePersonasFromEntities: FunctionTypeFrom<'disassociatePersonasFromEntities'>;

  getQuerySuggestions: FunctionTypeFrom<'getQuerySuggestions'>;

  getSnapshots: FunctionTypeFrom<'getSnapshots'>;

  listAccessControlConfigurations: FunctionTypeFrom<'listAccessControlConfigurations'>;

  listDataSourceSyncJobs: FunctionTypeFrom<'listDataSourceSyncJobs'>;

  listDataSources: FunctionTypeFrom<'listDataSources'>;

  listEntityPersonas: FunctionTypeFrom<'listEntityPersonas'>;

  listExperienceEntities: FunctionTypeFrom<'listExperienceEntities'>;

  listExperiences: FunctionTypeFrom<'listExperiences'>;

  listFaqs: FunctionTypeFrom<'listFaqs'>;

  listGroupsOlderThanOrderingId: FunctionTypeFrom<'listGroupsOlderThanOrderingId'>;

  listIndices: FunctionTypeFrom<'listIndices'>;

  listQuerySuggestionsBlockLists: FunctionTypeFrom<'listQuerySuggestionsBlockLists'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listThesauri: FunctionTypeFrom<'listThesauri'>;

  putPrincipalMapping: FunctionTypeFrom<'putPrincipalMapping'>;

  query: FunctionTypeFrom<'query'>;

  startDataSourceSyncJob: FunctionTypeFrom<'startDataSourceSyncJob'>;

  stopDataSourceSyncJob: FunctionTypeFrom<'stopDataSourceSyncJob'>;

  submitFeedback: FunctionTypeFrom<'submitFeedback'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccessControlConfiguration: FunctionTypeFrom<'updateAccessControlConfiguration'>;

  updateDataSource: FunctionTypeFrom<'updateDataSource'>;

  updateExperience: FunctionTypeFrom<'updateExperience'>;

  updateIndex: FunctionTypeFrom<'updateIndex'>;

  updateQuerySuggestionsBlockList: FunctionTypeFrom<'updateQuerySuggestionsBlockList'>;

  updateQuerySuggestionsConfig: FunctionTypeFrom<'updateQuerySuggestionsConfig'>;

  updateThesaurus: FunctionTypeFrom<'updateThesaurus'>
}
 
export class Kendra implements ClientType {
  private constructor(private readonly client: AWSKendra) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kendra';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listIndices"] as const;
  
  async associateEntitiesToExperience(...args: any): Promise<any> {
  // undefined
    return this.client.associateEntitiesToExperience(...args).promise()
  }

  async associatePersonasToEntities(...args: any): Promise<any> {
  // undefined
    return this.client.associatePersonasToEntities(...args).promise()
  }

  async batchDeleteDocument(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteDocument(...args).promise()
  }

  async batchGetDocumentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetDocumentStatus(...args).promise()
  }

  async batchPutDocument(...args: any): Promise<any> {
  // undefined
    return this.client.batchPutDocument(...args).promise()
  }

  async clearQuerySuggestions(...args: any): Promise<any> {
  // undefined
    return this.client.clearQuerySuggestions(...args).promise()
  }

  async createAccessControlConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createAccessControlConfiguration(...args).promise()
  }

  async createDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSource(...args).promise()
  }

  async createExperience(...args: any): Promise<any> {
  // undefined
    return this.client.createExperience(...args).promise()
  }

  async createFaq(...args: any): Promise<any> {
  // undefined
    return this.client.createFaq(...args).promise()
  }

  async createIndex(...args: any): Promise<any> {
  // undefined
    return this.client.createIndex(...args).promise()
  }

  async createQuerySuggestionsBlockList(...args: any): Promise<any> {
  // undefined
    return this.client.createQuerySuggestionsBlockList(...args).promise()
  }

  async createThesaurus(...args: any): Promise<any> {
  // undefined
    return this.client.createThesaurus(...args).promise()
  }

  async deleteAccessControlConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessControlConfiguration(...args).promise()
  }

  async deleteDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataSource(...args).promise()
  }

  async deleteExperience(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExperience(...args).promise()
  }

  async deleteFaq(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFaq(...args).promise()
  }

  async deleteIndex(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIndex(...args).promise()
  }

  async deletePrincipalMapping(...args: any): Promise<any> {
  // undefined
    return this.client.deletePrincipalMapping(...args).promise()
  }

  async deleteQuerySuggestionsBlockList(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQuerySuggestionsBlockList(...args).promise()
  }

  async deleteThesaurus(...args: any): Promise<any> {
  // undefined
    return this.client.deleteThesaurus(...args).promise()
  }

  async describeAccessControlConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccessControlConfiguration(...args).promise()
  }

  async describeDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataSource(...args).promise()
  }

  async describeExperience(...args: any): Promise<any> {
  // undefined
    return this.client.describeExperience(...args).promise()
  }

  async describeFaq(...args: any): Promise<any> {
  // undefined
    return this.client.describeFaq(...args).promise()
  }

  async describeIndex(...args: any): Promise<any> {
  // undefined
    return this.client.describeIndex(...args).promise()
  }

  async describePrincipalMapping(...args: any): Promise<any> {
  // undefined
    return this.client.describePrincipalMapping(...args).promise()
  }

  async describeQuerySuggestionsBlockList(...args: any): Promise<any> {
  // undefined
    return this.client.describeQuerySuggestionsBlockList(...args).promise()
  }

  async describeQuerySuggestionsConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeQuerySuggestionsConfig(...args).promise()
  }

  async describeThesaurus(...args: any): Promise<any> {
  // undefined
    return this.client.describeThesaurus(...args).promise()
  }

  async disassociateEntitiesFromExperience(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateEntitiesFromExperience(...args).promise()
  }

  async disassociatePersonasFromEntities(...args: any): Promise<any> {
  // undefined
    return this.client.disassociatePersonasFromEntities(...args).promise()
  }

  async getQuerySuggestions(...args: any): Promise<any> {
  // undefined
    return this.client.getQuerySuggestions(...args).promise()
  }

  async getSnapshots(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getSnapshots(...args).promise()
  }

  async listAccessControlConfigurations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccessControlConfigurations(...args).promise()
  }

  async listDataSourceSyncJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDataSourceSyncJobs(...args).promise()
  }

  async listDataSources(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDataSources(...args).promise()
  }

  async listEntityPersonas(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEntityPersonas(...args).promise()
  }

  async listExperienceEntities(...args: any): Promise<any> {
  // {"inputToken":"NextToken","outputToken":"NextToken"}
    return this.client.listExperienceEntities(...args).promise()
  }

  async listExperiences(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExperiences(...args).promise()
  }

  async listFaqs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFaqs(...args).promise()
  }

  async listGroupsOlderThanOrderingId(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroupsOlderThanOrderingId(...args).promise()
  }

  async listIndices(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listIndices(...args).promise()
  }

  async listQuerySuggestionsBlockLists(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQuerySuggestionsBlockLists(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listThesauri(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listThesauri(...args).promise()
  }

  async putPrincipalMapping(...args: any): Promise<any> {
  // undefined
    return this.client.putPrincipalMapping(...args).promise()
  }

  async query(...args: any): Promise<any> {
  // undefined
    return this.client.query(...args).promise()
  }

  async startDataSourceSyncJob(...args: any): Promise<any> {
  // undefined
    return this.client.startDataSourceSyncJob(...args).promise()
  }

  async stopDataSourceSyncJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopDataSourceSyncJob(...args).promise()
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

  async updateAccessControlConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccessControlConfiguration(...args).promise()
  }

  async updateDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataSource(...args).promise()
  }

  async updateExperience(...args: any): Promise<any> {
  // undefined
    return this.client.updateExperience(...args).promise()
  }

  async updateIndex(...args: any): Promise<any> {
  // undefined
    return this.client.updateIndex(...args).promise()
  }

  async updateQuerySuggestionsBlockList(...args: any): Promise<any> {
  // undefined
    return this.client.updateQuerySuggestionsBlockList(...args).promise()
  }

  async updateQuerySuggestionsConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateQuerySuggestionsConfig(...args).promise()
  }

  async updateThesaurus(...args: any): Promise<any> {
  // undefined
    return this.client.updateThesaurus(...args).promise()
  }
  
  static fromClient(client: AWSKendra): ClientType {
    return new Kendra(client) as any;
  }
  
  static client(options?: AWSKendra.Types.ClientConfiguration): ClientType {
    return new Kendra(new AWSKendra(options)) as any;
  }
}  
