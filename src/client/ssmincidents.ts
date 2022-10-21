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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSSMIncidents> = AWSSSMIncidents[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SSMIncidents {
  private constructor(private readonly client: AWSSSMIncidents) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ssm-incidents' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listIncidentRecords","listReplicationSets","listResponsePlans"] as const;
  
  createReplicationSet: (params: RawParamsFrom<'createReplicationSet'>) => Promise<ReturnTypeFrom<'createReplicationSet'>>  = async params => {
  // undefined
    return this.client.createReplicationSet(params as any).promise();
  }

  createResponsePlan: (params: RawParamsFrom<'createResponsePlan'>) => Promise<ReturnTypeFrom<'createResponsePlan'>>  = async params => {
  // undefined
    return this.client.createResponsePlan(params as any).promise();
  }

  createTimelineEvent: (params: RawParamsFrom<'createTimelineEvent'>) => Promise<ReturnTypeFrom<'createTimelineEvent'>>  = async params => {
  // undefined
    return this.client.createTimelineEvent(params as any).promise();
  }

  deleteIncidentRecord: (params: RawParamsFrom<'deleteIncidentRecord'>) => Promise<ReturnTypeFrom<'deleteIncidentRecord'>>  = async params => {
  // undefined
    return this.client.deleteIncidentRecord(params as any).promise();
  }

  deleteReplicationSet: (params: RawParamsFrom<'deleteReplicationSet'>) => Promise<ReturnTypeFrom<'deleteReplicationSet'>>  = async params => {
  // undefined
    return this.client.deleteReplicationSet(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteResponsePlan: (params: RawParamsFrom<'deleteResponsePlan'>) => Promise<ReturnTypeFrom<'deleteResponsePlan'>>  = async params => {
  // undefined
    return this.client.deleteResponsePlan(params as any).promise();
  }

  deleteTimelineEvent: (params: RawParamsFrom<'deleteTimelineEvent'>) => Promise<ReturnTypeFrom<'deleteTimelineEvent'>>  = async params => {
  // undefined
    return this.client.deleteTimelineEvent(params as any).promise();
  }

  getIncidentRecord: (params: RawParamsFrom<'getIncidentRecord'>) => Promise<ReturnTypeFrom<'getIncidentRecord'>>  = async params => {
  // undefined
    return this.client.getIncidentRecord(params as any).promise();
  }

  getReplicationSet: (params: RawParamsFrom<'getReplicationSet'>) => Promise<ReturnTypeFrom<'getReplicationSet'>>  = async params => {
  // undefined
    return this.client.getReplicationSet(params as any).promise();
  }

  async getResourcePolicies(params: { [K in keyof ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>]: ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getResourcePolicies'>]-?: ReturnTypeFrom<'getResourcePolicies'>[K]}['resourcePolicies'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"resourcePolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getResourcePolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.resourcePolicies ?? []) ? (result.resourcePolicies ?? []) : [result.resourcePolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  getResponsePlan: (params: RawParamsFrom<'getResponsePlan'>) => Promise<ReturnTypeFrom<'getResponsePlan'>>  = async params => {
  // undefined
    return this.client.getResponsePlan(params as any).promise();
  }

  getTimelineEvent: (params: RawParamsFrom<'getTimelineEvent'>) => Promise<ReturnTypeFrom<'getTimelineEvent'>>  = async params => {
  // undefined
    return this.client.getTimelineEvent(params as any).promise();
  }

  async listIncidentRecords(params: { [K in keyof ParamsFrom<'listIncidentRecords', { next?: string, limit?: number }>]: ParamsFrom<'listIncidentRecords', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIncidentRecords'>]-?: ReturnTypeFrom<'listIncidentRecords'>[K]}['incidentRecordSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"incidentRecordSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listIncidentRecords({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.incidentRecordSummaries ?? []) ? (result.incidentRecordSummaries ?? []) : [result.incidentRecordSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRelatedItems(params: { [K in keyof ParamsFrom<'listRelatedItems', { next?: string, limit?: number }>]: ParamsFrom<'listRelatedItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRelatedItems'>]-?: ReturnTypeFrom<'listRelatedItems'>[K]}['relatedItems'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"relatedItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRelatedItems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.relatedItems ?? []) ? (result.relatedItems ?? []) : [result.relatedItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listReplicationSets(params: { [K in keyof ParamsFrom<'listReplicationSets', { next?: string, limit?: number }>]: ParamsFrom<'listReplicationSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReplicationSets'>]-?: ReturnTypeFrom<'listReplicationSets'>[K]}['replicationSetArns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"replicationSetArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listReplicationSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.replicationSetArns ?? []) ? (result.replicationSetArns ?? []) : [result.replicationSetArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listResponsePlans(params: { [K in keyof ParamsFrom<'listResponsePlans', { next?: string, limit?: number }>]: ParamsFrom<'listResponsePlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResponsePlans'>]-?: ReturnTypeFrom<'listResponsePlans'>[K]}['responsePlanSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"responsePlanSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listResponsePlans({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.responsePlanSummaries ?? []) ? (result.responsePlanSummaries ?? []) : [result.responsePlanSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listTimelineEvents(params: { [K in keyof ParamsFrom<'listTimelineEvents', { next?: string, limit?: number }>]: ParamsFrom<'listTimelineEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTimelineEvents'>]-?: ReturnTypeFrom<'listTimelineEvents'>[K]}['eventSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"eventSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTimelineEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.eventSummaries ?? []) ? (result.eventSummaries ?? []) : [result.eventSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  startIncident: (params: RawParamsFrom<'startIncident'>) => Promise<ReturnTypeFrom<'startIncident'>>  = async params => {
  // undefined
    return this.client.startIncident(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDeletionProtection: (params: RawParamsFrom<'updateDeletionProtection'>) => Promise<ReturnTypeFrom<'updateDeletionProtection'>>  = async params => {
  // undefined
    return this.client.updateDeletionProtection(params as any).promise();
  }

  updateIncidentRecord: (params: RawParamsFrom<'updateIncidentRecord'>) => Promise<ReturnTypeFrom<'updateIncidentRecord'>>  = async params => {
  // undefined
    return this.client.updateIncidentRecord(params as any).promise();
  }

  updateRelatedItems: (params: RawParamsFrom<'updateRelatedItems'>) => Promise<ReturnTypeFrom<'updateRelatedItems'>>  = async params => {
  // undefined
    return this.client.updateRelatedItems(params as any).promise();
  }

  updateReplicationSet: (params: RawParamsFrom<'updateReplicationSet'>) => Promise<ReturnTypeFrom<'updateReplicationSet'>>  = async params => {
  // undefined
    return this.client.updateReplicationSet(params as any).promise();
  }

  updateResponsePlan: (params: RawParamsFrom<'updateResponsePlan'>) => Promise<ReturnTypeFrom<'updateResponsePlan'>>  = async params => {
  // undefined
    return this.client.updateResponsePlan(params as any).promise();
  }

  updateTimelineEvent: (params: RawParamsFrom<'updateTimelineEvent'>) => Promise<ReturnTypeFrom<'updateTimelineEvent'>>  = async params => {
  // undefined
    return this.client.updateTimelineEvent(params as any).promise();
  }
  
  static fromClient(client: AWSSSMIncidents): SSMIncidents {
    return new SSMIncidents(client) as any;
  }
  
  static client(options?: AWSSSMIncidents.Types.ClientConfiguration): SSMIncidents {
    return new SSMIncidents(new AWSSSMIncidents(options)) as any;
  }
}  
