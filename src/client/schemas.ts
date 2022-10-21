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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSchemas> = AWSSchemas[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Schemas {
  private constructor(private readonly client: AWSSchemas) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'schemas' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = ["listDiscoverers","listRegistries"] as const;
  
  createDiscoverer: (params: RawParamsFrom<'createDiscoverer'>) => Promise<ReturnTypeFrom<'createDiscoverer'>>  = async params => {
  // undefined
    return this.client.createDiscoverer(params as any).promise();
  }

  createRegistry: (params: RawParamsFrom<'createRegistry'>) => Promise<ReturnTypeFrom<'createRegistry'>>  = async params => {
  // undefined
    return this.client.createRegistry(params as any).promise();
  }

  createSchema: (params: RawParamsFrom<'createSchema'>) => Promise<ReturnTypeFrom<'createSchema'>>  = async params => {
  // undefined
    return this.client.createSchema(params as any).promise();
  }

  deleteDiscoverer: (params: RawParamsFrom<'deleteDiscoverer'>) => Promise<ReturnTypeFrom<'deleteDiscoverer'>>  = async params => {
  // undefined
    return this.client.deleteDiscoverer(params as any).promise();
  }

  deleteRegistry: (params: RawParamsFrom<'deleteRegistry'>) => Promise<ReturnTypeFrom<'deleteRegistry'>>  = async params => {
  // undefined
    return this.client.deleteRegistry(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteSchema: (params: RawParamsFrom<'deleteSchema'>) => Promise<ReturnTypeFrom<'deleteSchema'>>  = async params => {
  // undefined
    return this.client.deleteSchema(params as any).promise();
  }

  deleteSchemaVersion: (params: RawParamsFrom<'deleteSchemaVersion'>) => Promise<ReturnTypeFrom<'deleteSchemaVersion'>>  = async params => {
  // undefined
    return this.client.deleteSchemaVersion(params as any).promise();
  }

  describeCodeBinding: (params: RawParamsFrom<'describeCodeBinding'>) => Promise<ReturnTypeFrom<'describeCodeBinding'>>  = async params => {
  // undefined
    return this.client.describeCodeBinding(params as any).promise();
  }

  describeDiscoverer: (params: RawParamsFrom<'describeDiscoverer'>) => Promise<ReturnTypeFrom<'describeDiscoverer'>>  = async params => {
  // undefined
    return this.client.describeDiscoverer(params as any).promise();
  }

  describeRegistry: (params: RawParamsFrom<'describeRegistry'>) => Promise<ReturnTypeFrom<'describeRegistry'>>  = async params => {
  // undefined
    return this.client.describeRegistry(params as any).promise();
  }

  describeSchema: (params: RawParamsFrom<'describeSchema'>) => Promise<ReturnTypeFrom<'describeSchema'>>  = async params => {
  // undefined
    return this.client.describeSchema(params as any).promise();
  }

  exportSchema: (params: RawParamsFrom<'exportSchema'>) => Promise<ReturnTypeFrom<'exportSchema'>>  = async params => {
  // undefined
    return this.client.exportSchema(params as any).promise();
  }

  getCodeBindingSource: (params: RawParamsFrom<'getCodeBindingSource'>) => Promise<ReturnTypeFrom<'getCodeBindingSource'>>  = async params => {
  // undefined
    return this.client.getCodeBindingSource(params as any).promise();
  }

  getDiscoveredSchema: (params: RawParamsFrom<'getDiscoveredSchema'>) => Promise<ReturnTypeFrom<'getDiscoveredSchema'>>  = async params => {
  // undefined
    return this.client.getDiscoveredSchema(params as any).promise();
  }

  getResourcePolicy: (params: RawParamsFrom<'getResourcePolicy'>) => Promise<ReturnTypeFrom<'getResourcePolicy'>>  = async params => {
  // undefined
    return this.client.getResourcePolicy(params as any).promise();
  }

  async listDiscoverers(params: { [K in keyof ParamsFrom<'listDiscoverers', { next?: string, limit?: number }>]: ParamsFrom<'listDiscoverers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDiscoverers'>]-?: ReturnTypeFrom<'listDiscoverers'>[K]}['Discoverers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Discoverers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listDiscoverers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDiscoverers' })).toString('base64');
    const member = (Array.isArray(result.Discoverers ?? []) ? (result.Discoverers ?? []) : [result.Discoverers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRegistries(params: { [K in keyof ParamsFrom<'listRegistries', { next?: string, limit?: number }>]: ParamsFrom<'listRegistries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRegistries'>]-?: ReturnTypeFrom<'listRegistries'>[K]}['Registries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Registries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listRegistries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRegistries' })).toString('base64');
    const member = (Array.isArray(result.Registries ?? []) ? (result.Registries ?? []) : [result.Registries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemaVersions(params: { [K in keyof ParamsFrom<'listSchemaVersions', { next?: string, limit?: number }>]: ParamsFrom<'listSchemaVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchemaVersions'>]-?: ReturnTypeFrom<'listSchemaVersions'>[K]}['SchemaVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"SchemaVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listSchemaVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSchemaVersions' })).toString('base64');
    const member = (Array.isArray(result.SchemaVersions ?? []) ? (result.SchemaVersions ?? []) : [result.SchemaVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemas(params: { [K in keyof ParamsFrom<'listSchemas', { next?: string, limit?: number }>]: ParamsFrom<'listSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchemas'>]-?: ReturnTypeFrom<'listSchemas'>[K]}['Schemas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Schemas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listSchemas({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSchemas' })).toString('base64');
    const member = (Array.isArray(result.Schemas ?? []) ? (result.Schemas ?? []) : [result.Schemas]) as any;
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

  putCodeBinding: (params: RawParamsFrom<'putCodeBinding'>) => Promise<ReturnTypeFrom<'putCodeBinding'>>  = async params => {
  // undefined
    return this.client.putCodeBinding(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  async searchSchemas(params: { [K in keyof ParamsFrom<'searchSchemas', { next?: string, limit?: number }>]: ParamsFrom<'searchSchemas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchSchemas'>]-?: ReturnTypeFrom<'searchSchemas'>[K]}['Schemas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Schemas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.searchSchemas({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'searchSchemas' })).toString('base64');
    const member = (Array.isArray(result.Schemas ?? []) ? (result.Schemas ?? []) : [result.Schemas]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startDiscoverer: (params: RawParamsFrom<'startDiscoverer'>) => Promise<ReturnTypeFrom<'startDiscoverer'>>  = async params => {
  // undefined
    return this.client.startDiscoverer(params as any).promise();
  }

  stopDiscoverer: (params: RawParamsFrom<'stopDiscoverer'>) => Promise<ReturnTypeFrom<'stopDiscoverer'>>  = async params => {
  // undefined
    return this.client.stopDiscoverer(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDiscoverer: (params: RawParamsFrom<'updateDiscoverer'>) => Promise<ReturnTypeFrom<'updateDiscoverer'>>  = async params => {
  // undefined
    return this.client.updateDiscoverer(params as any).promise();
  }

  updateRegistry: (params: RawParamsFrom<'updateRegistry'>) => Promise<ReturnTypeFrom<'updateRegistry'>>  = async params => {
  // undefined
    return this.client.updateRegistry(params as any).promise();
  }

  updateSchema: (params: RawParamsFrom<'updateSchema'>) => Promise<ReturnTypeFrom<'updateSchema'>>  = async params => {
  // undefined
    return this.client.updateSchema(params as any).promise();
  }
  
  static fromClient(client: AWSSchemas): Schemas {
    return new Schemas(client) as any;
  }
  
  static client(options?: AWSSchemas.Types.ClientConfiguration): Schemas {
    return new Schemas(new AWSSchemas(options)) as any;
  }
}  
