import { Request, MediaConvert as AWSMediaConvert } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMediaConvert> = AWSMediaConvert[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMediaConvert> = AWSMediaConvert[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMediaConvert[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMediaConvert, Extras> = AWSMediaConvert[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mediaconvert';
    global: false;
    category: 'Media Services'
    topLevelCalls: readonly ["describeEndpoints","listJobTemplates","listJobs","listPresets","listQueues"];
    
  associateCertificate: FunctionTypeFrom<'associateCertificate'>;

  cancelJob: FunctionTypeFrom<'cancelJob'>;

  createJob: FunctionTypeFrom<'createJob'>;

  createJobTemplate: FunctionTypeFrom<'createJobTemplate'>;

  createPreset: FunctionTypeFrom<'createPreset'>;

  createQueue: FunctionTypeFrom<'createQueue'>;

  deleteJobTemplate: FunctionTypeFrom<'deleteJobTemplate'>;

  deletePolicy: FunctionTypeFrom<'deletePolicy'>;

  deletePreset: FunctionTypeFrom<'deletePreset'>;

  deleteQueue: FunctionTypeFrom<'deleteQueue'>;

  describeEndpoints(params: { [K in keyof Omit<ParamsFrom<'describeEndpoints', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEndpoints'>]-?: ReturnTypeFrom<'describeEndpoints'>[K]}['Endpoints'] }>
  describeEndpoints(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEndpoints'>]-?: ReturnTypeFrom<'describeEndpoints'>[K]}['Endpoints'] }>;

  disassociateCertificate: FunctionTypeFrom<'disassociateCertificate'>;

  getJob: FunctionTypeFrom<'getJob'>;

  getJobTemplate: FunctionTypeFrom<'getJobTemplate'>;

  getPolicy: FunctionTypeFrom<'getPolicy'>;

  getPreset: FunctionTypeFrom<'getPreset'>;

  getQueue: FunctionTypeFrom<'getQueue'>;

  listJobTemplates(params: { [K in keyof Omit<ParamsFrom<'listJobTemplates', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listJobTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobTemplates'>]-?: ReturnTypeFrom<'listJobTemplates'>[K]}['JobTemplates'] }>
  listJobTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobTemplates'>]-?: ReturnTypeFrom<'listJobTemplates'>[K]}['JobTemplates'] }>;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'] }>
  listJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'] }>;

  listPresets(params: { [K in keyof Omit<ParamsFrom<'listPresets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPresets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPresets'>]-?: ReturnTypeFrom<'listPresets'>[K]}['Presets'] }>
  listPresets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPresets'>]-?: ReturnTypeFrom<'listPresets'>[K]}['Presets'] }>;

  listQueues(params: { [K in keyof Omit<ParamsFrom<'listQueues', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQueues'>]-?: ReturnTypeFrom<'listQueues'>[K]}['Queues'] }>
  listQueues(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listQueues'>]-?: ReturnTypeFrom<'listQueues'>[K]}['Queues'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putPolicy: FunctionTypeFrom<'putPolicy'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateJobTemplate: FunctionTypeFrom<'updateJobTemplate'>;

  updatePreset: FunctionTypeFrom<'updatePreset'>;

  updateQueue: FunctionTypeFrom<'updateQueue'>
}
 
export class MediaConvert implements ClientType {
  private constructor(private readonly client: AWSMediaConvert) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediaconvert';
  public readonly global = false;
  public readonly category = 'Media Services';
  public readonly topLevelCalls = ["describeEndpoints","listJobTemplates","listJobs","listPresets","listQueues"] as const;
  
  async associateCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.associateCertificate(...args).promise()
  }

  async cancelJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJob(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async createJobTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createJobTemplate(...args).promise()
  }

  async createPreset(...args: any): Promise<any> {
  // undefined
    return this.client.createPreset(...args).promise()
  }

  async createQueue(...args: any): Promise<any> {
  // undefined
    return this.client.createQueue(...args).promise()
  }

  async deleteJobTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJobTemplate(...args).promise()
  }

  async deletePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicy(...args).promise()
  }

  async deletePreset(...args: any): Promise<any> {
  // undefined
    return this.client.deletePreset(...args).promise()
  }

  async deleteQueue(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQueue(...args).promise()
  }

  async describeEndpoints(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Endpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Endpoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disassociateCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateCertificate(...args).promise()
  }

  async getJob(...args: any): Promise<any> {
  // undefined
    return this.client.getJob(...args).promise()
  }

  async getJobTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getJobTemplate(...args).promise()
  }

  async getPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicy(...args).promise()
  }

  async getPreset(...args: any): Promise<any> {
  // undefined
    return this.client.getPreset(...args).promise()
  }

  async getQueue(...args: any): Promise<any> {
  // undefined
    return this.client.getQueue(...args).promise()
  }

  async listJobTemplates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobTemplates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.JobTemplates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPresets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Presets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPresets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Presets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listQueues(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Queues"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Queues ?? [];
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

  async putPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putPolicy(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateJobTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateJobTemplate(...args).promise()
  }

  async updatePreset(...args: any): Promise<any> {
  // undefined
    return this.client.updatePreset(...args).promise()
  }

  async updateQueue(...args: any): Promise<any> {
  // undefined
    return this.client.updateQueue(...args).promise()
  }
  
  static fromClient(client: AWSMediaConvert): ClientType {
    return new MediaConvert(client) as any;
  }
  
  static client(options?: AWSMediaConvert.Types.ClientConfiguration): ClientType {
    return new MediaConvert(new AWSMediaConvert(options)) as any;
  }
}  
