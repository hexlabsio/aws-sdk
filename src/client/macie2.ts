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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'macie2';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["describeBuckets","getUsageStatistics","listClassificationJobs","listCustomDataIdentifiers","listFindings","listFindingsFilters","listInvitations","listMembers","listOrganizationAdminAccounts","searchResources"];
    
  acceptInvitation: FunctionTypeFrom<'acceptInvitation'>;

  batchGetCustomDataIdentifiers: FunctionTypeFrom<'batchGetCustomDataIdentifiers'>;

  createAllowList: FunctionTypeFrom<'createAllowList'>;

  createClassificationJob: FunctionTypeFrom<'createClassificationJob'>;

  createCustomDataIdentifier: FunctionTypeFrom<'createCustomDataIdentifier'>;

  createFindingsFilter: FunctionTypeFrom<'createFindingsFilter'>;

  createInvitations: FunctionTypeFrom<'createInvitations'>;

  createMember: FunctionTypeFrom<'createMember'>;

  createSampleFindings: FunctionTypeFrom<'createSampleFindings'>;

  declineInvitations: FunctionTypeFrom<'declineInvitations'>;

  deleteAllowList: FunctionTypeFrom<'deleteAllowList'>;

  deleteCustomDataIdentifier: FunctionTypeFrom<'deleteCustomDataIdentifier'>;

  deleteFindingsFilter: FunctionTypeFrom<'deleteFindingsFilter'>;

  deleteInvitations: FunctionTypeFrom<'deleteInvitations'>;

  deleteMember: FunctionTypeFrom<'deleteMember'>;

  describeBuckets(params: { [K in keyof Omit<ParamsFrom<'describeBuckets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeBuckets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeBuckets'>]-?: ReturnTypeFrom<'describeBuckets'>[K]}['buckets'] }>
  describeBuckets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeBuckets'>]-?: ReturnTypeFrom<'describeBuckets'>[K]}['buckets'] }>;

  describeClassificationJob: FunctionTypeFrom<'describeClassificationJob'>;

  describeOrganizationConfiguration: FunctionTypeFrom<'describeOrganizationConfiguration'>;

  disableMacie: FunctionTypeFrom<'disableMacie'>;

  disableOrganizationAdminAccount: FunctionTypeFrom<'disableOrganizationAdminAccount'>;

  disassociateFromAdministratorAccount: FunctionTypeFrom<'disassociateFromAdministratorAccount'>;

  disassociateFromMasterAccount: FunctionTypeFrom<'disassociateFromMasterAccount'>;

  disassociateMember: FunctionTypeFrom<'disassociateMember'>;

  enableMacie: FunctionTypeFrom<'enableMacie'>;

  enableOrganizationAdminAccount: FunctionTypeFrom<'enableOrganizationAdminAccount'>;

  getAdministratorAccount: FunctionTypeFrom<'getAdministratorAccount'>;

  getAllowList: FunctionTypeFrom<'getAllowList'>;

  getBucketStatistics: FunctionTypeFrom<'getBucketStatistics'>;

  getClassificationExportConfiguration: FunctionTypeFrom<'getClassificationExportConfiguration'>;

  getCustomDataIdentifier: FunctionTypeFrom<'getCustomDataIdentifier'>;

  getFindingStatistics: FunctionTypeFrom<'getFindingStatistics'>;

  getFindings: FunctionTypeFrom<'getFindings'>;

  getFindingsFilter: FunctionTypeFrom<'getFindingsFilter'>;

  getFindingsPublicationConfiguration: FunctionTypeFrom<'getFindingsPublicationConfiguration'>;

  getInvitationsCount: FunctionTypeFrom<'getInvitationsCount'>;

  getMacieSession: FunctionTypeFrom<'getMacieSession'>;

  getMasterAccount: FunctionTypeFrom<'getMasterAccount'>;

  getMember: FunctionTypeFrom<'getMember'>;

  getRevealConfiguration: FunctionTypeFrom<'getRevealConfiguration'>;

  getSensitiveDataOccurrences: FunctionTypeFrom<'getSensitiveDataOccurrences'>;

  getSensitiveDataOccurrencesAvailability: FunctionTypeFrom<'getSensitiveDataOccurrencesAvailability'>;

  getUsageStatistics(params: { [K in keyof Omit<ParamsFrom<'getUsageStatistics', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getUsageStatistics', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getUsageStatistics'>]-?: ReturnTypeFrom<'getUsageStatistics'>[K]}['records'] }>
  getUsageStatistics(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getUsageStatistics'>]-?: ReturnTypeFrom<'getUsageStatistics'>[K]}['records'] }>;

  getUsageTotals: FunctionTypeFrom<'getUsageTotals'>;

  listAllowLists: FunctionTypeFrom<'listAllowLists'>;

  listClassificationJobs(params: { [K in keyof Omit<ParamsFrom<'listClassificationJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listClassificationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClassificationJobs'>]-?: ReturnTypeFrom<'listClassificationJobs'>[K]}['items'] }>
  listClassificationJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClassificationJobs'>]-?: ReturnTypeFrom<'listClassificationJobs'>[K]}['items'] }>;

  listCustomDataIdentifiers(params: { [K in keyof Omit<ParamsFrom<'listCustomDataIdentifiers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCustomDataIdentifiers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomDataIdentifiers'>]-?: ReturnTypeFrom<'listCustomDataIdentifiers'>[K]}['items'] }>
  listCustomDataIdentifiers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomDataIdentifiers'>]-?: ReturnTypeFrom<'listCustomDataIdentifiers'>[K]}['items'] }>;

  listFindings(params: { [K in keyof Omit<ParamsFrom<'listFindings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['findingIds'] }>
  listFindings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['findingIds'] }>;

  listFindingsFilters(params: { [K in keyof Omit<ParamsFrom<'listFindingsFilters', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFindingsFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindingsFilters'>]-?: ReturnTypeFrom<'listFindingsFilters'>[K]}['findingsFilterListItems'] }>
  listFindingsFilters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindingsFilters'>]-?: ReturnTypeFrom<'listFindingsFilters'>[K]}['findingsFilterListItems'] }>;

  listInvitations(params: { [K in keyof Omit<ParamsFrom<'listInvitations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listInvitations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInvitations'>]-?: ReturnTypeFrom<'listInvitations'>[K]}['invitations'] }>
  listInvitations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInvitations'>]-?: ReturnTypeFrom<'listInvitations'>[K]}['invitations'] }>;

  listManagedDataIdentifiers: FunctionTypeFrom<'listManagedDataIdentifiers'>;

  listMembers(params: { [K in keyof Omit<ParamsFrom<'listMembers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['members'] }>
  listMembers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['members'] }>;

  listOrganizationAdminAccounts(params: { [K in keyof Omit<ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOrganizationAdminAccounts'>]-?: ReturnTypeFrom<'listOrganizationAdminAccounts'>[K]}['adminAccounts'] }>
  listOrganizationAdminAccounts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOrganizationAdminAccounts'>]-?: ReturnTypeFrom<'listOrganizationAdminAccounts'>[K]}['adminAccounts'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putClassificationExportConfiguration: FunctionTypeFrom<'putClassificationExportConfiguration'>;

  putFindingsPublicationConfiguration: FunctionTypeFrom<'putFindingsPublicationConfiguration'>;

  searchResources(params: { [K in keyof Omit<ParamsFrom<'searchResources', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchResources'>]-?: ReturnTypeFrom<'searchResources'>[K]}['matchingResources'] }>
  searchResources(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchResources'>]-?: ReturnTypeFrom<'searchResources'>[K]}['matchingResources'] }>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testCustomDataIdentifier: FunctionTypeFrom<'testCustomDataIdentifier'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAllowList: FunctionTypeFrom<'updateAllowList'>;

  updateClassificationJob: FunctionTypeFrom<'updateClassificationJob'>;

  updateFindingsFilter: FunctionTypeFrom<'updateFindingsFilter'>;

  updateMacieSession: FunctionTypeFrom<'updateMacieSession'>;

  updateMemberSession: FunctionTypeFrom<'updateMemberSession'>;

  updateOrganizationConfiguration: FunctionTypeFrom<'updateOrganizationConfiguration'>;

  updateRevealConfiguration: FunctionTypeFrom<'updateRevealConfiguration'>
}
 
export class Macie2 implements ClientType {
  private constructor(private readonly client: AWSMacie2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'macie2';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["describeBuckets","getUsageStatistics","listClassificationJobs","listCustomDataIdentifiers","listFindings","listFindingsFilters","listInvitations","listMembers","listOrganizationAdminAccounts","searchResources"] as const;
  
  async acceptInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.acceptInvitation(...args).promise()
  }

  async batchGetCustomDataIdentifiers(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetCustomDataIdentifiers(...args).promise()
  }

  async createAllowList(...args: any): Promise<any> {
  // undefined
    return this.client.createAllowList(...args).promise()
  }

  async createClassificationJob(...args: any): Promise<any> {
  // undefined
    return this.client.createClassificationJob(...args).promise()
  }

  async createCustomDataIdentifier(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomDataIdentifier(...args).promise()
  }

  async createFindingsFilter(...args: any): Promise<any> {
  // undefined
    return this.client.createFindingsFilter(...args).promise()
  }

  async createInvitations(...args: any): Promise<any> {
  // undefined
    return this.client.createInvitations(...args).promise()
  }

  async createMember(...args: any): Promise<any> {
  // undefined
    return this.client.createMember(...args).promise()
  }

  async createSampleFindings(...args: any): Promise<any> {
  // undefined
    return this.client.createSampleFindings(...args).promise()
  }

  async declineInvitations(...args: any): Promise<any> {
  // undefined
    return this.client.declineInvitations(...args).promise()
  }

  async deleteAllowList(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAllowList(...args).promise()
  }

  async deleteCustomDataIdentifier(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomDataIdentifier(...args).promise()
  }

  async deleteFindingsFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFindingsFilter(...args).promise()
  }

  async deleteInvitations(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInvitations(...args).promise()
  }

  async deleteMember(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMember(...args).promise()
  }

  async describeBuckets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"buckets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeBuckets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.buckets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClassificationJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeClassificationJob(...args).promise()
  }

  async describeOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganizationConfiguration(...args).promise()
  }

  async disableMacie(...args: any): Promise<any> {
  // undefined
    return this.client.disableMacie(...args).promise()
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

  async disassociateMember(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateMember(...args).promise()
  }

  async enableMacie(...args: any): Promise<any> {
  // undefined
    return this.client.enableMacie(...args).promise()
  }

  async enableOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.enableOrganizationAdminAccount(...args).promise()
  }

  async getAdministratorAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getAdministratorAccount(...args).promise()
  }

  async getAllowList(...args: any): Promise<any> {
  // undefined
    return this.client.getAllowList(...args).promise()
  }

  async getBucketStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketStatistics(...args).promise()
  }

  async getClassificationExportConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getClassificationExportConfiguration(...args).promise()
  }

  async getCustomDataIdentifier(...args: any): Promise<any> {
  // undefined
    return this.client.getCustomDataIdentifier(...args).promise()
  }

  async getFindingStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getFindingStatistics(...args).promise()
  }

  async getFindings(...args: any): Promise<any> {
  // undefined
    return this.client.getFindings(...args).promise()
  }

  async getFindingsFilter(...args: any): Promise<any> {
  // undefined
    return this.client.getFindingsFilter(...args).promise()
  }

  async getFindingsPublicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getFindingsPublicationConfiguration(...args).promise()
  }

  async getInvitationsCount(...args: any): Promise<any> {
  // undefined
    return this.client.getInvitationsCount(...args).promise()
  }

  async getMacieSession(...args: any): Promise<any> {
  // undefined
    return this.client.getMacieSession(...args).promise()
  }

  async getMasterAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getMasterAccount(...args).promise()
  }

  async getMember(...args: any): Promise<any> {
  // undefined
    return this.client.getMember(...args).promise()
  }

  async getRevealConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getRevealConfiguration(...args).promise()
  }

  async getSensitiveDataOccurrences(...args: any): Promise<any> {
  // undefined
    return this.client.getSensitiveDataOccurrences(...args).promise()
  }

  async getSensitiveDataOccurrencesAvailability(...args: any): Promise<any> {
  // undefined
    return this.client.getSensitiveDataOccurrencesAvailability(...args).promise()
  }

  async getUsageStatistics(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"records"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getUsageStatistics(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.records ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getUsageTotals(...args: any): Promise<any> {
  // undefined
    return this.client.getUsageTotals(...args).promise()
  }

  async listAllowLists(...args: any): Promise<any> {
  // undefined
    return this.client.listAllowLists(...args).promise()
  }

  async listClassificationJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClassificationJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomDataIdentifiers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCustomDataIdentifiers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findingIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.findingIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindingsFilters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findingsFilterListItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindingsFilters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.findingsFilterListItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInvitations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"invitations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listInvitations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.invitations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listManagedDataIdentifiers(...args: any): Promise<any> {
  // undefined
    return this.client.listManagedDataIdentifiers(...args).promise()
  }

  async listMembers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"members"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMembers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.members ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOrganizationAdminAccounts(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"adminAccounts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listOrganizationAdminAccounts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.adminAccounts ?? [];
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

  async putClassificationExportConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putClassificationExportConfiguration(...args).promise()
  }

  async putFindingsPublicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putFindingsPublicationConfiguration(...args).promise()
  }

  async searchResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"matchingResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.matchingResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testCustomDataIdentifier(...args: any): Promise<any> {
  // undefined
    return this.client.testCustomDataIdentifier(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAllowList(...args: any): Promise<any> {
  // undefined
    return this.client.updateAllowList(...args).promise()
  }

  async updateClassificationJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateClassificationJob(...args).promise()
  }

  async updateFindingsFilter(...args: any): Promise<any> {
  // undefined
    return this.client.updateFindingsFilter(...args).promise()
  }

  async updateMacieSession(...args: any): Promise<any> {
  // undefined
    return this.client.updateMacieSession(...args).promise()
  }

  async updateMemberSession(...args: any): Promise<any> {
  // undefined
    return this.client.updateMemberSession(...args).promise()
  }

  async updateOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateOrganizationConfiguration(...args).promise()
  }

  async updateRevealConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateRevealConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSMacie2): ClientType {
    return new Macie2(client) as any;
  }
  
  static client(options?: AWSMacie2.Types.ClientConfiguration): ClientType {
    return new Macie2(new AWSMacie2(options)) as any;
  }
}  
