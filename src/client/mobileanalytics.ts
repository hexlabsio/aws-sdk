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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mobileanalytics';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  putEvents: FunctionTypeFrom<'putEvents'>
}
 
export class MobileAnalytics implements ClientType {
  private constructor(private readonly client: AWSMobileAnalytics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mobileanalytics';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async putEvents(...args: any): Promise<any> {
  // undefined
    return this.client.putEvents(...args).promise()
  }
  
  static fromClient(client: AWSMobileAnalytics): ClientType {
    return new MobileAnalytics(client) as any;
  }
  
  static client(options?: AWSMobileAnalytics.Types.ClientConfiguration): ClientType {
    return new MobileAnalytics(new AWSMobileAnalytics(options)) as any;
  }
}  
