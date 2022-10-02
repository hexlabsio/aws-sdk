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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mgn';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["describeJobs","describeLaunchConfigurationTemplates","describeReplicationConfigurationTemplates","describeSourceServers","describeVcenterClients"];
    
  changeServerLifeCycleState: FunctionTypeFrom<'changeServerLifeCycleState'>;

  createLaunchConfigurationTemplate: FunctionTypeFrom<'createLaunchConfigurationTemplate'>;

  createReplicationConfigurationTemplate: FunctionTypeFrom<'createReplicationConfigurationTemplate'>;

  deleteJob: FunctionTypeFrom<'deleteJob'>;

  deleteLaunchConfigurationTemplate: FunctionTypeFrom<'deleteLaunchConfigurationTemplate'>;

  deleteReplicationConfigurationTemplate: FunctionTypeFrom<'deleteReplicationConfigurationTemplate'>;

  deleteSourceServer: FunctionTypeFrom<'deleteSourceServer'>;

  deleteVcenterClient: FunctionTypeFrom<'deleteVcenterClient'>;

  describeJobLogItems(params: { [K in keyof Omit<ParamsFrom<'describeJobLogItems', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeJobLogItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobLogItems'>]-?: ReturnTypeFrom<'describeJobLogItems'>[K]}['items'] }>
  ;

  describeJobs(params: { [K in keyof Omit<ParamsFrom<'describeJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobs'>]-?: ReturnTypeFrom<'describeJobs'>[K]}['items'] }>
  describeJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeJobs'>]-?: ReturnTypeFrom<'describeJobs'>[K]}['items'] }>;

  describeLaunchConfigurationTemplates(params: { [K in keyof Omit<ParamsFrom<'describeLaunchConfigurationTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeLaunchConfigurationTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLaunchConfigurationTemplates'>]-?: ReturnTypeFrom<'describeLaunchConfigurationTemplates'>[K]}['items'] }>
  describeLaunchConfigurationTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLaunchConfigurationTemplates'>]-?: ReturnTypeFrom<'describeLaunchConfigurationTemplates'>[K]}['items'] }>;

  describeReplicationConfigurationTemplates(params: { [K in keyof Omit<ParamsFrom<'describeReplicationConfigurationTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeReplicationConfigurationTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReplicationConfigurationTemplates'>]-?: ReturnTypeFrom<'describeReplicationConfigurationTemplates'>[K]}['items'] }>
  describeReplicationConfigurationTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeReplicationConfigurationTemplates'>]-?: ReturnTypeFrom<'describeReplicationConfigurationTemplates'>[K]}['items'] }>;

  describeSourceServers(params: { [K in keyof Omit<ParamsFrom<'describeSourceServers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeSourceServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSourceServers'>]-?: ReturnTypeFrom<'describeSourceServers'>[K]}['items'] }>
  describeSourceServers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeSourceServers'>]-?: ReturnTypeFrom<'describeSourceServers'>[K]}['items'] }>;

  describeVcenterClients(params: { [K in keyof Omit<ParamsFrom<'describeVcenterClients', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'describeVcenterClients', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVcenterClients'>]-?: ReturnTypeFrom<'describeVcenterClients'>[K]}['items'] }>
  describeVcenterClients(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVcenterClients'>]-?: ReturnTypeFrom<'describeVcenterClients'>[K]}['items'] }>;

  disconnectFromService: FunctionTypeFrom<'disconnectFromService'>;

  finalizeCutover: FunctionTypeFrom<'finalizeCutover'>;

  getLaunchConfiguration: FunctionTypeFrom<'getLaunchConfiguration'>;

  getReplicationConfiguration: FunctionTypeFrom<'getReplicationConfiguration'>;

  initializeService: FunctionTypeFrom<'initializeService'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  markAsArchived: FunctionTypeFrom<'markAsArchived'>;

  retryDataReplication: FunctionTypeFrom<'retryDataReplication'>;

  startCutover: FunctionTypeFrom<'startCutover'>;

  startReplication: FunctionTypeFrom<'startReplication'>;

  startTest: FunctionTypeFrom<'startTest'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  terminateTargetInstances: FunctionTypeFrom<'terminateTargetInstances'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateLaunchConfiguration: FunctionTypeFrom<'updateLaunchConfiguration'>;

  updateLaunchConfigurationTemplate: FunctionTypeFrom<'updateLaunchConfigurationTemplate'>;

  updateReplicationConfiguration: FunctionTypeFrom<'updateReplicationConfiguration'>;

  updateReplicationConfigurationTemplate: FunctionTypeFrom<'updateReplicationConfigurationTemplate'>;

  updateSourceServerReplicationType: FunctionTypeFrom<'updateSourceServerReplicationType'>
}
 
export class Mgn implements ClientType {
  private constructor(private readonly client: AWSMgn) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mgn';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["describeJobs","describeLaunchConfigurationTemplates","describeReplicationConfigurationTemplates","describeSourceServers","describeVcenterClients"] as const;
  
  async changeServerLifeCycleState(...args: any): Promise<any> {
  // undefined
    return this.client.changeServerLifeCycleState(...args).promise()
  }

  async createLaunchConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createLaunchConfigurationTemplate(...args).promise()
  }

  async createReplicationConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationConfigurationTemplate(...args).promise()
  }

  async deleteJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteJob(...args).promise()
  }

  async deleteLaunchConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLaunchConfigurationTemplate(...args).promise()
  }

  async deleteReplicationConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationConfigurationTemplate(...args).promise()
  }

  async deleteSourceServer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSourceServer(...args).promise()
  }

  async deleteVcenterClient(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVcenterClient(...args).promise()
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

  async describeLaunchConfigurationTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeLaunchConfigurationTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
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

  async describeVcenterClients(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.describeVcenterClients(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disconnectFromService(...args: any): Promise<any> {
  // undefined
    return this.client.disconnectFromService(...args).promise()
  }

  async finalizeCutover(...args: any): Promise<any> {
  // undefined
    return this.client.finalizeCutover(...args).promise()
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

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async markAsArchived(...args: any): Promise<any> {
  // undefined
    return this.client.markAsArchived(...args).promise()
  }

  async retryDataReplication(...args: any): Promise<any> {
  // undefined
    return this.client.retryDataReplication(...args).promise()
  }

  async startCutover(...args: any): Promise<any> {
  // undefined
    return this.client.startCutover(...args).promise()
  }

  async startReplication(...args: any): Promise<any> {
  // undefined
    return this.client.startReplication(...args).promise()
  }

  async startTest(...args: any): Promise<any> {
  // undefined
    return this.client.startTest(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async terminateTargetInstances(...args: any): Promise<any> {
  // undefined
    return this.client.terminateTargetInstances(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateLaunchConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateLaunchConfiguration(...args).promise()
  }

  async updateLaunchConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateLaunchConfigurationTemplate(...args).promise()
  }

  async updateReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateReplicationConfiguration(...args).promise()
  }

  async updateReplicationConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateReplicationConfigurationTemplate(...args).promise()
  }

  async updateSourceServerReplicationType(...args: any): Promise<any> {
  // undefined
    return this.client.updateSourceServerReplicationType(...args).promise()
  }
  
  static fromClient(client: AWSMgn): ClientType {
    return new Mgn(client) as any;
  }
  
  static client(options?: AWSMgn.Types.ClientConfiguration): ClientType {
    return new Mgn(new AWSMgn(options)) as any;
  }
}  
