import { Request, LookoutEquipment as AWSLookoutEquipment } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLookoutEquipment> = AWSLookoutEquipment[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLookoutEquipment> = AWSLookoutEquipment[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLookoutEquipment[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLookoutEquipment, Extras> = AWSLookoutEquipment[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLookoutEquipment> = AWSLookoutEquipment[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LookoutEquipment {
  private constructor(private readonly client: AWSLookoutEquipment) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lookoutequipment' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listDataIngestionJobs","listDatasets","listInferenceSchedulers","listLabelGroups","listModels"] as const;
  
  createDataset: (params: RawParamsFrom<'createDataset'>) => Promise<ReturnTypeFrom<'createDataset'>>  = async params => {
  // undefined
    return this.client.createDataset(params as any).promise();
  }

  createInferenceScheduler: (params: RawParamsFrom<'createInferenceScheduler'>) => Promise<ReturnTypeFrom<'createInferenceScheduler'>>  = async params => {
  // undefined
    return this.client.createInferenceScheduler(params as any).promise();
  }

  createLabel: (params: RawParamsFrom<'createLabel'>) => Promise<ReturnTypeFrom<'createLabel'>>  = async params => {
  // undefined
    return this.client.createLabel(params as any).promise();
  }

  createLabelGroup: (params: RawParamsFrom<'createLabelGroup'>) => Promise<ReturnTypeFrom<'createLabelGroup'>>  = async params => {
  // undefined
    return this.client.createLabelGroup(params as any).promise();
  }

  createModel: (params: RawParamsFrom<'createModel'>) => Promise<ReturnTypeFrom<'createModel'>>  = async params => {
  // undefined
    return this.client.createModel(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  deleteInferenceScheduler: (params: RawParamsFrom<'deleteInferenceScheduler'>) => Promise<ReturnTypeFrom<'deleteInferenceScheduler'>>  = async params => {
  // undefined
    return this.client.deleteInferenceScheduler(params as any).promise();
  }

  deleteLabel: (params: RawParamsFrom<'deleteLabel'>) => Promise<ReturnTypeFrom<'deleteLabel'>>  = async params => {
  // undefined
    return this.client.deleteLabel(params as any).promise();
  }

  deleteLabelGroup: (params: RawParamsFrom<'deleteLabelGroup'>) => Promise<ReturnTypeFrom<'deleteLabelGroup'>>  = async params => {
  // undefined
    return this.client.deleteLabelGroup(params as any).promise();
  }

  deleteModel: (params: RawParamsFrom<'deleteModel'>) => Promise<ReturnTypeFrom<'deleteModel'>>  = async params => {
  // undefined
    return this.client.deleteModel(params as any).promise();
  }

  describeDataIngestionJob: (params: RawParamsFrom<'describeDataIngestionJob'>) => Promise<ReturnTypeFrom<'describeDataIngestionJob'>>  = async params => {
  // undefined
    return this.client.describeDataIngestionJob(params as any).promise();
  }

  describeDataset: (params: RawParamsFrom<'describeDataset'>) => Promise<ReturnTypeFrom<'describeDataset'>>  = async params => {
  // undefined
    return this.client.describeDataset(params as any).promise();
  }

  describeInferenceScheduler: (params: RawParamsFrom<'describeInferenceScheduler'>) => Promise<ReturnTypeFrom<'describeInferenceScheduler'>>  = async params => {
  // undefined
    return this.client.describeInferenceScheduler(params as any).promise();
  }

  describeLabel: (params: RawParamsFrom<'describeLabel'>) => Promise<ReturnTypeFrom<'describeLabel'>>  = async params => {
  // undefined
    return this.client.describeLabel(params as any).promise();
  }

  describeLabelGroup: (params: RawParamsFrom<'describeLabelGroup'>) => Promise<ReturnTypeFrom<'describeLabelGroup'>>  = async params => {
  // undefined
    return this.client.describeLabelGroup(params as any).promise();
  }

  describeModel: (params: RawParamsFrom<'describeModel'>) => Promise<ReturnTypeFrom<'describeModel'>>  = async params => {
  // undefined
    return this.client.describeModel(params as any).promise();
  }

  listDataIngestionJobs: (params: RawParamsFrom<'listDataIngestionJobs'>) => Promise<ReturnTypeFrom<'listDataIngestionJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDataIngestionJobs(params as any).promise();
  }

  listDatasets: (params: RawParamsFrom<'listDatasets'>) => Promise<ReturnTypeFrom<'listDatasets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDatasets(params as any).promise();
  }

  listInferenceEvents: (params: RawParamsFrom<'listInferenceEvents'>) => Promise<ReturnTypeFrom<'listInferenceEvents'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInferenceEvents(params as any).promise();
  }

  listInferenceExecutions: (params: RawParamsFrom<'listInferenceExecutions'>) => Promise<ReturnTypeFrom<'listInferenceExecutions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInferenceExecutions(params as any).promise();
  }

  listInferenceSchedulers: (params: RawParamsFrom<'listInferenceSchedulers'>) => Promise<ReturnTypeFrom<'listInferenceSchedulers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInferenceSchedulers(params as any).promise();
  }

  listLabelGroups: (params: RawParamsFrom<'listLabelGroups'>) => Promise<ReturnTypeFrom<'listLabelGroups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLabelGroups(params as any).promise();
  }

  listLabels: (params: RawParamsFrom<'listLabels'>) => Promise<ReturnTypeFrom<'listLabels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLabels(params as any).promise();
  }

  listModels: (params: RawParamsFrom<'listModels'>) => Promise<ReturnTypeFrom<'listModels'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listModels(params as any).promise();
  }

  listSensorStatistics: (params: RawParamsFrom<'listSensorStatistics'>) => Promise<ReturnTypeFrom<'listSensorStatistics'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSensorStatistics(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startDataIngestionJob: (params: RawParamsFrom<'startDataIngestionJob'>) => Promise<ReturnTypeFrom<'startDataIngestionJob'>>  = async params => {
  // undefined
    return this.client.startDataIngestionJob(params as any).promise();
  }

  startInferenceScheduler: (params: RawParamsFrom<'startInferenceScheduler'>) => Promise<ReturnTypeFrom<'startInferenceScheduler'>>  = async params => {
  // undefined
    return this.client.startInferenceScheduler(params as any).promise();
  }

  stopInferenceScheduler: (params: RawParamsFrom<'stopInferenceScheduler'>) => Promise<ReturnTypeFrom<'stopInferenceScheduler'>>  = async params => {
  // undefined
    return this.client.stopInferenceScheduler(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateInferenceScheduler: (params: RawParamsFrom<'updateInferenceScheduler'>) => Promise<ReturnTypeFrom<'updateInferenceScheduler'>>  = async params => {
  // undefined
    return this.client.updateInferenceScheduler(params as any).promise();
  }

  updateLabelGroup: (params: RawParamsFrom<'updateLabelGroup'>) => Promise<ReturnTypeFrom<'updateLabelGroup'>>  = async params => {
  // undefined
    return this.client.updateLabelGroup(params as any).promise();
  }
  
  static fromClient(client: AWSLookoutEquipment): LookoutEquipment {
    return new LookoutEquipment(client) as any;
  }
  
  static client(options?: AWSLookoutEquipment.Types.ClientConfiguration): LookoutEquipment {
    return new LookoutEquipment(new AWSLookoutEquipment(options)) as any;
  }
}  
