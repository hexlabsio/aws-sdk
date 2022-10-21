import { Request, QLDBSession as AWSQLDBSession } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSQLDBSession> = AWSQLDBSession[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSQLDBSession> = AWSQLDBSession[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSQLDBSession[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSQLDBSession, Extras> = AWSQLDBSession[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSQLDBSession> = AWSQLDBSession[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class QLDBSession {
  private constructor(private readonly client: AWSQLDBSession) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'session' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  sendCommand: (params: RawParamsFrom<'sendCommand'>) => Promise<ReturnTypeFrom<'sendCommand'>>  = async params => {
  // undefined
    return this.client.sendCommand(params as any).promise();
  }
  
  static fromClient(client: AWSQLDBSession): QLDBSession {
    return new QLDBSession(client) as any;
  }
  
  static client(options?: AWSQLDBSession.Types.ClientConfiguration): QLDBSession {
    return new QLDBSession(new AWSQLDBSession(options)) as any;
  }
}  
