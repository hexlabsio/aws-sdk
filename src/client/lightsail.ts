import { Request, Lightsail as AWSLightsail } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLightsail> = AWSLightsail[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLightsail> = AWSLightsail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLightsail[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLightsail, Extras> = AWSLightsail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'lightsail';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly [];
    
  allocateStaticIp: FunctionTypeFrom<'allocateStaticIp'>;

  attachCertificateToDistribution: FunctionTypeFrom<'attachCertificateToDistribution'>;

  attachDisk: FunctionTypeFrom<'attachDisk'>;

  attachInstancesToLoadBalancer: FunctionTypeFrom<'attachInstancesToLoadBalancer'>;

  attachLoadBalancerTlsCertificate: FunctionTypeFrom<'attachLoadBalancerTlsCertificate'>;

  attachStaticIp: FunctionTypeFrom<'attachStaticIp'>;

  closeInstancePublicPorts: FunctionTypeFrom<'closeInstancePublicPorts'>;

  copySnapshot: FunctionTypeFrom<'copySnapshot'>;

  createBucket: FunctionTypeFrom<'createBucket'>;

  createBucketAccessKey: FunctionTypeFrom<'createBucketAccessKey'>;

  createCertificate: FunctionTypeFrom<'createCertificate'>;

  createCloudFormationStack: FunctionTypeFrom<'createCloudFormationStack'>;

  createContactMethod: FunctionTypeFrom<'createContactMethod'>;

  createContainerService: FunctionTypeFrom<'createContainerService'>;

  createContainerServiceDeployment: FunctionTypeFrom<'createContainerServiceDeployment'>;

  createContainerServiceRegistryLogin: FunctionTypeFrom<'createContainerServiceRegistryLogin'>;

  createDisk: FunctionTypeFrom<'createDisk'>;

  createDiskFromSnapshot: FunctionTypeFrom<'createDiskFromSnapshot'>;

  createDiskSnapshot: FunctionTypeFrom<'createDiskSnapshot'>;

  createDistribution: FunctionTypeFrom<'createDistribution'>;

  createDomain: FunctionTypeFrom<'createDomain'>;

  createDomainEntry: FunctionTypeFrom<'createDomainEntry'>;

  createInstanceSnapshot: FunctionTypeFrom<'createInstanceSnapshot'>;

  createInstances: FunctionTypeFrom<'createInstances'>;

  createInstancesFromSnapshot: FunctionTypeFrom<'createInstancesFromSnapshot'>;

  createKeyPair: FunctionTypeFrom<'createKeyPair'>;

  createLoadBalancer: FunctionTypeFrom<'createLoadBalancer'>;

  createLoadBalancerTlsCertificate: FunctionTypeFrom<'createLoadBalancerTlsCertificate'>;

  createRelationalDatabase: FunctionTypeFrom<'createRelationalDatabase'>;

  createRelationalDatabaseFromSnapshot: FunctionTypeFrom<'createRelationalDatabaseFromSnapshot'>;

  createRelationalDatabaseSnapshot: FunctionTypeFrom<'createRelationalDatabaseSnapshot'>;

  deleteAlarm: FunctionTypeFrom<'deleteAlarm'>;

  deleteAutoSnapshot: FunctionTypeFrom<'deleteAutoSnapshot'>;

  deleteBucket: FunctionTypeFrom<'deleteBucket'>;

  deleteBucketAccessKey: FunctionTypeFrom<'deleteBucketAccessKey'>;

  deleteCertificate: FunctionTypeFrom<'deleteCertificate'>;

  deleteContactMethod: FunctionTypeFrom<'deleteContactMethod'>;

  deleteContainerImage: FunctionTypeFrom<'deleteContainerImage'>;

  deleteContainerService: FunctionTypeFrom<'deleteContainerService'>;

  deleteDisk: FunctionTypeFrom<'deleteDisk'>;

  deleteDiskSnapshot: FunctionTypeFrom<'deleteDiskSnapshot'>;

  deleteDistribution: FunctionTypeFrom<'deleteDistribution'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  deleteDomainEntry: FunctionTypeFrom<'deleteDomainEntry'>;

  deleteInstance: FunctionTypeFrom<'deleteInstance'>;

  deleteInstanceSnapshot: FunctionTypeFrom<'deleteInstanceSnapshot'>;

  deleteKeyPair: FunctionTypeFrom<'deleteKeyPair'>;

  deleteKnownHostKeys: FunctionTypeFrom<'deleteKnownHostKeys'>;

  deleteLoadBalancer: FunctionTypeFrom<'deleteLoadBalancer'>;

  deleteLoadBalancerTlsCertificate: FunctionTypeFrom<'deleteLoadBalancerTlsCertificate'>;

  deleteRelationalDatabase: FunctionTypeFrom<'deleteRelationalDatabase'>;

  deleteRelationalDatabaseSnapshot: FunctionTypeFrom<'deleteRelationalDatabaseSnapshot'>;

  detachCertificateFromDistribution: FunctionTypeFrom<'detachCertificateFromDistribution'>;

  detachDisk: FunctionTypeFrom<'detachDisk'>;

  detachInstancesFromLoadBalancer: FunctionTypeFrom<'detachInstancesFromLoadBalancer'>;

  detachStaticIp: FunctionTypeFrom<'detachStaticIp'>;

  disableAddOn: FunctionTypeFrom<'disableAddOn'>;

  downloadDefaultKeyPair: FunctionTypeFrom<'downloadDefaultKeyPair'>;

  enableAddOn: FunctionTypeFrom<'enableAddOn'>;

  exportSnapshot: FunctionTypeFrom<'exportSnapshot'>;

  getActiveNames: FunctionTypeFrom<'getActiveNames'>;

  getAlarms: FunctionTypeFrom<'getAlarms'>;

  getAutoSnapshots: FunctionTypeFrom<'getAutoSnapshots'>;

  getBlueprints: FunctionTypeFrom<'getBlueprints'>;

  getBucketAccessKeys: FunctionTypeFrom<'getBucketAccessKeys'>;

  getBucketBundles: FunctionTypeFrom<'getBucketBundles'>;

  getBucketMetricData: FunctionTypeFrom<'getBucketMetricData'>;

  getBuckets: FunctionTypeFrom<'getBuckets'>;

  getBundles: FunctionTypeFrom<'getBundles'>;

  getCertificates: FunctionTypeFrom<'getCertificates'>;

  getCloudFormationStackRecords: FunctionTypeFrom<'getCloudFormationStackRecords'>;

  getContactMethods: FunctionTypeFrom<'getContactMethods'>;

  getContainerAPIMetadata: FunctionTypeFrom<'getContainerAPIMetadata'>;

  getContainerImages: FunctionTypeFrom<'getContainerImages'>;

  getContainerLog: FunctionTypeFrom<'getContainerLog'>;

  getContainerServiceDeployments: FunctionTypeFrom<'getContainerServiceDeployments'>;

  getContainerServiceMetricData: FunctionTypeFrom<'getContainerServiceMetricData'>;

  getContainerServicePowers: FunctionTypeFrom<'getContainerServicePowers'>;

  getContainerServices: FunctionTypeFrom<'getContainerServices'>;

  getDisk: FunctionTypeFrom<'getDisk'>;

  getDiskSnapshot: FunctionTypeFrom<'getDiskSnapshot'>;

  getDiskSnapshots: FunctionTypeFrom<'getDiskSnapshots'>;

  getDisks: FunctionTypeFrom<'getDisks'>;

  getDistributionBundles: FunctionTypeFrom<'getDistributionBundles'>;

  getDistributionLatestCacheReset: FunctionTypeFrom<'getDistributionLatestCacheReset'>;

  getDistributionMetricData: FunctionTypeFrom<'getDistributionMetricData'>;

  getDistributions: FunctionTypeFrom<'getDistributions'>;

  getDomain: FunctionTypeFrom<'getDomain'>;

  getDomains: FunctionTypeFrom<'getDomains'>;

  getExportSnapshotRecords: FunctionTypeFrom<'getExportSnapshotRecords'>;

  getInstance: FunctionTypeFrom<'getInstance'>;

  getInstanceAccessDetails: FunctionTypeFrom<'getInstanceAccessDetails'>;

  getInstanceMetricData: FunctionTypeFrom<'getInstanceMetricData'>;

  getInstancePortStates: FunctionTypeFrom<'getInstancePortStates'>;

  getInstanceSnapshot: FunctionTypeFrom<'getInstanceSnapshot'>;

  getInstanceSnapshots: FunctionTypeFrom<'getInstanceSnapshots'>;

  getInstanceState: FunctionTypeFrom<'getInstanceState'>;

  getInstances: FunctionTypeFrom<'getInstances'>;

  getKeyPair: FunctionTypeFrom<'getKeyPair'>;

  getKeyPairs: FunctionTypeFrom<'getKeyPairs'>;

  getLoadBalancer: FunctionTypeFrom<'getLoadBalancer'>;

  getLoadBalancerMetricData: FunctionTypeFrom<'getLoadBalancerMetricData'>;

  getLoadBalancerTlsCertificates: FunctionTypeFrom<'getLoadBalancerTlsCertificates'>;

  getLoadBalancerTlsPolicies: FunctionTypeFrom<'getLoadBalancerTlsPolicies'>;

  getLoadBalancers: FunctionTypeFrom<'getLoadBalancers'>;

  getOperation: FunctionTypeFrom<'getOperation'>;

  getOperations: FunctionTypeFrom<'getOperations'>;

  getOperationsForResource: FunctionTypeFrom<'getOperationsForResource'>;

  getRegions: FunctionTypeFrom<'getRegions'>;

  getRelationalDatabase: FunctionTypeFrom<'getRelationalDatabase'>;

  getRelationalDatabaseBlueprints: FunctionTypeFrom<'getRelationalDatabaseBlueprints'>;

  getRelationalDatabaseBundles: FunctionTypeFrom<'getRelationalDatabaseBundles'>;

  getRelationalDatabaseEvents: FunctionTypeFrom<'getRelationalDatabaseEvents'>;

  getRelationalDatabaseLogEvents: FunctionTypeFrom<'getRelationalDatabaseLogEvents'>;

  getRelationalDatabaseLogStreams: FunctionTypeFrom<'getRelationalDatabaseLogStreams'>;

  getRelationalDatabaseMasterUserPassword: FunctionTypeFrom<'getRelationalDatabaseMasterUserPassword'>;

  getRelationalDatabaseMetricData: FunctionTypeFrom<'getRelationalDatabaseMetricData'>;

  getRelationalDatabaseParameters: FunctionTypeFrom<'getRelationalDatabaseParameters'>;

  getRelationalDatabaseSnapshot: FunctionTypeFrom<'getRelationalDatabaseSnapshot'>;

  getRelationalDatabaseSnapshots: FunctionTypeFrom<'getRelationalDatabaseSnapshots'>;

  getRelationalDatabases: FunctionTypeFrom<'getRelationalDatabases'>;

  getStaticIp: FunctionTypeFrom<'getStaticIp'>;

  getStaticIps: FunctionTypeFrom<'getStaticIps'>;

  importKeyPair: FunctionTypeFrom<'importKeyPair'>;

  isVpcPeered: FunctionTypeFrom<'isVpcPeered'>;

  openInstancePublicPorts: FunctionTypeFrom<'openInstancePublicPorts'>;

  peerVpc: FunctionTypeFrom<'peerVpc'>;

  putAlarm: FunctionTypeFrom<'putAlarm'>;

  putInstancePublicPorts: FunctionTypeFrom<'putInstancePublicPorts'>;

  rebootInstance: FunctionTypeFrom<'rebootInstance'>;

  rebootRelationalDatabase: FunctionTypeFrom<'rebootRelationalDatabase'>;

  registerContainerImage: FunctionTypeFrom<'registerContainerImage'>;

  releaseStaticIp: FunctionTypeFrom<'releaseStaticIp'>;

  resetDistributionCache: FunctionTypeFrom<'resetDistributionCache'>;

  sendContactMethodVerification: FunctionTypeFrom<'sendContactMethodVerification'>;

  setIpAddressType: FunctionTypeFrom<'setIpAddressType'>;

  setResourceAccessForBucket: FunctionTypeFrom<'setResourceAccessForBucket'>;

  startInstance: FunctionTypeFrom<'startInstance'>;

  startRelationalDatabase: FunctionTypeFrom<'startRelationalDatabase'>;

  stopInstance: FunctionTypeFrom<'stopInstance'>;

  stopRelationalDatabase: FunctionTypeFrom<'stopRelationalDatabase'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testAlarm: FunctionTypeFrom<'testAlarm'>;

  unpeerVpc: FunctionTypeFrom<'unpeerVpc'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateBucket: FunctionTypeFrom<'updateBucket'>;

  updateBucketBundle: FunctionTypeFrom<'updateBucketBundle'>;

  updateContainerService: FunctionTypeFrom<'updateContainerService'>;

  updateDistribution: FunctionTypeFrom<'updateDistribution'>;

  updateDistributionBundle: FunctionTypeFrom<'updateDistributionBundle'>;

  updateDomainEntry: FunctionTypeFrom<'updateDomainEntry'>;

  updateInstanceMetadataOptions: FunctionTypeFrom<'updateInstanceMetadataOptions'>;

  updateLoadBalancerAttribute: FunctionTypeFrom<'updateLoadBalancerAttribute'>;

  updateRelationalDatabase: FunctionTypeFrom<'updateRelationalDatabase'>;

  updateRelationalDatabaseParameters: FunctionTypeFrom<'updateRelationalDatabaseParameters'>
}
 
export class Lightsail implements ClientType {
  private constructor(private readonly client: AWSLightsail) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lightsail';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = [] as const;
  
  async allocateStaticIp(...args: any): Promise<any> {
  // undefined
    return this.client.allocateStaticIp(...args).promise()
  }

  async attachCertificateToDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.attachCertificateToDistribution(...args).promise()
  }

  async attachDisk(...args: any): Promise<any> {
  // undefined
    return this.client.attachDisk(...args).promise()
  }

  async attachInstancesToLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.attachInstancesToLoadBalancer(...args).promise()
  }

  async attachLoadBalancerTlsCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.attachLoadBalancerTlsCertificate(...args).promise()
  }

  async attachStaticIp(...args: any): Promise<any> {
  // undefined
    return this.client.attachStaticIp(...args).promise()
  }

  async closeInstancePublicPorts(...args: any): Promise<any> {
  // undefined
    return this.client.closeInstancePublicPorts(...args).promise()
  }

  async copySnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.copySnapshot(...args).promise()
  }

  async createBucket(...args: any): Promise<any> {
  // undefined
    return this.client.createBucket(...args).promise()
  }

  async createBucketAccessKey(...args: any): Promise<any> {
  // undefined
    return this.client.createBucketAccessKey(...args).promise()
  }

  async createCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.createCertificate(...args).promise()
  }

  async createCloudFormationStack(...args: any): Promise<any> {
  // undefined
    return this.client.createCloudFormationStack(...args).promise()
  }

  async createContactMethod(...args: any): Promise<any> {
  // undefined
    return this.client.createContactMethod(...args).promise()
  }

  async createContainerService(...args: any): Promise<any> {
  // undefined
    return this.client.createContainerService(...args).promise()
  }

  async createContainerServiceDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createContainerServiceDeployment(...args).promise()
  }

  async createContainerServiceRegistryLogin(...args: any): Promise<any> {
  // undefined
    return this.client.createContainerServiceRegistryLogin(...args).promise()
  }

  async createDisk(...args: any): Promise<any> {
  // undefined
    return this.client.createDisk(...args).promise()
  }

  async createDiskFromSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createDiskFromSnapshot(...args).promise()
  }

  async createDiskSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createDiskSnapshot(...args).promise()
  }

  async createDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.createDistribution(...args).promise()
  }

  async createDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createDomain(...args).promise()
  }

  async createDomainEntry(...args: any): Promise<any> {
  // undefined
    return this.client.createDomainEntry(...args).promise()
  }

  async createInstanceSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createInstanceSnapshot(...args).promise()
  }

  async createInstances(...args: any): Promise<any> {
  // undefined
    return this.client.createInstances(...args).promise()
  }

  async createInstancesFromSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createInstancesFromSnapshot(...args).promise()
  }

  async createKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.createKeyPair(...args).promise()
  }

  async createLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.createLoadBalancer(...args).promise()
  }

  async createLoadBalancerTlsCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.createLoadBalancerTlsCertificate(...args).promise()
  }

  async createRelationalDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.createRelationalDatabase(...args).promise()
  }

  async createRelationalDatabaseFromSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createRelationalDatabaseFromSnapshot(...args).promise()
  }

  async createRelationalDatabaseSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createRelationalDatabaseSnapshot(...args).promise()
  }

  async deleteAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlarm(...args).promise()
  }

  async deleteAutoSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAutoSnapshot(...args).promise()
  }

  async deleteBucket(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucket(...args).promise()
  }

  async deleteBucketAccessKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketAccessKey(...args).promise()
  }

  async deleteCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCertificate(...args).promise()
  }

  async deleteContactMethod(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContactMethod(...args).promise()
  }

  async deleteContainerImage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContainerImage(...args).promise()
  }

  async deleteContainerService(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContainerService(...args).promise()
  }

  async deleteDisk(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDisk(...args).promise()
  }

  async deleteDiskSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDiskSnapshot(...args).promise()
  }

  async deleteDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDistribution(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async deleteDomainEntry(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomainEntry(...args).promise()
  }

  async deleteInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstance(...args).promise()
  }

  async deleteInstanceSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstanceSnapshot(...args).promise()
  }

  async deleteKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.deleteKeyPair(...args).promise()
  }

  async deleteKnownHostKeys(...args: any): Promise<any> {
  // undefined
    return this.client.deleteKnownHostKeys(...args).promise()
  }

  async deleteLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoadBalancer(...args).promise()
  }

  async deleteLoadBalancerTlsCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoadBalancerTlsCertificate(...args).promise()
  }

  async deleteRelationalDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRelationalDatabase(...args).promise()
  }

  async deleteRelationalDatabaseSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRelationalDatabaseSnapshot(...args).promise()
  }

  async detachCertificateFromDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.detachCertificateFromDistribution(...args).promise()
  }

  async detachDisk(...args: any): Promise<any> {
  // undefined
    return this.client.detachDisk(...args).promise()
  }

  async detachInstancesFromLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.detachInstancesFromLoadBalancer(...args).promise()
  }

  async detachStaticIp(...args: any): Promise<any> {
  // undefined
    return this.client.detachStaticIp(...args).promise()
  }

  async disableAddOn(...args: any): Promise<any> {
  // undefined
    return this.client.disableAddOn(...args).promise()
  }

  async downloadDefaultKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.downloadDefaultKeyPair(...args).promise()
  }

  async enableAddOn(...args: any): Promise<any> {
  // undefined
    return this.client.enableAddOn(...args).promise()
  }

  async exportSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.exportSnapshot(...args).promise()
  }

  async getActiveNames(...args: any): Promise<any> {
  // undefined
    return this.client.getActiveNames(...args).promise()
  }

  async getAlarms(...args: any): Promise<any> {
  // undefined
    return this.client.getAlarms(...args).promise()
  }

  async getAutoSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.getAutoSnapshots(...args).promise()
  }

  async getBlueprints(...args: any): Promise<any> {
  // undefined
    return this.client.getBlueprints(...args).promise()
  }

  async getBucketAccessKeys(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketAccessKeys(...args).promise()
  }

  async getBucketBundles(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketBundles(...args).promise()
  }

  async getBucketMetricData(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketMetricData(...args).promise()
  }

  async getBuckets(...args: any): Promise<any> {
  // undefined
    return this.client.getBuckets(...args).promise()
  }

  async getBundles(...args: any): Promise<any> {
  // undefined
    return this.client.getBundles(...args).promise()
  }

  async getCertificates(...args: any): Promise<any> {
  // undefined
    return this.client.getCertificates(...args).promise()
  }

  async getCloudFormationStackRecords(...args: any): Promise<any> {
  // undefined
    return this.client.getCloudFormationStackRecords(...args).promise()
  }

  async getContactMethods(...args: any): Promise<any> {
  // undefined
    return this.client.getContactMethods(...args).promise()
  }

  async getContainerAPIMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerAPIMetadata(...args).promise()
  }

  async getContainerImages(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerImages(...args).promise()
  }

  async getContainerLog(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerLog(...args).promise()
  }

  async getContainerServiceDeployments(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerServiceDeployments(...args).promise()
  }

  async getContainerServiceMetricData(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerServiceMetricData(...args).promise()
  }

  async getContainerServicePowers(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerServicePowers(...args).promise()
  }

  async getContainerServices(...args: any): Promise<any> {
  // undefined
    return this.client.getContainerServices(...args).promise()
  }

  async getDisk(...args: any): Promise<any> {
  // undefined
    return this.client.getDisk(...args).promise()
  }

  async getDiskSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.getDiskSnapshot(...args).promise()
  }

  async getDiskSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.getDiskSnapshots(...args).promise()
  }

  async getDisks(...args: any): Promise<any> {
  // undefined
    return this.client.getDisks(...args).promise()
  }

  async getDistributionBundles(...args: any): Promise<any> {
  // undefined
    return this.client.getDistributionBundles(...args).promise()
  }

  async getDistributionLatestCacheReset(...args: any): Promise<any> {
  // undefined
    return this.client.getDistributionLatestCacheReset(...args).promise()
  }

  async getDistributionMetricData(...args: any): Promise<any> {
  // undefined
    return this.client.getDistributionMetricData(...args).promise()
  }

  async getDistributions(...args: any): Promise<any> {
  // undefined
    return this.client.getDistributions(...args).promise()
  }

  async getDomain(...args: any): Promise<any> {
  // undefined
    return this.client.getDomain(...args).promise()
  }

  async getDomains(...args: any): Promise<any> {
  // undefined
    return this.client.getDomains(...args).promise()
  }

  async getExportSnapshotRecords(...args: any): Promise<any> {
  // undefined
    return this.client.getExportSnapshotRecords(...args).promise()
  }

  async getInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getInstance(...args).promise()
  }

  async getInstanceAccessDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceAccessDetails(...args).promise()
  }

  async getInstanceMetricData(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceMetricData(...args).promise()
  }

  async getInstancePortStates(...args: any): Promise<any> {
  // undefined
    return this.client.getInstancePortStates(...args).promise()
  }

  async getInstanceSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceSnapshot(...args).promise()
  }

  async getInstanceSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceSnapshots(...args).promise()
  }

  async getInstanceState(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceState(...args).promise()
  }

  async getInstances(...args: any): Promise<any> {
  // undefined
    return this.client.getInstances(...args).promise()
  }

  async getKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.getKeyPair(...args).promise()
  }

  async getKeyPairs(...args: any): Promise<any> {
  // undefined
    return this.client.getKeyPairs(...args).promise()
  }

  async getLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.getLoadBalancer(...args).promise()
  }

  async getLoadBalancerMetricData(...args: any): Promise<any> {
  // undefined
    return this.client.getLoadBalancerMetricData(...args).promise()
  }

  async getLoadBalancerTlsCertificates(...args: any): Promise<any> {
  // undefined
    return this.client.getLoadBalancerTlsCertificates(...args).promise()
  }

  async getLoadBalancerTlsPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.getLoadBalancerTlsPolicies(...args).promise()
  }

  async getLoadBalancers(...args: any): Promise<any> {
  // undefined
    return this.client.getLoadBalancers(...args).promise()
  }

  async getOperation(...args: any): Promise<any> {
  // undefined
    return this.client.getOperation(...args).promise()
  }

  async getOperations(...args: any): Promise<any> {
  // undefined
    return this.client.getOperations(...args).promise()
  }

  async getOperationsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.getOperationsForResource(...args).promise()
  }

  async getRegions(...args: any): Promise<any> {
  // undefined
    return this.client.getRegions(...args).promise()
  }

  async getRelationalDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabase(...args).promise()
  }

  async getRelationalDatabaseBlueprints(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseBlueprints(...args).promise()
  }

  async getRelationalDatabaseBundles(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseBundles(...args).promise()
  }

  async getRelationalDatabaseEvents(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseEvents(...args).promise()
  }

  async getRelationalDatabaseLogEvents(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseLogEvents(...args).promise()
  }

  async getRelationalDatabaseLogStreams(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseLogStreams(...args).promise()
  }

  async getRelationalDatabaseMasterUserPassword(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseMasterUserPassword(...args).promise()
  }

  async getRelationalDatabaseMetricData(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseMetricData(...args).promise()
  }

  async getRelationalDatabaseParameters(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseParameters(...args).promise()
  }

  async getRelationalDatabaseSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseSnapshot(...args).promise()
  }

  async getRelationalDatabaseSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabaseSnapshots(...args).promise()
  }

  async getRelationalDatabases(...args: any): Promise<any> {
  // undefined
    return this.client.getRelationalDatabases(...args).promise()
  }

  async getStaticIp(...args: any): Promise<any> {
  // undefined
    return this.client.getStaticIp(...args).promise()
  }

  async getStaticIps(...args: any): Promise<any> {
  // undefined
    return this.client.getStaticIps(...args).promise()
  }

  async importKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.importKeyPair(...args).promise()
  }

  async isVpcPeered(...args: any): Promise<any> {
  // undefined
    return this.client.isVpcPeered(...args).promise()
  }

  async openInstancePublicPorts(...args: any): Promise<any> {
  // undefined
    return this.client.openInstancePublicPorts(...args).promise()
  }

  async peerVpc(...args: any): Promise<any> {
  // undefined
    return this.client.peerVpc(...args).promise()
  }

  async putAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.putAlarm(...args).promise()
  }

  async putInstancePublicPorts(...args: any): Promise<any> {
  // undefined
    return this.client.putInstancePublicPorts(...args).promise()
  }

  async rebootInstance(...args: any): Promise<any> {
  // undefined
    return this.client.rebootInstance(...args).promise()
  }

  async rebootRelationalDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.rebootRelationalDatabase(...args).promise()
  }

  async registerContainerImage(...args: any): Promise<any> {
  // undefined
    return this.client.registerContainerImage(...args).promise()
  }

  async releaseStaticIp(...args: any): Promise<any> {
  // undefined
    return this.client.releaseStaticIp(...args).promise()
  }

  async resetDistributionCache(...args: any): Promise<any> {
  // undefined
    return this.client.resetDistributionCache(...args).promise()
  }

  async sendContactMethodVerification(...args: any): Promise<any> {
  // undefined
    return this.client.sendContactMethodVerification(...args).promise()
  }

  async setIpAddressType(...args: any): Promise<any> {
  // undefined
    return this.client.setIpAddressType(...args).promise()
  }

  async setResourceAccessForBucket(...args: any): Promise<any> {
  // undefined
    return this.client.setResourceAccessForBucket(...args).promise()
  }

  async startInstance(...args: any): Promise<any> {
  // undefined
    return this.client.startInstance(...args).promise()
  }

  async startRelationalDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.startRelationalDatabase(...args).promise()
  }

  async stopInstance(...args: any): Promise<any> {
  // undefined
    return this.client.stopInstance(...args).promise()
  }

  async stopRelationalDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.stopRelationalDatabase(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.testAlarm(...args).promise()
  }

  async unpeerVpc(...args: any): Promise<any> {
  // undefined
    return this.client.unpeerVpc(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateBucket(...args: any): Promise<any> {
  // undefined
    return this.client.updateBucket(...args).promise()
  }

  async updateBucketBundle(...args: any): Promise<any> {
  // undefined
    return this.client.updateBucketBundle(...args).promise()
  }

  async updateContainerService(...args: any): Promise<any> {
  // undefined
    return this.client.updateContainerService(...args).promise()
  }

  async updateDistribution(...args: any): Promise<any> {
  // undefined
    return this.client.updateDistribution(...args).promise()
  }

  async updateDistributionBundle(...args: any): Promise<any> {
  // undefined
    return this.client.updateDistributionBundle(...args).promise()
  }

  async updateDomainEntry(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainEntry(...args).promise()
  }

  async updateInstanceMetadataOptions(...args: any): Promise<any> {
  // undefined
    return this.client.updateInstanceMetadataOptions(...args).promise()
  }

  async updateLoadBalancerAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.updateLoadBalancerAttribute(...args).promise()
  }

  async updateRelationalDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.updateRelationalDatabase(...args).promise()
  }

  async updateRelationalDatabaseParameters(...args: any): Promise<any> {
  // undefined
    return this.client.updateRelationalDatabaseParameters(...args).promise()
  }
  
  static fromClient(client: AWSLightsail): ClientType {
    return new Lightsail(client) as any;
  }
  
  static client(options?: AWSLightsail.Types.ClientConfiguration): ClientType {
    return new Lightsail(new AWSLightsail(options)) as any;
  }
}  
