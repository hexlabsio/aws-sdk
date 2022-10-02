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

 interface ClientType {
    signingRegion: string | undefined;
    service: 's3';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly ["listBuckets"];
    
  abortMultipartUpload: FunctionTypeFrom<'abortMultipartUpload'>;

  completeMultipartUpload: FunctionTypeFrom<'completeMultipartUpload'>;

  copyObject: FunctionTypeFrom<'copyObject'>;

  createMultipartUpload: FunctionTypeFrom<'createMultipartUpload'>;

  deleteBucket: FunctionTypeFrom<'deleteBucket'>;

  deleteBucketAnalyticsConfiguration: FunctionTypeFrom<'deleteBucketAnalyticsConfiguration'>;

  deleteBucketCors: FunctionTypeFrom<'deleteBucketCors'>;

  deleteBucketEncryption: FunctionTypeFrom<'deleteBucketEncryption'>;

  deleteBucketIntelligentTieringConfiguration: FunctionTypeFrom<'deleteBucketIntelligentTieringConfiguration'>;

  deleteBucketInventoryConfiguration: FunctionTypeFrom<'deleteBucketInventoryConfiguration'>;

  deleteBucketLifecycle: FunctionTypeFrom<'deleteBucketLifecycle'>;

  deleteBucketMetricsConfiguration: FunctionTypeFrom<'deleteBucketMetricsConfiguration'>;

  deleteBucketOwnershipControls: FunctionTypeFrom<'deleteBucketOwnershipControls'>;

  deleteBucketPolicy: FunctionTypeFrom<'deleteBucketPolicy'>;

  deleteBucketReplication: FunctionTypeFrom<'deleteBucketReplication'>;

  deleteBucketTagging: FunctionTypeFrom<'deleteBucketTagging'>;

  deleteBucketWebsite: FunctionTypeFrom<'deleteBucketWebsite'>;

  deleteObject: FunctionTypeFrom<'deleteObject'>;

  deleteObjectTagging: FunctionTypeFrom<'deleteObjectTagging'>;

  deleteObjects: FunctionTypeFrom<'deleteObjects'>;

  deletePublicAccessBlock: FunctionTypeFrom<'deletePublicAccessBlock'>;

  getBucketAccelerateConfiguration: FunctionTypeFrom<'getBucketAccelerateConfiguration'>;

  getBucketAcl: FunctionTypeFrom<'getBucketAcl'>;

  getBucketAnalyticsConfiguration: FunctionTypeFrom<'getBucketAnalyticsConfiguration'>;

  getBucketCors: FunctionTypeFrom<'getBucketCors'>;

  getBucketEncryption: FunctionTypeFrom<'getBucketEncryption'>;

  getBucketIntelligentTieringConfiguration: FunctionTypeFrom<'getBucketIntelligentTieringConfiguration'>;

  getBucketInventoryConfiguration: FunctionTypeFrom<'getBucketInventoryConfiguration'>;

  getBucketLifecycle: FunctionTypeFrom<'getBucketLifecycle'>;

  getBucketLifecycleConfiguration: FunctionTypeFrom<'getBucketLifecycleConfiguration'>;

  getBucketLocation: FunctionTypeFrom<'getBucketLocation'>;

  getBucketLogging: FunctionTypeFrom<'getBucketLogging'>;

  getBucketMetricsConfiguration: FunctionTypeFrom<'getBucketMetricsConfiguration'>;

  getBucketNotification: FunctionTypeFrom<'getBucketNotification'>;

  getBucketNotificationConfiguration: FunctionTypeFrom<'getBucketNotificationConfiguration'>;

  getBucketOwnershipControls: FunctionTypeFrom<'getBucketOwnershipControls'>;

  getBucketPolicy: FunctionTypeFrom<'getBucketPolicy'>;

  getBucketPolicyStatus: FunctionTypeFrom<'getBucketPolicyStatus'>;

  getBucketReplication: FunctionTypeFrom<'getBucketReplication'>;

  getBucketRequestPayment: FunctionTypeFrom<'getBucketRequestPayment'>;

  getBucketTagging: FunctionTypeFrom<'getBucketTagging'>;

  getBucketVersioning: FunctionTypeFrom<'getBucketVersioning'>;

  getBucketWebsite: FunctionTypeFrom<'getBucketWebsite'>;

  getObject: FunctionTypeFrom<'getObject'>;

  getObjectAcl: FunctionTypeFrom<'getObjectAcl'>;

  getObjectAttributes: FunctionTypeFrom<'getObjectAttributes'>;

  getObjectLegalHold: FunctionTypeFrom<'getObjectLegalHold'>;

  getObjectLockConfiguration: FunctionTypeFrom<'getObjectLockConfiguration'>;

  getObjectRetention: FunctionTypeFrom<'getObjectRetention'>;

  getObjectTagging: FunctionTypeFrom<'getObjectTagging'>;

  getObjectTorrent: FunctionTypeFrom<'getObjectTorrent'>;

  getPublicAccessBlock: FunctionTypeFrom<'getPublicAccessBlock'>;

  headBucket: FunctionTypeFrom<'headBucket'>;

  headObject: FunctionTypeFrom<'headObject'>;

  listBucketAnalyticsConfigurations: FunctionTypeFrom<'listBucketAnalyticsConfigurations'>;

  listBucketIntelligentTieringConfigurations: FunctionTypeFrom<'listBucketIntelligentTieringConfigurations'>;

  listBucketInventoryConfigurations: FunctionTypeFrom<'listBucketInventoryConfigurations'>;

  listBucketMetricsConfigurations: FunctionTypeFrom<'listBucketMetricsConfigurations'>;

  listBuckets: FunctionTypeFrom<'listBuckets'>;

  listMultipartUploads: FunctionTypeFrom<'listMultipartUploads'>;

  listObjectVersions: FunctionTypeFrom<'listObjectVersions'>;

  listObjects: FunctionTypeFrom<'listObjects'>;

  listObjectsV2: FunctionTypeFrom<'listObjectsV2'>;

  listParts(params: { [K in keyof Omit<ParamsFrom<'listParts', { next?: string, limit?: number }>, 'PartNumberMarker' | 'MaxParts'>]: ParamsFrom<'listParts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listParts'>]-?: ReturnTypeFrom<'listParts'>[K]}['Parts'] }>
  ;

  putBucketAccelerateConfiguration: FunctionTypeFrom<'putBucketAccelerateConfiguration'>;

  putBucketAcl: FunctionTypeFrom<'putBucketAcl'>;

  putBucketAnalyticsConfiguration: FunctionTypeFrom<'putBucketAnalyticsConfiguration'>;

  putBucketCors: FunctionTypeFrom<'putBucketCors'>;

  putBucketEncryption: FunctionTypeFrom<'putBucketEncryption'>;

  putBucketIntelligentTieringConfiguration: FunctionTypeFrom<'putBucketIntelligentTieringConfiguration'>;

  putBucketInventoryConfiguration: FunctionTypeFrom<'putBucketInventoryConfiguration'>;

  putBucketLifecycle: FunctionTypeFrom<'putBucketLifecycle'>;

  putBucketLifecycleConfiguration: FunctionTypeFrom<'putBucketLifecycleConfiguration'>;

  putBucketLogging: FunctionTypeFrom<'putBucketLogging'>;

  putBucketMetricsConfiguration: FunctionTypeFrom<'putBucketMetricsConfiguration'>;

  putBucketNotification: FunctionTypeFrom<'putBucketNotification'>;

  putBucketNotificationConfiguration: FunctionTypeFrom<'putBucketNotificationConfiguration'>;

  putBucketOwnershipControls: FunctionTypeFrom<'putBucketOwnershipControls'>;

  putBucketPolicy: FunctionTypeFrom<'putBucketPolicy'>;

  putBucketReplication: FunctionTypeFrom<'putBucketReplication'>;

  putBucketRequestPayment: FunctionTypeFrom<'putBucketRequestPayment'>;

  putBucketTagging: FunctionTypeFrom<'putBucketTagging'>;

  putBucketVersioning: FunctionTypeFrom<'putBucketVersioning'>;

  putBucketWebsite: FunctionTypeFrom<'putBucketWebsite'>;

  putObject: FunctionTypeFrom<'putObject'>;

  putObjectAcl: FunctionTypeFrom<'putObjectAcl'>;

  putObjectLegalHold: FunctionTypeFrom<'putObjectLegalHold'>;

  putObjectLockConfiguration: FunctionTypeFrom<'putObjectLockConfiguration'>;

  putObjectRetention: FunctionTypeFrom<'putObjectRetention'>;

  putObjectTagging: FunctionTypeFrom<'putObjectTagging'>;

  putPublicAccessBlock: FunctionTypeFrom<'putPublicAccessBlock'>;

  restoreObject: FunctionTypeFrom<'restoreObject'>;

  selectObjectContent: FunctionTypeFrom<'selectObjectContent'>;

  uploadPart: FunctionTypeFrom<'uploadPart'>;

  uploadPartCopy: FunctionTypeFrom<'uploadPartCopy'>
}
 
export class S3 implements ClientType {
  private constructor(private readonly client: AWSS3) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 's3';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = ["listBuckets"] as const;
  
  async abortMultipartUpload(...args: any): Promise<any> {
  // undefined
    return this.client.abortMultipartUpload(...args).promise()
  }

  async completeMultipartUpload(...args: any): Promise<any> {
  // undefined
    return this.client.completeMultipartUpload(...args).promise()
  }

  async copyObject(...args: any): Promise<any> {
  // undefined
    return this.client.copyObject(...args).promise()
  }

  async createMultipartUpload(...args: any): Promise<any> {
  // undefined
    return this.client.createMultipartUpload(...args).promise()
  }

  async deleteBucket(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucket(...args).promise()
  }

  async deleteBucketAnalyticsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketAnalyticsConfiguration(...args).promise()
  }

  async deleteBucketCors(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketCors(...args).promise()
  }

  async deleteBucketEncryption(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketEncryption(...args).promise()
  }

  async deleteBucketIntelligentTieringConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketIntelligentTieringConfiguration(...args).promise()
  }

  async deleteBucketInventoryConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketInventoryConfiguration(...args).promise()
  }

  async deleteBucketLifecycle(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketLifecycle(...args).promise()
  }

  async deleteBucketMetricsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketMetricsConfiguration(...args).promise()
  }

  async deleteBucketOwnershipControls(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketOwnershipControls(...args).promise()
  }

  async deleteBucketPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketPolicy(...args).promise()
  }

  async deleteBucketReplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketReplication(...args).promise()
  }

  async deleteBucketTagging(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketTagging(...args).promise()
  }

  async deleteBucketWebsite(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBucketWebsite(...args).promise()
  }

  async deleteObject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteObject(...args).promise()
  }

  async deleteObjectTagging(...args: any): Promise<any> {
  // undefined
    return this.client.deleteObjectTagging(...args).promise()
  }

  async deleteObjects(...args: any): Promise<any> {
  // undefined
    return this.client.deleteObjects(...args).promise()
  }

  async deletePublicAccessBlock(...args: any): Promise<any> {
  // undefined
    return this.client.deletePublicAccessBlock(...args).promise()
  }

  async getBucketAccelerateConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketAccelerateConfiguration(...args).promise()
  }

  async getBucketAcl(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketAcl(...args).promise()
  }

  async getBucketAnalyticsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketAnalyticsConfiguration(...args).promise()
  }

  async getBucketCors(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketCors(...args).promise()
  }

  async getBucketEncryption(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketEncryption(...args).promise()
  }

  async getBucketIntelligentTieringConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketIntelligentTieringConfiguration(...args).promise()
  }

  async getBucketInventoryConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketInventoryConfiguration(...args).promise()
  }

  async getBucketLifecycle(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketLifecycle(...args).promise()
  }

  async getBucketLifecycleConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketLifecycleConfiguration(...args).promise()
  }

  async getBucketLocation(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketLocation(...args).promise()
  }

  async getBucketLogging(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketLogging(...args).promise()
  }

  async getBucketMetricsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketMetricsConfiguration(...args).promise()
  }

  async getBucketNotification(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketNotification(...args).promise()
  }

  async getBucketNotificationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketNotificationConfiguration(...args).promise()
  }

  async getBucketOwnershipControls(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketOwnershipControls(...args).promise()
  }

  async getBucketPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketPolicy(...args).promise()
  }

  async getBucketPolicyStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketPolicyStatus(...args).promise()
  }

  async getBucketReplication(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketReplication(...args).promise()
  }

  async getBucketRequestPayment(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketRequestPayment(...args).promise()
  }

  async getBucketTagging(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketTagging(...args).promise()
  }

  async getBucketVersioning(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketVersioning(...args).promise()
  }

  async getBucketWebsite(...args: any): Promise<any> {
  // undefined
    return this.client.getBucketWebsite(...args).promise()
  }

  async getObject(...args: any): Promise<any> {
  // undefined
    return this.client.getObject(...args).promise()
  }

  async getObjectAcl(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectAcl(...args).promise()
  }

  async getObjectAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectAttributes(...args).promise()
  }

  async getObjectLegalHold(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectLegalHold(...args).promise()
  }

  async getObjectLockConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectLockConfiguration(...args).promise()
  }

  async getObjectRetention(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectRetention(...args).promise()
  }

  async getObjectTagging(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectTagging(...args).promise()
  }

  async getObjectTorrent(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectTorrent(...args).promise()
  }

  async getPublicAccessBlock(...args: any): Promise<any> {
  // undefined
    return this.client.getPublicAccessBlock(...args).promise()
  }

  async headBucket(...args: any): Promise<any> {
  // undefined
    return this.client.headBucket(...args).promise()
  }

  async headObject(...args: any): Promise<any> {
  // undefined
    return this.client.headObject(...args).promise()
  }

  async listBucketAnalyticsConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listBucketAnalyticsConfigurations(...args).promise()
  }

  async listBucketIntelligentTieringConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listBucketIntelligentTieringConfigurations(...args).promise()
  }

  async listBucketInventoryConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listBucketInventoryConfigurations(...args).promise()
  }

  async listBucketMetricsConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listBucketMetricsConfigurations(...args).promise()
  }

  async listBuckets(...args: any): Promise<any> {
  // {"resultKey":"Buckets"}
    return this.client.listBuckets(...args).promise()
  }

  async listMultipartUploads(...args: any): Promise<any> {
  // {"inputToken":["KeyMarker","UploadIdMarker"],"limitKey":"MaxUploads","moreResults":"IsTruncated","outputToken":["NextKeyMarker","NextUploadIdMarker"],"resultKey":["Uploads","CommonPrefixes"]}
    return this.client.listMultipartUploads(...args).promise()
  }

  async listObjectVersions(...args: any): Promise<any> {
  // {"inputToken":["KeyMarker","VersionIdMarker"],"limitKey":"MaxKeys","moreResults":"IsTruncated","outputToken":["NextKeyMarker","NextVersionIdMarker"],"resultKey":["Versions","DeleteMarkers","CommonPrefixes"]}
    return this.client.listObjectVersions(...args).promise()
  }

  async listObjects(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxKeys","moreResults":"IsTruncated","outputToken":"NextMarker || Contents[-1].Key","resultKey":["Contents","CommonPrefixes"]}
    return this.client.listObjects(...args).promise()
  }

  async listObjectsV2(...args: any): Promise<any> {
  // {"inputToken":"ContinuationToken","limitKey":"MaxKeys","outputToken":"NextContinuationToken","resultKey":["Contents","CommonPrefixes"]}
    return this.client.listObjectsV2(...args).promise()
  }

  async listParts(...args: any): Promise<any> {
    // {"inputToken":"PartNumberMarker","limitKey":"MaxParts","moreResults":"IsTruncated","outputToken":"NextPartNumberMarker","resultKey":"Parts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PartNumberMarker: next } : {};
    const limitTokenPart = limit ? { MaxParts: limit } : {};
    const result = await this.client.listParts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPartNumberMarker;
    const member = result.Parts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putBucketAccelerateConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketAccelerateConfiguration(...args).promise()
  }

  async putBucketAcl(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketAcl(...args).promise()
  }

  async putBucketAnalyticsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketAnalyticsConfiguration(...args).promise()
  }

  async putBucketCors(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketCors(...args).promise()
  }

  async putBucketEncryption(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketEncryption(...args).promise()
  }

  async putBucketIntelligentTieringConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketIntelligentTieringConfiguration(...args).promise()
  }

  async putBucketInventoryConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketInventoryConfiguration(...args).promise()
  }

  async putBucketLifecycle(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketLifecycle(...args).promise()
  }

  async putBucketLifecycleConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketLifecycleConfiguration(...args).promise()
  }

  async putBucketLogging(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketLogging(...args).promise()
  }

  async putBucketMetricsConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketMetricsConfiguration(...args).promise()
  }

  async putBucketNotification(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketNotification(...args).promise()
  }

  async putBucketNotificationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketNotificationConfiguration(...args).promise()
  }

  async putBucketOwnershipControls(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketOwnershipControls(...args).promise()
  }

  async putBucketPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketPolicy(...args).promise()
  }

  async putBucketReplication(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketReplication(...args).promise()
  }

  async putBucketRequestPayment(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketRequestPayment(...args).promise()
  }

  async putBucketTagging(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketTagging(...args).promise()
  }

  async putBucketVersioning(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketVersioning(...args).promise()
  }

  async putBucketWebsite(...args: any): Promise<any> {
  // undefined
    return this.client.putBucketWebsite(...args).promise()
  }

  async putObject(...args: any): Promise<any> {
  // undefined
    return this.client.putObject(...args).promise()
  }

  async putObjectAcl(...args: any): Promise<any> {
  // undefined
    return this.client.putObjectAcl(...args).promise()
  }

  async putObjectLegalHold(...args: any): Promise<any> {
  // undefined
    return this.client.putObjectLegalHold(...args).promise()
  }

  async putObjectLockConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putObjectLockConfiguration(...args).promise()
  }

  async putObjectRetention(...args: any): Promise<any> {
  // undefined
    return this.client.putObjectRetention(...args).promise()
  }

  async putObjectTagging(...args: any): Promise<any> {
  // undefined
    return this.client.putObjectTagging(...args).promise()
  }

  async putPublicAccessBlock(...args: any): Promise<any> {
  // undefined
    return this.client.putPublicAccessBlock(...args).promise()
  }

  async restoreObject(...args: any): Promise<any> {
  // undefined
    return this.client.restoreObject(...args).promise()
  }

  async selectObjectContent(...args: any): Promise<any> {
  // undefined
    return this.client.selectObjectContent(...args).promise()
  }

  async uploadPart(...args: any): Promise<any> {
  // undefined
    return this.client.uploadPart(...args).promise()
  }

  async uploadPartCopy(...args: any): Promise<any> {
  // undefined
    return this.client.uploadPartCopy(...args).promise()
  }
  
  static fromClient(client: AWSS3): ClientType {
    return new S3(client) as any;
  }
  
  static client(options?: AWSS3.Types.ClientConfiguration): ClientType {
    return new S3(new AWSS3(options)) as any;
  }
}  
