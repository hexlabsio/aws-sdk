import { Request, NetworkManager as AWSNetworkManager } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSNetworkManager> = AWSNetworkManager[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSNetworkManager> = AWSNetworkManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSNetworkManager[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSNetworkManager, Extras> = AWSNetworkManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSNetworkManager> = AWSNetworkManager[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class NetworkManager {
  private constructor(private readonly client: AWSNetworkManager) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'networkmanager' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["describeGlobalNetworks","listAttachments","listConnectPeers","listCoreNetworks","listPeerings"] as const;
  
  acceptAttachment: (params: RawParamsFrom<'acceptAttachment'>) => Promise<ReturnTypeFrom<'acceptAttachment'>>  = async params => {
  // undefined
    return this.client.acceptAttachment(params as any).promise();
  }

  associateConnectPeer: (params: RawParamsFrom<'associateConnectPeer'>) => Promise<ReturnTypeFrom<'associateConnectPeer'>>  = async params => {
  // undefined
    return this.client.associateConnectPeer(params as any).promise();
  }

  associateCustomerGateway: (params: RawParamsFrom<'associateCustomerGateway'>) => Promise<ReturnTypeFrom<'associateCustomerGateway'>>  = async params => {
  // undefined
    return this.client.associateCustomerGateway(params as any).promise();
  }

  associateLink: (params: RawParamsFrom<'associateLink'>) => Promise<ReturnTypeFrom<'associateLink'>>  = async params => {
  // undefined
    return this.client.associateLink(params as any).promise();
  }

  associateTransitGatewayConnectPeer: (params: RawParamsFrom<'associateTransitGatewayConnectPeer'>) => Promise<ReturnTypeFrom<'associateTransitGatewayConnectPeer'>>  = async params => {
  // undefined
    return this.client.associateTransitGatewayConnectPeer(params as any).promise();
  }

  createConnectAttachment: (params: RawParamsFrom<'createConnectAttachment'>) => Promise<ReturnTypeFrom<'createConnectAttachment'>>  = async params => {
  // undefined
    return this.client.createConnectAttachment(params as any).promise();
  }

  createConnectPeer: (params: RawParamsFrom<'createConnectPeer'>) => Promise<ReturnTypeFrom<'createConnectPeer'>>  = async params => {
  // undefined
    return this.client.createConnectPeer(params as any).promise();
  }

  createConnection: (params: RawParamsFrom<'createConnection'>) => Promise<ReturnTypeFrom<'createConnection'>>  = async params => {
  // undefined
    return this.client.createConnection(params as any).promise();
  }

  createCoreNetwork: (params: RawParamsFrom<'createCoreNetwork'>) => Promise<ReturnTypeFrom<'createCoreNetwork'>>  = async params => {
  // undefined
    return this.client.createCoreNetwork(params as any).promise();
  }

  createDevice: (params: RawParamsFrom<'createDevice'>) => Promise<ReturnTypeFrom<'createDevice'>>  = async params => {
  // undefined
    return this.client.createDevice(params as any).promise();
  }

  createGlobalNetwork: (params: RawParamsFrom<'createGlobalNetwork'>) => Promise<ReturnTypeFrom<'createGlobalNetwork'>>  = async params => {
  // undefined
    return this.client.createGlobalNetwork(params as any).promise();
  }

  createLink: (params: RawParamsFrom<'createLink'>) => Promise<ReturnTypeFrom<'createLink'>>  = async params => {
  // undefined
    return this.client.createLink(params as any).promise();
  }

  createSite: (params: RawParamsFrom<'createSite'>) => Promise<ReturnTypeFrom<'createSite'>>  = async params => {
  // undefined
    return this.client.createSite(params as any).promise();
  }

  createSiteToSiteVpnAttachment: (params: RawParamsFrom<'createSiteToSiteVpnAttachment'>) => Promise<ReturnTypeFrom<'createSiteToSiteVpnAttachment'>>  = async params => {
  // undefined
    return this.client.createSiteToSiteVpnAttachment(params as any).promise();
  }

  createTransitGatewayPeering: (params: RawParamsFrom<'createTransitGatewayPeering'>) => Promise<ReturnTypeFrom<'createTransitGatewayPeering'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayPeering(params as any).promise();
  }

  createTransitGatewayRouteTableAttachment: (params: RawParamsFrom<'createTransitGatewayRouteTableAttachment'>) => Promise<ReturnTypeFrom<'createTransitGatewayRouteTableAttachment'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayRouteTableAttachment(params as any).promise();
  }

  createVpcAttachment: (params: RawParamsFrom<'createVpcAttachment'>) => Promise<ReturnTypeFrom<'createVpcAttachment'>>  = async params => {
  // undefined
    return this.client.createVpcAttachment(params as any).promise();
  }

  deleteAttachment: (params: RawParamsFrom<'deleteAttachment'>) => Promise<ReturnTypeFrom<'deleteAttachment'>>  = async params => {
  // undefined
    return this.client.deleteAttachment(params as any).promise();
  }

  deleteConnectPeer: (params: RawParamsFrom<'deleteConnectPeer'>) => Promise<ReturnTypeFrom<'deleteConnectPeer'>>  = async params => {
  // undefined
    return this.client.deleteConnectPeer(params as any).promise();
  }

  deleteConnection: (params: RawParamsFrom<'deleteConnection'>) => Promise<ReturnTypeFrom<'deleteConnection'>>  = async params => {
  // undefined
    return this.client.deleteConnection(params as any).promise();
  }

  deleteCoreNetwork: (params: RawParamsFrom<'deleteCoreNetwork'>) => Promise<ReturnTypeFrom<'deleteCoreNetwork'>>  = async params => {
  // undefined
    return this.client.deleteCoreNetwork(params as any).promise();
  }

  deleteCoreNetworkPolicyVersion: (params: RawParamsFrom<'deleteCoreNetworkPolicyVersion'>) => Promise<ReturnTypeFrom<'deleteCoreNetworkPolicyVersion'>>  = async params => {
  // undefined
    return this.client.deleteCoreNetworkPolicyVersion(params as any).promise();
  }

  deleteDevice: (params: RawParamsFrom<'deleteDevice'>) => Promise<ReturnTypeFrom<'deleteDevice'>>  = async params => {
  // undefined
    return this.client.deleteDevice(params as any).promise();
  }

  deleteGlobalNetwork: (params: RawParamsFrom<'deleteGlobalNetwork'>) => Promise<ReturnTypeFrom<'deleteGlobalNetwork'>>  = async params => {
  // undefined
    return this.client.deleteGlobalNetwork(params as any).promise();
  }

  deleteLink: (params: RawParamsFrom<'deleteLink'>) => Promise<ReturnTypeFrom<'deleteLink'>>  = async params => {
  // undefined
    return this.client.deleteLink(params as any).promise();
  }

  deletePeering: (params: RawParamsFrom<'deletePeering'>) => Promise<ReturnTypeFrom<'deletePeering'>>  = async params => {
  // undefined
    return this.client.deletePeering(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteSite: (params: RawParamsFrom<'deleteSite'>) => Promise<ReturnTypeFrom<'deleteSite'>>  = async params => {
  // undefined
    return this.client.deleteSite(params as any).promise();
  }

  deregisterTransitGateway: (params: RawParamsFrom<'deregisterTransitGateway'>) => Promise<ReturnTypeFrom<'deregisterTransitGateway'>>  = async params => {
  // undefined
    return this.client.deregisterTransitGateway(params as any).promise();
  }

  async describeGlobalNetworks(params: { [K in keyof ParamsFrom<'describeGlobalNetworks', { next?: string, limit?: number }>]: ParamsFrom<'describeGlobalNetworks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeGlobalNetworks'>]-?: ReturnTypeFrom<'describeGlobalNetworks'>[K]}['GlobalNetworks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GlobalNetworks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeGlobalNetworks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeGlobalNetworks' })).toString('base64');
    const member = (Array.isArray(result.GlobalNetworks ?? []) ? (result.GlobalNetworks ?? []) : [result.GlobalNetworks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disassociateConnectPeer: (params: RawParamsFrom<'disassociateConnectPeer'>) => Promise<ReturnTypeFrom<'disassociateConnectPeer'>>  = async params => {
  // undefined
    return this.client.disassociateConnectPeer(params as any).promise();
  }

  disassociateCustomerGateway: (params: RawParamsFrom<'disassociateCustomerGateway'>) => Promise<ReturnTypeFrom<'disassociateCustomerGateway'>>  = async params => {
  // undefined
    return this.client.disassociateCustomerGateway(params as any).promise();
  }

  disassociateLink: (params: RawParamsFrom<'disassociateLink'>) => Promise<ReturnTypeFrom<'disassociateLink'>>  = async params => {
  // undefined
    return this.client.disassociateLink(params as any).promise();
  }

  disassociateTransitGatewayConnectPeer: (params: RawParamsFrom<'disassociateTransitGatewayConnectPeer'>) => Promise<ReturnTypeFrom<'disassociateTransitGatewayConnectPeer'>>  = async params => {
  // undefined
    return this.client.disassociateTransitGatewayConnectPeer(params as any).promise();
  }

  executeCoreNetworkChangeSet: (params: RawParamsFrom<'executeCoreNetworkChangeSet'>) => Promise<ReturnTypeFrom<'executeCoreNetworkChangeSet'>>  = async params => {
  // undefined
    return this.client.executeCoreNetworkChangeSet(params as any).promise();
  }

  getConnectAttachment: (params: RawParamsFrom<'getConnectAttachment'>) => Promise<ReturnTypeFrom<'getConnectAttachment'>>  = async params => {
  // undefined
    return this.client.getConnectAttachment(params as any).promise();
  }

  getConnectPeer: (params: RawParamsFrom<'getConnectPeer'>) => Promise<ReturnTypeFrom<'getConnectPeer'>>  = async params => {
  // undefined
    return this.client.getConnectPeer(params as any).promise();
  }

  async getConnectPeerAssociations(params: { [K in keyof ParamsFrom<'getConnectPeerAssociations', { next?: string, limit?: number }>]: ParamsFrom<'getConnectPeerAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getConnectPeerAssociations'>]-?: ReturnTypeFrom<'getConnectPeerAssociations'>[K]}['ConnectPeerAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConnectPeerAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getConnectPeerAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getConnectPeerAssociations' })).toString('base64');
    const member = (Array.isArray(result.ConnectPeerAssociations ?? []) ? (result.ConnectPeerAssociations ?? []) : [result.ConnectPeerAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getConnections(params: { [K in keyof ParamsFrom<'getConnections', { next?: string, limit?: number }>]: ParamsFrom<'getConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getConnections'>]-?: ReturnTypeFrom<'getConnections'>[K]}['Connections'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Connections"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getConnections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getConnections' })).toString('base64');
    const member = (Array.isArray(result.Connections ?? []) ? (result.Connections ?? []) : [result.Connections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getCoreNetwork: (params: RawParamsFrom<'getCoreNetwork'>) => Promise<ReturnTypeFrom<'getCoreNetwork'>>  = async params => {
  // undefined
    return this.client.getCoreNetwork(params as any).promise();
  }

  async getCoreNetworkChangeEvents(params: { [K in keyof ParamsFrom<'getCoreNetworkChangeEvents', { next?: string, limit?: number }>]: ParamsFrom<'getCoreNetworkChangeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getCoreNetworkChangeEvents'>]-?: ReturnTypeFrom<'getCoreNetworkChangeEvents'>[K]}['CoreNetworkChangeEvents'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoreNetworkChangeEvents"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getCoreNetworkChangeEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getCoreNetworkChangeEvents' })).toString('base64');
    const member = (Array.isArray(result.CoreNetworkChangeEvents ?? []) ? (result.CoreNetworkChangeEvents ?? []) : [result.CoreNetworkChangeEvents]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getCoreNetworkChangeSet(params: { [K in keyof ParamsFrom<'getCoreNetworkChangeSet', { next?: string, limit?: number }>]: ParamsFrom<'getCoreNetworkChangeSet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getCoreNetworkChangeSet'>]-?: ReturnTypeFrom<'getCoreNetworkChangeSet'>[K]}['CoreNetworkChanges'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoreNetworkChanges"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getCoreNetworkChangeSet({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getCoreNetworkChangeSet' })).toString('base64');
    const member = (Array.isArray(result.CoreNetworkChanges ?? []) ? (result.CoreNetworkChanges ?? []) : [result.CoreNetworkChanges]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getCoreNetworkPolicy: (params: RawParamsFrom<'getCoreNetworkPolicy'>) => Promise<ReturnTypeFrom<'getCoreNetworkPolicy'>>  = async params => {
  // undefined
    return this.client.getCoreNetworkPolicy(params as any).promise();
  }

  async getCustomerGatewayAssociations(params: { [K in keyof ParamsFrom<'getCustomerGatewayAssociations', { next?: string, limit?: number }>]: ParamsFrom<'getCustomerGatewayAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getCustomerGatewayAssociations'>]-?: ReturnTypeFrom<'getCustomerGatewayAssociations'>[K]}['CustomerGatewayAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CustomerGatewayAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getCustomerGatewayAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getCustomerGatewayAssociations' })).toString('base64');
    const member = (Array.isArray(result.CustomerGatewayAssociations ?? []) ? (result.CustomerGatewayAssociations ?? []) : [result.CustomerGatewayAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getDevices(params: { [K in keyof ParamsFrom<'getDevices', { next?: string, limit?: number }>]: ParamsFrom<'getDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getDevices'>]-?: ReturnTypeFrom<'getDevices'>[K]}['Devices'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Devices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getDevices' })).toString('base64');
    const member = (Array.isArray(result.Devices ?? []) ? (result.Devices ?? []) : [result.Devices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getLinkAssociations(params: { [K in keyof ParamsFrom<'getLinkAssociations', { next?: string, limit?: number }>]: ParamsFrom<'getLinkAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getLinkAssociations'>]-?: ReturnTypeFrom<'getLinkAssociations'>[K]}['LinkAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LinkAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getLinkAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getLinkAssociations' })).toString('base64');
    const member = (Array.isArray(result.LinkAssociations ?? []) ? (result.LinkAssociations ?? []) : [result.LinkAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getLinks(params: { [K in keyof ParamsFrom<'getLinks', { next?: string, limit?: number }>]: ParamsFrom<'getLinks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getLinks'>]-?: ReturnTypeFrom<'getLinks'>[K]}['Links'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Links"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getLinks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getLinks' })).toString('base64');
    const member = (Array.isArray(result.Links ?? []) ? (result.Links ?? []) : [result.Links]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNetworkResourceCounts(params: { [K in keyof ParamsFrom<'getNetworkResourceCounts', { next?: string, limit?: number }>]: ParamsFrom<'getNetworkResourceCounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getNetworkResourceCounts'>]-?: ReturnTypeFrom<'getNetworkResourceCounts'>[K]}['NetworkResourceCounts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkResourceCounts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getNetworkResourceCounts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getNetworkResourceCounts' })).toString('base64');
    const member = (Array.isArray(result.NetworkResourceCounts ?? []) ? (result.NetworkResourceCounts ?? []) : [result.NetworkResourceCounts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNetworkResourceRelationships(params: { [K in keyof ParamsFrom<'getNetworkResourceRelationships', { next?: string, limit?: number }>]: ParamsFrom<'getNetworkResourceRelationships', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getNetworkResourceRelationships'>]-?: ReturnTypeFrom<'getNetworkResourceRelationships'>[K]}['Relationships'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Relationships"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getNetworkResourceRelationships({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getNetworkResourceRelationships' })).toString('base64');
    const member = (Array.isArray(result.Relationships ?? []) ? (result.Relationships ?? []) : [result.Relationships]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNetworkResources(params: { [K in keyof ParamsFrom<'getNetworkResources', { next?: string, limit?: number }>]: ParamsFrom<'getNetworkResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getNetworkResources'>]-?: ReturnTypeFrom<'getNetworkResources'>[K]}['NetworkResources'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkResources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getNetworkResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getNetworkResources' })).toString('base64');
    const member = (Array.isArray(result.NetworkResources ?? []) ? (result.NetworkResources ?? []) : [result.NetworkResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getNetworkRoutes: (params: RawParamsFrom<'getNetworkRoutes'>) => Promise<ReturnTypeFrom<'getNetworkRoutes'>>  = async params => {
  // undefined
    return this.client.getNetworkRoutes(params as any).promise();
  }

  async getNetworkTelemetry(params: { [K in keyof ParamsFrom<'getNetworkTelemetry', { next?: string, limit?: number }>]: ParamsFrom<'getNetworkTelemetry', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getNetworkTelemetry'>]-?: ReturnTypeFrom<'getNetworkTelemetry'>[K]}['NetworkTelemetry'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkTelemetry"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getNetworkTelemetry({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getNetworkTelemetry' })).toString('base64');
    const member = (Array.isArray(result.NetworkTelemetry ?? []) ? (result.NetworkTelemetry ?? []) : [result.NetworkTelemetry]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getResourcePolicy: (params: RawParamsFrom<'getResourcePolicy'>) => Promise<ReturnTypeFrom<'getResourcePolicy'>>  = async params => {
  // undefined
    return this.client.getResourcePolicy(params as any).promise();
  }

  getRouteAnalysis: (params: RawParamsFrom<'getRouteAnalysis'>) => Promise<ReturnTypeFrom<'getRouteAnalysis'>>  = async params => {
  // undefined
    return this.client.getRouteAnalysis(params as any).promise();
  }

  getSiteToSiteVpnAttachment: (params: RawParamsFrom<'getSiteToSiteVpnAttachment'>) => Promise<ReturnTypeFrom<'getSiteToSiteVpnAttachment'>>  = async params => {
  // undefined
    return this.client.getSiteToSiteVpnAttachment(params as any).promise();
  }

  async getSites(params: { [K in keyof ParamsFrom<'getSites', { next?: string, limit?: number }>]: ParamsFrom<'getSites', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getSites'>]-?: ReturnTypeFrom<'getSites'>[K]}['Sites'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Sites"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getSites({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getSites' })).toString('base64');
    const member = (Array.isArray(result.Sites ?? []) ? (result.Sites ?? []) : [result.Sites]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayConnectPeerAssociations(params: { [K in keyof ParamsFrom<'getTransitGatewayConnectPeerAssociations', { next?: string, limit?: number }>]: ParamsFrom<'getTransitGatewayConnectPeerAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTransitGatewayConnectPeerAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayConnectPeerAssociations'>[K]}['TransitGatewayConnectPeerAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayConnectPeerAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayConnectPeerAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTransitGatewayConnectPeerAssociations' })).toString('base64');
    const member = (Array.isArray(result.TransitGatewayConnectPeerAssociations ?? []) ? (result.TransitGatewayConnectPeerAssociations ?? []) : [result.TransitGatewayConnectPeerAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getTransitGatewayPeering: (params: RawParamsFrom<'getTransitGatewayPeering'>) => Promise<ReturnTypeFrom<'getTransitGatewayPeering'>>  = async params => {
  // undefined
    return this.client.getTransitGatewayPeering(params as any).promise();
  }

  async getTransitGatewayRegistrations(params: { [K in keyof ParamsFrom<'getTransitGatewayRegistrations', { next?: string, limit?: number }>]: ParamsFrom<'getTransitGatewayRegistrations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTransitGatewayRegistrations'>]-?: ReturnTypeFrom<'getTransitGatewayRegistrations'>[K]}['TransitGatewayRegistrations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayRegistrations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayRegistrations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTransitGatewayRegistrations' })).toString('base64');
    const member = (Array.isArray(result.TransitGatewayRegistrations ?? []) ? (result.TransitGatewayRegistrations ?? []) : [result.TransitGatewayRegistrations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getTransitGatewayRouteTableAttachment: (params: RawParamsFrom<'getTransitGatewayRouteTableAttachment'>) => Promise<ReturnTypeFrom<'getTransitGatewayRouteTableAttachment'>>  = async params => {
  // undefined
    return this.client.getTransitGatewayRouteTableAttachment(params as any).promise();
  }

  getVpcAttachment: (params: RawParamsFrom<'getVpcAttachment'>) => Promise<ReturnTypeFrom<'getVpcAttachment'>>  = async params => {
  // undefined
    return this.client.getVpcAttachment(params as any).promise();
  }

  async listAttachments(params: { [K in keyof ParamsFrom<'listAttachments', { next?: string, limit?: number }>]: ParamsFrom<'listAttachments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttachments'>]-?: ReturnTypeFrom<'listAttachments'>[K]}['Attachments'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Attachments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAttachments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAttachments' })).toString('base64');
    const member = (Array.isArray(result.Attachments ?? []) ? (result.Attachments ?? []) : [result.Attachments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConnectPeers(params: { [K in keyof ParamsFrom<'listConnectPeers', { next?: string, limit?: number }>]: ParamsFrom<'listConnectPeers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listConnectPeers'>]-?: ReturnTypeFrom<'listConnectPeers'>[K]}['ConnectPeers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConnectPeers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listConnectPeers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listConnectPeers' })).toString('base64');
    const member = (Array.isArray(result.ConnectPeers ?? []) ? (result.ConnectPeers ?? []) : [result.ConnectPeers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoreNetworkPolicyVersions(params: { [K in keyof ParamsFrom<'listCoreNetworkPolicyVersions', { next?: string, limit?: number }>]: ParamsFrom<'listCoreNetworkPolicyVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCoreNetworkPolicyVersions'>]-?: ReturnTypeFrom<'listCoreNetworkPolicyVersions'>[K]}['CoreNetworkPolicyVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoreNetworkPolicyVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCoreNetworkPolicyVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCoreNetworkPolicyVersions' })).toString('base64');
    const member = (Array.isArray(result.CoreNetworkPolicyVersions ?? []) ? (result.CoreNetworkPolicyVersions ?? []) : [result.CoreNetworkPolicyVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoreNetworks(params: { [K in keyof ParamsFrom<'listCoreNetworks', { next?: string, limit?: number }>]: ParamsFrom<'listCoreNetworks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCoreNetworks'>]-?: ReturnTypeFrom<'listCoreNetworks'>[K]}['CoreNetworks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoreNetworks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCoreNetworks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCoreNetworks' })).toString('base64');
    const member = (Array.isArray(result.CoreNetworks ?? []) ? (result.CoreNetworks ?? []) : [result.CoreNetworks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listOrganizationServiceAccessStatus: (params: RawParamsFrom<'listOrganizationServiceAccessStatus'>) => Promise<ReturnTypeFrom<'listOrganizationServiceAccessStatus'>>  = async params => {
  // undefined
    return this.client.listOrganizationServiceAccessStatus(params as any).promise();
  }

  async listPeerings(params: { [K in keyof ParamsFrom<'listPeerings', { next?: string, limit?: number }>]: ParamsFrom<'listPeerings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPeerings'>]-?: ReturnTypeFrom<'listPeerings'>[K]}['Peerings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Peerings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPeerings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPeerings' })).toString('base64');
    const member = (Array.isArray(result.Peerings ?? []) ? (result.Peerings ?? []) : [result.Peerings]) as any;
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

  putCoreNetworkPolicy: (params: RawParamsFrom<'putCoreNetworkPolicy'>) => Promise<ReturnTypeFrom<'putCoreNetworkPolicy'>>  = async params => {
  // undefined
    return this.client.putCoreNetworkPolicy(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  registerTransitGateway: (params: RawParamsFrom<'registerTransitGateway'>) => Promise<ReturnTypeFrom<'registerTransitGateway'>>  = async params => {
  // undefined
    return this.client.registerTransitGateway(params as any).promise();
  }

  rejectAttachment: (params: RawParamsFrom<'rejectAttachment'>) => Promise<ReturnTypeFrom<'rejectAttachment'>>  = async params => {
  // undefined
    return this.client.rejectAttachment(params as any).promise();
  }

  restoreCoreNetworkPolicyVersion: (params: RawParamsFrom<'restoreCoreNetworkPolicyVersion'>) => Promise<ReturnTypeFrom<'restoreCoreNetworkPolicyVersion'>>  = async params => {
  // undefined
    return this.client.restoreCoreNetworkPolicyVersion(params as any).promise();
  }

  startOrganizationServiceAccessUpdate: (params: RawParamsFrom<'startOrganizationServiceAccessUpdate'>) => Promise<ReturnTypeFrom<'startOrganizationServiceAccessUpdate'>>  = async params => {
  // undefined
    return this.client.startOrganizationServiceAccessUpdate(params as any).promise();
  }

  startRouteAnalysis: (params: RawParamsFrom<'startRouteAnalysis'>) => Promise<ReturnTypeFrom<'startRouteAnalysis'>>  = async params => {
  // undefined
    return this.client.startRouteAnalysis(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateConnection: (params: RawParamsFrom<'updateConnection'>) => Promise<ReturnTypeFrom<'updateConnection'>>  = async params => {
  // undefined
    return this.client.updateConnection(params as any).promise();
  }

  updateCoreNetwork: (params: RawParamsFrom<'updateCoreNetwork'>) => Promise<ReturnTypeFrom<'updateCoreNetwork'>>  = async params => {
  // undefined
    return this.client.updateCoreNetwork(params as any).promise();
  }

  updateDevice: (params: RawParamsFrom<'updateDevice'>) => Promise<ReturnTypeFrom<'updateDevice'>>  = async params => {
  // undefined
    return this.client.updateDevice(params as any).promise();
  }

  updateGlobalNetwork: (params: RawParamsFrom<'updateGlobalNetwork'>) => Promise<ReturnTypeFrom<'updateGlobalNetwork'>>  = async params => {
  // undefined
    return this.client.updateGlobalNetwork(params as any).promise();
  }

  updateLink: (params: RawParamsFrom<'updateLink'>) => Promise<ReturnTypeFrom<'updateLink'>>  = async params => {
  // undefined
    return this.client.updateLink(params as any).promise();
  }

  updateNetworkResourceMetadata: (params: RawParamsFrom<'updateNetworkResourceMetadata'>) => Promise<ReturnTypeFrom<'updateNetworkResourceMetadata'>>  = async params => {
  // undefined
    return this.client.updateNetworkResourceMetadata(params as any).promise();
  }

  updateSite: (params: RawParamsFrom<'updateSite'>) => Promise<ReturnTypeFrom<'updateSite'>>  = async params => {
  // undefined
    return this.client.updateSite(params as any).promise();
  }

  updateVpcAttachment: (params: RawParamsFrom<'updateVpcAttachment'>) => Promise<ReturnTypeFrom<'updateVpcAttachment'>>  = async params => {
  // undefined
    return this.client.updateVpcAttachment(params as any).promise();
  }
  
  static fromClient(client: AWSNetworkManager): NetworkManager {
    return new NetworkManager(client) as any;
  }
  
  static client(options?: AWSNetworkManager.Types.ClientConfiguration): NetworkManager {
    return new NetworkManager(new AWSNetworkManager(options)) as any;
  }
}  
