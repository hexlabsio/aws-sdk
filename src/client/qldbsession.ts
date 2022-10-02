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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'session';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  sendCommand: FunctionTypeFrom<'sendCommand'>
}
 
export class QLDBSession implements ClientType {
  private constructor(private readonly client: AWSQLDBSession) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'session';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async sendCommand(...args: any): Promise<any> {
  // undefined
    return this.client.sendCommand(...args).promise()
  }
  
  static fromClient(client: AWSQLDBSession): ClientType {
    return new QLDBSession(client) as any;
  }
  
  static client(options?: AWSQLDBSession.Types.ClientConfiguration): ClientType {
    return new QLDBSession(new AWSQLDBSession(options)) as any;
  }
}  
