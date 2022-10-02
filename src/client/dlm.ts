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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'dlm';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly [];
    
  createLifecyclePolicy: FunctionTypeFrom<'createLifecyclePolicy'>;

  deleteLifecyclePolicy: FunctionTypeFrom<'deleteLifecyclePolicy'>;

  getLifecyclePolicies: FunctionTypeFrom<'getLifecyclePolicies'>;

  getLifecyclePolicy: FunctionTypeFrom<'getLifecyclePolicy'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateLifecyclePolicy: FunctionTypeFrom<'updateLifecyclePolicy'>
}
 
export class DLM implements ClientType {
  private constructor(private readonly client: AWSDLM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dlm';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = [] as const;
  
  async createLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createLifecyclePolicy(...args).promise()
  }

  async deleteLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLifecyclePolicy(...args).promise()
  }

  async getLifecyclePolicies(...args: any): Promise<any> {
  // undefined
    return this.client.getLifecyclePolicies(...args).promise()
  }

  async getLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getLifecyclePolicy(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateLifecyclePolicy(...args).promise()
  }
  
  static fromClient(client: AWSDLM): ClientType {
    return new DLM(client) as any;
  }
  
  static client(options?: AWSDLM.Types.ClientConfiguration): ClientType {
    return new DLM(new AWSDLM(options)) as any;
  }
}  
