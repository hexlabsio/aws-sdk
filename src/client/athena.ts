import { Request, Athena as AWSAthena } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAthena> = AWSAthena[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAthena> = AWSAthena[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAthena[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAthena, Extras> = AWSAthena[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAthena> = AWSAthena[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Athena {
  private constructor(private readonly client: AWSAthena) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'athena' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["listApplicationDPUSizes","listDataCatalogs","listEngineVersions","listNamedQueries","listQueryExecutions","listWorkGroups"] as const;
  
  batchGetNamedQuery: (params: RawParamsFrom<'batchGetNamedQuery'>) => Promise<ReturnTypeFrom<'batchGetNamedQuery'>>  = async params => {
  // undefined
    return this.client.batchGetNamedQuery(params as any).promise();
  }

  batchGetPreparedStatement: (params: RawParamsFrom<'batchGetPreparedStatement'>) => Promise<ReturnTypeFrom<'batchGetPreparedStatement'>>  = async params => {
  // undefined
    return this.client.batchGetPreparedStatement(params as any).promise();
  }

  batchGetQueryExecution: (params: RawParamsFrom<'batchGetQueryExecution'>) => Promise<ReturnTypeFrom<'batchGetQueryExecution'>>  = async params => {
  // undefined
    return this.client.batchGetQueryExecution(params as any).promise();
  }

  createDataCatalog: (params: RawParamsFrom<'createDataCatalog'>) => Promise<ReturnTypeFrom<'createDataCatalog'>>  = async params => {
  // undefined
    return this.client.createDataCatalog(params as any).promise();
  }

  createNamedQuery: (params: RawParamsFrom<'createNamedQuery'>) => Promise<ReturnTypeFrom<'createNamedQuery'>>  = async params => {
  // undefined
    return this.client.createNamedQuery(params as any).promise();
  }

  createNotebook: (params: RawParamsFrom<'createNotebook'>) => Promise<ReturnTypeFrom<'createNotebook'>>  = async params => {
  // undefined
    return this.client.createNotebook(params as any).promise();
  }

  createPreparedStatement: (params: RawParamsFrom<'createPreparedStatement'>) => Promise<ReturnTypeFrom<'createPreparedStatement'>>  = async params => {
  // undefined
    return this.client.createPreparedStatement(params as any).promise();
  }

  createPresignedNotebookUrl: (params: RawParamsFrom<'createPresignedNotebookUrl'>) => Promise<ReturnTypeFrom<'createPresignedNotebookUrl'>>  = async params => {
  // undefined
    return this.client.createPresignedNotebookUrl(params as any).promise();
  }

  createWorkGroup: (params: RawParamsFrom<'createWorkGroup'>) => Promise<ReturnTypeFrom<'createWorkGroup'>>  = async params => {
  // undefined
    return this.client.createWorkGroup(params as any).promise();
  }

  deleteDataCatalog: (params: RawParamsFrom<'deleteDataCatalog'>) => Promise<ReturnTypeFrom<'deleteDataCatalog'>>  = async params => {
  // undefined
    return this.client.deleteDataCatalog(params as any).promise();
  }

  deleteNamedQuery: (params: RawParamsFrom<'deleteNamedQuery'>) => Promise<ReturnTypeFrom<'deleteNamedQuery'>>  = async params => {
  // undefined
    return this.client.deleteNamedQuery(params as any).promise();
  }

  deleteNotebook: (params: RawParamsFrom<'deleteNotebook'>) => Promise<ReturnTypeFrom<'deleteNotebook'>>  = async params => {
  // undefined
    return this.client.deleteNotebook(params as any).promise();
  }

  deletePreparedStatement: (params: RawParamsFrom<'deletePreparedStatement'>) => Promise<ReturnTypeFrom<'deletePreparedStatement'>>  = async params => {
  // undefined
    return this.client.deletePreparedStatement(params as any).promise();
  }

  deleteWorkGroup: (params: RawParamsFrom<'deleteWorkGroup'>) => Promise<ReturnTypeFrom<'deleteWorkGroup'>>  = async params => {
  // undefined
    return this.client.deleteWorkGroup(params as any).promise();
  }

  exportNotebook: (params: RawParamsFrom<'exportNotebook'>) => Promise<ReturnTypeFrom<'exportNotebook'>>  = async params => {
  // undefined
    return this.client.exportNotebook(params as any).promise();
  }

  getCalculationExecution: (params: RawParamsFrom<'getCalculationExecution'>) => Promise<ReturnTypeFrom<'getCalculationExecution'>>  = async params => {
  // undefined
    return this.client.getCalculationExecution(params as any).promise();
  }

  getCalculationExecutionCode: (params: RawParamsFrom<'getCalculationExecutionCode'>) => Promise<ReturnTypeFrom<'getCalculationExecutionCode'>>  = async params => {
  // undefined
    return this.client.getCalculationExecutionCode(params as any).promise();
  }

  getCalculationExecutionStatus: (params: RawParamsFrom<'getCalculationExecutionStatus'>) => Promise<ReturnTypeFrom<'getCalculationExecutionStatus'>>  = async params => {
  // undefined
    return this.client.getCalculationExecutionStatus(params as any).promise();
  }

  getDataCatalog: (params: RawParamsFrom<'getDataCatalog'>) => Promise<ReturnTypeFrom<'getDataCatalog'>>  = async params => {
  // undefined
    return this.client.getDataCatalog(params as any).promise();
  }

  getDatabase: (params: RawParamsFrom<'getDatabase'>) => Promise<ReturnTypeFrom<'getDatabase'>>  = async params => {
  // undefined
    return this.client.getDatabase(params as any).promise();
  }

  getNamedQuery: (params: RawParamsFrom<'getNamedQuery'>) => Promise<ReturnTypeFrom<'getNamedQuery'>>  = async params => {
  // undefined
    return this.client.getNamedQuery(params as any).promise();
  }

  getNotebookMetadata: (params: RawParamsFrom<'getNotebookMetadata'>) => Promise<ReturnTypeFrom<'getNotebookMetadata'>>  = async params => {
  // undefined
    return this.client.getNotebookMetadata(params as any).promise();
  }

  getPreparedStatement: (params: RawParamsFrom<'getPreparedStatement'>) => Promise<ReturnTypeFrom<'getPreparedStatement'>>  = async params => {
  // undefined
    return this.client.getPreparedStatement(params as any).promise();
  }

  getQueryExecution: (params: RawParamsFrom<'getQueryExecution'>) => Promise<ReturnTypeFrom<'getQueryExecution'>>  = async params => {
  // undefined
    return this.client.getQueryExecution(params as any).promise();
  }

  getQueryResults: (params: RawParamsFrom<'getQueryResults'>) => Promise<ReturnTypeFrom<'getQueryResults'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getQueryResults(params as any).promise();
  }

  getQueryRuntimeStatistics: (params: RawParamsFrom<'getQueryRuntimeStatistics'>) => Promise<ReturnTypeFrom<'getQueryRuntimeStatistics'>>  = async params => {
  // undefined
    return this.client.getQueryRuntimeStatistics(params as any).promise();
  }

  getSession: (params: RawParamsFrom<'getSession'>) => Promise<ReturnTypeFrom<'getSession'>>  = async params => {
  // undefined
    return this.client.getSession(params as any).promise();
  }

  getSessionStatus: (params: RawParamsFrom<'getSessionStatus'>) => Promise<ReturnTypeFrom<'getSessionStatus'>>  = async params => {
  // undefined
    return this.client.getSessionStatus(params as any).promise();
  }

  getTableMetadata: (params: RawParamsFrom<'getTableMetadata'>) => Promise<ReturnTypeFrom<'getTableMetadata'>>  = async params => {
  // undefined
    return this.client.getTableMetadata(params as any).promise();
  }

  getWorkGroup: (params: RawParamsFrom<'getWorkGroup'>) => Promise<ReturnTypeFrom<'getWorkGroup'>>  = async params => {
  // undefined
    return this.client.getWorkGroup(params as any).promise();
  }

  importNotebook: (params: RawParamsFrom<'importNotebook'>) => Promise<ReturnTypeFrom<'importNotebook'>>  = async params => {
  // undefined
    return this.client.importNotebook(params as any).promise();
  }

  listApplicationDPUSizes: (params: RawParamsFrom<'listApplicationDPUSizes'>) => Promise<ReturnTypeFrom<'listApplicationDPUSizes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplicationDPUSizes(params as any).promise();
  }

  listCalculationExecutions: (params: RawParamsFrom<'listCalculationExecutions'>) => Promise<ReturnTypeFrom<'listCalculationExecutions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCalculationExecutions(params as any).promise();
  }

  async listDataCatalogs(params: { [K in keyof ParamsFrom<'listDataCatalogs', { next?: string, limit?: number }>]: ParamsFrom<'listDataCatalogs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataCatalogs'>]-?: ReturnTypeFrom<'listDataCatalogs'>[K]}['DataCatalogsSummary'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataCatalogsSummary"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataCatalogs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDataCatalogs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DataCatalogsSummary ?? []) ? (result.DataCatalogsSummary ?? []) : [result.DataCatalogsSummary]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatabases(params: { [K in keyof ParamsFrom<'listDatabases', { next?: string, limit?: number }>]: ParamsFrom<'listDatabases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatabases'>]-?: ReturnTypeFrom<'listDatabases'>[K]}['DatabaseList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatabaseList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatabases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDatabases' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DatabaseList ?? []) ? (result.DatabaseList ?? []) : [result.DatabaseList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listEngineVersions: (params: RawParamsFrom<'listEngineVersions'>) => Promise<ReturnTypeFrom<'listEngineVersions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEngineVersions(params as any).promise();
  }

  listExecutors: (params: RawParamsFrom<'listExecutors'>) => Promise<ReturnTypeFrom<'listExecutors'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExecutors(params as any).promise();
  }

  listNamedQueries: (params: RawParamsFrom<'listNamedQueries'>) => Promise<ReturnTypeFrom<'listNamedQueries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNamedQueries(params as any).promise();
  }

  listNotebookMetadata: (params: RawParamsFrom<'listNotebookMetadata'>) => Promise<ReturnTypeFrom<'listNotebookMetadata'>>  = async params => {
  // undefined
    return this.client.listNotebookMetadata(params as any).promise();
  }

  listNotebookSessions: (params: RawParamsFrom<'listNotebookSessions'>) => Promise<ReturnTypeFrom<'listNotebookSessions'>>  = async params => {
  // undefined
    return this.client.listNotebookSessions(params as any).promise();
  }

  listPreparedStatements: (params: RawParamsFrom<'listPreparedStatements'>) => Promise<ReturnTypeFrom<'listPreparedStatements'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPreparedStatements(params as any).promise();
  }

  listQueryExecutions: (params: RawParamsFrom<'listQueryExecutions'>) => Promise<ReturnTypeFrom<'listQueryExecutions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQueryExecutions(params as any).promise();
  }

  listSessions: (params: RawParamsFrom<'listSessions'>) => Promise<ReturnTypeFrom<'listSessions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSessions(params as any).promise();
  }

  async listTableMetadata(params: { [K in keyof ParamsFrom<'listTableMetadata', { next?: string, limit?: number }>]: ParamsFrom<'listTableMetadata', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTableMetadata'>]-?: ReturnTypeFrom<'listTableMetadata'>[K]}['TableMetadataList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TableMetadataList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTableMetadata({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTableMetadata' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TableMetadataList ?? []) ? (result.TableMetadataList ?? []) : [result.TableMetadataList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listWorkGroups: (params: RawParamsFrom<'listWorkGroups'>) => Promise<ReturnTypeFrom<'listWorkGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkGroups(params as any).promise();
  }

  startCalculationExecution: (params: RawParamsFrom<'startCalculationExecution'>) => Promise<ReturnTypeFrom<'startCalculationExecution'>>  = async params => {
  // undefined
    return this.client.startCalculationExecution(params as any).promise();
  }

  startQueryExecution: (params: RawParamsFrom<'startQueryExecution'>) => Promise<ReturnTypeFrom<'startQueryExecution'>>  = async params => {
  // undefined
    return this.client.startQueryExecution(params as any).promise();
  }

  startSession: (params: RawParamsFrom<'startSession'>) => Promise<ReturnTypeFrom<'startSession'>>  = async params => {
  // undefined
    return this.client.startSession(params as any).promise();
  }

  stopCalculationExecution: (params: RawParamsFrom<'stopCalculationExecution'>) => Promise<ReturnTypeFrom<'stopCalculationExecution'>>  = async params => {
  // undefined
    return this.client.stopCalculationExecution(params as any).promise();
  }

  stopQueryExecution: (params: RawParamsFrom<'stopQueryExecution'>) => Promise<ReturnTypeFrom<'stopQueryExecution'>>  = async params => {
  // undefined
    return this.client.stopQueryExecution(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  terminateSession: (params: RawParamsFrom<'terminateSession'>) => Promise<ReturnTypeFrom<'terminateSession'>>  = async params => {
  // undefined
    return this.client.terminateSession(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDataCatalog: (params: RawParamsFrom<'updateDataCatalog'>) => Promise<ReturnTypeFrom<'updateDataCatalog'>>  = async params => {
  // undefined
    return this.client.updateDataCatalog(params as any).promise();
  }

  updateNamedQuery: (params: RawParamsFrom<'updateNamedQuery'>) => Promise<ReturnTypeFrom<'updateNamedQuery'>>  = async params => {
  // undefined
    return this.client.updateNamedQuery(params as any).promise();
  }

  updateNotebook: (params: RawParamsFrom<'updateNotebook'>) => Promise<ReturnTypeFrom<'updateNotebook'>>  = async params => {
  // undefined
    return this.client.updateNotebook(params as any).promise();
  }

  updateNotebookMetadata: (params: RawParamsFrom<'updateNotebookMetadata'>) => Promise<ReturnTypeFrom<'updateNotebookMetadata'>>  = async params => {
  // undefined
    return this.client.updateNotebookMetadata(params as any).promise();
  }

  updatePreparedStatement: (params: RawParamsFrom<'updatePreparedStatement'>) => Promise<ReturnTypeFrom<'updatePreparedStatement'>>  = async params => {
  // undefined
    return this.client.updatePreparedStatement(params as any).promise();
  }

  updateWorkGroup: (params: RawParamsFrom<'updateWorkGroup'>) => Promise<ReturnTypeFrom<'updateWorkGroup'>>  = async params => {
  // undefined
    return this.client.updateWorkGroup(params as any).promise();
  }
  
  static fromClient(client: AWSAthena): Athena {
    return new Athena(client) as any;
  }
  
  static client(options?: AWSAthena.Types.ClientConfiguration): Athena {
    return new Athena(new AWSAthena(options)) as any;
  }
}  
