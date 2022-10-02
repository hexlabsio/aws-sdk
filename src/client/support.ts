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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'support';
    global: false;
    category: 'Customer Engagement'
    topLevelCalls: readonly ["describeCases","describeServices"];
    
  addAttachmentsToSet: FunctionTypeFrom<'addAttachmentsToSet'>;

  addCommunicationToCase: FunctionTypeFrom<'addCommunicationToCase'>;

  createCase: FunctionTypeFrom<'createCase'>;

  describeAttachment: FunctionTypeFrom<'describeAttachment'>;

  describeCases(params: { [K in keyof Omit<ParamsFrom<'describeCases', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeCases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCases'>]-?: ReturnTypeFrom<'describeCases'>[K]}['cases'] }>
  describeCases(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCases'>]-?: ReturnTypeFrom<'describeCases'>[K]}['cases'] }>;

  describeCommunications(params: { [K in keyof Omit<ParamsFrom<'describeCommunications', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeCommunications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeCommunications'>]-?: ReturnTypeFrom<'describeCommunications'>[K]}['communications'] }>
  ;

  describeServices: FunctionTypeFrom<'describeServices'>;

  describeSeverityLevels: FunctionTypeFrom<'describeSeverityLevels'>;

  describeTrustedAdvisorCheckRefreshStatuses: FunctionTypeFrom<'describeTrustedAdvisorCheckRefreshStatuses'>;

  describeTrustedAdvisorCheckResult: FunctionTypeFrom<'describeTrustedAdvisorCheckResult'>;

  describeTrustedAdvisorCheckSummaries: FunctionTypeFrom<'describeTrustedAdvisorCheckSummaries'>;

  describeTrustedAdvisorChecks: FunctionTypeFrom<'describeTrustedAdvisorChecks'>;

  refreshTrustedAdvisorCheck: FunctionTypeFrom<'refreshTrustedAdvisorCheck'>;

  resolveCase: FunctionTypeFrom<'resolveCase'>
}
 
export class Support implements ClientType {
  private constructor(private readonly client: AWSSupport) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'support';
  public readonly global = false;
  public readonly category = 'Customer Engagement';
  public readonly topLevelCalls = ["describeCases","describeServices"] as const;
  
  async addAttachmentsToSet(...args: any): Promise<any> {
  // undefined
    return this.client.addAttachmentsToSet(...args).promise()
  }

  async addCommunicationToCase(...args: any): Promise<any> {
  // undefined
    return this.client.addCommunicationToCase(...args).promise()
  }

  async createCase(...args: any): Promise<any> {
  // undefined
    return this.client.createCase(...args).promise()
  }

  async describeAttachment(...args: any): Promise<any> {
  // undefined
    return this.client.describeAttachment(...args).promise()
  }

  async describeCases(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"cases"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeCases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.cases ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeCommunications(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"communications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeCommunications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.communications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeServices(...args: any): Promise<any> {
  // {"resultKey":"services"}
    return this.client.describeServices(...args).promise()
  }

  async describeSeverityLevels(...args: any): Promise<any> {
  // undefined
    return this.client.describeSeverityLevels(...args).promise()
  }

  async describeTrustedAdvisorCheckRefreshStatuses(...args: any): Promise<any> {
  // {"resultKey":"statuses"}
    return this.client.describeTrustedAdvisorCheckRefreshStatuses(...args).promise()
  }

  async describeTrustedAdvisorCheckResult(...args: any): Promise<any> {
  // undefined
    return this.client.describeTrustedAdvisorCheckResult(...args).promise()
  }

  async describeTrustedAdvisorCheckSummaries(...args: any): Promise<any> {
  // {"resultKey":"summaries"}
    return this.client.describeTrustedAdvisorCheckSummaries(...args).promise()
  }

  async describeTrustedAdvisorChecks(...args: any): Promise<any> {
  // undefined
    return this.client.describeTrustedAdvisorChecks(...args).promise()
  }

  async refreshTrustedAdvisorCheck(...args: any): Promise<any> {
  // undefined
    return this.client.refreshTrustedAdvisorCheck(...args).promise()
  }

  async resolveCase(...args: any): Promise<any> {
  // undefined
    return this.client.resolveCase(...args).promise()
  }
  
  static fromClient(client: AWSSupport): ClientType {
    return new Support(client) as any;
  }
  
  static client(options?: AWSSupport.Types.ClientConfiguration): ClientType {
    return new Support(new AWSSupport(options)) as any;
  }
}  
