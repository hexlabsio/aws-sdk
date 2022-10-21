import { Request, MobileAnalytics as AWSMobileAnalytics } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMobileAnalytics> = AWSMobileAnalytics[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMobileAnalytics> = AWSMobileAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMobileAnalytics[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMobileAnalytics, Extras> = AWSMobileAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMobileAnalytics> = AWSMobileAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MobileAnalytics {
  private constructor(private readonly client: AWSMobileAnalytics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mobileanalytics' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  putEvents: (params: RawParamsFrom<'putEvents'>) => Promise<ReturnTypeFrom<'putEvents'>>  = async params => {
  // undefined
    return this.client.putEvents(params as any).promise();
  }
  
  static fromClient(client: AWSMobileAnalytics): MobileAnalytics {
    return new MobileAnalytics(client) as any;
  }
  
  static client(options?: AWSMobileAnalytics.Types.ClientConfiguration): MobileAnalytics {
    return new MobileAnalytics(new AWSMobileAnalytics(options)) as any;
  }
}  
