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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'email';
    global: false;
    category: 'Customer Engagement'
    topLevelCalls: readonly ["listCustomVerificationEmailTemplates","listIdentities","listVerifiedEmailAddresses"];
    
  cloneReceiptRuleSet: FunctionTypeFrom<'cloneReceiptRuleSet'>;

  createConfigurationSet: FunctionTypeFrom<'createConfigurationSet'>;

  createConfigurationSetEventDestination: FunctionTypeFrom<'createConfigurationSetEventDestination'>;

  createConfigurationSetTrackingOptions: FunctionTypeFrom<'createConfigurationSetTrackingOptions'>;

  createCustomVerificationEmailTemplate: FunctionTypeFrom<'createCustomVerificationEmailTemplate'>;

  createReceiptFilter: FunctionTypeFrom<'createReceiptFilter'>;

  createReceiptRule: FunctionTypeFrom<'createReceiptRule'>;

  createReceiptRuleSet: FunctionTypeFrom<'createReceiptRuleSet'>;

  createTemplate: FunctionTypeFrom<'createTemplate'>;

  deleteConfigurationSet: FunctionTypeFrom<'deleteConfigurationSet'>;

  deleteConfigurationSetEventDestination: FunctionTypeFrom<'deleteConfigurationSetEventDestination'>;

  deleteConfigurationSetTrackingOptions: FunctionTypeFrom<'deleteConfigurationSetTrackingOptions'>;

  deleteCustomVerificationEmailTemplate: FunctionTypeFrom<'deleteCustomVerificationEmailTemplate'>;

  deleteIdentity: FunctionTypeFrom<'deleteIdentity'>;

  deleteIdentityPolicy: FunctionTypeFrom<'deleteIdentityPolicy'>;

  deleteReceiptFilter: FunctionTypeFrom<'deleteReceiptFilter'>;

  deleteReceiptRule: FunctionTypeFrom<'deleteReceiptRule'>;

  deleteReceiptRuleSet: FunctionTypeFrom<'deleteReceiptRuleSet'>;

  deleteTemplate: FunctionTypeFrom<'deleteTemplate'>;

  deleteVerifiedEmailAddress: FunctionTypeFrom<'deleteVerifiedEmailAddress'>;

  describeActiveReceiptRuleSet: FunctionTypeFrom<'describeActiveReceiptRuleSet'>;

  describeConfigurationSet: FunctionTypeFrom<'describeConfigurationSet'>;

  describeReceiptRule: FunctionTypeFrom<'describeReceiptRule'>;

  describeReceiptRuleSet: FunctionTypeFrom<'describeReceiptRuleSet'>;

  getAccountSendingEnabled: FunctionTypeFrom<'getAccountSendingEnabled'>;

  getCustomVerificationEmailTemplate: FunctionTypeFrom<'getCustomVerificationEmailTemplate'>;

  getIdentityDkimAttributes: FunctionTypeFrom<'getIdentityDkimAttributes'>;

  getIdentityMailFromDomainAttributes: FunctionTypeFrom<'getIdentityMailFromDomainAttributes'>;

  getIdentityNotificationAttributes: FunctionTypeFrom<'getIdentityNotificationAttributes'>;

  getIdentityPolicies: FunctionTypeFrom<'getIdentityPolicies'>;

  getIdentityVerificationAttributes: FunctionTypeFrom<'getIdentityVerificationAttributes'>;

  getSendQuota: FunctionTypeFrom<'getSendQuota'>;

  getSendStatistics: FunctionTypeFrom<'getSendStatistics'>;

  getTemplate: FunctionTypeFrom<'getTemplate'>;

  listConfigurationSets: FunctionTypeFrom<'listConfigurationSets'>;

  listCustomVerificationEmailTemplates: FunctionTypeFrom<'listCustomVerificationEmailTemplates'>;

  listIdentities(params: { [K in keyof Omit<ParamsFrom<'listIdentities', { next?: string, limit?: number }>, 'NextToken' | 'MaxItems'>]: ParamsFrom<'listIdentities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIdentities'>]-?: ReturnTypeFrom<'listIdentities'>[K]}['Identities'] }>
  listIdentities(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIdentities'>]-?: ReturnTypeFrom<'listIdentities'>[K]}['Identities'] }>;

  listIdentityPolicies: FunctionTypeFrom<'listIdentityPolicies'>;

  listReceiptFilters: FunctionTypeFrom<'listReceiptFilters'>;

  listReceiptRuleSets: FunctionTypeFrom<'listReceiptRuleSets'>;

  listTemplates: FunctionTypeFrom<'listTemplates'>;

  listVerifiedEmailAddresses: FunctionTypeFrom<'listVerifiedEmailAddresses'>;

  putConfigurationSetDeliveryOptions: FunctionTypeFrom<'putConfigurationSetDeliveryOptions'>;

  putIdentityPolicy: FunctionTypeFrom<'putIdentityPolicy'>;

  reorderReceiptRuleSet: FunctionTypeFrom<'reorderReceiptRuleSet'>;

  sendBounce: FunctionTypeFrom<'sendBounce'>;

  sendBulkTemplatedEmail: FunctionTypeFrom<'sendBulkTemplatedEmail'>;

  sendCustomVerificationEmail: FunctionTypeFrom<'sendCustomVerificationEmail'>;

  sendEmail: FunctionTypeFrom<'sendEmail'>;

  sendRawEmail: FunctionTypeFrom<'sendRawEmail'>;

  sendTemplatedEmail: FunctionTypeFrom<'sendTemplatedEmail'>;

  setActiveReceiptRuleSet: FunctionTypeFrom<'setActiveReceiptRuleSet'>;

  setIdentityDkimEnabled: FunctionTypeFrom<'setIdentityDkimEnabled'>;

  setIdentityFeedbackForwardingEnabled: FunctionTypeFrom<'setIdentityFeedbackForwardingEnabled'>;

  setIdentityHeadersInNotificationsEnabled: FunctionTypeFrom<'setIdentityHeadersInNotificationsEnabled'>;

  setIdentityMailFromDomain: FunctionTypeFrom<'setIdentityMailFromDomain'>;

  setIdentityNotificationTopic: FunctionTypeFrom<'setIdentityNotificationTopic'>;

  setReceiptRulePosition: FunctionTypeFrom<'setReceiptRulePosition'>;

  testRenderTemplate: FunctionTypeFrom<'testRenderTemplate'>;

  updateAccountSendingEnabled: FunctionTypeFrom<'updateAccountSendingEnabled'>;

  updateConfigurationSetEventDestination: FunctionTypeFrom<'updateConfigurationSetEventDestination'>;

  updateConfigurationSetReputationMetricsEnabled: FunctionTypeFrom<'updateConfigurationSetReputationMetricsEnabled'>;

  updateConfigurationSetSendingEnabled: FunctionTypeFrom<'updateConfigurationSetSendingEnabled'>;

  updateConfigurationSetTrackingOptions: FunctionTypeFrom<'updateConfigurationSetTrackingOptions'>;

  updateCustomVerificationEmailTemplate: FunctionTypeFrom<'updateCustomVerificationEmailTemplate'>;

  updateReceiptRule: FunctionTypeFrom<'updateReceiptRule'>;

  updateTemplate: FunctionTypeFrom<'updateTemplate'>;

  verifyDomainDkim: FunctionTypeFrom<'verifyDomainDkim'>;

  verifyDomainIdentity: FunctionTypeFrom<'verifyDomainIdentity'>;

  verifyEmailAddress: FunctionTypeFrom<'verifyEmailAddress'>;

  verifyEmailIdentity: FunctionTypeFrom<'verifyEmailIdentity'>
}
 
export class SES implements ClientType {
  private constructor(private readonly client: AWSSES) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'email';
  public readonly global = false;
  public readonly category = 'Customer Engagement';
  public readonly topLevelCalls = ["listCustomVerificationEmailTemplates","listIdentities","listVerifiedEmailAddresses"] as const;
  
  async cloneReceiptRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.cloneReceiptRuleSet(...args).promise()
  }

  async createConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSet(...args).promise()
  }

  async createConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSetEventDestination(...args).promise()
  }

  async createConfigurationSetTrackingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSetTrackingOptions(...args).promise()
  }

  async createCustomVerificationEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomVerificationEmailTemplate(...args).promise()
  }

  async createReceiptFilter(...args: any): Promise<any> {
  // undefined
    return this.client.createReceiptFilter(...args).promise()
  }

  async createReceiptRule(...args: any): Promise<any> {
  // undefined
    return this.client.createReceiptRule(...args).promise()
  }

  async createReceiptRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.createReceiptRuleSet(...args).promise()
  }

  async createTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createTemplate(...args).promise()
  }

  async deleteConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSet(...args).promise()
  }

  async deleteConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSetEventDestination(...args).promise()
  }

  async deleteConfigurationSetTrackingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSetTrackingOptions(...args).promise()
  }

  async deleteCustomVerificationEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomVerificationEmailTemplate(...args).promise()
  }

  async deleteIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIdentity(...args).promise()
  }

  async deleteIdentityPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIdentityPolicy(...args).promise()
  }

  async deleteReceiptFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReceiptFilter(...args).promise()
  }

  async deleteReceiptRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReceiptRule(...args).promise()
  }

  async deleteReceiptRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReceiptRuleSet(...args).promise()
  }

  async deleteTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTemplate(...args).promise()
  }

  async deleteVerifiedEmailAddress(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVerifiedEmailAddress(...args).promise()
  }

  async describeActiveReceiptRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.describeActiveReceiptRuleSet(...args).promise()
  }

  async describeConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfigurationSet(...args).promise()
  }

  async describeReceiptRule(...args: any): Promise<any> {
  // undefined
    return this.client.describeReceiptRule(...args).promise()
  }

  async describeReceiptRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.describeReceiptRuleSet(...args).promise()
  }

  async getAccountSendingEnabled(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountSendingEnabled(...args).promise()
  }

  async getCustomVerificationEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getCustomVerificationEmailTemplate(...args).promise()
  }

  async getIdentityDkimAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityDkimAttributes(...args).promise()
  }

  async getIdentityMailFromDomainAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityMailFromDomainAttributes(...args).promise()
  }

  async getIdentityNotificationAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityNotificationAttributes(...args).promise()
  }

  async getIdentityPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityPolicies(...args).promise()
  }

  async getIdentityVerificationAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityVerificationAttributes(...args).promise()
  }

  async getSendQuota(...args: any): Promise<any> {
  // undefined
    return this.client.getSendQuota(...args).promise()
  }

  async getSendStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getSendStatistics(...args).promise()
  }

  async getTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getTemplate(...args).promise()
  }

  async listConfigurationSets(...args: any): Promise<any> {
  // undefined
    return this.client.listConfigurationSets(...args).promise()
  }

  async listCustomVerificationEmailTemplates(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCustomVerificationEmailTemplates(...args).promise()
  }

  async listIdentities(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken","resultKey":"Identities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listIdentities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Identities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIdentityPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.listIdentityPolicies(...args).promise()
  }

  async listReceiptFilters(...args: any): Promise<any> {
  // undefined
    return this.client.listReceiptFilters(...args).promise()
  }

  async listReceiptRuleSets(...args: any): Promise<any> {
  // undefined
    return this.client.listReceiptRuleSets(...args).promise()
  }

  async listTemplates(...args: any): Promise<any> {
  // undefined
    return this.client.listTemplates(...args).promise()
  }

  async listVerifiedEmailAddresses(...args: any): Promise<any> {
  // {"resultKey":"VerifiedEmailAddresses"}
    return this.client.listVerifiedEmailAddresses(...args).promise()
  }

  async putConfigurationSetDeliveryOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigurationSetDeliveryOptions(...args).promise()
  }

  async putIdentityPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putIdentityPolicy(...args).promise()
  }

  async reorderReceiptRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.reorderReceiptRuleSet(...args).promise()
  }

  async sendBounce(...args: any): Promise<any> {
  // undefined
    return this.client.sendBounce(...args).promise()
  }

  async sendBulkTemplatedEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendBulkTemplatedEmail(...args).promise()
  }

  async sendCustomVerificationEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendCustomVerificationEmail(...args).promise()
  }

  async sendEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendEmail(...args).promise()
  }

  async sendRawEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendRawEmail(...args).promise()
  }

  async sendTemplatedEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendTemplatedEmail(...args).promise()
  }

  async setActiveReceiptRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.setActiveReceiptRuleSet(...args).promise()
  }

  async setIdentityDkimEnabled(...args: any): Promise<any> {
  // undefined
    return this.client.setIdentityDkimEnabled(...args).promise()
  }

  async setIdentityFeedbackForwardingEnabled(...args: any): Promise<any> {
  // undefined
    return this.client.setIdentityFeedbackForwardingEnabled(...args).promise()
  }

  async setIdentityHeadersInNotificationsEnabled(...args: any): Promise<any> {
  // undefined
    return this.client.setIdentityHeadersInNotificationsEnabled(...args).promise()
  }

  async setIdentityMailFromDomain(...args: any): Promise<any> {
  // undefined
    return this.client.setIdentityMailFromDomain(...args).promise()
  }

  async setIdentityNotificationTopic(...args: any): Promise<any> {
  // undefined
    return this.client.setIdentityNotificationTopic(...args).promise()
  }

  async setReceiptRulePosition(...args: any): Promise<any> {
  // undefined
    return this.client.setReceiptRulePosition(...args).promise()
  }

  async testRenderTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.testRenderTemplate(...args).promise()
  }

  async updateAccountSendingEnabled(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccountSendingEnabled(...args).promise()
  }

  async updateConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationSetEventDestination(...args).promise()
  }

  async updateConfigurationSetReputationMetricsEnabled(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationSetReputationMetricsEnabled(...args).promise()
  }

  async updateConfigurationSetSendingEnabled(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationSetSendingEnabled(...args).promise()
  }

  async updateConfigurationSetTrackingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationSetTrackingOptions(...args).promise()
  }

  async updateCustomVerificationEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateCustomVerificationEmailTemplate(...args).promise()
  }

  async updateReceiptRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateReceiptRule(...args).promise()
  }

  async updateTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateTemplate(...args).promise()
  }

  async verifyDomainDkim(...args: any): Promise<any> {
  // undefined
    return this.client.verifyDomainDkim(...args).promise()
  }

  async verifyDomainIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.verifyDomainIdentity(...args).promise()
  }

  async verifyEmailAddress(...args: any): Promise<any> {
  // undefined
    return this.client.verifyEmailAddress(...args).promise()
  }

  async verifyEmailIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.verifyEmailIdentity(...args).promise()
  }
  
  static fromClient(client: AWSSES): ClientType {
    return new SES(client) as any;
  }
  
  static client(options?: AWSSES.Types.ClientConfiguration): ClientType {
    return new SES(new AWSSES(options)) as any;
  }
}  
