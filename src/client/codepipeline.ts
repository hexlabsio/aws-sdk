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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codepipeline';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["listActionTypes","listPipelines","listWebhooks"];
    
  acknowledgeJob: FunctionTypeFrom<'acknowledgeJob'>;

  acknowledgeThirdPartyJob: FunctionTypeFrom<'acknowledgeThirdPartyJob'>;

  createCustomActionType: FunctionTypeFrom<'createCustomActionType'>;

  createPipeline: FunctionTypeFrom<'createPipeline'>;

  deleteCustomActionType: FunctionTypeFrom<'deleteCustomActionType'>;

  deletePipeline: FunctionTypeFrom<'deletePipeline'>;

  deleteWebhook: FunctionTypeFrom<'deleteWebhook'>;

  deregisterWebhookWithThirdParty: FunctionTypeFrom<'deregisterWebhookWithThirdParty'>;

  disableStageTransition: FunctionTypeFrom<'disableStageTransition'>;

  enableStageTransition: FunctionTypeFrom<'enableStageTransition'>;

  getActionType: FunctionTypeFrom<'getActionType'>;

  getJobDetails: FunctionTypeFrom<'getJobDetails'>;

  getPipeline: FunctionTypeFrom<'getPipeline'>;

  getPipelineExecution: FunctionTypeFrom<'getPipelineExecution'>;

  getPipelineState: FunctionTypeFrom<'getPipelineState'>;

  getThirdPartyJobDetails: FunctionTypeFrom<'getThirdPartyJobDetails'>;

  listActionExecutions(params: { [K in keyof Omit<ParamsFrom<'listActionExecutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listActionExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActionExecutions'>]-?: ReturnTypeFrom<'listActionExecutions'>[K]}['actionExecutionDetails'] }>
  ;

  listActionTypes(params: { [K in keyof Omit<ParamsFrom<'listActionTypes', { next?: string }>, 'nextToken'>]: ParamsFrom<'listActionTypes', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActionTypes'>]-?: ReturnTypeFrom<'listActionTypes'>[K]}['actionTypes'] }>
  listActionTypes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listActionTypes'>]-?: ReturnTypeFrom<'listActionTypes'>[K]}['actionTypes'] }>;

  listPipelineExecutions(params: { [K in keyof Omit<ParamsFrom<'listPipelineExecutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPipelineExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelineExecutions'>]-?: ReturnTypeFrom<'listPipelineExecutions'>[K]}['pipelineExecutionSummaries'] }>
  ;

  listPipelines(params: { [K in keyof Omit<ParamsFrom<'listPipelines', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPipelines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['pipelines'] }>
  listPipelines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['pipelines'] }>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'] }>
  ;

  listWebhooks(params: { [K in keyof Omit<ParamsFrom<'listWebhooks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listWebhooks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWebhooks'>]-?: ReturnTypeFrom<'listWebhooks'>[K]}['webhooks'] }>
  listWebhooks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWebhooks'>]-?: ReturnTypeFrom<'listWebhooks'>[K]}['webhooks'] }>;

  pollForJobs: FunctionTypeFrom<'pollForJobs'>;

  pollForThirdPartyJobs: FunctionTypeFrom<'pollForThirdPartyJobs'>;

  putActionRevision: FunctionTypeFrom<'putActionRevision'>;

  putApprovalResult: FunctionTypeFrom<'putApprovalResult'>;

  putJobFailureResult: FunctionTypeFrom<'putJobFailureResult'>;

  putJobSuccessResult: FunctionTypeFrom<'putJobSuccessResult'>;

  putThirdPartyJobFailureResult: FunctionTypeFrom<'putThirdPartyJobFailureResult'>;

  putThirdPartyJobSuccessResult: FunctionTypeFrom<'putThirdPartyJobSuccessResult'>;

  putWebhook: FunctionTypeFrom<'putWebhook'>;

  registerWebhookWithThirdParty: FunctionTypeFrom<'registerWebhookWithThirdParty'>;

  retryStageExecution: FunctionTypeFrom<'retryStageExecution'>;

  startPipelineExecution: FunctionTypeFrom<'startPipelineExecution'>;

  stopPipelineExecution: FunctionTypeFrom<'stopPipelineExecution'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateActionType: FunctionTypeFrom<'updateActionType'>;

  updatePipeline: FunctionTypeFrom<'updatePipeline'>
}
 
export class CodePipeline implements ClientType {
  private constructor(private readonly client: AWSCodePipeline) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codepipeline';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["listActionTypes","listPipelines","listWebhooks"] as const;
  
  async acknowledgeJob(...args: any): Promise<any> {
  // undefined
    return this.client.acknowledgeJob(...args).promise()
  }

  async acknowledgeThirdPartyJob(...args: any): Promise<any> {
  // undefined
    return this.client.acknowledgeThirdPartyJob(...args).promise()
  }

  async createCustomActionType(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomActionType(...args).promise()
  }

  async createPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createPipeline(...args).promise()
  }

  async deleteCustomActionType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomActionType(...args).promise()
  }

  async deletePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deletePipeline(...args).promise()
  }

  async deleteWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWebhook(...args).promise()
  }

  async deregisterWebhookWithThirdParty(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterWebhookWithThirdParty(...args).promise()
  }

  async disableStageTransition(...args: any): Promise<any> {
  // undefined
    return this.client.disableStageTransition(...args).promise()
  }

  async enableStageTransition(...args: any): Promise<any> {
  // undefined
    return this.client.enableStageTransition(...args).promise()
  }

  async getActionType(...args: any): Promise<any> {
  // undefined
    return this.client.getActionType(...args).promise()
  }

  async getJobDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getJobDetails(...args).promise()
  }

  async getPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.getPipeline(...args).promise()
  }

  async getPipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.getPipelineExecution(...args).promise()
  }

  async getPipelineState(...args: any): Promise<any> {
  // undefined
    return this.client.getPipelineState(...args).promise()
  }

  async getThirdPartyJobDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getThirdPartyJobDetails(...args).promise()
  }

  async listActionExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"actionExecutionDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listActionExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.actionExecutionDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listActionTypes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"actionTypes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listActionTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.actionTypes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelineExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"pipelineExecutionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPipelineExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.pipelineExecutionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelines(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"pipelines"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPipelines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.pipelines ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWebhooks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"webhooks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWebhooks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.webhooks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async pollForJobs(...args: any): Promise<any> {
  // undefined
    return this.client.pollForJobs(...args).promise()
  }

  async pollForThirdPartyJobs(...args: any): Promise<any> {
  // undefined
    return this.client.pollForThirdPartyJobs(...args).promise()
  }

  async putActionRevision(...args: any): Promise<any> {
  // undefined
    return this.client.putActionRevision(...args).promise()
  }

  async putApprovalResult(...args: any): Promise<any> {
  // undefined
    return this.client.putApprovalResult(...args).promise()
  }

  async putJobFailureResult(...args: any): Promise<any> {
  // undefined
    return this.client.putJobFailureResult(...args).promise()
  }

  async putJobSuccessResult(...args: any): Promise<any> {
  // undefined
    return this.client.putJobSuccessResult(...args).promise()
  }

  async putThirdPartyJobFailureResult(...args: any): Promise<any> {
  // undefined
    return this.client.putThirdPartyJobFailureResult(...args).promise()
  }

  async putThirdPartyJobSuccessResult(...args: any): Promise<any> {
  // undefined
    return this.client.putThirdPartyJobSuccessResult(...args).promise()
  }

  async putWebhook(...args: any): Promise<any> {
  // undefined
    return this.client.putWebhook(...args).promise()
  }

  async registerWebhookWithThirdParty(...args: any): Promise<any> {
  // undefined
    return this.client.registerWebhookWithThirdParty(...args).promise()
  }

  async retryStageExecution(...args: any): Promise<any> {
  // undefined
    return this.client.retryStageExecution(...args).promise()
  }

  async startPipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startPipelineExecution(...args).promise()
  }

  async stopPipelineExecution(...args: any): Promise<any> {
  // undefined
    return this.client.stopPipelineExecution(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateActionType(...args: any): Promise<any> {
  // undefined
    return this.client.updateActionType(...args).promise()
  }

  async updatePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.updatePipeline(...args).promise()
  }
  
  static fromClient(client: AWSCodePipeline): ClientType {
    return new CodePipeline(client) as any;
  }
  
  static client(options?: AWSCodePipeline.Types.ClientConfiguration): ClientType {
    return new CodePipeline(new AWSCodePipeline(options)) as any;
  }
}  
