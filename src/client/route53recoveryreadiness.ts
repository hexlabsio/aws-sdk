import { Request, Route53RecoveryReadiness as AWSRoute53RecoveryReadiness } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRoute53RecoveryReadiness> = AWSRoute53RecoveryReadiness[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRoute53RecoveryReadiness> = AWSRoute53RecoveryReadiness[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRoute53RecoveryReadiness[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRoute53RecoveryReadiness, Extras> = AWSRoute53RecoveryReadiness[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'route53-recovery-readiness';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listCells","listCrossAccountAuthorizations","listReadinessChecks","listRecoveryGroups","listResourceSets","listRules"];
    
  createCell: FunctionTypeFrom<'createCell'>;

  createCrossAccountAuthorization: FunctionTypeFrom<'createCrossAccountAuthorization'>;

  createReadinessCheck: FunctionTypeFrom<'createReadinessCheck'>;

  createRecoveryGroup: FunctionTypeFrom<'createRecoveryGroup'>;

  createResourceSet: FunctionTypeFrom<'createResourceSet'>;

  deleteCell: FunctionTypeFrom<'deleteCell'>;

  deleteCrossAccountAuthorization: FunctionTypeFrom<'deleteCrossAccountAuthorization'>;

  deleteReadinessCheck: FunctionTypeFrom<'deleteReadinessCheck'>;

  deleteRecoveryGroup: FunctionTypeFrom<'deleteRecoveryGroup'>;

  deleteResourceSet: FunctionTypeFrom<'deleteResourceSet'>;

  getArchitectureRecommendations: FunctionTypeFrom<'getArchitectureRecommendations'>;

  getCell: FunctionTypeFrom<'getCell'>;

  getCellReadinessSummary(params: { [K in keyof Omit<ParamsFrom<'getCellReadinessSummary', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getCellReadinessSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getCellReadinessSummary'>]-?: ReturnTypeFrom<'getCellReadinessSummary'>[K]}['ReadinessChecks'] }>
  ;

  getReadinessCheck: FunctionTypeFrom<'getReadinessCheck'>;

  getReadinessCheckResourceStatus(params: { [K in keyof Omit<ParamsFrom<'getReadinessCheckResourceStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getReadinessCheckResourceStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getReadinessCheckResourceStatus'>]-?: ReturnTypeFrom<'getReadinessCheckResourceStatus'>[K]}['Rules'] }>
  ;

  getReadinessCheckStatus(params: { [K in keyof Omit<ParamsFrom<'getReadinessCheckStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getReadinessCheckStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getReadinessCheckStatus'>]-?: ReturnTypeFrom<'getReadinessCheckStatus'>[K]}['Resources'] }>
  ;

  getRecoveryGroup: FunctionTypeFrom<'getRecoveryGroup'>;

  getRecoveryGroupReadinessSummary(params: { [K in keyof Omit<ParamsFrom<'getRecoveryGroupReadinessSummary', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getRecoveryGroupReadinessSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getRecoveryGroupReadinessSummary'>]-?: ReturnTypeFrom<'getRecoveryGroupReadinessSummary'>[K]}['ReadinessChecks'] }>
  ;

  getResourceSet: FunctionTypeFrom<'getResourceSet'>;

  listCells(params: { [K in keyof Omit<ParamsFrom<'listCells', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCells', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCells'>]-?: ReturnTypeFrom<'listCells'>[K]}['Cells'] }>
  listCells(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCells'>]-?: ReturnTypeFrom<'listCells'>[K]}['Cells'] }>;

  listCrossAccountAuthorizations(params: { [K in keyof Omit<ParamsFrom<'listCrossAccountAuthorizations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCrossAccountAuthorizations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCrossAccountAuthorizations'>]-?: ReturnTypeFrom<'listCrossAccountAuthorizations'>[K]}['CrossAccountAuthorizations'] }>
  listCrossAccountAuthorizations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCrossAccountAuthorizations'>]-?: ReturnTypeFrom<'listCrossAccountAuthorizations'>[K]}['CrossAccountAuthorizations'] }>;

  listReadinessChecks(params: { [K in keyof Omit<ParamsFrom<'listReadinessChecks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listReadinessChecks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReadinessChecks'>]-?: ReturnTypeFrom<'listReadinessChecks'>[K]}['ReadinessChecks'] }>
  listReadinessChecks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listReadinessChecks'>]-?: ReturnTypeFrom<'listReadinessChecks'>[K]}['ReadinessChecks'] }>;

  listRecoveryGroups(params: { [K in keyof Omit<ParamsFrom<'listRecoveryGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRecoveryGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecoveryGroups'>]-?: ReturnTypeFrom<'listRecoveryGroups'>[K]}['RecoveryGroups'] }>
  listRecoveryGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecoveryGroups'>]-?: ReturnTypeFrom<'listRecoveryGroups'>[K]}['RecoveryGroups'] }>;

  listResourceSets(params: { [K in keyof Omit<ParamsFrom<'listResourceSets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResourceSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceSets'>]-?: ReturnTypeFrom<'listResourceSets'>[K]}['ResourceSets'] }>
  listResourceSets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceSets'>]-?: ReturnTypeFrom<'listResourceSets'>[K]}['ResourceSets'] }>;

  listRules(params: { [K in keyof Omit<ParamsFrom<'listRules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRules'>]-?: ReturnTypeFrom<'listRules'>[K]}['Rules'] }>
  listRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRules'>]-?: ReturnTypeFrom<'listRules'>[K]}['Rules'] }>;

  listTagsForResources: FunctionTypeFrom<'listTagsForResources'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCell: FunctionTypeFrom<'updateCell'>;

  updateReadinessCheck: FunctionTypeFrom<'updateReadinessCheck'>;

  updateRecoveryGroup: FunctionTypeFrom<'updateRecoveryGroup'>;

  updateResourceSet: FunctionTypeFrom<'updateResourceSet'>
}
 
export class Route53RecoveryReadiness implements ClientType {
  private constructor(private readonly client: AWSRoute53RecoveryReadiness) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53-recovery-readiness';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listCells","listCrossAccountAuthorizations","listReadinessChecks","listRecoveryGroups","listResourceSets","listRules"] as const;
  
  async createCell(...args: any): Promise<any> {
  // undefined
    return this.client.createCell(...args).promise()
  }

  async createCrossAccountAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.createCrossAccountAuthorization(...args).promise()
  }

  async createReadinessCheck(...args: any): Promise<any> {
  // undefined
    return this.client.createReadinessCheck(...args).promise()
  }

  async createRecoveryGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createRecoveryGroup(...args).promise()
  }

  async createResourceSet(...args: any): Promise<any> {
  // undefined
    return this.client.createResourceSet(...args).promise()
  }

  async deleteCell(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCell(...args).promise()
  }

  async deleteCrossAccountAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCrossAccountAuthorization(...args).promise()
  }

  async deleteReadinessCheck(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReadinessCheck(...args).promise()
  }

  async deleteRecoveryGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecoveryGroup(...args).promise()
  }

  async deleteResourceSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourceSet(...args).promise()
  }

  async getArchitectureRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.getArchitectureRecommendations(...args).promise()
  }

  async getCell(...args: any): Promise<any> {
  // undefined
    return this.client.getCell(...args).promise()
  }

  async getCellReadinessSummary(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReadinessChecks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getCellReadinessSummary(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ReadinessChecks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getReadinessCheck(...args: any): Promise<any> {
  // undefined
    return this.client.getReadinessCheck(...args).promise()
  }

  async getReadinessCheckResourceStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Rules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getReadinessCheckResourceStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Rules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getReadinessCheckStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Resources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getReadinessCheckStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Resources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getRecoveryGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getRecoveryGroup(...args).promise()
  }

  async getRecoveryGroupReadinessSummary(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReadinessChecks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getRecoveryGroupReadinessSummary(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ReadinessChecks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getResourceSet(...args: any): Promise<any> {
  // undefined
    return this.client.getResourceSet(...args).promise()
  }

  async listCells(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Cells"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCells(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Cells ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCrossAccountAuthorizations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CrossAccountAuthorizations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCrossAccountAuthorizations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CrossAccountAuthorizations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReadinessChecks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReadinessChecks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listReadinessChecks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ReadinessChecks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecoveryGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RecoveryGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecoveryGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RecoveryGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceSets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceSets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Rules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Rules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResources(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResources(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCell(...args: any): Promise<any> {
  // undefined
    return this.client.updateCell(...args).promise()
  }

  async updateReadinessCheck(...args: any): Promise<any> {
  // undefined
    return this.client.updateReadinessCheck(...args).promise()
  }

  async updateRecoveryGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateRecoveryGroup(...args).promise()
  }

  async updateResourceSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateResourceSet(...args).promise()
  }
  
  static fromClient(client: AWSRoute53RecoveryReadiness): ClientType {
    return new Route53RecoveryReadiness(client) as any;
  }
  
  static client(options?: AWSRoute53RecoveryReadiness.Types.ClientConfiguration): ClientType {
    return new Route53RecoveryReadiness(new AWSRoute53RecoveryReadiness(options)) as any;
  }
}  
