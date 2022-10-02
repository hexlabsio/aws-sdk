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

 interface ClientType {
    signingRegion: string | undefined;
    service: 's3-control';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly [];
    
  createAccessPoint: FunctionTypeFrom<'createAccessPoint'>;

  createAccessPointForObjectLambda: FunctionTypeFrom<'createAccessPointForObjectLambda'>;

  createBucket: FunctionTypeFrom<'createBucket'>;

  createJob: FunctionTypeFrom<'createJob'>;

  createMultiRegionAccessPoint: FunctionTypeFrom<'createMultiRegionAccessPoint'>;

  deleteAccessPoint: FunctionTypeFrom<'deleteAccessPoint'>;

  deleteAccessPointForObjectLambda: FunctionTypeFrom<'deleteAccessPointForObjectLambda'>;

  deleteAccessPointPolicy: FunctionTypeFrom<'deleteAccessPointPolicy'>;

  deleteAccessPointPolicyForObjectLambda: FunctionTypeFrom<'deleteAccessPointPolicyForObjectLambda'>;

  deleteBucket: FunctionTypeFrom<'deleteBucket'>;

  deleteBucketLifecycleConfiguration: FunctionTypeFrom<'deleteBucketLifecycleConfiguration'>;

  deleteBucketPolicy: FunctionTypeFrom<'deleteBucketPolicy'>;

  deleteBucketTagging: FunctionTypeFrom<'deleteBucketTagging'>;

  deleteJobTagging: FunctionTypeFrom<'deleteJobTagging'>;

  deleteMultiRegionAccessPoint: FunctionTypeFrom<'deleteMultiRegionAccessPoint'>;

  deletePublicAccessBlock: FunctionTypeFrom<'deletePublicAccessBlock'>;

  deleteStorageLensConfiguration: FunctionTypeFrom<'deleteStorageLensConfiguration'>;

  deleteStorageLensConfigurationTagging: FunctionTypeFrom<'deleteStorageLensConfigurationTagging'>;

  describeJob: FunctionTypeFrom<'describeJob'>;

  describeMultiRegionAccessPointOperation: FunctionTypeFrom<'describeMultiRegionAccessPointOperation'>;

  getAccessPoint: FunctionTypeFrom<'getAccessPoint'>;

  getAccessPointConfigurationForObjectLambda: FunctionTypeFrom<'getAccessPointConfigurationForObjectLambda'>;

  getAccessPointForObjectLambda: FunctionTypeFrom<'getAccessPointForObjectLambda'>;

  getAccessPointPolicy: FunctionTypeFrom<'getAccessPointPolicy'>;

  getAccessPointPolicyForObjectLambda: FunctionTypeFrom<'getAccessPointPolicyForObjectLambda'>;

  getAccessPointPolicyStatus: FunctionTypeFrom<'getAccessPointPolicyStatus'>;

  getAccessPointPolicyStatusForObjectLambda: FunctionTypeFrom<'getAccessPointPolicyStatusForObjectLambda'>;

  getBucket: FunctionTypeFrom<'getBucket'>;

  getBucketLifecycleConfiguration: FunctionTypeFrom<'getBucketLifecycleConfiguration'>;

  getBucketPolicy: FunctionTypeFrom<'getBucketPolicy'>;

  getBucketTagging: FunctionTypeFrom<'getBucketTagging'>;

  getBucketVersioning: FunctionTypeFrom<'getBucketVersioning'>;

  getJobTagging: FunctionTypeFrom<'getJobTagging'>;

  getMultiRegionAccessPoint: FunctionTypeFrom<'getMultiRegionAccessPoint'>;

  getMultiRegionAccessPointPolicy: FunctionTypeFrom<'getMultiRegionAccessPointPolicy'>;

  getMultiRegionAccessPointPolicyStatus: FunctionTypeFrom<'getMultiRegionAccessPointPolicyStatus'>;

  getPublicAccessBlock: FunctionTypeFrom<'getPublicAccessBlock'>;

  getStorageLensConfiguration: FunctionTypeFrom<'getStorageLensConfiguration'>;

  getStorageLensConfigurationTagging: FunctionTypeFrom<'getStorageLensConfigurationTagging'>;

  listAccessPoints: FunctionTypeFrom<'listAccessPoints'>;

  listAccessPointsForObjectLambda(params: { [K in keyof Omit<ParamsFrom<'listAccessPointsForObjectLambda', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAccessPointsForObjectLambda', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccessPointsForObjectLambda'>]-?: ReturnTypeFrom<'listAccessPointsForObjectLambda'>[K]}['ObjectLambdaAccessPointList'] }>
  ;

  listJobs: FunctionTypeFrom<'listJobs'>;

  listMultiRegionAccessPoints: FunctionTypeFrom<'listMultiRegionAccessPoints'>;

  listRegionalBuckets: FunctionTypeFrom<'listRegionalBuckets'>;

  listStorageLensConfigurations: FunctionTypeFrom<'listStorageLensConfigurations'>;

  putAccessPointConfigurationForObjectLambda: FunctionTypeFrom<'putAccessPointConfigurationForObjectLambda'>;

  putAccessPointPolicy: FunctionTypeFrom<'putAccessPointPolicy'>;

  putAccessPointPolicyForObjectLambda: FunctionTypeFrom<'putAccessPointPolicyForObjectLambda'>;

  putBucketLifecycleConfiguration: FunctionTypeFrom<'putBucketLifecycleConfiguration'>;

  putBucketPolicy: FunctionTypeFrom<'putBucketPolicy'>;

  putBucketTagging: FunctionTypeFrom<'putBucketTagging'>;

  putBucketVersioning: FunctionTypeFrom<'putBucketVersioning'>;

  putJobTagging: FunctionTypeFrom<'putJobTagging'>;

  putMultiRegionAccessPointPolicy: FunctionTypeFrom<'putMultiRegionAccessPointPolicy'>;

  putPublicAccessBlock: FunctionTypeFrom<'putPublicAccessBlock'>;

  putStorageLensConfiguration: FunctionTypeFrom<'putStorageLensConfiguration'>;

  putStorageLensConfigurationTagging: FunctionTypeFrom<'putStorageLensConfigurationTagging'>;

  updateJobPriority: FunctionTypeFrom<'updateJobPriority'>;

  updateJobStatus: FunctionTypeFrom<'updateJobStatus'>
}
 
export class S3Control implements ClientType {
  private constructor(private readonly client: AWSS3Control) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 's3-control';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = [] as const;
  
  async createAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.createAccessPoint(...args).promise()
  }

  async createAccessPointForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.createAccessPointForObjectLambda(...args).promise()
  }

  async createBucket(...args: any): Promise<any> {
  // undefined
    return this.client.createBucket(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async createMultiRegionAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.createMultiRegionAccessPoint(...args).promise()
  }

  async deleteAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessPoint(...args).promise()
  }

  async deleteAccessPointForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessPointForObjectLambda(...args).promise()
  }

  async deleteAccessPointPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessPointPolicy(...args).promise()
  }

  async deleteAccessPointPolicyForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessPointPolicyForObjectLambda(...args).promise()
  }

  async deleteBucket(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucket(...args).promise()
  }

  async deleteBucketLifecycleConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketLifecycleConfiguration(...args).promise()
  }

  async deleteBucketPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketPolicy(...args).promise()
  }

  async deleteBucketTagging(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketTagging(...args).promise()
  }

  async deleteJobTagging(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJobTagging(...args).promise()
  }

  async deleteMultiRegionAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMultiRegionAccessPoint(...args).promise()
  }

  async deletePublicAccessBlock(...args: any): Promise<any> {
  // undefined
    return this.client.deletePublicAccessBlock(...args).promise()
  }

  async deleteStorageLensConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStorageLensConfiguration(...args).promise()
  }

  async deleteStorageLensConfigurationTagging(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStorageLensConfigurationTagging(...args).promise()
  }

  async describeJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeJob(...args).promise()
  }

  async describeMultiRegionAccessPointOperation(...args: any): Promise<any> {
  // undefined
    return this.client.describeMultiRegionAccessPointOperation(...args).promise()
  }

  async getAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessPoint(...args).promise()
  }

  async getAccessPointConfigurationForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessPointConfigurationForObjectLambda(...args).promise()
  }

  async getAccessPointForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessPointForObjectLambda(...args).promise()
  }

  async getAccessPointPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessPointPolicy(...args).promise()
  }

  async getAccessPointPolicyForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessPointPolicyForObjectLambda(...args).promise()
  }

  async getAccessPointPolicyStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessPointPolicyStatus(...args).promise()
  }

  async getAccessPointPolicyStatusForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessPointPolicyStatusForObjectLambda(...args).promise()
  }

  async getBucket(...args: any): Promise<any> {
  // undefined
    return this.client.getBucket(...args).promise()
  }

  async getBucketLifecycleConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketLifecycleConfiguration(...args).promise()
  }

  async getBucketPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketPolicy(...args).promise()
  }

  async getBucketTagging(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketTagging(...args).promise()
  }

  async getBucketVersioning(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketVersioning(...args).promise()
  }

  async getJobTagging(...args: any): Promise<any> {
  // undefined
    return this.client.getJobTagging(...args).promise()
  }

  async getMultiRegionAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.getMultiRegionAccessPoint(...args).promise()
  }

  async getMultiRegionAccessPointPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getMultiRegionAccessPointPolicy(...args).promise()
  }

  async getMultiRegionAccessPointPolicyStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getMultiRegionAccessPointPolicyStatus(...args).promise()
  }

  async getPublicAccessBlock(...args: any): Promise<any> {
  // undefined
    return this.client.getPublicAccessBlock(...args).promise()
  }

  async getStorageLensConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getStorageLensConfiguration(...args).promise()
  }

  async getStorageLensConfigurationTagging(...args: any): Promise<any> {
  // undefined
    return this.client.getStorageLensConfigurationTagging(...args).promise()
  }

  async listAccessPoints(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccessPoints(...args).promise()
  }

  async listAccessPointsForObjectLambda(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ObjectLambdaAccessPointList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccessPointsForObjectLambda(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ObjectLambdaAccessPointList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJobs(...args).promise()
  }

  async listMultiRegionAccessPoints(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMultiRegionAccessPoints(...args).promise()
  }

  async listRegionalBuckets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRegionalBuckets(...args).promise()
  }

  async listStorageLensConfigurations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","outputToken":"NextToken"}
    return this.client.listStorageLensConfigurations(...args).promise()
  }

  async putAccessPointConfigurationForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.putAccessPointConfigurationForObjectLambda(...args).promise()
  }

  async putAccessPointPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putAccessPointPolicy(...args).promise()
  }

  async putAccessPointPolicyForObjectLambda(...args: any): Promise<any> {
  // undefined
    return this.client.putAccessPointPolicyForObjectLambda(...args).promise()
  }

  async putBucketLifecycleConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketLifecycleConfiguration(...args).promise()
  }

  async putBucketPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketPolicy(...args).promise()
  }

  async putBucketTagging(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketTagging(...args).promise()
  }

  async putBucketVersioning(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketVersioning(...args).promise()
  }

  async putJobTagging(...args: any): Promise<any> {
  // undefined
    return this.client.putJobTagging(...args).promise()
  }

  async putMultiRegionAccessPointPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putMultiRegionAccessPointPolicy(...args).promise()
  }

  async putPublicAccessBlock(...args: any): Promise<any> {
  // undefined
    return this.client.putPublicAccessBlock(...args).promise()
  }

  async putStorageLensConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putStorageLensConfiguration(...args).promise()
  }

  async putStorageLensConfigurationTagging(...args: any): Promise<any> {
  // undefined
    return this.client.putStorageLensConfigurationTagging(...args).promise()
  }

  async updateJobPriority(...args: any): Promise<any> {
  // undefined
    return this.client.updateJobPriority(...args).promise()
  }

  async updateJobStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateJobStatus(...args).promise()
  }
  
  static fromClient(client: AWSS3Control): ClientType {
    return new S3Control(client) as any;
  }
  
  static client(options?: AWSS3Control.Types.ClientConfiguration): ClientType {
    return new S3Control(new AWSS3Control(options)) as any;
  }
}  
