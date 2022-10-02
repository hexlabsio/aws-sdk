import { Request, Finspace as AWSFinspace } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSFinspace> = AWSFinspace[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSFinspace> = AWSFinspace[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSFinspace[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSFinspace, Extras> = AWSFinspace[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'finspace';
    global: false;
    category: 'Cloud Financial Management'
    topLevelCalls: readonly [];
    
  createEnvironment: FunctionTypeFrom<'createEnvironment'>;

  deleteEnvironment: FunctionTypeFrom<'deleteEnvironment'>;

  getEnvironment: FunctionTypeFrom<'getEnvironment'>;

  listEnvironments: FunctionTypeFrom<'listEnvironments'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateEnvironment: FunctionTypeFrom<'updateEnvironment'>
}
 
export class Finspace implements ClientType {
  private constructor(private readonly client: AWSFinspace) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'finspace';
  public readonly global = false;
  public readonly category = 'Cloud Financial Management';
  public readonly topLevelCalls = [] as const;
  
  async createEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironment(...args).promise()
  }

  async deleteEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironment(...args).promise()
  }

  async getEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironment(...args).promise()
  }

  async listEnvironments(...args: any): Promise<any> {
  // undefined
    return this.client.listEnvironments(...args).promise()
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

  async updateEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironment(...args).promise()
  }
  
  static fromClient(client: AWSFinspace): ClientType {
    return new Finspace(client) as any;
  }
  
  static client(options?: AWSFinspace.Types.ClientConfiguration): ClientType {
    return new Finspace(new AWSFinspace(options)) as any;
  }
}  
