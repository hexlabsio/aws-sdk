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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'batch';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeComputeEnvironments","describeJobDefinitions","describeJobQueues","listJobs","listSchedulingPolicies"];
    
  cancelJob: FunctionTypeFrom<'cancelJob'>;

  createComputeEnvironment: FunctionTypeFrom<'createComputeEnvironment'>;

  createJobQueue: FunctionTypeFrom<'createJobQueue'>;

  createSchedulingPolicy: FunctionTypeFrom<'createSchedulingPolicy'>;

  deleteComputeEnvironment: FunctionTypeFrom<'deleteComputeEnvironment'>;

  deleteJobQueue: FunctionTypeFrom<'deleteJobQueue'>;

  deleteSchedulingPolicy: FunctionTypeFrom<'deleteSchedulingPolicy'>;

  deregisterJobDefinition: FunctionTypeFrom<'deregisterJobDefinition'>;

  describeComputeEnvironments(params: { [K in keyof Omit<ParamsFrom<'describeComputeEnvironments', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeComputeEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeComputeEnvironments'>]-?: ReturnTypeFrom<'describeComputeEnvironments'>[K]}['computeEnvironments'] }>
  describeComputeEnvironments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeComputeEnvironments'>]-?: ReturnTypeFrom<'describeComputeEnvironments'>[K]}['computeEnvironments'] }>;

  describeJobDefinitions(params: { [K in keyof Omit<ParamsFrom<'describeJobDefinitions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobDefinitions'>]-?: ReturnTypeFrom<'describeJobDefinitions'>[K]}['jobDefinitions'] }>
  describeJobDefinitions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobDefinitions'>]-?: ReturnTypeFrom<'describeJobDefinitions'>[K]}['jobDefinitions'] }>;

  describeJobQueues(params: { [K in keyof Omit<ParamsFrom<'describeJobQueues', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeJobQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobQueues'>]-?: ReturnTypeFrom<'describeJobQueues'>[K]}['jobQueues'] }>
  describeJobQueues(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobQueues'>]-?: ReturnTypeFrom<'describeJobQueues'>[K]}['jobQueues'] }>;

  describeJobs: FunctionTypeFrom<'describeJobs'>;

  describeSchedulingPolicies: FunctionTypeFrom<'describeSchedulingPolicies'>;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['jobSummaryList'] }>
  listJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['jobSummaryList'] }>;

  listSchedulingPolicies(params: { [K in keyof Omit<ParamsFrom<'listSchedulingPolicies', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSchedulingPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchedulingPolicies'>]-?: ReturnTypeFrom<'listSchedulingPolicies'>[K]}['schedulingPolicies'] }>
  listSchedulingPolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchedulingPolicies'>]-?: ReturnTypeFrom<'listSchedulingPolicies'>[K]}['schedulingPolicies'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  registerJobDefinition: FunctionTypeFrom<'registerJobDefinition'>;

  submitJob: FunctionTypeFrom<'submitJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  terminateJob: FunctionTypeFrom<'terminateJob'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateComputeEnvironment: FunctionTypeFrom<'updateComputeEnvironment'>;

  updateJobQueue: FunctionTypeFrom<'updateJobQueue'>;

  updateSchedulingPolicy: FunctionTypeFrom<'updateSchedulingPolicy'>
}
 
export class Batch implements ClientType {
  private constructor(private readonly client: AWSBatch) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'batch';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeComputeEnvironments","describeJobDefinitions","describeJobQueues","listJobs","listSchedulingPolicies"] as const;
  
  async cancelJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJob(...args).promise()
  }

  async createComputeEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createComputeEnvironment(...args).promise()
  }

  async createJobQueue(...args: any): Promise<any> {
  // undefined
    return this.client.createJobQueue(...args).promise()
  }

  async createSchedulingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createSchedulingPolicy(...args).promise()
  }

  async deleteComputeEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteComputeEnvironment(...args).promise()
  }

  async deleteJobQueue(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJobQueue(...args).promise()
  }

  async deleteSchedulingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchedulingPolicy(...args).promise()
  }

  async deregisterJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterJobDefinition(...args).promise()
  }

  async describeComputeEnvironments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"computeEnvironments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeComputeEnvironments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.computeEnvironments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeJobDefinitions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobDefinitions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobDefinitions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeJobQueues(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobQueues"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobQueues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobQueues ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeJobs(...args: any): Promise<any> {
  // undefined
    return this.client.describeJobs(...args).promise()
  }

  async describeSchedulingPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.describeSchedulingPolicies(...args).promise()
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchedulingPolicies(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"schedulingPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSchedulingPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.schedulingPolicies ?? [];
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

  async registerJobDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.registerJobDefinition(...args).promise()
  }

  async submitJob(...args: any): Promise<any> {
  // undefined
    return this.client.submitJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async terminateJob(...args: any): Promise<any> {
  // undefined
    return this.client.terminateJob(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateComputeEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.updateComputeEnvironment(...args).promise()
  }

  async updateJobQueue(...args: any): Promise<any> {
  // undefined
    return this.client.updateJobQueue(...args).promise()
  }

  async updateSchedulingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateSchedulingPolicy(...args).promise()
  }
  
  static fromClient(client: AWSBatch): ClientType {
    return new Batch(client) as any;
  }
  
  static client(options?: AWSBatch.Types.ClientConfiguration): ClientType {
    return new Batch(new AWSBatch(options)) as any;
  }
}  
