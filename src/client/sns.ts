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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sns';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly ["listOriginationNumbers","listPhoneNumbersOptedOut","listPlatformApplications","listSMSSandboxPhoneNumbers","listSubscriptions","listTopics"];
    
  addPermission: FunctionTypeFrom<'addPermission'>;

  checkIfPhoneNumberIsOptedOut: FunctionTypeFrom<'checkIfPhoneNumberIsOptedOut'>;

  confirmSubscription: FunctionTypeFrom<'confirmSubscription'>;

  createPlatformApplication: FunctionTypeFrom<'createPlatformApplication'>;

  createPlatformEndpoint: FunctionTypeFrom<'createPlatformEndpoint'>;

  createSMSSandboxPhoneNumber: FunctionTypeFrom<'createSMSSandboxPhoneNumber'>;

  createTopic: FunctionTypeFrom<'createTopic'>;

  deleteEndpoint: FunctionTypeFrom<'deleteEndpoint'>;

  deletePlatformApplication: FunctionTypeFrom<'deletePlatformApplication'>;

  deleteSMSSandboxPhoneNumber: FunctionTypeFrom<'deleteSMSSandboxPhoneNumber'>;

  deleteTopic: FunctionTypeFrom<'deleteTopic'>;

  getDataProtectionPolicy: FunctionTypeFrom<'getDataProtectionPolicy'>;

  getEndpointAttributes: FunctionTypeFrom<'getEndpointAttributes'>;

  getPlatformApplicationAttributes: FunctionTypeFrom<'getPlatformApplicationAttributes'>;

  getSMSAttributes: FunctionTypeFrom<'getSMSAttributes'>;

  getSMSSandboxAccountStatus: FunctionTypeFrom<'getSMSSandboxAccountStatus'>;

  getSubscriptionAttributes: FunctionTypeFrom<'getSubscriptionAttributes'>;

  getTopicAttributes: FunctionTypeFrom<'getTopicAttributes'>;

  listEndpointsByPlatformApplication(params: { [K in keyof Omit<ParamsFrom<'listEndpointsByPlatformApplication', { next?: string }>, 'NextToken'>]: ParamsFrom<'listEndpointsByPlatformApplication', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEndpointsByPlatformApplication'>]-?: ReturnTypeFrom<'listEndpointsByPlatformApplication'>[K]}['Endpoints'] }>
  ;

  listOriginationNumbers(params: { [K in keyof Omit<ParamsFrom<'listOriginationNumbers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOriginationNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOriginationNumbers'>]-?: ReturnTypeFrom<'listOriginationNumbers'>[K]}['PhoneNumbers'] }>
  listOriginationNumbers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOriginationNumbers'>]-?: ReturnTypeFrom<'listOriginationNumbers'>[K]}['PhoneNumbers'] }>;

  listPhoneNumbersOptedOut(params: { [K in keyof Omit<ParamsFrom<'listPhoneNumbersOptedOut', { next?: string }>, 'nextToken'>]: ParamsFrom<'listPhoneNumbersOptedOut', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPhoneNumbersOptedOut'>]-?: ReturnTypeFrom<'listPhoneNumbersOptedOut'>[K]}['phoneNumbers'] }>
  listPhoneNumbersOptedOut(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPhoneNumbersOptedOut'>]-?: ReturnTypeFrom<'listPhoneNumbersOptedOut'>[K]}['phoneNumbers'] }>;

  listPlatformApplications(params: { [K in keyof Omit<ParamsFrom<'listPlatformApplications', { next?: string }>, 'NextToken'>]: ParamsFrom<'listPlatformApplications', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlatformApplications'>]-?: ReturnTypeFrom<'listPlatformApplications'>[K]}['PlatformApplications'] }>
  listPlatformApplications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlatformApplications'>]-?: ReturnTypeFrom<'listPlatformApplications'>[K]}['PlatformApplications'] }>;

  listSMSSandboxPhoneNumbers(params: { [K in keyof Omit<ParamsFrom<'listSMSSandboxPhoneNumbers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSMSSandboxPhoneNumbers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSMSSandboxPhoneNumbers'>]-?: ReturnTypeFrom<'listSMSSandboxPhoneNumbers'>[K]}['PhoneNumbers'] }>
  listSMSSandboxPhoneNumbers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSMSSandboxPhoneNumbers'>]-?: ReturnTypeFrom<'listSMSSandboxPhoneNumbers'>[K]}['PhoneNumbers'] }>;

  listSubscriptions(params: { [K in keyof Omit<ParamsFrom<'listSubscriptions', { next?: string }>, 'NextToken'>]: ParamsFrom<'listSubscriptions', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSubscriptions'>]-?: ReturnTypeFrom<'listSubscriptions'>[K]}['Subscriptions'] }>
  listSubscriptions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSubscriptions'>]-?: ReturnTypeFrom<'listSubscriptions'>[K]}['Subscriptions'] }>;

  listSubscriptionsByTopic(params: { [K in keyof Omit<ParamsFrom<'listSubscriptionsByTopic', { next?: string }>, 'NextToken'>]: ParamsFrom<'listSubscriptionsByTopic', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSubscriptionsByTopic'>]-?: ReturnTypeFrom<'listSubscriptionsByTopic'>[K]}['Subscriptions'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTopics(params: { [K in keyof Omit<ParamsFrom<'listTopics', { next?: string }>, 'NextToken'>]: ParamsFrom<'listTopics', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTopics'>]-?: ReturnTypeFrom<'listTopics'>[K]}['Topics'] }>
  listTopics(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTopics'>]-?: ReturnTypeFrom<'listTopics'>[K]}['Topics'] }>;

  optInPhoneNumber: FunctionTypeFrom<'optInPhoneNumber'>;

  publish: FunctionTypeFrom<'publish'>;

  publishBatch: FunctionTypeFrom<'publishBatch'>;

  putDataProtectionPolicy: FunctionTypeFrom<'putDataProtectionPolicy'>;

  removePermission: FunctionTypeFrom<'removePermission'>;

  setEndpointAttributes: FunctionTypeFrom<'setEndpointAttributes'>;

  setPlatformApplicationAttributes: FunctionTypeFrom<'setPlatformApplicationAttributes'>;

  setSMSAttributes: FunctionTypeFrom<'setSMSAttributes'>;

  setSubscriptionAttributes: FunctionTypeFrom<'setSubscriptionAttributes'>;

  setTopicAttributes: FunctionTypeFrom<'setTopicAttributes'>;

  subscribe: FunctionTypeFrom<'subscribe'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  unsubscribe: FunctionTypeFrom<'unsubscribe'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  verifySMSSandboxPhoneNumber: FunctionTypeFrom<'verifySMSSandboxPhoneNumber'>
}
 
export class SNS implements ClientType {
  private constructor(private readonly client: AWSSNS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sns';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = ["listOriginationNumbers","listPhoneNumbersOptedOut","listPlatformApplications","listSMSSandboxPhoneNumbers","listSubscriptions","listTopics"] as const;
  
  async addPermission(...args: any): Promise<any> {
  // undefined
    return this.client.addPermission(...args).promise()
  }

  async checkIfPhoneNumberIsOptedOut(...args: any): Promise<any> {
  // undefined
    return this.client.checkIfPhoneNumberIsOptedOut(...args).promise()
  }

  async confirmSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.confirmSubscription(...args).promise()
  }

  async createPlatformApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createPlatformApplication(...args).promise()
  }

  async createPlatformEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createPlatformEndpoint(...args).promise()
  }

  async createSMSSandboxPhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.createSMSSandboxPhoneNumber(...args).promise()
  }

  async createTopic(...args: any): Promise<any> {
  // undefined
    return this.client.createTopic(...args).promise()
  }

  async deleteEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpoint(...args).promise()
  }

  async deletePlatformApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deletePlatformApplication(...args).promise()
  }

  async deleteSMSSandboxPhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSMSSandboxPhoneNumber(...args).promise()
  }

  async deleteTopic(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTopic(...args).promise()
  }

  async getDataProtectionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getDataProtectionPolicy(...args).promise()
  }

  async getEndpointAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getEndpointAttributes(...args).promise()
  }

  async getPlatformApplicationAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getPlatformApplicationAttributes(...args).promise()
  }

  async getSMSAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getSMSAttributes(...args).promise()
  }

  async getSMSSandboxAccountStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getSMSSandboxAccountStatus(...args).promise()
  }

  async getSubscriptionAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getSubscriptionAttributes(...args).promise()
  }

  async getTopicAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getTopicAttributes(...args).promise()
  }

  async listEndpointsByPlatformApplication(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Endpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listEndpointsByPlatformApplication(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Endpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOriginationNumbers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PhoneNumbers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOriginationNumbers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PhoneNumbers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPhoneNumbersOptedOut(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"phoneNumbers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listPhoneNumbersOptedOut(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.phoneNumbers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPlatformApplications(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"PlatformApplications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listPlatformApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PlatformApplications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSMSSandboxPhoneNumbers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PhoneNumbers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSMSSandboxPhoneNumbers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PhoneNumbers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubscriptions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Subscriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listSubscriptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Subscriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubscriptionsByTopic(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Subscriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listSubscriptionsByTopic(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Subscriptions ?? [];
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

  async listTopics(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Topics"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listTopics(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Topics ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async optInPhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.optInPhoneNumber(...args).promise()
  }

  async publish(...args: any): Promise<any> {
  // undefined
    return this.client.publish(...args).promise()
  }

  async publishBatch(...args: any): Promise<any> {
  // undefined
    return this.client.publishBatch(...args).promise()
  }

  async putDataProtectionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putDataProtectionPolicy(...args).promise()
  }

  async removePermission(...args: any): Promise<any> {
  // undefined
    return this.client.removePermission(...args).promise()
  }

  async setEndpointAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.setEndpointAttributes(...args).promise()
  }

  async setPlatformApplicationAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.setPlatformApplicationAttributes(...args).promise()
  }

  async setSMSAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.setSMSAttributes(...args).promise()
  }

  async setSubscriptionAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.setSubscriptionAttributes(...args).promise()
  }

  async setTopicAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.setTopicAttributes(...args).promise()
  }

  async subscribe(...args: any): Promise<any> {
  // undefined
    return this.client.subscribe(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async unsubscribe(...args: any): Promise<any> {
  // undefined
    return this.client.unsubscribe(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async verifySMSSandboxPhoneNumber(...args: any): Promise<any> {
  // undefined
    return this.client.verifySMSSandboxPhoneNumber(...args).promise()
  }
  
  static fromClient(client: AWSSNS): ClientType {
    return new SNS(client) as any;
  }
  
  static client(options?: AWSSNS.Types.ClientConfiguration): ClientType {
    return new SNS(new AWSSNS(options)) as any;
  }
}  
