import { Request, STS as AWSSTS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSTS> = AWSSTS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSTS> = AWSSTS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSTS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSTS, Extras> = AWSSTS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sts';
    global: true;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly [];
    
  assumeRole: FunctionTypeFrom<'assumeRole'>;

  decodeAuthorizationMessage: FunctionTypeFrom<'decodeAuthorizationMessage'>;

  getAccessKeyInfo: FunctionTypeFrom<'getAccessKeyInfo'>;

  getCallerIdentity: FunctionTypeFrom<'getCallerIdentity'>;

  getFederationToken: FunctionTypeFrom<'getFederationToken'>;

  getSessionToken: FunctionTypeFrom<'getSessionToken'>
}
 
export class STS implements ClientType {
  private constructor(private readonly client: AWSSTS) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'sts';
  public readonly global = true;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = [] as const;
  
  async assumeRole(...args: any): Promise<any> {
  // undefined
    return this.client.assumeRole(...args).promise()
  }

  async decodeAuthorizationMessage(...args: any): Promise<any> {
  // undefined
    return this.client.decodeAuthorizationMessage(...args).promise()
  }

  async getAccessKeyInfo(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessKeyInfo(...args).promise()
  }

  async getCallerIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.getCallerIdentity(...args).promise()
  }

  async getFederationToken(...args: any): Promise<any> {
  // undefined
    return this.client.getFederationToken(...args).promise()
  }

  async getSessionToken(...args: any): Promise<any> {
  // undefined
    return this.client.getSessionToken(...args).promise()
  }
  
  static fromClient(client: AWSSTS): ClientType {
    return new STS(client) as any;
  }
  
  static client(options?: AWSSTS.Types.ClientConfiguration): ClientType {
    return new STS(new AWSSTS(options)) as any;
  }
}  
