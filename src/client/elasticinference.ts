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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'elastic-inference';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["describeAccelerators"];
    
  describeAcceleratorOfferings: FunctionTypeFrom<'describeAcceleratorOfferings'>;

  describeAcceleratorTypes: FunctionTypeFrom<'describeAcceleratorTypes'>;

  describeAccelerators(params: { [K in keyof Omit<ParamsFrom<'describeAccelerators', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeAccelerators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAccelerators'>]-?: ReturnTypeFrom<'describeAccelerators'>[K]}['acceleratorSet'] }>
  describeAccelerators(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAccelerators'>]-?: ReturnTypeFrom<'describeAccelerators'>[K]}['acceleratorSet'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class ElasticInference implements ClientType {
  private constructor(private readonly client: AWSElasticInference) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elastic-inference';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["describeAccelerators"] as const;
  
  async describeAcceleratorOfferings(...args: any): Promise<any> {
  // undefined
    return this.client.describeAcceleratorOfferings(...args).promise()
  }

  async describeAcceleratorTypes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAcceleratorTypes(...args).promise()
  }

  async describeAccelerators(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"acceleratorSet"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAccelerators(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.acceleratorSet ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSElasticInference): ClientType {
    return new ElasticInference(client) as any;
  }
  
  static client(options?: AWSElasticInference.Types.ClientConfiguration): ClientType {
    return new ElasticInference(new AWSElasticInference(options)) as any;
  }
}  
