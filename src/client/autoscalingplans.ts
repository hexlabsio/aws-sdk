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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'autoscaling-plans';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly [];
    
  createScalingPlan: FunctionTypeFrom<'createScalingPlan'>;

  deleteScalingPlan: FunctionTypeFrom<'deleteScalingPlan'>;

  describeScalingPlanResources: FunctionTypeFrom<'describeScalingPlanResources'>;

  describeScalingPlans: FunctionTypeFrom<'describeScalingPlans'>;

  getScalingPlanResourceForecastData: FunctionTypeFrom<'getScalingPlanResourceForecastData'>;

  updateScalingPlan: FunctionTypeFrom<'updateScalingPlan'>
}
 
export class AutoScalingPlans implements ClientType {
  private constructor(private readonly client: AWSAutoScalingPlans) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'autoscaling-plans';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = [] as const;
  
  async createScalingPlan(...args: any): Promise<any> {
  // undefined
    return this.client.createScalingPlan(...args).promise()
  }

  async deleteScalingPlan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteScalingPlan(...args).promise()
  }

  async describeScalingPlanResources(...args: any): Promise<any> {
  // undefined
    return this.client.describeScalingPlanResources(...args).promise()
  }

  async describeScalingPlans(...args: any): Promise<any> {
  // undefined
    return this.client.describeScalingPlans(...args).promise()
  }

  async getScalingPlanResourceForecastData(...args: any): Promise<any> {
  // undefined
    return this.client.getScalingPlanResourceForecastData(...args).promise()
  }

  async updateScalingPlan(...args: any): Promise<any> {
  // undefined
    return this.client.updateScalingPlan(...args).promise()
  }
  
  static fromClient(client: AWSAutoScalingPlans): ClientType {
    return new AutoScalingPlans(client) as any;
  }
  
  static client(options?: AWSAutoScalingPlans.Types.ClientConfiguration): ClientType {
    return new AutoScalingPlans(new AWSAutoScalingPlans(options)) as any;
  }
}  
