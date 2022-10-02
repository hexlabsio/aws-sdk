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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'grafana';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listWorkspaces"];
    
  associateLicense: FunctionTypeFrom<'associateLicense'>;

  createWorkspace: FunctionTypeFrom<'createWorkspace'>;

  createWorkspaceApiKey: FunctionTypeFrom<'createWorkspaceApiKey'>;

  deleteWorkspace: FunctionTypeFrom<'deleteWorkspace'>;

  deleteWorkspaceApiKey: FunctionTypeFrom<'deleteWorkspaceApiKey'>;

  describeWorkspace: FunctionTypeFrom<'describeWorkspace'>;

  describeWorkspaceAuthentication: FunctionTypeFrom<'describeWorkspaceAuthentication'>;

  disassociateLicense: FunctionTypeFrom<'disassociateLicense'>;

  listPermissions(params: { [K in keyof Omit<ParamsFrom<'listPermissions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPermissions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPermissions'>]-?: ReturnTypeFrom<'listPermissions'>[K]}['permissions'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWorkspaces(params: { [K in keyof Omit<ParamsFrom<'listWorkspaces', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorkspaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkspaces'>]-?: ReturnTypeFrom<'listWorkspaces'>[K]}['workspaces'] }>
  listWorkspaces(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkspaces'>]-?: ReturnTypeFrom<'listWorkspaces'>[K]}['workspaces'] }>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updatePermissions: FunctionTypeFrom<'updatePermissions'>;

  updateWorkspace: FunctionTypeFrom<'updateWorkspace'>;

  updateWorkspaceAuthentication: FunctionTypeFrom<'updateWorkspaceAuthentication'>
}
 
export class Grafana implements ClientType {
  private constructor(private readonly client: AWSGrafana) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'grafana';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listWorkspaces"] as const;
  
  async associateLicense(...args: any): Promise<any> {
  // undefined
    return this.client.associateLicense(...args).promise()
  }

  async createWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkspace(...args).promise()
  }

  async createWorkspaceApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkspaceApiKey(...args).promise()
  }

  async deleteWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkspace(...args).promise()
  }

  async deleteWorkspaceApiKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkspaceApiKey(...args).promise()
  }

  async describeWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkspace(...args).promise()
  }

  async describeWorkspaceAuthentication(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkspaceAuthentication(...args).promise()
  }

  async disassociateLicense(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateLicense(...args).promise()
  }

  async listPermissions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"permissions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPermissions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.permissions ?? [];
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

  async listWorkspaces(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workspaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkspaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.workspaces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updatePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updatePermissions(...args).promise()
  }

  async updateWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkspace(...args).promise()
  }

  async updateWorkspaceAuthentication(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkspaceAuthentication(...args).promise()
  }
  
  static fromClient(client: AWSGrafana): ClientType {
    return new Grafana(client) as any;
  }
  
  static client(options?: AWSGrafana.Types.ClientConfiguration): ClientType {
    return new Grafana(new AWSGrafana(options)) as any;
  }
}  
