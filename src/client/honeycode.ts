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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'honeycode';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  batchCreateTableRows: FunctionTypeFrom<'batchCreateTableRows'>;

  batchDeleteTableRows: FunctionTypeFrom<'batchDeleteTableRows'>;

  batchUpdateTableRows: FunctionTypeFrom<'batchUpdateTableRows'>;

  batchUpsertTableRows: FunctionTypeFrom<'batchUpsertTableRows'>;

  describeTableDataImportJob: FunctionTypeFrom<'describeTableDataImportJob'>;

  getScreenData: FunctionTypeFrom<'getScreenData'>;

  invokeScreenAutomation: FunctionTypeFrom<'invokeScreenAutomation'>;

  listTableColumns(params: { [K in keyof Omit<ParamsFrom<'listTableColumns', { next?: string }>, 'nextToken'>]: ParamsFrom<'listTableColumns', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTableColumns'>]-?: ReturnTypeFrom<'listTableColumns'>[K]}['tableColumns'] }>
  ;

  listTableRows(params: { [K in keyof Omit<ParamsFrom<'listTableRows', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTableRows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTableRows'>]-?: ReturnTypeFrom<'listTableRows'>[K]}['rows'] }>
  ;

  listTables(params: { [K in keyof Omit<ParamsFrom<'listTables', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['tables'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  queryTableRows(params: { [K in keyof Omit<ParamsFrom<'queryTableRows', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'queryTableRows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'queryTableRows'>]-?: ReturnTypeFrom<'queryTableRows'>[K]}['rows'] }>
  ;

  startTableDataImportJob: FunctionTypeFrom<'startTableDataImportJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class Honeycode implements ClientType {
  private constructor(private readonly client: AWSHoneycode) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'honeycode';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async batchCreateTableRows(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateTableRows(...args).promise()
  }

  async batchDeleteTableRows(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteTableRows(...args).promise()
  }

  async batchUpdateTableRows(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateTableRows(...args).promise()
  }

  async batchUpsertTableRows(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpsertTableRows(...args).promise()
  }

  async describeTableDataImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeTableDataImportJob(...args).promise()
  }

  async getScreenData(...args: any): Promise<any> {
  // undefined
    return this.client.getScreenData(...args).promise()
  }

  async invokeScreenAutomation(...args: any): Promise<any> {
  // undefined
    return this.client.invokeScreenAutomation(...args).promise()
  }

  async listTableColumns(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"tableColumns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listTableColumns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tableColumns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTableRows(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"rows"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTableRows(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.rows ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTables(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tables"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTables(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tables ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async queryTableRows(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"rows"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.queryTableRows(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.rows ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startTableDataImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.startTableDataImportJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSHoneycode): ClientType {
    return new Honeycode(client) as any;
  }
  
  static client(options?: AWSHoneycode.Types.ClientConfiguration): ClientType {
    return new Honeycode(new AWSHoneycode(options)) as any;
  }
}  
