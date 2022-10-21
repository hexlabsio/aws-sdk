import { Request, LookoutVision as AWSLookoutVision } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLookoutVision> = AWSLookoutVision[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLookoutVision> = AWSLookoutVision[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLookoutVision[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLookoutVision, Extras> = AWSLookoutVision[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLookoutVision> = AWSLookoutVision[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LookoutVision {
  private constructor(private readonly client: AWSLookoutVision) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lookoutvision' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listProjects"] as const;
  
  createDataset: (params: RawParamsFrom<'createDataset'>) => Promise<ReturnTypeFrom<'createDataset'>>  = async params => {
  // undefined
    return this.client.createDataset(params as any).promise();
  }

  createModel: (params: RawParamsFrom<'createModel'>) => Promise<ReturnTypeFrom<'createModel'>>  = async params => {
  // undefined
    return this.client.createModel(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  deleteModel: (params: RawParamsFrom<'deleteModel'>) => Promise<ReturnTypeFrom<'deleteModel'>>  = async params => {
  // undefined
    return this.client.deleteModel(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  describeDataset: (params: RawParamsFrom<'describeDataset'>) => Promise<ReturnTypeFrom<'describeDataset'>>  = async params => {
  // undefined
    return this.client.describeDataset(params as any).promise();
  }

  describeModel: (params: RawParamsFrom<'describeModel'>) => Promise<ReturnTypeFrom<'describeModel'>>  = async params => {
  // undefined
    return this.client.describeModel(params as any).promise();
  }

  describeModelPackagingJob: (params: RawParamsFrom<'describeModelPackagingJob'>) => Promise<ReturnTypeFrom<'describeModelPackagingJob'>>  = async params => {
  // undefined
    return this.client.describeModelPackagingJob(params as any).promise();
  }

  describeProject: (params: RawParamsFrom<'describeProject'>) => Promise<ReturnTypeFrom<'describeProject'>>  = async params => {
  // undefined
    return this.client.describeProject(params as any).promise();
  }

  detectAnomalies: (params: RawParamsFrom<'detectAnomalies'>) => Promise<ReturnTypeFrom<'detectAnomalies'>>  = async params => {
  // undefined
    return this.client.detectAnomalies(params as any).promise();
  }

  async listDatasetEntries(params: { [K in keyof ParamsFrom<'listDatasetEntries', { next?: string, limit?: number }>]: ParamsFrom<'listDatasetEntries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasetEntries'>]-?: ReturnTypeFrom<'listDatasetEntries'>[K]}['DatasetEntries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetEntries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetEntries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDatasetEntries' })).toString('base64');
    const member = (Array.isArray(result.DatasetEntries ?? []) ? (result.DatasetEntries ?? []) : [result.DatasetEntries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelPackagingJobs(params: { [K in keyof ParamsFrom<'listModelPackagingJobs', { next?: string, limit?: number }>]: ParamsFrom<'listModelPackagingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelPackagingJobs'>]-?: ReturnTypeFrom<'listModelPackagingJobs'>[K]}['ModelPackagingJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ModelPackagingJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelPackagingJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModelPackagingJobs' })).toString('base64');
    const member = (Array.isArray(result.ModelPackagingJobs ?? []) ? (result.ModelPackagingJobs ?? []) : [result.ModelPackagingJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModels(params: { [K in keyof ParamsFrom<'listModels', { next?: string, limit?: number }>]: ParamsFrom<'listModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModels'>]-?: ReturnTypeFrom<'listModels'>[K]}['Models'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Models"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listModels' })).toString('base64');
    const member = (Array.isArray(result.Models ?? []) ? (result.Models ?? []) : [result.Models]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(params: { [K in keyof ParamsFrom<'listProjects', { next?: string, limit?: number }>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['Projects'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Projects"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listProjects' })).toString('base64');
    const member = (Array.isArray(result.Projects ?? []) ? (result.Projects ?? []) : [result.Projects]) as any;
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

  startModel: (params: RawParamsFrom<'startModel'>) => Promise<ReturnTypeFrom<'startModel'>>  = async params => {
  // undefined
    return this.client.startModel(params as any).promise();
  }

  startModelPackagingJob: (params: RawParamsFrom<'startModelPackagingJob'>) => Promise<ReturnTypeFrom<'startModelPackagingJob'>>  = async params => {
  // undefined
    return this.client.startModelPackagingJob(params as any).promise();
  }

  stopModel: (params: RawParamsFrom<'stopModel'>) => Promise<ReturnTypeFrom<'stopModel'>>  = async params => {
  // undefined
    return this.client.stopModel(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDatasetEntries: (params: RawParamsFrom<'updateDatasetEntries'>) => Promise<ReturnTypeFrom<'updateDatasetEntries'>>  = async params => {
  // undefined
    return this.client.updateDatasetEntries(params as any).promise();
  }
  
  static fromClient(client: AWSLookoutVision): LookoutVision {
    return new LookoutVision(client) as any;
  }
  
  static client(options?: AWSLookoutVision.Types.ClientConfiguration): LookoutVision {
    return new LookoutVision(new AWSLookoutVision(options)) as any;
  }
}  
