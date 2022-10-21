import { Request, SageMakerFeatureStoreRuntime as AWSSageMakerFeatureStoreRuntime } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSageMakerFeatureStoreRuntime> = AWSSageMakerFeatureStoreRuntime[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSageMakerFeatureStoreRuntime> = AWSSageMakerFeatureStoreRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSageMakerFeatureStoreRuntime[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSageMakerFeatureStoreRuntime, Extras> = AWSSageMakerFeatureStoreRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSageMakerFeatureStoreRuntime> = AWSSageMakerFeatureStoreRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SageMakerFeatureStoreRuntime {
  private constructor(private readonly client: AWSSageMakerFeatureStoreRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'featurestore-runtime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  batchGetRecord: (params: RawParamsFrom<'batchGetRecord'>) => Promise<ReturnTypeFrom<'batchGetRecord'>>  = async params => {
  // undefined
    return this.client.batchGetRecord(params as any).promise();
  }

  deleteRecord: (params: RawParamsFrom<'deleteRecord'>) => Promise<ReturnTypeFrom<'deleteRecord'>>  = async params => {
  // undefined
    return this.client.deleteRecord(params as any).promise();
  }

  getRecord: (params: RawParamsFrom<'getRecord'>) => Promise<ReturnTypeFrom<'getRecord'>>  = async params => {
  // undefined
    return this.client.getRecord(params as any).promise();
  }

  putRecord: (params: RawParamsFrom<'putRecord'>) => Promise<ReturnTypeFrom<'putRecord'>>  = async params => {
  // undefined
    return this.client.putRecord(params as any).promise();
  }
  
  static fromClient(client: AWSSageMakerFeatureStoreRuntime): SageMakerFeatureStoreRuntime {
    return new SageMakerFeatureStoreRuntime(client) as any;
  }
  
  static client(options?: AWSSageMakerFeatureStoreRuntime.Types.ClientConfiguration): SageMakerFeatureStoreRuntime {
    return new SageMakerFeatureStoreRuntime(new AWSSageMakerFeatureStoreRuntime(options)) as any;
  }
}  
