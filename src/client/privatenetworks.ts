import { Request, PrivateNetworks as AWSPrivateNetworks } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPrivateNetworks> = AWSPrivateNetworks[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPrivateNetworks> = AWSPrivateNetworks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPrivateNetworks[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPrivateNetworks, Extras> = AWSPrivateNetworks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPrivateNetworks> = AWSPrivateNetworks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class PrivateNetworks {
  private constructor(private readonly client: AWSPrivateNetworks) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'private-networks' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listNetworks"] as const;
  
  acknowledgeOrderReceipt: (params: RawParamsFrom<'acknowledgeOrderReceipt'>) => Promise<ReturnTypeFrom<'acknowledgeOrderReceipt'>>  = async params => {
  // undefined
    return this.client.acknowledgeOrderReceipt(params as any).promise();
  }

  activateDeviceIdentifier: (params: RawParamsFrom<'activateDeviceIdentifier'>) => Promise<ReturnTypeFrom<'activateDeviceIdentifier'>>  = async params => {
  // undefined
    return this.client.activateDeviceIdentifier(params as any).promise();
  }

  activateNetworkSite: (params: RawParamsFrom<'activateNetworkSite'>) => Promise<ReturnTypeFrom<'activateNetworkSite'>>  = async params => {
  // undefined
    return this.client.activateNetworkSite(params as any).promise();
  }

  configureAccessPoint: (params: RawParamsFrom<'configureAccessPoint'>) => Promise<ReturnTypeFrom<'configureAccessPoint'>>  = async params => {
  // undefined
    return this.client.configureAccessPoint(params as any).promise();
  }

  createNetwork: (params: RawParamsFrom<'createNetwork'>) => Promise<ReturnTypeFrom<'createNetwork'>>  = async params => {
  // undefined
    return this.client.createNetwork(params as any).promise();
  }

  createNetworkSite: (params: RawParamsFrom<'createNetworkSite'>) => Promise<ReturnTypeFrom<'createNetworkSite'>>  = async params => {
  // undefined
    return this.client.createNetworkSite(params as any).promise();
  }

  deactivateDeviceIdentifier: (params: RawParamsFrom<'deactivateDeviceIdentifier'>) => Promise<ReturnTypeFrom<'deactivateDeviceIdentifier'>>  = async params => {
  // undefined
    return this.client.deactivateDeviceIdentifier(params as any).promise();
  }

  deleteNetwork: (params: RawParamsFrom<'deleteNetwork'>) => Promise<ReturnTypeFrom<'deleteNetwork'>>  = async params => {
  // undefined
    return this.client.deleteNetwork(params as any).promise();
  }

  deleteNetworkSite: (params: RawParamsFrom<'deleteNetworkSite'>) => Promise<ReturnTypeFrom<'deleteNetworkSite'>>  = async params => {
  // undefined
    return this.client.deleteNetworkSite(params as any).promise();
  }

  getDeviceIdentifier: (params: RawParamsFrom<'getDeviceIdentifier'>) => Promise<ReturnTypeFrom<'getDeviceIdentifier'>>  = async params => {
  // undefined
    return this.client.getDeviceIdentifier(params as any).promise();
  }

  getNetwork: (params: RawParamsFrom<'getNetwork'>) => Promise<ReturnTypeFrom<'getNetwork'>>  = async params => {
  // undefined
    return this.client.getNetwork(params as any).promise();
  }

  getNetworkResource: (params: RawParamsFrom<'getNetworkResource'>) => Promise<ReturnTypeFrom<'getNetworkResource'>>  = async params => {
  // undefined
    return this.client.getNetworkResource(params as any).promise();
  }

  getNetworkSite: (params: RawParamsFrom<'getNetworkSite'>) => Promise<ReturnTypeFrom<'getNetworkSite'>>  = async params => {
  // undefined
    return this.client.getNetworkSite(params as any).promise();
  }

  getOrder: (params: RawParamsFrom<'getOrder'>) => Promise<ReturnTypeFrom<'getOrder'>>  = async params => {
  // undefined
    return this.client.getOrder(params as any).promise();
  }

  async listDeviceIdentifiers(params: { [K in keyof ParamsFrom<'listDeviceIdentifiers', { next?: string, limit?: number }>]: ParamsFrom<'listDeviceIdentifiers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeviceIdentifiers'>]-?: ReturnTypeFrom<'listDeviceIdentifiers'>[K]}['deviceIdentifiers'], undefined>}> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"deviceIdentifiers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeviceIdentifiers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDeviceIdentifiers' })).toString('base64');
    const member = (Array.isArray(result.deviceIdentifiers ?? []) ? (result.deviceIdentifiers ?? []) : [result.deviceIdentifiers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNetworkResources(params: { [K in keyof ParamsFrom<'listNetworkResources', { next?: string, limit?: number }>]: ParamsFrom<'listNetworkResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNetworkResources'>]-?: ReturnTypeFrom<'listNetworkResources'>[K]}['networkResources'], undefined>}> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"networkResources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNetworkResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listNetworkResources' })).toString('base64');
    const member = (Array.isArray(result.networkResources ?? []) ? (result.networkResources ?? []) : [result.networkResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNetworkSites(params: { [K in keyof ParamsFrom<'listNetworkSites', { next?: string, limit?: number }>]: ParamsFrom<'listNetworkSites', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNetworkSites'>]-?: ReturnTypeFrom<'listNetworkSites'>[K]}['networkSites'], undefined>}> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"networkSites"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNetworkSites({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listNetworkSites' })).toString('base64');
    const member = (Array.isArray(result.networkSites ?? []) ? (result.networkSites ?? []) : [result.networkSites]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNetworks(params: { [K in keyof ParamsFrom<'listNetworks', { next?: string, limit?: number }>]: ParamsFrom<'listNetworks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNetworks'>]-?: ReturnTypeFrom<'listNetworks'>[K]}['networks'], undefined>}> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"networks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNetworks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listNetworks' })).toString('base64');
    const member = (Array.isArray(result.networks ?? []) ? (result.networks ?? []) : [result.networks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOrders(params: { [K in keyof ParamsFrom<'listOrders', { next?: string, limit?: number }>]: ParamsFrom<'listOrders', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOrders'>]-?: ReturnTypeFrom<'listOrders'>[K]}['orders'], undefined>}> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"orders"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { startToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listOrders({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listOrders' })).toString('base64');
    const member = (Array.isArray(result.orders ?? []) ? (result.orders ?? []) : [result.orders]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  ping: (params: RawParamsFrom<'ping'>) => Promise<ReturnTypeFrom<'ping'>>  = async params => {
  // undefined
    return this.client.ping(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateNetworkSite: (params: RawParamsFrom<'updateNetworkSite'>) => Promise<ReturnTypeFrom<'updateNetworkSite'>>  = async params => {
  // undefined
    return this.client.updateNetworkSite(params as any).promise();
  }

  updateNetworkSitePlan: (params: RawParamsFrom<'updateNetworkSitePlan'>) => Promise<ReturnTypeFrom<'updateNetworkSitePlan'>>  = async params => {
  // undefined
    return this.client.updateNetworkSitePlan(params as any).promise();
  }
  
  static fromClient(client: AWSPrivateNetworks): PrivateNetworks {
    return new PrivateNetworks(client) as any;
  }
  
  static client(options?: AWSPrivateNetworks.Types.ClientConfiguration): PrivateNetworks {
    return new PrivateNetworks(new AWSPrivateNetworks(options)) as any;
  }
}  
