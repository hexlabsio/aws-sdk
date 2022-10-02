import { Request, SimpleDB as AWSSimpleDB } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSimpleDB> = AWSSimpleDB[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSimpleDB> = AWSSimpleDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSimpleDB[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSimpleDB, Extras> = AWSSimpleDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sdb';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["listDomains"];
    
  batchDeleteAttributes: FunctionTypeFrom<'batchDeleteAttributes'>;

  batchPutAttributes: FunctionTypeFrom<'batchPutAttributes'>;

  createDomain: FunctionTypeFrom<'createDomain'>;

  deleteAttributes: FunctionTypeFrom<'deleteAttributes'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  domainMetadata: FunctionTypeFrom<'domainMetadata'>;

  getAttributes: FunctionTypeFrom<'getAttributes'>;

  listDomains(params: { [K in keyof Omit<ParamsFrom<'listDomains', { next?: string, limit?: number }>, 'NextToken' | 'MaxNumberOfDomains'>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['DomainNames'] }>
  listDomains(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['DomainNames'] }>;

  putAttributes: FunctionTypeFrom<'putAttributes'>;

  select(params: { [K in keyof Omit<ParamsFrom<'select', { next?: string }>, 'NextToken'>]: ParamsFrom<'select', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'select'>]-?: ReturnTypeFrom<'select'>[K]}['Items'] }>
  
}
 
export class SimpleDB implements ClientType {
  private constructor(private readonly client: AWSSimpleDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sdb';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["listDomains"] as const;
  
  async batchDeleteAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteAttributes(...args).promise()
  }

  async batchPutAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.batchPutAttributes(...args).promise()
  }

  async createDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createDomain(...args).promise()
  }

  async deleteAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAttributes(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async domainMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.domainMetadata(...args).promise()
  }

  async getAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getAttributes(...args).promise()
  }

  async listDomains(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxNumberOfDomains","outputToken":"NextToken","resultKey":"DomainNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxNumberOfDomains: limit } : {};
    const result = await this.client.listDomains(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DomainNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putAttributes(...args).promise()
  }

  async select(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.select(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSSimpleDB): ClientType {
    return new SimpleDB(client) as any;
  }
  
  static client(options?: AWSSimpleDB.Types.ClientConfiguration): ClientType {
    return new SimpleDB(new AWSSimpleDB(options)) as any;
  }
}  
