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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMarketplaceMetering> = AWSMarketplaceMetering[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MarketplaceMetering {
  private constructor(private readonly client: AWSMarketplaceMetering) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'metering' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  batchMeterUsage: (params: RawParamsFrom<'batchMeterUsage'>) => Promise<ReturnTypeFrom<'batchMeterUsage'>>  = async params => {
  // undefined
    return this.client.batchMeterUsage(params as any).promise();
  }

  meterUsage: (params: RawParamsFrom<'meterUsage'>) => Promise<ReturnTypeFrom<'meterUsage'>>  = async params => {
  // undefined
    return this.client.meterUsage(params as any).promise();
  }

  registerUsage: (params: RawParamsFrom<'registerUsage'>) => Promise<ReturnTypeFrom<'registerUsage'>>  = async params => {
  // undefined
    return this.client.registerUsage(params as any).promise();
  }

  resolveCustomer: (params: RawParamsFrom<'resolveCustomer'>) => Promise<ReturnTypeFrom<'resolveCustomer'>>  = async params => {
  // undefined
    return this.client.resolveCustomer(params as any).promise();
  }
  
  static fromClient(client: AWSMarketplaceMetering): MarketplaceMetering {
    return new MarketplaceMetering(client) as any;
  }
  
  static client(options?: AWSMarketplaceMetering.Types.ClientConfiguration): MarketplaceMetering {
    return new MarketplaceMetering(new AWSMarketplaceMetering(options)) as any;
  }
}  
