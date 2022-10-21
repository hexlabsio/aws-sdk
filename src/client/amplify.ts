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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAmplify> = AWSAmplify[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Amplify {
  private constructor(private readonly client: AWSAmplify) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'amplify' as const;
  public readonly global = false as const;
  public readonly category = 'Front-End Web & Mobile' as const;
  public readonly topLevelCalls = [] as const;
  
  createApp: (params: RawParamsFrom<'createApp'>) => Promise<ReturnTypeFrom<'createApp'>>  = async params => {
  // undefined
    return this.client.createApp(params as any).promise();
  }

  createBackendEnvironment: (params: RawParamsFrom<'createBackendEnvironment'>) => Promise<ReturnTypeFrom<'createBackendEnvironment'>>  = async params => {
  // undefined
    return this.client.createBackendEnvironment(params as any).promise();
  }

  createBranch: (params: RawParamsFrom<'createBranch'>) => Promise<ReturnTypeFrom<'createBranch'>>  = async params => {
  // undefined
    return this.client.createBranch(params as any).promise();
  }

  createDeployment: (params: RawParamsFrom<'createDeployment'>) => Promise<ReturnTypeFrom<'createDeployment'>>  = async params => {
  // undefined
    return this.client.createDeployment(params as any).promise();
  }

  createDomainAssociation: (params: RawParamsFrom<'createDomainAssociation'>) => Promise<ReturnTypeFrom<'createDomainAssociation'>>  = async params => {
  // undefined
    return this.client.createDomainAssociation(params as any).promise();
  }

  createWebhook: (params: RawParamsFrom<'createWebhook'>) => Promise<ReturnTypeFrom<'createWebhook'>>  = async params => {
  // undefined
    return this.client.createWebhook(params as any).promise();
  }

  deleteApp: (params: RawParamsFrom<'deleteApp'>) => Promise<ReturnTypeFrom<'deleteApp'>>  = async params => {
  // undefined
    return this.client.deleteApp(params as any).promise();
  }

  deleteBackendEnvironment: (params: RawParamsFrom<'deleteBackendEnvironment'>) => Promise<ReturnTypeFrom<'deleteBackendEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteBackendEnvironment(params as any).promise();
  }

  deleteBranch: (params: RawParamsFrom<'deleteBranch'>) => Promise<ReturnTypeFrom<'deleteBranch'>>  = async params => {
  // undefined
    return this.client.deleteBranch(params as any).promise();
  }

  deleteDomainAssociation: (params: RawParamsFrom<'deleteDomainAssociation'>) => Promise<ReturnTypeFrom<'deleteDomainAssociation'>>  = async params => {
  // undefined
    return this.client.deleteDomainAssociation(params as any).promise();
  }

  deleteJob: (params: RawParamsFrom<'deleteJob'>) => Promise<ReturnTypeFrom<'deleteJob'>>  = async params => {
  // undefined
    return this.client.deleteJob(params as any).promise();
  }

  deleteWebhook: (params: RawParamsFrom<'deleteWebhook'>) => Promise<ReturnTypeFrom<'deleteWebhook'>>  = async params => {
  // undefined
    return this.client.deleteWebhook(params as any).promise();
  }

  generateAccessLogs: (params: RawParamsFrom<'generateAccessLogs'>) => Promise<ReturnTypeFrom<'generateAccessLogs'>>  = async params => {
  // undefined
    return this.client.generateAccessLogs(params as any).promise();
  }

  getApp: (params: RawParamsFrom<'getApp'>) => Promise<ReturnTypeFrom<'getApp'>>  = async params => {
  // undefined
    return this.client.getApp(params as any).promise();
  }

  getArtifactUrl: (params: RawParamsFrom<'getArtifactUrl'>) => Promise<ReturnTypeFrom<'getArtifactUrl'>>  = async params => {
  // undefined
    return this.client.getArtifactUrl(params as any).promise();
  }

  getBackendEnvironment: (params: RawParamsFrom<'getBackendEnvironment'>) => Promise<ReturnTypeFrom<'getBackendEnvironment'>>  = async params => {
  // undefined
    return this.client.getBackendEnvironment(params as any).promise();
  }

  getBranch: (params: RawParamsFrom<'getBranch'>) => Promise<ReturnTypeFrom<'getBranch'>>  = async params => {
  // undefined
    return this.client.getBranch(params as any).promise();
  }

  getDomainAssociation: (params: RawParamsFrom<'getDomainAssociation'>) => Promise<ReturnTypeFrom<'getDomainAssociation'>>  = async params => {
  // undefined
    return this.client.getDomainAssociation(params as any).promise();
  }

  getJob: (params: RawParamsFrom<'getJob'>) => Promise<ReturnTypeFrom<'getJob'>>  = async params => {
  // undefined
    return this.client.getJob(params as any).promise();
  }

  getWebhook: (params: RawParamsFrom<'getWebhook'>) => Promise<ReturnTypeFrom<'getWebhook'>>  = async params => {
  // undefined
    return this.client.getWebhook(params as any).promise();
  }

  listApps: (params: RawParamsFrom<'listApps'>) => Promise<ReturnTypeFrom<'listApps'>>  = async params => {
  // undefined
    return this.client.listApps(params as any).promise();
  }

  listArtifacts: (params: RawParamsFrom<'listArtifacts'>) => Promise<ReturnTypeFrom<'listArtifacts'>>  = async params => {
  // undefined
    return this.client.listArtifacts(params as any).promise();
  }

  listBackendEnvironments: (params: RawParamsFrom<'listBackendEnvironments'>) => Promise<ReturnTypeFrom<'listBackendEnvironments'>>  = async params => {
  // undefined
    return this.client.listBackendEnvironments(params as any).promise();
  }

  listBranches: (params: RawParamsFrom<'listBranches'>) => Promise<ReturnTypeFrom<'listBranches'>>  = async params => {
  // undefined
    return this.client.listBranches(params as any).promise();
  }

  listDomainAssociations: (params: RawParamsFrom<'listDomainAssociations'>) => Promise<ReturnTypeFrom<'listDomainAssociations'>>  = async params => {
  // undefined
    return this.client.listDomainAssociations(params as any).promise();
  }

  listJobs: (params: RawParamsFrom<'listJobs'>) => Promise<ReturnTypeFrom<'listJobs'>>  = async params => {
  // undefined
    return this.client.listJobs(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listWebhooks: (params: RawParamsFrom<'listWebhooks'>) => Promise<ReturnTypeFrom<'listWebhooks'>>  = async params => {
  // undefined
    return this.client.listWebhooks(params as any).promise();
  }

  startDeployment: (params: RawParamsFrom<'startDeployment'>) => Promise<ReturnTypeFrom<'startDeployment'>>  = async params => {
  // undefined
    return this.client.startDeployment(params as any).promise();
  }

  startJob: (params: RawParamsFrom<'startJob'>) => Promise<ReturnTypeFrom<'startJob'>>  = async params => {
  // undefined
    return this.client.startJob(params as any).promise();
  }

  stopJob: (params: RawParamsFrom<'stopJob'>) => Promise<ReturnTypeFrom<'stopJob'>>  = async params => {
  // undefined
    return this.client.stopJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApp: (params: RawParamsFrom<'updateApp'>) => Promise<ReturnTypeFrom<'updateApp'>>  = async params => {
  // undefined
    return this.client.updateApp(params as any).promise();
  }

  updateBranch: (params: RawParamsFrom<'updateBranch'>) => Promise<ReturnTypeFrom<'updateBranch'>>  = async params => {
  // undefined
    return this.client.updateBranch(params as any).promise();
  }

  updateDomainAssociation: (params: RawParamsFrom<'updateDomainAssociation'>) => Promise<ReturnTypeFrom<'updateDomainAssociation'>>  = async params => {
  // undefined
    return this.client.updateDomainAssociation(params as any).promise();
  }

  updateWebhook: (params: RawParamsFrom<'updateWebhook'>) => Promise<ReturnTypeFrom<'updateWebhook'>>  = async params => {
  // undefined
    return this.client.updateWebhook(params as any).promise();
  }
  
  static fromClient(client: AWSAmplify): Amplify {
    return new Amplify(client) as any;
  }
  
  static client(options?: AWSAmplify.Types.ClientConfiguration): Amplify {
    return new Amplify(new AWSAmplify(options)) as any;
  }
}  
