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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRoute53Resolver> = AWSRoute53Resolver[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Route53Resolver {
  private constructor(private readonly client: AWSRoute53Resolver) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53resolver' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listFirewallConfigs","listFirewallDomainLists","listFirewallRuleGroupAssociations","listFirewallRuleGroups","listResolverConfigs","listResolverDnssecConfigs","listResolverEndpoints","listResolverQueryLogConfigAssociations","listResolverQueryLogConfigs","listResolverRuleAssociations","listResolverRules"] as const;
  
  associateFirewallRuleGroup: (params: RawParamsFrom<'associateFirewallRuleGroup'>) => Promise<ReturnTypeFrom<'associateFirewallRuleGroup'>>  = async params => {
  // undefined
    return this.client.associateFirewallRuleGroup(params as any).promise();
  }

  associateResolverEndpointIpAddress: (params: RawParamsFrom<'associateResolverEndpointIpAddress'>) => Promise<ReturnTypeFrom<'associateResolverEndpointIpAddress'>>  = async params => {
  // undefined
    return this.client.associateResolverEndpointIpAddress(params as any).promise();
  }

  associateResolverQueryLogConfig: (params: RawParamsFrom<'associateResolverQueryLogConfig'>) => Promise<ReturnTypeFrom<'associateResolverQueryLogConfig'>>  = async params => {
  // undefined
    return this.client.associateResolverQueryLogConfig(params as any).promise();
  }

  associateResolverRule: (params: RawParamsFrom<'associateResolverRule'>) => Promise<ReturnTypeFrom<'associateResolverRule'>>  = async params => {
  // undefined
    return this.client.associateResolverRule(params as any).promise();
  }

  createFirewallDomainList: (params: RawParamsFrom<'createFirewallDomainList'>) => Promise<ReturnTypeFrom<'createFirewallDomainList'>>  = async params => {
  // undefined
    return this.client.createFirewallDomainList(params as any).promise();
  }

  createFirewallRule: (params: RawParamsFrom<'createFirewallRule'>) => Promise<ReturnTypeFrom<'createFirewallRule'>>  = async params => {
  // undefined
    return this.client.createFirewallRule(params as any).promise();
  }

  createFirewallRuleGroup: (params: RawParamsFrom<'createFirewallRuleGroup'>) => Promise<ReturnTypeFrom<'createFirewallRuleGroup'>>  = async params => {
  // undefined
    return this.client.createFirewallRuleGroup(params as any).promise();
  }

  createResolverEndpoint: (params: RawParamsFrom<'createResolverEndpoint'>) => Promise<ReturnTypeFrom<'createResolverEndpoint'>>  = async params => {
  // undefined
    return this.client.createResolverEndpoint(params as any).promise();
  }

  createResolverQueryLogConfig: (params: RawParamsFrom<'createResolverQueryLogConfig'>) => Promise<ReturnTypeFrom<'createResolverQueryLogConfig'>>  = async params => {
  // undefined
    return this.client.createResolverQueryLogConfig(params as any).promise();
  }

  createResolverRule: (params: RawParamsFrom<'createResolverRule'>) => Promise<ReturnTypeFrom<'createResolverRule'>>  = async params => {
  // undefined
    return this.client.createResolverRule(params as any).promise();
  }

  deleteFirewallDomainList: (params: RawParamsFrom<'deleteFirewallDomainList'>) => Promise<ReturnTypeFrom<'deleteFirewallDomainList'>>  = async params => {
  // undefined
    return this.client.deleteFirewallDomainList(params as any).promise();
  }

  deleteFirewallRule: (params: RawParamsFrom<'deleteFirewallRule'>) => Promise<ReturnTypeFrom<'deleteFirewallRule'>>  = async params => {
  // undefined
    return this.client.deleteFirewallRule(params as any).promise();
  }

  deleteFirewallRuleGroup: (params: RawParamsFrom<'deleteFirewallRuleGroup'>) => Promise<ReturnTypeFrom<'deleteFirewallRuleGroup'>>  = async params => {
  // undefined
    return this.client.deleteFirewallRuleGroup(params as any).promise();
  }

  deleteResolverEndpoint: (params: RawParamsFrom<'deleteResolverEndpoint'>) => Promise<ReturnTypeFrom<'deleteResolverEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteResolverEndpoint(params as any).promise();
  }

  deleteResolverQueryLogConfig: (params: RawParamsFrom<'deleteResolverQueryLogConfig'>) => Promise<ReturnTypeFrom<'deleteResolverQueryLogConfig'>>  = async params => {
  // undefined
    return this.client.deleteResolverQueryLogConfig(params as any).promise();
  }

  deleteResolverRule: (params: RawParamsFrom<'deleteResolverRule'>) => Promise<ReturnTypeFrom<'deleteResolverRule'>>  = async params => {
  // undefined
    return this.client.deleteResolverRule(params as any).promise();
  }

  disassociateFirewallRuleGroup: (params: RawParamsFrom<'disassociateFirewallRuleGroup'>) => Promise<ReturnTypeFrom<'disassociateFirewallRuleGroup'>>  = async params => {
  // undefined
    return this.client.disassociateFirewallRuleGroup(params as any).promise();
  }

  disassociateResolverEndpointIpAddress: (params: RawParamsFrom<'disassociateResolverEndpointIpAddress'>) => Promise<ReturnTypeFrom<'disassociateResolverEndpointIpAddress'>>  = async params => {
  // undefined
    return this.client.disassociateResolverEndpointIpAddress(params as any).promise();
  }

  disassociateResolverQueryLogConfig: (params: RawParamsFrom<'disassociateResolverQueryLogConfig'>) => Promise<ReturnTypeFrom<'disassociateResolverQueryLogConfig'>>  = async params => {
  // undefined
    return this.client.disassociateResolverQueryLogConfig(params as any).promise();
  }

  disassociateResolverRule: (params: RawParamsFrom<'disassociateResolverRule'>) => Promise<ReturnTypeFrom<'disassociateResolverRule'>>  = async params => {
  // undefined
    return this.client.disassociateResolverRule(params as any).promise();
  }

  getFirewallConfig: (params: RawParamsFrom<'getFirewallConfig'>) => Promise<ReturnTypeFrom<'getFirewallConfig'>>  = async params => {
  // undefined
    return this.client.getFirewallConfig(params as any).promise();
  }

  getFirewallDomainList: (params: RawParamsFrom<'getFirewallDomainList'>) => Promise<ReturnTypeFrom<'getFirewallDomainList'>>  = async params => {
  // undefined
    return this.client.getFirewallDomainList(params as any).promise();
  }

  getFirewallRuleGroup: (params: RawParamsFrom<'getFirewallRuleGroup'>) => Promise<ReturnTypeFrom<'getFirewallRuleGroup'>>  = async params => {
  // undefined
    return this.client.getFirewallRuleGroup(params as any).promise();
  }

  getFirewallRuleGroupAssociation: (params: RawParamsFrom<'getFirewallRuleGroupAssociation'>) => Promise<ReturnTypeFrom<'getFirewallRuleGroupAssociation'>>  = async params => {
  // undefined
    return this.client.getFirewallRuleGroupAssociation(params as any).promise();
  }

  getFirewallRuleGroupPolicy: (params: RawParamsFrom<'getFirewallRuleGroupPolicy'>) => Promise<ReturnTypeFrom<'getFirewallRuleGroupPolicy'>>  = async params => {
  // undefined
    return this.client.getFirewallRuleGroupPolicy(params as any).promise();
  }

  getResolverConfig: (params: RawParamsFrom<'getResolverConfig'>) => Promise<ReturnTypeFrom<'getResolverConfig'>>  = async params => {
  // undefined
    return this.client.getResolverConfig(params as any).promise();
  }

  getResolverDnssecConfig: (params: RawParamsFrom<'getResolverDnssecConfig'>) => Promise<ReturnTypeFrom<'getResolverDnssecConfig'>>  = async params => {
  // undefined
    return this.client.getResolverDnssecConfig(params as any).promise();
  }

  getResolverEndpoint: (params: RawParamsFrom<'getResolverEndpoint'>) => Promise<ReturnTypeFrom<'getResolverEndpoint'>>  = async params => {
  // undefined
    return this.client.getResolverEndpoint(params as any).promise();
  }

  getResolverQueryLogConfig: (params: RawParamsFrom<'getResolverQueryLogConfig'>) => Promise<ReturnTypeFrom<'getResolverQueryLogConfig'>>  = async params => {
  // undefined
    return this.client.getResolverQueryLogConfig(params as any).promise();
  }

  getResolverQueryLogConfigAssociation: (params: RawParamsFrom<'getResolverQueryLogConfigAssociation'>) => Promise<ReturnTypeFrom<'getResolverQueryLogConfigAssociation'>>  = async params => {
  // undefined
    return this.client.getResolverQueryLogConfigAssociation(params as any).promise();
  }

  getResolverQueryLogConfigPolicy: (params: RawParamsFrom<'getResolverQueryLogConfigPolicy'>) => Promise<ReturnTypeFrom<'getResolverQueryLogConfigPolicy'>>  = async params => {
  // undefined
    return this.client.getResolverQueryLogConfigPolicy(params as any).promise();
  }

  getResolverRule: (params: RawParamsFrom<'getResolverRule'>) => Promise<ReturnTypeFrom<'getResolverRule'>>  = async params => {
  // undefined
    return this.client.getResolverRule(params as any).promise();
  }

  getResolverRuleAssociation: (params: RawParamsFrom<'getResolverRuleAssociation'>) => Promise<ReturnTypeFrom<'getResolverRuleAssociation'>>  = async params => {
  // undefined
    return this.client.getResolverRuleAssociation(params as any).promise();
  }

  getResolverRulePolicy: (params: RawParamsFrom<'getResolverRulePolicy'>) => Promise<ReturnTypeFrom<'getResolverRulePolicy'>>  = async params => {
  // undefined
    return this.client.getResolverRulePolicy(params as any).promise();
  }

  importFirewallDomains: (params: RawParamsFrom<'importFirewallDomains'>) => Promise<ReturnTypeFrom<'importFirewallDomains'>>  = async params => {
  // undefined
    return this.client.importFirewallDomains(params as any).promise();
  }

  async listFirewallConfigs(params: { [K in keyof ParamsFrom<'listFirewallConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listFirewallConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFirewallConfigs'>]-?: ReturnTypeFrom<'listFirewallConfigs'>[K]}['FirewallConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFirewallConfigs' })).toString('base64');
    const member = (Array.isArray(result.FirewallConfigs ?? []) ? (result.FirewallConfigs ?? []) : [result.FirewallConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallDomainLists(params: { [K in keyof ParamsFrom<'listFirewallDomainLists', { next?: string, limit?: number }>]: ParamsFrom<'listFirewallDomainLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFirewallDomainLists'>]-?: ReturnTypeFrom<'listFirewallDomainLists'>[K]}['FirewallDomainLists'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallDomainLists"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallDomainLists({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFirewallDomainLists' })).toString('base64');
    const member = (Array.isArray(result.FirewallDomainLists ?? []) ? (result.FirewallDomainLists ?? []) : [result.FirewallDomainLists]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallDomains(params: { [K in keyof ParamsFrom<'listFirewallDomains', { next?: string, limit?: number }>]: ParamsFrom<'listFirewallDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFirewallDomains'>]-?: ReturnTypeFrom<'listFirewallDomains'>[K]}['Domains'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Domains"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFirewallDomains' })).toString('base64');
    const member = (Array.isArray(result.Domains ?? []) ? (result.Domains ?? []) : [result.Domains]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallRuleGroupAssociations(params: { [K in keyof ParamsFrom<'listFirewallRuleGroupAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listFirewallRuleGroupAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFirewallRuleGroupAssociations'>]-?: ReturnTypeFrom<'listFirewallRuleGroupAssociations'>[K]}['FirewallRuleGroupAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallRuleGroupAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallRuleGroupAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFirewallRuleGroupAssociations' })).toString('base64');
    const member = (Array.isArray(result.FirewallRuleGroupAssociations ?? []) ? (result.FirewallRuleGroupAssociations ?? []) : [result.FirewallRuleGroupAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallRuleGroups(params: { [K in keyof ParamsFrom<'listFirewallRuleGroups', { next?: string, limit?: number }>]: ParamsFrom<'listFirewallRuleGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFirewallRuleGroups'>]-?: ReturnTypeFrom<'listFirewallRuleGroups'>[K]}['FirewallRuleGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallRuleGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallRuleGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFirewallRuleGroups' })).toString('base64');
    const member = (Array.isArray(result.FirewallRuleGroups ?? []) ? (result.FirewallRuleGroups ?? []) : [result.FirewallRuleGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFirewallRules(params: { [K in keyof ParamsFrom<'listFirewallRules', { next?: string, limit?: number }>]: ParamsFrom<'listFirewallRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFirewallRules'>]-?: ReturnTypeFrom<'listFirewallRules'>[K]}['FirewallRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FirewallRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFirewallRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFirewallRules' })).toString('base64');
    const member = (Array.isArray(result.FirewallRules ?? []) ? (result.FirewallRules ?? []) : [result.FirewallRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverConfigs(params: { [K in keyof ParamsFrom<'listResolverConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listResolverConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResolverConfigs'>]-?: ReturnTypeFrom<'listResolverConfigs'>[K]}['ResolverConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResolverConfigs' })).toString('base64');
    const member = (Array.isArray(result.ResolverConfigs ?? []) ? (result.ResolverConfigs ?? []) : [result.ResolverConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverDnssecConfigs(params: { [K in keyof ParamsFrom<'listResolverDnssecConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listResolverDnssecConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResolverDnssecConfigs'>]-?: ReturnTypeFrom<'listResolverDnssecConfigs'>[K]}['ResolverDnssecConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverDnssecConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverDnssecConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResolverDnssecConfigs' })).toString('base64');
    const member = (Array.isArray(result.ResolverDnssecConfigs ?? []) ? (result.ResolverDnssecConfigs ?? []) : [result.ResolverDnssecConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverEndpointIpAddresses(params: { [K in keyof ParamsFrom<'listResolverEndpointIpAddresses', { next?: string, limit?: number }>]: ParamsFrom<'listResolverEndpointIpAddresses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResolverEndpointIpAddresses'>]-?: ReturnTypeFrom<'listResolverEndpointIpAddresses'>[K]}['IpAddresses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpAddresses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverEndpointIpAddresses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResolverEndpointIpAddresses' })).toString('base64');
    const member = (Array.isArray(result.IpAddresses ?? []) ? (result.IpAddresses ?? []) : [result.IpAddresses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverEndpoints(params: { [K in keyof ParamsFrom<'listResolverEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'listResolverEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResolverEndpoints'>]-?: ReturnTypeFrom<'listResolverEndpoints'>[K]}['ResolverEndpoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverEndpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResolverEndpoints' })).toString('base64');
    const member = (Array.isArray(result.ResolverEndpoints ?? []) ? (result.ResolverEndpoints ?? []) : [result.ResolverEndpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverQueryLogConfigAssociations(params: { [K in keyof ParamsFrom<'listResolverQueryLogConfigAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listResolverQueryLogConfigAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResolverQueryLogConfigAssociations'>]-?: ReturnTypeFrom<'listResolverQueryLogConfigAssociations'>[K]}['ResolverQueryLogConfigAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverQueryLogConfigAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverQueryLogConfigAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResolverQueryLogConfigAssociations' })).toString('base64');
    const member = (Array.isArray(result.ResolverQueryLogConfigAssociations ?? []) ? (result.ResolverQueryLogConfigAssociations ?? []) : [result.ResolverQueryLogConfigAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverQueryLogConfigs(params: { [K in keyof ParamsFrom<'listResolverQueryLogConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listResolverQueryLogConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResolverQueryLogConfigs'>]-?: ReturnTypeFrom<'listResolverQueryLogConfigs'>[K]}['ResolverQueryLogConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverQueryLogConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverQueryLogConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResolverQueryLogConfigs' })).toString('base64');
    const member = (Array.isArray(result.ResolverQueryLogConfigs ?? []) ? (result.ResolverQueryLogConfigs ?? []) : [result.ResolverQueryLogConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverRuleAssociations(params: { [K in keyof ParamsFrom<'listResolverRuleAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listResolverRuleAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResolverRuleAssociations'>]-?: ReturnTypeFrom<'listResolverRuleAssociations'>[K]}['ResolverRuleAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverRuleAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverRuleAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResolverRuleAssociations' })).toString('base64');
    const member = (Array.isArray(result.ResolverRuleAssociations ?? []) ? (result.ResolverRuleAssociations ?? []) : [result.ResolverRuleAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResolverRules(params: { [K in keyof ParamsFrom<'listResolverRules', { next?: string, limit?: number }>]: ParamsFrom<'listResolverRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResolverRules'>]-?: ReturnTypeFrom<'listResolverRules'>[K]}['ResolverRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResolverRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResolverRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResolverRules' })).toString('base64');
    const member = (Array.isArray(result.ResolverRules ?? []) ? (result.ResolverRules ?? []) : [result.ResolverRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTagsForResource' })).toString('base64');
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putFirewallRuleGroupPolicy: (params: RawParamsFrom<'putFirewallRuleGroupPolicy'>) => Promise<ReturnTypeFrom<'putFirewallRuleGroupPolicy'>>  = async params => {
  // undefined
    return this.client.putFirewallRuleGroupPolicy(params as any).promise();
  }

  putResolverQueryLogConfigPolicy: (params: RawParamsFrom<'putResolverQueryLogConfigPolicy'>) => Promise<ReturnTypeFrom<'putResolverQueryLogConfigPolicy'>>  = async params => {
  // undefined
    return this.client.putResolverQueryLogConfigPolicy(params as any).promise();
  }

  putResolverRulePolicy: (params: RawParamsFrom<'putResolverRulePolicy'>) => Promise<ReturnTypeFrom<'putResolverRulePolicy'>>  = async params => {
  // undefined
    return this.client.putResolverRulePolicy(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateFirewallConfig: (params: RawParamsFrom<'updateFirewallConfig'>) => Promise<ReturnTypeFrom<'updateFirewallConfig'>>  = async params => {
  // undefined
    return this.client.updateFirewallConfig(params as any).promise();
  }

  updateFirewallDomains: (params: RawParamsFrom<'updateFirewallDomains'>) => Promise<ReturnTypeFrom<'updateFirewallDomains'>>  = async params => {
  // undefined
    return this.client.updateFirewallDomains(params as any).promise();
  }

  updateFirewallRule: (params: RawParamsFrom<'updateFirewallRule'>) => Promise<ReturnTypeFrom<'updateFirewallRule'>>  = async params => {
  // undefined
    return this.client.updateFirewallRule(params as any).promise();
  }

  updateFirewallRuleGroupAssociation: (params: RawParamsFrom<'updateFirewallRuleGroupAssociation'>) => Promise<ReturnTypeFrom<'updateFirewallRuleGroupAssociation'>>  = async params => {
  // undefined
    return this.client.updateFirewallRuleGroupAssociation(params as any).promise();
  }

  updateResolverConfig: (params: RawParamsFrom<'updateResolverConfig'>) => Promise<ReturnTypeFrom<'updateResolverConfig'>>  = async params => {
  // undefined
    return this.client.updateResolverConfig(params as any).promise();
  }

  updateResolverDnssecConfig: (params: RawParamsFrom<'updateResolverDnssecConfig'>) => Promise<ReturnTypeFrom<'updateResolverDnssecConfig'>>  = async params => {
  // undefined
    return this.client.updateResolverDnssecConfig(params as any).promise();
  }

  updateResolverEndpoint: (params: RawParamsFrom<'updateResolverEndpoint'>) => Promise<ReturnTypeFrom<'updateResolverEndpoint'>>  = async params => {
  // undefined
    return this.client.updateResolverEndpoint(params as any).promise();
  }

  updateResolverRule: (params: RawParamsFrom<'updateResolverRule'>) => Promise<ReturnTypeFrom<'updateResolverRule'>>  = async params => {
  // undefined
    return this.client.updateResolverRule(params as any).promise();
  }
  
  static fromClient(client: AWSRoute53Resolver): Route53Resolver {
    return new Route53Resolver(client) as any;
  }
  
  static client(options?: AWSRoute53Resolver.Types.ClientConfiguration): Route53Resolver {
    return new Route53Resolver(new AWSRoute53Resolver(options)) as any;
  }
}  
