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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGlue> = AWSGlue[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Glue {
  private constructor(private readonly client: AWSGlue) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'glue' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["getClassifiers","getConnections","getCrawlerMetrics","getCrawlers","getDatabases","getDevEndpoints","getJobs","getMLTransforms","getResourcePolicies","getSecurityConfigurations","getTriggers","listBlueprints","listCrawlers","listCustomEntityTypes","listDevEndpoints","listJobs","listMLTransforms","listRegistries","listSchemas","listSessions","listTriggers","listWorkflows","searchTables"] as const;
  
  batchCreatePartition: (params: RawParamsFrom<'batchCreatePartition'>) => Promise<ReturnTypeFrom<'batchCreatePartition'>>  = async params => {
  // undefined
    return this.client.batchCreatePartition(params as any).promise();
  }

  batchDeleteConnection: (params: RawParamsFrom<'batchDeleteConnection'>) => Promise<ReturnTypeFrom<'batchDeleteConnection'>>  = async params => {
  // undefined
    return this.client.batchDeleteConnection(params as any).promise();
  }

  batchDeletePartition: (params: RawParamsFrom<'batchDeletePartition'>) => Promise<ReturnTypeFrom<'batchDeletePartition'>>  = async params => {
  // undefined
    return this.client.batchDeletePartition(params as any).promise();
  }

  batchDeleteTable: (params: RawParamsFrom<'batchDeleteTable'>) => Promise<ReturnTypeFrom<'batchDeleteTable'>>  = async params => {
  // undefined
    return this.client.batchDeleteTable(params as any).promise();
  }

  batchDeleteTableVersion: (params: RawParamsFrom<'batchDeleteTableVersion'>) => Promise<ReturnTypeFrom<'batchDeleteTableVersion'>>  = async params => {
  // undefined
    return this.client.batchDeleteTableVersion(params as any).promise();
  }

  batchGetBlueprints: (params: RawParamsFrom<'batchGetBlueprints'>) => Promise<ReturnTypeFrom<'batchGetBlueprints'>>  = async params => {
  // undefined
    return this.client.batchGetBlueprints(params as any).promise();
  }

  batchGetCrawlers: (params: RawParamsFrom<'batchGetCrawlers'>) => Promise<ReturnTypeFrom<'batchGetCrawlers'>>  = async params => {
  // undefined
    return this.client.batchGetCrawlers(params as any).promise();
  }

  batchGetCustomEntityTypes: (params: RawParamsFrom<'batchGetCustomEntityTypes'>) => Promise<ReturnTypeFrom<'batchGetCustomEntityTypes'>>  = async params => {
  // undefined
    return this.client.batchGetCustomEntityTypes(params as any).promise();
  }

  batchGetDevEndpoints: (params: RawParamsFrom<'batchGetDevEndpoints'>) => Promise<ReturnTypeFrom<'batchGetDevEndpoints'>>  = async params => {
  // undefined
    return this.client.batchGetDevEndpoints(params as any).promise();
  }

  batchGetJobs: (params: RawParamsFrom<'batchGetJobs'>) => Promise<ReturnTypeFrom<'batchGetJobs'>>  = async params => {
  // undefined
    return this.client.batchGetJobs(params as any).promise();
  }

  batchGetPartition: (params: RawParamsFrom<'batchGetPartition'>) => Promise<ReturnTypeFrom<'batchGetPartition'>>  = async params => {
  // undefined
    return this.client.batchGetPartition(params as any).promise();
  }

  batchGetTriggers: (params: RawParamsFrom<'batchGetTriggers'>) => Promise<ReturnTypeFrom<'batchGetTriggers'>>  = async params => {
  // undefined
    return this.client.batchGetTriggers(params as any).promise();
  }

  batchGetWorkflows: (params: RawParamsFrom<'batchGetWorkflows'>) => Promise<ReturnTypeFrom<'batchGetWorkflows'>>  = async params => {
  // undefined
    return this.client.batchGetWorkflows(params as any).promise();
  }

  batchStopJobRun: (params: RawParamsFrom<'batchStopJobRun'>) => Promise<ReturnTypeFrom<'batchStopJobRun'>>  = async params => {
  // undefined
    return this.client.batchStopJobRun(params as any).promise();
  }

  batchUpdatePartition: (params: RawParamsFrom<'batchUpdatePartition'>) => Promise<ReturnTypeFrom<'batchUpdatePartition'>>  = async params => {
  // undefined
    return this.client.batchUpdatePartition(params as any).promise();
  }

  cancelMLTaskRun: (params: RawParamsFrom<'cancelMLTaskRun'>) => Promise<ReturnTypeFrom<'cancelMLTaskRun'>>  = async params => {
  // undefined
    return this.client.cancelMLTaskRun(params as any).promise();
  }

  cancelStatement: (params: RawParamsFrom<'cancelStatement'>) => Promise<ReturnTypeFrom<'cancelStatement'>>  = async params => {
  // undefined
    return this.client.cancelStatement(params as any).promise();
  }

  checkSchemaVersionValidity: (params: RawParamsFrom<'checkSchemaVersionValidity'>) => Promise<ReturnTypeFrom<'checkSchemaVersionValidity'>>  = async params => {
  // undefined
    return this.client.checkSchemaVersionValidity(params as any).promise();
  }

  createBlueprint: (params: RawParamsFrom<'createBlueprint'>) => Promise<ReturnTypeFrom<'createBlueprint'>>  = async params => {
  // undefined
    return this.client.createBlueprint(params as any).promise();
  }

  createClassifier: (params: RawParamsFrom<'createClassifier'>) => Promise<ReturnTypeFrom<'createClassifier'>>  = async params => {
  // undefined
    return this.client.createClassifier(params as any).promise();
  }

  createConnection: (params: RawParamsFrom<'createConnection'>) => Promise<ReturnTypeFrom<'createConnection'>>  = async params => {
  // undefined
    return this.client.createConnection(params as any).promise();
  }

  createCrawler: (params: RawParamsFrom<'createCrawler'>) => Promise<ReturnTypeFrom<'createCrawler'>>  = async params => {
  // undefined
    return this.client.createCrawler(params as any).promise();
  }

  createCustomEntityType: (params: RawParamsFrom<'createCustomEntityType'>) => Promise<ReturnTypeFrom<'createCustomEntityType'>>  = async params => {
  // undefined
    return this.client.createCustomEntityType(params as any).promise();
  }

  createDatabase: (params: RawParamsFrom<'createDatabase'>) => Promise<ReturnTypeFrom<'createDatabase'>>  = async params => {
  // undefined
    return this.client.createDatabase(params as any).promise();
  }

  createDevEndpoint: (params: RawParamsFrom<'createDevEndpoint'>) => Promise<ReturnTypeFrom<'createDevEndpoint'>>  = async params => {
  // undefined
    return this.client.createDevEndpoint(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  createMLTransform: (params: RawParamsFrom<'createMLTransform'>) => Promise<ReturnTypeFrom<'createMLTransform'>>  = async params => {
  // undefined
    return this.client.createMLTransform(params as any).promise();
  }

  createPartition: (params: RawParamsFrom<'createPartition'>) => Promise<ReturnTypeFrom<'createPartition'>>  = async params => {
  // undefined
    return this.client.createPartition(params as any).promise();
  }

  createPartitionIndex: (params: RawParamsFrom<'createPartitionIndex'>) => Promise<ReturnTypeFrom<'createPartitionIndex'>>  = async params => {
  // undefined
    return this.client.createPartitionIndex(params as any).promise();
  }

  createRegistry: (params: RawParamsFrom<'createRegistry'>) => Promise<ReturnTypeFrom<'createRegistry'>>  = async params => {
  // undefined
    return this.client.createRegistry(params as any).promise();
  }

  createSchema: (params: RawParamsFrom<'createSchema'>) => Promise<ReturnTypeFrom<'createSchema'>>  = async params => {
  // undefined
    return this.client.createSchema(params as any).promise();
  }

  createScript: (params: RawParamsFrom<'createScript'>) => Promise<ReturnTypeFrom<'createScript'>>  = async params => {
  // undefined
    return this.client.createScript(params as any).promise();
  }

  createSecurityConfiguration: (params: RawParamsFrom<'createSecurityConfiguration'>) => Promise<ReturnTypeFrom<'createSecurityConfiguration'>>  = async params => {
  // undefined
    return this.client.createSecurityConfiguration(params as any).promise();
  }

  createSession: (params: RawParamsFrom<'createSession'>) => Promise<ReturnTypeFrom<'createSession'>>  = async params => {
  // undefined
    return this.client.createSession(params as any).promise();
  }

  createTable: (params: RawParamsFrom<'createTable'>) => Promise<ReturnTypeFrom<'createTable'>>  = async params => {
  // undefined
    return this.client.createTable(params as any).promise();
  }

  createTrigger: (params: RawParamsFrom<'createTrigger'>) => Promise<ReturnTypeFrom<'createTrigger'>>  = async params => {
  // undefined
    return this.client.createTrigger(params as any).promise();
  }

  createUserDefinedFunction: (params: RawParamsFrom<'createUserDefinedFunction'>) => Promise<ReturnTypeFrom<'createUserDefinedFunction'>>  = async params => {
  // undefined
    return this.client.createUserDefinedFunction(params as any).promise();
  }

  createWorkflow: (params: RawParamsFrom<'createWorkflow'>) => Promise<ReturnTypeFrom<'createWorkflow'>>  = async params => {
  // undefined
    return this.client.createWorkflow(params as any).promise();
  }

  deleteBlueprint: (params: RawParamsFrom<'deleteBlueprint'>) => Promise<ReturnTypeFrom<'deleteBlueprint'>>  = async params => {
  // undefined
    return this.client.deleteBlueprint(params as any).promise();
  }

  deleteClassifier: (params: RawParamsFrom<'deleteClassifier'>) => Promise<ReturnTypeFrom<'deleteClassifier'>>  = async params => {
  // undefined
    return this.client.deleteClassifier(params as any).promise();
  }

  deleteColumnStatisticsForPartition: (params: RawParamsFrom<'deleteColumnStatisticsForPartition'>) => Promise<ReturnTypeFrom<'deleteColumnStatisticsForPartition'>>  = async params => {
  // undefined
    return this.client.deleteColumnStatisticsForPartition(params as any).promise();
  }

  deleteColumnStatisticsForTable: (params: RawParamsFrom<'deleteColumnStatisticsForTable'>) => Promise<ReturnTypeFrom<'deleteColumnStatisticsForTable'>>  = async params => {
  // undefined
    return this.client.deleteColumnStatisticsForTable(params as any).promise();
  }

  deleteConnection: (params: RawParamsFrom<'deleteConnection'>) => Promise<ReturnTypeFrom<'deleteConnection'>>  = async params => {
  // undefined
    return this.client.deleteConnection(params as any).promise();
  }

  deleteCrawler: (params: RawParamsFrom<'deleteCrawler'>) => Promise<ReturnTypeFrom<'deleteCrawler'>>  = async params => {
  // undefined
    return this.client.deleteCrawler(params as any).promise();
  }

  deleteCustomEntityType: (params: RawParamsFrom<'deleteCustomEntityType'>) => Promise<ReturnTypeFrom<'deleteCustomEntityType'>>  = async params => {
  // undefined
    return this.client.deleteCustomEntityType(params as any).promise();
  }

  deleteDatabase: (params: RawParamsFrom<'deleteDatabase'>) => Promise<ReturnTypeFrom<'deleteDatabase'>>  = async params => {
  // undefined
    return this.client.deleteDatabase(params as any).promise();
  }

  deleteDevEndpoint: (params: RawParamsFrom<'deleteDevEndpoint'>) => Promise<ReturnTypeFrom<'deleteDevEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteDevEndpoint(params as any).promise();
  }

  deleteJob: (params: RawParamsFrom<'deleteJob'>) => Promise<ReturnTypeFrom<'deleteJob'>>  = async params => {
  // undefined
    return this.client.deleteJob(params as any).promise();
  }

  deleteMLTransform: (params: RawParamsFrom<'deleteMLTransform'>) => Promise<ReturnTypeFrom<'deleteMLTransform'>>  = async params => {
  // undefined
    return this.client.deleteMLTransform(params as any).promise();
  }

  deletePartition: (params: RawParamsFrom<'deletePartition'>) => Promise<ReturnTypeFrom<'deletePartition'>>  = async params => {
  // undefined
    return this.client.deletePartition(params as any).promise();
  }

  deletePartitionIndex: (params: RawParamsFrom<'deletePartitionIndex'>) => Promise<ReturnTypeFrom<'deletePartitionIndex'>>  = async params => {
  // undefined
    return this.client.deletePartitionIndex(params as any).promise();
  }

  deleteRegistry: (params: RawParamsFrom<'deleteRegistry'>) => Promise<ReturnTypeFrom<'deleteRegistry'>>  = async params => {
  // undefined
    return this.client.deleteRegistry(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteSchema: (params: RawParamsFrom<'deleteSchema'>) => Promise<ReturnTypeFrom<'deleteSchema'>>  = async params => {
  // undefined
    return this.client.deleteSchema(params as any).promise();
  }

  deleteSchemaVersions: (params: RawParamsFrom<'deleteSchemaVersions'>) => Promise<ReturnTypeFrom<'deleteSchemaVersions'>>  = async params => {
  // undefined
    return this.client.deleteSchemaVersions(params as any).promise();
  }

  deleteSecurityConfiguration: (params: RawParamsFrom<'deleteSecurityConfiguration'>) => Promise<ReturnTypeFrom<'deleteSecurityConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteSecurityConfiguration(params as any).promise();
  }

  deleteSession: (params: RawParamsFrom<'deleteSession'>) => Promise<ReturnTypeFrom<'deleteSession'>>  = async params => {
  // undefined
    return this.client.deleteSession(params as any).promise();
  }

  deleteTable: (params: RawParamsFrom<'deleteTable'>) => Promise<ReturnTypeFrom<'deleteTable'>>  = async params => {
  // undefined
    return this.client.deleteTable(params as any).promise();
  }

  deleteTableVersion: (params: RawParamsFrom<'deleteTableVersion'>) => Promise<ReturnTypeFrom<'deleteTableVersion'>>  = async params => {
  // undefined
    return this.client.deleteTableVersion(params as any).promise();
  }

  deleteTrigger: (params: RawParamsFrom<'deleteTrigger'>) => Promise<ReturnTypeFrom<'deleteTrigger'>>  = async params => {
  // undefined
    return this.client.deleteTrigger(params as any).promise();
  }

  deleteUserDefinedFunction: (params: RawParamsFrom<'deleteUserDefinedFunction'>) => Promise<ReturnTypeFrom<'deleteUserDefinedFunction'>>  = async params => {
  // undefined
    return this.client.deleteUserDefinedFunction(params as any).promise();
  }

  deleteWorkflow: (params: RawParamsFrom<'deleteWorkflow'>) => Promise<ReturnTypeFrom<'deleteWorkflow'>>  = async params => {
  // undefined
    return this.client.deleteWorkflow(params as any).promise();
  }

  getBlueprint: (params: RawParamsFrom<'getBlueprint'>) => Promise<ReturnTypeFrom<'getBlueprint'>>  = async params => {
  // undefined
    return this.client.getBlueprint(params as any).promise();
  }

  getBlueprintRun: (params: RawParamsFrom<'getBlueprintRun'>) => Promise<ReturnTypeFrom<'getBlueprintRun'>>  = async params => {
  // undefined
    return this.client.getBlueprintRun(params as any).promise();
  }

  getBlueprintRuns: (params: RawParamsFrom<'getBlueprintRuns'>) => Promise<ReturnTypeFrom<'getBlueprintRuns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getBlueprintRuns(params as any).promise();
  }

  getCatalogImportStatus: (params: RawParamsFrom<'getCatalogImportStatus'>) => Promise<ReturnTypeFrom<'getCatalogImportStatus'>>  = async params => {
  // undefined
    return this.client.getCatalogImportStatus(params as any).promise();
  }

  getClassifier: (params: RawParamsFrom<'getClassifier'>) => Promise<ReturnTypeFrom<'getClassifier'>>  = async params => {
  // undefined
    return this.client.getClassifier(params as any).promise();
  }

  getClassifiers: (params: RawParamsFrom<'getClassifiers'>) => Promise<ReturnTypeFrom<'getClassifiers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getClassifiers(params as any).promise();
  }

  getColumnStatisticsForPartition: (params: RawParamsFrom<'getColumnStatisticsForPartition'>) => Promise<ReturnTypeFrom<'getColumnStatisticsForPartition'>>  = async params => {
  // undefined
    return this.client.getColumnStatisticsForPartition(params as any).promise();
  }

  getColumnStatisticsForTable: (params: RawParamsFrom<'getColumnStatisticsForTable'>) => Promise<ReturnTypeFrom<'getColumnStatisticsForTable'>>  = async params => {
  // undefined
    return this.client.getColumnStatisticsForTable(params as any).promise();
  }

  getConnection: (params: RawParamsFrom<'getConnection'>) => Promise<ReturnTypeFrom<'getConnection'>>  = async params => {
  // undefined
    return this.client.getConnection(params as any).promise();
  }

  getConnections: (params: RawParamsFrom<'getConnections'>) => Promise<ReturnTypeFrom<'getConnections'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getConnections(params as any).promise();
  }

  getCrawler: (params: RawParamsFrom<'getCrawler'>) => Promise<ReturnTypeFrom<'getCrawler'>>  = async params => {
  // undefined
    return this.client.getCrawler(params as any).promise();
  }

  getCrawlerMetrics: (params: RawParamsFrom<'getCrawlerMetrics'>) => Promise<ReturnTypeFrom<'getCrawlerMetrics'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCrawlerMetrics(params as any).promise();
  }

  getCrawlers: (params: RawParamsFrom<'getCrawlers'>) => Promise<ReturnTypeFrom<'getCrawlers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCrawlers(params as any).promise();
  }

  getCustomEntityType: (params: RawParamsFrom<'getCustomEntityType'>) => Promise<ReturnTypeFrom<'getCustomEntityType'>>  = async params => {
  // undefined
    return this.client.getCustomEntityType(params as any).promise();
  }

  getDataCatalogEncryptionSettings: (params: RawParamsFrom<'getDataCatalogEncryptionSettings'>) => Promise<ReturnTypeFrom<'getDataCatalogEncryptionSettings'>>  = async params => {
  // undefined
    return this.client.getDataCatalogEncryptionSettings(params as any).promise();
  }

  getDatabase: (params: RawParamsFrom<'getDatabase'>) => Promise<ReturnTypeFrom<'getDatabase'>>  = async params => {
  // undefined
    return this.client.getDatabase(params as any).promise();
  }

  getDatabases: (params: RawParamsFrom<'getDatabases'>) => Promise<ReturnTypeFrom<'getDatabases'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getDatabases(params as any).promise();
  }

  getDataflowGraph: (params: RawParamsFrom<'getDataflowGraph'>) => Promise<ReturnTypeFrom<'getDataflowGraph'>>  = async params => {
  // undefined
    return this.client.getDataflowGraph(params as any).promise();
  }

  getDevEndpoint: (params: RawParamsFrom<'getDevEndpoint'>) => Promise<ReturnTypeFrom<'getDevEndpoint'>>  = async params => {
  // undefined
    return this.client.getDevEndpoint(params as any).promise();
  }

  getDevEndpoints: (params: RawParamsFrom<'getDevEndpoints'>) => Promise<ReturnTypeFrom<'getDevEndpoints'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getDevEndpoints(params as any).promise();
  }

  getJob: (params: RawParamsFrom<'getJob'>) => Promise<ReturnTypeFrom<'getJob'>>  = async params => {
  // undefined
    return this.client.getJob(params as any).promise();
  }

  getJobBookmark: (params: RawParamsFrom<'getJobBookmark'>) => Promise<ReturnTypeFrom<'getJobBookmark'>>  = async params => {
  // undefined
    return this.client.getJobBookmark(params as any).promise();
  }

  getJobRun: (params: RawParamsFrom<'getJobRun'>) => Promise<ReturnTypeFrom<'getJobRun'>>  = async params => {
  // undefined
    return this.client.getJobRun(params as any).promise();
  }

  getJobRuns: (params: RawParamsFrom<'getJobRuns'>) => Promise<ReturnTypeFrom<'getJobRuns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getJobRuns(params as any).promise();
  }

  getJobs: (params: RawParamsFrom<'getJobs'>) => Promise<ReturnTypeFrom<'getJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getJobs(params as any).promise();
  }

  getMLTaskRun: (params: RawParamsFrom<'getMLTaskRun'>) => Promise<ReturnTypeFrom<'getMLTaskRun'>>  = async params => {
  // undefined
    return this.client.getMLTaskRun(params as any).promise();
  }

  getMLTaskRuns: (params: RawParamsFrom<'getMLTaskRuns'>) => Promise<ReturnTypeFrom<'getMLTaskRuns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getMLTaskRuns(params as any).promise();
  }

  getMLTransform: (params: RawParamsFrom<'getMLTransform'>) => Promise<ReturnTypeFrom<'getMLTransform'>>  = async params => {
  // undefined
    return this.client.getMLTransform(params as any).promise();
  }

  getMLTransforms: (params: RawParamsFrom<'getMLTransforms'>) => Promise<ReturnTypeFrom<'getMLTransforms'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getMLTransforms(params as any).promise();
  }

  getMapping: (params: RawParamsFrom<'getMapping'>) => Promise<ReturnTypeFrom<'getMapping'>>  = async params => {
  // undefined
    return this.client.getMapping(params as any).promise();
  }

  getPartition: (params: RawParamsFrom<'getPartition'>) => Promise<ReturnTypeFrom<'getPartition'>>  = async params => {
  // undefined
    return this.client.getPartition(params as any).promise();
  }

  async getPartitionIndexes(params: { [K in keyof ParamsFrom<'getPartitionIndexes', { next?: string }>]: ParamsFrom<'getPartitionIndexes', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getPartitionIndexes'>]-?: ReturnTypeFrom<'getPartitionIndexes'>[K]}['PartitionIndexDescriptorList'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"PartitionIndexDescriptorList"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getPartitionIndexes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getPartitionIndexes' })).toString('base64');
    const member = (Array.isArray(result.PartitionIndexDescriptorList ?? []) ? (result.PartitionIndexDescriptorList ?? []) : [result.PartitionIndexDescriptorList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getPartitions: (params: RawParamsFrom<'getPartitions'>) => Promise<ReturnTypeFrom<'getPartitions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getPartitions(params as any).promise();
  }

  getPlan: (params: RawParamsFrom<'getPlan'>) => Promise<ReturnTypeFrom<'getPlan'>>  = async params => {
  // undefined
    return this.client.getPlan(params as any).promise();
  }

  getRegistry: (params: RawParamsFrom<'getRegistry'>) => Promise<ReturnTypeFrom<'getRegistry'>>  = async params => {
  // undefined
    return this.client.getRegistry(params as any).promise();
  }

  async getResourcePolicies(params: { [K in keyof ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>]: ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getResourcePolicies'>]-?: ReturnTypeFrom<'getResourcePolicies'>[K]}['GetResourcePoliciesResponseList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GetResourcePoliciesResponseList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getResourcePolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getResourcePolicies' })).toString('base64');
    const member = (Array.isArray(result.GetResourcePoliciesResponseList ?? []) ? (result.GetResourcePoliciesResponseList ?? []) : [result.GetResourcePoliciesResponseList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getResourcePolicy: (params: RawParamsFrom<'getResourcePolicy'>) => Promise<ReturnTypeFrom<'getResourcePolicy'>>  = async params => {
  // undefined
    return this.client.getResourcePolicy(params as any).promise();
  }

  getSchema: (params: RawParamsFrom<'getSchema'>) => Promise<ReturnTypeFrom<'getSchema'>>  = async params => {
  // undefined
    return this.client.getSchema(params as any).promise();
  }

  getSchemaByDefinition: (params: RawParamsFrom<'getSchemaByDefinition'>) => Promise<ReturnTypeFrom<'getSchemaByDefinition'>>  = async params => {
  // undefined
    return this.client.getSchemaByDefinition(params as any).promise();
  }

  getSchemaVersion: (params: RawParamsFrom<'getSchemaVersion'>) => Promise<ReturnTypeFrom<'getSchemaVersion'>>  = async params => {
  // undefined
    return this.client.getSchemaVersion(params as any).promise();
  }

  getSchemaVersionsDiff: (params: RawParamsFrom<'getSchemaVersionsDiff'>) => Promise<ReturnTypeFrom<'getSchemaVersionsDiff'>>  = async params => {
  // undefined
    return this.client.getSchemaVersionsDiff(params as any).promise();
  }

  getSecurityConfiguration: (params: RawParamsFrom<'getSecurityConfiguration'>) => Promise<ReturnTypeFrom<'getSecurityConfiguration'>>  = async params => {
  // undefined
    return this.client.getSecurityConfiguration(params as any).promise();
  }

  async getSecurityConfigurations(params: { [K in keyof ParamsFrom<'getSecurityConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'getSecurityConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getSecurityConfigurations'>]-?: ReturnTypeFrom<'getSecurityConfigurations'>[K]}['SecurityConfigurations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getSecurityConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getSecurityConfigurations' })).toString('base64');
    const member = (Array.isArray(result.SecurityConfigurations ?? []) ? (result.SecurityConfigurations ?? []) : [result.SecurityConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getSession: (params: RawParamsFrom<'getSession'>) => Promise<ReturnTypeFrom<'getSession'>>  = async params => {
  // undefined
    return this.client.getSession(params as any).promise();
  }

  getStatement: (params: RawParamsFrom<'getStatement'>) => Promise<ReturnTypeFrom<'getStatement'>>  = async params => {
  // undefined
    return this.client.getStatement(params as any).promise();
  }

  getTable: (params: RawParamsFrom<'getTable'>) => Promise<ReturnTypeFrom<'getTable'>>  = async params => {
  // undefined
    return this.client.getTable(params as any).promise();
  }

  getTableVersion: (params: RawParamsFrom<'getTableVersion'>) => Promise<ReturnTypeFrom<'getTableVersion'>>  = async params => {
  // undefined
    return this.client.getTableVersion(params as any).promise();
  }

  getTableVersions: (params: RawParamsFrom<'getTableVersions'>) => Promise<ReturnTypeFrom<'getTableVersions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTableVersions(params as any).promise();
  }

  getTables: (params: RawParamsFrom<'getTables'>) => Promise<ReturnTypeFrom<'getTables'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTables(params as any).promise();
  }

  getTags: (params: RawParamsFrom<'getTags'>) => Promise<ReturnTypeFrom<'getTags'>>  = async params => {
  // undefined
    return this.client.getTags(params as any).promise();
  }

  getTrigger: (params: RawParamsFrom<'getTrigger'>) => Promise<ReturnTypeFrom<'getTrigger'>>  = async params => {
  // undefined
    return this.client.getTrigger(params as any).promise();
  }

  getTriggers: (params: RawParamsFrom<'getTriggers'>) => Promise<ReturnTypeFrom<'getTriggers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTriggers(params as any).promise();
  }

  getUnfilteredPartitionMetadata: (params: RawParamsFrom<'getUnfilteredPartitionMetadata'>) => Promise<ReturnTypeFrom<'getUnfilteredPartitionMetadata'>>  = async params => {
  // undefined
    return this.client.getUnfilteredPartitionMetadata(params as any).promise();
  }

  getUnfilteredPartitionsMetadata: (params: RawParamsFrom<'getUnfilteredPartitionsMetadata'>) => Promise<ReturnTypeFrom<'getUnfilteredPartitionsMetadata'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getUnfilteredPartitionsMetadata(params as any).promise();
  }

  getUnfilteredTableMetadata: (params: RawParamsFrom<'getUnfilteredTableMetadata'>) => Promise<ReturnTypeFrom<'getUnfilteredTableMetadata'>>  = async params => {
  // undefined
    return this.client.getUnfilteredTableMetadata(params as any).promise();
  }

  getUserDefinedFunction: (params: RawParamsFrom<'getUserDefinedFunction'>) => Promise<ReturnTypeFrom<'getUserDefinedFunction'>>  = async params => {
  // undefined
    return this.client.getUserDefinedFunction(params as any).promise();
  }

  getUserDefinedFunctions: (params: RawParamsFrom<'getUserDefinedFunctions'>) => Promise<ReturnTypeFrom<'getUserDefinedFunctions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getUserDefinedFunctions(params as any).promise();
  }

  getWorkflow: (params: RawParamsFrom<'getWorkflow'>) => Promise<ReturnTypeFrom<'getWorkflow'>>  = async params => {
  // undefined
    return this.client.getWorkflow(params as any).promise();
  }

  getWorkflowRun: (params: RawParamsFrom<'getWorkflowRun'>) => Promise<ReturnTypeFrom<'getWorkflowRun'>>  = async params => {
  // undefined
    return this.client.getWorkflowRun(params as any).promise();
  }

  getWorkflowRunProperties: (params: RawParamsFrom<'getWorkflowRunProperties'>) => Promise<ReturnTypeFrom<'getWorkflowRunProperties'>>  = async params => {
  // undefined
    return this.client.getWorkflowRunProperties(params as any).promise();
  }

  getWorkflowRuns: (params: RawParamsFrom<'getWorkflowRuns'>) => Promise<ReturnTypeFrom<'getWorkflowRuns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getWorkflowRuns(params as any).promise();
  }

  importCatalogToGlue: (params: RawParamsFrom<'importCatalogToGlue'>) => Promise<ReturnTypeFrom<'importCatalogToGlue'>>  = async params => {
  // undefined
    return this.client.importCatalogToGlue(params as any).promise();
  }

  listBlueprints: (params: RawParamsFrom<'listBlueprints'>) => Promise<ReturnTypeFrom<'listBlueprints'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listBlueprints(params as any).promise();
  }

  listCrawlers: (params: RawParamsFrom<'listCrawlers'>) => Promise<ReturnTypeFrom<'listCrawlers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCrawlers(params as any).promise();
  }

  listCrawls: (params: RawParamsFrom<'listCrawls'>) => Promise<ReturnTypeFrom<'listCrawls'>>  = async params => {
  // undefined
    return this.client.listCrawls(params as any).promise();
  }

  listCustomEntityTypes: (params: RawParamsFrom<'listCustomEntityTypes'>) => Promise<ReturnTypeFrom<'listCustomEntityTypes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCustomEntityTypes(params as any).promise();
  }

  listDevEndpoints: (params: RawParamsFrom<'listDevEndpoints'>) => Promise<ReturnTypeFrom<'listDevEndpoints'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevEndpoints(params as any).promise();
  }

  listJobs: (params: RawParamsFrom<'listJobs'>) => Promise<ReturnTypeFrom<'listJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJobs(params as any).promise();
  }

  listMLTransforms: (params: RawParamsFrom<'listMLTransforms'>) => Promise<ReturnTypeFrom<'listMLTransforms'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMLTransforms(params as any).promise();
  }

  async listRegistries(params: { [K in keyof ParamsFrom<'listRegistries', { next?: string, limit?: number }>]: ParamsFrom<'listRegistries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRegistries'>]-?: ReturnTypeFrom<'listRegistries'>[K]}['Registries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Registries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRegistries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRegistries' })).toString('base64');
    const member = (Array.isArray(result.Registries ?? []) ? (result.Registries ?? []) : [result.Registries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemaVersions(params: { [K in keyof ParamsFrom<'listSchemaVersions', { next?: string, limit?: number }>]: ParamsFrom<'listSchemaVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchemaVersions'>]-?: ReturnTypeFrom<'listSchemaVersions'>[K]}['Schemas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schemas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSchemaVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSchemaVersions' })).toString('base64');
    const member = (Array.isArray(result.Schemas ?? []) ? (result.Schemas ?? []) : [result.Schemas]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemas(params: { [K in keyof ParamsFrom<'listSchemas', { next?: string, limit?: number }>]: ParamsFrom<'listSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['Schemas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schemas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSchemas({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSchemas' })).toString('base64');
    const member = (Array.isArray(result.Schemas ?? []) ? (result.Schemas ?? []) : [result.Schemas]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listSessions: (params: RawParamsFrom<'listSessions'>) => Promise<ReturnTypeFrom<'listSessions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSessions(params as any).promise();
  }

  listStatements: (params: RawParamsFrom<'listStatements'>) => Promise<ReturnTypeFrom<'listStatements'>>  = async params => {
  // undefined
    return this.client.listStatements(params as any).promise();
  }

  listTriggers: (params: RawParamsFrom<'listTriggers'>) => Promise<ReturnTypeFrom<'listTriggers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTriggers(params as any).promise();
  }

  listWorkflows: (params: RawParamsFrom<'listWorkflows'>) => Promise<ReturnTypeFrom<'listWorkflows'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkflows(params as any).promise();
  }

  putDataCatalogEncryptionSettings: (params: RawParamsFrom<'putDataCatalogEncryptionSettings'>) => Promise<ReturnTypeFrom<'putDataCatalogEncryptionSettings'>>  = async params => {
  // undefined
    return this.client.putDataCatalogEncryptionSettings(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  putSchemaVersionMetadata: (params: RawParamsFrom<'putSchemaVersionMetadata'>) => Promise<ReturnTypeFrom<'putSchemaVersionMetadata'>>  = async params => {
  // undefined
    return this.client.putSchemaVersionMetadata(params as any).promise();
  }

  putWorkflowRunProperties: (params: RawParamsFrom<'putWorkflowRunProperties'>) => Promise<ReturnTypeFrom<'putWorkflowRunProperties'>>  = async params => {
  // undefined
    return this.client.putWorkflowRunProperties(params as any).promise();
  }

  querySchemaVersionMetadata: (params: RawParamsFrom<'querySchemaVersionMetadata'>) => Promise<ReturnTypeFrom<'querySchemaVersionMetadata'>>  = async params => {
  // undefined
    return this.client.querySchemaVersionMetadata(params as any).promise();
  }

  registerSchemaVersion: (params: RawParamsFrom<'registerSchemaVersion'>) => Promise<ReturnTypeFrom<'registerSchemaVersion'>>  = async params => {
  // undefined
    return this.client.registerSchemaVersion(params as any).promise();
  }

  removeSchemaVersionMetadata: (params: RawParamsFrom<'removeSchemaVersionMetadata'>) => Promise<ReturnTypeFrom<'removeSchemaVersionMetadata'>>  = async params => {
  // undefined
    return this.client.removeSchemaVersionMetadata(params as any).promise();
  }

  resetJobBookmark: (params: RawParamsFrom<'resetJobBookmark'>) => Promise<ReturnTypeFrom<'resetJobBookmark'>>  = async params => {
  // undefined
    return this.client.resetJobBookmark(params as any).promise();
  }

  resumeWorkflowRun: (params: RawParamsFrom<'resumeWorkflowRun'>) => Promise<ReturnTypeFrom<'resumeWorkflowRun'>>  = async params => {
  // undefined
    return this.client.resumeWorkflowRun(params as any).promise();
  }

  runStatement: (params: RawParamsFrom<'runStatement'>) => Promise<ReturnTypeFrom<'runStatement'>>  = async params => {
  // undefined
    return this.client.runStatement(params as any).promise();
  }

  searchTables: (params: RawParamsFrom<'searchTables'>) => Promise<ReturnTypeFrom<'searchTables'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchTables(params as any).promise();
  }

  startBlueprintRun: (params: RawParamsFrom<'startBlueprintRun'>) => Promise<ReturnTypeFrom<'startBlueprintRun'>>  = async params => {
  // undefined
    return this.client.startBlueprintRun(params as any).promise();
  }

  startCrawler: (params: RawParamsFrom<'startCrawler'>) => Promise<ReturnTypeFrom<'startCrawler'>>  = async params => {
  // undefined
    return this.client.startCrawler(params as any).promise();
  }

  startCrawlerSchedule: (params: RawParamsFrom<'startCrawlerSchedule'>) => Promise<ReturnTypeFrom<'startCrawlerSchedule'>>  = async params => {
  // undefined
    return this.client.startCrawlerSchedule(params as any).promise();
  }

  startExportLabelsTaskRun: (params: RawParamsFrom<'startExportLabelsTaskRun'>) => Promise<ReturnTypeFrom<'startExportLabelsTaskRun'>>  = async params => {
  // undefined
    return this.client.startExportLabelsTaskRun(params as any).promise();
  }

  startImportLabelsTaskRun: (params: RawParamsFrom<'startImportLabelsTaskRun'>) => Promise<ReturnTypeFrom<'startImportLabelsTaskRun'>>  = async params => {
  // undefined
    return this.client.startImportLabelsTaskRun(params as any).promise();
  }

  startJobRun: (params: RawParamsFrom<'startJobRun'>) => Promise<ReturnTypeFrom<'startJobRun'>>  = async params => {
  // undefined
    return this.client.startJobRun(params as any).promise();
  }

  startMLEvaluationTaskRun: (params: RawParamsFrom<'startMLEvaluationTaskRun'>) => Promise<ReturnTypeFrom<'startMLEvaluationTaskRun'>>  = async params => {
  // undefined
    return this.client.startMLEvaluationTaskRun(params as any).promise();
  }

  startMLLabelingSetGenerationTaskRun: (params: RawParamsFrom<'startMLLabelingSetGenerationTaskRun'>) => Promise<ReturnTypeFrom<'startMLLabelingSetGenerationTaskRun'>>  = async params => {
  // undefined
    return this.client.startMLLabelingSetGenerationTaskRun(params as any).promise();
  }

  startTrigger: (params: RawParamsFrom<'startTrigger'>) => Promise<ReturnTypeFrom<'startTrigger'>>  = async params => {
  // undefined
    return this.client.startTrigger(params as any).promise();
  }

  startWorkflowRun: (params: RawParamsFrom<'startWorkflowRun'>) => Promise<ReturnTypeFrom<'startWorkflowRun'>>  = async params => {
  // undefined
    return this.client.startWorkflowRun(params as any).promise();
  }

  stopCrawler: (params: RawParamsFrom<'stopCrawler'>) => Promise<ReturnTypeFrom<'stopCrawler'>>  = async params => {
  // undefined
    return this.client.stopCrawler(params as any).promise();
  }

  stopCrawlerSchedule: (params: RawParamsFrom<'stopCrawlerSchedule'>) => Promise<ReturnTypeFrom<'stopCrawlerSchedule'>>  = async params => {
  // undefined
    return this.client.stopCrawlerSchedule(params as any).promise();
  }

  stopSession: (params: RawParamsFrom<'stopSession'>) => Promise<ReturnTypeFrom<'stopSession'>>  = async params => {
  // undefined
    return this.client.stopSession(params as any).promise();
  }

  stopTrigger: (params: RawParamsFrom<'stopTrigger'>) => Promise<ReturnTypeFrom<'stopTrigger'>>  = async params => {
  // undefined
    return this.client.stopTrigger(params as any).promise();
  }

  stopWorkflowRun: (params: RawParamsFrom<'stopWorkflowRun'>) => Promise<ReturnTypeFrom<'stopWorkflowRun'>>  = async params => {
  // undefined
    return this.client.stopWorkflowRun(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateBlueprint: (params: RawParamsFrom<'updateBlueprint'>) => Promise<ReturnTypeFrom<'updateBlueprint'>>  = async params => {
  // undefined
    return this.client.updateBlueprint(params as any).promise();
  }

  updateClassifier: (params: RawParamsFrom<'updateClassifier'>) => Promise<ReturnTypeFrom<'updateClassifier'>>  = async params => {
  // undefined
    return this.client.updateClassifier(params as any).promise();
  }

  updateColumnStatisticsForPartition: (params: RawParamsFrom<'updateColumnStatisticsForPartition'>) => Promise<ReturnTypeFrom<'updateColumnStatisticsForPartition'>>  = async params => {
  // undefined
    return this.client.updateColumnStatisticsForPartition(params as any).promise();
  }

  updateColumnStatisticsForTable: (params: RawParamsFrom<'updateColumnStatisticsForTable'>) => Promise<ReturnTypeFrom<'updateColumnStatisticsForTable'>>  = async params => {
  // undefined
    return this.client.updateColumnStatisticsForTable(params as any).promise();
  }

  updateConnection: (params: RawParamsFrom<'updateConnection'>) => Promise<ReturnTypeFrom<'updateConnection'>>  = async params => {
  // undefined
    return this.client.updateConnection(params as any).promise();
  }

  updateCrawler: (params: RawParamsFrom<'updateCrawler'>) => Promise<ReturnTypeFrom<'updateCrawler'>>  = async params => {
  // undefined
    return this.client.updateCrawler(params as any).promise();
  }

  updateCrawlerSchedule: (params: RawParamsFrom<'updateCrawlerSchedule'>) => Promise<ReturnTypeFrom<'updateCrawlerSchedule'>>  = async params => {
  // undefined
    return this.client.updateCrawlerSchedule(params as any).promise();
  }

  updateDatabase: (params: RawParamsFrom<'updateDatabase'>) => Promise<ReturnTypeFrom<'updateDatabase'>>  = async params => {
  // undefined
    return this.client.updateDatabase(params as any).promise();
  }

  updateDevEndpoint: (params: RawParamsFrom<'updateDevEndpoint'>) => Promise<ReturnTypeFrom<'updateDevEndpoint'>>  = async params => {
  // undefined
    return this.client.updateDevEndpoint(params as any).promise();
  }

  updateJob: (params: RawParamsFrom<'updateJob'>) => Promise<ReturnTypeFrom<'updateJob'>>  = async params => {
  // undefined
    return this.client.updateJob(params as any).promise();
  }

  updateMLTransform: (params: RawParamsFrom<'updateMLTransform'>) => Promise<ReturnTypeFrom<'updateMLTransform'>>  = async params => {
  // undefined
    return this.client.updateMLTransform(params as any).promise();
  }

  updatePartition: (params: RawParamsFrom<'updatePartition'>) => Promise<ReturnTypeFrom<'updatePartition'>>  = async params => {
  // undefined
    return this.client.updatePartition(params as any).promise();
  }

  updateRegistry: (params: RawParamsFrom<'updateRegistry'>) => Promise<ReturnTypeFrom<'updateRegistry'>>  = async params => {
  // undefined
    return this.client.updateRegistry(params as any).promise();
  }

  updateSchema: (params: RawParamsFrom<'updateSchema'>) => Promise<ReturnTypeFrom<'updateSchema'>>  = async params => {
  // undefined
    return this.client.updateSchema(params as any).promise();
  }

  updateTable: (params: RawParamsFrom<'updateTable'>) => Promise<ReturnTypeFrom<'updateTable'>>  = async params => {
  // undefined
    return this.client.updateTable(params as any).promise();
  }

  updateTrigger: (params: RawParamsFrom<'updateTrigger'>) => Promise<ReturnTypeFrom<'updateTrigger'>>  = async params => {
  // undefined
    return this.client.updateTrigger(params as any).promise();
  }

  updateUserDefinedFunction: (params: RawParamsFrom<'updateUserDefinedFunction'>) => Promise<ReturnTypeFrom<'updateUserDefinedFunction'>>  = async params => {
  // undefined
    return this.client.updateUserDefinedFunction(params as any).promise();
  }

  updateWorkflow: (params: RawParamsFrom<'updateWorkflow'>) => Promise<ReturnTypeFrom<'updateWorkflow'>>  = async params => {
  // undefined
    return this.client.updateWorkflow(params as any).promise();
  }
  
  static fromClient(client: AWSGlue): Glue {
    return new Glue(client) as any;
  }
  
  static client(options?: AWSGlue.Types.ClientConfiguration): Glue {
    return new Glue(new AWSGlue(options)) as any;
  }
}  
