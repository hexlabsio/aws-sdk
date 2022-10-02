import { Request, StepFunctions as AWSStepFunctions } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSStepFunctions> = AWSStepFunctions[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSStepFunctions> = AWSStepFunctions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSStepFunctions[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSStepFunctions, Extras> = AWSStepFunctions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'states';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly ["listActivities","listStateMachines"];
    
  createActivity: FunctionTypeFrom<'createActivity'>;

  createStateMachine: FunctionTypeFrom<'createStateMachine'>;

  deleteActivity: FunctionTypeFrom<'deleteActivity'>;

  deleteStateMachine: FunctionTypeFrom<'deleteStateMachine'>;

  describeActivity: FunctionTypeFrom<'describeActivity'>;

  describeExecution: FunctionTypeFrom<'describeExecution'>;

  describeStateMachine: FunctionTypeFrom<'describeStateMachine'>;

  describeStateMachineForExecution: FunctionTypeFrom<'describeStateMachineForExecution'>;

  getActivityTask: FunctionTypeFrom<'getActivityTask'>;

  getExecutionHistory(params: { [K in keyof Omit<ParamsFrom<'getExecutionHistory', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getExecutionHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getExecutionHistory'>]-?: ReturnTypeFrom<'getExecutionHistory'>[K]}['events'] }>
  ;

  listActivities(params: { [K in keyof Omit<ParamsFrom<'listActivities', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listActivities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActivities'>]-?: ReturnTypeFrom<'listActivities'>[K]}['activities'] }>
  listActivities(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActivities'>]-?: ReturnTypeFrom<'listActivities'>[K]}['activities'] }>;

  listExecutions(params: { [K in keyof Omit<ParamsFrom<'listExecutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExecutions'>]-?: ReturnTypeFrom<'listExecutions'>[K]}['executions'] }>
  ;

  listStateMachines(params: { [K in keyof Omit<ParamsFrom<'listStateMachines', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listStateMachines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStateMachines'>]-?: ReturnTypeFrom<'listStateMachines'>[K]}['stateMachines'] }>
  listStateMachines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStateMachines'>]-?: ReturnTypeFrom<'listStateMachines'>[K]}['stateMachines'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  sendTaskFailure: FunctionTypeFrom<'sendTaskFailure'>;

  sendTaskHeartbeat: FunctionTypeFrom<'sendTaskHeartbeat'>;

  sendTaskSuccess: FunctionTypeFrom<'sendTaskSuccess'>;

  startExecution: FunctionTypeFrom<'startExecution'>;

  startSyncExecution: FunctionTypeFrom<'startSyncExecution'>;

  stopExecution: FunctionTypeFrom<'stopExecution'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateStateMachine: FunctionTypeFrom<'updateStateMachine'>
}
 
export class StepFunctions implements ClientType {
  private constructor(private readonly client: AWSStepFunctions) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'states';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = ["listActivities","listStateMachines"] as const;
  
  async createActivity(...args: any): Promise<any> {
  // undefined
    return this.client.createActivity(...args).promise()
  }

  async createStateMachine(...args: any): Promise<any> {
  // undefined
    return this.client.createStateMachine(...args).promise()
  }

  async deleteActivity(...args: any): Promise<any> {
  // undefined
    return this.client.deleteActivity(...args).promise()
  }

  async deleteStateMachine(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStateMachine(...args).promise()
  }

  async describeActivity(...args: any): Promise<any> {
  // undefined
    return this.client.describeActivity(...args).promise()
  }

  async describeExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeExecution(...args).promise()
  }

  async describeStateMachine(...args: any): Promise<any> {
  // undefined
    return this.client.describeStateMachine(...args).promise()
  }

  async describeStateMachineForExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeStateMachineForExecution(...args).promise()
  }

  async getActivityTask(...args: any): Promise<any> {
  // undefined
    return this.client.getActivityTask(...args).promise()
  }

  async getExecutionHistory(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getExecutionHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listActivities(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"activities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listActivities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.activities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"executions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.executions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStateMachines(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"stateMachines"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStateMachines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.stateMachines ?? [];
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

  async sendTaskFailure(...args: any): Promise<any> {
  // undefined
    return this.client.sendTaskFailure(...args).promise()
  }

  async sendTaskHeartbeat(...args: any): Promise<any> {
  // undefined
    return this.client.sendTaskHeartbeat(...args).promise()
  }

  async sendTaskSuccess(...args: any): Promise<any> {
  // undefined
    return this.client.sendTaskSuccess(...args).promise()
  }

  async startExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startExecution(...args).promise()
  }

  async startSyncExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startSyncExecution(...args).promise()
  }

  async stopExecution(...args: any): Promise<any> {
  // undefined
    return this.client.stopExecution(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateStateMachine(...args: any): Promise<any> {
  // undefined
    return this.client.updateStateMachine(...args).promise()
  }
  
  static fromClient(client: AWSStepFunctions): ClientType {
    return new StepFunctions(client) as any;
  }
  
  static client(options?: AWSStepFunctions.Types.ClientConfiguration): ClientType {
    return new StepFunctions(new AWSStepFunctions(options)) as any;
  }
}  
