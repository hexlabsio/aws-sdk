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

  createApplication: FunctionTypeFrom<'createApplication'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteApplicationCloudWatchLoggingOption: FunctionTypeFrom<'deleteApplicationCloudWatchLoggingOption'>;

  deleteApplicationInputProcessingConfiguration: FunctionTypeFrom<'deleteApplicationInputProcessingConfiguration'>;

  deleteApplicationOutput: FunctionTypeFrom<'deleteApplicationOutput'>;

  deleteApplicationReferenceDataSource: FunctionTypeFrom<'deleteApplicationReferenceDataSource'>;

  describeApplication: FunctionTypeFrom<'describeApplication'>;

  discoverInputSchema: FunctionTypeFrom<'discoverInputSchema'>;

  listApplications: FunctionTypeFrom<'listApplications'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startApplication: FunctionTypeFrom<'startApplication'>;

  stopApplication: FunctionTypeFrom<'stopApplication'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>
}
 
export class KinesisAnalytics implements ClientType {
  private constructor(private readonly client: AWSKinesisAnalytics) {}
  
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

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
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

  async describeApplication(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplication(...args).promise()
  }

  async discoverInputSchema(...args: any): Promise<any> {
  // undefined
    return this.client.discoverInputSchema(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
  // undefined
    return this.client.listApplications(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
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
  
  static fromClient(client: AWSKinesisAnalytics): ClientType {
    return new KinesisAnalytics(client) as any;
  }
  
  static client(options?: AWSKinesisAnalytics.Types.ClientConfiguration): ClientType {
    return new KinesisAnalytics(new AWSKinesisAnalytics(options)) as any;
  }
}  
