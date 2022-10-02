import { Request, GlobalAccelerator as AWSGlobalAccelerator } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGlobalAccelerator> = AWSGlobalAccelerator[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGlobalAccelerator> = AWSGlobalAccelerator[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGlobalAccelerator[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGlobalAccelerator, Extras> = AWSGlobalAccelerator[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'globalaccelerator';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listAccelerators","listByoipCidrs","listCustomRoutingAccelerators"];
    
  addCustomRoutingEndpoints: FunctionTypeFrom<'addCustomRoutingEndpoints'>;

  advertiseByoipCidr: FunctionTypeFrom<'advertiseByoipCidr'>;

  allowCustomRoutingTraffic: FunctionTypeFrom<'allowCustomRoutingTraffic'>;

  createAccelerator: FunctionTypeFrom<'createAccelerator'>;

  createCustomRoutingAccelerator: FunctionTypeFrom<'createCustomRoutingAccelerator'>;

  createCustomRoutingEndpointGroup: FunctionTypeFrom<'createCustomRoutingEndpointGroup'>;

  createCustomRoutingListener: FunctionTypeFrom<'createCustomRoutingListener'>;

  createEndpointGroup: FunctionTypeFrom<'createEndpointGroup'>;

  createListener: FunctionTypeFrom<'createListener'>;

  deleteAccelerator: FunctionTypeFrom<'deleteAccelerator'>;

  deleteCustomRoutingAccelerator: FunctionTypeFrom<'deleteCustomRoutingAccelerator'>;

  deleteCustomRoutingEndpointGroup: FunctionTypeFrom<'deleteCustomRoutingEndpointGroup'>;

  deleteCustomRoutingListener: FunctionTypeFrom<'deleteCustomRoutingListener'>;

  deleteEndpointGroup: FunctionTypeFrom<'deleteEndpointGroup'>;

  deleteListener: FunctionTypeFrom<'deleteListener'>;

  denyCustomRoutingTraffic: FunctionTypeFrom<'denyCustomRoutingTraffic'>;

  deprovisionByoipCidr: FunctionTypeFrom<'deprovisionByoipCidr'>;

  describeAccelerator: FunctionTypeFrom<'describeAccelerator'>;

  describeAcceleratorAttributes: FunctionTypeFrom<'describeAcceleratorAttributes'>;

  describeCustomRoutingAccelerator: FunctionTypeFrom<'describeCustomRoutingAccelerator'>;

  describeCustomRoutingAcceleratorAttributes: FunctionTypeFrom<'describeCustomRoutingAcceleratorAttributes'>;

  describeCustomRoutingEndpointGroup: FunctionTypeFrom<'describeCustomRoutingEndpointGroup'>;

  describeCustomRoutingListener: FunctionTypeFrom<'describeCustomRoutingListener'>;

  describeEndpointGroup: FunctionTypeFrom<'describeEndpointGroup'>;

  describeListener: FunctionTypeFrom<'describeListener'>;

  listAccelerators(params: { [K in keyof Omit<ParamsFrom<'listAccelerators', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAccelerators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccelerators'>]-?: ReturnTypeFrom<'listAccelerators'>[K]}['Accelerators'] }>
  listAccelerators(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccelerators'>]-?: ReturnTypeFrom<'listAccelerators'>[K]}['Accelerators'] }>;

  listByoipCidrs(params: { [K in keyof Omit<ParamsFrom<'listByoipCidrs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listByoipCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listByoipCidrs'>]-?: ReturnTypeFrom<'listByoipCidrs'>[K]}['ByoipCidrs'] }>
  listByoipCidrs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listByoipCidrs'>]-?: ReturnTypeFrom<'listByoipCidrs'>[K]}['ByoipCidrs'] }>;

  listCustomRoutingAccelerators(params: { [K in keyof Omit<ParamsFrom<'listCustomRoutingAccelerators', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCustomRoutingAccelerators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomRoutingAccelerators'>]-?: ReturnTypeFrom<'listCustomRoutingAccelerators'>[K]}['Accelerators'] }>
  listCustomRoutingAccelerators(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomRoutingAccelerators'>]-?: ReturnTypeFrom<'listCustomRoutingAccelerators'>[K]}['Accelerators'] }>;

  listCustomRoutingEndpointGroups: FunctionTypeFrom<'listCustomRoutingEndpointGroups'>;

  listCustomRoutingListeners(params: { [K in keyof Omit<ParamsFrom<'listCustomRoutingListeners', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCustomRoutingListeners', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomRoutingListeners'>]-?: ReturnTypeFrom<'listCustomRoutingListeners'>[K]}['Listeners'] }>
  ;

  listCustomRoutingPortMappings(params: { [K in keyof Omit<ParamsFrom<'listCustomRoutingPortMappings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCustomRoutingPortMappings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomRoutingPortMappings'>]-?: ReturnTypeFrom<'listCustomRoutingPortMappings'>[K]}['PortMappings'] }>
  ;

  listCustomRoutingPortMappingsByDestination(params: { [K in keyof Omit<ParamsFrom<'listCustomRoutingPortMappingsByDestination', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCustomRoutingPortMappingsByDestination', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomRoutingPortMappingsByDestination'>]-?: ReturnTypeFrom<'listCustomRoutingPortMappingsByDestination'>[K]}['DestinationPortMappings'] }>
  ;

  listEndpointGroups(params: { [K in keyof Omit<ParamsFrom<'listEndpointGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEndpointGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpointGroups'>]-?: ReturnTypeFrom<'listEndpointGroups'>[K]}['EndpointGroups'] }>
  ;

  listListeners(params: { [K in keyof Omit<ParamsFrom<'listListeners', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listListeners', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listListeners'>]-?: ReturnTypeFrom<'listListeners'>[K]}['Listeners'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  provisionByoipCidr: FunctionTypeFrom<'provisionByoipCidr'>;

  removeCustomRoutingEndpoints: FunctionTypeFrom<'removeCustomRoutingEndpoints'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAccelerator: FunctionTypeFrom<'updateAccelerator'>;

  updateAcceleratorAttributes: FunctionTypeFrom<'updateAcceleratorAttributes'>;

  updateCustomRoutingAccelerator: FunctionTypeFrom<'updateCustomRoutingAccelerator'>;

  updateCustomRoutingAcceleratorAttributes: FunctionTypeFrom<'updateCustomRoutingAcceleratorAttributes'>;

  updateCustomRoutingListener: FunctionTypeFrom<'updateCustomRoutingListener'>;

  updateEndpointGroup: FunctionTypeFrom<'updateEndpointGroup'>;

  updateListener: FunctionTypeFrom<'updateListener'>;

  withdrawByoipCidr: FunctionTypeFrom<'withdrawByoipCidr'>
}
 
export class GlobalAccelerator implements ClientType {
  private constructor(private readonly client: AWSGlobalAccelerator) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'globalaccelerator';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listAccelerators","listByoipCidrs","listCustomRoutingAccelerators"] as const;
  
  async addCustomRoutingEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.addCustomRoutingEndpoints(...args).promise()
  }

  async advertiseByoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.advertiseByoipCidr(...args).promise()
  }

  async allowCustomRoutingTraffic(...args: any): Promise<any> {
  // undefined
    return this.client.allowCustomRoutingTraffic(...args).promise()
  }

  async createAccelerator(...args: any): Promise<any> {
  // undefined
    return this.client.createAccelerator(...args).promise()
  }

  async createCustomRoutingAccelerator(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomRoutingAccelerator(...args).promise()
  }

  async createCustomRoutingEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomRoutingEndpointGroup(...args).promise()
  }

  async createCustomRoutingListener(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomRoutingListener(...args).promise()
  }

  async createEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpointGroup(...args).promise()
  }

  async createListener(...args: any): Promise<any> {
  // undefined
    return this.client.createListener(...args).promise()
  }

  async deleteAccelerator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccelerator(...args).promise()
  }

  async deleteCustomRoutingAccelerator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomRoutingAccelerator(...args).promise()
  }

  async deleteCustomRoutingEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomRoutingEndpointGroup(...args).promise()
  }

  async deleteCustomRoutingListener(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomRoutingListener(...args).promise()
  }

  async deleteEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpointGroup(...args).promise()
  }

  async deleteListener(...args: any): Promise<any> {
  // undefined
    return this.client.deleteListener(...args).promise()
  }

  async denyCustomRoutingTraffic(...args: any): Promise<any> {
  // undefined
    return this.client.denyCustomRoutingTraffic(...args).promise()
  }

  async deprovisionByoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.deprovisionByoipCidr(...args).promise()
  }

  async describeAccelerator(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccelerator(...args).promise()
  }

  async describeAcceleratorAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAcceleratorAttributes(...args).promise()
  }

  async describeCustomRoutingAccelerator(...args: any): Promise<any> {
  // undefined
    return this.client.describeCustomRoutingAccelerator(...args).promise()
  }

  async describeCustomRoutingAcceleratorAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeCustomRoutingAcceleratorAttributes(...args).promise()
  }

  async describeCustomRoutingEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeCustomRoutingEndpointGroup(...args).promise()
  }

  async describeCustomRoutingListener(...args: any): Promise<any> {
  // undefined
    return this.client.describeCustomRoutingListener(...args).promise()
  }

  async describeEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpointGroup(...args).promise()
  }

  async describeListener(...args: any): Promise<any> {
  // undefined
    return this.client.describeListener(...args).promise()
  }

  async listAccelerators(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Accelerators"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccelerators(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Accelerators ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listByoipCidrs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ByoipCidrs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listByoipCidrs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ByoipCidrs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomRoutingAccelerators(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Accelerators"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomRoutingAccelerators(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Accelerators ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomRoutingEndpointGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCustomRoutingEndpointGroups(...args).promise()
  }

  async listCustomRoutingListeners(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Listeners"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomRoutingListeners(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Listeners ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomRoutingPortMappings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PortMappings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomRoutingPortMappings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PortMappings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomRoutingPortMappingsByDestination(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DestinationPortMappings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomRoutingPortMappingsByDestination(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DestinationPortMappings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEndpointGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EndpointGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEndpointGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EndpointGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listListeners(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Listeners"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listListeners(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Listeners ?? [];
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

  async provisionByoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.provisionByoipCidr(...args).promise()
  }

  async removeCustomRoutingEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.removeCustomRoutingEndpoints(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAccelerator(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccelerator(...args).promise()
  }

  async updateAcceleratorAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateAcceleratorAttributes(...args).promise()
  }

  async updateCustomRoutingAccelerator(...args: any): Promise<any> {
  // undefined
    return this.client.updateCustomRoutingAccelerator(...args).promise()
  }

  async updateCustomRoutingAcceleratorAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateCustomRoutingAcceleratorAttributes(...args).promise()
  }

  async updateCustomRoutingListener(...args: any): Promise<any> {
  // undefined
    return this.client.updateCustomRoutingListener(...args).promise()
  }

  async updateEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateEndpointGroup(...args).promise()
  }

  async updateListener(...args: any): Promise<any> {
  // undefined
    return this.client.updateListener(...args).promise()
  }

  async withdrawByoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.withdrawByoipCidr(...args).promise()
  }
  
  static fromClient(client: AWSGlobalAccelerator): ClientType {
    return new GlobalAccelerator(client) as any;
  }
  
  static client(options?: AWSGlobalAccelerator.Types.ClientConfiguration): ClientType {
    return new GlobalAccelerator(new AWSGlobalAccelerator(options)) as any;
  }
}  
