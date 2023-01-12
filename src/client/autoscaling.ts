import { Request, AutoScaling as AWSAutoScaling } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAutoScaling> = AWSAutoScaling[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAutoScaling> = AWSAutoScaling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAutoScaling[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAutoScaling, Extras> = AWSAutoScaling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAutoScaling> = AWSAutoScaling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AutoScaling {
  private constructor(private readonly client: AWSAutoScaling) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'autoscaling' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = ["describeAutoScalingGroups","describeAutoScalingInstances","describeLaunchConfigurations","describeNotificationConfigurations","describePolicies","describeScalingActivities","describeScheduledActions","describeTags"] as const;
  
  attachInstances: (params: RawParamsFrom<'attachInstances'>) => Promise<ReturnTypeFrom<'attachInstances'>>  = async params => {
  // undefined
    return this.client.attachInstances(params as any).promise();
  }

  attachLoadBalancerTargetGroups: (params: RawParamsFrom<'attachLoadBalancerTargetGroups'>) => Promise<ReturnTypeFrom<'attachLoadBalancerTargetGroups'>>  = async params => {
  // undefined
    return this.client.attachLoadBalancerTargetGroups(params as any).promise();
  }

  attachLoadBalancers: (params: RawParamsFrom<'attachLoadBalancers'>) => Promise<ReturnTypeFrom<'attachLoadBalancers'>>  = async params => {
  // undefined
    return this.client.attachLoadBalancers(params as any).promise();
  }

  attachTrafficSources: (params: RawParamsFrom<'attachTrafficSources'>) => Promise<ReturnTypeFrom<'attachTrafficSources'>>  = async params => {
  // undefined
    return this.client.attachTrafficSources(params as any).promise();
  }

  batchDeleteScheduledAction: (params: RawParamsFrom<'batchDeleteScheduledAction'>) => Promise<ReturnTypeFrom<'batchDeleteScheduledAction'>>  = async params => {
  // undefined
    return this.client.batchDeleteScheduledAction(params as any).promise();
  }

  batchPutScheduledUpdateGroupAction: (params: RawParamsFrom<'batchPutScheduledUpdateGroupAction'>) => Promise<ReturnTypeFrom<'batchPutScheduledUpdateGroupAction'>>  = async params => {
  // undefined
    return this.client.batchPutScheduledUpdateGroupAction(params as any).promise();
  }

  cancelInstanceRefresh: (params: RawParamsFrom<'cancelInstanceRefresh'>) => Promise<ReturnTypeFrom<'cancelInstanceRefresh'>>  = async params => {
  // undefined
    return this.client.cancelInstanceRefresh(params as any).promise();
  }

  completeLifecycleAction: (params: RawParamsFrom<'completeLifecycleAction'>) => Promise<ReturnTypeFrom<'completeLifecycleAction'>>  = async params => {
  // undefined
    return this.client.completeLifecycleAction(params as any).promise();
  }

  createAutoScalingGroup: (params: RawParamsFrom<'createAutoScalingGroup'>) => Promise<ReturnTypeFrom<'createAutoScalingGroup'>>  = async params => {
  // undefined
    return this.client.createAutoScalingGroup(params as any).promise();
  }

  createLaunchConfiguration: (params: RawParamsFrom<'createLaunchConfiguration'>) => Promise<ReturnTypeFrom<'createLaunchConfiguration'>>  = async params => {
  // undefined
    return this.client.createLaunchConfiguration(params as any).promise();
  }

  createOrUpdateTags: (params: RawParamsFrom<'createOrUpdateTags'>) => Promise<ReturnTypeFrom<'createOrUpdateTags'>>  = async params => {
  // undefined
    return this.client.createOrUpdateTags(params as any).promise();
  }

  deleteAutoScalingGroup: (params: RawParamsFrom<'deleteAutoScalingGroup'>) => Promise<ReturnTypeFrom<'deleteAutoScalingGroup'>>  = async params => {
  // undefined
    return this.client.deleteAutoScalingGroup(params as any).promise();
  }

  deleteLaunchConfiguration: (params: RawParamsFrom<'deleteLaunchConfiguration'>) => Promise<ReturnTypeFrom<'deleteLaunchConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteLaunchConfiguration(params as any).promise();
  }

  deleteLifecycleHook: (params: RawParamsFrom<'deleteLifecycleHook'>) => Promise<ReturnTypeFrom<'deleteLifecycleHook'>>  = async params => {
  // undefined
    return this.client.deleteLifecycleHook(params as any).promise();
  }

  deleteNotificationConfiguration: (params: RawParamsFrom<'deleteNotificationConfiguration'>) => Promise<ReturnTypeFrom<'deleteNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteNotificationConfiguration(params as any).promise();
  }

  deletePolicy: (params: RawParamsFrom<'deletePolicy'>) => Promise<ReturnTypeFrom<'deletePolicy'>>  = async params => {
  // undefined
    return this.client.deletePolicy(params as any).promise();
  }

  deleteScheduledAction: (params: RawParamsFrom<'deleteScheduledAction'>) => Promise<ReturnTypeFrom<'deleteScheduledAction'>>  = async params => {
  // undefined
    return this.client.deleteScheduledAction(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  deleteWarmPool: (params: RawParamsFrom<'deleteWarmPool'>) => Promise<ReturnTypeFrom<'deleteWarmPool'>>  = async params => {
  // undefined
    return this.client.deleteWarmPool(params as any).promise();
  }

  describeAccountLimits: (params: RawParamsFrom<'describeAccountLimits'>) => Promise<ReturnTypeFrom<'describeAccountLimits'>>  = async params => {
  // undefined
    return this.client.describeAccountLimits(params as any).promise();
  }

  describeAdjustmentTypes: (params: RawParamsFrom<'describeAdjustmentTypes'>) => Promise<ReturnTypeFrom<'describeAdjustmentTypes'>>  = async params => {
  // undefined
    return this.client.describeAdjustmentTypes(params as any).promise();
  }

  async describeAutoScalingGroups(params: { [K in keyof ParamsFrom<'describeAutoScalingGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeAutoScalingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAutoScalingGroups'>]-?: ReturnTypeFrom<'describeAutoScalingGroups'>[K]}['AutoScalingGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"AutoScalingGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeAutoScalingGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAutoScalingGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AutoScalingGroups ?? []) ? (result.AutoScalingGroups ?? []) : [result.AutoScalingGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAutoScalingInstances(params: { [K in keyof ParamsFrom<'describeAutoScalingInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeAutoScalingInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAutoScalingInstances'>]-?: ReturnTypeFrom<'describeAutoScalingInstances'>[K]}['AutoScalingInstances'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"AutoScalingInstances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeAutoScalingInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAutoScalingInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AutoScalingInstances ?? []) ? (result.AutoScalingInstances ?? []) : [result.AutoScalingInstances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeAutoScalingNotificationTypes: (params: RawParamsFrom<'describeAutoScalingNotificationTypes'>) => Promise<ReturnTypeFrom<'describeAutoScalingNotificationTypes'>>  = async params => {
  // undefined
    return this.client.describeAutoScalingNotificationTypes(params as any).promise();
  }

  describeInstanceRefreshes: (params: RawParamsFrom<'describeInstanceRefreshes'>) => Promise<ReturnTypeFrom<'describeInstanceRefreshes'>>  = async params => {
  // undefined
    return this.client.describeInstanceRefreshes(params as any).promise();
  }

  async describeLaunchConfigurations(params: { [K in keyof ParamsFrom<'describeLaunchConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'describeLaunchConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLaunchConfigurations'>]-?: ReturnTypeFrom<'describeLaunchConfigurations'>[K]}['LaunchConfigurations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"LaunchConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeLaunchConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLaunchConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LaunchConfigurations ?? []) ? (result.LaunchConfigurations ?? []) : [result.LaunchConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeLifecycleHookTypes: (params: RawParamsFrom<'describeLifecycleHookTypes'>) => Promise<ReturnTypeFrom<'describeLifecycleHookTypes'>>  = async params => {
  // undefined
    return this.client.describeLifecycleHookTypes(params as any).promise();
  }

  describeLifecycleHooks: (params: RawParamsFrom<'describeLifecycleHooks'>) => Promise<ReturnTypeFrom<'describeLifecycleHooks'>>  = async params => {
  // undefined
    return this.client.describeLifecycleHooks(params as any).promise();
  }

  describeLoadBalancerTargetGroups: (params: RawParamsFrom<'describeLoadBalancerTargetGroups'>) => Promise<ReturnTypeFrom<'describeLoadBalancerTargetGroups'>>  = async params => {
  // undefined
    return this.client.describeLoadBalancerTargetGroups(params as any).promise();
  }

  describeLoadBalancers: (params: RawParamsFrom<'describeLoadBalancers'>) => Promise<ReturnTypeFrom<'describeLoadBalancers'>>  = async params => {
  // undefined
    return this.client.describeLoadBalancers(params as any).promise();
  }

  describeMetricCollectionTypes: (params: RawParamsFrom<'describeMetricCollectionTypes'>) => Promise<ReturnTypeFrom<'describeMetricCollectionTypes'>>  = async params => {
  // undefined
    return this.client.describeMetricCollectionTypes(params as any).promise();
  }

  async describeNotificationConfigurations(params: { [K in keyof ParamsFrom<'describeNotificationConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'describeNotificationConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNotificationConfigurations'>]-?: ReturnTypeFrom<'describeNotificationConfigurations'>[K]}['NotificationConfigurations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"NotificationConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeNotificationConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNotificationConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NotificationConfigurations ?? []) ? (result.NotificationConfigurations ?? []) : [result.NotificationConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePolicies(params: { [K in keyof ParamsFrom<'describePolicies', { next?: string, limit?: number }>]: ParamsFrom<'describePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePolicies'>]-?: ReturnTypeFrom<'describePolicies'>[K]}['ScalingPolicies'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"ScalingPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describePolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePolicies' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScalingPolicies ?? []) ? (result.ScalingPolicies ?? []) : [result.ScalingPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScalingActivities(params: { [K in keyof ParamsFrom<'describeScalingActivities', { next?: string, limit?: number }>]: ParamsFrom<'describeScalingActivities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScalingActivities'>]-?: ReturnTypeFrom<'describeScalingActivities'>[K]}['Activities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"Activities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeScalingActivities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeScalingActivities' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Activities ?? []) ? (result.Activities ?? []) : [result.Activities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeScalingProcessTypes: (params: RawParamsFrom<'describeScalingProcessTypes'>) => Promise<ReturnTypeFrom<'describeScalingProcessTypes'>>  = async params => {
  // undefined
    return this.client.describeScalingProcessTypes(params as any).promise();
  }

  async describeScheduledActions(params: { [K in keyof ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>]: ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScheduledActions'>]-?: ReturnTypeFrom<'describeScheduledActions'>[K]}['ScheduledUpdateGroupActions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"ScheduledUpdateGroupActions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeScheduledActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeScheduledActions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScheduledUpdateGroupActions ?? []) ? (result.ScheduledUpdateGroupActions ?? []) : [result.ScheduledUpdateGroupActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTags(params: { [K in keyof ParamsFrom<'describeTags', { next?: string, limit?: number }>]: ParamsFrom<'describeTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTags' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeTerminationPolicyTypes: (params: RawParamsFrom<'describeTerminationPolicyTypes'>) => Promise<ReturnTypeFrom<'describeTerminationPolicyTypes'>>  = async params => {
  // undefined
    return this.client.describeTerminationPolicyTypes(params as any).promise();
  }

  describeTrafficSources: (params: RawParamsFrom<'describeTrafficSources'>) => Promise<ReturnTypeFrom<'describeTrafficSources'>>  = async params => {
  // undefined
    return this.client.describeTrafficSources(params as any).promise();
  }

  describeWarmPool: (params: RawParamsFrom<'describeWarmPool'>) => Promise<ReturnTypeFrom<'describeWarmPool'>>  = async params => {
  // undefined
    return this.client.describeWarmPool(params as any).promise();
  }

  detachInstances: (params: RawParamsFrom<'detachInstances'>) => Promise<ReturnTypeFrom<'detachInstances'>>  = async params => {
  // undefined
    return this.client.detachInstances(params as any).promise();
  }

  detachLoadBalancerTargetGroups: (params: RawParamsFrom<'detachLoadBalancerTargetGroups'>) => Promise<ReturnTypeFrom<'detachLoadBalancerTargetGroups'>>  = async params => {
  // undefined
    return this.client.detachLoadBalancerTargetGroups(params as any).promise();
  }

  detachLoadBalancers: (params: RawParamsFrom<'detachLoadBalancers'>) => Promise<ReturnTypeFrom<'detachLoadBalancers'>>  = async params => {
  // undefined
    return this.client.detachLoadBalancers(params as any).promise();
  }

  detachTrafficSources: (params: RawParamsFrom<'detachTrafficSources'>) => Promise<ReturnTypeFrom<'detachTrafficSources'>>  = async params => {
  // undefined
    return this.client.detachTrafficSources(params as any).promise();
  }

  disableMetricsCollection: (params: RawParamsFrom<'disableMetricsCollection'>) => Promise<ReturnTypeFrom<'disableMetricsCollection'>>  = async params => {
  // undefined
    return this.client.disableMetricsCollection(params as any).promise();
  }

  enableMetricsCollection: (params: RawParamsFrom<'enableMetricsCollection'>) => Promise<ReturnTypeFrom<'enableMetricsCollection'>>  = async params => {
  // undefined
    return this.client.enableMetricsCollection(params as any).promise();
  }

  enterStandby: (params: RawParamsFrom<'enterStandby'>) => Promise<ReturnTypeFrom<'enterStandby'>>  = async params => {
  // undefined
    return this.client.enterStandby(params as any).promise();
  }

  executePolicy: (params: RawParamsFrom<'executePolicy'>) => Promise<ReturnTypeFrom<'executePolicy'>>  = async params => {
  // undefined
    return this.client.executePolicy(params as any).promise();
  }

  exitStandby: (params: RawParamsFrom<'exitStandby'>) => Promise<ReturnTypeFrom<'exitStandby'>>  = async params => {
  // undefined
    return this.client.exitStandby(params as any).promise();
  }

  getPredictiveScalingForecast: (params: RawParamsFrom<'getPredictiveScalingForecast'>) => Promise<ReturnTypeFrom<'getPredictiveScalingForecast'>>  = async params => {
  // undefined
    return this.client.getPredictiveScalingForecast(params as any).promise();
  }

  putLifecycleHook: (params: RawParamsFrom<'putLifecycleHook'>) => Promise<ReturnTypeFrom<'putLifecycleHook'>>  = async params => {
  // undefined
    return this.client.putLifecycleHook(params as any).promise();
  }

  putNotificationConfiguration: (params: RawParamsFrom<'putNotificationConfiguration'>) => Promise<ReturnTypeFrom<'putNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.putNotificationConfiguration(params as any).promise();
  }

  putScalingPolicy: (params: RawParamsFrom<'putScalingPolicy'>) => Promise<ReturnTypeFrom<'putScalingPolicy'>>  = async params => {
  // undefined
    return this.client.putScalingPolicy(params as any).promise();
  }

  putScheduledUpdateGroupAction: (params: RawParamsFrom<'putScheduledUpdateGroupAction'>) => Promise<ReturnTypeFrom<'putScheduledUpdateGroupAction'>>  = async params => {
  // undefined
    return this.client.putScheduledUpdateGroupAction(params as any).promise();
  }

  putWarmPool: (params: RawParamsFrom<'putWarmPool'>) => Promise<ReturnTypeFrom<'putWarmPool'>>  = async params => {
  // undefined
    return this.client.putWarmPool(params as any).promise();
  }

  recordLifecycleActionHeartbeat: (params: RawParamsFrom<'recordLifecycleActionHeartbeat'>) => Promise<ReturnTypeFrom<'recordLifecycleActionHeartbeat'>>  = async params => {
  // undefined
    return this.client.recordLifecycleActionHeartbeat(params as any).promise();
  }

  resumeProcesses: (params: RawParamsFrom<'resumeProcesses'>) => Promise<ReturnTypeFrom<'resumeProcesses'>>  = async params => {
  // undefined
    return this.client.resumeProcesses(params as any).promise();
  }

  setDesiredCapacity: (params: RawParamsFrom<'setDesiredCapacity'>) => Promise<ReturnTypeFrom<'setDesiredCapacity'>>  = async params => {
  // undefined
    return this.client.setDesiredCapacity(params as any).promise();
  }

  setInstanceHealth: (params: RawParamsFrom<'setInstanceHealth'>) => Promise<ReturnTypeFrom<'setInstanceHealth'>>  = async params => {
  // undefined
    return this.client.setInstanceHealth(params as any).promise();
  }

  setInstanceProtection: (params: RawParamsFrom<'setInstanceProtection'>) => Promise<ReturnTypeFrom<'setInstanceProtection'>>  = async params => {
  // undefined
    return this.client.setInstanceProtection(params as any).promise();
  }

  startInstanceRefresh: (params: RawParamsFrom<'startInstanceRefresh'>) => Promise<ReturnTypeFrom<'startInstanceRefresh'>>  = async params => {
  // undefined
    return this.client.startInstanceRefresh(params as any).promise();
  }

  suspendProcesses: (params: RawParamsFrom<'suspendProcesses'>) => Promise<ReturnTypeFrom<'suspendProcesses'>>  = async params => {
  // undefined
    return this.client.suspendProcesses(params as any).promise();
  }

  terminateInstanceInAutoScalingGroup: (params: RawParamsFrom<'terminateInstanceInAutoScalingGroup'>) => Promise<ReturnTypeFrom<'terminateInstanceInAutoScalingGroup'>>  = async params => {
  // undefined
    return this.client.terminateInstanceInAutoScalingGroup(params as any).promise();
  }

  updateAutoScalingGroup: (params: RawParamsFrom<'updateAutoScalingGroup'>) => Promise<ReturnTypeFrom<'updateAutoScalingGroup'>>  = async params => {
  // undefined
    return this.client.updateAutoScalingGroup(params as any).promise();
  }
  
  static fromClient(client: AWSAutoScaling): AutoScaling {
    return new AutoScaling(client) as any;
  }
  
  static client(options?: AWSAutoScaling.Types.ClientConfiguration): AutoScaling {
    return new AutoScaling(new AWSAutoScaling(options)) as any;
  }
}  
