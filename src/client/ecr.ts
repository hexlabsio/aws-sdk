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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSECR> = AWSECR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ECR {
  private constructor(private readonly client: AWSECR) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ecr' as const;
  public readonly global = false as const;
  public readonly category = 'Containers' as const;
  public readonly topLevelCalls = ["describePullThroughCacheRules","describeRepositories"] as const;
  
  batchCheckLayerAvailability: (params: RawParamsFrom<'batchCheckLayerAvailability'>) => Promise<ReturnTypeFrom<'batchCheckLayerAvailability'>>  = async params => {
  // undefined
    return this.client.batchCheckLayerAvailability(params as any).promise();
  }

  batchDeleteImage: (params: RawParamsFrom<'batchDeleteImage'>) => Promise<ReturnTypeFrom<'batchDeleteImage'>>  = async params => {
  // undefined
    return this.client.batchDeleteImage(params as any).promise();
  }

  batchGetImage: (params: RawParamsFrom<'batchGetImage'>) => Promise<ReturnTypeFrom<'batchGetImage'>>  = async params => {
  // undefined
    return this.client.batchGetImage(params as any).promise();
  }

  batchGetRepositoryScanningConfiguration: (params: RawParamsFrom<'batchGetRepositoryScanningConfiguration'>) => Promise<ReturnTypeFrom<'batchGetRepositoryScanningConfiguration'>>  = async params => {
  // undefined
    return this.client.batchGetRepositoryScanningConfiguration(params as any).promise();
  }

  completeLayerUpload: (params: RawParamsFrom<'completeLayerUpload'>) => Promise<ReturnTypeFrom<'completeLayerUpload'>>  = async params => {
  // undefined
    return this.client.completeLayerUpload(params as any).promise();
  }

  createPullThroughCacheRule: (params: RawParamsFrom<'createPullThroughCacheRule'>) => Promise<ReturnTypeFrom<'createPullThroughCacheRule'>>  = async params => {
  // undefined
    return this.client.createPullThroughCacheRule(params as any).promise();
  }

  createRepository: (params: RawParamsFrom<'createRepository'>) => Promise<ReturnTypeFrom<'createRepository'>>  = async params => {
  // undefined
    return this.client.createRepository(params as any).promise();
  }

  deleteLifecyclePolicy: (params: RawParamsFrom<'deleteLifecyclePolicy'>) => Promise<ReturnTypeFrom<'deleteLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.deleteLifecyclePolicy(params as any).promise();
  }

  deletePullThroughCacheRule: (params: RawParamsFrom<'deletePullThroughCacheRule'>) => Promise<ReturnTypeFrom<'deletePullThroughCacheRule'>>  = async params => {
  // undefined
    return this.client.deletePullThroughCacheRule(params as any).promise();
  }

  deleteRegistryPolicy: (params: RawParamsFrom<'deleteRegistryPolicy'>) => Promise<ReturnTypeFrom<'deleteRegistryPolicy'>>  = async params => {
  // undefined
    return this.client.deleteRegistryPolicy(params as any).promise();
  }

  deleteRepository: (params: RawParamsFrom<'deleteRepository'>) => Promise<ReturnTypeFrom<'deleteRepository'>>  = async params => {
  // undefined
    return this.client.deleteRepository(params as any).promise();
  }

  deleteRepositoryPolicy: (params: RawParamsFrom<'deleteRepositoryPolicy'>) => Promise<ReturnTypeFrom<'deleteRepositoryPolicy'>>  = async params => {
  // undefined
    return this.client.deleteRepositoryPolicy(params as any).promise();
  }

  describeImageReplicationStatus: (params: RawParamsFrom<'describeImageReplicationStatus'>) => Promise<ReturnTypeFrom<'describeImageReplicationStatus'>>  = async params => {
  // undefined
    return this.client.describeImageReplicationStatus(params as any).promise();
  }

  describeImageScanFindings: (params: RawParamsFrom<'describeImageScanFindings'>) => Promise<ReturnTypeFrom<'describeImageScanFindings'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":["imageScanFindings.findings","imageScanFindings.enhancedFindings"]}
    return this.client.describeImageScanFindings(params as any).promise();
  }

  async describeImages(params: { [K in keyof ParamsFrom<'describeImages', { next?: string, limit?: number }>]: ParamsFrom<'describeImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeImages'>]-?: ReturnTypeFrom<'describeImages'>[K]}['imageDetails'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeImages' })).toString('base64') : undefined;
    const member = (Array.isArray(result.imageDetails ?? []) ? (result.imageDetails ?? []) : [result.imageDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePullThroughCacheRules(params: { [K in keyof ParamsFrom<'describePullThroughCacheRules', { next?: string, limit?: number }>]: ParamsFrom<'describePullThroughCacheRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePullThroughCacheRules'>]-?: ReturnTypeFrom<'describePullThroughCacheRules'>[K]}['pullThroughCacheRules'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"pullThroughCacheRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describePullThroughCacheRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describePullThroughCacheRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.pullThroughCacheRules ?? []) ? (result.pullThroughCacheRules ?? []) : [result.pullThroughCacheRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeRegistry: (params: RawParamsFrom<'describeRegistry'>) => Promise<ReturnTypeFrom<'describeRegistry'>>  = async params => {
  // undefined
    return this.client.describeRegistry(params as any).promise();
  }

  async describeRepositories(params: { [K in keyof ParamsFrom<'describeRepositories', { next?: string, limit?: number }>]: ParamsFrom<'describeRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRepositories'>]-?: ReturnTypeFrom<'describeRepositories'>[K]}['repositories'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"repositories"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRepositories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeRepositories' })).toString('base64') : undefined;
    const member = (Array.isArray(result.repositories ?? []) ? (result.repositories ?? []) : [result.repositories]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getAuthorizationToken: (params: RawParamsFrom<'getAuthorizationToken'>) => Promise<ReturnTypeFrom<'getAuthorizationToken'>>  = async params => {
  // undefined
    return this.client.getAuthorizationToken(params as any).promise();
  }

  getDownloadUrlForLayer: (params: RawParamsFrom<'getDownloadUrlForLayer'>) => Promise<ReturnTypeFrom<'getDownloadUrlForLayer'>>  = async params => {
  // undefined
    return this.client.getDownloadUrlForLayer(params as any).promise();
  }

  getLifecyclePolicy: (params: RawParamsFrom<'getLifecyclePolicy'>) => Promise<ReturnTypeFrom<'getLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.getLifecyclePolicy(params as any).promise();
  }

  async getLifecyclePolicyPreview(params: { [K in keyof ParamsFrom<'getLifecyclePolicyPreview', { next?: string, limit?: number }>]: ParamsFrom<'getLifecyclePolicyPreview', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getLifecyclePolicyPreview'>]-?: ReturnTypeFrom<'getLifecyclePolicyPreview'>[K]}['previewResults'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"previewResults"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getLifecyclePolicyPreview({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getLifecyclePolicyPreview' })).toString('base64') : undefined;
    const member = (Array.isArray(result.previewResults ?? []) ? (result.previewResults ?? []) : [result.previewResults]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getRegistryPolicy: (params: RawParamsFrom<'getRegistryPolicy'>) => Promise<ReturnTypeFrom<'getRegistryPolicy'>>  = async params => {
  // undefined
    return this.client.getRegistryPolicy(params as any).promise();
  }

  getRegistryScanningConfiguration: (params: RawParamsFrom<'getRegistryScanningConfiguration'>) => Promise<ReturnTypeFrom<'getRegistryScanningConfiguration'>>  = async params => {
  // undefined
    return this.client.getRegistryScanningConfiguration(params as any).promise();
  }

  getRepositoryPolicy: (params: RawParamsFrom<'getRepositoryPolicy'>) => Promise<ReturnTypeFrom<'getRepositoryPolicy'>>  = async params => {
  // undefined
    return this.client.getRepositoryPolicy(params as any).promise();
  }

  initiateLayerUpload: (params: RawParamsFrom<'initiateLayerUpload'>) => Promise<ReturnTypeFrom<'initiateLayerUpload'>>  = async params => {
  // undefined
    return this.client.initiateLayerUpload(params as any).promise();
  }

  async listImages(params: { [K in keyof ParamsFrom<'listImages', { next?: string, limit?: number }>]: ParamsFrom<'listImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImages'>]-?: ReturnTypeFrom<'listImages'>[K]}['imageIds'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listImages' })).toString('base64') : undefined;
    const member = (Array.isArray(result.imageIds ?? []) ? (result.imageIds ?? []) : [result.imageIds]) as any;
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

  putImage: (params: RawParamsFrom<'putImage'>) => Promise<ReturnTypeFrom<'putImage'>>  = async params => {
  // undefined
    return this.client.putImage(params as any).promise();
  }

  putImageScanningConfiguration: (params: RawParamsFrom<'putImageScanningConfiguration'>) => Promise<ReturnTypeFrom<'putImageScanningConfiguration'>>  = async params => {
  // undefined
    return this.client.putImageScanningConfiguration(params as any).promise();
  }

  putImageTagMutability: (params: RawParamsFrom<'putImageTagMutability'>) => Promise<ReturnTypeFrom<'putImageTagMutability'>>  = async params => {
  // undefined
    return this.client.putImageTagMutability(params as any).promise();
  }

  putLifecyclePolicy: (params: RawParamsFrom<'putLifecyclePolicy'>) => Promise<ReturnTypeFrom<'putLifecyclePolicy'>>  = async params => {
  // undefined
    return this.client.putLifecyclePolicy(params as any).promise();
  }

  putRegistryPolicy: (params: RawParamsFrom<'putRegistryPolicy'>) => Promise<ReturnTypeFrom<'putRegistryPolicy'>>  = async params => {
  // undefined
    return this.client.putRegistryPolicy(params as any).promise();
  }

  putRegistryScanningConfiguration: (params: RawParamsFrom<'putRegistryScanningConfiguration'>) => Promise<ReturnTypeFrom<'putRegistryScanningConfiguration'>>  = async params => {
  // undefined
    return this.client.putRegistryScanningConfiguration(params as any).promise();
  }

  putReplicationConfiguration: (params: RawParamsFrom<'putReplicationConfiguration'>) => Promise<ReturnTypeFrom<'putReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.putReplicationConfiguration(params as any).promise();
  }

  setRepositoryPolicy: (params: RawParamsFrom<'setRepositoryPolicy'>) => Promise<ReturnTypeFrom<'setRepositoryPolicy'>>  = async params => {
  // undefined
    return this.client.setRepositoryPolicy(params as any).promise();
  }

  startImageScan: (params: RawParamsFrom<'startImageScan'>) => Promise<ReturnTypeFrom<'startImageScan'>>  = async params => {
  // undefined
    return this.client.startImageScan(params as any).promise();
  }

  startLifecyclePolicyPreview: (params: RawParamsFrom<'startLifecyclePolicyPreview'>) => Promise<ReturnTypeFrom<'startLifecyclePolicyPreview'>>  = async params => {
  // undefined
    return this.client.startLifecyclePolicyPreview(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  uploadLayerPart: (params: RawParamsFrom<'uploadLayerPart'>) => Promise<ReturnTypeFrom<'uploadLayerPart'>>  = async params => {
  // undefined
    return this.client.uploadLayerPart(params as any).promise();
  }
  
  static fromClient(client: AWSECR): ECR {
    return new ECR(client) as any;
  }
  
  static client(options?: AWSECR.Types.ClientConfiguration): ECR {
    return new ECR(new AWSECR(options)) as any;
  }
}  
