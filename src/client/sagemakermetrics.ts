import { Request, SageMakerMetrics as AWSSageMakerMetrics } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSageMakerMetrics> = AWSSageMakerMetrics[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSageMakerMetrics> = AWSSageMakerMetrics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSageMakerMetrics[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSageMakerMetrics, Extras> = AWSSageMakerMetrics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSageMakerMetrics> = AWSSageMakerMetrics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SageMakerMetrics {
  private constructor(private readonly client: AWSSageMakerMetrics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'metrics' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  batchPutMetrics: (params: RawParamsFrom<'batchPutMetrics'>) => Promise<ReturnTypeFrom<'batchPutMetrics'>>  = async params => {
  // undefined
    return this.client.batchPutMetrics(params as any).promise();
  }
  
  static fromClient(client: AWSSageMakerMetrics): SageMakerMetrics {
    return new SageMakerMetrics(client) as any;
  }
  
  static client(options?: AWSSageMakerMetrics.Types.ClientConfiguration): SageMakerMetrics {
    return new SageMakerMetrics(new AWSSageMakerMetrics(options)) as any;
  }
}  
