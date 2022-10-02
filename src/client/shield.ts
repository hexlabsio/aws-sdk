import { Request, Shield as AWSShield } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSShield> = AWSShield[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSShield> = AWSShield[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSShield[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSShield, Extras> = AWSShield[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'shield';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listAttacks","listProtectionGroups","listProtections"];
    
  associateDRTLogBucket: FunctionTypeFrom<'associateDRTLogBucket'>;

  associateDRTRole: FunctionTypeFrom<'associateDRTRole'>;

  associateHealthCheck: FunctionTypeFrom<'associateHealthCheck'>;

  associateProactiveEngagementDetails: FunctionTypeFrom<'associateProactiveEngagementDetails'>;

  createProtection: FunctionTypeFrom<'createProtection'>;

  createProtectionGroup: FunctionTypeFrom<'createProtectionGroup'>;

  createSubscription: FunctionTypeFrom<'createSubscription'>;

  deleteProtection: FunctionTypeFrom<'deleteProtection'>;

  deleteProtectionGroup: FunctionTypeFrom<'deleteProtectionGroup'>;

  deleteSubscription: FunctionTypeFrom<'deleteSubscription'>;

  describeAttack: FunctionTypeFrom<'describeAttack'>;

  describeAttackStatistics: FunctionTypeFrom<'describeAttackStatistics'>;

  describeDRTAccess: FunctionTypeFrom<'describeDRTAccess'>;

  describeEmergencyContactSettings: FunctionTypeFrom<'describeEmergencyContactSettings'>;

  describeProtection: FunctionTypeFrom<'describeProtection'>;

  describeProtectionGroup: FunctionTypeFrom<'describeProtectionGroup'>;

  describeSubscription: FunctionTypeFrom<'describeSubscription'>;

  disableApplicationLayerAutomaticResponse: FunctionTypeFrom<'disableApplicationLayerAutomaticResponse'>;

  disableProactiveEngagement: FunctionTypeFrom<'disableProactiveEngagement'>;

  disassociateDRTLogBucket: FunctionTypeFrom<'disassociateDRTLogBucket'>;

  disassociateDRTRole: FunctionTypeFrom<'disassociateDRTRole'>;

  disassociateHealthCheck: FunctionTypeFrom<'disassociateHealthCheck'>;

  enableApplicationLayerAutomaticResponse: FunctionTypeFrom<'enableApplicationLayerAutomaticResponse'>;

  enableProactiveEngagement: FunctionTypeFrom<'enableProactiveEngagement'>;

  getSubscriptionState: FunctionTypeFrom<'getSubscriptionState'>;

  listAttacks(params: { [K in keyof Omit<ParamsFrom<'listAttacks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAttacks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttacks'>]-?: ReturnTypeFrom<'listAttacks'>[K]}['AttackSummaries'] }>
  listAttacks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttacks'>]-?: ReturnTypeFrom<'listAttacks'>[K]}['AttackSummaries'] }>;

  listProtectionGroups: FunctionTypeFrom<'listProtectionGroups'>;

  listProtections(params: { [K in keyof Omit<ParamsFrom<'listProtections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProtections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProtections'>]-?: ReturnTypeFrom<'listProtections'>[K]}['Protections'] }>
  listProtections(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProtections'>]-?: ReturnTypeFrom<'listProtections'>[K]}['Protections'] }>;

  listResourcesInProtectionGroup: FunctionTypeFrom<'listResourcesInProtectionGroup'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplicationLayerAutomaticResponse: FunctionTypeFrom<'updateApplicationLayerAutomaticResponse'>;

  updateEmergencyContactSettings: FunctionTypeFrom<'updateEmergencyContactSettings'>;

  updateProtectionGroup: FunctionTypeFrom<'updateProtectionGroup'>;

  updateSubscription: FunctionTypeFrom<'updateSubscription'>
}
 
export class Shield implements ClientType {
  private constructor(private readonly client: AWSShield) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'shield';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listAttacks","listProtectionGroups","listProtections"] as const;
  
  async associateDRTLogBucket(...args: any): Promise<any> {
  // undefined
    return this.client.associateDRTLogBucket(...args).promise()
  }

  async associateDRTRole(...args: any): Promise<any> {
  // undefined
    return this.client.associateDRTRole(...args).promise()
  }

  async associateHealthCheck(...args: any): Promise<any> {
  // undefined
    return this.client.associateHealthCheck(...args).promise()
  }

  async associateProactiveEngagementDetails(...args: any): Promise<any> {
  // undefined
    return this.client.associateProactiveEngagementDetails(...args).promise()
  }

  async createProtection(...args: any): Promise<any> {
  // undefined
    return this.client.createProtection(...args).promise()
  }

  async createProtectionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createProtectionGroup(...args).promise()
  }

  async createSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createSubscription(...args).promise()
  }

  async deleteProtection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProtection(...args).promise()
  }

  async deleteProtectionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProtectionGroup(...args).promise()
  }

  async deleteSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSubscription(...args).promise()
  }

  async describeAttack(...args: any): Promise<any> {
  // undefined
    return this.client.describeAttack(...args).promise()
  }

  async describeAttackStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.describeAttackStatistics(...args).promise()
  }

  async describeDRTAccess(...args: any): Promise<any> {
  // undefined
    return this.client.describeDRTAccess(...args).promise()
  }

  async describeEmergencyContactSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeEmergencyContactSettings(...args).promise()
  }

  async describeProtection(...args: any): Promise<any> {
  // undefined
    return this.client.describeProtection(...args).promise()
  }

  async describeProtectionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeProtectionGroup(...args).promise()
  }

  async describeSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.describeSubscription(...args).promise()
  }

  async disableApplicationLayerAutomaticResponse(...args: any): Promise<any> {
  // undefined
    return this.client.disableApplicationLayerAutomaticResponse(...args).promise()
  }

  async disableProactiveEngagement(...args: any): Promise<any> {
  // undefined
    return this.client.disableProactiveEngagement(...args).promise()
  }

  async disassociateDRTLogBucket(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateDRTLogBucket(...args).promise()
  }

  async disassociateDRTRole(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateDRTRole(...args).promise()
  }

  async disassociateHealthCheck(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateHealthCheck(...args).promise()
  }

  async enableApplicationLayerAutomaticResponse(...args: any): Promise<any> {
  // undefined
    return this.client.enableApplicationLayerAutomaticResponse(...args).promise()
  }

  async enableProactiveEngagement(...args: any): Promise<any> {
  // undefined
    return this.client.enableProactiveEngagement(...args).promise()
  }

  async getSubscriptionState(...args: any): Promise<any> {
  // undefined
    return this.client.getSubscriptionState(...args).promise()
  }

  async listAttacks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AttackSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAttacks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AttackSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProtectionGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProtectionGroups(...args).promise()
  }

  async listProtections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Protections"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProtections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Protections ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourcesInProtectionGroup(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listResourcesInProtectionGroup(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApplicationLayerAutomaticResponse(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplicationLayerAutomaticResponse(...args).promise()
  }

  async updateEmergencyContactSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateEmergencyContactSettings(...args).promise()
  }

  async updateProtectionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateProtectionGroup(...args).promise()
  }

  async updateSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.updateSubscription(...args).promise()
  }
  
  static fromClient(client: AWSShield): ClientType {
    return new Shield(client) as any;
  }
  
  static client(options?: AWSShield.Types.ClientConfiguration): ClientType {
    return new Shield(new AWSShield(options)) as any;
  }
}  
