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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSSOOIDC> = AWSSSOOIDC[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SSOOIDC {
  private constructor(private readonly client: AWSSSOOIDC) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'oidc' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  createToken: (params: RawParamsFrom<'createToken'>) => Promise<ReturnTypeFrom<'createToken'>>  = async params => {
  // undefined
    return this.client.createToken(params as any).promise();
  }

  registerClient: (params: RawParamsFrom<'registerClient'>) => Promise<ReturnTypeFrom<'registerClient'>>  = async params => {
  // undefined
    return this.client.registerClient(params as any).promise();
  }

  startDeviceAuthorization: (params: RawParamsFrom<'startDeviceAuthorization'>) => Promise<ReturnTypeFrom<'startDeviceAuthorization'>>  = async params => {
  // undefined
    return this.client.startDeviceAuthorization(params as any).promise();
  }
  
  static fromClient(client: AWSSSOOIDC): SSOOIDC {
    return new SSOOIDC(client) as any;
  }
  
  static client(options?: AWSSSOOIDC.Types.ClientConfiguration): SSOOIDC {
    return new SSOOIDC(new AWSSSOOIDC(options)) as any;
  }
}  
