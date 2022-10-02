import { Request, SagemakerEdge as AWSSagemakerEdge } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSagemakerEdge> = AWSSagemakerEdge[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSagemakerEdge> = AWSSagemakerEdge[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSagemakerEdge[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSagemakerEdge, Extras> = AWSSagemakerEdge[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'edge';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  getDeployments: FunctionTypeFrom<'getDeployments'>;

  getDeviceRegistration: FunctionTypeFrom<'getDeviceRegistration'>;

  sendHeartbeat: FunctionTypeFrom<'sendHeartbeat'>
}
 
export class SagemakerEdge implements ClientType {
  private constructor(private readonly client: AWSSagemakerEdge) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'edge';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async getDeployments(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployments(...args).promise()
  }

  async getDeviceRegistration(...args: any): Promise<any> {
  // undefined
    return this.client.getDeviceRegistration(...args).promise()
  }

  async sendHeartbeat(...args: any): Promise<any> {
  // undefined
    return this.client.sendHeartbeat(...args).promise()
  }
  
  static fromClient(client: AWSSagemakerEdge): ClientType {
    return new SagemakerEdge(client) as any;
  }
  
  static client(options?: AWSSagemakerEdge.Types.ClientConfiguration): ClientType {
    return new SagemakerEdge(new AWSSagemakerEdge(options)) as any;
  }
}  
