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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'featurestore-runtime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  batchGetRecord: FunctionTypeFrom<'batchGetRecord'>;

  deleteRecord: FunctionTypeFrom<'deleteRecord'>;

  getRecord: FunctionTypeFrom<'getRecord'>;

  putRecord: FunctionTypeFrom<'putRecord'>
}
 
export class SageMakerFeatureStoreRuntime implements ClientType {
  private constructor(private readonly client: AWSSageMakerFeatureStoreRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'featurestore-runtime';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async batchGetRecord(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetRecord(...args).promise()
  }

  async deleteRecord(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecord(...args).promise()
  }

  async getRecord(...args: any): Promise<any> {
  // undefined
    return this.client.getRecord(...args).promise()
  }

  async putRecord(...args: any): Promise<any> {
  // undefined
    return this.client.putRecord(...args).promise()
  }
  
  static fromClient(client: AWSSageMakerFeatureStoreRuntime): ClientType {
    return new SageMakerFeatureStoreRuntime(client) as any;
  }
  
  static client(options?: AWSSageMakerFeatureStoreRuntime.Types.ClientConfiguration): ClientType {
    return new SageMakerFeatureStoreRuntime(new AWSSageMakerFeatureStoreRuntime(options)) as any;
  }
}  
