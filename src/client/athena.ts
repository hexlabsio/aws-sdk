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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'athena';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["listDataCatalogs","listEngineVersions","listNamedQueries","listQueryExecutions","listWorkGroups"];
    
  batchGetNamedQuery: FunctionTypeFrom<'batchGetNamedQuery'>;

  batchGetPreparedStatement: FunctionTypeFrom<'batchGetPreparedStatement'>;

  batchGetQueryExecution: FunctionTypeFrom<'batchGetQueryExecution'>;

  createDataCatalog: FunctionTypeFrom<'createDataCatalog'>;

  createNamedQuery: FunctionTypeFrom<'createNamedQuery'>;

  createPreparedStatement: FunctionTypeFrom<'createPreparedStatement'>;

  createWorkGroup: FunctionTypeFrom<'createWorkGroup'>;

  deleteDataCatalog: FunctionTypeFrom<'deleteDataCatalog'>;

  deleteNamedQuery: FunctionTypeFrom<'deleteNamedQuery'>;

  deletePreparedStatement: FunctionTypeFrom<'deletePreparedStatement'>;

  deleteWorkGroup: FunctionTypeFrom<'deleteWorkGroup'>;

  getDataCatalog: FunctionTypeFrom<'getDataCatalog'>;

  getDatabase: FunctionTypeFrom<'getDatabase'>;

  getNamedQuery: FunctionTypeFrom<'getNamedQuery'>;

  getPreparedStatement: FunctionTypeFrom<'getPreparedStatement'>;

  getQueryExecution: FunctionTypeFrom<'getQueryExecution'>;

  getQueryResults: FunctionTypeFrom<'getQueryResults'>;

  getQueryRuntimeStatistics: FunctionTypeFrom<'getQueryRuntimeStatistics'>;

  getTableMetadata: FunctionTypeFrom<'getTableMetadata'>;

  getWorkGroup: FunctionTypeFrom<'getWorkGroup'>;

  listDataCatalogs(params: { [K in keyof Omit<ParamsFrom<'listDataCatalogs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDataCatalogs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataCatalogs'>]-?: ReturnTypeFrom<'listDataCatalogs'>[K]}['DataCatalogsSummary'] }>
  listDataCatalogs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataCatalogs'>]-?: ReturnTypeFrom<'listDataCatalogs'>[K]}['DataCatalogsSummary'] }>;

  listDatabases(params: { [K in keyof Omit<ParamsFrom<'listDatabases', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatabases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatabases'>]-?: ReturnTypeFrom<'listDatabases'>[K]}['DatabaseList'] }>
  ;

  listEngineVersions: FunctionTypeFrom<'listEngineVersions'>;

  listNamedQueries: FunctionTypeFrom<'listNamedQueries'>;

  listPreparedStatements: FunctionTypeFrom<'listPreparedStatements'>;

  listQueryExecutions: FunctionTypeFrom<'listQueryExecutions'>;

  listTableMetadata(params: { [K in keyof Omit<ParamsFrom<'listTableMetadata', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTableMetadata', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTableMetadata'>]-?: ReturnTypeFrom<'listTableMetadata'>[K]}['TableMetadataList'] }>
  ;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  listWorkGroups: FunctionTypeFrom<'listWorkGroups'>;

  startQueryExecution: FunctionTypeFrom<'startQueryExecution'>;

  stopQueryExecution: FunctionTypeFrom<'stopQueryExecution'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDataCatalog: FunctionTypeFrom<'updateDataCatalog'>;

  updateNamedQuery: FunctionTypeFrom<'updateNamedQuery'>;

  updatePreparedStatement: FunctionTypeFrom<'updatePreparedStatement'>;

  updateWorkGroup: FunctionTypeFrom<'updateWorkGroup'>
}
 
export class Athena implements ClientType {
  private constructor(private readonly client: AWSAthena) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'athena';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["listDataCatalogs","listEngineVersions","listNamedQueries","listQueryExecutions","listWorkGroups"] as const;
  
  async batchGetNamedQuery(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetNamedQuery(...args).promise()
  }

  async batchGetPreparedStatement(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetPreparedStatement(...args).promise()
  }

  async batchGetQueryExecution(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetQueryExecution(...args).promise()
  }

  async createDataCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.createDataCatalog(...args).promise()
  }

  async createNamedQuery(...args: any): Promise<any> {
  // undefined
    return this.client.createNamedQuery(...args).promise()
  }

  async createPreparedStatement(...args: any): Promise<any> {
  // undefined
    return this.client.createPreparedStatement(...args).promise()
  }

  async createWorkGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkGroup(...args).promise()
  }

  async deleteDataCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataCatalog(...args).promise()
  }

  async deleteNamedQuery(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNamedQuery(...args).promise()
  }

  async deletePreparedStatement(...args: any): Promise<any> {
  // undefined
    return this.client.deletePreparedStatement(...args).promise()
  }

  async deleteWorkGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkGroup(...args).promise()
  }

  async getDataCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.getDataCatalog(...args).promise()
  }

  async getDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.getDatabase(...args).promise()
  }

  async getNamedQuery(...args: any): Promise<any> {
  // undefined
    return this.client.getNamedQuery(...args).promise()
  }

  async getPreparedStatement(...args: any): Promise<any> {
  // undefined
    return this.client.getPreparedStatement(...args).promise()
  }

  async getQueryExecution(...args: any): Promise<any> {
  // undefined
    return this.client.getQueryExecution(...args).promise()
  }

  async getQueryResults(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getQueryResults(...args).promise()
  }

  async getQueryRuntimeStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getQueryRuntimeStatistics(...args).promise()
  }

  async getTableMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getTableMetadata(...args).promise()
  }

  async getWorkGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkGroup(...args).promise()
  }

  async listDataCatalogs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataCatalogsSummary"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataCatalogs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DataCatalogsSummary ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatabases(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatabaseList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatabases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DatabaseList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEngineVersions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEngineVersions(...args).promise()
  }

  async listNamedQueries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNamedQueries(...args).promise()
  }

  async listPreparedStatements(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPreparedStatements(...args).promise()
  }

  async listQueryExecutions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQueryExecutions(...args).promise()
  }

  async listTableMetadata(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TableMetadataList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTableMetadata(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TableMetadataList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWorkGroups(...args).promise()
  }

  async startQueryExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startQueryExecution(...args).promise()
  }

  async stopQueryExecution(...args: any): Promise<any> {
  // undefined
    return this.client.stopQueryExecution(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDataCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataCatalog(...args).promise()
  }

  async updateNamedQuery(...args: any): Promise<any> {
  // undefined
    return this.client.updateNamedQuery(...args).promise()
  }

  async updatePreparedStatement(...args: any): Promise<any> {
  // undefined
    return this.client.updatePreparedStatement(...args).promise()
  }

  async updateWorkGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkGroup(...args).promise()
  }
  
  static fromClient(client: AWSAthena): ClientType {
    return new Athena(client) as any;
  }
  
  static client(options?: AWSAthena.Types.ClientConfiguration): ClientType {
    return new Athena(new AWSAthena(options)) as any;
  }
}  
