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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'marketplacecommerceanalytics';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly [];
    
  generateDataSet: FunctionTypeFrom<'generateDataSet'>;

  startSupportDataExport: FunctionTypeFrom<'startSupportDataExport'>
}
 
export class MarketplaceCommerceAnalytics implements ClientType {
  private constructor(private readonly client: AWSMarketplaceCommerceAnalytics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'marketplacecommerceanalytics';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = [] as const;
  
  async generateDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.generateDataSet(...args).promise()
  }

  async startSupportDataExport(...args: any): Promise<any> {
  // undefined
    return this.client.startSupportDataExport(...args).promise()
  }
  
  static fromClient(client: AWSMarketplaceCommerceAnalytics): ClientType {
    return new MarketplaceCommerceAnalytics(client) as any;
  }
  
  static client(options?: AWSMarketplaceCommerceAnalytics.Types.ClientConfiguration): ClientType {
    return new MarketplaceCommerceAnalytics(new AWSMarketplaceCommerceAnalytics(options)) as any;
  }
}  
