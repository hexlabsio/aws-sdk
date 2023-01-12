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
  public readonly topLevelCalls = ["describeRecommendationExportJobs","getEnrollmentStatusesForOrganization","getLambdaFunctionRecommendations","getRecommendationSummaries"] as const;
  
  deleteRecommendationPreferences: (params: RawParamsFrom<'deleteRecommendationPreferences'>) => Promise<ReturnTypeFrom<'deleteRecommendationPreferences'>>  = async params => {
  // undefined
    return this.client.deleteRecommendationPreferences(params as any).promise();
  }

  async describeRecommendationExportJobs(params: { [K in keyof ParamsFrom<'describeRecommendationExportJobs', { next?: string, limit?: number }>]: ParamsFrom<'describeRecommendationExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRecommendationExportJobs'>]-?: ReturnTypeFrom<'describeRecommendationExportJobs'>[K]}['recommendationExportJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recommendationExportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRecommendationExportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeRecommendationExportJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.recommendationExportJobs ?? []) ? (result.recommendationExportJobs ?? []) : [result.recommendationExportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  exportECSServiceRecommendations: (params: RawParamsFrom<'exportECSServiceRecommendations'>) => Promise<ReturnTypeFrom<'exportECSServiceRecommendations'>>  = async params => {
  // undefined
    return this.client.exportECSServiceRecommendations(params as any).promise();
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

  getECSServiceRecommendationProjectedMetrics: (params: RawParamsFrom<'getECSServiceRecommendationProjectedMetrics'>) => Promise<ReturnTypeFrom<'getECSServiceRecommendationProjectedMetrics'>>  = async params => {
  // undefined
    return this.client.getECSServiceRecommendationProjectedMetrics(params as any).promise();
  }

  getECSServiceRecommendations: (params: RawParamsFrom<'getECSServiceRecommendations'>) => Promise<ReturnTypeFrom<'getECSServiceRecommendations'>>  = async params => {
  // undefined
    return this.client.getECSServiceRecommendations(params as any).promise();
  }

  getEffectiveRecommendationPreferences: (params: RawParamsFrom<'getEffectiveRecommendationPreferences'>) => Promise<ReturnTypeFrom<'getEffectiveRecommendationPreferences'>>  = async params => {
  // undefined
    return this.client.getEffectiveRecommendationPreferences(params as any).promise();
  }

  getEnrollmentStatus: (params: RawParamsFrom<'getEnrollmentStatus'>) => Promise<ReturnTypeFrom<'getEnrollmentStatus'>>  = async params => {
  // undefined
    return this.client.getEnrollmentStatus(params as any).promise();
  }

  async getEnrollmentStatusesForOrganization(params: { [K in keyof ParamsFrom<'getEnrollmentStatusesForOrganization', { next?: string, limit?: number }>]: ParamsFrom<'getEnrollmentStatusesForOrganization', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getEnrollmentStatusesForOrganization'>]-?: ReturnTypeFrom<'getEnrollmentStatusesForOrganization'>[K]}['accountEnrollmentStatuses'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accountEnrollmentStatuses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getEnrollmentStatusesForOrganization({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getEnrollmentStatusesForOrganization' })).toString('base64') : undefined;
    const member = (Array.isArray(result.accountEnrollmentStatuses ?? []) ? (result.accountEnrollmentStatuses ?? []) : [result.accountEnrollmentStatuses]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getLambdaFunctionRecommendations(params: { [K in keyof ParamsFrom<'getLambdaFunctionRecommendations', { next?: string, limit?: number }>]: ParamsFrom<'getLambdaFunctionRecommendations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getLambdaFunctionRecommendations'>]-?: ReturnTypeFrom<'getLambdaFunctionRecommendations'>[K]}['lambdaFunctionRecommendations'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"lambdaFunctionRecommendations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getLambdaFunctionRecommendations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getLambdaFunctionRecommendations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.lambdaFunctionRecommendations ?? []) ? (result.lambdaFunctionRecommendations ?? []) : [result.lambdaFunctionRecommendations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getRecommendationPreferences(params: { [K in keyof ParamsFrom<'getRecommendationPreferences', { next?: string, limit?: number }>]: ParamsFrom<'getRecommendationPreferences', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getRecommendationPreferences'>]-?: ReturnTypeFrom<'getRecommendationPreferences'>[K]}['recommendationPreferencesDetails'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recommendationPreferencesDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getRecommendationPreferences({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getRecommendationPreferences' })).toString('base64') : undefined;
    const member = (Array.isArray(result.recommendationPreferencesDetails ?? []) ? (result.recommendationPreferencesDetails ?? []) : [result.recommendationPreferencesDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getRecommendationSummaries(params: { [K in keyof ParamsFrom<'getRecommendationSummaries', { next?: string, limit?: number }>]: ParamsFrom<'getRecommendationSummaries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getRecommendationSummaries'>]-?: ReturnTypeFrom<'getRecommendationSummaries'>[K]}['recommendationSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recommendationSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getRecommendationSummaries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getRecommendationSummaries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.recommendationSummaries ?? []) ? (result.recommendationSummaries ?? []) : [result.recommendationSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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
