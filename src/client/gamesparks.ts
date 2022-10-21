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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGameSparks> = AWSGameSparks[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class GameSparks {
  private constructor(private readonly client: AWSGameSparks) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'gamesparks' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listExtensions","listGames"] as const;
  
  createGame: (params: RawParamsFrom<'createGame'>) => Promise<ReturnTypeFrom<'createGame'>>  = async params => {
  // undefined
    return this.client.createGame(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createStage: (params: RawParamsFrom<'createStage'>) => Promise<ReturnTypeFrom<'createStage'>>  = async params => {
  // undefined
    return this.client.createStage(params as any).promise();
  }

  deleteGame: (params: RawParamsFrom<'deleteGame'>) => Promise<ReturnTypeFrom<'deleteGame'>>  = async params => {
  // undefined
    return this.client.deleteGame(params as any).promise();
  }

  deleteStage: (params: RawParamsFrom<'deleteStage'>) => Promise<ReturnTypeFrom<'deleteStage'>>  = async params => {
  // undefined
    return this.client.deleteStage(params as any).promise();
  }

  disconnectPlayer: (params: RawParamsFrom<'disconnectPlayer'>) => Promise<ReturnTypeFrom<'disconnectPlayer'>>  = async params => {
  // undefined
    return this.client.disconnectPlayer(params as any).promise();
  }

  exportSnapshot: (params: RawParamsFrom<'exportSnapshot'>) => Promise<ReturnTypeFrom<'exportSnapshot'>>  = async params => {
  // undefined
    return this.client.exportSnapshot(params as any).promise();
  }

  getExtension: (params: RawParamsFrom<'getExtension'>) => Promise<ReturnTypeFrom<'getExtension'>>  = async params => {
  // undefined
    return this.client.getExtension(params as any).promise();
  }

  getExtensionVersion: (params: RawParamsFrom<'getExtensionVersion'>) => Promise<ReturnTypeFrom<'getExtensionVersion'>>  = async params => {
  // undefined
    return this.client.getExtensionVersion(params as any).promise();
  }

  getGame: (params: RawParamsFrom<'getGame'>) => Promise<ReturnTypeFrom<'getGame'>>  = async params => {
  // undefined
    return this.client.getGame(params as any).promise();
  }

  getGameConfiguration: (params: RawParamsFrom<'getGameConfiguration'>) => Promise<ReturnTypeFrom<'getGameConfiguration'>>  = async params => {
  // undefined
    return this.client.getGameConfiguration(params as any).promise();
  }

  getGeneratedCodeJob: (params: RawParamsFrom<'getGeneratedCodeJob'>) => Promise<ReturnTypeFrom<'getGeneratedCodeJob'>>  = async params => {
  // undefined
    return this.client.getGeneratedCodeJob(params as any).promise();
  }

  getPlayerConnectionStatus: (params: RawParamsFrom<'getPlayerConnectionStatus'>) => Promise<ReturnTypeFrom<'getPlayerConnectionStatus'>>  = async params => {
  // undefined
    return this.client.getPlayerConnectionStatus(params as any).promise();
  }

  getSnapshot: (params: RawParamsFrom<'getSnapshot'>) => Promise<ReturnTypeFrom<'getSnapshot'>>  = async params => {
  // undefined
    return this.client.getSnapshot(params as any).promise();
  }

  getStage: (params: RawParamsFrom<'getStage'>) => Promise<ReturnTypeFrom<'getStage'>>  = async params => {
  // undefined
    return this.client.getStage(params as any).promise();
  }

  getStageDeployment: (params: RawParamsFrom<'getStageDeployment'>) => Promise<ReturnTypeFrom<'getStageDeployment'>>  = async params => {
  // undefined
    return this.client.getStageDeployment(params as any).promise();
  }

  importGameConfiguration: (params: RawParamsFrom<'importGameConfiguration'>) => Promise<ReturnTypeFrom<'importGameConfiguration'>>  = async params => {
  // undefined
    return this.client.importGameConfiguration(params as any).promise();
  }

  async listExtensionVersions(params: { [K in keyof ParamsFrom<'listExtensionVersions', { next?: string, limit?: number }>]: ParamsFrom<'listExtensionVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExtensionVersions'>]-?: ReturnTypeFrom<'listExtensionVersions'>[K]}['ExtensionVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ExtensionVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExtensionVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ExtensionVersions ?? []) ? (result.ExtensionVersions ?? []) : [result.ExtensionVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listExtensions(params: { [K in keyof ParamsFrom<'listExtensions', { next?: string, limit?: number }>]: ParamsFrom<'listExtensions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExtensions'>]-?: ReturnTypeFrom<'listExtensions'>[K]}['Extensions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Extensions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExtensions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Extensions ?? []) ? (result.Extensions ?? []) : [result.Extensions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listGames(params: { [K in keyof ParamsFrom<'listGames', { next?: string, limit?: number }>]: ParamsFrom<'listGames', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGames'>]-?: ReturnTypeFrom<'listGames'>[K]}['Games'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Games"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGames({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Games ?? []) ? (result.Games ?? []) : [result.Games]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listGeneratedCodeJobs(params: { [K in keyof ParamsFrom<'listGeneratedCodeJobs', { next?: string, limit?: number }>]: ParamsFrom<'listGeneratedCodeJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGeneratedCodeJobs'>]-?: ReturnTypeFrom<'listGeneratedCodeJobs'>[K]}['GeneratedCodeJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GeneratedCodeJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGeneratedCodeJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.GeneratedCodeJobs ?? []) ? (result.GeneratedCodeJobs ?? []) : [result.GeneratedCodeJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSnapshots(params: { [K in keyof ParamsFrom<'listSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'listSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSnapshots'>]-?: ReturnTypeFrom<'listSnapshots'>[K]}['Snapshots'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Snapshots ?? []) ? (result.Snapshots ?? []) : [result.Snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listStageDeployments(params: { [K in keyof ParamsFrom<'listStageDeployments', { next?: string, limit?: number }>]: ParamsFrom<'listStageDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStageDeployments'>]-?: ReturnTypeFrom<'listStageDeployments'>[K]}['StageDeployments'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StageDeployments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStageDeployments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.StageDeployments ?? []) ? (result.StageDeployments ?? []) : [result.StageDeployments]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listStages(params: { [K in keyof ParamsFrom<'listStages', { next?: string, limit?: number }>]: ParamsFrom<'listStages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStages'>]-?: ReturnTypeFrom<'listStages'>[K]}['Stages'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Stages"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Stages ?? []) ? (result.Stages ?? []) : [result.Stages]) as any;
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

  startGeneratedCodeJob: (params: RawParamsFrom<'startGeneratedCodeJob'>) => Promise<ReturnTypeFrom<'startGeneratedCodeJob'>>  = async params => {
  // undefined
    return this.client.startGeneratedCodeJob(params as any).promise();
  }

  startStageDeployment: (params: RawParamsFrom<'startStageDeployment'>) => Promise<ReturnTypeFrom<'startStageDeployment'>>  = async params => {
  // undefined
    return this.client.startStageDeployment(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateGame: (params: RawParamsFrom<'updateGame'>) => Promise<ReturnTypeFrom<'updateGame'>>  = async params => {
  // undefined
    return this.client.updateGame(params as any).promise();
  }

  updateGameConfiguration: (params: RawParamsFrom<'updateGameConfiguration'>) => Promise<ReturnTypeFrom<'updateGameConfiguration'>>  = async params => {
  // undefined
    return this.client.updateGameConfiguration(params as any).promise();
  }

  updateSnapshot: (params: RawParamsFrom<'updateSnapshot'>) => Promise<ReturnTypeFrom<'updateSnapshot'>>  = async params => {
  // undefined
    return this.client.updateSnapshot(params as any).promise();
  }

  updateStage: (params: RawParamsFrom<'updateStage'>) => Promise<ReturnTypeFrom<'updateStage'>>  = async params => {
  // undefined
    return this.client.updateStage(params as any).promise();
  }
  
  static fromClient(client: AWSGameSparks): GameSparks {
    return new GameSparks(client) as any;
  }
  
  static client(options?: AWSGameSparks.Types.ClientConfiguration): GameSparks {
    return new GameSparks(new AWSGameSparks(options)) as any;
  }
}  
