import { Request, DirectoryService as AWSDirectoryService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDirectoryService> = AWSDirectoryService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDirectoryService> = AWSDirectoryService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDirectoryService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDirectoryService, Extras> = AWSDirectoryService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ds';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly [];
    
  acceptSharedDirectory: FunctionTypeFrom<'acceptSharedDirectory'>;

  addIpRoutes: FunctionTypeFrom<'addIpRoutes'>;

  addRegion: FunctionTypeFrom<'addRegion'>;

  addTagsToResource: FunctionTypeFrom<'addTagsToResource'>;

  cancelSchemaExtension: FunctionTypeFrom<'cancelSchemaExtension'>;

  connectDirectory: FunctionTypeFrom<'connectDirectory'>;

  createAlias: FunctionTypeFrom<'createAlias'>;

  createComputer: FunctionTypeFrom<'createComputer'>;

  createConditionalForwarder: FunctionTypeFrom<'createConditionalForwarder'>;

  createDirectory: FunctionTypeFrom<'createDirectory'>;

  createLogSubscription: FunctionTypeFrom<'createLogSubscription'>;

  createMicrosoftAD: FunctionTypeFrom<'createMicrosoftAD'>;

  createSnapshot: FunctionTypeFrom<'createSnapshot'>;

  createTrust: FunctionTypeFrom<'createTrust'>;

  deleteConditionalForwarder: FunctionTypeFrom<'deleteConditionalForwarder'>;

  deleteDirectory: FunctionTypeFrom<'deleteDirectory'>;

  deleteLogSubscription: FunctionTypeFrom<'deleteLogSubscription'>;

  deleteSnapshot: FunctionTypeFrom<'deleteSnapshot'>;

  deleteTrust: FunctionTypeFrom<'deleteTrust'>;

  deregisterCertificate: FunctionTypeFrom<'deregisterCertificate'>;

  deregisterEventTopic: FunctionTypeFrom<'deregisterEventTopic'>;

  describeCertificate: FunctionTypeFrom<'describeCertificate'>;

  describeClientAuthenticationSettings: FunctionTypeFrom<'describeClientAuthenticationSettings'>;

  describeConditionalForwarders: FunctionTypeFrom<'describeConditionalForwarders'>;

  describeDirectories: FunctionTypeFrom<'describeDirectories'>;

  describeDomainControllers: FunctionTypeFrom<'describeDomainControllers'>;

  describeEventTopics: FunctionTypeFrom<'describeEventTopics'>;

  describeLDAPSSettings: FunctionTypeFrom<'describeLDAPSSettings'>;

  describeRegions: FunctionTypeFrom<'describeRegions'>;

  describeSettings: FunctionTypeFrom<'describeSettings'>;

  describeSharedDirectories: FunctionTypeFrom<'describeSharedDirectories'>;

  describeSnapshots: FunctionTypeFrom<'describeSnapshots'>;

  describeTrusts: FunctionTypeFrom<'describeTrusts'>;

  disableClientAuthentication: FunctionTypeFrom<'disableClientAuthentication'>;

  disableLDAPS: FunctionTypeFrom<'disableLDAPS'>;

  disableRadius: FunctionTypeFrom<'disableRadius'>;

  disableSso: FunctionTypeFrom<'disableSso'>;

  enableClientAuthentication: FunctionTypeFrom<'enableClientAuthentication'>;

  enableLDAPS: FunctionTypeFrom<'enableLDAPS'>;

  enableRadius: FunctionTypeFrom<'enableRadius'>;

  enableSso: FunctionTypeFrom<'enableSso'>;

  getDirectoryLimits: FunctionTypeFrom<'getDirectoryLimits'>;

  getSnapshotLimits: FunctionTypeFrom<'getSnapshotLimits'>;

  listCertificates: FunctionTypeFrom<'listCertificates'>;

  listIpRoutes: FunctionTypeFrom<'listIpRoutes'>;

  listLogSubscriptions: FunctionTypeFrom<'listLogSubscriptions'>;

  listSchemaExtensions: FunctionTypeFrom<'listSchemaExtensions'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  registerCertificate: FunctionTypeFrom<'registerCertificate'>;

  registerEventTopic: FunctionTypeFrom<'registerEventTopic'>;

  rejectSharedDirectory: FunctionTypeFrom<'rejectSharedDirectory'>;

  removeIpRoutes: FunctionTypeFrom<'removeIpRoutes'>;

  removeRegion: FunctionTypeFrom<'removeRegion'>;

  removeTagsFromResource: FunctionTypeFrom<'removeTagsFromResource'>;

  resetUserPassword: FunctionTypeFrom<'resetUserPassword'>;

  restoreFromSnapshot: FunctionTypeFrom<'restoreFromSnapshot'>;

  shareDirectory: FunctionTypeFrom<'shareDirectory'>;

  startSchemaExtension: FunctionTypeFrom<'startSchemaExtension'>;

  unshareDirectory: FunctionTypeFrom<'unshareDirectory'>;

  updateConditionalForwarder: FunctionTypeFrom<'updateConditionalForwarder'>;

  updateNumberOfDomainControllers: FunctionTypeFrom<'updateNumberOfDomainControllers'>;

  updateRadius: FunctionTypeFrom<'updateRadius'>;

  updateSettings: FunctionTypeFrom<'updateSettings'>;

  updateTrust: FunctionTypeFrom<'updateTrust'>;

  verifyTrust: FunctionTypeFrom<'verifyTrust'>
}
 
export class DirectoryService implements ClientType {
  private constructor(private readonly client: AWSDirectoryService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ds';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = [] as const;
  
  async acceptSharedDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.acceptSharedDirectory(...args).promise()
  }

  async addIpRoutes(...args: any): Promise<any> {
  // undefined
    return this.client.addIpRoutes(...args).promise()
  }

  async addRegion(...args: any): Promise<any> {
  // undefined
    return this.client.addRegion(...args).promise()
  }

  async addTagsToResource(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToResource(...args).promise()
  }

  async cancelSchemaExtension(...args: any): Promise<any> {
  // undefined
    return this.client.cancelSchemaExtension(...args).promise()
  }

  async connectDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.connectDirectory(...args).promise()
  }

  async createAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createAlias(...args).promise()
  }

  async createComputer(...args: any): Promise<any> {
  // undefined
    return this.client.createComputer(...args).promise()
  }

  async createConditionalForwarder(...args: any): Promise<any> {
  // undefined
    return this.client.createConditionalForwarder(...args).promise()
  }

  async createDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.createDirectory(...args).promise()
  }

  async createLogSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createLogSubscription(...args).promise()
  }

  async createMicrosoftAD(...args: any): Promise<any> {
  // undefined
    return this.client.createMicrosoftAD(...args).promise()
  }

  async createSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshot(...args).promise()
  }

  async createTrust(...args: any): Promise<any> {
  // undefined
    return this.client.createTrust(...args).promise()
  }

  async deleteConditionalForwarder(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConditionalForwarder(...args).promise()
  }

  async deleteDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDirectory(...args).promise()
  }

  async deleteLogSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLogSubscription(...args).promise()
  }

  async deleteSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshot(...args).promise()
  }

  async deleteTrust(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrust(...args).promise()
  }

  async deregisterCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterCertificate(...args).promise()
  }

  async deregisterEventTopic(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterEventTopic(...args).promise()
  }

  async describeCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.describeCertificate(...args).promise()
  }

  async describeClientAuthenticationSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeClientAuthenticationSettings(...args).promise()
  }

  async describeConditionalForwarders(...args: any): Promise<any> {
  // undefined
    return this.client.describeConditionalForwarders(...args).promise()
  }

  async describeDirectories(...args: any): Promise<any> {
  // undefined
    return this.client.describeDirectories(...args).promise()
  }

  async describeDomainControllers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeDomainControllers(...args).promise()
  }

  async describeEventTopics(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventTopics(...args).promise()
  }

  async describeLDAPSSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeLDAPSSettings(...args).promise()
  }

  async describeRegions(...args: any): Promise<any> {
  // undefined
    return this.client.describeRegions(...args).promise()
  }

  async describeSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeSettings(...args).promise()
  }

  async describeSharedDirectories(...args: any): Promise<any> {
  // undefined
    return this.client.describeSharedDirectories(...args).promise()
  }

  async describeSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.describeSnapshots(...args).promise()
  }

  async describeTrusts(...args: any): Promise<any> {
  // undefined
    return this.client.describeTrusts(...args).promise()
  }

  async disableClientAuthentication(...args: any): Promise<any> {
  // undefined
    return this.client.disableClientAuthentication(...args).promise()
  }

  async disableLDAPS(...args: any): Promise<any> {
  // undefined
    return this.client.disableLDAPS(...args).promise()
  }

  async disableRadius(...args: any): Promise<any> {
  // undefined
    return this.client.disableRadius(...args).promise()
  }

  async disableSso(...args: any): Promise<any> {
  // undefined
    return this.client.disableSso(...args).promise()
  }

  async enableClientAuthentication(...args: any): Promise<any> {
  // undefined
    return this.client.enableClientAuthentication(...args).promise()
  }

  async enableLDAPS(...args: any): Promise<any> {
  // undefined
    return this.client.enableLDAPS(...args).promise()
  }

  async enableRadius(...args: any): Promise<any> {
  // undefined
    return this.client.enableRadius(...args).promise()
  }

  async enableSso(...args: any): Promise<any> {
  // undefined
    return this.client.enableSso(...args).promise()
  }

  async getDirectoryLimits(...args: any): Promise<any> {
  // undefined
    return this.client.getDirectoryLimits(...args).promise()
  }

  async getSnapshotLimits(...args: any): Promise<any> {
  // undefined
    return this.client.getSnapshotLimits(...args).promise()
  }

  async listCertificates(...args: any): Promise<any> {
  // undefined
    return this.client.listCertificates(...args).promise()
  }

  async listIpRoutes(...args: any): Promise<any> {
  // undefined
    return this.client.listIpRoutes(...args).promise()
  }

  async listLogSubscriptions(...args: any): Promise<any> {
  // undefined
    return this.client.listLogSubscriptions(...args).promise()
  }

  async listSchemaExtensions(...args: any): Promise<any> {
  // undefined
    return this.client.listSchemaExtensions(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async registerCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.registerCertificate(...args).promise()
  }

  async registerEventTopic(...args: any): Promise<any> {
  // undefined
    return this.client.registerEventTopic(...args).promise()
  }

  async rejectSharedDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.rejectSharedDirectory(...args).promise()
  }

  async removeIpRoutes(...args: any): Promise<any> {
  // undefined
    return this.client.removeIpRoutes(...args).promise()
  }

  async removeRegion(...args: any): Promise<any> {
  // undefined
    return this.client.removeRegion(...args).promise()
  }

  async removeTagsFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromResource(...args).promise()
  }

  async resetUserPassword(...args: any): Promise<any> {
  // undefined
    return this.client.resetUserPassword(...args).promise()
  }

  async restoreFromSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.restoreFromSnapshot(...args).promise()
  }

  async shareDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.shareDirectory(...args).promise()
  }

  async startSchemaExtension(...args: any): Promise<any> {
  // undefined
    return this.client.startSchemaExtension(...args).promise()
  }

  async unshareDirectory(...args: any): Promise<any> {
  // undefined
    return this.client.unshareDirectory(...args).promise()
  }

  async updateConditionalForwarder(...args: any): Promise<any> {
  // undefined
    return this.client.updateConditionalForwarder(...args).promise()
  }

  async updateNumberOfDomainControllers(...args: any): Promise<any> {
  // undefined
    return this.client.updateNumberOfDomainControllers(...args).promise()
  }

  async updateRadius(...args: any): Promise<any> {
  // undefined
    return this.client.updateRadius(...args).promise()
  }

  async updateSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateSettings(...args).promise()
  }

  async updateTrust(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrust(...args).promise()
  }

  async verifyTrust(...args: any): Promise<any> {
  // undefined
    return this.client.verifyTrust(...args).promise()
  }
  
  static fromClient(client: AWSDirectoryService): ClientType {
    return new DirectoryService(client) as any;
  }
  
  static client(options?: AWSDirectoryService.Types.ClientConfiguration): ClientType {
    return new DirectoryService(new AWSDirectoryService(options)) as any;
  }
}  
