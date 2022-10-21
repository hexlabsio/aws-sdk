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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSForecastQueryService> = AWSForecastQueryService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ForecastQueryService {
  private constructor(private readonly client: AWSForecastQueryService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'forecastquery' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  queryForecast: (params: RawParamsFrom<'queryForecast'>) => Promise<ReturnTypeFrom<'queryForecast'>>  = async params => {
  // undefined
    return this.client.queryForecast(params as any).promise();
  }

  queryWhatIfForecast: (params: RawParamsFrom<'queryWhatIfForecast'>) => Promise<ReturnTypeFrom<'queryWhatIfForecast'>>  = async params => {
  // undefined
    return this.client.queryWhatIfForecast(params as any).promise();
  }
  
  static fromClient(client: AWSForecastQueryService): ForecastQueryService {
    return new ForecastQueryService(client) as any;
  }
  
  static client(options?: AWSForecastQueryService.Types.ClientConfiguration): ForecastQueryService {
    return new ForecastQueryService(new AWSForecastQueryService(options)) as any;
  }
}  
