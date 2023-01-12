import { Request, Wisdom as AWSWisdom } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSWisdom> = AWSWisdom[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSWisdom> = AWSWisdom[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSWisdom[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSWisdom, Extras> = AWSWisdom[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSWisdom> = AWSWisdom[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Wisdom {
  private constructor(private readonly client: AWSWisdom) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'wisdom' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAssistants","listKnowledgeBases"] as const;
  
  createAssistant: (params: RawParamsFrom<'createAssistant'>) => Promise<ReturnTypeFrom<'createAssistant'>>  = async params => {
  // undefined
    return this.client.createAssistant(params as any).promise();
  }

  createAssistantAssociation: (params: RawParamsFrom<'createAssistantAssociation'>) => Promise<ReturnTypeFrom<'createAssistantAssociation'>>  = async params => {
  // undefined
    return this.client.createAssistantAssociation(params as any).promise();
  }

  createContent: (params: RawParamsFrom<'createContent'>) => Promise<ReturnTypeFrom<'createContent'>>  = async params => {
  // undefined
    return this.client.createContent(params as any).promise();
  }

  createKnowledgeBase: (params: RawParamsFrom<'createKnowledgeBase'>) => Promise<ReturnTypeFrom<'createKnowledgeBase'>>  = async params => {
  // undefined
    return this.client.createKnowledgeBase(params as any).promise();
  }

  createSession: (params: RawParamsFrom<'createSession'>) => Promise<ReturnTypeFrom<'createSession'>>  = async params => {
  // undefined
    return this.client.createSession(params as any).promise();
  }

  deleteAssistant: (params: RawParamsFrom<'deleteAssistant'>) => Promise<ReturnTypeFrom<'deleteAssistant'>>  = async params => {
  // undefined
    return this.client.deleteAssistant(params as any).promise();
  }

  deleteAssistantAssociation: (params: RawParamsFrom<'deleteAssistantAssociation'>) => Promise<ReturnTypeFrom<'deleteAssistantAssociation'>>  = async params => {
  // undefined
    return this.client.deleteAssistantAssociation(params as any).promise();
  }

  deleteContent: (params: RawParamsFrom<'deleteContent'>) => Promise<ReturnTypeFrom<'deleteContent'>>  = async params => {
  // undefined
    return this.client.deleteContent(params as any).promise();
  }

  deleteKnowledgeBase: (params: RawParamsFrom<'deleteKnowledgeBase'>) => Promise<ReturnTypeFrom<'deleteKnowledgeBase'>>  = async params => {
  // undefined
    return this.client.deleteKnowledgeBase(params as any).promise();
  }

  getAssistant: (params: RawParamsFrom<'getAssistant'>) => Promise<ReturnTypeFrom<'getAssistant'>>  = async params => {
  // undefined
    return this.client.getAssistant(params as any).promise();
  }

  getAssistantAssociation: (params: RawParamsFrom<'getAssistantAssociation'>) => Promise<ReturnTypeFrom<'getAssistantAssociation'>>  = async params => {
  // undefined
    return this.client.getAssistantAssociation(params as any).promise();
  }

  getContent: (params: RawParamsFrom<'getContent'>) => Promise<ReturnTypeFrom<'getContent'>>  = async params => {
  // undefined
    return this.client.getContent(params as any).promise();
  }

  getContentSummary: (params: RawParamsFrom<'getContentSummary'>) => Promise<ReturnTypeFrom<'getContentSummary'>>  = async params => {
  // undefined
    return this.client.getContentSummary(params as any).promise();
  }

  getKnowledgeBase: (params: RawParamsFrom<'getKnowledgeBase'>) => Promise<ReturnTypeFrom<'getKnowledgeBase'>>  = async params => {
  // undefined
    return this.client.getKnowledgeBase(params as any).promise();
  }

  getRecommendations: (params: RawParamsFrom<'getRecommendations'>) => Promise<ReturnTypeFrom<'getRecommendations'>>  = async params => {
  // undefined
    return this.client.getRecommendations(params as any).promise();
  }

  getSession: (params: RawParamsFrom<'getSession'>) => Promise<ReturnTypeFrom<'getSession'>>  = async params => {
  // undefined
    return this.client.getSession(params as any).promise();
  }

  async listAssistantAssociations(params: { [K in keyof ParamsFrom<'listAssistantAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listAssistantAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssistantAssociations'>]-?: ReturnTypeFrom<'listAssistantAssociations'>[K]}['assistantAssociationSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assistantAssociationSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssistantAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAssistantAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assistantAssociationSummaries ?? []) ? (result.assistantAssociationSummaries ?? []) : [result.assistantAssociationSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssistants(params: { [K in keyof ParamsFrom<'listAssistants', { next?: string, limit?: number }>]: ParamsFrom<'listAssistants', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssistants'>]-?: ReturnTypeFrom<'listAssistants'>[K]}['assistantSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assistantSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssistants({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAssistants' })).toString('base64') : undefined;
    const member = (Array.isArray(result.assistantSummaries ?? []) ? (result.assistantSummaries ?? []) : [result.assistantSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContents(params: { [K in keyof ParamsFrom<'listContents', { next?: string, limit?: number }>]: ParamsFrom<'listContents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContents'>]-?: ReturnTypeFrom<'listContents'>[K]}['contentSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"contentSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listContents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listContents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.contentSummaries ?? []) ? (result.contentSummaries ?? []) : [result.contentSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKnowledgeBases(params: { [K in keyof ParamsFrom<'listKnowledgeBases', { next?: string, limit?: number }>]: ParamsFrom<'listKnowledgeBases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listKnowledgeBases'>]-?: ReturnTypeFrom<'listKnowledgeBases'>[K]}['knowledgeBaseSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"knowledgeBaseSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listKnowledgeBases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listKnowledgeBases' })).toString('base64') : undefined;
    const member = (Array.isArray(result.knowledgeBaseSummaries ?? []) ? (result.knowledgeBaseSummaries ?? []) : [result.knowledgeBaseSummaries]) as any;
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

  notifyRecommendationsReceived: (params: RawParamsFrom<'notifyRecommendationsReceived'>) => Promise<ReturnTypeFrom<'notifyRecommendationsReceived'>>  = async params => {
  // undefined
    return this.client.notifyRecommendationsReceived(params as any).promise();
  }

  async queryAssistant(params: { [K in keyof ParamsFrom<'queryAssistant', { next?: string, limit?: number }>]: ParamsFrom<'queryAssistant', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'queryAssistant'>]-?: ReturnTypeFrom<'queryAssistant'>[K]}['results'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.queryAssistant({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'queryAssistant' })).toString('base64') : undefined;
    const member = (Array.isArray(result.results ?? []) ? (result.results ?? []) : [result.results]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  removeKnowledgeBaseTemplateUri: (params: RawParamsFrom<'removeKnowledgeBaseTemplateUri'>) => Promise<ReturnTypeFrom<'removeKnowledgeBaseTemplateUri'>>  = async params => {
  // undefined
    return this.client.removeKnowledgeBaseTemplateUri(params as any).promise();
  }

  async searchContent(params: { [K in keyof ParamsFrom<'searchContent', { next?: string, limit?: number }>]: ParamsFrom<'searchContent', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchContent'>]-?: ReturnTypeFrom<'searchContent'>[K]}['contentSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"contentSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchContent({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchContent' })).toString('base64') : undefined;
    const member = (Array.isArray(result.contentSummaries ?? []) ? (result.contentSummaries ?? []) : [result.contentSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchSessions(params: { [K in keyof ParamsFrom<'searchSessions', { next?: string, limit?: number }>]: ParamsFrom<'searchSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchSessions'>]-?: ReturnTypeFrom<'searchSessions'>[K]}['sessionSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"sessionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchSessions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchSessions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.sessionSummaries ?? []) ? (result.sessionSummaries ?? []) : [result.sessionSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startContentUpload: (params: RawParamsFrom<'startContentUpload'>) => Promise<ReturnTypeFrom<'startContentUpload'>>  = async params => {
  // undefined
    return this.client.startContentUpload(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateContent: (params: RawParamsFrom<'updateContent'>) => Promise<ReturnTypeFrom<'updateContent'>>  = async params => {
  // undefined
    return this.client.updateContent(params as any).promise();
  }

  updateKnowledgeBaseTemplateUri: (params: RawParamsFrom<'updateKnowledgeBaseTemplateUri'>) => Promise<ReturnTypeFrom<'updateKnowledgeBaseTemplateUri'>>  = async params => {
  // undefined
    return this.client.updateKnowledgeBaseTemplateUri(params as any).promise();
  }
  
  static fromClient(client: AWSWisdom): Wisdom {
    return new Wisdom(client) as any;
  }
  
  static client(options?: AWSWisdom.Types.ClientConfiguration): Wisdom {
    return new Wisdom(new AWSWisdom(options)) as any;
  }
}  
