import { Request, Glue as AWSGlue } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGlue> = AWSGlue[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGlue> = AWSGlue[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGlue[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGlue, Extras> = AWSGlue[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'glue';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["getClassifiers","getConnections","getCrawlerMetrics","getCrawlers","getDatabases","getDevEndpoints","getJobs","getMLTransforms","getResourcePolicies","getSecurityConfigurations","getTriggers","listBlueprints","listCrawlers","listCustomEntityTypes","listDevEndpoints","listJobs","listMLTransforms","listRegistries","listSchemas","listSessions","listTriggers","listWorkflows","searchTables"];
    
  batchCreatePartition: FunctionTypeFrom<'batchCreatePartition'>;

  batchDeleteConnection: FunctionTypeFrom<'batchDeleteConnection'>;

  batchDeletePartition: FunctionTypeFrom<'batchDeletePartition'>;

  batchDeleteTable: FunctionTypeFrom<'batchDeleteTable'>;

  batchDeleteTableVersion: FunctionTypeFrom<'batchDeleteTableVersion'>;

  batchGetBlueprints: FunctionTypeFrom<'batchGetBlueprints'>;

  batchGetCrawlers: FunctionTypeFrom<'batchGetCrawlers'>;

  batchGetCustomEntityTypes: FunctionTypeFrom<'batchGetCustomEntityTypes'>;

  batchGetDevEndpoints: FunctionTypeFrom<'batchGetDevEndpoints'>;

  batchGetJobs: FunctionTypeFrom<'batchGetJobs'>;

  batchGetPartition: FunctionTypeFrom<'batchGetPartition'>;

  batchGetTriggers: FunctionTypeFrom<'batchGetTriggers'>;

  batchGetWorkflows: FunctionTypeFrom<'batchGetWorkflows'>;

  batchStopJobRun: FunctionTypeFrom<'batchStopJobRun'>;

  batchUpdatePartition: FunctionTypeFrom<'batchUpdatePartition'>;

  cancelMLTaskRun: FunctionTypeFrom<'cancelMLTaskRun'>;

  cancelStatement: FunctionTypeFrom<'cancelStatement'>;

  checkSchemaVersionValidity: FunctionTypeFrom<'checkSchemaVersionValidity'>;

  createBlueprint: FunctionTypeFrom<'createBlueprint'>;

  createClassifier: FunctionTypeFrom<'createClassifier'>;

  createConnection: FunctionTypeFrom<'createConnection'>;

  createCrawler: FunctionTypeFrom<'createCrawler'>;

  createCustomEntityType: FunctionTypeFrom<'createCustomEntityType'>;

  createDatabase: FunctionTypeFrom<'createDatabase'>;

  createDevEndpoint: FunctionTypeFrom<'createDevEndpoint'>;

  createJob: FunctionTypeFrom<'createJob'>;

  createMLTransform: FunctionTypeFrom<'createMLTransform'>;

  createPartition: FunctionTypeFrom<'createPartition'>;

  createPartitionIndex: FunctionTypeFrom<'createPartitionIndex'>;

  createRegistry: FunctionTypeFrom<'createRegistry'>;

  createSchema: FunctionTypeFrom<'createSchema'>;

  createScript: FunctionTypeFrom<'createScript'>;

  createSecurityConfiguration: FunctionTypeFrom<'createSecurityConfiguration'>;

  createSession: FunctionTypeFrom<'createSession'>;

  createTable: FunctionTypeFrom<'createTable'>;

  createTrigger: FunctionTypeFrom<'createTrigger'>;

  createUserDefinedFunction: FunctionTypeFrom<'createUserDefinedFunction'>;

  createWorkflow: FunctionTypeFrom<'createWorkflow'>;

  deleteBlueprint: FunctionTypeFrom<'deleteBlueprint'>;

  deleteClassifier: FunctionTypeFrom<'deleteClassifier'>;

  deleteColumnStatisticsForPartition: FunctionTypeFrom<'deleteColumnStatisticsForPartition'>;

  deleteColumnStatisticsForTable: FunctionTypeFrom<'deleteColumnStatisticsForTable'>;

  deleteConnection: FunctionTypeFrom<'deleteConnection'>;

  deleteCrawler: FunctionTypeFrom<'deleteCrawler'>;

  deleteCustomEntityType: FunctionTypeFrom<'deleteCustomEntityType'>;

  deleteDatabase: FunctionTypeFrom<'deleteDatabase'>;

  deleteDevEndpoint: FunctionTypeFrom<'deleteDevEndpoint'>;

  deleteJob: FunctionTypeFrom<'deleteJob'>;

  deleteMLTransform: FunctionTypeFrom<'deleteMLTransform'>;

  deletePartition: FunctionTypeFrom<'deletePartition'>;

  deletePartitionIndex: FunctionTypeFrom<'deletePartitionIndex'>;

  deleteRegistry: FunctionTypeFrom<'deleteRegistry'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteSchema: FunctionTypeFrom<'deleteSchema'>;

  deleteSchemaVersions: FunctionTypeFrom<'deleteSchemaVersions'>;

  deleteSecurityConfiguration: FunctionTypeFrom<'deleteSecurityConfiguration'>;

  deleteSession: FunctionTypeFrom<'deleteSession'>;

  deleteTable: FunctionTypeFrom<'deleteTable'>;

  deleteTableVersion: FunctionTypeFrom<'deleteTableVersion'>;

  deleteTrigger: FunctionTypeFrom<'deleteTrigger'>;

  deleteUserDefinedFunction: FunctionTypeFrom<'deleteUserDefinedFunction'>;

  deleteWorkflow: FunctionTypeFrom<'deleteWorkflow'>;

  getBlueprint: FunctionTypeFrom<'getBlueprint'>;

  getBlueprintRun: FunctionTypeFrom<'getBlueprintRun'>;

  getBlueprintRuns: FunctionTypeFrom<'getBlueprintRuns'>;

  getCatalogImportStatus: FunctionTypeFrom<'getCatalogImportStatus'>;

  getClassifier: FunctionTypeFrom<'getClassifier'>;

  getClassifiers: FunctionTypeFrom<'getClassifiers'>;

  getColumnStatisticsForPartition: FunctionTypeFrom<'getColumnStatisticsForPartition'>;

  getColumnStatisticsForTable: FunctionTypeFrom<'getColumnStatisticsForTable'>;

  getConnection: FunctionTypeFrom<'getConnection'>;

  getConnections: FunctionTypeFrom<'getConnections'>;

  getCrawler: FunctionTypeFrom<'getCrawler'>;

  getCrawlerMetrics: FunctionTypeFrom<'getCrawlerMetrics'>;

  getCrawlers: FunctionTypeFrom<'getCrawlers'>;

  getCustomEntityType: FunctionTypeFrom<'getCustomEntityType'>;

  getDataCatalogEncryptionSettings: FunctionTypeFrom<'getDataCatalogEncryptionSettings'>;

  getDatabase: FunctionTypeFrom<'getDatabase'>;

  getDatabases: FunctionTypeFrom<'getDatabases'>;

  getDataflowGraph: FunctionTypeFrom<'getDataflowGraph'>;

  getDevEndpoint: FunctionTypeFrom<'getDevEndpoint'>;

  getDevEndpoints: FunctionTypeFrom<'getDevEndpoints'>;

  getJob: FunctionTypeFrom<'getJob'>;

  getJobBookmark: FunctionTypeFrom<'getJobBookmark'>;

  getJobRun: FunctionTypeFrom<'getJobRun'>;

  getJobRuns: FunctionTypeFrom<'getJobRuns'>;

  getJobs: FunctionTypeFrom<'getJobs'>;

  getMLTaskRun: FunctionTypeFrom<'getMLTaskRun'>;

  getMLTaskRuns: FunctionTypeFrom<'getMLTaskRuns'>;

  getMLTransform: FunctionTypeFrom<'getMLTransform'>;

  getMLTransforms: FunctionTypeFrom<'getMLTransforms'>;

  getMapping: FunctionTypeFrom<'getMapping'>;

  getPartition: FunctionTypeFrom<'getPartition'>;

  getPartitionIndexes(params: { [K in keyof Omit<ParamsFrom<'getPartitionIndexes', { next?: string }>, 'NextToken'>]: ParamsFrom<'getPartitionIndexes', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getPartitionIndexes'>]-?: ReturnTypeFrom<'getPartitionIndexes'>[K]}['PartitionIndexDescriptorList'] }>
  ;

  getPartitions: FunctionTypeFrom<'getPartitions'>;

  getPlan: FunctionTypeFrom<'getPlan'>;

  getRegistry: FunctionTypeFrom<'getRegistry'>;

  getResourcePolicies(params: { [K in keyof Omit<ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getResourcePolicies'>]-?: ReturnTypeFrom<'getResourcePolicies'>[K]}['GetResourcePoliciesResponseList'] }>
  getResourcePolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getResourcePolicies'>]-?: ReturnTypeFrom<'getResourcePolicies'>[K]}['GetResourcePoliciesResponseList'] }>;

  getResourcePolicy: FunctionTypeFrom<'getResourcePolicy'>;

  getSchema: FunctionTypeFrom<'getSchema'>;

  getSchemaByDefinition: FunctionTypeFrom<'getSchemaByDefinition'>;

  getSchemaVersion: FunctionTypeFrom<'getSchemaVersion'>;

  getSchemaVersionsDiff: FunctionTypeFrom<'getSchemaVersionsDiff'>;

  getSecurityConfiguration: FunctionTypeFrom<'getSecurityConfiguration'>;

  getSecurityConfigurations(params: { [K in keyof Omit<ParamsFrom<'getSecurityConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getSecurityConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSecurityConfigurations'>]-?: ReturnTypeFrom<'getSecurityConfigurations'>[K]}['SecurityConfigurations'] }>
  getSecurityConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSecurityConfigurations'>]-?: ReturnTypeFrom<'getSecurityConfigurations'>[K]}['SecurityConfigurations'] }>;

  getSession: FunctionTypeFrom<'getSession'>;

  getStatement: FunctionTypeFrom<'getStatement'>;

  getTable: FunctionTypeFrom<'getTable'>;

  getTableVersion: FunctionTypeFrom<'getTableVersion'>;

  getTableVersions: FunctionTypeFrom<'getTableVersions'>;

  getTables: FunctionTypeFrom<'getTables'>;

  getTags: FunctionTypeFrom<'getTags'>;

  getTrigger: FunctionTypeFrom<'getTrigger'>;

  getTriggers: FunctionTypeFrom<'getTriggers'>;

  getUnfilteredPartitionMetadata: FunctionTypeFrom<'getUnfilteredPartitionMetadata'>;

  getUnfilteredPartitionsMetadata: FunctionTypeFrom<'getUnfilteredPartitionsMetadata'>;

  getUnfilteredTableMetadata: FunctionTypeFrom<'getUnfilteredTableMetadata'>;

  getUserDefinedFunction: FunctionTypeFrom<'getUserDefinedFunction'>;

  getUserDefinedFunctions: FunctionTypeFrom<'getUserDefinedFunctions'>;

  getWorkflow: FunctionTypeFrom<'getWorkflow'>;

  getWorkflowRun: FunctionTypeFrom<'getWorkflowRun'>;

  getWorkflowRunProperties: FunctionTypeFrom<'getWorkflowRunProperties'>;

  getWorkflowRuns: FunctionTypeFrom<'getWorkflowRuns'>;

  importCatalogToGlue: FunctionTypeFrom<'importCatalogToGlue'>;

  listBlueprints: FunctionTypeFrom<'listBlueprints'>;

  listCrawlers: FunctionTypeFrom<'listCrawlers'>;

  listCrawls: FunctionTypeFrom<'listCrawls'>;

  listCustomEntityTypes: FunctionTypeFrom<'listCustomEntityTypes'>;

  listDevEndpoints: FunctionTypeFrom<'listDevEndpoints'>;

  listJobs: FunctionTypeFrom<'listJobs'>;

  listMLTransforms: FunctionTypeFrom<'listMLTransforms'>;

  listRegistries(params: { [K in keyof Omit<ParamsFrom<'listRegistries', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRegistries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRegistries'>]-?: ReturnTypeFrom<'listRegistries'>[K]}['Registries'] }>
  listRegistries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRegistries'>]-?: ReturnTypeFrom<'listRegistries'>[K]}['Registries'] }>;

  listSchemaVersions(params: { [K in keyof Omit<ParamsFrom<'listSchemaVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSchemaVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchemaVersions'>]-?: ReturnTypeFrom<'listSchemaVersions'>[K]}['Schemas'] }>
  ;

  listSchemas(params: { [K in keyof Omit<ParamsFrom<'listSchemas', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['Schemas'] }>
  listSchemas(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['Schemas'] }>;

  listSessions: FunctionTypeFrom<'listSessions'>;

  listStatements: FunctionTypeFrom<'listStatements'>;

  listTriggers: FunctionTypeFrom<'listTriggers'>;

  listWorkflows: FunctionTypeFrom<'listWorkflows'>;

  putDataCatalogEncryptionSettings: FunctionTypeFrom<'putDataCatalogEncryptionSettings'>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  putSchemaVersionMetadata: FunctionTypeFrom<'putSchemaVersionMetadata'>;

  putWorkflowRunProperties: FunctionTypeFrom<'putWorkflowRunProperties'>;

  querySchemaVersionMetadata: FunctionTypeFrom<'querySchemaVersionMetadata'>;

  registerSchemaVersion: FunctionTypeFrom<'registerSchemaVersion'>;

  removeSchemaVersionMetadata: FunctionTypeFrom<'removeSchemaVersionMetadata'>;

  resetJobBookmark: FunctionTypeFrom<'resetJobBookmark'>;

  resumeWorkflowRun: FunctionTypeFrom<'resumeWorkflowRun'>;

  runStatement: FunctionTypeFrom<'runStatement'>;

  searchTables: FunctionTypeFrom<'searchTables'>;

  startBlueprintRun: FunctionTypeFrom<'startBlueprintRun'>;

  startCrawler: FunctionTypeFrom<'startCrawler'>;

  startCrawlerSchedule: FunctionTypeFrom<'startCrawlerSchedule'>;

  startExportLabelsTaskRun: FunctionTypeFrom<'startExportLabelsTaskRun'>;

  startImportLabelsTaskRun: FunctionTypeFrom<'startImportLabelsTaskRun'>;

  startJobRun: FunctionTypeFrom<'startJobRun'>;

  startMLEvaluationTaskRun: FunctionTypeFrom<'startMLEvaluationTaskRun'>;

  startMLLabelingSetGenerationTaskRun: FunctionTypeFrom<'startMLLabelingSetGenerationTaskRun'>;

  startTrigger: FunctionTypeFrom<'startTrigger'>;

  startWorkflowRun: FunctionTypeFrom<'startWorkflowRun'>;

  stopCrawler: FunctionTypeFrom<'stopCrawler'>;

  stopCrawlerSchedule: FunctionTypeFrom<'stopCrawlerSchedule'>;

  stopSession: FunctionTypeFrom<'stopSession'>;

  stopTrigger: FunctionTypeFrom<'stopTrigger'>;

  stopWorkflowRun: FunctionTypeFrom<'stopWorkflowRun'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateBlueprint: FunctionTypeFrom<'updateBlueprint'>;

  updateClassifier: FunctionTypeFrom<'updateClassifier'>;

  updateColumnStatisticsForPartition: FunctionTypeFrom<'updateColumnStatisticsForPartition'>;

  updateColumnStatisticsForTable: FunctionTypeFrom<'updateColumnStatisticsForTable'>;

  updateConnection: FunctionTypeFrom<'updateConnection'>;

  updateCrawler: FunctionTypeFrom<'updateCrawler'>;

  updateCrawlerSchedule: FunctionTypeFrom<'updateCrawlerSchedule'>;

  updateDatabase: FunctionTypeFrom<'updateDatabase'>;

  updateDevEndpoint: FunctionTypeFrom<'updateDevEndpoint'>;

  updateJob: FunctionTypeFrom<'updateJob'>;

  updateMLTransform: FunctionTypeFrom<'updateMLTransform'>;

  updatePartition: FunctionTypeFrom<'updatePartition'>;

  updateRegistry: FunctionTypeFrom<'updateRegistry'>;

  updateSchema: FunctionTypeFrom<'updateSchema'>;

  updateTable: FunctionTypeFrom<'updateTable'>;

  updateTrigger: FunctionTypeFrom<'updateTrigger'>;

  updateUserDefinedFunction: FunctionTypeFrom<'updateUserDefinedFunction'>;

  updateWorkflow: FunctionTypeFrom<'updateWorkflow'>
}
 
export class Glue implements ClientType {
  private constructor(private readonly client: AWSGlue) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'glue';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["getClassifiers","getConnections","getCrawlerMetrics","getCrawlers","getDatabases","getDevEndpoints","getJobs","getMLTransforms","getResourcePolicies","getSecurityConfigurations","getTriggers","listBlueprints","listCrawlers","listCustomEntityTypes","listDevEndpoints","listJobs","listMLTransforms","listRegistries","listSchemas","listSessions","listTriggers","listWorkflows","searchTables"] as const;
  
  async batchCreatePartition(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreatePartition(...args).promise()
  }

  async batchDeleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteConnection(...args).promise()
  }

  async batchDeletePartition(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeletePartition(...args).promise()
  }

  async batchDeleteTable(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteTable(...args).promise()
  }

  async batchDeleteTableVersion(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteTableVersion(...args).promise()
  }

  async batchGetBlueprints(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetBlueprints(...args).promise()
  }

  async batchGetCrawlers(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetCrawlers(...args).promise()
  }

  async batchGetCustomEntityTypes(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetCustomEntityTypes(...args).promise()
  }

  async batchGetDevEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetDevEndpoints(...args).promise()
  }

  async batchGetJobs(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetJobs(...args).promise()
  }

  async batchGetPartition(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetPartition(...args).promise()
  }

  async batchGetTriggers(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetTriggers(...args).promise()
  }

  async batchGetWorkflows(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetWorkflows(...args).promise()
  }

  async batchStopJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.batchStopJobRun(...args).promise()
  }

  async batchUpdatePartition(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdatePartition(...args).promise()
  }

  async cancelMLTaskRun(...args: any): Promise<any> {
  // undefined
    return this.client.cancelMLTaskRun(...args).promise()
  }

  async cancelStatement(...args: any): Promise<any> {
  // undefined
    return this.client.cancelStatement(...args).promise()
  }

  async checkSchemaVersionValidity(...args: any): Promise<any> {
  // undefined
    return this.client.checkSchemaVersionValidity(...args).promise()
  }

  async createBlueprint(...args: any): Promise<any> {
  // undefined
    return this.client.createBlueprint(...args).promise()
  }

  async createClassifier(...args: any): Promise<any> {
  // undefined
    return this.client.createClassifier(...args).promise()
  }

  async createConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createConnection(...args).promise()
  }

  async createCrawler(...args: any): Promise<any> {
  // undefined
    return this.client.createCrawler(...args).promise()
  }

  async createCustomEntityType(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomEntityType(...args).promise()
  }

  async createDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.createDatabase(...args).promise()
  }

  async createDevEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createDevEndpoint(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async createMLTransform(...args: any): Promise<any> {
  // undefined
    return this.client.createMLTransform(...args).promise()
  }

  async createPartition(...args: any): Promise<any> {
  // undefined
    return this.client.createPartition(...args).promise()
  }

  async createPartitionIndex(...args: any): Promise<any> {
  // undefined
    return this.client.createPartitionIndex(...args).promise()
  }

  async createRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.createRegistry(...args).promise()
  }

  async createSchema(...args: any): Promise<any> {
  // undefined
    return this.client.createSchema(...args).promise()
  }

  async createScript(...args: any): Promise<any> {
  // undefined
    return this.client.createScript(...args).promise()
  }

  async createSecurityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createSecurityConfiguration(...args).promise()
  }

  async createSession(...args: any): Promise<any> {
  // undefined
    return this.client.createSession(...args).promise()
  }

  async createTable(...args: any): Promise<any> {
  // undefined
    return this.client.createTable(...args).promise()
  }

  async createTrigger(...args: any): Promise<any> {
  // undefined
    return this.client.createTrigger(...args).promise()
  }

  async createUserDefinedFunction(...args: any): Promise<any> {
  // undefined
    return this.client.createUserDefinedFunction(...args).promise()
  }

  async createWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkflow(...args).promise()
  }

  async deleteBlueprint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBlueprint(...args).promise()
  }

  async deleteClassifier(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClassifier(...args).promise()
  }

  async deleteColumnStatisticsForPartition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteColumnStatisticsForPartition(...args).promise()
  }

  async deleteColumnStatisticsForTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteColumnStatisticsForTable(...args).promise()
  }

  async deleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnection(...args).promise()
  }

  async deleteCrawler(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCrawler(...args).promise()
  }

  async deleteCustomEntityType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomEntityType(...args).promise()
  }

  async deleteDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDatabase(...args).promise()
  }

  async deleteDevEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDevEndpoint(...args).promise()
  }

  async deleteJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJob(...args).promise()
  }

  async deleteMLTransform(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMLTransform(...args).promise()
  }

  async deletePartition(...args: any): Promise<any> {
  // undefined
    return this.client.deletePartition(...args).promise()
  }

  async deletePartitionIndex(...args: any): Promise<any> {
  // undefined
    return this.client.deletePartitionIndex(...args).promise()
  }

  async deleteRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRegistry(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteSchema(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchema(...args).promise()
  }

  async deleteSchemaVersions(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchemaVersions(...args).promise()
  }

  async deleteSecurityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSecurityConfiguration(...args).promise()
  }

  async deleteSession(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSession(...args).promise()
  }

  async deleteTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTable(...args).promise()
  }

  async deleteTableVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTableVersion(...args).promise()
  }

  async deleteTrigger(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrigger(...args).promise()
  }

  async deleteUserDefinedFunction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserDefinedFunction(...args).promise()
  }

  async deleteWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkflow(...args).promise()
  }

  async getBlueprint(...args: any): Promise<any> {
  // undefined
    return this.client.getBlueprint(...args).promise()
  }

  async getBlueprintRun(...args: any): Promise<any> {
  // undefined
    return this.client.getBlueprintRun(...args).promise()
  }

  async getBlueprintRuns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getBlueprintRuns(...args).promise()
  }

  async getCatalogImportStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getCatalogImportStatus(...args).promise()
  }

  async getClassifier(...args: any): Promise<any> {
  // undefined
    return this.client.getClassifier(...args).promise()
  }

  async getClassifiers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getClassifiers(...args).promise()
  }

  async getColumnStatisticsForPartition(...args: any): Promise<any> {
  // undefined
    return this.client.getColumnStatisticsForPartition(...args).promise()
  }

  async getColumnStatisticsForTable(...args: any): Promise<any> {
  // undefined
    return this.client.getColumnStatisticsForTable(...args).promise()
  }

  async getConnection(...args: any): Promise<any> {
  // undefined
    return this.client.getConnection(...args).promise()
  }

  async getConnections(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getConnections(...args).promise()
  }

  async getCrawler(...args: any): Promise<any> {
  // undefined
    return this.client.getCrawler(...args).promise()
  }

  async getCrawlerMetrics(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCrawlerMetrics(...args).promise()
  }

  async getCrawlers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCrawlers(...args).promise()
  }

  async getCustomEntityType(...args: any): Promise<any> {
  // undefined
    return this.client.getCustomEntityType(...args).promise()
  }

  async getDataCatalogEncryptionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getDataCatalogEncryptionSettings(...args).promise()
  }

  async getDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.getDatabase(...args).promise()
  }

  async getDatabases(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getDatabases(...args).promise()
  }

  async getDataflowGraph(...args: any): Promise<any> {
  // undefined
    return this.client.getDataflowGraph(...args).promise()
  }

  async getDevEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getDevEndpoint(...args).promise()
  }

  async getDevEndpoints(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getDevEndpoints(...args).promise()
  }

  async getJob(...args: any): Promise<any> {
  // undefined
    return this.client.getJob(...args).promise()
  }

  async getJobBookmark(...args: any): Promise<any> {
  // undefined
    return this.client.getJobBookmark(...args).promise()
  }

  async getJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.getJobRun(...args).promise()
  }

  async getJobRuns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getJobRuns(...args).promise()
  }

  async getJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getJobs(...args).promise()
  }

  async getMLTaskRun(...args: any): Promise<any> {
  // undefined
    return this.client.getMLTaskRun(...args).promise()
  }

  async getMLTaskRuns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getMLTaskRuns(...args).promise()
  }

  async getMLTransform(...args: any): Promise<any> {
  // undefined
    return this.client.getMLTransform(...args).promise()
  }

  async getMLTransforms(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getMLTransforms(...args).promise()
  }

  async getMapping(...args: any): Promise<any> {
  // undefined
    return this.client.getMapping(...args).promise()
  }

  async getPartition(...args: any): Promise<any> {
  // undefined
    return this.client.getPartition(...args).promise()
  }

  async getPartitionIndexes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"PartitionIndexDescriptorList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getPartitionIndexes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PartitionIndexDescriptorList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getPartitions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getPartitions(...args).promise()
  }

  async getPlan(...args: any): Promise<any> {
  // undefined
    return this.client.getPlan(...args).promise()
  }

  async getRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.getRegistry(...args).promise()
  }

  async getResourcePolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GetResourcePoliciesResponseList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getResourcePolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GetResourcePoliciesResponseList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResourcePolicy(...args).promise()
  }

  async getSchema(...args: any): Promise<any> {
  // undefined
    return this.client.getSchema(...args).promise()
  }

  async getSchemaByDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getSchemaByDefinition(...args).promise()
  }

  async getSchemaVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getSchemaVersion(...args).promise()
  }

  async getSchemaVersionsDiff(...args: any): Promise<any> {
  // undefined
    return this.client.getSchemaVersionsDiff(...args).promise()
  }

  async getSecurityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getSecurityConfiguration(...args).promise()
  }

  async getSecurityConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getSecurityConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SecurityConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getSession(...args: any): Promise<any> {
  // undefined
    return this.client.getSession(...args).promise()
  }

  async getStatement(...args: any): Promise<any> {
  // undefined
    return this.client.getStatement(...args).promise()
  }

  async getTable(...args: any): Promise<any> {
  // undefined
    return this.client.getTable(...args).promise()
  }

  async getTableVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getTableVersion(...args).promise()
  }

  async getTableVersions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTableVersions(...args).promise()
  }

  async getTables(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTables(...args).promise()
  }

  async getTags(...args: any): Promise<any> {
  // undefined
    return this.client.getTags(...args).promise()
  }

  async getTrigger(...args: any): Promise<any> {
  // undefined
    return this.client.getTrigger(...args).promise()
  }

  async getTriggers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTriggers(...args).promise()
  }

  async getUnfilteredPartitionMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getUnfilteredPartitionMetadata(...args).promise()
  }

  async getUnfilteredPartitionsMetadata(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getUnfilteredPartitionsMetadata(...args).promise()
  }

  async getUnfilteredTableMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getUnfilteredTableMetadata(...args).promise()
  }

  async getUserDefinedFunction(...args: any): Promise<any> {
  // undefined
    return this.client.getUserDefinedFunction(...args).promise()
  }

  async getUserDefinedFunctions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getUserDefinedFunctions(...args).promise()
  }

  async getWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkflow(...args).promise()
  }

  async getWorkflowRun(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkflowRun(...args).promise()
  }

  async getWorkflowRunProperties(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkflowRunProperties(...args).promise()
  }

  async getWorkflowRuns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getWorkflowRuns(...args).promise()
  }

  async importCatalogToGlue(...args: any): Promise<any> {
  // undefined
    return this.client.importCatalogToGlue(...args).promise()
  }

  async listBlueprints(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listBlueprints(...args).promise()
  }

  async listCrawlers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCrawlers(...args).promise()
  }

  async listCrawls(...args: any): Promise<any> {
  // undefined
    return this.client.listCrawls(...args).promise()
  }

  async listCustomEntityTypes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCustomEntityTypes(...args).promise()
  }

  async listDevEndpoints(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevEndpoints(...args).promise()
  }

  async listJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJobs(...args).promise()
  }

  async listMLTransforms(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMLTransforms(...args).promise()
  }

  async listRegistries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Registries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRegistries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Registries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemaVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schemas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSchemaVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Schemas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemas(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schemas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSchemas(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Schemas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSessions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSessions(...args).promise()
  }

  async listStatements(...args: any): Promise<any> {
  // undefined
    return this.client.listStatements(...args).promise()
  }

  async listTriggers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTriggers(...args).promise()
  }

  async listWorkflows(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkflows(...args).promise()
  }

  async putDataCatalogEncryptionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.putDataCatalogEncryptionSettings(...args).promise()
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async putSchemaVersionMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.putSchemaVersionMetadata(...args).promise()
  }

  async putWorkflowRunProperties(...args: any): Promise<any> {
  // undefined
    return this.client.putWorkflowRunProperties(...args).promise()
  }

  async querySchemaVersionMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.querySchemaVersionMetadata(...args).promise()
  }

  async registerSchemaVersion(...args: any): Promise<any> {
  // undefined
    return this.client.registerSchemaVersion(...args).promise()
  }

  async removeSchemaVersionMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.removeSchemaVersionMetadata(...args).promise()
  }

  async resetJobBookmark(...args: any): Promise<any> {
  // undefined
    return this.client.resetJobBookmark(...args).promise()
  }

  async resumeWorkflowRun(...args: any): Promise<any> {
  // undefined
    return this.client.resumeWorkflowRun(...args).promise()
  }

  async runStatement(...args: any): Promise<any> {
  // undefined
    return this.client.runStatement(...args).promise()
  }

  async searchTables(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchTables(...args).promise()
  }

  async startBlueprintRun(...args: any): Promise<any> {
  // undefined
    return this.client.startBlueprintRun(...args).promise()
  }

  async startCrawler(...args: any): Promise<any> {
  // undefined
    return this.client.startCrawler(...args).promise()
  }

  async startCrawlerSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.startCrawlerSchedule(...args).promise()
  }

  async startExportLabelsTaskRun(...args: any): Promise<any> {
  // undefined
    return this.client.startExportLabelsTaskRun(...args).promise()
  }

  async startImportLabelsTaskRun(...args: any): Promise<any> {
  // undefined
    return this.client.startImportLabelsTaskRun(...args).promise()
  }

  async startJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.startJobRun(...args).promise()
  }

  async startMLEvaluationTaskRun(...args: any): Promise<any> {
  // undefined
    return this.client.startMLEvaluationTaskRun(...args).promise()
  }

  async startMLLabelingSetGenerationTaskRun(...args: any): Promise<any> {
  // undefined
    return this.client.startMLLabelingSetGenerationTaskRun(...args).promise()
  }

  async startTrigger(...args: any): Promise<any> {
  // undefined
    return this.client.startTrigger(...args).promise()
  }

  async startWorkflowRun(...args: any): Promise<any> {
  // undefined
    return this.client.startWorkflowRun(...args).promise()
  }

  async stopCrawler(...args: any): Promise<any> {
  // undefined
    return this.client.stopCrawler(...args).promise()
  }

  async stopCrawlerSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.stopCrawlerSchedule(...args).promise()
  }

  async stopSession(...args: any): Promise<any> {
  // undefined
    return this.client.stopSession(...args).promise()
  }

  async stopTrigger(...args: any): Promise<any> {
  // undefined
    return this.client.stopTrigger(...args).promise()
  }

  async stopWorkflowRun(...args: any): Promise<any> {
  // undefined
    return this.client.stopWorkflowRun(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateBlueprint(...args: any): Promise<any> {
  // undefined
    return this.client.updateBlueprint(...args).promise()
  }

  async updateClassifier(...args: any): Promise<any> {
  // undefined
    return this.client.updateClassifier(...args).promise()
  }

  async updateColumnStatisticsForPartition(...args: any): Promise<any> {
  // undefined
    return this.client.updateColumnStatisticsForPartition(...args).promise()
  }

  async updateColumnStatisticsForTable(...args: any): Promise<any> {
  // undefined
    return this.client.updateColumnStatisticsForTable(...args).promise()
  }

  async updateConnection(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnection(...args).promise()
  }

  async updateCrawler(...args: any): Promise<any> {
  // undefined
    return this.client.updateCrawler(...args).promise()
  }

  async updateCrawlerSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.updateCrawlerSchedule(...args).promise()
  }

  async updateDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.updateDatabase(...args).promise()
  }

  async updateDevEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.updateDevEndpoint(...args).promise()
  }

  async updateJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateJob(...args).promise()
  }

  async updateMLTransform(...args: any): Promise<any> {
  // undefined
    return this.client.updateMLTransform(...args).promise()
  }

  async updatePartition(...args: any): Promise<any> {
  // undefined
    return this.client.updatePartition(...args).promise()
  }

  async updateRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.updateRegistry(...args).promise()
  }

  async updateSchema(...args: any): Promise<any> {
  // undefined
    return this.client.updateSchema(...args).promise()
  }

  async updateTable(...args: any): Promise<any> {
  // undefined
    return this.client.updateTable(...args).promise()
  }

  async updateTrigger(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrigger(...args).promise()
  }

  async updateUserDefinedFunction(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserDefinedFunction(...args).promise()
  }

  async updateWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkflow(...args).promise()
  }
  
  static fromClient(client: AWSGlue): ClientType {
    return new Glue(client) as any;
  }
  
  static client(options?: AWSGlue.Types.ClientConfiguration): ClientType {
    return new Glue(new AWSGlue(options)) as any;
  }
}  
