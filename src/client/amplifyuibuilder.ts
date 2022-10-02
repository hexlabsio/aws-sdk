import { Request, AmplifyUIBuilder as AWSAmplifyUIBuilder } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAmplifyUIBuilder> = AWSAmplifyUIBuilder[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAmplifyUIBuilder> = AWSAmplifyUIBuilder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAmplifyUIBuilder[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAmplifyUIBuilder, Extras> = AWSAmplifyUIBuilder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'amplifyuibuilder';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  createComponent: FunctionTypeFrom<'createComponent'>;

  createForm: FunctionTypeFrom<'createForm'>;

  createTheme: FunctionTypeFrom<'createTheme'>;

  deleteComponent: FunctionTypeFrom<'deleteComponent'>;

  deleteForm: FunctionTypeFrom<'deleteForm'>;

  deleteTheme: FunctionTypeFrom<'deleteTheme'>;

  exchangeCodeForToken: FunctionTypeFrom<'exchangeCodeForToken'>;

  exportComponents(params: { [K in keyof Omit<ParamsFrom<'exportComponents', { next?: string }>, 'nextToken'>]: ParamsFrom<'exportComponents', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'exportComponents'>]-?: ReturnTypeFrom<'exportComponents'>[K]}['entities'] }>
  ;

  exportForms(params: { [K in keyof Omit<ParamsFrom<'exportForms', { next?: string }>, 'nextToken'>]: ParamsFrom<'exportForms', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'exportForms'>]-?: ReturnTypeFrom<'exportForms'>[K]}['entities'] }>
  ;

  exportThemes(params: { [K in keyof Omit<ParamsFrom<'exportThemes', { next?: string }>, 'nextToken'>]: ParamsFrom<'exportThemes', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'exportThemes'>]-?: ReturnTypeFrom<'exportThemes'>[K]}['entities'] }>
  ;

  getComponent: FunctionTypeFrom<'getComponent'>;

  getForm: FunctionTypeFrom<'getForm'>;

  getMetadata: FunctionTypeFrom<'getMetadata'>;

  getTheme: FunctionTypeFrom<'getTheme'>;

  listComponents(params: { [K in keyof Omit<ParamsFrom<'listComponents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['entities'] }>
  ;

  listForms(params: { [K in keyof Omit<ParamsFrom<'listForms', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listForms', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listForms'>]-?: ReturnTypeFrom<'listForms'>[K]}['entities'] }>
  ;

  listThemes(params: { [K in keyof Omit<ParamsFrom<'listThemes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listThemes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listThemes'>]-?: ReturnTypeFrom<'listThemes'>[K]}['entities'] }>
  ;

  putMetadataFlag: FunctionTypeFrom<'putMetadataFlag'>;

  refreshToken: FunctionTypeFrom<'refreshToken'>;

  updateComponent: FunctionTypeFrom<'updateComponent'>;

  updateForm: FunctionTypeFrom<'updateForm'>;

  updateTheme: FunctionTypeFrom<'updateTheme'>
}
 
export class AmplifyUIBuilder implements ClientType {
  private constructor(private readonly client: AWSAmplifyUIBuilder) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'amplifyuibuilder';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async createComponent(...args: any): Promise<any> {
  // undefined
    return this.client.createComponent(...args).promise()
  }

  async createForm(...args: any): Promise<any> {
  // undefined
    return this.client.createForm(...args).promise()
  }

  async createTheme(...args: any): Promise<any> {
  // undefined
    return this.client.createTheme(...args).promise()
  }

  async deleteComponent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteComponent(...args).promise()
  }

  async deleteForm(...args: any): Promise<any> {
  // undefined
    return this.client.deleteForm(...args).promise()
  }

  async deleteTheme(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTheme(...args).promise()
  }

  async exchangeCodeForToken(...args: any): Promise<any> {
  // undefined
    return this.client.exchangeCodeForToken(...args).promise()
  }

  async exportComponents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.exportComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async exportForms(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.exportForms(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async exportThemes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.exportThemes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getComponent(...args: any): Promise<any> {
  // undefined
    return this.client.getComponent(...args).promise()
  }

  async getForm(...args: any): Promise<any> {
  // undefined
    return this.client.getForm(...args).promise()
  }

  async getMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getMetadata(...args).promise()
  }

  async getTheme(...args: any): Promise<any> {
  // undefined
    return this.client.getTheme(...args).promise()
  }

  async listComponents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listForms(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listForms(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThemes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThemes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putMetadataFlag(...args: any): Promise<any> {
  // undefined
    return this.client.putMetadataFlag(...args).promise()
  }

  async refreshToken(...args: any): Promise<any> {
  // undefined
    return this.client.refreshToken(...args).promise()
  }

  async updateComponent(...args: any): Promise<any> {
  // undefined
    return this.client.updateComponent(...args).promise()
  }

  async updateForm(...args: any): Promise<any> {
  // undefined
    return this.client.updateForm(...args).promise()
  }

  async updateTheme(...args: any): Promise<any> {
  // undefined
    return this.client.updateTheme(...args).promise()
  }
  
  static fromClient(client: AWSAmplifyUIBuilder): ClientType {
    return new AmplifyUIBuilder(client) as any;
  }
  
  static client(options?: AWSAmplifyUIBuilder.Types.ClientConfiguration): ClientType {
    return new AmplifyUIBuilder(new AWSAmplifyUIBuilder(options)) as any;
  }
}  
