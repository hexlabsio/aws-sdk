import { Request, IoTSecureTunneling as AWSIoTSecureTunneling } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTSecureTunneling> = AWSIoTSecureTunneling[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTSecureTunneling> = AWSIoTSecureTunneling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTSecureTunneling[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTSecureTunneling, Extras> = AWSIoTSecureTunneling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTSecureTunneling> = AWSIoTSecureTunneling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTSecureTunneling {
  private constructor(private readonly client: AWSIoTSecureTunneling) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'tunneling' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listTunnels"] as const;
  
  closeTunnel: (params: RawParamsFrom<'closeTunnel'>) => Promise<ReturnTypeFrom<'closeTunnel'>>  = async params => {
  // undefined
    return this.client.closeTunnel(params as any).promise();
  }

  describeTunnel: (params: RawParamsFrom<'describeTunnel'>) => Promise<ReturnTypeFrom<'describeTunnel'>>  = async params => {
  // undefined
    return this.client.describeTunnel(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTunnels: (params: RawParamsFrom<'listTunnels'>) => Promise<ReturnTypeFrom<'listTunnels'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTunnels(params as any).promise();
  }

  openTunnel: (params: RawParamsFrom<'openTunnel'>) => Promise<ReturnTypeFrom<'openTunnel'>>  = async params => {
  // undefined
    return this.client.openTunnel(params as any).promise();
  }

  rotateTunnelAccessToken: (params: RawParamsFrom<'rotateTunnelAccessToken'>) => Promise<ReturnTypeFrom<'rotateTunnelAccessToken'>>  = async params => {
  // undefined
    return this.client.rotateTunnelAccessToken(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSIoTSecureTunneling): IoTSecureTunneling {
    return new IoTSecureTunneling(client) as any;
  }
  
  static client(options?: AWSIoTSecureTunneling.Types.ClientConfiguration): IoTSecureTunneling {
    return new IoTSecureTunneling(new AWSIoTSecureTunneling(options)) as any;
  }
}  
