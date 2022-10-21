import { Request, LexRuntime as AWSLexRuntime } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLexRuntime> = AWSLexRuntime[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLexRuntime> = AWSLexRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLexRuntime[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLexRuntime, Extras> = AWSLexRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLexRuntime> = AWSLexRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LexRuntime {
  private constructor(private readonly client: AWSLexRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'runtime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  deleteSession: (params: RawParamsFrom<'deleteSession'>) => Promise<ReturnTypeFrom<'deleteSession'>>  = async params => {
  // undefined
    return this.client.deleteSession(params as any).promise();
  }

  getSession: (params: RawParamsFrom<'getSession'>) => Promise<ReturnTypeFrom<'getSession'>>  = async params => {
  // undefined
    return this.client.getSession(params as any).promise();
  }

  postContent: (params: RawParamsFrom<'postContent'>) => Promise<ReturnTypeFrom<'postContent'>>  = async params => {
  // undefined
    return this.client.postContent(params as any).promise();
  }

  postText: (params: RawParamsFrom<'postText'>) => Promise<ReturnTypeFrom<'postText'>>  = async params => {
  // undefined
    return this.client.postText(params as any).promise();
  }

  putSession: (params: RawParamsFrom<'putSession'>) => Promise<ReturnTypeFrom<'putSession'>>  = async params => {
  // undefined
    return this.client.putSession(params as any).promise();
  }
  
  static fromClient(client: AWSLexRuntime): LexRuntime {
    return new LexRuntime(client) as any;
  }
  
  static client(options?: AWSLexRuntime.Types.ClientConfiguration): LexRuntime {
    return new LexRuntime(new AWSLexRuntime(options)) as any;
  }
}  
