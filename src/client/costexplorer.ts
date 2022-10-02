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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ce';
    global: false;
    category: 'AWS Cost Management'
    topLevelCalls: readonly ["listCostAllocationTags","listCostCategoryDefinitions"];
    
  createAnomalyMonitor: FunctionTypeFrom<'createAnomalyMonitor'>;

  createAnomalySubscription: FunctionTypeFrom<'createAnomalySubscription'>;

  createCostCategoryDefinition: FunctionTypeFrom<'createCostCategoryDefinition'>;

  deleteAnomalyMonitor: FunctionTypeFrom<'deleteAnomalyMonitor'>;

  deleteAnomalySubscription: FunctionTypeFrom<'deleteAnomalySubscription'>;

  deleteCostCategoryDefinition: FunctionTypeFrom<'deleteCostCategoryDefinition'>;

  describeCostCategoryDefinition: FunctionTypeFrom<'describeCostCategoryDefinition'>;

  getAnomalies: FunctionTypeFrom<'getAnomalies'>;

  getAnomalyMonitors: FunctionTypeFrom<'getAnomalyMonitors'>;

  getAnomalySubscriptions: FunctionTypeFrom<'getAnomalySubscriptions'>;

  getCostAndUsage: FunctionTypeFrom<'getCostAndUsage'>;

  getCostAndUsageWithResources: FunctionTypeFrom<'getCostAndUsageWithResources'>;

  getCostCategories: FunctionTypeFrom<'getCostCategories'>;

  getCostForecast: FunctionTypeFrom<'getCostForecast'>;

  getDimensionValues: FunctionTypeFrom<'getDimensionValues'>;

  getReservationCoverage: FunctionTypeFrom<'getReservationCoverage'>;

  getReservationPurchaseRecommendation: FunctionTypeFrom<'getReservationPurchaseRecommendation'>;

  getReservationUtilization: FunctionTypeFrom<'getReservationUtilization'>;

  getRightsizingRecommendation: FunctionTypeFrom<'getRightsizingRecommendation'>;

  getSavingsPlansCoverage: FunctionTypeFrom<'getSavingsPlansCoverage'>;

  getSavingsPlansPurchaseRecommendation: FunctionTypeFrom<'getSavingsPlansPurchaseRecommendation'>;

  getSavingsPlansUtilization: FunctionTypeFrom<'getSavingsPlansUtilization'>;

  getSavingsPlansUtilizationDetails: FunctionTypeFrom<'getSavingsPlansUtilizationDetails'>;

  getTags: FunctionTypeFrom<'getTags'>;

  getUsageForecast: FunctionTypeFrom<'getUsageForecast'>;

  listCostAllocationTags: FunctionTypeFrom<'listCostAllocationTags'>;

  listCostCategoryDefinitions: FunctionTypeFrom<'listCostCategoryDefinitions'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  provideAnomalyFeedback: FunctionTypeFrom<'provideAnomalyFeedback'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAnomalyMonitor: FunctionTypeFrom<'updateAnomalyMonitor'>;

  updateAnomalySubscription: FunctionTypeFrom<'updateAnomalySubscription'>;

  updateCostAllocationTagsStatus: FunctionTypeFrom<'updateCostAllocationTagsStatus'>;

  updateCostCategoryDefinition: FunctionTypeFrom<'updateCostCategoryDefinition'>
}
 
export class CostExplorer implements ClientType {
  private constructor(private readonly client: AWSCostExplorer) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ce';
  public readonly global = false;
  public readonly category = 'AWS Cost Management';
  public readonly topLevelCalls = ["listCostAllocationTags","listCostCategoryDefinitions"] as const;
  
  async createAnomalyMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.createAnomalyMonitor(...args).promise()
  }

  async createAnomalySubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createAnomalySubscription(...args).promise()
  }

  async createCostCategoryDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.createCostCategoryDefinition(...args).promise()
  }

  async deleteAnomalyMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAnomalyMonitor(...args).promise()
  }

  async deleteAnomalySubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAnomalySubscription(...args).promise()
  }

  async deleteCostCategoryDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCostCategoryDefinition(...args).promise()
  }

  async describeCostCategoryDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.describeCostCategoryDefinition(...args).promise()
  }

  async getAnomalies(...args: any): Promise<any> {
  // undefined
    return this.client.getAnomalies(...args).promise()
  }

  async getAnomalyMonitors(...args: any): Promise<any> {
  // undefined
    return this.client.getAnomalyMonitors(...args).promise()
  }

  async getAnomalySubscriptions(...args: any): Promise<any> {
  // undefined
    return this.client.getAnomalySubscriptions(...args).promise()
  }

  async getCostAndUsage(...args: any): Promise<any> {
  // undefined
    return this.client.getCostAndUsage(...args).promise()
  }

  async getCostAndUsageWithResources(...args: any): Promise<any> {
  // undefined
    return this.client.getCostAndUsageWithResources(...args).promise()
  }

  async getCostCategories(...args: any): Promise<any> {
  // undefined
    return this.client.getCostCategories(...args).promise()
  }

  async getCostForecast(...args: any): Promise<any> {
  // undefined
    return this.client.getCostForecast(...args).promise()
  }

  async getDimensionValues(...args: any): Promise<any> {
  // undefined
    return this.client.getDimensionValues(...args).promise()
  }

  async getReservationCoverage(...args: any): Promise<any> {
  // undefined
    return this.client.getReservationCoverage(...args).promise()
  }

  async getReservationPurchaseRecommendation(...args: any): Promise<any> {
  // undefined
    return this.client.getReservationPurchaseRecommendation(...args).promise()
  }

  async getReservationUtilization(...args: any): Promise<any> {
  // undefined
    return this.client.getReservationUtilization(...args).promise()
  }

  async getRightsizingRecommendation(...args: any): Promise<any> {
  // undefined
    return this.client.getRightsizingRecommendation(...args).promise()
  }

  async getSavingsPlansCoverage(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getSavingsPlansCoverage(...args).promise()
  }

  async getSavingsPlansPurchaseRecommendation(...args: any): Promise<any> {
  // undefined
    return this.client.getSavingsPlansPurchaseRecommendation(...args).promise()
  }

  async getSavingsPlansUtilization(...args: any): Promise<any> {
  // undefined
    return this.client.getSavingsPlansUtilization(...args).promise()
  }

  async getSavingsPlansUtilizationDetails(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getSavingsPlansUtilizationDetails(...args).promise()
  }

  async getTags(...args: any): Promise<any> {
  // undefined
    return this.client.getTags(...args).promise()
  }

  async getUsageForecast(...args: any): Promise<any> {
  // undefined
    return this.client.getUsageForecast(...args).promise()
  }

  async listCostAllocationTags(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCostAllocationTags(...args).promise()
  }

  async listCostCategoryDefinitions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCostCategoryDefinitions(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async provideAnomalyFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.provideAnomalyFeedback(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAnomalyMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.updateAnomalyMonitor(...args).promise()
  }

  async updateAnomalySubscription(...args: any): Promise<any> {
  // undefined
    return this.client.updateAnomalySubscription(...args).promise()
  }

  async updateCostAllocationTagsStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateCostAllocationTagsStatus(...args).promise()
  }

  async updateCostCategoryDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.updateCostCategoryDefinition(...args).promise()
  }
  
  static fromClient(client: AWSCostExplorer): ClientType {
    return new CostExplorer(client) as any;
  }
  
  static client(options?: AWSCostExplorer.Types.ClientConfiguration): ClientType {
    return new CostExplorer(new AWSCostExplorer(options)) as any;
  }
}  
