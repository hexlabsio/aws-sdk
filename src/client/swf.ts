import { Request, SWF as AWSSWF } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSWF> = AWSSWF[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSWF> = AWSSWF[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSWF[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSWF, Extras> = AWSSWF[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSWF> = AWSSWF[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SWF {
  private constructor(private readonly client: AWSSWF) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'swf' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = [] as const;
  
  countClosedWorkflowExecutions: (params: RawParamsFrom<'countClosedWorkflowExecutions'>) => Promise<ReturnTypeFrom<'countClosedWorkflowExecutions'>>  = async params => {
  // undefined
    return this.client.countClosedWorkflowExecutions(params as any).promise();
  }

  countOpenWorkflowExecutions: (params: RawParamsFrom<'countOpenWorkflowExecutions'>) => Promise<ReturnTypeFrom<'countOpenWorkflowExecutions'>>  = async params => {
  // undefined
    return this.client.countOpenWorkflowExecutions(params as any).promise();
  }

  countPendingActivityTasks: (params: RawParamsFrom<'countPendingActivityTasks'>) => Promise<ReturnTypeFrom<'countPendingActivityTasks'>>  = async params => {
  // undefined
    return this.client.countPendingActivityTasks(params as any).promise();
  }

  countPendingDecisionTasks: (params: RawParamsFrom<'countPendingDecisionTasks'>) => Promise<ReturnTypeFrom<'countPendingDecisionTasks'>>  = async params => {
  // undefined
    return this.client.countPendingDecisionTasks(params as any).promise();
  }

  deprecateActivityType: (params: RawParamsFrom<'deprecateActivityType'>) => Promise<ReturnTypeFrom<'deprecateActivityType'>>  = async params => {
  // undefined
    return this.client.deprecateActivityType(params as any).promise();
  }

  deprecateDomain: (params: RawParamsFrom<'deprecateDomain'>) => Promise<ReturnTypeFrom<'deprecateDomain'>>  = async params => {
  // undefined
    return this.client.deprecateDomain(params as any).promise();
  }

  deprecateWorkflowType: (params: RawParamsFrom<'deprecateWorkflowType'>) => Promise<ReturnTypeFrom<'deprecateWorkflowType'>>  = async params => {
  // undefined
    return this.client.deprecateWorkflowType(params as any).promise();
  }

  describeActivityType: (params: RawParamsFrom<'describeActivityType'>) => Promise<ReturnTypeFrom<'describeActivityType'>>  = async params => {
  // undefined
    return this.client.describeActivityType(params as any).promise();
  }

  describeDomain: (params: RawParamsFrom<'describeDomain'>) => Promise<ReturnTypeFrom<'describeDomain'>>  = async params => {
  // undefined
    return this.client.describeDomain(params as any).promise();
  }

  describeWorkflowExecution: (params: RawParamsFrom<'describeWorkflowExecution'>) => Promise<ReturnTypeFrom<'describeWorkflowExecution'>>  = async params => {
  // undefined
    return this.client.describeWorkflowExecution(params as any).promise();
  }

  describeWorkflowType: (params: RawParamsFrom<'describeWorkflowType'>) => Promise<ReturnTypeFrom<'describeWorkflowType'>>  = async params => {
  // undefined
    return this.client.describeWorkflowType(params as any).promise();
  }

  async getWorkflowExecutionHistory(params: { [K in keyof ParamsFrom<'getWorkflowExecutionHistory', { next?: string, limit?: number }>]: ParamsFrom<'getWorkflowExecutionHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getWorkflowExecutionHistory'>]-?: ReturnTypeFrom<'getWorkflowExecutionHistory'>[K]}['events'], undefined>}> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextPageToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.getWorkflowExecutionHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextPageToken ;
    const member = (Array.isArray(result.events ?? []) ? (result.events ?? []) : [result.events]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listActivityTypes(params: { [K in keyof ParamsFrom<'listActivityTypes', { next?: string, limit?: number }>]: ParamsFrom<'listActivityTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listActivityTypes'>]-?: ReturnTypeFrom<'listActivityTypes'>[K]}['typeInfos'], undefined>}> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"typeInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextPageToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listActivityTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextPageToken ;
    const member = (Array.isArray(result.typeInfos ?? []) ? (result.typeInfos ?? []) : [result.typeInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listClosedWorkflowExecutions(params: { [K in keyof ParamsFrom<'listClosedWorkflowExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listClosedWorkflowExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClosedWorkflowExecutions'>]-?: ReturnTypeFrom<'listClosedWorkflowExecutions'>[K]}['executionInfos'], undefined>}> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"executionInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextPageToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listClosedWorkflowExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextPageToken ;
    const member = (Array.isArray(result.executionInfos ?? []) ? (result.executionInfos ?? []) : [result.executionInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDomains(params: { [K in keyof ParamsFrom<'listDomains', { next?: string, limit?: number }>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['domainInfos'], undefined>}> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"domainInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextPageToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextPageToken ;
    const member = (Array.isArray(result.domainInfos ?? []) ? (result.domainInfos ?? []) : [result.domainInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listOpenWorkflowExecutions(params: { [K in keyof ParamsFrom<'listOpenWorkflowExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listOpenWorkflowExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOpenWorkflowExecutions'>]-?: ReturnTypeFrom<'listOpenWorkflowExecutions'>[K]}['executionInfos'], undefined>}> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"executionInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextPageToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listOpenWorkflowExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextPageToken ;
    const member = (Array.isArray(result.executionInfos ?? []) ? (result.executionInfos ?? []) : [result.executionInfos]) as any;
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

  async listWorkflowTypes(params: { [K in keyof ParamsFrom<'listWorkflowTypes', { next?: string, limit?: number }>]: ParamsFrom<'listWorkflowTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkflowTypes'>]-?: ReturnTypeFrom<'listWorkflowTypes'>[K]}['typeInfos'], undefined>}> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"typeInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextPageToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listWorkflowTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextPageToken ;
    const member = (Array.isArray(result.typeInfos ?? []) ? (result.typeInfos ?? []) : [result.typeInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  pollForActivityTask: (params: RawParamsFrom<'pollForActivityTask'>) => Promise<ReturnTypeFrom<'pollForActivityTask'>>  = async params => {
  // undefined
    return this.client.pollForActivityTask(params as any).promise();
  }

  async pollForDecisionTask(params: { [K in keyof ParamsFrom<'pollForDecisionTask', { next?: string, limit?: number }>]: ParamsFrom<'pollForDecisionTask', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'pollForDecisionTask'>]-?: ReturnTypeFrom<'pollForDecisionTask'>[K]}['events'], undefined>}> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextPageToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.pollForDecisionTask({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextPageToken ;
    const member = (Array.isArray(result.events ?? []) ? (result.events ?? []) : [result.events]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  recordActivityTaskHeartbeat: (params: RawParamsFrom<'recordActivityTaskHeartbeat'>) => Promise<ReturnTypeFrom<'recordActivityTaskHeartbeat'>>  = async params => {
  // undefined
    return this.client.recordActivityTaskHeartbeat(params as any).promise();
  }

  registerActivityType: (params: RawParamsFrom<'registerActivityType'>) => Promise<ReturnTypeFrom<'registerActivityType'>>  = async params => {
  // undefined
    return this.client.registerActivityType(params as any).promise();
  }

  registerDomain: (params: RawParamsFrom<'registerDomain'>) => Promise<ReturnTypeFrom<'registerDomain'>>  = async params => {
  // undefined
    return this.client.registerDomain(params as any).promise();
  }

  registerWorkflowType: (params: RawParamsFrom<'registerWorkflowType'>) => Promise<ReturnTypeFrom<'registerWorkflowType'>>  = async params => {
  // undefined
    return this.client.registerWorkflowType(params as any).promise();
  }

  requestCancelWorkflowExecution: (params: RawParamsFrom<'requestCancelWorkflowExecution'>) => Promise<ReturnTypeFrom<'requestCancelWorkflowExecution'>>  = async params => {
  // undefined
    return this.client.requestCancelWorkflowExecution(params as any).promise();
  }

  respondActivityTaskCanceled: (params: RawParamsFrom<'respondActivityTaskCanceled'>) => Promise<ReturnTypeFrom<'respondActivityTaskCanceled'>>  = async params => {
  // undefined
    return this.client.respondActivityTaskCanceled(params as any).promise();
  }

  respondActivityTaskCompleted: (params: RawParamsFrom<'respondActivityTaskCompleted'>) => Promise<ReturnTypeFrom<'respondActivityTaskCompleted'>>  = async params => {
  // undefined
    return this.client.respondActivityTaskCompleted(params as any).promise();
  }

  respondActivityTaskFailed: (params: RawParamsFrom<'respondActivityTaskFailed'>) => Promise<ReturnTypeFrom<'respondActivityTaskFailed'>>  = async params => {
  // undefined
    return this.client.respondActivityTaskFailed(params as any).promise();
  }

  respondDecisionTaskCompleted: (params: RawParamsFrom<'respondDecisionTaskCompleted'>) => Promise<ReturnTypeFrom<'respondDecisionTaskCompleted'>>  = async params => {
  // undefined
    return this.client.respondDecisionTaskCompleted(params as any).promise();
  }

  signalWorkflowExecution: (params: RawParamsFrom<'signalWorkflowExecution'>) => Promise<ReturnTypeFrom<'signalWorkflowExecution'>>  = async params => {
  // undefined
    return this.client.signalWorkflowExecution(params as any).promise();
  }

  startWorkflowExecution: (params: RawParamsFrom<'startWorkflowExecution'>) => Promise<ReturnTypeFrom<'startWorkflowExecution'>>  = async params => {
  // undefined
    return this.client.startWorkflowExecution(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  terminateWorkflowExecution: (params: RawParamsFrom<'terminateWorkflowExecution'>) => Promise<ReturnTypeFrom<'terminateWorkflowExecution'>>  = async params => {
  // undefined
    return this.client.terminateWorkflowExecution(params as any).promise();
  }

  undeprecateActivityType: (params: RawParamsFrom<'undeprecateActivityType'>) => Promise<ReturnTypeFrom<'undeprecateActivityType'>>  = async params => {
  // undefined
    return this.client.undeprecateActivityType(params as any).promise();
  }

  undeprecateDomain: (params: RawParamsFrom<'undeprecateDomain'>) => Promise<ReturnTypeFrom<'undeprecateDomain'>>  = async params => {
  // undefined
    return this.client.undeprecateDomain(params as any).promise();
  }

  undeprecateWorkflowType: (params: RawParamsFrom<'undeprecateWorkflowType'>) => Promise<ReturnTypeFrom<'undeprecateWorkflowType'>>  = async params => {
  // undefined
    return this.client.undeprecateWorkflowType(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSSWF): SWF {
    return new SWF(client) as any;
  }
  
  static client(options?: AWSSWF.Types.ClientConfiguration): SWF {
    return new SWF(new AWSSWF(options)) as any;
  }
}  
