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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMediaConnect> = AWSMediaConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MediaConnect {
  private constructor(private readonly client: AWSMediaConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediaconnect' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listEntitlements","listFlows","listOfferings","listReservations"] as const;
  
  addFlowMediaStreams: (params: RawParamsFrom<'addFlowMediaStreams'>) => Promise<ReturnTypeFrom<'addFlowMediaStreams'>>  = async params => {
  // undefined
    return this.client.addFlowMediaStreams(params as any).promise();
  }

  addFlowOutputs: (params: RawParamsFrom<'addFlowOutputs'>) => Promise<ReturnTypeFrom<'addFlowOutputs'>>  = async params => {
  // undefined
    return this.client.addFlowOutputs(params as any).promise();
  }

  addFlowSources: (params: RawParamsFrom<'addFlowSources'>) => Promise<ReturnTypeFrom<'addFlowSources'>>  = async params => {
  // undefined
    return this.client.addFlowSources(params as any).promise();
  }

  addFlowVpcInterfaces: (params: RawParamsFrom<'addFlowVpcInterfaces'>) => Promise<ReturnTypeFrom<'addFlowVpcInterfaces'>>  = async params => {
  // undefined
    return this.client.addFlowVpcInterfaces(params as any).promise();
  }

  createFlow: (params: RawParamsFrom<'createFlow'>) => Promise<ReturnTypeFrom<'createFlow'>>  = async params => {
  // undefined
    return this.client.createFlow(params as any).promise();
  }

  deleteFlow: (params: RawParamsFrom<'deleteFlow'>) => Promise<ReturnTypeFrom<'deleteFlow'>>  = async params => {
  // undefined
    return this.client.deleteFlow(params as any).promise();
  }

  describeFlow: (params: RawParamsFrom<'describeFlow'>) => Promise<ReturnTypeFrom<'describeFlow'>>  = async params => {
  // undefined
    return this.client.describeFlow(params as any).promise();
  }

  describeOffering: (params: RawParamsFrom<'describeOffering'>) => Promise<ReturnTypeFrom<'describeOffering'>>  = async params => {
  // undefined
    return this.client.describeOffering(params as any).promise();
  }

  describeReservation: (params: RawParamsFrom<'describeReservation'>) => Promise<ReturnTypeFrom<'describeReservation'>>  = async params => {
  // undefined
    return this.client.describeReservation(params as any).promise();
  }

  grantFlowEntitlements: (params: RawParamsFrom<'grantFlowEntitlements'>) => Promise<ReturnTypeFrom<'grantFlowEntitlements'>>  = async params => {
  // undefined
    return this.client.grantFlowEntitlements(params as any).promise();
  }

  async listEntitlements(params: { [K in keyof ParamsFrom<'listEntitlements', { next?: string, limit?: number }>]: ParamsFrom<'listEntitlements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEntitlements'>]-?: ReturnTypeFrom<'listEntitlements'>[K]}['Entitlements'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entitlements"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEntitlements({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEntitlements' })).toString('base64');
    const member = (Array.isArray(result.Entitlements ?? []) ? (result.Entitlements ?? []) : [result.Entitlements]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFlows(params: { [K in keyof ParamsFrom<'listFlows', { next?: string, limit?: number }>]: ParamsFrom<'listFlows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFlows'>]-?: ReturnTypeFrom<'listFlows'>[K]}['Flows'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Flows"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFlows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFlows' })).toString('base64');
    const member = (Array.isArray(result.Flows ?? []) ? (result.Flows ?? []) : [result.Flows]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOfferings(params: { [K in keyof ParamsFrom<'listOfferings', { next?: string, limit?: number }>]: ParamsFrom<'listOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOfferings'>]-?: ReturnTypeFrom<'listOfferings'>[K]}['Offerings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Offerings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOfferings' })).toString('base64');
    const member = (Array.isArray(result.Offerings ?? []) ? (result.Offerings ?? []) : [result.Offerings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReservations(params: { [K in keyof ParamsFrom<'listReservations', { next?: string, limit?: number }>]: ParamsFrom<'listReservations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReservations'>]-?: ReturnTypeFrom<'listReservations'>[K]}['Reservations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Reservations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listReservations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listReservations' })).toString('base64');
    const member = (Array.isArray(result.Reservations ?? []) ? (result.Reservations ?? []) : [result.Reservations]) as any;
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

  purchaseOffering: (params: RawParamsFrom<'purchaseOffering'>) => Promise<ReturnTypeFrom<'purchaseOffering'>>  = async params => {
  // undefined
    return this.client.purchaseOffering(params as any).promise();
  }

  removeFlowMediaStream: (params: RawParamsFrom<'removeFlowMediaStream'>) => Promise<ReturnTypeFrom<'removeFlowMediaStream'>>  = async params => {
  // undefined
    return this.client.removeFlowMediaStream(params as any).promise();
  }

  removeFlowOutput: (params: RawParamsFrom<'removeFlowOutput'>) => Promise<ReturnTypeFrom<'removeFlowOutput'>>  = async params => {
  // undefined
    return this.client.removeFlowOutput(params as any).promise();
  }

  removeFlowSource: (params: RawParamsFrom<'removeFlowSource'>) => Promise<ReturnTypeFrom<'removeFlowSource'>>  = async params => {
  // undefined
    return this.client.removeFlowSource(params as any).promise();
  }

  removeFlowVpcInterface: (params: RawParamsFrom<'removeFlowVpcInterface'>) => Promise<ReturnTypeFrom<'removeFlowVpcInterface'>>  = async params => {
  // undefined
    return this.client.removeFlowVpcInterface(params as any).promise();
  }

  revokeFlowEntitlement: (params: RawParamsFrom<'revokeFlowEntitlement'>) => Promise<ReturnTypeFrom<'revokeFlowEntitlement'>>  = async params => {
  // undefined
    return this.client.revokeFlowEntitlement(params as any).promise();
  }

  startFlow: (params: RawParamsFrom<'startFlow'>) => Promise<ReturnTypeFrom<'startFlow'>>  = async params => {
  // undefined
    return this.client.startFlow(params as any).promise();
  }

  stopFlow: (params: RawParamsFrom<'stopFlow'>) => Promise<ReturnTypeFrom<'stopFlow'>>  = async params => {
  // undefined
    return this.client.stopFlow(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateFlow: (params: RawParamsFrom<'updateFlow'>) => Promise<ReturnTypeFrom<'updateFlow'>>  = async params => {
  // undefined
    return this.client.updateFlow(params as any).promise();
  }

  updateFlowEntitlement: (params: RawParamsFrom<'updateFlowEntitlement'>) => Promise<ReturnTypeFrom<'updateFlowEntitlement'>>  = async params => {
  // undefined
    return this.client.updateFlowEntitlement(params as any).promise();
  }

  updateFlowMediaStream: (params: RawParamsFrom<'updateFlowMediaStream'>) => Promise<ReturnTypeFrom<'updateFlowMediaStream'>>  = async params => {
  // undefined
    return this.client.updateFlowMediaStream(params as any).promise();
  }

  updateFlowOutput: (params: RawParamsFrom<'updateFlowOutput'>) => Promise<ReturnTypeFrom<'updateFlowOutput'>>  = async params => {
  // undefined
    return this.client.updateFlowOutput(params as any).promise();
  }

  updateFlowSource: (params: RawParamsFrom<'updateFlowSource'>) => Promise<ReturnTypeFrom<'updateFlowSource'>>  = async params => {
  // undefined
    return this.client.updateFlowSource(params as any).promise();
  }
  
  static fromClient(client: AWSMediaConnect): MediaConnect {
    return new MediaConnect(client) as any;
  }
  
  static client(options?: AWSMediaConnect.Types.ClientConfiguration): MediaConnect {
    return new MediaConnect(new AWSMediaConnect(options)) as any;
  }
}  
