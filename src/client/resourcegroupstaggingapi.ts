import { Request, ResourceGroupsTaggingAPI as AWSResourceGroupsTaggingAPI } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSResourceGroupsTaggingAPI> = AWSResourceGroupsTaggingAPI[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSResourceGroupsTaggingAPI> = AWSResourceGroupsTaggingAPI[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSResourceGroupsTaggingAPI[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSResourceGroupsTaggingAPI, Extras> = AWSResourceGroupsTaggingAPI[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'tagging';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["getComplianceSummary","getResources","getTagKeys"];
    
  describeReportCreation: FunctionTypeFrom<'describeReportCreation'>;

  getComplianceSummary(params: { [K in keyof Omit<ParamsFrom<'getComplianceSummary', { next?: string, limit?: number }>, 'PaginationToken' | 'MaxResults'>]: ParamsFrom<'getComplianceSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getComplianceSummary'>]-?: ReturnTypeFrom<'getComplianceSummary'>[K]}['SummaryList'] }>
  getComplianceSummary(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getComplianceSummary'>]-?: ReturnTypeFrom<'getComplianceSummary'>[K]}['SummaryList'] }>;

  getResources(params: { [K in keyof Omit<ParamsFrom<'getResources', { next?: string, limit?: number }>, 'PaginationToken' | 'ResourcesPerPage'>]: ParamsFrom<'getResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getResources'>]-?: ReturnTypeFrom<'getResources'>[K]}['ResourceTagMappingList'] }>
  getResources(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getResources'>]-?: ReturnTypeFrom<'getResources'>[K]}['ResourceTagMappingList'] }>;

  getTagKeys(params: { [K in keyof Omit<ParamsFrom<'getTagKeys', { next?: string }>, 'PaginationToken'>]: ParamsFrom<'getTagKeys', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTagKeys'>]-?: ReturnTypeFrom<'getTagKeys'>[K]}['TagKeys'] }>
  getTagKeys(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTagKeys'>]-?: ReturnTypeFrom<'getTagKeys'>[K]}['TagKeys'] }>;

  getTagValues(params: { [K in keyof Omit<ParamsFrom<'getTagValues', { next?: string }>, 'PaginationToken'>]: ParamsFrom<'getTagValues', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTagValues'>]-?: ReturnTypeFrom<'getTagValues'>[K]}['TagValues'] }>
  ;

  startReportCreation: FunctionTypeFrom<'startReportCreation'>;

  tagResources: FunctionTypeFrom<'tagResources'>;

  untagResources: FunctionTypeFrom<'untagResources'>
}
 
export class ResourceGroupsTaggingAPI implements ClientType {
  private constructor(private readonly client: AWSResourceGroupsTaggingAPI) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'tagging';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["getComplianceSummary","getResources","getTagKeys"] as const;
  
  async describeReportCreation(...args: any): Promise<any> {
  // undefined
    return this.client.describeReportCreation(...args).promise()
  }

  async getComplianceSummary(...args: any): Promise<any> {
    // {"inputToken":"PaginationToken","limitKey":"MaxResults","outputToken":"PaginationToken","resultKey":"SummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PaginationToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getComplianceSummary(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.PaginationToken;
    const member = result.SummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getResources(...args: any): Promise<any> {
    // {"inputToken":"PaginationToken","limitKey":"ResourcesPerPage","outputToken":"PaginationToken","resultKey":"ResourceTagMappingList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PaginationToken: next } : {};
    const limitTokenPart = limit ? { ResourcesPerPage: limit } : {};
    const result = await this.client.getResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.PaginationToken;
    const member = result.ResourceTagMappingList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTagKeys(...args: any): Promise<any> {
    // {"inputToken":"PaginationToken","outputToken":"PaginationToken","resultKey":"TagKeys"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PaginationToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getTagKeys(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.PaginationToken;
    const member = result.TagKeys ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTagValues(...args: any): Promise<any> {
    // {"inputToken":"PaginationToken","outputToken":"PaginationToken","resultKey":"TagValues"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PaginationToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getTagValues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.PaginationToken;
    const member = result.TagValues ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startReportCreation(...args: any): Promise<any> {
  // undefined
    return this.client.startReportCreation(...args).promise()
  }

  async tagResources(...args: any): Promise<any> {
  // undefined
    return this.client.tagResources(...args).promise()
  }

  async untagResources(...args: any): Promise<any> {
  // undefined
    return this.client.untagResources(...args).promise()
  }
  
  static fromClient(client: AWSResourceGroupsTaggingAPI): ClientType {
    return new ResourceGroupsTaggingAPI(client) as any;
  }
  
  static client(options?: AWSResourceGroupsTaggingAPI.Types.ClientConfiguration): ClientType {
    return new ResourceGroupsTaggingAPI(new AWSResourceGroupsTaggingAPI(options)) as any;
  }
}  
