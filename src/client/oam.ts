import { Request, OAM as AWSOAM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSOAM> = AWSOAM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSOAM> = AWSOAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSOAM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSOAM, Extras> = AWSOAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSOAM> = AWSOAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class OAM {
  private constructor(private readonly client: AWSOAM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'oam' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listLinks","listSinks"] as const;
  
  createLink: (params: RawParamsFrom<'createLink'>) => Promise<ReturnTypeFrom<'createLink'>>  = async params => {
  // undefined
    return this.client.createLink(params as any).promise();
  }

  createSink: (params: RawParamsFrom<'createSink'>) => Promise<ReturnTypeFrom<'createSink'>>  = async params => {
  // undefined
    return this.client.createSink(params as any).promise();
  }

  deleteLink: (params: RawParamsFrom<'deleteLink'>) => Promise<ReturnTypeFrom<'deleteLink'>>  = async params => {
  // undefined
    return this.client.deleteLink(params as any).promise();
  }

  deleteSink: (params: RawParamsFrom<'deleteSink'>) => Promise<ReturnTypeFrom<'deleteSink'>>  = async params => {
  // undefined
    return this.client.deleteSink(params as any).promise();
  }

  getLink: (params: RawParamsFrom<'getLink'>) => Promise<ReturnTypeFrom<'getLink'>>  = async params => {
  // undefined
    return this.client.getLink(params as any).promise();
  }

  getSink: (params: RawParamsFrom<'getSink'>) => Promise<ReturnTypeFrom<'getSink'>>  = async params => {
  // undefined
    return this.client.getSink(params as any).promise();
  }

  getSinkPolicy: (params: RawParamsFrom<'getSinkPolicy'>) => Promise<ReturnTypeFrom<'getSinkPolicy'>>  = async params => {
  // undefined
    return this.client.getSinkPolicy(params as any).promise();
  }

  async listAttachedLinks(params: { [K in keyof ParamsFrom<'listAttachedLinks', { next?: string, limit?: number }>]: ParamsFrom<'listAttachedLinks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttachedLinks'>]-?: ReturnTypeFrom<'listAttachedLinks'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAttachedLinks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAttachedLinks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLinks(params: { [K in keyof ParamsFrom<'listLinks', { next?: string, limit?: number }>]: ParamsFrom<'listLinks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLinks'>]-?: ReturnTypeFrom<'listLinks'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLinks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLinks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSinks(params: { [K in keyof ParamsFrom<'listSinks', { next?: string, limit?: number }>]: ParamsFrom<'listSinks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSinks'>]-?: ReturnTypeFrom<'listSinks'>[K]}['Items'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSinks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSinks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
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

  putSinkPolicy: (params: RawParamsFrom<'putSinkPolicy'>) => Promise<ReturnTypeFrom<'putSinkPolicy'>>  = async params => {
  // undefined
    return this.client.putSinkPolicy(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateLink: (params: RawParamsFrom<'updateLink'>) => Promise<ReturnTypeFrom<'updateLink'>>  = async params => {
  // undefined
    return this.client.updateLink(params as any).promise();
  }
  
  static fromClient(client: AWSOAM): OAM {
    return new OAM(client) as any;
  }
  
  static client(options?: AWSOAM.Types.ClientConfiguration): OAM {
    return new OAM(new AWSOAM(options)) as any;
  }
}  
