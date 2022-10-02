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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'autoscaling';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly ["describeAutoScalingGroups","describeAutoScalingInstances","describeLaunchConfigurations","describeNotificationConfigurations","describePolicies","describeScalingActivities","describeScheduledActions","describeTags"];
    
  attachInstances: FunctionTypeFrom<'attachInstances'>;

  attachLoadBalancerTargetGroups: FunctionTypeFrom<'attachLoadBalancerTargetGroups'>;

  attachLoadBalancers: FunctionTypeFrom<'attachLoadBalancers'>;

  batchDeleteScheduledAction: FunctionTypeFrom<'batchDeleteScheduledAction'>;

  batchPutScheduledUpdateGroupAction: FunctionTypeFrom<'batchPutScheduledUpdateGroupAction'>;

  cancelInstanceRefresh: FunctionTypeFrom<'cancelInstanceRefresh'>;

  completeLifecycleAction: FunctionTypeFrom<'completeLifecycleAction'>;

  createAutoScalingGroup: FunctionTypeFrom<'createAutoScalingGroup'>;

  createLaunchConfiguration: FunctionTypeFrom<'createLaunchConfiguration'>;

  createOrUpdateTags: FunctionTypeFrom<'createOrUpdateTags'>;

  deleteAutoScalingGroup: FunctionTypeFrom<'deleteAutoScalingGroup'>;

  deleteLaunchConfiguration: FunctionTypeFrom<'deleteLaunchConfiguration'>;

  deleteLifecycleHook: FunctionTypeFrom<'deleteLifecycleHook'>;

  deleteNotificationConfiguration: FunctionTypeFrom<'deleteNotificationConfiguration'>;

  deletePolicy: FunctionTypeFrom<'deletePolicy'>;

  deleteScheduledAction: FunctionTypeFrom<'deleteScheduledAction'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  deleteWarmPool: FunctionTypeFrom<'deleteWarmPool'>;

  describeAccountLimits: FunctionTypeFrom<'describeAccountLimits'>;

  describeAdjustmentTypes: FunctionTypeFrom<'describeAdjustmentTypes'>;

  describeAutoScalingGroups(params: { [K in keyof Omit<ParamsFrom<'describeAutoScalingGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeAutoScalingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAutoScalingGroups'>]-?: ReturnTypeFrom<'describeAutoScalingGroups'>[K]}['AutoScalingGroups'] }>
  describeAutoScalingGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAutoScalingGroups'>]-?: ReturnTypeFrom<'describeAutoScalingGroups'>[K]}['AutoScalingGroups'] }>;

  describeAutoScalingInstances(params: { [K in keyof Omit<ParamsFrom<'describeAutoScalingInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeAutoScalingInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAutoScalingInstances'>]-?: ReturnTypeFrom<'describeAutoScalingInstances'>[K]}['AutoScalingInstances'] }>
  describeAutoScalingInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAutoScalingInstances'>]-?: ReturnTypeFrom<'describeAutoScalingInstances'>[K]}['AutoScalingInstances'] }>;

  describeAutoScalingNotificationTypes: FunctionTypeFrom<'describeAutoScalingNotificationTypes'>;

  describeInstanceRefreshes: FunctionTypeFrom<'describeInstanceRefreshes'>;

  describeLaunchConfigurations(params: { [K in keyof Omit<ParamsFrom<'describeLaunchConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeLaunchConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLaunchConfigurations'>]-?: ReturnTypeFrom<'describeLaunchConfigurations'>[K]}['LaunchConfigurations'] }>
  describeLaunchConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLaunchConfigurations'>]-?: ReturnTypeFrom<'describeLaunchConfigurations'>[K]}['LaunchConfigurations'] }>;

  describeLifecycleHookTypes: FunctionTypeFrom<'describeLifecycleHookTypes'>;

  describeLifecycleHooks: FunctionTypeFrom<'describeLifecycleHooks'>;

  describeLoadBalancerTargetGroups: FunctionTypeFrom<'describeLoadBalancerTargetGroups'>;

  describeLoadBalancers: FunctionTypeFrom<'describeLoadBalancers'>;

  describeMetricCollectionTypes: FunctionTypeFrom<'describeMetricCollectionTypes'>;

  describeNotificationConfigurations(params: { [K in keyof Omit<ParamsFrom<'describeNotificationConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeNotificationConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNotificationConfigurations'>]-?: ReturnTypeFrom<'describeNotificationConfigurations'>[K]}['NotificationConfigurations'] }>
  describeNotificationConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNotificationConfigurations'>]-?: ReturnTypeFrom<'describeNotificationConfigurations'>[K]}['NotificationConfigurations'] }>;

  describePolicies(params: { [K in keyof Omit<ParamsFrom<'describePolicies', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePolicies'>]-?: ReturnTypeFrom<'describePolicies'>[K]}['ScalingPolicies'] }>
  describePolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePolicies'>]-?: ReturnTypeFrom<'describePolicies'>[K]}['ScalingPolicies'] }>;

  describeScalingActivities(params: { [K in keyof Omit<ParamsFrom<'describeScalingActivities', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeScalingActivities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScalingActivities'>]-?: ReturnTypeFrom<'describeScalingActivities'>[K]}['Activities'] }>
  describeScalingActivities(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScalingActivities'>]-?: ReturnTypeFrom<'describeScalingActivities'>[K]}['Activities'] }>;

  describeScalingProcessTypes: FunctionTypeFrom<'describeScalingProcessTypes'>;

  describeScheduledActions(params: { [K in keyof Omit<ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScheduledActions'>]-?: ReturnTypeFrom<'describeScheduledActions'>[K]}['ScheduledUpdateGroupActions'] }>
  describeScheduledActions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScheduledActions'>]-?: ReturnTypeFrom<'describeScheduledActions'>[K]}['ScheduledUpdateGroupActions'] }>;

  describeTags(params: { [K in keyof Omit<ParamsFrom<'describeTags', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['Tags'] }>
  describeTags(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['Tags'] }>;

  describeTerminationPolicyTypes: FunctionTypeFrom<'describeTerminationPolicyTypes'>;

  describeWarmPool: FunctionTypeFrom<'describeWarmPool'>;

  detachInstances: FunctionTypeFrom<'detachInstances'>;

  detachLoadBalancerTargetGroups: FunctionTypeFrom<'detachLoadBalancerTargetGroups'>;

  detachLoadBalancers: FunctionTypeFrom<'detachLoadBalancers'>;

  disableMetricsCollection: FunctionTypeFrom<'disableMetricsCollection'>;

  enableMetricsCollection: FunctionTypeFrom<'enableMetricsCollection'>;

  enterStandby: FunctionTypeFrom<'enterStandby'>;

  executePolicy: FunctionTypeFrom<'executePolicy'>;

  exitStandby: FunctionTypeFrom<'exitStandby'>;

  getPredictiveScalingForecast: FunctionTypeFrom<'getPredictiveScalingForecast'>;

  putLifecycleHook: FunctionTypeFrom<'putLifecycleHook'>;

  putNotificationConfiguration: FunctionTypeFrom<'putNotificationConfiguration'>;

  putScalingPolicy: FunctionTypeFrom<'putScalingPolicy'>;

  putScheduledUpdateGroupAction: FunctionTypeFrom<'putScheduledUpdateGroupAction'>;

  putWarmPool: FunctionTypeFrom<'putWarmPool'>;

  recordLifecycleActionHeartbeat: FunctionTypeFrom<'recordLifecycleActionHeartbeat'>;

  resumeProcesses: FunctionTypeFrom<'resumeProcesses'>;

  setDesiredCapacity: FunctionTypeFrom<'setDesiredCapacity'>;

  setInstanceHealth: FunctionTypeFrom<'setInstanceHealth'>;

  setInstanceProtection: FunctionTypeFrom<'setInstanceProtection'>;

  startInstanceRefresh: FunctionTypeFrom<'startInstanceRefresh'>;

  suspendProcesses: FunctionTypeFrom<'suspendProcesses'>;

  terminateInstanceInAutoScalingGroup: FunctionTypeFrom<'terminateInstanceInAutoScalingGroup'>;

  updateAutoScalingGroup: FunctionTypeFrom<'updateAutoScalingGroup'>
}
 
export class AutoScaling implements ClientType {
  private constructor(private readonly client: AWSAutoScaling) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'autoscaling';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = ["describeAutoScalingGroups","describeAutoScalingInstances","describeLaunchConfigurations","describeNotificationConfigurations","describePolicies","describeScalingActivities","describeScheduledActions","describeTags"] as const;
  
  async attachInstances(...args: any): Promise<any> {
  // undefined
    return this.client.attachInstances(...args).promise()
  }

  async attachLoadBalancerTargetGroups(...args: any): Promise<any> {
  // undefined
    return this.client.attachLoadBalancerTargetGroups(...args).promise()
  }

  async attachLoadBalancers(...args: any): Promise<any> {
  // undefined
    return this.client.attachLoadBalancers(...args).promise()
  }

  async batchDeleteScheduledAction(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteScheduledAction(...args).promise()
  }

  async batchPutScheduledUpdateGroupAction(...args: any): Promise<any> {
  // undefined
    return this.client.batchPutScheduledUpdateGroupAction(...args).promise()
  }

  async cancelInstanceRefresh(...args: any): Promise<any> {
  // undefined
    return this.client.cancelInstanceRefresh(...args).promise()
  }

  async completeLifecycleAction(...args: any): Promise<any> {
  // undefined
    return this.client.completeLifecycleAction(...args).promise()
  }

  async createAutoScalingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createAutoScalingGroup(...args).promise()
  }

  async createLaunchConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createLaunchConfiguration(...args).promise()
  }

  async createOrUpdateTags(...args: any): Promise<any> {
  // undefined
    return this.client.createOrUpdateTags(...args).promise()
  }

  async deleteAutoScalingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAutoScalingGroup(...args).promise()
  }

  async deleteLaunchConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLaunchConfiguration(...args).promise()
  }

  async deleteLifecycleHook(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLifecycleHook(...args).promise()
  }

  async deleteNotificationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNotificationConfiguration(...args).promise()
  }

  async deletePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicy(...args).promise()
  }

  async deleteScheduledAction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScheduledAction(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async deleteWarmPool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWarmPool(...args).promise()
  }

  async describeAccountLimits(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountLimits(...args).promise()
  }

  async describeAdjustmentTypes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAdjustmentTypes(...args).promise()
  }

  async describeAutoScalingGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"AutoScalingGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeAutoScalingGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AutoScalingGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAutoScalingInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"AutoScalingInstances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeAutoScalingInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AutoScalingInstances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAutoScalingNotificationTypes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAutoScalingNotificationTypes(...args).promise()
  }

  async describeInstanceRefreshes(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstanceRefreshes(...args).promise()
  }

  async describeLaunchConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"LaunchConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeLaunchConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LaunchConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLifecycleHookTypes(...args: any): Promise<any> {
  // undefined
    return this.client.describeLifecycleHookTypes(...args).promise()
  }

  async describeLifecycleHooks(...args: any): Promise<any> {
  // undefined
    return this.client.describeLifecycleHooks(...args).promise()
  }

  async describeLoadBalancerTargetGroups(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoadBalancerTargetGroups(...args).promise()
  }

  async describeLoadBalancers(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoadBalancers(...args).promise()
  }

  async describeMetricCollectionTypes(...args: any): Promise<any> {
  // undefined
    return this.client.describeMetricCollectionTypes(...args).promise()
  }

  async describeNotificationConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"NotificationConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeNotificationConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NotificationConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"ScalingPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describePolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScalingPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScalingActivities(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"Activities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeScalingActivities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Activities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScalingProcessTypes(...args: any): Promise<any> {
  // undefined
    return this.client.describeScalingProcessTypes(...args).promise()
  }

  async describeScheduledActions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"ScheduledUpdateGroupActions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeScheduledActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScheduledUpdateGroupActions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTags(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTerminationPolicyTypes(...args: any): Promise<any> {
  // undefined
    return this.client.describeTerminationPolicyTypes(...args).promise()
  }

  async describeWarmPool(...args: any): Promise<any> {
  // undefined
    return this.client.describeWarmPool(...args).promise()
  }

  async detachInstances(...args: any): Promise<any> {
  // undefined
    return this.client.detachInstances(...args).promise()
  }

  async detachLoadBalancerTargetGroups(...args: any): Promise<any> {
  // undefined
    return this.client.detachLoadBalancerTargetGroups(...args).promise()
  }

  async detachLoadBalancers(...args: any): Promise<any> {
  // undefined
    return this.client.detachLoadBalancers(...args).promise()
  }

  async disableMetricsCollection(...args: any): Promise<any> {
  // undefined
    return this.client.disableMetricsCollection(...args).promise()
  }

  async enableMetricsCollection(...args: any): Promise<any> {
  // undefined
    return this.client.enableMetricsCollection(...args).promise()
  }

  async enterStandby(...args: any): Promise<any> {
  // undefined
    return this.client.enterStandby(...args).promise()
  }

  async executePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.executePolicy(...args).promise()
  }

  async exitStandby(...args: any): Promise<any> {
  // undefined
    return this.client.exitStandby(...args).promise()
  }

  async getPredictiveScalingForecast(...args: any): Promise<any> {
  // undefined
    return this.client.getPredictiveScalingForecast(...args).promise()
  }

  async putLifecycleHook(...args: any): Promise<any> {
  // undefined
    return this.client.putLifecycleHook(...args).promise()
  }

  async putNotificationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putNotificationConfiguration(...args).promise()
  }

  async putScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putScalingPolicy(...args).promise()
  }

  async putScheduledUpdateGroupAction(...args: any): Promise<any> {
  // undefined
    return this.client.putScheduledUpdateGroupAction(...args).promise()
  }

  async putWarmPool(...args: any): Promise<any> {
  // undefined
    return this.client.putWarmPool(...args).promise()
  }

  async recordLifecycleActionHeartbeat(...args: any): Promise<any> {
  // undefined
    return this.client.recordLifecycleActionHeartbeat(...args).promise()
  }

  async resumeProcesses(...args: any): Promise<any> {
  // undefined
    return this.client.resumeProcesses(...args).promise()
  }

  async setDesiredCapacity(...args: any): Promise<any> {
  // undefined
    return this.client.setDesiredCapacity(...args).promise()
  }

  async setInstanceHealth(...args: any): Promise<any> {
  // undefined
    return this.client.setInstanceHealth(...args).promise()
  }

  async setInstanceProtection(...args: any): Promise<any> {
  // undefined
    return this.client.setInstanceProtection(...args).promise()
  }

  async startInstanceRefresh(...args: any): Promise<any> {
  // undefined
    return this.client.startInstanceRefresh(...args).promise()
  }

  async suspendProcesses(...args: any): Promise<any> {
  // undefined
    return this.client.suspendProcesses(...args).promise()
  }

  async terminateInstanceInAutoScalingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.terminateInstanceInAutoScalingGroup(...args).promise()
  }

  async updateAutoScalingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateAutoScalingGroup(...args).promise()
  }
  
  static fromClient(client: AWSAutoScaling): ClientType {
    return new AutoScaling(client) as any;
  }
  
  static client(options?: AWSAutoScaling.Types.ClientConfiguration): ClientType {
    return new AutoScaling(new AWSAutoScaling(options)) as any;
  }
}  
