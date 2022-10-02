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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'models';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["getBots","getBuiltinIntents","getBuiltinSlotTypes","getIntents","getMigrations","getSlotTypes"];
    
  createBotVersion: FunctionTypeFrom<'createBotVersion'>;

  createIntentVersion: FunctionTypeFrom<'createIntentVersion'>;

  createSlotTypeVersion: FunctionTypeFrom<'createSlotTypeVersion'>;

  deleteBot: FunctionTypeFrom<'deleteBot'>;

  deleteBotAlias: FunctionTypeFrom<'deleteBotAlias'>;

  deleteBotChannelAssociation: FunctionTypeFrom<'deleteBotChannelAssociation'>;

  deleteBotVersion: FunctionTypeFrom<'deleteBotVersion'>;

  deleteIntent: FunctionTypeFrom<'deleteIntent'>;

  deleteIntentVersion: FunctionTypeFrom<'deleteIntentVersion'>;

  deleteSlotType: FunctionTypeFrom<'deleteSlotType'>;

  deleteSlotTypeVersion: FunctionTypeFrom<'deleteSlotTypeVersion'>;

  deleteUtterances: FunctionTypeFrom<'deleteUtterances'>;

  getBot: FunctionTypeFrom<'getBot'>;

  getBotAlias: FunctionTypeFrom<'getBotAlias'>;

  getBotAliases: FunctionTypeFrom<'getBotAliases'>;

  getBotChannelAssociation: FunctionTypeFrom<'getBotChannelAssociation'>;

  getBotChannelAssociations: FunctionTypeFrom<'getBotChannelAssociations'>;

  getBotVersions: FunctionTypeFrom<'getBotVersions'>;

  getBots: FunctionTypeFrom<'getBots'>;

  getBuiltinIntent: FunctionTypeFrom<'getBuiltinIntent'>;

  getBuiltinIntents: FunctionTypeFrom<'getBuiltinIntents'>;

  getBuiltinSlotTypes: FunctionTypeFrom<'getBuiltinSlotTypes'>;

  getExport: FunctionTypeFrom<'getExport'>;

  getImport: FunctionTypeFrom<'getImport'>;

  getIntent: FunctionTypeFrom<'getIntent'>;

  getIntentVersions: FunctionTypeFrom<'getIntentVersions'>;

  getIntents: FunctionTypeFrom<'getIntents'>;

  getMigration: FunctionTypeFrom<'getMigration'>;

  getMigrations: FunctionTypeFrom<'getMigrations'>;

  getSlotType: FunctionTypeFrom<'getSlotType'>;

  getSlotTypeVersions: FunctionTypeFrom<'getSlotTypeVersions'>;

  getSlotTypes: FunctionTypeFrom<'getSlotTypes'>;

  getUtterancesView: FunctionTypeFrom<'getUtterancesView'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putBot: FunctionTypeFrom<'putBot'>;

  putBotAlias: FunctionTypeFrom<'putBotAlias'>;

  putIntent: FunctionTypeFrom<'putIntent'>;

  putSlotType: FunctionTypeFrom<'putSlotType'>;

  startImport: FunctionTypeFrom<'startImport'>;

  startMigration: FunctionTypeFrom<'startMigration'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class LexModelBuildingService implements ClientType {
  private constructor(private readonly client: AWSLexModelBuildingService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'models';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["getBots","getBuiltinIntents","getBuiltinSlotTypes","getIntents","getMigrations","getSlotTypes"] as const;
  
  async createBotVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createBotVersion(...args).promise()
  }

  async createIntentVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createIntentVersion(...args).promise()
  }

  async createSlotTypeVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createSlotTypeVersion(...args).promise()
  }

  async deleteBot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBot(...args).promise()
  }

  async deleteBotAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBotAlias(...args).promise()
  }

  async deleteBotChannelAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBotChannelAssociation(...args).promise()
  }

  async deleteBotVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBotVersion(...args).promise()
  }

  async deleteIntent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntent(...args).promise()
  }

  async deleteIntentVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIntentVersion(...args).promise()
  }

  async deleteSlotType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSlotType(...args).promise()
  }

  async deleteSlotTypeVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSlotTypeVersion(...args).promise()
  }

  async deleteUtterances(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUtterances(...args).promise()
  }

  async getBot(...args: any): Promise<any> {
  // undefined
    return this.client.getBot(...args).promise()
  }

  async getBotAlias(...args: any): Promise<any> {
  // undefined
    return this.client.getBotAlias(...args).promise()
  }

  async getBotAliases(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBotAliases(...args).promise()
  }

  async getBotChannelAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.getBotChannelAssociation(...args).promise()
  }

  async getBotChannelAssociations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBotChannelAssociations(...args).promise()
  }

  async getBotVersions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBotVersions(...args).promise()
  }

  async getBots(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBots(...args).promise()
  }

  async getBuiltinIntent(...args: any): Promise<any> {
  // undefined
    return this.client.getBuiltinIntent(...args).promise()
  }

  async getBuiltinIntents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBuiltinIntents(...args).promise()
  }

  async getBuiltinSlotTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBuiltinSlotTypes(...args).promise()
  }

  async getExport(...args: any): Promise<any> {
  // undefined
    return this.client.getExport(...args).promise()
  }

  async getImport(...args: any): Promise<any> {
  // undefined
    return this.client.getImport(...args).promise()
  }

  async getIntent(...args: any): Promise<any> {
  // undefined
    return this.client.getIntent(...args).promise()
  }

  async getIntentVersions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getIntentVersions(...args).promise()
  }

  async getIntents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getIntents(...args).promise()
  }

  async getMigration(...args: any): Promise<any> {
  // undefined
    return this.client.getMigration(...args).promise()
  }

  async getMigrations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getMigrations(...args).promise()
  }

  async getSlotType(...args: any): Promise<any> {
  // undefined
    return this.client.getSlotType(...args).promise()
  }

  async getSlotTypeVersions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getSlotTypeVersions(...args).promise()
  }

  async getSlotTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getSlotTypes(...args).promise()
  }

  async getUtterancesView(...args: any): Promise<any> {
  // undefined
    return this.client.getUtterancesView(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putBot(...args: any): Promise<any> {
  // undefined
    return this.client.putBot(...args).promise()
  }

  async putBotAlias(...args: any): Promise<any> {
  // undefined
    return this.client.putBotAlias(...args).promise()
  }

  async putIntent(...args: any): Promise<any> {
  // undefined
    return this.client.putIntent(...args).promise()
  }

  async putSlotType(...args: any): Promise<any> {
  // undefined
    return this.client.putSlotType(...args).promise()
  }

  async startImport(...args: any): Promise<any> {
  // undefined
    return this.client.startImport(...args).promise()
  }

  async startMigration(...args: any): Promise<any> {
  // undefined
    return this.client.startMigration(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSLexModelBuildingService): ClientType {
    return new LexModelBuildingService(client) as any;
  }
  
  static client(options?: AWSLexModelBuildingService.Types.ClientConfiguration): ClientType {
    return new LexModelBuildingService(new AWSLexModelBuildingService(options)) as any;
  }
}  
