import { Request, Route53RecoveryControlConfig as AWSRoute53RecoveryControlConfig } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRoute53RecoveryControlConfig> = AWSRoute53RecoveryControlConfig[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRoute53RecoveryControlConfig> = AWSRoute53RecoveryControlConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRoute53RecoveryControlConfig[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRoute53RecoveryControlConfig, Extras> = AWSRoute53RecoveryControlConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRoute53RecoveryControlConfig> = AWSRoute53RecoveryControlConfig[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Route53RecoveryControlConfig {
  private constructor(private readonly client: AWSRoute53RecoveryControlConfig) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53-recovery-control-config' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listClusters","listControlPanels"] as const;
  
  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createControlPanel: (params: RawParamsFrom<'createControlPanel'>) => Promise<ReturnTypeFrom<'createControlPanel'>>  = async params => {
  // undefined
    return this.client.createControlPanel(params as any).promise();
  }

  createRoutingControl: (params: RawParamsFrom<'createRoutingControl'>) => Promise<ReturnTypeFrom<'createRoutingControl'>>  = async params => {
  // undefined
    return this.client.createRoutingControl(params as any).promise();
  }

  createSafetyRule: (params: RawParamsFrom<'createSafetyRule'>) => Promise<ReturnTypeFrom<'createSafetyRule'>>  = async params => {
  // undefined
    return this.client.createSafetyRule(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteControlPanel: (params: RawParamsFrom<'deleteControlPanel'>) => Promise<ReturnTypeFrom<'deleteControlPanel'>>  = async params => {
  // undefined
    return this.client.deleteControlPanel(params as any).promise();
  }

  deleteRoutingControl: (params: RawParamsFrom<'deleteRoutingControl'>) => Promise<ReturnTypeFrom<'deleteRoutingControl'>>  = async params => {
  // undefined
    return this.client.deleteRoutingControl(params as any).promise();
  }

  deleteSafetyRule: (params: RawParamsFrom<'deleteSafetyRule'>) => Promise<ReturnTypeFrom<'deleteSafetyRule'>>  = async params => {
  // undefined
    return this.client.deleteSafetyRule(params as any).promise();
  }

  describeCluster: (params: RawParamsFrom<'describeCluster'>) => Promise<ReturnTypeFrom<'describeCluster'>>  = async params => {
  // undefined
    return this.client.describeCluster(params as any).promise();
  }

  describeControlPanel: (params: RawParamsFrom<'describeControlPanel'>) => Promise<ReturnTypeFrom<'describeControlPanel'>>  = async params => {
  // undefined
    return this.client.describeControlPanel(params as any).promise();
  }

  describeRoutingControl: (params: RawParamsFrom<'describeRoutingControl'>) => Promise<ReturnTypeFrom<'describeRoutingControl'>>  = async params => {
  // undefined
    return this.client.describeRoutingControl(params as any).promise();
  }

  describeSafetyRule: (params: RawParamsFrom<'describeSafetyRule'>) => Promise<ReturnTypeFrom<'describeSafetyRule'>>  = async params => {
  // undefined
    return this.client.describeSafetyRule(params as any).promise();
  }

  async listAssociatedRoute53HealthChecks(params: { [K in keyof ParamsFrom<'listAssociatedRoute53HealthChecks', { next?: string, limit?: number }>]: ParamsFrom<'listAssociatedRoute53HealthChecks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssociatedRoute53HealthChecks'>]-?: ReturnTypeFrom<'listAssociatedRoute53HealthChecks'>[K]}['HealthCheckIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HealthCheckIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssociatedRoute53HealthChecks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAssociatedRoute53HealthChecks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.HealthCheckIds ?? []) ? (result.HealthCheckIds ?? []) : [result.HealthCheckIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listClusters(params: { [K in keyof ParamsFrom<'listClusters', { next?: string, limit?: number }>]: ParamsFrom<'listClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listClusters'>]-?: ReturnTypeFrom<'listClusters'>[K]}['Clusters'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Clusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listClusters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Clusters ?? []) ? (result.Clusters ?? []) : [result.Clusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listControlPanels(params: { [K in keyof ParamsFrom<'listControlPanels', { next?: string, limit?: number }>]: ParamsFrom<'listControlPanels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listControlPanels'>]-?: ReturnTypeFrom<'listControlPanels'>[K]}['ControlPanels'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ControlPanels"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listControlPanels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listControlPanels' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ControlPanels ?? []) ? (result.ControlPanels ?? []) : [result.ControlPanels]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoutingControls(params: { [K in keyof ParamsFrom<'listRoutingControls', { next?: string, limit?: number }>]: ParamsFrom<'listRoutingControls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRoutingControls'>]-?: ReturnTypeFrom<'listRoutingControls'>[K]}['RoutingControls'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RoutingControls"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRoutingControls({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRoutingControls' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RoutingControls ?? []) ? (result.RoutingControls ?? []) : [result.RoutingControls]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSafetyRules(params: { [K in keyof ParamsFrom<'listSafetyRules', { next?: string, limit?: number }>]: ParamsFrom<'listSafetyRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSafetyRules'>]-?: ReturnTypeFrom<'listSafetyRules'>[K]}['SafetyRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SafetyRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSafetyRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSafetyRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SafetyRules ?? []) ? (result.SafetyRules ?? []) : [result.SafetyRules]) as any;
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

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateControlPanel: (params: RawParamsFrom<'updateControlPanel'>) => Promise<ReturnTypeFrom<'updateControlPanel'>>  = async params => {
  // undefined
    return this.client.updateControlPanel(params as any).promise();
  }

  updateRoutingControl: (params: RawParamsFrom<'updateRoutingControl'>) => Promise<ReturnTypeFrom<'updateRoutingControl'>>  = async params => {
  // undefined
    return this.client.updateRoutingControl(params as any).promise();
  }

  updateSafetyRule: (params: RawParamsFrom<'updateSafetyRule'>) => Promise<ReturnTypeFrom<'updateSafetyRule'>>  = async params => {
  // undefined
    return this.client.updateSafetyRule(params as any).promise();
  }
  
  static fromClient(client: AWSRoute53RecoveryControlConfig): Route53RecoveryControlConfig {
    return new Route53RecoveryControlConfig(client) as any;
  }
  
  static client(options?: AWSRoute53RecoveryControlConfig.Types.ClientConfiguration): Route53RecoveryControlConfig {
    return new Route53RecoveryControlConfig(new AWSRoute53RecoveryControlConfig(options)) as any;
  }
}  
