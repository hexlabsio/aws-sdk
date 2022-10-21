import { Request, SNS as AWSSNS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSNS> = AWSSNS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSNS> = AWSSNS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSNS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSNS, Extras> = AWSSNS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSNS> = AWSSNS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SNS {
  private constructor(private readonly client: AWSSNS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sns' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = ["listOriginationNumbers","listPhoneNumbersOptedOut","listPlatformApplications","listSMSSandboxPhoneNumbers","listSubscriptions","listTopics"] as const;
  
  addPermission: (params: RawParamsFrom<'addPermission'>) => Promise<ReturnTypeFrom<'addPermission'>>  = async params => {
  // undefined
    return this.client.addPermission(params as any).promise();
  }

  checkIfPhoneNumberIsOptedOut: (params: RawParamsFrom<'checkIfPhoneNumberIsOptedOut'>) => Promise<ReturnTypeFrom<'checkIfPhoneNumberIsOptedOut'>>  = async params => {
  // undefined
    return this.client.checkIfPhoneNumberIsOptedOut(params as any).promise();
  }

  confirmSubscription: (params: RawParamsFrom<'confirmSubscription'>) => Promise<ReturnTypeFrom<'confirmSubscription'>>  = async params => {
  // undefined
    return this.client.confirmSubscription(params as any).promise();
  }

  createPlatformApplication: (params: RawParamsFrom<'createPlatformApplication'>) => Promise<ReturnTypeFrom<'createPlatformApplication'>>  = async params => {
  // undefined
    return this.client.createPlatformApplication(params as any).promise();
  }

  createPlatformEndpoint: (params: RawParamsFrom<'createPlatformEndpoint'>) => Promise<ReturnTypeFrom<'createPlatformEndpoint'>>  = async params => {
  // undefined
    return this.client.createPlatformEndpoint(params as any).promise();
  }

  createSMSSandboxPhoneNumber: (params: RawParamsFrom<'createSMSSandboxPhoneNumber'>) => Promise<ReturnTypeFrom<'createSMSSandboxPhoneNumber'>>  = async params => {
  // undefined
    return this.client.createSMSSandboxPhoneNumber(params as any).promise();
  }

  createTopic: (params: RawParamsFrom<'createTopic'>) => Promise<ReturnTypeFrom<'createTopic'>>  = async params => {
  // undefined
    return this.client.createTopic(params as any).promise();
  }

  deleteEndpoint: (params: RawParamsFrom<'deleteEndpoint'>) => Promise<ReturnTypeFrom<'deleteEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteEndpoint(params as any).promise();
  }

  deletePlatformApplication: (params: RawParamsFrom<'deletePlatformApplication'>) => Promise<ReturnTypeFrom<'deletePlatformApplication'>>  = async params => {
  // undefined
    return this.client.deletePlatformApplication(params as any).promise();
  }

  deleteSMSSandboxPhoneNumber: (params: RawParamsFrom<'deleteSMSSandboxPhoneNumber'>) => Promise<ReturnTypeFrom<'deleteSMSSandboxPhoneNumber'>>  = async params => {
  // undefined
    return this.client.deleteSMSSandboxPhoneNumber(params as any).promise();
  }

  deleteTopic: (params: RawParamsFrom<'deleteTopic'>) => Promise<ReturnTypeFrom<'deleteTopic'>>  = async params => {
  // undefined
    return this.client.deleteTopic(params as any).promise();
  }

  getDataProtectionPolicy: (params: RawParamsFrom<'getDataProtectionPolicy'>) => Promise<ReturnTypeFrom<'getDataProtectionPolicy'>>  = async params => {
  // undefined
    return this.client.getDataProtectionPolicy(params as any).promise();
  }

  getEndpointAttributes: (params: RawParamsFrom<'getEndpointAttributes'>) => Promise<ReturnTypeFrom<'getEndpointAttributes'>>  = async params => {
  // undefined
    return this.client.getEndpointAttributes(params as any).promise();
  }

  getPlatformApplicationAttributes: (params: RawParamsFrom<'getPlatformApplicationAttributes'>) => Promise<ReturnTypeFrom<'getPlatformApplicationAttributes'>>  = async params => {
  // undefined
    return this.client.getPlatformApplicationAttributes(params as any).promise();
  }

  getSMSAttributes: (params: RawParamsFrom<'getSMSAttributes'>) => Promise<ReturnTypeFrom<'getSMSAttributes'>>  = async params => {
  // undefined
    return this.client.getSMSAttributes(params as any).promise();
  }

  getSMSSandboxAccountStatus: (params: RawParamsFrom<'getSMSSandboxAccountStatus'>) => Promise<ReturnTypeFrom<'getSMSSandboxAccountStatus'>>  = async params => {
  // undefined
    return this.client.getSMSSandboxAccountStatus(params as any).promise();
  }

  getSubscriptionAttributes: (params: RawParamsFrom<'getSubscriptionAttributes'>) => Promise<ReturnTypeFrom<'getSubscriptionAttributes'>>  = async params => {
  // undefined
    return this.client.getSubscriptionAttributes(params as any).promise();
  }

  getTopicAttributes: (params: RawParamsFrom<'getTopicAttributes'>) => Promise<ReturnTypeFrom<'getTopicAttributes'>>  = async params => {
  // undefined
    return this.client.getTopicAttributes(params as any).promise();
  }

  async listEndpointsByPlatformApplication(params: { [K in keyof ParamsFrom<'listEndpointsByPlatformApplication', { next?: string }>]: ParamsFrom<'listEndpointsByPlatformApplication', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEndpointsByPlatformApplication'>]-?: ReturnTypeFrom<'listEndpointsByPlatformApplication'>[K]}['Endpoints'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Endpoints"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listEndpointsByPlatformApplication({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEndpointsByPlatformApplication' })).toString('base64');
    const member = (Array.isArray(result.Endpoints ?? []) ? (result.Endpoints ?? []) : [result.Endpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOriginationNumbers(params: { [K in keyof ParamsFrom<'listOriginationNumbers', { next?: string, limit?: number }>]: ParamsFrom<'listOriginationNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOriginationNumbers'>]-?: ReturnTypeFrom<'listOriginationNumbers'>[K]}['PhoneNumbers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PhoneNumbers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOriginationNumbers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOriginationNumbers' })).toString('base64');
    const member = (Array.isArray(result.PhoneNumbers ?? []) ? (result.PhoneNumbers ?? []) : [result.PhoneNumbers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPhoneNumbersOptedOut(params: { [K in keyof ParamsFrom<'listPhoneNumbersOptedOut', { next?: string }>]: ParamsFrom<'listPhoneNumbersOptedOut', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPhoneNumbersOptedOut'>]-?: ReturnTypeFrom<'listPhoneNumbersOptedOut'>[K]}['phoneNumbers'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"phoneNumbers"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listPhoneNumbersOptedOut({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPhoneNumbersOptedOut' })).toString('base64');
    const member = (Array.isArray(result.phoneNumbers ?? []) ? (result.phoneNumbers ?? []) : [result.phoneNumbers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPlatformApplications(params: { [K in keyof ParamsFrom<'listPlatformApplications', { next?: string }>]: ParamsFrom<'listPlatformApplications', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPlatformApplications'>]-?: ReturnTypeFrom<'listPlatformApplications'>[K]}['PlatformApplications'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"PlatformApplications"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listPlatformApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPlatformApplications' })).toString('base64');
    const member = (Array.isArray(result.PlatformApplications ?? []) ? (result.PlatformApplications ?? []) : [result.PlatformApplications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSMSSandboxPhoneNumbers(params: { [K in keyof ParamsFrom<'listSMSSandboxPhoneNumbers', { next?: string, limit?: number }>]: ParamsFrom<'listSMSSandboxPhoneNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSMSSandboxPhoneNumbers'>]-?: ReturnTypeFrom<'listSMSSandboxPhoneNumbers'>[K]}['PhoneNumbers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PhoneNumbers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSMSSandboxPhoneNumbers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSMSSandboxPhoneNumbers' })).toString('base64');
    const member = (Array.isArray(result.PhoneNumbers ?? []) ? (result.PhoneNumbers ?? []) : [result.PhoneNumbers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubscriptions(params: { [K in keyof ParamsFrom<'listSubscriptions', { next?: string }>]: ParamsFrom<'listSubscriptions', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSubscriptions'>]-?: ReturnTypeFrom<'listSubscriptions'>[K]}['Subscriptions'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Subscriptions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listSubscriptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSubscriptions' })).toString('base64');
    const member = (Array.isArray(result.Subscriptions ?? []) ? (result.Subscriptions ?? []) : [result.Subscriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubscriptionsByTopic(params: { [K in keyof ParamsFrom<'listSubscriptionsByTopic', { next?: string }>]: ParamsFrom<'listSubscriptionsByTopic', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSubscriptionsByTopic'>]-?: ReturnTypeFrom<'listSubscriptionsByTopic'>[K]}['Subscriptions'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Subscriptions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listSubscriptionsByTopic({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSubscriptionsByTopic' })).toString('base64');
    const member = (Array.isArray(result.Subscriptions ?? []) ? (result.Subscriptions ?? []) : [result.Subscriptions]) as any;
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

  async listTopics(params: { [K in keyof ParamsFrom<'listTopics', { next?: string }>]: ParamsFrom<'listTopics', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTopics'>]-?: ReturnTypeFrom<'listTopics'>[K]}['Topics'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Topics"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listTopics({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTopics' })).toString('base64');
    const member = (Array.isArray(result.Topics ?? []) ? (result.Topics ?? []) : [result.Topics]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  optInPhoneNumber: (params: RawParamsFrom<'optInPhoneNumber'>) => Promise<ReturnTypeFrom<'optInPhoneNumber'>>  = async params => {
  // undefined
    return this.client.optInPhoneNumber(params as any).promise();
  }

  publish: (params: RawParamsFrom<'publish'>) => Promise<ReturnTypeFrom<'publish'>>  = async params => {
  // undefined
    return this.client.publish(params as any).promise();
  }

  publishBatch: (params: RawParamsFrom<'publishBatch'>) => Promise<ReturnTypeFrom<'publishBatch'>>  = async params => {
  // undefined
    return this.client.publishBatch(params as any).promise();
  }

  putDataProtectionPolicy: (params: RawParamsFrom<'putDataProtectionPolicy'>) => Promise<ReturnTypeFrom<'putDataProtectionPolicy'>>  = async params => {
  // undefined
    return this.client.putDataProtectionPolicy(params as any).promise();
  }

  removePermission: (params: RawParamsFrom<'removePermission'>) => Promise<ReturnTypeFrom<'removePermission'>>  = async params => {
  // undefined
    return this.client.removePermission(params as any).promise();
  }

  setEndpointAttributes: (params: RawParamsFrom<'setEndpointAttributes'>) => Promise<ReturnTypeFrom<'setEndpointAttributes'>>  = async params => {
  // undefined
    return this.client.setEndpointAttributes(params as any).promise();
  }

  setPlatformApplicationAttributes: (params: RawParamsFrom<'setPlatformApplicationAttributes'>) => Promise<ReturnTypeFrom<'setPlatformApplicationAttributes'>>  = async params => {
  // undefined
    return this.client.setPlatformApplicationAttributes(params as any).promise();
  }

  setSMSAttributes: (params: RawParamsFrom<'setSMSAttributes'>) => Promise<ReturnTypeFrom<'setSMSAttributes'>>  = async params => {
  // undefined
    return this.client.setSMSAttributes(params as any).promise();
  }

  setSubscriptionAttributes: (params: RawParamsFrom<'setSubscriptionAttributes'>) => Promise<ReturnTypeFrom<'setSubscriptionAttributes'>>  = async params => {
  // undefined
    return this.client.setSubscriptionAttributes(params as any).promise();
  }

  setTopicAttributes: (params: RawParamsFrom<'setTopicAttributes'>) => Promise<ReturnTypeFrom<'setTopicAttributes'>>  = async params => {
  // undefined
    return this.client.setTopicAttributes(params as any).promise();
  }

  subscribe: (params: RawParamsFrom<'subscribe'>) => Promise<ReturnTypeFrom<'subscribe'>>  = async params => {
  // undefined
    return this.client.subscribe(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  unsubscribe: (params: RawParamsFrom<'unsubscribe'>) => Promise<ReturnTypeFrom<'unsubscribe'>>  = async params => {
  // undefined
    return this.client.unsubscribe(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  verifySMSSandboxPhoneNumber: (params: RawParamsFrom<'verifySMSSandboxPhoneNumber'>) => Promise<ReturnTypeFrom<'verifySMSSandboxPhoneNumber'>>  = async params => {
  // undefined
    return this.client.verifySMSSandboxPhoneNumber(params as any).promise();
  }
  
  static fromClient(client: AWSSNS): SNS {
    return new SNS(client) as any;
  }
  
  static client(options?: AWSSNS.Types.ClientConfiguration): SNS {
    return new SNS(new AWSSNS(options)) as any;
  }
}  
