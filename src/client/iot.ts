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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iot';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly ["getBehaviorModelTrainingSummaries","listActiveViolations","listAuditFindings","listAuditSuppressions","listAuthorizers","listBillingGroups","listCACertificates","listCertificates","listCustomMetrics","listDetectMitigationActionsExecutions","listDimensions","listDomainConfigurations","listFleetMetrics","listIndices","listJobTemplates","listJobs","listMitigationActions","listOTAUpdates","listOutgoingCertificates","listPolicies","listProvisioningTemplates","listRoleAliases","listScheduledAudits","listSecurityProfiles","listStreams","listThingGroups","listThingRegistrationTasks","listThingTypes","listThings","listTopicRuleDestinations","listTopicRules","listV2LoggingLevels"];
    
  acceptCertificateTransfer: FunctionTypeFrom<'acceptCertificateTransfer'>;

  addThingToBillingGroup: FunctionTypeFrom<'addThingToBillingGroup'>;

  addThingToThingGroup: FunctionTypeFrom<'addThingToThingGroup'>;

  associateTargetsWithJob: FunctionTypeFrom<'associateTargetsWithJob'>;

  attachPolicy: FunctionTypeFrom<'attachPolicy'>;

  attachPrincipalPolicy: FunctionTypeFrom<'attachPrincipalPolicy'>;

  attachSecurityProfile: FunctionTypeFrom<'attachSecurityProfile'>;

  attachThingPrincipal: FunctionTypeFrom<'attachThingPrincipal'>;

  cancelAuditMitigationActionsTask: FunctionTypeFrom<'cancelAuditMitigationActionsTask'>;

  cancelAuditTask: FunctionTypeFrom<'cancelAuditTask'>;

  cancelCertificateTransfer: FunctionTypeFrom<'cancelCertificateTransfer'>;

  cancelDetectMitigationActionsTask: FunctionTypeFrom<'cancelDetectMitigationActionsTask'>;

  cancelJob: FunctionTypeFrom<'cancelJob'>;

  cancelJobExecution: FunctionTypeFrom<'cancelJobExecution'>;

  clearDefaultAuthorizer: FunctionTypeFrom<'clearDefaultAuthorizer'>;

  confirmTopicRuleDestination: FunctionTypeFrom<'confirmTopicRuleDestination'>;

  createAuditSuppression: FunctionTypeFrom<'createAuditSuppression'>;

  createAuthorizer: FunctionTypeFrom<'createAuthorizer'>;

  createBillingGroup: FunctionTypeFrom<'createBillingGroup'>;

  createCertificateFromCsr: FunctionTypeFrom<'createCertificateFromCsr'>;

  createCustomMetric: FunctionTypeFrom<'createCustomMetric'>;

  createDimension: FunctionTypeFrom<'createDimension'>;

  createDomainConfiguration: FunctionTypeFrom<'createDomainConfiguration'>;

  createDynamicThingGroup: FunctionTypeFrom<'createDynamicThingGroup'>;

  createFleetMetric: FunctionTypeFrom<'createFleetMetric'>;

  createJob: FunctionTypeFrom<'createJob'>;

  createJobTemplate: FunctionTypeFrom<'createJobTemplate'>;

  createKeysAndCertificate: FunctionTypeFrom<'createKeysAndCertificate'>;

  createMitigationAction: FunctionTypeFrom<'createMitigationAction'>;

  createOTAUpdate: FunctionTypeFrom<'createOTAUpdate'>;

  createPolicy: FunctionTypeFrom<'createPolicy'>;

  createPolicyVersion: FunctionTypeFrom<'createPolicyVersion'>;

  createProvisioningClaim: FunctionTypeFrom<'createProvisioningClaim'>;

  createProvisioningTemplate: FunctionTypeFrom<'createProvisioningTemplate'>;

  createProvisioningTemplateVersion: FunctionTypeFrom<'createProvisioningTemplateVersion'>;

  createRoleAlias: FunctionTypeFrom<'createRoleAlias'>;

  createScheduledAudit: FunctionTypeFrom<'createScheduledAudit'>;

  createSecurityProfile: FunctionTypeFrom<'createSecurityProfile'>;

  createStream: FunctionTypeFrom<'createStream'>;

  createThing: FunctionTypeFrom<'createThing'>;

  createThingGroup: FunctionTypeFrom<'createThingGroup'>;

  createThingType: FunctionTypeFrom<'createThingType'>;

  createTopicRule: FunctionTypeFrom<'createTopicRule'>;

  createTopicRuleDestination: FunctionTypeFrom<'createTopicRuleDestination'>;

  deleteAccountAuditConfiguration: FunctionTypeFrom<'deleteAccountAuditConfiguration'>;

  deleteAuditSuppression: FunctionTypeFrom<'deleteAuditSuppression'>;

  deleteAuthorizer: FunctionTypeFrom<'deleteAuthorizer'>;

  deleteBillingGroup: FunctionTypeFrom<'deleteBillingGroup'>;

  deleteCACertificate: FunctionTypeFrom<'deleteCACertificate'>;

  deleteCertificate: FunctionTypeFrom<'deleteCertificate'>;

  deleteCustomMetric: FunctionTypeFrom<'deleteCustomMetric'>;

  deleteDimension: FunctionTypeFrom<'deleteDimension'>;

  deleteDomainConfiguration: FunctionTypeFrom<'deleteDomainConfiguration'>;

  deleteDynamicThingGroup: FunctionTypeFrom<'deleteDynamicThingGroup'>;

  deleteFleetMetric: FunctionTypeFrom<'deleteFleetMetric'>;

  deleteJob: FunctionTypeFrom<'deleteJob'>;

  deleteJobExecution: FunctionTypeFrom<'deleteJobExecution'>;

  deleteJobTemplate: FunctionTypeFrom<'deleteJobTemplate'>;

  deleteMitigationAction: FunctionTypeFrom<'deleteMitigationAction'>;

  deleteOTAUpdate: FunctionTypeFrom<'deleteOTAUpdate'>;

  deletePolicy: FunctionTypeFrom<'deletePolicy'>;

  deletePolicyVersion: FunctionTypeFrom<'deletePolicyVersion'>;

  deleteProvisioningTemplate: FunctionTypeFrom<'deleteProvisioningTemplate'>;

  deleteProvisioningTemplateVersion: FunctionTypeFrom<'deleteProvisioningTemplateVersion'>;

  deleteRegistrationCode: FunctionTypeFrom<'deleteRegistrationCode'>;

  deleteRoleAlias: FunctionTypeFrom<'deleteRoleAlias'>;

  deleteScheduledAudit: FunctionTypeFrom<'deleteScheduledAudit'>;

  deleteSecurityProfile: FunctionTypeFrom<'deleteSecurityProfile'>;

  deleteStream: FunctionTypeFrom<'deleteStream'>;

  deleteThing: FunctionTypeFrom<'deleteThing'>;

  deleteThingGroup: FunctionTypeFrom<'deleteThingGroup'>;

  deleteThingType: FunctionTypeFrom<'deleteThingType'>;

  deleteTopicRule: FunctionTypeFrom<'deleteTopicRule'>;

  deleteTopicRuleDestination: FunctionTypeFrom<'deleteTopicRuleDestination'>;

  deleteV2LoggingLevel: FunctionTypeFrom<'deleteV2LoggingLevel'>;

  deprecateThingType: FunctionTypeFrom<'deprecateThingType'>;

  describeAccountAuditConfiguration: FunctionTypeFrom<'describeAccountAuditConfiguration'>;

  describeAuditFinding: FunctionTypeFrom<'describeAuditFinding'>;

  describeAuditMitigationActionsTask: FunctionTypeFrom<'describeAuditMitigationActionsTask'>;

  describeAuditSuppression: FunctionTypeFrom<'describeAuditSuppression'>;

  describeAuditTask: FunctionTypeFrom<'describeAuditTask'>;

  describeAuthorizer: FunctionTypeFrom<'describeAuthorizer'>;

  describeBillingGroup: FunctionTypeFrom<'describeBillingGroup'>;

  describeCACertificate: FunctionTypeFrom<'describeCACertificate'>;

  describeCertificate: FunctionTypeFrom<'describeCertificate'>;

  describeCustomMetric: FunctionTypeFrom<'describeCustomMetric'>;

  describeDefaultAuthorizer: FunctionTypeFrom<'describeDefaultAuthorizer'>;

  describeDetectMitigationActionsTask: FunctionTypeFrom<'describeDetectMitigationActionsTask'>;

  describeDimension: FunctionTypeFrom<'describeDimension'>;

  describeDomainConfiguration: FunctionTypeFrom<'describeDomainConfiguration'>;

  describeEndpoint: FunctionTypeFrom<'describeEndpoint'>;

  describeEventConfigurations: FunctionTypeFrom<'describeEventConfigurations'>;

  describeFleetMetric: FunctionTypeFrom<'describeFleetMetric'>;

  describeIndex: FunctionTypeFrom<'describeIndex'>;

  describeJob: FunctionTypeFrom<'describeJob'>;

  describeJobExecution: FunctionTypeFrom<'describeJobExecution'>;

  describeJobTemplate: FunctionTypeFrom<'describeJobTemplate'>;

  describeManagedJobTemplate: FunctionTypeFrom<'describeManagedJobTemplate'>;

  describeMitigationAction: FunctionTypeFrom<'describeMitigationAction'>;

  describeProvisioningTemplate: FunctionTypeFrom<'describeProvisioningTemplate'>;

  describeProvisioningTemplateVersion: FunctionTypeFrom<'describeProvisioningTemplateVersion'>;

  describeRoleAlias: FunctionTypeFrom<'describeRoleAlias'>;

  describeScheduledAudit: FunctionTypeFrom<'describeScheduledAudit'>;

  describeSecurityProfile: FunctionTypeFrom<'describeSecurityProfile'>;

  describeStream: FunctionTypeFrom<'describeStream'>;

  describeThing: FunctionTypeFrom<'describeThing'>;

  describeThingGroup: FunctionTypeFrom<'describeThingGroup'>;

  describeThingRegistrationTask: FunctionTypeFrom<'describeThingRegistrationTask'>;

  describeThingType: FunctionTypeFrom<'describeThingType'>;

  detachPolicy: FunctionTypeFrom<'detachPolicy'>;

  detachPrincipalPolicy: FunctionTypeFrom<'detachPrincipalPolicy'>;

  detachSecurityProfile: FunctionTypeFrom<'detachSecurityProfile'>;

  detachThingPrincipal: FunctionTypeFrom<'detachThingPrincipal'>;

  disableTopicRule: FunctionTypeFrom<'disableTopicRule'>;

  enableTopicRule: FunctionTypeFrom<'enableTopicRule'>;

  getBehaviorModelTrainingSummaries(params: { [K in keyof Omit<ParamsFrom<'getBehaviorModelTrainingSummaries', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getBehaviorModelTrainingSummaries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getBehaviorModelTrainingSummaries'>]-?: ReturnTypeFrom<'getBehaviorModelTrainingSummaries'>[K]}['summaries'] }>
  getBehaviorModelTrainingSummaries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getBehaviorModelTrainingSummaries'>]-?: ReturnTypeFrom<'getBehaviorModelTrainingSummaries'>[K]}['summaries'] }>;

  getBucketsAggregation: FunctionTypeFrom<'getBucketsAggregation'>;

  getCardinality: FunctionTypeFrom<'getCardinality'>;

  getEffectivePolicies: FunctionTypeFrom<'getEffectivePolicies'>;

  getIndexingConfiguration: FunctionTypeFrom<'getIndexingConfiguration'>;

  getJobDocument: FunctionTypeFrom<'getJobDocument'>;

  getLoggingOptions: FunctionTypeFrom<'getLoggingOptions'>;

  getOTAUpdate: FunctionTypeFrom<'getOTAUpdate'>;

  getPercentiles: FunctionTypeFrom<'getPercentiles'>;

  getPolicy: FunctionTypeFrom<'getPolicy'>;

  getPolicyVersion: FunctionTypeFrom<'getPolicyVersion'>;

  getRegistrationCode: FunctionTypeFrom<'getRegistrationCode'>;

  getStatistics: FunctionTypeFrom<'getStatistics'>;

  getTopicRule: FunctionTypeFrom<'getTopicRule'>;

  getTopicRuleDestination: FunctionTypeFrom<'getTopicRuleDestination'>;

  getV2LoggingOptions: FunctionTypeFrom<'getV2LoggingOptions'>;

  listActiveViolations(params: { [K in keyof Omit<ParamsFrom<'listActiveViolations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listActiveViolations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActiveViolations'>]-?: ReturnTypeFrom<'listActiveViolations'>[K]}['activeViolations'] }>
  listActiveViolations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActiveViolations'>]-?: ReturnTypeFrom<'listActiveViolations'>[K]}['activeViolations'] }>;

  listAttachedPolicies(params: { [K in keyof Omit<ParamsFrom<'listAttachedPolicies', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listAttachedPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttachedPolicies'>]-?: ReturnTypeFrom<'listAttachedPolicies'>[K]}['policies'] }>
  ;

  listAuditFindings(params: { [K in keyof Omit<ParamsFrom<'listAuditFindings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAuditFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuditFindings'>]-?: ReturnTypeFrom<'listAuditFindings'>[K]}['findings'] }>
  listAuditFindings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuditFindings'>]-?: ReturnTypeFrom<'listAuditFindings'>[K]}['findings'] }>;

  listAuditMitigationActionsExecutions(params: { [K in keyof Omit<ParamsFrom<'listAuditMitigationActionsExecutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAuditMitigationActionsExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuditMitigationActionsExecutions'>]-?: ReturnTypeFrom<'listAuditMitigationActionsExecutions'>[K]}['actionsExecutions'] }>
  ;

  listAuditMitigationActionsTasks(params: { [K in keyof Omit<ParamsFrom<'listAuditMitigationActionsTasks', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAuditMitigationActionsTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuditMitigationActionsTasks'>]-?: ReturnTypeFrom<'listAuditMitigationActionsTasks'>[K]}['tasks'] }>
  ;

  listAuditSuppressions(params: { [K in keyof Omit<ParamsFrom<'listAuditSuppressions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAuditSuppressions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuditSuppressions'>]-?: ReturnTypeFrom<'listAuditSuppressions'>[K]}['suppressions'] }>
  listAuditSuppressions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuditSuppressions'>]-?: ReturnTypeFrom<'listAuditSuppressions'>[K]}['suppressions'] }>;

  listAuditTasks(params: { [K in keyof Omit<ParamsFrom<'listAuditTasks', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAuditTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuditTasks'>]-?: ReturnTypeFrom<'listAuditTasks'>[K]}['tasks'] }>
  ;

  listAuthorizers(params: { [K in keyof Omit<ParamsFrom<'listAuthorizers', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listAuthorizers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuthorizers'>]-?: ReturnTypeFrom<'listAuthorizers'>[K]}['authorizers'] }>
  listAuthorizers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAuthorizers'>]-?: ReturnTypeFrom<'listAuthorizers'>[K]}['authorizers'] }>;

  listBillingGroups(params: { [K in keyof Omit<ParamsFrom<'listBillingGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listBillingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBillingGroups'>]-?: ReturnTypeFrom<'listBillingGroups'>[K]}['billingGroups'] }>
  listBillingGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBillingGroups'>]-?: ReturnTypeFrom<'listBillingGroups'>[K]}['billingGroups'] }>;

  listCACertificates(params: { [K in keyof Omit<ParamsFrom<'listCACertificates', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listCACertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCACertificates'>]-?: ReturnTypeFrom<'listCACertificates'>[K]}['certificates'] }>
  listCACertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCACertificates'>]-?: ReturnTypeFrom<'listCACertificates'>[K]}['certificates'] }>;

  listCertificates(params: { [K in keyof Omit<ParamsFrom<'listCertificates', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['certificates'] }>
  listCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['certificates'] }>;

  listCertificatesByCA(params: { [K in keyof Omit<ParamsFrom<'listCertificatesByCA', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listCertificatesByCA', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCertificatesByCA'>]-?: ReturnTypeFrom<'listCertificatesByCA'>[K]}['certificates'] }>
  ;

  listCustomMetrics(params: { [K in keyof Omit<ParamsFrom<'listCustomMetrics', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCustomMetrics', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomMetrics'>]-?: ReturnTypeFrom<'listCustomMetrics'>[K]}['metricNames'] }>
  listCustomMetrics(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomMetrics'>]-?: ReturnTypeFrom<'listCustomMetrics'>[K]}['metricNames'] }>;

  listDetectMitigationActionsExecutions(params: { [K in keyof Omit<ParamsFrom<'listDetectMitigationActionsExecutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDetectMitigationActionsExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDetectMitigationActionsExecutions'>]-?: ReturnTypeFrom<'listDetectMitigationActionsExecutions'>[K]}['actionsExecutions'] }>
  listDetectMitigationActionsExecutions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDetectMitigationActionsExecutions'>]-?: ReturnTypeFrom<'listDetectMitigationActionsExecutions'>[K]}['actionsExecutions'] }>;

  listDetectMitigationActionsTasks(params: { [K in keyof Omit<ParamsFrom<'listDetectMitigationActionsTasks', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDetectMitigationActionsTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDetectMitigationActionsTasks'>]-?: ReturnTypeFrom<'listDetectMitigationActionsTasks'>[K]}['tasks'] }>
  ;

  listDimensions(params: { [K in keyof Omit<ParamsFrom<'listDimensions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDimensions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDimensions'>]-?: ReturnTypeFrom<'listDimensions'>[K]}['dimensionNames'] }>
  listDimensions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDimensions'>]-?: ReturnTypeFrom<'listDimensions'>[K]}['dimensionNames'] }>;

  listDomainConfigurations(params: { [K in keyof Omit<ParamsFrom<'listDomainConfigurations', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listDomainConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomainConfigurations'>]-?: ReturnTypeFrom<'listDomainConfigurations'>[K]}['domainConfigurations'] }>
  listDomainConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomainConfigurations'>]-?: ReturnTypeFrom<'listDomainConfigurations'>[K]}['domainConfigurations'] }>;

  listFleetMetrics(params: { [K in keyof Omit<ParamsFrom<'listFleetMetrics', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFleetMetrics', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleetMetrics'>]-?: ReturnTypeFrom<'listFleetMetrics'>[K]}['fleetMetrics'] }>
  listFleetMetrics(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleetMetrics'>]-?: ReturnTypeFrom<'listFleetMetrics'>[K]}['fleetMetrics'] }>;

  listIndices(params: { [K in keyof Omit<ParamsFrom<'listIndices', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listIndices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIndices'>]-?: ReturnTypeFrom<'listIndices'>[K]}['indexNames'] }>
  listIndices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIndices'>]-?: ReturnTypeFrom<'listIndices'>[K]}['indexNames'] }>;

  listJobExecutionsForJob(params: { [K in keyof Omit<ParamsFrom<'listJobExecutionsForJob', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listJobExecutionsForJob', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobExecutionsForJob'>]-?: ReturnTypeFrom<'listJobExecutionsForJob'>[K]}['executionSummaries'] }>
  ;

  listJobExecutionsForThing(params: { [K in keyof Omit<ParamsFrom<'listJobExecutionsForThing', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listJobExecutionsForThing', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobExecutionsForThing'>]-?: ReturnTypeFrom<'listJobExecutionsForThing'>[K]}['executionSummaries'] }>
  ;

  listJobTemplates(params: { [K in keyof Omit<ParamsFrom<'listJobTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listJobTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobTemplates'>]-?: ReturnTypeFrom<'listJobTemplates'>[K]}['jobTemplates'] }>
  listJobTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobTemplates'>]-?: ReturnTypeFrom<'listJobTemplates'>[K]}['jobTemplates'] }>;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['jobs'] }>
  listJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['jobs'] }>;

  listManagedJobTemplates: FunctionTypeFrom<'listManagedJobTemplates'>;

  listMetricValues(params: { [K in keyof Omit<ParamsFrom<'listMetricValues', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listMetricValues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMetricValues'>]-?: ReturnTypeFrom<'listMetricValues'>[K]}['metricDatumList'] }>
  ;

  listMitigationActions(params: { [K in keyof Omit<ParamsFrom<'listMitigationActions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listMitigationActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMitigationActions'>]-?: ReturnTypeFrom<'listMitigationActions'>[K]}['actionIdentifiers'] }>
  listMitigationActions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMitigationActions'>]-?: ReturnTypeFrom<'listMitigationActions'>[K]}['actionIdentifiers'] }>;

  listOTAUpdates(params: { [K in keyof Omit<ParamsFrom<'listOTAUpdates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listOTAUpdates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOTAUpdates'>]-?: ReturnTypeFrom<'listOTAUpdates'>[K]}['otaUpdates'] }>
  listOTAUpdates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOTAUpdates'>]-?: ReturnTypeFrom<'listOTAUpdates'>[K]}['otaUpdates'] }>;

  listOutgoingCertificates(params: { [K in keyof Omit<ParamsFrom<'listOutgoingCertificates', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listOutgoingCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOutgoingCertificates'>]-?: ReturnTypeFrom<'listOutgoingCertificates'>[K]}['outgoingCertificates'] }>
  listOutgoingCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOutgoingCertificates'>]-?: ReturnTypeFrom<'listOutgoingCertificates'>[K]}['outgoingCertificates'] }>;

  listPolicies(params: { [K in keyof Omit<ParamsFrom<'listPolicies', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['policies'] }>
  listPolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['policies'] }>;

  listPolicyPrincipals(params: { [K in keyof Omit<ParamsFrom<'listPolicyPrincipals', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listPolicyPrincipals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicyPrincipals'>]-?: ReturnTypeFrom<'listPolicyPrincipals'>[K]}['principals'] }>
  ;

  listPolicyVersions: FunctionTypeFrom<'listPolicyVersions'>;

  listPrincipalPolicies(params: { [K in keyof Omit<ParamsFrom<'listPrincipalPolicies', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listPrincipalPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPrincipalPolicies'>]-?: ReturnTypeFrom<'listPrincipalPolicies'>[K]}['policies'] }>
  ;

  listPrincipalThings(params: { [K in keyof Omit<ParamsFrom<'listPrincipalThings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPrincipalThings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPrincipalThings'>]-?: ReturnTypeFrom<'listPrincipalThings'>[K]}['things'] }>
  ;

  listProvisioningTemplateVersions(params: { [K in keyof Omit<ParamsFrom<'listProvisioningTemplateVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listProvisioningTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProvisioningTemplateVersions'>]-?: ReturnTypeFrom<'listProvisioningTemplateVersions'>[K]}['versions'] }>
  ;

  listProvisioningTemplates(params: { [K in keyof Omit<ParamsFrom<'listProvisioningTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listProvisioningTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProvisioningTemplates'>]-?: ReturnTypeFrom<'listProvisioningTemplates'>[K]}['templates'] }>
  listProvisioningTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProvisioningTemplates'>]-?: ReturnTypeFrom<'listProvisioningTemplates'>[K]}['templates'] }>;

  listRoleAliases(params: { [K in keyof Omit<ParamsFrom<'listRoleAliases', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listRoleAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoleAliases'>]-?: ReturnTypeFrom<'listRoleAliases'>[K]}['roleAliases'] }>
  listRoleAliases(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoleAliases'>]-?: ReturnTypeFrom<'listRoleAliases'>[K]}['roleAliases'] }>;

  listScheduledAudits(params: { [K in keyof Omit<ParamsFrom<'listScheduledAudits', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listScheduledAudits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listScheduledAudits'>]-?: ReturnTypeFrom<'listScheduledAudits'>[K]}['scheduledAudits'] }>
  listScheduledAudits(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listScheduledAudits'>]-?: ReturnTypeFrom<'listScheduledAudits'>[K]}['scheduledAudits'] }>;

  listSecurityProfiles(params: { [K in keyof Omit<ParamsFrom<'listSecurityProfiles', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSecurityProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityProfiles'>]-?: ReturnTypeFrom<'listSecurityProfiles'>[K]}['securityProfileIdentifiers'] }>
  listSecurityProfiles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityProfiles'>]-?: ReturnTypeFrom<'listSecurityProfiles'>[K]}['securityProfileIdentifiers'] }>;

  listSecurityProfilesForTarget(params: { [K in keyof Omit<ParamsFrom<'listSecurityProfilesForTarget', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSecurityProfilesForTarget', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityProfilesForTarget'>]-?: ReturnTypeFrom<'listSecurityProfilesForTarget'>[K]}['securityProfileTargetMappings'] }>
  ;

  listStreams(params: { [K in keyof Omit<ParamsFrom<'listStreams', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['streams'] }>
  listStreams(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['streams'] }>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string }>, 'nextToken'>]: ParamsFrom<'listTagsForResource', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'] }>
  ;

  listTargetsForPolicy(params: { [K in keyof Omit<ParamsFrom<'listTargetsForPolicy', { next?: string, limit?: number }>, 'marker' | 'pageSize'>]: ParamsFrom<'listTargetsForPolicy', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTargetsForPolicy'>]-?: ReturnTypeFrom<'listTargetsForPolicy'>[K]}['targets'] }>
  ;

  listTargetsForSecurityProfile(params: { [K in keyof Omit<ParamsFrom<'listTargetsForSecurityProfile', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTargetsForSecurityProfile', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTargetsForSecurityProfile'>]-?: ReturnTypeFrom<'listTargetsForSecurityProfile'>[K]}['securityProfileTargets'] }>
  ;

  listThingGroups(params: { [K in keyof Omit<ParamsFrom<'listThingGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingGroups'>]-?: ReturnTypeFrom<'listThingGroups'>[K]}['thingGroups'] }>
  listThingGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingGroups'>]-?: ReturnTypeFrom<'listThingGroups'>[K]}['thingGroups'] }>;

  listThingGroupsForThing(params: { [K in keyof Omit<ParamsFrom<'listThingGroupsForThing', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThingGroupsForThing', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingGroupsForThing'>]-?: ReturnTypeFrom<'listThingGroupsForThing'>[K]}['thingGroups'] }>
  ;

  listThingPrincipals(params: { [K in keyof Omit<ParamsFrom<'listThingPrincipals', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThingPrincipals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingPrincipals'>]-?: ReturnTypeFrom<'listThingPrincipals'>[K]}['principals'] }>
  ;

  listThingRegistrationTaskReports(params: { [K in keyof Omit<ParamsFrom<'listThingRegistrationTaskReports', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThingRegistrationTaskReports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingRegistrationTaskReports'>]-?: ReturnTypeFrom<'listThingRegistrationTaskReports'>[K]}['resourceLinks'] }>
  ;

  listThingRegistrationTasks(params: { [K in keyof Omit<ParamsFrom<'listThingRegistrationTasks', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThingRegistrationTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingRegistrationTasks'>]-?: ReturnTypeFrom<'listThingRegistrationTasks'>[K]}['taskIds'] }>
  listThingRegistrationTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingRegistrationTasks'>]-?: ReturnTypeFrom<'listThingRegistrationTasks'>[K]}['taskIds'] }>;

  listThingTypes(params: { [K in keyof Omit<ParamsFrom<'listThingTypes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThingTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingTypes'>]-?: ReturnTypeFrom<'listThingTypes'>[K]}['thingTypes'] }>
  listThingTypes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingTypes'>]-?: ReturnTypeFrom<'listThingTypes'>[K]}['thingTypes'] }>;

  listThings(params: { [K in keyof Omit<ParamsFrom<'listThings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThings'>]-?: ReturnTypeFrom<'listThings'>[K]}['things'] }>
  listThings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThings'>]-?: ReturnTypeFrom<'listThings'>[K]}['things'] }>;

  listThingsInBillingGroup(params: { [K in keyof Omit<ParamsFrom<'listThingsInBillingGroup', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThingsInBillingGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingsInBillingGroup'>]-?: ReturnTypeFrom<'listThingsInBillingGroup'>[K]}['things'] }>
  ;

  listThingsInThingGroup(params: { [K in keyof Omit<ParamsFrom<'listThingsInThingGroup', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThingsInThingGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThingsInThingGroup'>]-?: ReturnTypeFrom<'listThingsInThingGroup'>[K]}['things'] }>
  ;

  listTopicRuleDestinations(params: { [K in keyof Omit<ParamsFrom<'listTopicRuleDestinations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTopicRuleDestinations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTopicRuleDestinations'>]-?: ReturnTypeFrom<'listTopicRuleDestinations'>[K]}['destinationSummaries'] }>
  listTopicRuleDestinations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTopicRuleDestinations'>]-?: ReturnTypeFrom<'listTopicRuleDestinations'>[K]}['destinationSummaries'] }>;

  listTopicRules(params: { [K in keyof Omit<ParamsFrom<'listTopicRules', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTopicRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTopicRules'>]-?: ReturnTypeFrom<'listTopicRules'>[K]}['rules'] }>
  listTopicRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTopicRules'>]-?: ReturnTypeFrom<'listTopicRules'>[K]}['rules'] }>;

  listV2LoggingLevels(params: { [K in keyof Omit<ParamsFrom<'listV2LoggingLevels', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listV2LoggingLevels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listV2LoggingLevels'>]-?: ReturnTypeFrom<'listV2LoggingLevels'>[K]}['logTargetConfigurations'] }>
  listV2LoggingLevels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listV2LoggingLevels'>]-?: ReturnTypeFrom<'listV2LoggingLevels'>[K]}['logTargetConfigurations'] }>;

  listViolationEvents(params: { [K in keyof Omit<ParamsFrom<'listViolationEvents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listViolationEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listViolationEvents'>]-?: ReturnTypeFrom<'listViolationEvents'>[K]}['violationEvents'] }>
  ;

  putVerificationStateOnViolation: FunctionTypeFrom<'putVerificationStateOnViolation'>;

  registerCACertificate: FunctionTypeFrom<'registerCACertificate'>;

  registerCertificate: FunctionTypeFrom<'registerCertificate'>;

  registerCertificateWithoutCA: FunctionTypeFrom<'registerCertificateWithoutCA'>;

  registerThing: FunctionTypeFrom<'registerThing'>;

  rejectCertificateTransfer: FunctionTypeFrom<'rejectCertificateTransfer'>;

  removeThingFromBillingGroup: FunctionTypeFrom<'removeThingFromBillingGroup'>;

  removeThingFromThingGroup: FunctionTypeFrom<'removeThingFromThingGroup'>;

  replaceTopicRule: FunctionTypeFrom<'replaceTopicRule'>;

  searchIndex: FunctionTypeFrom<'searchIndex'>;

  setDefaultAuthorizer: FunctionTypeFrom<'setDefaultAuthorizer'>;

  setDefaultPolicyVersion: FunctionTypeFrom<'setDefaultPolicyVersion'>;

  setLoggingOptions: FunctionTypeFrom<'setLoggingOptions'>;

  setV2LoggingLevel: FunctionTypeFrom<'setV2LoggingLevel'>;

  setV2LoggingOptions: FunctionTypeFrom<'setV2LoggingOptions'>;

  startAuditMitigationActionsTask: FunctionTypeFrom<'startAuditMitigationActionsTask'>;

  startDetectMitigationActionsTask: FunctionTypeFrom<'startDetectMitigationActionsTask'>;

  startOnDemandAuditTask: FunctionTypeFrom<'startOnDemandAuditTask'>;

  startThingRegistrationTask: FunctionTypeFrom<'startThingRegistrationTask'>;

  stopThingRegistrationTask: FunctionTypeFrom<'stopThingRegistrationTask'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testAuthorization: FunctionTypeFrom<'testAuthorization'>;

  testInvokeAuthorizer: FunctionTypeFrom<'testInvokeAuthorizer'>;

  transferCertificate: FunctionTypeFrom<'transferCertificate'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccountAuditConfiguration: FunctionTypeFrom<'updateAccountAuditConfiguration'>;

  updateAuditSuppression: FunctionTypeFrom<'updateAuditSuppression'>;

  updateAuthorizer: FunctionTypeFrom<'updateAuthorizer'>;

  updateBillingGroup: FunctionTypeFrom<'updateBillingGroup'>;

  updateCACertificate: FunctionTypeFrom<'updateCACertificate'>;

  updateCertificate: FunctionTypeFrom<'updateCertificate'>;

  updateCustomMetric: FunctionTypeFrom<'updateCustomMetric'>;

  updateDimension: FunctionTypeFrom<'updateDimension'>;

  updateDomainConfiguration: FunctionTypeFrom<'updateDomainConfiguration'>;

  updateDynamicThingGroup: FunctionTypeFrom<'updateDynamicThingGroup'>;

  updateEventConfigurations: FunctionTypeFrom<'updateEventConfigurations'>;

  updateFleetMetric: FunctionTypeFrom<'updateFleetMetric'>;

  updateIndexingConfiguration: FunctionTypeFrom<'updateIndexingConfiguration'>;

  updateJob: FunctionTypeFrom<'updateJob'>;

  updateMitigationAction: FunctionTypeFrom<'updateMitigationAction'>;

  updateProvisioningTemplate: FunctionTypeFrom<'updateProvisioningTemplate'>;

  updateRoleAlias: FunctionTypeFrom<'updateRoleAlias'>;

  updateScheduledAudit: FunctionTypeFrom<'updateScheduledAudit'>;

  updateSecurityProfile: FunctionTypeFrom<'updateSecurityProfile'>;

  updateStream: FunctionTypeFrom<'updateStream'>;

  updateThing: FunctionTypeFrom<'updateThing'>;

  updateThingGroup: FunctionTypeFrom<'updateThingGroup'>;

  updateThingGroupsForThing: FunctionTypeFrom<'updateThingGroupsForThing'>;

  updateTopicRuleDestination: FunctionTypeFrom<'updateTopicRuleDestination'>;

  validateSecurityProfileBehaviors: FunctionTypeFrom<'validateSecurityProfileBehaviors'>
}
 
export class Iot implements ClientType {
  private constructor(private readonly client: AWSIot) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iot';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = ["getBehaviorModelTrainingSummaries","listActiveViolations","listAuditFindings","listAuditSuppressions","listAuthorizers","listBillingGroups","listCACertificates","listCertificates","listCustomMetrics","listDetectMitigationActionsExecutions","listDimensions","listDomainConfigurations","listFleetMetrics","listIndices","listJobTemplates","listJobs","listMitigationActions","listOTAUpdates","listOutgoingCertificates","listPolicies","listProvisioningTemplates","listRoleAliases","listScheduledAudits","listSecurityProfiles","listStreams","listThingGroups","listThingRegistrationTasks","listThingTypes","listThings","listTopicRuleDestinations","listTopicRules","listV2LoggingLevels"] as const;
  
  async acceptCertificateTransfer(...args: any): Promise<any> {
  // undefined
    return this.client.acceptCertificateTransfer(...args).promise()
  }

  async addThingToBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.addThingToBillingGroup(...args).promise()
  }

  async addThingToThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.addThingToThingGroup(...args).promise()
  }

  async associateTargetsWithJob(...args: any): Promise<any> {
  // undefined
    return this.client.associateTargetsWithJob(...args).promise()
  }

  async attachPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.attachPolicy(...args).promise()
  }

  async attachPrincipalPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.attachPrincipalPolicy(...args).promise()
  }

  async attachSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.attachSecurityProfile(...args).promise()
  }

  async attachThingPrincipal(...args: any): Promise<any> {
  // undefined
    return this.client.attachThingPrincipal(...args).promise()
  }

  async cancelAuditMitigationActionsTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelAuditMitigationActionsTask(...args).promise()
  }

  async cancelAuditTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelAuditTask(...args).promise()
  }

  async cancelCertificateTransfer(...args: any): Promise<any> {
  // undefined
    return this.client.cancelCertificateTransfer(...args).promise()
  }

  async cancelDetectMitigationActionsTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelDetectMitigationActionsTask(...args).promise()
  }

  async cancelJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJob(...args).promise()
  }

  async cancelJobExecution(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJobExecution(...args).promise()
  }

  async clearDefaultAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.clearDefaultAuthorizer(...args).promise()
  }

  async confirmTopicRuleDestination(...args: any): Promise<any> {
  // undefined
    return this.client.confirmTopicRuleDestination(...args).promise()
  }

  async createAuditSuppression(...args: any): Promise<any> {
  // undefined
    return this.client.createAuditSuppression(...args).promise()
  }

  async createAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.createAuthorizer(...args).promise()
  }

  async createBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createBillingGroup(...args).promise()
  }

  async createCertificateFromCsr(...args: any): Promise<any> {
  // undefined
    return this.client.createCertificateFromCsr(...args).promise()
  }

  async createCustomMetric(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomMetric(...args).promise()
  }

  async createDimension(...args: any): Promise<any> {
  // undefined
    return this.client.createDimension(...args).promise()
  }

  async createDomainConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createDomainConfiguration(...args).promise()
  }

  async createDynamicThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDynamicThingGroup(...args).promise()
  }

  async createFleetMetric(...args: any): Promise<any> {
  // undefined
    return this.client.createFleetMetric(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async createJobTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createJobTemplate(...args).promise()
  }

  async createKeysAndCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.createKeysAndCertificate(...args).promise()
  }

  async createMitigationAction(...args: any): Promise<any> {
  // undefined
    return this.client.createMitigationAction(...args).promise()
  }

  async createOTAUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.createOTAUpdate(...args).promise()
  }

  async createPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createPolicy(...args).promise()
  }

  async createPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createPolicyVersion(...args).promise()
  }

  async createProvisioningClaim(...args: any): Promise<any> {
  // undefined
    return this.client.createProvisioningClaim(...args).promise()
  }

  async createProvisioningTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createProvisioningTemplate(...args).promise()
  }

  async createProvisioningTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createProvisioningTemplateVersion(...args).promise()
  }

  async createRoleAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createRoleAlias(...args).promise()
  }

  async createScheduledAudit(...args: any): Promise<any> {
  // undefined
    return this.client.createScheduledAudit(...args).promise()
  }

  async createSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createSecurityProfile(...args).promise()
  }

  async createStream(...args: any): Promise<any> {
  // undefined
    return this.client.createStream(...args).promise()
  }

  async createThing(...args: any): Promise<any> {
  // undefined
    return this.client.createThing(...args).promise()
  }

  async createThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createThingGroup(...args).promise()
  }

  async createThingType(...args: any): Promise<any> {
  // undefined
    return this.client.createThingType(...args).promise()
  }

  async createTopicRule(...args: any): Promise<any> {
  // undefined
    return this.client.createTopicRule(...args).promise()
  }

  async createTopicRuleDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createTopicRuleDestination(...args).promise()
  }

  async deleteAccountAuditConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccountAuditConfiguration(...args).promise()
  }

  async deleteAuditSuppression(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAuditSuppression(...args).promise()
  }

  async deleteAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAuthorizer(...args).promise()
  }

  async deleteBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBillingGroup(...args).promise()
  }

  async deleteCACertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCACertificate(...args).promise()
  }

  async deleteCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCertificate(...args).promise()
  }

  async deleteCustomMetric(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomMetric(...args).promise()
  }

  async deleteDimension(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDimension(...args).promise()
  }

  async deleteDomainConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomainConfiguration(...args).promise()
  }

  async deleteDynamicThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDynamicThingGroup(...args).promise()
  }

  async deleteFleetMetric(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleetMetric(...args).promise()
  }

  async deleteJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJob(...args).promise()
  }

  async deleteJobExecution(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJobExecution(...args).promise()
  }

  async deleteJobTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJobTemplate(...args).promise()
  }

  async deleteMitigationAction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMitigationAction(...args).promise()
  }

  async deleteOTAUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOTAUpdate(...args).promise()
  }

  async deletePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicy(...args).promise()
  }

  async deletePolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicyVersion(...args).promise()
  }

  async deleteProvisioningTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProvisioningTemplate(...args).promise()
  }

  async deleteProvisioningTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProvisioningTemplateVersion(...args).promise()
  }

  async deleteRegistrationCode(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRegistrationCode(...args).promise()
  }

  async deleteRoleAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoleAlias(...args).promise()
  }

  async deleteScheduledAudit(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScheduledAudit(...args).promise()
  }

  async deleteSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSecurityProfile(...args).promise()
  }

  async deleteStream(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStream(...args).promise()
  }

  async deleteThing(...args: any): Promise<any> {
  // undefined
    return this.client.deleteThing(...args).promise()
  }

  async deleteThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteThingGroup(...args).promise()
  }

  async deleteThingType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteThingType(...args).promise()
  }

  async deleteTopicRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTopicRule(...args).promise()
  }

  async deleteTopicRuleDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTopicRuleDestination(...args).promise()
  }

  async deleteV2LoggingLevel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteV2LoggingLevel(...args).promise()
  }

  async deprecateThingType(...args: any): Promise<any> {
  // undefined
    return this.client.deprecateThingType(...args).promise()
  }

  async describeAccountAuditConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountAuditConfiguration(...args).promise()
  }

  async describeAuditFinding(...args: any): Promise<any> {
  // undefined
    return this.client.describeAuditFinding(...args).promise()
  }

  async describeAuditMitigationActionsTask(...args: any): Promise<any> {
  // undefined
    return this.client.describeAuditMitigationActionsTask(...args).promise()
  }

  async describeAuditSuppression(...args: any): Promise<any> {
  // undefined
    return this.client.describeAuditSuppression(...args).promise()
  }

  async describeAuditTask(...args: any): Promise<any> {
  // undefined
    return this.client.describeAuditTask(...args).promise()
  }

  async describeAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.describeAuthorizer(...args).promise()
  }

  async describeBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeBillingGroup(...args).promise()
  }

  async describeCACertificate(...args: any): Promise<any> {
  // undefined
    return this.client.describeCACertificate(...args).promise()
  }

  async describeCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.describeCertificate(...args).promise()
  }

  async describeCustomMetric(...args: any): Promise<any> {
  // undefined
    return this.client.describeCustomMetric(...args).promise()
  }

  async describeDefaultAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.describeDefaultAuthorizer(...args).promise()
  }

  async describeDetectMitigationActionsTask(...args: any): Promise<any> {
  // undefined
    return this.client.describeDetectMitigationActionsTask(...args).promise()
  }

  async describeDimension(...args: any): Promise<any> {
  // undefined
    return this.client.describeDimension(...args).promise()
  }

  async describeDomainConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomainConfiguration(...args).promise()
  }

  async describeEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpoint(...args).promise()
  }

  async describeEventConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventConfigurations(...args).promise()
  }

  async describeFleetMetric(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleetMetric(...args).promise()
  }

  async describeIndex(...args: any): Promise<any> {
  // undefined
    return this.client.describeIndex(...args).promise()
  }

  async describeJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeJob(...args).promise()
  }

  async describeJobExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeJobExecution(...args).promise()
  }

  async describeJobTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.describeJobTemplate(...args).promise()
  }

  async describeManagedJobTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.describeManagedJobTemplate(...args).promise()
  }

  async describeMitigationAction(...args: any): Promise<any> {
  // undefined
    return this.client.describeMitigationAction(...args).promise()
  }

  async describeProvisioningTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.describeProvisioningTemplate(...args).promise()
  }

  async describeProvisioningTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.describeProvisioningTemplateVersion(...args).promise()
  }

  async describeRoleAlias(...args: any): Promise<any> {
  // undefined
    return this.client.describeRoleAlias(...args).promise()
  }

  async describeScheduledAudit(...args: any): Promise<any> {
  // undefined
    return this.client.describeScheduledAudit(...args).promise()
  }

  async describeSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.describeSecurityProfile(...args).promise()
  }

  async describeStream(...args: any): Promise<any> {
  // undefined
    return this.client.describeStream(...args).promise()
  }

  async describeThing(...args: any): Promise<any> {
  // undefined
    return this.client.describeThing(...args).promise()
  }

  async describeThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeThingGroup(...args).promise()
  }

  async describeThingRegistrationTask(...args: any): Promise<any> {
  // undefined
    return this.client.describeThingRegistrationTask(...args).promise()
  }

  async describeThingType(...args: any): Promise<any> {
  // undefined
    return this.client.describeThingType(...args).promise()
  }

  async detachPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.detachPolicy(...args).promise()
  }

  async detachPrincipalPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.detachPrincipalPolicy(...args).promise()
  }

  async detachSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.detachSecurityProfile(...args).promise()
  }

  async detachThingPrincipal(...args: any): Promise<any> {
  // undefined
    return this.client.detachThingPrincipal(...args).promise()
  }

  async disableTopicRule(...args: any): Promise<any> {
  // undefined
    return this.client.disableTopicRule(...args).promise()
  }

  async enableTopicRule(...args: any): Promise<any> {
  // undefined
    return this.client.enableTopicRule(...args).promise()
  }

  async getBehaviorModelTrainingSummaries(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getBehaviorModelTrainingSummaries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getBucketsAggregation(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketsAggregation(...args).promise()
  }

  async getCardinality(...args: any): Promise<any> {
  // undefined
    return this.client.getCardinality(...args).promise()
  }

  async getEffectivePolicies(...args: any): Promise<any> {
  // undefined
    return this.client.getEffectivePolicies(...args).promise()
  }

  async getIndexingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getIndexingConfiguration(...args).promise()
  }

  async getJobDocument(...args: any): Promise<any> {
  // undefined
    return this.client.getJobDocument(...args).promise()
  }

  async getLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.getLoggingOptions(...args).promise()
  }

  async getOTAUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.getOTAUpdate(...args).promise()
  }

  async getPercentiles(...args: any): Promise<any> {
  // undefined
    return this.client.getPercentiles(...args).promise()
  }

  async getPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicy(...args).promise()
  }

  async getPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicyVersion(...args).promise()
  }

  async getRegistrationCode(...args: any): Promise<any> {
  // undefined
    return this.client.getRegistrationCode(...args).promise()
  }

  async getStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getStatistics(...args).promise()
  }

  async getTopicRule(...args: any): Promise<any> {
  // undefined
    return this.client.getTopicRule(...args).promise()
  }

  async getTopicRuleDestination(...args: any): Promise<any> {
  // undefined
    return this.client.getTopicRuleDestination(...args).promise()
  }

  async getV2LoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.getV2LoggingOptions(...args).promise()
  }

  async listActiveViolations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"activeViolations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listActiveViolations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.activeViolations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttachedPolicies(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"policies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listAttachedPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.policies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditFindings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditFindings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.findings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditMitigationActionsExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"actionsExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditMitigationActionsExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.actionsExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditMitigationActionsTasks(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditMitigationActionsTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditSuppressions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"suppressions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditSuppressions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.suppressions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuditTasks(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAuditTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAuthorizers(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"authorizers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listAuthorizers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.authorizers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBillingGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"billingGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBillingGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.billingGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCACertificates(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"certificates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listCACertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.certificates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCertificates(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"certificates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.certificates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCertificatesByCA(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"certificates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listCertificatesByCA(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.certificates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomMetrics(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"metricNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCustomMetrics(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.metricNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDetectMitigationActionsExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"actionsExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDetectMitigationActionsExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.actionsExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDetectMitigationActionsTasks(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDetectMitigationActionsTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDimensions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dimensionNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDimensions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.dimensionNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDomainConfigurations(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"domainConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listDomainConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.domainConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleetMetrics(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fleetMetrics"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFleetMetrics(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.fleetMetrics ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIndices(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"indexNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listIndices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.indexNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobExecutionsForJob(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"executionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobExecutionsForJob(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.executionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobExecutionsForThing(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"executionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobExecutionsForThing(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.executionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobTemplates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobTemplates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listManagedJobTemplates(...args: any): Promise<any> {
  // undefined
    return this.client.listManagedJobTemplates(...args).promise()
  }

  async listMetricValues(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"metricDatumList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMetricValues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.metricDatumList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMitigationActions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"actionIdentifiers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMitigationActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.actionIdentifiers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOTAUpdates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"otaUpdates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listOTAUpdates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.otaUpdates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOutgoingCertificates(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"outgoingCertificates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listOutgoingCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.outgoingCertificates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPolicies(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"policies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.policies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPolicyPrincipals(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"principals"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listPolicyPrincipals(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.principals ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPolicyVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listPolicyVersions(...args).promise()
  }

  async listPrincipalPolicies(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"policies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listPrincipalPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.policies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPrincipalThings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPrincipalThings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.things ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProvisioningTemplateVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"versions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProvisioningTemplateVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.versions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProvisioningTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProvisioningTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoleAliases(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"roleAliases"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listRoleAliases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.roleAliases ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listScheduledAudits(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"scheduledAudits"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listScheduledAudits(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.scheduledAudits ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityProfiles(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"securityProfileIdentifiers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSecurityProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.securityProfileIdentifiers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityProfilesForTarget(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"securityProfileTargetMappings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSecurityProfilesForTarget(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.securityProfileTargetMappings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStreams(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"streams"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStreams(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.streams ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTargetsForPolicy(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"pageSize","outputToken":"nextMarker","resultKey":"targets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { pageSize: limit } : {};
    const result = await this.client.listTargetsForPolicy(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextMarker;
    const member = result.targets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTargetsForSecurityProfile(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"securityProfileTargets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTargetsForSecurityProfile(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.securityProfileTargets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"thingGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.thingGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingGroupsForThing(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"thingGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingGroupsForThing(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.thingGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingPrincipals(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"principals"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingPrincipals(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.principals ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingRegistrationTaskReports(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"resourceLinks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingRegistrationTaskReports(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.resourceLinks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingRegistrationTasks(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"taskIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingRegistrationTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.taskIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingTypes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"thingTypes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.thingTypes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.things ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingsInBillingGroup(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingsInBillingGroup(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.things ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThingsInThingGroup(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThingsInThingGroup(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.things ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTopicRuleDestinations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"destinationSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTopicRuleDestinations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.destinationSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTopicRules(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"rules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTopicRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.rules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listV2LoggingLevels(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"logTargetConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listV2LoggingLevels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.logTargetConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listViolationEvents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"violationEvents"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listViolationEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.violationEvents ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putVerificationStateOnViolation(...args: any): Promise<any> {
  // undefined
    return this.client.putVerificationStateOnViolation(...args).promise()
  }

  async registerCACertificate(...args: any): Promise<any> {
  // undefined
    return this.client.registerCACertificate(...args).promise()
  }

  async registerCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.registerCertificate(...args).promise()
  }

  async registerCertificateWithoutCA(...args: any): Promise<any> {
  // undefined
    return this.client.registerCertificateWithoutCA(...args).promise()
  }

  async registerThing(...args: any): Promise<any> {
  // undefined
    return this.client.registerThing(...args).promise()
  }

  async rejectCertificateTransfer(...args: any): Promise<any> {
  // undefined
    return this.client.rejectCertificateTransfer(...args).promise()
  }

  async removeThingFromBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.removeThingFromBillingGroup(...args).promise()
  }

  async removeThingFromThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.removeThingFromThingGroup(...args).promise()
  }

  async replaceTopicRule(...args: any): Promise<any> {
  // undefined
    return this.client.replaceTopicRule(...args).promise()
  }

  async searchIndex(...args: any): Promise<any> {
  // undefined
    return this.client.searchIndex(...args).promise()
  }

  async setDefaultAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.setDefaultAuthorizer(...args).promise()
  }

  async setDefaultPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.setDefaultPolicyVersion(...args).promise()
  }

  async setLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.setLoggingOptions(...args).promise()
  }

  async setV2LoggingLevel(...args: any): Promise<any> {
  // undefined
    return this.client.setV2LoggingLevel(...args).promise()
  }

  async setV2LoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.setV2LoggingOptions(...args).promise()
  }

  async startAuditMitigationActionsTask(...args: any): Promise<any> {
  // undefined
    return this.client.startAuditMitigationActionsTask(...args).promise()
  }

  async startDetectMitigationActionsTask(...args: any): Promise<any> {
  // undefined
    return this.client.startDetectMitigationActionsTask(...args).promise()
  }

  async startOnDemandAuditTask(...args: any): Promise<any> {
  // undefined
    return this.client.startOnDemandAuditTask(...args).promise()
  }

  async startThingRegistrationTask(...args: any): Promise<any> {
  // undefined
    return this.client.startThingRegistrationTask(...args).promise()
  }

  async stopThingRegistrationTask(...args: any): Promise<any> {
  // undefined
    return this.client.stopThingRegistrationTask(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.testAuthorization(...args).promise()
  }

  async testInvokeAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.testInvokeAuthorizer(...args).promise()
  }

  async transferCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.transferCertificate(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAccountAuditConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccountAuditConfiguration(...args).promise()
  }

  async updateAuditSuppression(...args: any): Promise<any> {
  // undefined
    return this.client.updateAuditSuppression(...args).promise()
  }

  async updateAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.updateAuthorizer(...args).promise()
  }

  async updateBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateBillingGroup(...args).promise()
  }

  async updateCACertificate(...args: any): Promise<any> {
  // undefined
    return this.client.updateCACertificate(...args).promise()
  }

  async updateCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.updateCertificate(...args).promise()
  }

  async updateCustomMetric(...args: any): Promise<any> {
  // undefined
    return this.client.updateCustomMetric(...args).promise()
  }

  async updateDimension(...args: any): Promise<any> {
  // undefined
    return this.client.updateDimension(...args).promise()
  }

  async updateDomainConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainConfiguration(...args).promise()
  }

  async updateDynamicThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateDynamicThingGroup(...args).promise()
  }

  async updateEventConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventConfigurations(...args).promise()
  }

  async updateFleetMetric(...args: any): Promise<any> {
  // undefined
    return this.client.updateFleetMetric(...args).promise()
  }

  async updateIndexingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateIndexingConfiguration(...args).promise()
  }

  async updateJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateJob(...args).promise()
  }

  async updateMitigationAction(...args: any): Promise<any> {
  // undefined
    return this.client.updateMitigationAction(...args).promise()
  }

  async updateProvisioningTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateProvisioningTemplate(...args).promise()
  }

  async updateRoleAlias(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoleAlias(...args).promise()
  }

  async updateScheduledAudit(...args: any): Promise<any> {
  // undefined
    return this.client.updateScheduledAudit(...args).promise()
  }

  async updateSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateSecurityProfile(...args).promise()
  }

  async updateStream(...args: any): Promise<any> {
  // undefined
    return this.client.updateStream(...args).promise()
  }

  async updateThing(...args: any): Promise<any> {
  // undefined
    return this.client.updateThing(...args).promise()
  }

  async updateThingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateThingGroup(...args).promise()
  }

  async updateThingGroupsForThing(...args: any): Promise<any> {
  // undefined
    return this.client.updateThingGroupsForThing(...args).promise()
  }

  async updateTopicRuleDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateTopicRuleDestination(...args).promise()
  }

  async validateSecurityProfileBehaviors(...args: any): Promise<any> {
  // undefined
    return this.client.validateSecurityProfileBehaviors(...args).promise()
  }
  
  static fromClient(client: AWSIot): ClientType {
    return new Iot(client) as any;
  }
  
  static client(options?: AWSIot.Types.ClientConfiguration): ClientType {
    return new Iot(new AWSIot(options)) as any;
  }
}  
