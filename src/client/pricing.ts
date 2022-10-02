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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'pricing';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["describeServices"];
    
  describeServices: FunctionTypeFrom<'describeServices'>;

  getAttributeValues: FunctionTypeFrom<'getAttributeValues'>;

  getProducts: FunctionTypeFrom<'getProducts'>
}
 
export class Pricing implements ClientType {
  private constructor(private readonly client: AWSPricing) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'pricing';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["describeServices"] as const;
  
  async describeServices(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeServices(...args).promise()
  }

  async getAttributeValues(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getAttributeValues(...args).promise()
  }

  async getProducts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getProducts(...args).promise()
  }
  
  static fromClient(client: AWSPricing): ClientType {
    return new Pricing(client) as any;
  }
  
  static client(options?: AWSPricing.Types.ClientConfiguration): ClientType {
    return new Pricing(new AWSPricing(options)) as any;
  }
}  
