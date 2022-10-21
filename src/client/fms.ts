import { Request, FMS as AWSFMS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSFMS> = AWSFMS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSFMS> = AWSFMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSFMS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSFMS, Extras> = AWSFMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSFMS> = AWSFMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class FMS {
  private constructor(private readonly client: AWSFMS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'fms' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listMemberAccounts","listPolicies"] as const;
  
  associateAdminAccount: (params: RawParamsFrom<'associateAdminAccount'>) => Promise<ReturnTypeFrom<'associateAdminAccount'>>  = async params => {
  // undefined
    return this.client.associateAdminAccount(params as any).promise();
  }

  associateThirdPartyFirewall: (params: RawParamsFrom<'associateThirdPartyFirewall'>) => Promise<ReturnTypeFrom<'associateThirdPartyFirewall'>>  = async params => {
  // undefined
    return this.client.associateThirdPartyFirewall(params as any).promise();
  }

  deleteAppsList: (params: RawParamsFrom<'deleteAppsList'>) => Promise<ReturnTypeFrom<'deleteAppsList'>>  = async params => {
  // undefined
    return this.client.deleteAppsList(params as any).promise();
  }

  deleteNotificationChannel: (params: RawParamsFrom<'deleteNotificationChannel'>) => Promise<ReturnTypeFrom<'deleteNotificationChannel'>>  = async params => {
  // undefined
    return this.client.deleteNotificationChannel(params as any).promise();
  }

  deletePolicy: (params: RawParamsFrom<'deletePolicy'>) => Promise<ReturnTypeFrom<'deletePolicy'>>  = async params => {
  // undefined
    return this.client.deletePolicy(params as any).promise();
  }

  deleteProtocolsList: (params: RawParamsFrom<'deleteProtocolsList'>) => Promise<ReturnTypeFrom<'deleteProtocolsList'>>  = async params => {
  // undefined
    return this.client.deleteProtocolsList(params as any).promise();
  }

  disassociateAdminAccount: (params: RawParamsFrom<'disassociateAdminAccount'>) => Promise<ReturnTypeFrom<'disassociateAdminAccount'>>  = async params => {
  // undefined
    return this.client.disassociateAdminAccount(params as any).promise();
  }

  disassociateThirdPartyFirewall: (params: RawParamsFrom<'disassociateThirdPartyFirewall'>) => Promise<ReturnTypeFrom<'disassociateThirdPartyFirewall'>>  = async params => {
  // undefined
    return this.client.disassociateThirdPartyFirewall(params as any).promise();
  }

  getAdminAccount: (params: RawParamsFrom<'getAdminAccount'>) => Promise<ReturnTypeFrom<'getAdminAccount'>>  = async params => {
  // undefined
    return this.client.getAdminAccount(params as any).promise();
  }

  getAppsList: (params: RawParamsFrom<'getAppsList'>) => Promise<ReturnTypeFrom<'getAppsList'>>  = async params => {
  // undefined
    return this.client.getAppsList(params as any).promise();
  }

  getComplianceDetail: (params: RawParamsFrom<'getComplianceDetail'>) => Promise<ReturnTypeFrom<'getComplianceDetail'>>  = async params => {
  // undefined
    return this.client.getComplianceDetail(params as any).promise();
  }

  getNotificationChannel: (params: RawParamsFrom<'getNotificationChannel'>) => Promise<ReturnTypeFrom<'getNotificationChannel'>>  = async params => {
  // undefined
    return this.client.getNotificationChannel(params as any).promise();
  }

  getPolicy: (params: RawParamsFrom<'getPolicy'>) => Promise<ReturnTypeFrom<'getPolicy'>>  = async params => {
  // undefined
    return this.client.getPolicy(params as any).promise();
  }

  getProtectionStatus: (params: RawParamsFrom<'getProtectionStatus'>) => Promise<ReturnTypeFrom<'getProtectionStatus'>>  = async params => {
  // undefined
    return this.client.getProtectionStatus(params as any).promise();
  }

  getProtocolsList: (params: RawParamsFrom<'getProtocolsList'>) => Promise<ReturnTypeFrom<'getProtocolsList'>>  = async params => {
  // undefined
    return this.client.getProtocolsList(params as any).promise();
  }

  getThirdPartyFirewallAssociationStatus: (params: RawParamsFrom<'getThirdPartyFirewallAssociationStatus'>) => Promise<ReturnTypeFrom<'getThirdPartyFirewallAssociationStatus'>>  = async params => {
  // undefined
    return this.client.getThirdPartyFirewallAssociationStatus(params as any).promise();
  }

  getViolationDetails: (params: RawParamsFrom<'getViolationDetails'>) => Promise<ReturnTypeFrom<'getViolationDetails'>>  = async params => {
  // undefined
    return this.client.getViolationDetails(params as any).promise();
  }

  async listAppsLists(params: { [K in keyof ParamsFrom<'listAppsLists', { next?: string, limit?: number }>]: ParamsFrom<'listAppsLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAppsLists'>]-?: ReturnTypeFrom<'listAppsLists'>[K]}['AppsLists'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AppsLists"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAppsLists({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.AppsLists ?? []) ? (result.AppsLists ?? []) : [result.AppsLists]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listComplianceStatus(params: { [K in keyof ParamsFrom<'listComplianceStatus', { next?: string, limit?: number }>]: ParamsFrom<'listComplianceStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComplianceStatus'>]-?: ReturnTypeFrom<'listComplianceStatus'>[K]}['PolicyComplianceStatusList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PolicyComplianceStatusList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listComplianceStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.PolicyComplianceStatusList ?? []) ? (result.PolicyComplianceStatusList ?? []) : [result.PolicyComplianceStatusList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listMemberAccounts(params: { [K in keyof ParamsFrom<'listMemberAccounts', { next?: string, limit?: number }>]: ParamsFrom<'listMemberAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMemberAccounts'>]-?: ReturnTypeFrom<'listMemberAccounts'>[K]}['MemberAccounts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MemberAccounts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMemberAccounts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.MemberAccounts ?? []) ? (result.MemberAccounts ?? []) : [result.MemberAccounts]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPolicies(params: { [K in keyof ParamsFrom<'listPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['PolicyList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PolicyList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.PolicyList ?? []) ? (result.PolicyList ?? []) : [result.PolicyList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listProtocolsLists(params: { [K in keyof ParamsFrom<'listProtocolsLists', { next?: string, limit?: number }>]: ParamsFrom<'listProtocolsLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProtocolsLists'>]-?: ReturnTypeFrom<'listProtocolsLists'>[K]}['ProtocolsLists'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProtocolsLists"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProtocolsLists({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ProtocolsLists ?? []) ? (result.ProtocolsLists ?? []) : [result.ProtocolsLists]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listThirdPartyFirewallFirewallPolicies(params: { [K in keyof ParamsFrom<'listThirdPartyFirewallFirewallPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listThirdPartyFirewallFirewallPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThirdPartyFirewallFirewallPolicies'>]-?: ReturnTypeFrom<'listThirdPartyFirewallFirewallPolicies'>[K]}['ThirdPartyFirewallFirewallPolicies'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ThirdPartyFirewallFirewallPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listThirdPartyFirewallFirewallPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ThirdPartyFirewallFirewallPolicies ?? []) ? (result.ThirdPartyFirewallFirewallPolicies ?? []) : [result.ThirdPartyFirewallFirewallPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putAppsList: (params: RawParamsFrom<'putAppsList'>) => Promise<ReturnTypeFrom<'putAppsList'>>  = async params => {
  // undefined
    return this.client.putAppsList(params as any).promise();
  }

  putNotificationChannel: (params: RawParamsFrom<'putNotificationChannel'>) => Promise<ReturnTypeFrom<'putNotificationChannel'>>  = async params => {
  // undefined
    return this.client.putNotificationChannel(params as any).promise();
  }

  putPolicy: (params: RawParamsFrom<'putPolicy'>) => Promise<ReturnTypeFrom<'putPolicy'>>  = async params => {
  // undefined
    return this.client.putPolicy(params as any).promise();
  }

  putProtocolsList: (params: RawParamsFrom<'putProtocolsList'>) => Promise<ReturnTypeFrom<'putProtocolsList'>>  = async params => {
  // undefined
    return this.client.putProtocolsList(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSFMS): FMS {
    return new FMS(client) as any;
  }
  
  static client(options?: AWSFMS.Types.ClientConfiguration): FMS {
    return new FMS(new AWSFMS(options)) as any;
  }
}  
