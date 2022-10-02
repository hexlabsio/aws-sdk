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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cassandra';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["listKeyspaces"];
    
  createKeyspace: FunctionTypeFrom<'createKeyspace'>;

  createTable: FunctionTypeFrom<'createTable'>;

  deleteKeyspace: FunctionTypeFrom<'deleteKeyspace'>;

  deleteTable: FunctionTypeFrom<'deleteTable'>;

  getKeyspace: FunctionTypeFrom<'getKeyspace'>;

  getTable: FunctionTypeFrom<'getTable'>;

  listKeyspaces(params: { [K in keyof Omit<ParamsFrom<'listKeyspaces', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listKeyspaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKeyspaces'>]-?: ReturnTypeFrom<'listKeyspaces'>[K]}['keyspaces'] }>
  listKeyspaces(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listKeyspaces'>]-?: ReturnTypeFrom<'listKeyspaces'>[K]}['keyspaces'] }>;

  listTables(params: { [K in keyof Omit<ParamsFrom<'listTables', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['tables'] }>
  ;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'] }>
  ;

  restoreTable: FunctionTypeFrom<'restoreTable'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateTable: FunctionTypeFrom<'updateTable'>
}
 
export class Keyspaces implements ClientType {
  private constructor(private readonly client: AWSKeyspaces) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cassandra';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["listKeyspaces"] as const;
  
  async createKeyspace(...args: any): Promise<any> {
  // undefined
    return this.client.createKeyspace(...args).promise()
  }

  async createTable(...args: any): Promise<any> {
  // undefined
    return this.client.createTable(...args).promise()
  }

  async deleteKeyspace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteKeyspace(...args).promise()
  }

  async deleteTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTable(...args).promise()
  }

  async getKeyspace(...args: any): Promise<any> {
  // undefined
    return this.client.getKeyspace(...args).promise()
  }

  async getTable(...args: any): Promise<any> {
  // undefined
    return this.client.getTable(...args).promise()
  }

  async listKeyspaces(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"keyspaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listKeyspaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.keyspaces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTables(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tables"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTables(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tables ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async restoreTable(...args: any): Promise<any> {
  // undefined
    return this.client.restoreTable(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateTable(...args: any): Promise<any> {
  // undefined
    return this.client.updateTable(...args).promise()
  }
  
  static fromClient(client: AWSKeyspaces): ClientType {
    return new Keyspaces(client) as any;
  }
  
  static client(options?: AWSKeyspaces.Types.ClientConfiguration): ClientType {
    return new Keyspaces(new AWSKeyspaces(options)) as any;
  }
}  
