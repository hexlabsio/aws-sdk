import { Request, FraudDetector as AWSFraudDetector } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSFraudDetector> = AWSFraudDetector[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSFraudDetector> = AWSFraudDetector[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSFraudDetector[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSFraudDetector, Extras> = AWSFraudDetector[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'frauddetector';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["describeModelVersions","getBatchImportJobs","getBatchPredictionJobs","getDetectors","getEntityTypes","getEventTypes","getExternalModels","getLabels","getModels","getOutcomes","getVariables","listEventPredictions"];
    
  batchCreateVariable: FunctionTypeFrom<'batchCreateVariable'>;

  batchGetVariable: FunctionTypeFrom<'batchGetVariable'>;

  cancelBatchImportJob: FunctionTypeFrom<'cancelBatchImportJob'>;

  cancelBatchPredictionJob: FunctionTypeFrom<'cancelBatchPredictionJob'>;

  createBatchImportJob: FunctionTypeFrom<'createBatchImportJob'>;

  createBatchPredictionJob: FunctionTypeFrom<'createBatchPredictionJob'>;

  createDetectorVersion: FunctionTypeFrom<'createDetectorVersion'>;

  createModel: FunctionTypeFrom<'createModel'>;

  createModelVersion: FunctionTypeFrom<'createModelVersion'>;

  createRule: FunctionTypeFrom<'createRule'>;

  createVariable: FunctionTypeFrom<'createVariable'>;

  deleteBatchImportJob: FunctionTypeFrom<'deleteBatchImportJob'>;

  deleteBatchPredictionJob: FunctionTypeFrom<'deleteBatchPredictionJob'>;

  deleteDetector: FunctionTypeFrom<'deleteDetector'>;

  deleteDetectorVersion: FunctionTypeFrom<'deleteDetectorVersion'>;

  deleteEntityType: FunctionTypeFrom<'deleteEntityType'>;

  deleteEvent: FunctionTypeFrom<'deleteEvent'>;

  deleteEventType: FunctionTypeFrom<'deleteEventType'>;

  deleteEventsByEventType: FunctionTypeFrom<'deleteEventsByEventType'>;

  deleteExternalModel: FunctionTypeFrom<'deleteExternalModel'>;

  deleteLabel: FunctionTypeFrom<'deleteLabel'>;

  deleteModel: FunctionTypeFrom<'deleteModel'>;

  deleteModelVersion: FunctionTypeFrom<'deleteModelVersion'>;

  deleteOutcome: FunctionTypeFrom<'deleteOutcome'>;

  deleteRule: FunctionTypeFrom<'deleteRule'>;

  deleteVariable: FunctionTypeFrom<'deleteVariable'>;

  describeDetector: FunctionTypeFrom<'describeDetector'>;

  describeModelVersions: FunctionTypeFrom<'describeModelVersions'>;

  getBatchImportJobs: FunctionTypeFrom<'getBatchImportJobs'>;

  getBatchPredictionJobs: FunctionTypeFrom<'getBatchPredictionJobs'>;

  getDeleteEventsByEventTypeStatus: FunctionTypeFrom<'getDeleteEventsByEventTypeStatus'>;

  getDetectorVersion: FunctionTypeFrom<'getDetectorVersion'>;

  getDetectors: FunctionTypeFrom<'getDetectors'>;

  getEntityTypes: FunctionTypeFrom<'getEntityTypes'>;

  getEvent: FunctionTypeFrom<'getEvent'>;

  getEventPrediction: FunctionTypeFrom<'getEventPrediction'>;

  getEventPredictionMetadata: FunctionTypeFrom<'getEventPredictionMetadata'>;

  getEventTypes: FunctionTypeFrom<'getEventTypes'>;

  getExternalModels: FunctionTypeFrom<'getExternalModels'>;

  getKMSEncryptionKey: FunctionTypeFrom<'getKMSEncryptionKey'>;

  getLabels: FunctionTypeFrom<'getLabels'>;

  getModelVersion: FunctionTypeFrom<'getModelVersion'>;

  getModels: FunctionTypeFrom<'getModels'>;

  getOutcomes: FunctionTypeFrom<'getOutcomes'>;

  getRules: FunctionTypeFrom<'getRules'>;

  getVariables: FunctionTypeFrom<'getVariables'>;

  listEventPredictions: FunctionTypeFrom<'listEventPredictions'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putDetector: FunctionTypeFrom<'putDetector'>;

  putEntityType: FunctionTypeFrom<'putEntityType'>;

  putEventType: FunctionTypeFrom<'putEventType'>;

  putExternalModel: FunctionTypeFrom<'putExternalModel'>;

  putKMSEncryptionKey: FunctionTypeFrom<'putKMSEncryptionKey'>;

  putLabel: FunctionTypeFrom<'putLabel'>;

  putOutcome: FunctionTypeFrom<'putOutcome'>;

  sendEvent: FunctionTypeFrom<'sendEvent'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDetectorVersion: FunctionTypeFrom<'updateDetectorVersion'>;

  updateDetectorVersionMetadata: FunctionTypeFrom<'updateDetectorVersionMetadata'>;

  updateDetectorVersionStatus: FunctionTypeFrom<'updateDetectorVersionStatus'>;

  updateEventLabel: FunctionTypeFrom<'updateEventLabel'>;

  updateModel: FunctionTypeFrom<'updateModel'>;

  updateModelVersion: FunctionTypeFrom<'updateModelVersion'>;

  updateModelVersionStatus: FunctionTypeFrom<'updateModelVersionStatus'>;

  updateRuleMetadata: FunctionTypeFrom<'updateRuleMetadata'>;

  updateRuleVersion: FunctionTypeFrom<'updateRuleVersion'>;

  updateVariable: FunctionTypeFrom<'updateVariable'>
}
 
export class FraudDetector implements ClientType {
  private constructor(private readonly client: AWSFraudDetector) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'frauddetector';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["describeModelVersions","getBatchImportJobs","getBatchPredictionJobs","getDetectors","getEntityTypes","getEventTypes","getExternalModels","getLabels","getModels","getOutcomes","getVariables","listEventPredictions"] as const;
  
  async batchCreateVariable(...args: any): Promise<any> {
  // undefined
    return this.client.batchCreateVariable(...args).promise()
  }

  async batchGetVariable(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetVariable(...args).promise()
  }

  async cancelBatchImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelBatchImportJob(...args).promise()
  }

  async cancelBatchPredictionJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelBatchPredictionJob(...args).promise()
  }

  async createBatchImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createBatchImportJob(...args).promise()
  }

  async createBatchPredictionJob(...args: any): Promise<any> {
  // undefined
    return this.client.createBatchPredictionJob(...args).promise()
  }

  async createDetectorVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createDetectorVersion(...args).promise()
  }

  async createModel(...args: any): Promise<any> {
  // undefined
    return this.client.createModel(...args).promise()
  }

  async createModelVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createModelVersion(...args).promise()
  }

  async createRule(...args: any): Promise<any> {
  // undefined
    return this.client.createRule(...args).promise()
  }

  async createVariable(...args: any): Promise<any> {
  // undefined
    return this.client.createVariable(...args).promise()
  }

  async deleteBatchImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBatchImportJob(...args).promise()
  }

  async deleteBatchPredictionJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBatchPredictionJob(...args).promise()
  }

  async deleteDetector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDetector(...args).promise()
  }

  async deleteDetectorVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDetectorVersion(...args).promise()
  }

  async deleteEntityType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEntityType(...args).promise()
  }

  async deleteEvent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEvent(...args).promise()
  }

  async deleteEventType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventType(...args).promise()
  }

  async deleteEventsByEventType(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventsByEventType(...args).promise()
  }

  async deleteExternalModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExternalModel(...args).promise()
  }

  async deleteLabel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLabel(...args).promise()
  }

  async deleteModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModel(...args).promise()
  }

  async deleteModelVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteModelVersion(...args).promise()
  }

  async deleteOutcome(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOutcome(...args).promise()
  }

  async deleteRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRule(...args).promise()
  }

  async deleteVariable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVariable(...args).promise()
  }

  async describeDetector(...args: any): Promise<any> {
  // undefined
    return this.client.describeDetector(...args).promise()
  }

  async describeModelVersions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeModelVersions(...args).promise()
  }

  async getBatchImportJobs(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBatchImportJobs(...args).promise()
  }

  async getBatchPredictionJobs(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBatchPredictionJobs(...args).promise()
  }

  async getDeleteEventsByEventTypeStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getDeleteEventsByEventTypeStatus(...args).promise()
  }

  async getDetectorVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getDetectorVersion(...args).promise()
  }

  async getDetectors(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getDetectors(...args).promise()
  }

  async getEntityTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEntityTypes(...args).promise()
  }

  async getEvent(...args: any): Promise<any> {
  // undefined
    return this.client.getEvent(...args).promise()
  }

  async getEventPrediction(...args: any): Promise<any> {
  // undefined
    return this.client.getEventPrediction(...args).promise()
  }

  async getEventPredictionMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getEventPredictionMetadata(...args).promise()
  }

  async getEventTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEventTypes(...args).promise()
  }

  async getExternalModels(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getExternalModels(...args).promise()
  }

  async getKMSEncryptionKey(...args: any): Promise<any> {
  // undefined
    return this.client.getKMSEncryptionKey(...args).promise()
  }

  async getLabels(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getLabels(...args).promise()
  }

  async getModelVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getModelVersion(...args).promise()
  }

  async getModels(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getModels(...args).promise()
  }

  async getOutcomes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getOutcomes(...args).promise()
  }

  async getRules(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getRules(...args).promise()
  }

  async getVariables(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getVariables(...args).promise()
  }

  async listEventPredictions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listEventPredictions(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTagsForResource(...args).promise()
  }

  async putDetector(...args: any): Promise<any> {
  // undefined
    return this.client.putDetector(...args).promise()
  }

  async putEntityType(...args: any): Promise<any> {
  // undefined
    return this.client.putEntityType(...args).promise()
  }

  async putEventType(...args: any): Promise<any> {
  // undefined
    return this.client.putEventType(...args).promise()
  }

  async putExternalModel(...args: any): Promise<any> {
  // undefined
    return this.client.putExternalModel(...args).promise()
  }

  async putKMSEncryptionKey(...args: any): Promise<any> {
  // undefined
    return this.client.putKMSEncryptionKey(...args).promise()
  }

  async putLabel(...args: any): Promise<any> {
  // undefined
    return this.client.putLabel(...args).promise()
  }

  async putOutcome(...args: any): Promise<any> {
  // undefined
    return this.client.putOutcome(...args).promise()
  }

  async sendEvent(...args: any): Promise<any> {
  // undefined
    return this.client.sendEvent(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDetectorVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateDetectorVersion(...args).promise()
  }

  async updateDetectorVersionMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateDetectorVersionMetadata(...args).promise()
  }

  async updateDetectorVersionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateDetectorVersionStatus(...args).promise()
  }

  async updateEventLabel(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventLabel(...args).promise()
  }

  async updateModel(...args: any): Promise<any> {
  // undefined
    return this.client.updateModel(...args).promise()
  }

  async updateModelVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateModelVersion(...args).promise()
  }

  async updateModelVersionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateModelVersionStatus(...args).promise()
  }

  async updateRuleMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateRuleMetadata(...args).promise()
  }

  async updateRuleVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateRuleVersion(...args).promise()
  }

  async updateVariable(...args: any): Promise<any> {
  // undefined
    return this.client.updateVariable(...args).promise()
  }
  
  static fromClient(client: AWSFraudDetector): ClientType {
    return new FraudDetector(client) as any;
  }
  
  static client(options?: AWSFraudDetector.Types.ClientConfiguration): ClientType {
    return new FraudDetector(new AWSFraudDetector(options)) as any;
  }
}  
