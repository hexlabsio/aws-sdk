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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRoute53RecoveryCluster> = AWSRoute53RecoveryCluster[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Route53RecoveryCluster {
  private constructor(private readonly client: AWSRoute53RecoveryCluster) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53-recovery-cluster' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listRoutingControls"] as const;
  
  getRoutingControlState: (params: RawParamsFrom<'getRoutingControlState'>) => Promise<ReturnTypeFrom<'getRoutingControlState'>>  = async params => {
  // undefined
    return this.client.getRoutingControlState(params as any).promise();
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

  updateRoutingControlState: (params: RawParamsFrom<'updateRoutingControlState'>) => Promise<ReturnTypeFrom<'updateRoutingControlState'>>  = async params => {
  // undefined
    return this.client.updateRoutingControlState(params as any).promise();
  }

  updateRoutingControlStates: (params: RawParamsFrom<'updateRoutingControlStates'>) => Promise<ReturnTypeFrom<'updateRoutingControlStates'>>  = async params => {
  // undefined
    return this.client.updateRoutingControlStates(params as any).promise();
  }
  
  static fromClient(client: AWSRoute53RecoveryCluster): Route53RecoveryCluster {
    return new Route53RecoveryCluster(client) as any;
  }
  
  static client(options?: AWSRoute53RecoveryCluster.Types.ClientConfiguration): Route53RecoveryCluster {
    return new Route53RecoveryCluster(new AWSRoute53RecoveryCluster(options)) as any;
  }
}  
