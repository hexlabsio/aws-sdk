import { Request, LexModelsV2 as AWSLexModelsV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLexModelsV2> = AWSLexModelsV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLexModelsV2> = AWSLexModelsV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLexModelsV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLexModelsV2, Extras> = AWSLexModelsV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLexModelsV2> = AWSLexModelsV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LexModelsV2 {
  private constructor(private readonly client: AWSLexModelsV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'models-v2-lex' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listBots","listExports","listImports"] as const;
  
  buildBotLocale: (params: RawParamsFrom<'buildBotLocale'>) => Promise<ReturnTypeFrom<'buildBotLocale'>>  = async params => {
  // undefined
    return this.client.buildBotLocale(params as any).promise();
  }

  createBot: (params: RawParamsFrom<'createBot'>) => Promise<ReturnTypeFrom<'createBot'>>  = async params => {
  // undefined
    return this.client.createBot(params as any).promise();
  }

  createBotAlias: (params: RawParamsFrom<'createBotAlias'>) => Promise<ReturnTypeFrom<'createBotAlias'>>  = async params => {
  // undefined
    return this.client.createBotAlias(params as any).promise();
  }

  createBotLocale: (params: RawParamsFrom<'createBotLocale'>) => Promise<ReturnTypeFrom<'createBotLocale'>>  = async params => {
  // undefined
    return this.client.createBotLocale(params as any).promise();
  }

  createBotVersion: (params: RawParamsFrom<'createBotVersion'>) => Promise<ReturnTypeFrom<'createBotVersion'>>  = async params => {
  // undefined
    return this.client.createBotVersion(params as any).promise();
  }

  createExport: (params: RawParamsFrom<'createExport'>) => Promise<ReturnTypeFrom<'createExport'>>  = async params => {
  // undefined
    return this.client.createExport(params as any).promise();
  }

  createIntent: (params: RawParamsFrom<'createIntent'>) => Promise<ReturnTypeFrom<'createIntent'>>  = async params => {
  // undefined
    return this.client.createIntent(params as any).promise();
  }

  createResourcePolicy: (params: RawParamsFrom<'createResourcePolicy'>) => Promise<ReturnTypeFrom<'createResourcePolicy'>>  = async params => {
  // undefined
    return this.client.createResourcePolicy(params as any).promise();
  }

  createResourcePolicyStatement: (params: RawParamsFrom<'createResourcePolicyStatement'>) => Promise<ReturnTypeFrom<'createResourcePolicyStatement'>>  = async params => {
  // undefined
    return this.client.createResourcePolicyStatement(params as any).promise();
  }

  createSlot: (params: RawParamsFrom<'createSlot'>) => Promise<ReturnTypeFrom<'createSlot'>>  = async params => {
  // undefined
    return this.client.createSlot(params as any).promise();
  }

  createSlotType: (params: RawParamsFrom<'createSlotType'>) => Promise<ReturnTypeFrom<'createSlotType'>>  = async params => {
  // undefined
    return this.client.createSlotType(params as any).promise();
  }

  createUploadUrl: (params: RawParamsFrom<'createUploadUrl'>) => Promise<ReturnTypeFrom<'createUploadUrl'>>  = async params => {
  // undefined
    return this.client.createUploadUrl(params as any).promise();
  }

  deleteBot: (params: RawParamsFrom<'deleteBot'>) => Promise<ReturnTypeFrom<'deleteBot'>>  = async params => {
  // undefined
    return this.client.deleteBot(params as any).promise();
  }

  deleteBotAlias: (params: RawParamsFrom<'deleteBotAlias'>) => Promise<ReturnTypeFrom<'deleteBotAlias'>>  = async params => {
  // undefined
    return this.client.deleteBotAlias(params as any).promise();
  }

  deleteBotLocale: (params: RawParamsFrom<'deleteBotLocale'>) => Promise<ReturnTypeFrom<'deleteBotLocale'>>  = async params => {
  // undefined
    return this.client.deleteBotLocale(params as any).promise();
  }

  deleteBotVersion: (params: RawParamsFrom<'deleteBotVersion'>) => Promise<ReturnTypeFrom<'deleteBotVersion'>>  = async params => {
  // undefined
    return this.client.deleteBotVersion(params as any).promise();
  }

  deleteCustomVocabulary: (params: RawParamsFrom<'deleteCustomVocabulary'>) => Promise<ReturnTypeFrom<'deleteCustomVocabulary'>>  = async params => {
  // undefined
    return this.client.deleteCustomVocabulary(params as any).promise();
  }

  deleteExport: (params: RawParamsFrom<'deleteExport'>) => Promise<ReturnTypeFrom<'deleteExport'>>  = async params => {
  // undefined
    return this.client.deleteExport(params as any).promise();
  }

  deleteImport: (params: RawParamsFrom<'deleteImport'>) => Promise<ReturnTypeFrom<'deleteImport'>>  = async params => {
  // undefined
    return this.client.deleteImport(params as any).promise();
  }

  deleteIntent: (params: RawParamsFrom<'deleteIntent'>) => Promise<ReturnTypeFrom<'deleteIntent'>>  = async params => {
  // undefined
    return this.client.deleteIntent(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteResourcePolicyStatement: (params: RawParamsFrom<'deleteResourcePolicyStatement'>) => Promise<ReturnTypeFrom<'deleteResourcePolicyStatement'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicyStatement(params as any).promise();
  }

  deleteSlot: (params: RawParamsFrom<'deleteSlot'>) => Promise<ReturnTypeFrom<'deleteSlot'>>  = async params => {
  // undefined
    return this.client.deleteSlot(params as any).promise();
  }

  deleteSlotType: (params: RawParamsFrom<'deleteSlotType'>) => Promise<ReturnTypeFrom<'deleteSlotType'>>  = async params => {
  // undefined
    return this.client.deleteSlotType(params as any).promise();
  }

  deleteUtterances: (params: RawParamsFrom<'deleteUtterances'>) => Promise<ReturnTypeFrom<'deleteUtterances'>>  = async params => {
  // undefined
    return this.client.deleteUtterances(params as any).promise();
  }

  describeBot: (params: RawParamsFrom<'describeBot'>) => Promise<ReturnTypeFrom<'describeBot'>>  = async params => {
  // undefined
    return this.client.describeBot(params as any).promise();
  }

  describeBotAlias: (params: RawParamsFrom<'describeBotAlias'>) => Promise<ReturnTypeFrom<'describeBotAlias'>>  = async params => {
  // undefined
    return this.client.describeBotAlias(params as any).promise();
  }

  describeBotLocale: (params: RawParamsFrom<'describeBotLocale'>) => Promise<ReturnTypeFrom<'describeBotLocale'>>  = async params => {
  // undefined
    return this.client.describeBotLocale(params as any).promise();
  }

  describeBotRecommendation: (params: RawParamsFrom<'describeBotRecommendation'>) => Promise<ReturnTypeFrom<'describeBotRecommendation'>>  = async params => {
  // undefined
    return this.client.describeBotRecommendation(params as any).promise();
  }

  describeBotVersion: (params: RawParamsFrom<'describeBotVersion'>) => Promise<ReturnTypeFrom<'describeBotVersion'>>  = async params => {
  // undefined
    return this.client.describeBotVersion(params as any).promise();
  }

  describeCustomVocabularyMetadata: (params: RawParamsFrom<'describeCustomVocabularyMetadata'>) => Promise<ReturnTypeFrom<'describeCustomVocabularyMetadata'>>  = async params => {
  // undefined
    return this.client.describeCustomVocabularyMetadata(params as any).promise();
  }

  describeExport: (params: RawParamsFrom<'describeExport'>) => Promise<ReturnTypeFrom<'describeExport'>>  = async params => {
  // undefined
    return this.client.describeExport(params as any).promise();
  }

  describeImport: (params: RawParamsFrom<'describeImport'>) => Promise<ReturnTypeFrom<'describeImport'>>  = async params => {
  // undefined
    return this.client.describeImport(params as any).promise();
  }

  describeIntent: (params: RawParamsFrom<'describeIntent'>) => Promise<ReturnTypeFrom<'describeIntent'>>  = async params => {
  // undefined
    return this.client.describeIntent(params as any).promise();
  }

  describeResourcePolicy: (params: RawParamsFrom<'describeResourcePolicy'>) => Promise<ReturnTypeFrom<'describeResourcePolicy'>>  = async params => {
  // undefined
    return this.client.describeResourcePolicy(params as any).promise();
  }

  describeSlot: (params: RawParamsFrom<'describeSlot'>) => Promise<ReturnTypeFrom<'describeSlot'>>  = async params => {
  // undefined
    return this.client.describeSlot(params as any).promise();
  }

  describeSlotType: (params: RawParamsFrom<'describeSlotType'>) => Promise<ReturnTypeFrom<'describeSlotType'>>  = async params => {
  // undefined
    return this.client.describeSlotType(params as any).promise();
  }

  listAggregatedUtterances: (params: RawParamsFrom<'listAggregatedUtterances'>) => Promise<ReturnTypeFrom<'listAggregatedUtterances'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAggregatedUtterances(params as any).promise();
  }

  listBotAliases: (params: RawParamsFrom<'listBotAliases'>) => Promise<ReturnTypeFrom<'listBotAliases'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBotAliases(params as any).promise();
  }

  listBotLocales: (params: RawParamsFrom<'listBotLocales'>) => Promise<ReturnTypeFrom<'listBotLocales'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBotLocales(params as any).promise();
  }

  listBotRecommendations: (params: RawParamsFrom<'listBotRecommendations'>) => Promise<ReturnTypeFrom<'listBotRecommendations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBotRecommendations(params as any).promise();
  }

  listBotVersions: (params: RawParamsFrom<'listBotVersions'>) => Promise<ReturnTypeFrom<'listBotVersions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBotVersions(params as any).promise();
  }

  listBots: (params: RawParamsFrom<'listBots'>) => Promise<ReturnTypeFrom<'listBots'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBots(params as any).promise();
  }

  listBuiltInIntents: (params: RawParamsFrom<'listBuiltInIntents'>) => Promise<ReturnTypeFrom<'listBuiltInIntents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBuiltInIntents(params as any).promise();
  }

  listBuiltInSlotTypes: (params: RawParamsFrom<'listBuiltInSlotTypes'>) => Promise<ReturnTypeFrom<'listBuiltInSlotTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBuiltInSlotTypes(params as any).promise();
  }

  listExports: (params: RawParamsFrom<'listExports'>) => Promise<ReturnTypeFrom<'listExports'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listExports(params as any).promise();
  }

  listImports: (params: RawParamsFrom<'listImports'>) => Promise<ReturnTypeFrom<'listImports'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listImports(params as any).promise();
  }

  listIntents: (params: RawParamsFrom<'listIntents'>) => Promise<ReturnTypeFrom<'listIntents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listIntents(params as any).promise();
  }

  listRecommendedIntents: (params: RawParamsFrom<'listRecommendedIntents'>) => Promise<ReturnTypeFrom<'listRecommendedIntents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRecommendedIntents(params as any).promise();
  }

  listSlotTypes: (params: RawParamsFrom<'listSlotTypes'>) => Promise<ReturnTypeFrom<'listSlotTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSlotTypes(params as any).promise();
  }

  listSlots: (params: RawParamsFrom<'listSlots'>) => Promise<ReturnTypeFrom<'listSlots'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSlots(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  searchAssociatedTranscripts: (params: RawParamsFrom<'searchAssociatedTranscripts'>) => Promise<ReturnTypeFrom<'searchAssociatedTranscripts'>>  = async params => {
  // undefined
    return this.client.searchAssociatedTranscripts(params as any).promise();
  }

  startBotRecommendation: (params: RawParamsFrom<'startBotRecommendation'>) => Promise<ReturnTypeFrom<'startBotRecommendation'>>  = async params => {
  // undefined
    return this.client.startBotRecommendation(params as any).promise();
  }

  startImport: (params: RawParamsFrom<'startImport'>) => Promise<ReturnTypeFrom<'startImport'>>  = async params => {
  // undefined
    return this.client.startImport(params as any).promise();
  }

  stopBotRecommendation: (params: RawParamsFrom<'stopBotRecommendation'>) => Promise<ReturnTypeFrom<'stopBotRecommendation'>>  = async params => {
  // undefined
    return this.client.stopBotRecommendation(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateBot: (params: RawParamsFrom<'updateBot'>) => Promise<ReturnTypeFrom<'updateBot'>>  = async params => {
  // undefined
    return this.client.updateBot(params as any).promise();
  }

  updateBotAlias: (params: RawParamsFrom<'updateBotAlias'>) => Promise<ReturnTypeFrom<'updateBotAlias'>>  = async params => {
  // undefined
    return this.client.updateBotAlias(params as any).promise();
  }

  updateBotLocale: (params: RawParamsFrom<'updateBotLocale'>) => Promise<ReturnTypeFrom<'updateBotLocale'>>  = async params => {
  // undefined
    return this.client.updateBotLocale(params as any).promise();
  }

  updateBotRecommendation: (params: RawParamsFrom<'updateBotRecommendation'>) => Promise<ReturnTypeFrom<'updateBotRecommendation'>>  = async params => {
  // undefined
    return this.client.updateBotRecommendation(params as any).promise();
  }

  updateExport: (params: RawParamsFrom<'updateExport'>) => Promise<ReturnTypeFrom<'updateExport'>>  = async params => {
  // undefined
    return this.client.updateExport(params as any).promise();
  }

  updateIntent: (params: RawParamsFrom<'updateIntent'>) => Promise<ReturnTypeFrom<'updateIntent'>>  = async params => {
  // undefined
    return this.client.updateIntent(params as any).promise();
  }

  updateResourcePolicy: (params: RawParamsFrom<'updateResourcePolicy'>) => Promise<ReturnTypeFrom<'updateResourcePolicy'>>  = async params => {
  // undefined
    return this.client.updateResourcePolicy(params as any).promise();
  }

  updateSlot: (params: RawParamsFrom<'updateSlot'>) => Promise<ReturnTypeFrom<'updateSlot'>>  = async params => {
  // undefined
    return this.client.updateSlot(params as any).promise();
  }

  updateSlotType: (params: RawParamsFrom<'updateSlotType'>) => Promise<ReturnTypeFrom<'updateSlotType'>>  = async params => {
  // undefined
    return this.client.updateSlotType(params as any).promise();
  }
  
  static fromClient(client: AWSLexModelsV2): LexModelsV2 {
    return new LexModelsV2(client) as any;
  }
  
  static client(options?: AWSLexModelsV2.Types.ClientConfiguration): LexModelsV2 {
    return new LexModelsV2(new AWSLexModelsV2(options)) as any;
  }
}  
