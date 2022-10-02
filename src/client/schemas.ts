import { Request, Schemas as AWSSchemas } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSchemas> = AWSSchemas[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSchemas> = AWSSchemas[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSchemas[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSchemas, Extras> = AWSSchemas[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'schemas';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly ["listDiscoverers","listRegistries"];
    
  createDiscoverer: FunctionTypeFrom<'createDiscoverer'>;

  createRegistry: FunctionTypeFrom<'createRegistry'>;

  createSchema: FunctionTypeFrom<'createSchema'>;

  deleteDiscoverer: FunctionTypeFrom<'deleteDiscoverer'>;

  deleteRegistry: FunctionTypeFrom<'deleteRegistry'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteSchema: FunctionTypeFrom<'deleteSchema'>;

  deleteSchemaVersion: FunctionTypeFrom<'deleteSchemaVersion'>;

  describeCodeBinding: FunctionTypeFrom<'describeCodeBinding'>;

  describeDiscoverer: FunctionTypeFrom<'describeDiscoverer'>;

  describeRegistry: FunctionTypeFrom<'describeRegistry'>;

  describeSchema: FunctionTypeFrom<'describeSchema'>;

  exportSchema: FunctionTypeFrom<'exportSchema'>;

  getCodeBindingSource: FunctionTypeFrom<'getCodeBindingSource'>;

  getDiscoveredSchema: FunctionTypeFrom<'getDiscoveredSchema'>;

  getResourcePolicy: FunctionTypeFrom<'getResourcePolicy'>;

  listDiscoverers(params: { [K in keyof Omit<ParamsFrom<'listDiscoverers', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listDiscoverers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDiscoverers'>]-?: ReturnTypeFrom<'listDiscoverers'>[K]}['Discoverers'] }>
  listDiscoverers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDiscoverers'>]-?: ReturnTypeFrom<'listDiscoverers'>[K]}['Discoverers'] }>;

  listRegistries(params: { [K in keyof Omit<ParamsFrom<'listRegistries', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listRegistries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRegistries'>]-?: ReturnTypeFrom<'listRegistries'>[K]}['Registries'] }>
  listRegistries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRegistries'>]-?: ReturnTypeFrom<'listRegistries'>[K]}['Registries'] }>;

  listSchemaVersions(params: { [K in keyof Omit<ParamsFrom<'listSchemaVersions', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listSchemaVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchemaVersions'>]-?: ReturnTypeFrom<'listSchemaVersions'>[K]}['SchemaVersions'] }>
  ;

  listSchemas(params: { [K in keyof Omit<ParamsFrom<'listSchemas', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['Schemas'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putCodeBinding: FunctionTypeFrom<'putCodeBinding'>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  searchSchemas(params: { [K in keyof Omit<ParamsFrom<'searchSchemas', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'searchSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchSchemas'>]-?: ReturnTypeFrom<'searchSchemas'>[K]}['Schemas'] }>
  ;

  startDiscoverer: FunctionTypeFrom<'startDiscoverer'>;

  stopDiscoverer: FunctionTypeFrom<'stopDiscoverer'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDiscoverer: FunctionTypeFrom<'updateDiscoverer'>;

  updateRegistry: FunctionTypeFrom<'updateRegistry'>;

  updateSchema: FunctionTypeFrom<'updateSchema'>
}
 
export class Schemas implements ClientType {
  private constructor(private readonly client: AWSSchemas) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'schemas';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = ["listDiscoverers","listRegistries"] as const;
  
  async createDiscoverer(...args: any): Promise<any> {
  // undefined
    return this.client.createDiscoverer(...args).promise()
  }

  async createRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.createRegistry(...args).promise()
  }

  async createSchema(...args: any): Promise<any> {
  // undefined
    return this.client.createSchema(...args).promise()
  }

  async deleteDiscoverer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDiscoverer(...args).promise()
  }

  async deleteRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRegistry(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteSchema(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchema(...args).promise()
  }

  async deleteSchemaVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSchemaVersion(...args).promise()
  }

  async describeCodeBinding(...args: any): Promise<any> {
  // undefined
    return this.client.describeCodeBinding(...args).promise()
  }

  async describeDiscoverer(...args: any): Promise<any> {
  // undefined
    return this.client.describeDiscoverer(...args).promise()
  }

  async describeRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.describeRegistry(...args).promise()
  }

  async describeSchema(...args: any): Promise<any> {
  // undefined
    return this.client.describeSchema(...args).promise()
  }

  async exportSchema(...args: any): Promise<any> {
  // undefined
    return this.client.exportSchema(...args).promise()
  }

  async getCodeBindingSource(...args: any): Promise<any> {
  // undefined
    return this.client.getCodeBindingSource(...args).promise()
  }

  async getDiscoveredSchema(...args: any): Promise<any> {
  // undefined
    return this.client.getDiscoveredSchema(...args).promise()
  }

  async getResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResourcePolicy(...args).promise()
  }

  async listDiscoverers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Discoverers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listDiscoverers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Discoverers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRegistries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Registries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listRegistries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Registries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemaVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"SchemaVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listSchemaVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.SchemaVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemas(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Schemas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listSchemas(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Schemas ?? [];
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

  async putCodeBinding(...args: any): Promise<any> {
  // undefined
    return this.client.putCodeBinding(...args).promise()
  }

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async searchSchemas(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Schemas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.searchSchemas(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Schemas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startDiscoverer(...args: any): Promise<any> {
  // undefined
    return this.client.startDiscoverer(...args).promise()
  }

  async stopDiscoverer(...args: any): Promise<any> {
  // undefined
    return this.client.stopDiscoverer(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDiscoverer(...args: any): Promise<any> {
  // undefined
    return this.client.updateDiscoverer(...args).promise()
  }

  async updateRegistry(...args: any): Promise<any> {
  // undefined
    return this.client.updateRegistry(...args).promise()
  }

  async updateSchema(...args: any): Promise<any> {
  // undefined
    return this.client.updateSchema(...args).promise()
  }
  
  static fromClient(client: AWSSchemas): ClientType {
    return new Schemas(client) as any;
  }
  
  static client(options?: AWSSchemas.Types.ClientConfiguration): ClientType {
    return new Schemas(new AWSSchemas(options)) as any;
  }
}  
