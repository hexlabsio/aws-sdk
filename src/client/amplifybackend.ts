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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAmplifyBackend> = AWSAmplifyBackend[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AmplifyBackend {
  private constructor(private readonly client: AWSAmplifyBackend) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'amplifybackend' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  cloneBackend: (params: RawParamsFrom<'cloneBackend'>) => Promise<ReturnTypeFrom<'cloneBackend'>>  = async params => {
  // undefined
    return this.client.cloneBackend(params as any).promise();
  }

  createBackend: (params: RawParamsFrom<'createBackend'>) => Promise<ReturnTypeFrom<'createBackend'>>  = async params => {
  // undefined
    return this.client.createBackend(params as any).promise();
  }

  createBackendAPI: (params: RawParamsFrom<'createBackendAPI'>) => Promise<ReturnTypeFrom<'createBackendAPI'>>  = async params => {
  // undefined
    return this.client.createBackendAPI(params as any).promise();
  }

  createBackendAuth: (params: RawParamsFrom<'createBackendAuth'>) => Promise<ReturnTypeFrom<'createBackendAuth'>>  = async params => {
  // undefined
    return this.client.createBackendAuth(params as any).promise();
  }

  createBackendConfig: (params: RawParamsFrom<'createBackendConfig'>) => Promise<ReturnTypeFrom<'createBackendConfig'>>  = async params => {
  // undefined
    return this.client.createBackendConfig(params as any).promise();
  }

  createBackendStorage: (params: RawParamsFrom<'createBackendStorage'>) => Promise<ReturnTypeFrom<'createBackendStorage'>>  = async params => {
  // undefined
    return this.client.createBackendStorage(params as any).promise();
  }

  createToken: (params: RawParamsFrom<'createToken'>) => Promise<ReturnTypeFrom<'createToken'>>  = async params => {
  // undefined
    return this.client.createToken(params as any).promise();
  }

  deleteBackend: (params: RawParamsFrom<'deleteBackend'>) => Promise<ReturnTypeFrom<'deleteBackend'>>  = async params => {
  // undefined
    return this.client.deleteBackend(params as any).promise();
  }

  deleteBackendAPI: (params: RawParamsFrom<'deleteBackendAPI'>) => Promise<ReturnTypeFrom<'deleteBackendAPI'>>  = async params => {
  // undefined
    return this.client.deleteBackendAPI(params as any).promise();
  }

  deleteBackendAuth: (params: RawParamsFrom<'deleteBackendAuth'>) => Promise<ReturnTypeFrom<'deleteBackendAuth'>>  = async params => {
  // undefined
    return this.client.deleteBackendAuth(params as any).promise();
  }

  deleteBackendStorage: (params: RawParamsFrom<'deleteBackendStorage'>) => Promise<ReturnTypeFrom<'deleteBackendStorage'>>  = async params => {
  // undefined
    return this.client.deleteBackendStorage(params as any).promise();
  }

  deleteToken: (params: RawParamsFrom<'deleteToken'>) => Promise<ReturnTypeFrom<'deleteToken'>>  = async params => {
  // undefined
    return this.client.deleteToken(params as any).promise();
  }

  generateBackendAPIModels: (params: RawParamsFrom<'generateBackendAPIModels'>) => Promise<ReturnTypeFrom<'generateBackendAPIModels'>>  = async params => {
  // undefined
    return this.client.generateBackendAPIModels(params as any).promise();
  }

  getBackend: (params: RawParamsFrom<'getBackend'>) => Promise<ReturnTypeFrom<'getBackend'>>  = async params => {
  // undefined
    return this.client.getBackend(params as any).promise();
  }

  getBackendAPI: (params: RawParamsFrom<'getBackendAPI'>) => Promise<ReturnTypeFrom<'getBackendAPI'>>  = async params => {
  // undefined
    return this.client.getBackendAPI(params as any).promise();
  }

  getBackendAPIModels: (params: RawParamsFrom<'getBackendAPIModels'>) => Promise<ReturnTypeFrom<'getBackendAPIModels'>>  = async params => {
  // undefined
    return this.client.getBackendAPIModels(params as any).promise();
  }

  getBackendAuth: (params: RawParamsFrom<'getBackendAuth'>) => Promise<ReturnTypeFrom<'getBackendAuth'>>  = async params => {
  // undefined
    return this.client.getBackendAuth(params as any).promise();
  }

  getBackendJob: (params: RawParamsFrom<'getBackendJob'>) => Promise<ReturnTypeFrom<'getBackendJob'>>  = async params => {
  // undefined
    return this.client.getBackendJob(params as any).promise();
  }

  getBackendStorage: (params: RawParamsFrom<'getBackendStorage'>) => Promise<ReturnTypeFrom<'getBackendStorage'>>  = async params => {
  // undefined
    return this.client.getBackendStorage(params as any).promise();
  }

  getToken: (params: RawParamsFrom<'getToken'>) => Promise<ReturnTypeFrom<'getToken'>>  = async params => {
  // undefined
    return this.client.getToken(params as any).promise();
  }

  importBackendAuth: (params: RawParamsFrom<'importBackendAuth'>) => Promise<ReturnTypeFrom<'importBackendAuth'>>  = async params => {
  // undefined
    return this.client.importBackendAuth(params as any).promise();
  }

  importBackendStorage: (params: RawParamsFrom<'importBackendStorage'>) => Promise<ReturnTypeFrom<'importBackendStorage'>>  = async params => {
  // undefined
    return this.client.importBackendStorage(params as any).promise();
  }

  async listBackendJobs(params: { [K in keyof ParamsFrom<'listBackendJobs', { next?: string, limit?: number }>]: ParamsFrom<'listBackendJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBackendJobs'>]-?: ReturnTypeFrom<'listBackendJobs'>[K]}['Jobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Jobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackendJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBackendJobs' })).toString('base64');
    const member = (Array.isArray(result.Jobs ?? []) ? (result.Jobs ?? []) : [result.Jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listS3Buckets: (params: RawParamsFrom<'listS3Buckets'>) => Promise<ReturnTypeFrom<'listS3Buckets'>>  = async params => {
  // undefined
    return this.client.listS3Buckets(params as any).promise();
  }

  removeAllBackends: (params: RawParamsFrom<'removeAllBackends'>) => Promise<ReturnTypeFrom<'removeAllBackends'>>  = async params => {
  // undefined
    return this.client.removeAllBackends(params as any).promise();
  }

  removeBackendConfig: (params: RawParamsFrom<'removeBackendConfig'>) => Promise<ReturnTypeFrom<'removeBackendConfig'>>  = async params => {
  // undefined
    return this.client.removeBackendConfig(params as any).promise();
  }

  updateBackendAPI: (params: RawParamsFrom<'updateBackendAPI'>) => Promise<ReturnTypeFrom<'updateBackendAPI'>>  = async params => {
  // undefined
    return this.client.updateBackendAPI(params as any).promise();
  }

  updateBackendAuth: (params: RawParamsFrom<'updateBackendAuth'>) => Promise<ReturnTypeFrom<'updateBackendAuth'>>  = async params => {
  // undefined
    return this.client.updateBackendAuth(params as any).promise();
  }

  updateBackendConfig: (params: RawParamsFrom<'updateBackendConfig'>) => Promise<ReturnTypeFrom<'updateBackendConfig'>>  = async params => {
  // undefined
    return this.client.updateBackendConfig(params as any).promise();
  }

  updateBackendJob: (params: RawParamsFrom<'updateBackendJob'>) => Promise<ReturnTypeFrom<'updateBackendJob'>>  = async params => {
  // undefined
    return this.client.updateBackendJob(params as any).promise();
  }

  updateBackendStorage: (params: RawParamsFrom<'updateBackendStorage'>) => Promise<ReturnTypeFrom<'updateBackendStorage'>>  = async params => {
  // undefined
    return this.client.updateBackendStorage(params as any).promise();
  }
  
  static fromClient(client: AWSAmplifyBackend): AmplifyBackend {
    return new AmplifyBackend(client) as any;
  }
  
  static client(options?: AWSAmplifyBackend.Types.ClientConfiguration): AmplifyBackend {
    return new AmplifyBackend(new AWSAmplifyBackend(options)) as any;
  }
}  
