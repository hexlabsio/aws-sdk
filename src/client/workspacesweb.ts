import { Request, WorkSpacesWeb as AWSWorkSpacesWeb } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWorkSpacesWeb> = AWSWorkSpacesWeb[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWorkSpacesWeb> = AWSWorkSpacesWeb[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWorkSpacesWeb[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWorkSpacesWeb, Extras> = AWSWorkSpacesWeb[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWorkSpacesWeb> = AWSWorkSpacesWeb[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class WorkSpacesWeb {
  private constructor(private readonly client: AWSWorkSpacesWeb) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workspaces-web' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listBrowserSettings","listNetworkSettings","listPortals","listTrustStores","listUserAccessLoggingSettings","listUserSettings"] as const;
  
  associateBrowserSettings: (params: RawParamsFrom<'associateBrowserSettings'>) => Promise<ReturnTypeFrom<'associateBrowserSettings'>>  = async params => {
  // undefined
    return this.client.associateBrowserSettings(params as any).promise();
  }

  associateNetworkSettings: (params: RawParamsFrom<'associateNetworkSettings'>) => Promise<ReturnTypeFrom<'associateNetworkSettings'>>  = async params => {
  // undefined
    return this.client.associateNetworkSettings(params as any).promise();
  }

  associateTrustStore: (params: RawParamsFrom<'associateTrustStore'>) => Promise<ReturnTypeFrom<'associateTrustStore'>>  = async params => {
  // undefined
    return this.client.associateTrustStore(params as any).promise();
  }

  associateUserAccessLoggingSettings: (params: RawParamsFrom<'associateUserAccessLoggingSettings'>) => Promise<ReturnTypeFrom<'associateUserAccessLoggingSettings'>>  = async params => {
  // undefined
    return this.client.associateUserAccessLoggingSettings(params as any).promise();
  }

  associateUserSettings: (params: RawParamsFrom<'associateUserSettings'>) => Promise<ReturnTypeFrom<'associateUserSettings'>>  = async params => {
  // undefined
    return this.client.associateUserSettings(params as any).promise();
  }

  createBrowserSettings: (params: RawParamsFrom<'createBrowserSettings'>) => Promise<ReturnTypeFrom<'createBrowserSettings'>>  = async params => {
  // undefined
    return this.client.createBrowserSettings(params as any).promise();
  }

  createIdentityProvider: (params: RawParamsFrom<'createIdentityProvider'>) => Promise<ReturnTypeFrom<'createIdentityProvider'>>  = async params => {
  // undefined
    return this.client.createIdentityProvider(params as any).promise();
  }

  createNetworkSettings: (params: RawParamsFrom<'createNetworkSettings'>) => Promise<ReturnTypeFrom<'createNetworkSettings'>>  = async params => {
  // undefined
    return this.client.createNetworkSettings(params as any).promise();
  }

  createPortal: (params: RawParamsFrom<'createPortal'>) => Promise<ReturnTypeFrom<'createPortal'>>  = async params => {
  // undefined
    return this.client.createPortal(params as any).promise();
  }

  createTrustStore: (params: RawParamsFrom<'createTrustStore'>) => Promise<ReturnTypeFrom<'createTrustStore'>>  = async params => {
  // undefined
    return this.client.createTrustStore(params as any).promise();
  }

  createUserAccessLoggingSettings: (params: RawParamsFrom<'createUserAccessLoggingSettings'>) => Promise<ReturnTypeFrom<'createUserAccessLoggingSettings'>>  = async params => {
  // undefined
    return this.client.createUserAccessLoggingSettings(params as any).promise();
  }

  createUserSettings: (params: RawParamsFrom<'createUserSettings'>) => Promise<ReturnTypeFrom<'createUserSettings'>>  = async params => {
  // undefined
    return this.client.createUserSettings(params as any).promise();
  }

  deleteBrowserSettings: (params: RawParamsFrom<'deleteBrowserSettings'>) => Promise<ReturnTypeFrom<'deleteBrowserSettings'>>  = async params => {
  // undefined
    return this.client.deleteBrowserSettings(params as any).promise();
  }

  deleteIdentityProvider: (params: RawParamsFrom<'deleteIdentityProvider'>) => Promise<ReturnTypeFrom<'deleteIdentityProvider'>>  = async params => {
  // undefined
    return this.client.deleteIdentityProvider(params as any).promise();
  }

  deleteNetworkSettings: (params: RawParamsFrom<'deleteNetworkSettings'>) => Promise<ReturnTypeFrom<'deleteNetworkSettings'>>  = async params => {
  // undefined
    return this.client.deleteNetworkSettings(params as any).promise();
  }

  deletePortal: (params: RawParamsFrom<'deletePortal'>) => Promise<ReturnTypeFrom<'deletePortal'>>  = async params => {
  // undefined
    return this.client.deletePortal(params as any).promise();
  }

  deleteTrustStore: (params: RawParamsFrom<'deleteTrustStore'>) => Promise<ReturnTypeFrom<'deleteTrustStore'>>  = async params => {
  // undefined
    return this.client.deleteTrustStore(params as any).promise();
  }

  deleteUserAccessLoggingSettings: (params: RawParamsFrom<'deleteUserAccessLoggingSettings'>) => Promise<ReturnTypeFrom<'deleteUserAccessLoggingSettings'>>  = async params => {
  // undefined
    return this.client.deleteUserAccessLoggingSettings(params as any).promise();
  }

  deleteUserSettings: (params: RawParamsFrom<'deleteUserSettings'>) => Promise<ReturnTypeFrom<'deleteUserSettings'>>  = async params => {
  // undefined
    return this.client.deleteUserSettings(params as any).promise();
  }

  disassociateBrowserSettings: (params: RawParamsFrom<'disassociateBrowserSettings'>) => Promise<ReturnTypeFrom<'disassociateBrowserSettings'>>  = async params => {
  // undefined
    return this.client.disassociateBrowserSettings(params as any).promise();
  }

  disassociateNetworkSettings: (params: RawParamsFrom<'disassociateNetworkSettings'>) => Promise<ReturnTypeFrom<'disassociateNetworkSettings'>>  = async params => {
  // undefined
    return this.client.disassociateNetworkSettings(params as any).promise();
  }

  disassociateTrustStore: (params: RawParamsFrom<'disassociateTrustStore'>) => Promise<ReturnTypeFrom<'disassociateTrustStore'>>  = async params => {
  // undefined
    return this.client.disassociateTrustStore(params as any).promise();
  }

  disassociateUserAccessLoggingSettings: (params: RawParamsFrom<'disassociateUserAccessLoggingSettings'>) => Promise<ReturnTypeFrom<'disassociateUserAccessLoggingSettings'>>  = async params => {
  // undefined
    return this.client.disassociateUserAccessLoggingSettings(params as any).promise();
  }

  disassociateUserSettings: (params: RawParamsFrom<'disassociateUserSettings'>) => Promise<ReturnTypeFrom<'disassociateUserSettings'>>  = async params => {
  // undefined
    return this.client.disassociateUserSettings(params as any).promise();
  }

  getBrowserSettings: (params: RawParamsFrom<'getBrowserSettings'>) => Promise<ReturnTypeFrom<'getBrowserSettings'>>  = async params => {
  // undefined
    return this.client.getBrowserSettings(params as any).promise();
  }

  getIdentityProvider: (params: RawParamsFrom<'getIdentityProvider'>) => Promise<ReturnTypeFrom<'getIdentityProvider'>>  = async params => {
  // undefined
    return this.client.getIdentityProvider(params as any).promise();
  }

  getNetworkSettings: (params: RawParamsFrom<'getNetworkSettings'>) => Promise<ReturnTypeFrom<'getNetworkSettings'>>  = async params => {
  // undefined
    return this.client.getNetworkSettings(params as any).promise();
  }

  getPortal: (params: RawParamsFrom<'getPortal'>) => Promise<ReturnTypeFrom<'getPortal'>>  = async params => {
  // undefined
    return this.client.getPortal(params as any).promise();
  }

  getPortalServiceProviderMetadata: (params: RawParamsFrom<'getPortalServiceProviderMetadata'>) => Promise<ReturnTypeFrom<'getPortalServiceProviderMetadata'>>  = async params => {
  // undefined
    return this.client.getPortalServiceProviderMetadata(params as any).promise();
  }

  getTrustStore: (params: RawParamsFrom<'getTrustStore'>) => Promise<ReturnTypeFrom<'getTrustStore'>>  = async params => {
  // undefined
    return this.client.getTrustStore(params as any).promise();
  }

  getTrustStoreCertificate: (params: RawParamsFrom<'getTrustStoreCertificate'>) => Promise<ReturnTypeFrom<'getTrustStoreCertificate'>>  = async params => {
  // undefined
    return this.client.getTrustStoreCertificate(params as any).promise();
  }

  getUserAccessLoggingSettings: (params: RawParamsFrom<'getUserAccessLoggingSettings'>) => Promise<ReturnTypeFrom<'getUserAccessLoggingSettings'>>  = async params => {
  // undefined
    return this.client.getUserAccessLoggingSettings(params as any).promise();
  }

  getUserSettings: (params: RawParamsFrom<'getUserSettings'>) => Promise<ReturnTypeFrom<'getUserSettings'>>  = async params => {
  // undefined
    return this.client.getUserSettings(params as any).promise();
  }

  listBrowserSettings: (params: RawParamsFrom<'listBrowserSettings'>) => Promise<ReturnTypeFrom<'listBrowserSettings'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBrowserSettings(params as any).promise();
  }

  listIdentityProviders: (params: RawParamsFrom<'listIdentityProviders'>) => Promise<ReturnTypeFrom<'listIdentityProviders'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listIdentityProviders(params as any).promise();
  }

  listNetworkSettings: (params: RawParamsFrom<'listNetworkSettings'>) => Promise<ReturnTypeFrom<'listNetworkSettings'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listNetworkSettings(params as any).promise();
  }

  listPortals: (params: RawParamsFrom<'listPortals'>) => Promise<ReturnTypeFrom<'listPortals'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPortals(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTrustStoreCertificates: (params: RawParamsFrom<'listTrustStoreCertificates'>) => Promise<ReturnTypeFrom<'listTrustStoreCertificates'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTrustStoreCertificates(params as any).promise();
  }

  listTrustStores: (params: RawParamsFrom<'listTrustStores'>) => Promise<ReturnTypeFrom<'listTrustStores'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTrustStores(params as any).promise();
  }

  listUserAccessLoggingSettings: (params: RawParamsFrom<'listUserAccessLoggingSettings'>) => Promise<ReturnTypeFrom<'listUserAccessLoggingSettings'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listUserAccessLoggingSettings(params as any).promise();
  }

  listUserSettings: (params: RawParamsFrom<'listUserSettings'>) => Promise<ReturnTypeFrom<'listUserSettings'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listUserSettings(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateBrowserSettings: (params: RawParamsFrom<'updateBrowserSettings'>) => Promise<ReturnTypeFrom<'updateBrowserSettings'>>  = async params => {
  // undefined
    return this.client.updateBrowserSettings(params as any).promise();
  }

  updateIdentityProvider: (params: RawParamsFrom<'updateIdentityProvider'>) => Promise<ReturnTypeFrom<'updateIdentityProvider'>>  = async params => {
  // undefined
    return this.client.updateIdentityProvider(params as any).promise();
  }

  updateNetworkSettings: (params: RawParamsFrom<'updateNetworkSettings'>) => Promise<ReturnTypeFrom<'updateNetworkSettings'>>  = async params => {
  // undefined
    return this.client.updateNetworkSettings(params as any).promise();
  }

  updatePortal: (params: RawParamsFrom<'updatePortal'>) => Promise<ReturnTypeFrom<'updatePortal'>>  = async params => {
  // undefined
    return this.client.updatePortal(params as any).promise();
  }

  updateTrustStore: (params: RawParamsFrom<'updateTrustStore'>) => Promise<ReturnTypeFrom<'updateTrustStore'>>  = async params => {
  // undefined
    return this.client.updateTrustStore(params as any).promise();
  }

  updateUserAccessLoggingSettings: (params: RawParamsFrom<'updateUserAccessLoggingSettings'>) => Promise<ReturnTypeFrom<'updateUserAccessLoggingSettings'>>  = async params => {
  // undefined
    return this.client.updateUserAccessLoggingSettings(params as any).promise();
  }

  updateUserSettings: (params: RawParamsFrom<'updateUserSettings'>) => Promise<ReturnTypeFrom<'updateUserSettings'>>  = async params => {
  // undefined
    return this.client.updateUserSettings(params as any).promise();
  }
  
  static fromClient(client: AWSWorkSpacesWeb): WorkSpacesWeb {
    return new WorkSpacesWeb(client) as any;
  }
  
  static client(options?: AWSWorkSpacesWeb.Types.ClientConfiguration): WorkSpacesWeb {
    return new WorkSpacesWeb(new AWSWorkSpacesWeb(options)) as any;
  }
}  
