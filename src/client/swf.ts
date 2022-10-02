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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'swf';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly [];
    
  countClosedWorkflowExecutions: FunctionTypeFrom<'countClosedWorkflowExecutions'>;

  countOpenWorkflowExecutions: FunctionTypeFrom<'countOpenWorkflowExecutions'>;

  countPendingActivityTasks: FunctionTypeFrom<'countPendingActivityTasks'>;

  countPendingDecisionTasks: FunctionTypeFrom<'countPendingDecisionTasks'>;

  deprecateActivityType: FunctionTypeFrom<'deprecateActivityType'>;

  deprecateDomain: FunctionTypeFrom<'deprecateDomain'>;

  deprecateWorkflowType: FunctionTypeFrom<'deprecateWorkflowType'>;

  describeActivityType: FunctionTypeFrom<'describeActivityType'>;

  describeDomain: FunctionTypeFrom<'describeDomain'>;

  describeWorkflowExecution: FunctionTypeFrom<'describeWorkflowExecution'>;

  describeWorkflowType: FunctionTypeFrom<'describeWorkflowType'>;

  getWorkflowExecutionHistory(params: { [K in keyof Omit<ParamsFrom<'getWorkflowExecutionHistory', { next?: string, limit?: number }>, 'nextPageToken' | 'maximumPageSize'>]: ParamsFrom<'getWorkflowExecutionHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getWorkflowExecutionHistory'>]-?: ReturnTypeFrom<'getWorkflowExecutionHistory'>[K]}['events'] }>
  ;

  listActivityTypes(params: { [K in keyof Omit<ParamsFrom<'listActivityTypes', { next?: string, limit?: number }>, 'nextPageToken' | 'maximumPageSize'>]: ParamsFrom<'listActivityTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActivityTypes'>]-?: ReturnTypeFrom<'listActivityTypes'>[K]}['typeInfos'] }>
  ;

  listClosedWorkflowExecutions(params: { [K in keyof Omit<ParamsFrom<'listClosedWorkflowExecutions', { next?: string, limit?: number }>, 'nextPageToken' | 'maximumPageSize'>]: ParamsFrom<'listClosedWorkflowExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listClosedWorkflowExecutions'>]-?: ReturnTypeFrom<'listClosedWorkflowExecutions'>[K]}['executionInfos'] }>
  ;

  listDomains(params: { [K in keyof Omit<ParamsFrom<'listDomains', { next?: string, limit?: number }>, 'nextPageToken' | 'maximumPageSize'>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['domainInfos'] }>
  ;

  listOpenWorkflowExecutions(params: { [K in keyof Omit<ParamsFrom<'listOpenWorkflowExecutions', { next?: string, limit?: number }>, 'nextPageToken' | 'maximumPageSize'>]: ParamsFrom<'listOpenWorkflowExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOpenWorkflowExecutions'>]-?: ReturnTypeFrom<'listOpenWorkflowExecutions'>[K]}['executionInfos'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWorkflowTypes(params: { [K in keyof Omit<ParamsFrom<'listWorkflowTypes', { next?: string, limit?: number }>, 'nextPageToken' | 'maximumPageSize'>]: ParamsFrom<'listWorkflowTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkflowTypes'>]-?: ReturnTypeFrom<'listWorkflowTypes'>[K]}['typeInfos'] }>
  ;

  pollForActivityTask: FunctionTypeFrom<'pollForActivityTask'>;

  pollForDecisionTask(params: { [K in keyof Omit<ParamsFrom<'pollForDecisionTask', { next?: string, limit?: number }>, 'nextPageToken' | 'maximumPageSize'>]: ParamsFrom<'pollForDecisionTask', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'pollForDecisionTask'>]-?: ReturnTypeFrom<'pollForDecisionTask'>[K]}['events'] }>
  ;

  recordActivityTaskHeartbeat: FunctionTypeFrom<'recordActivityTaskHeartbeat'>;

  registerActivityType: FunctionTypeFrom<'registerActivityType'>;

  registerDomain: FunctionTypeFrom<'registerDomain'>;

  registerWorkflowType: FunctionTypeFrom<'registerWorkflowType'>;

  requestCancelWorkflowExecution: FunctionTypeFrom<'requestCancelWorkflowExecution'>;

  respondActivityTaskCanceled: FunctionTypeFrom<'respondActivityTaskCanceled'>;

  respondActivityTaskCompleted: FunctionTypeFrom<'respondActivityTaskCompleted'>;

  respondActivityTaskFailed: FunctionTypeFrom<'respondActivityTaskFailed'>;

  respondDecisionTaskCompleted: FunctionTypeFrom<'respondDecisionTaskCompleted'>;

  signalWorkflowExecution: FunctionTypeFrom<'signalWorkflowExecution'>;

  startWorkflowExecution: FunctionTypeFrom<'startWorkflowExecution'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  terminateWorkflowExecution: FunctionTypeFrom<'terminateWorkflowExecution'>;

  undeprecateActivityType: FunctionTypeFrom<'undeprecateActivityType'>;

  undeprecateDomain: FunctionTypeFrom<'undeprecateDomain'>;

  undeprecateWorkflowType: FunctionTypeFrom<'undeprecateWorkflowType'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class SWF implements ClientType {
  private constructor(private readonly client: AWSSWF) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'swf';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = [] as const;
  
  async countClosedWorkflowExecutions(...args: any): Promise<any> {
  // undefined
    return this.client.countClosedWorkflowExecutions(...args).promise()
  }

  async countOpenWorkflowExecutions(...args: any): Promise<any> {
  // undefined
    return this.client.countOpenWorkflowExecutions(...args).promise()
  }

  async countPendingActivityTasks(...args: any): Promise<any> {
  // undefined
    return this.client.countPendingActivityTasks(...args).promise()
  }

  async countPendingDecisionTasks(...args: any): Promise<any> {
  // undefined
    return this.client.countPendingDecisionTasks(...args).promise()
  }

  async deprecateActivityType(...args: any): Promise<any> {
  // undefined
    return this.client.deprecateActivityType(...args).promise()
  }

  async deprecateDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deprecateDomain(...args).promise()
  }

  async deprecateWorkflowType(...args: any): Promise<any> {
  // undefined
    return this.client.deprecateWorkflowType(...args).promise()
  }

  async describeActivityType(...args: any): Promise<any> {
  // undefined
    return this.client.describeActivityType(...args).promise()
  }

  async describeDomain(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomain(...args).promise()
  }

  async describeWorkflowExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkflowExecution(...args).promise()
  }

  async describeWorkflowType(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkflowType(...args).promise()
  }

  async getWorkflowExecutionHistory(...args: any): Promise<any> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextPageToken: next } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.getWorkflowExecutionHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextPageToken;
    const member = result.events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listActivityTypes(...args: any): Promise<any> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"typeInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextPageToken: next } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listActivityTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextPageToken;
    const member = result.typeInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClosedWorkflowExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"executionInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextPageToken: next } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listClosedWorkflowExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextPageToken;
    const member = result.executionInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDomains(...args: any): Promise<any> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"domainInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextPageToken: next } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listDomains(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextPageToken;
    const member = result.domainInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOpenWorkflowExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"executionInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextPageToken: next } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listOpenWorkflowExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextPageToken;
    const member = result.executionInfos ?? [];
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

  async listWorkflowTypes(...args: any): Promise<any> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"typeInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextPageToken: next } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.listWorkflowTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextPageToken;
    const member = result.typeInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async pollForActivityTask(...args: any): Promise<any> {
  // undefined
    return this.client.pollForActivityTask(...args).promise()
  }

  async pollForDecisionTask(...args: any): Promise<any> {
    // {"inputToken":"nextPageToken","limitKey":"maximumPageSize","outputToken":"nextPageToken","resultKey":"events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextPageToken: next } : {};
    const limitTokenPart = limit ? { maximumPageSize: limit } : {};
    const result = await this.client.pollForDecisionTask(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextPageToken;
    const member = result.events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async recordActivityTaskHeartbeat(...args: any): Promise<any> {
  // undefined
    return this.client.recordActivityTaskHeartbeat(...args).promise()
  }

  async registerActivityType(...args: any): Promise<any> {
  // undefined
    return this.client.registerActivityType(...args).promise()
  }

  async registerDomain(...args: any): Promise<any> {
  // undefined
    return this.client.registerDomain(...args).promise()
  }

  async registerWorkflowType(...args: any): Promise<any> {
  // undefined
    return this.client.registerWorkflowType(...args).promise()
  }

  async requestCancelWorkflowExecution(...args: any): Promise<any> {
  // undefined
    return this.client.requestCancelWorkflowExecution(...args).promise()
  }

  async respondActivityTaskCanceled(...args: any): Promise<any> {
  // undefined
    return this.client.respondActivityTaskCanceled(...args).promise()
  }

  async respondActivityTaskCompleted(...args: any): Promise<any> {
  // undefined
    return this.client.respondActivityTaskCompleted(...args).promise()
  }

  async respondActivityTaskFailed(...args: any): Promise<any> {
  // undefined
    return this.client.respondActivityTaskFailed(...args).promise()
  }

  async respondDecisionTaskCompleted(...args: any): Promise<any> {
  // undefined
    return this.client.respondDecisionTaskCompleted(...args).promise()
  }

  async signalWorkflowExecution(...args: any): Promise<any> {
  // undefined
    return this.client.signalWorkflowExecution(...args).promise()
  }

  async startWorkflowExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startWorkflowExecution(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async terminateWorkflowExecution(...args: any): Promise<any> {
  // undefined
    return this.client.terminateWorkflowExecution(...args).promise()
  }

  async undeprecateActivityType(...args: any): Promise<any> {
  // undefined
    return this.client.undeprecateActivityType(...args).promise()
  }

  async undeprecateDomain(...args: any): Promise<any> {
  // undefined
    return this.client.undeprecateDomain(...args).promise()
  }

  async undeprecateWorkflowType(...args: any): Promise<any> {
  // undefined
    return this.client.undeprecateWorkflowType(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSSWF): ClientType {
    return new SWF(client) as any;
  }
  
  static client(options?: AWSSWF.Types.ClientConfiguration): ClientType {
    return new SWF(new AWSSWF(options)) as any;
  }
}  
