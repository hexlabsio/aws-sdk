import { Request, DataPipeline as AWSDataPipeline } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDataPipeline> = AWSDataPipeline[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDataPipeline> = AWSDataPipeline[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDataPipeline[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDataPipeline, Extras> = AWSDataPipeline[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDataPipeline> = AWSDataPipeline[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DataPipeline {
  private constructor(private readonly client: AWSDataPipeline) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'datapipeline' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["listPipelines"] as const;
  
  activatePipeline: (params: RawParamsFrom<'activatePipeline'>) => Promise<ReturnTypeFrom<'activatePipeline'>>  = async params => {
  // undefined
    return this.client.activatePipeline(params as any).promise();
  }

  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  createPipeline: (params: RawParamsFrom<'createPipeline'>) => Promise<ReturnTypeFrom<'createPipeline'>>  = async params => {
  // undefined
    return this.client.createPipeline(params as any).promise();
  }

  deactivatePipeline: (params: RawParamsFrom<'deactivatePipeline'>) => Promise<ReturnTypeFrom<'deactivatePipeline'>>  = async params => {
  // undefined
    return this.client.deactivatePipeline(params as any).promise();
  }

  deletePipeline: (params: RawParamsFrom<'deletePipeline'>) => Promise<ReturnTypeFrom<'deletePipeline'>>  = async params => {
  // undefined
    return this.client.deletePipeline(params as any).promise();
  }

  async describeObjects(params: { [K in keyof ParamsFrom<'describeObjects', { next?: string }>]: ParamsFrom<'describeObjects', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeObjects'>]-?: ReturnTypeFrom<'describeObjects'>[K]}['pipelineObjects'], undefined>}> {
    // {"inputToken":"marker","moreResults":"hasMoreResults","outputToken":"marker","resultKey":"pipelineObjects"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.describeObjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.marker ;
    const member = (Array.isArray(result.pipelineObjects ?? []) ? (result.pipelineObjects ?? []) : [result.pipelineObjects]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describePipelines(params: { [K in keyof ParamsFrom<'describePipelines', {}>]: ParamsFrom<'describePipelines', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePipelines'>]-?: ReturnTypeFrom<'describePipelines'>[K]}['pipelineDescriptionList'], undefined>}> {
    // {"resultKey":"pipelineDescriptionList"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describePipelines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.pipelineDescriptionList ?? []) ? (result.pipelineDescriptionList ?? []) : [result.pipelineDescriptionList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  evaluateExpression: (params: RawParamsFrom<'evaluateExpression'>) => Promise<ReturnTypeFrom<'evaluateExpression'>>  = async params => {
  // undefined
    return this.client.evaluateExpression(params as any).promise();
  }

  getPipelineDefinition: (params: RawParamsFrom<'getPipelineDefinition'>) => Promise<ReturnTypeFrom<'getPipelineDefinition'>>  = async params => {
  // undefined
    return this.client.getPipelineDefinition(params as any).promise();
  }

  async listPipelines(params: { [K in keyof ParamsFrom<'listPipelines', { next?: string }>]: ParamsFrom<'listPipelines', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['pipelineIdList'], undefined>}> {
    // {"inputToken":"marker","moreResults":"hasMoreResults","outputToken":"marker","resultKey":"pipelineIdList"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listPipelines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.marker ;
    const member = (Array.isArray(result.pipelineIdList ?? []) ? (result.pipelineIdList ?? []) : [result.pipelineIdList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  pollForTask: (params: RawParamsFrom<'pollForTask'>) => Promise<ReturnTypeFrom<'pollForTask'>>  = async params => {
  // undefined
    return this.client.pollForTask(params as any).promise();
  }

  putPipelineDefinition: (params: RawParamsFrom<'putPipelineDefinition'>) => Promise<ReturnTypeFrom<'putPipelineDefinition'>>  = async params => {
  // undefined
    return this.client.putPipelineDefinition(params as any).promise();
  }

  async queryObjects(params: { [K in keyof ParamsFrom<'queryObjects', { next?: string, limit?: number }>]: ParamsFrom<'queryObjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'queryObjects'>]-?: ReturnTypeFrom<'queryObjects'>[K]}['ids'], undefined>}> {
    // {"inputToken":"marker","limitKey":"limit","moreResults":"hasMoreResults","outputToken":"marker","resultKey":"ids"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.queryObjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.marker ;
    const member = (Array.isArray(result.ids ?? []) ? (result.ids ?? []) : [result.ids]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  removeTags: (params: RawParamsFrom<'removeTags'>) => Promise<ReturnTypeFrom<'removeTags'>>  = async params => {
  // undefined
    return this.client.removeTags(params as any).promise();
  }

  reportTaskProgress: (params: RawParamsFrom<'reportTaskProgress'>) => Promise<ReturnTypeFrom<'reportTaskProgress'>>  = async params => {
  // undefined
    return this.client.reportTaskProgress(params as any).promise();
  }

  reportTaskRunnerHeartbeat: (params: RawParamsFrom<'reportTaskRunnerHeartbeat'>) => Promise<ReturnTypeFrom<'reportTaskRunnerHeartbeat'>>  = async params => {
  // undefined
    return this.client.reportTaskRunnerHeartbeat(params as any).promise();
  }

  setStatus: (params: RawParamsFrom<'setStatus'>) => Promise<ReturnTypeFrom<'setStatus'>>  = async params => {
  // undefined
    return this.client.setStatus(params as any).promise();
  }

  setTaskStatus: (params: RawParamsFrom<'setTaskStatus'>) => Promise<ReturnTypeFrom<'setTaskStatus'>>  = async params => {
  // undefined
    return this.client.setTaskStatus(params as any).promise();
  }

  validatePipelineDefinition: (params: RawParamsFrom<'validatePipelineDefinition'>) => Promise<ReturnTypeFrom<'validatePipelineDefinition'>>  = async params => {
  // undefined
    return this.client.validatePipelineDefinition(params as any).promise();
  }
  
  static fromClient(client: AWSDataPipeline): DataPipeline {
    return new DataPipeline(client) as any;
  }
  
  static client(options?: AWSDataPipeline.Types.ClientConfiguration): DataPipeline {
    return new DataPipeline(new AWSDataPipeline(options)) as any;
  }
}  
