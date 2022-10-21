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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSimpleDB> = AWSSimpleDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SimpleDB {
  private constructor(private readonly client: AWSSimpleDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sdb' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["listDomains"] as const;
  
  batchDeleteAttributes: (params: RawParamsFrom<'batchDeleteAttributes'>) => Promise<ReturnTypeFrom<'batchDeleteAttributes'>>  = async params => {
  // undefined
    return this.client.batchDeleteAttributes(params as any).promise();
  }

  batchPutAttributes: (params: RawParamsFrom<'batchPutAttributes'>) => Promise<ReturnTypeFrom<'batchPutAttributes'>>  = async params => {
  // undefined
    return this.client.batchPutAttributes(params as any).promise();
  }

  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  deleteAttributes: (params: RawParamsFrom<'deleteAttributes'>) => Promise<ReturnTypeFrom<'deleteAttributes'>>  = async params => {
  // undefined
    return this.client.deleteAttributes(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  domainMetadata: (params: RawParamsFrom<'domainMetadata'>) => Promise<ReturnTypeFrom<'domainMetadata'>>  = async params => {
  // undefined
    return this.client.domainMetadata(params as any).promise();
  }

  getAttributes: (params: RawParamsFrom<'getAttributes'>) => Promise<ReturnTypeFrom<'getAttributes'>>  = async params => {
  // undefined
    return this.client.getAttributes(params as any).promise();
  }

  async listDomains(params: { [K in keyof ParamsFrom<'listDomains', { next?: string, limit?: number }>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['DomainNames'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxNumberOfDomains","outputToken":"NextToken","resultKey":"DomainNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxNumberOfDomains: limit } : {};
    const result = await this.client.listDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDomains' })).toString('base64');
    const member = (Array.isArray(result.DomainNames ?? []) ? (result.DomainNames ?? []) : [result.DomainNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putAttributes: (params: RawParamsFrom<'putAttributes'>) => Promise<ReturnTypeFrom<'putAttributes'>>  = async params => {
  // undefined
    return this.client.putAttributes(params as any).promise();
  }

  async select(params: { [K in keyof ParamsFrom<'select', { next?: string }>]: ParamsFrom<'select', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'select'>]-?: ReturnTypeFrom<'select'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Items"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.select({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'select' })).toString('base64');
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSSimpleDB): SimpleDB {
    return new SimpleDB(client) as any;
  }
  
  static client(options?: AWSSimpleDB.Types.ClientConfiguration): SimpleDB {
    return new SimpleDB(new AWSSimpleDB(options)) as any;
  }
}  
