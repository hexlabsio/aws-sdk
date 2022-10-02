import { Request, SSOOIDC as AWSSSOOIDC } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSSOOIDC> = AWSSSOOIDC[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSSOOIDC> = AWSSSOOIDC[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSSOOIDC[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSSOOIDC, Extras> = AWSSSOOIDC[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'oidc';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  createToken: FunctionTypeFrom<'createToken'>;

  registerClient: FunctionTypeFrom<'registerClient'>;

  startDeviceAuthorization: FunctionTypeFrom<'startDeviceAuthorization'>
}
 
export class SSOOIDC implements ClientType {
  private constructor(private readonly client: AWSSSOOIDC) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'oidc';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async createToken(...args: any): Promise<any> {
  // undefined
    return this.client.createToken(...args).promise()
  }

  async registerClient(...args: any): Promise<any> {
  // undefined
    return this.client.registerClient(...args).promise()
  }

  async startDeviceAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.startDeviceAuthorization(...args).promise()
  }
  
  static fromClient(client: AWSSSOOIDC): ClientType {
    return new SSOOIDC(client) as any;
  }
  
  static client(options?: AWSSSOOIDC.Types.ClientConfiguration): ClientType {
    return new SSOOIDC(new AWSSSOOIDC(options)) as any;
  }
}  
