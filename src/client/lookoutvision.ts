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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'lookoutvision';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listProjects"];
    
  createDataset: FunctionTypeFrom<'createDataset'>;

  createModel: FunctionTypeFrom<'createModel'>;

  createProject: FunctionTypeFrom<'createProject'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  deleteModel: FunctionTypeFrom<'deleteModel'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  describeDataset: FunctionTypeFrom<'describeDataset'>;

  describeModel: FunctionTypeFrom<'describeModel'>;

  describeModelPackagingJob: FunctionTypeFrom<'describeModelPackagingJob'>;

  describeProject: FunctionTypeFrom<'describeProject'>;

  detectAnomalies: FunctionTypeFrom<'detectAnomalies'>;

  listDatasetEntries(params: { [K in keyof Omit<ParamsFrom<'listDatasetEntries', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatasetEntries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetEntries'>]-?: ReturnTypeFrom<'listDatasetEntries'>[K]}['DatasetEntries'] }>
  ;

  listModelPackagingJobs(params: { [K in keyof Omit<ParamsFrom<'listModelPackagingJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModelPackagingJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelPackagingJobs'>]-?: ReturnTypeFrom<'listModelPackagingJobs'>[K]}['ModelPackagingJobs'] }>
  ;

  listModels(params: { [K in keyof Omit<ParamsFrom<'listModels', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModels'>]-?: ReturnTypeFrom<'listModels'>[K]}['Models'] }>
  ;

  listProjects(params: { [K in keyof Omit<ParamsFrom<'listProjects', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['Projects'] }>
  listProjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['Projects'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startModel: FunctionTypeFrom<'startModel'>;

  startModelPackagingJob: FunctionTypeFrom<'startModelPackagingJob'>;

  stopModel: FunctionTypeFrom<'stopModel'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDatasetEntries: FunctionTypeFrom<'updateDatasetEntries'>
}
 
export class LookoutVision implements ClientType {
  private constructor(private readonly client: AWSLookoutVision) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lookoutvision';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listProjects"] as const;
  
  async createDataset(...args: any): Promise<any> {
  // undefined
    return this.client.createDataset(...args).promise()
  }

  async createModel(...args: any): Promise<any> {
  // undefined
    return this.client.createModel(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async deleteModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModel(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async describeDataset(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataset(...args).promise()
  }

  async describeModel(...args: any): Promise<any> {
  // undefined
    return this.client.describeModel(...args).promise()
  }

  async describeModelPackagingJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeModelPackagingJob(...args).promise()
  }

  async describeProject(...args: any): Promise<any> {
  // undefined
    return this.client.describeProject(...args).promise()
  }

  async detectAnomalies(...args: any): Promise<any> {
  // undefined
    return this.client.detectAnomalies(...args).promise()
  }

  async listDatasetEntries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetEntries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetEntries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DatasetEntries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelPackagingJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ModelPackagingJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModelPackagingJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ModelPackagingJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Models"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listModels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Models ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Projects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Projects ?? [];
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

  async startModel(...args: any): Promise<any> {
  // undefined
    return this.client.startModel(...args).promise()
  }

  async startModelPackagingJob(...args: any): Promise<any> {
  // undefined
    return this.client.startModelPackagingJob(...args).promise()
  }

  async stopModel(...args: any): Promise<any> {
  // undefined
    return this.client.stopModel(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDatasetEntries(...args: any): Promise<any> {
  // undefined
    return this.client.updateDatasetEntries(...args).promise()
  }
  
  static fromClient(client: AWSLookoutVision): ClientType {
    return new LookoutVision(client) as any;
  }
  
  static client(options?: AWSLookoutVision.Types.ClientConfiguration): ClientType {
    return new LookoutVision(new AWSLookoutVision(options)) as any;
  }
}  
