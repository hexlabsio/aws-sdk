import { Request, Pipes as AWSPipes } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPipes> = AWSPipes[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPipes> = AWSPipes[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPipes[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPipes, Extras> = AWSPipes[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPipes> = AWSPipes[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Pipes {
  private constructor(private readonly client: AWSPipes) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'pipes' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listPipes"] as const;
  
  createPipe: (params: RawParamsFrom<'createPipe'>) => Promise<ReturnTypeFrom<'createPipe'>>  = async params => {
  // undefined
    return this.client.createPipe(params as any).promise();
  }

  deletePipe: (params: RawParamsFrom<'deletePipe'>) => Promise<ReturnTypeFrom<'deletePipe'>>  = async params => {
  // undefined
    return this.client.deletePipe(params as any).promise();
  }

  describePipe: (params: RawParamsFrom<'describePipe'>) => Promise<ReturnTypeFrom<'describePipe'>>  = async params => {
  // undefined
    return this.client.describePipe(params as any).promise();
  }

  async listPipes(params: { [K in keyof ParamsFrom<'listPipes', { next?: string, limit?: number }>]: ParamsFrom<'listPipes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipes'>]-?: ReturnTypeFrom<'listPipes'>[K]}['Pipes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Pipes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listPipes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPipes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Pipes ?? []) ? (result.Pipes ?? []) : [result.Pipes]) as any;
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

  startPipe: (params: RawParamsFrom<'startPipe'>) => Promise<ReturnTypeFrom<'startPipe'>>  = async params => {
  // undefined
    return this.client.startPipe(params as any).promise();
  }

  stopPipe: (params: RawParamsFrom<'stopPipe'>) => Promise<ReturnTypeFrom<'stopPipe'>>  = async params => {
  // undefined
    return this.client.stopPipe(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updatePipe: (params: RawParamsFrom<'updatePipe'>) => Promise<ReturnTypeFrom<'updatePipe'>>  = async params => {
  // undefined
    return this.client.updatePipe(params as any).promise();
  }
  
  static fromClient(client: AWSPipes): Pipes {
    return new Pipes(client) as any;
  }
  
  static client(options?: AWSPipes.Types.ClientConfiguration): Pipes {
    return new Pipes(new AWSPipes(options)) as any;
  }
}  
