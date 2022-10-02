import { Request, SecurityHub as AWSSecurityHub } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSecurityHub> = AWSSecurityHub[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSecurityHub> = AWSSecurityHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSecurityHub[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSecurityHub, Extras> = AWSSecurityHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'securityhub';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["describeActionTargets","describeProducts","describeStandards","getEnabledStandards","getFindings","getInsights","listEnabledProductsForImport","listFindingAggregators","listInvitations","listMembers","listOrganizationAdminAccounts"];
    
  acceptAdministratorInvitation: FunctionTypeFrom<'acceptAdministratorInvitation'>;

  acceptInvitation: FunctionTypeFrom<'acceptInvitation'>;

  batchDisableStandards: FunctionTypeFrom<'batchDisableStandards'>;

  batchEnableStandards: FunctionTypeFrom<'batchEnableStandards'>;

  batchImportFindings: FunctionTypeFrom<'batchImportFindings'>;

  batchUpdateFindings: FunctionTypeFrom<'batchUpdateFindings'>;

  createActionTarget: FunctionTypeFrom<'createActionTarget'>;

  createFindingAggregator: FunctionTypeFrom<'createFindingAggregator'>;

  createInsight: FunctionTypeFrom<'createInsight'>;

  createMembers: FunctionTypeFrom<'createMembers'>;

  declineInvitations: FunctionTypeFrom<'declineInvitations'>;

  deleteActionTarget: FunctionTypeFrom<'deleteActionTarget'>;

  deleteFindingAggregator: FunctionTypeFrom<'deleteFindingAggregator'>;

  deleteInsight: FunctionTypeFrom<'deleteInsight'>;

  deleteInvitations: FunctionTypeFrom<'deleteInvitations'>;

  deleteMembers: FunctionTypeFrom<'deleteMembers'>;

  describeActionTargets(params: { [K in keyof Omit<ParamsFrom<'describeActionTargets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeActionTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeActionTargets'>]-?: ReturnTypeFrom<'describeActionTargets'>[K]}['ActionTargets'] }>
  describeActionTargets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeActionTargets'>]-?: ReturnTypeFrom<'describeActionTargets'>[K]}['ActionTargets'] }>;

  describeHub: FunctionTypeFrom<'describeHub'>;

  describeOrganizationConfiguration: FunctionTypeFrom<'describeOrganizationConfiguration'>;

  describeProducts(params: { [K in keyof Omit<ParamsFrom<'describeProducts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeProducts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeProducts'>]-?: ReturnTypeFrom<'describeProducts'>[K]}['Products'] }>
  describeProducts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeProducts'>]-?: ReturnTypeFrom<'describeProducts'>[K]}['Products'] }>;

  describeStandards(params: { [K in keyof Omit<ParamsFrom<'describeStandards', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeStandards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStandards'>]-?: ReturnTypeFrom<'describeStandards'>[K]}['Standards'] }>
  describeStandards(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStandards'>]-?: ReturnTypeFrom<'describeStandards'>[K]}['Standards'] }>;

  describeStandardsControls(params: { [K in keyof Omit<ParamsFrom<'describeStandardsControls', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeStandardsControls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStandardsControls'>]-?: ReturnTypeFrom<'describeStandardsControls'>[K]}['Controls'] }>
  ;

  disableImportFindingsForProduct: FunctionTypeFrom<'disableImportFindingsForProduct'>;

  disableOrganizationAdminAccount: FunctionTypeFrom<'disableOrganizationAdminAccount'>;

  disableSecurityHub: FunctionTypeFrom<'disableSecurityHub'>;

  disassociateFromAdministratorAccount: FunctionTypeFrom<'disassociateFromAdministratorAccount'>;

  disassociateFromMasterAccount: FunctionTypeFrom<'disassociateFromMasterAccount'>;

  disassociateMembers: FunctionTypeFrom<'disassociateMembers'>;

  enableImportFindingsForProduct: FunctionTypeFrom<'enableImportFindingsForProduct'>;

  enableOrganizationAdminAccount: FunctionTypeFrom<'enableOrganizationAdminAccount'>;

  enableSecurityHub: FunctionTypeFrom<'enableSecurityHub'>;

  getAdministratorAccount: FunctionTypeFrom<'getAdministratorAccount'>;

  getEnabledStandards(params: { [K in keyof Omit<ParamsFrom<'getEnabledStandards', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getEnabledStandards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getEnabledStandards'>]-?: ReturnTypeFrom<'getEnabledStandards'>[K]}['StandardsSubscriptions'] }>
  getEnabledStandards(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getEnabledStandards'>]-?: ReturnTypeFrom<'getEnabledStandards'>[K]}['StandardsSubscriptions'] }>;

  getFindingAggregator: FunctionTypeFrom<'getFindingAggregator'>;

  getFindings(params: { [K in keyof Omit<ParamsFrom<'getFindings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getFindings'>]-?: ReturnTypeFrom<'getFindings'>[K]}['Findings'] }>
  getFindings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getFindings'>]-?: ReturnTypeFrom<'getFindings'>[K]}['Findings'] }>;

  getInsightResults: FunctionTypeFrom<'getInsightResults'>;

  getInsights(params: { [K in keyof Omit<ParamsFrom<'getInsights', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getInsights', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getInsights'>]-?: ReturnTypeFrom<'getInsights'>[K]}['Insights'] }>
  getInsights(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getInsights'>]-?: ReturnTypeFrom<'getInsights'>[K]}['Insights'] }>;

  getInvitationsCount: FunctionTypeFrom<'getInvitationsCount'>;

  getMasterAccount: FunctionTypeFrom<'getMasterAccount'>;

  getMembers: FunctionTypeFrom<'getMembers'>;

  inviteMembers: FunctionTypeFrom<'inviteMembers'>;

  listEnabledProductsForImport(params: { [K in keyof Omit<ParamsFrom<'listEnabledProductsForImport', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEnabledProductsForImport', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnabledProductsForImport'>]-?: ReturnTypeFrom<'listEnabledProductsForImport'>[K]}['ProductSubscriptions'] }>
  listEnabledProductsForImport(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnabledProductsForImport'>]-?: ReturnTypeFrom<'listEnabledProductsForImport'>[K]}['ProductSubscriptions'] }>;

  listFindingAggregators(params: { [K in keyof Omit<ParamsFrom<'listFindingAggregators', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFindingAggregators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindingAggregators'>]-?: ReturnTypeFrom<'listFindingAggregators'>[K]}['FindingAggregators'] }>
  listFindingAggregators(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindingAggregators'>]-?: ReturnTypeFrom<'listFindingAggregators'>[K]}['FindingAggregators'] }>;

  listInvitations(params: { [K in keyof Omit<ParamsFrom<'listInvitations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInvitations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInvitations'>]-?: ReturnTypeFrom<'listInvitations'>[K]}['Invitations'] }>
  listInvitations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInvitations'>]-?: ReturnTypeFrom<'listInvitations'>[K]}['Invitations'] }>;

  listMembers(params: { [K in keyof Omit<ParamsFrom<'listMembers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMembers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['Members'] }>
  listMembers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMembers'>]-?: ReturnTypeFrom<'listMembers'>[K]}['Members'] }>;

  listOrganizationAdminAccounts(params: { [K in keyof Omit<ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOrganizationAdminAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOrganizationAdminAccounts'>]-?: ReturnTypeFrom<'listOrganizationAdminAccounts'>[K]}['AdminAccounts'] }>
  listOrganizationAdminAccounts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOrganizationAdminAccounts'>]-?: ReturnTypeFrom<'listOrganizationAdminAccounts'>[K]}['AdminAccounts'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateActionTarget: FunctionTypeFrom<'updateActionTarget'>;

  updateFindingAggregator: FunctionTypeFrom<'updateFindingAggregator'>;

  updateFindings: FunctionTypeFrom<'updateFindings'>;

  updateInsight: FunctionTypeFrom<'updateInsight'>;

  updateOrganizationConfiguration: FunctionTypeFrom<'updateOrganizationConfiguration'>;

  updateSecurityHubConfiguration: FunctionTypeFrom<'updateSecurityHubConfiguration'>;

  updateStandardsControl: FunctionTypeFrom<'updateStandardsControl'>
}
 
export class SecurityHub implements ClientType {
  private constructor(private readonly client: AWSSecurityHub) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'securityhub';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["describeActionTargets","describeProducts","describeStandards","getEnabledStandards","getFindings","getInsights","listEnabledProductsForImport","listFindingAggregators","listInvitations","listMembers","listOrganizationAdminAccounts"] as const;
  
  async acceptAdministratorInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.acceptAdministratorInvitation(...args).promise()
  }

  async acceptInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.acceptInvitation(...args).promise()
  }

  async batchDisableStandards(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisableStandards(...args).promise()
  }

  async batchEnableStandards(...args: any): Promise<any> {
  // undefined
    return this.client.batchEnableStandards(...args).promise()
  }

  async batchImportFindings(...args: any): Promise<any> {
  // undefined
    return this.client.batchImportFindings(...args).promise()
  }

  async batchUpdateFindings(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateFindings(...args).promise()
  }

  async createActionTarget(...args: any): Promise<any> {
  // undefined
    return this.client.createActionTarget(...args).promise()
  }

  async createFindingAggregator(...args: any): Promise<any> {
  // undefined
    return this.client.createFindingAggregator(...args).promise()
  }

  async createInsight(...args: any): Promise<any> {
  // undefined
    return this.client.createInsight(...args).promise()
  }

  async createMembers(...args: any): Promise<any> {
  // undefined
    return this.client.createMembers(...args).promise()
  }

  async declineInvitations(...args: any): Promise<any> {
  // undefined
    return this.client.declineInvitations(...args).promise()
  }

  async deleteActionTarget(...args: any): Promise<any> {
  // undefined
    return this.client.deleteActionTarget(...args).promise()
  }

  async deleteFindingAggregator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFindingAggregator(...args).promise()
  }

  async deleteInsight(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInsight(...args).promise()
  }

  async deleteInvitations(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInvitations(...args).promise()
  }

  async deleteMembers(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMembers(...args).promise()
  }

  async describeActionTargets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ActionTargets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeActionTargets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ActionTargets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHub(...args: any): Promise<any> {
  // undefined
    return this.client.describeHub(...args).promise()
  }

  async describeOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganizationConfiguration(...args).promise()
  }

  async describeProducts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Products"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeProducts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Products ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStandards(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Standards"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStandards(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Standards ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStandardsControls(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Controls"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStandardsControls(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Controls ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disableImportFindingsForProduct(...args: any): Promise<any> {
  // undefined
    return this.client.disableImportFindingsForProduct(...args).promise()
  }

  async disableOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disableOrganizationAdminAccount(...args).promise()
  }

  async disableSecurityHub(...args: any): Promise<any> {
  // undefined
    return this.client.disableSecurityHub(...args).promise()
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

  async enableImportFindingsForProduct(...args: any): Promise<any> {
  // undefined
    return this.client.enableImportFindingsForProduct(...args).promise()
  }

  async enableOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.enableOrganizationAdminAccount(...args).promise()
  }

  async enableSecurityHub(...args: any): Promise<any> {
  // undefined
    return this.client.enableSecurityHub(...args).promise()
  }

  async getAdministratorAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getAdministratorAccount(...args).promise()
  }

  async getEnabledStandards(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StandardsSubscriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getEnabledStandards(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StandardsSubscriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getFindingAggregator(...args: any): Promise<any> {
  // undefined
    return this.client.getFindingAggregator(...args).promise()
  }

  async getFindings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Findings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getFindings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Findings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getInsightResults(...args: any): Promise<any> {
  // undefined
    return this.client.getInsightResults(...args).promise()
  }

  async getInsights(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Insights"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getInsights(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Insights ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getInvitationsCount(...args: any): Promise<any> {
  // undefined
    return this.client.getInvitationsCount(...args).promise()
  }

  async getMasterAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getMasterAccount(...args).promise()
  }

  async getMembers(...args: any): Promise<any> {
  // undefined
    return this.client.getMembers(...args).promise()
  }

  async inviteMembers(...args: any): Promise<any> {
  // undefined
    return this.client.inviteMembers(...args).promise()
  }

  async listEnabledProductsForImport(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProductSubscriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEnabledProductsForImport(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ProductSubscriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindingAggregators(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FindingAggregators"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFindingAggregators(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FindingAggregators ?? [];
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

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateActionTarget(...args: any): Promise<any> {
  // undefined
    return this.client.updateActionTarget(...args).promise()
  }

  async updateFindingAggregator(...args: any): Promise<any> {
  // undefined
    return this.client.updateFindingAggregator(...args).promise()
  }

  async updateFindings(...args: any): Promise<any> {
  // undefined
    return this.client.updateFindings(...args).promise()
  }

  async updateInsight(...args: any): Promise<any> {
  // undefined
    return this.client.updateInsight(...args).promise()
  }

  async updateOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateOrganizationConfiguration(...args).promise()
  }

  async updateSecurityHubConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateSecurityHubConfiguration(...args).promise()
  }

  async updateStandardsControl(...args: any): Promise<any> {
  // undefined
    return this.client.updateStandardsControl(...args).promise()
  }
  
  static fromClient(client: AWSSecurityHub): ClientType {
    return new SecurityHub(client) as any;
  }
  
  static client(options?: AWSSecurityHub.Types.ClientConfiguration): ClientType {
    return new SecurityHub(new AWSSecurityHub(options)) as any;
  }
}  
