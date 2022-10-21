import { Request, Support as AWSSupport } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSupport> = AWSSupport[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSupport> = AWSSupport[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSupport[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSupport, Extras> = AWSSupport[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSupport> = AWSSupport[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Support {
  private constructor(private readonly client: AWSSupport) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'support' as const;
  public readonly global = false as const;
  public readonly category = 'Customer Engagement' as const;
  public readonly topLevelCalls = ["describeCases","describeServices"] as const;
  
  addAttachmentsToSet: (params: RawParamsFrom<'addAttachmentsToSet'>) => Promise<ReturnTypeFrom<'addAttachmentsToSet'>>  = async params => {
  // undefined
    return this.client.addAttachmentsToSet(params as any).promise();
  }

  addCommunicationToCase: (params: RawParamsFrom<'addCommunicationToCase'>) => Promise<ReturnTypeFrom<'addCommunicationToCase'>>  = async params => {
  // undefined
    return this.client.addCommunicationToCase(params as any).promise();
  }

  createCase: (params: RawParamsFrom<'createCase'>) => Promise<ReturnTypeFrom<'createCase'>>  = async params => {
  // undefined
    return this.client.createCase(params as any).promise();
  }

  describeAttachment: (params: RawParamsFrom<'describeAttachment'>) => Promise<ReturnTypeFrom<'describeAttachment'>>  = async params => {
  // undefined
    return this.client.describeAttachment(params as any).promise();
  }

  async describeCases(params: { [K in keyof ParamsFrom<'describeCases', { next?: string, limit?: number }>]: ParamsFrom<'describeCases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCases'>]-?: ReturnTypeFrom<'describeCases'>[K]}['cases'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"cases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeCases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeCases' })).toString('base64') : undefined;
    const member = (Array.isArray(result.cases ?? []) ? (result.cases ?? []) : [result.cases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCommunications(params: { [K in keyof ParamsFrom<'describeCommunications', { next?: string, limit?: number }>]: ParamsFrom<'describeCommunications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCommunications'>]-?: ReturnTypeFrom<'describeCommunications'>[K]}['communications'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"communications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeCommunications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeCommunications' })).toString('base64') : undefined;
    const member = (Array.isArray(result.communications ?? []) ? (result.communications ?? []) : [result.communications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeServices(params: { [K in keyof ParamsFrom<'describeServices', {}>]: ParamsFrom<'describeServices', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeServices'>]-?: ReturnTypeFrom<'describeServices'>[K]}['services'], undefined>}> {
    // {"resultKey":"services"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeServices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.services ?? []) ? (result.services ?? []) : [result.services]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeSeverityLevels: (params: RawParamsFrom<'describeSeverityLevels'>) => Promise<ReturnTypeFrom<'describeSeverityLevels'>>  = async params => {
  // undefined
    return this.client.describeSeverityLevels(params as any).promise();
  }

  async describeTrustedAdvisorCheckRefreshStatuses(params: { [K in keyof ParamsFrom<'describeTrustedAdvisorCheckRefreshStatuses', {}>]: ParamsFrom<'describeTrustedAdvisorCheckRefreshStatuses', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTrustedAdvisorCheckRefreshStatuses'>]-?: ReturnTypeFrom<'describeTrustedAdvisorCheckRefreshStatuses'>[K]}['statuses'], undefined>}> {
    // {"resultKey":"statuses"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeTrustedAdvisorCheckRefreshStatuses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.statuses ?? []) ? (result.statuses ?? []) : [result.statuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeTrustedAdvisorCheckResult: (params: RawParamsFrom<'describeTrustedAdvisorCheckResult'>) => Promise<ReturnTypeFrom<'describeTrustedAdvisorCheckResult'>>  = async params => {
  // undefined
    return this.client.describeTrustedAdvisorCheckResult(params as any).promise();
  }

  async describeTrustedAdvisorCheckSummaries(params: { [K in keyof ParamsFrom<'describeTrustedAdvisorCheckSummaries', {}>]: ParamsFrom<'describeTrustedAdvisorCheckSummaries', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTrustedAdvisorCheckSummaries'>]-?: ReturnTypeFrom<'describeTrustedAdvisorCheckSummaries'>[K]}['summaries'], undefined>}> {
    // {"resultKey":"summaries"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeTrustedAdvisorCheckSummaries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeTrustedAdvisorChecks: (params: RawParamsFrom<'describeTrustedAdvisorChecks'>) => Promise<ReturnTypeFrom<'describeTrustedAdvisorChecks'>>  = async params => {
  // undefined
    return this.client.describeTrustedAdvisorChecks(params as any).promise();
  }

  refreshTrustedAdvisorCheck: (params: RawParamsFrom<'refreshTrustedAdvisorCheck'>) => Promise<ReturnTypeFrom<'refreshTrustedAdvisorCheck'>>  = async params => {
  // undefined
    return this.client.refreshTrustedAdvisorCheck(params as any).promise();
  }

  resolveCase: (params: RawParamsFrom<'resolveCase'>) => Promise<ReturnTypeFrom<'resolveCase'>>  = async params => {
  // undefined
    return this.client.resolveCase(params as any).promise();
  }
  
  static fromClient(client: AWSSupport): Support {
    return new Support(client) as any;
  }
  
  static client(options?: AWSSupport.Types.ClientConfiguration): Support {
    return new Support(new AWSSupport(options)) as any;
  }
}  
