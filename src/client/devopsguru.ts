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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDevOpsGuru> = AWSDevOpsGuru[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DevOpsGuru {
  private constructor(private readonly client: AWSDevOpsGuru) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'devops-guru' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["getCostEstimation","listNotificationChannels"] as const;
  
  addNotificationChannel: (params: RawParamsFrom<'addNotificationChannel'>) => Promise<ReturnTypeFrom<'addNotificationChannel'>>  = async params => {
  // undefined
    return this.client.addNotificationChannel(params as any).promise();
  }

  deleteInsight: (params: RawParamsFrom<'deleteInsight'>) => Promise<ReturnTypeFrom<'deleteInsight'>>  = async params => {
  // undefined
    return this.client.deleteInsight(params as any).promise();
  }

  describeAccountHealth: (params: RawParamsFrom<'describeAccountHealth'>) => Promise<ReturnTypeFrom<'describeAccountHealth'>>  = async params => {
  // undefined
    return this.client.describeAccountHealth(params as any).promise();
  }

  describeAccountOverview: (params: RawParamsFrom<'describeAccountOverview'>) => Promise<ReturnTypeFrom<'describeAccountOverview'>>  = async params => {
  // undefined
    return this.client.describeAccountOverview(params as any).promise();
  }

  describeAnomaly: (params: RawParamsFrom<'describeAnomaly'>) => Promise<ReturnTypeFrom<'describeAnomaly'>>  = async params => {
  // undefined
    return this.client.describeAnomaly(params as any).promise();
  }

  describeEventSourcesConfig: (params: RawParamsFrom<'describeEventSourcesConfig'>) => Promise<ReturnTypeFrom<'describeEventSourcesConfig'>>  = async params => {
  // undefined
    return this.client.describeEventSourcesConfig(params as any).promise();
  }

  describeFeedback: (params: RawParamsFrom<'describeFeedback'>) => Promise<ReturnTypeFrom<'describeFeedback'>>  = async params => {
  // undefined
    return this.client.describeFeedback(params as any).promise();
  }

  describeInsight: (params: RawParamsFrom<'describeInsight'>) => Promise<ReturnTypeFrom<'describeInsight'>>  = async params => {
  // undefined
    return this.client.describeInsight(params as any).promise();
  }

  describeOrganizationHealth: (params: RawParamsFrom<'describeOrganizationHealth'>) => Promise<ReturnTypeFrom<'describeOrganizationHealth'>>  = async params => {
  // undefined
    return this.client.describeOrganizationHealth(params as any).promise();
  }

  describeOrganizationOverview: (params: RawParamsFrom<'describeOrganizationOverview'>) => Promise<ReturnTypeFrom<'describeOrganizationOverview'>>  = async params => {
  // undefined
    return this.client.describeOrganizationOverview(params as any).promise();
  }

  describeOrganizationResourceCollectionHealth: (params: RawParamsFrom<'describeOrganizationResourceCollectionHealth'>) => Promise<ReturnTypeFrom<'describeOrganizationResourceCollectionHealth'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["CloudFormation","Account","Service","Tags"]}
    return this.client.describeOrganizationResourceCollectionHealth(params as any).promise();
  }

  describeResourceCollectionHealth: (params: RawParamsFrom<'describeResourceCollectionHealth'>) => Promise<ReturnTypeFrom<'describeResourceCollectionHealth'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["CloudFormation","Service","Tags"]}
    return this.client.describeResourceCollectionHealth(params as any).promise();
  }

  describeServiceIntegration: (params: RawParamsFrom<'describeServiceIntegration'>) => Promise<ReturnTypeFrom<'describeServiceIntegration'>>  = async params => {
  // undefined
    return this.client.describeServiceIntegration(params as any).promise();
  }

  getCostEstimation: (params: RawParamsFrom<'getCostEstimation'>) => Promise<ReturnTypeFrom<'getCostEstimation'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["Costs"]}
    return this.client.getCostEstimation(params as any).promise();
  }

  getResourceCollection: (params: RawParamsFrom<'getResourceCollection'>) => Promise<ReturnTypeFrom<'getResourceCollection'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":["ResourceCollection.CloudFormation.StackNames","ResourceCollection.Tags"]}
    return this.client.getResourceCollection(params as any).promise();
  }

  listAnomaliesForInsight: (params: RawParamsFrom<'listAnomaliesForInsight'>) => Promise<ReturnTypeFrom<'listAnomaliesForInsight'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ReactiveAnomalies","ProactiveAnomalies"]}
    return this.client.listAnomaliesForInsight(params as any).promise();
  }

  listAnomalousLogGroups: (params: RawParamsFrom<'listAnomalousLogGroups'>) => Promise<ReturnTypeFrom<'listAnomalousLogGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["InsightId","AnomalousLogGroups"]}
    return this.client.listAnomalousLogGroups(params as any).promise();
  }

  async listEvents(params: { [K in keyof ParamsFrom<'listEvents', { next?: string, limit?: number }>]: ParamsFrom<'listEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEvents'>]-?: ReturnTypeFrom<'listEvents'>[K]}['Events'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEvents' })).toString('base64');
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listInsights: (params: RawParamsFrom<'listInsights'>) => Promise<ReturnTypeFrom<'listInsights'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ProactiveInsights","ReactiveInsights"]}
    return this.client.listInsights(params as any).promise();
  }

  listMonitoredResources: (params: RawParamsFrom<'listMonitoredResources'>) => Promise<ReturnTypeFrom<'listMonitoredResources'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["MonitoredResourceIdentifiers"]}
    return this.client.listMonitoredResources(params as any).promise();
  }

  async listNotificationChannels(params: { [K in keyof ParamsFrom<'listNotificationChannels', { next?: string }>]: ParamsFrom<'listNotificationChannels', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNotificationChannels'>]-?: ReturnTypeFrom<'listNotificationChannels'>[K]}['Channels'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Channels"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listNotificationChannels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listNotificationChannels' })).toString('base64');
    const member = (Array.isArray(result.Channels ?? []) ? (result.Channels ?? []) : [result.Channels]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listOrganizationInsights: (params: RawParamsFrom<'listOrganizationInsights'>) => Promise<ReturnTypeFrom<'listOrganizationInsights'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ProactiveInsights","ReactiveInsights"]}
    return this.client.listOrganizationInsights(params as any).promise();
  }

  async listRecommendations(params: { [K in keyof ParamsFrom<'listRecommendations', { next?: string }>]: ParamsFrom<'listRecommendations', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecommendations'>]-?: ReturnTypeFrom<'listRecommendations'>[K]}['Recommendations'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Recommendations"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listRecommendations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRecommendations' })).toString('base64');
    const member = (Array.isArray(result.Recommendations ?? []) ? (result.Recommendations ?? []) : [result.Recommendations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putFeedback: (params: RawParamsFrom<'putFeedback'>) => Promise<ReturnTypeFrom<'putFeedback'>>  = async params => {
  // undefined
    return this.client.putFeedback(params as any).promise();
  }

  removeNotificationChannel: (params: RawParamsFrom<'removeNotificationChannel'>) => Promise<ReturnTypeFrom<'removeNotificationChannel'>>  = async params => {
  // undefined
    return this.client.removeNotificationChannel(params as any).promise();
  }

  searchInsights: (params: RawParamsFrom<'searchInsights'>) => Promise<ReturnTypeFrom<'searchInsights'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ProactiveInsights","ReactiveInsights"]}
    return this.client.searchInsights(params as any).promise();
  }

  searchOrganizationInsights: (params: RawParamsFrom<'searchOrganizationInsights'>) => Promise<ReturnTypeFrom<'searchOrganizationInsights'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ProactiveInsights","ReactiveInsights"]}
    return this.client.searchOrganizationInsights(params as any).promise();
  }

  startCostEstimation: (params: RawParamsFrom<'startCostEstimation'>) => Promise<ReturnTypeFrom<'startCostEstimation'>>  = async params => {
  // undefined
    return this.client.startCostEstimation(params as any).promise();
  }

  updateEventSourcesConfig: (params: RawParamsFrom<'updateEventSourcesConfig'>) => Promise<ReturnTypeFrom<'updateEventSourcesConfig'>>  = async params => {
  // undefined
    return this.client.updateEventSourcesConfig(params as any).promise();
  }

  updateResourceCollection: (params: RawParamsFrom<'updateResourceCollection'>) => Promise<ReturnTypeFrom<'updateResourceCollection'>>  = async params => {
  // undefined
    return this.client.updateResourceCollection(params as any).promise();
  }

  updateServiceIntegration: (params: RawParamsFrom<'updateServiceIntegration'>) => Promise<ReturnTypeFrom<'updateServiceIntegration'>>  = async params => {
  // undefined
    return this.client.updateServiceIntegration(params as any).promise();
  }
  
  static fromClient(client: AWSDevOpsGuru): DevOpsGuru {
    return new DevOpsGuru(client) as any;
  }
  
  static client(options?: AWSDevOpsGuru.Types.ClientConfiguration): DevOpsGuru {
    return new DevOpsGuru(new AWSDevOpsGuru(options)) as any;
  }
}  
