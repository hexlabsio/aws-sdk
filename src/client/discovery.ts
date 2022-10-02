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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'discovery';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["describeContinuousExports","describeImportTasks"];
    
  associateConfigurationItemsToApplication: FunctionTypeFrom<'associateConfigurationItemsToApplication'>;

  batchDeleteImportData: FunctionTypeFrom<'batchDeleteImportData'>;

  createApplication: FunctionTypeFrom<'createApplication'>;

  createTags: FunctionTypeFrom<'createTags'>;

  deleteApplications: FunctionTypeFrom<'deleteApplications'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  describeAgents: FunctionTypeFrom<'describeAgents'>;

  describeConfigurations: FunctionTypeFrom<'describeConfigurations'>;

  describeContinuousExports: FunctionTypeFrom<'describeContinuousExports'>;

  describeExportConfigurations: FunctionTypeFrom<'describeExportConfigurations'>;

  describeExportTasks: FunctionTypeFrom<'describeExportTasks'>;

  describeImportTasks: FunctionTypeFrom<'describeImportTasks'>;

  describeTags: FunctionTypeFrom<'describeTags'>;

  disassociateConfigurationItemsFromApplication: FunctionTypeFrom<'disassociateConfigurationItemsFromApplication'>;

  exportConfigurations: FunctionTypeFrom<'exportConfigurations'>;

  getDiscoverySummary: FunctionTypeFrom<'getDiscoverySummary'>;

  listConfigurations: FunctionTypeFrom<'listConfigurations'>;

  listServerNeighbors: FunctionTypeFrom<'listServerNeighbors'>;

  startContinuousExport: FunctionTypeFrom<'startContinuousExport'>;

  startDataCollectionByAgentIds: FunctionTypeFrom<'startDataCollectionByAgentIds'>;

  startExportTask: FunctionTypeFrom<'startExportTask'>;

  startImportTask: FunctionTypeFrom<'startImportTask'>;

  stopContinuousExport: FunctionTypeFrom<'stopContinuousExport'>;

  stopDataCollectionByAgentIds: FunctionTypeFrom<'stopDataCollectionByAgentIds'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>
}
 
export class Discovery implements ClientType {
  private constructor(private readonly client: AWSDiscovery) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'discovery';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["describeContinuousExports","describeImportTasks"] as const;
  
  async associateConfigurationItemsToApplication(...args: any): Promise<any> {
  // undefined
    return this.client.associateConfigurationItemsToApplication(...args).promise()
  }

  async batchDeleteImportData(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteImportData(...args).promise()
  }

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createTags(...args: any): Promise<any> {
  // undefined
    return this.client.createTags(...args).promise()
  }

  async deleteApplications(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplications(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async describeAgents(...args: any): Promise<any> {
  // undefined
    return this.client.describeAgents(...args).promise()
  }

  async describeConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfigurations(...args).promise()
  }

  async describeContinuousExports(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeContinuousExports(...args).promise()
  }

  async describeExportConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.describeExportConfigurations(...args).promise()
  }

  async describeExportTasks(...args: any): Promise<any> {
  // undefined
    return this.client.describeExportTasks(...args).promise()
  }

  async describeImportTasks(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeImportTasks(...args).promise()
  }

  async describeTags(...args: any): Promise<any> {
  // undefined
    return this.client.describeTags(...args).promise()
  }

  async disassociateConfigurationItemsFromApplication(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateConfigurationItemsFromApplication(...args).promise()
  }

  async exportConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.exportConfigurations(...args).promise()
  }

  async getDiscoverySummary(...args: any): Promise<any> {
  // undefined
    return this.client.getDiscoverySummary(...args).promise()
  }

  async listConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.listConfigurations(...args).promise()
  }

  async listServerNeighbors(...args: any): Promise<any> {
  // undefined
    return this.client.listServerNeighbors(...args).promise()
  }

  async startContinuousExport(...args: any): Promise<any> {
  // undefined
    return this.client.startContinuousExport(...args).promise()
  }

  async startDataCollectionByAgentIds(...args: any): Promise<any> {
  // undefined
    return this.client.startDataCollectionByAgentIds(...args).promise()
  }

  async startExportTask(...args: any): Promise<any> {
  // undefined
    return this.client.startExportTask(...args).promise()
  }

  async startImportTask(...args: any): Promise<any> {
  // undefined
    return this.client.startImportTask(...args).promise()
  }

  async stopContinuousExport(...args: any): Promise<any> {
  // undefined
    return this.client.stopContinuousExport(...args).promise()
  }

  async stopDataCollectionByAgentIds(...args: any): Promise<any> {
  // undefined
    return this.client.stopDataCollectionByAgentIds(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }
  
  static fromClient(client: AWSDiscovery): ClientType {
    return new Discovery(client) as any;
  }
  
  static client(options?: AWSDiscovery.Types.ClientConfiguration): ClientType {
    return new Discovery(new AWSDiscovery(options)) as any;
  }
}  
