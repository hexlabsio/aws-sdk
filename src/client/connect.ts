import { Request, Connect as AWSConnect } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSConnect> = AWSConnect[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSConnect> = AWSConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSConnect[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSConnect, Extras> = AWSConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'connect';
    global: false;
    category: 'Customer Engagement'
    topLevelCalls: readonly ["listInstances","listPhoneNumbersV2","searchUsers"];
    
  associateApprovedOrigin: FunctionTypeFrom<'associateApprovedOrigin'>;

  associateBot: FunctionTypeFrom<'associateBot'>;

  associateDefaultVocabulary: FunctionTypeFrom<'associateDefaultVocabulary'>;

  associateInstanceStorageConfig: FunctionTypeFrom<'associateInstanceStorageConfig'>;

  associateLambdaFunction: FunctionTypeFrom<'associateLambdaFunction'>;

  associateLexBot: FunctionTypeFrom<'associateLexBot'>;

  associatePhoneNumberContactFlow: FunctionTypeFrom<'associatePhoneNumberContactFlow'>;

  associateQueueQuickConnects: FunctionTypeFrom<'associateQueueQuickConnects'>;

  associateRoutingProfileQueues: FunctionTypeFrom<'associateRoutingProfileQueues'>;

  associateSecurityKey: FunctionTypeFrom<'associateSecurityKey'>;

  claimPhoneNumber: FunctionTypeFrom<'claimPhoneNumber'>;

  createAgentStatus: FunctionTypeFrom<'createAgentStatus'>;

  createContactFlow: FunctionTypeFrom<'createContactFlow'>;

  createContactFlowModule: FunctionTypeFrom<'createContactFlowModule'>;

  createHoursOfOperation: FunctionTypeFrom<'createHoursOfOperation'>;

  createInstance: FunctionTypeFrom<'createInstance'>;

  createIntegrationAssociation: FunctionTypeFrom<'createIntegrationAssociation'>;

  createQueue: FunctionTypeFrom<'createQueue'>;

  createQuickConnect: FunctionTypeFrom<'createQuickConnect'>;

  createRoutingProfile: FunctionTypeFrom<'createRoutingProfile'>;

  createSecurityProfile: FunctionTypeFrom<'createSecurityProfile'>;

  createTaskTemplate: FunctionTypeFrom<'createTaskTemplate'>;

  createUseCase: FunctionTypeFrom<'createUseCase'>;

  createUser: FunctionTypeFrom<'createUser'>;

  createUserHierarchyGroup: FunctionTypeFrom<'createUserHierarchyGroup'>;

  createVocabulary: FunctionTypeFrom<'createVocabulary'>;

  deleteContactFlow: FunctionTypeFrom<'deleteContactFlow'>;

  deleteContactFlowModule: FunctionTypeFrom<'deleteContactFlowModule'>;

  deleteHoursOfOperation: FunctionTypeFrom<'deleteHoursOfOperation'>;

  deleteInstance: FunctionTypeFrom<'deleteInstance'>;

  deleteIntegrationAssociation: FunctionTypeFrom<'deleteIntegrationAssociation'>;

  deleteQuickConnect: FunctionTypeFrom<'deleteQuickConnect'>;

  deleteSecurityProfile: FunctionTypeFrom<'deleteSecurityProfile'>;

  deleteTaskTemplate: FunctionTypeFrom<'deleteTaskTemplate'>;

  deleteUseCase: FunctionTypeFrom<'deleteUseCase'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  deleteUserHierarchyGroup: FunctionTypeFrom<'deleteUserHierarchyGroup'>;

  deleteVocabulary: FunctionTypeFrom<'deleteVocabulary'>;

  describeAgentStatus: FunctionTypeFrom<'describeAgentStatus'>;

  describeContact: FunctionTypeFrom<'describeContact'>;

  describeContactFlow: FunctionTypeFrom<'describeContactFlow'>;

  describeContactFlowModule: FunctionTypeFrom<'describeContactFlowModule'>;

  describeHoursOfOperation: FunctionTypeFrom<'describeHoursOfOperation'>;

  describeInstance: FunctionTypeFrom<'describeInstance'>;

  describeInstanceAttribute: FunctionTypeFrom<'describeInstanceAttribute'>;

  describeInstanceStorageConfig: FunctionTypeFrom<'describeInstanceStorageConfig'>;

  describePhoneNumber: FunctionTypeFrom<'describePhoneNumber'>;

  describeQueue: FunctionTypeFrom<'describeQueue'>;

  describeQuickConnect: FunctionTypeFrom<'describeQuickConnect'>;

  describeRoutingProfile: FunctionTypeFrom<'describeRoutingProfile'>;

  describeSecurityProfile: FunctionTypeFrom<'describeSecurityProfile'>;

  describeUser: FunctionTypeFrom<'describeUser'>;

  describeUserHierarchyGroup: FunctionTypeFrom<'describeUserHierarchyGroup'>;

  describeUserHierarchyStructure: FunctionTypeFrom<'describeUserHierarchyStructure'>;

  describeVocabulary: FunctionTypeFrom<'describeVocabulary'>;

  disassociateApprovedOrigin: FunctionTypeFrom<'disassociateApprovedOrigin'>;

  disassociateBot: FunctionTypeFrom<'disassociateBot'>;

  disassociateInstanceStorageConfig: FunctionTypeFrom<'disassociateInstanceStorageConfig'>;

  disassociateLambdaFunction: FunctionTypeFrom<'disassociateLambdaFunction'>;

  disassociateLexBot: FunctionTypeFrom<'disassociateLexBot'>;

  disassociatePhoneNumberContactFlow: FunctionTypeFrom<'disassociatePhoneNumberContactFlow'>;

  disassociateQueueQuickConnects: FunctionTypeFrom<'disassociateQueueQuickConnects'>;

  disassociateRoutingProfileQueues: FunctionTypeFrom<'disassociateRoutingProfileQueues'>;

  disassociateSecurityKey: FunctionTypeFrom<'disassociateSecurityKey'>;

  getContactAttributes: FunctionTypeFrom<'getContactAttributes'>;

  getCurrentMetricData: FunctionTypeFrom<'getCurrentMetricData'>;

  getCurrentUserData: FunctionTypeFrom<'getCurrentUserData'>;

  getFederationToken: FunctionTypeFrom<'getFederationToken'>;

  getMetricData: FunctionTypeFrom<'getMetricData'>;

  getTaskTemplate: FunctionTypeFrom<'getTaskTemplate'>;

  listAgentStatuses(params: { [K in keyof Omit<ParamsFrom<'listAgentStatuses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAgentStatuses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAgentStatuses'>]-?: ReturnTypeFrom<'listAgentStatuses'>[K]}['AgentStatusSummaryList'] }>
  ;

  listApprovedOrigins(params: { [K in keyof Omit<ParamsFrom<'listApprovedOrigins', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listApprovedOrigins', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApprovedOrigins'>]-?: ReturnTypeFrom<'listApprovedOrigins'>[K]}['Origins'] }>
  ;

  listBots(params: { [K in keyof Omit<ParamsFrom<'listBots', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBots'>]-?: ReturnTypeFrom<'listBots'>[K]}['LexBots'] }>
  ;

  listContactFlowModules(params: { [K in keyof Omit<ParamsFrom<'listContactFlowModules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listContactFlowModules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContactFlowModules'>]-?: ReturnTypeFrom<'listContactFlowModules'>[K]}['ContactFlowModulesSummaryList'] }>
  ;

  listContactFlows(params: { [K in keyof Omit<ParamsFrom<'listContactFlows', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listContactFlows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContactFlows'>]-?: ReturnTypeFrom<'listContactFlows'>[K]}['ContactFlowSummaryList'] }>
  ;

  listContactReferences(params: { [K in keyof Omit<ParamsFrom<'listContactReferences', { next?: string }>, 'NextToken'>]: ParamsFrom<'listContactReferences', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContactReferences'>]-?: ReturnTypeFrom<'listContactReferences'>[K]}['ReferenceSummaryList'] }>
  ;

  listDefaultVocabularies(params: { [K in keyof Omit<ParamsFrom<'listDefaultVocabularies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDefaultVocabularies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDefaultVocabularies'>]-?: ReturnTypeFrom<'listDefaultVocabularies'>[K]}['DefaultVocabularyList'] }>
  ;

  listHoursOfOperations(params: { [K in keyof Omit<ParamsFrom<'listHoursOfOperations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listHoursOfOperations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHoursOfOperations'>]-?: ReturnTypeFrom<'listHoursOfOperations'>[K]}['HoursOfOperationSummaryList'] }>
  ;

  listInstanceAttributes(params: { [K in keyof Omit<ParamsFrom<'listInstanceAttributes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInstanceAttributes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstanceAttributes'>]-?: ReturnTypeFrom<'listInstanceAttributes'>[K]}['Attributes'] }>
  ;

  listInstanceStorageConfigs(params: { [K in keyof Omit<ParamsFrom<'listInstanceStorageConfigs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInstanceStorageConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstanceStorageConfigs'>]-?: ReturnTypeFrom<'listInstanceStorageConfigs'>[K]}['StorageConfigs'] }>
  ;

  listInstances(params: { [K in keyof Omit<ParamsFrom<'listInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['InstanceSummaryList'] }>
  listInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['InstanceSummaryList'] }>;

  listIntegrationAssociations(params: { [K in keyof Omit<ParamsFrom<'listIntegrationAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listIntegrationAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIntegrationAssociations'>]-?: ReturnTypeFrom<'listIntegrationAssociations'>[K]}['IntegrationAssociationSummaryList'] }>
  ;

  listLambdaFunctions(params: { [K in keyof Omit<ParamsFrom<'listLambdaFunctions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listLambdaFunctions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLambdaFunctions'>]-?: ReturnTypeFrom<'listLambdaFunctions'>[K]}['LambdaFunctions'] }>
  ;

  listLexBots(params: { [K in keyof Omit<ParamsFrom<'listLexBots', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listLexBots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLexBots'>]-?: ReturnTypeFrom<'listLexBots'>[K]}['LexBots'] }>
  ;

  listPhoneNumbers(params: { [K in keyof Omit<ParamsFrom<'listPhoneNumbers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPhoneNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPhoneNumbers'>]-?: ReturnTypeFrom<'listPhoneNumbers'>[K]}['PhoneNumberSummaryList'] }>
  ;

  listPhoneNumbersV2(params: { [K in keyof Omit<ParamsFrom<'listPhoneNumbersV2', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPhoneNumbersV2', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPhoneNumbersV2'>]-?: ReturnTypeFrom<'listPhoneNumbersV2'>[K]}['ListPhoneNumbersSummaryList'] }>
  listPhoneNumbersV2(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPhoneNumbersV2'>]-?: ReturnTypeFrom<'listPhoneNumbersV2'>[K]}['ListPhoneNumbersSummaryList'] }>;

  listPrompts(params: { [K in keyof Omit<ParamsFrom<'listPrompts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPrompts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPrompts'>]-?: ReturnTypeFrom<'listPrompts'>[K]}['PromptSummaryList'] }>
  ;

  listQueueQuickConnects(params: { [K in keyof Omit<ParamsFrom<'listQueueQuickConnects', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listQueueQuickConnects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQueueQuickConnects'>]-?: ReturnTypeFrom<'listQueueQuickConnects'>[K]}['QuickConnectSummaryList'] }>
  ;

  listQueues(params: { [K in keyof Omit<ParamsFrom<'listQueues', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQueues'>]-?: ReturnTypeFrom<'listQueues'>[K]}['QueueSummaryList'] }>
  ;

  listQuickConnects(params: { [K in keyof Omit<ParamsFrom<'listQuickConnects', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listQuickConnects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQuickConnects'>]-?: ReturnTypeFrom<'listQuickConnects'>[K]}['QuickConnectSummaryList'] }>
  ;

  listRoutingProfileQueues(params: { [K in keyof Omit<ParamsFrom<'listRoutingProfileQueues', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRoutingProfileQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoutingProfileQueues'>]-?: ReturnTypeFrom<'listRoutingProfileQueues'>[K]}['RoutingProfileQueueConfigSummaryList'] }>
  ;

  listRoutingProfiles(params: { [K in keyof Omit<ParamsFrom<'listRoutingProfiles', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRoutingProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoutingProfiles'>]-?: ReturnTypeFrom<'listRoutingProfiles'>[K]}['RoutingProfileSummaryList'] }>
  ;

  listSecurityKeys(params: { [K in keyof Omit<ParamsFrom<'listSecurityKeys', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSecurityKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityKeys'>]-?: ReturnTypeFrom<'listSecurityKeys'>[K]}['SecurityKeys'] }>
  ;

  listSecurityProfilePermissions(params: { [K in keyof Omit<ParamsFrom<'listSecurityProfilePermissions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSecurityProfilePermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityProfilePermissions'>]-?: ReturnTypeFrom<'listSecurityProfilePermissions'>[K]}['Permissions'] }>
  ;

  listSecurityProfiles(params: { [K in keyof Omit<ParamsFrom<'listSecurityProfiles', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSecurityProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSecurityProfiles'>]-?: ReturnTypeFrom<'listSecurityProfiles'>[K]}['SecurityProfileSummaryList'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTaskTemplates(params: { [K in keyof Omit<ParamsFrom<'listTaskTemplates', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTaskTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTaskTemplates'>]-?: ReturnTypeFrom<'listTaskTemplates'>[K]}['TaskTemplates'] }>
  ;

  listUseCases(params: { [K in keyof Omit<ParamsFrom<'listUseCases', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUseCases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUseCases'>]-?: ReturnTypeFrom<'listUseCases'>[K]}['UseCaseSummaryList'] }>
  ;

  listUserHierarchyGroups(params: { [K in keyof Omit<ParamsFrom<'listUserHierarchyGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUserHierarchyGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUserHierarchyGroups'>]-?: ReturnTypeFrom<'listUserHierarchyGroups'>[K]}['UserHierarchyGroupSummaryList'] }>
  ;

  listUsers(params: { [K in keyof Omit<ParamsFrom<'listUsers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['UserSummaryList'] }>
  ;

  putUserStatus: FunctionTypeFrom<'putUserStatus'>;

  releasePhoneNumber: FunctionTypeFrom<'releasePhoneNumber'>;

  resumeContactRecording: FunctionTypeFrom<'resumeContactRecording'>;

  searchAvailablePhoneNumbers(params: { [K in keyof Omit<ParamsFrom<'searchAvailablePhoneNumbers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchAvailablePhoneNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchAvailablePhoneNumbers'>]-?: ReturnTypeFrom<'searchAvailablePhoneNumbers'>[K]}['AvailableNumbersList'] }>
  ;

  searchQueues(params: { [K in keyof Omit<ParamsFrom<'searchQueues', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchQueues'>]-?: ReturnTypeFrom<'searchQueues'>[K]}['Queues'] }>
  ;

  searchRoutingProfiles(params: { [K in keyof Omit<ParamsFrom<'searchRoutingProfiles', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchRoutingProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchRoutingProfiles'>]-?: ReturnTypeFrom<'searchRoutingProfiles'>[K]}['RoutingProfiles'] }>
  ;

  searchSecurityProfiles(params: { [K in keyof Omit<ParamsFrom<'searchSecurityProfiles', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchSecurityProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchSecurityProfiles'>]-?: ReturnTypeFrom<'searchSecurityProfiles'>[K]}['SecurityProfiles'] }>
  ;

  searchUsers(params: { [K in keyof Omit<ParamsFrom<'searchUsers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchUsers'>]-?: ReturnTypeFrom<'searchUsers'>[K]}['Users'] }>
  searchUsers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchUsers'>]-?: ReturnTypeFrom<'searchUsers'>[K]}['Users'] }>;

  searchVocabularies(params: { [K in keyof Omit<ParamsFrom<'searchVocabularies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchVocabularies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchVocabularies'>]-?: ReturnTypeFrom<'searchVocabularies'>[K]}['VocabularySummaryList'] }>
  ;

  startChatContact: FunctionTypeFrom<'startChatContact'>;

  startContactRecording: FunctionTypeFrom<'startContactRecording'>;

  startContactStreaming: FunctionTypeFrom<'startContactStreaming'>;

  startOutboundVoiceContact: FunctionTypeFrom<'startOutboundVoiceContact'>;

  startTaskContact: FunctionTypeFrom<'startTaskContact'>;

  stopContact: FunctionTypeFrom<'stopContact'>;

  stopContactRecording: FunctionTypeFrom<'stopContactRecording'>;

  stopContactStreaming: FunctionTypeFrom<'stopContactStreaming'>;

  suspendContactRecording: FunctionTypeFrom<'suspendContactRecording'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  transferContact: FunctionTypeFrom<'transferContact'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAgentStatus: FunctionTypeFrom<'updateAgentStatus'>;

  updateContact: FunctionTypeFrom<'updateContact'>;

  updateContactAttributes: FunctionTypeFrom<'updateContactAttributes'>;

  updateContactFlowContent: FunctionTypeFrom<'updateContactFlowContent'>;

  updateContactFlowMetadata: FunctionTypeFrom<'updateContactFlowMetadata'>;

  updateContactFlowModuleContent: FunctionTypeFrom<'updateContactFlowModuleContent'>;

  updateContactFlowModuleMetadata: FunctionTypeFrom<'updateContactFlowModuleMetadata'>;

  updateContactFlowName: FunctionTypeFrom<'updateContactFlowName'>;

  updateContactSchedule: FunctionTypeFrom<'updateContactSchedule'>;

  updateHoursOfOperation: FunctionTypeFrom<'updateHoursOfOperation'>;

  updateInstanceAttribute: FunctionTypeFrom<'updateInstanceAttribute'>;

  updateInstanceStorageConfig: FunctionTypeFrom<'updateInstanceStorageConfig'>;

  updatePhoneNumber: FunctionTypeFrom<'updatePhoneNumber'>;

  updateQueueHoursOfOperation: FunctionTypeFrom<'updateQueueHoursOfOperation'>;

  updateQueueMaxContacts: FunctionTypeFrom<'updateQueueMaxContacts'>;

  updateQueueName: FunctionTypeFrom<'updateQueueName'>;

  updateQueueOutboundCallerConfig: FunctionTypeFrom<'updateQueueOutboundCallerConfig'>;

  updateQueueStatus: FunctionTypeFrom<'updateQueueStatus'>;

  updateQuickConnectConfig: FunctionTypeFrom<'updateQuickConnectConfig'>;

  updateQuickConnectName: FunctionTypeFrom<'updateQuickConnectName'>;

  updateRoutingProfileConcurrency: FunctionTypeFrom<'updateRoutingProfileConcurrency'>;

  updateRoutingProfileDefaultOutboundQueue: FunctionTypeFrom<'updateRoutingProfileDefaultOutboundQueue'>;

  updateRoutingProfileName: FunctionTypeFrom<'updateRoutingProfileName'>;

  updateRoutingProfileQueues: FunctionTypeFrom<'updateRoutingProfileQueues'>;

  updateSecurityProfile: FunctionTypeFrom<'updateSecurityProfile'>;

  updateTaskTemplate: FunctionTypeFrom<'updateTaskTemplate'>;

  updateUserHierarchy: FunctionTypeFrom<'updateUserHierarchy'>;

  updateUserHierarchyGroupName: FunctionTypeFrom<'updateUserHierarchyGroupName'>;

  updateUserHierarchyStructure: FunctionTypeFrom<'updateUserHierarchyStructure'>;

  updateUserIdentityInfo: FunctionTypeFrom<'updateUserIdentityInfo'>;

  updateUserPhoneConfig: FunctionTypeFrom<'updateUserPhoneConfig'>;

  updateUserRoutingProfile: FunctionTypeFrom<'updateUserRoutingProfile'>;

  updateUserSecurityProfiles: FunctionTypeFrom<'updateUserSecurityProfiles'>
}
 
export class Connect implements ClientType {
  private constructor(private readonly client: AWSConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'connect';
  public readonly global = false;
  public readonly category = 'Customer Engagement';
  public readonly topLevelCalls = ["listInstances","listPhoneNumbersV2","searchUsers"] as const;
  
  async associateApprovedOrigin(...args: any): Promise<any> {
  // undefined
    return this.client.associateApprovedOrigin(...args).promise()
  }

  async associateBot(...args: any): Promise<any> {
  // undefined
    return this.client.associateBot(...args).promise()
  }

  async associateDefaultVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.associateDefaultVocabulary(...args).promise()
  }

  async associateInstanceStorageConfig(...args: any): Promise<any> {
  // undefined
    return this.client.associateInstanceStorageConfig(...args).promise()
  }

  async associateLambdaFunction(...args: any): Promise<any> {
  // undefined
    return this.client.associateLambdaFunction(...args).promise()
  }

  async associateLexBot(...args: any): Promise<any> {
  // undefined
    return this.client.associateLexBot(...args).promise()
  }

  async associatePhoneNumberContactFlow(...args: any): Promise<any> {
  // undefined
    return this.client.associatePhoneNumberContactFlow(...args).promise()
  }

  async associateQueueQuickConnects(...args: any): Promise<any> {
  // undefined
    return this.client.associateQueueQuickConnects(...args).promise()
  }

  async associateRoutingProfileQueues(...args: any): Promise<any> {
  // undefined
    return this.client.associateRoutingProfileQueues(...args).promise()
  }

  async associateSecurityKey(...args: any): Promise<any> {
  // undefined
    return this.client.associateSecurityKey(...args).promise()
  }

  async claimPhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.claimPhoneNumber(...args).promise()
  }

  async createAgentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.createAgentStatus(...args).promise()
  }

  async createContactFlow(...args: any): Promise<any> {
  // undefined
    return this.client.createContactFlow(...args).promise()
  }

  async createContactFlowModule(...args: any): Promise<any> {
  // undefined
    return this.client.createContactFlowModule(...args).promise()
  }

  async createHoursOfOperation(...args: any): Promise<any> {
  // undefined
    return this.client.createHoursOfOperation(...args).promise()
  }

  async createInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createInstance(...args).promise()
  }

  async createIntegrationAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createIntegrationAssociation(...args).promise()
  }

  async createQueue(...args: any): Promise<any> {
  // undefined
    return this.client.createQueue(...args).promise()
  }

  async createQuickConnect(...args: any): Promise<any> {
  // undefined
    return this.client.createQuickConnect(...args).promise()
  }

  async createRoutingProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createRoutingProfile(...args).promise()
  }

  async createSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createSecurityProfile(...args).promise()
  }

  async createTaskTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createTaskTemplate(...args).promise()
  }

  async createUseCase(...args: any): Promise<any> {
  // undefined
    return this.client.createUseCase(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async createUserHierarchyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createUserHierarchyGroup(...args).promise()
  }

  async createVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.createVocabulary(...args).promise()
  }

  async deleteContactFlow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContactFlow(...args).promise()
  }

  async deleteContactFlowModule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContactFlowModule(...args).promise()
  }

  async deleteHoursOfOperation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHoursOfOperation(...args).promise()
  }

  async deleteInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstance(...args).promise()
  }

  async deleteIntegrationAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntegrationAssociation(...args).promise()
  }

  async deleteQuickConnect(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQuickConnect(...args).promise()
  }

  async deleteSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSecurityProfile(...args).promise()
  }

  async deleteTaskTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTaskTemplate(...args).promise()
  }

  async deleteUseCase(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUseCase(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async deleteUserHierarchyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserHierarchyGroup(...args).promise()
  }

  async deleteVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVocabulary(...args).promise()
  }

  async describeAgentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeAgentStatus(...args).promise()
  }

  async describeContact(...args: any): Promise<any> {
  // undefined
    return this.client.describeContact(...args).promise()
  }

  async describeContactFlow(...args: any): Promise<any> {
  // undefined
    return this.client.describeContactFlow(...args).promise()
  }

  async describeContactFlowModule(...args: any): Promise<any> {
  // undefined
    return this.client.describeContactFlowModule(...args).promise()
  }

  async describeHoursOfOperation(...args: any): Promise<any> {
  // undefined
    return this.client.describeHoursOfOperation(...args).promise()
  }

  async describeInstance(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstance(...args).promise()
  }

  async describeInstanceAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstanceAttribute(...args).promise()
  }

  async describeInstanceStorageConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstanceStorageConfig(...args).promise()
  }

  async describePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.describePhoneNumber(...args).promise()
  }

  async describeQueue(...args: any): Promise<any> {
  // undefined
    return this.client.describeQueue(...args).promise()
  }

  async describeQuickConnect(...args: any): Promise<any> {
  // undefined
    return this.client.describeQuickConnect(...args).promise()
  }

  async describeRoutingProfile(...args: any): Promise<any> {
  // undefined
    return this.client.describeRoutingProfile(...args).promise()
  }

  async describeSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.describeSecurityProfile(...args).promise()
  }

  async describeUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeUser(...args).promise()
  }

  async describeUserHierarchyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserHierarchyGroup(...args).promise()
  }

  async describeUserHierarchyStructure(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserHierarchyStructure(...args).promise()
  }

  async describeVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.describeVocabulary(...args).promise()
  }

  async disassociateApprovedOrigin(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateApprovedOrigin(...args).promise()
  }

  async disassociateBot(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateBot(...args).promise()
  }

  async disassociateInstanceStorageConfig(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateInstanceStorageConfig(...args).promise()
  }

  async disassociateLambdaFunction(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateLambdaFunction(...args).promise()
  }

  async disassociateLexBot(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateLexBot(...args).promise()
  }

  async disassociatePhoneNumberContactFlow(...args: any): Promise<any> {
  // undefined
    return this.client.disassociatePhoneNumberContactFlow(...args).promise()
  }

  async disassociateQueueQuickConnects(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateQueueQuickConnects(...args).promise()
  }

  async disassociateRoutingProfileQueues(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateRoutingProfileQueues(...args).promise()
  }

  async disassociateSecurityKey(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateSecurityKey(...args).promise()
  }

  async getContactAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getContactAttributes(...args).promise()
  }

  async getCurrentMetricData(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCurrentMetricData(...args).promise()
  }

  async getCurrentUserData(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCurrentUserData(...args).promise()
  }

  async getFederationToken(...args: any): Promise<any> {
  // undefined
    return this.client.getFederationToken(...args).promise()
  }

  async getMetricData(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getMetricData(...args).promise()
  }

  async getTaskTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getTaskTemplate(...args).promise()
  }

  async listAgentStatuses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AgentStatusSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAgentStatuses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AgentStatusSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listApprovedOrigins(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Origins"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApprovedOrigins(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Origins ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBots(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LexBots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LexBots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContactFlowModules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ContactFlowModulesSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContactFlowModules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ContactFlowModulesSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContactFlows(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ContactFlowSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContactFlows(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ContactFlowSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContactReferences(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ReferenceSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listContactReferences(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ReferenceSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDefaultVocabularies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DefaultVocabularyList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDefaultVocabularies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DefaultVocabularyList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHoursOfOperations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HoursOfOperationSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHoursOfOperations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.HoursOfOperationSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceAttributes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Attributes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstanceAttributes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Attributes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceStorageConfigs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StorageConfigs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstanceStorageConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StorageConfigs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIntegrationAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IntegrationAssociationSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIntegrationAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IntegrationAssociationSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLambdaFunctions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LambdaFunctions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLambdaFunctions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LambdaFunctions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLexBots(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LexBots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLexBots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LexBots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPhoneNumbers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PhoneNumberSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPhoneNumbers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PhoneNumberSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPhoneNumbersV2(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ListPhoneNumbersSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPhoneNumbersV2(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ListPhoneNumbersSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPrompts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PromptSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPrompts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PromptSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listQueueQuickConnects(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QuickConnectSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueueQuickConnects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.QuickConnectSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listQueues(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QueueSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.QueueSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listQuickConnects(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QuickConnectSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQuickConnects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.QuickConnectSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoutingProfileQueues(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RoutingProfileQueueConfigSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRoutingProfileQueues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RoutingProfileQueueConfigSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoutingProfiles(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RoutingProfileSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRoutingProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RoutingProfileSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityKeys(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityKeys"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSecurityKeys(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SecurityKeys ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityProfilePermissions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Permissions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSecurityProfilePermissions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Permissions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSecurityProfiles(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityProfileSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSecurityProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SecurityProfileSummaryList ?? [];
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

  async listTaskTemplates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TaskTemplates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTaskTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TaskTemplates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUseCases(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UseCaseSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUseCases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.UseCaseSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserHierarchyGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserHierarchyGroupSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserHierarchyGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.UserHierarchyGroupSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.UserSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putUserStatus(...args: any): Promise<any> {
  // undefined
    return this.client.putUserStatus(...args).promise()
  }

  async releasePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.releasePhoneNumber(...args).promise()
  }

  async resumeContactRecording(...args: any): Promise<any> {
  // undefined
    return this.client.resumeContactRecording(...args).promise()
  }

  async searchAvailablePhoneNumbers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AvailableNumbersList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchAvailablePhoneNumbers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AvailableNumbersList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchQueues(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Queues"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchQueues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Queues ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchRoutingProfiles(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RoutingProfiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchRoutingProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RoutingProfiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchSecurityProfiles(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityProfiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchSecurityProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SecurityProfiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchUsers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchVocabularies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VocabularySummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchVocabularies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.VocabularySummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startChatContact(...args: any): Promise<any> {
  // undefined
    return this.client.startChatContact(...args).promise()
  }

  async startContactRecording(...args: any): Promise<any> {
  // undefined
    return this.client.startContactRecording(...args).promise()
  }

  async startContactStreaming(...args: any): Promise<any> {
  // undefined
    return this.client.startContactStreaming(...args).promise()
  }

  async startOutboundVoiceContact(...args: any): Promise<any> {
  // undefined
    return this.client.startOutboundVoiceContact(...args).promise()
  }

  async startTaskContact(...args: any): Promise<any> {
  // undefined
    return this.client.startTaskContact(...args).promise()
  }

  async stopContact(...args: any): Promise<any> {
  // undefined
    return this.client.stopContact(...args).promise()
  }

  async stopContactRecording(...args: any): Promise<any> {
  // undefined
    return this.client.stopContactRecording(...args).promise()
  }

  async stopContactStreaming(...args: any): Promise<any> {
  // undefined
    return this.client.stopContactStreaming(...args).promise()
  }

  async suspendContactRecording(...args: any): Promise<any> {
  // undefined
    return this.client.suspendContactRecording(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async transferContact(...args: any): Promise<any> {
  // undefined
    return this.client.transferContact(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAgentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateAgentStatus(...args).promise()
  }

  async updateContact(...args: any): Promise<any> {
  // undefined
    return this.client.updateContact(...args).promise()
  }

  async updateContactAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactAttributes(...args).promise()
  }

  async updateContactFlowContent(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactFlowContent(...args).promise()
  }

  async updateContactFlowMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactFlowMetadata(...args).promise()
  }

  async updateContactFlowModuleContent(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactFlowModuleContent(...args).promise()
  }

  async updateContactFlowModuleMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactFlowModuleMetadata(...args).promise()
  }

  async updateContactFlowName(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactFlowName(...args).promise()
  }

  async updateContactSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactSchedule(...args).promise()
  }

  async updateHoursOfOperation(...args: any): Promise<any> {
  // undefined
    return this.client.updateHoursOfOperation(...args).promise()
  }

  async updateInstanceAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.updateInstanceAttribute(...args).promise()
  }

  async updateInstanceStorageConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateInstanceStorageConfig(...args).promise()
  }

  async updatePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.updatePhoneNumber(...args).promise()
  }

  async updateQueueHoursOfOperation(...args: any): Promise<any> {
  // undefined
    return this.client.updateQueueHoursOfOperation(...args).promise()
  }

  async updateQueueMaxContacts(...args: any): Promise<any> {
  // undefined
    return this.client.updateQueueMaxContacts(...args).promise()
  }

  async updateQueueName(...args: any): Promise<any> {
  // undefined
    return this.client.updateQueueName(...args).promise()
  }

  async updateQueueOutboundCallerConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateQueueOutboundCallerConfig(...args).promise()
  }

  async updateQueueStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateQueueStatus(...args).promise()
  }

  async updateQuickConnectConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateQuickConnectConfig(...args).promise()
  }

  async updateQuickConnectName(...args: any): Promise<any> {
  // undefined
    return this.client.updateQuickConnectName(...args).promise()
  }

  async updateRoutingProfileConcurrency(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoutingProfileConcurrency(...args).promise()
  }

  async updateRoutingProfileDefaultOutboundQueue(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoutingProfileDefaultOutboundQueue(...args).promise()
  }

  async updateRoutingProfileName(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoutingProfileName(...args).promise()
  }

  async updateRoutingProfileQueues(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoutingProfileQueues(...args).promise()
  }

  async updateSecurityProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateSecurityProfile(...args).promise()
  }

  async updateTaskTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateTaskTemplate(...args).promise()
  }

  async updateUserHierarchy(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserHierarchy(...args).promise()
  }

  async updateUserHierarchyGroupName(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserHierarchyGroupName(...args).promise()
  }

  async updateUserHierarchyStructure(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserHierarchyStructure(...args).promise()
  }

  async updateUserIdentityInfo(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserIdentityInfo(...args).promise()
  }

  async updateUserPhoneConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserPhoneConfig(...args).promise()
  }

  async updateUserRoutingProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserRoutingProfile(...args).promise()
  }

  async updateUserSecurityProfiles(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserSecurityProfiles(...args).promise()
  }
  
  static fromClient(client: AWSConnect): ClientType {
    return new Connect(client) as any;
  }
  
  static client(options?: AWSConnect.Types.ClientConfiguration): ClientType {
    return new Connect(new AWSConnect(options)) as any;
  }
}  
