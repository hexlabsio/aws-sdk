import { Request, ApplicationAutoScaling as AWSApplicationAutoScaling } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSApplicationAutoScaling> = AWSApplicationAutoScaling[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSApplicationAutoScaling> = AWSApplicationAutoScaling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSApplicationAutoScaling[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSApplicationAutoScaling, Extras> = AWSApplicationAutoScaling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSApplicationAutoScaling> = AWSApplicationAutoScaling[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ApplicationAutoScaling {
  private constructor(private readonly client: AWSApplicationAutoScaling) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'application-autoscaling' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = [] as const;
  
  deleteScalingPolicy: (params: RawParamsFrom<'deleteScalingPolicy'>) => Promise<ReturnTypeFrom<'deleteScalingPolicy'>>  = async params => {
  // undefined
    return this.client.deleteScalingPolicy(params as any).promise();
  }

  deleteScheduledAction: (params: RawParamsFrom<'deleteScheduledAction'>) => Promise<ReturnTypeFrom<'deleteScheduledAction'>>  = async params => {
  // undefined
    return this.client.deleteScheduledAction(params as any).promise();
  }

  deregisterScalableTarget: (params: RawParamsFrom<'deregisterScalableTarget'>) => Promise<ReturnTypeFrom<'deregisterScalableTarget'>>  = async params => {
  // undefined
    return this.client.deregisterScalableTarget(params as any).promise();
  }

  async describeScalableTargets(params: { [K in keyof ParamsFrom<'describeScalableTargets', { next?: string, limit?: number }>]: ParamsFrom<'describeScalableTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScalableTargets'>]-?: ReturnTypeFrom<'describeScalableTargets'>[K]}['ScalableTargets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScalableTargets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScalableTargets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ScalableTargets ?? []) ? (result.ScalableTargets ?? []) : [result.ScalableTargets]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeScalingActivities(params: { [K in keyof ParamsFrom<'describeScalingActivities', { next?: string, limit?: number }>]: ParamsFrom<'describeScalingActivities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScalingActivities'>]-?: ReturnTypeFrom<'describeScalingActivities'>[K]}['ScalingActivities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScalingActivities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScalingActivities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ScalingActivities ?? []) ? (result.ScalingActivities ?? []) : [result.ScalingActivities]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeScalingPolicies(params: { [K in keyof ParamsFrom<'describeScalingPolicies', { next?: string, limit?: number }>]: ParamsFrom<'describeScalingPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScalingPolicies'>]-?: ReturnTypeFrom<'describeScalingPolicies'>[K]}['ScalingPolicies'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScalingPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScalingPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ScalingPolicies ?? []) ? (result.ScalingPolicies ?? []) : [result.ScalingPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeScheduledActions(params: { [K in keyof ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>]: ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeScheduledActions'>]-?: ReturnTypeFrom<'describeScheduledActions'>[K]}['ScheduledActions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledActions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScheduledActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ScheduledActions ?? []) ? (result.ScheduledActions ?? []) : [result.ScheduledActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putScalingPolicy: (params: RawParamsFrom<'putScalingPolicy'>) => Promise<ReturnTypeFrom<'putScalingPolicy'>>  = async params => {
  // undefined
    return this.client.putScalingPolicy(params as any).promise();
  }

  putScheduledAction: (params: RawParamsFrom<'putScheduledAction'>) => Promise<ReturnTypeFrom<'putScheduledAction'>>  = async params => {
  // undefined
    return this.client.putScheduledAction(params as any).promise();
  }

  registerScalableTarget: (params: RawParamsFrom<'registerScalableTarget'>) => Promise<ReturnTypeFrom<'registerScalableTarget'>>  = async params => {
  // undefined
    return this.client.registerScalableTarget(params as any).promise();
  }
  
  static fromClient(client: AWSApplicationAutoScaling): ApplicationAutoScaling {
    return new ApplicationAutoScaling(client) as any;
  }
  
  static client(options?: AWSApplicationAutoScaling.Types.ClientConfiguration): ApplicationAutoScaling {
    return new ApplicationAutoScaling(new AWSApplicationAutoScaling(options)) as any;
  }
}  
