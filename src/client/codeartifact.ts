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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeArtifact> = AWSCodeArtifact[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeArtifact {
  private constructor(private readonly client: AWSCodeArtifact) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codeartifact' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["listDomains","listRepositories"] as const;
  
  associateExternalConnection: (params: RawParamsFrom<'associateExternalConnection'>) => Promise<ReturnTypeFrom<'associateExternalConnection'>>  = async params => {
  // undefined
    return this.client.associateExternalConnection(params as any).promise();
  }

  copyPackageVersions: (params: RawParamsFrom<'copyPackageVersions'>) => Promise<ReturnTypeFrom<'copyPackageVersions'>>  = async params => {
  // undefined
    return this.client.copyPackageVersions(params as any).promise();
  }

  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  createRepository: (params: RawParamsFrom<'createRepository'>) => Promise<ReturnTypeFrom<'createRepository'>>  = async params => {
  // undefined
    return this.client.createRepository(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  deleteDomainPermissionsPolicy: (params: RawParamsFrom<'deleteDomainPermissionsPolicy'>) => Promise<ReturnTypeFrom<'deleteDomainPermissionsPolicy'>>  = async params => {
  // undefined
    return this.client.deleteDomainPermissionsPolicy(params as any).promise();
  }

  deletePackageVersions: (params: RawParamsFrom<'deletePackageVersions'>) => Promise<ReturnTypeFrom<'deletePackageVersions'>>  = async params => {
  // undefined
    return this.client.deletePackageVersions(params as any).promise();
  }

  deleteRepository: (params: RawParamsFrom<'deleteRepository'>) => Promise<ReturnTypeFrom<'deleteRepository'>>  = async params => {
  // undefined
    return this.client.deleteRepository(params as any).promise();
  }

  deleteRepositoryPermissionsPolicy: (params: RawParamsFrom<'deleteRepositoryPermissionsPolicy'>) => Promise<ReturnTypeFrom<'deleteRepositoryPermissionsPolicy'>>  = async params => {
  // undefined
    return this.client.deleteRepositoryPermissionsPolicy(params as any).promise();
  }

  describeDomain: (params: RawParamsFrom<'describeDomain'>) => Promise<ReturnTypeFrom<'describeDomain'>>  = async params => {
  // undefined
    return this.client.describeDomain(params as any).promise();
  }

  describePackage: (params: RawParamsFrom<'describePackage'>) => Promise<ReturnTypeFrom<'describePackage'>>  = async params => {
  // undefined
    return this.client.describePackage(params as any).promise();
  }

  describePackageVersion: (params: RawParamsFrom<'describePackageVersion'>) => Promise<ReturnTypeFrom<'describePackageVersion'>>  = async params => {
  // undefined
    return this.client.describePackageVersion(params as any).promise();
  }

  describeRepository: (params: RawParamsFrom<'describeRepository'>) => Promise<ReturnTypeFrom<'describeRepository'>>  = async params => {
  // undefined
    return this.client.describeRepository(params as any).promise();
  }

  disassociateExternalConnection: (params: RawParamsFrom<'disassociateExternalConnection'>) => Promise<ReturnTypeFrom<'disassociateExternalConnection'>>  = async params => {
  // undefined
    return this.client.disassociateExternalConnection(params as any).promise();
  }

  disposePackageVersions: (params: RawParamsFrom<'disposePackageVersions'>) => Promise<ReturnTypeFrom<'disposePackageVersions'>>  = async params => {
  // undefined
    return this.client.disposePackageVersions(params as any).promise();
  }

  getAuthorizationToken: (params: RawParamsFrom<'getAuthorizationToken'>) => Promise<ReturnTypeFrom<'getAuthorizationToken'>>  = async params => {
  // undefined
    return this.client.getAuthorizationToken(params as any).promise();
  }

  getDomainPermissionsPolicy: (params: RawParamsFrom<'getDomainPermissionsPolicy'>) => Promise<ReturnTypeFrom<'getDomainPermissionsPolicy'>>  = async params => {
  // undefined
    return this.client.getDomainPermissionsPolicy(params as any).promise();
  }

  getPackageVersionAsset: (params: RawParamsFrom<'getPackageVersionAsset'>) => Promise<ReturnTypeFrom<'getPackageVersionAsset'>>  = async params => {
  // undefined
    return this.client.getPackageVersionAsset(params as any).promise();
  }

  getPackageVersionReadme: (params: RawParamsFrom<'getPackageVersionReadme'>) => Promise<ReturnTypeFrom<'getPackageVersionReadme'>>  = async params => {
  // undefined
    return this.client.getPackageVersionReadme(params as any).promise();
  }

  getRepositoryEndpoint: (params: RawParamsFrom<'getRepositoryEndpoint'>) => Promise<ReturnTypeFrom<'getRepositoryEndpoint'>>  = async params => {
  // undefined
    return this.client.getRepositoryEndpoint(params as any).promise();
  }

  getRepositoryPermissionsPolicy: (params: RawParamsFrom<'getRepositoryPermissionsPolicy'>) => Promise<ReturnTypeFrom<'getRepositoryPermissionsPolicy'>>  = async params => {
  // undefined
    return this.client.getRepositoryPermissionsPolicy(params as any).promise();
  }

  async listDomains(params: { [K in keyof ParamsFrom<'listDomains', { next?: string, limit?: number }>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['domains'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"domains"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDomains' })).toString('base64') : undefined;
    const member = (Array.isArray(result.domains ?? []) ? (result.domains ?? []) : [result.domains]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackageVersionAssets(params: { [K in keyof ParamsFrom<'listPackageVersionAssets', { next?: string, limit?: number }>]: ParamsFrom<'listPackageVersionAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPackageVersionAssets'>]-?: ReturnTypeFrom<'listPackageVersionAssets'>[K]}['assets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPackageVersionAssets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPackageVersionAssets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assets ?? []) ? (result.assets ?? []) : [result.assets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listPackageVersionDependencies: (params: RawParamsFrom<'listPackageVersionDependencies'>) => Promise<ReturnTypeFrom<'listPackageVersionDependencies'>>  = async params => {
  // undefined
    return this.client.listPackageVersionDependencies(params as any).promise();
  }

  async listPackageVersions(params: { [K in keyof ParamsFrom<'listPackageVersions', { next?: string, limit?: number }>]: ParamsFrom<'listPackageVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPackageVersions'>]-?: ReturnTypeFrom<'listPackageVersions'>[K]}['versions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"versions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPackageVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPackageVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.versions ?? []) ? (result.versions ?? []) : [result.versions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPackages(params: { [K in keyof ParamsFrom<'listPackages', { next?: string, limit?: number }>]: ParamsFrom<'listPackages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPackages'>]-?: ReturnTypeFrom<'listPackages'>[K]}['packages'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"packages"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPackages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPackages' })).toString('base64') : undefined;
    const member = (Array.isArray(result.packages ?? []) ? (result.packages ?? []) : [result.packages]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositories(params: { [K in keyof ParamsFrom<'listRepositories', { next?: string, limit?: number }>]: ParamsFrom<'listRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRepositories'>]-?: ReturnTypeFrom<'listRepositories'>[K]}['repositories'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"repositories"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRepositories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRepositories' })).toString('base64') : undefined;
    const member = (Array.isArray(result.repositories ?? []) ? (result.repositories ?? []) : [result.repositories]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRepositoriesInDomain(params: { [K in keyof ParamsFrom<'listRepositoriesInDomain', { next?: string, limit?: number }>]: ParamsFrom<'listRepositoriesInDomain', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRepositoriesInDomain'>]-?: ReturnTypeFrom<'listRepositoriesInDomain'>[K]}['repositories'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"repositories"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRepositoriesInDomain({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRepositoriesInDomain' })).toString('base64') : undefined;
    const member = (Array.isArray(result.repositories ?? []) ? (result.repositories ?? []) : [result.repositories]) as any;
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

  putDomainPermissionsPolicy: (params: RawParamsFrom<'putDomainPermissionsPolicy'>) => Promise<ReturnTypeFrom<'putDomainPermissionsPolicy'>>  = async params => {
  // undefined
    return this.client.putDomainPermissionsPolicy(params as any).promise();
  }

  putPackageOriginConfiguration: (params: RawParamsFrom<'putPackageOriginConfiguration'>) => Promise<ReturnTypeFrom<'putPackageOriginConfiguration'>>  = async params => {
  // undefined
    return this.client.putPackageOriginConfiguration(params as any).promise();
  }

  putRepositoryPermissionsPolicy: (params: RawParamsFrom<'putRepositoryPermissionsPolicy'>) => Promise<ReturnTypeFrom<'putRepositoryPermissionsPolicy'>>  = async params => {
  // undefined
    return this.client.putRepositoryPermissionsPolicy(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updatePackageVersionsStatus: (params: RawParamsFrom<'updatePackageVersionsStatus'>) => Promise<ReturnTypeFrom<'updatePackageVersionsStatus'>>  = async params => {
  // undefined
    return this.client.updatePackageVersionsStatus(params as any).promise();
  }

  updateRepository: (params: RawParamsFrom<'updateRepository'>) => Promise<ReturnTypeFrom<'updateRepository'>>  = async params => {
  // undefined
    return this.client.updateRepository(params as any).promise();
  }
  
  static fromClient(client: AWSCodeArtifact): CodeArtifact {
    return new CodeArtifact(client) as any;
  }
  
  static client(options?: AWSCodeArtifact.Types.ClientConfiguration): CodeArtifact {
    return new CodeArtifact(new AWSCodeArtifact(options)) as any;
  }
}  
