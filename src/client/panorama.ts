import { Request, Panorama as AWSPanorama } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPanorama> = AWSPanorama[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPanorama> = AWSPanorama[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPanorama[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPanorama, Extras> = AWSPanorama[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPanorama> = AWSPanorama[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Panorama {
  private constructor(private readonly client: AWSPanorama) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'panorama' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplicationInstances","listDevices","listDevicesJobs","listNodeFromTemplateJobs","listNodes","listPackageImportJobs","listPackages"] as const;
  
  createApplicationInstance: (params: RawParamsFrom<'createApplicationInstance'>) => Promise<ReturnTypeFrom<'createApplicationInstance'>>  = async params => {
  // undefined
    return this.client.createApplicationInstance(params as any).promise();
  }

  createJobForDevices: (params: RawParamsFrom<'createJobForDevices'>) => Promise<ReturnTypeFrom<'createJobForDevices'>>  = async params => {
  // undefined
    return this.client.createJobForDevices(params as any).promise();
  }

  createNodeFromTemplateJob: (params: RawParamsFrom<'createNodeFromTemplateJob'>) => Promise<ReturnTypeFrom<'createNodeFromTemplateJob'>>  = async params => {
  // undefined
    return this.client.createNodeFromTemplateJob(params as any).promise();
  }

  createPackage: (params: RawParamsFrom<'createPackage'>) => Promise<ReturnTypeFrom<'createPackage'>>  = async params => {
  // undefined
    return this.client.createPackage(params as any).promise();
  }

  createPackageImportJob: (params: RawParamsFrom<'createPackageImportJob'>) => Promise<ReturnTypeFrom<'createPackageImportJob'>>  = async params => {
  // undefined
    return this.client.createPackageImportJob(params as any).promise();
  }

  deleteDevice: (params: RawParamsFrom<'deleteDevice'>) => Promise<ReturnTypeFrom<'deleteDevice'>>  = async params => {
  // undefined
    return this.client.deleteDevice(params as any).promise();
  }

  deletePackage: (params: RawParamsFrom<'deletePackage'>) => Promise<ReturnTypeFrom<'deletePackage'>>  = async params => {
  // undefined
    return this.client.deletePackage(params as any).promise();
  }

  deregisterPackageVersion: (params: RawParamsFrom<'deregisterPackageVersion'>) => Promise<ReturnTypeFrom<'deregisterPackageVersion'>>  = async params => {
  // undefined
    return this.client.deregisterPackageVersion(params as any).promise();
  }

  describeApplicationInstance: (params: RawParamsFrom<'describeApplicationInstance'>) => Promise<ReturnTypeFrom<'describeApplicationInstance'>>  = async params => {
  // undefined
    return this.client.describeApplicationInstance(params as any).promise();
  }

  describeApplicationInstanceDetails: (params: RawParamsFrom<'describeApplicationInstanceDetails'>) => Promise<ReturnTypeFrom<'describeApplicationInstanceDetails'>>  = async params => {
  // undefined
    return this.client.describeApplicationInstanceDetails(params as any).promise();
  }

  describeDevice: (params: RawParamsFrom<'describeDevice'>) => Promise<ReturnTypeFrom<'describeDevice'>>  = async params => {
  // undefined
    return this.client.describeDevice(params as any).promise();
  }

  describeDeviceJob: (params: RawParamsFrom<'describeDeviceJob'>) => Promise<ReturnTypeFrom<'describeDeviceJob'>>  = async params => {
  // undefined
    return this.client.describeDeviceJob(params as any).promise();
  }

  describeNode: (params: RawParamsFrom<'describeNode'>) => Promise<ReturnTypeFrom<'describeNode'>>  = async params => {
  // undefined
    return this.client.describeNode(params as any).promise();
  }

  describeNodeFromTemplateJob: (params: RawParamsFrom<'describeNodeFromTemplateJob'>) => Promise<ReturnTypeFrom<'describeNodeFromTemplateJob'>>  = async params => {
  // undefined
    return this.client.describeNodeFromTemplateJob(params as any).promise();
  }

  describePackage: (params: RawParamsFrom<'describePackage'>) => Promise<ReturnTypeFrom<'describePackage'>>  = async params => {
  // undefined
    return this.client.describePackage(params as any).promise();
  }

  describePackageImportJob: (params: RawParamsFrom<'describePackageImportJob'>) => Promise<ReturnTypeFrom<'describePackageImportJob'>>  = async params => {
  // undefined
    return this.client.describePackageImportJob(params as any).promise();
  }

  describePackageVersion: (params: RawParamsFrom<'describePackageVersion'>) => Promise<ReturnTypeFrom<'describePackageVersion'>>  = async params => {
  // undefined
    return this.client.describePackageVersion(params as any).promise();
  }

  listApplicationInstanceDependencies: (params: RawParamsFrom<'listApplicationInstanceDependencies'>) => Promise<ReturnTypeFrom<'listApplicationInstanceDependencies'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplicationInstanceDependencies(params as any).promise();
  }

  listApplicationInstanceNodeInstances: (params: RawParamsFrom<'listApplicationInstanceNodeInstances'>) => Promise<ReturnTypeFrom<'listApplicationInstanceNodeInstances'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplicationInstanceNodeInstances(params as any).promise();
  }

  listApplicationInstances: (params: RawParamsFrom<'listApplicationInstances'>) => Promise<ReturnTypeFrom<'listApplicationInstances'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplicationInstances(params as any).promise();
  }

  listDevices: (params: RawParamsFrom<'listDevices'>) => Promise<ReturnTypeFrom<'listDevices'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevices(params as any).promise();
  }

  listDevicesJobs: (params: RawParamsFrom<'listDevicesJobs'>) => Promise<ReturnTypeFrom<'listDevicesJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevicesJobs(params as any).promise();
  }

  listNodeFromTemplateJobs: (params: RawParamsFrom<'listNodeFromTemplateJobs'>) => Promise<ReturnTypeFrom<'listNodeFromTemplateJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNodeFromTemplateJobs(params as any).promise();
  }

  listNodes: (params: RawParamsFrom<'listNodes'>) => Promise<ReturnTypeFrom<'listNodes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNodes(params as any).promise();
  }

  listPackageImportJobs: (params: RawParamsFrom<'listPackageImportJobs'>) => Promise<ReturnTypeFrom<'listPackageImportJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPackageImportJobs(params as any).promise();
  }

  listPackages: (params: RawParamsFrom<'listPackages'>) => Promise<ReturnTypeFrom<'listPackages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPackages(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  provisionDevice: (params: RawParamsFrom<'provisionDevice'>) => Promise<ReturnTypeFrom<'provisionDevice'>>  = async params => {
  // undefined
    return this.client.provisionDevice(params as any).promise();
  }

  registerPackageVersion: (params: RawParamsFrom<'registerPackageVersion'>) => Promise<ReturnTypeFrom<'registerPackageVersion'>>  = async params => {
  // undefined
    return this.client.registerPackageVersion(params as any).promise();
  }

  removeApplicationInstance: (params: RawParamsFrom<'removeApplicationInstance'>) => Promise<ReturnTypeFrom<'removeApplicationInstance'>>  = async params => {
  // undefined
    return this.client.removeApplicationInstance(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDeviceMetadata: (params: RawParamsFrom<'updateDeviceMetadata'>) => Promise<ReturnTypeFrom<'updateDeviceMetadata'>>  = async params => {
  // undefined
    return this.client.updateDeviceMetadata(params as any).promise();
  }
  
  static fromClient(client: AWSPanorama): Panorama {
    return new Panorama(client) as any;
  }
  
  static client(options?: AWSPanorama.Types.ClientConfiguration): Panorama {
    return new Panorama(new AWSPanorama(options)) as any;
  }
}  
