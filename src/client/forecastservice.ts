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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSForecastService> = AWSForecastService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ForecastService {
  private constructor(private readonly client: AWSForecastService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'forecast' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listDatasetGroups","listDatasetImportJobs","listDatasets","listExplainabilities","listExplainabilityExports","listForecastExportJobs","listForecasts","listMonitors","listPredictorBacktestExportJobs","listPredictors","listWhatIfAnalyses","listWhatIfForecastExports","listWhatIfForecasts"] as const;
  
  createAutoPredictor: (params: RawParamsFrom<'createAutoPredictor'>) => Promise<ReturnTypeFrom<'createAutoPredictor'>>  = async params => {
  // undefined
    return this.client.createAutoPredictor(params as any).promise();
  }

  createDataset: (params: RawParamsFrom<'createDataset'>) => Promise<ReturnTypeFrom<'createDataset'>>  = async params => {
  // undefined
    return this.client.createDataset(params as any).promise();
  }

  createDatasetGroup: (params: RawParamsFrom<'createDatasetGroup'>) => Promise<ReturnTypeFrom<'createDatasetGroup'>>  = async params => {
  // undefined
    return this.client.createDatasetGroup(params as any).promise();
  }

  createDatasetImportJob: (params: RawParamsFrom<'createDatasetImportJob'>) => Promise<ReturnTypeFrom<'createDatasetImportJob'>>  = async params => {
  // undefined
    return this.client.createDatasetImportJob(params as any).promise();
  }

  createExplainability: (params: RawParamsFrom<'createExplainability'>) => Promise<ReturnTypeFrom<'createExplainability'>>  = async params => {
  // undefined
    return this.client.createExplainability(params as any).promise();
  }

  createExplainabilityExport: (params: RawParamsFrom<'createExplainabilityExport'>) => Promise<ReturnTypeFrom<'createExplainabilityExport'>>  = async params => {
  // undefined
    return this.client.createExplainabilityExport(params as any).promise();
  }

  createForecast: (params: RawParamsFrom<'createForecast'>) => Promise<ReturnTypeFrom<'createForecast'>>  = async params => {
  // undefined
    return this.client.createForecast(params as any).promise();
  }

  createForecastExportJob: (params: RawParamsFrom<'createForecastExportJob'>) => Promise<ReturnTypeFrom<'createForecastExportJob'>>  = async params => {
  // undefined
    return this.client.createForecastExportJob(params as any).promise();
  }

  createMonitor: (params: RawParamsFrom<'createMonitor'>) => Promise<ReturnTypeFrom<'createMonitor'>>  = async params => {
  // undefined
    return this.client.createMonitor(params as any).promise();
  }

  createPredictor: (params: RawParamsFrom<'createPredictor'>) => Promise<ReturnTypeFrom<'createPredictor'>>  = async params => {
  // undefined
    return this.client.createPredictor(params as any).promise();
  }

  createPredictorBacktestExportJob: (params: RawParamsFrom<'createPredictorBacktestExportJob'>) => Promise<ReturnTypeFrom<'createPredictorBacktestExportJob'>>  = async params => {
  // undefined
    return this.client.createPredictorBacktestExportJob(params as any).promise();
  }

  createWhatIfAnalysis: (params: RawParamsFrom<'createWhatIfAnalysis'>) => Promise<ReturnTypeFrom<'createWhatIfAnalysis'>>  = async params => {
  // undefined
    return this.client.createWhatIfAnalysis(params as any).promise();
  }

  createWhatIfForecast: (params: RawParamsFrom<'createWhatIfForecast'>) => Promise<ReturnTypeFrom<'createWhatIfForecast'>>  = async params => {
  // undefined
    return this.client.createWhatIfForecast(params as any).promise();
  }

  createWhatIfForecastExport: (params: RawParamsFrom<'createWhatIfForecastExport'>) => Promise<ReturnTypeFrom<'createWhatIfForecastExport'>>  = async params => {
  // undefined
    return this.client.createWhatIfForecastExport(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  deleteDatasetGroup: (params: RawParamsFrom<'deleteDatasetGroup'>) => Promise<ReturnTypeFrom<'deleteDatasetGroup'>>  = async params => {
  // undefined
    return this.client.deleteDatasetGroup(params as any).promise();
  }

  deleteDatasetImportJob: (params: RawParamsFrom<'deleteDatasetImportJob'>) => Promise<ReturnTypeFrom<'deleteDatasetImportJob'>>  = async params => {
  // undefined
    return this.client.deleteDatasetImportJob(params as any).promise();
  }

  deleteExplainability: (params: RawParamsFrom<'deleteExplainability'>) => Promise<ReturnTypeFrom<'deleteExplainability'>>  = async params => {
  // undefined
    return this.client.deleteExplainability(params as any).promise();
  }

  deleteExplainabilityExport: (params: RawParamsFrom<'deleteExplainabilityExport'>) => Promise<ReturnTypeFrom<'deleteExplainabilityExport'>>  = async params => {
  // undefined
    return this.client.deleteExplainabilityExport(params as any).promise();
  }

  deleteForecast: (params: RawParamsFrom<'deleteForecast'>) => Promise<ReturnTypeFrom<'deleteForecast'>>  = async params => {
  // undefined
    return this.client.deleteForecast(params as any).promise();
  }

  deleteForecastExportJob: (params: RawParamsFrom<'deleteForecastExportJob'>) => Promise<ReturnTypeFrom<'deleteForecastExportJob'>>  = async params => {
  // undefined
    return this.client.deleteForecastExportJob(params as any).promise();
  }

  deleteMonitor: (params: RawParamsFrom<'deleteMonitor'>) => Promise<ReturnTypeFrom<'deleteMonitor'>>  = async params => {
  // undefined
    return this.client.deleteMonitor(params as any).promise();
  }

  deletePredictor: (params: RawParamsFrom<'deletePredictor'>) => Promise<ReturnTypeFrom<'deletePredictor'>>  = async params => {
  // undefined
    return this.client.deletePredictor(params as any).promise();
  }

  deletePredictorBacktestExportJob: (params: RawParamsFrom<'deletePredictorBacktestExportJob'>) => Promise<ReturnTypeFrom<'deletePredictorBacktestExportJob'>>  = async params => {
  // undefined
    return this.client.deletePredictorBacktestExportJob(params as any).promise();
  }

  deleteResourceTree: (params: RawParamsFrom<'deleteResourceTree'>) => Promise<ReturnTypeFrom<'deleteResourceTree'>>  = async params => {
  // undefined
    return this.client.deleteResourceTree(params as any).promise();
  }

  deleteWhatIfAnalysis: (params: RawParamsFrom<'deleteWhatIfAnalysis'>) => Promise<ReturnTypeFrom<'deleteWhatIfAnalysis'>>  = async params => {
  // undefined
    return this.client.deleteWhatIfAnalysis(params as any).promise();
  }

  deleteWhatIfForecast: (params: RawParamsFrom<'deleteWhatIfForecast'>) => Promise<ReturnTypeFrom<'deleteWhatIfForecast'>>  = async params => {
  // undefined
    return this.client.deleteWhatIfForecast(params as any).promise();
  }

  deleteWhatIfForecastExport: (params: RawParamsFrom<'deleteWhatIfForecastExport'>) => Promise<ReturnTypeFrom<'deleteWhatIfForecastExport'>>  = async params => {
  // undefined
    return this.client.deleteWhatIfForecastExport(params as any).promise();
  }

  describeAutoPredictor: (params: RawParamsFrom<'describeAutoPredictor'>) => Promise<ReturnTypeFrom<'describeAutoPredictor'>>  = async params => {
  // undefined
    return this.client.describeAutoPredictor(params as any).promise();
  }

  describeDataset: (params: RawParamsFrom<'describeDataset'>) => Promise<ReturnTypeFrom<'describeDataset'>>  = async params => {
  // undefined
    return this.client.describeDataset(params as any).promise();
  }

  describeDatasetGroup: (params: RawParamsFrom<'describeDatasetGroup'>) => Promise<ReturnTypeFrom<'describeDatasetGroup'>>  = async params => {
  // undefined
    return this.client.describeDatasetGroup(params as any).promise();
  }

  describeDatasetImportJob: (params: RawParamsFrom<'describeDatasetImportJob'>) => Promise<ReturnTypeFrom<'describeDatasetImportJob'>>  = async params => {
  // undefined
    return this.client.describeDatasetImportJob(params as any).promise();
  }

  describeExplainability: (params: RawParamsFrom<'describeExplainability'>) => Promise<ReturnTypeFrom<'describeExplainability'>>  = async params => {
  // undefined
    return this.client.describeExplainability(params as any).promise();
  }

  describeExplainabilityExport: (params: RawParamsFrom<'describeExplainabilityExport'>) => Promise<ReturnTypeFrom<'describeExplainabilityExport'>>  = async params => {
  // undefined
    return this.client.describeExplainabilityExport(params as any).promise();
  }

  describeForecast: (params: RawParamsFrom<'describeForecast'>) => Promise<ReturnTypeFrom<'describeForecast'>>  = async params => {
  // undefined
    return this.client.describeForecast(params as any).promise();
  }

  describeForecastExportJob: (params: RawParamsFrom<'describeForecastExportJob'>) => Promise<ReturnTypeFrom<'describeForecastExportJob'>>  = async params => {
  // undefined
    return this.client.describeForecastExportJob(params as any).promise();
  }

  describeMonitor: (params: RawParamsFrom<'describeMonitor'>) => Promise<ReturnTypeFrom<'describeMonitor'>>  = async params => {
  // undefined
    return this.client.describeMonitor(params as any).promise();
  }

  describePredictor: (params: RawParamsFrom<'describePredictor'>) => Promise<ReturnTypeFrom<'describePredictor'>>  = async params => {
  // undefined
    return this.client.describePredictor(params as any).promise();
  }

  describePredictorBacktestExportJob: (params: RawParamsFrom<'describePredictorBacktestExportJob'>) => Promise<ReturnTypeFrom<'describePredictorBacktestExportJob'>>  = async params => {
  // undefined
    return this.client.describePredictorBacktestExportJob(params as any).promise();
  }

  describeWhatIfAnalysis: (params: RawParamsFrom<'describeWhatIfAnalysis'>) => Promise<ReturnTypeFrom<'describeWhatIfAnalysis'>>  = async params => {
  // undefined
    return this.client.describeWhatIfAnalysis(params as any).promise();
  }

  describeWhatIfForecast: (params: RawParamsFrom<'describeWhatIfForecast'>) => Promise<ReturnTypeFrom<'describeWhatIfForecast'>>  = async params => {
  // undefined
    return this.client.describeWhatIfForecast(params as any).promise();
  }

  describeWhatIfForecastExport: (params: RawParamsFrom<'describeWhatIfForecastExport'>) => Promise<ReturnTypeFrom<'describeWhatIfForecastExport'>>  = async params => {
  // undefined
    return this.client.describeWhatIfForecastExport(params as any).promise();
  }

  getAccuracyMetrics: (params: RawParamsFrom<'getAccuracyMetrics'>) => Promise<ReturnTypeFrom<'getAccuracyMetrics'>>  = async params => {
  // undefined
    return this.client.getAccuracyMetrics(params as any).promise();
  }

  async listDatasetGroups(params: { [K in keyof ParamsFrom<'listDatasetGroups', { next?: string, limit?: number }>]: ParamsFrom<'listDatasetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasetGroups'>]-?: ReturnTypeFrom<'listDatasetGroups'>[K]}['DatasetGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.DatasetGroups ?? []) ? (result.DatasetGroups ?? []) : [result.DatasetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDatasetImportJobs(params: { [K in keyof ParamsFrom<'listDatasetImportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listDatasetImportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasetImportJobs'>]-?: ReturnTypeFrom<'listDatasetImportJobs'>[K]}['DatasetImportJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetImportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetImportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.DatasetImportJobs ?? []) ? (result.DatasetImportJobs ?? []) : [result.DatasetImportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDatasets(params: { [K in keyof ParamsFrom<'listDatasets', { next?: string, limit?: number }>]: ParamsFrom<'listDatasets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['Datasets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Datasets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Datasets ?? []) ? (result.Datasets ?? []) : [result.Datasets]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listExplainabilities(params: { [K in keyof ParamsFrom<'listExplainabilities', { next?: string, limit?: number }>]: ParamsFrom<'listExplainabilities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExplainabilities'>]-?: ReturnTypeFrom<'listExplainabilities'>[K]}['Explainabilities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Explainabilities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExplainabilities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Explainabilities ?? []) ? (result.Explainabilities ?? []) : [result.Explainabilities]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listExplainabilityExports(params: { [K in keyof ParamsFrom<'listExplainabilityExports', { next?: string, limit?: number }>]: ParamsFrom<'listExplainabilityExports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExplainabilityExports'>]-?: ReturnTypeFrom<'listExplainabilityExports'>[K]}['ExplainabilityExports'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ExplainabilityExports"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listExplainabilityExports({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ExplainabilityExports ?? []) ? (result.ExplainabilityExports ?? []) : [result.ExplainabilityExports]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listForecastExportJobs(params: { [K in keyof ParamsFrom<'listForecastExportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listForecastExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listForecastExportJobs'>]-?: ReturnTypeFrom<'listForecastExportJobs'>[K]}['ForecastExportJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ForecastExportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listForecastExportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ForecastExportJobs ?? []) ? (result.ForecastExportJobs ?? []) : [result.ForecastExportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listForecasts(params: { [K in keyof ParamsFrom<'listForecasts', { next?: string, limit?: number }>]: ParamsFrom<'listForecasts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listForecasts'>]-?: ReturnTypeFrom<'listForecasts'>[K]}['Forecasts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Forecasts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listForecasts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Forecasts ?? []) ? (result.Forecasts ?? []) : [result.Forecasts]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listMonitorEvaluations(params: { [K in keyof ParamsFrom<'listMonitorEvaluations', { next?: string, limit?: number }>]: ParamsFrom<'listMonitorEvaluations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMonitorEvaluations'>]-?: ReturnTypeFrom<'listMonitorEvaluations'>[K]}['PredictorMonitorEvaluations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PredictorMonitorEvaluations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMonitorEvaluations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.PredictorMonitorEvaluations ?? []) ? (result.PredictorMonitorEvaluations ?? []) : [result.PredictorMonitorEvaluations]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listMonitors(params: { [K in keyof ParamsFrom<'listMonitors', { next?: string, limit?: number }>]: ParamsFrom<'listMonitors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMonitors'>]-?: ReturnTypeFrom<'listMonitors'>[K]}['Monitors'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Monitors"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMonitors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Monitors ?? []) ? (result.Monitors ?? []) : [result.Monitors]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPredictorBacktestExportJobs(params: { [K in keyof ParamsFrom<'listPredictorBacktestExportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listPredictorBacktestExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPredictorBacktestExportJobs'>]-?: ReturnTypeFrom<'listPredictorBacktestExportJobs'>[K]}['PredictorBacktestExportJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PredictorBacktestExportJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPredictorBacktestExportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.PredictorBacktestExportJobs ?? []) ? (result.PredictorBacktestExportJobs ?? []) : [result.PredictorBacktestExportJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPredictors(params: { [K in keyof ParamsFrom<'listPredictors', { next?: string, limit?: number }>]: ParamsFrom<'listPredictors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPredictors'>]-?: ReturnTypeFrom<'listPredictors'>[K]}['Predictors'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Predictors"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPredictors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Predictors ?? []) ? (result.Predictors ?? []) : [result.Predictors]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listWhatIfAnalyses(params: { [K in keyof ParamsFrom<'listWhatIfAnalyses', { next?: string, limit?: number }>]: ParamsFrom<'listWhatIfAnalyses', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWhatIfAnalyses'>]-?: ReturnTypeFrom<'listWhatIfAnalyses'>[K]}['WhatIfAnalyses'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WhatIfAnalyses"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWhatIfAnalyses({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.WhatIfAnalyses ?? []) ? (result.WhatIfAnalyses ?? []) : [result.WhatIfAnalyses]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listWhatIfForecastExports(params: { [K in keyof ParamsFrom<'listWhatIfForecastExports', { next?: string, limit?: number }>]: ParamsFrom<'listWhatIfForecastExports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWhatIfForecastExports'>]-?: ReturnTypeFrom<'listWhatIfForecastExports'>[K]}['WhatIfForecastExports'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WhatIfForecastExports"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWhatIfForecastExports({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.WhatIfForecastExports ?? []) ? (result.WhatIfForecastExports ?? []) : [result.WhatIfForecastExports]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listWhatIfForecasts(params: { [K in keyof ParamsFrom<'listWhatIfForecasts', { next?: string, limit?: number }>]: ParamsFrom<'listWhatIfForecasts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWhatIfForecasts'>]-?: ReturnTypeFrom<'listWhatIfForecasts'>[K]}['WhatIfForecasts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WhatIfForecasts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listWhatIfForecasts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.WhatIfForecasts ?? []) ? (result.WhatIfForecasts ?? []) : [result.WhatIfForecasts]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  resumeResource: (params: RawParamsFrom<'resumeResource'>) => Promise<ReturnTypeFrom<'resumeResource'>>  = async params => {
  // undefined
    return this.client.resumeResource(params as any).promise();
  }

  stopResource: (params: RawParamsFrom<'stopResource'>) => Promise<ReturnTypeFrom<'stopResource'>>  = async params => {
  // undefined
    return this.client.stopResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDatasetGroup: (params: RawParamsFrom<'updateDatasetGroup'>) => Promise<ReturnTypeFrom<'updateDatasetGroup'>>  = async params => {
  // undefined
    return this.client.updateDatasetGroup(params as any).promise();
  }
  
  static fromClient(client: AWSForecastService): ForecastService {
    return new ForecastService(client) as any;
  }
  
  static client(options?: AWSForecastService.Types.ClientConfiguration): ForecastService {
    return new ForecastService(new AWSForecastService(options)) as any;
  }
}  
