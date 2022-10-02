import { Request, GameLift as AWSGameLift } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGameLift> = AWSGameLift[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGameLift> = AWSGameLift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGameLift[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGameLift, Extras> = AWSGameLift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'gamelift';
    global: false;
    category: 'Game Tech'
    topLevelCalls: readonly ["describeFleetAttributes","describeFleetCapacity","describeFleetUtilization","describeGameSessionDetails","describeGameSessionQueues","describeGameSessions","describeMatchmakingConfigurations","describeMatchmakingRuleSets","describePlayerSessions","listAliases","listBuilds","listFleets","listGameServerGroups","listScripts","searchGameSessions"];
    
  acceptMatch: FunctionTypeFrom<'acceptMatch'>;

  claimGameServer: FunctionTypeFrom<'claimGameServer'>;

  createAlias: FunctionTypeFrom<'createAlias'>;

  createBuild: FunctionTypeFrom<'createBuild'>;

  createFleet: FunctionTypeFrom<'createFleet'>;

  createFleetLocations: FunctionTypeFrom<'createFleetLocations'>;

  createGameServerGroup: FunctionTypeFrom<'createGameServerGroup'>;

  createGameSession: FunctionTypeFrom<'createGameSession'>;

  createGameSessionQueue: FunctionTypeFrom<'createGameSessionQueue'>;

  createMatchmakingConfiguration: FunctionTypeFrom<'createMatchmakingConfiguration'>;

  createMatchmakingRuleSet: FunctionTypeFrom<'createMatchmakingRuleSet'>;

  createPlayerSession: FunctionTypeFrom<'createPlayerSession'>;

  createPlayerSessions: FunctionTypeFrom<'createPlayerSessions'>;

  createScript: FunctionTypeFrom<'createScript'>;

  createVpcPeeringAuthorization: FunctionTypeFrom<'createVpcPeeringAuthorization'>;

  createVpcPeeringConnection: FunctionTypeFrom<'createVpcPeeringConnection'>;

  deleteAlias: FunctionTypeFrom<'deleteAlias'>;

  deleteBuild: FunctionTypeFrom<'deleteBuild'>;

  deleteFleet: FunctionTypeFrom<'deleteFleet'>;

  deleteFleetLocations: FunctionTypeFrom<'deleteFleetLocations'>;

  deleteGameServerGroup: FunctionTypeFrom<'deleteGameServerGroup'>;

  deleteGameSessionQueue: FunctionTypeFrom<'deleteGameSessionQueue'>;

  deleteMatchmakingConfiguration: FunctionTypeFrom<'deleteMatchmakingConfiguration'>;

  deleteMatchmakingRuleSet: FunctionTypeFrom<'deleteMatchmakingRuleSet'>;

  deleteScalingPolicy: FunctionTypeFrom<'deleteScalingPolicy'>;

  deleteScript: FunctionTypeFrom<'deleteScript'>;

  deleteVpcPeeringAuthorization: FunctionTypeFrom<'deleteVpcPeeringAuthorization'>;

  deleteVpcPeeringConnection: FunctionTypeFrom<'deleteVpcPeeringConnection'>;

  deregisterGameServer: FunctionTypeFrom<'deregisterGameServer'>;

  describeAlias: FunctionTypeFrom<'describeAlias'>;

  describeBuild: FunctionTypeFrom<'describeBuild'>;

  describeEC2InstanceLimits: FunctionTypeFrom<'describeEC2InstanceLimits'>;

  describeFleetAttributes(params: { [K in keyof Omit<ParamsFrom<'describeFleetAttributes', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeFleetAttributes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleetAttributes'>]-?: ReturnTypeFrom<'describeFleetAttributes'>[K]}['FleetAttributes'] }>
  describeFleetAttributes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleetAttributes'>]-?: ReturnTypeFrom<'describeFleetAttributes'>[K]}['FleetAttributes'] }>;

  describeFleetCapacity(params: { [K in keyof Omit<ParamsFrom<'describeFleetCapacity', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeFleetCapacity', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleetCapacity'>]-?: ReturnTypeFrom<'describeFleetCapacity'>[K]}['FleetCapacity'] }>
  describeFleetCapacity(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleetCapacity'>]-?: ReturnTypeFrom<'describeFleetCapacity'>[K]}['FleetCapacity'] }>;

  describeFleetEvents(params: { [K in keyof Omit<ParamsFrom<'describeFleetEvents', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeFleetEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleetEvents'>]-?: ReturnTypeFrom<'describeFleetEvents'>[K]}['Events'] }>
  ;

  describeFleetLocationAttributes: FunctionTypeFrom<'describeFleetLocationAttributes'>;

  describeFleetLocationCapacity: FunctionTypeFrom<'describeFleetLocationCapacity'>;

  describeFleetLocationUtilization: FunctionTypeFrom<'describeFleetLocationUtilization'>;

  describeFleetPortSettings: FunctionTypeFrom<'describeFleetPortSettings'>;

  describeFleetUtilization(params: { [K in keyof Omit<ParamsFrom<'describeFleetUtilization', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeFleetUtilization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleetUtilization'>]-?: ReturnTypeFrom<'describeFleetUtilization'>[K]}['FleetUtilization'] }>
  describeFleetUtilization(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeFleetUtilization'>]-?: ReturnTypeFrom<'describeFleetUtilization'>[K]}['FleetUtilization'] }>;

  describeGameServer: FunctionTypeFrom<'describeGameServer'>;

  describeGameServerGroup: FunctionTypeFrom<'describeGameServerGroup'>;

  describeGameServerInstances(params: { [K in keyof Omit<ParamsFrom<'describeGameServerInstances', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeGameServerInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGameServerInstances'>]-?: ReturnTypeFrom<'describeGameServerInstances'>[K]}['GameServerInstances'] }>
  ;

  describeGameSessionDetails(params: { [K in keyof Omit<ParamsFrom<'describeGameSessionDetails', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeGameSessionDetails', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGameSessionDetails'>]-?: ReturnTypeFrom<'describeGameSessionDetails'>[K]}['GameSessionDetails'] }>
  describeGameSessionDetails(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGameSessionDetails'>]-?: ReturnTypeFrom<'describeGameSessionDetails'>[K]}['GameSessionDetails'] }>;

  describeGameSessionPlacement: FunctionTypeFrom<'describeGameSessionPlacement'>;

  describeGameSessionQueues(params: { [K in keyof Omit<ParamsFrom<'describeGameSessionQueues', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeGameSessionQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGameSessionQueues'>]-?: ReturnTypeFrom<'describeGameSessionQueues'>[K]}['GameSessionQueues'] }>
  describeGameSessionQueues(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGameSessionQueues'>]-?: ReturnTypeFrom<'describeGameSessionQueues'>[K]}['GameSessionQueues'] }>;

  describeGameSessions(params: { [K in keyof Omit<ParamsFrom<'describeGameSessions', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeGameSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGameSessions'>]-?: ReturnTypeFrom<'describeGameSessions'>[K]}['GameSessions'] }>
  describeGameSessions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeGameSessions'>]-?: ReturnTypeFrom<'describeGameSessions'>[K]}['GameSessions'] }>;

  describeInstances(params: { [K in keyof Omit<ParamsFrom<'describeInstances', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstances'>]-?: ReturnTypeFrom<'describeInstances'>[K]}['Instances'] }>
  ;

  describeMatchmaking: FunctionTypeFrom<'describeMatchmaking'>;

  describeMatchmakingConfigurations(params: { [K in keyof Omit<ParamsFrom<'describeMatchmakingConfigurations', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeMatchmakingConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMatchmakingConfigurations'>]-?: ReturnTypeFrom<'describeMatchmakingConfigurations'>[K]}['Configurations'] }>
  describeMatchmakingConfigurations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMatchmakingConfigurations'>]-?: ReturnTypeFrom<'describeMatchmakingConfigurations'>[K]}['Configurations'] }>;

  describeMatchmakingRuleSets(params: { [K in keyof Omit<ParamsFrom<'describeMatchmakingRuleSets', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeMatchmakingRuleSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMatchmakingRuleSets'>]-?: ReturnTypeFrom<'describeMatchmakingRuleSets'>[K]}['RuleSets'] }>
  describeMatchmakingRuleSets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMatchmakingRuleSets'>]-?: ReturnTypeFrom<'describeMatchmakingRuleSets'>[K]}['RuleSets'] }>;

  describePlayerSessions(params: { [K in keyof Omit<ParamsFrom<'describePlayerSessions', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describePlayerSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePlayerSessions'>]-?: ReturnTypeFrom<'describePlayerSessions'>[K]}['PlayerSessions'] }>
  describePlayerSessions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePlayerSessions'>]-?: ReturnTypeFrom<'describePlayerSessions'>[K]}['PlayerSessions'] }>;

  describeRuntimeConfiguration: FunctionTypeFrom<'describeRuntimeConfiguration'>;

  describeScalingPolicies(params: { [K in keyof Omit<ParamsFrom<'describeScalingPolicies', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeScalingPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScalingPolicies'>]-?: ReturnTypeFrom<'describeScalingPolicies'>[K]}['ScalingPolicies'] }>
  ;

  describeScript: FunctionTypeFrom<'describeScript'>;

  describeVpcPeeringAuthorizations: FunctionTypeFrom<'describeVpcPeeringAuthorizations'>;

  describeVpcPeeringConnections: FunctionTypeFrom<'describeVpcPeeringConnections'>;

  getGameSessionLogUrl: FunctionTypeFrom<'getGameSessionLogUrl'>;

  getInstanceAccess: FunctionTypeFrom<'getInstanceAccess'>;

  listAliases(params: { [K in keyof Omit<ParamsFrom<'listAliases', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAliases'>]-?: ReturnTypeFrom<'listAliases'>[K]}['Aliases'] }>
  listAliases(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAliases'>]-?: ReturnTypeFrom<'listAliases'>[K]}['Aliases'] }>;

  listBuilds(params: { [K in keyof Omit<ParamsFrom<'listBuilds', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listBuilds', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuilds'>]-?: ReturnTypeFrom<'listBuilds'>[K]}['Builds'] }>
  listBuilds(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBuilds'>]-?: ReturnTypeFrom<'listBuilds'>[K]}['Builds'] }>;

  listFleets(params: { [K in keyof Omit<ParamsFrom<'listFleets', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['FleetIds'] }>
  listFleets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['FleetIds'] }>;

  listGameServerGroups(params: { [K in keyof Omit<ParamsFrom<'listGameServerGroups', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listGameServerGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGameServerGroups'>]-?: ReturnTypeFrom<'listGameServerGroups'>[K]}['GameServerGroups'] }>
  listGameServerGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGameServerGroups'>]-?: ReturnTypeFrom<'listGameServerGroups'>[K]}['GameServerGroups'] }>;

  listGameServers(params: { [K in keyof Omit<ParamsFrom<'listGameServers', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listGameServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGameServers'>]-?: ReturnTypeFrom<'listGameServers'>[K]}['GameServers'] }>
  ;

  listScripts(params: { [K in keyof Omit<ParamsFrom<'listScripts', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listScripts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listScripts'>]-?: ReturnTypeFrom<'listScripts'>[K]}['Scripts'] }>
  listScripts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listScripts'>]-?: ReturnTypeFrom<'listScripts'>[K]}['Scripts'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putScalingPolicy: FunctionTypeFrom<'putScalingPolicy'>;

  registerGameServer: FunctionTypeFrom<'registerGameServer'>;

  requestUploadCredentials: FunctionTypeFrom<'requestUploadCredentials'>;

  resolveAlias: FunctionTypeFrom<'resolveAlias'>;

  resumeGameServerGroup: FunctionTypeFrom<'resumeGameServerGroup'>;

  searchGameSessions(params: { [K in keyof Omit<ParamsFrom<'searchGameSessions', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'searchGameSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchGameSessions'>]-?: ReturnTypeFrom<'searchGameSessions'>[K]}['GameSessions'] }>
  searchGameSessions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchGameSessions'>]-?: ReturnTypeFrom<'searchGameSessions'>[K]}['GameSessions'] }>;

  startFleetActions: FunctionTypeFrom<'startFleetActions'>;

  startGameSessionPlacement: FunctionTypeFrom<'startGameSessionPlacement'>;

  startMatchBackfill: FunctionTypeFrom<'startMatchBackfill'>;

  startMatchmaking: FunctionTypeFrom<'startMatchmaking'>;

  stopFleetActions: FunctionTypeFrom<'stopFleetActions'>;

  stopGameSessionPlacement: FunctionTypeFrom<'stopGameSessionPlacement'>;

  stopMatchmaking: FunctionTypeFrom<'stopMatchmaking'>;

  suspendGameServerGroup: FunctionTypeFrom<'suspendGameServerGroup'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAlias: FunctionTypeFrom<'updateAlias'>;

  updateBuild: FunctionTypeFrom<'updateBuild'>;

  updateFleetAttributes: FunctionTypeFrom<'updateFleetAttributes'>;

  updateFleetCapacity: FunctionTypeFrom<'updateFleetCapacity'>;

  updateFleetPortSettings: FunctionTypeFrom<'updateFleetPortSettings'>;

  updateGameServer: FunctionTypeFrom<'updateGameServer'>;

  updateGameServerGroup: FunctionTypeFrom<'updateGameServerGroup'>;

  updateGameSession: FunctionTypeFrom<'updateGameSession'>;

  updateGameSessionQueue: FunctionTypeFrom<'updateGameSessionQueue'>;

  updateMatchmakingConfiguration: FunctionTypeFrom<'updateMatchmakingConfiguration'>;

  updateRuntimeConfiguration: FunctionTypeFrom<'updateRuntimeConfiguration'>;

  updateScript: FunctionTypeFrom<'updateScript'>;

  validateMatchmakingRuleSet: FunctionTypeFrom<'validateMatchmakingRuleSet'>
}
 
export class GameLift implements ClientType {
  private constructor(private readonly client: AWSGameLift) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'gamelift';
  public readonly global = false;
  public readonly category = 'Game Tech';
  public readonly topLevelCalls = ["describeFleetAttributes","describeFleetCapacity","describeFleetUtilization","describeGameSessionDetails","describeGameSessionQueues","describeGameSessions","describeMatchmakingConfigurations","describeMatchmakingRuleSets","describePlayerSessions","listAliases","listBuilds","listFleets","listGameServerGroups","listScripts","searchGameSessions"] as const;
  
  async acceptMatch(...args: any): Promise<any> {
  // undefined
    return this.client.acceptMatch(...args).promise()
  }

  async claimGameServer(...args: any): Promise<any> {
  // undefined
    return this.client.claimGameServer(...args).promise()
  }

  async createAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createAlias(...args).promise()
  }

  async createBuild(...args: any): Promise<any> {
  // undefined
    return this.client.createBuild(...args).promise()
  }

  async createFleet(...args: any): Promise<any> {
  // undefined
    return this.client.createFleet(...args).promise()
  }

  async createFleetLocations(...args: any): Promise<any> {
  // undefined
    return this.client.createFleetLocations(...args).promise()
  }

  async createGameServerGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGameServerGroup(...args).promise()
  }

  async createGameSession(...args: any): Promise<any> {
  // undefined
    return this.client.createGameSession(...args).promise()
  }

  async createGameSessionQueue(...args: any): Promise<any> {
  // undefined
    return this.client.createGameSessionQueue(...args).promise()
  }

  async createMatchmakingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createMatchmakingConfiguration(...args).promise()
  }

  async createMatchmakingRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.createMatchmakingRuleSet(...args).promise()
  }

  async createPlayerSession(...args: any): Promise<any> {
  // undefined
    return this.client.createPlayerSession(...args).promise()
  }

  async createPlayerSessions(...args: any): Promise<any> {
  // undefined
    return this.client.createPlayerSessions(...args).promise()
  }

  async createScript(...args: any): Promise<any> {
  // undefined
    return this.client.createScript(...args).promise()
  }

  async createVpcPeeringAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcPeeringAuthorization(...args).promise()
  }

  async createVpcPeeringConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createVpcPeeringConnection(...args).promise()
  }

  async deleteAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlias(...args).promise()
  }

  async deleteBuild(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBuild(...args).promise()
  }

  async deleteFleet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleet(...args).promise()
  }

  async deleteFleetLocations(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleetLocations(...args).promise()
  }

  async deleteGameServerGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGameServerGroup(...args).promise()
  }

  async deleteGameSessionQueue(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGameSessionQueue(...args).promise()
  }

  async deleteMatchmakingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMatchmakingConfiguration(...args).promise()
  }

  async deleteMatchmakingRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMatchmakingRuleSet(...args).promise()
  }

  async deleteScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScalingPolicy(...args).promise()
  }

  async deleteScript(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScript(...args).promise()
  }

  async deleteVpcPeeringAuthorization(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcPeeringAuthorization(...args).promise()
  }

  async deleteVpcPeeringConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVpcPeeringConnection(...args).promise()
  }

  async deregisterGameServer(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterGameServer(...args).promise()
  }

  async describeAlias(...args: any): Promise<any> {
  // undefined
    return this.client.describeAlias(...args).promise()
  }

  async describeBuild(...args: any): Promise<any> {
  // undefined
    return this.client.describeBuild(...args).promise()
  }

  async describeEC2InstanceLimits(...args: any): Promise<any> {
  // undefined
    return this.client.describeEC2InstanceLimits(...args).promise()
  }

  async describeFleetAttributes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"FleetAttributes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeFleetAttributes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FleetAttributes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFleetCapacity(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"FleetCapacity"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeFleetCapacity(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FleetCapacity ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFleetEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeFleetEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFleetLocationAttributes(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeFleetLocationAttributes(...args).promise()
  }

  async describeFleetLocationCapacity(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleetLocationCapacity(...args).promise()
  }

  async describeFleetLocationUtilization(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleetLocationUtilization(...args).promise()
  }

  async describeFleetPortSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleetPortSettings(...args).promise()
  }

  async describeFleetUtilization(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"FleetUtilization"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeFleetUtilization(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FleetUtilization ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGameServer(...args: any): Promise<any> {
  // undefined
    return this.client.describeGameServer(...args).promise()
  }

  async describeGameServerGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeGameServerGroup(...args).promise()
  }

  async describeGameServerInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameServerInstances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeGameServerInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GameServerInstances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGameSessionDetails(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameSessionDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeGameSessionDetails(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GameSessionDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGameSessionPlacement(...args: any): Promise<any> {
  // undefined
    return this.client.describeGameSessionPlacement(...args).promise()
  }

  async describeGameSessionQueues(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameSessionQueues"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeGameSessionQueues(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GameSessionQueues ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGameSessions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameSessions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeGameSessions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GameSessions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Instances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Instances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMatchmaking(...args: any): Promise<any> {
  // undefined
    return this.client.describeMatchmaking(...args).promise()
  }

  async describeMatchmakingConfigurations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Configurations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeMatchmakingConfigurations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Configurations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMatchmakingRuleSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"RuleSets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeMatchmakingRuleSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RuleSets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePlayerSessions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"PlayerSessions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describePlayerSessions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PlayerSessions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRuntimeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeRuntimeConfiguration(...args).promise()
  }

  async describeScalingPolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ScalingPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeScalingPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScalingPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScript(...args: any): Promise<any> {
  // undefined
    return this.client.describeScript(...args).promise()
  }

  async describeVpcPeeringAuthorizations(...args: any): Promise<any> {
  // undefined
    return this.client.describeVpcPeeringAuthorizations(...args).promise()
  }

  async describeVpcPeeringConnections(...args: any): Promise<any> {
  // undefined
    return this.client.describeVpcPeeringConnections(...args).promise()
  }

  async getGameSessionLogUrl(...args: any): Promise<any> {
  // undefined
    return this.client.getGameSessionLogUrl(...args).promise()
  }

  async getInstanceAccess(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceAccess(...args).promise()
  }

  async listAliases(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Aliases"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listAliases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Aliases ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBuilds(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Builds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listBuilds(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Builds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"FleetIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listFleets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.FleetIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGameServerGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameServerGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGameServerGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GameServerGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGameServers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameServers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGameServers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GameServers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listScripts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Scripts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listScripts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Scripts ?? [];
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

  async putScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putScalingPolicy(...args).promise()
  }

  async registerGameServer(...args: any): Promise<any> {
  // undefined
    return this.client.registerGameServer(...args).promise()
  }

  async requestUploadCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.requestUploadCredentials(...args).promise()
  }

  async resolveAlias(...args: any): Promise<any> {
  // undefined
    return this.client.resolveAlias(...args).promise()
  }

  async resumeGameServerGroup(...args: any): Promise<any> {
  // undefined
    return this.client.resumeGameServerGroup(...args).promise()
  }

  async searchGameSessions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameSessions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.searchGameSessions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GameSessions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startFleetActions(...args: any): Promise<any> {
  // undefined
    return this.client.startFleetActions(...args).promise()
  }

  async startGameSessionPlacement(...args: any): Promise<any> {
  // undefined
    return this.client.startGameSessionPlacement(...args).promise()
  }

  async startMatchBackfill(...args: any): Promise<any> {
  // undefined
    return this.client.startMatchBackfill(...args).promise()
  }

  async startMatchmaking(...args: any): Promise<any> {
  // undefined
    return this.client.startMatchmaking(...args).promise()
  }

  async stopFleetActions(...args: any): Promise<any> {
  // undefined
    return this.client.stopFleetActions(...args).promise()
  }

  async stopGameSessionPlacement(...args: any): Promise<any> {
  // undefined
    return this.client.stopGameSessionPlacement(...args).promise()
  }

  async stopMatchmaking(...args: any): Promise<any> {
  // undefined
    return this.client.stopMatchmaking(...args).promise()
  }

  async suspendGameServerGroup(...args: any): Promise<any> {
  // undefined
    return this.client.suspendGameServerGroup(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAlias(...args: any): Promise<any> {
  // undefined
    return this.client.updateAlias(...args).promise()
  }

  async updateBuild(...args: any): Promise<any> {
  // undefined
    return this.client.updateBuild(...args).promise()
  }

  async updateFleetAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateFleetAttributes(...args).promise()
  }

  async updateFleetCapacity(...args: any): Promise<any> {
  // undefined
    return this.client.updateFleetCapacity(...args).promise()
  }

  async updateFleetPortSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateFleetPortSettings(...args).promise()
  }

  async updateGameServer(...args: any): Promise<any> {
  // undefined
    return this.client.updateGameServer(...args).promise()
  }

  async updateGameServerGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGameServerGroup(...args).promise()
  }

  async updateGameSession(...args: any): Promise<any> {
  // undefined
    return this.client.updateGameSession(...args).promise()
  }

  async updateGameSessionQueue(...args: any): Promise<any> {
  // undefined
    return this.client.updateGameSessionQueue(...args).promise()
  }

  async updateMatchmakingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateMatchmakingConfiguration(...args).promise()
  }

  async updateRuntimeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateRuntimeConfiguration(...args).promise()
  }

  async updateScript(...args: any): Promise<any> {
  // undefined
    return this.client.updateScript(...args).promise()
  }

  async validateMatchmakingRuleSet(...args: any): Promise<any> {
  // undefined
    return this.client.validateMatchmakingRuleSet(...args).promise()
  }
  
  static fromClient(client: AWSGameLift): ClientType {
    return new GameLift(client) as any;
  }
  
  static client(options?: AWSGameLift.Types.ClientConfiguration): ClientType {
    return new GameLift(new AWSGameLift(options)) as any;
  }
}  
