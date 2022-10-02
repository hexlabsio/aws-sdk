import { Request, Proton as AWSProton } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSProton> = AWSProton[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSProton> = AWSProton[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSProton[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSProton, Extras> = AWSProton[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'proton';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listComponents","listEnvironmentTemplates","listEnvironments","listRepositories","listServiceInstances","listServiceTemplates","listServices"];
    
  acceptEnvironmentAccountConnection: FunctionTypeFrom<'acceptEnvironmentAccountConnection'>;

  cancelComponentDeployment: FunctionTypeFrom<'cancelComponentDeployment'>;

  cancelEnvironmentDeployment: FunctionTypeFrom<'cancelEnvironmentDeployment'>;

  cancelServiceInstanceDeployment: FunctionTypeFrom<'cancelServiceInstanceDeployment'>;

  cancelServicePipelineDeployment: FunctionTypeFrom<'cancelServicePipelineDeployment'>;

  createComponent: FunctionTypeFrom<'createComponent'>;

  createEnvironment: FunctionTypeFrom<'createEnvironment'>;

  createEnvironmentAccountConnection: FunctionTypeFrom<'createEnvironmentAccountConnection'>;

  createEnvironmentTemplate: FunctionTypeFrom<'createEnvironmentTemplate'>;

  createEnvironmentTemplateVersion: FunctionTypeFrom<'createEnvironmentTemplateVersion'>;

  createRepository: FunctionTypeFrom<'createRepository'>;

  createService: FunctionTypeFrom<'createService'>;

  createServiceTemplate: FunctionTypeFrom<'createServiceTemplate'>;

  createServiceTemplateVersion: FunctionTypeFrom<'createServiceTemplateVersion'>;

  createTemplateSyncConfig: FunctionTypeFrom<'createTemplateSyncConfig'>;

  deleteComponent: FunctionTypeFrom<'deleteComponent'>;

  deleteEnvironment: FunctionTypeFrom<'deleteEnvironment'>;

  deleteEnvironmentAccountConnection: FunctionTypeFrom<'deleteEnvironmentAccountConnection'>;

  deleteEnvironmentTemplate: FunctionTypeFrom<'deleteEnvironmentTemplate'>;

  deleteEnvironmentTemplateVersion: FunctionTypeFrom<'deleteEnvironmentTemplateVersion'>;

  deleteRepository: FunctionTypeFrom<'deleteRepository'>;

  deleteService: FunctionTypeFrom<'deleteService'>;

  deleteServiceTemplate: FunctionTypeFrom<'deleteServiceTemplate'>;

  deleteServiceTemplateVersion: FunctionTypeFrom<'deleteServiceTemplateVersion'>;

  deleteTemplateSyncConfig: FunctionTypeFrom<'deleteTemplateSyncConfig'>;

  getAccountSettings: FunctionTypeFrom<'getAccountSettings'>;

  getComponent: FunctionTypeFrom<'getComponent'>;

  getEnvironment: FunctionTypeFrom<'getEnvironment'>;

  getEnvironmentAccountConnection: FunctionTypeFrom<'getEnvironmentAccountConnection'>;

  getEnvironmentTemplate: FunctionTypeFrom<'getEnvironmentTemplate'>;

  getEnvironmentTemplateVersion: FunctionTypeFrom<'getEnvironmentTemplateVersion'>;

  getRepository: FunctionTypeFrom<'getRepository'>;

  getRepositorySyncStatus: FunctionTypeFrom<'getRepositorySyncStatus'>;

  getService: FunctionTypeFrom<'getService'>;

  getServiceInstance: FunctionTypeFrom<'getServiceInstance'>;

  getServiceTemplate: FunctionTypeFrom<'getServiceTemplate'>;

  getServiceTemplateVersion: FunctionTypeFrom<'getServiceTemplateVersion'>;

  getTemplateSyncConfig: FunctionTypeFrom<'getTemplateSyncConfig'>;

  getTemplateSyncStatus: FunctionTypeFrom<'getTemplateSyncStatus'>;

  listComponentOutputs(params: { [K in keyof Omit<ParamsFrom<'listComponentOutputs', { next?: string }>, 'nextToken'>]: ParamsFrom<'listComponentOutputs', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponentOutputs'>]-?: ReturnTypeFrom<'listComponentOutputs'>[K]}['outputs'] }>
  ;

  listComponentProvisionedResources(params: { [K in keyof Omit<ParamsFrom<'listComponentProvisionedResources', { next?: string }>, 'nextToken'>]: ParamsFrom<'listComponentProvisionedResources', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponentProvisionedResources'>]-?: ReturnTypeFrom<'listComponentProvisionedResources'>[K]}['provisionedResources'] }>
  ;

  listComponents(params: { [K in keyof Omit<ParamsFrom<'listComponents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['components'] }>
  listComponents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['components'] }>;

  listEnvironmentAccountConnections(params: { [K in keyof Omit<ParamsFrom<'listEnvironmentAccountConnections', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEnvironmentAccountConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironmentAccountConnections'>]-?: ReturnTypeFrom<'listEnvironmentAccountConnections'>[K]}['environmentAccountConnections'] }>
  ;

  listEnvironmentOutputs(params: { [K in keyof Omit<ParamsFrom<'listEnvironmentOutputs', { next?: string }>, 'nextToken'>]: ParamsFrom<'listEnvironmentOutputs', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironmentOutputs'>]-?: ReturnTypeFrom<'listEnvironmentOutputs'>[K]}['outputs'] }>
  ;

  listEnvironmentProvisionedResources(params: { [K in keyof Omit<ParamsFrom<'listEnvironmentProvisionedResources', { next?: string }>, 'nextToken'>]: ParamsFrom<'listEnvironmentProvisionedResources', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironmentProvisionedResources'>]-?: ReturnTypeFrom<'listEnvironmentProvisionedResources'>[K]}['provisionedResources'] }>
  ;

  listEnvironmentTemplateVersions(params: { [K in keyof Omit<ParamsFrom<'listEnvironmentTemplateVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEnvironmentTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironmentTemplateVersions'>]-?: ReturnTypeFrom<'listEnvironmentTemplateVersions'>[K]}['templateVersions'] }>
  ;

  listEnvironmentTemplates(params: { [K in keyof Omit<ParamsFrom<'listEnvironmentTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEnvironmentTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironmentTemplates'>]-?: ReturnTypeFrom<'listEnvironmentTemplates'>[K]}['templates'] }>
  listEnvironmentTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironmentTemplates'>]-?: ReturnTypeFrom<'listEnvironmentTemplates'>[K]}['templates'] }>;

  listEnvironments(params: { [K in keyof Omit<ParamsFrom<'listEnvironments', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['environments'] }>
  listEnvironments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['environments'] }>;

  listRepositories(params: { [K in keyof Omit<ParamsFrom<'listRepositories', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'] }>
  listRepositories(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'] }>;

  listRepositorySyncDefinitions(params: { [K in keyof Omit<ParamsFrom<'listRepositorySyncDefinitions', { next?: string }>, 'nextToken'>]: ParamsFrom<'listRepositorySyncDefinitions', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositorySyncDefinitions'>]-?: ReturnTypeFrom<'listRepositorySyncDefinitions'>[K]}['syncDefinitions'] }>
  ;

  listServiceInstanceOutputs(params: { [K in keyof Omit<ParamsFrom<'listServiceInstanceOutputs', { next?: string }>, 'nextToken'>]: ParamsFrom<'listServiceInstanceOutputs', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceInstanceOutputs'>]-?: ReturnTypeFrom<'listServiceInstanceOutputs'>[K]}['outputs'] }>
  ;

  listServiceInstanceProvisionedResources(params: { [K in keyof Omit<ParamsFrom<'listServiceInstanceProvisionedResources', { next?: string }>, 'nextToken'>]: ParamsFrom<'listServiceInstanceProvisionedResources', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceInstanceProvisionedResources'>]-?: ReturnTypeFrom<'listServiceInstanceProvisionedResources'>[K]}['provisionedResources'] }>
  ;

  listServiceInstances(params: { [K in keyof Omit<ParamsFrom<'listServiceInstances', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listServiceInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceInstances'>]-?: ReturnTypeFrom<'listServiceInstances'>[K]}['serviceInstances'] }>
  listServiceInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceInstances'>]-?: ReturnTypeFrom<'listServiceInstances'>[K]}['serviceInstances'] }>;

  listServicePipelineOutputs(params: { [K in keyof Omit<ParamsFrom<'listServicePipelineOutputs', { next?: string }>, 'nextToken'>]: ParamsFrom<'listServicePipelineOutputs', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServicePipelineOutputs'>]-?: ReturnTypeFrom<'listServicePipelineOutputs'>[K]}['outputs'] }>
  ;

  listServicePipelineProvisionedResources(params: { [K in keyof Omit<ParamsFrom<'listServicePipelineProvisionedResources', { next?: string }>, 'nextToken'>]: ParamsFrom<'listServicePipelineProvisionedResources', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServicePipelineProvisionedResources'>]-?: ReturnTypeFrom<'listServicePipelineProvisionedResources'>[K]}['provisionedResources'] }>
  ;

  listServiceTemplateVersions(params: { [K in keyof Omit<ParamsFrom<'listServiceTemplateVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listServiceTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceTemplateVersions'>]-?: ReturnTypeFrom<'listServiceTemplateVersions'>[K]}['templateVersions'] }>
  ;

  listServiceTemplates(params: { [K in keyof Omit<ParamsFrom<'listServiceTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listServiceTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceTemplates'>]-?: ReturnTypeFrom<'listServiceTemplates'>[K]}['templates'] }>
  listServiceTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceTemplates'>]-?: ReturnTypeFrom<'listServiceTemplates'>[K]}['templates'] }>;

  listServices(params: { [K in keyof Omit<ParamsFrom<'listServices', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['services'] }>
  listServices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['services'] }>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'] }>
  ;

  notifyResourceDeploymentStatusChange: FunctionTypeFrom<'notifyResourceDeploymentStatusChange'>;

  rejectEnvironmentAccountConnection: FunctionTypeFrom<'rejectEnvironmentAccountConnection'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccountSettings: FunctionTypeFrom<'updateAccountSettings'>;

  updateComponent: FunctionTypeFrom<'updateComponent'>;

  updateEnvironment: FunctionTypeFrom<'updateEnvironment'>;

  updateEnvironmentAccountConnection: FunctionTypeFrom<'updateEnvironmentAccountConnection'>;

  updateEnvironmentTemplate: FunctionTypeFrom<'updateEnvironmentTemplate'>;

  updateEnvironmentTemplateVersion: FunctionTypeFrom<'updateEnvironmentTemplateVersion'>;

  updateService: FunctionTypeFrom<'updateService'>;

  updateServiceInstance: FunctionTypeFrom<'updateServiceInstance'>;

  updateServicePipeline: FunctionTypeFrom<'updateServicePipeline'>;

  updateServiceTemplate: FunctionTypeFrom<'updateServiceTemplate'>;

  updateServiceTemplateVersion: FunctionTypeFrom<'updateServiceTemplateVersion'>;

  updateTemplateSyncConfig: FunctionTypeFrom<'updateTemplateSyncConfig'>
}
 
export class Proton implements ClientType {
  private constructor(private readonly client: AWSProton) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'proton';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listComponents","listEnvironmentTemplates","listEnvironments","listRepositories","listServiceInstances","listServiceTemplates","listServices"] as const;
  
  async acceptEnvironmentAccountConnection(...args: any): Promise<any> {
  // undefined
    return this.client.acceptEnvironmentAccountConnection(...args).promise()
  }

  async cancelComponentDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.cancelComponentDeployment(...args).promise()
  }

  async cancelEnvironmentDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.cancelEnvironmentDeployment(...args).promise()
  }

  async cancelServiceInstanceDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.cancelServiceInstanceDeployment(...args).promise()
  }

  async cancelServicePipelineDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.cancelServicePipelineDeployment(...args).promise()
  }

  async createComponent(...args: any): Promise<any> {
  // undefined
    return this.client.createComponent(...args).promise()
  }

  async createEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironment(...args).promise()
  }

  async createEnvironmentAccountConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironmentAccountConnection(...args).promise()
  }

  async createEnvironmentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironmentTemplate(...args).promise()
  }

  async createEnvironmentTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironmentTemplateVersion(...args).promise()
  }

  async createRepository(...args: any): Promise<any> {
  // undefined
    return this.client.createRepository(...args).promise()
  }

  async createService(...args: any): Promise<any> {
  // undefined
    return this.client.createService(...args).promise()
  }

  async createServiceTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createServiceTemplate(...args).promise()
  }

  async createServiceTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createServiceTemplateVersion(...args).promise()
  }

  async createTemplateSyncConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createTemplateSyncConfig(...args).promise()
  }

  async deleteComponent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteComponent(...args).promise()
  }

  async deleteEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironment(...args).promise()
  }

  async deleteEnvironmentAccountConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironmentAccountConnection(...args).promise()
  }

  async deleteEnvironmentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironmentTemplate(...args).promise()
  }

  async deleteEnvironmentTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironmentTemplateVersion(...args).promise()
  }

  async deleteRepository(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRepository(...args).promise()
  }

  async deleteService(...args: any): Promise<any> {
  // undefined
    return this.client.deleteService(...args).promise()
  }

  async deleteServiceTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServiceTemplate(...args).promise()
  }

  async deleteServiceTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServiceTemplateVersion(...args).promise()
  }

  async deleteTemplateSyncConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTemplateSyncConfig(...args).promise()
  }

  async getAccountSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountSettings(...args).promise()
  }

  async getComponent(...args: any): Promise<any> {
  // undefined
    return this.client.getComponent(...args).promise()
  }

  async getEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironment(...args).promise()
  }

  async getEnvironmentAccountConnection(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironmentAccountConnection(...args).promise()
  }

  async getEnvironmentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironmentTemplate(...args).promise()
  }

  async getEnvironmentTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironmentTemplateVersion(...args).promise()
  }

  async getRepository(...args: any): Promise<any> {
  // undefined
    return this.client.getRepository(...args).promise()
  }

  async getRepositorySyncStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getRepositorySyncStatus(...args).promise()
  }

  async getService(...args: any): Promise<any> {
  // undefined
    return this.client.getService(...args).promise()
  }

  async getServiceInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceInstance(...args).promise()
  }

  async getServiceTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceTemplate(...args).promise()
  }

  async getServiceTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceTemplateVersion(...args).promise()
  }

  async getTemplateSyncConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getTemplateSyncConfig(...args).promise()
  }

  async getTemplateSyncStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getTemplateSyncStatus(...args).promise()
  }

  async listComponentOutputs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"outputs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listComponentOutputs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.outputs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponentProvisionedResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"provisionedResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listComponentProvisionedResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.provisionedResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"components"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.components ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentAccountConnections(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"environmentAccountConnections"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironmentAccountConnections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.environmentAccountConnections ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentOutputs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"outputs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listEnvironmentOutputs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.outputs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentProvisionedResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"provisionedResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listEnvironmentProvisionedResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.provisionedResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentTemplateVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironmentTemplateVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templateVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironmentTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"environments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.environments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositories(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"repositories"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRepositories(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.repositories ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositorySyncDefinitions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"syncDefinitions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listRepositorySyncDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.syncDefinitions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceInstanceOutputs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"outputs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listServiceInstanceOutputs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.outputs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceInstanceProvisionedResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"provisionedResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listServiceInstanceProvisionedResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.provisionedResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceInstances(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"serviceInstances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServiceInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.serviceInstances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServicePipelineOutputs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"outputs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listServicePipelineOutputs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.outputs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServicePipelineProvisionedResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"provisionedResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listServicePipelineProvisionedResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.provisionedResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceTemplateVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServiceTemplateVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templateVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServiceTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServices(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"services"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.services ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async notifyResourceDeploymentStatusChange(...args: any): Promise<any> {
  // undefined
    return this.client.notifyResourceDeploymentStatusChange(...args).promise()
  }

  async rejectEnvironmentAccountConnection(...args: any): Promise<any> {
  // undefined
    return this.client.rejectEnvironmentAccountConnection(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAccountSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccountSettings(...args).promise()
  }

  async updateComponent(...args: any): Promise<any> {
  // undefined
    return this.client.updateComponent(...args).promise()
  }

  async updateEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironment(...args).promise()
  }

  async updateEnvironmentAccountConnection(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironmentAccountConnection(...args).promise()
  }

  async updateEnvironmentTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironmentTemplate(...args).promise()
  }

  async updateEnvironmentTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironmentTemplateVersion(...args).promise()
  }

  async updateService(...args: any): Promise<any> {
  // undefined
    return this.client.updateService(...args).promise()
  }

  async updateServiceInstance(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceInstance(...args).promise()
  }

  async updateServicePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.updateServicePipeline(...args).promise()
  }

  async updateServiceTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceTemplate(...args).promise()
  }

  async updateServiceTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceTemplateVersion(...args).promise()
  }

  async updateTemplateSyncConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateTemplateSyncConfig(...args).promise()
  }
  
  static fromClient(client: AWSProton): ClientType {
    return new Proton(client) as any;
  }
  
  static client(options?: AWSProton.Types.ClientConfiguration): ClientType {
    return new Proton(new AWSProton(options)) as any;
  }
}  
