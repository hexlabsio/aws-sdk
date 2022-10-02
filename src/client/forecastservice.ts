import { Request, ForecastService as AWSForecastService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSForecastService> = AWSForecastService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSForecastService> = AWSForecastService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSForecastService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSForecastService, Extras> = AWSForecastService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'forecast';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listDatasetGroups","listDatasetImportJobs","listDatasets","listExplainabilities","listExplainabilityExports","listForecastExportJobs","listForecasts","listMonitors","listPredictorBacktestExportJobs","listPredictors","listWhatIfAnalyses","listWhatIfForecastExports","listWhatIfForecasts"];
    
  createAutoPredictor: FunctionTypeFrom<'createAutoPredictor'>;

  createDataset: FunctionTypeFrom<'createDataset'>;

  createDatasetGroup: FunctionTypeFrom<'createDatasetGroup'>;

  createDatasetImportJob: FunctionTypeFrom<'createDatasetImportJob'>;

  createExplainability: FunctionTypeFrom<'createExplainability'>;

  createExplainabilityExport: FunctionTypeFrom<'createExplainabilityExport'>;

  createForecast: FunctionTypeFrom<'createForecast'>;

  createForecastExportJob: FunctionTypeFrom<'createForecastExportJob'>;

  createMonitor: FunctionTypeFrom<'createMonitor'>;

  createPredictor: FunctionTypeFrom<'createPredictor'>;

  createPredictorBacktestExportJob: FunctionTypeFrom<'createPredictorBacktestExportJob'>;

  createWhatIfAnalysis: FunctionTypeFrom<'createWhatIfAnalysis'>;

  createWhatIfForecast: FunctionTypeFrom<'createWhatIfForecast'>;

  createWhatIfForecastExport: FunctionTypeFrom<'createWhatIfForecastExport'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  deleteDatasetGroup: FunctionTypeFrom<'deleteDatasetGroup'>;

  deleteDatasetImportJob: FunctionTypeFrom<'deleteDatasetImportJob'>;

  deleteExplainability: FunctionTypeFrom<'deleteExplainability'>;

  deleteExplainabilityExport: FunctionTypeFrom<'deleteExplainabilityExport'>;

  deleteForecast: FunctionTypeFrom<'deleteForecast'>;

  deleteForecastExportJob: FunctionTypeFrom<'deleteForecastExportJob'>;

  deleteMonitor: FunctionTypeFrom<'deleteMonitor'>;

  deletePredictor: FunctionTypeFrom<'deletePredictor'>;

  deletePredictorBacktestExportJob: FunctionTypeFrom<'deletePredictorBacktestExportJob'>;

  deleteResourceTree: FunctionTypeFrom<'deleteResourceTree'>;

  deleteWhatIfAnalysis: FunctionTypeFrom<'deleteWhatIfAnalysis'>;

  deleteWhatIfForecast: FunctionTypeFrom<'deleteWhatIfForecast'>;

  deleteWhatIfForecastExport: FunctionTypeFrom<'deleteWhatIfForecastExport'>;

  describeAutoPredictor: FunctionTypeFrom<'describeAutoPredictor'>;

  describeDataset: FunctionTypeFrom<'describeDataset'>;

  describeDatasetGroup: FunctionTypeFrom<'describeDatasetGroup'>;

  describeDatasetImportJob: FunctionTypeFrom<'describeDatasetImportJob'>;

  describeExplainability: FunctionTypeFrom<'describeExplainability'>;

  describeExplainabilityExport: FunctionTypeFrom<'describeExplainabilityExport'>;

  describeForecast: FunctionTypeFrom<'describeForecast'>;

  describeForecastExportJob: FunctionTypeFrom<'describeForecastExportJob'>;

  describeMonitor: FunctionTypeFrom<'describeMonitor'>;

  describePredictor: FunctionTypeFrom<'describePredictor'>;

  describePredictorBacktestExportJob: FunctionTypeFrom<'describePredictorBacktestExportJob'>;

  describeWhatIfAnalysis: FunctionTypeFrom<'describeWhatIfAnalysis'>;

  describeWhatIfForecast: FunctionTypeFrom<'describeWhatIfForecast'>;

  describeWhatIfForecastExport: FunctionTypeFrom<'describeWhatIfForecastExport'>;

  getAccuracyMetrics: FunctionTypeFrom<'getAccuracyMetrics'>;

  listDatasetGroups(params: { [K in keyof Omit<ParamsFrom<'listDatasetGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatasetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetGroups'>]-?: ReturnTypeFrom<'listDatasetGroups'>[K]}['DatasetGroups'] }>
  listDatasetGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetGroups'>]-?: ReturnTypeFrom<'listDatasetGroups'>[K]}['DatasetGroups'] }>;

  listDatasetImportJobs(params: { [K in keyof Omit<ParamsFrom<'listDatasetImportJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatasetImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetImportJobs'>]-?: ReturnTypeFrom<'listDatasetImportJobs'>[K]}['DatasetImportJobs'] }>
  listDatasetImportJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetImportJobs'>]-?: ReturnTypeFrom<'listDatasetImportJobs'>[K]}['DatasetImportJobs'] }>;

  listDatasets(params: { [K in keyof Omit<ParamsFrom<'listDatasets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatasets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['Datasets'] }>
  listDatasets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['Datasets'] }>;

  listExplainabilities(params: { [K in keyof Omit<ParamsFrom<'listExplainabilities', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listExplainabilities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExplainabilities'>]-?: ReturnTypeFrom<'listExplainabilities'>[K]}['Explainabilities'] }>
  listExplainabilities(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExplainabilities'>]-?: ReturnTypeFrom<'listExplainabilities'>[K]}['Explainabilities'] }>;

  listExplainabilityExports(params: { [K in keyof Omit<ParamsFrom<'listExplainabilityExports', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listExplainabilityExports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExplainabilityExports'>]-?: ReturnTypeFrom<'listExplainabilityExports'>[K]}['ExplainabilityExports'] }>
  listExplainabilityExports(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExplainabilityExports'>]-?: ReturnTypeFrom<'listExplainabilityExports'>[K]}['ExplainabilityExports'] }>;

  listForecastExportJobs(params: { [K in keyof Omit<ParamsFrom<'listForecastExportJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listForecastExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listForecastExportJobs'>]-?: ReturnTypeFrom<'listForecastExportJobs'>[K]}['ForecastExportJobs'] }>
  listForecastExportJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listForecastExportJobs'>]-?: ReturnTypeFrom<'listForecastExportJobs'>[K]}['ForecastExportJobs'] }>;

  listForecasts(params: { [K in keyof Omit<ParamsFrom<'listForecasts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listForecasts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listForecasts'>]-?: ReturnTypeFrom<'listForecasts'>[K]}['Forecasts'] }>
  listForecasts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listForecasts'>]-?: ReturnTypeFrom<'listForecasts'>[K]}['Forecasts'] }>;

  listMonitorEvaluations(params: { [K in keyof Omit<ParamsFrom<'listMonitorEvaluations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMonitorEvaluations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMonitorEvaluations'>]-?: ReturnTypeFrom<'listMonitorEvaluations'>[K]}['PredictorMonitorEvaluations'] }>
  ;

  listMonitors(params: { [K in keyof Omit<ParamsFrom<'listMonitors', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMonitors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMonitors'>]-?: ReturnTypeFrom<'listMonitors'>[K]}['Monitors'] }>
  listMonitors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMonitors'>]-?: ReturnTypeFrom<'listMonitors'>[K]}['Monitors'] }>;

  listPredictorBacktestExportJobs(params: { [K in keyof Omit<ParamsFrom<'listPredictorBacktestExportJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPredictorBacktestExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPredictorBacktestExportJobs'>]-?: ReturnTypeFrom<'listPredictorBacktestExportJobs'>[K]}['PredictorBacktestExportJobs'] }>
  listPredictorBacktestExportJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPredictorBacktestExportJobs'>]-?: ReturnTypeFrom<'listPredictorBacktestExportJobs'>[K]}['PredictorBacktestExportJobs'] }>;

  listPredictors(params: { [K in keyof Omit<ParamsFrom<'listPredictors', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPredictors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPredictors'>]-?: ReturnTypeFrom<'listPredictors'>[K]}['Predictors'] }>
  listPredictors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPredictors'>]-?: ReturnTypeFrom<'listPredictors'>[K]}['Predictors'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWhatIfAnalyses(params: { [K in keyof Omit<ParamsFrom<'listWhatIfAnalyses', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listWhatIfAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWhatIfAnalyses'>]-?: ReturnTypeFrom<'listWhatIfAnalyses'>[K]}['WhatIfAnalyses'] }>
  listWhatIfAnalyses(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWhatIfAnalyses'>]-?: ReturnTypeFrom<'listWhatIfAnalyses'>[K]}['WhatIfAnalyses'] }>;

  listWhatIfForecastExports(params: { [K in keyof Omit<ParamsFrom<'listWhatIfForecastExports', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listWhatIfForecastExports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWhatIfForecastExports'>]-?: ReturnTypeFrom<'listWhatIfForecastExports'>[K]}['WhatIfForecastExports'] }>
  listWhatIfForecastExports(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWhatIfForecastExports'>]-?: ReturnTypeFrom<'listWhatIfForecastExports'>[K]}['WhatIfForecastExports'] }>;

  listWhatIfForecasts(params: { [K in keyof Omit<ParamsFrom<'listWhatIfForecasts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listWhatIfForecasts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWhatIfForecasts'>]-?: ReturnTypeFrom<'listWhatIfForecasts'>[K]}['WhatIfForecasts'] }>
  listWhatIfForecasts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWhatIfForecasts'>]-?: ReturnTypeFrom<'listWhatIfForecasts'>[K]}['WhatIfForecasts'] }>;

  resumeResource: FunctionTypeFrom<'resumeResource'>;

  stopResource: FunctionTypeFrom<'stopResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDatasetGroup: FunctionTypeFrom<'updateDatasetGroup'>
}
 
export class ForecastService implements ClientType {
  private constructor(private readonly client: AWSForecastService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'forecast';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listDatasetGroups","listDatasetImportJobs","listDatasets","listExplainabilities","listExplainabilityExports","listForecastExportJobs","listForecasts","listMonitors","listPredictorBacktestExportJobs","listPredictors","listWhatIfAnalyses","listWhatIfForecastExports","listWhatIfForecasts"] as const;
  
  async createAutoPredictor(...args: any): Promise<any> {
  // undefined
    return this.client.createAutoPredictor(...args).promise()
  }

  async createDataset(...args: any): Promise<any> {
  // undefined
    return this.client.createDataset(...args).promise()
  }

  async createDatasetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createDatasetGroup(...args).promise()
  }

  async createDatasetImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createDatasetImportJob(...args).promise()
  }

  async createExplainability(...args: any): Promise<any> {
  // undefined
    return this.client.createExplainability(...args).promise()
  }

  async createExplainabilityExport(...args: any): Promise<any> {
  // undefined
    return this.client.createExplainabilityExport(...args).promise()
  }

  async createForecast(...args: any): Promise<any> {
  // undefined
    return this.client.createForecast(...args).promise()
  }

  async createForecastExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createForecastExportJob(...args).promise()
  }

  async createMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.createMonitor(...args).promise()
  }

  async createPredictor(...args: any): Promise<any> {
  // undefined
    return this.client.createPredictor(...args).promise()
  }

  async createPredictorBacktestExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createPredictorBacktestExportJob(...args).promise()
  }

  async createWhatIfAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.createWhatIfAnalysis(...args).promise()
  }

  async createWhatIfForecast(...args: any): Promise<any> {
  // undefined
    return this.client.createWhatIfForecast(...args).promise()
  }

  async createWhatIfForecastExport(...args: any): Promise<any> {
  // undefined
    return this.client.createWhatIfForecastExport(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async deleteDatasetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDatasetGroup(...args).promise()
  }

  async deleteDatasetImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDatasetImportJob(...args).promise()
  }

  async deleteExplainability(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExplainability(...args).promise()
  }

  async deleteExplainabilityExport(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExplainabilityExport(...args).promise()
  }

  async deleteForecast(...args: any): Promise<any> {
  // undefined
    return this.client.deleteForecast(...args).promise()
  }

  async deleteForecastExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteForecastExportJob(...args).promise()
  }

  async deleteMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMonitor(...args).promise()
  }

  async deletePredictor(...args: any): Promise<any> {
  // undefined
    return this.client.deletePredictor(...args).promise()
  }

  async deletePredictorBacktestExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.deletePredictorBacktestExportJob(...args).promise()
  }

  async deleteResourceTree(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourceTree(...args).promise()
  }

  async deleteWhatIfAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWhatIfAnalysis(...args).promise()
  }

  async deleteWhatIfForecast(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWhatIfForecast(...args).promise()
  }

  async deleteWhatIfForecastExport(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWhatIfForecastExport(...args).promise()
  }

  async describeAutoPredictor(...args: any): Promise<any> {
  // undefined
    return this.client.describeAutoPredictor(...args).promise()
  }

  async describeDataset(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataset(...args).promise()
  }

  async describeDatasetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeDatasetGroup(...args).promise()
  }

  async describeDatasetImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeDatasetImportJob(...args).promise()
  }

  async describeExplainability(...args: any): Promise<any> {
  // undefined
    return this.client.describeExplainability(...args).promise()
  }

  async describeExplainabilityExport(...args: any): Promise<any> {
  // undefined
    return this.client.describeExplainabilityExport(...args).promise()
  }

  async describeForecast(...args: any): Promise<any> {
  // undefined
    return this.client.describeForecast(...args).promise()
  }

  async describeForecastExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeForecastExportJob(...args).promise()
  }

  async describeMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.describeMonitor(...args).promise()
  }

  async describePredictor(...args: any): Promise<any> {
  // undefined
    return this.client.describePredictor(...args).promise()
  }

  async describePredictorBacktestExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describePredictorBacktestExportJob(...args).promise()
  }

  async describeWhatIfAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.describeWhatIfAnalysis(...args).promise()
  }

  async describeWhatIfForecast(...args: any): Promise<any> {
  // undefined
    return this.client.describeWhatIfForecast(...args).promise()
  }

  async describeWhatIfForecastExport(...args: any): Promise<any> {
  // undefined
    return this.client.describeWhatIfForecastExport(...args).promise()
  }

  async getAccuracyMetrics(...args: any): Promise<any> {
  // undefined
    return this.client.getAccuracyMetrics(...args).promise()
  }

  async listDatasetGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DatasetGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasetImportJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetImportJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetImportJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DatasetImportJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Datasets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Datasets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExplainabilities(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Explainabilities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExplainabilities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Explainabilities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExplainabilityExports(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ExplainabilityExports"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExplainabilityExports(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ExplainabilityExports ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listForecastExportJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ForecastExportJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listForecastExportJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ForecastExportJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listForecasts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Forecasts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listForecasts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Forecasts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMonitorEvaluations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PredictorMonitorEvaluations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMonitorEvaluations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PredictorMonitorEvaluations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMonitors(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Monitors"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMonitors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Monitors ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPredictorBacktestExportJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PredictorBacktestExportJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPredictorBacktestExportJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PredictorBacktestExportJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPredictors(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Predictors"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPredictors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Predictors ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listWhatIfAnalyses(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WhatIfAnalyses"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWhatIfAnalyses(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WhatIfAnalyses ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWhatIfForecastExports(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WhatIfForecastExports"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWhatIfForecastExports(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WhatIfForecastExports ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWhatIfForecasts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WhatIfForecasts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWhatIfForecasts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WhatIfForecasts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async resumeResource(...args: any): Promise<any> {
  // undefined
    return this.client.resumeResource(...args).promise()
  }

  async stopResource(...args: any): Promise<any> {
  // undefined
    return this.client.stopResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDatasetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateDatasetGroup(...args).promise()
  }
  
  static fromClient(client: AWSForecastService): ClientType {
    return new ForecastService(client) as any;
  }
  
  static client(options?: AWSForecastService.Types.ClientConfiguration): ClientType {
    return new ForecastService(new AWSForecastService(options)) as any;
  }
}  
