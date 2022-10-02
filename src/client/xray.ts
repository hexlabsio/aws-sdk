import { Request, XRay as AWSXRay } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSXRay> = AWSXRay[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSXRay> = AWSXRay[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSXRay[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSXRay, Extras> = AWSXRay[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'xray';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["getGroups","getSamplingRules","getSamplingStatisticSummaries"];
    
  batchGetTraces(params: { [K in keyof Omit<ParamsFrom<'batchGetTraces', { next?: string }>, 'NextToken'>]: ParamsFrom<'batchGetTraces', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'batchGetTraces'>]-?: ReturnTypeFrom<'batchGetTraces'>[K]}['Traces'] }>
  ;

  createGroup: FunctionTypeFrom<'createGroup'>;

  createSamplingRule: FunctionTypeFrom<'createSamplingRule'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  deleteSamplingRule: FunctionTypeFrom<'deleteSamplingRule'>;

  getEncryptionConfig: FunctionTypeFrom<'getEncryptionConfig'>;

  getGroup: FunctionTypeFrom<'getGroup'>;

  getGroups(params: { [K in keyof Omit<ParamsFrom<'getGroups', { next?: string }>, 'NextToken'>]: ParamsFrom<'getGroups', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getGroups'>]-?: ReturnTypeFrom<'getGroups'>[K]}['Groups'] }>
  getGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getGroups'>]-?: ReturnTypeFrom<'getGroups'>[K]}['Groups'] }>;

  getInsight: FunctionTypeFrom<'getInsight'>;

  getInsightEvents: FunctionTypeFrom<'getInsightEvents'>;

  getInsightImpactGraph: FunctionTypeFrom<'getInsightImpactGraph'>;

  getInsightSummaries: FunctionTypeFrom<'getInsightSummaries'>;

  getSamplingRules(params: { [K in keyof Omit<ParamsFrom<'getSamplingRules', { next?: string }>, 'NextToken'>]: ParamsFrom<'getSamplingRules', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSamplingRules'>]-?: ReturnTypeFrom<'getSamplingRules'>[K]}['SamplingRuleRecords'] }>
  getSamplingRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSamplingRules'>]-?: ReturnTypeFrom<'getSamplingRules'>[K]}['SamplingRuleRecords'] }>;

  getSamplingStatisticSummaries(params: { [K in keyof Omit<ParamsFrom<'getSamplingStatisticSummaries', { next?: string }>, 'NextToken'>]: ParamsFrom<'getSamplingStatisticSummaries', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSamplingStatisticSummaries'>]-?: ReturnTypeFrom<'getSamplingStatisticSummaries'>[K]}['SamplingStatisticSummaries'] }>
  getSamplingStatisticSummaries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSamplingStatisticSummaries'>]-?: ReturnTypeFrom<'getSamplingStatisticSummaries'>[K]}['SamplingStatisticSummaries'] }>;

  getSamplingTargets: FunctionTypeFrom<'getSamplingTargets'>;

  getServiceGraph(params: { [K in keyof Omit<ParamsFrom<'getServiceGraph', { next?: string }>, 'NextToken'>]: ParamsFrom<'getServiceGraph', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getServiceGraph'>]-?: ReturnTypeFrom<'getServiceGraph'>[K]}['Services'] }>
  ;

  getTimeSeriesServiceStatistics(params: { [K in keyof Omit<ParamsFrom<'getTimeSeriesServiceStatistics', { next?: string }>, 'NextToken'>]: ParamsFrom<'getTimeSeriesServiceStatistics', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTimeSeriesServiceStatistics'>]-?: ReturnTypeFrom<'getTimeSeriesServiceStatistics'>[K]}['TimeSeriesServiceStatistics'] }>
  ;

  getTraceGraph(params: { [K in keyof Omit<ParamsFrom<'getTraceGraph', { next?: string }>, 'NextToken'>]: ParamsFrom<'getTraceGraph', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTraceGraph'>]-?: ReturnTypeFrom<'getTraceGraph'>[K]}['Services'] }>
  ;

  getTraceSummaries(params: { [K in keyof Omit<ParamsFrom<'getTraceSummaries', { next?: string }>, 'NextToken'>]: ParamsFrom<'getTraceSummaries', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getTraceSummaries'>]-?: ReturnTypeFrom<'getTraceSummaries'>[K]}['TraceSummaries'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putEncryptionConfig: FunctionTypeFrom<'putEncryptionConfig'>;

  putTelemetryRecords: FunctionTypeFrom<'putTelemetryRecords'>;

  putTraceSegments: FunctionTypeFrom<'putTraceSegments'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateGroup: FunctionTypeFrom<'updateGroup'>;

  updateSamplingRule: FunctionTypeFrom<'updateSamplingRule'>
}
 
export class XRay implements ClientType {
  private constructor(private readonly client: AWSXRay) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'xray';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["getGroups","getSamplingRules","getSamplingStatisticSummaries"] as const;
  
  async batchGetTraces(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Traces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.batchGetTraces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Traces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async createSamplingRule(...args: any): Promise<any> {
  // undefined
    return this.client.createSamplingRule(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async deleteSamplingRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSamplingRule(...args).promise()
  }

  async getEncryptionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getEncryptionConfig(...args).promise()
  }

  async getGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getGroup(...args).promise()
  }

  async getGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Groups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Groups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getInsight(...args: any): Promise<any> {
  // undefined
    return this.client.getInsight(...args).promise()
  }

  async getInsightEvents(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getInsightEvents(...args).promise()
  }

  async getInsightImpactGraph(...args: any): Promise<any> {
  // undefined
    return this.client.getInsightImpactGraph(...args).promise()
  }

  async getInsightSummaries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getInsightSummaries(...args).promise()
  }

  async getSamplingRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"SamplingRuleRecords"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getSamplingRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SamplingRuleRecords ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getSamplingStatisticSummaries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"SamplingStatisticSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getSamplingStatisticSummaries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SamplingStatisticSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getSamplingTargets(...args: any): Promise<any> {
  // undefined
    return this.client.getSamplingTargets(...args).promise()
  }

  async getServiceGraph(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Services"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getServiceGraph(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Services ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTimeSeriesServiceStatistics(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"TimeSeriesServiceStatistics"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getTimeSeriesServiceStatistics(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TimeSeriesServiceStatistics ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTraceGraph(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Services"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getTraceGraph(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Services ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTraceSummaries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"TraceSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.getTraceSummaries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TraceSummaries ?? [];
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

  async putEncryptionConfig(...args: any): Promise<any> {
  // undefined
    return this.client.putEncryptionConfig(...args).promise()
  }

  async putTelemetryRecords(...args: any): Promise<any> {
  // undefined
    return this.client.putTelemetryRecords(...args).promise()
  }

  async putTraceSegments(...args: any): Promise<any> {
  // undefined
    return this.client.putTraceSegments(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroup(...args).promise()
  }

  async updateSamplingRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateSamplingRule(...args).promise()
  }
  
  static fromClient(client: AWSXRay): ClientType {
    return new XRay(client) as any;
  }
  
  static client(options?: AWSXRay.Types.ClientConfiguration): ClientType {
    return new XRay(new AWSXRay(options)) as any;
  }
}  
