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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'tunneling';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listTunnels"];
    
  closeTunnel: FunctionTypeFrom<'closeTunnel'>;

  describeTunnel: FunctionTypeFrom<'describeTunnel'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTunnels: FunctionTypeFrom<'listTunnels'>;

  openTunnel: FunctionTypeFrom<'openTunnel'>;

  rotateTunnelAccessToken: FunctionTypeFrom<'rotateTunnelAccessToken'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class IoTSecureTunneling implements ClientType {
  private constructor(private readonly client: AWSIoTSecureTunneling) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'tunneling';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listTunnels"] as const;
  
  async closeTunnel(...args: any): Promise<any> {
  // undefined
    return this.client.closeTunnel(...args).promise()
  }

  async describeTunnel(...args: any): Promise<any> {
  // undefined
    return this.client.describeTunnel(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTunnels(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTunnels(...args).promise()
  }

  async openTunnel(...args: any): Promise<any> {
  // undefined
    return this.client.openTunnel(...args).promise()
  }

  async rotateTunnelAccessToken(...args: any): Promise<any> {
  // undefined
    return this.client.rotateTunnelAccessToken(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSIoTSecureTunneling): ClientType {
    return new IoTSecureTunneling(client) as any;
  }
  
  static client(options?: AWSIoTSecureTunneling.Types.ClientConfiguration): ClientType {
    return new IoTSecureTunneling(new AWSIoTSecureTunneling(options)) as any;
  }
}  
