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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSageMakerRuntime> = AWSSageMakerRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SageMakerRuntime {
  private constructor(private readonly client: AWSSageMakerRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'runtime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  invokeEndpoint: (params: RawParamsFrom<'invokeEndpoint'>) => Promise<ReturnTypeFrom<'invokeEndpoint'>>  = async params => {
  // undefined
    return this.client.invokeEndpoint(params as any).promise();
  }

  invokeEndpointAsync: (params: RawParamsFrom<'invokeEndpointAsync'>) => Promise<ReturnTypeFrom<'invokeEndpointAsync'>>  = async params => {
  // undefined
    return this.client.invokeEndpointAsync(params as any).promise();
  }
  
  static fromClient(client: AWSSageMakerRuntime): SageMakerRuntime {
    return new SageMakerRuntime(client) as any;
  }
  
  static client(options?: AWSSageMakerRuntime.Types.ClientConfiguration): SageMakerRuntime {
    return new SageMakerRuntime(new AWSSageMakerRuntime(options)) as any;
  }
}  
