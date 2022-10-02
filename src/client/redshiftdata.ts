import { Request, RedshiftData as AWSRedshiftData } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRedshiftData> = AWSRedshiftData[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRedshiftData> = AWSRedshiftData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRedshiftData[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRedshiftData, Extras> = AWSRedshiftData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'redshift-data';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["listStatements"];
    
  batchExecuteStatement: FunctionTypeFrom<'batchExecuteStatement'>;

  cancelStatement: FunctionTypeFrom<'cancelStatement'>;

  describeStatement: FunctionTypeFrom<'describeStatement'>;

  describeTable(params: { [K in keyof Omit<ParamsFrom<'describeTable', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTable', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTable'>]-?: ReturnTypeFrom<'describeTable'>[K]}['ColumnList'] }>
  ;

  executeStatement: FunctionTypeFrom<'executeStatement'>;

  getStatementResult(params: { [K in keyof Omit<ParamsFrom<'getStatementResult', { next?: string }>, 'NextToken'>]: ParamsFrom<'getStatementResult', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getStatementResult'>]-?: ReturnTypeFrom<'getStatementResult'>[K]}['Records'] }>
  ;

  listDatabases(params: { [K in keyof Omit<ParamsFrom<'listDatabases', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatabases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatabases'>]-?: ReturnTypeFrom<'listDatabases'>[K]}['Databases'] }>
  ;

  listSchemas(params: { [K in keyof Omit<ParamsFrom<'listSchemas', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['Schemas'] }>
  ;

  listStatements(params: { [K in keyof Omit<ParamsFrom<'listStatements', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStatements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStatements'>]-?: ReturnTypeFrom<'listStatements'>[K]}['Statements'] }>
  listStatements(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStatements'>]-?: ReturnTypeFrom<'listStatements'>[K]}['Statements'] }>;

  listTables(params: { [K in keyof Omit<ParamsFrom<'listTables', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['Tables'] }>
  
}
 
export class RedshiftData implements ClientType {
  private constructor(private readonly client: AWSRedshiftData) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'redshift-data';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["listStatements"] as const;
  
  async batchExecuteStatement(...args: any): Promise<any> {
  // undefined
    return this.client.batchExecuteStatement(...args).promise()
  }

  async cancelStatement(...args: any): Promise<any> {
  // undefined
    return this.client.cancelStatement(...args).promise()
  }

  async describeStatement(...args: any): Promise<any> {
  // undefined
    return this.client.describeStatement(...args).promise()
  }

  async describeTable(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ColumnList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTable(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ColumnList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async executeStatement(...args: any): Promise<any> {
  // undefined
    return this.client.executeStatement(...args).promise()
  }

  async getStatementResult(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Records"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getStatementResult(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Records ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatabases(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Databases"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatabases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Databases ?? [];
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

  async listStatements(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Statements"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStatements(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Statements ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTables(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tables"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTables(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tables ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSRedshiftData): ClientType {
    return new RedshiftData(client) as any;
  }
  
  static client(options?: AWSRedshiftData.Types.ClientConfiguration): ClientType {
    return new RedshiftData(new AWSRedshiftData(options)) as any;
  }
}  
