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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSXRay> = AWSXRay[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class XRay {
  private constructor(private readonly client: AWSXRay) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'xray' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["getGroups","getSamplingRules","getSamplingStatisticSummaries"] as const;
  
  async batchGetTraces(params: { [K in keyof ParamsFrom<'batchGetTraces', { next?: string }>]: ParamsFrom<'batchGetTraces', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'batchGetTraces'>]-?: ReturnTypeFrom<'batchGetTraces'>[K]}['Traces'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Traces"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.batchGetTraces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'batchGetTraces' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Traces ?? []) ? (result.Traces ?? []) : [result.Traces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  createSamplingRule: (params: RawParamsFrom<'createSamplingRule'>) => Promise<ReturnTypeFrom<'createSamplingRule'>>  = async params => {
  // undefined
    return this.client.createSamplingRule(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  deleteSamplingRule: (params: RawParamsFrom<'deleteSamplingRule'>) => Promise<ReturnTypeFrom<'deleteSamplingRule'>>  = async params => {
  // undefined
    return this.client.deleteSamplingRule(params as any).promise();
  }

  getEncryptionConfig: (params: RawParamsFrom<'getEncryptionConfig'>) => Promise<ReturnTypeFrom<'getEncryptionConfig'>>  = async params => {
  // undefined
    return this.client.getEncryptionConfig(params as any).promise();
  }

  getGroup: (params: RawParamsFrom<'getGroup'>) => Promise<ReturnTypeFrom<'getGroup'>>  = async params => {
  // undefined
    return this.client.getGroup(params as any).promise();
  }

  async getGroups(params: { [K in keyof ParamsFrom<'getGroups', { next?: string }>]: ParamsFrom<'getGroups', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getGroups'>]-?: ReturnTypeFrom<'getGroups'>[K]}['Groups'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Groups"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Groups ?? []) ? (result.Groups ?? []) : [result.Groups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getInsight: (params: RawParamsFrom<'getInsight'>) => Promise<ReturnTypeFrom<'getInsight'>>  = async params => {
  // undefined
    return this.client.getInsight(params as any).promise();
  }

  getInsightEvents: (params: RawParamsFrom<'getInsightEvents'>) => Promise<ReturnTypeFrom<'getInsightEvents'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getInsightEvents(params as any).promise();
  }

  getInsightImpactGraph: (params: RawParamsFrom<'getInsightImpactGraph'>) => Promise<ReturnTypeFrom<'getInsightImpactGraph'>>  = async params => {
  // undefined
    return this.client.getInsightImpactGraph(params as any).promise();
  }

  getInsightSummaries: (params: RawParamsFrom<'getInsightSummaries'>) => Promise<ReturnTypeFrom<'getInsightSummaries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getInsightSummaries(params as any).promise();
  }

  async getSamplingRules(params: { [K in keyof ParamsFrom<'getSamplingRules', { next?: string }>]: ParamsFrom<'getSamplingRules', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getSamplingRules'>]-?: ReturnTypeFrom<'getSamplingRules'>[K]}['SamplingRuleRecords'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"SamplingRuleRecords"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getSamplingRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getSamplingRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SamplingRuleRecords ?? []) ? (result.SamplingRuleRecords ?? []) : [result.SamplingRuleRecords]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getSamplingStatisticSummaries(params: { [K in keyof ParamsFrom<'getSamplingStatisticSummaries', { next?: string }>]: ParamsFrom<'getSamplingStatisticSummaries', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getSamplingStatisticSummaries'>]-?: ReturnTypeFrom<'getSamplingStatisticSummaries'>[K]}['SamplingStatisticSummaries'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"SamplingStatisticSummaries"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getSamplingStatisticSummaries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getSamplingStatisticSummaries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SamplingStatisticSummaries ?? []) ? (result.SamplingStatisticSummaries ?? []) : [result.SamplingStatisticSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getSamplingTargets: (params: RawParamsFrom<'getSamplingTargets'>) => Promise<ReturnTypeFrom<'getSamplingTargets'>>  = async params => {
  // undefined
    return this.client.getSamplingTargets(params as any).promise();
  }

  async getServiceGraph(params: { [K in keyof ParamsFrom<'getServiceGraph', { next?: string }>]: ParamsFrom<'getServiceGraph', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getServiceGraph'>]-?: ReturnTypeFrom<'getServiceGraph'>[K]}['Services'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Services"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getServiceGraph({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getServiceGraph' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Services ?? []) ? (result.Services ?? []) : [result.Services]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTimeSeriesServiceStatistics(params: { [K in keyof ParamsFrom<'getTimeSeriesServiceStatistics', { next?: string }>]: ParamsFrom<'getTimeSeriesServiceStatistics', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTimeSeriesServiceStatistics'>]-?: ReturnTypeFrom<'getTimeSeriesServiceStatistics'>[K]}['TimeSeriesServiceStatistics'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"TimeSeriesServiceStatistics"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getTimeSeriesServiceStatistics({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTimeSeriesServiceStatistics' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TimeSeriesServiceStatistics ?? []) ? (result.TimeSeriesServiceStatistics ?? []) : [result.TimeSeriesServiceStatistics]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTraceGraph(params: { [K in keyof ParamsFrom<'getTraceGraph', { next?: string }>]: ParamsFrom<'getTraceGraph', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTraceGraph'>]-?: ReturnTypeFrom<'getTraceGraph'>[K]}['Services'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Services"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getTraceGraph({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTraceGraph' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Services ?? []) ? (result.Services ?? []) : [result.Services]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getTraceSummaries(params: { [K in keyof ParamsFrom<'getTraceSummaries', { next?: string }>]: ParamsFrom<'getTraceSummaries', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getTraceSummaries'>]-?: ReturnTypeFrom<'getTraceSummaries'>[K]}['TraceSummaries'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"TraceSummaries"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.getTraceSummaries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getTraceSummaries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TraceSummaries ?? []) ? (result.TraceSummaries ?? []) : [result.TraceSummaries]) as any;
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

  putEncryptionConfig: (params: RawParamsFrom<'putEncryptionConfig'>) => Promise<ReturnTypeFrom<'putEncryptionConfig'>>  = async params => {
  // undefined
    return this.client.putEncryptionConfig(params as any).promise();
  }

  putTelemetryRecords: (params: RawParamsFrom<'putTelemetryRecords'>) => Promise<ReturnTypeFrom<'putTelemetryRecords'>>  = async params => {
  // undefined
    return this.client.putTelemetryRecords(params as any).promise();
  }

  putTraceSegments: (params: RawParamsFrom<'putTraceSegments'>) => Promise<ReturnTypeFrom<'putTraceSegments'>>  = async params => {
  // undefined
    return this.client.putTraceSegments(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateGroup: (params: RawParamsFrom<'updateGroup'>) => Promise<ReturnTypeFrom<'updateGroup'>>  = async params => {
  // undefined
    return this.client.updateGroup(params as any).promise();
  }

  updateSamplingRule: (params: RawParamsFrom<'updateSamplingRule'>) => Promise<ReturnTypeFrom<'updateSamplingRule'>>  = async params => {
  // undefined
    return this.client.updateSamplingRule(params as any).promise();
  }
  
  static fromClient(client: AWSXRay): XRay {
    return new XRay(client) as any;
  }
  
  static client(options?: AWSXRay.Types.ClientConfiguration): XRay {
    return new XRay(new AWSXRay(options)) as any;
  }
}  
