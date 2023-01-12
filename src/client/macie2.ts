import { Request, Macie2 as AWSMacie2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMacie2> = AWSMacie2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMacie2> = AWSMacie2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMacie2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMacie2, Extras> = AWSMacie2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMacie2> = AWSMacie2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Macie2 {
  private constructor(private readonly client: AWSMacie2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'macie2' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["describeBuckets","getUsageStatistics","listAllowLists","listClassificationJobs","listClassificationScopes","listCustomDataIdentifiers","listFindings","listFindingsFilters","listInvitations","listManagedDataIdentifiers","listMembers","listOrganizationAdminAccounts","listSensitivityInspectionTemplates","searchResources"] as const;
  
  acceptInvitation: (params: RawParamsFrom<'acceptInvitation'>) => Promise<ReturnTypeFrom<'acceptInvitation'>>  = async params => {
  // undefined
    return this.client.acceptInvitation(params as any).promise();
  }

  batchGetCustomDataIdentifiers: (params: RawParamsFrom<'batchGetCustomDataIdentifiers'>) => Promise<ReturnTypeFrom<'batchGetCustomDataIdentifiers'>>  = async params => {
  // undefined
    return this.client.batchGetCustomDataIdentifiers(params as any).promise();
  }

  createAllowList: (params: RawParamsFrom<'createAllowList'>) => Promise<ReturnTypeFrom<'createAllowList'>>  = async params => {
  // undefined
    return this.client.createAllowList(params as any).promise();
  }

  createClassificationJob: (params: RawParamsFrom<'createClassificationJob'>) => Promise<ReturnTypeFrom<'createClassificationJob'>>  = async params => {
  // undefined
    return this.client.createClassificationJob(params as any).promise();
  }

  createCustomDataIdentifier: (params: RawParamsFrom<'createCustomDataIdentifier'>) => Promise<ReturnTypeFrom<'createCustomDataIdentifier'>>  = async params => {
  // undefined
    return this.client.createCustomDataIdentifier(params as any).promise();
  }

  createFindingsFilter: (params: RawParamsFrom<'createFindingsFilter'>) => Promise<ReturnTypeFrom<'createFindingsFilter'>>  = async params => {
  // undefined
    return this.client.createFindingsFilter(params as any).promise();
  }

  createInvitations: (params: RawParamsFrom<'createInvitations'>) => Promise<ReturnTypeFrom<'createInvitations'>>  = async params => {
  // undefined
    return this.client.createInvitations(params as any).promise();
  }

  createMember: (params: RawParamsFrom<'createMember'>) => Promise<ReturnTypeFrom<'createMember'>>  = async params => {
  // undefined
    return this.client.createMember(params as any).promise();
  }

  createSampleFindings: (params: RawParamsFrom<'createSampleFindings'>) => Promise<ReturnTypeFrom<'createSampleFindings'>>  = async params => {
  // undefined
    return this.client.createSampleFindings(params as any).promise();
  }

  declineInvitations: (params: RawParamsFrom<'declineInvitations'>) => Promise<ReturnTypeFrom<'declineInvitations'>>  = async params => {
  // undefined
    return this.client.declineInvitations(params as any).promise();
  }

  deleteAllowList: (params: RawParamsFrom<'deleteAllowList'>) => Promise<ReturnTypeFrom<'deleteAllowList'>>  = async params => {
  // undefined
    return this.client.deleteAllowList(params as any).promise();
  }

  deleteCustomDataIdentifier: (params: RawParamsFrom<'deleteCustomDataIdentifier'>) => Promise<ReturnTypeFrom<'deleteCustomDataIdentifier'>>  = async params => {
  // undefined
    return this.client.deleteCustomDataIdentifier(params as any).promise();
  }

  deleteFindingsFilter: (params: RawParamsFrom<'deleteFindingsFilter'>) => Promise<ReturnTypeFrom<'deleteFindingsFilter'>>  = async params => {
  // undefined
    return this.client.deleteFindingsFilter(params as any).promise();
  }

  deleteInvitations: (params: RawParamsFrom<'deleteInvitations'>) => Promise<ReturnTypeFrom<'deleteInvitations'>>  = async params => {
  // undefined
    return this.client.deleteInvitations(params as any).promise();
  }

  deleteMember: (params: RawParamsFrom<'deleteMember'>) => Promise<ReturnTypeFrom<'deleteMember'>>  = async params => {
  // undefined
    return this.client.deleteMember(params as any).promise();
  }

  async describeBuckets(params: { [K in keyof ParamsFrom<'describeBuckets', { next?: string, limit?: number }>]: ParamsFrom<'describeBuckets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeBuckets'>]-?: ReturnTypeFrom<'describeBuckets'>[K]}['buckets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"buckets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeBuckets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeBuckets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.buckets ?? []) ? (result.buckets ?? []) : [result.buckets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeClassificationJob: (params: RawParamsFrom<'describeClassificationJob'>) => Promise<ReturnTypeFrom<'describeClassificationJob'>>  = async params => {
  // undefined
    return this.client.describeClassificationJob(params as any).promise();
  }

  describeOrganizationConfiguration: (params: RawParamsFrom<'describeOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'describeOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.describeOrganizationConfiguration(params as any).promise();
  }

  disableMacie: (params: RawParamsFrom<'disableMacie'>) => Promise<ReturnTypeFrom<'disableMacie'>>  = async params => {
  // undefined
    return this.client.disableMacie(params as any).promise();
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

  disassociateMember: (params: RawParamsFrom<'disassociateMember'>) => Promise<ReturnTypeFrom<'disassociateMember'>>  = async params => {
  // undefined
    return this.client.disassociateMember(params as any).promise();
  }

  enableMacie: (params: RawParamsFrom<'enableMacie'>) => Promise<ReturnTypeFrom<'enableMacie'>>  = async params => {
  // undefined
    return this.client.enableMacie(params as any).promise();
  }

  enableOrganizationAdminAccount: (params: RawParamsFrom<'enableOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'enableOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.enableOrganizationAdminAccount(params as any).promise();
  }

  getAdministratorAccount: (params: RawParamsFrom<'getAdministratorAccount'>) => Promise<ReturnTypeFrom<'getAdministratorAccount'>>  = async params => {
  // undefined
    return this.client.getAdministratorAccount(params as any).promise();
  }

  getAllowList: (params: RawParamsFrom<'getAllowList'>) => Promise<ReturnTypeFrom<'getAllowList'>>  = async params => {
  // undefined
    return this.client.getAllowList(params as any).promise();
  }

  getAutomatedDiscoveryConfiguration: (params: RawParamsFrom<'getAutomatedDiscoveryConfiguration'>) => Promise<ReturnTypeFrom<'getAutomatedDiscoveryConfiguration'>>  = async params => {
  // undefined
    return this.client.getAutomatedDiscoveryConfiguration(params as any).promise();
  }

  getBucketStatistics: (params: RawParamsFrom<'getBucketStatistics'>) => Promise<ReturnTypeFrom<'getBucketStatistics'>>  = async params => {
  // undefined
    return this.client.getBucketStatistics(params as any).promise();
  }

  getClassificationExportConfiguration: (params: RawParamsFrom<'getClassificationExportConfiguration'>) => Promise<ReturnTypeFrom<'getClassificationExportConfiguration'>>  = async params => {
  // undefined
    return this.client.getClassificationExportConfiguration(params as any).promise();
  }

  getClassificationScope: (params: RawParamsFrom<'getClassificationScope'>) => Promise<ReturnTypeFrom<'getClassificationScope'>>  = async params => {
  // undefined
    return this.client.getClassificationScope(params as any).promise();
  }

  getCustomDataIdentifier: (params: RawParamsFrom<'getCustomDataIdentifier'>) => Promise<ReturnTypeFrom<'getCustomDataIdentifier'>>  = async params => {
  // undefined
    return this.client.getCustomDataIdentifier(params as any).promise();
  }

  getFindingStatistics: (params: RawParamsFrom<'getFindingStatistics'>) => Promise<ReturnTypeFrom<'getFindingStatistics'>>  = async params => {
  // undefined
    return this.client.getFindingStatistics(params as any).promise();
  }

  getFindings: (params: RawParamsFrom<'getFindings'>) => Promise<ReturnTypeFrom<'getFindings'>>  = async params => {
  // undefined
    return this.client.getFindings(params as any).promise();
  }

  getFindingsFilter: (params: RawParamsFrom<'getFindingsFilter'>) => Promise<ReturnTypeFrom<'getFindingsFilter'>>  = async params => {
  // undefined
    return this.client.getFindingsFilter(params as any).promise();
  }

  getFindingsPublicationConfiguration: (params: RawParamsFrom<'getFindingsPublicationConfiguration'>) => Promise<ReturnTypeFrom<'getFindingsPublicationConfiguration'>>  = async params => {
  // undefined
    return this.client.getFindingsPublicationConfiguration(params as any).promise();
  }

  getInvitationsCount: (params: RawParamsFrom<'getInvitationsCount'>) => Promise<ReturnTypeFrom<'getInvitationsCount'>>  = async params => {
  // undefined
    return this.client.getInvitationsCount(params as any).promise();
  }

  getMacieSession: (params: RawParamsFrom<'getMacieSession'>) => Promise<ReturnTypeFrom<'getMacieSession'>>  = async params => {
  // undefined
    return this.client.getMacieSession(params as any).promise();
  }

  getMasterAccount: (params: RawParamsFrom<'getMasterAccount'>) => Promise<ReturnTypeFrom<'getMasterAccount'>>  = async params => {
  // undefined
    return this.client.getMasterAccount(params as any).promise();
  }

  getMember: (params: RawParamsFrom<'getMember'>) => Promise<ReturnTypeFrom<'getMember'>>  = async params => {
  // undefined
    return this.client.getMember(params as any).promise();
  }

  getResourceProfile: (params: RawParamsFrom<'getResourceProfile'>) => Promise<ReturnTypeFrom<'getResourceProfile'>>  = async params => {
  // undefined
    return this.client.getResourceProfile(params as any).promise();
  }

  getRevealConfiguration: (params: RawParamsFrom<'getRevealConfiguration'>) => Promise<ReturnTypeFrom<'getRevealConfiguration'>>  = async params => {
  // undefined
    return this.client.getRevealConfiguration(params as any).promise();
  }

  getSensitiveDataOccurrences: (params: RawParamsFrom<'getSensitiveDataOccurrences'>) => Promise<ReturnTypeFrom<'getSensitiveDataOccurrences'>>  = async params => {
  // undefined
    return this.client.getSensitiveDataOccurrences(params as any).promise();
  }

  getSensitiveDataOccurrencesAvailability: (params: RawParamsFrom<'getSensitiveDataOccurrencesAvailability'>) => Promise<ReturnTypeFrom<'getSensitiveDataOccurrencesAvailability'>>  = async params => {
  // undefined
    return this.client.getSensitiveDataOccurrencesAvailability(params as any).promise();
  }

  getSensitivityInspectionTemplate: (params: RawParamsFrom<'getSensitivityInspectionTemplate'>) => Promise<ReturnTypeFrom<'getSensitivityInspectionTemplate'>>  = async params => {
  // undefined
    return this.client.getSensitivityInspectionTemplate(params as any).promise();
  }

  async getUsageStatistics(params: { [K in keyof ParamsFrom<'getUsageStatistics', { next?: string, limit?: number }>]: ParamsFrom<'getUsageStatistics', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getUsageStatistics'>]-?: ReturnTypeFrom<'getUsageStatistics'>[K]}['records'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"records"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getUsageStatistics({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getUsageStatistics' })).toString('base64') : undefined;
    const member = (Array.isArray(result.records ?? []) ? (result.records ?? []) : [result.records]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getUsageTotals: (params: RawParamsFrom<'getUsageTotals'>) => Promise<ReturnTypeFrom<'getUsageTotals'>>  = async params => {
  // undefined
    return this.client.getUsageTotals(params as any).promise();
  }

  async listAllowLists(params: { [K in keyof ParamsFrom<'listAllowLists', { next?: string, limit?: number }>]: ParamsFrom<'listAllowLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAllowLists'>]-?: ReturnTypeFrom<'listAllowLists'>[K]}['allowLists'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"allowLists"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAllowLists({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAllowLists' })).toString('base64') : undefined;
    const member = (Array.isArray(result.allowLists ?? []) ? (result.allowLists ?? []) : [result.allowLists]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClassificationJobs(params: { [K in keyof ParamsFrom<'listClassificationJobs', { next?: string, limit?: number }>]: ParamsFrom<'listClassificationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClassificationJobs'>]-?: ReturnTypeFrom<'listClassificationJobs'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClassificationJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listClassificationJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClassificationScopes(params: { [K in keyof ParamsFrom<'listClassificationScopes', { next?: string }>]: ParamsFrom<'listClassificationScopes', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClassificationScopes'>]-?: ReturnTypeFrom<'listClassificationScopes'>[K]}['classificationScopes'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"classificationScopes"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listClassificationScopes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listClassificationScopes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.classificationScopes ?? []) ? (result.classificationScopes ?? []) : [result.classificationScopes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomDataIdentifiers(params: { [K in keyof ParamsFrom<'listCustomDataIdentifiers', { next?: string, limit?: number }>]: ParamsFrom<'listCustomDataIdentifiers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomDataIdentifiers'>]-?: ReturnTypeFrom<'listCustomDataIdentifiers'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCustomDataIdentifiers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCustomDataIdentifiers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindings(params: { [K in keyof ParamsFrom<'listFindings', { next?: string, limit?: number }>]: ParamsFrom<'listFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['findingIds'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findingIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFindings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.findingIds ?? []) ? (result.findingIds ?? []) : [result.findingIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindingsFilters(params: { [K in keyof ParamsFrom<'listFindingsFilters', { next?: string, limit?: number }>]: ParamsFrom<'listFindingsFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFindingsFilters'>]-?: ReturnTypeFrom<'listFindingsFilters'>[K]}['findingsFilterListItems'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findingsFilterListItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindingsFilters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFindingsFilters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.findingsFilterListItems ?? []) ? (result.findingsFilterListItems ?? []) : [result.findingsFilterListItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInvitations(params: { [K in keyof ParamsFrom<'listInvitations', { next?: string, limit?: number }>]: ParamsFrom<'listInvitations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInvitations'>]-?: ReturnTypeFrom<'listInvitations'>[K]}['invitations'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"invitations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listInvitations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listInvitations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.invitations ?? []) ? (result.invitations ?? []) : [result.invitations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listManagedDataIdentifiers(params: { [K in keyof ParamsFrom<'listManagedDataIdentifiers', { next?: string }>]: ParamsFrom<'listManagedDataIdentifiers', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listManagedDataIdentifiers'>]-?: ReturnTypeFrom<'listManagedDataIdentifiers'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"items"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listManagedDataIdentifiers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listManagedDataIdentifiers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMembers(params: { [K in keyof ParamsFrom<'listMembers', { next?: string, limit?: number }>]: ParamsFrom<'listMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['members'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"members"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMembers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listMembers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.members ?? []) ? (result.members ?? []) : [result.members]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOrganizationAdminAccounts(params: { [K in keyof ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>]: ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOrganizationAdminAccounts'>]-?: ReturnTypeFrom<'listOrganizationAdminAccounts'>[K]}['adminAccounts'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"adminAccounts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listOrganizationAdminAccounts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listOrganizationAdminAccounts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.adminAccounts ?? []) ? (result.adminAccounts ?? []) : [result.adminAccounts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceProfileArtifacts(params: { [K in keyof ParamsFrom<'listResourceProfileArtifacts', { next?: string }>]: ParamsFrom<'listResourceProfileArtifacts', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceProfileArtifacts'>]-?: ReturnTypeFrom<'listResourceProfileArtifacts'>[K]}['artifacts'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"artifacts"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listResourceProfileArtifacts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listResourceProfileArtifacts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.artifacts ?? []) ? (result.artifacts ?? []) : [result.artifacts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceProfileDetections(params: { [K in keyof ParamsFrom<'listResourceProfileDetections', { next?: string, limit?: number }>]: ParamsFrom<'listResourceProfileDetections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceProfileDetections'>]-?: ReturnTypeFrom<'listResourceProfileDetections'>[K]}['detections'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"detections"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listResourceProfileDetections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listResourceProfileDetections' })).toString('base64') : undefined;
    const member = (Array.isArray(result.detections ?? []) ? (result.detections ?? []) : [result.detections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSensitivityInspectionTemplates(params: { [K in keyof ParamsFrom<'listSensitivityInspectionTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listSensitivityInspectionTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSensitivityInspectionTemplates'>]-?: ReturnTypeFrom<'listSensitivityInspectionTemplates'>[K]}['sensitivityInspectionTemplates'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"sensitivityInspectionTemplates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSensitivityInspectionTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSensitivityInspectionTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.sensitivityInspectionTemplates ?? []) ? (result.sensitivityInspectionTemplates ?? []) : [result.sensitivityInspectionTemplates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putClassificationExportConfiguration: (params: RawParamsFrom<'putClassificationExportConfiguration'>) => Promise<ReturnTypeFrom<'putClassificationExportConfiguration'>>  = async params => {
  // undefined
    return this.client.putClassificationExportConfiguration(params as any).promise();
  }

  putFindingsPublicationConfiguration: (params: RawParamsFrom<'putFindingsPublicationConfiguration'>) => Promise<ReturnTypeFrom<'putFindingsPublicationConfiguration'>>  = async params => {
  // undefined
    return this.client.putFindingsPublicationConfiguration(params as any).promise();
  }

  async searchResources(params: { [K in keyof ParamsFrom<'searchResources', { next?: string, limit?: number }>]: ParamsFrom<'searchResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchResources'>]-?: ReturnTypeFrom<'searchResources'>[K]}['matchingResources'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"matchingResources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.matchingResources ?? []) ? (result.matchingResources ?? []) : [result.matchingResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testCustomDataIdentifier: (params: RawParamsFrom<'testCustomDataIdentifier'>) => Promise<ReturnTypeFrom<'testCustomDataIdentifier'>>  = async params => {
  // undefined
    return this.client.testCustomDataIdentifier(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAllowList: (params: RawParamsFrom<'updateAllowList'>) => Promise<ReturnTypeFrom<'updateAllowList'>>  = async params => {
  // undefined
    return this.client.updateAllowList(params as any).promise();
  }

  updateAutomatedDiscoveryConfiguration: (params: RawParamsFrom<'updateAutomatedDiscoveryConfiguration'>) => Promise<ReturnTypeFrom<'updateAutomatedDiscoveryConfiguration'>>  = async params => {
  // undefined
    return this.client.updateAutomatedDiscoveryConfiguration(params as any).promise();
  }

  updateClassificationJob: (params: RawParamsFrom<'updateClassificationJob'>) => Promise<ReturnTypeFrom<'updateClassificationJob'>>  = async params => {
  // undefined
    return this.client.updateClassificationJob(params as any).promise();
  }

  updateClassificationScope: (params: RawParamsFrom<'updateClassificationScope'>) => Promise<ReturnTypeFrom<'updateClassificationScope'>>  = async params => {
  // undefined
    return this.client.updateClassificationScope(params as any).promise();
  }

  updateFindingsFilter: (params: RawParamsFrom<'updateFindingsFilter'>) => Promise<ReturnTypeFrom<'updateFindingsFilter'>>  = async params => {
  // undefined
    return this.client.updateFindingsFilter(params as any).promise();
  }

  updateMacieSession: (params: RawParamsFrom<'updateMacieSession'>) => Promise<ReturnTypeFrom<'updateMacieSession'>>  = async params => {
  // undefined
    return this.client.updateMacieSession(params as any).promise();
  }

  updateMemberSession: (params: RawParamsFrom<'updateMemberSession'>) => Promise<ReturnTypeFrom<'updateMemberSession'>>  = async params => {
  // undefined
    return this.client.updateMemberSession(params as any).promise();
  }

  updateOrganizationConfiguration: (params: RawParamsFrom<'updateOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'updateOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateOrganizationConfiguration(params as any).promise();
  }

  updateResourceProfile: (params: RawParamsFrom<'updateResourceProfile'>) => Promise<ReturnTypeFrom<'updateResourceProfile'>>  = async params => {
  // undefined
    return this.client.updateResourceProfile(params as any).promise();
  }

  updateResourceProfileDetections: (params: RawParamsFrom<'updateResourceProfileDetections'>) => Promise<ReturnTypeFrom<'updateResourceProfileDetections'>>  = async params => {
  // undefined
    return this.client.updateResourceProfileDetections(params as any).promise();
  }

  updateRevealConfiguration: (params: RawParamsFrom<'updateRevealConfiguration'>) => Promise<ReturnTypeFrom<'updateRevealConfiguration'>>  = async params => {
  // undefined
    return this.client.updateRevealConfiguration(params as any).promise();
  }

  updateSensitivityInspectionTemplate: (params: RawParamsFrom<'updateSensitivityInspectionTemplate'>) => Promise<ReturnTypeFrom<'updateSensitivityInspectionTemplate'>>  = async params => {
  // undefined
    return this.client.updateSensitivityInspectionTemplate(params as any).promise();
  }
  
  static fromClient(client: AWSMacie2): Macie2 {
    return new Macie2(client) as any;
  }
  
  static client(options?: AWSMacie2.Types.ClientConfiguration): Macie2 {
    return new Macie2(new AWSMacie2(options)) as any;
  }
}  
