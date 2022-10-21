import { Request, AuditManager as AWSAuditManager } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAuditManager> = AWSAuditManager[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAuditManager> = AWSAuditManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAuditManager[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAuditManager, Extras> = AWSAuditManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAuditManager> = AWSAuditManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AuditManager {
  private constructor(private readonly client: AWSAuditManager) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'auditmanager' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["getDelegations","listAssessmentReports","listAssessments","listControlDomainInsights","listNotifications"] as const;
  
  associateAssessmentReportEvidenceFolder: (params: RawParamsFrom<'associateAssessmentReportEvidenceFolder'>) => Promise<ReturnTypeFrom<'associateAssessmentReportEvidenceFolder'>>  = async params => {
  // undefined
    return this.client.associateAssessmentReportEvidenceFolder(params as any).promise();
  }

  batchAssociateAssessmentReportEvidence: (params: RawParamsFrom<'batchAssociateAssessmentReportEvidence'>) => Promise<ReturnTypeFrom<'batchAssociateAssessmentReportEvidence'>>  = async params => {
  // undefined
    return this.client.batchAssociateAssessmentReportEvidence(params as any).promise();
  }

  batchCreateDelegationByAssessment: (params: RawParamsFrom<'batchCreateDelegationByAssessment'>) => Promise<ReturnTypeFrom<'batchCreateDelegationByAssessment'>>  = async params => {
  // undefined
    return this.client.batchCreateDelegationByAssessment(params as any).promise();
  }

  batchDeleteDelegationByAssessment: (params: RawParamsFrom<'batchDeleteDelegationByAssessment'>) => Promise<ReturnTypeFrom<'batchDeleteDelegationByAssessment'>>  = async params => {
  // undefined
    return this.client.batchDeleteDelegationByAssessment(params as any).promise();
  }

  batchDisassociateAssessmentReportEvidence: (params: RawParamsFrom<'batchDisassociateAssessmentReportEvidence'>) => Promise<ReturnTypeFrom<'batchDisassociateAssessmentReportEvidence'>>  = async params => {
  // undefined
    return this.client.batchDisassociateAssessmentReportEvidence(params as any).promise();
  }

  batchImportEvidenceToAssessmentControl: (params: RawParamsFrom<'batchImportEvidenceToAssessmentControl'>) => Promise<ReturnTypeFrom<'batchImportEvidenceToAssessmentControl'>>  = async params => {
  // undefined
    return this.client.batchImportEvidenceToAssessmentControl(params as any).promise();
  }

  createAssessment: (params: RawParamsFrom<'createAssessment'>) => Promise<ReturnTypeFrom<'createAssessment'>>  = async params => {
  // undefined
    return this.client.createAssessment(params as any).promise();
  }

  createAssessmentFramework: (params: RawParamsFrom<'createAssessmentFramework'>) => Promise<ReturnTypeFrom<'createAssessmentFramework'>>  = async params => {
  // undefined
    return this.client.createAssessmentFramework(params as any).promise();
  }

  createAssessmentReport: (params: RawParamsFrom<'createAssessmentReport'>) => Promise<ReturnTypeFrom<'createAssessmentReport'>>  = async params => {
  // undefined
    return this.client.createAssessmentReport(params as any).promise();
  }

  createControl: (params: RawParamsFrom<'createControl'>) => Promise<ReturnTypeFrom<'createControl'>>  = async params => {
  // undefined
    return this.client.createControl(params as any).promise();
  }

  deleteAssessment: (params: RawParamsFrom<'deleteAssessment'>) => Promise<ReturnTypeFrom<'deleteAssessment'>>  = async params => {
  // undefined
    return this.client.deleteAssessment(params as any).promise();
  }

  deleteAssessmentFramework: (params: RawParamsFrom<'deleteAssessmentFramework'>) => Promise<ReturnTypeFrom<'deleteAssessmentFramework'>>  = async params => {
  // undefined
    return this.client.deleteAssessmentFramework(params as any).promise();
  }

  deleteAssessmentFrameworkShare: (params: RawParamsFrom<'deleteAssessmentFrameworkShare'>) => Promise<ReturnTypeFrom<'deleteAssessmentFrameworkShare'>>  = async params => {
  // undefined
    return this.client.deleteAssessmentFrameworkShare(params as any).promise();
  }

  deleteAssessmentReport: (params: RawParamsFrom<'deleteAssessmentReport'>) => Promise<ReturnTypeFrom<'deleteAssessmentReport'>>  = async params => {
  // undefined
    return this.client.deleteAssessmentReport(params as any).promise();
  }

  deleteControl: (params: RawParamsFrom<'deleteControl'>) => Promise<ReturnTypeFrom<'deleteControl'>>  = async params => {
  // undefined
    return this.client.deleteControl(params as any).promise();
  }

  deregisterAccount: (params: RawParamsFrom<'deregisterAccount'>) => Promise<ReturnTypeFrom<'deregisterAccount'>>  = async params => {
  // undefined
    return this.client.deregisterAccount(params as any).promise();
  }

  deregisterOrganizationAdminAccount: (params: RawParamsFrom<'deregisterOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'deregisterOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.deregisterOrganizationAdminAccount(params as any).promise();
  }

  disassociateAssessmentReportEvidenceFolder: (params: RawParamsFrom<'disassociateAssessmentReportEvidenceFolder'>) => Promise<ReturnTypeFrom<'disassociateAssessmentReportEvidenceFolder'>>  = async params => {
  // undefined
    return this.client.disassociateAssessmentReportEvidenceFolder(params as any).promise();
  }

  getAccountStatus: (params: RawParamsFrom<'getAccountStatus'>) => Promise<ReturnTypeFrom<'getAccountStatus'>>  = async params => {
  // undefined
    return this.client.getAccountStatus(params as any).promise();
  }

  getAssessment: (params: RawParamsFrom<'getAssessment'>) => Promise<ReturnTypeFrom<'getAssessment'>>  = async params => {
  // undefined
    return this.client.getAssessment(params as any).promise();
  }

  getAssessmentFramework: (params: RawParamsFrom<'getAssessmentFramework'>) => Promise<ReturnTypeFrom<'getAssessmentFramework'>>  = async params => {
  // undefined
    return this.client.getAssessmentFramework(params as any).promise();
  }

  getAssessmentReportUrl: (params: RawParamsFrom<'getAssessmentReportUrl'>) => Promise<ReturnTypeFrom<'getAssessmentReportUrl'>>  = async params => {
  // undefined
    return this.client.getAssessmentReportUrl(params as any).promise();
  }

  getChangeLogs: (params: RawParamsFrom<'getChangeLogs'>) => Promise<ReturnTypeFrom<'getChangeLogs'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getChangeLogs(params as any).promise();
  }

  getControl: (params: RawParamsFrom<'getControl'>) => Promise<ReturnTypeFrom<'getControl'>>  = async params => {
  // undefined
    return this.client.getControl(params as any).promise();
  }

  getDelegations: (params: RawParamsFrom<'getDelegations'>) => Promise<ReturnTypeFrom<'getDelegations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getDelegations(params as any).promise();
  }

  getEvidence: (params: RawParamsFrom<'getEvidence'>) => Promise<ReturnTypeFrom<'getEvidence'>>  = async params => {
  // undefined
    return this.client.getEvidence(params as any).promise();
  }

  getEvidenceByEvidenceFolder: (params: RawParamsFrom<'getEvidenceByEvidenceFolder'>) => Promise<ReturnTypeFrom<'getEvidenceByEvidenceFolder'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEvidenceByEvidenceFolder(params as any).promise();
  }

  getEvidenceFolder: (params: RawParamsFrom<'getEvidenceFolder'>) => Promise<ReturnTypeFrom<'getEvidenceFolder'>>  = async params => {
  // undefined
    return this.client.getEvidenceFolder(params as any).promise();
  }

  getEvidenceFoldersByAssessment: (params: RawParamsFrom<'getEvidenceFoldersByAssessment'>) => Promise<ReturnTypeFrom<'getEvidenceFoldersByAssessment'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEvidenceFoldersByAssessment(params as any).promise();
  }

  getEvidenceFoldersByAssessmentControl: (params: RawParamsFrom<'getEvidenceFoldersByAssessmentControl'>) => Promise<ReturnTypeFrom<'getEvidenceFoldersByAssessmentControl'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEvidenceFoldersByAssessmentControl(params as any).promise();
  }

  getInsights: (params: RawParamsFrom<'getInsights'>) => Promise<ReturnTypeFrom<'getInsights'>>  = async params => {
  // undefined
    return this.client.getInsights(params as any).promise();
  }

  getInsightsByAssessment: (params: RawParamsFrom<'getInsightsByAssessment'>) => Promise<ReturnTypeFrom<'getInsightsByAssessment'>>  = async params => {
  // undefined
    return this.client.getInsightsByAssessment(params as any).promise();
  }

  getOrganizationAdminAccount: (params: RawParamsFrom<'getOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'getOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.getOrganizationAdminAccount(params as any).promise();
  }

  getServicesInScope: (params: RawParamsFrom<'getServicesInScope'>) => Promise<ReturnTypeFrom<'getServicesInScope'>>  = async params => {
  // undefined
    return this.client.getServicesInScope(params as any).promise();
  }

  getSettings: (params: RawParamsFrom<'getSettings'>) => Promise<ReturnTypeFrom<'getSettings'>>  = async params => {
  // undefined
    return this.client.getSettings(params as any).promise();
  }

  listAssessmentControlInsightsByControlDomain: (params: RawParamsFrom<'listAssessmentControlInsightsByControlDomain'>) => Promise<ReturnTypeFrom<'listAssessmentControlInsightsByControlDomain'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentControlInsightsByControlDomain(params as any).promise();
  }

  listAssessmentFrameworkShareRequests: (params: RawParamsFrom<'listAssessmentFrameworkShareRequests'>) => Promise<ReturnTypeFrom<'listAssessmentFrameworkShareRequests'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentFrameworkShareRequests(params as any).promise();
  }

  listAssessmentFrameworks: (params: RawParamsFrom<'listAssessmentFrameworks'>) => Promise<ReturnTypeFrom<'listAssessmentFrameworks'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentFrameworks(params as any).promise();
  }

  listAssessmentReports: (params: RawParamsFrom<'listAssessmentReports'>) => Promise<ReturnTypeFrom<'listAssessmentReports'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentReports(params as any).promise();
  }

  listAssessments: (params: RawParamsFrom<'listAssessments'>) => Promise<ReturnTypeFrom<'listAssessments'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessments(params as any).promise();
  }

  listControlDomainInsights: (params: RawParamsFrom<'listControlDomainInsights'>) => Promise<ReturnTypeFrom<'listControlDomainInsights'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listControlDomainInsights(params as any).promise();
  }

  listControlDomainInsightsByAssessment: (params: RawParamsFrom<'listControlDomainInsightsByAssessment'>) => Promise<ReturnTypeFrom<'listControlDomainInsightsByAssessment'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listControlDomainInsightsByAssessment(params as any).promise();
  }

  listControlInsightsByControlDomain: (params: RawParamsFrom<'listControlInsightsByControlDomain'>) => Promise<ReturnTypeFrom<'listControlInsightsByControlDomain'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listControlInsightsByControlDomain(params as any).promise();
  }

  listControls: (params: RawParamsFrom<'listControls'>) => Promise<ReturnTypeFrom<'listControls'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listControls(params as any).promise();
  }

  listKeywordsForDataSource: (params: RawParamsFrom<'listKeywordsForDataSource'>) => Promise<ReturnTypeFrom<'listKeywordsForDataSource'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listKeywordsForDataSource(params as any).promise();
  }

  listNotifications: (params: RawParamsFrom<'listNotifications'>) => Promise<ReturnTypeFrom<'listNotifications'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listNotifications(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  registerAccount: (params: RawParamsFrom<'registerAccount'>) => Promise<ReturnTypeFrom<'registerAccount'>>  = async params => {
  // undefined
    return this.client.registerAccount(params as any).promise();
  }

  registerOrganizationAdminAccount: (params: RawParamsFrom<'registerOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'registerOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.registerOrganizationAdminAccount(params as any).promise();
  }

  startAssessmentFrameworkShare: (params: RawParamsFrom<'startAssessmentFrameworkShare'>) => Promise<ReturnTypeFrom<'startAssessmentFrameworkShare'>>  = async params => {
  // undefined
    return this.client.startAssessmentFrameworkShare(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAssessment: (params: RawParamsFrom<'updateAssessment'>) => Promise<ReturnTypeFrom<'updateAssessment'>>  = async params => {
  // undefined
    return this.client.updateAssessment(params as any).promise();
  }

  updateAssessmentControl: (params: RawParamsFrom<'updateAssessmentControl'>) => Promise<ReturnTypeFrom<'updateAssessmentControl'>>  = async params => {
  // undefined
    return this.client.updateAssessmentControl(params as any).promise();
  }

  updateAssessmentControlSetStatus: (params: RawParamsFrom<'updateAssessmentControlSetStatus'>) => Promise<ReturnTypeFrom<'updateAssessmentControlSetStatus'>>  = async params => {
  // undefined
    return this.client.updateAssessmentControlSetStatus(params as any).promise();
  }

  updateAssessmentFramework: (params: RawParamsFrom<'updateAssessmentFramework'>) => Promise<ReturnTypeFrom<'updateAssessmentFramework'>>  = async params => {
  // undefined
    return this.client.updateAssessmentFramework(params as any).promise();
  }

  updateAssessmentFrameworkShare: (params: RawParamsFrom<'updateAssessmentFrameworkShare'>) => Promise<ReturnTypeFrom<'updateAssessmentFrameworkShare'>>  = async params => {
  // undefined
    return this.client.updateAssessmentFrameworkShare(params as any).promise();
  }

  updateAssessmentStatus: (params: RawParamsFrom<'updateAssessmentStatus'>) => Promise<ReturnTypeFrom<'updateAssessmentStatus'>>  = async params => {
  // undefined
    return this.client.updateAssessmentStatus(params as any).promise();
  }

  updateControl: (params: RawParamsFrom<'updateControl'>) => Promise<ReturnTypeFrom<'updateControl'>>  = async params => {
  // undefined
    return this.client.updateControl(params as any).promise();
  }

  updateSettings: (params: RawParamsFrom<'updateSettings'>) => Promise<ReturnTypeFrom<'updateSettings'>>  = async params => {
  // undefined
    return this.client.updateSettings(params as any).promise();
  }

  validateAssessmentReportIntegrity: (params: RawParamsFrom<'validateAssessmentReportIntegrity'>) => Promise<ReturnTypeFrom<'validateAssessmentReportIntegrity'>>  = async params => {
  // undefined
    return this.client.validateAssessmentReportIntegrity(params as any).promise();
  }
  
  static fromClient(client: AWSAuditManager): AuditManager {
    return new AuditManager(client) as any;
  }
  
  static client(options?: AWSAuditManager.Types.ClientConfiguration): AuditManager {
    return new AuditManager(new AWSAuditManager(options)) as any;
  }
}  
