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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'serverlessrepo';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly ["listApplications"];
    
  createApplication: FunctionTypeFrom<'createApplication'>;

  createApplicationVersion: FunctionTypeFrom<'createApplicationVersion'>;

  createCloudFormationChangeSet: FunctionTypeFrom<'createCloudFormationChangeSet'>;

  createCloudFormationTemplate: FunctionTypeFrom<'createCloudFormationTemplate'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  getApplication: FunctionTypeFrom<'getApplication'>;

  getApplicationPolicy: FunctionTypeFrom<'getApplicationPolicy'>;

  getCloudFormationTemplate: FunctionTypeFrom<'getCloudFormationTemplate'>;

  listApplicationDependencies: FunctionTypeFrom<'listApplicationDependencies'>;

  listApplicationVersions: FunctionTypeFrom<'listApplicationVersions'>;

  listApplications: FunctionTypeFrom<'listApplications'>;

  putApplicationPolicy: FunctionTypeFrom<'putApplicationPolicy'>;

  unshareApplication: FunctionTypeFrom<'unshareApplication'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>
}
 
export class ServerlessApplicationRepository implements ClientType {
  private constructor(private readonly client: AWSServerlessApplicationRepository) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'serverlessrepo';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = ["listApplications"] as const;
  
  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createApplicationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createApplicationVersion(...args).promise()
  }

  async createCloudFormationChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.createCloudFormationChangeSet(...args).promise()
  }

  async createCloudFormationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createCloudFormationTemplate(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async getApplication(...args: any): Promise<any> {
  // undefined
    return this.client.getApplication(...args).promise()
  }

  async getApplicationPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getApplicationPolicy(...args).promise()
  }

  async getCloudFormationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getCloudFormationTemplate(...args).promise()
  }

  async listApplicationDependencies(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken"}
    return this.client.listApplicationDependencies(...args).promise()
  }

  async listApplicationVersions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken"}
    return this.client.listApplicationVersions(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken"}
    return this.client.listApplications(...args).promise()
  }

  async putApplicationPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putApplicationPolicy(...args).promise()
  }

  async unshareApplication(...args: any): Promise<any> {
  // undefined
    return this.client.unshareApplication(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }
  
  static fromClient(client: AWSServerlessApplicationRepository): ClientType {
    return new ServerlessApplicationRepository(client) as any;
  }
  
  static client(options?: AWSServerlessApplicationRepository.Types.ClientConfiguration): ClientType {
    return new ServerlessApplicationRepository(new AWSServerlessApplicationRepository(options)) as any;
  }
}  
