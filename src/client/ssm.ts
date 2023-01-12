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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSSM> = AWSSSM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SSM {
  private constructor(private readonly client: AWSSSM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ssm' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeActivations","describeAutomationExecutions","describeAvailablePatches","describeInstanceInformation","describeInventoryDeletions","describeMaintenanceWindowSchedule","describeMaintenanceWindows","describeOpsItems","describeParameters","describePatchBaselines","describePatchGroups","getInventory","getInventorySchema","getOpsSummary","listAssociations","listCommandInvocations","listCommands","listComplianceItems","listComplianceSummaries","listDocuments","listOpsItemEvents","listOpsItemRelatedItems","listOpsMetadata","listResourceComplianceSummaries","listResourceDataSync"] as const;
  
  addTagsToResource: (params: RawParamsFrom<'addTagsToResource'>) => Promise<ReturnTypeFrom<'addTagsToResource'>>  = async params => {
  // undefined
    return this.client.addTagsToResource(params as any).promise();
  }

  associateOpsItemRelatedItem: (params: RawParamsFrom<'associateOpsItemRelatedItem'>) => Promise<ReturnTypeFrom<'associateOpsItemRelatedItem'>>  = async params => {
  // undefined
    return this.client.associateOpsItemRelatedItem(params as any).promise();
  }

  cancelCommand: (params: RawParamsFrom<'cancelCommand'>) => Promise<ReturnTypeFrom<'cancelCommand'>>  = async params => {
  // undefined
    return this.client.cancelCommand(params as any).promise();
  }

  cancelMaintenanceWindowExecution: (params: RawParamsFrom<'cancelMaintenanceWindowExecution'>) => Promise<ReturnTypeFrom<'cancelMaintenanceWindowExecution'>>  = async params => {
  // undefined
    return this.client.cancelMaintenanceWindowExecution(params as any).promise();
  }

  createActivation: (params: RawParamsFrom<'createActivation'>) => Promise<ReturnTypeFrom<'createActivation'>>  = async params => {
  // undefined
    return this.client.createActivation(params as any).promise();
  }

  createAssociation: (params: RawParamsFrom<'createAssociation'>) => Promise<ReturnTypeFrom<'createAssociation'>>  = async params => {
  // undefined
    return this.client.createAssociation(params as any).promise();
  }

  createAssociationBatch: (params: RawParamsFrom<'createAssociationBatch'>) => Promise<ReturnTypeFrom<'createAssociationBatch'>>  = async params => {
  // undefined
    return this.client.createAssociationBatch(params as any).promise();
  }

  createDocument: (params: RawParamsFrom<'createDocument'>) => Promise<ReturnTypeFrom<'createDocument'>>  = async params => {
  // undefined
    return this.client.createDocument(params as any).promise();
  }

  createMaintenanceWindow: (params: RawParamsFrom<'createMaintenanceWindow'>) => Promise<ReturnTypeFrom<'createMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.createMaintenanceWindow(params as any).promise();
  }

  createOpsItem: (params: RawParamsFrom<'createOpsItem'>) => Promise<ReturnTypeFrom<'createOpsItem'>>  = async params => {
  // undefined
    return this.client.createOpsItem(params as any).promise();
  }

  createOpsMetadata: (params: RawParamsFrom<'createOpsMetadata'>) => Promise<ReturnTypeFrom<'createOpsMetadata'>>  = async params => {
  // undefined
    return this.client.createOpsMetadata(params as any).promise();
  }

  createPatchBaseline: (params: RawParamsFrom<'createPatchBaseline'>) => Promise<ReturnTypeFrom<'createPatchBaseline'>>  = async params => {
  // undefined
    return this.client.createPatchBaseline(params as any).promise();
  }

  createResourceDataSync: (params: RawParamsFrom<'createResourceDataSync'>) => Promise<ReturnTypeFrom<'createResourceDataSync'>>  = async params => {
  // undefined
    return this.client.createResourceDataSync(params as any).promise();
  }

  deleteActivation: (params: RawParamsFrom<'deleteActivation'>) => Promise<ReturnTypeFrom<'deleteActivation'>>  = async params => {
  // undefined
    return this.client.deleteActivation(params as any).promise();
  }

  deleteAssociation: (params: RawParamsFrom<'deleteAssociation'>) => Promise<ReturnTypeFrom<'deleteAssociation'>>  = async params => {
  // undefined
    return this.client.deleteAssociation(params as any).promise();
  }

  deleteDocument: (params: RawParamsFrom<'deleteDocument'>) => Promise<ReturnTypeFrom<'deleteDocument'>>  = async params => {
  // undefined
    return this.client.deleteDocument(params as any).promise();
  }

  deleteInventory: (params: RawParamsFrom<'deleteInventory'>) => Promise<ReturnTypeFrom<'deleteInventory'>>  = async params => {
  // undefined
    return this.client.deleteInventory(params as any).promise();
  }

  deleteMaintenanceWindow: (params: RawParamsFrom<'deleteMaintenanceWindow'>) => Promise<ReturnTypeFrom<'deleteMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.deleteMaintenanceWindow(params as any).promise();
  }

  deleteOpsMetadata: (params: RawParamsFrom<'deleteOpsMetadata'>) => Promise<ReturnTypeFrom<'deleteOpsMetadata'>>  = async params => {
  // undefined
    return this.client.deleteOpsMetadata(params as any).promise();
  }

  deleteParameter: (params: RawParamsFrom<'deleteParameter'>) => Promise<ReturnTypeFrom<'deleteParameter'>>  = async params => {
  // undefined
    return this.client.deleteParameter(params as any).promise();
  }

  deleteParameters: (params: RawParamsFrom<'deleteParameters'>) => Promise<ReturnTypeFrom<'deleteParameters'>>  = async params => {
  // undefined
    return this.client.deleteParameters(params as any).promise();
  }

  deletePatchBaseline: (params: RawParamsFrom<'deletePatchBaseline'>) => Promise<ReturnTypeFrom<'deletePatchBaseline'>>  = async params => {
  // undefined
    return this.client.deletePatchBaseline(params as any).promise();
  }

  deleteResourceDataSync: (params: RawParamsFrom<'deleteResourceDataSync'>) => Promise<ReturnTypeFrom<'deleteResourceDataSync'>>  = async params => {
  // undefined
    return this.client.deleteResourceDataSync(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deregisterManagedInstance: (params: RawParamsFrom<'deregisterManagedInstance'>) => Promise<ReturnTypeFrom<'deregisterManagedInstance'>>  = async params => {
  // undefined
    return this.client.deregisterManagedInstance(params as any).promise();
  }

  deregisterPatchBaselineForPatchGroup: (params: RawParamsFrom<'deregisterPatchBaselineForPatchGroup'>) => Promise<ReturnTypeFrom<'deregisterPatchBaselineForPatchGroup'>>  = async params => {
  // undefined
    return this.client.deregisterPatchBaselineForPatchGroup(params as any).promise();
  }

  deregisterTargetFromMaintenanceWindow: (params: RawParamsFrom<'deregisterTargetFromMaintenanceWindow'>) => Promise<ReturnTypeFrom<'deregisterTargetFromMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.deregisterTargetFromMaintenanceWindow(params as any).promise();
  }

  deregisterTaskFromMaintenanceWindow: (params: RawParamsFrom<'deregisterTaskFromMaintenanceWindow'>) => Promise<ReturnTypeFrom<'deregisterTaskFromMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.deregisterTaskFromMaintenanceWindow(params as any).promise();
  }

  async describeActivations(params: { [K in keyof ParamsFrom<'describeActivations', { next?: string, limit?: number }>]: ParamsFrom<'describeActivations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeActivations'>]-?: ReturnTypeFrom<'describeActivations'>[K]}['ActivationList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ActivationList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeActivations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeActivations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ActivationList ?? []) ? (result.ActivationList ?? []) : [result.ActivationList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeAssociation: (params: RawParamsFrom<'describeAssociation'>) => Promise<ReturnTypeFrom<'describeAssociation'>>  = async params => {
  // undefined
    return this.client.describeAssociation(params as any).promise();
  }

  async describeAssociationExecutionTargets(params: { [K in keyof ParamsFrom<'describeAssociationExecutionTargets', { next?: string, limit?: number }>]: ParamsFrom<'describeAssociationExecutionTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAssociationExecutionTargets'>]-?: ReturnTypeFrom<'describeAssociationExecutionTargets'>[K]}['AssociationExecutionTargets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociationExecutionTargets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAssociationExecutionTargets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAssociationExecutionTargets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AssociationExecutionTargets ?? []) ? (result.AssociationExecutionTargets ?? []) : [result.AssociationExecutionTargets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAssociationExecutions(params: { [K in keyof ParamsFrom<'describeAssociationExecutions', { next?: string, limit?: number }>]: ParamsFrom<'describeAssociationExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAssociationExecutions'>]-?: ReturnTypeFrom<'describeAssociationExecutions'>[K]}['AssociationExecutions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociationExecutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAssociationExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAssociationExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AssociationExecutions ?? []) ? (result.AssociationExecutions ?? []) : [result.AssociationExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAutomationExecutions(params: { [K in keyof ParamsFrom<'describeAutomationExecutions', { next?: string, limit?: number }>]: ParamsFrom<'describeAutomationExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAutomationExecutions'>]-?: ReturnTypeFrom<'describeAutomationExecutions'>[K]}['AutomationExecutionMetadataList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AutomationExecutionMetadataList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAutomationExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAutomationExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AutomationExecutionMetadataList ?? []) ? (result.AutomationExecutionMetadataList ?? []) : [result.AutomationExecutionMetadataList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAutomationStepExecutions(params: { [K in keyof ParamsFrom<'describeAutomationStepExecutions', { next?: string, limit?: number }>]: ParamsFrom<'describeAutomationStepExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAutomationStepExecutions'>]-?: ReturnTypeFrom<'describeAutomationStepExecutions'>[K]}['StepExecutions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StepExecutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAutomationStepExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAutomationStepExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StepExecutions ?? []) ? (result.StepExecutions ?? []) : [result.StepExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeAvailablePatches(params: { [K in keyof ParamsFrom<'describeAvailablePatches', { next?: string, limit?: number }>]: ParamsFrom<'describeAvailablePatches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAvailablePatches'>]-?: ReturnTypeFrom<'describeAvailablePatches'>[K]}['Patches'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Patches"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeAvailablePatches({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAvailablePatches' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Patches ?? []) ? (result.Patches ?? []) : [result.Patches]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeDocument: (params: RawParamsFrom<'describeDocument'>) => Promise<ReturnTypeFrom<'describeDocument'>>  = async params => {
  // undefined
    return this.client.describeDocument(params as any).promise();
  }

  describeDocumentPermission: (params: RawParamsFrom<'describeDocumentPermission'>) => Promise<ReturnTypeFrom<'describeDocumentPermission'>>  = async params => {
  // undefined
    return this.client.describeDocumentPermission(params as any).promise();
  }

  async describeEffectiveInstanceAssociations(params: { [K in keyof ParamsFrom<'describeEffectiveInstanceAssociations', { next?: string, limit?: number }>]: ParamsFrom<'describeEffectiveInstanceAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEffectiveInstanceAssociations'>]-?: ReturnTypeFrom<'describeEffectiveInstanceAssociations'>[K]}['Associations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Associations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEffectiveInstanceAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEffectiveInstanceAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Associations ?? []) ? (result.Associations ?? []) : [result.Associations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEffectivePatchesForPatchBaseline(params: { [K in keyof ParamsFrom<'describeEffectivePatchesForPatchBaseline', { next?: string, limit?: number }>]: ParamsFrom<'describeEffectivePatchesForPatchBaseline', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEffectivePatchesForPatchBaseline'>]-?: ReturnTypeFrom<'describeEffectivePatchesForPatchBaseline'>[K]}['EffectivePatches'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EffectivePatches"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEffectivePatchesForPatchBaseline({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEffectivePatchesForPatchBaseline' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EffectivePatches ?? []) ? (result.EffectivePatches ?? []) : [result.EffectivePatches]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceAssociationsStatus(params: { [K in keyof ParamsFrom<'describeInstanceAssociationsStatus', { next?: string, limit?: number }>]: ParamsFrom<'describeInstanceAssociationsStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstanceAssociationsStatus'>]-?: ReturnTypeFrom<'describeInstanceAssociationsStatus'>[K]}['InstanceAssociationStatusInfos'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceAssociationStatusInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceAssociationsStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstanceAssociationsStatus' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceAssociationStatusInfos ?? []) ? (result.InstanceAssociationStatusInfos ?? []) : [result.InstanceAssociationStatusInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstanceInformation(params: { [K in keyof ParamsFrom<'describeInstanceInformation', { next?: string, limit?: number }>]: ParamsFrom<'describeInstanceInformation', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstanceInformation'>]-?: ReturnTypeFrom<'describeInstanceInformation'>[K]}['InstanceInformationList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceInformationList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstanceInformation({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstanceInformation' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceInformationList ?? []) ? (result.InstanceInformationList ?? []) : [result.InstanceInformationList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstancePatchStates(params: { [K in keyof ParamsFrom<'describeInstancePatchStates', { next?: string, limit?: number }>]: ParamsFrom<'describeInstancePatchStates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstancePatchStates'>]-?: ReturnTypeFrom<'describeInstancePatchStates'>[K]}['InstancePatchStates'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstancePatchStates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstancePatchStates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstancePatchStates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstancePatchStates ?? []) ? (result.InstancePatchStates ?? []) : [result.InstancePatchStates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstancePatchStatesForPatchGroup(params: { [K in keyof ParamsFrom<'describeInstancePatchStatesForPatchGroup', { next?: string, limit?: number }>]: ParamsFrom<'describeInstancePatchStatesForPatchGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstancePatchStatesForPatchGroup'>]-?: ReturnTypeFrom<'describeInstancePatchStatesForPatchGroup'>[K]}['InstancePatchStates'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstancePatchStates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstancePatchStatesForPatchGroup({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstancePatchStatesForPatchGroup' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstancePatchStates ?? []) ? (result.InstancePatchStates ?? []) : [result.InstancePatchStates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstancePatches(params: { [K in keyof ParamsFrom<'describeInstancePatches', { next?: string, limit?: number }>]: ParamsFrom<'describeInstancePatches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstancePatches'>]-?: ReturnTypeFrom<'describeInstancePatches'>[K]}['Patches'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Patches"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInstancePatches({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInstancePatches' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Patches ?? []) ? (result.Patches ?? []) : [result.Patches]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInventoryDeletions(params: { [K in keyof ParamsFrom<'describeInventoryDeletions', { next?: string, limit?: number }>]: ParamsFrom<'describeInventoryDeletions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInventoryDeletions'>]-?: ReturnTypeFrom<'describeInventoryDeletions'>[K]}['InventoryDeletions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InventoryDeletions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeInventoryDeletions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeInventoryDeletions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InventoryDeletions ?? []) ? (result.InventoryDeletions ?? []) : [result.InventoryDeletions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowExecutionTaskInvocations(params: { [K in keyof ParamsFrom<'describeMaintenanceWindowExecutionTaskInvocations', { next?: string, limit?: number }>]: ParamsFrom<'describeMaintenanceWindowExecutionTaskInvocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMaintenanceWindowExecutionTaskInvocations'>]-?: ReturnTypeFrom<'describeMaintenanceWindowExecutionTaskInvocations'>[K]}['WindowExecutionTaskInvocationIdentities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowExecutionTaskInvocationIdentities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowExecutionTaskInvocations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMaintenanceWindowExecutionTaskInvocations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.WindowExecutionTaskInvocationIdentities ?? []) ? (result.WindowExecutionTaskInvocationIdentities ?? []) : [result.WindowExecutionTaskInvocationIdentities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowExecutionTasks(params: { [K in keyof ParamsFrom<'describeMaintenanceWindowExecutionTasks', { next?: string, limit?: number }>]: ParamsFrom<'describeMaintenanceWindowExecutionTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMaintenanceWindowExecutionTasks'>]-?: ReturnTypeFrom<'describeMaintenanceWindowExecutionTasks'>[K]}['WindowExecutionTaskIdentities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowExecutionTaskIdentities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowExecutionTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMaintenanceWindowExecutionTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.WindowExecutionTaskIdentities ?? []) ? (result.WindowExecutionTaskIdentities ?? []) : [result.WindowExecutionTaskIdentities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowExecutions(params: { [K in keyof ParamsFrom<'describeMaintenanceWindowExecutions', { next?: string, limit?: number }>]: ParamsFrom<'describeMaintenanceWindowExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMaintenanceWindowExecutions'>]-?: ReturnTypeFrom<'describeMaintenanceWindowExecutions'>[K]}['WindowExecutions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowExecutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMaintenanceWindowExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.WindowExecutions ?? []) ? (result.WindowExecutions ?? []) : [result.WindowExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowSchedule(params: { [K in keyof ParamsFrom<'describeMaintenanceWindowSchedule', { next?: string, limit?: number }>]: ParamsFrom<'describeMaintenanceWindowSchedule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMaintenanceWindowSchedule'>]-?: ReturnTypeFrom<'describeMaintenanceWindowSchedule'>[K]}['ScheduledWindowExecutions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduledWindowExecutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowSchedule({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMaintenanceWindowSchedule' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScheduledWindowExecutions ?? []) ? (result.ScheduledWindowExecutions ?? []) : [result.ScheduledWindowExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowTargets(params: { [K in keyof ParamsFrom<'describeMaintenanceWindowTargets', { next?: string, limit?: number }>]: ParamsFrom<'describeMaintenanceWindowTargets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMaintenanceWindowTargets'>]-?: ReturnTypeFrom<'describeMaintenanceWindowTargets'>[K]}['Targets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Targets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowTargets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMaintenanceWindowTargets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Targets ?? []) ? (result.Targets ?? []) : [result.Targets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowTasks(params: { [K in keyof ParamsFrom<'describeMaintenanceWindowTasks', { next?: string, limit?: number }>]: ParamsFrom<'describeMaintenanceWindowTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMaintenanceWindowTasks'>]-?: ReturnTypeFrom<'describeMaintenanceWindowTasks'>[K]}['Tasks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMaintenanceWindowTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tasks ?? []) ? (result.Tasks ?? []) : [result.Tasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindows(params: { [K in keyof ParamsFrom<'describeMaintenanceWindows', { next?: string, limit?: number }>]: ParamsFrom<'describeMaintenanceWindows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMaintenanceWindows'>]-?: ReturnTypeFrom<'describeMaintenanceWindows'>[K]}['WindowIdentities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowIdentities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMaintenanceWindows' })).toString('base64') : undefined;
    const member = (Array.isArray(result.WindowIdentities ?? []) ? (result.WindowIdentities ?? []) : [result.WindowIdentities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeMaintenanceWindowsForTarget(params: { [K in keyof ParamsFrom<'describeMaintenanceWindowsForTarget', { next?: string, limit?: number }>]: ParamsFrom<'describeMaintenanceWindowsForTarget', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeMaintenanceWindowsForTarget'>]-?: ReturnTypeFrom<'describeMaintenanceWindowsForTarget'>[K]}['WindowIdentities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"WindowIdentities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeMaintenanceWindowsForTarget({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeMaintenanceWindowsForTarget' })).toString('base64') : undefined;
    const member = (Array.isArray(result.WindowIdentities ?? []) ? (result.WindowIdentities ?? []) : [result.WindowIdentities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeOpsItems(params: { [K in keyof ParamsFrom<'describeOpsItems', { next?: string, limit?: number }>]: ParamsFrom<'describeOpsItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeOpsItems'>]-?: ReturnTypeFrom<'describeOpsItems'>[K]}['OpsItemSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OpsItemSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeOpsItems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeOpsItems' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OpsItemSummaries ?? []) ? (result.OpsItemSummaries ?? []) : [result.OpsItemSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeParameters: (params: RawParamsFrom<'describeParameters'>) => Promise<ReturnTypeFrom<'describeParameters'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeParameters(params as any).promise();
  }

  async describePatchBaselines(params: { [K in keyof ParamsFrom<'describePatchBaselines', { next?: string, limit?: number }>]: ParamsFrom<'describePatchBaselines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePatchBaselines'>]-?: ReturnTypeFrom<'describePatchBaselines'>[K]}['BaselineIdentities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BaselineIdentities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePatchBaselines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePatchBaselines' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BaselineIdentities ?? []) ? (result.BaselineIdentities ?? []) : [result.BaselineIdentities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describePatchGroupState: (params: RawParamsFrom<'describePatchGroupState'>) => Promise<ReturnTypeFrom<'describePatchGroupState'>>  = async params => {
  // undefined
    return this.client.describePatchGroupState(params as any).promise();
  }

  async describePatchGroups(params: { [K in keyof ParamsFrom<'describePatchGroups', { next?: string, limit?: number }>]: ParamsFrom<'describePatchGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePatchGroups'>]-?: ReturnTypeFrom<'describePatchGroups'>[K]}['Mappings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Mappings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePatchGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePatchGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Mappings ?? []) ? (result.Mappings ?? []) : [result.Mappings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describePatchProperties(params: { [K in keyof ParamsFrom<'describePatchProperties', { next?: string, limit?: number }>]: ParamsFrom<'describePatchProperties', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describePatchProperties'>]-?: ReturnTypeFrom<'describePatchProperties'>[K]}['Properties'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Properties"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describePatchProperties({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describePatchProperties' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Properties ?? []) ? (result.Properties ?? []) : [result.Properties]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSessions(params: { [K in keyof ParamsFrom<'describeSessions', { next?: string, limit?: number }>]: ParamsFrom<'describeSessions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSessions'>]-?: ReturnTypeFrom<'describeSessions'>[K]}['Sessions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Sessions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSessions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSessions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Sessions ?? []) ? (result.Sessions ?? []) : [result.Sessions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disassociateOpsItemRelatedItem: (params: RawParamsFrom<'disassociateOpsItemRelatedItem'>) => Promise<ReturnTypeFrom<'disassociateOpsItemRelatedItem'>>  = async params => {
  // undefined
    return this.client.disassociateOpsItemRelatedItem(params as any).promise();
  }

  getAutomationExecution: (params: RawParamsFrom<'getAutomationExecution'>) => Promise<ReturnTypeFrom<'getAutomationExecution'>>  = async params => {
  // undefined
    return this.client.getAutomationExecution(params as any).promise();
  }

  getCalendarState: (params: RawParamsFrom<'getCalendarState'>) => Promise<ReturnTypeFrom<'getCalendarState'>>  = async params => {
  // undefined
    return this.client.getCalendarState(params as any).promise();
  }

  getCommandInvocation: (params: RawParamsFrom<'getCommandInvocation'>) => Promise<ReturnTypeFrom<'getCommandInvocation'>>  = async params => {
  // undefined
    return this.client.getCommandInvocation(params as any).promise();
  }

  getConnectionStatus: (params: RawParamsFrom<'getConnectionStatus'>) => Promise<ReturnTypeFrom<'getConnectionStatus'>>  = async params => {
  // undefined
    return this.client.getConnectionStatus(params as any).promise();
  }

  getDefaultPatchBaseline: (params: RawParamsFrom<'getDefaultPatchBaseline'>) => Promise<ReturnTypeFrom<'getDefaultPatchBaseline'>>  = async params => {
  // undefined
    return this.client.getDefaultPatchBaseline(params as any).promise();
  }

  getDeployablePatchSnapshotForInstance: (params: RawParamsFrom<'getDeployablePatchSnapshotForInstance'>) => Promise<ReturnTypeFrom<'getDeployablePatchSnapshotForInstance'>>  = async params => {
  // undefined
    return this.client.getDeployablePatchSnapshotForInstance(params as any).promise();
  }

  getDocument: (params: RawParamsFrom<'getDocument'>) => Promise<ReturnTypeFrom<'getDocument'>>  = async params => {
  // undefined
    return this.client.getDocument(params as any).promise();
  }

  async getInventory(params: { [K in keyof ParamsFrom<'getInventory', { next?: string, limit?: number }>]: ParamsFrom<'getInventory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getInventory'>]-?: ReturnTypeFrom<'getInventory'>[K]}['Entities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getInventory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getInventory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Entities ?? []) ? (result.Entities ?? []) : [result.Entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getInventorySchema(params: { [K in keyof ParamsFrom<'getInventorySchema', { next?: string, limit?: number }>]: ParamsFrom<'getInventorySchema', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getInventorySchema'>]-?: ReturnTypeFrom<'getInventorySchema'>[K]}['Schemas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schemas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getInventorySchema({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getInventorySchema' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Schemas ?? []) ? (result.Schemas ?? []) : [result.Schemas]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getMaintenanceWindow: (params: RawParamsFrom<'getMaintenanceWindow'>) => Promise<ReturnTypeFrom<'getMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.getMaintenanceWindow(params as any).promise();
  }

  getMaintenanceWindowExecution: (params: RawParamsFrom<'getMaintenanceWindowExecution'>) => Promise<ReturnTypeFrom<'getMaintenanceWindowExecution'>>  = async params => {
  // undefined
    return this.client.getMaintenanceWindowExecution(params as any).promise();
  }

  getMaintenanceWindowExecutionTask: (params: RawParamsFrom<'getMaintenanceWindowExecutionTask'>) => Promise<ReturnTypeFrom<'getMaintenanceWindowExecutionTask'>>  = async params => {
  // undefined
    return this.client.getMaintenanceWindowExecutionTask(params as any).promise();
  }

  getMaintenanceWindowExecutionTaskInvocation: (params: RawParamsFrom<'getMaintenanceWindowExecutionTaskInvocation'>) => Promise<ReturnTypeFrom<'getMaintenanceWindowExecutionTaskInvocation'>>  = async params => {
  // undefined
    return this.client.getMaintenanceWindowExecutionTaskInvocation(params as any).promise();
  }

  getMaintenanceWindowTask: (params: RawParamsFrom<'getMaintenanceWindowTask'>) => Promise<ReturnTypeFrom<'getMaintenanceWindowTask'>>  = async params => {
  // undefined
    return this.client.getMaintenanceWindowTask(params as any).promise();
  }

  getOpsItem: (params: RawParamsFrom<'getOpsItem'>) => Promise<ReturnTypeFrom<'getOpsItem'>>  = async params => {
  // undefined
    return this.client.getOpsItem(params as any).promise();
  }

  getOpsMetadata: (params: RawParamsFrom<'getOpsMetadata'>) => Promise<ReturnTypeFrom<'getOpsMetadata'>>  = async params => {
  // undefined
    return this.client.getOpsMetadata(params as any).promise();
  }

  async getOpsSummary(params: { [K in keyof ParamsFrom<'getOpsSummary', { next?: string, limit?: number }>]: ParamsFrom<'getOpsSummary', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getOpsSummary'>]-?: ReturnTypeFrom<'getOpsSummary'>[K]}['Entities'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Entities"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getOpsSummary({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getOpsSummary' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Entities ?? []) ? (result.Entities ?? []) : [result.Entities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getParameter: (params: RawParamsFrom<'getParameter'>) => Promise<ReturnTypeFrom<'getParameter'>>  = async params => {
  // undefined
    return this.client.getParameter(params as any).promise();
  }

  getParameterHistory: (params: RawParamsFrom<'getParameterHistory'>) => Promise<ReturnTypeFrom<'getParameterHistory'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getParameterHistory(params as any).promise();
  }

  getParameters: (params: RawParamsFrom<'getParameters'>) => Promise<ReturnTypeFrom<'getParameters'>>  = async params => {
  // undefined
    return this.client.getParameters(params as any).promise();
  }

  getParametersByPath: (params: RawParamsFrom<'getParametersByPath'>) => Promise<ReturnTypeFrom<'getParametersByPath'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getParametersByPath(params as any).promise();
  }

  getPatchBaseline: (params: RawParamsFrom<'getPatchBaseline'>) => Promise<ReturnTypeFrom<'getPatchBaseline'>>  = async params => {
  // undefined
    return this.client.getPatchBaseline(params as any).promise();
  }

  getPatchBaselineForPatchGroup: (params: RawParamsFrom<'getPatchBaselineForPatchGroup'>) => Promise<ReturnTypeFrom<'getPatchBaselineForPatchGroup'>>  = async params => {
  // undefined
    return this.client.getPatchBaselineForPatchGroup(params as any).promise();
  }

  async getResourcePolicies(params: { [K in keyof ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>]: ParamsFrom<'getResourcePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getResourcePolicies'>]-?: ReturnTypeFrom<'getResourcePolicies'>[K]}['Policies'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Policies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getResourcePolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'getResourcePolicies' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Policies ?? []) ? (result.Policies ?? []) : [result.Policies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getServiceSetting: (params: RawParamsFrom<'getServiceSetting'>) => Promise<ReturnTypeFrom<'getServiceSetting'>>  = async params => {
  // undefined
    return this.client.getServiceSetting(params as any).promise();
  }

  labelParameterVersion: (params: RawParamsFrom<'labelParameterVersion'>) => Promise<ReturnTypeFrom<'labelParameterVersion'>>  = async params => {
  // undefined
    return this.client.labelParameterVersion(params as any).promise();
  }

  async listAssociationVersions(params: { [K in keyof ParamsFrom<'listAssociationVersions', { next?: string, limit?: number }>]: ParamsFrom<'listAssociationVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssociationVersions'>]-?: ReturnTypeFrom<'listAssociationVersions'>[K]}['AssociationVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociationVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssociationVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAssociationVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AssociationVersions ?? []) ? (result.AssociationVersions ?? []) : [result.AssociationVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAssociations(params: { [K in keyof ParamsFrom<'listAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAssociations'>]-?: ReturnTypeFrom<'listAssociations'>[K]}['Associations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Associations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Associations ?? []) ? (result.Associations ?? []) : [result.Associations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCommandInvocations(params: { [K in keyof ParamsFrom<'listCommandInvocations', { next?: string, limit?: number }>]: ParamsFrom<'listCommandInvocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCommandInvocations'>]-?: ReturnTypeFrom<'listCommandInvocations'>[K]}['CommandInvocations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CommandInvocations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCommandInvocations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCommandInvocations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CommandInvocations ?? []) ? (result.CommandInvocations ?? []) : [result.CommandInvocations]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCommands(params: { [K in keyof ParamsFrom<'listCommands', { next?: string, limit?: number }>]: ParamsFrom<'listCommands', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCommands'>]-?: ReturnTypeFrom<'listCommands'>[K]}['Commands'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Commands"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCommands({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCommands' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Commands ?? []) ? (result.Commands ?? []) : [result.Commands]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComplianceItems(params: { [K in keyof ParamsFrom<'listComplianceItems', { next?: string, limit?: number }>]: ParamsFrom<'listComplianceItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComplianceItems'>]-?: ReturnTypeFrom<'listComplianceItems'>[K]}['ComplianceItems'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ComplianceItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listComplianceItems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listComplianceItems' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ComplianceItems ?? []) ? (result.ComplianceItems ?? []) : [result.ComplianceItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listComplianceSummaries(params: { [K in keyof ParamsFrom<'listComplianceSummaries', { next?: string, limit?: number }>]: ParamsFrom<'listComplianceSummaries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listComplianceSummaries'>]-?: ReturnTypeFrom<'listComplianceSummaries'>[K]}['ComplianceSummaryItems'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ComplianceSummaryItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listComplianceSummaries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listComplianceSummaries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ComplianceSummaryItems ?? []) ? (result.ComplianceSummaryItems ?? []) : [result.ComplianceSummaryItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listDocumentMetadataHistory: (params: RawParamsFrom<'listDocumentMetadataHistory'>) => Promise<ReturnTypeFrom<'listDocumentMetadataHistory'>>  = async params => {
  // undefined
    return this.client.listDocumentMetadataHistory(params as any).promise();
  }

  async listDocumentVersions(params: { [K in keyof ParamsFrom<'listDocumentVersions', { next?: string, limit?: number }>]: ParamsFrom<'listDocumentVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDocumentVersions'>]-?: ReturnTypeFrom<'listDocumentVersions'>[K]}['DocumentVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DocumentVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDocumentVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDocumentVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DocumentVersions ?? []) ? (result.DocumentVersions ?? []) : [result.DocumentVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDocuments(params: { [K in keyof ParamsFrom<'listDocuments', { next?: string, limit?: number }>]: ParamsFrom<'listDocuments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDocuments'>]-?: ReturnTypeFrom<'listDocuments'>[K]}['DocumentIdentifiers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DocumentIdentifiers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDocuments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDocuments' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DocumentIdentifiers ?? []) ? (result.DocumentIdentifiers ?? []) : [result.DocumentIdentifiers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listInventoryEntries: (params: RawParamsFrom<'listInventoryEntries'>) => Promise<ReturnTypeFrom<'listInventoryEntries'>>  = async params => {
  // undefined
    return this.client.listInventoryEntries(params as any).promise();
  }

  async listOpsItemEvents(params: { [K in keyof ParamsFrom<'listOpsItemEvents', { next?: string, limit?: number }>]: ParamsFrom<'listOpsItemEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOpsItemEvents'>]-?: ReturnTypeFrom<'listOpsItemEvents'>[K]}['Summaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOpsItemEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOpsItemEvents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Summaries ?? []) ? (result.Summaries ?? []) : [result.Summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOpsItemRelatedItems(params: { [K in keyof ParamsFrom<'listOpsItemRelatedItems', { next?: string, limit?: number }>]: ParamsFrom<'listOpsItemRelatedItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOpsItemRelatedItems'>]-?: ReturnTypeFrom<'listOpsItemRelatedItems'>[K]}['Summaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOpsItemRelatedItems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOpsItemRelatedItems' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Summaries ?? []) ? (result.Summaries ?? []) : [result.Summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOpsMetadata(params: { [K in keyof ParamsFrom<'listOpsMetadata', { next?: string, limit?: number }>]: ParamsFrom<'listOpsMetadata', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOpsMetadata'>]-?: ReturnTypeFrom<'listOpsMetadata'>[K]}['OpsMetadataList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"OpsMetadataList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listOpsMetadata({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listOpsMetadata' })).toString('base64') : undefined;
    const member = (Array.isArray(result.OpsMetadataList ?? []) ? (result.OpsMetadataList ?? []) : [result.OpsMetadataList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceComplianceSummaries(params: { [K in keyof ParamsFrom<'listResourceComplianceSummaries', { next?: string, limit?: number }>]: ParamsFrom<'listResourceComplianceSummaries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceComplianceSummaries'>]-?: ReturnTypeFrom<'listResourceComplianceSummaries'>[K]}['ResourceComplianceSummaryItems'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceComplianceSummaryItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceComplianceSummaries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResourceComplianceSummaries' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ResourceComplianceSummaryItems ?? []) ? (result.ResourceComplianceSummaryItems ?? []) : [result.ResourceComplianceSummaryItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceDataSync(params: { [K in keyof ParamsFrom<'listResourceDataSync', { next?: string, limit?: number }>]: ParamsFrom<'listResourceDataSync', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceDataSync'>]-?: ReturnTypeFrom<'listResourceDataSync'>[K]}['ResourceDataSyncItems'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceDataSyncItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceDataSync({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResourceDataSync' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ResourceDataSyncItems ?? []) ? (result.ResourceDataSyncItems ?? []) : [result.ResourceDataSyncItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  modifyDocumentPermission: (params: RawParamsFrom<'modifyDocumentPermission'>) => Promise<ReturnTypeFrom<'modifyDocumentPermission'>>  = async params => {
  // undefined
    return this.client.modifyDocumentPermission(params as any).promise();
  }

  putComplianceItems: (params: RawParamsFrom<'putComplianceItems'>) => Promise<ReturnTypeFrom<'putComplianceItems'>>  = async params => {
  // undefined
    return this.client.putComplianceItems(params as any).promise();
  }

  putInventory: (params: RawParamsFrom<'putInventory'>) => Promise<ReturnTypeFrom<'putInventory'>>  = async params => {
  // undefined
    return this.client.putInventory(params as any).promise();
  }

  putParameter: (params: RawParamsFrom<'putParameter'>) => Promise<ReturnTypeFrom<'putParameter'>>  = async params => {
  // undefined
    return this.client.putParameter(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  registerDefaultPatchBaseline: (params: RawParamsFrom<'registerDefaultPatchBaseline'>) => Promise<ReturnTypeFrom<'registerDefaultPatchBaseline'>>  = async params => {
  // undefined
    return this.client.registerDefaultPatchBaseline(params as any).promise();
  }

  registerPatchBaselineForPatchGroup: (params: RawParamsFrom<'registerPatchBaselineForPatchGroup'>) => Promise<ReturnTypeFrom<'registerPatchBaselineForPatchGroup'>>  = async params => {
  // undefined
    return this.client.registerPatchBaselineForPatchGroup(params as any).promise();
  }

  registerTargetWithMaintenanceWindow: (params: RawParamsFrom<'registerTargetWithMaintenanceWindow'>) => Promise<ReturnTypeFrom<'registerTargetWithMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.registerTargetWithMaintenanceWindow(params as any).promise();
  }

  registerTaskWithMaintenanceWindow: (params: RawParamsFrom<'registerTaskWithMaintenanceWindow'>) => Promise<ReturnTypeFrom<'registerTaskWithMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.registerTaskWithMaintenanceWindow(params as any).promise();
  }

  removeTagsFromResource: (params: RawParamsFrom<'removeTagsFromResource'>) => Promise<ReturnTypeFrom<'removeTagsFromResource'>>  = async params => {
  // undefined
    return this.client.removeTagsFromResource(params as any).promise();
  }

  resetServiceSetting: (params: RawParamsFrom<'resetServiceSetting'>) => Promise<ReturnTypeFrom<'resetServiceSetting'>>  = async params => {
  // undefined
    return this.client.resetServiceSetting(params as any).promise();
  }

  resumeSession: (params: RawParamsFrom<'resumeSession'>) => Promise<ReturnTypeFrom<'resumeSession'>>  = async params => {
  // undefined
    return this.client.resumeSession(params as any).promise();
  }

  sendAutomationSignal: (params: RawParamsFrom<'sendAutomationSignal'>) => Promise<ReturnTypeFrom<'sendAutomationSignal'>>  = async params => {
  // undefined
    return this.client.sendAutomationSignal(params as any).promise();
  }

  sendCommand: (params: RawParamsFrom<'sendCommand'>) => Promise<ReturnTypeFrom<'sendCommand'>>  = async params => {
  // undefined
    return this.client.sendCommand(params as any).promise();
  }

  startAssociationsOnce: (params: RawParamsFrom<'startAssociationsOnce'>) => Promise<ReturnTypeFrom<'startAssociationsOnce'>>  = async params => {
  // undefined
    return this.client.startAssociationsOnce(params as any).promise();
  }

  startAutomationExecution: (params: RawParamsFrom<'startAutomationExecution'>) => Promise<ReturnTypeFrom<'startAutomationExecution'>>  = async params => {
  // undefined
    return this.client.startAutomationExecution(params as any).promise();
  }

  startChangeRequestExecution: (params: RawParamsFrom<'startChangeRequestExecution'>) => Promise<ReturnTypeFrom<'startChangeRequestExecution'>>  = async params => {
  // undefined
    return this.client.startChangeRequestExecution(params as any).promise();
  }

  startSession: (params: RawParamsFrom<'startSession'>) => Promise<ReturnTypeFrom<'startSession'>>  = async params => {
  // undefined
    return this.client.startSession(params as any).promise();
  }

  stopAutomationExecution: (params: RawParamsFrom<'stopAutomationExecution'>) => Promise<ReturnTypeFrom<'stopAutomationExecution'>>  = async params => {
  // undefined
    return this.client.stopAutomationExecution(params as any).promise();
  }

  terminateSession: (params: RawParamsFrom<'terminateSession'>) => Promise<ReturnTypeFrom<'terminateSession'>>  = async params => {
  // undefined
    return this.client.terminateSession(params as any).promise();
  }

  unlabelParameterVersion: (params: RawParamsFrom<'unlabelParameterVersion'>) => Promise<ReturnTypeFrom<'unlabelParameterVersion'>>  = async params => {
  // undefined
    return this.client.unlabelParameterVersion(params as any).promise();
  }

  updateAssociation: (params: RawParamsFrom<'updateAssociation'>) => Promise<ReturnTypeFrom<'updateAssociation'>>  = async params => {
  // undefined
    return this.client.updateAssociation(params as any).promise();
  }

  updateAssociationStatus: (params: RawParamsFrom<'updateAssociationStatus'>) => Promise<ReturnTypeFrom<'updateAssociationStatus'>>  = async params => {
  // undefined
    return this.client.updateAssociationStatus(params as any).promise();
  }

  updateDocument: (params: RawParamsFrom<'updateDocument'>) => Promise<ReturnTypeFrom<'updateDocument'>>  = async params => {
  // undefined
    return this.client.updateDocument(params as any).promise();
  }

  updateDocumentDefaultVersion: (params: RawParamsFrom<'updateDocumentDefaultVersion'>) => Promise<ReturnTypeFrom<'updateDocumentDefaultVersion'>>  = async params => {
  // undefined
    return this.client.updateDocumentDefaultVersion(params as any).promise();
  }

  updateDocumentMetadata: (params: RawParamsFrom<'updateDocumentMetadata'>) => Promise<ReturnTypeFrom<'updateDocumentMetadata'>>  = async params => {
  // undefined
    return this.client.updateDocumentMetadata(params as any).promise();
  }

  updateMaintenanceWindow: (params: RawParamsFrom<'updateMaintenanceWindow'>) => Promise<ReturnTypeFrom<'updateMaintenanceWindow'>>  = async params => {
  // undefined
    return this.client.updateMaintenanceWindow(params as any).promise();
  }

  updateMaintenanceWindowTarget: (params: RawParamsFrom<'updateMaintenanceWindowTarget'>) => Promise<ReturnTypeFrom<'updateMaintenanceWindowTarget'>>  = async params => {
  // undefined
    return this.client.updateMaintenanceWindowTarget(params as any).promise();
  }

  updateMaintenanceWindowTask: (params: RawParamsFrom<'updateMaintenanceWindowTask'>) => Promise<ReturnTypeFrom<'updateMaintenanceWindowTask'>>  = async params => {
  // undefined
    return this.client.updateMaintenanceWindowTask(params as any).promise();
  }

  updateManagedInstanceRole: (params: RawParamsFrom<'updateManagedInstanceRole'>) => Promise<ReturnTypeFrom<'updateManagedInstanceRole'>>  = async params => {
  // undefined
    return this.client.updateManagedInstanceRole(params as any).promise();
  }

  updateOpsItem: (params: RawParamsFrom<'updateOpsItem'>) => Promise<ReturnTypeFrom<'updateOpsItem'>>  = async params => {
  // undefined
    return this.client.updateOpsItem(params as any).promise();
  }

  updateOpsMetadata: (params: RawParamsFrom<'updateOpsMetadata'>) => Promise<ReturnTypeFrom<'updateOpsMetadata'>>  = async params => {
  // undefined
    return this.client.updateOpsMetadata(params as any).promise();
  }

  updatePatchBaseline: (params: RawParamsFrom<'updatePatchBaseline'>) => Promise<ReturnTypeFrom<'updatePatchBaseline'>>  = async params => {
  // undefined
    return this.client.updatePatchBaseline(params as any).promise();
  }

  updateResourceDataSync: (params: RawParamsFrom<'updateResourceDataSync'>) => Promise<ReturnTypeFrom<'updateResourceDataSync'>>  = async params => {
  // undefined
    return this.client.updateResourceDataSync(params as any).promise();
  }

  updateServiceSetting: (params: RawParamsFrom<'updateServiceSetting'>) => Promise<ReturnTypeFrom<'updateServiceSetting'>>  = async params => {
  // undefined
    return this.client.updateServiceSetting(params as any).promise();
  }
  
  static fromClient(client: AWSSSM): SSM {
    return new SSM(client) as any;
  }
  
  static client(options?: AWSSSM.Types.ClientConfiguration): SSM {
    return new SSM(new AWSSSM(options)) as any;
  }
}  
