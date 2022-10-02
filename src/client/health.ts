import { Request, Health as AWSHealth } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSHealth> = AWSHealth[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSHealth> = AWSHealth[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSHealth[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSHealth, Extras> = AWSHealth[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'health';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeEntityAggregates","describeEventTypes","describeEvents","describeEventsForOrganization"];
    
  describeAffectedAccountsForOrganization(params: { [K in keyof Omit<ParamsFrom<'describeAffectedAccountsForOrganization', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeAffectedAccountsForOrganization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAffectedAccountsForOrganization'>]-?: ReturnTypeFrom<'describeAffectedAccountsForOrganization'>[K]}['affectedAccounts'] }>
  ;

  describeAffectedEntities(params: { [K in keyof Omit<ParamsFrom<'describeAffectedEntities', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeAffectedEntities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAffectedEntities'>]-?: ReturnTypeFrom<'describeAffectedEntities'>[K]}['entities'] }>
  ;

  describeAffectedEntitiesForOrganization(params: { [K in keyof Omit<ParamsFrom<'describeAffectedEntitiesForOrganization', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeAffectedEntitiesForOrganization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAffectedEntitiesForOrganization'>]-?: ReturnTypeFrom<'describeAffectedEntitiesForOrganization'>[K]}['entities'] }>
  ;

  describeEntityAggregates: FunctionTypeFrom<'describeEntityAggregates'>;

  describeEventAggregates(params: { [K in keyof Omit<ParamsFrom<'describeEventAggregates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeEventAggregates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventAggregates'>]-?: ReturnTypeFrom<'describeEventAggregates'>[K]}['eventAggregates'] }>
  ;

  describeEventDetails: FunctionTypeFrom<'describeEventDetails'>;

  describeEventDetailsForOrganization: FunctionTypeFrom<'describeEventDetailsForOrganization'>;

  describeEventTypes(params: { [K in keyof Omit<ParamsFrom<'describeEventTypes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeEventTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventTypes'>]-?: ReturnTypeFrom<'describeEventTypes'>[K]}['eventTypes'] }>
  describeEventTypes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventTypes'>]-?: ReturnTypeFrom<'describeEventTypes'>[K]}['eventTypes'] }>;

  describeEvents(params: { [K in keyof Omit<ParamsFrom<'describeEvents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['events'] }>
  describeEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['events'] }>;

  describeEventsForOrganization(params: { [K in keyof Omit<ParamsFrom<'describeEventsForOrganization', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeEventsForOrganization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventsForOrganization'>]-?: ReturnTypeFrom<'describeEventsForOrganization'>[K]}['events'] }>
  describeEventsForOrganization(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEventsForOrganization'>]-?: ReturnTypeFrom<'describeEventsForOrganization'>[K]}['events'] }>;

  describeHealthServiceStatusForOrganization: FunctionTypeFrom<'describeHealthServiceStatusForOrganization'>;

  disableHealthServiceAccessForOrganization: FunctionTypeFrom<'disableHealthServiceAccessForOrganization'>;

  enableHealthServiceAccessForOrganization: FunctionTypeFrom<'enableHealthServiceAccessForOrganization'>
}
 
export class Health implements ClientType {
  private constructor(private readonly client: AWSHealth) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'health';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeEntityAggregates","describeEventTypes","describeEvents","describeEventsForOrganization"] as const;
  
  async describeAffectedAccountsForOrganization(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"affectedAccounts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAffectedAccountsForOrganization(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.affectedAccounts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAffectedEntities(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAffectedEntities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAffectedEntitiesForOrganization(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAffectedEntitiesForOrganization(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEntityAggregates(...args: any): Promise<any> {
  // {"resultKey":"entityAggregates"}
    return this.client.describeEntityAggregates(...args).promise()
  }

  async describeEventAggregates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"eventAggregates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeEventAggregates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.eventAggregates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEventDetails(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventDetails(...args).promise()
  }

  async describeEventDetailsForOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventDetailsForOrganization(...args).promise()
  }

  async describeEventTypes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"eventTypes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeEventTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.eventTypes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEventsForOrganization(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeEventsForOrganization(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeHealthServiceStatusForOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.describeHealthServiceStatusForOrganization(...args).promise()
  }

  async disableHealthServiceAccessForOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.disableHealthServiceAccessForOrganization(...args).promise()
  }

  async enableHealthServiceAccessForOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.enableHealthServiceAccessForOrganization(...args).promise()
  }
  
  static fromClient(client: AWSHealth): ClientType {
    return new Health(client) as any;
  }
  
  static client(options?: AWSHealth.Types.ClientConfiguration): ClientType {
    return new Health(new AWSHealth(options)) as any;
  }
}  
