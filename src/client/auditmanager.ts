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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'auditmanager';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["getDelegations","listAssessmentReports","listAssessments","listControlDomainInsights","listNotifications"];
    
  associateAssessmentReportEvidenceFolder: FunctionTypeFrom<'associateAssessmentReportEvidenceFolder'>;

  batchAssociateAssessmentReportEvidence: FunctionTypeFrom<'batchAssociateAssessmentReportEvidence'>;

  batchCreateDelegationByAssessment: FunctionTypeFrom<'batchCreateDelegationByAssessment'>;

  batchDeleteDelegationByAssessment: FunctionTypeFrom<'batchDeleteDelegationByAssessment'>;

  batchDisassociateAssessmentReportEvidence: FunctionTypeFrom<'batchDisassociateAssessmentReportEvidence'>;

  batchImportEvidenceToAssessmentControl: FunctionTypeFrom<'batchImportEvidenceToAssessmentControl'>;

  createAssessment: FunctionTypeFrom<'createAssessment'>;

  createAssessmentFramework: FunctionTypeFrom<'createAssessmentFramework'>;

  createAssessmentReport: FunctionTypeFrom<'createAssessmentReport'>;

  createControl: FunctionTypeFrom<'createControl'>;

  deleteAssessment: FunctionTypeFrom<'deleteAssessment'>;

  deleteAssessmentFramework: FunctionTypeFrom<'deleteAssessmentFramework'>;

  deleteAssessmentFrameworkShare: FunctionTypeFrom<'deleteAssessmentFrameworkShare'>;

  deleteAssessmentReport: FunctionTypeFrom<'deleteAssessmentReport'>;

  deleteControl: FunctionTypeFrom<'deleteControl'>;

  deregisterAccount: FunctionTypeFrom<'deregisterAccount'>;

  deregisterOrganizationAdminAccount: FunctionTypeFrom<'deregisterOrganizationAdminAccount'>;

  disassociateAssessmentReportEvidenceFolder: FunctionTypeFrom<'disassociateAssessmentReportEvidenceFolder'>;

  getAccountStatus: FunctionTypeFrom<'getAccountStatus'>;

  getAssessment: FunctionTypeFrom<'getAssessment'>;

  getAssessmentFramework: FunctionTypeFrom<'getAssessmentFramework'>;

  getAssessmentReportUrl: FunctionTypeFrom<'getAssessmentReportUrl'>;

  getChangeLogs: FunctionTypeFrom<'getChangeLogs'>;

  getControl: FunctionTypeFrom<'getControl'>;

  getDelegations: FunctionTypeFrom<'getDelegations'>;

  getEvidence: FunctionTypeFrom<'getEvidence'>;

  getEvidenceByEvidenceFolder: FunctionTypeFrom<'getEvidenceByEvidenceFolder'>;

  getEvidenceFolder: FunctionTypeFrom<'getEvidenceFolder'>;

  getEvidenceFoldersByAssessment: FunctionTypeFrom<'getEvidenceFoldersByAssessment'>;

  getEvidenceFoldersByAssessmentControl: FunctionTypeFrom<'getEvidenceFoldersByAssessmentControl'>;

  getInsights: FunctionTypeFrom<'getInsights'>;

  getInsightsByAssessment: FunctionTypeFrom<'getInsightsByAssessment'>;

  getOrganizationAdminAccount: FunctionTypeFrom<'getOrganizationAdminAccount'>;

  getServicesInScope: FunctionTypeFrom<'getServicesInScope'>;

  getSettings: FunctionTypeFrom<'getSettings'>;

  listAssessmentControlInsightsByControlDomain: FunctionTypeFrom<'listAssessmentControlInsightsByControlDomain'>;

  listAssessmentFrameworkShareRequests: FunctionTypeFrom<'listAssessmentFrameworkShareRequests'>;

  listAssessmentFrameworks: FunctionTypeFrom<'listAssessmentFrameworks'>;

  listAssessmentReports: FunctionTypeFrom<'listAssessmentReports'>;

  listAssessments: FunctionTypeFrom<'listAssessments'>;

  listControlDomainInsights: FunctionTypeFrom<'listControlDomainInsights'>;

  listControlDomainInsightsByAssessment: FunctionTypeFrom<'listControlDomainInsightsByAssessment'>;

  listControlInsightsByControlDomain: FunctionTypeFrom<'listControlInsightsByControlDomain'>;

  listControls: FunctionTypeFrom<'listControls'>;

  listKeywordsForDataSource: FunctionTypeFrom<'listKeywordsForDataSource'>;

  listNotifications: FunctionTypeFrom<'listNotifications'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  registerAccount: FunctionTypeFrom<'registerAccount'>;

  registerOrganizationAdminAccount: FunctionTypeFrom<'registerOrganizationAdminAccount'>;

  startAssessmentFrameworkShare: FunctionTypeFrom<'startAssessmentFrameworkShare'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAssessment: FunctionTypeFrom<'updateAssessment'>;

  updateAssessmentControl: FunctionTypeFrom<'updateAssessmentControl'>;

  updateAssessmentControlSetStatus: FunctionTypeFrom<'updateAssessmentControlSetStatus'>;

  updateAssessmentFramework: FunctionTypeFrom<'updateAssessmentFramework'>;

  updateAssessmentFrameworkShare: FunctionTypeFrom<'updateAssessmentFrameworkShare'>;

  updateAssessmentStatus: FunctionTypeFrom<'updateAssessmentStatus'>;

  updateControl: FunctionTypeFrom<'updateControl'>;

  updateSettings: FunctionTypeFrom<'updateSettings'>;

  validateAssessmentReportIntegrity: FunctionTypeFrom<'validateAssessmentReportIntegrity'>
}
 
export class AuditManager implements ClientType {
  private constructor(private readonly client: AWSAuditManager) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'auditmanager';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["getDelegations","listAssessmentReports","listAssessments","listControlDomainInsights","listNotifications"] as const;
  
  async associateAssessmentReportEvidenceFolder(...args: any): Promise<any> {
  // undefined
    return this.client.associateAssessmentReportEvidenceFolder(...args).promise()
  }

  async batchAssociateAssessmentReportEvidence(...args: any): Promise<any> {
  // undefined
    return this.client.batchAssociateAssessmentReportEvidence(...args).promise()
  }

  async batchCreateDelegationByAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateDelegationByAssessment(...args).promise()
  }

  async batchDeleteDelegationByAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteDelegationByAssessment(...args).promise()
  }

  async batchDisassociateAssessmentReportEvidence(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisassociateAssessmentReportEvidence(...args).promise()
  }

  async batchImportEvidenceToAssessmentControl(...args: any): Promise<any> {
  // undefined
    return this.client.batchImportEvidenceToAssessmentControl(...args).promise()
  }

  async createAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.createAssessment(...args).promise()
  }

  async createAssessmentFramework(...args: any): Promise<any> {
  // undefined
    return this.client.createAssessmentFramework(...args).promise()
  }

  async createAssessmentReport(...args: any): Promise<any> {
  // undefined
    return this.client.createAssessmentReport(...args).promise()
  }

  async createControl(...args: any): Promise<any> {
  // undefined
    return this.client.createControl(...args).promise()
  }

  async deleteAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssessment(...args).promise()
  }

  async deleteAssessmentFramework(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssessmentFramework(...args).promise()
  }

  async deleteAssessmentFrameworkShare(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssessmentFrameworkShare(...args).promise()
  }

  async deleteAssessmentReport(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssessmentReport(...args).promise()
  }

  async deleteControl(...args: any): Promise<any> {
  // undefined
    return this.client.deleteControl(...args).promise()
  }

  async deregisterAccount(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterAccount(...args).promise()
  }

  async deregisterOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterOrganizationAdminAccount(...args).promise()
  }

  async disassociateAssessmentReportEvidenceFolder(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateAssessmentReportEvidenceFolder(...args).promise()
  }

  async getAccountStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountStatus(...args).promise()
  }

  async getAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.getAssessment(...args).promise()
  }

  async getAssessmentFramework(...args: any): Promise<any> {
  // undefined
    return this.client.getAssessmentFramework(...args).promise()
  }

  async getAssessmentReportUrl(...args: any): Promise<any> {
  // undefined
    return this.client.getAssessmentReportUrl(...args).promise()
  }

  async getChangeLogs(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getChangeLogs(...args).promise()
  }

  async getControl(...args: any): Promise<any> {
  // undefined
    return this.client.getControl(...args).promise()
  }

  async getDelegations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getDelegations(...args).promise()
  }

  async getEvidence(...args: any): Promise<any> {
  // undefined
    return this.client.getEvidence(...args).promise()
  }

  async getEvidenceByEvidenceFolder(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEvidenceByEvidenceFolder(...args).promise()
  }

  async getEvidenceFolder(...args: any): Promise<any> {
  // undefined
    return this.client.getEvidenceFolder(...args).promise()
  }

  async getEvidenceFoldersByAssessment(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEvidenceFoldersByAssessment(...args).promise()
  }

  async getEvidenceFoldersByAssessmentControl(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEvidenceFoldersByAssessmentControl(...args).promise()
  }

  async getInsights(...args: any): Promise<any> {
  // undefined
    return this.client.getInsights(...args).promise()
  }

  async getInsightsByAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.getInsightsByAssessment(...args).promise()
  }

  async getOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getOrganizationAdminAccount(...args).promise()
  }

  async getServicesInScope(...args: any): Promise<any> {
  // undefined
    return this.client.getServicesInScope(...args).promise()
  }

  async getSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getSettings(...args).promise()
  }

  async listAssessmentControlInsightsByControlDomain(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentControlInsightsByControlDomain(...args).promise()
  }

  async listAssessmentFrameworkShareRequests(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentFrameworkShareRequests(...args).promise()
  }

  async listAssessmentFrameworks(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentFrameworks(...args).promise()
  }

  async listAssessmentReports(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessmentReports(...args).promise()
  }

  async listAssessments(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAssessments(...args).promise()
  }

  async listControlDomainInsights(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listControlDomainInsights(...args).promise()
  }

  async listControlDomainInsightsByAssessment(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listControlDomainInsightsByAssessment(...args).promise()
  }

  async listControlInsightsByControlDomain(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listControlInsightsByControlDomain(...args).promise()
  }

  async listControls(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listControls(...args).promise()
  }

  async listKeywordsForDataSource(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listKeywordsForDataSource(...args).promise()
  }

  async listNotifications(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listNotifications(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async registerAccount(...args: any): Promise<any> {
  // undefined
    return this.client.registerAccount(...args).promise()
  }

  async registerOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.registerOrganizationAdminAccount(...args).promise()
  }

  async startAssessmentFrameworkShare(...args: any): Promise<any> {
  // undefined
    return this.client.startAssessmentFrameworkShare(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssessment(...args).promise()
  }

  async updateAssessmentControl(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssessmentControl(...args).promise()
  }

  async updateAssessmentControlSetStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssessmentControlSetStatus(...args).promise()
  }

  async updateAssessmentFramework(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssessmentFramework(...args).promise()
  }

  async updateAssessmentFrameworkShare(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssessmentFrameworkShare(...args).promise()
  }

  async updateAssessmentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssessmentStatus(...args).promise()
  }

  async updateControl(...args: any): Promise<any> {
  // undefined
    return this.client.updateControl(...args).promise()
  }

  async updateSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateSettings(...args).promise()
  }

  async validateAssessmentReportIntegrity(...args: any): Promise<any> {
  // undefined
    return this.client.validateAssessmentReportIntegrity(...args).promise()
  }
  
  static fromClient(client: AWSAuditManager): ClientType {
    return new AuditManager(client) as any;
  }
  
  static client(options?: AWSAuditManager.Types.ClientConfiguration): ClientType {
    return new AuditManager(new AWSAuditManager(options)) as any;
  }
}  
