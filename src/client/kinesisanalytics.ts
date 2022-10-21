import { Request, KinesisAnalytics as AWSKinesisAnalytics } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKinesisAnalytics> = AWSKinesisAnalytics[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKinesisAnalytics> = AWSKinesisAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKinesisAnalytics[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKinesisAnalytics, Extras> = AWSKinesisAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKinesisAnalytics> = AWSKinesisAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KinesisAnalytics {
  private constructor(private readonly client: AWSKinesisAnalytics) {}
  
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

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
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

  describeApplication: (params: RawParamsFrom<'describeApplication'>) => Promise<ReturnTypeFrom<'describeApplication'>>  = async params => {
  // undefined
    return this.client.describeApplication(params as any).promise();
  }

  discoverInputSchema: (params: RawParamsFrom<'discoverInputSchema'>) => Promise<ReturnTypeFrom<'discoverInputSchema'>>  = async params => {
  // undefined
    return this.client.discoverInputSchema(params as any).promise();
  }

  listApplications: (params: RawParamsFrom<'listApplications'>) => Promise<ReturnTypeFrom<'listApplications'>>  = async params => {
  // undefined
    return this.client.listApplications(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
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
  
  static fromClient(client: AWSKinesisAnalytics): KinesisAnalytics {
    return new KinesisAnalytics(client) as any;
  }
  
  static client(options?: AWSKinesisAnalytics.Types.ClientConfiguration): KinesisAnalytics {
    return new KinesisAnalytics(new AWSKinesisAnalytics(options)) as any;
  }
}  
