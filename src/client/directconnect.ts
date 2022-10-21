import { Request, DirectConnect as AWSDirectConnect } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDirectConnect> = AWSDirectConnect[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDirectConnect> = AWSDirectConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDirectConnect[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDirectConnect, Extras> = AWSDirectConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDirectConnect> = AWSDirectConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DirectConnect {
  private constructor(private readonly client: AWSDirectConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'directconnect' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["describeConnections","describeInterconnects","describeLocations","describeVirtualGateways","describeVirtualInterfaces"] as const;
  
  acceptDirectConnectGatewayAssociationProposal: (params: RawParamsFrom<'acceptDirectConnectGatewayAssociationProposal'>) => Promise<ReturnTypeFrom<'acceptDirectConnectGatewayAssociationProposal'>>  = async params => {
  // undefined
    return this.client.acceptDirectConnectGatewayAssociationProposal(params as any).promise();
  }

  allocateConnectionOnInterconnect: (params: RawParamsFrom<'allocateConnectionOnInterconnect'>) => Promise<ReturnTypeFrom<'allocateConnectionOnInterconnect'>>  = async params => {
  // undefined
    return this.client.allocateConnectionOnInterconnect(params as any).promise();
  }

  allocateHostedConnection: (params: RawParamsFrom<'allocateHostedConnection'>) => Promise<ReturnTypeFrom<'allocateHostedConnection'>>  = async params => {
  // undefined
    return this.client.allocateHostedConnection(params as any).promise();
  }

  allocatePrivateVirtualInterface: (params: RawParamsFrom<'allocatePrivateVirtualInterface'>) => Promise<ReturnTypeFrom<'allocatePrivateVirtualInterface'>>  = async params => {
  // undefined
    return this.client.allocatePrivateVirtualInterface(params as any).promise();
  }

  allocatePublicVirtualInterface: (params: RawParamsFrom<'allocatePublicVirtualInterface'>) => Promise<ReturnTypeFrom<'allocatePublicVirtualInterface'>>  = async params => {
  // undefined
    return this.client.allocatePublicVirtualInterface(params as any).promise();
  }

  allocateTransitVirtualInterface: (params: RawParamsFrom<'allocateTransitVirtualInterface'>) => Promise<ReturnTypeFrom<'allocateTransitVirtualInterface'>>  = async params => {
  // undefined
    return this.client.allocateTransitVirtualInterface(params as any).promise();
  }

  associateConnectionWithLag: (params: RawParamsFrom<'associateConnectionWithLag'>) => Promise<ReturnTypeFrom<'associateConnectionWithLag'>>  = async params => {
  // undefined
    return this.client.associateConnectionWithLag(params as any).promise();
  }

  associateHostedConnection: (params: RawParamsFrom<'associateHostedConnection'>) => Promise<ReturnTypeFrom<'associateHostedConnection'>>  = async params => {
  // undefined
    return this.client.associateHostedConnection(params as any).promise();
  }

  associateMacSecKey: (params: RawParamsFrom<'associateMacSecKey'>) => Promise<ReturnTypeFrom<'associateMacSecKey'>>  = async params => {
  // undefined
    return this.client.associateMacSecKey(params as any).promise();
  }

  associateVirtualInterface: (params: RawParamsFrom<'associateVirtualInterface'>) => Promise<ReturnTypeFrom<'associateVirtualInterface'>>  = async params => {
  // undefined
    return this.client.associateVirtualInterface(params as any).promise();
  }

  confirmConnection: (params: RawParamsFrom<'confirmConnection'>) => Promise<ReturnTypeFrom<'confirmConnection'>>  = async params => {
  // undefined
    return this.client.confirmConnection(params as any).promise();
  }

  confirmCustomerAgreement: (params: RawParamsFrom<'confirmCustomerAgreement'>) => Promise<ReturnTypeFrom<'confirmCustomerAgreement'>>  = async params => {
  // undefined
    return this.client.confirmCustomerAgreement(params as any).promise();
  }

  confirmPrivateVirtualInterface: (params: RawParamsFrom<'confirmPrivateVirtualInterface'>) => Promise<ReturnTypeFrom<'confirmPrivateVirtualInterface'>>  = async params => {
  // undefined
    return this.client.confirmPrivateVirtualInterface(params as any).promise();
  }

  confirmPublicVirtualInterface: (params: RawParamsFrom<'confirmPublicVirtualInterface'>) => Promise<ReturnTypeFrom<'confirmPublicVirtualInterface'>>  = async params => {
  // undefined
    return this.client.confirmPublicVirtualInterface(params as any).promise();
  }

  confirmTransitVirtualInterface: (params: RawParamsFrom<'confirmTransitVirtualInterface'>) => Promise<ReturnTypeFrom<'confirmTransitVirtualInterface'>>  = async params => {
  // undefined
    return this.client.confirmTransitVirtualInterface(params as any).promise();
  }

  createBGPPeer: (params: RawParamsFrom<'createBGPPeer'>) => Promise<ReturnTypeFrom<'createBGPPeer'>>  = async params => {
  // undefined
    return this.client.createBGPPeer(params as any).promise();
  }

  createConnection: (params: RawParamsFrom<'createConnection'>) => Promise<ReturnTypeFrom<'createConnection'>>  = async params => {
  // undefined
    return this.client.createConnection(params as any).promise();
  }

  createDirectConnectGateway: (params: RawParamsFrom<'createDirectConnectGateway'>) => Promise<ReturnTypeFrom<'createDirectConnectGateway'>>  = async params => {
  // undefined
    return this.client.createDirectConnectGateway(params as any).promise();
  }

  createDirectConnectGatewayAssociation: (params: RawParamsFrom<'createDirectConnectGatewayAssociation'>) => Promise<ReturnTypeFrom<'createDirectConnectGatewayAssociation'>>  = async params => {
  // undefined
    return this.client.createDirectConnectGatewayAssociation(params as any).promise();
  }

  createDirectConnectGatewayAssociationProposal: (params: RawParamsFrom<'createDirectConnectGatewayAssociationProposal'>) => Promise<ReturnTypeFrom<'createDirectConnectGatewayAssociationProposal'>>  = async params => {
  // undefined
    return this.client.createDirectConnectGatewayAssociationProposal(params as any).promise();
  }

  createInterconnect: (params: RawParamsFrom<'createInterconnect'>) => Promise<ReturnTypeFrom<'createInterconnect'>>  = async params => {
  // undefined
    return this.client.createInterconnect(params as any).promise();
  }

  createLag: (params: RawParamsFrom<'createLag'>) => Promise<ReturnTypeFrom<'createLag'>>  = async params => {
  // undefined
    return this.client.createLag(params as any).promise();
  }

  createPrivateVirtualInterface: (params: RawParamsFrom<'createPrivateVirtualInterface'>) => Promise<ReturnTypeFrom<'createPrivateVirtualInterface'>>  = async params => {
  // undefined
    return this.client.createPrivateVirtualInterface(params as any).promise();
  }

  createPublicVirtualInterface: (params: RawParamsFrom<'createPublicVirtualInterface'>) => Promise<ReturnTypeFrom<'createPublicVirtualInterface'>>  = async params => {
  // undefined
    return this.client.createPublicVirtualInterface(params as any).promise();
  }

  createTransitVirtualInterface: (params: RawParamsFrom<'createTransitVirtualInterface'>) => Promise<ReturnTypeFrom<'createTransitVirtualInterface'>>  = async params => {
  // undefined
    return this.client.createTransitVirtualInterface(params as any).promise();
  }

  deleteBGPPeer: (params: RawParamsFrom<'deleteBGPPeer'>) => Promise<ReturnTypeFrom<'deleteBGPPeer'>>  = async params => {
  // undefined
    return this.client.deleteBGPPeer(params as any).promise();
  }

  deleteConnection: (params: RawParamsFrom<'deleteConnection'>) => Promise<ReturnTypeFrom<'deleteConnection'>>  = async params => {
  // undefined
    return this.client.deleteConnection(params as any).promise();
  }

  deleteDirectConnectGateway: (params: RawParamsFrom<'deleteDirectConnectGateway'>) => Promise<ReturnTypeFrom<'deleteDirectConnectGateway'>>  = async params => {
  // undefined
    return this.client.deleteDirectConnectGateway(params as any).promise();
  }

  deleteDirectConnectGatewayAssociation: (params: RawParamsFrom<'deleteDirectConnectGatewayAssociation'>) => Promise<ReturnTypeFrom<'deleteDirectConnectGatewayAssociation'>>  = async params => {
  // undefined
    return this.client.deleteDirectConnectGatewayAssociation(params as any).promise();
  }

  deleteDirectConnectGatewayAssociationProposal: (params: RawParamsFrom<'deleteDirectConnectGatewayAssociationProposal'>) => Promise<ReturnTypeFrom<'deleteDirectConnectGatewayAssociationProposal'>>  = async params => {
  // undefined
    return this.client.deleteDirectConnectGatewayAssociationProposal(params as any).promise();
  }

  deleteInterconnect: (params: RawParamsFrom<'deleteInterconnect'>) => Promise<ReturnTypeFrom<'deleteInterconnect'>>  = async params => {
  // undefined
    return this.client.deleteInterconnect(params as any).promise();
  }

  deleteLag: (params: RawParamsFrom<'deleteLag'>) => Promise<ReturnTypeFrom<'deleteLag'>>  = async params => {
  // undefined
    return this.client.deleteLag(params as any).promise();
  }

  deleteVirtualInterface: (params: RawParamsFrom<'deleteVirtualInterface'>) => Promise<ReturnTypeFrom<'deleteVirtualInterface'>>  = async params => {
  // undefined
    return this.client.deleteVirtualInterface(params as any).promise();
  }

  describeConnectionLoa: (params: RawParamsFrom<'describeConnectionLoa'>) => Promise<ReturnTypeFrom<'describeConnectionLoa'>>  = async params => {
  // undefined
    return this.client.describeConnectionLoa(params as any).promise();
  }

  async describeConnections(params: { [K in keyof ParamsFrom<'describeConnections', {}>]: ParamsFrom<'describeConnections', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConnections'>]-?: ReturnTypeFrom<'describeConnections'>[K]}['connections'], undefined>}> {
    // {"resultKey":"connections"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeConnections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.connections ?? []) ? (result.connections ?? []) : [result.connections]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeConnectionsOnInterconnect(params: { [K in keyof ParamsFrom<'describeConnectionsOnInterconnect', {}>]: ParamsFrom<'describeConnectionsOnInterconnect', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConnectionsOnInterconnect'>]-?: ReturnTypeFrom<'describeConnectionsOnInterconnect'>[K]}['connections'], undefined>}> {
    // {"resultKey":"connections"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeConnectionsOnInterconnect({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.connections ?? []) ? (result.connections ?? []) : [result.connections]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeCustomerMetadata: (params: RawParamsFrom<'describeCustomerMetadata'>) => Promise<ReturnTypeFrom<'describeCustomerMetadata'>>  = async params => {
  // undefined
    return this.client.describeCustomerMetadata(params as any).promise();
  }

  describeDirectConnectGatewayAssociationProposals: (params: RawParamsFrom<'describeDirectConnectGatewayAssociationProposals'>) => Promise<ReturnTypeFrom<'describeDirectConnectGatewayAssociationProposals'>>  = async params => {
  // undefined
    return this.client.describeDirectConnectGatewayAssociationProposals(params as any).promise();
  }

  describeDirectConnectGatewayAssociations: (params: RawParamsFrom<'describeDirectConnectGatewayAssociations'>) => Promise<ReturnTypeFrom<'describeDirectConnectGatewayAssociations'>>  = async params => {
  // undefined
    return this.client.describeDirectConnectGatewayAssociations(params as any).promise();
  }

  describeDirectConnectGatewayAttachments: (params: RawParamsFrom<'describeDirectConnectGatewayAttachments'>) => Promise<ReturnTypeFrom<'describeDirectConnectGatewayAttachments'>>  = async params => {
  // undefined
    return this.client.describeDirectConnectGatewayAttachments(params as any).promise();
  }

  describeDirectConnectGateways: (params: RawParamsFrom<'describeDirectConnectGateways'>) => Promise<ReturnTypeFrom<'describeDirectConnectGateways'>>  = async params => {
  // undefined
    return this.client.describeDirectConnectGateways(params as any).promise();
  }

  describeHostedConnections: (params: RawParamsFrom<'describeHostedConnections'>) => Promise<ReturnTypeFrom<'describeHostedConnections'>>  = async params => {
  // undefined
    return this.client.describeHostedConnections(params as any).promise();
  }

  describeInterconnectLoa: (params: RawParamsFrom<'describeInterconnectLoa'>) => Promise<ReturnTypeFrom<'describeInterconnectLoa'>>  = async params => {
  // undefined
    return this.client.describeInterconnectLoa(params as any).promise();
  }

  async describeInterconnects(params: { [K in keyof ParamsFrom<'describeInterconnects', {}>]: ParamsFrom<'describeInterconnects', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInterconnects'>]-?: ReturnTypeFrom<'describeInterconnects'>[K]}['interconnects'], undefined>}> {
    // {"resultKey":"interconnects"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeInterconnects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.interconnects ?? []) ? (result.interconnects ?? []) : [result.interconnects]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeLags: (params: RawParamsFrom<'describeLags'>) => Promise<ReturnTypeFrom<'describeLags'>>  = async params => {
  // undefined
    return this.client.describeLags(params as any).promise();
  }

  describeLoa: (params: RawParamsFrom<'describeLoa'>) => Promise<ReturnTypeFrom<'describeLoa'>>  = async params => {
  // undefined
    return this.client.describeLoa(params as any).promise();
  }

  async describeLocations(params: { [K in keyof ParamsFrom<'describeLocations', {}>]: ParamsFrom<'describeLocations', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLocations'>]-?: ReturnTypeFrom<'describeLocations'>[K]}['locations'], undefined>}> {
    // {"resultKey":"locations"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeLocations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.locations ?? []) ? (result.locations ?? []) : [result.locations]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeRouterConfiguration: (params: RawParamsFrom<'describeRouterConfiguration'>) => Promise<ReturnTypeFrom<'describeRouterConfiguration'>>  = async params => {
  // undefined
    return this.client.describeRouterConfiguration(params as any).promise();
  }

  describeTags: (params: RawParamsFrom<'describeTags'>) => Promise<ReturnTypeFrom<'describeTags'>>  = async params => {
  // undefined
    return this.client.describeTags(params as any).promise();
  }

  async describeVirtualGateways(params: { [K in keyof ParamsFrom<'describeVirtualGateways', {}>]: ParamsFrom<'describeVirtualGateways', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVirtualGateways'>]-?: ReturnTypeFrom<'describeVirtualGateways'>[K]}['virtualGateways'], undefined>}> {
    // {"resultKey":"virtualGateways"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeVirtualGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.virtualGateways ?? []) ? (result.virtualGateways ?? []) : [result.virtualGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeVirtualInterfaces(params: { [K in keyof ParamsFrom<'describeVirtualInterfaces', {}>]: ParamsFrom<'describeVirtualInterfaces', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVirtualInterfaces'>]-?: ReturnTypeFrom<'describeVirtualInterfaces'>[K]}['virtualInterfaces'], undefined>}> {
    // {"resultKey":"virtualInterfaces"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeVirtualInterfaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.virtualInterfaces ?? []) ? (result.virtualInterfaces ?? []) : [result.virtualInterfaces]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  disassociateConnectionFromLag: (params: RawParamsFrom<'disassociateConnectionFromLag'>) => Promise<ReturnTypeFrom<'disassociateConnectionFromLag'>>  = async params => {
  // undefined
    return this.client.disassociateConnectionFromLag(params as any).promise();
  }

  disassociateMacSecKey: (params: RawParamsFrom<'disassociateMacSecKey'>) => Promise<ReturnTypeFrom<'disassociateMacSecKey'>>  = async params => {
  // undefined
    return this.client.disassociateMacSecKey(params as any).promise();
  }

  listVirtualInterfaceTestHistory: (params: RawParamsFrom<'listVirtualInterfaceTestHistory'>) => Promise<ReturnTypeFrom<'listVirtualInterfaceTestHistory'>>  = async params => {
  // undefined
    return this.client.listVirtualInterfaceTestHistory(params as any).promise();
  }

  startBgpFailoverTest: (params: RawParamsFrom<'startBgpFailoverTest'>) => Promise<ReturnTypeFrom<'startBgpFailoverTest'>>  = async params => {
  // undefined
    return this.client.startBgpFailoverTest(params as any).promise();
  }

  stopBgpFailoverTest: (params: RawParamsFrom<'stopBgpFailoverTest'>) => Promise<ReturnTypeFrom<'stopBgpFailoverTest'>>  = async params => {
  // undefined
    return this.client.stopBgpFailoverTest(params as any).promise();
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

  updateDirectConnectGateway: (params: RawParamsFrom<'updateDirectConnectGateway'>) => Promise<ReturnTypeFrom<'updateDirectConnectGateway'>>  = async params => {
  // undefined
    return this.client.updateDirectConnectGateway(params as any).promise();
  }

  updateDirectConnectGatewayAssociation: (params: RawParamsFrom<'updateDirectConnectGatewayAssociation'>) => Promise<ReturnTypeFrom<'updateDirectConnectGatewayAssociation'>>  = async params => {
  // undefined
    return this.client.updateDirectConnectGatewayAssociation(params as any).promise();
  }

  updateLag: (params: RawParamsFrom<'updateLag'>) => Promise<ReturnTypeFrom<'updateLag'>>  = async params => {
  // undefined
    return this.client.updateLag(params as any).promise();
  }

  updateVirtualInterfaceAttributes: (params: RawParamsFrom<'updateVirtualInterfaceAttributes'>) => Promise<ReturnTypeFrom<'updateVirtualInterfaceAttributes'>>  = async params => {
  // undefined
    return this.client.updateVirtualInterfaceAttributes(params as any).promise();
  }
  
  static fromClient(client: AWSDirectConnect): DirectConnect {
    return new DirectConnect(client) as any;
  }
  
  static client(options?: AWSDirectConnect.Types.ClientConfiguration): DirectConnect {
    return new DirectConnect(new AWSDirectConnect(options)) as any;
  }
}  
