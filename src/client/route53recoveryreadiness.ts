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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRoute53RecoveryReadiness> = AWSRoute53RecoveryReadiness[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Route53RecoveryReadiness {
  private constructor(private readonly client: AWSRoute53RecoveryReadiness) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53-recovery-readiness' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listCells","listCrossAccountAuthorizations","listReadinessChecks","listRecoveryGroups","listResourceSets","listRules"] as const;
  
  createCell: (params: RawParamsFrom<'createCell'>) => Promise<ReturnTypeFrom<'createCell'>>  = async params => {
  // undefined
    return this.client.createCell(params as any).promise();
  }

  createCrossAccountAuthorization: (params: RawParamsFrom<'createCrossAccountAuthorization'>) => Promise<ReturnTypeFrom<'createCrossAccountAuthorization'>>  = async params => {
  // undefined
    return this.client.createCrossAccountAuthorization(params as any).promise();
  }

  createReadinessCheck: (params: RawParamsFrom<'createReadinessCheck'>) => Promise<ReturnTypeFrom<'createReadinessCheck'>>  = async params => {
  // undefined
    return this.client.createReadinessCheck(params as any).promise();
  }

  createRecoveryGroup: (params: RawParamsFrom<'createRecoveryGroup'>) => Promise<ReturnTypeFrom<'createRecoveryGroup'>>  = async params => {
  // undefined
    return this.client.createRecoveryGroup(params as any).promise();
  }

  createResourceSet: (params: RawParamsFrom<'createResourceSet'>) => Promise<ReturnTypeFrom<'createResourceSet'>>  = async params => {
  // undefined
    return this.client.createResourceSet(params as any).promise();
  }

  deleteCell: (params: RawParamsFrom<'deleteCell'>) => Promise<ReturnTypeFrom<'deleteCell'>>  = async params => {
  // undefined
    return this.client.deleteCell(params as any).promise();
  }

  deleteCrossAccountAuthorization: (params: RawParamsFrom<'deleteCrossAccountAuthorization'>) => Promise<ReturnTypeFrom<'deleteCrossAccountAuthorization'>>  = async params => {
  // undefined
    return this.client.deleteCrossAccountAuthorization(params as any).promise();
  }

  deleteReadinessCheck: (params: RawParamsFrom<'deleteReadinessCheck'>) => Promise<ReturnTypeFrom<'deleteReadinessCheck'>>  = async params => {
  // undefined
    return this.client.deleteReadinessCheck(params as any).promise();
  }

  deleteRecoveryGroup: (params: RawParamsFrom<'deleteRecoveryGroup'>) => Promise<ReturnTypeFrom<'deleteRecoveryGroup'>>  = async params => {
  // undefined
    return this.client.deleteRecoveryGroup(params as any).promise();
  }

  deleteResourceSet: (params: RawParamsFrom<'deleteResourceSet'>) => Promise<ReturnTypeFrom<'deleteResourceSet'>>  = async params => {
  // undefined
    return this.client.deleteResourceSet(params as any).promise();
  }

  getArchitectureRecommendations: (params: RawParamsFrom<'getArchitectureRecommendations'>) => Promise<ReturnTypeFrom<'getArchitectureRecommendations'>>  = async params => {
  // undefined
    return this.client.getArchitectureRecommendations(params as any).promise();
  }

  getCell: (params: RawParamsFrom<'getCell'>) => Promise<ReturnTypeFrom<'getCell'>>  = async params => {
  // undefined
    return this.client.getCell(params as any).promise();
  }

  async getCellReadinessSummary(params: { [K in keyof ParamsFrom<'getCellReadinessSummary', { next?: string, limit?: number }>]: ParamsFrom<'getCellReadinessSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getCellReadinessSummary'>]-?: ReturnTypeFrom<'getCellReadinessSummary'>[K]}['ReadinessChecks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReadinessChecks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getCellReadinessSummary({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getCellReadinessSummary' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReadinessChecks ?? []) ? (result.ReadinessChecks ?? []) : [result.ReadinessChecks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getReadinessCheck: (params: RawParamsFrom<'getReadinessCheck'>) => Promise<ReturnTypeFrom<'getReadinessCheck'>>  = async params => {
  // undefined
    return this.client.getReadinessCheck(params as any).promise();
  }

  async getReadinessCheckResourceStatus(params: { [K in keyof ParamsFrom<'getReadinessCheckResourceStatus', { next?: string, limit?: number }>]: ParamsFrom<'getReadinessCheckResourceStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getReadinessCheckResourceStatus'>]-?: ReturnTypeFrom<'getReadinessCheckResourceStatus'>[K]}['Rules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Rules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getReadinessCheckResourceStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getReadinessCheckResourceStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Rules ?? []) ? (result.Rules ?? []) : [result.Rules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getReadinessCheckStatus(params: { [K in keyof ParamsFrom<'getReadinessCheckStatus', { next?: string, limit?: number }>]: ParamsFrom<'getReadinessCheckStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getReadinessCheckStatus'>]-?: ReturnTypeFrom<'getReadinessCheckStatus'>[K]}['Resources'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Resources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getReadinessCheckStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getReadinessCheckStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Resources ?? []) ? (result.Resources ?? []) : [result.Resources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getRecoveryGroup: (params: RawParamsFrom<'getRecoveryGroup'>) => Promise<ReturnTypeFrom<'getRecoveryGroup'>>  = async params => {
  // undefined
    return this.client.getRecoveryGroup(params as any).promise();
  }

  async getRecoveryGroupReadinessSummary(params: { [K in keyof ParamsFrom<'getRecoveryGroupReadinessSummary', { next?: string, limit?: number }>]: ParamsFrom<'getRecoveryGroupReadinessSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getRecoveryGroupReadinessSummary'>]-?: ReturnTypeFrom<'getRecoveryGroupReadinessSummary'>[K]}['ReadinessChecks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReadinessChecks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getRecoveryGroupReadinessSummary({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getRecoveryGroupReadinessSummary' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReadinessChecks ?? []) ? (result.ReadinessChecks ?? []) : [result.ReadinessChecks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getResourceSet: (params: RawParamsFrom<'getResourceSet'>) => Promise<ReturnTypeFrom<'getResourceSet'>>  = async params => {
  // undefined
    return this.client.getResourceSet(params as any).promise();
  }

  async listCells(params: { [K in keyof ParamsFrom<'listCells', { next?: string, limit?: number }>]: ParamsFrom<'listCells', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCells'>]-?: ReturnTypeFrom<'listCells'>[K]}['Cells'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Cells"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCells({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCells' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Cells ?? []) ? (result.Cells ?? []) : [result.Cells]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCrossAccountAuthorizations(params: { [K in keyof ParamsFrom<'listCrossAccountAuthorizations', { next?: string, limit?: number }>]: ParamsFrom<'listCrossAccountAuthorizations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCrossAccountAuthorizations'>]-?: ReturnTypeFrom<'listCrossAccountAuthorizations'>[K]}['CrossAccountAuthorizations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CrossAccountAuthorizations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCrossAccountAuthorizations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCrossAccountAuthorizations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CrossAccountAuthorizations ?? []) ? (result.CrossAccountAuthorizations ?? []) : [result.CrossAccountAuthorizations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReadinessChecks(params: { [K in keyof ParamsFrom<'listReadinessChecks', { next?: string, limit?: number }>]: ParamsFrom<'listReadinessChecks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listReadinessChecks'>]-?: ReturnTypeFrom<'listReadinessChecks'>[K]}['ReadinessChecks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReadinessChecks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listReadinessChecks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listReadinessChecks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReadinessChecks ?? []) ? (result.ReadinessChecks ?? []) : [result.ReadinessChecks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecoveryGroups(params: { [K in keyof ParamsFrom<'listRecoveryGroups', { next?: string, limit?: number }>]: ParamsFrom<'listRecoveryGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecoveryGroups'>]-?: ReturnTypeFrom<'listRecoveryGroups'>[K]}['RecoveryGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RecoveryGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecoveryGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRecoveryGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RecoveryGroups ?? []) ? (result.RecoveryGroups ?? []) : [result.RecoveryGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceSets(params: { [K in keyof ParamsFrom<'listResourceSets', { next?: string, limit?: number }>]: ParamsFrom<'listResourceSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceSets'>]-?: ReturnTypeFrom<'listResourceSets'>[K]}['ResourceSets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceSets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResourceSets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ResourceSets ?? []) ? (result.ResourceSets ?? []) : [result.ResourceSets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRules(params: { [K in keyof ParamsFrom<'listRules', { next?: string, limit?: number }>]: ParamsFrom<'listRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRules'>]-?: ReturnTypeFrom<'listRules'>[K]}['Rules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Rules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Rules ?? []) ? (result.Rules ?? []) : [result.Rules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResources: (params: RawParamsFrom<'listTagsForResources'>) => Promise<ReturnTypeFrom<'listTagsForResources'>>  = async params => {
  // undefined
    return this.client.listTagsForResources(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCell: (params: RawParamsFrom<'updateCell'>) => Promise<ReturnTypeFrom<'updateCell'>>  = async params => {
  // undefined
    return this.client.updateCell(params as any).promise();
  }

  updateReadinessCheck: (params: RawParamsFrom<'updateReadinessCheck'>) => Promise<ReturnTypeFrom<'updateReadinessCheck'>>  = async params => {
  // undefined
    return this.client.updateReadinessCheck(params as any).promise();
  }

  updateRecoveryGroup: (params: RawParamsFrom<'updateRecoveryGroup'>) => Promise<ReturnTypeFrom<'updateRecoveryGroup'>>  = async params => {
  // undefined
    return this.client.updateRecoveryGroup(params as any).promise();
  }

  updateResourceSet: (params: RawParamsFrom<'updateResourceSet'>) => Promise<ReturnTypeFrom<'updateResourceSet'>>  = async params => {
  // undefined
    return this.client.updateResourceSet(params as any).promise();
  }
  
  static fromClient(client: AWSRoute53RecoveryReadiness): Route53RecoveryReadiness {
    return new Route53RecoveryReadiness(client) as any;
  }
  
  static client(options?: AWSRoute53RecoveryReadiness.Types.ClientConfiguration): Route53RecoveryReadiness {
    return new Route53RecoveryReadiness(new AWSRoute53RecoveryReadiness(options)) as any;
  }
}  
