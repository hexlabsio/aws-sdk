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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGameLift> = AWSGameLift[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class GameLift {
  private constructor(private readonly client: AWSGameLift) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'gamelift' as const;
  public readonly global = false as const;
  public readonly category = 'Game Tech' as const;
  public readonly topLevelCalls = ["describeFleetAttributes","describeFleetCapacity","describeFleetUtilization","describeGameSessionDetails","describeGameSessionQueues","describeGameSessions","describeMatchmakingConfigurations","describeMatchmakingRuleSets","describePlayerSessions","listAliases","listBuilds","listFleets","listGameServerGroups","listLocations","listScripts","searchGameSessions"] as const;
  
  acceptMatch: (params: RawParamsFrom<'acceptMatch'>) => Promise<ReturnTypeFrom<'acceptMatch'>>  = async params => {
  // undefined
    return this.client.acceptMatch(params as any).promise();
  }

  claimGameServer: (params: RawParamsFrom<'claimGameServer'>) => Promise<ReturnTypeFrom<'claimGameServer'>>  = async params => {
  // undefined
    return this.client.claimGameServer(params as any).promise();
  }

  createAlias: (params: RawParamsFrom<'createAlias'>) => Promise<ReturnTypeFrom<'createAlias'>>  = async params => {
  // undefined
    return this.client.createAlias(params as any).promise();
  }

  createBuild: (params: RawParamsFrom<'createBuild'>) => Promise<ReturnTypeFrom<'createBuild'>>  = async params => {
  // undefined
    return this.client.createBuild(params as any).promise();
  }

  createFleet: (params: RawParamsFrom<'createFleet'>) => Promise<ReturnTypeFrom<'createFleet'>>  = async params => {
  // undefined
    return this.client.createFleet(params as any).promise();
  }

  createFleetLocations: (params: RawParamsFrom<'createFleetLocations'>) => Promise<ReturnTypeFrom<'createFleetLocations'>>  = async params => {
  // undefined
    return this.client.createFleetLocations(params as any).promise();
  }

  createGameServerGroup: (params: RawParamsFrom<'createGameServerGroup'>) => Promise<ReturnTypeFrom<'createGameServerGroup'>>  = async params => {
  // undefined
    return this.client.createGameServerGroup(params as any).promise();
  }

  createGameSession: (params: RawParamsFrom<'createGameSession'>) => Promise<ReturnTypeFrom<'createGameSession'>>  = async params => {
  // undefined
    return this.client.createGameSession(params as any).promise();
  }

  createGameSessionQueue: (params: RawParamsFrom<'createGameSessionQueue'>) => Promise<ReturnTypeFrom<'createGameSessionQueue'>>  = async params => {
  // undefined
    return this.client.createGameSessionQueue(params as any).promise();
  }

  createLocation: (params: RawParamsFrom<'createLocation'>) => Promise<ReturnTypeFrom<'createLocation'>>  = async params => {
  // undefined
    return this.client.createLocation(params as any).promise();
  }

  createMatchmakingConfiguration: (params: RawParamsFrom<'createMatchmakingConfiguration'>) => Promise<ReturnTypeFrom<'createMatchmakingConfiguration'>>  = async params => {
  // undefined
    return this.client.createMatchmakingConfiguration(params as any).promise();
  }

  createMatchmakingRuleSet: (params: RawParamsFrom<'createMatchmakingRuleSet'>) => Promise<ReturnTypeFrom<'createMatchmakingRuleSet'>>  = async params => {
  // undefined
    return this.client.createMatchmakingRuleSet(params as any).promise();
  }

  createPlayerSession: (params: RawParamsFrom<'createPlayerSession'>) => Promise<ReturnTypeFrom<'createPlayerSession'>>  = async params => {
  // undefined
    return this.client.createPlayerSession(params as any).promise();
  }

  createPlayerSessions: (params: RawParamsFrom<'createPlayerSessions'>) => Promise<ReturnTypeFrom<'createPlayerSessions'>>  = async params => {
  // undefined
    return this.client.createPlayerSessions(params as any).promise();
  }

  createScript: (params: RawParamsFrom<'createScript'>) => Promise<ReturnTypeFrom<'createScript'>>  = async params => {
  // undefined
    return this.client.createScript(params as any).promise();
  }

  createVpcPeeringAuthorization: (params: RawParamsFrom<'createVpcPeeringAuthorization'>) => Promise<ReturnTypeFrom<'createVpcPeeringAuthorization'>>  = async params => {
  // undefined
    return this.client.createVpcPeeringAuthorization(params as any).promise();
  }

  createVpcPeeringConnection: (params: RawParamsFrom<'createVpcPeeringConnection'>) => Promise<ReturnTypeFrom<'createVpcPeeringConnection'>>  = async params => {
  // undefined
    return this.client.createVpcPeeringConnection(params as any).promise();
  }

  deleteAlias: (params: RawParamsFrom<'deleteAlias'>) => Promise<ReturnTypeFrom<'deleteAlias'>>  = async params => {
  // undefined
    return this.client.deleteAlias(params as any).promise();
  }

  deleteBuild: (params: RawParamsFrom<'deleteBuild'>) => Promise<ReturnTypeFrom<'deleteBuild'>>  = async params => {
  // undefined
    return this.client.deleteBuild(params as any).promise();
  }

  deleteFleet: (params: RawParamsFrom<'deleteFleet'>) => Promise<ReturnTypeFrom<'deleteFleet'>>  = async params => {
  // undefined
    return this.client.deleteFleet(params as any).promise();
  }

  deleteFleetLocations: (params: RawParamsFrom<'deleteFleetLocations'>) => Promise<ReturnTypeFrom<'deleteFleetLocations'>>  = async params => {
  // undefined
    return this.client.deleteFleetLocations(params as any).promise();
  }

  deleteGameServerGroup: (params: RawParamsFrom<'deleteGameServerGroup'>) => Promise<ReturnTypeFrom<'deleteGameServerGroup'>>  = async params => {
  // undefined
    return this.client.deleteGameServerGroup(params as any).promise();
  }

  deleteGameSessionQueue: (params: RawParamsFrom<'deleteGameSessionQueue'>) => Promise<ReturnTypeFrom<'deleteGameSessionQueue'>>  = async params => {
  // undefined
    return this.client.deleteGameSessionQueue(params as any).promise();
  }

  deleteLocation: (params: RawParamsFrom<'deleteLocation'>) => Promise<ReturnTypeFrom<'deleteLocation'>>  = async params => {
  // undefined
    return this.client.deleteLocation(params as any).promise();
  }

  deleteMatchmakingConfiguration: (params: RawParamsFrom<'deleteMatchmakingConfiguration'>) => Promise<ReturnTypeFrom<'deleteMatchmakingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteMatchmakingConfiguration(params as any).promise();
  }

  deleteMatchmakingRuleSet: (params: RawParamsFrom<'deleteMatchmakingRuleSet'>) => Promise<ReturnTypeFrom<'deleteMatchmakingRuleSet'>>  = async params => {
  // undefined
    return this.client.deleteMatchmakingRuleSet(params as any).promise();
  }

  deleteScalingPolicy: (params: RawParamsFrom<'deleteScalingPolicy'>) => Promise<ReturnTypeFrom<'deleteScalingPolicy'>>  = async params => {
  // undefined
    return this.client.deleteScalingPolicy(params as any).promise();
  }

  deleteScript: (params: RawParamsFrom<'deleteScript'>) => Promise<ReturnTypeFrom<'deleteScript'>>  = async params => {
  // undefined
    return this.client.deleteScript(params as any).promise();
  }

  deleteVpcPeeringAuthorization: (params: RawParamsFrom<'deleteVpcPeeringAuthorization'>) => Promise<ReturnTypeFrom<'deleteVpcPeeringAuthorization'>>  = async params => {
  // undefined
    return this.client.deleteVpcPeeringAuthorization(params as any).promise();
  }

  deleteVpcPeeringConnection: (params: RawParamsFrom<'deleteVpcPeeringConnection'>) => Promise<ReturnTypeFrom<'deleteVpcPeeringConnection'>>  = async params => {
  // undefined
    return this.client.deleteVpcPeeringConnection(params as any).promise();
  }

  deregisterCompute: (params: RawParamsFrom<'deregisterCompute'>) => Promise<ReturnTypeFrom<'deregisterCompute'>>  = async params => {
  // undefined
    return this.client.deregisterCompute(params as any).promise();
  }

  deregisterGameServer: (params: RawParamsFrom<'deregisterGameServer'>) => Promise<ReturnTypeFrom<'deregisterGameServer'>>  = async params => {
  // undefined
    return this.client.deregisterGameServer(params as any).promise();
  }

  describeAlias: (params: RawParamsFrom<'describeAlias'>) => Promise<ReturnTypeFrom<'describeAlias'>>  = async params => {
  // undefined
    return this.client.describeAlias(params as any).promise();
  }

  describeBuild: (params: RawParamsFrom<'describeBuild'>) => Promise<ReturnTypeFrom<'describeBuild'>>  = async params => {
  // undefined
    return this.client.describeBuild(params as any).promise();
  }

  describeCompute: (params: RawParamsFrom<'describeCompute'>) => Promise<ReturnTypeFrom<'describeCompute'>>  = async params => {
  // undefined
    return this.client.describeCompute(params as any).promise();
  }

  describeEC2InstanceLimits: (params: RawParamsFrom<'describeEC2InstanceLimits'>) => Promise<ReturnTypeFrom<'describeEC2InstanceLimits'>>  = async params => {
  // undefined
    return this.client.describeEC2InstanceLimits(params as any).promise();
  }

  async describeFleetAttributes(params: { [K in keyof ParamsFrom<'describeFleetAttributes', { next?: string, limit?: number }>]: ParamsFrom<'describeFleetAttributes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFleetAttributes'>]-?: ReturnTypeFrom<'describeFleetAttributes'>[K]}['FleetAttributes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"FleetAttributes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeFleetAttributes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFleetAttributes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FleetAttributes ?? []) ? (result.FleetAttributes ?? []) : [result.FleetAttributes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFleetCapacity(params: { [K in keyof ParamsFrom<'describeFleetCapacity', { next?: string, limit?: number }>]: ParamsFrom<'describeFleetCapacity', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFleetCapacity'>]-?: ReturnTypeFrom<'describeFleetCapacity'>[K]}['FleetCapacity'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"FleetCapacity"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeFleetCapacity({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFleetCapacity' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FleetCapacity ?? []) ? (result.FleetCapacity ?? []) : [result.FleetCapacity]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeFleetEvents(params: { [K in keyof ParamsFrom<'describeFleetEvents', { next?: string, limit?: number }>]: ParamsFrom<'describeFleetEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFleetEvents'>]-?: ReturnTypeFrom<'describeFleetEvents'>[K]}['Events'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeFleetEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFleetEvents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeFleetLocationAttributes: (params: RawParamsFrom<'describeFleetLocationAttributes'>) => Promise<ReturnTypeFrom<'describeFleetLocationAttributes'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeFleetLocationAttributes(params as any).promise();
  }

  describeFleetLocationCapacity: (params: RawParamsFrom<'describeFleetLocationCapacity'>) => Promise<ReturnTypeFrom<'describeFleetLocationCapacity'>>  = async params => {
  // undefined
    return this.client.describeFleetLocationCapacity(params as any).promise();
  }

  describeFleetLocationUtilization: (params: RawParamsFrom<'describeFleetLocationUtilization'>) => Promise<ReturnTypeFrom<'describeFleetLocationUtilization'>>  = async params => {
  // undefined
    return this.client.describeFleetLocationUtilization(params as any).promise();
  }

  describeFleetPortSettings: (params: RawParamsFrom<'describeFleetPortSettings'>) => Promise<ReturnTypeFrom<'describeFleetPortSettings'>>  = async params => {
  // undefined
    return this.client.describeFleetPortSettings(params as any).promise();
  }

  async describeFleetUtilization(params: { [K in keyof ParamsFrom<'describeFleetUtilization', { next?: string, limit?: number }>]: ParamsFrom<'describeFleetUtilization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeFleetUtilization'>]-?: ReturnTypeFrom<'describeFleetUtilization'>[K]}['FleetUtilization'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"FleetUtilization"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeFleetUtilization({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeFleetUtilization' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FleetUtilization ?? []) ? (result.FleetUtilization ?? []) : [result.FleetUtilization]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeGameServer: (params: RawParamsFrom<'describeGameServer'>) => Promise<ReturnTypeFrom<'describeGameServer'>>  = async params => {
  // undefined
    return this.client.describeGameServer(params as any).promise();
  }

  describeGameServerGroup: (params: RawParamsFrom<'describeGameServerGroup'>) => Promise<ReturnTypeFrom<'describeGameServerGroup'>>  = async params => {
  // undefined
    return this.client.describeGameServerGroup(params as any).promise();
  }

  async describeGameServerInstances(params: { [K in keyof ParamsFrom<'describeGameServerInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeGameServerInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeGameServerInstances'>]-?: ReturnTypeFrom<'describeGameServerInstances'>[K]}['GameServerInstances'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameServerInstances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeGameServerInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeGameServerInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GameServerInstances ?? []) ? (result.GameServerInstances ?? []) : [result.GameServerInstances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGameSessionDetails(params: { [K in keyof ParamsFrom<'describeGameSessionDetails', { next?: string, limit?: number }>]: ParamsFrom<'describeGameSessionDetails', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeGameSessionDetails'>]-?: ReturnTypeFrom<'describeGameSessionDetails'>[K]}['GameSessionDetails'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameSessionDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeGameSessionDetails({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeGameSessionDetails' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GameSessionDetails ?? []) ? (result.GameSessionDetails ?? []) : [result.GameSessionDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeGameSessionPlacement: (params: RawParamsFrom<'describeGameSessionPlacement'>) => Promise<ReturnTypeFrom<'describeGameSessionPlacement'>>  = async params => {
  // undefined
    return this.client.describeGameSessionPlacement(params as any).promise();
  }

  async describeGameSessionQueues(params: { [K in keyof ParamsFrom<'describeGameSessionQueues', { next?: string, limit?: number }>]: ParamsFrom<'describeGameSessionQueues', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeGameSessionQueues'>]-?: ReturnTypeFrom<'describeGameSessionQueues'>[K]}['GameSessionQueues'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameSessionQueues"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeGameSessionQueues({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeGameSessionQueues' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GameSessionQueues ?? []) ? (result.GameSessionQueues ?? []) : [result.GameSessionQueues]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeGameSessions(params: { [K in keyof ParamsFrom<'describeGameSessions', { next?: string, limit?: number }>]: ParamsFrom<'describeGameSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeGameSessions'>]-?: ReturnTypeFrom<'describeGameSessions'>[K]}['GameSessions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameSessions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeGameSessions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeGameSessions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GameSessions ?? []) ? (result.GameSessions ?? []) : [result.GameSessions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstances(params: { [K in keyof ParamsFrom<'describeInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstances'>]-?: ReturnTypeFrom<'describeInstances'>[K]}['Instances'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Instances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Instances ?? []) ? (result.Instances ?? []) : [result.Instances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeMatchmaking: (params: RawParamsFrom<'describeMatchmaking'>) => Promise<ReturnTypeFrom<'describeMatchmaking'>>  = async params => {
  // undefined
    return this.client.describeMatchmaking(params as any).promise();
  }

  async describeMatchmakingConfigurations(params: { [K in keyof ParamsFrom<'describeMatchmakingConfigurations', { next?: string, limit?: number }>]: ParamsFrom<'describeMatchmakingConfigurations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMatchmakingConfigurations'>]-?: ReturnTypeFrom<'describeMatchmakingConfigurations'>[K]}['Configurations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Configurations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeMatchmakingConfigurations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMatchmakingConfigurations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Configurations ?? []) ? (result.Configurations ?? []) : [result.Configurations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMatchmakingRuleSets(params: { [K in keyof ParamsFrom<'describeMatchmakingRuleSets', { next?: string, limit?: number }>]: ParamsFrom<'describeMatchmakingRuleSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMatchmakingRuleSets'>]-?: ReturnTypeFrom<'describeMatchmakingRuleSets'>[K]}['RuleSets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"RuleSets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeMatchmakingRuleSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMatchmakingRuleSets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RuleSets ?? []) ? (result.RuleSets ?? []) : [result.RuleSets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePlayerSessions(params: { [K in keyof ParamsFrom<'describePlayerSessions', { next?: string, limit?: number }>]: ParamsFrom<'describePlayerSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePlayerSessions'>]-?: ReturnTypeFrom<'describePlayerSessions'>[K]}['PlayerSessions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"PlayerSessions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describePlayerSessions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePlayerSessions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PlayerSessions ?? []) ? (result.PlayerSessions ?? []) : [result.PlayerSessions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeRuntimeConfiguration: (params: RawParamsFrom<'describeRuntimeConfiguration'>) => Promise<ReturnTypeFrom<'describeRuntimeConfiguration'>>  = async params => {
  // undefined
    return this.client.describeRuntimeConfiguration(params as any).promise();
  }

  async describeScalingPolicies(params: { [K in keyof ParamsFrom<'describeScalingPolicies', { next?: string, limit?: number }>]: ParamsFrom<'describeScalingPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScalingPolicies'>]-?: ReturnTypeFrom<'describeScalingPolicies'>[K]}['ScalingPolicies'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ScalingPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeScalingPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeScalingPolicies' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScalingPolicies ?? []) ? (result.ScalingPolicies ?? []) : [result.ScalingPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeScript: (params: RawParamsFrom<'describeScript'>) => Promise<ReturnTypeFrom<'describeScript'>>  = async params => {
  // undefined
    return this.client.describeScript(params as any).promise();
  }

  describeVpcPeeringAuthorizations: (params: RawParamsFrom<'describeVpcPeeringAuthorizations'>) => Promise<ReturnTypeFrom<'describeVpcPeeringAuthorizations'>>  = async params => {
  // undefined
    return this.client.describeVpcPeeringAuthorizations(params as any).promise();
  }

  describeVpcPeeringConnections: (params: RawParamsFrom<'describeVpcPeeringConnections'>) => Promise<ReturnTypeFrom<'describeVpcPeeringConnections'>>  = async params => {
  // undefined
    return this.client.describeVpcPeeringConnections(params as any).promise();
  }

  getComputeAccess: (params: RawParamsFrom<'getComputeAccess'>) => Promise<ReturnTypeFrom<'getComputeAccess'>>  = async params => {
  // undefined
    return this.client.getComputeAccess(params as any).promise();
  }

  getComputeAuthToken: (params: RawParamsFrom<'getComputeAuthToken'>) => Promise<ReturnTypeFrom<'getComputeAuthToken'>>  = async params => {
  // undefined
    return this.client.getComputeAuthToken(params as any).promise();
  }

  getGameSessionLogUrl: (params: RawParamsFrom<'getGameSessionLogUrl'>) => Promise<ReturnTypeFrom<'getGameSessionLogUrl'>>  = async params => {
  // undefined
    return this.client.getGameSessionLogUrl(params as any).promise();
  }

  getInstanceAccess: (params: RawParamsFrom<'getInstanceAccess'>) => Promise<ReturnTypeFrom<'getInstanceAccess'>>  = async params => {
  // undefined
    return this.client.getInstanceAccess(params as any).promise();
  }

  async listAliases(params: { [K in keyof ParamsFrom<'listAliases', { next?: string, limit?: number }>]: ParamsFrom<'listAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAliases'>]-?: ReturnTypeFrom<'listAliases'>[K]}['Aliases'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Aliases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listAliases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAliases' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Aliases ?? []) ? (result.Aliases ?? []) : [result.Aliases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBuilds(params: { [K in keyof ParamsFrom<'listBuilds', { next?: string, limit?: number }>]: ParamsFrom<'listBuilds', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBuilds'>]-?: ReturnTypeFrom<'listBuilds'>[K]}['Builds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Builds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listBuilds({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBuilds' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Builds ?? []) ? (result.Builds ?? []) : [result.Builds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCompute(params: { [K in keyof ParamsFrom<'listCompute', { next?: string, limit?: number }>]: ParamsFrom<'listCompute', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCompute'>]-?: ReturnTypeFrom<'listCompute'>[K]}['ComputeList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ComputeList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listCompute({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCompute' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ComputeList ?? []) ? (result.ComputeList ?? []) : [result.ComputeList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleets(params: { [K in keyof ParamsFrom<'listFleets', { next?: string, limit?: number }>]: ParamsFrom<'listFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['FleetIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"FleetIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listFleets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFleets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FleetIds ?? []) ? (result.FleetIds ?? []) : [result.FleetIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGameServerGroups(params: { [K in keyof ParamsFrom<'listGameServerGroups', { next?: string, limit?: number }>]: ParamsFrom<'listGameServerGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGameServerGroups'>]-?: ReturnTypeFrom<'listGameServerGroups'>[K]}['GameServerGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameServerGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGameServerGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGameServerGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GameServerGroups ?? []) ? (result.GameServerGroups ?? []) : [result.GameServerGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGameServers(params: { [K in keyof ParamsFrom<'listGameServers', { next?: string, limit?: number }>]: ParamsFrom<'listGameServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGameServers'>]-?: ReturnTypeFrom<'listGameServers'>[K]}['GameServers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameServers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGameServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGameServers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GameServers ?? []) ? (result.GameServers ?? []) : [result.GameServers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLocations(params: { [K in keyof ParamsFrom<'listLocations', { next?: string, limit?: number }>]: ParamsFrom<'listLocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLocations'>]-?: ReturnTypeFrom<'listLocations'>[K]}['Locations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Locations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listLocations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLocations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Locations ?? []) ? (result.Locations ?? []) : [result.Locations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listScripts(params: { [K in keyof ParamsFrom<'listScripts', { next?: string, limit?: number }>]: ParamsFrom<'listScripts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listScripts'>]-?: ReturnTypeFrom<'listScripts'>[K]}['Scripts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Scripts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listScripts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listScripts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Scripts ?? []) ? (result.Scripts ?? []) : [result.Scripts]) as any;
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

  putScalingPolicy: (params: RawParamsFrom<'putScalingPolicy'>) => Promise<ReturnTypeFrom<'putScalingPolicy'>>  = async params => {
  // undefined
    return this.client.putScalingPolicy(params as any).promise();
  }

  registerCompute: (params: RawParamsFrom<'registerCompute'>) => Promise<ReturnTypeFrom<'registerCompute'>>  = async params => {
  // undefined
    return this.client.registerCompute(params as any).promise();
  }

  registerGameServer: (params: RawParamsFrom<'registerGameServer'>) => Promise<ReturnTypeFrom<'registerGameServer'>>  = async params => {
  // undefined
    return this.client.registerGameServer(params as any).promise();
  }

  requestUploadCredentials: (params: RawParamsFrom<'requestUploadCredentials'>) => Promise<ReturnTypeFrom<'requestUploadCredentials'>>  = async params => {
  // undefined
    return this.client.requestUploadCredentials(params as any).promise();
  }

  resolveAlias: (params: RawParamsFrom<'resolveAlias'>) => Promise<ReturnTypeFrom<'resolveAlias'>>  = async params => {
  // undefined
    return this.client.resolveAlias(params as any).promise();
  }

  resumeGameServerGroup: (params: RawParamsFrom<'resumeGameServerGroup'>) => Promise<ReturnTypeFrom<'resumeGameServerGroup'>>  = async params => {
  // undefined
    return this.client.resumeGameServerGroup(params as any).promise();
  }

  async searchGameSessions(params: { [K in keyof ParamsFrom<'searchGameSessions', { next?: string, limit?: number }>]: ParamsFrom<'searchGameSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchGameSessions'>]-?: ReturnTypeFrom<'searchGameSessions'>[K]}['GameSessions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"GameSessions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.searchGameSessions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'searchGameSessions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GameSessions ?? []) ? (result.GameSessions ?? []) : [result.GameSessions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startFleetActions: (params: RawParamsFrom<'startFleetActions'>) => Promise<ReturnTypeFrom<'startFleetActions'>>  = async params => {
  // undefined
    return this.client.startFleetActions(params as any).promise();
  }

  startGameSessionPlacement: (params: RawParamsFrom<'startGameSessionPlacement'>) => Promise<ReturnTypeFrom<'startGameSessionPlacement'>>  = async params => {
  // undefined
    return this.client.startGameSessionPlacement(params as any).promise();
  }

  startMatchBackfill: (params: RawParamsFrom<'startMatchBackfill'>) => Promise<ReturnTypeFrom<'startMatchBackfill'>>  = async params => {
  // undefined
    return this.client.startMatchBackfill(params as any).promise();
  }

  startMatchmaking: (params: RawParamsFrom<'startMatchmaking'>) => Promise<ReturnTypeFrom<'startMatchmaking'>>  = async params => {
  // undefined
    return this.client.startMatchmaking(params as any).promise();
  }

  stopFleetActions: (params: RawParamsFrom<'stopFleetActions'>) => Promise<ReturnTypeFrom<'stopFleetActions'>>  = async params => {
  // undefined
    return this.client.stopFleetActions(params as any).promise();
  }

  stopGameSessionPlacement: (params: RawParamsFrom<'stopGameSessionPlacement'>) => Promise<ReturnTypeFrom<'stopGameSessionPlacement'>>  = async params => {
  // undefined
    return this.client.stopGameSessionPlacement(params as any).promise();
  }

  stopMatchmaking: (params: RawParamsFrom<'stopMatchmaking'>) => Promise<ReturnTypeFrom<'stopMatchmaking'>>  = async params => {
  // undefined
    return this.client.stopMatchmaking(params as any).promise();
  }

  suspendGameServerGroup: (params: RawParamsFrom<'suspendGameServerGroup'>) => Promise<ReturnTypeFrom<'suspendGameServerGroup'>>  = async params => {
  // undefined
    return this.client.suspendGameServerGroup(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAlias: (params: RawParamsFrom<'updateAlias'>) => Promise<ReturnTypeFrom<'updateAlias'>>  = async params => {
  // undefined
    return this.client.updateAlias(params as any).promise();
  }

  updateBuild: (params: RawParamsFrom<'updateBuild'>) => Promise<ReturnTypeFrom<'updateBuild'>>  = async params => {
  // undefined
    return this.client.updateBuild(params as any).promise();
  }

  updateFleetAttributes: (params: RawParamsFrom<'updateFleetAttributes'>) => Promise<ReturnTypeFrom<'updateFleetAttributes'>>  = async params => {
  // undefined
    return this.client.updateFleetAttributes(params as any).promise();
  }

  updateFleetCapacity: (params: RawParamsFrom<'updateFleetCapacity'>) => Promise<ReturnTypeFrom<'updateFleetCapacity'>>  = async params => {
  // undefined
    return this.client.updateFleetCapacity(params as any).promise();
  }

  updateFleetPortSettings: (params: RawParamsFrom<'updateFleetPortSettings'>) => Promise<ReturnTypeFrom<'updateFleetPortSettings'>>  = async params => {
  // undefined
    return this.client.updateFleetPortSettings(params as any).promise();
  }

  updateGameServer: (params: RawParamsFrom<'updateGameServer'>) => Promise<ReturnTypeFrom<'updateGameServer'>>  = async params => {
  // undefined
    return this.client.updateGameServer(params as any).promise();
  }

  updateGameServerGroup: (params: RawParamsFrom<'updateGameServerGroup'>) => Promise<ReturnTypeFrom<'updateGameServerGroup'>>  = async params => {
  // undefined
    return this.client.updateGameServerGroup(params as any).promise();
  }

  updateGameSession: (params: RawParamsFrom<'updateGameSession'>) => Promise<ReturnTypeFrom<'updateGameSession'>>  = async params => {
  // undefined
    return this.client.updateGameSession(params as any).promise();
  }

  updateGameSessionQueue: (params: RawParamsFrom<'updateGameSessionQueue'>) => Promise<ReturnTypeFrom<'updateGameSessionQueue'>>  = async params => {
  // undefined
    return this.client.updateGameSessionQueue(params as any).promise();
  }

  updateMatchmakingConfiguration: (params: RawParamsFrom<'updateMatchmakingConfiguration'>) => Promise<ReturnTypeFrom<'updateMatchmakingConfiguration'>>  = async params => {
  // undefined
    return this.client.updateMatchmakingConfiguration(params as any).promise();
  }

  updateRuntimeConfiguration: (params: RawParamsFrom<'updateRuntimeConfiguration'>) => Promise<ReturnTypeFrom<'updateRuntimeConfiguration'>>  = async params => {
  // undefined
    return this.client.updateRuntimeConfiguration(params as any).promise();
  }

  updateScript: (params: RawParamsFrom<'updateScript'>) => Promise<ReturnTypeFrom<'updateScript'>>  = async params => {
  // undefined
    return this.client.updateScript(params as any).promise();
  }

  validateMatchmakingRuleSet: (params: RawParamsFrom<'validateMatchmakingRuleSet'>) => Promise<ReturnTypeFrom<'validateMatchmakingRuleSet'>>  = async params => {
  // undefined
    return this.client.validateMatchmakingRuleSet(params as any).promise();
  }
  
  static fromClient(client: AWSGameLift): GameLift {
    return new GameLift(client) as any;
  }
  
  static client(options?: AWSGameLift.Types.ClientConfiguration): GameLift {
    return new GameLift(new AWSGameLift(options)) as any;
  }
}  
