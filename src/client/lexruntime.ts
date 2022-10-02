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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'runtime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  deleteSession: FunctionTypeFrom<'deleteSession'>;

  getSession: FunctionTypeFrom<'getSession'>;

  postContent: FunctionTypeFrom<'postContent'>;

  postText: FunctionTypeFrom<'postText'>;

  putSession: FunctionTypeFrom<'putSession'>
}
 
export class LexRuntime implements ClientType {
  private constructor(private readonly client: AWSLexRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'runtime';
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

  async postContent(...args: any): Promise<any> {
  // undefined
    return this.client.postContent(...args).promise()
  }

  async postText(...args: any): Promise<any> {
  // undefined
    return this.client.postText(...args).promise()
  }

  async putSession(...args: any): Promise<any> {
  // undefined
    return this.client.putSession(...args).promise()
  }
  
  static fromClient(client: AWSLexRuntime): ClientType {
    return new LexRuntime(client) as any;
  }
  
  static client(options?: AWSLexRuntime.Types.ClientConfiguration): ClientType {
    return new LexRuntime(new AWSLexRuntime(options)) as any;
  }
}  
