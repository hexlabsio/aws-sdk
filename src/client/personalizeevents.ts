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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPersonalizeEvents> = AWSPersonalizeEvents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class PersonalizeEvents {
  private constructor(private readonly client: AWSPersonalizeEvents) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'personalize-events' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  putEvents: (params: RawParamsFrom<'putEvents'>) => Promise<ReturnTypeFrom<'putEvents'>>  = async params => {
  // undefined
    return this.client.putEvents(params as any).promise();
  }

  putItems: (params: RawParamsFrom<'putItems'>) => Promise<ReturnTypeFrom<'putItems'>>  = async params => {
  // undefined
    return this.client.putItems(params as any).promise();
  }

  putUsers: (params: RawParamsFrom<'putUsers'>) => Promise<ReturnTypeFrom<'putUsers'>>  = async params => {
  // undefined
    return this.client.putUsers(params as any).promise();
  }
  
  static fromClient(client: AWSPersonalizeEvents): PersonalizeEvents {
    return new PersonalizeEvents(client) as any;
  }
  
  static client(options?: AWSPersonalizeEvents.Types.ClientConfiguration): PersonalizeEvents {
    return new PersonalizeEvents(new AWSPersonalizeEvents(options)) as any;
  }
}  
