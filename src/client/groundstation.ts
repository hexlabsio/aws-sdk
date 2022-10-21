import { Request, GroundStation as AWSGroundStation } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGroundStation> = AWSGroundStation[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGroundStation> = AWSGroundStation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGroundStation[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGroundStation, Extras> = AWSGroundStation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGroundStation> = AWSGroundStation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class GroundStation {
  private constructor(private readonly client: AWSGroundStation) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'groundstation' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listConfigs","listDataflowEndpointGroups","listGroundStations","listMissionProfiles","listSatellites"] as const;
  
  cancelContact: (params: RawParamsFrom<'cancelContact'>) => Promise<ReturnTypeFrom<'cancelContact'>>  = async params => {
  // undefined
    return this.client.cancelContact(params as any).promise();
  }

  createConfig: (params: RawParamsFrom<'createConfig'>) => Promise<ReturnTypeFrom<'createConfig'>>  = async params => {
  // undefined
    return this.client.createConfig(params as any).promise();
  }

  createDataflowEndpointGroup: (params: RawParamsFrom<'createDataflowEndpointGroup'>) => Promise<ReturnTypeFrom<'createDataflowEndpointGroup'>>  = async params => {
  // undefined
    return this.client.createDataflowEndpointGroup(params as any).promise();
  }

  createMissionProfile: (params: RawParamsFrom<'createMissionProfile'>) => Promise<ReturnTypeFrom<'createMissionProfile'>>  = async params => {
  // undefined
    return this.client.createMissionProfile(params as any).promise();
  }

  deleteConfig: (params: RawParamsFrom<'deleteConfig'>) => Promise<ReturnTypeFrom<'deleteConfig'>>  = async params => {
  // undefined
    return this.client.deleteConfig(params as any).promise();
  }

  deleteDataflowEndpointGroup: (params: RawParamsFrom<'deleteDataflowEndpointGroup'>) => Promise<ReturnTypeFrom<'deleteDataflowEndpointGroup'>>  = async params => {
  // undefined
    return this.client.deleteDataflowEndpointGroup(params as any).promise();
  }

  deleteMissionProfile: (params: RawParamsFrom<'deleteMissionProfile'>) => Promise<ReturnTypeFrom<'deleteMissionProfile'>>  = async params => {
  // undefined
    return this.client.deleteMissionProfile(params as any).promise();
  }

  describeContact: (params: RawParamsFrom<'describeContact'>) => Promise<ReturnTypeFrom<'describeContact'>>  = async params => {
  // undefined
    return this.client.describeContact(params as any).promise();
  }

  getConfig: (params: RawParamsFrom<'getConfig'>) => Promise<ReturnTypeFrom<'getConfig'>>  = async params => {
  // undefined
    return this.client.getConfig(params as any).promise();
  }

  getDataflowEndpointGroup: (params: RawParamsFrom<'getDataflowEndpointGroup'>) => Promise<ReturnTypeFrom<'getDataflowEndpointGroup'>>  = async params => {
  // undefined
    return this.client.getDataflowEndpointGroup(params as any).promise();
  }

  getMinuteUsage: (params: RawParamsFrom<'getMinuteUsage'>) => Promise<ReturnTypeFrom<'getMinuteUsage'>>  = async params => {
  // undefined
    return this.client.getMinuteUsage(params as any).promise();
  }

  getMissionProfile: (params: RawParamsFrom<'getMissionProfile'>) => Promise<ReturnTypeFrom<'getMissionProfile'>>  = async params => {
  // undefined
    return this.client.getMissionProfile(params as any).promise();
  }

  getSatellite: (params: RawParamsFrom<'getSatellite'>) => Promise<ReturnTypeFrom<'getSatellite'>>  = async params => {
  // undefined
    return this.client.getSatellite(params as any).promise();
  }

  async listConfigs(params: { [K in keyof ParamsFrom<'listConfigs', { next?: string, limit?: number }>]: ParamsFrom<'listConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listConfigs'>]-?: ReturnTypeFrom<'listConfigs'>[K]}['configList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"configList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listConfigs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.configList ?? []) ? (result.configList ?? []) : [result.configList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listContacts(params: { [K in keyof ParamsFrom<'listContacts', { next?: string, limit?: number }>]: ParamsFrom<'listContacts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listContacts'>]-?: ReturnTypeFrom<'listContacts'>[K]}['contactList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"contactList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listContacts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.contactList ?? []) ? (result.contactList ?? []) : [result.contactList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDataflowEndpointGroups(params: { [K in keyof ParamsFrom<'listDataflowEndpointGroups', { next?: string, limit?: number }>]: ParamsFrom<'listDataflowEndpointGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataflowEndpointGroups'>]-?: ReturnTypeFrom<'listDataflowEndpointGroups'>[K]}['dataflowEndpointGroupList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dataflowEndpointGroupList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDataflowEndpointGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.dataflowEndpointGroupList ?? []) ? (result.dataflowEndpointGroupList ?? []) : [result.dataflowEndpointGroupList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listGroundStations(params: { [K in keyof ParamsFrom<'listGroundStations', { next?: string, limit?: number }>]: ParamsFrom<'listGroundStations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroundStations'>]-?: ReturnTypeFrom<'listGroundStations'>[K]}['groundStationList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"groundStationList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listGroundStations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.groundStationList ?? []) ? (result.groundStationList ?? []) : [result.groundStationList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listMissionProfiles(params: { [K in keyof ParamsFrom<'listMissionProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listMissionProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMissionProfiles'>]-?: ReturnTypeFrom<'listMissionProfiles'>[K]}['missionProfileList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"missionProfileList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMissionProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.missionProfileList ?? []) ? (result.missionProfileList ?? []) : [result.missionProfileList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSatellites(params: { [K in keyof ParamsFrom<'listSatellites', { next?: string, limit?: number }>]: ParamsFrom<'listSatellites', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSatellites'>]-?: ReturnTypeFrom<'listSatellites'>[K]}['satellites'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"satellites"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSatellites({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.satellites ?? []) ? (result.satellites ?? []) : [result.satellites]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  reserveContact: (params: RawParamsFrom<'reserveContact'>) => Promise<ReturnTypeFrom<'reserveContact'>>  = async params => {
  // undefined
    return this.client.reserveContact(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateConfig: (params: RawParamsFrom<'updateConfig'>) => Promise<ReturnTypeFrom<'updateConfig'>>  = async params => {
  // undefined
    return this.client.updateConfig(params as any).promise();
  }

  updateMissionProfile: (params: RawParamsFrom<'updateMissionProfile'>) => Promise<ReturnTypeFrom<'updateMissionProfile'>>  = async params => {
  // undefined
    return this.client.updateMissionProfile(params as any).promise();
  }
  
  static fromClient(client: AWSGroundStation): GroundStation {
    return new GroundStation(client) as any;
  }
  
  static client(options?: AWSGroundStation.Types.ClientConfiguration): GroundStation {
    return new GroundStation(new AWSGroundStation(options)) as any;
  }
}  
