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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGlobalAccelerator> = AWSGlobalAccelerator[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class GlobalAccelerator {
  private constructor(private readonly client: AWSGlobalAccelerator) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'globalaccelerator' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listAccelerators","listByoipCidrs","listCustomRoutingAccelerators"] as const;
  
  addCustomRoutingEndpoints: (params: RawParamsFrom<'addCustomRoutingEndpoints'>) => Promise<ReturnTypeFrom<'addCustomRoutingEndpoints'>>  = async params => {
  // undefined
    return this.client.addCustomRoutingEndpoints(params as any).promise();
  }

  addEndpoints: (params: RawParamsFrom<'addEndpoints'>) => Promise<ReturnTypeFrom<'addEndpoints'>>  = async params => {
  // undefined
    return this.client.addEndpoints(params as any).promise();
  }

  advertiseByoipCidr: (params: RawParamsFrom<'advertiseByoipCidr'>) => Promise<ReturnTypeFrom<'advertiseByoipCidr'>>  = async params => {
  // undefined
    return this.client.advertiseByoipCidr(params as any).promise();
  }

  allowCustomRoutingTraffic: (params: RawParamsFrom<'allowCustomRoutingTraffic'>) => Promise<ReturnTypeFrom<'allowCustomRoutingTraffic'>>  = async params => {
  // undefined
    return this.client.allowCustomRoutingTraffic(params as any).promise();
  }

  createAccelerator: (params: RawParamsFrom<'createAccelerator'>) => Promise<ReturnTypeFrom<'createAccelerator'>>  = async params => {
  // undefined
    return this.client.createAccelerator(params as any).promise();
  }

  createCustomRoutingAccelerator: (params: RawParamsFrom<'createCustomRoutingAccelerator'>) => Promise<ReturnTypeFrom<'createCustomRoutingAccelerator'>>  = async params => {
  // undefined
    return this.client.createCustomRoutingAccelerator(params as any).promise();
  }

  createCustomRoutingEndpointGroup: (params: RawParamsFrom<'createCustomRoutingEndpointGroup'>) => Promise<ReturnTypeFrom<'createCustomRoutingEndpointGroup'>>  = async params => {
  // undefined
    return this.client.createCustomRoutingEndpointGroup(params as any).promise();
  }

  createCustomRoutingListener: (params: RawParamsFrom<'createCustomRoutingListener'>) => Promise<ReturnTypeFrom<'createCustomRoutingListener'>>  = async params => {
  // undefined
    return this.client.createCustomRoutingListener(params as any).promise();
  }

  createEndpointGroup: (params: RawParamsFrom<'createEndpointGroup'>) => Promise<ReturnTypeFrom<'createEndpointGroup'>>  = async params => {
  // undefined
    return this.client.createEndpointGroup(params as any).promise();
  }

  createListener: (params: RawParamsFrom<'createListener'>) => Promise<ReturnTypeFrom<'createListener'>>  = async params => {
  // undefined
    return this.client.createListener(params as any).promise();
  }

  deleteAccelerator: (params: RawParamsFrom<'deleteAccelerator'>) => Promise<ReturnTypeFrom<'deleteAccelerator'>>  = async params => {
  // undefined
    return this.client.deleteAccelerator(params as any).promise();
  }

  deleteCustomRoutingAccelerator: (params: RawParamsFrom<'deleteCustomRoutingAccelerator'>) => Promise<ReturnTypeFrom<'deleteCustomRoutingAccelerator'>>  = async params => {
  // undefined
    return this.client.deleteCustomRoutingAccelerator(params as any).promise();
  }

  deleteCustomRoutingEndpointGroup: (params: RawParamsFrom<'deleteCustomRoutingEndpointGroup'>) => Promise<ReturnTypeFrom<'deleteCustomRoutingEndpointGroup'>>  = async params => {
  // undefined
    return this.client.deleteCustomRoutingEndpointGroup(params as any).promise();
  }

  deleteCustomRoutingListener: (params: RawParamsFrom<'deleteCustomRoutingListener'>) => Promise<ReturnTypeFrom<'deleteCustomRoutingListener'>>  = async params => {
  // undefined
    return this.client.deleteCustomRoutingListener(params as any).promise();
  }

  deleteEndpointGroup: (params: RawParamsFrom<'deleteEndpointGroup'>) => Promise<ReturnTypeFrom<'deleteEndpointGroup'>>  = async params => {
  // undefined
    return this.client.deleteEndpointGroup(params as any).promise();
  }

  deleteListener: (params: RawParamsFrom<'deleteListener'>) => Promise<ReturnTypeFrom<'deleteListener'>>  = async params => {
  // undefined
    return this.client.deleteListener(params as any).promise();
  }

  denyCustomRoutingTraffic: (params: RawParamsFrom<'denyCustomRoutingTraffic'>) => Promise<ReturnTypeFrom<'denyCustomRoutingTraffic'>>  = async params => {
  // undefined
    return this.client.denyCustomRoutingTraffic(params as any).promise();
  }

  deprovisionByoipCidr: (params: RawParamsFrom<'deprovisionByoipCidr'>) => Promise<ReturnTypeFrom<'deprovisionByoipCidr'>>  = async params => {
  // undefined
    return this.client.deprovisionByoipCidr(params as any).promise();
  }

  describeAccelerator: (params: RawParamsFrom<'describeAccelerator'>) => Promise<ReturnTypeFrom<'describeAccelerator'>>  = async params => {
  // undefined
    return this.client.describeAccelerator(params as any).promise();
  }

  describeAcceleratorAttributes: (params: RawParamsFrom<'describeAcceleratorAttributes'>) => Promise<ReturnTypeFrom<'describeAcceleratorAttributes'>>  = async params => {
  // undefined
    return this.client.describeAcceleratorAttributes(params as any).promise();
  }

  describeCustomRoutingAccelerator: (params: RawParamsFrom<'describeCustomRoutingAccelerator'>) => Promise<ReturnTypeFrom<'describeCustomRoutingAccelerator'>>  = async params => {
  // undefined
    return this.client.describeCustomRoutingAccelerator(params as any).promise();
  }

  describeCustomRoutingAcceleratorAttributes: (params: RawParamsFrom<'describeCustomRoutingAcceleratorAttributes'>) => Promise<ReturnTypeFrom<'describeCustomRoutingAcceleratorAttributes'>>  = async params => {
  // undefined
    return this.client.describeCustomRoutingAcceleratorAttributes(params as any).promise();
  }

  describeCustomRoutingEndpointGroup: (params: RawParamsFrom<'describeCustomRoutingEndpointGroup'>) => Promise<ReturnTypeFrom<'describeCustomRoutingEndpointGroup'>>  = async params => {
  // undefined
    return this.client.describeCustomRoutingEndpointGroup(params as any).promise();
  }

  describeCustomRoutingListener: (params: RawParamsFrom<'describeCustomRoutingListener'>) => Promise<ReturnTypeFrom<'describeCustomRoutingListener'>>  = async params => {
  // undefined
    return this.client.describeCustomRoutingListener(params as any).promise();
  }

  describeEndpointGroup: (params: RawParamsFrom<'describeEndpointGroup'>) => Promise<ReturnTypeFrom<'describeEndpointGroup'>>  = async params => {
  // undefined
    return this.client.describeEndpointGroup(params as any).promise();
  }

  describeListener: (params: RawParamsFrom<'describeListener'>) => Promise<ReturnTypeFrom<'describeListener'>>  = async params => {
  // undefined
    return this.client.describeListener(params as any).promise();
  }

  async listAccelerators(params: { [K in keyof ParamsFrom<'listAccelerators', { next?: string, limit?: number }>]: ParamsFrom<'listAccelerators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccelerators'>]-?: ReturnTypeFrom<'listAccelerators'>[K]}['Accelerators'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Accelerators"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccelerators({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAccelerators' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Accelerators ?? []) ? (result.Accelerators ?? []) : [result.Accelerators]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listByoipCidrs(params: { [K in keyof ParamsFrom<'listByoipCidrs', { next?: string, limit?: number }>]: ParamsFrom<'listByoipCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listByoipCidrs'>]-?: ReturnTypeFrom<'listByoipCidrs'>[K]}['ByoipCidrs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ByoipCidrs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listByoipCidrs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listByoipCidrs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ByoipCidrs ?? []) ? (result.ByoipCidrs ?? []) : [result.ByoipCidrs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomRoutingAccelerators(params: { [K in keyof ParamsFrom<'listCustomRoutingAccelerators', { next?: string, limit?: number }>]: ParamsFrom<'listCustomRoutingAccelerators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomRoutingAccelerators'>]-?: ReturnTypeFrom<'listCustomRoutingAccelerators'>[K]}['Accelerators'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Accelerators"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomRoutingAccelerators({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCustomRoutingAccelerators' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Accelerators ?? []) ? (result.Accelerators ?? []) : [result.Accelerators]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listCustomRoutingEndpointGroups: (params: RawParamsFrom<'listCustomRoutingEndpointGroups'>) => Promise<ReturnTypeFrom<'listCustomRoutingEndpointGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCustomRoutingEndpointGroups(params as any).promise();
  }

  async listCustomRoutingListeners(params: { [K in keyof ParamsFrom<'listCustomRoutingListeners', { next?: string, limit?: number }>]: ParamsFrom<'listCustomRoutingListeners', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomRoutingListeners'>]-?: ReturnTypeFrom<'listCustomRoutingListeners'>[K]}['Listeners'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Listeners"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomRoutingListeners({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCustomRoutingListeners' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Listeners ?? []) ? (result.Listeners ?? []) : [result.Listeners]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomRoutingPortMappings(params: { [K in keyof ParamsFrom<'listCustomRoutingPortMappings', { next?: string, limit?: number }>]: ParamsFrom<'listCustomRoutingPortMappings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomRoutingPortMappings'>]-?: ReturnTypeFrom<'listCustomRoutingPortMappings'>[K]}['PortMappings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PortMappings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomRoutingPortMappings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCustomRoutingPortMappings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PortMappings ?? []) ? (result.PortMappings ?? []) : [result.PortMappings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomRoutingPortMappingsByDestination(params: { [K in keyof ParamsFrom<'listCustomRoutingPortMappingsByDestination', { next?: string, limit?: number }>]: ParamsFrom<'listCustomRoutingPortMappingsByDestination', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomRoutingPortMappingsByDestination'>]-?: ReturnTypeFrom<'listCustomRoutingPortMappingsByDestination'>[K]}['DestinationPortMappings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DestinationPortMappings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomRoutingPortMappingsByDestination({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCustomRoutingPortMappingsByDestination' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DestinationPortMappings ?? []) ? (result.DestinationPortMappings ?? []) : [result.DestinationPortMappings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEndpointGroups(params: { [K in keyof ParamsFrom<'listEndpointGroups', { next?: string, limit?: number }>]: ParamsFrom<'listEndpointGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEndpointGroups'>]-?: ReturnTypeFrom<'listEndpointGroups'>[K]}['EndpointGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EndpointGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEndpointGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEndpointGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EndpointGroups ?? []) ? (result.EndpointGroups ?? []) : [result.EndpointGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listListeners(params: { [K in keyof ParamsFrom<'listListeners', { next?: string, limit?: number }>]: ParamsFrom<'listListeners', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listListeners'>]-?: ReturnTypeFrom<'listListeners'>[K]}['Listeners'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Listeners"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listListeners({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listListeners' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Listeners ?? []) ? (result.Listeners ?? []) : [result.Listeners]) as any;
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

  provisionByoipCidr: (params: RawParamsFrom<'provisionByoipCidr'>) => Promise<ReturnTypeFrom<'provisionByoipCidr'>>  = async params => {
  // undefined
    return this.client.provisionByoipCidr(params as any).promise();
  }

  removeCustomRoutingEndpoints: (params: RawParamsFrom<'removeCustomRoutingEndpoints'>) => Promise<ReturnTypeFrom<'removeCustomRoutingEndpoints'>>  = async params => {
  // undefined
    return this.client.removeCustomRoutingEndpoints(params as any).promise();
  }

  removeEndpoints: (params: RawParamsFrom<'removeEndpoints'>) => Promise<ReturnTypeFrom<'removeEndpoints'>>  = async params => {
  // undefined
    return this.client.removeEndpoints(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccelerator: (params: RawParamsFrom<'updateAccelerator'>) => Promise<ReturnTypeFrom<'updateAccelerator'>>  = async params => {
  // undefined
    return this.client.updateAccelerator(params as any).promise();
  }

  updateAcceleratorAttributes: (params: RawParamsFrom<'updateAcceleratorAttributes'>) => Promise<ReturnTypeFrom<'updateAcceleratorAttributes'>>  = async params => {
  // undefined
    return this.client.updateAcceleratorAttributes(params as any).promise();
  }

  updateCustomRoutingAccelerator: (params: RawParamsFrom<'updateCustomRoutingAccelerator'>) => Promise<ReturnTypeFrom<'updateCustomRoutingAccelerator'>>  = async params => {
  // undefined
    return this.client.updateCustomRoutingAccelerator(params as any).promise();
  }

  updateCustomRoutingAcceleratorAttributes: (params: RawParamsFrom<'updateCustomRoutingAcceleratorAttributes'>) => Promise<ReturnTypeFrom<'updateCustomRoutingAcceleratorAttributes'>>  = async params => {
  // undefined
    return this.client.updateCustomRoutingAcceleratorAttributes(params as any).promise();
  }

  updateCustomRoutingListener: (params: RawParamsFrom<'updateCustomRoutingListener'>) => Promise<ReturnTypeFrom<'updateCustomRoutingListener'>>  = async params => {
  // undefined
    return this.client.updateCustomRoutingListener(params as any).promise();
  }

  updateEndpointGroup: (params: RawParamsFrom<'updateEndpointGroup'>) => Promise<ReturnTypeFrom<'updateEndpointGroup'>>  = async params => {
  // undefined
    return this.client.updateEndpointGroup(params as any).promise();
  }

  updateListener: (params: RawParamsFrom<'updateListener'>) => Promise<ReturnTypeFrom<'updateListener'>>  = async params => {
  // undefined
    return this.client.updateListener(params as any).promise();
  }

  withdrawByoipCidr: (params: RawParamsFrom<'withdrawByoipCidr'>) => Promise<ReturnTypeFrom<'withdrawByoipCidr'>>  = async params => {
  // undefined
    return this.client.withdrawByoipCidr(params as any).promise();
  }
  
  static fromClient(client: AWSGlobalAccelerator): GlobalAccelerator {
    return new GlobalAccelerator(client) as any;
  }
  
  static client(options?: AWSGlobalAccelerator.Types.ClientConfiguration): GlobalAccelerator {
    return new GlobalAccelerator(new AWSGlobalAccelerator(options)) as any;
  }
}  
