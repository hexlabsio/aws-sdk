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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'a4b';
    global: false;
    category: 'Business Applications'
    topLevelCalls: readonly ["listBusinessReportSchedules","listConferenceProviders","listGatewayGroups","listGateways","listSkills","listSkillsStoreCategories","searchAddressBooks","searchContacts","searchDevices","searchNetworkProfiles","searchProfiles","searchRooms","searchSkillGroups","searchUsers"];
    
  approveSkill: FunctionTypeFrom<'approveSkill'>;

  associateContactWithAddressBook: FunctionTypeFrom<'associateContactWithAddressBook'>;

  associateDeviceWithNetworkProfile: FunctionTypeFrom<'associateDeviceWithNetworkProfile'>;

  associateDeviceWithRoom: FunctionTypeFrom<'associateDeviceWithRoom'>;

  associateSkillGroupWithRoom: FunctionTypeFrom<'associateSkillGroupWithRoom'>;

  associateSkillWithSkillGroup: FunctionTypeFrom<'associateSkillWithSkillGroup'>;

  associateSkillWithUsers: FunctionTypeFrom<'associateSkillWithUsers'>;

  createAddressBook: FunctionTypeFrom<'createAddressBook'>;

  createBusinessReportSchedule: FunctionTypeFrom<'createBusinessReportSchedule'>;

  createConferenceProvider: FunctionTypeFrom<'createConferenceProvider'>;

  createContact: FunctionTypeFrom<'createContact'>;

  createGatewayGroup: FunctionTypeFrom<'createGatewayGroup'>;

  createNetworkProfile: FunctionTypeFrom<'createNetworkProfile'>;

  createProfile: FunctionTypeFrom<'createProfile'>;

  createRoom: FunctionTypeFrom<'createRoom'>;

  createSkillGroup: FunctionTypeFrom<'createSkillGroup'>;

  createUser: FunctionTypeFrom<'createUser'>;

  deleteAddressBook: FunctionTypeFrom<'deleteAddressBook'>;

  deleteBusinessReportSchedule: FunctionTypeFrom<'deleteBusinessReportSchedule'>;

  deleteConferenceProvider: FunctionTypeFrom<'deleteConferenceProvider'>;

  deleteContact: FunctionTypeFrom<'deleteContact'>;

  deleteDevice: FunctionTypeFrom<'deleteDevice'>;

  deleteDeviceUsageData: FunctionTypeFrom<'deleteDeviceUsageData'>;

  deleteGatewayGroup: FunctionTypeFrom<'deleteGatewayGroup'>;

  deleteNetworkProfile: FunctionTypeFrom<'deleteNetworkProfile'>;

  deleteProfile: FunctionTypeFrom<'deleteProfile'>;

  deleteRoom: FunctionTypeFrom<'deleteRoom'>;

  deleteRoomSkillParameter: FunctionTypeFrom<'deleteRoomSkillParameter'>;

  deleteSkillAuthorization: FunctionTypeFrom<'deleteSkillAuthorization'>;

  deleteSkillGroup: FunctionTypeFrom<'deleteSkillGroup'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  disassociateContactFromAddressBook: FunctionTypeFrom<'disassociateContactFromAddressBook'>;

  disassociateDeviceFromRoom: FunctionTypeFrom<'disassociateDeviceFromRoom'>;

  disassociateSkillFromSkillGroup: FunctionTypeFrom<'disassociateSkillFromSkillGroup'>;

  disassociateSkillFromUsers: FunctionTypeFrom<'disassociateSkillFromUsers'>;

  disassociateSkillGroupFromRoom: FunctionTypeFrom<'disassociateSkillGroupFromRoom'>;

  forgetSmartHomeAppliances: FunctionTypeFrom<'forgetSmartHomeAppliances'>;

  getAddressBook: FunctionTypeFrom<'getAddressBook'>;

  getConferencePreference: FunctionTypeFrom<'getConferencePreference'>;

  getConferenceProvider: FunctionTypeFrom<'getConferenceProvider'>;

  getContact: FunctionTypeFrom<'getContact'>;

  getDevice: FunctionTypeFrom<'getDevice'>;

  getGateway: FunctionTypeFrom<'getGateway'>;

  getGatewayGroup: FunctionTypeFrom<'getGatewayGroup'>;

  getInvitationConfiguration: FunctionTypeFrom<'getInvitationConfiguration'>;

  getNetworkProfile: FunctionTypeFrom<'getNetworkProfile'>;

  getProfile: FunctionTypeFrom<'getProfile'>;

  getRoom: FunctionTypeFrom<'getRoom'>;

  getRoomSkillParameter: FunctionTypeFrom<'getRoomSkillParameter'>;

  getSkillGroup: FunctionTypeFrom<'getSkillGroup'>;

  listBusinessReportSchedules: FunctionTypeFrom<'listBusinessReportSchedules'>;

  listConferenceProviders: FunctionTypeFrom<'listConferenceProviders'>;

  listDeviceEvents: FunctionTypeFrom<'listDeviceEvents'>;

  listGatewayGroups: FunctionTypeFrom<'listGatewayGroups'>;

  listGateways: FunctionTypeFrom<'listGateways'>;

  listSkills: FunctionTypeFrom<'listSkills'>;

  listSkillsStoreCategories: FunctionTypeFrom<'listSkillsStoreCategories'>;

  listSkillsStoreSkillsByCategory: FunctionTypeFrom<'listSkillsStoreSkillsByCategory'>;

  listSmartHomeAppliances: FunctionTypeFrom<'listSmartHomeAppliances'>;

  listTags: FunctionTypeFrom<'listTags'>;

  putConferencePreference: FunctionTypeFrom<'putConferencePreference'>;

  putInvitationConfiguration: FunctionTypeFrom<'putInvitationConfiguration'>;

  putRoomSkillParameter: FunctionTypeFrom<'putRoomSkillParameter'>;

  putSkillAuthorization: FunctionTypeFrom<'putSkillAuthorization'>;

  registerAVSDevice: FunctionTypeFrom<'registerAVSDevice'>;

  rejectSkill: FunctionTypeFrom<'rejectSkill'>;

  resolveRoom: FunctionTypeFrom<'resolveRoom'>;

  revokeInvitation: FunctionTypeFrom<'revokeInvitation'>;

  searchAddressBooks: FunctionTypeFrom<'searchAddressBooks'>;

  searchContacts: FunctionTypeFrom<'searchContacts'>;

  searchDevices: FunctionTypeFrom<'searchDevices'>;

  searchNetworkProfiles: FunctionTypeFrom<'searchNetworkProfiles'>;

  searchProfiles: FunctionTypeFrom<'searchProfiles'>;

  searchRooms: FunctionTypeFrom<'searchRooms'>;

  searchSkillGroups: FunctionTypeFrom<'searchSkillGroups'>;

  searchUsers: FunctionTypeFrom<'searchUsers'>;

  sendAnnouncement: FunctionTypeFrom<'sendAnnouncement'>;

  sendInvitation: FunctionTypeFrom<'sendInvitation'>;

  startDeviceSync: FunctionTypeFrom<'startDeviceSync'>;

  startSmartHomeApplianceDiscovery: FunctionTypeFrom<'startSmartHomeApplianceDiscovery'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAddressBook: FunctionTypeFrom<'updateAddressBook'>;

  updateBusinessReportSchedule: FunctionTypeFrom<'updateBusinessReportSchedule'>;

  updateConferenceProvider: FunctionTypeFrom<'updateConferenceProvider'>;

  updateContact: FunctionTypeFrom<'updateContact'>;

  updateDevice: FunctionTypeFrom<'updateDevice'>;

  updateGateway: FunctionTypeFrom<'updateGateway'>;

  updateGatewayGroup: FunctionTypeFrom<'updateGatewayGroup'>;

  updateNetworkProfile: FunctionTypeFrom<'updateNetworkProfile'>;

  updateProfile: FunctionTypeFrom<'updateProfile'>;

  updateRoom: FunctionTypeFrom<'updateRoom'>;

  updateSkillGroup: FunctionTypeFrom<'updateSkillGroup'>
}
 
export class AlexaForBusiness implements ClientType {
  private constructor(private readonly client: AWSAlexaForBusiness) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'a4b';
  public readonly global = false;
  public readonly category = 'Business Applications';
  public readonly topLevelCalls = ["listBusinessReportSchedules","listConferenceProviders","listGatewayGroups","listGateways","listSkills","listSkillsStoreCategories","searchAddressBooks","searchContacts","searchDevices","searchNetworkProfiles","searchProfiles","searchRooms","searchSkillGroups","searchUsers"] as const;
  
  async approveSkill(...args: any): Promise<any> {
  // undefined
    return this.client.approveSkill(...args).promise()
  }

  async associateContactWithAddressBook(...args: any): Promise<any> {
  // undefined
    return this.client.associateContactWithAddressBook(...args).promise()
  }

  async associateDeviceWithNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.associateDeviceWithNetworkProfile(...args).promise()
  }

  async associateDeviceWithRoom(...args: any): Promise<any> {
  // undefined
    return this.client.associateDeviceWithRoom(...args).promise()
  }

  async associateSkillGroupWithRoom(...args: any): Promise<any> {
  // undefined
    return this.client.associateSkillGroupWithRoom(...args).promise()
  }

  async associateSkillWithSkillGroup(...args: any): Promise<any> {
  // undefined
    return this.client.associateSkillWithSkillGroup(...args).promise()
  }

  async associateSkillWithUsers(...args: any): Promise<any> {
  // undefined
    return this.client.associateSkillWithUsers(...args).promise()
  }

  async createAddressBook(...args: any): Promise<any> {
  // undefined
    return this.client.createAddressBook(...args).promise()
  }

  async createBusinessReportSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.createBusinessReportSchedule(...args).promise()
  }

  async createConferenceProvider(...args: any): Promise<any> {
  // undefined
    return this.client.createConferenceProvider(...args).promise()
  }

  async createContact(...args: any): Promise<any> {
  // undefined
    return this.client.createContact(...args).promise()
  }

  async createGatewayGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGatewayGroup(...args).promise()
  }

  async createNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkProfile(...args).promise()
  }

  async createProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createProfile(...args).promise()
  }

  async createRoom(...args: any): Promise<any> {
  // undefined
    return this.client.createRoom(...args).promise()
  }

  async createSkillGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createSkillGroup(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async deleteAddressBook(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAddressBook(...args).promise()
  }

  async deleteBusinessReportSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBusinessReportSchedule(...args).promise()
  }

  async deleteConferenceProvider(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConferenceProvider(...args).promise()
  }

  async deleteContact(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContact(...args).promise()
  }

  async deleteDevice(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDevice(...args).promise()
  }

  async deleteDeviceUsageData(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeviceUsageData(...args).promise()
  }

  async deleteGatewayGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGatewayGroup(...args).promise()
  }

  async deleteNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkProfile(...args).promise()
  }

  async deleteProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProfile(...args).promise()
  }

  async deleteRoom(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoom(...args).promise()
  }

  async deleteRoomSkillParameter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoomSkillParameter(...args).promise()
  }

  async deleteSkillAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSkillAuthorization(...args).promise()
  }

  async deleteSkillGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSkillGroup(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async disassociateContactFromAddressBook(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateContactFromAddressBook(...args).promise()
  }

  async disassociateDeviceFromRoom(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateDeviceFromRoom(...args).promise()
  }

  async disassociateSkillFromSkillGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateSkillFromSkillGroup(...args).promise()
  }

  async disassociateSkillFromUsers(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateSkillFromUsers(...args).promise()
  }

  async disassociateSkillGroupFromRoom(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateSkillGroupFromRoom(...args).promise()
  }

  async forgetSmartHomeAppliances(...args: any): Promise<any> {
  // undefined
    return this.client.forgetSmartHomeAppliances(...args).promise()
  }

  async getAddressBook(...args: any): Promise<any> {
  // undefined
    return this.client.getAddressBook(...args).promise()
  }

  async getConferencePreference(...args: any): Promise<any> {
  // undefined
    return this.client.getConferencePreference(...args).promise()
  }

  async getConferenceProvider(...args: any): Promise<any> {
  // undefined
    return this.client.getConferenceProvider(...args).promise()
  }

  async getContact(...args: any): Promise<any> {
  // undefined
    return this.client.getContact(...args).promise()
  }

  async getDevice(...args: any): Promise<any> {
  // undefined
    return this.client.getDevice(...args).promise()
  }

  async getGateway(...args: any): Promise<any> {
  // undefined
    return this.client.getGateway(...args).promise()
  }

  async getGatewayGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getGatewayGroup(...args).promise()
  }

  async getInvitationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getInvitationConfiguration(...args).promise()
  }

  async getNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkProfile(...args).promise()
  }

  async getProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getProfile(...args).promise()
  }

  async getRoom(...args: any): Promise<any> {
  // undefined
    return this.client.getRoom(...args).promise()
  }

  async getRoomSkillParameter(...args: any): Promise<any> {
  // undefined
    return this.client.getRoomSkillParameter(...args).promise()
  }

  async getSkillGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getSkillGroup(...args).promise()
  }

  async listBusinessReportSchedules(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listBusinessReportSchedules(...args).promise()
  }

  async listConferenceProviders(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConferenceProviders(...args).promise()
  }

  async listDeviceEvents(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDeviceEvents(...args).promise()
  }

  async listGatewayGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGatewayGroups(...args).promise()
  }

  async listGateways(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGateways(...args).promise()
  }

  async listSkills(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSkills(...args).promise()
  }

  async listSkillsStoreCategories(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSkillsStoreCategories(...args).promise()
  }

  async listSkillsStoreSkillsByCategory(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSkillsStoreSkillsByCategory(...args).promise()
  }

  async listSmartHomeAppliances(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSmartHomeAppliances(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTags(...args).promise()
  }

  async putConferencePreference(...args: any): Promise<any> {
  // undefined
    return this.client.putConferencePreference(...args).promise()
  }

  async putInvitationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putInvitationConfiguration(...args).promise()
  }

  async putRoomSkillParameter(...args: any): Promise<any> {
  // undefined
    return this.client.putRoomSkillParameter(...args).promise()
  }

  async putSkillAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.putSkillAuthorization(...args).promise()
  }

  async registerAVSDevice(...args: any): Promise<any> {
  // undefined
    return this.client.registerAVSDevice(...args).promise()
  }

  async rejectSkill(...args: any): Promise<any> {
  // undefined
    return this.client.rejectSkill(...args).promise()
  }

  async resolveRoom(...args: any): Promise<any> {
  // undefined
    return this.client.resolveRoom(...args).promise()
  }

  async revokeInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.revokeInvitation(...args).promise()
  }

  async searchAddressBooks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchAddressBooks(...args).promise()
  }

  async searchContacts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchContacts(...args).promise()
  }

  async searchDevices(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchDevices(...args).promise()
  }

  async searchNetworkProfiles(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchNetworkProfiles(...args).promise()
  }

  async searchProfiles(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchProfiles(...args).promise()
  }

  async searchRooms(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchRooms(...args).promise()
  }

  async searchSkillGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchSkillGroups(...args).promise()
  }

  async searchUsers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchUsers(...args).promise()
  }

  async sendAnnouncement(...args: any): Promise<any> {
  // undefined
    return this.client.sendAnnouncement(...args).promise()
  }

  async sendInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.sendInvitation(...args).promise()
  }

  async startDeviceSync(...args: any): Promise<any> {
  // undefined
    return this.client.startDeviceSync(...args).promise()
  }

  async startSmartHomeApplianceDiscovery(...args: any): Promise<any> {
  // undefined
    return this.client.startSmartHomeApplianceDiscovery(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAddressBook(...args: any): Promise<any> {
  // undefined
    return this.client.updateAddressBook(...args).promise()
  }

  async updateBusinessReportSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.updateBusinessReportSchedule(...args).promise()
  }

  async updateConferenceProvider(...args: any): Promise<any> {
  // undefined
    return this.client.updateConferenceProvider(...args).promise()
  }

  async updateContact(...args: any): Promise<any> {
  // undefined
    return this.client.updateContact(...args).promise()
  }

  async updateDevice(...args: any): Promise<any> {
  // undefined
    return this.client.updateDevice(...args).promise()
  }

  async updateGateway(...args: any): Promise<any> {
  // undefined
    return this.client.updateGateway(...args).promise()
  }

  async updateGatewayGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGatewayGroup(...args).promise()
  }

  async updateNetworkProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateNetworkProfile(...args).promise()
  }

  async updateProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateProfile(...args).promise()
  }

  async updateRoom(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoom(...args).promise()
  }

  async updateSkillGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateSkillGroup(...args).promise()
  }
  
  static fromClient(client: AWSAlexaForBusiness): ClientType {
    return new AlexaForBusiness(client) as any;
  }
  
  static client(options?: AWSAlexaForBusiness.Types.ClientConfiguration): ClientType {
    return new AlexaForBusiness(new AWSAlexaForBusiness(options)) as any;
  }
}  
