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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSStepFunctions> = AWSStepFunctions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class StepFunctions {
  private constructor(private readonly client: AWSStepFunctions) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'states' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = ["listActivities","listExecutions","listStateMachines"] as const;
  
  createActivity: (params: RawParamsFrom<'createActivity'>) => Promise<ReturnTypeFrom<'createActivity'>>  = async params => {
  // undefined
    return this.client.createActivity(params as any).promise();
  }

  createStateMachine: (params: RawParamsFrom<'createStateMachine'>) => Promise<ReturnTypeFrom<'createStateMachine'>>  = async params => {
  // undefined
    return this.client.createStateMachine(params as any).promise();
  }

  deleteActivity: (params: RawParamsFrom<'deleteActivity'>) => Promise<ReturnTypeFrom<'deleteActivity'>>  = async params => {
  // undefined
    return this.client.deleteActivity(params as any).promise();
  }

  deleteStateMachine: (params: RawParamsFrom<'deleteStateMachine'>) => Promise<ReturnTypeFrom<'deleteStateMachine'>>  = async params => {
  // undefined
    return this.client.deleteStateMachine(params as any).promise();
  }

  describeActivity: (params: RawParamsFrom<'describeActivity'>) => Promise<ReturnTypeFrom<'describeActivity'>>  = async params => {
  // undefined
    return this.client.describeActivity(params as any).promise();
  }

  describeExecution: (params: RawParamsFrom<'describeExecution'>) => Promise<ReturnTypeFrom<'describeExecution'>>  = async params => {
  // undefined
    return this.client.describeExecution(params as any).promise();
  }

  describeMapRun: (params: RawParamsFrom<'describeMapRun'>) => Promise<ReturnTypeFrom<'describeMapRun'>>  = async params => {
  // undefined
    return this.client.describeMapRun(params as any).promise();
  }

  describeStateMachine: (params: RawParamsFrom<'describeStateMachine'>) => Promise<ReturnTypeFrom<'describeStateMachine'>>  = async params => {
  // undefined
    return this.client.describeStateMachine(params as any).promise();
  }

  describeStateMachineForExecution: (params: RawParamsFrom<'describeStateMachineForExecution'>) => Promise<ReturnTypeFrom<'describeStateMachineForExecution'>>  = async params => {
  // undefined
    return this.client.describeStateMachineForExecution(params as any).promise();
  }

  getActivityTask: (params: RawParamsFrom<'getActivityTask'>) => Promise<ReturnTypeFrom<'getActivityTask'>>  = async params => {
  // undefined
    return this.client.getActivityTask(params as any).promise();
  }

  async getExecutionHistory(params: { [K in keyof ParamsFrom<'getExecutionHistory', { next?: string, limit?: number }>]: ParamsFrom<'getExecutionHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getExecutionHistory'>]-?: ReturnTypeFrom<'getExecutionHistory'>[K]}['events'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getExecutionHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getExecutionHistory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.events ?? []) ? (result.events ?? []) : [result.events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listActivities(params: { [K in keyof ParamsFrom<'listActivities', { next?: string, limit?: number }>]: ParamsFrom<'listActivities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listActivities'>]-?: ReturnTypeFrom<'listActivities'>[K]}['activities'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"activities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listActivities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listActivities' })).toString('base64') : undefined;
    const member = (Array.isArray(result.activities ?? []) ? (result.activities ?? []) : [result.activities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExecutions(params: { [K in keyof ParamsFrom<'listExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExecutions'>]-?: ReturnTypeFrom<'listExecutions'>[K]}['executions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"executions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.executions ?? []) ? (result.executions ?? []) : [result.executions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMapRuns(params: { [K in keyof ParamsFrom<'listMapRuns', { next?: string, limit?: number }>]: ParamsFrom<'listMapRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMapRuns'>]-?: ReturnTypeFrom<'listMapRuns'>[K]}['mapRuns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"mapRuns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMapRuns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listMapRuns' })).toString('base64') : undefined;
    const member = (Array.isArray(result.mapRuns ?? []) ? (result.mapRuns ?? []) : [result.mapRuns]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStateMachines(params: { [K in keyof ParamsFrom<'listStateMachines', { next?: string, limit?: number }>]: ParamsFrom<'listStateMachines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStateMachines'>]-?: ReturnTypeFrom<'listStateMachines'>[K]}['stateMachines'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"stateMachines"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStateMachines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listStateMachines' })).toString('base64') : undefined;
    const member = (Array.isArray(result.stateMachines ?? []) ? (result.stateMachines ?? []) : [result.stateMachines]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  sendTaskFailure: (params: RawParamsFrom<'sendTaskFailure'>) => Promise<ReturnTypeFrom<'sendTaskFailure'>>  = async params => {
  // undefined
    return this.client.sendTaskFailure(params as any).promise();
  }

  sendTaskHeartbeat: (params: RawParamsFrom<'sendTaskHeartbeat'>) => Promise<ReturnTypeFrom<'sendTaskHeartbeat'>>  = async params => {
  // undefined
    return this.client.sendTaskHeartbeat(params as any).promise();
  }

  sendTaskSuccess: (params: RawParamsFrom<'sendTaskSuccess'>) => Promise<ReturnTypeFrom<'sendTaskSuccess'>>  = async params => {
  // undefined
    return this.client.sendTaskSuccess(params as any).promise();
  }

  startExecution: (params: RawParamsFrom<'startExecution'>) => Promise<ReturnTypeFrom<'startExecution'>>  = async params => {
  // undefined
    return this.client.startExecution(params as any).promise();
  }

  startSyncExecution: (params: RawParamsFrom<'startSyncExecution'>) => Promise<ReturnTypeFrom<'startSyncExecution'>>  = async params => {
  // undefined
    return this.client.startSyncExecution(params as any).promise();
  }

  stopExecution: (params: RawParamsFrom<'stopExecution'>) => Promise<ReturnTypeFrom<'stopExecution'>>  = async params => {
  // undefined
    return this.client.stopExecution(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateMapRun: (params: RawParamsFrom<'updateMapRun'>) => Promise<ReturnTypeFrom<'updateMapRun'>>  = async params => {
  // undefined
    return this.client.updateMapRun(params as any).promise();
  }

  updateStateMachine: (params: RawParamsFrom<'updateStateMachine'>) => Promise<ReturnTypeFrom<'updateStateMachine'>>  = async params => {
  // undefined
    return this.client.updateStateMachine(params as any).promise();
  }
  
  static fromClient(client: AWSStepFunctions): StepFunctions {
    return new StepFunctions(client) as any;
  }
  
  static client(options?: AWSStepFunctions.Types.ClientConfiguration): StepFunctions {
    return new StepFunctions(new AWSStepFunctions(options)) as any;
  }
}  
