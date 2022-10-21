import { Request, ApiGatewayV2 as AWSApiGatewayV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSApiGatewayV2> = AWSApiGatewayV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSApiGatewayV2> = AWSApiGatewayV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSApiGatewayV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSApiGatewayV2, Extras> = AWSApiGatewayV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSApiGatewayV2> = AWSApiGatewayV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ApiGatewayV2 {
  private constructor(private readonly client: AWSApiGatewayV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'apigateway' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = [] as const;
  
  createApi: (params: RawParamsFrom<'createApi'>) => Promise<ReturnTypeFrom<'createApi'>>  = async params => {
  // undefined
    return this.client.createApi(params as any).promise();
  }

  createApiMapping: (params: RawParamsFrom<'createApiMapping'>) => Promise<ReturnTypeFrom<'createApiMapping'>>  = async params => {
  // undefined
    return this.client.createApiMapping(params as any).promise();
  }

  createAuthorizer: (params: RawParamsFrom<'createAuthorizer'>) => Promise<ReturnTypeFrom<'createAuthorizer'>>  = async params => {
  // undefined
    return this.client.createAuthorizer(params as any).promise();
  }

  createDeployment: (params: RawParamsFrom<'createDeployment'>) => Promise<ReturnTypeFrom<'createDeployment'>>  = async params => {
  // undefined
    return this.client.createDeployment(params as any).promise();
  }

  createDomainName: (params: RawParamsFrom<'createDomainName'>) => Promise<ReturnTypeFrom<'createDomainName'>>  = async params => {
  // undefined
    return this.client.createDomainName(params as any).promise();
  }

  createIntegration: (params: RawParamsFrom<'createIntegration'>) => Promise<ReturnTypeFrom<'createIntegration'>>  = async params => {
  // undefined
    return this.client.createIntegration(params as any).promise();
  }

  createIntegrationResponse: (params: RawParamsFrom<'createIntegrationResponse'>) => Promise<ReturnTypeFrom<'createIntegrationResponse'>>  = async params => {
  // undefined
    return this.client.createIntegrationResponse(params as any).promise();
  }

  createModel: (params: RawParamsFrom<'createModel'>) => Promise<ReturnTypeFrom<'createModel'>>  = async params => {
  // undefined
    return this.client.createModel(params as any).promise();
  }

  createRoute: (params: RawParamsFrom<'createRoute'>) => Promise<ReturnTypeFrom<'createRoute'>>  = async params => {
  // undefined
    return this.client.createRoute(params as any).promise();
  }

  createRouteResponse: (params: RawParamsFrom<'createRouteResponse'>) => Promise<ReturnTypeFrom<'createRouteResponse'>>  = async params => {
  // undefined
    return this.client.createRouteResponse(params as any).promise();
  }

  createStage: (params: RawParamsFrom<'createStage'>) => Promise<ReturnTypeFrom<'createStage'>>  = async params => {
  // undefined
    return this.client.createStage(params as any).promise();
  }

  createVpcLink: (params: RawParamsFrom<'createVpcLink'>) => Promise<ReturnTypeFrom<'createVpcLink'>>  = async params => {
  // undefined
    return this.client.createVpcLink(params as any).promise();
  }

  deleteAccessLogSettings: (params: RawParamsFrom<'deleteAccessLogSettings'>) => Promise<ReturnTypeFrom<'deleteAccessLogSettings'>>  = async params => {
  // undefined
    return this.client.deleteAccessLogSettings(params as any).promise();
  }

  deleteApi: (params: RawParamsFrom<'deleteApi'>) => Promise<ReturnTypeFrom<'deleteApi'>>  = async params => {
  // undefined
    return this.client.deleteApi(params as any).promise();
  }

  deleteApiMapping: (params: RawParamsFrom<'deleteApiMapping'>) => Promise<ReturnTypeFrom<'deleteApiMapping'>>  = async params => {
  // undefined
    return this.client.deleteApiMapping(params as any).promise();
  }

  deleteAuthorizer: (params: RawParamsFrom<'deleteAuthorizer'>) => Promise<ReturnTypeFrom<'deleteAuthorizer'>>  = async params => {
  // undefined
    return this.client.deleteAuthorizer(params as any).promise();
  }

  deleteCorsConfiguration: (params: RawParamsFrom<'deleteCorsConfiguration'>) => Promise<ReturnTypeFrom<'deleteCorsConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteCorsConfiguration(params as any).promise();
  }

  deleteDeployment: (params: RawParamsFrom<'deleteDeployment'>) => Promise<ReturnTypeFrom<'deleteDeployment'>>  = async params => {
  // undefined
    return this.client.deleteDeployment(params as any).promise();
  }

  deleteDomainName: (params: RawParamsFrom<'deleteDomainName'>) => Promise<ReturnTypeFrom<'deleteDomainName'>>  = async params => {
  // undefined
    return this.client.deleteDomainName(params as any).promise();
  }

  deleteIntegration: (params: RawParamsFrom<'deleteIntegration'>) => Promise<ReturnTypeFrom<'deleteIntegration'>>  = async params => {
  // undefined
    return this.client.deleteIntegration(params as any).promise();
  }

  deleteIntegrationResponse: (params: RawParamsFrom<'deleteIntegrationResponse'>) => Promise<ReturnTypeFrom<'deleteIntegrationResponse'>>  = async params => {
  // undefined
    return this.client.deleteIntegrationResponse(params as any).promise();
  }

  deleteModel: (params: RawParamsFrom<'deleteModel'>) => Promise<ReturnTypeFrom<'deleteModel'>>  = async params => {
  // undefined
    return this.client.deleteModel(params as any).promise();
  }

  deleteRoute: (params: RawParamsFrom<'deleteRoute'>) => Promise<ReturnTypeFrom<'deleteRoute'>>  = async params => {
  // undefined
    return this.client.deleteRoute(params as any).promise();
  }

  deleteRouteRequestParameter: (params: RawParamsFrom<'deleteRouteRequestParameter'>) => Promise<ReturnTypeFrom<'deleteRouteRequestParameter'>>  = async params => {
  // undefined
    return this.client.deleteRouteRequestParameter(params as any).promise();
  }

  deleteRouteResponse: (params: RawParamsFrom<'deleteRouteResponse'>) => Promise<ReturnTypeFrom<'deleteRouteResponse'>>  = async params => {
  // undefined
    return this.client.deleteRouteResponse(params as any).promise();
  }

  deleteRouteSettings: (params: RawParamsFrom<'deleteRouteSettings'>) => Promise<ReturnTypeFrom<'deleteRouteSettings'>>  = async params => {
  // undefined
    return this.client.deleteRouteSettings(params as any).promise();
  }

  deleteStage: (params: RawParamsFrom<'deleteStage'>) => Promise<ReturnTypeFrom<'deleteStage'>>  = async params => {
  // undefined
    return this.client.deleteStage(params as any).promise();
  }

  deleteVpcLink: (params: RawParamsFrom<'deleteVpcLink'>) => Promise<ReturnTypeFrom<'deleteVpcLink'>>  = async params => {
  // undefined
    return this.client.deleteVpcLink(params as any).promise();
  }

  exportApi: (params: RawParamsFrom<'exportApi'>) => Promise<ReturnTypeFrom<'exportApi'>>  = async params => {
  // undefined
    return this.client.exportApi(params as any).promise();
  }

  resetAuthorizersCache: (params: RawParamsFrom<'resetAuthorizersCache'>) => Promise<ReturnTypeFrom<'resetAuthorizersCache'>>  = async params => {
  // undefined
    return this.client.resetAuthorizersCache(params as any).promise();
  }

  getApi: (params: RawParamsFrom<'getApi'>) => Promise<ReturnTypeFrom<'getApi'>>  = async params => {
  // undefined
    return this.client.getApi(params as any).promise();
  }

  getApiMapping: (params: RawParamsFrom<'getApiMapping'>) => Promise<ReturnTypeFrom<'getApiMapping'>>  = async params => {
  // undefined
    return this.client.getApiMapping(params as any).promise();
  }

  getApiMappings: (params: RawParamsFrom<'getApiMappings'>) => Promise<ReturnTypeFrom<'getApiMappings'>>  = async params => {
  // undefined
    return this.client.getApiMappings(params as any).promise();
  }

  getApis: (params: RawParamsFrom<'getApis'>) => Promise<ReturnTypeFrom<'getApis'>>  = async params => {
  // undefined
    return this.client.getApis(params as any).promise();
  }

  getAuthorizer: (params: RawParamsFrom<'getAuthorizer'>) => Promise<ReturnTypeFrom<'getAuthorizer'>>  = async params => {
  // undefined
    return this.client.getAuthorizer(params as any).promise();
  }

  getAuthorizers: (params: RawParamsFrom<'getAuthorizers'>) => Promise<ReturnTypeFrom<'getAuthorizers'>>  = async params => {
  // undefined
    return this.client.getAuthorizers(params as any).promise();
  }

  getDeployment: (params: RawParamsFrom<'getDeployment'>) => Promise<ReturnTypeFrom<'getDeployment'>>  = async params => {
  // undefined
    return this.client.getDeployment(params as any).promise();
  }

  getDeployments: (params: RawParamsFrom<'getDeployments'>) => Promise<ReturnTypeFrom<'getDeployments'>>  = async params => {
  // undefined
    return this.client.getDeployments(params as any).promise();
  }

  getDomainName: (params: RawParamsFrom<'getDomainName'>) => Promise<ReturnTypeFrom<'getDomainName'>>  = async params => {
  // undefined
    return this.client.getDomainName(params as any).promise();
  }

  getDomainNames: (params: RawParamsFrom<'getDomainNames'>) => Promise<ReturnTypeFrom<'getDomainNames'>>  = async params => {
  // undefined
    return this.client.getDomainNames(params as any).promise();
  }

  getIntegration: (params: RawParamsFrom<'getIntegration'>) => Promise<ReturnTypeFrom<'getIntegration'>>  = async params => {
  // undefined
    return this.client.getIntegration(params as any).promise();
  }

  getIntegrationResponse: (params: RawParamsFrom<'getIntegrationResponse'>) => Promise<ReturnTypeFrom<'getIntegrationResponse'>>  = async params => {
  // undefined
    return this.client.getIntegrationResponse(params as any).promise();
  }

  getIntegrationResponses: (params: RawParamsFrom<'getIntegrationResponses'>) => Promise<ReturnTypeFrom<'getIntegrationResponses'>>  = async params => {
  // undefined
    return this.client.getIntegrationResponses(params as any).promise();
  }

  getIntegrations: (params: RawParamsFrom<'getIntegrations'>) => Promise<ReturnTypeFrom<'getIntegrations'>>  = async params => {
  // undefined
    return this.client.getIntegrations(params as any).promise();
  }

  getModel: (params: RawParamsFrom<'getModel'>) => Promise<ReturnTypeFrom<'getModel'>>  = async params => {
  // undefined
    return this.client.getModel(params as any).promise();
  }

  getModelTemplate: (params: RawParamsFrom<'getModelTemplate'>) => Promise<ReturnTypeFrom<'getModelTemplate'>>  = async params => {
  // undefined
    return this.client.getModelTemplate(params as any).promise();
  }

  getModels: (params: RawParamsFrom<'getModels'>) => Promise<ReturnTypeFrom<'getModels'>>  = async params => {
  // undefined
    return this.client.getModels(params as any).promise();
  }

  getRoute: (params: RawParamsFrom<'getRoute'>) => Promise<ReturnTypeFrom<'getRoute'>>  = async params => {
  // undefined
    return this.client.getRoute(params as any).promise();
  }

  getRouteResponse: (params: RawParamsFrom<'getRouteResponse'>) => Promise<ReturnTypeFrom<'getRouteResponse'>>  = async params => {
  // undefined
    return this.client.getRouteResponse(params as any).promise();
  }

  getRouteResponses: (params: RawParamsFrom<'getRouteResponses'>) => Promise<ReturnTypeFrom<'getRouteResponses'>>  = async params => {
  // undefined
    return this.client.getRouteResponses(params as any).promise();
  }

  getRoutes: (params: RawParamsFrom<'getRoutes'>) => Promise<ReturnTypeFrom<'getRoutes'>>  = async params => {
  // undefined
    return this.client.getRoutes(params as any).promise();
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

  getVpcLink: (params: RawParamsFrom<'getVpcLink'>) => Promise<ReturnTypeFrom<'getVpcLink'>>  = async params => {
  // undefined
    return this.client.getVpcLink(params as any).promise();
  }

  getVpcLinks: (params: RawParamsFrom<'getVpcLinks'>) => Promise<ReturnTypeFrom<'getVpcLinks'>>  = async params => {
  // undefined
    return this.client.getVpcLinks(params as any).promise();
  }

  importApi: (params: RawParamsFrom<'importApi'>) => Promise<ReturnTypeFrom<'importApi'>>  = async params => {
  // undefined
    return this.client.importApi(params as any).promise();
  }

  reimportApi: (params: RawParamsFrom<'reimportApi'>) => Promise<ReturnTypeFrom<'reimportApi'>>  = async params => {
  // undefined
    return this.client.reimportApi(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApi: (params: RawParamsFrom<'updateApi'>) => Promise<ReturnTypeFrom<'updateApi'>>  = async params => {
  // undefined
    return this.client.updateApi(params as any).promise();
  }

  updateApiMapping: (params: RawParamsFrom<'updateApiMapping'>) => Promise<ReturnTypeFrom<'updateApiMapping'>>  = async params => {
  // undefined
    return this.client.updateApiMapping(params as any).promise();
  }

  updateAuthorizer: (params: RawParamsFrom<'updateAuthorizer'>) => Promise<ReturnTypeFrom<'updateAuthorizer'>>  = async params => {
  // undefined
    return this.client.updateAuthorizer(params as any).promise();
  }

  updateDeployment: (params: RawParamsFrom<'updateDeployment'>) => Promise<ReturnTypeFrom<'updateDeployment'>>  = async params => {
  // undefined
    return this.client.updateDeployment(params as any).promise();
  }

  updateDomainName: (params: RawParamsFrom<'updateDomainName'>) => Promise<ReturnTypeFrom<'updateDomainName'>>  = async params => {
  // undefined
    return this.client.updateDomainName(params as any).promise();
  }

  updateIntegration: (params: RawParamsFrom<'updateIntegration'>) => Promise<ReturnTypeFrom<'updateIntegration'>>  = async params => {
  // undefined
    return this.client.updateIntegration(params as any).promise();
  }

  updateIntegrationResponse: (params: RawParamsFrom<'updateIntegrationResponse'>) => Promise<ReturnTypeFrom<'updateIntegrationResponse'>>  = async params => {
  // undefined
    return this.client.updateIntegrationResponse(params as any).promise();
  }

  updateModel: (params: RawParamsFrom<'updateModel'>) => Promise<ReturnTypeFrom<'updateModel'>>  = async params => {
  // undefined
    return this.client.updateModel(params as any).promise();
  }

  updateRoute: (params: RawParamsFrom<'updateRoute'>) => Promise<ReturnTypeFrom<'updateRoute'>>  = async params => {
  // undefined
    return this.client.updateRoute(params as any).promise();
  }

  updateRouteResponse: (params: RawParamsFrom<'updateRouteResponse'>) => Promise<ReturnTypeFrom<'updateRouteResponse'>>  = async params => {
  // undefined
    return this.client.updateRouteResponse(params as any).promise();
  }

  updateStage: (params: RawParamsFrom<'updateStage'>) => Promise<ReturnTypeFrom<'updateStage'>>  = async params => {
  // undefined
    return this.client.updateStage(params as any).promise();
  }

  updateVpcLink: (params: RawParamsFrom<'updateVpcLink'>) => Promise<ReturnTypeFrom<'updateVpcLink'>>  = async params => {
  // undefined
    return this.client.updateVpcLink(params as any).promise();
  }
  
  static fromClient(client: AWSApiGatewayV2): ApiGatewayV2 {
    return new ApiGatewayV2(client) as any;
  }
  
  static client(options?: AWSApiGatewayV2.Types.ClientConfiguration): ApiGatewayV2 {
    return new ApiGatewayV2(new AWSApiGatewayV2(options)) as any;
  }
}  
