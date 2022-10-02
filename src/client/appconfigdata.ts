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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'appconfigdata';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  getLatestConfiguration: FunctionTypeFrom<'getLatestConfiguration'>;

  startConfigurationSession: FunctionTypeFrom<'startConfigurationSession'>
}
 
export class AppConfigData implements ClientType {
  private constructor(private readonly client: AWSAppConfigData) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appconfigdata';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async getLatestConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getLatestConfiguration(...args).promise()
  }

  async startConfigurationSession(...args: any): Promise<any> {
  // undefined
    return this.client.startConfigurationSession(...args).promise()
  }
  
  static fromClient(client: AWSAppConfigData): ClientType {
    return new AppConfigData(client) as any;
  }
  
  static client(options?: AWSAppConfigData.Types.ClientConfiguration): ClientType {
    return new AppConfigData(new AWSAppConfigData(options)) as any;
  }
}  
