import { Request, EMRcontainers as AWSEMRcontainers } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEMRcontainers> = AWSEMRcontainers[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEMRcontainers> = AWSEMRcontainers[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEMRcontainers[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEMRcontainers, Extras> = AWSEMRcontainers[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'emr-containers';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["listVirtualClusters"];
    
  cancelJobRun: FunctionTypeFrom<'cancelJobRun'>;

  createManagedEndpoint: FunctionTypeFrom<'createManagedEndpoint'>;

  createVirtualCluster: FunctionTypeFrom<'createVirtualCluster'>;

  deleteManagedEndpoint: FunctionTypeFrom<'deleteManagedEndpoint'>;

  deleteVirtualCluster: FunctionTypeFrom<'deleteVirtualCluster'>;

  describeJobRun: FunctionTypeFrom<'describeJobRun'>;

  describeManagedEndpoint: FunctionTypeFrom<'describeManagedEndpoint'>;

  describeVirtualCluster: FunctionTypeFrom<'describeVirtualCluster'>;

  listJobRuns(params: { [K in keyof Omit<ParamsFrom<'listJobRuns', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listJobRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobRuns'>]-?: ReturnTypeFrom<'listJobRuns'>[K]}['jobRuns'] }>
  ;

  listManagedEndpoints(params: { [K in keyof Omit<ParamsFrom<'listManagedEndpoints', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listManagedEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listManagedEndpoints'>]-?: ReturnTypeFrom<'listManagedEndpoints'>[K]}['endpoints'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listVirtualClusters(params: { [K in keyof Omit<ParamsFrom<'listVirtualClusters', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listVirtualClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualClusters'>]-?: ReturnTypeFrom<'listVirtualClusters'>[K]}['virtualClusters'] }>
  listVirtualClusters(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualClusters'>]-?: ReturnTypeFrom<'listVirtualClusters'>[K]}['virtualClusters'] }>;

  startJobRun: FunctionTypeFrom<'startJobRun'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class EMRcontainers implements ClientType {
  private constructor(private readonly client: AWSEMRcontainers) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'emr-containers';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["listVirtualClusters"] as const;
  
  async cancelJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJobRun(...args).promise()
  }

  async createManagedEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createManagedEndpoint(...args).promise()
  }

  async createVirtualCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createVirtualCluster(...args).promise()
  }

  async deleteManagedEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteManagedEndpoint(...args).promise()
  }

  async deleteVirtualCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVirtualCluster(...args).promise()
  }

  async describeJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.describeJobRun(...args).promise()
  }

  async describeManagedEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.describeManagedEndpoint(...args).promise()
  }

  async describeVirtualCluster(...args: any): Promise<any> {
  // undefined
    return this.client.describeVirtualCluster(...args).promise()
  }

  async listJobRuns(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobRuns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobRuns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobRuns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listManagedEndpoints(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"endpoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listManagedEndpoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.endpoints ?? [];
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

  async listVirtualClusters(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"virtualClusters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listVirtualClusters(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.virtualClusters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startJobRun(...args: any): Promise<any> {
  // undefined
    return this.client.startJobRun(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSEMRcontainers): ClientType {
    return new EMRcontainers(client) as any;
  }
  
  static client(options?: AWSEMRcontainers.Types.ClientConfiguration): ClientType {
    return new EMRcontainers(new AWSEMRcontainers(options)) as any;
  }
}  
