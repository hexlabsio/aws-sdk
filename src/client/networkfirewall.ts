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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'network-firewall';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listFirewallPolicies","listFirewalls","listRuleGroups"];
    
  associateFirewallPolicy: FunctionTypeFrom<'associateFirewallPolicy'>;

  associateSubnets: FunctionTypeFrom<'associateSubnets'>;

  createFirewall: FunctionTypeFrom<'createFirewall'>;

  createFirewallPolicy: FunctionTypeFrom<'createFirewallPolicy'>;

  createRuleGroup: FunctionTypeFrom<'createRuleGroup'>;

  deleteFirewall: FunctionTypeFrom<'deleteFirewall'>;

  deleteFirewallPolicy: FunctionTypeFrom<'deleteFirewallPolicy'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteRuleGroup: FunctionTypeFrom<'deleteRuleGroup'>;

  describeFirewall: FunctionTypeFrom<'describeFirewall'>;

  describeFirewallPolicy: FunctionTypeFrom<'describeFirewallPolicy'>;

  describeLoggingConfiguration: FunctionTypeFrom<'describeLoggingConfiguration'>;

  describeResourcePolicy: FunctionTypeFrom<'describeResourcePolicy'>;

  describeRuleGroup: FunctionTypeFrom<'describeRuleGroup'>;

  describeRuleGroupMetadata: FunctionTypeFrom<'describeRuleGroupMetadata'>;

  disassociateSubnets: FunctionTypeFrom<'disassociateSubnets'>;

  listFirewallPolicies(params: { [K in keyof Omit<ParamsFrom<'listFirewallPolicies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFirewallPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallPolicies'>]-?: ReturnTypeFrom<'listFirewallPolicies'>[K]}['FirewallPolicies'] }>
  listFirewallPolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallPolicies'>]-?: ReturnTypeFrom<'listFirewallPolicies'>[K]}['FirewallPolicies'] }>;

  listFirewalls(params: { [K in keyof Omit<ParamsFrom<'listFirewalls', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFirewalls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewalls'>]-?: ReturnTypeFrom<'listFirewalls'>[K]}['Firewalls'] }>
  listFirewalls(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewalls'>]-?: ReturnTypeFrom<'listFirewalls'>[K]}['Firewalls'] }>;

  listRuleGroups(params: { [K in keyof Omit<ParamsFrom<'listRuleGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRuleGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRuleGroups'>]-?: ReturnTypeFrom<'listRuleGroups'>[K]}['RuleGroups'] }>
  listRuleGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRuleGroups'>]-?: ReturnTypeFrom<'listRuleGroups'>[K]}['RuleGroups'] }>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateFirewallDeleteProtection: FunctionTypeFrom<'updateFirewallDeleteProtection'>;

  updateFirewallDescription: FunctionTypeFrom<'updateFirewallDescription'>;

  updateFirewallEncryptionConfiguration: FunctionTypeFrom<'updateFirewallEncryptionConfiguration'>;

  updateFirewallPolicy: FunctionTypeFrom<'updateFirewallPolicy'>;

  updateFirewallPolicyChangeProtection: FunctionTypeFrom<'updateFirewallPolicyChangeProtection'>;

  updateLoggingConfiguration: FunctionTypeFrom<'updateLoggingConfiguration'>;

  updateRuleGroup: FunctionTypeFrom<'updateRuleGroup'>;

  updateSubnetChangeProtection: FunctionTypeFrom<'updateSubnetChangeProtection'>
}
 
export class NetworkFirewall implements ClientType {
  private constructor(private readonly client: AWSNetworkFirewall) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'network-firewall';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listFirewallPolicies","listFirewalls","listRuleGroups"] as const;
  
  async associateFirewallPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.associateFirewallPolicy(...args).promise()
  }

  async associateSubnets(...args: any): Promise<any> {
  // undefined
    return this.client.associateSubnets(...args).promise()
  }

  async createFirewall(...args: any): Promise<any> {
  // undefined
    return this.client.createFirewall(...args).promise()
  }

  async createFirewallPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createFirewallPolicy(...args).promise()
  }

  async createRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createRuleGroup(...args).promise()
  }

  async deleteFirewall(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFirewall(...args).promise()
  }

  async deleteFirewallPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFirewallPolicy(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRuleGroup(...args).promise()
  }

  async describeFirewall(...args: any): Promise<any> {
  // undefined
    return this.client.describeFirewall(...args).promise()
  }

  async describeFirewallPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeFirewallPolicy(...args).promise()
  }

  async describeLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoggingConfiguration(...args).promise()
  }

  async describeResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeResourcePolicy(...args).promise()
  }

  async describeRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeRuleGroup(...args).promise()
  }

  async describeRuleGroupMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.describeRuleGroupMetadata(...args).promise()
  }

  async disassociateSubnets(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateSubnets(...args).promise()
  }

  async listFirewallPolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FirewallPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewalls(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Firewalls"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewalls(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Firewalls ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRuleGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RuleGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRuleGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RuleGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateFirewallDeleteProtection(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallDeleteProtection(...args).promise()
  }

  async updateFirewallDescription(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallDescription(...args).promise()
  }

  async updateFirewallEncryptionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallEncryptionConfiguration(...args).promise()
  }

  async updateFirewallPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallPolicy(...args).promise()
  }

  async updateFirewallPolicyChangeProtection(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallPolicyChangeProtection(...args).promise()
  }

  async updateLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateLoggingConfiguration(...args).promise()
  }

  async updateRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateRuleGroup(...args).promise()
  }

  async updateSubnetChangeProtection(...args: any): Promise<any> {
  // undefined
    return this.client.updateSubnetChangeProtection(...args).promise()
  }
  
  static fromClient(client: AWSNetworkFirewall): ClientType {
    return new NetworkFirewall(client) as any;
  }
  
  static client(options?: AWSNetworkFirewall.Types.ClientConfiguration): ClientType {
    return new NetworkFirewall(new AWSNetworkFirewall(options)) as any;
  }
}  
