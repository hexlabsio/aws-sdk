import { Request, SES as AWSSES } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSES> = AWSSES[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSES> = AWSSES[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSES[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSES, Extras> = AWSSES[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSES> = AWSSES[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SES {
  private constructor(private readonly client: AWSSES) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'email' as const;
  public readonly global = false as const;
  public readonly category = 'Customer Engagement' as const;
  public readonly topLevelCalls = ["listCustomVerificationEmailTemplates","listIdentities","listVerifiedEmailAddresses"] as const;
  
  cloneReceiptRuleSet: (params: RawParamsFrom<'cloneReceiptRuleSet'>) => Promise<ReturnTypeFrom<'cloneReceiptRuleSet'>>  = async params => {
  // undefined
    return this.client.cloneReceiptRuleSet(params as any).promise();
  }

  createConfigurationSet: (params: RawParamsFrom<'createConfigurationSet'>) => Promise<ReturnTypeFrom<'createConfigurationSet'>>  = async params => {
  // undefined
    return this.client.createConfigurationSet(params as any).promise();
  }

  createConfigurationSetEventDestination: (params: RawParamsFrom<'createConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'createConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.createConfigurationSetEventDestination(params as any).promise();
  }

  createConfigurationSetTrackingOptions: (params: RawParamsFrom<'createConfigurationSetTrackingOptions'>) => Promise<ReturnTypeFrom<'createConfigurationSetTrackingOptions'>>  = async params => {
  // undefined
    return this.client.createConfigurationSetTrackingOptions(params as any).promise();
  }

  createCustomVerificationEmailTemplate: (params: RawParamsFrom<'createCustomVerificationEmailTemplate'>) => Promise<ReturnTypeFrom<'createCustomVerificationEmailTemplate'>>  = async params => {
  // undefined
    return this.client.createCustomVerificationEmailTemplate(params as any).promise();
  }

  createReceiptFilter: (params: RawParamsFrom<'createReceiptFilter'>) => Promise<ReturnTypeFrom<'createReceiptFilter'>>  = async params => {
  // undefined
    return this.client.createReceiptFilter(params as any).promise();
  }

  createReceiptRule: (params: RawParamsFrom<'createReceiptRule'>) => Promise<ReturnTypeFrom<'createReceiptRule'>>  = async params => {
  // undefined
    return this.client.createReceiptRule(params as any).promise();
  }

  createReceiptRuleSet: (params: RawParamsFrom<'createReceiptRuleSet'>) => Promise<ReturnTypeFrom<'createReceiptRuleSet'>>  = async params => {
  // undefined
    return this.client.createReceiptRuleSet(params as any).promise();
  }

  createTemplate: (params: RawParamsFrom<'createTemplate'>) => Promise<ReturnTypeFrom<'createTemplate'>>  = async params => {
  // undefined
    return this.client.createTemplate(params as any).promise();
  }

  deleteConfigurationSet: (params: RawParamsFrom<'deleteConfigurationSet'>) => Promise<ReturnTypeFrom<'deleteConfigurationSet'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSet(params as any).promise();
  }

  deleteConfigurationSetEventDestination: (params: RawParamsFrom<'deleteConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'deleteConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSetEventDestination(params as any).promise();
  }

  deleteConfigurationSetTrackingOptions: (params: RawParamsFrom<'deleteConfigurationSetTrackingOptions'>) => Promise<ReturnTypeFrom<'deleteConfigurationSetTrackingOptions'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSetTrackingOptions(params as any).promise();
  }

  deleteCustomVerificationEmailTemplate: (params: RawParamsFrom<'deleteCustomVerificationEmailTemplate'>) => Promise<ReturnTypeFrom<'deleteCustomVerificationEmailTemplate'>>  = async params => {
  // undefined
    return this.client.deleteCustomVerificationEmailTemplate(params as any).promise();
  }

  deleteIdentity: (params: RawParamsFrom<'deleteIdentity'>) => Promise<ReturnTypeFrom<'deleteIdentity'>>  = async params => {
  // undefined
    return this.client.deleteIdentity(params as any).promise();
  }

  deleteIdentityPolicy: (params: RawParamsFrom<'deleteIdentityPolicy'>) => Promise<ReturnTypeFrom<'deleteIdentityPolicy'>>  = async params => {
  // undefined
    return this.client.deleteIdentityPolicy(params as any).promise();
  }

  deleteReceiptFilter: (params: RawParamsFrom<'deleteReceiptFilter'>) => Promise<ReturnTypeFrom<'deleteReceiptFilter'>>  = async params => {
  // undefined
    return this.client.deleteReceiptFilter(params as any).promise();
  }

  deleteReceiptRule: (params: RawParamsFrom<'deleteReceiptRule'>) => Promise<ReturnTypeFrom<'deleteReceiptRule'>>  = async params => {
  // undefined
    return this.client.deleteReceiptRule(params as any).promise();
  }

  deleteReceiptRuleSet: (params: RawParamsFrom<'deleteReceiptRuleSet'>) => Promise<ReturnTypeFrom<'deleteReceiptRuleSet'>>  = async params => {
  // undefined
    return this.client.deleteReceiptRuleSet(params as any).promise();
  }

  deleteTemplate: (params: RawParamsFrom<'deleteTemplate'>) => Promise<ReturnTypeFrom<'deleteTemplate'>>  = async params => {
  // undefined
    return this.client.deleteTemplate(params as any).promise();
  }

  deleteVerifiedEmailAddress: (params: RawParamsFrom<'deleteVerifiedEmailAddress'>) => Promise<ReturnTypeFrom<'deleteVerifiedEmailAddress'>>  = async params => {
  // undefined
    return this.client.deleteVerifiedEmailAddress(params as any).promise();
  }

  describeActiveReceiptRuleSet: (params: RawParamsFrom<'describeActiveReceiptRuleSet'>) => Promise<ReturnTypeFrom<'describeActiveReceiptRuleSet'>>  = async params => {
  // undefined
    return this.client.describeActiveReceiptRuleSet(params as any).promise();
  }

  describeConfigurationSet: (params: RawParamsFrom<'describeConfigurationSet'>) => Promise<ReturnTypeFrom<'describeConfigurationSet'>>  = async params => {
  // undefined
    return this.client.describeConfigurationSet(params as any).promise();
  }

  describeReceiptRule: (params: RawParamsFrom<'describeReceiptRule'>) => Promise<ReturnTypeFrom<'describeReceiptRule'>>  = async params => {
  // undefined
    return this.client.describeReceiptRule(params as any).promise();
  }

  describeReceiptRuleSet: (params: RawParamsFrom<'describeReceiptRuleSet'>) => Promise<ReturnTypeFrom<'describeReceiptRuleSet'>>  = async params => {
  // undefined
    return this.client.describeReceiptRuleSet(params as any).promise();
  }

  getAccountSendingEnabled: (params: RawParamsFrom<'getAccountSendingEnabled'>) => Promise<ReturnTypeFrom<'getAccountSendingEnabled'>>  = async params => {
  // undefined
    return this.client.getAccountSendingEnabled(params as any).promise();
  }

  getCustomVerificationEmailTemplate: (params: RawParamsFrom<'getCustomVerificationEmailTemplate'>) => Promise<ReturnTypeFrom<'getCustomVerificationEmailTemplate'>>  = async params => {
  // undefined
    return this.client.getCustomVerificationEmailTemplate(params as any).promise();
  }

  getIdentityDkimAttributes: (params: RawParamsFrom<'getIdentityDkimAttributes'>) => Promise<ReturnTypeFrom<'getIdentityDkimAttributes'>>  = async params => {
  // undefined
    return this.client.getIdentityDkimAttributes(params as any).promise();
  }

  getIdentityMailFromDomainAttributes: (params: RawParamsFrom<'getIdentityMailFromDomainAttributes'>) => Promise<ReturnTypeFrom<'getIdentityMailFromDomainAttributes'>>  = async params => {
  // undefined
    return this.client.getIdentityMailFromDomainAttributes(params as any).promise();
  }

  getIdentityNotificationAttributes: (params: RawParamsFrom<'getIdentityNotificationAttributes'>) => Promise<ReturnTypeFrom<'getIdentityNotificationAttributes'>>  = async params => {
  // undefined
    return this.client.getIdentityNotificationAttributes(params as any).promise();
  }

  getIdentityPolicies: (params: RawParamsFrom<'getIdentityPolicies'>) => Promise<ReturnTypeFrom<'getIdentityPolicies'>>  = async params => {
  // undefined
    return this.client.getIdentityPolicies(params as any).promise();
  }

  getIdentityVerificationAttributes: (params: RawParamsFrom<'getIdentityVerificationAttributes'>) => Promise<ReturnTypeFrom<'getIdentityVerificationAttributes'>>  = async params => {
  // undefined
    return this.client.getIdentityVerificationAttributes(params as any).promise();
  }

  getSendQuota: (params: RawParamsFrom<'getSendQuota'>) => Promise<ReturnTypeFrom<'getSendQuota'>>  = async params => {
  // undefined
    return this.client.getSendQuota(params as any).promise();
  }

  getSendStatistics: (params: RawParamsFrom<'getSendStatistics'>) => Promise<ReturnTypeFrom<'getSendStatistics'>>  = async params => {
  // undefined
    return this.client.getSendStatistics(params as any).promise();
  }

  getTemplate: (params: RawParamsFrom<'getTemplate'>) => Promise<ReturnTypeFrom<'getTemplate'>>  = async params => {
  // undefined
    return this.client.getTemplate(params as any).promise();
  }

  listConfigurationSets: (params: RawParamsFrom<'listConfigurationSets'>) => Promise<ReturnTypeFrom<'listConfigurationSets'>>  = async params => {
  // undefined
    return this.client.listConfigurationSets(params as any).promise();
  }

  listCustomVerificationEmailTemplates: (params: RawParamsFrom<'listCustomVerificationEmailTemplates'>) => Promise<ReturnTypeFrom<'listCustomVerificationEmailTemplates'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCustomVerificationEmailTemplates(params as any).promise();
  }

  async listIdentities(params: { [K in keyof ParamsFrom<'listIdentities', { next?: string, limit?: number }>]: ParamsFrom<'listIdentities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIdentities'>]-?: ReturnTypeFrom<'listIdentities'>[K]}['Identities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken","resultKey":"Identities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listIdentities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Identities ?? []) ? (result.Identities ?? []) : [result.Identities]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listIdentityPolicies: (params: RawParamsFrom<'listIdentityPolicies'>) => Promise<ReturnTypeFrom<'listIdentityPolicies'>>  = async params => {
  // undefined
    return this.client.listIdentityPolicies(params as any).promise();
  }

  listReceiptFilters: (params: RawParamsFrom<'listReceiptFilters'>) => Promise<ReturnTypeFrom<'listReceiptFilters'>>  = async params => {
  // undefined
    return this.client.listReceiptFilters(params as any).promise();
  }

  listReceiptRuleSets: (params: RawParamsFrom<'listReceiptRuleSets'>) => Promise<ReturnTypeFrom<'listReceiptRuleSets'>>  = async params => {
  // undefined
    return this.client.listReceiptRuleSets(params as any).promise();
  }

  listTemplates: (params: RawParamsFrom<'listTemplates'>) => Promise<ReturnTypeFrom<'listTemplates'>>  = async params => {
  // undefined
    return this.client.listTemplates(params as any).promise();
  }

  async listVerifiedEmailAddresses(params: { [K in keyof ParamsFrom<'listVerifiedEmailAddresses', {}>]: ParamsFrom<'listVerifiedEmailAddresses', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVerifiedEmailAddresses'>]-?: ReturnTypeFrom<'listVerifiedEmailAddresses'>[K]}['VerifiedEmailAddresses'], undefined>}> {
    // {"resultKey":"VerifiedEmailAddresses"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.listVerifiedEmailAddresses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.VerifiedEmailAddresses ?? []) ? (result.VerifiedEmailAddresses ?? []) : [result.VerifiedEmailAddresses]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putConfigurationSetDeliveryOptions: (params: RawParamsFrom<'putConfigurationSetDeliveryOptions'>) => Promise<ReturnTypeFrom<'putConfigurationSetDeliveryOptions'>>  = async params => {
  // undefined
    return this.client.putConfigurationSetDeliveryOptions(params as any).promise();
  }

  putIdentityPolicy: (params: RawParamsFrom<'putIdentityPolicy'>) => Promise<ReturnTypeFrom<'putIdentityPolicy'>>  = async params => {
  // undefined
    return this.client.putIdentityPolicy(params as any).promise();
  }

  reorderReceiptRuleSet: (params: RawParamsFrom<'reorderReceiptRuleSet'>) => Promise<ReturnTypeFrom<'reorderReceiptRuleSet'>>  = async params => {
  // undefined
    return this.client.reorderReceiptRuleSet(params as any).promise();
  }

  sendBounce: (params: RawParamsFrom<'sendBounce'>) => Promise<ReturnTypeFrom<'sendBounce'>>  = async params => {
  // undefined
    return this.client.sendBounce(params as any).promise();
  }

  sendBulkTemplatedEmail: (params: RawParamsFrom<'sendBulkTemplatedEmail'>) => Promise<ReturnTypeFrom<'sendBulkTemplatedEmail'>>  = async params => {
  // undefined
    return this.client.sendBulkTemplatedEmail(params as any).promise();
  }

  sendCustomVerificationEmail: (params: RawParamsFrom<'sendCustomVerificationEmail'>) => Promise<ReturnTypeFrom<'sendCustomVerificationEmail'>>  = async params => {
  // undefined
    return this.client.sendCustomVerificationEmail(params as any).promise();
  }

  sendEmail: (params: RawParamsFrom<'sendEmail'>) => Promise<ReturnTypeFrom<'sendEmail'>>  = async params => {
  // undefined
    return this.client.sendEmail(params as any).promise();
  }

  sendRawEmail: (params: RawParamsFrom<'sendRawEmail'>) => Promise<ReturnTypeFrom<'sendRawEmail'>>  = async params => {
  // undefined
    return this.client.sendRawEmail(params as any).promise();
  }

  sendTemplatedEmail: (params: RawParamsFrom<'sendTemplatedEmail'>) => Promise<ReturnTypeFrom<'sendTemplatedEmail'>>  = async params => {
  // undefined
    return this.client.sendTemplatedEmail(params as any).promise();
  }

  setActiveReceiptRuleSet: (params: RawParamsFrom<'setActiveReceiptRuleSet'>) => Promise<ReturnTypeFrom<'setActiveReceiptRuleSet'>>  = async params => {
  // undefined
    return this.client.setActiveReceiptRuleSet(params as any).promise();
  }

  setIdentityDkimEnabled: (params: RawParamsFrom<'setIdentityDkimEnabled'>) => Promise<ReturnTypeFrom<'setIdentityDkimEnabled'>>  = async params => {
  // undefined
    return this.client.setIdentityDkimEnabled(params as any).promise();
  }

  setIdentityFeedbackForwardingEnabled: (params: RawParamsFrom<'setIdentityFeedbackForwardingEnabled'>) => Promise<ReturnTypeFrom<'setIdentityFeedbackForwardingEnabled'>>  = async params => {
  // undefined
    return this.client.setIdentityFeedbackForwardingEnabled(params as any).promise();
  }

  setIdentityHeadersInNotificationsEnabled: (params: RawParamsFrom<'setIdentityHeadersInNotificationsEnabled'>) => Promise<ReturnTypeFrom<'setIdentityHeadersInNotificationsEnabled'>>  = async params => {
  // undefined
    return this.client.setIdentityHeadersInNotificationsEnabled(params as any).promise();
  }

  setIdentityMailFromDomain: (params: RawParamsFrom<'setIdentityMailFromDomain'>) => Promise<ReturnTypeFrom<'setIdentityMailFromDomain'>>  = async params => {
  // undefined
    return this.client.setIdentityMailFromDomain(params as any).promise();
  }

  setIdentityNotificationTopic: (params: RawParamsFrom<'setIdentityNotificationTopic'>) => Promise<ReturnTypeFrom<'setIdentityNotificationTopic'>>  = async params => {
  // undefined
    return this.client.setIdentityNotificationTopic(params as any).promise();
  }

  setReceiptRulePosition: (params: RawParamsFrom<'setReceiptRulePosition'>) => Promise<ReturnTypeFrom<'setReceiptRulePosition'>>  = async params => {
  // undefined
    return this.client.setReceiptRulePosition(params as any).promise();
  }

  testRenderTemplate: (params: RawParamsFrom<'testRenderTemplate'>) => Promise<ReturnTypeFrom<'testRenderTemplate'>>  = async params => {
  // undefined
    return this.client.testRenderTemplate(params as any).promise();
  }

  updateAccountSendingEnabled: (params: RawParamsFrom<'updateAccountSendingEnabled'>) => Promise<ReturnTypeFrom<'updateAccountSendingEnabled'>>  = async params => {
  // undefined
    return this.client.updateAccountSendingEnabled(params as any).promise();
  }

  updateConfigurationSetEventDestination: (params: RawParamsFrom<'updateConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'updateConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.updateConfigurationSetEventDestination(params as any).promise();
  }

  updateConfigurationSetReputationMetricsEnabled: (params: RawParamsFrom<'updateConfigurationSetReputationMetricsEnabled'>) => Promise<ReturnTypeFrom<'updateConfigurationSetReputationMetricsEnabled'>>  = async params => {
  // undefined
    return this.client.updateConfigurationSetReputationMetricsEnabled(params as any).promise();
  }

  updateConfigurationSetSendingEnabled: (params: RawParamsFrom<'updateConfigurationSetSendingEnabled'>) => Promise<ReturnTypeFrom<'updateConfigurationSetSendingEnabled'>>  = async params => {
  // undefined
    return this.client.updateConfigurationSetSendingEnabled(params as any).promise();
  }

  updateConfigurationSetTrackingOptions: (params: RawParamsFrom<'updateConfigurationSetTrackingOptions'>) => Promise<ReturnTypeFrom<'updateConfigurationSetTrackingOptions'>>  = async params => {
  // undefined
    return this.client.updateConfigurationSetTrackingOptions(params as any).promise();
  }

  updateCustomVerificationEmailTemplate: (params: RawParamsFrom<'updateCustomVerificationEmailTemplate'>) => Promise<ReturnTypeFrom<'updateCustomVerificationEmailTemplate'>>  = async params => {
  // undefined
    return this.client.updateCustomVerificationEmailTemplate(params as any).promise();
  }

  updateReceiptRule: (params: RawParamsFrom<'updateReceiptRule'>) => Promise<ReturnTypeFrom<'updateReceiptRule'>>  = async params => {
  // undefined
    return this.client.updateReceiptRule(params as any).promise();
  }

  updateTemplate: (params: RawParamsFrom<'updateTemplate'>) => Promise<ReturnTypeFrom<'updateTemplate'>>  = async params => {
  // undefined
    return this.client.updateTemplate(params as any).promise();
  }

  verifyDomainDkim: (params: RawParamsFrom<'verifyDomainDkim'>) => Promise<ReturnTypeFrom<'verifyDomainDkim'>>  = async params => {
  // undefined
    return this.client.verifyDomainDkim(params as any).promise();
  }

  verifyDomainIdentity: (params: RawParamsFrom<'verifyDomainIdentity'>) => Promise<ReturnTypeFrom<'verifyDomainIdentity'>>  = async params => {
  // undefined
    return this.client.verifyDomainIdentity(params as any).promise();
  }

  verifyEmailAddress: (params: RawParamsFrom<'verifyEmailAddress'>) => Promise<ReturnTypeFrom<'verifyEmailAddress'>>  = async params => {
  // undefined
    return this.client.verifyEmailAddress(params as any).promise();
  }

  verifyEmailIdentity: (params: RawParamsFrom<'verifyEmailIdentity'>) => Promise<ReturnTypeFrom<'verifyEmailIdentity'>>  = async params => {
  // undefined
    return this.client.verifyEmailIdentity(params as any).promise();
  }
  
  static fromClient(client: AWSSES): SES {
    return new SES(client) as any;
  }
  
  static client(options?: AWSSES.Types.ClientConfiguration): SES {
    return new SES(new AWSSES(options)) as any;
  }
}  
