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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGuardDuty> = AWSGuardDuty[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class GuardDuty {
  private constructor(private readonly client: AWSGuardDuty) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'guardduty' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listDetectors","listInvitations","listOrganizationAdminAccounts"] as const;
  
  acceptAdministratorInvitation: (params: RawParamsFrom<'acceptAdministratorInvitation'>) => Promise<ReturnTypeFrom<'acceptAdministratorInvitation'>>  = async params => {
  // undefined
    return this.client.acceptAdministratorInvitation(params as any).promise();
  }

  acceptInvitation: (params: RawParamsFrom<'acceptInvitation'>) => Promise<ReturnTypeFrom<'acceptInvitation'>>  = async params => {
  // undefined
    return this.client.acceptInvitation(params as any).promise();
  }

  archiveFindings: (params: RawParamsFrom<'archiveFindings'>) => Promise<ReturnTypeFrom<'archiveFindings'>>  = async params => {
  // undefined
    return this.client.archiveFindings(params as any).promise();
  }

  createDetector: (params: RawParamsFrom<'createDetector'>) => Promise<ReturnTypeFrom<'createDetector'>>  = async params => {
  // undefined
    return this.client.createDetector(params as any).promise();
  }

  createFilter: (params: RawParamsFrom<'createFilter'>) => Promise<ReturnTypeFrom<'createFilter'>>  = async params => {
  // undefined
    return this.client.createFilter(params as any).promise();
  }

  createIPSet: (params: RawParamsFrom<'createIPSet'>) => Promise<ReturnTypeFrom<'createIPSet'>>  = async params => {
  // undefined
    return this.client.createIPSet(params as any).promise();
  }

  createMembers: (params: RawParamsFrom<'createMembers'>) => Promise<ReturnTypeFrom<'createMembers'>>  = async params => {
  // undefined
    return this.client.createMembers(params as any).promise();
  }

  createPublishingDestination: (params: RawParamsFrom<'createPublishingDestination'>) => Promise<ReturnTypeFrom<'createPublishingDestination'>>  = async params => {
  // undefined
    return this.client.createPublishingDestination(params as any).promise();
  }

  createSampleFindings: (params: RawParamsFrom<'createSampleFindings'>) => Promise<ReturnTypeFrom<'createSampleFindings'>>  = async params => {
  // undefined
    return this.client.createSampleFindings(params as any).promise();
  }

  createThreatIntelSet: (params: RawParamsFrom<'createThreatIntelSet'>) => Promise<ReturnTypeFrom<'createThreatIntelSet'>>  = async params => {
  // undefined
    return this.client.createThreatIntelSet(params as any).promise();
  }

  declineInvitations: (params: RawParamsFrom<'declineInvitations'>) => Promise<ReturnTypeFrom<'declineInvitations'>>  = async params => {
  // undefined
    return this.client.declineInvitations(params as any).promise();
  }

  deleteDetector: (params: RawParamsFrom<'deleteDetector'>) => Promise<ReturnTypeFrom<'deleteDetector'>>  = async params => {
  // undefined
    return this.client.deleteDetector(params as any).promise();
  }

  deleteFilter: (params: RawParamsFrom<'deleteFilter'>) => Promise<ReturnTypeFrom<'deleteFilter'>>  = async params => {
  // undefined
    return this.client.deleteFilter(params as any).promise();
  }

  deleteIPSet: (params: RawParamsFrom<'deleteIPSet'>) => Promise<ReturnTypeFrom<'deleteIPSet'>>  = async params => {
  // undefined
    return this.client.deleteIPSet(params as any).promise();
  }

  deleteInvitations: (params: RawParamsFrom<'deleteInvitations'>) => Promise<ReturnTypeFrom<'deleteInvitations'>>  = async params => {
  // undefined
    return this.client.deleteInvitations(params as any).promise();
  }

  deleteMembers: (params: RawParamsFrom<'deleteMembers'>) => Promise<ReturnTypeFrom<'deleteMembers'>>  = async params => {
  // undefined
    return this.client.deleteMembers(params as any).promise();
  }

  deletePublishingDestination: (params: RawParamsFrom<'deletePublishingDestination'>) => Promise<ReturnTypeFrom<'deletePublishingDestination'>>  = async params => {
  // undefined
    return this.client.deletePublishingDestination(params as any).promise();
  }

  deleteThreatIntelSet: (params: RawParamsFrom<'deleteThreatIntelSet'>) => Promise<ReturnTypeFrom<'deleteThreatIntelSet'>>  = async params => {
  // undefined
    return this.client.deleteThreatIntelSet(params as any).promise();
  }

  async describeMalwareScans(params: { [K in keyof ParamsFrom<'describeMalwareScans', { next?: string, limit?: number }>]: ParamsFrom<'describeMalwareScans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMalwareScans'>]-?: ReturnTypeFrom<'describeMalwareScans'>[K]}['Scans'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Scans"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMalwareScans({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMalwareScans' })).toString('base64');
    const member = (Array.isArray(result.Scans ?? []) ? (result.Scans ?? []) : [result.Scans]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeOrganizationConfiguration: (params: RawParamsFrom<'describeOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'describeOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.describeOrganizationConfiguration(params as any).promise();
  }

  describePublishingDestination: (params: RawParamsFrom<'describePublishingDestination'>) => Promise<ReturnTypeFrom<'describePublishingDestination'>>  = async params => {
  // undefined
    return this.client.describePublishingDestination(params as any).promise();
  }

  disableOrganizationAdminAccount: (params: RawParamsFrom<'disableOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'disableOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.disableOrganizationAdminAccount(params as any).promise();
  }

  disassociateFromAdministratorAccount: (params: RawParamsFrom<'disassociateFromAdministratorAccount'>) => Promise<ReturnTypeFrom<'disassociateFromAdministratorAccount'>>  = async params => {
  // undefined
    return this.client.disassociateFromAdministratorAccount(params as any).promise();
  }

  disassociateFromMasterAccount: (params: RawParamsFrom<'disassociateFromMasterAccount'>) => Promise<ReturnTypeFrom<'disassociateFromMasterAccount'>>  = async params => {
  // undefined
    return this.client.disassociateFromMasterAccount(params as any).promise();
  }

  disassociateMembers: (params: RawParamsFrom<'disassociateMembers'>) => Promise<ReturnTypeFrom<'disassociateMembers'>>  = async params => {
  // undefined
    return this.client.disassociateMembers(params as any).promise();
  }

  enableOrganizationAdminAccount: (params: RawParamsFrom<'enableOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'enableOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.enableOrganizationAdminAccount(params as any).promise();
  }

  getAdministratorAccount: (params: RawParamsFrom<'getAdministratorAccount'>) => Promise<ReturnTypeFrom<'getAdministratorAccount'>>  = async params => {
  // undefined
    return this.client.getAdministratorAccount(params as any).promise();
  }

  getDetector: (params: RawParamsFrom<'getDetector'>) => Promise<ReturnTypeFrom<'getDetector'>>  = async params => {
  // undefined
    return this.client.getDetector(params as any).promise();
  }

  getFilter: (params: RawParamsFrom<'getFilter'>) => Promise<ReturnTypeFrom<'getFilter'>>  = async params => {
  // undefined
    return this.client.getFilter(params as any).promise();
  }

  getFindings: (params: RawParamsFrom<'getFindings'>) => Promise<ReturnTypeFrom<'getFindings'>>  = async params => {
  // undefined
    return this.client.getFindings(params as any).promise();
  }

  getFindingsStatistics: (params: RawParamsFrom<'getFindingsStatistics'>) => Promise<ReturnTypeFrom<'getFindingsStatistics'>>  = async params => {
  // undefined
    return this.client.getFindingsStatistics(params as any).promise();
  }

  getIPSet: (params: RawParamsFrom<'getIPSet'>) => Promise<ReturnTypeFrom<'getIPSet'>>  = async params => {
  // undefined
    return this.client.getIPSet(params as any).promise();
  }

  getInvitationsCount: (params: RawParamsFrom<'getInvitationsCount'>) => Promise<ReturnTypeFrom<'getInvitationsCount'>>  = async params => {
  // undefined
    return this.client.getInvitationsCount(params as any).promise();
  }

  getMalwareScanSettings: (params: RawParamsFrom<'getMalwareScanSettings'>) => Promise<ReturnTypeFrom<'getMalwareScanSettings'>>  = async params => {
  // undefined
    return this.client.getMalwareScanSettings(params as any).promise();
  }

  getMasterAccount: (params: RawParamsFrom<'getMasterAccount'>) => Promise<ReturnTypeFrom<'getMasterAccount'>>  = async params => {
  // undefined
    return this.client.getMasterAccount(params as any).promise();
  }

  getMemberDetectors: (params: RawParamsFrom<'getMemberDetectors'>) => Promise<ReturnTypeFrom<'getMemberDetectors'>>  = async params => {
  // undefined
    return this.client.getMemberDetectors(params as any).promise();
  }

  getMembers: (params: RawParamsFrom<'getMembers'>) => Promise<ReturnTypeFrom<'getMembers'>>  = async params => {
  // undefined
    return this.client.getMembers(params as any).promise();
  }

  getRemainingFreeTrialDays: (params: RawParamsFrom<'getRemainingFreeTrialDays'>) => Promise<ReturnTypeFrom<'getRemainingFreeTrialDays'>>  = async params => {
  // undefined
    return this.client.getRemainingFreeTrialDays(params as any).promise();
  }

  getThreatIntelSet: (params: RawParamsFrom<'getThreatIntelSet'>) => Promise<ReturnTypeFrom<'getThreatIntelSet'>>  = async params => {
  // undefined
    return this.client.getThreatIntelSet(params as any).promise();
  }

  getUsageStatistics: (params: RawParamsFrom<'getUsageStatistics'>) => Promise<ReturnTypeFrom<'getUsageStatistics'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getUsageStatistics(params as any).promise();
  }

  inviteMembers: (params: RawParamsFrom<'inviteMembers'>) => Promise<ReturnTypeFrom<'inviteMembers'>>  = async params => {
  // undefined
    return this.client.inviteMembers(params as any).promise();
  }

  async listDetectors(params: { [K in keyof ParamsFrom<'listDetectors', { next?: string, limit?: number }>]: ParamsFrom<'listDetectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDetectors'>]-?: ReturnTypeFrom<'listDetectors'>[K]}['DetectorIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DetectorIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDetectors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDetectors' })).toString('base64');
    const member = (Array.isArray(result.DetectorIds ?? []) ? (result.DetectorIds ?? []) : [result.DetectorIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFilters(params: { [K in keyof ParamsFrom<'listFilters', { next?: string, limit?: number }>]: ParamsFrom<'listFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFilters'>]-?: ReturnTypeFrom<'listFilters'>[K]}['FilterNames'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FilterNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFilters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFilters' })).toString('base64');
    const member = (Array.isArray(result.FilterNames ?? []) ? (result.FilterNames ?? []) : [result.FilterNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindings(params: { [K in keyof ParamsFrom<'listFindings', { next?: string, limit?: number }>]: ParamsFrom<'listFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['FindingIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FindingIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFindings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFindings' })).toString('base64');
    const member = (Array.isArray(result.FindingIds ?? []) ? (result.FindingIds ?? []) : [result.FindingIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIPSets(params: { [K in keyof ParamsFrom<'listIPSets', { next?: string, limit?: number }>]: ParamsFrom<'listIPSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIPSets'>]-?: ReturnTypeFrom<'listIPSets'>[K]}['IpSetIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpSetIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIPSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listIPSets' })).toString('base64');
    const member = (Array.isArray(result.IpSetIds ?? []) ? (result.IpSetIds ?? []) : [result.IpSetIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInvitations(params: { [K in keyof ParamsFrom<'listInvitations', { next?: string, limit?: number }>]: ParamsFrom<'listInvitations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInvitations'>]-?: ReturnTypeFrom<'listInvitations'>[K]}['Invitations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Invitations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInvitations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInvitations' })).toString('base64');
    const member = (Array.isArray(result.Invitations ?? []) ? (result.Invitations ?? []) : [result.Invitations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMembers(params: { [K in keyof ParamsFrom<'listMembers', { next?: string, limit?: number }>]: ParamsFrom<'listMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['Members'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Members"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMembers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listMembers' })).toString('base64');
    const member = (Array.isArray(result.Members ?? []) ? (result.Members ?? []) : [result.Members]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOrganizationAdminAccounts(params: { [K in keyof ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>]: ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOrganizationAdminAccounts'>]-?: ReturnTypeFrom<'listOrganizationAdminAccounts'>[K]}['AdminAccounts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AdminAccounts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOrganizationAdminAccounts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOrganizationAdminAccounts' })).toString('base64');
    const member = (Array.isArray(result.AdminAccounts ?? []) ? (result.AdminAccounts ?? []) : [result.AdminAccounts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listPublishingDestinations: (params: RawParamsFrom<'listPublishingDestinations'>) => Promise<ReturnTypeFrom<'listPublishingDestinations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPublishingDestinations(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listThreatIntelSets(params: { [K in keyof ParamsFrom<'listThreatIntelSets', { next?: string, limit?: number }>]: ParamsFrom<'listThreatIntelSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThreatIntelSets'>]-?: ReturnTypeFrom<'listThreatIntelSets'>[K]}['ThreatIntelSetIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ThreatIntelSetIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listThreatIntelSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listThreatIntelSets' })).toString('base64');
    const member = (Array.isArray(result.ThreatIntelSetIds ?? []) ? (result.ThreatIntelSetIds ?? []) : [result.ThreatIntelSetIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startMonitoringMembers: (params: RawParamsFrom<'startMonitoringMembers'>) => Promise<ReturnTypeFrom<'startMonitoringMembers'>>  = async params => {
  // undefined
    return this.client.startMonitoringMembers(params as any).promise();
  }

  stopMonitoringMembers: (params: RawParamsFrom<'stopMonitoringMembers'>) => Promise<ReturnTypeFrom<'stopMonitoringMembers'>>  = async params => {
  // undefined
    return this.client.stopMonitoringMembers(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  unarchiveFindings: (params: RawParamsFrom<'unarchiveFindings'>) => Promise<ReturnTypeFrom<'unarchiveFindings'>>  = async params => {
  // undefined
    return this.client.unarchiveFindings(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDetector: (params: RawParamsFrom<'updateDetector'>) => Promise<ReturnTypeFrom<'updateDetector'>>  = async params => {
  // undefined
    return this.client.updateDetector(params as any).promise();
  }

  updateFilter: (params: RawParamsFrom<'updateFilter'>) => Promise<ReturnTypeFrom<'updateFilter'>>  = async params => {
  // undefined
    return this.client.updateFilter(params as any).promise();
  }

  updateFindingsFeedback: (params: RawParamsFrom<'updateFindingsFeedback'>) => Promise<ReturnTypeFrom<'updateFindingsFeedback'>>  = async params => {
  // undefined
    return this.client.updateFindingsFeedback(params as any).promise();
  }

  updateIPSet: (params: RawParamsFrom<'updateIPSet'>) => Promise<ReturnTypeFrom<'updateIPSet'>>  = async params => {
  // undefined
    return this.client.updateIPSet(params as any).promise();
  }

  updateMalwareScanSettings: (params: RawParamsFrom<'updateMalwareScanSettings'>) => Promise<ReturnTypeFrom<'updateMalwareScanSettings'>>  = async params => {
  // undefined
    return this.client.updateMalwareScanSettings(params as any).promise();
  }

  updateMemberDetectors: (params: RawParamsFrom<'updateMemberDetectors'>) => Promise<ReturnTypeFrom<'updateMemberDetectors'>>  = async params => {
  // undefined
    return this.client.updateMemberDetectors(params as any).promise();
  }

  updateOrganizationConfiguration: (params: RawParamsFrom<'updateOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'updateOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateOrganizationConfiguration(params as any).promise();
  }

  updatePublishingDestination: (params: RawParamsFrom<'updatePublishingDestination'>) => Promise<ReturnTypeFrom<'updatePublishingDestination'>>  = async params => {
  // undefined
    return this.client.updatePublishingDestination(params as any).promise();
  }

  updateThreatIntelSet: (params: RawParamsFrom<'updateThreatIntelSet'>) => Promise<ReturnTypeFrom<'updateThreatIntelSet'>>  = async params => {
  // undefined
    return this.client.updateThreatIntelSet(params as any).promise();
  }
  
  static fromClient(client: AWSGuardDuty): GuardDuty {
    return new GuardDuty(client) as any;
  }
  
  static client(options?: AWSGuardDuty.Types.ClientConfiguration): GuardDuty {
    return new GuardDuty(new AWSGuardDuty(options)) as any;
  }
}  
