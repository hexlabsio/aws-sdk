import { Request, MachineLearning as AWSMachineLearning } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMachineLearning> = AWSMachineLearning[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMachineLearning> = AWSMachineLearning[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMachineLearning[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMachineLearning, Extras> = AWSMachineLearning[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'machinelearning';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["describeBatchPredictions","describeDataSources","describeEvaluations","describeMLModels"];
    
  addTags: FunctionTypeFrom<'addTags'>;

  createBatchPrediction: FunctionTypeFrom<'createBatchPrediction'>;

  createDataSourceFromRDS: FunctionTypeFrom<'createDataSourceFromRDS'>;

  createDataSourceFromRedshift: FunctionTypeFrom<'createDataSourceFromRedshift'>;

  createDataSourceFromS3: FunctionTypeFrom<'createDataSourceFromS3'>;

  createEvaluation: FunctionTypeFrom<'createEvaluation'>;

  createMLModel: FunctionTypeFrom<'createMLModel'>;

  createRealtimeEndpoint: FunctionTypeFrom<'createRealtimeEndpoint'>;

  deleteBatchPrediction: FunctionTypeFrom<'deleteBatchPrediction'>;

  deleteDataSource: FunctionTypeFrom<'deleteDataSource'>;

  deleteEvaluation: FunctionTypeFrom<'deleteEvaluation'>;

  deleteMLModel: FunctionTypeFrom<'deleteMLModel'>;

  deleteRealtimeEndpoint: FunctionTypeFrom<'deleteRealtimeEndpoint'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  describeBatchPredictions(params: { [K in keyof Omit<ParamsFrom<'describeBatchPredictions', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeBatchPredictions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeBatchPredictions'>]-?: ReturnTypeFrom<'describeBatchPredictions'>[K]}['Results'] }>
  describeBatchPredictions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeBatchPredictions'>]-?: ReturnTypeFrom<'describeBatchPredictions'>[K]}['Results'] }>;

  describeDataSources(params: { [K in keyof Omit<ParamsFrom<'describeDataSources', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeDataSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDataSources'>]-?: ReturnTypeFrom<'describeDataSources'>[K]}['Results'] }>
  describeDataSources(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeDataSources'>]-?: ReturnTypeFrom<'describeDataSources'>[K]}['Results'] }>;

  describeEvaluations(params: { [K in keyof Omit<ParamsFrom<'describeEvaluations', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeEvaluations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvaluations'>]-?: ReturnTypeFrom<'describeEvaluations'>[K]}['Results'] }>
  describeEvaluations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvaluations'>]-?: ReturnTypeFrom<'describeEvaluations'>[K]}['Results'] }>;

  describeMLModels(params: { [K in keyof Omit<ParamsFrom<'describeMLModels', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'describeMLModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMLModels'>]-?: ReturnTypeFrom<'describeMLModels'>[K]}['Results'] }>
  describeMLModels(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMLModels'>]-?: ReturnTypeFrom<'describeMLModels'>[K]}['Results'] }>;

  describeTags: FunctionTypeFrom<'describeTags'>;

  getBatchPrediction: FunctionTypeFrom<'getBatchPrediction'>;

  getDataSource: FunctionTypeFrom<'getDataSource'>;

  getEvaluation: FunctionTypeFrom<'getEvaluation'>;

  getMLModel: FunctionTypeFrom<'getMLModel'>;

  predict: FunctionTypeFrom<'predict'>;

  updateBatchPrediction: FunctionTypeFrom<'updateBatchPrediction'>;

  updateDataSource: FunctionTypeFrom<'updateDataSource'>;

  updateEvaluation: FunctionTypeFrom<'updateEvaluation'>;

  updateMLModel: FunctionTypeFrom<'updateMLModel'>
}
 
export class MachineLearning implements ClientType {
  private constructor(private readonly client: AWSMachineLearning) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'machinelearning';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["describeBatchPredictions","describeDataSources","describeEvaluations","describeMLModels"] as const;
  
  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async createBatchPrediction(...args: any): Promise<any> {
  // undefined
    return this.client.createBatchPrediction(...args).promise()
  }

  async createDataSourceFromRDS(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSourceFromRDS(...args).promise()
  }

  async createDataSourceFromRedshift(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSourceFromRedshift(...args).promise()
  }

  async createDataSourceFromS3(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSourceFromS3(...args).promise()
  }

  async createEvaluation(...args: any): Promise<any> {
  // undefined
    return this.client.createEvaluation(...args).promise()
  }

  async createMLModel(...args: any): Promise<any> {
  // undefined
    return this.client.createMLModel(...args).promise()
  }

  async createRealtimeEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createRealtimeEndpoint(...args).promise()
  }

  async deleteBatchPrediction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBatchPrediction(...args).promise()
  }

  async deleteDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataSource(...args).promise()
  }

  async deleteEvaluation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEvaluation(...args).promise()
  }

  async deleteMLModel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMLModel(...args).promise()
  }

  async deleteRealtimeEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRealtimeEndpoint(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async describeBatchPredictions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeBatchPredictions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDataSources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeDataSources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvaluations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeEvaluations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMLModels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeMLModels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTags(...args: any): Promise<any> {
  // undefined
    return this.client.describeTags(...args).promise()
  }

  async getBatchPrediction(...args: any): Promise<any> {
  // undefined
    return this.client.getBatchPrediction(...args).promise()
  }

  async getDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.getDataSource(...args).promise()
  }

  async getEvaluation(...args: any): Promise<any> {
  // undefined
    return this.client.getEvaluation(...args).promise()
  }

  async getMLModel(...args: any): Promise<any> {
  // undefined
    return this.client.getMLModel(...args).promise()
  }

  async predict(...args: any): Promise<any> {
  // undefined
    return this.client.predict(...args).promise()
  }

  async updateBatchPrediction(...args: any): Promise<any> {
  // undefined
    return this.client.updateBatchPrediction(...args).promise()
  }

  async updateDataSource(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataSource(...args).promise()
  }

  async updateEvaluation(...args: any): Promise<any> {
  // undefined
    return this.client.updateEvaluation(...args).promise()
  }

  async updateMLModel(...args: any): Promise<any> {
  // undefined
    return this.client.updateMLModel(...args).promise()
  }
  
  static fromClient(client: AWSMachineLearning): ClientType {
    return new MachineLearning(client) as any;
  }
  
  static client(options?: AWSMachineLearning.Types.ClientConfiguration): ClientType {
    return new MachineLearning(new AWSMachineLearning(options)) as any;
  }
}  
