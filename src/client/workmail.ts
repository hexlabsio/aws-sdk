import { Request, WorkMail as AWSWorkMail } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWorkMail> = AWSWorkMail[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWorkMail> = AWSWorkMail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWorkMail[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWorkMail, Extras> = AWSWorkMail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'workmail';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listOrganizations"];
    
  associateDelegateToResource: FunctionTypeFrom<'associateDelegateToResource'>;

  associateMemberToGroup: FunctionTypeFrom<'associateMemberToGroup'>;

  cancelMailboxExportJob: FunctionTypeFrom<'cancelMailboxExportJob'>;

  createAlias: FunctionTypeFrom<'createAlias'>;

  createAvailabilityConfiguration: FunctionTypeFrom<'createAvailabilityConfiguration'>;

  createGroup: FunctionTypeFrom<'createGroup'>;

  createMobileDeviceAccessRule: FunctionTypeFrom<'createMobileDeviceAccessRule'>;

  createOrganization: FunctionTypeFrom<'createOrganization'>;

  createResource: FunctionTypeFrom<'createResource'>;

  createUser: FunctionTypeFrom<'createUser'>;

  deleteAccessControlRule: FunctionTypeFrom<'deleteAccessControlRule'>;

  deleteAlias: FunctionTypeFrom<'deleteAlias'>;

  deleteAvailabilityConfiguration: FunctionTypeFrom<'deleteAvailabilityConfiguration'>;

  deleteEmailMonitoringConfiguration: FunctionTypeFrom<'deleteEmailMonitoringConfiguration'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  deleteMailboxPermissions: FunctionTypeFrom<'deleteMailboxPermissions'>;

  deleteMobileDeviceAccessOverride: FunctionTypeFrom<'deleteMobileDeviceAccessOverride'>;

  deleteMobileDeviceAccessRule: FunctionTypeFrom<'deleteMobileDeviceAccessRule'>;

  deleteOrganization: FunctionTypeFrom<'deleteOrganization'>;

  deleteResource: FunctionTypeFrom<'deleteResource'>;

  deleteRetentionPolicy: FunctionTypeFrom<'deleteRetentionPolicy'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  deregisterFromWorkMail: FunctionTypeFrom<'deregisterFromWorkMail'>;

  deregisterMailDomain: FunctionTypeFrom<'deregisterMailDomain'>;

  describeEmailMonitoringConfiguration: FunctionTypeFrom<'describeEmailMonitoringConfiguration'>;

  describeGroup: FunctionTypeFrom<'describeGroup'>;

  describeInboundDmarcSettings: FunctionTypeFrom<'describeInboundDmarcSettings'>;

  describeMailboxExportJob: FunctionTypeFrom<'describeMailboxExportJob'>;

  describeOrganization: FunctionTypeFrom<'describeOrganization'>;

  describeResource: FunctionTypeFrom<'describeResource'>;

  describeUser: FunctionTypeFrom<'describeUser'>;

  disassociateDelegateFromResource: FunctionTypeFrom<'disassociateDelegateFromResource'>;

  disassociateMemberFromGroup: FunctionTypeFrom<'disassociateMemberFromGroup'>;

  getAccessControlEffect: FunctionTypeFrom<'getAccessControlEffect'>;

  getDefaultRetentionPolicy: FunctionTypeFrom<'getDefaultRetentionPolicy'>;

  getMailDomain: FunctionTypeFrom<'getMailDomain'>;

  getMailboxDetails: FunctionTypeFrom<'getMailboxDetails'>;

  getMobileDeviceAccessEffect: FunctionTypeFrom<'getMobileDeviceAccessEffect'>;

  getMobileDeviceAccessOverride: FunctionTypeFrom<'getMobileDeviceAccessOverride'>;

  listAccessControlRules: FunctionTypeFrom<'listAccessControlRules'>;

  listAliases: FunctionTypeFrom<'listAliases'>;

  listAvailabilityConfigurations(params: { [K in keyof Omit<ParamsFrom<'listAvailabilityConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAvailabilityConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAvailabilityConfigurations'>]-?: ReturnTypeFrom<'listAvailabilityConfigurations'>[K]}['AvailabilityConfigurations'] }>
  ;

  listGroupMembers: FunctionTypeFrom<'listGroupMembers'>;

  listGroups: FunctionTypeFrom<'listGroups'>;

  listMailDomains: FunctionTypeFrom<'listMailDomains'>;

  listMailboxExportJobs: FunctionTypeFrom<'listMailboxExportJobs'>;

  listMailboxPermissions: FunctionTypeFrom<'listMailboxPermissions'>;

  listMobileDeviceAccessOverrides: FunctionTypeFrom<'listMobileDeviceAccessOverrides'>;

  listMobileDeviceAccessRules: FunctionTypeFrom<'listMobileDeviceAccessRules'>;

  listOrganizations: FunctionTypeFrom<'listOrganizations'>;

  listResourceDelegates: FunctionTypeFrom<'listResourceDelegates'>;

  listResources: FunctionTypeFrom<'listResources'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listUsers: FunctionTypeFrom<'listUsers'>;

  putAccessControlRule: FunctionTypeFrom<'putAccessControlRule'>;

  putEmailMonitoringConfiguration: FunctionTypeFrom<'putEmailMonitoringConfiguration'>;

  putInboundDmarcSettings: FunctionTypeFrom<'putInboundDmarcSettings'>;

  putMailboxPermissions: FunctionTypeFrom<'putMailboxPermissions'>;

  putMobileDeviceAccessOverride: FunctionTypeFrom<'putMobileDeviceAccessOverride'>;

  putRetentionPolicy: FunctionTypeFrom<'putRetentionPolicy'>;

  registerMailDomain: FunctionTypeFrom<'registerMailDomain'>;

  registerToWorkMail: FunctionTypeFrom<'registerToWorkMail'>;

  resetPassword: FunctionTypeFrom<'resetPassword'>;

  startMailboxExportJob: FunctionTypeFrom<'startMailboxExportJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testAvailabilityConfiguration: FunctionTypeFrom<'testAvailabilityConfiguration'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAvailabilityConfiguration: FunctionTypeFrom<'updateAvailabilityConfiguration'>;

  updateDefaultMailDomain: FunctionTypeFrom<'updateDefaultMailDomain'>;

  updateMailboxQuota: FunctionTypeFrom<'updateMailboxQuota'>;

  updateMobileDeviceAccessRule: FunctionTypeFrom<'updateMobileDeviceAccessRule'>;

  updatePrimaryEmailAddress: FunctionTypeFrom<'updatePrimaryEmailAddress'>;

  updateResource: FunctionTypeFrom<'updateResource'>
}
 
export class WorkMail implements ClientType {
  private constructor(private readonly client: AWSWorkMail) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workmail';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listOrganizations"] as const;
  
  async associateDelegateToResource(...args: any): Promise<any> {
  // undefined
    return this.client.associateDelegateToResource(...args).promise()
  }

  async associateMemberToGroup(...args: any): Promise<any> {
  // undefined
    return this.client.associateMemberToGroup(...args).promise()
  }

  async cancelMailboxExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelMailboxExportJob(...args).promise()
  }

  async createAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createAlias(...args).promise()
  }

  async createAvailabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createAvailabilityConfiguration(...args).promise()
  }

  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async createMobileDeviceAccessRule(...args: any): Promise<any> {
  // undefined
    return this.client.createMobileDeviceAccessRule(...args).promise()
  }

  async createOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.createOrganization(...args).promise()
  }

  async createResource(...args: any): Promise<any> {
  // undefined
    return this.client.createResource(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async deleteAccessControlRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessControlRule(...args).promise()
  }

  async deleteAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlias(...args).promise()
  }

  async deleteAvailabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAvailabilityConfiguration(...args).promise()
  }

  async deleteEmailMonitoringConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEmailMonitoringConfiguration(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async deleteMailboxPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMailboxPermissions(...args).promise()
  }

  async deleteMobileDeviceAccessOverride(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMobileDeviceAccessOverride(...args).promise()
  }

  async deleteMobileDeviceAccessRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMobileDeviceAccessRule(...args).promise()
  }

  async deleteOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOrganization(...args).promise()
  }

  async deleteResource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResource(...args).promise()
  }

  async deleteRetentionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRetentionPolicy(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async deregisterFromWorkMail(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterFromWorkMail(...args).promise()
  }

  async deregisterMailDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterMailDomain(...args).promise()
  }

  async describeEmailMonitoringConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeEmailMonitoringConfiguration(...args).promise()
  }

  async describeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeGroup(...args).promise()
  }

  async describeInboundDmarcSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeInboundDmarcSettings(...args).promise()
  }

  async describeMailboxExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeMailboxExportJob(...args).promise()
  }

  async describeOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganization(...args).promise()
  }

  async describeResource(...args: any): Promise<any> {
  // undefined
    return this.client.describeResource(...args).promise()
  }

  async describeUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeUser(...args).promise()
  }

  async disassociateDelegateFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateDelegateFromResource(...args).promise()
  }

  async disassociateMemberFromGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateMemberFromGroup(...args).promise()
  }

  async getAccessControlEffect(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessControlEffect(...args).promise()
  }

  async getDefaultRetentionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getDefaultRetentionPolicy(...args).promise()
  }

  async getMailDomain(...args: any): Promise<any> {
  // undefined
    return this.client.getMailDomain(...args).promise()
  }

  async getMailboxDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getMailboxDetails(...args).promise()
  }

  async getMobileDeviceAccessEffect(...args: any): Promise<any> {
  // undefined
    return this.client.getMobileDeviceAccessEffect(...args).promise()
  }

  async getMobileDeviceAccessOverride(...args: any): Promise<any> {
  // undefined
    return this.client.getMobileDeviceAccessOverride(...args).promise()
  }

  async listAccessControlRules(...args: any): Promise<any> {
  // undefined
    return this.client.listAccessControlRules(...args).promise()
  }

  async listAliases(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAliases(...args).promise()
  }

  async listAvailabilityConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AvailabilityConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAvailabilityConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AvailabilityConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroupMembers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroupMembers(...args).promise()
  }

  async listGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroups(...args).promise()
  }

  async listMailDomains(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMailDomains(...args).promise()
  }

  async listMailboxExportJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMailboxExportJobs(...args).promise()
  }

  async listMailboxPermissions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMailboxPermissions(...args).promise()
  }

  async listMobileDeviceAccessOverrides(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMobileDeviceAccessOverrides(...args).promise()
  }

  async listMobileDeviceAccessRules(...args: any): Promise<any> {
  // undefined
    return this.client.listMobileDeviceAccessRules(...args).promise()
  }

  async listOrganizations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOrganizations(...args).promise()
  }

  async listResourceDelegates(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listResourceDelegates(...args).promise()
  }

  async listResources(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listResources(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listUsers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listUsers(...args).promise()
  }

  async putAccessControlRule(...args: any): Promise<any> {
  // undefined
    return this.client.putAccessControlRule(...args).promise()
  }

  async putEmailMonitoringConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailMonitoringConfiguration(...args).promise()
  }

  async putInboundDmarcSettings(...args: any): Promise<any> {
  // undefined
    return this.client.putInboundDmarcSettings(...args).promise()
  }

  async putMailboxPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.putMailboxPermissions(...args).promise()
  }

  async putMobileDeviceAccessOverride(...args: any): Promise<any> {
  // undefined
    return this.client.putMobileDeviceAccessOverride(...args).promise()
  }

  async putRetentionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putRetentionPolicy(...args).promise()
  }

  async registerMailDomain(...args: any): Promise<any> {
  // undefined
    return this.client.registerMailDomain(...args).promise()
  }

  async registerToWorkMail(...args: any): Promise<any> {
  // undefined
    return this.client.registerToWorkMail(...args).promise()
  }

  async resetPassword(...args: any): Promise<any> {
  // undefined
    return this.client.resetPassword(...args).promise()
  }

  async startMailboxExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.startMailboxExportJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testAvailabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.testAvailabilityConfiguration(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAvailabilityConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateAvailabilityConfiguration(...args).promise()
  }

  async updateDefaultMailDomain(...args: any): Promise<any> {
  // undefined
    return this.client.updateDefaultMailDomain(...args).promise()
  }

  async updateMailboxQuota(...args: any): Promise<any> {
  // undefined
    return this.client.updateMailboxQuota(...args).promise()
  }

  async updateMobileDeviceAccessRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateMobileDeviceAccessRule(...args).promise()
  }

  async updatePrimaryEmailAddress(...args: any): Promise<any> {
  // undefined
    return this.client.updatePrimaryEmailAddress(...args).promise()
  }

  async updateResource(...args: any): Promise<any> {
  // undefined
    return this.client.updateResource(...args).promise()
  }
  
  static fromClient(client: AWSWorkMail): ClientType {
    return new WorkMail(client) as any;
  }
  
  static client(options?: AWSWorkMail.Types.ClientConfiguration): ClientType {
    return new WorkMail(new AWSWorkMail(options)) as any;
  }
}  
