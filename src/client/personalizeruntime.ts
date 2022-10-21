import { Request, PersonalizeRuntime as AWSPersonalizeRuntime } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPersonalizeRuntime> = AWSPersonalizeRuntime[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPersonalizeRuntime> = AWSPersonalizeRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPersonalizeRuntime[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPersonalizeRuntime, Extras> = AWSPersonalizeRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPersonalizeRuntime> = AWSPersonalizeRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class PersonalizeRuntime {
  private constructor(private readonly client: AWSPersonalizeRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'personalize-runtime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  getPersonalizedRanking: (params: RawParamsFrom<'getPersonalizedRanking'>) => Promise<ReturnTypeFrom<'getPersonalizedRanking'>>  = async params => {
  // undefined
    return this.client.getPersonalizedRanking(params as any).promise();
  }

  getRecommendations: (params: RawParamsFrom<'getRecommendations'>) => Promise<ReturnTypeFrom<'getRecommendations'>>  = async params => {
  // undefined
    return this.client.getRecommendations(params as any).promise();
  }
  
  static fromClient(client: AWSPersonalizeRuntime): PersonalizeRuntime {
    return new PersonalizeRuntime(client) as any;
  }
  
  static client(options?: AWSPersonalizeRuntime.Types.ClientConfiguration): PersonalizeRuntime {
    return new PersonalizeRuntime(new AWSPersonalizeRuntime(options)) as any;
  }
}  
