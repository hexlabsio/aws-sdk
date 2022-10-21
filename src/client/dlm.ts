import { Request, DLM as AWSDLM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDLM> = AWSDLM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDLM> = AWSDLM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDLM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDLM, Extras> = AWSDLM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDLM> = AWSDLM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DLM {
  private constructor(private readonly client: AWSDLM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dlm' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = [] as const;
  
  createLifecyclePolicy: (params: RawParamsFrom<'createLifecyclePolicy'>) => Promise<ReturnTypeFrom<'createLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.createLifecyclePolicy(params as any).promise();
  }

  deleteLifecyclePolicy: (params: RawParamsFrom<'deleteLifecyclePolicy'>) => Promise<ReturnTypeFrom<'deleteLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.deleteLifecyclePolicy(params as any).promise();
  }

  getLifecyclePolicies: (params: RawParamsFrom<'getLifecyclePolicies'>) => Promise<ReturnTypeFrom<'getLifecyclePolicies'>>  = async params => {
  // undefined
    return this.client.getLifecyclePolicies(params as any).promise();
  }

  getLifecyclePolicy: (params: RawParamsFrom<'getLifecyclePolicy'>) => Promise<ReturnTypeFrom<'getLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.getLifecyclePolicy(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateLifecyclePolicy: (params: RawParamsFrom<'updateLifecyclePolicy'>) => Promise<ReturnTypeFrom<'updateLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.updateLifecyclePolicy(params as any).promise();
  }
  
  static fromClient(client: AWSDLM): DLM {
    return new DLM(client) as any;
  }
  
  static client(options?: AWSDLM.Types.ClientConfiguration): DLM {
    return new DLM(new AWSDLM(options)) as any;
  }
}  
