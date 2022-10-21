import { Request, Backup as AWSBackup } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSBackup> = AWSBackup[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSBackup> = AWSBackup[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSBackup[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSBackup, Extras> = AWSBackup[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSBackup> = AWSBackup[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Backup {
  private constructor(private readonly client: AWSBackup) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'backup' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = ["listBackupJobs","listBackupPlanTemplates","listBackupPlans","listBackupVaults","listCopyJobs","listFrameworks","listProtectedResources","listReportJobs","listReportPlans","listRestoreJobs"] as const;
  
  createBackupPlan: (params: RawParamsFrom<'createBackupPlan'>) => Promise<ReturnTypeFrom<'createBackupPlan'>>  = async params => {
  // undefined
    return this.client.createBackupPlan(params as any).promise();
  }

  createBackupSelection: (params: RawParamsFrom<'createBackupSelection'>) => Promise<ReturnTypeFrom<'createBackupSelection'>>  = async params => {
  // undefined
    return this.client.createBackupSelection(params as any).promise();
  }

  createBackupVault: (params: RawParamsFrom<'createBackupVault'>) => Promise<ReturnTypeFrom<'createBackupVault'>>  = async params => {
  // undefined
    return this.client.createBackupVault(params as any).promise();
  }

  createFramework: (params: RawParamsFrom<'createFramework'>) => Promise<ReturnTypeFrom<'createFramework'>>  = async params => {
  // undefined
    return this.client.createFramework(params as any).promise();
  }

  createReportPlan: (params: RawParamsFrom<'createReportPlan'>) => Promise<ReturnTypeFrom<'createReportPlan'>>  = async params => {
  // undefined
    return this.client.createReportPlan(params as any).promise();
  }

  deleteBackupPlan: (params: RawParamsFrom<'deleteBackupPlan'>) => Promise<ReturnTypeFrom<'deleteBackupPlan'>>  = async params => {
  // undefined
    return this.client.deleteBackupPlan(params as any).promise();
  }

  deleteBackupSelection: (params: RawParamsFrom<'deleteBackupSelection'>) => Promise<ReturnTypeFrom<'deleteBackupSelection'>>  = async params => {
  // undefined
    return this.client.deleteBackupSelection(params as any).promise();
  }

  deleteBackupVault: (params: RawParamsFrom<'deleteBackupVault'>) => Promise<ReturnTypeFrom<'deleteBackupVault'>>  = async params => {
  // undefined
    return this.client.deleteBackupVault(params as any).promise();
  }

  deleteBackupVaultAccessPolicy: (params: RawParamsFrom<'deleteBackupVaultAccessPolicy'>) => Promise<ReturnTypeFrom<'deleteBackupVaultAccessPolicy'>>  = async params => {
  // undefined
    return this.client.deleteBackupVaultAccessPolicy(params as any).promise();
  }

  deleteBackupVaultLockConfiguration: (params: RawParamsFrom<'deleteBackupVaultLockConfiguration'>) => Promise<ReturnTypeFrom<'deleteBackupVaultLockConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteBackupVaultLockConfiguration(params as any).promise();
  }

  deleteBackupVaultNotifications: (params: RawParamsFrom<'deleteBackupVaultNotifications'>) => Promise<ReturnTypeFrom<'deleteBackupVaultNotifications'>>  = async params => {
  // undefined
    return this.client.deleteBackupVaultNotifications(params as any).promise();
  }

  deleteFramework: (params: RawParamsFrom<'deleteFramework'>) => Promise<ReturnTypeFrom<'deleteFramework'>>  = async params => {
  // undefined
    return this.client.deleteFramework(params as any).promise();
  }

  deleteRecoveryPoint: (params: RawParamsFrom<'deleteRecoveryPoint'>) => Promise<ReturnTypeFrom<'deleteRecoveryPoint'>>  = async params => {
  // undefined
    return this.client.deleteRecoveryPoint(params as any).promise();
  }

  deleteReportPlan: (params: RawParamsFrom<'deleteReportPlan'>) => Promise<ReturnTypeFrom<'deleteReportPlan'>>  = async params => {
  // undefined
    return this.client.deleteReportPlan(params as any).promise();
  }

  describeBackupJob: (params: RawParamsFrom<'describeBackupJob'>) => Promise<ReturnTypeFrom<'describeBackupJob'>>  = async params => {
  // undefined
    return this.client.describeBackupJob(params as any).promise();
  }

  describeBackupVault: (params: RawParamsFrom<'describeBackupVault'>) => Promise<ReturnTypeFrom<'describeBackupVault'>>  = async params => {
  // undefined
    return this.client.describeBackupVault(params as any).promise();
  }

  describeCopyJob: (params: RawParamsFrom<'describeCopyJob'>) => Promise<ReturnTypeFrom<'describeCopyJob'>>  = async params => {
  // undefined
    return this.client.describeCopyJob(params as any).promise();
  }

  describeFramework: (params: RawParamsFrom<'describeFramework'>) => Promise<ReturnTypeFrom<'describeFramework'>>  = async params => {
  // undefined
    return this.client.describeFramework(params as any).promise();
  }

  describeGlobalSettings: (params: RawParamsFrom<'describeGlobalSettings'>) => Promise<ReturnTypeFrom<'describeGlobalSettings'>>  = async params => {
  // undefined
    return this.client.describeGlobalSettings(params as any).promise();
  }

  describeProtectedResource: (params: RawParamsFrom<'describeProtectedResource'>) => Promise<ReturnTypeFrom<'describeProtectedResource'>>  = async params => {
  // undefined
    return this.client.describeProtectedResource(params as any).promise();
  }

  describeRecoveryPoint: (params: RawParamsFrom<'describeRecoveryPoint'>) => Promise<ReturnTypeFrom<'describeRecoveryPoint'>>  = async params => {
  // undefined
    return this.client.describeRecoveryPoint(params as any).promise();
  }

  describeRegionSettings: (params: RawParamsFrom<'describeRegionSettings'>) => Promise<ReturnTypeFrom<'describeRegionSettings'>>  = async params => {
  // undefined
    return this.client.describeRegionSettings(params as any).promise();
  }

  describeReportJob: (params: RawParamsFrom<'describeReportJob'>) => Promise<ReturnTypeFrom<'describeReportJob'>>  = async params => {
  // undefined
    return this.client.describeReportJob(params as any).promise();
  }

  describeReportPlan: (params: RawParamsFrom<'describeReportPlan'>) => Promise<ReturnTypeFrom<'describeReportPlan'>>  = async params => {
  // undefined
    return this.client.describeReportPlan(params as any).promise();
  }

  describeRestoreJob: (params: RawParamsFrom<'describeRestoreJob'>) => Promise<ReturnTypeFrom<'describeRestoreJob'>>  = async params => {
  // undefined
    return this.client.describeRestoreJob(params as any).promise();
  }

  disassociateRecoveryPoint: (params: RawParamsFrom<'disassociateRecoveryPoint'>) => Promise<ReturnTypeFrom<'disassociateRecoveryPoint'>>  = async params => {
  // undefined
    return this.client.disassociateRecoveryPoint(params as any).promise();
  }

  exportBackupPlanTemplate: (params: RawParamsFrom<'exportBackupPlanTemplate'>) => Promise<ReturnTypeFrom<'exportBackupPlanTemplate'>>  = async params => {
  // undefined
    return this.client.exportBackupPlanTemplate(params as any).promise();
  }

  getBackupPlan: (params: RawParamsFrom<'getBackupPlan'>) => Promise<ReturnTypeFrom<'getBackupPlan'>>  = async params => {
  // undefined
    return this.client.getBackupPlan(params as any).promise();
  }

  getBackupPlanFromJSON: (params: RawParamsFrom<'getBackupPlanFromJSON'>) => Promise<ReturnTypeFrom<'getBackupPlanFromJSON'>>  = async params => {
  // undefined
    return this.client.getBackupPlanFromJSON(params as any).promise();
  }

  getBackupPlanFromTemplate: (params: RawParamsFrom<'getBackupPlanFromTemplate'>) => Promise<ReturnTypeFrom<'getBackupPlanFromTemplate'>>  = async params => {
  // undefined
    return this.client.getBackupPlanFromTemplate(params as any).promise();
  }

  getBackupSelection: (params: RawParamsFrom<'getBackupSelection'>) => Promise<ReturnTypeFrom<'getBackupSelection'>>  = async params => {
  // undefined
    return this.client.getBackupSelection(params as any).promise();
  }

  getBackupVaultAccessPolicy: (params: RawParamsFrom<'getBackupVaultAccessPolicy'>) => Promise<ReturnTypeFrom<'getBackupVaultAccessPolicy'>>  = async params => {
  // undefined
    return this.client.getBackupVaultAccessPolicy(params as any).promise();
  }

  getBackupVaultNotifications: (params: RawParamsFrom<'getBackupVaultNotifications'>) => Promise<ReturnTypeFrom<'getBackupVaultNotifications'>>  = async params => {
  // undefined
    return this.client.getBackupVaultNotifications(params as any).promise();
  }

  getRecoveryPointRestoreMetadata: (params: RawParamsFrom<'getRecoveryPointRestoreMetadata'>) => Promise<ReturnTypeFrom<'getRecoveryPointRestoreMetadata'>>  = async params => {
  // undefined
    return this.client.getRecoveryPointRestoreMetadata(params as any).promise();
  }

  getSupportedResourceTypes: (params: RawParamsFrom<'getSupportedResourceTypes'>) => Promise<ReturnTypeFrom<'getSupportedResourceTypes'>>  = async params => {
  // undefined
    return this.client.getSupportedResourceTypes(params as any).promise();
  }

  async listBackupJobs(params: { [K in keyof ParamsFrom<'listBackupJobs', { next?: string, limit?: number }>]: ParamsFrom<'listBackupJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBackupJobs'>]-?: ReturnTypeFrom<'listBackupJobs'>[K]}['BackupJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBackupJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BackupJobs ?? []) ? (result.BackupJobs ?? []) : [result.BackupJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupPlanTemplates(params: { [K in keyof ParamsFrom<'listBackupPlanTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listBackupPlanTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBackupPlanTemplates'>]-?: ReturnTypeFrom<'listBackupPlanTemplates'>[K]}['BackupPlanTemplatesList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupPlanTemplatesList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupPlanTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBackupPlanTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BackupPlanTemplatesList ?? []) ? (result.BackupPlanTemplatesList ?? []) : [result.BackupPlanTemplatesList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupPlanVersions(params: { [K in keyof ParamsFrom<'listBackupPlanVersions', { next?: string, limit?: number }>]: ParamsFrom<'listBackupPlanVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBackupPlanVersions'>]-?: ReturnTypeFrom<'listBackupPlanVersions'>[K]}['BackupPlanVersionsList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupPlanVersionsList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupPlanVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBackupPlanVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BackupPlanVersionsList ?? []) ? (result.BackupPlanVersionsList ?? []) : [result.BackupPlanVersionsList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupPlans(params: { [K in keyof ParamsFrom<'listBackupPlans', { next?: string, limit?: number }>]: ParamsFrom<'listBackupPlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBackupPlans'>]-?: ReturnTypeFrom<'listBackupPlans'>[K]}['BackupPlansList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupPlansList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupPlans({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBackupPlans' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BackupPlansList ?? []) ? (result.BackupPlansList ?? []) : [result.BackupPlansList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupSelections(params: { [K in keyof ParamsFrom<'listBackupSelections', { next?: string, limit?: number }>]: ParamsFrom<'listBackupSelections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBackupSelections'>]-?: ReturnTypeFrom<'listBackupSelections'>[K]}['BackupSelectionsList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupSelectionsList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupSelections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBackupSelections' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BackupSelectionsList ?? []) ? (result.BackupSelectionsList ?? []) : [result.BackupSelectionsList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupVaults(params: { [K in keyof ParamsFrom<'listBackupVaults', { next?: string, limit?: number }>]: ParamsFrom<'listBackupVaults', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBackupVaults'>]-?: ReturnTypeFrom<'listBackupVaults'>[K]}['BackupVaultList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupVaultList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupVaults({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBackupVaults' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BackupVaultList ?? []) ? (result.BackupVaultList ?? []) : [result.BackupVaultList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCopyJobs(params: { [K in keyof ParamsFrom<'listCopyJobs', { next?: string, limit?: number }>]: ParamsFrom<'listCopyJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCopyJobs'>]-?: ReturnTypeFrom<'listCopyJobs'>[K]}['CopyJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CopyJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCopyJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCopyJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CopyJobs ?? []) ? (result.CopyJobs ?? []) : [result.CopyJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listFrameworks: (params: RawParamsFrom<'listFrameworks'>) => Promise<ReturnTypeFrom<'listFrameworks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFrameworks(params as any).promise();
  }

  async listProtectedResources(params: { [K in keyof ParamsFrom<'listProtectedResources', { next?: string, limit?: number }>]: ParamsFrom<'listProtectedResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProtectedResources'>]-?: ReturnTypeFrom<'listProtectedResources'>[K]}['Results'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Results"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProtectedResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listProtectedResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Results ?? []) ? (result.Results ?? []) : [result.Results]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecoveryPointsByBackupVault(params: { [K in keyof ParamsFrom<'listRecoveryPointsByBackupVault', { next?: string, limit?: number }>]: ParamsFrom<'listRecoveryPointsByBackupVault', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecoveryPointsByBackupVault'>]-?: ReturnTypeFrom<'listRecoveryPointsByBackupVault'>[K]}['RecoveryPoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RecoveryPoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecoveryPointsByBackupVault({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRecoveryPointsByBackupVault' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RecoveryPoints ?? []) ? (result.RecoveryPoints ?? []) : [result.RecoveryPoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecoveryPointsByResource(params: { [K in keyof ParamsFrom<'listRecoveryPointsByResource', { next?: string, limit?: number }>]: ParamsFrom<'listRecoveryPointsByResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecoveryPointsByResource'>]-?: ReturnTypeFrom<'listRecoveryPointsByResource'>[K]}['RecoveryPoints'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RecoveryPoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecoveryPointsByResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRecoveryPointsByResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RecoveryPoints ?? []) ? (result.RecoveryPoints ?? []) : [result.RecoveryPoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listReportJobs: (params: RawParamsFrom<'listReportJobs'>) => Promise<ReturnTypeFrom<'listReportJobs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReportJobs(params as any).promise();
  }

  listReportPlans: (params: RawParamsFrom<'listReportPlans'>) => Promise<ReturnTypeFrom<'listReportPlans'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReportPlans(params as any).promise();
  }

  async listRestoreJobs(params: { [K in keyof ParamsFrom<'listRestoreJobs', { next?: string, limit?: number }>]: ParamsFrom<'listRestoreJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRestoreJobs'>]-?: ReturnTypeFrom<'listRestoreJobs'>[K]}['RestoreJobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RestoreJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRestoreJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRestoreJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RestoreJobs ?? []) ? (result.RestoreJobs ?? []) : [result.RestoreJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTags(params as any).promise();
  }

  putBackupVaultAccessPolicy: (params: RawParamsFrom<'putBackupVaultAccessPolicy'>) => Promise<ReturnTypeFrom<'putBackupVaultAccessPolicy'>>  = async params => {
  // undefined
    return this.client.putBackupVaultAccessPolicy(params as any).promise();
  }

  putBackupVaultLockConfiguration: (params: RawParamsFrom<'putBackupVaultLockConfiguration'>) => Promise<ReturnTypeFrom<'putBackupVaultLockConfiguration'>>  = async params => {
  // undefined
    return this.client.putBackupVaultLockConfiguration(params as any).promise();
  }

  putBackupVaultNotifications: (params: RawParamsFrom<'putBackupVaultNotifications'>) => Promise<ReturnTypeFrom<'putBackupVaultNotifications'>>  = async params => {
  // undefined
    return this.client.putBackupVaultNotifications(params as any).promise();
  }

  startBackupJob: (params: RawParamsFrom<'startBackupJob'>) => Promise<ReturnTypeFrom<'startBackupJob'>>  = async params => {
  // undefined
    return this.client.startBackupJob(params as any).promise();
  }

  startCopyJob: (params: RawParamsFrom<'startCopyJob'>) => Promise<ReturnTypeFrom<'startCopyJob'>>  = async params => {
  // undefined
    return this.client.startCopyJob(params as any).promise();
  }

  startReportJob: (params: RawParamsFrom<'startReportJob'>) => Promise<ReturnTypeFrom<'startReportJob'>>  = async params => {
  // undefined
    return this.client.startReportJob(params as any).promise();
  }

  startRestoreJob: (params: RawParamsFrom<'startRestoreJob'>) => Promise<ReturnTypeFrom<'startRestoreJob'>>  = async params => {
  // undefined
    return this.client.startRestoreJob(params as any).promise();
  }

  stopBackupJob: (params: RawParamsFrom<'stopBackupJob'>) => Promise<ReturnTypeFrom<'stopBackupJob'>>  = async params => {
  // undefined
    return this.client.stopBackupJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateBackupPlan: (params: RawParamsFrom<'updateBackupPlan'>) => Promise<ReturnTypeFrom<'updateBackupPlan'>>  = async params => {
  // undefined
    return this.client.updateBackupPlan(params as any).promise();
  }

  updateFramework: (params: RawParamsFrom<'updateFramework'>) => Promise<ReturnTypeFrom<'updateFramework'>>  = async params => {
  // undefined
    return this.client.updateFramework(params as any).promise();
  }

  updateGlobalSettings: (params: RawParamsFrom<'updateGlobalSettings'>) => Promise<ReturnTypeFrom<'updateGlobalSettings'>>  = async params => {
  // undefined
    return this.client.updateGlobalSettings(params as any).promise();
  }

  updateRecoveryPointLifecycle: (params: RawParamsFrom<'updateRecoveryPointLifecycle'>) => Promise<ReturnTypeFrom<'updateRecoveryPointLifecycle'>>  = async params => {
  // undefined
    return this.client.updateRecoveryPointLifecycle(params as any).promise();
  }

  updateRegionSettings: (params: RawParamsFrom<'updateRegionSettings'>) => Promise<ReturnTypeFrom<'updateRegionSettings'>>  = async params => {
  // undefined
    return this.client.updateRegionSettings(params as any).promise();
  }

  updateReportPlan: (params: RawParamsFrom<'updateReportPlan'>) => Promise<ReturnTypeFrom<'updateReportPlan'>>  = async params => {
  // undefined
    return this.client.updateReportPlan(params as any).promise();
  }
  
  static fromClient(client: AWSBackup): Backup {
    return new Backup(client) as any;
  }
  
  static client(options?: AWSBackup.Types.ClientConfiguration): Backup {
    return new Backup(new AWSBackup(options)) as any;
  }
}  
