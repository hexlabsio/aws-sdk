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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSOpsWorks> = AWSOpsWorks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class OpsWorks {
  private constructor(private readonly client: AWSOpsWorks) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'opsworks' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeApps","describeCommands","describeDeployments","describeEcsClusters","describeElasticIps","describeElasticLoadBalancers","describeInstances","describeLayers","describePermissions","describeRaidArrays","describeServiceErrors","describeStacks","describeUserProfiles","describeVolumes"] as const;
  
  assignInstance: (params: RawParamsFrom<'assignInstance'>) => Promise<ReturnTypeFrom<'assignInstance'>>  = async params => {
  // undefined
    return this.client.assignInstance(params as any).promise();
  }

  assignVolume: (params: RawParamsFrom<'assignVolume'>) => Promise<ReturnTypeFrom<'assignVolume'>>  = async params => {
  // undefined
    return this.client.assignVolume(params as any).promise();
  }

  associateElasticIp: (params: RawParamsFrom<'associateElasticIp'>) => Promise<ReturnTypeFrom<'associateElasticIp'>>  = async params => {
  // undefined
    return this.client.associateElasticIp(params as any).promise();
  }

  attachElasticLoadBalancer: (params: RawParamsFrom<'attachElasticLoadBalancer'>) => Promise<ReturnTypeFrom<'attachElasticLoadBalancer'>>  = async params => {
  // undefined
    return this.client.attachElasticLoadBalancer(params as any).promise();
  }

  cloneStack: (params: RawParamsFrom<'cloneStack'>) => Promise<ReturnTypeFrom<'cloneStack'>>  = async params => {
  // undefined
    return this.client.cloneStack(params as any).promise();
  }

  createApp: (params: RawParamsFrom<'createApp'>) => Promise<ReturnTypeFrom<'createApp'>>  = async params => {
  // undefined
    return this.client.createApp(params as any).promise();
  }

  createDeployment: (params: RawParamsFrom<'createDeployment'>) => Promise<ReturnTypeFrom<'createDeployment'>>  = async params => {
  // undefined
    return this.client.createDeployment(params as any).promise();
  }

  createInstance: (params: RawParamsFrom<'createInstance'>) => Promise<ReturnTypeFrom<'createInstance'>>  = async params => {
  // undefined
    return this.client.createInstance(params as any).promise();
  }

  createLayer: (params: RawParamsFrom<'createLayer'>) => Promise<ReturnTypeFrom<'createLayer'>>  = async params => {
  // undefined
    return this.client.createLayer(params as any).promise();
  }

  createStack: (params: RawParamsFrom<'createStack'>) => Promise<ReturnTypeFrom<'createStack'>>  = async params => {
  // undefined
    return this.client.createStack(params as any).promise();
  }

  createUserProfile: (params: RawParamsFrom<'createUserProfile'>) => Promise<ReturnTypeFrom<'createUserProfile'>>  = async params => {
  // undefined
    return this.client.createUserProfile(params as any).promise();
  }

  deleteApp: (params: RawParamsFrom<'deleteApp'>) => Promise<ReturnTypeFrom<'deleteApp'>>  = async params => {
  // undefined
    return this.client.deleteApp(params as any).promise();
  }

  deleteInstance: (params: RawParamsFrom<'deleteInstance'>) => Promise<ReturnTypeFrom<'deleteInstance'>>  = async params => {
  // undefined
    return this.client.deleteInstance(params as any).promise();
  }

  deleteLayer: (params: RawParamsFrom<'deleteLayer'>) => Promise<ReturnTypeFrom<'deleteLayer'>>  = async params => {
  // undefined
    return this.client.deleteLayer(params as any).promise();
  }

  deleteStack: (params: RawParamsFrom<'deleteStack'>) => Promise<ReturnTypeFrom<'deleteStack'>>  = async params => {
  // undefined
    return this.client.deleteStack(params as any).promise();
  }

  deleteUserProfile: (params: RawParamsFrom<'deleteUserProfile'>) => Promise<ReturnTypeFrom<'deleteUserProfile'>>  = async params => {
  // undefined
    return this.client.deleteUserProfile(params as any).promise();
  }

  deregisterEcsCluster: (params: RawParamsFrom<'deregisterEcsCluster'>) => Promise<ReturnTypeFrom<'deregisterEcsCluster'>>  = async params => {
  // undefined
    return this.client.deregisterEcsCluster(params as any).promise();
  }

  deregisterElasticIp: (params: RawParamsFrom<'deregisterElasticIp'>) => Promise<ReturnTypeFrom<'deregisterElasticIp'>>  = async params => {
  // undefined
    return this.client.deregisterElasticIp(params as any).promise();
  }

  deregisterInstance: (params: RawParamsFrom<'deregisterInstance'>) => Promise<ReturnTypeFrom<'deregisterInstance'>>  = async params => {
  // undefined
    return this.client.deregisterInstance(params as any).promise();
  }

  deregisterRdsDbInstance: (params: RawParamsFrom<'deregisterRdsDbInstance'>) => Promise<ReturnTypeFrom<'deregisterRdsDbInstance'>>  = async params => {
  // undefined
    return this.client.deregisterRdsDbInstance(params as any).promise();
  }

  deregisterVolume: (params: RawParamsFrom<'deregisterVolume'>) => Promise<ReturnTypeFrom<'deregisterVolume'>>  = async params => {
  // undefined
    return this.client.deregisterVolume(params as any).promise();
  }

  describeAgentVersions: (params: RawParamsFrom<'describeAgentVersions'>) => Promise<ReturnTypeFrom<'describeAgentVersions'>>  = async params => {
  // undefined
    return this.client.describeAgentVersions(params as any).promise();
  }

  async describeApps(params: { [K in keyof ParamsFrom<'describeApps', {}>]: ParamsFrom<'describeApps', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeApps'>]-?: ReturnTypeFrom<'describeApps'>[K]}['Apps'], undefined>}> {
    // {"resultKey":"Apps"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeApps({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Apps ?? []) ? (result.Apps ?? []) : [result.Apps]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeCommands(params: { [K in keyof ParamsFrom<'describeCommands', {}>]: ParamsFrom<'describeCommands', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCommands'>]-?: ReturnTypeFrom<'describeCommands'>[K]}['Commands'], undefined>}> {
    // {"resultKey":"Commands"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeCommands({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Commands ?? []) ? (result.Commands ?? []) : [result.Commands]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDeployments(params: { [K in keyof ParamsFrom<'describeDeployments', {}>]: ParamsFrom<'describeDeployments', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDeployments'>]-?: ReturnTypeFrom<'describeDeployments'>[K]}['Deployments'], undefined>}> {
    // {"resultKey":"Deployments"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeDeployments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Deployments ?? []) ? (result.Deployments ?? []) : [result.Deployments]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeEcsClusters(params: { [K in keyof ParamsFrom<'describeEcsClusters', { next?: string, limit?: number }>]: ParamsFrom<'describeEcsClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEcsClusters'>]-?: ReturnTypeFrom<'describeEcsClusters'>[K]}['EcsClusters'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EcsClusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEcsClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.EcsClusters ?? []) ? (result.EcsClusters ?? []) : [result.EcsClusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeElasticIps(params: { [K in keyof ParamsFrom<'describeElasticIps', {}>]: ParamsFrom<'describeElasticIps', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeElasticIps'>]-?: ReturnTypeFrom<'describeElasticIps'>[K]}['ElasticIps'], undefined>}> {
    // {"resultKey":"ElasticIps"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeElasticIps({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.ElasticIps ?? []) ? (result.ElasticIps ?? []) : [result.ElasticIps]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeElasticLoadBalancers(params: { [K in keyof ParamsFrom<'describeElasticLoadBalancers', {}>]: ParamsFrom<'describeElasticLoadBalancers', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeElasticLoadBalancers'>]-?: ReturnTypeFrom<'describeElasticLoadBalancers'>[K]}['ElasticLoadBalancers'], undefined>}> {
    // {"resultKey":"ElasticLoadBalancers"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeElasticLoadBalancers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.ElasticLoadBalancers ?? []) ? (result.ElasticLoadBalancers ?? []) : [result.ElasticLoadBalancers]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeInstances(params: { [K in keyof ParamsFrom<'describeInstances', {}>]: ParamsFrom<'describeInstances', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstances'>]-?: ReturnTypeFrom<'describeInstances'>[K]}['Instances'], undefined>}> {
    // {"resultKey":"Instances"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Instances ?? []) ? (result.Instances ?? []) : [result.Instances]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeLayers(params: { [K in keyof ParamsFrom<'describeLayers', {}>]: ParamsFrom<'describeLayers', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLayers'>]-?: ReturnTypeFrom<'describeLayers'>[K]}['Layers'], undefined>}> {
    // {"resultKey":"Layers"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeLayers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Layers ?? []) ? (result.Layers ?? []) : [result.Layers]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeLoadBasedAutoScaling(params: { [K in keyof ParamsFrom<'describeLoadBasedAutoScaling', {}>]: ParamsFrom<'describeLoadBasedAutoScaling', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLoadBasedAutoScaling'>]-?: ReturnTypeFrom<'describeLoadBasedAutoScaling'>[K]}['LoadBasedAutoScalingConfigurations'], undefined>}> {
    // {"resultKey":"LoadBasedAutoScalingConfigurations"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeLoadBasedAutoScaling({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.LoadBasedAutoScalingConfigurations ?? []) ? (result.LoadBasedAutoScalingConfigurations ?? []) : [result.LoadBasedAutoScalingConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeMyUserProfile: (params: RawParamsFrom<'describeMyUserProfile'>) => Promise<ReturnTypeFrom<'describeMyUserProfile'>>  = async params => {
  // undefined
    return this.client.describeMyUserProfile(params as any).promise();
  }

  describeOperatingSystems: (params: RawParamsFrom<'describeOperatingSystems'>) => Promise<ReturnTypeFrom<'describeOperatingSystems'>>  = async params => {
  // undefined
    return this.client.describeOperatingSystems(params as any).promise();
  }

  async describePermissions(params: { [K in keyof ParamsFrom<'describePermissions', {}>]: ParamsFrom<'describePermissions', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePermissions'>]-?: ReturnTypeFrom<'describePermissions'>[K]}['Permissions'], undefined>}> {
    // {"resultKey":"Permissions"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describePermissions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Permissions ?? []) ? (result.Permissions ?? []) : [result.Permissions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeRaidArrays(params: { [K in keyof ParamsFrom<'describeRaidArrays', {}>]: ParamsFrom<'describeRaidArrays', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRaidArrays'>]-?: ReturnTypeFrom<'describeRaidArrays'>[K]}['RaidArrays'], undefined>}> {
    // {"resultKey":"RaidArrays"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeRaidArrays({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.RaidArrays ?? []) ? (result.RaidArrays ?? []) : [result.RaidArrays]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeRdsDbInstances: (params: RawParamsFrom<'describeRdsDbInstances'>) => Promise<ReturnTypeFrom<'describeRdsDbInstances'>>  = async params => {
  // undefined
    return this.client.describeRdsDbInstances(params as any).promise();
  }

  async describeServiceErrors(params: { [K in keyof ParamsFrom<'describeServiceErrors', {}>]: ParamsFrom<'describeServiceErrors', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeServiceErrors'>]-?: ReturnTypeFrom<'describeServiceErrors'>[K]}['ServiceErrors'], undefined>}> {
    // {"resultKey":"ServiceErrors"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeServiceErrors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.ServiceErrors ?? []) ? (result.ServiceErrors ?? []) : [result.ServiceErrors]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeStackProvisioningParameters: (params: RawParamsFrom<'describeStackProvisioningParameters'>) => Promise<ReturnTypeFrom<'describeStackProvisioningParameters'>>  = async params => {
  // undefined
    return this.client.describeStackProvisioningParameters(params as any).promise();
  }

  describeStackSummary: (params: RawParamsFrom<'describeStackSummary'>) => Promise<ReturnTypeFrom<'describeStackSummary'>>  = async params => {
  // undefined
    return this.client.describeStackSummary(params as any).promise();
  }

  async describeStacks(params: { [K in keyof ParamsFrom<'describeStacks', {}>]: ParamsFrom<'describeStacks', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStacks'>]-?: ReturnTypeFrom<'describeStacks'>[K]}['Stacks'], undefined>}> {
    // {"resultKey":"Stacks"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeStacks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Stacks ?? []) ? (result.Stacks ?? []) : [result.Stacks]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeTimeBasedAutoScaling(params: { [K in keyof ParamsFrom<'describeTimeBasedAutoScaling', {}>]: ParamsFrom<'describeTimeBasedAutoScaling', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTimeBasedAutoScaling'>]-?: ReturnTypeFrom<'describeTimeBasedAutoScaling'>[K]}['TimeBasedAutoScalingConfigurations'], undefined>}> {
    // {"resultKey":"TimeBasedAutoScalingConfigurations"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeTimeBasedAutoScaling({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.TimeBasedAutoScalingConfigurations ?? []) ? (result.TimeBasedAutoScalingConfigurations ?? []) : [result.TimeBasedAutoScalingConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeUserProfiles(params: { [K in keyof ParamsFrom<'describeUserProfiles', {}>]: ParamsFrom<'describeUserProfiles', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeUserProfiles'>]-?: ReturnTypeFrom<'describeUserProfiles'>[K]}['UserProfiles'], undefined>}> {
    // {"resultKey":"UserProfiles"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeUserProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.UserProfiles ?? []) ? (result.UserProfiles ?? []) : [result.UserProfiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeVolumes(params: { [K in keyof ParamsFrom<'describeVolumes', {}>]: ParamsFrom<'describeVolumes', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVolumes'>]-?: ReturnTypeFrom<'describeVolumes'>[K]}['Volumes'], undefined>}> {
    // {"resultKey":"Volumes"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeVolumes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Volumes ?? []) ? (result.Volumes ?? []) : [result.Volumes]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  detachElasticLoadBalancer: (params: RawParamsFrom<'detachElasticLoadBalancer'>) => Promise<ReturnTypeFrom<'detachElasticLoadBalancer'>>  = async params => {
  // undefined
    return this.client.detachElasticLoadBalancer(params as any).promise();
  }

  disassociateElasticIp: (params: RawParamsFrom<'disassociateElasticIp'>) => Promise<ReturnTypeFrom<'disassociateElasticIp'>>  = async params => {
  // undefined
    return this.client.disassociateElasticIp(params as any).promise();
  }

  getHostnameSuggestion: (params: RawParamsFrom<'getHostnameSuggestion'>) => Promise<ReturnTypeFrom<'getHostnameSuggestion'>>  = async params => {
  // undefined
    return this.client.getHostnameSuggestion(params as any).promise();
  }

  grantAccess: (params: RawParamsFrom<'grantAccess'>) => Promise<ReturnTypeFrom<'grantAccess'>>  = async params => {
  // undefined
    return this.client.grantAccess(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // undefined
    return this.client.listTags(params as any).promise();
  }

  rebootInstance: (params: RawParamsFrom<'rebootInstance'>) => Promise<ReturnTypeFrom<'rebootInstance'>>  = async params => {
  // undefined
    return this.client.rebootInstance(params as any).promise();
  }

  registerEcsCluster: (params: RawParamsFrom<'registerEcsCluster'>) => Promise<ReturnTypeFrom<'registerEcsCluster'>>  = async params => {
  // undefined
    return this.client.registerEcsCluster(params as any).promise();
  }

  registerElasticIp: (params: RawParamsFrom<'registerElasticIp'>) => Promise<ReturnTypeFrom<'registerElasticIp'>>  = async params => {
  // undefined
    return this.client.registerElasticIp(params as any).promise();
  }

  registerInstance: (params: RawParamsFrom<'registerInstance'>) => Promise<ReturnTypeFrom<'registerInstance'>>  = async params => {
  // undefined
    return this.client.registerInstance(params as any).promise();
  }

  registerRdsDbInstance: (params: RawParamsFrom<'registerRdsDbInstance'>) => Promise<ReturnTypeFrom<'registerRdsDbInstance'>>  = async params => {
  // undefined
    return this.client.registerRdsDbInstance(params as any).promise();
  }

  registerVolume: (params: RawParamsFrom<'registerVolume'>) => Promise<ReturnTypeFrom<'registerVolume'>>  = async params => {
  // undefined
    return this.client.registerVolume(params as any).promise();
  }

  setLoadBasedAutoScaling: (params: RawParamsFrom<'setLoadBasedAutoScaling'>) => Promise<ReturnTypeFrom<'setLoadBasedAutoScaling'>>  = async params => {
  // undefined
    return this.client.setLoadBasedAutoScaling(params as any).promise();
  }

  setPermission: (params: RawParamsFrom<'setPermission'>) => Promise<ReturnTypeFrom<'setPermission'>>  = async params => {
  // undefined
    return this.client.setPermission(params as any).promise();
  }

  setTimeBasedAutoScaling: (params: RawParamsFrom<'setTimeBasedAutoScaling'>) => Promise<ReturnTypeFrom<'setTimeBasedAutoScaling'>>  = async params => {
  // undefined
    return this.client.setTimeBasedAutoScaling(params as any).promise();
  }

  startInstance: (params: RawParamsFrom<'startInstance'>) => Promise<ReturnTypeFrom<'startInstance'>>  = async params => {
  // undefined
    return this.client.startInstance(params as any).promise();
  }

  startStack: (params: RawParamsFrom<'startStack'>) => Promise<ReturnTypeFrom<'startStack'>>  = async params => {
  // undefined
    return this.client.startStack(params as any).promise();
  }

  stopInstance: (params: RawParamsFrom<'stopInstance'>) => Promise<ReturnTypeFrom<'stopInstance'>>  = async params => {
  // undefined
    return this.client.stopInstance(params as any).promise();
  }

  stopStack: (params: RawParamsFrom<'stopStack'>) => Promise<ReturnTypeFrom<'stopStack'>>  = async params => {
  // undefined
    return this.client.stopStack(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  unassignInstance: (params: RawParamsFrom<'unassignInstance'>) => Promise<ReturnTypeFrom<'unassignInstance'>>  = async params => {
  // undefined
    return this.client.unassignInstance(params as any).promise();
  }

  unassignVolume: (params: RawParamsFrom<'unassignVolume'>) => Promise<ReturnTypeFrom<'unassignVolume'>>  = async params => {
  // undefined
    return this.client.unassignVolume(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApp: (params: RawParamsFrom<'updateApp'>) => Promise<ReturnTypeFrom<'updateApp'>>  = async params => {
  // undefined
    return this.client.updateApp(params as any).promise();
  }

  updateElasticIp: (params: RawParamsFrom<'updateElasticIp'>) => Promise<ReturnTypeFrom<'updateElasticIp'>>  = async params => {
  // undefined
    return this.client.updateElasticIp(params as any).promise();
  }

  updateInstance: (params: RawParamsFrom<'updateInstance'>) => Promise<ReturnTypeFrom<'updateInstance'>>  = async params => {
  // undefined
    return this.client.updateInstance(params as any).promise();
  }

  updateLayer: (params: RawParamsFrom<'updateLayer'>) => Promise<ReturnTypeFrom<'updateLayer'>>  = async params => {
  // undefined
    return this.client.updateLayer(params as any).promise();
  }

  updateMyUserProfile: (params: RawParamsFrom<'updateMyUserProfile'>) => Promise<ReturnTypeFrom<'updateMyUserProfile'>>  = async params => {
  // undefined
    return this.client.updateMyUserProfile(params as any).promise();
  }

  updateRdsDbInstance: (params: RawParamsFrom<'updateRdsDbInstance'>) => Promise<ReturnTypeFrom<'updateRdsDbInstance'>>  = async params => {
  // undefined
    return this.client.updateRdsDbInstance(params as any).promise();
  }

  updateStack: (params: RawParamsFrom<'updateStack'>) => Promise<ReturnTypeFrom<'updateStack'>>  = async params => {
  // undefined
    return this.client.updateStack(params as any).promise();
  }

  updateUserProfile: (params: RawParamsFrom<'updateUserProfile'>) => Promise<ReturnTypeFrom<'updateUserProfile'>>  = async params => {
  // undefined
    return this.client.updateUserProfile(params as any).promise();
  }

  updateVolume: (params: RawParamsFrom<'updateVolume'>) => Promise<ReturnTypeFrom<'updateVolume'>>  = async params => {
  // undefined
    return this.client.updateVolume(params as any).promise();
  }
  
  static fromClient(client: AWSOpsWorks): OpsWorks {
    return new OpsWorks(client) as any;
  }
  
  static client(options?: AWSOpsWorks.Types.ClientConfiguration): OpsWorks {
    return new OpsWorks(new AWSOpsWorks(options)) as any;
  }
}  
