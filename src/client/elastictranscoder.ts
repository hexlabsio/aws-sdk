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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSElasticTranscoder> = AWSElasticTranscoder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ElasticTranscoder {
  private constructor(private readonly client: AWSElasticTranscoder) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elastictranscoder' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["listPipelines","listPresets"] as const;
  
  cancelJob: (params: RawParamsFrom<'cancelJob'>) => Promise<ReturnTypeFrom<'cancelJob'>>  = async params => {
  // undefined
    return this.client.cancelJob(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  createPipeline: (params: RawParamsFrom<'createPipeline'>) => Promise<ReturnTypeFrom<'createPipeline'>>  = async params => {
  // undefined
    return this.client.createPipeline(params as any).promise();
  }

  createPreset: (params: RawParamsFrom<'createPreset'>) => Promise<ReturnTypeFrom<'createPreset'>>  = async params => {
  // undefined
    return this.client.createPreset(params as any).promise();
  }

  deletePipeline: (params: RawParamsFrom<'deletePipeline'>) => Promise<ReturnTypeFrom<'deletePipeline'>>  = async params => {
  // undefined
    return this.client.deletePipeline(params as any).promise();
  }

  deletePreset: (params: RawParamsFrom<'deletePreset'>) => Promise<ReturnTypeFrom<'deletePreset'>>  = async params => {
  // undefined
    return this.client.deletePreset(params as any).promise();
  }

  async listJobsByPipeline(params: { [K in keyof ParamsFrom<'listJobsByPipeline', { next?: string }>]: ParamsFrom<'listJobsByPipeline', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobsByPipeline'>]-?: ReturnTypeFrom<'listJobsByPipeline'>[K]}['Jobs'], undefined>}> {
    // {"inputToken":"PageToken","outputToken":"NextPageToken","resultKey":"Jobs"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PageToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listJobsByPipeline({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPageToken ;
    const member = (Array.isArray(result.Jobs ?? []) ? (result.Jobs ?? []) : [result.Jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listJobsByStatus(params: { [K in keyof ParamsFrom<'listJobsByStatus', { next?: string }>]: ParamsFrom<'listJobsByStatus', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobsByStatus'>]-?: ReturnTypeFrom<'listJobsByStatus'>[K]}['Jobs'], undefined>}> {
    // {"inputToken":"PageToken","outputToken":"NextPageToken","resultKey":"Jobs"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PageToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listJobsByStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPageToken ;
    const member = (Array.isArray(result.Jobs ?? []) ? (result.Jobs ?? []) : [result.Jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPipelines(params: { [K in keyof ParamsFrom<'listPipelines', { next?: string }>]: ParamsFrom<'listPipelines', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPipelines'>]-?: ReturnTypeFrom<'listPipelines'>[K]}['Pipelines'], undefined>}> {
    // {"inputToken":"PageToken","outputToken":"NextPageToken","resultKey":"Pipelines"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PageToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listPipelines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPageToken ;
    const member = (Array.isArray(result.Pipelines ?? []) ? (result.Pipelines ?? []) : [result.Pipelines]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPresets(params: { [K in keyof ParamsFrom<'listPresets', { next?: string }>]: ParamsFrom<'listPresets', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPresets'>]-?: ReturnTypeFrom<'listPresets'>[K]}['Presets'], undefined>}> {
    // {"inputToken":"PageToken","outputToken":"NextPageToken","resultKey":"Presets"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PageToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listPresets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPageToken ;
    const member = (Array.isArray(result.Presets ?? []) ? (result.Presets ?? []) : [result.Presets]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  readJob: (params: RawParamsFrom<'readJob'>) => Promise<ReturnTypeFrom<'readJob'>>  = async params => {
  // undefined
    return this.client.readJob(params as any).promise();
  }

  readPipeline: (params: RawParamsFrom<'readPipeline'>) => Promise<ReturnTypeFrom<'readPipeline'>>  = async params => {
  // undefined
    return this.client.readPipeline(params as any).promise();
  }

  readPreset: (params: RawParamsFrom<'readPreset'>) => Promise<ReturnTypeFrom<'readPreset'>>  = async params => {
  // undefined
    return this.client.readPreset(params as any).promise();
  }

  testRole: (params: RawParamsFrom<'testRole'>) => Promise<ReturnTypeFrom<'testRole'>>  = async params => {
  // undefined
    return this.client.testRole(params as any).promise();
  }

  updatePipeline: (params: RawParamsFrom<'updatePipeline'>) => Promise<ReturnTypeFrom<'updatePipeline'>>  = async params => {
  // undefined
    return this.client.updatePipeline(params as any).promise();
  }

  updatePipelineNotifications: (params: RawParamsFrom<'updatePipelineNotifications'>) => Promise<ReturnTypeFrom<'updatePipelineNotifications'>>  = async params => {
  // undefined
    return this.client.updatePipelineNotifications(params as any).promise();
  }

  updatePipelineStatus: (params: RawParamsFrom<'updatePipelineStatus'>) => Promise<ReturnTypeFrom<'updatePipelineStatus'>>  = async params => {
  // undefined
    return this.client.updatePipelineStatus(params as any).promise();
  }
  
  static fromClient(client: AWSElasticTranscoder): ElasticTranscoder {
    return new ElasticTranscoder(client) as any;
  }
  
  static client(options?: AWSElasticTranscoder.Types.ClientConfiguration): ElasticTranscoder {
    return new ElasticTranscoder(new AWSElasticTranscoder(options)) as any;
  }
}  
