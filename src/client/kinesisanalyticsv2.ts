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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kinesisanalytics';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly [];
    
  addApplicationCloudWatchLoggingOption: FunctionTypeFrom<'addApplicationCloudWatchLoggingOption'>;

  addApplicationInput: FunctionTypeFrom<'addApplicationInput'>;

  addApplicationInputProcessingConfiguration: FunctionTypeFrom<'addApplicationInputProcessingConfiguration'>;

  addApplicationOutput: FunctionTypeFrom<'addApplicationOutput'>;

  addApplicationReferenceDataSource: FunctionTypeFrom<'addApplicationReferenceDataSource'>;

  addApplicationVpcConfiguration: FunctionTypeFrom<'addApplicationVpcConfiguration'>;

  createApplication: FunctionTypeFrom<'createApplication'>;

  createApplicationPresignedUrl: FunctionTypeFrom<'createApplicationPresignedUrl'>;

  createApplicationSnapshot: FunctionTypeFrom<'createApplicationSnapshot'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteApplicationCloudWatchLoggingOption: FunctionTypeFrom<'deleteApplicationCloudWatchLoggingOption'>;

  deleteApplicationInputProcessingConfiguration: FunctionTypeFrom<'deleteApplicationInputProcessingConfiguration'>;

  deleteApplicationOutput: FunctionTypeFrom<'deleteApplicationOutput'>;

  deleteApplicationReferenceDataSource: FunctionTypeFrom<'deleteApplicationReferenceDataSource'>;

  deleteApplicationSnapshot: FunctionTypeFrom<'deleteApplicationSnapshot'>;

  deleteApplicationVpcConfiguration: FunctionTypeFrom<'deleteApplicationVpcConfiguration'>;

  describeApplication: FunctionTypeFrom<'describeApplication'>;

  describeApplicationSnapshot: FunctionTypeFrom<'describeApplicationSnapshot'>;

  describeApplicationVersion: FunctionTypeFrom<'describeApplicationVersion'>;

  discoverInputSchema: FunctionTypeFrom<'discoverInputSchema'>;

  listApplicationSnapshots: FunctionTypeFrom<'listApplicationSnapshots'>;

  listApplicationVersions: FunctionTypeFrom<'listApplicationVersions'>;

  listApplications: FunctionTypeFrom<'listApplications'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  rollbackApplication: FunctionTypeFrom<'rollbackApplication'>;

  startApplication: FunctionTypeFrom<'startApplication'>;

  stopApplication: FunctionTypeFrom<'stopApplication'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>;

  updateApplicationMaintenanceConfiguration: FunctionTypeFrom<'updateApplicationMaintenanceConfiguration'>
}
 
export class KinesisAnalyticsV2 implements ClientType {
  private constructor(private readonly client: AWSKinesisAnalyticsV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesisanalytics';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = [] as const;
  
  async addApplicationCloudWatchLoggingOption(...args: any): Promise<any> {
  // undefined
    return this.client.addApplicationCloudWatchLoggingOption(...args).promise()
  }

  async addApplicationInput(...args: any): Promise<any> {
  // undefined
    return this.client.addApplicationInput(...args).promise()
  }

  async addApplicationInputProcessingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.addApplicationInputProcessingConfiguration(...args).promise()
  }

  async addApplicationOutput(...args: any): Promise<any> {
  // undefined
    return this.client.addApplicationOutput(...args).promise()
  }

  async addApplicationReferenceDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.addApplicationReferenceDataSource(...args).promise()
  }

  async addApplicationVpcConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.addApplicationVpcConfiguration(...args).promise()
  }

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createApplicationPresignedUrl(...args: any): Promise<any> {
  // undefined
    return this.client.createApplicationPresignedUrl(...args).promise()
  }

  async createApplicationSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createApplicationSnapshot(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteApplicationCloudWatchLoggingOption(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplicationCloudWatchLoggingOption(...args).promise()
  }

  async deleteApplicationInputProcessingConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplicationInputProcessingConfiguration(...args).promise()
  }

  async deleteApplicationOutput(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplicationOutput(...args).promise()
  }

  async deleteApplicationReferenceDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplicationReferenceDataSource(...args).promise()
  }

  async deleteApplicationSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplicationSnapshot(...args).promise()
  }

  async deleteApplicationVpcConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplicationVpcConfiguration(...args).promise()
  }

  async describeApplication(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplication(...args).promise()
  }

  async describeApplicationSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplicationSnapshot(...args).promise()
  }

  async describeApplicationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplicationVersion(...args).promise()
  }

  async discoverInputSchema(...args: any): Promise<any> {
  // undefined
    return this.client.discoverInputSchema(...args).promise()
  }

  async listApplicationSnapshots(...args: any): Promise<any> {
  // undefined
    return this.client.listApplicationSnapshots(...args).promise()
  }

  async listApplicationVersions(...args: any): Promise<any> {
  // undefined
    return this.client.listApplicationVersions(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
  // undefined
    return this.client.listApplications(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async rollbackApplication(...args: any): Promise<any> {
  // undefined
    return this.client.rollbackApplication(...args).promise()
  }

  async startApplication(...args: any): Promise<any> {
  // undefined
    return this.client.startApplication(...args).promise()
  }

  async stopApplication(...args: any): Promise<any> {
  // undefined
    return this.client.stopApplication(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }

  async updateApplicationMaintenanceConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplicationMaintenanceConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSKinesisAnalyticsV2): ClientType {
    return new KinesisAnalyticsV2(client) as any;
  }
  
  static client(options?: AWSKinesisAnalyticsV2.Types.ClientConfiguration): ClientType {
    return new KinesisAnalyticsV2(new AWSKinesisAnalyticsV2(options)) as any;
  }
}  
