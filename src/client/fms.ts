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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'fms';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listMemberAccounts","listPolicies"];
    
  associateAdminAccount: FunctionTypeFrom<'associateAdminAccount'>;

  associateThirdPartyFirewall: FunctionTypeFrom<'associateThirdPartyFirewall'>;

  deleteAppsList: FunctionTypeFrom<'deleteAppsList'>;

  deleteNotificationChannel: FunctionTypeFrom<'deleteNotificationChannel'>;

  deletePolicy: FunctionTypeFrom<'deletePolicy'>;

  deleteProtocolsList: FunctionTypeFrom<'deleteProtocolsList'>;

  disassociateAdminAccount: FunctionTypeFrom<'disassociateAdminAccount'>;

  disassociateThirdPartyFirewall: FunctionTypeFrom<'disassociateThirdPartyFirewall'>;

  getAdminAccount: FunctionTypeFrom<'getAdminAccount'>;

  getAppsList: FunctionTypeFrom<'getAppsList'>;

  getComplianceDetail: FunctionTypeFrom<'getComplianceDetail'>;

  getNotificationChannel: FunctionTypeFrom<'getNotificationChannel'>;

  getPolicy: FunctionTypeFrom<'getPolicy'>;

  getProtectionStatus: FunctionTypeFrom<'getProtectionStatus'>;

  getProtocolsList: FunctionTypeFrom<'getProtocolsList'>;

  getThirdPartyFirewallAssociationStatus: FunctionTypeFrom<'getThirdPartyFirewallAssociationStatus'>;

  getViolationDetails: FunctionTypeFrom<'getViolationDetails'>;

  listAppsLists(params: { [K in keyof Omit<ParamsFrom<'listAppsLists', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAppsLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAppsLists'>]-?: ReturnTypeFrom<'listAppsLists'>[K]}['AppsLists'] }>
  ;

  listComplianceStatus(params: { [K in keyof Omit<ParamsFrom<'listComplianceStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listComplianceStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComplianceStatus'>]-?: ReturnTypeFrom<'listComplianceStatus'>[K]}['PolicyComplianceStatusList'] }>
  ;

  listMemberAccounts(params: { [K in keyof Omit<ParamsFrom<'listMemberAccounts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMemberAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMemberAccounts'>]-?: ReturnTypeFrom<'listMemberAccounts'>[K]}['MemberAccounts'] }>
  listMemberAccounts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMemberAccounts'>]-?: ReturnTypeFrom<'listMemberAccounts'>[K]}['MemberAccounts'] }>;

  listPolicies(params: { [K in keyof Omit<ParamsFrom<'listPolicies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['PolicyList'] }>
  listPolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['PolicyList'] }>;

  listProtocolsLists(params: { [K in keyof Omit<ParamsFrom<'listProtocolsLists', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProtocolsLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProtocolsLists'>]-?: ReturnTypeFrom<'listProtocolsLists'>[K]}['ProtocolsLists'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listThirdPartyFirewallFirewallPolicies(params: { [K in keyof Omit<ParamsFrom<'listThirdPartyFirewallFirewallPolicies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listThirdPartyFirewallFirewallPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThirdPartyFirewallFirewallPolicies'>]-?: ReturnTypeFrom<'listThirdPartyFirewallFirewallPolicies'>[K]}['ThirdPartyFirewallFirewallPolicies'] }>
  ;

  putAppsList: FunctionTypeFrom<'putAppsList'>;

  putNotificationChannel: FunctionTypeFrom<'putNotificationChannel'>;

  putPolicy: FunctionTypeFrom<'putPolicy'>;

  putProtocolsList: FunctionTypeFrom<'putProtocolsList'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class FMS implements ClientType {
  private constructor(private readonly client: AWSFMS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'fms';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listMemberAccounts","listPolicies"] as const;
  
  async associateAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.associateAdminAccount(...args).promise()
  }

  async associateThirdPartyFirewall(...args: any): Promise<any> {
  // undefined
    return this.client.associateThirdPartyFirewall(...args).promise()
  }

  async deleteAppsList(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppsList(...args).promise()
  }

  async deleteNotificationChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNotificationChannel(...args).promise()
  }

  async deletePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicy(...args).promise()
  }

  async deleteProtocolsList(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProtocolsList(...args).promise()
  }

  async disassociateAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateAdminAccount(...args).promise()
  }

  async disassociateThirdPartyFirewall(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateThirdPartyFirewall(...args).promise()
  }

  async getAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getAdminAccount(...args).promise()
  }

  async getAppsList(...args: any): Promise<any> {
  // undefined
    return this.client.getAppsList(...args).promise()
  }

  async getComplianceDetail(...args: any): Promise<any> {
  // undefined
    return this.client.getComplianceDetail(...args).promise()
  }

  async getNotificationChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getNotificationChannel(...args).promise()
  }

  async getPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicy(...args).promise()
  }

  async getProtectionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getProtectionStatus(...args).promise()
  }

  async getProtocolsList(...args: any): Promise<any> {
  // undefined
    return this.client.getProtocolsList(...args).promise()
  }

  async getThirdPartyFirewallAssociationStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getThirdPartyFirewallAssociationStatus(...args).promise()
  }

  async getViolationDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getViolationDetails(...args).promise()
  }

  async listAppsLists(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AppsLists"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAppsLists(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AppsLists ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComplianceStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PolicyComplianceStatusList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listComplianceStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PolicyComplianceStatusList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMemberAccounts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MemberAccounts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMemberAccounts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.MemberAccounts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PolicyList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PolicyList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProtocolsLists(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProtocolsLists"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProtocolsLists(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ProtocolsLists ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listThirdPartyFirewallFirewallPolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ThirdPartyFirewallFirewallPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listThirdPartyFirewallFirewallPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ThirdPartyFirewallFirewallPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putAppsList(...args: any): Promise<any> {
  // undefined
    return this.client.putAppsList(...args).promise()
  }

  async putNotificationChannel(...args: any): Promise<any> {
  // undefined
    return this.client.putNotificationChannel(...args).promise()
  }

  async putPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putPolicy(...args).promise()
  }

  async putProtocolsList(...args: any): Promise<any> {
  // undefined
    return this.client.putProtocolsList(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSFMS): ClientType {
    return new FMS(client) as any;
  }
  
  static client(options?: AWSFMS.Types.ClientConfiguration): ClientType {
    return new FMS(new AWSFMS(options)) as any;
  }
}  
