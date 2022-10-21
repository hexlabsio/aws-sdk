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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSInspector2> = AWSInspector2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Inspector2 {
  private constructor(private readonly client: AWSInspector2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'inspector2' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAccountPermissions","listCoverage","listCoverageStatistics","listDelegatedAdminAccounts","listFilters","listFindings","listMembers","listUsageTotals"] as const;
  
  associateMember: (params: RawParamsFrom<'associateMember'>) => Promise<ReturnTypeFrom<'associateMember'>>  = async params => {
  // undefined
    return this.client.associateMember(params as any).promise();
  }

  batchGetAccountStatus: (params: RawParamsFrom<'batchGetAccountStatus'>) => Promise<ReturnTypeFrom<'batchGetAccountStatus'>>  = async params => {
  // undefined
    return this.client.batchGetAccountStatus(params as any).promise();
  }

  batchGetFreeTrialInfo: (params: RawParamsFrom<'batchGetFreeTrialInfo'>) => Promise<ReturnTypeFrom<'batchGetFreeTrialInfo'>>  = async params => {
  // undefined
    return this.client.batchGetFreeTrialInfo(params as any).promise();
  }

  cancelFindingsReport: (params: RawParamsFrom<'cancelFindingsReport'>) => Promise<ReturnTypeFrom<'cancelFindingsReport'>>  = async params => {
  // undefined
    return this.client.cancelFindingsReport(params as any).promise();
  }

  createFilter: (params: RawParamsFrom<'createFilter'>) => Promise<ReturnTypeFrom<'createFilter'>>  = async params => {
  // undefined
    return this.client.createFilter(params as any).promise();
  }

  createFindingsReport: (params: RawParamsFrom<'createFindingsReport'>) => Promise<ReturnTypeFrom<'createFindingsReport'>>  = async params => {
  // undefined
    return this.client.createFindingsReport(params as any).promise();
  }

  deleteFilter: (params: RawParamsFrom<'deleteFilter'>) => Promise<ReturnTypeFrom<'deleteFilter'>>  = async params => {
  // undefined
    return this.client.deleteFilter(params as any).promise();
  }

  describeOrganizationConfiguration: (params: RawParamsFrom<'describeOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'describeOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.describeOrganizationConfiguration(params as any).promise();
  }

  disable: (params: RawParamsFrom<'disable'>) => Promise<ReturnTypeFrom<'disable'>>  = async params => {
  // undefined
    return this.client.disable(params as any).promise();
  }

  disableDelegatedAdminAccount: (params: RawParamsFrom<'disableDelegatedAdminAccount'>) => Promise<ReturnTypeFrom<'disableDelegatedAdminAccount'>>  = async params => {
  // undefined
    return this.client.disableDelegatedAdminAccount(params as any).promise();
  }

  disassociateMember: (params: RawParamsFrom<'disassociateMember'>) => Promise<ReturnTypeFrom<'disassociateMember'>>  = async params => {
  // undefined
    return this.client.disassociateMember(params as any).promise();
  }

  enable: (params: RawParamsFrom<'enable'>) => Promise<ReturnTypeFrom<'enable'>>  = async params => {
  // undefined
    return this.client.enable(params as any).promise();
  }

  enableDelegatedAdminAccount: (params: RawParamsFrom<'enableDelegatedAdminAccount'>) => Promise<ReturnTypeFrom<'enableDelegatedAdminAccount'>>  = async params => {
  // undefined
    return this.client.enableDelegatedAdminAccount(params as any).promise();
  }

  getConfiguration: (params: RawParamsFrom<'getConfiguration'>) => Promise<ReturnTypeFrom<'getConfiguration'>>  = async params => {
  // undefined
    return this.client.getConfiguration(params as any).promise();
  }

  getDelegatedAdminAccount: (params: RawParamsFrom<'getDelegatedAdminAccount'>) => Promise<ReturnTypeFrom<'getDelegatedAdminAccount'>>  = async params => {
  // undefined
    return this.client.getDelegatedAdminAccount(params as any).promise();
  }

  getFindingsReportStatus: (params: RawParamsFrom<'getFindingsReportStatus'>) => Promise<ReturnTypeFrom<'getFindingsReportStatus'>>  = async params => {
  // undefined
    return this.client.getFindingsReportStatus(params as any).promise();
  }

  getMember: (params: RawParamsFrom<'getMember'>) => Promise<ReturnTypeFrom<'getMember'>>  = async params => {
  // undefined
    return this.client.getMember(params as any).promise();
  }

  async listAccountPermissions(params: { [K in keyof ParamsFrom<'listAccountPermissions', { next?: string, limit?: number }>]: ParamsFrom<'listAccountPermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountPermissions'>]-?: ReturnTypeFrom<'listAccountPermissions'>[K]}['permissions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"permissions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccountPermissions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAccountPermissions' })).toString('base64');
    const member = (Array.isArray(result.permissions ?? []) ? (result.permissions ?? []) : [result.permissions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoverage(params: { [K in keyof ParamsFrom<'listCoverage', { next?: string, limit?: number }>]: ParamsFrom<'listCoverage', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCoverage'>]-?: ReturnTypeFrom<'listCoverage'>[K]}['coveredResources'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"coveredResources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCoverage({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCoverage' })).toString('base64');
    const member = (Array.isArray(result.coveredResources ?? []) ? (result.coveredResources ?? []) : [result.coveredResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoverageStatistics(params: { [K in keyof ParamsFrom<'listCoverageStatistics', { next?: string }>]: ParamsFrom<'listCoverageStatistics', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCoverageStatistics'>]-?: ReturnTypeFrom<'listCoverageStatistics'>[K]}['countsByGroup'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"countsByGroup"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listCoverageStatistics({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCoverageStatistics' })).toString('base64');
    const member = (Array.isArray(result.countsByGroup ?? []) ? (result.countsByGroup ?? []) : [result.countsByGroup]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDelegatedAdminAccounts(params: { [K in keyof ParamsFrom<'listDelegatedAdminAccounts', { next?: string, limit?: number }>]: ParamsFrom<'listDelegatedAdminAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDelegatedAdminAccounts'>]-?: ReturnTypeFrom<'listDelegatedAdminAccounts'>[K]}['delegatedAdminAccounts'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"delegatedAdminAccounts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDelegatedAdminAccounts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDelegatedAdminAccounts' })).toString('base64');
    const member = (Array.isArray(result.delegatedAdminAccounts ?? []) ? (result.delegatedAdminAccounts ?? []) : [result.delegatedAdminAccounts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFilters(params: { [K in keyof ParamsFrom<'listFilters', { next?: string, limit?: number }>]: ParamsFrom<'listFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFilters'>]-?: ReturnTypeFrom<'listFilters'>[K]}['filters'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"filters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFilters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFilters' })).toString('base64');
    const member = (Array.isArray(result.filters ?? []) ? (result.filters ?? []) : [result.filters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindingAggregations(params: { [K in keyof ParamsFrom<'listFindingAggregations', { next?: string, limit?: number }>]: ParamsFrom<'listFindingAggregations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFindingAggregations'>]-?: ReturnTypeFrom<'listFindingAggregations'>[K]}['responses'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"responses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindingAggregations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFindingAggregations' })).toString('base64');
    const member = (Array.isArray(result.responses ?? []) ? (result.responses ?? []) : [result.responses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindings(params: { [K in keyof ParamsFrom<'listFindings', { next?: string, limit?: number }>]: ParamsFrom<'listFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['findings'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFindings' })).toString('base64');
    const member = (Array.isArray(result.findings ?? []) ? (result.findings ?? []) : [result.findings]) as any;
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
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listMembers' })).toString('base64');
    const member = (Array.isArray(result.members ?? []) ? (result.members ?? []) : [result.members]) as any;
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

  async listUsageTotals(params: { [K in keyof ParamsFrom<'listUsageTotals', { next?: string, limit?: number }>]: ParamsFrom<'listUsageTotals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsageTotals'>]-?: ReturnTypeFrom<'listUsageTotals'>[K]}['totals'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"totals"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listUsageTotals({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listUsageTotals' })).toString('base64');
    const member = (Array.isArray(result.totals ?? []) ? (result.totals ?? []) : [result.totals]) as any;
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

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateConfiguration: (params: RawParamsFrom<'updateConfiguration'>) => Promise<ReturnTypeFrom<'updateConfiguration'>>  = async params => {
  // undefined
    return this.client.updateConfiguration(params as any).promise();
  }

  updateFilter: (params: RawParamsFrom<'updateFilter'>) => Promise<ReturnTypeFrom<'updateFilter'>>  = async params => {
  // undefined
    return this.client.updateFilter(params as any).promise();
  }

  updateOrganizationConfiguration: (params: RawParamsFrom<'updateOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'updateOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateOrganizationConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSInspector2): Inspector2 {
    return new Inspector2(client) as any;
  }
  
  static client(options?: AWSInspector2.Types.ClientConfiguration): Inspector2 {
    return new Inspector2(new AWSInspector2(options)) as any;
  }
}  
