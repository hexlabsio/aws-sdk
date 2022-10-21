import { Request, Batch as AWSBatch } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSBatch> = AWSBatch[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSBatch> = AWSBatch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSBatch[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSBatch, Extras> = AWSBatch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSBatch> = AWSBatch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Batch {
  private constructor(private readonly client: AWSBatch) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'batch' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeComputeEnvironments","describeJobDefinitions","describeJobQueues","listJobs","listSchedulingPolicies"] as const;
  
  cancelJob: (params: RawParamsFrom<'cancelJob'>) => Promise<ReturnTypeFrom<'cancelJob'>>  = async params => {
  // undefined
    return this.client.cancelJob(params as any).promise();
  }

  createComputeEnvironment: (params: RawParamsFrom<'createComputeEnvironment'>) => Promise<ReturnTypeFrom<'createComputeEnvironment'>>  = async params => {
  // undefined
    return this.client.createComputeEnvironment(params as any).promise();
  }

  createJobQueue: (params: RawParamsFrom<'createJobQueue'>) => Promise<ReturnTypeFrom<'createJobQueue'>>  = async params => {
  // undefined
    return this.client.createJobQueue(params as any).promise();
  }

  createSchedulingPolicy: (params: RawParamsFrom<'createSchedulingPolicy'>) => Promise<ReturnTypeFrom<'createSchedulingPolicy'>>  = async params => {
  // undefined
    return this.client.createSchedulingPolicy(params as any).promise();
  }

  deleteComputeEnvironment: (params: RawParamsFrom<'deleteComputeEnvironment'>) => Promise<ReturnTypeFrom<'deleteComputeEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteComputeEnvironment(params as any).promise();
  }

  deleteJobQueue: (params: RawParamsFrom<'deleteJobQueue'>) => Promise<ReturnTypeFrom<'deleteJobQueue'>>  = async params => {
  // undefined
    return this.client.deleteJobQueue(params as any).promise();
  }

  deleteSchedulingPolicy: (params: RawParamsFrom<'deleteSchedulingPolicy'>) => Promise<ReturnTypeFrom<'deleteSchedulingPolicy'>>  = async params => {
  // undefined
    return this.client.deleteSchedulingPolicy(params as any).promise();
  }

  deregisterJobDefinition: (params: RawParamsFrom<'deregisterJobDefinition'>) => Promise<ReturnTypeFrom<'deregisterJobDefinition'>>  = async params => {
  // undefined
    return this.client.deregisterJobDefinition(params as any).promise();
  }

  async describeComputeEnvironments(params: { [K in keyof ParamsFrom<'describeComputeEnvironments', { next?: string, limit?: number }>]: ParamsFrom<'describeComputeEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeComputeEnvironments'>]-?: ReturnTypeFrom<'describeComputeEnvironments'>[K]}['computeEnvironments'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"computeEnvironments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeComputeEnvironments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeComputeEnvironments' })).toString('base64');
    const member = (Array.isArray(result.computeEnvironments ?? []) ? (result.computeEnvironments ?? []) : [result.computeEnvironments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeJobDefinitions(params: { [K in keyof ParamsFrom<'describeJobDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'describeJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeJobDefinitions'>]-?: ReturnTypeFrom<'describeJobDefinitions'>[K]}['jobDefinitions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobDefinitions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeJobDefinitions' })).toString('base64');
    const member = (Array.isArray(result.jobDefinitions ?? []) ? (result.jobDefinitions ?? []) : [result.jobDefinitions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeJobQueues(params: { [K in keyof ParamsFrom<'describeJobQueues', { next?: string, limit?: number }>]: ParamsFrom<'describeJobQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeJobQueues'>]-?: ReturnTypeFrom<'describeJobQueues'>[K]}['jobQueues'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobQueues"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobQueues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeJobQueues' })).toString('base64');
    const member = (Array.isArray(result.jobQueues ?? []) ? (result.jobQueues ?? []) : [result.jobQueues]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeJobs: (params: RawParamsFrom<'describeJobs'>) => Promise<ReturnTypeFrom<'describeJobs'>>  = async params => {
  // undefined
    return this.client.describeJobs(params as any).promise();
  }

  describeSchedulingPolicies: (params: RawParamsFrom<'describeSchedulingPolicies'>) => Promise<ReturnTypeFrom<'describeSchedulingPolicies'>>  = async params => {
  // undefined
    return this.client.describeSchedulingPolicies(params as any).promise();
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string, limit?: number }>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['jobSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listJobs' })).toString('base64');
    const member = (Array.isArray(result.jobSummaryList ?? []) ? (result.jobSummaryList ?? []) : [result.jobSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchedulingPolicies(params: { [K in keyof ParamsFrom<'listSchedulingPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listSchedulingPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchedulingPolicies'>]-?: ReturnTypeFrom<'listSchedulingPolicies'>[K]}['schedulingPolicies'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"schedulingPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSchedulingPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSchedulingPolicies' })).toString('base64');
    const member = (Array.isArray(result.schedulingPolicies ?? []) ? (result.schedulingPolicies ?? []) : [result.schedulingPolicies]) as any;
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

  registerJobDefinition: (params: RawParamsFrom<'registerJobDefinition'>) => Promise<ReturnTypeFrom<'registerJobDefinition'>>  = async params => {
  // undefined
    return this.client.registerJobDefinition(params as any).promise();
  }

  submitJob: (params: RawParamsFrom<'submitJob'>) => Promise<ReturnTypeFrom<'submitJob'>>  = async params => {
  // undefined
    return this.client.submitJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  terminateJob: (params: RawParamsFrom<'terminateJob'>) => Promise<ReturnTypeFrom<'terminateJob'>>  = async params => {
  // undefined
    return this.client.terminateJob(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateComputeEnvironment: (params: RawParamsFrom<'updateComputeEnvironment'>) => Promise<ReturnTypeFrom<'updateComputeEnvironment'>>  = async params => {
  // undefined
    return this.client.updateComputeEnvironment(params as any).promise();
  }

  updateJobQueue: (params: RawParamsFrom<'updateJobQueue'>) => Promise<ReturnTypeFrom<'updateJobQueue'>>  = async params => {
  // undefined
    return this.client.updateJobQueue(params as any).promise();
  }

  updateSchedulingPolicy: (params: RawParamsFrom<'updateSchedulingPolicy'>) => Promise<ReturnTypeFrom<'updateSchedulingPolicy'>>  = async params => {
  // undefined
    return this.client.updateSchedulingPolicy(params as any).promise();
  }
  
  static fromClient(client: AWSBatch): Batch {
    return new Batch(client) as any;
  }
  
  static client(options?: AWSBatch.Types.ClientConfiguration): Batch {
    return new Batch(new AWSBatch(options)) as any;
  }
}  
