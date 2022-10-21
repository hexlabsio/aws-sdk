import { Request, CodePipeline as AWSCodePipeline } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodePipeline> = AWSCodePipeline[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodePipeline> = AWSCodePipeline[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodePipeline[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodePipeline, Extras> = AWSCodePipeline[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodePipeline> = AWSCodePipeline[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodePipeline {
  private constructor(private readonly client: AWSCodePipeline) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codepipeline' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["listActionTypes","listPipelines","listWebhooks"] as const;
  
  acknowledgeJob: (params: RawParamsFrom<'acknowledgeJob'>) => Promise<ReturnTypeFrom<'acknowledgeJob'>>  = async params => {
  // undefined
    return this.client.acknowledgeJob(params as any).promise();
  }

  acknowledgeThirdPartyJob: (params: RawParamsFrom<'acknowledgeThirdPartyJob'>) => Promise<ReturnTypeFrom<'acknowledgeThirdPartyJob'>>  = async params => {
  // undefined
    return this.client.acknowledgeThirdPartyJob(params as any).promise();
  }

  createCustomActionType: (params: RawParamsFrom<'createCustomActionType'>) => Promise<ReturnTypeFrom<'createCustomActionType'>>  = async params => {
  // undefined
    return this.client.createCustomActionType(params as any).promise();
  }

  createPipeline: (params: RawParamsFrom<'createPipeline'>) => Promise<ReturnTypeFrom<'createPipeline'>>  = async params => {
  // undefined
    return this.client.createPipeline(params as any).promise();
  }

  deleteCustomActionType: (params: RawParamsFrom<'deleteCustomActionType'>) => Promise<ReturnTypeFrom<'deleteCustomActionType'>>  = async params => {
  // undefined
    return this.client.deleteCustomActionType(params as any).promise();
  }

  deletePipeline: (params: RawParamsFrom<'deletePipeline'>) => Promise<ReturnTypeFrom<'deletePipeline'>>  = async params => {
  // undefined
    return this.client.deletePipeline(params as any).promise();
  }

  deleteWebhook: (params: RawParamsFrom<'deleteWebhook'>) => Promise<ReturnTypeFrom<'deleteWebhook'>>  = async params => {
  // undefined
    return this.client.deleteWebhook(params as any).promise();
  }

  deregisterWebhookWithThirdParty: (params: RawParamsFrom<'deregisterWebhookWithThirdParty'>) => Promise<ReturnTypeFrom<'deregisterWebhookWithThirdParty'>>  = async params => {
  // undefined
    return this.client.deregisterWebhookWithThirdParty(params as any).promise();
  }

  disableStageTransition: (params: RawParamsFrom<'disableStageTransition'>) => Promise<ReturnTypeFrom<'disableStageTransition'>>  = async params => {
  // undefined
    return this.client.disableStageTransition(params as any).promise();
  }

  enableStageTransition: (params: RawParamsFrom<'enableStageTransition'>) => Promise<ReturnTypeFrom<'enableStageTransition'>>  = async params => {
  // undefined
    return this.client.enableStageTransition(params as any).promise();
  }

  getActionType: (params: RawParamsFrom<'getActionType'>) => Promise<ReturnTypeFrom<'getActionType'>>  = async params => {
  // undefined
    return this.client.getActionType(params as any).promise();
  }

  getJobDetails: (params: RawParamsFrom<'getJobDetails'>) => Promise<ReturnTypeFrom<'getJobDetails'>>  = async params => {
  // undefined
    return this.client.getJobDetails(params as any).promise();
  }

  getPipeline: (params: RawParamsFrom<'getPipeline'>) => Promise<ReturnTypeFrom<'getPipeline'>>  = async params => {
  // undefined
    return this.client.getPipeline(params as any).promise();
  }

  getPipelineExecution: (params: RawParamsFrom<'getPipelineExecution'>) => Promise<ReturnTypeFrom<'getPipelineExecution'>>  = async params => {
  // undefined
    return this.client.getPipelineExecution(params as any).promise();
  }

  getPipelineState: (params: RawParamsFrom<'getPipelineState'>) => Promise<ReturnTypeFrom<'getPipelineState'>>  = async params => {
  // undefined
    return this.client.getPipelineState(params as any).promise();
  }

  getThirdPartyJobDetails: (params: RawParamsFrom<'getThirdPartyJobDetails'>) => Promise<ReturnTypeFrom<'getThirdPartyJobDetails'>>  = async params => {
  // undefined
    return this.client.getThirdPartyJobDetails(params as any).promise();
  }

  async listActionExecutions(params: { [K in keyof ParamsFrom<'listActionExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listActionExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listActionExecutions'>]-?: ReturnTypeFrom<'listActionExecutions'>[K]}['actionExecutionDetails'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"actionExecutionDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listActionExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listActionExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.actionExecutionDetails ?? []) ? (result.actionExecutionDetails ?? []) : [result.actionExecutionDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listActionTypes(params: { [K in keyof ParamsFrom<'listActionTypes', { next?: string }>]: ParamsFrom<'listActionTypes', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listActionTypes'>]-?: ReturnTypeFrom<'listActionTypes'>[K]}['actionTypes'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"actionTypes"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listActionTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listActionTypes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.actionTypes ?? []) ? (result.actionTypes ?? []) : [result.actionTypes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelineExecutions(params: { [K in keyof ParamsFrom<'listPipelineExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listPipelineExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipelineExecutions'>]-?: ReturnTypeFrom<'listPipelineExecutions'>[K]}['pipelineExecutionSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"pipelineExecutionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPipelineExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPipelineExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.pipelineExecutionSummaries ?? []) ? (result.pipelineExecutionSummaries ?? []) : [result.pipelineExecutionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelines(params: { [K in keyof ParamsFrom<'listPipelines', { next?: string, limit?: number }>]: ParamsFrom<'listPipelines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['pipelines'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"pipelines"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPipelines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPipelines' })).toString('base64') : undefined;
    const member = (Array.isArray(result.pipelines ?? []) ? (result.pipelines ?? []) : [result.pipelines]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tags ?? []) ? (result.tags ?? []) : [result.tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWebhooks(params: { [K in keyof ParamsFrom<'listWebhooks', { next?: string, limit?: number }>]: ParamsFrom<'listWebhooks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWebhooks'>]-?: ReturnTypeFrom<'listWebhooks'>[K]}['webhooks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"webhooks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWebhooks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listWebhooks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.webhooks ?? []) ? (result.webhooks ?? []) : [result.webhooks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  pollForJobs: (params: RawParamsFrom<'pollForJobs'>) => Promise<ReturnTypeFrom<'pollForJobs'>>  = async params => {
  // undefined
    return this.client.pollForJobs(params as any).promise();
  }

  pollForThirdPartyJobs: (params: RawParamsFrom<'pollForThirdPartyJobs'>) => Promise<ReturnTypeFrom<'pollForThirdPartyJobs'>>  = async params => {
  // undefined
    return this.client.pollForThirdPartyJobs(params as any).promise();
  }

  putActionRevision: (params: RawParamsFrom<'putActionRevision'>) => Promise<ReturnTypeFrom<'putActionRevision'>>  = async params => {
  // undefined
    return this.client.putActionRevision(params as any).promise();
  }

  putApprovalResult: (params: RawParamsFrom<'putApprovalResult'>) => Promise<ReturnTypeFrom<'putApprovalResult'>>  = async params => {
  // undefined
    return this.client.putApprovalResult(params as any).promise();
  }

  putJobFailureResult: (params: RawParamsFrom<'putJobFailureResult'>) => Promise<ReturnTypeFrom<'putJobFailureResult'>>  = async params => {
  // undefined
    return this.client.putJobFailureResult(params as any).promise();
  }

  putJobSuccessResult: (params: RawParamsFrom<'putJobSuccessResult'>) => Promise<ReturnTypeFrom<'putJobSuccessResult'>>  = async params => {
  // undefined
    return this.client.putJobSuccessResult(params as any).promise();
  }

  putThirdPartyJobFailureResult: (params: RawParamsFrom<'putThirdPartyJobFailureResult'>) => Promise<ReturnTypeFrom<'putThirdPartyJobFailureResult'>>  = async params => {
  // undefined
    return this.client.putThirdPartyJobFailureResult(params as any).promise();
  }

  putThirdPartyJobSuccessResult: (params: RawParamsFrom<'putThirdPartyJobSuccessResult'>) => Promise<ReturnTypeFrom<'putThirdPartyJobSuccessResult'>>  = async params => {
  // undefined
    return this.client.putThirdPartyJobSuccessResult(params as any).promise();
  }

  putWebhook: (params: RawParamsFrom<'putWebhook'>) => Promise<ReturnTypeFrom<'putWebhook'>>  = async params => {
  // undefined
    return this.client.putWebhook(params as any).promise();
  }

  registerWebhookWithThirdParty: (params: RawParamsFrom<'registerWebhookWithThirdParty'>) => Promise<ReturnTypeFrom<'registerWebhookWithThirdParty'>>  = async params => {
  // undefined
    return this.client.registerWebhookWithThirdParty(params as any).promise();
  }

  retryStageExecution: (params: RawParamsFrom<'retryStageExecution'>) => Promise<ReturnTypeFrom<'retryStageExecution'>>  = async params => {
  // undefined
    return this.client.retryStageExecution(params as any).promise();
  }

  startPipelineExecution: (params: RawParamsFrom<'startPipelineExecution'>) => Promise<ReturnTypeFrom<'startPipelineExecution'>>  = async params => {
  // undefined
    return this.client.startPipelineExecution(params as any).promise();
  }

  stopPipelineExecution: (params: RawParamsFrom<'stopPipelineExecution'>) => Promise<ReturnTypeFrom<'stopPipelineExecution'>>  = async params => {
  // undefined
    return this.client.stopPipelineExecution(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateActionType: (params: RawParamsFrom<'updateActionType'>) => Promise<ReturnTypeFrom<'updateActionType'>>  = async params => {
  // undefined
    return this.client.updateActionType(params as any).promise();
  }

  updatePipeline: (params: RawParamsFrom<'updatePipeline'>) => Promise<ReturnTypeFrom<'updatePipeline'>>  = async params => {
  // undefined
    return this.client.updatePipeline(params as any).promise();
  }
  
  static fromClient(client: AWSCodePipeline): CodePipeline {
    return new CodePipeline(client) as any;
  }
  
  static client(options?: AWSCodePipeline.Types.ClientConfiguration): CodePipeline {
    return new CodePipeline(new AWSCodePipeline(options)) as any;
  }
}  
