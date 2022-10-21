import { Request, KinesisAnalyticsV2 as AWSKinesisAnalyticsV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKinesisAnalyticsV2> = AWSKinesisAnalyticsV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKinesisAnalyticsV2> = AWSKinesisAnalyticsV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKinesisAnalyticsV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKinesisAnalyticsV2, Extras> = AWSKinesisAnalyticsV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKinesisAnalyticsV2> = AWSKinesisAnalyticsV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KinesisAnalyticsV2 {
  private constructor(private readonly client: AWSKinesisAnalyticsV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisanalytics' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = [] as const;
  
  addApplicationCloudWatchLoggingOption: (params: RawParamsFrom<'addApplicationCloudWatchLoggingOption'>) => Promise<ReturnTypeFrom<'addApplicationCloudWatchLoggingOption'>>  = async params => {
  // undefined
    return this.client.addApplicationCloudWatchLoggingOption(params as any).promise();
  }

  addApplicationInput: (params: RawParamsFrom<'addApplicationInput'>) => Promise<ReturnTypeFrom<'addApplicationInput'>>  = async params => {
  // undefined
    return this.client.addApplicationInput(params as any).promise();
  }

  addApplicationInputProcessingConfiguration: (params: RawParamsFrom<'addApplicationInputProcessingConfiguration'>) => Promise<ReturnTypeFrom<'addApplicationInputProcessingConfiguration'>>  = async params => {
  // undefined
    return this.client.addApplicationInputProcessingConfiguration(params as any).promise();
  }

  addApplicationOutput: (params: RawParamsFrom<'addApplicationOutput'>) => Promise<ReturnTypeFrom<'addApplicationOutput'>>  = async params => {
  // undefined
    return this.client.addApplicationOutput(params as any).promise();
  }

  addApplicationReferenceDataSource: (params: RawParamsFrom<'addApplicationReferenceDataSource'>) => Promise<ReturnTypeFrom<'addApplicationReferenceDataSource'>>  = async params => {
  // undefined
    return this.client.addApplicationReferenceDataSource(params as any).promise();
  }

  addApplicationVpcConfiguration: (params: RawParamsFrom<'addApplicationVpcConfiguration'>) => Promise<ReturnTypeFrom<'addApplicationVpcConfiguration'>>  = async params => {
  // undefined
    return this.client.addApplicationVpcConfiguration(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createApplicationPresignedUrl: (params: RawParamsFrom<'createApplicationPresignedUrl'>) => Promise<ReturnTypeFrom<'createApplicationPresignedUrl'>>  = async params => {
  // undefined
    return this.client.createApplicationPresignedUrl(params as any).promise();
  }

  createApplicationSnapshot: (params: RawParamsFrom<'createApplicationSnapshot'>) => Promise<ReturnTypeFrom<'createApplicationSnapshot'>>  = async params => {
  // undefined
    return this.client.createApplicationSnapshot(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteApplicationCloudWatchLoggingOption: (params: RawParamsFrom<'deleteApplicationCloudWatchLoggingOption'>) => Promise<ReturnTypeFrom<'deleteApplicationCloudWatchLoggingOption'>>  = async params => {
  // undefined
    return this.client.deleteApplicationCloudWatchLoggingOption(params as any).promise();
  }

  deleteApplicationInputProcessingConfiguration: (params: RawParamsFrom<'deleteApplicationInputProcessingConfiguration'>) => Promise<ReturnTypeFrom<'deleteApplicationInputProcessingConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteApplicationInputProcessingConfiguration(params as any).promise();
  }

  deleteApplicationOutput: (params: RawParamsFrom<'deleteApplicationOutput'>) => Promise<ReturnTypeFrom<'deleteApplicationOutput'>>  = async params => {
  // undefined
    return this.client.deleteApplicationOutput(params as any).promise();
  }

  deleteApplicationReferenceDataSource: (params: RawParamsFrom<'deleteApplicationReferenceDataSource'>) => Promise<ReturnTypeFrom<'deleteApplicationReferenceDataSource'>>  = async params => {
  // undefined
    return this.client.deleteApplicationReferenceDataSource(params as any).promise();
  }

  deleteApplicationSnapshot: (params: RawParamsFrom<'deleteApplicationSnapshot'>) => Promise<ReturnTypeFrom<'deleteApplicationSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteApplicationSnapshot(params as any).promise();
  }

  deleteApplicationVpcConfiguration: (params: RawParamsFrom<'deleteApplicationVpcConfiguration'>) => Promise<ReturnTypeFrom<'deleteApplicationVpcConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteApplicationVpcConfiguration(params as any).promise();
  }

  describeApplication: (params: RawParamsFrom<'describeApplication'>) => Promise<ReturnTypeFrom<'describeApplication'>>  = async params => {
  // undefined
    return this.client.describeApplication(params as any).promise();
  }

  describeApplicationSnapshot: (params: RawParamsFrom<'describeApplicationSnapshot'>) => Promise<ReturnTypeFrom<'describeApplicationSnapshot'>>  = async params => {
  // undefined
    return this.client.describeApplicationSnapshot(params as any).promise();
  }

  describeApplicationVersion: (params: RawParamsFrom<'describeApplicationVersion'>) => Promise<ReturnTypeFrom<'describeApplicationVersion'>>  = async params => {
  // undefined
    return this.client.describeApplicationVersion(params as any).promise();
  }

  discoverInputSchema: (params: RawParamsFrom<'discoverInputSchema'>) => Promise<ReturnTypeFrom<'discoverInputSchema'>>  = async params => {
  // undefined
    return this.client.discoverInputSchema(params as any).promise();
  }

  listApplicationSnapshots: (params: RawParamsFrom<'listApplicationSnapshots'>) => Promise<ReturnTypeFrom<'listApplicationSnapshots'>>  = async params => {
  // undefined
    return this.client.listApplicationSnapshots(params as any).promise();
  }

  listApplicationVersions: (params: RawParamsFrom<'listApplicationVersions'>) => Promise<ReturnTypeFrom<'listApplicationVersions'>>  = async params => {
  // undefined
    return this.client.listApplicationVersions(params as any).promise();
  }

  listApplications: (params: RawParamsFrom<'listApplications'>) => Promise<ReturnTypeFrom<'listApplications'>>  = async params => {
  // undefined
    return this.client.listApplications(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  rollbackApplication: (params: RawParamsFrom<'rollbackApplication'>) => Promise<ReturnTypeFrom<'rollbackApplication'>>  = async params => {
  // undefined
    return this.client.rollbackApplication(params as any).promise();
  }

  startApplication: (params: RawParamsFrom<'startApplication'>) => Promise<ReturnTypeFrom<'startApplication'>>  = async params => {
  // undefined
    return this.client.startApplication(params as any).promise();
  }

  stopApplication: (params: RawParamsFrom<'stopApplication'>) => Promise<ReturnTypeFrom<'stopApplication'>>  = async params => {
  // undefined
    return this.client.stopApplication(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }

  updateApplicationMaintenanceConfiguration: (params: RawParamsFrom<'updateApplicationMaintenanceConfiguration'>) => Promise<ReturnTypeFrom<'updateApplicationMaintenanceConfiguration'>>  = async params => {
  // undefined
    return this.client.updateApplicationMaintenanceConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSKinesisAnalyticsV2): KinesisAnalyticsV2 {
    return new KinesisAnalyticsV2(client) as any;
  }
  
  static client(options?: AWSKinesisAnalyticsV2.Types.ClientConfiguration): KinesisAnalyticsV2 {
    return new KinesisAnalyticsV2(new AWSKinesisAnalyticsV2(options)) as any;
  }
}  
