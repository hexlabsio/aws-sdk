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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWorkMail> = AWSWorkMail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WorkMail {
  private constructor(private readonly client: AWSWorkMail) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workmail' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listOrganizations"] as const;
  
  associateDelegateToResource: (params: RawParamsFrom<'associateDelegateToResource'>) => Promise<ReturnTypeFrom<'associateDelegateToResource'>>  = async params => {
  // undefined
    return this.client.associateDelegateToResource(params as any).promise();
  }

  associateMemberToGroup: (params: RawParamsFrom<'associateMemberToGroup'>) => Promise<ReturnTypeFrom<'associateMemberToGroup'>>  = async params => {
  // undefined
    return this.client.associateMemberToGroup(params as any).promise();
  }

  cancelMailboxExportJob: (params: RawParamsFrom<'cancelMailboxExportJob'>) => Promise<ReturnTypeFrom<'cancelMailboxExportJob'>>  = async params => {
  // undefined
    return this.client.cancelMailboxExportJob(params as any).promise();
  }

  createAlias: (params: RawParamsFrom<'createAlias'>) => Promise<ReturnTypeFrom<'createAlias'>>  = async params => {
  // undefined
    return this.client.createAlias(params as any).promise();
  }

  createAvailabilityConfiguration: (params: RawParamsFrom<'createAvailabilityConfiguration'>) => Promise<ReturnTypeFrom<'createAvailabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.createAvailabilityConfiguration(params as any).promise();
  }

  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  createMobileDeviceAccessRule: (params: RawParamsFrom<'createMobileDeviceAccessRule'>) => Promise<ReturnTypeFrom<'createMobileDeviceAccessRule'>>  = async params => {
  // undefined
    return this.client.createMobileDeviceAccessRule(params as any).promise();
  }

  createOrganization: (params: RawParamsFrom<'createOrganization'>) => Promise<ReturnTypeFrom<'createOrganization'>>  = async params => {
  // undefined
    return this.client.createOrganization(params as any).promise();
  }

  createResource: (params: RawParamsFrom<'createResource'>) => Promise<ReturnTypeFrom<'createResource'>>  = async params => {
  // undefined
    return this.client.createResource(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deleteAccessControlRule: (params: RawParamsFrom<'deleteAccessControlRule'>) => Promise<ReturnTypeFrom<'deleteAccessControlRule'>>  = async params => {
  // undefined
    return this.client.deleteAccessControlRule(params as any).promise();
  }

  deleteAlias: (params: RawParamsFrom<'deleteAlias'>) => Promise<ReturnTypeFrom<'deleteAlias'>>  = async params => {
  // undefined
    return this.client.deleteAlias(params as any).promise();
  }

  deleteAvailabilityConfiguration: (params: RawParamsFrom<'deleteAvailabilityConfiguration'>) => Promise<ReturnTypeFrom<'deleteAvailabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteAvailabilityConfiguration(params as any).promise();
  }

  deleteEmailMonitoringConfiguration: (params: RawParamsFrom<'deleteEmailMonitoringConfiguration'>) => Promise<ReturnTypeFrom<'deleteEmailMonitoringConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteEmailMonitoringConfiguration(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  deleteMailboxPermissions: (params: RawParamsFrom<'deleteMailboxPermissions'>) => Promise<ReturnTypeFrom<'deleteMailboxPermissions'>>  = async params => {
  // undefined
    return this.client.deleteMailboxPermissions(params as any).promise();
  }

  deleteMobileDeviceAccessOverride: (params: RawParamsFrom<'deleteMobileDeviceAccessOverride'>) => Promise<ReturnTypeFrom<'deleteMobileDeviceAccessOverride'>>  = async params => {
  // undefined
    return this.client.deleteMobileDeviceAccessOverride(params as any).promise();
  }

  deleteMobileDeviceAccessRule: (params: RawParamsFrom<'deleteMobileDeviceAccessRule'>) => Promise<ReturnTypeFrom<'deleteMobileDeviceAccessRule'>>  = async params => {
  // undefined
    return this.client.deleteMobileDeviceAccessRule(params as any).promise();
  }

  deleteOrganization: (params: RawParamsFrom<'deleteOrganization'>) => Promise<ReturnTypeFrom<'deleteOrganization'>>  = async params => {
  // undefined
    return this.client.deleteOrganization(params as any).promise();
  }

  deleteResource: (params: RawParamsFrom<'deleteResource'>) => Promise<ReturnTypeFrom<'deleteResource'>>  = async params => {
  // undefined
    return this.client.deleteResource(params as any).promise();
  }

  deleteRetentionPolicy: (params: RawParamsFrom<'deleteRetentionPolicy'>) => Promise<ReturnTypeFrom<'deleteRetentionPolicy'>>  = async params => {
  // undefined
    return this.client.deleteRetentionPolicy(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  deregisterFromWorkMail: (params: RawParamsFrom<'deregisterFromWorkMail'>) => Promise<ReturnTypeFrom<'deregisterFromWorkMail'>>  = async params => {
  // undefined
    return this.client.deregisterFromWorkMail(params as any).promise();
  }

  deregisterMailDomain: (params: RawParamsFrom<'deregisterMailDomain'>) => Promise<ReturnTypeFrom<'deregisterMailDomain'>>  = async params => {
  // undefined
    return this.client.deregisterMailDomain(params as any).promise();
  }

  describeEmailMonitoringConfiguration: (params: RawParamsFrom<'describeEmailMonitoringConfiguration'>) => Promise<ReturnTypeFrom<'describeEmailMonitoringConfiguration'>>  = async params => {
  // undefined
    return this.client.describeEmailMonitoringConfiguration(params as any).promise();
  }

  describeGroup: (params: RawParamsFrom<'describeGroup'>) => Promise<ReturnTypeFrom<'describeGroup'>>  = async params => {
  // undefined
    return this.client.describeGroup(params as any).promise();
  }

  describeInboundDmarcSettings: (params: RawParamsFrom<'describeInboundDmarcSettings'>) => Promise<ReturnTypeFrom<'describeInboundDmarcSettings'>>  = async params => {
  // undefined
    return this.client.describeInboundDmarcSettings(params as any).promise();
  }

  describeMailboxExportJob: (params: RawParamsFrom<'describeMailboxExportJob'>) => Promise<ReturnTypeFrom<'describeMailboxExportJob'>>  = async params => {
  // undefined
    return this.client.describeMailboxExportJob(params as any).promise();
  }

  describeOrganization: (params: RawParamsFrom<'describeOrganization'>) => Promise<ReturnTypeFrom<'describeOrganization'>>  = async params => {
  // undefined
    return this.client.describeOrganization(params as any).promise();
  }

  describeResource: (params: RawParamsFrom<'describeResource'>) => Promise<ReturnTypeFrom<'describeResource'>>  = async params => {
  // undefined
    return this.client.describeResource(params as any).promise();
  }

  describeUser: (params: RawParamsFrom<'describeUser'>) => Promise<ReturnTypeFrom<'describeUser'>>  = async params => {
  // undefined
    return this.client.describeUser(params as any).promise();
  }

  disassociateDelegateFromResource: (params: RawParamsFrom<'disassociateDelegateFromResource'>) => Promise<ReturnTypeFrom<'disassociateDelegateFromResource'>>  = async params => {
  // undefined
    return this.client.disassociateDelegateFromResource(params as any).promise();
  }

  disassociateMemberFromGroup: (params: RawParamsFrom<'disassociateMemberFromGroup'>) => Promise<ReturnTypeFrom<'disassociateMemberFromGroup'>>  = async params => {
  // undefined
    return this.client.disassociateMemberFromGroup(params as any).promise();
  }

  getAccessControlEffect: (params: RawParamsFrom<'getAccessControlEffect'>) => Promise<ReturnTypeFrom<'getAccessControlEffect'>>  = async params => {
  // undefined
    return this.client.getAccessControlEffect(params as any).promise();
  }

  getDefaultRetentionPolicy: (params: RawParamsFrom<'getDefaultRetentionPolicy'>) => Promise<ReturnTypeFrom<'getDefaultRetentionPolicy'>>  = async params => {
  // undefined
    return this.client.getDefaultRetentionPolicy(params as any).promise();
  }

  getMailDomain: (params: RawParamsFrom<'getMailDomain'>) => Promise<ReturnTypeFrom<'getMailDomain'>>  = async params => {
  // undefined
    return this.client.getMailDomain(params as any).promise();
  }

  getMailboxDetails: (params: RawParamsFrom<'getMailboxDetails'>) => Promise<ReturnTypeFrom<'getMailboxDetails'>>  = async params => {
  // undefined
    return this.client.getMailboxDetails(params as any).promise();
  }

  getMobileDeviceAccessEffect: (params: RawParamsFrom<'getMobileDeviceAccessEffect'>) => Promise<ReturnTypeFrom<'getMobileDeviceAccessEffect'>>  = async params => {
  // undefined
    return this.client.getMobileDeviceAccessEffect(params as any).promise();
  }

  getMobileDeviceAccessOverride: (params: RawParamsFrom<'getMobileDeviceAccessOverride'>) => Promise<ReturnTypeFrom<'getMobileDeviceAccessOverride'>>  = async params => {
  // undefined
    return this.client.getMobileDeviceAccessOverride(params as any).promise();
  }

  listAccessControlRules: (params: RawParamsFrom<'listAccessControlRules'>) => Promise<ReturnTypeFrom<'listAccessControlRules'>>  = async params => {
  // undefined
    return this.client.listAccessControlRules(params as any).promise();
  }

  listAliases: (params: RawParamsFrom<'listAliases'>) => Promise<ReturnTypeFrom<'listAliases'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAliases(params as any).promise();
  }

  async listAvailabilityConfigurations(params: { [K in keyof ParamsFrom<'listAvailabilityConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'listAvailabilityConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAvailabilityConfigurations'>]-?: ReturnTypeFrom<'listAvailabilityConfigurations'>[K]}['AvailabilityConfigurations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AvailabilityConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAvailabilityConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.AvailabilityConfigurations ?? []) ? (result.AvailabilityConfigurations ?? []) : [result.AvailabilityConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listGroupMembers: (params: RawParamsFrom<'listGroupMembers'>) => Promise<ReturnTypeFrom<'listGroupMembers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroupMembers(params as any).promise();
  }

  listGroups: (params: RawParamsFrom<'listGroups'>) => Promise<ReturnTypeFrom<'listGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGroups(params as any).promise();
  }

  listMailDomains: (params: RawParamsFrom<'listMailDomains'>) => Promise<ReturnTypeFrom<'listMailDomains'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMailDomains(params as any).promise();
  }

  listMailboxExportJobs: (params: RawParamsFrom<'listMailboxExportJobs'>) => Promise<ReturnTypeFrom<'listMailboxExportJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMailboxExportJobs(params as any).promise();
  }

  listMailboxPermissions: (params: RawParamsFrom<'listMailboxPermissions'>) => Promise<ReturnTypeFrom<'listMailboxPermissions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMailboxPermissions(params as any).promise();
  }

  listMobileDeviceAccessOverrides: (params: RawParamsFrom<'listMobileDeviceAccessOverrides'>) => Promise<ReturnTypeFrom<'listMobileDeviceAccessOverrides'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMobileDeviceAccessOverrides(params as any).promise();
  }

  listMobileDeviceAccessRules: (params: RawParamsFrom<'listMobileDeviceAccessRules'>) => Promise<ReturnTypeFrom<'listMobileDeviceAccessRules'>>  = async params => {
  // undefined
    return this.client.listMobileDeviceAccessRules(params as any).promise();
  }

  listOrganizations: (params: RawParamsFrom<'listOrganizations'>) => Promise<ReturnTypeFrom<'listOrganizations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOrganizations(params as any).promise();
  }

  listResourceDelegates: (params: RawParamsFrom<'listResourceDelegates'>) => Promise<ReturnTypeFrom<'listResourceDelegates'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listResourceDelegates(params as any).promise();
  }

  listResources: (params: RawParamsFrom<'listResources'>) => Promise<ReturnTypeFrom<'listResources'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listResources(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listUsers: (params: RawParamsFrom<'listUsers'>) => Promise<ReturnTypeFrom<'listUsers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listUsers(params as any).promise();
  }

  putAccessControlRule: (params: RawParamsFrom<'putAccessControlRule'>) => Promise<ReturnTypeFrom<'putAccessControlRule'>>  = async params => {
  // undefined
    return this.client.putAccessControlRule(params as any).promise();
  }

  putEmailMonitoringConfiguration: (params: RawParamsFrom<'putEmailMonitoringConfiguration'>) => Promise<ReturnTypeFrom<'putEmailMonitoringConfiguration'>>  = async params => {
  // undefined
    return this.client.putEmailMonitoringConfiguration(params as any).promise();
  }

  putInboundDmarcSettings: (params: RawParamsFrom<'putInboundDmarcSettings'>) => Promise<ReturnTypeFrom<'putInboundDmarcSettings'>>  = async params => {
  // undefined
    return this.client.putInboundDmarcSettings(params as any).promise();
  }

  putMailboxPermissions: (params: RawParamsFrom<'putMailboxPermissions'>) => Promise<ReturnTypeFrom<'putMailboxPermissions'>>  = async params => {
  // undefined
    return this.client.putMailboxPermissions(params as any).promise();
  }

  putMobileDeviceAccessOverride: (params: RawParamsFrom<'putMobileDeviceAccessOverride'>) => Promise<ReturnTypeFrom<'putMobileDeviceAccessOverride'>>  = async params => {
  // undefined
    return this.client.putMobileDeviceAccessOverride(params as any).promise();
  }

  putRetentionPolicy: (params: RawParamsFrom<'putRetentionPolicy'>) => Promise<ReturnTypeFrom<'putRetentionPolicy'>>  = async params => {
  // undefined
    return this.client.putRetentionPolicy(params as any).promise();
  }

  registerMailDomain: (params: RawParamsFrom<'registerMailDomain'>) => Promise<ReturnTypeFrom<'registerMailDomain'>>  = async params => {
  // undefined
    return this.client.registerMailDomain(params as any).promise();
  }

  registerToWorkMail: (params: RawParamsFrom<'registerToWorkMail'>) => Promise<ReturnTypeFrom<'registerToWorkMail'>>  = async params => {
  // undefined
    return this.client.registerToWorkMail(params as any).promise();
  }

  resetPassword: (params: RawParamsFrom<'resetPassword'>) => Promise<ReturnTypeFrom<'resetPassword'>>  = async params => {
  // undefined
    return this.client.resetPassword(params as any).promise();
  }

  startMailboxExportJob: (params: RawParamsFrom<'startMailboxExportJob'>) => Promise<ReturnTypeFrom<'startMailboxExportJob'>>  = async params => {
  // undefined
    return this.client.startMailboxExportJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testAvailabilityConfiguration: (params: RawParamsFrom<'testAvailabilityConfiguration'>) => Promise<ReturnTypeFrom<'testAvailabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.testAvailabilityConfiguration(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAvailabilityConfiguration: (params: RawParamsFrom<'updateAvailabilityConfiguration'>) => Promise<ReturnTypeFrom<'updateAvailabilityConfiguration'>>  = async params => {
  // undefined
    return this.client.updateAvailabilityConfiguration(params as any).promise();
  }

  updateDefaultMailDomain: (params: RawParamsFrom<'updateDefaultMailDomain'>) => Promise<ReturnTypeFrom<'updateDefaultMailDomain'>>  = async params => {
  // undefined
    return this.client.updateDefaultMailDomain(params as any).promise();
  }

  updateMailboxQuota: (params: RawParamsFrom<'updateMailboxQuota'>) => Promise<ReturnTypeFrom<'updateMailboxQuota'>>  = async params => {
  // undefined
    return this.client.updateMailboxQuota(params as any).promise();
  }

  updateMobileDeviceAccessRule: (params: RawParamsFrom<'updateMobileDeviceAccessRule'>) => Promise<ReturnTypeFrom<'updateMobileDeviceAccessRule'>>  = async params => {
  // undefined
    return this.client.updateMobileDeviceAccessRule(params as any).promise();
  }

  updatePrimaryEmailAddress: (params: RawParamsFrom<'updatePrimaryEmailAddress'>) => Promise<ReturnTypeFrom<'updatePrimaryEmailAddress'>>  = async params => {
  // undefined
    return this.client.updatePrimaryEmailAddress(params as any).promise();
  }

  updateResource: (params: RawParamsFrom<'updateResource'>) => Promise<ReturnTypeFrom<'updateResource'>>  = async params => {
  // undefined
    return this.client.updateResource(params as any).promise();
  }
  
  static fromClient(client: AWSWorkMail): WorkMail {
    return new WorkMail(client) as any;
  }
  
  static client(options?: AWSWorkMail.Types.ClientConfiguration): WorkMail {
    return new WorkMail(new AWSWorkMail(options)) as any;
  }
}  
