import { Request, CodeCatalyst as AWSCodeCatalyst } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeCatalyst> = AWSCodeCatalyst[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeCatalyst> = AWSCodeCatalyst[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeCatalyst[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeCatalyst, Extras> = AWSCodeCatalyst[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeCatalyst> = AWSCodeCatalyst[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeCatalyst {
  private constructor(private readonly client: AWSCodeCatalyst) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codecatalyst' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAccessTokens","listSpaces"] as const;
  
  createAccessToken: (params: RawParamsFrom<'createAccessToken'>) => Promise<ReturnTypeFrom<'createAccessToken'>>  = async params => {
  // undefined
    return this.client.createAccessToken(params as any).promise();
  }

  createDevEnvironment: (params: RawParamsFrom<'createDevEnvironment'>) => Promise<ReturnTypeFrom<'createDevEnvironment'>>  = async params => {
  // undefined
    return this.client.createDevEnvironment(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  createSourceRepositoryBranch: (params: RawParamsFrom<'createSourceRepositoryBranch'>) => Promise<ReturnTypeFrom<'createSourceRepositoryBranch'>>  = async params => {
  // undefined
    return this.client.createSourceRepositoryBranch(params as any).promise();
  }

  deleteAccessToken: (params: RawParamsFrom<'deleteAccessToken'>) => Promise<ReturnTypeFrom<'deleteAccessToken'>>  = async params => {
  // undefined
    return this.client.deleteAccessToken(params as any).promise();
  }

  deleteDevEnvironment: (params: RawParamsFrom<'deleteDevEnvironment'>) => Promise<ReturnTypeFrom<'deleteDevEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteDevEnvironment(params as any).promise();
  }

  getDevEnvironment: (params: RawParamsFrom<'getDevEnvironment'>) => Promise<ReturnTypeFrom<'getDevEnvironment'>>  = async params => {
  // undefined
    return this.client.getDevEnvironment(params as any).promise();
  }

  getProject: (params: RawParamsFrom<'getProject'>) => Promise<ReturnTypeFrom<'getProject'>>  = async params => {
  // undefined
    return this.client.getProject(params as any).promise();
  }

  getSourceRepositoryCloneUrls: (params: RawParamsFrom<'getSourceRepositoryCloneUrls'>) => Promise<ReturnTypeFrom<'getSourceRepositoryCloneUrls'>>  = async params => {
  // undefined
    return this.client.getSourceRepositoryCloneUrls(params as any).promise();
  }

  getSpace: (params: RawParamsFrom<'getSpace'>) => Promise<ReturnTypeFrom<'getSpace'>>  = async params => {
  // undefined
    return this.client.getSpace(params as any).promise();
  }

  getSubscription: (params: RawParamsFrom<'getSubscription'>) => Promise<ReturnTypeFrom<'getSubscription'>>  = async params => {
  // undefined
    return this.client.getSubscription(params as any).promise();
  }

  getUserDetails: (params: RawParamsFrom<'getUserDetails'>) => Promise<ReturnTypeFrom<'getUserDetails'>>  = async params => {
  // undefined
    return this.client.getUserDetails(params as any).promise();
  }

  async listAccessTokens(params: { [K in keyof ParamsFrom<'listAccessTokens', { next?: string, limit?: number }>]: ParamsFrom<'listAccessTokens', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccessTokens'>]-?: ReturnTypeFrom<'listAccessTokens'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccessTokens({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAccessTokens' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDevEnvironments(params: { [K in keyof ParamsFrom<'listDevEnvironments', { next?: string, limit?: number }>]: ParamsFrom<'listDevEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDevEnvironments'>]-?: ReturnTypeFrom<'listDevEnvironments'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDevEnvironments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDevEnvironments' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEventLogs(params: { [K in keyof ParamsFrom<'listEventLogs', { next?: string, limit?: number }>]: ParamsFrom<'listEventLogs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEventLogs'>]-?: ReturnTypeFrom<'listEventLogs'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEventLogs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEventLogs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(params: { [K in keyof ParamsFrom<'listProjects', { next?: string, limit?: number }>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProjects' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSourceRepositories(params: { [K in keyof ParamsFrom<'listSourceRepositories', { next?: string, limit?: number }>]: ParamsFrom<'listSourceRepositories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSourceRepositories'>]-?: ReturnTypeFrom<'listSourceRepositories'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSourceRepositories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSourceRepositories' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSourceRepositoryBranches(params: { [K in keyof ParamsFrom<'listSourceRepositoryBranches', { next?: string, limit?: number }>]: ParamsFrom<'listSourceRepositoryBranches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSourceRepositoryBranches'>]-?: ReturnTypeFrom<'listSourceRepositoryBranches'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSourceRepositoryBranches({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSourceRepositoryBranches' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSpaces(params: { [K in keyof ParamsFrom<'listSpaces', { next?: string }>]: ParamsFrom<'listSpaces', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSpaces'>]-?: ReturnTypeFrom<'listSpaces'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"items"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listSpaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSpaces' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startDevEnvironment: (params: RawParamsFrom<'startDevEnvironment'>) => Promise<ReturnTypeFrom<'startDevEnvironment'>>  = async params => {
  // undefined
    return this.client.startDevEnvironment(params as any).promise();
  }

  startDevEnvironmentSession: (params: RawParamsFrom<'startDevEnvironmentSession'>) => Promise<ReturnTypeFrom<'startDevEnvironmentSession'>>  = async params => {
  // undefined
    return this.client.startDevEnvironmentSession(params as any).promise();
  }

  stopDevEnvironment: (params: RawParamsFrom<'stopDevEnvironment'>) => Promise<ReturnTypeFrom<'stopDevEnvironment'>>  = async params => {
  // undefined
    return this.client.stopDevEnvironment(params as any).promise();
  }

  updateDevEnvironment: (params: RawParamsFrom<'updateDevEnvironment'>) => Promise<ReturnTypeFrom<'updateDevEnvironment'>>  = async params => {
  // undefined
    return this.client.updateDevEnvironment(params as any).promise();
  }

  verifySession: (params: RawParamsFrom<'verifySession'>) => Promise<ReturnTypeFrom<'verifySession'>>  = async params => {
  // undefined
    return this.client.verifySession(params as any).promise();
  }
  
  static fromClient(client: AWSCodeCatalyst): CodeCatalyst {
    return new CodeCatalyst(client) as any;
  }
  
  static client(options?: AWSCodeCatalyst.Types.ClientConfiguration): CodeCatalyst {
    return new CodeCatalyst(new AWSCodeCatalyst(options)) as any;
  }
}  
