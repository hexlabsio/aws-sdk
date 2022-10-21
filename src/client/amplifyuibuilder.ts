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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAmplifyUIBuilder> = AWSAmplifyUIBuilder[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AmplifyUIBuilder {
  private constructor(private readonly client: AWSAmplifyUIBuilder) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'amplifyuibuilder' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  createComponent: (params: RawParamsFrom<'createComponent'>) => Promise<ReturnTypeFrom<'createComponent'>>  = async params => {
  // undefined
    return this.client.createComponent(params as any).promise();
  }

  createForm: (params: RawParamsFrom<'createForm'>) => Promise<ReturnTypeFrom<'createForm'>>  = async params => {
  // undefined
    return this.client.createForm(params as any).promise();
  }

  createTheme: (params: RawParamsFrom<'createTheme'>) => Promise<ReturnTypeFrom<'createTheme'>>  = async params => {
  // undefined
    return this.client.createTheme(params as any).promise();
  }

  deleteComponent: (params: RawParamsFrom<'deleteComponent'>) => Promise<ReturnTypeFrom<'deleteComponent'>>  = async params => {
  // undefined
    return this.client.deleteComponent(params as any).promise();
  }

  deleteForm: (params: RawParamsFrom<'deleteForm'>) => Promise<ReturnTypeFrom<'deleteForm'>>  = async params => {
  // undefined
    return this.client.deleteForm(params as any).promise();
  }

  deleteTheme: (params: RawParamsFrom<'deleteTheme'>) => Promise<ReturnTypeFrom<'deleteTheme'>>  = async params => {
  // undefined
    return this.client.deleteTheme(params as any).promise();
  }

  exchangeCodeForToken: (params: RawParamsFrom<'exchangeCodeForToken'>) => Promise<ReturnTypeFrom<'exchangeCodeForToken'>>  = async params => {
  // undefined
    return this.client.exchangeCodeForToken(params as any).promise();
  }

  async exportComponents(params: { [K in keyof ParamsFrom<'exportComponents', { next?: string }>]: ParamsFrom<'exportComponents', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'exportComponents'>]-?: ReturnTypeFrom<'exportComponents'>[K]}['entities'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"entities"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.exportComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'exportComponents' })).toString('base64');
    const member = (Array.isArray(result.entities ?? []) ? (result.entities ?? []) : [result.entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async exportForms(params: { [K in keyof ParamsFrom<'exportForms', { next?: string }>]: ParamsFrom<'exportForms', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'exportForms'>]-?: ReturnTypeFrom<'exportForms'>[K]}['entities'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"entities"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.exportForms({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'exportForms' })).toString('base64');
    const member = (Array.isArray(result.entities ?? []) ? (result.entities ?? []) : [result.entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async exportThemes(params: { [K in keyof ParamsFrom<'exportThemes', { next?: string }>]: ParamsFrom<'exportThemes', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'exportThemes'>]-?: ReturnTypeFrom<'exportThemes'>[K]}['entities'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"entities"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.exportThemes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'exportThemes' })).toString('base64');
    const member = (Array.isArray(result.entities ?? []) ? (result.entities ?? []) : [result.entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getComponent: (params: RawParamsFrom<'getComponent'>) => Promise<ReturnTypeFrom<'getComponent'>>  = async params => {
  // undefined
    return this.client.getComponent(params as any).promise();
  }

  getForm: (params: RawParamsFrom<'getForm'>) => Promise<ReturnTypeFrom<'getForm'>>  = async params => {
  // undefined
    return this.client.getForm(params as any).promise();
  }

  getMetadata: (params: RawParamsFrom<'getMetadata'>) => Promise<ReturnTypeFrom<'getMetadata'>>  = async params => {
  // undefined
    return this.client.getMetadata(params as any).promise();
  }

  getTheme: (params: RawParamsFrom<'getTheme'>) => Promise<ReturnTypeFrom<'getTheme'>>  = async params => {
  // undefined
    return this.client.getTheme(params as any).promise();
  }

  async listComponents(params: { [K in keyof ParamsFrom<'listComponents', { next?: string, limit?: number }>]: ParamsFrom<'listComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComponents'>]-?: ReturnTypeFrom<'listComponents'>[K]}['entities'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listComponents' })).toString('base64');
    const member = (Array.isArray(result.entities ?? []) ? (result.entities ?? []) : [result.entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listForms(params: { [K in keyof ParamsFrom<'listForms', { next?: string, limit?: number }>]: ParamsFrom<'listForms', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listForms'>]-?: ReturnTypeFrom<'listForms'>[K]}['entities'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listForms({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listForms' })).toString('base64');
    const member = (Array.isArray(result.entities ?? []) ? (result.entities ?? []) : [result.entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listThemes(params: { [K in keyof ParamsFrom<'listThemes', { next?: string, limit?: number }>]: ParamsFrom<'listThemes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listThemes'>]-?: ReturnTypeFrom<'listThemes'>[K]}['entities'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"entities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listThemes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listThemes' })).toString('base64');
    const member = (Array.isArray(result.entities ?? []) ? (result.entities ?? []) : [result.entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putMetadataFlag: (params: RawParamsFrom<'putMetadataFlag'>) => Promise<ReturnTypeFrom<'putMetadataFlag'>>  = async params => {
  // undefined
    return this.client.putMetadataFlag(params as any).promise();
  }

  refreshToken: (params: RawParamsFrom<'refreshToken'>) => Promise<ReturnTypeFrom<'refreshToken'>>  = async params => {
  // undefined
    return this.client.refreshToken(params as any).promise();
  }

  updateComponent: (params: RawParamsFrom<'updateComponent'>) => Promise<ReturnTypeFrom<'updateComponent'>>  = async params => {
  // undefined
    return this.client.updateComponent(params as any).promise();
  }

  updateForm: (params: RawParamsFrom<'updateForm'>) => Promise<ReturnTypeFrom<'updateForm'>>  = async params => {
  // undefined
    return this.client.updateForm(params as any).promise();
  }

  updateTheme: (params: RawParamsFrom<'updateTheme'>) => Promise<ReturnTypeFrom<'updateTheme'>>  = async params => {
  // undefined
    return this.client.updateTheme(params as any).promise();
  }
  
  static fromClient(client: AWSAmplifyUIBuilder): AmplifyUIBuilder {
    return new AmplifyUIBuilder(client) as any;
  }
  
  static client(options?: AWSAmplifyUIBuilder.Types.ClientConfiguration): AmplifyUIBuilder {
    return new AmplifyUIBuilder(new AWSAmplifyUIBuilder(options)) as any;
  }
}  
