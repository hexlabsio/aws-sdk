import { Request, CodeStarNotifications as AWSCodeStarNotifications } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeStarNotifications> = AWSCodeStarNotifications[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeStarNotifications> = AWSCodeStarNotifications[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeStarNotifications[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeStarNotifications, Extras> = AWSCodeStarNotifications[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeStarNotifications> = AWSCodeStarNotifications[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeStarNotifications {
  private constructor(private readonly client: AWSCodeStarNotifications) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codestar-notifications' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listEventTypes","listNotificationRules","listTargets"] as const;
  
  createNotificationRule: (params: RawParamsFrom<'createNotificationRule'>) => Promise<ReturnTypeFrom<'createNotificationRule'>>  = async params => {
  // undefined
    return this.client.createNotificationRule(params as any).promise();
  }

  deleteNotificationRule: (params: RawParamsFrom<'deleteNotificationRule'>) => Promise<ReturnTypeFrom<'deleteNotificationRule'>>  = async params => {
  // undefined
    return this.client.deleteNotificationRule(params as any).promise();
  }

  deleteTarget: (params: RawParamsFrom<'deleteTarget'>) => Promise<ReturnTypeFrom<'deleteTarget'>>  = async params => {
  // undefined
    return this.client.deleteTarget(params as any).promise();
  }

  describeNotificationRule: (params: RawParamsFrom<'describeNotificationRule'>) => Promise<ReturnTypeFrom<'describeNotificationRule'>>  = async params => {
  // undefined
    return this.client.describeNotificationRule(params as any).promise();
  }

  async listEventTypes(params: { [K in keyof ParamsFrom<'listEventTypes', { next?: string, limit?: number }>]: ParamsFrom<'listEventTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEventTypes'>]-?: ReturnTypeFrom<'listEventTypes'>[K]}['EventTypes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EventTypes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEventTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEventTypes' })).toString('base64');
    const member = (Array.isArray(result.EventTypes ?? []) ? (result.EventTypes ?? []) : [result.EventTypes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNotificationRules(params: { [K in keyof ParamsFrom<'listNotificationRules', { next?: string, limit?: number }>]: ParamsFrom<'listNotificationRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNotificationRules'>]-?: ReturnTypeFrom<'listNotificationRules'>[K]}['NotificationRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NotificationRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNotificationRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listNotificationRules' })).toString('base64');
    const member = (Array.isArray(result.NotificationRules ?? []) ? (result.NotificationRules ?? []) : [result.NotificationRules]) as any;
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

  async listTargets(params: { [K in keyof ParamsFrom<'listTargets', { next?: string, limit?: number }>]: ParamsFrom<'listTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTargets'>]-?: ReturnTypeFrom<'listTargets'>[K]}['Targets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Targets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTargets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTargets' })).toString('base64');
    const member = (Array.isArray(result.Targets ?? []) ? (result.Targets ?? []) : [result.Targets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  updateNotificationRule: (params: RawParamsFrom<'updateNotificationRule'>) => Promise<ReturnTypeFrom<'updateNotificationRule'>>  = async params => {
  // undefined
    return this.client.updateNotificationRule(params as any).promise();
  }
  
  static fromClient(client: AWSCodeStarNotifications): CodeStarNotifications {
    return new CodeStarNotifications(client) as any;
  }
  
  static client(options?: AWSCodeStarNotifications.Types.ClientConfiguration): CodeStarNotifications {
    return new CodeStarNotifications(new AWSCodeStarNotifications(options)) as any;
  }
}  
