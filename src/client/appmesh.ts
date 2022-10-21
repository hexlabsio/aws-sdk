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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAppMesh> = AWSAppMesh[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AppMesh {
  private constructor(private readonly client: AWSAppMesh) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appmesh' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listMeshes"] as const;
  
  createGatewayRoute: (params: RawParamsFrom<'createGatewayRoute'>) => Promise<ReturnTypeFrom<'createGatewayRoute'>>  = async params => {
  // undefined
    return this.client.createGatewayRoute(params as any).promise();
  }

  createMesh: (params: RawParamsFrom<'createMesh'>) => Promise<ReturnTypeFrom<'createMesh'>>  = async params => {
  // undefined
    return this.client.createMesh(params as any).promise();
  }

  createRoute: (params: RawParamsFrom<'createRoute'>) => Promise<ReturnTypeFrom<'createRoute'>>  = async params => {
  // undefined
    return this.client.createRoute(params as any).promise();
  }

  createVirtualGateway: (params: RawParamsFrom<'createVirtualGateway'>) => Promise<ReturnTypeFrom<'createVirtualGateway'>>  = async params => {
  // undefined
    return this.client.createVirtualGateway(params as any).promise();
  }

  createVirtualNode: (params: RawParamsFrom<'createVirtualNode'>) => Promise<ReturnTypeFrom<'createVirtualNode'>>  = async params => {
  // undefined
    return this.client.createVirtualNode(params as any).promise();
  }

  createVirtualRouter: (params: RawParamsFrom<'createVirtualRouter'>) => Promise<ReturnTypeFrom<'createVirtualRouter'>>  = async params => {
  // undefined
    return this.client.createVirtualRouter(params as any).promise();
  }

  createVirtualService: (params: RawParamsFrom<'createVirtualService'>) => Promise<ReturnTypeFrom<'createVirtualService'>>  = async params => {
  // undefined
    return this.client.createVirtualService(params as any).promise();
  }

  deleteGatewayRoute: (params: RawParamsFrom<'deleteGatewayRoute'>) => Promise<ReturnTypeFrom<'deleteGatewayRoute'>>  = async params => {
  // undefined
    return this.client.deleteGatewayRoute(params as any).promise();
  }

  deleteMesh: (params: RawParamsFrom<'deleteMesh'>) => Promise<ReturnTypeFrom<'deleteMesh'>>  = async params => {
  // undefined
    return this.client.deleteMesh(params as any).promise();
  }

  deleteRoute: (params: RawParamsFrom<'deleteRoute'>) => Promise<ReturnTypeFrom<'deleteRoute'>>  = async params => {
  // undefined
    return this.client.deleteRoute(params as any).promise();
  }

  deleteVirtualGateway: (params: RawParamsFrom<'deleteVirtualGateway'>) => Promise<ReturnTypeFrom<'deleteVirtualGateway'>>  = async params => {
  // undefined
    return this.client.deleteVirtualGateway(params as any).promise();
  }

  deleteVirtualNode: (params: RawParamsFrom<'deleteVirtualNode'>) => Promise<ReturnTypeFrom<'deleteVirtualNode'>>  = async params => {
  // undefined
    return this.client.deleteVirtualNode(params as any).promise();
  }

  deleteVirtualRouter: (params: RawParamsFrom<'deleteVirtualRouter'>) => Promise<ReturnTypeFrom<'deleteVirtualRouter'>>  = async params => {
  // undefined
    return this.client.deleteVirtualRouter(params as any).promise();
  }

  deleteVirtualService: (params: RawParamsFrom<'deleteVirtualService'>) => Promise<ReturnTypeFrom<'deleteVirtualService'>>  = async params => {
  // undefined
    return this.client.deleteVirtualService(params as any).promise();
  }

  describeGatewayRoute: (params: RawParamsFrom<'describeGatewayRoute'>) => Promise<ReturnTypeFrom<'describeGatewayRoute'>>  = async params => {
  // undefined
    return this.client.describeGatewayRoute(params as any).promise();
  }

  describeMesh: (params: RawParamsFrom<'describeMesh'>) => Promise<ReturnTypeFrom<'describeMesh'>>  = async params => {
  // undefined
    return this.client.describeMesh(params as any).promise();
  }

  describeRoute: (params: RawParamsFrom<'describeRoute'>) => Promise<ReturnTypeFrom<'describeRoute'>>  = async params => {
  // undefined
    return this.client.describeRoute(params as any).promise();
  }

  describeVirtualGateway: (params: RawParamsFrom<'describeVirtualGateway'>) => Promise<ReturnTypeFrom<'describeVirtualGateway'>>  = async params => {
  // undefined
    return this.client.describeVirtualGateway(params as any).promise();
  }

  describeVirtualNode: (params: RawParamsFrom<'describeVirtualNode'>) => Promise<ReturnTypeFrom<'describeVirtualNode'>>  = async params => {
  // undefined
    return this.client.describeVirtualNode(params as any).promise();
  }

  describeVirtualRouter: (params: RawParamsFrom<'describeVirtualRouter'>) => Promise<ReturnTypeFrom<'describeVirtualRouter'>>  = async params => {
  // undefined
    return this.client.describeVirtualRouter(params as any).promise();
  }

  describeVirtualService: (params: RawParamsFrom<'describeVirtualService'>) => Promise<ReturnTypeFrom<'describeVirtualService'>>  = async params => {
  // undefined
    return this.client.describeVirtualService(params as any).promise();
  }

  async listGatewayRoutes(params: { [K in keyof ParamsFrom<'listGatewayRoutes', { next?: string, limit?: number }>]: ParamsFrom<'listGatewayRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGatewayRoutes'>]-?: ReturnTypeFrom<'listGatewayRoutes'>[K]}['gatewayRoutes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"gatewayRoutes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listGatewayRoutes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listGatewayRoutes' })).toString('base64');
    const member = (Array.isArray(result.gatewayRoutes ?? []) ? (result.gatewayRoutes ?? []) : [result.gatewayRoutes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMeshes(params: { [K in keyof ParamsFrom<'listMeshes', { next?: string, limit?: number }>]: ParamsFrom<'listMeshes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMeshes'>]-?: ReturnTypeFrom<'listMeshes'>[K]}['meshes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"meshes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listMeshes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listMeshes' })).toString('base64');
    const member = (Array.isArray(result.meshes ?? []) ? (result.meshes ?? []) : [result.meshes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoutes(params: { [K in keyof ParamsFrom<'listRoutes', { next?: string, limit?: number }>]: ParamsFrom<'listRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRoutes'>]-?: ReturnTypeFrom<'listRoutes'>[K]}['routes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"routes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listRoutes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRoutes' })).toString('base64');
    const member = (Array.isArray(result.routes ?? []) ? (result.routes ?? []) : [result.routes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTagsForResource' })).toString('base64');
    const member = (Array.isArray(result.tags ?? []) ? (result.tags ?? []) : [result.tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualGateways(params: { [K in keyof ParamsFrom<'listVirtualGateways', { next?: string, limit?: number }>]: ParamsFrom<'listVirtualGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVirtualGateways'>]-?: ReturnTypeFrom<'listVirtualGateways'>[K]}['virtualGateways'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"virtualGateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVirtualGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listVirtualGateways' })).toString('base64');
    const member = (Array.isArray(result.virtualGateways ?? []) ? (result.virtualGateways ?? []) : [result.virtualGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualNodes(params: { [K in keyof ParamsFrom<'listVirtualNodes', { next?: string, limit?: number }>]: ParamsFrom<'listVirtualNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVirtualNodes'>]-?: ReturnTypeFrom<'listVirtualNodes'>[K]}['virtualNodes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"virtualNodes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVirtualNodes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listVirtualNodes' })).toString('base64');
    const member = (Array.isArray(result.virtualNodes ?? []) ? (result.virtualNodes ?? []) : [result.virtualNodes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualRouters(params: { [K in keyof ParamsFrom<'listVirtualRouters', { next?: string, limit?: number }>]: ParamsFrom<'listVirtualRouters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVirtualRouters'>]-?: ReturnTypeFrom<'listVirtualRouters'>[K]}['virtualRouters'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"virtualRouters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVirtualRouters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listVirtualRouters' })).toString('base64');
    const member = (Array.isArray(result.virtualRouters ?? []) ? (result.virtualRouters ?? []) : [result.virtualRouters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualServices(params: { [K in keyof ParamsFrom<'listVirtualServices', { next?: string, limit?: number }>]: ParamsFrom<'listVirtualServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVirtualServices'>]-?: ReturnTypeFrom<'listVirtualServices'>[K]}['virtualServices'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"virtualServices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVirtualServices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listVirtualServices' })).toString('base64');
    const member = (Array.isArray(result.virtualServices ?? []) ? (result.virtualServices ?? []) : [result.virtualServices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateGatewayRoute: (params: RawParamsFrom<'updateGatewayRoute'>) => Promise<ReturnTypeFrom<'updateGatewayRoute'>>  = async params => {
  // undefined
    return this.client.updateGatewayRoute(params as any).promise();
  }

  updateMesh: (params: RawParamsFrom<'updateMesh'>) => Promise<ReturnTypeFrom<'updateMesh'>>  = async params => {
  // undefined
    return this.client.updateMesh(params as any).promise();
  }

  updateRoute: (params: RawParamsFrom<'updateRoute'>) => Promise<ReturnTypeFrom<'updateRoute'>>  = async params => {
  // undefined
    return this.client.updateRoute(params as any).promise();
  }

  updateVirtualGateway: (params: RawParamsFrom<'updateVirtualGateway'>) => Promise<ReturnTypeFrom<'updateVirtualGateway'>>  = async params => {
  // undefined
    return this.client.updateVirtualGateway(params as any).promise();
  }

  updateVirtualNode: (params: RawParamsFrom<'updateVirtualNode'>) => Promise<ReturnTypeFrom<'updateVirtualNode'>>  = async params => {
  // undefined
    return this.client.updateVirtualNode(params as any).promise();
  }

  updateVirtualRouter: (params: RawParamsFrom<'updateVirtualRouter'>) => Promise<ReturnTypeFrom<'updateVirtualRouter'>>  = async params => {
  // undefined
    return this.client.updateVirtualRouter(params as any).promise();
  }

  updateVirtualService: (params: RawParamsFrom<'updateVirtualService'>) => Promise<ReturnTypeFrom<'updateVirtualService'>>  = async params => {
  // undefined
    return this.client.updateVirtualService(params as any).promise();
  }
  
  static fromClient(client: AWSAppMesh): AppMesh {
    return new AppMesh(client) as any;
  }
  
  static client(options?: AWSAppMesh.Types.ClientConfiguration): AppMesh {
    return new AppMesh(new AWSAppMesh(options)) as any;
  }
}  
