import { Request, DevOpsGuru as AWSDevOpsGuru } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDevOpsGuru> = AWSDevOpsGuru[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDevOpsGuru> = AWSDevOpsGuru[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDevOpsGuru[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDevOpsGuru, Extras> = AWSDevOpsGuru[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'devops-guru';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["getCostEstimation","listNotificationChannels"];
    
  addNotificationChannel: FunctionTypeFrom<'addNotificationChannel'>;

  deleteInsight: FunctionTypeFrom<'deleteInsight'>;

  describeAccountHealth: FunctionTypeFrom<'describeAccountHealth'>;

  describeAccountOverview: FunctionTypeFrom<'describeAccountOverview'>;

  describeAnomaly: FunctionTypeFrom<'describeAnomaly'>;

  describeEventSourcesConfig: FunctionTypeFrom<'describeEventSourcesConfig'>;

  describeFeedback: FunctionTypeFrom<'describeFeedback'>;

  describeInsight: FunctionTypeFrom<'describeInsight'>;

  describeOrganizationHealth: FunctionTypeFrom<'describeOrganizationHealth'>;

  describeOrganizationOverview: FunctionTypeFrom<'describeOrganizationOverview'>;

  describeOrganizationResourceCollectionHealth: FunctionTypeFrom<'describeOrganizationResourceCollectionHealth'>;

  describeResourceCollectionHealth: FunctionTypeFrom<'describeResourceCollectionHealth'>;

  describeServiceIntegration: FunctionTypeFrom<'describeServiceIntegration'>;

  getCostEstimation: FunctionTypeFrom<'getCostEstimation'>;

  getResourceCollection: FunctionTypeFrom<'getResourceCollection'>;

  listAnomaliesForInsight: FunctionTypeFrom<'listAnomaliesForInsight'>;

  listAnomalousLogGroups: FunctionTypeFrom<'listAnomalousLogGroups'>;

  listEvents(params: { [K in keyof Omit<ParamsFrom<'listEvents', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEvents'>]-?: ReturnTypeFrom<'listEvents'>[K]}['Events'] }>
  ;

  listInsights: FunctionTypeFrom<'listInsights'>;

  listMonitoredResources: FunctionTypeFrom<'listMonitoredResources'>;

  listNotificationChannels(params: { [K in keyof Omit<ParamsFrom<'listNotificationChannels', { next?: string }>, 'NextToken'>]: ParamsFrom<'listNotificationChannels', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotificationChannels'>]-?: ReturnTypeFrom<'listNotificationChannels'>[K]}['Channels'] }>
  listNotificationChannels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listNotificationChannels'>]-?: ReturnTypeFrom<'listNotificationChannels'>[K]}['Channels'] }>;

  listOrganizationInsights: FunctionTypeFrom<'listOrganizationInsights'>;

  listRecommendations(params: { [K in keyof Omit<ParamsFrom<'listRecommendations', { next?: string }>, 'NextToken'>]: ParamsFrom<'listRecommendations', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecommendations'>]-?: ReturnTypeFrom<'listRecommendations'>[K]}['Recommendations'] }>
  ;

  putFeedback: FunctionTypeFrom<'putFeedback'>;

  removeNotificationChannel: FunctionTypeFrom<'removeNotificationChannel'>;

  searchInsights: FunctionTypeFrom<'searchInsights'>;

  searchOrganizationInsights: FunctionTypeFrom<'searchOrganizationInsights'>;

  startCostEstimation: FunctionTypeFrom<'startCostEstimation'>;

  updateEventSourcesConfig: FunctionTypeFrom<'updateEventSourcesConfig'>;

  updateResourceCollection: FunctionTypeFrom<'updateResourceCollection'>;

  updateServiceIntegration: FunctionTypeFrom<'updateServiceIntegration'>
}
 
export class DevOpsGuru implements ClientType {
  private constructor(private readonly client: AWSDevOpsGuru) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'devops-guru';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["getCostEstimation","listNotificationChannels"] as const;
  
  async addNotificationChannel(...args: any): Promise<any> {
  // undefined
    return this.client.addNotificationChannel(...args).promise()
  }

  async deleteInsight(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInsight(...args).promise()
  }

  async describeAccountHealth(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountHealth(...args).promise()
  }

  async describeAccountOverview(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountOverview(...args).promise()
  }

  async describeAnomaly(...args: any): Promise<any> {
  // undefined
    return this.client.describeAnomaly(...args).promise()
  }

  async describeEventSourcesConfig(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventSourcesConfig(...args).promise()
  }

  async describeFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.describeFeedback(...args).promise()
  }

  async describeInsight(...args: any): Promise<any> {
  // undefined
    return this.client.describeInsight(...args).promise()
  }

  async describeOrganizationHealth(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganizationHealth(...args).promise()
  }

  async describeOrganizationOverview(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganizationOverview(...args).promise()
  }

  async describeOrganizationResourceCollectionHealth(...args: any): Promise<any> {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["CloudFormation","Account","Service","Tags"]}
    return this.client.describeOrganizationResourceCollectionHealth(...args).promise()
  }

  async describeResourceCollectionHealth(...args: any): Promise<any> {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["CloudFormation","Service","Tags"]}
    return this.client.describeResourceCollectionHealth(...args).promise()
  }

  async describeServiceIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.describeServiceIntegration(...args).promise()
  }

  async getCostEstimation(...args: any): Promise<any> {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["Costs"]}
    return this.client.getCostEstimation(...args).promise()
  }

  async getResourceCollection(...args: any): Promise<any> {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["ResourceCollection.CloudFormation.StackNames","ResourceCollection.Tags"]}
    return this.client.getResourceCollection(...args).promise()
  }

  async listAnomaliesForInsight(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ReactiveAnomalies","ProactiveAnomalies"]}
    return this.client.listAnomaliesForInsight(...args).promise()
  }

  async listAnomalousLogGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["InsightId","AnomalousLogGroups"]}
    return this.client.listAnomalousLogGroups(...args).promise()
  }

  async listEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInsights(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ProactiveInsights","ReactiveInsights"]}
    return this.client.listInsights(...args).promise()
  }

  async listMonitoredResources(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["MonitoredResourceIdentifiers"]}
    return this.client.listMonitoredResources(...args).promise()
  }

  async listNotificationChannels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Channels"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listNotificationChannels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Channels ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOrganizationInsights(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ProactiveInsights","ReactiveInsights"]}
    return this.client.listOrganizationInsights(...args).promise()
  }

  async listRecommendations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Recommendations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listRecommendations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Recommendations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.putFeedback(...args).promise()
  }

  async removeNotificationChannel(...args: any): Promise<any> {
  // undefined
    return this.client.removeNotificationChannel(...args).promise()
  }

  async searchInsights(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ProactiveInsights","ReactiveInsights"]}
    return this.client.searchInsights(...args).promise()
  }

  async searchOrganizationInsights(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ProactiveInsights","ReactiveInsights"]}
    return this.client.searchOrganizationInsights(...args).promise()
  }

  async startCostEstimation(...args: any): Promise<any> {
  // undefined
    return this.client.startCostEstimation(...args).promise()
  }

  async updateEventSourcesConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventSourcesConfig(...args).promise()
  }

  async updateResourceCollection(...args: any): Promise<any> {
  // undefined
    return this.client.updateResourceCollection(...args).promise()
  }

  async updateServiceIntegration(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceIntegration(...args).promise()
  }
  
  static fromClient(client: AWSDevOpsGuru): ClientType {
    return new DevOpsGuru(client) as any;
  }
  
  static client(options?: AWSDevOpsGuru.Types.ClientConfiguration): ClientType {
    return new DevOpsGuru(new AWSDevOpsGuru(options)) as any;
  }
}  
