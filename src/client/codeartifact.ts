import { Request, CodeArtifact as AWSCodeArtifact } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeArtifact> = AWSCodeArtifact[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeArtifact> = AWSCodeArtifact[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeArtifact[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeArtifact, Extras> = AWSCodeArtifact[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codeartifact';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["listDomains","listRepositories"];
    
  associateExternalConnection: FunctionTypeFrom<'associateExternalConnection'>;

  copyPackageVersions: FunctionTypeFrom<'copyPackageVersions'>;

  createDomain: FunctionTypeFrom<'createDomain'>;

  createRepository: FunctionTypeFrom<'createRepository'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  deleteDomainPermissionsPolicy: FunctionTypeFrom<'deleteDomainPermissionsPolicy'>;

  deletePackageVersions: FunctionTypeFrom<'deletePackageVersions'>;

  deleteRepository: FunctionTypeFrom<'deleteRepository'>;

  deleteRepositoryPermissionsPolicy: FunctionTypeFrom<'deleteRepositoryPermissionsPolicy'>;

  describeDomain: FunctionTypeFrom<'describeDomain'>;

  describePackage: FunctionTypeFrom<'describePackage'>;

  describePackageVersion: FunctionTypeFrom<'describePackageVersion'>;

  describeRepository: FunctionTypeFrom<'describeRepository'>;

  disassociateExternalConnection: FunctionTypeFrom<'disassociateExternalConnection'>;

  disposePackageVersions: FunctionTypeFrom<'disposePackageVersions'>;

  getAuthorizationToken: FunctionTypeFrom<'getAuthorizationToken'>;

  getDomainPermissionsPolicy: FunctionTypeFrom<'getDomainPermissionsPolicy'>;

  getPackageVersionAsset: FunctionTypeFrom<'getPackageVersionAsset'>;

  getPackageVersionReadme: FunctionTypeFrom<'getPackageVersionReadme'>;

  getRepositoryEndpoint: FunctionTypeFrom<'getRepositoryEndpoint'>;

  getRepositoryPermissionsPolicy: FunctionTypeFrom<'getRepositoryPermissionsPolicy'>;

  listDomains(params: { [K in keyof Omit<ParamsFrom<'listDomains', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['domains'] }>
  listDomains(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['domains'] }>;

  listPackageVersionAssets(params: { [K in keyof Omit<ParamsFrom<'listPackageVersionAssets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPackageVersionAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPackageVersionAssets'>]-?: ReturnTypeFrom<'listPackageVersionAssets'>[K]}['assets'] }>
  ;

  listPackageVersionDependencies: FunctionTypeFrom<'listPackageVersionDependencies'>;

  listPackageVersions(params: { [K in keyof Omit<ParamsFrom<'listPackageVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPackageVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPackageVersions'>]-?: ReturnTypeFrom<'listPackageVersions'>[K]}['versions'] }>
  ;

  listPackages(params: { [K in keyof Omit<ParamsFrom<'listPackages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPackages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPackages'>]-?: ReturnTypeFrom<'listPackages'>[K]}['packages'] }>
  ;

  listRepositories(params: { [K in keyof Omit<ParamsFrom<'listRepositories', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'] }>
  listRepositories(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'] }>;

  listRepositoriesInDomain(params: { [K in keyof Omit<ParamsFrom<'listRepositoriesInDomain', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRepositoriesInDomain', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRepositoriesInDomain'>]-?: ReturnTypeFrom<'listRepositoriesInDomain'>[K]}['repositories'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putDomainPermissionsPolicy: FunctionTypeFrom<'putDomainPermissionsPolicy'>;

  putPackageOriginConfiguration: FunctionTypeFrom<'putPackageOriginConfiguration'>;

  putRepositoryPermissionsPolicy: FunctionTypeFrom<'putRepositoryPermissionsPolicy'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updatePackageVersionsStatus: FunctionTypeFrom<'updatePackageVersionsStatus'>;

  updateRepository: FunctionTypeFrom<'updateRepository'>
}
 
export class CodeArtifact implements ClientType {
  private constructor(private readonly client: AWSCodeArtifact) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codeartifact';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["listDomains","listRepositories"] as const;
  
  async associateExternalConnection(...args: any): Promise<any> {
  // undefined
    return this.client.associateExternalConnection(...args).promise()
  }

  async copyPackageVersions(...args: any): Promise<any> {
  // undefined
    return this.client.copyPackageVersions(...args).promise()
  }

  async createDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createDomain(...args).promise()
  }

  async createRepository(...args: any): Promise<any> {
  // undefined
    return this.client.createRepository(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async deleteDomainPermissionsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomainPermissionsPolicy(...args).promise()
  }

  async deletePackageVersions(...args: any): Promise<any> {
  // undefined
    return this.client.deletePackageVersions(...args).promise()
  }

  async deleteRepository(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRepository(...args).promise()
  }

  async deleteRepositoryPermissionsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRepositoryPermissionsPolicy(...args).promise()
  }

  async describeDomain(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomain(...args).promise()
  }

  async describePackage(...args: any): Promise<any> {
  // undefined
    return this.client.describePackage(...args).promise()
  }

  async describePackageVersion(...args: any): Promise<any> {
  // undefined
    return this.client.describePackageVersion(...args).promise()
  }

  async describeRepository(...args: any): Promise<any> {
  // undefined
    return this.client.describeRepository(...args).promise()
  }

  async disassociateExternalConnection(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateExternalConnection(...args).promise()
  }

  async disposePackageVersions(...args: any): Promise<any> {
  // undefined
    return this.client.disposePackageVersions(...args).promise()
  }

  async getAuthorizationToken(...args: any): Promise<any> {
  // undefined
    return this.client.getAuthorizationToken(...args).promise()
  }

  async getDomainPermissionsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainPermissionsPolicy(...args).promise()
  }

  async getPackageVersionAsset(...args: any): Promise<any> {
  // undefined
    return this.client.getPackageVersionAsset(...args).promise()
  }

  async getPackageVersionReadme(...args: any): Promise<any> {
  // undefined
    return this.client.getPackageVersionReadme(...args).promise()
  }

  async getRepositoryEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.getRepositoryEndpoint(...args).promise()
  }

  async getRepositoryPermissionsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getRepositoryPermissionsPolicy(...args).promise()
  }

  async listDomains(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"domains"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDomains(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.domains ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackageVersionAssets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPackageVersionAssets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackageVersionDependencies(...args: any): Promise<any> {
  // undefined
    return this.client.listPackageVersionDependencies(...args).promise()
  }

  async listPackageVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"versions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPackageVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.versions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"packages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPackages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.packages ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositories(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"repositories"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRepositories(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.repositories ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositoriesInDomain(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"repositories"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRepositoriesInDomain(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.repositories ?? [];
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

  async putDomainPermissionsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putDomainPermissionsPolicy(...args).promise()
  }

  async putPackageOriginConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putPackageOriginConfiguration(...args).promise()
  }

  async putRepositoryPermissionsPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putRepositoryPermissionsPolicy(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updatePackageVersionsStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updatePackageVersionsStatus(...args).promise()
  }

  async updateRepository(...args: any): Promise<any> {
  // undefined
    return this.client.updateRepository(...args).promise()
  }
  
  static fromClient(client: AWSCodeArtifact): ClientType {
    return new CodeArtifact(client) as any;
  }
  
  static client(options?: AWSCodeArtifact.Types.ClientConfiguration): ClientType {
    return new CodeArtifact(new AWSCodeArtifact(options)) as any;
  }
}  
