import { Request, TimestreamQuery as AWSTimestreamQuery } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSTimestreamQuery> = AWSTimestreamQuery[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSTimestreamQuery> = AWSTimestreamQuery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSTimestreamQuery[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSTimestreamQuery, Extras> = AWSTimestreamQuery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSTimestreamQuery> = AWSTimestreamQuery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class TimestreamQuery {
  private constructor(private readonly client: AWSTimestreamQuery) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'query' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listScheduledQueries"] as const;
  
  cancelQuery: (params: RawParamsFrom<'cancelQuery'>) => Promise<ReturnTypeFrom<'cancelQuery'>>  = async params => {
  // undefined
    return this.client.cancelQuery(params as any).promise();
  }

  createScheduledQuery: (params: RawParamsFrom<'createScheduledQuery'>) => Promise<ReturnTypeFrom<'createScheduledQuery'>>  = async params => {
  // undefined
    return this.client.createScheduledQuery(params as any).promise();
  }

  deleteScheduledQuery: (params: RawParamsFrom<'deleteScheduledQuery'>) => Promise<ReturnTypeFrom<'deleteScheduledQuery'>>  = async params => {
  // undefined
    return this.client.deleteScheduledQuery(params as any).promise();
  }

  describeEndpoints: (params: RawParamsFrom<'describeEndpoints'>) => Promise<ReturnTypeFrom<'describeEndpoints'>>  = async params => {
  // undefined
    return this.client.describeEndpoints(params as any).promise();
  }

  describeScheduledQuery: (params: RawParamsFrom<'describeScheduledQuery'>) => Promise<ReturnTypeFrom<'describeScheduledQuery'>>  = async params => {
  // undefined
    return this.client.describeScheduledQuery(params as any).promise();
  }

  executeScheduledQuery: (params: RawParamsFrom<'executeScheduledQuery'>) => Promise<ReturnTypeFrom<'executeScheduledQuery'>>  = async params => {
  // undefined
    return this.client.executeScheduledQuery(params as any).promise();
  }

  async listScheduledQueries(params: { [K in keyof ParamsFrom<'listScheduledQueries', { next?: string, limit?: number }>]: ParamsFrom<'listScheduledQueries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listScheduledQueries'>]-?: ReturnTypeFrom<'listScheduledQueries'>[K]}['ScheduledQueries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledQueries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listScheduledQueries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ScheduledQueries ?? []) ? (result.ScheduledQueries ?? []) : [result.ScheduledQueries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  prepareQuery: (params: RawParamsFrom<'prepareQuery'>) => Promise<ReturnTypeFrom<'prepareQuery'>>  = async params => {
  // undefined
    return this.client.prepareQuery(params as any).promise();
  }

  async query(params: { [K in keyof ParamsFrom<'query', { next?: string, limit?: number }>]: ParamsFrom<'query', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'query'>]-?: ReturnTypeFrom<'query'>[K]}['Rows'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRows","outputToken":"NextToken","resultKey":"Rows"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxRows: limit } : {};
    const result = await this.client.query({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Rows ?? []) ? (result.Rows ?? []) : [result.Rows]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateScheduledQuery: (params: RawParamsFrom<'updateScheduledQuery'>) => Promise<ReturnTypeFrom<'updateScheduledQuery'>>  = async params => {
  // undefined
    return this.client.updateScheduledQuery(params as any).promise();
  }
  
  static fromClient(client: AWSTimestreamQuery): TimestreamQuery {
    return new TimestreamQuery(client) as any;
  }
  
  static client(options?: AWSTimestreamQuery.Types.ClientConfiguration): TimestreamQuery {
    return new TimestreamQuery(new AWSTimestreamQuery(options)) as any;
  }
}  
