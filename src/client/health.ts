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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSHealth> = AWSHealth[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Health {
  private constructor(private readonly client: AWSHealth) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'health' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeEntityAggregates","describeEventTypes","describeEvents","describeEventsForOrganization"] as const;
  
  async describeAffectedAccountsForOrganization(params: { [K in keyof ParamsFrom<'describeAffectedAccountsForOrganization', { next?: string, limit?: number }>]: ParamsFrom<'describeAffectedAccountsForOrganization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAffectedAccountsForOrganization'>]-?: ReturnTypeFrom<'describeAffectedAccountsForOrganization'>[K]}['affectedAccounts'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"affectedAccounts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAffectedAccountsForOrganization({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeAffectedAccountsForOrganization' })).toString('base64');
    const member = (Array.isArray(result.affectedAccounts ?? []) ? (result.affectedAccounts ?? []) : [result.affectedAccounts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAffectedEntities(params: { [K in keyof ParamsFrom<'describeAffectedEntities', { next?: string, limit?: number }>]: ParamsFrom<'describeAffectedEntities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAffectedEntities'>]-?: ReturnTypeFrom<'describeAffectedEntities'>[K]}['entities'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAffectedEntities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeAffectedEntities' })).toString('base64');
    const member = (Array.isArray(result.entities ?? []) ? (result.entities ?? []) : [result.entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAffectedEntitiesForOrganization(params: { [K in keyof ParamsFrom<'describeAffectedEntitiesForOrganization', { next?: string, limit?: number }>]: ParamsFrom<'describeAffectedEntitiesForOrganization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAffectedEntitiesForOrganization'>]-?: ReturnTypeFrom<'describeAffectedEntitiesForOrganization'>[K]}['entities'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeAffectedEntitiesForOrganization({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeAffectedEntitiesForOrganization' })).toString('base64');
    const member = (Array.isArray(result.entities ?? []) ? (result.entities ?? []) : [result.entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEntityAggregates(params: { [K in keyof ParamsFrom<'describeEntityAggregates', {}>]: ParamsFrom<'describeEntityAggregates', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEntityAggregates'>]-?: ReturnTypeFrom<'describeEntityAggregates'>[K]}['entityAggregates'], undefined>}> {
    // {"resultKey":"entityAggregates"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeEntityAggregates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.entityAggregates ?? []) ? (result.entityAggregates ?? []) : [result.entityAggregates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEventAggregates(params: { [K in keyof ParamsFrom<'describeEventAggregates', { next?: string, limit?: number }>]: ParamsFrom<'describeEventAggregates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEventAggregates'>]-?: ReturnTypeFrom<'describeEventAggregates'>[K]}['eventAggregates'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"eventAggregates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeEventAggregates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeEventAggregates' })).toString('base64');
    const member = (Array.isArray(result.eventAggregates ?? []) ? (result.eventAggregates ?? []) : [result.eventAggregates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeEventDetails: (params: RawParamsFrom<'describeEventDetails'>) => Promise<ReturnTypeFrom<'describeEventDetails'>>  = async params => {
  // undefined
    return this.client.describeEventDetails(params as any).promise();
  }

  describeEventDetailsForOrganization: (params: RawParamsFrom<'describeEventDetailsForOrganization'>) => Promise<ReturnTypeFrom<'describeEventDetailsForOrganization'>>  = async params => {
  // undefined
    return this.client.describeEventDetailsForOrganization(params as any).promise();
  }

  async describeEventTypes(params: { [K in keyof ParamsFrom<'describeEventTypes', { next?: string, limit?: number }>]: ParamsFrom<'describeEventTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEventTypes'>]-?: ReturnTypeFrom<'describeEventTypes'>[K]}['eventTypes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"eventTypes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeEventTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeEventTypes' })).toString('base64');
    const member = (Array.isArray(result.eventTypes ?? []) ? (result.eventTypes ?? []) : [result.eventTypes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvents(params: { [K in keyof ParamsFrom<'describeEvents', { next?: string, limit?: number }>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['events'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeEvents' })).toString('base64');
    const member = (Array.isArray(result.events ?? []) ? (result.events ?? []) : [result.events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEventsForOrganization(params: { [K in keyof ParamsFrom<'describeEventsForOrganization', { next?: string, limit?: number }>]: ParamsFrom<'describeEventsForOrganization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEventsForOrganization'>]-?: ReturnTypeFrom<'describeEventsForOrganization'>[K]}['events'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeEventsForOrganization({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeEventsForOrganization' })).toString('base64');
    const member = (Array.isArray(result.events ?? []) ? (result.events ?? []) : [result.events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeHealthServiceStatusForOrganization: (params: RawParamsFrom<'describeHealthServiceStatusForOrganization'>) => Promise<ReturnTypeFrom<'describeHealthServiceStatusForOrganization'>>  = async params => {
  // undefined
    return this.client.describeHealthServiceStatusForOrganization(params as any).promise();
  }

  disableHealthServiceAccessForOrganization: (params: RawParamsFrom<'disableHealthServiceAccessForOrganization'>) => Promise<ReturnTypeFrom<'disableHealthServiceAccessForOrganization'>>  = async params => {
  // undefined
    return this.client.disableHealthServiceAccessForOrganization(params as any).promise();
  }

  enableHealthServiceAccessForOrganization: (params: RawParamsFrom<'enableHealthServiceAccessForOrganization'>) => Promise<ReturnTypeFrom<'enableHealthServiceAccessForOrganization'>>  = async params => {
  // undefined
    return this.client.enableHealthServiceAccessForOrganization(params as any).promise();
  }
  
  static fromClient(client: AWSHealth): Health {
    return new Health(client) as any;
  }
  
  static client(options?: AWSHealth.Types.ClientConfiguration): Health {
    return new Health(new AWSHealth(options)) as any;
  }
}  
