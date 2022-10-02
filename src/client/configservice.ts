import { Request, ConfigService as AWSConfigService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSConfigService> = AWSConfigService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSConfigService> = AWSConfigService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSConfigService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSConfigService, Extras> = AWSConfigService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'config';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeAggregationAuthorizations","describeComplianceByConfigRule","describeComplianceByResource","describeConfigRuleEvaluationStatus","describeConfigRules","describeConfigurationAggregators","describeConformancePackStatus","describeConformancePacks","describeOrganizationConfigRuleStatuses","describeOrganizationConfigRules","describeOrganizationConformancePackStatuses","describeOrganizationConformancePacks","describePendingAggregationRequests","describeRetentionConfigurations","getDiscoveredResourceCounts","listConformancePackComplianceScores","listStoredQueries"];
    
  batchGetAggregateResourceConfig: FunctionTypeFrom<'batchGetAggregateResourceConfig'>;

  batchGetResourceConfig: FunctionTypeFrom<'batchGetResourceConfig'>;

  deleteAggregationAuthorization: FunctionTypeFrom<'deleteAggregationAuthorization'>;

  deleteConfigRule: FunctionTypeFrom<'deleteConfigRule'>;

  deleteConfigurationAggregator: FunctionTypeFrom<'deleteConfigurationAggregator'>;

  deleteConfigurationRecorder: FunctionTypeFrom<'deleteConfigurationRecorder'>;

  deleteConformancePack: FunctionTypeFrom<'deleteConformancePack'>;

  deleteDeliveryChannel: FunctionTypeFrom<'deleteDeliveryChannel'>;

  deleteEvaluationResults: FunctionTypeFrom<'deleteEvaluationResults'>;

  deleteOrganizationConfigRule: FunctionTypeFrom<'deleteOrganizationConfigRule'>;

  deleteOrganizationConformancePack: FunctionTypeFrom<'deleteOrganizationConformancePack'>;

  deletePendingAggregationRequest: FunctionTypeFrom<'deletePendingAggregationRequest'>;

  deleteRemediationConfiguration: FunctionTypeFrom<'deleteRemediationConfiguration'>;

  deleteRemediationExceptions: FunctionTypeFrom<'deleteRemediationExceptions'>;

  deleteResourceConfig: FunctionTypeFrom<'deleteResourceConfig'>;

  deleteRetentionConfiguration: FunctionTypeFrom<'deleteRetentionConfiguration'>;

  deleteStoredQuery: FunctionTypeFrom<'deleteStoredQuery'>;

  deliverConfigSnapshot: FunctionTypeFrom<'deliverConfigSnapshot'>;

  describeAggregateComplianceByConfigRules: FunctionTypeFrom<'describeAggregateComplianceByConfigRules'>;

  describeAggregateComplianceByConformancePacks(params: { [K in keyof Omit<ParamsFrom<'describeAggregateComplianceByConformancePacks', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeAggregateComplianceByConformancePacks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAggregateComplianceByConformancePacks'>]-?: ReturnTypeFrom<'describeAggregateComplianceByConformancePacks'>[K]}['AggregateComplianceByConformancePacks'] }>
  ;

  describeAggregationAuthorizations(params: { [K in keyof Omit<ParamsFrom<'describeAggregationAuthorizations', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeAggregationAuthorizations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAggregationAuthorizations'>]-?: ReturnTypeFrom<'describeAggregationAuthorizations'>[K]}['AggregationAuthorizations'] }>
  describeAggregationAuthorizations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAggregationAuthorizations'>]-?: ReturnTypeFrom<'describeAggregationAuthorizations'>[K]}['AggregationAuthorizations'] }>;

  describeComplianceByConfigRule(params: { [K in keyof Omit<ParamsFrom<'describeComplianceByConfigRule', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeComplianceByConfigRule', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeComplianceByConfigRule'>]-?: ReturnTypeFrom<'describeComplianceByConfigRule'>[K]}['ComplianceByConfigRules'] }>
  describeComplianceByConfigRule(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeComplianceByConfigRule'>]-?: ReturnTypeFrom<'describeComplianceByConfigRule'>[K]}['ComplianceByConfigRules'] }>;

  describeComplianceByResource(params: { [K in keyof Omit<ParamsFrom<'describeComplianceByResource', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeComplianceByResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeComplianceByResource'>]-?: ReturnTypeFrom<'describeComplianceByResource'>[K]}['ComplianceByResources'] }>
  describeComplianceByResource(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeComplianceByResource'>]-?: ReturnTypeFrom<'describeComplianceByResource'>[K]}['ComplianceByResources'] }>;

  describeConfigRuleEvaluationStatus(params: { [K in keyof Omit<ParamsFrom<'describeConfigRuleEvaluationStatus', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeConfigRuleEvaluationStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigRuleEvaluationStatus'>]-?: ReturnTypeFrom<'describeConfigRuleEvaluationStatus'>[K]}['ConfigRulesEvaluationStatus'] }>
  describeConfigRuleEvaluationStatus(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigRuleEvaluationStatus'>]-?: ReturnTypeFrom<'describeConfigRuleEvaluationStatus'>[K]}['ConfigRulesEvaluationStatus'] }>;

  describeConfigRules(params: { [K in keyof Omit<ParamsFrom<'describeConfigRules', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeConfigRules', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigRules'>]-?: ReturnTypeFrom<'describeConfigRules'>[K]}['ConfigRules'] }>
  describeConfigRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigRules'>]-?: ReturnTypeFrom<'describeConfigRules'>[K]}['ConfigRules'] }>;

  describeConfigurationAggregatorSourcesStatus(params: { [K in keyof Omit<ParamsFrom<'describeConfigurationAggregatorSourcesStatus', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeConfigurationAggregatorSourcesStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigurationAggregatorSourcesStatus'>]-?: ReturnTypeFrom<'describeConfigurationAggregatorSourcesStatus'>[K]}['AggregatedSourceStatusList'] }>
  ;

  describeConfigurationAggregators(params: { [K in keyof Omit<ParamsFrom<'describeConfigurationAggregators', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeConfigurationAggregators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigurationAggregators'>]-?: ReturnTypeFrom<'describeConfigurationAggregators'>[K]}['ConfigurationAggregators'] }>
  describeConfigurationAggregators(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigurationAggregators'>]-?: ReturnTypeFrom<'describeConfigurationAggregators'>[K]}['ConfigurationAggregators'] }>;

  describeConfigurationRecorderStatus: FunctionTypeFrom<'describeConfigurationRecorderStatus'>;

  describeConfigurationRecorders: FunctionTypeFrom<'describeConfigurationRecorders'>;

  describeConformancePackCompliance: FunctionTypeFrom<'describeConformancePackCompliance'>;

  describeConformancePackStatus(params: { [K in keyof Omit<ParamsFrom<'describeConformancePackStatus', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeConformancePackStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConformancePackStatus'>]-?: ReturnTypeFrom<'describeConformancePackStatus'>[K]}['ConformancePackStatusDetails'] }>
  describeConformancePackStatus(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConformancePackStatus'>]-?: ReturnTypeFrom<'describeConformancePackStatus'>[K]}['ConformancePackStatusDetails'] }>;

  describeConformancePacks(params: { [K in keyof Omit<ParamsFrom<'describeConformancePacks', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeConformancePacks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConformancePacks'>]-?: ReturnTypeFrom<'describeConformancePacks'>[K]}['ConformancePackDetails'] }>
  describeConformancePacks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConformancePacks'>]-?: ReturnTypeFrom<'describeConformancePacks'>[K]}['ConformancePackDetails'] }>;

  describeDeliveryChannelStatus: FunctionTypeFrom<'describeDeliveryChannelStatus'>;

  describeDeliveryChannels: FunctionTypeFrom<'describeDeliveryChannels'>;

  describeOrganizationConfigRuleStatuses(params: { [K in keyof Omit<ParamsFrom<'describeOrganizationConfigRuleStatuses', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeOrganizationConfigRuleStatuses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrganizationConfigRuleStatuses'>]-?: ReturnTypeFrom<'describeOrganizationConfigRuleStatuses'>[K]}['OrganizationConfigRuleStatuses'] }>
  describeOrganizationConfigRuleStatuses(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrganizationConfigRuleStatuses'>]-?: ReturnTypeFrom<'describeOrganizationConfigRuleStatuses'>[K]}['OrganizationConfigRuleStatuses'] }>;

  describeOrganizationConfigRules(params: { [K in keyof Omit<ParamsFrom<'describeOrganizationConfigRules', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeOrganizationConfigRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrganizationConfigRules'>]-?: ReturnTypeFrom<'describeOrganizationConfigRules'>[K]}['OrganizationConfigRules'] }>
  describeOrganizationConfigRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrganizationConfigRules'>]-?: ReturnTypeFrom<'describeOrganizationConfigRules'>[K]}['OrganizationConfigRules'] }>;

  describeOrganizationConformancePackStatuses(params: { [K in keyof Omit<ParamsFrom<'describeOrganizationConformancePackStatuses', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeOrganizationConformancePackStatuses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrganizationConformancePackStatuses'>]-?: ReturnTypeFrom<'describeOrganizationConformancePackStatuses'>[K]}['OrganizationConformancePackStatuses'] }>
  describeOrganizationConformancePackStatuses(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrganizationConformancePackStatuses'>]-?: ReturnTypeFrom<'describeOrganizationConformancePackStatuses'>[K]}['OrganizationConformancePackStatuses'] }>;

  describeOrganizationConformancePacks(params: { [K in keyof Omit<ParamsFrom<'describeOrganizationConformancePacks', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeOrganizationConformancePacks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrganizationConformancePacks'>]-?: ReturnTypeFrom<'describeOrganizationConformancePacks'>[K]}['OrganizationConformancePacks'] }>
  describeOrganizationConformancePacks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOrganizationConformancePacks'>]-?: ReturnTypeFrom<'describeOrganizationConformancePacks'>[K]}['OrganizationConformancePacks'] }>;

  describePendingAggregationRequests(params: { [K in keyof Omit<ParamsFrom<'describePendingAggregationRequests', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describePendingAggregationRequests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePendingAggregationRequests'>]-?: ReturnTypeFrom<'describePendingAggregationRequests'>[K]}['PendingAggregationRequests'] }>
  describePendingAggregationRequests(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePendingAggregationRequests'>]-?: ReturnTypeFrom<'describePendingAggregationRequests'>[K]}['PendingAggregationRequests'] }>;

  describeRemediationConfigurations: FunctionTypeFrom<'describeRemediationConfigurations'>;

  describeRemediationExceptions: FunctionTypeFrom<'describeRemediationExceptions'>;

  describeRemediationExecutionStatus(params: { [K in keyof Omit<ParamsFrom<'describeRemediationExecutionStatus', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeRemediationExecutionStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRemediationExecutionStatus'>]-?: ReturnTypeFrom<'describeRemediationExecutionStatus'>[K]}['RemediationExecutionStatuses'] }>
  ;

  describeRetentionConfigurations(params: { [K in keyof Omit<ParamsFrom<'describeRetentionConfigurations', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeRetentionConfigurations', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRetentionConfigurations'>]-?: ReturnTypeFrom<'describeRetentionConfigurations'>[K]}['RetentionConfigurations'] }>
  describeRetentionConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRetentionConfigurations'>]-?: ReturnTypeFrom<'describeRetentionConfigurations'>[K]}['RetentionConfigurations'] }>;

  getAggregateComplianceDetailsByConfigRule(params: { [K in keyof Omit<ParamsFrom<'getAggregateComplianceDetailsByConfigRule', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'getAggregateComplianceDetailsByConfigRule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getAggregateComplianceDetailsByConfigRule'>]-?: ReturnTypeFrom<'getAggregateComplianceDetailsByConfigRule'>[K]}['AggregateEvaluationResults'] }>
  ;

  getAggregateConfigRuleComplianceSummary: FunctionTypeFrom<'getAggregateConfigRuleComplianceSummary'>;

  getAggregateConformancePackComplianceSummary: FunctionTypeFrom<'getAggregateConformancePackComplianceSummary'>;

  getAggregateDiscoveredResourceCounts: FunctionTypeFrom<'getAggregateDiscoveredResourceCounts'>;

  getAggregateResourceConfig: FunctionTypeFrom<'getAggregateResourceConfig'>;

  getComplianceDetailsByConfigRule(params: { [K in keyof Omit<ParamsFrom<'getComplianceDetailsByConfigRule', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'getComplianceDetailsByConfigRule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getComplianceDetailsByConfigRule'>]-?: ReturnTypeFrom<'getComplianceDetailsByConfigRule'>[K]}['EvaluationResults'] }>
  ;

  getComplianceDetailsByResource(params: { [K in keyof Omit<ParamsFrom<'getComplianceDetailsByResource', { next?: string }>, 'NextToken'>]: ParamsFrom<'getComplianceDetailsByResource', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getComplianceDetailsByResource'>]-?: ReturnTypeFrom<'getComplianceDetailsByResource'>[K]}['EvaluationResults'] }>
  ;

  getComplianceSummaryByConfigRule: FunctionTypeFrom<'getComplianceSummaryByConfigRule'>;

  getComplianceSummaryByResourceType: FunctionTypeFrom<'getComplianceSummaryByResourceType'>;

  getConformancePackComplianceDetails: FunctionTypeFrom<'getConformancePackComplianceDetails'>;

  getConformancePackComplianceSummary(params: { [K in keyof Omit<ParamsFrom<'getConformancePackComplianceSummary', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'getConformancePackComplianceSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getConformancePackComplianceSummary'>]-?: ReturnTypeFrom<'getConformancePackComplianceSummary'>[K]}['ConformancePackComplianceSummaryList'] }>
  ;

  getCustomRulePolicy: FunctionTypeFrom<'getCustomRulePolicy'>;

  getDiscoveredResourceCounts: FunctionTypeFrom<'getDiscoveredResourceCounts'>;

  getOrganizationConfigRuleDetailedStatus(params: { [K in keyof Omit<ParamsFrom<'getOrganizationConfigRuleDetailedStatus', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'getOrganizationConfigRuleDetailedStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getOrganizationConfigRuleDetailedStatus'>]-?: ReturnTypeFrom<'getOrganizationConfigRuleDetailedStatus'>[K]}['OrganizationConfigRuleDetailedStatus'] }>
  ;

  getOrganizationConformancePackDetailedStatus(params: { [K in keyof Omit<ParamsFrom<'getOrganizationConformancePackDetailedStatus', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'getOrganizationConformancePackDetailedStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getOrganizationConformancePackDetailedStatus'>]-?: ReturnTypeFrom<'getOrganizationConformancePackDetailedStatus'>[K]}['OrganizationConformancePackDetailedStatuses'] }>
  ;

  getOrganizationCustomRulePolicy: FunctionTypeFrom<'getOrganizationCustomRulePolicy'>;

  getResourceConfigHistory(params: { [K in keyof Omit<ParamsFrom<'getResourceConfigHistory', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'getResourceConfigHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getResourceConfigHistory'>]-?: ReturnTypeFrom<'getResourceConfigHistory'>[K]}['configurationItems'] }>
  ;

  getStoredQuery: FunctionTypeFrom<'getStoredQuery'>;

  listAggregateDiscoveredResources(params: { [K in keyof Omit<ParamsFrom<'listAggregateDiscoveredResources', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listAggregateDiscoveredResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAggregateDiscoveredResources'>]-?: ReturnTypeFrom<'listAggregateDiscoveredResources'>[K]}['ResourceIdentifiers'] }>
  ;

  listConformancePackComplianceScores: FunctionTypeFrom<'listConformancePackComplianceScores'>;

  listDiscoveredResources(params: { [K in keyof Omit<ParamsFrom<'listDiscoveredResources', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listDiscoveredResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDiscoveredResources'>]-?: ReturnTypeFrom<'listDiscoveredResources'>[K]}['resourceIdentifiers'] }>
  ;

  listStoredQueries: FunctionTypeFrom<'listStoredQueries'>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  putAggregationAuthorization: FunctionTypeFrom<'putAggregationAuthorization'>;

  putConfigRule: FunctionTypeFrom<'putConfigRule'>;

  putConfigurationAggregator: FunctionTypeFrom<'putConfigurationAggregator'>;

  putConfigurationRecorder: FunctionTypeFrom<'putConfigurationRecorder'>;

  putConformancePack: FunctionTypeFrom<'putConformancePack'>;

  putDeliveryChannel: FunctionTypeFrom<'putDeliveryChannel'>;

  putEvaluations: FunctionTypeFrom<'putEvaluations'>;

  putExternalEvaluation: FunctionTypeFrom<'putExternalEvaluation'>;

  putOrganizationConfigRule: FunctionTypeFrom<'putOrganizationConfigRule'>;

  putOrganizationConformancePack: FunctionTypeFrom<'putOrganizationConformancePack'>;

  putRemediationConfigurations: FunctionTypeFrom<'putRemediationConfigurations'>;

  putRemediationExceptions: FunctionTypeFrom<'putRemediationExceptions'>;

  putResourceConfig: FunctionTypeFrom<'putResourceConfig'>;

  putRetentionConfiguration: FunctionTypeFrom<'putRetentionConfiguration'>;

  putStoredQuery: FunctionTypeFrom<'putStoredQuery'>;

  selectAggregateResourceConfig(params: { [K in keyof Omit<ParamsFrom<'selectAggregateResourceConfig', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'selectAggregateResourceConfig', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'selectAggregateResourceConfig'>]-?: ReturnTypeFrom<'selectAggregateResourceConfig'>[K]}['Results'] }>
  ;

  selectResourceConfig(params: { [K in keyof Omit<ParamsFrom<'selectResourceConfig', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'selectResourceConfig', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'selectResourceConfig'>]-?: ReturnTypeFrom<'selectResourceConfig'>[K]}['Results'] }>
  ;

  startConfigRulesEvaluation: FunctionTypeFrom<'startConfigRulesEvaluation'>;

  startConfigurationRecorder: FunctionTypeFrom<'startConfigurationRecorder'>;

  startRemediationExecution: FunctionTypeFrom<'startRemediationExecution'>;

  stopConfigurationRecorder: FunctionTypeFrom<'stopConfigurationRecorder'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class ConfigService implements ClientType {
  private constructor(private readonly client: AWSConfigService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'config';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeAggregationAuthorizations","describeComplianceByConfigRule","describeComplianceByResource","describeConfigRuleEvaluationStatus","describeConfigRules","describeConfigurationAggregators","describeConformancePackStatus","describeConformancePacks","describeOrganizationConfigRuleStatuses","describeOrganizationConfigRules","describeOrganizationConformancePackStatuses","describeOrganizationConformancePacks","describePendingAggregationRequests","describeRetentionConfigurations","getDiscoveredResourceCounts","listConformancePackComplianceScores","listStoredQueries"] as const;
  
  async batchGetAggregateResourceConfig(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetAggregateResourceConfig(...args).promise()
  }

  async batchGetResourceConfig(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetResourceConfig(...args).promise()
  }

  async deleteAggregationAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAggregationAuthorization(...args).promise()
  }

  async deleteConfigRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigRule(...args).promise()
  }

  async deleteConfigurationAggregator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationAggregator(...args).promise()
  }

  async deleteConfigurationRecorder(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationRecorder(...args).promise()
  }

  async deleteConformancePack(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConformancePack(...args).promise()
  }

  async deleteDeliveryChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeliveryChannel(...args).promise()
  }

  async deleteEvaluationResults(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEvaluationResults(...args).promise()
  }

  async deleteOrganizationConfigRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOrganizationConfigRule(...args).promise()
  }

  async deleteOrganizationConformancePack(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOrganizationConformancePack(...args).promise()
  }

  async deletePendingAggregationRequest(...args: any): Promise<any> {
  // undefined
    return this.client.deletePendingAggregationRequest(...args).promise()
  }

  async deleteRemediationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRemediationConfiguration(...args).promise()
  }

  async deleteRemediationExceptions(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRemediationExceptions(...args).promise()
  }

  async deleteResourceConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourceConfig(...args).promise()
  }

  async deleteRetentionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRetentionConfiguration(...args).promise()
  }

  async deleteStoredQuery(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStoredQuery(...args).promise()
  }

  async deliverConfigSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deliverConfigSnapshot(...args).promise()
  }

  async describeAggregateComplianceByConfigRules(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeAggregateComplianceByConfigRules(...args).promise()
  }

  async describeAggregateComplianceByConformancePacks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"AggregateComplianceByConformancePacks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeAggregateComplianceByConformancePacks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AggregateComplianceByConformancePacks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAggregationAuthorizations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"AggregationAuthorizations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeAggregationAuthorizations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AggregationAuthorizations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeComplianceByConfigRule(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ComplianceByConfigRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeComplianceByConfigRule(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ComplianceByConfigRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeComplianceByResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ComplianceByResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeComplianceByResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ComplianceByResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigRuleEvaluationStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConfigRulesEvaluationStatus"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConfigRuleEvaluationStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConfigRulesEvaluationStatus ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ConfigRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeConfigRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConfigRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigurationAggregatorSourcesStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"AggregatedSourceStatusList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConfigurationAggregatorSourcesStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AggregatedSourceStatusList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigurationAggregators(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConfigurationAggregators"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConfigurationAggregators(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConfigurationAggregators ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigurationRecorderStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfigurationRecorderStatus(...args).promise()
  }

  async describeConfigurationRecorders(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfigurationRecorders(...args).promise()
  }

  async describeConformancePackCompliance(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeConformancePackCompliance(...args).promise()
  }

  async describeConformancePackStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConformancePackStatusDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConformancePackStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConformancePackStatusDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConformancePacks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConformancePackDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConformancePacks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConformancePackDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDeliveryChannelStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeDeliveryChannelStatus(...args).promise()
  }

  async describeDeliveryChannels(...args: any): Promise<any> {
  // undefined
    return this.client.describeDeliveryChannels(...args).promise()
  }

  async describeOrganizationConfigRuleStatuses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConfigRuleStatuses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeOrganizationConfigRuleStatuses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OrganizationConfigRuleStatuses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrganizationConfigRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConfigRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeOrganizationConfigRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OrganizationConfigRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrganizationConformancePackStatuses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConformancePackStatuses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeOrganizationConformancePackStatuses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OrganizationConformancePackStatuses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrganizationConformancePacks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConformancePacks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeOrganizationConformancePacks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OrganizationConformancePacks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePendingAggregationRequests(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"PendingAggregationRequests"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describePendingAggregationRequests(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PendingAggregationRequests ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRemediationConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.describeRemediationConfigurations(...args).promise()
  }

  async describeRemediationExceptions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeRemediationExceptions(...args).promise()
  }

  async describeRemediationExecutionStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"RemediationExecutionStatuses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeRemediationExecutionStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RemediationExecutionStatuses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRetentionConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"RetentionConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeRetentionConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RetentionConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getAggregateComplianceDetailsByConfigRule(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"AggregateEvaluationResults"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getAggregateComplianceDetailsByConfigRule(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AggregateEvaluationResults ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getAggregateConfigRuleComplianceSummary(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.getAggregateConfigRuleComplianceSummary(...args).promise()
  }

  async getAggregateConformancePackComplianceSummary(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.getAggregateConformancePackComplianceSummary(...args).promise()
  }

  async getAggregateDiscoveredResourceCounts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.getAggregateDiscoveredResourceCounts(...args).promise()
  }

  async getAggregateResourceConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getAggregateResourceConfig(...args).promise()
  }

  async getComplianceDetailsByConfigRule(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"EvaluationResults"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getComplianceDetailsByConfigRule(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EvaluationResults ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getComplianceDetailsByResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"EvaluationResults"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getComplianceDetailsByResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EvaluationResults ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getComplianceSummaryByConfigRule(...args: any): Promise<any> {
  // undefined
    return this.client.getComplianceSummaryByConfigRule(...args).promise()
  }

  async getComplianceSummaryByResourceType(...args: any): Promise<any> {
  // undefined
    return this.client.getComplianceSummaryByResourceType(...args).promise()
  }

  async getConformancePackComplianceDetails(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.getConformancePackComplianceDetails(...args).promise()
  }

  async getConformancePackComplianceSummary(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConformancePackComplianceSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getConformancePackComplianceSummary(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConformancePackComplianceSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getCustomRulePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getCustomRulePolicy(...args).promise()
  }

  async getDiscoveredResourceCounts(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken"}
    return this.client.getDiscoveredResourceCounts(...args).promise()
  }

  async getOrganizationConfigRuleDetailedStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConfigRuleDetailedStatus"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getOrganizationConfigRuleDetailedStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OrganizationConfigRuleDetailedStatus ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getOrganizationConformancePackDetailedStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConformancePackDetailedStatuses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getOrganizationConformancePackDetailedStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OrganizationConformancePackDetailedStatuses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getOrganizationCustomRulePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getOrganizationCustomRulePolicy(...args).promise()
  }

  async getResourceConfigHistory(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"configurationItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getResourceConfigHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.configurationItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getStoredQuery(...args: any): Promise<any> {
  // undefined
    return this.client.getStoredQuery(...args).promise()
  }

  async listAggregateDiscoveredResources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ResourceIdentifiers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listAggregateDiscoveredResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceIdentifiers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConformancePackComplianceScores(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.listConformancePackComplianceScores(...args).promise()
  }

  async listDiscoveredResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"resourceIdentifiers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listDiscoveredResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.resourceIdentifiers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStoredQueries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listStoredQueries(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putAggregationAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.putAggregationAuthorization(...args).promise()
  }

  async putConfigRule(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigRule(...args).promise()
  }

  async putConfigurationAggregator(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigurationAggregator(...args).promise()
  }

  async putConfigurationRecorder(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigurationRecorder(...args).promise()
  }

  async putConformancePack(...args: any): Promise<any> {
  // undefined
    return this.client.putConformancePack(...args).promise()
  }

  async putDeliveryChannel(...args: any): Promise<any> {
  // undefined
    return this.client.putDeliveryChannel(...args).promise()
  }

  async putEvaluations(...args: any): Promise<any> {
  // undefined
    return this.client.putEvaluations(...args).promise()
  }

  async putExternalEvaluation(...args: any): Promise<any> {
  // undefined
    return this.client.putExternalEvaluation(...args).promise()
  }

  async putOrganizationConfigRule(...args: any): Promise<any> {
  // undefined
    return this.client.putOrganizationConfigRule(...args).promise()
  }

  async putOrganizationConformancePack(...args: any): Promise<any> {
  // undefined
    return this.client.putOrganizationConformancePack(...args).promise()
  }

  async putRemediationConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.putRemediationConfigurations(...args).promise()
  }

  async putRemediationExceptions(...args: any): Promise<any> {
  // undefined
    return this.client.putRemediationExceptions(...args).promise()
  }

  async putResourceConfig(...args: any): Promise<any> {
  // undefined
    return this.client.putResourceConfig(...args).promise()
  }

  async putRetentionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putRetentionConfiguration(...args).promise()
  }

  async putStoredQuery(...args: any): Promise<any> {
  // undefined
    return this.client.putStoredQuery(...args).promise()
  }

  async selectAggregateResourceConfig(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.selectAggregateResourceConfig(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async selectResourceConfig(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.selectResourceConfig(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startConfigRulesEvaluation(...args: any): Promise<any> {
  // undefined
    return this.client.startConfigRulesEvaluation(...args).promise()
  }

  async startConfigurationRecorder(...args: any): Promise<any> {
  // undefined
    return this.client.startConfigurationRecorder(...args).promise()
  }

  async startRemediationExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startRemediationExecution(...args).promise()
  }

  async stopConfigurationRecorder(...args: any): Promise<any> {
  // undefined
    return this.client.stopConfigurationRecorder(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSConfigService): ClientType {
    return new ConfigService(client) as any;
  }
  
  static client(options?: AWSConfigService.Types.ClientConfiguration): ClientType {
    return new ConfigService(new AWSConfigService(options)) as any;
  }
}  
