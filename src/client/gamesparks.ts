import { Request, GameSparks as AWSGameSparks } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGameSparks> = AWSGameSparks[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGameSparks> = AWSGameSparks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGameSparks[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGameSparks, Extras> = AWSGameSparks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'gamesparks';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listExtensions","listGames"];
    
  createGame: FunctionTypeFrom<'createGame'>;

  createSnapshot: FunctionTypeFrom<'createSnapshot'>;

  createStage: FunctionTypeFrom<'createStage'>;

  deleteGame: FunctionTypeFrom<'deleteGame'>;

  deleteStage: FunctionTypeFrom<'deleteStage'>;

  disconnectPlayer: FunctionTypeFrom<'disconnectPlayer'>;

  exportSnapshot: FunctionTypeFrom<'exportSnapshot'>;

  getExtension: FunctionTypeFrom<'getExtension'>;

  getExtensionVersion: FunctionTypeFrom<'getExtensionVersion'>;

  getGame: FunctionTypeFrom<'getGame'>;

  getGameConfiguration: FunctionTypeFrom<'getGameConfiguration'>;

  getGeneratedCodeJob: FunctionTypeFrom<'getGeneratedCodeJob'>;

  getPlayerConnectionStatus: FunctionTypeFrom<'getPlayerConnectionStatus'>;

  getSnapshot: FunctionTypeFrom<'getSnapshot'>;

  getStage: FunctionTypeFrom<'getStage'>;

  getStageDeployment: FunctionTypeFrom<'getStageDeployment'>;

  importGameConfiguration: FunctionTypeFrom<'importGameConfiguration'>;

  listExtensionVersions(params: { [K in keyof Omit<ParamsFrom<'listExtensionVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listExtensionVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExtensionVersions'>]-?: ReturnTypeFrom<'listExtensionVersions'>[K]}['ExtensionVersions'] }>
  ;

  listExtensions(params: { [K in keyof Omit<ParamsFrom<'listExtensions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listExtensions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExtensions'>]-?: ReturnTypeFrom<'listExtensions'>[K]}['Extensions'] }>
  listExtensions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExtensions'>]-?: ReturnTypeFrom<'listExtensions'>[K]}['Extensions'] }>;

  listGames(params: { [K in keyof Omit<ParamsFrom<'listGames', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGames', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGames'>]-?: ReturnTypeFrom<'listGames'>[K]}['Games'] }>
  listGames(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGames'>]-?: ReturnTypeFrom<'listGames'>[K]}['Games'] }>;

  listGeneratedCodeJobs(params: { [K in keyof Omit<ParamsFrom<'listGeneratedCodeJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGeneratedCodeJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGeneratedCodeJobs'>]-?: ReturnTypeFrom<'listGeneratedCodeJobs'>[K]}['GeneratedCodeJobs'] }>
  ;

  listSnapshots(params: { [K in keyof Omit<ParamsFrom<'listSnapshots', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSnapshots'>]-?: ReturnTypeFrom<'listSnapshots'>[K]}['Snapshots'] }>
  ;

  listStageDeployments(params: { [K in keyof Omit<ParamsFrom<'listStageDeployments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStageDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStageDeployments'>]-?: ReturnTypeFrom<'listStageDeployments'>[K]}['StageDeployments'] }>
  ;

  listStages(params: { [K in keyof Omit<ParamsFrom<'listStages', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStages'>]-?: ReturnTypeFrom<'listStages'>[K]}['Stages'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startGeneratedCodeJob: FunctionTypeFrom<'startGeneratedCodeJob'>;

  startStageDeployment: FunctionTypeFrom<'startStageDeployment'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateGame: FunctionTypeFrom<'updateGame'>;

  updateGameConfiguration: FunctionTypeFrom<'updateGameConfiguration'>;

  updateSnapshot: FunctionTypeFrom<'updateSnapshot'>;

  updateStage: FunctionTypeFrom<'updateStage'>
}
 
export class GameSparks implements ClientType {
  private constructor(private readonly client: AWSGameSparks) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'gamesparks';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listExtensions","listGames"] as const;
  
  async createGame(...args: any): Promise<any> {
  // undefined
    return this.client.createGame(...args).promise()
  }

  async createSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshot(...args).promise()
  }

  async createStage(...args: any): Promise<any> {
  // undefined
    return this.client.createStage(...args).promise()
  }

  async deleteGame(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGame(...args).promise()
  }

  async deleteStage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStage(...args).promise()
  }

  async disconnectPlayer(...args: any): Promise<any> {
  // undefined
    return this.client.disconnectPlayer(...args).promise()
  }

  async exportSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.exportSnapshot(...args).promise()
  }

  async getExtension(...args: any): Promise<any> {
  // undefined
    return this.client.getExtension(...args).promise()
  }

  async getExtensionVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getExtensionVersion(...args).promise()
  }

  async getGame(...args: any): Promise<any> {
  // undefined
    return this.client.getGame(...args).promise()
  }

  async getGameConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getGameConfiguration(...args).promise()
  }

  async getGeneratedCodeJob(...args: any): Promise<any> {
  // undefined
    return this.client.getGeneratedCodeJob(...args).promise()
  }

  async getPlayerConnectionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getPlayerConnectionStatus(...args).promise()
  }

  async getSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.getSnapshot(...args).promise()
  }

  async getStage(...args: any): Promise<any> {
  // undefined
    return this.client.getStage(...args).promise()
  }

  async getStageDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.getStageDeployment(...args).promise()
  }

  async importGameConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.importGameConfiguration(...args).promise()
  }

  async listExtensionVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ExtensionVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExtensionVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ExtensionVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExtensions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Extensions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExtensions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Extensions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGames(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Games"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGames(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Games ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGeneratedCodeJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GeneratedCodeJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGeneratedCodeJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GeneratedCodeJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSnapshots(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Snapshots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSnapshots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Snapshots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStageDeployments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StageDeployments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStageDeployments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StageDeployments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStages(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Stages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Stages ?? [];
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

  async startGeneratedCodeJob(...args: any): Promise<any> {
  // undefined
    return this.client.startGeneratedCodeJob(...args).promise()
  }

  async startStageDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.startStageDeployment(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateGame(...args: any): Promise<any> {
  // undefined
    return this.client.updateGame(...args).promise()
  }

  async updateGameConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateGameConfiguration(...args).promise()
  }

  async updateSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.updateSnapshot(...args).promise()
  }

  async updateStage(...args: any): Promise<any> {
  // undefined
    return this.client.updateStage(...args).promise()
  }
  
  static fromClient(client: AWSGameSparks): ClientType {
    return new GameSparks(client) as any;
  }
  
  static client(options?: AWSGameSparks.Types.ClientConfiguration): ClientType {
    return new GameSparks(new AWSGameSparks(options)) as any;
  }
}  
