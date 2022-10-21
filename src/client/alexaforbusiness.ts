import { Request, AlexaForBusiness as AWSAlexaForBusiness } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAlexaForBusiness> = AWSAlexaForBusiness[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAlexaForBusiness> = AWSAlexaForBusiness[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAlexaForBusiness[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAlexaForBusiness, Extras> = AWSAlexaForBusiness[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAlexaForBusiness> = AWSAlexaForBusiness[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AlexaForBusiness {
  private constructor(private readonly client: AWSAlexaForBusiness) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'a4b' as const;
  public readonly global = false as const;
  public readonly category = 'Business Applications' as const;
  public readonly topLevelCalls = ["listBusinessReportSchedules","listConferenceProviders","listGatewayGroups","listGateways","listSkills","listSkillsStoreCategories","searchAddressBooks","searchContacts","searchDevices","searchNetworkProfiles","searchProfiles","searchRooms","searchSkillGroups","searchUsers"] as const;
  
  approveSkill: (params: RawParamsFrom<'approveSkill'>) => Promise<ReturnTypeFrom<'approveSkill'>>  = async params => {
  // undefined
    return this.client.approveSkill(params as any).promise();
  }

  associateContactWithAddressBook: (params: RawParamsFrom<'associateContactWithAddressBook'>) => Promise<ReturnTypeFrom<'associateContactWithAddressBook'>>  = async params => {
  // undefined
    return this.client.associateContactWithAddressBook(params as any).promise();
  }

  associateDeviceWithNetworkProfile: (params: RawParamsFrom<'associateDeviceWithNetworkProfile'>) => Promise<ReturnTypeFrom<'associateDeviceWithNetworkProfile'>>  = async params => {
  // undefined
    return this.client.associateDeviceWithNetworkProfile(params as any).promise();
  }

  associateDeviceWithRoom: (params: RawParamsFrom<'associateDeviceWithRoom'>) => Promise<ReturnTypeFrom<'associateDeviceWithRoom'>>  = async params => {
  // undefined
    return this.client.associateDeviceWithRoom(params as any).promise();
  }

  associateSkillGroupWithRoom: (params: RawParamsFrom<'associateSkillGroupWithRoom'>) => Promise<ReturnTypeFrom<'associateSkillGroupWithRoom'>>  = async params => {
  // undefined
    return this.client.associateSkillGroupWithRoom(params as any).promise();
  }

  associateSkillWithSkillGroup: (params: RawParamsFrom<'associateSkillWithSkillGroup'>) => Promise<ReturnTypeFrom<'associateSkillWithSkillGroup'>>  = async params => {
  // undefined
    return this.client.associateSkillWithSkillGroup(params as any).promise();
  }

  associateSkillWithUsers: (params: RawParamsFrom<'associateSkillWithUsers'>) => Promise<ReturnTypeFrom<'associateSkillWithUsers'>>  = async params => {
  // undefined
    return this.client.associateSkillWithUsers(params as any).promise();
  }

  createAddressBook: (params: RawParamsFrom<'createAddressBook'>) => Promise<ReturnTypeFrom<'createAddressBook'>>  = async params => {
  // undefined
    return this.client.createAddressBook(params as any).promise();
  }

  createBusinessReportSchedule: (params: RawParamsFrom<'createBusinessReportSchedule'>) => Promise<ReturnTypeFrom<'createBusinessReportSchedule'>>  = async params => {
  // undefined
    return this.client.createBusinessReportSchedule(params as any).promise();
  }

  createConferenceProvider: (params: RawParamsFrom<'createConferenceProvider'>) => Promise<ReturnTypeFrom<'createConferenceProvider'>>  = async params => {
  // undefined
    return this.client.createConferenceProvider(params as any).promise();
  }

  createContact: (params: RawParamsFrom<'createContact'>) => Promise<ReturnTypeFrom<'createContact'>>  = async params => {
  // undefined
    return this.client.createContact(params as any).promise();
  }

  createGatewayGroup: (params: RawParamsFrom<'createGatewayGroup'>) => Promise<ReturnTypeFrom<'createGatewayGroup'>>  = async params => {
  // undefined
    return this.client.createGatewayGroup(params as any).promise();
  }

  createNetworkProfile: (params: RawParamsFrom<'createNetworkProfile'>) => Promise<ReturnTypeFrom<'createNetworkProfile'>>  = async params => {
  // undefined
    return this.client.createNetworkProfile(params as any).promise();
  }

  createProfile: (params: RawParamsFrom<'createProfile'>) => Promise<ReturnTypeFrom<'createProfile'>>  = async params => {
  // undefined
    return this.client.createProfile(params as any).promise();
  }

  createRoom: (params: RawParamsFrom<'createRoom'>) => Promise<ReturnTypeFrom<'createRoom'>>  = async params => {
  // undefined
    return this.client.createRoom(params as any).promise();
  }

  createSkillGroup: (params: RawParamsFrom<'createSkillGroup'>) => Promise<ReturnTypeFrom<'createSkillGroup'>>  = async params => {
  // undefined
    return this.client.createSkillGroup(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deleteAddressBook: (params: RawParamsFrom<'deleteAddressBook'>) => Promise<ReturnTypeFrom<'deleteAddressBook'>>  = async params => {
  // undefined
    return this.client.deleteAddressBook(params as any).promise();
  }

  deleteBusinessReportSchedule: (params: RawParamsFrom<'deleteBusinessReportSchedule'>) => Promise<ReturnTypeFrom<'deleteBusinessReportSchedule'>>  = async params => {
  // undefined
    return this.client.deleteBusinessReportSchedule(params as any).promise();
  }

  deleteConferenceProvider: (params: RawParamsFrom<'deleteConferenceProvider'>) => Promise<ReturnTypeFrom<'deleteConferenceProvider'>>  = async params => {
  // undefined
    return this.client.deleteConferenceProvider(params as any).promise();
  }

  deleteContact: (params: RawParamsFrom<'deleteContact'>) => Promise<ReturnTypeFrom<'deleteContact'>>  = async params => {
  // undefined
    return this.client.deleteContact(params as any).promise();
  }

  deleteDevice: (params: RawParamsFrom<'deleteDevice'>) => Promise<ReturnTypeFrom<'deleteDevice'>>  = async params => {
  // undefined
    return this.client.deleteDevice(params as any).promise();
  }

  deleteDeviceUsageData: (params: RawParamsFrom<'deleteDeviceUsageData'>) => Promise<ReturnTypeFrom<'deleteDeviceUsageData'>>  = async params => {
  // undefined
    return this.client.deleteDeviceUsageData(params as any).promise();
  }

  deleteGatewayGroup: (params: RawParamsFrom<'deleteGatewayGroup'>) => Promise<ReturnTypeFrom<'deleteGatewayGroup'>>  = async params => {
  // undefined
    return this.client.deleteGatewayGroup(params as any).promise();
  }

  deleteNetworkProfile: (params: RawParamsFrom<'deleteNetworkProfile'>) => Promise<ReturnTypeFrom<'deleteNetworkProfile'>>  = async params => {
  // undefined
    return this.client.deleteNetworkProfile(params as any).promise();
  }

  deleteProfile: (params: RawParamsFrom<'deleteProfile'>) => Promise<ReturnTypeFrom<'deleteProfile'>>  = async params => {
  // undefined
    return this.client.deleteProfile(params as any).promise();
  }

  deleteRoom: (params: RawParamsFrom<'deleteRoom'>) => Promise<ReturnTypeFrom<'deleteRoom'>>  = async params => {
  // undefined
    return this.client.deleteRoom(params as any).promise();
  }

  deleteRoomSkillParameter: (params: RawParamsFrom<'deleteRoomSkillParameter'>) => Promise<ReturnTypeFrom<'deleteRoomSkillParameter'>>  = async params => {
  // undefined
    return this.client.deleteRoomSkillParameter(params as any).promise();
  }

  deleteSkillAuthorization: (params: RawParamsFrom<'deleteSkillAuthorization'>) => Promise<ReturnTypeFrom<'deleteSkillAuthorization'>>  = async params => {
  // undefined
    return this.client.deleteSkillAuthorization(params as any).promise();
  }

  deleteSkillGroup: (params: RawParamsFrom<'deleteSkillGroup'>) => Promise<ReturnTypeFrom<'deleteSkillGroup'>>  = async params => {
  // undefined
    return this.client.deleteSkillGroup(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  disassociateContactFromAddressBook: (params: RawParamsFrom<'disassociateContactFromAddressBook'>) => Promise<ReturnTypeFrom<'disassociateContactFromAddressBook'>>  = async params => {
  // undefined
    return this.client.disassociateContactFromAddressBook(params as any).promise();
  }

  disassociateDeviceFromRoom: (params: RawParamsFrom<'disassociateDeviceFromRoom'>) => Promise<ReturnTypeFrom<'disassociateDeviceFromRoom'>>  = async params => {
  // undefined
    return this.client.disassociateDeviceFromRoom(params as any).promise();
  }

  disassociateSkillFromSkillGroup: (params: RawParamsFrom<'disassociateSkillFromSkillGroup'>) => Promise<ReturnTypeFrom<'disassociateSkillFromSkillGroup'>>  = async params => {
  // undefined
    return this.client.disassociateSkillFromSkillGroup(params as any).promise();
  }

  disassociateSkillFromUsers: (params: RawParamsFrom<'disassociateSkillFromUsers'>) => Promise<ReturnTypeFrom<'disassociateSkillFromUsers'>>  = async params => {
  // undefined
    return this.client.disassociateSkillFromUsers(params as any).promise();
  }

  disassociateSkillGroupFromRoom: (params: RawParamsFrom<'disassociateSkillGroupFromRoom'>) => Promise<ReturnTypeFrom<'disassociateSkillGroupFromRoom'>>  = async params => {
  // undefined
    return this.client.disassociateSkillGroupFromRoom(params as any).promise();
  }

  forgetSmartHomeAppliances: (params: RawParamsFrom<'forgetSmartHomeAppliances'>) => Promise<ReturnTypeFrom<'forgetSmartHomeAppliances'>>  = async params => {
  // undefined
    return this.client.forgetSmartHomeAppliances(params as any).promise();
  }

  getAddressBook: (params: RawParamsFrom<'getAddressBook'>) => Promise<ReturnTypeFrom<'getAddressBook'>>  = async params => {
  // undefined
    return this.client.getAddressBook(params as any).promise();
  }

  getConferencePreference: (params: RawParamsFrom<'getConferencePreference'>) => Promise<ReturnTypeFrom<'getConferencePreference'>>  = async params => {
  // undefined
    return this.client.getConferencePreference(params as any).promise();
  }

  getConferenceProvider: (params: RawParamsFrom<'getConferenceProvider'>) => Promise<ReturnTypeFrom<'getConferenceProvider'>>  = async params => {
  // undefined
    return this.client.getConferenceProvider(params as any).promise();
  }

  getContact: (params: RawParamsFrom<'getContact'>) => Promise<ReturnTypeFrom<'getContact'>>  = async params => {
  // undefined
    return this.client.getContact(params as any).promise();
  }

  getDevice: (params: RawParamsFrom<'getDevice'>) => Promise<ReturnTypeFrom<'getDevice'>>  = async params => {
  // undefined
    return this.client.getDevice(params as any).promise();
  }

  getGateway: (params: RawParamsFrom<'getGateway'>) => Promise<ReturnTypeFrom<'getGateway'>>  = async params => {
  // undefined
    return this.client.getGateway(params as any).promise();
  }

  getGatewayGroup: (params: RawParamsFrom<'getGatewayGroup'>) => Promise<ReturnTypeFrom<'getGatewayGroup'>>  = async params => {
  // undefined
    return this.client.getGatewayGroup(params as any).promise();
  }

  getInvitationConfiguration: (params: RawParamsFrom<'getInvitationConfiguration'>) => Promise<ReturnTypeFrom<'getInvitationConfiguration'>>  = async params => {
  // undefined
    return this.client.getInvitationConfiguration(params as any).promise();
  }

  getNetworkProfile: (params: RawParamsFrom<'getNetworkProfile'>) => Promise<ReturnTypeFrom<'getNetworkProfile'>>  = async params => {
  // undefined
    return this.client.getNetworkProfile(params as any).promise();
  }

  getProfile: (params: RawParamsFrom<'getProfile'>) => Promise<ReturnTypeFrom<'getProfile'>>  = async params => {
  // undefined
    return this.client.getProfile(params as any).promise();
  }

  getRoom: (params: RawParamsFrom<'getRoom'>) => Promise<ReturnTypeFrom<'getRoom'>>  = async params => {
  // undefined
    return this.client.getRoom(params as any).promise();
  }

  getRoomSkillParameter: (params: RawParamsFrom<'getRoomSkillParameter'>) => Promise<ReturnTypeFrom<'getRoomSkillParameter'>>  = async params => {
  // undefined
    return this.client.getRoomSkillParameter(params as any).promise();
  }

  getSkillGroup: (params: RawParamsFrom<'getSkillGroup'>) => Promise<ReturnTypeFrom<'getSkillGroup'>>  = async params => {
  // undefined
    return this.client.getSkillGroup(params as any).promise();
  }

  listBusinessReportSchedules: (params: RawParamsFrom<'listBusinessReportSchedules'>) => Promise<ReturnTypeFrom<'listBusinessReportSchedules'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listBusinessReportSchedules(params as any).promise();
  }

  listConferenceProviders: (params: RawParamsFrom<'listConferenceProviders'>) => Promise<ReturnTypeFrom<'listConferenceProviders'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConferenceProviders(params as any).promise();
  }

  listDeviceEvents: (params: RawParamsFrom<'listDeviceEvents'>) => Promise<ReturnTypeFrom<'listDeviceEvents'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDeviceEvents(params as any).promise();
  }

  listGatewayGroups: (params: RawParamsFrom<'listGatewayGroups'>) => Promise<ReturnTypeFrom<'listGatewayGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGatewayGroups(params as any).promise();
  }

  listGateways: (params: RawParamsFrom<'listGateways'>) => Promise<ReturnTypeFrom<'listGateways'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGateways(params as any).promise();
  }

  listSkills: (params: RawParamsFrom<'listSkills'>) => Promise<ReturnTypeFrom<'listSkills'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSkills(params as any).promise();
  }

  listSkillsStoreCategories: (params: RawParamsFrom<'listSkillsStoreCategories'>) => Promise<ReturnTypeFrom<'listSkillsStoreCategories'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSkillsStoreCategories(params as any).promise();
  }

  listSkillsStoreSkillsByCategory: (params: RawParamsFrom<'listSkillsStoreSkillsByCategory'>) => Promise<ReturnTypeFrom<'listSkillsStoreSkillsByCategory'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSkillsStoreSkillsByCategory(params as any).promise();
  }

  listSmartHomeAppliances: (params: RawParamsFrom<'listSmartHomeAppliances'>) => Promise<ReturnTypeFrom<'listSmartHomeAppliances'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSmartHomeAppliances(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTags(params as any).promise();
  }

  putConferencePreference: (params: RawParamsFrom<'putConferencePreference'>) => Promise<ReturnTypeFrom<'putConferencePreference'>>  = async params => {
  // undefined
    return this.client.putConferencePreference(params as any).promise();
  }

  putInvitationConfiguration: (params: RawParamsFrom<'putInvitationConfiguration'>) => Promise<ReturnTypeFrom<'putInvitationConfiguration'>>  = async params => {
  // undefined
    return this.client.putInvitationConfiguration(params as any).promise();
  }

  putRoomSkillParameter: (params: RawParamsFrom<'putRoomSkillParameter'>) => Promise<ReturnTypeFrom<'putRoomSkillParameter'>>  = async params => {
  // undefined
    return this.client.putRoomSkillParameter(params as any).promise();
  }

  putSkillAuthorization: (params: RawParamsFrom<'putSkillAuthorization'>) => Promise<ReturnTypeFrom<'putSkillAuthorization'>>  = async params => {
  // undefined
    return this.client.putSkillAuthorization(params as any).promise();
  }

  registerAVSDevice: (params: RawParamsFrom<'registerAVSDevice'>) => Promise<ReturnTypeFrom<'registerAVSDevice'>>  = async params => {
  // undefined
    return this.client.registerAVSDevice(params as any).promise();
  }

  rejectSkill: (params: RawParamsFrom<'rejectSkill'>) => Promise<ReturnTypeFrom<'rejectSkill'>>  = async params => {
  // undefined
    return this.client.rejectSkill(params as any).promise();
  }

  resolveRoom: (params: RawParamsFrom<'resolveRoom'>) => Promise<ReturnTypeFrom<'resolveRoom'>>  = async params => {
  // undefined
    return this.client.resolveRoom(params as any).promise();
  }

  revokeInvitation: (params: RawParamsFrom<'revokeInvitation'>) => Promise<ReturnTypeFrom<'revokeInvitation'>>  = async params => {
  // undefined
    return this.client.revokeInvitation(params as any).promise();
  }

  searchAddressBooks: (params: RawParamsFrom<'searchAddressBooks'>) => Promise<ReturnTypeFrom<'searchAddressBooks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchAddressBooks(params as any).promise();
  }

  searchContacts: (params: RawParamsFrom<'searchContacts'>) => Promise<ReturnTypeFrom<'searchContacts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchContacts(params as any).promise();
  }

  searchDevices: (params: RawParamsFrom<'searchDevices'>) => Promise<ReturnTypeFrom<'searchDevices'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchDevices(params as any).promise();
  }

  searchNetworkProfiles: (params: RawParamsFrom<'searchNetworkProfiles'>) => Promise<ReturnTypeFrom<'searchNetworkProfiles'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchNetworkProfiles(params as any).promise();
  }

  searchProfiles: (params: RawParamsFrom<'searchProfiles'>) => Promise<ReturnTypeFrom<'searchProfiles'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchProfiles(params as any).promise();
  }

  searchRooms: (params: RawParamsFrom<'searchRooms'>) => Promise<ReturnTypeFrom<'searchRooms'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchRooms(params as any).promise();
  }

  searchSkillGroups: (params: RawParamsFrom<'searchSkillGroups'>) => Promise<ReturnTypeFrom<'searchSkillGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchSkillGroups(params as any).promise();
  }

  searchUsers: (params: RawParamsFrom<'searchUsers'>) => Promise<ReturnTypeFrom<'searchUsers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchUsers(params as any).promise();
  }

  sendAnnouncement: (params: RawParamsFrom<'sendAnnouncement'>) => Promise<ReturnTypeFrom<'sendAnnouncement'>>  = async params => {
  // undefined
    return this.client.sendAnnouncement(params as any).promise();
  }

  sendInvitation: (params: RawParamsFrom<'sendInvitation'>) => Promise<ReturnTypeFrom<'sendInvitation'>>  = async params => {
  // undefined
    return this.client.sendInvitation(params as any).promise();
  }

  startDeviceSync: (params: RawParamsFrom<'startDeviceSync'>) => Promise<ReturnTypeFrom<'startDeviceSync'>>  = async params => {
  // undefined
    return this.client.startDeviceSync(params as any).promise();
  }

  startSmartHomeApplianceDiscovery: (params: RawParamsFrom<'startSmartHomeApplianceDiscovery'>) => Promise<ReturnTypeFrom<'startSmartHomeApplianceDiscovery'>>  = async params => {
  // undefined
    return this.client.startSmartHomeApplianceDiscovery(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAddressBook: (params: RawParamsFrom<'updateAddressBook'>) => Promise<ReturnTypeFrom<'updateAddressBook'>>  = async params => {
  // undefined
    return this.client.updateAddressBook(params as any).promise();
  }

  updateBusinessReportSchedule: (params: RawParamsFrom<'updateBusinessReportSchedule'>) => Promise<ReturnTypeFrom<'updateBusinessReportSchedule'>>  = async params => {
  // undefined
    return this.client.updateBusinessReportSchedule(params as any).promise();
  }

  updateConferenceProvider: (params: RawParamsFrom<'updateConferenceProvider'>) => Promise<ReturnTypeFrom<'updateConferenceProvider'>>  = async params => {
  // undefined
    return this.client.updateConferenceProvider(params as any).promise();
  }

  updateContact: (params: RawParamsFrom<'updateContact'>) => Promise<ReturnTypeFrom<'updateContact'>>  = async params => {
  // undefined
    return this.client.updateContact(params as any).promise();
  }

  updateDevice: (params: RawParamsFrom<'updateDevice'>) => Promise<ReturnTypeFrom<'updateDevice'>>  = async params => {
  // undefined
    return this.client.updateDevice(params as any).promise();
  }

  updateGateway: (params: RawParamsFrom<'updateGateway'>) => Promise<ReturnTypeFrom<'updateGateway'>>  = async params => {
  // undefined
    return this.client.updateGateway(params as any).promise();
  }

  updateGatewayGroup: (params: RawParamsFrom<'updateGatewayGroup'>) => Promise<ReturnTypeFrom<'updateGatewayGroup'>>  = async params => {
  // undefined
    return this.client.updateGatewayGroup(params as any).promise();
  }

  updateNetworkProfile: (params: RawParamsFrom<'updateNetworkProfile'>) => Promise<ReturnTypeFrom<'updateNetworkProfile'>>  = async params => {
  // undefined
    return this.client.updateNetworkProfile(params as any).promise();
  }

  updateProfile: (params: RawParamsFrom<'updateProfile'>) => Promise<ReturnTypeFrom<'updateProfile'>>  = async params => {
  // undefined
    return this.client.updateProfile(params as any).promise();
  }

  updateRoom: (params: RawParamsFrom<'updateRoom'>) => Promise<ReturnTypeFrom<'updateRoom'>>  = async params => {
  // undefined
    return this.client.updateRoom(params as any).promise();
  }

  updateSkillGroup: (params: RawParamsFrom<'updateSkillGroup'>) => Promise<ReturnTypeFrom<'updateSkillGroup'>>  = async params => {
  // undefined
    return this.client.updateSkillGroup(params as any).promise();
  }
  
  static fromClient(client: AWSAlexaForBusiness): AlexaForBusiness {
    return new AlexaForBusiness(client) as any;
  }
  
  static client(options?: AWSAlexaForBusiness.Types.ClientConfiguration): AlexaForBusiness {
    return new AlexaForBusiness(new AWSAlexaForBusiness(options)) as any;
  }
}  
