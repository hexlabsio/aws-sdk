import { Request, ES as AWSES } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSES> = AWSES[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSES> = AWSES[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSES[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSES, Extras> = AWSES[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'es';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["describeInboundCrossClusterSearchConnections","describeOutboundCrossClusterSearchConnections","describePackages","describeReservedElasticsearchInstanceOfferings","describeReservedElasticsearchInstances","listElasticsearchVersions"];
    
  acceptInboundCrossClusterSearchConnection: FunctionTypeFrom<'acceptInboundCrossClusterSearchConnection'>;

  addTags: FunctionTypeFrom<'addTags'>;

  associatePackage: FunctionTypeFrom<'associatePackage'>;

  cancelElasticsearchServiceSoftwareUpdate: FunctionTypeFrom<'cancelElasticsearchServiceSoftwareUpdate'>;

  createElasticsearchDomain: FunctionTypeFrom<'createElasticsearchDomain'>;

  createOutboundCrossClusterSearchConnection: FunctionTypeFrom<'createOutboundCrossClusterSearchConnection'>;

  createPackage: FunctionTypeFrom<'createPackage'>;

  deleteElasticsearchDomain: FunctionTypeFrom<'deleteElasticsearchDomain'>;

  deleteElasticsearchServiceRole: FunctionTypeFrom<'deleteElasticsearchServiceRole'>;

  deleteInboundCrossClusterSearchConnection: FunctionTypeFrom<'deleteInboundCrossClusterSearchConnection'>;

  deleteOutboundCrossClusterSearchConnection: FunctionTypeFrom<'deleteOutboundCrossClusterSearchConnection'>;

  deletePackage: FunctionTypeFrom<'deletePackage'>;

  describeDomainAutoTunes: FunctionTypeFrom<'describeDomainAutoTunes'>;

  describeDomainChangeProgress: FunctionTypeFrom<'describeDomainChangeProgress'>;

  describeElasticsearchDomain: FunctionTypeFrom<'describeElasticsearchDomain'>;

  describeElasticsearchDomainConfig: FunctionTypeFrom<'describeElasticsearchDomainConfig'>;

  describeElasticsearchDomains: FunctionTypeFrom<'describeElasticsearchDomains'>;

  describeElasticsearchInstanceTypeLimits: FunctionTypeFrom<'describeElasticsearchInstanceTypeLimits'>;

  describeInboundCrossClusterSearchConnections: FunctionTypeFrom<'describeInboundCrossClusterSearchConnections'>;

  describeOutboundCrossClusterSearchConnections: FunctionTypeFrom<'describeOutboundCrossClusterSearchConnections'>;

  describePackages: FunctionTypeFrom<'describePackages'>;

  describeReservedElasticsearchInstanceOfferings: FunctionTypeFrom<'describeReservedElasticsearchInstanceOfferings'>;

  describeReservedElasticsearchInstances: FunctionTypeFrom<'describeReservedElasticsearchInstances'>;

  dissociatePackage: FunctionTypeFrom<'dissociatePackage'>;

  getCompatibleElasticsearchVersions: FunctionTypeFrom<'getCompatibleElasticsearchVersions'>;

  getPackageVersionHistory: FunctionTypeFrom<'getPackageVersionHistory'>;

  getUpgradeHistory: FunctionTypeFrom<'getUpgradeHistory'>;

  getUpgradeStatus: FunctionTypeFrom<'getUpgradeStatus'>;

  listDomainNames: FunctionTypeFrom<'listDomainNames'>;

  listDomainsForPackage: FunctionTypeFrom<'listDomainsForPackage'>;

  listElasticsearchInstanceTypes: FunctionTypeFrom<'listElasticsearchInstanceTypes'>;

  listElasticsearchVersions: FunctionTypeFrom<'listElasticsearchVersions'>;

  listPackagesForDomain: FunctionTypeFrom<'listPackagesForDomain'>;

  listTags: FunctionTypeFrom<'listTags'>;

  purchaseReservedElasticsearchInstanceOffering: FunctionTypeFrom<'purchaseReservedElasticsearchInstanceOffering'>;

  rejectInboundCrossClusterSearchConnection: FunctionTypeFrom<'rejectInboundCrossClusterSearchConnection'>;

  removeTags: FunctionTypeFrom<'removeTags'>;

  startElasticsearchServiceSoftwareUpdate: FunctionTypeFrom<'startElasticsearchServiceSoftwareUpdate'>;

  updateElasticsearchDomainConfig: FunctionTypeFrom<'updateElasticsearchDomainConfig'>;

  updatePackage: FunctionTypeFrom<'updatePackage'>;

  upgradeElasticsearchDomain: FunctionTypeFrom<'upgradeElasticsearchDomain'>
}
 
export class ES implements ClientType {
  private constructor(private readonly client: AWSES) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'es';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["describeInboundCrossClusterSearchConnections","describeOutboundCrossClusterSearchConnections","describePackages","describeReservedElasticsearchInstanceOfferings","describeReservedElasticsearchInstances","listElasticsearchVersions"] as const;
  
  async acceptInboundCrossClusterSearchConnection(...args: any): Promise<any> {
  // undefined
    return this.client.acceptInboundCrossClusterSearchConnection(...args).promise()
  }

  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async associatePackage(...args: any): Promise<any> {
  // undefined
    return this.client.associatePackage(...args).promise()
  }

  async cancelElasticsearchServiceSoftwareUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.cancelElasticsearchServiceSoftwareUpdate(...args).promise()
  }

  async createElasticsearchDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createElasticsearchDomain(...args).promise()
  }

  async createOutboundCrossClusterSearchConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createOutboundCrossClusterSearchConnection(...args).promise()
  }

  async createPackage(...args: any): Promise<any> {
  // undefined
    return this.client.createPackage(...args).promise()
  }

  async deleteElasticsearchDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteElasticsearchDomain(...args).promise()
  }

  async deleteElasticsearchServiceRole(...args: any): Promise<any> {
  // undefined
    return this.client.deleteElasticsearchServiceRole(...args).promise()
  }

  async deleteInboundCrossClusterSearchConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInboundCrossClusterSearchConnection(...args).promise()
  }

  async deleteOutboundCrossClusterSearchConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOutboundCrossClusterSearchConnection(...args).promise()
  }

  async deletePackage(...args: any): Promise<any> {
  // undefined
    return this.client.deletePackage(...args).promise()
  }

  async describeDomainAutoTunes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDomainAutoTunes(...args).promise()
  }

  async describeDomainChangeProgress(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomainChangeProgress(...args).promise()
  }

  async describeElasticsearchDomain(...args: any): Promise<any> {
  // undefined
    return this.client.describeElasticsearchDomain(...args).promise()
  }

  async describeElasticsearchDomainConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeElasticsearchDomainConfig(...args).promise()
  }

  async describeElasticsearchDomains(...args: any): Promise<any> {
  // undefined
    return this.client.describeElasticsearchDomains(...args).promise()
  }

  async describeElasticsearchInstanceTypeLimits(...args: any): Promise<any> {
  // undefined
    return this.client.describeElasticsearchInstanceTypeLimits(...args).promise()
  }

  async describeInboundCrossClusterSearchConnections(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeInboundCrossClusterSearchConnections(...args).promise()
  }

  async describeOutboundCrossClusterSearchConnections(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeOutboundCrossClusterSearchConnections(...args).promise()
  }

  async describePackages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describePackages(...args).promise()
  }

  async describeReservedElasticsearchInstanceOfferings(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReservedElasticsearchInstanceOfferings(...args).promise()
  }

  async describeReservedElasticsearchInstances(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReservedElasticsearchInstances(...args).promise()
  }

  async dissociatePackage(...args: any): Promise<any> {
  // undefined
    return this.client.dissociatePackage(...args).promise()
  }

  async getCompatibleElasticsearchVersions(...args: any): Promise<any> {
  // undefined
    return this.client.getCompatibleElasticsearchVersions(...args).promise()
  }

  async getPackageVersionHistory(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getPackageVersionHistory(...args).promise()
  }

  async getUpgradeHistory(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getUpgradeHistory(...args).promise()
  }

  async getUpgradeStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getUpgradeStatus(...args).promise()
  }

  async listDomainNames(...args: any): Promise<any> {
  // undefined
    return this.client.listDomainNames(...args).promise()
  }

  async listDomainsForPackage(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDomainsForPackage(...args).promise()
  }

  async listElasticsearchInstanceTypes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listElasticsearchInstanceTypes(...args).promise()
  }

  async listElasticsearchVersions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listElasticsearchVersions(...args).promise()
  }

  async listPackagesForDomain(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPackagesForDomain(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
  // undefined
    return this.client.listTags(...args).promise()
  }

  async purchaseReservedElasticsearchInstanceOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseReservedElasticsearchInstanceOffering(...args).promise()
  }

  async rejectInboundCrossClusterSearchConnection(...args: any): Promise<any> {
  // undefined
    return this.client.rejectInboundCrossClusterSearchConnection(...args).promise()
  }

  async removeTags(...args: any): Promise<any> {
  // undefined
    return this.client.removeTags(...args).promise()
  }

  async startElasticsearchServiceSoftwareUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.startElasticsearchServiceSoftwareUpdate(...args).promise()
  }

  async updateElasticsearchDomainConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateElasticsearchDomainConfig(...args).promise()
  }

  async updatePackage(...args: any): Promise<any> {
  // undefined
    return this.client.updatePackage(...args).promise()
  }

  async upgradeElasticsearchDomain(...args: any): Promise<any> {
  // undefined
    return this.client.upgradeElasticsearchDomain(...args).promise()
  }
  
  static fromClient(client: AWSES): ClientType {
    return new ES(client) as any;
  }
  
  static client(options?: AWSES.Types.ClientConfiguration): ClientType {
    return new ES(new AWSES(options)) as any;
  }
}  
