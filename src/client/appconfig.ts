import { Request, AppConfig as AWSAppConfig } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAppConfig> = AWSAppConfig[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAppConfig> = AWSAppConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAppConfig[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAppConfig, Extras> = AWSAppConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAppConfig> = AWSAppConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AppConfig {
  private constructor(private readonly client: AWSAppConfig) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appconfig' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listApplications","listDeploymentStrategies","listExtensionAssociations","listExtensions"] as const;
  
  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createConfigurationProfile: (params: RawParamsFrom<'createConfigurationProfile'>) => Promise<ReturnTypeFrom<'createConfigurationProfile'>>  = async params => {
  // undefined
    return this.client.createConfigurationProfile(params as any).promise();
  }

  createDeploymentStrategy: (params: RawParamsFrom<'createDeploymentStrategy'>) => Promise<ReturnTypeFrom<'createDeploymentStrategy'>>  = async params => {
  // undefined
    return this.client.createDeploymentStrategy(params as any).promise();
  }

  createEnvironment: (params: RawParamsFrom<'createEnvironment'>) => Promise<ReturnTypeFrom<'createEnvironment'>>  = async params => {
  // undefined
    return this.client.createEnvironment(params as any).promise();
  }

  createExtension: (params: RawParamsFrom<'createExtension'>) => Promise<ReturnTypeFrom<'createExtension'>>  = async params => {
  // undefined
    return this.client.createExtension(params as any).promise();
  }

  createExtensionAssociation: (params: RawParamsFrom<'createExtensionAssociation'>) => Promise<ReturnTypeFrom<'createExtensionAssociation'>>  = async params => {
  // undefined
    return this.client.createExtensionAssociation(params as any).promise();
  }

  createHostedConfigurationVersion: (params: RawParamsFrom<'createHostedConfigurationVersion'>) => Promise<ReturnTypeFrom<'createHostedConfigurationVersion'>>  = async params => {
  // undefined
    return this.client.createHostedConfigurationVersion(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteConfigurationProfile: (params: RawParamsFrom<'deleteConfigurationProfile'>) => Promise<ReturnTypeFrom<'deleteConfigurationProfile'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationProfile(params as any).promise();
  }

  deleteDeploymentStrategy: (params: RawParamsFrom<'deleteDeploymentStrategy'>) => Promise<ReturnTypeFrom<'deleteDeploymentStrategy'>>  = async params => {
  // undefined
    return this.client.deleteDeploymentStrategy(params as any).promise();
  }

  deleteEnvironment: (params: RawParamsFrom<'deleteEnvironment'>) => Promise<ReturnTypeFrom<'deleteEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteEnvironment(params as any).promise();
  }

  deleteExtension: (params: RawParamsFrom<'deleteExtension'>) => Promise<ReturnTypeFrom<'deleteExtension'>>  = async params => {
  // undefined
    return this.client.deleteExtension(params as any).promise();
  }

  deleteExtensionAssociation: (params: RawParamsFrom<'deleteExtensionAssociation'>) => Promise<ReturnTypeFrom<'deleteExtensionAssociation'>>  = async params => {
  // undefined
    return this.client.deleteExtensionAssociation(params as any).promise();
  }

  deleteHostedConfigurationVersion: (params: RawParamsFrom<'deleteHostedConfigurationVersion'>) => Promise<ReturnTypeFrom<'deleteHostedConfigurationVersion'>>  = async params => {
  // undefined
    return this.client.deleteHostedConfigurationVersion(params as any).promise();
  }

  getApplication: (params: RawParamsFrom<'getApplication'>) => Promise<ReturnTypeFrom<'getApplication'>>  = async params => {
  // undefined
    return this.client.getApplication(params as any).promise();
  }

  getConfiguration: (params: RawParamsFrom<'getConfiguration'>) => Promise<ReturnTypeFrom<'getConfiguration'>>  = async params => {
  // undefined
    return this.client.getConfiguration(params as any).promise();
  }

  getConfigurationProfile: (params: RawParamsFrom<'getConfigurationProfile'>) => Promise<ReturnTypeFrom<'getConfigurationProfile'>>  = async params => {
  // undefined
    return this.client.getConfigurationProfile(params as any).promise();
  }

  getDeployment: (params: RawParamsFrom<'getDeployment'>) => Promise<ReturnTypeFrom<'getDeployment'>>  = async params => {
  // undefined
    return this.client.getDeployment(params as any).promise();
  }

  getDeploymentStrategy: (params: RawParamsFrom<'getDeploymentStrategy'>) => Promise<ReturnTypeFrom<'getDeploymentStrategy'>>  = async params => {
  // undefined
    return this.client.getDeploymentStrategy(params as any).promise();
  }

  getEnvironment: (params: RawParamsFrom<'getEnvironment'>) => Promise<ReturnTypeFrom<'getEnvironment'>>  = async params => {
  // undefined
    return this.client.getEnvironment(params as any).promise();
  }

  getExtension: (params: RawParamsFrom<'getExtension'>) => Promise<ReturnTypeFrom<'getExtension'>>  = async params => {
  // undefined
    return this.client.getExtension(params as any).promise();
  }

  getExtensionAssociation: (params: RawParamsFrom<'getExtensionAssociation'>) => Promise<ReturnTypeFrom<'getExtensionAssociation'>>  = async params => {
  // undefined
    return this.client.getExtensionAssociation(params as any).promise();
  }

  getHostedConfigurationVersion: (params: RawParamsFrom<'getHostedConfigurationVersion'>) => Promise<ReturnTypeFrom<'getHostedConfigurationVersion'>>  = async params => {
  // undefined
    return this.client.getHostedConfigurationVersion(params as any).promise();
  }

  listApplications: (params: RawParamsFrom<'listApplications'>) => Promise<ReturnTypeFrom<'listApplications'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplications(params as any).promise();
  }

  listConfigurationProfiles: (params: RawParamsFrom<'listConfigurationProfiles'>) => Promise<ReturnTypeFrom<'listConfigurationProfiles'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConfigurationProfiles(params as any).promise();
  }

  listDeploymentStrategies: (params: RawParamsFrom<'listDeploymentStrategies'>) => Promise<ReturnTypeFrom<'listDeploymentStrategies'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDeploymentStrategies(params as any).promise();
  }

  listDeployments: (params: RawParamsFrom<'listDeployments'>) => Promise<ReturnTypeFrom<'listDeployments'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDeployments(params as any).promise();
  }

  listEnvironments: (params: RawParamsFrom<'listEnvironments'>) => Promise<ReturnTypeFrom<'listEnvironments'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEnvironments(params as any).promise();
  }

  listExtensionAssociations: (params: RawParamsFrom<'listExtensionAssociations'>) => Promise<ReturnTypeFrom<'listExtensionAssociations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExtensionAssociations(params as any).promise();
  }

  listExtensions: (params: RawParamsFrom<'listExtensions'>) => Promise<ReturnTypeFrom<'listExtensions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExtensions(params as any).promise();
  }

  listHostedConfigurationVersions: (params: RawParamsFrom<'listHostedConfigurationVersions'>) => Promise<ReturnTypeFrom<'listHostedConfigurationVersions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHostedConfigurationVersions(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startDeployment: (params: RawParamsFrom<'startDeployment'>) => Promise<ReturnTypeFrom<'startDeployment'>>  = async params => {
  // undefined
    return this.client.startDeployment(params as any).promise();
  }

  stopDeployment: (params: RawParamsFrom<'stopDeployment'>) => Promise<ReturnTypeFrom<'stopDeployment'>>  = async params => {
  // undefined
    return this.client.stopDeployment(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }

  updateConfigurationProfile: (params: RawParamsFrom<'updateConfigurationProfile'>) => Promise<ReturnTypeFrom<'updateConfigurationProfile'>>  = async params => {
  // undefined
    return this.client.updateConfigurationProfile(params as any).promise();
  }

  updateDeploymentStrategy: (params: RawParamsFrom<'updateDeploymentStrategy'>) => Promise<ReturnTypeFrom<'updateDeploymentStrategy'>>  = async params => {
  // undefined
    return this.client.updateDeploymentStrategy(params as any).promise();
  }

  updateEnvironment: (params: RawParamsFrom<'updateEnvironment'>) => Promise<ReturnTypeFrom<'updateEnvironment'>>  = async params => {
  // undefined
    return this.client.updateEnvironment(params as any).promise();
  }

  updateExtension: (params: RawParamsFrom<'updateExtension'>) => Promise<ReturnTypeFrom<'updateExtension'>>  = async params => {
  // undefined
    return this.client.updateExtension(params as any).promise();
  }

  updateExtensionAssociation: (params: RawParamsFrom<'updateExtensionAssociation'>) => Promise<ReturnTypeFrom<'updateExtensionAssociation'>>  = async params => {
  // undefined
    return this.client.updateExtensionAssociation(params as any).promise();
  }

  validateConfiguration: (params: RawParamsFrom<'validateConfiguration'>) => Promise<ReturnTypeFrom<'validateConfiguration'>>  = async params => {
  // undefined
    return this.client.validateConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSAppConfig): AppConfig {
    return new AppConfig(client) as any;
  }
  
  static client(options?: AWSAppConfig.Types.ClientConfiguration): AppConfig {
    return new AppConfig(new AWSAppConfig(options)) as any;
  }
}  
