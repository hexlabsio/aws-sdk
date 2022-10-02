import { Request, MediaConnect as AWSMediaConnect } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMediaConnect> = AWSMediaConnect[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMediaConnect> = AWSMediaConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMediaConnect[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMediaConnect, Extras> = AWSMediaConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mediaconnect';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listEntitlements","listFlows","listOfferings","listReservations"];
    
  addFlowMediaStreams: FunctionTypeFrom<'addFlowMediaStreams'>;

  addFlowOutputs: FunctionTypeFrom<'addFlowOutputs'>;

  addFlowSources: FunctionTypeFrom<'addFlowSources'>;

  addFlowVpcInterfaces: FunctionTypeFrom<'addFlowVpcInterfaces'>;

  createFlow: FunctionTypeFrom<'createFlow'>;

  deleteFlow: FunctionTypeFrom<'deleteFlow'>;

  describeFlow: FunctionTypeFrom<'describeFlow'>;

  describeOffering: FunctionTypeFrom<'describeOffering'>;

  describeReservation: FunctionTypeFrom<'describeReservation'>;

  grantFlowEntitlements: FunctionTypeFrom<'grantFlowEntitlements'>;

  listEntitlements(params: { [K in keyof Omit<ParamsFrom<'listEntitlements', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEntitlements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEntitlements'>]-?: ReturnTypeFrom<'listEntitlements'>[K]}['Entitlements'] }>
  listEntitlements(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEntitlements'>]-?: ReturnTypeFrom<'listEntitlements'>[K]}['Entitlements'] }>;

  listFlows(params: { [K in keyof Omit<ParamsFrom<'listFlows', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFlows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFlows'>]-?: ReturnTypeFrom<'listFlows'>[K]}['Flows'] }>
  listFlows(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFlows'>]-?: ReturnTypeFrom<'listFlows'>[K]}['Flows'] }>;

  listOfferings(params: { [K in keyof Omit<ParamsFrom<'listOfferings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['Offerings'] }>
  listOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['Offerings'] }>;

  listReservations(params: { [K in keyof Omit<ParamsFrom<'listReservations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listReservations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReservations'>]-?: ReturnTypeFrom<'listReservations'>[K]}['Reservations'] }>
  listReservations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReservations'>]-?: ReturnTypeFrom<'listReservations'>[K]}['Reservations'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  purchaseOffering: FunctionTypeFrom<'purchaseOffering'>;

  removeFlowMediaStream: FunctionTypeFrom<'removeFlowMediaStream'>;

  removeFlowOutput: FunctionTypeFrom<'removeFlowOutput'>;

  removeFlowSource: FunctionTypeFrom<'removeFlowSource'>;

  removeFlowVpcInterface: FunctionTypeFrom<'removeFlowVpcInterface'>;

  revokeFlowEntitlement: FunctionTypeFrom<'revokeFlowEntitlement'>;

  startFlow: FunctionTypeFrom<'startFlow'>;

  stopFlow: FunctionTypeFrom<'stopFlow'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateFlow: FunctionTypeFrom<'updateFlow'>;

  updateFlowEntitlement: FunctionTypeFrom<'updateFlowEntitlement'>;

  updateFlowMediaStream: FunctionTypeFrom<'updateFlowMediaStream'>;

  updateFlowOutput: FunctionTypeFrom<'updateFlowOutput'>;

  updateFlowSource: FunctionTypeFrom<'updateFlowSource'>
}
 
export class MediaConnect implements ClientType {
  private constructor(private readonly client: AWSMediaConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediaconnect';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listEntitlements","listFlows","listOfferings","listReservations"] as const;
  
  async addFlowMediaStreams(...args: any): Promise<any> {
  // undefined
    return this.client.addFlowMediaStreams(...args).promise()
  }

  async addFlowOutputs(...args: any): Promise<any> {
  // undefined
    return this.client.addFlowOutputs(...args).promise()
  }

  async addFlowSources(...args: any): Promise<any> {
  // undefined
    return this.client.addFlowSources(...args).promise()
  }

  async addFlowVpcInterfaces(...args: any): Promise<any> {
  // undefined
    return this.client.addFlowVpcInterfaces(...args).promise()
  }

  async createFlow(...args: any): Promise<any> {
  // undefined
    return this.client.createFlow(...args).promise()
  }

  async deleteFlow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFlow(...args).promise()
  }

  async describeFlow(...args: any): Promise<any> {
  // undefined
    return this.client.describeFlow(...args).promise()
  }

  async describeOffering(...args: any): Promise<any> {
  // undefined
    return this.client.describeOffering(...args).promise()
  }

  async describeReservation(...args: any): Promise<any> {
  // undefined
    return this.client.describeReservation(...args).promise()
  }

  async grantFlowEntitlements(...args: any): Promise<any> {
  // undefined
    return this.client.grantFlowEntitlements(...args).promise()
  }

  async listEntitlements(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entitlements"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEntitlements(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entitlements ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFlows(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Flows"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFlows(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Flows ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOfferings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Offerings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Offerings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReservations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Reservations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listReservations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Reservations ?? [];
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

  async purchaseOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseOffering(...args).promise()
  }

  async removeFlowMediaStream(...args: any): Promise<any> {
  // undefined
    return this.client.removeFlowMediaStream(...args).promise()
  }

  async removeFlowOutput(...args: any): Promise<any> {
  // undefined
    return this.client.removeFlowOutput(...args).promise()
  }

  async removeFlowSource(...args: any): Promise<any> {
  // undefined
    return this.client.removeFlowSource(...args).promise()
  }

  async removeFlowVpcInterface(...args: any): Promise<any> {
  // undefined
    return this.client.removeFlowVpcInterface(...args).promise()
  }

  async revokeFlowEntitlement(...args: any): Promise<any> {
  // undefined
    return this.client.revokeFlowEntitlement(...args).promise()
  }

  async startFlow(...args: any): Promise<any> {
  // undefined
    return this.client.startFlow(...args).promise()
  }

  async stopFlow(...args: any): Promise<any> {
  // undefined
    return this.client.stopFlow(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateFlow(...args: any): Promise<any> {
  // undefined
    return this.client.updateFlow(...args).promise()
  }

  async updateFlowEntitlement(...args: any): Promise<any> {
  // undefined
    return this.client.updateFlowEntitlement(...args).promise()
  }

  async updateFlowMediaStream(...args: any): Promise<any> {
  // undefined
    return this.client.updateFlowMediaStream(...args).promise()
  }

  async updateFlowOutput(...args: any): Promise<any> {
  // undefined
    return this.client.updateFlowOutput(...args).promise()
  }

  async updateFlowSource(...args: any): Promise<any> {
  // undefined
    return this.client.updateFlowSource(...args).promise()
  }
  
  static fromClient(client: AWSMediaConnect): ClientType {
    return new MediaConnect(client) as any;
  }
  
  static client(options?: AWSMediaConnect.Types.ClientConfiguration): ClientType {
    return new MediaConnect(new AWSMediaConnect(options)) as any;
  }
}  
