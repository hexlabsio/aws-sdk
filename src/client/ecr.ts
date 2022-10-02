import { Request, ECR as AWSECR } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSECR> = AWSECR[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSECR> = AWSECR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSECR[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSECR, Extras> = AWSECR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ecr';
    global: false;
    category: 'Containers'
    topLevelCalls: readonly ["describePullThroughCacheRules","describeRepositories"];
    
  batchCheckLayerAvailability: FunctionTypeFrom<'batchCheckLayerAvailability'>;

  batchDeleteImage: FunctionTypeFrom<'batchDeleteImage'>;

  batchGetImage: FunctionTypeFrom<'batchGetImage'>;

  batchGetRepositoryScanningConfiguration: FunctionTypeFrom<'batchGetRepositoryScanningConfiguration'>;

  completeLayerUpload: FunctionTypeFrom<'completeLayerUpload'>;

  createPullThroughCacheRule: FunctionTypeFrom<'createPullThroughCacheRule'>;

  createRepository: FunctionTypeFrom<'createRepository'>;

  deleteLifecyclePolicy: FunctionTypeFrom<'deleteLifecyclePolicy'>;

  deletePullThroughCacheRule: FunctionTypeFrom<'deletePullThroughCacheRule'>;

  deleteRegistryPolicy: FunctionTypeFrom<'deleteRegistryPolicy'>;

  deleteRepository: FunctionTypeFrom<'deleteRepository'>;

  deleteRepositoryPolicy: FunctionTypeFrom<'deleteRepositoryPolicy'>;

  describeImageReplicationStatus: FunctionTypeFrom<'describeImageReplicationStatus'>;

  describeImageScanFindings: FunctionTypeFrom<'describeImageScanFindings'>;

  describeImages(params: { [K in keyof Omit<ParamsFrom<'describeImages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeImages'>]-?: ReturnTypeFrom<'describeImages'>[K]}['imageDetails'] }>
  ;

  describePullThroughCacheRules(params: { [K in keyof Omit<ParamsFrom<'describePullThroughCacheRules', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describePullThroughCacheRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePullThroughCacheRules'>]-?: ReturnTypeFrom<'describePullThroughCacheRules'>[K]}['pullThroughCacheRules'] }>
  describePullThroughCacheRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePullThroughCacheRules'>]-?: ReturnTypeFrom<'describePullThroughCacheRules'>[K]}['pullThroughCacheRules'] }>;

  describeRegistry: FunctionTypeFrom<'describeRegistry'>;

  describeRepositories(params: { [K in keyof Omit<ParamsFrom<'describeRepositories', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRepositories'>]-?: ReturnTypeFrom<'describeRepositories'>[K]}['repositories'] }>
  describeRepositories(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRepositories'>]-?: ReturnTypeFrom<'describeRepositories'>[K]}['repositories'] }>;

  getAuthorizationToken: FunctionTypeFrom<'getAuthorizationToken'>;

  getDownloadUrlForLayer: FunctionTypeFrom<'getDownloadUrlForLayer'>;

  getLifecyclePolicy: FunctionTypeFrom<'getLifecyclePolicy'>;

  getLifecyclePolicyPreview(params: { [K in keyof Omit<ParamsFrom<'getLifecyclePolicyPreview', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getLifecyclePolicyPreview', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getLifecyclePolicyPreview'>]-?: ReturnTypeFrom<'getLifecyclePolicyPreview'>[K]}['previewResults'] }>
  ;

  getRegistryPolicy: FunctionTypeFrom<'getRegistryPolicy'>;

  getRegistryScanningConfiguration: FunctionTypeFrom<'getRegistryScanningConfiguration'>;

  getRepositoryPolicy: FunctionTypeFrom<'getRepositoryPolicy'>;

  initiateLayerUpload: FunctionTypeFrom<'initiateLayerUpload'>;

  listImages(params: { [K in keyof Omit<ParamsFrom<'listImages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImages'>]-?: ReturnTypeFrom<'listImages'>[K]}['imageIds'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putImage: FunctionTypeFrom<'putImage'>;

  putImageScanningConfiguration: FunctionTypeFrom<'putImageScanningConfiguration'>;

  putImageTagMutability: FunctionTypeFrom<'putImageTagMutability'>;

  putLifecyclePolicy: FunctionTypeFrom<'putLifecyclePolicy'>;

  putRegistryPolicy: FunctionTypeFrom<'putRegistryPolicy'>;

  putRegistryScanningConfiguration: FunctionTypeFrom<'putRegistryScanningConfiguration'>;

  putReplicationConfiguration: FunctionTypeFrom<'putReplicationConfiguration'>;

  setRepositoryPolicy: FunctionTypeFrom<'setRepositoryPolicy'>;

  startImageScan: FunctionTypeFrom<'startImageScan'>;

  startLifecyclePolicyPreview: FunctionTypeFrom<'startLifecyclePolicyPreview'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  uploadLayerPart: FunctionTypeFrom<'uploadLayerPart'>
}
 
export class ECR implements ClientType {
  private constructor(private readonly client: AWSECR) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ecr';
  public readonly global = false;
  public readonly category = 'Containers';
  public readonly topLevelCalls = ["describePullThroughCacheRules","describeRepositories"] as const;
  
  async batchCheckLayerAvailability(...args: any): Promise<any> {
  // undefined
    return this.client.batchCheckLayerAvailability(...args).promise()
  }

  async batchDeleteImage(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteImage(...args).promise()
  }

  async batchGetImage(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetImage(...args).promise()
  }

  async batchGetRepositoryScanningConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetRepositoryScanningConfiguration(...args).promise()
  }

  async completeLayerUpload(...args: any): Promise<any> {
  // undefined
    return this.client.completeLayerUpload(...args).promise()
  }

  async createPullThroughCacheRule(...args: any): Promise<any> {
  // undefined
    return this.client.createPullThroughCacheRule(...args).promise()
  }

  async createRepository(...args: any): Promise<any> {
  // undefined
    return this.client.createRepository(...args).promise()
  }

  async deleteLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLifecyclePolicy(...args).promise()
  }

  async deletePullThroughCacheRule(...args: any): Promise<any> {
  // undefined
    return this.client.deletePullThroughCacheRule(...args).promise()
  }

  async deleteRegistryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRegistryPolicy(...args).promise()
  }

  async deleteRepository(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRepository(...args).promise()
  }

  async deleteRepositoryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRepositoryPolicy(...args).promise()
  }

  async describeImageReplicationStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeImageReplicationStatus(...args).promise()
  }

  async describeImageScanFindings(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":["imageScanFindings.findings","imageScanFindings.enhancedFindings"]}
    return this.client.describeImageScanFindings(...args).promise()
  }

  async describeImages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imageDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePullThroughCacheRules(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"pullThroughCacheRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describePullThroughCacheRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.pullThroughCacheRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.describeRegistry(...args).promise()
  }

  async describeRepositories(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"repositories"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRepositories(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.repositories ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getAuthorizationToken(...args: any): Promise<any> {
  // undefined
    return this.client.getAuthorizationToken(...args).promise()
  }

  async getDownloadUrlForLayer(...args: any): Promise<any> {
  // undefined
    return this.client.getDownloadUrlForLayer(...args).promise()
  }

  async getLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getLifecyclePolicy(...args).promise()
  }

  async getLifecyclePolicyPreview(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"previewResults"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getLifecyclePolicyPreview(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.previewResults ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getRegistryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getRegistryPolicy(...args).promise()
  }

  async getRegistryScanningConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getRegistryScanningConfiguration(...args).promise()
  }

  async getRepositoryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getRepositoryPolicy(...args).promise()
  }

  async initiateLayerUpload(...args: any): Promise<any> {
  // undefined
    return this.client.initiateLayerUpload(...args).promise()
  }

  async listImages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imageIds ?? [];
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

  async putImage(...args: any): Promise<any> {
  // undefined
    return this.client.putImage(...args).promise()
  }

  async putImageScanningConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putImageScanningConfiguration(...args).promise()
  }

  async putImageTagMutability(...args: any): Promise<any> {
  // undefined
    return this.client.putImageTagMutability(...args).promise()
  }

  async putLifecyclePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putLifecyclePolicy(...args).promise()
  }

  async putRegistryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putRegistryPolicy(...args).promise()
  }

  async putRegistryScanningConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putRegistryScanningConfiguration(...args).promise()
  }

  async putReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putReplicationConfiguration(...args).promise()
  }

  async setRepositoryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.setRepositoryPolicy(...args).promise()
  }

  async startImageScan(...args: any): Promise<any> {
  // undefined
    return this.client.startImageScan(...args).promise()
  }

  async startLifecyclePolicyPreview(...args: any): Promise<any> {
  // undefined
    return this.client.startLifecyclePolicyPreview(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async uploadLayerPart(...args: any): Promise<any> {
  // undefined
    return this.client.uploadLayerPart(...args).promise()
  }
  
  static fromClient(client: AWSECR): ClientType {
    return new ECR(client) as any;
  }
  
  static client(options?: AWSECR.Types.ClientConfiguration): ClientType {
    return new ECR(new AWSECR(options)) as any;
  }
}  
