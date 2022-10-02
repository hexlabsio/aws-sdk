import { Request, OpsWorks as AWSOpsWorks } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSOpsWorks> = AWSOpsWorks[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSOpsWorks> = AWSOpsWorks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSOpsWorks[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSOpsWorks, Extras> = AWSOpsWorks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'opsworks';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeApps","describeCommands","describeDeployments","describeEcsClusters","describeElasticIps","describeElasticLoadBalancers","describeInstances","describeLayers","describePermissions","describeRaidArrays","describeServiceErrors","describeStacks","describeUserProfiles","describeVolumes"];
    
  assignInstance: FunctionTypeFrom<'assignInstance'>;

  assignVolume: FunctionTypeFrom<'assignVolume'>;

  associateElasticIp: FunctionTypeFrom<'associateElasticIp'>;

  attachElasticLoadBalancer: FunctionTypeFrom<'attachElasticLoadBalancer'>;

  cloneStack: FunctionTypeFrom<'cloneStack'>;

  createApp: FunctionTypeFrom<'createApp'>;

  createDeployment: FunctionTypeFrom<'createDeployment'>;

  createInstance: FunctionTypeFrom<'createInstance'>;

  createLayer: FunctionTypeFrom<'createLayer'>;

  createStack: FunctionTypeFrom<'createStack'>;

  createUserProfile: FunctionTypeFrom<'createUserProfile'>;

  deleteApp: FunctionTypeFrom<'deleteApp'>;

  deleteInstance: FunctionTypeFrom<'deleteInstance'>;

  deleteLayer: FunctionTypeFrom<'deleteLayer'>;

  deleteStack: FunctionTypeFrom<'deleteStack'>;

  deleteUserProfile: FunctionTypeFrom<'deleteUserProfile'>;

  deregisterEcsCluster: FunctionTypeFrom<'deregisterEcsCluster'>;

  deregisterElasticIp: FunctionTypeFrom<'deregisterElasticIp'>;

  deregisterInstance: FunctionTypeFrom<'deregisterInstance'>;

  deregisterRdsDbInstance: FunctionTypeFrom<'deregisterRdsDbInstance'>;

  deregisterVolume: FunctionTypeFrom<'deregisterVolume'>;

  describeAgentVersions: FunctionTypeFrom<'describeAgentVersions'>;

  describeApps: FunctionTypeFrom<'describeApps'>;

  describeCommands: FunctionTypeFrom<'describeCommands'>;

  describeDeployments: FunctionTypeFrom<'describeDeployments'>;

  describeEcsClusters(params: { [K in keyof Omit<ParamsFrom<'describeEcsClusters', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeEcsClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEcsClusters'>]-?: ReturnTypeFrom<'describeEcsClusters'>[K]}['EcsClusters'] }>
  describeEcsClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEcsClusters'>]-?: ReturnTypeFrom<'describeEcsClusters'>[K]}['EcsClusters'] }>;

  describeElasticIps: FunctionTypeFrom<'describeElasticIps'>;

  describeElasticLoadBalancers: FunctionTypeFrom<'describeElasticLoadBalancers'>;

  describeInstances: FunctionTypeFrom<'describeInstances'>;

  describeLayers: FunctionTypeFrom<'describeLayers'>;

  describeLoadBasedAutoScaling: FunctionTypeFrom<'describeLoadBasedAutoScaling'>;

  describeMyUserProfile: FunctionTypeFrom<'describeMyUserProfile'>;

  describeOperatingSystems: FunctionTypeFrom<'describeOperatingSystems'>;

  describePermissions: FunctionTypeFrom<'describePermissions'>;

  describeRaidArrays: FunctionTypeFrom<'describeRaidArrays'>;

  describeRdsDbInstances: FunctionTypeFrom<'describeRdsDbInstances'>;

  describeServiceErrors: FunctionTypeFrom<'describeServiceErrors'>;

  describeStackProvisioningParameters: FunctionTypeFrom<'describeStackProvisioningParameters'>;

  describeStackSummary: FunctionTypeFrom<'describeStackSummary'>;

  describeStacks: FunctionTypeFrom<'describeStacks'>;

  describeTimeBasedAutoScaling: FunctionTypeFrom<'describeTimeBasedAutoScaling'>;

  describeUserProfiles: FunctionTypeFrom<'describeUserProfiles'>;

  describeVolumes: FunctionTypeFrom<'describeVolumes'>;

  detachElasticLoadBalancer: FunctionTypeFrom<'detachElasticLoadBalancer'>;

  disassociateElasticIp: FunctionTypeFrom<'disassociateElasticIp'>;

  getHostnameSuggestion: FunctionTypeFrom<'getHostnameSuggestion'>;

  grantAccess: FunctionTypeFrom<'grantAccess'>;

  listTags: FunctionTypeFrom<'listTags'>;

  rebootInstance: FunctionTypeFrom<'rebootInstance'>;

  registerEcsCluster: FunctionTypeFrom<'registerEcsCluster'>;

  registerElasticIp: FunctionTypeFrom<'registerElasticIp'>;

  registerInstance: FunctionTypeFrom<'registerInstance'>;

  registerRdsDbInstance: FunctionTypeFrom<'registerRdsDbInstance'>;

  registerVolume: FunctionTypeFrom<'registerVolume'>;

  setLoadBasedAutoScaling: FunctionTypeFrom<'setLoadBasedAutoScaling'>;

  setPermission: FunctionTypeFrom<'setPermission'>;

  setTimeBasedAutoScaling: FunctionTypeFrom<'setTimeBasedAutoScaling'>;

  startInstance: FunctionTypeFrom<'startInstance'>;

  startStack: FunctionTypeFrom<'startStack'>;

  stopInstance: FunctionTypeFrom<'stopInstance'>;

  stopStack: FunctionTypeFrom<'stopStack'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  unassignInstance: FunctionTypeFrom<'unassignInstance'>;

  unassignVolume: FunctionTypeFrom<'unassignVolume'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApp: FunctionTypeFrom<'updateApp'>;

  updateElasticIp: FunctionTypeFrom<'updateElasticIp'>;

  updateInstance: FunctionTypeFrom<'updateInstance'>;

  updateLayer: FunctionTypeFrom<'updateLayer'>;

  updateMyUserProfile: FunctionTypeFrom<'updateMyUserProfile'>;

  updateRdsDbInstance: FunctionTypeFrom<'updateRdsDbInstance'>;

  updateStack: FunctionTypeFrom<'updateStack'>;

  updateUserProfile: FunctionTypeFrom<'updateUserProfile'>;

  updateVolume: FunctionTypeFrom<'updateVolume'>
}
 
export class OpsWorks implements ClientType {
  private constructor(private readonly client: AWSOpsWorks) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'opsworks';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeApps","describeCommands","describeDeployments","describeEcsClusters","describeElasticIps","describeElasticLoadBalancers","describeInstances","describeLayers","describePermissions","describeRaidArrays","describeServiceErrors","describeStacks","describeUserProfiles","describeVolumes"] as const;
  
  async assignInstance(...args: any): Promise<any> {
  // undefined
    return this.client.assignInstance(...args).promise()
  }

  async assignVolume(...args: any): Promise<any> {
  // undefined
    return this.client.assignVolume(...args).promise()
  }

  async associateElasticIp(...args: any): Promise<any> {
  // undefined
    return this.client.associateElasticIp(...args).promise()
  }

  async attachElasticLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.attachElasticLoadBalancer(...args).promise()
  }

  async cloneStack(...args: any): Promise<any> {
  // undefined
    return this.client.cloneStack(...args).promise()
  }

  async createApp(...args: any): Promise<any> {
  // undefined
    return this.client.createApp(...args).promise()
  }

  async createDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createDeployment(...args).promise()
  }

  async createInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createInstance(...args).promise()
  }

  async createLayer(...args: any): Promise<any> {
  // undefined
    return this.client.createLayer(...args).promise()
  }

  async createStack(...args: any): Promise<any> {
  // undefined
    return this.client.createStack(...args).promise()
  }

  async createUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createUserProfile(...args).promise()
  }

  async deleteApp(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApp(...args).promise()
  }

  async deleteInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstance(...args).promise()
  }

  async deleteLayer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLayer(...args).promise()
  }

  async deleteStack(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStack(...args).promise()
  }

  async deleteUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserProfile(...args).promise()
  }

  async deregisterEcsCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterEcsCluster(...args).promise()
  }

  async deregisterElasticIp(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterElasticIp(...args).promise()
  }

  async deregisterInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterInstance(...args).promise()
  }

  async deregisterRdsDbInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterRdsDbInstance(...args).promise()
  }

  async deregisterVolume(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterVolume(...args).promise()
  }

  async describeAgentVersions(...args: any): Promise<any> {
  // undefined
    return this.client.describeAgentVersions(...args).promise()
  }

  async describeApps(...args: any): Promise<any> {
  // {"resultKey":"Apps"}
    return this.client.describeApps(...args).promise()
  }

  async describeCommands(...args: any): Promise<any> {
  // {"resultKey":"Commands"}
    return this.client.describeCommands(...args).promise()
  }

  async describeDeployments(...args: any): Promise<any> {
  // {"resultKey":"Deployments"}
    return this.client.describeDeployments(...args).promise()
  }

  async describeEcsClusters(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EcsClusters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEcsClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EcsClusters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeElasticIps(...args: any): Promise<any> {
  // {"resultKey":"ElasticIps"}
    return this.client.describeElasticIps(...args).promise()
  }

  async describeElasticLoadBalancers(...args: any): Promise<any> {
  // {"resultKey":"ElasticLoadBalancers"}
    return this.client.describeElasticLoadBalancers(...args).promise()
  }

  async describeInstances(...args: any): Promise<any> {
  // {"resultKey":"Instances"}
    return this.client.describeInstances(...args).promise()
  }

  async describeLayers(...args: any): Promise<any> {
  // {"resultKey":"Layers"}
    return this.client.describeLayers(...args).promise()
  }

  async describeLoadBasedAutoScaling(...args: any): Promise<any> {
  // {"resultKey":"LoadBasedAutoScalingConfigurations"}
    return this.client.describeLoadBasedAutoScaling(...args).promise()
  }

  async describeMyUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.describeMyUserProfile(...args).promise()
  }

  async describeOperatingSystems(...args: any): Promise<any> {
  // undefined
    return this.client.describeOperatingSystems(...args).promise()
  }

  async describePermissions(...args: any): Promise<any> {
  // {"resultKey":"Permissions"}
    return this.client.describePermissions(...args).promise()
  }

  async describeRaidArrays(...args: any): Promise<any> {
  // {"resultKey":"RaidArrays"}
    return this.client.describeRaidArrays(...args).promise()
  }

  async describeRdsDbInstances(...args: any): Promise<any> {
  // undefined
    return this.client.describeRdsDbInstances(...args).promise()
  }

  async describeServiceErrors(...args: any): Promise<any> {
  // {"resultKey":"ServiceErrors"}
    return this.client.describeServiceErrors(...args).promise()
  }

  async describeStackProvisioningParameters(...args: any): Promise<any> {
  // undefined
    return this.client.describeStackProvisioningParameters(...args).promise()
  }

  async describeStackSummary(...args: any): Promise<any> {
  // undefined
    return this.client.describeStackSummary(...args).promise()
  }

  async describeStacks(...args: any): Promise<any> {
  // {"resultKey":"Stacks"}
    return this.client.describeStacks(...args).promise()
  }

  async describeTimeBasedAutoScaling(...args: any): Promise<any> {
  // {"resultKey":"TimeBasedAutoScalingConfigurations"}
    return this.client.describeTimeBasedAutoScaling(...args).promise()
  }

  async describeUserProfiles(...args: any): Promise<any> {
  // {"resultKey":"UserProfiles"}
    return this.client.describeUserProfiles(...args).promise()
  }

  async describeVolumes(...args: any): Promise<any> {
  // {"resultKey":"Volumes"}
    return this.client.describeVolumes(...args).promise()
  }

  async detachElasticLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.detachElasticLoadBalancer(...args).promise()
  }

  async disassociateElasticIp(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateElasticIp(...args).promise()
  }

  async getHostnameSuggestion(...args: any): Promise<any> {
  // undefined
    return this.client.getHostnameSuggestion(...args).promise()
  }

  async grantAccess(...args: any): Promise<any> {
  // undefined
    return this.client.grantAccess(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
  // undefined
    return this.client.listTags(...args).promise()
  }

  async rebootInstance(...args: any): Promise<any> {
  // undefined
    return this.client.rebootInstance(...args).promise()
  }

  async registerEcsCluster(...args: any): Promise<any> {
  // undefined
    return this.client.registerEcsCluster(...args).promise()
  }

  async registerElasticIp(...args: any): Promise<any> {
  // undefined
    return this.client.registerElasticIp(...args).promise()
  }

  async registerInstance(...args: any): Promise<any> {
  // undefined
    return this.client.registerInstance(...args).promise()
  }

  async registerRdsDbInstance(...args: any): Promise<any> {
  // undefined
    return this.client.registerRdsDbInstance(...args).promise()
  }

  async registerVolume(...args: any): Promise<any> {
  // undefined
    return this.client.registerVolume(...args).promise()
  }

  async setLoadBasedAutoScaling(...args: any): Promise<any> {
  // undefined
    return this.client.setLoadBasedAutoScaling(...args).promise()
  }

  async setPermission(...args: any): Promise<any> {
  // undefined
    return this.client.setPermission(...args).promise()
  }

  async setTimeBasedAutoScaling(...args: any): Promise<any> {
  // undefined
    return this.client.setTimeBasedAutoScaling(...args).promise()
  }

  async startInstance(...args: any): Promise<any> {
  // undefined
    return this.client.startInstance(...args).promise()
  }

  async startStack(...args: any): Promise<any> {
  // undefined
    return this.client.startStack(...args).promise()
  }

  async stopInstance(...args: any): Promise<any> {
  // undefined
    return this.client.stopInstance(...args).promise()
  }

  async stopStack(...args: any): Promise<any> {
  // undefined
    return this.client.stopStack(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async unassignInstance(...args: any): Promise<any> {
  // undefined
    return this.client.unassignInstance(...args).promise()
  }

  async unassignVolume(...args: any): Promise<any> {
  // undefined
    return this.client.unassignVolume(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApp(...args: any): Promise<any> {
  // undefined
    return this.client.updateApp(...args).promise()
  }

  async updateElasticIp(...args: any): Promise<any> {
  // undefined
    return this.client.updateElasticIp(...args).promise()
  }

  async updateInstance(...args: any): Promise<any> {
  // undefined
    return this.client.updateInstance(...args).promise()
  }

  async updateLayer(...args: any): Promise<any> {
  // undefined
    return this.client.updateLayer(...args).promise()
  }

  async updateMyUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateMyUserProfile(...args).promise()
  }

  async updateRdsDbInstance(...args: any): Promise<any> {
  // undefined
    return this.client.updateRdsDbInstance(...args).promise()
  }

  async updateStack(...args: any): Promise<any> {
  // undefined
    return this.client.updateStack(...args).promise()
  }

  async updateUserProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserProfile(...args).promise()
  }

  async updateVolume(...args: any): Promise<any> {
  // undefined
    return this.client.updateVolume(...args).promise()
  }
  
  static fromClient(client: AWSOpsWorks): ClientType {
    return new OpsWorks(client) as any;
  }
  
  static client(options?: AWSOpsWorks.Types.ClientConfiguration): ClientType {
    return new OpsWorks(new AWSOpsWorks(options)) as any;
  }
}  
