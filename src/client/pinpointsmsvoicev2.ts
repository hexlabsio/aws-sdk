import { Request, PinpointSMSVoiceV2 as AWSPinpointSMSVoiceV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPinpointSMSVoiceV2> = AWSPinpointSMSVoiceV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPinpointSMSVoiceV2> = AWSPinpointSMSVoiceV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPinpointSMSVoiceV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPinpointSMSVoiceV2, Extras> = AWSPinpointSMSVoiceV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPinpointSMSVoiceV2> = AWSPinpointSMSVoiceV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class PinpointSMSVoiceV2 {
  private constructor(private readonly client: AWSPinpointSMSVoiceV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sms-voice' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["describeAccountAttributes","describeAccountLimits","describeConfigurationSets","describeOptOutLists","describePhoneNumbers","describePools","describeSenderIds","describeSpendLimits"] as const;
  
  associateOriginationIdentity: (params: RawParamsFrom<'associateOriginationIdentity'>) => Promise<ReturnTypeFrom<'associateOriginationIdentity'>>  = async params => {
  // undefined
    return this.client.associateOriginationIdentity(params as any).promise();
  }

  createConfigurationSet: (params: RawParamsFrom<'createConfigurationSet'>) => Promise<ReturnTypeFrom<'createConfigurationSet'>>  = async params => {
  // undefined
    return this.client.createConfigurationSet(params as any).promise();
  }

  createEventDestination: (params: RawParamsFrom<'createEventDestination'>) => Promise<ReturnTypeFrom<'createEventDestination'>>  = async params => {
  // undefined
    return this.client.createEventDestination(params as any).promise();
  }

  createOptOutList: (params: RawParamsFrom<'createOptOutList'>) => Promise<ReturnTypeFrom<'createOptOutList'>>  = async params => {
  // undefined
    return this.client.createOptOutList(params as any).promise();
  }

  createPool: (params: RawParamsFrom<'createPool'>) => Promise<ReturnTypeFrom<'createPool'>>  = async params => {
  // undefined
    return this.client.createPool(params as any).promise();
  }

  deleteConfigurationSet: (params: RawParamsFrom<'deleteConfigurationSet'>) => Promise<ReturnTypeFrom<'deleteConfigurationSet'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationSet(params as any).promise();
  }

  deleteDefaultMessageType: (params: RawParamsFrom<'deleteDefaultMessageType'>) => Promise<ReturnTypeFrom<'deleteDefaultMessageType'>>  = async params => {
  // undefined
    return this.client.deleteDefaultMessageType(params as any).promise();
  }

  deleteDefaultSenderId: (params: RawParamsFrom<'deleteDefaultSenderId'>) => Promise<ReturnTypeFrom<'deleteDefaultSenderId'>>  = async params => {
  // undefined
    return this.client.deleteDefaultSenderId(params as any).promise();
  }

  deleteEventDestination: (params: RawParamsFrom<'deleteEventDestination'>) => Promise<ReturnTypeFrom<'deleteEventDestination'>>  = async params => {
  // undefined
    return this.client.deleteEventDestination(params as any).promise();
  }

  deleteKeyword: (params: RawParamsFrom<'deleteKeyword'>) => Promise<ReturnTypeFrom<'deleteKeyword'>>  = async params => {
  // undefined
    return this.client.deleteKeyword(params as any).promise();
  }

  deleteOptOutList: (params: RawParamsFrom<'deleteOptOutList'>) => Promise<ReturnTypeFrom<'deleteOptOutList'>>  = async params => {
  // undefined
    return this.client.deleteOptOutList(params as any).promise();
  }

  deleteOptedOutNumber: (params: RawParamsFrom<'deleteOptedOutNumber'>) => Promise<ReturnTypeFrom<'deleteOptedOutNumber'>>  = async params => {
  // undefined
    return this.client.deleteOptedOutNumber(params as any).promise();
  }

  deletePool: (params: RawParamsFrom<'deletePool'>) => Promise<ReturnTypeFrom<'deletePool'>>  = async params => {
  // undefined
    return this.client.deletePool(params as any).promise();
  }

  deleteTextMessageSpendLimitOverride: (params: RawParamsFrom<'deleteTextMessageSpendLimitOverride'>) => Promise<ReturnTypeFrom<'deleteTextMessageSpendLimitOverride'>>  = async params => {
  // undefined
    return this.client.deleteTextMessageSpendLimitOverride(params as any).promise();
  }

  deleteVoiceMessageSpendLimitOverride: (params: RawParamsFrom<'deleteVoiceMessageSpendLimitOverride'>) => Promise<ReturnTypeFrom<'deleteVoiceMessageSpendLimitOverride'>>  = async params => {
  // undefined
    return this.client.deleteVoiceMessageSpendLimitOverride(params as any).promise();
  }

  async describeAccountAttributes(params: { [K in keyof ParamsFrom<'describeAccountAttributes', { next?: string, limit?: number }>]: ParamsFrom<'describeAccountAttributes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAccountAttributes'>]-?: ReturnTypeFrom<'describeAccountAttributes'>[K]}['AccountAttributes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountAttributes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAccountAttributes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAccountAttributes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AccountAttributes ?? []) ? (result.AccountAttributes ?? []) : [result.AccountAttributes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAccountLimits(params: { [K in keyof ParamsFrom<'describeAccountLimits', { next?: string, limit?: number }>]: ParamsFrom<'describeAccountLimits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAccountLimits'>]-?: ReturnTypeFrom<'describeAccountLimits'>[K]}['AccountLimits'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountLimits"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAccountLimits({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAccountLimits' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AccountLimits ?? []) ? (result.AccountLimits ?? []) : [result.AccountLimits]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigurationSets(params: { [K in keyof ParamsFrom<'describeConfigurationSets', { next?: string, limit?: number }>]: ParamsFrom<'describeConfigurationSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConfigurationSets'>]-?: ReturnTypeFrom<'describeConfigurationSets'>[K]}['ConfigurationSets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConfigurationSets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeConfigurationSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeConfigurationSets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ConfigurationSets ?? []) ? (result.ConfigurationSets ?? []) : [result.ConfigurationSets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeKeywords(params: { [K in keyof ParamsFrom<'describeKeywords', { next?: string, limit?: number }>]: ParamsFrom<'describeKeywords', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeKeywords'>]-?: ReturnTypeFrom<'describeKeywords'>[K]}['Keywords'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Keywords"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeKeywords({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeKeywords' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Keywords ?? []) ? (result.Keywords ?? []) : [result.Keywords]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOptOutLists(params: { [K in keyof ParamsFrom<'describeOptOutLists', { next?: string, limit?: number }>]: ParamsFrom<'describeOptOutLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOptOutLists'>]-?: ReturnTypeFrom<'describeOptOutLists'>[K]}['OptOutLists'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OptOutLists"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeOptOutLists({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeOptOutLists' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OptOutLists ?? []) ? (result.OptOutLists ?? []) : [result.OptOutLists]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOptedOutNumbers(params: { [K in keyof ParamsFrom<'describeOptedOutNumbers', { next?: string, limit?: number }>]: ParamsFrom<'describeOptedOutNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOptedOutNumbers'>]-?: ReturnTypeFrom<'describeOptedOutNumbers'>[K]}['OptedOutNumbers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OptedOutNumbers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeOptedOutNumbers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeOptedOutNumbers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OptedOutNumbers ?? []) ? (result.OptedOutNumbers ?? []) : [result.OptedOutNumbers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePhoneNumbers(params: { [K in keyof ParamsFrom<'describePhoneNumbers', { next?: string, limit?: number }>]: ParamsFrom<'describePhoneNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePhoneNumbers'>]-?: ReturnTypeFrom<'describePhoneNumbers'>[K]}['PhoneNumbers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PhoneNumbers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePhoneNumbers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePhoneNumbers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PhoneNumbers ?? []) ? (result.PhoneNumbers ?? []) : [result.PhoneNumbers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePools(params: { [K in keyof ParamsFrom<'describePools', { next?: string, limit?: number }>]: ParamsFrom<'describePools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePools'>]-?: ReturnTypeFrom<'describePools'>[K]}['Pools'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Pools"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePools' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Pools ?? []) ? (result.Pools ?? []) : [result.Pools]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSenderIds(params: { [K in keyof ParamsFrom<'describeSenderIds', { next?: string, limit?: number }>]: ParamsFrom<'describeSenderIds', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSenderIds'>]-?: ReturnTypeFrom<'describeSenderIds'>[K]}['SenderIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SenderIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSenderIds({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSenderIds' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SenderIds ?? []) ? (result.SenderIds ?? []) : [result.SenderIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSpendLimits(params: { [K in keyof ParamsFrom<'describeSpendLimits', { next?: string, limit?: number }>]: ParamsFrom<'describeSpendLimits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSpendLimits'>]-?: ReturnTypeFrom<'describeSpendLimits'>[K]}['SpendLimits'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpendLimits"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSpendLimits({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSpendLimits' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SpendLimits ?? []) ? (result.SpendLimits ?? []) : [result.SpendLimits]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disassociateOriginationIdentity: (params: RawParamsFrom<'disassociateOriginationIdentity'>) => Promise<ReturnTypeFrom<'disassociateOriginationIdentity'>>  = async params => {
  // undefined
    return this.client.disassociateOriginationIdentity(params as any).promise();
  }

  async listPoolOriginationIdentities(params: { [K in keyof ParamsFrom<'listPoolOriginationIdentities', { next?: string, limit?: number }>]: ParamsFrom<'listPoolOriginationIdentities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPoolOriginationIdentities'>]-?: ReturnTypeFrom<'listPoolOriginationIdentities'>[K]}['OriginationIdentities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OriginationIdentities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPoolOriginationIdentities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPoolOriginationIdentities' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OriginationIdentities ?? []) ? (result.OriginationIdentities ?? []) : [result.OriginationIdentities]) as any;
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

  putKeyword: (params: RawParamsFrom<'putKeyword'>) => Promise<ReturnTypeFrom<'putKeyword'>>  = async params => {
  // undefined
    return this.client.putKeyword(params as any).promise();
  }

  putOptedOutNumber: (params: RawParamsFrom<'putOptedOutNumber'>) => Promise<ReturnTypeFrom<'putOptedOutNumber'>>  = async params => {
  // undefined
    return this.client.putOptedOutNumber(params as any).promise();
  }

  releasePhoneNumber: (params: RawParamsFrom<'releasePhoneNumber'>) => Promise<ReturnTypeFrom<'releasePhoneNumber'>>  = async params => {
  // undefined
    return this.client.releasePhoneNumber(params as any).promise();
  }

  requestPhoneNumber: (params: RawParamsFrom<'requestPhoneNumber'>) => Promise<ReturnTypeFrom<'requestPhoneNumber'>>  = async params => {
  // undefined
    return this.client.requestPhoneNumber(params as any).promise();
  }

  sendTextMessage: (params: RawParamsFrom<'sendTextMessage'>) => Promise<ReturnTypeFrom<'sendTextMessage'>>  = async params => {
  // undefined
    return this.client.sendTextMessage(params as any).promise();
  }

  sendVoiceMessage: (params: RawParamsFrom<'sendVoiceMessage'>) => Promise<ReturnTypeFrom<'sendVoiceMessage'>>  = async params => {
  // undefined
    return this.client.sendVoiceMessage(params as any).promise();
  }

  setDefaultMessageType: (params: RawParamsFrom<'setDefaultMessageType'>) => Promise<ReturnTypeFrom<'setDefaultMessageType'>>  = async params => {
  // undefined
    return this.client.setDefaultMessageType(params as any).promise();
  }

  setDefaultSenderId: (params: RawParamsFrom<'setDefaultSenderId'>) => Promise<ReturnTypeFrom<'setDefaultSenderId'>>  = async params => {
  // undefined
    return this.client.setDefaultSenderId(params as any).promise();
  }

  setTextMessageSpendLimitOverride: (params: RawParamsFrom<'setTextMessageSpendLimitOverride'>) => Promise<ReturnTypeFrom<'setTextMessageSpendLimitOverride'>>  = async params => {
  // undefined
    return this.client.setTextMessageSpendLimitOverride(params as any).promise();
  }

  setVoiceMessageSpendLimitOverride: (params: RawParamsFrom<'setVoiceMessageSpendLimitOverride'>) => Promise<ReturnTypeFrom<'setVoiceMessageSpendLimitOverride'>>  = async params => {
  // undefined
    return this.client.setVoiceMessageSpendLimitOverride(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateEventDestination: (params: RawParamsFrom<'updateEventDestination'>) => Promise<ReturnTypeFrom<'updateEventDestination'>>  = async params => {
  // undefined
    return this.client.updateEventDestination(params as any).promise();
  }

  updatePhoneNumber: (params: RawParamsFrom<'updatePhoneNumber'>) => Promise<ReturnTypeFrom<'updatePhoneNumber'>>  = async params => {
  // undefined
    return this.client.updatePhoneNumber(params as any).promise();
  }

  updatePool: (params: RawParamsFrom<'updatePool'>) => Promise<ReturnTypeFrom<'updatePool'>>  = async params => {
  // undefined
    return this.client.updatePool(params as any).promise();
  }
  
  static fromClient(client: AWSPinpointSMSVoiceV2): PinpointSMSVoiceV2 {
    return new PinpointSMSVoiceV2(client) as any;
  }
  
  static client(options?: AWSPinpointSMSVoiceV2.Types.ClientConfiguration): PinpointSMSVoiceV2 {
    return new PinpointSMSVoiceV2(new AWSPinpointSMSVoiceV2(options)) as any;
  }
}  
