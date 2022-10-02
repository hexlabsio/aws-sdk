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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'route53-recovery-control-config';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listClusters","listControlPanels"];
    
  createCluster: FunctionTypeFrom<'createCluster'>;

  createControlPanel: FunctionTypeFrom<'createControlPanel'>;

  createRoutingControl: FunctionTypeFrom<'createRoutingControl'>;

  createSafetyRule: FunctionTypeFrom<'createSafetyRule'>;

  deleteCluster: FunctionTypeFrom<'deleteCluster'>;

  deleteControlPanel: FunctionTypeFrom<'deleteControlPanel'>;

  deleteRoutingControl: FunctionTypeFrom<'deleteRoutingControl'>;

  deleteSafetyRule: FunctionTypeFrom<'deleteSafetyRule'>;

  describeCluster: FunctionTypeFrom<'describeCluster'>;

  describeControlPanel: FunctionTypeFrom<'describeControlPanel'>;

  describeRoutingControl: FunctionTypeFrom<'describeRoutingControl'>;

  describeSafetyRule: FunctionTypeFrom<'describeSafetyRule'>;

  listAssociatedRoute53HealthChecks: FunctionTypeFrom<'listAssociatedRoute53HealthChecks'>;

  listClusters: FunctionTypeFrom<'listClusters'>;

  listControlPanels: FunctionTypeFrom<'listControlPanels'>;

  listRoutingControls: FunctionTypeFrom<'listRoutingControls'>;

  listSafetyRules: FunctionTypeFrom<'listSafetyRules'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateControlPanel: FunctionTypeFrom<'updateControlPanel'>;

  updateRoutingControl: FunctionTypeFrom<'updateRoutingControl'>;

  updateSafetyRule: FunctionTypeFrom<'updateSafetyRule'>
}
 
export class Route53RecoveryControlConfig implements ClientType {
  private constructor(private readonly client: AWSRoute53RecoveryControlConfig) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53-recovery-control-config';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listClusters","listControlPanels"] as const;
  
  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createControlPanel(...args: any): Promise<any> {
  // undefined
    return this.client.createControlPanel(...args).promise()
  }

  async createRoutingControl(...args: any): Promise<any> {
  // undefined
    return this.client.createRoutingControl(...args).promise()
  }

  async createSafetyRule(...args: any): Promise<any> {
  // undefined
    return this.client.createSafetyRule(...args).promise()
  }

  async deleteCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCluster(...args).promise()
  }

  async deleteControlPanel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteControlPanel(...args).promise()
  }

  async deleteRoutingControl(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoutingControl(...args).promise()
  }

  async deleteSafetyRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSafetyRule(...args).promise()
  }

  async describeCluster(...args: any): Promise<any> {
  // undefined
    return this.client.describeCluster(...args).promise()
  }

  async describeControlPanel(...args: any): Promise<any> {
  // undefined
    return this.client.describeControlPanel(...args).promise()
  }

  async describeRoutingControl(...args: any): Promise<any> {
  // undefined
    return this.client.describeRoutingControl(...args).promise()
  }

  async describeSafetyRule(...args: any): Promise<any> {
  // undefined
    return this.client.describeSafetyRule(...args).promise()
  }

  async listAssociatedRoute53HealthChecks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAssociatedRoute53HealthChecks(...args).promise()
  }

  async listClusters(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listClusters(...args).promise()
  }

  async listControlPanels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listControlPanels(...args).promise()
  }

  async listRoutingControls(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRoutingControls(...args).promise()
  }

  async listSafetyRules(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSafetyRules(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateControlPanel(...args: any): Promise<any> {
  // undefined
    return this.client.updateControlPanel(...args).promise()
  }

  async updateRoutingControl(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoutingControl(...args).promise()
  }

  async updateSafetyRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateSafetyRule(...args).promise()
  }
  
  static fromClient(client: AWSRoute53RecoveryControlConfig): ClientType {
    return new Route53RecoveryControlConfig(client) as any;
  }
  
  static client(options?: AWSRoute53RecoveryControlConfig.Types.ClientConfiguration): ClientType {
    return new Route53RecoveryControlConfig(new AWSRoute53RecoveryControlConfig(options)) as any;
  }
}  
