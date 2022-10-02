import { Request, Amplify as AWSAmplify } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAmplify> = AWSAmplify[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAmplify> = AWSAmplify[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAmplify[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAmplify, Extras> = AWSAmplify[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'amplify';
    global: false;
    category: 'Front-End Web & Mobile'
    topLevelCalls: readonly [];
    
  createApp: FunctionTypeFrom<'createApp'>;

  createBackendEnvironment: FunctionTypeFrom<'createBackendEnvironment'>;

  createBranch: FunctionTypeFrom<'createBranch'>;

  createDeployment: FunctionTypeFrom<'createDeployment'>;

  createDomainAssociation: FunctionTypeFrom<'createDomainAssociation'>;

  createWebhook: FunctionTypeFrom<'createWebhook'>;

  deleteApp: FunctionTypeFrom<'deleteApp'>;

  deleteBackendEnvironment: FunctionTypeFrom<'deleteBackendEnvironment'>;

  deleteBranch: FunctionTypeFrom<'deleteBranch'>;

  deleteDomainAssociation: FunctionTypeFrom<'deleteDomainAssociation'>;

  deleteJob: FunctionTypeFrom<'deleteJob'>;

  deleteWebhook: FunctionTypeFrom<'deleteWebhook'>;

  generateAccessLogs: FunctionTypeFrom<'generateAccessLogs'>;

  getApp: FunctionTypeFrom<'getApp'>;

  getArtifactUrl: FunctionTypeFrom<'getArtifactUrl'>;

  getBackendEnvironment: FunctionTypeFrom<'getBackendEnvironment'>;

  getBranch: FunctionTypeFrom<'getBranch'>;

  getDomainAssociation: FunctionTypeFrom<'getDomainAssociation'>;

  getJob: FunctionTypeFrom<'getJob'>;

  getWebhook: FunctionTypeFrom<'getWebhook'>;

  listApps: FunctionTypeFrom<'listApps'>;

  listArtifacts: FunctionTypeFrom<'listArtifacts'>;

  listBackendEnvironments: FunctionTypeFrom<'listBackendEnvironments'>;

  listBranches: FunctionTypeFrom<'listBranches'>;

  listDomainAssociations: FunctionTypeFrom<'listDomainAssociations'>;

  listJobs: FunctionTypeFrom<'listJobs'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWebhooks: FunctionTypeFrom<'listWebhooks'>;

  startDeployment: FunctionTypeFrom<'startDeployment'>;

  startJob: FunctionTypeFrom<'startJob'>;

  stopJob: FunctionTypeFrom<'stopJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApp: FunctionTypeFrom<'updateApp'>;

  updateBranch: FunctionTypeFrom<'updateBranch'>;

  updateDomainAssociation: FunctionTypeFrom<'updateDomainAssociation'>;

  updateWebhook: FunctionTypeFrom<'updateWebhook'>
}
 
export class Amplify implements ClientType {
  private constructor(private readonly client: AWSAmplify) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'amplify';
  public readonly global = false;
  public readonly category = 'Front-End Web & Mobile';
  public readonly topLevelCalls = [] as const;
  
  async createApp(...args: any): Promise<any> {
  // undefined
    return this.client.createApp(...args).promise()
  }

  async createBackendEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createBackendEnvironment(...args).promise()
  }

  async createBranch(...args: any): Promise<any> {
  // undefined
    return this.client.createBranch(...args).promise()
  }

  async createDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createDeployment(...args).promise()
  }

  async createDomainAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createDomainAssociation(...args).promise()
  }

  async createWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.createWebhook(...args).promise()
  }

  async deleteApp(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApp(...args).promise()
  }

  async deleteBackendEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackendEnvironment(...args).promise()
  }

  async deleteBranch(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBranch(...args).promise()
  }

  async deleteDomainAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomainAssociation(...args).promise()
  }

  async deleteJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJob(...args).promise()
  }

  async deleteWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWebhook(...args).promise()
  }

  async generateAccessLogs(...args: any): Promise<any> {
  // undefined
    return this.client.generateAccessLogs(...args).promise()
  }

  async getApp(...args: any): Promise<any> {
  // undefined
    return this.client.getApp(...args).promise()
  }

  async getArtifactUrl(...args: any): Promise<any> {
  // undefined
    return this.client.getArtifactUrl(...args).promise()
  }

  async getBackendEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.getBackendEnvironment(...args).promise()
  }

  async getBranch(...args: any): Promise<any> {
  // undefined
    return this.client.getBranch(...args).promise()
  }

  async getDomainAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainAssociation(...args).promise()
  }

  async getJob(...args: any): Promise<any> {
  // undefined
    return this.client.getJob(...args).promise()
  }

  async getWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.getWebhook(...args).promise()
  }

  async listApps(...args: any): Promise<any> {
  // undefined
    return this.client.listApps(...args).promise()
  }

  async listArtifacts(...args: any): Promise<any> {
  // undefined
    return this.client.listArtifacts(...args).promise()
  }

  async listBackendEnvironments(...args: any): Promise<any> {
  // undefined
    return this.client.listBackendEnvironments(...args).promise()
  }

  async listBranches(...args: any): Promise<any> {
  // undefined
    return this.client.listBranches(...args).promise()
  }

  async listDomainAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.listDomainAssociations(...args).promise()
  }

  async listJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listJobs(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWebhooks(...args: any): Promise<any> {
  // undefined
    return this.client.listWebhooks(...args).promise()
  }

  async startDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.startDeployment(...args).promise()
  }

  async startJob(...args: any): Promise<any> {
  // undefined
    return this.client.startJob(...args).promise()
  }

  async stopJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApp(...args: any): Promise<any> {
  // undefined
    return this.client.updateApp(...args).promise()
  }

  async updateBranch(...args: any): Promise<any> {
  // undefined
    return this.client.updateBranch(...args).promise()
  }

  async updateDomainAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainAssociation(...args).promise()
  }

  async updateWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.updateWebhook(...args).promise()
  }
  
  static fromClient(client: AWSAmplify): ClientType {
    return new Amplify(client) as any;
  }
  
  static client(options?: AWSAmplify.Types.ClientConfiguration): ClientType {
    return new Amplify(new AWSAmplify(options)) as any;
  }
}  
