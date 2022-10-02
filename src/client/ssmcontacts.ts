import { Request, SSMContacts as AWSSSMContacts } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSSMContacts> = AWSSSMContacts[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSSMContacts> = AWSSSMContacts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSSMContacts[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSSMContacts, Extras> = AWSSSMContacts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ssm-contacts';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listContacts","listEngagements"];
    
  acceptPage: FunctionTypeFrom<'acceptPage'>;

  activateContactChannel: FunctionTypeFrom<'activateContactChannel'>;

  createContact: FunctionTypeFrom<'createContact'>;

  createContactChannel: FunctionTypeFrom<'createContactChannel'>;

  deactivateContactChannel: FunctionTypeFrom<'deactivateContactChannel'>;

  deleteContact: FunctionTypeFrom<'deleteContact'>;

  deleteContactChannel: FunctionTypeFrom<'deleteContactChannel'>;

  describeEngagement: FunctionTypeFrom<'describeEngagement'>;

  describePage: FunctionTypeFrom<'describePage'>;

  getContact: FunctionTypeFrom<'getContact'>;

  getContactChannel: FunctionTypeFrom<'getContactChannel'>;

  getContactPolicy: FunctionTypeFrom<'getContactPolicy'>;

  listContactChannels(params: { [K in keyof Omit<ParamsFrom<'listContactChannels', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listContactChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContactChannels'>]-?: ReturnTypeFrom<'listContactChannels'>[K]}['ContactChannels'] }>
  ;

  listContacts(params: { [K in keyof Omit<ParamsFrom<'listContacts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listContacts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContacts'>]-?: ReturnTypeFrom<'listContacts'>[K]}['Contacts'] }>
  listContacts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContacts'>]-?: ReturnTypeFrom<'listContacts'>[K]}['Contacts'] }>;

  listEngagements(params: { [K in keyof Omit<ParamsFrom<'listEngagements', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEngagements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEngagements'>]-?: ReturnTypeFrom<'listEngagements'>[K]}['Engagements'] }>
  listEngagements(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEngagements'>]-?: ReturnTypeFrom<'listEngagements'>[K]}['Engagements'] }>;

  listPageReceipts(params: { [K in keyof Omit<ParamsFrom<'listPageReceipts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPageReceipts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPageReceipts'>]-?: ReturnTypeFrom<'listPageReceipts'>[K]}['Receipts'] }>
  ;

  listPagesByContact(params: { [K in keyof Omit<ParamsFrom<'listPagesByContact', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPagesByContact', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPagesByContact'>]-?: ReturnTypeFrom<'listPagesByContact'>[K]}['Pages'] }>
  ;

  listPagesByEngagement(params: { [K in keyof Omit<ParamsFrom<'listPagesByEngagement', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPagesByEngagement', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPagesByEngagement'>]-?: ReturnTypeFrom<'listPagesByEngagement'>[K]}['Pages'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putContactPolicy: FunctionTypeFrom<'putContactPolicy'>;

  sendActivationCode: FunctionTypeFrom<'sendActivationCode'>;

  startEngagement: FunctionTypeFrom<'startEngagement'>;

  stopEngagement: FunctionTypeFrom<'stopEngagement'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateContact: FunctionTypeFrom<'updateContact'>;

  updateContactChannel: FunctionTypeFrom<'updateContactChannel'>
}
 
export class SSMContacts implements ClientType {
  private constructor(private readonly client: AWSSSMContacts) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ssm-contacts';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listContacts","listEngagements"] as const;
  
  async acceptPage(...args: any): Promise<any> {
  // undefined
    return this.client.acceptPage(...args).promise()
  }

  async activateContactChannel(...args: any): Promise<any> {
  // undefined
    return this.client.activateContactChannel(...args).promise()
  }

  async createContact(...args: any): Promise<any> {
  // undefined
    return this.client.createContact(...args).promise()
  }

  async createContactChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createContactChannel(...args).promise()
  }

  async deactivateContactChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deactivateContactChannel(...args).promise()
  }

  async deleteContact(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContact(...args).promise()
  }

  async deleteContactChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContactChannel(...args).promise()
  }

  async describeEngagement(...args: any): Promise<any> {
  // undefined
    return this.client.describeEngagement(...args).promise()
  }

  async describePage(...args: any): Promise<any> {
  // undefined
    return this.client.describePage(...args).promise()
  }

  async getContact(...args: any): Promise<any> {
  // undefined
    return this.client.getContact(...args).promise()
  }

  async getContactChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getContactChannel(...args).promise()
  }

  async getContactPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getContactPolicy(...args).promise()
  }

  async listContactChannels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ContactChannels"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContactChannels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ContactChannels ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContacts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Contacts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContacts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Contacts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEngagements(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Engagements"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEngagements(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Engagements ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPageReceipts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Receipts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPageReceipts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Receipts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPagesByContact(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Pages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPagesByContact(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Pages ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPagesByEngagement(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Pages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPagesByEngagement(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Pages ?? [];
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

  async putContactPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putContactPolicy(...args).promise()
  }

  async sendActivationCode(...args: any): Promise<any> {
  // undefined
    return this.client.sendActivationCode(...args).promise()
  }

  async startEngagement(...args: any): Promise<any> {
  // undefined
    return this.client.startEngagement(...args).promise()
  }

  async stopEngagement(...args: any): Promise<any> {
  // undefined
    return this.client.stopEngagement(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateContact(...args: any): Promise<any> {
  // undefined
    return this.client.updateContact(...args).promise()
  }

  async updateContactChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateContactChannel(...args).promise()
  }
  
  static fromClient(client: AWSSSMContacts): ClientType {
    return new SSMContacts(client) as any;
  }
  
  static client(options?: AWSSSMContacts.Types.ClientConfiguration): ClientType {
    return new SSMContacts(new AWSSSMContacts(options)) as any;
  }
}  
