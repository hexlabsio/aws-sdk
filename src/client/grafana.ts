import { Request, Grafana as AWSGrafana } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGrafana> = AWSGrafana[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGrafana> = AWSGrafana[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGrafana[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGrafana, Extras> = AWSGrafana[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGrafana> = AWSGrafana[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Grafana {
  private constructor(private readonly client: AWSGrafana) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'grafana' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listWorkspaces"] as const;
  
  associateLicense: (params: RawParamsFrom<'associateLicense'>) => Promise<ReturnTypeFrom<'associateLicense'>>  = async params => {
  // undefined
    return this.client.associateLicense(params as any).promise();
  }

  createWorkspace: (params: RawParamsFrom<'createWorkspace'>) => Promise<ReturnTypeFrom<'createWorkspace'>>  = async params => {
  // undefined
    return this.client.createWorkspace(params as any).promise();
  }

  createWorkspaceApiKey: (params: RawParamsFrom<'createWorkspaceApiKey'>) => Promise<ReturnTypeFrom<'createWorkspaceApiKey'>>  = async params => {
  // undefined
    return this.client.createWorkspaceApiKey(params as any).promise();
  }

  deleteWorkspace: (params: RawParamsFrom<'deleteWorkspace'>) => Promise<ReturnTypeFrom<'deleteWorkspace'>>  = async params => {
  // undefined
    return this.client.deleteWorkspace(params as any).promise();
  }

  deleteWorkspaceApiKey: (params: RawParamsFrom<'deleteWorkspaceApiKey'>) => Promise<ReturnTypeFrom<'deleteWorkspaceApiKey'>>  = async params => {
  // undefined
    return this.client.deleteWorkspaceApiKey(params as any).promise();
  }

  describeWorkspace: (params: RawParamsFrom<'describeWorkspace'>) => Promise<ReturnTypeFrom<'describeWorkspace'>>  = async params => {
  // undefined
    return this.client.describeWorkspace(params as any).promise();
  }

  describeWorkspaceAuthentication: (params: RawParamsFrom<'describeWorkspaceAuthentication'>) => Promise<ReturnTypeFrom<'describeWorkspaceAuthentication'>>  = async params => {
  // undefined
    return this.client.describeWorkspaceAuthentication(params as any).promise();
  }

  disassociateLicense: (params: RawParamsFrom<'disassociateLicense'>) => Promise<ReturnTypeFrom<'disassociateLicense'>>  = async params => {
  // undefined
    return this.client.disassociateLicense(params as any).promise();
  }

  async listPermissions(params: { [K in keyof ParamsFrom<'listPermissions', { next?: string, limit?: number }>]: ParamsFrom<'listPermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPermissions'>]-?: ReturnTypeFrom<'listPermissions'>[K]}['permissions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"permissions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPermissions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPermissions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.permissions ?? []) ? (result.permissions ?? []) : [result.permissions]) as any;
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

  async listWorkspaces(params: { [K in keyof ParamsFrom<'listWorkspaces', { next?: string, limit?: number }>]: ParamsFrom<'listWorkspaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkspaces'>]-?: ReturnTypeFrom<'listWorkspaces'>[K]}['workspaces'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workspaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkspaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listWorkspaces' })).toString('base64') : undefined;
    const member = (Array.isArray(result.workspaces ?? []) ? (result.workspaces ?? []) : [result.workspaces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updatePermissions: (params: RawParamsFrom<'updatePermissions'>) => Promise<ReturnTypeFrom<'updatePermissions'>>  = async params => {
  // undefined
    return this.client.updatePermissions(params as any).promise();
  }

  updateWorkspace: (params: RawParamsFrom<'updateWorkspace'>) => Promise<ReturnTypeFrom<'updateWorkspace'>>  = async params => {
  // undefined
    return this.client.updateWorkspace(params as any).promise();
  }

  updateWorkspaceAuthentication: (params: RawParamsFrom<'updateWorkspaceAuthentication'>) => Promise<ReturnTypeFrom<'updateWorkspaceAuthentication'>>  = async params => {
  // undefined
    return this.client.updateWorkspaceAuthentication(params as any).promise();
  }
  
  static fromClient(client: AWSGrafana): Grafana {
    return new Grafana(client) as any;
  }
  
  static client(options?: AWSGrafana.Types.ClientConfiguration): Grafana {
    return new Grafana(new AWSGrafana(options)) as any;
  }
}  
