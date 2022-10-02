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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'worklink';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listFleets"];
    
  associateDomain: FunctionTypeFrom<'associateDomain'>;

  associateWebsiteAuthorizationProvider: FunctionTypeFrom<'associateWebsiteAuthorizationProvider'>;

  associateWebsiteCertificateAuthority: FunctionTypeFrom<'associateWebsiteCertificateAuthority'>;

  createFleet: FunctionTypeFrom<'createFleet'>;

  deleteFleet: FunctionTypeFrom<'deleteFleet'>;

  describeAuditStreamConfiguration: FunctionTypeFrom<'describeAuditStreamConfiguration'>;

  describeCompanyNetworkConfiguration: FunctionTypeFrom<'describeCompanyNetworkConfiguration'>;

  describeDevice: FunctionTypeFrom<'describeDevice'>;

  describeDevicePolicyConfiguration: FunctionTypeFrom<'describeDevicePolicyConfiguration'>;

  describeDomain: FunctionTypeFrom<'describeDomain'>;

  describeFleetMetadata: FunctionTypeFrom<'describeFleetMetadata'>;

  describeIdentityProviderConfiguration: FunctionTypeFrom<'describeIdentityProviderConfiguration'>;

  describeWebsiteCertificateAuthority: FunctionTypeFrom<'describeWebsiteCertificateAuthority'>;

  disassociateDomain: FunctionTypeFrom<'disassociateDomain'>;

  disassociateWebsiteAuthorizationProvider: FunctionTypeFrom<'disassociateWebsiteAuthorizationProvider'>;

  disassociateWebsiteCertificateAuthority: FunctionTypeFrom<'disassociateWebsiteCertificateAuthority'>;

  listDevices: FunctionTypeFrom<'listDevices'>;

  listDomains: FunctionTypeFrom<'listDomains'>;

  listFleets: FunctionTypeFrom<'listFleets'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWebsiteAuthorizationProviders: FunctionTypeFrom<'listWebsiteAuthorizationProviders'>;

  listWebsiteCertificateAuthorities: FunctionTypeFrom<'listWebsiteCertificateAuthorities'>;

  restoreDomainAccess: FunctionTypeFrom<'restoreDomainAccess'>;

  revokeDomainAccess: FunctionTypeFrom<'revokeDomainAccess'>;

  signOutUser: FunctionTypeFrom<'signOutUser'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAuditStreamConfiguration: FunctionTypeFrom<'updateAuditStreamConfiguration'>;

  updateCompanyNetworkConfiguration: FunctionTypeFrom<'updateCompanyNetworkConfiguration'>;

  updateDevicePolicyConfiguration: FunctionTypeFrom<'updateDevicePolicyConfiguration'>;

  updateDomainMetadata: FunctionTypeFrom<'updateDomainMetadata'>;

  updateFleetMetadata: FunctionTypeFrom<'updateFleetMetadata'>;

  updateIdentityProviderConfiguration: FunctionTypeFrom<'updateIdentityProviderConfiguration'>
}
 
export class WorkLink implements ClientType {
  private constructor(private readonly client: AWSWorkLink) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'worklink';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listFleets"] as const;
  
  async associateDomain(...args: any): Promise<any> {
  // undefined
    return this.client.associateDomain(...args).promise()
  }

  async associateWebsiteAuthorizationProvider(...args: any): Promise<any> {
  // undefined
    return this.client.associateWebsiteAuthorizationProvider(...args).promise()
  }

  async associateWebsiteCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.associateWebsiteCertificateAuthority(...args).promise()
  }

  async createFleet(...args: any): Promise<any> {
  // undefined
    return this.client.createFleet(...args).promise()
  }

  async deleteFleet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleet(...args).promise()
  }

  async describeAuditStreamConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeAuditStreamConfiguration(...args).promise()
  }

  async describeCompanyNetworkConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeCompanyNetworkConfiguration(...args).promise()
  }

  async describeDevice(...args: any): Promise<any> {
  // undefined
    return this.client.describeDevice(...args).promise()
  }

  async describeDevicePolicyConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeDevicePolicyConfiguration(...args).promise()
  }

  async describeDomain(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomain(...args).promise()
  }

  async describeFleetMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleetMetadata(...args).promise()
  }

  async describeIdentityProviderConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdentityProviderConfiguration(...args).promise()
  }

  async describeWebsiteCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.describeWebsiteCertificateAuthority(...args).promise()
  }

  async disassociateDomain(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateDomain(...args).promise()
  }

  async disassociateWebsiteAuthorizationProvider(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateWebsiteAuthorizationProvider(...args).promise()
  }

  async disassociateWebsiteCertificateAuthority(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateWebsiteCertificateAuthority(...args).promise()
  }

  async listDevices(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDevices(...args).promise()
  }

  async listDomains(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDomains(...args).promise()
  }

  async listFleets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFleets(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWebsiteAuthorizationProviders(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWebsiteAuthorizationProviders(...args).promise()
  }

  async listWebsiteCertificateAuthorities(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listWebsiteCertificateAuthorities(...args).promise()
  }

  async restoreDomainAccess(...args: any): Promise<any> {
  // undefined
    return this.client.restoreDomainAccess(...args).promise()
  }

  async revokeDomainAccess(...args: any): Promise<any> {
  // undefined
    return this.client.revokeDomainAccess(...args).promise()
  }

  async signOutUser(...args: any): Promise<any> {
  // undefined
    return this.client.signOutUser(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAuditStreamConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateAuditStreamConfiguration(...args).promise()
  }

  async updateCompanyNetworkConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateCompanyNetworkConfiguration(...args).promise()
  }

  async updateDevicePolicyConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateDevicePolicyConfiguration(...args).promise()
  }

  async updateDomainMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainMetadata(...args).promise()
  }

  async updateFleetMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateFleetMetadata(...args).promise()
  }

  async updateIdentityProviderConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateIdentityProviderConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSWorkLink): ClientType {
    return new WorkLink(client) as any;
  }
  
  static client(options?: AWSWorkLink.Types.ClientConfiguration): ClientType {
    return new WorkLink(new AWSWorkLink(options)) as any;
  }
}  
