import { Request, NetworkFirewall as AWSNetworkFirewall } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSNetworkFirewall> = AWSNetworkFirewall[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSNetworkFirewall> = AWSNetworkFirewall[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSNetworkFirewall[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSNetworkFirewall, Extras> = AWSNetworkFirewall[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSNetworkFirewall> = AWSNetworkFirewall[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class NetworkFirewall {
  private constructor(private readonly client: AWSNetworkFirewall) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'network-firewall' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listFirewallPolicies","listFirewalls","listRuleGroups"] as const;
  
  associateFirewallPolicy: (params: RawParamsFrom<'associateFirewallPolicy'>) => Promise<ReturnTypeFrom<'associateFirewallPolicy'>>  = async params => {
  // undefined
    return this.client.associateFirewallPolicy(params as any).promise();
  }

  associateSubnets: (params: RawParamsFrom<'associateSubnets'>) => Promise<ReturnTypeFrom<'associateSubnets'>>  = async params => {
  // undefined
    return this.client.associateSubnets(params as any).promise();
  }

  createFirewall: (params: RawParamsFrom<'createFirewall'>) => Promise<ReturnTypeFrom<'createFirewall'>>  = async params => {
  // undefined
    return this.client.createFirewall(params as any).promise();
  }

  createFirewallPolicy: (params: RawParamsFrom<'createFirewallPolicy'>) => Promise<ReturnTypeFrom<'createFirewallPolicy'>>  = async params => {
  // undefined
    return this.client.createFirewallPolicy(params as any).promise();
  }

  createRuleGroup: (params: RawParamsFrom<'createRuleGroup'>) => Promise<ReturnTypeFrom<'createRuleGroup'>>  = async params => {
  // undefined
    return this.client.createRuleGroup(params as any).promise();
  }

  deleteFirewall: (params: RawParamsFrom<'deleteFirewall'>) => Promise<ReturnTypeFrom<'deleteFirewall'>>  = async params => {
  // undefined
    return this.client.deleteFirewall(params as any).promise();
  }

  deleteFirewallPolicy: (params: RawParamsFrom<'deleteFirewallPolicy'>) => Promise<ReturnTypeFrom<'deleteFirewallPolicy'>>  = async params => {
  // undefined
    return this.client.deleteFirewallPolicy(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteRuleGroup: (params: RawParamsFrom<'deleteRuleGroup'>) => Promise<ReturnTypeFrom<'deleteRuleGroup'>>  = async params => {
  // undefined
    return this.client.deleteRuleGroup(params as any).promise();
  }

  describeFirewall: (params: RawParamsFrom<'describeFirewall'>) => Promise<ReturnTypeFrom<'describeFirewall'>>  = async params => {
  // undefined
    return this.client.describeFirewall(params as any).promise();
  }

  describeFirewallPolicy: (params: RawParamsFrom<'describeFirewallPolicy'>) => Promise<ReturnTypeFrom<'describeFirewallPolicy'>>  = async params => {
  // undefined
    return this.client.describeFirewallPolicy(params as any).promise();
  }

  describeLoggingConfiguration: (params: RawParamsFrom<'describeLoggingConfiguration'>) => Promise<ReturnTypeFrom<'describeLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.describeLoggingConfiguration(params as any).promise();
  }

  describeResourcePolicy: (params: RawParamsFrom<'describeResourcePolicy'>) => Promise<ReturnTypeFrom<'describeResourcePolicy'>>  = async params => {
  // undefined
    return this.client.describeResourcePolicy(params as any).promise();
  }

  describeRuleGroup: (params: RawParamsFrom<'describeRuleGroup'>) => Promise<ReturnTypeFrom<'describeRuleGroup'>>  = async params => {
  // undefined
    return this.client.describeRuleGroup(params as any).promise();
  }

  describeRuleGroupMetadata: (params: RawParamsFrom<'describeRuleGroupMetadata'>) => Promise<ReturnTypeFrom<'describeRuleGroupMetadata'>>  = async params => {
  // undefined
    return this.client.describeRuleGroupMetadata(params as any).promise();
  }

  disassociateSubnets: (params: RawParamsFrom<'disassociateSubnets'>) => Promise<ReturnTypeFrom<'disassociateSubnets'>>  = async params => {
  // undefined
    return this.client.disassociateSubnets(params as any).promise();
  }

  async listFirewallPolicies(params: { [K in keyof ParamsFrom<'listFirewallPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listFirewallPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFirewallPolicies'>]-?: ReturnTypeFrom<'listFirewallPolicies'>[K]}['FirewallPolicies'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.FirewallPolicies ?? []) ? (result.FirewallPolicies ?? []) : [result.FirewallPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listFirewalls(params: { [K in keyof ParamsFrom<'listFirewalls', { next?: string, limit?: number }>]: ParamsFrom<'listFirewalls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFirewalls'>]-?: ReturnTypeFrom<'listFirewalls'>[K]}['Firewalls'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Firewalls"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewalls({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Firewalls ?? []) ? (result.Firewalls ?? []) : [result.Firewalls]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRuleGroups(params: { [K in keyof ParamsFrom<'listRuleGroups', { next?: string, limit?: number }>]: ParamsFrom<'listRuleGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRuleGroups'>]-?: ReturnTypeFrom<'listRuleGroups'>[K]}['RuleGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RuleGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRuleGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.RuleGroups ?? []) ? (result.RuleGroups ?? []) : [result.RuleGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateFirewallDeleteProtection: (params: RawParamsFrom<'updateFirewallDeleteProtection'>) => Promise<ReturnTypeFrom<'updateFirewallDeleteProtection'>>  = async params => {
  // undefined
    return this.client.updateFirewallDeleteProtection(params as any).promise();
  }

  updateFirewallDescription: (params: RawParamsFrom<'updateFirewallDescription'>) => Promise<ReturnTypeFrom<'updateFirewallDescription'>>  = async params => {
  // undefined
    return this.client.updateFirewallDescription(params as any).promise();
  }

  updateFirewallEncryptionConfiguration: (params: RawParamsFrom<'updateFirewallEncryptionConfiguration'>) => Promise<ReturnTypeFrom<'updateFirewallEncryptionConfiguration'>>  = async params => {
  // undefined
    return this.client.updateFirewallEncryptionConfiguration(params as any).promise();
  }

  updateFirewallPolicy: (params: RawParamsFrom<'updateFirewallPolicy'>) => Promise<ReturnTypeFrom<'updateFirewallPolicy'>>  = async params => {
  // undefined
    return this.client.updateFirewallPolicy(params as any).promise();
  }

  updateFirewallPolicyChangeProtection: (params: RawParamsFrom<'updateFirewallPolicyChangeProtection'>) => Promise<ReturnTypeFrom<'updateFirewallPolicyChangeProtection'>>  = async params => {
  // undefined
    return this.client.updateFirewallPolicyChangeProtection(params as any).promise();
  }

  updateLoggingConfiguration: (params: RawParamsFrom<'updateLoggingConfiguration'>) => Promise<ReturnTypeFrom<'updateLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.updateLoggingConfiguration(params as any).promise();
  }

  updateRuleGroup: (params: RawParamsFrom<'updateRuleGroup'>) => Promise<ReturnTypeFrom<'updateRuleGroup'>>  = async params => {
  // undefined
    return this.client.updateRuleGroup(params as any).promise();
  }

  updateSubnetChangeProtection: (params: RawParamsFrom<'updateSubnetChangeProtection'>) => Promise<ReturnTypeFrom<'updateSubnetChangeProtection'>>  = async params => {
  // undefined
    return this.client.updateSubnetChangeProtection(params as any).promise();
  }
  
  static fromClient(client: AWSNetworkFirewall): NetworkFirewall {
    return new NetworkFirewall(client) as any;
  }
  
  static client(options?: AWSNetworkFirewall.Types.ClientConfiguration): NetworkFirewall {
    return new NetworkFirewall(new AWSNetworkFirewall(options)) as any;
  }
}  
