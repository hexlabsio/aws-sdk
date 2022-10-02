import { Request, Chime as AWSChime } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSChime> = AWSChime[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSChime> = AWSChime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSChime[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSChime, Extras> = AWSChime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'chime';
    global: false;
    category: 'Customer Engagement'
    topLevelCalls: readonly ["listAccounts","listAppInstances","listChannelMembershipsForAppInstanceUser","listChannelsModeratedByAppInstanceUser","listMediaCapturePipelines","listMeetings","listPhoneNumberOrders","listPhoneNumbers","listSipMediaApplications","listSipRules","listVoiceConnectorGroups","listVoiceConnectors","searchAvailablePhoneNumbers"];
    
  associatePhoneNumberWithUser: FunctionTypeFrom<'associatePhoneNumberWithUser'>;

  associatePhoneNumbersWithVoiceConnector: FunctionTypeFrom<'associatePhoneNumbersWithVoiceConnector'>;

  associatePhoneNumbersWithVoiceConnectorGroup: FunctionTypeFrom<'associatePhoneNumbersWithVoiceConnectorGroup'>;

  associateSigninDelegateGroupsWithAccount: FunctionTypeFrom<'associateSigninDelegateGroupsWithAccount'>;

  batchCreateAttendee: FunctionTypeFrom<'batchCreateAttendee'>;

  batchCreateChannelMembership: FunctionTypeFrom<'batchCreateChannelMembership'>;

  batchCreateRoomMembership: FunctionTypeFrom<'batchCreateRoomMembership'>;

  batchDeletePhoneNumber: FunctionTypeFrom<'batchDeletePhoneNumber'>;

  batchSuspendUser: FunctionTypeFrom<'batchSuspendUser'>;

  batchUnsuspendUser: FunctionTypeFrom<'batchUnsuspendUser'>;

  batchUpdatePhoneNumber: FunctionTypeFrom<'batchUpdatePhoneNumber'>;

  batchUpdateUser: FunctionTypeFrom<'batchUpdateUser'>;

  createAccount: FunctionTypeFrom<'createAccount'>;

  createAppInstance: FunctionTypeFrom<'createAppInstance'>;

  createAppInstanceAdmin: FunctionTypeFrom<'createAppInstanceAdmin'>;

  createAppInstanceUser: FunctionTypeFrom<'createAppInstanceUser'>;

  createAttendee: FunctionTypeFrom<'createAttendee'>;

  createBot: FunctionTypeFrom<'createBot'>;

  createChannel: FunctionTypeFrom<'createChannel'>;

  createChannelBan: FunctionTypeFrom<'createChannelBan'>;

  createChannelMembership: FunctionTypeFrom<'createChannelMembership'>;

  createChannelModerator: FunctionTypeFrom<'createChannelModerator'>;

  createMediaCapturePipeline: FunctionTypeFrom<'createMediaCapturePipeline'>;

  createMeeting: FunctionTypeFrom<'createMeeting'>;

  createMeetingDialOut: FunctionTypeFrom<'createMeetingDialOut'>;

  createMeetingWithAttendees: FunctionTypeFrom<'createMeetingWithAttendees'>;

  createPhoneNumberOrder: FunctionTypeFrom<'createPhoneNumberOrder'>;

  createProxySession: FunctionTypeFrom<'createProxySession'>;

  createRoom: FunctionTypeFrom<'createRoom'>;

  createRoomMembership: FunctionTypeFrom<'createRoomMembership'>;

  createSipMediaApplication: FunctionTypeFrom<'createSipMediaApplication'>;

  createSipMediaApplicationCall: FunctionTypeFrom<'createSipMediaApplicationCall'>;

  createSipRule: FunctionTypeFrom<'createSipRule'>;

  createUser: FunctionTypeFrom<'createUser'>;

  createVoiceConnector: FunctionTypeFrom<'createVoiceConnector'>;

  createVoiceConnectorGroup: FunctionTypeFrom<'createVoiceConnectorGroup'>;

  deleteAccount: FunctionTypeFrom<'deleteAccount'>;

  deleteAppInstance: FunctionTypeFrom<'deleteAppInstance'>;

  deleteAppInstanceAdmin: FunctionTypeFrom<'deleteAppInstanceAdmin'>;

  deleteAppInstanceStreamingConfigurations: FunctionTypeFrom<'deleteAppInstanceStreamingConfigurations'>;

  deleteAppInstanceUser: FunctionTypeFrom<'deleteAppInstanceUser'>;

  deleteAttendee: FunctionTypeFrom<'deleteAttendee'>;

  deleteChannel: FunctionTypeFrom<'deleteChannel'>;

  deleteChannelBan: FunctionTypeFrom<'deleteChannelBan'>;

  deleteChannelMembership: FunctionTypeFrom<'deleteChannelMembership'>;

  deleteChannelMessage: FunctionTypeFrom<'deleteChannelMessage'>;

  deleteChannelModerator: FunctionTypeFrom<'deleteChannelModerator'>;

  deleteEventsConfiguration: FunctionTypeFrom<'deleteEventsConfiguration'>;

  deleteMediaCapturePipeline: FunctionTypeFrom<'deleteMediaCapturePipeline'>;

  deleteMeeting: FunctionTypeFrom<'deleteMeeting'>;

  deletePhoneNumber: FunctionTypeFrom<'deletePhoneNumber'>;

  deleteProxySession: FunctionTypeFrom<'deleteProxySession'>;

  deleteRoom: FunctionTypeFrom<'deleteRoom'>;

  deleteRoomMembership: FunctionTypeFrom<'deleteRoomMembership'>;

  deleteSipMediaApplication: FunctionTypeFrom<'deleteSipMediaApplication'>;

  deleteSipRule: FunctionTypeFrom<'deleteSipRule'>;

  deleteVoiceConnector: FunctionTypeFrom<'deleteVoiceConnector'>;

  deleteVoiceConnectorEmergencyCallingConfiguration: FunctionTypeFrom<'deleteVoiceConnectorEmergencyCallingConfiguration'>;

  deleteVoiceConnectorGroup: FunctionTypeFrom<'deleteVoiceConnectorGroup'>;

  deleteVoiceConnectorOrigination: FunctionTypeFrom<'deleteVoiceConnectorOrigination'>;

  deleteVoiceConnectorProxy: FunctionTypeFrom<'deleteVoiceConnectorProxy'>;

  deleteVoiceConnectorStreamingConfiguration: FunctionTypeFrom<'deleteVoiceConnectorStreamingConfiguration'>;

  deleteVoiceConnectorTermination: FunctionTypeFrom<'deleteVoiceConnectorTermination'>;

  deleteVoiceConnectorTerminationCredentials: FunctionTypeFrom<'deleteVoiceConnectorTerminationCredentials'>;

  describeAppInstance: FunctionTypeFrom<'describeAppInstance'>;

  describeAppInstanceAdmin: FunctionTypeFrom<'describeAppInstanceAdmin'>;

  describeAppInstanceUser: FunctionTypeFrom<'describeAppInstanceUser'>;

  describeChannel: FunctionTypeFrom<'describeChannel'>;

  describeChannelBan: FunctionTypeFrom<'describeChannelBan'>;

  describeChannelMembership: FunctionTypeFrom<'describeChannelMembership'>;

  describeChannelMembershipForAppInstanceUser: FunctionTypeFrom<'describeChannelMembershipForAppInstanceUser'>;

  describeChannelModeratedByAppInstanceUser: FunctionTypeFrom<'describeChannelModeratedByAppInstanceUser'>;

  describeChannelModerator: FunctionTypeFrom<'describeChannelModerator'>;

  disassociatePhoneNumberFromUser: FunctionTypeFrom<'disassociatePhoneNumberFromUser'>;

  disassociatePhoneNumbersFromVoiceConnector: FunctionTypeFrom<'disassociatePhoneNumbersFromVoiceConnector'>;

  disassociatePhoneNumbersFromVoiceConnectorGroup: FunctionTypeFrom<'disassociatePhoneNumbersFromVoiceConnectorGroup'>;

  disassociateSigninDelegateGroupsFromAccount: FunctionTypeFrom<'disassociateSigninDelegateGroupsFromAccount'>;

  getAccount: FunctionTypeFrom<'getAccount'>;

  getAccountSettings: FunctionTypeFrom<'getAccountSettings'>;

  getAppInstanceRetentionSettings: FunctionTypeFrom<'getAppInstanceRetentionSettings'>;

  getAppInstanceStreamingConfigurations: FunctionTypeFrom<'getAppInstanceStreamingConfigurations'>;

  getAttendee: FunctionTypeFrom<'getAttendee'>;

  getBot: FunctionTypeFrom<'getBot'>;

  getChannelMessage: FunctionTypeFrom<'getChannelMessage'>;

  getEventsConfiguration: FunctionTypeFrom<'getEventsConfiguration'>;

  getGlobalSettings: FunctionTypeFrom<'getGlobalSettings'>;

  getMediaCapturePipeline: FunctionTypeFrom<'getMediaCapturePipeline'>;

  getMeeting: FunctionTypeFrom<'getMeeting'>;

  getMessagingSessionEndpoint: FunctionTypeFrom<'getMessagingSessionEndpoint'>;

  getPhoneNumber: FunctionTypeFrom<'getPhoneNumber'>;

  getPhoneNumberOrder: FunctionTypeFrom<'getPhoneNumberOrder'>;

  getPhoneNumberSettings: FunctionTypeFrom<'getPhoneNumberSettings'>;

  getProxySession: FunctionTypeFrom<'getProxySession'>;

  getRetentionSettings: FunctionTypeFrom<'getRetentionSettings'>;

  getRoom: FunctionTypeFrom<'getRoom'>;

  getSipMediaApplication: FunctionTypeFrom<'getSipMediaApplication'>;

  getSipMediaApplicationLoggingConfiguration: FunctionTypeFrom<'getSipMediaApplicationLoggingConfiguration'>;

  getSipRule: FunctionTypeFrom<'getSipRule'>;

  getUser: FunctionTypeFrom<'getUser'>;

  getUserSettings: FunctionTypeFrom<'getUserSettings'>;

  getVoiceConnector: FunctionTypeFrom<'getVoiceConnector'>;

  getVoiceConnectorEmergencyCallingConfiguration: FunctionTypeFrom<'getVoiceConnectorEmergencyCallingConfiguration'>;

  getVoiceConnectorGroup: FunctionTypeFrom<'getVoiceConnectorGroup'>;

  getVoiceConnectorLoggingConfiguration: FunctionTypeFrom<'getVoiceConnectorLoggingConfiguration'>;

  getVoiceConnectorOrigination: FunctionTypeFrom<'getVoiceConnectorOrigination'>;

  getVoiceConnectorProxy: FunctionTypeFrom<'getVoiceConnectorProxy'>;

  getVoiceConnectorStreamingConfiguration: FunctionTypeFrom<'getVoiceConnectorStreamingConfiguration'>;

  getVoiceConnectorTermination: FunctionTypeFrom<'getVoiceConnectorTermination'>;

  getVoiceConnectorTerminationHealth: FunctionTypeFrom<'getVoiceConnectorTerminationHealth'>;

  inviteUsers: FunctionTypeFrom<'inviteUsers'>;

  listAccounts: FunctionTypeFrom<'listAccounts'>;

  listAppInstanceAdmins: FunctionTypeFrom<'listAppInstanceAdmins'>;

  listAppInstanceUsers: FunctionTypeFrom<'listAppInstanceUsers'>;

  listAppInstances: FunctionTypeFrom<'listAppInstances'>;

  listAttendeeTags: FunctionTypeFrom<'listAttendeeTags'>;

  listAttendees: FunctionTypeFrom<'listAttendees'>;

  listBots: FunctionTypeFrom<'listBots'>;

  listChannelBans: FunctionTypeFrom<'listChannelBans'>;

  listChannelMemberships: FunctionTypeFrom<'listChannelMemberships'>;

  listChannelMembershipsForAppInstanceUser: FunctionTypeFrom<'listChannelMembershipsForAppInstanceUser'>;

  listChannelMessages: FunctionTypeFrom<'listChannelMessages'>;

  listChannelModerators: FunctionTypeFrom<'listChannelModerators'>;

  listChannels: FunctionTypeFrom<'listChannels'>;

  listChannelsModeratedByAppInstanceUser: FunctionTypeFrom<'listChannelsModeratedByAppInstanceUser'>;

  listMediaCapturePipelines: FunctionTypeFrom<'listMediaCapturePipelines'>;

  listMeetingTags: FunctionTypeFrom<'listMeetingTags'>;

  listMeetings: FunctionTypeFrom<'listMeetings'>;

  listPhoneNumberOrders: FunctionTypeFrom<'listPhoneNumberOrders'>;

  listPhoneNumbers: FunctionTypeFrom<'listPhoneNumbers'>;

  listProxySessions: FunctionTypeFrom<'listProxySessions'>;

  listRoomMemberships: FunctionTypeFrom<'listRoomMemberships'>;

  listRooms: FunctionTypeFrom<'listRooms'>;

  listSipMediaApplications: FunctionTypeFrom<'listSipMediaApplications'>;

  listSipRules: FunctionTypeFrom<'listSipRules'>;

  listSupportedPhoneNumberCountries: FunctionTypeFrom<'listSupportedPhoneNumberCountries'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listUsers: FunctionTypeFrom<'listUsers'>;

  listVoiceConnectorGroups: FunctionTypeFrom<'listVoiceConnectorGroups'>;

  listVoiceConnectorTerminationCredentials: FunctionTypeFrom<'listVoiceConnectorTerminationCredentials'>;

  listVoiceConnectors: FunctionTypeFrom<'listVoiceConnectors'>;

  logoutUser: FunctionTypeFrom<'logoutUser'>;

  putAppInstanceRetentionSettings: FunctionTypeFrom<'putAppInstanceRetentionSettings'>;

  putAppInstanceStreamingConfigurations: FunctionTypeFrom<'putAppInstanceStreamingConfigurations'>;

  putEventsConfiguration: FunctionTypeFrom<'putEventsConfiguration'>;

  putRetentionSettings: FunctionTypeFrom<'putRetentionSettings'>;

  putSipMediaApplicationLoggingConfiguration: FunctionTypeFrom<'putSipMediaApplicationLoggingConfiguration'>;

  putVoiceConnectorEmergencyCallingConfiguration: FunctionTypeFrom<'putVoiceConnectorEmergencyCallingConfiguration'>;

  putVoiceConnectorLoggingConfiguration: FunctionTypeFrom<'putVoiceConnectorLoggingConfiguration'>;

  putVoiceConnectorOrigination: FunctionTypeFrom<'putVoiceConnectorOrigination'>;

  putVoiceConnectorProxy: FunctionTypeFrom<'putVoiceConnectorProxy'>;

  putVoiceConnectorStreamingConfiguration: FunctionTypeFrom<'putVoiceConnectorStreamingConfiguration'>;

  putVoiceConnectorTermination: FunctionTypeFrom<'putVoiceConnectorTermination'>;

  putVoiceConnectorTerminationCredentials: FunctionTypeFrom<'putVoiceConnectorTerminationCredentials'>;

  redactChannelMessage: FunctionTypeFrom<'redactChannelMessage'>;

  redactConversationMessage: FunctionTypeFrom<'redactConversationMessage'>;

  redactRoomMessage: FunctionTypeFrom<'redactRoomMessage'>;

  regenerateSecurityToken: FunctionTypeFrom<'regenerateSecurityToken'>;

  resetPersonalPIN: FunctionTypeFrom<'resetPersonalPIN'>;

  restorePhoneNumber: FunctionTypeFrom<'restorePhoneNumber'>;

  searchAvailablePhoneNumbers: FunctionTypeFrom<'searchAvailablePhoneNumbers'>;

  sendChannelMessage: FunctionTypeFrom<'sendChannelMessage'>;

  startMeetingTranscription: FunctionTypeFrom<'startMeetingTranscription'>;

  stopMeetingTranscription: FunctionTypeFrom<'stopMeetingTranscription'>;

  tagAttendee: FunctionTypeFrom<'tagAttendee'>;

  tagMeeting: FunctionTypeFrom<'tagMeeting'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagAttendee: FunctionTypeFrom<'untagAttendee'>;

  untagMeeting: FunctionTypeFrom<'untagMeeting'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccount: FunctionTypeFrom<'updateAccount'>;

  updateAccountSettings: FunctionTypeFrom<'updateAccountSettings'>;

  updateAppInstance: FunctionTypeFrom<'updateAppInstance'>;

  updateAppInstanceUser: FunctionTypeFrom<'updateAppInstanceUser'>;

  updateBot: FunctionTypeFrom<'updateBot'>;

  updateChannel: FunctionTypeFrom<'updateChannel'>;

  updateChannelMessage: FunctionTypeFrom<'updateChannelMessage'>;

  updateChannelReadMarker: FunctionTypeFrom<'updateChannelReadMarker'>;

  updateGlobalSettings: FunctionTypeFrom<'updateGlobalSettings'>;

  updatePhoneNumber: FunctionTypeFrom<'updatePhoneNumber'>;

  updatePhoneNumberSettings: FunctionTypeFrom<'updatePhoneNumberSettings'>;

  updateProxySession: FunctionTypeFrom<'updateProxySession'>;

  updateRoom: FunctionTypeFrom<'updateRoom'>;

  updateRoomMembership: FunctionTypeFrom<'updateRoomMembership'>;

  updateSipMediaApplication: FunctionTypeFrom<'updateSipMediaApplication'>;

  updateSipMediaApplicationCall: FunctionTypeFrom<'updateSipMediaApplicationCall'>;

  updateSipRule: FunctionTypeFrom<'updateSipRule'>;

  updateUser: FunctionTypeFrom<'updateUser'>;

  updateUserSettings: FunctionTypeFrom<'updateUserSettings'>;

  updateVoiceConnector: FunctionTypeFrom<'updateVoiceConnector'>;

  updateVoiceConnectorGroup: FunctionTypeFrom<'updateVoiceConnectorGroup'>;

  validateE911Address: FunctionTypeFrom<'validateE911Address'>
}
 
export class Chime implements ClientType {
  private constructor(private readonly client: AWSChime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'chime';
  public readonly global = false;
  public readonly category = 'Customer Engagement';
  public readonly topLevelCalls = ["listAccounts","listAppInstances","listChannelMembershipsForAppInstanceUser","listChannelsModeratedByAppInstanceUser","listMediaCapturePipelines","listMeetings","listPhoneNumberOrders","listPhoneNumbers","listSipMediaApplications","listSipRules","listVoiceConnectorGroups","listVoiceConnectors","searchAvailablePhoneNumbers"] as const;
  
  async associatePhoneNumberWithUser(...args: any): Promise<any> {
  // undefined
    return this.client.associatePhoneNumberWithUser(...args).promise()
  }

  async associatePhoneNumbersWithVoiceConnector(...args: any): Promise<any> {
  // undefined
    return this.client.associatePhoneNumbersWithVoiceConnector(...args).promise()
  }

  async associatePhoneNumbersWithVoiceConnectorGroup(...args: any): Promise<any> {
  // undefined
    return this.client.associatePhoneNumbersWithVoiceConnectorGroup(...args).promise()
  }

  async associateSigninDelegateGroupsWithAccount(...args: any): Promise<any> {
  // undefined
    return this.client.associateSigninDelegateGroupsWithAccount(...args).promise()
  }

  async batchCreateAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateAttendee(...args).promise()
  }

  async batchCreateChannelMembership(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateChannelMembership(...args).promise()
  }

  async batchCreateRoomMembership(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateRoomMembership(...args).promise()
  }

  async batchDeletePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeletePhoneNumber(...args).promise()
  }

  async batchSuspendUser(...args: any): Promise<any> {
  // undefined
    return this.client.batchSuspendUser(...args).promise()
  }

  async batchUnsuspendUser(...args: any): Promise<any> {
  // undefined
    return this.client.batchUnsuspendUser(...args).promise()
  }

  async batchUpdatePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdatePhoneNumber(...args).promise()
  }

  async batchUpdateUser(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateUser(...args).promise()
  }

  async createAccount(...args: any): Promise<any> {
  // undefined
    return this.client.createAccount(...args).promise()
  }

  async createAppInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createAppInstance(...args).promise()
  }

  async createAppInstanceAdmin(...args: any): Promise<any> {
  // undefined
    return this.client.createAppInstanceAdmin(...args).promise()
  }

  async createAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.createAppInstanceUser(...args).promise()
  }

  async createAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.createAttendee(...args).promise()
  }

  async createBot(...args: any): Promise<any> {
  // undefined
    return this.client.createBot(...args).promise()
  }

  async createChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createChannel(...args).promise()
  }

  async createChannelBan(...args: any): Promise<any> {
  // undefined
    return this.client.createChannelBan(...args).promise()
  }

  async createChannelMembership(...args: any): Promise<any> {
  // undefined
    return this.client.createChannelMembership(...args).promise()
  }

  async createChannelModerator(...args: any): Promise<any> {
  // undefined
    return this.client.createChannelModerator(...args).promise()
  }

  async createMediaCapturePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createMediaCapturePipeline(...args).promise()
  }

  async createMeeting(...args: any): Promise<any> {
  // undefined
    return this.client.createMeeting(...args).promise()
  }

  async createMeetingDialOut(...args: any): Promise<any> {
  // undefined
    return this.client.createMeetingDialOut(...args).promise()
  }

  async createMeetingWithAttendees(...args: any): Promise<any> {
  // undefined
    return this.client.createMeetingWithAttendees(...args).promise()
  }

  async createPhoneNumberOrder(...args: any): Promise<any> {
  // undefined
    return this.client.createPhoneNumberOrder(...args).promise()
  }

  async createProxySession(...args: any): Promise<any> {
  // undefined
    return this.client.createProxySession(...args).promise()
  }

  async createRoom(...args: any): Promise<any> {
  // undefined
    return this.client.createRoom(...args).promise()
  }

  async createRoomMembership(...args: any): Promise<any> {
  // undefined
    return this.client.createRoomMembership(...args).promise()
  }

  async createSipMediaApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createSipMediaApplication(...args).promise()
  }

  async createSipMediaApplicationCall(...args: any): Promise<any> {
  // undefined
    return this.client.createSipMediaApplicationCall(...args).promise()
  }

  async createSipRule(...args: any): Promise<any> {
  // undefined
    return this.client.createSipRule(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async createVoiceConnector(...args: any): Promise<any> {
  // undefined
    return this.client.createVoiceConnector(...args).promise()
  }

  async createVoiceConnectorGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createVoiceConnectorGroup(...args).promise()
  }

  async deleteAccount(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccount(...args).promise()
  }

  async deleteAppInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppInstance(...args).promise()
  }

  async deleteAppInstanceAdmin(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppInstanceAdmin(...args).promise()
  }

  async deleteAppInstanceStreamingConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppInstanceStreamingConfigurations(...args).promise()
  }

  async deleteAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppInstanceUser(...args).promise()
  }

  async deleteAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAttendee(...args).promise()
  }

  async deleteChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannel(...args).promise()
  }

  async deleteChannelBan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelBan(...args).promise()
  }

  async deleteChannelMembership(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelMembership(...args).promise()
  }

  async deleteChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelMessage(...args).promise()
  }

  async deleteChannelModerator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannelModerator(...args).promise()
  }

  async deleteEventsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventsConfiguration(...args).promise()
  }

  async deleteMediaCapturePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMediaCapturePipeline(...args).promise()
  }

  async deleteMeeting(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMeeting(...args).promise()
  }

  async deletePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.deletePhoneNumber(...args).promise()
  }

  async deleteProxySession(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProxySession(...args).promise()
  }

  async deleteRoom(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoom(...args).promise()
  }

  async deleteRoomMembership(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoomMembership(...args).promise()
  }

  async deleteSipMediaApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSipMediaApplication(...args).promise()
  }

  async deleteSipRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSipRule(...args).promise()
  }

  async deleteVoiceConnector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceConnector(...args).promise()
  }

  async deleteVoiceConnectorEmergencyCallingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(...args).promise()
  }

  async deleteVoiceConnectorGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceConnectorGroup(...args).promise()
  }

  async deleteVoiceConnectorOrigination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceConnectorOrigination(...args).promise()
  }

  async deleteVoiceConnectorProxy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceConnectorProxy(...args).promise()
  }

  async deleteVoiceConnectorStreamingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceConnectorStreamingConfiguration(...args).promise()
  }

  async deleteVoiceConnectorTermination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceConnectorTermination(...args).promise()
  }

  async deleteVoiceConnectorTerminationCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceConnectorTerminationCredentials(...args).promise()
  }

  async describeAppInstance(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppInstance(...args).promise()
  }

  async describeAppInstanceAdmin(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppInstanceAdmin(...args).promise()
  }

  async describeAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppInstanceUser(...args).promise()
  }

  async describeChannel(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannel(...args).promise()
  }

  async describeChannelBan(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelBan(...args).promise()
  }

  async describeChannelMembership(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelMembership(...args).promise()
  }

  async describeChannelMembershipForAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelMembershipForAppInstanceUser(...args).promise()
  }

  async describeChannelModeratedByAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelModeratedByAppInstanceUser(...args).promise()
  }

  async describeChannelModerator(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannelModerator(...args).promise()
  }

  async disassociatePhoneNumberFromUser(...args: any): Promise<any> {
  // undefined
    return this.client.disassociatePhoneNumberFromUser(...args).promise()
  }

  async disassociatePhoneNumbersFromVoiceConnector(...args: any): Promise<any> {
  // undefined
    return this.client.disassociatePhoneNumbersFromVoiceConnector(...args).promise()
  }

  async disassociatePhoneNumbersFromVoiceConnectorGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(...args).promise()
  }

  async disassociateSigninDelegateGroupsFromAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateSigninDelegateGroupsFromAccount(...args).promise()
  }

  async getAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getAccount(...args).promise()
  }

  async getAccountSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountSettings(...args).promise()
  }

  async getAppInstanceRetentionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getAppInstanceRetentionSettings(...args).promise()
  }

  async getAppInstanceStreamingConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.getAppInstanceStreamingConfigurations(...args).promise()
  }

  async getAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.getAttendee(...args).promise()
  }

  async getBot(...args: any): Promise<any> {
  // undefined
    return this.client.getBot(...args).promise()
  }

  async getChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.getChannelMessage(...args).promise()
  }

  async getEventsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getEventsConfiguration(...args).promise()
  }

  async getGlobalSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getGlobalSettings(...args).promise()
  }

  async getMediaCapturePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.getMediaCapturePipeline(...args).promise()
  }

  async getMeeting(...args: any): Promise<any> {
  // undefined
    return this.client.getMeeting(...args).promise()
  }

  async getMessagingSessionEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getMessagingSessionEndpoint(...args).promise()
  }

  async getPhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.getPhoneNumber(...args).promise()
  }

  async getPhoneNumberOrder(...args: any): Promise<any> {
  // undefined
    return this.client.getPhoneNumberOrder(...args).promise()
  }

  async getPhoneNumberSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getPhoneNumberSettings(...args).promise()
  }

  async getProxySession(...args: any): Promise<any> {
  // undefined
    return this.client.getProxySession(...args).promise()
  }

  async getRetentionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getRetentionSettings(...args).promise()
  }

  async getRoom(...args: any): Promise<any> {
  // undefined
    return this.client.getRoom(...args).promise()
  }

  async getSipMediaApplication(...args: any): Promise<any> {
  // undefined
    return this.client.getSipMediaApplication(...args).promise()
  }

  async getSipMediaApplicationLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getSipMediaApplicationLoggingConfiguration(...args).promise()
  }

  async getSipRule(...args: any): Promise<any> {
  // undefined
    return this.client.getSipRule(...args).promise()
  }

  async getUser(...args: any): Promise<any> {
  // undefined
    return this.client.getUser(...args).promise()
  }

  async getUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getUserSettings(...args).promise()
  }

  async getVoiceConnector(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnector(...args).promise()
  }

  async getVoiceConnectorEmergencyCallingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnectorEmergencyCallingConfiguration(...args).promise()
  }

  async getVoiceConnectorGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnectorGroup(...args).promise()
  }

  async getVoiceConnectorLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnectorLoggingConfiguration(...args).promise()
  }

  async getVoiceConnectorOrigination(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnectorOrigination(...args).promise()
  }

  async getVoiceConnectorProxy(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnectorProxy(...args).promise()
  }

  async getVoiceConnectorStreamingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnectorStreamingConfiguration(...args).promise()
  }

  async getVoiceConnectorTermination(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnectorTermination(...args).promise()
  }

  async getVoiceConnectorTerminationHealth(...args: any): Promise<any> {
  // undefined
    return this.client.getVoiceConnectorTerminationHealth(...args).promise()
  }

  async inviteUsers(...args: any): Promise<any> {
  // undefined
    return this.client.inviteUsers(...args).promise()
  }

  async listAccounts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccounts(...args).promise()
  }

  async listAppInstanceAdmins(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceAdmins(...args).promise()
  }

  async listAppInstanceUsers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceUsers(...args).promise()
  }

  async listAppInstances(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstances(...args).promise()
  }

  async listAttendeeTags(...args: any): Promise<any> {
  // undefined
    return this.client.listAttendeeTags(...args).promise()
  }

  async listAttendees(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAttendees(...args).promise()
  }

  async listBots(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listBots(...args).promise()
  }

  async listChannelBans(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelBans(...args).promise()
  }

  async listChannelMemberships(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMemberships(...args).promise()
  }

  async listChannelMembershipsForAppInstanceUser(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMembershipsForAppInstanceUser(...args).promise()
  }

  async listChannelMessages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMessages(...args).promise()
  }

  async listChannelModerators(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelModerators(...args).promise()
  }

  async listChannels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannels(...args).promise()
  }

  async listChannelsModeratedByAppInstanceUser(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelsModeratedByAppInstanceUser(...args).promise()
  }

  async listMediaCapturePipelines(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMediaCapturePipelines(...args).promise()
  }

  async listMeetingTags(...args: any): Promise<any> {
  // undefined
    return this.client.listMeetingTags(...args).promise()
  }

  async listMeetings(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMeetings(...args).promise()
  }

  async listPhoneNumberOrders(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPhoneNumberOrders(...args).promise()
  }

  async listPhoneNumbers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPhoneNumbers(...args).promise()
  }

  async listProxySessions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProxySessions(...args).promise()
  }

  async listRoomMemberships(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRoomMemberships(...args).promise()
  }

  async listRooms(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRooms(...args).promise()
  }

  async listSipMediaApplications(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSipMediaApplications(...args).promise()
  }

  async listSipRules(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSipRules(...args).promise()
  }

  async listSupportedPhoneNumberCountries(...args: any): Promise<any> {
  // undefined
    return this.client.listSupportedPhoneNumberCountries(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listUsers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listUsers(...args).promise()
  }

  async listVoiceConnectorGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVoiceConnectorGroups(...args).promise()
  }

  async listVoiceConnectorTerminationCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.listVoiceConnectorTerminationCredentials(...args).promise()
  }

  async listVoiceConnectors(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVoiceConnectors(...args).promise()
  }

  async logoutUser(...args: any): Promise<any> {
  // undefined
    return this.client.logoutUser(...args).promise()
  }

  async putAppInstanceRetentionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.putAppInstanceRetentionSettings(...args).promise()
  }

  async putAppInstanceStreamingConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.putAppInstanceStreamingConfigurations(...args).promise()
  }

  async putEventsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putEventsConfiguration(...args).promise()
  }

  async putRetentionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.putRetentionSettings(...args).promise()
  }

  async putSipMediaApplicationLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putSipMediaApplicationLoggingConfiguration(...args).promise()
  }

  async putVoiceConnectorEmergencyCallingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putVoiceConnectorEmergencyCallingConfiguration(...args).promise()
  }

  async putVoiceConnectorLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putVoiceConnectorLoggingConfiguration(...args).promise()
  }

  async putVoiceConnectorOrigination(...args: any): Promise<any> {
  // undefined
    return this.client.putVoiceConnectorOrigination(...args).promise()
  }

  async putVoiceConnectorProxy(...args: any): Promise<any> {
  // undefined
    return this.client.putVoiceConnectorProxy(...args).promise()
  }

  async putVoiceConnectorStreamingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putVoiceConnectorStreamingConfiguration(...args).promise()
  }

  async putVoiceConnectorTermination(...args: any): Promise<any> {
  // undefined
    return this.client.putVoiceConnectorTermination(...args).promise()
  }

  async putVoiceConnectorTerminationCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.putVoiceConnectorTerminationCredentials(...args).promise()
  }

  async redactChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.redactChannelMessage(...args).promise()
  }

  async redactConversationMessage(...args: any): Promise<any> {
  // undefined
    return this.client.redactConversationMessage(...args).promise()
  }

  async redactRoomMessage(...args: any): Promise<any> {
  // undefined
    return this.client.redactRoomMessage(...args).promise()
  }

  async regenerateSecurityToken(...args: any): Promise<any> {
  // undefined
    return this.client.regenerateSecurityToken(...args).promise()
  }

  async resetPersonalPIN(...args: any): Promise<any> {
  // undefined
    return this.client.resetPersonalPIN(...args).promise()
  }

  async restorePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.restorePhoneNumber(...args).promise()
  }

  async searchAvailablePhoneNumbers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchAvailablePhoneNumbers(...args).promise()
  }

  async sendChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.sendChannelMessage(...args).promise()
  }

  async startMeetingTranscription(...args: any): Promise<any> {
  // undefined
    return this.client.startMeetingTranscription(...args).promise()
  }

  async stopMeetingTranscription(...args: any): Promise<any> {
  // undefined
    return this.client.stopMeetingTranscription(...args).promise()
  }

  async tagAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.tagAttendee(...args).promise()
  }

  async tagMeeting(...args: any): Promise<any> {
  // undefined
    return this.client.tagMeeting(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagAttendee(...args: any): Promise<any> {
  // undefined
    return this.client.untagAttendee(...args).promise()
  }

  async untagMeeting(...args: any): Promise<any> {
  // undefined
    return this.client.untagMeeting(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAccount(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccount(...args).promise()
  }

  async updateAccountSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccountSettings(...args).promise()
  }

  async updateAppInstance(...args: any): Promise<any> {
  // undefined
    return this.client.updateAppInstance(...args).promise()
  }

  async updateAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateAppInstanceUser(...args).promise()
  }

  async updateBot(...args: any): Promise<any> {
  // undefined
    return this.client.updateBot(...args).promise()
  }

  async updateChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannel(...args).promise()
  }

  async updateChannelMessage(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannelMessage(...args).promise()
  }

  async updateChannelReadMarker(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannelReadMarker(...args).promise()
  }

  async updateGlobalSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateGlobalSettings(...args).promise()
  }

  async updatePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.updatePhoneNumber(...args).promise()
  }

  async updatePhoneNumberSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updatePhoneNumberSettings(...args).promise()
  }

  async updateProxySession(...args: any): Promise<any> {
  // undefined
    return this.client.updateProxySession(...args).promise()
  }

  async updateRoom(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoom(...args).promise()
  }

  async updateRoomMembership(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoomMembership(...args).promise()
  }

  async updateSipMediaApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateSipMediaApplication(...args).promise()
  }

  async updateSipMediaApplicationCall(...args: any): Promise<any> {
  // undefined
    return this.client.updateSipMediaApplicationCall(...args).promise()
  }

  async updateSipRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateSipRule(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }

  async updateUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserSettings(...args).promise()
  }

  async updateVoiceConnector(...args: any): Promise<any> {
  // undefined
    return this.client.updateVoiceConnector(...args).promise()
  }

  async updateVoiceConnectorGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateVoiceConnectorGroup(...args).promise()
  }

  async validateE911Address(...args: any): Promise<any> {
  // undefined
    return this.client.validateE911Address(...args).promise()
  }
  
  static fromClient(client: AWSChime): ClientType {
    return new Chime(client) as any;
  }
  
  static client(options?: AWSChime.Types.ClientConfiguration): ClientType {
    return new Chime(new AWSChime(options)) as any;
  }
}  
