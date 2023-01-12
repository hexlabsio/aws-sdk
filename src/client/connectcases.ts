import { Request, ConnectCases as AWSConnectCases } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSConnectCases> = AWSConnectCases[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSConnectCases> = AWSConnectCases[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSConnectCases[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSConnectCases, Extras> = AWSConnectCases[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSConnectCases> = AWSConnectCases[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ConnectCases {
  private constructor(private readonly client: AWSConnectCases) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cases' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listDomains"] as const;
  
  batchGetField: (params: RawParamsFrom<'batchGetField'>) => Promise<ReturnTypeFrom<'batchGetField'>>  = async params => {
  // undefined
    return this.client.batchGetField(params as any).promise();
  }

  batchPutFieldOptions: (params: RawParamsFrom<'batchPutFieldOptions'>) => Promise<ReturnTypeFrom<'batchPutFieldOptions'>>  = async params => {
  // undefined
    return this.client.batchPutFieldOptions(params as any).promise();
  }

  createCase: (params: RawParamsFrom<'createCase'>) => Promise<ReturnTypeFrom<'createCase'>>  = async params => {
  // undefined
    return this.client.createCase(params as any).promise();
  }

  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  createField: (params: RawParamsFrom<'createField'>) => Promise<ReturnTypeFrom<'createField'>>  = async params => {
  // undefined
    return this.client.createField(params as any).promise();
  }

  createLayout: (params: RawParamsFrom<'createLayout'>) => Promise<ReturnTypeFrom<'createLayout'>>  = async params => {
  // undefined
    return this.client.createLayout(params as any).promise();
  }

  createRelatedItem: (params: RawParamsFrom<'createRelatedItem'>) => Promise<ReturnTypeFrom<'createRelatedItem'>>  = async params => {
  // undefined
    return this.client.createRelatedItem(params as any).promise();
  }

  createTemplate: (params: RawParamsFrom<'createTemplate'>) => Promise<ReturnTypeFrom<'createTemplate'>>  = async params => {
  // undefined
    return this.client.createTemplate(params as any).promise();
  }

  getCase: (params: RawParamsFrom<'getCase'>) => Promise<ReturnTypeFrom<'getCase'>>  = async params => {
  // {"inputToken":"nextToken","outputToken":"nextToken"}
    return this.client.getCase(params as any).promise();
  }

  getCaseEventConfiguration: (params: RawParamsFrom<'getCaseEventConfiguration'>) => Promise<ReturnTypeFrom<'getCaseEventConfiguration'>>  = async params => {
  // undefined
    return this.client.getCaseEventConfiguration(params as any).promise();
  }

  getDomain: (params: RawParamsFrom<'getDomain'>) => Promise<ReturnTypeFrom<'getDomain'>>  = async params => {
  // undefined
    return this.client.getDomain(params as any).promise();
  }

  getLayout: (params: RawParamsFrom<'getLayout'>) => Promise<ReturnTypeFrom<'getLayout'>>  = async params => {
  // undefined
    return this.client.getLayout(params as any).promise();
  }

  getTemplate: (params: RawParamsFrom<'getTemplate'>) => Promise<ReturnTypeFrom<'getTemplate'>>  = async params => {
  // undefined
    return this.client.getTemplate(params as any).promise();
  }

  listCasesForContact: (params: RawParamsFrom<'listCasesForContact'>) => Promise<ReturnTypeFrom<'listCasesForContact'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listCasesForContact(params as any).promise();
  }

  listDomains: (params: RawParamsFrom<'listDomains'>) => Promise<ReturnTypeFrom<'listDomains'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listDomains(params as any).promise();
  }

  listFieldOptions: (params: RawParamsFrom<'listFieldOptions'>) => Promise<ReturnTypeFrom<'listFieldOptions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listFieldOptions(params as any).promise();
  }

  listFields: (params: RawParamsFrom<'listFields'>) => Promise<ReturnTypeFrom<'listFields'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listFields(params as any).promise();
  }

  listLayouts: (params: RawParamsFrom<'listLayouts'>) => Promise<ReturnTypeFrom<'listLayouts'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listLayouts(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listTemplates: (params: RawParamsFrom<'listTemplates'>) => Promise<ReturnTypeFrom<'listTemplates'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTemplates(params as any).promise();
  }

  putCaseEventConfiguration: (params: RawParamsFrom<'putCaseEventConfiguration'>) => Promise<ReturnTypeFrom<'putCaseEventConfiguration'>>  = async params => {
  // undefined
    return this.client.putCaseEventConfiguration(params as any).promise();
  }

  async searchCases(params: { [K in keyof ParamsFrom<'searchCases', { next?: string, limit?: number }>]: ParamsFrom<'searchCases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchCases'>]-?: ReturnTypeFrom<'searchCases'>[K]}['cases'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"cases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchCases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchCases' })).toString('base64') : undefined;
    const member = (Array.isArray(result.cases ?? []) ? (result.cases ?? []) : [result.cases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchRelatedItems(params: { [K in keyof ParamsFrom<'searchRelatedItems', { next?: string, limit?: number }>]: ParamsFrom<'searchRelatedItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchRelatedItems'>]-?: ReturnTypeFrom<'searchRelatedItems'>[K]}['relatedItems'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"relatedItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchRelatedItems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchRelatedItems' })).toString('base64') : undefined;
    const member = (Array.isArray(result.relatedItems ?? []) ? (result.relatedItems ?? []) : [result.relatedItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCase: (params: RawParamsFrom<'updateCase'>) => Promise<ReturnTypeFrom<'updateCase'>>  = async params => {
  // undefined
    return this.client.updateCase(params as any).promise();
  }

  updateField: (params: RawParamsFrom<'updateField'>) => Promise<ReturnTypeFrom<'updateField'>>  = async params => {
  // undefined
    return this.client.updateField(params as any).promise();
  }

  updateLayout: (params: RawParamsFrom<'updateLayout'>) => Promise<ReturnTypeFrom<'updateLayout'>>  = async params => {
  // undefined
    return this.client.updateLayout(params as any).promise();
  }

  updateTemplate: (params: RawParamsFrom<'updateTemplate'>) => Promise<ReturnTypeFrom<'updateTemplate'>>  = async params => {
  // undefined
    return this.client.updateTemplate(params as any).promise();
  }
  
  static fromClient(client: AWSConnectCases): ConnectCases {
    return new ConnectCases(client) as any;
  }
  
  static client(options?: AWSConnectCases.Types.ClientConfiguration): ConnectCases {
    return new ConnectCases(new AWSConnectCases(options)) as any;
  }
}  
