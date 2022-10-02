import { Request, Pinpoint as AWSPinpoint } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPinpoint> = AWSPinpoint[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPinpoint> = AWSPinpoint[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPinpoint[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPinpoint, Extras> = AWSPinpoint[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'pinpoint';
    global: false;
    category: 'Customer Engagement'
    topLevelCalls: readonly [];
    
  createApp: FunctionTypeFrom<'createApp'>;

  createCampaign: FunctionTypeFrom<'createCampaign'>;

  createEmailTemplate: FunctionTypeFrom<'createEmailTemplate'>;

  createExportJob: FunctionTypeFrom<'createExportJob'>;

  createImportJob: FunctionTypeFrom<'createImportJob'>;

  createInAppTemplate: FunctionTypeFrom<'createInAppTemplate'>;

  createJourney: FunctionTypeFrom<'createJourney'>;

  createPushTemplate: FunctionTypeFrom<'createPushTemplate'>;

  createRecommenderConfiguration: FunctionTypeFrom<'createRecommenderConfiguration'>;

  createSegment: FunctionTypeFrom<'createSegment'>;

  createSmsTemplate: FunctionTypeFrom<'createSmsTemplate'>;

  createVoiceTemplate: FunctionTypeFrom<'createVoiceTemplate'>;

  deleteAdmChannel: FunctionTypeFrom<'deleteAdmChannel'>;

  deleteApnsChannel: FunctionTypeFrom<'deleteApnsChannel'>;

  deleteApnsSandboxChannel: FunctionTypeFrom<'deleteApnsSandboxChannel'>;

  deleteApnsVoipChannel: FunctionTypeFrom<'deleteApnsVoipChannel'>;

  deleteApnsVoipSandboxChannel: FunctionTypeFrom<'deleteApnsVoipSandboxChannel'>;

  deleteApp: FunctionTypeFrom<'deleteApp'>;

  deleteBaiduChannel: FunctionTypeFrom<'deleteBaiduChannel'>;

  deleteCampaign: FunctionTypeFrom<'deleteCampaign'>;

  deleteEmailChannel: FunctionTypeFrom<'deleteEmailChannel'>;

  deleteEmailTemplate: FunctionTypeFrom<'deleteEmailTemplate'>;

  deleteEndpoint: FunctionTypeFrom<'deleteEndpoint'>;

  deleteEventStream: FunctionTypeFrom<'deleteEventStream'>;

  deleteGcmChannel: FunctionTypeFrom<'deleteGcmChannel'>;

  deleteInAppTemplate: FunctionTypeFrom<'deleteInAppTemplate'>;

  deleteJourney: FunctionTypeFrom<'deleteJourney'>;

  deletePushTemplate: FunctionTypeFrom<'deletePushTemplate'>;

  deleteRecommenderConfiguration: FunctionTypeFrom<'deleteRecommenderConfiguration'>;

  deleteSegment: FunctionTypeFrom<'deleteSegment'>;

  deleteSmsChannel: FunctionTypeFrom<'deleteSmsChannel'>;

  deleteSmsTemplate: FunctionTypeFrom<'deleteSmsTemplate'>;

  deleteUserEndpoints: FunctionTypeFrom<'deleteUserEndpoints'>;

  deleteVoiceChannel: FunctionTypeFrom<'deleteVoiceChannel'>;

  deleteVoiceTemplate: FunctionTypeFrom<'deleteVoiceTemplate'>;

  getAdmChannel: FunctionTypeFrom<'getAdmChannel'>;

  getApnsChannel: FunctionTypeFrom<'getApnsChannel'>;

  getApnsSandboxChannel: FunctionTypeFrom<'getApnsSandboxChannel'>;

  getApnsVoipChannel: FunctionTypeFrom<'getApnsVoipChannel'>;

  getApnsVoipSandboxChannel: FunctionTypeFrom<'getApnsVoipSandboxChannel'>;

  getApp: FunctionTypeFrom<'getApp'>;

  getApplicationDateRangeKpi: FunctionTypeFrom<'getApplicationDateRangeKpi'>;

  getApplicationSettings: FunctionTypeFrom<'getApplicationSettings'>;

  getApps: FunctionTypeFrom<'getApps'>;

  getBaiduChannel: FunctionTypeFrom<'getBaiduChannel'>;

  getCampaign: FunctionTypeFrom<'getCampaign'>;

  getCampaignActivities: FunctionTypeFrom<'getCampaignActivities'>;

  getCampaignDateRangeKpi: FunctionTypeFrom<'getCampaignDateRangeKpi'>;

  getCampaignVersion: FunctionTypeFrom<'getCampaignVersion'>;

  getCampaignVersions: FunctionTypeFrom<'getCampaignVersions'>;

  getCampaigns: FunctionTypeFrom<'getCampaigns'>;

  getChannels: FunctionTypeFrom<'getChannels'>;

  getEmailChannel: FunctionTypeFrom<'getEmailChannel'>;

  getEmailTemplate: FunctionTypeFrom<'getEmailTemplate'>;

  getEndpoint: FunctionTypeFrom<'getEndpoint'>;

  getEventStream: FunctionTypeFrom<'getEventStream'>;

  getExportJob: FunctionTypeFrom<'getExportJob'>;

  getExportJobs: FunctionTypeFrom<'getExportJobs'>;

  getGcmChannel: FunctionTypeFrom<'getGcmChannel'>;

  getImportJob: FunctionTypeFrom<'getImportJob'>;

  getImportJobs: FunctionTypeFrom<'getImportJobs'>;

  getInAppMessages: FunctionTypeFrom<'getInAppMessages'>;

  getInAppTemplate: FunctionTypeFrom<'getInAppTemplate'>;

  getJourney: FunctionTypeFrom<'getJourney'>;

  getJourneyDateRangeKpi: FunctionTypeFrom<'getJourneyDateRangeKpi'>;

  getJourneyExecutionActivityMetrics: FunctionTypeFrom<'getJourneyExecutionActivityMetrics'>;

  getJourneyExecutionMetrics: FunctionTypeFrom<'getJourneyExecutionMetrics'>;

  getPushTemplate: FunctionTypeFrom<'getPushTemplate'>;

  getRecommenderConfiguration: FunctionTypeFrom<'getRecommenderConfiguration'>;

  getRecommenderConfigurations: FunctionTypeFrom<'getRecommenderConfigurations'>;

  getSegment: FunctionTypeFrom<'getSegment'>;

  getSegmentExportJobs: FunctionTypeFrom<'getSegmentExportJobs'>;

  getSegmentImportJobs: FunctionTypeFrom<'getSegmentImportJobs'>;

  getSegmentVersion: FunctionTypeFrom<'getSegmentVersion'>;

  getSegmentVersions: FunctionTypeFrom<'getSegmentVersions'>;

  getSegments: FunctionTypeFrom<'getSegments'>;

  getSmsChannel: FunctionTypeFrom<'getSmsChannel'>;

  getSmsTemplate: FunctionTypeFrom<'getSmsTemplate'>;

  getUserEndpoints: FunctionTypeFrom<'getUserEndpoints'>;

  getVoiceChannel: FunctionTypeFrom<'getVoiceChannel'>;

  getVoiceTemplate: FunctionTypeFrom<'getVoiceTemplate'>;

  listJourneys: FunctionTypeFrom<'listJourneys'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTemplateVersions: FunctionTypeFrom<'listTemplateVersions'>;

  listTemplates: FunctionTypeFrom<'listTemplates'>;

  phoneNumberValidate: FunctionTypeFrom<'phoneNumberValidate'>;

  putEventStream: FunctionTypeFrom<'putEventStream'>;

  putEvents: FunctionTypeFrom<'putEvents'>;

  removeAttributes: FunctionTypeFrom<'removeAttributes'>;

  sendMessages: FunctionTypeFrom<'sendMessages'>;

  sendOTPMessage: FunctionTypeFrom<'sendOTPMessage'>;

  sendUsersMessages: FunctionTypeFrom<'sendUsersMessages'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAdmChannel: FunctionTypeFrom<'updateAdmChannel'>;

  updateApnsChannel: FunctionTypeFrom<'updateApnsChannel'>;

  updateApnsSandboxChannel: FunctionTypeFrom<'updateApnsSandboxChannel'>;

  updateApnsVoipChannel: FunctionTypeFrom<'updateApnsVoipChannel'>;

  updateApnsVoipSandboxChannel: FunctionTypeFrom<'updateApnsVoipSandboxChannel'>;

  updateApplicationSettings: FunctionTypeFrom<'updateApplicationSettings'>;

  updateBaiduChannel: FunctionTypeFrom<'updateBaiduChannel'>;

  updateCampaign: FunctionTypeFrom<'updateCampaign'>;

  updateEmailChannel: FunctionTypeFrom<'updateEmailChannel'>;

  updateEmailTemplate: FunctionTypeFrom<'updateEmailTemplate'>;

  updateEndpoint: FunctionTypeFrom<'updateEndpoint'>;

  updateEndpointsBatch: FunctionTypeFrom<'updateEndpointsBatch'>;

  updateGcmChannel: FunctionTypeFrom<'updateGcmChannel'>;

  updateInAppTemplate: FunctionTypeFrom<'updateInAppTemplate'>;

  updateJourney: FunctionTypeFrom<'updateJourney'>;

  updateJourneyState: FunctionTypeFrom<'updateJourneyState'>;

  updatePushTemplate: FunctionTypeFrom<'updatePushTemplate'>;

  updateRecommenderConfiguration: FunctionTypeFrom<'updateRecommenderConfiguration'>;

  updateSegment: FunctionTypeFrom<'updateSegment'>;

  updateSmsChannel: FunctionTypeFrom<'updateSmsChannel'>;

  updateSmsTemplate: FunctionTypeFrom<'updateSmsTemplate'>;

  updateTemplateActiveVersion: FunctionTypeFrom<'updateTemplateActiveVersion'>;

  updateVoiceChannel: FunctionTypeFrom<'updateVoiceChannel'>;

  updateVoiceTemplate: FunctionTypeFrom<'updateVoiceTemplate'>;

  verifyOTPMessage: FunctionTypeFrom<'verifyOTPMessage'>
}
 
export class Pinpoint implements ClientType {
  private constructor(private readonly client: AWSPinpoint) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'pinpoint';
  public readonly global = false;
  public readonly category = 'Customer Engagement';
  public readonly topLevelCalls = [] as const;
  
  async createApp(...args: any): Promise<any> {
  // undefined
    return this.client.createApp(...args).promise()
  }

  async createCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.createCampaign(...args).promise()
  }

  async createEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createEmailTemplate(...args).promise()
  }

  async createExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createExportJob(...args).promise()
  }

  async createImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createImportJob(...args).promise()
  }

  async createInAppTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createInAppTemplate(...args).promise()
  }

  async createJourney(...args: any): Promise<any> {
  // undefined
    return this.client.createJourney(...args).promise()
  }

  async createPushTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createPushTemplate(...args).promise()
  }

  async createRecommenderConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createRecommenderConfiguration(...args).promise()
  }

  async createSegment(...args: any): Promise<any> {
  // undefined
    return this.client.createSegment(...args).promise()
  }

  async createSmsTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createSmsTemplate(...args).promise()
  }

  async createVoiceTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createVoiceTemplate(...args).promise()
  }

  async deleteAdmChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAdmChannel(...args).promise()
  }

  async deleteApnsChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApnsChannel(...args).promise()
  }

  async deleteApnsSandboxChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApnsSandboxChannel(...args).promise()
  }

  async deleteApnsVoipChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApnsVoipChannel(...args).promise()
  }

  async deleteApnsVoipSandboxChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApnsVoipSandboxChannel(...args).promise()
  }

  async deleteApp(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApp(...args).promise()
  }

  async deleteBaiduChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBaiduChannel(...args).promise()
  }

  async deleteCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCampaign(...args).promise()
  }

  async deleteEmailChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEmailChannel(...args).promise()
  }

  async deleteEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEmailTemplate(...args).promise()
  }

  async deleteEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpoint(...args).promise()
  }

  async deleteEventStream(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventStream(...args).promise()
  }

  async deleteGcmChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGcmChannel(...args).promise()
  }

  async deleteInAppTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInAppTemplate(...args).promise()
  }

  async deleteJourney(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJourney(...args).promise()
  }

  async deletePushTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deletePushTemplate(...args).promise()
  }

  async deleteRecommenderConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecommenderConfiguration(...args).promise()
  }

  async deleteSegment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSegment(...args).promise()
  }

  async deleteSmsChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSmsChannel(...args).promise()
  }

  async deleteSmsTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSmsTemplate(...args).promise()
  }

  async deleteUserEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserEndpoints(...args).promise()
  }

  async deleteVoiceChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceChannel(...args).promise()
  }

  async deleteVoiceTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceTemplate(...args).promise()
  }

  async getAdmChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getAdmChannel(...args).promise()
  }

  async getApnsChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getApnsChannel(...args).promise()
  }

  async getApnsSandboxChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getApnsSandboxChannel(...args).promise()
  }

  async getApnsVoipChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getApnsVoipChannel(...args).promise()
  }

  async getApnsVoipSandboxChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getApnsVoipSandboxChannel(...args).promise()
  }

  async getApp(...args: any): Promise<any> {
  // undefined
    return this.client.getApp(...args).promise()
  }

  async getApplicationDateRangeKpi(...args: any): Promise<any> {
  // undefined
    return this.client.getApplicationDateRangeKpi(...args).promise()
  }

  async getApplicationSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getApplicationSettings(...args).promise()
  }

  async getApps(...args: any): Promise<any> {
  // undefined
    return this.client.getApps(...args).promise()
  }

  async getBaiduChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getBaiduChannel(...args).promise()
  }

  async getCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaign(...args).promise()
  }

  async getCampaignActivities(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaignActivities(...args).promise()
  }

  async getCampaignDateRangeKpi(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaignDateRangeKpi(...args).promise()
  }

  async getCampaignVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaignVersion(...args).promise()
  }

  async getCampaignVersions(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaignVersions(...args).promise()
  }

  async getCampaigns(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaigns(...args).promise()
  }

  async getChannels(...args: any): Promise<any> {
  // undefined
    return this.client.getChannels(...args).promise()
  }

  async getEmailChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getEmailChannel(...args).promise()
  }

  async getEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getEmailTemplate(...args).promise()
  }

  async getEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getEndpoint(...args).promise()
  }

  async getEventStream(...args: any): Promise<any> {
  // undefined
    return this.client.getEventStream(...args).promise()
  }

  async getExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.getExportJob(...args).promise()
  }

  async getExportJobs(...args: any): Promise<any> {
  // undefined
    return this.client.getExportJobs(...args).promise()
  }

  async getGcmChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getGcmChannel(...args).promise()
  }

  async getImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.getImportJob(...args).promise()
  }

  async getImportJobs(...args: any): Promise<any> {
  // undefined
    return this.client.getImportJobs(...args).promise()
  }

  async getInAppMessages(...args: any): Promise<any> {
  // undefined
    return this.client.getInAppMessages(...args).promise()
  }

  async getInAppTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getInAppTemplate(...args).promise()
  }

  async getJourney(...args: any): Promise<any> {
  // undefined
    return this.client.getJourney(...args).promise()
  }

  async getJourneyDateRangeKpi(...args: any): Promise<any> {
  // undefined
    return this.client.getJourneyDateRangeKpi(...args).promise()
  }

  async getJourneyExecutionActivityMetrics(...args: any): Promise<any> {
  // undefined
    return this.client.getJourneyExecutionActivityMetrics(...args).promise()
  }

  async getJourneyExecutionMetrics(...args: any): Promise<any> {
  // undefined
    return this.client.getJourneyExecutionMetrics(...args).promise()
  }

  async getPushTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getPushTemplate(...args).promise()
  }

  async getRecommenderConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getRecommenderConfiguration(...args).promise()
  }

  async getRecommenderConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.getRecommenderConfigurations(...args).promise()
  }

  async getSegment(...args: any): Promise<any> {
  // undefined
    return this.client.getSegment(...args).promise()
  }

  async getSegmentExportJobs(...args: any): Promise<any> {
  // undefined
    return this.client.getSegmentExportJobs(...args).promise()
  }

  async getSegmentImportJobs(...args: any): Promise<any> {
  // undefined
    return this.client.getSegmentImportJobs(...args).promise()
  }

  async getSegmentVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getSegmentVersion(...args).promise()
  }

  async getSegmentVersions(...args: any): Promise<any> {
  // undefined
    return this.client.getSegmentVersions(...args).promise()
  }

  async getSegments(...args: any): Promise<any> {
  // undefined
    return this.client.getSegments(...args).promise()
  }

  async getSmsChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getSmsChannel(...args).promise()
  }

  async getSmsTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getSmsTemplate(...args).promise()
  }

  async getUserEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.getUserEndpoints(...args).promise()
  }

  async getVoiceChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceChannel(...args).promise()
  }

  async getVoiceTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceTemplate(...args).promise()
  }

  async listJourneys(...args: any): Promise<any> {
  // undefined
    return this.client.listJourneys(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTemplateVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listTemplateVersions(...args).promise()
  }

  async listTemplates(...args: any): Promise<any> {
  // undefined
    return this.client.listTemplates(...args).promise()
  }

  async phoneNumberValidate(...args: any): Promise<any> {
  // undefined
    return this.client.phoneNumberValidate(...args).promise()
  }

  async putEventStream(...args: any): Promise<any> {
  // undefined
    return this.client.putEventStream(...args).promise()
  }

  async putEvents(...args: any): Promise<any> {
  // undefined
    return this.client.putEvents(...args).promise()
  }

  async removeAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.removeAttributes(...args).promise()
  }

  async sendMessages(...args: any): Promise<any> {
  // undefined
    return this.client.sendMessages(...args).promise()
  }

  async sendOTPMessage(...args: any): Promise<any> {
  // undefined
    return this.client.sendOTPMessage(...args).promise()
  }

  async sendUsersMessages(...args: any): Promise<any> {
  // undefined
    return this.client.sendUsersMessages(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAdmChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateAdmChannel(...args).promise()
  }

  async updateApnsChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateApnsChannel(...args).promise()
  }

  async updateApnsSandboxChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateApnsSandboxChannel(...args).promise()
  }

  async updateApnsVoipChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateApnsVoipChannel(...args).promise()
  }

  async updateApnsVoipSandboxChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateApnsVoipSandboxChannel(...args).promise()
  }

  async updateApplicationSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplicationSettings(...args).promise()
  }

  async updateBaiduChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateBaiduChannel(...args).promise()
  }

  async updateCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.updateCampaign(...args).promise()
  }

  async updateEmailChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateEmailChannel(...args).promise()
  }

  async updateEmailTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateEmailTemplate(...args).promise()
  }

  async updateEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.updateEndpoint(...args).promise()
  }

  async updateEndpointsBatch(...args: any): Promise<any> {
  // undefined
    return this.client.updateEndpointsBatch(...args).promise()
  }

  async updateGcmChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateGcmChannel(...args).promise()
  }

  async updateInAppTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateInAppTemplate(...args).promise()
  }

  async updateJourney(...args: any): Promise<any> {
  // undefined
    return this.client.updateJourney(...args).promise()
  }

  async updateJourneyState(...args: any): Promise<any> {
  // undefined
    return this.client.updateJourneyState(...args).promise()
  }

  async updatePushTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updatePushTemplate(...args).promise()
  }

  async updateRecommenderConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateRecommenderConfiguration(...args).promise()
  }

  async updateSegment(...args: any): Promise<any> {
  // undefined
    return this.client.updateSegment(...args).promise()
  }

  async updateSmsChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateSmsChannel(...args).promise()
  }

  async updateSmsTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateSmsTemplate(...args).promise()
  }

  async updateTemplateActiveVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateTemplateActiveVersion(...args).promise()
  }

  async updateVoiceChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateVoiceChannel(...args).promise()
  }

  async updateVoiceTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateVoiceTemplate(...args).promise()
  }

  async verifyOTPMessage(...args: any): Promise<any> {
  // undefined
    return this.client.verifyOTPMessage(...args).promise()
  }
  
  static fromClient(client: AWSPinpoint): ClientType {
    return new Pinpoint(client) as any;
  }
  
  static client(options?: AWSPinpoint.Types.ClientConfiguration): ClientType {
    return new Pinpoint(new AWSPinpoint(options)) as any;
  }
}  
