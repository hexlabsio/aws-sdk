import { Request, ECRPUBLIC as AWSECRPUBLIC } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSECRPUBLIC> = AWSECRPUBLIC[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSECRPUBLIC> = AWSECRPUBLIC[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSECRPUBLIC[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSECRPUBLIC, Extras> = AWSECRPUBLIC[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSECRPUBLIC> = AWSECRPUBLIC[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ECRPUBLIC {
  private constructor(private readonly client: AWSECRPUBLIC) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ecr-public' as const;
  public readonly global = false as const;
  public readonly category = 'Containers' as const;
  public readonly topLevelCalls = ["describeRegistries","describeRepositories"] as const;
  
  batchCheckLayerAvailability: (params: RawParamsFrom<'batchCheckLayerAvailability'>) => Promise<ReturnTypeFrom<'batchCheckLayerAvailability'>>  = async params => {
  // undefined
    return this.client.batchCheckLayerAvailability(params as any).promise();
  }

  batchDeleteImage: (params: RawParamsFrom<'batchDeleteImage'>) => Promise<ReturnTypeFrom<'batchDeleteImage'>>  = async params => {
  // undefined
    return this.client.batchDeleteImage(params as any).promise();
  }

  completeLayerUpload: (params: RawParamsFrom<'completeLayerUpload'>) => Promise<ReturnTypeFrom<'completeLayerUpload'>>  = async params => {
  // undefined
    return this.client.completeLayerUpload(params as any).promise();
  }

  createRepository: (params: RawParamsFrom<'createRepository'>) => Promise<ReturnTypeFrom<'createRepository'>>  = async params => {
  // undefined
    return this.client.createRepository(params as any).promise();
  }

  deleteRepository: (params: RawParamsFrom<'deleteRepository'>) => Promise<ReturnTypeFrom<'deleteRepository'>>  = async params => {
  // undefined
    return this.client.deleteRepository(params as any).promise();
  }

  deleteRepositoryPolicy: (params: RawParamsFrom<'deleteRepositoryPolicy'>) => Promise<ReturnTypeFrom<'deleteRepositoryPolicy'>>  = async params => {
  // undefined
    return this.client.deleteRepositoryPolicy(params as any).promise();
  }

  async describeImageTags(params: { [K in keyof ParamsFrom<'describeImageTags', { next?: string, limit?: number }>]: ParamsFrom<'describeImageTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeImageTags'>]-?: ReturnTypeFrom<'describeImageTags'>[K]}['imageTagDetails'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageTagDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeImageTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeImageTags' })).toString('base64') : undefined;
    const member = (Array.isArray(result.imageTagDetails ?? []) ? (result.imageTagDetails ?? []) : [result.imageTagDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  async describeRegistries(params: { [K in keyof ParamsFrom<'describeRegistries', { next?: string, limit?: number }>]: ParamsFrom<'describeRegistries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRegistries'>]-?: ReturnTypeFrom<'describeRegistries'>[K]}['registries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"registries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRegistries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeRegistries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.registries ?? []) ? (result.registries ?? []) : [result.registries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  getRegistryCatalogData: (params: RawParamsFrom<'getRegistryCatalogData'>) => Promise<ReturnTypeFrom<'getRegistryCatalogData'>>  = async params => {
  // undefined
    return this.client.getRegistryCatalogData(params as any).promise();
  }

  getRepositoryCatalogData: (params: RawParamsFrom<'getRepositoryCatalogData'>) => Promise<ReturnTypeFrom<'getRepositoryCatalogData'>>  = async params => {
  // undefined
    return this.client.getRepositoryCatalogData(params as any).promise();
  }

  getRepositoryPolicy: (params: RawParamsFrom<'getRepositoryPolicy'>) => Promise<ReturnTypeFrom<'getRepositoryPolicy'>>  = async params => {
  // undefined
    return this.client.getRepositoryPolicy(params as any).promise();
  }

  initiateLayerUpload: (params: RawParamsFrom<'initiateLayerUpload'>) => Promise<ReturnTypeFrom<'initiateLayerUpload'>>  = async params => {
  // undefined
    return this.client.initiateLayerUpload(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putImage: (params: RawParamsFrom<'putImage'>) => Promise<ReturnTypeFrom<'putImage'>>  = async params => {
  // undefined
    return this.client.putImage(params as any).promise();
  }

  putRegistryCatalogData: (params: RawParamsFrom<'putRegistryCatalogData'>) => Promise<ReturnTypeFrom<'putRegistryCatalogData'>>  = async params => {
  // undefined
    return this.client.putRegistryCatalogData(params as any).promise();
  }

  putRepositoryCatalogData: (params: RawParamsFrom<'putRepositoryCatalogData'>) => Promise<ReturnTypeFrom<'putRepositoryCatalogData'>>  = async params => {
  // undefined
    return this.client.putRepositoryCatalogData(params as any).promise();
  }

  setRepositoryPolicy: (params: RawParamsFrom<'setRepositoryPolicy'>) => Promise<ReturnTypeFrom<'setRepositoryPolicy'>>  = async params => {
  // undefined
    return this.client.setRepositoryPolicy(params as any).promise();
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
  
  static fromClient(client: AWSECRPUBLIC): ECRPUBLIC {
    return new ECRPUBLIC(client) as any;
  }
  
  static client(options?: AWSECRPUBLIC.Types.ClientConfiguration): ECRPUBLIC {
    return new ECRPUBLIC(new AWSECRPUBLIC(options)) as any;
  }
}  
