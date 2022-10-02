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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'lookoutmetrics';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listAlerts","listAnomalyDetectors","listMetricSets"];
    
  activateAnomalyDetector: FunctionTypeFrom<'activateAnomalyDetector'>;

  backTestAnomalyDetector: FunctionTypeFrom<'backTestAnomalyDetector'>;

  createAlert: FunctionTypeFrom<'createAlert'>;

  createAnomalyDetector: FunctionTypeFrom<'createAnomalyDetector'>;

  createMetricSet: FunctionTypeFrom<'createMetricSet'>;

  deactivateAnomalyDetector: FunctionTypeFrom<'deactivateAnomalyDetector'>;

  deleteAlert: FunctionTypeFrom<'deleteAlert'>;

  deleteAnomalyDetector: FunctionTypeFrom<'deleteAnomalyDetector'>;

  describeAlert: FunctionTypeFrom<'describeAlert'>;

  describeAnomalyDetectionExecutions: FunctionTypeFrom<'describeAnomalyDetectionExecutions'>;

  describeAnomalyDetector: FunctionTypeFrom<'describeAnomalyDetector'>;

  describeMetricSet: FunctionTypeFrom<'describeMetricSet'>;

  detectMetricSetConfig: FunctionTypeFrom<'detectMetricSetConfig'>;

  getAnomalyGroup: FunctionTypeFrom<'getAnomalyGroup'>;

  getDataQualityMetrics: FunctionTypeFrom<'getDataQualityMetrics'>;

  getFeedback: FunctionTypeFrom<'getFeedback'>;

  getSampleData: FunctionTypeFrom<'getSampleData'>;

  listAlerts: FunctionTypeFrom<'listAlerts'>;

  listAnomalyDetectors: FunctionTypeFrom<'listAnomalyDetectors'>;

  listAnomalyGroupRelatedMetrics: FunctionTypeFrom<'listAnomalyGroupRelatedMetrics'>;

  listAnomalyGroupSummaries: FunctionTypeFrom<'listAnomalyGroupSummaries'>;

  listAnomalyGroupTimeSeries: FunctionTypeFrom<'listAnomalyGroupTimeSeries'>;

  listMetricSets: FunctionTypeFrom<'listMetricSets'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putFeedback: FunctionTypeFrom<'putFeedback'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAlert: FunctionTypeFrom<'updateAlert'>;

  updateAnomalyDetector: FunctionTypeFrom<'updateAnomalyDetector'>;

  updateMetricSet: FunctionTypeFrom<'updateMetricSet'>
}
 
export class LookoutMetrics implements ClientType {
  private constructor(private readonly client: AWSLookoutMetrics) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lookoutmetrics';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listAlerts","listAnomalyDetectors","listMetricSets"] as const;
  
  async activateAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.activateAnomalyDetector(...args).promise()
  }

  async backTestAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.backTestAnomalyDetector(...args).promise()
  }

  async createAlert(...args: any): Promise<any> {
  // undefined
    return this.client.createAlert(...args).promise()
  }

  async createAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.createAnomalyDetector(...args).promise()
  }

  async createMetricSet(...args: any): Promise<any> {
  // undefined
    return this.client.createMetricSet(...args).promise()
  }

  async deactivateAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.deactivateAnomalyDetector(...args).promise()
  }

  async deleteAlert(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlert(...args).promise()
  }

  async deleteAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAnomalyDetector(...args).promise()
  }

  async describeAlert(...args: any): Promise<any> {
  // undefined
    return this.client.describeAlert(...args).promise()
  }

  async describeAnomalyDetectionExecutions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeAnomalyDetectionExecutions(...args).promise()
  }

  async describeAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.describeAnomalyDetector(...args).promise()
  }

  async describeMetricSet(...args: any): Promise<any> {
  // undefined
    return this.client.describeMetricSet(...args).promise()
  }

  async detectMetricSetConfig(...args: any): Promise<any> {
  // undefined
    return this.client.detectMetricSetConfig(...args).promise()
  }

  async getAnomalyGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getAnomalyGroup(...args).promise()
  }

  async getDataQualityMetrics(...args: any): Promise<any> {
  // undefined
    return this.client.getDataQualityMetrics(...args).promise()
  }

  async getFeedback(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getFeedback(...args).promise()
  }

  async getSampleData(...args: any): Promise<any> {
  // undefined
    return this.client.getSampleData(...args).promise()
  }

  async listAlerts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAlerts(...args).promise()
  }

  async listAnomalyDetectors(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnomalyDetectors(...args).promise()
  }

  async listAnomalyGroupRelatedMetrics(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnomalyGroupRelatedMetrics(...args).promise()
  }

  async listAnomalyGroupSummaries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnomalyGroupSummaries(...args).promise()
  }

  async listAnomalyGroupTimeSeries(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAnomalyGroupTimeSeries(...args).promise()
  }

  async listMetricSets(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMetricSets(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.putFeedback(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAlert(...args: any): Promise<any> {
  // undefined
    return this.client.updateAlert(...args).promise()
  }

  async updateAnomalyDetector(...args: any): Promise<any> {
  // undefined
    return this.client.updateAnomalyDetector(...args).promise()
  }

  async updateMetricSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateMetricSet(...args).promise()
  }
  
  static fromClient(client: AWSLookoutMetrics): ClientType {
    return new LookoutMetrics(client) as any;
  }
  
  static client(options?: AWSLookoutMetrics.Types.ClientConfiguration): ClientType {
    return new LookoutMetrics(new AWSLookoutMetrics(options)) as any;
  }
}  
