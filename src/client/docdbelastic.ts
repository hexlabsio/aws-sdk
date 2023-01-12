import { Request, DocDBElastic as AWSDocDBElastic } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDocDBElastic> = AWSDocDBElastic[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDocDBElastic> = AWSDocDBElastic[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDocDBElastic[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDocDBElastic, Extras> = AWSDocDBElastic[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDocDBElastic> = AWSDocDBElastic[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DocDBElastic {
  private constructor(private readonly client: AWSDocDBElastic) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'docdb-elastic' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listClusterSnapshots","listClusters"] as const;
  
  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createClusterSnapshot: (params: RawParamsFrom<'createClusterSnapshot'>) => Promise<ReturnTypeFrom<'createClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.createClusterSnapshot(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteClusterSnapshot: (params: RawParamsFrom<'deleteClusterSnapshot'>) => Promise<ReturnTypeFrom<'deleteClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteClusterSnapshot(params as any).promise();
  }

  getCluster: (params: RawParamsFrom<'getCluster'>) => Promise<ReturnTypeFrom<'getCluster'>>  = async params => {
  // undefined
    return this.client.getCluster(params as any).promise();
  }

  getClusterSnapshot: (params: RawParamsFrom<'getClusterSnapshot'>) => Promise<ReturnTypeFrom<'getClusterSnapshot'>>  = async params => {
  // undefined
    return this.client.getClusterSnapshot(params as any).promise();
  }

  async listClusterSnapshots(params: { [K in keyof ParamsFrom<'listClusterSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'listClusterSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClusterSnapshots'>]-?: ReturnTypeFrom<'listClusterSnapshots'>[K]}['snapshots'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClusterSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listClusterSnapshots' })).toString('base64') : undefined;
    const member = (Array.isArray(result.snapshots ?? []) ? (result.snapshots ?? []) : [result.snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(params: { [K in keyof ParamsFrom<'listClusters', { next?: string, limit?: number }>]: ParamsFrom<'listClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['clusters'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"clusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listClusters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.clusters ?? []) ? (result.clusters ?? []) : [result.clusters]) as any;
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

  restoreClusterFromSnapshot: (params: RawParamsFrom<'restoreClusterFromSnapshot'>) => Promise<ReturnTypeFrom<'restoreClusterFromSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreClusterFromSnapshot(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCluster: (params: RawParamsFrom<'updateCluster'>) => Promise<ReturnTypeFrom<'updateCluster'>>  = async params => {
  // undefined
    return this.client.updateCluster(params as any).promise();
  }
  
  static fromClient(client: AWSDocDBElastic): DocDBElastic {
    return new DocDBElastic(client) as any;
  }
  
  static client(options?: AWSDocDBElastic.Types.ClientConfiguration): DocDBElastic {
    return new DocDBElastic(new AWSDocDBElastic(options)) as any;
  }
}  
