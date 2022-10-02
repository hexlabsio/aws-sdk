import { Request, AppMesh as AWSAppMesh } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAppMesh> = AWSAppMesh[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAppMesh> = AWSAppMesh[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAppMesh[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAppMesh, Extras> = AWSAppMesh[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'appmesh';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listMeshes"];
    
  createGatewayRoute: FunctionTypeFrom<'createGatewayRoute'>;

  createMesh: FunctionTypeFrom<'createMesh'>;

  createRoute: FunctionTypeFrom<'createRoute'>;

  createVirtualGateway: FunctionTypeFrom<'createVirtualGateway'>;

  createVirtualNode: FunctionTypeFrom<'createVirtualNode'>;

  createVirtualRouter: FunctionTypeFrom<'createVirtualRouter'>;

  createVirtualService: FunctionTypeFrom<'createVirtualService'>;

  deleteGatewayRoute: FunctionTypeFrom<'deleteGatewayRoute'>;

  deleteMesh: FunctionTypeFrom<'deleteMesh'>;

  deleteRoute: FunctionTypeFrom<'deleteRoute'>;

  deleteVirtualGateway: FunctionTypeFrom<'deleteVirtualGateway'>;

  deleteVirtualNode: FunctionTypeFrom<'deleteVirtualNode'>;

  deleteVirtualRouter: FunctionTypeFrom<'deleteVirtualRouter'>;

  deleteVirtualService: FunctionTypeFrom<'deleteVirtualService'>;

  describeGatewayRoute: FunctionTypeFrom<'describeGatewayRoute'>;

  describeMesh: FunctionTypeFrom<'describeMesh'>;

  describeRoute: FunctionTypeFrom<'describeRoute'>;

  describeVirtualGateway: FunctionTypeFrom<'describeVirtualGateway'>;

  describeVirtualNode: FunctionTypeFrom<'describeVirtualNode'>;

  describeVirtualRouter: FunctionTypeFrom<'describeVirtualRouter'>;

  describeVirtualService: FunctionTypeFrom<'describeVirtualService'>;

  listGatewayRoutes(params: { [K in keyof Omit<ParamsFrom<'listGatewayRoutes', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listGatewayRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGatewayRoutes'>]-?: ReturnTypeFrom<'listGatewayRoutes'>[K]}['gatewayRoutes'] }>
  ;

  listMeshes(params: { [K in keyof Omit<ParamsFrom<'listMeshes', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listMeshes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMeshes'>]-?: ReturnTypeFrom<'listMeshes'>[K]}['meshes'] }>
  listMeshes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMeshes'>]-?: ReturnTypeFrom<'listMeshes'>[K]}['meshes'] }>;

  listRoutes(params: { [K in keyof Omit<ParamsFrom<'listRoutes', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoutes'>]-?: ReturnTypeFrom<'listRoutes'>[K]}['routes'] }>
  ;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'] }>
  ;

  listVirtualGateways(params: { [K in keyof Omit<ParamsFrom<'listVirtualGateways', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listVirtualGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualGateways'>]-?: ReturnTypeFrom<'listVirtualGateways'>[K]}['virtualGateways'] }>
  ;

  listVirtualNodes(params: { [K in keyof Omit<ParamsFrom<'listVirtualNodes', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listVirtualNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualNodes'>]-?: ReturnTypeFrom<'listVirtualNodes'>[K]}['virtualNodes'] }>
  ;

  listVirtualRouters(params: { [K in keyof Omit<ParamsFrom<'listVirtualRouters', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listVirtualRouters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualRouters'>]-?: ReturnTypeFrom<'listVirtualRouters'>[K]}['virtualRouters'] }>
  ;

  listVirtualServices(params: { [K in keyof Omit<ParamsFrom<'listVirtualServices', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'listVirtualServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualServices'>]-?: ReturnTypeFrom<'listVirtualServices'>[K]}['virtualServices'] }>
  ;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateGatewayRoute: FunctionTypeFrom<'updateGatewayRoute'>;

  updateMesh: FunctionTypeFrom<'updateMesh'>;

  updateRoute: FunctionTypeFrom<'updateRoute'>;

  updateVirtualGateway: FunctionTypeFrom<'updateVirtualGateway'>;

  updateVirtualNode: FunctionTypeFrom<'updateVirtualNode'>;

  updateVirtualRouter: FunctionTypeFrom<'updateVirtualRouter'>;

  updateVirtualService: FunctionTypeFrom<'updateVirtualService'>
}
 
export class AppMesh implements ClientType {
  private constructor(private readonly client: AWSAppMesh) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appmesh';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listMeshes"] as const;
  
  async createGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createGatewayRoute(...args).promise()
  }

  async createMesh(...args: any): Promise<any> {
  // undefined
    return this.client.createMesh(...args).promise()
  }

  async createRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createRoute(...args).promise()
  }

  async createVirtualGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createVirtualGateway(...args).promise()
  }

  async createVirtualNode(...args: any): Promise<any> {
  // undefined
    return this.client.createVirtualNode(...args).promise()
  }

  async createVirtualRouter(...args: any): Promise<any> {
  // undefined
    return this.client.createVirtualRouter(...args).promise()
  }

  async createVirtualService(...args: any): Promise<any> {
  // undefined
    return this.client.createVirtualService(...args).promise()
  }

  async deleteGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGatewayRoute(...args).promise()
  }

  async deleteMesh(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMesh(...args).promise()
  }

  async deleteRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoute(...args).promise()
  }

  async deleteVirtualGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVirtualGateway(...args).promise()
  }

  async deleteVirtualNode(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVirtualNode(...args).promise()
  }

  async deleteVirtualRouter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVirtualRouter(...args).promise()
  }

  async deleteVirtualService(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVirtualService(...args).promise()
  }

  async describeGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.describeGatewayRoute(...args).promise()
  }

  async describeMesh(...args: any): Promise<any> {
  // undefined
    return this.client.describeMesh(...args).promise()
  }

  async describeRoute(...args: any): Promise<any> {
  // undefined
    return this.client.describeRoute(...args).promise()
  }

  async describeVirtualGateway(...args: any): Promise<any> {
  // undefined
    return this.client.describeVirtualGateway(...args).promise()
  }

  async describeVirtualNode(...args: any): Promise<any> {
  // undefined
    return this.client.describeVirtualNode(...args).promise()
  }

  async describeVirtualRouter(...args: any): Promise<any> {
  // undefined
    return this.client.describeVirtualRouter(...args).promise()
  }

  async describeVirtualService(...args: any): Promise<any> {
  // undefined
    return this.client.describeVirtualService(...args).promise()
  }

  async listGatewayRoutes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"gatewayRoutes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listGatewayRoutes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.gatewayRoutes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMeshes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"meshes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listMeshes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.meshes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoutes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"routes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listRoutes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.routes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualGateways(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"virtualGateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVirtualGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.virtualGateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualNodes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"virtualNodes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVirtualNodes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.virtualNodes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualRouters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"virtualRouters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVirtualRouters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.virtualRouters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualServices(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"virtualServices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVirtualServices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.virtualServices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.updateGatewayRoute(...args).promise()
  }

  async updateMesh(...args: any): Promise<any> {
  // undefined
    return this.client.updateMesh(...args).promise()
  }

  async updateRoute(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoute(...args).promise()
  }

  async updateVirtualGateway(...args: any): Promise<any> {
  // undefined
    return this.client.updateVirtualGateway(...args).promise()
  }

  async updateVirtualNode(...args: any): Promise<any> {
  // undefined
    return this.client.updateVirtualNode(...args).promise()
  }

  async updateVirtualRouter(...args: any): Promise<any> {
  // undefined
    return this.client.updateVirtualRouter(...args).promise()
  }

  async updateVirtualService(...args: any): Promise<any> {
  // undefined
    return this.client.updateVirtualService(...args).promise()
  }
  
  static fromClient(client: AWSAppMesh): ClientType {
    return new AppMesh(client) as any;
  }
  
  static client(options?: AWSAppMesh.Types.ClientConfiguration): ClientType {
    return new AppMesh(new AWSAppMesh(options)) as any;
  }
}  
