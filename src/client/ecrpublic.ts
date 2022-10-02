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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ecr-public';
    global: false;
    category: 'Containers'
    topLevelCalls: readonly ["describeRegistries","describeRepositories"];
    
  batchCheckLayerAvailability: FunctionTypeFrom<'batchCheckLayerAvailability'>;

  batchDeleteImage: FunctionTypeFrom<'batchDeleteImage'>;

  completeLayerUpload: FunctionTypeFrom<'completeLayerUpload'>;

  createRepository: FunctionTypeFrom<'createRepository'>;

  deleteRepository: FunctionTypeFrom<'deleteRepository'>;

  deleteRepositoryPolicy: FunctionTypeFrom<'deleteRepositoryPolicy'>;

  describeImageTags(params: { [K in keyof Omit<ParamsFrom<'describeImageTags', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeImageTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeImageTags'>]-?: ReturnTypeFrom<'describeImageTags'>[K]}['imageTagDetails'] }>
  ;

  describeImages(params: { [K in keyof Omit<ParamsFrom<'describeImages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeImages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeImages'>]-?: ReturnTypeFrom<'describeImages'>[K]}['imageDetails'] }>
  ;

  describeRegistries(params: { [K in keyof Omit<ParamsFrom<'describeRegistries', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeRegistries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRegistries'>]-?: ReturnTypeFrom<'describeRegistries'>[K]}['registries'] }>
  describeRegistries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRegistries'>]-?: ReturnTypeFrom<'describeRegistries'>[K]}['registries'] }>;

  describeRepositories(params: { [K in keyof Omit<ParamsFrom<'describeRepositories', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRepositories'>]-?: ReturnTypeFrom<'describeRepositories'>[K]}['repositories'] }>
  describeRepositories(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRepositories'>]-?: ReturnTypeFrom<'describeRepositories'>[K]}['repositories'] }>;

  getAuthorizationToken: FunctionTypeFrom<'getAuthorizationToken'>;

  getRegistryCatalogData: FunctionTypeFrom<'getRegistryCatalogData'>;

  getRepositoryCatalogData: FunctionTypeFrom<'getRepositoryCatalogData'>;

  getRepositoryPolicy: FunctionTypeFrom<'getRepositoryPolicy'>;

  initiateLayerUpload: FunctionTypeFrom<'initiateLayerUpload'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putImage: FunctionTypeFrom<'putImage'>;

  putRegistryCatalogData: FunctionTypeFrom<'putRegistryCatalogData'>;

  putRepositoryCatalogData: FunctionTypeFrom<'putRepositoryCatalogData'>;

  setRepositoryPolicy: FunctionTypeFrom<'setRepositoryPolicy'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  uploadLayerPart: FunctionTypeFrom<'uploadLayerPart'>
}
 
export class ECRPUBLIC implements ClientType {
  private constructor(private readonly client: AWSECRPUBLIC) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ecr-public';
  public readonly global = false;
  public readonly category = 'Containers';
  public readonly topLevelCalls = ["describeRegistries","describeRepositories"] as const;
  
  async batchCheckLayerAvailability(...args: any): Promise<any> {
  // undefined
    return this.client.batchCheckLayerAvailability(...args).promise()
  }

  async batchDeleteImage(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteImage(...args).promise()
  }

  async completeLayerUpload(...args: any): Promise<any> {
  // undefined
    return this.client.completeLayerUpload(...args).promise()
  }

  async createRepository(...args: any): Promise<any> {
  // undefined
    return this.client.createRepository(...args).promise()
  }

  async deleteRepository(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRepository(...args).promise()
  }

  async deleteRepositoryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRepositoryPolicy(...args).promise()
  }

  async describeImageTags(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"imageTagDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeImageTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.imageTagDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  async describeRegistries(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"registries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRegistries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.registries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  async getRegistryCatalogData(...args: any): Promise<any> {
  // undefined
    return this.client.getRegistryCatalogData(...args).promise()
  }

  async getRepositoryCatalogData(...args: any): Promise<any> {
  // undefined
    return this.client.getRepositoryCatalogData(...args).promise()
  }

  async getRepositoryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getRepositoryPolicy(...args).promise()
  }

  async initiateLayerUpload(...args: any): Promise<any> {
  // undefined
    return this.client.initiateLayerUpload(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putImage(...args: any): Promise<any> {
  // undefined
    return this.client.putImage(...args).promise()
  }

  async putRegistryCatalogData(...args: any): Promise<any> {
  // undefined
    return this.client.putRegistryCatalogData(...args).promise()
  }

  async putRepositoryCatalogData(...args: any): Promise<any> {
  // undefined
    return this.client.putRepositoryCatalogData(...args).promise()
  }

  async setRepositoryPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.setRepositoryPolicy(...args).promise()
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
  
  static fromClient(client: AWSECRPUBLIC): ClientType {
    return new ECRPUBLIC(client) as any;
  }
  
  static client(options?: AWSECRPUBLIC.Types.ClientConfiguration): ClientType {
    return new ECRPUBLIC(new AWSECRPUBLIC(options)) as any;
  }
}  
