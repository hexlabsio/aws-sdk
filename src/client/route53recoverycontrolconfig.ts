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

  listAssociatedRoute53HealthChecks: (params: RawParamsFrom<'listAssociatedRoute53HealthChecks'>) => Promise<ReturnTypeFrom<'listAssociatedRoute53HealthChecks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAssociatedRoute53HealthChecks(params as any).promise();
  }

  listClusters: (params: RawParamsFrom<'listClusters'>) => Promise<ReturnTypeFrom<'listClusters'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listClusters(params as any).promise();
  }

  listControlPanels: (params: RawParamsFrom<'listControlPanels'>) => Promise<ReturnTypeFrom<'listControlPanels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listControlPanels(params as any).promise();
  }

  listRoutingControls: (params: RawParamsFrom<'listRoutingControls'>) => Promise<ReturnTypeFrom<'listRoutingControls'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRoutingControls(params as any).promise();
  }

  listSafetyRules: (params: RawParamsFrom<'listSafetyRules'>) => Promise<ReturnTypeFrom<'listSafetyRules'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSafetyRules(params as any).promise();
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
