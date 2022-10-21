import { Request, EC2 as AWSEC2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEC2> = AWSEC2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEC2> = AWSEC2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEC2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEC2, Extras> = AWSEC2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEC2> = AWSEC2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EC2 {
  private constructor(private readonly client: AWSEC2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ec2' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = ["describeAccountAttributes","describeAddresses","describeAddressesAttribute","describeAvailabilityZones","describeBundleTasks","describeCapacityReservationFleets","describeCapacityReservations","describeCarrierGateways","describeClassicLinkInstances","describeClientVpnEndpoints","describeCoipPools","describeConversionTasks","describeCustomerGateways","describeDhcpOptions","describeEgressOnlyInternetGateways","describeExportImageTasks","describeExportTasks","describeFastLaunchImages","describeFastSnapshotRestores","describeFleets","describeFlowLogs","describeFpgaImages","describeHostReservationOfferings","describeHostReservations","describeHosts","describeIamInstanceProfileAssociations","describeImages","describeImportImageTasks","describeImportSnapshotTasks","describeInstanceCreditSpecifications","describeInstanceEventWindows","describeInstanceStatus","describeInstanceTypeOfferings","describeInstanceTypes","describeInstances","describeInternetGateways","describeIpamPools","describeIpamScopes","describeIpams","describeIpv6Pools","describeKeyPairs","describeLaunchTemplateVersions","describeLaunchTemplates","describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations","describeLocalGatewayRouteTableVpcAssociations","describeLocalGatewayRouteTables","describeLocalGatewayVirtualInterfaceGroups","describeLocalGatewayVirtualInterfaces","describeLocalGateways","describeManagedPrefixLists","describeMovingAddresses","describeNatGateways","describeNetworkAcls","describeNetworkInsightsAccessScopeAnalyses","describeNetworkInsightsAccessScopes","describeNetworkInsightsAnalyses","describeNetworkInsightsPaths","describeNetworkInterfacePermissions","describeNetworkInterfaces","describePlacementGroups","describePrefixLists","describePrincipalIdFormat","describePublicIpv4Pools","describeRegions","describeReplaceRootVolumeTasks","describeReservedInstances","describeReservedInstancesListings","describeReservedInstancesModifications","describeReservedInstancesOfferings","describeRouteTables","describeScheduledInstances","describeSecurityGroupRules","describeSecurityGroups","describeSnapshotTierStatus","describeSnapshots","describeSpotFleetRequests","describeSpotInstanceRequests","describeSpotPriceHistory","describeStoreImageTasks","describeSubnets","describeTags","describeTrafficMirrorFilters","describeTrafficMirrorSessions","describeTrafficMirrorTargets","describeTransitGatewayAttachments","describeTransitGatewayConnectPeers","describeTransitGatewayConnects","describeTransitGatewayMulticastDomains","describeTransitGatewayPeeringAttachments","describeTransitGatewayPolicyTables","describeTransitGatewayRouteTableAnnouncements","describeTransitGatewayRouteTables","describeTransitGatewayVpcAttachments","describeTransitGateways","describeTrunkInterfaceAssociations","describeVolumeStatus","describeVolumes","describeVolumesModifications","describeVpcClassicLinkDnsSupport","describeVpcEndpointConnectionNotifications","describeVpcEndpointConnections","describeVpcEndpointServiceConfigurations","describeVpcEndpoints","describeVpcPeeringConnections","describeVpcs","describeVpnConnections","describeVpnGateways","getTransitGatewayMulticastDomainAssociations","getVpnConnectionDeviceTypes","listImagesInRecycleBin","listSnapshotsInRecycleBin","searchTransitGatewayMulticastGroups"] as const;
  
  acceptReservedInstancesExchangeQuote: (params: RawParamsFrom<'acceptReservedInstancesExchangeQuote'>) => Promise<ReturnTypeFrom<'acceptReservedInstancesExchangeQuote'>>  = async params => {
  // undefined
    return this.client.acceptReservedInstancesExchangeQuote(params as any).promise();
  }

  acceptTransitGatewayMulticastDomainAssociations: (params: RawParamsFrom<'acceptTransitGatewayMulticastDomainAssociations'>) => Promise<ReturnTypeFrom<'acceptTransitGatewayMulticastDomainAssociations'>>  = async params => {
  // undefined
    return this.client.acceptTransitGatewayMulticastDomainAssociations(params as any).promise();
  }

  acceptTransitGatewayPeeringAttachment: (params: RawParamsFrom<'acceptTransitGatewayPeeringAttachment'>) => Promise<ReturnTypeFrom<'acceptTransitGatewayPeeringAttachment'>>  = async params => {
  // undefined
    return this.client.acceptTransitGatewayPeeringAttachment(params as any).promise();
  }

  acceptTransitGatewayVpcAttachment: (params: RawParamsFrom<'acceptTransitGatewayVpcAttachment'>) => Promise<ReturnTypeFrom<'acceptTransitGatewayVpcAttachment'>>  = async params => {
  // undefined
    return this.client.acceptTransitGatewayVpcAttachment(params as any).promise();
  }

  acceptVpcEndpointConnections: (params: RawParamsFrom<'acceptVpcEndpointConnections'>) => Promise<ReturnTypeFrom<'acceptVpcEndpointConnections'>>  = async params => {
  // undefined
    return this.client.acceptVpcEndpointConnections(params as any).promise();
  }

  acceptVpcPeeringConnection: (params: RawParamsFrom<'acceptVpcPeeringConnection'>) => Promise<ReturnTypeFrom<'acceptVpcPeeringConnection'>>  = async params => {
  // undefined
    return this.client.acceptVpcPeeringConnection(params as any).promise();
  }

  advertiseByoipCidr: (params: RawParamsFrom<'advertiseByoipCidr'>) => Promise<ReturnTypeFrom<'advertiseByoipCidr'>>  = async params => {
  // undefined
    return this.client.advertiseByoipCidr(params as any).promise();
  }

  allocateAddress: (params: RawParamsFrom<'allocateAddress'>) => Promise<ReturnTypeFrom<'allocateAddress'>>  = async params => {
  // undefined
    return this.client.allocateAddress(params as any).promise();
  }

  allocateHosts: (params: RawParamsFrom<'allocateHosts'>) => Promise<ReturnTypeFrom<'allocateHosts'>>  = async params => {
  // undefined
    return this.client.allocateHosts(params as any).promise();
  }

  allocateIpamPoolCidr: (params: RawParamsFrom<'allocateIpamPoolCidr'>) => Promise<ReturnTypeFrom<'allocateIpamPoolCidr'>>  = async params => {
  // undefined
    return this.client.allocateIpamPoolCidr(params as any).promise();
  }

  applySecurityGroupsToClientVpnTargetNetwork: (params: RawParamsFrom<'applySecurityGroupsToClientVpnTargetNetwork'>) => Promise<ReturnTypeFrom<'applySecurityGroupsToClientVpnTargetNetwork'>>  = async params => {
  // undefined
    return this.client.applySecurityGroupsToClientVpnTargetNetwork(params as any).promise();
  }

  assignIpv6Addresses: (params: RawParamsFrom<'assignIpv6Addresses'>) => Promise<ReturnTypeFrom<'assignIpv6Addresses'>>  = async params => {
  // undefined
    return this.client.assignIpv6Addresses(params as any).promise();
  }

  assignPrivateIpAddresses: (params: RawParamsFrom<'assignPrivateIpAddresses'>) => Promise<ReturnTypeFrom<'assignPrivateIpAddresses'>>  = async params => {
  // undefined
    return this.client.assignPrivateIpAddresses(params as any).promise();
  }

  associateAddress: (params: RawParamsFrom<'associateAddress'>) => Promise<ReturnTypeFrom<'associateAddress'>>  = async params => {
  // undefined
    return this.client.associateAddress(params as any).promise();
  }

  associateClientVpnTargetNetwork: (params: RawParamsFrom<'associateClientVpnTargetNetwork'>) => Promise<ReturnTypeFrom<'associateClientVpnTargetNetwork'>>  = async params => {
  // undefined
    return this.client.associateClientVpnTargetNetwork(params as any).promise();
  }

  associateDhcpOptions: (params: RawParamsFrom<'associateDhcpOptions'>) => Promise<ReturnTypeFrom<'associateDhcpOptions'>>  = async params => {
  // undefined
    return this.client.associateDhcpOptions(params as any).promise();
  }

  associateEnclaveCertificateIamRole: (params: RawParamsFrom<'associateEnclaveCertificateIamRole'>) => Promise<ReturnTypeFrom<'associateEnclaveCertificateIamRole'>>  = async params => {
  // undefined
    return this.client.associateEnclaveCertificateIamRole(params as any).promise();
  }

  associateIamInstanceProfile: (params: RawParamsFrom<'associateIamInstanceProfile'>) => Promise<ReturnTypeFrom<'associateIamInstanceProfile'>>  = async params => {
  // undefined
    return this.client.associateIamInstanceProfile(params as any).promise();
  }

  associateInstanceEventWindow: (params: RawParamsFrom<'associateInstanceEventWindow'>) => Promise<ReturnTypeFrom<'associateInstanceEventWindow'>>  = async params => {
  // undefined
    return this.client.associateInstanceEventWindow(params as any).promise();
  }

  associateRouteTable: (params: RawParamsFrom<'associateRouteTable'>) => Promise<ReturnTypeFrom<'associateRouteTable'>>  = async params => {
  // undefined
    return this.client.associateRouteTable(params as any).promise();
  }

  associateSubnetCidrBlock: (params: RawParamsFrom<'associateSubnetCidrBlock'>) => Promise<ReturnTypeFrom<'associateSubnetCidrBlock'>>  = async params => {
  // undefined
    return this.client.associateSubnetCidrBlock(params as any).promise();
  }

  associateTransitGatewayMulticastDomain: (params: RawParamsFrom<'associateTransitGatewayMulticastDomain'>) => Promise<ReturnTypeFrom<'associateTransitGatewayMulticastDomain'>>  = async params => {
  // undefined
    return this.client.associateTransitGatewayMulticastDomain(params as any).promise();
  }

  associateTransitGatewayPolicyTable: (params: RawParamsFrom<'associateTransitGatewayPolicyTable'>) => Promise<ReturnTypeFrom<'associateTransitGatewayPolicyTable'>>  = async params => {
  // undefined
    return this.client.associateTransitGatewayPolicyTable(params as any).promise();
  }

  associateTransitGatewayRouteTable: (params: RawParamsFrom<'associateTransitGatewayRouteTable'>) => Promise<ReturnTypeFrom<'associateTransitGatewayRouteTable'>>  = async params => {
  // undefined
    return this.client.associateTransitGatewayRouteTable(params as any).promise();
  }

  associateTrunkInterface: (params: RawParamsFrom<'associateTrunkInterface'>) => Promise<ReturnTypeFrom<'associateTrunkInterface'>>  = async params => {
  // undefined
    return this.client.associateTrunkInterface(params as any).promise();
  }

  associateVpcCidrBlock: (params: RawParamsFrom<'associateVpcCidrBlock'>) => Promise<ReturnTypeFrom<'associateVpcCidrBlock'>>  = async params => {
  // undefined
    return this.client.associateVpcCidrBlock(params as any).promise();
  }

  attachClassicLinkVpc: (params: RawParamsFrom<'attachClassicLinkVpc'>) => Promise<ReturnTypeFrom<'attachClassicLinkVpc'>>  = async params => {
  // undefined
    return this.client.attachClassicLinkVpc(params as any).promise();
  }

  attachInternetGateway: (params: RawParamsFrom<'attachInternetGateway'>) => Promise<ReturnTypeFrom<'attachInternetGateway'>>  = async params => {
  // undefined
    return this.client.attachInternetGateway(params as any).promise();
  }

  attachNetworkInterface: (params: RawParamsFrom<'attachNetworkInterface'>) => Promise<ReturnTypeFrom<'attachNetworkInterface'>>  = async params => {
  // undefined
    return this.client.attachNetworkInterface(params as any).promise();
  }

  attachVolume: (params: RawParamsFrom<'attachVolume'>) => Promise<ReturnTypeFrom<'attachVolume'>>  = async params => {
  // undefined
    return this.client.attachVolume(params as any).promise();
  }

  attachVpnGateway: (params: RawParamsFrom<'attachVpnGateway'>) => Promise<ReturnTypeFrom<'attachVpnGateway'>>  = async params => {
  // undefined
    return this.client.attachVpnGateway(params as any).promise();
  }

  authorizeClientVpnIngress: (params: RawParamsFrom<'authorizeClientVpnIngress'>) => Promise<ReturnTypeFrom<'authorizeClientVpnIngress'>>  = async params => {
  // undefined
    return this.client.authorizeClientVpnIngress(params as any).promise();
  }

  authorizeSecurityGroupEgress: (params: RawParamsFrom<'authorizeSecurityGroupEgress'>) => Promise<ReturnTypeFrom<'authorizeSecurityGroupEgress'>>  = async params => {
  // undefined
    return this.client.authorizeSecurityGroupEgress(params as any).promise();
  }

  authorizeSecurityGroupIngress: (params: RawParamsFrom<'authorizeSecurityGroupIngress'>) => Promise<ReturnTypeFrom<'authorizeSecurityGroupIngress'>>  = async params => {
  // undefined
    return this.client.authorizeSecurityGroupIngress(params as any).promise();
  }

  bundleInstance: (params: RawParamsFrom<'bundleInstance'>) => Promise<ReturnTypeFrom<'bundleInstance'>>  = async params => {
  // undefined
    return this.client.bundleInstance(params as any).promise();
  }

  cancelBundleTask: (params: RawParamsFrom<'cancelBundleTask'>) => Promise<ReturnTypeFrom<'cancelBundleTask'>>  = async params => {
  // undefined
    return this.client.cancelBundleTask(params as any).promise();
  }

  cancelCapacityReservation: (params: RawParamsFrom<'cancelCapacityReservation'>) => Promise<ReturnTypeFrom<'cancelCapacityReservation'>>  = async params => {
  // undefined
    return this.client.cancelCapacityReservation(params as any).promise();
  }

  cancelCapacityReservationFleets: (params: RawParamsFrom<'cancelCapacityReservationFleets'>) => Promise<ReturnTypeFrom<'cancelCapacityReservationFleets'>>  = async params => {
  // undefined
    return this.client.cancelCapacityReservationFleets(params as any).promise();
  }

  cancelConversionTask: (params: RawParamsFrom<'cancelConversionTask'>) => Promise<ReturnTypeFrom<'cancelConversionTask'>>  = async params => {
  // undefined
    return this.client.cancelConversionTask(params as any).promise();
  }

  cancelExportTask: (params: RawParamsFrom<'cancelExportTask'>) => Promise<ReturnTypeFrom<'cancelExportTask'>>  = async params => {
  // undefined
    return this.client.cancelExportTask(params as any).promise();
  }

  cancelImportTask: (params: RawParamsFrom<'cancelImportTask'>) => Promise<ReturnTypeFrom<'cancelImportTask'>>  = async params => {
  // undefined
    return this.client.cancelImportTask(params as any).promise();
  }

  cancelReservedInstancesListing: (params: RawParamsFrom<'cancelReservedInstancesListing'>) => Promise<ReturnTypeFrom<'cancelReservedInstancesListing'>>  = async params => {
  // undefined
    return this.client.cancelReservedInstancesListing(params as any).promise();
  }

  cancelSpotFleetRequests: (params: RawParamsFrom<'cancelSpotFleetRequests'>) => Promise<ReturnTypeFrom<'cancelSpotFleetRequests'>>  = async params => {
  // undefined
    return this.client.cancelSpotFleetRequests(params as any).promise();
  }

  cancelSpotInstanceRequests: (params: RawParamsFrom<'cancelSpotInstanceRequests'>) => Promise<ReturnTypeFrom<'cancelSpotInstanceRequests'>>  = async params => {
  // undefined
    return this.client.cancelSpotInstanceRequests(params as any).promise();
  }

  confirmProductInstance: (params: RawParamsFrom<'confirmProductInstance'>) => Promise<ReturnTypeFrom<'confirmProductInstance'>>  = async params => {
  // undefined
    return this.client.confirmProductInstance(params as any).promise();
  }

  copyFpgaImage: (params: RawParamsFrom<'copyFpgaImage'>) => Promise<ReturnTypeFrom<'copyFpgaImage'>>  = async params => {
  // undefined
    return this.client.copyFpgaImage(params as any).promise();
  }

  copyImage: (params: RawParamsFrom<'copyImage'>) => Promise<ReturnTypeFrom<'copyImage'>>  = async params => {
  // undefined
    return this.client.copyImage(params as any).promise();
  }

  copySnapshot: (params: RawParamsFrom<'copySnapshot'>) => Promise<ReturnTypeFrom<'copySnapshot'>>  = async params => {
  // undefined
    return this.client.copySnapshot(params as any).promise();
  }

  createCapacityReservation: (params: RawParamsFrom<'createCapacityReservation'>) => Promise<ReturnTypeFrom<'createCapacityReservation'>>  = async params => {
  // undefined
    return this.client.createCapacityReservation(params as any).promise();
  }

  createCapacityReservationFleet: (params: RawParamsFrom<'createCapacityReservationFleet'>) => Promise<ReturnTypeFrom<'createCapacityReservationFleet'>>  = async params => {
  // undefined
    return this.client.createCapacityReservationFleet(params as any).promise();
  }

  createCarrierGateway: (params: RawParamsFrom<'createCarrierGateway'>) => Promise<ReturnTypeFrom<'createCarrierGateway'>>  = async params => {
  // undefined
    return this.client.createCarrierGateway(params as any).promise();
  }

  createClientVpnEndpoint: (params: RawParamsFrom<'createClientVpnEndpoint'>) => Promise<ReturnTypeFrom<'createClientVpnEndpoint'>>  = async params => {
  // undefined
    return this.client.createClientVpnEndpoint(params as any).promise();
  }

  createClientVpnRoute: (params: RawParamsFrom<'createClientVpnRoute'>) => Promise<ReturnTypeFrom<'createClientVpnRoute'>>  = async params => {
  // undefined
    return this.client.createClientVpnRoute(params as any).promise();
  }

  createCoipCidr: (params: RawParamsFrom<'createCoipCidr'>) => Promise<ReturnTypeFrom<'createCoipCidr'>>  = async params => {
  // undefined
    return this.client.createCoipCidr(params as any).promise();
  }

  createCoipPool: (params: RawParamsFrom<'createCoipPool'>) => Promise<ReturnTypeFrom<'createCoipPool'>>  = async params => {
  // undefined
    return this.client.createCoipPool(params as any).promise();
  }

  createCustomerGateway: (params: RawParamsFrom<'createCustomerGateway'>) => Promise<ReturnTypeFrom<'createCustomerGateway'>>  = async params => {
  // undefined
    return this.client.createCustomerGateway(params as any).promise();
  }

  createDefaultSubnet: (params: RawParamsFrom<'createDefaultSubnet'>) => Promise<ReturnTypeFrom<'createDefaultSubnet'>>  = async params => {
  // undefined
    return this.client.createDefaultSubnet(params as any).promise();
  }

  createDefaultVpc: (params: RawParamsFrom<'createDefaultVpc'>) => Promise<ReturnTypeFrom<'createDefaultVpc'>>  = async params => {
  // undefined
    return this.client.createDefaultVpc(params as any).promise();
  }

  createDhcpOptions: (params: RawParamsFrom<'createDhcpOptions'>) => Promise<ReturnTypeFrom<'createDhcpOptions'>>  = async params => {
  // undefined
    return this.client.createDhcpOptions(params as any).promise();
  }

  createEgressOnlyInternetGateway: (params: RawParamsFrom<'createEgressOnlyInternetGateway'>) => Promise<ReturnTypeFrom<'createEgressOnlyInternetGateway'>>  = async params => {
  // undefined
    return this.client.createEgressOnlyInternetGateway(params as any).promise();
  }

  createFleet: (params: RawParamsFrom<'createFleet'>) => Promise<ReturnTypeFrom<'createFleet'>>  = async params => {
  // undefined
    return this.client.createFleet(params as any).promise();
  }

  createFlowLogs: (params: RawParamsFrom<'createFlowLogs'>) => Promise<ReturnTypeFrom<'createFlowLogs'>>  = async params => {
  // undefined
    return this.client.createFlowLogs(params as any).promise();
  }

  createFpgaImage: (params: RawParamsFrom<'createFpgaImage'>) => Promise<ReturnTypeFrom<'createFpgaImage'>>  = async params => {
  // undefined
    return this.client.createFpgaImage(params as any).promise();
  }

  createImage: (params: RawParamsFrom<'createImage'>) => Promise<ReturnTypeFrom<'createImage'>>  = async params => {
  // undefined
    return this.client.createImage(params as any).promise();
  }

  createInstanceEventWindow: (params: RawParamsFrom<'createInstanceEventWindow'>) => Promise<ReturnTypeFrom<'createInstanceEventWindow'>>  = async params => {
  // undefined
    return this.client.createInstanceEventWindow(params as any).promise();
  }

  createInstanceExportTask: (params: RawParamsFrom<'createInstanceExportTask'>) => Promise<ReturnTypeFrom<'createInstanceExportTask'>>  = async params => {
  // undefined
    return this.client.createInstanceExportTask(params as any).promise();
  }

  createInternetGateway: (params: RawParamsFrom<'createInternetGateway'>) => Promise<ReturnTypeFrom<'createInternetGateway'>>  = async params => {
  // undefined
    return this.client.createInternetGateway(params as any).promise();
  }

  createIpam: (params: RawParamsFrom<'createIpam'>) => Promise<ReturnTypeFrom<'createIpam'>>  = async params => {
  // undefined
    return this.client.createIpam(params as any).promise();
  }

  createIpamPool: (params: RawParamsFrom<'createIpamPool'>) => Promise<ReturnTypeFrom<'createIpamPool'>>  = async params => {
  // undefined
    return this.client.createIpamPool(params as any).promise();
  }

  createIpamScope: (params: RawParamsFrom<'createIpamScope'>) => Promise<ReturnTypeFrom<'createIpamScope'>>  = async params => {
  // undefined
    return this.client.createIpamScope(params as any).promise();
  }

  createKeyPair: (params: RawParamsFrom<'createKeyPair'>) => Promise<ReturnTypeFrom<'createKeyPair'>>  = async params => {
  // undefined
    return this.client.createKeyPair(params as any).promise();
  }

  createLaunchTemplate: (params: RawParamsFrom<'createLaunchTemplate'>) => Promise<ReturnTypeFrom<'createLaunchTemplate'>>  = async params => {
  // undefined
    return this.client.createLaunchTemplate(params as any).promise();
  }

  createLaunchTemplateVersion: (params: RawParamsFrom<'createLaunchTemplateVersion'>) => Promise<ReturnTypeFrom<'createLaunchTemplateVersion'>>  = async params => {
  // undefined
    return this.client.createLaunchTemplateVersion(params as any).promise();
  }

  createLocalGatewayRoute: (params: RawParamsFrom<'createLocalGatewayRoute'>) => Promise<ReturnTypeFrom<'createLocalGatewayRoute'>>  = async params => {
  // undefined
    return this.client.createLocalGatewayRoute(params as any).promise();
  }

  createLocalGatewayRouteTable: (params: RawParamsFrom<'createLocalGatewayRouteTable'>) => Promise<ReturnTypeFrom<'createLocalGatewayRouteTable'>>  = async params => {
  // undefined
    return this.client.createLocalGatewayRouteTable(params as any).promise();
  }

  createLocalGatewayRouteTableVirtualInterfaceGroupAssociation: (params: RawParamsFrom<'createLocalGatewayRouteTableVirtualInterfaceGroupAssociation'>) => Promise<ReturnTypeFrom<'createLocalGatewayRouteTableVirtualInterfaceGroupAssociation'>>  = async params => {
  // undefined
    return this.client.createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(params as any).promise();
  }

  createLocalGatewayRouteTableVpcAssociation: (params: RawParamsFrom<'createLocalGatewayRouteTableVpcAssociation'>) => Promise<ReturnTypeFrom<'createLocalGatewayRouteTableVpcAssociation'>>  = async params => {
  // undefined
    return this.client.createLocalGatewayRouteTableVpcAssociation(params as any).promise();
  }

  createManagedPrefixList: (params: RawParamsFrom<'createManagedPrefixList'>) => Promise<ReturnTypeFrom<'createManagedPrefixList'>>  = async params => {
  // undefined
    return this.client.createManagedPrefixList(params as any).promise();
  }

  createNatGateway: (params: RawParamsFrom<'createNatGateway'>) => Promise<ReturnTypeFrom<'createNatGateway'>>  = async params => {
  // undefined
    return this.client.createNatGateway(params as any).promise();
  }

  createNetworkAcl: (params: RawParamsFrom<'createNetworkAcl'>) => Promise<ReturnTypeFrom<'createNetworkAcl'>>  = async params => {
  // undefined
    return this.client.createNetworkAcl(params as any).promise();
  }

  createNetworkAclEntry: (params: RawParamsFrom<'createNetworkAclEntry'>) => Promise<ReturnTypeFrom<'createNetworkAclEntry'>>  = async params => {
  // undefined
    return this.client.createNetworkAclEntry(params as any).promise();
  }

  createNetworkInsightsAccessScope: (params: RawParamsFrom<'createNetworkInsightsAccessScope'>) => Promise<ReturnTypeFrom<'createNetworkInsightsAccessScope'>>  = async params => {
  // undefined
    return this.client.createNetworkInsightsAccessScope(params as any).promise();
  }

  createNetworkInsightsPath: (params: RawParamsFrom<'createNetworkInsightsPath'>) => Promise<ReturnTypeFrom<'createNetworkInsightsPath'>>  = async params => {
  // undefined
    return this.client.createNetworkInsightsPath(params as any).promise();
  }

  createNetworkInterface: (params: RawParamsFrom<'createNetworkInterface'>) => Promise<ReturnTypeFrom<'createNetworkInterface'>>  = async params => {
  // undefined
    return this.client.createNetworkInterface(params as any).promise();
  }

  createNetworkInterfacePermission: (params: RawParamsFrom<'createNetworkInterfacePermission'>) => Promise<ReturnTypeFrom<'createNetworkInterfacePermission'>>  = async params => {
  // undefined
    return this.client.createNetworkInterfacePermission(params as any).promise();
  }

  createPlacementGroup: (params: RawParamsFrom<'createPlacementGroup'>) => Promise<ReturnTypeFrom<'createPlacementGroup'>>  = async params => {
  // undefined
    return this.client.createPlacementGroup(params as any).promise();
  }

  createPublicIpv4Pool: (params: RawParamsFrom<'createPublicIpv4Pool'>) => Promise<ReturnTypeFrom<'createPublicIpv4Pool'>>  = async params => {
  // undefined
    return this.client.createPublicIpv4Pool(params as any).promise();
  }

  createReplaceRootVolumeTask: (params: RawParamsFrom<'createReplaceRootVolumeTask'>) => Promise<ReturnTypeFrom<'createReplaceRootVolumeTask'>>  = async params => {
  // undefined
    return this.client.createReplaceRootVolumeTask(params as any).promise();
  }

  createReservedInstancesListing: (params: RawParamsFrom<'createReservedInstancesListing'>) => Promise<ReturnTypeFrom<'createReservedInstancesListing'>>  = async params => {
  // undefined
    return this.client.createReservedInstancesListing(params as any).promise();
  }

  createRestoreImageTask: (params: RawParamsFrom<'createRestoreImageTask'>) => Promise<ReturnTypeFrom<'createRestoreImageTask'>>  = async params => {
  // undefined
    return this.client.createRestoreImageTask(params as any).promise();
  }

  createRoute: (params: RawParamsFrom<'createRoute'>) => Promise<ReturnTypeFrom<'createRoute'>>  = async params => {
  // undefined
    return this.client.createRoute(params as any).promise();
  }

  createRouteTable: (params: RawParamsFrom<'createRouteTable'>) => Promise<ReturnTypeFrom<'createRouteTable'>>  = async params => {
  // undefined
    return this.client.createRouteTable(params as any).promise();
  }

  createSecurityGroup: (params: RawParamsFrom<'createSecurityGroup'>) => Promise<ReturnTypeFrom<'createSecurityGroup'>>  = async params => {
  // undefined
    return this.client.createSecurityGroup(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createSnapshots: (params: RawParamsFrom<'createSnapshots'>) => Promise<ReturnTypeFrom<'createSnapshots'>>  = async params => {
  // undefined
    return this.client.createSnapshots(params as any).promise();
  }

  createSpotDatafeedSubscription: (params: RawParamsFrom<'createSpotDatafeedSubscription'>) => Promise<ReturnTypeFrom<'createSpotDatafeedSubscription'>>  = async params => {
  // undefined
    return this.client.createSpotDatafeedSubscription(params as any).promise();
  }

  createStoreImageTask: (params: RawParamsFrom<'createStoreImageTask'>) => Promise<ReturnTypeFrom<'createStoreImageTask'>>  = async params => {
  // undefined
    return this.client.createStoreImageTask(params as any).promise();
  }

  createSubnet: (params: RawParamsFrom<'createSubnet'>) => Promise<ReturnTypeFrom<'createSubnet'>>  = async params => {
  // undefined
    return this.client.createSubnet(params as any).promise();
  }

  createSubnetCidrReservation: (params: RawParamsFrom<'createSubnetCidrReservation'>) => Promise<ReturnTypeFrom<'createSubnetCidrReservation'>>  = async params => {
  // undefined
    return this.client.createSubnetCidrReservation(params as any).promise();
  }

  createTags: (params: RawParamsFrom<'createTags'>) => Promise<ReturnTypeFrom<'createTags'>>  = async params => {
  // undefined
    return this.client.createTags(params as any).promise();
  }

  createTrafficMirrorFilter: (params: RawParamsFrom<'createTrafficMirrorFilter'>) => Promise<ReturnTypeFrom<'createTrafficMirrorFilter'>>  = async params => {
  // undefined
    return this.client.createTrafficMirrorFilter(params as any).promise();
  }

  createTrafficMirrorFilterRule: (params: RawParamsFrom<'createTrafficMirrorFilterRule'>) => Promise<ReturnTypeFrom<'createTrafficMirrorFilterRule'>>  = async params => {
  // undefined
    return this.client.createTrafficMirrorFilterRule(params as any).promise();
  }

  createTrafficMirrorSession: (params: RawParamsFrom<'createTrafficMirrorSession'>) => Promise<ReturnTypeFrom<'createTrafficMirrorSession'>>  = async params => {
  // undefined
    return this.client.createTrafficMirrorSession(params as any).promise();
  }

  createTrafficMirrorTarget: (params: RawParamsFrom<'createTrafficMirrorTarget'>) => Promise<ReturnTypeFrom<'createTrafficMirrorTarget'>>  = async params => {
  // undefined
    return this.client.createTrafficMirrorTarget(params as any).promise();
  }

  createTransitGateway: (params: RawParamsFrom<'createTransitGateway'>) => Promise<ReturnTypeFrom<'createTransitGateway'>>  = async params => {
  // undefined
    return this.client.createTransitGateway(params as any).promise();
  }

  createTransitGatewayConnect: (params: RawParamsFrom<'createTransitGatewayConnect'>) => Promise<ReturnTypeFrom<'createTransitGatewayConnect'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayConnect(params as any).promise();
  }

  createTransitGatewayConnectPeer: (params: RawParamsFrom<'createTransitGatewayConnectPeer'>) => Promise<ReturnTypeFrom<'createTransitGatewayConnectPeer'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayConnectPeer(params as any).promise();
  }

  createTransitGatewayMulticastDomain: (params: RawParamsFrom<'createTransitGatewayMulticastDomain'>) => Promise<ReturnTypeFrom<'createTransitGatewayMulticastDomain'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayMulticastDomain(params as any).promise();
  }

  createTransitGatewayPeeringAttachment: (params: RawParamsFrom<'createTransitGatewayPeeringAttachment'>) => Promise<ReturnTypeFrom<'createTransitGatewayPeeringAttachment'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayPeeringAttachment(params as any).promise();
  }

  createTransitGatewayPolicyTable: (params: RawParamsFrom<'createTransitGatewayPolicyTable'>) => Promise<ReturnTypeFrom<'createTransitGatewayPolicyTable'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayPolicyTable(params as any).promise();
  }

  createTransitGatewayPrefixListReference: (params: RawParamsFrom<'createTransitGatewayPrefixListReference'>) => Promise<ReturnTypeFrom<'createTransitGatewayPrefixListReference'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayPrefixListReference(params as any).promise();
  }

  createTransitGatewayRoute: (params: RawParamsFrom<'createTransitGatewayRoute'>) => Promise<ReturnTypeFrom<'createTransitGatewayRoute'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayRoute(params as any).promise();
  }

  createTransitGatewayRouteTable: (params: RawParamsFrom<'createTransitGatewayRouteTable'>) => Promise<ReturnTypeFrom<'createTransitGatewayRouteTable'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayRouteTable(params as any).promise();
  }

  createTransitGatewayRouteTableAnnouncement: (params: RawParamsFrom<'createTransitGatewayRouteTableAnnouncement'>) => Promise<ReturnTypeFrom<'createTransitGatewayRouteTableAnnouncement'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayRouteTableAnnouncement(params as any).promise();
  }

  createTransitGatewayVpcAttachment: (params: RawParamsFrom<'createTransitGatewayVpcAttachment'>) => Promise<ReturnTypeFrom<'createTransitGatewayVpcAttachment'>>  = async params => {
  // undefined
    return this.client.createTransitGatewayVpcAttachment(params as any).promise();
  }

  createVolume: (params: RawParamsFrom<'createVolume'>) => Promise<ReturnTypeFrom<'createVolume'>>  = async params => {
  // undefined
    return this.client.createVolume(params as any).promise();
  }

  createVpc: (params: RawParamsFrom<'createVpc'>) => Promise<ReturnTypeFrom<'createVpc'>>  = async params => {
  // undefined
    return this.client.createVpc(params as any).promise();
  }

  createVpcEndpoint: (params: RawParamsFrom<'createVpcEndpoint'>) => Promise<ReturnTypeFrom<'createVpcEndpoint'>>  = async params => {
  // undefined
    return this.client.createVpcEndpoint(params as any).promise();
  }

  createVpcEndpointConnectionNotification: (params: RawParamsFrom<'createVpcEndpointConnectionNotification'>) => Promise<ReturnTypeFrom<'createVpcEndpointConnectionNotification'>>  = async params => {
  // undefined
    return this.client.createVpcEndpointConnectionNotification(params as any).promise();
  }

  createVpcEndpointServiceConfiguration: (params: RawParamsFrom<'createVpcEndpointServiceConfiguration'>) => Promise<ReturnTypeFrom<'createVpcEndpointServiceConfiguration'>>  = async params => {
  // undefined
    return this.client.createVpcEndpointServiceConfiguration(params as any).promise();
  }

  createVpcPeeringConnection: (params: RawParamsFrom<'createVpcPeeringConnection'>) => Promise<ReturnTypeFrom<'createVpcPeeringConnection'>>  = async params => {
  // undefined
    return this.client.createVpcPeeringConnection(params as any).promise();
  }

  createVpnConnection: (params: RawParamsFrom<'createVpnConnection'>) => Promise<ReturnTypeFrom<'createVpnConnection'>>  = async params => {
  // undefined
    return this.client.createVpnConnection(params as any).promise();
  }

  createVpnConnectionRoute: (params: RawParamsFrom<'createVpnConnectionRoute'>) => Promise<ReturnTypeFrom<'createVpnConnectionRoute'>>  = async params => {
  // undefined
    return this.client.createVpnConnectionRoute(params as any).promise();
  }

  createVpnGateway: (params: RawParamsFrom<'createVpnGateway'>) => Promise<ReturnTypeFrom<'createVpnGateway'>>  = async params => {
  // undefined
    return this.client.createVpnGateway(params as any).promise();
  }

  deleteCarrierGateway: (params: RawParamsFrom<'deleteCarrierGateway'>) => Promise<ReturnTypeFrom<'deleteCarrierGateway'>>  = async params => {
  // undefined
    return this.client.deleteCarrierGateway(params as any).promise();
  }

  deleteClientVpnEndpoint: (params: RawParamsFrom<'deleteClientVpnEndpoint'>) => Promise<ReturnTypeFrom<'deleteClientVpnEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteClientVpnEndpoint(params as any).promise();
  }

  deleteClientVpnRoute: (params: RawParamsFrom<'deleteClientVpnRoute'>) => Promise<ReturnTypeFrom<'deleteClientVpnRoute'>>  = async params => {
  // undefined
    return this.client.deleteClientVpnRoute(params as any).promise();
  }

  deleteCoipCidr: (params: RawParamsFrom<'deleteCoipCidr'>) => Promise<ReturnTypeFrom<'deleteCoipCidr'>>  = async params => {
  // undefined
    return this.client.deleteCoipCidr(params as any).promise();
  }

  deleteCoipPool: (params: RawParamsFrom<'deleteCoipPool'>) => Promise<ReturnTypeFrom<'deleteCoipPool'>>  = async params => {
  // undefined
    return this.client.deleteCoipPool(params as any).promise();
  }

  deleteCustomerGateway: (params: RawParamsFrom<'deleteCustomerGateway'>) => Promise<ReturnTypeFrom<'deleteCustomerGateway'>>  = async params => {
  // undefined
    return this.client.deleteCustomerGateway(params as any).promise();
  }

  deleteDhcpOptions: (params: RawParamsFrom<'deleteDhcpOptions'>) => Promise<ReturnTypeFrom<'deleteDhcpOptions'>>  = async params => {
  // undefined
    return this.client.deleteDhcpOptions(params as any).promise();
  }

  deleteEgressOnlyInternetGateway: (params: RawParamsFrom<'deleteEgressOnlyInternetGateway'>) => Promise<ReturnTypeFrom<'deleteEgressOnlyInternetGateway'>>  = async params => {
  // undefined
    return this.client.deleteEgressOnlyInternetGateway(params as any).promise();
  }

  deleteFleets: (params: RawParamsFrom<'deleteFleets'>) => Promise<ReturnTypeFrom<'deleteFleets'>>  = async params => {
  // undefined
    return this.client.deleteFleets(params as any).promise();
  }

  deleteFlowLogs: (params: RawParamsFrom<'deleteFlowLogs'>) => Promise<ReturnTypeFrom<'deleteFlowLogs'>>  = async params => {
  // undefined
    return this.client.deleteFlowLogs(params as any).promise();
  }

  deleteFpgaImage: (params: RawParamsFrom<'deleteFpgaImage'>) => Promise<ReturnTypeFrom<'deleteFpgaImage'>>  = async params => {
  // undefined
    return this.client.deleteFpgaImage(params as any).promise();
  }

  deleteInstanceEventWindow: (params: RawParamsFrom<'deleteInstanceEventWindow'>) => Promise<ReturnTypeFrom<'deleteInstanceEventWindow'>>  = async params => {
  // undefined
    return this.client.deleteInstanceEventWindow(params as any).promise();
  }

  deleteInternetGateway: (params: RawParamsFrom<'deleteInternetGateway'>) => Promise<ReturnTypeFrom<'deleteInternetGateway'>>  = async params => {
  // undefined
    return this.client.deleteInternetGateway(params as any).promise();
  }

  deleteIpam: (params: RawParamsFrom<'deleteIpam'>) => Promise<ReturnTypeFrom<'deleteIpam'>>  = async params => {
  // undefined
    return this.client.deleteIpam(params as any).promise();
  }

  deleteIpamPool: (params: RawParamsFrom<'deleteIpamPool'>) => Promise<ReturnTypeFrom<'deleteIpamPool'>>  = async params => {
  // undefined
    return this.client.deleteIpamPool(params as any).promise();
  }

  deleteIpamScope: (params: RawParamsFrom<'deleteIpamScope'>) => Promise<ReturnTypeFrom<'deleteIpamScope'>>  = async params => {
  // undefined
    return this.client.deleteIpamScope(params as any).promise();
  }

  deleteKeyPair: (params: RawParamsFrom<'deleteKeyPair'>) => Promise<ReturnTypeFrom<'deleteKeyPair'>>  = async params => {
  // undefined
    return this.client.deleteKeyPair(params as any).promise();
  }

  deleteLaunchTemplate: (params: RawParamsFrom<'deleteLaunchTemplate'>) => Promise<ReturnTypeFrom<'deleteLaunchTemplate'>>  = async params => {
  // undefined
    return this.client.deleteLaunchTemplate(params as any).promise();
  }

  deleteLaunchTemplateVersions: (params: RawParamsFrom<'deleteLaunchTemplateVersions'>) => Promise<ReturnTypeFrom<'deleteLaunchTemplateVersions'>>  = async params => {
  // undefined
    return this.client.deleteLaunchTemplateVersions(params as any).promise();
  }

  deleteLocalGatewayRoute: (params: RawParamsFrom<'deleteLocalGatewayRoute'>) => Promise<ReturnTypeFrom<'deleteLocalGatewayRoute'>>  = async params => {
  // undefined
    return this.client.deleteLocalGatewayRoute(params as any).promise();
  }

  deleteLocalGatewayRouteTable: (params: RawParamsFrom<'deleteLocalGatewayRouteTable'>) => Promise<ReturnTypeFrom<'deleteLocalGatewayRouteTable'>>  = async params => {
  // undefined
    return this.client.deleteLocalGatewayRouteTable(params as any).promise();
  }

  deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation: (params: RawParamsFrom<'deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation'>) => Promise<ReturnTypeFrom<'deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation'>>  = async params => {
  // undefined
    return this.client.deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(params as any).promise();
  }

  deleteLocalGatewayRouteTableVpcAssociation: (params: RawParamsFrom<'deleteLocalGatewayRouteTableVpcAssociation'>) => Promise<ReturnTypeFrom<'deleteLocalGatewayRouteTableVpcAssociation'>>  = async params => {
  // undefined
    return this.client.deleteLocalGatewayRouteTableVpcAssociation(params as any).promise();
  }

  deleteManagedPrefixList: (params: RawParamsFrom<'deleteManagedPrefixList'>) => Promise<ReturnTypeFrom<'deleteManagedPrefixList'>>  = async params => {
  // undefined
    return this.client.deleteManagedPrefixList(params as any).promise();
  }

  deleteNatGateway: (params: RawParamsFrom<'deleteNatGateway'>) => Promise<ReturnTypeFrom<'deleteNatGateway'>>  = async params => {
  // undefined
    return this.client.deleteNatGateway(params as any).promise();
  }

  deleteNetworkAcl: (params: RawParamsFrom<'deleteNetworkAcl'>) => Promise<ReturnTypeFrom<'deleteNetworkAcl'>>  = async params => {
  // undefined
    return this.client.deleteNetworkAcl(params as any).promise();
  }

  deleteNetworkAclEntry: (params: RawParamsFrom<'deleteNetworkAclEntry'>) => Promise<ReturnTypeFrom<'deleteNetworkAclEntry'>>  = async params => {
  // undefined
    return this.client.deleteNetworkAclEntry(params as any).promise();
  }

  deleteNetworkInsightsAccessScope: (params: RawParamsFrom<'deleteNetworkInsightsAccessScope'>) => Promise<ReturnTypeFrom<'deleteNetworkInsightsAccessScope'>>  = async params => {
  // undefined
    return this.client.deleteNetworkInsightsAccessScope(params as any).promise();
  }

  deleteNetworkInsightsAccessScopeAnalysis: (params: RawParamsFrom<'deleteNetworkInsightsAccessScopeAnalysis'>) => Promise<ReturnTypeFrom<'deleteNetworkInsightsAccessScopeAnalysis'>>  = async params => {
  // undefined
    return this.client.deleteNetworkInsightsAccessScopeAnalysis(params as any).promise();
  }

  deleteNetworkInsightsAnalysis: (params: RawParamsFrom<'deleteNetworkInsightsAnalysis'>) => Promise<ReturnTypeFrom<'deleteNetworkInsightsAnalysis'>>  = async params => {
  // undefined
    return this.client.deleteNetworkInsightsAnalysis(params as any).promise();
  }

  deleteNetworkInsightsPath: (params: RawParamsFrom<'deleteNetworkInsightsPath'>) => Promise<ReturnTypeFrom<'deleteNetworkInsightsPath'>>  = async params => {
  // undefined
    return this.client.deleteNetworkInsightsPath(params as any).promise();
  }

  deleteNetworkInterface: (params: RawParamsFrom<'deleteNetworkInterface'>) => Promise<ReturnTypeFrom<'deleteNetworkInterface'>>  = async params => {
  // undefined
    return this.client.deleteNetworkInterface(params as any).promise();
  }

  deleteNetworkInterfacePermission: (params: RawParamsFrom<'deleteNetworkInterfacePermission'>) => Promise<ReturnTypeFrom<'deleteNetworkInterfacePermission'>>  = async params => {
  // undefined
    return this.client.deleteNetworkInterfacePermission(params as any).promise();
  }

  deletePlacementGroup: (params: RawParamsFrom<'deletePlacementGroup'>) => Promise<ReturnTypeFrom<'deletePlacementGroup'>>  = async params => {
  // undefined
    return this.client.deletePlacementGroup(params as any).promise();
  }

  deletePublicIpv4Pool: (params: RawParamsFrom<'deletePublicIpv4Pool'>) => Promise<ReturnTypeFrom<'deletePublicIpv4Pool'>>  = async params => {
  // undefined
    return this.client.deletePublicIpv4Pool(params as any).promise();
  }

  deleteQueuedReservedInstances: (params: RawParamsFrom<'deleteQueuedReservedInstances'>) => Promise<ReturnTypeFrom<'deleteQueuedReservedInstances'>>  = async params => {
  // undefined
    return this.client.deleteQueuedReservedInstances(params as any).promise();
  }

  deleteRoute: (params: RawParamsFrom<'deleteRoute'>) => Promise<ReturnTypeFrom<'deleteRoute'>>  = async params => {
  // undefined
    return this.client.deleteRoute(params as any).promise();
  }

  deleteRouteTable: (params: RawParamsFrom<'deleteRouteTable'>) => Promise<ReturnTypeFrom<'deleteRouteTable'>>  = async params => {
  // undefined
    return this.client.deleteRouteTable(params as any).promise();
  }

  deleteSecurityGroup: (params: RawParamsFrom<'deleteSecurityGroup'>) => Promise<ReturnTypeFrom<'deleteSecurityGroup'>>  = async params => {
  // undefined
    return this.client.deleteSecurityGroup(params as any).promise();
  }

  deleteSnapshot: (params: RawParamsFrom<'deleteSnapshot'>) => Promise<ReturnTypeFrom<'deleteSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteSnapshot(params as any).promise();
  }

  deleteSpotDatafeedSubscription: (params: RawParamsFrom<'deleteSpotDatafeedSubscription'>) => Promise<ReturnTypeFrom<'deleteSpotDatafeedSubscription'>>  = async params => {
  // undefined
    return this.client.deleteSpotDatafeedSubscription(params as any).promise();
  }

  deleteSubnet: (params: RawParamsFrom<'deleteSubnet'>) => Promise<ReturnTypeFrom<'deleteSubnet'>>  = async params => {
  // undefined
    return this.client.deleteSubnet(params as any).promise();
  }

  deleteSubnetCidrReservation: (params: RawParamsFrom<'deleteSubnetCidrReservation'>) => Promise<ReturnTypeFrom<'deleteSubnetCidrReservation'>>  = async params => {
  // undefined
    return this.client.deleteSubnetCidrReservation(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  deleteTrafficMirrorFilter: (params: RawParamsFrom<'deleteTrafficMirrorFilter'>) => Promise<ReturnTypeFrom<'deleteTrafficMirrorFilter'>>  = async params => {
  // undefined
    return this.client.deleteTrafficMirrorFilter(params as any).promise();
  }

  deleteTrafficMirrorFilterRule: (params: RawParamsFrom<'deleteTrafficMirrorFilterRule'>) => Promise<ReturnTypeFrom<'deleteTrafficMirrorFilterRule'>>  = async params => {
  // undefined
    return this.client.deleteTrafficMirrorFilterRule(params as any).promise();
  }

  deleteTrafficMirrorSession: (params: RawParamsFrom<'deleteTrafficMirrorSession'>) => Promise<ReturnTypeFrom<'deleteTrafficMirrorSession'>>  = async params => {
  // undefined
    return this.client.deleteTrafficMirrorSession(params as any).promise();
  }

  deleteTrafficMirrorTarget: (params: RawParamsFrom<'deleteTrafficMirrorTarget'>) => Promise<ReturnTypeFrom<'deleteTrafficMirrorTarget'>>  = async params => {
  // undefined
    return this.client.deleteTrafficMirrorTarget(params as any).promise();
  }

  deleteTransitGateway: (params: RawParamsFrom<'deleteTransitGateway'>) => Promise<ReturnTypeFrom<'deleteTransitGateway'>>  = async params => {
  // undefined
    return this.client.deleteTransitGateway(params as any).promise();
  }

  deleteTransitGatewayConnect: (params: RawParamsFrom<'deleteTransitGatewayConnect'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayConnect'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayConnect(params as any).promise();
  }

  deleteTransitGatewayConnectPeer: (params: RawParamsFrom<'deleteTransitGatewayConnectPeer'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayConnectPeer'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayConnectPeer(params as any).promise();
  }

  deleteTransitGatewayMulticastDomain: (params: RawParamsFrom<'deleteTransitGatewayMulticastDomain'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayMulticastDomain'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayMulticastDomain(params as any).promise();
  }

  deleteTransitGatewayPeeringAttachment: (params: RawParamsFrom<'deleteTransitGatewayPeeringAttachment'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayPeeringAttachment'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayPeeringAttachment(params as any).promise();
  }

  deleteTransitGatewayPolicyTable: (params: RawParamsFrom<'deleteTransitGatewayPolicyTable'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayPolicyTable'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayPolicyTable(params as any).promise();
  }

  deleteTransitGatewayPrefixListReference: (params: RawParamsFrom<'deleteTransitGatewayPrefixListReference'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayPrefixListReference'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayPrefixListReference(params as any).promise();
  }

  deleteTransitGatewayRoute: (params: RawParamsFrom<'deleteTransitGatewayRoute'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayRoute'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayRoute(params as any).promise();
  }

  deleteTransitGatewayRouteTable: (params: RawParamsFrom<'deleteTransitGatewayRouteTable'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayRouteTable'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayRouteTable(params as any).promise();
  }

  deleteTransitGatewayRouteTableAnnouncement: (params: RawParamsFrom<'deleteTransitGatewayRouteTableAnnouncement'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayRouteTableAnnouncement'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayRouteTableAnnouncement(params as any).promise();
  }

  deleteTransitGatewayVpcAttachment: (params: RawParamsFrom<'deleteTransitGatewayVpcAttachment'>) => Promise<ReturnTypeFrom<'deleteTransitGatewayVpcAttachment'>>  = async params => {
  // undefined
    return this.client.deleteTransitGatewayVpcAttachment(params as any).promise();
  }

  deleteVolume: (params: RawParamsFrom<'deleteVolume'>) => Promise<ReturnTypeFrom<'deleteVolume'>>  = async params => {
  // undefined
    return this.client.deleteVolume(params as any).promise();
  }

  deleteVpc: (params: RawParamsFrom<'deleteVpc'>) => Promise<ReturnTypeFrom<'deleteVpc'>>  = async params => {
  // undefined
    return this.client.deleteVpc(params as any).promise();
  }

  deleteVpcEndpointConnectionNotifications: (params: RawParamsFrom<'deleteVpcEndpointConnectionNotifications'>) => Promise<ReturnTypeFrom<'deleteVpcEndpointConnectionNotifications'>>  = async params => {
  // undefined
    return this.client.deleteVpcEndpointConnectionNotifications(params as any).promise();
  }

  deleteVpcEndpointServiceConfigurations: (params: RawParamsFrom<'deleteVpcEndpointServiceConfigurations'>) => Promise<ReturnTypeFrom<'deleteVpcEndpointServiceConfigurations'>>  = async params => {
  // undefined
    return this.client.deleteVpcEndpointServiceConfigurations(params as any).promise();
  }

  deleteVpcEndpoints: (params: RawParamsFrom<'deleteVpcEndpoints'>) => Promise<ReturnTypeFrom<'deleteVpcEndpoints'>>  = async params => {
  // undefined
    return this.client.deleteVpcEndpoints(params as any).promise();
  }

  deleteVpcPeeringConnection: (params: RawParamsFrom<'deleteVpcPeeringConnection'>) => Promise<ReturnTypeFrom<'deleteVpcPeeringConnection'>>  = async params => {
  // undefined
    return this.client.deleteVpcPeeringConnection(params as any).promise();
  }

  deleteVpnConnection: (params: RawParamsFrom<'deleteVpnConnection'>) => Promise<ReturnTypeFrom<'deleteVpnConnection'>>  = async params => {
  // undefined
    return this.client.deleteVpnConnection(params as any).promise();
  }

  deleteVpnConnectionRoute: (params: RawParamsFrom<'deleteVpnConnectionRoute'>) => Promise<ReturnTypeFrom<'deleteVpnConnectionRoute'>>  = async params => {
  // undefined
    return this.client.deleteVpnConnectionRoute(params as any).promise();
  }

  deleteVpnGateway: (params: RawParamsFrom<'deleteVpnGateway'>) => Promise<ReturnTypeFrom<'deleteVpnGateway'>>  = async params => {
  // undefined
    return this.client.deleteVpnGateway(params as any).promise();
  }

  deprovisionByoipCidr: (params: RawParamsFrom<'deprovisionByoipCidr'>) => Promise<ReturnTypeFrom<'deprovisionByoipCidr'>>  = async params => {
  // undefined
    return this.client.deprovisionByoipCidr(params as any).promise();
  }

  deprovisionIpamPoolCidr: (params: RawParamsFrom<'deprovisionIpamPoolCidr'>) => Promise<ReturnTypeFrom<'deprovisionIpamPoolCidr'>>  = async params => {
  // undefined
    return this.client.deprovisionIpamPoolCidr(params as any).promise();
  }

  deprovisionPublicIpv4PoolCidr: (params: RawParamsFrom<'deprovisionPublicIpv4PoolCidr'>) => Promise<ReturnTypeFrom<'deprovisionPublicIpv4PoolCidr'>>  = async params => {
  // undefined
    return this.client.deprovisionPublicIpv4PoolCidr(params as any).promise();
  }

  deregisterImage: (params: RawParamsFrom<'deregisterImage'>) => Promise<ReturnTypeFrom<'deregisterImage'>>  = async params => {
  // undefined
    return this.client.deregisterImage(params as any).promise();
  }

  deregisterInstanceEventNotificationAttributes: (params: RawParamsFrom<'deregisterInstanceEventNotificationAttributes'>) => Promise<ReturnTypeFrom<'deregisterInstanceEventNotificationAttributes'>>  = async params => {
  // undefined
    return this.client.deregisterInstanceEventNotificationAttributes(params as any).promise();
  }

  deregisterTransitGatewayMulticastGroupMembers: (params: RawParamsFrom<'deregisterTransitGatewayMulticastGroupMembers'>) => Promise<ReturnTypeFrom<'deregisterTransitGatewayMulticastGroupMembers'>>  = async params => {
  // undefined
    return this.client.deregisterTransitGatewayMulticastGroupMembers(params as any).promise();
  }

  deregisterTransitGatewayMulticastGroupSources: (params: RawParamsFrom<'deregisterTransitGatewayMulticastGroupSources'>) => Promise<ReturnTypeFrom<'deregisterTransitGatewayMulticastGroupSources'>>  = async params => {
  // undefined
    return this.client.deregisterTransitGatewayMulticastGroupSources(params as any).promise();
  }

  async describeAccountAttributes(params: { [K in keyof ParamsFrom<'describeAccountAttributes', {}>]: ParamsFrom<'describeAccountAttributes', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAccountAttributes'>]-?: ReturnTypeFrom<'describeAccountAttributes'>[K]}['AccountAttributes'], undefined>}> {
    // {"resultKey":"AccountAttributes"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeAccountAttributes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.AccountAttributes ?? []) ? (result.AccountAttributes ?? []) : [result.AccountAttributes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAddresses(params: { [K in keyof ParamsFrom<'describeAddresses', {}>]: ParamsFrom<'describeAddresses', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAddresses'>]-?: ReturnTypeFrom<'describeAddresses'>[K]}['Addresses'], undefined>}> {
    // {"resultKey":"Addresses"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeAddresses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.Addresses ?? []) ? (result.Addresses ?? []) : [result.Addresses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAddressesAttribute(params: { [K in keyof ParamsFrom<'describeAddressesAttribute', { next?: string, limit?: number }>]: ParamsFrom<'describeAddressesAttribute', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAddressesAttribute'>]-?: ReturnTypeFrom<'describeAddressesAttribute'>[K]}['Addresses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Addresses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAddressesAttribute({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAddressesAttribute' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Addresses ?? []) ? (result.Addresses ?? []) : [result.Addresses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeAggregateIdFormat: (params: RawParamsFrom<'describeAggregateIdFormat'>) => Promise<ReturnTypeFrom<'describeAggregateIdFormat'>>  = async params => {
  // undefined
    return this.client.describeAggregateIdFormat(params as any).promise();
  }

  async describeAvailabilityZones(params: { [K in keyof ParamsFrom<'describeAvailabilityZones', {}>]: ParamsFrom<'describeAvailabilityZones', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAvailabilityZones'>]-?: ReturnTypeFrom<'describeAvailabilityZones'>[K]}['AvailabilityZones'], undefined>}> {
    // {"resultKey":"AvailabilityZones"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeAvailabilityZones({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.AvailabilityZones ?? []) ? (result.AvailabilityZones ?? []) : [result.AvailabilityZones]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeBundleTasks(params: { [K in keyof ParamsFrom<'describeBundleTasks', {}>]: ParamsFrom<'describeBundleTasks', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeBundleTasks'>]-?: ReturnTypeFrom<'describeBundleTasks'>[K]}['BundleTasks'], undefined>}> {
    // {"resultKey":"BundleTasks"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeBundleTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.BundleTasks ?? []) ? (result.BundleTasks ?? []) : [result.BundleTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeByoipCidrs(params: { [K in keyof ParamsFrom<'describeByoipCidrs', { next?: string, limit?: number }>]: ParamsFrom<'describeByoipCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeByoipCidrs'>]-?: ReturnTypeFrom<'describeByoipCidrs'>[K]}['ByoipCidrs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ByoipCidrs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeByoipCidrs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeByoipCidrs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ByoipCidrs ?? []) ? (result.ByoipCidrs ?? []) : [result.ByoipCidrs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCapacityReservationFleets(params: { [K in keyof ParamsFrom<'describeCapacityReservationFleets', { next?: string, limit?: number }>]: ParamsFrom<'describeCapacityReservationFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCapacityReservationFleets'>]-?: ReturnTypeFrom<'describeCapacityReservationFleets'>[K]}['CapacityReservationFleets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CapacityReservationFleets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeCapacityReservationFleets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeCapacityReservationFleets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CapacityReservationFleets ?? []) ? (result.CapacityReservationFleets ?? []) : [result.CapacityReservationFleets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCapacityReservations(params: { [K in keyof ParamsFrom<'describeCapacityReservations', { next?: string, limit?: number }>]: ParamsFrom<'describeCapacityReservations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCapacityReservations'>]-?: ReturnTypeFrom<'describeCapacityReservations'>[K]}['CapacityReservations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CapacityReservations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeCapacityReservations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeCapacityReservations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CapacityReservations ?? []) ? (result.CapacityReservations ?? []) : [result.CapacityReservations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCarrierGateways(params: { [K in keyof ParamsFrom<'describeCarrierGateways', { next?: string, limit?: number }>]: ParamsFrom<'describeCarrierGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCarrierGateways'>]-?: ReturnTypeFrom<'describeCarrierGateways'>[K]}['CarrierGateways'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CarrierGateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeCarrierGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeCarrierGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CarrierGateways ?? []) ? (result.CarrierGateways ?? []) : [result.CarrierGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClassicLinkInstances(params: { [K in keyof ParamsFrom<'describeClassicLinkInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeClassicLinkInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClassicLinkInstances'>]-?: ReturnTypeFrom<'describeClassicLinkInstances'>[K]}['Instances'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Instances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClassicLinkInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeClassicLinkInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Instances ?? []) ? (result.Instances ?? []) : [result.Instances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnAuthorizationRules(params: { [K in keyof ParamsFrom<'describeClientVpnAuthorizationRules', { next?: string, limit?: number }>]: ParamsFrom<'describeClientVpnAuthorizationRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClientVpnAuthorizationRules'>]-?: ReturnTypeFrom<'describeClientVpnAuthorizationRules'>[K]}['AuthorizationRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AuthorizationRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnAuthorizationRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeClientVpnAuthorizationRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AuthorizationRules ?? []) ? (result.AuthorizationRules ?? []) : [result.AuthorizationRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnConnections(params: { [K in keyof ParamsFrom<'describeClientVpnConnections', { next?: string, limit?: number }>]: ParamsFrom<'describeClientVpnConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClientVpnConnections'>]-?: ReturnTypeFrom<'describeClientVpnConnections'>[K]}['Connections'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Connections"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnConnections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeClientVpnConnections' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Connections ?? []) ? (result.Connections ?? []) : [result.Connections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnEndpoints(params: { [K in keyof ParamsFrom<'describeClientVpnEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'describeClientVpnEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClientVpnEndpoints'>]-?: ReturnTypeFrom<'describeClientVpnEndpoints'>[K]}['ClientVpnEndpoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClientVpnEndpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeClientVpnEndpoints' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClientVpnEndpoints ?? []) ? (result.ClientVpnEndpoints ?? []) : [result.ClientVpnEndpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnRoutes(params: { [K in keyof ParamsFrom<'describeClientVpnRoutes', { next?: string, limit?: number }>]: ParamsFrom<'describeClientVpnRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClientVpnRoutes'>]-?: ReturnTypeFrom<'describeClientVpnRoutes'>[K]}['Routes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Routes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnRoutes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeClientVpnRoutes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Routes ?? []) ? (result.Routes ?? []) : [result.Routes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnTargetNetworks(params: { [K in keyof ParamsFrom<'describeClientVpnTargetNetworks', { next?: string, limit?: number }>]: ParamsFrom<'describeClientVpnTargetNetworks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClientVpnTargetNetworks'>]-?: ReturnTypeFrom<'describeClientVpnTargetNetworks'>[K]}['ClientVpnTargetNetworks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClientVpnTargetNetworks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnTargetNetworks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeClientVpnTargetNetworks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClientVpnTargetNetworks ?? []) ? (result.ClientVpnTargetNetworks ?? []) : [result.ClientVpnTargetNetworks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCoipPools(params: { [K in keyof ParamsFrom<'describeCoipPools', { next?: string, limit?: number }>]: ParamsFrom<'describeCoipPools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCoipPools'>]-?: ReturnTypeFrom<'describeCoipPools'>[K]}['CoipPools'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoipPools"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeCoipPools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeCoipPools' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CoipPools ?? []) ? (result.CoipPools ?? []) : [result.CoipPools]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConversionTasks(params: { [K in keyof ParamsFrom<'describeConversionTasks', {}>]: ParamsFrom<'describeConversionTasks', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConversionTasks'>]-?: ReturnTypeFrom<'describeConversionTasks'>[K]}['ConversionTasks'], undefined>}> {
    // {"resultKey":"ConversionTasks"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeConversionTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.ConversionTasks ?? []) ? (result.ConversionTasks ?? []) : [result.ConversionTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCustomerGateways(params: { [K in keyof ParamsFrom<'describeCustomerGateways', {}>]: ParamsFrom<'describeCustomerGateways', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCustomerGateways'>]-?: ReturnTypeFrom<'describeCustomerGateways'>[K]}['CustomerGateways'], undefined>}> {
    // {"resultKey":"CustomerGateways"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeCustomerGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.CustomerGateways ?? []) ? (result.CustomerGateways ?? []) : [result.CustomerGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDhcpOptions(params: { [K in keyof ParamsFrom<'describeDhcpOptions', { next?: string, limit?: number }>]: ParamsFrom<'describeDhcpOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDhcpOptions'>]-?: ReturnTypeFrom<'describeDhcpOptions'>[K]}['DhcpOptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DhcpOptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeDhcpOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeDhcpOptions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DhcpOptions ?? []) ? (result.DhcpOptions ?? []) : [result.DhcpOptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEgressOnlyInternetGateways(params: { [K in keyof ParamsFrom<'describeEgressOnlyInternetGateways', { next?: string, limit?: number }>]: ParamsFrom<'describeEgressOnlyInternetGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEgressOnlyInternetGateways'>]-?: ReturnTypeFrom<'describeEgressOnlyInternetGateways'>[K]}['EgressOnlyInternetGateways'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EgressOnlyInternetGateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEgressOnlyInternetGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEgressOnlyInternetGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EgressOnlyInternetGateways ?? []) ? (result.EgressOnlyInternetGateways ?? []) : [result.EgressOnlyInternetGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeElasticGpus: (params: RawParamsFrom<'describeElasticGpus'>) => Promise<ReturnTypeFrom<'describeElasticGpus'>>  = async params => {
  // undefined
    return this.client.describeElasticGpus(params as any).promise();
  }

  async describeExportImageTasks(params: { [K in keyof ParamsFrom<'describeExportImageTasks', { next?: string, limit?: number }>]: ParamsFrom<'describeExportImageTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeExportImageTasks'>]-?: ReturnTypeFrom<'describeExportImageTasks'>[K]}['ExportImageTasks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ExportImageTasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeExportImageTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeExportImageTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ExportImageTasks ?? []) ? (result.ExportImageTasks ?? []) : [result.ExportImageTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeExportTasks(params: { [K in keyof ParamsFrom<'describeExportTasks', {}>]: ParamsFrom<'describeExportTasks', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeExportTasks'>]-?: ReturnTypeFrom<'describeExportTasks'>[K]}['ExportTasks'], undefined>}> {
    // {"resultKey":"ExportTasks"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeExportTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.ExportTasks ?? []) ? (result.ExportTasks ?? []) : [result.ExportTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFastLaunchImages(params: { [K in keyof ParamsFrom<'describeFastLaunchImages', { next?: string, limit?: number }>]: ParamsFrom<'describeFastLaunchImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFastLaunchImages'>]-?: ReturnTypeFrom<'describeFastLaunchImages'>[K]}['FastLaunchImages'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FastLaunchImages"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFastLaunchImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFastLaunchImages' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FastLaunchImages ?? []) ? (result.FastLaunchImages ?? []) : [result.FastLaunchImages]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFastSnapshotRestores(params: { [K in keyof ParamsFrom<'describeFastSnapshotRestores', { next?: string, limit?: number }>]: ParamsFrom<'describeFastSnapshotRestores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFastSnapshotRestores'>]-?: ReturnTypeFrom<'describeFastSnapshotRestores'>[K]}['FastSnapshotRestores'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FastSnapshotRestores"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFastSnapshotRestores({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFastSnapshotRestores' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FastSnapshotRestores ?? []) ? (result.FastSnapshotRestores ?? []) : [result.FastSnapshotRestores]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeFleetHistory: (params: RawParamsFrom<'describeFleetHistory'>) => Promise<ReturnTypeFrom<'describeFleetHistory'>>  = async params => {
  // undefined
    return this.client.describeFleetHistory(params as any).promise();
  }

  describeFleetInstances: (params: RawParamsFrom<'describeFleetInstances'>) => Promise<ReturnTypeFrom<'describeFleetInstances'>>  = async params => {
  // undefined
    return this.client.describeFleetInstances(params as any).promise();
  }

  async describeFleets(params: { [K in keyof ParamsFrom<'describeFleets', { next?: string, limit?: number }>]: ParamsFrom<'describeFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFleets'>]-?: ReturnTypeFrom<'describeFleets'>[K]}['Fleets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Fleets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFleets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFleets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Fleets ?? []) ? (result.Fleets ?? []) : [result.Fleets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFlowLogs(params: { [K in keyof ParamsFrom<'describeFlowLogs', { next?: string, limit?: number }>]: ParamsFrom<'describeFlowLogs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFlowLogs'>]-?: ReturnTypeFrom<'describeFlowLogs'>[K]}['FlowLogs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FlowLogs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFlowLogs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFlowLogs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FlowLogs ?? []) ? (result.FlowLogs ?? []) : [result.FlowLogs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeFpgaImageAttribute: (params: RawParamsFrom<'describeFpgaImageAttribute'>) => Promise<ReturnTypeFrom<'describeFpgaImageAttribute'>>  = async params => {
  // undefined
    return this.client.describeFpgaImageAttribute(params as any).promise();
  }

  async describeFpgaImages(params: { [K in keyof ParamsFrom<'describeFpgaImages', { next?: string, limit?: number }>]: ParamsFrom<'describeFpgaImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFpgaImages'>]-?: ReturnTypeFrom<'describeFpgaImages'>[K]}['FpgaImages'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FpgaImages"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFpgaImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFpgaImages' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FpgaImages ?? []) ? (result.FpgaImages ?? []) : [result.FpgaImages]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHostReservationOfferings(params: { [K in keyof ParamsFrom<'describeHostReservationOfferings', { next?: string, limit?: number }>]: ParamsFrom<'describeHostReservationOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeHostReservationOfferings'>]-?: ReturnTypeFrom<'describeHostReservationOfferings'>[K]}['OfferingSet'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OfferingSet"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeHostReservationOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeHostReservationOfferings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OfferingSet ?? []) ? (result.OfferingSet ?? []) : [result.OfferingSet]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHostReservations(params: { [K in keyof ParamsFrom<'describeHostReservations', { next?: string, limit?: number }>]: ParamsFrom<'describeHostReservations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeHostReservations'>]-?: ReturnTypeFrom<'describeHostReservations'>[K]}['HostReservationSet'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HostReservationSet"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeHostReservations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeHostReservations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.HostReservationSet ?? []) ? (result.HostReservationSet ?? []) : [result.HostReservationSet]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHosts(params: { [K in keyof ParamsFrom<'describeHosts', { next?: string, limit?: number }>]: ParamsFrom<'describeHosts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeHosts'>]-?: ReturnTypeFrom<'describeHosts'>[K]}['Hosts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Hosts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeHosts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeHosts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Hosts ?? []) ? (result.Hosts ?? []) : [result.Hosts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIamInstanceProfileAssociations(params: { [K in keyof ParamsFrom<'describeIamInstanceProfileAssociations', { next?: string, limit?: number }>]: ParamsFrom<'describeIamInstanceProfileAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeIamInstanceProfileAssociations'>]-?: ReturnTypeFrom<'describeIamInstanceProfileAssociations'>[K]}['IamInstanceProfileAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IamInstanceProfileAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIamInstanceProfileAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeIamInstanceProfileAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.IamInstanceProfileAssociations ?? []) ? (result.IamInstanceProfileAssociations ?? []) : [result.IamInstanceProfileAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeIdFormat: (params: RawParamsFrom<'describeIdFormat'>) => Promise<ReturnTypeFrom<'describeIdFormat'>>  = async params => {
  // undefined
    return this.client.describeIdFormat(params as any).promise();
  }

  describeIdentityIdFormat: (params: RawParamsFrom<'describeIdentityIdFormat'>) => Promise<ReturnTypeFrom<'describeIdentityIdFormat'>>  = async params => {
  // undefined
    return this.client.describeIdentityIdFormat(params as any).promise();
  }

  describeImageAttribute: (params: RawParamsFrom<'describeImageAttribute'>) => Promise<ReturnTypeFrom<'describeImageAttribute'>>  = async params => {
  // undefined
    return this.client.describeImageAttribute(params as any).promise();
  }

  async describeImages(params: { [K in keyof ParamsFrom<'describeImages', {}>]: ParamsFrom<'describeImages', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeImages'>]-?: ReturnTypeFrom<'describeImages'>[K]}['Images'], undefined>}> {
    // {"resultKey":"Images"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.Images ?? []) ? (result.Images ?? []) : [result.Images]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeImportImageTasks(params: { [K in keyof ParamsFrom<'describeImportImageTasks', { next?: string, limit?: number }>]: ParamsFrom<'describeImportImageTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeImportImageTasks'>]-?: ReturnTypeFrom<'describeImportImageTasks'>[K]}['ImportImageTasks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ImportImageTasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeImportImageTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeImportImageTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ImportImageTasks ?? []) ? (result.ImportImageTasks ?? []) : [result.ImportImageTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeImportSnapshotTasks(params: { [K in keyof ParamsFrom<'describeImportSnapshotTasks', { next?: string, limit?: number }>]: ParamsFrom<'describeImportSnapshotTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeImportSnapshotTasks'>]-?: ReturnTypeFrom<'describeImportSnapshotTasks'>[K]}['ImportSnapshotTasks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ImportSnapshotTasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeImportSnapshotTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeImportSnapshotTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ImportSnapshotTasks ?? []) ? (result.ImportSnapshotTasks ?? []) : [result.ImportSnapshotTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeInstanceAttribute: (params: RawParamsFrom<'describeInstanceAttribute'>) => Promise<ReturnTypeFrom<'describeInstanceAttribute'>>  = async params => {
  // undefined
    return this.client.describeInstanceAttribute(params as any).promise();
  }

  async describeInstanceCreditSpecifications(params: { [K in keyof ParamsFrom<'describeInstanceCreditSpecifications', { next?: string, limit?: number }>]: ParamsFrom<'describeInstanceCreditSpecifications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstanceCreditSpecifications'>]-?: ReturnTypeFrom<'describeInstanceCreditSpecifications'>[K]}['InstanceCreditSpecifications'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceCreditSpecifications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceCreditSpecifications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstanceCreditSpecifications' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceCreditSpecifications ?? []) ? (result.InstanceCreditSpecifications ?? []) : [result.InstanceCreditSpecifications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeInstanceEventNotificationAttributes: (params: RawParamsFrom<'describeInstanceEventNotificationAttributes'>) => Promise<ReturnTypeFrom<'describeInstanceEventNotificationAttributes'>>  = async params => {
  // undefined
    return this.client.describeInstanceEventNotificationAttributes(params as any).promise();
  }

  async describeInstanceEventWindows(params: { [K in keyof ParamsFrom<'describeInstanceEventWindows', { next?: string, limit?: number }>]: ParamsFrom<'describeInstanceEventWindows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstanceEventWindows'>]-?: ReturnTypeFrom<'describeInstanceEventWindows'>[K]}['InstanceEventWindows'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceEventWindows"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceEventWindows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstanceEventWindows' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceEventWindows ?? []) ? (result.InstanceEventWindows ?? []) : [result.InstanceEventWindows]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceStatus(params: { [K in keyof ParamsFrom<'describeInstanceStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeInstanceStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstanceStatus'>]-?: ReturnTypeFrom<'describeInstanceStatus'>[K]}['InstanceStatuses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstanceStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceStatuses ?? []) ? (result.InstanceStatuses ?? []) : [result.InstanceStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceTypeOfferings(params: { [K in keyof ParamsFrom<'describeInstanceTypeOfferings', { next?: string, limit?: number }>]: ParamsFrom<'describeInstanceTypeOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstanceTypeOfferings'>]-?: ReturnTypeFrom<'describeInstanceTypeOfferings'>[K]}['InstanceTypeOfferings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceTypeOfferings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceTypeOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstanceTypeOfferings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceTypeOfferings ?? []) ? (result.InstanceTypeOfferings ?? []) : [result.InstanceTypeOfferings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceTypes(params: { [K in keyof ParamsFrom<'describeInstanceTypes', { next?: string, limit?: number }>]: ParamsFrom<'describeInstanceTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstanceTypes'>]-?: ReturnTypeFrom<'describeInstanceTypes'>[K]}['InstanceTypes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceTypes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstanceTypes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceTypes ?? []) ? (result.InstanceTypes ?? []) : [result.InstanceTypes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstances(params: { [K in keyof ParamsFrom<'describeInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstances'>]-?: ReturnTypeFrom<'describeInstances'>[K]}['Reservations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Reservations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Reservations ?? []) ? (result.Reservations ?? []) : [result.Reservations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInternetGateways(params: { [K in keyof ParamsFrom<'describeInternetGateways', { next?: string, limit?: number }>]: ParamsFrom<'describeInternetGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInternetGateways'>]-?: ReturnTypeFrom<'describeInternetGateways'>[K]}['InternetGateways'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InternetGateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInternetGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInternetGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InternetGateways ?? []) ? (result.InternetGateways ?? []) : [result.InternetGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIpamPools(params: { [K in keyof ParamsFrom<'describeIpamPools', { next?: string, limit?: number }>]: ParamsFrom<'describeIpamPools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeIpamPools'>]-?: ReturnTypeFrom<'describeIpamPools'>[K]}['IpamPools'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamPools"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIpamPools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeIpamPools' })).toString('base64') : undefined;
    const member = (Array.isArray(result.IpamPools ?? []) ? (result.IpamPools ?? []) : [result.IpamPools]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIpamScopes(params: { [K in keyof ParamsFrom<'describeIpamScopes', { next?: string, limit?: number }>]: ParamsFrom<'describeIpamScopes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeIpamScopes'>]-?: ReturnTypeFrom<'describeIpamScopes'>[K]}['IpamScopes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamScopes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIpamScopes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeIpamScopes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.IpamScopes ?? []) ? (result.IpamScopes ?? []) : [result.IpamScopes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIpams(params: { [K in keyof ParamsFrom<'describeIpams', { next?: string, limit?: number }>]: ParamsFrom<'describeIpams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeIpams'>]-?: ReturnTypeFrom<'describeIpams'>[K]}['Ipams'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Ipams"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIpams({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeIpams' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Ipams ?? []) ? (result.Ipams ?? []) : [result.Ipams]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIpv6Pools(params: { [K in keyof ParamsFrom<'describeIpv6Pools', { next?: string, limit?: number }>]: ParamsFrom<'describeIpv6Pools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeIpv6Pools'>]-?: ReturnTypeFrom<'describeIpv6Pools'>[K]}['Ipv6Pools'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Ipv6Pools"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIpv6Pools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeIpv6Pools' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Ipv6Pools ?? []) ? (result.Ipv6Pools ?? []) : [result.Ipv6Pools]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeKeyPairs(params: { [K in keyof ParamsFrom<'describeKeyPairs', {}>]: ParamsFrom<'describeKeyPairs', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeKeyPairs'>]-?: ReturnTypeFrom<'describeKeyPairs'>[K]}['KeyPairs'], undefined>}> {
    // {"resultKey":"KeyPairs"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeKeyPairs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.KeyPairs ?? []) ? (result.KeyPairs ?? []) : [result.KeyPairs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLaunchTemplateVersions(params: { [K in keyof ParamsFrom<'describeLaunchTemplateVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeLaunchTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLaunchTemplateVersions'>]-?: ReturnTypeFrom<'describeLaunchTemplateVersions'>[K]}['LaunchTemplateVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LaunchTemplateVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLaunchTemplateVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLaunchTemplateVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LaunchTemplateVersions ?? []) ? (result.LaunchTemplateVersions ?? []) : [result.LaunchTemplateVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLaunchTemplates(params: { [K in keyof ParamsFrom<'describeLaunchTemplates', { next?: string, limit?: number }>]: ParamsFrom<'describeLaunchTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLaunchTemplates'>]-?: ReturnTypeFrom<'describeLaunchTemplates'>[K]}['LaunchTemplates'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LaunchTemplates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLaunchTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLaunchTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LaunchTemplates ?? []) ? (result.LaunchTemplates ?? []) : [result.LaunchTemplates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(params: { [K in keyof ParamsFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations', { next?: string, limit?: number }>]: ParamsFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations'>[K]}['LocalGatewayRouteTableVirtualInterfaceGroupAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayRouteTableVirtualInterfaceGroupAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LocalGatewayRouteTableVirtualInterfaceGroupAssociations ?? []) ? (result.LocalGatewayRouteTableVirtualInterfaceGroupAssociations ?? []) : [result.LocalGatewayRouteTableVirtualInterfaceGroupAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayRouteTableVpcAssociations(params: { [K in keyof ParamsFrom<'describeLocalGatewayRouteTableVpcAssociations', { next?: string, limit?: number }>]: ParamsFrom<'describeLocalGatewayRouteTableVpcAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTableVpcAssociations'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTableVpcAssociations'>[K]}['LocalGatewayRouteTableVpcAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayRouteTableVpcAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayRouteTableVpcAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLocalGatewayRouteTableVpcAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LocalGatewayRouteTableVpcAssociations ?? []) ? (result.LocalGatewayRouteTableVpcAssociations ?? []) : [result.LocalGatewayRouteTableVpcAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayRouteTables(params: { [K in keyof ParamsFrom<'describeLocalGatewayRouteTables', { next?: string, limit?: number }>]: ParamsFrom<'describeLocalGatewayRouteTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTables'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTables'>[K]}['LocalGatewayRouteTables'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayRouteTables"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayRouteTables({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLocalGatewayRouteTables' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LocalGatewayRouteTables ?? []) ? (result.LocalGatewayRouteTables ?? []) : [result.LocalGatewayRouteTables]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayVirtualInterfaceGroups(params: { [K in keyof ParamsFrom<'describeLocalGatewayVirtualInterfaceGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeLocalGatewayVirtualInterfaceGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLocalGatewayVirtualInterfaceGroups'>]-?: ReturnTypeFrom<'describeLocalGatewayVirtualInterfaceGroups'>[K]}['LocalGatewayVirtualInterfaceGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayVirtualInterfaceGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayVirtualInterfaceGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLocalGatewayVirtualInterfaceGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LocalGatewayVirtualInterfaceGroups ?? []) ? (result.LocalGatewayVirtualInterfaceGroups ?? []) : [result.LocalGatewayVirtualInterfaceGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayVirtualInterfaces(params: { [K in keyof ParamsFrom<'describeLocalGatewayVirtualInterfaces', { next?: string, limit?: number }>]: ParamsFrom<'describeLocalGatewayVirtualInterfaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLocalGatewayVirtualInterfaces'>]-?: ReturnTypeFrom<'describeLocalGatewayVirtualInterfaces'>[K]}['LocalGatewayVirtualInterfaces'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayVirtualInterfaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayVirtualInterfaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLocalGatewayVirtualInterfaces' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LocalGatewayVirtualInterfaces ?? []) ? (result.LocalGatewayVirtualInterfaces ?? []) : [result.LocalGatewayVirtualInterfaces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGateways(params: { [K in keyof ParamsFrom<'describeLocalGateways', { next?: string, limit?: number }>]: ParamsFrom<'describeLocalGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLocalGateways'>]-?: ReturnTypeFrom<'describeLocalGateways'>[K]}['LocalGateways'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLocalGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LocalGateways ?? []) ? (result.LocalGateways ?? []) : [result.LocalGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeManagedPrefixLists(params: { [K in keyof ParamsFrom<'describeManagedPrefixLists', { next?: string, limit?: number }>]: ParamsFrom<'describeManagedPrefixLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeManagedPrefixLists'>]-?: ReturnTypeFrom<'describeManagedPrefixLists'>[K]}['PrefixLists'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PrefixLists"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeManagedPrefixLists({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeManagedPrefixLists' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PrefixLists ?? []) ? (result.PrefixLists ?? []) : [result.PrefixLists]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMovingAddresses(params: { [K in keyof ParamsFrom<'describeMovingAddresses', { next?: string, limit?: number }>]: ParamsFrom<'describeMovingAddresses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMovingAddresses'>]-?: ReturnTypeFrom<'describeMovingAddresses'>[K]}['MovingAddressStatuses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MovingAddressStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMovingAddresses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMovingAddresses' })).toString('base64') : undefined;
    const member = (Array.isArray(result.MovingAddressStatuses ?? []) ? (result.MovingAddressStatuses ?? []) : [result.MovingAddressStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNatGateways(params: { [K in keyof ParamsFrom<'describeNatGateways', { next?: string, limit?: number }>]: ParamsFrom<'describeNatGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNatGateways'>]-?: ReturnTypeFrom<'describeNatGateways'>[K]}['NatGateways'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NatGateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNatGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNatGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NatGateways ?? []) ? (result.NatGateways ?? []) : [result.NatGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkAcls(params: { [K in keyof ParamsFrom<'describeNetworkAcls', { next?: string, limit?: number }>]: ParamsFrom<'describeNetworkAcls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNetworkAcls'>]-?: ReturnTypeFrom<'describeNetworkAcls'>[K]}['NetworkAcls'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkAcls"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkAcls({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNetworkAcls' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NetworkAcls ?? []) ? (result.NetworkAcls ?? []) : [result.NetworkAcls]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInsightsAccessScopeAnalyses(params: { [K in keyof ParamsFrom<'describeNetworkInsightsAccessScopeAnalyses', { next?: string, limit?: number }>]: ParamsFrom<'describeNetworkInsightsAccessScopeAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNetworkInsightsAccessScopeAnalyses'>]-?: ReturnTypeFrom<'describeNetworkInsightsAccessScopeAnalyses'>[K]}['NetworkInsightsAccessScopeAnalyses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInsightsAccessScopeAnalyses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInsightsAccessScopeAnalyses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNetworkInsightsAccessScopeAnalyses' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NetworkInsightsAccessScopeAnalyses ?? []) ? (result.NetworkInsightsAccessScopeAnalyses ?? []) : [result.NetworkInsightsAccessScopeAnalyses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInsightsAccessScopes(params: { [K in keyof ParamsFrom<'describeNetworkInsightsAccessScopes', { next?: string, limit?: number }>]: ParamsFrom<'describeNetworkInsightsAccessScopes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNetworkInsightsAccessScopes'>]-?: ReturnTypeFrom<'describeNetworkInsightsAccessScopes'>[K]}['NetworkInsightsAccessScopes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInsightsAccessScopes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInsightsAccessScopes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNetworkInsightsAccessScopes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NetworkInsightsAccessScopes ?? []) ? (result.NetworkInsightsAccessScopes ?? []) : [result.NetworkInsightsAccessScopes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInsightsAnalyses(params: { [K in keyof ParamsFrom<'describeNetworkInsightsAnalyses', { next?: string, limit?: number }>]: ParamsFrom<'describeNetworkInsightsAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNetworkInsightsAnalyses'>]-?: ReturnTypeFrom<'describeNetworkInsightsAnalyses'>[K]}['NetworkInsightsAnalyses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInsightsAnalyses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInsightsAnalyses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNetworkInsightsAnalyses' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NetworkInsightsAnalyses ?? []) ? (result.NetworkInsightsAnalyses ?? []) : [result.NetworkInsightsAnalyses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInsightsPaths(params: { [K in keyof ParamsFrom<'describeNetworkInsightsPaths', { next?: string, limit?: number }>]: ParamsFrom<'describeNetworkInsightsPaths', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNetworkInsightsPaths'>]-?: ReturnTypeFrom<'describeNetworkInsightsPaths'>[K]}['NetworkInsightsPaths'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInsightsPaths"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInsightsPaths({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNetworkInsightsPaths' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NetworkInsightsPaths ?? []) ? (result.NetworkInsightsPaths ?? []) : [result.NetworkInsightsPaths]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeNetworkInterfaceAttribute: (params: RawParamsFrom<'describeNetworkInterfaceAttribute'>) => Promise<ReturnTypeFrom<'describeNetworkInterfaceAttribute'>>  = async params => {
  // undefined
    return this.client.describeNetworkInterfaceAttribute(params as any).promise();
  }

  async describeNetworkInterfacePermissions(params: { [K in keyof ParamsFrom<'describeNetworkInterfacePermissions', { next?: string, limit?: number }>]: ParamsFrom<'describeNetworkInterfacePermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNetworkInterfacePermissions'>]-?: ReturnTypeFrom<'describeNetworkInterfacePermissions'>[K]}['NetworkInterfacePermissions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInterfacePermissions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInterfacePermissions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNetworkInterfacePermissions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NetworkInterfacePermissions ?? []) ? (result.NetworkInterfacePermissions ?? []) : [result.NetworkInterfacePermissions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInterfaces(params: { [K in keyof ParamsFrom<'describeNetworkInterfaces', { next?: string, limit?: number }>]: ParamsFrom<'describeNetworkInterfaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeNetworkInterfaces'>]-?: ReturnTypeFrom<'describeNetworkInterfaces'>[K]}['NetworkInterfaces'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInterfaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInterfaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeNetworkInterfaces' })).toString('base64') : undefined;
    const member = (Array.isArray(result.NetworkInterfaces ?? []) ? (result.NetworkInterfaces ?? []) : [result.NetworkInterfaces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePlacementGroups(params: { [K in keyof ParamsFrom<'describePlacementGroups', {}>]: ParamsFrom<'describePlacementGroups', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePlacementGroups'>]-?: ReturnTypeFrom<'describePlacementGroups'>[K]}['PlacementGroups'], undefined>}> {
    // {"resultKey":"PlacementGroups"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describePlacementGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.PlacementGroups ?? []) ? (result.PlacementGroups ?? []) : [result.PlacementGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePrefixLists(params: { [K in keyof ParamsFrom<'describePrefixLists', { next?: string, limit?: number }>]: ParamsFrom<'describePrefixLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePrefixLists'>]-?: ReturnTypeFrom<'describePrefixLists'>[K]}['PrefixLists'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PrefixLists"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePrefixLists({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePrefixLists' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PrefixLists ?? []) ? (result.PrefixLists ?? []) : [result.PrefixLists]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePrincipalIdFormat(params: { [K in keyof ParamsFrom<'describePrincipalIdFormat', { next?: string, limit?: number }>]: ParamsFrom<'describePrincipalIdFormat', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePrincipalIdFormat'>]-?: ReturnTypeFrom<'describePrincipalIdFormat'>[K]}['Principals'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Principals"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePrincipalIdFormat({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePrincipalIdFormat' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Principals ?? []) ? (result.Principals ?? []) : [result.Principals]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePublicIpv4Pools(params: { [K in keyof ParamsFrom<'describePublicIpv4Pools', { next?: string, limit?: number }>]: ParamsFrom<'describePublicIpv4Pools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePublicIpv4Pools'>]-?: ReturnTypeFrom<'describePublicIpv4Pools'>[K]}['PublicIpv4Pools'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PublicIpv4Pools"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePublicIpv4Pools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePublicIpv4Pools' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PublicIpv4Pools ?? []) ? (result.PublicIpv4Pools ?? []) : [result.PublicIpv4Pools]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRegions(params: { [K in keyof ParamsFrom<'describeRegions', {}>]: ParamsFrom<'describeRegions', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRegions'>]-?: ReturnTypeFrom<'describeRegions'>[K]}['Regions'], undefined>}> {
    // {"resultKey":"Regions"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeRegions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.Regions ?? []) ? (result.Regions ?? []) : [result.Regions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReplaceRootVolumeTasks(params: { [K in keyof ParamsFrom<'describeReplaceRootVolumeTasks', { next?: string, limit?: number }>]: ParamsFrom<'describeReplaceRootVolumeTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReplaceRootVolumeTasks'>]-?: ReturnTypeFrom<'describeReplaceRootVolumeTasks'>[K]}['ReplaceRootVolumeTasks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReplaceRootVolumeTasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeReplaceRootVolumeTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeReplaceRootVolumeTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReplaceRootVolumeTasks ?? []) ? (result.ReplaceRootVolumeTasks ?? []) : [result.ReplaceRootVolumeTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedInstances(params: { [K in keyof ParamsFrom<'describeReservedInstances', {}>]: ParamsFrom<'describeReservedInstances', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedInstances'>]-?: ReturnTypeFrom<'describeReservedInstances'>[K]}['ReservedInstances'], undefined>}> {
    // {"resultKey":"ReservedInstances"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeReservedInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.ReservedInstances ?? []) ? (result.ReservedInstances ?? []) : [result.ReservedInstances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedInstancesListings(params: { [K in keyof ParamsFrom<'describeReservedInstancesListings', {}>]: ParamsFrom<'describeReservedInstancesListings', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedInstancesListings'>]-?: ReturnTypeFrom<'describeReservedInstancesListings'>[K]}['ReservedInstancesListings'], undefined>}> {
    // {"resultKey":"ReservedInstancesListings"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeReservedInstancesListings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.ReservedInstancesListings ?? []) ? (result.ReservedInstancesListings ?? []) : [result.ReservedInstancesListings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedInstancesModifications(params: { [K in keyof ParamsFrom<'describeReservedInstancesModifications', { next?: string }>]: ParamsFrom<'describeReservedInstancesModifications', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedInstancesModifications'>]-?: ReturnTypeFrom<'describeReservedInstancesModifications'>[K]}['ReservedInstancesModifications'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ReservedInstancesModifications"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeReservedInstancesModifications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeReservedInstancesModifications' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedInstancesModifications ?? []) ? (result.ReservedInstancesModifications ?? []) : [result.ReservedInstancesModifications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedInstancesOfferings(params: { [K in keyof ParamsFrom<'describeReservedInstancesOfferings', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedInstancesOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedInstancesOfferings'>]-?: ReturnTypeFrom<'describeReservedInstancesOfferings'>[K]}['ReservedInstancesOfferings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReservedInstancesOfferings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeReservedInstancesOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeReservedInstancesOfferings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedInstancesOfferings ?? []) ? (result.ReservedInstancesOfferings ?? []) : [result.ReservedInstancesOfferings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRouteTables(params: { [K in keyof ParamsFrom<'describeRouteTables', { next?: string, limit?: number }>]: ParamsFrom<'describeRouteTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRouteTables'>]-?: ReturnTypeFrom<'describeRouteTables'>[K]}['RouteTables'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RouteTables"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeRouteTables({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeRouteTables' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RouteTables ?? []) ? (result.RouteTables ?? []) : [result.RouteTables]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScheduledInstanceAvailability(params: { [K in keyof ParamsFrom<'describeScheduledInstanceAvailability', { next?: string, limit?: number }>]: ParamsFrom<'describeScheduledInstanceAvailability', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScheduledInstanceAvailability'>]-?: ReturnTypeFrom<'describeScheduledInstanceAvailability'>[K]}['ScheduledInstanceAvailabilitySet'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledInstanceAvailabilitySet"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScheduledInstanceAvailability({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeScheduledInstanceAvailability' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScheduledInstanceAvailabilitySet ?? []) ? (result.ScheduledInstanceAvailabilitySet ?? []) : [result.ScheduledInstanceAvailabilitySet]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScheduledInstances(params: { [K in keyof ParamsFrom<'describeScheduledInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeScheduledInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScheduledInstances'>]-?: ReturnTypeFrom<'describeScheduledInstances'>[K]}['ScheduledInstanceSet'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledInstanceSet"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScheduledInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeScheduledInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScheduledInstanceSet ?? []) ? (result.ScheduledInstanceSet ?? []) : [result.ScheduledInstanceSet]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeSecurityGroupReferences: (params: RawParamsFrom<'describeSecurityGroupReferences'>) => Promise<ReturnTypeFrom<'describeSecurityGroupReferences'>>  = async params => {
  // undefined
    return this.client.describeSecurityGroupReferences(params as any).promise();
  }

  async describeSecurityGroupRules(params: { [K in keyof ParamsFrom<'describeSecurityGroupRules', { next?: string, limit?: number }>]: ParamsFrom<'describeSecurityGroupRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSecurityGroupRules'>]-?: ReturnTypeFrom<'describeSecurityGroupRules'>[K]}['SecurityGroupRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityGroupRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSecurityGroupRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSecurityGroupRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SecurityGroupRules ?? []) ? (result.SecurityGroupRules ?? []) : [result.SecurityGroupRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSecurityGroups(params: { [K in keyof ParamsFrom<'describeSecurityGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSecurityGroups'>]-?: ReturnTypeFrom<'describeSecurityGroups'>[K]}['SecurityGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSecurityGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSecurityGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SecurityGroups ?? []) ? (result.SecurityGroups ?? []) : [result.SecurityGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeSnapshotAttribute: (params: RawParamsFrom<'describeSnapshotAttribute'>) => Promise<ReturnTypeFrom<'describeSnapshotAttribute'>>  = async params => {
  // undefined
    return this.client.describeSnapshotAttribute(params as any).promise();
  }

  async describeSnapshotTierStatus(params: { [K in keyof ParamsFrom<'describeSnapshotTierStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeSnapshotTierStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSnapshotTierStatus'>]-?: ReturnTypeFrom<'describeSnapshotTierStatus'>[K]}['SnapshotTierStatuses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SnapshotTierStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSnapshotTierStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSnapshotTierStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SnapshotTierStatuses ?? []) ? (result.SnapshotTierStatuses ?? []) : [result.SnapshotTierStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshots(params: { [K in keyof ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSnapshots'>]-?: ReturnTypeFrom<'describeSnapshots'>[K]}['Snapshots'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSnapshots' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Snapshots ?? []) ? (result.Snapshots ?? []) : [result.Snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeSpotDatafeedSubscription: (params: RawParamsFrom<'describeSpotDatafeedSubscription'>) => Promise<ReturnTypeFrom<'describeSpotDatafeedSubscription'>>  = async params => {
  // undefined
    return this.client.describeSpotDatafeedSubscription(params as any).promise();
  }

  describeSpotFleetInstances: (params: RawParamsFrom<'describeSpotFleetInstances'>) => Promise<ReturnTypeFrom<'describeSpotFleetInstances'>>  = async params => {
  // undefined
    return this.client.describeSpotFleetInstances(params as any).promise();
  }

  describeSpotFleetRequestHistory: (params: RawParamsFrom<'describeSpotFleetRequestHistory'>) => Promise<ReturnTypeFrom<'describeSpotFleetRequestHistory'>>  = async params => {
  // undefined
    return this.client.describeSpotFleetRequestHistory(params as any).promise();
  }

  async describeSpotFleetRequests(params: { [K in keyof ParamsFrom<'describeSpotFleetRequests', { next?: string, limit?: number }>]: ParamsFrom<'describeSpotFleetRequests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSpotFleetRequests'>]-?: ReturnTypeFrom<'describeSpotFleetRequests'>[K]}['SpotFleetRequestConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpotFleetRequestConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSpotFleetRequests({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSpotFleetRequests' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SpotFleetRequestConfigs ?? []) ? (result.SpotFleetRequestConfigs ?? []) : [result.SpotFleetRequestConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSpotInstanceRequests(params: { [K in keyof ParamsFrom<'describeSpotInstanceRequests', { next?: string, limit?: number }>]: ParamsFrom<'describeSpotInstanceRequests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSpotInstanceRequests'>]-?: ReturnTypeFrom<'describeSpotInstanceRequests'>[K]}['SpotInstanceRequests'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpotInstanceRequests"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSpotInstanceRequests({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSpotInstanceRequests' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SpotInstanceRequests ?? []) ? (result.SpotInstanceRequests ?? []) : [result.SpotInstanceRequests]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSpotPriceHistory(params: { [K in keyof ParamsFrom<'describeSpotPriceHistory', { next?: string, limit?: number }>]: ParamsFrom<'describeSpotPriceHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSpotPriceHistory'>]-?: ReturnTypeFrom<'describeSpotPriceHistory'>[K]}['SpotPriceHistory'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpotPriceHistory"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSpotPriceHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSpotPriceHistory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SpotPriceHistory ?? []) ? (result.SpotPriceHistory ?? []) : [result.SpotPriceHistory]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStaleSecurityGroups(params: { [K in keyof ParamsFrom<'describeStaleSecurityGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeStaleSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStaleSecurityGroups'>]-?: ReturnTypeFrom<'describeStaleSecurityGroups'>[K]}['StaleSecurityGroupSet'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StaleSecurityGroupSet"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStaleSecurityGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeStaleSecurityGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StaleSecurityGroupSet ?? []) ? (result.StaleSecurityGroupSet ?? []) : [result.StaleSecurityGroupSet]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStoreImageTasks(params: { [K in keyof ParamsFrom<'describeStoreImageTasks', { next?: string, limit?: number }>]: ParamsFrom<'describeStoreImageTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStoreImageTasks'>]-?: ReturnTypeFrom<'describeStoreImageTasks'>[K]}['StoreImageTaskResults'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StoreImageTaskResults"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStoreImageTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeStoreImageTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StoreImageTaskResults ?? []) ? (result.StoreImageTaskResults ?? []) : [result.StoreImageTaskResults]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSubnets(params: { [K in keyof ParamsFrom<'describeSubnets', { next?: string, limit?: number }>]: ParamsFrom<'describeSubnets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSubnets'>]-?: ReturnTypeFrom<'describeSubnets'>[K]}['Subnets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Subnets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSubnets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSubnets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Subnets ?? []) ? (result.Subnets ?? []) : [result.Subnets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTags(params: { [K in keyof ParamsFrom<'describeTags', { next?: string, limit?: number }>]: ParamsFrom<'describeTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTags' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrafficMirrorFilters(params: { [K in keyof ParamsFrom<'describeTrafficMirrorFilters', { next?: string, limit?: number }>]: ParamsFrom<'describeTrafficMirrorFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTrafficMirrorFilters'>]-?: ReturnTypeFrom<'describeTrafficMirrorFilters'>[K]}['TrafficMirrorFilters'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrafficMirrorFilters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTrafficMirrorFilters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTrafficMirrorFilters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TrafficMirrorFilters ?? []) ? (result.TrafficMirrorFilters ?? []) : [result.TrafficMirrorFilters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrafficMirrorSessions(params: { [K in keyof ParamsFrom<'describeTrafficMirrorSessions', { next?: string, limit?: number }>]: ParamsFrom<'describeTrafficMirrorSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTrafficMirrorSessions'>]-?: ReturnTypeFrom<'describeTrafficMirrorSessions'>[K]}['TrafficMirrorSessions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrafficMirrorSessions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTrafficMirrorSessions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTrafficMirrorSessions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TrafficMirrorSessions ?? []) ? (result.TrafficMirrorSessions ?? []) : [result.TrafficMirrorSessions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrafficMirrorTargets(params: { [K in keyof ParamsFrom<'describeTrafficMirrorTargets', { next?: string, limit?: number }>]: ParamsFrom<'describeTrafficMirrorTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTrafficMirrorTargets'>]-?: ReturnTypeFrom<'describeTrafficMirrorTargets'>[K]}['TrafficMirrorTargets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrafficMirrorTargets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTrafficMirrorTargets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTrafficMirrorTargets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TrafficMirrorTargets ?? []) ? (result.TrafficMirrorTargets ?? []) : [result.TrafficMirrorTargets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayAttachments(params: { [K in keyof ParamsFrom<'describeTransitGatewayAttachments', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayAttachments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayAttachments'>[K]}['TransitGatewayAttachments'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayAttachments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayAttachments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayAttachments' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayAttachments ?? []) ? (result.TransitGatewayAttachments ?? []) : [result.TransitGatewayAttachments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayConnectPeers(params: { [K in keyof ParamsFrom<'describeTransitGatewayConnectPeers', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayConnectPeers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayConnectPeers'>]-?: ReturnTypeFrom<'describeTransitGatewayConnectPeers'>[K]}['TransitGatewayConnectPeers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayConnectPeers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayConnectPeers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayConnectPeers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayConnectPeers ?? []) ? (result.TransitGatewayConnectPeers ?? []) : [result.TransitGatewayConnectPeers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayConnects(params: { [K in keyof ParamsFrom<'describeTransitGatewayConnects', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayConnects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayConnects'>]-?: ReturnTypeFrom<'describeTransitGatewayConnects'>[K]}['TransitGatewayConnects'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayConnects"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayConnects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayConnects' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayConnects ?? []) ? (result.TransitGatewayConnects ?? []) : [result.TransitGatewayConnects]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayMulticastDomains(params: { [K in keyof ParamsFrom<'describeTransitGatewayMulticastDomains', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayMulticastDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayMulticastDomains'>]-?: ReturnTypeFrom<'describeTransitGatewayMulticastDomains'>[K]}['TransitGatewayMulticastDomains'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayMulticastDomains"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayMulticastDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayMulticastDomains' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayMulticastDomains ?? []) ? (result.TransitGatewayMulticastDomains ?? []) : [result.TransitGatewayMulticastDomains]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayPeeringAttachments(params: { [K in keyof ParamsFrom<'describeTransitGatewayPeeringAttachments', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayPeeringAttachments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayPeeringAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayPeeringAttachments'>[K]}['TransitGatewayPeeringAttachments'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayPeeringAttachments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayPeeringAttachments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayPeeringAttachments' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayPeeringAttachments ?? []) ? (result.TransitGatewayPeeringAttachments ?? []) : [result.TransitGatewayPeeringAttachments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayPolicyTables(params: { [K in keyof ParamsFrom<'describeTransitGatewayPolicyTables', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayPolicyTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayPolicyTables'>]-?: ReturnTypeFrom<'describeTransitGatewayPolicyTables'>[K]}['TransitGatewayPolicyTables'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayPolicyTables"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayPolicyTables({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayPolicyTables' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayPolicyTables ?? []) ? (result.TransitGatewayPolicyTables ?? []) : [result.TransitGatewayPolicyTables]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayRouteTableAnnouncements(params: { [K in keyof ParamsFrom<'describeTransitGatewayRouteTableAnnouncements', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayRouteTableAnnouncements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayRouteTableAnnouncements'>]-?: ReturnTypeFrom<'describeTransitGatewayRouteTableAnnouncements'>[K]}['TransitGatewayRouteTableAnnouncements'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayRouteTableAnnouncements"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayRouteTableAnnouncements({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayRouteTableAnnouncements' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayRouteTableAnnouncements ?? []) ? (result.TransitGatewayRouteTableAnnouncements ?? []) : [result.TransitGatewayRouteTableAnnouncements]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayRouteTables(params: { [K in keyof ParamsFrom<'describeTransitGatewayRouteTables', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayRouteTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayRouteTables'>]-?: ReturnTypeFrom<'describeTransitGatewayRouteTables'>[K]}['TransitGatewayRouteTables'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayRouteTables"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayRouteTables({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayRouteTables' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayRouteTables ?? []) ? (result.TransitGatewayRouteTables ?? []) : [result.TransitGatewayRouteTables]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayVpcAttachments(params: { [K in keyof ParamsFrom<'describeTransitGatewayVpcAttachments', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGatewayVpcAttachments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGatewayVpcAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayVpcAttachments'>[K]}['TransitGatewayVpcAttachments'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayVpcAttachments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayVpcAttachments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGatewayVpcAttachments' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayVpcAttachments ?? []) ? (result.TransitGatewayVpcAttachments ?? []) : [result.TransitGatewayVpcAttachments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGateways(params: { [K in keyof ParamsFrom<'describeTransitGateways', { next?: string, limit?: number }>]: ParamsFrom<'describeTransitGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTransitGateways'>]-?: ReturnTypeFrom<'describeTransitGateways'>[K]}['TransitGateways'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTransitGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGateways ?? []) ? (result.TransitGateways ?? []) : [result.TransitGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrunkInterfaceAssociations(params: { [K in keyof ParamsFrom<'describeTrunkInterfaceAssociations', { next?: string, limit?: number }>]: ParamsFrom<'describeTrunkInterfaceAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTrunkInterfaceAssociations'>]-?: ReturnTypeFrom<'describeTrunkInterfaceAssociations'>[K]}['InterfaceAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InterfaceAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTrunkInterfaceAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTrunkInterfaceAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InterfaceAssociations ?? []) ? (result.InterfaceAssociations ?? []) : [result.InterfaceAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeVolumeAttribute: (params: RawParamsFrom<'describeVolumeAttribute'>) => Promise<ReturnTypeFrom<'describeVolumeAttribute'>>  = async params => {
  // undefined
    return this.client.describeVolumeAttribute(params as any).promise();
  }

  async describeVolumeStatus(params: { [K in keyof ParamsFrom<'describeVolumeStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeVolumeStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVolumeStatus'>]-?: ReturnTypeFrom<'describeVolumeStatus'>[K]}['VolumeStatuses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VolumeStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVolumeStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVolumeStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VolumeStatuses ?? []) ? (result.VolumeStatuses ?? []) : [result.VolumeStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVolumes(params: { [K in keyof ParamsFrom<'describeVolumes', { next?: string, limit?: number }>]: ParamsFrom<'describeVolumes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVolumes'>]-?: ReturnTypeFrom<'describeVolumes'>[K]}['Volumes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Volumes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVolumes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVolumes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Volumes ?? []) ? (result.Volumes ?? []) : [result.Volumes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVolumesModifications(params: { [K in keyof ParamsFrom<'describeVolumesModifications', { next?: string, limit?: number }>]: ParamsFrom<'describeVolumesModifications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVolumesModifications'>]-?: ReturnTypeFrom<'describeVolumesModifications'>[K]}['VolumesModifications'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VolumesModifications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVolumesModifications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVolumesModifications' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VolumesModifications ?? []) ? (result.VolumesModifications ?? []) : [result.VolumesModifications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeVpcAttribute: (params: RawParamsFrom<'describeVpcAttribute'>) => Promise<ReturnTypeFrom<'describeVpcAttribute'>>  = async params => {
  // undefined
    return this.client.describeVpcAttribute(params as any).promise();
  }

  describeVpcClassicLink: (params: RawParamsFrom<'describeVpcClassicLink'>) => Promise<ReturnTypeFrom<'describeVpcClassicLink'>>  = async params => {
  // undefined
    return this.client.describeVpcClassicLink(params as any).promise();
  }

  async describeVpcClassicLinkDnsSupport(params: { [K in keyof ParamsFrom<'describeVpcClassicLinkDnsSupport', { next?: string, limit?: number }>]: ParamsFrom<'describeVpcClassicLinkDnsSupport', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpcClassicLinkDnsSupport'>]-?: ReturnTypeFrom<'describeVpcClassicLinkDnsSupport'>[K]}['Vpcs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Vpcs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcClassicLinkDnsSupport({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVpcClassicLinkDnsSupport' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Vpcs ?? []) ? (result.Vpcs ?? []) : [result.Vpcs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointConnectionNotifications(params: { [K in keyof ParamsFrom<'describeVpcEndpointConnectionNotifications', { next?: string, limit?: number }>]: ParamsFrom<'describeVpcEndpointConnectionNotifications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpcEndpointConnectionNotifications'>]-?: ReturnTypeFrom<'describeVpcEndpointConnectionNotifications'>[K]}['ConnectionNotificationSet'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConnectionNotificationSet"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpointConnectionNotifications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVpcEndpointConnectionNotifications' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ConnectionNotificationSet ?? []) ? (result.ConnectionNotificationSet ?? []) : [result.ConnectionNotificationSet]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointConnections(params: { [K in keyof ParamsFrom<'describeVpcEndpointConnections', { next?: string, limit?: number }>]: ParamsFrom<'describeVpcEndpointConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpcEndpointConnections'>]-?: ReturnTypeFrom<'describeVpcEndpointConnections'>[K]}['VpcEndpointConnections'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VpcEndpointConnections"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpointConnections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVpcEndpointConnections' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VpcEndpointConnections ?? []) ? (result.VpcEndpointConnections ?? []) : [result.VpcEndpointConnections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointServiceConfigurations(params: { [K in keyof ParamsFrom<'describeVpcEndpointServiceConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'describeVpcEndpointServiceConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpcEndpointServiceConfigurations'>]-?: ReturnTypeFrom<'describeVpcEndpointServiceConfigurations'>[K]}['ServiceConfigurations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServiceConfigurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpointServiceConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVpcEndpointServiceConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ServiceConfigurations ?? []) ? (result.ServiceConfigurations ?? []) : [result.ServiceConfigurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointServicePermissions(params: { [K in keyof ParamsFrom<'describeVpcEndpointServicePermissions', { next?: string, limit?: number }>]: ParamsFrom<'describeVpcEndpointServicePermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpcEndpointServicePermissions'>]-?: ReturnTypeFrom<'describeVpcEndpointServicePermissions'>[K]}['AllowedPrincipals'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AllowedPrincipals"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpointServicePermissions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVpcEndpointServicePermissions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AllowedPrincipals ?? []) ? (result.AllowedPrincipals ?? []) : [result.AllowedPrincipals]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeVpcEndpointServices: (params: RawParamsFrom<'describeVpcEndpointServices'>) => Promise<ReturnTypeFrom<'describeVpcEndpointServices'>>  = async params => {
  // undefined
    return this.client.describeVpcEndpointServices(params as any).promise();
  }

  async describeVpcEndpoints(params: { [K in keyof ParamsFrom<'describeVpcEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'describeVpcEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpcEndpoints'>]-?: ReturnTypeFrom<'describeVpcEndpoints'>[K]}['VpcEndpoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VpcEndpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVpcEndpoints' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VpcEndpoints ?? []) ? (result.VpcEndpoints ?? []) : [result.VpcEndpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcPeeringConnections(params: { [K in keyof ParamsFrom<'describeVpcPeeringConnections', { next?: string, limit?: number }>]: ParamsFrom<'describeVpcPeeringConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpcPeeringConnections'>]-?: ReturnTypeFrom<'describeVpcPeeringConnections'>[K]}['VpcPeeringConnections'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VpcPeeringConnections"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcPeeringConnections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVpcPeeringConnections' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VpcPeeringConnections ?? []) ? (result.VpcPeeringConnections ?? []) : [result.VpcPeeringConnections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcs(params: { [K in keyof ParamsFrom<'describeVpcs', { next?: string, limit?: number }>]: ParamsFrom<'describeVpcs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpcs'>]-?: ReturnTypeFrom<'describeVpcs'>[K]}['Vpcs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Vpcs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeVpcs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Vpcs ?? []) ? (result.Vpcs ?? []) : [result.Vpcs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpnConnections(params: { [K in keyof ParamsFrom<'describeVpnConnections', {}>]: ParamsFrom<'describeVpnConnections', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpnConnections'>]-?: ReturnTypeFrom<'describeVpnConnections'>[K]}['VpnConnections'], undefined>}> {
    // {"resultKey":"VpnConnections"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeVpnConnections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.VpnConnections ?? []) ? (result.VpnConnections ?? []) : [result.VpnConnections]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpnGateways(params: { [K in keyof ParamsFrom<'describeVpnGateways', {}>]: ParamsFrom<'describeVpnGateways', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVpnGateways'>]-?: ReturnTypeFrom<'describeVpnGateways'>[K]}['VpnGateways'], undefined>}> {
    // {"resultKey":"VpnGateways"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeVpnGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.VpnGateways ?? []) ? (result.VpnGateways ?? []) : [result.VpnGateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  detachClassicLinkVpc: (params: RawParamsFrom<'detachClassicLinkVpc'>) => Promise<ReturnTypeFrom<'detachClassicLinkVpc'>>  = async params => {
  // undefined
    return this.client.detachClassicLinkVpc(params as any).promise();
  }

  detachInternetGateway: (params: RawParamsFrom<'detachInternetGateway'>) => Promise<ReturnTypeFrom<'detachInternetGateway'>>  = async params => {
  // undefined
    return this.client.detachInternetGateway(params as any).promise();
  }

  detachNetworkInterface: (params: RawParamsFrom<'detachNetworkInterface'>) => Promise<ReturnTypeFrom<'detachNetworkInterface'>>  = async params => {
  // undefined
    return this.client.detachNetworkInterface(params as any).promise();
  }

  detachVolume: (params: RawParamsFrom<'detachVolume'>) => Promise<ReturnTypeFrom<'detachVolume'>>  = async params => {
  // undefined
    return this.client.detachVolume(params as any).promise();
  }

  detachVpnGateway: (params: RawParamsFrom<'detachVpnGateway'>) => Promise<ReturnTypeFrom<'detachVpnGateway'>>  = async params => {
  // undefined
    return this.client.detachVpnGateway(params as any).promise();
  }

  disableEbsEncryptionByDefault: (params: RawParamsFrom<'disableEbsEncryptionByDefault'>) => Promise<ReturnTypeFrom<'disableEbsEncryptionByDefault'>>  = async params => {
  // undefined
    return this.client.disableEbsEncryptionByDefault(params as any).promise();
  }

  disableFastLaunch: (params: RawParamsFrom<'disableFastLaunch'>) => Promise<ReturnTypeFrom<'disableFastLaunch'>>  = async params => {
  // undefined
    return this.client.disableFastLaunch(params as any).promise();
  }

  disableFastSnapshotRestores: (params: RawParamsFrom<'disableFastSnapshotRestores'>) => Promise<ReturnTypeFrom<'disableFastSnapshotRestores'>>  = async params => {
  // undefined
    return this.client.disableFastSnapshotRestores(params as any).promise();
  }

  disableImageDeprecation: (params: RawParamsFrom<'disableImageDeprecation'>) => Promise<ReturnTypeFrom<'disableImageDeprecation'>>  = async params => {
  // undefined
    return this.client.disableImageDeprecation(params as any).promise();
  }

  disableIpamOrganizationAdminAccount: (params: RawParamsFrom<'disableIpamOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'disableIpamOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.disableIpamOrganizationAdminAccount(params as any).promise();
  }

  disableSerialConsoleAccess: (params: RawParamsFrom<'disableSerialConsoleAccess'>) => Promise<ReturnTypeFrom<'disableSerialConsoleAccess'>>  = async params => {
  // undefined
    return this.client.disableSerialConsoleAccess(params as any).promise();
  }

  disableTransitGatewayRouteTablePropagation: (params: RawParamsFrom<'disableTransitGatewayRouteTablePropagation'>) => Promise<ReturnTypeFrom<'disableTransitGatewayRouteTablePropagation'>>  = async params => {
  // undefined
    return this.client.disableTransitGatewayRouteTablePropagation(params as any).promise();
  }

  disableVgwRoutePropagation: (params: RawParamsFrom<'disableVgwRoutePropagation'>) => Promise<ReturnTypeFrom<'disableVgwRoutePropagation'>>  = async params => {
  // undefined
    return this.client.disableVgwRoutePropagation(params as any).promise();
  }

  disableVpcClassicLink: (params: RawParamsFrom<'disableVpcClassicLink'>) => Promise<ReturnTypeFrom<'disableVpcClassicLink'>>  = async params => {
  // undefined
    return this.client.disableVpcClassicLink(params as any).promise();
  }

  disableVpcClassicLinkDnsSupport: (params: RawParamsFrom<'disableVpcClassicLinkDnsSupport'>) => Promise<ReturnTypeFrom<'disableVpcClassicLinkDnsSupport'>>  = async params => {
  // undefined
    return this.client.disableVpcClassicLinkDnsSupport(params as any).promise();
  }

  disassociateAddress: (params: RawParamsFrom<'disassociateAddress'>) => Promise<ReturnTypeFrom<'disassociateAddress'>>  = async params => {
  // undefined
    return this.client.disassociateAddress(params as any).promise();
  }

  disassociateClientVpnTargetNetwork: (params: RawParamsFrom<'disassociateClientVpnTargetNetwork'>) => Promise<ReturnTypeFrom<'disassociateClientVpnTargetNetwork'>>  = async params => {
  // undefined
    return this.client.disassociateClientVpnTargetNetwork(params as any).promise();
  }

  disassociateEnclaveCertificateIamRole: (params: RawParamsFrom<'disassociateEnclaveCertificateIamRole'>) => Promise<ReturnTypeFrom<'disassociateEnclaveCertificateIamRole'>>  = async params => {
  // undefined
    return this.client.disassociateEnclaveCertificateIamRole(params as any).promise();
  }

  disassociateIamInstanceProfile: (params: RawParamsFrom<'disassociateIamInstanceProfile'>) => Promise<ReturnTypeFrom<'disassociateIamInstanceProfile'>>  = async params => {
  // undefined
    return this.client.disassociateIamInstanceProfile(params as any).promise();
  }

  disassociateInstanceEventWindow: (params: RawParamsFrom<'disassociateInstanceEventWindow'>) => Promise<ReturnTypeFrom<'disassociateInstanceEventWindow'>>  = async params => {
  // undefined
    return this.client.disassociateInstanceEventWindow(params as any).promise();
  }

  disassociateRouteTable: (params: RawParamsFrom<'disassociateRouteTable'>) => Promise<ReturnTypeFrom<'disassociateRouteTable'>>  = async params => {
  // undefined
    return this.client.disassociateRouteTable(params as any).promise();
  }

  disassociateSubnetCidrBlock: (params: RawParamsFrom<'disassociateSubnetCidrBlock'>) => Promise<ReturnTypeFrom<'disassociateSubnetCidrBlock'>>  = async params => {
  // undefined
    return this.client.disassociateSubnetCidrBlock(params as any).promise();
  }

  disassociateTransitGatewayMulticastDomain: (params: RawParamsFrom<'disassociateTransitGatewayMulticastDomain'>) => Promise<ReturnTypeFrom<'disassociateTransitGatewayMulticastDomain'>>  = async params => {
  // undefined
    return this.client.disassociateTransitGatewayMulticastDomain(params as any).promise();
  }

  disassociateTransitGatewayPolicyTable: (params: RawParamsFrom<'disassociateTransitGatewayPolicyTable'>) => Promise<ReturnTypeFrom<'disassociateTransitGatewayPolicyTable'>>  = async params => {
  // undefined
    return this.client.disassociateTransitGatewayPolicyTable(params as any).promise();
  }

  disassociateTransitGatewayRouteTable: (params: RawParamsFrom<'disassociateTransitGatewayRouteTable'>) => Promise<ReturnTypeFrom<'disassociateTransitGatewayRouteTable'>>  = async params => {
  // undefined
    return this.client.disassociateTransitGatewayRouteTable(params as any).promise();
  }

  disassociateTrunkInterface: (params: RawParamsFrom<'disassociateTrunkInterface'>) => Promise<ReturnTypeFrom<'disassociateTrunkInterface'>>  = async params => {
  // undefined
    return this.client.disassociateTrunkInterface(params as any).promise();
  }

  disassociateVpcCidrBlock: (params: RawParamsFrom<'disassociateVpcCidrBlock'>) => Promise<ReturnTypeFrom<'disassociateVpcCidrBlock'>>  = async params => {
  // undefined
    return this.client.disassociateVpcCidrBlock(params as any).promise();
  }

  enableEbsEncryptionByDefault: (params: RawParamsFrom<'enableEbsEncryptionByDefault'>) => Promise<ReturnTypeFrom<'enableEbsEncryptionByDefault'>>  = async params => {
  // undefined
    return this.client.enableEbsEncryptionByDefault(params as any).promise();
  }

  enableFastLaunch: (params: RawParamsFrom<'enableFastLaunch'>) => Promise<ReturnTypeFrom<'enableFastLaunch'>>  = async params => {
  // undefined
    return this.client.enableFastLaunch(params as any).promise();
  }

  enableFastSnapshotRestores: (params: RawParamsFrom<'enableFastSnapshotRestores'>) => Promise<ReturnTypeFrom<'enableFastSnapshotRestores'>>  = async params => {
  // undefined
    return this.client.enableFastSnapshotRestores(params as any).promise();
  }

  enableImageDeprecation: (params: RawParamsFrom<'enableImageDeprecation'>) => Promise<ReturnTypeFrom<'enableImageDeprecation'>>  = async params => {
  // undefined
    return this.client.enableImageDeprecation(params as any).promise();
  }

  enableIpamOrganizationAdminAccount: (params: RawParamsFrom<'enableIpamOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'enableIpamOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.enableIpamOrganizationAdminAccount(params as any).promise();
  }

  enableSerialConsoleAccess: (params: RawParamsFrom<'enableSerialConsoleAccess'>) => Promise<ReturnTypeFrom<'enableSerialConsoleAccess'>>  = async params => {
  // undefined
    return this.client.enableSerialConsoleAccess(params as any).promise();
  }

  enableTransitGatewayRouteTablePropagation: (params: RawParamsFrom<'enableTransitGatewayRouteTablePropagation'>) => Promise<ReturnTypeFrom<'enableTransitGatewayRouteTablePropagation'>>  = async params => {
  // undefined
    return this.client.enableTransitGatewayRouteTablePropagation(params as any).promise();
  }

  enableVgwRoutePropagation: (params: RawParamsFrom<'enableVgwRoutePropagation'>) => Promise<ReturnTypeFrom<'enableVgwRoutePropagation'>>  = async params => {
  // undefined
    return this.client.enableVgwRoutePropagation(params as any).promise();
  }

  enableVolumeIO: (params: RawParamsFrom<'enableVolumeIO'>) => Promise<ReturnTypeFrom<'enableVolumeIO'>>  = async params => {
  // undefined
    return this.client.enableVolumeIO(params as any).promise();
  }

  enableVpcClassicLink: (params: RawParamsFrom<'enableVpcClassicLink'>) => Promise<ReturnTypeFrom<'enableVpcClassicLink'>>  = async params => {
  // undefined
    return this.client.enableVpcClassicLink(params as any).promise();
  }

  enableVpcClassicLinkDnsSupport: (params: RawParamsFrom<'enableVpcClassicLinkDnsSupport'>) => Promise<ReturnTypeFrom<'enableVpcClassicLinkDnsSupport'>>  = async params => {
  // undefined
    return this.client.enableVpcClassicLinkDnsSupport(params as any).promise();
  }

  exportClientVpnClientCertificateRevocationList: (params: RawParamsFrom<'exportClientVpnClientCertificateRevocationList'>) => Promise<ReturnTypeFrom<'exportClientVpnClientCertificateRevocationList'>>  = async params => {
  // undefined
    return this.client.exportClientVpnClientCertificateRevocationList(params as any).promise();
  }

  exportClientVpnClientConfiguration: (params: RawParamsFrom<'exportClientVpnClientConfiguration'>) => Promise<ReturnTypeFrom<'exportClientVpnClientConfiguration'>>  = async params => {
  // undefined
    return this.client.exportClientVpnClientConfiguration(params as any).promise();
  }

  exportImage: (params: RawParamsFrom<'exportImage'>) => Promise<ReturnTypeFrom<'exportImage'>>  = async params => {
  // undefined
    return this.client.exportImage(params as any).promise();
  }

  exportTransitGatewayRoutes: (params: RawParamsFrom<'exportTransitGatewayRoutes'>) => Promise<ReturnTypeFrom<'exportTransitGatewayRoutes'>>  = async params => {
  // undefined
    return this.client.exportTransitGatewayRoutes(params as any).promise();
  }

  getAssociatedEnclaveCertificateIamRoles: (params: RawParamsFrom<'getAssociatedEnclaveCertificateIamRoles'>) => Promise<ReturnTypeFrom<'getAssociatedEnclaveCertificateIamRoles'>>  = async params => {
  // undefined
    return this.client.getAssociatedEnclaveCertificateIamRoles(params as any).promise();
  }

  async getAssociatedIpv6PoolCidrs(params: { [K in keyof ParamsFrom<'getAssociatedIpv6PoolCidrs', { next?: string, limit?: number }>]: ParamsFrom<'getAssociatedIpv6PoolCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getAssociatedIpv6PoolCidrs'>]-?: ReturnTypeFrom<'getAssociatedIpv6PoolCidrs'>[K]}['Ipv6CidrAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Ipv6CidrAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getAssociatedIpv6PoolCidrs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getAssociatedIpv6PoolCidrs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Ipv6CidrAssociations ?? []) ? (result.Ipv6CidrAssociations ?? []) : [result.Ipv6CidrAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getCapacityReservationUsage: (params: RawParamsFrom<'getCapacityReservationUsage'>) => Promise<ReturnTypeFrom<'getCapacityReservationUsage'>>  = async params => {
  // undefined
    return this.client.getCapacityReservationUsage(params as any).promise();
  }

  getCoipPoolUsage: (params: RawParamsFrom<'getCoipPoolUsage'>) => Promise<ReturnTypeFrom<'getCoipPoolUsage'>>  = async params => {
  // undefined
    return this.client.getCoipPoolUsage(params as any).promise();
  }

  getConsoleOutput: (params: RawParamsFrom<'getConsoleOutput'>) => Promise<ReturnTypeFrom<'getConsoleOutput'>>  = async params => {
  // undefined
    return this.client.getConsoleOutput(params as any).promise();
  }

  getConsoleScreenshot: (params: RawParamsFrom<'getConsoleScreenshot'>) => Promise<ReturnTypeFrom<'getConsoleScreenshot'>>  = async params => {
  // undefined
    return this.client.getConsoleScreenshot(params as any).promise();
  }

  getDefaultCreditSpecification: (params: RawParamsFrom<'getDefaultCreditSpecification'>) => Promise<ReturnTypeFrom<'getDefaultCreditSpecification'>>  = async params => {
  // undefined
    return this.client.getDefaultCreditSpecification(params as any).promise();
  }

  getEbsDefaultKmsKeyId: (params: RawParamsFrom<'getEbsDefaultKmsKeyId'>) => Promise<ReturnTypeFrom<'getEbsDefaultKmsKeyId'>>  = async params => {
  // undefined
    return this.client.getEbsDefaultKmsKeyId(params as any).promise();
  }

  getEbsEncryptionByDefault: (params: RawParamsFrom<'getEbsEncryptionByDefault'>) => Promise<ReturnTypeFrom<'getEbsEncryptionByDefault'>>  = async params => {
  // undefined
    return this.client.getEbsEncryptionByDefault(params as any).promise();
  }

  getFlowLogsIntegrationTemplate: (params: RawParamsFrom<'getFlowLogsIntegrationTemplate'>) => Promise<ReturnTypeFrom<'getFlowLogsIntegrationTemplate'>>  = async params => {
  // undefined
    return this.client.getFlowLogsIntegrationTemplate(params as any).promise();
  }

  async getGroupsForCapacityReservation(params: { [K in keyof ParamsFrom<'getGroupsForCapacityReservation', { next?: string, limit?: number }>]: ParamsFrom<'getGroupsForCapacityReservation', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getGroupsForCapacityReservation'>]-?: ReturnTypeFrom<'getGroupsForCapacityReservation'>[K]}['CapacityReservationGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CapacityReservationGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getGroupsForCapacityReservation({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getGroupsForCapacityReservation' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CapacityReservationGroups ?? []) ? (result.CapacityReservationGroups ?? []) : [result.CapacityReservationGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getHostReservationPurchasePreview: (params: RawParamsFrom<'getHostReservationPurchasePreview'>) => Promise<ReturnTypeFrom<'getHostReservationPurchasePreview'>>  = async params => {
  // undefined
    return this.client.getHostReservationPurchasePreview(params as any).promise();
  }

  async getInstanceTypesFromInstanceRequirements(params: { [K in keyof ParamsFrom<'getInstanceTypesFromInstanceRequirements', { next?: string, limit?: number }>]: ParamsFrom<'getInstanceTypesFromInstanceRequirements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getInstanceTypesFromInstanceRequirements'>]-?: ReturnTypeFrom<'getInstanceTypesFromInstanceRequirements'>[K]}['InstanceTypes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceTypes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getInstanceTypesFromInstanceRequirements({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getInstanceTypesFromInstanceRequirements' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceTypes ?? []) ? (result.InstanceTypes ?? []) : [result.InstanceTypes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getInstanceUefiData: (params: RawParamsFrom<'getInstanceUefiData'>) => Promise<ReturnTypeFrom<'getInstanceUefiData'>>  = async params => {
  // undefined
    return this.client.getInstanceUefiData(params as any).promise();
  }

  async getIpamAddressHistory(params: { [K in keyof ParamsFrom<'getIpamAddressHistory', { next?: string, limit?: number }>]: ParamsFrom<'getIpamAddressHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getIpamAddressHistory'>]-?: ReturnTypeFrom<'getIpamAddressHistory'>[K]}['HistoryRecords'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HistoryRecords"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getIpamAddressHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getIpamAddressHistory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.HistoryRecords ?? []) ? (result.HistoryRecords ?? []) : [result.HistoryRecords]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getIpamPoolAllocations(params: { [K in keyof ParamsFrom<'getIpamPoolAllocations', { next?: string, limit?: number }>]: ParamsFrom<'getIpamPoolAllocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getIpamPoolAllocations'>]-?: ReturnTypeFrom<'getIpamPoolAllocations'>[K]}['IpamPoolAllocations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamPoolAllocations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getIpamPoolAllocations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getIpamPoolAllocations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.IpamPoolAllocations ?? []) ? (result.IpamPoolAllocations ?? []) : [result.IpamPoolAllocations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getIpamPoolCidrs(params: { [K in keyof ParamsFrom<'getIpamPoolCidrs', { next?: string, limit?: number }>]: ParamsFrom<'getIpamPoolCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getIpamPoolCidrs'>]-?: ReturnTypeFrom<'getIpamPoolCidrs'>[K]}['IpamPoolCidrs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamPoolCidrs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getIpamPoolCidrs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getIpamPoolCidrs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.IpamPoolCidrs ?? []) ? (result.IpamPoolCidrs ?? []) : [result.IpamPoolCidrs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getIpamResourceCidrs(params: { [K in keyof ParamsFrom<'getIpamResourceCidrs', { next?: string, limit?: number }>]: ParamsFrom<'getIpamResourceCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getIpamResourceCidrs'>]-?: ReturnTypeFrom<'getIpamResourceCidrs'>[K]}['IpamResourceCidrs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamResourceCidrs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getIpamResourceCidrs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getIpamResourceCidrs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.IpamResourceCidrs ?? []) ? (result.IpamResourceCidrs ?? []) : [result.IpamResourceCidrs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getLaunchTemplateData: (params: RawParamsFrom<'getLaunchTemplateData'>) => Promise<ReturnTypeFrom<'getLaunchTemplateData'>>  = async params => {
  // undefined
    return this.client.getLaunchTemplateData(params as any).promise();
  }

  async getManagedPrefixListAssociations(params: { [K in keyof ParamsFrom<'getManagedPrefixListAssociations', { next?: string, limit?: number }>]: ParamsFrom<'getManagedPrefixListAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getManagedPrefixListAssociations'>]-?: ReturnTypeFrom<'getManagedPrefixListAssociations'>[K]}['PrefixListAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PrefixListAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getManagedPrefixListAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getManagedPrefixListAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PrefixListAssociations ?? []) ? (result.PrefixListAssociations ?? []) : [result.PrefixListAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getManagedPrefixListEntries(params: { [K in keyof ParamsFrom<'getManagedPrefixListEntries', { next?: string, limit?: number }>]: ParamsFrom<'getManagedPrefixListEntries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getManagedPrefixListEntries'>]-?: ReturnTypeFrom<'getManagedPrefixListEntries'>[K]}['Entries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getManagedPrefixListEntries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getManagedPrefixListEntries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Entries ?? []) ? (result.Entries ?? []) : [result.Entries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getNetworkInsightsAccessScopeAnalysisFindings: (params: RawParamsFrom<'getNetworkInsightsAccessScopeAnalysisFindings'>) => Promise<ReturnTypeFrom<'getNetworkInsightsAccessScopeAnalysisFindings'>>  = async params => {
  // undefined
    return this.client.getNetworkInsightsAccessScopeAnalysisFindings(params as any).promise();
  }

  getNetworkInsightsAccessScopeContent: (params: RawParamsFrom<'getNetworkInsightsAccessScopeContent'>) => Promise<ReturnTypeFrom<'getNetworkInsightsAccessScopeContent'>>  = async params => {
  // undefined
    return this.client.getNetworkInsightsAccessScopeContent(params as any).promise();
  }

  getPasswordData: (params: RawParamsFrom<'getPasswordData'>) => Promise<ReturnTypeFrom<'getPasswordData'>>  = async params => {
  // undefined
    return this.client.getPasswordData(params as any).promise();
  }

  getReservedInstancesExchangeQuote: (params: RawParamsFrom<'getReservedInstancesExchangeQuote'>) => Promise<ReturnTypeFrom<'getReservedInstancesExchangeQuote'>>  = async params => {
  // undefined
    return this.client.getReservedInstancesExchangeQuote(params as any).promise();
  }

  getSerialConsoleAccessStatus: (params: RawParamsFrom<'getSerialConsoleAccessStatus'>) => Promise<ReturnTypeFrom<'getSerialConsoleAccessStatus'>>  = async params => {
  // undefined
    return this.client.getSerialConsoleAccessStatus(params as any).promise();
  }

  async getSpotPlacementScores(params: { [K in keyof ParamsFrom<'getSpotPlacementScores', { next?: string, limit?: number }>]: ParamsFrom<'getSpotPlacementScores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getSpotPlacementScores'>]-?: ReturnTypeFrom<'getSpotPlacementScores'>[K]}['SpotPlacementScores'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpotPlacementScores"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getSpotPlacementScores({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getSpotPlacementScores' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SpotPlacementScores ?? []) ? (result.SpotPlacementScores ?? []) : [result.SpotPlacementScores]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getSubnetCidrReservations: (params: RawParamsFrom<'getSubnetCidrReservations'>) => Promise<ReturnTypeFrom<'getSubnetCidrReservations'>>  = async params => {
  // undefined
    return this.client.getSubnetCidrReservations(params as any).promise();
  }

  async getTransitGatewayAttachmentPropagations(params: { [K in keyof ParamsFrom<'getTransitGatewayAttachmentPropagations', { next?: string, limit?: number }>]: ParamsFrom<'getTransitGatewayAttachmentPropagations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTransitGatewayAttachmentPropagations'>]-?: ReturnTypeFrom<'getTransitGatewayAttachmentPropagations'>[K]}['TransitGatewayAttachmentPropagations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayAttachmentPropagations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayAttachmentPropagations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTransitGatewayAttachmentPropagations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayAttachmentPropagations ?? []) ? (result.TransitGatewayAttachmentPropagations ?? []) : [result.TransitGatewayAttachmentPropagations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayMulticastDomainAssociations(params: { [K in keyof ParamsFrom<'getTransitGatewayMulticastDomainAssociations', { next?: string, limit?: number }>]: ParamsFrom<'getTransitGatewayMulticastDomainAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTransitGatewayMulticastDomainAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayMulticastDomainAssociations'>[K]}['MulticastDomainAssociations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MulticastDomainAssociations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayMulticastDomainAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTransitGatewayMulticastDomainAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.MulticastDomainAssociations ?? []) ? (result.MulticastDomainAssociations ?? []) : [result.MulticastDomainAssociations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayPolicyTableAssociations(params: { [K in keyof ParamsFrom<'getTransitGatewayPolicyTableAssociations', { next?: string, limit?: number }>]: ParamsFrom<'getTransitGatewayPolicyTableAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTransitGatewayPolicyTableAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayPolicyTableAssociations'>[K]}['Associations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Associations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayPolicyTableAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTransitGatewayPolicyTableAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Associations ?? []) ? (result.Associations ?? []) : [result.Associations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getTransitGatewayPolicyTableEntries: (params: RawParamsFrom<'getTransitGatewayPolicyTableEntries'>) => Promise<ReturnTypeFrom<'getTransitGatewayPolicyTableEntries'>>  = async params => {
  // undefined
    return this.client.getTransitGatewayPolicyTableEntries(params as any).promise();
  }

  async getTransitGatewayPrefixListReferences(params: { [K in keyof ParamsFrom<'getTransitGatewayPrefixListReferences', { next?: string, limit?: number }>]: ParamsFrom<'getTransitGatewayPrefixListReferences', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTransitGatewayPrefixListReferences'>]-?: ReturnTypeFrom<'getTransitGatewayPrefixListReferences'>[K]}['TransitGatewayPrefixListReferences'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayPrefixListReferences"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayPrefixListReferences({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTransitGatewayPrefixListReferences' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayPrefixListReferences ?? []) ? (result.TransitGatewayPrefixListReferences ?? []) : [result.TransitGatewayPrefixListReferences]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayRouteTableAssociations(params: { [K in keyof ParamsFrom<'getTransitGatewayRouteTableAssociations', { next?: string, limit?: number }>]: ParamsFrom<'getTransitGatewayRouteTableAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTransitGatewayRouteTableAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayRouteTableAssociations'>[K]}['Associations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Associations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayRouteTableAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTransitGatewayRouteTableAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Associations ?? []) ? (result.Associations ?? []) : [result.Associations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayRouteTablePropagations(params: { [K in keyof ParamsFrom<'getTransitGatewayRouteTablePropagations', { next?: string, limit?: number }>]: ParamsFrom<'getTransitGatewayRouteTablePropagations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTransitGatewayRouteTablePropagations'>]-?: ReturnTypeFrom<'getTransitGatewayRouteTablePropagations'>[K]}['TransitGatewayRouteTablePropagations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayRouteTablePropagations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayRouteTablePropagations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTransitGatewayRouteTablePropagations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TransitGatewayRouteTablePropagations ?? []) ? (result.TransitGatewayRouteTablePropagations ?? []) : [result.TransitGatewayRouteTablePropagations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getVpnConnectionDeviceSampleConfiguration: (params: RawParamsFrom<'getVpnConnectionDeviceSampleConfiguration'>) => Promise<ReturnTypeFrom<'getVpnConnectionDeviceSampleConfiguration'>>  = async params => {
  // undefined
    return this.client.getVpnConnectionDeviceSampleConfiguration(params as any).promise();
  }

  async getVpnConnectionDeviceTypes(params: { [K in keyof ParamsFrom<'getVpnConnectionDeviceTypes', { next?: string, limit?: number }>]: ParamsFrom<'getVpnConnectionDeviceTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getVpnConnectionDeviceTypes'>]-?: ReturnTypeFrom<'getVpnConnectionDeviceTypes'>[K]}['VpnConnectionDeviceTypes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VpnConnectionDeviceTypes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getVpnConnectionDeviceTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getVpnConnectionDeviceTypes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VpnConnectionDeviceTypes ?? []) ? (result.VpnConnectionDeviceTypes ?? []) : [result.VpnConnectionDeviceTypes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  importClientVpnClientCertificateRevocationList: (params: RawParamsFrom<'importClientVpnClientCertificateRevocationList'>) => Promise<ReturnTypeFrom<'importClientVpnClientCertificateRevocationList'>>  = async params => {
  // undefined
    return this.client.importClientVpnClientCertificateRevocationList(params as any).promise();
  }

  importImage: (params: RawParamsFrom<'importImage'>) => Promise<ReturnTypeFrom<'importImage'>>  = async params => {
  // undefined
    return this.client.importImage(params as any).promise();
  }

  importInstance: (params: RawParamsFrom<'importInstance'>) => Promise<ReturnTypeFrom<'importInstance'>>  = async params => {
  // undefined
    return this.client.importInstance(params as any).promise();
  }

  importKeyPair: (params: RawParamsFrom<'importKeyPair'>) => Promise<ReturnTypeFrom<'importKeyPair'>>  = async params => {
  // undefined
    return this.client.importKeyPair(params as any).promise();
  }

  importSnapshot: (params: RawParamsFrom<'importSnapshot'>) => Promise<ReturnTypeFrom<'importSnapshot'>>  = async params => {
  // undefined
    return this.client.importSnapshot(params as any).promise();
  }

  importVolume: (params: RawParamsFrom<'importVolume'>) => Promise<ReturnTypeFrom<'importVolume'>>  = async params => {
  // undefined
    return this.client.importVolume(params as any).promise();
  }

  async listImagesInRecycleBin(params: { [K in keyof ParamsFrom<'listImagesInRecycleBin', { next?: string, limit?: number }>]: ParamsFrom<'listImagesInRecycleBin', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImagesInRecycleBin'>]-?: ReturnTypeFrom<'listImagesInRecycleBin'>[K]}['Images'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Images"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImagesInRecycleBin({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listImagesInRecycleBin' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Images ?? []) ? (result.Images ?? []) : [result.Images]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSnapshotsInRecycleBin(params: { [K in keyof ParamsFrom<'listSnapshotsInRecycleBin', { next?: string, limit?: number }>]: ParamsFrom<'listSnapshotsInRecycleBin', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSnapshotsInRecycleBin'>]-?: ReturnTypeFrom<'listSnapshotsInRecycleBin'>[K]}['Snapshots'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSnapshotsInRecycleBin({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSnapshotsInRecycleBin' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Snapshots ?? []) ? (result.Snapshots ?? []) : [result.Snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  modifyAddressAttribute: (params: RawParamsFrom<'modifyAddressAttribute'>) => Promise<ReturnTypeFrom<'modifyAddressAttribute'>>  = async params => {
  // undefined
    return this.client.modifyAddressAttribute(params as any).promise();
  }

  modifyAvailabilityZoneGroup: (params: RawParamsFrom<'modifyAvailabilityZoneGroup'>) => Promise<ReturnTypeFrom<'modifyAvailabilityZoneGroup'>>  = async params => {
  // undefined
    return this.client.modifyAvailabilityZoneGroup(params as any).promise();
  }

  modifyCapacityReservation: (params: RawParamsFrom<'modifyCapacityReservation'>) => Promise<ReturnTypeFrom<'modifyCapacityReservation'>>  = async params => {
  // undefined
    return this.client.modifyCapacityReservation(params as any).promise();
  }

  modifyCapacityReservationFleet: (params: RawParamsFrom<'modifyCapacityReservationFleet'>) => Promise<ReturnTypeFrom<'modifyCapacityReservationFleet'>>  = async params => {
  // undefined
    return this.client.modifyCapacityReservationFleet(params as any).promise();
  }

  modifyClientVpnEndpoint: (params: RawParamsFrom<'modifyClientVpnEndpoint'>) => Promise<ReturnTypeFrom<'modifyClientVpnEndpoint'>>  = async params => {
  // undefined
    return this.client.modifyClientVpnEndpoint(params as any).promise();
  }

  modifyDefaultCreditSpecification: (params: RawParamsFrom<'modifyDefaultCreditSpecification'>) => Promise<ReturnTypeFrom<'modifyDefaultCreditSpecification'>>  = async params => {
  // undefined
    return this.client.modifyDefaultCreditSpecification(params as any).promise();
  }

  modifyEbsDefaultKmsKeyId: (params: RawParamsFrom<'modifyEbsDefaultKmsKeyId'>) => Promise<ReturnTypeFrom<'modifyEbsDefaultKmsKeyId'>>  = async params => {
  // undefined
    return this.client.modifyEbsDefaultKmsKeyId(params as any).promise();
  }

  modifyFleet: (params: RawParamsFrom<'modifyFleet'>) => Promise<ReturnTypeFrom<'modifyFleet'>>  = async params => {
  // undefined
    return this.client.modifyFleet(params as any).promise();
  }

  modifyFpgaImageAttribute: (params: RawParamsFrom<'modifyFpgaImageAttribute'>) => Promise<ReturnTypeFrom<'modifyFpgaImageAttribute'>>  = async params => {
  // undefined
    return this.client.modifyFpgaImageAttribute(params as any).promise();
  }

  modifyHosts: (params: RawParamsFrom<'modifyHosts'>) => Promise<ReturnTypeFrom<'modifyHosts'>>  = async params => {
  // undefined
    return this.client.modifyHosts(params as any).promise();
  }

  modifyIdFormat: (params: RawParamsFrom<'modifyIdFormat'>) => Promise<ReturnTypeFrom<'modifyIdFormat'>>  = async params => {
  // undefined
    return this.client.modifyIdFormat(params as any).promise();
  }

  modifyIdentityIdFormat: (params: RawParamsFrom<'modifyIdentityIdFormat'>) => Promise<ReturnTypeFrom<'modifyIdentityIdFormat'>>  = async params => {
  // undefined
    return this.client.modifyIdentityIdFormat(params as any).promise();
  }

  modifyImageAttribute: (params: RawParamsFrom<'modifyImageAttribute'>) => Promise<ReturnTypeFrom<'modifyImageAttribute'>>  = async params => {
  // undefined
    return this.client.modifyImageAttribute(params as any).promise();
  }

  modifyInstanceAttribute: (params: RawParamsFrom<'modifyInstanceAttribute'>) => Promise<ReturnTypeFrom<'modifyInstanceAttribute'>>  = async params => {
  // undefined
    return this.client.modifyInstanceAttribute(params as any).promise();
  }

  modifyInstanceCapacityReservationAttributes: (params: RawParamsFrom<'modifyInstanceCapacityReservationAttributes'>) => Promise<ReturnTypeFrom<'modifyInstanceCapacityReservationAttributes'>>  = async params => {
  // undefined
    return this.client.modifyInstanceCapacityReservationAttributes(params as any).promise();
  }

  modifyInstanceCreditSpecification: (params: RawParamsFrom<'modifyInstanceCreditSpecification'>) => Promise<ReturnTypeFrom<'modifyInstanceCreditSpecification'>>  = async params => {
  // undefined
    return this.client.modifyInstanceCreditSpecification(params as any).promise();
  }

  modifyInstanceEventStartTime: (params: RawParamsFrom<'modifyInstanceEventStartTime'>) => Promise<ReturnTypeFrom<'modifyInstanceEventStartTime'>>  = async params => {
  // undefined
    return this.client.modifyInstanceEventStartTime(params as any).promise();
  }

  modifyInstanceEventWindow: (params: RawParamsFrom<'modifyInstanceEventWindow'>) => Promise<ReturnTypeFrom<'modifyInstanceEventWindow'>>  = async params => {
  // undefined
    return this.client.modifyInstanceEventWindow(params as any).promise();
  }

  modifyInstanceMaintenanceOptions: (params: RawParamsFrom<'modifyInstanceMaintenanceOptions'>) => Promise<ReturnTypeFrom<'modifyInstanceMaintenanceOptions'>>  = async params => {
  // undefined
    return this.client.modifyInstanceMaintenanceOptions(params as any).promise();
  }

  modifyInstanceMetadataOptions: (params: RawParamsFrom<'modifyInstanceMetadataOptions'>) => Promise<ReturnTypeFrom<'modifyInstanceMetadataOptions'>>  = async params => {
  // undefined
    return this.client.modifyInstanceMetadataOptions(params as any).promise();
  }

  modifyInstancePlacement: (params: RawParamsFrom<'modifyInstancePlacement'>) => Promise<ReturnTypeFrom<'modifyInstancePlacement'>>  = async params => {
  // undefined
    return this.client.modifyInstancePlacement(params as any).promise();
  }

  modifyIpam: (params: RawParamsFrom<'modifyIpam'>) => Promise<ReturnTypeFrom<'modifyIpam'>>  = async params => {
  // undefined
    return this.client.modifyIpam(params as any).promise();
  }

  modifyIpamPool: (params: RawParamsFrom<'modifyIpamPool'>) => Promise<ReturnTypeFrom<'modifyIpamPool'>>  = async params => {
  // undefined
    return this.client.modifyIpamPool(params as any).promise();
  }

  modifyIpamResourceCidr: (params: RawParamsFrom<'modifyIpamResourceCidr'>) => Promise<ReturnTypeFrom<'modifyIpamResourceCidr'>>  = async params => {
  // undefined
    return this.client.modifyIpamResourceCidr(params as any).promise();
  }

  modifyIpamScope: (params: RawParamsFrom<'modifyIpamScope'>) => Promise<ReturnTypeFrom<'modifyIpamScope'>>  = async params => {
  // undefined
    return this.client.modifyIpamScope(params as any).promise();
  }

  modifyLaunchTemplate: (params: RawParamsFrom<'modifyLaunchTemplate'>) => Promise<ReturnTypeFrom<'modifyLaunchTemplate'>>  = async params => {
  // undefined
    return this.client.modifyLaunchTemplate(params as any).promise();
  }

  modifyLocalGatewayRoute: (params: RawParamsFrom<'modifyLocalGatewayRoute'>) => Promise<ReturnTypeFrom<'modifyLocalGatewayRoute'>>  = async params => {
  // undefined
    return this.client.modifyLocalGatewayRoute(params as any).promise();
  }

  modifyManagedPrefixList: (params: RawParamsFrom<'modifyManagedPrefixList'>) => Promise<ReturnTypeFrom<'modifyManagedPrefixList'>>  = async params => {
  // undefined
    return this.client.modifyManagedPrefixList(params as any).promise();
  }

  modifyNetworkInterfaceAttribute: (params: RawParamsFrom<'modifyNetworkInterfaceAttribute'>) => Promise<ReturnTypeFrom<'modifyNetworkInterfaceAttribute'>>  = async params => {
  // undefined
    return this.client.modifyNetworkInterfaceAttribute(params as any).promise();
  }

  modifyPrivateDnsNameOptions: (params: RawParamsFrom<'modifyPrivateDnsNameOptions'>) => Promise<ReturnTypeFrom<'modifyPrivateDnsNameOptions'>>  = async params => {
  // undefined
    return this.client.modifyPrivateDnsNameOptions(params as any).promise();
  }

  modifyReservedInstances: (params: RawParamsFrom<'modifyReservedInstances'>) => Promise<ReturnTypeFrom<'modifyReservedInstances'>>  = async params => {
  // undefined
    return this.client.modifyReservedInstances(params as any).promise();
  }

  modifySecurityGroupRules: (params: RawParamsFrom<'modifySecurityGroupRules'>) => Promise<ReturnTypeFrom<'modifySecurityGroupRules'>>  = async params => {
  // undefined
    return this.client.modifySecurityGroupRules(params as any).promise();
  }

  modifySnapshotAttribute: (params: RawParamsFrom<'modifySnapshotAttribute'>) => Promise<ReturnTypeFrom<'modifySnapshotAttribute'>>  = async params => {
  // undefined
    return this.client.modifySnapshotAttribute(params as any).promise();
  }

  modifySnapshotTier: (params: RawParamsFrom<'modifySnapshotTier'>) => Promise<ReturnTypeFrom<'modifySnapshotTier'>>  = async params => {
  // undefined
    return this.client.modifySnapshotTier(params as any).promise();
  }

  modifySpotFleetRequest: (params: RawParamsFrom<'modifySpotFleetRequest'>) => Promise<ReturnTypeFrom<'modifySpotFleetRequest'>>  = async params => {
  // undefined
    return this.client.modifySpotFleetRequest(params as any).promise();
  }

  modifySubnetAttribute: (params: RawParamsFrom<'modifySubnetAttribute'>) => Promise<ReturnTypeFrom<'modifySubnetAttribute'>>  = async params => {
  // undefined
    return this.client.modifySubnetAttribute(params as any).promise();
  }

  modifyTrafficMirrorFilterNetworkServices: (params: RawParamsFrom<'modifyTrafficMirrorFilterNetworkServices'>) => Promise<ReturnTypeFrom<'modifyTrafficMirrorFilterNetworkServices'>>  = async params => {
  // undefined
    return this.client.modifyTrafficMirrorFilterNetworkServices(params as any).promise();
  }

  modifyTrafficMirrorFilterRule: (params: RawParamsFrom<'modifyTrafficMirrorFilterRule'>) => Promise<ReturnTypeFrom<'modifyTrafficMirrorFilterRule'>>  = async params => {
  // undefined
    return this.client.modifyTrafficMirrorFilterRule(params as any).promise();
  }

  modifyTrafficMirrorSession: (params: RawParamsFrom<'modifyTrafficMirrorSession'>) => Promise<ReturnTypeFrom<'modifyTrafficMirrorSession'>>  = async params => {
  // undefined
    return this.client.modifyTrafficMirrorSession(params as any).promise();
  }

  modifyTransitGateway: (params: RawParamsFrom<'modifyTransitGateway'>) => Promise<ReturnTypeFrom<'modifyTransitGateway'>>  = async params => {
  // undefined
    return this.client.modifyTransitGateway(params as any).promise();
  }

  modifyTransitGatewayPrefixListReference: (params: RawParamsFrom<'modifyTransitGatewayPrefixListReference'>) => Promise<ReturnTypeFrom<'modifyTransitGatewayPrefixListReference'>>  = async params => {
  // undefined
    return this.client.modifyTransitGatewayPrefixListReference(params as any).promise();
  }

  modifyTransitGatewayVpcAttachment: (params: RawParamsFrom<'modifyTransitGatewayVpcAttachment'>) => Promise<ReturnTypeFrom<'modifyTransitGatewayVpcAttachment'>>  = async params => {
  // undefined
    return this.client.modifyTransitGatewayVpcAttachment(params as any).promise();
  }

  modifyVolume: (params: RawParamsFrom<'modifyVolume'>) => Promise<ReturnTypeFrom<'modifyVolume'>>  = async params => {
  // undefined
    return this.client.modifyVolume(params as any).promise();
  }

  modifyVolumeAttribute: (params: RawParamsFrom<'modifyVolumeAttribute'>) => Promise<ReturnTypeFrom<'modifyVolumeAttribute'>>  = async params => {
  // undefined
    return this.client.modifyVolumeAttribute(params as any).promise();
  }

  modifyVpcAttribute: (params: RawParamsFrom<'modifyVpcAttribute'>) => Promise<ReturnTypeFrom<'modifyVpcAttribute'>>  = async params => {
  // undefined
    return this.client.modifyVpcAttribute(params as any).promise();
  }

  modifyVpcEndpoint: (params: RawParamsFrom<'modifyVpcEndpoint'>) => Promise<ReturnTypeFrom<'modifyVpcEndpoint'>>  = async params => {
  // undefined
    return this.client.modifyVpcEndpoint(params as any).promise();
  }

  modifyVpcEndpointConnectionNotification: (params: RawParamsFrom<'modifyVpcEndpointConnectionNotification'>) => Promise<ReturnTypeFrom<'modifyVpcEndpointConnectionNotification'>>  = async params => {
  // undefined
    return this.client.modifyVpcEndpointConnectionNotification(params as any).promise();
  }

  modifyVpcEndpointServiceConfiguration: (params: RawParamsFrom<'modifyVpcEndpointServiceConfiguration'>) => Promise<ReturnTypeFrom<'modifyVpcEndpointServiceConfiguration'>>  = async params => {
  // undefined
    return this.client.modifyVpcEndpointServiceConfiguration(params as any).promise();
  }

  modifyVpcEndpointServicePayerResponsibility: (params: RawParamsFrom<'modifyVpcEndpointServicePayerResponsibility'>) => Promise<ReturnTypeFrom<'modifyVpcEndpointServicePayerResponsibility'>>  = async params => {
  // undefined
    return this.client.modifyVpcEndpointServicePayerResponsibility(params as any).promise();
  }

  modifyVpcEndpointServicePermissions: (params: RawParamsFrom<'modifyVpcEndpointServicePermissions'>) => Promise<ReturnTypeFrom<'modifyVpcEndpointServicePermissions'>>  = async params => {
  // undefined
    return this.client.modifyVpcEndpointServicePermissions(params as any).promise();
  }

  modifyVpcPeeringConnectionOptions: (params: RawParamsFrom<'modifyVpcPeeringConnectionOptions'>) => Promise<ReturnTypeFrom<'modifyVpcPeeringConnectionOptions'>>  = async params => {
  // undefined
    return this.client.modifyVpcPeeringConnectionOptions(params as any).promise();
  }

  modifyVpcTenancy: (params: RawParamsFrom<'modifyVpcTenancy'>) => Promise<ReturnTypeFrom<'modifyVpcTenancy'>>  = async params => {
  // undefined
    return this.client.modifyVpcTenancy(params as any).promise();
  }

  modifyVpnConnection: (params: RawParamsFrom<'modifyVpnConnection'>) => Promise<ReturnTypeFrom<'modifyVpnConnection'>>  = async params => {
  // undefined
    return this.client.modifyVpnConnection(params as any).promise();
  }

  modifyVpnConnectionOptions: (params: RawParamsFrom<'modifyVpnConnectionOptions'>) => Promise<ReturnTypeFrom<'modifyVpnConnectionOptions'>>  = async params => {
  // undefined
    return this.client.modifyVpnConnectionOptions(params as any).promise();
  }

  modifyVpnTunnelCertificate: (params: RawParamsFrom<'modifyVpnTunnelCertificate'>) => Promise<ReturnTypeFrom<'modifyVpnTunnelCertificate'>>  = async params => {
  // undefined
    return this.client.modifyVpnTunnelCertificate(params as any).promise();
  }

  modifyVpnTunnelOptions: (params: RawParamsFrom<'modifyVpnTunnelOptions'>) => Promise<ReturnTypeFrom<'modifyVpnTunnelOptions'>>  = async params => {
  // undefined
    return this.client.modifyVpnTunnelOptions(params as any).promise();
  }

  monitorInstances: (params: RawParamsFrom<'monitorInstances'>) => Promise<ReturnTypeFrom<'monitorInstances'>>  = async params => {
  // undefined
    return this.client.monitorInstances(params as any).promise();
  }

  moveAddressToVpc: (params: RawParamsFrom<'moveAddressToVpc'>) => Promise<ReturnTypeFrom<'moveAddressToVpc'>>  = async params => {
  // undefined
    return this.client.moveAddressToVpc(params as any).promise();
  }

  moveByoipCidrToIpam: (params: RawParamsFrom<'moveByoipCidrToIpam'>) => Promise<ReturnTypeFrom<'moveByoipCidrToIpam'>>  = async params => {
  // undefined
    return this.client.moveByoipCidrToIpam(params as any).promise();
  }

  provisionByoipCidr: (params: RawParamsFrom<'provisionByoipCidr'>) => Promise<ReturnTypeFrom<'provisionByoipCidr'>>  = async params => {
  // undefined
    return this.client.provisionByoipCidr(params as any).promise();
  }

  provisionIpamPoolCidr: (params: RawParamsFrom<'provisionIpamPoolCidr'>) => Promise<ReturnTypeFrom<'provisionIpamPoolCidr'>>  = async params => {
  // undefined
    return this.client.provisionIpamPoolCidr(params as any).promise();
  }

  provisionPublicIpv4PoolCidr: (params: RawParamsFrom<'provisionPublicIpv4PoolCidr'>) => Promise<ReturnTypeFrom<'provisionPublicIpv4PoolCidr'>>  = async params => {
  // undefined
    return this.client.provisionPublicIpv4PoolCidr(params as any).promise();
  }

  purchaseHostReservation: (params: RawParamsFrom<'purchaseHostReservation'>) => Promise<ReturnTypeFrom<'purchaseHostReservation'>>  = async params => {
  // undefined
    return this.client.purchaseHostReservation(params as any).promise();
  }

  purchaseReservedInstancesOffering: (params: RawParamsFrom<'purchaseReservedInstancesOffering'>) => Promise<ReturnTypeFrom<'purchaseReservedInstancesOffering'>>  = async params => {
  // undefined
    return this.client.purchaseReservedInstancesOffering(params as any).promise();
  }

  purchaseScheduledInstances: (params: RawParamsFrom<'purchaseScheduledInstances'>) => Promise<ReturnTypeFrom<'purchaseScheduledInstances'>>  = async params => {
  // undefined
    return this.client.purchaseScheduledInstances(params as any).promise();
  }

  rebootInstances: (params: RawParamsFrom<'rebootInstances'>) => Promise<ReturnTypeFrom<'rebootInstances'>>  = async params => {
  // undefined
    return this.client.rebootInstances(params as any).promise();
  }

  registerImage: (params: RawParamsFrom<'registerImage'>) => Promise<ReturnTypeFrom<'registerImage'>>  = async params => {
  // undefined
    return this.client.registerImage(params as any).promise();
  }

  registerInstanceEventNotificationAttributes: (params: RawParamsFrom<'registerInstanceEventNotificationAttributes'>) => Promise<ReturnTypeFrom<'registerInstanceEventNotificationAttributes'>>  = async params => {
  // undefined
    return this.client.registerInstanceEventNotificationAttributes(params as any).promise();
  }

  registerTransitGatewayMulticastGroupMembers: (params: RawParamsFrom<'registerTransitGatewayMulticastGroupMembers'>) => Promise<ReturnTypeFrom<'registerTransitGatewayMulticastGroupMembers'>>  = async params => {
  // undefined
    return this.client.registerTransitGatewayMulticastGroupMembers(params as any).promise();
  }

  registerTransitGatewayMulticastGroupSources: (params: RawParamsFrom<'registerTransitGatewayMulticastGroupSources'>) => Promise<ReturnTypeFrom<'registerTransitGatewayMulticastGroupSources'>>  = async params => {
  // undefined
    return this.client.registerTransitGatewayMulticastGroupSources(params as any).promise();
  }

  rejectTransitGatewayMulticastDomainAssociations: (params: RawParamsFrom<'rejectTransitGatewayMulticastDomainAssociations'>) => Promise<ReturnTypeFrom<'rejectTransitGatewayMulticastDomainAssociations'>>  = async params => {
  // undefined
    return this.client.rejectTransitGatewayMulticastDomainAssociations(params as any).promise();
  }

  rejectTransitGatewayPeeringAttachment: (params: RawParamsFrom<'rejectTransitGatewayPeeringAttachment'>) => Promise<ReturnTypeFrom<'rejectTransitGatewayPeeringAttachment'>>  = async params => {
  // undefined
    return this.client.rejectTransitGatewayPeeringAttachment(params as any).promise();
  }

  rejectTransitGatewayVpcAttachment: (params: RawParamsFrom<'rejectTransitGatewayVpcAttachment'>) => Promise<ReturnTypeFrom<'rejectTransitGatewayVpcAttachment'>>  = async params => {
  // undefined
    return this.client.rejectTransitGatewayVpcAttachment(params as any).promise();
  }

  rejectVpcEndpointConnections: (params: RawParamsFrom<'rejectVpcEndpointConnections'>) => Promise<ReturnTypeFrom<'rejectVpcEndpointConnections'>>  = async params => {
  // undefined
    return this.client.rejectVpcEndpointConnections(params as any).promise();
  }

  rejectVpcPeeringConnection: (params: RawParamsFrom<'rejectVpcPeeringConnection'>) => Promise<ReturnTypeFrom<'rejectVpcPeeringConnection'>>  = async params => {
  // undefined
    return this.client.rejectVpcPeeringConnection(params as any).promise();
  }

  releaseAddress: (params: RawParamsFrom<'releaseAddress'>) => Promise<ReturnTypeFrom<'releaseAddress'>>  = async params => {
  // undefined
    return this.client.releaseAddress(params as any).promise();
  }

  releaseHosts: (params: RawParamsFrom<'releaseHosts'>) => Promise<ReturnTypeFrom<'releaseHosts'>>  = async params => {
  // undefined
    return this.client.releaseHosts(params as any).promise();
  }

  releaseIpamPoolAllocation: (params: RawParamsFrom<'releaseIpamPoolAllocation'>) => Promise<ReturnTypeFrom<'releaseIpamPoolAllocation'>>  = async params => {
  // undefined
    return this.client.releaseIpamPoolAllocation(params as any).promise();
  }

  replaceIamInstanceProfileAssociation: (params: RawParamsFrom<'replaceIamInstanceProfileAssociation'>) => Promise<ReturnTypeFrom<'replaceIamInstanceProfileAssociation'>>  = async params => {
  // undefined
    return this.client.replaceIamInstanceProfileAssociation(params as any).promise();
  }

  replaceNetworkAclAssociation: (params: RawParamsFrom<'replaceNetworkAclAssociation'>) => Promise<ReturnTypeFrom<'replaceNetworkAclAssociation'>>  = async params => {
  // undefined
    return this.client.replaceNetworkAclAssociation(params as any).promise();
  }

  replaceNetworkAclEntry: (params: RawParamsFrom<'replaceNetworkAclEntry'>) => Promise<ReturnTypeFrom<'replaceNetworkAclEntry'>>  = async params => {
  // undefined
    return this.client.replaceNetworkAclEntry(params as any).promise();
  }

  replaceRoute: (params: RawParamsFrom<'replaceRoute'>) => Promise<ReturnTypeFrom<'replaceRoute'>>  = async params => {
  // undefined
    return this.client.replaceRoute(params as any).promise();
  }

  replaceRouteTableAssociation: (params: RawParamsFrom<'replaceRouteTableAssociation'>) => Promise<ReturnTypeFrom<'replaceRouteTableAssociation'>>  = async params => {
  // undefined
    return this.client.replaceRouteTableAssociation(params as any).promise();
  }

  replaceTransitGatewayRoute: (params: RawParamsFrom<'replaceTransitGatewayRoute'>) => Promise<ReturnTypeFrom<'replaceTransitGatewayRoute'>>  = async params => {
  // undefined
    return this.client.replaceTransitGatewayRoute(params as any).promise();
  }

  reportInstanceStatus: (params: RawParamsFrom<'reportInstanceStatus'>) => Promise<ReturnTypeFrom<'reportInstanceStatus'>>  = async params => {
  // undefined
    return this.client.reportInstanceStatus(params as any).promise();
  }

  requestSpotFleet: (params: RawParamsFrom<'requestSpotFleet'>) => Promise<ReturnTypeFrom<'requestSpotFleet'>>  = async params => {
  // undefined
    return this.client.requestSpotFleet(params as any).promise();
  }

  requestSpotInstances: (params: RawParamsFrom<'requestSpotInstances'>) => Promise<ReturnTypeFrom<'requestSpotInstances'>>  = async params => {
  // undefined
    return this.client.requestSpotInstances(params as any).promise();
  }

  resetAddressAttribute: (params: RawParamsFrom<'resetAddressAttribute'>) => Promise<ReturnTypeFrom<'resetAddressAttribute'>>  = async params => {
  // undefined
    return this.client.resetAddressAttribute(params as any).promise();
  }

  resetEbsDefaultKmsKeyId: (params: RawParamsFrom<'resetEbsDefaultKmsKeyId'>) => Promise<ReturnTypeFrom<'resetEbsDefaultKmsKeyId'>>  = async params => {
  // undefined
    return this.client.resetEbsDefaultKmsKeyId(params as any).promise();
  }

  resetFpgaImageAttribute: (params: RawParamsFrom<'resetFpgaImageAttribute'>) => Promise<ReturnTypeFrom<'resetFpgaImageAttribute'>>  = async params => {
  // undefined
    return this.client.resetFpgaImageAttribute(params as any).promise();
  }

  resetImageAttribute: (params: RawParamsFrom<'resetImageAttribute'>) => Promise<ReturnTypeFrom<'resetImageAttribute'>>  = async params => {
  // undefined
    return this.client.resetImageAttribute(params as any).promise();
  }

  resetInstanceAttribute: (params: RawParamsFrom<'resetInstanceAttribute'>) => Promise<ReturnTypeFrom<'resetInstanceAttribute'>>  = async params => {
  // undefined
    return this.client.resetInstanceAttribute(params as any).promise();
  }

  resetNetworkInterfaceAttribute: (params: RawParamsFrom<'resetNetworkInterfaceAttribute'>) => Promise<ReturnTypeFrom<'resetNetworkInterfaceAttribute'>>  = async params => {
  // undefined
    return this.client.resetNetworkInterfaceAttribute(params as any).promise();
  }

  resetSnapshotAttribute: (params: RawParamsFrom<'resetSnapshotAttribute'>) => Promise<ReturnTypeFrom<'resetSnapshotAttribute'>>  = async params => {
  // undefined
    return this.client.resetSnapshotAttribute(params as any).promise();
  }

  restoreAddressToClassic: (params: RawParamsFrom<'restoreAddressToClassic'>) => Promise<ReturnTypeFrom<'restoreAddressToClassic'>>  = async params => {
  // undefined
    return this.client.restoreAddressToClassic(params as any).promise();
  }

  restoreImageFromRecycleBin: (params: RawParamsFrom<'restoreImageFromRecycleBin'>) => Promise<ReturnTypeFrom<'restoreImageFromRecycleBin'>>  = async params => {
  // undefined
    return this.client.restoreImageFromRecycleBin(params as any).promise();
  }

  restoreManagedPrefixListVersion: (params: RawParamsFrom<'restoreManagedPrefixListVersion'>) => Promise<ReturnTypeFrom<'restoreManagedPrefixListVersion'>>  = async params => {
  // undefined
    return this.client.restoreManagedPrefixListVersion(params as any).promise();
  }

  restoreSnapshotFromRecycleBin: (params: RawParamsFrom<'restoreSnapshotFromRecycleBin'>) => Promise<ReturnTypeFrom<'restoreSnapshotFromRecycleBin'>>  = async params => {
  // undefined
    return this.client.restoreSnapshotFromRecycleBin(params as any).promise();
  }

  restoreSnapshotTier: (params: RawParamsFrom<'restoreSnapshotTier'>) => Promise<ReturnTypeFrom<'restoreSnapshotTier'>>  = async params => {
  // undefined
    return this.client.restoreSnapshotTier(params as any).promise();
  }

  revokeClientVpnIngress: (params: RawParamsFrom<'revokeClientVpnIngress'>) => Promise<ReturnTypeFrom<'revokeClientVpnIngress'>>  = async params => {
  // undefined
    return this.client.revokeClientVpnIngress(params as any).promise();
  }

  revokeSecurityGroupEgress: (params: RawParamsFrom<'revokeSecurityGroupEgress'>) => Promise<ReturnTypeFrom<'revokeSecurityGroupEgress'>>  = async params => {
  // undefined
    return this.client.revokeSecurityGroupEgress(params as any).promise();
  }

  revokeSecurityGroupIngress: (params: RawParamsFrom<'revokeSecurityGroupIngress'>) => Promise<ReturnTypeFrom<'revokeSecurityGroupIngress'>>  = async params => {
  // undefined
    return this.client.revokeSecurityGroupIngress(params as any).promise();
  }

  runInstances: (params: RawParamsFrom<'runInstances'>) => Promise<ReturnTypeFrom<'runInstances'>>  = async params => {
  // undefined
    return this.client.runInstances(params as any).promise();
  }

  runScheduledInstances: (params: RawParamsFrom<'runScheduledInstances'>) => Promise<ReturnTypeFrom<'runScheduledInstances'>>  = async params => {
  // undefined
    return this.client.runScheduledInstances(params as any).promise();
  }

  async searchLocalGatewayRoutes(params: { [K in keyof ParamsFrom<'searchLocalGatewayRoutes', { next?: string, limit?: number }>]: ParamsFrom<'searchLocalGatewayRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchLocalGatewayRoutes'>]-?: ReturnTypeFrom<'searchLocalGatewayRoutes'>[K]}['Routes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Routes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchLocalGatewayRoutes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'searchLocalGatewayRoutes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Routes ?? []) ? (result.Routes ?? []) : [result.Routes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchTransitGatewayMulticastGroups(params: { [K in keyof ParamsFrom<'searchTransitGatewayMulticastGroups', { next?: string, limit?: number }>]: ParamsFrom<'searchTransitGatewayMulticastGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchTransitGatewayMulticastGroups'>]-?: ReturnTypeFrom<'searchTransitGatewayMulticastGroups'>[K]}['MulticastGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MulticastGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchTransitGatewayMulticastGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'searchTransitGatewayMulticastGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.MulticastGroups ?? []) ? (result.MulticastGroups ?? []) : [result.MulticastGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  searchTransitGatewayRoutes: (params: RawParamsFrom<'searchTransitGatewayRoutes'>) => Promise<ReturnTypeFrom<'searchTransitGatewayRoutes'>>  = async params => {
  // undefined
    return this.client.searchTransitGatewayRoutes(params as any).promise();
  }

  sendDiagnosticInterrupt: (params: RawParamsFrom<'sendDiagnosticInterrupt'>) => Promise<ReturnTypeFrom<'sendDiagnosticInterrupt'>>  = async params => {
  // undefined
    return this.client.sendDiagnosticInterrupt(params as any).promise();
  }

  startInstances: (params: RawParamsFrom<'startInstances'>) => Promise<ReturnTypeFrom<'startInstances'>>  = async params => {
  // undefined
    return this.client.startInstances(params as any).promise();
  }

  startNetworkInsightsAccessScopeAnalysis: (params: RawParamsFrom<'startNetworkInsightsAccessScopeAnalysis'>) => Promise<ReturnTypeFrom<'startNetworkInsightsAccessScopeAnalysis'>>  = async params => {
  // undefined
    return this.client.startNetworkInsightsAccessScopeAnalysis(params as any).promise();
  }

  startNetworkInsightsAnalysis: (params: RawParamsFrom<'startNetworkInsightsAnalysis'>) => Promise<ReturnTypeFrom<'startNetworkInsightsAnalysis'>>  = async params => {
  // undefined
    return this.client.startNetworkInsightsAnalysis(params as any).promise();
  }

  startVpcEndpointServicePrivateDnsVerification: (params: RawParamsFrom<'startVpcEndpointServicePrivateDnsVerification'>) => Promise<ReturnTypeFrom<'startVpcEndpointServicePrivateDnsVerification'>>  = async params => {
  // undefined
    return this.client.startVpcEndpointServicePrivateDnsVerification(params as any).promise();
  }

  stopInstances: (params: RawParamsFrom<'stopInstances'>) => Promise<ReturnTypeFrom<'stopInstances'>>  = async params => {
  // undefined
    return this.client.stopInstances(params as any).promise();
  }

  terminateClientVpnConnections: (params: RawParamsFrom<'terminateClientVpnConnections'>) => Promise<ReturnTypeFrom<'terminateClientVpnConnections'>>  = async params => {
  // undefined
    return this.client.terminateClientVpnConnections(params as any).promise();
  }

  terminateInstances: (params: RawParamsFrom<'terminateInstances'>) => Promise<ReturnTypeFrom<'terminateInstances'>>  = async params => {
  // undefined
    return this.client.terminateInstances(params as any).promise();
  }

  unassignIpv6Addresses: (params: RawParamsFrom<'unassignIpv6Addresses'>) => Promise<ReturnTypeFrom<'unassignIpv6Addresses'>>  = async params => {
  // undefined
    return this.client.unassignIpv6Addresses(params as any).promise();
  }

  unassignPrivateIpAddresses: (params: RawParamsFrom<'unassignPrivateIpAddresses'>) => Promise<ReturnTypeFrom<'unassignPrivateIpAddresses'>>  = async params => {
  // undefined
    return this.client.unassignPrivateIpAddresses(params as any).promise();
  }

  unmonitorInstances: (params: RawParamsFrom<'unmonitorInstances'>) => Promise<ReturnTypeFrom<'unmonitorInstances'>>  = async params => {
  // undefined
    return this.client.unmonitorInstances(params as any).promise();
  }

  updateSecurityGroupRuleDescriptionsEgress: (params: RawParamsFrom<'updateSecurityGroupRuleDescriptionsEgress'>) => Promise<ReturnTypeFrom<'updateSecurityGroupRuleDescriptionsEgress'>>  = async params => {
  // undefined
    return this.client.updateSecurityGroupRuleDescriptionsEgress(params as any).promise();
  }

  updateSecurityGroupRuleDescriptionsIngress: (params: RawParamsFrom<'updateSecurityGroupRuleDescriptionsIngress'>) => Promise<ReturnTypeFrom<'updateSecurityGroupRuleDescriptionsIngress'>>  = async params => {
  // undefined
    return this.client.updateSecurityGroupRuleDescriptionsIngress(params as any).promise();
  }

  withdrawByoipCidr: (params: RawParamsFrom<'withdrawByoipCidr'>) => Promise<ReturnTypeFrom<'withdrawByoipCidr'>>  = async params => {
  // undefined
    return this.client.withdrawByoipCidr(params as any).promise();
  }
  
  static fromClient(client: AWSEC2): EC2 {
    return new EC2(client) as any;
  }
  
  static client(options?: AWSEC2.Types.ClientConfiguration): EC2 {
    return new EC2(new AWSEC2(options)) as any;
  }
}  
