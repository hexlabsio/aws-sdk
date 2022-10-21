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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSProton> = AWSProton[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Proton {
  private constructor(private readonly client: AWSProton) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'proton' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listComponents","listEnvironmentTemplates","listEnvironments","listRepositories","listServiceInstances","listServiceTemplates","listServices"] as const;
  
  acceptEnvironmentAccountConnection: (params: RawParamsFrom<'acceptEnvironmentAccountConnection'>) => Promise<ReturnTypeFrom<'acceptEnvironmentAccountConnection'>>  = async params => {
  // undefined
    return this.client.acceptEnvironmentAccountConnection(params as any).promise();
  }

  cancelComponentDeployment: (params: RawParamsFrom<'cancelComponentDeployment'>) => Promise<ReturnTypeFrom<'cancelComponentDeployment'>>  = async params => {
  // undefined
    return this.client.cancelComponentDeployment(params as any).promise();
  }

  cancelEnvironmentDeployment: (params: RawParamsFrom<'cancelEnvironmentDeployment'>) => Promise<ReturnTypeFrom<'cancelEnvironmentDeployment'>>  = async params => {
  // undefined
    return this.client.cancelEnvironmentDeployment(params as any).promise();
  }

  cancelServiceInstanceDeployment: (params: RawParamsFrom<'cancelServiceInstanceDeployment'>) => Promise<ReturnTypeFrom<'cancelServiceInstanceDeployment'>>  = async params => {
  // undefined
    return this.client.cancelServiceInstanceDeployment(params as any).promise();
  }

  cancelServicePipelineDeployment: (params: RawParamsFrom<'cancelServicePipelineDeployment'>) => Promise<ReturnTypeFrom<'cancelServicePipelineDeployment'>>  = async params => {
  // undefined
    return this.client.cancelServicePipelineDeployment(params as any).promise();
  }

  createComponent: (params: RawParamsFrom<'createComponent'>) => Promise<ReturnTypeFrom<'createComponent'>>  = async params => {
  // undefined
    return this.client.createComponent(params as any).promise();
  }

  createEnvironment: (params: RawParamsFrom<'createEnvironment'>) => Promise<ReturnTypeFrom<'createEnvironment'>>  = async params => {
  // undefined
    return this.client.createEnvironment(params as any).promise();
  }

  createEnvironmentAccountConnection: (params: RawParamsFrom<'createEnvironmentAccountConnection'>) => Promise<ReturnTypeFrom<'createEnvironmentAccountConnection'>>  = async params => {
  // undefined
    return this.client.createEnvironmentAccountConnection(params as any).promise();
  }

  createEnvironmentTemplate: (params: RawParamsFrom<'createEnvironmentTemplate'>) => Promise<ReturnTypeFrom<'createEnvironmentTemplate'>>  = async params => {
  // undefined
    return this.client.createEnvironmentTemplate(params as any).promise();
  }

  createEnvironmentTemplateVersion: (params: RawParamsFrom<'createEnvironmentTemplateVersion'>) => Promise<ReturnTypeFrom<'createEnvironmentTemplateVersion'>>  = async params => {
  // undefined
    return this.client.createEnvironmentTemplateVersion(params as any).promise();
  }

  createRepository: (params: RawParamsFrom<'createRepository'>) => Promise<ReturnTypeFrom<'createRepository'>>  = async params => {
  // undefined
    return this.client.createRepository(params as any).promise();
  }

  createService: (params: RawParamsFrom<'createService'>) => Promise<ReturnTypeFrom<'createService'>>  = async params => {
  // undefined
    return this.client.createService(params as any).promise();
  }

  createServiceTemplate: (params: RawParamsFrom<'createServiceTemplate'>) => Promise<ReturnTypeFrom<'createServiceTemplate'>>  = async params => {
  // undefined
    return this.client.createServiceTemplate(params as any).promise();
  }

  createServiceTemplateVersion: (params: RawParamsFrom<'createServiceTemplateVersion'>) => Promise<ReturnTypeFrom<'createServiceTemplateVersion'>>  = async params => {
  // undefined
    return this.client.createServiceTemplateVersion(params as any).promise();
  }

  createTemplateSyncConfig: (params: RawParamsFrom<'createTemplateSyncConfig'>) => Promise<ReturnTypeFrom<'createTemplateSyncConfig'>>  = async params => {
  // undefined
    return this.client.createTemplateSyncConfig(params as any).promise();
  }

  deleteComponent: (params: RawParamsFrom<'deleteComponent'>) => Promise<ReturnTypeFrom<'deleteComponent'>>  = async params => {
  // undefined
    return this.client.deleteComponent(params as any).promise();
  }

  deleteEnvironment: (params: RawParamsFrom<'deleteEnvironment'>) => Promise<ReturnTypeFrom<'deleteEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteEnvironment(params as any).promise();
  }

  deleteEnvironmentAccountConnection: (params: RawParamsFrom<'deleteEnvironmentAccountConnection'>) => Promise<ReturnTypeFrom<'deleteEnvironmentAccountConnection'>>  = async params => {
  // undefined
    return this.client.deleteEnvironmentAccountConnection(params as any).promise();
  }

  deleteEnvironmentTemplate: (params: RawParamsFrom<'deleteEnvironmentTemplate'>) => Promise<ReturnTypeFrom<'deleteEnvironmentTemplate'>>  = async params => {
  // undefined
    return this.client.deleteEnvironmentTemplate(params as any).promise();
  }

  deleteEnvironmentTemplateVersion: (params: RawParamsFrom<'deleteEnvironmentTemplateVersion'>) => Promise<ReturnTypeFrom<'deleteEnvironmentTemplateVersion'>>  = async params => {
  // undefined
    return this.client.deleteEnvironmentTemplateVersion(params as any).promise();
  }

  deleteRepository: (params: RawParamsFrom<'deleteRepository'>) => Promise<ReturnTypeFrom<'deleteRepository'>>  = async params => {
  // undefined
    return this.client.deleteRepository(params as any).promise();
  }

  deleteService: (params: RawParamsFrom<'deleteService'>) => Promise<ReturnTypeFrom<'deleteService'>>  = async params => {
  // undefined
    return this.client.deleteService(params as any).promise();
  }

  deleteServiceTemplate: (params: RawParamsFrom<'deleteServiceTemplate'>) => Promise<ReturnTypeFrom<'deleteServiceTemplate'>>  = async params => {
  // undefined
    return this.client.deleteServiceTemplate(params as any).promise();
  }

  deleteServiceTemplateVersion: (params: RawParamsFrom<'deleteServiceTemplateVersion'>) => Promise<ReturnTypeFrom<'deleteServiceTemplateVersion'>>  = async params => {
  // undefined
    return this.client.deleteServiceTemplateVersion(params as any).promise();
  }

  deleteTemplateSyncConfig: (params: RawParamsFrom<'deleteTemplateSyncConfig'>) => Promise<ReturnTypeFrom<'deleteTemplateSyncConfig'>>  = async params => {
  // undefined
    return this.client.deleteTemplateSyncConfig(params as any).promise();
  }

  getAccountSettings: (params: RawParamsFrom<'getAccountSettings'>) => Promise<ReturnTypeFrom<'getAccountSettings'>>  = async params => {
  // undefined
    return this.client.getAccountSettings(params as any).promise();
  }

  getComponent: (params: RawParamsFrom<'getComponent'>) => Promise<ReturnTypeFrom<'getComponent'>>  = async params => {
  // undefined
    return this.client.getComponent(params as any).promise();
  }

  getEnvironment: (params: RawParamsFrom<'getEnvironment'>) => Promise<ReturnTypeFrom<'getEnvironment'>>  = async params => {
  // undefined
    return this.client.getEnvironment(params as any).promise();
  }

  getEnvironmentAccountConnection: (params: RawParamsFrom<'getEnvironmentAccountConnection'>) => Promise<ReturnTypeFrom<'getEnvironmentAccountConnection'>>  = async params => {
  // undefined
    return this.client.getEnvironmentAccountConnection(params as any).promise();
  }

  getEnvironmentTemplate: (params: RawParamsFrom<'getEnvironmentTemplate'>) => Promise<ReturnTypeFrom<'getEnvironmentTemplate'>>  = async params => {
  // undefined
    return this.client.getEnvironmentTemplate(params as any).promise();
  }

  getEnvironmentTemplateVersion: (params: RawParamsFrom<'getEnvironmentTemplateVersion'>) => Promise<ReturnTypeFrom<'getEnvironmentTemplateVersion'>>  = async params => {
  // undefined
    return this.client.getEnvironmentTemplateVersion(params as any).promise();
  }

  getRepository: (params: RawParamsFrom<'getRepository'>) => Promise<ReturnTypeFrom<'getRepository'>>  = async params => {
  // undefined
    return this.client.getRepository(params as any).promise();
  }

  getRepositorySyncStatus: (params: RawParamsFrom<'getRepositorySyncStatus'>) => Promise<ReturnTypeFrom<'getRepositorySyncStatus'>>  = async params => {
  // undefined
    return this.client.getRepositorySyncStatus(params as any).promise();
  }

  getService: (params: RawParamsFrom<'getService'>) => Promise<ReturnTypeFrom<'getService'>>  = async params => {
  // undefined
    return this.client.getService(params as any).promise();
  }

  getServiceInstance: (params: RawParamsFrom<'getServiceInstance'>) => Promise<ReturnTypeFrom<'getServiceInstance'>>  = async params => {
  // undefined
    return this.client.getServiceInstance(params as any).promise();
  }

  getServiceTemplate: (params: RawParamsFrom<'getServiceTemplate'>) => Promise<ReturnTypeFrom<'getServiceTemplate'>>  = async params => {
  // undefined
    return this.client.getServiceTemplate(params as any).promise();
  }

  getServiceTemplateVersion: (params: RawParamsFrom<'getServiceTemplateVersion'>) => Promise<ReturnTypeFrom<'getServiceTemplateVersion'>>  = async params => {
  // undefined
    return this.client.getServiceTemplateVersion(params as any).promise();
  }

  getTemplateSyncConfig: (params: RawParamsFrom<'getTemplateSyncConfig'>) => Promise<ReturnTypeFrom<'getTemplateSyncConfig'>>  = async params => {
  // undefined
    return this.client.getTemplateSyncConfig(params as any).promise();
  }

  getTemplateSyncStatus: (params: RawParamsFrom<'getTemplateSyncStatus'>) => Promise<ReturnTypeFrom<'getTemplateSyncStatus'>>  = async params => {
  // undefined
    return this.client.getTemplateSyncStatus(params as any).promise();
  }

  async listComponentOutputs(params: { [K in keyof ParamsFrom<'listComponentOutputs', { next?: string }>]: ParamsFrom<'listComponentOutputs', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponentOutputs'>]-?: ReturnTypeFrom<'listComponentOutputs'>[K]}['outputs'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"outputs"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listComponentOutputs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listComponentOutputs' })).toString('base64');
    const member = (Array.isArray(result.outputs ?? []) ? (result.outputs ?? []) : [result.outputs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponentProvisionedResources(params: { [K in keyof ParamsFrom<'listComponentProvisionedResources', { next?: string }>]: ParamsFrom<'listComponentProvisionedResources', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponentProvisionedResources'>]-?: ReturnTypeFrom<'listComponentProvisionedResources'>[K]}['provisionedResources'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"provisionedResources"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listComponentProvisionedResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listComponentProvisionedResources' })).toString('base64');
    const member = (Array.isArray(result.provisionedResources ?? []) ? (result.provisionedResources ?? []) : [result.provisionedResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComponents(params: { [K in keyof ParamsFrom<'listComponents', { next?: string, limit?: number }>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['components'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"components"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listComponents' })).toString('base64');
    const member = (Array.isArray(result.components ?? []) ? (result.components ?? []) : [result.components]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentAccountConnections(params: { [K in keyof ParamsFrom<'listEnvironmentAccountConnections', { next?: string, limit?: number }>]: ParamsFrom<'listEnvironmentAccountConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironmentAccountConnections'>]-?: ReturnTypeFrom<'listEnvironmentAccountConnections'>[K]}['environmentAccountConnections'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"environmentAccountConnections"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironmentAccountConnections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEnvironmentAccountConnections' })).toString('base64');
    const member = (Array.isArray(result.environmentAccountConnections ?? []) ? (result.environmentAccountConnections ?? []) : [result.environmentAccountConnections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentOutputs(params: { [K in keyof ParamsFrom<'listEnvironmentOutputs', { next?: string }>]: ParamsFrom<'listEnvironmentOutputs', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironmentOutputs'>]-?: ReturnTypeFrom<'listEnvironmentOutputs'>[K]}['outputs'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"outputs"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listEnvironmentOutputs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEnvironmentOutputs' })).toString('base64');
    const member = (Array.isArray(result.outputs ?? []) ? (result.outputs ?? []) : [result.outputs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentProvisionedResources(params: { [K in keyof ParamsFrom<'listEnvironmentProvisionedResources', { next?: string }>]: ParamsFrom<'listEnvironmentProvisionedResources', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironmentProvisionedResources'>]-?: ReturnTypeFrom<'listEnvironmentProvisionedResources'>[K]}['provisionedResources'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"provisionedResources"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listEnvironmentProvisionedResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEnvironmentProvisionedResources' })).toString('base64');
    const member = (Array.isArray(result.provisionedResources ?? []) ? (result.provisionedResources ?? []) : [result.provisionedResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentTemplateVersions(params: { [K in keyof ParamsFrom<'listEnvironmentTemplateVersions', { next?: string, limit?: number }>]: ParamsFrom<'listEnvironmentTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironmentTemplateVersions'>]-?: ReturnTypeFrom<'listEnvironmentTemplateVersions'>[K]}['templateVersions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironmentTemplateVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEnvironmentTemplateVersions' })).toString('base64');
    const member = (Array.isArray(result.templateVersions ?? []) ? (result.templateVersions ?? []) : [result.templateVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentTemplates(params: { [K in keyof ParamsFrom<'listEnvironmentTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listEnvironmentTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironmentTemplates'>]-?: ReturnTypeFrom<'listEnvironmentTemplates'>[K]}['templates'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironmentTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEnvironmentTemplates' })).toString('base64');
    const member = (Array.isArray(result.templates ?? []) ? (result.templates ?? []) : [result.templates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironments(params: { [K in keyof ParamsFrom<'listEnvironments', { next?: string, limit?: number }>]: ParamsFrom<'listEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['environments'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"environments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEnvironments' })).toString('base64');
    const member = (Array.isArray(result.environments ?? []) ? (result.environments ?? []) : [result.environments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositories(params: { [K in keyof ParamsFrom<'listRepositories', { next?: string, limit?: number }>]: ParamsFrom<'listRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"repositories"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRepositories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRepositories' })).toString('base64');
    const member = (Array.isArray(result.repositories ?? []) ? (result.repositories ?? []) : [result.repositories]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositorySyncDefinitions(params: { [K in keyof ParamsFrom<'listRepositorySyncDefinitions', { next?: string }>]: ParamsFrom<'listRepositorySyncDefinitions', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRepositorySyncDefinitions'>]-?: ReturnTypeFrom<'listRepositorySyncDefinitions'>[K]}['syncDefinitions'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"syncDefinitions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listRepositorySyncDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRepositorySyncDefinitions' })).toString('base64');
    const member = (Array.isArray(result.syncDefinitions ?? []) ? (result.syncDefinitions ?? []) : [result.syncDefinitions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceInstanceOutputs(params: { [K in keyof ParamsFrom<'listServiceInstanceOutputs', { next?: string }>]: ParamsFrom<'listServiceInstanceOutputs', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServiceInstanceOutputs'>]-?: ReturnTypeFrom<'listServiceInstanceOutputs'>[K]}['outputs'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"outputs"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listServiceInstanceOutputs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServiceInstanceOutputs' })).toString('base64');
    const member = (Array.isArray(result.outputs ?? []) ? (result.outputs ?? []) : [result.outputs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceInstanceProvisionedResources(params: { [K in keyof ParamsFrom<'listServiceInstanceProvisionedResources', { next?: string }>]: ParamsFrom<'listServiceInstanceProvisionedResources', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServiceInstanceProvisionedResources'>]-?: ReturnTypeFrom<'listServiceInstanceProvisionedResources'>[K]}['provisionedResources'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"provisionedResources"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listServiceInstanceProvisionedResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServiceInstanceProvisionedResources' })).toString('base64');
    const member = (Array.isArray(result.provisionedResources ?? []) ? (result.provisionedResources ?? []) : [result.provisionedResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceInstances(params: { [K in keyof ParamsFrom<'listServiceInstances', { next?: string, limit?: number }>]: ParamsFrom<'listServiceInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServiceInstances'>]-?: ReturnTypeFrom<'listServiceInstances'>[K]}['serviceInstances'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"serviceInstances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServiceInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServiceInstances' })).toString('base64');
    const member = (Array.isArray(result.serviceInstances ?? []) ? (result.serviceInstances ?? []) : [result.serviceInstances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServicePipelineOutputs(params: { [K in keyof ParamsFrom<'listServicePipelineOutputs', { next?: string }>]: ParamsFrom<'listServicePipelineOutputs', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServicePipelineOutputs'>]-?: ReturnTypeFrom<'listServicePipelineOutputs'>[K]}['outputs'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"outputs"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listServicePipelineOutputs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServicePipelineOutputs' })).toString('base64');
    const member = (Array.isArray(result.outputs ?? []) ? (result.outputs ?? []) : [result.outputs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServicePipelineProvisionedResources(params: { [K in keyof ParamsFrom<'listServicePipelineProvisionedResources', { next?: string }>]: ParamsFrom<'listServicePipelineProvisionedResources', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServicePipelineProvisionedResources'>]-?: ReturnTypeFrom<'listServicePipelineProvisionedResources'>[K]}['provisionedResources'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"provisionedResources"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listServicePipelineProvisionedResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServicePipelineProvisionedResources' })).toString('base64');
    const member = (Array.isArray(result.provisionedResources ?? []) ? (result.provisionedResources ?? []) : [result.provisionedResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceTemplateVersions(params: { [K in keyof ParamsFrom<'listServiceTemplateVersions', { next?: string, limit?: number }>]: ParamsFrom<'listServiceTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServiceTemplateVersions'>]-?: ReturnTypeFrom<'listServiceTemplateVersions'>[K]}['templateVersions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServiceTemplateVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServiceTemplateVersions' })).toString('base64');
    const member = (Array.isArray(result.templateVersions ?? []) ? (result.templateVersions ?? []) : [result.templateVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceTemplates(params: { [K in keyof ParamsFrom<'listServiceTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listServiceTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServiceTemplates'>]-?: ReturnTypeFrom<'listServiceTemplates'>[K]}['templates'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServiceTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServiceTemplates' })).toString('base64');
    const member = (Array.isArray(result.templates ?? []) ? (result.templates ?? []) : [result.templates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServices(params: { [K in keyof ParamsFrom<'listServices', { next?: string, limit?: number }>]: ParamsFrom<'listServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['services'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"services"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServices' })).toString('base64');
    const member = (Array.isArray(result.services ?? []) ? (result.services ?? []) : [result.services]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTagsForResource' })).toString('base64');
    const member = (Array.isArray(result.tags ?? []) ? (result.tags ?? []) : [result.tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  notifyResourceDeploymentStatusChange: (params: RawParamsFrom<'notifyResourceDeploymentStatusChange'>) => Promise<ReturnTypeFrom<'notifyResourceDeploymentStatusChange'>>  = async params => {
  // undefined
    return this.client.notifyResourceDeploymentStatusChange(params as any).promise();
  }

  rejectEnvironmentAccountConnection: (params: RawParamsFrom<'rejectEnvironmentAccountConnection'>) => Promise<ReturnTypeFrom<'rejectEnvironmentAccountConnection'>>  = async params => {
  // undefined
    return this.client.rejectEnvironmentAccountConnection(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccountSettings: (params: RawParamsFrom<'updateAccountSettings'>) => Promise<ReturnTypeFrom<'updateAccountSettings'>>  = async params => {
  // undefined
    return this.client.updateAccountSettings(params as any).promise();
  }

  updateComponent: (params: RawParamsFrom<'updateComponent'>) => Promise<ReturnTypeFrom<'updateComponent'>>  = async params => {
  // undefined
    return this.client.updateComponent(params as any).promise();
  }

  updateEnvironment: (params: RawParamsFrom<'updateEnvironment'>) => Promise<ReturnTypeFrom<'updateEnvironment'>>  = async params => {
  // undefined
    return this.client.updateEnvironment(params as any).promise();
  }

  updateEnvironmentAccountConnection: (params: RawParamsFrom<'updateEnvironmentAccountConnection'>) => Promise<ReturnTypeFrom<'updateEnvironmentAccountConnection'>>  = async params => {
  // undefined
    return this.client.updateEnvironmentAccountConnection(params as any).promise();
  }

  updateEnvironmentTemplate: (params: RawParamsFrom<'updateEnvironmentTemplate'>) => Promise<ReturnTypeFrom<'updateEnvironmentTemplate'>>  = async params => {
  // undefined
    return this.client.updateEnvironmentTemplate(params as any).promise();
  }

  updateEnvironmentTemplateVersion: (params: RawParamsFrom<'updateEnvironmentTemplateVersion'>) => Promise<ReturnTypeFrom<'updateEnvironmentTemplateVersion'>>  = async params => {
  // undefined
    return this.client.updateEnvironmentTemplateVersion(params as any).promise();
  }

  updateService: (params: RawParamsFrom<'updateService'>) => Promise<ReturnTypeFrom<'updateService'>>  = async params => {
  // undefined
    return this.client.updateService(params as any).promise();
  }

  updateServiceInstance: (params: RawParamsFrom<'updateServiceInstance'>) => Promise<ReturnTypeFrom<'updateServiceInstance'>>  = async params => {
  // undefined
    return this.client.updateServiceInstance(params as any).promise();
  }

  updateServicePipeline: (params: RawParamsFrom<'updateServicePipeline'>) => Promise<ReturnTypeFrom<'updateServicePipeline'>>  = async params => {
  // undefined
    return this.client.updateServicePipeline(params as any).promise();
  }

  updateServiceTemplate: (params: RawParamsFrom<'updateServiceTemplate'>) => Promise<ReturnTypeFrom<'updateServiceTemplate'>>  = async params => {
  // undefined
    return this.client.updateServiceTemplate(params as any).promise();
  }

  updateServiceTemplateVersion: (params: RawParamsFrom<'updateServiceTemplateVersion'>) => Promise<ReturnTypeFrom<'updateServiceTemplateVersion'>>  = async params => {
  // undefined
    return this.client.updateServiceTemplateVersion(params as any).promise();
  }

  updateTemplateSyncConfig: (params: RawParamsFrom<'updateTemplateSyncConfig'>) => Promise<ReturnTypeFrom<'updateTemplateSyncConfig'>>  = async params => {
  // undefined
    return this.client.updateTemplateSyncConfig(params as any).promise();
  }
  
  static fromClient(client: AWSProton): Proton {
    return new Proton(client) as any;
  }
  
  static client(options?: AWSProton.Types.ClientConfiguration): Proton {
    return new Proton(new AWSProton(options)) as any;
  }
}  
