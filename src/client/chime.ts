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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSChime> = AWSChime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Chime {
  private constructor(private readonly client: AWSChime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'chime' as const;
  public readonly global = false as const;
  public readonly category = 'Customer Engagement' as const;
  public readonly topLevelCalls = ["listAccounts","listAppInstances","listChannelMembershipsForAppInstanceUser","listChannelsModeratedByAppInstanceUser","listMediaCapturePipelines","listMeetings","listPhoneNumberOrders","listPhoneNumbers","listSipMediaApplications","listSipRules","listVoiceConnectorGroups","listVoiceConnectors","searchAvailablePhoneNumbers"] as const;
  
  associatePhoneNumberWithUser: (params: RawParamsFrom<'associatePhoneNumberWithUser'>) => Promise<ReturnTypeFrom<'associatePhoneNumberWithUser'>>  = async params => {
  // undefined
    return this.client.associatePhoneNumberWithUser(params as any).promise();
  }

  associatePhoneNumbersWithVoiceConnector: (params: RawParamsFrom<'associatePhoneNumbersWithVoiceConnector'>) => Promise<ReturnTypeFrom<'associatePhoneNumbersWithVoiceConnector'>>  = async params => {
  // undefined
    return this.client.associatePhoneNumbersWithVoiceConnector(params as any).promise();
  }

  associatePhoneNumbersWithVoiceConnectorGroup: (params: RawParamsFrom<'associatePhoneNumbersWithVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'associatePhoneNumbersWithVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.associatePhoneNumbersWithVoiceConnectorGroup(params as any).promise();
  }

  associateSigninDelegateGroupsWithAccount: (params: RawParamsFrom<'associateSigninDelegateGroupsWithAccount'>) => Promise<ReturnTypeFrom<'associateSigninDelegateGroupsWithAccount'>>  = async params => {
  // undefined
    return this.client.associateSigninDelegateGroupsWithAccount(params as any).promise();
  }

  batchCreateAttendee: (params: RawParamsFrom<'batchCreateAttendee'>) => Promise<ReturnTypeFrom<'batchCreateAttendee'>>  = async params => {
  // undefined
    return this.client.batchCreateAttendee(params as any).promise();
  }

  batchCreateChannelMembership: (params: RawParamsFrom<'batchCreateChannelMembership'>) => Promise<ReturnTypeFrom<'batchCreateChannelMembership'>>  = async params => {
  // undefined
    return this.client.batchCreateChannelMembership(params as any).promise();
  }

  batchCreateRoomMembership: (params: RawParamsFrom<'batchCreateRoomMembership'>) => Promise<ReturnTypeFrom<'batchCreateRoomMembership'>>  = async params => {
  // undefined
    return this.client.batchCreateRoomMembership(params as any).promise();
  }

  batchDeletePhoneNumber: (params: RawParamsFrom<'batchDeletePhoneNumber'>) => Promise<ReturnTypeFrom<'batchDeletePhoneNumber'>>  = async params => {
  // undefined
    return this.client.batchDeletePhoneNumber(params as any).promise();
  }

  batchSuspendUser: (params: RawParamsFrom<'batchSuspendUser'>) => Promise<ReturnTypeFrom<'batchSuspendUser'>>  = async params => {
  // undefined
    return this.client.batchSuspendUser(params as any).promise();
  }

  batchUnsuspendUser: (params: RawParamsFrom<'batchUnsuspendUser'>) => Promise<ReturnTypeFrom<'batchUnsuspendUser'>>  = async params => {
  // undefined
    return this.client.batchUnsuspendUser(params as any).promise();
  }

  batchUpdatePhoneNumber: (params: RawParamsFrom<'batchUpdatePhoneNumber'>) => Promise<ReturnTypeFrom<'batchUpdatePhoneNumber'>>  = async params => {
  // undefined
    return this.client.batchUpdatePhoneNumber(params as any).promise();
  }

  batchUpdateUser: (params: RawParamsFrom<'batchUpdateUser'>) => Promise<ReturnTypeFrom<'batchUpdateUser'>>  = async params => {
  // undefined
    return this.client.batchUpdateUser(params as any).promise();
  }

  createAccount: (params: RawParamsFrom<'createAccount'>) => Promise<ReturnTypeFrom<'createAccount'>>  = async params => {
  // undefined
    return this.client.createAccount(params as any).promise();
  }

  createAppInstance: (params: RawParamsFrom<'createAppInstance'>) => Promise<ReturnTypeFrom<'createAppInstance'>>  = async params => {
  // undefined
    return this.client.createAppInstance(params as any).promise();
  }

  createAppInstanceAdmin: (params: RawParamsFrom<'createAppInstanceAdmin'>) => Promise<ReturnTypeFrom<'createAppInstanceAdmin'>>  = async params => {
  // undefined
    return this.client.createAppInstanceAdmin(params as any).promise();
  }

  createAppInstanceUser: (params: RawParamsFrom<'createAppInstanceUser'>) => Promise<ReturnTypeFrom<'createAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.createAppInstanceUser(params as any).promise();
  }

  createAttendee: (params: RawParamsFrom<'createAttendee'>) => Promise<ReturnTypeFrom<'createAttendee'>>  = async params => {
  // undefined
    return this.client.createAttendee(params as any).promise();
  }

  createBot: (params: RawParamsFrom<'createBot'>) => Promise<ReturnTypeFrom<'createBot'>>  = async params => {
  // undefined
    return this.client.createBot(params as any).promise();
  }

  createChannel: (params: RawParamsFrom<'createChannel'>) => Promise<ReturnTypeFrom<'createChannel'>>  = async params => {
  // undefined
    return this.client.createChannel(params as any).promise();
  }

  createChannelBan: (params: RawParamsFrom<'createChannelBan'>) => Promise<ReturnTypeFrom<'createChannelBan'>>  = async params => {
  // undefined
    return this.client.createChannelBan(params as any).promise();
  }

  createChannelMembership: (params: RawParamsFrom<'createChannelMembership'>) => Promise<ReturnTypeFrom<'createChannelMembership'>>  = async params => {
  // undefined
    return this.client.createChannelMembership(params as any).promise();
  }

  createChannelModerator: (params: RawParamsFrom<'createChannelModerator'>) => Promise<ReturnTypeFrom<'createChannelModerator'>>  = async params => {
  // undefined
    return this.client.createChannelModerator(params as any).promise();
  }

  createMediaCapturePipeline: (params: RawParamsFrom<'createMediaCapturePipeline'>) => Promise<ReturnTypeFrom<'createMediaCapturePipeline'>>  = async params => {
  // undefined
    return this.client.createMediaCapturePipeline(params as any).promise();
  }

  createMeeting: (params: RawParamsFrom<'createMeeting'>) => Promise<ReturnTypeFrom<'createMeeting'>>  = async params => {
  // undefined
    return this.client.createMeeting(params as any).promise();
  }

  createMeetingDialOut: (params: RawParamsFrom<'createMeetingDialOut'>) => Promise<ReturnTypeFrom<'createMeetingDialOut'>>  = async params => {
  // undefined
    return this.client.createMeetingDialOut(params as any).promise();
  }

  createMeetingWithAttendees: (params: RawParamsFrom<'createMeetingWithAttendees'>) => Promise<ReturnTypeFrom<'createMeetingWithAttendees'>>  = async params => {
  // undefined
    return this.client.createMeetingWithAttendees(params as any).promise();
  }

  createPhoneNumberOrder: (params: RawParamsFrom<'createPhoneNumberOrder'>) => Promise<ReturnTypeFrom<'createPhoneNumberOrder'>>  = async params => {
  // undefined
    return this.client.createPhoneNumberOrder(params as any).promise();
  }

  createProxySession: (params: RawParamsFrom<'createProxySession'>) => Promise<ReturnTypeFrom<'createProxySession'>>  = async params => {
  // undefined
    return this.client.createProxySession(params as any).promise();
  }

  createRoom: (params: RawParamsFrom<'createRoom'>) => Promise<ReturnTypeFrom<'createRoom'>>  = async params => {
  // undefined
    return this.client.createRoom(params as any).promise();
  }

  createRoomMembership: (params: RawParamsFrom<'createRoomMembership'>) => Promise<ReturnTypeFrom<'createRoomMembership'>>  = async params => {
  // undefined
    return this.client.createRoomMembership(params as any).promise();
  }

  createSipMediaApplication: (params: RawParamsFrom<'createSipMediaApplication'>) => Promise<ReturnTypeFrom<'createSipMediaApplication'>>  = async params => {
  // undefined
    return this.client.createSipMediaApplication(params as any).promise();
  }

  createSipMediaApplicationCall: (params: RawParamsFrom<'createSipMediaApplicationCall'>) => Promise<ReturnTypeFrom<'createSipMediaApplicationCall'>>  = async params => {
  // undefined
    return this.client.createSipMediaApplicationCall(params as any).promise();
  }

  createSipRule: (params: RawParamsFrom<'createSipRule'>) => Promise<ReturnTypeFrom<'createSipRule'>>  = async params => {
  // undefined
    return this.client.createSipRule(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  createVoiceConnector: (params: RawParamsFrom<'createVoiceConnector'>) => Promise<ReturnTypeFrom<'createVoiceConnector'>>  = async params => {
  // undefined
    return this.client.createVoiceConnector(params as any).promise();
  }

  createVoiceConnectorGroup: (params: RawParamsFrom<'createVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'createVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.createVoiceConnectorGroup(params as any).promise();
  }

  deleteAccount: (params: RawParamsFrom<'deleteAccount'>) => Promise<ReturnTypeFrom<'deleteAccount'>>  = async params => {
  // undefined
    return this.client.deleteAccount(params as any).promise();
  }

  deleteAppInstance: (params: RawParamsFrom<'deleteAppInstance'>) => Promise<ReturnTypeFrom<'deleteAppInstance'>>  = async params => {
  // undefined
    return this.client.deleteAppInstance(params as any).promise();
  }

  deleteAppInstanceAdmin: (params: RawParamsFrom<'deleteAppInstanceAdmin'>) => Promise<ReturnTypeFrom<'deleteAppInstanceAdmin'>>  = async params => {
  // undefined
    return this.client.deleteAppInstanceAdmin(params as any).promise();
  }

  deleteAppInstanceStreamingConfigurations: (params: RawParamsFrom<'deleteAppInstanceStreamingConfigurations'>) => Promise<ReturnTypeFrom<'deleteAppInstanceStreamingConfigurations'>>  = async params => {
  // undefined
    return this.client.deleteAppInstanceStreamingConfigurations(params as any).promise();
  }

  deleteAppInstanceUser: (params: RawParamsFrom<'deleteAppInstanceUser'>) => Promise<ReturnTypeFrom<'deleteAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.deleteAppInstanceUser(params as any).promise();
  }

  deleteAttendee: (params: RawParamsFrom<'deleteAttendee'>) => Promise<ReturnTypeFrom<'deleteAttendee'>>  = async params => {
  // undefined
    return this.client.deleteAttendee(params as any).promise();
  }

  deleteChannel: (params: RawParamsFrom<'deleteChannel'>) => Promise<ReturnTypeFrom<'deleteChannel'>>  = async params => {
  // undefined
    return this.client.deleteChannel(params as any).promise();
  }

  deleteChannelBan: (params: RawParamsFrom<'deleteChannelBan'>) => Promise<ReturnTypeFrom<'deleteChannelBan'>>  = async params => {
  // undefined
    return this.client.deleteChannelBan(params as any).promise();
  }

  deleteChannelMembership: (params: RawParamsFrom<'deleteChannelMembership'>) => Promise<ReturnTypeFrom<'deleteChannelMembership'>>  = async params => {
  // undefined
    return this.client.deleteChannelMembership(params as any).promise();
  }

  deleteChannelMessage: (params: RawParamsFrom<'deleteChannelMessage'>) => Promise<ReturnTypeFrom<'deleteChannelMessage'>>  = async params => {
  // undefined
    return this.client.deleteChannelMessage(params as any).promise();
  }

  deleteChannelModerator: (params: RawParamsFrom<'deleteChannelModerator'>) => Promise<ReturnTypeFrom<'deleteChannelModerator'>>  = async params => {
  // undefined
    return this.client.deleteChannelModerator(params as any).promise();
  }

  deleteEventsConfiguration: (params: RawParamsFrom<'deleteEventsConfiguration'>) => Promise<ReturnTypeFrom<'deleteEventsConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteEventsConfiguration(params as any).promise();
  }

  deleteMediaCapturePipeline: (params: RawParamsFrom<'deleteMediaCapturePipeline'>) => Promise<ReturnTypeFrom<'deleteMediaCapturePipeline'>>  = async params => {
  // undefined
    return this.client.deleteMediaCapturePipeline(params as any).promise();
  }

  deleteMeeting: (params: RawParamsFrom<'deleteMeeting'>) => Promise<ReturnTypeFrom<'deleteMeeting'>>  = async params => {
  // undefined
    return this.client.deleteMeeting(params as any).promise();
  }

  deletePhoneNumber: (params: RawParamsFrom<'deletePhoneNumber'>) => Promise<ReturnTypeFrom<'deletePhoneNumber'>>  = async params => {
  // undefined
    return this.client.deletePhoneNumber(params as any).promise();
  }

  deleteProxySession: (params: RawParamsFrom<'deleteProxySession'>) => Promise<ReturnTypeFrom<'deleteProxySession'>>  = async params => {
  // undefined
    return this.client.deleteProxySession(params as any).promise();
  }

  deleteRoom: (params: RawParamsFrom<'deleteRoom'>) => Promise<ReturnTypeFrom<'deleteRoom'>>  = async params => {
  // undefined
    return this.client.deleteRoom(params as any).promise();
  }

  deleteRoomMembership: (params: RawParamsFrom<'deleteRoomMembership'>) => Promise<ReturnTypeFrom<'deleteRoomMembership'>>  = async params => {
  // undefined
    return this.client.deleteRoomMembership(params as any).promise();
  }

  deleteSipMediaApplication: (params: RawParamsFrom<'deleteSipMediaApplication'>) => Promise<ReturnTypeFrom<'deleteSipMediaApplication'>>  = async params => {
  // undefined
    return this.client.deleteSipMediaApplication(params as any).promise();
  }

  deleteSipRule: (params: RawParamsFrom<'deleteSipRule'>) => Promise<ReturnTypeFrom<'deleteSipRule'>>  = async params => {
  // undefined
    return this.client.deleteSipRule(params as any).promise();
  }

  deleteVoiceConnector: (params: RawParamsFrom<'deleteVoiceConnector'>) => Promise<ReturnTypeFrom<'deleteVoiceConnector'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnector(params as any).promise();
  }

  deleteVoiceConnectorEmergencyCallingConfiguration: (params: RawParamsFrom<'deleteVoiceConnectorEmergencyCallingConfiguration'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorEmergencyCallingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(params as any).promise();
  }

  deleteVoiceConnectorGroup: (params: RawParamsFrom<'deleteVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorGroup(params as any).promise();
  }

  deleteVoiceConnectorOrigination: (params: RawParamsFrom<'deleteVoiceConnectorOrigination'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorOrigination'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorOrigination(params as any).promise();
  }

  deleteVoiceConnectorProxy: (params: RawParamsFrom<'deleteVoiceConnectorProxy'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorProxy'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorProxy(params as any).promise();
  }

  deleteVoiceConnectorStreamingConfiguration: (params: RawParamsFrom<'deleteVoiceConnectorStreamingConfiguration'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorStreamingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorStreamingConfiguration(params as any).promise();
  }

  deleteVoiceConnectorTermination: (params: RawParamsFrom<'deleteVoiceConnectorTermination'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorTermination'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorTermination(params as any).promise();
  }

  deleteVoiceConnectorTerminationCredentials: (params: RawParamsFrom<'deleteVoiceConnectorTerminationCredentials'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorTerminationCredentials'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorTerminationCredentials(params as any).promise();
  }

  describeAppInstance: (params: RawParamsFrom<'describeAppInstance'>) => Promise<ReturnTypeFrom<'describeAppInstance'>>  = async params => {
  // undefined
    return this.client.describeAppInstance(params as any).promise();
  }

  describeAppInstanceAdmin: (params: RawParamsFrom<'describeAppInstanceAdmin'>) => Promise<ReturnTypeFrom<'describeAppInstanceAdmin'>>  = async params => {
  // undefined
    return this.client.describeAppInstanceAdmin(params as any).promise();
  }

  describeAppInstanceUser: (params: RawParamsFrom<'describeAppInstanceUser'>) => Promise<ReturnTypeFrom<'describeAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.describeAppInstanceUser(params as any).promise();
  }

  describeChannel: (params: RawParamsFrom<'describeChannel'>) => Promise<ReturnTypeFrom<'describeChannel'>>  = async params => {
  // undefined
    return this.client.describeChannel(params as any).promise();
  }

  describeChannelBan: (params: RawParamsFrom<'describeChannelBan'>) => Promise<ReturnTypeFrom<'describeChannelBan'>>  = async params => {
  // undefined
    return this.client.describeChannelBan(params as any).promise();
  }

  describeChannelMembership: (params: RawParamsFrom<'describeChannelMembership'>) => Promise<ReturnTypeFrom<'describeChannelMembership'>>  = async params => {
  // undefined
    return this.client.describeChannelMembership(params as any).promise();
  }

  describeChannelMembershipForAppInstanceUser: (params: RawParamsFrom<'describeChannelMembershipForAppInstanceUser'>) => Promise<ReturnTypeFrom<'describeChannelMembershipForAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.describeChannelMembershipForAppInstanceUser(params as any).promise();
  }

  describeChannelModeratedByAppInstanceUser: (params: RawParamsFrom<'describeChannelModeratedByAppInstanceUser'>) => Promise<ReturnTypeFrom<'describeChannelModeratedByAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.describeChannelModeratedByAppInstanceUser(params as any).promise();
  }

  describeChannelModerator: (params: RawParamsFrom<'describeChannelModerator'>) => Promise<ReturnTypeFrom<'describeChannelModerator'>>  = async params => {
  // undefined
    return this.client.describeChannelModerator(params as any).promise();
  }

  disassociatePhoneNumberFromUser: (params: RawParamsFrom<'disassociatePhoneNumberFromUser'>) => Promise<ReturnTypeFrom<'disassociatePhoneNumberFromUser'>>  = async params => {
  // undefined
    return this.client.disassociatePhoneNumberFromUser(params as any).promise();
  }

  disassociatePhoneNumbersFromVoiceConnector: (params: RawParamsFrom<'disassociatePhoneNumbersFromVoiceConnector'>) => Promise<ReturnTypeFrom<'disassociatePhoneNumbersFromVoiceConnector'>>  = async params => {
  // undefined
    return this.client.disassociatePhoneNumbersFromVoiceConnector(params as any).promise();
  }

  disassociatePhoneNumbersFromVoiceConnectorGroup: (params: RawParamsFrom<'disassociatePhoneNumbersFromVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'disassociatePhoneNumbersFromVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(params as any).promise();
  }

  disassociateSigninDelegateGroupsFromAccount: (params: RawParamsFrom<'disassociateSigninDelegateGroupsFromAccount'>) => Promise<ReturnTypeFrom<'disassociateSigninDelegateGroupsFromAccount'>>  = async params => {
  // undefined
    return this.client.disassociateSigninDelegateGroupsFromAccount(params as any).promise();
  }

  getAccount: (params: RawParamsFrom<'getAccount'>) => Promise<ReturnTypeFrom<'getAccount'>>  = async params => {
  // undefined
    return this.client.getAccount(params as any).promise();
  }

  getAccountSettings: (params: RawParamsFrom<'getAccountSettings'>) => Promise<ReturnTypeFrom<'getAccountSettings'>>  = async params => {
  // undefined
    return this.client.getAccountSettings(params as any).promise();
  }

  getAppInstanceRetentionSettings: (params: RawParamsFrom<'getAppInstanceRetentionSettings'>) => Promise<ReturnTypeFrom<'getAppInstanceRetentionSettings'>>  = async params => {
  // undefined
    return this.client.getAppInstanceRetentionSettings(params as any).promise();
  }

  getAppInstanceStreamingConfigurations: (params: RawParamsFrom<'getAppInstanceStreamingConfigurations'>) => Promise<ReturnTypeFrom<'getAppInstanceStreamingConfigurations'>>  = async params => {
  // undefined
    return this.client.getAppInstanceStreamingConfigurations(params as any).promise();
  }

  getAttendee: (params: RawParamsFrom<'getAttendee'>) => Promise<ReturnTypeFrom<'getAttendee'>>  = async params => {
  // undefined
    return this.client.getAttendee(params as any).promise();
  }

  getBot: (params: RawParamsFrom<'getBot'>) => Promise<ReturnTypeFrom<'getBot'>>  = async params => {
  // undefined
    return this.client.getBot(params as any).promise();
  }

  getChannelMessage: (params: RawParamsFrom<'getChannelMessage'>) => Promise<ReturnTypeFrom<'getChannelMessage'>>  = async params => {
  // undefined
    return this.client.getChannelMessage(params as any).promise();
  }

  getEventsConfiguration: (params: RawParamsFrom<'getEventsConfiguration'>) => Promise<ReturnTypeFrom<'getEventsConfiguration'>>  = async params => {
  // undefined
    return this.client.getEventsConfiguration(params as any).promise();
  }

  getGlobalSettings: (params: RawParamsFrom<'getGlobalSettings'>) => Promise<ReturnTypeFrom<'getGlobalSettings'>>  = async params => {
  // undefined
    return this.client.getGlobalSettings(params as any).promise();
  }

  getMediaCapturePipeline: (params: RawParamsFrom<'getMediaCapturePipeline'>) => Promise<ReturnTypeFrom<'getMediaCapturePipeline'>>  = async params => {
  // undefined
    return this.client.getMediaCapturePipeline(params as any).promise();
  }

  getMeeting: (params: RawParamsFrom<'getMeeting'>) => Promise<ReturnTypeFrom<'getMeeting'>>  = async params => {
  // undefined
    return this.client.getMeeting(params as any).promise();
  }

  getMessagingSessionEndpoint: (params: RawParamsFrom<'getMessagingSessionEndpoint'>) => Promise<ReturnTypeFrom<'getMessagingSessionEndpoint'>>  = async params => {
  // undefined
    return this.client.getMessagingSessionEndpoint(params as any).promise();
  }

  getPhoneNumber: (params: RawParamsFrom<'getPhoneNumber'>) => Promise<ReturnTypeFrom<'getPhoneNumber'>>  = async params => {
  // undefined
    return this.client.getPhoneNumber(params as any).promise();
  }

  getPhoneNumberOrder: (params: RawParamsFrom<'getPhoneNumberOrder'>) => Promise<ReturnTypeFrom<'getPhoneNumberOrder'>>  = async params => {
  // undefined
    return this.client.getPhoneNumberOrder(params as any).promise();
  }

  getPhoneNumberSettings: (params: RawParamsFrom<'getPhoneNumberSettings'>) => Promise<ReturnTypeFrom<'getPhoneNumberSettings'>>  = async params => {
  // undefined
    return this.client.getPhoneNumberSettings(params as any).promise();
  }

  getProxySession: (params: RawParamsFrom<'getProxySession'>) => Promise<ReturnTypeFrom<'getProxySession'>>  = async params => {
  // undefined
    return this.client.getProxySession(params as any).promise();
  }

  getRetentionSettings: (params: RawParamsFrom<'getRetentionSettings'>) => Promise<ReturnTypeFrom<'getRetentionSettings'>>  = async params => {
  // undefined
    return this.client.getRetentionSettings(params as any).promise();
  }

  getRoom: (params: RawParamsFrom<'getRoom'>) => Promise<ReturnTypeFrom<'getRoom'>>  = async params => {
  // undefined
    return this.client.getRoom(params as any).promise();
  }

  getSipMediaApplication: (params: RawParamsFrom<'getSipMediaApplication'>) => Promise<ReturnTypeFrom<'getSipMediaApplication'>>  = async params => {
  // undefined
    return this.client.getSipMediaApplication(params as any).promise();
  }

  getSipMediaApplicationLoggingConfiguration: (params: RawParamsFrom<'getSipMediaApplicationLoggingConfiguration'>) => Promise<ReturnTypeFrom<'getSipMediaApplicationLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.getSipMediaApplicationLoggingConfiguration(params as any).promise();
  }

  getSipRule: (params: RawParamsFrom<'getSipRule'>) => Promise<ReturnTypeFrom<'getSipRule'>>  = async params => {
  // undefined
    return this.client.getSipRule(params as any).promise();
  }

  getUser: (params: RawParamsFrom<'getUser'>) => Promise<ReturnTypeFrom<'getUser'>>  = async params => {
  // undefined
    return this.client.getUser(params as any).promise();
  }

  getUserSettings: (params: RawParamsFrom<'getUserSettings'>) => Promise<ReturnTypeFrom<'getUserSettings'>>  = async params => {
  // undefined
    return this.client.getUserSettings(params as any).promise();
  }

  getVoiceConnector: (params: RawParamsFrom<'getVoiceConnector'>) => Promise<ReturnTypeFrom<'getVoiceConnector'>>  = async params => {
  // undefined
    return this.client.getVoiceConnector(params as any).promise();
  }

  getVoiceConnectorEmergencyCallingConfiguration: (params: RawParamsFrom<'getVoiceConnectorEmergencyCallingConfiguration'>) => Promise<ReturnTypeFrom<'getVoiceConnectorEmergencyCallingConfiguration'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorEmergencyCallingConfiguration(params as any).promise();
  }

  getVoiceConnectorGroup: (params: RawParamsFrom<'getVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'getVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorGroup(params as any).promise();
  }

  getVoiceConnectorLoggingConfiguration: (params: RawParamsFrom<'getVoiceConnectorLoggingConfiguration'>) => Promise<ReturnTypeFrom<'getVoiceConnectorLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorLoggingConfiguration(params as any).promise();
  }

  getVoiceConnectorOrigination: (params: RawParamsFrom<'getVoiceConnectorOrigination'>) => Promise<ReturnTypeFrom<'getVoiceConnectorOrigination'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorOrigination(params as any).promise();
  }

  getVoiceConnectorProxy: (params: RawParamsFrom<'getVoiceConnectorProxy'>) => Promise<ReturnTypeFrom<'getVoiceConnectorProxy'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorProxy(params as any).promise();
  }

  getVoiceConnectorStreamingConfiguration: (params: RawParamsFrom<'getVoiceConnectorStreamingConfiguration'>) => Promise<ReturnTypeFrom<'getVoiceConnectorStreamingConfiguration'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorStreamingConfiguration(params as any).promise();
  }

  getVoiceConnectorTermination: (params: RawParamsFrom<'getVoiceConnectorTermination'>) => Promise<ReturnTypeFrom<'getVoiceConnectorTermination'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorTermination(params as any).promise();
  }

  getVoiceConnectorTerminationHealth: (params: RawParamsFrom<'getVoiceConnectorTerminationHealth'>) => Promise<ReturnTypeFrom<'getVoiceConnectorTerminationHealth'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorTerminationHealth(params as any).promise();
  }

  inviteUsers: (params: RawParamsFrom<'inviteUsers'>) => Promise<ReturnTypeFrom<'inviteUsers'>>  = async params => {
  // undefined
    return this.client.inviteUsers(params as any).promise();
  }

  listAccounts: (params: RawParamsFrom<'listAccounts'>) => Promise<ReturnTypeFrom<'listAccounts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccounts(params as any).promise();
  }

  listAppInstanceAdmins: (params: RawParamsFrom<'listAppInstanceAdmins'>) => Promise<ReturnTypeFrom<'listAppInstanceAdmins'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceAdmins(params as any).promise();
  }

  listAppInstanceUsers: (params: RawParamsFrom<'listAppInstanceUsers'>) => Promise<ReturnTypeFrom<'listAppInstanceUsers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceUsers(params as any).promise();
  }

  listAppInstances: (params: RawParamsFrom<'listAppInstances'>) => Promise<ReturnTypeFrom<'listAppInstances'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstances(params as any).promise();
  }

  listAttendeeTags: (params: RawParamsFrom<'listAttendeeTags'>) => Promise<ReturnTypeFrom<'listAttendeeTags'>>  = async params => {
  // undefined
    return this.client.listAttendeeTags(params as any).promise();
  }

  listAttendees: (params: RawParamsFrom<'listAttendees'>) => Promise<ReturnTypeFrom<'listAttendees'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAttendees(params as any).promise();
  }

  listBots: (params: RawParamsFrom<'listBots'>) => Promise<ReturnTypeFrom<'listBots'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listBots(params as any).promise();
  }

  listChannelBans: (params: RawParamsFrom<'listChannelBans'>) => Promise<ReturnTypeFrom<'listChannelBans'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelBans(params as any).promise();
  }

  listChannelMemberships: (params: RawParamsFrom<'listChannelMemberships'>) => Promise<ReturnTypeFrom<'listChannelMemberships'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMemberships(params as any).promise();
  }

  listChannelMembershipsForAppInstanceUser: (params: RawParamsFrom<'listChannelMembershipsForAppInstanceUser'>) => Promise<ReturnTypeFrom<'listChannelMembershipsForAppInstanceUser'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMembershipsForAppInstanceUser(params as any).promise();
  }

  listChannelMessages: (params: RawParamsFrom<'listChannelMessages'>) => Promise<ReturnTypeFrom<'listChannelMessages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelMessages(params as any).promise();
  }

  listChannelModerators: (params: RawParamsFrom<'listChannelModerators'>) => Promise<ReturnTypeFrom<'listChannelModerators'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelModerators(params as any).promise();
  }

  listChannels: (params: RawParamsFrom<'listChannels'>) => Promise<ReturnTypeFrom<'listChannels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannels(params as any).promise();
  }

  listChannelsModeratedByAppInstanceUser: (params: RawParamsFrom<'listChannelsModeratedByAppInstanceUser'>) => Promise<ReturnTypeFrom<'listChannelsModeratedByAppInstanceUser'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannelsModeratedByAppInstanceUser(params as any).promise();
  }

  listMediaCapturePipelines: (params: RawParamsFrom<'listMediaCapturePipelines'>) => Promise<ReturnTypeFrom<'listMediaCapturePipelines'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMediaCapturePipelines(params as any).promise();
  }

  listMeetingTags: (params: RawParamsFrom<'listMeetingTags'>) => Promise<ReturnTypeFrom<'listMeetingTags'>>  = async params => {
  // undefined
    return this.client.listMeetingTags(params as any).promise();
  }

  listMeetings: (params: RawParamsFrom<'listMeetings'>) => Promise<ReturnTypeFrom<'listMeetings'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMeetings(params as any).promise();
  }

  listPhoneNumberOrders: (params: RawParamsFrom<'listPhoneNumberOrders'>) => Promise<ReturnTypeFrom<'listPhoneNumberOrders'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPhoneNumberOrders(params as any).promise();
  }

  listPhoneNumbers: (params: RawParamsFrom<'listPhoneNumbers'>) => Promise<ReturnTypeFrom<'listPhoneNumbers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPhoneNumbers(params as any).promise();
  }

  listProxySessions: (params: RawParamsFrom<'listProxySessions'>) => Promise<ReturnTypeFrom<'listProxySessions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProxySessions(params as any).promise();
  }

  listRoomMemberships: (params: RawParamsFrom<'listRoomMemberships'>) => Promise<ReturnTypeFrom<'listRoomMemberships'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRoomMemberships(params as any).promise();
  }

  listRooms: (params: RawParamsFrom<'listRooms'>) => Promise<ReturnTypeFrom<'listRooms'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRooms(params as any).promise();
  }

  listSipMediaApplications: (params: RawParamsFrom<'listSipMediaApplications'>) => Promise<ReturnTypeFrom<'listSipMediaApplications'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSipMediaApplications(params as any).promise();
  }

  listSipRules: (params: RawParamsFrom<'listSipRules'>) => Promise<ReturnTypeFrom<'listSipRules'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSipRules(params as any).promise();
  }

  listSupportedPhoneNumberCountries: (params: RawParamsFrom<'listSupportedPhoneNumberCountries'>) => Promise<ReturnTypeFrom<'listSupportedPhoneNumberCountries'>>  = async params => {
  // undefined
    return this.client.listSupportedPhoneNumberCountries(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listUsers: (params: RawParamsFrom<'listUsers'>) => Promise<ReturnTypeFrom<'listUsers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listUsers(params as any).promise();
  }

  listVoiceConnectorGroups: (params: RawParamsFrom<'listVoiceConnectorGroups'>) => Promise<ReturnTypeFrom<'listVoiceConnectorGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVoiceConnectorGroups(params as any).promise();
  }

  listVoiceConnectorTerminationCredentials: (params: RawParamsFrom<'listVoiceConnectorTerminationCredentials'>) => Promise<ReturnTypeFrom<'listVoiceConnectorTerminationCredentials'>>  = async params => {
  // undefined
    return this.client.listVoiceConnectorTerminationCredentials(params as any).promise();
  }

  listVoiceConnectors: (params: RawParamsFrom<'listVoiceConnectors'>) => Promise<ReturnTypeFrom<'listVoiceConnectors'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVoiceConnectors(params as any).promise();
  }

  logoutUser: (params: RawParamsFrom<'logoutUser'>) => Promise<ReturnTypeFrom<'logoutUser'>>  = async params => {
  // undefined
    return this.client.logoutUser(params as any).promise();
  }

  putAppInstanceRetentionSettings: (params: RawParamsFrom<'putAppInstanceRetentionSettings'>) => Promise<ReturnTypeFrom<'putAppInstanceRetentionSettings'>>  = async params => {
  // undefined
    return this.client.putAppInstanceRetentionSettings(params as any).promise();
  }

  putAppInstanceStreamingConfigurations: (params: RawParamsFrom<'putAppInstanceStreamingConfigurations'>) => Promise<ReturnTypeFrom<'putAppInstanceStreamingConfigurations'>>  = async params => {
  // undefined
    return this.client.putAppInstanceStreamingConfigurations(params as any).promise();
  }

  putEventsConfiguration: (params: RawParamsFrom<'putEventsConfiguration'>) => Promise<ReturnTypeFrom<'putEventsConfiguration'>>  = async params => {
  // undefined
    return this.client.putEventsConfiguration(params as any).promise();
  }

  putRetentionSettings: (params: RawParamsFrom<'putRetentionSettings'>) => Promise<ReturnTypeFrom<'putRetentionSettings'>>  = async params => {
  // undefined
    return this.client.putRetentionSettings(params as any).promise();
  }

  putSipMediaApplicationLoggingConfiguration: (params: RawParamsFrom<'putSipMediaApplicationLoggingConfiguration'>) => Promise<ReturnTypeFrom<'putSipMediaApplicationLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.putSipMediaApplicationLoggingConfiguration(params as any).promise();
  }

  putVoiceConnectorEmergencyCallingConfiguration: (params: RawParamsFrom<'putVoiceConnectorEmergencyCallingConfiguration'>) => Promise<ReturnTypeFrom<'putVoiceConnectorEmergencyCallingConfiguration'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorEmergencyCallingConfiguration(params as any).promise();
  }

  putVoiceConnectorLoggingConfiguration: (params: RawParamsFrom<'putVoiceConnectorLoggingConfiguration'>) => Promise<ReturnTypeFrom<'putVoiceConnectorLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorLoggingConfiguration(params as any).promise();
  }

  putVoiceConnectorOrigination: (params: RawParamsFrom<'putVoiceConnectorOrigination'>) => Promise<ReturnTypeFrom<'putVoiceConnectorOrigination'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorOrigination(params as any).promise();
  }

  putVoiceConnectorProxy: (params: RawParamsFrom<'putVoiceConnectorProxy'>) => Promise<ReturnTypeFrom<'putVoiceConnectorProxy'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorProxy(params as any).promise();
  }

  putVoiceConnectorStreamingConfiguration: (params: RawParamsFrom<'putVoiceConnectorStreamingConfiguration'>) => Promise<ReturnTypeFrom<'putVoiceConnectorStreamingConfiguration'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorStreamingConfiguration(params as any).promise();
  }

  putVoiceConnectorTermination: (params: RawParamsFrom<'putVoiceConnectorTermination'>) => Promise<ReturnTypeFrom<'putVoiceConnectorTermination'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorTermination(params as any).promise();
  }

  putVoiceConnectorTerminationCredentials: (params: RawParamsFrom<'putVoiceConnectorTerminationCredentials'>) => Promise<ReturnTypeFrom<'putVoiceConnectorTerminationCredentials'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorTerminationCredentials(params as any).promise();
  }

  redactChannelMessage: (params: RawParamsFrom<'redactChannelMessage'>) => Promise<ReturnTypeFrom<'redactChannelMessage'>>  = async params => {
  // undefined
    return this.client.redactChannelMessage(params as any).promise();
  }

  redactConversationMessage: (params: RawParamsFrom<'redactConversationMessage'>) => Promise<ReturnTypeFrom<'redactConversationMessage'>>  = async params => {
  // undefined
    return this.client.redactConversationMessage(params as any).promise();
  }

  redactRoomMessage: (params: RawParamsFrom<'redactRoomMessage'>) => Promise<ReturnTypeFrom<'redactRoomMessage'>>  = async params => {
  // undefined
    return this.client.redactRoomMessage(params as any).promise();
  }

  regenerateSecurityToken: (params: RawParamsFrom<'regenerateSecurityToken'>) => Promise<ReturnTypeFrom<'regenerateSecurityToken'>>  = async params => {
  // undefined
    return this.client.regenerateSecurityToken(params as any).promise();
  }

  resetPersonalPIN: (params: RawParamsFrom<'resetPersonalPIN'>) => Promise<ReturnTypeFrom<'resetPersonalPIN'>>  = async params => {
  // undefined
    return this.client.resetPersonalPIN(params as any).promise();
  }

  restorePhoneNumber: (params: RawParamsFrom<'restorePhoneNumber'>) => Promise<ReturnTypeFrom<'restorePhoneNumber'>>  = async params => {
  // undefined
    return this.client.restorePhoneNumber(params as any).promise();
  }

  searchAvailablePhoneNumbers: (params: RawParamsFrom<'searchAvailablePhoneNumbers'>) => Promise<ReturnTypeFrom<'searchAvailablePhoneNumbers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchAvailablePhoneNumbers(params as any).promise();
  }

  sendChannelMessage: (params: RawParamsFrom<'sendChannelMessage'>) => Promise<ReturnTypeFrom<'sendChannelMessage'>>  = async params => {
  // undefined
    return this.client.sendChannelMessage(params as any).promise();
  }

  startMeetingTranscription: (params: RawParamsFrom<'startMeetingTranscription'>) => Promise<ReturnTypeFrom<'startMeetingTranscription'>>  = async params => {
  // undefined
    return this.client.startMeetingTranscription(params as any).promise();
  }

  stopMeetingTranscription: (params: RawParamsFrom<'stopMeetingTranscription'>) => Promise<ReturnTypeFrom<'stopMeetingTranscription'>>  = async params => {
  // undefined
    return this.client.stopMeetingTranscription(params as any).promise();
  }

  tagAttendee: (params: RawParamsFrom<'tagAttendee'>) => Promise<ReturnTypeFrom<'tagAttendee'>>  = async params => {
  // undefined
    return this.client.tagAttendee(params as any).promise();
  }

  tagMeeting: (params: RawParamsFrom<'tagMeeting'>) => Promise<ReturnTypeFrom<'tagMeeting'>>  = async params => {
  // undefined
    return this.client.tagMeeting(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagAttendee: (params: RawParamsFrom<'untagAttendee'>) => Promise<ReturnTypeFrom<'untagAttendee'>>  = async params => {
  // undefined
    return this.client.untagAttendee(params as any).promise();
  }

  untagMeeting: (params: RawParamsFrom<'untagMeeting'>) => Promise<ReturnTypeFrom<'untagMeeting'>>  = async params => {
  // undefined
    return this.client.untagMeeting(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccount: (params: RawParamsFrom<'updateAccount'>) => Promise<ReturnTypeFrom<'updateAccount'>>  = async params => {
  // undefined
    return this.client.updateAccount(params as any).promise();
  }

  updateAccountSettings: (params: RawParamsFrom<'updateAccountSettings'>) => Promise<ReturnTypeFrom<'updateAccountSettings'>>  = async params => {
  // undefined
    return this.client.updateAccountSettings(params as any).promise();
  }

  updateAppInstance: (params: RawParamsFrom<'updateAppInstance'>) => Promise<ReturnTypeFrom<'updateAppInstance'>>  = async params => {
  // undefined
    return this.client.updateAppInstance(params as any).promise();
  }

  updateAppInstanceUser: (params: RawParamsFrom<'updateAppInstanceUser'>) => Promise<ReturnTypeFrom<'updateAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.updateAppInstanceUser(params as any).promise();
  }

  updateBot: (params: RawParamsFrom<'updateBot'>) => Promise<ReturnTypeFrom<'updateBot'>>  = async params => {
  // undefined
    return this.client.updateBot(params as any).promise();
  }

  updateChannel: (params: RawParamsFrom<'updateChannel'>) => Promise<ReturnTypeFrom<'updateChannel'>>  = async params => {
  // undefined
    return this.client.updateChannel(params as any).promise();
  }

  updateChannelMessage: (params: RawParamsFrom<'updateChannelMessage'>) => Promise<ReturnTypeFrom<'updateChannelMessage'>>  = async params => {
  // undefined
    return this.client.updateChannelMessage(params as any).promise();
  }

  updateChannelReadMarker: (params: RawParamsFrom<'updateChannelReadMarker'>) => Promise<ReturnTypeFrom<'updateChannelReadMarker'>>  = async params => {
  // undefined
    return this.client.updateChannelReadMarker(params as any).promise();
  }

  updateGlobalSettings: (params: RawParamsFrom<'updateGlobalSettings'>) => Promise<ReturnTypeFrom<'updateGlobalSettings'>>  = async params => {
  // undefined
    return this.client.updateGlobalSettings(params as any).promise();
  }

  updatePhoneNumber: (params: RawParamsFrom<'updatePhoneNumber'>) => Promise<ReturnTypeFrom<'updatePhoneNumber'>>  = async params => {
  // undefined
    return this.client.updatePhoneNumber(params as any).promise();
  }

  updatePhoneNumberSettings: (params: RawParamsFrom<'updatePhoneNumberSettings'>) => Promise<ReturnTypeFrom<'updatePhoneNumberSettings'>>  = async params => {
  // undefined
    return this.client.updatePhoneNumberSettings(params as any).promise();
  }

  updateProxySession: (params: RawParamsFrom<'updateProxySession'>) => Promise<ReturnTypeFrom<'updateProxySession'>>  = async params => {
  // undefined
    return this.client.updateProxySession(params as any).promise();
  }

  updateRoom: (params: RawParamsFrom<'updateRoom'>) => Promise<ReturnTypeFrom<'updateRoom'>>  = async params => {
  // undefined
    return this.client.updateRoom(params as any).promise();
  }

  updateRoomMembership: (params: RawParamsFrom<'updateRoomMembership'>) => Promise<ReturnTypeFrom<'updateRoomMembership'>>  = async params => {
  // undefined
    return this.client.updateRoomMembership(params as any).promise();
  }

  updateSipMediaApplication: (params: RawParamsFrom<'updateSipMediaApplication'>) => Promise<ReturnTypeFrom<'updateSipMediaApplication'>>  = async params => {
  // undefined
    return this.client.updateSipMediaApplication(params as any).promise();
  }

  updateSipMediaApplicationCall: (params: RawParamsFrom<'updateSipMediaApplicationCall'>) => Promise<ReturnTypeFrom<'updateSipMediaApplicationCall'>>  = async params => {
  // undefined
    return this.client.updateSipMediaApplicationCall(params as any).promise();
  }

  updateSipRule: (params: RawParamsFrom<'updateSipRule'>) => Promise<ReturnTypeFrom<'updateSipRule'>>  = async params => {
  // undefined
    return this.client.updateSipRule(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }

  updateUserSettings: (params: RawParamsFrom<'updateUserSettings'>) => Promise<ReturnTypeFrom<'updateUserSettings'>>  = async params => {
  // undefined
    return this.client.updateUserSettings(params as any).promise();
  }

  updateVoiceConnector: (params: RawParamsFrom<'updateVoiceConnector'>) => Promise<ReturnTypeFrom<'updateVoiceConnector'>>  = async params => {
  // undefined
    return this.client.updateVoiceConnector(params as any).promise();
  }

  updateVoiceConnectorGroup: (params: RawParamsFrom<'updateVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'updateVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.updateVoiceConnectorGroup(params as any).promise();
  }

  validateE911Address: (params: RawParamsFrom<'validateE911Address'>) => Promise<ReturnTypeFrom<'validateE911Address'>>  = async params => {
  // undefined
    return this.client.validateE911Address(params as any).promise();
  }
  
  static fromClient(client: AWSChime): Chime {
    return new Chime(client) as any;
  }
  
  static client(options?: AWSChime.Types.ClientConfiguration): Chime {
    return new Chime(new AWSChime(options)) as any;
  }
}  
