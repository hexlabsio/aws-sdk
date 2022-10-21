import { Request, ElasticInference as AWSElasticInference } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSElasticInference> = AWSElasticInference[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSElasticInference> = AWSElasticInference[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSElasticInference[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSElasticInference, Extras> = AWSElasticInference[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSElasticInference> = AWSElasticInference[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ElasticInference {
  private constructor(private readonly client: AWSElasticInference) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elastic-inference' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["describeAccelerators"] as const;
  
  describeAcceleratorOfferings: (params: RawParamsFrom<'describeAcceleratorOfferings'>) => Promise<ReturnTypeFrom<'describeAcceleratorOfferings'>>  = async params => {
  // undefined
    return this.client.describeAcceleratorOfferings(params as any).promise();
  }

  describeAcceleratorTypes: (params: RawParamsFrom<'describeAcceleratorTypes'>) => Promise<ReturnTypeFrom<'describeAcceleratorTypes'>>  = async params => {
  // undefined
    return this.client.describeAcceleratorTypes(params as any).promise();
  }

  async describeAccelerators(params: { [K in keyof ParamsFrom<'describeAccelerators', { next?: string, limit?: number }>]: ParamsFrom<'describeAccelerators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAccelerators'>]-?: ReturnTypeFrom<'describeAccelerators'>[K]}['acceleratorSet'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"acceleratorSet"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAccelerators({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeAccelerators' })).toString('base64') : undefined;
    const member = (Array.isArray(result.acceleratorSet ?? []) ? (result.acceleratorSet ?? []) : [result.acceleratorSet]) as any;
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

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSElasticInference): ElasticInference {
    return new ElasticInference(client) as any;
  }
  
  static client(options?: AWSElasticInference.Types.ClientConfiguration): ElasticInference {
    return new ElasticInference(new AWSElasticInference(options)) as any;
  }
}  
