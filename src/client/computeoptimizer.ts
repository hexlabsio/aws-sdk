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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSComputeOptimizer> = AWSComputeOptimizer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ComputeOptimizer {
  private constructor(private readonly client: AWSComputeOptimizer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'compute-optimizer' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = [] as const;
  
  deleteRecommendationPreferences: (params: RawParamsFrom<'deleteRecommendationPreferences'>) => Promise<ReturnTypeFrom<'deleteRecommendationPreferences'>>  = async params => {
  // undefined
    return this.client.deleteRecommendationPreferences(params as any).promise();
  }

  describeRecommendationExportJobs: (params: RawParamsFrom<'describeRecommendationExportJobs'>) => Promise<ReturnTypeFrom<'describeRecommendationExportJobs'>>  = async params => {
  // undefined
    return this.client.describeRecommendationExportJobs(params as any).promise();
  }

  exportAutoScalingGroupRecommendations: (params: RawParamsFrom<'exportAutoScalingGroupRecommendations'>) => Promise<ReturnTypeFrom<'exportAutoScalingGroupRecommendations'>>  = async params => {
  // undefined
    return this.client.exportAutoScalingGroupRecommendations(params as any).promise();
  }

  exportEBSVolumeRecommendations: (params: RawParamsFrom<'exportEBSVolumeRecommendations'>) => Promise<ReturnTypeFrom<'exportEBSVolumeRecommendations'>>  = async params => {
  // undefined
    return this.client.exportEBSVolumeRecommendations(params as any).promise();
  }

  exportEC2InstanceRecommendations: (params: RawParamsFrom<'exportEC2InstanceRecommendations'>) => Promise<ReturnTypeFrom<'exportEC2InstanceRecommendations'>>  = async params => {
  // undefined
    return this.client.exportEC2InstanceRecommendations(params as any).promise();
  }

  exportLambdaFunctionRecommendations: (params: RawParamsFrom<'exportLambdaFunctionRecommendations'>) => Promise<ReturnTypeFrom<'exportLambdaFunctionRecommendations'>>  = async params => {
  // undefined
    return this.client.exportLambdaFunctionRecommendations(params as any).promise();
  }

  getAutoScalingGroupRecommendations: (params: RawParamsFrom<'getAutoScalingGroupRecommendations'>) => Promise<ReturnTypeFrom<'getAutoScalingGroupRecommendations'>>  = async params => {
  // undefined
    return this.client.getAutoScalingGroupRecommendations(params as any).promise();
  }

  getEBSVolumeRecommendations: (params: RawParamsFrom<'getEBSVolumeRecommendations'>) => Promise<ReturnTypeFrom<'getEBSVolumeRecommendations'>>  = async params => {
  // undefined
    return this.client.getEBSVolumeRecommendations(params as any).promise();
  }

  getEC2InstanceRecommendations: (params: RawParamsFrom<'getEC2InstanceRecommendations'>) => Promise<ReturnTypeFrom<'getEC2InstanceRecommendations'>>  = async params => {
  // undefined
    return this.client.getEC2InstanceRecommendations(params as any).promise();
  }

  getEC2RecommendationProjectedMetrics: (params: RawParamsFrom<'getEC2RecommendationProjectedMetrics'>) => Promise<ReturnTypeFrom<'getEC2RecommendationProjectedMetrics'>>  = async params => {
  // undefined
    return this.client.getEC2RecommendationProjectedMetrics(params as any).promise();
  }

  getEffectiveRecommendationPreferences: (params: RawParamsFrom<'getEffectiveRecommendationPreferences'>) => Promise<ReturnTypeFrom<'getEffectiveRecommendationPreferences'>>  = async params => {
  // undefined
    return this.client.getEffectiveRecommendationPreferences(params as any).promise();
  }

  getEnrollmentStatus: (params: RawParamsFrom<'getEnrollmentStatus'>) => Promise<ReturnTypeFrom<'getEnrollmentStatus'>>  = async params => {
  // undefined
    return this.client.getEnrollmentStatus(params as any).promise();
  }

  getEnrollmentStatusesForOrganization: (params: RawParamsFrom<'getEnrollmentStatusesForOrganization'>) => Promise<ReturnTypeFrom<'getEnrollmentStatusesForOrganization'>>  = async params => {
  // undefined
    return this.client.getEnrollmentStatusesForOrganization(params as any).promise();
  }

  getLambdaFunctionRecommendations: (params: RawParamsFrom<'getLambdaFunctionRecommendations'>) => Promise<ReturnTypeFrom<'getLambdaFunctionRecommendations'>>  = async params => {
  // undefined
    return this.client.getLambdaFunctionRecommendations(params as any).promise();
  }

  getRecommendationPreferences: (params: RawParamsFrom<'getRecommendationPreferences'>) => Promise<ReturnTypeFrom<'getRecommendationPreferences'>>  = async params => {
  // undefined
    return this.client.getRecommendationPreferences(params as any).promise();
  }

  getRecommendationSummaries: (params: RawParamsFrom<'getRecommendationSummaries'>) => Promise<ReturnTypeFrom<'getRecommendationSummaries'>>  = async params => {
  // undefined
    return this.client.getRecommendationSummaries(params as any).promise();
  }

  putRecommendationPreferences: (params: RawParamsFrom<'putRecommendationPreferences'>) => Promise<ReturnTypeFrom<'putRecommendationPreferences'>>  = async params => {
  // undefined
    return this.client.putRecommendationPreferences(params as any).promise();
  }

  updateEnrollmentStatus: (params: RawParamsFrom<'updateEnrollmentStatus'>) => Promise<ReturnTypeFrom<'updateEnrollmentStatus'>>  = async params => {
  // undefined
    return this.client.updateEnrollmentStatus(params as any).promise();
  }
  
  static fromClient(client: AWSComputeOptimizer): ComputeOptimizer {
    return new ComputeOptimizer(client) as any;
  }
  
  static client(options?: AWSComputeOptimizer.Types.ClientConfiguration): ComputeOptimizer {
    return new ComputeOptimizer(new AWSComputeOptimizer(options)) as any;
  }
}  
