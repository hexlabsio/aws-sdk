import { Request, Drs as AWSDrs } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDrs> = AWSDrs[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDrs> = AWSDrs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDrs[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDrs, Extras> = AWSDrs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDrs> = AWSDrs[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Drs {
  private constructor(private readonly client: AWSDrs) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'drs' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["describeJobs","describeRecoveryInstances","describeReplicationConfigurationTemplates","describeSourceServers","listStagingAccounts"] as const;
  
  createExtendedSourceServer: (params: RawParamsFrom<'createExtendedSourceServer'>) => Promise<ReturnTypeFrom<'createExtendedSourceServer'>>  = async params => {
  // undefined
    return this.client.createExtendedSourceServer(params as any).promise();
  }

  createReplicationConfigurationTemplate: (params: RawParamsFrom<'createReplicationConfigurationTemplate'>) => Promise<ReturnTypeFrom<'createReplicationConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.createReplicationConfigurationTemplate(params as any).promise();
  }

  deleteJob: (params: RawParamsFrom<'deleteJob'>) => Promise<ReturnTypeFrom<'deleteJob'>>  = async params => {
  // undefined
    return this.client.deleteJob(params as any).promise();
  }

  deleteRecoveryInstance: (params: RawParamsFrom<'deleteRecoveryInstance'>) => Promise<ReturnTypeFrom<'deleteRecoveryInstance'>>  = async params => {
  // undefined
    return this.client.deleteRecoveryInstance(params as any).promise();
  }

  deleteReplicationConfigurationTemplate: (params: RawParamsFrom<'deleteReplicationConfigurationTemplate'>) => Promise<ReturnTypeFrom<'deleteReplicationConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.deleteReplicationConfigurationTemplate(params as any).promise();
  }

  deleteSourceServer: (params: RawParamsFrom<'deleteSourceServer'>) => Promise<ReturnTypeFrom<'deleteSourceServer'>>  = async params => {
  // undefined
    return this.client.deleteSourceServer(params as any).promise();
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

  async describeRecoveryInstances(params: { [K in keyof ParamsFrom<'describeRecoveryInstances', { next?: string, limit?: number }>]: ParamsFrom<'describeRecoveryInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRecoveryInstances'>]-?: ReturnTypeFrom<'describeRecoveryInstances'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRecoveryInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeRecoveryInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRecoverySnapshots(params: { [K in keyof ParamsFrom<'describeRecoverySnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeRecoverySnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRecoverySnapshots'>]-?: ReturnTypeFrom<'describeRecoverySnapshots'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRecoverySnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'describeRecoverySnapshots' })).toString('base64') : undefined;
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

  disconnectRecoveryInstance: (params: RawParamsFrom<'disconnectRecoveryInstance'>) => Promise<ReturnTypeFrom<'disconnectRecoveryInstance'>>  = async params => {
  // undefined
    return this.client.disconnectRecoveryInstance(params as any).promise();
  }

  disconnectSourceServer: (params: RawParamsFrom<'disconnectSourceServer'>) => Promise<ReturnTypeFrom<'disconnectSourceServer'>>  = async params => {
  // undefined
    return this.client.disconnectSourceServer(params as any).promise();
  }

  getFailbackReplicationConfiguration: (params: RawParamsFrom<'getFailbackReplicationConfiguration'>) => Promise<ReturnTypeFrom<'getFailbackReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.getFailbackReplicationConfiguration(params as any).promise();
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

  async listExtensibleSourceServers(params: { [K in keyof ParamsFrom<'listExtensibleSourceServers', { next?: string, limit?: number }>]: ParamsFrom<'listExtensibleSourceServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExtensibleSourceServers'>]-?: ReturnTypeFrom<'listExtensibleSourceServers'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listExtensibleSourceServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listExtensibleSourceServers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStagingAccounts(params: { [K in keyof ParamsFrom<'listStagingAccounts', { next?: string, limit?: number }>]: ParamsFrom<'listStagingAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStagingAccounts'>]-?: ReturnTypeFrom<'listStagingAccounts'>[K]}['accounts'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accounts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStagingAccounts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listStagingAccounts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.accounts ?? []) ? (result.accounts ?? []) : [result.accounts]) as any;
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

  retryDataReplication: (params: RawParamsFrom<'retryDataReplication'>) => Promise<ReturnTypeFrom<'retryDataReplication'>>  = async params => {
  // undefined
    return this.client.retryDataReplication(params as any).promise();
  }

  startFailbackLaunch: (params: RawParamsFrom<'startFailbackLaunch'>) => Promise<ReturnTypeFrom<'startFailbackLaunch'>>  = async params => {
  // undefined
    return this.client.startFailbackLaunch(params as any).promise();
  }

  startRecovery: (params: RawParamsFrom<'startRecovery'>) => Promise<ReturnTypeFrom<'startRecovery'>>  = async params => {
  // undefined
    return this.client.startRecovery(params as any).promise();
  }

  stopFailback: (params: RawParamsFrom<'stopFailback'>) => Promise<ReturnTypeFrom<'stopFailback'>>  = async params => {
  // undefined
    return this.client.stopFailback(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  terminateRecoveryInstances: (params: RawParamsFrom<'terminateRecoveryInstances'>) => Promise<ReturnTypeFrom<'terminateRecoveryInstances'>>  = async params => {
  // undefined
    return this.client.terminateRecoveryInstances(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateFailbackReplicationConfiguration: (params: RawParamsFrom<'updateFailbackReplicationConfiguration'>) => Promise<ReturnTypeFrom<'updateFailbackReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateFailbackReplicationConfiguration(params as any).promise();
  }

  updateLaunchConfiguration: (params: RawParamsFrom<'updateLaunchConfiguration'>) => Promise<ReturnTypeFrom<'updateLaunchConfiguration'>>  = async params => {
  // undefined
    return this.client.updateLaunchConfiguration(params as any).promise();
  }

  updateReplicationConfiguration: (params: RawParamsFrom<'updateReplicationConfiguration'>) => Promise<ReturnTypeFrom<'updateReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateReplicationConfiguration(params as any).promise();
  }

  updateReplicationConfigurationTemplate: (params: RawParamsFrom<'updateReplicationConfigurationTemplate'>) => Promise<ReturnTypeFrom<'updateReplicationConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.updateReplicationConfigurationTemplate(params as any).promise();
  }
  
  static fromClient(client: AWSDrs): Drs {
    return new Drs(client) as any;
  }
  
  static client(options?: AWSDrs.Types.ClientConfiguration): Drs {
    return new Drs(new AWSDrs(options)) as any;
  }
}  
