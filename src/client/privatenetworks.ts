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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'private-networks';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listNetworks"];
    
  acknowledgeOrderReceipt: FunctionTypeFrom<'acknowledgeOrderReceipt'>;

  activateDeviceIdentifier: FunctionTypeFrom<'activateDeviceIdentifier'>;

  activateNetworkSite: FunctionTypeFrom<'activateNetworkSite'>;

  configureAccessPoint: FunctionTypeFrom<'configureAccessPoint'>;

  createNetwork: FunctionTypeFrom<'createNetwork'>;

  createNetworkSite: FunctionTypeFrom<'createNetworkSite'>;

  deactivateDeviceIdentifier: FunctionTypeFrom<'deactivateDeviceIdentifier'>;

  deleteNetwork: FunctionTypeFrom<'deleteNetwork'>;

  deleteNetworkSite: FunctionTypeFrom<'deleteNetworkSite'>;

  getDeviceIdentifier: FunctionTypeFrom<'getDeviceIdentifier'>;

  getNetwork: FunctionTypeFrom<'getNetwork'>;

  getNetworkResource: FunctionTypeFrom<'getNetworkResource'>;

  getNetworkSite: FunctionTypeFrom<'getNetworkSite'>;

  getOrder: FunctionTypeFrom<'getOrder'>;

  listDeviceIdentifiers(params: { [K in keyof Omit<ParamsFrom<'listDeviceIdentifiers', { next?: string, limit?: number }>, 'startToken' | 'maxResults'>]: ParamsFrom<'listDeviceIdentifiers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeviceIdentifiers'>]-?: ReturnTypeFrom<'listDeviceIdentifiers'>[K]}['deviceIdentifiers'] }>
  ;

  listNetworkResources(params: { [K in keyof Omit<ParamsFrom<'listNetworkResources', { next?: string, limit?: number }>, 'startToken' | 'maxResults'>]: ParamsFrom<'listNetworkResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNetworkResources'>]-?: ReturnTypeFrom<'listNetworkResources'>[K]}['networkResources'] }>
  ;

  listNetworkSites(params: { [K in keyof Omit<ParamsFrom<'listNetworkSites', { next?: string, limit?: number }>, 'startToken' | 'maxResults'>]: ParamsFrom<'listNetworkSites', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNetworkSites'>]-?: ReturnTypeFrom<'listNetworkSites'>[K]}['networkSites'] }>
  ;

  listNetworks(params: { [K in keyof Omit<ParamsFrom<'listNetworks', { next?: string, limit?: number }>, 'startToken' | 'maxResults'>]: ParamsFrom<'listNetworks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNetworks'>]-?: ReturnTypeFrom<'listNetworks'>[K]}['networks'] }>
  listNetworks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNetworks'>]-?: ReturnTypeFrom<'listNetworks'>[K]}['networks'] }>;

  listOrders(params: { [K in keyof Omit<ParamsFrom<'listOrders', { next?: string, limit?: number }>, 'startToken' | 'maxResults'>]: ParamsFrom<'listOrders', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOrders'>]-?: ReturnTypeFrom<'listOrders'>[K]}['orders'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  ping: FunctionTypeFrom<'ping'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateNetworkSite: FunctionTypeFrom<'updateNetworkSite'>;

  updateNetworkSitePlan: FunctionTypeFrom<'updateNetworkSitePlan'>
}
 
export class PrivateNetworks implements ClientType {
  private constructor(private readonly client: AWSPrivateNetworks) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'private-networks';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listNetworks"] as const;
  
  async acknowledgeOrderReceipt(...args: any): Promise<any> {
  // undefined
    return this.client.acknowledgeOrderReceipt(...args).promise()
  }

  async activateDeviceIdentifier(...args: any): Promise<any> {
  // undefined
    return this.client.activateDeviceIdentifier(...args).promise()
  }

  async activateNetworkSite(...args: any): Promise<any> {
  // undefined
    return this.client.activateNetworkSite(...args).promise()
  }

  async configureAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.configureAccessPoint(...args).promise()
  }

  async createNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.createNetwork(...args).promise()
  }

  async createNetworkSite(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkSite(...args).promise()
  }

  async deactivateDeviceIdentifier(...args: any): Promise<any> {
  // undefined
    return this.client.deactivateDeviceIdentifier(...args).promise()
  }

  async deleteNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetwork(...args).promise()
  }

  async deleteNetworkSite(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkSite(...args).promise()
  }

  async getDeviceIdentifier(...args: any): Promise<any> {
  // undefined
    return this.client.getDeviceIdentifier(...args).promise()
  }

  async getNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.getNetwork(...args).promise()
  }

  async getNetworkResource(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkResource(...args).promise()
  }

  async getNetworkSite(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkSite(...args).promise()
  }

  async getOrder(...args: any): Promise<any> {
  // undefined
    return this.client.getOrder(...args).promise()
  }

  async listDeviceIdentifiers(...args: any): Promise<any> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"deviceIdentifiers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { startToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeviceIdentifiers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.deviceIdentifiers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNetworkResources(...args: any): Promise<any> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"networkResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { startToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNetworkResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.networkResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNetworkSites(...args: any): Promise<any> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"networkSites"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { startToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNetworkSites(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.networkSites ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNetworks(...args: any): Promise<any> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"networks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { startToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNetworks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.networks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOrders(...args: any): Promise<any> {
    // {"inputToken":"startToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"orders"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { startToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listOrders(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.orders ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async ping(...args: any): Promise<any> {
  // undefined
    return this.client.ping(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateNetworkSite(...args: any): Promise<any> {
  // undefined
    return this.client.updateNetworkSite(...args).promise()
  }

  async updateNetworkSitePlan(...args: any): Promise<any> {
  // undefined
    return this.client.updateNetworkSitePlan(...args).promise()
  }
  
  static fromClient(client: AWSPrivateNetworks): ClientType {
    return new PrivateNetworks(client) as any;
  }
  
  static client(options?: AWSPrivateNetworks.Types.ClientConfiguration): ClientType {
    return new PrivateNetworks(new AWSPrivateNetworks(options)) as any;
  }
}  
