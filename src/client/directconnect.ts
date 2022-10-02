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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'directconnect';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["describeConnections","describeInterconnects","describeLocations","describeVirtualGateways","describeVirtualInterfaces"];
    
  acceptDirectConnectGatewayAssociationProposal: FunctionTypeFrom<'acceptDirectConnectGatewayAssociationProposal'>;

  allocateConnectionOnInterconnect: FunctionTypeFrom<'allocateConnectionOnInterconnect'>;

  allocateHostedConnection: FunctionTypeFrom<'allocateHostedConnection'>;

  allocatePrivateVirtualInterface: FunctionTypeFrom<'allocatePrivateVirtualInterface'>;

  allocatePublicVirtualInterface: FunctionTypeFrom<'allocatePublicVirtualInterface'>;

  allocateTransitVirtualInterface: FunctionTypeFrom<'allocateTransitVirtualInterface'>;

  associateConnectionWithLag: FunctionTypeFrom<'associateConnectionWithLag'>;

  associateHostedConnection: FunctionTypeFrom<'associateHostedConnection'>;

  associateMacSecKey: FunctionTypeFrom<'associateMacSecKey'>;

  associateVirtualInterface: FunctionTypeFrom<'associateVirtualInterface'>;

  confirmConnection: FunctionTypeFrom<'confirmConnection'>;

  confirmCustomerAgreement: FunctionTypeFrom<'confirmCustomerAgreement'>;

  confirmPrivateVirtualInterface: FunctionTypeFrom<'confirmPrivateVirtualInterface'>;

  confirmPublicVirtualInterface: FunctionTypeFrom<'confirmPublicVirtualInterface'>;

  confirmTransitVirtualInterface: FunctionTypeFrom<'confirmTransitVirtualInterface'>;

  createBGPPeer: FunctionTypeFrom<'createBGPPeer'>;

  createConnection: FunctionTypeFrom<'createConnection'>;

  createDirectConnectGateway: FunctionTypeFrom<'createDirectConnectGateway'>;

  createDirectConnectGatewayAssociation: FunctionTypeFrom<'createDirectConnectGatewayAssociation'>;

  createDirectConnectGatewayAssociationProposal: FunctionTypeFrom<'createDirectConnectGatewayAssociationProposal'>;

  createInterconnect: FunctionTypeFrom<'createInterconnect'>;

  createLag: FunctionTypeFrom<'createLag'>;

  createPrivateVirtualInterface: FunctionTypeFrom<'createPrivateVirtualInterface'>;

  createPublicVirtualInterface: FunctionTypeFrom<'createPublicVirtualInterface'>;

  createTransitVirtualInterface: FunctionTypeFrom<'createTransitVirtualInterface'>;

  deleteBGPPeer: FunctionTypeFrom<'deleteBGPPeer'>;

  deleteConnection: FunctionTypeFrom<'deleteConnection'>;

  deleteDirectConnectGateway: FunctionTypeFrom<'deleteDirectConnectGateway'>;

  deleteDirectConnectGatewayAssociation: FunctionTypeFrom<'deleteDirectConnectGatewayAssociation'>;

  deleteDirectConnectGatewayAssociationProposal: FunctionTypeFrom<'deleteDirectConnectGatewayAssociationProposal'>;

  deleteInterconnect: FunctionTypeFrom<'deleteInterconnect'>;

  deleteLag: FunctionTypeFrom<'deleteLag'>;

  deleteVirtualInterface: FunctionTypeFrom<'deleteVirtualInterface'>;

  describeConnectionLoa: FunctionTypeFrom<'describeConnectionLoa'>;

  describeConnections: FunctionTypeFrom<'describeConnections'>;

  describeConnectionsOnInterconnect: FunctionTypeFrom<'describeConnectionsOnInterconnect'>;

  describeCustomerMetadata: FunctionTypeFrom<'describeCustomerMetadata'>;

  describeDirectConnectGatewayAssociationProposals: FunctionTypeFrom<'describeDirectConnectGatewayAssociationProposals'>;

  describeDirectConnectGatewayAssociations: FunctionTypeFrom<'describeDirectConnectGatewayAssociations'>;

  describeDirectConnectGatewayAttachments: FunctionTypeFrom<'describeDirectConnectGatewayAttachments'>;

  describeDirectConnectGateways: FunctionTypeFrom<'describeDirectConnectGateways'>;

  describeHostedConnections: FunctionTypeFrom<'describeHostedConnections'>;

  describeInterconnectLoa: FunctionTypeFrom<'describeInterconnectLoa'>;

  describeInterconnects: FunctionTypeFrom<'describeInterconnects'>;

  describeLags: FunctionTypeFrom<'describeLags'>;

  describeLoa: FunctionTypeFrom<'describeLoa'>;

  describeLocations: FunctionTypeFrom<'describeLocations'>;

  describeRouterConfiguration: FunctionTypeFrom<'describeRouterConfiguration'>;

  describeTags: FunctionTypeFrom<'describeTags'>;

  describeVirtualGateways: FunctionTypeFrom<'describeVirtualGateways'>;

  describeVirtualInterfaces: FunctionTypeFrom<'describeVirtualInterfaces'>;

  disassociateConnectionFromLag: FunctionTypeFrom<'disassociateConnectionFromLag'>;

  disassociateMacSecKey: FunctionTypeFrom<'disassociateMacSecKey'>;

  listVirtualInterfaceTestHistory: FunctionTypeFrom<'listVirtualInterfaceTestHistory'>;

  startBgpFailoverTest: FunctionTypeFrom<'startBgpFailoverTest'>;

  stopBgpFailoverTest: FunctionTypeFrom<'stopBgpFailoverTest'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConnection: FunctionTypeFrom<'updateConnection'>;

  updateDirectConnectGateway: FunctionTypeFrom<'updateDirectConnectGateway'>;

  updateDirectConnectGatewayAssociation: FunctionTypeFrom<'updateDirectConnectGatewayAssociation'>;

  updateLag: FunctionTypeFrom<'updateLag'>;

  updateVirtualInterfaceAttributes: FunctionTypeFrom<'updateVirtualInterfaceAttributes'>
}
 
export class DirectConnect implements ClientType {
  private constructor(private readonly client: AWSDirectConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'directconnect';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["describeConnections","describeInterconnects","describeLocations","describeVirtualGateways","describeVirtualInterfaces"] as const;
  
  async acceptDirectConnectGatewayAssociationProposal(...args: any): Promise<any> {
  // undefined
    return this.client.acceptDirectConnectGatewayAssociationProposal(...args).promise()
  }

  async allocateConnectionOnInterconnect(...args: any): Promise<any> {
  // undefined
    return this.client.allocateConnectionOnInterconnect(...args).promise()
  }

  async allocateHostedConnection(...args: any): Promise<any> {
  // undefined
    return this.client.allocateHostedConnection(...args).promise()
  }

  async allocatePrivateVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.allocatePrivateVirtualInterface(...args).promise()
  }

  async allocatePublicVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.allocatePublicVirtualInterface(...args).promise()
  }

  async allocateTransitVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.allocateTransitVirtualInterface(...args).promise()
  }

  async associateConnectionWithLag(...args: any): Promise<any> {
  // undefined
    return this.client.associateConnectionWithLag(...args).promise()
  }

  async associateHostedConnection(...args: any): Promise<any> {
  // undefined
    return this.client.associateHostedConnection(...args).promise()
  }

  async associateMacSecKey(...args: any): Promise<any> {
  // undefined
    return this.client.associateMacSecKey(...args).promise()
  }

  async associateVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.associateVirtualInterface(...args).promise()
  }

  async confirmConnection(...args: any): Promise<any> {
  // undefined
    return this.client.confirmConnection(...args).promise()
  }

  async confirmCustomerAgreement(...args: any): Promise<any> {
  // undefined
    return this.client.confirmCustomerAgreement(...args).promise()
  }

  async confirmPrivateVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.confirmPrivateVirtualInterface(...args).promise()
  }

  async confirmPublicVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.confirmPublicVirtualInterface(...args).promise()
  }

  async confirmTransitVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.confirmTransitVirtualInterface(...args).promise()
  }

  async createBGPPeer(...args: any): Promise<any> {
  // undefined
    return this.client.createBGPPeer(...args).promise()
  }

  async createConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createConnection(...args).promise()
  }

  async createDirectConnectGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createDirectConnectGateway(...args).promise()
  }

  async createDirectConnectGatewayAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createDirectConnectGatewayAssociation(...args).promise()
  }

  async createDirectConnectGatewayAssociationProposal(...args: any): Promise<any> {
  // undefined
    return this.client.createDirectConnectGatewayAssociationProposal(...args).promise()
  }

  async createInterconnect(...args: any): Promise<any> {
  // undefined
    return this.client.createInterconnect(...args).promise()
  }

  async createLag(...args: any): Promise<any> {
  // undefined
    return this.client.createLag(...args).promise()
  }

  async createPrivateVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.createPrivateVirtualInterface(...args).promise()
  }

  async createPublicVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.createPublicVirtualInterface(...args).promise()
  }

  async createTransitVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitVirtualInterface(...args).promise()
  }

  async deleteBGPPeer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBGPPeer(...args).promise()
  }

  async deleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnection(...args).promise()
  }

  async deleteDirectConnectGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDirectConnectGateway(...args).promise()
  }

  async deleteDirectConnectGatewayAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDirectConnectGatewayAssociation(...args).promise()
  }

  async deleteDirectConnectGatewayAssociationProposal(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDirectConnectGatewayAssociationProposal(...args).promise()
  }

  async deleteInterconnect(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInterconnect(...args).promise()
  }

  async deleteLag(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLag(...args).promise()
  }

  async deleteVirtualInterface(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVirtualInterface(...args).promise()
  }

  async describeConnectionLoa(...args: any): Promise<any> {
  // undefined
    return this.client.describeConnectionLoa(...args).promise()
  }

  async describeConnections(...args: any): Promise<any> {
  // {"resultKey":"connections"}
    return this.client.describeConnections(...args).promise()
  }

  async describeConnectionsOnInterconnect(...args: any): Promise<any> {
  // {"resultKey":"connections"}
    return this.client.describeConnectionsOnInterconnect(...args).promise()
  }

  async describeCustomerMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.describeCustomerMetadata(...args).promise()
  }

  async describeDirectConnectGatewayAssociationProposals(...args: any): Promise<any> {
  // undefined
    return this.client.describeDirectConnectGatewayAssociationProposals(...args).promise()
  }

  async describeDirectConnectGatewayAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.describeDirectConnectGatewayAssociations(...args).promise()
  }

  async describeDirectConnectGatewayAttachments(...args: any): Promise<any> {
  // undefined
    return this.client.describeDirectConnectGatewayAttachments(...args).promise()
  }

  async describeDirectConnectGateways(...args: any): Promise<any> {
  // undefined
    return this.client.describeDirectConnectGateways(...args).promise()
  }

  async describeHostedConnections(...args: any): Promise<any> {
  // undefined
    return this.client.describeHostedConnections(...args).promise()
  }

  async describeInterconnectLoa(...args: any): Promise<any> {
  // undefined
    return this.client.describeInterconnectLoa(...args).promise()
  }

  async describeInterconnects(...args: any): Promise<any> {
  // {"resultKey":"interconnects"}
    return this.client.describeInterconnects(...args).promise()
  }

  async describeLags(...args: any): Promise<any> {
  // undefined
    return this.client.describeLags(...args).promise()
  }

  async describeLoa(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoa(...args).promise()
  }

  async describeLocations(...args: any): Promise<any> {
  // {"resultKey":"locations"}
    return this.client.describeLocations(...args).promise()
  }

  async describeRouterConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeRouterConfiguration(...args).promise()
  }

  async describeTags(...args: any): Promise<any> {
  // undefined
    return this.client.describeTags(...args).promise()
  }

  async describeVirtualGateways(...args: any): Promise<any> {
  // {"resultKey":"virtualGateways"}
    return this.client.describeVirtualGateways(...args).promise()
  }

  async describeVirtualInterfaces(...args: any): Promise<any> {
  // {"resultKey":"virtualInterfaces"}
    return this.client.describeVirtualInterfaces(...args).promise()
  }

  async disassociateConnectionFromLag(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateConnectionFromLag(...args).promise()
  }

  async disassociateMacSecKey(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateMacSecKey(...args).promise()
  }

  async listVirtualInterfaceTestHistory(...args: any): Promise<any> {
  // undefined
    return this.client.listVirtualInterfaceTestHistory(...args).promise()
  }

  async startBgpFailoverTest(...args: any): Promise<any> {
  // undefined
    return this.client.startBgpFailoverTest(...args).promise()
  }

  async stopBgpFailoverTest(...args: any): Promise<any> {
  // undefined
    return this.client.stopBgpFailoverTest(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateConnection(...args: any): Promise<any> {
  // undefined
    return this.client.updateConnection(...args).promise()
  }

  async updateDirectConnectGateway(...args: any): Promise<any> {
  // undefined
    return this.client.updateDirectConnectGateway(...args).promise()
  }

  async updateDirectConnectGatewayAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.updateDirectConnectGatewayAssociation(...args).promise()
  }

  async updateLag(...args: any): Promise<any> {
  // undefined
    return this.client.updateLag(...args).promise()
  }

  async updateVirtualInterfaceAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateVirtualInterfaceAttributes(...args).promise()
  }
  
  static fromClient(client: AWSDirectConnect): ClientType {
    return new DirectConnect(client) as any;
  }
  
  static client(options?: AWSDirectConnect.Types.ClientConfiguration): ClientType {
    return new DirectConnect(new AWSDirectConnect(options)) as any;
  }
}  
