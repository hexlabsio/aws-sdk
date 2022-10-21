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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWorkMailMessageFlow> = AWSWorkMailMessageFlow[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WorkMailMessageFlow {
  private constructor(private readonly client: AWSWorkMailMessageFlow) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workmailmessageflow' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  getRawMessageContent: (params: RawParamsFrom<'getRawMessageContent'>) => Promise<ReturnTypeFrom<'getRawMessageContent'>>  = async params => {
  // undefined
    return this.client.getRawMessageContent(params as any).promise();
  }

  putRawMessageContent: (params: RawParamsFrom<'putRawMessageContent'>) => Promise<ReturnTypeFrom<'putRawMessageContent'>>  = async params => {
  // undefined
    return this.client.putRawMessageContent(params as any).promise();
  }
  
  static fromClient(client: AWSWorkMailMessageFlow): WorkMailMessageFlow {
    return new WorkMailMessageFlow(client) as any;
  }
  
  static client(options?: AWSWorkMailMessageFlow.Types.ClientConfiguration): WorkMailMessageFlow {
    return new WorkMailMessageFlow(new AWSWorkMailMessageFlow(options)) as any;
  }
}  
