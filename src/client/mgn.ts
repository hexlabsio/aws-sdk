import { Request, Mgn as AWSMgn } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMgn> = AWSMgn[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMgn> = AWSMgn[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMgn[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMgn, Extras> = AWSMgn[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMgn> = AWSMgn[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Mgn {
  private constructor(private readonly client: AWSMgn) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mgn' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["describeJobs","describeLaunchConfigurationTemplates","describeReplicationConfigurationTemplates","describeSourceServers","describeVcenterClients","listApplications","listWaves"] as const;
  
  archiveApplication: (params: RawParamsFrom<'archiveApplication'>) => Promise<ReturnTypeFrom<'archiveApplication'>>  = async params => {
  // undefined
    return this.client.archiveApplication(params as any).promise();
  }

  archiveWave: (params: RawParamsFrom<'archiveWave'>) => Promise<ReturnTypeFrom<'archiveWave'>>  = async params => {
  // undefined
    return this.client.archiveWave(params as any).promise();
  }

  associateApplications: (params: RawParamsFrom<'associateApplications'>) => Promise<ReturnTypeFrom<'associateApplications'>>  = async params => {
  // undefined
    return this.client.associateApplications(params as any).promise();
  }

  associateSourceServers: (params: RawParamsFrom<'associateSourceServers'>) => Promise<ReturnTypeFrom<'associateSourceServers'>>  = async params => {
  // undefined
    return this.client.associateSourceServers(params as any).promise();
  }

  changeServerLifeCycleState: (params: RawParamsFrom<'changeServerLifeCycleState'>) => Promise<ReturnTypeFrom<'changeServerLifeCycleState'>>  = async params => {
  // undefined
    return this.client.changeServerLifeCycleState(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createLaunchConfigurationTemplate: (params: RawParamsFrom<'createLaunchConfigurationTemplate'>) => Promise<ReturnTypeFrom<'createLaunchConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.createLaunchConfigurationTemplate(params as any).promise();
  }

  createReplicationConfigurationTemplate: (params: RawParamsFrom<'createReplicationConfigurationTemplate'>) => Promise<ReturnTypeFrom<'createReplicationConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.createReplicationConfigurationTemplate(params as any).promise();
  }

  createWave: (params: RawParamsFrom<'createWave'>) => Promise<ReturnTypeFrom<'createWave'>>  = async params => {
  // undefined
    return this.client.createWave(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteJob: (params: RawParamsFrom<'deleteJob'>) => Promise<ReturnTypeFrom<'deleteJob'>>  = async params => {
  // undefined
    return this.client.deleteJob(params as any).promise();
  }

  deleteLaunchConfigurationTemplate: (params: RawParamsFrom<'deleteLaunchConfigurationTemplate'>) => Promise<ReturnTypeFrom<'deleteLaunchConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.deleteLaunchConfigurationTemplate(params as any).promise();
  }

  deleteReplicationConfigurationTemplate: (params: RawParamsFrom<'deleteReplicationConfigurationTemplate'>) => Promise<ReturnTypeFrom<'deleteReplicationConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.deleteReplicationConfigurationTemplate(params as any).promise();
  }

  deleteSourceServer: (params: RawParamsFrom<'deleteSourceServer'>) => Promise<ReturnTypeFrom<'deleteSourceServer'>>  = async params => {
  // undefined
    return this.client.deleteSourceServer(params as any).promise();
  }

  deleteVcenterClient: (params: RawParamsFrom<'deleteVcenterClient'>) => Promise<ReturnTypeFrom<'deleteVcenterClient'>>  = async params => {
  // undefined
    return this.client.deleteVcenterClient(params as any).promise();
  }

  deleteWave: (params: RawParamsFrom<'deleteWave'>) => Promise<ReturnTypeFrom<'deleteWave'>>  = async params => {
  // undefined
    return this.client.deleteWave(params as any).promise();
  }

  async describeJobLogItems(params: { [K in keyof ParamsFrom<'describeJobLogItems', { next?: string, limit?: number }>]: ParamsFrom<'describeJobLogItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeJobLogItems'>]-?: ReturnTypeFrom<'describeJobLogItems'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobLogItems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeJobLogItems' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeJobs(params: { [K in keyof ParamsFrom<'describeJobs', { next?: string, limit?: number }>]: ParamsFrom<'describeJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeJobs'>]-?: ReturnTypeFrom<'describeJobs'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLaunchConfigurationTemplates(params: { [K in keyof ParamsFrom<'describeLaunchConfigurationTemplates', { next?: string, limit?: number }>]: ParamsFrom<'describeLaunchConfigurationTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLaunchConfigurationTemplates'>]-?: ReturnTypeFrom<'describeLaunchConfigurationTemplates'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeLaunchConfigurationTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeLaunchConfigurationTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReplicationConfigurationTemplates(params: { [K in keyof ParamsFrom<'describeReplicationConfigurationTemplates', { next?: string, limit?: number }>]: ParamsFrom<'describeReplicationConfigurationTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReplicationConfigurationTemplates'>]-?: ReturnTypeFrom<'describeReplicationConfigurationTemplates'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeReplicationConfigurationTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeReplicationConfigurationTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSourceServers(params: { [K in keyof ParamsFrom<'describeSourceServers', { next?: string, limit?: number }>]: ParamsFrom<'describeSourceServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSourceServers'>]-?: ReturnTypeFrom<'describeSourceServers'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeSourceServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeSourceServers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVcenterClients(params: { [K in keyof ParamsFrom<'describeVcenterClients', { next?: string, limit?: number }>]: ParamsFrom<'describeVcenterClients', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVcenterClients'>]-?: ReturnTypeFrom<'describeVcenterClients'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeVcenterClients({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeVcenterClients' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disassociateApplications: (params: RawParamsFrom<'disassociateApplications'>) => Promise<ReturnTypeFrom<'disassociateApplications'>>  = async params => {
  // undefined
    return this.client.disassociateApplications(params as any).promise();
  }

  disassociateSourceServers: (params: RawParamsFrom<'disassociateSourceServers'>) => Promise<ReturnTypeFrom<'disassociateSourceServers'>>  = async params => {
  // undefined
    return this.client.disassociateSourceServers(params as any).promise();
  }

  disconnectFromService: (params: RawParamsFrom<'disconnectFromService'>) => Promise<ReturnTypeFrom<'disconnectFromService'>>  = async params => {
  // undefined
    return this.client.disconnectFromService(params as any).promise();
  }

  finalizeCutover: (params: RawParamsFrom<'finalizeCutover'>) => Promise<ReturnTypeFrom<'finalizeCutover'>>  = async params => {
  // undefined
    return this.client.finalizeCutover(params as any).promise();
  }

  getLaunchConfiguration: (params: RawParamsFrom<'getLaunchConfiguration'>) => Promise<ReturnTypeFrom<'getLaunchConfiguration'>>  = async params => {
  // undefined
    return this.client.getLaunchConfiguration(params as any).promise();
  }

  getReplicationConfiguration: (params: RawParamsFrom<'getReplicationConfiguration'>) => Promise<ReturnTypeFrom<'getReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.getReplicationConfiguration(params as any).promise();
  }

  initializeService: (params: RawParamsFrom<'initializeService'>) => Promise<ReturnTypeFrom<'initializeService'>>  = async params => {
  // undefined
    return this.client.initializeService(params as any).promise();
  }

  async listApplications(params: { [K in keyof ParamsFrom<'listApplications', { next?: string, limit?: number }>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listApplications' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSourceServerActions(params: { [K in keyof ParamsFrom<'listSourceServerActions', { next?: string, limit?: number }>]: ParamsFrom<'listSourceServerActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSourceServerActions'>]-?: ReturnTypeFrom<'listSourceServerActions'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSourceServerActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSourceServerActions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
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

  async listTemplateActions(params: { [K in keyof ParamsFrom<'listTemplateActions', { next?: string, limit?: number }>]: ParamsFrom<'listTemplateActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTemplateActions'>]-?: ReturnTypeFrom<'listTemplateActions'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTemplateActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTemplateActions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWaves(params: { [K in keyof ParamsFrom<'listWaves', { next?: string, limit?: number }>]: ParamsFrom<'listWaves', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWaves'>]-?: ReturnTypeFrom<'listWaves'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWaves({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listWaves' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  markAsArchived: (params: RawParamsFrom<'markAsArchived'>) => Promise<ReturnTypeFrom<'markAsArchived'>>  = async params => {
  // undefined
    return this.client.markAsArchived(params as any).promise();
  }

  putSourceServerAction: (params: RawParamsFrom<'putSourceServerAction'>) => Promise<ReturnTypeFrom<'putSourceServerAction'>>  = async params => {
  // undefined
    return this.client.putSourceServerAction(params as any).promise();
  }

  putTemplateAction: (params: RawParamsFrom<'putTemplateAction'>) => Promise<ReturnTypeFrom<'putTemplateAction'>>  = async params => {
  // undefined
    return this.client.putTemplateAction(params as any).promise();
  }

  removeSourceServerAction: (params: RawParamsFrom<'removeSourceServerAction'>) => Promise<ReturnTypeFrom<'removeSourceServerAction'>>  = async params => {
  // undefined
    return this.client.removeSourceServerAction(params as any).promise();
  }

  removeTemplateAction: (params: RawParamsFrom<'removeTemplateAction'>) => Promise<ReturnTypeFrom<'removeTemplateAction'>>  = async params => {
  // undefined
    return this.client.removeTemplateAction(params as any).promise();
  }

  retryDataReplication: (params: RawParamsFrom<'retryDataReplication'>) => Promise<ReturnTypeFrom<'retryDataReplication'>>  = async params => {
  // undefined
    return this.client.retryDataReplication(params as any).promise();
  }

  startCutover: (params: RawParamsFrom<'startCutover'>) => Promise<ReturnTypeFrom<'startCutover'>>  = async params => {
  // undefined
    return this.client.startCutover(params as any).promise();
  }

  startReplication: (params: RawParamsFrom<'startReplication'>) => Promise<ReturnTypeFrom<'startReplication'>>  = async params => {
  // undefined
    return this.client.startReplication(params as any).promise();
  }

  startTest: (params: RawParamsFrom<'startTest'>) => Promise<ReturnTypeFrom<'startTest'>>  = async params => {
  // undefined
    return this.client.startTest(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  terminateTargetInstances: (params: RawParamsFrom<'terminateTargetInstances'>) => Promise<ReturnTypeFrom<'terminateTargetInstances'>>  = async params => {
  // undefined
    return this.client.terminateTargetInstances(params as any).promise();
  }

  unarchiveApplication: (params: RawParamsFrom<'unarchiveApplication'>) => Promise<ReturnTypeFrom<'unarchiveApplication'>>  = async params => {
  // undefined
    return this.client.unarchiveApplication(params as any).promise();
  }

  unarchiveWave: (params: RawParamsFrom<'unarchiveWave'>) => Promise<ReturnTypeFrom<'unarchiveWave'>>  = async params => {
  // undefined
    return this.client.unarchiveWave(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }

  updateLaunchConfiguration: (params: RawParamsFrom<'updateLaunchConfiguration'>) => Promise<ReturnTypeFrom<'updateLaunchConfiguration'>>  = async params => {
  // undefined
    return this.client.updateLaunchConfiguration(params as any).promise();
  }

  updateLaunchConfigurationTemplate: (params: RawParamsFrom<'updateLaunchConfigurationTemplate'>) => Promise<ReturnTypeFrom<'updateLaunchConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.updateLaunchConfigurationTemplate(params as any).promise();
  }

  updateReplicationConfiguration: (params: RawParamsFrom<'updateReplicationConfiguration'>) => Promise<ReturnTypeFrom<'updateReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateReplicationConfiguration(params as any).promise();
  }

  updateReplicationConfigurationTemplate: (params: RawParamsFrom<'updateReplicationConfigurationTemplate'>) => Promise<ReturnTypeFrom<'updateReplicationConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.updateReplicationConfigurationTemplate(params as any).promise();
  }

  updateSourceServerReplicationType: (params: RawParamsFrom<'updateSourceServerReplicationType'>) => Promise<ReturnTypeFrom<'updateSourceServerReplicationType'>>  = async params => {
  // undefined
    return this.client.updateSourceServerReplicationType(params as any).promise();
  }

  updateWave: (params: RawParamsFrom<'updateWave'>) => Promise<ReturnTypeFrom<'updateWave'>>  = async params => {
  // undefined
    return this.client.updateWave(params as any).promise();
  }
  
  static fromClient(client: AWSMgn): Mgn {
    return new Mgn(client) as any;
  }
  
  static client(options?: AWSMgn.Types.ClientConfiguration): Mgn {
    return new Mgn(new AWSMgn(options)) as any;
  }
}  
