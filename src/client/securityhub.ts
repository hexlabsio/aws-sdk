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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSecurityHub> = AWSSecurityHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SecurityHub {
  private constructor(private readonly client: AWSSecurityHub) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'securityhub' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["describeActionTargets","describeProducts","describeStandards","getEnabledStandards","getFindings","getInsights","listEnabledProductsForImport","listFindingAggregators","listInvitations","listMembers","listOrganizationAdminAccounts"] as const;
  
  acceptAdministratorInvitation: (params: RawParamsFrom<'acceptAdministratorInvitation'>) => Promise<ReturnTypeFrom<'acceptAdministratorInvitation'>>  = async params => {
  // undefined
    return this.client.acceptAdministratorInvitation(params as any).promise();
  }

  acceptInvitation: (params: RawParamsFrom<'acceptInvitation'>) => Promise<ReturnTypeFrom<'acceptInvitation'>>  = async params => {
  // undefined
    return this.client.acceptInvitation(params as any).promise();
  }

  batchDisableStandards: (params: RawParamsFrom<'batchDisableStandards'>) => Promise<ReturnTypeFrom<'batchDisableStandards'>>  = async params => {
  // undefined
    return this.client.batchDisableStandards(params as any).promise();
  }

  batchEnableStandards: (params: RawParamsFrom<'batchEnableStandards'>) => Promise<ReturnTypeFrom<'batchEnableStandards'>>  = async params => {
  // undefined
    return this.client.batchEnableStandards(params as any).promise();
  }

  batchImportFindings: (params: RawParamsFrom<'batchImportFindings'>) => Promise<ReturnTypeFrom<'batchImportFindings'>>  = async params => {
  // undefined
    return this.client.batchImportFindings(params as any).promise();
  }

  batchUpdateFindings: (params: RawParamsFrom<'batchUpdateFindings'>) => Promise<ReturnTypeFrom<'batchUpdateFindings'>>  = async params => {
  // undefined
    return this.client.batchUpdateFindings(params as any).promise();
  }

  createActionTarget: (params: RawParamsFrom<'createActionTarget'>) => Promise<ReturnTypeFrom<'createActionTarget'>>  = async params => {
  // undefined
    return this.client.createActionTarget(params as any).promise();
  }

  createFindingAggregator: (params: RawParamsFrom<'createFindingAggregator'>) => Promise<ReturnTypeFrom<'createFindingAggregator'>>  = async params => {
  // undefined
    return this.client.createFindingAggregator(params as any).promise();
  }

  createInsight: (params: RawParamsFrom<'createInsight'>) => Promise<ReturnTypeFrom<'createInsight'>>  = async params => {
  // undefined
    return this.client.createInsight(params as any).promise();
  }

  createMembers: (params: RawParamsFrom<'createMembers'>) => Promise<ReturnTypeFrom<'createMembers'>>  = async params => {
  // undefined
    return this.client.createMembers(params as any).promise();
  }

  declineInvitations: (params: RawParamsFrom<'declineInvitations'>) => Promise<ReturnTypeFrom<'declineInvitations'>>  = async params => {
  // undefined
    return this.client.declineInvitations(params as any).promise();
  }

  deleteActionTarget: (params: RawParamsFrom<'deleteActionTarget'>) => Promise<ReturnTypeFrom<'deleteActionTarget'>>  = async params => {
  // undefined
    return this.client.deleteActionTarget(params as any).promise();
  }

  deleteFindingAggregator: (params: RawParamsFrom<'deleteFindingAggregator'>) => Promise<ReturnTypeFrom<'deleteFindingAggregator'>>  = async params => {
  // undefined
    return this.client.deleteFindingAggregator(params as any).promise();
  }

  deleteInsight: (params: RawParamsFrom<'deleteInsight'>) => Promise<ReturnTypeFrom<'deleteInsight'>>  = async params => {
  // undefined
    return this.client.deleteInsight(params as any).promise();
  }

  deleteInvitations: (params: RawParamsFrom<'deleteInvitations'>) => Promise<ReturnTypeFrom<'deleteInvitations'>>  = async params => {
  // undefined
    return this.client.deleteInvitations(params as any).promise();
  }

  deleteMembers: (params: RawParamsFrom<'deleteMembers'>) => Promise<ReturnTypeFrom<'deleteMembers'>>  = async params => {
  // undefined
    return this.client.deleteMembers(params as any).promise();
  }

  async describeActionTargets(params: { [K in keyof ParamsFrom<'describeActionTargets', { next?: string, limit?: number }>]: ParamsFrom<'describeActionTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeActionTargets'>]-?: ReturnTypeFrom<'describeActionTargets'>[K]}['ActionTargets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ActionTargets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeActionTargets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeActionTargets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ActionTargets ?? []) ? (result.ActionTargets ?? []) : [result.ActionTargets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeHub: (params: RawParamsFrom<'describeHub'>) => Promise<ReturnTypeFrom<'describeHub'>>  = async params => {
  // undefined
    return this.client.describeHub(params as any).promise();
  }

  describeOrganizationConfiguration: (params: RawParamsFrom<'describeOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'describeOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.describeOrganizationConfiguration(params as any).promise();
  }

  async describeProducts(params: { [K in keyof ParamsFrom<'describeProducts', { next?: string, limit?: number }>]: ParamsFrom<'describeProducts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeProducts'>]-?: ReturnTypeFrom<'describeProducts'>[K]}['Products'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Products"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeProducts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeProducts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Products ?? []) ? (result.Products ?? []) : [result.Products]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStandards(params: { [K in keyof ParamsFrom<'describeStandards', { next?: string, limit?: number }>]: ParamsFrom<'describeStandards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStandards'>]-?: ReturnTypeFrom<'describeStandards'>[K]}['Standards'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Standards"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStandards({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeStandards' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Standards ?? []) ? (result.Standards ?? []) : [result.Standards]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStandardsControls(params: { [K in keyof ParamsFrom<'describeStandardsControls', { next?: string, limit?: number }>]: ParamsFrom<'describeStandardsControls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStandardsControls'>]-?: ReturnTypeFrom<'describeStandardsControls'>[K]}['Controls'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Controls"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStandardsControls({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeStandardsControls' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Controls ?? []) ? (result.Controls ?? []) : [result.Controls]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disableImportFindingsForProduct: (params: RawParamsFrom<'disableImportFindingsForProduct'>) => Promise<ReturnTypeFrom<'disableImportFindingsForProduct'>>  = async params => {
  // undefined
    return this.client.disableImportFindingsForProduct(params as any).promise();
  }

  disableOrganizationAdminAccount: (params: RawParamsFrom<'disableOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'disableOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.disableOrganizationAdminAccount(params as any).promise();
  }

  disableSecurityHub: (params: RawParamsFrom<'disableSecurityHub'>) => Promise<ReturnTypeFrom<'disableSecurityHub'>>  = async params => {
  // undefined
    return this.client.disableSecurityHub(params as any).promise();
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

  enableImportFindingsForProduct: (params: RawParamsFrom<'enableImportFindingsForProduct'>) => Promise<ReturnTypeFrom<'enableImportFindingsForProduct'>>  = async params => {
  // undefined
    return this.client.enableImportFindingsForProduct(params as any).promise();
  }

  enableOrganizationAdminAccount: (params: RawParamsFrom<'enableOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'enableOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.enableOrganizationAdminAccount(params as any).promise();
  }

  enableSecurityHub: (params: RawParamsFrom<'enableSecurityHub'>) => Promise<ReturnTypeFrom<'enableSecurityHub'>>  = async params => {
  // undefined
    return this.client.enableSecurityHub(params as any).promise();
  }

  getAdministratorAccount: (params: RawParamsFrom<'getAdministratorAccount'>) => Promise<ReturnTypeFrom<'getAdministratorAccount'>>  = async params => {
  // undefined
    return this.client.getAdministratorAccount(params as any).promise();
  }

  async getEnabledStandards(params: { [K in keyof ParamsFrom<'getEnabledStandards', { next?: string, limit?: number }>]: ParamsFrom<'getEnabledStandards', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getEnabledStandards'>]-?: ReturnTypeFrom<'getEnabledStandards'>[K]}['StandardsSubscriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StandardsSubscriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getEnabledStandards({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getEnabledStandards' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StandardsSubscriptions ?? []) ? (result.StandardsSubscriptions ?? []) : [result.StandardsSubscriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getFindingAggregator: (params: RawParamsFrom<'getFindingAggregator'>) => Promise<ReturnTypeFrom<'getFindingAggregator'>>  = async params => {
  // undefined
    return this.client.getFindingAggregator(params as any).promise();
  }

  async getFindings(params: { [K in keyof ParamsFrom<'getFindings', { next?: string, limit?: number }>]: ParamsFrom<'getFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getFindings'>]-?: ReturnTypeFrom<'getFindings'>[K]}['Findings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Findings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getFindings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getFindings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Findings ?? []) ? (result.Findings ?? []) : [result.Findings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getInsightResults: (params: RawParamsFrom<'getInsightResults'>) => Promise<ReturnTypeFrom<'getInsightResults'>>  = async params => {
  // undefined
    return this.client.getInsightResults(params as any).promise();
  }

  async getInsights(params: { [K in keyof ParamsFrom<'getInsights', { next?: string, limit?: number }>]: ParamsFrom<'getInsights', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getInsights'>]-?: ReturnTypeFrom<'getInsights'>[K]}['Insights'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Insights"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getInsights({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getInsights' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Insights ?? []) ? (result.Insights ?? []) : [result.Insights]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getInvitationsCount: (params: RawParamsFrom<'getInvitationsCount'>) => Promise<ReturnTypeFrom<'getInvitationsCount'>>  = async params => {
  // undefined
    return this.client.getInvitationsCount(params as any).promise();
  }

  getMasterAccount: (params: RawParamsFrom<'getMasterAccount'>) => Promise<ReturnTypeFrom<'getMasterAccount'>>  = async params => {
  // undefined
    return this.client.getMasterAccount(params as any).promise();
  }

  getMembers: (params: RawParamsFrom<'getMembers'>) => Promise<ReturnTypeFrom<'getMembers'>>  = async params => {
  // undefined
    return this.client.getMembers(params as any).promise();
  }

  inviteMembers: (params: RawParamsFrom<'inviteMembers'>) => Promise<ReturnTypeFrom<'inviteMembers'>>  = async params => {
  // undefined
    return this.client.inviteMembers(params as any).promise();
  }

  async listEnabledProductsForImport(params: { [K in keyof ParamsFrom<'listEnabledProductsForImport', { next?: string, limit?: number }>]: ParamsFrom<'listEnabledProductsForImport', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnabledProductsForImport'>]-?: ReturnTypeFrom<'listEnabledProductsForImport'>[K]}['ProductSubscriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProductSubscriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEnabledProductsForImport({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEnabledProductsForImport' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ProductSubscriptions ?? []) ? (result.ProductSubscriptions ?? []) : [result.ProductSubscriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindingAggregators(params: { [K in keyof ParamsFrom<'listFindingAggregators', { next?: string, limit?: number }>]: ParamsFrom<'listFindingAggregators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFindingAggregators'>]-?: ReturnTypeFrom<'listFindingAggregators'>[K]}['FindingAggregators'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FindingAggregators"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFindingAggregators({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFindingAggregators' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FindingAggregators ?? []) ? (result.FindingAggregators ?? []) : [result.FindingAggregators]) as any;
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
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInvitations' })).toString('base64') : undefined;
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
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listMembers' })).toString('base64') : undefined;
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
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOrganizationAdminAccounts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AdminAccounts ?? []) ? (result.AdminAccounts ?? []) : [result.AdminAccounts]) as any;
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

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateActionTarget: (params: RawParamsFrom<'updateActionTarget'>) => Promise<ReturnTypeFrom<'updateActionTarget'>>  = async params => {
  // undefined
    return this.client.updateActionTarget(params as any).promise();
  }

  updateFindingAggregator: (params: RawParamsFrom<'updateFindingAggregator'>) => Promise<ReturnTypeFrom<'updateFindingAggregator'>>  = async params => {
  // undefined
    return this.client.updateFindingAggregator(params as any).promise();
  }

  updateFindings: (params: RawParamsFrom<'updateFindings'>) => Promise<ReturnTypeFrom<'updateFindings'>>  = async params => {
  // undefined
    return this.client.updateFindings(params as any).promise();
  }

  updateInsight: (params: RawParamsFrom<'updateInsight'>) => Promise<ReturnTypeFrom<'updateInsight'>>  = async params => {
  // undefined
    return this.client.updateInsight(params as any).promise();
  }

  updateOrganizationConfiguration: (params: RawParamsFrom<'updateOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'updateOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateOrganizationConfiguration(params as any).promise();
  }

  updateSecurityHubConfiguration: (params: RawParamsFrom<'updateSecurityHubConfiguration'>) => Promise<ReturnTypeFrom<'updateSecurityHubConfiguration'>>  = async params => {
  // undefined
    return this.client.updateSecurityHubConfiguration(params as any).promise();
  }

  updateStandardsControl: (params: RawParamsFrom<'updateStandardsControl'>) => Promise<ReturnTypeFrom<'updateStandardsControl'>>  = async params => {
  // undefined
    return this.client.updateStandardsControl(params as any).promise();
  }
  
  static fromClient(client: AWSSecurityHub): SecurityHub {
    return new SecurityHub(client) as any;
  }
  
  static client(options?: AWSSecurityHub.Types.ClientConfiguration): SecurityHub {
    return new SecurityHub(new AWSSecurityHub(options)) as any;
  }
}  
