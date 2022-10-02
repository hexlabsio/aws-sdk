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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'greengrass';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly [];
    
  associateRoleToGroup: FunctionTypeFrom<'associateRoleToGroup'>;

  associateServiceRoleToAccount: FunctionTypeFrom<'associateServiceRoleToAccount'>;

  createConnectorDefinition: FunctionTypeFrom<'createConnectorDefinition'>;

  createConnectorDefinitionVersion: FunctionTypeFrom<'createConnectorDefinitionVersion'>;

  createCoreDefinition: FunctionTypeFrom<'createCoreDefinition'>;

  createCoreDefinitionVersion: FunctionTypeFrom<'createCoreDefinitionVersion'>;

  createDeployment: FunctionTypeFrom<'createDeployment'>;

  createDeviceDefinition: FunctionTypeFrom<'createDeviceDefinition'>;

  createDeviceDefinitionVersion: FunctionTypeFrom<'createDeviceDefinitionVersion'>;

  createFunctionDefinition: FunctionTypeFrom<'createFunctionDefinition'>;

  createFunctionDefinitionVersion: FunctionTypeFrom<'createFunctionDefinitionVersion'>;

  createGroup: FunctionTypeFrom<'createGroup'>;

  createGroupCertificateAuthority: FunctionTypeFrom<'createGroupCertificateAuthority'>;

  createGroupVersion: FunctionTypeFrom<'createGroupVersion'>;

  createLoggerDefinition: FunctionTypeFrom<'createLoggerDefinition'>;

  createLoggerDefinitionVersion: FunctionTypeFrom<'createLoggerDefinitionVersion'>;

  createResourceDefinition: FunctionTypeFrom<'createResourceDefinition'>;

  createResourceDefinitionVersion: FunctionTypeFrom<'createResourceDefinitionVersion'>;

  createSoftwareUpdateJob: FunctionTypeFrom<'createSoftwareUpdateJob'>;

  createSubscriptionDefinition: FunctionTypeFrom<'createSubscriptionDefinition'>;

  createSubscriptionDefinitionVersion: FunctionTypeFrom<'createSubscriptionDefinitionVersion'>;

  deleteConnectorDefinition: FunctionTypeFrom<'deleteConnectorDefinition'>;

  deleteCoreDefinition: FunctionTypeFrom<'deleteCoreDefinition'>;

  deleteDeviceDefinition: FunctionTypeFrom<'deleteDeviceDefinition'>;

  deleteFunctionDefinition: FunctionTypeFrom<'deleteFunctionDefinition'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  deleteLoggerDefinition: FunctionTypeFrom<'deleteLoggerDefinition'>;

  deleteResourceDefinition: FunctionTypeFrom<'deleteResourceDefinition'>;

  deleteSubscriptionDefinition: FunctionTypeFrom<'deleteSubscriptionDefinition'>;

  disassociateRoleFromGroup: FunctionTypeFrom<'disassociateRoleFromGroup'>;

  disassociateServiceRoleFromAccount: FunctionTypeFrom<'disassociateServiceRoleFromAccount'>;

  getAssociatedRole: FunctionTypeFrom<'getAssociatedRole'>;

  getBulkDeploymentStatus: FunctionTypeFrom<'getBulkDeploymentStatus'>;

  getConnectivityInfo: FunctionTypeFrom<'getConnectivityInfo'>;

  getConnectorDefinition: FunctionTypeFrom<'getConnectorDefinition'>;

  getConnectorDefinitionVersion: FunctionTypeFrom<'getConnectorDefinitionVersion'>;

  getCoreDefinition: FunctionTypeFrom<'getCoreDefinition'>;

  getCoreDefinitionVersion: FunctionTypeFrom<'getCoreDefinitionVersion'>;

  getDeploymentStatus: FunctionTypeFrom<'getDeploymentStatus'>;

  getDeviceDefinition: FunctionTypeFrom<'getDeviceDefinition'>;

  getDeviceDefinitionVersion: FunctionTypeFrom<'getDeviceDefinitionVersion'>;

  getFunctionDefinition: FunctionTypeFrom<'getFunctionDefinition'>;

  getFunctionDefinitionVersion: FunctionTypeFrom<'getFunctionDefinitionVersion'>;

  getGroup: FunctionTypeFrom<'getGroup'>;

  getGroupCertificateAuthority: FunctionTypeFrom<'getGroupCertificateAuthority'>;

  getGroupCertificateConfiguration: FunctionTypeFrom<'getGroupCertificateConfiguration'>;

  getGroupVersion: FunctionTypeFrom<'getGroupVersion'>;

  getLoggerDefinition: FunctionTypeFrom<'getLoggerDefinition'>;

  getLoggerDefinitionVersion: FunctionTypeFrom<'getLoggerDefinitionVersion'>;

  getResourceDefinition: FunctionTypeFrom<'getResourceDefinition'>;

  getResourceDefinitionVersion: FunctionTypeFrom<'getResourceDefinitionVersion'>;

  getServiceRoleForAccount: FunctionTypeFrom<'getServiceRoleForAccount'>;

  getSubscriptionDefinition: FunctionTypeFrom<'getSubscriptionDefinition'>;

  getSubscriptionDefinitionVersion: FunctionTypeFrom<'getSubscriptionDefinitionVersion'>;

  getThingRuntimeConfiguration: FunctionTypeFrom<'getThingRuntimeConfiguration'>;

  listBulkDeploymentDetailedReports: FunctionTypeFrom<'listBulkDeploymentDetailedReports'>;

  listBulkDeployments: FunctionTypeFrom<'listBulkDeployments'>;

  listConnectorDefinitionVersions: FunctionTypeFrom<'listConnectorDefinitionVersions'>;

  listConnectorDefinitions: FunctionTypeFrom<'listConnectorDefinitions'>;

  listCoreDefinitionVersions: FunctionTypeFrom<'listCoreDefinitionVersions'>;

  listCoreDefinitions: FunctionTypeFrom<'listCoreDefinitions'>;

  listDeployments: FunctionTypeFrom<'listDeployments'>;

  listDeviceDefinitionVersions: FunctionTypeFrom<'listDeviceDefinitionVersions'>;

  listDeviceDefinitions: FunctionTypeFrom<'listDeviceDefinitions'>;

  listFunctionDefinitionVersions: FunctionTypeFrom<'listFunctionDefinitionVersions'>;

  listFunctionDefinitions: FunctionTypeFrom<'listFunctionDefinitions'>;

  listGroupCertificateAuthorities: FunctionTypeFrom<'listGroupCertificateAuthorities'>;

  listGroupVersions: FunctionTypeFrom<'listGroupVersions'>;

  listGroups: FunctionTypeFrom<'listGroups'>;

  listLoggerDefinitionVersions: FunctionTypeFrom<'listLoggerDefinitionVersions'>;

  listLoggerDefinitions: FunctionTypeFrom<'listLoggerDefinitions'>;

  listResourceDefinitionVersions: FunctionTypeFrom<'listResourceDefinitionVersions'>;

  listResourceDefinitions: FunctionTypeFrom<'listResourceDefinitions'>;

  listSubscriptionDefinitionVersions: FunctionTypeFrom<'listSubscriptionDefinitionVersions'>;

  listSubscriptionDefinitions: FunctionTypeFrom<'listSubscriptionDefinitions'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  resetDeployments: FunctionTypeFrom<'resetDeployments'>;

  startBulkDeployment: FunctionTypeFrom<'startBulkDeployment'>;

  stopBulkDeployment: FunctionTypeFrom<'stopBulkDeployment'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConnectivityInfo: FunctionTypeFrom<'updateConnectivityInfo'>;

  updateConnectorDefinition: FunctionTypeFrom<'updateConnectorDefinition'>;

  updateCoreDefinition: FunctionTypeFrom<'updateCoreDefinition'>;

  updateDeviceDefinition: FunctionTypeFrom<'updateDeviceDefinition'>;

  updateFunctionDefinition: FunctionTypeFrom<'updateFunctionDefinition'>;

  updateGroup: FunctionTypeFrom<'updateGroup'>;

  updateGroupCertificateConfiguration: FunctionTypeFrom<'updateGroupCertificateConfiguration'>;

  updateLoggerDefinition: FunctionTypeFrom<'updateLoggerDefinition'>;

  updateResourceDefinition: FunctionTypeFrom<'updateResourceDefinition'>;

  updateSubscriptionDefinition: FunctionTypeFrom<'updateSubscriptionDefinition'>;

  updateThingRuntimeConfiguration: FunctionTypeFrom<'updateThingRuntimeConfiguration'>
}
 
export class Greengrass implements ClientType {
  private constructor(private readonly client: AWSGreengrass) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'greengrass';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = [] as const;
  
  async associateRoleToGroup(...args: any): Promise<any> {
  // undefined
    return this.client.associateRoleToGroup(...args).promise()
  }

  async associateServiceRoleToAccount(...args: any): Promise<any> {
  // undefined
    return this.client.associateServiceRoleToAccount(...args).promise()
  }

  async createConnectorDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createConnectorDefinition(...args).promise()
  }

  async createConnectorDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createConnectorDefinitionVersion(...args).promise()
  }

  async createCoreDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createCoreDefinition(...args).promise()
  }

  async createCoreDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createCoreDefinitionVersion(...args).promise()
  }

  async createDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createDeployment(...args).promise()
  }

  async createDeviceDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createDeviceDefinition(...args).promise()
  }

  async createDeviceDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createDeviceDefinitionVersion(...args).promise()
  }

  async createFunctionDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createFunctionDefinition(...args).promise()
  }

  async createFunctionDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createFunctionDefinitionVersion(...args).promise()
  }

  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async createGroupCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.createGroupCertificateAuthority(...args).promise()
  }

  async createGroupVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createGroupVersion(...args).promise()
  }

  async createLoggerDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createLoggerDefinition(...args).promise()
  }

  async createLoggerDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createLoggerDefinitionVersion(...args).promise()
  }

  async createResourceDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createResourceDefinition(...args).promise()
  }

  async createResourceDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createResourceDefinitionVersion(...args).promise()
  }

  async createSoftwareUpdateJob(...args: any): Promise<any> {
  // undefined
    return this.client.createSoftwareUpdateJob(...args).promise()
  }

  async createSubscriptionDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createSubscriptionDefinition(...args).promise()
  }

  async createSubscriptionDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createSubscriptionDefinitionVersion(...args).promise()
  }

  async deleteConnectorDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnectorDefinition(...args).promise()
  }

  async deleteCoreDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCoreDefinition(...args).promise()
  }

  async deleteDeviceDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeviceDefinition(...args).promise()
  }

  async deleteFunctionDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFunctionDefinition(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async deleteLoggerDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoggerDefinition(...args).promise()
  }

  async deleteResourceDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourceDefinition(...args).promise()
  }

  async deleteSubscriptionDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSubscriptionDefinition(...args).promise()
  }

  async disassociateRoleFromGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateRoleFromGroup(...args).promise()
  }

  async disassociateServiceRoleFromAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateServiceRoleFromAccount(...args).promise()
  }

  async getAssociatedRole(...args: any): Promise<any> {
  // undefined
    return this.client.getAssociatedRole(...args).promise()
  }

  async getBulkDeploymentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getBulkDeploymentStatus(...args).promise()
  }

  async getConnectivityInfo(...args: any): Promise<any> {
  // undefined
    return this.client.getConnectivityInfo(...args).promise()
  }

  async getConnectorDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getConnectorDefinition(...args).promise()
  }

  async getConnectorDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getConnectorDefinitionVersion(...args).promise()
  }

  async getCoreDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getCoreDefinition(...args).promise()
  }

  async getCoreDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getCoreDefinitionVersion(...args).promise()
  }

  async getDeploymentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getDeploymentStatus(...args).promise()
  }

  async getDeviceDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getDeviceDefinition(...args).promise()
  }

  async getDeviceDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getDeviceDefinitionVersion(...args).promise()
  }

  async getFunctionDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getFunctionDefinition(...args).promise()
  }

  async getFunctionDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getFunctionDefinitionVersion(...args).promise()
  }

  async getGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getGroup(...args).promise()
  }

  async getGroupCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.getGroupCertificateAuthority(...args).promise()
  }

  async getGroupCertificateConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getGroupCertificateConfiguration(...args).promise()
  }

  async getGroupVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getGroupVersion(...args).promise()
  }

  async getLoggerDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getLoggerDefinition(...args).promise()
  }

  async getLoggerDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getLoggerDefinitionVersion(...args).promise()
  }

  async getResourceDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getResourceDefinition(...args).promise()
  }

  async getResourceDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getResourceDefinitionVersion(...args).promise()
  }

  async getServiceRoleForAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceRoleForAccount(...args).promise()
  }

  async getSubscriptionDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getSubscriptionDefinition(...args).promise()
  }

  async getSubscriptionDefinitionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getSubscriptionDefinitionVersion(...args).promise()
  }

  async getThingRuntimeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getThingRuntimeConfiguration(...args).promise()
  }

  async listBulkDeploymentDetailedReports(...args: any): Promise<any> {
  // undefined
    return this.client.listBulkDeploymentDetailedReports(...args).promise()
  }

  async listBulkDeployments(...args: any): Promise<any> {
  // undefined
    return this.client.listBulkDeployments(...args).promise()
  }

  async listConnectorDefinitionVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listConnectorDefinitionVersions(...args).promise()
  }

  async listConnectorDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.listConnectorDefinitions(...args).promise()
  }

  async listCoreDefinitionVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listCoreDefinitionVersions(...args).promise()
  }

  async listCoreDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.listCoreDefinitions(...args).promise()
  }

  async listDeployments(...args: any): Promise<any> {
  // undefined
    return this.client.listDeployments(...args).promise()
  }

  async listDeviceDefinitionVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listDeviceDefinitionVersions(...args).promise()
  }

  async listDeviceDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.listDeviceDefinitions(...args).promise()
  }

  async listFunctionDefinitionVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listFunctionDefinitionVersions(...args).promise()
  }

  async listFunctionDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.listFunctionDefinitions(...args).promise()
  }

  async listGroupCertificateAuthorities(...args: any): Promise<any> {
  // undefined
    return this.client.listGroupCertificateAuthorities(...args).promise()
  }

  async listGroupVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listGroupVersions(...args).promise()
  }

  async listGroups(...args: any): Promise<any> {
  // undefined
    return this.client.listGroups(...args).promise()
  }

  async listLoggerDefinitionVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listLoggerDefinitionVersions(...args).promise()
  }

  async listLoggerDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.listLoggerDefinitions(...args).promise()
  }

  async listResourceDefinitionVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listResourceDefinitionVersions(...args).promise()
  }

  async listResourceDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.listResourceDefinitions(...args).promise()
  }

  async listSubscriptionDefinitionVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listSubscriptionDefinitionVersions(...args).promise()
  }

  async listSubscriptionDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.listSubscriptionDefinitions(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async resetDeployments(...args: any): Promise<any> {
  // undefined
    return this.client.resetDeployments(...args).promise()
  }

  async startBulkDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.startBulkDeployment(...args).promise()
  }

  async stopBulkDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.stopBulkDeployment(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateConnectivityInfo(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnectivityInfo(...args).promise()
  }

  async updateConnectorDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnectorDefinition(...args).promise()
  }

  async updateCoreDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateCoreDefinition(...args).promise()
  }

  async updateDeviceDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeviceDefinition(...args).promise()
  }

  async updateFunctionDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateFunctionDefinition(...args).promise()
  }

  async updateGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroup(...args).promise()
  }

  async updateGroupCertificateConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroupCertificateConfiguration(...args).promise()
  }

  async updateLoggerDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateLoggerDefinition(...args).promise()
  }

  async updateResourceDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateResourceDefinition(...args).promise()
  }

  async updateSubscriptionDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateSubscriptionDefinition(...args).promise()
  }

  async updateThingRuntimeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateThingRuntimeConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSGreengrass): ClientType {
    return new Greengrass(client) as any;
  }
  
  static client(options?: AWSGreengrass.Types.ClientConfiguration): ClientType {
    return new Greengrass(new AWSGreengrass(options)) as any;
  }
}  
