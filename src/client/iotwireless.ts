import { Request, IoTWireless as AWSIoTWireless } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTWireless> = AWSIoTWireless[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTWireless> = AWSIoTWireless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTWireless[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTWireless, Extras> = AWSIoTWireless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iotwireless';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly ["listDestinations","listDeviceProfiles","listFuotaTasks","listMulticastGroups","listNetworkAnalyzerConfigurations","listPositionConfigurations","listServiceProfiles","listWirelessDevices","listWirelessGateways"];
    
  associateAwsAccountWithPartnerAccount: FunctionTypeFrom<'associateAwsAccountWithPartnerAccount'>;

  associateMulticastGroupWithFuotaTask: FunctionTypeFrom<'associateMulticastGroupWithFuotaTask'>;

  associateWirelessDeviceWithFuotaTask: FunctionTypeFrom<'associateWirelessDeviceWithFuotaTask'>;

  associateWirelessDeviceWithMulticastGroup: FunctionTypeFrom<'associateWirelessDeviceWithMulticastGroup'>;

  associateWirelessDeviceWithThing: FunctionTypeFrom<'associateWirelessDeviceWithThing'>;

  associateWirelessGatewayWithCertificate: FunctionTypeFrom<'associateWirelessGatewayWithCertificate'>;

  associateWirelessGatewayWithThing: FunctionTypeFrom<'associateWirelessGatewayWithThing'>;

  cancelMulticastGroupSession: FunctionTypeFrom<'cancelMulticastGroupSession'>;

  createDestination: FunctionTypeFrom<'createDestination'>;

  createDeviceProfile: FunctionTypeFrom<'createDeviceProfile'>;

  createFuotaTask: FunctionTypeFrom<'createFuotaTask'>;

  createMulticastGroup: FunctionTypeFrom<'createMulticastGroup'>;

  createNetworkAnalyzerConfiguration: FunctionTypeFrom<'createNetworkAnalyzerConfiguration'>;

  createServiceProfile: FunctionTypeFrom<'createServiceProfile'>;

  createWirelessDevice: FunctionTypeFrom<'createWirelessDevice'>;

  createWirelessGateway: FunctionTypeFrom<'createWirelessGateway'>;

  createWirelessGatewayTask: FunctionTypeFrom<'createWirelessGatewayTask'>;

  createWirelessGatewayTaskDefinition: FunctionTypeFrom<'createWirelessGatewayTaskDefinition'>;

  deleteDestination: FunctionTypeFrom<'deleteDestination'>;

  deleteDeviceProfile: FunctionTypeFrom<'deleteDeviceProfile'>;

  deleteFuotaTask: FunctionTypeFrom<'deleteFuotaTask'>;

  deleteMulticastGroup: FunctionTypeFrom<'deleteMulticastGroup'>;

  deleteNetworkAnalyzerConfiguration: FunctionTypeFrom<'deleteNetworkAnalyzerConfiguration'>;

  deleteQueuedMessages: FunctionTypeFrom<'deleteQueuedMessages'>;

  deleteServiceProfile: FunctionTypeFrom<'deleteServiceProfile'>;

  deleteWirelessDevice: FunctionTypeFrom<'deleteWirelessDevice'>;

  deleteWirelessGateway: FunctionTypeFrom<'deleteWirelessGateway'>;

  deleteWirelessGatewayTask: FunctionTypeFrom<'deleteWirelessGatewayTask'>;

  deleteWirelessGatewayTaskDefinition: FunctionTypeFrom<'deleteWirelessGatewayTaskDefinition'>;

  disassociateAwsAccountFromPartnerAccount: FunctionTypeFrom<'disassociateAwsAccountFromPartnerAccount'>;

  disassociateMulticastGroupFromFuotaTask: FunctionTypeFrom<'disassociateMulticastGroupFromFuotaTask'>;

  disassociateWirelessDeviceFromFuotaTask: FunctionTypeFrom<'disassociateWirelessDeviceFromFuotaTask'>;

  disassociateWirelessDeviceFromMulticastGroup: FunctionTypeFrom<'disassociateWirelessDeviceFromMulticastGroup'>;

  disassociateWirelessDeviceFromThing: FunctionTypeFrom<'disassociateWirelessDeviceFromThing'>;

  disassociateWirelessGatewayFromCertificate: FunctionTypeFrom<'disassociateWirelessGatewayFromCertificate'>;

  disassociateWirelessGatewayFromThing: FunctionTypeFrom<'disassociateWirelessGatewayFromThing'>;

  getDestination: FunctionTypeFrom<'getDestination'>;

  getDeviceProfile: FunctionTypeFrom<'getDeviceProfile'>;

  getEventConfigurationByResourceTypes: FunctionTypeFrom<'getEventConfigurationByResourceTypes'>;

  getFuotaTask: FunctionTypeFrom<'getFuotaTask'>;

  getLogLevelsByResourceTypes: FunctionTypeFrom<'getLogLevelsByResourceTypes'>;

  getMulticastGroup: FunctionTypeFrom<'getMulticastGroup'>;

  getMulticastGroupSession: FunctionTypeFrom<'getMulticastGroupSession'>;

  getNetworkAnalyzerConfiguration: FunctionTypeFrom<'getNetworkAnalyzerConfiguration'>;

  getPartnerAccount: FunctionTypeFrom<'getPartnerAccount'>;

  getPosition: FunctionTypeFrom<'getPosition'>;

  getPositionConfiguration: FunctionTypeFrom<'getPositionConfiguration'>;

  getResourceEventConfiguration: FunctionTypeFrom<'getResourceEventConfiguration'>;

  getResourceLogLevel: FunctionTypeFrom<'getResourceLogLevel'>;

  getServiceEndpoint: FunctionTypeFrom<'getServiceEndpoint'>;

  getServiceProfile: FunctionTypeFrom<'getServiceProfile'>;

  getWirelessDevice: FunctionTypeFrom<'getWirelessDevice'>;

  getWirelessDeviceStatistics: FunctionTypeFrom<'getWirelessDeviceStatistics'>;

  getWirelessGateway: FunctionTypeFrom<'getWirelessGateway'>;

  getWirelessGatewayCertificate: FunctionTypeFrom<'getWirelessGatewayCertificate'>;

  getWirelessGatewayFirmwareInformation: FunctionTypeFrom<'getWirelessGatewayFirmwareInformation'>;

  getWirelessGatewayStatistics: FunctionTypeFrom<'getWirelessGatewayStatistics'>;

  getWirelessGatewayTask: FunctionTypeFrom<'getWirelessGatewayTask'>;

  getWirelessGatewayTaskDefinition: FunctionTypeFrom<'getWirelessGatewayTaskDefinition'>;

  listDestinations: FunctionTypeFrom<'listDestinations'>;

  listDeviceProfiles: FunctionTypeFrom<'listDeviceProfiles'>;

  listEventConfigurations: FunctionTypeFrom<'listEventConfigurations'>;

  listFuotaTasks: FunctionTypeFrom<'listFuotaTasks'>;

  listMulticastGroups: FunctionTypeFrom<'listMulticastGroups'>;

  listMulticastGroupsByFuotaTask: FunctionTypeFrom<'listMulticastGroupsByFuotaTask'>;

  listNetworkAnalyzerConfigurations: FunctionTypeFrom<'listNetworkAnalyzerConfigurations'>;

  listPartnerAccounts: FunctionTypeFrom<'listPartnerAccounts'>;

  listPositionConfigurations: FunctionTypeFrom<'listPositionConfigurations'>;

  listQueuedMessages: FunctionTypeFrom<'listQueuedMessages'>;

  listServiceProfiles: FunctionTypeFrom<'listServiceProfiles'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWirelessDevices: FunctionTypeFrom<'listWirelessDevices'>;

  listWirelessGatewayTaskDefinitions: FunctionTypeFrom<'listWirelessGatewayTaskDefinitions'>;

  listWirelessGateways: FunctionTypeFrom<'listWirelessGateways'>;

  putPositionConfiguration: FunctionTypeFrom<'putPositionConfiguration'>;

  putResourceLogLevel: FunctionTypeFrom<'putResourceLogLevel'>;

  resetAllResourceLogLevels: FunctionTypeFrom<'resetAllResourceLogLevels'>;

  resetResourceLogLevel: FunctionTypeFrom<'resetResourceLogLevel'>;

  sendDataToMulticastGroup: FunctionTypeFrom<'sendDataToMulticastGroup'>;

  sendDataToWirelessDevice: FunctionTypeFrom<'sendDataToWirelessDevice'>;

  startBulkAssociateWirelessDeviceWithMulticastGroup: FunctionTypeFrom<'startBulkAssociateWirelessDeviceWithMulticastGroup'>;

  startBulkDisassociateWirelessDeviceFromMulticastGroup: FunctionTypeFrom<'startBulkDisassociateWirelessDeviceFromMulticastGroup'>;

  startFuotaTask: FunctionTypeFrom<'startFuotaTask'>;

  startMulticastGroupSession: FunctionTypeFrom<'startMulticastGroupSession'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testWirelessDevice: FunctionTypeFrom<'testWirelessDevice'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDestination: FunctionTypeFrom<'updateDestination'>;

  updateEventConfigurationByResourceTypes: FunctionTypeFrom<'updateEventConfigurationByResourceTypes'>;

  updateFuotaTask: FunctionTypeFrom<'updateFuotaTask'>;

  updateLogLevelsByResourceTypes: FunctionTypeFrom<'updateLogLevelsByResourceTypes'>;

  updateMulticastGroup: FunctionTypeFrom<'updateMulticastGroup'>;

  updateNetworkAnalyzerConfiguration: FunctionTypeFrom<'updateNetworkAnalyzerConfiguration'>;

  updatePartnerAccount: FunctionTypeFrom<'updatePartnerAccount'>;

  updatePosition: FunctionTypeFrom<'updatePosition'>;

  updateResourceEventConfiguration: FunctionTypeFrom<'updateResourceEventConfiguration'>;

  updateWirelessDevice: FunctionTypeFrom<'updateWirelessDevice'>;

  updateWirelessGateway: FunctionTypeFrom<'updateWirelessGateway'>
}
 
export class IoTWireless implements ClientType {
  private constructor(private readonly client: AWSIoTWireless) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotwireless';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = ["listDestinations","listDeviceProfiles","listFuotaTasks","listMulticastGroups","listNetworkAnalyzerConfigurations","listPositionConfigurations","listServiceProfiles","listWirelessDevices","listWirelessGateways"] as const;
  
  async associateAwsAccountWithPartnerAccount(...args: any): Promise<any> {
  // undefined
    return this.client.associateAwsAccountWithPartnerAccount(...args).promise()
  }

  async associateMulticastGroupWithFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.associateMulticastGroupWithFuotaTask(...args).promise()
  }

  async associateWirelessDeviceWithFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.associateWirelessDeviceWithFuotaTask(...args).promise()
  }

  async associateWirelessDeviceWithMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.associateWirelessDeviceWithMulticastGroup(...args).promise()
  }

  async associateWirelessDeviceWithThing(...args: any): Promise<any> {
  // undefined
    return this.client.associateWirelessDeviceWithThing(...args).promise()
  }

  async associateWirelessGatewayWithCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.associateWirelessGatewayWithCertificate(...args).promise()
  }

  async associateWirelessGatewayWithThing(...args: any): Promise<any> {
  // undefined
    return this.client.associateWirelessGatewayWithThing(...args).promise()
  }

  async cancelMulticastGroupSession(...args: any): Promise<any> {
  // undefined
    return this.client.cancelMulticastGroupSession(...args).promise()
  }

  async createDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createDestination(...args).promise()
  }

  async createDeviceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createDeviceProfile(...args).promise()
  }

  async createFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.createFuotaTask(...args).promise()
  }

  async createMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createMulticastGroup(...args).promise()
  }

  async createNetworkAnalyzerConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkAnalyzerConfiguration(...args).promise()
  }

  async createServiceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createServiceProfile(...args).promise()
  }

  async createWirelessDevice(...args: any): Promise<any> {
  // undefined
    return this.client.createWirelessDevice(...args).promise()
  }

  async createWirelessGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createWirelessGateway(...args).promise()
  }

  async createWirelessGatewayTask(...args: any): Promise<any> {
  // undefined
    return this.client.createWirelessGatewayTask(...args).promise()
  }

  async createWirelessGatewayTaskDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createWirelessGatewayTaskDefinition(...args).promise()
  }

  async deleteDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDestination(...args).promise()
  }

  async deleteDeviceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeviceProfile(...args).promise()
  }

  async deleteFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFuotaTask(...args).promise()
  }

  async deleteMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMulticastGroup(...args).promise()
  }

  async deleteNetworkAnalyzerConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkAnalyzerConfiguration(...args).promise()
  }

  async deleteQueuedMessages(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQueuedMessages(...args).promise()
  }

  async deleteServiceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServiceProfile(...args).promise()
  }

  async deleteWirelessDevice(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWirelessDevice(...args).promise()
  }

  async deleteWirelessGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWirelessGateway(...args).promise()
  }

  async deleteWirelessGatewayTask(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWirelessGatewayTask(...args).promise()
  }

  async deleteWirelessGatewayTaskDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWirelessGatewayTaskDefinition(...args).promise()
  }

  async disassociateAwsAccountFromPartnerAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateAwsAccountFromPartnerAccount(...args).promise()
  }

  async disassociateMulticastGroupFromFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateMulticastGroupFromFuotaTask(...args).promise()
  }

  async disassociateWirelessDeviceFromFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateWirelessDeviceFromFuotaTask(...args).promise()
  }

  async disassociateWirelessDeviceFromMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateWirelessDeviceFromMulticastGroup(...args).promise()
  }

  async disassociateWirelessDeviceFromThing(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateWirelessDeviceFromThing(...args).promise()
  }

  async disassociateWirelessGatewayFromCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateWirelessGatewayFromCertificate(...args).promise()
  }

  async disassociateWirelessGatewayFromThing(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateWirelessGatewayFromThing(...args).promise()
  }

  async getDestination(...args: any): Promise<any> {
  // undefined
    return this.client.getDestination(...args).promise()
  }

  async getDeviceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getDeviceProfile(...args).promise()
  }

  async getEventConfigurationByResourceTypes(...args: any): Promise<any> {
  // undefined
    return this.client.getEventConfigurationByResourceTypes(...args).promise()
  }

  async getFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.getFuotaTask(...args).promise()
  }

  async getLogLevelsByResourceTypes(...args: any): Promise<any> {
  // undefined
    return this.client.getLogLevelsByResourceTypes(...args).promise()
  }

  async getMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getMulticastGroup(...args).promise()
  }

  async getMulticastGroupSession(...args: any): Promise<any> {
  // undefined
    return this.client.getMulticastGroupSession(...args).promise()
  }

  async getNetworkAnalyzerConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkAnalyzerConfiguration(...args).promise()
  }

  async getPartnerAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getPartnerAccount(...args).promise()
  }

  async getPosition(...args: any): Promise<any> {
  // undefined
    return this.client.getPosition(...args).promise()
  }

  async getPositionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getPositionConfiguration(...args).promise()
  }

  async getResourceEventConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getResourceEventConfiguration(...args).promise()
  }

  async getResourceLogLevel(...args: any): Promise<any> {
  // undefined
    return this.client.getResourceLogLevel(...args).promise()
  }

  async getServiceEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceEndpoint(...args).promise()
  }

  async getServiceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceProfile(...args).promise()
  }

  async getWirelessDevice(...args: any): Promise<any> {
  // undefined
    return this.client.getWirelessDevice(...args).promise()
  }

  async getWirelessDeviceStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getWirelessDeviceStatistics(...args).promise()
  }

  async getWirelessGateway(...args: any): Promise<any> {
  // undefined
    return this.client.getWirelessGateway(...args).promise()
  }

  async getWirelessGatewayCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.getWirelessGatewayCertificate(...args).promise()
  }

  async getWirelessGatewayFirmwareInformation(...args: any): Promise<any> {
  // undefined
    return this.client.getWirelessGatewayFirmwareInformation(...args).promise()
  }

  async getWirelessGatewayStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getWirelessGatewayStatistics(...args).promise()
  }

  async getWirelessGatewayTask(...args: any): Promise<any> {
  // undefined
    return this.client.getWirelessGatewayTask(...args).promise()
  }

  async getWirelessGatewayTaskDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getWirelessGatewayTaskDefinition(...args).promise()
  }

  async listDestinations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDestinations(...args).promise()
  }

  async listDeviceProfiles(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDeviceProfiles(...args).promise()
  }

  async listEventConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listEventConfigurations(...args).promise()
  }

  async listFuotaTasks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFuotaTasks(...args).promise()
  }

  async listMulticastGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMulticastGroups(...args).promise()
  }

  async listMulticastGroupsByFuotaTask(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMulticastGroupsByFuotaTask(...args).promise()
  }

  async listNetworkAnalyzerConfigurations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNetworkAnalyzerConfigurations(...args).promise()
  }

  async listPartnerAccounts(...args: any): Promise<any> {
  // undefined
    return this.client.listPartnerAccounts(...args).promise()
  }

  async listPositionConfigurations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPositionConfigurations(...args).promise()
  }

  async listQueuedMessages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQueuedMessages(...args).promise()
  }

  async listServiceProfiles(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listServiceProfiles(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWirelessDevices(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWirelessDevices(...args).promise()
  }

  async listWirelessGatewayTaskDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.listWirelessGatewayTaskDefinitions(...args).promise()
  }

  async listWirelessGateways(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWirelessGateways(...args).promise()
  }

  async putPositionConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putPositionConfiguration(...args).promise()
  }

  async putResourceLogLevel(...args: any): Promise<any> {
  // undefined
    return this.client.putResourceLogLevel(...args).promise()
  }

  async resetAllResourceLogLevels(...args: any): Promise<any> {
  // undefined
    return this.client.resetAllResourceLogLevels(...args).promise()
  }

  async resetResourceLogLevel(...args: any): Promise<any> {
  // undefined
    return this.client.resetResourceLogLevel(...args).promise()
  }

  async sendDataToMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.sendDataToMulticastGroup(...args).promise()
  }

  async sendDataToWirelessDevice(...args: any): Promise<any> {
  // undefined
    return this.client.sendDataToWirelessDevice(...args).promise()
  }

  async startBulkAssociateWirelessDeviceWithMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.startBulkAssociateWirelessDeviceWithMulticastGroup(...args).promise()
  }

  async startBulkDisassociateWirelessDeviceFromMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.startBulkDisassociateWirelessDeviceFromMulticastGroup(...args).promise()
  }

  async startFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.startFuotaTask(...args).promise()
  }

  async startMulticastGroupSession(...args: any): Promise<any> {
  // undefined
    return this.client.startMulticastGroupSession(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testWirelessDevice(...args: any): Promise<any> {
  // undefined
    return this.client.testWirelessDevice(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateDestination(...args).promise()
  }

  async updateEventConfigurationByResourceTypes(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventConfigurationByResourceTypes(...args).promise()
  }

  async updateFuotaTask(...args: any): Promise<any> {
  // undefined
    return this.client.updateFuotaTask(...args).promise()
  }

  async updateLogLevelsByResourceTypes(...args: any): Promise<any> {
  // undefined
    return this.client.updateLogLevelsByResourceTypes(...args).promise()
  }

  async updateMulticastGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateMulticastGroup(...args).promise()
  }

  async updateNetworkAnalyzerConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateNetworkAnalyzerConfiguration(...args).promise()
  }

  async updatePartnerAccount(...args: any): Promise<any> {
  // undefined
    return this.client.updatePartnerAccount(...args).promise()
  }

  async updatePosition(...args: any): Promise<any> {
  // undefined
    return this.client.updatePosition(...args).promise()
  }

  async updateResourceEventConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateResourceEventConfiguration(...args).promise()
  }

  async updateWirelessDevice(...args: any): Promise<any> {
  // undefined
    return this.client.updateWirelessDevice(...args).promise()
  }

  async updateWirelessGateway(...args: any): Promise<any> {
  // undefined
    return this.client.updateWirelessGateway(...args).promise()
  }
  
  static fromClient(client: AWSIoTWireless): ClientType {
    return new IoTWireless(client) as any;
  }
  
  static client(options?: AWSIoTWireless.Types.ClientConfiguration): ClientType {
    return new IoTWireless(new AWSIoTWireless(options)) as any;
  }
}  
