import { Request, WorkMailMessageFlow as AWSWorkMailMessageFlow } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWorkMailMessageFlow> = AWSWorkMailMessageFlow[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWorkMailMessageFlow> = AWSWorkMailMessageFlow[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWorkMailMessageFlow[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWorkMailMessageFlow, Extras> = AWSWorkMailMessageFlow[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'workmailmessageflow';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  getRawMessageContent: FunctionTypeFrom<'getRawMessageContent'>;

  putRawMessageContent: FunctionTypeFrom<'putRawMessageContent'>
}
 
export class WorkMailMessageFlow implements ClientType {
  private constructor(private readonly client: AWSWorkMailMessageFlow) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workmailmessageflow';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async getRawMessageContent(...args: any): Promise<any> {
  // undefined
    return this.client.getRawMessageContent(...args).promise()
  }

  async putRawMessageContent(...args: any): Promise<any> {
  // undefined
    return this.client.putRawMessageContent(...args).promise()
  }
  
  static fromClient(client: AWSWorkMailMessageFlow): ClientType {
    return new WorkMailMessageFlow(client) as any;
  }
  
  static client(options?: AWSWorkMailMessageFlow.Types.ClientConfiguration): ClientType {
    return new WorkMailMessageFlow(new AWSWorkMailMessageFlow(options)) as any;
  }
}  
