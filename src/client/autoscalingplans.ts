import { Request, AutoScalingPlans as AWSAutoScalingPlans } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAutoScalingPlans> = AWSAutoScalingPlans[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAutoScalingPlans> = AWSAutoScalingPlans[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAutoScalingPlans[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAutoScalingPlans, Extras> = AWSAutoScalingPlans[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAutoScalingPlans> = AWSAutoScalingPlans[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AutoScalingPlans {
  private constructor(private readonly client: AWSAutoScalingPlans) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'autoscaling-plans' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = [] as const;
  
  createScalingPlan: (params: RawParamsFrom<'createScalingPlan'>) => Promise<ReturnTypeFrom<'createScalingPlan'>>  = async params => {
  // undefined
    return this.client.createScalingPlan(params as any).promise();
  }

  deleteScalingPlan: (params: RawParamsFrom<'deleteScalingPlan'>) => Promise<ReturnTypeFrom<'deleteScalingPlan'>>  = async params => {
  // undefined
    return this.client.deleteScalingPlan(params as any).promise();
  }

  describeScalingPlanResources: (params: RawParamsFrom<'describeScalingPlanResources'>) => Promise<ReturnTypeFrom<'describeScalingPlanResources'>>  = async params => {
  // undefined
    return this.client.describeScalingPlanResources(params as any).promise();
  }

  describeScalingPlans: (params: RawParamsFrom<'describeScalingPlans'>) => Promise<ReturnTypeFrom<'describeScalingPlans'>>  = async params => {
  // undefined
    return this.client.describeScalingPlans(params as any).promise();
  }

  getScalingPlanResourceForecastData: (params: RawParamsFrom<'getScalingPlanResourceForecastData'>) => Promise<ReturnTypeFrom<'getScalingPlanResourceForecastData'>>  = async params => {
  // undefined
    return this.client.getScalingPlanResourceForecastData(params as any).promise();
  }

  updateScalingPlan: (params: RawParamsFrom<'updateScalingPlan'>) => Promise<ReturnTypeFrom<'updateScalingPlan'>>  = async params => {
  // undefined
    return this.client.updateScalingPlan(params as any).promise();
  }
  
  static fromClient(client: AWSAutoScalingPlans): AutoScalingPlans {
    return new AutoScalingPlans(client) as any;
  }
  
  static client(options?: AWSAutoScalingPlans.Types.ClientConfiguration): AutoScalingPlans {
    return new AutoScalingPlans(new AWSAutoScalingPlans(options)) as any;
  }
}  
