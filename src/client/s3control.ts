import { Request, S3Control as AWSS3Control } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSS3Control> = AWSS3Control[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSS3Control> = AWSS3Control[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSS3Control[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSS3Control, Extras> = AWSS3Control[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSS3Control> = AWSS3Control[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class S3Control {
  private constructor(private readonly client: AWSS3Control) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 's3-control' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = [] as const;
  
  createAccessPoint: (params: RawParamsFrom<'createAccessPoint'>) => Promise<ReturnTypeFrom<'createAccessPoint'>>  = async params => {
  // undefined
    return this.client.createAccessPoint(params as any).promise();
  }

  createAccessPointForObjectLambda: (params: RawParamsFrom<'createAccessPointForObjectLambda'>) => Promise<ReturnTypeFrom<'createAccessPointForObjectLambda'>>  = async params => {
  // undefined
    return this.client.createAccessPointForObjectLambda(params as any).promise();
  }

  createBucket: (params: RawParamsFrom<'createBucket'>) => Promise<ReturnTypeFrom<'createBucket'>>  = async params => {
  // undefined
    return this.client.createBucket(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  createMultiRegionAccessPoint: (params: RawParamsFrom<'createMultiRegionAccessPoint'>) => Promise<ReturnTypeFrom<'createMultiRegionAccessPoint'>>  = async params => {
  // undefined
    return this.client.createMultiRegionAccessPoint(params as any).promise();
  }

  deleteAccessPoint: (params: RawParamsFrom<'deleteAccessPoint'>) => Promise<ReturnTypeFrom<'deleteAccessPoint'>>  = async params => {
  // undefined
    return this.client.deleteAccessPoint(params as any).promise();
  }

  deleteAccessPointForObjectLambda: (params: RawParamsFrom<'deleteAccessPointForObjectLambda'>) => Promise<ReturnTypeFrom<'deleteAccessPointForObjectLambda'>>  = async params => {
  // undefined
    return this.client.deleteAccessPointForObjectLambda(params as any).promise();
  }

  deleteAccessPointPolicy: (params: RawParamsFrom<'deleteAccessPointPolicy'>) => Promise<ReturnTypeFrom<'deleteAccessPointPolicy'>>  = async params => {
  // undefined
    return this.client.deleteAccessPointPolicy(params as any).promise();
  }

  deleteAccessPointPolicyForObjectLambda: (params: RawParamsFrom<'deleteAccessPointPolicyForObjectLambda'>) => Promise<ReturnTypeFrom<'deleteAccessPointPolicyForObjectLambda'>>  = async params => {
  // undefined
    return this.client.deleteAccessPointPolicyForObjectLambda(params as any).promise();
  }

  deleteBucket: (params: RawParamsFrom<'deleteBucket'>) => Promise<ReturnTypeFrom<'deleteBucket'>>  = async params => {
  // undefined
    return this.client.deleteBucket(params as any).promise();
  }

  deleteBucketLifecycleConfiguration: (params: RawParamsFrom<'deleteBucketLifecycleConfiguration'>) => Promise<ReturnTypeFrom<'deleteBucketLifecycleConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteBucketLifecycleConfiguration(params as any).promise();
  }

  deleteBucketPolicy: (params: RawParamsFrom<'deleteBucketPolicy'>) => Promise<ReturnTypeFrom<'deleteBucketPolicy'>>  = async params => {
  // undefined
    return this.client.deleteBucketPolicy(params as any).promise();
  }

  deleteBucketTagging: (params: RawParamsFrom<'deleteBucketTagging'>) => Promise<ReturnTypeFrom<'deleteBucketTagging'>>  = async params => {
  // undefined
    return this.client.deleteBucketTagging(params as any).promise();
  }

  deleteJobTagging: (params: RawParamsFrom<'deleteJobTagging'>) => Promise<ReturnTypeFrom<'deleteJobTagging'>>  = async params => {
  // undefined
    return this.client.deleteJobTagging(params as any).promise();
  }

  deleteMultiRegionAccessPoint: (params: RawParamsFrom<'deleteMultiRegionAccessPoint'>) => Promise<ReturnTypeFrom<'deleteMultiRegionAccessPoint'>>  = async params => {
  // undefined
    return this.client.deleteMultiRegionAccessPoint(params as any).promise();
  }

  deletePublicAccessBlock: (params: RawParamsFrom<'deletePublicAccessBlock'>) => Promise<ReturnTypeFrom<'deletePublicAccessBlock'>>  = async params => {
  // undefined
    return this.client.deletePublicAccessBlock(params as any).promise();
  }

  deleteStorageLensConfiguration: (params: RawParamsFrom<'deleteStorageLensConfiguration'>) => Promise<ReturnTypeFrom<'deleteStorageLensConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteStorageLensConfiguration(params as any).promise();
  }

  deleteStorageLensConfigurationTagging: (params: RawParamsFrom<'deleteStorageLensConfigurationTagging'>) => Promise<ReturnTypeFrom<'deleteStorageLensConfigurationTagging'>>  = async params => {
  // undefined
    return this.client.deleteStorageLensConfigurationTagging(params as any).promise();
  }

  describeJob: (params: RawParamsFrom<'describeJob'>) => Promise<ReturnTypeFrom<'describeJob'>>  = async params => {
  // undefined
    return this.client.describeJob(params as any).promise();
  }

  describeMultiRegionAccessPointOperation: (params: RawParamsFrom<'describeMultiRegionAccessPointOperation'>) => Promise<ReturnTypeFrom<'describeMultiRegionAccessPointOperation'>>  = async params => {
  // undefined
    return this.client.describeMultiRegionAccessPointOperation(params as any).promise();
  }

  getAccessPoint: (params: RawParamsFrom<'getAccessPoint'>) => Promise<ReturnTypeFrom<'getAccessPoint'>>  = async params => {
  // undefined
    return this.client.getAccessPoint(params as any).promise();
  }

  getAccessPointConfigurationForObjectLambda: (params: RawParamsFrom<'getAccessPointConfigurationForObjectLambda'>) => Promise<ReturnTypeFrom<'getAccessPointConfigurationForObjectLambda'>>  = async params => {
  // undefined
    return this.client.getAccessPointConfigurationForObjectLambda(params as any).promise();
  }

  getAccessPointForObjectLambda: (params: RawParamsFrom<'getAccessPointForObjectLambda'>) => Promise<ReturnTypeFrom<'getAccessPointForObjectLambda'>>  = async params => {
  // undefined
    return this.client.getAccessPointForObjectLambda(params as any).promise();
  }

  getAccessPointPolicy: (params: RawParamsFrom<'getAccessPointPolicy'>) => Promise<ReturnTypeFrom<'getAccessPointPolicy'>>  = async params => {
  // undefined
    return this.client.getAccessPointPolicy(params as any).promise();
  }

  getAccessPointPolicyForObjectLambda: (params: RawParamsFrom<'getAccessPointPolicyForObjectLambda'>) => Promise<ReturnTypeFrom<'getAccessPointPolicyForObjectLambda'>>  = async params => {
  // undefined
    return this.client.getAccessPointPolicyForObjectLambda(params as any).promise();
  }

  getAccessPointPolicyStatus: (params: RawParamsFrom<'getAccessPointPolicyStatus'>) => Promise<ReturnTypeFrom<'getAccessPointPolicyStatus'>>  = async params => {
  // undefined
    return this.client.getAccessPointPolicyStatus(params as any).promise();
  }

  getAccessPointPolicyStatusForObjectLambda: (params: RawParamsFrom<'getAccessPointPolicyStatusForObjectLambda'>) => Promise<ReturnTypeFrom<'getAccessPointPolicyStatusForObjectLambda'>>  = async params => {
  // undefined
    return this.client.getAccessPointPolicyStatusForObjectLambda(params as any).promise();
  }

  getBucket: (params: RawParamsFrom<'getBucket'>) => Promise<ReturnTypeFrom<'getBucket'>>  = async params => {
  // undefined
    return this.client.getBucket(params as any).promise();
  }

  getBucketLifecycleConfiguration: (params: RawParamsFrom<'getBucketLifecycleConfiguration'>) => Promise<ReturnTypeFrom<'getBucketLifecycleConfiguration'>>  = async params => {
  // undefined
    return this.client.getBucketLifecycleConfiguration(params as any).promise();
  }

  getBucketPolicy: (params: RawParamsFrom<'getBucketPolicy'>) => Promise<ReturnTypeFrom<'getBucketPolicy'>>  = async params => {
  // undefined
    return this.client.getBucketPolicy(params as any).promise();
  }

  getBucketTagging: (params: RawParamsFrom<'getBucketTagging'>) => Promise<ReturnTypeFrom<'getBucketTagging'>>  = async params => {
  // undefined
    return this.client.getBucketTagging(params as any).promise();
  }

  getBucketVersioning: (params: RawParamsFrom<'getBucketVersioning'>) => Promise<ReturnTypeFrom<'getBucketVersioning'>>  = async params => {
  // undefined
    return this.client.getBucketVersioning(params as any).promise();
  }

  getJobTagging: (params: RawParamsFrom<'getJobTagging'>) => Promise<ReturnTypeFrom<'getJobTagging'>>  = async params => {
  // undefined
    return this.client.getJobTagging(params as any).promise();
  }

  getMultiRegionAccessPoint: (params: RawParamsFrom<'getMultiRegionAccessPoint'>) => Promise<ReturnTypeFrom<'getMultiRegionAccessPoint'>>  = async params => {
  // undefined
    return this.client.getMultiRegionAccessPoint(params as any).promise();
  }

  getMultiRegionAccessPointPolicy: (params: RawParamsFrom<'getMultiRegionAccessPointPolicy'>) => Promise<ReturnTypeFrom<'getMultiRegionAccessPointPolicy'>>  = async params => {
  // undefined
    return this.client.getMultiRegionAccessPointPolicy(params as any).promise();
  }

  getMultiRegionAccessPointPolicyStatus: (params: RawParamsFrom<'getMultiRegionAccessPointPolicyStatus'>) => Promise<ReturnTypeFrom<'getMultiRegionAccessPointPolicyStatus'>>  = async params => {
  // undefined
    return this.client.getMultiRegionAccessPointPolicyStatus(params as any).promise();
  }

  getPublicAccessBlock: (params: RawParamsFrom<'getPublicAccessBlock'>) => Promise<ReturnTypeFrom<'getPublicAccessBlock'>>  = async params => {
  // undefined
    return this.client.getPublicAccessBlock(params as any).promise();
  }

  getStorageLensConfiguration: (params: RawParamsFrom<'getStorageLensConfiguration'>) => Promise<ReturnTypeFrom<'getStorageLensConfiguration'>>  = async params => {
  // undefined
    return this.client.getStorageLensConfiguration(params as any).promise();
  }

  getStorageLensConfigurationTagging: (params: RawParamsFrom<'getStorageLensConfigurationTagging'>) => Promise<ReturnTypeFrom<'getStorageLensConfigurationTagging'>>  = async params => {
  // undefined
    return this.client.getStorageLensConfigurationTagging(params as any).promise();
  }

  listAccessPoints: (params: RawParamsFrom<'listAccessPoints'>) => Promise<ReturnTypeFrom<'listAccessPoints'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccessPoints(params as any).promise();
  }

  async listAccessPointsForObjectLambda(params: { [K in keyof ParamsFrom<'listAccessPointsForObjectLambda', { next?: string, limit?: number }>]: ParamsFrom<'listAccessPointsForObjectLambda', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccessPointsForObjectLambda'>]-?: ReturnTypeFrom<'listAccessPointsForObjectLambda'>[K]}['ObjectLambdaAccessPointList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ObjectLambdaAccessPointList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccessPointsForObjectLambda({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ObjectLambdaAccessPointList ?? []) ? (result.ObjectLambdaAccessPointList ?? []) : [result.ObjectLambdaAccessPointList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listJobs: (params: RawParamsFrom<'listJobs'>) => Promise<ReturnTypeFrom<'listJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJobs(params as any).promise();
  }

  listMultiRegionAccessPoints: (params: RawParamsFrom<'listMultiRegionAccessPoints'>) => Promise<ReturnTypeFrom<'listMultiRegionAccessPoints'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMultiRegionAccessPoints(params as any).promise();
  }

  listRegionalBuckets: (params: RawParamsFrom<'listRegionalBuckets'>) => Promise<ReturnTypeFrom<'listRegionalBuckets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRegionalBuckets(params as any).promise();
  }

  listStorageLensConfigurations: (params: RawParamsFrom<'listStorageLensConfigurations'>) => Promise<ReturnTypeFrom<'listStorageLensConfigurations'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken"}
    return this.client.listStorageLensConfigurations(params as any).promise();
  }

  putAccessPointConfigurationForObjectLambda: (params: RawParamsFrom<'putAccessPointConfigurationForObjectLambda'>) => Promise<ReturnTypeFrom<'putAccessPointConfigurationForObjectLambda'>>  = async params => {
  // undefined
    return this.client.putAccessPointConfigurationForObjectLambda(params as any).promise();
  }

  putAccessPointPolicy: (params: RawParamsFrom<'putAccessPointPolicy'>) => Promise<ReturnTypeFrom<'putAccessPointPolicy'>>  = async params => {
  // undefined
    return this.client.putAccessPointPolicy(params as any).promise();
  }

  putAccessPointPolicyForObjectLambda: (params: RawParamsFrom<'putAccessPointPolicyForObjectLambda'>) => Promise<ReturnTypeFrom<'putAccessPointPolicyForObjectLambda'>>  = async params => {
  // undefined
    return this.client.putAccessPointPolicyForObjectLambda(params as any).promise();
  }

  putBucketLifecycleConfiguration: (params: RawParamsFrom<'putBucketLifecycleConfiguration'>) => Promise<ReturnTypeFrom<'putBucketLifecycleConfiguration'>>  = async params => {
  // undefined
    return this.client.putBucketLifecycleConfiguration(params as any).promise();
  }

  putBucketPolicy: (params: RawParamsFrom<'putBucketPolicy'>) => Promise<ReturnTypeFrom<'putBucketPolicy'>>  = async params => {
  // undefined
    return this.client.putBucketPolicy(params as any).promise();
  }

  putBucketTagging: (params: RawParamsFrom<'putBucketTagging'>) => Promise<ReturnTypeFrom<'putBucketTagging'>>  = async params => {
  // undefined
    return this.client.putBucketTagging(params as any).promise();
  }

  putBucketVersioning: (params: RawParamsFrom<'putBucketVersioning'>) => Promise<ReturnTypeFrom<'putBucketVersioning'>>  = async params => {
  // undefined
    return this.client.putBucketVersioning(params as any).promise();
  }

  putJobTagging: (params: RawParamsFrom<'putJobTagging'>) => Promise<ReturnTypeFrom<'putJobTagging'>>  = async params => {
  // undefined
    return this.client.putJobTagging(params as any).promise();
  }

  putMultiRegionAccessPointPolicy: (params: RawParamsFrom<'putMultiRegionAccessPointPolicy'>) => Promise<ReturnTypeFrom<'putMultiRegionAccessPointPolicy'>>  = async params => {
  // undefined
    return this.client.putMultiRegionAccessPointPolicy(params as any).promise();
  }

  putPublicAccessBlock: (params: RawParamsFrom<'putPublicAccessBlock'>) => Promise<ReturnTypeFrom<'putPublicAccessBlock'>>  = async params => {
  // undefined
    return this.client.putPublicAccessBlock(params as any).promise();
  }

  putStorageLensConfiguration: (params: RawParamsFrom<'putStorageLensConfiguration'>) => Promise<ReturnTypeFrom<'putStorageLensConfiguration'>>  = async params => {
  // undefined
    return this.client.putStorageLensConfiguration(params as any).promise();
  }

  putStorageLensConfigurationTagging: (params: RawParamsFrom<'putStorageLensConfigurationTagging'>) => Promise<ReturnTypeFrom<'putStorageLensConfigurationTagging'>>  = async params => {
  // undefined
    return this.client.putStorageLensConfigurationTagging(params as any).promise();
  }

  updateJobPriority: (params: RawParamsFrom<'updateJobPriority'>) => Promise<ReturnTypeFrom<'updateJobPriority'>>  = async params => {
  // undefined
    return this.client.updateJobPriority(params as any).promise();
  }

  updateJobStatus: (params: RawParamsFrom<'updateJobStatus'>) => Promise<ReturnTypeFrom<'updateJobStatus'>>  = async params => {
  // undefined
    return this.client.updateJobStatus(params as any).promise();
  }
  
  static fromClient(client: AWSS3Control): S3Control {
    return new S3Control(client) as any;
  }
  
  static client(options?: AWSS3Control.Types.ClientConfiguration): S3Control {
    return new S3Control(new AWSS3Control(options)) as any;
  }
}  
