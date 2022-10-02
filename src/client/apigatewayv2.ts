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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'apigateway';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly [];
    
  createApi: FunctionTypeFrom<'createApi'>;

  createApiMapping: FunctionTypeFrom<'createApiMapping'>;

  createAuthorizer: FunctionTypeFrom<'createAuthorizer'>;

  createDeployment: FunctionTypeFrom<'createDeployment'>;

  createDomainName: FunctionTypeFrom<'createDomainName'>;

  createIntegration: FunctionTypeFrom<'createIntegration'>;

  createIntegrationResponse: FunctionTypeFrom<'createIntegrationResponse'>;

  createModel: FunctionTypeFrom<'createModel'>;

  createRoute: FunctionTypeFrom<'createRoute'>;

  createRouteResponse: FunctionTypeFrom<'createRouteResponse'>;

  createStage: FunctionTypeFrom<'createStage'>;

  createVpcLink: FunctionTypeFrom<'createVpcLink'>;

  deleteAccessLogSettings: FunctionTypeFrom<'deleteAccessLogSettings'>;

  deleteApi: FunctionTypeFrom<'deleteApi'>;

  deleteApiMapping: FunctionTypeFrom<'deleteApiMapping'>;

  deleteAuthorizer: FunctionTypeFrom<'deleteAuthorizer'>;

  deleteCorsConfiguration: FunctionTypeFrom<'deleteCorsConfiguration'>;

  deleteDeployment: FunctionTypeFrom<'deleteDeployment'>;

  deleteDomainName: FunctionTypeFrom<'deleteDomainName'>;

  deleteIntegration: FunctionTypeFrom<'deleteIntegration'>;

  deleteIntegrationResponse: FunctionTypeFrom<'deleteIntegrationResponse'>;

  deleteModel: FunctionTypeFrom<'deleteModel'>;

  deleteRoute: FunctionTypeFrom<'deleteRoute'>;

  deleteRouteRequestParameter: FunctionTypeFrom<'deleteRouteRequestParameter'>;

  deleteRouteResponse: FunctionTypeFrom<'deleteRouteResponse'>;

  deleteRouteSettings: FunctionTypeFrom<'deleteRouteSettings'>;

  deleteStage: FunctionTypeFrom<'deleteStage'>;

  deleteVpcLink: FunctionTypeFrom<'deleteVpcLink'>;

  exportApi: FunctionTypeFrom<'exportApi'>;

  resetAuthorizersCache: FunctionTypeFrom<'resetAuthorizersCache'>;

  getApi: FunctionTypeFrom<'getApi'>;

  getApiMapping: FunctionTypeFrom<'getApiMapping'>;

  getApiMappings: FunctionTypeFrom<'getApiMappings'>;

  getApis: FunctionTypeFrom<'getApis'>;

  getAuthorizer: FunctionTypeFrom<'getAuthorizer'>;

  getAuthorizers: FunctionTypeFrom<'getAuthorizers'>;

  getDeployment: FunctionTypeFrom<'getDeployment'>;

  getDeployments: FunctionTypeFrom<'getDeployments'>;

  getDomainName: FunctionTypeFrom<'getDomainName'>;

  getDomainNames: FunctionTypeFrom<'getDomainNames'>;

  getIntegration: FunctionTypeFrom<'getIntegration'>;

  getIntegrationResponse: FunctionTypeFrom<'getIntegrationResponse'>;

  getIntegrationResponses: FunctionTypeFrom<'getIntegrationResponses'>;

  getIntegrations: FunctionTypeFrom<'getIntegrations'>;

  getModel: FunctionTypeFrom<'getModel'>;

  getModelTemplate: FunctionTypeFrom<'getModelTemplate'>;

  getModels: FunctionTypeFrom<'getModels'>;

  getRoute: FunctionTypeFrom<'getRoute'>;

  getRouteResponse: FunctionTypeFrom<'getRouteResponse'>;

  getRouteResponses: FunctionTypeFrom<'getRouteResponses'>;

  getRoutes: FunctionTypeFrom<'getRoutes'>;

  getStage: FunctionTypeFrom<'getStage'>;

  getStages: FunctionTypeFrom<'getStages'>;

  getTags: FunctionTypeFrom<'getTags'>;

  getVpcLink: FunctionTypeFrom<'getVpcLink'>;

  getVpcLinks: FunctionTypeFrom<'getVpcLinks'>;

  importApi: FunctionTypeFrom<'importApi'>;

  reimportApi: FunctionTypeFrom<'reimportApi'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApi: FunctionTypeFrom<'updateApi'>;

  updateApiMapping: FunctionTypeFrom<'updateApiMapping'>;

  updateAuthorizer: FunctionTypeFrom<'updateAuthorizer'>;

  updateDeployment: FunctionTypeFrom<'updateDeployment'>;

  updateDomainName: FunctionTypeFrom<'updateDomainName'>;

  updateIntegration: FunctionTypeFrom<'updateIntegration'>;

  updateIntegrationResponse: FunctionTypeFrom<'updateIntegrationResponse'>;

  updateModel: FunctionTypeFrom<'updateModel'>;

  updateRoute: FunctionTypeFrom<'updateRoute'>;

  updateRouteResponse: FunctionTypeFrom<'updateRouteResponse'>;

  updateStage: FunctionTypeFrom<'updateStage'>;

  updateVpcLink: FunctionTypeFrom<'updateVpcLink'>
}
 
export class ApiGatewayV2 implements ClientType {
  private constructor(private readonly client: AWSApiGatewayV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'apigateway';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = [] as const;
  
  async createApi(...args: any): Promise<any> {
  // undefined
    return this.client.createApi(...args).promise()
  }

  async createApiMapping(...args: any): Promise<any> {
  // undefined
    return this.client.createApiMapping(...args).promise()
  }

  async createAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.createAuthorizer(...args).promise()
  }

  async createDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createDeployment(...args).promise()
  }

  async createDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.createDomainName(...args).promise()
  }

  async createIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.createIntegration(...args).promise()
  }

  async createIntegrationResponse(...args: any): Promise<any> {
  // undefined
    return this.client.createIntegrationResponse(...args).promise()
  }

  async createModel(...args: any): Promise<any> {
  // undefined
    return this.client.createModel(...args).promise()
  }

  async createRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createRoute(...args).promise()
  }

  async createRouteResponse(...args: any): Promise<any> {
  // undefined
    return this.client.createRouteResponse(...args).promise()
  }

  async createStage(...args: any): Promise<any> {
  // undefined
    return this.client.createStage(...args).promise()
  }

  async createVpcLink(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcLink(...args).promise()
  }

  async deleteAccessLogSettings(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessLogSettings(...args).promise()
  }

  async deleteApi(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApi(...args).promise()
  }

  async deleteApiMapping(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApiMapping(...args).promise()
  }

  async deleteAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAuthorizer(...args).promise()
  }

  async deleteCorsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCorsConfiguration(...args).promise()
  }

  async deleteDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeployment(...args).promise()
  }

  async deleteDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomainName(...args).promise()
  }

  async deleteIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntegration(...args).promise()
  }

  async deleteIntegrationResponse(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntegrationResponse(...args).promise()
  }

  async deleteModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModel(...args).promise()
  }

  async deleteRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoute(...args).promise()
  }

  async deleteRouteRequestParameter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRouteRequestParameter(...args).promise()
  }

  async deleteRouteResponse(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRouteResponse(...args).promise()
  }

  async deleteRouteSettings(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRouteSettings(...args).promise()
  }

  async deleteStage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStage(...args).promise()
  }

  async deleteVpcLink(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcLink(...args).promise()
  }

  async exportApi(...args: any): Promise<any> {
  // undefined
    return this.client.exportApi(...args).promise()
  }

  async resetAuthorizersCache(...args: any): Promise<any> {
  // undefined
    return this.client.resetAuthorizersCache(...args).promise()
  }

  async getApi(...args: any): Promise<any> {
  // undefined
    return this.client.getApi(...args).promise()
  }

  async getApiMapping(...args: any): Promise<any> {
  // undefined
    return this.client.getApiMapping(...args).promise()
  }

  async getApiMappings(...args: any): Promise<any> {
  // undefined
    return this.client.getApiMappings(...args).promise()
  }

  async getApis(...args: any): Promise<any> {
  // undefined
    return this.client.getApis(...args).promise()
  }

  async getAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.getAuthorizer(...args).promise()
  }

  async getAuthorizers(...args: any): Promise<any> {
  // undefined
    return this.client.getAuthorizers(...args).promise()
  }

  async getDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployment(...args).promise()
  }

  async getDeployments(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployments(...args).promise()
  }

  async getDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainName(...args).promise()
  }

  async getDomainNames(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainNames(...args).promise()
  }

  async getIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.getIntegration(...args).promise()
  }

  async getIntegrationResponse(...args: any): Promise<any> {
  // undefined
    return this.client.getIntegrationResponse(...args).promise()
  }

  async getIntegrationResponses(...args: any): Promise<any> {
  // undefined
    return this.client.getIntegrationResponses(...args).promise()
  }

  async getIntegrations(...args: any): Promise<any> {
  // undefined
    return this.client.getIntegrations(...args).promise()
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
  // undefined
    return this.client.getModels(...args).promise()
  }

  async getRoute(...args: any): Promise<any> {
  // undefined
    return this.client.getRoute(...args).promise()
  }

  async getRouteResponse(...args: any): Promise<any> {
  // undefined
    return this.client.getRouteResponse(...args).promise()
  }

  async getRouteResponses(...args: any): Promise<any> {
  // undefined
    return this.client.getRouteResponses(...args).promise()
  }

  async getRoutes(...args: any): Promise<any> {
  // undefined
    return this.client.getRoutes(...args).promise()
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

  async getVpcLink(...args: any): Promise<any> {
  // undefined
    return this.client.getVpcLink(...args).promise()
  }

  async getVpcLinks(...args: any): Promise<any> {
  // undefined
    return this.client.getVpcLinks(...args).promise()
  }

  async importApi(...args: any): Promise<any> {
  // undefined
    return this.client.importApi(...args).promise()
  }

  async reimportApi(...args: any): Promise<any> {
  // undefined
    return this.client.reimportApi(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApi(...args: any): Promise<any> {
  // undefined
    return this.client.updateApi(...args).promise()
  }

  async updateApiMapping(...args: any): Promise<any> {
  // undefined
    return this.client.updateApiMapping(...args).promise()
  }

  async updateAuthorizer(...args: any): Promise<any> {
  // undefined
    return this.client.updateAuthorizer(...args).promise()
  }

  async updateDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeployment(...args).promise()
  }

  async updateDomainName(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainName(...args).promise()
  }

  async updateIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.updateIntegration(...args).promise()
  }

  async updateIntegrationResponse(...args: any): Promise<any> {
  // undefined
    return this.client.updateIntegrationResponse(...args).promise()
  }

  async updateModel(...args: any): Promise<any> {
  // undefined
    return this.client.updateModel(...args).promise()
  }

  async updateRoute(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoute(...args).promise()
  }

  async updateRouteResponse(...args: any): Promise<any> {
  // undefined
    return this.client.updateRouteResponse(...args).promise()
  }

  async updateStage(...args: any): Promise<any> {
  // undefined
    return this.client.updateStage(...args).promise()
  }

  async updateVpcLink(...args: any): Promise<any> {
  // undefined
    return this.client.updateVpcLink(...args).promise()
  }
  
  static fromClient(client: AWSApiGatewayV2): ClientType {
    return new ApiGatewayV2(client) as any;
  }
  
  static client(options?: AWSApiGatewayV2.Types.ClientConfiguration): ClientType {
    return new ApiGatewayV2(new AWSApiGatewayV2(options)) as any;
  }
}  
