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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'geo';
    global: false;
    category: 'Front-End Web & Mobile'
    topLevelCalls: readonly ["listGeofenceCollections","listMaps","listPlaceIndexes","listRouteCalculators","listTrackers"];
    
  associateTrackerConsumer: FunctionTypeFrom<'associateTrackerConsumer'>;

  batchDeleteDevicePositionHistory: FunctionTypeFrom<'batchDeleteDevicePositionHistory'>;

  batchDeleteGeofence: FunctionTypeFrom<'batchDeleteGeofence'>;

  batchEvaluateGeofences: FunctionTypeFrom<'batchEvaluateGeofences'>;

  batchGetDevicePosition: FunctionTypeFrom<'batchGetDevicePosition'>;

  batchPutGeofence: FunctionTypeFrom<'batchPutGeofence'>;

  batchUpdateDevicePosition: FunctionTypeFrom<'batchUpdateDevicePosition'>;

  calculateRoute: FunctionTypeFrom<'calculateRoute'>;

  calculateRouteMatrix: FunctionTypeFrom<'calculateRouteMatrix'>;

  createGeofenceCollection: FunctionTypeFrom<'createGeofenceCollection'>;

  createMap: FunctionTypeFrom<'createMap'>;

  createPlaceIndex: FunctionTypeFrom<'createPlaceIndex'>;

  createRouteCalculator: FunctionTypeFrom<'createRouteCalculator'>;

  createTracker: FunctionTypeFrom<'createTracker'>;

  deleteGeofenceCollection: FunctionTypeFrom<'deleteGeofenceCollection'>;

  deleteMap: FunctionTypeFrom<'deleteMap'>;

  deletePlaceIndex: FunctionTypeFrom<'deletePlaceIndex'>;

  deleteRouteCalculator: FunctionTypeFrom<'deleteRouteCalculator'>;

  deleteTracker: FunctionTypeFrom<'deleteTracker'>;

  describeGeofenceCollection: FunctionTypeFrom<'describeGeofenceCollection'>;

  describeMap: FunctionTypeFrom<'describeMap'>;

  describePlaceIndex: FunctionTypeFrom<'describePlaceIndex'>;

  describeRouteCalculator: FunctionTypeFrom<'describeRouteCalculator'>;

  describeTracker: FunctionTypeFrom<'describeTracker'>;

  disassociateTrackerConsumer: FunctionTypeFrom<'disassociateTrackerConsumer'>;

  getDevicePosition: FunctionTypeFrom<'getDevicePosition'>;

  getDevicePositionHistory(params: { [K in keyof Omit<ParamsFrom<'getDevicePositionHistory', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getDevicePositionHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getDevicePositionHistory'>]-?: ReturnTypeFrom<'getDevicePositionHistory'>[K]}['DevicePositions'] }>
  ;

  getGeofence: FunctionTypeFrom<'getGeofence'>;

  getMapGlyphs: FunctionTypeFrom<'getMapGlyphs'>;

  getMapSprites: FunctionTypeFrom<'getMapSprites'>;

  getMapStyleDescriptor: FunctionTypeFrom<'getMapStyleDescriptor'>;

  getMapTile: FunctionTypeFrom<'getMapTile'>;

  getPlace: FunctionTypeFrom<'getPlace'>;

  listDevicePositions(params: { [K in keyof Omit<ParamsFrom<'listDevicePositions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDevicePositions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDevicePositions'>]-?: ReturnTypeFrom<'listDevicePositions'>[K]}['Entries'] }>
  ;

  listGeofenceCollections(params: { [K in keyof Omit<ParamsFrom<'listGeofenceCollections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGeofenceCollections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGeofenceCollections'>]-?: ReturnTypeFrom<'listGeofenceCollections'>[K]}['Entries'] }>
  listGeofenceCollections(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGeofenceCollections'>]-?: ReturnTypeFrom<'listGeofenceCollections'>[K]}['Entries'] }>;

  listGeofences(params: { [K in keyof Omit<ParamsFrom<'listGeofences', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGeofences', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGeofences'>]-?: ReturnTypeFrom<'listGeofences'>[K]}['Entries'] }>
  ;

  listMaps(params: { [K in keyof Omit<ParamsFrom<'listMaps', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMaps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMaps'>]-?: ReturnTypeFrom<'listMaps'>[K]}['Entries'] }>
  listMaps(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMaps'>]-?: ReturnTypeFrom<'listMaps'>[K]}['Entries'] }>;

  listPlaceIndexes(params: { [K in keyof Omit<ParamsFrom<'listPlaceIndexes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPlaceIndexes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlaceIndexes'>]-?: ReturnTypeFrom<'listPlaceIndexes'>[K]}['Entries'] }>
  listPlaceIndexes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlaceIndexes'>]-?: ReturnTypeFrom<'listPlaceIndexes'>[K]}['Entries'] }>;

  listRouteCalculators(params: { [K in keyof Omit<ParamsFrom<'listRouteCalculators', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRouteCalculators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRouteCalculators'>]-?: ReturnTypeFrom<'listRouteCalculators'>[K]}['Entries'] }>
  listRouteCalculators(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRouteCalculators'>]-?: ReturnTypeFrom<'listRouteCalculators'>[K]}['Entries'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTrackerConsumers(params: { [K in keyof Omit<ParamsFrom<'listTrackerConsumers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTrackerConsumers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrackerConsumers'>]-?: ReturnTypeFrom<'listTrackerConsumers'>[K]}['ConsumerArns'] }>
  ;

  listTrackers(params: { [K in keyof Omit<ParamsFrom<'listTrackers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTrackers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrackers'>]-?: ReturnTypeFrom<'listTrackers'>[K]}['Entries'] }>
  listTrackers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrackers'>]-?: ReturnTypeFrom<'listTrackers'>[K]}['Entries'] }>;

  putGeofence: FunctionTypeFrom<'putGeofence'>;

  searchPlaceIndexForPosition: FunctionTypeFrom<'searchPlaceIndexForPosition'>;

  searchPlaceIndexForSuggestions: FunctionTypeFrom<'searchPlaceIndexForSuggestions'>;

  searchPlaceIndexForText: FunctionTypeFrom<'searchPlaceIndexForText'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateGeofenceCollection: FunctionTypeFrom<'updateGeofenceCollection'>;

  updateMap: FunctionTypeFrom<'updateMap'>;

  updatePlaceIndex: FunctionTypeFrom<'updatePlaceIndex'>;

  updateRouteCalculator: FunctionTypeFrom<'updateRouteCalculator'>;

  updateTracker: FunctionTypeFrom<'updateTracker'>
}
 
export class Location implements ClientType {
  private constructor(private readonly client: AWSLocation) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'geo';
  public readonly global = false;
  public readonly category = 'Front-End Web & Mobile';
  public readonly topLevelCalls = ["listGeofenceCollections","listMaps","listPlaceIndexes","listRouteCalculators","listTrackers"] as const;
  
  async associateTrackerConsumer(...args: any): Promise<any> {
  // undefined
    return this.client.associateTrackerConsumer(...args).promise()
  }

  async batchDeleteDevicePositionHistory(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteDevicePositionHistory(...args).promise()
  }

  async batchDeleteGeofence(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteGeofence(...args).promise()
  }

  async batchEvaluateGeofences(...args: any): Promise<any> {
  // undefined
    return this.client.batchEvaluateGeofences(...args).promise()
  }

  async batchGetDevicePosition(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetDevicePosition(...args).promise()
  }

  async batchPutGeofence(...args: any): Promise<any> {
  // undefined
    return this.client.batchPutGeofence(...args).promise()
  }

  async batchUpdateDevicePosition(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateDevicePosition(...args).promise()
  }

  async calculateRoute(...args: any): Promise<any> {
  // undefined
    return this.client.calculateRoute(...args).promise()
  }

  async calculateRouteMatrix(...args: any): Promise<any> {
  // undefined
    return this.client.calculateRouteMatrix(...args).promise()
  }

  async createGeofenceCollection(...args: any): Promise<any> {
  // undefined
    return this.client.createGeofenceCollection(...args).promise()
  }

  async createMap(...args: any): Promise<any> {
  // undefined
    return this.client.createMap(...args).promise()
  }

  async createPlaceIndex(...args: any): Promise<any> {
  // undefined
    return this.client.createPlaceIndex(...args).promise()
  }

  async createRouteCalculator(...args: any): Promise<any> {
  // undefined
    return this.client.createRouteCalculator(...args).promise()
  }

  async createTracker(...args: any): Promise<any> {
  // undefined
    return this.client.createTracker(...args).promise()
  }

  async deleteGeofenceCollection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGeofenceCollection(...args).promise()
  }

  async deleteMap(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMap(...args).promise()
  }

  async deletePlaceIndex(...args: any): Promise<any> {
  // undefined
    return this.client.deletePlaceIndex(...args).promise()
  }

  async deleteRouteCalculator(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRouteCalculator(...args).promise()
  }

  async deleteTracker(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTracker(...args).promise()
  }

  async describeGeofenceCollection(...args: any): Promise<any> {
  // undefined
    return this.client.describeGeofenceCollection(...args).promise()
  }

  async describeMap(...args: any): Promise<any> {
  // undefined
    return this.client.describeMap(...args).promise()
  }

  async describePlaceIndex(...args: any): Promise<any> {
  // undefined
    return this.client.describePlaceIndex(...args).promise()
  }

  async describeRouteCalculator(...args: any): Promise<any> {
  // undefined
    return this.client.describeRouteCalculator(...args).promise()
  }

  async describeTracker(...args: any): Promise<any> {
  // undefined
    return this.client.describeTracker(...args).promise()
  }

  async disassociateTrackerConsumer(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateTrackerConsumer(...args).promise()
  }

  async getDevicePosition(...args: any): Promise<any> {
  // undefined
    return this.client.getDevicePosition(...args).promise()
  }

  async getDevicePositionHistory(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DevicePositions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getDevicePositionHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DevicePositions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getGeofence(...args: any): Promise<any> {
  // undefined
    return this.client.getGeofence(...args).promise()
  }

  async getMapGlyphs(...args: any): Promise<any> {
  // undefined
    return this.client.getMapGlyphs(...args).promise()
  }

  async getMapSprites(...args: any): Promise<any> {
  // undefined
    return this.client.getMapSprites(...args).promise()
  }

  async getMapStyleDescriptor(...args: any): Promise<any> {
  // undefined
    return this.client.getMapStyleDescriptor(...args).promise()
  }

  async getMapTile(...args: any): Promise<any> {
  // undefined
    return this.client.getMapTile(...args).promise()
  }

  async getPlace(...args: any): Promise<any> {
  // undefined
    return this.client.getPlace(...args).promise()
  }

  async listDevicePositions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDevicePositions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGeofenceCollections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGeofenceCollections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGeofences(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGeofences(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMaps(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMaps(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPlaceIndexes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPlaceIndexes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRouteCalculators(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRouteCalculators(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entries ?? [];
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

  async listTrackerConsumers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ConsumerArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrackerConsumers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ConsumerArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTrackers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTrackers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putGeofence(...args: any): Promise<any> {
  // undefined
    return this.client.putGeofence(...args).promise()
  }

  async searchPlaceIndexForPosition(...args: any): Promise<any> {
  // undefined
    return this.client.searchPlaceIndexForPosition(...args).promise()
  }

  async searchPlaceIndexForSuggestions(...args: any): Promise<any> {
  // undefined
    return this.client.searchPlaceIndexForSuggestions(...args).promise()
  }

  async searchPlaceIndexForText(...args: any): Promise<any> {
  // undefined
    return this.client.searchPlaceIndexForText(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateGeofenceCollection(...args: any): Promise<any> {
  // undefined
    return this.client.updateGeofenceCollection(...args).promise()
  }

  async updateMap(...args: any): Promise<any> {
  // undefined
    return this.client.updateMap(...args).promise()
  }

  async updatePlaceIndex(...args: any): Promise<any> {
  // undefined
    return this.client.updatePlaceIndex(...args).promise()
  }

  async updateRouteCalculator(...args: any): Promise<any> {
  // undefined
    return this.client.updateRouteCalculator(...args).promise()
  }

  async updateTracker(...args: any): Promise<any> {
  // undefined
    return this.client.updateTracker(...args).promise()
  }
  
  static fromClient(client: AWSLocation): ClientType {
    return new Location(client) as any;
  }
  
  static client(options?: AWSLocation.Types.ClientConfiguration): ClientType {
    return new Location(new AWSLocation(options)) as any;
  }
}  
