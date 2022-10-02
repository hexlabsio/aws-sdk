import { Request, PersonalizeEvents as AWSPersonalizeEvents } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPersonalizeEvents> = AWSPersonalizeEvents[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPersonalizeEvents> = AWSPersonalizeEvents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPersonalizeEvents[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPersonalizeEvents, Extras> = AWSPersonalizeEvents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'personalize-events';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  putEvents: FunctionTypeFrom<'putEvents'>;

  putItems: FunctionTypeFrom<'putItems'>;

  putUsers: FunctionTypeFrom<'putUsers'>
}
 
export class PersonalizeEvents implements ClientType {
  private constructor(private readonly client: AWSPersonalizeEvents) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'personalize-events';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async putEvents(...args: any): Promise<any> {
  // undefined
    return this.client.putEvents(...args).promise()
  }

  async putItems(...args: any): Promise<any> {
  // undefined
    return this.client.putItems(...args).promise()
  }

  async putUsers(...args: any): Promise<any> {
  // undefined
    return this.client.putUsers(...args).promise()
  }
  
  static fromClient(client: AWSPersonalizeEvents): ClientType {
    return new PersonalizeEvents(client) as any;
  }
  
  static client(options?: AWSPersonalizeEvents.Types.ClientConfiguration): ClientType {
    return new PersonalizeEvents(new AWSPersonalizeEvents(options)) as any;
  }
}  
