import { Request, CloudWatch as AWSCloudWatch } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudWatch> = AWSCloudWatch[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudWatch> = AWSCloudWatch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudWatch[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudWatch, Extras> = AWSCloudWatch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudWatch> = AWSCloudWatch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudWatch {
  private constructor(private readonly client: AWSCloudWatch) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'monitoring' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeAlarmHistory","describeAlarms","describeAnomalyDetectors","describeInsightRules","listDashboards","listMetricStreams","listMetrics"] as const;
  
  deleteAlarms: (params: RawParamsFrom<'deleteAlarms'>) => Promise<ReturnTypeFrom<'deleteAlarms'>>  = async params => {
  // undefined
    return this.client.deleteAlarms(params as any).promise();
  }

  deleteAnomalyDetector: (params: RawParamsFrom<'deleteAnomalyDetector'>) => Promise<ReturnTypeFrom<'deleteAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.deleteAnomalyDetector(params as any).promise();
  }

  deleteDashboards: (params: RawParamsFrom<'deleteDashboards'>) => Promise<ReturnTypeFrom<'deleteDashboards'>>  = async params => {
  // undefined
    return this.client.deleteDashboards(params as any).promise();
  }

  deleteInsightRules: (params: RawParamsFrom<'deleteInsightRules'>) => Promise<ReturnTypeFrom<'deleteInsightRules'>>  = async params => {
  // undefined
    return this.client.deleteInsightRules(params as any).promise();
  }

  deleteMetricStream: (params: RawParamsFrom<'deleteMetricStream'>) => Promise<ReturnTypeFrom<'deleteMetricStream'>>  = async params => {
  // undefined
    return this.client.deleteMetricStream(params as any).promise();
  }

  async describeAlarmHistory(params: { [K in keyof ParamsFrom<'describeAlarmHistory', { next?: string, limit?: number }>]: ParamsFrom<'describeAlarmHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAlarmHistory'>]-?: ReturnTypeFrom<'describeAlarmHistory'>[K]}['AlarmHistoryItems'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"AlarmHistoryItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeAlarmHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAlarmHistory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AlarmHistoryItems ?? []) ? (result.AlarmHistoryItems ?? []) : [result.AlarmHistoryItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeAlarms: (params: RawParamsFrom<'describeAlarms'>) => Promise<ReturnTypeFrom<'describeAlarms'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":["MetricAlarms","CompositeAlarms"]}
    return this.client.describeAlarms(params as any).promise();
  }

  async describeAlarmsForMetric(params: { [K in keyof ParamsFrom<'describeAlarmsForMetric', {}>]: ParamsFrom<'describeAlarmsForMetric', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAlarmsForMetric'>]-?: ReturnTypeFrom<'describeAlarmsForMetric'>[K]}['MetricAlarms'], undefined>}> {
    // {"resultKey":"MetricAlarms"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeAlarmsForMetric({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.MetricAlarms ?? []) ? (result.MetricAlarms ?? []) : [result.MetricAlarms]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAnomalyDetectors(params: { [K in keyof ParamsFrom<'describeAnomalyDetectors', { next?: string, limit?: number }>]: ParamsFrom<'describeAnomalyDetectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAnomalyDetectors'>]-?: ReturnTypeFrom<'describeAnomalyDetectors'>[K]}['AnomalyDetectors'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AnomalyDetectors"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAnomalyDetectors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAnomalyDetectors' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AnomalyDetectors ?? []) ? (result.AnomalyDetectors ?? []) : [result.AnomalyDetectors]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeInsightRules: (params: RawParamsFrom<'describeInsightRules'>) => Promise<ReturnTypeFrom<'describeInsightRules'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeInsightRules(params as any).promise();
  }

  disableAlarmActions: (params: RawParamsFrom<'disableAlarmActions'>) => Promise<ReturnTypeFrom<'disableAlarmActions'>>  = async params => {
  // undefined
    return this.client.disableAlarmActions(params as any).promise();
  }

  disableInsightRules: (params: RawParamsFrom<'disableInsightRules'>) => Promise<ReturnTypeFrom<'disableInsightRules'>>  = async params => {
  // undefined
    return this.client.disableInsightRules(params as any).promise();
  }

  enableAlarmActions: (params: RawParamsFrom<'enableAlarmActions'>) => Promise<ReturnTypeFrom<'enableAlarmActions'>>  = async params => {
  // undefined
    return this.client.enableAlarmActions(params as any).promise();
  }

  enableInsightRules: (params: RawParamsFrom<'enableInsightRules'>) => Promise<ReturnTypeFrom<'enableInsightRules'>>  = async params => {
  // undefined
    return this.client.enableInsightRules(params as any).promise();
  }

  getDashboard: (params: RawParamsFrom<'getDashboard'>) => Promise<ReturnTypeFrom<'getDashboard'>>  = async params => {
  // undefined
    return this.client.getDashboard(params as any).promise();
  }

  getInsightRuleReport: (params: RawParamsFrom<'getInsightRuleReport'>) => Promise<ReturnTypeFrom<'getInsightRuleReport'>>  = async params => {
  // undefined
    return this.client.getInsightRuleReport(params as any).promise();
  }

  getMetricData: (params: RawParamsFrom<'getMetricData'>) => Promise<ReturnTypeFrom<'getMetricData'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxDatapoints","outputToken":"NextToken","resultKey":["MetricDataResults","Messages"]}
    return this.client.getMetricData(params as any).promise();
  }

  getMetricStatistics: (params: RawParamsFrom<'getMetricStatistics'>) => Promise<ReturnTypeFrom<'getMetricStatistics'>>  = async params => {
  // undefined
    return this.client.getMetricStatistics(params as any).promise();
  }

  getMetricStream: (params: RawParamsFrom<'getMetricStream'>) => Promise<ReturnTypeFrom<'getMetricStream'>>  = async params => {
  // undefined
    return this.client.getMetricStream(params as any).promise();
  }

  getMetricWidgetImage: (params: RawParamsFrom<'getMetricWidgetImage'>) => Promise<ReturnTypeFrom<'getMetricWidgetImage'>>  = async params => {
  // undefined
    return this.client.getMetricWidgetImage(params as any).promise();
  }

  async listDashboards(params: { [K in keyof ParamsFrom<'listDashboards', { next?: string }>]: ParamsFrom<'listDashboards', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDashboards'>]-?: ReturnTypeFrom<'listDashboards'>[K]}['DashboardEntries'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"DashboardEntries"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listDashboards({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDashboards' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DashboardEntries ?? []) ? (result.DashboardEntries ?? []) : [result.DashboardEntries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listManagedInsightRules: (params: RawParamsFrom<'listManagedInsightRules'>) => Promise<ReturnTypeFrom<'listManagedInsightRules'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listManagedInsightRules(params as any).promise();
  }

  listMetricStreams: (params: RawParamsFrom<'listMetricStreams'>) => Promise<ReturnTypeFrom<'listMetricStreams'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMetricStreams(params as any).promise();
  }

  listMetrics: (params: RawParamsFrom<'listMetrics'>) => Promise<ReturnTypeFrom<'listMetrics'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["Metrics","OwningAccounts"]}
    return this.client.listMetrics(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putAnomalyDetector: (params: RawParamsFrom<'putAnomalyDetector'>) => Promise<ReturnTypeFrom<'putAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.putAnomalyDetector(params as any).promise();
  }

  putCompositeAlarm: (params: RawParamsFrom<'putCompositeAlarm'>) => Promise<ReturnTypeFrom<'putCompositeAlarm'>>  = async params => {
  // undefined
    return this.client.putCompositeAlarm(params as any).promise();
  }

  putDashboard: (params: RawParamsFrom<'putDashboard'>) => Promise<ReturnTypeFrom<'putDashboard'>>  = async params => {
  // undefined
    return this.client.putDashboard(params as any).promise();
  }

  putInsightRule: (params: RawParamsFrom<'putInsightRule'>) => Promise<ReturnTypeFrom<'putInsightRule'>>  = async params => {
  // undefined
    return this.client.putInsightRule(params as any).promise();
  }

  putManagedInsightRules: (params: RawParamsFrom<'putManagedInsightRules'>) => Promise<ReturnTypeFrom<'putManagedInsightRules'>>  = async params => {
  // undefined
    return this.client.putManagedInsightRules(params as any).promise();
  }

  putMetricAlarm: (params: RawParamsFrom<'putMetricAlarm'>) => Promise<ReturnTypeFrom<'putMetricAlarm'>>  = async params => {
  // undefined
    return this.client.putMetricAlarm(params as any).promise();
  }

  putMetricData: (params: RawParamsFrom<'putMetricData'>) => Promise<ReturnTypeFrom<'putMetricData'>>  = async params => {
  // undefined
    return this.client.putMetricData(params as any).promise();
  }

  putMetricStream: (params: RawParamsFrom<'putMetricStream'>) => Promise<ReturnTypeFrom<'putMetricStream'>>  = async params => {
  // undefined
    return this.client.putMetricStream(params as any).promise();
  }

  setAlarmState: (params: RawParamsFrom<'setAlarmState'>) => Promise<ReturnTypeFrom<'setAlarmState'>>  = async params => {
  // undefined
    return this.client.setAlarmState(params as any).promise();
  }

  startMetricStreams: (params: RawParamsFrom<'startMetricStreams'>) => Promise<ReturnTypeFrom<'startMetricStreams'>>  = async params => {
  // undefined
    return this.client.startMetricStreams(params as any).promise();
  }

  stopMetricStreams: (params: RawParamsFrom<'stopMetricStreams'>) => Promise<ReturnTypeFrom<'stopMetricStreams'>>  = async params => {
  // undefined
    return this.client.stopMetricStreams(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSCloudWatch): CloudWatch {
    return new CloudWatch(client) as any;
  }
  
  static client(options?: AWSCloudWatch.Types.ClientConfiguration): CloudWatch {
    return new CloudWatch(new AWSCloudWatch(options)) as any;
  }
}  
