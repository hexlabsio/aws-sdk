import { Request, CloudWatchLogs as AWSCloudWatchLogs } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudWatchLogs> = AWSCloudWatchLogs[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudWatchLogs> = AWSCloudWatchLogs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudWatchLogs[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudWatchLogs, Extras> = AWSCloudWatchLogs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudWatchLogs> = AWSCloudWatchLogs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudWatchLogs {
  private constructor(private readonly client: AWSCloudWatchLogs) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'logs' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeDestinations","describeLogGroups","describeMetricFilters"] as const;
  
  associateKmsKey: (params: RawParamsFrom<'associateKmsKey'>) => Promise<ReturnTypeFrom<'associateKmsKey'>>  = async params => {
  // undefined
    return this.client.associateKmsKey(params as any).promise();
  }

  cancelExportTask: (params: RawParamsFrom<'cancelExportTask'>) => Promise<ReturnTypeFrom<'cancelExportTask'>>  = async params => {
  // undefined
    return this.client.cancelExportTask(params as any).promise();
  }

  createExportTask: (params: RawParamsFrom<'createExportTask'>) => Promise<ReturnTypeFrom<'createExportTask'>>  = async params => {
  // undefined
    return this.client.createExportTask(params as any).promise();
  }

  createLogGroup: (params: RawParamsFrom<'createLogGroup'>) => Promise<ReturnTypeFrom<'createLogGroup'>>  = async params => {
  // undefined
    return this.client.createLogGroup(params as any).promise();
  }

  createLogStream: (params: RawParamsFrom<'createLogStream'>) => Promise<ReturnTypeFrom<'createLogStream'>>  = async params => {
  // undefined
    return this.client.createLogStream(params as any).promise();
  }

  deleteDestination: (params: RawParamsFrom<'deleteDestination'>) => Promise<ReturnTypeFrom<'deleteDestination'>>  = async params => {
  // undefined
    return this.client.deleteDestination(params as any).promise();
  }

  deleteLogGroup: (params: RawParamsFrom<'deleteLogGroup'>) => Promise<ReturnTypeFrom<'deleteLogGroup'>>  = async params => {
  // undefined
    return this.client.deleteLogGroup(params as any).promise();
  }

  deleteLogStream: (params: RawParamsFrom<'deleteLogStream'>) => Promise<ReturnTypeFrom<'deleteLogStream'>>  = async params => {
  // undefined
    return this.client.deleteLogStream(params as any).promise();
  }

  deleteMetricFilter: (params: RawParamsFrom<'deleteMetricFilter'>) => Promise<ReturnTypeFrom<'deleteMetricFilter'>>  = async params => {
  // undefined
    return this.client.deleteMetricFilter(params as any).promise();
  }

  deleteQueryDefinition: (params: RawParamsFrom<'deleteQueryDefinition'>) => Promise<ReturnTypeFrom<'deleteQueryDefinition'>>  = async params => {
  // undefined
    return this.client.deleteQueryDefinition(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteRetentionPolicy: (params: RawParamsFrom<'deleteRetentionPolicy'>) => Promise<ReturnTypeFrom<'deleteRetentionPolicy'>>  = async params => {
  // undefined
    return this.client.deleteRetentionPolicy(params as any).promise();
  }

  deleteSubscriptionFilter: (params: RawParamsFrom<'deleteSubscriptionFilter'>) => Promise<ReturnTypeFrom<'deleteSubscriptionFilter'>>  = async params => {
  // undefined
    return this.client.deleteSubscriptionFilter(params as any).promise();
  }

  async describeDestinations(params: { [K in keyof ParamsFrom<'describeDestinations', { next?: string, limit?: number }>]: ParamsFrom<'describeDestinations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDestinations'>]-?: ReturnTypeFrom<'describeDestinations'>[K]}['destinations'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"destinations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeDestinations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeDestinations' })).toString('base64');
    const member = (Array.isArray(result.destinations ?? []) ? (result.destinations ?? []) : [result.destinations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeExportTasks: (params: RawParamsFrom<'describeExportTasks'>) => Promise<ReturnTypeFrom<'describeExportTasks'>>  = async params => {
  // undefined
    return this.client.describeExportTasks(params as any).promise();
  }

  async describeLogGroups(params: { [K in keyof ParamsFrom<'describeLogGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeLogGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLogGroups'>]-?: ReturnTypeFrom<'describeLogGroups'>[K]}['logGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"logGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeLogGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeLogGroups' })).toString('base64');
    const member = (Array.isArray(result.logGroups ?? []) ? (result.logGroups ?? []) : [result.logGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLogStreams(params: { [K in keyof ParamsFrom<'describeLogStreams', { next?: string, limit?: number }>]: ParamsFrom<'describeLogStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLogStreams'>]-?: ReturnTypeFrom<'describeLogStreams'>[K]}['logStreams'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"logStreams"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeLogStreams({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeLogStreams' })).toString('base64');
    const member = (Array.isArray(result.logStreams ?? []) ? (result.logStreams ?? []) : [result.logStreams]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMetricFilters(params: { [K in keyof ParamsFrom<'describeMetricFilters', { next?: string, limit?: number }>]: ParamsFrom<'describeMetricFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMetricFilters'>]-?: ReturnTypeFrom<'describeMetricFilters'>[K]}['metricFilters'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"metricFilters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeMetricFilters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeMetricFilters' })).toString('base64');
    const member = (Array.isArray(result.metricFilters ?? []) ? (result.metricFilters ?? []) : [result.metricFilters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeQueries: (params: RawParamsFrom<'describeQueries'>) => Promise<ReturnTypeFrom<'describeQueries'>>  = async params => {
  // undefined
    return this.client.describeQueries(params as any).promise();
  }

  describeQueryDefinitions: (params: RawParamsFrom<'describeQueryDefinitions'>) => Promise<ReturnTypeFrom<'describeQueryDefinitions'>>  = async params => {
  // undefined
    return this.client.describeQueryDefinitions(params as any).promise();
  }

  describeResourcePolicies: (params: RawParamsFrom<'describeResourcePolicies'>) => Promise<ReturnTypeFrom<'describeResourcePolicies'>>  = async params => {
  // undefined
    return this.client.describeResourcePolicies(params as any).promise();
  }

  async describeSubscriptionFilters(params: { [K in keyof ParamsFrom<'describeSubscriptionFilters', { next?: string, limit?: number }>]: ParamsFrom<'describeSubscriptionFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSubscriptionFilters'>]-?: ReturnTypeFrom<'describeSubscriptionFilters'>[K]}['subscriptionFilters'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"subscriptionFilters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeSubscriptionFilters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeSubscriptionFilters' })).toString('base64');
    const member = (Array.isArray(result.subscriptionFilters ?? []) ? (result.subscriptionFilters ?? []) : [result.subscriptionFilters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disassociateKmsKey: (params: RawParamsFrom<'disassociateKmsKey'>) => Promise<ReturnTypeFrom<'disassociateKmsKey'>>  = async params => {
  // undefined
    return this.client.disassociateKmsKey(params as any).promise();
  }

  filterLogEvents: (params: RawParamsFrom<'filterLogEvents'>) => Promise<ReturnTypeFrom<'filterLogEvents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":["events","searchedLogStreams"]}
    return this.client.filterLogEvents(params as any).promise();
  }

  async getLogEvents(params: { [K in keyof ParamsFrom<'getLogEvents', { next?: string, limit?: number }>]: ParamsFrom<'getLogEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getLogEvents'>]-?: ReturnTypeFrom<'getLogEvents'>[K]}['events'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextForwardToken","resultKey":"events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getLogEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextForwardToken, operation: 'getLogEvents' })).toString('base64');
    const member = (Array.isArray(result.events ?? []) ? (result.events ?? []) : [result.events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getLogGroupFields: (params: RawParamsFrom<'getLogGroupFields'>) => Promise<ReturnTypeFrom<'getLogGroupFields'>>  = async params => {
  // undefined
    return this.client.getLogGroupFields(params as any).promise();
  }

  getLogRecord: (params: RawParamsFrom<'getLogRecord'>) => Promise<ReturnTypeFrom<'getLogRecord'>>  = async params => {
  // undefined
    return this.client.getLogRecord(params as any).promise();
  }

  getQueryResults: (params: RawParamsFrom<'getQueryResults'>) => Promise<ReturnTypeFrom<'getQueryResults'>>  = async params => {
  // undefined
    return this.client.getQueryResults(params as any).promise();
  }

  listTagsLogGroup: (params: RawParamsFrom<'listTagsLogGroup'>) => Promise<ReturnTypeFrom<'listTagsLogGroup'>>  = async params => {
  // undefined
    return this.client.listTagsLogGroup(params as any).promise();
  }

  putDestination: (params: RawParamsFrom<'putDestination'>) => Promise<ReturnTypeFrom<'putDestination'>>  = async params => {
  // undefined
    return this.client.putDestination(params as any).promise();
  }

  putDestinationPolicy: (params: RawParamsFrom<'putDestinationPolicy'>) => Promise<ReturnTypeFrom<'putDestinationPolicy'>>  = async params => {
  // undefined
    return this.client.putDestinationPolicy(params as any).promise();
  }

  putLogEvents: (params: RawParamsFrom<'putLogEvents'>) => Promise<ReturnTypeFrom<'putLogEvents'>>  = async params => {
  // undefined
    return this.client.putLogEvents(params as any).promise();
  }

  putMetricFilter: (params: RawParamsFrom<'putMetricFilter'>) => Promise<ReturnTypeFrom<'putMetricFilter'>>  = async params => {
  // undefined
    return this.client.putMetricFilter(params as any).promise();
  }

  putQueryDefinition: (params: RawParamsFrom<'putQueryDefinition'>) => Promise<ReturnTypeFrom<'putQueryDefinition'>>  = async params => {
  // undefined
    return this.client.putQueryDefinition(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  putRetentionPolicy: (params: RawParamsFrom<'putRetentionPolicy'>) => Promise<ReturnTypeFrom<'putRetentionPolicy'>>  = async params => {
  // undefined
    return this.client.putRetentionPolicy(params as any).promise();
  }

  putSubscriptionFilter: (params: RawParamsFrom<'putSubscriptionFilter'>) => Promise<ReturnTypeFrom<'putSubscriptionFilter'>>  = async params => {
  // undefined
    return this.client.putSubscriptionFilter(params as any).promise();
  }

  startQuery: (params: RawParamsFrom<'startQuery'>) => Promise<ReturnTypeFrom<'startQuery'>>  = async params => {
  // undefined
    return this.client.startQuery(params as any).promise();
  }

  stopQuery: (params: RawParamsFrom<'stopQuery'>) => Promise<ReturnTypeFrom<'stopQuery'>>  = async params => {
  // undefined
    return this.client.stopQuery(params as any).promise();
  }

  tagLogGroup: (params: RawParamsFrom<'tagLogGroup'>) => Promise<ReturnTypeFrom<'tagLogGroup'>>  = async params => {
  // undefined
    return this.client.tagLogGroup(params as any).promise();
  }

  testMetricFilter: (params: RawParamsFrom<'testMetricFilter'>) => Promise<ReturnTypeFrom<'testMetricFilter'>>  = async params => {
  // undefined
    return this.client.testMetricFilter(params as any).promise();
  }

  untagLogGroup: (params: RawParamsFrom<'untagLogGroup'>) => Promise<ReturnTypeFrom<'untagLogGroup'>>  = async params => {
  // undefined
    return this.client.untagLogGroup(params as any).promise();
  }
  
  static fromClient(client: AWSCloudWatchLogs): CloudWatchLogs {
    return new CloudWatchLogs(client) as any;
  }
  
  static client(options?: AWSCloudWatchLogs.Types.ClientConfiguration): CloudWatchLogs {
    return new CloudWatchLogs(new AWSCloudWatchLogs(options)) as any;
  }
}  
