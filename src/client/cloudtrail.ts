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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudTrail> = AWSCloudTrail[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudTrail {
  private constructor(private readonly client: AWSCloudTrail) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudtrail' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeTrails","listChannels","listEventDataStores","listImports","listPublicKeys","listTrails","lookupEvents"] as const;
  
  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  cancelQuery: (params: RawParamsFrom<'cancelQuery'>) => Promise<ReturnTypeFrom<'cancelQuery'>>  = async params => {
  // undefined
    return this.client.cancelQuery(params as any).promise();
  }

  createEventDataStore: (params: RawParamsFrom<'createEventDataStore'>) => Promise<ReturnTypeFrom<'createEventDataStore'>>  = async params => {
  // undefined
    return this.client.createEventDataStore(params as any).promise();
  }

  createTrail: (params: RawParamsFrom<'createTrail'>) => Promise<ReturnTypeFrom<'createTrail'>>  = async params => {
  // undefined
    return this.client.createTrail(params as any).promise();
  }

  deleteEventDataStore: (params: RawParamsFrom<'deleteEventDataStore'>) => Promise<ReturnTypeFrom<'deleteEventDataStore'>>  = async params => {
  // undefined
    return this.client.deleteEventDataStore(params as any).promise();
  }

  deleteTrail: (params: RawParamsFrom<'deleteTrail'>) => Promise<ReturnTypeFrom<'deleteTrail'>>  = async params => {
  // undefined
    return this.client.deleteTrail(params as any).promise();
  }

  describeQuery: (params: RawParamsFrom<'describeQuery'>) => Promise<ReturnTypeFrom<'describeQuery'>>  = async params => {
  // undefined
    return this.client.describeQuery(params as any).promise();
  }

  async describeTrails(params: { [K in keyof ParamsFrom<'describeTrails', {}>]: ParamsFrom<'describeTrails', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTrails'>]-?: ReturnTypeFrom<'describeTrails'>[K]}['trailList'], undefined>}> {
    // {"resultKey":"trailList"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeTrails({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.trailList ?? []) ? (result.trailList ?? []) : [result.trailList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  getChannel: (params: RawParamsFrom<'getChannel'>) => Promise<ReturnTypeFrom<'getChannel'>>  = async params => {
  // undefined
    return this.client.getChannel(params as any).promise();
  }

  getEventDataStore: (params: RawParamsFrom<'getEventDataStore'>) => Promise<ReturnTypeFrom<'getEventDataStore'>>  = async params => {
  // undefined
    return this.client.getEventDataStore(params as any).promise();
  }

  getEventSelectors: (params: RawParamsFrom<'getEventSelectors'>) => Promise<ReturnTypeFrom<'getEventSelectors'>>  = async params => {
  // undefined
    return this.client.getEventSelectors(params as any).promise();
  }

  getImport: (params: RawParamsFrom<'getImport'>) => Promise<ReturnTypeFrom<'getImport'>>  = async params => {
  // undefined
    return this.client.getImport(params as any).promise();
  }

  getInsightSelectors: (params: RawParamsFrom<'getInsightSelectors'>) => Promise<ReturnTypeFrom<'getInsightSelectors'>>  = async params => {
  // undefined
    return this.client.getInsightSelectors(params as any).promise();
  }

  getQueryResults: (params: RawParamsFrom<'getQueryResults'>) => Promise<ReturnTypeFrom<'getQueryResults'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken"}
    return this.client.getQueryResults(params as any).promise();
  }

  getTrail: (params: RawParamsFrom<'getTrail'>) => Promise<ReturnTypeFrom<'getTrail'>>  = async params => {
  // undefined
    return this.client.getTrail(params as any).promise();
  }

  getTrailStatus: (params: RawParamsFrom<'getTrailStatus'>) => Promise<ReturnTypeFrom<'getTrailStatus'>>  = async params => {
  // undefined
    return this.client.getTrailStatus(params as any).promise();
  }

  listChannels: (params: RawParamsFrom<'listChannels'>) => Promise<ReturnTypeFrom<'listChannels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChannels(params as any).promise();
  }

  listEventDataStores: (params: RawParamsFrom<'listEventDataStores'>) => Promise<ReturnTypeFrom<'listEventDataStores'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listEventDataStores(params as any).promise();
  }

  async listImportFailures(params: { [K in keyof ParamsFrom<'listImportFailures', { next?: string, limit?: number }>]: ParamsFrom<'listImportFailures', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImportFailures'>]-?: ReturnTypeFrom<'listImportFailures'>[K]}['Failures'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Failures"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImportFailures({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Failures ?? []) ? (result.Failures ?? []) : [result.Failures]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listImports(params: { [K in keyof ParamsFrom<'listImports', { next?: string, limit?: number }>]: ParamsFrom<'listImports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImports'>]-?: ReturnTypeFrom<'listImports'>[K]}['Imports'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Imports"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listImports({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Imports ?? []) ? (result.Imports ?? []) : [result.Imports]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPublicKeys(params: { [K in keyof ParamsFrom<'listPublicKeys', { next?: string }>]: ParamsFrom<'listPublicKeys', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPublicKeys'>]-?: ReturnTypeFrom<'listPublicKeys'>[K]}['PublicKeyList'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"PublicKeyList"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listPublicKeys({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.PublicKeyList ?? []) ? (result.PublicKeyList ?? []) : [result.PublicKeyList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listQueries: (params: RawParamsFrom<'listQueries'>) => Promise<ReturnTypeFrom<'listQueries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listQueries(params as any).promise();
  }

  async listTags(params: { [K in keyof ParamsFrom<'listTags', { next?: string }>]: ParamsFrom<'listTags', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTags'>]-?: ReturnTypeFrom<'listTags'>[K]}['ResourceTagList'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"ResourceTagList"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ResourceTagList ?? []) ? (result.ResourceTagList ?? []) : [result.ResourceTagList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTrails(params: { [K in keyof ParamsFrom<'listTrails', { next?: string }>]: ParamsFrom<'listTrails', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTrails'>]-?: ReturnTypeFrom<'listTrails'>[K]}['Trails'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Trails"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listTrails({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Trails ?? []) ? (result.Trails ?? []) : [result.Trails]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async lookupEvents(params: { [K in keyof ParamsFrom<'lookupEvents', { next?: string, limit?: number }>]: ParamsFrom<'lookupEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'lookupEvents'>]-?: ReturnTypeFrom<'lookupEvents'>[K]}['Events'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.lookupEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putEventSelectors: (params: RawParamsFrom<'putEventSelectors'>) => Promise<ReturnTypeFrom<'putEventSelectors'>>  = async params => {
  // undefined
    return this.client.putEventSelectors(params as any).promise();
  }

  putInsightSelectors: (params: RawParamsFrom<'putInsightSelectors'>) => Promise<ReturnTypeFrom<'putInsightSelectors'>>  = async params => {
  // undefined
    return this.client.putInsightSelectors(params as any).promise();
  }

  removeTags: (params: RawParamsFrom<'removeTags'>) => Promise<ReturnTypeFrom<'removeTags'>>  = async params => {
  // undefined
    return this.client.removeTags(params as any).promise();
  }

  restoreEventDataStore: (params: RawParamsFrom<'restoreEventDataStore'>) => Promise<ReturnTypeFrom<'restoreEventDataStore'>>  = async params => {
  // undefined
    return this.client.restoreEventDataStore(params as any).promise();
  }

  startImport: (params: RawParamsFrom<'startImport'>) => Promise<ReturnTypeFrom<'startImport'>>  = async params => {
  // undefined
    return this.client.startImport(params as any).promise();
  }

  startLogging: (params: RawParamsFrom<'startLogging'>) => Promise<ReturnTypeFrom<'startLogging'>>  = async params => {
  // undefined
    return this.client.startLogging(params as any).promise();
  }

  startQuery: (params: RawParamsFrom<'startQuery'>) => Promise<ReturnTypeFrom<'startQuery'>>  = async params => {
  // undefined
    return this.client.startQuery(params as any).promise();
  }

  stopImport: (params: RawParamsFrom<'stopImport'>) => Promise<ReturnTypeFrom<'stopImport'>>  = async params => {
  // undefined
    return this.client.stopImport(params as any).promise();
  }

  stopLogging: (params: RawParamsFrom<'stopLogging'>) => Promise<ReturnTypeFrom<'stopLogging'>>  = async params => {
  // undefined
    return this.client.stopLogging(params as any).promise();
  }

  updateEventDataStore: (params: RawParamsFrom<'updateEventDataStore'>) => Promise<ReturnTypeFrom<'updateEventDataStore'>>  = async params => {
  // undefined
    return this.client.updateEventDataStore(params as any).promise();
  }

  updateTrail: (params: RawParamsFrom<'updateTrail'>) => Promise<ReturnTypeFrom<'updateTrail'>>  = async params => {
  // undefined
    return this.client.updateTrail(params as any).promise();
  }
  
  static fromClient(client: AWSCloudTrail): CloudTrail {
    return new CloudTrail(client) as any;
  }
  
  static client(options?: AWSCloudTrail.Types.ClientConfiguration): CloudTrail {
    return new CloudTrail(new AWSCloudTrail(options)) as any;
  }
}  
