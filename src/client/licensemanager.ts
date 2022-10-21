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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLicenseManager> = AWSLicenseManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LicenseManager {
  private constructor(private readonly client: AWSLicenseManager) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'license-manager' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = [] as const;
  
  acceptGrant: (params: RawParamsFrom<'acceptGrant'>) => Promise<ReturnTypeFrom<'acceptGrant'>>  = async params => {
  // undefined
    return this.client.acceptGrant(params as any).promise();
  }

  checkInLicense: (params: RawParamsFrom<'checkInLicense'>) => Promise<ReturnTypeFrom<'checkInLicense'>>  = async params => {
  // undefined
    return this.client.checkInLicense(params as any).promise();
  }

  checkoutBorrowLicense: (params: RawParamsFrom<'checkoutBorrowLicense'>) => Promise<ReturnTypeFrom<'checkoutBorrowLicense'>>  = async params => {
  // undefined
    return this.client.checkoutBorrowLicense(params as any).promise();
  }

  checkoutLicense: (params: RawParamsFrom<'checkoutLicense'>) => Promise<ReturnTypeFrom<'checkoutLicense'>>  = async params => {
  // undefined
    return this.client.checkoutLicense(params as any).promise();
  }

  createGrant: (params: RawParamsFrom<'createGrant'>) => Promise<ReturnTypeFrom<'createGrant'>>  = async params => {
  // undefined
    return this.client.createGrant(params as any).promise();
  }

  createGrantVersion: (params: RawParamsFrom<'createGrantVersion'>) => Promise<ReturnTypeFrom<'createGrantVersion'>>  = async params => {
  // undefined
    return this.client.createGrantVersion(params as any).promise();
  }

  createLicense: (params: RawParamsFrom<'createLicense'>) => Promise<ReturnTypeFrom<'createLicense'>>  = async params => {
  // undefined
    return this.client.createLicense(params as any).promise();
  }

  createLicenseConfiguration: (params: RawParamsFrom<'createLicenseConfiguration'>) => Promise<ReturnTypeFrom<'createLicenseConfiguration'>>  = async params => {
  // undefined
    return this.client.createLicenseConfiguration(params as any).promise();
  }

  createLicenseConversionTaskForResource: (params: RawParamsFrom<'createLicenseConversionTaskForResource'>) => Promise<ReturnTypeFrom<'createLicenseConversionTaskForResource'>>  = async params => {
  // undefined
    return this.client.createLicenseConversionTaskForResource(params as any).promise();
  }

  createLicenseManagerReportGenerator: (params: RawParamsFrom<'createLicenseManagerReportGenerator'>) => Promise<ReturnTypeFrom<'createLicenseManagerReportGenerator'>>  = async params => {
  // undefined
    return this.client.createLicenseManagerReportGenerator(params as any).promise();
  }

  createLicenseVersion: (params: RawParamsFrom<'createLicenseVersion'>) => Promise<ReturnTypeFrom<'createLicenseVersion'>>  = async params => {
  // undefined
    return this.client.createLicenseVersion(params as any).promise();
  }

  createToken: (params: RawParamsFrom<'createToken'>) => Promise<ReturnTypeFrom<'createToken'>>  = async params => {
  // undefined
    return this.client.createToken(params as any).promise();
  }

  deleteGrant: (params: RawParamsFrom<'deleteGrant'>) => Promise<ReturnTypeFrom<'deleteGrant'>>  = async params => {
  // undefined
    return this.client.deleteGrant(params as any).promise();
  }

  deleteLicense: (params: RawParamsFrom<'deleteLicense'>) => Promise<ReturnTypeFrom<'deleteLicense'>>  = async params => {
  // undefined
    return this.client.deleteLicense(params as any).promise();
  }

  deleteLicenseConfiguration: (params: RawParamsFrom<'deleteLicenseConfiguration'>) => Promise<ReturnTypeFrom<'deleteLicenseConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteLicenseConfiguration(params as any).promise();
  }

  deleteLicenseManagerReportGenerator: (params: RawParamsFrom<'deleteLicenseManagerReportGenerator'>) => Promise<ReturnTypeFrom<'deleteLicenseManagerReportGenerator'>>  = async params => {
  // undefined
    return this.client.deleteLicenseManagerReportGenerator(params as any).promise();
  }

  deleteToken: (params: RawParamsFrom<'deleteToken'>) => Promise<ReturnTypeFrom<'deleteToken'>>  = async params => {
  // undefined
    return this.client.deleteToken(params as any).promise();
  }

  extendLicenseConsumption: (params: RawParamsFrom<'extendLicenseConsumption'>) => Promise<ReturnTypeFrom<'extendLicenseConsumption'>>  = async params => {
  // undefined
    return this.client.extendLicenseConsumption(params as any).promise();
  }

  getAccessToken: (params: RawParamsFrom<'getAccessToken'>) => Promise<ReturnTypeFrom<'getAccessToken'>>  = async params => {
  // undefined
    return this.client.getAccessToken(params as any).promise();
  }

  getGrant: (params: RawParamsFrom<'getGrant'>) => Promise<ReturnTypeFrom<'getGrant'>>  = async params => {
  // undefined
    return this.client.getGrant(params as any).promise();
  }

  getLicense: (params: RawParamsFrom<'getLicense'>) => Promise<ReturnTypeFrom<'getLicense'>>  = async params => {
  // undefined
    return this.client.getLicense(params as any).promise();
  }

  getLicenseConfiguration: (params: RawParamsFrom<'getLicenseConfiguration'>) => Promise<ReturnTypeFrom<'getLicenseConfiguration'>>  = async params => {
  // undefined
    return this.client.getLicenseConfiguration(params as any).promise();
  }

  getLicenseConversionTask: (params: RawParamsFrom<'getLicenseConversionTask'>) => Promise<ReturnTypeFrom<'getLicenseConversionTask'>>  = async params => {
  // undefined
    return this.client.getLicenseConversionTask(params as any).promise();
  }

  getLicenseManagerReportGenerator: (params: RawParamsFrom<'getLicenseManagerReportGenerator'>) => Promise<ReturnTypeFrom<'getLicenseManagerReportGenerator'>>  = async params => {
  // undefined
    return this.client.getLicenseManagerReportGenerator(params as any).promise();
  }

  getLicenseUsage: (params: RawParamsFrom<'getLicenseUsage'>) => Promise<ReturnTypeFrom<'getLicenseUsage'>>  = async params => {
  // undefined
    return this.client.getLicenseUsage(params as any).promise();
  }

  getServiceSettings: (params: RawParamsFrom<'getServiceSettings'>) => Promise<ReturnTypeFrom<'getServiceSettings'>>  = async params => {
  // undefined
    return this.client.getServiceSettings(params as any).promise();
  }

  listAssociationsForLicenseConfiguration: (params: RawParamsFrom<'listAssociationsForLicenseConfiguration'>) => Promise<ReturnTypeFrom<'listAssociationsForLicenseConfiguration'>>  = async params => {
  // undefined
    return this.client.listAssociationsForLicenseConfiguration(params as any).promise();
  }

  listDistributedGrants: (params: RawParamsFrom<'listDistributedGrants'>) => Promise<ReturnTypeFrom<'listDistributedGrants'>>  = async params => {
  // undefined
    return this.client.listDistributedGrants(params as any).promise();
  }

  listFailuresForLicenseConfigurationOperations: (params: RawParamsFrom<'listFailuresForLicenseConfigurationOperations'>) => Promise<ReturnTypeFrom<'listFailuresForLicenseConfigurationOperations'>>  = async params => {
  // undefined
    return this.client.listFailuresForLicenseConfigurationOperations(params as any).promise();
  }

  listLicenseConfigurations: (params: RawParamsFrom<'listLicenseConfigurations'>) => Promise<ReturnTypeFrom<'listLicenseConfigurations'>>  = async params => {
  // undefined
    return this.client.listLicenseConfigurations(params as any).promise();
  }

  listLicenseConversionTasks: (params: RawParamsFrom<'listLicenseConversionTasks'>) => Promise<ReturnTypeFrom<'listLicenseConversionTasks'>>  = async params => {
  // undefined
    return this.client.listLicenseConversionTasks(params as any).promise();
  }

  listLicenseManagerReportGenerators: (params: RawParamsFrom<'listLicenseManagerReportGenerators'>) => Promise<ReturnTypeFrom<'listLicenseManagerReportGenerators'>>  = async params => {
  // undefined
    return this.client.listLicenseManagerReportGenerators(params as any).promise();
  }

  listLicenseSpecificationsForResource: (params: RawParamsFrom<'listLicenseSpecificationsForResource'>) => Promise<ReturnTypeFrom<'listLicenseSpecificationsForResource'>>  = async params => {
  // undefined
    return this.client.listLicenseSpecificationsForResource(params as any).promise();
  }

  listLicenseVersions: (params: RawParamsFrom<'listLicenseVersions'>) => Promise<ReturnTypeFrom<'listLicenseVersions'>>  = async params => {
  // undefined
    return this.client.listLicenseVersions(params as any).promise();
  }

  listLicenses: (params: RawParamsFrom<'listLicenses'>) => Promise<ReturnTypeFrom<'listLicenses'>>  = async params => {
  // undefined
    return this.client.listLicenses(params as any).promise();
  }

  listReceivedGrants: (params: RawParamsFrom<'listReceivedGrants'>) => Promise<ReturnTypeFrom<'listReceivedGrants'>>  = async params => {
  // undefined
    return this.client.listReceivedGrants(params as any).promise();
  }

  listReceivedLicenses: (params: RawParamsFrom<'listReceivedLicenses'>) => Promise<ReturnTypeFrom<'listReceivedLicenses'>>  = async params => {
  // undefined
    return this.client.listReceivedLicenses(params as any).promise();
  }

  listResourceInventory: (params: RawParamsFrom<'listResourceInventory'>) => Promise<ReturnTypeFrom<'listResourceInventory'>>  = async params => {
  // undefined
    return this.client.listResourceInventory(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTokens: (params: RawParamsFrom<'listTokens'>) => Promise<ReturnTypeFrom<'listTokens'>>  = async params => {
  // undefined
    return this.client.listTokens(params as any).promise();
  }

  listUsageForLicenseConfiguration: (params: RawParamsFrom<'listUsageForLicenseConfiguration'>) => Promise<ReturnTypeFrom<'listUsageForLicenseConfiguration'>>  = async params => {
  // undefined
    return this.client.listUsageForLicenseConfiguration(params as any).promise();
  }

  rejectGrant: (params: RawParamsFrom<'rejectGrant'>) => Promise<ReturnTypeFrom<'rejectGrant'>>  = async params => {
  // undefined
    return this.client.rejectGrant(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateLicenseConfiguration: (params: RawParamsFrom<'updateLicenseConfiguration'>) => Promise<ReturnTypeFrom<'updateLicenseConfiguration'>>  = async params => {
  // undefined
    return this.client.updateLicenseConfiguration(params as any).promise();
  }

  updateLicenseManagerReportGenerator: (params: RawParamsFrom<'updateLicenseManagerReportGenerator'>) => Promise<ReturnTypeFrom<'updateLicenseManagerReportGenerator'>>  = async params => {
  // undefined
    return this.client.updateLicenseManagerReportGenerator(params as any).promise();
  }

  updateLicenseSpecificationsForResource: (params: RawParamsFrom<'updateLicenseSpecificationsForResource'>) => Promise<ReturnTypeFrom<'updateLicenseSpecificationsForResource'>>  = async params => {
  // undefined
    return this.client.updateLicenseSpecificationsForResource(params as any).promise();
  }

  updateServiceSettings: (params: RawParamsFrom<'updateServiceSettings'>) => Promise<ReturnTypeFrom<'updateServiceSettings'>>  = async params => {
  // undefined
    return this.client.updateServiceSettings(params as any).promise();
  }
  
  static fromClient(client: AWSLicenseManager): LicenseManager {
    return new LicenseManager(client) as any;
  }
  
  static client(options?: AWSLicenseManager.Types.ClientConfiguration): LicenseManager {
    return new LicenseManager(new AWSLicenseManager(options)) as any;
  }
}  
