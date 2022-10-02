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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'workspaces-web';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listBrowserSettings","listNetworkSettings","listPortals","listTrustStores","listUserSettings"];
    
  associateBrowserSettings: FunctionTypeFrom<'associateBrowserSettings'>;

  associateNetworkSettings: FunctionTypeFrom<'associateNetworkSettings'>;

  associateTrustStore: FunctionTypeFrom<'associateTrustStore'>;

  associateUserSettings: FunctionTypeFrom<'associateUserSettings'>;

  createBrowserSettings: FunctionTypeFrom<'createBrowserSettings'>;

  createIdentityProvider: FunctionTypeFrom<'createIdentityProvider'>;

  createNetworkSettings: FunctionTypeFrom<'createNetworkSettings'>;

  createPortal: FunctionTypeFrom<'createPortal'>;

  createTrustStore: FunctionTypeFrom<'createTrustStore'>;

  createUserSettings: FunctionTypeFrom<'createUserSettings'>;

  deleteBrowserSettings: FunctionTypeFrom<'deleteBrowserSettings'>;

  deleteIdentityProvider: FunctionTypeFrom<'deleteIdentityProvider'>;

  deleteNetworkSettings: FunctionTypeFrom<'deleteNetworkSettings'>;

  deletePortal: FunctionTypeFrom<'deletePortal'>;

  deleteTrustStore: FunctionTypeFrom<'deleteTrustStore'>;

  deleteUserSettings: FunctionTypeFrom<'deleteUserSettings'>;

  disassociateBrowserSettings: FunctionTypeFrom<'disassociateBrowserSettings'>;

  disassociateNetworkSettings: FunctionTypeFrom<'disassociateNetworkSettings'>;

  disassociateTrustStore: FunctionTypeFrom<'disassociateTrustStore'>;

  disassociateUserSettings: FunctionTypeFrom<'disassociateUserSettings'>;

  getBrowserSettings: FunctionTypeFrom<'getBrowserSettings'>;

  getIdentityProvider: FunctionTypeFrom<'getIdentityProvider'>;

  getNetworkSettings: FunctionTypeFrom<'getNetworkSettings'>;

  getPortal: FunctionTypeFrom<'getPortal'>;

  getPortalServiceProviderMetadata: FunctionTypeFrom<'getPortalServiceProviderMetadata'>;

  getTrustStore: FunctionTypeFrom<'getTrustStore'>;

  getTrustStoreCertificate: FunctionTypeFrom<'getTrustStoreCertificate'>;

  getUserSettings: FunctionTypeFrom<'getUserSettings'>;

  listBrowserSettings: FunctionTypeFrom<'listBrowserSettings'>;

  listIdentityProviders: FunctionTypeFrom<'listIdentityProviders'>;

  listNetworkSettings: FunctionTypeFrom<'listNetworkSettings'>;

  listPortals: FunctionTypeFrom<'listPortals'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTrustStoreCertificates: FunctionTypeFrom<'listTrustStoreCertificates'>;

  listTrustStores: FunctionTypeFrom<'listTrustStores'>;

  listUserSettings: FunctionTypeFrom<'listUserSettings'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateBrowserSettings: FunctionTypeFrom<'updateBrowserSettings'>;

  updateIdentityProvider: FunctionTypeFrom<'updateIdentityProvider'>;

  updateNetworkSettings: FunctionTypeFrom<'updateNetworkSettings'>;

  updatePortal: FunctionTypeFrom<'updatePortal'>;

  updateTrustStore: FunctionTypeFrom<'updateTrustStore'>;

  updateUserSettings: FunctionTypeFrom<'updateUserSettings'>
}
 
export class WorkSpacesWeb implements ClientType {
  private constructor(private readonly client: AWSWorkSpacesWeb) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'workspaces-web';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listBrowserSettings","listNetworkSettings","listPortals","listTrustStores","listUserSettings"] as const;
  
  async associateBrowserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.associateBrowserSettings(...args).promise()
  }

  async associateNetworkSettings(...args: any): Promise<any> {
  // undefined
    return this.client.associateNetworkSettings(...args).promise()
  }

  async associateTrustStore(...args: any): Promise<any> {
  // undefined
    return this.client.associateTrustStore(...args).promise()
  }

  async associateUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.associateUserSettings(...args).promise()
  }

  async createBrowserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.createBrowserSettings(...args).promise()
  }

  async createIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.createIdentityProvider(...args).promise()
  }

  async createNetworkSettings(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkSettings(...args).promise()
  }

  async createPortal(...args: any): Promise<any> {
  // undefined
    return this.client.createPortal(...args).promise()
  }

  async createTrustStore(...args: any): Promise<any> {
  // undefined
    return this.client.createTrustStore(...args).promise()
  }

  async createUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.createUserSettings(...args).promise()
  }

  async deleteBrowserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBrowserSettings(...args).promise()
  }

  async deleteIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIdentityProvider(...args).promise()
  }

  async deleteNetworkSettings(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkSettings(...args).promise()
  }

  async deletePortal(...args: any): Promise<any> {
  // undefined
    return this.client.deletePortal(...args).promise()
  }

  async deleteTrustStore(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrustStore(...args).promise()
  }

  async deleteUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserSettings(...args).promise()
  }

  async disassociateBrowserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateBrowserSettings(...args).promise()
  }

  async disassociateNetworkSettings(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateNetworkSettings(...args).promise()
  }

  async disassociateTrustStore(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTrustStore(...args).promise()
  }

  async disassociateUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateUserSettings(...args).promise()
  }

  async getBrowserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getBrowserSettings(...args).promise()
  }

  async getIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityProvider(...args).promise()
  }

  async getNetworkSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkSettings(...args).promise()
  }

  async getPortal(...args: any): Promise<any> {
  // undefined
    return this.client.getPortal(...args).promise()
  }

  async getPortalServiceProviderMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getPortalServiceProviderMetadata(...args).promise()
  }

  async getTrustStore(...args: any): Promise<any> {
  // undefined
    return this.client.getTrustStore(...args).promise()
  }

  async getTrustStoreCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.getTrustStoreCertificate(...args).promise()
  }

  async getUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getUserSettings(...args).promise()
  }

  async listBrowserSettings(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBrowserSettings(...args).promise()
  }

  async listIdentityProviders(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listIdentityProviders(...args).promise()
  }

  async listNetworkSettings(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listNetworkSettings(...args).promise()
  }

  async listPortals(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPortals(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTrustStoreCertificates(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTrustStoreCertificates(...args).promise()
  }

  async listTrustStores(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTrustStores(...args).promise()
  }

  async listUserSettings(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listUserSettings(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateBrowserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateBrowserSettings(...args).promise()
  }

  async updateIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.updateIdentityProvider(...args).promise()
  }

  async updateNetworkSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateNetworkSettings(...args).promise()
  }

  async updatePortal(...args: any): Promise<any> {
  // undefined
    return this.client.updatePortal(...args).promise()
  }

  async updateTrustStore(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrustStore(...args).promise()
  }

  async updateUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserSettings(...args).promise()
  }
  
  static fromClient(client: AWSWorkSpacesWeb): ClientType {
    return new WorkSpacesWeb(client) as any;
  }
  
  static client(options?: AWSWorkSpacesWeb.Types.ClientConfiguration): ClientType {
    return new WorkSpacesWeb(new AWSWorkSpacesWeb(options)) as any;
  }
}  
