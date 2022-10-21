import { Request, Greengrass as AWSGreengrass } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGreengrass> = AWSGreengrass[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGreengrass> = AWSGreengrass[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGreengrass[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGreengrass, Extras> = AWSGreengrass[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGreengrass> = AWSGreengrass[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Greengrass {
  private constructor(private readonly client: AWSGreengrass) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'greengrass' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = [] as const;
  
  associateRoleToGroup: (params: RawParamsFrom<'associateRoleToGroup'>) => Promise<ReturnTypeFrom<'associateRoleToGroup'>>  = async params => {
  // undefined
    return this.client.associateRoleToGroup(params as any).promise();
  }

  associateServiceRoleToAccount: (params: RawParamsFrom<'associateServiceRoleToAccount'>) => Promise<ReturnTypeFrom<'associateServiceRoleToAccount'>>  = async params => {
  // undefined
    return this.client.associateServiceRoleToAccount(params as any).promise();
  }

  createConnectorDefinition: (params: RawParamsFrom<'createConnectorDefinition'>) => Promise<ReturnTypeFrom<'createConnectorDefinition'>>  = async params => {
  // undefined
    return this.client.createConnectorDefinition(params as any).promise();
  }

  createConnectorDefinitionVersion: (params: RawParamsFrom<'createConnectorDefinitionVersion'>) => Promise<ReturnTypeFrom<'createConnectorDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.createConnectorDefinitionVersion(params as any).promise();
  }

  createCoreDefinition: (params: RawParamsFrom<'createCoreDefinition'>) => Promise<ReturnTypeFrom<'createCoreDefinition'>>  = async params => {
  // undefined
    return this.client.createCoreDefinition(params as any).promise();
  }

  createCoreDefinitionVersion: (params: RawParamsFrom<'createCoreDefinitionVersion'>) => Promise<ReturnTypeFrom<'createCoreDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.createCoreDefinitionVersion(params as any).promise();
  }

  createDeployment: (params: RawParamsFrom<'createDeployment'>) => Promise<ReturnTypeFrom<'createDeployment'>>  = async params => {
  // undefined
    return this.client.createDeployment(params as any).promise();
  }

  createDeviceDefinition: (params: RawParamsFrom<'createDeviceDefinition'>) => Promise<ReturnTypeFrom<'createDeviceDefinition'>>  = async params => {
  // undefined
    return this.client.createDeviceDefinition(params as any).promise();
  }

  createDeviceDefinitionVersion: (params: RawParamsFrom<'createDeviceDefinitionVersion'>) => Promise<ReturnTypeFrom<'createDeviceDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.createDeviceDefinitionVersion(params as any).promise();
  }

  createFunctionDefinition: (params: RawParamsFrom<'createFunctionDefinition'>) => Promise<ReturnTypeFrom<'createFunctionDefinition'>>  = async params => {
  // undefined
    return this.client.createFunctionDefinition(params as any).promise();
  }

  createFunctionDefinitionVersion: (params: RawParamsFrom<'createFunctionDefinitionVersion'>) => Promise<ReturnTypeFrom<'createFunctionDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.createFunctionDefinitionVersion(params as any).promise();
  }

  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  createGroupCertificateAuthority: (params: RawParamsFrom<'createGroupCertificateAuthority'>) => Promise<ReturnTypeFrom<'createGroupCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.createGroupCertificateAuthority(params as any).promise();
  }

  createGroupVersion: (params: RawParamsFrom<'createGroupVersion'>) => Promise<ReturnTypeFrom<'createGroupVersion'>>  = async params => {
  // undefined
    return this.client.createGroupVersion(params as any).promise();
  }

  createLoggerDefinition: (params: RawParamsFrom<'createLoggerDefinition'>) => Promise<ReturnTypeFrom<'createLoggerDefinition'>>  = async params => {
  // undefined
    return this.client.createLoggerDefinition(params as any).promise();
  }

  createLoggerDefinitionVersion: (params: RawParamsFrom<'createLoggerDefinitionVersion'>) => Promise<ReturnTypeFrom<'createLoggerDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.createLoggerDefinitionVersion(params as any).promise();
  }

  createResourceDefinition: (params: RawParamsFrom<'createResourceDefinition'>) => Promise<ReturnTypeFrom<'createResourceDefinition'>>  = async params => {
  // undefined
    return this.client.createResourceDefinition(params as any).promise();
  }

  createResourceDefinitionVersion: (params: RawParamsFrom<'createResourceDefinitionVersion'>) => Promise<ReturnTypeFrom<'createResourceDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.createResourceDefinitionVersion(params as any).promise();
  }

  createSoftwareUpdateJob: (params: RawParamsFrom<'createSoftwareUpdateJob'>) => Promise<ReturnTypeFrom<'createSoftwareUpdateJob'>>  = async params => {
  // undefined
    return this.client.createSoftwareUpdateJob(params as any).promise();
  }

  createSubscriptionDefinition: (params: RawParamsFrom<'createSubscriptionDefinition'>) => Promise<ReturnTypeFrom<'createSubscriptionDefinition'>>  = async params => {
  // undefined
    return this.client.createSubscriptionDefinition(params as any).promise();
  }

  createSubscriptionDefinitionVersion: (params: RawParamsFrom<'createSubscriptionDefinitionVersion'>) => Promise<ReturnTypeFrom<'createSubscriptionDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.createSubscriptionDefinitionVersion(params as any).promise();
  }

  deleteConnectorDefinition: (params: RawParamsFrom<'deleteConnectorDefinition'>) => Promise<ReturnTypeFrom<'deleteConnectorDefinition'>>  = async params => {
  // undefined
    return this.client.deleteConnectorDefinition(params as any).promise();
  }

  deleteCoreDefinition: (params: RawParamsFrom<'deleteCoreDefinition'>) => Promise<ReturnTypeFrom<'deleteCoreDefinition'>>  = async params => {
  // undefined
    return this.client.deleteCoreDefinition(params as any).promise();
  }

  deleteDeviceDefinition: (params: RawParamsFrom<'deleteDeviceDefinition'>) => Promise<ReturnTypeFrom<'deleteDeviceDefinition'>>  = async params => {
  // undefined
    return this.client.deleteDeviceDefinition(params as any).promise();
  }

  deleteFunctionDefinition: (params: RawParamsFrom<'deleteFunctionDefinition'>) => Promise<ReturnTypeFrom<'deleteFunctionDefinition'>>  = async params => {
  // undefined
    return this.client.deleteFunctionDefinition(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  deleteLoggerDefinition: (params: RawParamsFrom<'deleteLoggerDefinition'>) => Promise<ReturnTypeFrom<'deleteLoggerDefinition'>>  = async params => {
  // undefined
    return this.client.deleteLoggerDefinition(params as any).promise();
  }

  deleteResourceDefinition: (params: RawParamsFrom<'deleteResourceDefinition'>) => Promise<ReturnTypeFrom<'deleteResourceDefinition'>>  = async params => {
  // undefined
    return this.client.deleteResourceDefinition(params as any).promise();
  }

  deleteSubscriptionDefinition: (params: RawParamsFrom<'deleteSubscriptionDefinition'>) => Promise<ReturnTypeFrom<'deleteSubscriptionDefinition'>>  = async params => {
  // undefined
    return this.client.deleteSubscriptionDefinition(params as any).promise();
  }

  disassociateRoleFromGroup: (params: RawParamsFrom<'disassociateRoleFromGroup'>) => Promise<ReturnTypeFrom<'disassociateRoleFromGroup'>>  = async params => {
  // undefined
    return this.client.disassociateRoleFromGroup(params as any).promise();
  }

  disassociateServiceRoleFromAccount: (params: RawParamsFrom<'disassociateServiceRoleFromAccount'>) => Promise<ReturnTypeFrom<'disassociateServiceRoleFromAccount'>>  = async params => {
  // undefined
    return this.client.disassociateServiceRoleFromAccount(params as any).promise();
  }

  getAssociatedRole: (params: RawParamsFrom<'getAssociatedRole'>) => Promise<ReturnTypeFrom<'getAssociatedRole'>>  = async params => {
  // undefined
    return this.client.getAssociatedRole(params as any).promise();
  }

  getBulkDeploymentStatus: (params: RawParamsFrom<'getBulkDeploymentStatus'>) => Promise<ReturnTypeFrom<'getBulkDeploymentStatus'>>  = async params => {
  // undefined
    return this.client.getBulkDeploymentStatus(params as any).promise();
  }

  getConnectivityInfo: (params: RawParamsFrom<'getConnectivityInfo'>) => Promise<ReturnTypeFrom<'getConnectivityInfo'>>  = async params => {
  // undefined
    return this.client.getConnectivityInfo(params as any).promise();
  }

  getConnectorDefinition: (params: RawParamsFrom<'getConnectorDefinition'>) => Promise<ReturnTypeFrom<'getConnectorDefinition'>>  = async params => {
  // undefined
    return this.client.getConnectorDefinition(params as any).promise();
  }

  getConnectorDefinitionVersion: (params: RawParamsFrom<'getConnectorDefinitionVersion'>) => Promise<ReturnTypeFrom<'getConnectorDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.getConnectorDefinitionVersion(params as any).promise();
  }

  getCoreDefinition: (params: RawParamsFrom<'getCoreDefinition'>) => Promise<ReturnTypeFrom<'getCoreDefinition'>>  = async params => {
  // undefined
    return this.client.getCoreDefinition(params as any).promise();
  }

  getCoreDefinitionVersion: (params: RawParamsFrom<'getCoreDefinitionVersion'>) => Promise<ReturnTypeFrom<'getCoreDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.getCoreDefinitionVersion(params as any).promise();
  }

  getDeploymentStatus: (params: RawParamsFrom<'getDeploymentStatus'>) => Promise<ReturnTypeFrom<'getDeploymentStatus'>>  = async params => {
  // undefined
    return this.client.getDeploymentStatus(params as any).promise();
  }

  getDeviceDefinition: (params: RawParamsFrom<'getDeviceDefinition'>) => Promise<ReturnTypeFrom<'getDeviceDefinition'>>  = async params => {
  // undefined
    return this.client.getDeviceDefinition(params as any).promise();
  }

  getDeviceDefinitionVersion: (params: RawParamsFrom<'getDeviceDefinitionVersion'>) => Promise<ReturnTypeFrom<'getDeviceDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.getDeviceDefinitionVersion(params as any).promise();
  }

  getFunctionDefinition: (params: RawParamsFrom<'getFunctionDefinition'>) => Promise<ReturnTypeFrom<'getFunctionDefinition'>>  = async params => {
  // undefined
    return this.client.getFunctionDefinition(params as any).promise();
  }

  getFunctionDefinitionVersion: (params: RawParamsFrom<'getFunctionDefinitionVersion'>) => Promise<ReturnTypeFrom<'getFunctionDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.getFunctionDefinitionVersion(params as any).promise();
  }

  getGroup: (params: RawParamsFrom<'getGroup'>) => Promise<ReturnTypeFrom<'getGroup'>>  = async params => {
  // undefined
    return this.client.getGroup(params as any).promise();
  }

  getGroupCertificateAuthority: (params: RawParamsFrom<'getGroupCertificateAuthority'>) => Promise<ReturnTypeFrom<'getGroupCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.getGroupCertificateAuthority(params as any).promise();
  }

  getGroupCertificateConfiguration: (params: RawParamsFrom<'getGroupCertificateConfiguration'>) => Promise<ReturnTypeFrom<'getGroupCertificateConfiguration'>>  = async params => {
  // undefined
    return this.client.getGroupCertificateConfiguration(params as any).promise();
  }

  getGroupVersion: (params: RawParamsFrom<'getGroupVersion'>) => Promise<ReturnTypeFrom<'getGroupVersion'>>  = async params => {
  // undefined
    return this.client.getGroupVersion(params as any).promise();
  }

  getLoggerDefinition: (params: RawParamsFrom<'getLoggerDefinition'>) => Promise<ReturnTypeFrom<'getLoggerDefinition'>>  = async params => {
  // undefined
    return this.client.getLoggerDefinition(params as any).promise();
  }

  getLoggerDefinitionVersion: (params: RawParamsFrom<'getLoggerDefinitionVersion'>) => Promise<ReturnTypeFrom<'getLoggerDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.getLoggerDefinitionVersion(params as any).promise();
  }

  getResourceDefinition: (params: RawParamsFrom<'getResourceDefinition'>) => Promise<ReturnTypeFrom<'getResourceDefinition'>>  = async params => {
  // undefined
    return this.client.getResourceDefinition(params as any).promise();
  }

  getResourceDefinitionVersion: (params: RawParamsFrom<'getResourceDefinitionVersion'>) => Promise<ReturnTypeFrom<'getResourceDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.getResourceDefinitionVersion(params as any).promise();
  }

  getServiceRoleForAccount: (params: RawParamsFrom<'getServiceRoleForAccount'>) => Promise<ReturnTypeFrom<'getServiceRoleForAccount'>>  = async params => {
  // undefined
    return this.client.getServiceRoleForAccount(params as any).promise();
  }

  getSubscriptionDefinition: (params: RawParamsFrom<'getSubscriptionDefinition'>) => Promise<ReturnTypeFrom<'getSubscriptionDefinition'>>  = async params => {
  // undefined
    return this.client.getSubscriptionDefinition(params as any).promise();
  }

  getSubscriptionDefinitionVersion: (params: RawParamsFrom<'getSubscriptionDefinitionVersion'>) => Promise<ReturnTypeFrom<'getSubscriptionDefinitionVersion'>>  = async params => {
  // undefined
    return this.client.getSubscriptionDefinitionVersion(params as any).promise();
  }

  getThingRuntimeConfiguration: (params: RawParamsFrom<'getThingRuntimeConfiguration'>) => Promise<ReturnTypeFrom<'getThingRuntimeConfiguration'>>  = async params => {
  // undefined
    return this.client.getThingRuntimeConfiguration(params as any).promise();
  }

  listBulkDeploymentDetailedReports: (params: RawParamsFrom<'listBulkDeploymentDetailedReports'>) => Promise<ReturnTypeFrom<'listBulkDeploymentDetailedReports'>>  = async params => {
  // undefined
    return this.client.listBulkDeploymentDetailedReports(params as any).promise();
  }

  listBulkDeployments: (params: RawParamsFrom<'listBulkDeployments'>) => Promise<ReturnTypeFrom<'listBulkDeployments'>>  = async params => {
  // undefined
    return this.client.listBulkDeployments(params as any).promise();
  }

  listConnectorDefinitionVersions: (params: RawParamsFrom<'listConnectorDefinitionVersions'>) => Promise<ReturnTypeFrom<'listConnectorDefinitionVersions'>>  = async params => {
  // undefined
    return this.client.listConnectorDefinitionVersions(params as any).promise();
  }

  listConnectorDefinitions: (params: RawParamsFrom<'listConnectorDefinitions'>) => Promise<ReturnTypeFrom<'listConnectorDefinitions'>>  = async params => {
  // undefined
    return this.client.listConnectorDefinitions(params as any).promise();
  }

  listCoreDefinitionVersions: (params: RawParamsFrom<'listCoreDefinitionVersions'>) => Promise<ReturnTypeFrom<'listCoreDefinitionVersions'>>  = async params => {
  // undefined
    return this.client.listCoreDefinitionVersions(params as any).promise();
  }

  listCoreDefinitions: (params: RawParamsFrom<'listCoreDefinitions'>) => Promise<ReturnTypeFrom<'listCoreDefinitions'>>  = async params => {
  // undefined
    return this.client.listCoreDefinitions(params as any).promise();
  }

  listDeployments: (params: RawParamsFrom<'listDeployments'>) => Promise<ReturnTypeFrom<'listDeployments'>>  = async params => {
  // undefined
    return this.client.listDeployments(params as any).promise();
  }

  listDeviceDefinitionVersions: (params: RawParamsFrom<'listDeviceDefinitionVersions'>) => Promise<ReturnTypeFrom<'listDeviceDefinitionVersions'>>  = async params => {
  // undefined
    return this.client.listDeviceDefinitionVersions(params as any).promise();
  }

  listDeviceDefinitions: (params: RawParamsFrom<'listDeviceDefinitions'>) => Promise<ReturnTypeFrom<'listDeviceDefinitions'>>  = async params => {
  // undefined
    return this.client.listDeviceDefinitions(params as any).promise();
  }

  listFunctionDefinitionVersions: (params: RawParamsFrom<'listFunctionDefinitionVersions'>) => Promise<ReturnTypeFrom<'listFunctionDefinitionVersions'>>  = async params => {
  // undefined
    return this.client.listFunctionDefinitionVersions(params as any).promise();
  }

  listFunctionDefinitions: (params: RawParamsFrom<'listFunctionDefinitions'>) => Promise<ReturnTypeFrom<'listFunctionDefinitions'>>  = async params => {
  // undefined
    return this.client.listFunctionDefinitions(params as any).promise();
  }

  listGroupCertificateAuthorities: (params: RawParamsFrom<'listGroupCertificateAuthorities'>) => Promise<ReturnTypeFrom<'listGroupCertificateAuthorities'>>  = async params => {
  // undefined
    return this.client.listGroupCertificateAuthorities(params as any).promise();
  }

  listGroupVersions: (params: RawParamsFrom<'listGroupVersions'>) => Promise<ReturnTypeFrom<'listGroupVersions'>>  = async params => {
  // undefined
    return this.client.listGroupVersions(params as any).promise();
  }

  listGroups: (params: RawParamsFrom<'listGroups'>) => Promise<ReturnTypeFrom<'listGroups'>>  = async params => {
  // undefined
    return this.client.listGroups(params as any).promise();
  }

  listLoggerDefinitionVersions: (params: RawParamsFrom<'listLoggerDefinitionVersions'>) => Promise<ReturnTypeFrom<'listLoggerDefinitionVersions'>>  = async params => {
  // undefined
    return this.client.listLoggerDefinitionVersions(params as any).promise();
  }

  listLoggerDefinitions: (params: RawParamsFrom<'listLoggerDefinitions'>) => Promise<ReturnTypeFrom<'listLoggerDefinitions'>>  = async params => {
  // undefined
    return this.client.listLoggerDefinitions(params as any).promise();
  }

  listResourceDefinitionVersions: (params: RawParamsFrom<'listResourceDefinitionVersions'>) => Promise<ReturnTypeFrom<'listResourceDefinitionVersions'>>  = async params => {
  // undefined
    return this.client.listResourceDefinitionVersions(params as any).promise();
  }

  listResourceDefinitions: (params: RawParamsFrom<'listResourceDefinitions'>) => Promise<ReturnTypeFrom<'listResourceDefinitions'>>  = async params => {
  // undefined
    return this.client.listResourceDefinitions(params as any).promise();
  }

  listSubscriptionDefinitionVersions: (params: RawParamsFrom<'listSubscriptionDefinitionVersions'>) => Promise<ReturnTypeFrom<'listSubscriptionDefinitionVersions'>>  = async params => {
  // undefined
    return this.client.listSubscriptionDefinitionVersions(params as any).promise();
  }

  listSubscriptionDefinitions: (params: RawParamsFrom<'listSubscriptionDefinitions'>) => Promise<ReturnTypeFrom<'listSubscriptionDefinitions'>>  = async params => {
  // undefined
    return this.client.listSubscriptionDefinitions(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  resetDeployments: (params: RawParamsFrom<'resetDeployments'>) => Promise<ReturnTypeFrom<'resetDeployments'>>  = async params => {
  // undefined
    return this.client.resetDeployments(params as any).promise();
  }

  startBulkDeployment: (params: RawParamsFrom<'startBulkDeployment'>) => Promise<ReturnTypeFrom<'startBulkDeployment'>>  = async params => {
  // undefined
    return this.client.startBulkDeployment(params as any).promise();
  }

  stopBulkDeployment: (params: RawParamsFrom<'stopBulkDeployment'>) => Promise<ReturnTypeFrom<'stopBulkDeployment'>>  = async params => {
  // undefined
    return this.client.stopBulkDeployment(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateConnectivityInfo: (params: RawParamsFrom<'updateConnectivityInfo'>) => Promise<ReturnTypeFrom<'updateConnectivityInfo'>>  = async params => {
  // undefined
    return this.client.updateConnectivityInfo(params as any).promise();
  }

  updateConnectorDefinition: (params: RawParamsFrom<'updateConnectorDefinition'>) => Promise<ReturnTypeFrom<'updateConnectorDefinition'>>  = async params => {
  // undefined
    return this.client.updateConnectorDefinition(params as any).promise();
  }

  updateCoreDefinition: (params: RawParamsFrom<'updateCoreDefinition'>) => Promise<ReturnTypeFrom<'updateCoreDefinition'>>  = async params => {
  // undefined
    return this.client.updateCoreDefinition(params as any).promise();
  }

  updateDeviceDefinition: (params: RawParamsFrom<'updateDeviceDefinition'>) => Promise<ReturnTypeFrom<'updateDeviceDefinition'>>  = async params => {
  // undefined
    return this.client.updateDeviceDefinition(params as any).promise();
  }

  updateFunctionDefinition: (params: RawParamsFrom<'updateFunctionDefinition'>) => Promise<ReturnTypeFrom<'updateFunctionDefinition'>>  = async params => {
  // undefined
    return this.client.updateFunctionDefinition(params as any).promise();
  }

  updateGroup: (params: RawParamsFrom<'updateGroup'>) => Promise<ReturnTypeFrom<'updateGroup'>>  = async params => {
  // undefined
    return this.client.updateGroup(params as any).promise();
  }

  updateGroupCertificateConfiguration: (params: RawParamsFrom<'updateGroupCertificateConfiguration'>) => Promise<ReturnTypeFrom<'updateGroupCertificateConfiguration'>>  = async params => {
  // undefined
    return this.client.updateGroupCertificateConfiguration(params as any).promise();
  }

  updateLoggerDefinition: (params: RawParamsFrom<'updateLoggerDefinition'>) => Promise<ReturnTypeFrom<'updateLoggerDefinition'>>  = async params => {
  // undefined
    return this.client.updateLoggerDefinition(params as any).promise();
  }

  updateResourceDefinition: (params: RawParamsFrom<'updateResourceDefinition'>) => Promise<ReturnTypeFrom<'updateResourceDefinition'>>  = async params => {
  // undefined
    return this.client.updateResourceDefinition(params as any).promise();
  }

  updateSubscriptionDefinition: (params: RawParamsFrom<'updateSubscriptionDefinition'>) => Promise<ReturnTypeFrom<'updateSubscriptionDefinition'>>  = async params => {
  // undefined
    return this.client.updateSubscriptionDefinition(params as any).promise();
  }

  updateThingRuntimeConfiguration: (params: RawParamsFrom<'updateThingRuntimeConfiguration'>) => Promise<ReturnTypeFrom<'updateThingRuntimeConfiguration'>>  = async params => {
  // undefined
    return this.client.updateThingRuntimeConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSGreengrass): Greengrass {
    return new Greengrass(client) as any;
  }
  
  static client(options?: AWSGreengrass.Types.ClientConfiguration): Greengrass {
    return new Greengrass(new AWSGreengrass(options)) as any;
  }
}  
