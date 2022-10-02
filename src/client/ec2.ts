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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ec2';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly ["describeAccountAttributes","describeAddresses","describeAddressesAttribute","describeAvailabilityZones","describeBundleTasks","describeCapacityReservationFleets","describeCapacityReservations","describeCarrierGateways","describeClassicLinkInstances","describeClientVpnEndpoints","describeCoipPools","describeConversionTasks","describeCustomerGateways","describeDhcpOptions","describeEgressOnlyInternetGateways","describeExportImageTasks","describeExportTasks","describeFastLaunchImages","describeFastSnapshotRestores","describeFleets","describeFlowLogs","describeFpgaImages","describeHostReservationOfferings","describeHostReservations","describeHosts","describeIamInstanceProfileAssociations","describeImages","describeImportImageTasks","describeImportSnapshotTasks","describeInstanceCreditSpecifications","describeInstanceEventWindows","describeInstanceStatus","describeInstanceTypeOfferings","describeInstanceTypes","describeInstances","describeInternetGateways","describeIpamPools","describeIpamScopes","describeIpams","describeIpv6Pools","describeKeyPairs","describeLaunchTemplateVersions","describeLaunchTemplates","describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations","describeLocalGatewayRouteTableVpcAssociations","describeLocalGatewayRouteTables","describeLocalGatewayVirtualInterfaceGroups","describeLocalGatewayVirtualInterfaces","describeLocalGateways","describeManagedPrefixLists","describeMovingAddresses","describeNatGateways","describeNetworkAcls","describeNetworkInsightsAccessScopeAnalyses","describeNetworkInsightsAccessScopes","describeNetworkInsightsAnalyses","describeNetworkInsightsPaths","describeNetworkInterfacePermissions","describeNetworkInterfaces","describePlacementGroups","describePrefixLists","describePrincipalIdFormat","describePublicIpv4Pools","describeRegions","describeReplaceRootVolumeTasks","describeReservedInstances","describeReservedInstancesListings","describeReservedInstancesModifications","describeReservedInstancesOfferings","describeRouteTables","describeScheduledInstances","describeSecurityGroupRules","describeSecurityGroups","describeSnapshotTierStatus","describeSnapshots","describeSpotFleetRequests","describeSpotInstanceRequests","describeSpotPriceHistory","describeStoreImageTasks","describeSubnets","describeTags","describeTrafficMirrorFilters","describeTrafficMirrorSessions","describeTrafficMirrorTargets","describeTransitGatewayAttachments","describeTransitGatewayConnectPeers","describeTransitGatewayConnects","describeTransitGatewayMulticastDomains","describeTransitGatewayPeeringAttachments","describeTransitGatewayPolicyTables","describeTransitGatewayRouteTableAnnouncements","describeTransitGatewayRouteTables","describeTransitGatewayVpcAttachments","describeTransitGateways","describeTrunkInterfaceAssociations","describeVolumeStatus","describeVolumes","describeVolumesModifications","describeVpcClassicLinkDnsSupport","describeVpcEndpointConnectionNotifications","describeVpcEndpointConnections","describeVpcEndpointServiceConfigurations","describeVpcEndpoints","describeVpcPeeringConnections","describeVpcs","describeVpnConnections","describeVpnGateways","getTransitGatewayMulticastDomainAssociations","getVpnConnectionDeviceTypes","listImagesInRecycleBin","listSnapshotsInRecycleBin","searchTransitGatewayMulticastGroups"];
    
  acceptReservedInstancesExchangeQuote: FunctionTypeFrom<'acceptReservedInstancesExchangeQuote'>;

  acceptTransitGatewayMulticastDomainAssociations: FunctionTypeFrom<'acceptTransitGatewayMulticastDomainAssociations'>;

  acceptTransitGatewayPeeringAttachment: FunctionTypeFrom<'acceptTransitGatewayPeeringAttachment'>;

  acceptTransitGatewayVpcAttachment: FunctionTypeFrom<'acceptTransitGatewayVpcAttachment'>;

  acceptVpcEndpointConnections: FunctionTypeFrom<'acceptVpcEndpointConnections'>;

  acceptVpcPeeringConnection: FunctionTypeFrom<'acceptVpcPeeringConnection'>;

  advertiseByoipCidr: FunctionTypeFrom<'advertiseByoipCidr'>;

  allocateAddress: FunctionTypeFrom<'allocateAddress'>;

  allocateHosts: FunctionTypeFrom<'allocateHosts'>;

  allocateIpamPoolCidr: FunctionTypeFrom<'allocateIpamPoolCidr'>;

  applySecurityGroupsToClientVpnTargetNetwork: FunctionTypeFrom<'applySecurityGroupsToClientVpnTargetNetwork'>;

  assignIpv6Addresses: FunctionTypeFrom<'assignIpv6Addresses'>;

  assignPrivateIpAddresses: FunctionTypeFrom<'assignPrivateIpAddresses'>;

  associateAddress: FunctionTypeFrom<'associateAddress'>;

  associateClientVpnTargetNetwork: FunctionTypeFrom<'associateClientVpnTargetNetwork'>;

  associateDhcpOptions: FunctionTypeFrom<'associateDhcpOptions'>;

  associateEnclaveCertificateIamRole: FunctionTypeFrom<'associateEnclaveCertificateIamRole'>;

  associateIamInstanceProfile: FunctionTypeFrom<'associateIamInstanceProfile'>;

  associateInstanceEventWindow: FunctionTypeFrom<'associateInstanceEventWindow'>;

  associateRouteTable: FunctionTypeFrom<'associateRouteTable'>;

  associateSubnetCidrBlock: FunctionTypeFrom<'associateSubnetCidrBlock'>;

  associateTransitGatewayMulticastDomain: FunctionTypeFrom<'associateTransitGatewayMulticastDomain'>;

  associateTransitGatewayPolicyTable: FunctionTypeFrom<'associateTransitGatewayPolicyTable'>;

  associateTransitGatewayRouteTable: FunctionTypeFrom<'associateTransitGatewayRouteTable'>;

  associateTrunkInterface: FunctionTypeFrom<'associateTrunkInterface'>;

  associateVpcCidrBlock: FunctionTypeFrom<'associateVpcCidrBlock'>;

  attachClassicLinkVpc: FunctionTypeFrom<'attachClassicLinkVpc'>;

  attachInternetGateway: FunctionTypeFrom<'attachInternetGateway'>;

  attachNetworkInterface: FunctionTypeFrom<'attachNetworkInterface'>;

  attachVolume: FunctionTypeFrom<'attachVolume'>;

  attachVpnGateway: FunctionTypeFrom<'attachVpnGateway'>;

  authorizeClientVpnIngress: FunctionTypeFrom<'authorizeClientVpnIngress'>;

  authorizeSecurityGroupEgress: FunctionTypeFrom<'authorizeSecurityGroupEgress'>;

  authorizeSecurityGroupIngress: FunctionTypeFrom<'authorizeSecurityGroupIngress'>;

  bundleInstance: FunctionTypeFrom<'bundleInstance'>;

  cancelBundleTask: FunctionTypeFrom<'cancelBundleTask'>;

  cancelCapacityReservation: FunctionTypeFrom<'cancelCapacityReservation'>;

  cancelCapacityReservationFleets: FunctionTypeFrom<'cancelCapacityReservationFleets'>;

  cancelConversionTask: FunctionTypeFrom<'cancelConversionTask'>;

  cancelExportTask: FunctionTypeFrom<'cancelExportTask'>;

  cancelImportTask: FunctionTypeFrom<'cancelImportTask'>;

  cancelReservedInstancesListing: FunctionTypeFrom<'cancelReservedInstancesListing'>;

  cancelSpotFleetRequests: FunctionTypeFrom<'cancelSpotFleetRequests'>;

  cancelSpotInstanceRequests: FunctionTypeFrom<'cancelSpotInstanceRequests'>;

  confirmProductInstance: FunctionTypeFrom<'confirmProductInstance'>;

  copyFpgaImage: FunctionTypeFrom<'copyFpgaImage'>;

  copyImage: FunctionTypeFrom<'copyImage'>;

  copySnapshot: FunctionTypeFrom<'copySnapshot'>;

  createCapacityReservation: FunctionTypeFrom<'createCapacityReservation'>;

  createCapacityReservationFleet: FunctionTypeFrom<'createCapacityReservationFleet'>;

  createCarrierGateway: FunctionTypeFrom<'createCarrierGateway'>;

  createClientVpnEndpoint: FunctionTypeFrom<'createClientVpnEndpoint'>;

  createClientVpnRoute: FunctionTypeFrom<'createClientVpnRoute'>;

  createCoipCidr: FunctionTypeFrom<'createCoipCidr'>;

  createCoipPool: FunctionTypeFrom<'createCoipPool'>;

  createCustomerGateway: FunctionTypeFrom<'createCustomerGateway'>;

  createDefaultSubnet: FunctionTypeFrom<'createDefaultSubnet'>;

  createDefaultVpc: FunctionTypeFrom<'createDefaultVpc'>;

  createDhcpOptions: FunctionTypeFrom<'createDhcpOptions'>;

  createEgressOnlyInternetGateway: FunctionTypeFrom<'createEgressOnlyInternetGateway'>;

  createFleet: FunctionTypeFrom<'createFleet'>;

  createFlowLogs: FunctionTypeFrom<'createFlowLogs'>;

  createFpgaImage: FunctionTypeFrom<'createFpgaImage'>;

  createImage: FunctionTypeFrom<'createImage'>;

  createInstanceEventWindow: FunctionTypeFrom<'createInstanceEventWindow'>;

  createInstanceExportTask: FunctionTypeFrom<'createInstanceExportTask'>;

  createInternetGateway: FunctionTypeFrom<'createInternetGateway'>;

  createIpam: FunctionTypeFrom<'createIpam'>;

  createIpamPool: FunctionTypeFrom<'createIpamPool'>;

  createIpamScope: FunctionTypeFrom<'createIpamScope'>;

  createKeyPair: FunctionTypeFrom<'createKeyPair'>;

  createLaunchTemplate: FunctionTypeFrom<'createLaunchTemplate'>;

  createLaunchTemplateVersion: FunctionTypeFrom<'createLaunchTemplateVersion'>;

  createLocalGatewayRoute: FunctionTypeFrom<'createLocalGatewayRoute'>;

  createLocalGatewayRouteTable: FunctionTypeFrom<'createLocalGatewayRouteTable'>;

  createLocalGatewayRouteTableVirtualInterfaceGroupAssociation: FunctionTypeFrom<'createLocalGatewayRouteTableVirtualInterfaceGroupAssociation'>;

  createLocalGatewayRouteTableVpcAssociation: FunctionTypeFrom<'createLocalGatewayRouteTableVpcAssociation'>;

  createManagedPrefixList: FunctionTypeFrom<'createManagedPrefixList'>;

  createNatGateway: FunctionTypeFrom<'createNatGateway'>;

  createNetworkAcl: FunctionTypeFrom<'createNetworkAcl'>;

  createNetworkAclEntry: FunctionTypeFrom<'createNetworkAclEntry'>;

  createNetworkInsightsAccessScope: FunctionTypeFrom<'createNetworkInsightsAccessScope'>;

  createNetworkInsightsPath: FunctionTypeFrom<'createNetworkInsightsPath'>;

  createNetworkInterface: FunctionTypeFrom<'createNetworkInterface'>;

  createNetworkInterfacePermission: FunctionTypeFrom<'createNetworkInterfacePermission'>;

  createPlacementGroup: FunctionTypeFrom<'createPlacementGroup'>;

  createPublicIpv4Pool: FunctionTypeFrom<'createPublicIpv4Pool'>;

  createReplaceRootVolumeTask: FunctionTypeFrom<'createReplaceRootVolumeTask'>;

  createReservedInstancesListing: FunctionTypeFrom<'createReservedInstancesListing'>;

  createRestoreImageTask: FunctionTypeFrom<'createRestoreImageTask'>;

  createRoute: FunctionTypeFrom<'createRoute'>;

  createRouteTable: FunctionTypeFrom<'createRouteTable'>;

  createSecurityGroup: FunctionTypeFrom<'createSecurityGroup'>;

  createSnapshot: FunctionTypeFrom<'createSnapshot'>;

  createSnapshots: FunctionTypeFrom<'createSnapshots'>;

  createSpotDatafeedSubscription: FunctionTypeFrom<'createSpotDatafeedSubscription'>;

  createStoreImageTask: FunctionTypeFrom<'createStoreImageTask'>;

  createSubnet: FunctionTypeFrom<'createSubnet'>;

  createSubnetCidrReservation: FunctionTypeFrom<'createSubnetCidrReservation'>;

  createTags: FunctionTypeFrom<'createTags'>;

  createTrafficMirrorFilter: FunctionTypeFrom<'createTrafficMirrorFilter'>;

  createTrafficMirrorFilterRule: FunctionTypeFrom<'createTrafficMirrorFilterRule'>;

  createTrafficMirrorSession: FunctionTypeFrom<'createTrafficMirrorSession'>;

  createTrafficMirrorTarget: FunctionTypeFrom<'createTrafficMirrorTarget'>;

  createTransitGateway: FunctionTypeFrom<'createTransitGateway'>;

  createTransitGatewayConnect: FunctionTypeFrom<'createTransitGatewayConnect'>;

  createTransitGatewayConnectPeer: FunctionTypeFrom<'createTransitGatewayConnectPeer'>;

  createTransitGatewayMulticastDomain: FunctionTypeFrom<'createTransitGatewayMulticastDomain'>;

  createTransitGatewayPeeringAttachment: FunctionTypeFrom<'createTransitGatewayPeeringAttachment'>;

  createTransitGatewayPolicyTable: FunctionTypeFrom<'createTransitGatewayPolicyTable'>;

  createTransitGatewayPrefixListReference: FunctionTypeFrom<'createTransitGatewayPrefixListReference'>;

  createTransitGatewayRoute: FunctionTypeFrom<'createTransitGatewayRoute'>;

  createTransitGatewayRouteTable: FunctionTypeFrom<'createTransitGatewayRouteTable'>;

  createTransitGatewayRouteTableAnnouncement: FunctionTypeFrom<'createTransitGatewayRouteTableAnnouncement'>;

  createTransitGatewayVpcAttachment: FunctionTypeFrom<'createTransitGatewayVpcAttachment'>;

  createVolume: FunctionTypeFrom<'createVolume'>;

  createVpc: FunctionTypeFrom<'createVpc'>;

  createVpcEndpoint: FunctionTypeFrom<'createVpcEndpoint'>;

  createVpcEndpointConnectionNotification: FunctionTypeFrom<'createVpcEndpointConnectionNotification'>;

  createVpcEndpointServiceConfiguration: FunctionTypeFrom<'createVpcEndpointServiceConfiguration'>;

  createVpcPeeringConnection: FunctionTypeFrom<'createVpcPeeringConnection'>;

  createVpnConnection: FunctionTypeFrom<'createVpnConnection'>;

  createVpnConnectionRoute: FunctionTypeFrom<'createVpnConnectionRoute'>;

  createVpnGateway: FunctionTypeFrom<'createVpnGateway'>;

  deleteCarrierGateway: FunctionTypeFrom<'deleteCarrierGateway'>;

  deleteClientVpnEndpoint: FunctionTypeFrom<'deleteClientVpnEndpoint'>;

  deleteClientVpnRoute: FunctionTypeFrom<'deleteClientVpnRoute'>;

  deleteCoipCidr: FunctionTypeFrom<'deleteCoipCidr'>;

  deleteCoipPool: FunctionTypeFrom<'deleteCoipPool'>;

  deleteCustomerGateway: FunctionTypeFrom<'deleteCustomerGateway'>;

  deleteDhcpOptions: FunctionTypeFrom<'deleteDhcpOptions'>;

  deleteEgressOnlyInternetGateway: FunctionTypeFrom<'deleteEgressOnlyInternetGateway'>;

  deleteFleets: FunctionTypeFrom<'deleteFleets'>;

  deleteFlowLogs: FunctionTypeFrom<'deleteFlowLogs'>;

  deleteFpgaImage: FunctionTypeFrom<'deleteFpgaImage'>;

  deleteInstanceEventWindow: FunctionTypeFrom<'deleteInstanceEventWindow'>;

  deleteInternetGateway: FunctionTypeFrom<'deleteInternetGateway'>;

  deleteIpam: FunctionTypeFrom<'deleteIpam'>;

  deleteIpamPool: FunctionTypeFrom<'deleteIpamPool'>;

  deleteIpamScope: FunctionTypeFrom<'deleteIpamScope'>;

  deleteKeyPair: FunctionTypeFrom<'deleteKeyPair'>;

  deleteLaunchTemplate: FunctionTypeFrom<'deleteLaunchTemplate'>;

  deleteLaunchTemplateVersions: FunctionTypeFrom<'deleteLaunchTemplateVersions'>;

  deleteLocalGatewayRoute: FunctionTypeFrom<'deleteLocalGatewayRoute'>;

  deleteLocalGatewayRouteTable: FunctionTypeFrom<'deleteLocalGatewayRouteTable'>;

  deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation: FunctionTypeFrom<'deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation'>;

  deleteLocalGatewayRouteTableVpcAssociation: FunctionTypeFrom<'deleteLocalGatewayRouteTableVpcAssociation'>;

  deleteManagedPrefixList: FunctionTypeFrom<'deleteManagedPrefixList'>;

  deleteNatGateway: FunctionTypeFrom<'deleteNatGateway'>;

  deleteNetworkAcl: FunctionTypeFrom<'deleteNetworkAcl'>;

  deleteNetworkAclEntry: FunctionTypeFrom<'deleteNetworkAclEntry'>;

  deleteNetworkInsightsAccessScope: FunctionTypeFrom<'deleteNetworkInsightsAccessScope'>;

  deleteNetworkInsightsAccessScopeAnalysis: FunctionTypeFrom<'deleteNetworkInsightsAccessScopeAnalysis'>;

  deleteNetworkInsightsAnalysis: FunctionTypeFrom<'deleteNetworkInsightsAnalysis'>;

  deleteNetworkInsightsPath: FunctionTypeFrom<'deleteNetworkInsightsPath'>;

  deleteNetworkInterface: FunctionTypeFrom<'deleteNetworkInterface'>;

  deleteNetworkInterfacePermission: FunctionTypeFrom<'deleteNetworkInterfacePermission'>;

  deletePlacementGroup: FunctionTypeFrom<'deletePlacementGroup'>;

  deletePublicIpv4Pool: FunctionTypeFrom<'deletePublicIpv4Pool'>;

  deleteQueuedReservedInstances: FunctionTypeFrom<'deleteQueuedReservedInstances'>;

  deleteRoute: FunctionTypeFrom<'deleteRoute'>;

  deleteRouteTable: FunctionTypeFrom<'deleteRouteTable'>;

  deleteSecurityGroup: FunctionTypeFrom<'deleteSecurityGroup'>;

  deleteSnapshot: FunctionTypeFrom<'deleteSnapshot'>;

  deleteSpotDatafeedSubscription: FunctionTypeFrom<'deleteSpotDatafeedSubscription'>;

  deleteSubnet: FunctionTypeFrom<'deleteSubnet'>;

  deleteSubnetCidrReservation: FunctionTypeFrom<'deleteSubnetCidrReservation'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  deleteTrafficMirrorFilter: FunctionTypeFrom<'deleteTrafficMirrorFilter'>;

  deleteTrafficMirrorFilterRule: FunctionTypeFrom<'deleteTrafficMirrorFilterRule'>;

  deleteTrafficMirrorSession: FunctionTypeFrom<'deleteTrafficMirrorSession'>;

  deleteTrafficMirrorTarget: FunctionTypeFrom<'deleteTrafficMirrorTarget'>;

  deleteTransitGateway: FunctionTypeFrom<'deleteTransitGateway'>;

  deleteTransitGatewayConnect: FunctionTypeFrom<'deleteTransitGatewayConnect'>;

  deleteTransitGatewayConnectPeer: FunctionTypeFrom<'deleteTransitGatewayConnectPeer'>;

  deleteTransitGatewayMulticastDomain: FunctionTypeFrom<'deleteTransitGatewayMulticastDomain'>;

  deleteTransitGatewayPeeringAttachment: FunctionTypeFrom<'deleteTransitGatewayPeeringAttachment'>;

  deleteTransitGatewayPolicyTable: FunctionTypeFrom<'deleteTransitGatewayPolicyTable'>;

  deleteTransitGatewayPrefixListReference: FunctionTypeFrom<'deleteTransitGatewayPrefixListReference'>;

  deleteTransitGatewayRoute: FunctionTypeFrom<'deleteTransitGatewayRoute'>;

  deleteTransitGatewayRouteTable: FunctionTypeFrom<'deleteTransitGatewayRouteTable'>;

  deleteTransitGatewayRouteTableAnnouncement: FunctionTypeFrom<'deleteTransitGatewayRouteTableAnnouncement'>;

  deleteTransitGatewayVpcAttachment: FunctionTypeFrom<'deleteTransitGatewayVpcAttachment'>;

  deleteVolume: FunctionTypeFrom<'deleteVolume'>;

  deleteVpc: FunctionTypeFrom<'deleteVpc'>;

  deleteVpcEndpointConnectionNotifications: FunctionTypeFrom<'deleteVpcEndpointConnectionNotifications'>;

  deleteVpcEndpointServiceConfigurations: FunctionTypeFrom<'deleteVpcEndpointServiceConfigurations'>;

  deleteVpcEndpoints: FunctionTypeFrom<'deleteVpcEndpoints'>;

  deleteVpcPeeringConnection: FunctionTypeFrom<'deleteVpcPeeringConnection'>;

  deleteVpnConnection: FunctionTypeFrom<'deleteVpnConnection'>;

  deleteVpnConnectionRoute: FunctionTypeFrom<'deleteVpnConnectionRoute'>;

  deleteVpnGateway: FunctionTypeFrom<'deleteVpnGateway'>;

  deprovisionByoipCidr: FunctionTypeFrom<'deprovisionByoipCidr'>;

  deprovisionIpamPoolCidr: FunctionTypeFrom<'deprovisionIpamPoolCidr'>;

  deprovisionPublicIpv4PoolCidr: FunctionTypeFrom<'deprovisionPublicIpv4PoolCidr'>;

  deregisterImage: FunctionTypeFrom<'deregisterImage'>;

  deregisterInstanceEventNotificationAttributes: FunctionTypeFrom<'deregisterInstanceEventNotificationAttributes'>;

  deregisterTransitGatewayMulticastGroupMembers: FunctionTypeFrom<'deregisterTransitGatewayMulticastGroupMembers'>;

  deregisterTransitGatewayMulticastGroupSources: FunctionTypeFrom<'deregisterTransitGatewayMulticastGroupSources'>;

  describeAccountAttributes: FunctionTypeFrom<'describeAccountAttributes'>;

  describeAddresses: FunctionTypeFrom<'describeAddresses'>;

  describeAddressesAttribute(params: { [K in keyof Omit<ParamsFrom<'describeAddressesAttribute', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAddressesAttribute', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAddressesAttribute'>]-?: ReturnTypeFrom<'describeAddressesAttribute'>[K]}['Addresses'] }>
  describeAddressesAttribute(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAddressesAttribute'>]-?: ReturnTypeFrom<'describeAddressesAttribute'>[K]}['Addresses'] }>;

  describeAggregateIdFormat: FunctionTypeFrom<'describeAggregateIdFormat'>;

  describeAvailabilityZones: FunctionTypeFrom<'describeAvailabilityZones'>;

  describeBundleTasks: FunctionTypeFrom<'describeBundleTasks'>;

  describeByoipCidrs(params: { [K in keyof Omit<ParamsFrom<'describeByoipCidrs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeByoipCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeByoipCidrs'>]-?: ReturnTypeFrom<'describeByoipCidrs'>[K]}['ByoipCidrs'] }>
  ;

  describeCapacityReservationFleets(params: { [K in keyof Omit<ParamsFrom<'describeCapacityReservationFleets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeCapacityReservationFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCapacityReservationFleets'>]-?: ReturnTypeFrom<'describeCapacityReservationFleets'>[K]}['CapacityReservationFleets'] }>
  describeCapacityReservationFleets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCapacityReservationFleets'>]-?: ReturnTypeFrom<'describeCapacityReservationFleets'>[K]}['CapacityReservationFleets'] }>;

  describeCapacityReservations(params: { [K in keyof Omit<ParamsFrom<'describeCapacityReservations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeCapacityReservations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCapacityReservations'>]-?: ReturnTypeFrom<'describeCapacityReservations'>[K]}['CapacityReservations'] }>
  describeCapacityReservations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCapacityReservations'>]-?: ReturnTypeFrom<'describeCapacityReservations'>[K]}['CapacityReservations'] }>;

  describeCarrierGateways(params: { [K in keyof Omit<ParamsFrom<'describeCarrierGateways', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeCarrierGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCarrierGateways'>]-?: ReturnTypeFrom<'describeCarrierGateways'>[K]}['CarrierGateways'] }>
  describeCarrierGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCarrierGateways'>]-?: ReturnTypeFrom<'describeCarrierGateways'>[K]}['CarrierGateways'] }>;

  describeClassicLinkInstances(params: { [K in keyof Omit<ParamsFrom<'describeClassicLinkInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeClassicLinkInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClassicLinkInstances'>]-?: ReturnTypeFrom<'describeClassicLinkInstances'>[K]}['Instances'] }>
  describeClassicLinkInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClassicLinkInstances'>]-?: ReturnTypeFrom<'describeClassicLinkInstances'>[K]}['Instances'] }>;

  describeClientVpnAuthorizationRules(params: { [K in keyof Omit<ParamsFrom<'describeClientVpnAuthorizationRules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeClientVpnAuthorizationRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClientVpnAuthorizationRules'>]-?: ReturnTypeFrom<'describeClientVpnAuthorizationRules'>[K]}['AuthorizationRules'] }>
  ;

  describeClientVpnConnections(params: { [K in keyof Omit<ParamsFrom<'describeClientVpnConnections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeClientVpnConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClientVpnConnections'>]-?: ReturnTypeFrom<'describeClientVpnConnections'>[K]}['Connections'] }>
  ;

  describeClientVpnEndpoints(params: { [K in keyof Omit<ParamsFrom<'describeClientVpnEndpoints', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeClientVpnEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClientVpnEndpoints'>]-?: ReturnTypeFrom<'describeClientVpnEndpoints'>[K]}['ClientVpnEndpoints'] }>
  describeClientVpnEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClientVpnEndpoints'>]-?: ReturnTypeFrom<'describeClientVpnEndpoints'>[K]}['ClientVpnEndpoints'] }>;

  describeClientVpnRoutes(params: { [K in keyof Omit<ParamsFrom<'describeClientVpnRoutes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeClientVpnRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClientVpnRoutes'>]-?: ReturnTypeFrom<'describeClientVpnRoutes'>[K]}['Routes'] }>
  ;

  describeClientVpnTargetNetworks(params: { [K in keyof Omit<ParamsFrom<'describeClientVpnTargetNetworks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeClientVpnTargetNetworks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeClientVpnTargetNetworks'>]-?: ReturnTypeFrom<'describeClientVpnTargetNetworks'>[K]}['ClientVpnTargetNetworks'] }>
  ;

  describeCoipPools(params: { [K in keyof Omit<ParamsFrom<'describeCoipPools', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeCoipPools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCoipPools'>]-?: ReturnTypeFrom<'describeCoipPools'>[K]}['CoipPools'] }>
  describeCoipPools(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCoipPools'>]-?: ReturnTypeFrom<'describeCoipPools'>[K]}['CoipPools'] }>;

  describeConversionTasks: FunctionTypeFrom<'describeConversionTasks'>;

  describeCustomerGateways: FunctionTypeFrom<'describeCustomerGateways'>;

  describeDhcpOptions(params: { [K in keyof Omit<ParamsFrom<'describeDhcpOptions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeDhcpOptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDhcpOptions'>]-?: ReturnTypeFrom<'describeDhcpOptions'>[K]}['DhcpOptions'] }>
  describeDhcpOptions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDhcpOptions'>]-?: ReturnTypeFrom<'describeDhcpOptions'>[K]}['DhcpOptions'] }>;

  describeEgressOnlyInternetGateways(params: { [K in keyof Omit<ParamsFrom<'describeEgressOnlyInternetGateways', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeEgressOnlyInternetGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEgressOnlyInternetGateways'>]-?: ReturnTypeFrom<'describeEgressOnlyInternetGateways'>[K]}['EgressOnlyInternetGateways'] }>
  describeEgressOnlyInternetGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEgressOnlyInternetGateways'>]-?: ReturnTypeFrom<'describeEgressOnlyInternetGateways'>[K]}['EgressOnlyInternetGateways'] }>;

  describeElasticGpus: FunctionTypeFrom<'describeElasticGpus'>;

  describeExportImageTasks(params: { [K in keyof Omit<ParamsFrom<'describeExportImageTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeExportImageTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeExportImageTasks'>]-?: ReturnTypeFrom<'describeExportImageTasks'>[K]}['ExportImageTasks'] }>
  describeExportImageTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeExportImageTasks'>]-?: ReturnTypeFrom<'describeExportImageTasks'>[K]}['ExportImageTasks'] }>;

  describeExportTasks: FunctionTypeFrom<'describeExportTasks'>;

  describeFastLaunchImages(params: { [K in keyof Omit<ParamsFrom<'describeFastLaunchImages', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeFastLaunchImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFastLaunchImages'>]-?: ReturnTypeFrom<'describeFastLaunchImages'>[K]}['FastLaunchImages'] }>
  describeFastLaunchImages(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFastLaunchImages'>]-?: ReturnTypeFrom<'describeFastLaunchImages'>[K]}['FastLaunchImages'] }>;

  describeFastSnapshotRestores(params: { [K in keyof Omit<ParamsFrom<'describeFastSnapshotRestores', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeFastSnapshotRestores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFastSnapshotRestores'>]-?: ReturnTypeFrom<'describeFastSnapshotRestores'>[K]}['FastSnapshotRestores'] }>
  describeFastSnapshotRestores(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFastSnapshotRestores'>]-?: ReturnTypeFrom<'describeFastSnapshotRestores'>[K]}['FastSnapshotRestores'] }>;

  describeFleetHistory: FunctionTypeFrom<'describeFleetHistory'>;

  describeFleetInstances: FunctionTypeFrom<'describeFleetInstances'>;

  describeFleets(params: { [K in keyof Omit<ParamsFrom<'describeFleets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleets'>]-?: ReturnTypeFrom<'describeFleets'>[K]}['Fleets'] }>
  describeFleets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleets'>]-?: ReturnTypeFrom<'describeFleets'>[K]}['Fleets'] }>;

  describeFlowLogs(params: { [K in keyof Omit<ParamsFrom<'describeFlowLogs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeFlowLogs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFlowLogs'>]-?: ReturnTypeFrom<'describeFlowLogs'>[K]}['FlowLogs'] }>
  describeFlowLogs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFlowLogs'>]-?: ReturnTypeFrom<'describeFlowLogs'>[K]}['FlowLogs'] }>;

  describeFpgaImageAttribute: FunctionTypeFrom<'describeFpgaImageAttribute'>;

  describeFpgaImages(params: { [K in keyof Omit<ParamsFrom<'describeFpgaImages', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeFpgaImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFpgaImages'>]-?: ReturnTypeFrom<'describeFpgaImages'>[K]}['FpgaImages'] }>
  describeFpgaImages(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFpgaImages'>]-?: ReturnTypeFrom<'describeFpgaImages'>[K]}['FpgaImages'] }>;

  describeHostReservationOfferings(params: { [K in keyof Omit<ParamsFrom<'describeHostReservationOfferings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeHostReservationOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHostReservationOfferings'>]-?: ReturnTypeFrom<'describeHostReservationOfferings'>[K]}['OfferingSet'] }>
  describeHostReservationOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHostReservationOfferings'>]-?: ReturnTypeFrom<'describeHostReservationOfferings'>[K]}['OfferingSet'] }>;

  describeHostReservations(params: { [K in keyof Omit<ParamsFrom<'describeHostReservations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeHostReservations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHostReservations'>]-?: ReturnTypeFrom<'describeHostReservations'>[K]}['HostReservationSet'] }>
  describeHostReservations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHostReservations'>]-?: ReturnTypeFrom<'describeHostReservations'>[K]}['HostReservationSet'] }>;

  describeHosts(params: { [K in keyof Omit<ParamsFrom<'describeHosts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeHosts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHosts'>]-?: ReturnTypeFrom<'describeHosts'>[K]}['Hosts'] }>
  describeHosts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeHosts'>]-?: ReturnTypeFrom<'describeHosts'>[K]}['Hosts'] }>;

  describeIamInstanceProfileAssociations(params: { [K in keyof Omit<ParamsFrom<'describeIamInstanceProfileAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeIamInstanceProfileAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIamInstanceProfileAssociations'>]-?: ReturnTypeFrom<'describeIamInstanceProfileAssociations'>[K]}['IamInstanceProfileAssociations'] }>
  describeIamInstanceProfileAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIamInstanceProfileAssociations'>]-?: ReturnTypeFrom<'describeIamInstanceProfileAssociations'>[K]}['IamInstanceProfileAssociations'] }>;

  describeIdFormat: FunctionTypeFrom<'describeIdFormat'>;

  describeIdentityIdFormat: FunctionTypeFrom<'describeIdentityIdFormat'>;

  describeImageAttribute: FunctionTypeFrom<'describeImageAttribute'>;

  describeImages: FunctionTypeFrom<'describeImages'>;

  describeImportImageTasks(params: { [K in keyof Omit<ParamsFrom<'describeImportImageTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeImportImageTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeImportImageTasks'>]-?: ReturnTypeFrom<'describeImportImageTasks'>[K]}['ImportImageTasks'] }>
  describeImportImageTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeImportImageTasks'>]-?: ReturnTypeFrom<'describeImportImageTasks'>[K]}['ImportImageTasks'] }>;

  describeImportSnapshotTasks(params: { [K in keyof Omit<ParamsFrom<'describeImportSnapshotTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeImportSnapshotTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeImportSnapshotTasks'>]-?: ReturnTypeFrom<'describeImportSnapshotTasks'>[K]}['ImportSnapshotTasks'] }>
  describeImportSnapshotTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeImportSnapshotTasks'>]-?: ReturnTypeFrom<'describeImportSnapshotTasks'>[K]}['ImportSnapshotTasks'] }>;

  describeInstanceAttribute: FunctionTypeFrom<'describeInstanceAttribute'>;

  describeInstanceCreditSpecifications(params: { [K in keyof Omit<ParamsFrom<'describeInstanceCreditSpecifications', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstanceCreditSpecifications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceCreditSpecifications'>]-?: ReturnTypeFrom<'describeInstanceCreditSpecifications'>[K]}['InstanceCreditSpecifications'] }>
  describeInstanceCreditSpecifications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceCreditSpecifications'>]-?: ReturnTypeFrom<'describeInstanceCreditSpecifications'>[K]}['InstanceCreditSpecifications'] }>;

  describeInstanceEventNotificationAttributes: FunctionTypeFrom<'describeInstanceEventNotificationAttributes'>;

  describeInstanceEventWindows(params: { [K in keyof Omit<ParamsFrom<'describeInstanceEventWindows', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstanceEventWindows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceEventWindows'>]-?: ReturnTypeFrom<'describeInstanceEventWindows'>[K]}['InstanceEventWindows'] }>
  describeInstanceEventWindows(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceEventWindows'>]-?: ReturnTypeFrom<'describeInstanceEventWindows'>[K]}['InstanceEventWindows'] }>;

  describeInstanceStatus(params: { [K in keyof Omit<ParamsFrom<'describeInstanceStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstanceStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceStatus'>]-?: ReturnTypeFrom<'describeInstanceStatus'>[K]}['InstanceStatuses'] }>
  describeInstanceStatus(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceStatus'>]-?: ReturnTypeFrom<'describeInstanceStatus'>[K]}['InstanceStatuses'] }>;

  describeInstanceTypeOfferings(params: { [K in keyof Omit<ParamsFrom<'describeInstanceTypeOfferings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstanceTypeOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceTypeOfferings'>]-?: ReturnTypeFrom<'describeInstanceTypeOfferings'>[K]}['InstanceTypeOfferings'] }>
  describeInstanceTypeOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceTypeOfferings'>]-?: ReturnTypeFrom<'describeInstanceTypeOfferings'>[K]}['InstanceTypeOfferings'] }>;

  describeInstanceTypes(params: { [K in keyof Omit<ParamsFrom<'describeInstanceTypes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstanceTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceTypes'>]-?: ReturnTypeFrom<'describeInstanceTypes'>[K]}['InstanceTypes'] }>
  describeInstanceTypes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceTypes'>]-?: ReturnTypeFrom<'describeInstanceTypes'>[K]}['InstanceTypes'] }>;

  describeInstances(params: { [K in keyof Omit<ParamsFrom<'describeInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstances'>]-?: ReturnTypeFrom<'describeInstances'>[K]}['Reservations'] }>
  describeInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstances'>]-?: ReturnTypeFrom<'describeInstances'>[K]}['Reservations'] }>;

  describeInternetGateways(params: { [K in keyof Omit<ParamsFrom<'describeInternetGateways', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInternetGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInternetGateways'>]-?: ReturnTypeFrom<'describeInternetGateways'>[K]}['InternetGateways'] }>
  describeInternetGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInternetGateways'>]-?: ReturnTypeFrom<'describeInternetGateways'>[K]}['InternetGateways'] }>;

  describeIpamPools(params: { [K in keyof Omit<ParamsFrom<'describeIpamPools', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeIpamPools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIpamPools'>]-?: ReturnTypeFrom<'describeIpamPools'>[K]}['IpamPools'] }>
  describeIpamPools(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIpamPools'>]-?: ReturnTypeFrom<'describeIpamPools'>[K]}['IpamPools'] }>;

  describeIpamScopes(params: { [K in keyof Omit<ParamsFrom<'describeIpamScopes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeIpamScopes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIpamScopes'>]-?: ReturnTypeFrom<'describeIpamScopes'>[K]}['IpamScopes'] }>
  describeIpamScopes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIpamScopes'>]-?: ReturnTypeFrom<'describeIpamScopes'>[K]}['IpamScopes'] }>;

  describeIpams(params: { [K in keyof Omit<ParamsFrom<'describeIpams', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeIpams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIpams'>]-?: ReturnTypeFrom<'describeIpams'>[K]}['Ipams'] }>
  describeIpams(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIpams'>]-?: ReturnTypeFrom<'describeIpams'>[K]}['Ipams'] }>;

  describeIpv6Pools(params: { [K in keyof Omit<ParamsFrom<'describeIpv6Pools', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeIpv6Pools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIpv6Pools'>]-?: ReturnTypeFrom<'describeIpv6Pools'>[K]}['Ipv6Pools'] }>
  describeIpv6Pools(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeIpv6Pools'>]-?: ReturnTypeFrom<'describeIpv6Pools'>[K]}['Ipv6Pools'] }>;

  describeKeyPairs: FunctionTypeFrom<'describeKeyPairs'>;

  describeLaunchTemplateVersions(params: { [K in keyof Omit<ParamsFrom<'describeLaunchTemplateVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeLaunchTemplateVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLaunchTemplateVersions'>]-?: ReturnTypeFrom<'describeLaunchTemplateVersions'>[K]}['LaunchTemplateVersions'] }>
  describeLaunchTemplateVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLaunchTemplateVersions'>]-?: ReturnTypeFrom<'describeLaunchTemplateVersions'>[K]}['LaunchTemplateVersions'] }>;

  describeLaunchTemplates(params: { [K in keyof Omit<ParamsFrom<'describeLaunchTemplates', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeLaunchTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLaunchTemplates'>]-?: ReturnTypeFrom<'describeLaunchTemplates'>[K]}['LaunchTemplates'] }>
  describeLaunchTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLaunchTemplates'>]-?: ReturnTypeFrom<'describeLaunchTemplates'>[K]}['LaunchTemplates'] }>;

  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(params: { [K in keyof Omit<ParamsFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations'>[K]}['LocalGatewayRouteTableVirtualInterfaceGroupAssociations'] }>
  describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations'>[K]}['LocalGatewayRouteTableVirtualInterfaceGroupAssociations'] }>;

  describeLocalGatewayRouteTableVpcAssociations(params: { [K in keyof Omit<ParamsFrom<'describeLocalGatewayRouteTableVpcAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeLocalGatewayRouteTableVpcAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTableVpcAssociations'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTableVpcAssociations'>[K]}['LocalGatewayRouteTableVpcAssociations'] }>
  describeLocalGatewayRouteTableVpcAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTableVpcAssociations'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTableVpcAssociations'>[K]}['LocalGatewayRouteTableVpcAssociations'] }>;

  describeLocalGatewayRouteTables(params: { [K in keyof Omit<ParamsFrom<'describeLocalGatewayRouteTables', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeLocalGatewayRouteTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTables'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTables'>[K]}['LocalGatewayRouteTables'] }>
  describeLocalGatewayRouteTables(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayRouteTables'>]-?: ReturnTypeFrom<'describeLocalGatewayRouteTables'>[K]}['LocalGatewayRouteTables'] }>;

  describeLocalGatewayVirtualInterfaceGroups(params: { [K in keyof Omit<ParamsFrom<'describeLocalGatewayVirtualInterfaceGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeLocalGatewayVirtualInterfaceGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayVirtualInterfaceGroups'>]-?: ReturnTypeFrom<'describeLocalGatewayVirtualInterfaceGroups'>[K]}['LocalGatewayVirtualInterfaceGroups'] }>
  describeLocalGatewayVirtualInterfaceGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayVirtualInterfaceGroups'>]-?: ReturnTypeFrom<'describeLocalGatewayVirtualInterfaceGroups'>[K]}['LocalGatewayVirtualInterfaceGroups'] }>;

  describeLocalGatewayVirtualInterfaces(params: { [K in keyof Omit<ParamsFrom<'describeLocalGatewayVirtualInterfaces', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeLocalGatewayVirtualInterfaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayVirtualInterfaces'>]-?: ReturnTypeFrom<'describeLocalGatewayVirtualInterfaces'>[K]}['LocalGatewayVirtualInterfaces'] }>
  describeLocalGatewayVirtualInterfaces(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGatewayVirtualInterfaces'>]-?: ReturnTypeFrom<'describeLocalGatewayVirtualInterfaces'>[K]}['LocalGatewayVirtualInterfaces'] }>;

  describeLocalGateways(params: { [K in keyof Omit<ParamsFrom<'describeLocalGateways', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeLocalGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGateways'>]-?: ReturnTypeFrom<'describeLocalGateways'>[K]}['LocalGateways'] }>
  describeLocalGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLocalGateways'>]-?: ReturnTypeFrom<'describeLocalGateways'>[K]}['LocalGateways'] }>;

  describeManagedPrefixLists(params: { [K in keyof Omit<ParamsFrom<'describeManagedPrefixLists', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeManagedPrefixLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeManagedPrefixLists'>]-?: ReturnTypeFrom<'describeManagedPrefixLists'>[K]}['PrefixLists'] }>
  describeManagedPrefixLists(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeManagedPrefixLists'>]-?: ReturnTypeFrom<'describeManagedPrefixLists'>[K]}['PrefixLists'] }>;

  describeMovingAddresses(params: { [K in keyof Omit<ParamsFrom<'describeMovingAddresses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMovingAddresses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMovingAddresses'>]-?: ReturnTypeFrom<'describeMovingAddresses'>[K]}['MovingAddressStatuses'] }>
  describeMovingAddresses(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMovingAddresses'>]-?: ReturnTypeFrom<'describeMovingAddresses'>[K]}['MovingAddressStatuses'] }>;

  describeNatGateways(params: { [K in keyof Omit<ParamsFrom<'describeNatGateways', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeNatGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNatGateways'>]-?: ReturnTypeFrom<'describeNatGateways'>[K]}['NatGateways'] }>
  describeNatGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNatGateways'>]-?: ReturnTypeFrom<'describeNatGateways'>[K]}['NatGateways'] }>;

  describeNetworkAcls(params: { [K in keyof Omit<ParamsFrom<'describeNetworkAcls', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeNetworkAcls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkAcls'>]-?: ReturnTypeFrom<'describeNetworkAcls'>[K]}['NetworkAcls'] }>
  describeNetworkAcls(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkAcls'>]-?: ReturnTypeFrom<'describeNetworkAcls'>[K]}['NetworkAcls'] }>;

  describeNetworkInsightsAccessScopeAnalyses(params: { [K in keyof Omit<ParamsFrom<'describeNetworkInsightsAccessScopeAnalyses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeNetworkInsightsAccessScopeAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInsightsAccessScopeAnalyses'>]-?: ReturnTypeFrom<'describeNetworkInsightsAccessScopeAnalyses'>[K]}['NetworkInsightsAccessScopeAnalyses'] }>
  describeNetworkInsightsAccessScopeAnalyses(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInsightsAccessScopeAnalyses'>]-?: ReturnTypeFrom<'describeNetworkInsightsAccessScopeAnalyses'>[K]}['NetworkInsightsAccessScopeAnalyses'] }>;

  describeNetworkInsightsAccessScopes(params: { [K in keyof Omit<ParamsFrom<'describeNetworkInsightsAccessScopes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeNetworkInsightsAccessScopes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInsightsAccessScopes'>]-?: ReturnTypeFrom<'describeNetworkInsightsAccessScopes'>[K]}['NetworkInsightsAccessScopes'] }>
  describeNetworkInsightsAccessScopes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInsightsAccessScopes'>]-?: ReturnTypeFrom<'describeNetworkInsightsAccessScopes'>[K]}['NetworkInsightsAccessScopes'] }>;

  describeNetworkInsightsAnalyses(params: { [K in keyof Omit<ParamsFrom<'describeNetworkInsightsAnalyses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeNetworkInsightsAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInsightsAnalyses'>]-?: ReturnTypeFrom<'describeNetworkInsightsAnalyses'>[K]}['NetworkInsightsAnalyses'] }>
  describeNetworkInsightsAnalyses(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInsightsAnalyses'>]-?: ReturnTypeFrom<'describeNetworkInsightsAnalyses'>[K]}['NetworkInsightsAnalyses'] }>;

  describeNetworkInsightsPaths(params: { [K in keyof Omit<ParamsFrom<'describeNetworkInsightsPaths', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeNetworkInsightsPaths', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInsightsPaths'>]-?: ReturnTypeFrom<'describeNetworkInsightsPaths'>[K]}['NetworkInsightsPaths'] }>
  describeNetworkInsightsPaths(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInsightsPaths'>]-?: ReturnTypeFrom<'describeNetworkInsightsPaths'>[K]}['NetworkInsightsPaths'] }>;

  describeNetworkInterfaceAttribute: FunctionTypeFrom<'describeNetworkInterfaceAttribute'>;

  describeNetworkInterfacePermissions(params: { [K in keyof Omit<ParamsFrom<'describeNetworkInterfacePermissions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeNetworkInterfacePermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInterfacePermissions'>]-?: ReturnTypeFrom<'describeNetworkInterfacePermissions'>[K]}['NetworkInterfacePermissions'] }>
  describeNetworkInterfacePermissions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInterfacePermissions'>]-?: ReturnTypeFrom<'describeNetworkInterfacePermissions'>[K]}['NetworkInterfacePermissions'] }>;

  describeNetworkInterfaces(params: { [K in keyof Omit<ParamsFrom<'describeNetworkInterfaces', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeNetworkInterfaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInterfaces'>]-?: ReturnTypeFrom<'describeNetworkInterfaces'>[K]}['NetworkInterfaces'] }>
  describeNetworkInterfaces(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeNetworkInterfaces'>]-?: ReturnTypeFrom<'describeNetworkInterfaces'>[K]}['NetworkInterfaces'] }>;

  describePlacementGroups: FunctionTypeFrom<'describePlacementGroups'>;

  describePrefixLists(params: { [K in keyof Omit<ParamsFrom<'describePrefixLists', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describePrefixLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePrefixLists'>]-?: ReturnTypeFrom<'describePrefixLists'>[K]}['PrefixLists'] }>
  describePrefixLists(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePrefixLists'>]-?: ReturnTypeFrom<'describePrefixLists'>[K]}['PrefixLists'] }>;

  describePrincipalIdFormat(params: { [K in keyof Omit<ParamsFrom<'describePrincipalIdFormat', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describePrincipalIdFormat', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePrincipalIdFormat'>]-?: ReturnTypeFrom<'describePrincipalIdFormat'>[K]}['Principals'] }>
  describePrincipalIdFormat(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePrincipalIdFormat'>]-?: ReturnTypeFrom<'describePrincipalIdFormat'>[K]}['Principals'] }>;

  describePublicIpv4Pools(params: { [K in keyof Omit<ParamsFrom<'describePublicIpv4Pools', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describePublicIpv4Pools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePublicIpv4Pools'>]-?: ReturnTypeFrom<'describePublicIpv4Pools'>[K]}['PublicIpv4Pools'] }>
  describePublicIpv4Pools(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePublicIpv4Pools'>]-?: ReturnTypeFrom<'describePublicIpv4Pools'>[K]}['PublicIpv4Pools'] }>;

  describeRegions: FunctionTypeFrom<'describeRegions'>;

  describeReplaceRootVolumeTasks(params: { [K in keyof Omit<ParamsFrom<'describeReplaceRootVolumeTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeReplaceRootVolumeTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReplaceRootVolumeTasks'>]-?: ReturnTypeFrom<'describeReplaceRootVolumeTasks'>[K]}['ReplaceRootVolumeTasks'] }>
  describeReplaceRootVolumeTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReplaceRootVolumeTasks'>]-?: ReturnTypeFrom<'describeReplaceRootVolumeTasks'>[K]}['ReplaceRootVolumeTasks'] }>;

  describeReservedInstances: FunctionTypeFrom<'describeReservedInstances'>;

  describeReservedInstancesListings: FunctionTypeFrom<'describeReservedInstancesListings'>;

  describeReservedInstancesModifications(params: { [K in keyof Omit<ParamsFrom<'describeReservedInstancesModifications', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeReservedInstancesModifications', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedInstancesModifications'>]-?: ReturnTypeFrom<'describeReservedInstancesModifications'>[K]}['ReservedInstancesModifications'] }>
  describeReservedInstancesModifications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedInstancesModifications'>]-?: ReturnTypeFrom<'describeReservedInstancesModifications'>[K]}['ReservedInstancesModifications'] }>;

  describeReservedInstancesOfferings(params: { [K in keyof Omit<ParamsFrom<'describeReservedInstancesOfferings', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeReservedInstancesOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedInstancesOfferings'>]-?: ReturnTypeFrom<'describeReservedInstancesOfferings'>[K]}['ReservedInstancesOfferings'] }>
  describeReservedInstancesOfferings(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReservedInstancesOfferings'>]-?: ReturnTypeFrom<'describeReservedInstancesOfferings'>[K]}['ReservedInstancesOfferings'] }>;

  describeRouteTables(params: { [K in keyof Omit<ParamsFrom<'describeRouteTables', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeRouteTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRouteTables'>]-?: ReturnTypeFrom<'describeRouteTables'>[K]}['RouteTables'] }>
  describeRouteTables(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRouteTables'>]-?: ReturnTypeFrom<'describeRouteTables'>[K]}['RouteTables'] }>;

  describeScheduledInstanceAvailability(params: { [K in keyof Omit<ParamsFrom<'describeScheduledInstanceAvailability', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeScheduledInstanceAvailability', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScheduledInstanceAvailability'>]-?: ReturnTypeFrom<'describeScheduledInstanceAvailability'>[K]}['ScheduledInstanceAvailabilitySet'] }>
  ;

  describeScheduledInstances(params: { [K in keyof Omit<ParamsFrom<'describeScheduledInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeScheduledInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScheduledInstances'>]-?: ReturnTypeFrom<'describeScheduledInstances'>[K]}['ScheduledInstanceSet'] }>
  describeScheduledInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScheduledInstances'>]-?: ReturnTypeFrom<'describeScheduledInstances'>[K]}['ScheduledInstanceSet'] }>;

  describeSecurityGroupReferences: FunctionTypeFrom<'describeSecurityGroupReferences'>;

  describeSecurityGroupRules(params: { [K in keyof Omit<ParamsFrom<'describeSecurityGroupRules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSecurityGroupRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSecurityGroupRules'>]-?: ReturnTypeFrom<'describeSecurityGroupRules'>[K]}['SecurityGroupRules'] }>
  describeSecurityGroupRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSecurityGroupRules'>]-?: ReturnTypeFrom<'describeSecurityGroupRules'>[K]}['SecurityGroupRules'] }>;

  describeSecurityGroups(params: { [K in keyof Omit<ParamsFrom<'describeSecurityGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSecurityGroups'>]-?: ReturnTypeFrom<'describeSecurityGroups'>[K]}['SecurityGroups'] }>
  describeSecurityGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSecurityGroups'>]-?: ReturnTypeFrom<'describeSecurityGroups'>[K]}['SecurityGroups'] }>;

  describeSnapshotAttribute: FunctionTypeFrom<'describeSnapshotAttribute'>;

  describeSnapshotTierStatus(params: { [K in keyof Omit<ParamsFrom<'describeSnapshotTierStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSnapshotTierStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshotTierStatus'>]-?: ReturnTypeFrom<'describeSnapshotTierStatus'>[K]}['SnapshotTierStatuses'] }>
  describeSnapshotTierStatus(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshotTierStatus'>]-?: ReturnTypeFrom<'describeSnapshotTierStatus'>[K]}['SnapshotTierStatuses'] }>;

  describeSnapshots(params: { [K in keyof Omit<ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshots'>]-?: ReturnTypeFrom<'describeSnapshots'>[K]}['Snapshots'] }>
  describeSnapshots(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSnapshots'>]-?: ReturnTypeFrom<'describeSnapshots'>[K]}['Snapshots'] }>;

  describeSpotDatafeedSubscription: FunctionTypeFrom<'describeSpotDatafeedSubscription'>;

  describeSpotFleetInstances: FunctionTypeFrom<'describeSpotFleetInstances'>;

  describeSpotFleetRequestHistory: FunctionTypeFrom<'describeSpotFleetRequestHistory'>;

  describeSpotFleetRequests(params: { [K in keyof Omit<ParamsFrom<'describeSpotFleetRequests', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSpotFleetRequests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSpotFleetRequests'>]-?: ReturnTypeFrom<'describeSpotFleetRequests'>[K]}['SpotFleetRequestConfigs'] }>
  describeSpotFleetRequests(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSpotFleetRequests'>]-?: ReturnTypeFrom<'describeSpotFleetRequests'>[K]}['SpotFleetRequestConfigs'] }>;

  describeSpotInstanceRequests(params: { [K in keyof Omit<ParamsFrom<'describeSpotInstanceRequests', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSpotInstanceRequests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSpotInstanceRequests'>]-?: ReturnTypeFrom<'describeSpotInstanceRequests'>[K]}['SpotInstanceRequests'] }>
  describeSpotInstanceRequests(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSpotInstanceRequests'>]-?: ReturnTypeFrom<'describeSpotInstanceRequests'>[K]}['SpotInstanceRequests'] }>;

  describeSpotPriceHistory(params: { [K in keyof Omit<ParamsFrom<'describeSpotPriceHistory', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSpotPriceHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSpotPriceHistory'>]-?: ReturnTypeFrom<'describeSpotPriceHistory'>[K]}['SpotPriceHistory'] }>
  describeSpotPriceHistory(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSpotPriceHistory'>]-?: ReturnTypeFrom<'describeSpotPriceHistory'>[K]}['SpotPriceHistory'] }>;

  describeStaleSecurityGroups(params: { [K in keyof Omit<ParamsFrom<'describeStaleSecurityGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeStaleSecurityGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStaleSecurityGroups'>]-?: ReturnTypeFrom<'describeStaleSecurityGroups'>[K]}['StaleSecurityGroupSet'] }>
  ;

  describeStoreImageTasks(params: { [K in keyof Omit<ParamsFrom<'describeStoreImageTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeStoreImageTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStoreImageTasks'>]-?: ReturnTypeFrom<'describeStoreImageTasks'>[K]}['StoreImageTaskResults'] }>
  describeStoreImageTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStoreImageTasks'>]-?: ReturnTypeFrom<'describeStoreImageTasks'>[K]}['StoreImageTaskResults'] }>;

  describeSubnets(params: { [K in keyof Omit<ParamsFrom<'describeSubnets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSubnets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSubnets'>]-?: ReturnTypeFrom<'describeSubnets'>[K]}['Subnets'] }>
  describeSubnets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSubnets'>]-?: ReturnTypeFrom<'describeSubnets'>[K]}['Subnets'] }>;

  describeTags(params: { [K in keyof Omit<ParamsFrom<'describeTags', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['Tags'] }>
  describeTags(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTags'>]-?: ReturnTypeFrom<'describeTags'>[K]}['Tags'] }>;

  describeTrafficMirrorFilters(params: { [K in keyof Omit<ParamsFrom<'describeTrafficMirrorFilters', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTrafficMirrorFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTrafficMirrorFilters'>]-?: ReturnTypeFrom<'describeTrafficMirrorFilters'>[K]}['TrafficMirrorFilters'] }>
  describeTrafficMirrorFilters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTrafficMirrorFilters'>]-?: ReturnTypeFrom<'describeTrafficMirrorFilters'>[K]}['TrafficMirrorFilters'] }>;

  describeTrafficMirrorSessions(params: { [K in keyof Omit<ParamsFrom<'describeTrafficMirrorSessions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTrafficMirrorSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTrafficMirrorSessions'>]-?: ReturnTypeFrom<'describeTrafficMirrorSessions'>[K]}['TrafficMirrorSessions'] }>
  describeTrafficMirrorSessions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTrafficMirrorSessions'>]-?: ReturnTypeFrom<'describeTrafficMirrorSessions'>[K]}['TrafficMirrorSessions'] }>;

  describeTrafficMirrorTargets(params: { [K in keyof Omit<ParamsFrom<'describeTrafficMirrorTargets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTrafficMirrorTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTrafficMirrorTargets'>]-?: ReturnTypeFrom<'describeTrafficMirrorTargets'>[K]}['TrafficMirrorTargets'] }>
  describeTrafficMirrorTargets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTrafficMirrorTargets'>]-?: ReturnTypeFrom<'describeTrafficMirrorTargets'>[K]}['TrafficMirrorTargets'] }>;

  describeTransitGatewayAttachments(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayAttachments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayAttachments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayAttachments'>[K]}['TransitGatewayAttachments'] }>
  describeTransitGatewayAttachments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayAttachments'>[K]}['TransitGatewayAttachments'] }>;

  describeTransitGatewayConnectPeers(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayConnectPeers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayConnectPeers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayConnectPeers'>]-?: ReturnTypeFrom<'describeTransitGatewayConnectPeers'>[K]}['TransitGatewayConnectPeers'] }>
  describeTransitGatewayConnectPeers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayConnectPeers'>]-?: ReturnTypeFrom<'describeTransitGatewayConnectPeers'>[K]}['TransitGatewayConnectPeers'] }>;

  describeTransitGatewayConnects(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayConnects', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayConnects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayConnects'>]-?: ReturnTypeFrom<'describeTransitGatewayConnects'>[K]}['TransitGatewayConnects'] }>
  describeTransitGatewayConnects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayConnects'>]-?: ReturnTypeFrom<'describeTransitGatewayConnects'>[K]}['TransitGatewayConnects'] }>;

  describeTransitGatewayMulticastDomains(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayMulticastDomains', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayMulticastDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayMulticastDomains'>]-?: ReturnTypeFrom<'describeTransitGatewayMulticastDomains'>[K]}['TransitGatewayMulticastDomains'] }>
  describeTransitGatewayMulticastDomains(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayMulticastDomains'>]-?: ReturnTypeFrom<'describeTransitGatewayMulticastDomains'>[K]}['TransitGatewayMulticastDomains'] }>;

  describeTransitGatewayPeeringAttachments(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayPeeringAttachments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayPeeringAttachments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayPeeringAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayPeeringAttachments'>[K]}['TransitGatewayPeeringAttachments'] }>
  describeTransitGatewayPeeringAttachments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayPeeringAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayPeeringAttachments'>[K]}['TransitGatewayPeeringAttachments'] }>;

  describeTransitGatewayPolicyTables(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayPolicyTables', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayPolicyTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayPolicyTables'>]-?: ReturnTypeFrom<'describeTransitGatewayPolicyTables'>[K]}['TransitGatewayPolicyTables'] }>
  describeTransitGatewayPolicyTables(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayPolicyTables'>]-?: ReturnTypeFrom<'describeTransitGatewayPolicyTables'>[K]}['TransitGatewayPolicyTables'] }>;

  describeTransitGatewayRouteTableAnnouncements(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayRouteTableAnnouncements', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayRouteTableAnnouncements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayRouteTableAnnouncements'>]-?: ReturnTypeFrom<'describeTransitGatewayRouteTableAnnouncements'>[K]}['TransitGatewayRouteTableAnnouncements'] }>
  describeTransitGatewayRouteTableAnnouncements(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayRouteTableAnnouncements'>]-?: ReturnTypeFrom<'describeTransitGatewayRouteTableAnnouncements'>[K]}['TransitGatewayRouteTableAnnouncements'] }>;

  describeTransitGatewayRouteTables(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayRouteTables', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayRouteTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayRouteTables'>]-?: ReturnTypeFrom<'describeTransitGatewayRouteTables'>[K]}['TransitGatewayRouteTables'] }>
  describeTransitGatewayRouteTables(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayRouteTables'>]-?: ReturnTypeFrom<'describeTransitGatewayRouteTables'>[K]}['TransitGatewayRouteTables'] }>;

  describeTransitGatewayVpcAttachments(params: { [K in keyof Omit<ParamsFrom<'describeTransitGatewayVpcAttachments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGatewayVpcAttachments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayVpcAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayVpcAttachments'>[K]}['TransitGatewayVpcAttachments'] }>
  describeTransitGatewayVpcAttachments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGatewayVpcAttachments'>]-?: ReturnTypeFrom<'describeTransitGatewayVpcAttachments'>[K]}['TransitGatewayVpcAttachments'] }>;

  describeTransitGateways(params: { [K in keyof Omit<ParamsFrom<'describeTransitGateways', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTransitGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGateways'>]-?: ReturnTypeFrom<'describeTransitGateways'>[K]}['TransitGateways'] }>
  describeTransitGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTransitGateways'>]-?: ReturnTypeFrom<'describeTransitGateways'>[K]}['TransitGateways'] }>;

  describeTrunkInterfaceAssociations(params: { [K in keyof Omit<ParamsFrom<'describeTrunkInterfaceAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeTrunkInterfaceAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTrunkInterfaceAssociations'>]-?: ReturnTypeFrom<'describeTrunkInterfaceAssociations'>[K]}['InterfaceAssociations'] }>
  describeTrunkInterfaceAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTrunkInterfaceAssociations'>]-?: ReturnTypeFrom<'describeTrunkInterfaceAssociations'>[K]}['InterfaceAssociations'] }>;

  describeVolumeAttribute: FunctionTypeFrom<'describeVolumeAttribute'>;

  describeVolumeStatus(params: { [K in keyof Omit<ParamsFrom<'describeVolumeStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVolumeStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVolumeStatus'>]-?: ReturnTypeFrom<'describeVolumeStatus'>[K]}['VolumeStatuses'] }>
  describeVolumeStatus(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVolumeStatus'>]-?: ReturnTypeFrom<'describeVolumeStatus'>[K]}['VolumeStatuses'] }>;

  describeVolumes(params: { [K in keyof Omit<ParamsFrom<'describeVolumes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVolumes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVolumes'>]-?: ReturnTypeFrom<'describeVolumes'>[K]}['Volumes'] }>
  describeVolumes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVolumes'>]-?: ReturnTypeFrom<'describeVolumes'>[K]}['Volumes'] }>;

  describeVolumesModifications(params: { [K in keyof Omit<ParamsFrom<'describeVolumesModifications', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVolumesModifications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVolumesModifications'>]-?: ReturnTypeFrom<'describeVolumesModifications'>[K]}['VolumesModifications'] }>
  describeVolumesModifications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVolumesModifications'>]-?: ReturnTypeFrom<'describeVolumesModifications'>[K]}['VolumesModifications'] }>;

  describeVpcAttribute: FunctionTypeFrom<'describeVpcAttribute'>;

  describeVpcClassicLink: FunctionTypeFrom<'describeVpcClassicLink'>;

  describeVpcClassicLinkDnsSupport(params: { [K in keyof Omit<ParamsFrom<'describeVpcClassicLinkDnsSupport', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVpcClassicLinkDnsSupport', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcClassicLinkDnsSupport'>]-?: ReturnTypeFrom<'describeVpcClassicLinkDnsSupport'>[K]}['Vpcs'] }>
  describeVpcClassicLinkDnsSupport(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcClassicLinkDnsSupport'>]-?: ReturnTypeFrom<'describeVpcClassicLinkDnsSupport'>[K]}['Vpcs'] }>;

  describeVpcEndpointConnectionNotifications(params: { [K in keyof Omit<ParamsFrom<'describeVpcEndpointConnectionNotifications', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVpcEndpointConnectionNotifications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpointConnectionNotifications'>]-?: ReturnTypeFrom<'describeVpcEndpointConnectionNotifications'>[K]}['ConnectionNotificationSet'] }>
  describeVpcEndpointConnectionNotifications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpointConnectionNotifications'>]-?: ReturnTypeFrom<'describeVpcEndpointConnectionNotifications'>[K]}['ConnectionNotificationSet'] }>;

  describeVpcEndpointConnections(params: { [K in keyof Omit<ParamsFrom<'describeVpcEndpointConnections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVpcEndpointConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpointConnections'>]-?: ReturnTypeFrom<'describeVpcEndpointConnections'>[K]}['VpcEndpointConnections'] }>
  describeVpcEndpointConnections(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpointConnections'>]-?: ReturnTypeFrom<'describeVpcEndpointConnections'>[K]}['VpcEndpointConnections'] }>;

  describeVpcEndpointServiceConfigurations(params: { [K in keyof Omit<ParamsFrom<'describeVpcEndpointServiceConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVpcEndpointServiceConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpointServiceConfigurations'>]-?: ReturnTypeFrom<'describeVpcEndpointServiceConfigurations'>[K]}['ServiceConfigurations'] }>
  describeVpcEndpointServiceConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpointServiceConfigurations'>]-?: ReturnTypeFrom<'describeVpcEndpointServiceConfigurations'>[K]}['ServiceConfigurations'] }>;

  describeVpcEndpointServicePermissions(params: { [K in keyof Omit<ParamsFrom<'describeVpcEndpointServicePermissions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVpcEndpointServicePermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpointServicePermissions'>]-?: ReturnTypeFrom<'describeVpcEndpointServicePermissions'>[K]}['AllowedPrincipals'] }>
  ;

  describeVpcEndpointServices: FunctionTypeFrom<'describeVpcEndpointServices'>;

  describeVpcEndpoints(params: { [K in keyof Omit<ParamsFrom<'describeVpcEndpoints', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVpcEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpoints'>]-?: ReturnTypeFrom<'describeVpcEndpoints'>[K]}['VpcEndpoints'] }>
  describeVpcEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcEndpoints'>]-?: ReturnTypeFrom<'describeVpcEndpoints'>[K]}['VpcEndpoints'] }>;

  describeVpcPeeringConnections(params: { [K in keyof Omit<ParamsFrom<'describeVpcPeeringConnections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVpcPeeringConnections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcPeeringConnections'>]-?: ReturnTypeFrom<'describeVpcPeeringConnections'>[K]}['VpcPeeringConnections'] }>
  describeVpcPeeringConnections(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcPeeringConnections'>]-?: ReturnTypeFrom<'describeVpcPeeringConnections'>[K]}['VpcPeeringConnections'] }>;

  describeVpcs(params: { [K in keyof Omit<ParamsFrom<'describeVpcs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVpcs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcs'>]-?: ReturnTypeFrom<'describeVpcs'>[K]}['Vpcs'] }>
  describeVpcs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVpcs'>]-?: ReturnTypeFrom<'describeVpcs'>[K]}['Vpcs'] }>;

  describeVpnConnections: FunctionTypeFrom<'describeVpnConnections'>;

  describeVpnGateways: FunctionTypeFrom<'describeVpnGateways'>;

  detachClassicLinkVpc: FunctionTypeFrom<'detachClassicLinkVpc'>;

  detachInternetGateway: FunctionTypeFrom<'detachInternetGateway'>;

  detachNetworkInterface: FunctionTypeFrom<'detachNetworkInterface'>;

  detachVolume: FunctionTypeFrom<'detachVolume'>;

  detachVpnGateway: FunctionTypeFrom<'detachVpnGateway'>;

  disableEbsEncryptionByDefault: FunctionTypeFrom<'disableEbsEncryptionByDefault'>;

  disableFastLaunch: FunctionTypeFrom<'disableFastLaunch'>;

  disableFastSnapshotRestores: FunctionTypeFrom<'disableFastSnapshotRestores'>;

  disableImageDeprecation: FunctionTypeFrom<'disableImageDeprecation'>;

  disableIpamOrganizationAdminAccount: FunctionTypeFrom<'disableIpamOrganizationAdminAccount'>;

  disableSerialConsoleAccess: FunctionTypeFrom<'disableSerialConsoleAccess'>;

  disableTransitGatewayRouteTablePropagation: FunctionTypeFrom<'disableTransitGatewayRouteTablePropagation'>;

  disableVgwRoutePropagation: FunctionTypeFrom<'disableVgwRoutePropagation'>;

  disableVpcClassicLink: FunctionTypeFrom<'disableVpcClassicLink'>;

  disableVpcClassicLinkDnsSupport: FunctionTypeFrom<'disableVpcClassicLinkDnsSupport'>;

  disassociateAddress: FunctionTypeFrom<'disassociateAddress'>;

  disassociateClientVpnTargetNetwork: FunctionTypeFrom<'disassociateClientVpnTargetNetwork'>;

  disassociateEnclaveCertificateIamRole: FunctionTypeFrom<'disassociateEnclaveCertificateIamRole'>;

  disassociateIamInstanceProfile: FunctionTypeFrom<'disassociateIamInstanceProfile'>;

  disassociateInstanceEventWindow: FunctionTypeFrom<'disassociateInstanceEventWindow'>;

  disassociateRouteTable: FunctionTypeFrom<'disassociateRouteTable'>;

  disassociateSubnetCidrBlock: FunctionTypeFrom<'disassociateSubnetCidrBlock'>;

  disassociateTransitGatewayMulticastDomain: FunctionTypeFrom<'disassociateTransitGatewayMulticastDomain'>;

  disassociateTransitGatewayPolicyTable: FunctionTypeFrom<'disassociateTransitGatewayPolicyTable'>;

  disassociateTransitGatewayRouteTable: FunctionTypeFrom<'disassociateTransitGatewayRouteTable'>;

  disassociateTrunkInterface: FunctionTypeFrom<'disassociateTrunkInterface'>;

  disassociateVpcCidrBlock: FunctionTypeFrom<'disassociateVpcCidrBlock'>;

  enableEbsEncryptionByDefault: FunctionTypeFrom<'enableEbsEncryptionByDefault'>;

  enableFastLaunch: FunctionTypeFrom<'enableFastLaunch'>;

  enableFastSnapshotRestores: FunctionTypeFrom<'enableFastSnapshotRestores'>;

  enableImageDeprecation: FunctionTypeFrom<'enableImageDeprecation'>;

  enableIpamOrganizationAdminAccount: FunctionTypeFrom<'enableIpamOrganizationAdminAccount'>;

  enableSerialConsoleAccess: FunctionTypeFrom<'enableSerialConsoleAccess'>;

  enableTransitGatewayRouteTablePropagation: FunctionTypeFrom<'enableTransitGatewayRouteTablePropagation'>;

  enableVgwRoutePropagation: FunctionTypeFrom<'enableVgwRoutePropagation'>;

  enableVolumeIO: FunctionTypeFrom<'enableVolumeIO'>;

  enableVpcClassicLink: FunctionTypeFrom<'enableVpcClassicLink'>;

  enableVpcClassicLinkDnsSupport: FunctionTypeFrom<'enableVpcClassicLinkDnsSupport'>;

  exportClientVpnClientCertificateRevocationList: FunctionTypeFrom<'exportClientVpnClientCertificateRevocationList'>;

  exportClientVpnClientConfiguration: FunctionTypeFrom<'exportClientVpnClientConfiguration'>;

  exportImage: FunctionTypeFrom<'exportImage'>;

  exportTransitGatewayRoutes: FunctionTypeFrom<'exportTransitGatewayRoutes'>;

  getAssociatedEnclaveCertificateIamRoles: FunctionTypeFrom<'getAssociatedEnclaveCertificateIamRoles'>;

  getAssociatedIpv6PoolCidrs(params: { [K in keyof Omit<ParamsFrom<'getAssociatedIpv6PoolCidrs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getAssociatedIpv6PoolCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getAssociatedIpv6PoolCidrs'>]-?: ReturnTypeFrom<'getAssociatedIpv6PoolCidrs'>[K]}['Ipv6CidrAssociations'] }>
  ;

  getCapacityReservationUsage: FunctionTypeFrom<'getCapacityReservationUsage'>;

  getCoipPoolUsage: FunctionTypeFrom<'getCoipPoolUsage'>;

  getConsoleOutput: FunctionTypeFrom<'getConsoleOutput'>;

  getConsoleScreenshot: FunctionTypeFrom<'getConsoleScreenshot'>;

  getDefaultCreditSpecification: FunctionTypeFrom<'getDefaultCreditSpecification'>;

  getEbsDefaultKmsKeyId: FunctionTypeFrom<'getEbsDefaultKmsKeyId'>;

  getEbsEncryptionByDefault: FunctionTypeFrom<'getEbsEncryptionByDefault'>;

  getFlowLogsIntegrationTemplate: FunctionTypeFrom<'getFlowLogsIntegrationTemplate'>;

  getGroupsForCapacityReservation(params: { [K in keyof Omit<ParamsFrom<'getGroupsForCapacityReservation', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getGroupsForCapacityReservation', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getGroupsForCapacityReservation'>]-?: ReturnTypeFrom<'getGroupsForCapacityReservation'>[K]}['CapacityReservationGroups'] }>
  ;

  getHostReservationPurchasePreview: FunctionTypeFrom<'getHostReservationPurchasePreview'>;

  getInstanceTypesFromInstanceRequirements(params: { [K in keyof Omit<ParamsFrom<'getInstanceTypesFromInstanceRequirements', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getInstanceTypesFromInstanceRequirements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getInstanceTypesFromInstanceRequirements'>]-?: ReturnTypeFrom<'getInstanceTypesFromInstanceRequirements'>[K]}['InstanceTypes'] }>
  ;

  getInstanceUefiData: FunctionTypeFrom<'getInstanceUefiData'>;

  getIpamAddressHistory(params: { [K in keyof Omit<ParamsFrom<'getIpamAddressHistory', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getIpamAddressHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getIpamAddressHistory'>]-?: ReturnTypeFrom<'getIpamAddressHistory'>[K]}['HistoryRecords'] }>
  ;

  getIpamPoolAllocations(params: { [K in keyof Omit<ParamsFrom<'getIpamPoolAllocations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getIpamPoolAllocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getIpamPoolAllocations'>]-?: ReturnTypeFrom<'getIpamPoolAllocations'>[K]}['IpamPoolAllocations'] }>
  ;

  getIpamPoolCidrs(params: { [K in keyof Omit<ParamsFrom<'getIpamPoolCidrs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getIpamPoolCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getIpamPoolCidrs'>]-?: ReturnTypeFrom<'getIpamPoolCidrs'>[K]}['IpamPoolCidrs'] }>
  ;

  getIpamResourceCidrs(params: { [K in keyof Omit<ParamsFrom<'getIpamResourceCidrs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getIpamResourceCidrs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getIpamResourceCidrs'>]-?: ReturnTypeFrom<'getIpamResourceCidrs'>[K]}['IpamResourceCidrs'] }>
  ;

  getLaunchTemplateData: FunctionTypeFrom<'getLaunchTemplateData'>;

  getManagedPrefixListAssociations(params: { [K in keyof Omit<ParamsFrom<'getManagedPrefixListAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getManagedPrefixListAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getManagedPrefixListAssociations'>]-?: ReturnTypeFrom<'getManagedPrefixListAssociations'>[K]}['PrefixListAssociations'] }>
  ;

  getManagedPrefixListEntries(params: { [K in keyof Omit<ParamsFrom<'getManagedPrefixListEntries', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getManagedPrefixListEntries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getManagedPrefixListEntries'>]-?: ReturnTypeFrom<'getManagedPrefixListEntries'>[K]}['Entries'] }>
  ;

  getNetworkInsightsAccessScopeAnalysisFindings: FunctionTypeFrom<'getNetworkInsightsAccessScopeAnalysisFindings'>;

  getNetworkInsightsAccessScopeContent: FunctionTypeFrom<'getNetworkInsightsAccessScopeContent'>;

  getPasswordData: FunctionTypeFrom<'getPasswordData'>;

  getReservedInstancesExchangeQuote: FunctionTypeFrom<'getReservedInstancesExchangeQuote'>;

  getSerialConsoleAccessStatus: FunctionTypeFrom<'getSerialConsoleAccessStatus'>;

  getSpotPlacementScores(params: { [K in keyof Omit<ParamsFrom<'getSpotPlacementScores', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getSpotPlacementScores', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSpotPlacementScores'>]-?: ReturnTypeFrom<'getSpotPlacementScores'>[K]}['SpotPlacementScores'] }>
  ;

  getSubnetCidrReservations: FunctionTypeFrom<'getSubnetCidrReservations'>;

  getTransitGatewayAttachmentPropagations(params: { [K in keyof Omit<ParamsFrom<'getTransitGatewayAttachmentPropagations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getTransitGatewayAttachmentPropagations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayAttachmentPropagations'>]-?: ReturnTypeFrom<'getTransitGatewayAttachmentPropagations'>[K]}['TransitGatewayAttachmentPropagations'] }>
  ;

  getTransitGatewayMulticastDomainAssociations(params: { [K in keyof Omit<ParamsFrom<'getTransitGatewayMulticastDomainAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getTransitGatewayMulticastDomainAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayMulticastDomainAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayMulticastDomainAssociations'>[K]}['MulticastDomainAssociations'] }>
  getTransitGatewayMulticastDomainAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayMulticastDomainAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayMulticastDomainAssociations'>[K]}['MulticastDomainAssociations'] }>;

  getTransitGatewayPolicyTableAssociations(params: { [K in keyof Omit<ParamsFrom<'getTransitGatewayPolicyTableAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getTransitGatewayPolicyTableAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayPolicyTableAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayPolicyTableAssociations'>[K]}['Associations'] }>
  ;

  getTransitGatewayPolicyTableEntries: FunctionTypeFrom<'getTransitGatewayPolicyTableEntries'>;

  getTransitGatewayPrefixListReferences(params: { [K in keyof Omit<ParamsFrom<'getTransitGatewayPrefixListReferences', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getTransitGatewayPrefixListReferences', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayPrefixListReferences'>]-?: ReturnTypeFrom<'getTransitGatewayPrefixListReferences'>[K]}['TransitGatewayPrefixListReferences'] }>
  ;

  getTransitGatewayRouteTableAssociations(params: { [K in keyof Omit<ParamsFrom<'getTransitGatewayRouteTableAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getTransitGatewayRouteTableAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayRouteTableAssociations'>]-?: ReturnTypeFrom<'getTransitGatewayRouteTableAssociations'>[K]}['Associations'] }>
  ;

  getTransitGatewayRouteTablePropagations(params: { [K in keyof Omit<ParamsFrom<'getTransitGatewayRouteTablePropagations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getTransitGatewayRouteTablePropagations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTransitGatewayRouteTablePropagations'>]-?: ReturnTypeFrom<'getTransitGatewayRouteTablePropagations'>[K]}['TransitGatewayRouteTablePropagations'] }>
  ;

  getVpnConnectionDeviceSampleConfiguration: FunctionTypeFrom<'getVpnConnectionDeviceSampleConfiguration'>;

  getVpnConnectionDeviceTypes(params: { [K in keyof Omit<ParamsFrom<'getVpnConnectionDeviceTypes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getVpnConnectionDeviceTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getVpnConnectionDeviceTypes'>]-?: ReturnTypeFrom<'getVpnConnectionDeviceTypes'>[K]}['VpnConnectionDeviceTypes'] }>
  getVpnConnectionDeviceTypes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getVpnConnectionDeviceTypes'>]-?: ReturnTypeFrom<'getVpnConnectionDeviceTypes'>[K]}['VpnConnectionDeviceTypes'] }>;

  importClientVpnClientCertificateRevocationList: FunctionTypeFrom<'importClientVpnClientCertificateRevocationList'>;

  importImage: FunctionTypeFrom<'importImage'>;

  importInstance: FunctionTypeFrom<'importInstance'>;

  importKeyPair: FunctionTypeFrom<'importKeyPair'>;

  importSnapshot: FunctionTypeFrom<'importSnapshot'>;

  importVolume: FunctionTypeFrom<'importVolume'>;

  listImagesInRecycleBin(params: { [K in keyof Omit<ParamsFrom<'listImagesInRecycleBin', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listImagesInRecycleBin', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImagesInRecycleBin'>]-?: ReturnTypeFrom<'listImagesInRecycleBin'>[K]}['Images'] }>
  listImagesInRecycleBin(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImagesInRecycleBin'>]-?: ReturnTypeFrom<'listImagesInRecycleBin'>[K]}['Images'] }>;

  listSnapshotsInRecycleBin(params: { [K in keyof Omit<ParamsFrom<'listSnapshotsInRecycleBin', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSnapshotsInRecycleBin', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSnapshotsInRecycleBin'>]-?: ReturnTypeFrom<'listSnapshotsInRecycleBin'>[K]}['Snapshots'] }>
  listSnapshotsInRecycleBin(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSnapshotsInRecycleBin'>]-?: ReturnTypeFrom<'listSnapshotsInRecycleBin'>[K]}['Snapshots'] }>;

  modifyAddressAttribute: FunctionTypeFrom<'modifyAddressAttribute'>;

  modifyAvailabilityZoneGroup: FunctionTypeFrom<'modifyAvailabilityZoneGroup'>;

  modifyCapacityReservation: FunctionTypeFrom<'modifyCapacityReservation'>;

  modifyCapacityReservationFleet: FunctionTypeFrom<'modifyCapacityReservationFleet'>;

  modifyClientVpnEndpoint: FunctionTypeFrom<'modifyClientVpnEndpoint'>;

  modifyDefaultCreditSpecification: FunctionTypeFrom<'modifyDefaultCreditSpecification'>;

  modifyEbsDefaultKmsKeyId: FunctionTypeFrom<'modifyEbsDefaultKmsKeyId'>;

  modifyFleet: FunctionTypeFrom<'modifyFleet'>;

  modifyFpgaImageAttribute: FunctionTypeFrom<'modifyFpgaImageAttribute'>;

  modifyHosts: FunctionTypeFrom<'modifyHosts'>;

  modifyIdFormat: FunctionTypeFrom<'modifyIdFormat'>;

  modifyIdentityIdFormat: FunctionTypeFrom<'modifyIdentityIdFormat'>;

  modifyImageAttribute: FunctionTypeFrom<'modifyImageAttribute'>;

  modifyInstanceAttribute: FunctionTypeFrom<'modifyInstanceAttribute'>;

  modifyInstanceCapacityReservationAttributes: FunctionTypeFrom<'modifyInstanceCapacityReservationAttributes'>;

  modifyInstanceCreditSpecification: FunctionTypeFrom<'modifyInstanceCreditSpecification'>;

  modifyInstanceEventStartTime: FunctionTypeFrom<'modifyInstanceEventStartTime'>;

  modifyInstanceEventWindow: FunctionTypeFrom<'modifyInstanceEventWindow'>;

  modifyInstanceMaintenanceOptions: FunctionTypeFrom<'modifyInstanceMaintenanceOptions'>;

  modifyInstanceMetadataOptions: FunctionTypeFrom<'modifyInstanceMetadataOptions'>;

  modifyInstancePlacement: FunctionTypeFrom<'modifyInstancePlacement'>;

  modifyIpam: FunctionTypeFrom<'modifyIpam'>;

  modifyIpamPool: FunctionTypeFrom<'modifyIpamPool'>;

  modifyIpamResourceCidr: FunctionTypeFrom<'modifyIpamResourceCidr'>;

  modifyIpamScope: FunctionTypeFrom<'modifyIpamScope'>;

  modifyLaunchTemplate: FunctionTypeFrom<'modifyLaunchTemplate'>;

  modifyLocalGatewayRoute: FunctionTypeFrom<'modifyLocalGatewayRoute'>;

  modifyManagedPrefixList: FunctionTypeFrom<'modifyManagedPrefixList'>;

  modifyNetworkInterfaceAttribute: FunctionTypeFrom<'modifyNetworkInterfaceAttribute'>;

  modifyPrivateDnsNameOptions: FunctionTypeFrom<'modifyPrivateDnsNameOptions'>;

  modifyReservedInstances: FunctionTypeFrom<'modifyReservedInstances'>;

  modifySecurityGroupRules: FunctionTypeFrom<'modifySecurityGroupRules'>;

  modifySnapshotAttribute: FunctionTypeFrom<'modifySnapshotAttribute'>;

  modifySnapshotTier: FunctionTypeFrom<'modifySnapshotTier'>;

  modifySpotFleetRequest: FunctionTypeFrom<'modifySpotFleetRequest'>;

  modifySubnetAttribute: FunctionTypeFrom<'modifySubnetAttribute'>;

  modifyTrafficMirrorFilterNetworkServices: FunctionTypeFrom<'modifyTrafficMirrorFilterNetworkServices'>;

  modifyTrafficMirrorFilterRule: FunctionTypeFrom<'modifyTrafficMirrorFilterRule'>;

  modifyTrafficMirrorSession: FunctionTypeFrom<'modifyTrafficMirrorSession'>;

  modifyTransitGateway: FunctionTypeFrom<'modifyTransitGateway'>;

  modifyTransitGatewayPrefixListReference: FunctionTypeFrom<'modifyTransitGatewayPrefixListReference'>;

  modifyTransitGatewayVpcAttachment: FunctionTypeFrom<'modifyTransitGatewayVpcAttachment'>;

  modifyVolume: FunctionTypeFrom<'modifyVolume'>;

  modifyVolumeAttribute: FunctionTypeFrom<'modifyVolumeAttribute'>;

  modifyVpcAttribute: FunctionTypeFrom<'modifyVpcAttribute'>;

  modifyVpcEndpoint: FunctionTypeFrom<'modifyVpcEndpoint'>;

  modifyVpcEndpointConnectionNotification: FunctionTypeFrom<'modifyVpcEndpointConnectionNotification'>;

  modifyVpcEndpointServiceConfiguration: FunctionTypeFrom<'modifyVpcEndpointServiceConfiguration'>;

  modifyVpcEndpointServicePayerResponsibility: FunctionTypeFrom<'modifyVpcEndpointServicePayerResponsibility'>;

  modifyVpcEndpointServicePermissions: FunctionTypeFrom<'modifyVpcEndpointServicePermissions'>;

  modifyVpcPeeringConnectionOptions: FunctionTypeFrom<'modifyVpcPeeringConnectionOptions'>;

  modifyVpcTenancy: FunctionTypeFrom<'modifyVpcTenancy'>;

  modifyVpnConnection: FunctionTypeFrom<'modifyVpnConnection'>;

  modifyVpnConnectionOptions: FunctionTypeFrom<'modifyVpnConnectionOptions'>;

  modifyVpnTunnelCertificate: FunctionTypeFrom<'modifyVpnTunnelCertificate'>;

  modifyVpnTunnelOptions: FunctionTypeFrom<'modifyVpnTunnelOptions'>;

  monitorInstances: FunctionTypeFrom<'monitorInstances'>;

  moveAddressToVpc: FunctionTypeFrom<'moveAddressToVpc'>;

  moveByoipCidrToIpam: FunctionTypeFrom<'moveByoipCidrToIpam'>;

  provisionByoipCidr: FunctionTypeFrom<'provisionByoipCidr'>;

  provisionIpamPoolCidr: FunctionTypeFrom<'provisionIpamPoolCidr'>;

  provisionPublicIpv4PoolCidr: FunctionTypeFrom<'provisionPublicIpv4PoolCidr'>;

  purchaseHostReservation: FunctionTypeFrom<'purchaseHostReservation'>;

  purchaseReservedInstancesOffering: FunctionTypeFrom<'purchaseReservedInstancesOffering'>;

  purchaseScheduledInstances: FunctionTypeFrom<'purchaseScheduledInstances'>;

  rebootInstances: FunctionTypeFrom<'rebootInstances'>;

  registerImage: FunctionTypeFrom<'registerImage'>;

  registerInstanceEventNotificationAttributes: FunctionTypeFrom<'registerInstanceEventNotificationAttributes'>;

  registerTransitGatewayMulticastGroupMembers: FunctionTypeFrom<'registerTransitGatewayMulticastGroupMembers'>;

  registerTransitGatewayMulticastGroupSources: FunctionTypeFrom<'registerTransitGatewayMulticastGroupSources'>;

  rejectTransitGatewayMulticastDomainAssociations: FunctionTypeFrom<'rejectTransitGatewayMulticastDomainAssociations'>;

  rejectTransitGatewayPeeringAttachment: FunctionTypeFrom<'rejectTransitGatewayPeeringAttachment'>;

  rejectTransitGatewayVpcAttachment: FunctionTypeFrom<'rejectTransitGatewayVpcAttachment'>;

  rejectVpcEndpointConnections: FunctionTypeFrom<'rejectVpcEndpointConnections'>;

  rejectVpcPeeringConnection: FunctionTypeFrom<'rejectVpcPeeringConnection'>;

  releaseAddress: FunctionTypeFrom<'releaseAddress'>;

  releaseHosts: FunctionTypeFrom<'releaseHosts'>;

  releaseIpamPoolAllocation: FunctionTypeFrom<'releaseIpamPoolAllocation'>;

  replaceIamInstanceProfileAssociation: FunctionTypeFrom<'replaceIamInstanceProfileAssociation'>;

  replaceNetworkAclAssociation: FunctionTypeFrom<'replaceNetworkAclAssociation'>;

  replaceNetworkAclEntry: FunctionTypeFrom<'replaceNetworkAclEntry'>;

  replaceRoute: FunctionTypeFrom<'replaceRoute'>;

  replaceRouteTableAssociation: FunctionTypeFrom<'replaceRouteTableAssociation'>;

  replaceTransitGatewayRoute: FunctionTypeFrom<'replaceTransitGatewayRoute'>;

  reportInstanceStatus: FunctionTypeFrom<'reportInstanceStatus'>;

  requestSpotFleet: FunctionTypeFrom<'requestSpotFleet'>;

  requestSpotInstances: FunctionTypeFrom<'requestSpotInstances'>;

  resetAddressAttribute: FunctionTypeFrom<'resetAddressAttribute'>;

  resetEbsDefaultKmsKeyId: FunctionTypeFrom<'resetEbsDefaultKmsKeyId'>;

  resetFpgaImageAttribute: FunctionTypeFrom<'resetFpgaImageAttribute'>;

  resetImageAttribute: FunctionTypeFrom<'resetImageAttribute'>;

  resetInstanceAttribute: FunctionTypeFrom<'resetInstanceAttribute'>;

  resetNetworkInterfaceAttribute: FunctionTypeFrom<'resetNetworkInterfaceAttribute'>;

  resetSnapshotAttribute: FunctionTypeFrom<'resetSnapshotAttribute'>;

  restoreAddressToClassic: FunctionTypeFrom<'restoreAddressToClassic'>;

  restoreImageFromRecycleBin: FunctionTypeFrom<'restoreImageFromRecycleBin'>;

  restoreManagedPrefixListVersion: FunctionTypeFrom<'restoreManagedPrefixListVersion'>;

  restoreSnapshotFromRecycleBin: FunctionTypeFrom<'restoreSnapshotFromRecycleBin'>;

  restoreSnapshotTier: FunctionTypeFrom<'restoreSnapshotTier'>;

  revokeClientVpnIngress: FunctionTypeFrom<'revokeClientVpnIngress'>;

  revokeSecurityGroupEgress: FunctionTypeFrom<'revokeSecurityGroupEgress'>;

  revokeSecurityGroupIngress: FunctionTypeFrom<'revokeSecurityGroupIngress'>;

  runInstances: FunctionTypeFrom<'runInstances'>;

  runScheduledInstances: FunctionTypeFrom<'runScheduledInstances'>;

  searchLocalGatewayRoutes(params: { [K in keyof Omit<ParamsFrom<'searchLocalGatewayRoutes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchLocalGatewayRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchLocalGatewayRoutes'>]-?: ReturnTypeFrom<'searchLocalGatewayRoutes'>[K]}['Routes'] }>
  ;

  searchTransitGatewayMulticastGroups(params: { [K in keyof Omit<ParamsFrom<'searchTransitGatewayMulticastGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchTransitGatewayMulticastGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchTransitGatewayMulticastGroups'>]-?: ReturnTypeFrom<'searchTransitGatewayMulticastGroups'>[K]}['MulticastGroups'] }>
  searchTransitGatewayMulticastGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchTransitGatewayMulticastGroups'>]-?: ReturnTypeFrom<'searchTransitGatewayMulticastGroups'>[K]}['MulticastGroups'] }>;

  searchTransitGatewayRoutes: FunctionTypeFrom<'searchTransitGatewayRoutes'>;

  sendDiagnosticInterrupt: FunctionTypeFrom<'sendDiagnosticInterrupt'>;

  startInstances: FunctionTypeFrom<'startInstances'>;

  startNetworkInsightsAccessScopeAnalysis: FunctionTypeFrom<'startNetworkInsightsAccessScopeAnalysis'>;

  startNetworkInsightsAnalysis: FunctionTypeFrom<'startNetworkInsightsAnalysis'>;

  startVpcEndpointServicePrivateDnsVerification: FunctionTypeFrom<'startVpcEndpointServicePrivateDnsVerification'>;

  stopInstances: FunctionTypeFrom<'stopInstances'>;

  terminateClientVpnConnections: FunctionTypeFrom<'terminateClientVpnConnections'>;

  terminateInstances: FunctionTypeFrom<'terminateInstances'>;

  unassignIpv6Addresses: FunctionTypeFrom<'unassignIpv6Addresses'>;

  unassignPrivateIpAddresses: FunctionTypeFrom<'unassignPrivateIpAddresses'>;

  unmonitorInstances: FunctionTypeFrom<'unmonitorInstances'>;

  updateSecurityGroupRuleDescriptionsEgress: FunctionTypeFrom<'updateSecurityGroupRuleDescriptionsEgress'>;

  updateSecurityGroupRuleDescriptionsIngress: FunctionTypeFrom<'updateSecurityGroupRuleDescriptionsIngress'>;

  withdrawByoipCidr: FunctionTypeFrom<'withdrawByoipCidr'>
}
 
export class EC2 implements ClientType {
  private constructor(private readonly client: AWSEC2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ec2';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = ["describeAccountAttributes","describeAddresses","describeAddressesAttribute","describeAvailabilityZones","describeBundleTasks","describeCapacityReservationFleets","describeCapacityReservations","describeCarrierGateways","describeClassicLinkInstances","describeClientVpnEndpoints","describeCoipPools","describeConversionTasks","describeCustomerGateways","describeDhcpOptions","describeEgressOnlyInternetGateways","describeExportImageTasks","describeExportTasks","describeFastLaunchImages","describeFastSnapshotRestores","describeFleets","describeFlowLogs","describeFpgaImages","describeHostReservationOfferings","describeHostReservations","describeHosts","describeIamInstanceProfileAssociations","describeImages","describeImportImageTasks","describeImportSnapshotTasks","describeInstanceCreditSpecifications","describeInstanceEventWindows","describeInstanceStatus","describeInstanceTypeOfferings","describeInstanceTypes","describeInstances","describeInternetGateways","describeIpamPools","describeIpamScopes","describeIpams","describeIpv6Pools","describeKeyPairs","describeLaunchTemplateVersions","describeLaunchTemplates","describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations","describeLocalGatewayRouteTableVpcAssociations","describeLocalGatewayRouteTables","describeLocalGatewayVirtualInterfaceGroups","describeLocalGatewayVirtualInterfaces","describeLocalGateways","describeManagedPrefixLists","describeMovingAddresses","describeNatGateways","describeNetworkAcls","describeNetworkInsightsAccessScopeAnalyses","describeNetworkInsightsAccessScopes","describeNetworkInsightsAnalyses","describeNetworkInsightsPaths","describeNetworkInterfacePermissions","describeNetworkInterfaces","describePlacementGroups","describePrefixLists","describePrincipalIdFormat","describePublicIpv4Pools","describeRegions","describeReplaceRootVolumeTasks","describeReservedInstances","describeReservedInstancesListings","describeReservedInstancesModifications","describeReservedInstancesOfferings","describeRouteTables","describeScheduledInstances","describeSecurityGroupRules","describeSecurityGroups","describeSnapshotTierStatus","describeSnapshots","describeSpotFleetRequests","describeSpotInstanceRequests","describeSpotPriceHistory","describeStoreImageTasks","describeSubnets","describeTags","describeTrafficMirrorFilters","describeTrafficMirrorSessions","describeTrafficMirrorTargets","describeTransitGatewayAttachments","describeTransitGatewayConnectPeers","describeTransitGatewayConnects","describeTransitGatewayMulticastDomains","describeTransitGatewayPeeringAttachments","describeTransitGatewayPolicyTables","describeTransitGatewayRouteTableAnnouncements","describeTransitGatewayRouteTables","describeTransitGatewayVpcAttachments","describeTransitGateways","describeTrunkInterfaceAssociations","describeVolumeStatus","describeVolumes","describeVolumesModifications","describeVpcClassicLinkDnsSupport","describeVpcEndpointConnectionNotifications","describeVpcEndpointConnections","describeVpcEndpointServiceConfigurations","describeVpcEndpoints","describeVpcPeeringConnections","describeVpcs","describeVpnConnections","describeVpnGateways","getTransitGatewayMulticastDomainAssociations","getVpnConnectionDeviceTypes","listImagesInRecycleBin","listSnapshotsInRecycleBin","searchTransitGatewayMulticastGroups"] as const;
  
  async acceptReservedInstancesExchangeQuote(...args: any): Promise<any> {
  // undefined
    return this.client.acceptReservedInstancesExchangeQuote(...args).promise()
  }

  async acceptTransitGatewayMulticastDomainAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.acceptTransitGatewayMulticastDomainAssociations(...args).promise()
  }

  async acceptTransitGatewayPeeringAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.acceptTransitGatewayPeeringAttachment(...args).promise()
  }

  async acceptTransitGatewayVpcAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.acceptTransitGatewayVpcAttachment(...args).promise()
  }

  async acceptVpcEndpointConnections(...args: any): Promise<any> {
  // undefined
    return this.client.acceptVpcEndpointConnections(...args).promise()
  }

  async acceptVpcPeeringConnection(...args: any): Promise<any> {
  // undefined
    return this.client.acceptVpcPeeringConnection(...args).promise()
  }

  async advertiseByoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.advertiseByoipCidr(...args).promise()
  }

  async allocateAddress(...args: any): Promise<any> {
  // undefined
    return this.client.allocateAddress(...args).promise()
  }

  async allocateHosts(...args: any): Promise<any> {
  // undefined
    return this.client.allocateHosts(...args).promise()
  }

  async allocateIpamPoolCidr(...args: any): Promise<any> {
  // undefined
    return this.client.allocateIpamPoolCidr(...args).promise()
  }

  async applySecurityGroupsToClientVpnTargetNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.applySecurityGroupsToClientVpnTargetNetwork(...args).promise()
  }

  async assignIpv6Addresses(...args: any): Promise<any> {
  // undefined
    return this.client.assignIpv6Addresses(...args).promise()
  }

  async assignPrivateIpAddresses(...args: any): Promise<any> {
  // undefined
    return this.client.assignPrivateIpAddresses(...args).promise()
  }

  async associateAddress(...args: any): Promise<any> {
  // undefined
    return this.client.associateAddress(...args).promise()
  }

  async associateClientVpnTargetNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.associateClientVpnTargetNetwork(...args).promise()
  }

  async associateDhcpOptions(...args: any): Promise<any> {
  // undefined
    return this.client.associateDhcpOptions(...args).promise()
  }

  async associateEnclaveCertificateIamRole(...args: any): Promise<any> {
  // undefined
    return this.client.associateEnclaveCertificateIamRole(...args).promise()
  }

  async associateIamInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.associateIamInstanceProfile(...args).promise()
  }

  async associateInstanceEventWindow(...args: any): Promise<any> {
  // undefined
    return this.client.associateInstanceEventWindow(...args).promise()
  }

  async associateRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.associateRouteTable(...args).promise()
  }

  async associateSubnetCidrBlock(...args: any): Promise<any> {
  // undefined
    return this.client.associateSubnetCidrBlock(...args).promise()
  }

  async associateTransitGatewayMulticastDomain(...args: any): Promise<any> {
  // undefined
    return this.client.associateTransitGatewayMulticastDomain(...args).promise()
  }

  async associateTransitGatewayPolicyTable(...args: any): Promise<any> {
  // undefined
    return this.client.associateTransitGatewayPolicyTable(...args).promise()
  }

  async associateTransitGatewayRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.associateTransitGatewayRouteTable(...args).promise()
  }

  async associateTrunkInterface(...args: any): Promise<any> {
  // undefined
    return this.client.associateTrunkInterface(...args).promise()
  }

  async associateVpcCidrBlock(...args: any): Promise<any> {
  // undefined
    return this.client.associateVpcCidrBlock(...args).promise()
  }

  async attachClassicLinkVpc(...args: any): Promise<any> {
  // undefined
    return this.client.attachClassicLinkVpc(...args).promise()
  }

  async attachInternetGateway(...args: any): Promise<any> {
  // undefined
    return this.client.attachInternetGateway(...args).promise()
  }

  async attachNetworkInterface(...args: any): Promise<any> {
  // undefined
    return this.client.attachNetworkInterface(...args).promise()
  }

  async attachVolume(...args: any): Promise<any> {
  // undefined
    return this.client.attachVolume(...args).promise()
  }

  async attachVpnGateway(...args: any): Promise<any> {
  // undefined
    return this.client.attachVpnGateway(...args).promise()
  }

  async authorizeClientVpnIngress(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeClientVpnIngress(...args).promise()
  }

  async authorizeSecurityGroupEgress(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeSecurityGroupEgress(...args).promise()
  }

  async authorizeSecurityGroupIngress(...args: any): Promise<any> {
  // undefined
    return this.client.authorizeSecurityGroupIngress(...args).promise()
  }

  async bundleInstance(...args: any): Promise<any> {
  // undefined
    return this.client.bundleInstance(...args).promise()
  }

  async cancelBundleTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelBundleTask(...args).promise()
  }

  async cancelCapacityReservation(...args: any): Promise<any> {
  // undefined
    return this.client.cancelCapacityReservation(...args).promise()
  }

  async cancelCapacityReservationFleets(...args: any): Promise<any> {
  // undefined
    return this.client.cancelCapacityReservationFleets(...args).promise()
  }

  async cancelConversionTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelConversionTask(...args).promise()
  }

  async cancelExportTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelExportTask(...args).promise()
  }

  async cancelImportTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelImportTask(...args).promise()
  }

  async cancelReservedInstancesListing(...args: any): Promise<any> {
  // undefined
    return this.client.cancelReservedInstancesListing(...args).promise()
  }

  async cancelSpotFleetRequests(...args: any): Promise<any> {
  // undefined
    return this.client.cancelSpotFleetRequests(...args).promise()
  }

  async cancelSpotInstanceRequests(...args: any): Promise<any> {
  // undefined
    return this.client.cancelSpotInstanceRequests(...args).promise()
  }

  async confirmProductInstance(...args: any): Promise<any> {
  // undefined
    return this.client.confirmProductInstance(...args).promise()
  }

  async copyFpgaImage(...args: any): Promise<any> {
  // undefined
    return this.client.copyFpgaImage(...args).promise()
  }

  async copyImage(...args: any): Promise<any> {
  // undefined
    return this.client.copyImage(...args).promise()
  }

  async copySnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.copySnapshot(...args).promise()
  }

  async createCapacityReservation(...args: any): Promise<any> {
  // undefined
    return this.client.createCapacityReservation(...args).promise()
  }

  async createCapacityReservationFleet(...args: any): Promise<any> {
  // undefined
    return this.client.createCapacityReservationFleet(...args).promise()
  }

  async createCarrierGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createCarrierGateway(...args).promise()
  }

  async createClientVpnEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createClientVpnEndpoint(...args).promise()
  }

  async createClientVpnRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createClientVpnRoute(...args).promise()
  }

  async createCoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.createCoipCidr(...args).promise()
  }

  async createCoipPool(...args: any): Promise<any> {
  // undefined
    return this.client.createCoipPool(...args).promise()
  }

  async createCustomerGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomerGateway(...args).promise()
  }

  async createDefaultSubnet(...args: any): Promise<any> {
  // undefined
    return this.client.createDefaultSubnet(...args).promise()
  }

  async createDefaultVpc(...args: any): Promise<any> {
  // undefined
    return this.client.createDefaultVpc(...args).promise()
  }

  async createDhcpOptions(...args: any): Promise<any> {
  // undefined
    return this.client.createDhcpOptions(...args).promise()
  }

  async createEgressOnlyInternetGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createEgressOnlyInternetGateway(...args).promise()
  }

  async createFleet(...args: any): Promise<any> {
  // undefined
    return this.client.createFleet(...args).promise()
  }

  async createFlowLogs(...args: any): Promise<any> {
  // undefined
    return this.client.createFlowLogs(...args).promise()
  }

  async createFpgaImage(...args: any): Promise<any> {
  // undefined
    return this.client.createFpgaImage(...args).promise()
  }

  async createImage(...args: any): Promise<any> {
  // undefined
    return this.client.createImage(...args).promise()
  }

  async createInstanceEventWindow(...args: any): Promise<any> {
  // undefined
    return this.client.createInstanceEventWindow(...args).promise()
  }

  async createInstanceExportTask(...args: any): Promise<any> {
  // undefined
    return this.client.createInstanceExportTask(...args).promise()
  }

  async createInternetGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createInternetGateway(...args).promise()
  }

  async createIpam(...args: any): Promise<any> {
  // undefined
    return this.client.createIpam(...args).promise()
  }

  async createIpamPool(...args: any): Promise<any> {
  // undefined
    return this.client.createIpamPool(...args).promise()
  }

  async createIpamScope(...args: any): Promise<any> {
  // undefined
    return this.client.createIpamScope(...args).promise()
  }

  async createKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.createKeyPair(...args).promise()
  }

  async createLaunchTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createLaunchTemplate(...args).promise()
  }

  async createLaunchTemplateVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createLaunchTemplateVersion(...args).promise()
  }

  async createLocalGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createLocalGatewayRoute(...args).promise()
  }

  async createLocalGatewayRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.createLocalGatewayRouteTable(...args).promise()
  }

  async createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createLocalGatewayRouteTableVirtualInterfaceGroupAssociation(...args).promise()
  }

  async createLocalGatewayRouteTableVpcAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createLocalGatewayRouteTableVpcAssociation(...args).promise()
  }

  async createManagedPrefixList(...args: any): Promise<any> {
  // undefined
    return this.client.createManagedPrefixList(...args).promise()
  }

  async createNatGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createNatGateway(...args).promise()
  }

  async createNetworkAcl(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkAcl(...args).promise()
  }

  async createNetworkAclEntry(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkAclEntry(...args).promise()
  }

  async createNetworkInsightsAccessScope(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkInsightsAccessScope(...args).promise()
  }

  async createNetworkInsightsPath(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkInsightsPath(...args).promise()
  }

  async createNetworkInterface(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkInterface(...args).promise()
  }

  async createNetworkInterfacePermission(...args: any): Promise<any> {
  // undefined
    return this.client.createNetworkInterfacePermission(...args).promise()
  }

  async createPlacementGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createPlacementGroup(...args).promise()
  }

  async createPublicIpv4Pool(...args: any): Promise<any> {
  // undefined
    return this.client.createPublicIpv4Pool(...args).promise()
  }

  async createReplaceRootVolumeTask(...args: any): Promise<any> {
  // undefined
    return this.client.createReplaceRootVolumeTask(...args).promise()
  }

  async createReservedInstancesListing(...args: any): Promise<any> {
  // undefined
    return this.client.createReservedInstancesListing(...args).promise()
  }

  async createRestoreImageTask(...args: any): Promise<any> {
  // undefined
    return this.client.createRestoreImageTask(...args).promise()
  }

  async createRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createRoute(...args).promise()
  }

  async createRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.createRouteTable(...args).promise()
  }

  async createSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createSecurityGroup(...args).promise()
  }

  async createSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshot(...args).promise()
  }

  async createSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshots(...args).promise()
  }

  async createSpotDatafeedSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createSpotDatafeedSubscription(...args).promise()
  }

  async createStoreImageTask(...args: any): Promise<any> {
  // undefined
    return this.client.createStoreImageTask(...args).promise()
  }

  async createSubnet(...args: any): Promise<any> {
  // undefined
    return this.client.createSubnet(...args).promise()
  }

  async createSubnetCidrReservation(...args: any): Promise<any> {
  // undefined
    return this.client.createSubnetCidrReservation(...args).promise()
  }

  async createTags(...args: any): Promise<any> {
  // undefined
    return this.client.createTags(...args).promise()
  }

  async createTrafficMirrorFilter(...args: any): Promise<any> {
  // undefined
    return this.client.createTrafficMirrorFilter(...args).promise()
  }

  async createTrafficMirrorFilterRule(...args: any): Promise<any> {
  // undefined
    return this.client.createTrafficMirrorFilterRule(...args).promise()
  }

  async createTrafficMirrorSession(...args: any): Promise<any> {
  // undefined
    return this.client.createTrafficMirrorSession(...args).promise()
  }

  async createTrafficMirrorTarget(...args: any): Promise<any> {
  // undefined
    return this.client.createTrafficMirrorTarget(...args).promise()
  }

  async createTransitGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGateway(...args).promise()
  }

  async createTransitGatewayConnect(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayConnect(...args).promise()
  }

  async createTransitGatewayConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayConnectPeer(...args).promise()
  }

  async createTransitGatewayMulticastDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayMulticastDomain(...args).promise()
  }

  async createTransitGatewayPeeringAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayPeeringAttachment(...args).promise()
  }

  async createTransitGatewayPolicyTable(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayPolicyTable(...args).promise()
  }

  async createTransitGatewayPrefixListReference(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayPrefixListReference(...args).promise()
  }

  async createTransitGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayRoute(...args).promise()
  }

  async createTransitGatewayRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayRouteTable(...args).promise()
  }

  async createTransitGatewayRouteTableAnnouncement(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayRouteTableAnnouncement(...args).promise()
  }

  async createTransitGatewayVpcAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.createTransitGatewayVpcAttachment(...args).promise()
  }

  async createVolume(...args: any): Promise<any> {
  // undefined
    return this.client.createVolume(...args).promise()
  }

  async createVpc(...args: any): Promise<any> {
  // undefined
    return this.client.createVpc(...args).promise()
  }

  async createVpcEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcEndpoint(...args).promise()
  }

  async createVpcEndpointConnectionNotification(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcEndpointConnectionNotification(...args).promise()
  }

  async createVpcEndpointServiceConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcEndpointServiceConfiguration(...args).promise()
  }

  async createVpcPeeringConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcPeeringConnection(...args).promise()
  }

  async createVpnConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createVpnConnection(...args).promise()
  }

  async createVpnConnectionRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createVpnConnectionRoute(...args).promise()
  }

  async createVpnGateway(...args: any): Promise<any> {
  // undefined
    return this.client.createVpnGateway(...args).promise()
  }

  async deleteCarrierGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCarrierGateway(...args).promise()
  }

  async deleteClientVpnEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClientVpnEndpoint(...args).promise()
  }

  async deleteClientVpnRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteClientVpnRoute(...args).promise()
  }

  async deleteCoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCoipCidr(...args).promise()
  }

  async deleteCoipPool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCoipPool(...args).promise()
  }

  async deleteCustomerGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomerGateway(...args).promise()
  }

  async deleteDhcpOptions(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDhcpOptions(...args).promise()
  }

  async deleteEgressOnlyInternetGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEgressOnlyInternetGateway(...args).promise()
  }

  async deleteFleets(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleets(...args).promise()
  }

  async deleteFlowLogs(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFlowLogs(...args).promise()
  }

  async deleteFpgaImage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFpgaImage(...args).promise()
  }

  async deleteInstanceEventWindow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstanceEventWindow(...args).promise()
  }

  async deleteInternetGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInternetGateway(...args).promise()
  }

  async deleteIpam(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIpam(...args).promise()
  }

  async deleteIpamPool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIpamPool(...args).promise()
  }

  async deleteIpamScope(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIpamScope(...args).promise()
  }

  async deleteKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.deleteKeyPair(...args).promise()
  }

  async deleteLaunchTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLaunchTemplate(...args).promise()
  }

  async deleteLaunchTemplateVersions(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLaunchTemplateVersions(...args).promise()
  }

  async deleteLocalGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLocalGatewayRoute(...args).promise()
  }

  async deleteLocalGatewayRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLocalGatewayRouteTable(...args).promise()
  }

  async deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLocalGatewayRouteTableVirtualInterfaceGroupAssociation(...args).promise()
  }

  async deleteLocalGatewayRouteTableVpcAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLocalGatewayRouteTableVpcAssociation(...args).promise()
  }

  async deleteManagedPrefixList(...args: any): Promise<any> {
  // undefined
    return this.client.deleteManagedPrefixList(...args).promise()
  }

  async deleteNatGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNatGateway(...args).promise()
  }

  async deleteNetworkAcl(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkAcl(...args).promise()
  }

  async deleteNetworkAclEntry(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkAclEntry(...args).promise()
  }

  async deleteNetworkInsightsAccessScope(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkInsightsAccessScope(...args).promise()
  }

  async deleteNetworkInsightsAccessScopeAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkInsightsAccessScopeAnalysis(...args).promise()
  }

  async deleteNetworkInsightsAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkInsightsAnalysis(...args).promise()
  }

  async deleteNetworkInsightsPath(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkInsightsPath(...args).promise()
  }

  async deleteNetworkInterface(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkInterface(...args).promise()
  }

  async deleteNetworkInterfacePermission(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNetworkInterfacePermission(...args).promise()
  }

  async deletePlacementGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deletePlacementGroup(...args).promise()
  }

  async deletePublicIpv4Pool(...args: any): Promise<any> {
  // undefined
    return this.client.deletePublicIpv4Pool(...args).promise()
  }

  async deleteQueuedReservedInstances(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQueuedReservedInstances(...args).promise()
  }

  async deleteRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoute(...args).promise()
  }

  async deleteRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRouteTable(...args).promise()
  }

  async deleteSecurityGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSecurityGroup(...args).promise()
  }

  async deleteSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshot(...args).promise()
  }

  async deleteSpotDatafeedSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSpotDatafeedSubscription(...args).promise()
  }

  async deleteSubnet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSubnet(...args).promise()
  }

  async deleteSubnetCidrReservation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSubnetCidrReservation(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async deleteTrafficMirrorFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrafficMirrorFilter(...args).promise()
  }

  async deleteTrafficMirrorFilterRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrafficMirrorFilterRule(...args).promise()
  }

  async deleteTrafficMirrorSession(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrafficMirrorSession(...args).promise()
  }

  async deleteTrafficMirrorTarget(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrafficMirrorTarget(...args).promise()
  }

  async deleteTransitGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGateway(...args).promise()
  }

  async deleteTransitGatewayConnect(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayConnect(...args).promise()
  }

  async deleteTransitGatewayConnectPeer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayConnectPeer(...args).promise()
  }

  async deleteTransitGatewayMulticastDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayMulticastDomain(...args).promise()
  }

  async deleteTransitGatewayPeeringAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayPeeringAttachment(...args).promise()
  }

  async deleteTransitGatewayPolicyTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayPolicyTable(...args).promise()
  }

  async deleteTransitGatewayPrefixListReference(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayPrefixListReference(...args).promise()
  }

  async deleteTransitGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayRoute(...args).promise()
  }

  async deleteTransitGatewayRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayRouteTable(...args).promise()
  }

  async deleteTransitGatewayRouteTableAnnouncement(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayRouteTableAnnouncement(...args).promise()
  }

  async deleteTransitGatewayVpcAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTransitGatewayVpcAttachment(...args).promise()
  }

  async deleteVolume(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVolume(...args).promise()
  }

  async deleteVpc(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpc(...args).promise()
  }

  async deleteVpcEndpointConnectionNotifications(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcEndpointConnectionNotifications(...args).promise()
  }

  async deleteVpcEndpointServiceConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcEndpointServiceConfigurations(...args).promise()
  }

  async deleteVpcEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcEndpoints(...args).promise()
  }

  async deleteVpcPeeringConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcPeeringConnection(...args).promise()
  }

  async deleteVpnConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpnConnection(...args).promise()
  }

  async deleteVpnConnectionRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpnConnectionRoute(...args).promise()
  }

  async deleteVpnGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpnGateway(...args).promise()
  }

  async deprovisionByoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.deprovisionByoipCidr(...args).promise()
  }

  async deprovisionIpamPoolCidr(...args: any): Promise<any> {
  // undefined
    return this.client.deprovisionIpamPoolCidr(...args).promise()
  }

  async deprovisionPublicIpv4PoolCidr(...args: any): Promise<any> {
  // undefined
    return this.client.deprovisionPublicIpv4PoolCidr(...args).promise()
  }

  async deregisterImage(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterImage(...args).promise()
  }

  async deregisterInstanceEventNotificationAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterInstanceEventNotificationAttributes(...args).promise()
  }

  async deregisterTransitGatewayMulticastGroupMembers(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterTransitGatewayMulticastGroupMembers(...args).promise()
  }

  async deregisterTransitGatewayMulticastGroupSources(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterTransitGatewayMulticastGroupSources(...args).promise()
  }

  async describeAccountAttributes(...args: any): Promise<any> {
  // {"resultKey":"AccountAttributes"}
    return this.client.describeAccountAttributes(...args).promise()
  }

  async describeAddresses(...args: any): Promise<any> {
  // {"resultKey":"Addresses"}
    return this.client.describeAddresses(...args).promise()
  }

  async describeAddressesAttribute(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Addresses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAddressesAttribute(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Addresses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAggregateIdFormat(...args: any): Promise<any> {
  // undefined
    return this.client.describeAggregateIdFormat(...args).promise()
  }

  async describeAvailabilityZones(...args: any): Promise<any> {
  // {"resultKey":"AvailabilityZones"}
    return this.client.describeAvailabilityZones(...args).promise()
  }

  async describeBundleTasks(...args: any): Promise<any> {
  // {"resultKey":"BundleTasks"}
    return this.client.describeBundleTasks(...args).promise()
  }

  async describeByoipCidrs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ByoipCidrs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeByoipCidrs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ByoipCidrs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCapacityReservationFleets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CapacityReservationFleets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeCapacityReservationFleets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CapacityReservationFleets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCapacityReservations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CapacityReservations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeCapacityReservations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CapacityReservations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCarrierGateways(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CarrierGateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeCarrierGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CarrierGateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClassicLinkInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Instances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClassicLinkInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Instances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnAuthorizationRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AuthorizationRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnAuthorizationRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AuthorizationRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnConnections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Connections"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnConnections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Connections ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnEndpoints(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClientVpnEndpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ClientVpnEndpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnRoutes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Routes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnRoutes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Routes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClientVpnTargetNetworks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ClientVpnTargetNetworks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClientVpnTargetNetworks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ClientVpnTargetNetworks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCoipPools(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CoipPools"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeCoipPools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CoipPools ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConversionTasks(...args: any): Promise<any> {
  // {"resultKey":"ConversionTasks"}
    return this.client.describeConversionTasks(...args).promise()
  }

  async describeCustomerGateways(...args: any): Promise<any> {
  // {"resultKey":"CustomerGateways"}
    return this.client.describeCustomerGateways(...args).promise()
  }

  async describeDhcpOptions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DhcpOptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeDhcpOptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DhcpOptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEgressOnlyInternetGateways(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EgressOnlyInternetGateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEgressOnlyInternetGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EgressOnlyInternetGateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeElasticGpus(...args: any): Promise<any> {
  // undefined
    return this.client.describeElasticGpus(...args).promise()
  }

  async describeExportImageTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ExportImageTasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeExportImageTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ExportImageTasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeExportTasks(...args: any): Promise<any> {
  // {"resultKey":"ExportTasks"}
    return this.client.describeExportTasks(...args).promise()
  }

  async describeFastLaunchImages(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FastLaunchImages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFastLaunchImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FastLaunchImages ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFastSnapshotRestores(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FastSnapshotRestores"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFastSnapshotRestores(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FastSnapshotRestores ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFleetHistory(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleetHistory(...args).promise()
  }

  async describeFleetInstances(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleetInstances(...args).promise()
  }

  async describeFleets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Fleets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFleets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Fleets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFlowLogs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FlowLogs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFlowLogs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FlowLogs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFpgaImageAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.describeFpgaImageAttribute(...args).promise()
  }

  async describeFpgaImages(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"FpgaImages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeFpgaImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FpgaImages ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHostReservationOfferings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OfferingSet"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeHostReservationOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OfferingSet ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHostReservations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HostReservationSet"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeHostReservations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.HostReservationSet ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHosts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Hosts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeHosts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Hosts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIamInstanceProfileAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IamInstanceProfileAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIamInstanceProfileAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IamInstanceProfileAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIdFormat(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdFormat(...args).promise()
  }

  async describeIdentityIdFormat(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdentityIdFormat(...args).promise()
  }

  async describeImageAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.describeImageAttribute(...args).promise()
  }

  async describeImages(...args: any): Promise<any> {
  // {"resultKey":"Images"}
    return this.client.describeImages(...args).promise()
  }

  async describeImportImageTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ImportImageTasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeImportImageTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ImportImageTasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeImportSnapshotTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ImportSnapshotTasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeImportSnapshotTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ImportSnapshotTasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstanceAttribute(...args).promise()
  }

  async describeInstanceCreditSpecifications(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceCreditSpecifications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceCreditSpecifications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceCreditSpecifications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceEventNotificationAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstanceEventNotificationAttributes(...args).promise()
  }

  async describeInstanceEventWindows(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceEventWindows"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceEventWindows(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceEventWindows ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceStatuses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceStatuses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceTypeOfferings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceTypeOfferings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceTypeOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceTypeOfferings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceTypes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceTypes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceTypes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Reservations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Reservations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInternetGateways(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InternetGateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInternetGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InternetGateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIpamPools(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamPools"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIpamPools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IpamPools ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIpamScopes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamScopes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIpamScopes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IpamScopes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIpams(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Ipams"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIpams(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Ipams ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeIpv6Pools(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Ipv6Pools"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeIpv6Pools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Ipv6Pools ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeKeyPairs(...args: any): Promise<any> {
  // {"resultKey":"KeyPairs"}
    return this.client.describeKeyPairs(...args).promise()
  }

  async describeLaunchTemplateVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LaunchTemplateVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLaunchTemplateVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LaunchTemplateVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLaunchTemplates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LaunchTemplates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLaunchTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LaunchTemplates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayRouteTableVirtualInterfaceGroupAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayRouteTableVirtualInterfaceGroupAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LocalGatewayRouteTableVirtualInterfaceGroupAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayRouteTableVpcAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayRouteTableVpcAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayRouteTableVpcAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LocalGatewayRouteTableVpcAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayRouteTables(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayRouteTables"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayRouteTables(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LocalGatewayRouteTables ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayVirtualInterfaceGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayVirtualInterfaceGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayVirtualInterfaceGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LocalGatewayVirtualInterfaceGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGatewayVirtualInterfaces(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGatewayVirtualInterfaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGatewayVirtualInterfaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LocalGatewayVirtualInterfaces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLocalGateways(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LocalGateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeLocalGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LocalGateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeManagedPrefixLists(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PrefixLists"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeManagedPrefixLists(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PrefixLists ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMovingAddresses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MovingAddressStatuses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMovingAddresses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.MovingAddressStatuses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNatGateways(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NatGateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNatGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NatGateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkAcls(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkAcls"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkAcls(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkAcls ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInsightsAccessScopeAnalyses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInsightsAccessScopeAnalyses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInsightsAccessScopeAnalyses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkInsightsAccessScopeAnalyses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInsightsAccessScopes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInsightsAccessScopes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInsightsAccessScopes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkInsightsAccessScopes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInsightsAnalyses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInsightsAnalyses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInsightsAnalyses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkInsightsAnalyses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInsightsPaths(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInsightsPaths"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInsightsPaths(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkInsightsPaths ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInterfaceAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.describeNetworkInterfaceAttribute(...args).promise()
  }

  async describeNetworkInterfacePermissions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInterfacePermissions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInterfacePermissions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkInterfacePermissions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeNetworkInterfaces(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NetworkInterfaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeNetworkInterfaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NetworkInterfaces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePlacementGroups(...args: any): Promise<any> {
  // {"resultKey":"PlacementGroups"}
    return this.client.describePlacementGroups(...args).promise()
  }

  async describePrefixLists(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PrefixLists"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePrefixLists(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PrefixLists ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePrincipalIdFormat(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Principals"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePrincipalIdFormat(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Principals ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePublicIpv4Pools(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PublicIpv4Pools"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePublicIpv4Pools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PublicIpv4Pools ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRegions(...args: any): Promise<any> {
  // {"resultKey":"Regions"}
    return this.client.describeRegions(...args).promise()
  }

  async describeReplaceRootVolumeTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReplaceRootVolumeTasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeReplaceRootVolumeTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ReplaceRootVolumeTasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedInstances(...args: any): Promise<any> {
  // {"resultKey":"ReservedInstances"}
    return this.client.describeReservedInstances(...args).promise()
  }

  async describeReservedInstancesListings(...args: any): Promise<any> {
  // {"resultKey":"ReservedInstancesListings"}
    return this.client.describeReservedInstancesListings(...args).promise()
  }

  async describeReservedInstancesModifications(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ReservedInstancesModifications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeReservedInstancesModifications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ReservedInstancesModifications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedInstancesOfferings(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReservedInstancesOfferings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeReservedInstancesOfferings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ReservedInstancesOfferings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRouteTables(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RouteTables"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeRouteTables(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RouteTables ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScheduledInstanceAvailability(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledInstanceAvailabilitySet"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScheduledInstanceAvailability(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScheduledInstanceAvailabilitySet ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScheduledInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledInstanceSet"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScheduledInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScheduledInstanceSet ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSecurityGroupReferences(...args: any): Promise<any> {
  // undefined
    return this.client.describeSecurityGroupReferences(...args).promise()
  }

  async describeSecurityGroupRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityGroupRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSecurityGroupRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SecurityGroupRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSecurityGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSecurityGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SecurityGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshotAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.describeSnapshotAttribute(...args).promise()
  }

  async describeSnapshotTierStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SnapshotTierStatuses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSnapshotTierStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SnapshotTierStatuses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshots(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Snapshots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSnapshots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Snapshots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSpotDatafeedSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.describeSpotDatafeedSubscription(...args).promise()
  }

  async describeSpotFleetInstances(...args: any): Promise<any> {
  // undefined
    return this.client.describeSpotFleetInstances(...args).promise()
  }

  async describeSpotFleetRequestHistory(...args: any): Promise<any> {
  // undefined
    return this.client.describeSpotFleetRequestHistory(...args).promise()
  }

  async describeSpotFleetRequests(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpotFleetRequestConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSpotFleetRequests(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SpotFleetRequestConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSpotInstanceRequests(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpotInstanceRequests"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSpotInstanceRequests(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SpotInstanceRequests ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSpotPriceHistory(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpotPriceHistory"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSpotPriceHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SpotPriceHistory ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStaleSecurityGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StaleSecurityGroupSet"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStaleSecurityGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StaleSecurityGroupSet ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStoreImageTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StoreImageTaskResults"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStoreImageTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StoreImageTaskResults ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSubnets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Subnets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSubnets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Subnets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTags(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrafficMirrorFilters(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrafficMirrorFilters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTrafficMirrorFilters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TrafficMirrorFilters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrafficMirrorSessions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrafficMirrorSessions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTrafficMirrorSessions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TrafficMirrorSessions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrafficMirrorTargets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TrafficMirrorTargets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTrafficMirrorTargets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TrafficMirrorTargets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayAttachments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayAttachments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayAttachments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayAttachments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayConnectPeers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayConnectPeers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayConnectPeers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayConnectPeers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayConnects(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayConnects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayConnects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayConnects ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayMulticastDomains(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayMulticastDomains"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayMulticastDomains(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayMulticastDomains ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayPeeringAttachments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayPeeringAttachments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayPeeringAttachments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayPeeringAttachments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayPolicyTables(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayPolicyTables"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayPolicyTables(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayPolicyTables ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayRouteTableAnnouncements(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayRouteTableAnnouncements"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayRouteTableAnnouncements(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayRouteTableAnnouncements ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayRouteTables(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayRouteTables"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayRouteTables(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayRouteTables ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGatewayVpcAttachments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayVpcAttachments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGatewayVpcAttachments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayVpcAttachments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTransitGateways(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTransitGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrunkInterfaceAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InterfaceAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeTrunkInterfaceAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InterfaceAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVolumeAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.describeVolumeAttribute(...args).promise()
  }

  async describeVolumeStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VolumeStatuses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVolumeStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.VolumeStatuses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVolumes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Volumes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVolumes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Volumes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVolumesModifications(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VolumesModifications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVolumesModifications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.VolumesModifications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.describeVpcAttribute(...args).promise()
  }

  async describeVpcClassicLink(...args: any): Promise<any> {
  // undefined
    return this.client.describeVpcClassicLink(...args).promise()
  }

  async describeVpcClassicLinkDnsSupport(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Vpcs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcClassicLinkDnsSupport(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Vpcs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointConnectionNotifications(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConnectionNotificationSet"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpointConnectionNotifications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConnectionNotificationSet ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointConnections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VpcEndpointConnections"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpointConnections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.VpcEndpointConnections ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointServiceConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServiceConfigurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpointServiceConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ServiceConfigurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointServicePermissions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AllowedPrincipals"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpointServicePermissions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AllowedPrincipals ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcEndpointServices(...args: any): Promise<any> {
  // undefined
    return this.client.describeVpcEndpointServices(...args).promise()
  }

  async describeVpcEndpoints(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VpcEndpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.VpcEndpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcPeeringConnections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VpcPeeringConnections"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcPeeringConnections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.VpcPeeringConnections ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpcs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Vpcs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVpcs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Vpcs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVpnConnections(...args: any): Promise<any> {
  // {"resultKey":"VpnConnections"}
    return this.client.describeVpnConnections(...args).promise()
  }

  async describeVpnGateways(...args: any): Promise<any> {
  // {"resultKey":"VpnGateways"}
    return this.client.describeVpnGateways(...args).promise()
  }

  async detachClassicLinkVpc(...args: any): Promise<any> {
  // undefined
    return this.client.detachClassicLinkVpc(...args).promise()
  }

  async detachInternetGateway(...args: any): Promise<any> {
  // undefined
    return this.client.detachInternetGateway(...args).promise()
  }

  async detachNetworkInterface(...args: any): Promise<any> {
  // undefined
    return this.client.detachNetworkInterface(...args).promise()
  }

  async detachVolume(...args: any): Promise<any> {
  // undefined
    return this.client.detachVolume(...args).promise()
  }

  async detachVpnGateway(...args: any): Promise<any> {
  // undefined
    return this.client.detachVpnGateway(...args).promise()
  }

  async disableEbsEncryptionByDefault(...args: any): Promise<any> {
  // undefined
    return this.client.disableEbsEncryptionByDefault(...args).promise()
  }

  async disableFastLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.disableFastLaunch(...args).promise()
  }

  async disableFastSnapshotRestores(...args: any): Promise<any> {
  // undefined
    return this.client.disableFastSnapshotRestores(...args).promise()
  }

  async disableImageDeprecation(...args: any): Promise<any> {
  // undefined
    return this.client.disableImageDeprecation(...args).promise()
  }

  async disableIpamOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disableIpamOrganizationAdminAccount(...args).promise()
  }

  async disableSerialConsoleAccess(...args: any): Promise<any> {
  // undefined
    return this.client.disableSerialConsoleAccess(...args).promise()
  }

  async disableTransitGatewayRouteTablePropagation(...args: any): Promise<any> {
  // undefined
    return this.client.disableTransitGatewayRouteTablePropagation(...args).promise()
  }

  async disableVgwRoutePropagation(...args: any): Promise<any> {
  // undefined
    return this.client.disableVgwRoutePropagation(...args).promise()
  }

  async disableVpcClassicLink(...args: any): Promise<any> {
  // undefined
    return this.client.disableVpcClassicLink(...args).promise()
  }

  async disableVpcClassicLinkDnsSupport(...args: any): Promise<any> {
  // undefined
    return this.client.disableVpcClassicLinkDnsSupport(...args).promise()
  }

  async disassociateAddress(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateAddress(...args).promise()
  }

  async disassociateClientVpnTargetNetwork(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateClientVpnTargetNetwork(...args).promise()
  }

  async disassociateEnclaveCertificateIamRole(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateEnclaveCertificateIamRole(...args).promise()
  }

  async disassociateIamInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateIamInstanceProfile(...args).promise()
  }

  async disassociateInstanceEventWindow(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateInstanceEventWindow(...args).promise()
  }

  async disassociateRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateRouteTable(...args).promise()
  }

  async disassociateSubnetCidrBlock(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateSubnetCidrBlock(...args).promise()
  }

  async disassociateTransitGatewayMulticastDomain(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTransitGatewayMulticastDomain(...args).promise()
  }

  async disassociateTransitGatewayPolicyTable(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTransitGatewayPolicyTable(...args).promise()
  }

  async disassociateTransitGatewayRouteTable(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTransitGatewayRouteTable(...args).promise()
  }

  async disassociateTrunkInterface(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTrunkInterface(...args).promise()
  }

  async disassociateVpcCidrBlock(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateVpcCidrBlock(...args).promise()
  }

  async enableEbsEncryptionByDefault(...args: any): Promise<any> {
  // undefined
    return this.client.enableEbsEncryptionByDefault(...args).promise()
  }

  async enableFastLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.enableFastLaunch(...args).promise()
  }

  async enableFastSnapshotRestores(...args: any): Promise<any> {
  // undefined
    return this.client.enableFastSnapshotRestores(...args).promise()
  }

  async enableImageDeprecation(...args: any): Promise<any> {
  // undefined
    return this.client.enableImageDeprecation(...args).promise()
  }

  async enableIpamOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.enableIpamOrganizationAdminAccount(...args).promise()
  }

  async enableSerialConsoleAccess(...args: any): Promise<any> {
  // undefined
    return this.client.enableSerialConsoleAccess(...args).promise()
  }

  async enableTransitGatewayRouteTablePropagation(...args: any): Promise<any> {
  // undefined
    return this.client.enableTransitGatewayRouteTablePropagation(...args).promise()
  }

  async enableVgwRoutePropagation(...args: any): Promise<any> {
  // undefined
    return this.client.enableVgwRoutePropagation(...args).promise()
  }

  async enableVolumeIO(...args: any): Promise<any> {
  // undefined
    return this.client.enableVolumeIO(...args).promise()
  }

  async enableVpcClassicLink(...args: any): Promise<any> {
  // undefined
    return this.client.enableVpcClassicLink(...args).promise()
  }

  async enableVpcClassicLinkDnsSupport(...args: any): Promise<any> {
  // undefined
    return this.client.enableVpcClassicLinkDnsSupport(...args).promise()
  }

  async exportClientVpnClientCertificateRevocationList(...args: any): Promise<any> {
  // undefined
    return this.client.exportClientVpnClientCertificateRevocationList(...args).promise()
  }

  async exportClientVpnClientConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.exportClientVpnClientConfiguration(...args).promise()
  }

  async exportImage(...args: any): Promise<any> {
  // undefined
    return this.client.exportImage(...args).promise()
  }

  async exportTransitGatewayRoutes(...args: any): Promise<any> {
  // undefined
    return this.client.exportTransitGatewayRoutes(...args).promise()
  }

  async getAssociatedEnclaveCertificateIamRoles(...args: any): Promise<any> {
  // undefined
    return this.client.getAssociatedEnclaveCertificateIamRoles(...args).promise()
  }

  async getAssociatedIpv6PoolCidrs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Ipv6CidrAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getAssociatedIpv6PoolCidrs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Ipv6CidrAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getCapacityReservationUsage(...args: any): Promise<any> {
  // undefined
    return this.client.getCapacityReservationUsage(...args).promise()
  }

  async getCoipPoolUsage(...args: any): Promise<any> {
  // undefined
    return this.client.getCoipPoolUsage(...args).promise()
  }

  async getConsoleOutput(...args: any): Promise<any> {
  // undefined
    return this.client.getConsoleOutput(...args).promise()
  }

  async getConsoleScreenshot(...args: any): Promise<any> {
  // undefined
    return this.client.getConsoleScreenshot(...args).promise()
  }

  async getDefaultCreditSpecification(...args: any): Promise<any> {
  // undefined
    return this.client.getDefaultCreditSpecification(...args).promise()
  }

  async getEbsDefaultKmsKeyId(...args: any): Promise<any> {
  // undefined
    return this.client.getEbsDefaultKmsKeyId(...args).promise()
  }

  async getEbsEncryptionByDefault(...args: any): Promise<any> {
  // undefined
    return this.client.getEbsEncryptionByDefault(...args).promise()
  }

  async getFlowLogsIntegrationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getFlowLogsIntegrationTemplate(...args).promise()
  }

  async getGroupsForCapacityReservation(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CapacityReservationGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getGroupsForCapacityReservation(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CapacityReservationGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getHostReservationPurchasePreview(...args: any): Promise<any> {
  // undefined
    return this.client.getHostReservationPurchasePreview(...args).promise()
  }

  async getInstanceTypesFromInstanceRequirements(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceTypes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getInstanceTypesFromInstanceRequirements(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceTypes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getInstanceUefiData(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceUefiData(...args).promise()
  }

  async getIpamAddressHistory(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HistoryRecords"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getIpamAddressHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.HistoryRecords ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getIpamPoolAllocations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamPoolAllocations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getIpamPoolAllocations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IpamPoolAllocations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getIpamPoolCidrs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamPoolCidrs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getIpamPoolCidrs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IpamPoolCidrs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getIpamResourceCidrs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IpamResourceCidrs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getIpamResourceCidrs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IpamResourceCidrs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getLaunchTemplateData(...args: any): Promise<any> {
  // undefined
    return this.client.getLaunchTemplateData(...args).promise()
  }

  async getManagedPrefixListAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PrefixListAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getManagedPrefixListAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PrefixListAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getManagedPrefixListEntries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getManagedPrefixListEntries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNetworkInsightsAccessScopeAnalysisFindings(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkInsightsAccessScopeAnalysisFindings(...args).promise()
  }

  async getNetworkInsightsAccessScopeContent(...args: any): Promise<any> {
  // undefined
    return this.client.getNetworkInsightsAccessScopeContent(...args).promise()
  }

  async getPasswordData(...args: any): Promise<any> {
  // undefined
    return this.client.getPasswordData(...args).promise()
  }

  async getReservedInstancesExchangeQuote(...args: any): Promise<any> {
  // undefined
    return this.client.getReservedInstancesExchangeQuote(...args).promise()
  }

  async getSerialConsoleAccessStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getSerialConsoleAccessStatus(...args).promise()
  }

  async getSpotPlacementScores(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpotPlacementScores"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getSpotPlacementScores(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SpotPlacementScores ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getSubnetCidrReservations(...args: any): Promise<any> {
  // undefined
    return this.client.getSubnetCidrReservations(...args).promise()
  }

  async getTransitGatewayAttachmentPropagations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayAttachmentPropagations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayAttachmentPropagations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayAttachmentPropagations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayMulticastDomainAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MulticastDomainAssociations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayMulticastDomainAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.MulticastDomainAssociations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayPolicyTableAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Associations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayPolicyTableAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Associations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayPolicyTableEntries(...args: any): Promise<any> {
  // undefined
    return this.client.getTransitGatewayPolicyTableEntries(...args).promise()
  }

  async getTransitGatewayPrefixListReferences(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayPrefixListReferences"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayPrefixListReferences(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayPrefixListReferences ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayRouteTableAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Associations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayRouteTableAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Associations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTransitGatewayRouteTablePropagations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TransitGatewayRouteTablePropagations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getTransitGatewayRouteTablePropagations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TransitGatewayRouteTablePropagations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getVpnConnectionDeviceSampleConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getVpnConnectionDeviceSampleConfiguration(...args).promise()
  }

  async getVpnConnectionDeviceTypes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VpnConnectionDeviceTypes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getVpnConnectionDeviceTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.VpnConnectionDeviceTypes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async importClientVpnClientCertificateRevocationList(...args: any): Promise<any> {
  // undefined
    return this.client.importClientVpnClientCertificateRevocationList(...args).promise()
  }

  async importImage(...args: any): Promise<any> {
  // undefined
    return this.client.importImage(...args).promise()
  }

  async importInstance(...args: any): Promise<any> {
  // undefined
    return this.client.importInstance(...args).promise()
  }

  async importKeyPair(...args: any): Promise<any> {
  // undefined
    return this.client.importKeyPair(...args).promise()
  }

  async importSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.importSnapshot(...args).promise()
  }

  async importVolume(...args: any): Promise<any> {
  // undefined
    return this.client.importVolume(...args).promise()
  }

  async listImagesInRecycleBin(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Images"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImagesInRecycleBin(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Images ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSnapshotsInRecycleBin(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Snapshots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSnapshotsInRecycleBin(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Snapshots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async modifyAddressAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyAddressAttribute(...args).promise()
  }

  async modifyAvailabilityZoneGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyAvailabilityZoneGroup(...args).promise()
  }

  async modifyCapacityReservation(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCapacityReservation(...args).promise()
  }

  async modifyCapacityReservationFleet(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCapacityReservationFleet(...args).promise()
  }

  async modifyClientVpnEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.modifyClientVpnEndpoint(...args).promise()
  }

  async modifyDefaultCreditSpecification(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDefaultCreditSpecification(...args).promise()
  }

  async modifyEbsDefaultKmsKeyId(...args: any): Promise<any> {
  // undefined
    return this.client.modifyEbsDefaultKmsKeyId(...args).promise()
  }

  async modifyFleet(...args: any): Promise<any> {
  // undefined
    return this.client.modifyFleet(...args).promise()
  }

  async modifyFpgaImageAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyFpgaImageAttribute(...args).promise()
  }

  async modifyHosts(...args: any): Promise<any> {
  // undefined
    return this.client.modifyHosts(...args).promise()
  }

  async modifyIdFormat(...args: any): Promise<any> {
  // undefined
    return this.client.modifyIdFormat(...args).promise()
  }

  async modifyIdentityIdFormat(...args: any): Promise<any> {
  // undefined
    return this.client.modifyIdentityIdFormat(...args).promise()
  }

  async modifyImageAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyImageAttribute(...args).promise()
  }

  async modifyInstanceAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceAttribute(...args).promise()
  }

  async modifyInstanceCapacityReservationAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceCapacityReservationAttributes(...args).promise()
  }

  async modifyInstanceCreditSpecification(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceCreditSpecification(...args).promise()
  }

  async modifyInstanceEventStartTime(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceEventStartTime(...args).promise()
  }

  async modifyInstanceEventWindow(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceEventWindow(...args).promise()
  }

  async modifyInstanceMaintenanceOptions(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceMaintenanceOptions(...args).promise()
  }

  async modifyInstanceMetadataOptions(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstanceMetadataOptions(...args).promise()
  }

  async modifyInstancePlacement(...args: any): Promise<any> {
  // undefined
    return this.client.modifyInstancePlacement(...args).promise()
  }

  async modifyIpam(...args: any): Promise<any> {
  // undefined
    return this.client.modifyIpam(...args).promise()
  }

  async modifyIpamPool(...args: any): Promise<any> {
  // undefined
    return this.client.modifyIpamPool(...args).promise()
  }

  async modifyIpamResourceCidr(...args: any): Promise<any> {
  // undefined
    return this.client.modifyIpamResourceCidr(...args).promise()
  }

  async modifyIpamScope(...args: any): Promise<any> {
  // undefined
    return this.client.modifyIpamScope(...args).promise()
  }

  async modifyLaunchTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.modifyLaunchTemplate(...args).promise()
  }

  async modifyLocalGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyLocalGatewayRoute(...args).promise()
  }

  async modifyManagedPrefixList(...args: any): Promise<any> {
  // undefined
    return this.client.modifyManagedPrefixList(...args).promise()
  }

  async modifyNetworkInterfaceAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyNetworkInterfaceAttribute(...args).promise()
  }

  async modifyPrivateDnsNameOptions(...args: any): Promise<any> {
  // undefined
    return this.client.modifyPrivateDnsNameOptions(...args).promise()
  }

  async modifyReservedInstances(...args: any): Promise<any> {
  // undefined
    return this.client.modifyReservedInstances(...args).promise()
  }

  async modifySecurityGroupRules(...args: any): Promise<any> {
  // undefined
    return this.client.modifySecurityGroupRules(...args).promise()
  }

  async modifySnapshotAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifySnapshotAttribute(...args).promise()
  }

  async modifySnapshotTier(...args: any): Promise<any> {
  // undefined
    return this.client.modifySnapshotTier(...args).promise()
  }

  async modifySpotFleetRequest(...args: any): Promise<any> {
  // undefined
    return this.client.modifySpotFleetRequest(...args).promise()
  }

  async modifySubnetAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifySubnetAttribute(...args).promise()
  }

  async modifyTrafficMirrorFilterNetworkServices(...args: any): Promise<any> {
  // undefined
    return this.client.modifyTrafficMirrorFilterNetworkServices(...args).promise()
  }

  async modifyTrafficMirrorFilterRule(...args: any): Promise<any> {
  // undefined
    return this.client.modifyTrafficMirrorFilterRule(...args).promise()
  }

  async modifyTrafficMirrorSession(...args: any): Promise<any> {
  // undefined
    return this.client.modifyTrafficMirrorSession(...args).promise()
  }

  async modifyTransitGateway(...args: any): Promise<any> {
  // undefined
    return this.client.modifyTransitGateway(...args).promise()
  }

  async modifyTransitGatewayPrefixListReference(...args: any): Promise<any> {
  // undefined
    return this.client.modifyTransitGatewayPrefixListReference(...args).promise()
  }

  async modifyTransitGatewayVpcAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.modifyTransitGatewayVpcAttachment(...args).promise()
  }

  async modifyVolume(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVolume(...args).promise()
  }

  async modifyVolumeAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVolumeAttribute(...args).promise()
  }

  async modifyVpcAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpcAttribute(...args).promise()
  }

  async modifyVpcEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpcEndpoint(...args).promise()
  }

  async modifyVpcEndpointConnectionNotification(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpcEndpointConnectionNotification(...args).promise()
  }

  async modifyVpcEndpointServiceConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpcEndpointServiceConfiguration(...args).promise()
  }

  async modifyVpcEndpointServicePayerResponsibility(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpcEndpointServicePayerResponsibility(...args).promise()
  }

  async modifyVpcEndpointServicePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpcEndpointServicePermissions(...args).promise()
  }

  async modifyVpcPeeringConnectionOptions(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpcPeeringConnectionOptions(...args).promise()
  }

  async modifyVpcTenancy(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpcTenancy(...args).promise()
  }

  async modifyVpnConnection(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpnConnection(...args).promise()
  }

  async modifyVpnConnectionOptions(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpnConnectionOptions(...args).promise()
  }

  async modifyVpnTunnelCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpnTunnelCertificate(...args).promise()
  }

  async modifyVpnTunnelOptions(...args: any): Promise<any> {
  // undefined
    return this.client.modifyVpnTunnelOptions(...args).promise()
  }

  async monitorInstances(...args: any): Promise<any> {
  // undefined
    return this.client.monitorInstances(...args).promise()
  }

  async moveAddressToVpc(...args: any): Promise<any> {
  // undefined
    return this.client.moveAddressToVpc(...args).promise()
  }

  async moveByoipCidrToIpam(...args: any): Promise<any> {
  // undefined
    return this.client.moveByoipCidrToIpam(...args).promise()
  }

  async provisionByoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.provisionByoipCidr(...args).promise()
  }

  async provisionIpamPoolCidr(...args: any): Promise<any> {
  // undefined
    return this.client.provisionIpamPoolCidr(...args).promise()
  }

  async provisionPublicIpv4PoolCidr(...args: any): Promise<any> {
  // undefined
    return this.client.provisionPublicIpv4PoolCidr(...args).promise()
  }

  async purchaseHostReservation(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseHostReservation(...args).promise()
  }

  async purchaseReservedInstancesOffering(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseReservedInstancesOffering(...args).promise()
  }

  async purchaseScheduledInstances(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseScheduledInstances(...args).promise()
  }

  async rebootInstances(...args: any): Promise<any> {
  // undefined
    return this.client.rebootInstances(...args).promise()
  }

  async registerImage(...args: any): Promise<any> {
  // undefined
    return this.client.registerImage(...args).promise()
  }

  async registerInstanceEventNotificationAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.registerInstanceEventNotificationAttributes(...args).promise()
  }

  async registerTransitGatewayMulticastGroupMembers(...args: any): Promise<any> {
  // undefined
    return this.client.registerTransitGatewayMulticastGroupMembers(...args).promise()
  }

  async registerTransitGatewayMulticastGroupSources(...args: any): Promise<any> {
  // undefined
    return this.client.registerTransitGatewayMulticastGroupSources(...args).promise()
  }

  async rejectTransitGatewayMulticastDomainAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.rejectTransitGatewayMulticastDomainAssociations(...args).promise()
  }

  async rejectTransitGatewayPeeringAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.rejectTransitGatewayPeeringAttachment(...args).promise()
  }

  async rejectTransitGatewayVpcAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.rejectTransitGatewayVpcAttachment(...args).promise()
  }

  async rejectVpcEndpointConnections(...args: any): Promise<any> {
  // undefined
    return this.client.rejectVpcEndpointConnections(...args).promise()
  }

  async rejectVpcPeeringConnection(...args: any): Promise<any> {
  // undefined
    return this.client.rejectVpcPeeringConnection(...args).promise()
  }

  async releaseAddress(...args: any): Promise<any> {
  // undefined
    return this.client.releaseAddress(...args).promise()
  }

  async releaseHosts(...args: any): Promise<any> {
  // undefined
    return this.client.releaseHosts(...args).promise()
  }

  async releaseIpamPoolAllocation(...args: any): Promise<any> {
  // undefined
    return this.client.releaseIpamPoolAllocation(...args).promise()
  }

  async replaceIamInstanceProfileAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.replaceIamInstanceProfileAssociation(...args).promise()
  }

  async replaceNetworkAclAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.replaceNetworkAclAssociation(...args).promise()
  }

  async replaceNetworkAclEntry(...args: any): Promise<any> {
  // undefined
    return this.client.replaceNetworkAclEntry(...args).promise()
  }

  async replaceRoute(...args: any): Promise<any> {
  // undefined
    return this.client.replaceRoute(...args).promise()
  }

  async replaceRouteTableAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.replaceRouteTableAssociation(...args).promise()
  }

  async replaceTransitGatewayRoute(...args: any): Promise<any> {
  // undefined
    return this.client.replaceTransitGatewayRoute(...args).promise()
  }

  async reportInstanceStatus(...args: any): Promise<any> {
  // undefined
    return this.client.reportInstanceStatus(...args).promise()
  }

  async requestSpotFleet(...args: any): Promise<any> {
  // undefined
    return this.client.requestSpotFleet(...args).promise()
  }

  async requestSpotInstances(...args: any): Promise<any> {
  // undefined
    return this.client.requestSpotInstances(...args).promise()
  }

  async resetAddressAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.resetAddressAttribute(...args).promise()
  }

  async resetEbsDefaultKmsKeyId(...args: any): Promise<any> {
  // undefined
    return this.client.resetEbsDefaultKmsKeyId(...args).promise()
  }

  async resetFpgaImageAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.resetFpgaImageAttribute(...args).promise()
  }

  async resetImageAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.resetImageAttribute(...args).promise()
  }

  async resetInstanceAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.resetInstanceAttribute(...args).promise()
  }

  async resetNetworkInterfaceAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.resetNetworkInterfaceAttribute(...args).promise()
  }

  async resetSnapshotAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.resetSnapshotAttribute(...args).promise()
  }

  async restoreAddressToClassic(...args: any): Promise<any> {
  // undefined
    return this.client.restoreAddressToClassic(...args).promise()
  }

  async restoreImageFromRecycleBin(...args: any): Promise<any> {
  // undefined
    return this.client.restoreImageFromRecycleBin(...args).promise()
  }

  async restoreManagedPrefixListVersion(...args: any): Promise<any> {
  // undefined
    return this.client.restoreManagedPrefixListVersion(...args).promise()
  }

  async restoreSnapshotFromRecycleBin(...args: any): Promise<any> {
  // undefined
    return this.client.restoreSnapshotFromRecycleBin(...args).promise()
  }

  async restoreSnapshotTier(...args: any): Promise<any> {
  // undefined
    return this.client.restoreSnapshotTier(...args).promise()
  }

  async revokeClientVpnIngress(...args: any): Promise<any> {
  // undefined
    return this.client.revokeClientVpnIngress(...args).promise()
  }

  async revokeSecurityGroupEgress(...args: any): Promise<any> {
  // undefined
    return this.client.revokeSecurityGroupEgress(...args).promise()
  }

  async revokeSecurityGroupIngress(...args: any): Promise<any> {
  // undefined
    return this.client.revokeSecurityGroupIngress(...args).promise()
  }

  async runInstances(...args: any): Promise<any> {
  // undefined
    return this.client.runInstances(...args).promise()
  }

  async runScheduledInstances(...args: any): Promise<any> {
  // undefined
    return this.client.runScheduledInstances(...args).promise()
  }

  async searchLocalGatewayRoutes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Routes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchLocalGatewayRoutes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Routes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchTransitGatewayMulticastGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MulticastGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchTransitGatewayMulticastGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.MulticastGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchTransitGatewayRoutes(...args: any): Promise<any> {
  // undefined
    return this.client.searchTransitGatewayRoutes(...args).promise()
  }

  async sendDiagnosticInterrupt(...args: any): Promise<any> {
  // undefined
    return this.client.sendDiagnosticInterrupt(...args).promise()
  }

  async startInstances(...args: any): Promise<any> {
  // undefined
    return this.client.startInstances(...args).promise()
  }

  async startNetworkInsightsAccessScopeAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.startNetworkInsightsAccessScopeAnalysis(...args).promise()
  }

  async startNetworkInsightsAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.startNetworkInsightsAnalysis(...args).promise()
  }

  async startVpcEndpointServicePrivateDnsVerification(...args: any): Promise<any> {
  // undefined
    return this.client.startVpcEndpointServicePrivateDnsVerification(...args).promise()
  }

  async stopInstances(...args: any): Promise<any> {
  // undefined
    return this.client.stopInstances(...args).promise()
  }

  async terminateClientVpnConnections(...args: any): Promise<any> {
  // undefined
    return this.client.terminateClientVpnConnections(...args).promise()
  }

  async terminateInstances(...args: any): Promise<any> {
  // undefined
    return this.client.terminateInstances(...args).promise()
  }

  async unassignIpv6Addresses(...args: any): Promise<any> {
  // undefined
    return this.client.unassignIpv6Addresses(...args).promise()
  }

  async unassignPrivateIpAddresses(...args: any): Promise<any> {
  // undefined
    return this.client.unassignPrivateIpAddresses(...args).promise()
  }

  async unmonitorInstances(...args: any): Promise<any> {
  // undefined
    return this.client.unmonitorInstances(...args).promise()
  }

  async updateSecurityGroupRuleDescriptionsEgress(...args: any): Promise<any> {
  // undefined
    return this.client.updateSecurityGroupRuleDescriptionsEgress(...args).promise()
  }

  async updateSecurityGroupRuleDescriptionsIngress(...args: any): Promise<any> {
  // undefined
    return this.client.updateSecurityGroupRuleDescriptionsIngress(...args).promise()
  }

  async withdrawByoipCidr(...args: any): Promise<any> {
  // undefined
    return this.client.withdrawByoipCidr(...args).promise()
  }
  
  static fromClient(client: AWSEC2): ClientType {
    return new EC2(client) as any;
  }
  
  static client(options?: AWSEC2.Types.ClientConfiguration): ClientType {
    return new EC2(new AWSEC2(options)) as any;
  }
}  
