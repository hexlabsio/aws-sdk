import { Request, S3Outposts as AWSS3Outposts } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSS3Outposts> = AWSS3Outposts[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSS3Outposts> = AWSS3Outposts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSS3Outposts[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSS3Outposts, Extras> = AWSS3Outposts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 's3-outposts';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly ["listEndpoints"];
    
  createEndpoint: FunctionTypeFrom<'createEndpoint'>;

  deleteEndpoint: FunctionTypeFrom<'deleteEndpoint'>;

  listEndpoints(params: { [K in keyof Omit<ParamsFrom<'listEndpoints', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpoints'>]-?: ReturnTypeFrom<'listEndpoints'>[K]}['Endpoints'] }>
  listEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpoints'>]-?: ReturnTypeFrom<'listEndpoints'>[K]}['Endpoints'] }>;

  listSharedEndpoints(params: { [K in keyof Omit<ParamsFrom<'listSharedEndpoints', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSharedEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSharedEndpoints'>]-?: ReturnTypeFrom<'listSharedEndpoints'>[K]}['Endpoints'] }>
  
}
 
export class S3Outposts implements ClientType {
  private constructor(private readonly client: AWSS3Outposts) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 's3-outposts';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = ["listEndpoints"] as const;
  
  async createEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpoint(...args).promise()
  }

  async deleteEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpoint(...args).promise()
  }

  async listEndpoints(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Endpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Endpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSharedEndpoints(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Endpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSharedEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Endpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSS3Outposts): ClientType {
    return new S3Outposts(client) as any;
  }
  
  static client(options?: AWSS3Outposts.Types.ClientConfiguration): ClientType {
    return new S3Outposts(new AWSS3Outposts(options)) as any;
  }
}  
