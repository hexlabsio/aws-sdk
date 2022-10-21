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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSFraudDetector> = AWSFraudDetector[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class FraudDetector {
  private constructor(private readonly client: AWSFraudDetector) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'frauddetector' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["describeModelVersions","getBatchImportJobs","getBatchPredictionJobs","getDetectors","getEntityTypes","getEventTypes","getExternalModels","getLabels","getModels","getOutcomes","getVariables","listEventPredictions"] as const;
  
  batchCreateVariable: (params: RawParamsFrom<'batchCreateVariable'>) => Promise<ReturnTypeFrom<'batchCreateVariable'>>  = async params => {
  // undefined
    return this.client.batchCreateVariable(params as any).promise();
  }

  batchGetVariable: (params: RawParamsFrom<'batchGetVariable'>) => Promise<ReturnTypeFrom<'batchGetVariable'>>  = async params => {
  // undefined
    return this.client.batchGetVariable(params as any).promise();
  }

  cancelBatchImportJob: (params: RawParamsFrom<'cancelBatchImportJob'>) => Promise<ReturnTypeFrom<'cancelBatchImportJob'>>  = async params => {
  // undefined
    return this.client.cancelBatchImportJob(params as any).promise();
  }

  cancelBatchPredictionJob: (params: RawParamsFrom<'cancelBatchPredictionJob'>) => Promise<ReturnTypeFrom<'cancelBatchPredictionJob'>>  = async params => {
  // undefined
    return this.client.cancelBatchPredictionJob(params as any).promise();
  }

  createBatchImportJob: (params: RawParamsFrom<'createBatchImportJob'>) => Promise<ReturnTypeFrom<'createBatchImportJob'>>  = async params => {
  // undefined
    return this.client.createBatchImportJob(params as any).promise();
  }

  createBatchPredictionJob: (params: RawParamsFrom<'createBatchPredictionJob'>) => Promise<ReturnTypeFrom<'createBatchPredictionJob'>>  = async params => {
  // undefined
    return this.client.createBatchPredictionJob(params as any).promise();
  }

  createDetectorVersion: (params: RawParamsFrom<'createDetectorVersion'>) => Promise<ReturnTypeFrom<'createDetectorVersion'>>  = async params => {
  // undefined
    return this.client.createDetectorVersion(params as any).promise();
  }

  createModel: (params: RawParamsFrom<'createModel'>) => Promise<ReturnTypeFrom<'createModel'>>  = async params => {
  // undefined
    return this.client.createModel(params as any).promise();
  }

  createModelVersion: (params: RawParamsFrom<'createModelVersion'>) => Promise<ReturnTypeFrom<'createModelVersion'>>  = async params => {
  // undefined
    return this.client.createModelVersion(params as any).promise();
  }

  createRule: (params: RawParamsFrom<'createRule'>) => Promise<ReturnTypeFrom<'createRule'>>  = async params => {
  // undefined
    return this.client.createRule(params as any).promise();
  }

  createVariable: (params: RawParamsFrom<'createVariable'>) => Promise<ReturnTypeFrom<'createVariable'>>  = async params => {
  // undefined
    return this.client.createVariable(params as any).promise();
  }

  deleteBatchImportJob: (params: RawParamsFrom<'deleteBatchImportJob'>) => Promise<ReturnTypeFrom<'deleteBatchImportJob'>>  = async params => {
  // undefined
    return this.client.deleteBatchImportJob(params as any).promise();
  }

  deleteBatchPredictionJob: (params: RawParamsFrom<'deleteBatchPredictionJob'>) => Promise<ReturnTypeFrom<'deleteBatchPredictionJob'>>  = async params => {
  // undefined
    return this.client.deleteBatchPredictionJob(params as any).promise();
  }

  deleteDetector: (params: RawParamsFrom<'deleteDetector'>) => Promise<ReturnTypeFrom<'deleteDetector'>>  = async params => {
  // undefined
    return this.client.deleteDetector(params as any).promise();
  }

  deleteDetectorVersion: (params: RawParamsFrom<'deleteDetectorVersion'>) => Promise<ReturnTypeFrom<'deleteDetectorVersion'>>  = async params => {
  // undefined
    return this.client.deleteDetectorVersion(params as any).promise();
  }

  deleteEntityType: (params: RawParamsFrom<'deleteEntityType'>) => Promise<ReturnTypeFrom<'deleteEntityType'>>  = async params => {
  // undefined
    return this.client.deleteEntityType(params as any).promise();
  }

  deleteEvent: (params: RawParamsFrom<'deleteEvent'>) => Promise<ReturnTypeFrom<'deleteEvent'>>  = async params => {
  // undefined
    return this.client.deleteEvent(params as any).promise();
  }

  deleteEventType: (params: RawParamsFrom<'deleteEventType'>) => Promise<ReturnTypeFrom<'deleteEventType'>>  = async params => {
  // undefined
    return this.client.deleteEventType(params as any).promise();
  }

  deleteEventsByEventType: (params: RawParamsFrom<'deleteEventsByEventType'>) => Promise<ReturnTypeFrom<'deleteEventsByEventType'>>  = async params => {
  // undefined
    return this.client.deleteEventsByEventType(params as any).promise();
  }

  deleteExternalModel: (params: RawParamsFrom<'deleteExternalModel'>) => Promise<ReturnTypeFrom<'deleteExternalModel'>>  = async params => {
  // undefined
    return this.client.deleteExternalModel(params as any).promise();
  }

  deleteLabel: (params: RawParamsFrom<'deleteLabel'>) => Promise<ReturnTypeFrom<'deleteLabel'>>  = async params => {
  // undefined
    return this.client.deleteLabel(params as any).promise();
  }

  deleteModel: (params: RawParamsFrom<'deleteModel'>) => Promise<ReturnTypeFrom<'deleteModel'>>  = async params => {
  // undefined
    return this.client.deleteModel(params as any).promise();
  }

  deleteModelVersion: (params: RawParamsFrom<'deleteModelVersion'>) => Promise<ReturnTypeFrom<'deleteModelVersion'>>  = async params => {
  // undefined
    return this.client.deleteModelVersion(params as any).promise();
  }

  deleteOutcome: (params: RawParamsFrom<'deleteOutcome'>) => Promise<ReturnTypeFrom<'deleteOutcome'>>  = async params => {
  // undefined
    return this.client.deleteOutcome(params as any).promise();
  }

  deleteRule: (params: RawParamsFrom<'deleteRule'>) => Promise<ReturnTypeFrom<'deleteRule'>>  = async params => {
  // undefined
    return this.client.deleteRule(params as any).promise();
  }

  deleteVariable: (params: RawParamsFrom<'deleteVariable'>) => Promise<ReturnTypeFrom<'deleteVariable'>>  = async params => {
  // undefined
    return this.client.deleteVariable(params as any).promise();
  }

  describeDetector: (params: RawParamsFrom<'describeDetector'>) => Promise<ReturnTypeFrom<'describeDetector'>>  = async params => {
  // undefined
    return this.client.describeDetector(params as any).promise();
  }

  describeModelVersions: (params: RawParamsFrom<'describeModelVersions'>) => Promise<ReturnTypeFrom<'describeModelVersions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeModelVersions(params as any).promise();
  }

  getBatchImportJobs: (params: RawParamsFrom<'getBatchImportJobs'>) => Promise<ReturnTypeFrom<'getBatchImportJobs'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBatchImportJobs(params as any).promise();
  }

  getBatchPredictionJobs: (params: RawParamsFrom<'getBatchPredictionJobs'>) => Promise<ReturnTypeFrom<'getBatchPredictionJobs'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getBatchPredictionJobs(params as any).promise();
  }

  getDeleteEventsByEventTypeStatus: (params: RawParamsFrom<'getDeleteEventsByEventTypeStatus'>) => Promise<ReturnTypeFrom<'getDeleteEventsByEventTypeStatus'>>  = async params => {
  // undefined
    return this.client.getDeleteEventsByEventTypeStatus(params as any).promise();
  }

  getDetectorVersion: (params: RawParamsFrom<'getDetectorVersion'>) => Promise<ReturnTypeFrom<'getDetectorVersion'>>  = async params => {
  // undefined
    return this.client.getDetectorVersion(params as any).promise();
  }

  getDetectors: (params: RawParamsFrom<'getDetectors'>) => Promise<ReturnTypeFrom<'getDetectors'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getDetectors(params as any).promise();
  }

  getEntityTypes: (params: RawParamsFrom<'getEntityTypes'>) => Promise<ReturnTypeFrom<'getEntityTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEntityTypes(params as any).promise();
  }

  getEvent: (params: RawParamsFrom<'getEvent'>) => Promise<ReturnTypeFrom<'getEvent'>>  = async params => {
  // undefined
    return this.client.getEvent(params as any).promise();
  }

  getEventPrediction: (params: RawParamsFrom<'getEventPrediction'>) => Promise<ReturnTypeFrom<'getEventPrediction'>>  = async params => {
  // undefined
    return this.client.getEventPrediction(params as any).promise();
  }

  getEventPredictionMetadata: (params: RawParamsFrom<'getEventPredictionMetadata'>) => Promise<ReturnTypeFrom<'getEventPredictionMetadata'>>  = async params => {
  // undefined
    return this.client.getEventPredictionMetadata(params as any).promise();
  }

  getEventTypes: (params: RawParamsFrom<'getEventTypes'>) => Promise<ReturnTypeFrom<'getEventTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getEventTypes(params as any).promise();
  }

  getExternalModels: (params: RawParamsFrom<'getExternalModels'>) => Promise<ReturnTypeFrom<'getExternalModels'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getExternalModels(params as any).promise();
  }

  getKMSEncryptionKey: (params: RawParamsFrom<'getKMSEncryptionKey'>) => Promise<ReturnTypeFrom<'getKMSEncryptionKey'>>  = async params => {
  // undefined
    return this.client.getKMSEncryptionKey(params as any).promise();
  }

  getLabels: (params: RawParamsFrom<'getLabels'>) => Promise<ReturnTypeFrom<'getLabels'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getLabels(params as any).promise();
  }

  getModelVersion: (params: RawParamsFrom<'getModelVersion'>) => Promise<ReturnTypeFrom<'getModelVersion'>>  = async params => {
  // undefined
    return this.client.getModelVersion(params as any).promise();
  }

  getModels: (params: RawParamsFrom<'getModels'>) => Promise<ReturnTypeFrom<'getModels'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getModels(params as any).promise();
  }

  getOutcomes: (params: RawParamsFrom<'getOutcomes'>) => Promise<ReturnTypeFrom<'getOutcomes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getOutcomes(params as any).promise();
  }

  getRules: (params: RawParamsFrom<'getRules'>) => Promise<ReturnTypeFrom<'getRules'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getRules(params as any).promise();
  }

  getVariables: (params: RawParamsFrom<'getVariables'>) => Promise<ReturnTypeFrom<'getVariables'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getVariables(params as any).promise();
  }

  listEventPredictions: (params: RawParamsFrom<'listEventPredictions'>) => Promise<ReturnTypeFrom<'listEventPredictions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listEventPredictions(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listTagsForResource(params as any).promise();
  }

  putDetector: (params: RawParamsFrom<'putDetector'>) => Promise<ReturnTypeFrom<'putDetector'>>  = async params => {
  // undefined
    return this.client.putDetector(params as any).promise();
  }

  putEntityType: (params: RawParamsFrom<'putEntityType'>) => Promise<ReturnTypeFrom<'putEntityType'>>  = async params => {
  // undefined
    return this.client.putEntityType(params as any).promise();
  }

  putEventType: (params: RawParamsFrom<'putEventType'>) => Promise<ReturnTypeFrom<'putEventType'>>  = async params => {
  // undefined
    return this.client.putEventType(params as any).promise();
  }

  putExternalModel: (params: RawParamsFrom<'putExternalModel'>) => Promise<ReturnTypeFrom<'putExternalModel'>>  = async params => {
  // undefined
    return this.client.putExternalModel(params as any).promise();
  }

  putKMSEncryptionKey: (params: RawParamsFrom<'putKMSEncryptionKey'>) => Promise<ReturnTypeFrom<'putKMSEncryptionKey'>>  = async params => {
  // undefined
    return this.client.putKMSEncryptionKey(params as any).promise();
  }

  putLabel: (params: RawParamsFrom<'putLabel'>) => Promise<ReturnTypeFrom<'putLabel'>>  = async params => {
  // undefined
    return this.client.putLabel(params as any).promise();
  }

  putOutcome: (params: RawParamsFrom<'putOutcome'>) => Promise<ReturnTypeFrom<'putOutcome'>>  = async params => {
  // undefined
    return this.client.putOutcome(params as any).promise();
  }

  sendEvent: (params: RawParamsFrom<'sendEvent'>) => Promise<ReturnTypeFrom<'sendEvent'>>  = async params => {
  // undefined
    return this.client.sendEvent(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDetectorVersion: (params: RawParamsFrom<'updateDetectorVersion'>) => Promise<ReturnTypeFrom<'updateDetectorVersion'>>  = async params => {
  // undefined
    return this.client.updateDetectorVersion(params as any).promise();
  }

  updateDetectorVersionMetadata: (params: RawParamsFrom<'updateDetectorVersionMetadata'>) => Promise<ReturnTypeFrom<'updateDetectorVersionMetadata'>>  = async params => {
  // undefined
    return this.client.updateDetectorVersionMetadata(params as any).promise();
  }

  updateDetectorVersionStatus: (params: RawParamsFrom<'updateDetectorVersionStatus'>) => Promise<ReturnTypeFrom<'updateDetectorVersionStatus'>>  = async params => {
  // undefined
    return this.client.updateDetectorVersionStatus(params as any).promise();
  }

  updateEventLabel: (params: RawParamsFrom<'updateEventLabel'>) => Promise<ReturnTypeFrom<'updateEventLabel'>>  = async params => {
  // undefined
    return this.client.updateEventLabel(params as any).promise();
  }

  updateModel: (params: RawParamsFrom<'updateModel'>) => Promise<ReturnTypeFrom<'updateModel'>>  = async params => {
  // undefined
    return this.client.updateModel(params as any).promise();
  }

  updateModelVersion: (params: RawParamsFrom<'updateModelVersion'>) => Promise<ReturnTypeFrom<'updateModelVersion'>>  = async params => {
  // undefined
    return this.client.updateModelVersion(params as any).promise();
  }

  updateModelVersionStatus: (params: RawParamsFrom<'updateModelVersionStatus'>) => Promise<ReturnTypeFrom<'updateModelVersionStatus'>>  = async params => {
  // undefined
    return this.client.updateModelVersionStatus(params as any).promise();
  }

  updateRuleMetadata: (params: RawParamsFrom<'updateRuleMetadata'>) => Promise<ReturnTypeFrom<'updateRuleMetadata'>>  = async params => {
  // undefined
    return this.client.updateRuleMetadata(params as any).promise();
  }

  updateRuleVersion: (params: RawParamsFrom<'updateRuleVersion'>) => Promise<ReturnTypeFrom<'updateRuleVersion'>>  = async params => {
  // undefined
    return this.client.updateRuleVersion(params as any).promise();
  }

  updateVariable: (params: RawParamsFrom<'updateVariable'>) => Promise<ReturnTypeFrom<'updateVariable'>>  = async params => {
  // undefined
    return this.client.updateVariable(params as any).promise();
  }
  
  static fromClient(client: AWSFraudDetector): FraudDetector {
    return new FraudDetector(client) as any;
  }
  
  static client(options?: AWSFraudDetector.Types.ClientConfiguration): FraudDetector {
    return new FraudDetector(new AWSFraudDetector(options)) as any;
  }
}  
