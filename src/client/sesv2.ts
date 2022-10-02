import { Request, SESV2 as AWSSESV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSESV2> = AWSSESV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSESV2> = AWSSESV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSESV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSESV2, Extras> = AWSSESV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'email';
    global: false;
    category: 'Customer Engagement'
    topLevelCalls: readonly ["getDedicatedIps","listConfigurationSets","listContactLists","listCustomVerificationEmailTemplates","listDedicatedIpPools","listDeliverabilityTestReports","listEmailIdentities","listEmailTemplates","listImportJobs","listSuppressedDestinations"];
    
  createConfigurationSet: FunctionTypeFrom<'createConfigurationSet'>;

  createConfigurationSetEventDestination: FunctionTypeFrom<'createConfigurationSetEventDestination'>;

  createContact: FunctionTypeFrom<'createContact'>;

  createContactList: FunctionTypeFrom<'createContactList'>;

  createCustomVerificationEmailTemplate: FunctionTypeFrom<'createCustomVerificationEmailTemplate'>;

  createDedicatedIpPool: FunctionTypeFrom<'createDedicatedIpPool'>;

  createDeliverabilityTestReport: FunctionTypeFrom<'createDeliverabilityTestReport'>;

  createEmailIdentity: FunctionTypeFrom<'createEmailIdentity'>;

  createEmailIdentityPolicy: FunctionTypeFrom<'createEmailIdentityPolicy'>;

  createEmailTemplate: FunctionTypeFrom<'createEmailTemplate'>;

  createImportJob: FunctionTypeFrom<'createImportJob'>;

  deleteConfigurationSet: FunctionTypeFrom<'deleteConfigurationSet'>;

  deleteConfigurationSetEventDestination: FunctionTypeFrom<'deleteConfigurationSetEventDestination'>;

  deleteContact: FunctionTypeFrom<'deleteContact'>;

  deleteContactList: FunctionTypeFrom<'deleteContactList'>;

  deleteCustomVerificationEmailTemplate: FunctionTypeFrom<'deleteCustomVerificationEmailTemplate'>;

  deleteDedicatedIpPool: FunctionTypeFrom<'deleteDedicatedIpPool'>;

  deleteEmailIdentity: FunctionTypeFrom<'deleteEmailIdentity'>;

  deleteEmailIdentityPolicy: FunctionTypeFrom<'deleteEmailIdentityPolicy'>;

  deleteEmailTemplate: FunctionTypeFrom<'deleteEmailTemplate'>;

  deleteSuppressedDestination: FunctionTypeFrom<'deleteSuppressedDestination'>;

  getAccount: FunctionTypeFrom<'getAccount'>;

  getBlacklistReports: FunctionTypeFrom<'getBlacklistReports'>;

  getConfigurationSet: FunctionTypeFrom<'getConfigurationSet'>;

  getConfigurationSetEventDestinations: FunctionTypeFrom<'getConfigurationSetEventDestinations'>;

  getContact: FunctionTypeFrom<'getContact'>;

  getContactList: FunctionTypeFrom<'getContactList'>;

  getCustomVerificationEmailTemplate: FunctionTypeFrom<'getCustomVerificationEmailTemplate'>;

  getDedicatedIp: FunctionTypeFrom<'getDedicatedIp'>;

  getDedicatedIps: FunctionTypeFrom<'getDedicatedIps'>;

  getDeliverabilityDashboardOptions: FunctionTypeFrom<'getDeliverabilityDashboardOptions'>;

  getDeliverabilityTestReport: FunctionTypeFrom<'getDeliverabilityTestReport'>;

  getDomainDeliverabilityCampaign: FunctionTypeFrom<'getDomainDeliverabilityCampaign'>;

  getDomainStatisticsReport: FunctionTypeFrom<'getDomainStatisticsReport'>;

  getEmailIdentity: FunctionTypeFrom<'getEmailIdentity'>;

  getEmailIdentityPolicies: FunctionTypeFrom<'getEmailIdentityPolicies'>;

  getEmailTemplate: FunctionTypeFrom<'getEmailTemplate'>;

  getImportJob: FunctionTypeFrom<'getImportJob'>;

  getSuppressedDestination: FunctionTypeFrom<'getSuppressedDestination'>;

  listConfigurationSets: FunctionTypeFrom<'listConfigurationSets'>;

  listContactLists: FunctionTypeFrom<'listContactLists'>;

  listContacts: FunctionTypeFrom<'listContacts'>;

  listCustomVerificationEmailTemplates: FunctionTypeFrom<'listCustomVerificationEmailTemplates'>;

  listDedicatedIpPools: FunctionTypeFrom<'listDedicatedIpPools'>;

  listDeliverabilityTestReports: FunctionTypeFrom<'listDeliverabilityTestReports'>;

  listDomainDeliverabilityCampaigns: FunctionTypeFrom<'listDomainDeliverabilityCampaigns'>;

  listEmailIdentities: FunctionTypeFrom<'listEmailIdentities'>;

  listEmailTemplates: FunctionTypeFrom<'listEmailTemplates'>;

  listImportJobs: FunctionTypeFrom<'listImportJobs'>;

  listSuppressedDestinations: FunctionTypeFrom<'listSuppressedDestinations'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putAccountDedicatedIpWarmupAttributes: FunctionTypeFrom<'putAccountDedicatedIpWarmupAttributes'>;

  putAccountDetails: FunctionTypeFrom<'putAccountDetails'>;

  putAccountSendingAttributes: FunctionTypeFrom<'putAccountSendingAttributes'>;

  putAccountSuppressionAttributes: FunctionTypeFrom<'putAccountSuppressionAttributes'>;

  putConfigurationSetDeliveryOptions: FunctionTypeFrom<'putConfigurationSetDeliveryOptions'>;

  putConfigurationSetReputationOptions: FunctionTypeFrom<'putConfigurationSetReputationOptions'>;

  putConfigurationSetSendingOptions: FunctionTypeFrom<'putConfigurationSetSendingOptions'>;

  putConfigurationSetSuppressionOptions: FunctionTypeFrom<'putConfigurationSetSuppressionOptions'>;

  putConfigurationSetTrackingOptions: FunctionTypeFrom<'putConfigurationSetTrackingOptions'>;

  putDedicatedIpInPool: FunctionTypeFrom<'putDedicatedIpInPool'>;

  putDedicatedIpWarmupAttributes: FunctionTypeFrom<'putDedicatedIpWarmupAttributes'>;

  putDeliverabilityDashboardOption: FunctionTypeFrom<'putDeliverabilityDashboardOption'>;

  putEmailIdentityConfigurationSetAttributes: FunctionTypeFrom<'putEmailIdentityConfigurationSetAttributes'>;

  putEmailIdentityDkimAttributes: FunctionTypeFrom<'putEmailIdentityDkimAttributes'>;

  putEmailIdentityDkimSigningAttributes: FunctionTypeFrom<'putEmailIdentityDkimSigningAttributes'>;

  putEmailIdentityFeedbackAttributes: FunctionTypeFrom<'putEmailIdentityFeedbackAttributes'>;

  putEmailIdentityMailFromAttributes: FunctionTypeFrom<'putEmailIdentityMailFromAttributes'>;

  putSuppressedDestination: FunctionTypeFrom<'putSuppressedDestination'>;

  sendBulkEmail: FunctionTypeFrom<'sendBulkEmail'>;

  sendCustomVerificationEmail: FunctionTypeFrom<'sendCustomVerificationEmail'>;

  sendEmail: FunctionTypeFrom<'sendEmail'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testRenderEmailTemplate: FunctionTypeFrom<'testRenderEmailTemplate'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConfigurationSetEventDestination: FunctionTypeFrom<'updateConfigurationSetEventDestination'>;

  updateContact: FunctionTypeFrom<'updateContact'>;

  updateContactList: FunctionTypeFrom<'updateContactList'>;

  updateCustomVerificationEmailTemplate: FunctionTypeFrom<'updateCustomVerificationEmailTemplate'>;

  updateEmailIdentityPolicy: FunctionTypeFrom<'updateEmailIdentityPolicy'>;

  updateEmailTemplate: FunctionTypeFrom<'updateEmailTemplate'>
}
 
export class SESV2 implements ClientType {
  private constructor(private readonly client: AWSSESV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'email';
  public readonly global = false;
  public readonly category = 'Customer Engagement';
  public readonly topLevelCalls = ["getDedicatedIps","listConfigurationSets","listContactLists","listCustomVerificationEmailTemplates","listDedicatedIpPools","listDeliverabilityTestReports","listEmailIdentities","listEmailTemplates","listImportJobs","listSuppressedDestinations"] as const;
  
  async createConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSet(...args).promise()
  }

  async createConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSetEventDestination(...args).promise()
  }

  async createContact(...args: any): Promise<any> {
  // undefined
    return this.client.createContact(...args).promise()
  }

  async createContactList(...args: any): Promise<any> {
  // undefined
    return this.client.createContactList(...args).promise()
  }

  async createCustomVerificationEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomVerificationEmailTemplate(...args).promise()
  }

  async createDedicatedIpPool(...args: any): Promise<any> {
  // undefined
    return this.client.createDedicatedIpPool(...args).promise()
  }

  async createDeliverabilityTestReport(...args: any): Promise<any> {
  // undefined
    return this.client.createDeliverabilityTestReport(...args).promise()
  }

  async createEmailIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.createEmailIdentity(...args).promise()
  }

  async createEmailIdentityPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createEmailIdentityPolicy(...args).promise()
  }

  async createEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createEmailTemplate(...args).promise()
  }

  async createImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createImportJob(...args).promise()
  }

  async deleteConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSet(...args).promise()
  }

  async deleteConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSetEventDestination(...args).promise()
  }

  async deleteContact(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContact(...args).promise()
  }

  async deleteContactList(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContactList(...args).promise()
  }

  async deleteCustomVerificationEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomVerificationEmailTemplate(...args).promise()
  }

  async deleteDedicatedIpPool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDedicatedIpPool(...args).promise()
  }

  async deleteEmailIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEmailIdentity(...args).promise()
  }

  async deleteEmailIdentityPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEmailIdentityPolicy(...args).promise()
  }

  async deleteEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEmailTemplate(...args).promise()
  }

  async deleteSuppressedDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSuppressedDestination(...args).promise()
  }

  async getAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getAccount(...args).promise()
  }

  async getBlacklistReports(...args: any): Promise<any> {
  // undefined
    return this.client.getBlacklistReports(...args).promise()
  }

  async getConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.getConfigurationSet(...args).promise()
  }

  async getConfigurationSetEventDestinations(...args: any): Promise<any> {
  // undefined
    return this.client.getConfigurationSetEventDestinations(...args).promise()
  }

  async getContact(...args: any): Promise<any> {
  // undefined
    return this.client.getContact(...args).promise()
  }

  async getContactList(...args: any): Promise<any> {
  // undefined
    return this.client.getContactList(...args).promise()
  }

  async getCustomVerificationEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getCustomVerificationEmailTemplate(...args).promise()
  }

  async getDedicatedIp(...args: any): Promise<any> {
  // undefined
    return this.client.getDedicatedIp(...args).promise()
  }

  async getDedicatedIps(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.getDedicatedIps(...args).promise()
  }

  async getDeliverabilityDashboardOptions(...args: any): Promise<any> {
  // undefined
    return this.client.getDeliverabilityDashboardOptions(...args).promise()
  }

  async getDeliverabilityTestReport(...args: any): Promise<any> {
  // undefined
    return this.client.getDeliverabilityTestReport(...args).promise()
  }

  async getDomainDeliverabilityCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainDeliverabilityCampaign(...args).promise()
  }

  async getDomainStatisticsReport(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainStatisticsReport(...args).promise()
  }

  async getEmailIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.getEmailIdentity(...args).promise()
  }

  async getEmailIdentityPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.getEmailIdentityPolicies(...args).promise()
  }

  async getEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getEmailTemplate(...args).promise()
  }

  async getImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.getImportJob(...args).promise()
  }

  async getSuppressedDestination(...args: any): Promise<any> {
  // undefined
    return this.client.getSuppressedDestination(...args).promise()
  }

  async listConfigurationSets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listConfigurationSets(...args).promise()
  }

  async listContactLists(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listContactLists(...args).promise()
  }

  async listContacts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listContacts(...args).promise()
  }

  async listCustomVerificationEmailTemplates(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listCustomVerificationEmailTemplates(...args).promise()
  }

  async listDedicatedIpPools(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listDedicatedIpPools(...args).promise()
  }

  async listDeliverabilityTestReports(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listDeliverabilityTestReports(...args).promise()
  }

  async listDomainDeliverabilityCampaigns(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listDomainDeliverabilityCampaigns(...args).promise()
  }

  async listEmailIdentities(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listEmailIdentities(...args).promise()
  }

  async listEmailTemplates(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listEmailTemplates(...args).promise()
  }

  async listImportJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listImportJobs(...args).promise()
  }

  async listSuppressedDestinations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listSuppressedDestinations(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putAccountDedicatedIpWarmupAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountDedicatedIpWarmupAttributes(...args).promise()
  }

  async putAccountDetails(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountDetails(...args).promise()
  }

  async putAccountSendingAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountSendingAttributes(...args).promise()
  }

  async putAccountSuppressionAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountSuppressionAttributes(...args).promise()
  }

  async putConfigurationSetDeliveryOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigurationSetDeliveryOptions(...args).promise()
  }

  async putConfigurationSetReputationOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigurationSetReputationOptions(...args).promise()
  }

  async putConfigurationSetSendingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigurationSetSendingOptions(...args).promise()
  }

  async putConfigurationSetSuppressionOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigurationSetSuppressionOptions(...args).promise()
  }

  async putConfigurationSetTrackingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putConfigurationSetTrackingOptions(...args).promise()
  }

  async putDedicatedIpInPool(...args: any): Promise<any> {
  // undefined
    return this.client.putDedicatedIpInPool(...args).promise()
  }

  async putDedicatedIpWarmupAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putDedicatedIpWarmupAttributes(...args).promise()
  }

  async putDeliverabilityDashboardOption(...args: any): Promise<any> {
  // undefined
    return this.client.putDeliverabilityDashboardOption(...args).promise()
  }

  async putEmailIdentityConfigurationSetAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailIdentityConfigurationSetAttributes(...args).promise()
  }

  async putEmailIdentityDkimAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailIdentityDkimAttributes(...args).promise()
  }

  async putEmailIdentityDkimSigningAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailIdentityDkimSigningAttributes(...args).promise()
  }

  async putEmailIdentityFeedbackAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailIdentityFeedbackAttributes(...args).promise()
  }

  async putEmailIdentityMailFromAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailIdentityMailFromAttributes(...args).promise()
  }

  async putSuppressedDestination(...args: any): Promise<any> {
  // undefined
    return this.client.putSuppressedDestination(...args).promise()
  }

  async sendBulkEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendBulkEmail(...args).promise()
  }

  async sendCustomVerificationEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendCustomVerificationEmail(...args).promise()
  }

  async sendEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendEmail(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testRenderEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.testRenderEmailTemplate(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationSetEventDestination(...args).promise()
  }

  async updateContact(...args: any): Promise<any> {
  // undefined
    return this.client.updateContact(...args).promise()
  }

  async updateContactList(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactList(...args).promise()
  }

  async updateCustomVerificationEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateCustomVerificationEmailTemplate(...args).promise()
  }

  async updateEmailIdentityPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateEmailIdentityPolicy(...args).promise()
  }

  async updateEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateEmailTemplate(...args).promise()
  }
  
  static fromClient(client: AWSSESV2): ClientType {
    return new SESV2(client) as any;
  }
  
  static client(options?: AWSSESV2.Types.ClientConfiguration): ClientType {
    return new SESV2(new AWSSESV2(options)) as any;
  }
}  
