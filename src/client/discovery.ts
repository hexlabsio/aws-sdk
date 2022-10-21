import { Request, Discovery as AWSDiscovery } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDiscovery> = AWSDiscovery[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDiscovery> = AWSDiscovery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDiscovery[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDiscovery, Extras> = AWSDiscovery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDiscovery> = AWSDiscovery[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Discovery {
  private constructor(private readonly client: AWSDiscovery) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'discovery' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["describeContinuousExports","describeImportTasks"] as const;
  
  associateConfigurationItemsToApplication: (params: RawParamsFrom<'associateConfigurationItemsToApplication'>) => Promise<ReturnTypeFrom<'associateConfigurationItemsToApplication'>>  = async params => {
  // undefined
    return this.client.associateConfigurationItemsToApplication(params as any).promise();
  }

  batchDeleteImportData: (params: RawParamsFrom<'batchDeleteImportData'>) => Promise<ReturnTypeFrom<'batchDeleteImportData'>>  = async params => {
  // undefined
    return this.client.batchDeleteImportData(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createTags: (params: RawParamsFrom<'createTags'>) => Promise<ReturnTypeFrom<'createTags'>>  = async params => {
  // undefined
    return this.client.createTags(params as any).promise();
  }

  deleteApplications: (params: RawParamsFrom<'deleteApplications'>) => Promise<ReturnTypeFrom<'deleteApplications'>>  = async params => {
  // undefined
    return this.client.deleteApplications(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  describeAgents: (params: RawParamsFrom<'describeAgents'>) => Promise<ReturnTypeFrom<'describeAgents'>>  = async params => {
  // undefined
    return this.client.describeAgents(params as any).promise();
  }

  describeConfigurations: (params: RawParamsFrom<'describeConfigurations'>) => Promise<ReturnTypeFrom<'describeConfigurations'>>  = async params => {
  // undefined
    return this.client.describeConfigurations(params as any).promise();
  }

  describeContinuousExports: (params: RawParamsFrom<'describeContinuousExports'>) => Promise<ReturnTypeFrom<'describeContinuousExports'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeContinuousExports(params as any).promise();
  }

  describeExportConfigurations: (params: RawParamsFrom<'describeExportConfigurations'>) => Promise<ReturnTypeFrom<'describeExportConfigurations'>>  = async params => {
  // undefined
    return this.client.describeExportConfigurations(params as any).promise();
  }

  describeExportTasks: (params: RawParamsFrom<'describeExportTasks'>) => Promise<ReturnTypeFrom<'describeExportTasks'>>  = async params => {
  // undefined
    return this.client.describeExportTasks(params as any).promise();
  }

  describeImportTasks: (params: RawParamsFrom<'describeImportTasks'>) => Promise<ReturnTypeFrom<'describeImportTasks'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeImportTasks(params as any).promise();
  }

  describeTags: (params: RawParamsFrom<'describeTags'>) => Promise<ReturnTypeFrom<'describeTags'>>  = async params => {
  // undefined
    return this.client.describeTags(params as any).promise();
  }

  disassociateConfigurationItemsFromApplication: (params: RawParamsFrom<'disassociateConfigurationItemsFromApplication'>) => Promise<ReturnTypeFrom<'disassociateConfigurationItemsFromApplication'>>  = async params => {
  // undefined
    return this.client.disassociateConfigurationItemsFromApplication(params as any).promise();
  }

  exportConfigurations: (params: RawParamsFrom<'exportConfigurations'>) => Promise<ReturnTypeFrom<'exportConfigurations'>>  = async params => {
  // undefined
    return this.client.exportConfigurations(params as any).promise();
  }

  getDiscoverySummary: (params: RawParamsFrom<'getDiscoverySummary'>) => Promise<ReturnTypeFrom<'getDiscoverySummary'>>  = async params => {
  // undefined
    return this.client.getDiscoverySummary(params as any).promise();
  }

  listConfigurations: (params: RawParamsFrom<'listConfigurations'>) => Promise<ReturnTypeFrom<'listConfigurations'>>  = async params => {
  // undefined
    return this.client.listConfigurations(params as any).promise();
  }

  listServerNeighbors: (params: RawParamsFrom<'listServerNeighbors'>) => Promise<ReturnTypeFrom<'listServerNeighbors'>>  = async params => {
  // undefined
    return this.client.listServerNeighbors(params as any).promise();
  }

  startContinuousExport: (params: RawParamsFrom<'startContinuousExport'>) => Promise<ReturnTypeFrom<'startContinuousExport'>>  = async params => {
  // undefined
    return this.client.startContinuousExport(params as any).promise();
  }

  startDataCollectionByAgentIds: (params: RawParamsFrom<'startDataCollectionByAgentIds'>) => Promise<ReturnTypeFrom<'startDataCollectionByAgentIds'>>  = async params => {
  // undefined
    return this.client.startDataCollectionByAgentIds(params as any).promise();
  }

  startExportTask: (params: RawParamsFrom<'startExportTask'>) => Promise<ReturnTypeFrom<'startExportTask'>>  = async params => {
  // undefined
    return this.client.startExportTask(params as any).promise();
  }

  startImportTask: (params: RawParamsFrom<'startImportTask'>) => Promise<ReturnTypeFrom<'startImportTask'>>  = async params => {
  // undefined
    return this.client.startImportTask(params as any).promise();
  }

  stopContinuousExport: (params: RawParamsFrom<'stopContinuousExport'>) => Promise<ReturnTypeFrom<'stopContinuousExport'>>  = async params => {
  // undefined
    return this.client.stopContinuousExport(params as any).promise();
  }

  stopDataCollectionByAgentIds: (params: RawParamsFrom<'stopDataCollectionByAgentIds'>) => Promise<ReturnTypeFrom<'stopDataCollectionByAgentIds'>>  = async params => {
  // undefined
    return this.client.stopDataCollectionByAgentIds(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }
  
  static fromClient(client: AWSDiscovery): Discovery {
    return new Discovery(client) as any;
  }
  
  static client(options?: AWSDiscovery.Types.ClientConfiguration): Discovery {
    return new Discovery(new AWSDiscovery(options)) as any;
  }
}  
