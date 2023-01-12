import { Request, RUM as AWSRUM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRUM> = AWSRUM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRUM> = AWSRUM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRUM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRUM, Extras> = AWSRUM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRUM> = AWSRUM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class RUM {
  private constructor(private readonly client: AWSRUM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rum' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAppMonitors"] as const;
  
  batchCreateRumMetricDefinitions: (params: RawParamsFrom<'batchCreateRumMetricDefinitions'>) => Promise<ReturnTypeFrom<'batchCreateRumMetricDefinitions'>>  = async params => {
  // undefined
    return this.client.batchCreateRumMetricDefinitions(params as any).promise();
  }

  batchDeleteRumMetricDefinitions: (params: RawParamsFrom<'batchDeleteRumMetricDefinitions'>) => Promise<ReturnTypeFrom<'batchDeleteRumMetricDefinitions'>>  = async params => {
  // undefined
    return this.client.batchDeleteRumMetricDefinitions(params as any).promise();
  }

  async batchGetRumMetricDefinitions(params: { [K in keyof ParamsFrom<'batchGetRumMetricDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'batchGetRumMetricDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'batchGetRumMetricDefinitions'>]-?: ReturnTypeFrom<'batchGetRumMetricDefinitions'>[K]}['MetricDefinitions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MetricDefinitions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.batchGetRumMetricDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'batchGetRumMetricDefinitions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.MetricDefinitions ?? []) ? (result.MetricDefinitions ?? []) : [result.MetricDefinitions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  createAppMonitor: (params: RawParamsFrom<'createAppMonitor'>) => Promise<ReturnTypeFrom<'createAppMonitor'>>  = async params => {
  // undefined
    return this.client.createAppMonitor(params as any).promise();
  }

  deleteAppMonitor: (params: RawParamsFrom<'deleteAppMonitor'>) => Promise<ReturnTypeFrom<'deleteAppMonitor'>>  = async params => {
  // undefined
    return this.client.deleteAppMonitor(params as any).promise();
  }

  deleteRumMetricsDestination: (params: RawParamsFrom<'deleteRumMetricsDestination'>) => Promise<ReturnTypeFrom<'deleteRumMetricsDestination'>>  = async params => {
  // undefined
    return this.client.deleteRumMetricsDestination(params as any).promise();
  }

  getAppMonitor: (params: RawParamsFrom<'getAppMonitor'>) => Promise<ReturnTypeFrom<'getAppMonitor'>>  = async params => {
  // undefined
    return this.client.getAppMonitor(params as any).promise();
  }

  async getAppMonitorData(params: { [K in keyof ParamsFrom<'getAppMonitorData', { next?: string, limit?: number }>]: ParamsFrom<'getAppMonitorData', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getAppMonitorData'>]-?: ReturnTypeFrom<'getAppMonitorData'>[K]}['Events'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getAppMonitorData({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getAppMonitorData' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAppMonitors(params: { [K in keyof ParamsFrom<'listAppMonitors', { next?: string, limit?: number }>]: ParamsFrom<'listAppMonitors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAppMonitors'>]-?: ReturnTypeFrom<'listAppMonitors'>[K]}['AppMonitorSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AppMonitorSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAppMonitors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAppMonitors' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AppMonitorSummaries ?? []) ? (result.AppMonitorSummaries ?? []) : [result.AppMonitorSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRumMetricsDestinations(params: { [K in keyof ParamsFrom<'listRumMetricsDestinations', { next?: string, limit?: number }>]: ParamsFrom<'listRumMetricsDestinations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRumMetricsDestinations'>]-?: ReturnTypeFrom<'listRumMetricsDestinations'>[K]}['Destinations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Destinations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRumMetricsDestinations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRumMetricsDestinations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Destinations ?? []) ? (result.Destinations ?? []) : [result.Destinations]) as any;
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

  putRumEvents: (params: RawParamsFrom<'putRumEvents'>) => Promise<ReturnTypeFrom<'putRumEvents'>>  = async params => {
  // undefined
    return this.client.putRumEvents(params as any).promise();
  }

  putRumMetricsDestination: (params: RawParamsFrom<'putRumMetricsDestination'>) => Promise<ReturnTypeFrom<'putRumMetricsDestination'>>  = async params => {
  // undefined
    return this.client.putRumMetricsDestination(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAppMonitor: (params: RawParamsFrom<'updateAppMonitor'>) => Promise<ReturnTypeFrom<'updateAppMonitor'>>  = async params => {
  // undefined
    return this.client.updateAppMonitor(params as any).promise();
  }

  updateRumMetricDefinition: (params: RawParamsFrom<'updateRumMetricDefinition'>) => Promise<ReturnTypeFrom<'updateRumMetricDefinition'>>  = async params => {
  // undefined
    return this.client.updateRumMetricDefinition(params as any).promise();
  }
  
  static fromClient(client: AWSRUM): RUM {
    return new RUM(client) as any;
  }
  
  static client(options?: AWSRUM.Types.ClientConfiguration): RUM {
    return new RUM(new AWSRUM(options)) as any;
  }
}  
