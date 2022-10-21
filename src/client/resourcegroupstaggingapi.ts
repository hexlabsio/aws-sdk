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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSResourceGroupsTaggingAPI> = AWSResourceGroupsTaggingAPI[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ResourceGroupsTaggingAPI {
  private constructor(private readonly client: AWSResourceGroupsTaggingAPI) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'tagging' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["getComplianceSummary","getResources","getTagKeys"] as const;
  
  describeReportCreation: (params: RawParamsFrom<'describeReportCreation'>) => Promise<ReturnTypeFrom<'describeReportCreation'>>  = async params => {
  // undefined
    return this.client.describeReportCreation(params as any).promise();
  }

  async getComplianceSummary(params: { [K in keyof ParamsFrom<'getComplianceSummary', { next?: string, limit?: number }>]: ParamsFrom<'getComplianceSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getComplianceSummary'>]-?: ReturnTypeFrom<'getComplianceSummary'>[K]}['SummaryList'], undefined>}> {
    // {"inputToken":"PaginationToken","limitKey":"MaxResults","outputToken":"PaginationToken","resultKey":"SummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PaginationToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getComplianceSummary({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.PaginationToken ? Buffer.from(JSON.stringify({ token: result.PaginationToken, operation: 'getComplianceSummary' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SummaryList ?? []) ? (result.SummaryList ?? []) : [result.SummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getResources(params: { [K in keyof ParamsFrom<'getResources', { next?: string, limit?: number }>]: ParamsFrom<'getResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getResources'>]-?: ReturnTypeFrom<'getResources'>[K]}['ResourceTagMappingList'], undefined>}> {
    // {"inputToken":"PaginationToken","limitKey":"ResourcesPerPage","outputToken":"PaginationToken","resultKey":"ResourceTagMappingList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PaginationToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { ResourcesPerPage: limit } : {};
    const result = await this.client.getResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.PaginationToken ? Buffer.from(JSON.stringify({ token: result.PaginationToken, operation: 'getResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ResourceTagMappingList ?? []) ? (result.ResourceTagMappingList ?? []) : [result.ResourceTagMappingList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTagKeys(params: { [K in keyof ParamsFrom<'getTagKeys', { next?: string }>]: ParamsFrom<'getTagKeys', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTagKeys'>]-?: ReturnTypeFrom<'getTagKeys'>[K]}['TagKeys'], undefined>}> {
    // {"inputToken":"PaginationToken","outputToken":"PaginationToken","resultKey":"TagKeys"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PaginationToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getTagKeys({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.PaginationToken ? Buffer.from(JSON.stringify({ token: result.PaginationToken, operation: 'getTagKeys' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TagKeys ?? []) ? (result.TagKeys ?? []) : [result.TagKeys]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTagValues(params: { [K in keyof ParamsFrom<'getTagValues', { next?: string }>]: ParamsFrom<'getTagValues', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTagValues'>]-?: ReturnTypeFrom<'getTagValues'>[K]}['TagValues'], undefined>}> {
    // {"inputToken":"PaginationToken","outputToken":"PaginationToken","resultKey":"TagValues"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PaginationToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getTagValues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.PaginationToken ? Buffer.from(JSON.stringify({ token: result.PaginationToken, operation: 'getTagValues' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TagValues ?? []) ? (result.TagValues ?? []) : [result.TagValues]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startReportCreation: (params: RawParamsFrom<'startReportCreation'>) => Promise<ReturnTypeFrom<'startReportCreation'>>  = async params => {
  // undefined
    return this.client.startReportCreation(params as any).promise();
  }

  tagResources: (params: RawParamsFrom<'tagResources'>) => Promise<ReturnTypeFrom<'tagResources'>>  = async params => {
  // undefined
    return this.client.tagResources(params as any).promise();
  }

  untagResources: (params: RawParamsFrom<'untagResources'>) => Promise<ReturnTypeFrom<'untagResources'>>  = async params => {
  // undefined
    return this.client.untagResources(params as any).promise();
  }
  
  static fromClient(client: AWSResourceGroupsTaggingAPI): ResourceGroupsTaggingAPI {
    return new ResourceGroupsTaggingAPI(client) as any;
  }
  
  static client(options?: AWSResourceGroupsTaggingAPI.Types.ClientConfiguration): ResourceGroupsTaggingAPI {
    return new ResourceGroupsTaggingAPI(new AWSResourceGroupsTaggingAPI(options)) as any;
  }
}  
