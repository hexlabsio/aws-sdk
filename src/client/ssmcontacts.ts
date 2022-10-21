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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSSMContacts> = AWSSSMContacts[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SSMContacts {
  private constructor(private readonly client: AWSSSMContacts) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ssm-contacts' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listContacts","listEngagements"] as const;
  
  acceptPage: (params: RawParamsFrom<'acceptPage'>) => Promise<ReturnTypeFrom<'acceptPage'>>  = async params => {
  // undefined
    return this.client.acceptPage(params as any).promise();
  }

  activateContactChannel: (params: RawParamsFrom<'activateContactChannel'>) => Promise<ReturnTypeFrom<'activateContactChannel'>>  = async params => {
  // undefined
    return this.client.activateContactChannel(params as any).promise();
  }

  createContact: (params: RawParamsFrom<'createContact'>) => Promise<ReturnTypeFrom<'createContact'>>  = async params => {
  // undefined
    return this.client.createContact(params as any).promise();
  }

  createContactChannel: (params: RawParamsFrom<'createContactChannel'>) => Promise<ReturnTypeFrom<'createContactChannel'>>  = async params => {
  // undefined
    return this.client.createContactChannel(params as any).promise();
  }

  deactivateContactChannel: (params: RawParamsFrom<'deactivateContactChannel'>) => Promise<ReturnTypeFrom<'deactivateContactChannel'>>  = async params => {
  // undefined
    return this.client.deactivateContactChannel(params as any).promise();
  }

  deleteContact: (params: RawParamsFrom<'deleteContact'>) => Promise<ReturnTypeFrom<'deleteContact'>>  = async params => {
  // undefined
    return this.client.deleteContact(params as any).promise();
  }

  deleteContactChannel: (params: RawParamsFrom<'deleteContactChannel'>) => Promise<ReturnTypeFrom<'deleteContactChannel'>>  = async params => {
  // undefined
    return this.client.deleteContactChannel(params as any).promise();
  }

  describeEngagement: (params: RawParamsFrom<'describeEngagement'>) => Promise<ReturnTypeFrom<'describeEngagement'>>  = async params => {
  // undefined
    return this.client.describeEngagement(params as any).promise();
  }

  describePage: (params: RawParamsFrom<'describePage'>) => Promise<ReturnTypeFrom<'describePage'>>  = async params => {
  // undefined
    return this.client.describePage(params as any).promise();
  }

  getContact: (params: RawParamsFrom<'getContact'>) => Promise<ReturnTypeFrom<'getContact'>>  = async params => {
  // undefined
    return this.client.getContact(params as any).promise();
  }

  getContactChannel: (params: RawParamsFrom<'getContactChannel'>) => Promise<ReturnTypeFrom<'getContactChannel'>>  = async params => {
  // undefined
    return this.client.getContactChannel(params as any).promise();
  }

  getContactPolicy: (params: RawParamsFrom<'getContactPolicy'>) => Promise<ReturnTypeFrom<'getContactPolicy'>>  = async params => {
  // undefined
    return this.client.getContactPolicy(params as any).promise();
  }

  async listContactChannels(params: { [K in keyof ParamsFrom<'listContactChannels', { next?: string, limit?: number }>]: ParamsFrom<'listContactChannels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContactChannels'>]-?: ReturnTypeFrom<'listContactChannels'>[K]}['ContactChannels'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ContactChannels"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContactChannels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listContactChannels' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ContactChannels ?? []) ? (result.ContactChannels ?? []) : [result.ContactChannels]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContacts(params: { [K in keyof ParamsFrom<'listContacts', { next?: string, limit?: number }>]: ParamsFrom<'listContacts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContacts'>]-?: ReturnTypeFrom<'listContacts'>[K]}['Contacts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Contacts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listContacts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listContacts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Contacts ?? []) ? (result.Contacts ?? []) : [result.Contacts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEngagements(params: { [K in keyof ParamsFrom<'listEngagements', { next?: string, limit?: number }>]: ParamsFrom<'listEngagements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEngagements'>]-?: ReturnTypeFrom<'listEngagements'>[K]}['Engagements'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Engagements"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEngagements({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEngagements' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Engagements ?? []) ? (result.Engagements ?? []) : [result.Engagements]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPageReceipts(params: { [K in keyof ParamsFrom<'listPageReceipts', { next?: string, limit?: number }>]: ParamsFrom<'listPageReceipts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPageReceipts'>]-?: ReturnTypeFrom<'listPageReceipts'>[K]}['Receipts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Receipts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPageReceipts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPageReceipts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Receipts ?? []) ? (result.Receipts ?? []) : [result.Receipts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPagesByContact(params: { [K in keyof ParamsFrom<'listPagesByContact', { next?: string, limit?: number }>]: ParamsFrom<'listPagesByContact', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPagesByContact'>]-?: ReturnTypeFrom<'listPagesByContact'>[K]}['Pages'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Pages"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPagesByContact({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPagesByContact' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Pages ?? []) ? (result.Pages ?? []) : [result.Pages]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPagesByEngagement(params: { [K in keyof ParamsFrom<'listPagesByEngagement', { next?: string, limit?: number }>]: ParamsFrom<'listPagesByEngagement', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPagesByEngagement'>]-?: ReturnTypeFrom<'listPagesByEngagement'>[K]}['Pages'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Pages"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPagesByEngagement({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPagesByEngagement' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Pages ?? []) ? (result.Pages ?? []) : [result.Pages]) as any;
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

  putContactPolicy: (params: RawParamsFrom<'putContactPolicy'>) => Promise<ReturnTypeFrom<'putContactPolicy'>>  = async params => {
  // undefined
    return this.client.putContactPolicy(params as any).promise();
  }

  sendActivationCode: (params: RawParamsFrom<'sendActivationCode'>) => Promise<ReturnTypeFrom<'sendActivationCode'>>  = async params => {
  // undefined
    return this.client.sendActivationCode(params as any).promise();
  }

  startEngagement: (params: RawParamsFrom<'startEngagement'>) => Promise<ReturnTypeFrom<'startEngagement'>>  = async params => {
  // undefined
    return this.client.startEngagement(params as any).promise();
  }

  stopEngagement: (params: RawParamsFrom<'stopEngagement'>) => Promise<ReturnTypeFrom<'stopEngagement'>>  = async params => {
  // undefined
    return this.client.stopEngagement(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateContact: (params: RawParamsFrom<'updateContact'>) => Promise<ReturnTypeFrom<'updateContact'>>  = async params => {
  // undefined
    return this.client.updateContact(params as any).promise();
  }

  updateContactChannel: (params: RawParamsFrom<'updateContactChannel'>) => Promise<ReturnTypeFrom<'updateContactChannel'>>  = async params => {
  // undefined
    return this.client.updateContactChannel(params as any).promise();
  }
  
  static fromClient(client: AWSSSMContacts): SSMContacts {
    return new SSMContacts(client) as any;
  }
  
  static client(options?: AWSSSMContacts.Types.ClientConfiguration): SSMContacts {
    return new SSMContacts(new AWSSSMContacts(options)) as any;
  }
}  
