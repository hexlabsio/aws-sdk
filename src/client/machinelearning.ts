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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMachineLearning> = AWSMachineLearning[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MachineLearning {
  private constructor(private readonly client: AWSMachineLearning) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'machinelearning' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["describeBatchPredictions","describeDataSources","describeEvaluations","describeMLModels"] as const;
  
  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  createBatchPrediction: (params: RawParamsFrom<'createBatchPrediction'>) => Promise<ReturnTypeFrom<'createBatchPrediction'>>  = async params => {
  // undefined
    return this.client.createBatchPrediction(params as any).promise();
  }

  createDataSourceFromRDS: (params: RawParamsFrom<'createDataSourceFromRDS'>) => Promise<ReturnTypeFrom<'createDataSourceFromRDS'>>  = async params => {
  // undefined
    return this.client.createDataSourceFromRDS(params as any).promise();
  }

  createDataSourceFromRedshift: (params: RawParamsFrom<'createDataSourceFromRedshift'>) => Promise<ReturnTypeFrom<'createDataSourceFromRedshift'>>  = async params => {
  // undefined
    return this.client.createDataSourceFromRedshift(params as any).promise();
  }

  createDataSourceFromS3: (params: RawParamsFrom<'createDataSourceFromS3'>) => Promise<ReturnTypeFrom<'createDataSourceFromS3'>>  = async params => {
  // undefined
    return this.client.createDataSourceFromS3(params as any).promise();
  }

  createEvaluation: (params: RawParamsFrom<'createEvaluation'>) => Promise<ReturnTypeFrom<'createEvaluation'>>  = async params => {
  // undefined
    return this.client.createEvaluation(params as any).promise();
  }

  createMLModel: (params: RawParamsFrom<'createMLModel'>) => Promise<ReturnTypeFrom<'createMLModel'>>  = async params => {
  // undefined
    return this.client.createMLModel(params as any).promise();
  }

  createRealtimeEndpoint: (params: RawParamsFrom<'createRealtimeEndpoint'>) => Promise<ReturnTypeFrom<'createRealtimeEndpoint'>>  = async params => {
  // undefined
    return this.client.createRealtimeEndpoint(params as any).promise();
  }

  deleteBatchPrediction: (params: RawParamsFrom<'deleteBatchPrediction'>) => Promise<ReturnTypeFrom<'deleteBatchPrediction'>>  = async params => {
  // undefined
    return this.client.deleteBatchPrediction(params as any).promise();
  }

  deleteDataSource: (params: RawParamsFrom<'deleteDataSource'>) => Promise<ReturnTypeFrom<'deleteDataSource'>>  = async params => {
  // undefined
    return this.client.deleteDataSource(params as any).promise();
  }

  deleteEvaluation: (params: RawParamsFrom<'deleteEvaluation'>) => Promise<ReturnTypeFrom<'deleteEvaluation'>>  = async params => {
  // undefined
    return this.client.deleteEvaluation(params as any).promise();
  }

  deleteMLModel: (params: RawParamsFrom<'deleteMLModel'>) => Promise<ReturnTypeFrom<'deleteMLModel'>>  = async params => {
  // undefined
    return this.client.deleteMLModel(params as any).promise();
  }

  deleteRealtimeEndpoint: (params: RawParamsFrom<'deleteRealtimeEndpoint'>) => Promise<ReturnTypeFrom<'deleteRealtimeEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteRealtimeEndpoint(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  async describeBatchPredictions(params: { [K in keyof ParamsFrom<'describeBatchPredictions', { next?: string, limit?: number }>]: ParamsFrom<'describeBatchPredictions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeBatchPredictions'>]-?: ReturnTypeFrom<'describeBatchPredictions'>[K]}['Results'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeBatchPredictions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Results ?? []) ? (result.Results ?? []) : [result.Results]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeDataSources(params: { [K in keyof ParamsFrom<'describeDataSources', { next?: string, limit?: number }>]: ParamsFrom<'describeDataSources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDataSources'>]-?: ReturnTypeFrom<'describeDataSources'>[K]}['Results'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeDataSources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Results ?? []) ? (result.Results ?? []) : [result.Results]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeEvaluations(params: { [K in keyof ParamsFrom<'describeEvaluations', { next?: string, limit?: number }>]: ParamsFrom<'describeEvaluations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEvaluations'>]-?: ReturnTypeFrom<'describeEvaluations'>[K]}['Results'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeEvaluations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Results ?? []) ? (result.Results ?? []) : [result.Results]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeMLModels(params: { [K in keyof ParamsFrom<'describeMLModels', { next?: string, limit?: number }>]: ParamsFrom<'describeMLModels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMLModels'>]-?: ReturnTypeFrom<'describeMLModels'>[K]}['Results'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeMLModels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Results ?? []) ? (result.Results ?? []) : [result.Results]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeTags: (params: RawParamsFrom<'describeTags'>) => Promise<ReturnTypeFrom<'describeTags'>>  = async params => {
  // undefined
    return this.client.describeTags(params as any).promise();
  }

  getBatchPrediction: (params: RawParamsFrom<'getBatchPrediction'>) => Promise<ReturnTypeFrom<'getBatchPrediction'>>  = async params => {
  // undefined
    return this.client.getBatchPrediction(params as any).promise();
  }

  getDataSource: (params: RawParamsFrom<'getDataSource'>) => Promise<ReturnTypeFrom<'getDataSource'>>  = async params => {
  // undefined
    return this.client.getDataSource(params as any).promise();
  }

  getEvaluation: (params: RawParamsFrom<'getEvaluation'>) => Promise<ReturnTypeFrom<'getEvaluation'>>  = async params => {
  // undefined
    return this.client.getEvaluation(params as any).promise();
  }

  getMLModel: (params: RawParamsFrom<'getMLModel'>) => Promise<ReturnTypeFrom<'getMLModel'>>  = async params => {
  // undefined
    return this.client.getMLModel(params as any).promise();
  }

  predict: (params: RawParamsFrom<'predict'>) => Promise<ReturnTypeFrom<'predict'>>  = async params => {
  // undefined
    return this.client.predict(params as any).promise();
  }

  updateBatchPrediction: (params: RawParamsFrom<'updateBatchPrediction'>) => Promise<ReturnTypeFrom<'updateBatchPrediction'>>  = async params => {
  // undefined
    return this.client.updateBatchPrediction(params as any).promise();
  }

  updateDataSource: (params: RawParamsFrom<'updateDataSource'>) => Promise<ReturnTypeFrom<'updateDataSource'>>  = async params => {
  // undefined
    return this.client.updateDataSource(params as any).promise();
  }

  updateEvaluation: (params: RawParamsFrom<'updateEvaluation'>) => Promise<ReturnTypeFrom<'updateEvaluation'>>  = async params => {
  // undefined
    return this.client.updateEvaluation(params as any).promise();
  }

  updateMLModel: (params: RawParamsFrom<'updateMLModel'>) => Promise<ReturnTypeFrom<'updateMLModel'>>  = async params => {
  // undefined
    return this.client.updateMLModel(params as any).promise();
  }
  
  static fromClient(client: AWSMachineLearning): MachineLearning {
    return new MachineLearning(client) as any;
  }
  
  static client(options?: AWSMachineLearning.Types.ClientConfiguration): MachineLearning {
    return new MachineLearning(new AWSMachineLearning(options)) as any;
  }
}  
