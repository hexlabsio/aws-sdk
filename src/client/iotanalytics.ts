import { Request, IoTAnalytics as AWSIoTAnalytics } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTAnalytics> = AWSIoTAnalytics[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTAnalytics> = AWSIoTAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTAnalytics[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTAnalytics, Extras> = AWSIoTAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iotanalytics';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly ["listChannels","listDatasets","listDatastores","listPipelines"];
    
  batchPutMessage: FunctionTypeFrom<'batchPutMessage'>;

  cancelPipelineReprocessing: FunctionTypeFrom<'cancelPipelineReprocessing'>;

  createChannel: FunctionTypeFrom<'createChannel'>;

  createDataset: FunctionTypeFrom<'createDataset'>;

  createDatasetContent: FunctionTypeFrom<'createDatasetContent'>;

  createDatastore: FunctionTypeFrom<'createDatastore'>;

  createPipeline: FunctionTypeFrom<'createPipeline'>;

  deleteChannel: FunctionTypeFrom<'deleteChannel'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  deleteDatasetContent: FunctionTypeFrom<'deleteDatasetContent'>;

  deleteDatastore: FunctionTypeFrom<'deleteDatastore'>;

  deletePipeline: FunctionTypeFrom<'deletePipeline'>;

  describeChannel: FunctionTypeFrom<'describeChannel'>;

  describeDataset: FunctionTypeFrom<'describeDataset'>;

  describeDatastore: FunctionTypeFrom<'describeDatastore'>;

  describeLoggingOptions: FunctionTypeFrom<'describeLoggingOptions'>;

  describePipeline: FunctionTypeFrom<'describePipeline'>;

  getDatasetContent: FunctionTypeFrom<'getDatasetContent'>;

  listChannels: FunctionTypeFrom<'listChannels'>;

  listDatasetContents: FunctionTypeFrom<'listDatasetContents'>;

  listDatasets: FunctionTypeFrom<'listDatasets'>;

  listDatastores: FunctionTypeFrom<'listDatastores'>;

  listPipelines: FunctionTypeFrom<'listPipelines'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putLoggingOptions: FunctionTypeFrom<'putLoggingOptions'>;

  runPipelineActivity: FunctionTypeFrom<'runPipelineActivity'>;

  sampleChannelData: FunctionTypeFrom<'sampleChannelData'>;

  startPipelineReprocessing: FunctionTypeFrom<'startPipelineReprocessing'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateChannel: FunctionTypeFrom<'updateChannel'>;

  updateDataset: FunctionTypeFrom<'updateDataset'>;

  updateDatastore: FunctionTypeFrom<'updateDatastore'>;

  updatePipeline: FunctionTypeFrom<'updatePipeline'>
}
 
export class IoTAnalytics implements ClientType {
  private constructor(private readonly client: AWSIoTAnalytics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotanalytics';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = ["listChannels","listDatasets","listDatastores","listPipelines"] as const;
  
  async batchPutMessage(...args: any): Promise<any> {
  // undefined
    return this.client.batchPutMessage(...args).promise()
  }

  async cancelPipelineReprocessing(...args: any): Promise<any> {
  // undefined
    return this.client.cancelPipelineReprocessing(...args).promise()
  }

  async createChannel(...args: any): Promise<any> {
  // undefined
    return this.client.createChannel(...args).promise()
  }

  async createDataset(...args: any): Promise<any> {
  // undefined
    return this.client.createDataset(...args).promise()
  }

  async createDatasetContent(...args: any): Promise<any> {
  // undefined
    return this.client.createDatasetContent(...args).promise()
  }

  async createDatastore(...args: any): Promise<any> {
  // undefined
    return this.client.createDatastore(...args).promise()
  }

  async createPipeline(...args: any): Promise<any> {
  // undefined
    return this.client.createPipeline(...args).promise()
  }

  async deleteChannel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChannel(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async deleteDatasetContent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDatasetContent(...args).promise()
  }

  async deleteDatastore(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDatastore(...args).promise()
  }

  async deletePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.deletePipeline(...args).promise()
  }

  async describeChannel(...args: any): Promise<any> {
  // undefined
    return this.client.describeChannel(...args).promise()
  }

  async describeDataset(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataset(...args).promise()
  }

  async describeDatastore(...args: any): Promise<any> {
  // undefined
    return this.client.describeDatastore(...args).promise()
  }

  async describeLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoggingOptions(...args).promise()
  }

  async describePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.describePipeline(...args).promise()
  }

  async getDatasetContent(...args: any): Promise<any> {
  // undefined
    return this.client.getDatasetContent(...args).promise()
  }

  async listChannels(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listChannels(...args).promise()
  }

  async listDatasetContents(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listDatasetContents(...args).promise()
  }

  async listDatasets(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listDatasets(...args).promise()
  }

  async listDatastores(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listDatastores(...args).promise()
  }

  async listPipelines(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPipelines(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putLoggingOptions(...args: any): Promise<any> {
  // undefined
    return this.client.putLoggingOptions(...args).promise()
  }

  async runPipelineActivity(...args: any): Promise<any> {
  // undefined
    return this.client.runPipelineActivity(...args).promise()
  }

  async sampleChannelData(...args: any): Promise<any> {
  // undefined
    return this.client.sampleChannelData(...args).promise()
  }

  async startPipelineReprocessing(...args: any): Promise<any> {
  // undefined
    return this.client.startPipelineReprocessing(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateChannel(...args: any): Promise<any> {
  // undefined
    return this.client.updateChannel(...args).promise()
  }

  async updateDataset(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataset(...args).promise()
  }

  async updateDatastore(...args: any): Promise<any> {
  // undefined
    return this.client.updateDatastore(...args).promise()
  }

  async updatePipeline(...args: any): Promise<any> {
  // undefined
    return this.client.updatePipeline(...args).promise()
  }
  
  static fromClient(client: AWSIoTAnalytics): ClientType {
    return new IoTAnalytics(client) as any;
  }
  
  static client(options?: AWSIoTAnalytics.Types.ClientConfiguration): ClientType {
    return new IoTAnalytics(new AWSIoTAnalytics(options)) as any;
  }
}  
