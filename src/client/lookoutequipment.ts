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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'lookoutequipment';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listDataIngestionJobs","listDatasets","listInferenceSchedulers","listLabelGroups","listModels"];
    
  createDataset: FunctionTypeFrom<'createDataset'>;

  createInferenceScheduler: FunctionTypeFrom<'createInferenceScheduler'>;

  createLabel: FunctionTypeFrom<'createLabel'>;

  createLabelGroup: FunctionTypeFrom<'createLabelGroup'>;

  createModel: FunctionTypeFrom<'createModel'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  deleteInferenceScheduler: FunctionTypeFrom<'deleteInferenceScheduler'>;

  deleteLabel: FunctionTypeFrom<'deleteLabel'>;

  deleteLabelGroup: FunctionTypeFrom<'deleteLabelGroup'>;

  deleteModel: FunctionTypeFrom<'deleteModel'>;

  describeDataIngestionJob: FunctionTypeFrom<'describeDataIngestionJob'>;

  describeDataset: FunctionTypeFrom<'describeDataset'>;

  describeInferenceScheduler: FunctionTypeFrom<'describeInferenceScheduler'>;

  describeLabel: FunctionTypeFrom<'describeLabel'>;

  describeLabelGroup: FunctionTypeFrom<'describeLabelGroup'>;

  describeModel: FunctionTypeFrom<'describeModel'>;

  listDataIngestionJobs: FunctionTypeFrom<'listDataIngestionJobs'>;

  listDatasets: FunctionTypeFrom<'listDatasets'>;

  listInferenceEvents: FunctionTypeFrom<'listInferenceEvents'>;

  listInferenceExecutions: FunctionTypeFrom<'listInferenceExecutions'>;

  listInferenceSchedulers: FunctionTypeFrom<'listInferenceSchedulers'>;

  listLabelGroups: FunctionTypeFrom<'listLabelGroups'>;

  listLabels: FunctionTypeFrom<'listLabels'>;

  listModels: FunctionTypeFrom<'listModels'>;

  listSensorStatistics: FunctionTypeFrom<'listSensorStatistics'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startDataIngestionJob: FunctionTypeFrom<'startDataIngestionJob'>;

  startInferenceScheduler: FunctionTypeFrom<'startInferenceScheduler'>;

  stopInferenceScheduler: FunctionTypeFrom<'stopInferenceScheduler'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateInferenceScheduler: FunctionTypeFrom<'updateInferenceScheduler'>;

  updateLabelGroup: FunctionTypeFrom<'updateLabelGroup'>
}
 
export class LookoutEquipment implements ClientType {
  private constructor(private readonly client: AWSLookoutEquipment) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lookoutequipment';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listDataIngestionJobs","listDatasets","listInferenceSchedulers","listLabelGroups","listModels"] as const;
  
  async createDataset(...args: any): Promise<any> {
  // undefined
    return this.client.createDataset(...args).promise()
  }

  async createInferenceScheduler(...args: any): Promise<any> {
  // undefined
    return this.client.createInferenceScheduler(...args).promise()
  }

  async createLabel(...args: any): Promise<any> {
  // undefined
    return this.client.createLabel(...args).promise()
  }

  async createLabelGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createLabelGroup(...args).promise()
  }

  async createModel(...args: any): Promise<any> {
  // undefined
    return this.client.createModel(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async deleteInferenceScheduler(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInferenceScheduler(...args).promise()
  }

  async deleteLabel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLabel(...args).promise()
  }

  async deleteLabelGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLabelGroup(...args).promise()
  }

  async deleteModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModel(...args).promise()
  }

  async describeDataIngestionJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataIngestionJob(...args).promise()
  }

  async describeDataset(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataset(...args).promise()
  }

  async describeInferenceScheduler(...args: any): Promise<any> {
  // undefined
    return this.client.describeInferenceScheduler(...args).promise()
  }

  async describeLabel(...args: any): Promise<any> {
  // undefined
    return this.client.describeLabel(...args).promise()
  }

  async describeLabelGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeLabelGroup(...args).promise()
  }

  async describeModel(...args: any): Promise<any> {
  // undefined
    return this.client.describeModel(...args).promise()
  }

  async listDataIngestionJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDataIngestionJobs(...args).promise()
  }

  async listDatasets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDatasets(...args).promise()
  }

  async listInferenceEvents(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInferenceEvents(...args).promise()
  }

  async listInferenceExecutions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInferenceExecutions(...args).promise()
  }

  async listInferenceSchedulers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInferenceSchedulers(...args).promise()
  }

  async listLabelGroups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLabelGroups(...args).promise()
  }

  async listLabels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLabels(...args).promise()
  }

  async listModels(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listModels(...args).promise()
  }

  async listSensorStatistics(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listSensorStatistics(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startDataIngestionJob(...args: any): Promise<any> {
  // undefined
    return this.client.startDataIngestionJob(...args).promise()
  }

  async startInferenceScheduler(...args: any): Promise<any> {
  // undefined
    return this.client.startInferenceScheduler(...args).promise()
  }

  async stopInferenceScheduler(...args: any): Promise<any> {
  // undefined
    return this.client.stopInferenceScheduler(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateInferenceScheduler(...args: any): Promise<any> {
  // undefined
    return this.client.updateInferenceScheduler(...args).promise()
  }

  async updateLabelGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateLabelGroup(...args).promise()
  }
  
  static fromClient(client: AWSLookoutEquipment): ClientType {
    return new LookoutEquipment(client) as any;
  }
  
  static client(options?: AWSLookoutEquipment.Types.ClientConfiguration): ClientType {
    return new LookoutEquipment(new AWSLookoutEquipment(options)) as any;
  }
}  
