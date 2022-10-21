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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMediaConvert> = AWSMediaConvert[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MediaConvert {
  private constructor(private readonly client: AWSMediaConvert) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mediaconvert' as const;
  public readonly global = false as const;
  public readonly category = 'Media Services' as const;
  public readonly topLevelCalls = ["describeEndpoints","listJobTemplates","listJobs","listPresets","listQueues"] as const;
  
  associateCertificate: (params: RawParamsFrom<'associateCertificate'>) => Promise<ReturnTypeFrom<'associateCertificate'>>  = async params => {
  // undefined
    return this.client.associateCertificate(params as any).promise();
  }

  cancelJob: (params: RawParamsFrom<'cancelJob'>) => Promise<ReturnTypeFrom<'cancelJob'>>  = async params => {
  // undefined
    return this.client.cancelJob(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  createJobTemplate: (params: RawParamsFrom<'createJobTemplate'>) => Promise<ReturnTypeFrom<'createJobTemplate'>>  = async params => {
  // undefined
    return this.client.createJobTemplate(params as any).promise();
  }

  createPreset: (params: RawParamsFrom<'createPreset'>) => Promise<ReturnTypeFrom<'createPreset'>>  = async params => {
  // undefined
    return this.client.createPreset(params as any).promise();
  }

  createQueue: (params: RawParamsFrom<'createQueue'>) => Promise<ReturnTypeFrom<'createQueue'>>  = async params => {
  // undefined
    return this.client.createQueue(params as any).promise();
  }

  deleteJobTemplate: (params: RawParamsFrom<'deleteJobTemplate'>) => Promise<ReturnTypeFrom<'deleteJobTemplate'>>  = async params => {
  // undefined
    return this.client.deleteJobTemplate(params as any).promise();
  }

  deletePolicy: (params: RawParamsFrom<'deletePolicy'>) => Promise<ReturnTypeFrom<'deletePolicy'>>  = async params => {
  // undefined
    return this.client.deletePolicy(params as any).promise();
  }

  deletePreset: (params: RawParamsFrom<'deletePreset'>) => Promise<ReturnTypeFrom<'deletePreset'>>  = async params => {
  // undefined
    return this.client.deletePreset(params as any).promise();
  }

  deleteQueue: (params: RawParamsFrom<'deleteQueue'>) => Promise<ReturnTypeFrom<'deleteQueue'>>  = async params => {
  // undefined
    return this.client.deleteQueue(params as any).promise();
  }

  async describeEndpoints(params: { [K in keyof ParamsFrom<'describeEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'describeEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEndpoints'>]-?: ReturnTypeFrom<'describeEndpoints'>[K]}['Endpoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Endpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEndpoints' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Endpoints ?? []) ? (result.Endpoints ?? []) : [result.Endpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disassociateCertificate: (params: RawParamsFrom<'disassociateCertificate'>) => Promise<ReturnTypeFrom<'disassociateCertificate'>>  = async params => {
  // undefined
    return this.client.disassociateCertificate(params as any).promise();
  }

  getJob: (params: RawParamsFrom<'getJob'>) => Promise<ReturnTypeFrom<'getJob'>>  = async params => {
  // undefined
    return this.client.getJob(params as any).promise();
  }

  getJobTemplate: (params: RawParamsFrom<'getJobTemplate'>) => Promise<ReturnTypeFrom<'getJobTemplate'>>  = async params => {
  // undefined
    return this.client.getJobTemplate(params as any).promise();
  }

  getPolicy: (params: RawParamsFrom<'getPolicy'>) => Promise<ReturnTypeFrom<'getPolicy'>>  = async params => {
  // undefined
    return this.client.getPolicy(params as any).promise();
  }

  getPreset: (params: RawParamsFrom<'getPreset'>) => Promise<ReturnTypeFrom<'getPreset'>>  = async params => {
  // undefined
    return this.client.getPreset(params as any).promise();
  }

  getQueue: (params: RawParamsFrom<'getQueue'>) => Promise<ReturnTypeFrom<'getQueue'>>  = async params => {
  // undefined
    return this.client.getQueue(params as any).promise();
  }

  async listJobTemplates(params: { [K in keyof ParamsFrom<'listJobTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listJobTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobTemplates'>]-?: ReturnTypeFrom<'listJobTemplates'>[K]}['JobTemplates'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"JobTemplates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listJobTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.JobTemplates ?? []) ? (result.JobTemplates ?? []) : [result.JobTemplates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string, limit?: number }>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Jobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Jobs ?? []) ? (result.Jobs ?? []) : [result.Jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPresets(params: { [K in keyof ParamsFrom<'listPresets', { next?: string, limit?: number }>]: ParamsFrom<'listPresets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPresets'>]-?: ReturnTypeFrom<'listPresets'>[K]}['Presets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Presets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPresets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPresets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Presets ?? []) ? (result.Presets ?? []) : [result.Presets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listQueues(params: { [K in keyof ParamsFrom<'listQueues', { next?: string, limit?: number }>]: ParamsFrom<'listQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listQueues'>]-?: ReturnTypeFrom<'listQueues'>[K]}['Queues'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Queues"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listQueues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listQueues' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Queues ?? []) ? (result.Queues ?? []) : [result.Queues]) as any;
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

  putPolicy: (params: RawParamsFrom<'putPolicy'>) => Promise<ReturnTypeFrom<'putPolicy'>>  = async params => {
  // undefined
    return this.client.putPolicy(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateJobTemplate: (params: RawParamsFrom<'updateJobTemplate'>) => Promise<ReturnTypeFrom<'updateJobTemplate'>>  = async params => {
  // undefined
    return this.client.updateJobTemplate(params as any).promise();
  }

  updatePreset: (params: RawParamsFrom<'updatePreset'>) => Promise<ReturnTypeFrom<'updatePreset'>>  = async params => {
  // undefined
    return this.client.updatePreset(params as any).promise();
  }

  updateQueue: (params: RawParamsFrom<'updateQueue'>) => Promise<ReturnTypeFrom<'updateQueue'>>  = async params => {
  // undefined
    return this.client.updateQueue(params as any).promise();
  }
  
  static fromClient(client: AWSMediaConvert): MediaConvert {
    return new MediaConvert(client) as any;
  }
  
  static client(options?: AWSMediaConvert.Types.ClientConfiguration): MediaConvert {
    return new MediaConvert(new AWSMediaConvert(options)) as any;
  }
}  
