import { Request, ComputeOptimizer as AWSComputeOptimizer } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSComputeOptimizer> = AWSComputeOptimizer[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSComputeOptimizer> = AWSComputeOptimizer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSComputeOptimizer[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSComputeOptimizer, Extras> = AWSComputeOptimizer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'compute-optimizer';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly [];
    
  deleteRecommendationPreferences: FunctionTypeFrom<'deleteRecommendationPreferences'>;

  describeRecommendationExportJobs: FunctionTypeFrom<'describeRecommendationExportJobs'>;

  exportAutoScalingGroupRecommendations: FunctionTypeFrom<'exportAutoScalingGroupRecommendations'>;

  exportEBSVolumeRecommendations: FunctionTypeFrom<'exportEBSVolumeRecommendations'>;

  exportEC2InstanceRecommendations: FunctionTypeFrom<'exportEC2InstanceRecommendations'>;

  exportLambdaFunctionRecommendations: FunctionTypeFrom<'exportLambdaFunctionRecommendations'>;

  getAutoScalingGroupRecommendations: FunctionTypeFrom<'getAutoScalingGroupRecommendations'>;

  getEBSVolumeRecommendations: FunctionTypeFrom<'getEBSVolumeRecommendations'>;

  getEC2InstanceRecommendations: FunctionTypeFrom<'getEC2InstanceRecommendations'>;

  getEC2RecommendationProjectedMetrics: FunctionTypeFrom<'getEC2RecommendationProjectedMetrics'>;

  getEffectiveRecommendationPreferences: FunctionTypeFrom<'getEffectiveRecommendationPreferences'>;

  getEnrollmentStatus: FunctionTypeFrom<'getEnrollmentStatus'>;

  getEnrollmentStatusesForOrganization: FunctionTypeFrom<'getEnrollmentStatusesForOrganization'>;

  getLambdaFunctionRecommendations: FunctionTypeFrom<'getLambdaFunctionRecommendations'>;

  getRecommendationPreferences: FunctionTypeFrom<'getRecommendationPreferences'>;

  getRecommendationSummaries: FunctionTypeFrom<'getRecommendationSummaries'>;

  putRecommendationPreferences: FunctionTypeFrom<'putRecommendationPreferences'>;

  updateEnrollmentStatus: FunctionTypeFrom<'updateEnrollmentStatus'>
}
 
export class ComputeOptimizer implements ClientType {
  private constructor(private readonly client: AWSComputeOptimizer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'compute-optimizer';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = [] as const;
  
  async deleteRecommendationPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecommendationPreferences(...args).promise()
  }

  async describeRecommendationExportJobs(...args: any): Promise<any> {
  // undefined
    return this.client.describeRecommendationExportJobs(...args).promise()
  }

  async exportAutoScalingGroupRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.exportAutoScalingGroupRecommendations(...args).promise()
  }

  async exportEBSVolumeRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.exportEBSVolumeRecommendations(...args).promise()
  }

  async exportEC2InstanceRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.exportEC2InstanceRecommendations(...args).promise()
  }

  async exportLambdaFunctionRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.exportLambdaFunctionRecommendations(...args).promise()
  }

  async getAutoScalingGroupRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.getAutoScalingGroupRecommendations(...args).promise()
  }

  async getEBSVolumeRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.getEBSVolumeRecommendations(...args).promise()
  }

  async getEC2InstanceRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.getEC2InstanceRecommendations(...args).promise()
  }

  async getEC2RecommendationProjectedMetrics(...args: any): Promise<any> {
  // undefined
    return this.client.getEC2RecommendationProjectedMetrics(...args).promise()
  }

  async getEffectiveRecommendationPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.getEffectiveRecommendationPreferences(...args).promise()
  }

  async getEnrollmentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getEnrollmentStatus(...args).promise()
  }

  async getEnrollmentStatusesForOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.getEnrollmentStatusesForOrganization(...args).promise()
  }

  async getLambdaFunctionRecommendations(...args: any): Promise<any> {
  // undefined
    return this.client.getLambdaFunctionRecommendations(...args).promise()
  }

  async getRecommendationPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.getRecommendationPreferences(...args).promise()
  }

  async getRecommendationSummaries(...args: any): Promise<any> {
  // undefined
    return this.client.getRecommendationSummaries(...args).promise()
  }

  async putRecommendationPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.putRecommendationPreferences(...args).promise()
  }

  async updateEnrollmentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnrollmentStatus(...args).promise()
  }
  
  static fromClient(client: AWSComputeOptimizer): ClientType {
    return new ComputeOptimizer(client) as any;
  }
  
  static client(options?: AWSComputeOptimizer.Types.ClientConfiguration): ClientType {
    return new ComputeOptimizer(new AWSComputeOptimizer(options)) as any;
  }
}  
