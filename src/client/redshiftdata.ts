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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRedshiftData> = AWSRedshiftData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class RedshiftData {
  private constructor(private readonly client: AWSRedshiftData) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'redshift-data' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["listStatements"] as const;
  
  batchExecuteStatement: (params: RawParamsFrom<'batchExecuteStatement'>) => Promise<ReturnTypeFrom<'batchExecuteStatement'>>  = async params => {
  // undefined
    return this.client.batchExecuteStatement(params as any).promise();
  }

  cancelStatement: (params: RawParamsFrom<'cancelStatement'>) => Promise<ReturnTypeFrom<'cancelStatement'>>  = async params => {
  // undefined
    return this.client.cancelStatement(params as any).promise();
  }

  describeStatement: (params: RawParamsFrom<'describeStatement'>) => Promise<ReturnTypeFrom<'describeStatement'>>  = async params => {
  // undefined
    return this.client.describeStatement(params as any).promise();
  }

  async describeTable(params: { [K in keyof ParamsFrom<'describeTable', { next?: string, limit?: number }>]: ParamsFrom<'describeTable', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTable'>]-?: ReturnTypeFrom<'describeTable'>[K]}['ColumnList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ColumnList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTable({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTable' })).toString('base64');
    const member = (Array.isArray(result.ColumnList ?? []) ? (result.ColumnList ?? []) : [result.ColumnList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  executeStatement: (params: RawParamsFrom<'executeStatement'>) => Promise<ReturnTypeFrom<'executeStatement'>>  = async params => {
  // undefined
    return this.client.executeStatement(params as any).promise();
  }

  async getStatementResult(params: { [K in keyof ParamsFrom<'getStatementResult', { next?: string }>]: ParamsFrom<'getStatementResult', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getStatementResult'>]-?: ReturnTypeFrom<'getStatementResult'>[K]}['Records'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Records"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getStatementResult({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getStatementResult' })).toString('base64');
    const member = (Array.isArray(result.Records ?? []) ? (result.Records ?? []) : [result.Records]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatabases(params: { [K in keyof ParamsFrom<'listDatabases', { next?: string, limit?: number }>]: ParamsFrom<'listDatabases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatabases'>]-?: ReturnTypeFrom<'listDatabases'>[K]}['Databases'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Databases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatabases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDatabases' })).toString('base64');
    const member = (Array.isArray(result.Databases ?? []) ? (result.Databases ?? []) : [result.Databases]) as any;
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

  async listStatements(params: { [K in keyof ParamsFrom<'listStatements', { next?: string, limit?: number }>]: ParamsFrom<'listStatements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStatements'>]-?: ReturnTypeFrom<'listStatements'>[K]}['Statements'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Statements"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStatements({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStatements' })).toString('base64');
    const member = (Array.isArray(result.Statements ?? []) ? (result.Statements ?? []) : [result.Statements]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTables(params: { [K in keyof ParamsFrom<'listTables', { next?: string, limit?: number }>]: ParamsFrom<'listTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['Tables'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tables"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTables({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTables' })).toString('base64');
    const member = (Array.isArray(result.Tables ?? []) ? (result.Tables ?? []) : [result.Tables]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSRedshiftData): RedshiftData {
    return new RedshiftData(client) as any;
  }
  
  static client(options?: AWSRedshiftData.Types.ClientConfiguration): RedshiftData {
    return new RedshiftData(new AWSRedshiftData(options)) as any;
  }
}  
