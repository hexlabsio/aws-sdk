import { Request, AppConfigData as AWSAppConfigData } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAppConfigData> = AWSAppConfigData[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAppConfigData> = AWSAppConfigData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAppConfigData[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAppConfigData, Extras> = AWSAppConfigData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAppConfigData> = AWSAppConfigData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AppConfigData {
  private constructor(private readonly client: AWSAppConfigData) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appconfigdata' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  getLatestConfiguration: (params: RawParamsFrom<'getLatestConfiguration'>) => Promise<ReturnTypeFrom<'getLatestConfiguration'>>  = async params => {
  // undefined
    return this.client.getLatestConfiguration(params as any).promise();
  }

  startConfigurationSession: (params: RawParamsFrom<'startConfigurationSession'>) => Promise<ReturnTypeFrom<'startConfigurationSession'>>  = async params => {
  // undefined
    return this.client.startConfigurationSession(params as any).promise();
  }
  
  static fromClient(client: AWSAppConfigData): AppConfigData {
    return new AppConfigData(client) as any;
  }
  
  static client(options?: AWSAppConfigData.Types.ClientConfiguration): AppConfigData {
    return new AppConfigData(new AWSAppConfigData(options)) as any;
  }
}  
