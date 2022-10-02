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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codestar-notifications';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listEventTypes","listNotificationRules","listTargets"];
    
  createNotificationRule: FunctionTypeFrom<'createNotificationRule'>;

  deleteNotificationRule: FunctionTypeFrom<'deleteNotificationRule'>;

  deleteTarget: FunctionTypeFrom<'deleteTarget'>;

  describeNotificationRule: FunctionTypeFrom<'describeNotificationRule'>;

  listEventTypes(params: { [K in keyof Omit<ParamsFrom<'listEventTypes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEventTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEventTypes'>]-?: ReturnTypeFrom<'listEventTypes'>[K]}['EventTypes'] }>
  listEventTypes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEventTypes'>]-?: ReturnTypeFrom<'listEventTypes'>[K]}['EventTypes'] }>;

  listNotificationRules(params: { [K in keyof Omit<ParamsFrom<'listNotificationRules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listNotificationRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotificationRules'>]-?: ReturnTypeFrom<'listNotificationRules'>[K]}['NotificationRules'] }>
  listNotificationRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotificationRules'>]-?: ReturnTypeFrom<'listNotificationRules'>[K]}['NotificationRules'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTargets(params: { [K in keyof Omit<ParamsFrom<'listTargets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTargets'>]-?: ReturnTypeFrom<'listTargets'>[K]}['Targets'] }>
  listTargets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTargets'>]-?: ReturnTypeFrom<'listTargets'>[K]}['Targets'] }>;

  subscribe: FunctionTypeFrom<'subscribe'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  unsubscribe: FunctionTypeFrom<'unsubscribe'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateNotificationRule: FunctionTypeFrom<'updateNotificationRule'>
}
 
export class CodeStarNotifications implements ClientType {
  private constructor(private readonly client: AWSCodeStarNotifications) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codestar-notifications';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listEventTypes","listNotificationRules","listTargets"] as const;
  
  async createNotificationRule(...args: any): Promise<any> {
  // undefined
    return this.client.createNotificationRule(...args).promise()
  }

  async deleteNotificationRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNotificationRule(...args).promise()
  }

  async deleteTarget(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTarget(...args).promise()
  }

  async describeNotificationRule(...args: any): Promise<any> {
  // undefined
    return this.client.describeNotificationRule(...args).promise()
  }

  async listEventTypes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EventTypes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEventTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EventTypes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNotificationRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"NotificationRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listNotificationRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.NotificationRules ?? [];
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

  async listTargets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Targets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTargets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Targets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  async updateNotificationRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateNotificationRule(...args).promise()
  }
  
  static fromClient(client: AWSCodeStarNotifications): ClientType {
    return new CodeStarNotifications(client) as any;
  }
  
  static client(options?: AWSCodeStarNotifications.Types.ClientConfiguration): ClientType {
    return new CodeStarNotifications(new AWSCodeStarNotifications(options)) as any;
  }
}  
