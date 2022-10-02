import { Request, CloudTrail as AWSCloudTrail } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudTrail> = AWSCloudTrail[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudTrail> = AWSCloudTrail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudTrail[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudTrail, Extras> = AWSCloudTrail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cloudtrail';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeTrails","listChannels","listEventDataStores","listImports","listPublicKeys","listTrails","lookupEvents"];
    
  addTags: FunctionTypeFrom<'addTags'>;

  cancelQuery: FunctionTypeFrom<'cancelQuery'>;

  createEventDataStore: FunctionTypeFrom<'createEventDataStore'>;

  createTrail: FunctionTypeFrom<'createTrail'>;

  deleteEventDataStore: FunctionTypeFrom<'deleteEventDataStore'>;

  deleteTrail: FunctionTypeFrom<'deleteTrail'>;

  describeQuery: FunctionTypeFrom<'describeQuery'>;

  describeTrails: FunctionTypeFrom<'describeTrails'>;

  getChannel: FunctionTypeFrom<'getChannel'>;

  getEventDataStore: FunctionTypeFrom<'getEventDataStore'>;

  getEventSelectors: FunctionTypeFrom<'getEventSelectors'>;

  getImport: FunctionTypeFrom<'getImport'>;

  getInsightSelectors: FunctionTypeFrom<'getInsightSelectors'>;

  getQueryResults: FunctionTypeFrom<'getQueryResults'>;

  getTrail: FunctionTypeFrom<'getTrail'>;

  getTrailStatus: FunctionTypeFrom<'getTrailStatus'>;

  listChannels: FunctionTypeFrom<'listChannels'>;

  listEventDataStores: FunctionTypeFrom<'listEventDataStores'>;

  listImportFailures(params: { [K in keyof Omit<ParamsFrom<'listImportFailures', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listImportFailures', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImportFailures'>]-?: ReturnTypeFrom<'listImportFailures'>[K]}['Failures'] }>
  ;

  listImports(params: { [K in keyof Omit<ParamsFrom<'listImports', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listImports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImports'>]-?: ReturnTypeFrom<'listImports'>[K]}['Imports'] }>
  listImports(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImports'>]-?: ReturnTypeFrom<'listImports'>[K]}['Imports'] }>;

  listPublicKeys(params: { [K in keyof Omit<ParamsFrom<'listPublicKeys', { next?: string }>, 'NextToken'>]: ParamsFrom<'listPublicKeys', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPublicKeys'>]-?: ReturnTypeFrom<'listPublicKeys'>[K]}['PublicKeyList'] }>
  listPublicKeys(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPublicKeys'>]-?: ReturnTypeFrom<'listPublicKeys'>[K]}['PublicKeyList'] }>;

  listQueries: FunctionTypeFrom<'listQueries'>;

  listTags(params: { [K in keyof Omit<ParamsFrom<'listTags', { next?: string }>, 'NextToken'>]: ParamsFrom<'listTags', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTags'>]-?: ReturnTypeFrom<'listTags'>[K]}['ResourceTagList'] }>
  ;

  listTrails(params: { [K in keyof Omit<ParamsFrom<'listTrails', { next?: string }>, 'NextToken'>]: ParamsFrom<'listTrails', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrails'>]-?: ReturnTypeFrom<'listTrails'>[K]}['Trails'] }>
  listTrails(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrails'>]-?: ReturnTypeFrom<'listTrails'>[K]}['Trails'] }>;

  lookupEvents(params: { [K in keyof Omit<ParamsFrom<'lookupEvents', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'lookupEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'lookupEvents'>]-?: ReturnTypeFrom<'lookupEvents'>[K]}['Events'] }>
  lookupEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'lookupEvents'>]-?: ReturnTypeFrom<'lookupEvents'>[K]}['Events'] }>;

  putEventSelectors: FunctionTypeFrom<'putEventSelectors'>;

  putInsightSelectors: FunctionTypeFrom<'putInsightSelectors'>;

  removeTags: FunctionTypeFrom<'removeTags'>;

  restoreEventDataStore: FunctionTypeFrom<'restoreEventDataStore'>;

  startImport: FunctionTypeFrom<'startImport'>;

  startLogging: FunctionTypeFrom<'startLogging'>;

  startQuery: FunctionTypeFrom<'startQuery'>;

  stopImport: FunctionTypeFrom<'stopImport'>;

  stopLogging: FunctionTypeFrom<'stopLogging'>;

  updateEventDataStore: FunctionTypeFrom<'updateEventDataStore'>;

  updateTrail: FunctionTypeFrom<'updateTrail'>
}
 
export class CloudTrail implements ClientType {
  private constructor(private readonly client: AWSCloudTrail) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudtrail';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeTrails","listChannels","listEventDataStores","listImports","listPublicKeys","listTrails","lookupEvents"] as const;
  
  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async cancelQuery(...args: any): Promise<any> {
  // undefined
    return this.client.cancelQuery(...args).promise()
  }

  async createEventDataStore(...args: any): Promise<any> {
  // undefined
    return this.client.createEventDataStore(...args).promise()
  }

  async createTrail(...args: any): Promise<any> {
  // undefined
    return this.client.createTrail(...args).promise()
  }

  async deleteEventDataStore(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventDataStore(...args).promise()
  }

  async deleteTrail(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrail(...args).promise()
  }

  async describeQuery(...args: any): Promise<any> {
  // undefined
    return this.client.describeQuery(...args).promise()
  }

  async describeTrails(...args: any): Promise<any> {
  // {"resultKey":"trailList"}
    return this.client.describeTrails(...args).promise()
  }

  async getChannel(...args: any): Promise<any> {
  // undefined
    return this.client.getChannel(...args).promise()
  }

  async getEventDataStore(...args: any): Promise<any> {
  // undefined
    return this.client.getEventDataStore(...args).promise()
  }

  async getEventSelectors(...args: any): Promise<any> {
  // undefined
    return this.client.getEventSelectors(...args).promise()
  }

  async getImport(...args: any): Promise<any> {
  // undefined
    return this.client.getImport(...args).promise()
  }

  async getInsightSelectors(...args: any): Promise<any> {
  // undefined
    return this.client.getInsightSelectors(...args).promise()
  }

  async getQueryResults(...args: any): Promise<any> {
  // {"inputToken":"NextToken","outputToken":"NextToken"}
    return this.client.getQueryResults(...args).promise()
  }

  async getTrail(...args: any): Promise<any> {
  // undefined
    return this.client.getTrail(...args).promise()
  }

  async getTrailStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getTrailStatus(...args).promise()
  }

  async listChannels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannels(...args).promise()
  }

  async listEventDataStores(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEventDataStores(...args).promise()
  }

  async listImportFailures(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Failures"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImportFailures(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Failures ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImports(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Imports"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImports(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Imports ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPublicKeys(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"PublicKeyList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listPublicKeys(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PublicKeyList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listQueries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQueries(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ResourceTagList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceTagList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrails(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Trails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listTrails(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Trails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async lookupEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.lookupEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putEventSelectors(...args: any): Promise<any> {
  // undefined
    return this.client.putEventSelectors(...args).promise()
  }

  async putInsightSelectors(...args: any): Promise<any> {
  // undefined
    return this.client.putInsightSelectors(...args).promise()
  }

  async removeTags(...args: any): Promise<any> {
  // undefined
    return this.client.removeTags(...args).promise()
  }

  async restoreEventDataStore(...args: any): Promise<any> {
  // undefined
    return this.client.restoreEventDataStore(...args).promise()
  }

  async startImport(...args: any): Promise<any> {
  // undefined
    return this.client.startImport(...args).promise()
  }

  async startLogging(...args: any): Promise<any> {
  // undefined
    return this.client.startLogging(...args).promise()
  }

  async startQuery(...args: any): Promise<any> {
  // undefined
    return this.client.startQuery(...args).promise()
  }

  async stopImport(...args: any): Promise<any> {
  // undefined
    return this.client.stopImport(...args).promise()
  }

  async stopLogging(...args: any): Promise<any> {
  // undefined
    return this.client.stopLogging(...args).promise()
  }

  async updateEventDataStore(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventDataStore(...args).promise()
  }

  async updateTrail(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrail(...args).promise()
  }
  
  static fromClient(client: AWSCloudTrail): ClientType {
    return new CloudTrail(client) as any;
  }
  
  static client(options?: AWSCloudTrail.Types.ClientConfiguration): ClientType {
    return new CloudTrail(new AWSCloudTrail(options)) as any;
  }
}  
