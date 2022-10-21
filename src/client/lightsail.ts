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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLightsail> = AWSLightsail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Lightsail {
  private constructor(private readonly client: AWSLightsail) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lightsail' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = [] as const;
  
  allocateStaticIp: (params: RawParamsFrom<'allocateStaticIp'>) => Promise<ReturnTypeFrom<'allocateStaticIp'>>  = async params => {
  // undefined
    return this.client.allocateStaticIp(params as any).promise();
  }

  attachCertificateToDistribution: (params: RawParamsFrom<'attachCertificateToDistribution'>) => Promise<ReturnTypeFrom<'attachCertificateToDistribution'>>  = async params => {
  // undefined
    return this.client.attachCertificateToDistribution(params as any).promise();
  }

  attachDisk: (params: RawParamsFrom<'attachDisk'>) => Promise<ReturnTypeFrom<'attachDisk'>>  = async params => {
  // undefined
    return this.client.attachDisk(params as any).promise();
  }

  attachInstancesToLoadBalancer: (params: RawParamsFrom<'attachInstancesToLoadBalancer'>) => Promise<ReturnTypeFrom<'attachInstancesToLoadBalancer'>>  = async params => {
  // undefined
    return this.client.attachInstancesToLoadBalancer(params as any).promise();
  }

  attachLoadBalancerTlsCertificate: (params: RawParamsFrom<'attachLoadBalancerTlsCertificate'>) => Promise<ReturnTypeFrom<'attachLoadBalancerTlsCertificate'>>  = async params => {
  // undefined
    return this.client.attachLoadBalancerTlsCertificate(params as any).promise();
  }

  attachStaticIp: (params: RawParamsFrom<'attachStaticIp'>) => Promise<ReturnTypeFrom<'attachStaticIp'>>  = async params => {
  // undefined
    return this.client.attachStaticIp(params as any).promise();
  }

  closeInstancePublicPorts: (params: RawParamsFrom<'closeInstancePublicPorts'>) => Promise<ReturnTypeFrom<'closeInstancePublicPorts'>>  = async params => {
  // undefined
    return this.client.closeInstancePublicPorts(params as any).promise();
  }

  copySnapshot: (params: RawParamsFrom<'copySnapshot'>) => Promise<ReturnTypeFrom<'copySnapshot'>>  = async params => {
  // undefined
    return this.client.copySnapshot(params as any).promise();
  }

  createBucket: (params: RawParamsFrom<'createBucket'>) => Promise<ReturnTypeFrom<'createBucket'>>  = async params => {
  // undefined
    return this.client.createBucket(params as any).promise();
  }

  createBucketAccessKey: (params: RawParamsFrom<'createBucketAccessKey'>) => Promise<ReturnTypeFrom<'createBucketAccessKey'>>  = async params => {
  // undefined
    return this.client.createBucketAccessKey(params as any).promise();
  }

  createCertificate: (params: RawParamsFrom<'createCertificate'>) => Promise<ReturnTypeFrom<'createCertificate'>>  = async params => {
  // undefined
    return this.client.createCertificate(params as any).promise();
  }

  createCloudFormationStack: (params: RawParamsFrom<'createCloudFormationStack'>) => Promise<ReturnTypeFrom<'createCloudFormationStack'>>  = async params => {
  // undefined
    return this.client.createCloudFormationStack(params as any).promise();
  }

  createContactMethod: (params: RawParamsFrom<'createContactMethod'>) => Promise<ReturnTypeFrom<'createContactMethod'>>  = async params => {
  // undefined
    return this.client.createContactMethod(params as any).promise();
  }

  createContainerService: (params: RawParamsFrom<'createContainerService'>) => Promise<ReturnTypeFrom<'createContainerService'>>  = async params => {
  // undefined
    return this.client.createContainerService(params as any).promise();
  }

  createContainerServiceDeployment: (params: RawParamsFrom<'createContainerServiceDeployment'>) => Promise<ReturnTypeFrom<'createContainerServiceDeployment'>>  = async params => {
  // undefined
    return this.client.createContainerServiceDeployment(params as any).promise();
  }

  createContainerServiceRegistryLogin: (params: RawParamsFrom<'createContainerServiceRegistryLogin'>) => Promise<ReturnTypeFrom<'createContainerServiceRegistryLogin'>>  = async params => {
  // undefined
    return this.client.createContainerServiceRegistryLogin(params as any).promise();
  }

  createDisk: (params: RawParamsFrom<'createDisk'>) => Promise<ReturnTypeFrom<'createDisk'>>  = async params => {
  // undefined
    return this.client.createDisk(params as any).promise();
  }

  createDiskFromSnapshot: (params: RawParamsFrom<'createDiskFromSnapshot'>) => Promise<ReturnTypeFrom<'createDiskFromSnapshot'>>  = async params => {
  // undefined
    return this.client.createDiskFromSnapshot(params as any).promise();
  }

  createDiskSnapshot: (params: RawParamsFrom<'createDiskSnapshot'>) => Promise<ReturnTypeFrom<'createDiskSnapshot'>>  = async params => {
  // undefined
    return this.client.createDiskSnapshot(params as any).promise();
  }

  createDistribution: (params: RawParamsFrom<'createDistribution'>) => Promise<ReturnTypeFrom<'createDistribution'>>  = async params => {
  // undefined
    return this.client.createDistribution(params as any).promise();
  }

  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  createDomainEntry: (params: RawParamsFrom<'createDomainEntry'>) => Promise<ReturnTypeFrom<'createDomainEntry'>>  = async params => {
  // undefined
    return this.client.createDomainEntry(params as any).promise();
  }

  createInstanceSnapshot: (params: RawParamsFrom<'createInstanceSnapshot'>) => Promise<ReturnTypeFrom<'createInstanceSnapshot'>>  = async params => {
  // undefined
    return this.client.createInstanceSnapshot(params as any).promise();
  }

  createInstances: (params: RawParamsFrom<'createInstances'>) => Promise<ReturnTypeFrom<'createInstances'>>  = async params => {
  // undefined
    return this.client.createInstances(params as any).promise();
  }

  createInstancesFromSnapshot: (params: RawParamsFrom<'createInstancesFromSnapshot'>) => Promise<ReturnTypeFrom<'createInstancesFromSnapshot'>>  = async params => {
  // undefined
    return this.client.createInstancesFromSnapshot(params as any).promise();
  }

  createKeyPair: (params: RawParamsFrom<'createKeyPair'>) => Promise<ReturnTypeFrom<'createKeyPair'>>  = async params => {
  // undefined
    return this.client.createKeyPair(params as any).promise();
  }

  createLoadBalancer: (params: RawParamsFrom<'createLoadBalancer'>) => Promise<ReturnTypeFrom<'createLoadBalancer'>>  = async params => {
  // undefined
    return this.client.createLoadBalancer(params as any).promise();
  }

  createLoadBalancerTlsCertificate: (params: RawParamsFrom<'createLoadBalancerTlsCertificate'>) => Promise<ReturnTypeFrom<'createLoadBalancerTlsCertificate'>>  = async params => {
  // undefined
    return this.client.createLoadBalancerTlsCertificate(params as any).promise();
  }

  createRelationalDatabase: (params: RawParamsFrom<'createRelationalDatabase'>) => Promise<ReturnTypeFrom<'createRelationalDatabase'>>  = async params => {
  // undefined
    return this.client.createRelationalDatabase(params as any).promise();
  }

  createRelationalDatabaseFromSnapshot: (params: RawParamsFrom<'createRelationalDatabaseFromSnapshot'>) => Promise<ReturnTypeFrom<'createRelationalDatabaseFromSnapshot'>>  = async params => {
  // undefined
    return this.client.createRelationalDatabaseFromSnapshot(params as any).promise();
  }

  createRelationalDatabaseSnapshot: (params: RawParamsFrom<'createRelationalDatabaseSnapshot'>) => Promise<ReturnTypeFrom<'createRelationalDatabaseSnapshot'>>  = async params => {
  // undefined
    return this.client.createRelationalDatabaseSnapshot(params as any).promise();
  }

  deleteAlarm: (params: RawParamsFrom<'deleteAlarm'>) => Promise<ReturnTypeFrom<'deleteAlarm'>>  = async params => {
  // undefined
    return this.client.deleteAlarm(params as any).promise();
  }

  deleteAutoSnapshot: (params: RawParamsFrom<'deleteAutoSnapshot'>) => Promise<ReturnTypeFrom<'deleteAutoSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteAutoSnapshot(params as any).promise();
  }

  deleteBucket: (params: RawParamsFrom<'deleteBucket'>) => Promise<ReturnTypeFrom<'deleteBucket'>>  = async params => {
  // undefined
    return this.client.deleteBucket(params as any).promise();
  }

  deleteBucketAccessKey: (params: RawParamsFrom<'deleteBucketAccessKey'>) => Promise<ReturnTypeFrom<'deleteBucketAccessKey'>>  = async params => {
  // undefined
    return this.client.deleteBucketAccessKey(params as any).promise();
  }

  deleteCertificate: (params: RawParamsFrom<'deleteCertificate'>) => Promise<ReturnTypeFrom<'deleteCertificate'>>  = async params => {
  // undefined
    return this.client.deleteCertificate(params as any).promise();
  }

  deleteContactMethod: (params: RawParamsFrom<'deleteContactMethod'>) => Promise<ReturnTypeFrom<'deleteContactMethod'>>  = async params => {
  // undefined
    return this.client.deleteContactMethod(params as any).promise();
  }

  deleteContainerImage: (params: RawParamsFrom<'deleteContainerImage'>) => Promise<ReturnTypeFrom<'deleteContainerImage'>>  = async params => {
  // undefined
    return this.client.deleteContainerImage(params as any).promise();
  }

  deleteContainerService: (params: RawParamsFrom<'deleteContainerService'>) => Promise<ReturnTypeFrom<'deleteContainerService'>>  = async params => {
  // undefined
    return this.client.deleteContainerService(params as any).promise();
  }

  deleteDisk: (params: RawParamsFrom<'deleteDisk'>) => Promise<ReturnTypeFrom<'deleteDisk'>>  = async params => {
  // undefined
    return this.client.deleteDisk(params as any).promise();
  }

  deleteDiskSnapshot: (params: RawParamsFrom<'deleteDiskSnapshot'>) => Promise<ReturnTypeFrom<'deleteDiskSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteDiskSnapshot(params as any).promise();
  }

  deleteDistribution: (params: RawParamsFrom<'deleteDistribution'>) => Promise<ReturnTypeFrom<'deleteDistribution'>>  = async params => {
  // undefined
    return this.client.deleteDistribution(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  deleteDomainEntry: (params: RawParamsFrom<'deleteDomainEntry'>) => Promise<ReturnTypeFrom<'deleteDomainEntry'>>  = async params => {
  // undefined
    return this.client.deleteDomainEntry(params as any).promise();
  }

  deleteInstance: (params: RawParamsFrom<'deleteInstance'>) => Promise<ReturnTypeFrom<'deleteInstance'>>  = async params => {
  // undefined
    return this.client.deleteInstance(params as any).promise();
  }

  deleteInstanceSnapshot: (params: RawParamsFrom<'deleteInstanceSnapshot'>) => Promise<ReturnTypeFrom<'deleteInstanceSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteInstanceSnapshot(params as any).promise();
  }

  deleteKeyPair: (params: RawParamsFrom<'deleteKeyPair'>) => Promise<ReturnTypeFrom<'deleteKeyPair'>>  = async params => {
  // undefined
    return this.client.deleteKeyPair(params as any).promise();
  }

  deleteKnownHostKeys: (params: RawParamsFrom<'deleteKnownHostKeys'>) => Promise<ReturnTypeFrom<'deleteKnownHostKeys'>>  = async params => {
  // undefined
    return this.client.deleteKnownHostKeys(params as any).promise();
  }

  deleteLoadBalancer: (params: RawParamsFrom<'deleteLoadBalancer'>) => Promise<ReturnTypeFrom<'deleteLoadBalancer'>>  = async params => {
  // undefined
    return this.client.deleteLoadBalancer(params as any).promise();
  }

  deleteLoadBalancerTlsCertificate: (params: RawParamsFrom<'deleteLoadBalancerTlsCertificate'>) => Promise<ReturnTypeFrom<'deleteLoadBalancerTlsCertificate'>>  = async params => {
  // undefined
    return this.client.deleteLoadBalancerTlsCertificate(params as any).promise();
  }

  deleteRelationalDatabase: (params: RawParamsFrom<'deleteRelationalDatabase'>) => Promise<ReturnTypeFrom<'deleteRelationalDatabase'>>  = async params => {
  // undefined
    return this.client.deleteRelationalDatabase(params as any).promise();
  }

  deleteRelationalDatabaseSnapshot: (params: RawParamsFrom<'deleteRelationalDatabaseSnapshot'>) => Promise<ReturnTypeFrom<'deleteRelationalDatabaseSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteRelationalDatabaseSnapshot(params as any).promise();
  }

  detachCertificateFromDistribution: (params: RawParamsFrom<'detachCertificateFromDistribution'>) => Promise<ReturnTypeFrom<'detachCertificateFromDistribution'>>  = async params => {
  // undefined
    return this.client.detachCertificateFromDistribution(params as any).promise();
  }

  detachDisk: (params: RawParamsFrom<'detachDisk'>) => Promise<ReturnTypeFrom<'detachDisk'>>  = async params => {
  // undefined
    return this.client.detachDisk(params as any).promise();
  }

  detachInstancesFromLoadBalancer: (params: RawParamsFrom<'detachInstancesFromLoadBalancer'>) => Promise<ReturnTypeFrom<'detachInstancesFromLoadBalancer'>>  = async params => {
  // undefined
    return this.client.detachInstancesFromLoadBalancer(params as any).promise();
  }

  detachStaticIp: (params: RawParamsFrom<'detachStaticIp'>) => Promise<ReturnTypeFrom<'detachStaticIp'>>  = async params => {
  // undefined
    return this.client.detachStaticIp(params as any).promise();
  }

  disableAddOn: (params: RawParamsFrom<'disableAddOn'>) => Promise<ReturnTypeFrom<'disableAddOn'>>  = async params => {
  // undefined
    return this.client.disableAddOn(params as any).promise();
  }

  downloadDefaultKeyPair: (params: RawParamsFrom<'downloadDefaultKeyPair'>) => Promise<ReturnTypeFrom<'downloadDefaultKeyPair'>>  = async params => {
  // undefined
    return this.client.downloadDefaultKeyPair(params as any).promise();
  }

  enableAddOn: (params: RawParamsFrom<'enableAddOn'>) => Promise<ReturnTypeFrom<'enableAddOn'>>  = async params => {
  // undefined
    return this.client.enableAddOn(params as any).promise();
  }

  exportSnapshot: (params: RawParamsFrom<'exportSnapshot'>) => Promise<ReturnTypeFrom<'exportSnapshot'>>  = async params => {
  // undefined
    return this.client.exportSnapshot(params as any).promise();
  }

  getActiveNames: (params: RawParamsFrom<'getActiveNames'>) => Promise<ReturnTypeFrom<'getActiveNames'>>  = async params => {
  // undefined
    return this.client.getActiveNames(params as any).promise();
  }

  getAlarms: (params: RawParamsFrom<'getAlarms'>) => Promise<ReturnTypeFrom<'getAlarms'>>  = async params => {
  // undefined
    return this.client.getAlarms(params as any).promise();
  }

  getAutoSnapshots: (params: RawParamsFrom<'getAutoSnapshots'>) => Promise<ReturnTypeFrom<'getAutoSnapshots'>>  = async params => {
  // undefined
    return this.client.getAutoSnapshots(params as any).promise();
  }

  getBlueprints: (params: RawParamsFrom<'getBlueprints'>) => Promise<ReturnTypeFrom<'getBlueprints'>>  = async params => {
  // undefined
    return this.client.getBlueprints(params as any).promise();
  }

  getBucketAccessKeys: (params: RawParamsFrom<'getBucketAccessKeys'>) => Promise<ReturnTypeFrom<'getBucketAccessKeys'>>  = async params => {
  // undefined
    return this.client.getBucketAccessKeys(params as any).promise();
  }

  getBucketBundles: (params: RawParamsFrom<'getBucketBundles'>) => Promise<ReturnTypeFrom<'getBucketBundles'>>  = async params => {
  // undefined
    return this.client.getBucketBundles(params as any).promise();
  }

  getBucketMetricData: (params: RawParamsFrom<'getBucketMetricData'>) => Promise<ReturnTypeFrom<'getBucketMetricData'>>  = async params => {
  // undefined
    return this.client.getBucketMetricData(params as any).promise();
  }

  getBuckets: (params: RawParamsFrom<'getBuckets'>) => Promise<ReturnTypeFrom<'getBuckets'>>  = async params => {
  // undefined
    return this.client.getBuckets(params as any).promise();
  }

  getBundles: (params: RawParamsFrom<'getBundles'>) => Promise<ReturnTypeFrom<'getBundles'>>  = async params => {
  // undefined
    return this.client.getBundles(params as any).promise();
  }

  getCertificates: (params: RawParamsFrom<'getCertificates'>) => Promise<ReturnTypeFrom<'getCertificates'>>  = async params => {
  // undefined
    return this.client.getCertificates(params as any).promise();
  }

  getCloudFormationStackRecords: (params: RawParamsFrom<'getCloudFormationStackRecords'>) => Promise<ReturnTypeFrom<'getCloudFormationStackRecords'>>  = async params => {
  // undefined
    return this.client.getCloudFormationStackRecords(params as any).promise();
  }

  getContactMethods: (params: RawParamsFrom<'getContactMethods'>) => Promise<ReturnTypeFrom<'getContactMethods'>>  = async params => {
  // undefined
    return this.client.getContactMethods(params as any).promise();
  }

  getContainerAPIMetadata: (params: RawParamsFrom<'getContainerAPIMetadata'>) => Promise<ReturnTypeFrom<'getContainerAPIMetadata'>>  = async params => {
  // undefined
    return this.client.getContainerAPIMetadata(params as any).promise();
  }

  getContainerImages: (params: RawParamsFrom<'getContainerImages'>) => Promise<ReturnTypeFrom<'getContainerImages'>>  = async params => {
  // undefined
    return this.client.getContainerImages(params as any).promise();
  }

  getContainerLog: (params: RawParamsFrom<'getContainerLog'>) => Promise<ReturnTypeFrom<'getContainerLog'>>  = async params => {
  // undefined
    return this.client.getContainerLog(params as any).promise();
  }

  getContainerServiceDeployments: (params: RawParamsFrom<'getContainerServiceDeployments'>) => Promise<ReturnTypeFrom<'getContainerServiceDeployments'>>  = async params => {
  // undefined
    return this.client.getContainerServiceDeployments(params as any).promise();
  }

  getContainerServiceMetricData: (params: RawParamsFrom<'getContainerServiceMetricData'>) => Promise<ReturnTypeFrom<'getContainerServiceMetricData'>>  = async params => {
  // undefined
    return this.client.getContainerServiceMetricData(params as any).promise();
  }

  getContainerServicePowers: (params: RawParamsFrom<'getContainerServicePowers'>) => Promise<ReturnTypeFrom<'getContainerServicePowers'>>  = async params => {
  // undefined
    return this.client.getContainerServicePowers(params as any).promise();
  }

  getContainerServices: (params: RawParamsFrom<'getContainerServices'>) => Promise<ReturnTypeFrom<'getContainerServices'>>  = async params => {
  // undefined
    return this.client.getContainerServices(params as any).promise();
  }

  getDisk: (params: RawParamsFrom<'getDisk'>) => Promise<ReturnTypeFrom<'getDisk'>>  = async params => {
  // undefined
    return this.client.getDisk(params as any).promise();
  }

  getDiskSnapshot: (params: RawParamsFrom<'getDiskSnapshot'>) => Promise<ReturnTypeFrom<'getDiskSnapshot'>>  = async params => {
  // undefined
    return this.client.getDiskSnapshot(params as any).promise();
  }

  getDiskSnapshots: (params: RawParamsFrom<'getDiskSnapshots'>) => Promise<ReturnTypeFrom<'getDiskSnapshots'>>  = async params => {
  // undefined
    return this.client.getDiskSnapshots(params as any).promise();
  }

  getDisks: (params: RawParamsFrom<'getDisks'>) => Promise<ReturnTypeFrom<'getDisks'>>  = async params => {
  // undefined
    return this.client.getDisks(params as any).promise();
  }

  getDistributionBundles: (params: RawParamsFrom<'getDistributionBundles'>) => Promise<ReturnTypeFrom<'getDistributionBundles'>>  = async params => {
  // undefined
    return this.client.getDistributionBundles(params as any).promise();
  }

  getDistributionLatestCacheReset: (params: RawParamsFrom<'getDistributionLatestCacheReset'>) => Promise<ReturnTypeFrom<'getDistributionLatestCacheReset'>>  = async params => {
  // undefined
    return this.client.getDistributionLatestCacheReset(params as any).promise();
  }

  getDistributionMetricData: (params: RawParamsFrom<'getDistributionMetricData'>) => Promise<ReturnTypeFrom<'getDistributionMetricData'>>  = async params => {
  // undefined
    return this.client.getDistributionMetricData(params as any).promise();
  }

  getDistributions: (params: RawParamsFrom<'getDistributions'>) => Promise<ReturnTypeFrom<'getDistributions'>>  = async params => {
  // undefined
    return this.client.getDistributions(params as any).promise();
  }

  getDomain: (params: RawParamsFrom<'getDomain'>) => Promise<ReturnTypeFrom<'getDomain'>>  = async params => {
  // undefined
    return this.client.getDomain(params as any).promise();
  }

  getDomains: (params: RawParamsFrom<'getDomains'>) => Promise<ReturnTypeFrom<'getDomains'>>  = async params => {
  // undefined
    return this.client.getDomains(params as any).promise();
  }

  getExportSnapshotRecords: (params: RawParamsFrom<'getExportSnapshotRecords'>) => Promise<ReturnTypeFrom<'getExportSnapshotRecords'>>  = async params => {
  // undefined
    return this.client.getExportSnapshotRecords(params as any).promise();
  }

  getInstance: (params: RawParamsFrom<'getInstance'>) => Promise<ReturnTypeFrom<'getInstance'>>  = async params => {
  // undefined
    return this.client.getInstance(params as any).promise();
  }

  getInstanceAccessDetails: (params: RawParamsFrom<'getInstanceAccessDetails'>) => Promise<ReturnTypeFrom<'getInstanceAccessDetails'>>  = async params => {
  // undefined
    return this.client.getInstanceAccessDetails(params as any).promise();
  }

  getInstanceMetricData: (params: RawParamsFrom<'getInstanceMetricData'>) => Promise<ReturnTypeFrom<'getInstanceMetricData'>>  = async params => {
  // undefined
    return this.client.getInstanceMetricData(params as any).promise();
  }

  getInstancePortStates: (params: RawParamsFrom<'getInstancePortStates'>) => Promise<ReturnTypeFrom<'getInstancePortStates'>>  = async params => {
  // undefined
    return this.client.getInstancePortStates(params as any).promise();
  }

  getInstanceSnapshot: (params: RawParamsFrom<'getInstanceSnapshot'>) => Promise<ReturnTypeFrom<'getInstanceSnapshot'>>  = async params => {
  // undefined
    return this.client.getInstanceSnapshot(params as any).promise();
  }

  getInstanceSnapshots: (params: RawParamsFrom<'getInstanceSnapshots'>) => Promise<ReturnTypeFrom<'getInstanceSnapshots'>>  = async params => {
  // undefined
    return this.client.getInstanceSnapshots(params as any).promise();
  }

  getInstanceState: (params: RawParamsFrom<'getInstanceState'>) => Promise<ReturnTypeFrom<'getInstanceState'>>  = async params => {
  // undefined
    return this.client.getInstanceState(params as any).promise();
  }

  getInstances: (params: RawParamsFrom<'getInstances'>) => Promise<ReturnTypeFrom<'getInstances'>>  = async params => {
  // undefined
    return this.client.getInstances(params as any).promise();
  }

  getKeyPair: (params: RawParamsFrom<'getKeyPair'>) => Promise<ReturnTypeFrom<'getKeyPair'>>  = async params => {
  // undefined
    return this.client.getKeyPair(params as any).promise();
  }

  getKeyPairs: (params: RawParamsFrom<'getKeyPairs'>) => Promise<ReturnTypeFrom<'getKeyPairs'>>  = async params => {
  // undefined
    return this.client.getKeyPairs(params as any).promise();
  }

  getLoadBalancer: (params: RawParamsFrom<'getLoadBalancer'>) => Promise<ReturnTypeFrom<'getLoadBalancer'>>  = async params => {
  // undefined
    return this.client.getLoadBalancer(params as any).promise();
  }

  getLoadBalancerMetricData: (params: RawParamsFrom<'getLoadBalancerMetricData'>) => Promise<ReturnTypeFrom<'getLoadBalancerMetricData'>>  = async params => {
  // undefined
    return this.client.getLoadBalancerMetricData(params as any).promise();
  }

  getLoadBalancerTlsCertificates: (params: RawParamsFrom<'getLoadBalancerTlsCertificates'>) => Promise<ReturnTypeFrom<'getLoadBalancerTlsCertificates'>>  = async params => {
  // undefined
    return this.client.getLoadBalancerTlsCertificates(params as any).promise();
  }

  getLoadBalancerTlsPolicies: (params: RawParamsFrom<'getLoadBalancerTlsPolicies'>) => Promise<ReturnTypeFrom<'getLoadBalancerTlsPolicies'>>  = async params => {
  // undefined
    return this.client.getLoadBalancerTlsPolicies(params as any).promise();
  }

  getLoadBalancers: (params: RawParamsFrom<'getLoadBalancers'>) => Promise<ReturnTypeFrom<'getLoadBalancers'>>  = async params => {
  // undefined
    return this.client.getLoadBalancers(params as any).promise();
  }

  getOperation: (params: RawParamsFrom<'getOperation'>) => Promise<ReturnTypeFrom<'getOperation'>>  = async params => {
  // undefined
    return this.client.getOperation(params as any).promise();
  }

  getOperations: (params: RawParamsFrom<'getOperations'>) => Promise<ReturnTypeFrom<'getOperations'>>  = async params => {
  // undefined
    return this.client.getOperations(params as any).promise();
  }

  getOperationsForResource: (params: RawParamsFrom<'getOperationsForResource'>) => Promise<ReturnTypeFrom<'getOperationsForResource'>>  = async params => {
  // undefined
    return this.client.getOperationsForResource(params as any).promise();
  }

  getRegions: (params: RawParamsFrom<'getRegions'>) => Promise<ReturnTypeFrom<'getRegions'>>  = async params => {
  // undefined
    return this.client.getRegions(params as any).promise();
  }

  getRelationalDatabase: (params: RawParamsFrom<'getRelationalDatabase'>) => Promise<ReturnTypeFrom<'getRelationalDatabase'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabase(params as any).promise();
  }

  getRelationalDatabaseBlueprints: (params: RawParamsFrom<'getRelationalDatabaseBlueprints'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseBlueprints'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseBlueprints(params as any).promise();
  }

  getRelationalDatabaseBundles: (params: RawParamsFrom<'getRelationalDatabaseBundles'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseBundles'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseBundles(params as any).promise();
  }

  getRelationalDatabaseEvents: (params: RawParamsFrom<'getRelationalDatabaseEvents'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseEvents'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseEvents(params as any).promise();
  }

  getRelationalDatabaseLogEvents: (params: RawParamsFrom<'getRelationalDatabaseLogEvents'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseLogEvents'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseLogEvents(params as any).promise();
  }

  getRelationalDatabaseLogStreams: (params: RawParamsFrom<'getRelationalDatabaseLogStreams'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseLogStreams'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseLogStreams(params as any).promise();
  }

  getRelationalDatabaseMasterUserPassword: (params: RawParamsFrom<'getRelationalDatabaseMasterUserPassword'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseMasterUserPassword'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseMasterUserPassword(params as any).promise();
  }

  getRelationalDatabaseMetricData: (params: RawParamsFrom<'getRelationalDatabaseMetricData'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseMetricData'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseMetricData(params as any).promise();
  }

  getRelationalDatabaseParameters: (params: RawParamsFrom<'getRelationalDatabaseParameters'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseParameters'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseParameters(params as any).promise();
  }

  getRelationalDatabaseSnapshot: (params: RawParamsFrom<'getRelationalDatabaseSnapshot'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseSnapshot'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseSnapshot(params as any).promise();
  }

  getRelationalDatabaseSnapshots: (params: RawParamsFrom<'getRelationalDatabaseSnapshots'>) => Promise<ReturnTypeFrom<'getRelationalDatabaseSnapshots'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabaseSnapshots(params as any).promise();
  }

  getRelationalDatabases: (params: RawParamsFrom<'getRelationalDatabases'>) => Promise<ReturnTypeFrom<'getRelationalDatabases'>>  = async params => {
  // undefined
    return this.client.getRelationalDatabases(params as any).promise();
  }

  getStaticIp: (params: RawParamsFrom<'getStaticIp'>) => Promise<ReturnTypeFrom<'getStaticIp'>>  = async params => {
  // undefined
    return this.client.getStaticIp(params as any).promise();
  }

  getStaticIps: (params: RawParamsFrom<'getStaticIps'>) => Promise<ReturnTypeFrom<'getStaticIps'>>  = async params => {
  // undefined
    return this.client.getStaticIps(params as any).promise();
  }

  importKeyPair: (params: RawParamsFrom<'importKeyPair'>) => Promise<ReturnTypeFrom<'importKeyPair'>>  = async params => {
  // undefined
    return this.client.importKeyPair(params as any).promise();
  }

  isVpcPeered: (params: RawParamsFrom<'isVpcPeered'>) => Promise<ReturnTypeFrom<'isVpcPeered'>>  = async params => {
  // undefined
    return this.client.isVpcPeered(params as any).promise();
  }

  openInstancePublicPorts: (params: RawParamsFrom<'openInstancePublicPorts'>) => Promise<ReturnTypeFrom<'openInstancePublicPorts'>>  = async params => {
  // undefined
    return this.client.openInstancePublicPorts(params as any).promise();
  }

  peerVpc: (params: RawParamsFrom<'peerVpc'>) => Promise<ReturnTypeFrom<'peerVpc'>>  = async params => {
  // undefined
    return this.client.peerVpc(params as any).promise();
  }

  putAlarm: (params: RawParamsFrom<'putAlarm'>) => Promise<ReturnTypeFrom<'putAlarm'>>  = async params => {
  // undefined
    return this.client.putAlarm(params as any).promise();
  }

  putInstancePublicPorts: (params: RawParamsFrom<'putInstancePublicPorts'>) => Promise<ReturnTypeFrom<'putInstancePublicPorts'>>  = async params => {
  // undefined
    return this.client.putInstancePublicPorts(params as any).promise();
  }

  rebootInstance: (params: RawParamsFrom<'rebootInstance'>) => Promise<ReturnTypeFrom<'rebootInstance'>>  = async params => {
  // undefined
    return this.client.rebootInstance(params as any).promise();
  }

  rebootRelationalDatabase: (params: RawParamsFrom<'rebootRelationalDatabase'>) => Promise<ReturnTypeFrom<'rebootRelationalDatabase'>>  = async params => {
  // undefined
    return this.client.rebootRelationalDatabase(params as any).promise();
  }

  registerContainerImage: (params: RawParamsFrom<'registerContainerImage'>) => Promise<ReturnTypeFrom<'registerContainerImage'>>  = async params => {
  // undefined
    return this.client.registerContainerImage(params as any).promise();
  }

  releaseStaticIp: (params: RawParamsFrom<'releaseStaticIp'>) => Promise<ReturnTypeFrom<'releaseStaticIp'>>  = async params => {
  // undefined
    return this.client.releaseStaticIp(params as any).promise();
  }

  resetDistributionCache: (params: RawParamsFrom<'resetDistributionCache'>) => Promise<ReturnTypeFrom<'resetDistributionCache'>>  = async params => {
  // undefined
    return this.client.resetDistributionCache(params as any).promise();
  }

  sendContactMethodVerification: (params: RawParamsFrom<'sendContactMethodVerification'>) => Promise<ReturnTypeFrom<'sendContactMethodVerification'>>  = async params => {
  // undefined
    return this.client.sendContactMethodVerification(params as any).promise();
  }

  setIpAddressType: (params: RawParamsFrom<'setIpAddressType'>) => Promise<ReturnTypeFrom<'setIpAddressType'>>  = async params => {
  // undefined
    return this.client.setIpAddressType(params as any).promise();
  }

  setResourceAccessForBucket: (params: RawParamsFrom<'setResourceAccessForBucket'>) => Promise<ReturnTypeFrom<'setResourceAccessForBucket'>>  = async params => {
  // undefined
    return this.client.setResourceAccessForBucket(params as any).promise();
  }

  startInstance: (params: RawParamsFrom<'startInstance'>) => Promise<ReturnTypeFrom<'startInstance'>>  = async params => {
  // undefined
    return this.client.startInstance(params as any).promise();
  }

  startRelationalDatabase: (params: RawParamsFrom<'startRelationalDatabase'>) => Promise<ReturnTypeFrom<'startRelationalDatabase'>>  = async params => {
  // undefined
    return this.client.startRelationalDatabase(params as any).promise();
  }

  stopInstance: (params: RawParamsFrom<'stopInstance'>) => Promise<ReturnTypeFrom<'stopInstance'>>  = async params => {
  // undefined
    return this.client.stopInstance(params as any).promise();
  }

  stopRelationalDatabase: (params: RawParamsFrom<'stopRelationalDatabase'>) => Promise<ReturnTypeFrom<'stopRelationalDatabase'>>  = async params => {
  // undefined
    return this.client.stopRelationalDatabase(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testAlarm: (params: RawParamsFrom<'testAlarm'>) => Promise<ReturnTypeFrom<'testAlarm'>>  = async params => {
  // undefined
    return this.client.testAlarm(params as any).promise();
  }

  unpeerVpc: (params: RawParamsFrom<'unpeerVpc'>) => Promise<ReturnTypeFrom<'unpeerVpc'>>  = async params => {
  // undefined
    return this.client.unpeerVpc(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateBucket: (params: RawParamsFrom<'updateBucket'>) => Promise<ReturnTypeFrom<'updateBucket'>>  = async params => {
  // undefined
    return this.client.updateBucket(params as any).promise();
  }

  updateBucketBundle: (params: RawParamsFrom<'updateBucketBundle'>) => Promise<ReturnTypeFrom<'updateBucketBundle'>>  = async params => {
  // undefined
    return this.client.updateBucketBundle(params as any).promise();
  }

  updateContainerService: (params: RawParamsFrom<'updateContainerService'>) => Promise<ReturnTypeFrom<'updateContainerService'>>  = async params => {
  // undefined
    return this.client.updateContainerService(params as any).promise();
  }

  updateDistribution: (params: RawParamsFrom<'updateDistribution'>) => Promise<ReturnTypeFrom<'updateDistribution'>>  = async params => {
  // undefined
    return this.client.updateDistribution(params as any).promise();
  }

  updateDistributionBundle: (params: RawParamsFrom<'updateDistributionBundle'>) => Promise<ReturnTypeFrom<'updateDistributionBundle'>>  = async params => {
  // undefined
    return this.client.updateDistributionBundle(params as any).promise();
  }

  updateDomainEntry: (params: RawParamsFrom<'updateDomainEntry'>) => Promise<ReturnTypeFrom<'updateDomainEntry'>>  = async params => {
  // undefined
    return this.client.updateDomainEntry(params as any).promise();
  }

  updateInstanceMetadataOptions: (params: RawParamsFrom<'updateInstanceMetadataOptions'>) => Promise<ReturnTypeFrom<'updateInstanceMetadataOptions'>>  = async params => {
  // undefined
    return this.client.updateInstanceMetadataOptions(params as any).promise();
  }

  updateLoadBalancerAttribute: (params: RawParamsFrom<'updateLoadBalancerAttribute'>) => Promise<ReturnTypeFrom<'updateLoadBalancerAttribute'>>  = async params => {
  // undefined
    return this.client.updateLoadBalancerAttribute(params as any).promise();
  }

  updateRelationalDatabase: (params: RawParamsFrom<'updateRelationalDatabase'>) => Promise<ReturnTypeFrom<'updateRelationalDatabase'>>  = async params => {
  // undefined
    return this.client.updateRelationalDatabase(params as any).promise();
  }

  updateRelationalDatabaseParameters: (params: RawParamsFrom<'updateRelationalDatabaseParameters'>) => Promise<ReturnTypeFrom<'updateRelationalDatabaseParameters'>>  = async params => {
  // undefined
    return this.client.updateRelationalDatabaseParameters(params as any).promise();
  }
  
  static fromClient(client: AWSLightsail): Lightsail {
    return new Lightsail(client) as any;
  }
  
  static client(options?: AWSLightsail.Types.ClientConfiguration): Lightsail {
    return new Lightsail(new AWSLightsail(options)) as any;
  }
}  
