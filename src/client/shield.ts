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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSShield> = AWSShield[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Shield {
  private constructor(private readonly client: AWSShield) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'shield' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listAttacks","listProtectionGroups","listProtections"] as const;
  
  associateDRTLogBucket: (params: RawParamsFrom<'associateDRTLogBucket'>) => Promise<ReturnTypeFrom<'associateDRTLogBucket'>>  = async params => {
  // undefined
    return this.client.associateDRTLogBucket(params as any).promise();
  }

  associateDRTRole: (params: RawParamsFrom<'associateDRTRole'>) => Promise<ReturnTypeFrom<'associateDRTRole'>>  = async params => {
  // undefined
    return this.client.associateDRTRole(params as any).promise();
  }

  associateHealthCheck: (params: RawParamsFrom<'associateHealthCheck'>) => Promise<ReturnTypeFrom<'associateHealthCheck'>>  = async params => {
  // undefined
    return this.client.associateHealthCheck(params as any).promise();
  }

  associateProactiveEngagementDetails: (params: RawParamsFrom<'associateProactiveEngagementDetails'>) => Promise<ReturnTypeFrom<'associateProactiveEngagementDetails'>>  = async params => {
  // undefined
    return this.client.associateProactiveEngagementDetails(params as any).promise();
  }

  createProtection: (params: RawParamsFrom<'createProtection'>) => Promise<ReturnTypeFrom<'createProtection'>>  = async params => {
  // undefined
    return this.client.createProtection(params as any).promise();
  }

  createProtectionGroup: (params: RawParamsFrom<'createProtectionGroup'>) => Promise<ReturnTypeFrom<'createProtectionGroup'>>  = async params => {
  // undefined
    return this.client.createProtectionGroup(params as any).promise();
  }

  createSubscription: (params: RawParamsFrom<'createSubscription'>) => Promise<ReturnTypeFrom<'createSubscription'>>  = async params => {
  // undefined
    return this.client.createSubscription(params as any).promise();
  }

  deleteProtection: (params: RawParamsFrom<'deleteProtection'>) => Promise<ReturnTypeFrom<'deleteProtection'>>  = async params => {
  // undefined
    return this.client.deleteProtection(params as any).promise();
  }

  deleteProtectionGroup: (params: RawParamsFrom<'deleteProtectionGroup'>) => Promise<ReturnTypeFrom<'deleteProtectionGroup'>>  = async params => {
  // undefined
    return this.client.deleteProtectionGroup(params as any).promise();
  }

  deleteSubscription: (params: RawParamsFrom<'deleteSubscription'>) => Promise<ReturnTypeFrom<'deleteSubscription'>>  = async params => {
  // undefined
    return this.client.deleteSubscription(params as any).promise();
  }

  describeAttack: (params: RawParamsFrom<'describeAttack'>) => Promise<ReturnTypeFrom<'describeAttack'>>  = async params => {
  // undefined
    return this.client.describeAttack(params as any).promise();
  }

  describeAttackStatistics: (params: RawParamsFrom<'describeAttackStatistics'>) => Promise<ReturnTypeFrom<'describeAttackStatistics'>>  = async params => {
  // undefined
    return this.client.describeAttackStatistics(params as any).promise();
  }

  describeDRTAccess: (params: RawParamsFrom<'describeDRTAccess'>) => Promise<ReturnTypeFrom<'describeDRTAccess'>>  = async params => {
  // undefined
    return this.client.describeDRTAccess(params as any).promise();
  }

  describeEmergencyContactSettings: (params: RawParamsFrom<'describeEmergencyContactSettings'>) => Promise<ReturnTypeFrom<'describeEmergencyContactSettings'>>  = async params => {
  // undefined
    return this.client.describeEmergencyContactSettings(params as any).promise();
  }

  describeProtection: (params: RawParamsFrom<'describeProtection'>) => Promise<ReturnTypeFrom<'describeProtection'>>  = async params => {
  // undefined
    return this.client.describeProtection(params as any).promise();
  }

  describeProtectionGroup: (params: RawParamsFrom<'describeProtectionGroup'>) => Promise<ReturnTypeFrom<'describeProtectionGroup'>>  = async params => {
  // undefined
    return this.client.describeProtectionGroup(params as any).promise();
  }

  describeSubscription: (params: RawParamsFrom<'describeSubscription'>) => Promise<ReturnTypeFrom<'describeSubscription'>>  = async params => {
  // undefined
    return this.client.describeSubscription(params as any).promise();
  }

  disableApplicationLayerAutomaticResponse: (params: RawParamsFrom<'disableApplicationLayerAutomaticResponse'>) => Promise<ReturnTypeFrom<'disableApplicationLayerAutomaticResponse'>>  = async params => {
  // undefined
    return this.client.disableApplicationLayerAutomaticResponse(params as any).promise();
  }

  disableProactiveEngagement: (params: RawParamsFrom<'disableProactiveEngagement'>) => Promise<ReturnTypeFrom<'disableProactiveEngagement'>>  = async params => {
  // undefined
    return this.client.disableProactiveEngagement(params as any).promise();
  }

  disassociateDRTLogBucket: (params: RawParamsFrom<'disassociateDRTLogBucket'>) => Promise<ReturnTypeFrom<'disassociateDRTLogBucket'>>  = async params => {
  // undefined
    return this.client.disassociateDRTLogBucket(params as any).promise();
  }

  disassociateDRTRole: (params: RawParamsFrom<'disassociateDRTRole'>) => Promise<ReturnTypeFrom<'disassociateDRTRole'>>  = async params => {
  // undefined
    return this.client.disassociateDRTRole(params as any).promise();
  }

  disassociateHealthCheck: (params: RawParamsFrom<'disassociateHealthCheck'>) => Promise<ReturnTypeFrom<'disassociateHealthCheck'>>  = async params => {
  // undefined
    return this.client.disassociateHealthCheck(params as any).promise();
  }

  enableApplicationLayerAutomaticResponse: (params: RawParamsFrom<'enableApplicationLayerAutomaticResponse'>) => Promise<ReturnTypeFrom<'enableApplicationLayerAutomaticResponse'>>  = async params => {
  // undefined
    return this.client.enableApplicationLayerAutomaticResponse(params as any).promise();
  }

  enableProactiveEngagement: (params: RawParamsFrom<'enableProactiveEngagement'>) => Promise<ReturnTypeFrom<'enableProactiveEngagement'>>  = async params => {
  // undefined
    return this.client.enableProactiveEngagement(params as any).promise();
  }

  getSubscriptionState: (params: RawParamsFrom<'getSubscriptionState'>) => Promise<ReturnTypeFrom<'getSubscriptionState'>>  = async params => {
  // undefined
    return this.client.getSubscriptionState(params as any).promise();
  }

  async listAttacks(params: { [K in keyof ParamsFrom<'listAttacks', { next?: string, limit?: number }>]: ParamsFrom<'listAttacks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttacks'>]-?: ReturnTypeFrom<'listAttacks'>[K]}['AttackSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AttackSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAttacks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAttacks' })).toString('base64');
    const member = (Array.isArray(result.AttackSummaries ?? []) ? (result.AttackSummaries ?? []) : [result.AttackSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listProtectionGroups: (params: RawParamsFrom<'listProtectionGroups'>) => Promise<ReturnTypeFrom<'listProtectionGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProtectionGroups(params as any).promise();
  }

  async listProtections(params: { [K in keyof ParamsFrom<'listProtections', { next?: string, limit?: number }>]: ParamsFrom<'listProtections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProtections'>]-?: ReturnTypeFrom<'listProtections'>[K]}['Protections'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Protections"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProtections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listProtections' })).toString('base64');
    const member = (Array.isArray(result.Protections ?? []) ? (result.Protections ?? []) : [result.Protections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listResourcesInProtectionGroup: (params: RawParamsFrom<'listResourcesInProtectionGroup'>) => Promise<ReturnTypeFrom<'listResourcesInProtectionGroup'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listResourcesInProtectionGroup(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplicationLayerAutomaticResponse: (params: RawParamsFrom<'updateApplicationLayerAutomaticResponse'>) => Promise<ReturnTypeFrom<'updateApplicationLayerAutomaticResponse'>>  = async params => {
  // undefined
    return this.client.updateApplicationLayerAutomaticResponse(params as any).promise();
  }

  updateEmergencyContactSettings: (params: RawParamsFrom<'updateEmergencyContactSettings'>) => Promise<ReturnTypeFrom<'updateEmergencyContactSettings'>>  = async params => {
  // undefined
    return this.client.updateEmergencyContactSettings(params as any).promise();
  }

  updateProtectionGroup: (params: RawParamsFrom<'updateProtectionGroup'>) => Promise<ReturnTypeFrom<'updateProtectionGroup'>>  = async params => {
  // undefined
    return this.client.updateProtectionGroup(params as any).promise();
  }

  updateSubscription: (params: RawParamsFrom<'updateSubscription'>) => Promise<ReturnTypeFrom<'updateSubscription'>>  = async params => {
  // undefined
    return this.client.updateSubscription(params as any).promise();
  }
  
  static fromClient(client: AWSShield): Shield {
    return new Shield(client) as any;
  }
  
  static client(options?: AWSShield.Types.ClientConfiguration): Shield {
    return new Shield(new AWSShield(options)) as any;
  }
}  
