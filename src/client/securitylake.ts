import { Request, SecurityLake as AWSSecurityLake } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSecurityLake> = AWSSecurityLake[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSecurityLake> = AWSSecurityLake[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSecurityLake[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSecurityLake, Extras> = AWSSecurityLake[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSecurityLake> = AWSSecurityLake[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SecurityLake {
  private constructor(private readonly client: AWSSecurityLake) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'securitylake' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["getDatalakeStatus","listDatalakeExceptions","listLogSources","listSubscribers"] as const;
  
  createAwsLogSource: (params: RawParamsFrom<'createAwsLogSource'>) => Promise<ReturnTypeFrom<'createAwsLogSource'>>  = async params => {
  // undefined
    return this.client.createAwsLogSource(params as any).promise();
  }

  createCustomLogSource: (params: RawParamsFrom<'createCustomLogSource'>) => Promise<ReturnTypeFrom<'createCustomLogSource'>>  = async params => {
  // undefined
    return this.client.createCustomLogSource(params as any).promise();
  }

  createDatalake: (params: RawParamsFrom<'createDatalake'>) => Promise<ReturnTypeFrom<'createDatalake'>>  = async params => {
  // undefined
    return this.client.createDatalake(params as any).promise();
  }

  createDatalakeAutoEnable: (params: RawParamsFrom<'createDatalakeAutoEnable'>) => Promise<ReturnTypeFrom<'createDatalakeAutoEnable'>>  = async params => {
  // undefined
    return this.client.createDatalakeAutoEnable(params as any).promise();
  }

  createDatalakeDelegatedAdmin: (params: RawParamsFrom<'createDatalakeDelegatedAdmin'>) => Promise<ReturnTypeFrom<'createDatalakeDelegatedAdmin'>>  = async params => {
  // undefined
    return this.client.createDatalakeDelegatedAdmin(params as any).promise();
  }

  createDatalakeExceptionsSubscription: (params: RawParamsFrom<'createDatalakeExceptionsSubscription'>) => Promise<ReturnTypeFrom<'createDatalakeExceptionsSubscription'>>  = async params => {
  // undefined
    return this.client.createDatalakeExceptionsSubscription(params as any).promise();
  }

  createSubscriber: (params: RawParamsFrom<'createSubscriber'>) => Promise<ReturnTypeFrom<'createSubscriber'>>  = async params => {
  // undefined
    return this.client.createSubscriber(params as any).promise();
  }

  createSubscriptionNotificationConfiguration: (params: RawParamsFrom<'createSubscriptionNotificationConfiguration'>) => Promise<ReturnTypeFrom<'createSubscriptionNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.createSubscriptionNotificationConfiguration(params as any).promise();
  }

  deleteAwsLogSource: (params: RawParamsFrom<'deleteAwsLogSource'>) => Promise<ReturnTypeFrom<'deleteAwsLogSource'>>  = async params => {
  // undefined
    return this.client.deleteAwsLogSource(params as any).promise();
  }

  deleteCustomLogSource: (params: RawParamsFrom<'deleteCustomLogSource'>) => Promise<ReturnTypeFrom<'deleteCustomLogSource'>>  = async params => {
  // undefined
    return this.client.deleteCustomLogSource(params as any).promise();
  }

  deleteDatalake: (params: RawParamsFrom<'deleteDatalake'>) => Promise<ReturnTypeFrom<'deleteDatalake'>>  = async params => {
  // undefined
    return this.client.deleteDatalake(params as any).promise();
  }

  deleteDatalakeAutoEnable: (params: RawParamsFrom<'deleteDatalakeAutoEnable'>) => Promise<ReturnTypeFrom<'deleteDatalakeAutoEnable'>>  = async params => {
  // undefined
    return this.client.deleteDatalakeAutoEnable(params as any).promise();
  }

  deleteDatalakeDelegatedAdmin: (params: RawParamsFrom<'deleteDatalakeDelegatedAdmin'>) => Promise<ReturnTypeFrom<'deleteDatalakeDelegatedAdmin'>>  = async params => {
  // undefined
    return this.client.deleteDatalakeDelegatedAdmin(params as any).promise();
  }

  deleteDatalakeExceptionsSubscription: (params: RawParamsFrom<'deleteDatalakeExceptionsSubscription'>) => Promise<ReturnTypeFrom<'deleteDatalakeExceptionsSubscription'>>  = async params => {
  // undefined
    return this.client.deleteDatalakeExceptionsSubscription(params as any).promise();
  }

  deleteSubscriber: (params: RawParamsFrom<'deleteSubscriber'>) => Promise<ReturnTypeFrom<'deleteSubscriber'>>  = async params => {
  // undefined
    return this.client.deleteSubscriber(params as any).promise();
  }

  deleteSubscriptionNotificationConfiguration: (params: RawParamsFrom<'deleteSubscriptionNotificationConfiguration'>) => Promise<ReturnTypeFrom<'deleteSubscriptionNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteSubscriptionNotificationConfiguration(params as any).promise();
  }

  getDatalake: (params: RawParamsFrom<'getDatalake'>) => Promise<ReturnTypeFrom<'getDatalake'>>  = async params => {
  // undefined
    return this.client.getDatalake(params as any).promise();
  }

  getDatalakeAutoEnable: (params: RawParamsFrom<'getDatalakeAutoEnable'>) => Promise<ReturnTypeFrom<'getDatalakeAutoEnable'>>  = async params => {
  // undefined
    return this.client.getDatalakeAutoEnable(params as any).promise();
  }

  getDatalakeExceptionsExpiry: (params: RawParamsFrom<'getDatalakeExceptionsExpiry'>) => Promise<ReturnTypeFrom<'getDatalakeExceptionsExpiry'>>  = async params => {
  // undefined
    return this.client.getDatalakeExceptionsExpiry(params as any).promise();
  }

  getDatalakeExceptionsSubscription: (params: RawParamsFrom<'getDatalakeExceptionsSubscription'>) => Promise<ReturnTypeFrom<'getDatalakeExceptionsSubscription'>>  = async params => {
  // undefined
    return this.client.getDatalakeExceptionsSubscription(params as any).promise();
  }

  async getDatalakeStatus(params: { [K in keyof ParamsFrom<'getDatalakeStatus', { next?: string, limit?: number }>]: ParamsFrom<'getDatalakeStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getDatalakeStatus'>]-?: ReturnTypeFrom<'getDatalakeStatus'>[K]}['accountSourcesList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxAccountResults","outputToken":"nextToken","resultKey":"accountSourcesList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxAccountResults: limit } : {};
    const result = await this.client.getDatalakeStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getDatalakeStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.accountSourcesList ?? []) ? (result.accountSourcesList ?? []) : [result.accountSourcesList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getSubscriber: (params: RawParamsFrom<'getSubscriber'>) => Promise<ReturnTypeFrom<'getSubscriber'>>  = async params => {
  // undefined
    return this.client.getSubscriber(params as any).promise();
  }

  async listDatalakeExceptions(params: { [K in keyof ParamsFrom<'listDatalakeExceptions', { next?: string, limit?: number }>]: ParamsFrom<'listDatalakeExceptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatalakeExceptions'>]-?: ReturnTypeFrom<'listDatalakeExceptions'>[K]}['nonRetryableFailures'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxFailures","outputToken":"nextToken","resultKey":"nonRetryableFailures"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxFailures: limit } : {};
    const result = await this.client.listDatalakeExceptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDatalakeExceptions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.nonRetryableFailures ?? []) ? (result.nonRetryableFailures ?? []) : [result.nonRetryableFailures]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLogSources(params: { [K in keyof ParamsFrom<'listLogSources', { next?: string, limit?: number }>]: ParamsFrom<'listLogSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLogSources'>]-?: ReturnTypeFrom<'listLogSources'>[K]}['regionSourceTypesAccountsList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"regionSourceTypesAccountsList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listLogSources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listLogSources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.regionSourceTypesAccountsList ?? []) ? (result.regionSourceTypesAccountsList ?? []) : [result.regionSourceTypesAccountsList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubscribers(params: { [K in keyof ParamsFrom<'listSubscribers', { next?: string, limit?: number }>]: ParamsFrom<'listSubscribers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSubscribers'>]-?: ReturnTypeFrom<'listSubscribers'>[K]}['subscribers'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"subscribers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSubscribers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSubscribers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.subscribers ?? []) ? (result.subscribers ?? []) : [result.subscribers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  updateDatalake: (params: RawParamsFrom<'updateDatalake'>) => Promise<ReturnTypeFrom<'updateDatalake'>>  = async params => {
  // undefined
    return this.client.updateDatalake(params as any).promise();
  }

  updateDatalakeExceptionsExpiry: (params: RawParamsFrom<'updateDatalakeExceptionsExpiry'>) => Promise<ReturnTypeFrom<'updateDatalakeExceptionsExpiry'>>  = async params => {
  // undefined
    return this.client.updateDatalakeExceptionsExpiry(params as any).promise();
  }

  updateDatalakeExceptionsSubscription: (params: RawParamsFrom<'updateDatalakeExceptionsSubscription'>) => Promise<ReturnTypeFrom<'updateDatalakeExceptionsSubscription'>>  = async params => {
  // undefined
    return this.client.updateDatalakeExceptionsSubscription(params as any).promise();
  }

  updateSubscriber: (params: RawParamsFrom<'updateSubscriber'>) => Promise<ReturnTypeFrom<'updateSubscriber'>>  = async params => {
  // undefined
    return this.client.updateSubscriber(params as any).promise();
  }

  updateSubscriptionNotificationConfiguration: (params: RawParamsFrom<'updateSubscriptionNotificationConfiguration'>) => Promise<ReturnTypeFrom<'updateSubscriptionNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateSubscriptionNotificationConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSSecurityLake): SecurityLake {
    return new SecurityLake(client) as any;
  }
  
  static client(options?: AWSSecurityLake.Types.ClientConfiguration): SecurityLake {
    return new SecurityLake(new AWSSecurityLake(options)) as any;
  }
}  
