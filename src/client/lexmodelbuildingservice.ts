import { Request, LexModelBuildingService as AWSLexModelBuildingService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLexModelBuildingService> = AWSLexModelBuildingService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLexModelBuildingService> = AWSLexModelBuildingService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLexModelBuildingService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLexModelBuildingService, Extras> = AWSLexModelBuildingService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLexModelBuildingService> = AWSLexModelBuildingService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LexModelBuildingService {
  private constructor(private readonly client: AWSLexModelBuildingService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'models' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["getBots","getBuiltinIntents","getBuiltinSlotTypes","getIntents","getMigrations","getSlotTypes"] as const;
  
  createBotVersion: (params: RawParamsFrom<'createBotVersion'>) => Promise<ReturnTypeFrom<'createBotVersion'>>  = async params => {
  // undefined
    return this.client.createBotVersion(params as any).promise();
  }

  createIntentVersion: (params: RawParamsFrom<'createIntentVersion'>) => Promise<ReturnTypeFrom<'createIntentVersion'>>  = async params => {
  // undefined
    return this.client.createIntentVersion(params as any).promise();
  }

  createSlotTypeVersion: (params: RawParamsFrom<'createSlotTypeVersion'>) => Promise<ReturnTypeFrom<'createSlotTypeVersion'>>  = async params => {
  // undefined
    return this.client.createSlotTypeVersion(params as any).promise();
  }

  deleteBot: (params: RawParamsFrom<'deleteBot'>) => Promise<ReturnTypeFrom<'deleteBot'>>  = async params => {
  // undefined
    return this.client.deleteBot(params as any).promise();
  }

  deleteBotAlias: (params: RawParamsFrom<'deleteBotAlias'>) => Promise<ReturnTypeFrom<'deleteBotAlias'>>  = async params => {
  // undefined
    return this.client.deleteBotAlias(params as any).promise();
  }

  deleteBotChannelAssociation: (params: RawParamsFrom<'deleteBotChannelAssociation'>) => Promise<ReturnTypeFrom<'deleteBotChannelAssociation'>>  = async params => {
  // undefined
    return this.client.deleteBotChannelAssociation(params as any).promise();
  }

  deleteBotVersion: (params: RawParamsFrom<'deleteBotVersion'>) => Promise<ReturnTypeFrom<'deleteBotVersion'>>  = async params => {
  // undefined
    return this.client.deleteBotVersion(params as any).promise();
  }

  deleteIntent: (params: RawParamsFrom<'deleteIntent'>) => Promise<ReturnTypeFrom<'deleteIntent'>>  = async params => {
  // undefined
    return this.client.deleteIntent(params as any).promise();
  }

  deleteIntentVersion: (params: RawParamsFrom<'deleteIntentVersion'>) => Promise<ReturnTypeFrom<'deleteIntentVersion'>>  = async params => {
  // undefined
    return this.client.deleteIntentVersion(params as any).promise();
  }

  deleteSlotType: (params: RawParamsFrom<'deleteSlotType'>) => Promise<ReturnTypeFrom<'deleteSlotType'>>  = async params => {
  // undefined
    return this.client.deleteSlotType(params as any).promise();
  }

  deleteSlotTypeVersion: (params: RawParamsFrom<'deleteSlotTypeVersion'>) => Promise<ReturnTypeFrom<'deleteSlotTypeVersion'>>  = async params => {
  // undefined
    return this.client.deleteSlotTypeVersion(params as any).promise();
  }

  deleteUtterances: (params: RawParamsFrom<'deleteUtterances'>) => Promise<ReturnTypeFrom<'deleteUtterances'>>  = async params => {
  // undefined
    return this.client.deleteUtterances(params as any).promise();
  }

  getBot: (params: RawParamsFrom<'getBot'>) => Promise<ReturnTypeFrom<'getBot'>>  = async params => {
  // undefined
    return this.client.getBot(params as any).promise();
  }

  getBotAlias: (params: RawParamsFrom<'getBotAlias'>) => Promise<ReturnTypeFrom<'getBotAlias'>>  = async params => {
  // undefined
    return this.client.getBotAlias(params as any).promise();
  }

  getBotAliases: (params: RawParamsFrom<'getBotAliases'>) => Promise<ReturnTypeFrom<'getBotAliases'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBotAliases(params as any).promise();
  }

  getBotChannelAssociation: (params: RawParamsFrom<'getBotChannelAssociation'>) => Promise<ReturnTypeFrom<'getBotChannelAssociation'>>  = async params => {
  // undefined
    return this.client.getBotChannelAssociation(params as any).promise();
  }

  getBotChannelAssociations: (params: RawParamsFrom<'getBotChannelAssociations'>) => Promise<ReturnTypeFrom<'getBotChannelAssociations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBotChannelAssociations(params as any).promise();
  }

  getBotVersions: (params: RawParamsFrom<'getBotVersions'>) => Promise<ReturnTypeFrom<'getBotVersions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBotVersions(params as any).promise();
  }

  getBots: (params: RawParamsFrom<'getBots'>) => Promise<ReturnTypeFrom<'getBots'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBots(params as any).promise();
  }

  getBuiltinIntent: (params: RawParamsFrom<'getBuiltinIntent'>) => Promise<ReturnTypeFrom<'getBuiltinIntent'>>  = async params => {
  // undefined
    return this.client.getBuiltinIntent(params as any).promise();
  }

  getBuiltinIntents: (params: RawParamsFrom<'getBuiltinIntents'>) => Promise<ReturnTypeFrom<'getBuiltinIntents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBuiltinIntents(params as any).promise();
  }

  getBuiltinSlotTypes: (params: RawParamsFrom<'getBuiltinSlotTypes'>) => Promise<ReturnTypeFrom<'getBuiltinSlotTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBuiltinSlotTypes(params as any).promise();
  }

  getExport: (params: RawParamsFrom<'getExport'>) => Promise<ReturnTypeFrom<'getExport'>>  = async params => {
  // undefined
    return this.client.getExport(params as any).promise();
  }

  getImport: (params: RawParamsFrom<'getImport'>) => Promise<ReturnTypeFrom<'getImport'>>  = async params => {
  // undefined
    return this.client.getImport(params as any).promise();
  }

  getIntent: (params: RawParamsFrom<'getIntent'>) => Promise<ReturnTypeFrom<'getIntent'>>  = async params => {
  // undefined
    return this.client.getIntent(params as any).promise();
  }

  getIntentVersions: (params: RawParamsFrom<'getIntentVersions'>) => Promise<ReturnTypeFrom<'getIntentVersions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getIntentVersions(params as any).promise();
  }

  getIntents: (params: RawParamsFrom<'getIntents'>) => Promise<ReturnTypeFrom<'getIntents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getIntents(params as any).promise();
  }

  getMigration: (params: RawParamsFrom<'getMigration'>) => Promise<ReturnTypeFrom<'getMigration'>>  = async params => {
  // undefined
    return this.client.getMigration(params as any).promise();
  }

  getMigrations: (params: RawParamsFrom<'getMigrations'>) => Promise<ReturnTypeFrom<'getMigrations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getMigrations(params as any).promise();
  }

  getSlotType: (params: RawParamsFrom<'getSlotType'>) => Promise<ReturnTypeFrom<'getSlotType'>>  = async params => {
  // undefined
    return this.client.getSlotType(params as any).promise();
  }

  getSlotTypeVersions: (params: RawParamsFrom<'getSlotTypeVersions'>) => Promise<ReturnTypeFrom<'getSlotTypeVersions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getSlotTypeVersions(params as any).promise();
  }

  getSlotTypes: (params: RawParamsFrom<'getSlotTypes'>) => Promise<ReturnTypeFrom<'getSlotTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getSlotTypes(params as any).promise();
  }

  getUtterancesView: (params: RawParamsFrom<'getUtterancesView'>) => Promise<ReturnTypeFrom<'getUtterancesView'>>  = async params => {
  // undefined
    return this.client.getUtterancesView(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putBot: (params: RawParamsFrom<'putBot'>) => Promise<ReturnTypeFrom<'putBot'>>  = async params => {
  // undefined
    return this.client.putBot(params as any).promise();
  }

  putBotAlias: (params: RawParamsFrom<'putBotAlias'>) => Promise<ReturnTypeFrom<'putBotAlias'>>  = async params => {
  // undefined
    return this.client.putBotAlias(params as any).promise();
  }

  putIntent: (params: RawParamsFrom<'putIntent'>) => Promise<ReturnTypeFrom<'putIntent'>>  = async params => {
  // undefined
    return this.client.putIntent(params as any).promise();
  }

  putSlotType: (params: RawParamsFrom<'putSlotType'>) => Promise<ReturnTypeFrom<'putSlotType'>>  = async params => {
  // undefined
    return this.client.putSlotType(params as any).promise();
  }

  startImport: (params: RawParamsFrom<'startImport'>) => Promise<ReturnTypeFrom<'startImport'>>  = async params => {
  // undefined
    return this.client.startImport(params as any).promise();
  }

  startMigration: (params: RawParamsFrom<'startMigration'>) => Promise<ReturnTypeFrom<'startMigration'>>  = async params => {
  // undefined
    return this.client.startMigration(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSLexModelBuildingService): LexModelBuildingService {
    return new LexModelBuildingService(client) as any;
  }
  
  static client(options?: AWSLexModelBuildingService.Types.ClientConfiguration): LexModelBuildingService {
    return new LexModelBuildingService(new AWSLexModelBuildingService(options)) as any;
  }
}  
