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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'access-analyzer';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listAnalyzers","listPolicyGenerations"];
    
  applyArchiveRule: FunctionTypeFrom<'applyArchiveRule'>;

  cancelPolicyGeneration: FunctionTypeFrom<'cancelPolicyGeneration'>;

  createAccessPreview: FunctionTypeFrom<'createAccessPreview'>;

  createAnalyzer: FunctionTypeFrom<'createAnalyzer'>;

  createArchiveRule: FunctionTypeFrom<'createArchiveRule'>;

  deleteAnalyzer: FunctionTypeFrom<'deleteAnalyzer'>;

  deleteArchiveRule: FunctionTypeFrom<'deleteArchiveRule'>;

  getAccessPreview: FunctionTypeFrom<'getAccessPreview'>;

  getAnalyzedResource: FunctionTypeFrom<'getAnalyzedResource'>;

  getAnalyzer: FunctionTypeFrom<'getAnalyzer'>;

  getArchiveRule: FunctionTypeFrom<'getArchiveRule'>;

  getFinding: FunctionTypeFrom<'getFinding'>;

  getGeneratedPolicy: FunctionTypeFrom<'getGeneratedPolicy'>;

  listAccessPreviewFindings(params: { [K in keyof Omit<ParamsFrom<'listAccessPreviewFindings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAccessPreviewFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccessPreviewFindings'>]-?: ReturnTypeFrom<'listAccessPreviewFindings'>[K]}['findings'] }>
  ;

  listAccessPreviews(params: { [K in keyof Omit<ParamsFrom<'listAccessPreviews', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAccessPreviews', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccessPreviews'>]-?: ReturnTypeFrom<'listAccessPreviews'>[K]}['accessPreviews'] }>
  ;

  listAnalyzedResources(params: { [K in keyof Omit<ParamsFrom<'listAnalyzedResources', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAnalyzedResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAnalyzedResources'>]-?: ReturnTypeFrom<'listAnalyzedResources'>[K]}['analyzedResources'] }>
  ;

  listAnalyzers(params: { [K in keyof Omit<ParamsFrom<'listAnalyzers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAnalyzers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAnalyzers'>]-?: ReturnTypeFrom<'listAnalyzers'>[K]}['analyzers'] }>
  listAnalyzers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAnalyzers'>]-?: ReturnTypeFrom<'listAnalyzers'>[K]}['analyzers'] }>;

  listArchiveRules(params: { [K in keyof Omit<ParamsFrom<'listArchiveRules', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listArchiveRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listArchiveRules'>]-?: ReturnTypeFrom<'listArchiveRules'>[K]}['archiveRules'] }>
  ;

  listFindings(params: { [K in keyof Omit<ParamsFrom<'listFindings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFindings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFindings'>]-?: ReturnTypeFrom<'listFindings'>[K]}['findings'] }>
  ;

  listPolicyGenerations(params: { [K in keyof Omit<ParamsFrom<'listPolicyGenerations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPolicyGenerations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicyGenerations'>]-?: ReturnTypeFrom<'listPolicyGenerations'>[K]}['policyGenerations'] }>
  listPolicyGenerations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicyGenerations'>]-?: ReturnTypeFrom<'listPolicyGenerations'>[K]}['policyGenerations'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startPolicyGeneration: FunctionTypeFrom<'startPolicyGeneration'>;

  startResourceScan: FunctionTypeFrom<'startResourceScan'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateArchiveRule: FunctionTypeFrom<'updateArchiveRule'>;

  updateFindings: FunctionTypeFrom<'updateFindings'>;

  validatePolicy(params: { [K in keyof Omit<ParamsFrom<'validatePolicy', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'validatePolicy', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'validatePolicy'>]-?: ReturnTypeFrom<'validatePolicy'>[K]}['findings'] }>
  
}
 
export class AccessAnalyzer implements ClientType {
  private constructor(private readonly client: AWSAccessAnalyzer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'access-analyzer';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listAnalyzers","listPolicyGenerations"] as const;
  
  async applyArchiveRule(...args: any): Promise<any> {
  // undefined
    return this.client.applyArchiveRule(...args).promise()
  }

  async cancelPolicyGeneration(...args: any): Promise<any> {
  // undefined
    return this.client.cancelPolicyGeneration(...args).promise()
  }

  async createAccessPreview(...args: any): Promise<any> {
  // undefined
    return this.client.createAccessPreview(...args).promise()
  }

  async createAnalyzer(...args: any): Promise<any> {
  // undefined
    return this.client.createAnalyzer(...args).promise()
  }

  async createArchiveRule(...args: any): Promise<any> {
  // undefined
    return this.client.createArchiveRule(...args).promise()
  }

  async deleteAnalyzer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAnalyzer(...args).promise()
  }

  async deleteArchiveRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteArchiveRule(...args).promise()
  }

  async getAccessPreview(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessPreview(...args).promise()
  }

  async getAnalyzedResource(...args: any): Promise<any> {
  // undefined
    return this.client.getAnalyzedResource(...args).promise()
  }

  async getAnalyzer(...args: any): Promise<any> {
  // undefined
    return this.client.getAnalyzer(...args).promise()
  }

  async getArchiveRule(...args: any): Promise<any> {
  // undefined
    return this.client.getArchiveRule(...args).promise()
  }

  async getFinding(...args: any): Promise<any> {
  // undefined
    return this.client.getFinding(...args).promise()
  }

  async getGeneratedPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getGeneratedPolicy(...args).promise()
  }

  async listAccessPreviewFindings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccessPreviewFindings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.findings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccessPreviews(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accessPreviews"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccessPreviews(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.accessPreviews ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAnalyzedResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"analyzedResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAnalyzedResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.analyzedResources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAnalyzers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"analyzers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAnalyzers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.analyzers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listArchiveRules(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"archiveRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listArchiveRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.archiveRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFindings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFindings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.findings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPolicyGenerations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"policyGenerations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPolicyGenerations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.policyGenerations ?? [];
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

  async startPolicyGeneration(...args: any): Promise<any> {
  // undefined
    return this.client.startPolicyGeneration(...args).promise()
  }

  async startResourceScan(...args: any): Promise<any> {
  // undefined
    return this.client.startResourceScan(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateArchiveRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateArchiveRule(...args).promise()
  }

  async updateFindings(...args: any): Promise<any> {
  // undefined
    return this.client.updateFindings(...args).promise()
  }

  async validatePolicy(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"findings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.validatePolicy(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.findings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSAccessAnalyzer): ClientType {
    return new AccessAnalyzer(client) as any;
  }
  
  static client(options?: AWSAccessAnalyzer.Types.ClientConfiguration): ClientType {
    return new AccessAnalyzer(new AWSAccessAnalyzer(options)) as any;
  }
}  
