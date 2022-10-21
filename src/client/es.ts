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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSES> = AWSES[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ES {
  private constructor(private readonly client: AWSES) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'es' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["describeInboundCrossClusterSearchConnections","describeOutboundCrossClusterSearchConnections","describePackages","describeReservedElasticsearchInstanceOfferings","describeReservedElasticsearchInstances","listElasticsearchVersions"] as const;
  
  acceptInboundCrossClusterSearchConnection: (params: RawParamsFrom<'acceptInboundCrossClusterSearchConnection'>) => Promise<ReturnTypeFrom<'acceptInboundCrossClusterSearchConnection'>>  = async params => {
  // undefined
    return this.client.acceptInboundCrossClusterSearchConnection(params as any).promise();
  }

  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  associatePackage: (params: RawParamsFrom<'associatePackage'>) => Promise<ReturnTypeFrom<'associatePackage'>>  = async params => {
  // undefined
    return this.client.associatePackage(params as any).promise();
  }

  cancelElasticsearchServiceSoftwareUpdate: (params: RawParamsFrom<'cancelElasticsearchServiceSoftwareUpdate'>) => Promise<ReturnTypeFrom<'cancelElasticsearchServiceSoftwareUpdate'>>  = async params => {
  // undefined
    return this.client.cancelElasticsearchServiceSoftwareUpdate(params as any).promise();
  }

  createElasticsearchDomain: (params: RawParamsFrom<'createElasticsearchDomain'>) => Promise<ReturnTypeFrom<'createElasticsearchDomain'>>  = async params => {
  // undefined
    return this.client.createElasticsearchDomain(params as any).promise();
  }

  createOutboundCrossClusterSearchConnection: (params: RawParamsFrom<'createOutboundCrossClusterSearchConnection'>) => Promise<ReturnTypeFrom<'createOutboundCrossClusterSearchConnection'>>  = async params => {
  // undefined
    return this.client.createOutboundCrossClusterSearchConnection(params as any).promise();
  }

  createPackage: (params: RawParamsFrom<'createPackage'>) => Promise<ReturnTypeFrom<'createPackage'>>  = async params => {
  // undefined
    return this.client.createPackage(params as any).promise();
  }

  deleteElasticsearchDomain: (params: RawParamsFrom<'deleteElasticsearchDomain'>) => Promise<ReturnTypeFrom<'deleteElasticsearchDomain'>>  = async params => {
  // undefined
    return this.client.deleteElasticsearchDomain(params as any).promise();
  }

  deleteElasticsearchServiceRole: (params: RawParamsFrom<'deleteElasticsearchServiceRole'>) => Promise<ReturnTypeFrom<'deleteElasticsearchServiceRole'>>  = async params => {
  // undefined
    return this.client.deleteElasticsearchServiceRole(params as any).promise();
  }

  deleteInboundCrossClusterSearchConnection: (params: RawParamsFrom<'deleteInboundCrossClusterSearchConnection'>) => Promise<ReturnTypeFrom<'deleteInboundCrossClusterSearchConnection'>>  = async params => {
  // undefined
    return this.client.deleteInboundCrossClusterSearchConnection(params as any).promise();
  }

  deleteOutboundCrossClusterSearchConnection: (params: RawParamsFrom<'deleteOutboundCrossClusterSearchConnection'>) => Promise<ReturnTypeFrom<'deleteOutboundCrossClusterSearchConnection'>>  = async params => {
  // undefined
    return this.client.deleteOutboundCrossClusterSearchConnection(params as any).promise();
  }

  deletePackage: (params: RawParamsFrom<'deletePackage'>) => Promise<ReturnTypeFrom<'deletePackage'>>  = async params => {
  // undefined
    return this.client.deletePackage(params as any).promise();
  }

  describeDomainAutoTunes: (params: RawParamsFrom<'describeDomainAutoTunes'>) => Promise<ReturnTypeFrom<'describeDomainAutoTunes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDomainAutoTunes(params as any).promise();
  }

  describeDomainChangeProgress: (params: RawParamsFrom<'describeDomainChangeProgress'>) => Promise<ReturnTypeFrom<'describeDomainChangeProgress'>>  = async params => {
  // undefined
    return this.client.describeDomainChangeProgress(params as any).promise();
  }

  describeElasticsearchDomain: (params: RawParamsFrom<'describeElasticsearchDomain'>) => Promise<ReturnTypeFrom<'describeElasticsearchDomain'>>  = async params => {
  // undefined
    return this.client.describeElasticsearchDomain(params as any).promise();
  }

  describeElasticsearchDomainConfig: (params: RawParamsFrom<'describeElasticsearchDomainConfig'>) => Promise<ReturnTypeFrom<'describeElasticsearchDomainConfig'>>  = async params => {
  // undefined
    return this.client.describeElasticsearchDomainConfig(params as any).promise();
  }

  describeElasticsearchDomains: (params: RawParamsFrom<'describeElasticsearchDomains'>) => Promise<ReturnTypeFrom<'describeElasticsearchDomains'>>  = async params => {
  // undefined
    return this.client.describeElasticsearchDomains(params as any).promise();
  }

  describeElasticsearchInstanceTypeLimits: (params: RawParamsFrom<'describeElasticsearchInstanceTypeLimits'>) => Promise<ReturnTypeFrom<'describeElasticsearchInstanceTypeLimits'>>  = async params => {
  // undefined
    return this.client.describeElasticsearchInstanceTypeLimits(params as any).promise();
  }

  describeInboundCrossClusterSearchConnections: (params: RawParamsFrom<'describeInboundCrossClusterSearchConnections'>) => Promise<ReturnTypeFrom<'describeInboundCrossClusterSearchConnections'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeInboundCrossClusterSearchConnections(params as any).promise();
  }

  describeOutboundCrossClusterSearchConnections: (params: RawParamsFrom<'describeOutboundCrossClusterSearchConnections'>) => Promise<ReturnTypeFrom<'describeOutboundCrossClusterSearchConnections'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeOutboundCrossClusterSearchConnections(params as any).promise();
  }

  describePackages: (params: RawParamsFrom<'describePackages'>) => Promise<ReturnTypeFrom<'describePackages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describePackages(params as any).promise();
  }

  describeReservedElasticsearchInstanceOfferings: (params: RawParamsFrom<'describeReservedElasticsearchInstanceOfferings'>) => Promise<ReturnTypeFrom<'describeReservedElasticsearchInstanceOfferings'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReservedElasticsearchInstanceOfferings(params as any).promise();
  }

  describeReservedElasticsearchInstances: (params: RawParamsFrom<'describeReservedElasticsearchInstances'>) => Promise<ReturnTypeFrom<'describeReservedElasticsearchInstances'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReservedElasticsearchInstances(params as any).promise();
  }

  dissociatePackage: (params: RawParamsFrom<'dissociatePackage'>) => Promise<ReturnTypeFrom<'dissociatePackage'>>  = async params => {
  // undefined
    return this.client.dissociatePackage(params as any).promise();
  }

  getCompatibleElasticsearchVersions: (params: RawParamsFrom<'getCompatibleElasticsearchVersions'>) => Promise<ReturnTypeFrom<'getCompatibleElasticsearchVersions'>>  = async params => {
  // undefined
    return this.client.getCompatibleElasticsearchVersions(params as any).promise();
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

  listElasticsearchInstanceTypes: (params: RawParamsFrom<'listElasticsearchInstanceTypes'>) => Promise<ReturnTypeFrom<'listElasticsearchInstanceTypes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listElasticsearchInstanceTypes(params as any).promise();
  }

  listElasticsearchVersions: (params: RawParamsFrom<'listElasticsearchVersions'>) => Promise<ReturnTypeFrom<'listElasticsearchVersions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listElasticsearchVersions(params as any).promise();
  }

  listPackagesForDomain: (params: RawParamsFrom<'listPackagesForDomain'>) => Promise<ReturnTypeFrom<'listPackagesForDomain'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPackagesForDomain(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // undefined
    return this.client.listTags(params as any).promise();
  }

  purchaseReservedElasticsearchInstanceOffering: (params: RawParamsFrom<'purchaseReservedElasticsearchInstanceOffering'>) => Promise<ReturnTypeFrom<'purchaseReservedElasticsearchInstanceOffering'>>  = async params => {
  // undefined
    return this.client.purchaseReservedElasticsearchInstanceOffering(params as any).promise();
  }

  rejectInboundCrossClusterSearchConnection: (params: RawParamsFrom<'rejectInboundCrossClusterSearchConnection'>) => Promise<ReturnTypeFrom<'rejectInboundCrossClusterSearchConnection'>>  = async params => {
  // undefined
    return this.client.rejectInboundCrossClusterSearchConnection(params as any).promise();
  }

  removeTags: (params: RawParamsFrom<'removeTags'>) => Promise<ReturnTypeFrom<'removeTags'>>  = async params => {
  // undefined
    return this.client.removeTags(params as any).promise();
  }

  startElasticsearchServiceSoftwareUpdate: (params: RawParamsFrom<'startElasticsearchServiceSoftwareUpdate'>) => Promise<ReturnTypeFrom<'startElasticsearchServiceSoftwareUpdate'>>  = async params => {
  // undefined
    return this.client.startElasticsearchServiceSoftwareUpdate(params as any).promise();
  }

  updateElasticsearchDomainConfig: (params: RawParamsFrom<'updateElasticsearchDomainConfig'>) => Promise<ReturnTypeFrom<'updateElasticsearchDomainConfig'>>  = async params => {
  // undefined
    return this.client.updateElasticsearchDomainConfig(params as any).promise();
  }

  updatePackage: (params: RawParamsFrom<'updatePackage'>) => Promise<ReturnTypeFrom<'updatePackage'>>  = async params => {
  // undefined
    return this.client.updatePackage(params as any).promise();
  }

  upgradeElasticsearchDomain: (params: RawParamsFrom<'upgradeElasticsearchDomain'>) => Promise<ReturnTypeFrom<'upgradeElasticsearchDomain'>>  = async params => {
  // undefined
    return this.client.upgradeElasticsearchDomain(params as any).promise();
  }
  
  static fromClient(client: AWSES): ES {
    return new ES(client) as any;
  }
  
  static client(options?: AWSES.Types.ClientConfiguration): ES {
    return new ES(new AWSES(options)) as any;
  }
}  
