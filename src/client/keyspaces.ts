import { Request, Keyspaces as AWSKeyspaces } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKeyspaces> = AWSKeyspaces[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKeyspaces> = AWSKeyspaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKeyspaces[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKeyspaces, Extras> = AWSKeyspaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKeyspaces> = AWSKeyspaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Keyspaces {
  private constructor(private readonly client: AWSKeyspaces) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cassandra' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["listKeyspaces"] as const;
  
  createKeyspace: (params: RawParamsFrom<'createKeyspace'>) => Promise<ReturnTypeFrom<'createKeyspace'>>  = async params => {
  // undefined
    return this.client.createKeyspace(params as any).promise();
  }

  createTable: (params: RawParamsFrom<'createTable'>) => Promise<ReturnTypeFrom<'createTable'>>  = async params => {
  // undefined
    return this.client.createTable(params as any).promise();
  }

  deleteKeyspace: (params: RawParamsFrom<'deleteKeyspace'>) => Promise<ReturnTypeFrom<'deleteKeyspace'>>  = async params => {
  // undefined
    return this.client.deleteKeyspace(params as any).promise();
  }

  deleteTable: (params: RawParamsFrom<'deleteTable'>) => Promise<ReturnTypeFrom<'deleteTable'>>  = async params => {
  // undefined
    return this.client.deleteTable(params as any).promise();
  }

  getKeyspace: (params: RawParamsFrom<'getKeyspace'>) => Promise<ReturnTypeFrom<'getKeyspace'>>  = async params => {
  // undefined
    return this.client.getKeyspace(params as any).promise();
  }

  getTable: (params: RawParamsFrom<'getTable'>) => Promise<ReturnTypeFrom<'getTable'>>  = async params => {
  // undefined
    return this.client.getTable(params as any).promise();
  }

  async listKeyspaces(params: { [K in keyof ParamsFrom<'listKeyspaces', { next?: string, limit?: number }>]: ParamsFrom<'listKeyspaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listKeyspaces'>]-?: ReturnTypeFrom<'listKeyspaces'>[K]}['keyspaces'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"keyspaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listKeyspaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listKeyspaces' })).toString('base64') : undefined;
    const member = (Array.isArray(result.keyspaces ?? []) ? (result.keyspaces ?? []) : [result.keyspaces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTables(params: { [K in keyof ParamsFrom<'listTables', { next?: string, limit?: number }>]: ParamsFrom<'listTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['tables'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tables"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTables({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTables' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tables ?? []) ? (result.tables ?? []) : [result.tables]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tags ?? []) ? (result.tags ?? []) : [result.tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  restoreTable: (params: RawParamsFrom<'restoreTable'>) => Promise<ReturnTypeFrom<'restoreTable'>>  = async params => {
  // undefined
    return this.client.restoreTable(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateTable: (params: RawParamsFrom<'updateTable'>) => Promise<ReturnTypeFrom<'updateTable'>>  = async params => {
  // undefined
    return this.client.updateTable(params as any).promise();
  }
  
  static fromClient(client: AWSKeyspaces): Keyspaces {
    return new Keyspaces(client) as any;
  }
  
  static client(options?: AWSKeyspaces.Types.ClientConfiguration): Keyspaces {
    return new Keyspaces(new AWSKeyspaces(options)) as any;
  }
}  
