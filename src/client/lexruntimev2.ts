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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'runtime-v2-lex';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  deleteSession: FunctionTypeFrom<'deleteSession'>;

  getSession: FunctionTypeFrom<'getSession'>;

  putSession: FunctionTypeFrom<'putSession'>;

  recognizeText: FunctionTypeFrom<'recognizeText'>;

  recognizeUtterance: FunctionTypeFrom<'recognizeUtterance'>
}
 
export class LexRuntimeV2 implements ClientType {
  private constructor(private readonly client: AWSLexRuntimeV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'runtime-v2-lex';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async deleteSession(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSession(...args).promise()
  }

  async getSession(...args: any): Promise<any> {
  // undefined
    return this.client.getSession(...args).promise()
  }

  async putSession(...args: any): Promise<any> {
  // undefined
    return this.client.putSession(...args).promise()
  }

  async recognizeText(...args: any): Promise<any> {
  // undefined
    return this.client.recognizeText(...args).promise()
  }

  async recognizeUtterance(...args: any): Promise<any> {
  // undefined
    return this.client.recognizeUtterance(...args).promise()
  }
  
  static fromClient(client: AWSLexRuntimeV2): ClientType {
    return new LexRuntimeV2(client) as any;
  }
  
  static client(options?: AWSLexRuntimeV2.Types.ClientConfiguration): ClientType {
    return new LexRuntimeV2(new AWSLexRuntimeV2(options)) as any;
  }
}  
