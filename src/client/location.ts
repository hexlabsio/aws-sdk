import { Request, Location as AWSLocation } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLocation> = AWSLocation[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLocation> = AWSLocation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLocation[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLocation, Extras> = AWSLocation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLocation> = AWSLocation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Location {
  private constructor(private readonly client: AWSLocation) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'geo' as const;
  public readonly global = false as const;
  public readonly category = 'Front-End Web & Mobile' as const;
  public readonly topLevelCalls = ["listGeofenceCollections","listMaps","listPlaceIndexes","listRouteCalculators","listTrackers"] as const;
  
  associateTrackerConsumer: (params: RawParamsFrom<'associateTrackerConsumer'>) => Promise<ReturnTypeFrom<'associateTrackerConsumer'>>  = async params => {
  // undefined
    return this.client.associateTrackerConsumer(params as any).promise();
  }

  batchDeleteDevicePositionHistory: (params: RawParamsFrom<'batchDeleteDevicePositionHistory'>) => Promise<ReturnTypeFrom<'batchDeleteDevicePositionHistory'>>  = async params => {
  // undefined
    return this.client.batchDeleteDevicePositionHistory(params as any).promise();
  }

  batchDeleteGeofence: (params: RawParamsFrom<'batchDeleteGeofence'>) => Promise<ReturnTypeFrom<'batchDeleteGeofence'>>  = async params => {
  // undefined
    return this.client.batchDeleteGeofence(params as any).promise();
  }

  batchEvaluateGeofences: (params: RawParamsFrom<'batchEvaluateGeofences'>) => Promise<ReturnTypeFrom<'batchEvaluateGeofences'>>  = async params => {
  // undefined
    return this.client.batchEvaluateGeofences(params as any).promise();
  }

  batchGetDevicePosition: (params: RawParamsFrom<'batchGetDevicePosition'>) => Promise<ReturnTypeFrom<'batchGetDevicePosition'>>  = async params => {
  // undefined
    return this.client.batchGetDevicePosition(params as any).promise();
  }

  batchPutGeofence: (params: RawParamsFrom<'batchPutGeofence'>) => Promise<ReturnTypeFrom<'batchPutGeofence'>>  = async params => {
  // undefined
    return this.client.batchPutGeofence(params as any).promise();
  }

  batchUpdateDevicePosition: (params: RawParamsFrom<'batchUpdateDevicePosition'>) => Promise<ReturnTypeFrom<'batchUpdateDevicePosition'>>  = async params => {
  // undefined
    return this.client.batchUpdateDevicePosition(params as any).promise();
  }

  calculateRoute: (params: RawParamsFrom<'calculateRoute'>) => Promise<ReturnTypeFrom<'calculateRoute'>>  = async params => {
  // undefined
    return this.client.calculateRoute(params as any).promise();
  }

  calculateRouteMatrix: (params: RawParamsFrom<'calculateRouteMatrix'>) => Promise<ReturnTypeFrom<'calculateRouteMatrix'>>  = async params => {
  // undefined
    return this.client.calculateRouteMatrix(params as any).promise();
  }

  createGeofenceCollection: (params: RawParamsFrom<'createGeofenceCollection'>) => Promise<ReturnTypeFrom<'createGeofenceCollection'>>  = async params => {
  // undefined
    return this.client.createGeofenceCollection(params as any).promise();
  }

  createMap: (params: RawParamsFrom<'createMap'>) => Promise<ReturnTypeFrom<'createMap'>>  = async params => {
  // undefined
    return this.client.createMap(params as any).promise();
  }

  createPlaceIndex: (params: RawParamsFrom<'createPlaceIndex'>) => Promise<ReturnTypeFrom<'createPlaceIndex'>>  = async params => {
  // undefined
    return this.client.createPlaceIndex(params as any).promise();
  }

  createRouteCalculator: (params: RawParamsFrom<'createRouteCalculator'>) => Promise<ReturnTypeFrom<'createRouteCalculator'>>  = async params => {
  // undefined
    return this.client.createRouteCalculator(params as any).promise();
  }

  createTracker: (params: RawParamsFrom<'createTracker'>) => Promise<ReturnTypeFrom<'createTracker'>>  = async params => {
  // undefined
    return this.client.createTracker(params as any).promise();
  }

  deleteGeofenceCollection: (params: RawParamsFrom<'deleteGeofenceCollection'>) => Promise<ReturnTypeFrom<'deleteGeofenceCollection'>>  = async params => {
  // undefined
    return this.client.deleteGeofenceCollection(params as any).promise();
  }

  deleteMap: (params: RawParamsFrom<'deleteMap'>) => Promise<ReturnTypeFrom<'deleteMap'>>  = async params => {
  // undefined
    return this.client.deleteMap(params as any).promise();
  }

  deletePlaceIndex: (params: RawParamsFrom<'deletePlaceIndex'>) => Promise<ReturnTypeFrom<'deletePlaceIndex'>>  = async params => {
  // undefined
    return this.client.deletePlaceIndex(params as any).promise();
  }

  deleteRouteCalculator: (params: RawParamsFrom<'deleteRouteCalculator'>) => Promise<ReturnTypeFrom<'deleteRouteCalculator'>>  = async params => {
  // undefined
    return this.client.deleteRouteCalculator(params as any).promise();
  }

  deleteTracker: (params: RawParamsFrom<'deleteTracker'>) => Promise<ReturnTypeFrom<'deleteTracker'>>  = async params => {
  // undefined
    return this.client.deleteTracker(params as any).promise();
  }

  describeGeofenceCollection: (params: RawParamsFrom<'describeGeofenceCollection'>) => Promise<ReturnTypeFrom<'describeGeofenceCollection'>>  = async params => {
  // undefined
    return this.client.describeGeofenceCollection(params as any).promise();
  }

  describeMap: (params: RawParamsFrom<'describeMap'>) => Promise<ReturnTypeFrom<'describeMap'>>  = async params => {
  // undefined
    return this.client.describeMap(params as any).promise();
  }

  describePlaceIndex: (params: RawParamsFrom<'describePlaceIndex'>) => Promise<ReturnTypeFrom<'describePlaceIndex'>>  = async params => {
  // undefined
    return this.client.describePlaceIndex(params as any).promise();
  }

  describeRouteCalculator: (params: RawParamsFrom<'describeRouteCalculator'>) => Promise<ReturnTypeFrom<'describeRouteCalculator'>>  = async params => {
  // undefined
    return this.client.describeRouteCalculator(params as any).promise();
  }

  describeTracker: (params: RawParamsFrom<'describeTracker'>) => Promise<ReturnTypeFrom<'describeTracker'>>  = async params => {
  // undefined
    return this.client.describeTracker(params as any).promise();
  }

  disassociateTrackerConsumer: (params: RawParamsFrom<'disassociateTrackerConsumer'>) => Promise<ReturnTypeFrom<'disassociateTrackerConsumer'>>  = async params => {
  // undefined
    return this.client.disassociateTrackerConsumer(params as any).promise();
  }

  getDevicePosition: (params: RawParamsFrom<'getDevicePosition'>) => Promise<ReturnTypeFrom<'getDevicePosition'>>  = async params => {
  // undefined
    return this.client.getDevicePosition(params as any).promise();
  }

  async getDevicePositionHistory(params: { [K in keyof ParamsFrom<'getDevicePositionHistory', { next?: string, limit?: number }>]: ParamsFrom<'getDevicePositionHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getDevicePositionHistory'>]-?: ReturnTypeFrom<'getDevicePositionHistory'>[K]}['DevicePositions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DevicePositions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getDevicePositionHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getDevicePositionHistory' })).toString('base64');
    const member = (Array.isArray(result.DevicePositions ?? []) ? (result.DevicePositions ?? []) : [result.DevicePositions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getGeofence: (params: RawParamsFrom<'getGeofence'>) => Promise<ReturnTypeFrom<'getGeofence'>>  = async params => {
  // undefined
    return this.client.getGeofence(params as any).promise();
  }

  getMapGlyphs: (params: RawParamsFrom<'getMapGlyphs'>) => Promise<ReturnTypeFrom<'getMapGlyphs'>>  = async params => {
  // undefined
    return this.client.getMapGlyphs(params as any).promise();
  }

  getMapSprites: (params: RawParamsFrom<'getMapSprites'>) => Promise<ReturnTypeFrom<'getMapSprites'>>  = async params => {
  // undefined
    return this.client.getMapSprites(params as any).promise();
  }

  getMapStyleDescriptor: (params: RawParamsFrom<'getMapStyleDescriptor'>) => Promise<ReturnTypeFrom<'getMapStyleDescriptor'>>  = async params => {
  // undefined
    return this.client.getMapStyleDescriptor(params as any).promise();
  }

  getMapTile: (params: RawParamsFrom<'getMapTile'>) => Promise<ReturnTypeFrom<'getMapTile'>>  = async params => {
  // undefined
    return this.client.getMapTile(params as any).promise();
  }

  getPlace: (params: RawParamsFrom<'getPlace'>) => Promise<ReturnTypeFrom<'getPlace'>>  = async params => {
  // undefined
    return this.client.getPlace(params as any).promise();
  }

  async listDevicePositions(params: { [K in keyof ParamsFrom<'listDevicePositions', { next?: string, limit?: number }>]: ParamsFrom<'listDevicePositions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDevicePositions'>]-?: ReturnTypeFrom<'listDevicePositions'>[K]}['Entries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDevicePositions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDevicePositions' })).toString('base64');
    const member = (Array.isArray(result.Entries ?? []) ? (result.Entries ?? []) : [result.Entries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGeofenceCollections(params: { [K in keyof ParamsFrom<'listGeofenceCollections', { next?: string, limit?: number }>]: ParamsFrom<'listGeofenceCollections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGeofenceCollections'>]-?: ReturnTypeFrom<'listGeofenceCollections'>[K]}['Entries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGeofenceCollections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGeofenceCollections' })).toString('base64');
    const member = (Array.isArray(result.Entries ?? []) ? (result.Entries ?? []) : [result.Entries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGeofences(params: { [K in keyof ParamsFrom<'listGeofences', { next?: string, limit?: number }>]: ParamsFrom<'listGeofences', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGeofences'>]-?: ReturnTypeFrom<'listGeofences'>[K]}['Entries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGeofences({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGeofences' })).toString('base64');
    const member = (Array.isArray(result.Entries ?? []) ? (result.Entries ?? []) : [result.Entries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMaps(params: { [K in keyof ParamsFrom<'listMaps', { next?: string, limit?: number }>]: ParamsFrom<'listMaps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMaps'>]-?: ReturnTypeFrom<'listMaps'>[K]}['Entries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMaps({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listMaps' })).toString('base64');
    const member = (Array.isArray(result.Entries ?? []) ? (result.Entries ?? []) : [result.Entries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPlaceIndexes(params: { [K in keyof ParamsFrom<'listPlaceIndexes', { next?: string, limit?: number }>]: ParamsFrom<'listPlaceIndexes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPlaceIndexes'>]-?: ReturnTypeFrom<'listPlaceIndexes'>[K]}['Entries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPlaceIndexes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPlaceIndexes' })).toString('base64');
    const member = (Array.isArray(result.Entries ?? []) ? (result.Entries ?? []) : [result.Entries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRouteCalculators(params: { [K in keyof ParamsFrom<'listRouteCalculators', { next?: string, limit?: number }>]: ParamsFrom<'listRouteCalculators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRouteCalculators'>]-?: ReturnTypeFrom<'listRouteCalculators'>[K]}['Entries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRouteCalculators({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRouteCalculators' })).toString('base64');
    const member = (Array.isArray(result.Entries ?? []) ? (result.Entries ?? []) : [result.Entries]) as any;
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

  async listTrackerConsumers(params: { [K in keyof ParamsFrom<'listTrackerConsumers', { next?: string, limit?: number }>]: ParamsFrom<'listTrackerConsumers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTrackerConsumers'>]-?: ReturnTypeFrom<'listTrackerConsumers'>[K]}['ConsumerArns'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConsumerArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrackerConsumers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTrackerConsumers' })).toString('base64');
    const member = (Array.isArray(result.ConsumerArns ?? []) ? (result.ConsumerArns ?? []) : [result.ConsumerArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrackers(params: { [K in keyof ParamsFrom<'listTrackers', { next?: string, limit?: number }>]: ParamsFrom<'listTrackers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTrackers'>]-?: ReturnTypeFrom<'listTrackers'>[K]}['Entries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrackers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTrackers' })).toString('base64');
    const member = (Array.isArray(result.Entries ?? []) ? (result.Entries ?? []) : [result.Entries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putGeofence: (params: RawParamsFrom<'putGeofence'>) => Promise<ReturnTypeFrom<'putGeofence'>>  = async params => {
  // undefined
    return this.client.putGeofence(params as any).promise();
  }

  searchPlaceIndexForPosition: (params: RawParamsFrom<'searchPlaceIndexForPosition'>) => Promise<ReturnTypeFrom<'searchPlaceIndexForPosition'>>  = async params => {
  // undefined
    return this.client.searchPlaceIndexForPosition(params as any).promise();
  }

  searchPlaceIndexForSuggestions: (params: RawParamsFrom<'searchPlaceIndexForSuggestions'>) => Promise<ReturnTypeFrom<'searchPlaceIndexForSuggestions'>>  = async params => {
  // undefined
    return this.client.searchPlaceIndexForSuggestions(params as any).promise();
  }

  searchPlaceIndexForText: (params: RawParamsFrom<'searchPlaceIndexForText'>) => Promise<ReturnTypeFrom<'searchPlaceIndexForText'>>  = async params => {
  // undefined
    return this.client.searchPlaceIndexForText(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateGeofenceCollection: (params: RawParamsFrom<'updateGeofenceCollection'>) => Promise<ReturnTypeFrom<'updateGeofenceCollection'>>  = async params => {
  // undefined
    return this.client.updateGeofenceCollection(params as any).promise();
  }

  updateMap: (params: RawParamsFrom<'updateMap'>) => Promise<ReturnTypeFrom<'updateMap'>>  = async params => {
  // undefined
    return this.client.updateMap(params as any).promise();
  }

  updatePlaceIndex: (params: RawParamsFrom<'updatePlaceIndex'>) => Promise<ReturnTypeFrom<'updatePlaceIndex'>>  = async params => {
  // undefined
    return this.client.updatePlaceIndex(params as any).promise();
  }

  updateRouteCalculator: (params: RawParamsFrom<'updateRouteCalculator'>) => Promise<ReturnTypeFrom<'updateRouteCalculator'>>  = async params => {
  // undefined
    return this.client.updateRouteCalculator(params as any).promise();
  }

  updateTracker: (params: RawParamsFrom<'updateTracker'>) => Promise<ReturnTypeFrom<'updateTracker'>>  = async params => {
  // undefined
    return this.client.updateTracker(params as any).promise();
  }
  
  static fromClient(client: AWSLocation): Location {
    return new Location(client) as any;
  }
  
  static client(options?: AWSLocation.Types.ClientConfiguration): Location {
    return new Location(new AWSLocation(options)) as any;
  }
}  
