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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDMS> = AWSDMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DMS {
  private constructor(private readonly client: AWSDMS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dms' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["describeApplicableIndividualAssessments","describeCertificates","describeConnections","describeEndpointTypes","describeEndpoints","describeEventSubscriptions","describeEvents","describeFleetAdvisorCollectors","describeFleetAdvisorDatabases","describeFleetAdvisorLsaAnalysis","describeFleetAdvisorSchemaObjectSummary","describeFleetAdvisorSchemas","describeOrderableReplicationInstances","describePendingMaintenanceActions","describeReplicationInstances","describeReplicationSubnetGroups","describeReplicationTaskAssessmentResults","describeReplicationTaskAssessmentRuns","describeReplicationTaskIndividualAssessments","describeReplicationTasks"] as const;
  
  addTagsToResource: (params: RawParamsFrom<'addTagsToResource'>) => Promise<ReturnTypeFrom<'addTagsToResource'>>  = async params => {
  // undefined
    return this.client.addTagsToResource(params as any).promise();
  }

  applyPendingMaintenanceAction: (params: RawParamsFrom<'applyPendingMaintenanceAction'>) => Promise<ReturnTypeFrom<'applyPendingMaintenanceAction'>>  = async params => {
  // undefined
    return this.client.applyPendingMaintenanceAction(params as any).promise();
  }

  cancelReplicationTaskAssessmentRun: (params: RawParamsFrom<'cancelReplicationTaskAssessmentRun'>) => Promise<ReturnTypeFrom<'cancelReplicationTaskAssessmentRun'>>  = async params => {
  // undefined
    return this.client.cancelReplicationTaskAssessmentRun(params as any).promise();
  }

  createEndpoint: (params: RawParamsFrom<'createEndpoint'>) => Promise<ReturnTypeFrom<'createEndpoint'>>  = async params => {
  // undefined
    return this.client.createEndpoint(params as any).promise();
  }

  createEventSubscription: (params: RawParamsFrom<'createEventSubscription'>) => Promise<ReturnTypeFrom<'createEventSubscription'>>  = async params => {
  // undefined
    return this.client.createEventSubscription(params as any).promise();
  }

  createFleetAdvisorCollector: (params: RawParamsFrom<'createFleetAdvisorCollector'>) => Promise<ReturnTypeFrom<'createFleetAdvisorCollector'>>  = async params => {
  // undefined
    return this.client.createFleetAdvisorCollector(params as any).promise();
  }

  createReplicationInstance: (params: RawParamsFrom<'createReplicationInstance'>) => Promise<ReturnTypeFrom<'createReplicationInstance'>>  = async params => {
  // undefined
    return this.client.createReplicationInstance(params as any).promise();
  }

  createReplicationSubnetGroup: (params: RawParamsFrom<'createReplicationSubnetGroup'>) => Promise<ReturnTypeFrom<'createReplicationSubnetGroup'>>  = async params => {
  // undefined
    return this.client.createReplicationSubnetGroup(params as any).promise();
  }

  createReplicationTask: (params: RawParamsFrom<'createReplicationTask'>) => Promise<ReturnTypeFrom<'createReplicationTask'>>  = async params => {
  // undefined
    return this.client.createReplicationTask(params as any).promise();
  }

  deleteCertificate: (params: RawParamsFrom<'deleteCertificate'>) => Promise<ReturnTypeFrom<'deleteCertificate'>>  = async params => {
  // undefined
    return this.client.deleteCertificate(params as any).promise();
  }

  deleteConnection: (params: RawParamsFrom<'deleteConnection'>) => Promise<ReturnTypeFrom<'deleteConnection'>>  = async params => {
  // undefined
    return this.client.deleteConnection(params as any).promise();
  }

  deleteEndpoint: (params: RawParamsFrom<'deleteEndpoint'>) => Promise<ReturnTypeFrom<'deleteEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteEndpoint(params as any).promise();
  }

  deleteEventSubscription: (params: RawParamsFrom<'deleteEventSubscription'>) => Promise<ReturnTypeFrom<'deleteEventSubscription'>>  = async params => {
  // undefined
    return this.client.deleteEventSubscription(params as any).promise();
  }

  deleteFleetAdvisorCollector: (params: RawParamsFrom<'deleteFleetAdvisorCollector'>) => Promise<ReturnTypeFrom<'deleteFleetAdvisorCollector'>>  = async params => {
  // undefined
    return this.client.deleteFleetAdvisorCollector(params as any).promise();
  }

  deleteFleetAdvisorDatabases: (params: RawParamsFrom<'deleteFleetAdvisorDatabases'>) => Promise<ReturnTypeFrom<'deleteFleetAdvisorDatabases'>>  = async params => {
  // undefined
    return this.client.deleteFleetAdvisorDatabases(params as any).promise();
  }

  deleteReplicationInstance: (params: RawParamsFrom<'deleteReplicationInstance'>) => Promise<ReturnTypeFrom<'deleteReplicationInstance'>>  = async params => {
  // undefined
    return this.client.deleteReplicationInstance(params as any).promise();
  }

  deleteReplicationSubnetGroup: (params: RawParamsFrom<'deleteReplicationSubnetGroup'>) => Promise<ReturnTypeFrom<'deleteReplicationSubnetGroup'>>  = async params => {
  // undefined
    return this.client.deleteReplicationSubnetGroup(params as any).promise();
  }

  deleteReplicationTask: (params: RawParamsFrom<'deleteReplicationTask'>) => Promise<ReturnTypeFrom<'deleteReplicationTask'>>  = async params => {
  // undefined
    return this.client.deleteReplicationTask(params as any).promise();
  }

  deleteReplicationTaskAssessmentRun: (params: RawParamsFrom<'deleteReplicationTaskAssessmentRun'>) => Promise<ReturnTypeFrom<'deleteReplicationTaskAssessmentRun'>>  = async params => {
  // undefined
    return this.client.deleteReplicationTaskAssessmentRun(params as any).promise();
  }

  describeAccountAttributes: (params: RawParamsFrom<'describeAccountAttributes'>) => Promise<ReturnTypeFrom<'describeAccountAttributes'>>  = async params => {
  // undefined
    return this.client.describeAccountAttributes(params as any).promise();
  }

  describeApplicableIndividualAssessments: (params: RawParamsFrom<'describeApplicableIndividualAssessments'>) => Promise<ReturnTypeFrom<'describeApplicableIndividualAssessments'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeApplicableIndividualAssessments(params as any).promise();
  }

  describeCertificates: (params: RawParamsFrom<'describeCertificates'>) => Promise<ReturnTypeFrom<'describeCertificates'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeCertificates(params as any).promise();
  }

  describeConnections: (params: RawParamsFrom<'describeConnections'>) => Promise<ReturnTypeFrom<'describeConnections'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeConnections(params as any).promise();
  }

  describeEndpointSettings: (params: RawParamsFrom<'describeEndpointSettings'>) => Promise<ReturnTypeFrom<'describeEndpointSettings'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEndpointSettings(params as any).promise();
  }

  describeEndpointTypes: (params: RawParamsFrom<'describeEndpointTypes'>) => Promise<ReturnTypeFrom<'describeEndpointTypes'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEndpointTypes(params as any).promise();
  }

  describeEndpoints: (params: RawParamsFrom<'describeEndpoints'>) => Promise<ReturnTypeFrom<'describeEndpoints'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEndpoints(params as any).promise();
  }

  describeEventCategories: (params: RawParamsFrom<'describeEventCategories'>) => Promise<ReturnTypeFrom<'describeEventCategories'>>  = async params => {
  // undefined
    return this.client.describeEventCategories(params as any).promise();
  }

  describeEventSubscriptions: (params: RawParamsFrom<'describeEventSubscriptions'>) => Promise<ReturnTypeFrom<'describeEventSubscriptions'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEventSubscriptions(params as any).promise();
  }

  describeEvents: (params: RawParamsFrom<'describeEvents'>) => Promise<ReturnTypeFrom<'describeEvents'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeEvents(params as any).promise();
  }

  describeFleetAdvisorCollectors: (params: RawParamsFrom<'describeFleetAdvisorCollectors'>) => Promise<ReturnTypeFrom<'describeFleetAdvisorCollectors'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorCollectors(params as any).promise();
  }

  describeFleetAdvisorDatabases: (params: RawParamsFrom<'describeFleetAdvisorDatabases'>) => Promise<ReturnTypeFrom<'describeFleetAdvisorDatabases'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorDatabases(params as any).promise();
  }

  describeFleetAdvisorLsaAnalysis: (params: RawParamsFrom<'describeFleetAdvisorLsaAnalysis'>) => Promise<ReturnTypeFrom<'describeFleetAdvisorLsaAnalysis'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorLsaAnalysis(params as any).promise();
  }

  describeFleetAdvisorSchemaObjectSummary: (params: RawParamsFrom<'describeFleetAdvisorSchemaObjectSummary'>) => Promise<ReturnTypeFrom<'describeFleetAdvisorSchemaObjectSummary'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorSchemaObjectSummary(params as any).promise();
  }

  describeFleetAdvisorSchemas: (params: RawParamsFrom<'describeFleetAdvisorSchemas'>) => Promise<ReturnTypeFrom<'describeFleetAdvisorSchemas'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.describeFleetAdvisorSchemas(params as any).promise();
  }

  describeOrderableReplicationInstances: (params: RawParamsFrom<'describeOrderableReplicationInstances'>) => Promise<ReturnTypeFrom<'describeOrderableReplicationInstances'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeOrderableReplicationInstances(params as any).promise();
  }

  describePendingMaintenanceActions: (params: RawParamsFrom<'describePendingMaintenanceActions'>) => Promise<ReturnTypeFrom<'describePendingMaintenanceActions'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describePendingMaintenanceActions(params as any).promise();
  }

  describeRefreshSchemasStatus: (params: RawParamsFrom<'describeRefreshSchemasStatus'>) => Promise<ReturnTypeFrom<'describeRefreshSchemasStatus'>>  = async params => {
  // undefined
    return this.client.describeRefreshSchemasStatus(params as any).promise();
  }

  describeReplicationInstanceTaskLogs: (params: RawParamsFrom<'describeReplicationInstanceTaskLogs'>) => Promise<ReturnTypeFrom<'describeReplicationInstanceTaskLogs'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationInstanceTaskLogs(params as any).promise();
  }

  describeReplicationInstances: (params: RawParamsFrom<'describeReplicationInstances'>) => Promise<ReturnTypeFrom<'describeReplicationInstances'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationInstances(params as any).promise();
  }

  describeReplicationSubnetGroups: (params: RawParamsFrom<'describeReplicationSubnetGroups'>) => Promise<ReturnTypeFrom<'describeReplicationSubnetGroups'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationSubnetGroups(params as any).promise();
  }

  describeReplicationTaskAssessmentResults: (params: RawParamsFrom<'describeReplicationTaskAssessmentResults'>) => Promise<ReturnTypeFrom<'describeReplicationTaskAssessmentResults'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationTaskAssessmentResults(params as any).promise();
  }

  describeReplicationTaskAssessmentRuns: (params: RawParamsFrom<'describeReplicationTaskAssessmentRuns'>) => Promise<ReturnTypeFrom<'describeReplicationTaskAssessmentRuns'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationTaskAssessmentRuns(params as any).promise();
  }

  describeReplicationTaskIndividualAssessments: (params: RawParamsFrom<'describeReplicationTaskIndividualAssessments'>) => Promise<ReturnTypeFrom<'describeReplicationTaskIndividualAssessments'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationTaskIndividualAssessments(params as any).promise();
  }

  describeReplicationTasks: (params: RawParamsFrom<'describeReplicationTasks'>) => Promise<ReturnTypeFrom<'describeReplicationTasks'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeReplicationTasks(params as any).promise();
  }

  describeSchemas: (params: RawParamsFrom<'describeSchemas'>) => Promise<ReturnTypeFrom<'describeSchemas'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeSchemas(params as any).promise();
  }

  describeTableStatistics: (params: RawParamsFrom<'describeTableStatistics'>) => Promise<ReturnTypeFrom<'describeTableStatistics'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxRecords","outputToken":"Marker"}
    return this.client.describeTableStatistics(params as any).promise();
  }

  importCertificate: (params: RawParamsFrom<'importCertificate'>) => Promise<ReturnTypeFrom<'importCertificate'>>  = async params => {
  // undefined
    return this.client.importCertificate(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  modifyEndpoint: (params: RawParamsFrom<'modifyEndpoint'>) => Promise<ReturnTypeFrom<'modifyEndpoint'>>  = async params => {
  // undefined
    return this.client.modifyEndpoint(params as any).promise();
  }

  modifyEventSubscription: (params: RawParamsFrom<'modifyEventSubscription'>) => Promise<ReturnTypeFrom<'modifyEventSubscription'>>  = async params => {
  // undefined
    return this.client.modifyEventSubscription(params as any).promise();
  }

  modifyReplicationInstance: (params: RawParamsFrom<'modifyReplicationInstance'>) => Promise<ReturnTypeFrom<'modifyReplicationInstance'>>  = async params => {
  // undefined
    return this.client.modifyReplicationInstance(params as any).promise();
  }

  modifyReplicationSubnetGroup: (params: RawParamsFrom<'modifyReplicationSubnetGroup'>) => Promise<ReturnTypeFrom<'modifyReplicationSubnetGroup'>>  = async params => {
  // undefined
    return this.client.modifyReplicationSubnetGroup(params as any).promise();
  }

  modifyReplicationTask: (params: RawParamsFrom<'modifyReplicationTask'>) => Promise<ReturnTypeFrom<'modifyReplicationTask'>>  = async params => {
  // undefined
    return this.client.modifyReplicationTask(params as any).promise();
  }

  moveReplicationTask: (params: RawParamsFrom<'moveReplicationTask'>) => Promise<ReturnTypeFrom<'moveReplicationTask'>>  = async params => {
  // undefined
    return this.client.moveReplicationTask(params as any).promise();
  }

  rebootReplicationInstance: (params: RawParamsFrom<'rebootReplicationInstance'>) => Promise<ReturnTypeFrom<'rebootReplicationInstance'>>  = async params => {
  // undefined
    return this.client.rebootReplicationInstance(params as any).promise();
  }

  refreshSchemas: (params: RawParamsFrom<'refreshSchemas'>) => Promise<ReturnTypeFrom<'refreshSchemas'>>  = async params => {
  // undefined
    return this.client.refreshSchemas(params as any).promise();
  }

  reloadTables: (params: RawParamsFrom<'reloadTables'>) => Promise<ReturnTypeFrom<'reloadTables'>>  = async params => {
  // undefined
    return this.client.reloadTables(params as any).promise();
  }

  removeTagsFromResource: (params: RawParamsFrom<'removeTagsFromResource'>) => Promise<ReturnTypeFrom<'removeTagsFromResource'>>  = async params => {
  // undefined
    return this.client.removeTagsFromResource(params as any).promise();
  }

  runFleetAdvisorLsaAnalysis: (params: RawParamsFrom<'runFleetAdvisorLsaAnalysis'>) => Promise<ReturnTypeFrom<'runFleetAdvisorLsaAnalysis'>>  = async params => {
  // undefined
    return this.client.runFleetAdvisorLsaAnalysis(params as any).promise();
  }

  startReplicationTask: (params: RawParamsFrom<'startReplicationTask'>) => Promise<ReturnTypeFrom<'startReplicationTask'>>  = async params => {
  // undefined
    return this.client.startReplicationTask(params as any).promise();
  }

  startReplicationTaskAssessment: (params: RawParamsFrom<'startReplicationTaskAssessment'>) => Promise<ReturnTypeFrom<'startReplicationTaskAssessment'>>  = async params => {
  // undefined
    return this.client.startReplicationTaskAssessment(params as any).promise();
  }

  startReplicationTaskAssessmentRun: (params: RawParamsFrom<'startReplicationTaskAssessmentRun'>) => Promise<ReturnTypeFrom<'startReplicationTaskAssessmentRun'>>  = async params => {
  // undefined
    return this.client.startReplicationTaskAssessmentRun(params as any).promise();
  }

  stopReplicationTask: (params: RawParamsFrom<'stopReplicationTask'>) => Promise<ReturnTypeFrom<'stopReplicationTask'>>  = async params => {
  // undefined
    return this.client.stopReplicationTask(params as any).promise();
  }

  testConnection: (params: RawParamsFrom<'testConnection'>) => Promise<ReturnTypeFrom<'testConnection'>>  = async params => {
  // undefined
    return this.client.testConnection(params as any).promise();
  }

  updateSubscriptionsToEventBridge: (params: RawParamsFrom<'updateSubscriptionsToEventBridge'>) => Promise<ReturnTypeFrom<'updateSubscriptionsToEventBridge'>>  = async params => {
  // undefined
    return this.client.updateSubscriptionsToEventBridge(params as any).promise();
  }
  
  static fromClient(client: AWSDMS): DMS {
    return new DMS(client) as any;
  }
  
  static client(options?: AWSDMS.Types.ClientConfiguration): DMS {
    return new DMS(new AWSDMS(options)) as any;
  }
}  
