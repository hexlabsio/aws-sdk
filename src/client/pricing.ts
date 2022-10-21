import { Request, Pricing as AWSPricing } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPricing> = AWSPricing[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPricing> = AWSPricing[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPricing[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPricing, Extras> = AWSPricing[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPricing> = AWSPricing[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Pricing {
  private constructor(private readonly client: AWSPricing) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'pricing' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["describeServices"] as const;
  
  describeServices: (params: RawParamsFrom<'describeServices'>) => Promise<ReturnTypeFrom<'describeServices'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeServices(params as any).promise();
  }

  getAttributeValues: (params: RawParamsFrom<'getAttributeValues'>) => Promise<ReturnTypeFrom<'getAttributeValues'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getAttributeValues(params as any).promise();
  }

  getProducts: (params: RawParamsFrom<'getProducts'>) => Promise<ReturnTypeFrom<'getProducts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getProducts(params as any).promise();
  }
  
  static fromClient(client: AWSPricing): Pricing {
    return new Pricing(client) as any;
  }
  
  static client(options?: AWSPricing.Types.ClientConfiguration): Pricing {
    return new Pricing(new AWSPricing(options)) as any;
  }
}  
