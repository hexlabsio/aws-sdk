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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'backup';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly ["listBackupJobs","listBackupPlanTemplates","listBackupPlans","listBackupVaults","listCopyJobs","listFrameworks","listProtectedResources","listReportJobs","listReportPlans","listRestoreJobs"];
    
  createBackupPlan: FunctionTypeFrom<'createBackupPlan'>;

  createBackupSelection: FunctionTypeFrom<'createBackupSelection'>;

  createBackupVault: FunctionTypeFrom<'createBackupVault'>;

  createFramework: FunctionTypeFrom<'createFramework'>;

  createReportPlan: FunctionTypeFrom<'createReportPlan'>;

  deleteBackupPlan: FunctionTypeFrom<'deleteBackupPlan'>;

  deleteBackupSelection: FunctionTypeFrom<'deleteBackupSelection'>;

  deleteBackupVault: FunctionTypeFrom<'deleteBackupVault'>;

  deleteBackupVaultAccessPolicy: FunctionTypeFrom<'deleteBackupVaultAccessPolicy'>;

  deleteBackupVaultLockConfiguration: FunctionTypeFrom<'deleteBackupVaultLockConfiguration'>;

  deleteBackupVaultNotifications: FunctionTypeFrom<'deleteBackupVaultNotifications'>;

  deleteFramework: FunctionTypeFrom<'deleteFramework'>;

  deleteRecoveryPoint: FunctionTypeFrom<'deleteRecoveryPoint'>;

  deleteReportPlan: FunctionTypeFrom<'deleteReportPlan'>;

  describeBackupJob: FunctionTypeFrom<'describeBackupJob'>;

  describeBackupVault: FunctionTypeFrom<'describeBackupVault'>;

  describeCopyJob: FunctionTypeFrom<'describeCopyJob'>;

  describeFramework: FunctionTypeFrom<'describeFramework'>;

  describeGlobalSettings: FunctionTypeFrom<'describeGlobalSettings'>;

  describeProtectedResource: FunctionTypeFrom<'describeProtectedResource'>;

  describeRecoveryPoint: FunctionTypeFrom<'describeRecoveryPoint'>;

  describeRegionSettings: FunctionTypeFrom<'describeRegionSettings'>;

  describeReportJob: FunctionTypeFrom<'describeReportJob'>;

  describeReportPlan: FunctionTypeFrom<'describeReportPlan'>;

  describeRestoreJob: FunctionTypeFrom<'describeRestoreJob'>;

  disassociateRecoveryPoint: FunctionTypeFrom<'disassociateRecoveryPoint'>;

  exportBackupPlanTemplate: FunctionTypeFrom<'exportBackupPlanTemplate'>;

  getBackupPlan: FunctionTypeFrom<'getBackupPlan'>;

  getBackupPlanFromJSON: FunctionTypeFrom<'getBackupPlanFromJSON'>;

  getBackupPlanFromTemplate: FunctionTypeFrom<'getBackupPlanFromTemplate'>;

  getBackupSelection: FunctionTypeFrom<'getBackupSelection'>;

  getBackupVaultAccessPolicy: FunctionTypeFrom<'getBackupVaultAccessPolicy'>;

  getBackupVaultNotifications: FunctionTypeFrom<'getBackupVaultNotifications'>;

  getRecoveryPointRestoreMetadata: FunctionTypeFrom<'getRecoveryPointRestoreMetadata'>;

  getSupportedResourceTypes: FunctionTypeFrom<'getSupportedResourceTypes'>;

  listBackupJobs(params: { [K in keyof Omit<ParamsFrom<'listBackupJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBackupJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupJobs'>]-?: ReturnTypeFrom<'listBackupJobs'>[K]}['BackupJobs'] }>
  listBackupJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupJobs'>]-?: ReturnTypeFrom<'listBackupJobs'>[K]}['BackupJobs'] }>;

  listBackupPlanTemplates(params: { [K in keyof Omit<ParamsFrom<'listBackupPlanTemplates', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBackupPlanTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupPlanTemplates'>]-?: ReturnTypeFrom<'listBackupPlanTemplates'>[K]}['BackupPlanTemplatesList'] }>
  listBackupPlanTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupPlanTemplates'>]-?: ReturnTypeFrom<'listBackupPlanTemplates'>[K]}['BackupPlanTemplatesList'] }>;

  listBackupPlanVersions(params: { [K in keyof Omit<ParamsFrom<'listBackupPlanVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBackupPlanVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupPlanVersions'>]-?: ReturnTypeFrom<'listBackupPlanVersions'>[K]}['BackupPlanVersionsList'] }>
  ;

  listBackupPlans(params: { [K in keyof Omit<ParamsFrom<'listBackupPlans', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBackupPlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupPlans'>]-?: ReturnTypeFrom<'listBackupPlans'>[K]}['BackupPlansList'] }>
  listBackupPlans(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupPlans'>]-?: ReturnTypeFrom<'listBackupPlans'>[K]}['BackupPlansList'] }>;

  listBackupSelections(params: { [K in keyof Omit<ParamsFrom<'listBackupSelections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBackupSelections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupSelections'>]-?: ReturnTypeFrom<'listBackupSelections'>[K]}['BackupSelectionsList'] }>
  ;

  listBackupVaults(params: { [K in keyof Omit<ParamsFrom<'listBackupVaults', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBackupVaults', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupVaults'>]-?: ReturnTypeFrom<'listBackupVaults'>[K]}['BackupVaultList'] }>
  listBackupVaults(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBackupVaults'>]-?: ReturnTypeFrom<'listBackupVaults'>[K]}['BackupVaultList'] }>;

  listCopyJobs(params: { [K in keyof Omit<ParamsFrom<'listCopyJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCopyJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCopyJobs'>]-?: ReturnTypeFrom<'listCopyJobs'>[K]}['CopyJobs'] }>
  listCopyJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCopyJobs'>]-?: ReturnTypeFrom<'listCopyJobs'>[K]}['CopyJobs'] }>;

  listFrameworks: FunctionTypeFrom<'listFrameworks'>;

  listProtectedResources(params: { [K in keyof Omit<ParamsFrom<'listProtectedResources', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProtectedResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProtectedResources'>]-?: ReturnTypeFrom<'listProtectedResources'>[K]}['Results'] }>
  listProtectedResources(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProtectedResources'>]-?: ReturnTypeFrom<'listProtectedResources'>[K]}['Results'] }>;

  listRecoveryPointsByBackupVault(params: { [K in keyof Omit<ParamsFrom<'listRecoveryPointsByBackupVault', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRecoveryPointsByBackupVault', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecoveryPointsByBackupVault'>]-?: ReturnTypeFrom<'listRecoveryPointsByBackupVault'>[K]}['RecoveryPoints'] }>
  ;

  listRecoveryPointsByResource(params: { [K in keyof Omit<ParamsFrom<'listRecoveryPointsByResource', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRecoveryPointsByResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRecoveryPointsByResource'>]-?: ReturnTypeFrom<'listRecoveryPointsByResource'>[K]}['RecoveryPoints'] }>
  ;

  listReportJobs: FunctionTypeFrom<'listReportJobs'>;

  listReportPlans: FunctionTypeFrom<'listReportPlans'>;

  listRestoreJobs(params: { [K in keyof Omit<ParamsFrom<'listRestoreJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRestoreJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRestoreJobs'>]-?: ReturnTypeFrom<'listRestoreJobs'>[K]}['RestoreJobs'] }>
  listRestoreJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRestoreJobs'>]-?: ReturnTypeFrom<'listRestoreJobs'>[K]}['RestoreJobs'] }>;

  listTags: FunctionTypeFrom<'listTags'>;

  putBackupVaultAccessPolicy: FunctionTypeFrom<'putBackupVaultAccessPolicy'>;

  putBackupVaultLockConfiguration: FunctionTypeFrom<'putBackupVaultLockConfiguration'>;

  putBackupVaultNotifications: FunctionTypeFrom<'putBackupVaultNotifications'>;

  startBackupJob: FunctionTypeFrom<'startBackupJob'>;

  startCopyJob: FunctionTypeFrom<'startCopyJob'>;

  startReportJob: FunctionTypeFrom<'startReportJob'>;

  startRestoreJob: FunctionTypeFrom<'startRestoreJob'>;

  stopBackupJob: FunctionTypeFrom<'stopBackupJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateBackupPlan: FunctionTypeFrom<'updateBackupPlan'>;

  updateFramework: FunctionTypeFrom<'updateFramework'>;

  updateGlobalSettings: FunctionTypeFrom<'updateGlobalSettings'>;

  updateRecoveryPointLifecycle: FunctionTypeFrom<'updateRecoveryPointLifecycle'>;

  updateRegionSettings: FunctionTypeFrom<'updateRegionSettings'>;

  updateReportPlan: FunctionTypeFrom<'updateReportPlan'>
}
 
export class Backup implements ClientType {
  private constructor(private readonly client: AWSBackup) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'backup';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = ["listBackupJobs","listBackupPlanTemplates","listBackupPlans","listBackupVaults","listCopyJobs","listFrameworks","listProtectedResources","listReportJobs","listReportPlans","listRestoreJobs"] as const;
  
  async createBackupPlan(...args: any): Promise<any> {
  // undefined
    return this.client.createBackupPlan(...args).promise()
  }

  async createBackupSelection(...args: any): Promise<any> {
  // undefined
    return this.client.createBackupSelection(...args).promise()
  }

  async createBackupVault(...args: any): Promise<any> {
  // undefined
    return this.client.createBackupVault(...args).promise()
  }

  async createFramework(...args: any): Promise<any> {
  // undefined
    return this.client.createFramework(...args).promise()
  }

  async createReportPlan(...args: any): Promise<any> {
  // undefined
    return this.client.createReportPlan(...args).promise()
  }

  async deleteBackupPlan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackupPlan(...args).promise()
  }

  async deleteBackupSelection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackupSelection(...args).promise()
  }

  async deleteBackupVault(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackupVault(...args).promise()
  }

  async deleteBackupVaultAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackupVaultAccessPolicy(...args).promise()
  }

  async deleteBackupVaultLockConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackupVaultLockConfiguration(...args).promise()
  }

  async deleteBackupVaultNotifications(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackupVaultNotifications(...args).promise()
  }

  async deleteFramework(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFramework(...args).promise()
  }

  async deleteRecoveryPoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecoveryPoint(...args).promise()
  }

  async deleteReportPlan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReportPlan(...args).promise()
  }

  async describeBackupJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeBackupJob(...args).promise()
  }

  async describeBackupVault(...args: any): Promise<any> {
  // undefined
    return this.client.describeBackupVault(...args).promise()
  }

  async describeCopyJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeCopyJob(...args).promise()
  }

  async describeFramework(...args: any): Promise<any> {
  // undefined
    return this.client.describeFramework(...args).promise()
  }

  async describeGlobalSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeGlobalSettings(...args).promise()
  }

  async describeProtectedResource(...args: any): Promise<any> {
  // undefined
    return this.client.describeProtectedResource(...args).promise()
  }

  async describeRecoveryPoint(...args: any): Promise<any> {
  // undefined
    return this.client.describeRecoveryPoint(...args).promise()
  }

  async describeRegionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeRegionSettings(...args).promise()
  }

  async describeReportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeReportJob(...args).promise()
  }

  async describeReportPlan(...args: any): Promise<any> {
  // undefined
    return this.client.describeReportPlan(...args).promise()
  }

  async describeRestoreJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeRestoreJob(...args).promise()
  }

  async disassociateRecoveryPoint(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateRecoveryPoint(...args).promise()
  }

  async exportBackupPlanTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.exportBackupPlanTemplate(...args).promise()
  }

  async getBackupPlan(...args: any): Promise<any> {
  // undefined
    return this.client.getBackupPlan(...args).promise()
  }

  async getBackupPlanFromJSON(...args: any): Promise<any> {
  // undefined
    return this.client.getBackupPlanFromJSON(...args).promise()
  }

  async getBackupPlanFromTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getBackupPlanFromTemplate(...args).promise()
  }

  async getBackupSelection(...args: any): Promise<any> {
  // undefined
    return this.client.getBackupSelection(...args).promise()
  }

  async getBackupVaultAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getBackupVaultAccessPolicy(...args).promise()
  }

  async getBackupVaultNotifications(...args: any): Promise<any> {
  // undefined
    return this.client.getBackupVaultNotifications(...args).promise()
  }

  async getRecoveryPointRestoreMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getRecoveryPointRestoreMetadata(...args).promise()
  }

  async getSupportedResourceTypes(...args: any): Promise<any> {
  // undefined
    return this.client.getSupportedResourceTypes(...args).promise()
  }

  async listBackupJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BackupJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupPlanTemplates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupPlanTemplatesList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupPlanTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BackupPlanTemplatesList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupPlanVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupPlanVersionsList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupPlanVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BackupPlanVersionsList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupPlans(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupPlansList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupPlans(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BackupPlansList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupSelections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupSelectionsList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupSelections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BackupSelectionsList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBackupVaults(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BackupVaultList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBackupVaults(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BackupVaultList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCopyJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CopyJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCopyJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CopyJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFrameworks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listFrameworks(...args).promise()
  }

  async listProtectedResources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Results"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProtectedResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Results ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecoveryPointsByBackupVault(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RecoveryPoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecoveryPointsByBackupVault(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RecoveryPoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecoveryPointsByResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RecoveryPoints"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRecoveryPointsByResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RecoveryPoints ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listReportJobs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReportJobs(...args).promise()
  }

  async listReportPlans(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listReportPlans(...args).promise()
  }

  async listRestoreJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RestoreJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRestoreJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RestoreJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTags(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTags(...args).promise()
  }

  async putBackupVaultAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putBackupVaultAccessPolicy(...args).promise()
  }

  async putBackupVaultLockConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putBackupVaultLockConfiguration(...args).promise()
  }

  async putBackupVaultNotifications(...args: any): Promise<any> {
  // undefined
    return this.client.putBackupVaultNotifications(...args).promise()
  }

  async startBackupJob(...args: any): Promise<any> {
  // undefined
    return this.client.startBackupJob(...args).promise()
  }

  async startCopyJob(...args: any): Promise<any> {
  // undefined
    return this.client.startCopyJob(...args).promise()
  }

  async startReportJob(...args: any): Promise<any> {
  // undefined
    return this.client.startReportJob(...args).promise()
  }

  async startRestoreJob(...args: any): Promise<any> {
  // undefined
    return this.client.startRestoreJob(...args).promise()
  }

  async stopBackupJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopBackupJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateBackupPlan(...args: any): Promise<any> {
  // undefined
    return this.client.updateBackupPlan(...args).promise()
  }

  async updateFramework(...args: any): Promise<any> {
  // undefined
    return this.client.updateFramework(...args).promise()
  }

  async updateGlobalSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateGlobalSettings(...args).promise()
  }

  async updateRecoveryPointLifecycle(...args: any): Promise<any> {
  // undefined
    return this.client.updateRecoveryPointLifecycle(...args).promise()
  }

  async updateRegionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateRegionSettings(...args).promise()
  }

  async updateReportPlan(...args: any): Promise<any> {
  // undefined
    return this.client.updateReportPlan(...args).promise()
  }
  
  static fromClient(client: AWSBackup): ClientType {
    return new Backup(client) as any;
  }
  
  static client(options?: AWSBackup.Types.ClientConfiguration): ClientType {
    return new Backup(new AWSBackup(options)) as any;
  }
}  
