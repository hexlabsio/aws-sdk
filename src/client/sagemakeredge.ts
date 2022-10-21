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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSagemakerEdge> = AWSSagemakerEdge[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SagemakerEdge {
  private constructor(private readonly client: AWSSagemakerEdge) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'edge' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  getDeployments: (params: RawParamsFrom<'getDeployments'>) => Promise<ReturnTypeFrom<'getDeployments'>>  = async params => {
  // undefined
    return this.client.getDeployments(params as any).promise();
  }

  getDeviceRegistration: (params: RawParamsFrom<'getDeviceRegistration'>) => Promise<ReturnTypeFrom<'getDeviceRegistration'>>  = async params => {
  // undefined
    return this.client.getDeviceRegistration(params as any).promise();
  }

  sendHeartbeat: (params: RawParamsFrom<'sendHeartbeat'>) => Promise<ReturnTypeFrom<'sendHeartbeat'>>  = async params => {
  // undefined
    return this.client.sendHeartbeat(params as any).promise();
  }
  
  static fromClient(client: AWSSagemakerEdge): SagemakerEdge {
    return new SagemakerEdge(client) as any;
  }
  
  static client(options?: AWSSagemakerEdge.Types.ClientConfiguration): SagemakerEdge {
    return new SagemakerEdge(new AWSSagemakerEdge(options)) as any;
  }
}  
