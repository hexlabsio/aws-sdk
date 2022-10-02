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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'models-v2-lex';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listBots","listExports","listImports"];
    
  buildBotLocale: FunctionTypeFrom<'buildBotLocale'>;

  createBot: FunctionTypeFrom<'createBot'>;

  createBotAlias: FunctionTypeFrom<'createBotAlias'>;

  createBotLocale: FunctionTypeFrom<'createBotLocale'>;

  createBotVersion: FunctionTypeFrom<'createBotVersion'>;

  createExport: FunctionTypeFrom<'createExport'>;

  createIntent: FunctionTypeFrom<'createIntent'>;

  createResourcePolicy: FunctionTypeFrom<'createResourcePolicy'>;

  createResourcePolicyStatement: FunctionTypeFrom<'createResourcePolicyStatement'>;

  createSlot: FunctionTypeFrom<'createSlot'>;

  createSlotType: FunctionTypeFrom<'createSlotType'>;

  createUploadUrl: FunctionTypeFrom<'createUploadUrl'>;

  deleteBot: FunctionTypeFrom<'deleteBot'>;

  deleteBotAlias: FunctionTypeFrom<'deleteBotAlias'>;

  deleteBotLocale: FunctionTypeFrom<'deleteBotLocale'>;

  deleteBotVersion: FunctionTypeFrom<'deleteBotVersion'>;

  deleteCustomVocabulary: FunctionTypeFrom<'deleteCustomVocabulary'>;

  deleteExport: FunctionTypeFrom<'deleteExport'>;

  deleteImport: FunctionTypeFrom<'deleteImport'>;

  deleteIntent: FunctionTypeFrom<'deleteIntent'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteResourcePolicyStatement: FunctionTypeFrom<'deleteResourcePolicyStatement'>;

  deleteSlot: FunctionTypeFrom<'deleteSlot'>;

  deleteSlotType: FunctionTypeFrom<'deleteSlotType'>;

  deleteUtterances: FunctionTypeFrom<'deleteUtterances'>;

  describeBot: FunctionTypeFrom<'describeBot'>;

  describeBotAlias: FunctionTypeFrom<'describeBotAlias'>;

  describeBotLocale: FunctionTypeFrom<'describeBotLocale'>;

  describeBotRecommendation: FunctionTypeFrom<'describeBotRecommendation'>;

  describeBotVersion: FunctionTypeFrom<'describeBotVersion'>;

  describeCustomVocabularyMetadata: FunctionTypeFrom<'describeCustomVocabularyMetadata'>;

  describeExport: FunctionTypeFrom<'describeExport'>;

  describeImport: FunctionTypeFrom<'describeImport'>;

  describeIntent: FunctionTypeFrom<'describeIntent'>;

  describeResourcePolicy: FunctionTypeFrom<'describeResourcePolicy'>;

  describeSlot: FunctionTypeFrom<'describeSlot'>;

  describeSlotType: FunctionTypeFrom<'describeSlotType'>;

  listAggregatedUtterances: FunctionTypeFrom<'listAggregatedUtterances'>;

  listBotAliases: FunctionTypeFrom<'listBotAliases'>;

  listBotLocales: FunctionTypeFrom<'listBotLocales'>;

  listBotRecommendations: FunctionTypeFrom<'listBotRecommendations'>;

  listBotVersions: FunctionTypeFrom<'listBotVersions'>;

  listBots: FunctionTypeFrom<'listBots'>;

  listBuiltInIntents: FunctionTypeFrom<'listBuiltInIntents'>;

  listBuiltInSlotTypes: FunctionTypeFrom<'listBuiltInSlotTypes'>;

  listExports: FunctionTypeFrom<'listExports'>;

  listImports: FunctionTypeFrom<'listImports'>;

  listIntents: FunctionTypeFrom<'listIntents'>;

  listRecommendedIntents: FunctionTypeFrom<'listRecommendedIntents'>;

  listSlotTypes: FunctionTypeFrom<'listSlotTypes'>;

  listSlots: FunctionTypeFrom<'listSlots'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  searchAssociatedTranscripts: FunctionTypeFrom<'searchAssociatedTranscripts'>;

  startBotRecommendation: FunctionTypeFrom<'startBotRecommendation'>;

  startImport: FunctionTypeFrom<'startImport'>;

  stopBotRecommendation: FunctionTypeFrom<'stopBotRecommendation'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateBot: FunctionTypeFrom<'updateBot'>;

  updateBotAlias: FunctionTypeFrom<'updateBotAlias'>;

  updateBotLocale: FunctionTypeFrom<'updateBotLocale'>;

  updateBotRecommendation: FunctionTypeFrom<'updateBotRecommendation'>;

  updateExport: FunctionTypeFrom<'updateExport'>;

  updateIntent: FunctionTypeFrom<'updateIntent'>;

  updateResourcePolicy: FunctionTypeFrom<'updateResourcePolicy'>;

  updateSlot: FunctionTypeFrom<'updateSlot'>;

  updateSlotType: FunctionTypeFrom<'updateSlotType'>
}
 
export class LexModelsV2 implements ClientType {
  private constructor(private readonly client: AWSLexModelsV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'models-v2-lex';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listBots","listExports","listImports"] as const;
  
  async buildBotLocale(...args: any): Promise<any> {
  // undefined
    return this.client.buildBotLocale(...args).promise()
  }

  async createBot(...args: any): Promise<any> {
  // undefined
    return this.client.createBot(...args).promise()
  }

  async createBotAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createBotAlias(...args).promise()
  }

  async createBotLocale(...args: any): Promise<any> {
  // undefined
    return this.client.createBotLocale(...args).promise()
  }

  async createBotVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createBotVersion(...args).promise()
  }

  async createExport(...args: any): Promise<any> {
  // undefined
    return this.client.createExport(...args).promise()
  }

  async createIntent(...args: any): Promise<any> {
  // undefined
    return this.client.createIntent(...args).promise()
  }

  async createResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createResourcePolicy(...args).promise()
  }

  async createResourcePolicyStatement(...args: any): Promise<any> {
  // undefined
    return this.client.createResourcePolicyStatement(...args).promise()
  }

  async createSlot(...args: any): Promise<any> {
  // undefined
    return this.client.createSlot(...args).promise()
  }

  async createSlotType(...args: any): Promise<any> {
  // undefined
    return this.client.createSlotType(...args).promise()
  }

  async createUploadUrl(...args: any): Promise<any> {
  // undefined
    return this.client.createUploadUrl(...args).promise()
  }

  async deleteBot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBot(...args).promise()
  }

  async deleteBotAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBotAlias(...args).promise()
  }

  async deleteBotLocale(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBotLocale(...args).promise()
  }

  async deleteBotVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBotVersion(...args).promise()
  }

  async deleteCustomVocabulary(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomVocabulary(...args).promise()
  }

  async deleteExport(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExport(...args).promise()
  }

  async deleteImport(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImport(...args).promise()
  }

  async deleteIntent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntent(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteResourcePolicyStatement(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicyStatement(...args).promise()
  }

  async deleteSlot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSlot(...args).promise()
  }

  async deleteSlotType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSlotType(...args).promise()
  }

  async deleteUtterances(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUtterances(...args).promise()
  }

  async describeBot(...args: any): Promise<any> {
  // undefined
    return this.client.describeBot(...args).promise()
  }

  async describeBotAlias(...args: any): Promise<any> {
  // undefined
    return this.client.describeBotAlias(...args).promise()
  }

  async describeBotLocale(...args: any): Promise<any> {
  // undefined
    return this.client.describeBotLocale(...args).promise()
  }

  async describeBotRecommendation(...args: any): Promise<any> {
  // undefined
    return this.client.describeBotRecommendation(...args).promise()
  }

  async describeBotVersion(...args: any): Promise<any> {
  // undefined
    return this.client.describeBotVersion(...args).promise()
  }

  async describeCustomVocabularyMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.describeCustomVocabularyMetadata(...args).promise()
  }

  async describeExport(...args: any): Promise<any> {
  // undefined
    return this.client.describeExport(...args).promise()
  }

  async describeImport(...args: any): Promise<any> {
  // undefined
    return this.client.describeImport(...args).promise()
  }

  async describeIntent(...args: any): Promise<any> {
  // undefined
    return this.client.describeIntent(...args).promise()
  }

  async describeResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeResourcePolicy(...args).promise()
  }

  async describeSlot(...args: any): Promise<any> {
  // undefined
    return this.client.describeSlot(...args).promise()
  }

  async describeSlotType(...args: any): Promise<any> {
  // undefined
    return this.client.describeSlotType(...args).promise()
  }

  async listAggregatedUtterances(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAggregatedUtterances(...args).promise()
  }

  async listBotAliases(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBotAliases(...args).promise()
  }

  async listBotLocales(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBotLocales(...args).promise()
  }

  async listBotRecommendations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBotRecommendations(...args).promise()
  }

  async listBotVersions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBotVersions(...args).promise()
  }

  async listBots(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBots(...args).promise()
  }

  async listBuiltInIntents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBuiltInIntents(...args).promise()
  }

  async listBuiltInSlotTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBuiltInSlotTypes(...args).promise()
  }

  async listExports(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listExports(...args).promise()
  }

  async listImports(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listImports(...args).promise()
  }

  async listIntents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listIntents(...args).promise()
  }

  async listRecommendedIntents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listRecommendedIntents(...args).promise()
  }

  async listSlotTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSlotTypes(...args).promise()
  }

  async listSlots(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSlots(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async searchAssociatedTranscripts(...args: any): Promise<any> {
  // undefined
    return this.client.searchAssociatedTranscripts(...args).promise()
  }

  async startBotRecommendation(...args: any): Promise<any> {
  // undefined
    return this.client.startBotRecommendation(...args).promise()
  }

  async startImport(...args: any): Promise<any> {
  // undefined
    return this.client.startImport(...args).promise()
  }

  async stopBotRecommendation(...args: any): Promise<any> {
  // undefined
    return this.client.stopBotRecommendation(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateBot(...args: any): Promise<any> {
  // undefined
    return this.client.updateBot(...args).promise()
  }

  async updateBotAlias(...args: any): Promise<any> {
  // undefined
    return this.client.updateBotAlias(...args).promise()
  }

  async updateBotLocale(...args: any): Promise<any> {
  // undefined
    return this.client.updateBotLocale(...args).promise()
  }

  async updateBotRecommendation(...args: any): Promise<any> {
  // undefined
    return this.client.updateBotRecommendation(...args).promise()
  }

  async updateExport(...args: any): Promise<any> {
  // undefined
    return this.client.updateExport(...args).promise()
  }

  async updateIntent(...args: any): Promise<any> {
  // undefined
    return this.client.updateIntent(...args).promise()
  }

  async updateResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateResourcePolicy(...args).promise()
  }

  async updateSlot(...args: any): Promise<any> {
  // undefined
    return this.client.updateSlot(...args).promise()
  }

  async updateSlotType(...args: any): Promise<any> {
  // undefined
    return this.client.updateSlotType(...args).promise()
  }
  
  static fromClient(client: AWSLexModelsV2): ClientType {
    return new LexModelsV2(client) as any;
  }
  
  static client(options?: AWSLexModelsV2.Types.ClientConfiguration): ClientType {
    return new LexModelsV2(new AWSLexModelsV2(options)) as any;
  }
}  
