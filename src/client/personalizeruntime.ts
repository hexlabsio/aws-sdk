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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'personalize-runtime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  getPersonalizedRanking: FunctionTypeFrom<'getPersonalizedRanking'>;

  getRecommendations: FunctionTypeFrom<'getRecommendations'>
}
 
export class PersonalizeRuntime implements ClientType {
  private constructor(private readonly client: AWSPersonalizeRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'personalize-runtime';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async getPersonalizedRanking(...args: any): Promise<any> {
  // undefined
    return this.client.getPersonalizedRanking(...args).promise()
  }

  async getRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.getRecommendations(...args).promise()
  }
  
  static fromClient(client: AWSPersonalizeRuntime): ClientType {
    return new PersonalizeRuntime(client) as any;
  }
  
  static client(options?: AWSPersonalizeRuntime.Types.ClientConfiguration): ClientType {
    return new PersonalizeRuntime(new AWSPersonalizeRuntime(options)) as any;
  }
}  
