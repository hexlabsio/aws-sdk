import { Request, Honeycode as AWSHoneycode } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSHoneycode> = AWSHoneycode[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSHoneycode> = AWSHoneycode[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSHoneycode[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSHoneycode, Extras> = AWSHoneycode[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSHoneycode> = AWSHoneycode[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Honeycode {
  private constructor(private readonly client: AWSHoneycode) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'honeycode' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  batchCreateTableRows: (params: RawParamsFrom<'batchCreateTableRows'>) => Promise<ReturnTypeFrom<'batchCreateTableRows'>>  = async params => {
  // undefined
    return this.client.batchCreateTableRows(params as any).promise();
  }

  batchDeleteTableRows: (params: RawParamsFrom<'batchDeleteTableRows'>) => Promise<ReturnTypeFrom<'batchDeleteTableRows'>>  = async params => {
  // undefined
    return this.client.batchDeleteTableRows(params as any).promise();
  }

  batchUpdateTableRows: (params: RawParamsFrom<'batchUpdateTableRows'>) => Promise<ReturnTypeFrom<'batchUpdateTableRows'>>  = async params => {
  // undefined
    return this.client.batchUpdateTableRows(params as any).promise();
  }

  batchUpsertTableRows: (params: RawParamsFrom<'batchUpsertTableRows'>) => Promise<ReturnTypeFrom<'batchUpsertTableRows'>>  = async params => {
  // undefined
    return this.client.batchUpsertTableRows(params as any).promise();
  }

  describeTableDataImportJob: (params: RawParamsFrom<'describeTableDataImportJob'>) => Promise<ReturnTypeFrom<'describeTableDataImportJob'>>  = async params => {
  // undefined
    return this.client.describeTableDataImportJob(params as any).promise();
  }

  getScreenData: (params: RawParamsFrom<'getScreenData'>) => Promise<ReturnTypeFrom<'getScreenData'>>  = async params => {
  // undefined
    return this.client.getScreenData(params as any).promise();
  }

  invokeScreenAutomation: (params: RawParamsFrom<'invokeScreenAutomation'>) => Promise<ReturnTypeFrom<'invokeScreenAutomation'>>  = async params => {
  // undefined
    return this.client.invokeScreenAutomation(params as any).promise();
  }

  async listTableColumns(params: { [K in keyof ParamsFrom<'listTableColumns', { next?: string }>]: ParamsFrom<'listTableColumns', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTableColumns'>]-?: ReturnTypeFrom<'listTableColumns'>[K]}['tableColumns'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"tableColumns"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listTableColumns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTableColumns' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tableColumns ?? []) ? (result.tableColumns ?? []) : [result.tableColumns]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTableRows(params: { [K in keyof ParamsFrom<'listTableRows', { next?: string, limit?: number }>]: ParamsFrom<'listTableRows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTableRows'>]-?: ReturnTypeFrom<'listTableRows'>[K]}['rows'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"rows"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTableRows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTableRows' })).toString('base64') : undefined;
    const member = (Array.isArray(result.rows ?? []) ? (result.rows ?? []) : [result.rows]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTables(params: { [K in keyof ParamsFrom<'listTables', { next?: string, limit?: number }>]: ParamsFrom<'listTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['tables'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tables"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTables({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTables' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tables ?? []) ? (result.tables ?? []) : [result.tables]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async queryTableRows(params: { [K in keyof ParamsFrom<'queryTableRows', { next?: string, limit?: number }>]: ParamsFrom<'queryTableRows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'queryTableRows'>]-?: ReturnTypeFrom<'queryTableRows'>[K]}['rows'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"rows"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.queryTableRows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'queryTableRows' })).toString('base64') : undefined;
    const member = (Array.isArray(result.rows ?? []) ? (result.rows ?? []) : [result.rows]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startTableDataImportJob: (params: RawParamsFrom<'startTableDataImportJob'>) => Promise<ReturnTypeFrom<'startTableDataImportJob'>>  = async params => {
  // undefined
    return this.client.startTableDataImportJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSHoneycode): Honeycode {
    return new Honeycode(client) as any;
  }
  
  static client(options?: AWSHoneycode.Types.ClientConfiguration): Honeycode {
    return new Honeycode(new AWSHoneycode(options)) as any;
  }
}  
