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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSConfigService> = AWSConfigService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ConfigService {
  private constructor(private readonly client: AWSConfigService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'config' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeAggregationAuthorizations","describeComplianceByConfigRule","describeComplianceByResource","describeConfigRuleEvaluationStatus","describeConfigRules","describeConfigurationAggregators","describeConformancePackStatus","describeConformancePacks","describeOrganizationConfigRuleStatuses","describeOrganizationConfigRules","describeOrganizationConformancePackStatuses","describeOrganizationConformancePacks","describePendingAggregationRequests","describeRetentionConfigurations","getComplianceDetailsByResource","getDiscoveredResourceCounts","listConformancePackComplianceScores","listResourceEvaluations","listStoredQueries"] as const;
  
  batchGetAggregateResourceConfig: (params: RawParamsFrom<'batchGetAggregateResourceConfig'>) => Promise<ReturnTypeFrom<'batchGetAggregateResourceConfig'>>  = async params => {
  // undefined
    return this.client.batchGetAggregateResourceConfig(params as any).promise();
  }

  batchGetResourceConfig: (params: RawParamsFrom<'batchGetResourceConfig'>) => Promise<ReturnTypeFrom<'batchGetResourceConfig'>>  = async params => {
  // undefined
    return this.client.batchGetResourceConfig(params as any).promise();
  }

  deleteAggregationAuthorization: (params: RawParamsFrom<'deleteAggregationAuthorization'>) => Promise<ReturnTypeFrom<'deleteAggregationAuthorization'>>  = async params => {
  // undefined
    return this.client.deleteAggregationAuthorization(params as any).promise();
  }

  deleteConfigRule: (params: RawParamsFrom<'deleteConfigRule'>) => Promise<ReturnTypeFrom<'deleteConfigRule'>>  = async params => {
  // undefined
    return this.client.deleteConfigRule(params as any).promise();
  }

  deleteConfigurationAggregator: (params: RawParamsFrom<'deleteConfigurationAggregator'>) => Promise<ReturnTypeFrom<'deleteConfigurationAggregator'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationAggregator(params as any).promise();
  }

  deleteConfigurationRecorder: (params: RawParamsFrom<'deleteConfigurationRecorder'>) => Promise<ReturnTypeFrom<'deleteConfigurationRecorder'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationRecorder(params as any).promise();
  }

  deleteConformancePack: (params: RawParamsFrom<'deleteConformancePack'>) => Promise<ReturnTypeFrom<'deleteConformancePack'>>  = async params => {
  // undefined
    return this.client.deleteConformancePack(params as any).promise();
  }

  deleteDeliveryChannel: (params: RawParamsFrom<'deleteDeliveryChannel'>) => Promise<ReturnTypeFrom<'deleteDeliveryChannel'>>  = async params => {
  // undefined
    return this.client.deleteDeliveryChannel(params as any).promise();
  }

  deleteEvaluationResults: (params: RawParamsFrom<'deleteEvaluationResults'>) => Promise<ReturnTypeFrom<'deleteEvaluationResults'>>  = async params => {
  // undefined
    return this.client.deleteEvaluationResults(params as any).promise();
  }

  deleteOrganizationConfigRule: (params: RawParamsFrom<'deleteOrganizationConfigRule'>) => Promise<ReturnTypeFrom<'deleteOrganizationConfigRule'>>  = async params => {
  // undefined
    return this.client.deleteOrganizationConfigRule(params as any).promise();
  }

  deleteOrganizationConformancePack: (params: RawParamsFrom<'deleteOrganizationConformancePack'>) => Promise<ReturnTypeFrom<'deleteOrganizationConformancePack'>>  = async params => {
  // undefined
    return this.client.deleteOrganizationConformancePack(params as any).promise();
  }

  deletePendingAggregationRequest: (params: RawParamsFrom<'deletePendingAggregationRequest'>) => Promise<ReturnTypeFrom<'deletePendingAggregationRequest'>>  = async params => {
  // undefined
    return this.client.deletePendingAggregationRequest(params as any).promise();
  }

  deleteRemediationConfiguration: (params: RawParamsFrom<'deleteRemediationConfiguration'>) => Promise<ReturnTypeFrom<'deleteRemediationConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteRemediationConfiguration(params as any).promise();
  }

  deleteRemediationExceptions: (params: RawParamsFrom<'deleteRemediationExceptions'>) => Promise<ReturnTypeFrom<'deleteRemediationExceptions'>>  = async params => {
  // undefined
    return this.client.deleteRemediationExceptions(params as any).promise();
  }

  deleteResourceConfig: (params: RawParamsFrom<'deleteResourceConfig'>) => Promise<ReturnTypeFrom<'deleteResourceConfig'>>  = async params => {
  // undefined
    return this.client.deleteResourceConfig(params as any).promise();
  }

  deleteRetentionConfiguration: (params: RawParamsFrom<'deleteRetentionConfiguration'>) => Promise<ReturnTypeFrom<'deleteRetentionConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteRetentionConfiguration(params as any).promise();
  }

  deleteStoredQuery: (params: RawParamsFrom<'deleteStoredQuery'>) => Promise<ReturnTypeFrom<'deleteStoredQuery'>>  = async params => {
  // undefined
    return this.client.deleteStoredQuery(params as any).promise();
  }

  deliverConfigSnapshot: (params: RawParamsFrom<'deliverConfigSnapshot'>) => Promise<ReturnTypeFrom<'deliverConfigSnapshot'>>  = async params => {
  // undefined
    return this.client.deliverConfigSnapshot(params as any).promise();
  }

  describeAggregateComplianceByConfigRules: (params: RawParamsFrom<'describeAggregateComplianceByConfigRules'>) => Promise<ReturnTypeFrom<'describeAggregateComplianceByConfigRules'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeAggregateComplianceByConfigRules(params as any).promise();
  }

  async describeAggregateComplianceByConformancePacks(params: { [K in keyof ParamsFrom<'describeAggregateComplianceByConformancePacks', { next?: string, limit?: number }>]: ParamsFrom<'describeAggregateComplianceByConformancePacks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAggregateComplianceByConformancePacks'>]-?: ReturnTypeFrom<'describeAggregateComplianceByConformancePacks'>[K]}['AggregateComplianceByConformancePacks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"AggregateComplianceByConformancePacks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeAggregateComplianceByConformancePacks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAggregateComplianceByConformancePacks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AggregateComplianceByConformancePacks ?? []) ? (result.AggregateComplianceByConformancePacks ?? []) : [result.AggregateComplianceByConformancePacks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAggregationAuthorizations(params: { [K in keyof ParamsFrom<'describeAggregationAuthorizations', { next?: string, limit?: number }>]: ParamsFrom<'describeAggregationAuthorizations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAggregationAuthorizations'>]-?: ReturnTypeFrom<'describeAggregationAuthorizations'>[K]}['AggregationAuthorizations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"AggregationAuthorizations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeAggregationAuthorizations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAggregationAuthorizations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AggregationAuthorizations ?? []) ? (result.AggregationAuthorizations ?? []) : [result.AggregationAuthorizations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeComplianceByConfigRule(params: { [K in keyof ParamsFrom<'describeComplianceByConfigRule', { next?: string }>]: ParamsFrom<'describeComplianceByConfigRule', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeComplianceByConfigRule'>]-?: ReturnTypeFrom<'describeComplianceByConfigRule'>[K]}['ComplianceByConfigRules'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ComplianceByConfigRules"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeComplianceByConfigRule({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeComplianceByConfigRule' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ComplianceByConfigRules ?? []) ? (result.ComplianceByConfigRules ?? []) : [result.ComplianceByConfigRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeComplianceByResource(params: { [K in keyof ParamsFrom<'describeComplianceByResource', { next?: string, limit?: number }>]: ParamsFrom<'describeComplianceByResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeComplianceByResource'>]-?: ReturnTypeFrom<'describeComplianceByResource'>[K]}['ComplianceByResources'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ComplianceByResources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeComplianceByResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeComplianceByResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ComplianceByResources ?? []) ? (result.ComplianceByResources ?? []) : [result.ComplianceByResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigRuleEvaluationStatus(params: { [K in keyof ParamsFrom<'describeConfigRuleEvaluationStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeConfigRuleEvaluationStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConfigRuleEvaluationStatus'>]-?: ReturnTypeFrom<'describeConfigRuleEvaluationStatus'>[K]}['ConfigRulesEvaluationStatus'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConfigRulesEvaluationStatus"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConfigRuleEvaluationStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeConfigRuleEvaluationStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ConfigRulesEvaluationStatus ?? []) ? (result.ConfigRulesEvaluationStatus ?? []) : [result.ConfigRulesEvaluationStatus]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigRules(params: { [K in keyof ParamsFrom<'describeConfigRules', { next?: string }>]: ParamsFrom<'describeConfigRules', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConfigRules'>]-?: ReturnTypeFrom<'describeConfigRules'>[K]}['ConfigRules'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ConfigRules"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeConfigRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeConfigRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ConfigRules ?? []) ? (result.ConfigRules ?? []) : [result.ConfigRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigurationAggregatorSourcesStatus(params: { [K in keyof ParamsFrom<'describeConfigurationAggregatorSourcesStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeConfigurationAggregatorSourcesStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConfigurationAggregatorSourcesStatus'>]-?: ReturnTypeFrom<'describeConfigurationAggregatorSourcesStatus'>[K]}['AggregatedSourceStatusList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"AggregatedSourceStatusList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConfigurationAggregatorSourcesStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeConfigurationAggregatorSourcesStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AggregatedSourceStatusList ?? []) ? (result.AggregatedSourceStatusList ?? []) : [result.AggregatedSourceStatusList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigurationAggregators(params: { [K in keyof ParamsFrom<'describeConfigurationAggregators', { next?: string, limit?: number }>]: ParamsFrom<'describeConfigurationAggregators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConfigurationAggregators'>]-?: ReturnTypeFrom<'describeConfigurationAggregators'>[K]}['ConfigurationAggregators'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConfigurationAggregators"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConfigurationAggregators({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeConfigurationAggregators' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ConfigurationAggregators ?? []) ? (result.ConfigurationAggregators ?? []) : [result.ConfigurationAggregators]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeConfigurationRecorderStatus: (params: RawParamsFrom<'describeConfigurationRecorderStatus'>) => Promise<ReturnTypeFrom<'describeConfigurationRecorderStatus'>>  = async params => {
  // undefined
    return this.client.describeConfigurationRecorderStatus(params as any).promise();
  }

  describeConfigurationRecorders: (params: RawParamsFrom<'describeConfigurationRecorders'>) => Promise<ReturnTypeFrom<'describeConfigurationRecorders'>>  = async params => {
  // undefined
    return this.client.describeConfigurationRecorders(params as any).promise();
  }

  describeConformancePackCompliance: (params: RawParamsFrom<'describeConformancePackCompliance'>) => Promise<ReturnTypeFrom<'describeConformancePackCompliance'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeConformancePackCompliance(params as any).promise();
  }

  async describeConformancePackStatus(params: { [K in keyof ParamsFrom<'describeConformancePackStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeConformancePackStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConformancePackStatus'>]-?: ReturnTypeFrom<'describeConformancePackStatus'>[K]}['ConformancePackStatusDetails'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConformancePackStatusDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConformancePackStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeConformancePackStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ConformancePackStatusDetails ?? []) ? (result.ConformancePackStatusDetails ?? []) : [result.ConformancePackStatusDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConformancePacks(params: { [K in keyof ParamsFrom<'describeConformancePacks', { next?: string, limit?: number }>]: ParamsFrom<'describeConformancePacks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConformancePacks'>]-?: ReturnTypeFrom<'describeConformancePacks'>[K]}['ConformancePackDetails'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConformancePackDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeConformancePacks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeConformancePacks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ConformancePackDetails ?? []) ? (result.ConformancePackDetails ?? []) : [result.ConformancePackDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeDeliveryChannelStatus: (params: RawParamsFrom<'describeDeliveryChannelStatus'>) => Promise<ReturnTypeFrom<'describeDeliveryChannelStatus'>>  = async params => {
  // undefined
    return this.client.describeDeliveryChannelStatus(params as any).promise();
  }

  describeDeliveryChannels: (params: RawParamsFrom<'describeDeliveryChannels'>) => Promise<ReturnTypeFrom<'describeDeliveryChannels'>>  = async params => {
  // undefined
    return this.client.describeDeliveryChannels(params as any).promise();
  }

  async describeOrganizationConfigRuleStatuses(params: { [K in keyof ParamsFrom<'describeOrganizationConfigRuleStatuses', { next?: string, limit?: number }>]: ParamsFrom<'describeOrganizationConfigRuleStatuses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOrganizationConfigRuleStatuses'>]-?: ReturnTypeFrom<'describeOrganizationConfigRuleStatuses'>[K]}['OrganizationConfigRuleStatuses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConfigRuleStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeOrganizationConfigRuleStatuses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeOrganizationConfigRuleStatuses' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OrganizationConfigRuleStatuses ?? []) ? (result.OrganizationConfigRuleStatuses ?? []) : [result.OrganizationConfigRuleStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrganizationConfigRules(params: { [K in keyof ParamsFrom<'describeOrganizationConfigRules', { next?: string, limit?: number }>]: ParamsFrom<'describeOrganizationConfigRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOrganizationConfigRules'>]-?: ReturnTypeFrom<'describeOrganizationConfigRules'>[K]}['OrganizationConfigRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConfigRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeOrganizationConfigRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeOrganizationConfigRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OrganizationConfigRules ?? []) ? (result.OrganizationConfigRules ?? []) : [result.OrganizationConfigRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrganizationConformancePackStatuses(params: { [K in keyof ParamsFrom<'describeOrganizationConformancePackStatuses', { next?: string, limit?: number }>]: ParamsFrom<'describeOrganizationConformancePackStatuses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOrganizationConformancePackStatuses'>]-?: ReturnTypeFrom<'describeOrganizationConformancePackStatuses'>[K]}['OrganizationConformancePackStatuses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConformancePackStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeOrganizationConformancePackStatuses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeOrganizationConformancePackStatuses' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OrganizationConformancePackStatuses ?? []) ? (result.OrganizationConformancePackStatuses ?? []) : [result.OrganizationConformancePackStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOrganizationConformancePacks(params: { [K in keyof ParamsFrom<'describeOrganizationConformancePacks', { next?: string, limit?: number }>]: ParamsFrom<'describeOrganizationConformancePacks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOrganizationConformancePacks'>]-?: ReturnTypeFrom<'describeOrganizationConformancePacks'>[K]}['OrganizationConformancePacks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConformancePacks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeOrganizationConformancePacks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeOrganizationConformancePacks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OrganizationConformancePacks ?? []) ? (result.OrganizationConformancePacks ?? []) : [result.OrganizationConformancePacks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePendingAggregationRequests(params: { [K in keyof ParamsFrom<'describePendingAggregationRequests', { next?: string, limit?: number }>]: ParamsFrom<'describePendingAggregationRequests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePendingAggregationRequests'>]-?: ReturnTypeFrom<'describePendingAggregationRequests'>[K]}['PendingAggregationRequests'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"PendingAggregationRequests"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describePendingAggregationRequests({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePendingAggregationRequests' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PendingAggregationRequests ?? []) ? (result.PendingAggregationRequests ?? []) : [result.PendingAggregationRequests]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeRemediationConfigurations: (params: RawParamsFrom<'describeRemediationConfigurations'>) => Promise<ReturnTypeFrom<'describeRemediationConfigurations'>>  = async params => {
  // undefined
    return this.client.describeRemediationConfigurations(params as any).promise();
  }

  describeRemediationExceptions: (params: RawParamsFrom<'describeRemediationExceptions'>) => Promise<ReturnTypeFrom<'describeRemediationExceptions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeRemediationExceptions(params as any).promise();
  }

  async describeRemediationExecutionStatus(params: { [K in keyof ParamsFrom<'describeRemediationExecutionStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeRemediationExecutionStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRemediationExecutionStatus'>]-?: ReturnTypeFrom<'describeRemediationExecutionStatus'>[K]}['RemediationExecutionStatuses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"RemediationExecutionStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeRemediationExecutionStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeRemediationExecutionStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RemediationExecutionStatuses ?? []) ? (result.RemediationExecutionStatuses ?? []) : [result.RemediationExecutionStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRetentionConfigurations(params: { [K in keyof ParamsFrom<'describeRetentionConfigurations', { next?: string }>]: ParamsFrom<'describeRetentionConfigurations', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRetentionConfigurations'>]-?: ReturnTypeFrom<'describeRetentionConfigurations'>[K]}['RetentionConfigurations'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"RetentionConfigurations"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeRetentionConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeRetentionConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RetentionConfigurations ?? []) ? (result.RetentionConfigurations ?? []) : [result.RetentionConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getAggregateComplianceDetailsByConfigRule(params: { [K in keyof ParamsFrom<'getAggregateComplianceDetailsByConfigRule', { next?: string, limit?: number }>]: ParamsFrom<'getAggregateComplianceDetailsByConfigRule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getAggregateComplianceDetailsByConfigRule'>]-?: ReturnTypeFrom<'getAggregateComplianceDetailsByConfigRule'>[K]}['AggregateEvaluationResults'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"AggregateEvaluationResults"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getAggregateComplianceDetailsByConfigRule({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getAggregateComplianceDetailsByConfigRule' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AggregateEvaluationResults ?? []) ? (result.AggregateEvaluationResults ?? []) : [result.AggregateEvaluationResults]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getAggregateConfigRuleComplianceSummary: (params: RawParamsFrom<'getAggregateConfigRuleComplianceSummary'>) => Promise<ReturnTypeFrom<'getAggregateConfigRuleComplianceSummary'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.getAggregateConfigRuleComplianceSummary(params as any).promise();
  }

  getAggregateConformancePackComplianceSummary: (params: RawParamsFrom<'getAggregateConformancePackComplianceSummary'>) => Promise<ReturnTypeFrom<'getAggregateConformancePackComplianceSummary'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.getAggregateConformancePackComplianceSummary(params as any).promise();
  }

  getAggregateDiscoveredResourceCounts: (params: RawParamsFrom<'getAggregateDiscoveredResourceCounts'>) => Promise<ReturnTypeFrom<'getAggregateDiscoveredResourceCounts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.getAggregateDiscoveredResourceCounts(params as any).promise();
  }

  getAggregateResourceConfig: (params: RawParamsFrom<'getAggregateResourceConfig'>) => Promise<ReturnTypeFrom<'getAggregateResourceConfig'>>  = async params => {
  // undefined
    return this.client.getAggregateResourceConfig(params as any).promise();
  }

  async getComplianceDetailsByConfigRule(params: { [K in keyof ParamsFrom<'getComplianceDetailsByConfigRule', { next?: string, limit?: number }>]: ParamsFrom<'getComplianceDetailsByConfigRule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getComplianceDetailsByConfigRule'>]-?: ReturnTypeFrom<'getComplianceDetailsByConfigRule'>[K]}['EvaluationResults'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"EvaluationResults"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getComplianceDetailsByConfigRule({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getComplianceDetailsByConfigRule' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EvaluationResults ?? []) ? (result.EvaluationResults ?? []) : [result.EvaluationResults]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getComplianceDetailsByResource(params: { [K in keyof ParamsFrom<'getComplianceDetailsByResource', { next?: string }>]: ParamsFrom<'getComplianceDetailsByResource', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getComplianceDetailsByResource'>]-?: ReturnTypeFrom<'getComplianceDetailsByResource'>[K]}['EvaluationResults'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"EvaluationResults"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getComplianceDetailsByResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getComplianceDetailsByResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EvaluationResults ?? []) ? (result.EvaluationResults ?? []) : [result.EvaluationResults]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getComplianceSummaryByConfigRule: (params: RawParamsFrom<'getComplianceSummaryByConfigRule'>) => Promise<ReturnTypeFrom<'getComplianceSummaryByConfigRule'>>  = async params => {
  // undefined
    return this.client.getComplianceSummaryByConfigRule(params as any).promise();
  }

  getComplianceSummaryByResourceType: (params: RawParamsFrom<'getComplianceSummaryByResourceType'>) => Promise<ReturnTypeFrom<'getComplianceSummaryByResourceType'>>  = async params => {
  // undefined
    return this.client.getComplianceSummaryByResourceType(params as any).promise();
  }

  getConformancePackComplianceDetails: (params: RawParamsFrom<'getConformancePackComplianceDetails'>) => Promise<ReturnTypeFrom<'getConformancePackComplianceDetails'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.getConformancePackComplianceDetails(params as any).promise();
  }

  async getConformancePackComplianceSummary(params: { [K in keyof ParamsFrom<'getConformancePackComplianceSummary', { next?: string, limit?: number }>]: ParamsFrom<'getConformancePackComplianceSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getConformancePackComplianceSummary'>]-?: ReturnTypeFrom<'getConformancePackComplianceSummary'>[K]}['ConformancePackComplianceSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ConformancePackComplianceSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getConformancePackComplianceSummary({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getConformancePackComplianceSummary' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ConformancePackComplianceSummaryList ?? []) ? (result.ConformancePackComplianceSummaryList ?? []) : [result.ConformancePackComplianceSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getCustomRulePolicy: (params: RawParamsFrom<'getCustomRulePolicy'>) => Promise<ReturnTypeFrom<'getCustomRulePolicy'>>  = async params => {
  // undefined
    return this.client.getCustomRulePolicy(params as any).promise();
  }

  getDiscoveredResourceCounts: (params: RawParamsFrom<'getDiscoveredResourceCounts'>) => Promise<ReturnTypeFrom<'getDiscoveredResourceCounts'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken"}
    return this.client.getDiscoveredResourceCounts(params as any).promise();
  }

  async getOrganizationConfigRuleDetailedStatus(params: { [K in keyof ParamsFrom<'getOrganizationConfigRuleDetailedStatus', { next?: string, limit?: number }>]: ParamsFrom<'getOrganizationConfigRuleDetailedStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getOrganizationConfigRuleDetailedStatus'>]-?: ReturnTypeFrom<'getOrganizationConfigRuleDetailedStatus'>[K]}['OrganizationConfigRuleDetailedStatus'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConfigRuleDetailedStatus"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getOrganizationConfigRuleDetailedStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getOrganizationConfigRuleDetailedStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OrganizationConfigRuleDetailedStatus ?? []) ? (result.OrganizationConfigRuleDetailedStatus ?? []) : [result.OrganizationConfigRuleDetailedStatus]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getOrganizationConformancePackDetailedStatus(params: { [K in keyof ParamsFrom<'getOrganizationConformancePackDetailedStatus', { next?: string, limit?: number }>]: ParamsFrom<'getOrganizationConformancePackDetailedStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getOrganizationConformancePackDetailedStatus'>]-?: ReturnTypeFrom<'getOrganizationConformancePackDetailedStatus'>[K]}['OrganizationConformancePackDetailedStatuses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"OrganizationConformancePackDetailedStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.getOrganizationConformancePackDetailedStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getOrganizationConformancePackDetailedStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OrganizationConformancePackDetailedStatuses ?? []) ? (result.OrganizationConformancePackDetailedStatuses ?? []) : [result.OrganizationConformancePackDetailedStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getOrganizationCustomRulePolicy: (params: RawParamsFrom<'getOrganizationCustomRulePolicy'>) => Promise<ReturnTypeFrom<'getOrganizationCustomRulePolicy'>>  = async params => {
  // undefined
    return this.client.getOrganizationCustomRulePolicy(params as any).promise();
  }

  async getResourceConfigHistory(params: { [K in keyof ParamsFrom<'getResourceConfigHistory', { next?: string, limit?: number }>]: ParamsFrom<'getResourceConfigHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getResourceConfigHistory'>]-?: ReturnTypeFrom<'getResourceConfigHistory'>[K]}['configurationItems'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"configurationItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getResourceConfigHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getResourceConfigHistory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.configurationItems ?? []) ? (result.configurationItems ?? []) : [result.configurationItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getResourceEvaluationSummary: (params: RawParamsFrom<'getResourceEvaluationSummary'>) => Promise<ReturnTypeFrom<'getResourceEvaluationSummary'>>  = async params => {
  // undefined
    return this.client.getResourceEvaluationSummary(params as any).promise();
  }

  getStoredQuery: (params: RawParamsFrom<'getStoredQuery'>) => Promise<ReturnTypeFrom<'getStoredQuery'>>  = async params => {
  // undefined
    return this.client.getStoredQuery(params as any).promise();
  }

  async listAggregateDiscoveredResources(params: { [K in keyof ParamsFrom<'listAggregateDiscoveredResources', { next?: string, limit?: number }>]: ParamsFrom<'listAggregateDiscoveredResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAggregateDiscoveredResources'>]-?: ReturnTypeFrom<'listAggregateDiscoveredResources'>[K]}['ResourceIdentifiers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ResourceIdentifiers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listAggregateDiscoveredResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAggregateDiscoveredResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ResourceIdentifiers ?? []) ? (result.ResourceIdentifiers ?? []) : [result.ResourceIdentifiers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listConformancePackComplianceScores: (params: RawParamsFrom<'listConformancePackComplianceScores'>) => Promise<ReturnTypeFrom<'listConformancePackComplianceScores'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.listConformancePackComplianceScores(params as any).promise();
  }

  async listDiscoveredResources(params: { [K in keyof ParamsFrom<'listDiscoveredResources', { next?: string, limit?: number }>]: ParamsFrom<'listDiscoveredResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDiscoveredResources'>]-?: ReturnTypeFrom<'listDiscoveredResources'>[K]}['resourceIdentifiers'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"resourceIdentifiers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listDiscoveredResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDiscoveredResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.resourceIdentifiers ?? []) ? (result.resourceIdentifiers ?? []) : [result.resourceIdentifiers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceEvaluations(params: { [K in keyof ParamsFrom<'listResourceEvaluations', { next?: string, limit?: number }>]: ParamsFrom<'listResourceEvaluations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceEvaluations'>]-?: ReturnTypeFrom<'listResourceEvaluations'>[K]}['ResourceEvaluations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ResourceEvaluations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listResourceEvaluations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResourceEvaluations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ResourceEvaluations ?? []) ? (result.ResourceEvaluations ?? []) : [result.ResourceEvaluations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listStoredQueries: (params: RawParamsFrom<'listStoredQueries'>) => Promise<ReturnTypeFrom<'listStoredQueries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listStoredQueries(params as any).promise();
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putAggregationAuthorization: (params: RawParamsFrom<'putAggregationAuthorization'>) => Promise<ReturnTypeFrom<'putAggregationAuthorization'>>  = async params => {
  // undefined
    return this.client.putAggregationAuthorization(params as any).promise();
  }

  putConfigRule: (params: RawParamsFrom<'putConfigRule'>) => Promise<ReturnTypeFrom<'putConfigRule'>>  = async params => {
  // undefined
    return this.client.putConfigRule(params as any).promise();
  }

  putConfigurationAggregator: (params: RawParamsFrom<'putConfigurationAggregator'>) => Promise<ReturnTypeFrom<'putConfigurationAggregator'>>  = async params => {
  // undefined
    return this.client.putConfigurationAggregator(params as any).promise();
  }

  putConfigurationRecorder: (params: RawParamsFrom<'putConfigurationRecorder'>) => Promise<ReturnTypeFrom<'putConfigurationRecorder'>>  = async params => {
  // undefined
    return this.client.putConfigurationRecorder(params as any).promise();
  }

  putConformancePack: (params: RawParamsFrom<'putConformancePack'>) => Promise<ReturnTypeFrom<'putConformancePack'>>  = async params => {
  // undefined
    return this.client.putConformancePack(params as any).promise();
  }

  putDeliveryChannel: (params: RawParamsFrom<'putDeliveryChannel'>) => Promise<ReturnTypeFrom<'putDeliveryChannel'>>  = async params => {
  // undefined
    return this.client.putDeliveryChannel(params as any).promise();
  }

  putEvaluations: (params: RawParamsFrom<'putEvaluations'>) => Promise<ReturnTypeFrom<'putEvaluations'>>  = async params => {
  // undefined
    return this.client.putEvaluations(params as any).promise();
  }

  putExternalEvaluation: (params: RawParamsFrom<'putExternalEvaluation'>) => Promise<ReturnTypeFrom<'putExternalEvaluation'>>  = async params => {
  // undefined
    return this.client.putExternalEvaluation(params as any).promise();
  }

  putOrganizationConfigRule: (params: RawParamsFrom<'putOrganizationConfigRule'>) => Promise<ReturnTypeFrom<'putOrganizationConfigRule'>>  = async params => {
  // undefined
    return this.client.putOrganizationConfigRule(params as any).promise();
  }

  putOrganizationConformancePack: (params: RawParamsFrom<'putOrganizationConformancePack'>) => Promise<ReturnTypeFrom<'putOrganizationConformancePack'>>  = async params => {
  // undefined
    return this.client.putOrganizationConformancePack(params as any).promise();
  }

  putRemediationConfigurations: (params: RawParamsFrom<'putRemediationConfigurations'>) => Promise<ReturnTypeFrom<'putRemediationConfigurations'>>  = async params => {
  // undefined
    return this.client.putRemediationConfigurations(params as any).promise();
  }

  putRemediationExceptions: (params: RawParamsFrom<'putRemediationExceptions'>) => Promise<ReturnTypeFrom<'putRemediationExceptions'>>  = async params => {
  // undefined
    return this.client.putRemediationExceptions(params as any).promise();
  }

  putResourceConfig: (params: RawParamsFrom<'putResourceConfig'>) => Promise<ReturnTypeFrom<'putResourceConfig'>>  = async params => {
  // undefined
    return this.client.putResourceConfig(params as any).promise();
  }

  putRetentionConfiguration: (params: RawParamsFrom<'putRetentionConfiguration'>) => Promise<ReturnTypeFrom<'putRetentionConfiguration'>>  = async params => {
  // undefined
    return this.client.putRetentionConfiguration(params as any).promise();
  }

  putStoredQuery: (params: RawParamsFrom<'putStoredQuery'>) => Promise<ReturnTypeFrom<'putStoredQuery'>>  = async params => {
  // undefined
    return this.client.putStoredQuery(params as any).promise();
  }

  async selectAggregateResourceConfig(params: { [K in keyof ParamsFrom<'selectAggregateResourceConfig', { next?: string, limit?: number }>]: ParamsFrom<'selectAggregateResourceConfig', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'selectAggregateResourceConfig'>]-?: ReturnTypeFrom<'selectAggregateResourceConfig'>[K]}['Results'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.selectAggregateResourceConfig({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'selectAggregateResourceConfig' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Results ?? []) ? (result.Results ?? []) : [result.Results]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async selectResourceConfig(params: { [K in keyof ParamsFrom<'selectResourceConfig', { next?: string, limit?: number }>]: ParamsFrom<'selectResourceConfig', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'selectResourceConfig'>]-?: ReturnTypeFrom<'selectResourceConfig'>[K]}['Results'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.selectResourceConfig({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'selectResourceConfig' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Results ?? []) ? (result.Results ?? []) : [result.Results]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startConfigRulesEvaluation: (params: RawParamsFrom<'startConfigRulesEvaluation'>) => Promise<ReturnTypeFrom<'startConfigRulesEvaluation'>>  = async params => {
  // undefined
    return this.client.startConfigRulesEvaluation(params as any).promise();
  }

  startConfigurationRecorder: (params: RawParamsFrom<'startConfigurationRecorder'>) => Promise<ReturnTypeFrom<'startConfigurationRecorder'>>  = async params => {
  // undefined
    return this.client.startConfigurationRecorder(params as any).promise();
  }

  startRemediationExecution: (params: RawParamsFrom<'startRemediationExecution'>) => Promise<ReturnTypeFrom<'startRemediationExecution'>>  = async params => {
  // undefined
    return this.client.startRemediationExecution(params as any).promise();
  }

  startResourceEvaluation: (params: RawParamsFrom<'startResourceEvaluation'>) => Promise<ReturnTypeFrom<'startResourceEvaluation'>>  = async params => {
  // undefined
    return this.client.startResourceEvaluation(params as any).promise();
  }

  stopConfigurationRecorder: (params: RawParamsFrom<'stopConfigurationRecorder'>) => Promise<ReturnTypeFrom<'stopConfigurationRecorder'>>  = async params => {
  // undefined
    return this.client.stopConfigurationRecorder(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSConfigService): ConfigService {
    return new ConfigService(client) as any;
  }
  
  static client(options?: AWSConfigService.Types.ClientConfiguration): ConfigService {
    return new ConfigService(new AWSConfigService(options)) as any;
  }
}  
