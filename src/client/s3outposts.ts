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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSS3Outposts> = AWSS3Outposts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class S3Outposts {
  private constructor(private readonly client: AWSS3Outposts) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 's3-outposts' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = ["listEndpoints"] as const;
  
  createEndpoint: (params: RawParamsFrom<'createEndpoint'>) => Promise<ReturnTypeFrom<'createEndpoint'>>  = async params => {
  // undefined
    return this.client.createEndpoint(params as any).promise();
  }

  deleteEndpoint: (params: RawParamsFrom<'deleteEndpoint'>) => Promise<ReturnTypeFrom<'deleteEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteEndpoint(params as any).promise();
  }

  async listEndpoints(params: { [K in keyof ParamsFrom<'listEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'listEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEndpoints'>]-?: ReturnTypeFrom<'listEndpoints'>[K]}['Endpoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Endpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEndpoints' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Endpoints ?? []) ? (result.Endpoints ?? []) : [result.Endpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSharedEndpoints(params: { [K in keyof ParamsFrom<'listSharedEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'listSharedEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSharedEndpoints'>]-?: ReturnTypeFrom<'listSharedEndpoints'>[K]}['Endpoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Endpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSharedEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSharedEndpoints' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Endpoints ?? []) ? (result.Endpoints ?? []) : [result.Endpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSS3Outposts): S3Outposts {
    return new S3Outposts(client) as any;
  }
  
  static client(options?: AWSS3Outposts.Types.ClientConfiguration): S3Outposts {
    return new S3Outposts(new AWSS3Outposts(options)) as any;
  }
}  
