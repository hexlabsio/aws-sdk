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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'email';
    global: false;
    category: 'Customer Engagement'
    topLevelCalls: readonly ["getDedicatedIps","listConfigurationSets","listDedicatedIpPools","listDeliverabilityTestReports","listEmailIdentities"];
    
  createConfigurationSet: FunctionTypeFrom<'createConfigurationSet'>;

  createConfigurationSetEventDestination: FunctionTypeFrom<'createConfigurationSetEventDestination'>;

  createDedicatedIpPool: FunctionTypeFrom<'createDedicatedIpPool'>;

  createDeliverabilityTestReport: FunctionTypeFrom<'createDeliverabilityTestReport'>;

  createEmailIdentity: FunctionTypeFrom<'createEmailIdentity'>;

  deleteConfigurationSet: FunctionTypeFrom<'deleteConfigurationSet'>;

  deleteConfigurationSetEventDestination: FunctionTypeFrom<'deleteConfigurationSetEventDestination'>;

  deleteDedicatedIpPool: FunctionTypeFrom<'deleteDedicatedIpPool'>;

  deleteEmailIdentity: FunctionTypeFrom<'deleteEmailIdentity'>;

  getAccount: FunctionTypeFrom<'getAccount'>;

  getBlacklistReports: FunctionTypeFrom<'getBlacklistReports'>;

  getConfigurationSet: FunctionTypeFrom<'getConfigurationSet'>;

  getConfigurationSetEventDestinations: FunctionTypeFrom<'getConfigurationSetEventDestinations'>;

  getDedicatedIp: FunctionTypeFrom<'getDedicatedIp'>;

  getDedicatedIps: FunctionTypeFrom<'getDedicatedIps'>;

  getDeliverabilityDashboardOptions: FunctionTypeFrom<'getDeliverabilityDashboardOptions'>;

  getDeliverabilityTestReport: FunctionTypeFrom<'getDeliverabilityTestReport'>;

  getDomainDeliverabilityCampaign: FunctionTypeFrom<'getDomainDeliverabilityCampaign'>;

  getDomainStatisticsReport: FunctionTypeFrom<'getDomainStatisticsReport'>;

  getEmailIdentity: FunctionTypeFrom<'getEmailIdentity'>;

  listConfigurationSets: FunctionTypeFrom<'listConfigurationSets'>;

  listDedicatedIpPools: FunctionTypeFrom<'listDedicatedIpPools'>;

  listDeliverabilityTestReports: FunctionTypeFrom<'listDeliverabilityTestReports'>;

  listDomainDeliverabilityCampaigns: FunctionTypeFrom<'listDomainDeliverabilityCampaigns'>;

  listEmailIdentities: FunctionTypeFrom<'listEmailIdentities'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putAccountDedicatedIpWarmupAttributes: FunctionTypeFrom<'putAccountDedicatedIpWarmupAttributes'>;

  putAccountSendingAttributes: FunctionTypeFrom<'putAccountSendingAttributes'>;

  putConfigurationSetDeliveryOptions: FunctionTypeFrom<'putConfigurationSetDeliveryOptions'>;

  putConfigurationSetReputationOptions: FunctionTypeFrom<'putConfigurationSetReputationOptions'>;

  putConfigurationSetSendingOptions: FunctionTypeFrom<'putConfigurationSetSendingOptions'>;

  putConfigurationSetTrackingOptions: FunctionTypeFrom<'putConfigurationSetTrackingOptions'>;

  putDedicatedIpInPool: FunctionTypeFrom<'putDedicatedIpInPool'>;

  putDedicatedIpWarmupAttributes: FunctionTypeFrom<'putDedicatedIpWarmupAttributes'>;

  putDeliverabilityDashboardOption: FunctionTypeFrom<'putDeliverabilityDashboardOption'>;

  putEmailIdentityDkimAttributes: FunctionTypeFrom<'putEmailIdentityDkimAttributes'>;

  putEmailIdentityFeedbackAttributes: FunctionTypeFrom<'putEmailIdentityFeedbackAttributes'>;

  putEmailIdentityMailFromAttributes: FunctionTypeFrom<'putEmailIdentityMailFromAttributes'>;

  sendEmail: FunctionTypeFrom<'sendEmail'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConfigurationSetEventDestination: FunctionTypeFrom<'updateConfigurationSetEventDestination'>
}
 
export class PinpointEmail implements ClientType {
  private constructor(private readonly client: AWSPinpointEmail) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'email';
  public readonly global = false;
  public readonly category = 'Customer Engagement';
  public readonly topLevelCalls = ["getDedicatedIps","listConfigurationSets","listDedicatedIpPools","listDeliverabilityTestReports","listEmailIdentities"] as const;
  
  async createConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSet(...args).promise()
  }

  async createConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSetEventDestination(...args).promise()
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

  async deleteConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSet(...args).promise()
  }

  async deleteConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSetEventDestination(...args).promise()
  }

  async deleteDedicatedIpPool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDedicatedIpPool(...args).promise()
  }

  async deleteEmailIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEmailIdentity(...args).promise()
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

  async listConfigurationSets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listConfigurationSets(...args).promise()
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

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putAccountDedicatedIpWarmupAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountDedicatedIpWarmupAttributes(...args).promise()
  }

  async putAccountSendingAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountSendingAttributes(...args).promise()
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

  async putEmailIdentityDkimAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailIdentityDkimAttributes(...args).promise()
  }

  async putEmailIdentityFeedbackAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailIdentityFeedbackAttributes(...args).promise()
  }

  async putEmailIdentityMailFromAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putEmailIdentityMailFromAttributes(...args).promise()
  }

  async sendEmail(...args: any): Promise<any> {
  // undefined
    return this.client.sendEmail(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateConfigurationSetEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationSetEventDestination(...args).promise()
  }
  
  static fromClient(client: AWSPinpointEmail): ClientType {
    return new PinpointEmail(client) as any;
  }
  
  static client(options?: AWSPinpointEmail.Types.ClientConfiguration): ClientType {
    return new PinpointEmail(new AWSPinpointEmail(options)) as any;
  }
}  
