import { Request, MarketplaceMetering as AWSMarketplaceMetering } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMarketplaceMetering> = AWSMarketplaceMetering[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMarketplaceMetering> = AWSMarketplaceMetering[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMarketplaceMetering[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMarketplaceMetering, Extras> = AWSMarketplaceMetering[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'metering';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  batchMeterUsage: FunctionTypeFrom<'batchMeterUsage'>;

  meterUsage: FunctionTypeFrom<'meterUsage'>;

  registerUsage: FunctionTypeFrom<'registerUsage'>;

  resolveCustomer: FunctionTypeFrom<'resolveCustomer'>
}
 
export class MarketplaceMetering implements ClientType {
  private constructor(private readonly client: AWSMarketplaceMetering) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'metering';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async batchMeterUsage(...args: any): Promise<any> {
  // undefined
    return this.client.batchMeterUsage(...args).promise()
  }

  async meterUsage(...args: any): Promise<any> {
  // undefined
    return this.client.meterUsage(...args).promise()
  }

  async registerUsage(...args: any): Promise<any> {
  // undefined
    return this.client.registerUsage(...args).promise()
  }

  async resolveCustomer(...args: any): Promise<any> {
  // undefined
    return this.client.resolveCustomer(...args).promise()
  }
  
  static fromClient(client: AWSMarketplaceMetering): ClientType {
    return new MarketplaceMetering(client) as any;
  }
  
  static client(options?: AWSMarketplaceMetering.Types.ClientConfiguration): ClientType {
    return new MarketplaceMetering(new AWSMarketplaceMetering(options)) as any;
  }
}  
