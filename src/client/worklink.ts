import { Request, WorkLink as AWSWorkLink } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWorkLink> = AWSWorkLink[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWorkLink> = AWSWorkLink[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWorkLink[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWorkLink, Extras> = AWSWorkLink[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWorkLink> = AWSWorkLink[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WorkLink {
  private constructor(private readonly client: AWSWorkLink) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'worklink' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listFleets"] as const;
  
  associateDomain: (params: RawParamsFrom<'associateDomain'>) => Promise<ReturnTypeFrom<'associateDomain'>>  = async params => {
  // undefined
    return this.client.associateDomain(params as any).promise();
  }

  associateWebsiteAuthorizationProvider: (params: RawParamsFrom<'associateWebsiteAuthorizationProvider'>) => Promise<ReturnTypeFrom<'associateWebsiteAuthorizationProvider'>>  = async params => {
  // undefined
    return this.client.associateWebsiteAuthorizationProvider(params as any).promise();
  }

  associateWebsiteCertificateAuthority: (params: RawParamsFrom<'associateWebsiteCertificateAuthority'>) => Promise<ReturnTypeFrom<'associateWebsiteCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.associateWebsiteCertificateAuthority(params as any).promise();
  }

  createFleet: (params: RawParamsFrom<'createFleet'>) => Promise<ReturnTypeFrom<'createFleet'>>  = async params => {
  // undefined
    return this.client.createFleet(params as any).promise();
  }

  deleteFleet: (params: RawParamsFrom<'deleteFleet'>) => Promise<ReturnTypeFrom<'deleteFleet'>>  = async params => {
  // undefined
    return this.client.deleteFleet(params as any).promise();
  }

  describeAuditStreamConfiguration: (params: RawParamsFrom<'describeAuditStreamConfiguration'>) => Promise<ReturnTypeFrom<'describeAuditStreamConfiguration'>>  = async params => {
  // undefined
    return this.client.describeAuditStreamConfiguration(params as any).promise();
  }

  describeCompanyNetworkConfiguration: (params: RawParamsFrom<'describeCompanyNetworkConfiguration'>) => Promise<ReturnTypeFrom<'describeCompanyNetworkConfiguration'>>  = async params => {
  // undefined
    return this.client.describeCompanyNetworkConfiguration(params as any).promise();
  }

  describeDevice: (params: RawParamsFrom<'describeDevice'>) => Promise<ReturnTypeFrom<'describeDevice'>>  = async params => {
  // undefined
    return this.client.describeDevice(params as any).promise();
  }

  describeDevicePolicyConfiguration: (params: RawParamsFrom<'describeDevicePolicyConfiguration'>) => Promise<ReturnTypeFrom<'describeDevicePolicyConfiguration'>>  = async params => {
  // undefined
    return this.client.describeDevicePolicyConfiguration(params as any).promise();
  }

  describeDomain: (params: RawParamsFrom<'describeDomain'>) => Promise<ReturnTypeFrom<'describeDomain'>>  = async params => {
  // undefined
    return this.client.describeDomain(params as any).promise();
  }

  describeFleetMetadata: (params: RawParamsFrom<'describeFleetMetadata'>) => Promise<ReturnTypeFrom<'describeFleetMetadata'>>  = async params => {
  // undefined
    return this.client.describeFleetMetadata(params as any).promise();
  }

  describeIdentityProviderConfiguration: (params: RawParamsFrom<'describeIdentityProviderConfiguration'>) => Promise<ReturnTypeFrom<'describeIdentityProviderConfiguration'>>  = async params => {
  // undefined
    return this.client.describeIdentityProviderConfiguration(params as any).promise();
  }

  describeWebsiteCertificateAuthority: (params: RawParamsFrom<'describeWebsiteCertificateAuthority'>) => Promise<ReturnTypeFrom<'describeWebsiteCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.describeWebsiteCertificateAuthority(params as any).promise();
  }

  disassociateDomain: (params: RawParamsFrom<'disassociateDomain'>) => Promise<ReturnTypeFrom<'disassociateDomain'>>  = async params => {
  // undefined
    return this.client.disassociateDomain(params as any).promise();
  }

  disassociateWebsiteAuthorizationProvider: (params: RawParamsFrom<'disassociateWebsiteAuthorizationProvider'>) => Promise<ReturnTypeFrom<'disassociateWebsiteAuthorizationProvider'>>  = async params => {
  // undefined
    return this.client.disassociateWebsiteAuthorizationProvider(params as any).promise();
  }

  disassociateWebsiteCertificateAuthority: (params: RawParamsFrom<'disassociateWebsiteCertificateAuthority'>) => Promise<ReturnTypeFrom<'disassociateWebsiteCertificateAuthority'>>  = async params => {
  // undefined
    return this.client.disassociateWebsiteCertificateAuthority(params as any).promise();
  }

  listDevices: (params: RawParamsFrom<'listDevices'>) => Promise<ReturnTypeFrom<'listDevices'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevices(params as any).promise();
  }

  listDomains: (params: RawParamsFrom<'listDomains'>) => Promise<ReturnTypeFrom<'listDomains'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDomains(params as any).promise();
  }

  listFleets: (params: RawParamsFrom<'listFleets'>) => Promise<ReturnTypeFrom<'listFleets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFleets(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listWebsiteAuthorizationProviders: (params: RawParamsFrom<'listWebsiteAuthorizationProviders'>) => Promise<ReturnTypeFrom<'listWebsiteAuthorizationProviders'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWebsiteAuthorizationProviders(params as any).promise();
  }

  listWebsiteCertificateAuthorities: (params: RawParamsFrom<'listWebsiteCertificateAuthorities'>) => Promise<ReturnTypeFrom<'listWebsiteCertificateAuthorities'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWebsiteCertificateAuthorities(params as any).promise();
  }

  restoreDomainAccess: (params: RawParamsFrom<'restoreDomainAccess'>) => Promise<ReturnTypeFrom<'restoreDomainAccess'>>  = async params => {
  // undefined
    return this.client.restoreDomainAccess(params as any).promise();
  }

  revokeDomainAccess: (params: RawParamsFrom<'revokeDomainAccess'>) => Promise<ReturnTypeFrom<'revokeDomainAccess'>>  = async params => {
  // undefined
    return this.client.revokeDomainAccess(params as any).promise();
  }

  signOutUser: (params: RawParamsFrom<'signOutUser'>) => Promise<ReturnTypeFrom<'signOutUser'>>  = async params => {
  // undefined
    return this.client.signOutUser(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAuditStreamConfiguration: (params: RawParamsFrom<'updateAuditStreamConfiguration'>) => Promise<ReturnTypeFrom<'updateAuditStreamConfiguration'>>  = async params => {
  // undefined
    return this.client.updateAuditStreamConfiguration(params as any).promise();
  }

  updateCompanyNetworkConfiguration: (params: RawParamsFrom<'updateCompanyNetworkConfiguration'>) => Promise<ReturnTypeFrom<'updateCompanyNetworkConfiguration'>>  = async params => {
  // undefined
    return this.client.updateCompanyNetworkConfiguration(params as any).promise();
  }

  updateDevicePolicyConfiguration: (params: RawParamsFrom<'updateDevicePolicyConfiguration'>) => Promise<ReturnTypeFrom<'updateDevicePolicyConfiguration'>>  = async params => {
  // undefined
    return this.client.updateDevicePolicyConfiguration(params as any).promise();
  }

  updateDomainMetadata: (params: RawParamsFrom<'updateDomainMetadata'>) => Promise<ReturnTypeFrom<'updateDomainMetadata'>>  = async params => {
  // undefined
    return this.client.updateDomainMetadata(params as any).promise();
  }

  updateFleetMetadata: (params: RawParamsFrom<'updateFleetMetadata'>) => Promise<ReturnTypeFrom<'updateFleetMetadata'>>  = async params => {
  // undefined
    return this.client.updateFleetMetadata(params as any).promise();
  }

  updateIdentityProviderConfiguration: (params: RawParamsFrom<'updateIdentityProviderConfiguration'>) => Promise<ReturnTypeFrom<'updateIdentityProviderConfiguration'>>  = async params => {
  // undefined
    return this.client.updateIdentityProviderConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSWorkLink): WorkLink {
    return new WorkLink(client) as any;
  }
  
  static client(options?: AWSWorkLink.Types.ClientConfiguration): WorkLink {
    return new WorkLink(new AWSWorkLink(options)) as any;
  }
}  
