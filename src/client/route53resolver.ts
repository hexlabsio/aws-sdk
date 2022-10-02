import { Request, Route53Resolver as AWSRoute53Resolver } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRoute53Resolver> = AWSRoute53Resolver[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRoute53Resolver> = AWSRoute53Resolver[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRoute53Resolver[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRoute53Resolver, Extras> = AWSRoute53Resolver[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'route53resolver';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listFirewallConfigs","listFirewallDomainLists","listFirewallRuleGroupAssociations","listFirewallRuleGroups","listResolverConfigs","listResolverDnssecConfigs","listResolverEndpoints","listResolverQueryLogConfigAssociations","listResolverQueryLogConfigs","listResolverRuleAssociations","listResolverRules"];
    
  associateFirewallRuleGroup: FunctionTypeFrom<'associateFirewallRuleGroup'>;

  associateResolverEndpointIpAddress: FunctionTypeFrom<'associateResolverEndpointIpAddress'>;

  associateResolverQueryLogConfig: FunctionTypeFrom<'associateResolverQueryLogConfig'>;

  associateResolverRule: FunctionTypeFrom<'associateResolverRule'>;

  createFirewallDomainList: FunctionTypeFrom<'createFirewallDomainList'>;

  createFirewallRule: FunctionTypeFrom<'createFirewallRule'>;

  createFirewallRuleGroup: FunctionTypeFrom<'createFirewallRuleGroup'>;

  createResolverEndpoint: FunctionTypeFrom<'createResolverEndpoint'>;

  createResolverQueryLogConfig: FunctionTypeFrom<'createResolverQueryLogConfig'>;

  createResolverRule: FunctionTypeFrom<'createResolverRule'>;

  deleteFirewallDomainList: FunctionTypeFrom<'deleteFirewallDomainList'>;

  deleteFirewallRule: FunctionTypeFrom<'deleteFirewallRule'>;

  deleteFirewallRuleGroup: FunctionTypeFrom<'deleteFirewallRuleGroup'>;

  deleteResolverEndpoint: FunctionTypeFrom<'deleteResolverEndpoint'>;

  deleteResolverQueryLogConfig: FunctionTypeFrom<'deleteResolverQueryLogConfig'>;

  deleteResolverRule: FunctionTypeFrom<'deleteResolverRule'>;

  disassociateFirewallRuleGroup: FunctionTypeFrom<'disassociateFirewallRuleGroup'>;

  disassociateResolverEndpointIpAddress: FunctionTypeFrom<'disassociateResolverEndpointIpAddress'>;

  disassociateResolverQueryLogConfig: FunctionTypeFrom<'disassociateResolverQueryLogConfig'>;

  disassociateResolverRule: FunctionTypeFrom<'disassociateResolverRule'>;

  getFirewallConfig: FunctionTypeFrom<'getFirewallConfig'>;

  getFirewallDomainList: FunctionTypeFrom<'getFirewallDomainList'>;

  getFirewallRuleGroup: FunctionTypeFrom<'getFirewallRuleGroup'>;

  getFirewallRuleGroupAssociation: FunctionTypeFrom<'getFirewallRuleGroupAssociation'>;

  getFirewallRuleGroupPolicy: FunctionTypeFrom<'getFirewallRuleGroupPolicy'>;

  getResolverConfig: FunctionTypeFrom<'getResolverConfig'>;

  getResolverDnssecConfig: FunctionTypeFrom<'getResolverDnssecConfig'>;

  getResolverEndpoint: FunctionTypeFrom<'getResolverEndpoint'>;

  getResolverQueryLogConfig: FunctionTypeFrom<'getResolverQueryLogConfig'>;

  getResolverQueryLogConfigAssociation: FunctionTypeFrom<'getResolverQueryLogConfigAssociation'>;

  getResolverQueryLogConfigPolicy: FunctionTypeFrom<'getResolverQueryLogConfigPolicy'>;

  getResolverRule: FunctionTypeFrom<'getResolverRule'>;

  getResolverRuleAssociation: FunctionTypeFrom<'getResolverRuleAssociation'>;

  getResolverRulePolicy: FunctionTypeFrom<'getResolverRulePolicy'>;

  importFirewallDomains: FunctionTypeFrom<'importFirewallDomains'>;

  listFirewallConfigs(params: { [K in keyof Omit<ParamsFrom<'listFirewallConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFirewallConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallConfigs'>]-?: ReturnTypeFrom<'listFirewallConfigs'>[K]}['FirewallConfigs'] }>
  listFirewallConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallConfigs'>]-?: ReturnTypeFrom<'listFirewallConfigs'>[K]}['FirewallConfigs'] }>;

  listFirewallDomainLists(params: { [K in keyof Omit<ParamsFrom<'listFirewallDomainLists', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFirewallDomainLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallDomainLists'>]-?: ReturnTypeFrom<'listFirewallDomainLists'>[K]}['FirewallDomainLists'] }>
  listFirewallDomainLists(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallDomainLists'>]-?: ReturnTypeFrom<'listFirewallDomainLists'>[K]}['FirewallDomainLists'] }>;

  listFirewallDomains(params: { [K in keyof Omit<ParamsFrom<'listFirewallDomains', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFirewallDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallDomains'>]-?: ReturnTypeFrom<'listFirewallDomains'>[K]}['Domains'] }>
  ;

  listFirewallRuleGroupAssociations(params: { [K in keyof Omit<ParamsFrom<'listFirewallRuleGroupAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFirewallRuleGroupAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallRuleGroupAssociations'>]-?: ReturnTypeFrom<'listFirewallRuleGroupAssociations'>[K]}['FirewallRuleGroupAssociations'] }>
  listFirewallRuleGroupAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallRuleGroupAssociations'>]-?: ReturnTypeFrom<'listFirewallRuleGroupAssociations'>[K]}['FirewallRuleGroupAssociations'] }>;

  listFirewallRuleGroups(params: { [K in keyof Omit<ParamsFrom<'listFirewallRuleGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFirewallRuleGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallRuleGroups'>]-?: ReturnTypeFrom<'listFirewallRuleGroups'>[K]}['FirewallRuleGroups'] }>
  listFirewallRuleGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallRuleGroups'>]-?: ReturnTypeFrom<'listFirewallRuleGroups'>[K]}['FirewallRuleGroups'] }>;

  listFirewallRules(params: { [K in keyof Omit<ParamsFrom<'listFirewallRules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFirewallRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFirewallRules'>]-?: ReturnTypeFrom<'listFirewallRules'>[K]}['FirewallRules'] }>
  ;

  listResolverConfigs(params: { [K in keyof Omit<ParamsFrom<'listResolverConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResolverConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverConfigs'>]-?: ReturnTypeFrom<'listResolverConfigs'>[K]}['ResolverConfigs'] }>
  listResolverConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverConfigs'>]-?: ReturnTypeFrom<'listResolverConfigs'>[K]}['ResolverConfigs'] }>;

  listResolverDnssecConfigs(params: { [K in keyof Omit<ParamsFrom<'listResolverDnssecConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResolverDnssecConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverDnssecConfigs'>]-?: ReturnTypeFrom<'listResolverDnssecConfigs'>[K]}['ResolverDnssecConfigs'] }>
  listResolverDnssecConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverDnssecConfigs'>]-?: ReturnTypeFrom<'listResolverDnssecConfigs'>[K]}['ResolverDnssecConfigs'] }>;

  listResolverEndpointIpAddresses(params: { [K in keyof Omit<ParamsFrom<'listResolverEndpointIpAddresses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResolverEndpointIpAddresses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverEndpointIpAddresses'>]-?: ReturnTypeFrom<'listResolverEndpointIpAddresses'>[K]}['IpAddresses'] }>
  ;

  listResolverEndpoints(params: { [K in keyof Omit<ParamsFrom<'listResolverEndpoints', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResolverEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverEndpoints'>]-?: ReturnTypeFrom<'listResolverEndpoints'>[K]}['ResolverEndpoints'] }>
  listResolverEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverEndpoints'>]-?: ReturnTypeFrom<'listResolverEndpoints'>[K]}['ResolverEndpoints'] }>;

  listResolverQueryLogConfigAssociations(params: { [K in keyof Omit<ParamsFrom<'listResolverQueryLogConfigAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResolverQueryLogConfigAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverQueryLogConfigAssociations'>]-?: ReturnTypeFrom<'listResolverQueryLogConfigAssociations'>[K]}['ResolverQueryLogConfigAssociations'] }>
  listResolverQueryLogConfigAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverQueryLogConfigAssociations'>]-?: ReturnTypeFrom<'listResolverQueryLogConfigAssociations'>[K]}['ResolverQueryLogConfigAssociations'] }>;

  listResolverQueryLogConfigs(params: { [K in keyof Omit<ParamsFrom<'listResolverQueryLogConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResolverQueryLogConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverQueryLogConfigs'>]-?: ReturnTypeFrom<'listResolverQueryLogConfigs'>[K]}['ResolverQueryLogConfigs'] }>
  listResolverQueryLogConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverQueryLogConfigs'>]-?: ReturnTypeFrom<'listResolverQueryLogConfigs'>[K]}['ResolverQueryLogConfigs'] }>;

  listResolverRuleAssociations(params: { [K in keyof Omit<ParamsFrom<'listResolverRuleAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResolverRuleAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverRuleAssociations'>]-?: ReturnTypeFrom<'listResolverRuleAssociations'>[K]}['ResolverRuleAssociations'] }>
  listResolverRuleAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverRuleAssociations'>]-?: ReturnTypeFrom<'listResolverRuleAssociations'>[K]}['ResolverRuleAssociations'] }>;

  listResolverRules(params: { [K in keyof Omit<ParamsFrom<'listResolverRules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResolverRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverRules'>]-?: ReturnTypeFrom<'listResolverRules'>[K]}['ResolverRules'] }>
  listResolverRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResolverRules'>]-?: ReturnTypeFrom<'listResolverRules'>[K]}['ResolverRules'] }>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  putFirewallRuleGroupPolicy: FunctionTypeFrom<'putFirewallRuleGroupPolicy'>;

  putResolverQueryLogConfigPolicy: FunctionTypeFrom<'putResolverQueryLogConfigPolicy'>;

  putResolverRulePolicy: FunctionTypeFrom<'putResolverRulePolicy'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateFirewallConfig: FunctionTypeFrom<'updateFirewallConfig'>;

  updateFirewallDomains: FunctionTypeFrom<'updateFirewallDomains'>;

  updateFirewallRule: FunctionTypeFrom<'updateFirewallRule'>;

  updateFirewallRuleGroupAssociation: FunctionTypeFrom<'updateFirewallRuleGroupAssociation'>;

  updateResolverConfig: FunctionTypeFrom<'updateResolverConfig'>;

  updateResolverDnssecConfig: FunctionTypeFrom<'updateResolverDnssecConfig'>;

  updateResolverEndpoint: FunctionTypeFrom<'updateResolverEndpoint'>;

  updateResolverRule: FunctionTypeFrom<'updateResolverRule'>
}
 
export class Route53Resolver implements ClientType {
  private constructor(private readonly client: AWSRoute53Resolver) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53resolver';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listFirewallConfigs","listFirewallDomainLists","listFirewallRuleGroupAssociations","listFirewallRuleGroups","listResolverConfigs","listResolverDnssecConfigs","listResolverEndpoints","listResolverQueryLogConfigAssociations","listResolverQueryLogConfigs","listResolverRuleAssociations","listResolverRules"] as const;
  
  async associateFirewallRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.associateFirewallRuleGroup(...args).promise()
  }

  async associateResolverEndpointIpAddress(...args: any): Promise<any> {
  // undefined
    return this.client.associateResolverEndpointIpAddress(...args).promise()
  }

  async associateResolverQueryLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.associateResolverQueryLogConfig(...args).promise()
  }

  async associateResolverRule(...args: any): Promise<any> {
  // undefined
    return this.client.associateResolverRule(...args).promise()
  }

  async createFirewallDomainList(...args: any): Promise<any> {
  // undefined
    return this.client.createFirewallDomainList(...args).promise()
  }

  async createFirewallRule(...args: any): Promise<any> {
  // undefined
    return this.client.createFirewallRule(...args).promise()
  }

  async createFirewallRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createFirewallRuleGroup(...args).promise()
  }

  async createResolverEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createResolverEndpoint(...args).promise()
  }

  async createResolverQueryLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createResolverQueryLogConfig(...args).promise()
  }

  async createResolverRule(...args: any): Promise<any> {
  // undefined
    return this.client.createResolverRule(...args).promise()
  }

  async deleteFirewallDomainList(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFirewallDomainList(...args).promise()
  }

  async deleteFirewallRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFirewallRule(...args).promise()
  }

  async deleteFirewallRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFirewallRuleGroup(...args).promise()
  }

  async deleteResolverEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResolverEndpoint(...args).promise()
  }

  async deleteResolverQueryLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResolverQueryLogConfig(...args).promise()
  }

  async deleteResolverRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResolverRule(...args).promise()
  }

  async disassociateFirewallRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateFirewallRuleGroup(...args).promise()
  }

  async disassociateResolverEndpointIpAddress(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateResolverEndpointIpAddress(...args).promise()
  }

  async disassociateResolverQueryLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateResolverQueryLogConfig(...args).promise()
  }

  async disassociateResolverRule(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateResolverRule(...args).promise()
  }

  async getFirewallConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getFirewallConfig(...args).promise()
  }

  async getFirewallDomainList(...args: any): Promise<any> {
  // undefined
    return this.client.getFirewallDomainList(...args).promise()
  }

  async getFirewallRuleGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getFirewallRuleGroup(...args).promise()
  }

  async getFirewallRuleGroupAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.getFirewallRuleGroupAssociation(...args).promise()
  }

  async getFirewallRuleGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getFirewallRuleGroupPolicy(...args).promise()
  }

  async getResolverConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverConfig(...args).promise()
  }

  async getResolverDnssecConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverDnssecConfig(...args).promise()
  }

  async getResolverEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverEndpoint(...args).promise()
  }

  async getResolverQueryLogConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverQueryLogConfig(...args).promise()
  }

  async getResolverQueryLogConfigAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverQueryLogConfigAssociation(...args).promise()
  }

  async getResolverQueryLogConfigPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverQueryLogConfigPolicy(...args).promise()
  }

  async getResolverRule(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverRule(...args).promise()
  }

  async getResolverRuleAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverRuleAssociation(...args).promise()
  }

  async getResolverRulePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResolverRulePolicy(...args).promise()
  }

  async importFirewallDomains(...args: any): Promise<any> {
  // undefined
    return this.client.importFirewallDomains(...args).promise()
  }

  async listFirewallConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FirewallConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallDomainLists(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallDomainLists"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallDomainLists(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FirewallDomainLists ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallDomains(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Domains"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallDomains(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Domains ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallRuleGroupAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallRuleGroupAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallRuleGroupAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FirewallRuleGroupAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallRuleGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallRuleGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallRuleGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FirewallRuleGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FirewallRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResolverConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverDnssecConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverDnssecConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverDnssecConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResolverDnssecConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverEndpointIpAddresses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpAddresses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverEndpointIpAddresses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IpAddresses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverEndpoints(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverEndpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResolverEndpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverQueryLogConfigAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverQueryLogConfigAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverQueryLogConfigAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResolverQueryLogConfigAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverQueryLogConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverQueryLogConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverQueryLogConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResolverQueryLogConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverRuleAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverRuleAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverRuleAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResolverRuleAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResolverRules ?? [];
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

  async putFirewallRuleGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putFirewallRuleGroupPolicy(...args).promise()
  }

  async putResolverQueryLogConfigPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResolverQueryLogConfigPolicy(...args).promise()
  }

  async putResolverRulePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResolverRulePolicy(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateFirewallConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallConfig(...args).promise()
  }

  async updateFirewallDomains(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallDomains(...args).promise()
  }

  async updateFirewallRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallRule(...args).promise()
  }

  async updateFirewallRuleGroupAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.updateFirewallRuleGroupAssociation(...args).promise()
  }

  async updateResolverConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateResolverConfig(...args).promise()
  }

  async updateResolverDnssecConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateResolverDnssecConfig(...args).promise()
  }

  async updateResolverEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.updateResolverEndpoint(...args).promise()
  }

  async updateResolverRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateResolverRule(...args).promise()
  }
  
  static fromClient(client: AWSRoute53Resolver): ClientType {
    return new Route53Resolver(client) as any;
  }
  
  static client(options?: AWSRoute53Resolver.Types.ClientConfiguration): ClientType {
    return new Route53Resolver(new AWSRoute53Resolver(options)) as any;
  }
}  
