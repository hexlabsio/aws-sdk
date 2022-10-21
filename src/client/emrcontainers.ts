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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEMRcontainers> = AWSEMRcontainers[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EMRcontainers {
  private constructor(private readonly client: AWSEMRcontainers) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'emr-containers' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["listVirtualClusters"] as const;
  
  cancelJobRun: (params: RawParamsFrom<'cancelJobRun'>) => Promise<ReturnTypeFrom<'cancelJobRun'>>  = async params => {
  // undefined
    return this.client.cancelJobRun(params as any).promise();
  }

  createManagedEndpoint: (params: RawParamsFrom<'createManagedEndpoint'>) => Promise<ReturnTypeFrom<'createManagedEndpoint'>>  = async params => {
  // undefined
    return this.client.createManagedEndpoint(params as any).promise();
  }

  createVirtualCluster: (params: RawParamsFrom<'createVirtualCluster'>) => Promise<ReturnTypeFrom<'createVirtualCluster'>>  = async params => {
  // undefined
    return this.client.createVirtualCluster(params as any).promise();
  }

  deleteManagedEndpoint: (params: RawParamsFrom<'deleteManagedEndpoint'>) => Promise<ReturnTypeFrom<'deleteManagedEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteManagedEndpoint(params as any).promise();
  }

  deleteVirtualCluster: (params: RawParamsFrom<'deleteVirtualCluster'>) => Promise<ReturnTypeFrom<'deleteVirtualCluster'>>  = async params => {
  // undefined
    return this.client.deleteVirtualCluster(params as any).promise();
  }

  describeJobRun: (params: RawParamsFrom<'describeJobRun'>) => Promise<ReturnTypeFrom<'describeJobRun'>>  = async params => {
  // undefined
    return this.client.describeJobRun(params as any).promise();
  }

  describeManagedEndpoint: (params: RawParamsFrom<'describeManagedEndpoint'>) => Promise<ReturnTypeFrom<'describeManagedEndpoint'>>  = async params => {
  // undefined
    return this.client.describeManagedEndpoint(params as any).promise();
  }

  describeVirtualCluster: (params: RawParamsFrom<'describeVirtualCluster'>) => Promise<ReturnTypeFrom<'describeVirtualCluster'>>  = async params => {
  // undefined
    return this.client.describeVirtualCluster(params as any).promise();
  }

  async listJobRuns(params: { [K in keyof ParamsFrom<'listJobRuns', { next?: string, limit?: number }>]: ParamsFrom<'listJobRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobRuns'>]-?: ReturnTypeFrom<'listJobRuns'>[K]}['jobRuns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobRuns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listJobRuns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.jobRuns ?? []) ? (result.jobRuns ?? []) : [result.jobRuns]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listManagedEndpoints(params: { [K in keyof ParamsFrom<'listManagedEndpoints', { next?: string, limit?: number }>]: ParamsFrom<'listManagedEndpoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listManagedEndpoints'>]-?: ReturnTypeFrom<'listManagedEndpoints'>[K]}['endpoints'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"endpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listManagedEndpoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.endpoints ?? []) ? (result.endpoints ?? []) : [result.endpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listVirtualClusters(params: { [K in keyof ParamsFrom<'listVirtualClusters', { next?: string, limit?: number }>]: ParamsFrom<'listVirtualClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVirtualClusters'>]-?: ReturnTypeFrom<'listVirtualClusters'>[K]}['virtualClusters'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"virtualClusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listVirtualClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.virtualClusters ?? []) ? (result.virtualClusters ?? []) : [result.virtualClusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  startJobRun: (params: RawParamsFrom<'startJobRun'>) => Promise<ReturnTypeFrom<'startJobRun'>>  = async params => {
  // undefined
    return this.client.startJobRun(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSEMRcontainers): EMRcontainers {
    return new EMRcontainers(client) as any;
  }
  
  static client(options?: AWSEMRcontainers.Types.ClientConfiguration): EMRcontainers {
    return new EMRcontainers(new AWSEMRcontainers(options)) as any;
  }
}  
