import { Request, SMS as AWSSMS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSMS> = AWSSMS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSMS> = AWSSMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSMS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSMS, Extras> = AWSSMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sms';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["getConnectors","getReplicationJobs","getServers"];
    
  createApp: FunctionTypeFrom<'createApp'>;

  createReplicationJob: FunctionTypeFrom<'createReplicationJob'>;

  deleteApp: FunctionTypeFrom<'deleteApp'>;

  deleteAppLaunchConfiguration: FunctionTypeFrom<'deleteAppLaunchConfiguration'>;

  deleteAppReplicationConfiguration: FunctionTypeFrom<'deleteAppReplicationConfiguration'>;

  deleteAppValidationConfiguration: FunctionTypeFrom<'deleteAppValidationConfiguration'>;

  deleteReplicationJob: FunctionTypeFrom<'deleteReplicationJob'>;

  deleteServerCatalog: FunctionTypeFrom<'deleteServerCatalog'>;

  disassociateConnector: FunctionTypeFrom<'disassociateConnector'>;

  generateChangeSet: FunctionTypeFrom<'generateChangeSet'>;

  generateTemplate: FunctionTypeFrom<'generateTemplate'>;

  getApp: FunctionTypeFrom<'getApp'>;

  getAppLaunchConfiguration: FunctionTypeFrom<'getAppLaunchConfiguration'>;

  getAppReplicationConfiguration: FunctionTypeFrom<'getAppReplicationConfiguration'>;

  getAppValidationConfiguration: FunctionTypeFrom<'getAppValidationConfiguration'>;

  getAppValidationOutput: FunctionTypeFrom<'getAppValidationOutput'>;

  getConnectors(params: { [K in keyof Omit<ParamsFrom<'getConnectors', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getConnectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getConnectors'>]-?: ReturnTypeFrom<'getConnectors'>[K]}['connectorList'] }>
  getConnectors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getConnectors'>]-?: ReturnTypeFrom<'getConnectors'>[K]}['connectorList'] }>;

  getReplicationJobs(params: { [K in keyof Omit<ParamsFrom<'getReplicationJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getReplicationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getReplicationJobs'>]-?: ReturnTypeFrom<'getReplicationJobs'>[K]}['replicationJobList'] }>
  getReplicationJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getReplicationJobs'>]-?: ReturnTypeFrom<'getReplicationJobs'>[K]}['replicationJobList'] }>;

  getReplicationRuns(params: { [K in keyof Omit<ParamsFrom<'getReplicationRuns', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getReplicationRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getReplicationRuns'>]-?: ReturnTypeFrom<'getReplicationRuns'>[K]}['replicationRunList'] }>
  ;

  getServers(params: { [K in keyof Omit<ParamsFrom<'getServers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getServers'>]-?: ReturnTypeFrom<'getServers'>[K]}['serverList'] }>
  getServers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getServers'>]-?: ReturnTypeFrom<'getServers'>[K]}['serverList'] }>;

  importAppCatalog: FunctionTypeFrom<'importAppCatalog'>;

  importServerCatalog: FunctionTypeFrom<'importServerCatalog'>;

  launchApp: FunctionTypeFrom<'launchApp'>;

  listApps: FunctionTypeFrom<'listApps'>;

  notifyAppValidationOutput: FunctionTypeFrom<'notifyAppValidationOutput'>;

  putAppLaunchConfiguration: FunctionTypeFrom<'putAppLaunchConfiguration'>;

  putAppReplicationConfiguration: FunctionTypeFrom<'putAppReplicationConfiguration'>;

  putAppValidationConfiguration: FunctionTypeFrom<'putAppValidationConfiguration'>;

  startAppReplication: FunctionTypeFrom<'startAppReplication'>;

  startOnDemandAppReplication: FunctionTypeFrom<'startOnDemandAppReplication'>;

  startOnDemandReplicationRun: FunctionTypeFrom<'startOnDemandReplicationRun'>;

  stopAppReplication: FunctionTypeFrom<'stopAppReplication'>;

  terminateApp: FunctionTypeFrom<'terminateApp'>;

  updateApp: FunctionTypeFrom<'updateApp'>;

  updateReplicationJob: FunctionTypeFrom<'updateReplicationJob'>
}
 
export class SMS implements ClientType {
  private constructor(private readonly client: AWSSMS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sms';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["getConnectors","getReplicationJobs","getServers"] as const;
  
  async createApp(...args: any): Promise<any> {
  // undefined
    return this.client.createApp(...args).promise()
  }

  async createReplicationJob(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationJob(...args).promise()
  }

  async deleteApp(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApp(...args).promise()
  }

  async deleteAppLaunchConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppLaunchConfiguration(...args).promise()
  }

  async deleteAppReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppReplicationConfiguration(...args).promise()
  }

  async deleteAppValidationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppValidationConfiguration(...args).promise()
  }

  async deleteReplicationJob(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationJob(...args).promise()
  }

  async deleteServerCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServerCatalog(...args).promise()
  }

  async disassociateConnector(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateConnector(...args).promise()
  }

  async generateChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.generateChangeSet(...args).promise()
  }

  async generateTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.generateTemplate(...args).promise()
  }

  async getApp(...args: any): Promise<any> {
  // undefined
    return this.client.getApp(...args).promise()
  }

  async getAppLaunchConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getAppLaunchConfiguration(...args).promise()
  }

  async getAppReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getAppReplicationConfiguration(...args).promise()
  }

  async getAppValidationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getAppValidationConfiguration(...args).promise()
  }

  async getAppValidationOutput(...args: any): Promise<any> {
  // undefined
    return this.client.getAppValidationOutput(...args).promise()
  }

  async getConnectors(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"connectorList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getConnectors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.connectorList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getReplicationJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"replicationJobList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getReplicationJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.replicationJobList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getReplicationRuns(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"replicationRunList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getReplicationRuns(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.replicationRunList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getServers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"serverList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getServers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.serverList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async importAppCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.importAppCatalog(...args).promise()
  }

  async importServerCatalog(...args: any): Promise<any> {
  // undefined
    return this.client.importServerCatalog(...args).promise()
  }

  async launchApp(...args: any): Promise<any> {
  // undefined
    return this.client.launchApp(...args).promise()
  }

  async listApps(...args: any): Promise<any> {
  // undefined
    return this.client.listApps(...args).promise()
  }

  async notifyAppValidationOutput(...args: any): Promise<any> {
  // undefined
    return this.client.notifyAppValidationOutput(...args).promise()
  }

  async putAppLaunchConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putAppLaunchConfiguration(...args).promise()
  }

  async putAppReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putAppReplicationConfiguration(...args).promise()
  }

  async putAppValidationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putAppValidationConfiguration(...args).promise()
  }

  async startAppReplication(...args: any): Promise<any> {
  // undefined
    return this.client.startAppReplication(...args).promise()
  }

  async startOnDemandAppReplication(...args: any): Promise<any> {
  // undefined
    return this.client.startOnDemandAppReplication(...args).promise()
  }

  async startOnDemandReplicationRun(...args: any): Promise<any> {
  // undefined
    return this.client.startOnDemandReplicationRun(...args).promise()
  }

  async stopAppReplication(...args: any): Promise<any> {
  // undefined
    return this.client.stopAppReplication(...args).promise()
  }

  async terminateApp(...args: any): Promise<any> {
  // undefined
    return this.client.terminateApp(...args).promise()
  }

  async updateApp(...args: any): Promise<any> {
  // undefined
    return this.client.updateApp(...args).promise()
  }

  async updateReplicationJob(...args: any): Promise<any> {
  // undefined
    return this.client.updateReplicationJob(...args).promise()
  }
  
  static fromClient(client: AWSSMS): ClientType {
    return new SMS(client) as any;
  }
  
  static client(options?: AWSSMS.Types.ClientConfiguration): ClientType {
    return new SMS(new AWSSMS(options)) as any;
  }
}  
