import { Request, LookoutMetrics as AWSLookoutMetrics } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLookoutMetrics> = AWSLookoutMetrics[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLookoutMetrics> = AWSLookoutMetrics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLookoutMetrics[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLookoutMetrics, Extras> = AWSLookoutMetrics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLookoutMetrics> = AWSLookoutMetrics[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LookoutMetrics {
  private constructor(private readonly client: AWSLookoutMetrics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lookoutmetrics' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listAlerts","listAnomalyDetectors","listMetricSets"] as const;
  
  activateAnomalyDetector: (params: RawParamsFrom<'activateAnomalyDetector'>) => Promise<ReturnTypeFrom<'activateAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.activateAnomalyDetector(params as any).promise();
  }

  backTestAnomalyDetector: (params: RawParamsFrom<'backTestAnomalyDetector'>) => Promise<ReturnTypeFrom<'backTestAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.backTestAnomalyDetector(params as any).promise();
  }

  createAlert: (params: RawParamsFrom<'createAlert'>) => Promise<ReturnTypeFrom<'createAlert'>>  = async params => {
  // undefined
    return this.client.createAlert(params as any).promise();
  }

  createAnomalyDetector: (params: RawParamsFrom<'createAnomalyDetector'>) => Promise<ReturnTypeFrom<'createAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.createAnomalyDetector(params as any).promise();
  }

  createMetricSet: (params: RawParamsFrom<'createMetricSet'>) => Promise<ReturnTypeFrom<'createMetricSet'>>  = async params => {
  // undefined
    return this.client.createMetricSet(params as any).promise();
  }

  deactivateAnomalyDetector: (params: RawParamsFrom<'deactivateAnomalyDetector'>) => Promise<ReturnTypeFrom<'deactivateAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.deactivateAnomalyDetector(params as any).promise();
  }

  deleteAlert: (params: RawParamsFrom<'deleteAlert'>) => Promise<ReturnTypeFrom<'deleteAlert'>>  = async params => {
  // undefined
    return this.client.deleteAlert(params as any).promise();
  }

  deleteAnomalyDetector: (params: RawParamsFrom<'deleteAnomalyDetector'>) => Promise<ReturnTypeFrom<'deleteAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.deleteAnomalyDetector(params as any).promise();
  }

  describeAlert: (params: RawParamsFrom<'describeAlert'>) => Promise<ReturnTypeFrom<'describeAlert'>>  = async params => {
  // undefined
    return this.client.describeAlert(params as any).promise();
  }

  describeAnomalyDetectionExecutions: (params: RawParamsFrom<'describeAnomalyDetectionExecutions'>) => Promise<ReturnTypeFrom<'describeAnomalyDetectionExecutions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeAnomalyDetectionExecutions(params as any).promise();
  }

  describeAnomalyDetector: (params: RawParamsFrom<'describeAnomalyDetector'>) => Promise<ReturnTypeFrom<'describeAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.describeAnomalyDetector(params as any).promise();
  }

  describeMetricSet: (params: RawParamsFrom<'describeMetricSet'>) => Promise<ReturnTypeFrom<'describeMetricSet'>>  = async params => {
  // undefined
    return this.client.describeMetricSet(params as any).promise();
  }

  detectMetricSetConfig: (params: RawParamsFrom<'detectMetricSetConfig'>) => Promise<ReturnTypeFrom<'detectMetricSetConfig'>>  = async params => {
  // undefined
    return this.client.detectMetricSetConfig(params as any).promise();
  }

  getAnomalyGroup: (params: RawParamsFrom<'getAnomalyGroup'>) => Promise<ReturnTypeFrom<'getAnomalyGroup'>>  = async params => {
  // undefined
    return this.client.getAnomalyGroup(params as any).promise();
  }

  getDataQualityMetrics: (params: RawParamsFrom<'getDataQualityMetrics'>) => Promise<ReturnTypeFrom<'getDataQualityMetrics'>>  = async params => {
  // undefined
    return this.client.getDataQualityMetrics(params as any).promise();
  }

  getFeedback: (params: RawParamsFrom<'getFeedback'>) => Promise<ReturnTypeFrom<'getFeedback'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getFeedback(params as any).promise();
  }

  getSampleData: (params: RawParamsFrom<'getSampleData'>) => Promise<ReturnTypeFrom<'getSampleData'>>  = async params => {
  // undefined
    return this.client.getSampleData(params as any).promise();
  }

  listAlerts: (params: RawParamsFrom<'listAlerts'>) => Promise<ReturnTypeFrom<'listAlerts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAlerts(params as any).promise();
  }

  listAnomalyDetectors: (params: RawParamsFrom<'listAnomalyDetectors'>) => Promise<ReturnTypeFrom<'listAnomalyDetectors'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnomalyDetectors(params as any).promise();
  }

  listAnomalyGroupRelatedMetrics: (params: RawParamsFrom<'listAnomalyGroupRelatedMetrics'>) => Promise<ReturnTypeFrom<'listAnomalyGroupRelatedMetrics'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnomalyGroupRelatedMetrics(params as any).promise();
  }

  listAnomalyGroupSummaries: (params: RawParamsFrom<'listAnomalyGroupSummaries'>) => Promise<ReturnTypeFrom<'listAnomalyGroupSummaries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnomalyGroupSummaries(params as any).promise();
  }

  listAnomalyGroupTimeSeries: (params: RawParamsFrom<'listAnomalyGroupTimeSeries'>) => Promise<ReturnTypeFrom<'listAnomalyGroupTimeSeries'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnomalyGroupTimeSeries(params as any).promise();
  }

  listMetricSets: (params: RawParamsFrom<'listMetricSets'>) => Promise<ReturnTypeFrom<'listMetricSets'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMetricSets(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putFeedback: (params: RawParamsFrom<'putFeedback'>) => Promise<ReturnTypeFrom<'putFeedback'>>  = async params => {
  // undefined
    return this.client.putFeedback(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAlert: (params: RawParamsFrom<'updateAlert'>) => Promise<ReturnTypeFrom<'updateAlert'>>  = async params => {
  // undefined
    return this.client.updateAlert(params as any).promise();
  }

  updateAnomalyDetector: (params: RawParamsFrom<'updateAnomalyDetector'>) => Promise<ReturnTypeFrom<'updateAnomalyDetector'>>  = async params => {
  // undefined
    return this.client.updateAnomalyDetector(params as any).promise();
  }

  updateMetricSet: (params: RawParamsFrom<'updateMetricSet'>) => Promise<ReturnTypeFrom<'updateMetricSet'>>  = async params => {
  // undefined
    return this.client.updateMetricSet(params as any).promise();
  }
  
  static fromClient(client: AWSLookoutMetrics): LookoutMetrics {
    return new LookoutMetrics(client) as any;
  }
  
  static client(options?: AWSLookoutMetrics.Types.ClientConfiguration): LookoutMetrics {
    return new LookoutMetrics(new AWSLookoutMetrics(options)) as any;
  }
}  
