import { Request, AccessAnalyzer as AWSAccessAnalyzer } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAccessAnalyzer> = AWSAccessAnalyzer[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAccessAnalyzer> = AWSAccessAnalyzer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAccessAnalyzer[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAccessAnalyzer, Extras> = AWSAccessAnalyzer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAccessAnalyzer> = AWSAccessAnalyzer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AccessAnalyzer {
  private constructor(private readonly client: AWSAccessAnalyzer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'access-analyzer' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listAnalyzers","listPolicyGenerations"] as const;
  
  applyArchiveRule: (params: RawParamsFrom<'applyArchiveRule'>) => Promise<ReturnTypeFrom<'applyArchiveRule'>>  = async params => {
  // undefined
    return this.client.applyArchiveRule(params as any).promise();
  }

  cancelPolicyGeneration: (params: RawParamsFrom<'cancelPolicyGeneration'>) => Promise<ReturnTypeFrom<'cancelPolicyGeneration'>>  = async params => {
  // undefined
    return this.client.cancelPolicyGeneration(params as any).promise();
  }

  createAccessPreview: (params: RawParamsFrom<'createAccessPreview'>) => Promise<ReturnTypeFrom<'createAccessPreview'>>  = async params => {
  // undefined
    return this.client.createAccessPreview(params as any).promise();
  }

  createAnalyzer: (params: RawParamsFrom<'createAnalyzer'>) => Promise<ReturnTypeFrom<'createAnalyzer'>>  = async params => {
  // undefined
    return this.client.createAnalyzer(params as any).promise();
  }

  createArchiveRule: (params: RawParamsFrom<'createArchiveRule'>) => Promise<ReturnTypeFrom<'createArchiveRule'>>  = async params => {
  // undefined
    return this.client.createArchiveRule(params as any).promise();
  }

  deleteAnalyzer: (params: RawParamsFrom<'deleteAnalyzer'>) => Promise<ReturnTypeFrom<'deleteAnalyzer'>>  = async params => {
  // undefined
    return this.client.deleteAnalyzer(params as any).promise();
  }

  deleteArchiveRule: (params: RawParamsFrom<'deleteArchiveRule'>) => Promise<ReturnTypeFrom<'deleteArchiveRule'>>  = async params => {
  // undefined
    return this.client.deleteArchiveRule(params as any).promise();
  }

  getAccessPreview: (params: RawParamsFrom<'getAccessPreview'>) => Promise<ReturnTypeFrom<'getAccessPreview'>>  = async params => {
  // undefined
    return this.client.getAccessPreview(params as any).promise();
  }

  getAnalyzedResource: (params: RawParamsFrom<'getAnalyzedResource'>) => Promise<ReturnTypeFrom<'getAnalyzedResource'>>  = async params => {
  // undefined
    return this.client.getAnalyzedResource(params as any).promise();
  }

  getAnalyzer: (params: RawParamsFrom<'getAnalyzer'>) => Promise<ReturnTypeFrom<'getAnalyzer'>>  = async params => {
  // undefined
    return this.client.getAnalyzer(params as any).promise();
  }

  getArchiveRule: (params: RawParamsFrom<'getArchiveRule'>) => Promise<ReturnTypeFrom<'getArchiveRule'>>  = async params => {
  // undefined
    return this.client.getArchiveRule(params as any).promise();
  }

  getFinding: (params: RawParamsFrom<'getFinding'>) => Promise<ReturnTypeFrom<'getFinding'>>  = async params => {
  // undefined
    return this.client.getFinding(params as any).promise();
  }

  getGeneratedPolicy: (params: RawParamsFrom<'getGeneratedPolicy'>) => Promise<ReturnTypeFrom<'getGeneratedPolicy'>>  = async params => {
  // undefined
    return this.client.getGeneratedPolicy(params as any).promise();
  }

  async listAccessPreviewFindings(params: { [K in keyof ParamsFrom<'listAccessPreviewFindings', { next?: string, limit?: number }>]: ParamsFrom<'listAccessPreviewFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccessPreviewFindings'>]-?: ReturnTypeFrom<'listAccessPreviewFindings'>[K]}['findings'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccessPreviewFindings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAccessPreviewFindings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.findings ?? []) ? (result.findings ?? []) : [result.findings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccessPreviews(params: { [K in keyof ParamsFrom<'listAccessPreviews', { next?: string, limit?: number }>]: ParamsFrom<'listAccessPreviews', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccessPreviews'>]-?: ReturnTypeFrom<'listAccessPreviews'>[K]}['accessPreviews'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accessPreviews"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccessPreviews({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAccessPreviews' })).toString('base64') : undefined;
    const member = (Array.isArray(result.accessPreviews ?? []) ? (result.accessPreviews ?? []) : [result.accessPreviews]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAnalyzedResources(params: { [K in keyof ParamsFrom<'listAnalyzedResources', { next?: string, limit?: number }>]: ParamsFrom<'listAnalyzedResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAnalyzedResources'>]-?: ReturnTypeFrom<'listAnalyzedResources'>[K]}['analyzedResources'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"analyzedResources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAnalyzedResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAnalyzedResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.analyzedResources ?? []) ? (result.analyzedResources ?? []) : [result.analyzedResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAnalyzers(params: { [K in keyof ParamsFrom<'listAnalyzers', { next?: string, limit?: number }>]: ParamsFrom<'listAnalyzers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAnalyzers'>]-?: ReturnTypeFrom<'listAnalyzers'>[K]}['analyzers'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"analyzers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAnalyzers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAnalyzers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.analyzers ?? []) ? (result.analyzers ?? []) : [result.analyzers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listArchiveRules(params: { [K in keyof ParamsFrom<'listArchiveRules', { next?: string, limit?: number }>]: ParamsFrom<'listArchiveRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listArchiveRules'>]-?: ReturnTypeFrom<'listArchiveRules'>[K]}['archiveRules'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"archiveRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listArchiveRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listArchiveRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.archiveRules ?? []) ? (result.archiveRules ?? []) : [result.archiveRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindings(params: { [K in keyof ParamsFrom<'listFindings', { next?: string, limit?: number }>]: ParamsFrom<'listFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['findings'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFindings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.findings ?? []) ? (result.findings ?? []) : [result.findings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPolicyGenerations(params: { [K in keyof ParamsFrom<'listPolicyGenerations', { next?: string, limit?: number }>]: ParamsFrom<'listPolicyGenerations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPolicyGenerations'>]-?: ReturnTypeFrom<'listPolicyGenerations'>[K]}['policyGenerations'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"policyGenerations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPolicyGenerations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPolicyGenerations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.policyGenerations ?? []) ? (result.policyGenerations ?? []) : [result.policyGenerations]) as any;
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

  startPolicyGeneration: (params: RawParamsFrom<'startPolicyGeneration'>) => Promise<ReturnTypeFrom<'startPolicyGeneration'>>  = async params => {
  // undefined
    return this.client.startPolicyGeneration(params as any).promise();
  }

  startResourceScan: (params: RawParamsFrom<'startResourceScan'>) => Promise<ReturnTypeFrom<'startResourceScan'>>  = async params => {
  // undefined
    return this.client.startResourceScan(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateArchiveRule: (params: RawParamsFrom<'updateArchiveRule'>) => Promise<ReturnTypeFrom<'updateArchiveRule'>>  = async params => {
  // undefined
    return this.client.updateArchiveRule(params as any).promise();
  }

  updateFindings: (params: RawParamsFrom<'updateFindings'>) => Promise<ReturnTypeFrom<'updateFindings'>>  = async params => {
  // undefined
    return this.client.updateFindings(params as any).promise();
  }

  async validatePolicy(params: { [K in keyof ParamsFrom<'validatePolicy', { next?: string, limit?: number }>]: ParamsFrom<'validatePolicy', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'validatePolicy'>]-?: ReturnTypeFrom<'validatePolicy'>[K]}['findings'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.validatePolicy({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'validatePolicy' })).toString('base64') : undefined;
    const member = (Array.isArray(result.findings ?? []) ? (result.findings ?? []) : [result.findings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSAccessAnalyzer): AccessAnalyzer {
    return new AccessAnalyzer(client) as any;
  }
  
  static client(options?: AWSAccessAnalyzer.Types.ClientConfiguration): AccessAnalyzer {
    return new AccessAnalyzer(new AWSAccessAnalyzer(options)) as any;
  }
}  
