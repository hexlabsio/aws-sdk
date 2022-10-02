import { Request, SSMIncidents as AWSSSMIncidents } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSSMIncidents> = AWSSSMIncidents[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSSMIncidents> = AWSSSMIncidents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSSMIncidents[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSSMIncidents, Extras> = AWSSSMIncidents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ssm-incidents';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listIncidentRecords","listReplicationSets","listResponsePlans"];
    
  createReplicationSet: FunctionTypeFrom<'createReplicationSet'>;

  createResponsePlan: FunctionTypeFrom<'createResponsePlan'>;

  createTimelineEvent: FunctionTypeFrom<'createTimelineEvent'>;

  deleteIncidentRecord: FunctionTypeFrom<'deleteIncidentRecord'>;

  deleteReplicationSet: FunctionTypeFrom<'deleteReplicationSet'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteResponsePlan: FunctionTypeFrom<'deleteResponsePlan'>;

  deleteTimelineEvent: FunctionTypeFrom<'deleteTimelineEvent'>;

  getIncidentRecord: FunctionTypeFrom<'getIncidentRecord'>;

  getReplicationSet: FunctionTypeFrom<'getReplicationSet'>;

  getResourcePolicies(params: { [K in keyof Omit<ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getResourcePolicies'>]-?: ReturnTypeFrom<'getResourcePolicies'>[K]}['resourcePolicies'] }>
  ;

  getResponsePlan: FunctionTypeFrom<'getResponsePlan'>;

  getTimelineEvent: FunctionTypeFrom<'getTimelineEvent'>;

  listIncidentRecords(params: { [K in keyof Omit<ParamsFrom<'listIncidentRecords', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listIncidentRecords', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIncidentRecords'>]-?: ReturnTypeFrom<'listIncidentRecords'>[K]}['incidentRecordSummaries'] }>
  listIncidentRecords(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIncidentRecords'>]-?: ReturnTypeFrom<'listIncidentRecords'>[K]}['incidentRecordSummaries'] }>;

  listRelatedItems(params: { [K in keyof Omit<ParamsFrom<'listRelatedItems', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRelatedItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRelatedItems'>]-?: ReturnTypeFrom<'listRelatedItems'>[K]}['relatedItems'] }>
  ;

  listReplicationSets(params: { [K in keyof Omit<ParamsFrom<'listReplicationSets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listReplicationSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReplicationSets'>]-?: ReturnTypeFrom<'listReplicationSets'>[K]}['replicationSetArns'] }>
  listReplicationSets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReplicationSets'>]-?: ReturnTypeFrom<'listReplicationSets'>[K]}['replicationSetArns'] }>;

  listResponsePlans(params: { [K in keyof Omit<ParamsFrom<'listResponsePlans', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listResponsePlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResponsePlans'>]-?: ReturnTypeFrom<'listResponsePlans'>[K]}['responsePlanSummaries'] }>
  listResponsePlans(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResponsePlans'>]-?: ReturnTypeFrom<'listResponsePlans'>[K]}['responsePlanSummaries'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTimelineEvents(params: { [K in keyof Omit<ParamsFrom<'listTimelineEvents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTimelineEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTimelineEvents'>]-?: ReturnTypeFrom<'listTimelineEvents'>[K]}['eventSummaries'] }>
  ;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  startIncident: FunctionTypeFrom<'startIncident'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDeletionProtection: FunctionTypeFrom<'updateDeletionProtection'>;

  updateIncidentRecord: FunctionTypeFrom<'updateIncidentRecord'>;

  updateRelatedItems: FunctionTypeFrom<'updateRelatedItems'>;

  updateReplicationSet: FunctionTypeFrom<'updateReplicationSet'>;

  updateResponsePlan: FunctionTypeFrom<'updateResponsePlan'>;

  updateTimelineEvent: FunctionTypeFrom<'updateTimelineEvent'>
}
 
export class SSMIncidents implements ClientType {
  private constructor(private readonly client: AWSSSMIncidents) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ssm-incidents';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listIncidentRecords","listReplicationSets","listResponsePlans"] as const;
  
  async createReplicationSet(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationSet(...args).promise()
  }

  async createResponsePlan(...args: any): Promise<any> {
  // undefined
    return this.client.createResponsePlan(...args).promise()
  }

  async createTimelineEvent(...args: any): Promise<any> {
  // undefined
    return this.client.createTimelineEvent(...args).promise()
  }

  async deleteIncidentRecord(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIncidentRecord(...args).promise()
  }

  async deleteReplicationSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationSet(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteResponsePlan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResponsePlan(...args).promise()
  }

  async deleteTimelineEvent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTimelineEvent(...args).promise()
  }

  async getIncidentRecord(...args: any): Promise<any> {
  // undefined
    return this.client.getIncidentRecord(...args).promise()
  }

  async getReplicationSet(...args: any): Promise<any> {
  // undefined
    return this.client.getReplicationSet(...args).promise()
  }

  async getResourcePolicies(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"resourcePolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getResourcePolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.resourcePolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getResponsePlan(...args: any): Promise<any> {
  // undefined
    return this.client.getResponsePlan(...args).promise()
  }

  async getTimelineEvent(...args: any): Promise<any> {
  // undefined
    return this.client.getTimelineEvent(...args).promise()
  }

  async listIncidentRecords(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"incidentRecordSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listIncidentRecords(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.incidentRecordSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRelatedItems(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"relatedItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRelatedItems(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.relatedItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReplicationSets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"replicationSetArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReplicationSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.replicationSetArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResponsePlans(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"responsePlanSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listResponsePlans(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.responsePlanSummaries ?? [];
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

  async listTimelineEvents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"eventSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTimelineEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.eventSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async startIncident(...args: any): Promise<any> {
  // undefined
    return this.client.startIncident(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDeletionProtection(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeletionProtection(...args).promise()
  }

  async updateIncidentRecord(...args: any): Promise<any> {
  // undefined
    return this.client.updateIncidentRecord(...args).promise()
  }

  async updateRelatedItems(...args: any): Promise<any> {
  // undefined
    return this.client.updateRelatedItems(...args).promise()
  }

  async updateReplicationSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateReplicationSet(...args).promise()
  }

  async updateResponsePlan(...args: any): Promise<any> {
  // undefined
    return this.client.updateResponsePlan(...args).promise()
  }

  async updateTimelineEvent(...args: any): Promise<any> {
  // undefined
    return this.client.updateTimelineEvent(...args).promise()
  }
  
  static fromClient(client: AWSSSMIncidents): ClientType {
    return new SSMIncidents(client) as any;
  }
  
  static client(options?: AWSSSMIncidents.Types.ClientConfiguration): ClientType {
    return new SSMIncidents(new AWSSSMIncidents(options)) as any;
  }
}  
