import { Request, SSM as AWSSSM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSSM> = AWSSSM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSSM> = AWSSSM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSSM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSSM, Extras> = AWSSSM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ssm';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeActivations","describeAutomationExecutions","describeAvailablePatches","describeInstanceInformation","describeInventoryDeletions","describeMaintenanceWindowSchedule","describeMaintenanceWindows","describeOpsItems","describeParameters","describePatchBaselines","describePatchGroups","getInventory","getInventorySchema","getOpsSummary","listAssociations","listCommandInvocations","listCommands","listComplianceItems","listComplianceSummaries","listDocuments","listOpsItemEvents","listOpsItemRelatedItems","listOpsMetadata","listResourceComplianceSummaries","listResourceDataSync"];
    
  addTagsToResource: FunctionTypeFrom<'addTagsToResource'>;

  associateOpsItemRelatedItem: FunctionTypeFrom<'associateOpsItemRelatedItem'>;

  cancelCommand: FunctionTypeFrom<'cancelCommand'>;

  cancelMaintenanceWindowExecution: FunctionTypeFrom<'cancelMaintenanceWindowExecution'>;

  createActivation: FunctionTypeFrom<'createActivation'>;

  createAssociation: FunctionTypeFrom<'createAssociation'>;

  createAssociationBatch: FunctionTypeFrom<'createAssociationBatch'>;

  createDocument: FunctionTypeFrom<'createDocument'>;

  createMaintenanceWindow: FunctionTypeFrom<'createMaintenanceWindow'>;

  createOpsItem: FunctionTypeFrom<'createOpsItem'>;

  createOpsMetadata: FunctionTypeFrom<'createOpsMetadata'>;

  createPatchBaseline: FunctionTypeFrom<'createPatchBaseline'>;

  createResourceDataSync: FunctionTypeFrom<'createResourceDataSync'>;

  deleteActivation: FunctionTypeFrom<'deleteActivation'>;

  deleteAssociation: FunctionTypeFrom<'deleteAssociation'>;

  deleteDocument: FunctionTypeFrom<'deleteDocument'>;

  deleteInventory: FunctionTypeFrom<'deleteInventory'>;

  deleteMaintenanceWindow: FunctionTypeFrom<'deleteMaintenanceWindow'>;

  deleteOpsMetadata: FunctionTypeFrom<'deleteOpsMetadata'>;

  deleteParameter: FunctionTypeFrom<'deleteParameter'>;

  deleteParameters: FunctionTypeFrom<'deleteParameters'>;

  deletePatchBaseline: FunctionTypeFrom<'deletePatchBaseline'>;

  deleteResourceDataSync: FunctionTypeFrom<'deleteResourceDataSync'>;

  deregisterManagedInstance: FunctionTypeFrom<'deregisterManagedInstance'>;

  deregisterPatchBaselineForPatchGroup: FunctionTypeFrom<'deregisterPatchBaselineForPatchGroup'>;

  deregisterTargetFromMaintenanceWindow: FunctionTypeFrom<'deregisterTargetFromMaintenanceWindow'>;

  deregisterTaskFromMaintenanceWindow: FunctionTypeFrom<'deregisterTaskFromMaintenanceWindow'>;

  describeActivations(params: { [K in keyof Omit<ParamsFrom<'describeActivations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeActivations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeActivations'>]-?: ReturnTypeFrom<'describeActivations'>[K]}['ActivationList'] }>
  describeActivations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeActivations'>]-?: ReturnTypeFrom<'describeActivations'>[K]}['ActivationList'] }>;

  describeAssociation: FunctionTypeFrom<'describeAssociation'>;

  describeAssociationExecutionTargets(params: { [K in keyof Omit<ParamsFrom<'describeAssociationExecutionTargets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAssociationExecutionTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAssociationExecutionTargets'>]-?: ReturnTypeFrom<'describeAssociationExecutionTargets'>[K]}['AssociationExecutionTargets'] }>
  ;

  describeAssociationExecutions(params: { [K in keyof Omit<ParamsFrom<'describeAssociationExecutions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAssociationExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAssociationExecutions'>]-?: ReturnTypeFrom<'describeAssociationExecutions'>[K]}['AssociationExecutions'] }>
  ;

  describeAutomationExecutions(params: { [K in keyof Omit<ParamsFrom<'describeAutomationExecutions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAutomationExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAutomationExecutions'>]-?: ReturnTypeFrom<'describeAutomationExecutions'>[K]}['AutomationExecutionMetadataList'] }>
  describeAutomationExecutions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAutomationExecutions'>]-?: ReturnTypeFrom<'describeAutomationExecutions'>[K]}['AutomationExecutionMetadataList'] }>;

  describeAutomationStepExecutions(params: { [K in keyof Omit<ParamsFrom<'describeAutomationStepExecutions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAutomationStepExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAutomationStepExecutions'>]-?: ReturnTypeFrom<'describeAutomationStepExecutions'>[K]}['StepExecutions'] }>
  ;

  describeAvailablePatches(params: { [K in keyof Omit<ParamsFrom<'describeAvailablePatches', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeAvailablePatches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAvailablePatches'>]-?: ReturnTypeFrom<'describeAvailablePatches'>[K]}['Patches'] }>
  describeAvailablePatches(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAvailablePatches'>]-?: ReturnTypeFrom<'describeAvailablePatches'>[K]}['Patches'] }>;

  describeDocument: FunctionTypeFrom<'describeDocument'>;

  describeDocumentPermission: FunctionTypeFrom<'describeDocumentPermission'>;

  describeEffectiveInstanceAssociations(params: { [K in keyof Omit<ParamsFrom<'describeEffectiveInstanceAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeEffectiveInstanceAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEffectiveInstanceAssociations'>]-?: ReturnTypeFrom<'describeEffectiveInstanceAssociations'>[K]}['Associations'] }>
  ;

  describeEffectivePatchesForPatchBaseline(params: { [K in keyof Omit<ParamsFrom<'describeEffectivePatchesForPatchBaseline', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeEffectivePatchesForPatchBaseline', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEffectivePatchesForPatchBaseline'>]-?: ReturnTypeFrom<'describeEffectivePatchesForPatchBaseline'>[K]}['EffectivePatches'] }>
  ;

  describeInstanceAssociationsStatus(params: { [K in keyof Omit<ParamsFrom<'describeInstanceAssociationsStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstanceAssociationsStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceAssociationsStatus'>]-?: ReturnTypeFrom<'describeInstanceAssociationsStatus'>[K]}['InstanceAssociationStatusInfos'] }>
  ;

  describeInstanceInformation(params: { [K in keyof Omit<ParamsFrom<'describeInstanceInformation', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstanceInformation', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceInformation'>]-?: ReturnTypeFrom<'describeInstanceInformation'>[K]}['InstanceInformationList'] }>
  describeInstanceInformation(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstanceInformation'>]-?: ReturnTypeFrom<'describeInstanceInformation'>[K]}['InstanceInformationList'] }>;

  describeInstancePatchStates(params: { [K in keyof Omit<ParamsFrom<'describeInstancePatchStates', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstancePatchStates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstancePatchStates'>]-?: ReturnTypeFrom<'describeInstancePatchStates'>[K]}['InstancePatchStates'] }>
  ;

  describeInstancePatchStatesForPatchGroup(params: { [K in keyof Omit<ParamsFrom<'describeInstancePatchStatesForPatchGroup', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstancePatchStatesForPatchGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstancePatchStatesForPatchGroup'>]-?: ReturnTypeFrom<'describeInstancePatchStatesForPatchGroup'>[K]}['InstancePatchStates'] }>
  ;

  describeInstancePatches(params: { [K in keyof Omit<ParamsFrom<'describeInstancePatches', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInstancePatches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInstancePatches'>]-?: ReturnTypeFrom<'describeInstancePatches'>[K]}['Patches'] }>
  ;

  describeInventoryDeletions(params: { [K in keyof Omit<ParamsFrom<'describeInventoryDeletions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeInventoryDeletions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInventoryDeletions'>]-?: ReturnTypeFrom<'describeInventoryDeletions'>[K]}['InventoryDeletions'] }>
  describeInventoryDeletions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeInventoryDeletions'>]-?: ReturnTypeFrom<'describeInventoryDeletions'>[K]}['InventoryDeletions'] }>;

  describeMaintenanceWindowExecutionTaskInvocations(params: { [K in keyof Omit<ParamsFrom<'describeMaintenanceWindowExecutionTaskInvocations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMaintenanceWindowExecutionTaskInvocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindowExecutionTaskInvocations'>]-?: ReturnTypeFrom<'describeMaintenanceWindowExecutionTaskInvocations'>[K]}['WindowExecutionTaskInvocationIdentities'] }>
  ;

  describeMaintenanceWindowExecutionTasks(params: { [K in keyof Omit<ParamsFrom<'describeMaintenanceWindowExecutionTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMaintenanceWindowExecutionTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindowExecutionTasks'>]-?: ReturnTypeFrom<'describeMaintenanceWindowExecutionTasks'>[K]}['WindowExecutionTaskIdentities'] }>
  ;

  describeMaintenanceWindowExecutions(params: { [K in keyof Omit<ParamsFrom<'describeMaintenanceWindowExecutions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMaintenanceWindowExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindowExecutions'>]-?: ReturnTypeFrom<'describeMaintenanceWindowExecutions'>[K]}['WindowExecutions'] }>
  ;

  describeMaintenanceWindowSchedule(params: { [K in keyof Omit<ParamsFrom<'describeMaintenanceWindowSchedule', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMaintenanceWindowSchedule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindowSchedule'>]-?: ReturnTypeFrom<'describeMaintenanceWindowSchedule'>[K]}['ScheduledWindowExecutions'] }>
  describeMaintenanceWindowSchedule(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindowSchedule'>]-?: ReturnTypeFrom<'describeMaintenanceWindowSchedule'>[K]}['ScheduledWindowExecutions'] }>;

  describeMaintenanceWindowTargets(params: { [K in keyof Omit<ParamsFrom<'describeMaintenanceWindowTargets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMaintenanceWindowTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindowTargets'>]-?: ReturnTypeFrom<'describeMaintenanceWindowTargets'>[K]}['Targets'] }>
  ;

  describeMaintenanceWindowTasks(params: { [K in keyof Omit<ParamsFrom<'describeMaintenanceWindowTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMaintenanceWindowTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindowTasks'>]-?: ReturnTypeFrom<'describeMaintenanceWindowTasks'>[K]}['Tasks'] }>
  ;

  describeMaintenanceWindows(params: { [K in keyof Omit<ParamsFrom<'describeMaintenanceWindows', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMaintenanceWindows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindows'>]-?: ReturnTypeFrom<'describeMaintenanceWindows'>[K]}['WindowIdentities'] }>
  describeMaintenanceWindows(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindows'>]-?: ReturnTypeFrom<'describeMaintenanceWindows'>[K]}['WindowIdentities'] }>;

  describeMaintenanceWindowsForTarget(params: { [K in keyof Omit<ParamsFrom<'describeMaintenanceWindowsForTarget', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeMaintenanceWindowsForTarget', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeMaintenanceWindowsForTarget'>]-?: ReturnTypeFrom<'describeMaintenanceWindowsForTarget'>[K]}['WindowIdentities'] }>
  ;

  describeOpsItems(params: { [K in keyof Omit<ParamsFrom<'describeOpsItems', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeOpsItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOpsItems'>]-?: ReturnTypeFrom<'describeOpsItems'>[K]}['OpsItemSummaries'] }>
  describeOpsItems(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeOpsItems'>]-?: ReturnTypeFrom<'describeOpsItems'>[K]}['OpsItemSummaries'] }>;

  describeParameters: FunctionTypeFrom<'describeParameters'>;

  describePatchBaselines(params: { [K in keyof Omit<ParamsFrom<'describePatchBaselines', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describePatchBaselines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePatchBaselines'>]-?: ReturnTypeFrom<'describePatchBaselines'>[K]}['BaselineIdentities'] }>
  describePatchBaselines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePatchBaselines'>]-?: ReturnTypeFrom<'describePatchBaselines'>[K]}['BaselineIdentities'] }>;

  describePatchGroupState: FunctionTypeFrom<'describePatchGroupState'>;

  describePatchGroups(params: { [K in keyof Omit<ParamsFrom<'describePatchGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describePatchGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePatchGroups'>]-?: ReturnTypeFrom<'describePatchGroups'>[K]}['Mappings'] }>
  describePatchGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePatchGroups'>]-?: ReturnTypeFrom<'describePatchGroups'>[K]}['Mappings'] }>;

  describePatchProperties(params: { [K in keyof Omit<ParamsFrom<'describePatchProperties', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describePatchProperties', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describePatchProperties'>]-?: ReturnTypeFrom<'describePatchProperties'>[K]}['Properties'] }>
  ;

  describeSessions(params: { [K in keyof Omit<ParamsFrom<'describeSessions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSessions'>]-?: ReturnTypeFrom<'describeSessions'>[K]}['Sessions'] }>
  ;

  disassociateOpsItemRelatedItem: FunctionTypeFrom<'disassociateOpsItemRelatedItem'>;

  getAutomationExecution: FunctionTypeFrom<'getAutomationExecution'>;

  getCalendarState: FunctionTypeFrom<'getCalendarState'>;

  getCommandInvocation: FunctionTypeFrom<'getCommandInvocation'>;

  getConnectionStatus: FunctionTypeFrom<'getConnectionStatus'>;

  getDefaultPatchBaseline: FunctionTypeFrom<'getDefaultPatchBaseline'>;

  getDeployablePatchSnapshotForInstance: FunctionTypeFrom<'getDeployablePatchSnapshotForInstance'>;

  getDocument: FunctionTypeFrom<'getDocument'>;

  getInventory(params: { [K in keyof Omit<ParamsFrom<'getInventory', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getInventory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getInventory'>]-?: ReturnTypeFrom<'getInventory'>[K]}['Entities'] }>
  getInventory(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getInventory'>]-?: ReturnTypeFrom<'getInventory'>[K]}['Entities'] }>;

  getInventorySchema(params: { [K in keyof Omit<ParamsFrom<'getInventorySchema', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getInventorySchema', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getInventorySchema'>]-?: ReturnTypeFrom<'getInventorySchema'>[K]}['Schemas'] }>
  getInventorySchema(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getInventorySchema'>]-?: ReturnTypeFrom<'getInventorySchema'>[K]}['Schemas'] }>;

  getMaintenanceWindow: FunctionTypeFrom<'getMaintenanceWindow'>;

  getMaintenanceWindowExecution: FunctionTypeFrom<'getMaintenanceWindowExecution'>;

  getMaintenanceWindowExecutionTask: FunctionTypeFrom<'getMaintenanceWindowExecutionTask'>;

  getMaintenanceWindowExecutionTaskInvocation: FunctionTypeFrom<'getMaintenanceWindowExecutionTaskInvocation'>;

  getMaintenanceWindowTask: FunctionTypeFrom<'getMaintenanceWindowTask'>;

  getOpsItem: FunctionTypeFrom<'getOpsItem'>;

  getOpsMetadata: FunctionTypeFrom<'getOpsMetadata'>;

  getOpsSummary(params: { [K in keyof Omit<ParamsFrom<'getOpsSummary', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getOpsSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getOpsSummary'>]-?: ReturnTypeFrom<'getOpsSummary'>[K]}['Entities'] }>
  getOpsSummary(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getOpsSummary'>]-?: ReturnTypeFrom<'getOpsSummary'>[K]}['Entities'] }>;

  getParameter: FunctionTypeFrom<'getParameter'>;

  getParameterHistory: FunctionTypeFrom<'getParameterHistory'>;

  getParameters: FunctionTypeFrom<'getParameters'>;

  getParametersByPath: FunctionTypeFrom<'getParametersByPath'>;

  getPatchBaseline: FunctionTypeFrom<'getPatchBaseline'>;

  getPatchBaselineForPatchGroup: FunctionTypeFrom<'getPatchBaselineForPatchGroup'>;

  getServiceSetting: FunctionTypeFrom<'getServiceSetting'>;

  labelParameterVersion: FunctionTypeFrom<'labelParameterVersion'>;

  listAssociationVersions(params: { [K in keyof Omit<ParamsFrom<'listAssociationVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAssociationVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssociationVersions'>]-?: ReturnTypeFrom<'listAssociationVersions'>[K]}['AssociationVersions'] }>
  ;

  listAssociations(params: { [K in keyof Omit<ParamsFrom<'listAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssociations'>]-?: ReturnTypeFrom<'listAssociations'>[K]}['Associations'] }>
  listAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAssociations'>]-?: ReturnTypeFrom<'listAssociations'>[K]}['Associations'] }>;

  listCommandInvocations(params: { [K in keyof Omit<ParamsFrom<'listCommandInvocations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCommandInvocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCommandInvocations'>]-?: ReturnTypeFrom<'listCommandInvocations'>[K]}['CommandInvocations'] }>
  listCommandInvocations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCommandInvocations'>]-?: ReturnTypeFrom<'listCommandInvocations'>[K]}['CommandInvocations'] }>;

  listCommands(params: { [K in keyof Omit<ParamsFrom<'listCommands', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCommands', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCommands'>]-?: ReturnTypeFrom<'listCommands'>[K]}['Commands'] }>
  listCommands(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCommands'>]-?: ReturnTypeFrom<'listCommands'>[K]}['Commands'] }>;

  listComplianceItems(params: { [K in keyof Omit<ParamsFrom<'listComplianceItems', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listComplianceItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComplianceItems'>]-?: ReturnTypeFrom<'listComplianceItems'>[K]}['ComplianceItems'] }>
  listComplianceItems(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComplianceItems'>]-?: ReturnTypeFrom<'listComplianceItems'>[K]}['ComplianceItems'] }>;

  listComplianceSummaries(params: { [K in keyof Omit<ParamsFrom<'listComplianceSummaries', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listComplianceSummaries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComplianceSummaries'>]-?: ReturnTypeFrom<'listComplianceSummaries'>[K]}['ComplianceSummaryItems'] }>
  listComplianceSummaries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listComplianceSummaries'>]-?: ReturnTypeFrom<'listComplianceSummaries'>[K]}['ComplianceSummaryItems'] }>;

  listDocumentMetadataHistory: FunctionTypeFrom<'listDocumentMetadataHistory'>;

  listDocumentVersions(params: { [K in keyof Omit<ParamsFrom<'listDocumentVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDocumentVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDocumentVersions'>]-?: ReturnTypeFrom<'listDocumentVersions'>[K]}['DocumentVersions'] }>
  ;

  listDocuments(params: { [K in keyof Omit<ParamsFrom<'listDocuments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDocuments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDocuments'>]-?: ReturnTypeFrom<'listDocuments'>[K]}['DocumentIdentifiers'] }>
  listDocuments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDocuments'>]-?: ReturnTypeFrom<'listDocuments'>[K]}['DocumentIdentifiers'] }>;

  listInventoryEntries: FunctionTypeFrom<'listInventoryEntries'>;

  listOpsItemEvents(params: { [K in keyof Omit<ParamsFrom<'listOpsItemEvents', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOpsItemEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOpsItemEvents'>]-?: ReturnTypeFrom<'listOpsItemEvents'>[K]}['Summaries'] }>
  listOpsItemEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOpsItemEvents'>]-?: ReturnTypeFrom<'listOpsItemEvents'>[K]}['Summaries'] }>;

  listOpsItemRelatedItems(params: { [K in keyof Omit<ParamsFrom<'listOpsItemRelatedItems', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOpsItemRelatedItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOpsItemRelatedItems'>]-?: ReturnTypeFrom<'listOpsItemRelatedItems'>[K]}['Summaries'] }>
  listOpsItemRelatedItems(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOpsItemRelatedItems'>]-?: ReturnTypeFrom<'listOpsItemRelatedItems'>[K]}['Summaries'] }>;

  listOpsMetadata(params: { [K in keyof Omit<ParamsFrom<'listOpsMetadata', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listOpsMetadata', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOpsMetadata'>]-?: ReturnTypeFrom<'listOpsMetadata'>[K]}['OpsMetadataList'] }>
  listOpsMetadata(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOpsMetadata'>]-?: ReturnTypeFrom<'listOpsMetadata'>[K]}['OpsMetadataList'] }>;

  listResourceComplianceSummaries(params: { [K in keyof Omit<ParamsFrom<'listResourceComplianceSummaries', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResourceComplianceSummaries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceComplianceSummaries'>]-?: ReturnTypeFrom<'listResourceComplianceSummaries'>[K]}['ResourceComplianceSummaryItems'] }>
  listResourceComplianceSummaries(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceComplianceSummaries'>]-?: ReturnTypeFrom<'listResourceComplianceSummaries'>[K]}['ResourceComplianceSummaryItems'] }>;

  listResourceDataSync(params: { [K in keyof Omit<ParamsFrom<'listResourceDataSync', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResourceDataSync', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceDataSync'>]-?: ReturnTypeFrom<'listResourceDataSync'>[K]}['ResourceDataSyncItems'] }>
  listResourceDataSync(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceDataSync'>]-?: ReturnTypeFrom<'listResourceDataSync'>[K]}['ResourceDataSyncItems'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  modifyDocumentPermission: FunctionTypeFrom<'modifyDocumentPermission'>;

  putComplianceItems: FunctionTypeFrom<'putComplianceItems'>;

  putInventory: FunctionTypeFrom<'putInventory'>;

  putParameter: FunctionTypeFrom<'putParameter'>;

  registerDefaultPatchBaseline: FunctionTypeFrom<'registerDefaultPatchBaseline'>;

  registerPatchBaselineForPatchGroup: FunctionTypeFrom<'registerPatchBaselineForPatchGroup'>;

  registerTargetWithMaintenanceWindow: FunctionTypeFrom<'registerTargetWithMaintenanceWindow'>;

  registerTaskWithMaintenanceWindow: FunctionTypeFrom<'registerTaskWithMaintenanceWindow'>;

  removeTagsFromResource: FunctionTypeFrom<'removeTagsFromResource'>;

  resetServiceSetting: FunctionTypeFrom<'resetServiceSetting'>;

  resumeSession: FunctionTypeFrom<'resumeSession'>;

  sendAutomationSignal: FunctionTypeFrom<'sendAutomationSignal'>;

  sendCommand: FunctionTypeFrom<'sendCommand'>;

  startAssociationsOnce: FunctionTypeFrom<'startAssociationsOnce'>;

  startAutomationExecution: FunctionTypeFrom<'startAutomationExecution'>;

  startChangeRequestExecution: FunctionTypeFrom<'startChangeRequestExecution'>;

  startSession: FunctionTypeFrom<'startSession'>;

  stopAutomationExecution: FunctionTypeFrom<'stopAutomationExecution'>;

  terminateSession: FunctionTypeFrom<'terminateSession'>;

  unlabelParameterVersion: FunctionTypeFrom<'unlabelParameterVersion'>;

  updateAssociation: FunctionTypeFrom<'updateAssociation'>;

  updateAssociationStatus: FunctionTypeFrom<'updateAssociationStatus'>;

  updateDocument: FunctionTypeFrom<'updateDocument'>;

  updateDocumentDefaultVersion: FunctionTypeFrom<'updateDocumentDefaultVersion'>;

  updateDocumentMetadata: FunctionTypeFrom<'updateDocumentMetadata'>;

  updateMaintenanceWindow: FunctionTypeFrom<'updateMaintenanceWindow'>;

  updateMaintenanceWindowTarget: FunctionTypeFrom<'updateMaintenanceWindowTarget'>;

  updateMaintenanceWindowTask: FunctionTypeFrom<'updateMaintenanceWindowTask'>;

  updateManagedInstanceRole: FunctionTypeFrom<'updateManagedInstanceRole'>;

  updateOpsItem: FunctionTypeFrom<'updateOpsItem'>;

  updateOpsMetadata: FunctionTypeFrom<'updateOpsMetadata'>;

  updatePatchBaseline: FunctionTypeFrom<'updatePatchBaseline'>;

  updateResourceDataSync: FunctionTypeFrom<'updateResourceDataSync'>;

  updateServiceSetting: FunctionTypeFrom<'updateServiceSetting'>
}
 
export class SSM implements ClientType {
  private constructor(private readonly client: AWSSSM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ssm';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeActivations","describeAutomationExecutions","describeAvailablePatches","describeInstanceInformation","describeInventoryDeletions","describeMaintenanceWindowSchedule","describeMaintenanceWindows","describeOpsItems","describeParameters","describePatchBaselines","describePatchGroups","getInventory","getInventorySchema","getOpsSummary","listAssociations","listCommandInvocations","listCommands","listComplianceItems","listComplianceSummaries","listDocuments","listOpsItemEvents","listOpsItemRelatedItems","listOpsMetadata","listResourceComplianceSummaries","listResourceDataSync"] as const;
  
  async addTagsToResource(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToResource(...args).promise()
  }

  async associateOpsItemRelatedItem(...args: any): Promise<any> {
  // undefined
    return this.client.associateOpsItemRelatedItem(...args).promise()
  }

  async cancelCommand(...args: any): Promise<any> {
  // undefined
    return this.client.cancelCommand(...args).promise()
  }

  async cancelMaintenanceWindowExecution(...args: any): Promise<any> {
  // undefined
    return this.client.cancelMaintenanceWindowExecution(...args).promise()
  }

  async createActivation(...args: any): Promise<any> {
  // undefined
    return this.client.createActivation(...args).promise()
  }

  async createAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createAssociation(...args).promise()
  }

  async createAssociationBatch(...args: any): Promise<any> {
  // undefined
    return this.client.createAssociationBatch(...args).promise()
  }

  async createDocument(...args: any): Promise<any> {
  // undefined
    return this.client.createDocument(...args).promise()
  }

  async createMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.createMaintenanceWindow(...args).promise()
  }

  async createOpsItem(...args: any): Promise<any> {
  // undefined
    return this.client.createOpsItem(...args).promise()
  }

  async createOpsMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.createOpsMetadata(...args).promise()
  }

  async createPatchBaseline(...args: any): Promise<any> {
  // undefined
    return this.client.createPatchBaseline(...args).promise()
  }

  async createResourceDataSync(...args: any): Promise<any> {
  // undefined
    return this.client.createResourceDataSync(...args).promise()
  }

  async deleteActivation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteActivation(...args).promise()
  }

  async deleteAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAssociation(...args).promise()
  }

  async deleteDocument(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDocument(...args).promise()
  }

  async deleteInventory(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInventory(...args).promise()
  }

  async deleteMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMaintenanceWindow(...args).promise()
  }

  async deleteOpsMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOpsMetadata(...args).promise()
  }

  async deleteParameter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteParameter(...args).promise()
  }

  async deleteParameters(...args: any): Promise<any> {
  // undefined
    return this.client.deleteParameters(...args).promise()
  }

  async deletePatchBaseline(...args: any): Promise<any> {
  // undefined
    return this.client.deletePatchBaseline(...args).promise()
  }

  async deleteResourceDataSync(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourceDataSync(...args).promise()
  }

  async deregisterManagedInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterManagedInstance(...args).promise()
  }

  async deregisterPatchBaselineForPatchGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterPatchBaselineForPatchGroup(...args).promise()
  }

  async deregisterTargetFromMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterTargetFromMaintenanceWindow(...args).promise()
  }

  async deregisterTaskFromMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterTaskFromMaintenanceWindow(...args).promise()
  }

  async describeActivations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ActivationList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeActivations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ActivationList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.describeAssociation(...args).promise()
  }

  async describeAssociationExecutionTargets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociationExecutionTargets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAssociationExecutionTargets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AssociationExecutionTargets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAssociationExecutions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociationExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAssociationExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AssociationExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAutomationExecutions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AutomationExecutionMetadataList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAutomationExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AutomationExecutionMetadataList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAutomationStepExecutions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StepExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAutomationStepExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StepExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAvailablePatches(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Patches"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAvailablePatches(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Patches ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeDocument(...args: any): Promise<any> {
  // undefined
    return this.client.describeDocument(...args).promise()
  }

  async describeDocumentPermission(...args: any): Promise<any> {
  // undefined
    return this.client.describeDocumentPermission(...args).promise()
  }

  async describeEffectiveInstanceAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Associations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEffectiveInstanceAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Associations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEffectivePatchesForPatchBaseline(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EffectivePatches"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEffectivePatchesForPatchBaseline(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EffectivePatches ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceAssociationsStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceAssociationStatusInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceAssociationsStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceAssociationStatusInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceInformation(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceInformationList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceInformation(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceInformationList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstancePatchStates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstancePatchStates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstancePatchStates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstancePatchStates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstancePatchStatesForPatchGroup(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstancePatchStates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstancePatchStatesForPatchGroup(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstancePatchStates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstancePatches(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Patches"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstancePatches(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Patches ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInventoryDeletions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InventoryDeletions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInventoryDeletions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InventoryDeletions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowExecutionTaskInvocations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowExecutionTaskInvocationIdentities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowExecutionTaskInvocations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WindowExecutionTaskInvocationIdentities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowExecutionTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowExecutionTaskIdentities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowExecutionTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WindowExecutionTaskIdentities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowExecutions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WindowExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowSchedule(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledWindowExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowSchedule(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ScheduledWindowExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowTargets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Targets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowTargets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Targets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindows(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowIdentities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindows(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WindowIdentities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowsForTarget(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowIdentities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowsForTarget(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WindowIdentities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOpsItems(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OpsItemSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeOpsItems(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OpsItemSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeParameters(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeParameters(...args).promise()
  }

  async describePatchBaselines(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BaselineIdentities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePatchBaselines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BaselineIdentities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePatchGroupState(...args: any): Promise<any> {
  // undefined
    return this.client.describePatchGroupState(...args).promise()
  }

  async describePatchGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Mappings"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePatchGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Mappings ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePatchProperties(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Properties"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePatchProperties(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Properties ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSessions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Sessions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSessions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Sessions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disassociateOpsItemRelatedItem(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateOpsItemRelatedItem(...args).promise()
  }

  async getAutomationExecution(...args: any): Promise<any> {
  // undefined
    return this.client.getAutomationExecution(...args).promise()
  }

  async getCalendarState(...args: any): Promise<any> {
  // undefined
    return this.client.getCalendarState(...args).promise()
  }

  async getCommandInvocation(...args: any): Promise<any> {
  // undefined
    return this.client.getCommandInvocation(...args).promise()
  }

  async getConnectionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getConnectionStatus(...args).promise()
  }

  async getDefaultPatchBaseline(...args: any): Promise<any> {
  // undefined
    return this.client.getDefaultPatchBaseline(...args).promise()
  }

  async getDeployablePatchSnapshotForInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployablePatchSnapshotForInstance(...args).promise()
  }

  async getDocument(...args: any): Promise<any> {
  // undefined
    return this.client.getDocument(...args).promise()
  }

  async getInventory(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getInventory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getInventorySchema(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schemas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getInventorySchema(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Schemas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.getMaintenanceWindow(...args).promise()
  }

  async getMaintenanceWindowExecution(...args: any): Promise<any> {
  // undefined
    return this.client.getMaintenanceWindowExecution(...args).promise()
  }

  async getMaintenanceWindowExecutionTask(...args: any): Promise<any> {
  // undefined
    return this.client.getMaintenanceWindowExecutionTask(...args).promise()
  }

  async getMaintenanceWindowExecutionTaskInvocation(...args: any): Promise<any> {
  // undefined
    return this.client.getMaintenanceWindowExecutionTaskInvocation(...args).promise()
  }

  async getMaintenanceWindowTask(...args: any): Promise<any> {
  // undefined
    return this.client.getMaintenanceWindowTask(...args).promise()
  }

  async getOpsItem(...args: any): Promise<any> {
  // undefined
    return this.client.getOpsItem(...args).promise()
  }

  async getOpsMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getOpsMetadata(...args).promise()
  }

  async getOpsSummary(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entities"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getOpsSummary(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Entities ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getParameter(...args: any): Promise<any> {
  // undefined
    return this.client.getParameter(...args).promise()
  }

  async getParameterHistory(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getParameterHistory(...args).promise()
  }

  async getParameters(...args: any): Promise<any> {
  // undefined
    return this.client.getParameters(...args).promise()
  }

  async getParametersByPath(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getParametersByPath(...args).promise()
  }

  async getPatchBaseline(...args: any): Promise<any> {
  // undefined
    return this.client.getPatchBaseline(...args).promise()
  }

  async getPatchBaselineForPatchGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getPatchBaselineForPatchGroup(...args).promise()
  }

  async getServiceSetting(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceSetting(...args).promise()
  }

  async labelParameterVersion(...args: any): Promise<any> {
  // undefined
    return this.client.labelParameterVersion(...args).promise()
  }

  async listAssociationVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociationVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssociationVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AssociationVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Associations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Associations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCommandInvocations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CommandInvocations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCommandInvocations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CommandInvocations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCommands(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Commands"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCommands(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Commands ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComplianceItems(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ComplianceItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listComplianceItems(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ComplianceItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComplianceSummaries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ComplianceSummaryItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listComplianceSummaries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ComplianceSummaryItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDocumentMetadataHistory(...args: any): Promise<any> {
  // undefined
    return this.client.listDocumentMetadataHistory(...args).promise()
  }

  async listDocumentVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DocumentVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDocumentVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DocumentVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDocuments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DocumentIdentifiers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDocuments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DocumentIdentifiers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInventoryEntries(...args: any): Promise<any> {
  // undefined
    return this.client.listInventoryEntries(...args).promise()
  }

  async listOpsItemEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOpsItemEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOpsItemRelatedItems(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOpsItemRelatedItems(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOpsMetadata(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OpsMetadataList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOpsMetadata(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.OpsMetadataList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceComplianceSummaries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceComplianceSummaryItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceComplianceSummaries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceComplianceSummaryItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceDataSync(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceDataSyncItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceDataSync(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceDataSyncItems ?? [];
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

  async modifyDocumentPermission(...args: any): Promise<any> {
  // undefined
    return this.client.modifyDocumentPermission(...args).promise()
  }

  async putComplianceItems(...args: any): Promise<any> {
  // undefined
    return this.client.putComplianceItems(...args).promise()
  }

  async putInventory(...args: any): Promise<any> {
  // undefined
    return this.client.putInventory(...args).promise()
  }

  async putParameter(...args: any): Promise<any> {
  // undefined
    return this.client.putParameter(...args).promise()
  }

  async registerDefaultPatchBaseline(...args: any): Promise<any> {
  // undefined
    return this.client.registerDefaultPatchBaseline(...args).promise()
  }

  async registerPatchBaselineForPatchGroup(...args: any): Promise<any> {
  // undefined
    return this.client.registerPatchBaselineForPatchGroup(...args).promise()
  }

  async registerTargetWithMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.registerTargetWithMaintenanceWindow(...args).promise()
  }

  async registerTaskWithMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.registerTaskWithMaintenanceWindow(...args).promise()
  }

  async removeTagsFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromResource(...args).promise()
  }

  async resetServiceSetting(...args: any): Promise<any> {
  // undefined
    return this.client.resetServiceSetting(...args).promise()
  }

  async resumeSession(...args: any): Promise<any> {
  // undefined
    return this.client.resumeSession(...args).promise()
  }

  async sendAutomationSignal(...args: any): Promise<any> {
  // undefined
    return this.client.sendAutomationSignal(...args).promise()
  }

  async sendCommand(...args: any): Promise<any> {
  // undefined
    return this.client.sendCommand(...args).promise()
  }

  async startAssociationsOnce(...args: any): Promise<any> {
  // undefined
    return this.client.startAssociationsOnce(...args).promise()
  }

  async startAutomationExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startAutomationExecution(...args).promise()
  }

  async startChangeRequestExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startChangeRequestExecution(...args).promise()
  }

  async startSession(...args: any): Promise<any> {
  // undefined
    return this.client.startSession(...args).promise()
  }

  async stopAutomationExecution(...args: any): Promise<any> {
  // undefined
    return this.client.stopAutomationExecution(...args).promise()
  }

  async terminateSession(...args: any): Promise<any> {
  // undefined
    return this.client.terminateSession(...args).promise()
  }

  async unlabelParameterVersion(...args: any): Promise<any> {
  // undefined
    return this.client.unlabelParameterVersion(...args).promise()
  }

  async updateAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssociation(...args).promise()
  }

  async updateAssociationStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssociationStatus(...args).promise()
  }

  async updateDocument(...args: any): Promise<any> {
  // undefined
    return this.client.updateDocument(...args).promise()
  }

  async updateDocumentDefaultVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateDocumentDefaultVersion(...args).promise()
  }

  async updateDocumentMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateDocumentMetadata(...args).promise()
  }

  async updateMaintenanceWindow(...args: any): Promise<any> {
  // undefined
    return this.client.updateMaintenanceWindow(...args).promise()
  }

  async updateMaintenanceWindowTarget(...args: any): Promise<any> {
  // undefined
    return this.client.updateMaintenanceWindowTarget(...args).promise()
  }

  async updateMaintenanceWindowTask(...args: any): Promise<any> {
  // undefined
    return this.client.updateMaintenanceWindowTask(...args).promise()
  }

  async updateManagedInstanceRole(...args: any): Promise<any> {
  // undefined
    return this.client.updateManagedInstanceRole(...args).promise()
  }

  async updateOpsItem(...args: any): Promise<any> {
  // undefined
    return this.client.updateOpsItem(...args).promise()
  }

  async updateOpsMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.updateOpsMetadata(...args).promise()
  }

  async updatePatchBaseline(...args: any): Promise<any> {
  // undefined
    return this.client.updatePatchBaseline(...args).promise()
  }

  async updateResourceDataSync(...args: any): Promise<any> {
  // undefined
    return this.client.updateResourceDataSync(...args).promise()
  }

  async updateServiceSetting(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceSetting(...args).promise()
  }
  
  static fromClient(client: AWSSSM): ClientType {
    return new SSM(client) as any;
  }
  
  static client(options?: AWSSSM.Types.ClientConfiguration): ClientType {
    return new SSM(new AWSSSM(options)) as any;
  }
}  
