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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'application-autoscaling';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly [];
    
  deleteScalingPolicy: FunctionTypeFrom<'deleteScalingPolicy'>;

  deleteScheduledAction: FunctionTypeFrom<'deleteScheduledAction'>;

  deregisterScalableTarget: FunctionTypeFrom<'deregisterScalableTarget'>;

  describeScalableTargets(params: { [K in keyof Omit<ParamsFrom<'describeScalableTargets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeScalableTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScalableTargets'>]-?: ReturnTypeFrom<'describeScalableTargets'>[K]}['ScalableTargets'] }>
  ;

  describeScalingActivities(params: { [K in keyof Omit<ParamsFrom<'describeScalingActivities', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeScalingActivities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScalingActivities'>]-?: ReturnTypeFrom<'describeScalingActivities'>[K]}['ScalingActivities'] }>
  ;

  describeScalingPolicies(params: { [K in keyof Omit<ParamsFrom<'describeScalingPolicies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeScalingPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScalingPolicies'>]-?: ReturnTypeFrom<'describeScalingPolicies'>[K]}['ScalingPolicies'] }>
  ;

  describeScheduledActions(params: { [K in keyof Omit<ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeScheduledActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeScheduledActions'>]-?: ReturnTypeFrom<'describeScheduledActions'>[K]}['ScheduledActions'] }>
  ;

  putScalingPolicy: FunctionTypeFrom<'putScalingPolicy'>;

  putScheduledAction: FunctionTypeFrom<'putScheduledAction'>;

  registerScalableTarget: FunctionTypeFrom<'registerScalableTarget'>
}
 
export class ApplicationAutoScaling implements ClientType {
  private constructor(private readonly client: AWSApplicationAutoScaling) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'application-autoscaling';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = [] as const;
  
  async deleteScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScalingPolicy(...args).promise()
  }

  async deleteScheduledAction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScheduledAction(...args).promise()
  }

  async deregisterScalableTarget(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterScalableTarget(...args).promise()
  }

  async describeScalableTargets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScalableTargets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScalableTargets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScalableTargets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScalingActivities(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScalingActivities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScalingActivities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScalingActivities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScalingPolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScalingPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScalingPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScalingPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeScheduledActions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledActions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeScheduledActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScheduledActions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putScalingPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putScalingPolicy(...args).promise()
  }

  async putScheduledAction(...args: any): Promise<any> {
  // undefined
    return this.client.putScheduledAction(...args).promise()
  }

  async registerScalableTarget(...args: any): Promise<any> {
  // undefined
    return this.client.registerScalableTarget(...args).promise()
  }
  
  static fromClient(client: AWSApplicationAutoScaling): ClientType {
    return new ApplicationAutoScaling(client) as any;
  }
  
  static client(options?: AWSApplicationAutoScaling.Types.ClientConfiguration): ClientType {
    return new ApplicationAutoScaling(new AWSApplicationAutoScaling(options)) as any;
  }
}  
