import { Request, Amp as AWSAmp } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAmp> = AWSAmp[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAmp> = AWSAmp[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAmp[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAmp, Extras> = AWSAmp[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'aps';
    global: false;
    category: 'End User Computing'
    topLevelCalls: readonly ["listWorkspaces"];
    
  createAlertManagerDefinition: FunctionTypeFrom<'createAlertManagerDefinition'>;

  createLoggingConfiguration: FunctionTypeFrom<'createLoggingConfiguration'>;

  createRuleGroupsNamespace: FunctionTypeFrom<'createRuleGroupsNamespace'>;

  createWorkspace: FunctionTypeFrom<'createWorkspace'>;

  deleteAlertManagerDefinition: FunctionTypeFrom<'deleteAlertManagerDefinition'>;

  deleteLoggingConfiguration: FunctionTypeFrom<'deleteLoggingConfiguration'>;

  deleteRuleGroupsNamespace: FunctionTypeFrom<'deleteRuleGroupsNamespace'>;

  deleteWorkspace: FunctionTypeFrom<'deleteWorkspace'>;

  describeAlertManagerDefinition: FunctionTypeFrom<'describeAlertManagerDefinition'>;

  describeLoggingConfiguration: FunctionTypeFrom<'describeLoggingConfiguration'>;

  describeRuleGroupsNamespace: FunctionTypeFrom<'describeRuleGroupsNamespace'>;

  describeWorkspace: FunctionTypeFrom<'describeWorkspace'>;

  listRuleGroupsNamespaces(params: { [K in keyof Omit<ParamsFrom<'listRuleGroupsNamespaces', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRuleGroupsNamespaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRuleGroupsNamespaces'>]-?: ReturnTypeFrom<'listRuleGroupsNamespaces'>[K]}['ruleGroupsNamespaces'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWorkspaces(params: { [K in keyof Omit<ParamsFrom<'listWorkspaces', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorkspaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkspaces'>]-?: ReturnTypeFrom<'listWorkspaces'>[K]}['workspaces'] }>
  listWorkspaces(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkspaces'>]-?: ReturnTypeFrom<'listWorkspaces'>[K]}['workspaces'] }>;

  putAlertManagerDefinition: FunctionTypeFrom<'putAlertManagerDefinition'>;

  putRuleGroupsNamespace: FunctionTypeFrom<'putRuleGroupsNamespace'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateLoggingConfiguration: FunctionTypeFrom<'updateLoggingConfiguration'>;

  updateWorkspaceAlias: FunctionTypeFrom<'updateWorkspaceAlias'>
}
 
export class Amp implements ClientType {
  private constructor(private readonly client: AWSAmp) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'aps';
  public readonly global = false;
  public readonly category = 'End User Computing';
  public readonly topLevelCalls = ["listWorkspaces"] as const;
  
  async createAlertManagerDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createAlertManagerDefinition(...args).promise()
  }

  async createLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createLoggingConfiguration(...args).promise()
  }

  async createRuleGroupsNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.createRuleGroupsNamespace(...args).promise()
  }

  async createWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkspace(...args).promise()
  }

  async deleteAlertManagerDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlertManagerDefinition(...args).promise()
  }

  async deleteLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoggingConfiguration(...args).promise()
  }

  async deleteRuleGroupsNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRuleGroupsNamespace(...args).promise()
  }

  async deleteWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkspace(...args).promise()
  }

  async describeAlertManagerDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.describeAlertManagerDefinition(...args).promise()
  }

  async describeLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoggingConfiguration(...args).promise()
  }

  async describeRuleGroupsNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.describeRuleGroupsNamespace(...args).promise()
  }

  async describeWorkspace(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkspace(...args).promise()
  }

  async listRuleGroupsNamespaces(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"ruleGroupsNamespaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRuleGroupsNamespaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.ruleGroupsNamespaces ?? [];
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

  async putAlertManagerDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.putAlertManagerDefinition(...args).promise()
  }

  async putRuleGroupsNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.putRuleGroupsNamespace(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateLoggingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateLoggingConfiguration(...args).promise()
  }

  async updateWorkspaceAlias(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkspaceAlias(...args).promise()
  }
  
  static fromClient(client: AWSAmp): ClientType {
    return new Amp(client) as any;
  }
  
  static client(options?: AWSAmp.Types.ClientConfiguration): ClientType {
    return new Amp(new AWSAmp(options)) as any;
  }
}  
