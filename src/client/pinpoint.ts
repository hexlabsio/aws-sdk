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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPinpoint> = AWSPinpoint[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Pinpoint {
  private constructor(private readonly client: AWSPinpoint) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'pinpoint' as const;
  public readonly global = false as const;
  public readonly category = 'Customer Engagement' as const;
  public readonly topLevelCalls = [] as const;
  
  createApp: (params: RawParamsFrom<'createApp'>) => Promise<ReturnTypeFrom<'createApp'>>  = async params => {
  // undefined
    return this.client.createApp(params as any).promise();
  }

  createCampaign: (params: RawParamsFrom<'createCampaign'>) => Promise<ReturnTypeFrom<'createCampaign'>>  = async params => {
  // undefined
    return this.client.createCampaign(params as any).promise();
  }

  createEmailTemplate: (params: RawParamsFrom<'createEmailTemplate'>) => Promise<ReturnTypeFrom<'createEmailTemplate'>>  = async params => {
  // undefined
    return this.client.createEmailTemplate(params as any).promise();
  }

  createExportJob: (params: RawParamsFrom<'createExportJob'>) => Promise<ReturnTypeFrom<'createExportJob'>>  = async params => {
  // undefined
    return this.client.createExportJob(params as any).promise();
  }

  createImportJob: (params: RawParamsFrom<'createImportJob'>) => Promise<ReturnTypeFrom<'createImportJob'>>  = async params => {
  // undefined
    return this.client.createImportJob(params as any).promise();
  }

  createInAppTemplate: (params: RawParamsFrom<'createInAppTemplate'>) => Promise<ReturnTypeFrom<'createInAppTemplate'>>  = async params => {
  // undefined
    return this.client.createInAppTemplate(params as any).promise();
  }

  createJourney: (params: RawParamsFrom<'createJourney'>) => Promise<ReturnTypeFrom<'createJourney'>>  = async params => {
  // undefined
    return this.client.createJourney(params as any).promise();
  }

  createPushTemplate: (params: RawParamsFrom<'createPushTemplate'>) => Promise<ReturnTypeFrom<'createPushTemplate'>>  = async params => {
  // undefined
    return this.client.createPushTemplate(params as any).promise();
  }

  createRecommenderConfiguration: (params: RawParamsFrom<'createRecommenderConfiguration'>) => Promise<ReturnTypeFrom<'createRecommenderConfiguration'>>  = async params => {
  // undefined
    return this.client.createRecommenderConfiguration(params as any).promise();
  }

  createSegment: (params: RawParamsFrom<'createSegment'>) => Promise<ReturnTypeFrom<'createSegment'>>  = async params => {
  // undefined
    return this.client.createSegment(params as any).promise();
  }

  createSmsTemplate: (params: RawParamsFrom<'createSmsTemplate'>) => Promise<ReturnTypeFrom<'createSmsTemplate'>>  = async params => {
  // undefined
    return this.client.createSmsTemplate(params as any).promise();
  }

  createVoiceTemplate: (params: RawParamsFrom<'createVoiceTemplate'>) => Promise<ReturnTypeFrom<'createVoiceTemplate'>>  = async params => {
  // undefined
    return this.client.createVoiceTemplate(params as any).promise();
  }

  deleteAdmChannel: (params: RawParamsFrom<'deleteAdmChannel'>) => Promise<ReturnTypeFrom<'deleteAdmChannel'>>  = async params => {
  // undefined
    return this.client.deleteAdmChannel(params as any).promise();
  }

  deleteApnsChannel: (params: RawParamsFrom<'deleteApnsChannel'>) => Promise<ReturnTypeFrom<'deleteApnsChannel'>>  = async params => {
  // undefined
    return this.client.deleteApnsChannel(params as any).promise();
  }

  deleteApnsSandboxChannel: (params: RawParamsFrom<'deleteApnsSandboxChannel'>) => Promise<ReturnTypeFrom<'deleteApnsSandboxChannel'>>  = async params => {
  // undefined
    return this.client.deleteApnsSandboxChannel(params as any).promise();
  }

  deleteApnsVoipChannel: (params: RawParamsFrom<'deleteApnsVoipChannel'>) => Promise<ReturnTypeFrom<'deleteApnsVoipChannel'>>  = async params => {
  // undefined
    return this.client.deleteApnsVoipChannel(params as any).promise();
  }

  deleteApnsVoipSandboxChannel: (params: RawParamsFrom<'deleteApnsVoipSandboxChannel'>) => Promise<ReturnTypeFrom<'deleteApnsVoipSandboxChannel'>>  = async params => {
  // undefined
    return this.client.deleteApnsVoipSandboxChannel(params as any).promise();
  }

  deleteApp: (params: RawParamsFrom<'deleteApp'>) => Promise<ReturnTypeFrom<'deleteApp'>>  = async params => {
  // undefined
    return this.client.deleteApp(params as any).promise();
  }

  deleteBaiduChannel: (params: RawParamsFrom<'deleteBaiduChannel'>) => Promise<ReturnTypeFrom<'deleteBaiduChannel'>>  = async params => {
  // undefined
    return this.client.deleteBaiduChannel(params as any).promise();
  }

  deleteCampaign: (params: RawParamsFrom<'deleteCampaign'>) => Promise<ReturnTypeFrom<'deleteCampaign'>>  = async params => {
  // undefined
    return this.client.deleteCampaign(params as any).promise();
  }

  deleteEmailChannel: (params: RawParamsFrom<'deleteEmailChannel'>) => Promise<ReturnTypeFrom<'deleteEmailChannel'>>  = async params => {
  // undefined
    return this.client.deleteEmailChannel(params as any).promise();
  }

  deleteEmailTemplate: (params: RawParamsFrom<'deleteEmailTemplate'>) => Promise<ReturnTypeFrom<'deleteEmailTemplate'>>  = async params => {
  // undefined
    return this.client.deleteEmailTemplate(params as any).promise();
  }

  deleteEndpoint: (params: RawParamsFrom<'deleteEndpoint'>) => Promise<ReturnTypeFrom<'deleteEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteEndpoint(params as any).promise();
  }

  deleteEventStream: (params: RawParamsFrom<'deleteEventStream'>) => Promise<ReturnTypeFrom<'deleteEventStream'>>  = async params => {
  // undefined
    return this.client.deleteEventStream(params as any).promise();
  }

  deleteGcmChannel: (params: RawParamsFrom<'deleteGcmChannel'>) => Promise<ReturnTypeFrom<'deleteGcmChannel'>>  = async params => {
  // undefined
    return this.client.deleteGcmChannel(params as any).promise();
  }

  deleteInAppTemplate: (params: RawParamsFrom<'deleteInAppTemplate'>) => Promise<ReturnTypeFrom<'deleteInAppTemplate'>>  = async params => {
  // undefined
    return this.client.deleteInAppTemplate(params as any).promise();
  }

  deleteJourney: (params: RawParamsFrom<'deleteJourney'>) => Promise<ReturnTypeFrom<'deleteJourney'>>  = async params => {
  // undefined
    return this.client.deleteJourney(params as any).promise();
  }

  deletePushTemplate: (params: RawParamsFrom<'deletePushTemplate'>) => Promise<ReturnTypeFrom<'deletePushTemplate'>>  = async params => {
  // undefined
    return this.client.deletePushTemplate(params as any).promise();
  }

  deleteRecommenderConfiguration: (params: RawParamsFrom<'deleteRecommenderConfiguration'>) => Promise<ReturnTypeFrom<'deleteRecommenderConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteRecommenderConfiguration(params as any).promise();
  }

  deleteSegment: (params: RawParamsFrom<'deleteSegment'>) => Promise<ReturnTypeFrom<'deleteSegment'>>  = async params => {
  // undefined
    return this.client.deleteSegment(params as any).promise();
  }

  deleteSmsChannel: (params: RawParamsFrom<'deleteSmsChannel'>) => Promise<ReturnTypeFrom<'deleteSmsChannel'>>  = async params => {
  // undefined
    return this.client.deleteSmsChannel(params as any).promise();
  }

  deleteSmsTemplate: (params: RawParamsFrom<'deleteSmsTemplate'>) => Promise<ReturnTypeFrom<'deleteSmsTemplate'>>  = async params => {
  // undefined
    return this.client.deleteSmsTemplate(params as any).promise();
  }

  deleteUserEndpoints: (params: RawParamsFrom<'deleteUserEndpoints'>) => Promise<ReturnTypeFrom<'deleteUserEndpoints'>>  = async params => {
  // undefined
    return this.client.deleteUserEndpoints(params as any).promise();
  }

  deleteVoiceChannel: (params: RawParamsFrom<'deleteVoiceChannel'>) => Promise<ReturnTypeFrom<'deleteVoiceChannel'>>  = async params => {
  // undefined
    return this.client.deleteVoiceChannel(params as any).promise();
  }

  deleteVoiceTemplate: (params: RawParamsFrom<'deleteVoiceTemplate'>) => Promise<ReturnTypeFrom<'deleteVoiceTemplate'>>  = async params => {
  // undefined
    return this.client.deleteVoiceTemplate(params as any).promise();
  }

  getAdmChannel: (params: RawParamsFrom<'getAdmChannel'>) => Promise<ReturnTypeFrom<'getAdmChannel'>>  = async params => {
  // undefined
    return this.client.getAdmChannel(params as any).promise();
  }

  getApnsChannel: (params: RawParamsFrom<'getApnsChannel'>) => Promise<ReturnTypeFrom<'getApnsChannel'>>  = async params => {
  // undefined
    return this.client.getApnsChannel(params as any).promise();
  }

  getApnsSandboxChannel: (params: RawParamsFrom<'getApnsSandboxChannel'>) => Promise<ReturnTypeFrom<'getApnsSandboxChannel'>>  = async params => {
  // undefined
    return this.client.getApnsSandboxChannel(params as any).promise();
  }

  getApnsVoipChannel: (params: RawParamsFrom<'getApnsVoipChannel'>) => Promise<ReturnTypeFrom<'getApnsVoipChannel'>>  = async params => {
  // undefined
    return this.client.getApnsVoipChannel(params as any).promise();
  }

  getApnsVoipSandboxChannel: (params: RawParamsFrom<'getApnsVoipSandboxChannel'>) => Promise<ReturnTypeFrom<'getApnsVoipSandboxChannel'>>  = async params => {
  // undefined
    return this.client.getApnsVoipSandboxChannel(params as any).promise();
  }

  getApp: (params: RawParamsFrom<'getApp'>) => Promise<ReturnTypeFrom<'getApp'>>  = async params => {
  // undefined
    return this.client.getApp(params as any).promise();
  }

  getApplicationDateRangeKpi: (params: RawParamsFrom<'getApplicationDateRangeKpi'>) => Promise<ReturnTypeFrom<'getApplicationDateRangeKpi'>>  = async params => {
  // undefined
    return this.client.getApplicationDateRangeKpi(params as any).promise();
  }

  getApplicationSettings: (params: RawParamsFrom<'getApplicationSettings'>) => Promise<ReturnTypeFrom<'getApplicationSettings'>>  = async params => {
  // undefined
    return this.client.getApplicationSettings(params as any).promise();
  }

  getApps: (params: RawParamsFrom<'getApps'>) => Promise<ReturnTypeFrom<'getApps'>>  = async params => {
  // undefined
    return this.client.getApps(params as any).promise();
  }

  getBaiduChannel: (params: RawParamsFrom<'getBaiduChannel'>) => Promise<ReturnTypeFrom<'getBaiduChannel'>>  = async params => {
  // undefined
    return this.client.getBaiduChannel(params as any).promise();
  }

  getCampaign: (params: RawParamsFrom<'getCampaign'>) => Promise<ReturnTypeFrom<'getCampaign'>>  = async params => {
  // undefined
    return this.client.getCampaign(params as any).promise();
  }

  getCampaignActivities: (params: RawParamsFrom<'getCampaignActivities'>) => Promise<ReturnTypeFrom<'getCampaignActivities'>>  = async params => {
  // undefined
    return this.client.getCampaignActivities(params as any).promise();
  }

  getCampaignDateRangeKpi: (params: RawParamsFrom<'getCampaignDateRangeKpi'>) => Promise<ReturnTypeFrom<'getCampaignDateRangeKpi'>>  = async params => {
  // undefined
    return this.client.getCampaignDateRangeKpi(params as any).promise();
  }

  getCampaignVersion: (params: RawParamsFrom<'getCampaignVersion'>) => Promise<ReturnTypeFrom<'getCampaignVersion'>>  = async params => {
  // undefined
    return this.client.getCampaignVersion(params as any).promise();
  }

  getCampaignVersions: (params: RawParamsFrom<'getCampaignVersions'>) => Promise<ReturnTypeFrom<'getCampaignVersions'>>  = async params => {
  // undefined
    return this.client.getCampaignVersions(params as any).promise();
  }

  getCampaigns: (params: RawParamsFrom<'getCampaigns'>) => Promise<ReturnTypeFrom<'getCampaigns'>>  = async params => {
  // undefined
    return this.client.getCampaigns(params as any).promise();
  }

  getChannels: (params: RawParamsFrom<'getChannels'>) => Promise<ReturnTypeFrom<'getChannels'>>  = async params => {
  // undefined
    return this.client.getChannels(params as any).promise();
  }

  getEmailChannel: (params: RawParamsFrom<'getEmailChannel'>) => Promise<ReturnTypeFrom<'getEmailChannel'>>  = async params => {
  // undefined
    return this.client.getEmailChannel(params as any).promise();
  }

  getEmailTemplate: (params: RawParamsFrom<'getEmailTemplate'>) => Promise<ReturnTypeFrom<'getEmailTemplate'>>  = async params => {
  // undefined
    return this.client.getEmailTemplate(params as any).promise();
  }

  getEndpoint: (params: RawParamsFrom<'getEndpoint'>) => Promise<ReturnTypeFrom<'getEndpoint'>>  = async params => {
  // undefined
    return this.client.getEndpoint(params as any).promise();
  }

  getEventStream: (params: RawParamsFrom<'getEventStream'>) => Promise<ReturnTypeFrom<'getEventStream'>>  = async params => {
  // undefined
    return this.client.getEventStream(params as any).promise();
  }

  getExportJob: (params: RawParamsFrom<'getExportJob'>) => Promise<ReturnTypeFrom<'getExportJob'>>  = async params => {
  // undefined
    return this.client.getExportJob(params as any).promise();
  }

  getExportJobs: (params: RawParamsFrom<'getExportJobs'>) => Promise<ReturnTypeFrom<'getExportJobs'>>  = async params => {
  // undefined
    return this.client.getExportJobs(params as any).promise();
  }

  getGcmChannel: (params: RawParamsFrom<'getGcmChannel'>) => Promise<ReturnTypeFrom<'getGcmChannel'>>  = async params => {
  // undefined
    return this.client.getGcmChannel(params as any).promise();
  }

  getImportJob: (params: RawParamsFrom<'getImportJob'>) => Promise<ReturnTypeFrom<'getImportJob'>>  = async params => {
  // undefined
    return this.client.getImportJob(params as any).promise();
  }

  getImportJobs: (params: RawParamsFrom<'getImportJobs'>) => Promise<ReturnTypeFrom<'getImportJobs'>>  = async params => {
  // undefined
    return this.client.getImportJobs(params as any).promise();
  }

  getInAppMessages: (params: RawParamsFrom<'getInAppMessages'>) => Promise<ReturnTypeFrom<'getInAppMessages'>>  = async params => {
  // undefined
    return this.client.getInAppMessages(params as any).promise();
  }

  getInAppTemplate: (params: RawParamsFrom<'getInAppTemplate'>) => Promise<ReturnTypeFrom<'getInAppTemplate'>>  = async params => {
  // undefined
    return this.client.getInAppTemplate(params as any).promise();
  }

  getJourney: (params: RawParamsFrom<'getJourney'>) => Promise<ReturnTypeFrom<'getJourney'>>  = async params => {
  // undefined
    return this.client.getJourney(params as any).promise();
  }

  getJourneyDateRangeKpi: (params: RawParamsFrom<'getJourneyDateRangeKpi'>) => Promise<ReturnTypeFrom<'getJourneyDateRangeKpi'>>  = async params => {
  // undefined
    return this.client.getJourneyDateRangeKpi(params as any).promise();
  }

  getJourneyExecutionActivityMetrics: (params: RawParamsFrom<'getJourneyExecutionActivityMetrics'>) => Promise<ReturnTypeFrom<'getJourneyExecutionActivityMetrics'>>  = async params => {
  // undefined
    return this.client.getJourneyExecutionActivityMetrics(params as any).promise();
  }

  getJourneyExecutionMetrics: (params: RawParamsFrom<'getJourneyExecutionMetrics'>) => Promise<ReturnTypeFrom<'getJourneyExecutionMetrics'>>  = async params => {
  // undefined
    return this.client.getJourneyExecutionMetrics(params as any).promise();
  }

  getPushTemplate: (params: RawParamsFrom<'getPushTemplate'>) => Promise<ReturnTypeFrom<'getPushTemplate'>>  = async params => {
  // undefined
    return this.client.getPushTemplate(params as any).promise();
  }

  getRecommenderConfiguration: (params: RawParamsFrom<'getRecommenderConfiguration'>) => Promise<ReturnTypeFrom<'getRecommenderConfiguration'>>  = async params => {
  // undefined
    return this.client.getRecommenderConfiguration(params as any).promise();
  }

  getRecommenderConfigurations: (params: RawParamsFrom<'getRecommenderConfigurations'>) => Promise<ReturnTypeFrom<'getRecommenderConfigurations'>>  = async params => {
  // undefined
    return this.client.getRecommenderConfigurations(params as any).promise();
  }

  getSegment: (params: RawParamsFrom<'getSegment'>) => Promise<ReturnTypeFrom<'getSegment'>>  = async params => {
  // undefined
    return this.client.getSegment(params as any).promise();
  }

  getSegmentExportJobs: (params: RawParamsFrom<'getSegmentExportJobs'>) => Promise<ReturnTypeFrom<'getSegmentExportJobs'>>  = async params => {
  // undefined
    return this.client.getSegmentExportJobs(params as any).promise();
  }

  getSegmentImportJobs: (params: RawParamsFrom<'getSegmentImportJobs'>) => Promise<ReturnTypeFrom<'getSegmentImportJobs'>>  = async params => {
  // undefined
    return this.client.getSegmentImportJobs(params as any).promise();
  }

  getSegmentVersion: (params: RawParamsFrom<'getSegmentVersion'>) => Promise<ReturnTypeFrom<'getSegmentVersion'>>  = async params => {
  // undefined
    return this.client.getSegmentVersion(params as any).promise();
  }

  getSegmentVersions: (params: RawParamsFrom<'getSegmentVersions'>) => Promise<ReturnTypeFrom<'getSegmentVersions'>>  = async params => {
  // undefined
    return this.client.getSegmentVersions(params as any).promise();
  }

  getSegments: (params: RawParamsFrom<'getSegments'>) => Promise<ReturnTypeFrom<'getSegments'>>  = async params => {
  // undefined
    return this.client.getSegments(params as any).promise();
  }

  getSmsChannel: (params: RawParamsFrom<'getSmsChannel'>) => Promise<ReturnTypeFrom<'getSmsChannel'>>  = async params => {
  // undefined
    return this.client.getSmsChannel(params as any).promise();
  }

  getSmsTemplate: (params: RawParamsFrom<'getSmsTemplate'>) => Promise<ReturnTypeFrom<'getSmsTemplate'>>  = async params => {
  // undefined
    return this.client.getSmsTemplate(params as any).promise();
  }

  getUserEndpoints: (params: RawParamsFrom<'getUserEndpoints'>) => Promise<ReturnTypeFrom<'getUserEndpoints'>>  = async params => {
  // undefined
    return this.client.getUserEndpoints(params as any).promise();
  }

  getVoiceChannel: (params: RawParamsFrom<'getVoiceChannel'>) => Promise<ReturnTypeFrom<'getVoiceChannel'>>  = async params => {
  // undefined
    return this.client.getVoiceChannel(params as any).promise();
  }

  getVoiceTemplate: (params: RawParamsFrom<'getVoiceTemplate'>) => Promise<ReturnTypeFrom<'getVoiceTemplate'>>  = async params => {
  // undefined
    return this.client.getVoiceTemplate(params as any).promise();
  }

  listJourneys: (params: RawParamsFrom<'listJourneys'>) => Promise<ReturnTypeFrom<'listJourneys'>>  = async params => {
  // undefined
    return this.client.listJourneys(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTemplateVersions: (params: RawParamsFrom<'listTemplateVersions'>) => Promise<ReturnTypeFrom<'listTemplateVersions'>>  = async params => {
  // undefined
    return this.client.listTemplateVersions(params as any).promise();
  }

  listTemplates: (params: RawParamsFrom<'listTemplates'>) => Promise<ReturnTypeFrom<'listTemplates'>>  = async params => {
  // undefined
    return this.client.listTemplates(params as any).promise();
  }

  phoneNumberValidate: (params: RawParamsFrom<'phoneNumberValidate'>) => Promise<ReturnTypeFrom<'phoneNumberValidate'>>  = async params => {
  // undefined
    return this.client.phoneNumberValidate(params as any).promise();
  }

  putEventStream: (params: RawParamsFrom<'putEventStream'>) => Promise<ReturnTypeFrom<'putEventStream'>>  = async params => {
  // undefined
    return this.client.putEventStream(params as any).promise();
  }

  putEvents: (params: RawParamsFrom<'putEvents'>) => Promise<ReturnTypeFrom<'putEvents'>>  = async params => {
  // undefined
    return this.client.putEvents(params as any).promise();
  }

  removeAttributes: (params: RawParamsFrom<'removeAttributes'>) => Promise<ReturnTypeFrom<'removeAttributes'>>  = async params => {
  // undefined
    return this.client.removeAttributes(params as any).promise();
  }

  sendMessages: (params: RawParamsFrom<'sendMessages'>) => Promise<ReturnTypeFrom<'sendMessages'>>  = async params => {
  // undefined
    return this.client.sendMessages(params as any).promise();
  }

  sendOTPMessage: (params: RawParamsFrom<'sendOTPMessage'>) => Promise<ReturnTypeFrom<'sendOTPMessage'>>  = async params => {
  // undefined
    return this.client.sendOTPMessage(params as any).promise();
  }

  sendUsersMessages: (params: RawParamsFrom<'sendUsersMessages'>) => Promise<ReturnTypeFrom<'sendUsersMessages'>>  = async params => {
  // undefined
    return this.client.sendUsersMessages(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAdmChannel: (params: RawParamsFrom<'updateAdmChannel'>) => Promise<ReturnTypeFrom<'updateAdmChannel'>>  = async params => {
  // undefined
    return this.client.updateAdmChannel(params as any).promise();
  }

  updateApnsChannel: (params: RawParamsFrom<'updateApnsChannel'>) => Promise<ReturnTypeFrom<'updateApnsChannel'>>  = async params => {
  // undefined
    return this.client.updateApnsChannel(params as any).promise();
  }

  updateApnsSandboxChannel: (params: RawParamsFrom<'updateApnsSandboxChannel'>) => Promise<ReturnTypeFrom<'updateApnsSandboxChannel'>>  = async params => {
  // undefined
    return this.client.updateApnsSandboxChannel(params as any).promise();
  }

  updateApnsVoipChannel: (params: RawParamsFrom<'updateApnsVoipChannel'>) => Promise<ReturnTypeFrom<'updateApnsVoipChannel'>>  = async params => {
  // undefined
    return this.client.updateApnsVoipChannel(params as any).promise();
  }

  updateApnsVoipSandboxChannel: (params: RawParamsFrom<'updateApnsVoipSandboxChannel'>) => Promise<ReturnTypeFrom<'updateApnsVoipSandboxChannel'>>  = async params => {
  // undefined
    return this.client.updateApnsVoipSandboxChannel(params as any).promise();
  }

  updateApplicationSettings: (params: RawParamsFrom<'updateApplicationSettings'>) => Promise<ReturnTypeFrom<'updateApplicationSettings'>>  = async params => {
  // undefined
    return this.client.updateApplicationSettings(params as any).promise();
  }

  updateBaiduChannel: (params: RawParamsFrom<'updateBaiduChannel'>) => Promise<ReturnTypeFrom<'updateBaiduChannel'>>  = async params => {
  // undefined
    return this.client.updateBaiduChannel(params as any).promise();
  }

  updateCampaign: (params: RawParamsFrom<'updateCampaign'>) => Promise<ReturnTypeFrom<'updateCampaign'>>  = async params => {
  // undefined
    return this.client.updateCampaign(params as any).promise();
  }

  updateEmailChannel: (params: RawParamsFrom<'updateEmailChannel'>) => Promise<ReturnTypeFrom<'updateEmailChannel'>>  = async params => {
  // undefined
    return this.client.updateEmailChannel(params as any).promise();
  }

  updateEmailTemplate: (params: RawParamsFrom<'updateEmailTemplate'>) => Promise<ReturnTypeFrom<'updateEmailTemplate'>>  = async params => {
  // undefined
    return this.client.updateEmailTemplate(params as any).promise();
  }

  updateEndpoint: (params: RawParamsFrom<'updateEndpoint'>) => Promise<ReturnTypeFrom<'updateEndpoint'>>  = async params => {
  // undefined
    return this.client.updateEndpoint(params as any).promise();
  }

  updateEndpointsBatch: (params: RawParamsFrom<'updateEndpointsBatch'>) => Promise<ReturnTypeFrom<'updateEndpointsBatch'>>  = async params => {
  // undefined
    return this.client.updateEndpointsBatch(params as any).promise();
  }

  updateGcmChannel: (params: RawParamsFrom<'updateGcmChannel'>) => Promise<ReturnTypeFrom<'updateGcmChannel'>>  = async params => {
  // undefined
    return this.client.updateGcmChannel(params as any).promise();
  }

  updateInAppTemplate: (params: RawParamsFrom<'updateInAppTemplate'>) => Promise<ReturnTypeFrom<'updateInAppTemplate'>>  = async params => {
  // undefined
    return this.client.updateInAppTemplate(params as any).promise();
  }

  updateJourney: (params: RawParamsFrom<'updateJourney'>) => Promise<ReturnTypeFrom<'updateJourney'>>  = async params => {
  // undefined
    return this.client.updateJourney(params as any).promise();
  }

  updateJourneyState: (params: RawParamsFrom<'updateJourneyState'>) => Promise<ReturnTypeFrom<'updateJourneyState'>>  = async params => {
  // undefined
    return this.client.updateJourneyState(params as any).promise();
  }

  updatePushTemplate: (params: RawParamsFrom<'updatePushTemplate'>) => Promise<ReturnTypeFrom<'updatePushTemplate'>>  = async params => {
  // undefined
    return this.client.updatePushTemplate(params as any).promise();
  }

  updateRecommenderConfiguration: (params: RawParamsFrom<'updateRecommenderConfiguration'>) => Promise<ReturnTypeFrom<'updateRecommenderConfiguration'>>  = async params => {
  // undefined
    return this.client.updateRecommenderConfiguration(params as any).promise();
  }

  updateSegment: (params: RawParamsFrom<'updateSegment'>) => Promise<ReturnTypeFrom<'updateSegment'>>  = async params => {
  // undefined
    return this.client.updateSegment(params as any).promise();
  }

  updateSmsChannel: (params: RawParamsFrom<'updateSmsChannel'>) => Promise<ReturnTypeFrom<'updateSmsChannel'>>  = async params => {
  // undefined
    return this.client.updateSmsChannel(params as any).promise();
  }

  updateSmsTemplate: (params: RawParamsFrom<'updateSmsTemplate'>) => Promise<ReturnTypeFrom<'updateSmsTemplate'>>  = async params => {
  // undefined
    return this.client.updateSmsTemplate(params as any).promise();
  }

  updateTemplateActiveVersion: (params: RawParamsFrom<'updateTemplateActiveVersion'>) => Promise<ReturnTypeFrom<'updateTemplateActiveVersion'>>  = async params => {
  // undefined
    return this.client.updateTemplateActiveVersion(params as any).promise();
  }

  updateVoiceChannel: (params: RawParamsFrom<'updateVoiceChannel'>) => Promise<ReturnTypeFrom<'updateVoiceChannel'>>  = async params => {
  // undefined
    return this.client.updateVoiceChannel(params as any).promise();
  }

  updateVoiceTemplate: (params: RawParamsFrom<'updateVoiceTemplate'>) => Promise<ReturnTypeFrom<'updateVoiceTemplate'>>  = async params => {
  // undefined
    return this.client.updateVoiceTemplate(params as any).promise();
  }

  verifyOTPMessage: (params: RawParamsFrom<'verifyOTPMessage'>) => Promise<ReturnTypeFrom<'verifyOTPMessage'>>  = async params => {
  // undefined
    return this.client.verifyOTPMessage(params as any).promise();
  }
  
  static fromClient(client: AWSPinpoint): Pinpoint {
    return new Pinpoint(client) as any;
  }
  
  static client(options?: AWSPinpoint.Types.ClientConfiguration): Pinpoint {
    return new Pinpoint(new AWSPinpoint(options)) as any;
  }
}  
