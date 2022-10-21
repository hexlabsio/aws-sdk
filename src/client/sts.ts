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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSTS> = AWSSTS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class STS {
  private constructor(private readonly client: AWSSTS) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'sts' as const;
  public readonly global = true as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = [] as const;
  
  assumeRole: (params: RawParamsFrom<'assumeRole'>) => Promise<ReturnTypeFrom<'assumeRole'>>  = async params => {
  // undefined
    return this.client.assumeRole(params as any).promise();
  }

  decodeAuthorizationMessage: (params: RawParamsFrom<'decodeAuthorizationMessage'>) => Promise<ReturnTypeFrom<'decodeAuthorizationMessage'>>  = async params => {
  // undefined
    return this.client.decodeAuthorizationMessage(params as any).promise();
  }

  getAccessKeyInfo: (params: RawParamsFrom<'getAccessKeyInfo'>) => Promise<ReturnTypeFrom<'getAccessKeyInfo'>>  = async params => {
  // undefined
    return this.client.getAccessKeyInfo(params as any).promise();
  }

  getCallerIdentity: (params: RawParamsFrom<'getCallerIdentity'>) => Promise<ReturnTypeFrom<'getCallerIdentity'>>  = async params => {
  // undefined
    return this.client.getCallerIdentity(params as any).promise();
  }

  getFederationToken: (params: RawParamsFrom<'getFederationToken'>) => Promise<ReturnTypeFrom<'getFederationToken'>>  = async params => {
  // undefined
    return this.client.getFederationToken(params as any).promise();
  }

  getSessionToken: (params: RawParamsFrom<'getSessionToken'>) => Promise<ReturnTypeFrom<'getSessionToken'>>  = async params => {
  // undefined
    return this.client.getSessionToken(params as any).promise();
  }
  
  static fromClient(client: AWSSTS): STS {
    return new STS(client) as any;
  }
  
  static client(options?: AWSSTS.Types.ClientConfiguration): STS {
    return new STS(new AWSSTS(options)) as any;
  }
}  
