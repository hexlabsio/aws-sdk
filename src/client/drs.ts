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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'drs';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["describeJobs","describeRecoveryInstances","describeReplicationConfigurationTemplates","describeSourceServers","listStagingAccounts"];
    
  createExtendedSourceServer: FunctionTypeFrom<'createExtendedSourceServer'>;

  createReplicationConfigurationTemplate: FunctionTypeFrom<'createReplicationConfigurationTemplate'>;

  deleteJob: FunctionTypeFrom<'deleteJob'>;

  deleteRecoveryInstance: FunctionTypeFrom<'deleteRecoveryInstance'>;

  deleteReplicationConfigurationTemplate: FunctionTypeFrom<'deleteReplicationConfigurationTemplate'>;

  deleteSourceServer: FunctionTypeFrom<'deleteSourceServer'>;

  describeJobLogItems(params: { [K in keyof Omit<ParamsFrom<'describeJobLogItems', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeJobLogItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobLogItems'>]-?: ReturnTypeFrom<'describeJobLogItems'>[K]}['items'] }>
  ;

  describeJobs(params: { [K in keyof Omit<ParamsFrom<'describeJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobs'>]-?: ReturnTypeFrom<'describeJobs'>[K]}['items'] }>
  describeJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobs'>]-?: ReturnTypeFrom<'describeJobs'>[K]}['items'] }>;

  describeRecoveryInstances(params: { [K in keyof Omit<ParamsFrom<'describeRecoveryInstances', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeRecoveryInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRecoveryInstances'>]-?: ReturnTypeFrom<'describeRecoveryInstances'>[K]}['items'] }>
  describeRecoveryInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRecoveryInstances'>]-?: ReturnTypeFrom<'describeRecoveryInstances'>[K]}['items'] }>;

  describeRecoverySnapshots(params: { [K in keyof Omit<ParamsFrom<'describeRecoverySnapshots', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeRecoverySnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeRecoverySnapshots'>]-?: ReturnTypeFrom<'describeRecoverySnapshots'>[K]}['items'] }>
  ;

  describeReplicationConfigurationTemplates(params: { [K in keyof Omit<ParamsFrom<'describeReplicationConfigurationTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeReplicationConfigurationTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReplicationConfigurationTemplates'>]-?: ReturnTypeFrom<'describeReplicationConfigurationTemplates'>[K]}['items'] }>
  describeReplicationConfigurationTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReplicationConfigurationTemplates'>]-?: ReturnTypeFrom<'describeReplicationConfigurationTemplates'>[K]}['items'] }>;

  describeSourceServers(params: { [K in keyof Omit<ParamsFrom<'describeSourceServers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeSourceServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSourceServers'>]-?: ReturnTypeFrom<'describeSourceServers'>[K]}['items'] }>
  describeSourceServers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSourceServers'>]-?: ReturnTypeFrom<'describeSourceServers'>[K]}['items'] }>;

  disconnectRecoveryInstance: FunctionTypeFrom<'disconnectRecoveryInstance'>;

  disconnectSourceServer: FunctionTypeFrom<'disconnectSourceServer'>;

  getFailbackReplicationConfiguration: FunctionTypeFrom<'getFailbackReplicationConfiguration'>;

  getLaunchConfiguration: FunctionTypeFrom<'getLaunchConfiguration'>;

  getReplicationConfiguration: FunctionTypeFrom<'getReplicationConfiguration'>;

  initializeService: FunctionTypeFrom<'initializeService'>;

  listExtensibleSourceServers(params: { [K in keyof Omit<ParamsFrom<'listExtensibleSourceServers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listExtensibleSourceServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExtensibleSourceServers'>]-?: ReturnTypeFrom<'listExtensibleSourceServers'>[K]}['items'] }>
  ;

  listStagingAccounts(params: { [K in keyof Omit<ParamsFrom<'listStagingAccounts', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listStagingAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStagingAccounts'>]-?: ReturnTypeFrom<'listStagingAccounts'>[K]}['accounts'] }>
  listStagingAccounts(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStagingAccounts'>]-?: ReturnTypeFrom<'listStagingAccounts'>[K]}['accounts'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  retryDataReplication: FunctionTypeFrom<'retryDataReplication'>;

  startFailbackLaunch: FunctionTypeFrom<'startFailbackLaunch'>;

  startRecovery: FunctionTypeFrom<'startRecovery'>;

  stopFailback: FunctionTypeFrom<'stopFailback'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  terminateRecoveryInstances: FunctionTypeFrom<'terminateRecoveryInstances'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateFailbackReplicationConfiguration: FunctionTypeFrom<'updateFailbackReplicationConfiguration'>;

  updateLaunchConfiguration: FunctionTypeFrom<'updateLaunchConfiguration'>;

  updateReplicationConfiguration: FunctionTypeFrom<'updateReplicationConfiguration'>;

  updateReplicationConfigurationTemplate: FunctionTypeFrom<'updateReplicationConfigurationTemplate'>
}
 
export class Drs implements ClientType {
  private constructor(private readonly client: AWSDrs) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'drs';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["describeJobs","describeRecoveryInstances","describeReplicationConfigurationTemplates","describeSourceServers","listStagingAccounts"] as const;
  
  async createExtendedSourceServer(...args: any): Promise<any> {
  // undefined
    return this.client.createExtendedSourceServer(...args).promise()
  }

  async createReplicationConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationConfigurationTemplate(...args).promise()
  }

  async deleteJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJob(...args).promise()
  }

  async deleteRecoveryInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRecoveryInstance(...args).promise()
  }

  async deleteReplicationConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationConfigurationTemplate(...args).promise()
  }

  async deleteSourceServer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSourceServer(...args).promise()
  }

  async describeJobLogItems(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobLogItems(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRecoveryInstances(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRecoveryInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRecoverySnapshots(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeRecoverySnapshots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReplicationConfigurationTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeReplicationConfigurationTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSourceServers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeSourceServers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disconnectRecoveryInstance(...args: any): Promise<any> {
  // undefined
    return this.client.disconnectRecoveryInstance(...args).promise()
  }

  async disconnectSourceServer(...args: any): Promise<any> {
  // undefined
    return this.client.disconnectSourceServer(...args).promise()
  }

  async getFailbackReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getFailbackReplicationConfiguration(...args).promise()
  }

  async getLaunchConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getLaunchConfiguration(...args).promise()
  }

  async getReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getReplicationConfiguration(...args).promise()
  }

  async initializeService(...args: any): Promise<any> {
  // undefined
    return this.client.initializeService(...args).promise()
  }

  async listExtensibleSourceServers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listExtensibleSourceServers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStagingAccounts(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accounts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listStagingAccounts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.accounts ?? [];
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

  async retryDataReplication(...args: any): Promise<any> {
  // undefined
    return this.client.retryDataReplication(...args).promise()
  }

  async startFailbackLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.startFailbackLaunch(...args).promise()
  }

  async startRecovery(...args: any): Promise<any> {
  // undefined
    return this.client.startRecovery(...args).promise()
  }

  async stopFailback(...args: any): Promise<any> {
  // undefined
    return this.client.stopFailback(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async terminateRecoveryInstances(...args: any): Promise<any> {
  // undefined
    return this.client.terminateRecoveryInstances(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateFailbackReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateFailbackReplicationConfiguration(...args).promise()
  }

  async updateLaunchConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateLaunchConfiguration(...args).promise()
  }

  async updateReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateReplicationConfiguration(...args).promise()
  }

  async updateReplicationConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateReplicationConfigurationTemplate(...args).promise()
  }
  
  static fromClient(client: AWSDrs): ClientType {
    return new Drs(client) as any;
  }
  
  static client(options?: AWSDrs.Types.ClientConfiguration): ClientType {
    return new Drs(new AWSDrs(options)) as any;
  }
}  
