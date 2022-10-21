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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSConnect> = AWSConnect[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Connect {
  private constructor(private readonly client: AWSConnect) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'connect' as const;
  public readonly global = false as const;
  public readonly category = 'Customer Engagement' as const;
  public readonly topLevelCalls = ["listInstances","listPhoneNumbersV2","searchUsers"] as const;
  
  associateApprovedOrigin: (params: RawParamsFrom<'associateApprovedOrigin'>) => Promise<ReturnTypeFrom<'associateApprovedOrigin'>>  = async params => {
  // undefined
    return this.client.associateApprovedOrigin(params as any).promise();
  }

  associateBot: (params: RawParamsFrom<'associateBot'>) => Promise<ReturnTypeFrom<'associateBot'>>  = async params => {
  // undefined
    return this.client.associateBot(params as any).promise();
  }

  associateDefaultVocabulary: (params: RawParamsFrom<'associateDefaultVocabulary'>) => Promise<ReturnTypeFrom<'associateDefaultVocabulary'>>  = async params => {
  // undefined
    return this.client.associateDefaultVocabulary(params as any).promise();
  }

  associateInstanceStorageConfig: (params: RawParamsFrom<'associateInstanceStorageConfig'>) => Promise<ReturnTypeFrom<'associateInstanceStorageConfig'>>  = async params => {
  // undefined
    return this.client.associateInstanceStorageConfig(params as any).promise();
  }

  associateLambdaFunction: (params: RawParamsFrom<'associateLambdaFunction'>) => Promise<ReturnTypeFrom<'associateLambdaFunction'>>  = async params => {
  // undefined
    return this.client.associateLambdaFunction(params as any).promise();
  }

  associateLexBot: (params: RawParamsFrom<'associateLexBot'>) => Promise<ReturnTypeFrom<'associateLexBot'>>  = async params => {
  // undefined
    return this.client.associateLexBot(params as any).promise();
  }

  associatePhoneNumberContactFlow: (params: RawParamsFrom<'associatePhoneNumberContactFlow'>) => Promise<ReturnTypeFrom<'associatePhoneNumberContactFlow'>>  = async params => {
  // undefined
    return this.client.associatePhoneNumberContactFlow(params as any).promise();
  }

  associateQueueQuickConnects: (params: RawParamsFrom<'associateQueueQuickConnects'>) => Promise<ReturnTypeFrom<'associateQueueQuickConnects'>>  = async params => {
  // undefined
    return this.client.associateQueueQuickConnects(params as any).promise();
  }

  associateRoutingProfileQueues: (params: RawParamsFrom<'associateRoutingProfileQueues'>) => Promise<ReturnTypeFrom<'associateRoutingProfileQueues'>>  = async params => {
  // undefined
    return this.client.associateRoutingProfileQueues(params as any).promise();
  }

  associateSecurityKey: (params: RawParamsFrom<'associateSecurityKey'>) => Promise<ReturnTypeFrom<'associateSecurityKey'>>  = async params => {
  // undefined
    return this.client.associateSecurityKey(params as any).promise();
  }

  claimPhoneNumber: (params: RawParamsFrom<'claimPhoneNumber'>) => Promise<ReturnTypeFrom<'claimPhoneNumber'>>  = async params => {
  // undefined
    return this.client.claimPhoneNumber(params as any).promise();
  }

  createAgentStatus: (params: RawParamsFrom<'createAgentStatus'>) => Promise<ReturnTypeFrom<'createAgentStatus'>>  = async params => {
  // undefined
    return this.client.createAgentStatus(params as any).promise();
  }

  createContactFlow: (params: RawParamsFrom<'createContactFlow'>) => Promise<ReturnTypeFrom<'createContactFlow'>>  = async params => {
  // undefined
    return this.client.createContactFlow(params as any).promise();
  }

  createContactFlowModule: (params: RawParamsFrom<'createContactFlowModule'>) => Promise<ReturnTypeFrom<'createContactFlowModule'>>  = async params => {
  // undefined
    return this.client.createContactFlowModule(params as any).promise();
  }

  createHoursOfOperation: (params: RawParamsFrom<'createHoursOfOperation'>) => Promise<ReturnTypeFrom<'createHoursOfOperation'>>  = async params => {
  // undefined
    return this.client.createHoursOfOperation(params as any).promise();
  }

  createInstance: (params: RawParamsFrom<'createInstance'>) => Promise<ReturnTypeFrom<'createInstance'>>  = async params => {
  // undefined
    return this.client.createInstance(params as any).promise();
  }

  createIntegrationAssociation: (params: RawParamsFrom<'createIntegrationAssociation'>) => Promise<ReturnTypeFrom<'createIntegrationAssociation'>>  = async params => {
  // undefined
    return this.client.createIntegrationAssociation(params as any).promise();
  }

  createQueue: (params: RawParamsFrom<'createQueue'>) => Promise<ReturnTypeFrom<'createQueue'>>  = async params => {
  // undefined
    return this.client.createQueue(params as any).promise();
  }

  createQuickConnect: (params: RawParamsFrom<'createQuickConnect'>) => Promise<ReturnTypeFrom<'createQuickConnect'>>  = async params => {
  // undefined
    return this.client.createQuickConnect(params as any).promise();
  }

  createRoutingProfile: (params: RawParamsFrom<'createRoutingProfile'>) => Promise<ReturnTypeFrom<'createRoutingProfile'>>  = async params => {
  // undefined
    return this.client.createRoutingProfile(params as any).promise();
  }

  createSecurityProfile: (params: RawParamsFrom<'createSecurityProfile'>) => Promise<ReturnTypeFrom<'createSecurityProfile'>>  = async params => {
  // undefined
    return this.client.createSecurityProfile(params as any).promise();
  }

  createTaskTemplate: (params: RawParamsFrom<'createTaskTemplate'>) => Promise<ReturnTypeFrom<'createTaskTemplate'>>  = async params => {
  // undefined
    return this.client.createTaskTemplate(params as any).promise();
  }

  createUseCase: (params: RawParamsFrom<'createUseCase'>) => Promise<ReturnTypeFrom<'createUseCase'>>  = async params => {
  // undefined
    return this.client.createUseCase(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  createUserHierarchyGroup: (params: RawParamsFrom<'createUserHierarchyGroup'>) => Promise<ReturnTypeFrom<'createUserHierarchyGroup'>>  = async params => {
  // undefined
    return this.client.createUserHierarchyGroup(params as any).promise();
  }

  createVocabulary: (params: RawParamsFrom<'createVocabulary'>) => Promise<ReturnTypeFrom<'createVocabulary'>>  = async params => {
  // undefined
    return this.client.createVocabulary(params as any).promise();
  }

  deleteContactFlow: (params: RawParamsFrom<'deleteContactFlow'>) => Promise<ReturnTypeFrom<'deleteContactFlow'>>  = async params => {
  // undefined
    return this.client.deleteContactFlow(params as any).promise();
  }

  deleteContactFlowModule: (params: RawParamsFrom<'deleteContactFlowModule'>) => Promise<ReturnTypeFrom<'deleteContactFlowModule'>>  = async params => {
  // undefined
    return this.client.deleteContactFlowModule(params as any).promise();
  }

  deleteHoursOfOperation: (params: RawParamsFrom<'deleteHoursOfOperation'>) => Promise<ReturnTypeFrom<'deleteHoursOfOperation'>>  = async params => {
  // undefined
    return this.client.deleteHoursOfOperation(params as any).promise();
  }

  deleteInstance: (params: RawParamsFrom<'deleteInstance'>) => Promise<ReturnTypeFrom<'deleteInstance'>>  = async params => {
  // undefined
    return this.client.deleteInstance(params as any).promise();
  }

  deleteIntegrationAssociation: (params: RawParamsFrom<'deleteIntegrationAssociation'>) => Promise<ReturnTypeFrom<'deleteIntegrationAssociation'>>  = async params => {
  // undefined
    return this.client.deleteIntegrationAssociation(params as any).promise();
  }

  deleteQuickConnect: (params: RawParamsFrom<'deleteQuickConnect'>) => Promise<ReturnTypeFrom<'deleteQuickConnect'>>  = async params => {
  // undefined
    return this.client.deleteQuickConnect(params as any).promise();
  }

  deleteSecurityProfile: (params: RawParamsFrom<'deleteSecurityProfile'>) => Promise<ReturnTypeFrom<'deleteSecurityProfile'>>  = async params => {
  // undefined
    return this.client.deleteSecurityProfile(params as any).promise();
  }

  deleteTaskTemplate: (params: RawParamsFrom<'deleteTaskTemplate'>) => Promise<ReturnTypeFrom<'deleteTaskTemplate'>>  = async params => {
  // undefined
    return this.client.deleteTaskTemplate(params as any).promise();
  }

  deleteUseCase: (params: RawParamsFrom<'deleteUseCase'>) => Promise<ReturnTypeFrom<'deleteUseCase'>>  = async params => {
  // undefined
    return this.client.deleteUseCase(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  deleteUserHierarchyGroup: (params: RawParamsFrom<'deleteUserHierarchyGroup'>) => Promise<ReturnTypeFrom<'deleteUserHierarchyGroup'>>  = async params => {
  // undefined
    return this.client.deleteUserHierarchyGroup(params as any).promise();
  }

  deleteVocabulary: (params: RawParamsFrom<'deleteVocabulary'>) => Promise<ReturnTypeFrom<'deleteVocabulary'>>  = async params => {
  // undefined
    return this.client.deleteVocabulary(params as any).promise();
  }

  describeAgentStatus: (params: RawParamsFrom<'describeAgentStatus'>) => Promise<ReturnTypeFrom<'describeAgentStatus'>>  = async params => {
  // undefined
    return this.client.describeAgentStatus(params as any).promise();
  }

  describeContact: (params: RawParamsFrom<'describeContact'>) => Promise<ReturnTypeFrom<'describeContact'>>  = async params => {
  // undefined
    return this.client.describeContact(params as any).promise();
  }

  describeContactFlow: (params: RawParamsFrom<'describeContactFlow'>) => Promise<ReturnTypeFrom<'describeContactFlow'>>  = async params => {
  // undefined
    return this.client.describeContactFlow(params as any).promise();
  }

  describeContactFlowModule: (params: RawParamsFrom<'describeContactFlowModule'>) => Promise<ReturnTypeFrom<'describeContactFlowModule'>>  = async params => {
  // undefined
    return this.client.describeContactFlowModule(params as any).promise();
  }

  describeHoursOfOperation: (params: RawParamsFrom<'describeHoursOfOperation'>) => Promise<ReturnTypeFrom<'describeHoursOfOperation'>>  = async params => {
  // undefined
    return this.client.describeHoursOfOperation(params as any).promise();
  }

  describeInstance: (params: RawParamsFrom<'describeInstance'>) => Promise<ReturnTypeFrom<'describeInstance'>>  = async params => {
  // undefined
    return this.client.describeInstance(params as any).promise();
  }

  describeInstanceAttribute: (params: RawParamsFrom<'describeInstanceAttribute'>) => Promise<ReturnTypeFrom<'describeInstanceAttribute'>>  = async params => {
  // undefined
    return this.client.describeInstanceAttribute(params as any).promise();
  }

  describeInstanceStorageConfig: (params: RawParamsFrom<'describeInstanceStorageConfig'>) => Promise<ReturnTypeFrom<'describeInstanceStorageConfig'>>  = async params => {
  // undefined
    return this.client.describeInstanceStorageConfig(params as any).promise();
  }

  describePhoneNumber: (params: RawParamsFrom<'describePhoneNumber'>) => Promise<ReturnTypeFrom<'describePhoneNumber'>>  = async params => {
  // undefined
    return this.client.describePhoneNumber(params as any).promise();
  }

  describeQueue: (params: RawParamsFrom<'describeQueue'>) => Promise<ReturnTypeFrom<'describeQueue'>>  = async params => {
  // undefined
    return this.client.describeQueue(params as any).promise();
  }

  describeQuickConnect: (params: RawParamsFrom<'describeQuickConnect'>) => Promise<ReturnTypeFrom<'describeQuickConnect'>>  = async params => {
  // undefined
    return this.client.describeQuickConnect(params as any).promise();
  }

  describeRoutingProfile: (params: RawParamsFrom<'describeRoutingProfile'>) => Promise<ReturnTypeFrom<'describeRoutingProfile'>>  = async params => {
  // undefined
    return this.client.describeRoutingProfile(params as any).promise();
  }

  describeSecurityProfile: (params: RawParamsFrom<'describeSecurityProfile'>) => Promise<ReturnTypeFrom<'describeSecurityProfile'>>  = async params => {
  // undefined
    return this.client.describeSecurityProfile(params as any).promise();
  }

  describeUser: (params: RawParamsFrom<'describeUser'>) => Promise<ReturnTypeFrom<'describeUser'>>  = async params => {
  // undefined
    return this.client.describeUser(params as any).promise();
  }

  describeUserHierarchyGroup: (params: RawParamsFrom<'describeUserHierarchyGroup'>) => Promise<ReturnTypeFrom<'describeUserHierarchyGroup'>>  = async params => {
  // undefined
    return this.client.describeUserHierarchyGroup(params as any).promise();
  }

  describeUserHierarchyStructure: (params: RawParamsFrom<'describeUserHierarchyStructure'>) => Promise<ReturnTypeFrom<'describeUserHierarchyStructure'>>  = async params => {
  // undefined
    return this.client.describeUserHierarchyStructure(params as any).promise();
  }

  describeVocabulary: (params: RawParamsFrom<'describeVocabulary'>) => Promise<ReturnTypeFrom<'describeVocabulary'>>  = async params => {
  // undefined
    return this.client.describeVocabulary(params as any).promise();
  }

  disassociateApprovedOrigin: (params: RawParamsFrom<'disassociateApprovedOrigin'>) => Promise<ReturnTypeFrom<'disassociateApprovedOrigin'>>  = async params => {
  // undefined
    return this.client.disassociateApprovedOrigin(params as any).promise();
  }

  disassociateBot: (params: RawParamsFrom<'disassociateBot'>) => Promise<ReturnTypeFrom<'disassociateBot'>>  = async params => {
  // undefined
    return this.client.disassociateBot(params as any).promise();
  }

  disassociateInstanceStorageConfig: (params: RawParamsFrom<'disassociateInstanceStorageConfig'>) => Promise<ReturnTypeFrom<'disassociateInstanceStorageConfig'>>  = async params => {
  // undefined
    return this.client.disassociateInstanceStorageConfig(params as any).promise();
  }

  disassociateLambdaFunction: (params: RawParamsFrom<'disassociateLambdaFunction'>) => Promise<ReturnTypeFrom<'disassociateLambdaFunction'>>  = async params => {
  // undefined
    return this.client.disassociateLambdaFunction(params as any).promise();
  }

  disassociateLexBot: (params: RawParamsFrom<'disassociateLexBot'>) => Promise<ReturnTypeFrom<'disassociateLexBot'>>  = async params => {
  // undefined
    return this.client.disassociateLexBot(params as any).promise();
  }

  disassociatePhoneNumberContactFlow: (params: RawParamsFrom<'disassociatePhoneNumberContactFlow'>) => Promise<ReturnTypeFrom<'disassociatePhoneNumberContactFlow'>>  = async params => {
  // undefined
    return this.client.disassociatePhoneNumberContactFlow(params as any).promise();
  }

  disassociateQueueQuickConnects: (params: RawParamsFrom<'disassociateQueueQuickConnects'>) => Promise<ReturnTypeFrom<'disassociateQueueQuickConnects'>>  = async params => {
  // undefined
    return this.client.disassociateQueueQuickConnects(params as any).promise();
  }

  disassociateRoutingProfileQueues: (params: RawParamsFrom<'disassociateRoutingProfileQueues'>) => Promise<ReturnTypeFrom<'disassociateRoutingProfileQueues'>>  = async params => {
  // undefined
    return this.client.disassociateRoutingProfileQueues(params as any).promise();
  }

  disassociateSecurityKey: (params: RawParamsFrom<'disassociateSecurityKey'>) => Promise<ReturnTypeFrom<'disassociateSecurityKey'>>  = async params => {
  // undefined
    return this.client.disassociateSecurityKey(params as any).promise();
  }

  getContactAttributes: (params: RawParamsFrom<'getContactAttributes'>) => Promise<ReturnTypeFrom<'getContactAttributes'>>  = async params => {
  // undefined
    return this.client.getContactAttributes(params as any).promise();
  }

  getCurrentMetricData: (params: RawParamsFrom<'getCurrentMetricData'>) => Promise<ReturnTypeFrom<'getCurrentMetricData'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCurrentMetricData(params as any).promise();
  }

  getCurrentUserData: (params: RawParamsFrom<'getCurrentUserData'>) => Promise<ReturnTypeFrom<'getCurrentUserData'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCurrentUserData(params as any).promise();
  }

  getFederationToken: (params: RawParamsFrom<'getFederationToken'>) => Promise<ReturnTypeFrom<'getFederationToken'>>  = async params => {
  // undefined
    return this.client.getFederationToken(params as any).promise();
  }

  getMetricData: (params: RawParamsFrom<'getMetricData'>) => Promise<ReturnTypeFrom<'getMetricData'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getMetricData(params as any).promise();
  }

  getTaskTemplate: (params: RawParamsFrom<'getTaskTemplate'>) => Promise<ReturnTypeFrom<'getTaskTemplate'>>  = async params => {
  // undefined
    return this.client.getTaskTemplate(params as any).promise();
  }

  async listAgentStatuses(params: { [K in keyof ParamsFrom<'listAgentStatuses', { next?: string, limit?: number }>]: ParamsFrom<'listAgentStatuses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAgentStatuses'>]-?: ReturnTypeFrom<'listAgentStatuses'>[K]}['AgentStatusSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AgentStatusSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAgentStatuses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.AgentStatusSummaryList ?? []) ? (result.AgentStatusSummaryList ?? []) : [result.AgentStatusSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listApprovedOrigins(params: { [K in keyof ParamsFrom<'listApprovedOrigins', { next?: string, limit?: number }>]: ParamsFrom<'listApprovedOrigins', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApprovedOrigins'>]-?: ReturnTypeFrom<'listApprovedOrigins'>[K]}['Origins'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Origins"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApprovedOrigins({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Origins ?? []) ? (result.Origins ?? []) : [result.Origins]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listBots(params: { [K in keyof ParamsFrom<'listBots', { next?: string, limit?: number }>]: ParamsFrom<'listBots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBots'>]-?: ReturnTypeFrom<'listBots'>[K]}['LexBots'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LexBots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.LexBots ?? []) ? (result.LexBots ?? []) : [result.LexBots]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listContactFlowModules(params: { [K in keyof ParamsFrom<'listContactFlowModules', { next?: string, limit?: number }>]: ParamsFrom<'listContactFlowModules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContactFlowModules'>]-?: ReturnTypeFrom<'listContactFlowModules'>[K]}['ContactFlowModulesSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ContactFlowModulesSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContactFlowModules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ContactFlowModulesSummaryList ?? []) ? (result.ContactFlowModulesSummaryList ?? []) : [result.ContactFlowModulesSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listContactFlows(params: { [K in keyof ParamsFrom<'listContactFlows', { next?: string, limit?: number }>]: ParamsFrom<'listContactFlows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContactFlows'>]-?: ReturnTypeFrom<'listContactFlows'>[K]}['ContactFlowSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ContactFlowSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContactFlows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ContactFlowSummaryList ?? []) ? (result.ContactFlowSummaryList ?? []) : [result.ContactFlowSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listContactReferences(params: { [K in keyof ParamsFrom<'listContactReferences', { next?: string }>]: ParamsFrom<'listContactReferences', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContactReferences'>]-?: ReturnTypeFrom<'listContactReferences'>[K]}['ReferenceSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ReferenceSummaryList"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listContactReferences({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ReferenceSummaryList ?? []) ? (result.ReferenceSummaryList ?? []) : [result.ReferenceSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDefaultVocabularies(params: { [K in keyof ParamsFrom<'listDefaultVocabularies', { next?: string, limit?: number }>]: ParamsFrom<'listDefaultVocabularies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDefaultVocabularies'>]-?: ReturnTypeFrom<'listDefaultVocabularies'>[K]}['DefaultVocabularyList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DefaultVocabularyList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDefaultVocabularies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.DefaultVocabularyList ?? []) ? (result.DefaultVocabularyList ?? []) : [result.DefaultVocabularyList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listHoursOfOperations(params: { [K in keyof ParamsFrom<'listHoursOfOperations', { next?: string, limit?: number }>]: ParamsFrom<'listHoursOfOperations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listHoursOfOperations'>]-?: ReturnTypeFrom<'listHoursOfOperations'>[K]}['HoursOfOperationSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HoursOfOperationSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHoursOfOperations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.HoursOfOperationSummaryList ?? []) ? (result.HoursOfOperationSummaryList ?? []) : [result.HoursOfOperationSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listInstanceAttributes(params: { [K in keyof ParamsFrom<'listInstanceAttributes', { next?: string, limit?: number }>]: ParamsFrom<'listInstanceAttributes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstanceAttributes'>]-?: ReturnTypeFrom<'listInstanceAttributes'>[K]}['Attributes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Attributes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstanceAttributes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Attributes ?? []) ? (result.Attributes ?? []) : [result.Attributes]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listInstanceStorageConfigs(params: { [K in keyof ParamsFrom<'listInstanceStorageConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listInstanceStorageConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstanceStorageConfigs'>]-?: ReturnTypeFrom<'listInstanceStorageConfigs'>[K]}['StorageConfigs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StorageConfigs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstanceStorageConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.StorageConfigs ?? []) ? (result.StorageConfigs ?? []) : [result.StorageConfigs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listInstances(params: { [K in keyof ParamsFrom<'listInstances', { next?: string, limit?: number }>]: ParamsFrom<'listInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['InstanceSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.InstanceSummaryList ?? []) ? (result.InstanceSummaryList ?? []) : [result.InstanceSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listIntegrationAssociations(params: { [K in keyof ParamsFrom<'listIntegrationAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listIntegrationAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIntegrationAssociations'>]-?: ReturnTypeFrom<'listIntegrationAssociations'>[K]}['IntegrationAssociationSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IntegrationAssociationSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIntegrationAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.IntegrationAssociationSummaryList ?? []) ? (result.IntegrationAssociationSummaryList ?? []) : [result.IntegrationAssociationSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listLambdaFunctions(params: { [K in keyof ParamsFrom<'listLambdaFunctions', { next?: string, limit?: number }>]: ParamsFrom<'listLambdaFunctions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLambdaFunctions'>]-?: ReturnTypeFrom<'listLambdaFunctions'>[K]}['LambdaFunctions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LambdaFunctions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLambdaFunctions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.LambdaFunctions ?? []) ? (result.LambdaFunctions ?? []) : [result.LambdaFunctions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listLexBots(params: { [K in keyof ParamsFrom<'listLexBots', { next?: string, limit?: number }>]: ParamsFrom<'listLexBots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLexBots'>]-?: ReturnTypeFrom<'listLexBots'>[K]}['LexBots'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LexBots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLexBots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.LexBots ?? []) ? (result.LexBots ?? []) : [result.LexBots]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPhoneNumbers(params: { [K in keyof ParamsFrom<'listPhoneNumbers', { next?: string, limit?: number }>]: ParamsFrom<'listPhoneNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPhoneNumbers'>]-?: ReturnTypeFrom<'listPhoneNumbers'>[K]}['PhoneNumberSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PhoneNumberSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPhoneNumbers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.PhoneNumberSummaryList ?? []) ? (result.PhoneNumberSummaryList ?? []) : [result.PhoneNumberSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPhoneNumbersV2(params: { [K in keyof ParamsFrom<'listPhoneNumbersV2', { next?: string, limit?: number }>]: ParamsFrom<'listPhoneNumbersV2', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPhoneNumbersV2'>]-?: ReturnTypeFrom<'listPhoneNumbersV2'>[K]}['ListPhoneNumbersSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ListPhoneNumbersSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPhoneNumbersV2({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ListPhoneNumbersSummaryList ?? []) ? (result.ListPhoneNumbersSummaryList ?? []) : [result.ListPhoneNumbersSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPrompts(params: { [K in keyof ParamsFrom<'listPrompts', { next?: string, limit?: number }>]: ParamsFrom<'listPrompts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPrompts'>]-?: ReturnTypeFrom<'listPrompts'>[K]}['PromptSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PromptSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPrompts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.PromptSummaryList ?? []) ? (result.PromptSummaryList ?? []) : [result.PromptSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listQueueQuickConnects(params: { [K in keyof ParamsFrom<'listQueueQuickConnects', { next?: string, limit?: number }>]: ParamsFrom<'listQueueQuickConnects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listQueueQuickConnects'>]-?: ReturnTypeFrom<'listQueueQuickConnects'>[K]}['QuickConnectSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QuickConnectSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueueQuickConnects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.QuickConnectSummaryList ?? []) ? (result.QuickConnectSummaryList ?? []) : [result.QuickConnectSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listQueues(params: { [K in keyof ParamsFrom<'listQueues', { next?: string, limit?: number }>]: ParamsFrom<'listQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listQueues'>]-?: ReturnTypeFrom<'listQueues'>[K]}['QueueSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QueueSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.QueueSummaryList ?? []) ? (result.QueueSummaryList ?? []) : [result.QueueSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listQuickConnects(params: { [K in keyof ParamsFrom<'listQuickConnects', { next?: string, limit?: number }>]: ParamsFrom<'listQuickConnects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listQuickConnects'>]-?: ReturnTypeFrom<'listQuickConnects'>[K]}['QuickConnectSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"QuickConnectSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQuickConnects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.QuickConnectSummaryList ?? []) ? (result.QuickConnectSummaryList ?? []) : [result.QuickConnectSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRoutingProfileQueues(params: { [K in keyof ParamsFrom<'listRoutingProfileQueues', { next?: string, limit?: number }>]: ParamsFrom<'listRoutingProfileQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRoutingProfileQueues'>]-?: ReturnTypeFrom<'listRoutingProfileQueues'>[K]}['RoutingProfileQueueConfigSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RoutingProfileQueueConfigSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRoutingProfileQueues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.RoutingProfileQueueConfigSummaryList ?? []) ? (result.RoutingProfileQueueConfigSummaryList ?? []) : [result.RoutingProfileQueueConfigSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRoutingProfiles(params: { [K in keyof ParamsFrom<'listRoutingProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listRoutingProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRoutingProfiles'>]-?: ReturnTypeFrom<'listRoutingProfiles'>[K]}['RoutingProfileSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RoutingProfileSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRoutingProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.RoutingProfileSummaryList ?? []) ? (result.RoutingProfileSummaryList ?? []) : [result.RoutingProfileSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSecurityKeys(params: { [K in keyof ParamsFrom<'listSecurityKeys', { next?: string, limit?: number }>]: ParamsFrom<'listSecurityKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSecurityKeys'>]-?: ReturnTypeFrom<'listSecurityKeys'>[K]}['SecurityKeys'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityKeys"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSecurityKeys({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.SecurityKeys ?? []) ? (result.SecurityKeys ?? []) : [result.SecurityKeys]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSecurityProfilePermissions(params: { [K in keyof ParamsFrom<'listSecurityProfilePermissions', { next?: string, limit?: number }>]: ParamsFrom<'listSecurityProfilePermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSecurityProfilePermissions'>]-?: ReturnTypeFrom<'listSecurityProfilePermissions'>[K]}['Permissions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Permissions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSecurityProfilePermissions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Permissions ?? []) ? (result.Permissions ?? []) : [result.Permissions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSecurityProfiles(params: { [K in keyof ParamsFrom<'listSecurityProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listSecurityProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSecurityProfiles'>]-?: ReturnTypeFrom<'listSecurityProfiles'>[K]}['SecurityProfileSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityProfileSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSecurityProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.SecurityProfileSummaryList ?? []) ? (result.SecurityProfileSummaryList ?? []) : [result.SecurityProfileSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listTaskTemplates(params: { [K in keyof ParamsFrom<'listTaskTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listTaskTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTaskTemplates'>]-?: ReturnTypeFrom<'listTaskTemplates'>[K]}['TaskTemplates'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TaskTemplates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTaskTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.TaskTemplates ?? []) ? (result.TaskTemplates ?? []) : [result.TaskTemplates]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listUseCases(params: { [K in keyof ParamsFrom<'listUseCases', { next?: string, limit?: number }>]: ParamsFrom<'listUseCases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUseCases'>]-?: ReturnTypeFrom<'listUseCases'>[K]}['UseCaseSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UseCaseSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUseCases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.UseCaseSummaryList ?? []) ? (result.UseCaseSummaryList ?? []) : [result.UseCaseSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listUserHierarchyGroups(params: { [K in keyof ParamsFrom<'listUserHierarchyGroups', { next?: string, limit?: number }>]: ParamsFrom<'listUserHierarchyGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUserHierarchyGroups'>]-?: ReturnTypeFrom<'listUserHierarchyGroups'>[K]}['UserHierarchyGroupSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserHierarchyGroupSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserHierarchyGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.UserHierarchyGroupSummaryList ?? []) ? (result.UserHierarchyGroupSummaryList ?? []) : [result.UserHierarchyGroupSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listUsers(params: { [K in keyof ParamsFrom<'listUsers', { next?: string, limit?: number }>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['UserSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.UserSummaryList ?? []) ? (result.UserSummaryList ?? []) : [result.UserSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putUserStatus: (params: RawParamsFrom<'putUserStatus'>) => Promise<ReturnTypeFrom<'putUserStatus'>>  = async params => {
  // undefined
    return this.client.putUserStatus(params as any).promise();
  }

  releasePhoneNumber: (params: RawParamsFrom<'releasePhoneNumber'>) => Promise<ReturnTypeFrom<'releasePhoneNumber'>>  = async params => {
  // undefined
    return this.client.releasePhoneNumber(params as any).promise();
  }

  resumeContactRecording: (params: RawParamsFrom<'resumeContactRecording'>) => Promise<ReturnTypeFrom<'resumeContactRecording'>>  = async params => {
  // undefined
    return this.client.resumeContactRecording(params as any).promise();
  }

  async searchAvailablePhoneNumbers(params: { [K in keyof ParamsFrom<'searchAvailablePhoneNumbers', { next?: string, limit?: number }>]: ParamsFrom<'searchAvailablePhoneNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchAvailablePhoneNumbers'>]-?: ReturnTypeFrom<'searchAvailablePhoneNumbers'>[K]}['AvailableNumbersList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AvailableNumbersList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchAvailablePhoneNumbers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.AvailableNumbersList ?? []) ? (result.AvailableNumbersList ?? []) : [result.AvailableNumbersList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async searchQueues(params: { [K in keyof ParamsFrom<'searchQueues', { next?: string, limit?: number }>]: ParamsFrom<'searchQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchQueues'>]-?: ReturnTypeFrom<'searchQueues'>[K]}['Queues'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Queues"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchQueues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Queues ?? []) ? (result.Queues ?? []) : [result.Queues]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async searchRoutingProfiles(params: { [K in keyof ParamsFrom<'searchRoutingProfiles', { next?: string, limit?: number }>]: ParamsFrom<'searchRoutingProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchRoutingProfiles'>]-?: ReturnTypeFrom<'searchRoutingProfiles'>[K]}['RoutingProfiles'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RoutingProfiles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchRoutingProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.RoutingProfiles ?? []) ? (result.RoutingProfiles ?? []) : [result.RoutingProfiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async searchSecurityProfiles(params: { [K in keyof ParamsFrom<'searchSecurityProfiles', { next?: string, limit?: number }>]: ParamsFrom<'searchSecurityProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchSecurityProfiles'>]-?: ReturnTypeFrom<'searchSecurityProfiles'>[K]}['SecurityProfiles'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SecurityProfiles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchSecurityProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.SecurityProfiles ?? []) ? (result.SecurityProfiles ?? []) : [result.SecurityProfiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async searchUsers(params: { [K in keyof ParamsFrom<'searchUsers', { next?: string, limit?: number }>]: ParamsFrom<'searchUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchUsers'>]-?: ReturnTypeFrom<'searchUsers'>[K]}['Users'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async searchVocabularies(params: { [K in keyof ParamsFrom<'searchVocabularies', { next?: string, limit?: number }>]: ParamsFrom<'searchVocabularies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchVocabularies'>]-?: ReturnTypeFrom<'searchVocabularies'>[K]}['VocabularySummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VocabularySummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchVocabularies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.VocabularySummaryList ?? []) ? (result.VocabularySummaryList ?? []) : [result.VocabularySummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  startChatContact: (params: RawParamsFrom<'startChatContact'>) => Promise<ReturnTypeFrom<'startChatContact'>>  = async params => {
  // undefined
    return this.client.startChatContact(params as any).promise();
  }

  startContactRecording: (params: RawParamsFrom<'startContactRecording'>) => Promise<ReturnTypeFrom<'startContactRecording'>>  = async params => {
  // undefined
    return this.client.startContactRecording(params as any).promise();
  }

  startContactStreaming: (params: RawParamsFrom<'startContactStreaming'>) => Promise<ReturnTypeFrom<'startContactStreaming'>>  = async params => {
  // undefined
    return this.client.startContactStreaming(params as any).promise();
  }

  startOutboundVoiceContact: (params: RawParamsFrom<'startOutboundVoiceContact'>) => Promise<ReturnTypeFrom<'startOutboundVoiceContact'>>  = async params => {
  // undefined
    return this.client.startOutboundVoiceContact(params as any).promise();
  }

  startTaskContact: (params: RawParamsFrom<'startTaskContact'>) => Promise<ReturnTypeFrom<'startTaskContact'>>  = async params => {
  // undefined
    return this.client.startTaskContact(params as any).promise();
  }

  stopContact: (params: RawParamsFrom<'stopContact'>) => Promise<ReturnTypeFrom<'stopContact'>>  = async params => {
  // undefined
    return this.client.stopContact(params as any).promise();
  }

  stopContactRecording: (params: RawParamsFrom<'stopContactRecording'>) => Promise<ReturnTypeFrom<'stopContactRecording'>>  = async params => {
  // undefined
    return this.client.stopContactRecording(params as any).promise();
  }

  stopContactStreaming: (params: RawParamsFrom<'stopContactStreaming'>) => Promise<ReturnTypeFrom<'stopContactStreaming'>>  = async params => {
  // undefined
    return this.client.stopContactStreaming(params as any).promise();
  }

  suspendContactRecording: (params: RawParamsFrom<'suspendContactRecording'>) => Promise<ReturnTypeFrom<'suspendContactRecording'>>  = async params => {
  // undefined
    return this.client.suspendContactRecording(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  transferContact: (params: RawParamsFrom<'transferContact'>) => Promise<ReturnTypeFrom<'transferContact'>>  = async params => {
  // undefined
    return this.client.transferContact(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAgentStatus: (params: RawParamsFrom<'updateAgentStatus'>) => Promise<ReturnTypeFrom<'updateAgentStatus'>>  = async params => {
  // undefined
    return this.client.updateAgentStatus(params as any).promise();
  }

  updateContact: (params: RawParamsFrom<'updateContact'>) => Promise<ReturnTypeFrom<'updateContact'>>  = async params => {
  // undefined
    return this.client.updateContact(params as any).promise();
  }

  updateContactAttributes: (params: RawParamsFrom<'updateContactAttributes'>) => Promise<ReturnTypeFrom<'updateContactAttributes'>>  = async params => {
  // undefined
    return this.client.updateContactAttributes(params as any).promise();
  }

  updateContactFlowContent: (params: RawParamsFrom<'updateContactFlowContent'>) => Promise<ReturnTypeFrom<'updateContactFlowContent'>>  = async params => {
  // undefined
    return this.client.updateContactFlowContent(params as any).promise();
  }

  updateContactFlowMetadata: (params: RawParamsFrom<'updateContactFlowMetadata'>) => Promise<ReturnTypeFrom<'updateContactFlowMetadata'>>  = async params => {
  // undefined
    return this.client.updateContactFlowMetadata(params as any).promise();
  }

  updateContactFlowModuleContent: (params: RawParamsFrom<'updateContactFlowModuleContent'>) => Promise<ReturnTypeFrom<'updateContactFlowModuleContent'>>  = async params => {
  // undefined
    return this.client.updateContactFlowModuleContent(params as any).promise();
  }

  updateContactFlowModuleMetadata: (params: RawParamsFrom<'updateContactFlowModuleMetadata'>) => Promise<ReturnTypeFrom<'updateContactFlowModuleMetadata'>>  = async params => {
  // undefined
    return this.client.updateContactFlowModuleMetadata(params as any).promise();
  }

  updateContactFlowName: (params: RawParamsFrom<'updateContactFlowName'>) => Promise<ReturnTypeFrom<'updateContactFlowName'>>  = async params => {
  // undefined
    return this.client.updateContactFlowName(params as any).promise();
  }

  updateContactSchedule: (params: RawParamsFrom<'updateContactSchedule'>) => Promise<ReturnTypeFrom<'updateContactSchedule'>>  = async params => {
  // undefined
    return this.client.updateContactSchedule(params as any).promise();
  }

  updateHoursOfOperation: (params: RawParamsFrom<'updateHoursOfOperation'>) => Promise<ReturnTypeFrom<'updateHoursOfOperation'>>  = async params => {
  // undefined
    return this.client.updateHoursOfOperation(params as any).promise();
  }

  updateInstanceAttribute: (params: RawParamsFrom<'updateInstanceAttribute'>) => Promise<ReturnTypeFrom<'updateInstanceAttribute'>>  = async params => {
  // undefined
    return this.client.updateInstanceAttribute(params as any).promise();
  }

  updateInstanceStorageConfig: (params: RawParamsFrom<'updateInstanceStorageConfig'>) => Promise<ReturnTypeFrom<'updateInstanceStorageConfig'>>  = async params => {
  // undefined
    return this.client.updateInstanceStorageConfig(params as any).promise();
  }

  updatePhoneNumber: (params: RawParamsFrom<'updatePhoneNumber'>) => Promise<ReturnTypeFrom<'updatePhoneNumber'>>  = async params => {
  // undefined
    return this.client.updatePhoneNumber(params as any).promise();
  }

  updateQueueHoursOfOperation: (params: RawParamsFrom<'updateQueueHoursOfOperation'>) => Promise<ReturnTypeFrom<'updateQueueHoursOfOperation'>>  = async params => {
  // undefined
    return this.client.updateQueueHoursOfOperation(params as any).promise();
  }

  updateQueueMaxContacts: (params: RawParamsFrom<'updateQueueMaxContacts'>) => Promise<ReturnTypeFrom<'updateQueueMaxContacts'>>  = async params => {
  // undefined
    return this.client.updateQueueMaxContacts(params as any).promise();
  }

  updateQueueName: (params: RawParamsFrom<'updateQueueName'>) => Promise<ReturnTypeFrom<'updateQueueName'>>  = async params => {
  // undefined
    return this.client.updateQueueName(params as any).promise();
  }

  updateQueueOutboundCallerConfig: (params: RawParamsFrom<'updateQueueOutboundCallerConfig'>) => Promise<ReturnTypeFrom<'updateQueueOutboundCallerConfig'>>  = async params => {
  // undefined
    return this.client.updateQueueOutboundCallerConfig(params as any).promise();
  }

  updateQueueStatus: (params: RawParamsFrom<'updateQueueStatus'>) => Promise<ReturnTypeFrom<'updateQueueStatus'>>  = async params => {
  // undefined
    return this.client.updateQueueStatus(params as any).promise();
  }

  updateQuickConnectConfig: (params: RawParamsFrom<'updateQuickConnectConfig'>) => Promise<ReturnTypeFrom<'updateQuickConnectConfig'>>  = async params => {
  // undefined
    return this.client.updateQuickConnectConfig(params as any).promise();
  }

  updateQuickConnectName: (params: RawParamsFrom<'updateQuickConnectName'>) => Promise<ReturnTypeFrom<'updateQuickConnectName'>>  = async params => {
  // undefined
    return this.client.updateQuickConnectName(params as any).promise();
  }

  updateRoutingProfileConcurrency: (params: RawParamsFrom<'updateRoutingProfileConcurrency'>) => Promise<ReturnTypeFrom<'updateRoutingProfileConcurrency'>>  = async params => {
  // undefined
    return this.client.updateRoutingProfileConcurrency(params as any).promise();
  }

  updateRoutingProfileDefaultOutboundQueue: (params: RawParamsFrom<'updateRoutingProfileDefaultOutboundQueue'>) => Promise<ReturnTypeFrom<'updateRoutingProfileDefaultOutboundQueue'>>  = async params => {
  // undefined
    return this.client.updateRoutingProfileDefaultOutboundQueue(params as any).promise();
  }

  updateRoutingProfileName: (params: RawParamsFrom<'updateRoutingProfileName'>) => Promise<ReturnTypeFrom<'updateRoutingProfileName'>>  = async params => {
  // undefined
    return this.client.updateRoutingProfileName(params as any).promise();
  }

  updateRoutingProfileQueues: (params: RawParamsFrom<'updateRoutingProfileQueues'>) => Promise<ReturnTypeFrom<'updateRoutingProfileQueues'>>  = async params => {
  // undefined
    return this.client.updateRoutingProfileQueues(params as any).promise();
  }

  updateSecurityProfile: (params: RawParamsFrom<'updateSecurityProfile'>) => Promise<ReturnTypeFrom<'updateSecurityProfile'>>  = async params => {
  // undefined
    return this.client.updateSecurityProfile(params as any).promise();
  }

  updateTaskTemplate: (params: RawParamsFrom<'updateTaskTemplate'>) => Promise<ReturnTypeFrom<'updateTaskTemplate'>>  = async params => {
  // undefined
    return this.client.updateTaskTemplate(params as any).promise();
  }

  updateUserHierarchy: (params: RawParamsFrom<'updateUserHierarchy'>) => Promise<ReturnTypeFrom<'updateUserHierarchy'>>  = async params => {
  // undefined
    return this.client.updateUserHierarchy(params as any).promise();
  }

  updateUserHierarchyGroupName: (params: RawParamsFrom<'updateUserHierarchyGroupName'>) => Promise<ReturnTypeFrom<'updateUserHierarchyGroupName'>>  = async params => {
  // undefined
    return this.client.updateUserHierarchyGroupName(params as any).promise();
  }

  updateUserHierarchyStructure: (params: RawParamsFrom<'updateUserHierarchyStructure'>) => Promise<ReturnTypeFrom<'updateUserHierarchyStructure'>>  = async params => {
  // undefined
    return this.client.updateUserHierarchyStructure(params as any).promise();
  }

  updateUserIdentityInfo: (params: RawParamsFrom<'updateUserIdentityInfo'>) => Promise<ReturnTypeFrom<'updateUserIdentityInfo'>>  = async params => {
  // undefined
    return this.client.updateUserIdentityInfo(params as any).promise();
  }

  updateUserPhoneConfig: (params: RawParamsFrom<'updateUserPhoneConfig'>) => Promise<ReturnTypeFrom<'updateUserPhoneConfig'>>  = async params => {
  // undefined
    return this.client.updateUserPhoneConfig(params as any).promise();
  }

  updateUserRoutingProfile: (params: RawParamsFrom<'updateUserRoutingProfile'>) => Promise<ReturnTypeFrom<'updateUserRoutingProfile'>>  = async params => {
  // undefined
    return this.client.updateUserRoutingProfile(params as any).promise();
  }

  updateUserSecurityProfiles: (params: RawParamsFrom<'updateUserSecurityProfiles'>) => Promise<ReturnTypeFrom<'updateUserSecurityProfiles'>>  = async params => {
  // undefined
    return this.client.updateUserSecurityProfiles(params as any).promise();
  }
  
  static fromClient(client: AWSConnect): Connect {
    return new Connect(client) as any;
  }
  
  static client(options?: AWSConnect.Types.ClientConfiguration): Connect {
    return new Connect(new AWSConnect(options)) as any;
  }
}  
