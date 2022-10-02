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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'groundstation';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listConfigs","listDataflowEndpointGroups","listGroundStations","listMissionProfiles","listSatellites"];
    
  cancelContact: FunctionTypeFrom<'cancelContact'>;

  createConfig: FunctionTypeFrom<'createConfig'>;

  createDataflowEndpointGroup: FunctionTypeFrom<'createDataflowEndpointGroup'>;

  createMissionProfile: FunctionTypeFrom<'createMissionProfile'>;

  deleteConfig: FunctionTypeFrom<'deleteConfig'>;

  deleteDataflowEndpointGroup: FunctionTypeFrom<'deleteDataflowEndpointGroup'>;

  deleteMissionProfile: FunctionTypeFrom<'deleteMissionProfile'>;

  describeContact: FunctionTypeFrom<'describeContact'>;

  getConfig: FunctionTypeFrom<'getConfig'>;

  getDataflowEndpointGroup: FunctionTypeFrom<'getDataflowEndpointGroup'>;

  getMinuteUsage: FunctionTypeFrom<'getMinuteUsage'>;

  getMissionProfile: FunctionTypeFrom<'getMissionProfile'>;

  getSatellite: FunctionTypeFrom<'getSatellite'>;

  listConfigs(params: { [K in keyof Omit<ParamsFrom<'listConfigs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listConfigs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConfigs'>]-?: ReturnTypeFrom<'listConfigs'>[K]}['configList'] }>
  listConfigs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listConfigs'>]-?: ReturnTypeFrom<'listConfigs'>[K]}['configList'] }>;

  listContacts(params: { [K in keyof Omit<ParamsFrom<'listContacts', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listContacts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listContacts'>]-?: ReturnTypeFrom<'listContacts'>[K]}['contactList'] }>
  ;

  listDataflowEndpointGroups(params: { [K in keyof Omit<ParamsFrom<'listDataflowEndpointGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDataflowEndpointGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataflowEndpointGroups'>]-?: ReturnTypeFrom<'listDataflowEndpointGroups'>[K]}['dataflowEndpointGroupList'] }>
  listDataflowEndpointGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataflowEndpointGroups'>]-?: ReturnTypeFrom<'listDataflowEndpointGroups'>[K]}['dataflowEndpointGroupList'] }>;

  listGroundStations(params: { [K in keyof Omit<ParamsFrom<'listGroundStations', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listGroundStations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroundStations'>]-?: ReturnTypeFrom<'listGroundStations'>[K]}['groundStationList'] }>
  listGroundStations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroundStations'>]-?: ReturnTypeFrom<'listGroundStations'>[K]}['groundStationList'] }>;

  listMissionProfiles(params: { [K in keyof Omit<ParamsFrom<'listMissionProfiles', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listMissionProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMissionProfiles'>]-?: ReturnTypeFrom<'listMissionProfiles'>[K]}['missionProfileList'] }>
  listMissionProfiles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMissionProfiles'>]-?: ReturnTypeFrom<'listMissionProfiles'>[K]}['missionProfileList'] }>;

  listSatellites(params: { [K in keyof Omit<ParamsFrom<'listSatellites', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSatellites', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSatellites'>]-?: ReturnTypeFrom<'listSatellites'>[K]}['satellites'] }>
  listSatellites(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSatellites'>]-?: ReturnTypeFrom<'listSatellites'>[K]}['satellites'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  reserveContact: FunctionTypeFrom<'reserveContact'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateConfig: FunctionTypeFrom<'updateConfig'>;

  updateMissionProfile: FunctionTypeFrom<'updateMissionProfile'>
}
 
export class GroundStation implements ClientType {
  private constructor(private readonly client: AWSGroundStation) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'groundstation';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listConfigs","listDataflowEndpointGroups","listGroundStations","listMissionProfiles","listSatellites"] as const;
  
  async cancelContact(...args: any): Promise<any> {
  // undefined
    return this.client.cancelContact(...args).promise()
  }

  async createConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createConfig(...args).promise()
  }

  async createDataflowEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDataflowEndpointGroup(...args).promise()
  }

  async createMissionProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createMissionProfile(...args).promise()
  }

  async deleteConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfig(...args).promise()
  }

  async deleteDataflowEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataflowEndpointGroup(...args).promise()
  }

  async deleteMissionProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMissionProfile(...args).promise()
  }

  async describeContact(...args: any): Promise<any> {
  // undefined
    return this.client.describeContact(...args).promise()
  }

  async getConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getConfig(...args).promise()
  }

  async getDataflowEndpointGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getDataflowEndpointGroup(...args).promise()
  }

  async getMinuteUsage(...args: any): Promise<any> {
  // undefined
    return this.client.getMinuteUsage(...args).promise()
  }

  async getMissionProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getMissionProfile(...args).promise()
  }

  async getSatellite(...args: any): Promise<any> {
  // undefined
    return this.client.getSatellite(...args).promise()
  }

  async listConfigs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"configList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listConfigs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.configList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listContacts(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"contactList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listContacts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.contactList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataflowEndpointGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dataflowEndpointGroupList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDataflowEndpointGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.dataflowEndpointGroupList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroundStations(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"groundStationList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listGroundStations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.groundStationList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMissionProfiles(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"missionProfileList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listMissionProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.missionProfileList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSatellites(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"satellites"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSatellites(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.satellites ?? [];
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

  async reserveContact(...args: any): Promise<any> {
  // undefined
    return this.client.reserveContact(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfig(...args).promise()
  }

  async updateMissionProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateMissionProfile(...args).promise()
  }
  
  static fromClient(client: AWSGroundStation): ClientType {
    return new GroundStation(client) as any;
  }
  
  static client(options?: AWSGroundStation.Types.ClientConfiguration): ClientType {
    return new GroundStation(new AWSGroundStation(options)) as any;
  }
}  
