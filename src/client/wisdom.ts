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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'wisdom';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listAssistants","listKnowledgeBases"];
    
  createAssistant: FunctionTypeFrom<'createAssistant'>;

  createAssistantAssociation: FunctionTypeFrom<'createAssistantAssociation'>;

  createContent: FunctionTypeFrom<'createContent'>;

  createKnowledgeBase: FunctionTypeFrom<'createKnowledgeBase'>;

  createSession: FunctionTypeFrom<'createSession'>;

  deleteAssistant: FunctionTypeFrom<'deleteAssistant'>;

  deleteAssistantAssociation: FunctionTypeFrom<'deleteAssistantAssociation'>;

  deleteContent: FunctionTypeFrom<'deleteContent'>;

  deleteKnowledgeBase: FunctionTypeFrom<'deleteKnowledgeBase'>;

  getAssistant: FunctionTypeFrom<'getAssistant'>;

  getAssistantAssociation: FunctionTypeFrom<'getAssistantAssociation'>;

  getContent: FunctionTypeFrom<'getContent'>;

  getContentSummary: FunctionTypeFrom<'getContentSummary'>;

  getKnowledgeBase: FunctionTypeFrom<'getKnowledgeBase'>;

  getRecommendations: FunctionTypeFrom<'getRecommendations'>;

  getSession: FunctionTypeFrom<'getSession'>;

  listAssistantAssociations(params: { [K in keyof Omit<ParamsFrom<'listAssistantAssociations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAssistantAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssistantAssociations'>]-?: ReturnTypeFrom<'listAssistantAssociations'>[K]}['assistantAssociationSummaries'] }>
  ;

  listAssistants(params: { [K in keyof Omit<ParamsFrom<'listAssistants', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAssistants', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssistants'>]-?: ReturnTypeFrom<'listAssistants'>[K]}['assistantSummaries'] }>
  listAssistants(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssistants'>]-?: ReturnTypeFrom<'listAssistants'>[K]}['assistantSummaries'] }>;

  listContents(params: { [K in keyof Omit<ParamsFrom<'listContents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listContents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContents'>]-?: ReturnTypeFrom<'listContents'>[K]}['contentSummaries'] }>
  ;

  listKnowledgeBases(params: { [K in keyof Omit<ParamsFrom<'listKnowledgeBases', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listKnowledgeBases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKnowledgeBases'>]-?: ReturnTypeFrom<'listKnowledgeBases'>[K]}['knowledgeBaseSummaries'] }>
  listKnowledgeBases(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKnowledgeBases'>]-?: ReturnTypeFrom<'listKnowledgeBases'>[K]}['knowledgeBaseSummaries'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  notifyRecommendationsReceived: FunctionTypeFrom<'notifyRecommendationsReceived'>;

  putFeedback: FunctionTypeFrom<'putFeedback'>;

  queryAssistant(params: { [K in keyof Omit<ParamsFrom<'queryAssistant', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'queryAssistant', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'queryAssistant'>]-?: ReturnTypeFrom<'queryAssistant'>[K]}['results'] }>
  ;

  removeKnowledgeBaseTemplateUri: FunctionTypeFrom<'removeKnowledgeBaseTemplateUri'>;

  searchContent(params: { [K in keyof Omit<ParamsFrom<'searchContent', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchContent', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchContent'>]-?: ReturnTypeFrom<'searchContent'>[K]}['contentSummaries'] }>
  ;

  searchSessions(params: { [K in keyof Omit<ParamsFrom<'searchSessions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchSessions'>]-?: ReturnTypeFrom<'searchSessions'>[K]}['sessionSummaries'] }>
  ;

  startContentUpload: FunctionTypeFrom<'startContentUpload'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateContent: FunctionTypeFrom<'updateContent'>;

  updateKnowledgeBaseTemplateUri: FunctionTypeFrom<'updateKnowledgeBaseTemplateUri'>
}
 
export class Wisdom implements ClientType {
  private constructor(private readonly client: AWSWisdom) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'wisdom';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listAssistants","listKnowledgeBases"] as const;
  
  async createAssistant(...args: any): Promise<any> {
  // undefined
    return this.client.createAssistant(...args).promise()
  }

  async createAssistantAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createAssistantAssociation(...args).promise()
  }

  async createContent(...args: any): Promise<any> {
  // undefined
    return this.client.createContent(...args).promise()
  }

  async createKnowledgeBase(...args: any): Promise<any> {
  // undefined
    return this.client.createKnowledgeBase(...args).promise()
  }

  async createSession(...args: any): Promise<any> {
  // undefined
    return this.client.createSession(...args).promise()
  }

  async deleteAssistant(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssistant(...args).promise()
  }

  async deleteAssistantAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssistantAssociation(...args).promise()
  }

  async deleteContent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteContent(...args).promise()
  }

  async deleteKnowledgeBase(...args: any): Promise<any> {
  // undefined
    return this.client.deleteKnowledgeBase(...args).promise()
  }

  async getAssistant(...args: any): Promise<any> {
  // undefined
    return this.client.getAssistant(...args).promise()
  }

  async getAssistantAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.getAssistantAssociation(...args).promise()
  }

  async getContent(...args: any): Promise<any> {
  // undefined
    return this.client.getContent(...args).promise()
  }

  async getContentSummary(...args: any): Promise<any> {
  // undefined
    return this.client.getContentSummary(...args).promise()
  }

  async getKnowledgeBase(...args: any): Promise<any> {
  // undefined
    return this.client.getKnowledgeBase(...args).promise()
  }

  async getRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.getRecommendations(...args).promise()
  }

  async getSession(...args: any): Promise<any> {
  // undefined
    return this.client.getSession(...args).promise()
  }

  async listAssistantAssociations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assistantAssociationSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssistantAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assistantAssociationSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssistants(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"assistantSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAssistants(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.assistantSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"contentSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listContents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.contentSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listKnowledgeBases(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"knowledgeBaseSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listKnowledgeBases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.knowledgeBaseSummaries ?? [];
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

  async notifyRecommendationsReceived(...args: any): Promise<any> {
  // undefined
    return this.client.notifyRecommendationsReceived(...args).promise()
  }

  async putFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.putFeedback(...args).promise()
  }

  async queryAssistant(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.queryAssistant(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async removeKnowledgeBaseTemplateUri(...args: any): Promise<any> {
  // undefined
    return this.client.removeKnowledgeBaseTemplateUri(...args).promise()
  }

  async searchContent(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"contentSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchContent(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.contentSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchSessions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"sessionSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchSessions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.sessionSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startContentUpload(...args: any): Promise<any> {
  // undefined
    return this.client.startContentUpload(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateContent(...args: any): Promise<any> {
  // undefined
    return this.client.updateContent(...args).promise()
  }

  async updateKnowledgeBaseTemplateUri(...args: any): Promise<any> {
  // undefined
    return this.client.updateKnowledgeBaseTemplateUri(...args).promise()
  }
  
  static fromClient(client: AWSWisdom): ClientType {
    return new Wisdom(client) as any;
  }
  
  static client(options?: AWSWisdom.Types.ClientConfiguration): ClientType {
    return new Wisdom(new AWSWisdom(options)) as any;
  }
}  
