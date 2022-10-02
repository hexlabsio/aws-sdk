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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'quicksight';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly [];
    
  cancelIngestion: FunctionTypeFrom<'cancelIngestion'>;

  createAccountCustomization: FunctionTypeFrom<'createAccountCustomization'>;

  createAccountSubscription: FunctionTypeFrom<'createAccountSubscription'>;

  createAnalysis: FunctionTypeFrom<'createAnalysis'>;

  createDashboard: FunctionTypeFrom<'createDashboard'>;

  createDataSet: FunctionTypeFrom<'createDataSet'>;

  createDataSource: FunctionTypeFrom<'createDataSource'>;

  createFolder: FunctionTypeFrom<'createFolder'>;

  createFolderMembership: FunctionTypeFrom<'createFolderMembership'>;

  createGroup: FunctionTypeFrom<'createGroup'>;

  createGroupMembership: FunctionTypeFrom<'createGroupMembership'>;

  createIAMPolicyAssignment: FunctionTypeFrom<'createIAMPolicyAssignment'>;

  createIngestion: FunctionTypeFrom<'createIngestion'>;

  createNamespace: FunctionTypeFrom<'createNamespace'>;

  createTemplate: FunctionTypeFrom<'createTemplate'>;

  createTemplateAlias: FunctionTypeFrom<'createTemplateAlias'>;

  createTheme: FunctionTypeFrom<'createTheme'>;

  createThemeAlias: FunctionTypeFrom<'createThemeAlias'>;

  deleteAccountCustomization: FunctionTypeFrom<'deleteAccountCustomization'>;

  deleteAnalysis: FunctionTypeFrom<'deleteAnalysis'>;

  deleteDashboard: FunctionTypeFrom<'deleteDashboard'>;

  deleteDataSet: FunctionTypeFrom<'deleteDataSet'>;

  deleteDataSource: FunctionTypeFrom<'deleteDataSource'>;

  deleteFolder: FunctionTypeFrom<'deleteFolder'>;

  deleteFolderMembership: FunctionTypeFrom<'deleteFolderMembership'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  deleteGroupMembership: FunctionTypeFrom<'deleteGroupMembership'>;

  deleteIAMPolicyAssignment: FunctionTypeFrom<'deleteIAMPolicyAssignment'>;

  deleteNamespace: FunctionTypeFrom<'deleteNamespace'>;

  deleteTemplate: FunctionTypeFrom<'deleteTemplate'>;

  deleteTemplateAlias: FunctionTypeFrom<'deleteTemplateAlias'>;

  deleteTheme: FunctionTypeFrom<'deleteTheme'>;

  deleteThemeAlias: FunctionTypeFrom<'deleteThemeAlias'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  deleteUserByPrincipalId: FunctionTypeFrom<'deleteUserByPrincipalId'>;

  describeAccountCustomization: FunctionTypeFrom<'describeAccountCustomization'>;

  describeAccountSettings: FunctionTypeFrom<'describeAccountSettings'>;

  describeAccountSubscription: FunctionTypeFrom<'describeAccountSubscription'>;

  describeAnalysis: FunctionTypeFrom<'describeAnalysis'>;

  describeAnalysisPermissions: FunctionTypeFrom<'describeAnalysisPermissions'>;

  describeDashboard: FunctionTypeFrom<'describeDashboard'>;

  describeDashboardPermissions: FunctionTypeFrom<'describeDashboardPermissions'>;

  describeDataSet: FunctionTypeFrom<'describeDataSet'>;

  describeDataSetPermissions: FunctionTypeFrom<'describeDataSetPermissions'>;

  describeDataSource: FunctionTypeFrom<'describeDataSource'>;

  describeDataSourcePermissions: FunctionTypeFrom<'describeDataSourcePermissions'>;

  describeFolder: FunctionTypeFrom<'describeFolder'>;

  describeFolderPermissions: FunctionTypeFrom<'describeFolderPermissions'>;

  describeFolderResolvedPermissions: FunctionTypeFrom<'describeFolderResolvedPermissions'>;

  describeGroup: FunctionTypeFrom<'describeGroup'>;

  describeGroupMembership: FunctionTypeFrom<'describeGroupMembership'>;

  describeIAMPolicyAssignment: FunctionTypeFrom<'describeIAMPolicyAssignment'>;

  describeIngestion: FunctionTypeFrom<'describeIngestion'>;

  describeIpRestriction: FunctionTypeFrom<'describeIpRestriction'>;

  describeNamespace: FunctionTypeFrom<'describeNamespace'>;

  describeTemplate: FunctionTypeFrom<'describeTemplate'>;

  describeTemplateAlias: FunctionTypeFrom<'describeTemplateAlias'>;

  describeTemplatePermissions: FunctionTypeFrom<'describeTemplatePermissions'>;

  describeTheme: FunctionTypeFrom<'describeTheme'>;

  describeThemeAlias: FunctionTypeFrom<'describeThemeAlias'>;

  describeThemePermissions: FunctionTypeFrom<'describeThemePermissions'>;

  describeUser: FunctionTypeFrom<'describeUser'>;

  generateEmbedUrlForAnonymousUser: FunctionTypeFrom<'generateEmbedUrlForAnonymousUser'>;

  generateEmbedUrlForRegisteredUser: FunctionTypeFrom<'generateEmbedUrlForRegisteredUser'>;

  getDashboardEmbedUrl: FunctionTypeFrom<'getDashboardEmbedUrl'>;

  getSessionEmbedUrl: FunctionTypeFrom<'getSessionEmbedUrl'>;

  listAnalyses(params: { [K in keyof Omit<ParamsFrom<'listAnalyses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAnalyses'>]-?: ReturnTypeFrom<'listAnalyses'>[K]}['AnalysisSummaryList'] }>
  ;

  listDashboardVersions(params: { [K in keyof Omit<ParamsFrom<'listDashboardVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDashboardVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDashboardVersions'>]-?: ReturnTypeFrom<'listDashboardVersions'>[K]}['DashboardVersionSummaryList'] }>
  ;

  listDashboards(params: { [K in keyof Omit<ParamsFrom<'listDashboards', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDashboards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDashboards'>]-?: ReturnTypeFrom<'listDashboards'>[K]}['DashboardSummaryList'] }>
  ;

  listDataSets(params: { [K in keyof Omit<ParamsFrom<'listDataSets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDataSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataSets'>]-?: ReturnTypeFrom<'listDataSets'>[K]}['DataSetSummaries'] }>
  ;

  listDataSources(params: { [K in keyof Omit<ParamsFrom<'listDataSources', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDataSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataSources'>]-?: ReturnTypeFrom<'listDataSources'>[K]}['DataSources'] }>
  ;

  listFolderMembers: FunctionTypeFrom<'listFolderMembers'>;

  listFolders: FunctionTypeFrom<'listFolders'>;

  listGroupMemberships: FunctionTypeFrom<'listGroupMemberships'>;

  listGroups: FunctionTypeFrom<'listGroups'>;

  listIAMPolicyAssignments: FunctionTypeFrom<'listIAMPolicyAssignments'>;

  listIAMPolicyAssignmentsForUser: FunctionTypeFrom<'listIAMPolicyAssignmentsForUser'>;

  listIngestions(params: { [K in keyof Omit<ParamsFrom<'listIngestions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listIngestions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIngestions'>]-?: ReturnTypeFrom<'listIngestions'>[K]}['Ingestions'] }>
  ;

  listNamespaces(params: { [K in keyof Omit<ParamsFrom<'listNamespaces', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listNamespaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNamespaces'>]-?: ReturnTypeFrom<'listNamespaces'>[K]}['Namespaces'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTemplateAliases(params: { [K in keyof Omit<ParamsFrom<'listTemplateAliases', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTemplateAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTemplateAliases'>]-?: ReturnTypeFrom<'listTemplateAliases'>[K]}['TemplateAliasList'] }>
  ;

  listTemplateVersions(params: { [K in keyof Omit<ParamsFrom<'listTemplateVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTemplateVersions'>]-?: ReturnTypeFrom<'listTemplateVersions'>[K]}['TemplateVersionSummaryList'] }>
  ;

  listTemplates(params: { [K in keyof Omit<ParamsFrom<'listTemplates', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTemplates'>]-?: ReturnTypeFrom<'listTemplates'>[K]}['TemplateSummaryList'] }>
  ;

  listThemeAliases: FunctionTypeFrom<'listThemeAliases'>;

  listThemeVersions(params: { [K in keyof Omit<ParamsFrom<'listThemeVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listThemeVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThemeVersions'>]-?: ReturnTypeFrom<'listThemeVersions'>[K]}['ThemeVersionSummaryList'] }>
  ;

  listThemes(params: { [K in keyof Omit<ParamsFrom<'listThemes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listThemes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThemes'>]-?: ReturnTypeFrom<'listThemes'>[K]}['ThemeSummaryList'] }>
  ;

  listUserGroups: FunctionTypeFrom<'listUserGroups'>;

  listUsers: FunctionTypeFrom<'listUsers'>;

  registerUser: FunctionTypeFrom<'registerUser'>;

  restoreAnalysis: FunctionTypeFrom<'restoreAnalysis'>;

  searchAnalyses(params: { [K in keyof Omit<ParamsFrom<'searchAnalyses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchAnalyses'>]-?: ReturnTypeFrom<'searchAnalyses'>[K]}['AnalysisSummaryList'] }>
  ;

  searchDashboards(params: { [K in keyof Omit<ParamsFrom<'searchDashboards', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchDashboards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchDashboards'>]-?: ReturnTypeFrom<'searchDashboards'>[K]}['DashboardSummaryList'] }>
  ;

  searchFolders: FunctionTypeFrom<'searchFolders'>;

  searchGroups: FunctionTypeFrom<'searchGroups'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccountCustomization: FunctionTypeFrom<'updateAccountCustomization'>;

  updateAccountSettings: FunctionTypeFrom<'updateAccountSettings'>;

  updateAnalysis: FunctionTypeFrom<'updateAnalysis'>;

  updateAnalysisPermissions: FunctionTypeFrom<'updateAnalysisPermissions'>;

  updateDashboard: FunctionTypeFrom<'updateDashboard'>;

  updateDashboardPermissions: FunctionTypeFrom<'updateDashboardPermissions'>;

  updateDashboardPublishedVersion: FunctionTypeFrom<'updateDashboardPublishedVersion'>;

  updateDataSet: FunctionTypeFrom<'updateDataSet'>;

  updateDataSetPermissions: FunctionTypeFrom<'updateDataSetPermissions'>;

  updateDataSource: FunctionTypeFrom<'updateDataSource'>;

  updateDataSourcePermissions: FunctionTypeFrom<'updateDataSourcePermissions'>;

  updateFolder: FunctionTypeFrom<'updateFolder'>;

  updateFolderPermissions: FunctionTypeFrom<'updateFolderPermissions'>;

  updateGroup: FunctionTypeFrom<'updateGroup'>;

  updateIAMPolicyAssignment: FunctionTypeFrom<'updateIAMPolicyAssignment'>;

  updateIpRestriction: FunctionTypeFrom<'updateIpRestriction'>;

  updatePublicSharingSettings: FunctionTypeFrom<'updatePublicSharingSettings'>;

  updateTemplate: FunctionTypeFrom<'updateTemplate'>;

  updateTemplateAlias: FunctionTypeFrom<'updateTemplateAlias'>;

  updateTemplatePermissions: FunctionTypeFrom<'updateTemplatePermissions'>;

  updateTheme: FunctionTypeFrom<'updateTheme'>;

  updateThemeAlias: FunctionTypeFrom<'updateThemeAlias'>;

  updateThemePermissions: FunctionTypeFrom<'updateThemePermissions'>;

  updateUser: FunctionTypeFrom<'updateUser'>
}
 
export class QuickSight implements ClientType {
  private constructor(private readonly client: AWSQuickSight) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'quicksight';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = [] as const;
  
  async cancelIngestion(...args: any): Promise<any> {
  // undefined
    return this.client.cancelIngestion(...args).promise()
  }

  async createAccountCustomization(...args: any): Promise<any> {
  // undefined
    return this.client.createAccountCustomization(...args).promise()
  }

  async createAccountSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createAccountSubscription(...args).promise()
  }

  async createAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.createAnalysis(...args).promise()
  }

  async createDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.createDashboard(...args).promise()
  }

  async createDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSet(...args).promise()
  }

  async createDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSource(...args).promise()
  }

  async createFolder(...args: any): Promise<any> {
  // undefined
    return this.client.createFolder(...args).promise()
  }

  async createFolderMembership(...args: any): Promise<any> {
  // undefined
    return this.client.createFolderMembership(...args).promise()
  }

  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async createGroupMembership(...args: any): Promise<any> {
  // undefined
    return this.client.createGroupMembership(...args).promise()
  }

  async createIAMPolicyAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.createIAMPolicyAssignment(...args).promise()
  }

  async createIngestion(...args: any): Promise<any> {
  // undefined
    return this.client.createIngestion(...args).promise()
  }

  async createNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.createNamespace(...args).promise()
  }

  async createTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createTemplate(...args).promise()
  }

  async createTemplateAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createTemplateAlias(...args).promise()
  }

  async createTheme(...args: any): Promise<any> {
  // undefined
    return this.client.createTheme(...args).promise()
  }

  async createThemeAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createThemeAlias(...args).promise()
  }

  async deleteAccountCustomization(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccountCustomization(...args).promise()
  }

  async deleteAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAnalysis(...args).promise()
  }

  async deleteDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDashboard(...args).promise()
  }

  async deleteDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataSet(...args).promise()
  }

  async deleteDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataSource(...args).promise()
  }

  async deleteFolder(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFolder(...args).promise()
  }

  async deleteFolderMembership(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFolderMembership(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async deleteGroupMembership(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroupMembership(...args).promise()
  }

  async deleteIAMPolicyAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIAMPolicyAssignment(...args).promise()
  }

  async deleteNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNamespace(...args).promise()
  }

  async deleteTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTemplate(...args).promise()
  }

  async deleteTemplateAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTemplateAlias(...args).promise()
  }

  async deleteTheme(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTheme(...args).promise()
  }

  async deleteThemeAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteThemeAlias(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async deleteUserByPrincipalId(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserByPrincipalId(...args).promise()
  }

  async describeAccountCustomization(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountCustomization(...args).promise()
  }

  async describeAccountSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountSettings(...args).promise()
  }

  async describeAccountSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountSubscription(...args).promise()
  }

  async describeAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.describeAnalysis(...args).promise()
  }

  async describeAnalysisPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeAnalysisPermissions(...args).promise()
  }

  async describeDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.describeDashboard(...args).promise()
  }

  async describeDashboardPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeDashboardPermissions(...args).promise()
  }

  async describeDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataSet(...args).promise()
  }

  async describeDataSetPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataSetPermissions(...args).promise()
  }

  async describeDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataSource(...args).promise()
  }

  async describeDataSourcePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataSourcePermissions(...args).promise()
  }

  async describeFolder(...args: any): Promise<any> {
  // undefined
    return this.client.describeFolder(...args).promise()
  }

  async describeFolderPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeFolderPermissions(...args).promise()
  }

  async describeFolderResolvedPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeFolderResolvedPermissions(...args).promise()
  }

  async describeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeGroup(...args).promise()
  }

  async describeGroupMembership(...args: any): Promise<any> {
  // undefined
    return this.client.describeGroupMembership(...args).promise()
  }

  async describeIAMPolicyAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.describeIAMPolicyAssignment(...args).promise()
  }

  async describeIngestion(...args: any): Promise<any> {
  // undefined
    return this.client.describeIngestion(...args).promise()
  }

  async describeIpRestriction(...args: any): Promise<any> {
  // undefined
    return this.client.describeIpRestriction(...args).promise()
  }

  async describeNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.describeNamespace(...args).promise()
  }

  async describeTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.describeTemplate(...args).promise()
  }

  async describeTemplateAlias(...args: any): Promise<any> {
  // undefined
    return this.client.describeTemplateAlias(...args).promise()
  }

  async describeTemplatePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeTemplatePermissions(...args).promise()
  }

  async describeTheme(...args: any): Promise<any> {
  // undefined
    return this.client.describeTheme(...args).promise()
  }

  async describeThemeAlias(...args: any): Promise<any> {
  // undefined
    return this.client.describeThemeAlias(...args).promise()
  }

  async describeThemePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.describeThemePermissions(...args).promise()
  }

  async describeUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeUser(...args).promise()
  }

  async generateEmbedUrlForAnonymousUser(...args: any): Promise<any> {
  // undefined
    return this.client.generateEmbedUrlForAnonymousUser(...args).promise()
  }

  async generateEmbedUrlForRegisteredUser(...args: any): Promise<any> {
  // undefined
    return this.client.generateEmbedUrlForRegisteredUser(...args).promise()
  }

  async getDashboardEmbedUrl(...args: any): Promise<any> {
  // undefined
    return this.client.getDashboardEmbedUrl(...args).promise()
  }

  async getSessionEmbedUrl(...args: any): Promise<any> {
  // undefined
    return this.client.getSessionEmbedUrl(...args).promise()
  }

  async listAnalyses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AnalysisSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAnalyses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AnalysisSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDashboardVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DashboardVersionSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDashboardVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DashboardVersionSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDashboards(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DashboardSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDashboards(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DashboardSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataSetSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DataSetSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataSources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataSources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DataSources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFolderMembers(...args: any): Promise<any> {
  // undefined
    return this.client.listFolderMembers(...args).promise()
  }

  async listFolders(...args: any): Promise<any> {
  // undefined
    return this.client.listFolders(...args).promise()
  }

  async listGroupMemberships(...args: any): Promise<any> {
  // undefined
    return this.client.listGroupMemberships(...args).promise()
  }

  async listGroups(...args: any): Promise<any> {
  // undefined
    return this.client.listGroups(...args).promise()
  }

  async listIAMPolicyAssignments(...args: any): Promise<any> {
  // undefined
    return this.client.listIAMPolicyAssignments(...args).promise()
  }

  async listIAMPolicyAssignmentsForUser(...args: any): Promise<any> {
  // undefined
    return this.client.listIAMPolicyAssignmentsForUser(...args).promise()
  }

  async listIngestions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Ingestions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIngestions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Ingestions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNamespaces(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Namespaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNamespaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Namespaces ?? [];
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

  async listTemplateAliases(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TemplateAliasList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTemplateAliases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TemplateAliasList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTemplateVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TemplateVersionSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTemplateVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TemplateVersionSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTemplates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TemplateSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TemplateSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThemeAliases(...args: any): Promise<any> {
  // undefined
    return this.client.listThemeAliases(...args).promise()
  }

  async listThemeVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ThemeVersionSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listThemeVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ThemeVersionSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThemes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ThemeSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listThemes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ThemeSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserGroups(...args: any): Promise<any> {
  // undefined
    return this.client.listUserGroups(...args).promise()
  }

  async listUsers(...args: any): Promise<any> {
  // undefined
    return this.client.listUsers(...args).promise()
  }

  async registerUser(...args: any): Promise<any> {
  // undefined
    return this.client.registerUser(...args).promise()
  }

  async restoreAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.restoreAnalysis(...args).promise()
  }

  async searchAnalyses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AnalysisSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchAnalyses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AnalysisSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchDashboards(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DashboardSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchDashboards(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DashboardSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchFolders(...args: any): Promise<any> {
  // undefined
    return this.client.searchFolders(...args).promise()
  }

  async searchGroups(...args: any): Promise<any> {
  // undefined
    return this.client.searchGroups(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAccountCustomization(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccountCustomization(...args).promise()
  }

  async updateAccountSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccountSettings(...args).promise()
  }

  async updateAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.updateAnalysis(...args).promise()
  }

  async updateAnalysisPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updateAnalysisPermissions(...args).promise()
  }

  async updateDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.updateDashboard(...args).promise()
  }

  async updateDashboardPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updateDashboardPermissions(...args).promise()
  }

  async updateDashboardPublishedVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateDashboardPublishedVersion(...args).promise()
  }

  async updateDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataSet(...args).promise()
  }

  async updateDataSetPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataSetPermissions(...args).promise()
  }

  async updateDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataSource(...args).promise()
  }

  async updateDataSourcePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataSourcePermissions(...args).promise()
  }

  async updateFolder(...args: any): Promise<any> {
  // undefined
    return this.client.updateFolder(...args).promise()
  }

  async updateFolderPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updateFolderPermissions(...args).promise()
  }

  async updateGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroup(...args).promise()
  }

  async updateIAMPolicyAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.updateIAMPolicyAssignment(...args).promise()
  }

  async updateIpRestriction(...args: any): Promise<any> {
  // undefined
    return this.client.updateIpRestriction(...args).promise()
  }

  async updatePublicSharingSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updatePublicSharingSettings(...args).promise()
  }

  async updateTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateTemplate(...args).promise()
  }

  async updateTemplateAlias(...args: any): Promise<any> {
  // undefined
    return this.client.updateTemplateAlias(...args).promise()
  }

  async updateTemplatePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updateTemplatePermissions(...args).promise()
  }

  async updateTheme(...args: any): Promise<any> {
  // undefined
    return this.client.updateTheme(...args).promise()
  }

  async updateThemeAlias(...args: any): Promise<any> {
  // undefined
    return this.client.updateThemeAlias(...args).promise()
  }

  async updateThemePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updateThemePermissions(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }
  
  static fromClient(client: AWSQuickSight): ClientType {
    return new QuickSight(client) as any;
  }
  
  static client(options?: AWSQuickSight.Types.ClientConfiguration): ClientType {
    return new QuickSight(new AWSQuickSight(options)) as any;
  }
}  
