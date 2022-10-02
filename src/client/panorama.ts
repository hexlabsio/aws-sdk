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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'panorama';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listApplicationInstances","listDevices","listDevicesJobs","listNodeFromTemplateJobs","listNodes","listPackageImportJobs","listPackages"];
    
  createApplicationInstance: FunctionTypeFrom<'createApplicationInstance'>;

  createJobForDevices: FunctionTypeFrom<'createJobForDevices'>;

  createNodeFromTemplateJob: FunctionTypeFrom<'createNodeFromTemplateJob'>;

  createPackage: FunctionTypeFrom<'createPackage'>;

  createPackageImportJob: FunctionTypeFrom<'createPackageImportJob'>;

  deleteDevice: FunctionTypeFrom<'deleteDevice'>;

  deletePackage: FunctionTypeFrom<'deletePackage'>;

  deregisterPackageVersion: FunctionTypeFrom<'deregisterPackageVersion'>;

  describeApplicationInstance: FunctionTypeFrom<'describeApplicationInstance'>;

  describeApplicationInstanceDetails: FunctionTypeFrom<'describeApplicationInstanceDetails'>;

  describeDevice: FunctionTypeFrom<'describeDevice'>;

  describeDeviceJob: FunctionTypeFrom<'describeDeviceJob'>;

  describeNode: FunctionTypeFrom<'describeNode'>;

  describeNodeFromTemplateJob: FunctionTypeFrom<'describeNodeFromTemplateJob'>;

  describePackage: FunctionTypeFrom<'describePackage'>;

  describePackageImportJob: FunctionTypeFrom<'describePackageImportJob'>;

  describePackageVersion: FunctionTypeFrom<'describePackageVersion'>;

  listApplicationInstanceDependencies: FunctionTypeFrom<'listApplicationInstanceDependencies'>;

  listApplicationInstanceNodeInstances: FunctionTypeFrom<'listApplicationInstanceNodeInstances'>;

  listApplicationInstances: FunctionTypeFrom<'listApplicationInstances'>;

  listDevices: FunctionTypeFrom<'listDevices'>;

  listDevicesJobs: FunctionTypeFrom<'listDevicesJobs'>;

  listNodeFromTemplateJobs: FunctionTypeFrom<'listNodeFromTemplateJobs'>;

  listNodes: FunctionTypeFrom<'listNodes'>;

  listPackageImportJobs: FunctionTypeFrom<'listPackageImportJobs'>;

  listPackages: FunctionTypeFrom<'listPackages'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  provisionDevice: FunctionTypeFrom<'provisionDevice'>;

  registerPackageVersion: FunctionTypeFrom<'registerPackageVersion'>;

  removeApplicationInstance: FunctionTypeFrom<'removeApplicationInstance'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDeviceMetadata: FunctionTypeFrom<'updateDeviceMetadata'>
}
 
export class Panorama implements ClientType {
  private constructor(private readonly client: AWSPanorama) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'panorama';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listApplicationInstances","listDevices","listDevicesJobs","listNodeFromTemplateJobs","listNodes","listPackageImportJobs","listPackages"] as const;
  
  async createApplicationInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createApplicationInstance(...args).promise()
  }

  async createJobForDevices(...args: any): Promise<any> {
  // undefined
    return this.client.createJobForDevices(...args).promise()
  }

  async createNodeFromTemplateJob(...args: any): Promise<any> {
  // undefined
    return this.client.createNodeFromTemplateJob(...args).promise()
  }

  async createPackage(...args: any): Promise<any> {
  // undefined
    return this.client.createPackage(...args).promise()
  }

  async createPackageImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createPackageImportJob(...args).promise()
  }

  async deleteDevice(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDevice(...args).promise()
  }

  async deletePackage(...args: any): Promise<any> {
  // undefined
    return this.client.deletePackage(...args).promise()
  }

  async deregisterPackageVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterPackageVersion(...args).promise()
  }

  async describeApplicationInstance(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplicationInstance(...args).promise()
  }

  async describeApplicationInstanceDetails(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplicationInstanceDetails(...args).promise()
  }

  async describeDevice(...args: any): Promise<any> {
  // undefined
    return this.client.describeDevice(...args).promise()
  }

  async describeDeviceJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeDeviceJob(...args).promise()
  }

  async describeNode(...args: any): Promise<any> {
  // undefined
    return this.client.describeNode(...args).promise()
  }

  async describeNodeFromTemplateJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeNodeFromTemplateJob(...args).promise()
  }

  async describePackage(...args: any): Promise<any> {
  // undefined
    return this.client.describePackage(...args).promise()
  }

  async describePackageImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describePackageImportJob(...args).promise()
  }

  async describePackageVersion(...args: any): Promise<any> {
  // undefined
    return this.client.describePackageVersion(...args).promise()
  }

  async listApplicationInstanceDependencies(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplicationInstanceDependencies(...args).promise()
  }

  async listApplicationInstanceNodeInstances(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplicationInstanceNodeInstances(...args).promise()
  }

  async listApplicationInstances(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplicationInstances(...args).promise()
  }

  async listDevices(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevices(...args).promise()
  }

  async listDevicesJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevicesJobs(...args).promise()
  }

  async listNodeFromTemplateJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNodeFromTemplateJobs(...args).promise()
  }

  async listNodes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listNodes(...args).promise()
  }

  async listPackageImportJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPackageImportJobs(...args).promise()
  }

  async listPackages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPackages(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async provisionDevice(...args: any): Promise<any> {
  // undefined
    return this.client.provisionDevice(...args).promise()
  }

  async registerPackageVersion(...args: any): Promise<any> {
  // undefined
    return this.client.registerPackageVersion(...args).promise()
  }

  async removeApplicationInstance(...args: any): Promise<any> {
  // undefined
    return this.client.removeApplicationInstance(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDeviceMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeviceMetadata(...args).promise()
  }
  
  static fromClient(client: AWSPanorama): ClientType {
    return new Panorama(client) as any;
  }
  
  static client(options?: AWSPanorama.Types.ClientConfiguration): ClientType {
    return new Panorama(new AWSPanorama(options)) as any;
  }
}  
