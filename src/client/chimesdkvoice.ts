import { Request, ChimeSDKVoice as AWSChimeSDKVoice } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSChimeSDKVoice> = AWSChimeSDKVoice[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSChimeSDKVoice> = AWSChimeSDKVoice[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSChimeSDKVoice[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSChimeSDKVoice, Extras> = AWSChimeSDKVoice[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSChimeSDKVoice> = AWSChimeSDKVoice[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ChimeSDKVoice {
  private constructor(private readonly client: AWSChimeSDKVoice) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'voice-chime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listPhoneNumberOrders","listPhoneNumbers","listSipMediaApplications","listSipRules","listVoiceConnectorGroups","listVoiceConnectors","searchAvailablePhoneNumbers"] as const;
  
  associatePhoneNumbersWithVoiceConnector: (params: RawParamsFrom<'associatePhoneNumbersWithVoiceConnector'>) => Promise<ReturnTypeFrom<'associatePhoneNumbersWithVoiceConnector'>>  = async params => {
  // undefined
    return this.client.associatePhoneNumbersWithVoiceConnector(params as any).promise();
  }

  associatePhoneNumbersWithVoiceConnectorGroup: (params: RawParamsFrom<'associatePhoneNumbersWithVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'associatePhoneNumbersWithVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.associatePhoneNumbersWithVoiceConnectorGroup(params as any).promise();
  }

  batchDeletePhoneNumber: (params: RawParamsFrom<'batchDeletePhoneNumber'>) => Promise<ReturnTypeFrom<'batchDeletePhoneNumber'>>  = async params => {
  // undefined
    return this.client.batchDeletePhoneNumber(params as any).promise();
  }

  batchUpdatePhoneNumber: (params: RawParamsFrom<'batchUpdatePhoneNumber'>) => Promise<ReturnTypeFrom<'batchUpdatePhoneNumber'>>  = async params => {
  // undefined
    return this.client.batchUpdatePhoneNumber(params as any).promise();
  }

  createPhoneNumberOrder: (params: RawParamsFrom<'createPhoneNumberOrder'>) => Promise<ReturnTypeFrom<'createPhoneNumberOrder'>>  = async params => {
  // undefined
    return this.client.createPhoneNumberOrder(params as any).promise();
  }

  createProxySession: (params: RawParamsFrom<'createProxySession'>) => Promise<ReturnTypeFrom<'createProxySession'>>  = async params => {
  // undefined
    return this.client.createProxySession(params as any).promise();
  }

  createSipMediaApplication: (params: RawParamsFrom<'createSipMediaApplication'>) => Promise<ReturnTypeFrom<'createSipMediaApplication'>>  = async params => {
  // undefined
    return this.client.createSipMediaApplication(params as any).promise();
  }

  createSipMediaApplicationCall: (params: RawParamsFrom<'createSipMediaApplicationCall'>) => Promise<ReturnTypeFrom<'createSipMediaApplicationCall'>>  = async params => {
  // undefined
    return this.client.createSipMediaApplicationCall(params as any).promise();
  }

  createSipRule: (params: RawParamsFrom<'createSipRule'>) => Promise<ReturnTypeFrom<'createSipRule'>>  = async params => {
  // undefined
    return this.client.createSipRule(params as any).promise();
  }

  createVoiceConnector: (params: RawParamsFrom<'createVoiceConnector'>) => Promise<ReturnTypeFrom<'createVoiceConnector'>>  = async params => {
  // undefined
    return this.client.createVoiceConnector(params as any).promise();
  }

  createVoiceConnectorGroup: (params: RawParamsFrom<'createVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'createVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.createVoiceConnectorGroup(params as any).promise();
  }

  deletePhoneNumber: (params: RawParamsFrom<'deletePhoneNumber'>) => Promise<ReturnTypeFrom<'deletePhoneNumber'>>  = async params => {
  // undefined
    return this.client.deletePhoneNumber(params as any).promise();
  }

  deleteProxySession: (params: RawParamsFrom<'deleteProxySession'>) => Promise<ReturnTypeFrom<'deleteProxySession'>>  = async params => {
  // undefined
    return this.client.deleteProxySession(params as any).promise();
  }

  deleteSipMediaApplication: (params: RawParamsFrom<'deleteSipMediaApplication'>) => Promise<ReturnTypeFrom<'deleteSipMediaApplication'>>  = async params => {
  // undefined
    return this.client.deleteSipMediaApplication(params as any).promise();
  }

  deleteSipRule: (params: RawParamsFrom<'deleteSipRule'>) => Promise<ReturnTypeFrom<'deleteSipRule'>>  = async params => {
  // undefined
    return this.client.deleteSipRule(params as any).promise();
  }

  deleteVoiceConnector: (params: RawParamsFrom<'deleteVoiceConnector'>) => Promise<ReturnTypeFrom<'deleteVoiceConnector'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnector(params as any).promise();
  }

  deleteVoiceConnectorEmergencyCallingConfiguration: (params: RawParamsFrom<'deleteVoiceConnectorEmergencyCallingConfiguration'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorEmergencyCallingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorEmergencyCallingConfiguration(params as any).promise();
  }

  deleteVoiceConnectorGroup: (params: RawParamsFrom<'deleteVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorGroup(params as any).promise();
  }

  deleteVoiceConnectorOrigination: (params: RawParamsFrom<'deleteVoiceConnectorOrigination'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorOrigination'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorOrigination(params as any).promise();
  }

  deleteVoiceConnectorProxy: (params: RawParamsFrom<'deleteVoiceConnectorProxy'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorProxy'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorProxy(params as any).promise();
  }

  deleteVoiceConnectorStreamingConfiguration: (params: RawParamsFrom<'deleteVoiceConnectorStreamingConfiguration'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorStreamingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorStreamingConfiguration(params as any).promise();
  }

  deleteVoiceConnectorTermination: (params: RawParamsFrom<'deleteVoiceConnectorTermination'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorTermination'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorTermination(params as any).promise();
  }

  deleteVoiceConnectorTerminationCredentials: (params: RawParamsFrom<'deleteVoiceConnectorTerminationCredentials'>) => Promise<ReturnTypeFrom<'deleteVoiceConnectorTerminationCredentials'>>  = async params => {
  // undefined
    return this.client.deleteVoiceConnectorTerminationCredentials(params as any).promise();
  }

  disassociatePhoneNumbersFromVoiceConnector: (params: RawParamsFrom<'disassociatePhoneNumbersFromVoiceConnector'>) => Promise<ReturnTypeFrom<'disassociatePhoneNumbersFromVoiceConnector'>>  = async params => {
  // undefined
    return this.client.disassociatePhoneNumbersFromVoiceConnector(params as any).promise();
  }

  disassociatePhoneNumbersFromVoiceConnectorGroup: (params: RawParamsFrom<'disassociatePhoneNumbersFromVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'disassociatePhoneNumbersFromVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.disassociatePhoneNumbersFromVoiceConnectorGroup(params as any).promise();
  }

  getGlobalSettings: (params: RawParamsFrom<'getGlobalSettings'>) => Promise<ReturnTypeFrom<'getGlobalSettings'>>  = async params => {
  // undefined
    return this.client.getGlobalSettings(params as any).promise();
  }

  getPhoneNumber: (params: RawParamsFrom<'getPhoneNumber'>) => Promise<ReturnTypeFrom<'getPhoneNumber'>>  = async params => {
  // undefined
    return this.client.getPhoneNumber(params as any).promise();
  }

  getPhoneNumberOrder: (params: RawParamsFrom<'getPhoneNumberOrder'>) => Promise<ReturnTypeFrom<'getPhoneNumberOrder'>>  = async params => {
  // undefined
    return this.client.getPhoneNumberOrder(params as any).promise();
  }

  getPhoneNumberSettings: (params: RawParamsFrom<'getPhoneNumberSettings'>) => Promise<ReturnTypeFrom<'getPhoneNumberSettings'>>  = async params => {
  // undefined
    return this.client.getPhoneNumberSettings(params as any).promise();
  }

  getProxySession: (params: RawParamsFrom<'getProxySession'>) => Promise<ReturnTypeFrom<'getProxySession'>>  = async params => {
  // undefined
    return this.client.getProxySession(params as any).promise();
  }

  getSipMediaApplication: (params: RawParamsFrom<'getSipMediaApplication'>) => Promise<ReturnTypeFrom<'getSipMediaApplication'>>  = async params => {
  // undefined
    return this.client.getSipMediaApplication(params as any).promise();
  }

  getSipMediaApplicationAlexaSkillConfiguration: (params: RawParamsFrom<'getSipMediaApplicationAlexaSkillConfiguration'>) => Promise<ReturnTypeFrom<'getSipMediaApplicationAlexaSkillConfiguration'>>  = async params => {
  // undefined
    return this.client.getSipMediaApplicationAlexaSkillConfiguration(params as any).promise();
  }

  getSipMediaApplicationLoggingConfiguration: (params: RawParamsFrom<'getSipMediaApplicationLoggingConfiguration'>) => Promise<ReturnTypeFrom<'getSipMediaApplicationLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.getSipMediaApplicationLoggingConfiguration(params as any).promise();
  }

  getSipRule: (params: RawParamsFrom<'getSipRule'>) => Promise<ReturnTypeFrom<'getSipRule'>>  = async params => {
  // undefined
    return this.client.getSipRule(params as any).promise();
  }

  getVoiceConnector: (params: RawParamsFrom<'getVoiceConnector'>) => Promise<ReturnTypeFrom<'getVoiceConnector'>>  = async params => {
  // undefined
    return this.client.getVoiceConnector(params as any).promise();
  }

  getVoiceConnectorEmergencyCallingConfiguration: (params: RawParamsFrom<'getVoiceConnectorEmergencyCallingConfiguration'>) => Promise<ReturnTypeFrom<'getVoiceConnectorEmergencyCallingConfiguration'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorEmergencyCallingConfiguration(params as any).promise();
  }

  getVoiceConnectorGroup: (params: RawParamsFrom<'getVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'getVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorGroup(params as any).promise();
  }

  getVoiceConnectorLoggingConfiguration: (params: RawParamsFrom<'getVoiceConnectorLoggingConfiguration'>) => Promise<ReturnTypeFrom<'getVoiceConnectorLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorLoggingConfiguration(params as any).promise();
  }

  getVoiceConnectorOrigination: (params: RawParamsFrom<'getVoiceConnectorOrigination'>) => Promise<ReturnTypeFrom<'getVoiceConnectorOrigination'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorOrigination(params as any).promise();
  }

  getVoiceConnectorProxy: (params: RawParamsFrom<'getVoiceConnectorProxy'>) => Promise<ReturnTypeFrom<'getVoiceConnectorProxy'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorProxy(params as any).promise();
  }

  getVoiceConnectorStreamingConfiguration: (params: RawParamsFrom<'getVoiceConnectorStreamingConfiguration'>) => Promise<ReturnTypeFrom<'getVoiceConnectorStreamingConfiguration'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorStreamingConfiguration(params as any).promise();
  }

  getVoiceConnectorTermination: (params: RawParamsFrom<'getVoiceConnectorTermination'>) => Promise<ReturnTypeFrom<'getVoiceConnectorTermination'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorTermination(params as any).promise();
  }

  getVoiceConnectorTerminationHealth: (params: RawParamsFrom<'getVoiceConnectorTerminationHealth'>) => Promise<ReturnTypeFrom<'getVoiceConnectorTerminationHealth'>>  = async params => {
  // undefined
    return this.client.getVoiceConnectorTerminationHealth(params as any).promise();
  }

  listAvailableVoiceConnectorRegions: (params: RawParamsFrom<'listAvailableVoiceConnectorRegions'>) => Promise<ReturnTypeFrom<'listAvailableVoiceConnectorRegions'>>  = async params => {
  // undefined
    return this.client.listAvailableVoiceConnectorRegions(params as any).promise();
  }

  listPhoneNumberOrders: (params: RawParamsFrom<'listPhoneNumberOrders'>) => Promise<ReturnTypeFrom<'listPhoneNumberOrders'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPhoneNumberOrders(params as any).promise();
  }

  listPhoneNumbers: (params: RawParamsFrom<'listPhoneNumbers'>) => Promise<ReturnTypeFrom<'listPhoneNumbers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPhoneNumbers(params as any).promise();
  }

  listProxySessions: (params: RawParamsFrom<'listProxySessions'>) => Promise<ReturnTypeFrom<'listProxySessions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listProxySessions(params as any).promise();
  }

  async listSipMediaApplications(params: { [K in keyof ParamsFrom<'listSipMediaApplications', { next?: string, limit?: number }>]: ParamsFrom<'listSipMediaApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSipMediaApplications'>]-?: ReturnTypeFrom<'listSipMediaApplications'>[K]}['SipMediaApplications'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SipMediaApplications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSipMediaApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSipMediaApplications' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SipMediaApplications ?? []) ? (result.SipMediaApplications ?? []) : [result.SipMediaApplications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSipRules(params: { [K in keyof ParamsFrom<'listSipRules', { next?: string, limit?: number }>]: ParamsFrom<'listSipRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSipRules'>]-?: ReturnTypeFrom<'listSipRules'>[K]}['SipRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SipRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSipRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSipRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SipRules ?? []) ? (result.SipRules ?? []) : [result.SipRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listSupportedPhoneNumberCountries: (params: RawParamsFrom<'listSupportedPhoneNumberCountries'>) => Promise<ReturnTypeFrom<'listSupportedPhoneNumberCountries'>>  = async params => {
  // undefined
    return this.client.listSupportedPhoneNumberCountries(params as any).promise();
  }

  listVoiceConnectorGroups: (params: RawParamsFrom<'listVoiceConnectorGroups'>) => Promise<ReturnTypeFrom<'listVoiceConnectorGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVoiceConnectorGroups(params as any).promise();
  }

  listVoiceConnectorTerminationCredentials: (params: RawParamsFrom<'listVoiceConnectorTerminationCredentials'>) => Promise<ReturnTypeFrom<'listVoiceConnectorTerminationCredentials'>>  = async params => {
  // undefined
    return this.client.listVoiceConnectorTerminationCredentials(params as any).promise();
  }

  listVoiceConnectors: (params: RawParamsFrom<'listVoiceConnectors'>) => Promise<ReturnTypeFrom<'listVoiceConnectors'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listVoiceConnectors(params as any).promise();
  }

  putSipMediaApplicationAlexaSkillConfiguration: (params: RawParamsFrom<'putSipMediaApplicationAlexaSkillConfiguration'>) => Promise<ReturnTypeFrom<'putSipMediaApplicationAlexaSkillConfiguration'>>  = async params => {
  // undefined
    return this.client.putSipMediaApplicationAlexaSkillConfiguration(params as any).promise();
  }

  putSipMediaApplicationLoggingConfiguration: (params: RawParamsFrom<'putSipMediaApplicationLoggingConfiguration'>) => Promise<ReturnTypeFrom<'putSipMediaApplicationLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.putSipMediaApplicationLoggingConfiguration(params as any).promise();
  }

  putVoiceConnectorEmergencyCallingConfiguration: (params: RawParamsFrom<'putVoiceConnectorEmergencyCallingConfiguration'>) => Promise<ReturnTypeFrom<'putVoiceConnectorEmergencyCallingConfiguration'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorEmergencyCallingConfiguration(params as any).promise();
  }

  putVoiceConnectorLoggingConfiguration: (params: RawParamsFrom<'putVoiceConnectorLoggingConfiguration'>) => Promise<ReturnTypeFrom<'putVoiceConnectorLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorLoggingConfiguration(params as any).promise();
  }

  putVoiceConnectorOrigination: (params: RawParamsFrom<'putVoiceConnectorOrigination'>) => Promise<ReturnTypeFrom<'putVoiceConnectorOrigination'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorOrigination(params as any).promise();
  }

  putVoiceConnectorProxy: (params: RawParamsFrom<'putVoiceConnectorProxy'>) => Promise<ReturnTypeFrom<'putVoiceConnectorProxy'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorProxy(params as any).promise();
  }

  putVoiceConnectorStreamingConfiguration: (params: RawParamsFrom<'putVoiceConnectorStreamingConfiguration'>) => Promise<ReturnTypeFrom<'putVoiceConnectorStreamingConfiguration'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorStreamingConfiguration(params as any).promise();
  }

  putVoiceConnectorTermination: (params: RawParamsFrom<'putVoiceConnectorTermination'>) => Promise<ReturnTypeFrom<'putVoiceConnectorTermination'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorTermination(params as any).promise();
  }

  putVoiceConnectorTerminationCredentials: (params: RawParamsFrom<'putVoiceConnectorTerminationCredentials'>) => Promise<ReturnTypeFrom<'putVoiceConnectorTerminationCredentials'>>  = async params => {
  // undefined
    return this.client.putVoiceConnectorTerminationCredentials(params as any).promise();
  }

  restorePhoneNumber: (params: RawParamsFrom<'restorePhoneNumber'>) => Promise<ReturnTypeFrom<'restorePhoneNumber'>>  = async params => {
  // undefined
    return this.client.restorePhoneNumber(params as any).promise();
  }

  searchAvailablePhoneNumbers: (params: RawParamsFrom<'searchAvailablePhoneNumbers'>) => Promise<ReturnTypeFrom<'searchAvailablePhoneNumbers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.searchAvailablePhoneNumbers(params as any).promise();
  }

  updateGlobalSettings: (params: RawParamsFrom<'updateGlobalSettings'>) => Promise<ReturnTypeFrom<'updateGlobalSettings'>>  = async params => {
  // undefined
    return this.client.updateGlobalSettings(params as any).promise();
  }

  updatePhoneNumber: (params: RawParamsFrom<'updatePhoneNumber'>) => Promise<ReturnTypeFrom<'updatePhoneNumber'>>  = async params => {
  // undefined
    return this.client.updatePhoneNumber(params as any).promise();
  }

  updatePhoneNumberSettings: (params: RawParamsFrom<'updatePhoneNumberSettings'>) => Promise<ReturnTypeFrom<'updatePhoneNumberSettings'>>  = async params => {
  // undefined
    return this.client.updatePhoneNumberSettings(params as any).promise();
  }

  updateProxySession: (params: RawParamsFrom<'updateProxySession'>) => Promise<ReturnTypeFrom<'updateProxySession'>>  = async params => {
  // undefined
    return this.client.updateProxySession(params as any).promise();
  }

  updateSipMediaApplication: (params: RawParamsFrom<'updateSipMediaApplication'>) => Promise<ReturnTypeFrom<'updateSipMediaApplication'>>  = async params => {
  // undefined
    return this.client.updateSipMediaApplication(params as any).promise();
  }

  updateSipMediaApplicationCall: (params: RawParamsFrom<'updateSipMediaApplicationCall'>) => Promise<ReturnTypeFrom<'updateSipMediaApplicationCall'>>  = async params => {
  // undefined
    return this.client.updateSipMediaApplicationCall(params as any).promise();
  }

  updateSipRule: (params: RawParamsFrom<'updateSipRule'>) => Promise<ReturnTypeFrom<'updateSipRule'>>  = async params => {
  // undefined
    return this.client.updateSipRule(params as any).promise();
  }

  updateVoiceConnector: (params: RawParamsFrom<'updateVoiceConnector'>) => Promise<ReturnTypeFrom<'updateVoiceConnector'>>  = async params => {
  // undefined
    return this.client.updateVoiceConnector(params as any).promise();
  }

  updateVoiceConnectorGroup: (params: RawParamsFrom<'updateVoiceConnectorGroup'>) => Promise<ReturnTypeFrom<'updateVoiceConnectorGroup'>>  = async params => {
  // undefined
    return this.client.updateVoiceConnectorGroup(params as any).promise();
  }

  validateE911Address: (params: RawParamsFrom<'validateE911Address'>) => Promise<ReturnTypeFrom<'validateE911Address'>>  = async params => {
  // undefined
    return this.client.validateE911Address(params as any).promise();
  }
  
  static fromClient(client: AWSChimeSDKVoice): ChimeSDKVoice {
    return new ChimeSDKVoice(client) as any;
  }
  
  static client(options?: AWSChimeSDKVoice.Types.ClientConfiguration): ChimeSDKVoice {
    return new ChimeSDKVoice(new AWSChimeSDKVoice(options)) as any;
  }
}  
