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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'query';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listScheduledQueries"];
    
  cancelQuery: FunctionTypeFrom<'cancelQuery'>;

  createScheduledQuery: FunctionTypeFrom<'createScheduledQuery'>;

  deleteScheduledQuery: FunctionTypeFrom<'deleteScheduledQuery'>;

  describeEndpoints: FunctionTypeFrom<'describeEndpoints'>;

  describeScheduledQuery: FunctionTypeFrom<'describeScheduledQuery'>;

  executeScheduledQuery: FunctionTypeFrom<'executeScheduledQuery'>;

  listScheduledQueries(params: { [K in keyof Omit<ParamsFrom<'listScheduledQueries', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listScheduledQueries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listScheduledQueries'>]-?: ReturnTypeFrom<'listScheduledQueries'>[K]}['ScheduledQueries'] }>
  listScheduledQueries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listScheduledQueries'>]-?: ReturnTypeFrom<'listScheduledQueries'>[K]}['ScheduledQueries'] }>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  prepareQuery: FunctionTypeFrom<'prepareQuery'>;

  query(params: { [K in keyof Omit<ParamsFrom<'query', { next?: string, limit?: number }>, 'NextToken' | 'MaxRows'>]: ParamsFrom<'query', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'query'>]-?: ReturnTypeFrom<'query'>[K]}['Rows'] }>
  ;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateScheduledQuery: FunctionTypeFrom<'updateScheduledQuery'>
}
 
export class TimestreamQuery implements ClientType {
  private constructor(private readonly client: AWSTimestreamQuery) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'query';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listScheduledQueries"] as const;
  
  async cancelQuery(...args: any): Promise<any> {
  // undefined
    return this.client.cancelQuery(...args).promise()
  }

  async createScheduledQuery(...args: any): Promise<any> {
  // undefined
    return this.client.createScheduledQuery(...args).promise()
  }

  async deleteScheduledQuery(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScheduledQuery(...args).promise()
  }

  async describeEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpoints(...args).promise()
  }

  async describeScheduledQuery(...args: any): Promise<any> {
  // undefined
    return this.client.describeScheduledQuery(...args).promise()
  }

  async executeScheduledQuery(...args: any): Promise<any> {
  // undefined
    return this.client.executeScheduledQuery(...args).promise()
  }

  async listScheduledQueries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledQueries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listScheduledQueries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScheduledQueries ?? [];
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

  async prepareQuery(...args: any): Promise<any> {
  // undefined
    return this.client.prepareQuery(...args).promise()
  }

  async query(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRows","outputToken":"NextToken","resultKey":"Rows"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRows: limit } : {};
    const result = await this.client.query(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Rows ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateScheduledQuery(...args: any): Promise<any> {
  // undefined
    return this.client.updateScheduledQuery(...args).promise()
  }
  
  static fromClient(client: AWSTimestreamQuery): ClientType {
    return new TimestreamQuery(client) as any;
  }
  
  static client(options?: AWSTimestreamQuery.Types.ClientConfiguration): ClientType {
    return new TimestreamQuery(new AWSTimestreamQuery(options)) as any;
  }
}  
