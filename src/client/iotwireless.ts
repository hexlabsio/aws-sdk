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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTWireless> = AWSIoTWireless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTWireless {
  private constructor(private readonly client: AWSIoTWireless) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotwireless' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = ["listDestinations","listDeviceProfiles","listFuotaTasks","listMulticastGroups","listNetworkAnalyzerConfigurations","listPositionConfigurations","listServiceProfiles","listWirelessDevices","listWirelessGateways"] as const;
  
  associateAwsAccountWithPartnerAccount: (params: RawParamsFrom<'associateAwsAccountWithPartnerAccount'>) => Promise<ReturnTypeFrom<'associateAwsAccountWithPartnerAccount'>>  = async params => {
  // undefined
    return this.client.associateAwsAccountWithPartnerAccount(params as any).promise();
  }

  associateMulticastGroupWithFuotaTask: (params: RawParamsFrom<'associateMulticastGroupWithFuotaTask'>) => Promise<ReturnTypeFrom<'associateMulticastGroupWithFuotaTask'>>  = async params => {
  // undefined
    return this.client.associateMulticastGroupWithFuotaTask(params as any).promise();
  }

  associateWirelessDeviceWithFuotaTask: (params: RawParamsFrom<'associateWirelessDeviceWithFuotaTask'>) => Promise<ReturnTypeFrom<'associateWirelessDeviceWithFuotaTask'>>  = async params => {
  // undefined
    return this.client.associateWirelessDeviceWithFuotaTask(params as any).promise();
  }

  associateWirelessDeviceWithMulticastGroup: (params: RawParamsFrom<'associateWirelessDeviceWithMulticastGroup'>) => Promise<ReturnTypeFrom<'associateWirelessDeviceWithMulticastGroup'>>  = async params => {
  // undefined
    return this.client.associateWirelessDeviceWithMulticastGroup(params as any).promise();
  }

  associateWirelessDeviceWithThing: (params: RawParamsFrom<'associateWirelessDeviceWithThing'>) => Promise<ReturnTypeFrom<'associateWirelessDeviceWithThing'>>  = async params => {
  // undefined
    return this.client.associateWirelessDeviceWithThing(params as any).promise();
  }

  associateWirelessGatewayWithCertificate: (params: RawParamsFrom<'associateWirelessGatewayWithCertificate'>) => Promise<ReturnTypeFrom<'associateWirelessGatewayWithCertificate'>>  = async params => {
  // undefined
    return this.client.associateWirelessGatewayWithCertificate(params as any).promise();
  }

  associateWirelessGatewayWithThing: (params: RawParamsFrom<'associateWirelessGatewayWithThing'>) => Promise<ReturnTypeFrom<'associateWirelessGatewayWithThing'>>  = async params => {
  // undefined
    return this.client.associateWirelessGatewayWithThing(params as any).promise();
  }

  cancelMulticastGroupSession: (params: RawParamsFrom<'cancelMulticastGroupSession'>) => Promise<ReturnTypeFrom<'cancelMulticastGroupSession'>>  = async params => {
  // undefined
    return this.client.cancelMulticastGroupSession(params as any).promise();
  }

  createDestination: (params: RawParamsFrom<'createDestination'>) => Promise<ReturnTypeFrom<'createDestination'>>  = async params => {
  // undefined
    return this.client.createDestination(params as any).promise();
  }

  createDeviceProfile: (params: RawParamsFrom<'createDeviceProfile'>) => Promise<ReturnTypeFrom<'createDeviceProfile'>>  = async params => {
  // undefined
    return this.client.createDeviceProfile(params as any).promise();
  }

  createFuotaTask: (params: RawParamsFrom<'createFuotaTask'>) => Promise<ReturnTypeFrom<'createFuotaTask'>>  = async params => {
  // undefined
    return this.client.createFuotaTask(params as any).promise();
  }

  createMulticastGroup: (params: RawParamsFrom<'createMulticastGroup'>) => Promise<ReturnTypeFrom<'createMulticastGroup'>>  = async params => {
  // undefined
    return this.client.createMulticastGroup(params as any).promise();
  }

  createNetworkAnalyzerConfiguration: (params: RawParamsFrom<'createNetworkAnalyzerConfiguration'>) => Promise<ReturnTypeFrom<'createNetworkAnalyzerConfiguration'>>  = async params => {
  // undefined
    return this.client.createNetworkAnalyzerConfiguration(params as any).promise();
  }

  createServiceProfile: (params: RawParamsFrom<'createServiceProfile'>) => Promise<ReturnTypeFrom<'createServiceProfile'>>  = async params => {
  // undefined
    return this.client.createServiceProfile(params as any).promise();
  }

  createWirelessDevice: (params: RawParamsFrom<'createWirelessDevice'>) => Promise<ReturnTypeFrom<'createWirelessDevice'>>  = async params => {
  // undefined
    return this.client.createWirelessDevice(params as any).promise();
  }

  createWirelessGateway: (params: RawParamsFrom<'createWirelessGateway'>) => Promise<ReturnTypeFrom<'createWirelessGateway'>>  = async params => {
  // undefined
    return this.client.createWirelessGateway(params as any).promise();
  }

  createWirelessGatewayTask: (params: RawParamsFrom<'createWirelessGatewayTask'>) => Promise<ReturnTypeFrom<'createWirelessGatewayTask'>>  = async params => {
  // undefined
    return this.client.createWirelessGatewayTask(params as any).promise();
  }

  createWirelessGatewayTaskDefinition: (params: RawParamsFrom<'createWirelessGatewayTaskDefinition'>) => Promise<ReturnTypeFrom<'createWirelessGatewayTaskDefinition'>>  = async params => {
  // undefined
    return this.client.createWirelessGatewayTaskDefinition(params as any).promise();
  }

  deleteDestination: (params: RawParamsFrom<'deleteDestination'>) => Promise<ReturnTypeFrom<'deleteDestination'>>  = async params => {
  // undefined
    return this.client.deleteDestination(params as any).promise();
  }

  deleteDeviceProfile: (params: RawParamsFrom<'deleteDeviceProfile'>) => Promise<ReturnTypeFrom<'deleteDeviceProfile'>>  = async params => {
  // undefined
    return this.client.deleteDeviceProfile(params as any).promise();
  }

  deleteFuotaTask: (params: RawParamsFrom<'deleteFuotaTask'>) => Promise<ReturnTypeFrom<'deleteFuotaTask'>>  = async params => {
  // undefined
    return this.client.deleteFuotaTask(params as any).promise();
  }

  deleteMulticastGroup: (params: RawParamsFrom<'deleteMulticastGroup'>) => Promise<ReturnTypeFrom<'deleteMulticastGroup'>>  = async params => {
  // undefined
    return this.client.deleteMulticastGroup(params as any).promise();
  }

  deleteNetworkAnalyzerConfiguration: (params: RawParamsFrom<'deleteNetworkAnalyzerConfiguration'>) => Promise<ReturnTypeFrom<'deleteNetworkAnalyzerConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteNetworkAnalyzerConfiguration(params as any).promise();
  }

  deleteQueuedMessages: (params: RawParamsFrom<'deleteQueuedMessages'>) => Promise<ReturnTypeFrom<'deleteQueuedMessages'>>  = async params => {
  // undefined
    return this.client.deleteQueuedMessages(params as any).promise();
  }

  deleteServiceProfile: (params: RawParamsFrom<'deleteServiceProfile'>) => Promise<ReturnTypeFrom<'deleteServiceProfile'>>  = async params => {
  // undefined
    return this.client.deleteServiceProfile(params as any).promise();
  }

  deleteWirelessDevice: (params: RawParamsFrom<'deleteWirelessDevice'>) => Promise<ReturnTypeFrom<'deleteWirelessDevice'>>  = async params => {
  // undefined
    return this.client.deleteWirelessDevice(params as any).promise();
  }

  deleteWirelessGateway: (params: RawParamsFrom<'deleteWirelessGateway'>) => Promise<ReturnTypeFrom<'deleteWirelessGateway'>>  = async params => {
  // undefined
    return this.client.deleteWirelessGateway(params as any).promise();
  }

  deleteWirelessGatewayTask: (params: RawParamsFrom<'deleteWirelessGatewayTask'>) => Promise<ReturnTypeFrom<'deleteWirelessGatewayTask'>>  = async params => {
  // undefined
    return this.client.deleteWirelessGatewayTask(params as any).promise();
  }

  deleteWirelessGatewayTaskDefinition: (params: RawParamsFrom<'deleteWirelessGatewayTaskDefinition'>) => Promise<ReturnTypeFrom<'deleteWirelessGatewayTaskDefinition'>>  = async params => {
  // undefined
    return this.client.deleteWirelessGatewayTaskDefinition(params as any).promise();
  }

  disassociateAwsAccountFromPartnerAccount: (params: RawParamsFrom<'disassociateAwsAccountFromPartnerAccount'>) => Promise<ReturnTypeFrom<'disassociateAwsAccountFromPartnerAccount'>>  = async params => {
  // undefined
    return this.client.disassociateAwsAccountFromPartnerAccount(params as any).promise();
  }

  disassociateMulticastGroupFromFuotaTask: (params: RawParamsFrom<'disassociateMulticastGroupFromFuotaTask'>) => Promise<ReturnTypeFrom<'disassociateMulticastGroupFromFuotaTask'>>  = async params => {
  // undefined
    return this.client.disassociateMulticastGroupFromFuotaTask(params as any).promise();
  }

  disassociateWirelessDeviceFromFuotaTask: (params: RawParamsFrom<'disassociateWirelessDeviceFromFuotaTask'>) => Promise<ReturnTypeFrom<'disassociateWirelessDeviceFromFuotaTask'>>  = async params => {
  // undefined
    return this.client.disassociateWirelessDeviceFromFuotaTask(params as any).promise();
  }

  disassociateWirelessDeviceFromMulticastGroup: (params: RawParamsFrom<'disassociateWirelessDeviceFromMulticastGroup'>) => Promise<ReturnTypeFrom<'disassociateWirelessDeviceFromMulticastGroup'>>  = async params => {
  // undefined
    return this.client.disassociateWirelessDeviceFromMulticastGroup(params as any).promise();
  }

  disassociateWirelessDeviceFromThing: (params: RawParamsFrom<'disassociateWirelessDeviceFromThing'>) => Promise<ReturnTypeFrom<'disassociateWirelessDeviceFromThing'>>  = async params => {
  // undefined
    return this.client.disassociateWirelessDeviceFromThing(params as any).promise();
  }

  disassociateWirelessGatewayFromCertificate: (params: RawParamsFrom<'disassociateWirelessGatewayFromCertificate'>) => Promise<ReturnTypeFrom<'disassociateWirelessGatewayFromCertificate'>>  = async params => {
  // undefined
    return this.client.disassociateWirelessGatewayFromCertificate(params as any).promise();
  }

  disassociateWirelessGatewayFromThing: (params: RawParamsFrom<'disassociateWirelessGatewayFromThing'>) => Promise<ReturnTypeFrom<'disassociateWirelessGatewayFromThing'>>  = async params => {
  // undefined
    return this.client.disassociateWirelessGatewayFromThing(params as any).promise();
  }

  getDestination: (params: RawParamsFrom<'getDestination'>) => Promise<ReturnTypeFrom<'getDestination'>>  = async params => {
  // undefined
    return this.client.getDestination(params as any).promise();
  }

  getDeviceProfile: (params: RawParamsFrom<'getDeviceProfile'>) => Promise<ReturnTypeFrom<'getDeviceProfile'>>  = async params => {
  // undefined
    return this.client.getDeviceProfile(params as any).promise();
  }

  getEventConfigurationByResourceTypes: (params: RawParamsFrom<'getEventConfigurationByResourceTypes'>) => Promise<ReturnTypeFrom<'getEventConfigurationByResourceTypes'>>  = async params => {
  // undefined
    return this.client.getEventConfigurationByResourceTypes(params as any).promise();
  }

  getFuotaTask: (params: RawParamsFrom<'getFuotaTask'>) => Promise<ReturnTypeFrom<'getFuotaTask'>>  = async params => {
  // undefined
    return this.client.getFuotaTask(params as any).promise();
  }

  getLogLevelsByResourceTypes: (params: RawParamsFrom<'getLogLevelsByResourceTypes'>) => Promise<ReturnTypeFrom<'getLogLevelsByResourceTypes'>>  = async params => {
  // undefined
    return this.client.getLogLevelsByResourceTypes(params as any).promise();
  }

  getMulticastGroup: (params: RawParamsFrom<'getMulticastGroup'>) => Promise<ReturnTypeFrom<'getMulticastGroup'>>  = async params => {
  // undefined
    return this.client.getMulticastGroup(params as any).promise();
  }

  getMulticastGroupSession: (params: RawParamsFrom<'getMulticastGroupSession'>) => Promise<ReturnTypeFrom<'getMulticastGroupSession'>>  = async params => {
  // undefined
    return this.client.getMulticastGroupSession(params as any).promise();
  }

  getNetworkAnalyzerConfiguration: (params: RawParamsFrom<'getNetworkAnalyzerConfiguration'>) => Promise<ReturnTypeFrom<'getNetworkAnalyzerConfiguration'>>  = async params => {
  // undefined
    return this.client.getNetworkAnalyzerConfiguration(params as any).promise();
  }

  getPartnerAccount: (params: RawParamsFrom<'getPartnerAccount'>) => Promise<ReturnTypeFrom<'getPartnerAccount'>>  = async params => {
  // undefined
    return this.client.getPartnerAccount(params as any).promise();
  }

  getPosition: (params: RawParamsFrom<'getPosition'>) => Promise<ReturnTypeFrom<'getPosition'>>  = async params => {
  // undefined
    return this.client.getPosition(params as any).promise();
  }

  getPositionConfiguration: (params: RawParamsFrom<'getPositionConfiguration'>) => Promise<ReturnTypeFrom<'getPositionConfiguration'>>  = async params => {
  // undefined
    return this.client.getPositionConfiguration(params as any).promise();
  }

  getResourceEventConfiguration: (params: RawParamsFrom<'getResourceEventConfiguration'>) => Promise<ReturnTypeFrom<'getResourceEventConfiguration'>>  = async params => {
  // undefined
    return this.client.getResourceEventConfiguration(params as any).promise();
  }

  getResourceLogLevel: (params: RawParamsFrom<'getResourceLogLevel'>) => Promise<ReturnTypeFrom<'getResourceLogLevel'>>  = async params => {
  // undefined
    return this.client.getResourceLogLevel(params as any).promise();
  }

  getServiceEndpoint: (params: RawParamsFrom<'getServiceEndpoint'>) => Promise<ReturnTypeFrom<'getServiceEndpoint'>>  = async params => {
  // undefined
    return this.client.getServiceEndpoint(params as any).promise();
  }

  getServiceProfile: (params: RawParamsFrom<'getServiceProfile'>) => Promise<ReturnTypeFrom<'getServiceProfile'>>  = async params => {
  // undefined
    return this.client.getServiceProfile(params as any).promise();
  }

  getWirelessDevice: (params: RawParamsFrom<'getWirelessDevice'>) => Promise<ReturnTypeFrom<'getWirelessDevice'>>  = async params => {
  // undefined
    return this.client.getWirelessDevice(params as any).promise();
  }

  getWirelessDeviceStatistics: (params: RawParamsFrom<'getWirelessDeviceStatistics'>) => Promise<ReturnTypeFrom<'getWirelessDeviceStatistics'>>  = async params => {
  // undefined
    return this.client.getWirelessDeviceStatistics(params as any).promise();
  }

  getWirelessGateway: (params: RawParamsFrom<'getWirelessGateway'>) => Promise<ReturnTypeFrom<'getWirelessGateway'>>  = async params => {
  // undefined
    return this.client.getWirelessGateway(params as any).promise();
  }

  getWirelessGatewayCertificate: (params: RawParamsFrom<'getWirelessGatewayCertificate'>) => Promise<ReturnTypeFrom<'getWirelessGatewayCertificate'>>  = async params => {
  // undefined
    return this.client.getWirelessGatewayCertificate(params as any).promise();
  }

  getWirelessGatewayFirmwareInformation: (params: RawParamsFrom<'getWirelessGatewayFirmwareInformation'>) => Promise<ReturnTypeFrom<'getWirelessGatewayFirmwareInformation'>>  = async params => {
  // undefined
    return this.client.getWirelessGatewayFirmwareInformation(params as any).promise();
  }

  getWirelessGatewayStatistics: (params: RawParamsFrom<'getWirelessGatewayStatistics'>) => Promise<ReturnTypeFrom<'getWirelessGatewayStatistics'>>  = async params => {
  // undefined
    return this.client.getWirelessGatewayStatistics(params as any).promise();
  }

  getWirelessGatewayTask: (params: RawParamsFrom<'getWirelessGatewayTask'>) => Promise<ReturnTypeFrom<'getWirelessGatewayTask'>>  = async params => {
  // undefined
    return this.client.getWirelessGatewayTask(params as any).promise();
  }

  getWirelessGatewayTaskDefinition: (params: RawParamsFrom<'getWirelessGatewayTaskDefinition'>) => Promise<ReturnTypeFrom<'getWirelessGatewayTaskDefinition'>>  = async params => {
  // undefined
    return this.client.getWirelessGatewayTaskDefinition(params as any).promise();
  }

  listDestinations: (params: RawParamsFrom<'listDestinations'>) => Promise<ReturnTypeFrom<'listDestinations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDestinations(params as any).promise();
  }

  listDeviceProfiles: (params: RawParamsFrom<'listDeviceProfiles'>) => Promise<ReturnTypeFrom<'listDeviceProfiles'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDeviceProfiles(params as any).promise();
  }

  listEventConfigurations: (params: RawParamsFrom<'listEventConfigurations'>) => Promise<ReturnTypeFrom<'listEventConfigurations'>>  = async params => {
  // undefined
    return this.client.listEventConfigurations(params as any).promise();
  }

  listFuotaTasks: (params: RawParamsFrom<'listFuotaTasks'>) => Promise<ReturnTypeFrom<'listFuotaTasks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFuotaTasks(params as any).promise();
  }

  listMulticastGroups: (params: RawParamsFrom<'listMulticastGroups'>) => Promise<ReturnTypeFrom<'listMulticastGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMulticastGroups(params as any).promise();
  }

  listMulticastGroupsByFuotaTask: (params: RawParamsFrom<'listMulticastGroupsByFuotaTask'>) => Promise<ReturnTypeFrom<'listMulticastGroupsByFuotaTask'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMulticastGroupsByFuotaTask(params as any).promise();
  }

  listNetworkAnalyzerConfigurations: (params: RawParamsFrom<'listNetworkAnalyzerConfigurations'>) => Promise<ReturnTypeFrom<'listNetworkAnalyzerConfigurations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNetworkAnalyzerConfigurations(params as any).promise();
  }

  listPartnerAccounts: (params: RawParamsFrom<'listPartnerAccounts'>) => Promise<ReturnTypeFrom<'listPartnerAccounts'>>  = async params => {
  // undefined
    return this.client.listPartnerAccounts(params as any).promise();
  }

  listPositionConfigurations: (params: RawParamsFrom<'listPositionConfigurations'>) => Promise<ReturnTypeFrom<'listPositionConfigurations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPositionConfigurations(params as any).promise();
  }

  listQueuedMessages: (params: RawParamsFrom<'listQueuedMessages'>) => Promise<ReturnTypeFrom<'listQueuedMessages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQueuedMessages(params as any).promise();
  }

  listServiceProfiles: (params: RawParamsFrom<'listServiceProfiles'>) => Promise<ReturnTypeFrom<'listServiceProfiles'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listServiceProfiles(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listWirelessDevices: (params: RawParamsFrom<'listWirelessDevices'>) => Promise<ReturnTypeFrom<'listWirelessDevices'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWirelessDevices(params as any).promise();
  }

  listWirelessGatewayTaskDefinitions: (params: RawParamsFrom<'listWirelessGatewayTaskDefinitions'>) => Promise<ReturnTypeFrom<'listWirelessGatewayTaskDefinitions'>>  = async params => {
  // undefined
    return this.client.listWirelessGatewayTaskDefinitions(params as any).promise();
  }

  listWirelessGateways: (params: RawParamsFrom<'listWirelessGateways'>) => Promise<ReturnTypeFrom<'listWirelessGateways'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWirelessGateways(params as any).promise();
  }

  putPositionConfiguration: (params: RawParamsFrom<'putPositionConfiguration'>) => Promise<ReturnTypeFrom<'putPositionConfiguration'>>  = async params => {
  // undefined
    return this.client.putPositionConfiguration(params as any).promise();
  }

  putResourceLogLevel: (params: RawParamsFrom<'putResourceLogLevel'>) => Promise<ReturnTypeFrom<'putResourceLogLevel'>>  = async params => {
  // undefined
    return this.client.putResourceLogLevel(params as any).promise();
  }

  resetAllResourceLogLevels: (params: RawParamsFrom<'resetAllResourceLogLevels'>) => Promise<ReturnTypeFrom<'resetAllResourceLogLevels'>>  = async params => {
  // undefined
    return this.client.resetAllResourceLogLevels(params as any).promise();
  }

  resetResourceLogLevel: (params: RawParamsFrom<'resetResourceLogLevel'>) => Promise<ReturnTypeFrom<'resetResourceLogLevel'>>  = async params => {
  // undefined
    return this.client.resetResourceLogLevel(params as any).promise();
  }

  sendDataToMulticastGroup: (params: RawParamsFrom<'sendDataToMulticastGroup'>) => Promise<ReturnTypeFrom<'sendDataToMulticastGroup'>>  = async params => {
  // undefined
    return this.client.sendDataToMulticastGroup(params as any).promise();
  }

  sendDataToWirelessDevice: (params: RawParamsFrom<'sendDataToWirelessDevice'>) => Promise<ReturnTypeFrom<'sendDataToWirelessDevice'>>  = async params => {
  // undefined
    return this.client.sendDataToWirelessDevice(params as any).promise();
  }

  startBulkAssociateWirelessDeviceWithMulticastGroup: (params: RawParamsFrom<'startBulkAssociateWirelessDeviceWithMulticastGroup'>) => Promise<ReturnTypeFrom<'startBulkAssociateWirelessDeviceWithMulticastGroup'>>  = async params => {
  // undefined
    return this.client.startBulkAssociateWirelessDeviceWithMulticastGroup(params as any).promise();
  }

  startBulkDisassociateWirelessDeviceFromMulticastGroup: (params: RawParamsFrom<'startBulkDisassociateWirelessDeviceFromMulticastGroup'>) => Promise<ReturnTypeFrom<'startBulkDisassociateWirelessDeviceFromMulticastGroup'>>  = async params => {
  // undefined
    return this.client.startBulkDisassociateWirelessDeviceFromMulticastGroup(params as any).promise();
  }

  startFuotaTask: (params: RawParamsFrom<'startFuotaTask'>) => Promise<ReturnTypeFrom<'startFuotaTask'>>  = async params => {
  // undefined
    return this.client.startFuotaTask(params as any).promise();
  }

  startMulticastGroupSession: (params: RawParamsFrom<'startMulticastGroupSession'>) => Promise<ReturnTypeFrom<'startMulticastGroupSession'>>  = async params => {
  // undefined
    return this.client.startMulticastGroupSession(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testWirelessDevice: (params: RawParamsFrom<'testWirelessDevice'>) => Promise<ReturnTypeFrom<'testWirelessDevice'>>  = async params => {
  // undefined
    return this.client.testWirelessDevice(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDestination: (params: RawParamsFrom<'updateDestination'>) => Promise<ReturnTypeFrom<'updateDestination'>>  = async params => {
  // undefined
    return this.client.updateDestination(params as any).promise();
  }

  updateEventConfigurationByResourceTypes: (params: RawParamsFrom<'updateEventConfigurationByResourceTypes'>) => Promise<ReturnTypeFrom<'updateEventConfigurationByResourceTypes'>>  = async params => {
  // undefined
    return this.client.updateEventConfigurationByResourceTypes(params as any).promise();
  }

  updateFuotaTask: (params: RawParamsFrom<'updateFuotaTask'>) => Promise<ReturnTypeFrom<'updateFuotaTask'>>  = async params => {
  // undefined
    return this.client.updateFuotaTask(params as any).promise();
  }

  updateLogLevelsByResourceTypes: (params: RawParamsFrom<'updateLogLevelsByResourceTypes'>) => Promise<ReturnTypeFrom<'updateLogLevelsByResourceTypes'>>  = async params => {
  // undefined
    return this.client.updateLogLevelsByResourceTypes(params as any).promise();
  }

  updateMulticastGroup: (params: RawParamsFrom<'updateMulticastGroup'>) => Promise<ReturnTypeFrom<'updateMulticastGroup'>>  = async params => {
  // undefined
    return this.client.updateMulticastGroup(params as any).promise();
  }

  updateNetworkAnalyzerConfiguration: (params: RawParamsFrom<'updateNetworkAnalyzerConfiguration'>) => Promise<ReturnTypeFrom<'updateNetworkAnalyzerConfiguration'>>  = async params => {
  // undefined
    return this.client.updateNetworkAnalyzerConfiguration(params as any).promise();
  }

  updatePartnerAccount: (params: RawParamsFrom<'updatePartnerAccount'>) => Promise<ReturnTypeFrom<'updatePartnerAccount'>>  = async params => {
  // undefined
    return this.client.updatePartnerAccount(params as any).promise();
  }

  updatePosition: (params: RawParamsFrom<'updatePosition'>) => Promise<ReturnTypeFrom<'updatePosition'>>  = async params => {
  // undefined
    return this.client.updatePosition(params as any).promise();
  }

  updateResourceEventConfiguration: (params: RawParamsFrom<'updateResourceEventConfiguration'>) => Promise<ReturnTypeFrom<'updateResourceEventConfiguration'>>  = async params => {
  // undefined
    return this.client.updateResourceEventConfiguration(params as any).promise();
  }

  updateWirelessDevice: (params: RawParamsFrom<'updateWirelessDevice'>) => Promise<ReturnTypeFrom<'updateWirelessDevice'>>  = async params => {
  // undefined
    return this.client.updateWirelessDevice(params as any).promise();
  }

  updateWirelessGateway: (params: RawParamsFrom<'updateWirelessGateway'>) => Promise<ReturnTypeFrom<'updateWirelessGateway'>>  = async params => {
  // undefined
    return this.client.updateWirelessGateway(params as any).promise();
  }
  
  static fromClient(client: AWSIoTWireless): IoTWireless {
    return new IoTWireless(client) as any;
  }
  
  static client(options?: AWSIoTWireless.Types.ClientConfiguration): IoTWireless {
    return new IoTWireless(new AWSIoTWireless(options)) as any;
  }
}  
