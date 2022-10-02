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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'logs';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeDestinations","describeLogGroups","describeMetricFilters"];
    
  associateKmsKey: FunctionTypeFrom<'associateKmsKey'>;

  cancelExportTask: FunctionTypeFrom<'cancelExportTask'>;

  createExportTask: FunctionTypeFrom<'createExportTask'>;

  createLogGroup: FunctionTypeFrom<'createLogGroup'>;

  createLogStream: FunctionTypeFrom<'createLogStream'>;

  deleteDestination: FunctionTypeFrom<'deleteDestination'>;

  deleteLogGroup: FunctionTypeFrom<'deleteLogGroup'>;

  deleteLogStream: FunctionTypeFrom<'deleteLogStream'>;

  deleteMetricFilter: FunctionTypeFrom<'deleteMetricFilter'>;

  deleteQueryDefinition: FunctionTypeFrom<'deleteQueryDefinition'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteRetentionPolicy: FunctionTypeFrom<'deleteRetentionPolicy'>;

  deleteSubscriptionFilter: FunctionTypeFrom<'deleteSubscriptionFilter'>;

  describeDestinations(params: { [K in keyof Omit<ParamsFrom<'describeDestinations', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'describeDestinations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDestinations'>]-?: ReturnTypeFrom<'describeDestinations'>[K]}['destinations'] }>
  describeDestinations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDestinations'>]-?: ReturnTypeFrom<'describeDestinations'>[K]}['destinations'] }>;

  describeExportTasks: FunctionTypeFrom<'describeExportTasks'>;

  describeLogGroups(params: { [K in keyof Omit<ParamsFrom<'describeLogGroups', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'describeLogGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLogGroups'>]-?: ReturnTypeFrom<'describeLogGroups'>[K]}['logGroups'] }>
  describeLogGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLogGroups'>]-?: ReturnTypeFrom<'describeLogGroups'>[K]}['logGroups'] }>;

  describeLogStreams(params: { [K in keyof Omit<ParamsFrom<'describeLogStreams', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'describeLogStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLogStreams'>]-?: ReturnTypeFrom<'describeLogStreams'>[K]}['logStreams'] }>
  ;

  describeMetricFilters(params: { [K in keyof Omit<ParamsFrom<'describeMetricFilters', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'describeMetricFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMetricFilters'>]-?: ReturnTypeFrom<'describeMetricFilters'>[K]}['metricFilters'] }>
  describeMetricFilters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMetricFilters'>]-?: ReturnTypeFrom<'describeMetricFilters'>[K]}['metricFilters'] }>;

  describeQueries: FunctionTypeFrom<'describeQueries'>;

  describeQueryDefinitions: FunctionTypeFrom<'describeQueryDefinitions'>;

  describeResourcePolicies: FunctionTypeFrom<'describeResourcePolicies'>;

  describeSubscriptionFilters(params: { [K in keyof Omit<ParamsFrom<'describeSubscriptionFilters', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'describeSubscriptionFilters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSubscriptionFilters'>]-?: ReturnTypeFrom<'describeSubscriptionFilters'>[K]}['subscriptionFilters'] }>
  ;

  disassociateKmsKey: FunctionTypeFrom<'disassociateKmsKey'>;

  filterLogEvents: FunctionTypeFrom<'filterLogEvents'>;

  getLogEvents(params: { [K in keyof Omit<ParamsFrom<'getLogEvents', { next?: string, limit?: number }>, 'nextToken' | 'limit'>]: ParamsFrom<'getLogEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getLogEvents'>]-?: ReturnTypeFrom<'getLogEvents'>[K]}['events'] }>
  ;

  getLogGroupFields: FunctionTypeFrom<'getLogGroupFields'>;

  getLogRecord: FunctionTypeFrom<'getLogRecord'>;

  getQueryResults: FunctionTypeFrom<'getQueryResults'>;

  listTagsLogGroup: FunctionTypeFrom<'listTagsLogGroup'>;

  putDestination: FunctionTypeFrom<'putDestination'>;

  putDestinationPolicy: FunctionTypeFrom<'putDestinationPolicy'>;

  putLogEvents: FunctionTypeFrom<'putLogEvents'>;

  putMetricFilter: FunctionTypeFrom<'putMetricFilter'>;

  putQueryDefinition: FunctionTypeFrom<'putQueryDefinition'>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  putRetentionPolicy: FunctionTypeFrom<'putRetentionPolicy'>;

  putSubscriptionFilter: FunctionTypeFrom<'putSubscriptionFilter'>;

  startQuery: FunctionTypeFrom<'startQuery'>;

  stopQuery: FunctionTypeFrom<'stopQuery'>;

  tagLogGroup: FunctionTypeFrom<'tagLogGroup'>;

  testMetricFilter: FunctionTypeFrom<'testMetricFilter'>;

  untagLogGroup: FunctionTypeFrom<'untagLogGroup'>
}
 
export class CloudWatchLogs implements ClientType {
  private constructor(private readonly client: AWSCloudWatchLogs) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'logs';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeDestinations","describeLogGroups","describeMetricFilters"] as const;
  
  async associateKmsKey(...args: any): Promise<any> {
  // undefined
    return this.client.associateKmsKey(...args).promise()
  }

  async cancelExportTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelExportTask(...args).promise()
  }

  async createExportTask(...args: any): Promise<any> {
  // undefined
    return this.client.createExportTask(...args).promise()
  }

  async createLogGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createLogGroup(...args).promise()
  }

  async createLogStream(...args: any): Promise<any> {
  // undefined
    return this.client.createLogStream(...args).promise()
  }

  async deleteDestination(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDestination(...args).promise()
  }

  async deleteLogGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLogGroup(...args).promise()
  }

  async deleteLogStream(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLogStream(...args).promise()
  }

  async deleteMetricFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMetricFilter(...args).promise()
  }

  async deleteQueryDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQueryDefinition(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteRetentionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRetentionPolicy(...args).promise()
  }

  async deleteSubscriptionFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSubscriptionFilter(...args).promise()
  }

  async describeDestinations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"destinations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeDestinations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.destinations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeExportTasks(...args: any): Promise<any> {
  // undefined
    return this.client.describeExportTasks(...args).promise()
  }

  async describeLogGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"logGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeLogGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.logGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLogStreams(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"logStreams"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeLogStreams(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.logStreams ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMetricFilters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"metricFilters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeMetricFilters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.metricFilters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeQueries(...args: any): Promise<any> {
  // undefined
    return this.client.describeQueries(...args).promise()
  }

  async describeQueryDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.describeQueryDefinitions(...args).promise()
  }

  async describeResourcePolicies(...args: any): Promise<any> {
  // undefined
    return this.client.describeResourcePolicies(...args).promise()
  }

  async describeSubscriptionFilters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":"subscriptionFilters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.describeSubscriptionFilters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.subscriptionFilters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disassociateKmsKey(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateKmsKey(...args).promise()
  }

  async filterLogEvents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextToken","resultKey":["events","searchedLogStreams"]}
    return this.client.filterLogEvents(...args).promise()
  }

  async getLogEvents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"limit","outputToken":"nextForwardToken","resultKey":"events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.getLogEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextForwardToken;
    const member = result.events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getLogGroupFields(...args: any): Promise<any> {
  // undefined
    return this.client.getLogGroupFields(...args).promise()
  }

  async getLogRecord(...args: any): Promise<any> {
  // undefined
    return this.client.getLogRecord(...args).promise()
  }

  async getQueryResults(...args: any): Promise<any> {
  // undefined
    return this.client.getQueryResults(...args).promise()
  }

  async listTagsLogGroup(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsLogGroup(...args).promise()
  }

  async putDestination(...args: any): Promise<any> {
  // undefined
    return this.client.putDestination(...args).promise()
  }

  async putDestinationPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putDestinationPolicy(...args).promise()
  }

  async putLogEvents(...args: any): Promise<any> {
  // undefined
    return this.client.putLogEvents(...args).promise()
  }

  async putMetricFilter(...args: any): Promise<any> {
  // undefined
    return this.client.putMetricFilter(...args).promise()
  }

  async putQueryDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.putQueryDefinition(...args).promise()
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async putRetentionPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putRetentionPolicy(...args).promise()
  }

  async putSubscriptionFilter(...args: any): Promise<any> {
  // undefined
    return this.client.putSubscriptionFilter(...args).promise()
  }

  async startQuery(...args: any): Promise<any> {
  // undefined
    return this.client.startQuery(...args).promise()
  }

  async stopQuery(...args: any): Promise<any> {
  // undefined
    return this.client.stopQuery(...args).promise()
  }

  async tagLogGroup(...args: any): Promise<any> {
  // undefined
    return this.client.tagLogGroup(...args).promise()
  }

  async testMetricFilter(...args: any): Promise<any> {
  // undefined
    return this.client.testMetricFilter(...args).promise()
  }

  async untagLogGroup(...args: any): Promise<any> {
  // undefined
    return this.client.untagLogGroup(...args).promise()
  }
  
  static fromClient(client: AWSCloudWatchLogs): ClientType {
    return new CloudWatchLogs(client) as any;
  }
  
  static client(options?: AWSCloudWatchLogs.Types.ClientConfiguration): ClientType {
    return new CloudWatchLogs(new AWSCloudWatchLogs(options)) as any;
  }
}  
