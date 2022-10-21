import { Request, S3 as AWSS3 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSS3> = AWSS3[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSS3> = AWSS3[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSS3[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSS3, Extras> = AWSS3[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSS3> = AWSS3[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class S3 {
  private constructor(private readonly client: AWSS3) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 's3' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = ["listBuckets"] as const;
  
  abortMultipartUpload: (params: RawParamsFrom<'abortMultipartUpload'>) => Promise<ReturnTypeFrom<'abortMultipartUpload'>>  = async params => {
  // undefined
    return this.client.abortMultipartUpload(params as any).promise();
  }

  completeMultipartUpload: (params: RawParamsFrom<'completeMultipartUpload'>) => Promise<ReturnTypeFrom<'completeMultipartUpload'>>  = async params => {
  // undefined
    return this.client.completeMultipartUpload(params as any).promise();
  }

  copyObject: (params: RawParamsFrom<'copyObject'>) => Promise<ReturnTypeFrom<'copyObject'>>  = async params => {
  // undefined
    return this.client.copyObject(params as any).promise();
  }

  createMultipartUpload: (params: RawParamsFrom<'createMultipartUpload'>) => Promise<ReturnTypeFrom<'createMultipartUpload'>>  = async params => {
  // undefined
    return this.client.createMultipartUpload(params as any).promise();
  }

  deleteBucket: (params: RawParamsFrom<'deleteBucket'>) => Promise<ReturnTypeFrom<'deleteBucket'>>  = async params => {
  // undefined
    return this.client.deleteBucket(params as any).promise();
  }

  deleteBucketAnalyticsConfiguration: (params: RawParamsFrom<'deleteBucketAnalyticsConfiguration'>) => Promise<ReturnTypeFrom<'deleteBucketAnalyticsConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteBucketAnalyticsConfiguration(params as any).promise();
  }

  deleteBucketCors: (params: RawParamsFrom<'deleteBucketCors'>) => Promise<ReturnTypeFrom<'deleteBucketCors'>>  = async params => {
  // undefined
    return this.client.deleteBucketCors(params as any).promise();
  }

  deleteBucketEncryption: (params: RawParamsFrom<'deleteBucketEncryption'>) => Promise<ReturnTypeFrom<'deleteBucketEncryption'>>  = async params => {
  // undefined
    return this.client.deleteBucketEncryption(params as any).promise();
  }

  deleteBucketIntelligentTieringConfiguration: (params: RawParamsFrom<'deleteBucketIntelligentTieringConfiguration'>) => Promise<ReturnTypeFrom<'deleteBucketIntelligentTieringConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteBucketIntelligentTieringConfiguration(params as any).promise();
  }

  deleteBucketInventoryConfiguration: (params: RawParamsFrom<'deleteBucketInventoryConfiguration'>) => Promise<ReturnTypeFrom<'deleteBucketInventoryConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteBucketInventoryConfiguration(params as any).promise();
  }

  deleteBucketLifecycle: (params: RawParamsFrom<'deleteBucketLifecycle'>) => Promise<ReturnTypeFrom<'deleteBucketLifecycle'>>  = async params => {
  // undefined
    return this.client.deleteBucketLifecycle(params as any).promise();
  }

  deleteBucketMetricsConfiguration: (params: RawParamsFrom<'deleteBucketMetricsConfiguration'>) => Promise<ReturnTypeFrom<'deleteBucketMetricsConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteBucketMetricsConfiguration(params as any).promise();
  }

  deleteBucketOwnershipControls: (params: RawParamsFrom<'deleteBucketOwnershipControls'>) => Promise<ReturnTypeFrom<'deleteBucketOwnershipControls'>>  = async params => {
  // undefined
    return this.client.deleteBucketOwnershipControls(params as any).promise();
  }

  deleteBucketPolicy: (params: RawParamsFrom<'deleteBucketPolicy'>) => Promise<ReturnTypeFrom<'deleteBucketPolicy'>>  = async params => {
  // undefined
    return this.client.deleteBucketPolicy(params as any).promise();
  }

  deleteBucketReplication: (params: RawParamsFrom<'deleteBucketReplication'>) => Promise<ReturnTypeFrom<'deleteBucketReplication'>>  = async params => {
  // undefined
    return this.client.deleteBucketReplication(params as any).promise();
  }

  deleteBucketTagging: (params: RawParamsFrom<'deleteBucketTagging'>) => Promise<ReturnTypeFrom<'deleteBucketTagging'>>  = async params => {
  // undefined
    return this.client.deleteBucketTagging(params as any).promise();
  }

  deleteBucketWebsite: (params: RawParamsFrom<'deleteBucketWebsite'>) => Promise<ReturnTypeFrom<'deleteBucketWebsite'>>  = async params => {
  // undefined
    return this.client.deleteBucketWebsite(params as any).promise();
  }

  deleteObject: (params: RawParamsFrom<'deleteObject'>) => Promise<ReturnTypeFrom<'deleteObject'>>  = async params => {
  // undefined
    return this.client.deleteObject(params as any).promise();
  }

  deleteObjectTagging: (params: RawParamsFrom<'deleteObjectTagging'>) => Promise<ReturnTypeFrom<'deleteObjectTagging'>>  = async params => {
  // undefined
    return this.client.deleteObjectTagging(params as any).promise();
  }

  deleteObjects: (params: RawParamsFrom<'deleteObjects'>) => Promise<ReturnTypeFrom<'deleteObjects'>>  = async params => {
  // undefined
    return this.client.deleteObjects(params as any).promise();
  }

  deletePublicAccessBlock: (params: RawParamsFrom<'deletePublicAccessBlock'>) => Promise<ReturnTypeFrom<'deletePublicAccessBlock'>>  = async params => {
  // undefined
    return this.client.deletePublicAccessBlock(params as any).promise();
  }

  getBucketAccelerateConfiguration: (params: RawParamsFrom<'getBucketAccelerateConfiguration'>) => Promise<ReturnTypeFrom<'getBucketAccelerateConfiguration'>>  = async params => {
  // undefined
    return this.client.getBucketAccelerateConfiguration(params as any).promise();
  }

  getBucketAcl: (params: RawParamsFrom<'getBucketAcl'>) => Promise<ReturnTypeFrom<'getBucketAcl'>>  = async params => {
  // undefined
    return this.client.getBucketAcl(params as any).promise();
  }

  getBucketAnalyticsConfiguration: (params: RawParamsFrom<'getBucketAnalyticsConfiguration'>) => Promise<ReturnTypeFrom<'getBucketAnalyticsConfiguration'>>  = async params => {
  // undefined
    return this.client.getBucketAnalyticsConfiguration(params as any).promise();
  }

  getBucketCors: (params: RawParamsFrom<'getBucketCors'>) => Promise<ReturnTypeFrom<'getBucketCors'>>  = async params => {
  // undefined
    return this.client.getBucketCors(params as any).promise();
  }

  getBucketEncryption: (params: RawParamsFrom<'getBucketEncryption'>) => Promise<ReturnTypeFrom<'getBucketEncryption'>>  = async params => {
  // undefined
    return this.client.getBucketEncryption(params as any).promise();
  }

  getBucketIntelligentTieringConfiguration: (params: RawParamsFrom<'getBucketIntelligentTieringConfiguration'>) => Promise<ReturnTypeFrom<'getBucketIntelligentTieringConfiguration'>>  = async params => {
  // undefined
    return this.client.getBucketIntelligentTieringConfiguration(params as any).promise();
  }

  getBucketInventoryConfiguration: (params: RawParamsFrom<'getBucketInventoryConfiguration'>) => Promise<ReturnTypeFrom<'getBucketInventoryConfiguration'>>  = async params => {
  // undefined
    return this.client.getBucketInventoryConfiguration(params as any).promise();
  }

  getBucketLifecycle: (params: RawParamsFrom<'getBucketLifecycle'>) => Promise<ReturnTypeFrom<'getBucketLifecycle'>>  = async params => {
  // undefined
    return this.client.getBucketLifecycle(params as any).promise();
  }

  getBucketLifecycleConfiguration: (params: RawParamsFrom<'getBucketLifecycleConfiguration'>) => Promise<ReturnTypeFrom<'getBucketLifecycleConfiguration'>>  = async params => {
  // undefined
    return this.client.getBucketLifecycleConfiguration(params as any).promise();
  }

  getBucketLocation: (params: RawParamsFrom<'getBucketLocation'>) => Promise<ReturnTypeFrom<'getBucketLocation'>>  = async params => {
  // undefined
    return this.client.getBucketLocation(params as any).promise();
  }

  getBucketLogging: (params: RawParamsFrom<'getBucketLogging'>) => Promise<ReturnTypeFrom<'getBucketLogging'>>  = async params => {
  // undefined
    return this.client.getBucketLogging(params as any).promise();
  }

  getBucketMetricsConfiguration: (params: RawParamsFrom<'getBucketMetricsConfiguration'>) => Promise<ReturnTypeFrom<'getBucketMetricsConfiguration'>>  = async params => {
  // undefined
    return this.client.getBucketMetricsConfiguration(params as any).promise();
  }

  getBucketNotification: (params: RawParamsFrom<'getBucketNotification'>) => Promise<ReturnTypeFrom<'getBucketNotification'>>  = async params => {
  // undefined
    return this.client.getBucketNotification(params as any).promise();
  }

  getBucketNotificationConfiguration: (params: RawParamsFrom<'getBucketNotificationConfiguration'>) => Promise<ReturnTypeFrom<'getBucketNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.getBucketNotificationConfiguration(params as any).promise();
  }

  getBucketOwnershipControls: (params: RawParamsFrom<'getBucketOwnershipControls'>) => Promise<ReturnTypeFrom<'getBucketOwnershipControls'>>  = async params => {
  // undefined
    return this.client.getBucketOwnershipControls(params as any).promise();
  }

  getBucketPolicy: (params: RawParamsFrom<'getBucketPolicy'>) => Promise<ReturnTypeFrom<'getBucketPolicy'>>  = async params => {
  // undefined
    return this.client.getBucketPolicy(params as any).promise();
  }

  getBucketPolicyStatus: (params: RawParamsFrom<'getBucketPolicyStatus'>) => Promise<ReturnTypeFrom<'getBucketPolicyStatus'>>  = async params => {
  // undefined
    return this.client.getBucketPolicyStatus(params as any).promise();
  }

  getBucketReplication: (params: RawParamsFrom<'getBucketReplication'>) => Promise<ReturnTypeFrom<'getBucketReplication'>>  = async params => {
  // undefined
    return this.client.getBucketReplication(params as any).promise();
  }

  getBucketRequestPayment: (params: RawParamsFrom<'getBucketRequestPayment'>) => Promise<ReturnTypeFrom<'getBucketRequestPayment'>>  = async params => {
  // undefined
    return this.client.getBucketRequestPayment(params as any).promise();
  }

  getBucketTagging: (params: RawParamsFrom<'getBucketTagging'>) => Promise<ReturnTypeFrom<'getBucketTagging'>>  = async params => {
  // undefined
    return this.client.getBucketTagging(params as any).promise();
  }

  getBucketVersioning: (params: RawParamsFrom<'getBucketVersioning'>) => Promise<ReturnTypeFrom<'getBucketVersioning'>>  = async params => {
  // undefined
    return this.client.getBucketVersioning(params as any).promise();
  }

  getBucketWebsite: (params: RawParamsFrom<'getBucketWebsite'>) => Promise<ReturnTypeFrom<'getBucketWebsite'>>  = async params => {
  // undefined
    return this.client.getBucketWebsite(params as any).promise();
  }

  getObject: (params: RawParamsFrom<'getObject'>) => Promise<ReturnTypeFrom<'getObject'>>  = async params => {
  // undefined
    return this.client.getObject(params as any).promise();
  }

  getObjectAcl: (params: RawParamsFrom<'getObjectAcl'>) => Promise<ReturnTypeFrom<'getObjectAcl'>>  = async params => {
  // undefined
    return this.client.getObjectAcl(params as any).promise();
  }

  getObjectAttributes: (params: RawParamsFrom<'getObjectAttributes'>) => Promise<ReturnTypeFrom<'getObjectAttributes'>>  = async params => {
  // undefined
    return this.client.getObjectAttributes(params as any).promise();
  }

  getObjectLegalHold: (params: RawParamsFrom<'getObjectLegalHold'>) => Promise<ReturnTypeFrom<'getObjectLegalHold'>>  = async params => {
  // undefined
    return this.client.getObjectLegalHold(params as any).promise();
  }

  getObjectLockConfiguration: (params: RawParamsFrom<'getObjectLockConfiguration'>) => Promise<ReturnTypeFrom<'getObjectLockConfiguration'>>  = async params => {
  // undefined
    return this.client.getObjectLockConfiguration(params as any).promise();
  }

  getObjectRetention: (params: RawParamsFrom<'getObjectRetention'>) => Promise<ReturnTypeFrom<'getObjectRetention'>>  = async params => {
  // undefined
    return this.client.getObjectRetention(params as any).promise();
  }

  getObjectTagging: (params: RawParamsFrom<'getObjectTagging'>) => Promise<ReturnTypeFrom<'getObjectTagging'>>  = async params => {
  // undefined
    return this.client.getObjectTagging(params as any).promise();
  }

  getObjectTorrent: (params: RawParamsFrom<'getObjectTorrent'>) => Promise<ReturnTypeFrom<'getObjectTorrent'>>  = async params => {
  // undefined
    return this.client.getObjectTorrent(params as any).promise();
  }

  getPublicAccessBlock: (params: RawParamsFrom<'getPublicAccessBlock'>) => Promise<ReturnTypeFrom<'getPublicAccessBlock'>>  = async params => {
  // undefined
    return this.client.getPublicAccessBlock(params as any).promise();
  }

  headBucket: (params: RawParamsFrom<'headBucket'>) => Promise<ReturnTypeFrom<'headBucket'>>  = async params => {
  // undefined
    return this.client.headBucket(params as any).promise();
  }

  headObject: (params: RawParamsFrom<'headObject'>) => Promise<ReturnTypeFrom<'headObject'>>  = async params => {
  // undefined
    return this.client.headObject(params as any).promise();
  }

  listBucketAnalyticsConfigurations: (params: RawParamsFrom<'listBucketAnalyticsConfigurations'>) => Promise<ReturnTypeFrom<'listBucketAnalyticsConfigurations'>>  = async params => {
  // undefined
    return this.client.listBucketAnalyticsConfigurations(params as any).promise();
  }

  listBucketIntelligentTieringConfigurations: (params: RawParamsFrom<'listBucketIntelligentTieringConfigurations'>) => Promise<ReturnTypeFrom<'listBucketIntelligentTieringConfigurations'>>  = async params => {
  // undefined
    return this.client.listBucketIntelligentTieringConfigurations(params as any).promise();
  }

  listBucketInventoryConfigurations: (params: RawParamsFrom<'listBucketInventoryConfigurations'>) => Promise<ReturnTypeFrom<'listBucketInventoryConfigurations'>>  = async params => {
  // undefined
    return this.client.listBucketInventoryConfigurations(params as any).promise();
  }

  listBucketMetricsConfigurations: (params: RawParamsFrom<'listBucketMetricsConfigurations'>) => Promise<ReturnTypeFrom<'listBucketMetricsConfigurations'>>  = async params => {
  // undefined
    return this.client.listBucketMetricsConfigurations(params as any).promise();
  }

  async listBuckets(params: { [K in keyof ParamsFrom<'listBuckets', {}>]: ParamsFrom<'listBuckets', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBuckets'>]-?: ReturnTypeFrom<'listBuckets'>[K]}['Buckets'], undefined>}> {
    // {"resultKey":"Buckets"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.listBuckets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.Buckets ?? []) ? (result.Buckets ?? []) : [result.Buckets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listMultipartUploads: (params: RawParamsFrom<'listMultipartUploads'>) => Promise<ReturnTypeFrom<'listMultipartUploads'>>  = async params => {
  // {"inputToken":["KeyMarker","UploadIdMarker"],"limitKey":"MaxUploads","moreResults":"IsTruncated","outputToken":["NextKeyMarker","NextUploadIdMarker"],"resultKey":["Uploads","CommonPrefixes"]}
    return this.client.listMultipartUploads(params as any).promise();
  }

  listObjectVersions: (params: RawParamsFrom<'listObjectVersions'>) => Promise<ReturnTypeFrom<'listObjectVersions'>>  = async params => {
  // {"inputToken":["KeyMarker","VersionIdMarker"],"limitKey":"MaxKeys","moreResults":"IsTruncated","outputToken":["NextKeyMarker","NextVersionIdMarker"],"resultKey":["Versions","DeleteMarkers","CommonPrefixes"]}
    return this.client.listObjectVersions(params as any).promise();
  }

  listObjects: (params: RawParamsFrom<'listObjects'>) => Promise<ReturnTypeFrom<'listObjects'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxKeys","moreResults":"IsTruncated","outputToken":"NextMarker || Contents[-1].Key","resultKey":["Contents","CommonPrefixes"]}
    return this.client.listObjects(params as any).promise();
  }

  listObjectsV2: (params: RawParamsFrom<'listObjectsV2'>) => Promise<ReturnTypeFrom<'listObjectsV2'>>  = async params => {
  // {"inputToken":"ContinuationToken","limitKey":"MaxKeys","outputToken":"NextContinuationToken","resultKey":["Contents","CommonPrefixes"]}
    return this.client.listObjectsV2(params as any).promise();
  }

  async listParts(params: { [K in keyof ParamsFrom<'listParts', { next?: string, limit?: number }>]: ParamsFrom<'listParts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listParts'>]-?: ReturnTypeFrom<'listParts'>[K]}['Parts'], undefined>}> {
    // {"inputToken":"PartNumberMarker","limitKey":"MaxParts","moreResults":"IsTruncated","outputToken":"NextPartNumberMarker","resultKey":"Parts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PartNumberMarker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxParts: limit } : {};
    const result = await this.client.listParts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPartNumberMarker ? Buffer.from(JSON.stringify({ token: result.NextPartNumberMarker, operation: 'listParts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Parts ?? []) ? (result.Parts ?? []) : [result.Parts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putBucketAccelerateConfiguration: (params: RawParamsFrom<'putBucketAccelerateConfiguration'>) => Promise<ReturnTypeFrom<'putBucketAccelerateConfiguration'>>  = async params => {
  // undefined
    return this.client.putBucketAccelerateConfiguration(params as any).promise();
  }

  putBucketAcl: (params: RawParamsFrom<'putBucketAcl'>) => Promise<ReturnTypeFrom<'putBucketAcl'>>  = async params => {
  // undefined
    return this.client.putBucketAcl(params as any).promise();
  }

  putBucketAnalyticsConfiguration: (params: RawParamsFrom<'putBucketAnalyticsConfiguration'>) => Promise<ReturnTypeFrom<'putBucketAnalyticsConfiguration'>>  = async params => {
  // undefined
    return this.client.putBucketAnalyticsConfiguration(params as any).promise();
  }

  putBucketCors: (params: RawParamsFrom<'putBucketCors'>) => Promise<ReturnTypeFrom<'putBucketCors'>>  = async params => {
  // undefined
    return this.client.putBucketCors(params as any).promise();
  }

  putBucketEncryption: (params: RawParamsFrom<'putBucketEncryption'>) => Promise<ReturnTypeFrom<'putBucketEncryption'>>  = async params => {
  // undefined
    return this.client.putBucketEncryption(params as any).promise();
  }

  putBucketIntelligentTieringConfiguration: (params: RawParamsFrom<'putBucketIntelligentTieringConfiguration'>) => Promise<ReturnTypeFrom<'putBucketIntelligentTieringConfiguration'>>  = async params => {
  // undefined
    return this.client.putBucketIntelligentTieringConfiguration(params as any).promise();
  }

  putBucketInventoryConfiguration: (params: RawParamsFrom<'putBucketInventoryConfiguration'>) => Promise<ReturnTypeFrom<'putBucketInventoryConfiguration'>>  = async params => {
  // undefined
    return this.client.putBucketInventoryConfiguration(params as any).promise();
  }

  putBucketLifecycle: (params: RawParamsFrom<'putBucketLifecycle'>) => Promise<ReturnTypeFrom<'putBucketLifecycle'>>  = async params => {
  // undefined
    return this.client.putBucketLifecycle(params as any).promise();
  }

  putBucketLifecycleConfiguration: (params: RawParamsFrom<'putBucketLifecycleConfiguration'>) => Promise<ReturnTypeFrom<'putBucketLifecycleConfiguration'>>  = async params => {
  // undefined
    return this.client.putBucketLifecycleConfiguration(params as any).promise();
  }

  putBucketLogging: (params: RawParamsFrom<'putBucketLogging'>) => Promise<ReturnTypeFrom<'putBucketLogging'>>  = async params => {
  // undefined
    return this.client.putBucketLogging(params as any).promise();
  }

  putBucketMetricsConfiguration: (params: RawParamsFrom<'putBucketMetricsConfiguration'>) => Promise<ReturnTypeFrom<'putBucketMetricsConfiguration'>>  = async params => {
  // undefined
    return this.client.putBucketMetricsConfiguration(params as any).promise();
  }

  putBucketNotification: (params: RawParamsFrom<'putBucketNotification'>) => Promise<ReturnTypeFrom<'putBucketNotification'>>  = async params => {
  // undefined
    return this.client.putBucketNotification(params as any).promise();
  }

  putBucketNotificationConfiguration: (params: RawParamsFrom<'putBucketNotificationConfiguration'>) => Promise<ReturnTypeFrom<'putBucketNotificationConfiguration'>>  = async params => {
  // undefined
    return this.client.putBucketNotificationConfiguration(params as any).promise();
  }

  putBucketOwnershipControls: (params: RawParamsFrom<'putBucketOwnershipControls'>) => Promise<ReturnTypeFrom<'putBucketOwnershipControls'>>  = async params => {
  // undefined
    return this.client.putBucketOwnershipControls(params as any).promise();
  }

  putBucketPolicy: (params: RawParamsFrom<'putBucketPolicy'>) => Promise<ReturnTypeFrom<'putBucketPolicy'>>  = async params => {
  // undefined
    return this.client.putBucketPolicy(params as any).promise();
  }

  putBucketReplication: (params: RawParamsFrom<'putBucketReplication'>) => Promise<ReturnTypeFrom<'putBucketReplication'>>  = async params => {
  // undefined
    return this.client.putBucketReplication(params as any).promise();
  }

  putBucketRequestPayment: (params: RawParamsFrom<'putBucketRequestPayment'>) => Promise<ReturnTypeFrom<'putBucketRequestPayment'>>  = async params => {
  // undefined
    return this.client.putBucketRequestPayment(params as any).promise();
  }

  putBucketTagging: (params: RawParamsFrom<'putBucketTagging'>) => Promise<ReturnTypeFrom<'putBucketTagging'>>  = async params => {
  // undefined
    return this.client.putBucketTagging(params as any).promise();
  }

  putBucketVersioning: (params: RawParamsFrom<'putBucketVersioning'>) => Promise<ReturnTypeFrom<'putBucketVersioning'>>  = async params => {
  // undefined
    return this.client.putBucketVersioning(params as any).promise();
  }

  putBucketWebsite: (params: RawParamsFrom<'putBucketWebsite'>) => Promise<ReturnTypeFrom<'putBucketWebsite'>>  = async params => {
  // undefined
    return this.client.putBucketWebsite(params as any).promise();
  }

  putObject: (params: RawParamsFrom<'putObject'>) => Promise<ReturnTypeFrom<'putObject'>>  = async params => {
  // undefined
    return this.client.putObject(params as any).promise();
  }

  putObjectAcl: (params: RawParamsFrom<'putObjectAcl'>) => Promise<ReturnTypeFrom<'putObjectAcl'>>  = async params => {
  // undefined
    return this.client.putObjectAcl(params as any).promise();
  }

  putObjectLegalHold: (params: RawParamsFrom<'putObjectLegalHold'>) => Promise<ReturnTypeFrom<'putObjectLegalHold'>>  = async params => {
  // undefined
    return this.client.putObjectLegalHold(params as any).promise();
  }

  putObjectLockConfiguration: (params: RawParamsFrom<'putObjectLockConfiguration'>) => Promise<ReturnTypeFrom<'putObjectLockConfiguration'>>  = async params => {
  // undefined
    return this.client.putObjectLockConfiguration(params as any).promise();
  }

  putObjectRetention: (params: RawParamsFrom<'putObjectRetention'>) => Promise<ReturnTypeFrom<'putObjectRetention'>>  = async params => {
  // undefined
    return this.client.putObjectRetention(params as any).promise();
  }

  putObjectTagging: (params: RawParamsFrom<'putObjectTagging'>) => Promise<ReturnTypeFrom<'putObjectTagging'>>  = async params => {
  // undefined
    return this.client.putObjectTagging(params as any).promise();
  }

  putPublicAccessBlock: (params: RawParamsFrom<'putPublicAccessBlock'>) => Promise<ReturnTypeFrom<'putPublicAccessBlock'>>  = async params => {
  // undefined
    return this.client.putPublicAccessBlock(params as any).promise();
  }

  restoreObject: (params: RawParamsFrom<'restoreObject'>) => Promise<ReturnTypeFrom<'restoreObject'>>  = async params => {
  // undefined
    return this.client.restoreObject(params as any).promise();
  }

  selectObjectContent: (params: RawParamsFrom<'selectObjectContent'>) => Promise<ReturnTypeFrom<'selectObjectContent'>>  = async params => {
  // undefined
    return this.client.selectObjectContent(params as any).promise();
  }

  uploadPart: (params: RawParamsFrom<'uploadPart'>) => Promise<ReturnTypeFrom<'uploadPart'>>  = async params => {
  // undefined
    return this.client.uploadPart(params as any).promise();
  }

  uploadPartCopy: (params: RawParamsFrom<'uploadPartCopy'>) => Promise<ReturnTypeFrom<'uploadPartCopy'>>  = async params => {
  // undefined
    return this.client.uploadPartCopy(params as any).promise();
  }
  
  static fromClient(client: AWSS3): S3 {
    return new S3(client) as any;
  }
  
  static client(options?: AWSS3.Types.ClientConfiguration): S3 {
    return new S3(new AWSS3(options)) as any;
  }
}  
