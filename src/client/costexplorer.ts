import { Request, CostExplorer as AWSCostExplorer } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCostExplorer> = AWSCostExplorer[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCostExplorer> = AWSCostExplorer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCostExplorer[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCostExplorer, Extras> = AWSCostExplorer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCostExplorer> = AWSCostExplorer[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CostExplorer {
  private constructor(private readonly client: AWSCostExplorer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ce' as const;
  public readonly global = false as const;
  public readonly category = 'AWS Cost Management' as const;
  public readonly topLevelCalls = ["listCostAllocationTags","listCostCategoryDefinitions"] as const;
  
  createAnomalyMonitor: (params: RawParamsFrom<'createAnomalyMonitor'>) => Promise<ReturnTypeFrom<'createAnomalyMonitor'>>  = async params => {
  // undefined
    return this.client.createAnomalyMonitor(params as any).promise();
  }

  createAnomalySubscription: (params: RawParamsFrom<'createAnomalySubscription'>) => Promise<ReturnTypeFrom<'createAnomalySubscription'>>  = async params => {
  // undefined
    return this.client.createAnomalySubscription(params as any).promise();
  }

  createCostCategoryDefinition: (params: RawParamsFrom<'createCostCategoryDefinition'>) => Promise<ReturnTypeFrom<'createCostCategoryDefinition'>>  = async params => {
  // undefined
    return this.client.createCostCategoryDefinition(params as any).promise();
  }

  deleteAnomalyMonitor: (params: RawParamsFrom<'deleteAnomalyMonitor'>) => Promise<ReturnTypeFrom<'deleteAnomalyMonitor'>>  = async params => {
  // undefined
    return this.client.deleteAnomalyMonitor(params as any).promise();
  }

  deleteAnomalySubscription: (params: RawParamsFrom<'deleteAnomalySubscription'>) => Promise<ReturnTypeFrom<'deleteAnomalySubscription'>>  = async params => {
  // undefined
    return this.client.deleteAnomalySubscription(params as any).promise();
  }

  deleteCostCategoryDefinition: (params: RawParamsFrom<'deleteCostCategoryDefinition'>) => Promise<ReturnTypeFrom<'deleteCostCategoryDefinition'>>  = async params => {
  // undefined
    return this.client.deleteCostCategoryDefinition(params as any).promise();
  }

  describeCostCategoryDefinition: (params: RawParamsFrom<'describeCostCategoryDefinition'>) => Promise<ReturnTypeFrom<'describeCostCategoryDefinition'>>  = async params => {
  // undefined
    return this.client.describeCostCategoryDefinition(params as any).promise();
  }

  getAnomalies: (params: RawParamsFrom<'getAnomalies'>) => Promise<ReturnTypeFrom<'getAnomalies'>>  = async params => {
  // undefined
    return this.client.getAnomalies(params as any).promise();
  }

  getAnomalyMonitors: (params: RawParamsFrom<'getAnomalyMonitors'>) => Promise<ReturnTypeFrom<'getAnomalyMonitors'>>  = async params => {
  // undefined
    return this.client.getAnomalyMonitors(params as any).promise();
  }

  getAnomalySubscriptions: (params: RawParamsFrom<'getAnomalySubscriptions'>) => Promise<ReturnTypeFrom<'getAnomalySubscriptions'>>  = async params => {
  // undefined
    return this.client.getAnomalySubscriptions(params as any).promise();
  }

  getCostAndUsage: (params: RawParamsFrom<'getCostAndUsage'>) => Promise<ReturnTypeFrom<'getCostAndUsage'>>  = async params => {
  // undefined
    return this.client.getCostAndUsage(params as any).promise();
  }

  getCostAndUsageWithResources: (params: RawParamsFrom<'getCostAndUsageWithResources'>) => Promise<ReturnTypeFrom<'getCostAndUsageWithResources'>>  = async params => {
  // undefined
    return this.client.getCostAndUsageWithResources(params as any).promise();
  }

  getCostCategories: (params: RawParamsFrom<'getCostCategories'>) => Promise<ReturnTypeFrom<'getCostCategories'>>  = async params => {
  // undefined
    return this.client.getCostCategories(params as any).promise();
  }

  getCostForecast: (params: RawParamsFrom<'getCostForecast'>) => Promise<ReturnTypeFrom<'getCostForecast'>>  = async params => {
  // undefined
    return this.client.getCostForecast(params as any).promise();
  }

  getDimensionValues: (params: RawParamsFrom<'getDimensionValues'>) => Promise<ReturnTypeFrom<'getDimensionValues'>>  = async params => {
  // undefined
    return this.client.getDimensionValues(params as any).promise();
  }

  getReservationCoverage: (params: RawParamsFrom<'getReservationCoverage'>) => Promise<ReturnTypeFrom<'getReservationCoverage'>>  = async params => {
  // undefined
    return this.client.getReservationCoverage(params as any).promise();
  }

  getReservationPurchaseRecommendation: (params: RawParamsFrom<'getReservationPurchaseRecommendation'>) => Promise<ReturnTypeFrom<'getReservationPurchaseRecommendation'>>  = async params => {
  // undefined
    return this.client.getReservationPurchaseRecommendation(params as any).promise();
  }

  getReservationUtilization: (params: RawParamsFrom<'getReservationUtilization'>) => Promise<ReturnTypeFrom<'getReservationUtilization'>>  = async params => {
  // undefined
    return this.client.getReservationUtilization(params as any).promise();
  }

  getRightsizingRecommendation: (params: RawParamsFrom<'getRightsizingRecommendation'>) => Promise<ReturnTypeFrom<'getRightsizingRecommendation'>>  = async params => {
  // undefined
    return this.client.getRightsizingRecommendation(params as any).promise();
  }

  getSavingsPlansCoverage: (params: RawParamsFrom<'getSavingsPlansCoverage'>) => Promise<ReturnTypeFrom<'getSavingsPlansCoverage'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getSavingsPlansCoverage(params as any).promise();
  }

  getSavingsPlansPurchaseRecommendation: (params: RawParamsFrom<'getSavingsPlansPurchaseRecommendation'>) => Promise<ReturnTypeFrom<'getSavingsPlansPurchaseRecommendation'>>  = async params => {
  // undefined
    return this.client.getSavingsPlansPurchaseRecommendation(params as any).promise();
  }

  getSavingsPlansUtilization: (params: RawParamsFrom<'getSavingsPlansUtilization'>) => Promise<ReturnTypeFrom<'getSavingsPlansUtilization'>>  = async params => {
  // undefined
    return this.client.getSavingsPlansUtilization(params as any).promise();
  }

  getSavingsPlansUtilizationDetails: (params: RawParamsFrom<'getSavingsPlansUtilizationDetails'>) => Promise<ReturnTypeFrom<'getSavingsPlansUtilizationDetails'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getSavingsPlansUtilizationDetails(params as any).promise();
  }

  getTags: (params: RawParamsFrom<'getTags'>) => Promise<ReturnTypeFrom<'getTags'>>  = async params => {
  // undefined
    return this.client.getTags(params as any).promise();
  }

  getUsageForecast: (params: RawParamsFrom<'getUsageForecast'>) => Promise<ReturnTypeFrom<'getUsageForecast'>>  = async params => {
  // undefined
    return this.client.getUsageForecast(params as any).promise();
  }

  listCostAllocationTags: (params: RawParamsFrom<'listCostAllocationTags'>) => Promise<ReturnTypeFrom<'listCostAllocationTags'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCostAllocationTags(params as any).promise();
  }

  listCostCategoryDefinitions: (params: RawParamsFrom<'listCostCategoryDefinitions'>) => Promise<ReturnTypeFrom<'listCostCategoryDefinitions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCostCategoryDefinitions(params as any).promise();
  }

  listSavingsPlansPurchaseRecommendationGeneration: (params: RawParamsFrom<'listSavingsPlansPurchaseRecommendationGeneration'>) => Promise<ReturnTypeFrom<'listSavingsPlansPurchaseRecommendationGeneration'>>  = async params => {
  // undefined
    return this.client.listSavingsPlansPurchaseRecommendationGeneration(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  provideAnomalyFeedback: (params: RawParamsFrom<'provideAnomalyFeedback'>) => Promise<ReturnTypeFrom<'provideAnomalyFeedback'>>  = async params => {
  // undefined
    return this.client.provideAnomalyFeedback(params as any).promise();
  }

  startSavingsPlansPurchaseRecommendationGeneration: (params: RawParamsFrom<'startSavingsPlansPurchaseRecommendationGeneration'>) => Promise<ReturnTypeFrom<'startSavingsPlansPurchaseRecommendationGeneration'>>  = async params => {
  // undefined
    return this.client.startSavingsPlansPurchaseRecommendationGeneration(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAnomalyMonitor: (params: RawParamsFrom<'updateAnomalyMonitor'>) => Promise<ReturnTypeFrom<'updateAnomalyMonitor'>>  = async params => {
  // undefined
    return this.client.updateAnomalyMonitor(params as any).promise();
  }

  updateAnomalySubscription: (params: RawParamsFrom<'updateAnomalySubscription'>) => Promise<ReturnTypeFrom<'updateAnomalySubscription'>>  = async params => {
  // undefined
    return this.client.updateAnomalySubscription(params as any).promise();
  }

  updateCostAllocationTagsStatus: (params: RawParamsFrom<'updateCostAllocationTagsStatus'>) => Promise<ReturnTypeFrom<'updateCostAllocationTagsStatus'>>  = async params => {
  // undefined
    return this.client.updateCostAllocationTagsStatus(params as any).promise();
  }

  updateCostCategoryDefinition: (params: RawParamsFrom<'updateCostCategoryDefinition'>) => Promise<ReturnTypeFrom<'updateCostCategoryDefinition'>>  = async params => {
  // undefined
    return this.client.updateCostCategoryDefinition(params as any).promise();
  }
  
  static fromClient(client: AWSCostExplorer): CostExplorer {
    return new CostExplorer(client) as any;
  }
  
  static client(options?: AWSCostExplorer.Types.ClientConfiguration): CostExplorer {
    return new CostExplorer(new AWSCostExplorer(options)) as any;
  }
}  
