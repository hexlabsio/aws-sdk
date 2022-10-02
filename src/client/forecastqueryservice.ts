import { Request, ForecastQueryService as AWSForecastQueryService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSForecastQueryService> = AWSForecastQueryService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSForecastQueryService> = AWSForecastQueryService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSForecastQueryService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSForecastQueryService, Extras> = AWSForecastQueryService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'forecastquery';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  queryForecast: FunctionTypeFrom<'queryForecast'>;

  queryWhatIfForecast: FunctionTypeFrom<'queryWhatIfForecast'>
}
 
export class ForecastQueryService implements ClientType {
  private constructor(private readonly client: AWSForecastQueryService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'forecastquery';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async queryForecast(...args: any): Promise<any> {
  // undefined
    return this.client.queryForecast(...args).promise()
  }

  async queryWhatIfForecast(...args: any): Promise<any> {
  // undefined
    return this.client.queryWhatIfForecast(...args).promise()
  }
  
  static fromClient(client: AWSForecastQueryService): ClientType {
    return new ForecastQueryService(client) as any;
  }
  
  static client(options?: AWSForecastQueryService.Types.ClientConfiguration): ClientType {
    return new ForecastQueryService(new AWSForecastQueryService(options)) as any;
  }
}  
