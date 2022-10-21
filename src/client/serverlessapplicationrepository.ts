import { Request, ServerlessApplicationRepository as AWSServerlessApplicationRepository } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSServerlessApplicationRepository> = AWSServerlessApplicationRepository[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSServerlessApplicationRepository> = AWSServerlessApplicationRepository[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSServerlessApplicationRepository[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSServerlessApplicationRepository, Extras> = AWSServerlessApplicationRepository[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSServerlessApplicationRepository> = AWSServerlessApplicationRepository[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ServerlessApplicationRepository {
  private constructor(private readonly client: AWSServerlessApplicationRepository) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'serverlessrepo' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = ["listApplications"] as const;
  
  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createApplicationVersion: (params: RawParamsFrom<'createApplicationVersion'>) => Promise<ReturnTypeFrom<'createApplicationVersion'>>  = async params => {
  // undefined
    return this.client.createApplicationVersion(params as any).promise();
  }

  createCloudFormationChangeSet: (params: RawParamsFrom<'createCloudFormationChangeSet'>) => Promise<ReturnTypeFrom<'createCloudFormationChangeSet'>>  = async params => {
  // undefined
    return this.client.createCloudFormationChangeSet(params as any).promise();
  }

  createCloudFormationTemplate: (params: RawParamsFrom<'createCloudFormationTemplate'>) => Promise<ReturnTypeFrom<'createCloudFormationTemplate'>>  = async params => {
  // undefined
    return this.client.createCloudFormationTemplate(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  getApplication: (params: RawParamsFrom<'getApplication'>) => Promise<ReturnTypeFrom<'getApplication'>>  = async params => {
  // undefined
    return this.client.getApplication(params as any).promise();
  }

  getApplicationPolicy: (params: RawParamsFrom<'getApplicationPolicy'>) => Promise<ReturnTypeFrom<'getApplicationPolicy'>>  = async params => {
  // undefined
    return this.client.getApplicationPolicy(params as any).promise();
  }

  getCloudFormationTemplate: (params: RawParamsFrom<'getCloudFormationTemplate'>) => Promise<ReturnTypeFrom<'getCloudFormationTemplate'>>  = async params => {
  // undefined
    return this.client.getCloudFormationTemplate(params as any).promise();
  }

  listApplicationDependencies: (params: RawParamsFrom<'listApplicationDependencies'>) => Promise<ReturnTypeFrom<'listApplicationDependencies'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken"}
    return this.client.listApplicationDependencies(params as any).promise();
  }

  listApplicationVersions: (params: RawParamsFrom<'listApplicationVersions'>) => Promise<ReturnTypeFrom<'listApplicationVersions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken"}
    return this.client.listApplicationVersions(params as any).promise();
  }

  listApplications: (params: RawParamsFrom<'listApplications'>) => Promise<ReturnTypeFrom<'listApplications'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken"}
    return this.client.listApplications(params as any).promise();
  }

  putApplicationPolicy: (params: RawParamsFrom<'putApplicationPolicy'>) => Promise<ReturnTypeFrom<'putApplicationPolicy'>>  = async params => {
  // undefined
    return this.client.putApplicationPolicy(params as any).promise();
  }

  unshareApplication: (params: RawParamsFrom<'unshareApplication'>) => Promise<ReturnTypeFrom<'unshareApplication'>>  = async params => {
  // undefined
    return this.client.unshareApplication(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }
  
  static fromClient(client: AWSServerlessApplicationRepository): ServerlessApplicationRepository {
    return new ServerlessApplicationRepository(client) as any;
  }
  
  static client(options?: AWSServerlessApplicationRepository.Types.ClientConfiguration): ServerlessApplicationRepository {
    return new ServerlessApplicationRepository(new AWSServerlessApplicationRepository(options)) as any;
  }
}  
