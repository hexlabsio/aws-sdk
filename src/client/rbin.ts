import { Request, Rbin as AWSRbin } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRbin> = AWSRbin[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRbin> = AWSRbin[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRbin[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRbin, Extras> = AWSRbin[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRbin> = AWSRbin[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Rbin {
  private constructor(private readonly client: AWSRbin) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rbin' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  createRule: (params: RawParamsFrom<'createRule'>) => Promise<ReturnTypeFrom<'createRule'>>  = async params => {
  // undefined
    return this.client.createRule(params as any).promise();
  }

  deleteRule: (params: RawParamsFrom<'deleteRule'>) => Promise<ReturnTypeFrom<'deleteRule'>>  = async params => {
  // undefined
    return this.client.deleteRule(params as any).promise();
  }

  getRule: (params: RawParamsFrom<'getRule'>) => Promise<ReturnTypeFrom<'getRule'>>  = async params => {
  // undefined
    return this.client.getRule(params as any).promise();
  }

  async listRules(params: { [K in keyof ParamsFrom<'listRules', { next?: string, limit?: number }>]: ParamsFrom<'listRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRules'>]-?: ReturnTypeFrom<'listRules'>[K]}['Rules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Rules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Rules ?? []) ? (result.Rules ?? []) : [result.Rules]) as any;
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

  lockRule: (params: RawParamsFrom<'lockRule'>) => Promise<ReturnTypeFrom<'lockRule'>>  = async params => {
  // undefined
    return this.client.lockRule(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  unlockRule: (params: RawParamsFrom<'unlockRule'>) => Promise<ReturnTypeFrom<'unlockRule'>>  = async params => {
  // undefined
    return this.client.unlockRule(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateRule: (params: RawParamsFrom<'updateRule'>) => Promise<ReturnTypeFrom<'updateRule'>>  = async params => {
  // undefined
    return this.client.updateRule(params as any).promise();
  }
  
  static fromClient(client: AWSRbin): Rbin {
    return new Rbin(client) as any;
  }
  
  static client(options?: AWSRbin.Types.ClientConfiguration): Rbin {
    return new Rbin(new AWSRbin(options)) as any;
  }
}  
