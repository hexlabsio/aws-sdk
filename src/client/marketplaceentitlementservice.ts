import { Request, MarketplaceEntitlementService as AWSMarketplaceEntitlementService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMarketplaceEntitlementService> = AWSMarketplaceEntitlementService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMarketplaceEntitlementService> = AWSMarketplaceEntitlementService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMarketplaceEntitlementService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMarketplaceEntitlementService, Extras> = AWSMarketplaceEntitlementService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMarketplaceEntitlementService> = AWSMarketplaceEntitlementService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MarketplaceEntitlementService {
  private constructor(private readonly client: AWSMarketplaceEntitlementService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'entitlement' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  getEntitlements: (params: RawParamsFrom<'getEntitlements'>) => Promise<ReturnTypeFrom<'getEntitlements'>>  = async params => {
  // undefined
    return this.client.getEntitlements(params as any).promise();
  }
  
  static fromClient(client: AWSMarketplaceEntitlementService): MarketplaceEntitlementService {
    return new MarketplaceEntitlementService(client) as any;
  }
  
  static client(options?: AWSMarketplaceEntitlementService.Types.ClientConfiguration): MarketplaceEntitlementService {
    return new MarketplaceEntitlementService(new AWSMarketplaceEntitlementService(options)) as any;
  }
}  
