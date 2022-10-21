import { Request, MarketplaceCommerceAnalytics as AWSMarketplaceCommerceAnalytics } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMarketplaceCommerceAnalytics> = AWSMarketplaceCommerceAnalytics[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMarketplaceCommerceAnalytics> = AWSMarketplaceCommerceAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMarketplaceCommerceAnalytics[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMarketplaceCommerceAnalytics, Extras> = AWSMarketplaceCommerceAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMarketplaceCommerceAnalytics> = AWSMarketplaceCommerceAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MarketplaceCommerceAnalytics {
  private constructor(private readonly client: AWSMarketplaceCommerceAnalytics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'marketplacecommerceanalytics' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = [] as const;
  
  generateDataSet: (params: RawParamsFrom<'generateDataSet'>) => Promise<ReturnTypeFrom<'generateDataSet'>>  = async params => {
  // undefined
    return this.client.generateDataSet(params as any).promise();
  }

  startSupportDataExport: (params: RawParamsFrom<'startSupportDataExport'>) => Promise<ReturnTypeFrom<'startSupportDataExport'>>  = async params => {
  // undefined
    return this.client.startSupportDataExport(params as any).promise();
  }
  
  static fromClient(client: AWSMarketplaceCommerceAnalytics): MarketplaceCommerceAnalytics {
    return new MarketplaceCommerceAnalytics(client) as any;
  }
  
  static client(options?: AWSMarketplaceCommerceAnalytics.Types.ClientConfiguration): MarketplaceCommerceAnalytics {
    return new MarketplaceCommerceAnalytics(new AWSMarketplaceCommerceAnalytics(options)) as any;
  }
}  
