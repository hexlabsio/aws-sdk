import { Request, QuickSight as AWSQuickSight } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSQuickSight> = AWSQuickSight[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSQuickSight> = AWSQuickSight[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSQuickSight[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSQuickSight, Extras> = AWSQuickSight[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSQuickSight> = AWSQuickSight[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class QuickSight {
  private constructor(private readonly client: AWSQuickSight) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'quicksight' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = [] as const;
  
  cancelIngestion: (params: RawParamsFrom<'cancelIngestion'>) => Promise<ReturnTypeFrom<'cancelIngestion'>>  = async params => {
  // undefined
    return this.client.cancelIngestion(params as any).promise();
  }

  createAccountCustomization: (params: RawParamsFrom<'createAccountCustomization'>) => Promise<ReturnTypeFrom<'createAccountCustomization'>>  = async params => {
  // undefined
    return this.client.createAccountCustomization(params as any).promise();
  }

  createAccountSubscription: (params: RawParamsFrom<'createAccountSubscription'>) => Promise<ReturnTypeFrom<'createAccountSubscription'>>  = async params => {
  // undefined
    return this.client.createAccountSubscription(params as any).promise();
  }

  createAnalysis: (params: RawParamsFrom<'createAnalysis'>) => Promise<ReturnTypeFrom<'createAnalysis'>>  = async params => {
  // undefined
    return this.client.createAnalysis(params as any).promise();
  }

  createDashboard: (params: RawParamsFrom<'createDashboard'>) => Promise<ReturnTypeFrom<'createDashboard'>>  = async params => {
  // undefined
    return this.client.createDashboard(params as any).promise();
  }

  createDataSet: (params: RawParamsFrom<'createDataSet'>) => Promise<ReturnTypeFrom<'createDataSet'>>  = async params => {
  // undefined
    return this.client.createDataSet(params as any).promise();
  }

  createDataSource: (params: RawParamsFrom<'createDataSource'>) => Promise<ReturnTypeFrom<'createDataSource'>>  = async params => {
  // undefined
    return this.client.createDataSource(params as any).promise();
  }

  createFolder: (params: RawParamsFrom<'createFolder'>) => Promise<ReturnTypeFrom<'createFolder'>>  = async params => {
  // undefined
    return this.client.createFolder(params as any).promise();
  }

  createFolderMembership: (params: RawParamsFrom<'createFolderMembership'>) => Promise<ReturnTypeFrom<'createFolderMembership'>>  = async params => {
  // undefined
    return this.client.createFolderMembership(params as any).promise();
  }

  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  createGroupMembership: (params: RawParamsFrom<'createGroupMembership'>) => Promise<ReturnTypeFrom<'createGroupMembership'>>  = async params => {
  // undefined
    return this.client.createGroupMembership(params as any).promise();
  }

  createIAMPolicyAssignment: (params: RawParamsFrom<'createIAMPolicyAssignment'>) => Promise<ReturnTypeFrom<'createIAMPolicyAssignment'>>  = async params => {
  // undefined
    return this.client.createIAMPolicyAssignment(params as any).promise();
  }

  createIngestion: (params: RawParamsFrom<'createIngestion'>) => Promise<ReturnTypeFrom<'createIngestion'>>  = async params => {
  // undefined
    return this.client.createIngestion(params as any).promise();
  }

  createNamespace: (params: RawParamsFrom<'createNamespace'>) => Promise<ReturnTypeFrom<'createNamespace'>>  = async params => {
  // undefined
    return this.client.createNamespace(params as any).promise();
  }

  createTemplate: (params: RawParamsFrom<'createTemplate'>) => Promise<ReturnTypeFrom<'createTemplate'>>  = async params => {
  // undefined
    return this.client.createTemplate(params as any).promise();
  }

  createTemplateAlias: (params: RawParamsFrom<'createTemplateAlias'>) => Promise<ReturnTypeFrom<'createTemplateAlias'>>  = async params => {
  // undefined
    return this.client.createTemplateAlias(params as any).promise();
  }

  createTheme: (params: RawParamsFrom<'createTheme'>) => Promise<ReturnTypeFrom<'createTheme'>>  = async params => {
  // undefined
    return this.client.createTheme(params as any).promise();
  }

  createThemeAlias: (params: RawParamsFrom<'createThemeAlias'>) => Promise<ReturnTypeFrom<'createThemeAlias'>>  = async params => {
  // undefined
    return this.client.createThemeAlias(params as any).promise();
  }

  deleteAccountCustomization: (params: RawParamsFrom<'deleteAccountCustomization'>) => Promise<ReturnTypeFrom<'deleteAccountCustomization'>>  = async params => {
  // undefined
    return this.client.deleteAccountCustomization(params as any).promise();
  }

  deleteAnalysis: (params: RawParamsFrom<'deleteAnalysis'>) => Promise<ReturnTypeFrom<'deleteAnalysis'>>  = async params => {
  // undefined
    return this.client.deleteAnalysis(params as any).promise();
  }

  deleteDashboard: (params: RawParamsFrom<'deleteDashboard'>) => Promise<ReturnTypeFrom<'deleteDashboard'>>  = async params => {
  // undefined
    return this.client.deleteDashboard(params as any).promise();
  }

  deleteDataSet: (params: RawParamsFrom<'deleteDataSet'>) => Promise<ReturnTypeFrom<'deleteDataSet'>>  = async params => {
  // undefined
    return this.client.deleteDataSet(params as any).promise();
  }

  deleteDataSource: (params: RawParamsFrom<'deleteDataSource'>) => Promise<ReturnTypeFrom<'deleteDataSource'>>  = async params => {
  // undefined
    return this.client.deleteDataSource(params as any).promise();
  }

  deleteFolder: (params: RawParamsFrom<'deleteFolder'>) => Promise<ReturnTypeFrom<'deleteFolder'>>  = async params => {
  // undefined
    return this.client.deleteFolder(params as any).promise();
  }

  deleteFolderMembership: (params: RawParamsFrom<'deleteFolderMembership'>) => Promise<ReturnTypeFrom<'deleteFolderMembership'>>  = async params => {
  // undefined
    return this.client.deleteFolderMembership(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  deleteGroupMembership: (params: RawParamsFrom<'deleteGroupMembership'>) => Promise<ReturnTypeFrom<'deleteGroupMembership'>>  = async params => {
  // undefined
    return this.client.deleteGroupMembership(params as any).promise();
  }

  deleteIAMPolicyAssignment: (params: RawParamsFrom<'deleteIAMPolicyAssignment'>) => Promise<ReturnTypeFrom<'deleteIAMPolicyAssignment'>>  = async params => {
  // undefined
    return this.client.deleteIAMPolicyAssignment(params as any).promise();
  }

  deleteNamespace: (params: RawParamsFrom<'deleteNamespace'>) => Promise<ReturnTypeFrom<'deleteNamespace'>>  = async params => {
  // undefined
    return this.client.deleteNamespace(params as any).promise();
  }

  deleteTemplate: (params: RawParamsFrom<'deleteTemplate'>) => Promise<ReturnTypeFrom<'deleteTemplate'>>  = async params => {
  // undefined
    return this.client.deleteTemplate(params as any).promise();
  }

  deleteTemplateAlias: (params: RawParamsFrom<'deleteTemplateAlias'>) => Promise<ReturnTypeFrom<'deleteTemplateAlias'>>  = async params => {
  // undefined
    return this.client.deleteTemplateAlias(params as any).promise();
  }

  deleteTheme: (params: RawParamsFrom<'deleteTheme'>) => Promise<ReturnTypeFrom<'deleteTheme'>>  = async params => {
  // undefined
    return this.client.deleteTheme(params as any).promise();
  }

  deleteThemeAlias: (params: RawParamsFrom<'deleteThemeAlias'>) => Promise<ReturnTypeFrom<'deleteThemeAlias'>>  = async params => {
  // undefined
    return this.client.deleteThemeAlias(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  deleteUserByPrincipalId: (params: RawParamsFrom<'deleteUserByPrincipalId'>) => Promise<ReturnTypeFrom<'deleteUserByPrincipalId'>>  = async params => {
  // undefined
    return this.client.deleteUserByPrincipalId(params as any).promise();
  }

  describeAccountCustomization: (params: RawParamsFrom<'describeAccountCustomization'>) => Promise<ReturnTypeFrom<'describeAccountCustomization'>>  = async params => {
  // undefined
    return this.client.describeAccountCustomization(params as any).promise();
  }

  describeAccountSettings: (params: RawParamsFrom<'describeAccountSettings'>) => Promise<ReturnTypeFrom<'describeAccountSettings'>>  = async params => {
  // undefined
    return this.client.describeAccountSettings(params as any).promise();
  }

  describeAccountSubscription: (params: RawParamsFrom<'describeAccountSubscription'>) => Promise<ReturnTypeFrom<'describeAccountSubscription'>>  = async params => {
  // undefined
    return this.client.describeAccountSubscription(params as any).promise();
  }

  describeAnalysis: (params: RawParamsFrom<'describeAnalysis'>) => Promise<ReturnTypeFrom<'describeAnalysis'>>  = async params => {
  // undefined
    return this.client.describeAnalysis(params as any).promise();
  }

  describeAnalysisPermissions: (params: RawParamsFrom<'describeAnalysisPermissions'>) => Promise<ReturnTypeFrom<'describeAnalysisPermissions'>>  = async params => {
  // undefined
    return this.client.describeAnalysisPermissions(params as any).promise();
  }

  describeDashboard: (params: RawParamsFrom<'describeDashboard'>) => Promise<ReturnTypeFrom<'describeDashboard'>>  = async params => {
  // undefined
    return this.client.describeDashboard(params as any).promise();
  }

  describeDashboardPermissions: (params: RawParamsFrom<'describeDashboardPermissions'>) => Promise<ReturnTypeFrom<'describeDashboardPermissions'>>  = async params => {
  // undefined
    return this.client.describeDashboardPermissions(params as any).promise();
  }

  describeDataSet: (params: RawParamsFrom<'describeDataSet'>) => Promise<ReturnTypeFrom<'describeDataSet'>>  = async params => {
  // undefined
    return this.client.describeDataSet(params as any).promise();
  }

  describeDataSetPermissions: (params: RawParamsFrom<'describeDataSetPermissions'>) => Promise<ReturnTypeFrom<'describeDataSetPermissions'>>  = async params => {
  // undefined
    return this.client.describeDataSetPermissions(params as any).promise();
  }

  describeDataSource: (params: RawParamsFrom<'describeDataSource'>) => Promise<ReturnTypeFrom<'describeDataSource'>>  = async params => {
  // undefined
    return this.client.describeDataSource(params as any).promise();
  }

  describeDataSourcePermissions: (params: RawParamsFrom<'describeDataSourcePermissions'>) => Promise<ReturnTypeFrom<'describeDataSourcePermissions'>>  = async params => {
  // undefined
    return this.client.describeDataSourcePermissions(params as any).promise();
  }

  describeFolder: (params: RawParamsFrom<'describeFolder'>) => Promise<ReturnTypeFrom<'describeFolder'>>  = async params => {
  // undefined
    return this.client.describeFolder(params as any).promise();
  }

  describeFolderPermissions: (params: RawParamsFrom<'describeFolderPermissions'>) => Promise<ReturnTypeFrom<'describeFolderPermissions'>>  = async params => {
  // undefined
    return this.client.describeFolderPermissions(params as any).promise();
  }

  describeFolderResolvedPermissions: (params: RawParamsFrom<'describeFolderResolvedPermissions'>) => Promise<ReturnTypeFrom<'describeFolderResolvedPermissions'>>  = async params => {
  // undefined
    return this.client.describeFolderResolvedPermissions(params as any).promise();
  }

  describeGroup: (params: RawParamsFrom<'describeGroup'>) => Promise<ReturnTypeFrom<'describeGroup'>>  = async params => {
  // undefined
    return this.client.describeGroup(params as any).promise();
  }

  describeGroupMembership: (params: RawParamsFrom<'describeGroupMembership'>) => Promise<ReturnTypeFrom<'describeGroupMembership'>>  = async params => {
  // undefined
    return this.client.describeGroupMembership(params as any).promise();
  }

  describeIAMPolicyAssignment: (params: RawParamsFrom<'describeIAMPolicyAssignment'>) => Promise<ReturnTypeFrom<'describeIAMPolicyAssignment'>>  = async params => {
  // undefined
    return this.client.describeIAMPolicyAssignment(params as any).promise();
  }

  describeIngestion: (params: RawParamsFrom<'describeIngestion'>) => Promise<ReturnTypeFrom<'describeIngestion'>>  = async params => {
  // undefined
    return this.client.describeIngestion(params as any).promise();
  }

  describeIpRestriction: (params: RawParamsFrom<'describeIpRestriction'>) => Promise<ReturnTypeFrom<'describeIpRestriction'>>  = async params => {
  // undefined
    return this.client.describeIpRestriction(params as any).promise();
  }

  describeNamespace: (params: RawParamsFrom<'describeNamespace'>) => Promise<ReturnTypeFrom<'describeNamespace'>>  = async params => {
  // undefined
    return this.client.describeNamespace(params as any).promise();
  }

  describeTemplate: (params: RawParamsFrom<'describeTemplate'>) => Promise<ReturnTypeFrom<'describeTemplate'>>  = async params => {
  // undefined
    return this.client.describeTemplate(params as any).promise();
  }

  describeTemplateAlias: (params: RawParamsFrom<'describeTemplateAlias'>) => Promise<ReturnTypeFrom<'describeTemplateAlias'>>  = async params => {
  // undefined
    return this.client.describeTemplateAlias(params as any).promise();
  }

  describeTemplatePermissions: (params: RawParamsFrom<'describeTemplatePermissions'>) => Promise<ReturnTypeFrom<'describeTemplatePermissions'>>  = async params => {
  // undefined
    return this.client.describeTemplatePermissions(params as any).promise();
  }

  describeTheme: (params: RawParamsFrom<'describeTheme'>) => Promise<ReturnTypeFrom<'describeTheme'>>  = async params => {
  // undefined
    return this.client.describeTheme(params as any).promise();
  }

  describeThemeAlias: (params: RawParamsFrom<'describeThemeAlias'>) => Promise<ReturnTypeFrom<'describeThemeAlias'>>  = async params => {
  // undefined
    return this.client.describeThemeAlias(params as any).promise();
  }

  describeThemePermissions: (params: RawParamsFrom<'describeThemePermissions'>) => Promise<ReturnTypeFrom<'describeThemePermissions'>>  = async params => {
  // undefined
    return this.client.describeThemePermissions(params as any).promise();
  }

  describeUser: (params: RawParamsFrom<'describeUser'>) => Promise<ReturnTypeFrom<'describeUser'>>  = async params => {
  // undefined
    return this.client.describeUser(params as any).promise();
  }

  generateEmbedUrlForAnonymousUser: (params: RawParamsFrom<'generateEmbedUrlForAnonymousUser'>) => Promise<ReturnTypeFrom<'generateEmbedUrlForAnonymousUser'>>  = async params => {
  // undefined
    return this.client.generateEmbedUrlForAnonymousUser(params as any).promise();
  }

  generateEmbedUrlForRegisteredUser: (params: RawParamsFrom<'generateEmbedUrlForRegisteredUser'>) => Promise<ReturnTypeFrom<'generateEmbedUrlForRegisteredUser'>>  = async params => {
  // undefined
    return this.client.generateEmbedUrlForRegisteredUser(params as any).promise();
  }

  getDashboardEmbedUrl: (params: RawParamsFrom<'getDashboardEmbedUrl'>) => Promise<ReturnTypeFrom<'getDashboardEmbedUrl'>>  = async params => {
  // undefined
    return this.client.getDashboardEmbedUrl(params as any).promise();
  }

  getSessionEmbedUrl: (params: RawParamsFrom<'getSessionEmbedUrl'>) => Promise<ReturnTypeFrom<'getSessionEmbedUrl'>>  = async params => {
  // undefined
    return this.client.getSessionEmbedUrl(params as any).promise();
  }

  async listAnalyses(params: { [K in keyof ParamsFrom<'listAnalyses', { next?: string, limit?: number }>]: ParamsFrom<'listAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAnalyses'>]-?: ReturnTypeFrom<'listAnalyses'>[K]}['AnalysisSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AnalysisSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAnalyses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAnalyses' })).toString('base64');
    const member = (Array.isArray(result.AnalysisSummaryList ?? []) ? (result.AnalysisSummaryList ?? []) : [result.AnalysisSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDashboardVersions(params: { [K in keyof ParamsFrom<'listDashboardVersions', { next?: string, limit?: number }>]: ParamsFrom<'listDashboardVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDashboardVersions'>]-?: ReturnTypeFrom<'listDashboardVersions'>[K]}['DashboardVersionSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DashboardVersionSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDashboardVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDashboardVersions' })).toString('base64');
    const member = (Array.isArray(result.DashboardVersionSummaryList ?? []) ? (result.DashboardVersionSummaryList ?? []) : [result.DashboardVersionSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDashboards(params: { [K in keyof ParamsFrom<'listDashboards', { next?: string, limit?: number }>]: ParamsFrom<'listDashboards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDashboards'>]-?: ReturnTypeFrom<'listDashboards'>[K]}['DashboardSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DashboardSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDashboards({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDashboards' })).toString('base64');
    const member = (Array.isArray(result.DashboardSummaryList ?? []) ? (result.DashboardSummaryList ?? []) : [result.DashboardSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSets(params: { [K in keyof ParamsFrom<'listDataSets', { next?: string, limit?: number }>]: ParamsFrom<'listDataSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataSets'>]-?: ReturnTypeFrom<'listDataSets'>[K]}['DataSetSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataSetSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDataSets' })).toString('base64');
    const member = (Array.isArray(result.DataSetSummaries ?? []) ? (result.DataSetSummaries ?? []) : [result.DataSetSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSources(params: { [K in keyof ParamsFrom<'listDataSources', { next?: string, limit?: number }>]: ParamsFrom<'listDataSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataSources'>]-?: ReturnTypeFrom<'listDataSources'>[K]}['DataSources'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataSources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataSources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDataSources' })).toString('base64');
    const member = (Array.isArray(result.DataSources ?? []) ? (result.DataSources ?? []) : [result.DataSources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listFolderMembers: (params: RawParamsFrom<'listFolderMembers'>) => Promise<ReturnTypeFrom<'listFolderMembers'>>  = async params => {
  // undefined
    return this.client.listFolderMembers(params as any).promise();
  }

  listFolders: (params: RawParamsFrom<'listFolders'>) => Promise<ReturnTypeFrom<'listFolders'>>  = async params => {
  // undefined
    return this.client.listFolders(params as any).promise();
  }

  listGroupMemberships: (params: RawParamsFrom<'listGroupMemberships'>) => Promise<ReturnTypeFrom<'listGroupMemberships'>>  = async params => {
  // undefined
    return this.client.listGroupMemberships(params as any).promise();
  }

  listGroups: (params: RawParamsFrom<'listGroups'>) => Promise<ReturnTypeFrom<'listGroups'>>  = async params => {
  // undefined
    return this.client.listGroups(params as any).promise();
  }

  listIAMPolicyAssignments: (params: RawParamsFrom<'listIAMPolicyAssignments'>) => Promise<ReturnTypeFrom<'listIAMPolicyAssignments'>>  = async params => {
  // undefined
    return this.client.listIAMPolicyAssignments(params as any).promise();
  }

  listIAMPolicyAssignmentsForUser: (params: RawParamsFrom<'listIAMPolicyAssignmentsForUser'>) => Promise<ReturnTypeFrom<'listIAMPolicyAssignmentsForUser'>>  = async params => {
  // undefined
    return this.client.listIAMPolicyAssignmentsForUser(params as any).promise();
  }

  async listIngestions(params: { [K in keyof ParamsFrom<'listIngestions', { next?: string, limit?: number }>]: ParamsFrom<'listIngestions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIngestions'>]-?: ReturnTypeFrom<'listIngestions'>[K]}['Ingestions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Ingestions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIngestions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listIngestions' })).toString('base64');
    const member = (Array.isArray(result.Ingestions ?? []) ? (result.Ingestions ?? []) : [result.Ingestions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNamespaces(params: { [K in keyof ParamsFrom<'listNamespaces', { next?: string, limit?: number }>]: ParamsFrom<'listNamespaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNamespaces'>]-?: ReturnTypeFrom<'listNamespaces'>[K]}['Namespaces'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Namespaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNamespaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listNamespaces' })).toString('base64');
    const member = (Array.isArray(result.Namespaces ?? []) ? (result.Namespaces ?? []) : [result.Namespaces]) as any;
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

  async listTemplateAliases(params: { [K in keyof ParamsFrom<'listTemplateAliases', { next?: string, limit?: number }>]: ParamsFrom<'listTemplateAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTemplateAliases'>]-?: ReturnTypeFrom<'listTemplateAliases'>[K]}['TemplateAliasList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TemplateAliasList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTemplateAliases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTemplateAliases' })).toString('base64');
    const member = (Array.isArray(result.TemplateAliasList ?? []) ? (result.TemplateAliasList ?? []) : [result.TemplateAliasList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTemplateVersions(params: { [K in keyof ParamsFrom<'listTemplateVersions', { next?: string, limit?: number }>]: ParamsFrom<'listTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTemplateVersions'>]-?: ReturnTypeFrom<'listTemplateVersions'>[K]}['TemplateVersionSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TemplateVersionSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTemplateVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTemplateVersions' })).toString('base64');
    const member = (Array.isArray(result.TemplateVersionSummaryList ?? []) ? (result.TemplateVersionSummaryList ?? []) : [result.TemplateVersionSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTemplates(params: { [K in keyof ParamsFrom<'listTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTemplates'>]-?: ReturnTypeFrom<'listTemplates'>[K]}['TemplateSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TemplateSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTemplates' })).toString('base64');
    const member = (Array.isArray(result.TemplateSummaryList ?? []) ? (result.TemplateSummaryList ?? []) : [result.TemplateSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listThemeAliases: (params: RawParamsFrom<'listThemeAliases'>) => Promise<ReturnTypeFrom<'listThemeAliases'>>  = async params => {
  // undefined
    return this.client.listThemeAliases(params as any).promise();
  }

  async listThemeVersions(params: { [K in keyof ParamsFrom<'listThemeVersions', { next?: string, limit?: number }>]: ParamsFrom<'listThemeVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThemeVersions'>]-?: ReturnTypeFrom<'listThemeVersions'>[K]}['ThemeVersionSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ThemeVersionSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listThemeVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listThemeVersions' })).toString('base64');
    const member = (Array.isArray(result.ThemeVersionSummaryList ?? []) ? (result.ThemeVersionSummaryList ?? []) : [result.ThemeVersionSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThemes(params: { [K in keyof ParamsFrom<'listThemes', { next?: string, limit?: number }>]: ParamsFrom<'listThemes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThemes'>]-?: ReturnTypeFrom<'listThemes'>[K]}['ThemeSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ThemeSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listThemes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listThemes' })).toString('base64');
    const member = (Array.isArray(result.ThemeSummaryList ?? []) ? (result.ThemeSummaryList ?? []) : [result.ThemeSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listUserGroups: (params: RawParamsFrom<'listUserGroups'>) => Promise<ReturnTypeFrom<'listUserGroups'>>  = async params => {
  // undefined
    return this.client.listUserGroups(params as any).promise();
  }

  listUsers: (params: RawParamsFrom<'listUsers'>) => Promise<ReturnTypeFrom<'listUsers'>>  = async params => {
  // undefined
    return this.client.listUsers(params as any).promise();
  }

  registerUser: (params: RawParamsFrom<'registerUser'>) => Promise<ReturnTypeFrom<'registerUser'>>  = async params => {
  // undefined
    return this.client.registerUser(params as any).promise();
  }

  restoreAnalysis: (params: RawParamsFrom<'restoreAnalysis'>) => Promise<ReturnTypeFrom<'restoreAnalysis'>>  = async params => {
  // undefined
    return this.client.restoreAnalysis(params as any).promise();
  }

  async searchAnalyses(params: { [K in keyof ParamsFrom<'searchAnalyses', { next?: string, limit?: number }>]: ParamsFrom<'searchAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchAnalyses'>]-?: ReturnTypeFrom<'searchAnalyses'>[K]}['AnalysisSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AnalysisSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchAnalyses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'searchAnalyses' })).toString('base64');
    const member = (Array.isArray(result.AnalysisSummaryList ?? []) ? (result.AnalysisSummaryList ?? []) : [result.AnalysisSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchDashboards(params: { [K in keyof ParamsFrom<'searchDashboards', { next?: string, limit?: number }>]: ParamsFrom<'searchDashboards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchDashboards'>]-?: ReturnTypeFrom<'searchDashboards'>[K]}['DashboardSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DashboardSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchDashboards({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'searchDashboards' })).toString('base64');
    const member = (Array.isArray(result.DashboardSummaryList ?? []) ? (result.DashboardSummaryList ?? []) : [result.DashboardSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  searchFolders: (params: RawParamsFrom<'searchFolders'>) => Promise<ReturnTypeFrom<'searchFolders'>>  = async params => {
  // undefined
    return this.client.searchFolders(params as any).promise();
  }

  searchGroups: (params: RawParamsFrom<'searchGroups'>) => Promise<ReturnTypeFrom<'searchGroups'>>  = async params => {
  // undefined
    return this.client.searchGroups(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccountCustomization: (params: RawParamsFrom<'updateAccountCustomization'>) => Promise<ReturnTypeFrom<'updateAccountCustomization'>>  = async params => {
  // undefined
    return this.client.updateAccountCustomization(params as any).promise();
  }

  updateAccountSettings: (params: RawParamsFrom<'updateAccountSettings'>) => Promise<ReturnTypeFrom<'updateAccountSettings'>>  = async params => {
  // undefined
    return this.client.updateAccountSettings(params as any).promise();
  }

  updateAnalysis: (params: RawParamsFrom<'updateAnalysis'>) => Promise<ReturnTypeFrom<'updateAnalysis'>>  = async params => {
  // undefined
    return this.client.updateAnalysis(params as any).promise();
  }

  updateAnalysisPermissions: (params: RawParamsFrom<'updateAnalysisPermissions'>) => Promise<ReturnTypeFrom<'updateAnalysisPermissions'>>  = async params => {
  // undefined
    return this.client.updateAnalysisPermissions(params as any).promise();
  }

  updateDashboard: (params: RawParamsFrom<'updateDashboard'>) => Promise<ReturnTypeFrom<'updateDashboard'>>  = async params => {
  // undefined
    return this.client.updateDashboard(params as any).promise();
  }

  updateDashboardPermissions: (params: RawParamsFrom<'updateDashboardPermissions'>) => Promise<ReturnTypeFrom<'updateDashboardPermissions'>>  = async params => {
  // undefined
    return this.client.updateDashboardPermissions(params as any).promise();
  }

  updateDashboardPublishedVersion: (params: RawParamsFrom<'updateDashboardPublishedVersion'>) => Promise<ReturnTypeFrom<'updateDashboardPublishedVersion'>>  = async params => {
  // undefined
    return this.client.updateDashboardPublishedVersion(params as any).promise();
  }

  updateDataSet: (params: RawParamsFrom<'updateDataSet'>) => Promise<ReturnTypeFrom<'updateDataSet'>>  = async params => {
  // undefined
    return this.client.updateDataSet(params as any).promise();
  }

  updateDataSetPermissions: (params: RawParamsFrom<'updateDataSetPermissions'>) => Promise<ReturnTypeFrom<'updateDataSetPermissions'>>  = async params => {
  // undefined
    return this.client.updateDataSetPermissions(params as any).promise();
  }

  updateDataSource: (params: RawParamsFrom<'updateDataSource'>) => Promise<ReturnTypeFrom<'updateDataSource'>>  = async params => {
  // undefined
    return this.client.updateDataSource(params as any).promise();
  }

  updateDataSourcePermissions: (params: RawParamsFrom<'updateDataSourcePermissions'>) => Promise<ReturnTypeFrom<'updateDataSourcePermissions'>>  = async params => {
  // undefined
    return this.client.updateDataSourcePermissions(params as any).promise();
  }

  updateFolder: (params: RawParamsFrom<'updateFolder'>) => Promise<ReturnTypeFrom<'updateFolder'>>  = async params => {
  // undefined
    return this.client.updateFolder(params as any).promise();
  }

  updateFolderPermissions: (params: RawParamsFrom<'updateFolderPermissions'>) => Promise<ReturnTypeFrom<'updateFolderPermissions'>>  = async params => {
  // undefined
    return this.client.updateFolderPermissions(params as any).promise();
  }

  updateGroup: (params: RawParamsFrom<'updateGroup'>) => Promise<ReturnTypeFrom<'updateGroup'>>  = async params => {
  // undefined
    return this.client.updateGroup(params as any).promise();
  }

  updateIAMPolicyAssignment: (params: RawParamsFrom<'updateIAMPolicyAssignment'>) => Promise<ReturnTypeFrom<'updateIAMPolicyAssignment'>>  = async params => {
  // undefined
    return this.client.updateIAMPolicyAssignment(params as any).promise();
  }

  updateIpRestriction: (params: RawParamsFrom<'updateIpRestriction'>) => Promise<ReturnTypeFrom<'updateIpRestriction'>>  = async params => {
  // undefined
    return this.client.updateIpRestriction(params as any).promise();
  }

  updatePublicSharingSettings: (params: RawParamsFrom<'updatePublicSharingSettings'>) => Promise<ReturnTypeFrom<'updatePublicSharingSettings'>>  = async params => {
  // undefined
    return this.client.updatePublicSharingSettings(params as any).promise();
  }

  updateTemplate: (params: RawParamsFrom<'updateTemplate'>) => Promise<ReturnTypeFrom<'updateTemplate'>>  = async params => {
  // undefined
    return this.client.updateTemplate(params as any).promise();
  }

  updateTemplateAlias: (params: RawParamsFrom<'updateTemplateAlias'>) => Promise<ReturnTypeFrom<'updateTemplateAlias'>>  = async params => {
  // undefined
    return this.client.updateTemplateAlias(params as any).promise();
  }

  updateTemplatePermissions: (params: RawParamsFrom<'updateTemplatePermissions'>) => Promise<ReturnTypeFrom<'updateTemplatePermissions'>>  = async params => {
  // undefined
    return this.client.updateTemplatePermissions(params as any).promise();
  }

  updateTheme: (params: RawParamsFrom<'updateTheme'>) => Promise<ReturnTypeFrom<'updateTheme'>>  = async params => {
  // undefined
    return this.client.updateTheme(params as any).promise();
  }

  updateThemeAlias: (params: RawParamsFrom<'updateThemeAlias'>) => Promise<ReturnTypeFrom<'updateThemeAlias'>>  = async params => {
  // undefined
    return this.client.updateThemeAlias(params as any).promise();
  }

  updateThemePermissions: (params: RawParamsFrom<'updateThemePermissions'>) => Promise<ReturnTypeFrom<'updateThemePermissions'>>  = async params => {
  // undefined
    return this.client.updateThemePermissions(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }
  
  static fromClient(client: AWSQuickSight): QuickSight {
    return new QuickSight(client) as any;
  }
  
  static client(options?: AWSQuickSight.Types.ClientConfiguration): QuickSight {
    return new QuickSight(new AWSQuickSight(options)) as any;
  }
}  
