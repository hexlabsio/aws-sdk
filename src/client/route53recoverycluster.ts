import { Request, Route53RecoveryCluster as AWSRoute53RecoveryCluster } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRoute53RecoveryCluster> = AWSRoute53RecoveryCluster[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRoute53RecoveryCluster> = AWSRoute53RecoveryCluster[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRoute53RecoveryCluster[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRoute53RecoveryCluster, Extras> = AWSRoute53RecoveryCluster[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'route53-recovery-cluster';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listRoutingControls"];
    
  getRoutingControlState: FunctionTypeFrom<'getRoutingControlState'>;

  listRoutingControls(params: { [K in keyof Omit<ParamsFrom<'listRoutingControls', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRoutingControls', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoutingControls'>]-?: ReturnTypeFrom<'listRoutingControls'>[K]}['RoutingControls'] }>
  listRoutingControls(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoutingControls'>]-?: ReturnTypeFrom<'listRoutingControls'>[K]}['RoutingControls'] }>;

  updateRoutingControlState: FunctionTypeFrom<'updateRoutingControlState'>;

  updateRoutingControlStates: FunctionTypeFrom<'updateRoutingControlStates'>
}
 
export class Route53RecoveryCluster implements ClientType {
  private constructor(private readonly client: AWSRoute53RecoveryCluster) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53-recovery-cluster';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listRoutingControls"] as const;
  
  async getRoutingControlState(...args: any): Promise<any> {
  // undefined
    return this.client.getRoutingControlState(...args).promise()
  }

  async listRoutingControls(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RoutingControls"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRoutingControls(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RoutingControls ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async updateRoutingControlState(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoutingControlState(...args).promise()
  }

  async updateRoutingControlStates(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoutingControlStates(...args).promise()
  }
  
  static fromClient(client: AWSRoute53RecoveryCluster): ClientType {
    return new Route53RecoveryCluster(client) as any;
  }
  
  static client(options?: AWSRoute53RecoveryCluster.Types.ClientConfiguration): ClientType {
    return new Route53RecoveryCluster(new AWSRoute53RecoveryCluster(options)) as any;
  }
}  
