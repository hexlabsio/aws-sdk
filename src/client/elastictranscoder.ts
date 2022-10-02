import { Request, ElasticTranscoder as AWSElasticTranscoder } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSElasticTranscoder> = AWSElasticTranscoder[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSElasticTranscoder> = AWSElasticTranscoder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSElasticTranscoder[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSElasticTranscoder, Extras> = AWSElasticTranscoder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'elastictranscoder';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["listPipelines","listPresets"];
    
  cancelJob: FunctionTypeFrom<'cancelJob'>;

  createJob: FunctionTypeFrom<'createJob'>;

  createPipeline: FunctionTypeFrom<'createPipeline'>;

  createPreset: FunctionTypeFrom<'createPreset'>;

  deletePipeline: FunctionTypeFrom<'deletePipeline'>;

  deletePreset: FunctionTypeFrom<'deletePreset'>;

  listJobsByPipeline(params: { [K in keyof Omit<ParamsFrom<'listJobsByPipeline', { next?: string }>, 'PageToken'>]: ParamsFrom<'listJobsByPipeline', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobsByPipeline'>]-?: ReturnTypeFrom<'listJobsByPipeline'>[K]}['Jobs'] }>
  ;

  listJobsByStatus(params: { [K in keyof Omit<ParamsFrom<'listJobsByStatus', { next?: string }>, 'PageToken'>]: ParamsFrom<'listJobsByStatus', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobsByStatus'>]-?: ReturnTypeFrom<'listJobsByStatus'>[K]}['Jobs'] }>
  ;

  listPipelines(params: { [K in keyof Omit<ParamsFrom<'listPipelines', { next?: string }>, 'PageToken'>]: ParamsFrom<'listPipelines', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['Pipelines'] }>
  listPipelines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['Pipelines'] }>;

  listPresets(params: { [K in keyof Omit<ParamsFrom<'listPresets', { next?: string }>, 'PageToken'>]: ParamsFrom<'listPresets', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPresets'>]-?: ReturnTypeFrom<'listPresets'>[K]}['Presets'] }>
  listPresets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPresets'>]-?: ReturnTypeFrom<'listPresets'>[K]}['Presets'] }>;

  readJob: FunctionTypeFrom<'readJob'>;

  readPipeline: FunctionTypeFrom<'readPipeline'>;

  readPreset: FunctionTypeFrom<'readPreset'>;

  testRole: FunctionTypeFrom<'testRole'>;

  updatePipeline: FunctionTypeFrom<'updatePipeline'>;

  updatePipelineNotifications: FunctionTypeFrom<'updatePipelineNotifications'>;

  updatePipelineStatus: FunctionTypeFrom<'updatePipelineStatus'>
}
 
export class ElasticTranscoder implements ClientType {
  private constructor(private readonly client: AWSElasticTranscoder) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elastictranscoder';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["listPipelines","listPresets"] as const;
  
  async cancelJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJob(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async createPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createPipeline(...args).promise()
  }

  async createPreset(...args: any): Promise<any> {
  // undefined
    return this.client.createPreset(...args).promise()
  }

  async deletePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deletePipeline(...args).promise()
  }

  async deletePreset(...args: any): Promise<any> {
  // undefined
    return this.client.deletePreset(...args).promise()
  }

  async listJobsByPipeline(...args: any): Promise<any> {
    // {"inputToken":"PageToken","outputToken":"NextPageToken","resultKey":"Jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PageToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listJobsByPipeline(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPageToken;
    const member = result.Jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobsByStatus(...args: any): Promise<any> {
    // {"inputToken":"PageToken","outputToken":"NextPageToken","resultKey":"Jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PageToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listJobsByStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPageToken;
    const member = result.Jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPipelines(...args: any): Promise<any> {
    // {"inputToken":"PageToken","outputToken":"NextPageToken","resultKey":"Pipelines"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PageToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listPipelines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPageToken;
    const member = result.Pipelines ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPresets(...args: any): Promise<any> {
    // {"inputToken":"PageToken","outputToken":"NextPageToken","resultKey":"Presets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PageToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listPresets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPageToken;
    const member = result.Presets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async readJob(...args: any): Promise<any> {
  // undefined
    return this.client.readJob(...args).promise()
  }

  async readPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.readPipeline(...args).promise()
  }

  async readPreset(...args: any): Promise<any> {
  // undefined
    return this.client.readPreset(...args).promise()
  }

  async testRole(...args: any): Promise<any> {
  // undefined
    return this.client.testRole(...args).promise()
  }

  async updatePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.updatePipeline(...args).promise()
  }

  async updatePipelineNotifications(...args: any): Promise<any> {
  // undefined
    return this.client.updatePipelineNotifications(...args).promise()
  }

  async updatePipelineStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updatePipelineStatus(...args).promise()
  }
  
  static fromClient(client: AWSElasticTranscoder): ClientType {
    return new ElasticTranscoder(client) as any;
  }
  
  static client(options?: AWSElasticTranscoder.Types.ClientConfiguration): ClientType {
    return new ElasticTranscoder(new AWSElasticTranscoder(options)) as any;
  }
}  
