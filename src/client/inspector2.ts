import { Request, Inspector2 as AWSInspector2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSInspector2> = AWSInspector2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSInspector2> = AWSInspector2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSInspector2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSInspector2, Extras> = AWSInspector2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'inspector2';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listAccountPermissions","listCoverage","listCoverageStatistics","listDelegatedAdminAccounts","listFilters","listFindings","listMembers","listUsageTotals"];
    
  associateMember: FunctionTypeFrom<'associateMember'>;

  batchGetAccountStatus: FunctionTypeFrom<'batchGetAccountStatus'>;

  batchGetFreeTrialInfo: FunctionTypeFrom<'batchGetFreeTrialInfo'>;

  cancelFindingsReport: FunctionTypeFrom<'cancelFindingsReport'>;

  createFilter: FunctionTypeFrom<'createFilter'>;

  createFindingsReport: FunctionTypeFrom<'createFindingsReport'>;

  deleteFilter: FunctionTypeFrom<'deleteFilter'>;

  describeOrganizationConfiguration: FunctionTypeFrom<'describeOrganizationConfiguration'>;

  disable: FunctionTypeFrom<'disable'>;

  disableDelegatedAdminAccount: FunctionTypeFrom<'disableDelegatedAdminAccount'>;

  disassociateMember: FunctionTypeFrom<'disassociateMember'>;

  enable: FunctionTypeFrom<'enable'>;

  enableDelegatedAdminAccount: FunctionTypeFrom<'enableDelegatedAdminAccount'>;

  getConfiguration: FunctionTypeFrom<'getConfiguration'>;

  getDelegatedAdminAccount: FunctionTypeFrom<'getDelegatedAdminAccount'>;

  getFindingsReportStatus: FunctionTypeFrom<'getFindingsReportStatus'>;

  getMember: FunctionTypeFrom<'getMember'>;

  listAccountPermissions(params: { [K in keyof Omit<ParamsFrom<'listAccountPermissions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAccountPermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountPermissions'>]-?: ReturnTypeFrom<'listAccountPermissions'>[K]}['permissions'] }>
  listAccountPermissions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountPermissions'>]-?: ReturnTypeFrom<'listAccountPermissions'>[K]}['permissions'] }>;

  listCoverage(params: { [K in keyof Omit<ParamsFrom<'listCoverage', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCoverage', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoverage'>]-?: ReturnTypeFrom<'listCoverage'>[K]}['coveredResources'] }>
  listCoverage(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoverage'>]-?: ReturnTypeFrom<'listCoverage'>[K]}['coveredResources'] }>;

  listCoverageStatistics(params: { [K in keyof Omit<ParamsFrom<'listCoverageStatistics', { next?: string }>, 'nextToken'>]: ParamsFrom<'listCoverageStatistics', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoverageStatistics'>]-?: ReturnTypeFrom<'listCoverageStatistics'>[K]}['countsByGroup'] }>
  listCoverageStatistics(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoverageStatistics'>]-?: ReturnTypeFrom<'listCoverageStatistics'>[K]}['countsByGroup'] }>;

  listDelegatedAdminAccounts(params: { [K in keyof Omit<ParamsFrom<'listDelegatedAdminAccounts', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDelegatedAdminAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDelegatedAdminAccounts'>]-?: ReturnTypeFrom<'listDelegatedAdminAccounts'>[K]}['delegatedAdminAccounts'] }>
  listDelegatedAdminAccounts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDelegatedAdminAccounts'>]-?: ReturnTypeFrom<'listDelegatedAdminAccounts'>[K]}['delegatedAdminAccounts'] }>;

  listFilters(params: { [K in keyof Omit<ParamsFrom<'listFilters', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFilters'>]-?: ReturnTypeFrom<'listFilters'>[K]}['filters'] }>
  listFilters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFilters'>]-?: ReturnTypeFrom<'listFilters'>[K]}['filters'] }>;

  listFindingAggregations(params: { [K in keyof Omit<ParamsFrom<'listFindingAggregations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFindingAggregations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindingAggregations'>]-?: ReturnTypeFrom<'listFindingAggregations'>[K]}['responses'] }>
  ;

  listFindings(params: { [K in keyof Omit<ParamsFrom<'listFindings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['findings'] }>
  listFindings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['findings'] }>;

  listMembers(params: { [K in keyof Omit<ParamsFrom<'listMembers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['members'] }>
  listMembers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['members'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listUsageTotals(params: { [K in keyof Omit<ParamsFrom<'listUsageTotals', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listUsageTotals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsageTotals'>]-?: ReturnTypeFrom<'listUsageTotals'>[K]}['totals'] }>
  listUsageTotals(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsageTotals'>]-?: ReturnTypeFrom<'listUsageTotals'>[K]}['totals'] }>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConfiguration: FunctionTypeFrom<'updateConfiguration'>;

  updateFilter: FunctionTypeFrom<'updateFilter'>;

  updateOrganizationConfiguration: FunctionTypeFrom<'updateOrganizationConfiguration'>
}
 
export class Inspector2 implements ClientType {
  private constructor(private readonly client: AWSInspector2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'inspector2';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listAccountPermissions","listCoverage","listCoverageStatistics","listDelegatedAdminAccounts","listFilters","listFindings","listMembers","listUsageTotals"] as const;
  
  async associateMember(...args: any): Promise<any> {
  // undefined
    return this.client.associateMember(...args).promise()
  }

  async batchGetAccountStatus(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetAccountStatus(...args).promise()
  }

  async batchGetFreeTrialInfo(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetFreeTrialInfo(...args).promise()
  }

  async cancelFindingsReport(...args: any): Promise<any> {
  // undefined
    return this.client.cancelFindingsReport(...args).promise()
  }

  async createFilter(...args: any): Promise<any> {
  // undefined
    return this.client.createFilter(...args).promise()
  }

  async createFindingsReport(...args: any): Promise<any> {
  // undefined
    return this.client.createFindingsReport(...args).promise()
  }

  async deleteFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFilter(...args).promise()
  }

  async describeOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganizationConfiguration(...args).promise()
  }

  async disable(...args: any): Promise<any> {
  // undefined
    return this.client.disable(...args).promise()
  }

  async disableDelegatedAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disableDelegatedAdminAccount(...args).promise()
  }

  async disassociateMember(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateMember(...args).promise()
  }

  async enable(...args: any): Promise<any> {
  // undefined
    return this.client.enable(...args).promise()
  }

  async enableDelegatedAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.enableDelegatedAdminAccount(...args).promise()
  }

  async getConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getConfiguration(...args).promise()
  }

  async getDelegatedAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getDelegatedAdminAccount(...args).promise()
  }

  async getFindingsReportStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getFindingsReportStatus(...args).promise()
  }

  async getMember(...args: any): Promise<any> {
  // undefined
    return this.client.getMember(...args).promise()
  }

  async listAccountPermissions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"permissions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccountPermissions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.permissions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoverage(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"coveredResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCoverage(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.coveredResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoverageStatistics(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"countsByGroup"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listCoverageStatistics(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.countsByGroup ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDelegatedAdminAccounts(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"delegatedAdminAccounts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDelegatedAdminAccounts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.delegatedAdminAccounts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFilters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"filters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFilters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.filters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindingAggregations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"responses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindingAggregations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.responses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.findings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listUsageTotals(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"totals"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listUsageTotals(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.totals ?? [];
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

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfiguration(...args).promise()
  }

  async updateFilter(...args: any): Promise<any> {
  // undefined
    return this.client.updateFilter(...args).promise()
  }

  async updateOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateOrganizationConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSInspector2): ClientType {
    return new Inspector2(client) as any;
  }
  
  static client(options?: AWSInspector2.Types.ClientConfiguration): ClientType {
    return new Inspector2(new AWSInspector2(options)) as any;
  }
}  
