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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAmp> = AWSAmp[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Amp {
  private constructor(private readonly client: AWSAmp) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'aps' as const;
  public readonly global = false as const;
  public readonly category = 'End User Computing' as const;
  public readonly topLevelCalls = ["listWorkspaces"] as const;
  
  createAlertManagerDefinition: (params: RawParamsFrom<'createAlertManagerDefinition'>) => Promise<ReturnTypeFrom<'createAlertManagerDefinition'>>  = async params => {
  // undefined
    return this.client.createAlertManagerDefinition(params as any).promise();
  }

  createLoggingConfiguration: (params: RawParamsFrom<'createLoggingConfiguration'>) => Promise<ReturnTypeFrom<'createLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.createLoggingConfiguration(params as any).promise();
  }

  createRuleGroupsNamespace: (params: RawParamsFrom<'createRuleGroupsNamespace'>) => Promise<ReturnTypeFrom<'createRuleGroupsNamespace'>>  = async params => {
  // undefined
    return this.client.createRuleGroupsNamespace(params as any).promise();
  }

  createWorkspace: (params: RawParamsFrom<'createWorkspace'>) => Promise<ReturnTypeFrom<'createWorkspace'>>  = async params => {
  // undefined
    return this.client.createWorkspace(params as any).promise();
  }

  deleteAlertManagerDefinition: (params: RawParamsFrom<'deleteAlertManagerDefinition'>) => Promise<ReturnTypeFrom<'deleteAlertManagerDefinition'>>  = async params => {
  // undefined
    return this.client.deleteAlertManagerDefinition(params as any).promise();
  }

  deleteLoggingConfiguration: (params: RawParamsFrom<'deleteLoggingConfiguration'>) => Promise<ReturnTypeFrom<'deleteLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteLoggingConfiguration(params as any).promise();
  }

  deleteRuleGroupsNamespace: (params: RawParamsFrom<'deleteRuleGroupsNamespace'>) => Promise<ReturnTypeFrom<'deleteRuleGroupsNamespace'>>  = async params => {
  // undefined
    return this.client.deleteRuleGroupsNamespace(params as any).promise();
  }

  deleteWorkspace: (params: RawParamsFrom<'deleteWorkspace'>) => Promise<ReturnTypeFrom<'deleteWorkspace'>>  = async params => {
  // undefined
    return this.client.deleteWorkspace(params as any).promise();
  }

  describeAlertManagerDefinition: (params: RawParamsFrom<'describeAlertManagerDefinition'>) => Promise<ReturnTypeFrom<'describeAlertManagerDefinition'>>  = async params => {
  // undefined
    return this.client.describeAlertManagerDefinition(params as any).promise();
  }

  describeLoggingConfiguration: (params: RawParamsFrom<'describeLoggingConfiguration'>) => Promise<ReturnTypeFrom<'describeLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.describeLoggingConfiguration(params as any).promise();
  }

  describeRuleGroupsNamespace: (params: RawParamsFrom<'describeRuleGroupsNamespace'>) => Promise<ReturnTypeFrom<'describeRuleGroupsNamespace'>>  = async params => {
  // undefined
    return this.client.describeRuleGroupsNamespace(params as any).promise();
  }

  describeWorkspace: (params: RawParamsFrom<'describeWorkspace'>) => Promise<ReturnTypeFrom<'describeWorkspace'>>  = async params => {
  // undefined
    return this.client.describeWorkspace(params as any).promise();
  }

  async listRuleGroupsNamespaces(params: { [K in keyof ParamsFrom<'listRuleGroupsNamespaces', { next?: string, limit?: number }>]: ParamsFrom<'listRuleGroupsNamespaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRuleGroupsNamespaces'>]-?: ReturnTypeFrom<'listRuleGroupsNamespaces'>[K]}['ruleGroupsNamespaces'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"ruleGroupsNamespaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRuleGroupsNamespaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRuleGroupsNamespaces' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ruleGroupsNamespaces ?? []) ? (result.ruleGroupsNamespaces ?? []) : [result.ruleGroupsNamespaces]) as any;
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

  putAlertManagerDefinition: (params: RawParamsFrom<'putAlertManagerDefinition'>) => Promise<ReturnTypeFrom<'putAlertManagerDefinition'>>  = async params => {
  // undefined
    return this.client.putAlertManagerDefinition(params as any).promise();
  }

  putRuleGroupsNamespace: (params: RawParamsFrom<'putRuleGroupsNamespace'>) => Promise<ReturnTypeFrom<'putRuleGroupsNamespace'>>  = async params => {
  // undefined
    return this.client.putRuleGroupsNamespace(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateLoggingConfiguration: (params: RawParamsFrom<'updateLoggingConfiguration'>) => Promise<ReturnTypeFrom<'updateLoggingConfiguration'>>  = async params => {
  // undefined
    return this.client.updateLoggingConfiguration(params as any).promise();
  }

  updateWorkspaceAlias: (params: RawParamsFrom<'updateWorkspaceAlias'>) => Promise<ReturnTypeFrom<'updateWorkspaceAlias'>>  = async params => {
  // undefined
    return this.client.updateWorkspaceAlias(params as any).promise();
  }
  
  static fromClient(client: AWSAmp): Amp {
    return new Amp(client) as any;
  }
  
  static client(options?: AWSAmp.Types.ClientConfiguration): Amp {
    return new Amp(new AWSAmp(options)) as any;
  }
}  
