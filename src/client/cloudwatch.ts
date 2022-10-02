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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'monitoring';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeAlarmHistory","describeAlarms","describeAnomalyDetectors","describeInsightRules","listDashboards","listMetricStreams","listMetrics"];
    
  deleteAlarms: FunctionTypeFrom<'deleteAlarms'>;

  deleteAnomalyDetector: FunctionTypeFrom<'deleteAnomalyDetector'>;

  deleteDashboards: FunctionTypeFrom<'deleteDashboards'>;

  deleteInsightRules: FunctionTypeFrom<'deleteInsightRules'>;

  deleteMetricStream: FunctionTypeFrom<'deleteMetricStream'>;

  describeAlarmHistory(params: { [K in keyof Omit<ParamsFrom<'describeAlarmHistory', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeAlarmHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAlarmHistory'>]-?: ReturnTypeFrom<'describeAlarmHistory'>[K]}['AlarmHistoryItems'] }>
  describeAlarmHistory(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAlarmHistory'>]-?: ReturnTypeFrom<'describeAlarmHistory'>[K]}['AlarmHistoryItems'] }>;

  describeAlarms: FunctionTypeFrom<'describeAlarms'>;

  describeAlarmsForMetric: FunctionTypeFrom<'describeAlarmsForMetric'>;

  describeAnomalyDetectors(params: { [K in keyof Omit<ParamsFrom<'describeAnomalyDetectors', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAnomalyDetectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAnomalyDetectors'>]-?: ReturnTypeFrom<'describeAnomalyDetectors'>[K]}['AnomalyDetectors'] }>
  describeAnomalyDetectors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAnomalyDetectors'>]-?: ReturnTypeFrom<'describeAnomalyDetectors'>[K]}['AnomalyDetectors'] }>;

  describeInsightRules: FunctionTypeFrom<'describeInsightRules'>;

  disableAlarmActions: FunctionTypeFrom<'disableAlarmActions'>;

  disableInsightRules: FunctionTypeFrom<'disableInsightRules'>;

  enableAlarmActions: FunctionTypeFrom<'enableAlarmActions'>;

  enableInsightRules: FunctionTypeFrom<'enableInsightRules'>;

  getDashboard: FunctionTypeFrom<'getDashboard'>;

  getInsightRuleReport: FunctionTypeFrom<'getInsightRuleReport'>;

  getMetricData: FunctionTypeFrom<'getMetricData'>;

  getMetricStatistics: FunctionTypeFrom<'getMetricStatistics'>;

  getMetricStream: FunctionTypeFrom<'getMetricStream'>;

  getMetricWidgetImage: FunctionTypeFrom<'getMetricWidgetImage'>;

  listDashboards(params: { [K in keyof Omit<ParamsFrom<'listDashboards', { next?: string }>, 'NextToken'>]: ParamsFrom<'listDashboards', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDashboards'>]-?: ReturnTypeFrom<'listDashboards'>[K]}['DashboardEntries'] }>
  listDashboards(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDashboards'>]-?: ReturnTypeFrom<'listDashboards'>[K]}['DashboardEntries'] }>;

  listManagedInsightRules: FunctionTypeFrom<'listManagedInsightRules'>;

  listMetricStreams: FunctionTypeFrom<'listMetricStreams'>;

  listMetrics(params: { [K in keyof Omit<ParamsFrom<'listMetrics', { next?: string }>, 'NextToken'>]: ParamsFrom<'listMetrics', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMetrics'>]-?: ReturnTypeFrom<'listMetrics'>[K]}['Metrics'] }>
  listMetrics(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMetrics'>]-?: ReturnTypeFrom<'listMetrics'>[K]}['Metrics'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putAnomalyDetector: FunctionTypeFrom<'putAnomalyDetector'>;

  putCompositeAlarm: FunctionTypeFrom<'putCompositeAlarm'>;

  putDashboard: FunctionTypeFrom<'putDashboard'>;

  putInsightRule: FunctionTypeFrom<'putInsightRule'>;

  putManagedInsightRules: FunctionTypeFrom<'putManagedInsightRules'>;

  putMetricAlarm: FunctionTypeFrom<'putMetricAlarm'>;

  putMetricData: FunctionTypeFrom<'putMetricData'>;

  putMetricStream: FunctionTypeFrom<'putMetricStream'>;

  setAlarmState: FunctionTypeFrom<'setAlarmState'>;

  startMetricStreams: FunctionTypeFrom<'startMetricStreams'>;

  stopMetricStreams: FunctionTypeFrom<'stopMetricStreams'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class CloudWatch implements ClientType {
  private constructor(private readonly client: AWSCloudWatch) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'monitoring';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeAlarmHistory","describeAlarms","describeAnomalyDetectors","describeInsightRules","listDashboards","listMetricStreams","listMetrics"] as const;
  
  async deleteAlarms(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlarms(...args).promise()
  }

  async deleteAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAnomalyDetector(...args).promise()
  }

  async deleteDashboards(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDashboards(...args).promise()
  }

  async deleteInsightRules(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInsightRules(...args).promise()
  }

  async deleteMetricStream(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMetricStream(...args).promise()
  }

  async describeAlarmHistory(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"AlarmHistoryItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeAlarmHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AlarmHistoryItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAlarms(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":["MetricAlarms","CompositeAlarms"]}
    return this.client.describeAlarms(...args).promise()
  }

  async describeAlarmsForMetric(...args: any): Promise<any> {
  // {"resultKey":"MetricAlarms"}
    return this.client.describeAlarmsForMetric(...args).promise()
  }

  async describeAnomalyDetectors(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AnomalyDetectors"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAnomalyDetectors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AnomalyDetectors ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInsightRules(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeInsightRules(...args).promise()
  }

  async disableAlarmActions(...args: any): Promise<any> {
  // undefined
    return this.client.disableAlarmActions(...args).promise()
  }

  async disableInsightRules(...args: any): Promise<any> {
  // undefined
    return this.client.disableInsightRules(...args).promise()
  }

  async enableAlarmActions(...args: any): Promise<any> {
  // undefined
    return this.client.enableAlarmActions(...args).promise()
  }

  async enableInsightRules(...args: any): Promise<any> {
  // undefined
    return this.client.enableInsightRules(...args).promise()
  }

  async getDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.getDashboard(...args).promise()
  }

  async getInsightRuleReport(...args: any): Promise<any> {
  // undefined
    return this.client.getInsightRuleReport(...args).promise()
  }

  async getMetricData(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxDatapoints","outputToken":"NextToken","resultKey":["MetricDataResults","Messages"]}
    return this.client.getMetricData(...args).promise()
  }

  async getMetricStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getMetricStatistics(...args).promise()
  }

  async getMetricStream(...args: any): Promise<any> {
  // undefined
    return this.client.getMetricStream(...args).promise()
  }

  async getMetricWidgetImage(...args: any): Promise<any> {
  // undefined
    return this.client.getMetricWidgetImage(...args).promise()
  }

  async listDashboards(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"DashboardEntries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listDashboards(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DashboardEntries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listManagedInsightRules(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listManagedInsightRules(...args).promise()
  }

  async listMetricStreams(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMetricStreams(...args).promise()
  }

  async listMetrics(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Metrics"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listMetrics(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Metrics ?? [];
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

  async putAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.putAnomalyDetector(...args).promise()
  }

  async putCompositeAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.putCompositeAlarm(...args).promise()
  }

  async putDashboard(...args: any): Promise<any> {
  // undefined
    return this.client.putDashboard(...args).promise()
  }

  async putInsightRule(...args: any): Promise<any> {
  // undefined
    return this.client.putInsightRule(...args).promise()
  }

  async putManagedInsightRules(...args: any): Promise<any> {
  // undefined
    return this.client.putManagedInsightRules(...args).promise()
  }

  async putMetricAlarm(...args: any): Promise<any> {
  // undefined
    return this.client.putMetricAlarm(...args).promise()
  }

  async putMetricData(...args: any): Promise<any> {
  // undefined
    return this.client.putMetricData(...args).promise()
  }

  async putMetricStream(...args: any): Promise<any> {
  // undefined
    return this.client.putMetricStream(...args).promise()
  }

  async setAlarmState(...args: any): Promise<any> {
  // undefined
    return this.client.setAlarmState(...args).promise()
  }

  async startMetricStreams(...args: any): Promise<any> {
  // undefined
    return this.client.startMetricStreams(...args).promise()
  }

  async stopMetricStreams(...args: any): Promise<any> {
  // undefined
    return this.client.stopMetricStreams(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSCloudWatch): ClientType {
    return new CloudWatch(client) as any;
  }
  
  static client(options?: AWSCloudWatch.Types.ClientConfiguration): ClientType {
    return new CloudWatch(new AWSCloudWatch(options)) as any;
  }
}  
