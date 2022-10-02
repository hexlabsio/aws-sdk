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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'apigateway';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["getApiKeys","getClientCertificates","getDomainNames","getRestApis","getUsagePlans","getVpcLinks"];
    
  createApiKey: FunctionTypeFrom<'createApiKey'>;

  createAuthorizer: FunctionTypeFrom<'createAuthorizer'>;

  createBasePathMapping: FunctionTypeFrom<'createBasePathMapping'>;

  createDeployment: FunctionTypeFrom<'createDeployment'>;

  createDocumentationPart: FunctionTypeFrom<'createDocumentationPart'>;

  createDocumentationVersion: FunctionTypeFrom<'createDocumentationVersion'>;

  createDomainName: FunctionTypeFrom<'createDomainName'>;

  createModel: FunctionTypeFrom<'createModel'>;

  createRequestValidator: FunctionTypeFrom<'createRequestValidator'>;

  createResource: FunctionTypeFrom<'createResource'>;

  createRestApi: FunctionTypeFrom<'createRestApi'>;

  createStage: FunctionTypeFrom<'createStage'>;

  createUsagePlan: FunctionTypeFrom<'createUsagePlan'>;

  createUsagePlanKey: FunctionTypeFrom<'createUsagePlanKey'>;

  createVpcLink: FunctionTypeFrom<'createVpcLink'>;

  deleteApiKey: FunctionTypeFrom<'deleteApiKey'>;

  deleteAuthorizer: FunctionTypeFrom<'deleteAuthorizer'>;

  deleteBasePathMapping: FunctionTypeFrom<'deleteBasePathMapping'>;

  deleteClientCertificate: FunctionTypeFrom<'deleteClientCertificate'>;

  deleteDeployment: FunctionTypeFrom<'deleteDeployment'>;

  deleteDocumentationPart: FunctionTypeFrom<'deleteDocumentationPart'>;

  deleteDocumentationVersion: FunctionTypeFrom<'deleteDocumentationVersion'>;

  deleteDomainName: FunctionTypeFrom<'deleteDomainName'>;

  deleteGatewayResponse: FunctionTypeFrom<'deleteGatewayResponse'>;

  deleteIntegration: FunctionTypeFrom<'deleteIntegration'>;

  deleteIntegrationResponse: FunctionTypeFrom<'deleteIntegrationResponse'>;

  deleteMethod: FunctionTypeFrom<'deleteMethod'>;

  deleteMethodResponse: FunctionTypeFrom<'deleteMethodResponse'>;

  deleteModel: FunctionTypeFrom<'deleteModel'>;

  deleteRequestValidator: FunctionTypeFrom<'deleteRequestValidator'>;

  deleteResource: FunctionTypeFrom<'deleteResource'>;

  deleteRestApi: FunctionTypeFrom<'deleteRestApi'>;

  deleteStage: FunctionTypeFrom<'deleteStage'>;

  deleteUsagePlan: FunctionTypeFrom<'deleteUsagePlan'>;

  deleteUsagePlanKey: FunctionTypeFrom<'deleteUsagePlanKey'>;

  deleteVpcLink: FunctionTypeFrom<'deleteVpcLink'>;

  flushStageAuthorizersCache: FunctionTypeFrom<'flushStageAuthorizersCache'>;

  flushStageCache: FunctionTypeFrom<'flushStageCache'>;

  generateClientCertificate: FunctionTypeFrom<'generateClientCertificate'>;

  getAccount: FunctionTypeFrom<'getAccount'>;

  getApiKey: FunctionTypeFrom<'getApiKey'>;

  getApiKeys(params: { [K in keyof Omit<ParamsFrom<'getApiKeys', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getApiKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getApiKeys'>]-?: ReturnTypeFrom<'getApiKeys'>[K]}['items'] }>
  getApiKeys(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getApiKeys'>]-?: ReturnTypeFrom<'getApiKeys'>[K]}['items'] }>;

  getAuthorizer: FunctionTypeFrom<'getAuthorizer'>;

  getAuthorizers: FunctionTypeFrom<'getAuthorizers'>;

  getBasePathMapping: FunctionTypeFrom<'getBasePathMapping'>;

  getBasePathMappings(params: { [K in keyof Omit<ParamsFrom<'getBasePathMappings', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getBasePathMappings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getBasePathMappings'>]-?: ReturnTypeFrom<'getBasePathMappings'>[K]}['items'] }>
  ;

  getClientCertificate: FunctionTypeFrom<'getClientCertificate'>;

  getClientCertificates(params: { [K in keyof Omit<ParamsFrom<'getClientCertificates', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getClientCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getClientCertificates'>]-?: ReturnTypeFrom<'getClientCertificates'>[K]}['items'] }>
  getClientCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getClientCertificates'>]-?: ReturnTypeFrom<'getClientCertificates'>[K]}['items'] }>;

  getDeployment: FunctionTypeFrom<'getDeployment'>;

  getDeployments(params: { [K in keyof Omit<ParamsFrom<'getDeployments', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getDeployments'>]-?: ReturnTypeFrom<'getDeployments'>[K]}['items'] }>
  ;

  getDocumentationPart: FunctionTypeFrom<'getDocumentationPart'>;

  getDocumentationParts: FunctionTypeFrom<'getDocumentationParts'>;

  getDocumentationVersion: FunctionTypeFrom<'getDocumentationVersion'>;

  getDocumentationVersions: FunctionTypeFrom<'getDocumentationVersions'>;

  getDomainName: FunctionTypeFrom<'getDomainName'>;

  getDomainNames(params: { [K in keyof Omit<ParamsFrom<'getDomainNames', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getDomainNames', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getDomainNames'>]-?: ReturnTypeFrom<'getDomainNames'>[K]}['items'] }>
  getDomainNames(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getDomainNames'>]-?: ReturnTypeFrom<'getDomainNames'>[K]}['items'] }>;

  getExport: FunctionTypeFrom<'getExport'>;

  getGatewayResponse: FunctionTypeFrom<'getGatewayResponse'>;

  getGatewayResponses: FunctionTypeFrom<'getGatewayResponses'>;

  getIntegration: FunctionTypeFrom<'getIntegration'>;

  getIntegrationResponse: FunctionTypeFrom<'getIntegrationResponse'>;

  getMethod: FunctionTypeFrom<'getMethod'>;

  getMethodResponse: FunctionTypeFrom<'getMethodResponse'>;

  getModel: FunctionTypeFrom<'getModel'>;

  getModelTemplate: FunctionTypeFrom<'getModelTemplate'>;

  getModels(params: { [K in keyof Omit<ParamsFrom<'getModels', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getModels'>]-?: ReturnTypeFrom<'getModels'>[K]}['items'] }>
  ;

  getRequestValidator: FunctionTypeFrom<'getRequestValidator'>;

  getRequestValidators: FunctionTypeFrom<'getRequestValidators'>;

  getResource: FunctionTypeFrom<'getResource'>;

  getResources(params: { [K in keyof Omit<ParamsFrom<'getResources', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getResources'>]-?: ReturnTypeFrom<'getResources'>[K]}['items'] }>
  ;

  getRestApi: FunctionTypeFrom<'getRestApi'>;

  getRestApis(params: { [K in keyof Omit<ParamsFrom<'getRestApis', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getRestApis', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getRestApis'>]-?: ReturnTypeFrom<'getRestApis'>[K]}['items'] }>
  getRestApis(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getRestApis'>]-?: ReturnTypeFrom<'getRestApis'>[K]}['items'] }>;

  getSdk: FunctionTypeFrom<'getSdk'>;

  getSdkType: FunctionTypeFrom<'getSdkType'>;

  getSdkTypes: FunctionTypeFrom<'getSdkTypes'>;

  getStage: FunctionTypeFrom<'getStage'>;

  getStages: FunctionTypeFrom<'getStages'>;

  getTags: FunctionTypeFrom<'getTags'>;

  getUsage(params: { [K in keyof Omit<ParamsFrom<'getUsage', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getUsage', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getUsage'>]-?: ReturnTypeFrom<'getUsage'>[K]}['items'] }>
  ;

  getUsagePlan: FunctionTypeFrom<'getUsagePlan'>;

  getUsagePlanKey: FunctionTypeFrom<'getUsagePlanKey'>;

  getUsagePlanKeys(params: { [K in keyof Omit<ParamsFrom<'getUsagePlanKeys', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getUsagePlanKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getUsagePlanKeys'>]-?: ReturnTypeFrom<'getUsagePlanKeys'>[K]}['items'] }>
  ;

  getUsagePlans(params: { [K in keyof Omit<ParamsFrom<'getUsagePlans', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getUsagePlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getUsagePlans'>]-?: ReturnTypeFrom<'getUsagePlans'>[K]}['items'] }>
  getUsagePlans(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getUsagePlans'>]-?: ReturnTypeFrom<'getUsagePlans'>[K]}['items'] }>;

  getVpcLink: FunctionTypeFrom<'getVpcLink'>;

  getVpcLinks(params: { [K in keyof Omit<ParamsFrom<'getVpcLinks', { next?: string, limit?: number }>, 'position' | 'limit'>]: ParamsFrom<'getVpcLinks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getVpcLinks'>]-?: ReturnTypeFrom<'getVpcLinks'>[K]}['items'] }>
  getVpcLinks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getVpcLinks'>]-?: ReturnTypeFrom<'getVpcLinks'>[K]}['items'] }>;

  importApiKeys: FunctionTypeFrom<'importApiKeys'>;

  importDocumentationParts: FunctionTypeFrom<'importDocumentationParts'>;

  importRestApi: FunctionTypeFrom<'importRestApi'>;

  putGatewayResponse: FunctionTypeFrom<'putGatewayResponse'>;

  putIntegration: FunctionTypeFrom<'putIntegration'>;

  putIntegrationResponse: FunctionTypeFrom<'putIntegrationResponse'>;

  putMethod: FunctionTypeFrom<'putMethod'>;

  putMethodResponse: FunctionTypeFrom<'putMethodResponse'>;

  putRestApi: FunctionTypeFrom<'putRestApi'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testInvokeAuthorizer: FunctionTypeFrom<'testInvokeAuthorizer'>;

  testInvokeMethod: FunctionTypeFrom<'testInvokeMethod'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccount: FunctionTypeFrom<'updateAccount'>;

  updateApiKey: FunctionTypeFrom<'updateApiKey'>;

  updateAuthorizer: FunctionTypeFrom<'updateAuthorizer'>;

  updateBasePathMapping: FunctionTypeFrom<'updateBasePathMapping'>;

  updateClientCertificate: FunctionTypeFrom<'updateClientCertificate'>;

  updateDeployment: FunctionTypeFrom<'updateDeployment'>;

  updateDocumentationPart: FunctionTypeFrom<'updateDocumentationPart'>;

  updateDocumentationVersion: FunctionTypeFrom<'updateDocumentationVersion'>;

  updateDomainName: FunctionTypeFrom<'updateDomainName'>;

  updateGatewayResponse: FunctionTypeFrom<'updateGatewayResponse'>;

  updateIntegration: FunctionTypeFrom<'updateIntegration'>;

  updateIntegrationResponse: FunctionTypeFrom<'updateIntegrationResponse'>;

  updateMethod: FunctionTypeFrom<'updateMethod'>;

  updateMethodResponse: FunctionTypeFrom<'updateMethodResponse'>;

  updateModel: FunctionTypeFrom<'updateModel'>;

  updateRequestValidator: FunctionTypeFrom<'updateRequestValidator'>;

  updateResource: FunctionTypeFrom<'updateResource'>;

  updateRestApi: FunctionTypeFrom<'updateRestApi'>;

  updateStage: FunctionTypeFrom<'updateStage'>;

  updateUsage: FunctionTypeFrom<'updateUsage'>;

  updateUsagePlan: FunctionTypeFrom<'updateUsagePlan'>;

  updateVpcLink: FunctionTypeFrom<'updateVpcLink'>
}
 
export class APIGateway implements ClientType {
  private constructor(private readonly client: AWSAPIGateway) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'apigateway';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["getApiKeys","getClientCertificates","getDomainNames","getRestApis","getUsagePlans","getVpcLinks"] as const;
  
  async createApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.createApiKey(...args).promise()
  }

  async createAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.createAuthorizer(...args).promise()
  }

  async createBasePathMapping(...args: any): Promise<any> {
  // undefined
    return this.client.createBasePathMapping(...args).promise()
  }

  async createDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createDeployment(...args).promise()
  }

  async createDocumentationPart(...args: any): Promise<any> {
  // undefined
    return this.client.createDocumentationPart(...args).promise()
  }

  async createDocumentationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createDocumentationVersion(...args).promise()
  }

  async createDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.createDomainName(...args).promise()
  }

  async createModel(...args: any): Promise<any> {
  // undefined
    return this.client.createModel(...args).promise()
  }

  async createRequestValidator(...args: any): Promise<any> {
  // undefined
    return this.client.createRequestValidator(...args).promise()
  }

  async createResource(...args: any): Promise<any> {
  // undefined
    return this.client.createResource(...args).promise()
  }

  async createRestApi(...args: any): Promise<any> {
  // undefined
    return this.client.createRestApi(...args).promise()
  }

  async createStage(...args: any): Promise<any> {
  // undefined
    return this.client.createStage(...args).promise()
  }

  async createUsagePlan(...args: any): Promise<any> {
  // undefined
    return this.client.createUsagePlan(...args).promise()
  }

  async createUsagePlanKey(...args: any): Promise<any> {
  // undefined
    return this.client.createUsagePlanKey(...args).promise()
  }

  async createVpcLink(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcLink(...args).promise()
  }

  async deleteApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApiKey(...args).promise()
  }

  async deleteAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAuthorizer(...args).promise()
  }

  async deleteBasePathMapping(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBasePathMapping(...args).promise()
  }

  async deleteClientCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClientCertificate(...args).promise()
  }

  async deleteDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeployment(...args).promise()
  }

  async deleteDocumentationPart(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDocumentationPart(...args).promise()
  }

  async deleteDocumentationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDocumentationVersion(...args).promise()
  }

  async deleteDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomainName(...args).promise()
  }

  async deleteGatewayResponse(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGatewayResponse(...args).promise()
  }

  async deleteIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntegration(...args).promise()
  }

  async deleteIntegrationResponse(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntegrationResponse(...args).promise()
  }

  async deleteMethod(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMethod(...args).promise()
  }

  async deleteMethodResponse(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMethodResponse(...args).promise()
  }

  async deleteModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModel(...args).promise()
  }

  async deleteRequestValidator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRequestValidator(...args).promise()
  }

  async deleteResource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResource(...args).promise()
  }

  async deleteRestApi(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRestApi(...args).promise()
  }

  async deleteStage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStage(...args).promise()
  }

  async deleteUsagePlan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUsagePlan(...args).promise()
  }

  async deleteUsagePlanKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUsagePlanKey(...args).promise()
  }

  async deleteVpcLink(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcLink(...args).promise()
  }

  async flushStageAuthorizersCache(...args: any): Promise<any> {
  // undefined
    return this.client.flushStageAuthorizersCache(...args).promise()
  }

  async flushStageCache(...args: any): Promise<any> {
  // undefined
    return this.client.flushStageCache(...args).promise()
  }

  async generateClientCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.generateClientCertificate(...args).promise()
  }

  async getAccount(...args: any): Promise<any> {
  // undefined
    return this.client.getAccount(...args).promise()
  }

  async getApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.getApiKey(...args).promise()
  }

  async getApiKeys(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getApiKeys(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.getAuthorizer(...args).promise()
  }

  async getAuthorizers(...args: any): Promise<any> {
  // undefined
    return this.client.getAuthorizers(...args).promise()
  }

  async getBasePathMapping(...args: any): Promise<any> {
  // undefined
    return this.client.getBasePathMapping(...args).promise()
  }

  async getBasePathMappings(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getBasePathMappings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getClientCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.getClientCertificate(...args).promise()
  }

  async getClientCertificates(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getClientCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployment(...args).promise()
  }

  async getDeployments(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getDeployments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getDocumentationPart(...args: any): Promise<any> {
  // undefined
    return this.client.getDocumentationPart(...args).promise()
  }

  async getDocumentationParts(...args: any): Promise<any> {
  // undefined
    return this.client.getDocumentationParts(...args).promise()
  }

  async getDocumentationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getDocumentationVersion(...args).promise()
  }

  async getDocumentationVersions(...args: any): Promise<any> {
  // undefined
    return this.client.getDocumentationVersions(...args).promise()
  }

  async getDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainName(...args).promise()
  }

  async getDomainNames(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getDomainNames(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getExport(...args: any): Promise<any> {
  // undefined
    return this.client.getExport(...args).promise()
  }

  async getGatewayResponse(...args: any): Promise<any> {
  // undefined
    return this.client.getGatewayResponse(...args).promise()
  }

  async getGatewayResponses(...args: any): Promise<any> {
  // undefined
    return this.client.getGatewayResponses(...args).promise()
  }

  async getIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.getIntegration(...args).promise()
  }

  async getIntegrationResponse(...args: any): Promise<any> {
  // undefined
    return this.client.getIntegrationResponse(...args).promise()
  }

  async getMethod(...args: any): Promise<any> {
  // undefined
    return this.client.getMethod(...args).promise()
  }

  async getMethodResponse(...args: any): Promise<any> {
  // undefined
    return this.client.getMethodResponse(...args).promise()
  }

  async getModel(...args: any): Promise<any> {
  // undefined
    return this.client.getModel(...args).promise()
  }

  async getModelTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getModelTemplate(...args).promise()
  }

  async getModels(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getModels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getRequestValidator(...args: any): Promise<any> {
  // undefined
    return this.client.getRequestValidator(...args).promise()
  }

  async getRequestValidators(...args: any): Promise<any> {
  // undefined
    return this.client.getRequestValidators(...args).promise()
  }

  async getResource(...args: any): Promise<any> {
  // undefined
    return this.client.getResource(...args).promise()
  }

  async getResources(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getRestApi(...args: any): Promise<any> {
  // undefined
    return this.client.getRestApi(...args).promise()
  }

  async getRestApis(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getRestApis(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getSdk(...args: any): Promise<any> {
  // undefined
    return this.client.getSdk(...args).promise()
  }

  async getSdkType(...args: any): Promise<any> {
  // undefined
    return this.client.getSdkType(...args).promise()
  }

  async getSdkTypes(...args: any): Promise<any> {
  // undefined
    return this.client.getSdkTypes(...args).promise()
  }

  async getStage(...args: any): Promise<any> {
  // undefined
    return this.client.getStage(...args).promise()
  }

  async getStages(...args: any): Promise<any> {
  // undefined
    return this.client.getStages(...args).promise()
  }

  async getTags(...args: any): Promise<any> {
  // undefined
    return this.client.getTags(...args).promise()
  }

  async getUsage(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getUsage(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getUsagePlan(...args: any): Promise<any> {
  // undefined
    return this.client.getUsagePlan(...args).promise()
  }

  async getUsagePlanKey(...args: any): Promise<any> {
  // undefined
    return this.client.getUsagePlanKey(...args).promise()
  }

  async getUsagePlanKeys(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getUsagePlanKeys(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getUsagePlans(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getUsagePlans(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getVpcLink(...args: any): Promise<any> {
  // undefined
    return this.client.getVpcLink(...args).promise()
  }

  async getVpcLinks(...args: any): Promise<any> {
    // {"inputToken":"position","limitKey":"limit","outputToken":"position","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { position: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getVpcLinks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.position;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async importApiKeys(...args: any): Promise<any> {
  // undefined
    return this.client.importApiKeys(...args).promise()
  }

  async importDocumentationParts(...args: any): Promise<any> {
  // undefined
    return this.client.importDocumentationParts(...args).promise()
  }

  async importRestApi(...args: any): Promise<any> {
  // undefined
    return this.client.importRestApi(...args).promise()
  }

  async putGatewayResponse(...args: any): Promise<any> {
  // undefined
    return this.client.putGatewayResponse(...args).promise()
  }

  async putIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.putIntegration(...args).promise()
  }

  async putIntegrationResponse(...args: any): Promise<any> {
  // undefined
    return this.client.putIntegrationResponse(...args).promise()
  }

  async putMethod(...args: any): Promise<any> {
  // undefined
    return this.client.putMethod(...args).promise()
  }

  async putMethodResponse(...args: any): Promise<any> {
  // undefined
    return this.client.putMethodResponse(...args).promise()
  }

  async putRestApi(...args: any): Promise<any> {
  // undefined
    return this.client.putRestApi(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testInvokeAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.testInvokeAuthorizer(...args).promise()
  }

  async testInvokeMethod(...args: any): Promise<any> {
  // undefined
    return this.client.testInvokeMethod(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAccount(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccount(...args).promise()
  }

  async updateApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.updateApiKey(...args).promise()
  }

  async updateAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.updateAuthorizer(...args).promise()
  }

  async updateBasePathMapping(...args: any): Promise<any> {
  // undefined
    return this.client.updateBasePathMapping(...args).promise()
  }

  async updateClientCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.updateClientCertificate(...args).promise()
  }

  async updateDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeployment(...args).promise()
  }

  async updateDocumentationPart(...args: any): Promise<any> {
  // undefined
    return this.client.updateDocumentationPart(...args).promise()
  }

  async updateDocumentationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateDocumentationVersion(...args).promise()
  }

  async updateDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainName(...args).promise()
  }

  async updateGatewayResponse(...args: any): Promise<any> {
  // undefined
    return this.client.updateGatewayResponse(...args).promise()
  }

  async updateIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.updateIntegration(...args).promise()
  }

  async updateIntegrationResponse(...args: any): Promise<any> {
  // undefined
    return this.client.updateIntegrationResponse(...args).promise()
  }

  async updateMethod(...args: any): Promise<any> {
  // undefined
    return this.client.updateMethod(...args).promise()
  }

  async updateMethodResponse(...args: any): Promise<any> {
  // undefined
    return this.client.updateMethodResponse(...args).promise()
  }

  async updateModel(...args: any): Promise<any> {
  // undefined
    return this.client.updateModel(...args).promise()
  }

  async updateRequestValidator(...args: any): Promise<any> {
  // undefined
    return this.client.updateRequestValidator(...args).promise()
  }

  async updateResource(...args: any): Promise<any> {
  // undefined
    return this.client.updateResource(...args).promise()
  }

  async updateRestApi(...args: any): Promise<any> {
  // undefined
    return this.client.updateRestApi(...args).promise()
  }

  async updateStage(...args: any): Promise<any> {
  // undefined
    return this.client.updateStage(...args).promise()
  }

  async updateUsage(...args: any): Promise<any> {
  // undefined
    return this.client.updateUsage(...args).promise()
  }

  async updateUsagePlan(...args: any): Promise<any> {
  // undefined
    return this.client.updateUsagePlan(...args).promise()
  }

  async updateVpcLink(...args: any): Promise<any> {
  // undefined
    return this.client.updateVpcLink(...args).promise()
  }
  
  static fromClient(client: AWSAPIGateway): ClientType {
    return new APIGateway(client) as any;
  }
  
  static client(options?: AWSAPIGateway.Types.ClientConfiguration): ClientType {
    return new APIGateway(new AWSAPIGateway(options)) as any;
  }
}  
