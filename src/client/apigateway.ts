import { Request, APIGateway as AWSAPIGateway } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAPIGateway> = AWSAPIGateway[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAPIGateway> = AWSAPIGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAPIGateway[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAPIGateway, Extras> = AWSAPIGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAPIGateway> = AWSAPIGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class APIGateway {
  private constructor(private readonly client: AWSAPIGateway) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'apigateway' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["getApiKeys","getClientCertificates","getDomainNames","getRestApis","getUsagePlans","getVpcLinks"] as const;
  
  createApiKey: (params: RawParamsFrom<'createApiKey'>) => Promise<ReturnTypeFrom<'createApiKey'>>  = async params => {
  // undefined
    return this.client.createApiKey(params as any).promise();
  }

  createAuthorizer: (params: RawParamsFrom<'createAuthorizer'>) => Promise<ReturnTypeFrom<'createAuthorizer'>>  = async params => {
  // undefined
    return this.client.createAuthorizer(params as any).promise();
  }

  createBasePathMapping: (params: RawParamsFrom<'createBasePathMapping'>) => Promise<ReturnTypeFrom<'createBasePathMapping'>>  = async params => {
  // undefined
    return this.client.createBasePathMapping(params as any).promise();
  }

  createDeployment: (params: RawParamsFrom<'createDeployment'>) => Promise<ReturnTypeFrom<'createDeployment'>>  = async params => {
  // undefined
    return this.client.createDeployment(params as any).promise();
  }

  createDocumentationPart: (params: RawParamsFrom<'createDocumentationPart'>) => Promise<ReturnTypeFrom<'createDocumentationPart'>>  = async params => {
  // undefined
    return this.client.createDocumentationPart(params as any).promise();
  }

  createDocumentationVersion: (params: RawParamsFrom<'createDocumentationVersion'>) => Promise<ReturnTypeFrom<'createDocumentationVersion'>>  = async params => {
  // undefined
    return this.client.createDocumentationVersion(params as any).promise();
  }

  createDomainName: (params: RawParamsFrom<'createDomainName'>) => Promise<ReturnTypeFrom<'createDomainName'>>  = async params => {
  // undefined
    return this.client.createDomainName(params as any).promise();
  }

  createModel: (params: RawParamsFrom<'createModel'>) => Promise<ReturnTypeFrom<'createModel'>>  = async params => {
  // undefined
    return this.client.createModel(params as any).promise();
  }

  createRequestValidator: (params: RawParamsFrom<'createRequestValidator'>) => Promise<ReturnTypeFrom<'createRequestValidator'>>  = async params => {
  // undefined
    return this.client.createRequestValidator(params as any).promise();
  }

  createResource: (params: RawParamsFrom<'createResource'>) => Promise<ReturnTypeFrom<'createResource'>>  = async params => {
  // undefined
    return this.client.createResource(params as any).promise();
  }

  createRestApi: (params: RawParamsFrom<'createRestApi'>) => Promise<ReturnTypeFrom<'createRestApi'>>  = async params => {
  // undefined
    return this.client.createRestApi(params as any).promise();
  }

  createStage: (params: RawParamsFrom<'createStage'>) => Promise<ReturnTypeFrom<'createStage'>>  = async params => {
  // undefined
    return this.client.createStage(params as any).promise();
  }

  createUsagePlan: (params: RawParamsFrom<'createUsagePlan'>) => Promise<ReturnTypeFrom<'createUsagePlan'>>  = async params => {
  // undefined
    return this.client.createUsagePlan(params as any).promise();
  }

  createUsagePlanKey: (params: RawParamsFrom<'createUsagePlanKey'>) => Promise<ReturnTypeFrom<'createUsagePlanKey'>>  = async params => {
  // undefined
    return this.client.createUsagePlanKey(params as any).promise();
  }

  createVpcLink: (params: RawParamsFrom<'createVpcLink'>) => Promise<ReturnTypeFrom<'createVpcLink'>>  = async params => {
  // undefined
    return this.client.createVpcLink(params as any).promise();
  }

  deleteApiKey: (params: RawParamsFrom<'deleteApiKey'>) => Promise<ReturnTypeFrom<'deleteApiKey'>>  = async params => {
  // undefined
    return this.client.deleteApiKey(params as any).promise();
  }

  deleteAuthorizer: (params: RawParamsFrom<'deleteAuthorizer'>) => Promise<ReturnTypeFrom<'deleteAuthorizer'>>  = async params => {
  // undefined
    return this.client.deleteAuthorizer(params as any).promise();
  }

  deleteBasePathMapping: (params: RawParamsFrom<'deleteBasePathMapping'>) => Promise<ReturnTypeFrom<'deleteBasePathMapping'>>  = async params => {
  // undefined
    return this.client.deleteBasePathMapping(params as any).promise();
  }

  deleteClientCertificate: (params: RawParamsFrom<'deleteClientCertificate'>) => Promise<ReturnTypeFrom<'deleteClientCertificate'>>  = async params => {
  // undefined
    return this.client.deleteClientCertificate(params as any).promise();
  }

  deleteDeployment: (params: RawParamsFrom<'deleteDeployment'>) => Promise<ReturnTypeFrom<'deleteDeployment'>>  = async params => {
  // undefined
    return this.client.deleteDeployment(params as any).promise();
  }

  deleteDocumentationPart: (params: RawParamsFrom<'deleteDocumentationPart'>) => Promise<ReturnTypeFrom<'deleteDocumentationPart'>>  = async params => {
  // undefined
    return this.client.deleteDocumentationPart(params as any).promise();
  }

  deleteDocumentationVersion: (params: RawParamsFrom<'deleteDocumentationVersion'>) => Promise<ReturnTypeFrom<'deleteDocumentationVersion'>>  = async params => {
  // undefined
    return this.client.deleteDocumentationVersion(params as any).promise();
  }

  deleteDomainName: (params: RawParamsFrom<'deleteDomainName'>) => Promise<ReturnTypeFrom<'deleteDomainName'>>  = async params => {
  // undefined
    return this.client.deleteDomainName(params as any).promise();
  }

  deleteGatewayResponse: (params: RawParamsFrom<'deleteGatewayResponse'>) => Promise<ReturnTypeFrom<'deleteGatewayResponse'>>  = async params => {
  // undefined
    return this.client.deleteGatewayResponse(params as any).promise();
  }

  deleteIntegration: (params: RawParamsFrom<'deleteIntegration'>) => Promise<ReturnTypeFrom<'deleteIntegration'>>  = async params => {
  // undefined
    return this.client.deleteIntegration(params as any).promise();
  }

  deleteIntegrationResponse: (params: RawParamsFrom<'deleteIntegrationResponse'>) => Promise<ReturnTypeFrom<'deleteIntegrationResponse'>>  = async params => {
  // undefined
    return this.client.deleteIntegrationResponse(params as any).promise();
  }

  deleteMethod: (params: RawParamsFrom<'deleteMethod'>) => Promise<ReturnTypeFrom<'deleteMethod'>>  = async params => {
  // undefined
    return this.client.deleteMethod(params as any).promise();
  }

  deleteMethodResponse: (params: RawParamsFrom<'deleteMethodResponse'>) => Promise<ReturnTypeFrom<'deleteMethodResponse'>>  = async params => {
  // undefined
    return this.client.deleteMethodResponse(params as any).promise();
  }

  deleteModel: (params: RawParamsFrom<'deleteModel'>) => Promise<ReturnTypeFrom<'deleteModel'>>  = async params => {
  // undefined
    return this.client.deleteModel(params as any).promise();
  }

  deleteRequestValidator: (params: RawParamsFrom<'deleteRequestValidator'>) => Promise<ReturnTypeFrom<'deleteRequestValidator'>>  = async params => {
  // undefined
    return this.client.deleteRequestValidator(params as any).promise();
  }

  deleteResource: (params: RawParamsFrom<'deleteResource'>) => Promise<ReturnTypeFrom<'deleteResource'>>  = async params => {
  // undefined
    return this.client.deleteResource(params as any).promise();
  }

  deleteRestApi: (params: RawParamsFrom<'deleteRestApi'>) => Promise<ReturnTypeFrom<'deleteRestApi'>>  = async params => {
  // undefined
    return this.client.deleteRestApi(params as any).promise();
  }

  deleteStage: (params: RawParamsFrom<'deleteStage'>) => Promise<ReturnTypeFrom<'deleteStage'>>  = async params => {
  // undefined
    return this.client.deleteStage(params as any).promise();
  }

  deleteUsagePlan: (params: RawParamsFrom<'deleteUsagePlan'>) => Promise<ReturnTypeFrom<'deleteUsagePlan'>>  = async params => {
  // undefined
    return this.client.deleteUsagePlan(params as any).promise();
  }

  deleteUsagePlanKey: (params: RawParamsFrom<'deleteUsagePlanKey'>) => Promise<ReturnTypeFrom<'deleteUsagePlanKey'>>  = async params => {
  // undefined
    return this.client.deleteUsagePlanKey(params as any).promise();
  }

  deleteVpcLink: (params: RawParamsFrom<'deleteVpcLink'>) => Promise<ReturnTypeFrom<'deleteVpcLink'>>  = async params => {
  // undefined
    return this.client.deleteVpcLink(params as any).promise();
  }

  flushStageAuthorizersCache: (params: RawParamsFrom<'flushStageAuthorizersCache'>) => Promise<ReturnTypeFrom<'flushStageAuthorizersCache'>>  = async params => {
  // undefined
    return this.client.flushStageAuthorizersCache(params as any).promise();
  }

  flushStageCache: (params: RawParamsFrom<'flushStageCache'>) => Promise<ReturnTypeFrom<'flushStageCache'>>  = async params => {
  // undefined
    return this.client.flushStageCache(params as any).promise();
  }

  generateClientCertificate: (params: RawParamsFrom<'generateClientCertificate'>) => Promise<ReturnTypeFrom<'generateClientCertificate'>>  = async params => {
  // undefined
    return this.client.generateClientCertificate(params as any).promise();
  }

  getAccount: (params: RawParamsFrom<'getAccount'>) => Promise<ReturnTypeFrom<'getAccount'>>  = async params => {
  // undefined
    return this.client.getAccount(params as any).promise();
  }

  getApiKey: (params: RawParamsFrom<'getApiKey'>) => Promise<ReturnTypeFrom<'getApiKey'>>  = async params => {
  // undefined
    return this.client.getApiKey(params as any).promise();
  }

  async getApiKeys(params: { [K in keyof ParamsFrom<'getApiKeys', { next?: string, limit?: number }>]: ParamsFrom<'getApiKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getApiKeys'>]-?: ReturnTypeFrom<'getApiKeys'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getApiKeys({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getApiKeys' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getAuthorizer: (params: RawParamsFrom<'getAuthorizer'>) => Promise<ReturnTypeFrom<'getAuthorizer'>>  = async params => {
  // undefined
    return this.client.getAuthorizer(params as any).promise();
  }

  getAuthorizers: (params: RawParamsFrom<'getAuthorizers'>) => Promise<ReturnTypeFrom<'getAuthorizers'>>  = async params => {
  // undefined
    return this.client.getAuthorizers(params as any).promise();
  }

  getBasePathMapping: (params: RawParamsFrom<'getBasePathMapping'>) => Promise<ReturnTypeFrom<'getBasePathMapping'>>  = async params => {
  // undefined
    return this.client.getBasePathMapping(params as any).promise();
  }

  async getBasePathMappings(params: { [K in keyof ParamsFrom<'getBasePathMappings', { next?: string, limit?: number }>]: ParamsFrom<'getBasePathMappings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getBasePathMappings'>]-?: ReturnTypeFrom<'getBasePathMappings'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getBasePathMappings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getBasePathMappings' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getClientCertificate: (params: RawParamsFrom<'getClientCertificate'>) => Promise<ReturnTypeFrom<'getClientCertificate'>>  = async params => {
  // undefined
    return this.client.getClientCertificate(params as any).promise();
  }

  async getClientCertificates(params: { [K in keyof ParamsFrom<'getClientCertificates', { next?: string, limit?: number }>]: ParamsFrom<'getClientCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getClientCertificates'>]-?: ReturnTypeFrom<'getClientCertificates'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getClientCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getClientCertificates' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getDeployment: (params: RawParamsFrom<'getDeployment'>) => Promise<ReturnTypeFrom<'getDeployment'>>  = async params => {
  // undefined
    return this.client.getDeployment(params as any).promise();
  }

  async getDeployments(params: { [K in keyof ParamsFrom<'getDeployments', { next?: string, limit?: number }>]: ParamsFrom<'getDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getDeployments'>]-?: ReturnTypeFrom<'getDeployments'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getDeployments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getDeployments' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getDocumentationPart: (params: RawParamsFrom<'getDocumentationPart'>) => Promise<ReturnTypeFrom<'getDocumentationPart'>>  = async params => {
  // undefined
    return this.client.getDocumentationPart(params as any).promise();
  }

  getDocumentationParts: (params: RawParamsFrom<'getDocumentationParts'>) => Promise<ReturnTypeFrom<'getDocumentationParts'>>  = async params => {
  // undefined
    return this.client.getDocumentationParts(params as any).promise();
  }

  getDocumentationVersion: (params: RawParamsFrom<'getDocumentationVersion'>) => Promise<ReturnTypeFrom<'getDocumentationVersion'>>  = async params => {
  // undefined
    return this.client.getDocumentationVersion(params as any).promise();
  }

  getDocumentationVersions: (params: RawParamsFrom<'getDocumentationVersions'>) => Promise<ReturnTypeFrom<'getDocumentationVersions'>>  = async params => {
  // undefined
    return this.client.getDocumentationVersions(params as any).promise();
  }

  getDomainName: (params: RawParamsFrom<'getDomainName'>) => Promise<ReturnTypeFrom<'getDomainName'>>  = async params => {
  // undefined
    return this.client.getDomainName(params as any).promise();
  }

  async getDomainNames(params: { [K in keyof ParamsFrom<'getDomainNames', { next?: string, limit?: number }>]: ParamsFrom<'getDomainNames', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getDomainNames'>]-?: ReturnTypeFrom<'getDomainNames'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getDomainNames({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getDomainNames' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getExport: (params: RawParamsFrom<'getExport'>) => Promise<ReturnTypeFrom<'getExport'>>  = async params => {
  // undefined
    return this.client.getExport(params as any).promise();
  }

  getGatewayResponse: (params: RawParamsFrom<'getGatewayResponse'>) => Promise<ReturnTypeFrom<'getGatewayResponse'>>  = async params => {
  // undefined
    return this.client.getGatewayResponse(params as any).promise();
  }

  getGatewayResponses: (params: RawParamsFrom<'getGatewayResponses'>) => Promise<ReturnTypeFrom<'getGatewayResponses'>>  = async params => {
  // undefined
    return this.client.getGatewayResponses(params as any).promise();
  }

  getIntegration: (params: RawParamsFrom<'getIntegration'>) => Promise<ReturnTypeFrom<'getIntegration'>>  = async params => {
  // undefined
    return this.client.getIntegration(params as any).promise();
  }

  getIntegrationResponse: (params: RawParamsFrom<'getIntegrationResponse'>) => Promise<ReturnTypeFrom<'getIntegrationResponse'>>  = async params => {
  // undefined
    return this.client.getIntegrationResponse(params as any).promise();
  }

  getMethod: (params: RawParamsFrom<'getMethod'>) => Promise<ReturnTypeFrom<'getMethod'>>  = async params => {
  // undefined
    return this.client.getMethod(params as any).promise();
  }

  getMethodResponse: (params: RawParamsFrom<'getMethodResponse'>) => Promise<ReturnTypeFrom<'getMethodResponse'>>  = async params => {
  // undefined
    return this.client.getMethodResponse(params as any).promise();
  }

  getModel: (params: RawParamsFrom<'getModel'>) => Promise<ReturnTypeFrom<'getModel'>>  = async params => {
  // undefined
    return this.client.getModel(params as any).promise();
  }

  getModelTemplate: (params: RawParamsFrom<'getModelTemplate'>) => Promise<ReturnTypeFrom<'getModelTemplate'>>  = async params => {
  // undefined
    return this.client.getModelTemplate(params as any).promise();
  }

  async getModels(params: { [K in keyof ParamsFrom<'getModels', { next?: string, limit?: number }>]: ParamsFrom<'getModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getModels'>]-?: ReturnTypeFrom<'getModels'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getModels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getModels' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getRequestValidator: (params: RawParamsFrom<'getRequestValidator'>) => Promise<ReturnTypeFrom<'getRequestValidator'>>  = async params => {
  // undefined
    return this.client.getRequestValidator(params as any).promise();
  }

  getRequestValidators: (params: RawParamsFrom<'getRequestValidators'>) => Promise<ReturnTypeFrom<'getRequestValidators'>>  = async params => {
  // undefined
    return this.client.getRequestValidators(params as any).promise();
  }

  getResource: (params: RawParamsFrom<'getResource'>) => Promise<ReturnTypeFrom<'getResource'>>  = async params => {
  // undefined
    return this.client.getResource(params as any).promise();
  }

  async getResources(params: { [K in keyof ParamsFrom<'getResources', { next?: string, limit?: number }>]: ParamsFrom<'getResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getResources'>]-?: ReturnTypeFrom<'getResources'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getResources' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getRestApi: (params: RawParamsFrom<'getRestApi'>) => Promise<ReturnTypeFrom<'getRestApi'>>  = async params => {
  // undefined
    return this.client.getRestApi(params as any).promise();
  }

  async getRestApis(params: { [K in keyof ParamsFrom<'getRestApis', { next?: string, limit?: number }>]: ParamsFrom<'getRestApis', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getRestApis'>]-?: ReturnTypeFrom<'getRestApis'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getRestApis({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getRestApis' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getSdk: (params: RawParamsFrom<'getSdk'>) => Promise<ReturnTypeFrom<'getSdk'>>  = async params => {
  // undefined
    return this.client.getSdk(params as any).promise();
  }

  getSdkType: (params: RawParamsFrom<'getSdkType'>) => Promise<ReturnTypeFrom<'getSdkType'>>  = async params => {
  // undefined
    return this.client.getSdkType(params as any).promise();
  }

  getSdkTypes: (params: RawParamsFrom<'getSdkTypes'>) => Promise<ReturnTypeFrom<'getSdkTypes'>>  = async params => {
  // undefined
    return this.client.getSdkTypes(params as any).promise();
  }

  getStage: (params: RawParamsFrom<'getStage'>) => Promise<ReturnTypeFrom<'getStage'>>  = async params => {
  // undefined
    return this.client.getStage(params as any).promise();
  }

  getStages: (params: RawParamsFrom<'getStages'>) => Promise<ReturnTypeFrom<'getStages'>>  = async params => {
  // undefined
    return this.client.getStages(params as any).promise();
  }

  getTags: (params: RawParamsFrom<'getTags'>) => Promise<ReturnTypeFrom<'getTags'>>  = async params => {
  // undefined
    return this.client.getTags(params as any).promise();
  }

  async getUsage(params: { [K in keyof ParamsFrom<'getUsage', { next?: string, limit?: number }>]: ParamsFrom<'getUsage', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getUsage'>]-?: ReturnTypeFrom<'getUsage'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getUsage({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getUsage' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getUsagePlan: (params: RawParamsFrom<'getUsagePlan'>) => Promise<ReturnTypeFrom<'getUsagePlan'>>  = async params => {
  // undefined
    return this.client.getUsagePlan(params as any).promise();
  }

  getUsagePlanKey: (params: RawParamsFrom<'getUsagePlanKey'>) => Promise<ReturnTypeFrom<'getUsagePlanKey'>>  = async params => {
  // undefined
    return this.client.getUsagePlanKey(params as any).promise();
  }

  async getUsagePlanKeys(params: { [K in keyof ParamsFrom<'getUsagePlanKeys', { next?: string, limit?: number }>]: ParamsFrom<'getUsagePlanKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getUsagePlanKeys'>]-?: ReturnTypeFrom<'getUsagePlanKeys'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getUsagePlanKeys({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getUsagePlanKeys' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getUsagePlans(params: { [K in keyof ParamsFrom<'getUsagePlans', { next?: string, limit?: number }>]: ParamsFrom<'getUsagePlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getUsagePlans'>]-?: ReturnTypeFrom<'getUsagePlans'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getUsagePlans({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getUsagePlans' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getVpcLink: (params: RawParamsFrom<'getVpcLink'>) => Promise<ReturnTypeFrom<'getVpcLink'>>  = async params => {
  // undefined
    return this.client.getVpcLink(params as any).promise();
  }

  async getVpcLinks(params: { [K in keyof ParamsFrom<'getVpcLinks', { next?: string, limit?: number }>]: ParamsFrom<'getVpcLinks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getVpcLinks'>]-?: ReturnTypeFrom<'getVpcLinks'>[K]}['items'], undefined>}> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { position: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getVpcLinks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.position, operation: 'getVpcLinks' })).toString('base64');
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  importApiKeys: (params: RawParamsFrom<'importApiKeys'>) => Promise<ReturnTypeFrom<'importApiKeys'>>  = async params => {
  // undefined
    return this.client.importApiKeys(params as any).promise();
  }

  importDocumentationParts: (params: RawParamsFrom<'importDocumentationParts'>) => Promise<ReturnTypeFrom<'importDocumentationParts'>>  = async params => {
  // undefined
    return this.client.importDocumentationParts(params as any).promise();
  }

  importRestApi: (params: RawParamsFrom<'importRestApi'>) => Promise<ReturnTypeFrom<'importRestApi'>>  = async params => {
  // undefined
    return this.client.importRestApi(params as any).promise();
  }

  putGatewayResponse: (params: RawParamsFrom<'putGatewayResponse'>) => Promise<ReturnTypeFrom<'putGatewayResponse'>>  = async params => {
  // undefined
    return this.client.putGatewayResponse(params as any).promise();
  }

  putIntegration: (params: RawParamsFrom<'putIntegration'>) => Promise<ReturnTypeFrom<'putIntegration'>>  = async params => {
  // undefined
    return this.client.putIntegration(params as any).promise();
  }

  putIntegrationResponse: (params: RawParamsFrom<'putIntegrationResponse'>) => Promise<ReturnTypeFrom<'putIntegrationResponse'>>  = async params => {
  // undefined
    return this.client.putIntegrationResponse(params as any).promise();
  }

  putMethod: (params: RawParamsFrom<'putMethod'>) => Promise<ReturnTypeFrom<'putMethod'>>  = async params => {
  // undefined
    return this.client.putMethod(params as any).promise();
  }

  putMethodResponse: (params: RawParamsFrom<'putMethodResponse'>) => Promise<ReturnTypeFrom<'putMethodResponse'>>  = async params => {
  // undefined
    return this.client.putMethodResponse(params as any).promise();
  }

  putRestApi: (params: RawParamsFrom<'putRestApi'>) => Promise<ReturnTypeFrom<'putRestApi'>>  = async params => {
  // undefined
    return this.client.putRestApi(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testInvokeAuthorizer: (params: RawParamsFrom<'testInvokeAuthorizer'>) => Promise<ReturnTypeFrom<'testInvokeAuthorizer'>>  = async params => {
  // undefined
    return this.client.testInvokeAuthorizer(params as any).promise();
  }

  testInvokeMethod: (params: RawParamsFrom<'testInvokeMethod'>) => Promise<ReturnTypeFrom<'testInvokeMethod'>>  = async params => {
  // undefined
    return this.client.testInvokeMethod(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccount: (params: RawParamsFrom<'updateAccount'>) => Promise<ReturnTypeFrom<'updateAccount'>>  = async params => {
  // undefined
    return this.client.updateAccount(params as any).promise();
  }

  updateApiKey: (params: RawParamsFrom<'updateApiKey'>) => Promise<ReturnTypeFrom<'updateApiKey'>>  = async params => {
  // undefined
    return this.client.updateApiKey(params as any).promise();
  }

  updateAuthorizer: (params: RawParamsFrom<'updateAuthorizer'>) => Promise<ReturnTypeFrom<'updateAuthorizer'>>  = async params => {
  // undefined
    return this.client.updateAuthorizer(params as any).promise();
  }

  updateBasePathMapping: (params: RawParamsFrom<'updateBasePathMapping'>) => Promise<ReturnTypeFrom<'updateBasePathMapping'>>  = async params => {
  // undefined
    return this.client.updateBasePathMapping(params as any).promise();
  }

  updateClientCertificate: (params: RawParamsFrom<'updateClientCertificate'>) => Promise<ReturnTypeFrom<'updateClientCertificate'>>  = async params => {
  // undefined
    return this.client.updateClientCertificate(params as any).promise();
  }

  updateDeployment: (params: RawParamsFrom<'updateDeployment'>) => Promise<ReturnTypeFrom<'updateDeployment'>>  = async params => {
  // undefined
    return this.client.updateDeployment(params as any).promise();
  }

  updateDocumentationPart: (params: RawParamsFrom<'updateDocumentationPart'>) => Promise<ReturnTypeFrom<'updateDocumentationPart'>>  = async params => {
  // undefined
    return this.client.updateDocumentationPart(params as any).promise();
  }

  updateDocumentationVersion: (params: RawParamsFrom<'updateDocumentationVersion'>) => Promise<ReturnTypeFrom<'updateDocumentationVersion'>>  = async params => {
  // undefined
    return this.client.updateDocumentationVersion(params as any).promise();
  }

  updateDomainName: (params: RawParamsFrom<'updateDomainName'>) => Promise<ReturnTypeFrom<'updateDomainName'>>  = async params => {
  // undefined
    return this.client.updateDomainName(params as any).promise();
  }

  updateGatewayResponse: (params: RawParamsFrom<'updateGatewayResponse'>) => Promise<ReturnTypeFrom<'updateGatewayResponse'>>  = async params => {
  // undefined
    return this.client.updateGatewayResponse(params as any).promise();
  }

  updateIntegration: (params: RawParamsFrom<'updateIntegration'>) => Promise<ReturnTypeFrom<'updateIntegration'>>  = async params => {
  // undefined
    return this.client.updateIntegration(params as any).promise();
  }

  updateIntegrationResponse: (params: RawParamsFrom<'updateIntegrationResponse'>) => Promise<ReturnTypeFrom<'updateIntegrationResponse'>>  = async params => {
  // undefined
    return this.client.updateIntegrationResponse(params as any).promise();
  }

  updateMethod: (params: RawParamsFrom<'updateMethod'>) => Promise<ReturnTypeFrom<'updateMethod'>>  = async params => {
  // undefined
    return this.client.updateMethod(params as any).promise();
  }

  updateMethodResponse: (params: RawParamsFrom<'updateMethodResponse'>) => Promise<ReturnTypeFrom<'updateMethodResponse'>>  = async params => {
  // undefined
    return this.client.updateMethodResponse(params as any).promise();
  }

  updateModel: (params: RawParamsFrom<'updateModel'>) => Promise<ReturnTypeFrom<'updateModel'>>  = async params => {
  // undefined
    return this.client.updateModel(params as any).promise();
  }

  updateRequestValidator: (params: RawParamsFrom<'updateRequestValidator'>) => Promise<ReturnTypeFrom<'updateRequestValidator'>>  = async params => {
  // undefined
    return this.client.updateRequestValidator(params as any).promise();
  }

  updateResource: (params: RawParamsFrom<'updateResource'>) => Promise<ReturnTypeFrom<'updateResource'>>  = async params => {
  // undefined
    return this.client.updateResource(params as any).promise();
  }

  updateRestApi: (params: RawParamsFrom<'updateRestApi'>) => Promise<ReturnTypeFrom<'updateRestApi'>>  = async params => {
  // undefined
    return this.client.updateRestApi(params as any).promise();
  }

  updateStage: (params: RawParamsFrom<'updateStage'>) => Promise<ReturnTypeFrom<'updateStage'>>  = async params => {
  // undefined
    return this.client.updateStage(params as any).promise();
  }

  updateUsage: (params: RawParamsFrom<'updateUsage'>) => Promise<ReturnTypeFrom<'updateUsage'>>  = async params => {
  // undefined
    return this.client.updateUsage(params as any).promise();
  }

  updateUsagePlan: (params: RawParamsFrom<'updateUsagePlan'>) => Promise<ReturnTypeFrom<'updateUsagePlan'>>  = async params => {
  // undefined
    return this.client.updateUsagePlan(params as any).promise();
  }

  updateVpcLink: (params: RawParamsFrom<'updateVpcLink'>) => Promise<ReturnTypeFrom<'updateVpcLink'>>  = async params => {
  // undefined
    return this.client.updateVpcLink(params as any).promise();
  }
  
  static fromClient(client: AWSAPIGateway): APIGateway {
    return new APIGateway(client) as any;
  }
  
  static client(options?: AWSAPIGateway.Types.ClientConfiguration): APIGateway {
    return new APIGateway(new AWSAPIGateway(options)) as any;
  }
}  
