import { Request, IoTFleetWise as AWSIoTFleetWise } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTFleetWise> = AWSIoTFleetWise[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTFleetWise> = AWSIoTFleetWise[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTFleetWise[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTFleetWise, Extras> = AWSIoTFleetWise[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iotfleetwise';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listCampaigns","listDecoderManifests","listFleets","listModelManifests","listSignalCatalogs","listVehicles"];
    
  associateVehicleFleet: FunctionTypeFrom<'associateVehicleFleet'>;

  batchCreateVehicle: FunctionTypeFrom<'batchCreateVehicle'>;

  batchUpdateVehicle: FunctionTypeFrom<'batchUpdateVehicle'>;

  createCampaign: FunctionTypeFrom<'createCampaign'>;

  createDecoderManifest: FunctionTypeFrom<'createDecoderManifest'>;

  createFleet: FunctionTypeFrom<'createFleet'>;

  createModelManifest: FunctionTypeFrom<'createModelManifest'>;

  createSignalCatalog: FunctionTypeFrom<'createSignalCatalog'>;

  createVehicle: FunctionTypeFrom<'createVehicle'>;

  deleteCampaign: FunctionTypeFrom<'deleteCampaign'>;

  deleteDecoderManifest: FunctionTypeFrom<'deleteDecoderManifest'>;

  deleteFleet: FunctionTypeFrom<'deleteFleet'>;

  deleteModelManifest: FunctionTypeFrom<'deleteModelManifest'>;

  deleteSignalCatalog: FunctionTypeFrom<'deleteSignalCatalog'>;

  deleteVehicle: FunctionTypeFrom<'deleteVehicle'>;

  disassociateVehicleFleet: FunctionTypeFrom<'disassociateVehicleFleet'>;

  getCampaign: FunctionTypeFrom<'getCampaign'>;

  getDecoderManifest: FunctionTypeFrom<'getDecoderManifest'>;

  getFleet: FunctionTypeFrom<'getFleet'>;

  getLoggingOptions: FunctionTypeFrom<'getLoggingOptions'>;

  getModelManifest: FunctionTypeFrom<'getModelManifest'>;

  getRegisterAccountStatus: FunctionTypeFrom<'getRegisterAccountStatus'>;

  getSignalCatalog: FunctionTypeFrom<'getSignalCatalog'>;

  getVehicle: FunctionTypeFrom<'getVehicle'>;

  getVehicleStatus(params: { [K in keyof Omit<ParamsFrom<'getVehicleStatus', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getVehicleStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getVehicleStatus'>]-?: ReturnTypeFrom<'getVehicleStatus'>[K]}['campaigns'] }>
  ;

  importDecoderManifest: FunctionTypeFrom<'importDecoderManifest'>;

  importSignalCatalog: FunctionTypeFrom<'importSignalCatalog'>;

  listCampaigns(params: { [K in keyof Omit<ParamsFrom<'listCampaigns', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCampaigns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaignSummaries'] }>
  listCampaigns(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaignSummaries'] }>;

  listDecoderManifestNetworkInterfaces(params: { [K in keyof Omit<ParamsFrom<'listDecoderManifestNetworkInterfaces', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDecoderManifestNetworkInterfaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDecoderManifestNetworkInterfaces'>]-?: ReturnTypeFrom<'listDecoderManifestNetworkInterfaces'>[K]}['networkInterfaces'] }>
  ;

  listDecoderManifestSignals(params: { [K in keyof Omit<ParamsFrom<'listDecoderManifestSignals', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDecoderManifestSignals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDecoderManifestSignals'>]-?: ReturnTypeFrom<'listDecoderManifestSignals'>[K]}['signalDecoders'] }>
  ;

  listDecoderManifests(params: { [K in keyof Omit<ParamsFrom<'listDecoderManifests', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDecoderManifests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDecoderManifests'>]-?: ReturnTypeFrom<'listDecoderManifests'>[K]}['summaries'] }>
  listDecoderManifests(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDecoderManifests'>]-?: ReturnTypeFrom<'listDecoderManifests'>[K]}['summaries'] }>;

  listFleets(params: { [K in keyof Omit<ParamsFrom<'listFleets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['fleetSummaries'] }>
  listFleets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['fleetSummaries'] }>;

  listFleetsForVehicle(params: { [K in keyof Omit<ParamsFrom<'listFleetsForVehicle', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFleetsForVehicle', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleetsForVehicle'>]-?: ReturnTypeFrom<'listFleetsForVehicle'>[K]}['fleets'] }>
  ;

  listModelManifestNodes(params: { [K in keyof Omit<ParamsFrom<'listModelManifestNodes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listModelManifestNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelManifestNodes'>]-?: ReturnTypeFrom<'listModelManifestNodes'>[K]}['nodes'] }>
  ;

  listModelManifests(params: { [K in keyof Omit<ParamsFrom<'listModelManifests', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listModelManifests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelManifests'>]-?: ReturnTypeFrom<'listModelManifests'>[K]}['summaries'] }>
  listModelManifests(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listModelManifests'>]-?: ReturnTypeFrom<'listModelManifests'>[K]}['summaries'] }>;

  listSignalCatalogNodes(params: { [K in keyof Omit<ParamsFrom<'listSignalCatalogNodes', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSignalCatalogNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSignalCatalogNodes'>]-?: ReturnTypeFrom<'listSignalCatalogNodes'>[K]}['nodes'] }>
  ;

  listSignalCatalogs(params: { [K in keyof Omit<ParamsFrom<'listSignalCatalogs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSignalCatalogs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSignalCatalogs'>]-?: ReturnTypeFrom<'listSignalCatalogs'>[K]}['summaries'] }>
  listSignalCatalogs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSignalCatalogs'>]-?: ReturnTypeFrom<'listSignalCatalogs'>[K]}['summaries'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listVehicles(params: { [K in keyof Omit<ParamsFrom<'listVehicles', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listVehicles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVehicles'>]-?: ReturnTypeFrom<'listVehicles'>[K]}['vehicleSummaries'] }>
  listVehicles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVehicles'>]-?: ReturnTypeFrom<'listVehicles'>[K]}['vehicleSummaries'] }>;

  listVehiclesInFleet(params: { [K in keyof Omit<ParamsFrom<'listVehiclesInFleet', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listVehiclesInFleet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVehiclesInFleet'>]-?: ReturnTypeFrom<'listVehiclesInFleet'>[K]}['vehicles'] }>
  ;

  putLoggingOptions: FunctionTypeFrom<'putLoggingOptions'>;

  registerAccount: FunctionTypeFrom<'registerAccount'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCampaign: FunctionTypeFrom<'updateCampaign'>;

  updateDecoderManifest: FunctionTypeFrom<'updateDecoderManifest'>;

  updateFleet: FunctionTypeFrom<'updateFleet'>;

  updateModelManifest: FunctionTypeFrom<'updateModelManifest'>;

  updateSignalCatalog: FunctionTypeFrom<'updateSignalCatalog'>;

  updateVehicle: FunctionTypeFrom<'updateVehicle'>
}
 
export class IoTFleetWise implements ClientType {
  private constructor(private readonly client: AWSIoTFleetWise) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotfleetwise';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listCampaigns","listDecoderManifests","listFleets","listModelManifests","listSignalCatalogs","listVehicles"] as const;
  
  async associateVehicleFleet(...args: any): Promise<any> {
  // undefined
    return this.client.associateVehicleFleet(...args).promise()
  }

  async batchCreateVehicle(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateVehicle(...args).promise()
  }

  async batchUpdateVehicle(...args: any): Promise<any> {
  // undefined
    return this.client.batchUpdateVehicle(...args).promise()
  }

  async createCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.createCampaign(...args).promise()
  }

  async createDecoderManifest(...args: any): Promise<any> {
  // undefined
    return this.client.createDecoderManifest(...args).promise()
  }

  async createFleet(...args: any): Promise<any> {
  // undefined
    return this.client.createFleet(...args).promise()
  }

  async createModelManifest(...args: any): Promise<any> {
  // undefined
    return this.client.createModelManifest(...args).promise()
  }

  async createSignalCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.createSignalCatalog(...args).promise()
  }

  async createVehicle(...args: any): Promise<any> {
  // undefined
    return this.client.createVehicle(...args).promise()
  }

  async deleteCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCampaign(...args).promise()
  }

  async deleteDecoderManifest(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDecoderManifest(...args).promise()
  }

  async deleteFleet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleet(...args).promise()
  }

  async deleteModelManifest(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModelManifest(...args).promise()
  }

  async deleteSignalCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSignalCatalog(...args).promise()
  }

  async deleteVehicle(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVehicle(...args).promise()
  }

  async disassociateVehicleFleet(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateVehicleFleet(...args).promise()
  }

  async getCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.getCampaign(...args).promise()
  }

  async getDecoderManifest(...args: any): Promise<any> {
  // undefined
    return this.client.getDecoderManifest(...args).promise()
  }

  async getFleet(...args: any): Promise<any> {
  // undefined
    return this.client.getFleet(...args).promise()
  }

  async getLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.getLoggingOptions(...args).promise()
  }

  async getModelManifest(...args: any): Promise<any> {
  // undefined
    return this.client.getModelManifest(...args).promise()
  }

  async getRegisterAccountStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getRegisterAccountStatus(...args).promise()
  }

  async getSignalCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.getSignalCatalog(...args).promise()
  }

  async getVehicle(...args: any): Promise<any> {
  // undefined
    return this.client.getVehicle(...args).promise()
  }

  async getVehicleStatus(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"campaigns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getVehicleStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.campaigns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async importDecoderManifest(...args: any): Promise<any> {
  // undefined
    return this.client.importDecoderManifest(...args).promise()
  }

  async importSignalCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.importSignalCatalog(...args).promise()
  }

  async listCampaigns(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"campaignSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCampaigns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.campaignSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDecoderManifestNetworkInterfaces(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"networkInterfaces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDecoderManifestNetworkInterfaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.networkInterfaces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDecoderManifestSignals(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"signalDecoders"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDecoderManifestSignals(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.signalDecoders ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDecoderManifests(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDecoderManifests(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fleetSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFleets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.fleetSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleetsForVehicle(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fleets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFleetsForVehicle(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.fleets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelManifestNodes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"nodes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listModelManifestNodes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.nodes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelManifests(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listModelManifests(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSignalCatalogNodes(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"nodes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSignalCatalogNodes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.nodes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSignalCatalogs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSignalCatalogs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
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

  async listVehicles(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"vehicleSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listVehicles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.vehicleSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVehiclesInFleet(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"vehicles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listVehiclesInFleet(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.vehicles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putLoggingOptions(...args).promise()
  }

  async registerAccount(...args: any): Promise<any> {
  // undefined
    return this.client.registerAccount(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCampaign(...args: any): Promise<any> {
  // undefined
    return this.client.updateCampaign(...args).promise()
  }

  async updateDecoderManifest(...args: any): Promise<any> {
  // undefined
    return this.client.updateDecoderManifest(...args).promise()
  }

  async updateFleet(...args: any): Promise<any> {
  // undefined
    return this.client.updateFleet(...args).promise()
  }

  async updateModelManifest(...args: any): Promise<any> {
  // undefined
    return this.client.updateModelManifest(...args).promise()
  }

  async updateSignalCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.updateSignalCatalog(...args).promise()
  }

  async updateVehicle(...args: any): Promise<any> {
  // undefined
    return this.client.updateVehicle(...args).promise()
  }
  
  static fromClient(client: AWSIoTFleetWise): ClientType {
    return new IoTFleetWise(client) as any;
  }
  
  static client(options?: AWSIoTFleetWise.Types.ClientConfiguration): ClientType {
    return new IoTFleetWise(new AWSIoTFleetWise(options)) as any;
  }
}  
