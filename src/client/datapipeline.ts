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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'datapipeline';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["listPipelines"];
    
  activatePipeline: FunctionTypeFrom<'activatePipeline'>;

  addTags: FunctionTypeFrom<'addTags'>;

  createPipeline: FunctionTypeFrom<'createPipeline'>;

  deactivatePipeline: FunctionTypeFrom<'deactivatePipeline'>;

  deletePipeline: FunctionTypeFrom<'deletePipeline'>;

  describeObjects(params: { [K in keyof Omit<ParamsFrom<'describeObjects', { next?: string }>, 'marker'>]: ParamsFrom<'describeObjects', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeObjects'>]-?: ReturnTypeFrom<'describeObjects'>[K]}['pipelineObjects'] }>
  ;

  describePipelines: FunctionTypeFrom<'describePipelines'>;

  evaluateExpression: FunctionTypeFrom<'evaluateExpression'>;

  getPipelineDefinition: FunctionTypeFrom<'getPipelineDefinition'>;

  listPipelines(params: { [K in keyof Omit<ParamsFrom<'listPipelines', { next?: string }>, 'marker'>]: ParamsFrom<'listPipelines', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['pipelineIdList'] }>
  listPipelines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['pipelineIdList'] }>;

  pollForTask: FunctionTypeFrom<'pollForTask'>;

  putPipelineDefinition: FunctionTypeFrom<'putPipelineDefinition'>;

  queryObjects(params: { [K in keyof Omit<ParamsFrom<'queryObjects', { next?: string, limit?: number }>, 'marker' | 'limit'>]: ParamsFrom<'queryObjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'queryObjects'>]-?: ReturnTypeFrom<'queryObjects'>[K]}['ids'] }>
  ;

  removeTags: FunctionTypeFrom<'removeTags'>;

  reportTaskProgress: FunctionTypeFrom<'reportTaskProgress'>;

  reportTaskRunnerHeartbeat: FunctionTypeFrom<'reportTaskRunnerHeartbeat'>;

  setStatus: FunctionTypeFrom<'setStatus'>;

  setTaskStatus: FunctionTypeFrom<'setTaskStatus'>;

  validatePipelineDefinition: FunctionTypeFrom<'validatePipelineDefinition'>
}
 
export class DataPipeline implements ClientType {
  private constructor(private readonly client: AWSDataPipeline) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'datapipeline';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["listPipelines"] as const;
  
  async activatePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.activatePipeline(...args).promise()
  }

  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async createPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createPipeline(...args).promise()
  }

  async deactivatePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deactivatePipeline(...args).promise()
  }

  async deletePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deletePipeline(...args).promise()
  }

  async describeObjects(...args: any): Promise<any> {
    // {"inputToken":"marker","moreResults":"hasMoreResults","outputToken":"marker","resultKey":"pipelineObjects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeObjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.marker;
    const member = result.pipelineObjects ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePipelines(...args: any): Promise<any> {
  // {"resultKey":"pipelineDescriptionList"}
    return this.client.describePipelines(...args).promise()
  }

  async evaluateExpression(...args: any): Promise<any> {
  // undefined
    return this.client.evaluateExpression(...args).promise()
  }

  async getPipelineDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.getPipelineDefinition(...args).promise()
  }

  async listPipelines(...args: any): Promise<any> {
    // {"inputToken":"marker","moreResults":"hasMoreResults","outputToken":"marker","resultKey":"pipelineIdList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listPipelines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.marker;
    const member = result.pipelineIdList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async pollForTask(...args: any): Promise<any> {
  // undefined
    return this.client.pollForTask(...args).promise()
  }

  async putPipelineDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.putPipelineDefinition(...args).promise()
  }

  async queryObjects(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"limit","moreResults":"hasMoreResults","outputToken":"marker","resultKey":"ids"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.queryObjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.marker;
    const member = result.ids ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async removeTags(...args: any): Promise<any> {
  // undefined
    return this.client.removeTags(...args).promise()
  }

  async reportTaskProgress(...args: any): Promise<any> {
  // undefined
    return this.client.reportTaskProgress(...args).promise()
  }

  async reportTaskRunnerHeartbeat(...args: any): Promise<any> {
  // undefined
    return this.client.reportTaskRunnerHeartbeat(...args).promise()
  }

  async setStatus(...args: any): Promise<any> {
  // undefined
    return this.client.setStatus(...args).promise()
  }

  async setTaskStatus(...args: any): Promise<any> {
  // undefined
    return this.client.setTaskStatus(...args).promise()
  }

  async validatePipelineDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.validatePipelineDefinition(...args).promise()
  }
  
  static fromClient(client: AWSDataPipeline): ClientType {
    return new DataPipeline(client) as any;
  }
  
  static client(options?: AWSDataPipeline.Types.ClientConfiguration): ClientType {
    return new DataPipeline(new AWSDataPipeline(options)) as any;
  }
}  
