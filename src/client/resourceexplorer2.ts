import { Request, ResourceExplorer2 as AWSResourceExplorer2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSResourceExplorer2> = AWSResourceExplorer2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSResourceExplorer2> = AWSResourceExplorer2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSResourceExplorer2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSResourceExplorer2, Extras> = AWSResourceExplorer2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSResourceExplorer2> = AWSResourceExplorer2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ResourceExplorer2 {
  private constructor(private readonly client: AWSResourceExplorer2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'resource-explorer-2' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listIndexes","listSupportedResourceTypes","listViews"] as const;
  
  associateDefaultView: (params: RawParamsFrom<'associateDefaultView'>) => Promise<ReturnTypeFrom<'associateDefaultView'>>  = async params => {
  // undefined
    return this.client.associateDefaultView(params as any).promise();
  }

  batchGetView: (params: RawParamsFrom<'batchGetView'>) => Promise<ReturnTypeFrom<'batchGetView'>>  = async params => {
  // undefined
    return this.client.batchGetView(params as any).promise();
  }

  createIndex: (params: RawParamsFrom<'createIndex'>) => Promise<ReturnTypeFrom<'createIndex'>>  = async params => {
  // undefined
    return this.client.createIndex(params as any).promise();
  }

  createView: (params: RawParamsFrom<'createView'>) => Promise<ReturnTypeFrom<'createView'>>  = async params => {
  // undefined
    return this.client.createView(params as any).promise();
  }

  deleteIndex: (params: RawParamsFrom<'deleteIndex'>) => Promise<ReturnTypeFrom<'deleteIndex'>>  = async params => {
  // undefined
    return this.client.deleteIndex(params as any).promise();
  }

  deleteView: (params: RawParamsFrom<'deleteView'>) => Promise<ReturnTypeFrom<'deleteView'>>  = async params => {
  // undefined
    return this.client.deleteView(params as any).promise();
  }

  disassociateDefaultView: (params: RawParamsFrom<'disassociateDefaultView'>) => Promise<ReturnTypeFrom<'disassociateDefaultView'>>  = async params => {
  // undefined
    return this.client.disassociateDefaultView(params as any).promise();
  }

  getDefaultView: (params: RawParamsFrom<'getDefaultView'>) => Promise<ReturnTypeFrom<'getDefaultView'>>  = async params => {
  // undefined
    return this.client.getDefaultView(params as any).promise();
  }

  getIndex: (params: RawParamsFrom<'getIndex'>) => Promise<ReturnTypeFrom<'getIndex'>>  = async params => {
  // undefined
    return this.client.getIndex(params as any).promise();
  }

  getView: (params: RawParamsFrom<'getView'>) => Promise<ReturnTypeFrom<'getView'>>  = async params => {
  // undefined
    return this.client.getView(params as any).promise();
  }

  async listIndexes(params: { [K in keyof ParamsFrom<'listIndexes', { next?: string, limit?: number }>]: ParamsFrom<'listIndexes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIndexes'>]-?: ReturnTypeFrom<'listIndexes'>[K]}['Indexes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Indexes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIndexes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listIndexes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Indexes ?? []) ? (result.Indexes ?? []) : [result.Indexes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSupportedResourceTypes(params: { [K in keyof ParamsFrom<'listSupportedResourceTypes', { next?: string, limit?: number }>]: ParamsFrom<'listSupportedResourceTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSupportedResourceTypes'>]-?: ReturnTypeFrom<'listSupportedResourceTypes'>[K]}['ResourceTypes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceTypes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSupportedResourceTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSupportedResourceTypes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ResourceTypes ?? []) ? (result.ResourceTypes ?? []) : [result.ResourceTypes]) as any;
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

  async listViews(params: { [K in keyof ParamsFrom<'listViews', { next?: string, limit?: number }>]: ParamsFrom<'listViews', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listViews'>]-?: ReturnTypeFrom<'listViews'>[K]}['Views'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Views"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listViews({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listViews' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Views ?? []) ? (result.Views ?? []) : [result.Views]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async search(params: { [K in keyof ParamsFrom<'search', { next?: string, limit?: number }>]: ParamsFrom<'search', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'search'>]-?: ReturnTypeFrom<'search'>[K]}['Resources'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Resources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.search({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'search' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Resources ?? []) ? (result.Resources ?? []) : [result.Resources]) as any;
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

  updateIndexType: (params: RawParamsFrom<'updateIndexType'>) => Promise<ReturnTypeFrom<'updateIndexType'>>  = async params => {
  // undefined
    return this.client.updateIndexType(params as any).promise();
  }

  updateView: (params: RawParamsFrom<'updateView'>) => Promise<ReturnTypeFrom<'updateView'>>  = async params => {
  // undefined
    return this.client.updateView(params as any).promise();
  }
  
  static fromClient(client: AWSResourceExplorer2): ResourceExplorer2 {
    return new ResourceExplorer2(client) as any;
  }
  
  static client(options?: AWSResourceExplorer2.Types.ClientConfiguration): ResourceExplorer2 {
    return new ResourceExplorer2(new AWSResourceExplorer2(options)) as any;
  }
}  
