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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'appconfig';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listApplications","listDeploymentStrategies","listExtensionAssociations","listExtensions"];
    
  createApplication: FunctionTypeFrom<'createApplication'>;

  createConfigurationProfile: FunctionTypeFrom<'createConfigurationProfile'>;

  createDeploymentStrategy: FunctionTypeFrom<'createDeploymentStrategy'>;

  createEnvironment: FunctionTypeFrom<'createEnvironment'>;

  createExtension: FunctionTypeFrom<'createExtension'>;

  createExtensionAssociation: FunctionTypeFrom<'createExtensionAssociation'>;

  createHostedConfigurationVersion: FunctionTypeFrom<'createHostedConfigurationVersion'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteConfigurationProfile: FunctionTypeFrom<'deleteConfigurationProfile'>;

  deleteDeploymentStrategy: FunctionTypeFrom<'deleteDeploymentStrategy'>;

  deleteEnvironment: FunctionTypeFrom<'deleteEnvironment'>;

  deleteExtension: FunctionTypeFrom<'deleteExtension'>;

  deleteExtensionAssociation: FunctionTypeFrom<'deleteExtensionAssociation'>;

  deleteHostedConfigurationVersion: FunctionTypeFrom<'deleteHostedConfigurationVersion'>;

  getApplication: FunctionTypeFrom<'getApplication'>;

  getConfiguration: FunctionTypeFrom<'getConfiguration'>;

  getConfigurationProfile: FunctionTypeFrom<'getConfigurationProfile'>;

  getDeployment: FunctionTypeFrom<'getDeployment'>;

  getDeploymentStrategy: FunctionTypeFrom<'getDeploymentStrategy'>;

  getEnvironment: FunctionTypeFrom<'getEnvironment'>;

  getExtension: FunctionTypeFrom<'getExtension'>;

  getExtensionAssociation: FunctionTypeFrom<'getExtensionAssociation'>;

  getHostedConfigurationVersion: FunctionTypeFrom<'getHostedConfigurationVersion'>;

  listApplications: FunctionTypeFrom<'listApplications'>;

  listConfigurationProfiles: FunctionTypeFrom<'listConfigurationProfiles'>;

  listDeploymentStrategies: FunctionTypeFrom<'listDeploymentStrategies'>;

  listDeployments: FunctionTypeFrom<'listDeployments'>;

  listEnvironments: FunctionTypeFrom<'listEnvironments'>;

  listExtensionAssociations: FunctionTypeFrom<'listExtensionAssociations'>;

  listExtensions: FunctionTypeFrom<'listExtensions'>;

  listHostedConfigurationVersions: FunctionTypeFrom<'listHostedConfigurationVersions'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startDeployment: FunctionTypeFrom<'startDeployment'>;

  stopDeployment: FunctionTypeFrom<'stopDeployment'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>;

  updateConfigurationProfile: FunctionTypeFrom<'updateConfigurationProfile'>;

  updateDeploymentStrategy: FunctionTypeFrom<'updateDeploymentStrategy'>;

  updateEnvironment: FunctionTypeFrom<'updateEnvironment'>;

  updateExtension: FunctionTypeFrom<'updateExtension'>;

  updateExtensionAssociation: FunctionTypeFrom<'updateExtensionAssociation'>;

  validateConfiguration: FunctionTypeFrom<'validateConfiguration'>
}
 
export class AppConfig implements ClientType {
  private constructor(private readonly client: AWSAppConfig) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appconfig';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listApplications","listDeploymentStrategies","listExtensionAssociations","listExtensions"] as const;
  
  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createConfigurationProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationProfile(...args).promise()
  }

  async createDeploymentStrategy(...args: any): Promise<any> {
  // undefined
    return this.client.createDeploymentStrategy(...args).promise()
  }

  async createEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironment(...args).promise()
  }

  async createExtension(...args: any): Promise<any> {
  // undefined
    return this.client.createExtension(...args).promise()
  }

  async createExtensionAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createExtensionAssociation(...args).promise()
  }

  async createHostedConfigurationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createHostedConfigurationVersion(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteConfigurationProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationProfile(...args).promise()
  }

  async deleteDeploymentStrategy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeploymentStrategy(...args).promise()
  }

  async deleteEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironment(...args).promise()
  }

  async deleteExtension(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExtension(...args).promise()
  }

  async deleteExtensionAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExtensionAssociation(...args).promise()
  }

  async deleteHostedConfigurationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHostedConfigurationVersion(...args).promise()
  }

  async getApplication(...args: any): Promise<any> {
  // undefined
    return this.client.getApplication(...args).promise()
  }

  async getConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getConfiguration(...args).promise()
  }

  async getConfigurationProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getConfigurationProfile(...args).promise()
  }

  async getDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployment(...args).promise()
  }

  async getDeploymentStrategy(...args: any): Promise<any> {
  // undefined
    return this.client.getDeploymentStrategy(...args).promise()
  }

  async getEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironment(...args).promise()
  }

  async getExtension(...args: any): Promise<any> {
  // undefined
    return this.client.getExtension(...args).promise()
  }

  async getExtensionAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.getExtensionAssociation(...args).promise()
  }

  async getHostedConfigurationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getHostedConfigurationVersion(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listApplications(...args).promise()
  }

  async listConfigurationProfiles(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConfigurationProfiles(...args).promise()
  }

  async listDeploymentStrategies(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDeploymentStrategies(...args).promise()
  }

  async listDeployments(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDeployments(...args).promise()
  }

  async listEnvironments(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEnvironments(...args).promise()
  }

  async listExtensionAssociations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExtensionAssociations(...args).promise()
  }

  async listExtensions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExtensions(...args).promise()
  }

  async listHostedConfigurationVersions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHostedConfigurationVersions(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.startDeployment(...args).promise()
  }

  async stopDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.stopDeployment(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }

  async updateConfigurationProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationProfile(...args).promise()
  }

  async updateDeploymentStrategy(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeploymentStrategy(...args).promise()
  }

  async updateEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironment(...args).promise()
  }

  async updateExtension(...args: any): Promise<any> {
  // undefined
    return this.client.updateExtension(...args).promise()
  }

  async updateExtensionAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.updateExtensionAssociation(...args).promise()
  }

  async validateConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.validateConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSAppConfig): ClientType {
    return new AppConfig(client) as any;
  }
  
  static client(options?: AWSAppConfig.Types.ClientConfiguration): ClientType {
    return new AppConfig(new AWSAppConfig(options)) as any;
  }
}  
