import { Request, LexRuntimeV2 as AWSLexRuntimeV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLexRuntimeV2> = AWSLexRuntimeV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLexRuntimeV2> = AWSLexRuntimeV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLexRuntimeV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLexRuntimeV2, Extras> = AWSLexRuntimeV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLexRuntimeV2> = AWSLexRuntimeV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LexRuntimeV2 {
  private constructor(private readonly client: AWSLexRuntimeV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'runtime-v2-lex' as const;
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

  putSession: (params: RawParamsFrom<'putSession'>) => Promise<ReturnTypeFrom<'putSession'>>  = async params => {
  // undefined
    return this.client.putSession(params as any).promise();
  }

  recognizeText: (params: RawParamsFrom<'recognizeText'>) => Promise<ReturnTypeFrom<'recognizeText'>>  = async params => {
  // undefined
    return this.client.recognizeText(params as any).promise();
  }

  recognizeUtterance: (params: RawParamsFrom<'recognizeUtterance'>) => Promise<ReturnTypeFrom<'recognizeUtterance'>>  = async params => {
  // undefined
    return this.client.recognizeUtterance(params as any).promise();
  }
  
  static fromClient(client: AWSLexRuntimeV2): LexRuntimeV2 {
    return new LexRuntimeV2(client) as any;
  }
  
  static client(options?: AWSLexRuntimeV2.Types.ClientConfiguration): LexRuntimeV2 {
    return new LexRuntimeV2(new AWSLexRuntimeV2(options)) as any;
  }
}  
