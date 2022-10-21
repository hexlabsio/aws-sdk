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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTFleetWise> = AWSIoTFleetWise[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTFleetWise {
  private constructor(private readonly client: AWSIoTFleetWise) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotfleetwise' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listCampaigns","listDecoderManifests","listFleets","listModelManifests","listSignalCatalogs","listVehicles"] as const;
  
  associateVehicleFleet: (params: RawParamsFrom<'associateVehicleFleet'>) => Promise<ReturnTypeFrom<'associateVehicleFleet'>>  = async params => {
  // undefined
    return this.client.associateVehicleFleet(params as any).promise();
  }

  batchCreateVehicle: (params: RawParamsFrom<'batchCreateVehicle'>) => Promise<ReturnTypeFrom<'batchCreateVehicle'>>  = async params => {
  // undefined
    return this.client.batchCreateVehicle(params as any).promise();
  }

  batchUpdateVehicle: (params: RawParamsFrom<'batchUpdateVehicle'>) => Promise<ReturnTypeFrom<'batchUpdateVehicle'>>  = async params => {
  // undefined
    return this.client.batchUpdateVehicle(params as any).promise();
  }

  createCampaign: (params: RawParamsFrom<'createCampaign'>) => Promise<ReturnTypeFrom<'createCampaign'>>  = async params => {
  // undefined
    return this.client.createCampaign(params as any).promise();
  }

  createDecoderManifest: (params: RawParamsFrom<'createDecoderManifest'>) => Promise<ReturnTypeFrom<'createDecoderManifest'>>  = async params => {
  // undefined
    return this.client.createDecoderManifest(params as any).promise();
  }

  createFleet: (params: RawParamsFrom<'createFleet'>) => Promise<ReturnTypeFrom<'createFleet'>>  = async params => {
  // undefined
    return this.client.createFleet(params as any).promise();
  }

  createModelManifest: (params: RawParamsFrom<'createModelManifest'>) => Promise<ReturnTypeFrom<'createModelManifest'>>  = async params => {
  // undefined
    return this.client.createModelManifest(params as any).promise();
  }

  createSignalCatalog: (params: RawParamsFrom<'createSignalCatalog'>) => Promise<ReturnTypeFrom<'createSignalCatalog'>>  = async params => {
  // undefined
    return this.client.createSignalCatalog(params as any).promise();
  }

  createVehicle: (params: RawParamsFrom<'createVehicle'>) => Promise<ReturnTypeFrom<'createVehicle'>>  = async params => {
  // undefined
    return this.client.createVehicle(params as any).promise();
  }

  deleteCampaign: (params: RawParamsFrom<'deleteCampaign'>) => Promise<ReturnTypeFrom<'deleteCampaign'>>  = async params => {
  // undefined
    return this.client.deleteCampaign(params as any).promise();
  }

  deleteDecoderManifest: (params: RawParamsFrom<'deleteDecoderManifest'>) => Promise<ReturnTypeFrom<'deleteDecoderManifest'>>  = async params => {
  // undefined
    return this.client.deleteDecoderManifest(params as any).promise();
  }

  deleteFleet: (params: RawParamsFrom<'deleteFleet'>) => Promise<ReturnTypeFrom<'deleteFleet'>>  = async params => {
  // undefined
    return this.client.deleteFleet(params as any).promise();
  }

  deleteModelManifest: (params: RawParamsFrom<'deleteModelManifest'>) => Promise<ReturnTypeFrom<'deleteModelManifest'>>  = async params => {
  // undefined
    return this.client.deleteModelManifest(params as any).promise();
  }

  deleteSignalCatalog: (params: RawParamsFrom<'deleteSignalCatalog'>) => Promise<ReturnTypeFrom<'deleteSignalCatalog'>>  = async params => {
  // undefined
    return this.client.deleteSignalCatalog(params as any).promise();
  }

  deleteVehicle: (params: RawParamsFrom<'deleteVehicle'>) => Promise<ReturnTypeFrom<'deleteVehicle'>>  = async params => {
  // undefined
    return this.client.deleteVehicle(params as any).promise();
  }

  disassociateVehicleFleet: (params: RawParamsFrom<'disassociateVehicleFleet'>) => Promise<ReturnTypeFrom<'disassociateVehicleFleet'>>  = async params => {
  // undefined
    return this.client.disassociateVehicleFleet(params as any).promise();
  }

  getCampaign: (params: RawParamsFrom<'getCampaign'>) => Promise<ReturnTypeFrom<'getCampaign'>>  = async params => {
  // undefined
    return this.client.getCampaign(params as any).promise();
  }

  getDecoderManifest: (params: RawParamsFrom<'getDecoderManifest'>) => Promise<ReturnTypeFrom<'getDecoderManifest'>>  = async params => {
  // undefined
    return this.client.getDecoderManifest(params as any).promise();
  }

  getFleet: (params: RawParamsFrom<'getFleet'>) => Promise<ReturnTypeFrom<'getFleet'>>  = async params => {
  // undefined
    return this.client.getFleet(params as any).promise();
  }

  getLoggingOptions: (params: RawParamsFrom<'getLoggingOptions'>) => Promise<ReturnTypeFrom<'getLoggingOptions'>>  = async params => {
  // undefined
    return this.client.getLoggingOptions(params as any).promise();
  }

  getModelManifest: (params: RawParamsFrom<'getModelManifest'>) => Promise<ReturnTypeFrom<'getModelManifest'>>  = async params => {
  // undefined
    return this.client.getModelManifest(params as any).promise();
  }

  getRegisterAccountStatus: (params: RawParamsFrom<'getRegisterAccountStatus'>) => Promise<ReturnTypeFrom<'getRegisterAccountStatus'>>  = async params => {
  // undefined
    return this.client.getRegisterAccountStatus(params as any).promise();
  }

  getSignalCatalog: (params: RawParamsFrom<'getSignalCatalog'>) => Promise<ReturnTypeFrom<'getSignalCatalog'>>  = async params => {
  // undefined
    return this.client.getSignalCatalog(params as any).promise();
  }

  getVehicle: (params: RawParamsFrom<'getVehicle'>) => Promise<ReturnTypeFrom<'getVehicle'>>  = async params => {
  // undefined
    return this.client.getVehicle(params as any).promise();
  }

  async getVehicleStatus(params: { [K in keyof ParamsFrom<'getVehicleStatus', { next?: string, limit?: number }>]: ParamsFrom<'getVehicleStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getVehicleStatus'>]-?: ReturnTypeFrom<'getVehicleStatus'>[K]}['campaigns'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"campaigns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getVehicleStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getVehicleStatus' })).toString('base64');
    const member = (Array.isArray(result.campaigns ?? []) ? (result.campaigns ?? []) : [result.campaigns]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  importDecoderManifest: (params: RawParamsFrom<'importDecoderManifest'>) => Promise<ReturnTypeFrom<'importDecoderManifest'>>  = async params => {
  // undefined
    return this.client.importDecoderManifest(params as any).promise();
  }

  importSignalCatalog: (params: RawParamsFrom<'importSignalCatalog'>) => Promise<ReturnTypeFrom<'importSignalCatalog'>>  = async params => {
  // undefined
    return this.client.importSignalCatalog(params as any).promise();
  }

  async listCampaigns(params: { [K in keyof ParamsFrom<'listCampaigns', { next?: string, limit?: number }>]: ParamsFrom<'listCampaigns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCampaigns'>]-?: ReturnTypeFrom<'listCampaigns'>[K]}['campaignSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"campaignSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCampaigns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCampaigns' })).toString('base64');
    const member = (Array.isArray(result.campaignSummaries ?? []) ? (result.campaignSummaries ?? []) : [result.campaignSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDecoderManifestNetworkInterfaces(params: { [K in keyof ParamsFrom<'listDecoderManifestNetworkInterfaces', { next?: string, limit?: number }>]: ParamsFrom<'listDecoderManifestNetworkInterfaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDecoderManifestNetworkInterfaces'>]-?: ReturnTypeFrom<'listDecoderManifestNetworkInterfaces'>[K]}['networkInterfaces'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"networkInterfaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDecoderManifestNetworkInterfaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDecoderManifestNetworkInterfaces' })).toString('base64');
    const member = (Array.isArray(result.networkInterfaces ?? []) ? (result.networkInterfaces ?? []) : [result.networkInterfaces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDecoderManifestSignals(params: { [K in keyof ParamsFrom<'listDecoderManifestSignals', { next?: string, limit?: number }>]: ParamsFrom<'listDecoderManifestSignals', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDecoderManifestSignals'>]-?: ReturnTypeFrom<'listDecoderManifestSignals'>[K]}['signalDecoders'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"signalDecoders"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDecoderManifestSignals({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDecoderManifestSignals' })).toString('base64');
    const member = (Array.isArray(result.signalDecoders ?? []) ? (result.signalDecoders ?? []) : [result.signalDecoders]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDecoderManifests(params: { [K in keyof ParamsFrom<'listDecoderManifests', { next?: string, limit?: number }>]: ParamsFrom<'listDecoderManifests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDecoderManifests'>]-?: ReturnTypeFrom<'listDecoderManifests'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDecoderManifests({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDecoderManifests' })).toString('base64');
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleets(params: { [K in keyof ParamsFrom<'listFleets', { next?: string, limit?: number }>]: ParamsFrom<'listFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['fleetSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fleetSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFleets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFleets' })).toString('base64');
    const member = (Array.isArray(result.fleetSummaries ?? []) ? (result.fleetSummaries ?? []) : [result.fleetSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleetsForVehicle(params: { [K in keyof ParamsFrom<'listFleetsForVehicle', { next?: string, limit?: number }>]: ParamsFrom<'listFleetsForVehicle', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFleetsForVehicle'>]-?: ReturnTypeFrom<'listFleetsForVehicle'>[K]}['fleets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fleets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFleetsForVehicle({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFleetsForVehicle' })).toString('base64');
    const member = (Array.isArray(result.fleets ?? []) ? (result.fleets ?? []) : [result.fleets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelManifestNodes(params: { [K in keyof ParamsFrom<'listModelManifestNodes', { next?: string, limit?: number }>]: ParamsFrom<'listModelManifestNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelManifestNodes'>]-?: ReturnTypeFrom<'listModelManifestNodes'>[K]}['nodes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"nodes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listModelManifestNodes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listModelManifestNodes' })).toString('base64');
    const member = (Array.isArray(result.nodes ?? []) ? (result.nodes ?? []) : [result.nodes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listModelManifests(params: { [K in keyof ParamsFrom<'listModelManifests', { next?: string, limit?: number }>]: ParamsFrom<'listModelManifests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listModelManifests'>]-?: ReturnTypeFrom<'listModelManifests'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listModelManifests({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listModelManifests' })).toString('base64');
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSignalCatalogNodes(params: { [K in keyof ParamsFrom<'listSignalCatalogNodes', { next?: string, limit?: number }>]: ParamsFrom<'listSignalCatalogNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSignalCatalogNodes'>]-?: ReturnTypeFrom<'listSignalCatalogNodes'>[K]}['nodes'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"nodes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSignalCatalogNodes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSignalCatalogNodes' })).toString('base64');
    const member = (Array.isArray(result.nodes ?? []) ? (result.nodes ?? []) : [result.nodes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSignalCatalogs(params: { [K in keyof ParamsFrom<'listSignalCatalogs', { next?: string, limit?: number }>]: ParamsFrom<'listSignalCatalogs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSignalCatalogs'>]-?: ReturnTypeFrom<'listSignalCatalogs'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSignalCatalogs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSignalCatalogs' })).toString('base64');
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
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

  async listVehicles(params: { [K in keyof ParamsFrom<'listVehicles', { next?: string, limit?: number }>]: ParamsFrom<'listVehicles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVehicles'>]-?: ReturnTypeFrom<'listVehicles'>[K]}['vehicleSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"vehicleSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listVehicles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listVehicles' })).toString('base64');
    const member = (Array.isArray(result.vehicleSummaries ?? []) ? (result.vehicleSummaries ?? []) : [result.vehicleSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVehiclesInFleet(params: { [K in keyof ParamsFrom<'listVehiclesInFleet', { next?: string, limit?: number }>]: ParamsFrom<'listVehiclesInFleet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVehiclesInFleet'>]-?: ReturnTypeFrom<'listVehiclesInFleet'>[K]}['vehicles'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"vehicles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listVehiclesInFleet({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listVehiclesInFleet' })).toString('base64');
    const member = (Array.isArray(result.vehicles ?? []) ? (result.vehicles ?? []) : [result.vehicles]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putLoggingOptions: (params: RawParamsFrom<'putLoggingOptions'>) => Promise<ReturnTypeFrom<'putLoggingOptions'>>  = async params => {
  // undefined
    return this.client.putLoggingOptions(params as any).promise();
  }

  registerAccount: (params: RawParamsFrom<'registerAccount'>) => Promise<ReturnTypeFrom<'registerAccount'>>  = async params => {
  // undefined
    return this.client.registerAccount(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCampaign: (params: RawParamsFrom<'updateCampaign'>) => Promise<ReturnTypeFrom<'updateCampaign'>>  = async params => {
  // undefined
    return this.client.updateCampaign(params as any).promise();
  }

  updateDecoderManifest: (params: RawParamsFrom<'updateDecoderManifest'>) => Promise<ReturnTypeFrom<'updateDecoderManifest'>>  = async params => {
  // undefined
    return this.client.updateDecoderManifest(params as any).promise();
  }

  updateFleet: (params: RawParamsFrom<'updateFleet'>) => Promise<ReturnTypeFrom<'updateFleet'>>  = async params => {
  // undefined
    return this.client.updateFleet(params as any).promise();
  }

  updateModelManifest: (params: RawParamsFrom<'updateModelManifest'>) => Promise<ReturnTypeFrom<'updateModelManifest'>>  = async params => {
  // undefined
    return this.client.updateModelManifest(params as any).promise();
  }

  updateSignalCatalog: (params: RawParamsFrom<'updateSignalCatalog'>) => Promise<ReturnTypeFrom<'updateSignalCatalog'>>  = async params => {
  // undefined
    return this.client.updateSignalCatalog(params as any).promise();
  }

  updateVehicle: (params: RawParamsFrom<'updateVehicle'>) => Promise<ReturnTypeFrom<'updateVehicle'>>  = async params => {
  // undefined
    return this.client.updateVehicle(params as any).promise();
  }
  
  static fromClient(client: AWSIoTFleetWise): IoTFleetWise {
    return new IoTFleetWise(client) as any;
  }
  
  static client(options?: AWSIoTFleetWise.Types.ClientConfiguration): IoTFleetWise {
    return new IoTFleetWise(new AWSIoTFleetWise(options)) as any;
  }
}  
