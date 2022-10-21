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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSOpenSearch> = AWSOpenSearch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class OpenSearch {
  private constructor(private readonly client: AWSOpenSearch) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'es' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["describeInboundConnections","describeOutboundConnections","describePackages","describeReservedInstanceOfferings","describeReservedInstances","listVersions"] as const;
  
  acceptInboundConnection: (params: RawParamsFrom<'acceptInboundConnection'>) => Promise<ReturnTypeFrom<'acceptInboundConnection'>>  = async params => {
  // undefined
    return this.client.acceptInboundConnection(params as any).promise();
  }

  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  associatePackage: (params: RawParamsFrom<'associatePackage'>) => Promise<ReturnTypeFrom<'associatePackage'>>  = async params => {
  // undefined
    return this.client.associatePackage(params as any).promise();
  }

  cancelServiceSoftwareUpdate: (params: RawParamsFrom<'cancelServiceSoftwareUpdate'>) => Promise<ReturnTypeFrom<'cancelServiceSoftwareUpdate'>>  = async params => {
  // undefined
    return this.client.cancelServiceSoftwareUpdate(params as any).promise();
  }

  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  createOutboundConnection: (params: RawParamsFrom<'createOutboundConnection'>) => Promise<ReturnTypeFrom<'createOutboundConnection'>>  = async params => {
  // undefined
    return this.client.createOutboundConnection(params as any).promise();
  }

  createPackage: (params: RawParamsFrom<'createPackage'>) => Promise<ReturnTypeFrom<'createPackage'>>  = async params => {
  // undefined
    return this.client.createPackage(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  deleteInboundConnection: (params: RawParamsFrom<'deleteInboundConnection'>) => Promise<ReturnTypeFrom<'deleteInboundConnection'>>  = async params => {
  // undefined
    return this.client.deleteInboundConnection(params as any).promise();
  }

  deleteOutboundConnection: (params: RawParamsFrom<'deleteOutboundConnection'>) => Promise<ReturnTypeFrom<'deleteOutboundConnection'>>  = async params => {
  // undefined
    return this.client.deleteOutboundConnection(params as any).promise();
  }

  deletePackage: (params: RawParamsFrom<'deletePackage'>) => Promise<ReturnTypeFrom<'deletePackage'>>  = async params => {
  // undefined
    return this.client.deletePackage(params as any).promise();
  }

  describeDomain: (params: RawParamsFrom<'describeDomain'>) => Promise<ReturnTypeFrom<'describeDomain'>>  = async params => {
  // undefined
    return this.client.describeDomain(params as any).promise();
  }

  describeDomainAutoTunes: (params: RawParamsFrom<'describeDomainAutoTunes'>) => Promise<ReturnTypeFrom<'describeDomainAutoTunes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDomainAutoTunes(params as any).promise();
  }

  describeDomainChangeProgress: (params: RawParamsFrom<'describeDomainChangeProgress'>) => Promise<ReturnTypeFrom<'describeDomainChangeProgress'>>  = async params => {
  // undefined
    return this.client.describeDomainChangeProgress(params as any).promise();
  }

  describeDomainConfig: (params: RawParamsFrom<'describeDomainConfig'>) => Promise<ReturnTypeFrom<'describeDomainConfig'>>  = async params => {
  // undefined
    return this.client.describeDomainConfig(params as any).promise();
  }

  describeDomains: (params: RawParamsFrom<'describeDomains'>) => Promise<ReturnTypeFrom<'describeDomains'>>  = async params => {
  // undefined
    return this.client.describeDomains(params as any).promise();
  }

  describeInboundConnections: (params: RawParamsFrom<'describeInboundConnections'>) => Promise<ReturnTypeFrom<'describeInboundConnections'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeInboundConnections(params as any).promise();
  }

  describeInstanceTypeLimits: (params: RawParamsFrom<'describeInstanceTypeLimits'>) => Promise<ReturnTypeFrom<'describeInstanceTypeLimits'>>  = async params => {
  // undefined
    return this.client.describeInstanceTypeLimits(params as any).promise();
  }

  describeOutboundConnections: (params: RawParamsFrom<'describeOutboundConnections'>) => Promise<ReturnTypeFrom<'describeOutboundConnections'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeOutboundConnections(params as any).promise();
  }

  describePackages: (params: RawParamsFrom<'describePackages'>) => Promise<ReturnTypeFrom<'describePackages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describePackages(params as any).promise();
  }

  describeReservedInstanceOfferings: (params: RawParamsFrom<'describeReservedInstanceOfferings'>) => Promise<ReturnTypeFrom<'describeReservedInstanceOfferings'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReservedInstanceOfferings(params as any).promise();
  }

  describeReservedInstances: (params: RawParamsFrom<'describeReservedInstances'>) => Promise<ReturnTypeFrom<'describeReservedInstances'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReservedInstances(params as any).promise();
  }

  dissociatePackage: (params: RawParamsFrom<'dissociatePackage'>) => Promise<ReturnTypeFrom<'dissociatePackage'>>  = async params => {
  // undefined
    return this.client.dissociatePackage(params as any).promise();
  }

  getCompatibleVersions: (params: RawParamsFrom<'getCompatibleVersions'>) => Promise<ReturnTypeFrom<'getCompatibleVersions'>>  = async params => {
  // undefined
    return this.client.getCompatibleVersions(params as any).promise();
  }

  getPackageVersionHistory: (params: RawParamsFrom<'getPackageVersionHistory'>) => Promise<ReturnTypeFrom<'getPackageVersionHistory'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getPackageVersionHistory(params as any).promise();
  }

  getUpgradeHistory: (params: RawParamsFrom<'getUpgradeHistory'>) => Promise<ReturnTypeFrom<'getUpgradeHistory'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getUpgradeHistory(params as any).promise();
  }

  getUpgradeStatus: (params: RawParamsFrom<'getUpgradeStatus'>) => Promise<ReturnTypeFrom<'getUpgradeStatus'>>  = async params => {
  // undefined
    return this.client.getUpgradeStatus(params as any).promise();
  }

  listDomainNames: (params: RawParamsFrom<'listDomainNames'>) => Promise<ReturnTypeFrom<'listDomainNames'>>  = async params => {
  // undefined
    return this.client.listDomainNames(params as any).promise();
  }

  listDomainsForPackage: (params: RawParamsFrom<'listDomainsForPackage'>) => Promise<ReturnTypeFrom<'listDomainsForPackage'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDomainsForPackage(params as any).promise();
  }

  listInstanceTypeDetails: (params: RawParamsFrom<'listInstanceTypeDetails'>) => Promise<ReturnTypeFrom<'listInstanceTypeDetails'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInstanceTypeDetails(params as any).promise();
  }

  listPackagesForDomain: (params: RawParamsFrom<'listPackagesForDomain'>) => Promise<ReturnTypeFrom<'listPackagesForDomain'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPackagesForDomain(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // undefined
    return this.client.listTags(params as any).promise();
  }

  listVersions: (params: RawParamsFrom<'listVersions'>) => Promise<ReturnTypeFrom<'listVersions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVersions(params as any).promise();
  }

  purchaseReservedInstanceOffering: (params: RawParamsFrom<'purchaseReservedInstanceOffering'>) => Promise<ReturnTypeFrom<'purchaseReservedInstanceOffering'>>  = async params => {
  // undefined
    return this.client.purchaseReservedInstanceOffering(params as any).promise();
  }

  rejectInboundConnection: (params: RawParamsFrom<'rejectInboundConnection'>) => Promise<ReturnTypeFrom<'rejectInboundConnection'>>  = async params => {
  // undefined
    return this.client.rejectInboundConnection(params as any).promise();
  }

  removeTags: (params: RawParamsFrom<'removeTags'>) => Promise<ReturnTypeFrom<'removeTags'>>  = async params => {
  // undefined
    return this.client.removeTags(params as any).promise();
  }

  startServiceSoftwareUpdate: (params: RawParamsFrom<'startServiceSoftwareUpdate'>) => Promise<ReturnTypeFrom<'startServiceSoftwareUpdate'>>  = async params => {
  // undefined
    return this.client.startServiceSoftwareUpdate(params as any).promise();
  }

  updateDomainConfig: (params: RawParamsFrom<'updateDomainConfig'>) => Promise<ReturnTypeFrom<'updateDomainConfig'>>  = async params => {
  // undefined
    return this.client.updateDomainConfig(params as any).promise();
  }

  updatePackage: (params: RawParamsFrom<'updatePackage'>) => Promise<ReturnTypeFrom<'updatePackage'>>  = async params => {
  // undefined
    return this.client.updatePackage(params as any).promise();
  }

  upgradeDomain: (params: RawParamsFrom<'upgradeDomain'>) => Promise<ReturnTypeFrom<'upgradeDomain'>>  = async params => {
  // undefined
    return this.client.upgradeDomain(params as any).promise();
  }
  
  static fromClient(client: AWSOpenSearch): OpenSearch {
    return new OpenSearch(client) as any;
  }
  
  static client(options?: AWSOpenSearch.Types.ClientConfiguration): OpenSearch {
    return new OpenSearch(new AWSOpenSearch(options)) as any;
  }
}  
