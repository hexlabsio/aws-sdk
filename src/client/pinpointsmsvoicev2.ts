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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sms-voice';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["describeAccountAttributes","describeAccountLimits","describeConfigurationSets","describeOptOutLists","describePhoneNumbers","describePools","describeSenderIds","describeSpendLimits"];
    
  associateOriginationIdentity: FunctionTypeFrom<'associateOriginationIdentity'>;

  createConfigurationSet: FunctionTypeFrom<'createConfigurationSet'>;

  createEventDestination: FunctionTypeFrom<'createEventDestination'>;

  createOptOutList: FunctionTypeFrom<'createOptOutList'>;

  createPool: FunctionTypeFrom<'createPool'>;

  deleteConfigurationSet: FunctionTypeFrom<'deleteConfigurationSet'>;

  deleteDefaultMessageType: FunctionTypeFrom<'deleteDefaultMessageType'>;

  deleteDefaultSenderId: FunctionTypeFrom<'deleteDefaultSenderId'>;

  deleteEventDestination: FunctionTypeFrom<'deleteEventDestination'>;

  deleteKeyword: FunctionTypeFrom<'deleteKeyword'>;

  deleteOptOutList: FunctionTypeFrom<'deleteOptOutList'>;

  deleteOptedOutNumber: FunctionTypeFrom<'deleteOptedOutNumber'>;

  deletePool: FunctionTypeFrom<'deletePool'>;

  deleteTextMessageSpendLimitOverride: FunctionTypeFrom<'deleteTextMessageSpendLimitOverride'>;

  deleteVoiceMessageSpendLimitOverride: FunctionTypeFrom<'deleteVoiceMessageSpendLimitOverride'>;

  describeAccountAttributes(params: { [K in keyof Omit<ParamsFrom<'describeAccountAttributes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAccountAttributes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAccountAttributes'>]-?: ReturnTypeFrom<'describeAccountAttributes'>[K]}['AccountAttributes'] }>
  describeAccountAttributes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAccountAttributes'>]-?: ReturnTypeFrom<'describeAccountAttributes'>[K]}['AccountAttributes'] }>;

  describeAccountLimits(params: { [K in keyof Omit<ParamsFrom<'describeAccountLimits', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAccountLimits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAccountLimits'>]-?: ReturnTypeFrom<'describeAccountLimits'>[K]}['AccountLimits'] }>
  describeAccountLimits(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAccountLimits'>]-?: ReturnTypeFrom<'describeAccountLimits'>[K]}['AccountLimits'] }>;

  describeConfigurationSets(params: { [K in keyof Omit<ParamsFrom<'describeConfigurationSets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeConfigurationSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigurationSets'>]-?: ReturnTypeFrom<'describeConfigurationSets'>[K]}['ConfigurationSets'] }>
  describeConfigurationSets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeConfigurationSets'>]-?: ReturnTypeFrom<'describeConfigurationSets'>[K]}['ConfigurationSets'] }>;

  describeKeywords(params: { [K in keyof Omit<ParamsFrom<'describeKeywords', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeKeywords', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeKeywords'>]-?: ReturnTypeFrom<'describeKeywords'>[K]}['Keywords'] }>
  ;

  describeOptOutLists(params: { [K in keyof Omit<ParamsFrom<'describeOptOutLists', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeOptOutLists', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOptOutLists'>]-?: ReturnTypeFrom<'describeOptOutLists'>[K]}['OptOutLists'] }>
  describeOptOutLists(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOptOutLists'>]-?: ReturnTypeFrom<'describeOptOutLists'>[K]}['OptOutLists'] }>;

  describeOptedOutNumbers(params: { [K in keyof Omit<ParamsFrom<'describeOptedOutNumbers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeOptedOutNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOptedOutNumbers'>]-?: ReturnTypeFrom<'describeOptedOutNumbers'>[K]}['OptedOutNumbers'] }>
  ;

  describePhoneNumbers(params: { [K in keyof Omit<ParamsFrom<'describePhoneNumbers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describePhoneNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePhoneNumbers'>]-?: ReturnTypeFrom<'describePhoneNumbers'>[K]}['PhoneNumbers'] }>
  describePhoneNumbers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePhoneNumbers'>]-?: ReturnTypeFrom<'describePhoneNumbers'>[K]}['PhoneNumbers'] }>;

  describePools(params: { [K in keyof Omit<ParamsFrom<'describePools', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describePools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePools'>]-?: ReturnTypeFrom<'describePools'>[K]}['Pools'] }>
  describePools(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePools'>]-?: ReturnTypeFrom<'describePools'>[K]}['Pools'] }>;

  describeSenderIds(params: { [K in keyof Omit<ParamsFrom<'describeSenderIds', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSenderIds', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSenderIds'>]-?: ReturnTypeFrom<'describeSenderIds'>[K]}['SenderIds'] }>
  describeSenderIds(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSenderIds'>]-?: ReturnTypeFrom<'describeSenderIds'>[K]}['SenderIds'] }>;

  describeSpendLimits(params: { [K in keyof Omit<ParamsFrom<'describeSpendLimits', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSpendLimits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSpendLimits'>]-?: ReturnTypeFrom<'describeSpendLimits'>[K]}['SpendLimits'] }>
  describeSpendLimits(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSpendLimits'>]-?: ReturnTypeFrom<'describeSpendLimits'>[K]}['SpendLimits'] }>;

  disassociateOriginationIdentity: FunctionTypeFrom<'disassociateOriginationIdentity'>;

  listPoolOriginationIdentities(params: { [K in keyof Omit<ParamsFrom<'listPoolOriginationIdentities', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPoolOriginationIdentities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPoolOriginationIdentities'>]-?: ReturnTypeFrom<'listPoolOriginationIdentities'>[K]}['OriginationIdentities'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putKeyword: FunctionTypeFrom<'putKeyword'>;

  putOptedOutNumber: FunctionTypeFrom<'putOptedOutNumber'>;

  releasePhoneNumber: FunctionTypeFrom<'releasePhoneNumber'>;

  requestPhoneNumber: FunctionTypeFrom<'requestPhoneNumber'>;

  sendTextMessage: FunctionTypeFrom<'sendTextMessage'>;

  sendVoiceMessage: FunctionTypeFrom<'sendVoiceMessage'>;

  setDefaultMessageType: FunctionTypeFrom<'setDefaultMessageType'>;

  setDefaultSenderId: FunctionTypeFrom<'setDefaultSenderId'>;

  setTextMessageSpendLimitOverride: FunctionTypeFrom<'setTextMessageSpendLimitOverride'>;

  setVoiceMessageSpendLimitOverride: FunctionTypeFrom<'setVoiceMessageSpendLimitOverride'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateEventDestination: FunctionTypeFrom<'updateEventDestination'>;

  updatePhoneNumber: FunctionTypeFrom<'updatePhoneNumber'>;

  updatePool: FunctionTypeFrom<'updatePool'>
}
 
export class PinpointSMSVoiceV2 implements ClientType {
  private constructor(private readonly client: AWSPinpointSMSVoiceV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sms-voice';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["describeAccountAttributes","describeAccountLimits","describeConfigurationSets","describeOptOutLists","describePhoneNumbers","describePools","describeSenderIds","describeSpendLimits"] as const;
  
  async associateOriginationIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.associateOriginationIdentity(...args).promise()
  }

  async createConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationSet(...args).promise()
  }

  async createEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.createEventDestination(...args).promise()
  }

  async createOptOutList(...args: any): Promise<any> {
  // undefined
    return this.client.createOptOutList(...args).promise()
  }

  async createPool(...args: any): Promise<any> {
  // undefined
    return this.client.createPool(...args).promise()
  }

  async deleteConfigurationSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationSet(...args).promise()
  }

  async deleteDefaultMessageType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDefaultMessageType(...args).promise()
  }

  async deleteDefaultSenderId(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDefaultSenderId(...args).promise()
  }

  async deleteEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventDestination(...args).promise()
  }

  async deleteKeyword(...args: any): Promise<any> {
  // undefined
    return this.client.deleteKeyword(...args).promise()
  }

  async deleteOptOutList(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOptOutList(...args).promise()
  }

  async deleteOptedOutNumber(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOptedOutNumber(...args).promise()
  }

  async deletePool(...args: any): Promise<any> {
  // undefined
    return this.client.deletePool(...args).promise()
  }

  async deleteTextMessageSpendLimitOverride(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTextMessageSpendLimitOverride(...args).promise()
  }

  async deleteVoiceMessageSpendLimitOverride(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVoiceMessageSpendLimitOverride(...args).promise()
  }

  async describeAccountAttributes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountAttributes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAccountAttributes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AccountAttributes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAccountLimits(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountLimits"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAccountLimits(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AccountLimits ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigurationSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConfigurationSets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeConfigurationSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConfigurationSets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeKeywords(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Keywords"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeKeywords(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Keywords ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOptOutLists(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OptOutLists"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeOptOutLists(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OptOutLists ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOptedOutNumbers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OptedOutNumbers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeOptedOutNumbers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OptedOutNumbers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePhoneNumbers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PhoneNumbers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePhoneNumbers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PhoneNumbers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePools(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Pools"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Pools ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSenderIds(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SenderIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSenderIds(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SenderIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSpendLimits(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SpendLimits"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSpendLimits(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SpendLimits ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disassociateOriginationIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateOriginationIdentity(...args).promise()
  }

  async listPoolOriginationIdentities(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OriginationIdentities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPoolOriginationIdentities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OriginationIdentities ?? [];
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

  async putKeyword(...args: any): Promise<any> {
  // undefined
    return this.client.putKeyword(...args).promise()
  }

  async putOptedOutNumber(...args: any): Promise<any> {
  // undefined
    return this.client.putOptedOutNumber(...args).promise()
  }

  async releasePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.releasePhoneNumber(...args).promise()
  }

  async requestPhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.requestPhoneNumber(...args).promise()
  }

  async sendTextMessage(...args: any): Promise<any> {
  // undefined
    return this.client.sendTextMessage(...args).promise()
  }

  async sendVoiceMessage(...args: any): Promise<any> {
  // undefined
    return this.client.sendVoiceMessage(...args).promise()
  }

  async setDefaultMessageType(...args: any): Promise<any> {
  // undefined
    return this.client.setDefaultMessageType(...args).promise()
  }

  async setDefaultSenderId(...args: any): Promise<any> {
  // undefined
    return this.client.setDefaultSenderId(...args).promise()
  }

  async setTextMessageSpendLimitOverride(...args: any): Promise<any> {
  // undefined
    return this.client.setTextMessageSpendLimitOverride(...args).promise()
  }

  async setVoiceMessageSpendLimitOverride(...args: any): Promise<any> {
  // undefined
    return this.client.setVoiceMessageSpendLimitOverride(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateEventDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventDestination(...args).promise()
  }

  async updatePhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.updatePhoneNumber(...args).promise()
  }

  async updatePool(...args: any): Promise<any> {
  // undefined
    return this.client.updatePool(...args).promise()
  }
  
  static fromClient(client: AWSPinpointSMSVoiceV2): ClientType {
    return new PinpointSMSVoiceV2(client) as any;
  }
  
  static client(options?: AWSPinpointSMSVoiceV2.Types.ClientConfiguration): ClientType {
    return new PinpointSMSVoiceV2(new AWSPinpointSMSVoiceV2(options)) as any;
  }
}  
