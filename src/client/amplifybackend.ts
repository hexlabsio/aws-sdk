import { Request, AmplifyBackend as AWSAmplifyBackend } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAmplifyBackend> = AWSAmplifyBackend[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAmplifyBackend> = AWSAmplifyBackend[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAmplifyBackend[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAmplifyBackend, Extras> = AWSAmplifyBackend[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'amplifybackend';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  cloneBackend: FunctionTypeFrom<'cloneBackend'>;

  createBackend: FunctionTypeFrom<'createBackend'>;

  createBackendAPI: FunctionTypeFrom<'createBackendAPI'>;

  createBackendAuth: FunctionTypeFrom<'createBackendAuth'>;

  createBackendConfig: FunctionTypeFrom<'createBackendConfig'>;

  createBackendStorage: FunctionTypeFrom<'createBackendStorage'>;

  createToken: FunctionTypeFrom<'createToken'>;

  deleteBackend: FunctionTypeFrom<'deleteBackend'>;

  deleteBackendAPI: FunctionTypeFrom<'deleteBackendAPI'>;

  deleteBackendAuth: FunctionTypeFrom<'deleteBackendAuth'>;

  deleteBackendStorage: FunctionTypeFrom<'deleteBackendStorage'>;

  deleteToken: FunctionTypeFrom<'deleteToken'>;

  generateBackendAPIModels: FunctionTypeFrom<'generateBackendAPIModels'>;

  getBackend: FunctionTypeFrom<'getBackend'>;

  getBackendAPI: FunctionTypeFrom<'getBackendAPI'>;

  getBackendAPIModels: FunctionTypeFrom<'getBackendAPIModels'>;

  getBackendAuth: FunctionTypeFrom<'getBackendAuth'>;

  getBackendJob: FunctionTypeFrom<'getBackendJob'>;

  getBackendStorage: FunctionTypeFrom<'getBackendStorage'>;

  getToken: FunctionTypeFrom<'getToken'>;

  importBackendAuth: FunctionTypeFrom<'importBackendAuth'>;

  importBackendStorage: FunctionTypeFrom<'importBackendStorage'>;

  listBackendJobs(params: { [K in keyof Omit<ParamsFrom<'listBackendJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBackendJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackendJobs'>]-?: ReturnTypeFrom<'listBackendJobs'>[K]}['Jobs'] }>
  ;

  listS3Buckets: FunctionTypeFrom<'listS3Buckets'>;

  removeAllBackends: FunctionTypeFrom<'removeAllBackends'>;

  removeBackendConfig: FunctionTypeFrom<'removeBackendConfig'>;

  updateBackendAPI: FunctionTypeFrom<'updateBackendAPI'>;

  updateBackendAuth: FunctionTypeFrom<'updateBackendAuth'>;

  updateBackendConfig: FunctionTypeFrom<'updateBackendConfig'>;

  updateBackendJob: FunctionTypeFrom<'updateBackendJob'>;

  updateBackendStorage: FunctionTypeFrom<'updateBackendStorage'>
}
 
export class AmplifyBackend implements ClientType {
  private constructor(private readonly client: AWSAmplifyBackend) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'amplifybackend';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async cloneBackend(...args: any): Promise<any> {
  // undefined
    return this.client.cloneBackend(...args).promise()
  }

  async createBackend(...args: any): Promise<any> {
  // undefined
    return this.client.createBackend(...args).promise()
  }

  async createBackendAPI(...args: any): Promise<any> {
  // undefined
    return this.client.createBackendAPI(...args).promise()
  }

  async createBackendAuth(...args: any): Promise<any> {
  // undefined
    return this.client.createBackendAuth(...args).promise()
  }

  async createBackendConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createBackendConfig(...args).promise()
  }

  async createBackendStorage(...args: any): Promise<any> {
  // undefined
    return this.client.createBackendStorage(...args).promise()
  }

  async createToken(...args: any): Promise<any> {
  // undefined
    return this.client.createToken(...args).promise()
  }

  async deleteBackend(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackend(...args).promise()
  }

  async deleteBackendAPI(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackendAPI(...args).promise()
  }

  async deleteBackendAuth(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackendAuth(...args).promise()
  }

  async deleteBackendStorage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackendStorage(...args).promise()
  }

  async deleteToken(...args: any): Promise<any> {
  // undefined
    return this.client.deleteToken(...args).promise()
  }

  async generateBackendAPIModels(...args: any): Promise<any> {
  // undefined
    return this.client.generateBackendAPIModels(...args).promise()
  }

  async getBackend(...args: any): Promise<any> {
  // undefined
    return this.client.getBackend(...args).promise()
  }

  async getBackendAPI(...args: any): Promise<any> {
  // undefined
    return this.client.getBackendAPI(...args).promise()
  }

  async getBackendAPIModels(...args: any): Promise<any> {
  // undefined
    return this.client.getBackendAPIModels(...args).promise()
  }

  async getBackendAuth(...args: any): Promise<any> {
  // undefined
    return this.client.getBackendAuth(...args).promise()
  }

  async getBackendJob(...args: any): Promise<any> {
  // undefined
    return this.client.getBackendJob(...args).promise()
  }

  async getBackendStorage(...args: any): Promise<any> {
  // undefined
    return this.client.getBackendStorage(...args).promise()
  }

  async getToken(...args: any): Promise<any> {
  // undefined
    return this.client.getToken(...args).promise()
  }

  async importBackendAuth(...args: any): Promise<any> {
  // undefined
    return this.client.importBackendAuth(...args).promise()
  }

  async importBackendStorage(...args: any): Promise<any> {
  // undefined
    return this.client.importBackendStorage(...args).promise()
  }

  async listBackendJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackendJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listS3Buckets(...args: any): Promise<any> {
  // undefined
    return this.client.listS3Buckets(...args).promise()
  }

  async removeAllBackends(...args: any): Promise<any> {
  // undefined
    return this.client.removeAllBackends(...args).promise()
  }

  async removeBackendConfig(...args: any): Promise<any> {
  // undefined
    return this.client.removeBackendConfig(...args).promise()
  }

  async updateBackendAPI(...args: any): Promise<any> {
  // undefined
    return this.client.updateBackendAPI(...args).promise()
  }

  async updateBackendAuth(...args: any): Promise<any> {
  // undefined
    return this.client.updateBackendAuth(...args).promise()
  }

  async updateBackendConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateBackendConfig(...args).promise()
  }

  async updateBackendJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateBackendJob(...args).promise()
  }

  async updateBackendStorage(...args: any): Promise<any> {
  // undefined
    return this.client.updateBackendStorage(...args).promise()
  }
  
  static fromClient(client: AWSAmplifyBackend): ClientType {
    return new AmplifyBackend(client) as any;
  }
  
  static client(options?: AWSAmplifyBackend.Types.ClientConfiguration): ClientType {
    return new AmplifyBackend(new AWSAmplifyBackend(options)) as any;
  }
}  
