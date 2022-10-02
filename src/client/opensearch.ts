import { Request, OpenSearch as AWSOpenSearch } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSOpenSearch> = AWSOpenSearch[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSOpenSearch> = AWSOpenSearch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSOpenSearch[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSOpenSearch, Extras> = AWSOpenSearch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'es';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["describeInboundConnections","describeOutboundConnections","describePackages","describeReservedInstanceOfferings","describeReservedInstances","listVersions"];
    
  acceptInboundConnection: FunctionTypeFrom<'acceptInboundConnection'>;

  addTags: FunctionTypeFrom<'addTags'>;

  associatePackage: FunctionTypeFrom<'associatePackage'>;

  cancelServiceSoftwareUpdate: FunctionTypeFrom<'cancelServiceSoftwareUpdate'>;

  createDomain: FunctionTypeFrom<'createDomain'>;

  createOutboundConnection: FunctionTypeFrom<'createOutboundConnection'>;

  createPackage: FunctionTypeFrom<'createPackage'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  deleteInboundConnection: FunctionTypeFrom<'deleteInboundConnection'>;

  deleteOutboundConnection: FunctionTypeFrom<'deleteOutboundConnection'>;

  deletePackage: FunctionTypeFrom<'deletePackage'>;

  describeDomain: FunctionTypeFrom<'describeDomain'>;

  describeDomainAutoTunes: FunctionTypeFrom<'describeDomainAutoTunes'>;

  describeDomainChangeProgress: FunctionTypeFrom<'describeDomainChangeProgress'>;

  describeDomainConfig: FunctionTypeFrom<'describeDomainConfig'>;

  describeDomains: FunctionTypeFrom<'describeDomains'>;

  describeInboundConnections: FunctionTypeFrom<'describeInboundConnections'>;

  describeInstanceTypeLimits: FunctionTypeFrom<'describeInstanceTypeLimits'>;

  describeOutboundConnections: FunctionTypeFrom<'describeOutboundConnections'>;

  describePackages: FunctionTypeFrom<'describePackages'>;

  describeReservedInstanceOfferings: FunctionTypeFrom<'describeReservedInstanceOfferings'>;

  describeReservedInstances: FunctionTypeFrom<'describeReservedInstances'>;

  dissociatePackage: FunctionTypeFrom<'dissociatePackage'>;

  getCompatibleVersions: FunctionTypeFrom<'getCompatibleVersions'>;

  getPackageVersionHistory: FunctionTypeFrom<'getPackageVersionHistory'>;

  getUpgradeHistory: FunctionTypeFrom<'getUpgradeHistory'>;

  getUpgradeStatus: FunctionTypeFrom<'getUpgradeStatus'>;

  listDomainNames: FunctionTypeFrom<'listDomainNames'>;

  listDomainsForPackage: FunctionTypeFrom<'listDomainsForPackage'>;

  listInstanceTypeDetails: FunctionTypeFrom<'listInstanceTypeDetails'>;

  listPackagesForDomain: FunctionTypeFrom<'listPackagesForDomain'>;

  listTags: FunctionTypeFrom<'listTags'>;

  listVersions: FunctionTypeFrom<'listVersions'>;

  purchaseReservedInstanceOffering: FunctionTypeFrom<'purchaseReservedInstanceOffering'>;

  rejectInboundConnection: FunctionTypeFrom<'rejectInboundConnection'>;

  removeTags: FunctionTypeFrom<'removeTags'>;

  startServiceSoftwareUpdate: FunctionTypeFrom<'startServiceSoftwareUpdate'>;

  updateDomainConfig: FunctionTypeFrom<'updateDomainConfig'>;

  updatePackage: FunctionTypeFrom<'updatePackage'>;

  upgradeDomain: FunctionTypeFrom<'upgradeDomain'>
}
 
export class OpenSearch implements ClientType {
  private constructor(private readonly client: AWSOpenSearch) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'es';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["describeInboundConnections","describeOutboundConnections","describePackages","describeReservedInstanceOfferings","describeReservedInstances","listVersions"] as const;
  
  async acceptInboundConnection(...args: any): Promise<any> {
  // undefined
    return this.client.acceptInboundConnection(...args).promise()
  }

  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async associatePackage(...args: any): Promise<any> {
  // undefined
    return this.client.associatePackage(...args).promise()
  }

  async cancelServiceSoftwareUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.cancelServiceSoftwareUpdate(...args).promise()
  }

  async createDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createDomain(...args).promise()
  }

  async createOutboundConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createOutboundConnection(...args).promise()
  }

  async createPackage(...args: any): Promise<any> {
  // undefined
    return this.client.createPackage(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async deleteInboundConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInboundConnection(...args).promise()
  }

  async deleteOutboundConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOutboundConnection(...args).promise()
  }

  async deletePackage(...args: any): Promise<any> {
  // undefined
    return this.client.deletePackage(...args).promise()
  }

  async describeDomain(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomain(...args).promise()
  }

  async describeDomainAutoTunes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDomainAutoTunes(...args).promise()
  }

  async describeDomainChangeProgress(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomainChangeProgress(...args).promise()
  }

  async describeDomainConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomainConfig(...args).promise()
  }

  async describeDomains(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomains(...args).promise()
  }

  async describeInboundConnections(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeInboundConnections(...args).promise()
  }

  async describeInstanceTypeLimits(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstanceTypeLimits(...args).promise()
  }

  async describeOutboundConnections(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeOutboundConnections(...args).promise()
  }

  async describePackages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describePackages(...args).promise()
  }

  async describeReservedInstanceOfferings(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReservedInstanceOfferings(...args).promise()
  }

  async describeReservedInstances(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReservedInstances(...args).promise()
  }

  async dissociatePackage(...args: any): Promise<any> {
  // undefined
    return this.client.dissociatePackage(...args).promise()
  }

  async getCompatibleVersions(...args: any): Promise<any> {
  // undefined
    return this.client.getCompatibleVersions(...args).promise()
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

  async listInstanceTypeDetails(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInstanceTypeDetails(...args).promise()
  }

  async listPackagesForDomain(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPackagesForDomain(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
  // undefined
    return this.client.listTags(...args).promise()
  }

  async listVersions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVersions(...args).promise()
  }

  async purchaseReservedInstanceOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseReservedInstanceOffering(...args).promise()
  }

  async rejectInboundConnection(...args: any): Promise<any> {
  // undefined
    return this.client.rejectInboundConnection(...args).promise()
  }

  async removeTags(...args: any): Promise<any> {
  // undefined
    return this.client.removeTags(...args).promise()
  }

  async startServiceSoftwareUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.startServiceSoftwareUpdate(...args).promise()
  }

  async updateDomainConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainConfig(...args).promise()
  }

  async updatePackage(...args: any): Promise<any> {
  // undefined
    return this.client.updatePackage(...args).promise()
  }

  async upgradeDomain(...args: any): Promise<any> {
  // undefined
    return this.client.upgradeDomain(...args).promise()
  }
  
  static fromClient(client: AWSOpenSearch): ClientType {
    return new OpenSearch(client) as any;
  }
  
  static client(options?: AWSOpenSearch.Types.ClientConfiguration): ClientType {
    return new OpenSearch(new AWSOpenSearch(options)) as any;
  }
}  
