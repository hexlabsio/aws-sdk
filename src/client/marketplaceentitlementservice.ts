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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'entitlement';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  getEntitlements: FunctionTypeFrom<'getEntitlements'>
}
 
export class MarketplaceEntitlementService implements ClientType {
  private constructor(private readonly client: AWSMarketplaceEntitlementService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'entitlement';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async getEntitlements(...args: any): Promise<any> {
  // undefined
    return this.client.getEntitlements(...args).promise()
  }
  
  static fromClient(client: AWSMarketplaceEntitlementService): ClientType {
    return new MarketplaceEntitlementService(client) as any;
  }
  
  static client(options?: AWSMarketplaceEntitlementService.Types.ClientConfiguration): ClientType {
    return new MarketplaceEntitlementService(new AWSMarketplaceEntitlementService(options)) as any;
  }
}  
