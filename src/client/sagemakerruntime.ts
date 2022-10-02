import { Request, SageMakerRuntime as AWSSageMakerRuntime } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSageMakerRuntime> = AWSSageMakerRuntime[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSageMakerRuntime> = AWSSageMakerRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSageMakerRuntime[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSageMakerRuntime, Extras> = AWSSageMakerRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'runtime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  invokeEndpoint: FunctionTypeFrom<'invokeEndpoint'>;

  invokeEndpointAsync: FunctionTypeFrom<'invokeEndpointAsync'>
}
 
export class SageMakerRuntime implements ClientType {
  private constructor(private readonly client: AWSSageMakerRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'runtime';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async invokeEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.invokeEndpoint(...args).promise()
  }

  async invokeEndpointAsync(...args: any): Promise<any> {
  // undefined
    return this.client.invokeEndpointAsync(...args).promise()
  }
  
  static fromClient(client: AWSSageMakerRuntime): ClientType {
    return new SageMakerRuntime(client) as any;
  }
  
  static client(options?: AWSSageMakerRuntime.Types.ClientConfiguration): ClientType {
    return new SageMakerRuntime(new AWSSageMakerRuntime(options)) as any;
  }
}  
