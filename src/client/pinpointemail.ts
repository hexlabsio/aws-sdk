import { Request, PinpointEmail as AWSPinpointEmail } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPinpointEmail> = AWSPinpointEmail[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPinpointEmail> = AWSPinpointEmail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPinpointEmail[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPinpointEmail, Extras> = AWSPinpointEmail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPinpointEmail> = AWSPinpointEmail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class PinpointEmail {
  private constructor(private readonly client: AWSPinpointEmail) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'email' as const;
  public readonly global = false as const;
  public readonly category = 'Customer Engagement' as const;
  public readonly topLevelCalls = ["getDedicatedIps","listConfigurationSets","listDedicatedIpPools","listDeliverabilityTestReports","listEmailIdentities"] as const;
  
  createConfigurationSet: (params: RawParamsFrom<'createConfigurationSet'>) => Promise<ReturnTypeFrom<'createConfigurationSet'>>  = async params => {
  // undefined
    return this.client.createConfigurationSet(params as any).promise();
  }

  createConfigurationSetEventDestination: (params: RawParamsFrom<'createConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'createConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.createConfigurationSetEventDestination(params as any).promise();
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

  deleteConfigurationSet: (params: RawParamsFrom<'deleteConfigurationSet'>) => Promise<ReturnTypeFrom<'deleteConfigurationSet'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSet(params as any).promise();
  }

  deleteConfigurationSetEventDestination: (params: RawParamsFrom<'deleteConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'deleteConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSetEventDestination(params as any).promise();
  }

  deleteDedicatedIpPool: (params: RawParamsFrom<'deleteDedicatedIpPool'>) => Promise<ReturnTypeFrom<'deleteDedicatedIpPool'>>  = async params => {
  // undefined
    return this.client.deleteDedicatedIpPool(params as any).promise();
  }

  deleteEmailIdentity: (params: RawParamsFrom<'deleteEmailIdentity'>) => Promise<ReturnTypeFrom<'deleteEmailIdentity'>>  = async params => {
  // undefined
    return this.client.deleteEmailIdentity(params as any).promise();
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

  getDedicatedIp: (params: RawParamsFrom<'getDedicatedIp'>) => Promise<ReturnTypeFrom<'getDedicatedIp'>>  = async params => {
  // undefined
    return this.client.getDedicatedIp(params as any).promise();
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

  listConfigurationSets: (params: RawParamsFrom<'listConfigurationSets'>) => Promise<ReturnTypeFrom<'listConfigurationSets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listConfigurationSets(params as any).promise();
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

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putAccountDedicatedIpWarmupAttributes: (params: RawParamsFrom<'putAccountDedicatedIpWarmupAttributes'>) => Promise<ReturnTypeFrom<'putAccountDedicatedIpWarmupAttributes'>>  = async params => {
  // undefined
    return this.client.putAccountDedicatedIpWarmupAttributes(params as any).promise();
  }

  putAccountSendingAttributes: (params: RawParamsFrom<'putAccountSendingAttributes'>) => Promise<ReturnTypeFrom<'putAccountSendingAttributes'>>  = async params => {
  // undefined
    return this.client.putAccountSendingAttributes(params as any).promise();
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

  putConfigurationSetTrackingOptions: (params: RawParamsFrom<'putConfigurationSetTrackingOptions'>) => Promise<ReturnTypeFrom<'putConfigurationSetTrackingOptions'>>  = async params => {
  // undefined
    return this.client.putConfigurationSetTrackingOptions(params as any).promise();
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

  putEmailIdentityDkimAttributes: (params: RawParamsFrom<'putEmailIdentityDkimAttributes'>) => Promise<ReturnTypeFrom<'putEmailIdentityDkimAttributes'>>  = async params => {
  // undefined
    return this.client.putEmailIdentityDkimAttributes(params as any).promise();
  }

  putEmailIdentityFeedbackAttributes: (params: RawParamsFrom<'putEmailIdentityFeedbackAttributes'>) => Promise<ReturnTypeFrom<'putEmailIdentityFeedbackAttributes'>>  = async params => {
  // undefined
    return this.client.putEmailIdentityFeedbackAttributes(params as any).promise();
  }

  putEmailIdentityMailFromAttributes: (params: RawParamsFrom<'putEmailIdentityMailFromAttributes'>) => Promise<ReturnTypeFrom<'putEmailIdentityMailFromAttributes'>>  = async params => {
  // undefined
    return this.client.putEmailIdentityMailFromAttributes(params as any).promise();
  }

  sendEmail: (params: RawParamsFrom<'sendEmail'>) => Promise<ReturnTypeFrom<'sendEmail'>>  = async params => {
  // undefined
    return this.client.sendEmail(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateConfigurationSetEventDestination: (params: RawParamsFrom<'updateConfigurationSetEventDestination'>) => Promise<ReturnTypeFrom<'updateConfigurationSetEventDestination'>>  = async params => {
  // undefined
    return this.client.updateConfigurationSetEventDestination(params as any).promise();
  }
  
  static fromClient(client: AWSPinpointEmail): PinpointEmail {
    return new PinpointEmail(client) as any;
  }
  
  static client(options?: AWSPinpointEmail.Types.ClientConfiguration): PinpointEmail {
    return new PinpointEmail(new AWSPinpointEmail(options)) as any;
  }
}  
