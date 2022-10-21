import { Request, Iot as AWSIot } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIot> = AWSIot[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIot> = AWSIot[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIot[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIot, Extras> = AWSIot[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIot> = AWSIot[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Iot {
  private constructor(private readonly client: AWSIot) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iot' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = ["getBehaviorModelTrainingSummaries","listActiveViolations","listAuditFindings","listAuditSuppressions","listAuthorizers","listBillingGroups","listCACertificates","listCertificates","listCustomMetrics","listDetectMitigationActionsExecutions","listDimensions","listDomainConfigurations","listFleetMetrics","listIndices","listJobTemplates","listJobs","listMitigationActions","listOTAUpdates","listOutgoingCertificates","listPolicies","listProvisioningTemplates","listRoleAliases","listScheduledAudits","listSecurityProfiles","listStreams","listThingGroups","listThingRegistrationTasks","listThingTypes","listThings","listTopicRuleDestinations","listTopicRules","listV2LoggingLevels"] as const;
  
  acceptCertificateTransfer: (params: RawParamsFrom<'acceptCertificateTransfer'>) => Promise<ReturnTypeFrom<'acceptCertificateTransfer'>>  = async params => {
  // undefined
    return this.client.acceptCertificateTransfer(params as any).promise();
  }

  addThingToBillingGroup: (params: RawParamsFrom<'addThingToBillingGroup'>) => Promise<ReturnTypeFrom<'addThingToBillingGroup'>>  = async params => {
  // undefined
    return this.client.addThingToBillingGroup(params as any).promise();
  }

  addThingToThingGroup: (params: RawParamsFrom<'addThingToThingGroup'>) => Promise<ReturnTypeFrom<'addThingToThingGroup'>>  = async params => {
  // undefined
    return this.client.addThingToThingGroup(params as any).promise();
  }

  associateTargetsWithJob: (params: RawParamsFrom<'associateTargetsWithJob'>) => Promise<ReturnTypeFrom<'associateTargetsWithJob'>>  = async params => {
  // undefined
    return this.client.associateTargetsWithJob(params as any).promise();
  }

  attachPolicy: (params: RawParamsFrom<'attachPolicy'>) => Promise<ReturnTypeFrom<'attachPolicy'>>  = async params => {
  // undefined
    return this.client.attachPolicy(params as any).promise();
  }

  attachPrincipalPolicy: (params: RawParamsFrom<'attachPrincipalPolicy'>) => Promise<ReturnTypeFrom<'attachPrincipalPolicy'>>  = async params => {
  // undefined
    return this.client.attachPrincipalPolicy(params as any).promise();
  }

  attachSecurityProfile: (params: RawParamsFrom<'attachSecurityProfile'>) => Promise<ReturnTypeFrom<'attachSecurityProfile'>>  = async params => {
  // undefined
    return this.client.attachSecurityProfile(params as any).promise();
  }

  attachThingPrincipal: (params: RawParamsFrom<'attachThingPrincipal'>) => Promise<ReturnTypeFrom<'attachThingPrincipal'>>  = async params => {
  // undefined
    return this.client.attachThingPrincipal(params as any).promise();
  }

  cancelAuditMitigationActionsTask: (params: RawParamsFrom<'cancelAuditMitigationActionsTask'>) => Promise<ReturnTypeFrom<'cancelAuditMitigationActionsTask'>>  = async params => {
  // undefined
    return this.client.cancelAuditMitigationActionsTask(params as any).promise();
  }

  cancelAuditTask: (params: RawParamsFrom<'cancelAuditTask'>) => Promise<ReturnTypeFrom<'cancelAuditTask'>>  = async params => {
  // undefined
    return this.client.cancelAuditTask(params as any).promise();
  }

  cancelCertificateTransfer: (params: RawParamsFrom<'cancelCertificateTransfer'>) => Promise<ReturnTypeFrom<'cancelCertificateTransfer'>>  = async params => {
  // undefined
    return this.client.cancelCertificateTransfer(params as any).promise();
  }

  cancelDetectMitigationActionsTask: (params: RawParamsFrom<'cancelDetectMitigationActionsTask'>) => Promise<ReturnTypeFrom<'cancelDetectMitigationActionsTask'>>  = async params => {
  // undefined
    return this.client.cancelDetectMitigationActionsTask(params as any).promise();
  }

  cancelJob: (params: RawParamsFrom<'cancelJob'>) => Promise<ReturnTypeFrom<'cancelJob'>>  = async params => {
  // undefined
    return this.client.cancelJob(params as any).promise();
  }

  cancelJobExecution: (params: RawParamsFrom<'cancelJobExecution'>) => Promise<ReturnTypeFrom<'cancelJobExecution'>>  = async params => {
  // undefined
    return this.client.cancelJobExecution(params as any).promise();
  }

  clearDefaultAuthorizer: (params: RawParamsFrom<'clearDefaultAuthorizer'>) => Promise<ReturnTypeFrom<'clearDefaultAuthorizer'>>  = async params => {
  // undefined
    return this.client.clearDefaultAuthorizer(params as any).promise();
  }

  confirmTopicRuleDestination: (params: RawParamsFrom<'confirmTopicRuleDestination'>) => Promise<ReturnTypeFrom<'confirmTopicRuleDestination'>>  = async params => {
  // undefined
    return this.client.confirmTopicRuleDestination(params as any).promise();
  }

  createAuditSuppression: (params: RawParamsFrom<'createAuditSuppression'>) => Promise<ReturnTypeFrom<'createAuditSuppression'>>  = async params => {
  // undefined
    return this.client.createAuditSuppression(params as any).promise();
  }

  createAuthorizer: (params: RawParamsFrom<'createAuthorizer'>) => Promise<ReturnTypeFrom<'createAuthorizer'>>  = async params => {
  // undefined
    return this.client.createAuthorizer(params as any).promise();
  }

  createBillingGroup: (params: RawParamsFrom<'createBillingGroup'>) => Promise<ReturnTypeFrom<'createBillingGroup'>>  = async params => {
  // undefined
    return this.client.createBillingGroup(params as any).promise();
  }

  createCertificateFromCsr: (params: RawParamsFrom<'createCertificateFromCsr'>) => Promise<ReturnTypeFrom<'createCertificateFromCsr'>>  = async params => {
  // undefined
    return this.client.createCertificateFromCsr(params as any).promise();
  }

  createCustomMetric: (params: RawParamsFrom<'createCustomMetric'>) => Promise<ReturnTypeFrom<'createCustomMetric'>>  = async params => {
  // undefined
    return this.client.createCustomMetric(params as any).promise();
  }

  createDimension: (params: RawParamsFrom<'createDimension'>) => Promise<ReturnTypeFrom<'createDimension'>>  = async params => {
  // undefined
    return this.client.createDimension(params as any).promise();
  }

  createDomainConfiguration: (params: RawParamsFrom<'createDomainConfiguration'>) => Promise<ReturnTypeFrom<'createDomainConfiguration'>>  = async params => {
  // undefined
    return this.client.createDomainConfiguration(params as any).promise();
  }

  createDynamicThingGroup: (params: RawParamsFrom<'createDynamicThingGroup'>) => Promise<ReturnTypeFrom<'createDynamicThingGroup'>>  = async params => {
  // undefined
    return this.client.createDynamicThingGroup(params as any).promise();
  }

  createFleetMetric: (params: RawParamsFrom<'createFleetMetric'>) => Promise<ReturnTypeFrom<'createFleetMetric'>>  = async params => {
  // undefined
    return this.client.createFleetMetric(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  createJobTemplate: (params: RawParamsFrom<'createJobTemplate'>) => Promise<ReturnTypeFrom<'createJobTemplate'>>  = async params => {
  // undefined
    return this.client.createJobTemplate(params as any).promise();
  }

  createKeysAndCertificate: (params: RawParamsFrom<'createKeysAndCertificate'>) => Promise<ReturnTypeFrom<'createKeysAndCertificate'>>  = async params => {
  // undefined
    return this.client.createKeysAndCertificate(params as any).promise();
  }

  createMitigationAction: (params: RawParamsFrom<'createMitigationAction'>) => Promise<ReturnTypeFrom<'createMitigationAction'>>  = async params => {
  // undefined
    return this.client.createMitigationAction(params as any).promise();
  }

  createOTAUpdate: (params: RawParamsFrom<'createOTAUpdate'>) => Promise<ReturnTypeFrom<'createOTAUpdate'>>  = async params => {
  // undefined
    return this.client.createOTAUpdate(params as any).promise();
  }

  createPolicy: (params: RawParamsFrom<'createPolicy'>) => Promise<ReturnTypeFrom<'createPolicy'>>  = async params => {
  // undefined
    return this.client.createPolicy(params as any).promise();
  }

  createPolicyVersion: (params: RawParamsFrom<'createPolicyVersion'>) => Promise<ReturnTypeFrom<'createPolicyVersion'>>  = async params => {
  // undefined
    return this.client.createPolicyVersion(params as any).promise();
  }

  createProvisioningClaim: (params: RawParamsFrom<'createProvisioningClaim'>) => Promise<ReturnTypeFrom<'createProvisioningClaim'>>  = async params => {
  // undefined
    return this.client.createProvisioningClaim(params as any).promise();
  }

  createProvisioningTemplate: (params: RawParamsFrom<'createProvisioningTemplate'>) => Promise<ReturnTypeFrom<'createProvisioningTemplate'>>  = async params => {
  // undefined
    return this.client.createProvisioningTemplate(params as any).promise();
  }

  createProvisioningTemplateVersion: (params: RawParamsFrom<'createProvisioningTemplateVersion'>) => Promise<ReturnTypeFrom<'createProvisioningTemplateVersion'>>  = async params => {
  // undefined
    return this.client.createProvisioningTemplateVersion(params as any).promise();
  }

  createRoleAlias: (params: RawParamsFrom<'createRoleAlias'>) => Promise<ReturnTypeFrom<'createRoleAlias'>>  = async params => {
  // undefined
    return this.client.createRoleAlias(params as any).promise();
  }

  createScheduledAudit: (params: RawParamsFrom<'createScheduledAudit'>) => Promise<ReturnTypeFrom<'createScheduledAudit'>>  = async params => {
  // undefined
    return this.client.createScheduledAudit(params as any).promise();
  }

  createSecurityProfile: (params: RawParamsFrom<'createSecurityProfile'>) => Promise<ReturnTypeFrom<'createSecurityProfile'>>  = async params => {
  // undefined
    return this.client.createSecurityProfile(params as any).promise();
  }

  createStream: (params: RawParamsFrom<'createStream'>) => Promise<ReturnTypeFrom<'createStream'>>  = async params => {
  // undefined
    return this.client.createStream(params as any).promise();
  }

  createThing: (params: RawParamsFrom<'createThing'>) => Promise<ReturnTypeFrom<'createThing'>>  = async params => {
  // undefined
    return this.client.createThing(params as any).promise();
  }

  createThingGroup: (params: RawParamsFrom<'createThingGroup'>) => Promise<ReturnTypeFrom<'createThingGroup'>>  = async params => {
  // undefined
    return this.client.createThingGroup(params as any).promise();
  }

  createThingType: (params: RawParamsFrom<'createThingType'>) => Promise<ReturnTypeFrom<'createThingType'>>  = async params => {
  // undefined
    return this.client.createThingType(params as any).promise();
  }

  createTopicRule: (params: RawParamsFrom<'createTopicRule'>) => Promise<ReturnTypeFrom<'createTopicRule'>>  = async params => {
  // undefined
    return this.client.createTopicRule(params as any).promise();
  }

  createTopicRuleDestination: (params: RawParamsFrom<'createTopicRuleDestination'>) => Promise<ReturnTypeFrom<'createTopicRuleDestination'>>  = async params => {
  // undefined
    return this.client.createTopicRuleDestination(params as any).promise();
  }

  deleteAccountAuditConfiguration: (params: RawParamsFrom<'deleteAccountAuditConfiguration'>) => Promise<ReturnTypeFrom<'deleteAccountAuditConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteAccountAuditConfiguration(params as any).promise();
  }

  deleteAuditSuppression: (params: RawParamsFrom<'deleteAuditSuppression'>) => Promise<ReturnTypeFrom<'deleteAuditSuppression'>>  = async params => {
  // undefined
    return this.client.deleteAuditSuppression(params as any).promise();
  }

  deleteAuthorizer: (params: RawParamsFrom<'deleteAuthorizer'>) => Promise<ReturnTypeFrom<'deleteAuthorizer'>>  = async params => {
  // undefined
    return this.client.deleteAuthorizer(params as any).promise();
  }

  deleteBillingGroup: (params: RawParamsFrom<'deleteBillingGroup'>) => Promise<ReturnTypeFrom<'deleteBillingGroup'>>  = async params => {
  // undefined
    return this.client.deleteBillingGroup(params as any).promise();
  }

  deleteCACertificate: (params: RawParamsFrom<'deleteCACertificate'>) => Promise<ReturnTypeFrom<'deleteCACertificate'>>  = async params => {
  // undefined
    return this.client.deleteCACertificate(params as any).promise();
  }

  deleteCertificate: (params: RawParamsFrom<'deleteCertificate'>) => Promise<ReturnTypeFrom<'deleteCertificate'>>  = async params => {
  // undefined
    return this.client.deleteCertificate(params as any).promise();
  }

  deleteCustomMetric: (params: RawParamsFrom<'deleteCustomMetric'>) => Promise<ReturnTypeFrom<'deleteCustomMetric'>>  = async params => {
  // undefined
    return this.client.deleteCustomMetric(params as any).promise();
  }

  deleteDimension: (params: RawParamsFrom<'deleteDimension'>) => Promise<ReturnTypeFrom<'deleteDimension'>>  = async params => {
  // undefined
    return this.client.deleteDimension(params as any).promise();
  }

  deleteDomainConfiguration: (params: RawParamsFrom<'deleteDomainConfiguration'>) => Promise<ReturnTypeFrom<'deleteDomainConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteDomainConfiguration(params as any).promise();
  }

  deleteDynamicThingGroup: (params: RawParamsFrom<'deleteDynamicThingGroup'>) => Promise<ReturnTypeFrom<'deleteDynamicThingGroup'>>  = async params => {
  // undefined
    return this.client.deleteDynamicThingGroup(params as any).promise();
  }

  deleteFleetMetric: (params: RawParamsFrom<'deleteFleetMetric'>) => Promise<ReturnTypeFrom<'deleteFleetMetric'>>  = async params => {
  // undefined
    return this.client.deleteFleetMetric(params as any).promise();
  }

  deleteJob: (params: RawParamsFrom<'deleteJob'>) => Promise<ReturnTypeFrom<'deleteJob'>>  = async params => {
  // undefined
    return this.client.deleteJob(params as any).promise();
  }

  deleteJobExecution: (params: RawParamsFrom<'deleteJobExecution'>) => Promise<ReturnTypeFrom<'deleteJobExecution'>>  = async params => {
  // undefined
    return this.client.deleteJobExecution(params as any).promise();
  }

  deleteJobTemplate: (params: RawParamsFrom<'deleteJobTemplate'>) => Promise<ReturnTypeFrom<'deleteJobTemplate'>>  = async params => {
  // undefined
    return this.client.deleteJobTemplate(params as any).promise();
  }

  deleteMitigationAction: (params: RawParamsFrom<'deleteMitigationAction'>) => Promise<ReturnTypeFrom<'deleteMitigationAction'>>  = async params => {
  // undefined
    return this.client.deleteMitigationAction(params as any).promise();
  }

  deleteOTAUpdate: (params: RawParamsFrom<'deleteOTAUpdate'>) => Promise<ReturnTypeFrom<'deleteOTAUpdate'>>  = async params => {
  // undefined
    return this.client.deleteOTAUpdate(params as any).promise();
  }

  deletePolicy: (params: RawParamsFrom<'deletePolicy'>) => Promise<ReturnTypeFrom<'deletePolicy'>>  = async params => {
  // undefined
    return this.client.deletePolicy(params as any).promise();
  }

  deletePolicyVersion: (params: RawParamsFrom<'deletePolicyVersion'>) => Promise<ReturnTypeFrom<'deletePolicyVersion'>>  = async params => {
  // undefined
    return this.client.deletePolicyVersion(params as any).promise();
  }

  deleteProvisioningTemplate: (params: RawParamsFrom<'deleteProvisioningTemplate'>) => Promise<ReturnTypeFrom<'deleteProvisioningTemplate'>>  = async params => {
  // undefined
    return this.client.deleteProvisioningTemplate(params as any).promise();
  }

  deleteProvisioningTemplateVersion: (params: RawParamsFrom<'deleteProvisioningTemplateVersion'>) => Promise<ReturnTypeFrom<'deleteProvisioningTemplateVersion'>>  = async params => {
  // undefined
    return this.client.deleteProvisioningTemplateVersion(params as any).promise();
  }

  deleteRegistrationCode: (params: RawParamsFrom<'deleteRegistrationCode'>) => Promise<ReturnTypeFrom<'deleteRegistrationCode'>>  = async params => {
  // undefined
    return this.client.deleteRegistrationCode(params as any).promise();
  }

  deleteRoleAlias: (params: RawParamsFrom<'deleteRoleAlias'>) => Promise<ReturnTypeFrom<'deleteRoleAlias'>>  = async params => {
  // undefined
    return this.client.deleteRoleAlias(params as any).promise();
  }

  deleteScheduledAudit: (params: RawParamsFrom<'deleteScheduledAudit'>) => Promise<ReturnTypeFrom<'deleteScheduledAudit'>>  = async params => {
  // undefined
    return this.client.deleteScheduledAudit(params as any).promise();
  }

  deleteSecurityProfile: (params: RawParamsFrom<'deleteSecurityProfile'>) => Promise<ReturnTypeFrom<'deleteSecurityProfile'>>  = async params => {
  // undefined
    return this.client.deleteSecurityProfile(params as any).promise();
  }

  deleteStream: (params: RawParamsFrom<'deleteStream'>) => Promise<ReturnTypeFrom<'deleteStream'>>  = async params => {
  // undefined
    return this.client.deleteStream(params as any).promise();
  }

  deleteThing: (params: RawParamsFrom<'deleteThing'>) => Promise<ReturnTypeFrom<'deleteThing'>>  = async params => {
  // undefined
    return this.client.deleteThing(params as any).promise();
  }

  deleteThingGroup: (params: RawParamsFrom<'deleteThingGroup'>) => Promise<ReturnTypeFrom<'deleteThingGroup'>>  = async params => {
  // undefined
    return this.client.deleteThingGroup(params as any).promise();
  }

  deleteThingType: (params: RawParamsFrom<'deleteThingType'>) => Promise<ReturnTypeFrom<'deleteThingType'>>  = async params => {
  // undefined
    return this.client.deleteThingType(params as any).promise();
  }

  deleteTopicRule: (params: RawParamsFrom<'deleteTopicRule'>) => Promise<ReturnTypeFrom<'deleteTopicRule'>>  = async params => {
  // undefined
    return this.client.deleteTopicRule(params as any).promise();
  }

  deleteTopicRuleDestination: (params: RawParamsFrom<'deleteTopicRuleDestination'>) => Promise<ReturnTypeFrom<'deleteTopicRuleDestination'>>  = async params => {
  // undefined
    return this.client.deleteTopicRuleDestination(params as any).promise();
  }

  deleteV2LoggingLevel: (params: RawParamsFrom<'deleteV2LoggingLevel'>) => Promise<ReturnTypeFrom<'deleteV2LoggingLevel'>>  = async params => {
  // undefined
    return this.client.deleteV2LoggingLevel(params as any).promise();
  }

  deprecateThingType: (params: RawParamsFrom<'deprecateThingType'>) => Promise<ReturnTypeFrom<'deprecateThingType'>>  = async params => {
  // undefined
    return this.client.deprecateThingType(params as any).promise();
  }

  describeAccountAuditConfiguration: (params: RawParamsFrom<'describeAccountAuditConfiguration'>) => Promise<ReturnTypeFrom<'describeAccountAuditConfiguration'>>  = async params => {
  // undefined
    return this.client.describeAccountAuditConfiguration(params as any).promise();
  }

  describeAuditFinding: (params: RawParamsFrom<'describeAuditFinding'>) => Promise<ReturnTypeFrom<'describeAuditFinding'>>  = async params => {
  // undefined
    return this.client.describeAuditFinding(params as any).promise();
  }

  describeAuditMitigationActionsTask: (params: RawParamsFrom<'describeAuditMitigationActionsTask'>) => Promise<ReturnTypeFrom<'describeAuditMitigationActionsTask'>>  = async params => {
  // undefined
    return this.client.describeAuditMitigationActionsTask(params as any).promise();
  }

  describeAuditSuppression: (params: RawParamsFrom<'describeAuditSuppression'>) => Promise<ReturnTypeFrom<'describeAuditSuppression'>>  = async params => {
  // undefined
    return this.client.describeAuditSuppression(params as any).promise();
  }

  describeAuditTask: (params: RawParamsFrom<'describeAuditTask'>) => Promise<ReturnTypeFrom<'describeAuditTask'>>  = async params => {
  // undefined
    return this.client.describeAuditTask(params as any).promise();
  }

  describeAuthorizer: (params: RawParamsFrom<'describeAuthorizer'>) => Promise<ReturnTypeFrom<'describeAuthorizer'>>  = async params => {
  // undefined
    return this.client.describeAuthorizer(params as any).promise();
  }

  describeBillingGroup: (params: RawParamsFrom<'describeBillingGroup'>) => Promise<ReturnTypeFrom<'describeBillingGroup'>>  = async params => {
  // undefined
    return this.client.describeBillingGroup(params as any).promise();
  }

  describeCACertificate: (params: RawParamsFrom<'describeCACertificate'>) => Promise<ReturnTypeFrom<'describeCACertificate'>>  = async params => {
  // undefined
    return this.client.describeCACertificate(params as any).promise();
  }

  describeCertificate: (params: RawParamsFrom<'describeCertificate'>) => Promise<ReturnTypeFrom<'describeCertificate'>>  = async params => {
  // undefined
    return this.client.describeCertificate(params as any).promise();
  }

  describeCustomMetric: (params: RawParamsFrom<'describeCustomMetric'>) => Promise<ReturnTypeFrom<'describeCustomMetric'>>  = async params => {
  // undefined
    return this.client.describeCustomMetric(params as any).promise();
  }

  describeDefaultAuthorizer: (params: RawParamsFrom<'describeDefaultAuthorizer'>) => Promise<ReturnTypeFrom<'describeDefaultAuthorizer'>>  = async params => {
  // undefined
    return this.client.describeDefaultAuthorizer(params as any).promise();
  }

  describeDetectMitigationActionsTask: (params: RawParamsFrom<'describeDetectMitigationActionsTask'>) => Promise<ReturnTypeFrom<'describeDetectMitigationActionsTask'>>  = async params => {
  // undefined
    return this.client.describeDetectMitigationActionsTask(params as any).promise();
  }

  describeDimension: (params: RawParamsFrom<'describeDimension'>) => Promise<ReturnTypeFrom<'describeDimension'>>  = async params => {
  // undefined
    return this.client.describeDimension(params as any).promise();
  }

  describeDomainConfiguration: (params: RawParamsFrom<'describeDomainConfiguration'>) => Promise<ReturnTypeFrom<'describeDomainConfiguration'>>  = async params => {
  // undefined
    return this.client.describeDomainConfiguration(params as any).promise();
  }

  describeEndpoint: (params: RawParamsFrom<'describeEndpoint'>) => Promise<ReturnTypeFrom<'describeEndpoint'>>  = async params => {
  // undefined
    return this.client.describeEndpoint(params as any).promise();
  }

  describeEventConfigurations: (params: RawParamsFrom<'describeEventConfigurations'>) => Promise<ReturnTypeFrom<'describeEventConfigurations'>>  = async params => {
  // undefined
    return this.client.describeEventConfigurations(params as any).promise();
  }

  describeFleetMetric: (params: RawParamsFrom<'describeFleetMetric'>) => Promise<ReturnTypeFrom<'describeFleetMetric'>>  = async params => {
  // undefined
    return this.client.describeFleetMetric(params as any).promise();
  }

  describeIndex: (params: RawParamsFrom<'describeIndex'>) => Promise<ReturnTypeFrom<'describeIndex'>>  = async params => {
  // undefined
    return this.client.describeIndex(params as any).promise();
  }

  describeJob: (params: RawParamsFrom<'describeJob'>) => Promise<ReturnTypeFrom<'describeJob'>>  = async params => {
  // undefined
    return this.client.describeJob(params as any).promise();
  }

  describeJobExecution: (params: RawParamsFrom<'describeJobExecution'>) => Promise<ReturnTypeFrom<'describeJobExecution'>>  = async params => {
  // undefined
    return this.client.describeJobExecution(params as any).promise();
  }

  describeJobTemplate: (params: RawParamsFrom<'describeJobTemplate'>) => Promise<ReturnTypeFrom<'describeJobTemplate'>>  = async params => {
  // undefined
    return this.client.describeJobTemplate(params as any).promise();
  }

  describeManagedJobTemplate: (params: RawParamsFrom<'describeManagedJobTemplate'>) => Promise<ReturnTypeFrom<'describeManagedJobTemplate'>>  = async params => {
  // undefined
    return this.client.describeManagedJobTemplate(params as any).promise();
  }

  describeMitigationAction: (params: RawParamsFrom<'describeMitigationAction'>) => Promise<ReturnTypeFrom<'describeMitigationAction'>>  = async params => {
  // undefined
    return this.client.describeMitigationAction(params as any).promise();
  }

  describeProvisioningTemplate: (params: RawParamsFrom<'describeProvisioningTemplate'>) => Promise<ReturnTypeFrom<'describeProvisioningTemplate'>>  = async params => {
  // undefined
    return this.client.describeProvisioningTemplate(params as any).promise();
  }

  describeProvisioningTemplateVersion: (params: RawParamsFrom<'describeProvisioningTemplateVersion'>) => Promise<ReturnTypeFrom<'describeProvisioningTemplateVersion'>>  = async params => {
  // undefined
    return this.client.describeProvisioningTemplateVersion(params as any).promise();
  }

  describeRoleAlias: (params: RawParamsFrom<'describeRoleAlias'>) => Promise<ReturnTypeFrom<'describeRoleAlias'>>  = async params => {
  // undefined
    return this.client.describeRoleAlias(params as any).promise();
  }

  describeScheduledAudit: (params: RawParamsFrom<'describeScheduledAudit'>) => Promise<ReturnTypeFrom<'describeScheduledAudit'>>  = async params => {
  // undefined
    return this.client.describeScheduledAudit(params as any).promise();
  }

  describeSecurityProfile: (params: RawParamsFrom<'describeSecurityProfile'>) => Promise<ReturnTypeFrom<'describeSecurityProfile'>>  = async params => {
  // undefined
    return this.client.describeSecurityProfile(params as any).promise();
  }

  describeStream: (params: RawParamsFrom<'describeStream'>) => Promise<ReturnTypeFrom<'describeStream'>>  = async params => {
  // undefined
    return this.client.describeStream(params as any).promise();
  }

  describeThing: (params: RawParamsFrom<'describeThing'>) => Promise<ReturnTypeFrom<'describeThing'>>  = async params => {
  // undefined
    return this.client.describeThing(params as any).promise();
  }

  describeThingGroup: (params: RawParamsFrom<'describeThingGroup'>) => Promise<ReturnTypeFrom<'describeThingGroup'>>  = async params => {
  // undefined
    return this.client.describeThingGroup(params as any).promise();
  }

  describeThingRegistrationTask: (params: RawParamsFrom<'describeThingRegistrationTask'>) => Promise<ReturnTypeFrom<'describeThingRegistrationTask'>>  = async params => {
  // undefined
    return this.client.describeThingRegistrationTask(params as any).promise();
  }

  describeThingType: (params: RawParamsFrom<'describeThingType'>) => Promise<ReturnTypeFrom<'describeThingType'>>  = async params => {
  // undefined
    return this.client.describeThingType(params as any).promise();
  }

  detachPolicy: (params: RawParamsFrom<'detachPolicy'>) => Promise<ReturnTypeFrom<'detachPolicy'>>  = async params => {
  // undefined
    return this.client.detachPolicy(params as any).promise();
  }

  detachPrincipalPolicy: (params: RawParamsFrom<'detachPrincipalPolicy'>) => Promise<ReturnTypeFrom<'detachPrincipalPolicy'>>  = async params => {
  // undefined
    return this.client.detachPrincipalPolicy(params as any).promise();
  }

  detachSecurityProfile: (params: RawParamsFrom<'detachSecurityProfile'>) => Promise<ReturnTypeFrom<'detachSecurityProfile'>>  = async params => {
  // undefined
    return this.client.detachSecurityProfile(params as any).promise();
  }

  detachThingPrincipal: (params: RawParamsFrom<'detachThingPrincipal'>) => Promise<ReturnTypeFrom<'detachThingPrincipal'>>  = async params => {
  // undefined
    return this.client.detachThingPrincipal(params as any).promise();
  }

  disableTopicRule: (params: RawParamsFrom<'disableTopicRule'>) => Promise<ReturnTypeFrom<'disableTopicRule'>>  = async params => {
  // undefined
    return this.client.disableTopicRule(params as any).promise();
  }

  enableTopicRule: (params: RawParamsFrom<'enableTopicRule'>) => Promise<ReturnTypeFrom<'enableTopicRule'>>  = async params => {
  // undefined
    return this.client.enableTopicRule(params as any).promise();
  }

  async getBehaviorModelTrainingSummaries(params: { [K in keyof ParamsFrom<'getBehaviorModelTrainingSummaries', { next?: string, limit?: number }>]: ParamsFrom<'getBehaviorModelTrainingSummaries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getBehaviorModelTrainingSummaries'>]-?: ReturnTypeFrom<'getBehaviorModelTrainingSummaries'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getBehaviorModelTrainingSummaries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getBehaviorModelTrainingSummaries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getBucketsAggregation: (params: RawParamsFrom<'getBucketsAggregation'>) => Promise<ReturnTypeFrom<'getBucketsAggregation'>>  = async params => {
  // undefined
    return this.client.getBucketsAggregation(params as any).promise();
  }

  getCardinality: (params: RawParamsFrom<'getCardinality'>) => Promise<ReturnTypeFrom<'getCardinality'>>  = async params => {
  // undefined
    return this.client.getCardinality(params as any).promise();
  }

  getEffectivePolicies: (params: RawParamsFrom<'getEffectivePolicies'>) => Promise<ReturnTypeFrom<'getEffectivePolicies'>>  = async params => {
  // undefined
    return this.client.getEffectivePolicies(params as any).promise();
  }

  getIndexingConfiguration: (params: RawParamsFrom<'getIndexingConfiguration'>) => Promise<ReturnTypeFrom<'getIndexingConfiguration'>>  = async params => {
  // undefined
    return this.client.getIndexingConfiguration(params as any).promise();
  }

  getJobDocument: (params: RawParamsFrom<'getJobDocument'>) => Promise<ReturnTypeFrom<'getJobDocument'>>  = async params => {
  // undefined
    return this.client.getJobDocument(params as any).promise();
  }

  getLoggingOptions: (params: RawParamsFrom<'getLoggingOptions'>) => Promise<ReturnTypeFrom<'getLoggingOptions'>>  = async params => {
  // undefined
    return this.client.getLoggingOptions(params as any).promise();
  }

  getOTAUpdate: (params: RawParamsFrom<'getOTAUpdate'>) => Promise<ReturnTypeFrom<'getOTAUpdate'>>  = async params => {
  // undefined
    return this.client.getOTAUpdate(params as any).promise();
  }

  getPercentiles: (params: RawParamsFrom<'getPercentiles'>) => Promise<ReturnTypeFrom<'getPercentiles'>>  = async params => {
  // undefined
    return this.client.getPercentiles(params as any).promise();
  }

  getPolicy: (params: RawParamsFrom<'getPolicy'>) => Promise<ReturnTypeFrom<'getPolicy'>>  = async params => {
  // undefined
    return this.client.getPolicy(params as any).promise();
  }

  getPolicyVersion: (params: RawParamsFrom<'getPolicyVersion'>) => Promise<ReturnTypeFrom<'getPolicyVersion'>>  = async params => {
  // undefined
    return this.client.getPolicyVersion(params as any).promise();
  }

  getRegistrationCode: (params: RawParamsFrom<'getRegistrationCode'>) => Promise<ReturnTypeFrom<'getRegistrationCode'>>  = async params => {
  // undefined
    return this.client.getRegistrationCode(params as any).promise();
  }

  getStatistics: (params: RawParamsFrom<'getStatistics'>) => Promise<ReturnTypeFrom<'getStatistics'>>  = async params => {
  // undefined
    return this.client.getStatistics(params as any).promise();
  }

  getTopicRule: (params: RawParamsFrom<'getTopicRule'>) => Promise<ReturnTypeFrom<'getTopicRule'>>  = async params => {
  // undefined
    return this.client.getTopicRule(params as any).promise();
  }

  getTopicRuleDestination: (params: RawParamsFrom<'getTopicRuleDestination'>) => Promise<ReturnTypeFrom<'getTopicRuleDestination'>>  = async params => {
  // undefined
    return this.client.getTopicRuleDestination(params as any).promise();
  }

  getV2LoggingOptions: (params: RawParamsFrom<'getV2LoggingOptions'>) => Promise<ReturnTypeFrom<'getV2LoggingOptions'>>  = async params => {
  // undefined
    return this.client.getV2LoggingOptions(params as any).promise();
  }

  async listActiveViolations(params: { [K in keyof ParamsFrom<'listActiveViolations', { next?: string, limit?: number }>]: ParamsFrom<'listActiveViolations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listActiveViolations'>]-?: ReturnTypeFrom<'listActiveViolations'>[K]}['activeViolations'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"activeViolations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listActiveViolations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listActiveViolations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.activeViolations ?? []) ? (result.activeViolations ?? []) : [result.activeViolations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttachedPolicies(params: { [K in keyof ParamsFrom<'listAttachedPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listAttachedPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttachedPolicies'>]-?: ReturnTypeFrom<'listAttachedPolicies'>[K]}['policies'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"policies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listAttachedPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listAttachedPolicies' })).toString('base64') : undefined;
    const member = (Array.isArray(result.policies ?? []) ? (result.policies ?? []) : [result.policies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditFindings(params: { [K in keyof ParamsFrom<'listAuditFindings', { next?: string, limit?: number }>]: ParamsFrom<'listAuditFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAuditFindings'>]-?: ReturnTypeFrom<'listAuditFindings'>[K]}['findings'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditFindings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAuditFindings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.findings ?? []) ? (result.findings ?? []) : [result.findings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditMitigationActionsExecutions(params: { [K in keyof ParamsFrom<'listAuditMitigationActionsExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listAuditMitigationActionsExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAuditMitigationActionsExecutions'>]-?: ReturnTypeFrom<'listAuditMitigationActionsExecutions'>[K]}['actionsExecutions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"actionsExecutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditMitigationActionsExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAuditMitigationActionsExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.actionsExecutions ?? []) ? (result.actionsExecutions ?? []) : [result.actionsExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditMitigationActionsTasks(params: { [K in keyof ParamsFrom<'listAuditMitigationActionsTasks', { next?: string, limit?: number }>]: ParamsFrom<'listAuditMitigationActionsTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAuditMitigationActionsTasks'>]-?: ReturnTypeFrom<'listAuditMitigationActionsTasks'>[K]}['tasks'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditMitigationActionsTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAuditMitigationActionsTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tasks ?? []) ? (result.tasks ?? []) : [result.tasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditSuppressions(params: { [K in keyof ParamsFrom<'listAuditSuppressions', { next?: string, limit?: number }>]: ParamsFrom<'listAuditSuppressions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAuditSuppressions'>]-?: ReturnTypeFrom<'listAuditSuppressions'>[K]}['suppressions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"suppressions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditSuppressions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAuditSuppressions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.suppressions ?? []) ? (result.suppressions ?? []) : [result.suppressions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditTasks(params: { [K in keyof ParamsFrom<'listAuditTasks', { next?: string, limit?: number }>]: ParamsFrom<'listAuditTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAuditTasks'>]-?: ReturnTypeFrom<'listAuditTasks'>[K]}['tasks'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAuditTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tasks ?? []) ? (result.tasks ?? []) : [result.tasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuthorizers(params: { [K in keyof ParamsFrom<'listAuthorizers', { next?: string, limit?: number }>]: ParamsFrom<'listAuthorizers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAuthorizers'>]-?: ReturnTypeFrom<'listAuthorizers'>[K]}['authorizers'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"authorizers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listAuthorizers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listAuthorizers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.authorizers ?? []) ? (result.authorizers ?? []) : [result.authorizers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBillingGroups(params: { [K in keyof ParamsFrom<'listBillingGroups', { next?: string, limit?: number }>]: ParamsFrom<'listBillingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBillingGroups'>]-?: ReturnTypeFrom<'listBillingGroups'>[K]}['billingGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"billingGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBillingGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listBillingGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.billingGroups ?? []) ? (result.billingGroups ?? []) : [result.billingGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCACertificates(params: { [K in keyof ParamsFrom<'listCACertificates', { next?: string, limit?: number }>]: ParamsFrom<'listCACertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCACertificates'>]-?: ReturnTypeFrom<'listCACertificates'>[K]}['certificates'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"certificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listCACertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listCACertificates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.certificates ?? []) ? (result.certificates ?? []) : [result.certificates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCertificates(params: { [K in keyof ParamsFrom<'listCertificates', { next?: string, limit?: number }>]: ParamsFrom<'listCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['certificates'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"certificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listCertificates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.certificates ?? []) ? (result.certificates ?? []) : [result.certificates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCertificatesByCA(params: { [K in keyof ParamsFrom<'listCertificatesByCA', { next?: string, limit?: number }>]: ParamsFrom<'listCertificatesByCA', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCertificatesByCA'>]-?: ReturnTypeFrom<'listCertificatesByCA'>[K]}['certificates'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"certificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listCertificatesByCA({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listCertificatesByCA' })).toString('base64') : undefined;
    const member = (Array.isArray(result.certificates ?? []) ? (result.certificates ?? []) : [result.certificates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomMetrics(params: { [K in keyof ParamsFrom<'listCustomMetrics', { next?: string, limit?: number }>]: ParamsFrom<'listCustomMetrics', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomMetrics'>]-?: ReturnTypeFrom<'listCustomMetrics'>[K]}['metricNames'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"metricNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCustomMetrics({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCustomMetrics' })).toString('base64') : undefined;
    const member = (Array.isArray(result.metricNames ?? []) ? (result.metricNames ?? []) : [result.metricNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDetectMitigationActionsExecutions(params: { [K in keyof ParamsFrom<'listDetectMitigationActionsExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listDetectMitigationActionsExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDetectMitigationActionsExecutions'>]-?: ReturnTypeFrom<'listDetectMitigationActionsExecutions'>[K]}['actionsExecutions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"actionsExecutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDetectMitigationActionsExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDetectMitigationActionsExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.actionsExecutions ?? []) ? (result.actionsExecutions ?? []) : [result.actionsExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDetectMitigationActionsTasks(params: { [K in keyof ParamsFrom<'listDetectMitigationActionsTasks', { next?: string, limit?: number }>]: ParamsFrom<'listDetectMitigationActionsTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDetectMitigationActionsTasks'>]-?: ReturnTypeFrom<'listDetectMitigationActionsTasks'>[K]}['tasks'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDetectMitigationActionsTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDetectMitigationActionsTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tasks ?? []) ? (result.tasks ?? []) : [result.tasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDimensions(params: { [K in keyof ParamsFrom<'listDimensions', { next?: string, limit?: number }>]: ParamsFrom<'listDimensions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDimensions'>]-?: ReturnTypeFrom<'listDimensions'>[K]}['dimensionNames'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dimensionNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDimensions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDimensions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.dimensionNames ?? []) ? (result.dimensionNames ?? []) : [result.dimensionNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDomainConfigurations(params: { [K in keyof ParamsFrom<'listDomainConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'listDomainConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDomainConfigurations'>]-?: ReturnTypeFrom<'listDomainConfigurations'>[K]}['domainConfigurations'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"domainConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listDomainConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listDomainConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.domainConfigurations ?? []) ? (result.domainConfigurations ?? []) : [result.domainConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleetMetrics(params: { [K in keyof ParamsFrom<'listFleetMetrics', { next?: string, limit?: number }>]: ParamsFrom<'listFleetMetrics', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFleetMetrics'>]-?: ReturnTypeFrom<'listFleetMetrics'>[K]}['fleetMetrics'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fleetMetrics"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFleetMetrics({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFleetMetrics' })).toString('base64') : undefined;
    const member = (Array.isArray(result.fleetMetrics ?? []) ? (result.fleetMetrics ?? []) : [result.fleetMetrics]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIndices(params: { [K in keyof ParamsFrom<'listIndices', { next?: string, limit?: number }>]: ParamsFrom<'listIndices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIndices'>]-?: ReturnTypeFrom<'listIndices'>[K]}['indexNames'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"indexNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listIndices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listIndices' })).toString('base64') : undefined;
    const member = (Array.isArray(result.indexNames ?? []) ? (result.indexNames ?? []) : [result.indexNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobExecutionsForJob(params: { [K in keyof ParamsFrom<'listJobExecutionsForJob', { next?: string, limit?: number }>]: ParamsFrom<'listJobExecutionsForJob', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobExecutionsForJob'>]-?: ReturnTypeFrom<'listJobExecutionsForJob'>[K]}['executionSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"executionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobExecutionsForJob({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listJobExecutionsForJob' })).toString('base64') : undefined;
    const member = (Array.isArray(result.executionSummaries ?? []) ? (result.executionSummaries ?? []) : [result.executionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobExecutionsForThing(params: { [K in keyof ParamsFrom<'listJobExecutionsForThing', { next?: string, limit?: number }>]: ParamsFrom<'listJobExecutionsForThing', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobExecutionsForThing'>]-?: ReturnTypeFrom<'listJobExecutionsForThing'>[K]}['executionSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"executionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobExecutionsForThing({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listJobExecutionsForThing' })).toString('base64') : undefined;
    const member = (Array.isArray(result.executionSummaries ?? []) ? (result.executionSummaries ?? []) : [result.executionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobTemplates(params: { [K in keyof ParamsFrom<'listJobTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listJobTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobTemplates'>]-?: ReturnTypeFrom<'listJobTemplates'>[K]}['jobTemplates'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobTemplates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listJobTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.jobTemplates ?? []) ? (result.jobTemplates ?? []) : [result.jobTemplates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string, limit?: number }>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['jobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.jobs ?? []) ? (result.jobs ?? []) : [result.jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listManagedJobTemplates: (params: RawParamsFrom<'listManagedJobTemplates'>) => Promise<ReturnTypeFrom<'listManagedJobTemplates'>>  = async params => {
  // undefined
    return this.client.listManagedJobTemplates(params as any).promise();
  }

  async listMetricValues(params: { [K in keyof ParamsFrom<'listMetricValues', { next?: string, limit?: number }>]: ParamsFrom<'listMetricValues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMetricValues'>]-?: ReturnTypeFrom<'listMetricValues'>[K]}['metricDatumList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"metricDatumList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMetricValues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listMetricValues' })).toString('base64') : undefined;
    const member = (Array.isArray(result.metricDatumList ?? []) ? (result.metricDatumList ?? []) : [result.metricDatumList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMitigationActions(params: { [K in keyof ParamsFrom<'listMitigationActions', { next?: string, limit?: number }>]: ParamsFrom<'listMitigationActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMitigationActions'>]-?: ReturnTypeFrom<'listMitigationActions'>[K]}['actionIdentifiers'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"actionIdentifiers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMitigationActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listMitigationActions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.actionIdentifiers ?? []) ? (result.actionIdentifiers ?? []) : [result.actionIdentifiers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOTAUpdates(params: { [K in keyof ParamsFrom<'listOTAUpdates', { next?: string, limit?: number }>]: ParamsFrom<'listOTAUpdates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOTAUpdates'>]-?: ReturnTypeFrom<'listOTAUpdates'>[K]}['otaUpdates'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"otaUpdates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listOTAUpdates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listOTAUpdates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.otaUpdates ?? []) ? (result.otaUpdates ?? []) : [result.otaUpdates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOutgoingCertificates(params: { [K in keyof ParamsFrom<'listOutgoingCertificates', { next?: string, limit?: number }>]: ParamsFrom<'listOutgoingCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOutgoingCertificates'>]-?: ReturnTypeFrom<'listOutgoingCertificates'>[K]}['outgoingCertificates'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"outgoingCertificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listOutgoingCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listOutgoingCertificates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.outgoingCertificates ?? []) ? (result.outgoingCertificates ?? []) : [result.outgoingCertificates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPolicies(params: { [K in keyof ParamsFrom<'listPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['policies'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"policies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listPolicies' })).toString('base64') : undefined;
    const member = (Array.isArray(result.policies ?? []) ? (result.policies ?? []) : [result.policies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPolicyPrincipals(params: { [K in keyof ParamsFrom<'listPolicyPrincipals', { next?: string, limit?: number }>]: ParamsFrom<'listPolicyPrincipals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPolicyPrincipals'>]-?: ReturnTypeFrom<'listPolicyPrincipals'>[K]}['principals'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"principals"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listPolicyPrincipals({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listPolicyPrincipals' })).toString('base64') : undefined;
    const member = (Array.isArray(result.principals ?? []) ? (result.principals ?? []) : [result.principals]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listPolicyVersions: (params: RawParamsFrom<'listPolicyVersions'>) => Promise<ReturnTypeFrom<'listPolicyVersions'>>  = async params => {
  // undefined
    return this.client.listPolicyVersions(params as any).promise();
  }

  async listPrincipalPolicies(params: { [K in keyof ParamsFrom<'listPrincipalPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listPrincipalPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPrincipalPolicies'>]-?: ReturnTypeFrom<'listPrincipalPolicies'>[K]}['policies'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"policies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listPrincipalPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listPrincipalPolicies' })).toString('base64') : undefined;
    const member = (Array.isArray(result.policies ?? []) ? (result.policies ?? []) : [result.policies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPrincipalThings(params: { [K in keyof ParamsFrom<'listPrincipalThings', { next?: string, limit?: number }>]: ParamsFrom<'listPrincipalThings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPrincipalThings'>]-?: ReturnTypeFrom<'listPrincipalThings'>[K]}['things'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPrincipalThings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPrincipalThings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.things ?? []) ? (result.things ?? []) : [result.things]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProvisioningTemplateVersions(params: { [K in keyof ParamsFrom<'listProvisioningTemplateVersions', { next?: string, limit?: number }>]: ParamsFrom<'listProvisioningTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProvisioningTemplateVersions'>]-?: ReturnTypeFrom<'listProvisioningTemplateVersions'>[K]}['versions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"versions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProvisioningTemplateVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProvisioningTemplateVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.versions ?? []) ? (result.versions ?? []) : [result.versions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProvisioningTemplates(params: { [K in keyof ParamsFrom<'listProvisioningTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listProvisioningTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProvisioningTemplates'>]-?: ReturnTypeFrom<'listProvisioningTemplates'>[K]}['templates'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProvisioningTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProvisioningTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.templates ?? []) ? (result.templates ?? []) : [result.templates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoleAliases(params: { [K in keyof ParamsFrom<'listRoleAliases', { next?: string, limit?: number }>]: ParamsFrom<'listRoleAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRoleAliases'>]-?: ReturnTypeFrom<'listRoleAliases'>[K]}['roleAliases'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"roleAliases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listRoleAliases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listRoleAliases' })).toString('base64') : undefined;
    const member = (Array.isArray(result.roleAliases ?? []) ? (result.roleAliases ?? []) : [result.roleAliases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listScheduledAudits(params: { [K in keyof ParamsFrom<'listScheduledAudits', { next?: string, limit?: number }>]: ParamsFrom<'listScheduledAudits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listScheduledAudits'>]-?: ReturnTypeFrom<'listScheduledAudits'>[K]}['scheduledAudits'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"scheduledAudits"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listScheduledAudits({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listScheduledAudits' })).toString('base64') : undefined;
    const member = (Array.isArray(result.scheduledAudits ?? []) ? (result.scheduledAudits ?? []) : [result.scheduledAudits]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityProfiles(params: { [K in keyof ParamsFrom<'listSecurityProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listSecurityProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSecurityProfiles'>]-?: ReturnTypeFrom<'listSecurityProfiles'>[K]}['securityProfileIdentifiers'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"securityProfileIdentifiers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSecurityProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSecurityProfiles' })).toString('base64') : undefined;
    const member = (Array.isArray(result.securityProfileIdentifiers ?? []) ? (result.securityProfileIdentifiers ?? []) : [result.securityProfileIdentifiers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityProfilesForTarget(params: { [K in keyof ParamsFrom<'listSecurityProfilesForTarget', { next?: string, limit?: number }>]: ParamsFrom<'listSecurityProfilesForTarget', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSecurityProfilesForTarget'>]-?: ReturnTypeFrom<'listSecurityProfilesForTarget'>[K]}['securityProfileTargetMappings'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"securityProfileTargetMappings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSecurityProfilesForTarget({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSecurityProfilesForTarget' })).toString('base64') : undefined;
    const member = (Array.isArray(result.securityProfileTargetMappings ?? []) ? (result.securityProfileTargetMappings ?? []) : [result.securityProfileTargetMappings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStreams(params: { [K in keyof ParamsFrom<'listStreams', { next?: string, limit?: number }>]: ParamsFrom<'listStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['streams'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"streams"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStreams({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listStreams' })).toString('base64') : undefined;
    const member = (Array.isArray(result.streams ?? []) ? (result.streams ?? []) : [result.streams]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string }>]: ParamsFrom<'listTagsForResource', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"tags"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tags ?? []) ? (result.tags ?? []) : [result.tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTargetsForPolicy(params: { [K in keyof ParamsFrom<'listTargetsForPolicy', { next?: string, limit?: number }>]: ParamsFrom<'listTargetsForPolicy', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTargetsForPolicy'>]-?: ReturnTypeFrom<'listTargetsForPolicy'>[K]}['targets'], undefined>}> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"targets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listTargetsForPolicy({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextMarker ? Buffer.from(JSON.stringify({ token: result.nextMarker, operation: 'listTargetsForPolicy' })).toString('base64') : undefined;
    const member = (Array.isArray(result.targets ?? []) ? (result.targets ?? []) : [result.targets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTargetsForSecurityProfile(params: { [K in keyof ParamsFrom<'listTargetsForSecurityProfile', { next?: string, limit?: number }>]: ParamsFrom<'listTargetsForSecurityProfile', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTargetsForSecurityProfile'>]-?: ReturnTypeFrom<'listTargetsForSecurityProfile'>[K]}['securityProfileTargets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"securityProfileTargets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTargetsForSecurityProfile({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTargetsForSecurityProfile' })).toString('base64') : undefined;
    const member = (Array.isArray(result.securityProfileTargets ?? []) ? (result.securityProfileTargets ?? []) : [result.securityProfileTargets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingGroups(params: { [K in keyof ParamsFrom<'listThingGroups', { next?: string, limit?: number }>]: ParamsFrom<'listThingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThingGroups'>]-?: ReturnTypeFrom<'listThingGroups'>[K]}['thingGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"thingGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThingGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.thingGroups ?? []) ? (result.thingGroups ?? []) : [result.thingGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingGroupsForThing(params: { [K in keyof ParamsFrom<'listThingGroupsForThing', { next?: string, limit?: number }>]: ParamsFrom<'listThingGroupsForThing', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThingGroupsForThing'>]-?: ReturnTypeFrom<'listThingGroupsForThing'>[K]}['thingGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"thingGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingGroupsForThing({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThingGroupsForThing' })).toString('base64') : undefined;
    const member = (Array.isArray(result.thingGroups ?? []) ? (result.thingGroups ?? []) : [result.thingGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingPrincipals(params: { [K in keyof ParamsFrom<'listThingPrincipals', { next?: string, limit?: number }>]: ParamsFrom<'listThingPrincipals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThingPrincipals'>]-?: ReturnTypeFrom<'listThingPrincipals'>[K]}['principals'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"principals"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingPrincipals({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThingPrincipals' })).toString('base64') : undefined;
    const member = (Array.isArray(result.principals ?? []) ? (result.principals ?? []) : [result.principals]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingRegistrationTaskReports(params: { [K in keyof ParamsFrom<'listThingRegistrationTaskReports', { next?: string, limit?: number }>]: ParamsFrom<'listThingRegistrationTaskReports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThingRegistrationTaskReports'>]-?: ReturnTypeFrom<'listThingRegistrationTaskReports'>[K]}['resourceLinks'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"resourceLinks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingRegistrationTaskReports({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThingRegistrationTaskReports' })).toString('base64') : undefined;
    const member = (Array.isArray(result.resourceLinks ?? []) ? (result.resourceLinks ?? []) : [result.resourceLinks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingRegistrationTasks(params: { [K in keyof ParamsFrom<'listThingRegistrationTasks', { next?: string, limit?: number }>]: ParamsFrom<'listThingRegistrationTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThingRegistrationTasks'>]-?: ReturnTypeFrom<'listThingRegistrationTasks'>[K]}['taskIds'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"taskIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingRegistrationTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThingRegistrationTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.taskIds ?? []) ? (result.taskIds ?? []) : [result.taskIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingTypes(params: { [K in keyof ParamsFrom<'listThingTypes', { next?: string, limit?: number }>]: ParamsFrom<'listThingTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThingTypes'>]-?: ReturnTypeFrom<'listThingTypes'>[K]}['thingTypes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"thingTypes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThingTypes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.thingTypes ?? []) ? (result.thingTypes ?? []) : [result.thingTypes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThings(params: { [K in keyof ParamsFrom<'listThings', { next?: string, limit?: number }>]: ParamsFrom<'listThings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThings'>]-?: ReturnTypeFrom<'listThings'>[K]}['things'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.things ?? []) ? (result.things ?? []) : [result.things]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingsInBillingGroup(params: { [K in keyof ParamsFrom<'listThingsInBillingGroup', { next?: string, limit?: number }>]: ParamsFrom<'listThingsInBillingGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThingsInBillingGroup'>]-?: ReturnTypeFrom<'listThingsInBillingGroup'>[K]}['things'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingsInBillingGroup({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThingsInBillingGroup' })).toString('base64') : undefined;
    const member = (Array.isArray(result.things ?? []) ? (result.things ?? []) : [result.things]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingsInThingGroup(params: { [K in keyof ParamsFrom<'listThingsInThingGroup', { next?: string, limit?: number }>]: ParamsFrom<'listThingsInThingGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThingsInThingGroup'>]-?: ReturnTypeFrom<'listThingsInThingGroup'>[K]}['things'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingsInThingGroup({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThingsInThingGroup' })).toString('base64') : undefined;
    const member = (Array.isArray(result.things ?? []) ? (result.things ?? []) : [result.things]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTopicRuleDestinations(params: { [K in keyof ParamsFrom<'listTopicRuleDestinations', { next?: string, limit?: number }>]: ParamsFrom<'listTopicRuleDestinations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTopicRuleDestinations'>]-?: ReturnTypeFrom<'listTopicRuleDestinations'>[K]}['destinationSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"destinationSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTopicRuleDestinations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTopicRuleDestinations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.destinationSummaries ?? []) ? (result.destinationSummaries ?? []) : [result.destinationSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTopicRules(params: { [K in keyof ParamsFrom<'listTopicRules', { next?: string, limit?: number }>]: ParamsFrom<'listTopicRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTopicRules'>]-?: ReturnTypeFrom<'listTopicRules'>[K]}['rules'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"rules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTopicRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTopicRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.rules ?? []) ? (result.rules ?? []) : [result.rules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listV2LoggingLevels(params: { [K in keyof ParamsFrom<'listV2LoggingLevels', { next?: string, limit?: number }>]: ParamsFrom<'listV2LoggingLevels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listV2LoggingLevels'>]-?: ReturnTypeFrom<'listV2LoggingLevels'>[K]}['logTargetConfigurations'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"logTargetConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listV2LoggingLevels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listV2LoggingLevels' })).toString('base64') : undefined;
    const member = (Array.isArray(result.logTargetConfigurations ?? []) ? (result.logTargetConfigurations ?? []) : [result.logTargetConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listViolationEvents(params: { [K in keyof ParamsFrom<'listViolationEvents', { next?: string, limit?: number }>]: ParamsFrom<'listViolationEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listViolationEvents'>]-?: ReturnTypeFrom<'listViolationEvents'>[K]}['violationEvents'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"violationEvents"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listViolationEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listViolationEvents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.violationEvents ?? []) ? (result.violationEvents ?? []) : [result.violationEvents]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putVerificationStateOnViolation: (params: RawParamsFrom<'putVerificationStateOnViolation'>) => Promise<ReturnTypeFrom<'putVerificationStateOnViolation'>>  = async params => {
  // undefined
    return this.client.putVerificationStateOnViolation(params as any).promise();
  }

  registerCACertificate: (params: RawParamsFrom<'registerCACertificate'>) => Promise<ReturnTypeFrom<'registerCACertificate'>>  = async params => {
  // undefined
    return this.client.registerCACertificate(params as any).promise();
  }

  registerCertificate: (params: RawParamsFrom<'registerCertificate'>) => Promise<ReturnTypeFrom<'registerCertificate'>>  = async params => {
  // undefined
    return this.client.registerCertificate(params as any).promise();
  }

  registerCertificateWithoutCA: (params: RawParamsFrom<'registerCertificateWithoutCA'>) => Promise<ReturnTypeFrom<'registerCertificateWithoutCA'>>  = async params => {
  // undefined
    return this.client.registerCertificateWithoutCA(params as any).promise();
  }

  registerThing: (params: RawParamsFrom<'registerThing'>) => Promise<ReturnTypeFrom<'registerThing'>>  = async params => {
  // undefined
    return this.client.registerThing(params as any).promise();
  }

  rejectCertificateTransfer: (params: RawParamsFrom<'rejectCertificateTransfer'>) => Promise<ReturnTypeFrom<'rejectCertificateTransfer'>>  = async params => {
  // undefined
    return this.client.rejectCertificateTransfer(params as any).promise();
  }

  removeThingFromBillingGroup: (params: RawParamsFrom<'removeThingFromBillingGroup'>) => Promise<ReturnTypeFrom<'removeThingFromBillingGroup'>>  = async params => {
  // undefined
    return this.client.removeThingFromBillingGroup(params as any).promise();
  }

  removeThingFromThingGroup: (params: RawParamsFrom<'removeThingFromThingGroup'>) => Promise<ReturnTypeFrom<'removeThingFromThingGroup'>>  = async params => {
  // undefined
    return this.client.removeThingFromThingGroup(params as any).promise();
  }

  replaceTopicRule: (params: RawParamsFrom<'replaceTopicRule'>) => Promise<ReturnTypeFrom<'replaceTopicRule'>>  = async params => {
  // undefined
    return this.client.replaceTopicRule(params as any).promise();
  }

  searchIndex: (params: RawParamsFrom<'searchIndex'>) => Promise<ReturnTypeFrom<'searchIndex'>>  = async params => {
  // undefined
    return this.client.searchIndex(params as any).promise();
  }

  setDefaultAuthorizer: (params: RawParamsFrom<'setDefaultAuthorizer'>) => Promise<ReturnTypeFrom<'setDefaultAuthorizer'>>  = async params => {
  // undefined
    return this.client.setDefaultAuthorizer(params as any).promise();
  }

  setDefaultPolicyVersion: (params: RawParamsFrom<'setDefaultPolicyVersion'>) => Promise<ReturnTypeFrom<'setDefaultPolicyVersion'>>  = async params => {
  // undefined
    return this.client.setDefaultPolicyVersion(params as any).promise();
  }

  setLoggingOptions: (params: RawParamsFrom<'setLoggingOptions'>) => Promise<ReturnTypeFrom<'setLoggingOptions'>>  = async params => {
  // undefined
    return this.client.setLoggingOptions(params as any).promise();
  }

  setV2LoggingLevel: (params: RawParamsFrom<'setV2LoggingLevel'>) => Promise<ReturnTypeFrom<'setV2LoggingLevel'>>  = async params => {
  // undefined
    return this.client.setV2LoggingLevel(params as any).promise();
  }

  setV2LoggingOptions: (params: RawParamsFrom<'setV2LoggingOptions'>) => Promise<ReturnTypeFrom<'setV2LoggingOptions'>>  = async params => {
  // undefined
    return this.client.setV2LoggingOptions(params as any).promise();
  }

  startAuditMitigationActionsTask: (params: RawParamsFrom<'startAuditMitigationActionsTask'>) => Promise<ReturnTypeFrom<'startAuditMitigationActionsTask'>>  = async params => {
  // undefined
    return this.client.startAuditMitigationActionsTask(params as any).promise();
  }

  startDetectMitigationActionsTask: (params: RawParamsFrom<'startDetectMitigationActionsTask'>) => Promise<ReturnTypeFrom<'startDetectMitigationActionsTask'>>  = async params => {
  // undefined
    return this.client.startDetectMitigationActionsTask(params as any).promise();
  }

  startOnDemandAuditTask: (params: RawParamsFrom<'startOnDemandAuditTask'>) => Promise<ReturnTypeFrom<'startOnDemandAuditTask'>>  = async params => {
  // undefined
    return this.client.startOnDemandAuditTask(params as any).promise();
  }

  startThingRegistrationTask: (params: RawParamsFrom<'startThingRegistrationTask'>) => Promise<ReturnTypeFrom<'startThingRegistrationTask'>>  = async params => {
  // undefined
    return this.client.startThingRegistrationTask(params as any).promise();
  }

  stopThingRegistrationTask: (params: RawParamsFrom<'stopThingRegistrationTask'>) => Promise<ReturnTypeFrom<'stopThingRegistrationTask'>>  = async params => {
  // undefined
    return this.client.stopThingRegistrationTask(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testAuthorization: (params: RawParamsFrom<'testAuthorization'>) => Promise<ReturnTypeFrom<'testAuthorization'>>  = async params => {
  // undefined
    return this.client.testAuthorization(params as any).promise();
  }

  testInvokeAuthorizer: (params: RawParamsFrom<'testInvokeAuthorizer'>) => Promise<ReturnTypeFrom<'testInvokeAuthorizer'>>  = async params => {
  // undefined
    return this.client.testInvokeAuthorizer(params as any).promise();
  }

  transferCertificate: (params: RawParamsFrom<'transferCertificate'>) => Promise<ReturnTypeFrom<'transferCertificate'>>  = async params => {
  // undefined
    return this.client.transferCertificate(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccountAuditConfiguration: (params: RawParamsFrom<'updateAccountAuditConfiguration'>) => Promise<ReturnTypeFrom<'updateAccountAuditConfiguration'>>  = async params => {
  // undefined
    return this.client.updateAccountAuditConfiguration(params as any).promise();
  }

  updateAuditSuppression: (params: RawParamsFrom<'updateAuditSuppression'>) => Promise<ReturnTypeFrom<'updateAuditSuppression'>>  = async params => {
  // undefined
    return this.client.updateAuditSuppression(params as any).promise();
  }

  updateAuthorizer: (params: RawParamsFrom<'updateAuthorizer'>) => Promise<ReturnTypeFrom<'updateAuthorizer'>>  = async params => {
  // undefined
    return this.client.updateAuthorizer(params as any).promise();
  }

  updateBillingGroup: (params: RawParamsFrom<'updateBillingGroup'>) => Promise<ReturnTypeFrom<'updateBillingGroup'>>  = async params => {
  // undefined
    return this.client.updateBillingGroup(params as any).promise();
  }

  updateCACertificate: (params: RawParamsFrom<'updateCACertificate'>) => Promise<ReturnTypeFrom<'updateCACertificate'>>  = async params => {
  // undefined
    return this.client.updateCACertificate(params as any).promise();
  }

  updateCertificate: (params: RawParamsFrom<'updateCertificate'>) => Promise<ReturnTypeFrom<'updateCertificate'>>  = async params => {
  // undefined
    return this.client.updateCertificate(params as any).promise();
  }

  updateCustomMetric: (params: RawParamsFrom<'updateCustomMetric'>) => Promise<ReturnTypeFrom<'updateCustomMetric'>>  = async params => {
  // undefined
    return this.client.updateCustomMetric(params as any).promise();
  }

  updateDimension: (params: RawParamsFrom<'updateDimension'>) => Promise<ReturnTypeFrom<'updateDimension'>>  = async params => {
  // undefined
    return this.client.updateDimension(params as any).promise();
  }

  updateDomainConfiguration: (params: RawParamsFrom<'updateDomainConfiguration'>) => Promise<ReturnTypeFrom<'updateDomainConfiguration'>>  = async params => {
  // undefined
    return this.client.updateDomainConfiguration(params as any).promise();
  }

  updateDynamicThingGroup: (params: RawParamsFrom<'updateDynamicThingGroup'>) => Promise<ReturnTypeFrom<'updateDynamicThingGroup'>>  = async params => {
  // undefined
    return this.client.updateDynamicThingGroup(params as any).promise();
  }

  updateEventConfigurations: (params: RawParamsFrom<'updateEventConfigurations'>) => Promise<ReturnTypeFrom<'updateEventConfigurations'>>  = async params => {
  // undefined
    return this.client.updateEventConfigurations(params as any).promise();
  }

  updateFleetMetric: (params: RawParamsFrom<'updateFleetMetric'>) => Promise<ReturnTypeFrom<'updateFleetMetric'>>  = async params => {
  // undefined
    return this.client.updateFleetMetric(params as any).promise();
  }

  updateIndexingConfiguration: (params: RawParamsFrom<'updateIndexingConfiguration'>) => Promise<ReturnTypeFrom<'updateIndexingConfiguration'>>  = async params => {
  // undefined
    return this.client.updateIndexingConfiguration(params as any).promise();
  }

  updateJob: (params: RawParamsFrom<'updateJob'>) => Promise<ReturnTypeFrom<'updateJob'>>  = async params => {
  // undefined
    return this.client.updateJob(params as any).promise();
  }

  updateMitigationAction: (params: RawParamsFrom<'updateMitigationAction'>) => Promise<ReturnTypeFrom<'updateMitigationAction'>>  = async params => {
  // undefined
    return this.client.updateMitigationAction(params as any).promise();
  }

  updateProvisioningTemplate: (params: RawParamsFrom<'updateProvisioningTemplate'>) => Promise<ReturnTypeFrom<'updateProvisioningTemplate'>>  = async params => {
  // undefined
    return this.client.updateProvisioningTemplate(params as any).promise();
  }

  updateRoleAlias: (params: RawParamsFrom<'updateRoleAlias'>) => Promise<ReturnTypeFrom<'updateRoleAlias'>>  = async params => {
  // undefined
    return this.client.updateRoleAlias(params as any).promise();
  }

  updateScheduledAudit: (params: RawParamsFrom<'updateScheduledAudit'>) => Promise<ReturnTypeFrom<'updateScheduledAudit'>>  = async params => {
  // undefined
    return this.client.updateScheduledAudit(params as any).promise();
  }

  updateSecurityProfile: (params: RawParamsFrom<'updateSecurityProfile'>) => Promise<ReturnTypeFrom<'updateSecurityProfile'>>  = async params => {
  // undefined
    return this.client.updateSecurityProfile(params as any).promise();
  }

  updateStream: (params: RawParamsFrom<'updateStream'>) => Promise<ReturnTypeFrom<'updateStream'>>  = async params => {
  // undefined
    return this.client.updateStream(params as any).promise();
  }

  updateThing: (params: RawParamsFrom<'updateThing'>) => Promise<ReturnTypeFrom<'updateThing'>>  = async params => {
  // undefined
    return this.client.updateThing(params as any).promise();
  }

  updateThingGroup: (params: RawParamsFrom<'updateThingGroup'>) => Promise<ReturnTypeFrom<'updateThingGroup'>>  = async params => {
  // undefined
    return this.client.updateThingGroup(params as any).promise();
  }

  updateThingGroupsForThing: (params: RawParamsFrom<'updateThingGroupsForThing'>) => Promise<ReturnTypeFrom<'updateThingGroupsForThing'>>  = async params => {
  // undefined
    return this.client.updateThingGroupsForThing(params as any).promise();
  }

  updateTopicRuleDestination: (params: RawParamsFrom<'updateTopicRuleDestination'>) => Promise<ReturnTypeFrom<'updateTopicRuleDestination'>>  = async params => {
  // undefined
    return this.client.updateTopicRuleDestination(params as any).promise();
  }

  validateSecurityProfileBehaviors: (params: RawParamsFrom<'validateSecurityProfileBehaviors'>) => Promise<ReturnTypeFrom<'validateSecurityProfileBehaviors'>>  = async params => {
  // undefined
    return this.client.validateSecurityProfileBehaviors(params as any).promise();
  }
  
  static fromClient(client: AWSIot): Iot {
    return new Iot(client) as any;
  }
  
  static client(options?: AWSIot.Types.ClientConfiguration): Iot {
    return new Iot(new AWSIot(options)) as any;
  }
}  
