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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTAnalytics> = AWSIoTAnalytics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTAnalytics {
  private constructor(private readonly client: AWSIoTAnalytics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotanalytics' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = ["listChannels","listDatasets","listDatastores","listPipelines"] as const;
  
  batchPutMessage: (params: RawParamsFrom<'batchPutMessage'>) => Promise<ReturnTypeFrom<'batchPutMessage'>>  = async params => {
  // undefined
    return this.client.batchPutMessage(params as any).promise();
  }

  cancelPipelineReprocessing: (params: RawParamsFrom<'cancelPipelineReprocessing'>) => Promise<ReturnTypeFrom<'cancelPipelineReprocessing'>>  = async params => {
  // undefined
    return this.client.cancelPipelineReprocessing(params as any).promise();
  }

  createChannel: (params: RawParamsFrom<'createChannel'>) => Promise<ReturnTypeFrom<'createChannel'>>  = async params => {
  // undefined
    return this.client.createChannel(params as any).promise();
  }

  createDataset: (params: RawParamsFrom<'createDataset'>) => Promise<ReturnTypeFrom<'createDataset'>>  = async params => {
  // undefined
    return this.client.createDataset(params as any).promise();
  }

  createDatasetContent: (params: RawParamsFrom<'createDatasetContent'>) => Promise<ReturnTypeFrom<'createDatasetContent'>>  = async params => {
  // undefined
    return this.client.createDatasetContent(params as any).promise();
  }

  createDatastore: (params: RawParamsFrom<'createDatastore'>) => Promise<ReturnTypeFrom<'createDatastore'>>  = async params => {
  // undefined
    return this.client.createDatastore(params as any).promise();
  }

  createPipeline: (params: RawParamsFrom<'createPipeline'>) => Promise<ReturnTypeFrom<'createPipeline'>>  = async params => {
  // undefined
    return this.client.createPipeline(params as any).promise();
  }

  deleteChannel: (params: RawParamsFrom<'deleteChannel'>) => Promise<ReturnTypeFrom<'deleteChannel'>>  = async params => {
  // undefined
    return this.client.deleteChannel(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  deleteDatasetContent: (params: RawParamsFrom<'deleteDatasetContent'>) => Promise<ReturnTypeFrom<'deleteDatasetContent'>>  = async params => {
  // undefined
    return this.client.deleteDatasetContent(params as any).promise();
  }

  deleteDatastore: (params: RawParamsFrom<'deleteDatastore'>) => Promise<ReturnTypeFrom<'deleteDatastore'>>  = async params => {
  // undefined
    return this.client.deleteDatastore(params as any).promise();
  }

  deletePipeline: (params: RawParamsFrom<'deletePipeline'>) => Promise<ReturnTypeFrom<'deletePipeline'>>  = async params => {
  // undefined
    return this.client.deletePipeline(params as any).promise();
  }

  describeChannel: (params: RawParamsFrom<'describeChannel'>) => Promise<ReturnTypeFrom<'describeChannel'>>  = async params => {
  // undefined
    return this.client.describeChannel(params as any).promise();
  }

  describeDataset: (params: RawParamsFrom<'describeDataset'>) => Promise<ReturnTypeFrom<'describeDataset'>>  = async params => {
  // undefined
    return this.client.describeDataset(params as any).promise();
  }

  describeDatastore: (params: RawParamsFrom<'describeDatastore'>) => Promise<ReturnTypeFrom<'describeDatastore'>>  = async params => {
  // undefined
    return this.client.describeDatastore(params as any).promise();
  }

  describeLoggingOptions: (params: RawParamsFrom<'describeLoggingOptions'>) => Promise<ReturnTypeFrom<'describeLoggingOptions'>>  = async params => {
  // undefined
    return this.client.describeLoggingOptions(params as any).promise();
  }

  describePipeline: (params: RawParamsFrom<'describePipeline'>) => Promise<ReturnTypeFrom<'describePipeline'>>  = async params => {
  // undefined
    return this.client.describePipeline(params as any).promise();
  }

  getDatasetContent: (params: RawParamsFrom<'getDatasetContent'>) => Promise<ReturnTypeFrom<'getDatasetContent'>>  = async params => {
  // undefined
    return this.client.getDatasetContent(params as any).promise();
  }

  listChannels: (params: RawParamsFrom<'listChannels'>) => Promise<ReturnTypeFrom<'listChannels'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listChannels(params as any).promise();
  }

  listDatasetContents: (params: RawParamsFrom<'listDatasetContents'>) => Promise<ReturnTypeFrom<'listDatasetContents'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listDatasetContents(params as any).promise();
  }

  listDatasets: (params: RawParamsFrom<'listDatasets'>) => Promise<ReturnTypeFrom<'listDatasets'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listDatasets(params as any).promise();
  }

  listDatastores: (params: RawParamsFrom<'listDatastores'>) => Promise<ReturnTypeFrom<'listDatastores'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listDatastores(params as any).promise();
  }

  listPipelines: (params: RawParamsFrom<'listPipelines'>) => Promise<ReturnTypeFrom<'listPipelines'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPipelines(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putLoggingOptions: (params: RawParamsFrom<'putLoggingOptions'>) => Promise<ReturnTypeFrom<'putLoggingOptions'>>  = async params => {
  // undefined
    return this.client.putLoggingOptions(params as any).promise();
  }

  runPipelineActivity: (params: RawParamsFrom<'runPipelineActivity'>) => Promise<ReturnTypeFrom<'runPipelineActivity'>>  = async params => {
  // undefined
    return this.client.runPipelineActivity(params as any).promise();
  }

  sampleChannelData: (params: RawParamsFrom<'sampleChannelData'>) => Promise<ReturnTypeFrom<'sampleChannelData'>>  = async params => {
  // undefined
    return this.client.sampleChannelData(params as any).promise();
  }

  startPipelineReprocessing: (params: RawParamsFrom<'startPipelineReprocessing'>) => Promise<ReturnTypeFrom<'startPipelineReprocessing'>>  = async params => {
  // undefined
    return this.client.startPipelineReprocessing(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateChannel: (params: RawParamsFrom<'updateChannel'>) => Promise<ReturnTypeFrom<'updateChannel'>>  = async params => {
  // undefined
    return this.client.updateChannel(params as any).promise();
  }

  updateDataset: (params: RawParamsFrom<'updateDataset'>) => Promise<ReturnTypeFrom<'updateDataset'>>  = async params => {
  // undefined
    return this.client.updateDataset(params as any).promise();
  }

  updateDatastore: (params: RawParamsFrom<'updateDatastore'>) => Promise<ReturnTypeFrom<'updateDatastore'>>  = async params => {
  // undefined
    return this.client.updateDatastore(params as any).promise();
  }

  updatePipeline: (params: RawParamsFrom<'updatePipeline'>) => Promise<ReturnTypeFrom<'updatePipeline'>>  = async params => {
  // undefined
    return this.client.updatePipeline(params as any).promise();
  }
  
  static fromClient(client: AWSIoTAnalytics): IoTAnalytics {
    return new IoTAnalytics(client) as any;
  }
  
  static client(options?: AWSIoTAnalytics.Types.ClientConfiguration): IoTAnalytics {
    return new IoTAnalytics(new AWSIoTAnalytics(options)) as any;
  }
}  
