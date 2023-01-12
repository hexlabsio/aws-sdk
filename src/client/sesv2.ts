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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSESV2> = AWSSESV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SESV2 {
  private constructor(private readonly client: AWSSESV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'email' as const;
  public readonly global = false as const;
  public readonly category = 'Customer Engagement' as const;
  public readonly topLevelCalls = ["getDedicatedIps","listConfigurationSets","listContactLists","listCustomVerificationEmailTemplates","listDedicatedIpPools","listDeliverabilityTestReports","listEmailIdentities","listEmailTemplates","listImportJobs","listRecommendations","listSuppressedDestinations"] as const;
  
  batchGetMetricData: (params: RawParamsFrom<'batchGetMetricData'>) => Promise<ReturnTypeFrom<'batchGetMetricData'>>  = async params => {
  // undefined
    return this.client.batchGetMetricData(params as any).promise();
  }

  createConfigurationSet: (params: RawParamsFrom<'createConfigurationSet'>) => Promise<ReturnTypeFrom<'createConfigurationSet'>>  = async params => {
  // undefined
    return this.client.createConfigurationSet(params as any).promise();
  }

  createConfigurationSetEventDestination: (params: RawParamsFrom<'createConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'createConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.createConfigurationSetEventDestination(params as any).promise();
  }

  createContact: (params: RawParamsFrom<'createContact'>) => Promise<ReturnTypeFrom<'createContact'>>  = async params => {
  // undefined
    return this.client.createContact(params as any).promise();
  }

  createContactList: (params: RawParamsFrom<'createContactList'>) => Promise<ReturnTypeFrom<'createContactList'>>  = async params => {
  // undefined
    return this.client.createContactList(params as any).promise();
  }

  createCustomVerificationEmailTemplate: (params: RawParamsFrom<'createCustomVerificationEmailTemplate'>) => Promise<ReturnTypeFrom<'createCustomVerificationEmailTemplate'>>  = async params => {
  // undefined
    return this.client.createCustomVerificationEmailTemplate(params as any).promise();
  }

  createDedicatedIpPool: (params: RawParamsFrom<'createDedicatedIpPool'>) => Promise<ReturnTypeFrom<'createDedicatedIpPool'>>  = async params => {
  // undefined
    return this.client.createDedicatedIpPool(params as any).promise();
  }

  createDeliverabilityTestReport: (params: RawParamsFrom<'createDeliverabilityTestReport'>) => Promise<ReturnTypeFrom<'createDeliverabilityTestReport'>>  = async params => {
  // undefined
    return this.client.createDeliverabilityTestReport(params as any).promise();
  }

  createEmailIdentity: (params: RawParamsFrom<'createEmailIdentity'>) => Promise<ReturnTypeFrom<'createEmailIdentity'>>  = async params => {
  // undefined
    return this.client.createEmailIdentity(params as any).promise();
  }

  createEmailIdentityPolicy: (params: RawParamsFrom<'createEmailIdentityPolicy'>) => Promise<ReturnTypeFrom<'createEmailIdentityPolicy'>>  = async params => {
  // undefined
    return this.client.createEmailIdentityPolicy(params as any).promise();
  }

  createEmailTemplate: (params: RawParamsFrom<'createEmailTemplate'>) => Promise<ReturnTypeFrom<'createEmailTemplate'>>  = async params => {
  // undefined
    return this.client.createEmailTemplate(params as any).promise();
  }

  createImportJob: (params: RawParamsFrom<'createImportJob'>) => Promise<ReturnTypeFrom<'createImportJob'>>  = async params => {
  // undefined
    return this.client.createImportJob(params as any).promise();
  }

  deleteConfigurationSet: (params: RawParamsFrom<'deleteConfigurationSet'>) => Promise<ReturnTypeFrom<'deleteConfigurationSet'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSet(params as any).promise();
  }

  deleteConfigurationSetEventDestination: (params: RawParamsFrom<'deleteConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'deleteConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSetEventDestination(params as any).promise();
  }

  deleteContact: (params: RawParamsFrom<'deleteContact'>) => Promise<ReturnTypeFrom<'deleteContact'>>  = async params => {
  // undefined
    return this.client.deleteContact(params as any).promise();
  }

  deleteContactList: (params: RawParamsFrom<'deleteContactList'>) => Promise<ReturnTypeFrom<'deleteContactList'>>  = async params => {
  // undefined
    return this.client.deleteContactList(params as any).promise();
  }

  deleteCustomVerificationEmailTemplate: (params: RawParamsFrom<'deleteCustomVerificationEmailTemplate'>) => Promise<ReturnTypeFrom<'deleteCustomVerificationEmailTemplate'>>  = async params => {
  // undefined
    return this.client.deleteCustomVerificationEmailTemplate(params as any).promise();
  }

  deleteDedicatedIpPool: (params: RawParamsFrom<'deleteDedicatedIpPool'>) => Promise<ReturnTypeFrom<'deleteDedicatedIpPool'>>  = async params => {
  // undefined
    return this.client.deleteDedicatedIpPool(params as any).promise();
  }

  deleteEmailIdentity: (params: RawParamsFrom<'deleteEmailIdentity'>) => Promise<ReturnTypeFrom<'deleteEmailIdentity'>>  = async params => {
  // undefined
    return this.client.deleteEmailIdentity(params as any).promise();
  }

  deleteEmailIdentityPolicy: (params: RawParamsFrom<'deleteEmailIdentityPolicy'>) => Promise<ReturnTypeFrom<'deleteEmailIdentityPolicy'>>  = async params => {
  // undefined
    return this.client.deleteEmailIdentityPolicy(params as any).promise();
  }

  deleteEmailTemplate: (params: RawParamsFrom<'deleteEmailTemplate'>) => Promise<ReturnTypeFrom<'deleteEmailTemplate'>>  = async params => {
  // undefined
    return this.client.deleteEmailTemplate(params as any).promise();
  }

  deleteSuppressedDestination: (params: RawParamsFrom<'deleteSuppressedDestination'>) => Promise<ReturnTypeFrom<'deleteSuppressedDestination'>>  = async params => {
  // undefined
    return this.client.deleteSuppressedDestination(params as any).promise();
  }

  getAccount: (params: RawParamsFrom<'getAccount'>) => Promise<ReturnTypeFrom<'getAccount'>>  = async params => {
  // undefined
    return this.client.getAccount(params as any).promise();
  }

  getBlacklistReports: (params: RawParamsFrom<'getBlacklistReports'>) => Promise<ReturnTypeFrom<'getBlacklistReports'>>  = async params => {
  // undefined
    return this.client.getBlacklistReports(params as any).promise();
  }

  getConfigurationSet: (params: RawParamsFrom<'getConfigurationSet'>) => Promise<ReturnTypeFrom<'getConfigurationSet'>>  = async params => {
  // undefined
    return this.client.getConfigurationSet(params as any).promise();
  }

  getConfigurationSetEventDestinations: (params: RawParamsFrom<'getConfigurationSetEventDestinations'>) => Promise<ReturnTypeFrom<'getConfigurationSetEventDestinations'>>  = async params => {
  // undefined
    return this.client.getConfigurationSetEventDestinations(params as any).promise();
  }

  getContact: (params: RawParamsFrom<'getContact'>) => Promise<ReturnTypeFrom<'getContact'>>  = async params => {
  // undefined
    return this.client.getContact(params as any).promise();
  }

  getContactList: (params: RawParamsFrom<'getContactList'>) => Promise<ReturnTypeFrom<'getContactList'>>  = async params => {
  // undefined
    return this.client.getContactList(params as any).promise();
  }

  getCustomVerificationEmailTemplate: (params: RawParamsFrom<'getCustomVerificationEmailTemplate'>) => Promise<ReturnTypeFrom<'getCustomVerificationEmailTemplate'>>  = async params => {
  // undefined
    return this.client.getCustomVerificationEmailTemplate(params as any).promise();
  }

  getDedicatedIp: (params: RawParamsFrom<'getDedicatedIp'>) => Promise<ReturnTypeFrom<'getDedicatedIp'>>  = async params => {
  // undefined
    return this.client.getDedicatedIp(params as any).promise();
  }

  getDedicatedIpPool: (params: RawParamsFrom<'getDedicatedIpPool'>) => Promise<ReturnTypeFrom<'getDedicatedIpPool'>>  = async params => {
  // undefined
    return this.client.getDedicatedIpPool(params as any).promise();
  }

  getDedicatedIps: (params: RawParamsFrom<'getDedicatedIps'>) => Promise<ReturnTypeFrom<'getDedicatedIps'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.getDedicatedIps(params as any).promise();
  }

  getDeliverabilityDashboardOptions: (params: RawParamsFrom<'getDeliverabilityDashboardOptions'>) => Promise<ReturnTypeFrom<'getDeliverabilityDashboardOptions'>>  = async params => {
  // undefined
    return this.client.getDeliverabilityDashboardOptions(params as any).promise();
  }

  getDeliverabilityTestReport: (params: RawParamsFrom<'getDeliverabilityTestReport'>) => Promise<ReturnTypeFrom<'getDeliverabilityTestReport'>>  = async params => {
  // undefined
    return this.client.getDeliverabilityTestReport(params as any).promise();
  }

  getDomainDeliverabilityCampaign: (params: RawParamsFrom<'getDomainDeliverabilityCampaign'>) => Promise<ReturnTypeFrom<'getDomainDeliverabilityCampaign'>>  = async params => {
  // undefined
    return this.client.getDomainDeliverabilityCampaign(params as any).promise();
  }

  getDomainStatisticsReport: (params: RawParamsFrom<'getDomainStatisticsReport'>) => Promise<ReturnTypeFrom<'getDomainStatisticsReport'>>  = async params => {
  // undefined
    return this.client.getDomainStatisticsReport(params as any).promise();
  }

  getEmailIdentity: (params: RawParamsFrom<'getEmailIdentity'>) => Promise<ReturnTypeFrom<'getEmailIdentity'>>  = async params => {
  // undefined
    return this.client.getEmailIdentity(params as any).promise();
  }

  getEmailIdentityPolicies: (params: RawParamsFrom<'getEmailIdentityPolicies'>) => Promise<ReturnTypeFrom<'getEmailIdentityPolicies'>>  = async params => {
  // undefined
    return this.client.getEmailIdentityPolicies(params as any).promise();
  }

  getEmailTemplate: (params: RawParamsFrom<'getEmailTemplate'>) => Promise<ReturnTypeFrom<'getEmailTemplate'>>  = async params => {
  // undefined
    return this.client.getEmailTemplate(params as any).promise();
  }

  getImportJob: (params: RawParamsFrom<'getImportJob'>) => Promise<ReturnTypeFrom<'getImportJob'>>  = async params => {
  // undefined
    return this.client.getImportJob(params as any).promise();
  }

  getSuppressedDestination: (params: RawParamsFrom<'getSuppressedDestination'>) => Promise<ReturnTypeFrom<'getSuppressedDestination'>>  = async params => {
  // undefined
    return this.client.getSuppressedDestination(params as any).promise();
  }

  listConfigurationSets: (params: RawParamsFrom<'listConfigurationSets'>) => Promise<ReturnTypeFrom<'listConfigurationSets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listConfigurationSets(params as any).promise();
  }

  listContactLists: (params: RawParamsFrom<'listContactLists'>) => Promise<ReturnTypeFrom<'listContactLists'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listContactLists(params as any).promise();
  }

  listContacts: (params: RawParamsFrom<'listContacts'>) => Promise<ReturnTypeFrom<'listContacts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listContacts(params as any).promise();
  }

  listCustomVerificationEmailTemplates: (params: RawParamsFrom<'listCustomVerificationEmailTemplates'>) => Promise<ReturnTypeFrom<'listCustomVerificationEmailTemplates'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listCustomVerificationEmailTemplates(params as any).promise();
  }

  listDedicatedIpPools: (params: RawParamsFrom<'listDedicatedIpPools'>) => Promise<ReturnTypeFrom<'listDedicatedIpPools'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listDedicatedIpPools(params as any).promise();
  }

  listDeliverabilityTestReports: (params: RawParamsFrom<'listDeliverabilityTestReports'>) => Promise<ReturnTypeFrom<'listDeliverabilityTestReports'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listDeliverabilityTestReports(params as any).promise();
  }

  listDomainDeliverabilityCampaigns: (params: RawParamsFrom<'listDomainDeliverabilityCampaigns'>) => Promise<ReturnTypeFrom<'listDomainDeliverabilityCampaigns'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listDomainDeliverabilityCampaigns(params as any).promise();
  }

  listEmailIdentities: (params: RawParamsFrom<'listEmailIdentities'>) => Promise<ReturnTypeFrom<'listEmailIdentities'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listEmailIdentities(params as any).promise();
  }

  listEmailTemplates: (params: RawParamsFrom<'listEmailTemplates'>) => Promise<ReturnTypeFrom<'listEmailTemplates'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listEmailTemplates(params as any).promise();
  }

  listImportJobs: (params: RawParamsFrom<'listImportJobs'>) => Promise<ReturnTypeFrom<'listImportJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listImportJobs(params as any).promise();
  }

  listRecommendations: (params: RawParamsFrom<'listRecommendations'>) => Promise<ReturnTypeFrom<'listRecommendations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listRecommendations(params as any).promise();
  }

  listSuppressedDestinations: (params: RawParamsFrom<'listSuppressedDestinations'>) => Promise<ReturnTypeFrom<'listSuppressedDestinations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listSuppressedDestinations(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putAccountDedicatedIpWarmupAttributes: (params: RawParamsFrom<'putAccountDedicatedIpWarmupAttributes'>) => Promise<ReturnTypeFrom<'putAccountDedicatedIpWarmupAttributes'>>  = async params => {
  // undefined
    return this.client.putAccountDedicatedIpWarmupAttributes(params as any).promise();
  }

  putAccountDetails: (params: RawParamsFrom<'putAccountDetails'>) => Promise<ReturnTypeFrom<'putAccountDetails'>>  = async params => {
  // undefined
    return this.client.putAccountDetails(params as any).promise();
  }

  putAccountSendingAttributes: (params: RawParamsFrom<'putAccountSendingAttributes'>) => Promise<ReturnTypeFrom<'putAccountSendingAttributes'>>  = async params => {
  // undefined
    return this.client.putAccountSendingAttributes(params as any).promise();
  }

  putAccountSuppressionAttributes: (params: RawParamsFrom<'putAccountSuppressionAttributes'>) => Promise<ReturnTypeFrom<'putAccountSuppressionAttributes'>>  = async params => {
  // undefined
    return this.client.putAccountSuppressionAttributes(params as any).promise();
  }

  putAccountVdmAttributes: (params: RawParamsFrom<'putAccountVdmAttributes'>) => Promise<ReturnTypeFrom<'putAccountVdmAttributes'>>  = async params => {
  // undefined
    return this.client.putAccountVdmAttributes(params as any).promise();
  }

  putConfigurationSetDeliveryOptions: (params: RawParamsFrom<'putConfigurationSetDeliveryOptions'>) => Promise<ReturnTypeFrom<'putConfigurationSetDeliveryOptions'>>  = async params => {
  // undefined
    return this.client.putConfigurationSetDeliveryOptions(params as any).promise();
  }

  putConfigurationSetReputationOptions: (params: RawParamsFrom<'putConfigurationSetReputationOptions'>) => Promise<ReturnTypeFrom<'putConfigurationSetReputationOptions'>>  = async params => {
  // undefined
    return this.client.putConfigurationSetReputationOptions(params as any).promise();
  }

  putConfigurationSetSendingOptions: (params: RawParamsFrom<'putConfigurationSetSendingOptions'>) => Promise<ReturnTypeFrom<'putConfigurationSetSendingOptions'>>  = async params => {
  // undefined
    return this.client.putConfigurationSetSendingOptions(params as any).promise();
  }

  putConfigurationSetSuppressionOptions: (params: RawParamsFrom<'putConfigurationSetSuppressionOptions'>) => Promise<ReturnTypeFrom<'putConfigurationSetSuppressionOptions'>>  = async params => {
  // undefined
    return this.client.putConfigurationSetSuppressionOptions(params as any).promise();
  }

  putConfigurationSetTrackingOptions: (params: RawParamsFrom<'putConfigurationSetTrackingOptions'>) => Promise<ReturnTypeFrom<'putConfigurationSetTrackingOptions'>>  = async params => {
  // undefined
    return this.client.putConfigurationSetTrackingOptions(params as any).promise();
  }

  putConfigurationSetVdmOptions: (params: RawParamsFrom<'putConfigurationSetVdmOptions'>) => Promise<ReturnTypeFrom<'putConfigurationSetVdmOptions'>>  = async params => {
  // undefined
    return this.client.putConfigurationSetVdmOptions(params as any).promise();
  }

  putDedicatedIpInPool: (params: RawParamsFrom<'putDedicatedIpInPool'>) => Promise<ReturnTypeFrom<'putDedicatedIpInPool'>>  = async params => {
  // undefined
    return this.client.putDedicatedIpInPool(params as any).promise();
  }

  putDedicatedIpWarmupAttributes: (params: RawParamsFrom<'putDedicatedIpWarmupAttributes'>) => Promise<ReturnTypeFrom<'putDedicatedIpWarmupAttributes'>>  = async params => {
  // undefined
    return this.client.putDedicatedIpWarmupAttributes(params as any).promise();
  }

  putDeliverabilityDashboardOption: (params: RawParamsFrom<'putDeliverabilityDashboardOption'>) => Promise<ReturnTypeFrom<'putDeliverabilityDashboardOption'>>  = async params => {
  // undefined
    return this.client.putDeliverabilityDashboardOption(params as any).promise();
  }

  putEmailIdentityConfigurationSetAttributes: (params: RawParamsFrom<'putEmailIdentityConfigurationSetAttributes'>) => Promise<ReturnTypeFrom<'putEmailIdentityConfigurationSetAttributes'>>  = async params => {
  // undefined
    return this.client.putEmailIdentityConfigurationSetAttributes(params as any).promise();
  }

  putEmailIdentityDkimAttributes: (params: RawParamsFrom<'putEmailIdentityDkimAttributes'>) => Promise<ReturnTypeFrom<'putEmailIdentityDkimAttributes'>>  = async params => {
  // undefined
    return this.client.putEmailIdentityDkimAttributes(params as any).promise();
  }

  putEmailIdentityDkimSigningAttributes: (params: RawParamsFrom<'putEmailIdentityDkimSigningAttributes'>) => Promise<ReturnTypeFrom<'putEmailIdentityDkimSigningAttributes'>>  = async params => {
  // undefined
    return this.client.putEmailIdentityDkimSigningAttributes(params as any).promise();
  }

  putEmailIdentityFeedbackAttributes: (params: RawParamsFrom<'putEmailIdentityFeedbackAttributes'>) => Promise<ReturnTypeFrom<'putEmailIdentityFeedbackAttributes'>>  = async params => {
  // undefined
    return this.client.putEmailIdentityFeedbackAttributes(params as any).promise();
  }

  putEmailIdentityMailFromAttributes: (params: RawParamsFrom<'putEmailIdentityMailFromAttributes'>) => Promise<ReturnTypeFrom<'putEmailIdentityMailFromAttributes'>>  = async params => {
  // undefined
    return this.client.putEmailIdentityMailFromAttributes(params as any).promise();
  }

  putSuppressedDestination: (params: RawParamsFrom<'putSuppressedDestination'>) => Promise<ReturnTypeFrom<'putSuppressedDestination'>>  = async params => {
  // undefined
    return this.client.putSuppressedDestination(params as any).promise();
  }

  sendBulkEmail: (params: RawParamsFrom<'sendBulkEmail'>) => Promise<ReturnTypeFrom<'sendBulkEmail'>>  = async params => {
  // undefined
    return this.client.sendBulkEmail(params as any).promise();
  }

  sendCustomVerificationEmail: (params: RawParamsFrom<'sendCustomVerificationEmail'>) => Promise<ReturnTypeFrom<'sendCustomVerificationEmail'>>  = async params => {
  // undefined
    return this.client.sendCustomVerificationEmail(params as any).promise();
  }

  sendEmail: (params: RawParamsFrom<'sendEmail'>) => Promise<ReturnTypeFrom<'sendEmail'>>  = async params => {
  // undefined
    return this.client.sendEmail(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testRenderEmailTemplate: (params: RawParamsFrom<'testRenderEmailTemplate'>) => Promise<ReturnTypeFrom<'testRenderEmailTemplate'>>  = async params => {
  // undefined
    return this.client.testRenderEmailTemplate(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateConfigurationSetEventDestination: (params: RawParamsFrom<'updateConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'updateConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.updateConfigurationSetEventDestination(params as any).promise();
  }

  updateContact: (params: RawParamsFrom<'updateContact'>) => Promise<ReturnTypeFrom<'updateContact'>>  = async params => {
  // undefined
    return this.client.updateContact(params as any).promise();
  }

  updateContactList: (params: RawParamsFrom<'updateContactList'>) => Promise<ReturnTypeFrom<'updateContactList'>>  = async params => {
  // undefined
    return this.client.updateContactList(params as any).promise();
  }

  updateCustomVerificationEmailTemplate: (params: RawParamsFrom<'updateCustomVerificationEmailTemplate'>) => Promise<ReturnTypeFrom<'updateCustomVerificationEmailTemplate'>>  = async params => {
  // undefined
    return this.client.updateCustomVerificationEmailTemplate(params as any).promise();
  }

  updateEmailIdentityPolicy: (params: RawParamsFrom<'updateEmailIdentityPolicy'>) => Promise<ReturnTypeFrom<'updateEmailIdentityPolicy'>>  = async params => {
  // undefined
    return this.client.updateEmailIdentityPolicy(params as any).promise();
  }

  updateEmailTemplate: (params: RawParamsFrom<'updateEmailTemplate'>) => Promise<ReturnTypeFrom<'updateEmailTemplate'>>  = async params => {
  // undefined
    return this.client.updateEmailTemplate(params as any).promise();
  }
  
  static fromClient(client: AWSSESV2): SESV2 {
    return new SESV2(client) as any;
  }
  
  static client(options?: AWSSESV2.Types.ClientConfiguration): SESV2 {
    return new SESV2(new AWSSESV2(options)) as any;
  }
}  
