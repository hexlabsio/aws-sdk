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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'networkmanager';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["describeGlobalNetworks","listAttachments","listConnectPeers","listCoreNetworks","listPeerings"];
    
  acceptAttachment: FunctionTypeFrom<'acceptAttachment'>;

  associateConnectPeer: FunctionTypeFrom<'associateConnectPeer'>;

  associateCustomerGateway: FunctionTypeFrom<'associateCustomerGateway'>;

  associateLink: FunctionTypeFrom<'associateLink'>;

  associateTransitGatewayConnectPeer: FunctionTypeFrom<'associateTransitGatewayConnectPeer'>;

  createConnectAttachment: FunctionTypeFrom<'createConnectAttachment'>;

  createConnectPeer: FunctionTypeFrom<'createConnectPeer'>;

  createConnection: FunctionTypeFrom<'createConnection'>;

  createCoreNetwork: FunctionTypeFrom<'createCoreNetwork'>;

  createDevice: FunctionTypeFrom<'createDevice'>;

  createGlobalNetwork: FunctionTypeFrom<'createGlobalNetwork'>;

  createLink: FunctionTypeFrom<'createLink'>;

  createSite: FunctionTypeFrom<'createSite'>;

  createSiteToSiteVpnAttachment: FunctionTypeFrom<'createSiteToSiteVpnAttachment'>;

  createTransitGatewayPeering: FunctionTypeFrom<'createTransitGatewayPeering'>;

  createTransitGatewayRouteTableAttachment: FunctionTypeFrom<'createTransitGatewayRouteTableAttachment'>;

  createVpcAttachment: FunctionTypeFrom<'createVpcAttachment'>;

  deleteAttachment: FunctionTypeFrom<'deleteAttachment'>;

  deleteConnectPeer: FunctionTypeFrom<'deleteConnectPeer'>;

  deleteConnection: FunctionTypeFrom<'deleteConnection'>;

  deleteCoreNetwork: FunctionTypeFrom<'deleteCoreNetwork'>;

  deleteCoreNetworkPolicyVersion: FunctionTypeFrom<'deleteCoreNetworkPolicyVersion'>;

  deleteDevice: FunctionTypeFrom<'deleteDevice'>;

  deleteGlobalNetwork: FunctionTypeFrom<'deleteGlobalNetwork'>;

  deleteLink: FunctionTypeFrom<'deleteLink'>;

  deletePeering: FunctionTypeFrom<'deletePeering'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteSite: FunctionTypeFrom<'deleteSite'>;

  deregisterTransitGateway: FunctionTypeFrom<'deregisterTransitGateway'>;

  describeGlobalNetworks(params: { [K in keyof Omit<ParamsFrom<'describeGlobalNetworks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeGlobalNetworks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGlobalNetworks'>]-?: ReturnTypeFrom<'describeGlobalNetworks'>[K]}['GlobalNetworks'] }>
  describeGlobalNetworks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGlobalNetworks'>]-?: ReturnTypeFrom<'describeGlobalNetworks'>[K]}['GlobalNetworks'] }>;

  disassociateConnectPeer: FunctionTypeFrom<'disassociateConnectPeer'>;

  disassociateCustomerGateway: FunctionTypeFrom<'disassociateCustomerGateway'>;

  disassociateLink: FunctionTypeFrom<'disassociateLink'>;

  disassociateTransitGatewayConnectPeer: FunctionTypeFrom<'disassociateTransitGatewayConnectPeer'>;

  executeCoreNetworkChangeSet: FunctionTypeFrom<'executeCoreNetworkChangeSet'>;

  getConnectAttachment: FunctionTypeFrom<'getConnectAttachment'>;

  getConnectPeer: FunctionTypeFrom<'getConnectPeer'>;

  getConnectPeerAssociations(params: { [K in keyof Omit<ParamsFrom<'getConnectPeerAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getConnectPeerAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getConnectPeerAssociations'>]-?: ReturnTypeFrom<'getConnectPeerAssociations'>[K]}['ConnectPeerAssociations'] }>
  ;

  getConnections(params: { [K in keyof Omit<ParamsFrom<'getConnections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getConnections'>]-?: ReturnTypeFrom<'getConnections'>[K]}['Connections'] }>
  ;

  getCoreNetwork: FunctionTypeFrom<'getCoreNetwork'>;

  getCoreNetworkChangeEvents(params: { [K in keyof Omit<ParamsFrom<'getCoreNetworkChangeEvents', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getCoreNetworkChangeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getCoreNetworkChangeEvents'>]-?: ReturnTypeFrom<'getCoreNetworkChangeEvents'>[K]}['CoreNetworkChangeEvents'] }>
  ;

  getCoreNetworkChangeSet(params: { [K in keyof Omit<ParamsFrom<'getCoreNetworkChangeSet', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getCoreNetworkChangeSet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getCoreNetworkChangeSet'>]-?: ReturnTypeFrom<'getCoreNetworkChangeSet'>[K]}['CoreNetworkChanges'] }>
  ;

  getCoreNetworkPolicy: FunctionTypeFrom<'getCoreNetworkPolicy'>;

  getCustomerGatewayAssociations(params: { [K in keyof Omit<ParamsFrom<'getCustomerGatewayAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getCustomerGatewayAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getCustomerGatewayAssociations'>]-?: ReturnTypeFrom<'getCustomerGatewayAssociations'>[K]}['CustomerGatewayAssociations'] }>
  ;

  getDevices(params: { [K in keyof Omit<ParamsFrom<'getDevices', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getDevices'>]-?: ReturnTypeFrom<'getDevices'>[K]}['Devices'] }>
  ;

  getLinkAssociations(params: { [K in keyof Omit<ParamsFrom<'getLinkAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getLinkAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getLinkAssociations'>]-?: ReturnTypeFrom<'getLinkAssociations'>[K]}['LinkAssociations'] }>
  ;

  getLinks(params: { [K in keyof Omit<ParamsFrom<'getLinks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getLinks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getLinks'>]-?: ReturnTypeFrom<'getLinks'>[K]}['Links'] }>
  ;

  getNetworkResourceCounts(params: { [K in keyof Omit<ParamsFrom<'getNetworkResourceCounts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getNetworkResourceCounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getNetworkResourceCounts'>]-?: ReturnTypeFrom<'getNetworkResourceCounts'>[K]}['NetworkResourceCounts'] }>
  ;

  getNetworkResourceRelationships(params: { [K in keyof Omit<ParamsFrom<'getNetworkResourceRelationships', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getNetworkResourceRelationships', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getNetworkResourceRelationships'>]-?: ReturnTypeFrom<'getNetworkResourceRelationships'>[K]}['Relationships'] }>
  ;

  getNetworkResources(params: { [K in keyof Omit<ParamsFrom<'getNetworkResources', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getNetworkResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getNetworkResources'>]-?: ReturnTypeFrom<'getNetworkResources'>[K]}['NetworkResources'] }>
  ;

  getNetworkRoutes: FunctionTypeFrom<'getNetworkRoutes'>;

  getNetworkTelemetry(params: { [K in keyof Omit<ParamsFrom<'getNetworkTelemetry', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getNetworkTelemetry', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getNetworkTelemetry'>]-?: ReturnTypeFrom<'getNetworkTelemetry'>[K]}['NetworkTelemetry'] }>
  ;

  getResourcePolicy: FunctionTypeFrom<'getResourcePolicy'>;

  getRouteAnalysis: FunctionTypeFrom<'getRouteAnalysis'>;

  getSiteToSiteVpnAttachment: FunctionTypeFrom<'getSiteToSiteVpnAttachment'>;

  getSites(params: { [K in keyof Omit<ParamsFrom<'getSites', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getSites', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSites'>]-?: ReturnTypeFrom<'getSites'>[K]}['Sites'] }>
  ;

  getTransitGatewayConnectPeerAssociations(params: { [K in keyof Omit<ParamsFrom<'getTransitGatewayConnectPeerAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getTransitGatewayConnectPeerAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayConnectPeerAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayConnectPeerAssociations'>[K]}['TransitGatewayConnectPeerAssociations'] }>
  ;

  getTransitGatewayPeering: FunctionTypeFrom<'getTransitGatewayPeering'>;

  getTransitGatewayRegistrations(params: { [K in keyof Omit<ParamsFrom<'getTransitGatewayRegistrations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getTransitGatewayRegistrations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayRegistrations'>]-?: ReturnTypeFrom<'getTransitGatewayRegistrations'>[K]}['TransitGatewayRegistrations'] }>
  ;

  getTransitGatewayRouteTableAttachment: FunctionTypeFrom<'getTransitGatewayRouteTableAttachment'>;

  getVpcAttachment: FunctionTypeFrom<'getVpcAttachment'>;

  listAttachments(params: { [K in keyof Omit<ParamsFrom<'listAttachments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAttachments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttachments'>]-?: ReturnTypeFrom<'listAttachments'>[K]}['Attachments'] }>
  listAttachments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttachments'>]-?: ReturnTypeFrom<'listAttachments'>[K]}['Attachments'] }>;

  listConnectPeers(params: { [K in keyof Omit<ParamsFrom<'listConnectPeers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listConnectPeers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConnectPeers'>]-?: ReturnTypeFrom<'listConnectPeers'>[K]}['ConnectPeers'] }>
  listConnectPeers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConnectPeers'>]-?: ReturnTypeFrom<'listConnectPeers'>[K]}['ConnectPeers'] }>;

  listCoreNetworkPolicyVersions(params: { [K in keyof Omit<ParamsFrom<'listCoreNetworkPolicyVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCoreNetworkPolicyVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoreNetworkPolicyVersions'>]-?: ReturnTypeFrom<'listCoreNetworkPolicyVersions'>[K]}['CoreNetworkPolicyVersions'] }>
  ;

  listCoreNetworks(params: { [K in keyof Omit<ParamsFrom<'listCoreNetworks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCoreNetworks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoreNetworks'>]-?: ReturnTypeFrom<'listCoreNetworks'>[K]}['CoreNetworks'] }>
  listCoreNetworks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCoreNetworks'>]-?: ReturnTypeFrom<'listCoreNetworks'>[K]}['CoreNetworks'] }>;

  listOrganizationServiceAccessStatus: FunctionTypeFrom<'listOrganizationServiceAccessStatus'>;

  listPeerings(params: { [K in keyof Omit<ParamsFrom<'listPeerings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPeerings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPeerings'>]-?: ReturnTypeFrom<'listPeerings'>[K]}['Peerings'] }>
  listPeerings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPeerings'>]-?: ReturnTypeFrom<'listPeerings'>[K]}['Peerings'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putCoreNetworkPolicy: FunctionTypeFrom<'putCoreNetworkPolicy'>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  registerTransitGateway: FunctionTypeFrom<'registerTransitGateway'>;

  rejectAttachment: FunctionTypeFrom<'rejectAttachment'>;

  restoreCoreNetworkPolicyVersion: FunctionTypeFrom<'restoreCoreNetworkPolicyVersion'>;

  startOrganizationServiceAccessUpdate: FunctionTypeFrom<'startOrganizationServiceAccessUpdate'>;

  startRouteAnalysis: FunctionTypeFrom<'startRouteAnalysis'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConnection: FunctionTypeFrom<'updateConnection'>;

  updateCoreNetwork: FunctionTypeFrom<'updateCoreNetwork'>;

  updateDevice: FunctionTypeFrom<'updateDevice'>;

  updateGlobalNetwork: FunctionTypeFrom<'updateGlobalNetwork'>;

  updateLink: FunctionTypeFrom<'updateLink'>;

  updateNetworkResourceMetadata: FunctionTypeFrom<'updateNetworkResourceMetadata'>;

  updateSite: FunctionTypeFrom<'updateSite'>;

  updateVpcAttachment: FunctionTypeFrom<'updateVpcAttachment'>
}
 
export class NetworkManager implements ClientType {
  private constructor(private readonly client: AWSNetworkManager) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'networkmanager';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["describeGlobalNetworks","listAttachments","listConnectPeers","listCoreNetworks","listPeerings"] as const;
  
  async acceptAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.acceptAttachment(...args).promise()
  }

  async associateConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.associateConnectPeer(...args).promise()
  }

  async associateCustomerGateway(...args: any): Promise<any> {
  // undefined
    return this.client.associateCustomerGateway(...args).promise()
  }

  async associateLink(...args: any): Promise<any> {
  // undefined
    return this.client.associateLink(...args).promise()
  }

  async associateTransitGatewayConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.associateTransitGatewayConnectPeer(...args).promise()
  }

  async createConnectAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.createConnectAttachment(...args).promise()
  }

  async createConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.createConnectPeer(...args).promise()
  }

  async createConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createConnection(...args).promise()
  }

  async createCoreNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.createCoreNetwork(...args).promise()
  }

  async createDevice(...args: any): Promise<any> {
  // undefined
    return this.client.createDevice(...args).promise()
  }

  async createGlobalNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.createGlobalNetwork(...args).promise()
  }

  async createLink(...args: any): Promise<any> {
  // undefined
    return this.client.createLink(...args).promise()
  }

  async createSite(...args: any): Promise<any> {
  // undefined
    return this.client.createSite(...args).promise()
  }

  async createSiteToSiteVpnAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.createSiteToSiteVpnAttachment(...args).promise()
  }

  async createTransitGatewayPeering(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayPeering(...args).promise()
  }

  async createTransitGatewayRouteTableAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayRouteTableAttachment(...args).promise()
  }

  async createVpcAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcAttachment(...args).promise()
  }

  async deleteAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAttachment(...args).promise()
  }

  async deleteConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnectPeer(...args).promise()
  }

  async deleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnection(...args).promise()
  }

  async deleteCoreNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCoreNetwork(...args).promise()
  }

  async deleteCoreNetworkPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCoreNetworkPolicyVersion(...args).promise()
  }

  async deleteDevice(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDevice(...args).promise()
  }

  async deleteGlobalNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGlobalNetwork(...args).promise()
  }

  async deleteLink(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLink(...args).promise()
  }

  async deletePeering(...args: any): Promise<any> {
  // undefined
    return this.client.deletePeering(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteSite(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSite(...args).promise()
  }

  async deregisterTransitGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterTransitGateway(...args).promise()
  }

  async describeGlobalNetworks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GlobalNetworks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeGlobalNetworks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GlobalNetworks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disassociateConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateConnectPeer(...args).promise()
  }

  async disassociateCustomerGateway(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateCustomerGateway(...args).promise()
  }

  async disassociateLink(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateLink(...args).promise()
  }

  async disassociateTransitGatewayConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTransitGatewayConnectPeer(...args).promise()
  }

  async executeCoreNetworkChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.executeCoreNetworkChangeSet(...args).promise()
  }

  async getConnectAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.getConnectAttachment(...args).promise()
  }

  async getConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.getConnectPeer(...args).promise()
  }

  async getConnectPeerAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConnectPeerAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getConnectPeerAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConnectPeerAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getConnections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Connections"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getConnections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Connections ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getCoreNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.getCoreNetwork(...args).promise()
  }

  async getCoreNetworkChangeEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoreNetworkChangeEvents"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getCoreNetworkChangeEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CoreNetworkChangeEvents ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getCoreNetworkChangeSet(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoreNetworkChanges"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getCoreNetworkChangeSet(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CoreNetworkChanges ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getCoreNetworkPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getCoreNetworkPolicy(...args).promise()
  }

  async getCustomerGatewayAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CustomerGatewayAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getCustomerGatewayAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CustomerGatewayAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getDevices(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Devices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Devices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getLinkAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LinkAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getLinkAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LinkAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getLinks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Links"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getLinks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Links ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNetworkResourceCounts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkResourceCounts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getNetworkResourceCounts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkResourceCounts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNetworkResourceRelationships(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Relationships"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getNetworkResourceRelationships(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Relationships ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNetworkResources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getNetworkResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNetworkRoutes(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkRoutes(...args).promise()
  }

  async getNetworkTelemetry(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkTelemetry"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getNetworkTelemetry(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkTelemetry ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResourcePolicy(...args).promise()
  }

  async getRouteAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.getRouteAnalysis(...args).promise()
  }

  async getSiteToSiteVpnAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.getSiteToSiteVpnAttachment(...args).promise()
  }

  async getSites(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Sites"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getSites(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Sites ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayConnectPeerAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayConnectPeerAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayConnectPeerAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayConnectPeerAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayPeering(...args: any): Promise<any> {
  // undefined
    return this.client.getTransitGatewayPeering(...args).promise()
  }

  async getTransitGatewayRegistrations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayRegistrations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayRegistrations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayRegistrations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayRouteTableAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.getTransitGatewayRouteTableAttachment(...args).promise()
  }

  async getVpcAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.getVpcAttachment(...args).promise()
  }

  async listAttachments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Attachments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAttachments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Attachments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listConnectPeers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConnectPeers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listConnectPeers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConnectPeers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoreNetworkPolicyVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoreNetworkPolicyVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCoreNetworkPolicyVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CoreNetworkPolicyVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCoreNetworks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoreNetworks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCoreNetworks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CoreNetworks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOrganizationServiceAccessStatus(...args: any): Promise<any> {
  // undefined
    return this.client.listOrganizationServiceAccessStatus(...args).promise()
  }

  async listPeerings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Peerings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPeerings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Peerings ?? [];
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

  async putCoreNetworkPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putCoreNetworkPolicy(...args).promise()
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async registerTransitGateway(...args: any): Promise<any> {
  // undefined
    return this.client.registerTransitGateway(...args).promise()
  }

  async rejectAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.rejectAttachment(...args).promise()
  }

  async restoreCoreNetworkPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.restoreCoreNetworkPolicyVersion(...args).promise()
  }

  async startOrganizationServiceAccessUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.startOrganizationServiceAccessUpdate(...args).promise()
  }

  async startRouteAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.startRouteAnalysis(...args).promise()
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

  async updateCoreNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.updateCoreNetwork(...args).promise()
  }

  async updateDevice(...args: any): Promise<any> {
  // undefined
    return this.client.updateDevice(...args).promise()
  }

  async updateGlobalNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.updateGlobalNetwork(...args).promise()
  }

  async updateLink(...args: any): Promise<any> {
  // undefined
    return this.client.updateLink(...args).promise()
  }

  async updateNetworkResourceMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateNetworkResourceMetadata(...args).promise()
  }

  async updateSite(...args: any): Promise<any> {
  // undefined
    return this.client.updateSite(...args).promise()
  }

  async updateVpcAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.updateVpcAttachment(...args).promise()
  }
  
  static fromClient(client: AWSNetworkManager): ClientType {
    return new NetworkManager(client) as any;
  }
  
  static client(options?: AWSNetworkManager.Types.ClientConfiguration): ClientType {
    return new NetworkManager(new AWSNetworkManager(options)) as any;
  }
}  
