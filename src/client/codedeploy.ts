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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codedeploy';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["listApplications","listDeploymentConfigs","listDeployments"];
    
  addTagsToOnPremisesInstances: FunctionTypeFrom<'addTagsToOnPremisesInstances'>;

  batchGetApplicationRevisions: FunctionTypeFrom<'batchGetApplicationRevisions'>;

  batchGetApplications: FunctionTypeFrom<'batchGetApplications'>;

  batchGetDeploymentGroups: FunctionTypeFrom<'batchGetDeploymentGroups'>;

  batchGetDeploymentInstances: FunctionTypeFrom<'batchGetDeploymentInstances'>;

  batchGetDeploymentTargets: FunctionTypeFrom<'batchGetDeploymentTargets'>;

  batchGetDeployments: FunctionTypeFrom<'batchGetDeployments'>;

  batchGetOnPremisesInstances: FunctionTypeFrom<'batchGetOnPremisesInstances'>;

  continueDeployment: FunctionTypeFrom<'continueDeployment'>;

  createApplication: FunctionTypeFrom<'createApplication'>;

  createDeployment: FunctionTypeFrom<'createDeployment'>;

  createDeploymentConfig: FunctionTypeFrom<'createDeploymentConfig'>;

  createDeploymentGroup: FunctionTypeFrom<'createDeploymentGroup'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteDeploymentConfig: FunctionTypeFrom<'deleteDeploymentConfig'>;

  deleteDeploymentGroup: FunctionTypeFrom<'deleteDeploymentGroup'>;

  deleteGitHubAccountToken: FunctionTypeFrom<'deleteGitHubAccountToken'>;

  deleteResourcesByExternalId: FunctionTypeFrom<'deleteResourcesByExternalId'>;

  deregisterOnPremisesInstance: FunctionTypeFrom<'deregisterOnPremisesInstance'>;

  getApplication: FunctionTypeFrom<'getApplication'>;

  getApplicationRevision: FunctionTypeFrom<'getApplicationRevision'>;

  getDeployment: FunctionTypeFrom<'getDeployment'>;

  getDeploymentConfig: FunctionTypeFrom<'getDeploymentConfig'>;

  getDeploymentGroup: FunctionTypeFrom<'getDeploymentGroup'>;

  getDeploymentInstance: FunctionTypeFrom<'getDeploymentInstance'>;

  getDeploymentTarget: FunctionTypeFrom<'getDeploymentTarget'>;

  getOnPremisesInstance: FunctionTypeFrom<'getOnPremisesInstance'>;

  listApplicationRevisions(params: { [K in keyof Omit<ParamsFrom<'listApplicationRevisions', { next?: string }>, 'nextToken'>]: ParamsFrom<'listApplicationRevisions', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplicationRevisions'>]-?: ReturnTypeFrom<'listApplicationRevisions'>[K]}['revisions'] }>
  ;

  listApplications(params: { [K in keyof Omit<ParamsFrom<'listApplications', { next?: string }>, 'nextToken'>]: ParamsFrom<'listApplications', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'] }>
  listApplications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'] }>;

  listDeploymentConfigs(params: { [K in keyof Omit<ParamsFrom<'listDeploymentConfigs', { next?: string }>, 'nextToken'>]: ParamsFrom<'listDeploymentConfigs', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeploymentConfigs'>]-?: ReturnTypeFrom<'listDeploymentConfigs'>[K]}['deploymentConfigsList'] }>
  listDeploymentConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeploymentConfigs'>]-?: ReturnTypeFrom<'listDeploymentConfigs'>[K]}['deploymentConfigsList'] }>;

  listDeploymentGroups(params: { [K in keyof Omit<ParamsFrom<'listDeploymentGroups', { next?: string }>, 'nextToken'>]: ParamsFrom<'listDeploymentGroups', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeploymentGroups'>]-?: ReturnTypeFrom<'listDeploymentGroups'>[K]}['deploymentGroups'] }>
  ;

  listDeploymentInstances(params: { [K in keyof Omit<ParamsFrom<'listDeploymentInstances', { next?: string }>, 'nextToken'>]: ParamsFrom<'listDeploymentInstances', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeploymentInstances'>]-?: ReturnTypeFrom<'listDeploymentInstances'>[K]}['instancesList'] }>
  ;

  listDeploymentTargets: FunctionTypeFrom<'listDeploymentTargets'>;

  listDeployments(params: { [K in keyof Omit<ParamsFrom<'listDeployments', { next?: string }>, 'nextToken'>]: ParamsFrom<'listDeployments', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeployments'>]-?: ReturnTypeFrom<'listDeployments'>[K]}['deployments'] }>
  listDeployments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeployments'>]-?: ReturnTypeFrom<'listDeployments'>[K]}['deployments'] }>;

  listGitHubAccountTokenNames: FunctionTypeFrom<'listGitHubAccountTokenNames'>;

  listOnPremisesInstances: FunctionTypeFrom<'listOnPremisesInstances'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putLifecycleEventHookExecutionStatus: FunctionTypeFrom<'putLifecycleEventHookExecutionStatus'>;

  registerApplicationRevision: FunctionTypeFrom<'registerApplicationRevision'>;

  registerOnPremisesInstance: FunctionTypeFrom<'registerOnPremisesInstance'>;

  removeTagsFromOnPremisesInstances: FunctionTypeFrom<'removeTagsFromOnPremisesInstances'>;

  skipWaitTimeForInstanceTermination: FunctionTypeFrom<'skipWaitTimeForInstanceTermination'>;

  stopDeployment: FunctionTypeFrom<'stopDeployment'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>;

  updateDeploymentGroup: FunctionTypeFrom<'updateDeploymentGroup'>
}
 
export class CodeDeploy implements ClientType {
  private constructor(private readonly client: AWSCodeDeploy) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codedeploy';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["listApplications","listDeploymentConfigs","listDeployments"] as const;
  
  async addTagsToOnPremisesInstances(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToOnPremisesInstances(...args).promise()
  }

  async batchGetApplicationRevisions(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetApplicationRevisions(...args).promise()
  }

  async batchGetApplications(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetApplications(...args).promise()
  }

  async batchGetDeploymentGroups(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetDeploymentGroups(...args).promise()
  }

  async batchGetDeploymentInstances(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetDeploymentInstances(...args).promise()
  }

  async batchGetDeploymentTargets(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetDeploymentTargets(...args).promise()
  }

  async batchGetDeployments(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetDeployments(...args).promise()
  }

  async batchGetOnPremisesInstances(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetOnPremisesInstances(...args).promise()
  }

  async continueDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.continueDeployment(...args).promise()
  }

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createDeployment(...args).promise()
  }

  async createDeploymentConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createDeploymentConfig(...args).promise()
  }

  async createDeploymentGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDeploymentGroup(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteDeploymentConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeploymentConfig(...args).promise()
  }

  async deleteDeploymentGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeploymentGroup(...args).promise()
  }

  async deleteGitHubAccountToken(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGitHubAccountToken(...args).promise()
  }

  async deleteResourcesByExternalId(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcesByExternalId(...args).promise()
  }

  async deregisterOnPremisesInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterOnPremisesInstance(...args).promise()
  }

  async getApplication(...args: any): Promise<any> {
  // undefined
    return this.client.getApplication(...args).promise()
  }

  async getApplicationRevision(...args: any): Promise<any> {
  // undefined
    return this.client.getApplicationRevision(...args).promise()
  }

  async getDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployment(...args).promise()
  }

  async getDeploymentConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getDeploymentConfig(...args).promise()
  }

  async getDeploymentGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getDeploymentGroup(...args).promise()
  }

  async getDeploymentInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getDeploymentInstance(...args).promise()
  }

  async getDeploymentTarget(...args: any): Promise<any> {
  // undefined
    return this.client.getDeploymentTarget(...args).promise()
  }

  async getOnPremisesInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getOnPremisesInstance(...args).promise()
  }

  async listApplicationRevisions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"revisions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listApplicationRevisions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.revisions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listApplications(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"applications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.applications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeploymentConfigs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"deploymentConfigsList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listDeploymentConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.deploymentConfigsList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeploymentGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"deploymentGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listDeploymentGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.deploymentGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeploymentInstances(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"instancesList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listDeploymentInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.instancesList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeploymentTargets(...args: any): Promise<any> {
  // undefined
    return this.client.listDeploymentTargets(...args).promise()
  }

  async listDeployments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"deployments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listDeployments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.deployments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGitHubAccountTokenNames(...args: any): Promise<any> {
  // undefined
    return this.client.listGitHubAccountTokenNames(...args).promise()
  }

  async listOnPremisesInstances(...args: any): Promise<any> {
  // undefined
    return this.client.listOnPremisesInstances(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putLifecycleEventHookExecutionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.putLifecycleEventHookExecutionStatus(...args).promise()
  }

  async registerApplicationRevision(...args: any): Promise<any> {
  // undefined
    return this.client.registerApplicationRevision(...args).promise()
  }

  async registerOnPremisesInstance(...args: any): Promise<any> {
  // undefined
    return this.client.registerOnPremisesInstance(...args).promise()
  }

  async removeTagsFromOnPremisesInstances(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromOnPremisesInstances(...args).promise()
  }

  async skipWaitTimeForInstanceTermination(...args: any): Promise<any> {
  // undefined
    return this.client.skipWaitTimeForInstanceTermination(...args).promise()
  }

  async stopDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.stopDeployment(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }

  async updateDeploymentGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeploymentGroup(...args).promise()
  }
  
  static fromClient(client: AWSCodeDeploy): ClientType {
    return new CodeDeploy(client) as any;
  }
  
  static client(options?: AWSCodeDeploy.Types.ClientConfiguration): ClientType {
    return new CodeDeploy(new AWSCodeDeploy(options)) as any;
  }
}  
