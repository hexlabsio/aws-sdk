import { Request, LicenseManager as AWSLicenseManager } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLicenseManager> = AWSLicenseManager[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLicenseManager> = AWSLicenseManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLicenseManager[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLicenseManager, Extras> = AWSLicenseManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'license-manager';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly [];
    
  acceptGrant: FunctionTypeFrom<'acceptGrant'>;

  checkInLicense: FunctionTypeFrom<'checkInLicense'>;

  checkoutBorrowLicense: FunctionTypeFrom<'checkoutBorrowLicense'>;

  checkoutLicense: FunctionTypeFrom<'checkoutLicense'>;

  createGrant: FunctionTypeFrom<'createGrant'>;

  createGrantVersion: FunctionTypeFrom<'createGrantVersion'>;

  createLicense: FunctionTypeFrom<'createLicense'>;

  createLicenseConfiguration: FunctionTypeFrom<'createLicenseConfiguration'>;

  createLicenseConversionTaskForResource: FunctionTypeFrom<'createLicenseConversionTaskForResource'>;

  createLicenseManagerReportGenerator: FunctionTypeFrom<'createLicenseManagerReportGenerator'>;

  createLicenseVersion: FunctionTypeFrom<'createLicenseVersion'>;

  createToken: FunctionTypeFrom<'createToken'>;

  deleteGrant: FunctionTypeFrom<'deleteGrant'>;

  deleteLicense: FunctionTypeFrom<'deleteLicense'>;

  deleteLicenseConfiguration: FunctionTypeFrom<'deleteLicenseConfiguration'>;

  deleteLicenseManagerReportGenerator: FunctionTypeFrom<'deleteLicenseManagerReportGenerator'>;

  deleteToken: FunctionTypeFrom<'deleteToken'>;

  extendLicenseConsumption: FunctionTypeFrom<'extendLicenseConsumption'>;

  getAccessToken: FunctionTypeFrom<'getAccessToken'>;

  getGrant: FunctionTypeFrom<'getGrant'>;

  getLicense: FunctionTypeFrom<'getLicense'>;

  getLicenseConfiguration: FunctionTypeFrom<'getLicenseConfiguration'>;

  getLicenseConversionTask: FunctionTypeFrom<'getLicenseConversionTask'>;

  getLicenseManagerReportGenerator: FunctionTypeFrom<'getLicenseManagerReportGenerator'>;

  getLicenseUsage: FunctionTypeFrom<'getLicenseUsage'>;

  getServiceSettings: FunctionTypeFrom<'getServiceSettings'>;

  listAssociationsForLicenseConfiguration: FunctionTypeFrom<'listAssociationsForLicenseConfiguration'>;

  listDistributedGrants: FunctionTypeFrom<'listDistributedGrants'>;

  listFailuresForLicenseConfigurationOperations: FunctionTypeFrom<'listFailuresForLicenseConfigurationOperations'>;

  listLicenseConfigurations: FunctionTypeFrom<'listLicenseConfigurations'>;

  listLicenseConversionTasks: FunctionTypeFrom<'listLicenseConversionTasks'>;

  listLicenseManagerReportGenerators: FunctionTypeFrom<'listLicenseManagerReportGenerators'>;

  listLicenseSpecificationsForResource: FunctionTypeFrom<'listLicenseSpecificationsForResource'>;

  listLicenseVersions: FunctionTypeFrom<'listLicenseVersions'>;

  listLicenses: FunctionTypeFrom<'listLicenses'>;

  listReceivedGrants: FunctionTypeFrom<'listReceivedGrants'>;

  listReceivedLicenses: FunctionTypeFrom<'listReceivedLicenses'>;

  listResourceInventory: FunctionTypeFrom<'listResourceInventory'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTokens: FunctionTypeFrom<'listTokens'>;

  listUsageForLicenseConfiguration: FunctionTypeFrom<'listUsageForLicenseConfiguration'>;

  rejectGrant: FunctionTypeFrom<'rejectGrant'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateLicenseConfiguration: FunctionTypeFrom<'updateLicenseConfiguration'>;

  updateLicenseManagerReportGenerator: FunctionTypeFrom<'updateLicenseManagerReportGenerator'>;

  updateLicenseSpecificationsForResource: FunctionTypeFrom<'updateLicenseSpecificationsForResource'>;

  updateServiceSettings: FunctionTypeFrom<'updateServiceSettings'>
}
 
export class LicenseManager implements ClientType {
  private constructor(private readonly client: AWSLicenseManager) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'license-manager';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = [] as const;
  
  async acceptGrant(...args: any): Promise<any> {
  // undefined
    return this.client.acceptGrant(...args).promise()
  }

  async checkInLicense(...args: any): Promise<any> {
  // undefined
    return this.client.checkInLicense(...args).promise()
  }

  async checkoutBorrowLicense(...args: any): Promise<any> {
  // undefined
    return this.client.checkoutBorrowLicense(...args).promise()
  }

  async checkoutLicense(...args: any): Promise<any> {
  // undefined
    return this.client.checkoutLicense(...args).promise()
  }

  async createGrant(...args: any): Promise<any> {
  // undefined
    return this.client.createGrant(...args).promise()
  }

  async createGrantVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createGrantVersion(...args).promise()
  }

  async createLicense(...args: any): Promise<any> {
  // undefined
    return this.client.createLicense(...args).promise()
  }

  async createLicenseConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createLicenseConfiguration(...args).promise()
  }

  async createLicenseConversionTaskForResource(...args: any): Promise<any> {
  // undefined
    return this.client.createLicenseConversionTaskForResource(...args).promise()
  }

  async createLicenseManagerReportGenerator(...args: any): Promise<any> {
  // undefined
    return this.client.createLicenseManagerReportGenerator(...args).promise()
  }

  async createLicenseVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createLicenseVersion(...args).promise()
  }

  async createToken(...args: any): Promise<any> {
  // undefined
    return this.client.createToken(...args).promise()
  }

  async deleteGrant(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGrant(...args).promise()
  }

  async deleteLicense(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLicense(...args).promise()
  }

  async deleteLicenseConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLicenseConfiguration(...args).promise()
  }

  async deleteLicenseManagerReportGenerator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLicenseManagerReportGenerator(...args).promise()
  }

  async deleteToken(...args: any): Promise<any> {
  // undefined
    return this.client.deleteToken(...args).promise()
  }

  async extendLicenseConsumption(...args: any): Promise<any> {
  // undefined
    return this.client.extendLicenseConsumption(...args).promise()
  }

  async getAccessToken(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessToken(...args).promise()
  }

  async getGrant(...args: any): Promise<any> {
  // undefined
    return this.client.getGrant(...args).promise()
  }

  async getLicense(...args: any): Promise<any> {
  // undefined
    return this.client.getLicense(...args).promise()
  }

  async getLicenseConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getLicenseConfiguration(...args).promise()
  }

  async getLicenseConversionTask(...args: any): Promise<any> {
  // undefined
    return this.client.getLicenseConversionTask(...args).promise()
  }

  async getLicenseManagerReportGenerator(...args: any): Promise<any> {
  // undefined
    return this.client.getLicenseManagerReportGenerator(...args).promise()
  }

  async getLicenseUsage(...args: any): Promise<any> {
  // undefined
    return this.client.getLicenseUsage(...args).promise()
  }

  async getServiceSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceSettings(...args).promise()
  }

  async listAssociationsForLicenseConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.listAssociationsForLicenseConfiguration(...args).promise()
  }

  async listDistributedGrants(...args: any): Promise<any> {
  // undefined
    return this.client.listDistributedGrants(...args).promise()
  }

  async listFailuresForLicenseConfigurationOperations(...args: any): Promise<any> {
  // undefined
    return this.client.listFailuresForLicenseConfigurationOperations(...args).promise()
  }

  async listLicenseConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listLicenseConfigurations(...args).promise()
  }

  async listLicenseConversionTasks(...args: any): Promise<any> {
  // undefined
    return this.client.listLicenseConversionTasks(...args).promise()
  }

  async listLicenseManagerReportGenerators(...args: any): Promise<any> {
  // undefined
    return this.client.listLicenseManagerReportGenerators(...args).promise()
  }

  async listLicenseSpecificationsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listLicenseSpecificationsForResource(...args).promise()
  }

  async listLicenseVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listLicenseVersions(...args).promise()
  }

  async listLicenses(...args: any): Promise<any> {
  // undefined
    return this.client.listLicenses(...args).promise()
  }

  async listReceivedGrants(...args: any): Promise<any> {
  // undefined
    return this.client.listReceivedGrants(...args).promise()
  }

  async listReceivedLicenses(...args: any): Promise<any> {
  // undefined
    return this.client.listReceivedLicenses(...args).promise()
  }

  async listResourceInventory(...args: any): Promise<any> {
  // undefined
    return this.client.listResourceInventory(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listTokens(...args: any): Promise<any> {
  // undefined
    return this.client.listTokens(...args).promise()
  }

  async listUsageForLicenseConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.listUsageForLicenseConfiguration(...args).promise()
  }

  async rejectGrant(...args: any): Promise<any> {
  // undefined
    return this.client.rejectGrant(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateLicenseConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateLicenseConfiguration(...args).promise()
  }

  async updateLicenseManagerReportGenerator(...args: any): Promise<any> {
  // undefined
    return this.client.updateLicenseManagerReportGenerator(...args).promise()
  }

  async updateLicenseSpecificationsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.updateLicenseSpecificationsForResource(...args).promise()
  }

  async updateServiceSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceSettings(...args).promise()
  }
  
  static fromClient(client: AWSLicenseManager): ClientType {
    return new LicenseManager(client) as any;
  }
  
  static client(options?: AWSLicenseManager.Types.ClientConfiguration): ClientType {
    return new LicenseManager(new AWSLicenseManager(options)) as any;
  }
}  
