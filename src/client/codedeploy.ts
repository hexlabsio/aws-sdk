import { Request, CodeDeploy as AWSCodeDeploy } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeDeploy> = AWSCodeDeploy[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeDeploy> = AWSCodeDeploy[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeDeploy[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeDeploy, Extras> = AWSCodeDeploy[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeDeploy> = AWSCodeDeploy[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeDeploy {
  private constructor(private readonly client: AWSCodeDeploy) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codedeploy' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["listApplications","listDeploymentConfigs","listDeployments"] as const;
  
  addTagsToOnPremisesInstances: (params: RawParamsFrom<'addTagsToOnPremisesInstances'>) => Promise<ReturnTypeFrom<'addTagsToOnPremisesInstances'>>  = async params => {
  // undefined
    return this.client.addTagsToOnPremisesInstances(params as any).promise();
  }

  batchGetApplicationRevisions: (params: RawParamsFrom<'batchGetApplicationRevisions'>) => Promise<ReturnTypeFrom<'batchGetApplicationRevisions'>>  = async params => {
  // undefined
    return this.client.batchGetApplicationRevisions(params as any).promise();
  }

  batchGetApplications: (params: RawParamsFrom<'batchGetApplications'>) => Promise<ReturnTypeFrom<'batchGetApplications'>>  = async params => {
  // undefined
    return this.client.batchGetApplications(params as any).promise();
  }

  batchGetDeploymentGroups: (params: RawParamsFrom<'batchGetDeploymentGroups'>) => Promise<ReturnTypeFrom<'batchGetDeploymentGroups'>>  = async params => {
  // undefined
    return this.client.batchGetDeploymentGroups(params as any).promise();
  }

  batchGetDeploymentInstances: (params: RawParamsFrom<'batchGetDeploymentInstances'>) => Promise<ReturnTypeFrom<'batchGetDeploymentInstances'>>  = async params => {
  // undefined
    return this.client.batchGetDeploymentInstances(params as any).promise();
  }

  batchGetDeploymentTargets: (params: RawParamsFrom<'batchGetDeploymentTargets'>) => Promise<ReturnTypeFrom<'batchGetDeploymentTargets'>>  = async params => {
  // undefined
    return this.client.batchGetDeploymentTargets(params as any).promise();
  }

  batchGetDeployments: (params: RawParamsFrom<'batchGetDeployments'>) => Promise<ReturnTypeFrom<'batchGetDeployments'>>  = async params => {
  // undefined
    return this.client.batchGetDeployments(params as any).promise();
  }

  batchGetOnPremisesInstances: (params: RawParamsFrom<'batchGetOnPremisesInstances'>) => Promise<ReturnTypeFrom<'batchGetOnPremisesInstances'>>  = async params => {
  // undefined
    return this.client.batchGetOnPremisesInstances(params as any).promise();
  }

  continueDeployment: (params: RawParamsFrom<'continueDeployment'>) => Promise<ReturnTypeFrom<'continueDeployment'>>  = async params => {
  // undefined
    return this.client.continueDeployment(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createDeployment: (params: RawParamsFrom<'createDeployment'>) => Promise<ReturnTypeFrom<'createDeployment'>>  = async params => {
  // undefined
    return this.client.createDeployment(params as any).promise();
  }

  createDeploymentConfig: (params: RawParamsFrom<'createDeploymentConfig'>) => Promise<ReturnTypeFrom<'createDeploymentConfig'>>  = async params => {
  // undefined
    return this.client.createDeploymentConfig(params as any).promise();
  }

  createDeploymentGroup: (params: RawParamsFrom<'createDeploymentGroup'>) => Promise<ReturnTypeFrom<'createDeploymentGroup'>>  = async params => {
  // undefined
    return this.client.createDeploymentGroup(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteDeploymentConfig: (params: RawParamsFrom<'deleteDeploymentConfig'>) => Promise<ReturnTypeFrom<'deleteDeploymentConfig'>>  = async params => {
  // undefined
    return this.client.deleteDeploymentConfig(params as any).promise();
  }

  deleteDeploymentGroup: (params: RawParamsFrom<'deleteDeploymentGroup'>) => Promise<ReturnTypeFrom<'deleteDeploymentGroup'>>  = async params => {
  // undefined
    return this.client.deleteDeploymentGroup(params as any).promise();
  }

  deleteGitHubAccountToken: (params: RawParamsFrom<'deleteGitHubAccountToken'>) => Promise<ReturnTypeFrom<'deleteGitHubAccountToken'>>  = async params => {
  // undefined
    return this.client.deleteGitHubAccountToken(params as any).promise();
  }

  deleteResourcesByExternalId: (params: RawParamsFrom<'deleteResourcesByExternalId'>) => Promise<ReturnTypeFrom<'deleteResourcesByExternalId'>>  = async params => {
  // undefined
    return this.client.deleteResourcesByExternalId(params as any).promise();
  }

  deregisterOnPremisesInstance: (params: RawParamsFrom<'deregisterOnPremisesInstance'>) => Promise<ReturnTypeFrom<'deregisterOnPremisesInstance'>>  = async params => {
  // undefined
    return this.client.deregisterOnPremisesInstance(params as any).promise();
  }

  getApplication: (params: RawParamsFrom<'getApplication'>) => Promise<ReturnTypeFrom<'getApplication'>>  = async params => {
  // undefined
    return this.client.getApplication(params as any).promise();
  }

  getApplicationRevision: (params: RawParamsFrom<'getApplicationRevision'>) => Promise<ReturnTypeFrom<'getApplicationRevision'>>  = async params => {
  // undefined
    return this.client.getApplicationRevision(params as any).promise();
  }

  getDeployment: (params: RawParamsFrom<'getDeployment'>) => Promise<ReturnTypeFrom<'getDeployment'>>  = async params => {
  // undefined
    return this.client.getDeployment(params as any).promise();
  }

  getDeploymentConfig: (params: RawParamsFrom<'getDeploymentConfig'>) => Promise<ReturnTypeFrom<'getDeploymentConfig'>>  = async params => {
  // undefined
    return this.client.getDeploymentConfig(params as any).promise();
  }

  getDeploymentGroup: (params: RawParamsFrom<'getDeploymentGroup'>) => Promise<ReturnTypeFrom<'getDeploymentGroup'>>  = async params => {
  // undefined
    return this.client.getDeploymentGroup(params as any).promise();
  }

  getDeploymentInstance: (params: RawParamsFrom<'getDeploymentInstance'>) => Promise<ReturnTypeFrom<'getDeploymentInstance'>>  = async params => {
  // undefined
    return this.client.getDeploymentInstance(params as any).promise();
  }

  getDeploymentTarget: (params: RawParamsFrom<'getDeploymentTarget'>) => Promise<ReturnTypeFrom<'getDeploymentTarget'>>  = async params => {
  // undefined
    return this.client.getDeploymentTarget(params as any).promise();
  }

  getOnPremisesInstance: (params: RawParamsFrom<'getOnPremisesInstance'>) => Promise<ReturnTypeFrom<'getOnPremisesInstance'>>  = async params => {
  // undefined
    return this.client.getOnPremisesInstance(params as any).promise();
  }

  async listApplicationRevisions(params: { [K in keyof ParamsFrom<'listApplicationRevisions', { next?: string }>]: ParamsFrom<'listApplicationRevisions', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplicationRevisions'>]-?: ReturnTypeFrom<'listApplicationRevisions'>[K]}['revisions'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"revisions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listApplicationRevisions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listApplicationRevisions' })).toString('base64');
    const member = (Array.isArray(result.revisions ?? []) ? (result.revisions ?? []) : [result.revisions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listApplications(params: { [K in keyof ParamsFrom<'listApplications', { next?: string }>]: ParamsFrom<'listApplications', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"applications"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listApplications' })).toString('base64');
    const member = (Array.isArray(result.applications ?? []) ? (result.applications ?? []) : [result.applications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeploymentConfigs(params: { [K in keyof ParamsFrom<'listDeploymentConfigs', { next?: string }>]: ParamsFrom<'listDeploymentConfigs', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeploymentConfigs'>]-?: ReturnTypeFrom<'listDeploymentConfigs'>[K]}['deploymentConfigsList'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"deploymentConfigsList"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listDeploymentConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDeploymentConfigs' })).toString('base64');
    const member = (Array.isArray(result.deploymentConfigsList ?? []) ? (result.deploymentConfigsList ?? []) : [result.deploymentConfigsList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeploymentGroups(params: { [K in keyof ParamsFrom<'listDeploymentGroups', { next?: string }>]: ParamsFrom<'listDeploymentGroups', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeploymentGroups'>]-?: ReturnTypeFrom<'listDeploymentGroups'>[K]}['deploymentGroups'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"deploymentGroups"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listDeploymentGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDeploymentGroups' })).toString('base64');
    const member = (Array.isArray(result.deploymentGroups ?? []) ? (result.deploymentGroups ?? []) : [result.deploymentGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeploymentInstances(params: { [K in keyof ParamsFrom<'listDeploymentInstances', { next?: string }>]: ParamsFrom<'listDeploymentInstances', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeploymentInstances'>]-?: ReturnTypeFrom<'listDeploymentInstances'>[K]}['instancesList'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"instancesList"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listDeploymentInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDeploymentInstances' })).toString('base64');
    const member = (Array.isArray(result.instancesList ?? []) ? (result.instancesList ?? []) : [result.instancesList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listDeploymentTargets: (params: RawParamsFrom<'listDeploymentTargets'>) => Promise<ReturnTypeFrom<'listDeploymentTargets'>>  = async params => {
  // undefined
    return this.client.listDeploymentTargets(params as any).promise();
  }

  async listDeployments(params: { [K in keyof ParamsFrom<'listDeployments', { next?: string }>]: ParamsFrom<'listDeployments', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeployments'>]-?: ReturnTypeFrom<'listDeployments'>[K]}['deployments'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"deployments"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listDeployments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDeployments' })).toString('base64');
    const member = (Array.isArray(result.deployments ?? []) ? (result.deployments ?? []) : [result.deployments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listGitHubAccountTokenNames: (params: RawParamsFrom<'listGitHubAccountTokenNames'>) => Promise<ReturnTypeFrom<'listGitHubAccountTokenNames'>>  = async params => {
  // undefined
    return this.client.listGitHubAccountTokenNames(params as any).promise();
  }

  listOnPremisesInstances: (params: RawParamsFrom<'listOnPremisesInstances'>) => Promise<ReturnTypeFrom<'listOnPremisesInstances'>>  = async params => {
  // undefined
    return this.client.listOnPremisesInstances(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putLifecycleEventHookExecutionStatus: (params: RawParamsFrom<'putLifecycleEventHookExecutionStatus'>) => Promise<ReturnTypeFrom<'putLifecycleEventHookExecutionStatus'>>  = async params => {
  // undefined
    return this.client.putLifecycleEventHookExecutionStatus(params as any).promise();
  }

  registerApplicationRevision: (params: RawParamsFrom<'registerApplicationRevision'>) => Promise<ReturnTypeFrom<'registerApplicationRevision'>>  = async params => {
  // undefined
    return this.client.registerApplicationRevision(params as any).promise();
  }

  registerOnPremisesInstance: (params: RawParamsFrom<'registerOnPremisesInstance'>) => Promise<ReturnTypeFrom<'registerOnPremisesInstance'>>  = async params => {
  // undefined
    return this.client.registerOnPremisesInstance(params as any).promise();
  }

  removeTagsFromOnPremisesInstances: (params: RawParamsFrom<'removeTagsFromOnPremisesInstances'>) => Promise<ReturnTypeFrom<'removeTagsFromOnPremisesInstances'>>  = async params => {
  // undefined
    return this.client.removeTagsFromOnPremisesInstances(params as any).promise();
  }

  skipWaitTimeForInstanceTermination: (params: RawParamsFrom<'skipWaitTimeForInstanceTermination'>) => Promise<ReturnTypeFrom<'skipWaitTimeForInstanceTermination'>>  = async params => {
  // undefined
    return this.client.skipWaitTimeForInstanceTermination(params as any).promise();
  }

  stopDeployment: (params: RawParamsFrom<'stopDeployment'>) => Promise<ReturnTypeFrom<'stopDeployment'>>  = async params => {
  // undefined
    return this.client.stopDeployment(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }

  updateDeploymentGroup: (params: RawParamsFrom<'updateDeploymentGroup'>) => Promise<ReturnTypeFrom<'updateDeploymentGroup'>>  = async params => {
  // undefined
    return this.client.updateDeploymentGroup(params as any).promise();
  }
  
  static fromClient(client: AWSCodeDeploy): CodeDeploy {
    return new CodeDeploy(client) as any;
  }
  
  static client(options?: AWSCodeDeploy.Types.ClientConfiguration): CodeDeploy {
    return new CodeDeploy(new AWSCodeDeploy(options)) as any;
  }
}  
