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
  public readonly topLevelCalls = ["describeJobs","describeLaunchConfigurationTemplates","describeReplicationConfigurationTemplates","describeSourceServers","describeVcenterClients"] as const;
  
  changeServerLifeCycleState: (params: RawParamsFrom<'changeServerLifeCycleState'>) => Promise<ReturnTypeFrom<'changeServerLifeCycleState'>>  = async params => {
  // undefined
    return this.client.changeServerLifeCycleState(params as any).promise();
  }

  createLaunchConfigurationTemplate: (params: RawParamsFrom<'createLaunchConfigurationTemplate'>) => Promise<ReturnTypeFrom<'createLaunchConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.createLaunchConfigurationTemplate(params as any).promise();
  }

  createReplicationConfigurationTemplate: (params: RawParamsFrom<'createReplicationConfigurationTemplate'>) => Promise<ReturnTypeFrom<'createReplicationConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.createReplicationConfigurationTemplate(params as any).promise();
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

  async describeJobLogItems(params: { [K in keyof ParamsFrom<'describeJobLogItems', { next?: string, limit?: number }>]: ParamsFrom<'describeJobLogItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeJobLogItems'>]-?: ReturnTypeFrom<'describeJobLogItems'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobLogItems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeJobs(params: { [K in keyof ParamsFrom<'describeJobs', { next?: string, limit?: number }>]: ParamsFrom<'describeJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeJobs'>]-?: ReturnTypeFrom<'describeJobs'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeLaunchConfigurationTemplates(params: { [K in keyof ParamsFrom<'describeLaunchConfigurationTemplates', { next?: string, limit?: number }>]: ParamsFrom<'describeLaunchConfigurationTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLaunchConfigurationTemplates'>]-?: ReturnTypeFrom<'describeLaunchConfigurationTemplates'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeLaunchConfigurationTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeReplicationConfigurationTemplates(params: { [K in keyof ParamsFrom<'describeReplicationConfigurationTemplates', { next?: string, limit?: number }>]: ParamsFrom<'describeReplicationConfigurationTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReplicationConfigurationTemplates'>]-?: ReturnTypeFrom<'describeReplicationConfigurationTemplates'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeReplicationConfigurationTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeSourceServers(params: { [K in keyof ParamsFrom<'describeSourceServers', { next?: string, limit?: number }>]: ParamsFrom<'describeSourceServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSourceServers'>]-?: ReturnTypeFrom<'describeSourceServers'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeSourceServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeVcenterClients(params: { [K in keyof ParamsFrom<'describeVcenterClients', { next?: string, limit?: number }>]: ParamsFrom<'describeVcenterClients', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVcenterClients'>]-?: ReturnTypeFrom<'describeVcenterClients'>[K]}['items'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeVcenterClients({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.items ?? []) ? (result.items ?? []) : [result.items]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
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

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  markAsArchived: (params: RawParamsFrom<'markAsArchived'>) => Promise<ReturnTypeFrom<'markAsArchived'>>  = async params => {
  // undefined
    return this.client.markAsArchived(params as any).promise();
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

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
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
  
  static fromClient(client: AWSMgn): Mgn {
    return new Mgn(client) as any;
  }
  
  static client(options?: AWSMgn.Types.ClientConfiguration): Mgn {
    return new Mgn(new AWSMgn(options)) as any;
  }
}  
