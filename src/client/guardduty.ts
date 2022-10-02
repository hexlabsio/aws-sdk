import { Request, GuardDuty as AWSGuardDuty } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGuardDuty> = AWSGuardDuty[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGuardDuty> = AWSGuardDuty[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGuardDuty[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGuardDuty, Extras> = AWSGuardDuty[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'guardduty';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listDetectors","listInvitations","listOrganizationAdminAccounts"];
    
  acceptAdministratorInvitation: FunctionTypeFrom<'acceptAdministratorInvitation'>;

  acceptInvitation: FunctionTypeFrom<'acceptInvitation'>;

  archiveFindings: FunctionTypeFrom<'archiveFindings'>;

  createDetector: FunctionTypeFrom<'createDetector'>;

  createFilter: FunctionTypeFrom<'createFilter'>;

  createIPSet: FunctionTypeFrom<'createIPSet'>;

  createMembers: FunctionTypeFrom<'createMembers'>;

  createPublishingDestination: FunctionTypeFrom<'createPublishingDestination'>;

  createSampleFindings: FunctionTypeFrom<'createSampleFindings'>;

  createThreatIntelSet: FunctionTypeFrom<'createThreatIntelSet'>;

  declineInvitations: FunctionTypeFrom<'declineInvitations'>;

  deleteDetector: FunctionTypeFrom<'deleteDetector'>;

  deleteFilter: FunctionTypeFrom<'deleteFilter'>;

  deleteIPSet: FunctionTypeFrom<'deleteIPSet'>;

  deleteInvitations: FunctionTypeFrom<'deleteInvitations'>;

  deleteMembers: FunctionTypeFrom<'deleteMembers'>;

  deletePublishingDestination: FunctionTypeFrom<'deletePublishingDestination'>;

  deleteThreatIntelSet: FunctionTypeFrom<'deleteThreatIntelSet'>;

  describeMalwareScans(params: { [K in keyof Omit<ParamsFrom<'describeMalwareScans', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMalwareScans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMalwareScans'>]-?: ReturnTypeFrom<'describeMalwareScans'>[K]}['Scans'] }>
  ;

  describeOrganizationConfiguration: FunctionTypeFrom<'describeOrganizationConfiguration'>;

  describePublishingDestination: FunctionTypeFrom<'describePublishingDestination'>;

  disableOrganizationAdminAccount: FunctionTypeFrom<'disableOrganizationAdminAccount'>;

  disassociateFromAdministratorAccount: FunctionTypeFrom<'disassociateFromAdministratorAccount'>;

  disassociateFromMasterAccount: FunctionTypeFrom<'disassociateFromMasterAccount'>;

  disassociateMembers: FunctionTypeFrom<'disassociateMembers'>;

  enableOrganizationAdminAccount: FunctionTypeFrom<'enableOrganizationAdminAccount'>;

  getAdministratorAccount: FunctionTypeFrom<'getAdministratorAccount'>;

  getDetector: FunctionTypeFrom<'getDetector'>;

  getFilter: FunctionTypeFrom<'getFilter'>;

  getFindings: FunctionTypeFrom<'getFindings'>;

  getFindingsStatistics: FunctionTypeFrom<'getFindingsStatistics'>;

  getIPSet: FunctionTypeFrom<'getIPSet'>;

  getInvitationsCount: FunctionTypeFrom<'getInvitationsCount'>;

  getMalwareScanSettings: FunctionTypeFrom<'getMalwareScanSettings'>;

  getMasterAccount: FunctionTypeFrom<'getMasterAccount'>;

  getMemberDetectors: FunctionTypeFrom<'getMemberDetectors'>;

  getMembers: FunctionTypeFrom<'getMembers'>;

  getRemainingFreeTrialDays: FunctionTypeFrom<'getRemainingFreeTrialDays'>;

  getThreatIntelSet: FunctionTypeFrom<'getThreatIntelSet'>;

  getUsageStatistics: FunctionTypeFrom<'getUsageStatistics'>;

  inviteMembers: FunctionTypeFrom<'inviteMembers'>;

  listDetectors(params: { [K in keyof Omit<ParamsFrom<'listDetectors', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDetectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDetectors'>]-?: ReturnTypeFrom<'listDetectors'>[K]}['DetectorIds'] }>
  listDetectors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDetectors'>]-?: ReturnTypeFrom<'listDetectors'>[K]}['DetectorIds'] }>;

  listFilters(params: { [K in keyof Omit<ParamsFrom<'listFilters', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFilters'>]-?: ReturnTypeFrom<'listFilters'>[K]}['FilterNames'] }>
  ;

  listFindings(params: { [K in keyof Omit<ParamsFrom<'listFindings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['FindingIds'] }>
  ;

  listIPSets(params: { [K in keyof Omit<ParamsFrom<'listIPSets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listIPSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIPSets'>]-?: ReturnTypeFrom<'listIPSets'>[K]}['IpSetIds'] }>
  ;

  listInvitations(params: { [K in keyof Omit<ParamsFrom<'listInvitations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInvitations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInvitations'>]-?: ReturnTypeFrom<'listInvitations'>[K]}['Invitations'] }>
  listInvitations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInvitations'>]-?: ReturnTypeFrom<'listInvitations'>[K]}['Invitations'] }>;

  listMembers(params: { [K in keyof Omit<ParamsFrom<'listMembers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['Members'] }>
  ;

  listOrganizationAdminAccounts(params: { [K in keyof Omit<ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOrganizationAdminAccounts'>]-?: ReturnTypeFrom<'listOrganizationAdminAccounts'>[K]}['AdminAccounts'] }>
  listOrganizationAdminAccounts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOrganizationAdminAccounts'>]-?: ReturnTypeFrom<'listOrganizationAdminAccounts'>[K]}['AdminAccounts'] }>;

  listPublishingDestinations: FunctionTypeFrom<'listPublishingDestinations'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listThreatIntelSets(params: { [K in keyof Omit<ParamsFrom<'listThreatIntelSets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listThreatIntelSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThreatIntelSets'>]-?: ReturnTypeFrom<'listThreatIntelSets'>[K]}['ThreatIntelSetIds'] }>
  ;

  startMonitoringMembers: FunctionTypeFrom<'startMonitoringMembers'>;

  stopMonitoringMembers: FunctionTypeFrom<'stopMonitoringMembers'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  unarchiveFindings: FunctionTypeFrom<'unarchiveFindings'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDetector: FunctionTypeFrom<'updateDetector'>;

  updateFilter: FunctionTypeFrom<'updateFilter'>;

  updateFindingsFeedback: FunctionTypeFrom<'updateFindingsFeedback'>;

  updateIPSet: FunctionTypeFrom<'updateIPSet'>;

  updateMalwareScanSettings: FunctionTypeFrom<'updateMalwareScanSettings'>;

  updateMemberDetectors: FunctionTypeFrom<'updateMemberDetectors'>;

  updateOrganizationConfiguration: FunctionTypeFrom<'updateOrganizationConfiguration'>;

  updatePublishingDestination: FunctionTypeFrom<'updatePublishingDestination'>;

  updateThreatIntelSet: FunctionTypeFrom<'updateThreatIntelSet'>
}
 
export class GuardDuty implements ClientType {
  private constructor(private readonly client: AWSGuardDuty) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'guardduty';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listDetectors","listInvitations","listOrganizationAdminAccounts"] as const;
  
  async acceptAdministratorInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.acceptAdministratorInvitation(...args).promise()
  }

  async acceptInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.acceptInvitation(...args).promise()
  }

  async archiveFindings(...args: any): Promise<any> {
  // undefined
    return this.client.archiveFindings(...args).promise()
  }

  async createDetector(...args: any): Promise<any> {
  // undefined
    return this.client.createDetector(...args).promise()
  }

  async createFilter(...args: any): Promise<any> {
  // undefined
    return this.client.createFilter(...args).promise()
  }

  async createIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.createIPSet(...args).promise()
  }

  async createMembers(...args: any): Promise<any> {
  // undefined
    return this.client.createMembers(...args).promise()
  }

  async createPublishingDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createPublishingDestination(...args).promise()
  }

  async createSampleFindings(...args: any): Promise<any> {
  // undefined
    return this.client.createSampleFindings(...args).promise()
  }

  async createThreatIntelSet(...args: any): Promise<any> {
  // undefined
    return this.client.createThreatIntelSet(...args).promise()
  }

  async declineInvitations(...args: any): Promise<any> {
  // undefined
    return this.client.declineInvitations(...args).promise()
  }

  async deleteDetector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDetector(...args).promise()
  }

  async deleteFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFilter(...args).promise()
  }

  async deleteIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIPSet(...args).promise()
  }

  async deleteInvitations(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInvitations(...args).promise()
  }

  async deleteMembers(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMembers(...args).promise()
  }

  async deletePublishingDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deletePublishingDestination(...args).promise()
  }

  async deleteThreatIntelSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteThreatIntelSet(...args).promise()
  }

  async describeMalwareScans(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Scans"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMalwareScans(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Scans ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganizationConfiguration(...args).promise()
  }

  async describePublishingDestination(...args: any): Promise<any> {
  // undefined
    return this.client.describePublishingDestination(...args).promise()
  }

  async disableOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disableOrganizationAdminAccount(...args).promise()
  }

  async disassociateFromAdministratorAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateFromAdministratorAccount(...args).promise()
  }

  async disassociateFromMasterAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateFromMasterAccount(...args).promise()
  }

  async disassociateMembers(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateMembers(...args).promise()
  }

  async enableOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.enableOrganizationAdminAccount(...args).promise()
  }

  async getAdministratorAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getAdministratorAccount(...args).promise()
  }

  async getDetector(...args: any): Promise<any> {
  // undefined
    return this.client.getDetector(...args).promise()
  }

  async getFilter(...args: any): Promise<any> {
  // undefined
    return this.client.getFilter(...args).promise()
  }

  async getFindings(...args: any): Promise<any> {
  // undefined
    return this.client.getFindings(...args).promise()
  }

  async getFindingsStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getFindingsStatistics(...args).promise()
  }

  async getIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.getIPSet(...args).promise()
  }

  async getInvitationsCount(...args: any): Promise<any> {
  // undefined
    return this.client.getInvitationsCount(...args).promise()
  }

  async getMalwareScanSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getMalwareScanSettings(...args).promise()
  }

  async getMasterAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getMasterAccount(...args).promise()
  }

  async getMemberDetectors(...args: any): Promise<any> {
  // undefined
    return this.client.getMemberDetectors(...args).promise()
  }

  async getMembers(...args: any): Promise<any> {
  // undefined
    return this.client.getMembers(...args).promise()
  }

  async getRemainingFreeTrialDays(...args: any): Promise<any> {
  // undefined
    return this.client.getRemainingFreeTrialDays(...args).promise()
  }

  async getThreatIntelSet(...args: any): Promise<any> {
  // undefined
    return this.client.getThreatIntelSet(...args).promise()
  }

  async getUsageStatistics(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getUsageStatistics(...args).promise()
  }

  async inviteMembers(...args: any): Promise<any> {
  // undefined
    return this.client.inviteMembers(...args).promise()
  }

  async listDetectors(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DetectorIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDetectors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DetectorIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFilters(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FilterNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFilters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FilterNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FindingIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFindings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FindingIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIPSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpSetIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIPSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IpSetIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInvitations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Invitations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInvitations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Invitations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMembers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Members"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMembers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Members ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOrganizationAdminAccounts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AdminAccounts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOrganizationAdminAccounts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AdminAccounts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPublishingDestinations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPublishingDestinations(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listThreatIntelSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ThreatIntelSetIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listThreatIntelSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ThreatIntelSetIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startMonitoringMembers(...args: any): Promise<any> {
  // undefined
    return this.client.startMonitoringMembers(...args).promise()
  }

  async stopMonitoringMembers(...args: any): Promise<any> {
  // undefined
    return this.client.stopMonitoringMembers(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async unarchiveFindings(...args: any): Promise<any> {
  // undefined
    return this.client.unarchiveFindings(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDetector(...args: any): Promise<any> {
  // undefined
    return this.client.updateDetector(...args).promise()
  }

  async updateFilter(...args: any): Promise<any> {
  // undefined
    return this.client.updateFilter(...args).promise()
  }

  async updateFindingsFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.updateFindingsFeedback(...args).promise()
  }

  async updateIPSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateIPSet(...args).promise()
  }

  async updateMalwareScanSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateMalwareScanSettings(...args).promise()
  }

  async updateMemberDetectors(...args: any): Promise<any> {
  // undefined
    return this.client.updateMemberDetectors(...args).promise()
  }

  async updateOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateOrganizationConfiguration(...args).promise()
  }

  async updatePublishingDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updatePublishingDestination(...args).promise()
  }

  async updateThreatIntelSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateThreatIntelSet(...args).promise()
  }
  
  static fromClient(client: AWSGuardDuty): ClientType {
    return new GuardDuty(client) as any;
  }
  
  static client(options?: AWSGuardDuty.Types.ClientConfiguration): ClientType {
    return new GuardDuty(new AWSGuardDuty(options)) as any;
  }
}  
