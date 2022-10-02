import { Request, DMS as AWSDMS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDMS> = AWSDMS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDMS> = AWSDMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDMS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDMS, Extras> = AWSDMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'dms';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["describeApplicableIndividualAssessments","describeCertificates","describeConnections","describeEndpointTypes","describeEndpoints","describeEventSubscriptions","describeEvents","describeFleetAdvisorCollectors","describeFleetAdvisorDatabases","describeFleetAdvisorLsaAnalysis","describeFleetAdvisorSchemaObjectSummary","describeFleetAdvisorSchemas","describeOrderableReplicationInstances","describePendingMaintenanceActions","describeReplicationInstances","describeReplicationSubnetGroups","describeReplicationTaskAssessmentResults","describeReplicationTaskAssessmentRuns","describeReplicationTaskIndividualAssessments","describeReplicationTasks"];
    
  addTagsToResource: FunctionTypeFrom<'addTagsToResource'>;

  applyPendingMaintenanceAction: FunctionTypeFrom<'applyPendingMaintenanceAction'>;

  cancelReplicationTaskAssessmentRun: FunctionTypeFrom<'cancelReplicationTaskAssessmentRun'>;

  createEndpoint: FunctionTypeFrom<'createEndpoint'>;

  createEventSubscription: FunctionTypeFrom<'createEventSubscription'>;

  createFleetAdvisorCollector: FunctionTypeFrom<'createFleetAdvisorCollector'>;

  createReplicationInstance: FunctionTypeFrom<'createReplicationInstance'>;

  createReplicationSubnetGroup: FunctionTypeFrom<'createReplicationSubnetGroup'>;

  createReplicationTask: FunctionTypeFrom<'createReplicationTask'>;

  deleteCertificate: FunctionTypeFrom<'deleteCertificate'>;

  deleteConnection: FunctionTypeFrom<'deleteConnection'>;

  deleteEndpoint: FunctionTypeFrom<'deleteEndpoint'>;

  deleteEventSubscription: FunctionTypeFrom<'deleteEventSubscription'>;

  deleteFleetAdvisorCollector: FunctionTypeFrom<'deleteFleetAdvisorCollector'>;

  deleteFleetAdvisorDatabases: FunctionTypeFrom<'deleteFleetAdvisorDatabases'>;

  deleteReplicationInstance: FunctionTypeFrom<'deleteReplicationInstance'>;

  deleteReplicationSubnetGroup: FunctionTypeFrom<'deleteReplicationSubnetGroup'>;

  deleteReplicationTask: FunctionTypeFrom<'deleteReplicationTask'>;

  deleteReplicationTaskAssessmentRun: FunctionTypeFrom<'deleteReplicationTaskAssessmentRun'>;

  describeAccountAttributes: FunctionTypeFrom<'describeAccountAttributes'>;

  describeApplicableIndividualAssessments: FunctionTypeFrom<'describeApplicableIndividualAssessments'>;

  describeCertificates: FunctionTypeFrom<'describeCertificates'>;

  describeConnections: FunctionTypeFrom<'describeConnections'>;

  describeEndpointSettings: FunctionTypeFrom<'describeEndpointSettings'>;

  describeEndpointTypes: FunctionTypeFrom<'describeEndpointTypes'>;

  describeEndpoints: FunctionTypeFrom<'describeEndpoints'>;

  describeEventCategories: FunctionTypeFrom<'describeEventCategories'>;

  describeEventSubscriptions: FunctionTypeFrom<'describeEventSubscriptions'>;

  describeEvents: FunctionTypeFrom<'describeEvents'>;

  describeFleetAdvisorCollectors: FunctionTypeFrom<'describeFleetAdvisorCollectors'>;

  describeFleetAdvisorDatabases: FunctionTypeFrom<'describeFleetAdvisorDatabases'>;

  describeFleetAdvisorLsaAnalysis: FunctionTypeFrom<'describeFleetAdvisorLsaAnalysis'>;

  describeFleetAdvisorSchemaObjectSummary: FunctionTypeFrom<'describeFleetAdvisorSchemaObjectSummary'>;

  describeFleetAdvisorSchemas: FunctionTypeFrom<'describeFleetAdvisorSchemas'>;

  describeOrderableReplicationInstances: FunctionTypeFrom<'describeOrderableReplicationInstances'>;

  describePendingMaintenanceActions: FunctionTypeFrom<'describePendingMaintenanceActions'>;

  describeRefreshSchemasStatus: FunctionTypeFrom<'describeRefreshSchemasStatus'>;

  describeReplicationInstanceTaskLogs: FunctionTypeFrom<'describeReplicationInstanceTaskLogs'>;

  describeReplicationInstances: FunctionTypeFrom<'describeReplicationInstances'>;

  describeReplicationSubnetGroups: FunctionTypeFrom<'describeReplicationSubnetGroups'>;

  describeReplicationTaskAssessmentResults: FunctionTypeFrom<'describeReplicationTaskAssessmentResults'>;

  describeReplicationTaskAssessmentRuns: FunctionTypeFrom<'describeReplicationTaskAssessmentRuns'>;

  describeReplicationTaskIndividualAssessments: FunctionTypeFrom<'describeReplicationTaskIndividualAssessments'>;

  describeReplicationTasks: FunctionTypeFrom<'describeReplicationTasks'>;

  describeSchemas: FunctionTypeFrom<'describeSchemas'>;

  describeTableStatistics: FunctionTypeFrom<'describeTableStatistics'>;

  importCertificate: FunctionTypeFrom<'importCertificate'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  modifyEndpoint: FunctionTypeFrom<'modifyEndpoint'>;

  modifyEventSubscription: FunctionTypeFrom<'modifyEventSubscription'>;

  modifyReplicationInstance: FunctionTypeFrom<'modifyReplicationInstance'>;

  modifyReplicationSubnetGroup: FunctionTypeFrom<'modifyReplicationSubnetGroup'>;

  modifyReplicationTask: FunctionTypeFrom<'modifyReplicationTask'>;

  moveReplicationTask: FunctionTypeFrom<'moveReplicationTask'>;

  rebootReplicationInstance: FunctionTypeFrom<'rebootReplicationInstance'>;

  refreshSchemas: FunctionTypeFrom<'refreshSchemas'>;

  reloadTables: FunctionTypeFrom<'reloadTables'>;

  removeTagsFromResource: FunctionTypeFrom<'removeTagsFromResource'>;

  runFleetAdvisorLsaAnalysis: FunctionTypeFrom<'runFleetAdvisorLsaAnalysis'>;

  startReplicationTask: FunctionTypeFrom<'startReplicationTask'>;

  startReplicationTaskAssessment: FunctionTypeFrom<'startReplicationTaskAssessment'>;

  startReplicationTaskAssessmentRun: FunctionTypeFrom<'startReplicationTaskAssessmentRun'>;

  stopReplicationTask: FunctionTypeFrom<'stopReplicationTask'>;

  testConnection: FunctionTypeFrom<'testConnection'>;

  updateSubscriptionsToEventBridge: FunctionTypeFrom<'updateSubscriptionsToEventBridge'>
}
 
export class DMS implements ClientType {
  private constructor(private readonly client: AWSDMS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dms';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["describeApplicableIndividualAssessments","describeCertificates","describeConnections","describeEndpointTypes","describeEndpoints","describeEventSubscriptions","describeEvents","describeFleetAdvisorCollectors","describeFleetAdvisorDatabases","describeFleetAdvisorLsaAnalysis","describeFleetAdvisorSchemaObjectSummary","describeFleetAdvisorSchemas","describeOrderableReplicationInstances","describePendingMaintenanceActions","describeReplicationInstances","describeReplicationSubnetGroups","describeReplicationTaskAssessmentResults","describeReplicationTaskAssessmentRuns","describeReplicationTaskIndividualAssessments","describeReplicationTasks"] as const;
  
  async addTagsToResource(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToResource(...args).promise()
  }

  async applyPendingMaintenanceAction(...args: any): Promise<any> {
  // undefined
    return this.client.applyPendingMaintenanceAction(...args).promise()
  }

  async cancelReplicationTaskAssessmentRun(...args: any): Promise<any> {
  // undefined
    return this.client.cancelReplicationTaskAssessmentRun(...args).promise()
  }

  async createEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.createEndpoint(...args).promise()
  }

  async createEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createEventSubscription(...args).promise()
  }

  async createFleetAdvisorCollector(...args: any): Promise<any> {
  // undefined
    return this.client.createFleetAdvisorCollector(...args).promise()
  }

  async createReplicationInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationInstance(...args).promise()
  }

  async createReplicationSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationSubnetGroup(...args).promise()
  }

  async createReplicationTask(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationTask(...args).promise()
  }

  async deleteCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCertificate(...args).promise()
  }

  async deleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnection(...args).promise()
  }

  async deleteEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEndpoint(...args).promise()
  }

  async deleteEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventSubscription(...args).promise()
  }

  async deleteFleetAdvisorCollector(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleetAdvisorCollector(...args).promise()
  }

  async deleteFleetAdvisorDatabases(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleetAdvisorDatabases(...args).promise()
  }

  async deleteReplicationInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationInstance(...args).promise()
  }

  async deleteReplicationSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationSubnetGroup(...args).promise()
  }

  async deleteReplicationTask(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationTask(...args).promise()
  }

  async deleteReplicationTaskAssessmentRun(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationTaskAssessmentRun(...args).promise()
  }

  async describeAccountAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountAttributes(...args).promise()
  }

  async describeApplicableIndividualAssessments(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeApplicableIndividualAssessments(...args).promise()
  }

  async describeCertificates(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeCertificates(...args).promise()
  }

  async describeConnections(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeConnections(...args).promise()
  }

  async describeEndpointSettings(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEndpointSettings(...args).promise()
  }

  async describeEndpointTypes(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEndpointTypes(...args).promise()
  }

  async describeEndpoints(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEndpoints(...args).promise()
  }

  async describeEventCategories(...args: any): Promise<any> {
  // undefined
    return this.client.describeEventCategories(...args).promise()
  }

  async describeEventSubscriptions(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEventSubscriptions(...args).promise()
  }

  async describeEvents(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEvents(...args).promise()
  }

  async describeFleetAdvisorCollectors(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorCollectors(...args).promise()
  }

  async describeFleetAdvisorDatabases(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorDatabases(...args).promise()
  }

  async describeFleetAdvisorLsaAnalysis(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorLsaAnalysis(...args).promise()
  }

  async describeFleetAdvisorSchemaObjectSummary(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorSchemaObjectSummary(...args).promise()
  }

  async describeFleetAdvisorSchemas(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorSchemas(...args).promise()
  }

  async describeOrderableReplicationInstances(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeOrderableReplicationInstances(...args).promise()
  }

  async describePendingMaintenanceActions(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describePendingMaintenanceActions(...args).promise()
  }

  async describeRefreshSchemasStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeRefreshSchemasStatus(...args).promise()
  }

  async describeReplicationInstanceTaskLogs(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationInstanceTaskLogs(...args).promise()
  }

  async describeReplicationInstances(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationInstances(...args).promise()
  }

  async describeReplicationSubnetGroups(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationSubnetGroups(...args).promise()
  }

  async describeReplicationTaskAssessmentResults(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationTaskAssessmentResults(...args).promise()
  }

  async describeReplicationTaskAssessmentRuns(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationTaskAssessmentRuns(...args).promise()
  }

  async describeReplicationTaskIndividualAssessments(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationTaskIndividualAssessments(...args).promise()
  }

  async describeReplicationTasks(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationTasks(...args).promise()
  }

  async describeSchemas(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeSchemas(...args).promise()
  }

  async describeTableStatistics(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeTableStatistics(...args).promise()
  }

  async importCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.importCertificate(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async modifyEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.modifyEndpoint(...args).promise()
  }

  async modifyEventSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.modifyEventSubscription(...args).promise()
  }

  async modifyReplicationInstance(...args: any): Promise<any> {
  // undefined
    return this.client.modifyReplicationInstance(...args).promise()
  }

  async modifyReplicationSubnetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyReplicationSubnetGroup(...args).promise()
  }

  async modifyReplicationTask(...args: any): Promise<any> {
  // undefined
    return this.client.modifyReplicationTask(...args).promise()
  }

  async moveReplicationTask(...args: any): Promise<any> {
  // undefined
    return this.client.moveReplicationTask(...args).promise()
  }

  async rebootReplicationInstance(...args: any): Promise<any> {
  // undefined
    return this.client.rebootReplicationInstance(...args).promise()
  }

  async refreshSchemas(...args: any): Promise<any> {
  // undefined
    return this.client.refreshSchemas(...args).promise()
  }

  async reloadTables(...args: any): Promise<any> {
  // undefined
    return this.client.reloadTables(...args).promise()
  }

  async removeTagsFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromResource(...args).promise()
  }

  async runFleetAdvisorLsaAnalysis(...args: any): Promise<any> {
  // undefined
    return this.client.runFleetAdvisorLsaAnalysis(...args).promise()
  }

  async startReplicationTask(...args: any): Promise<any> {
  // undefined
    return this.client.startReplicationTask(...args).promise()
  }

  async startReplicationTaskAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.startReplicationTaskAssessment(...args).promise()
  }

  async startReplicationTaskAssessmentRun(...args: any): Promise<any> {
  // undefined
    return this.client.startReplicationTaskAssessmentRun(...args).promise()
  }

  async stopReplicationTask(...args: any): Promise<any> {
  // undefined
    return this.client.stopReplicationTask(...args).promise()
  }

  async testConnection(...args: any): Promise<any> {
  // undefined
    return this.client.testConnection(...args).promise()
  }

  async updateSubscriptionsToEventBridge(...args: any): Promise<any> {
  // undefined
    return this.client.updateSubscriptionsToEventBridge(...args).promise()
  }
  
  static fromClient(client: AWSDMS): ClientType {
    return new DMS(client) as any;
  }
  
  static client(options?: AWSDMS.Types.ClientConfiguration): ClientType {
    return new DMS(new AWSDMS(options)) as any;
  }
}  
