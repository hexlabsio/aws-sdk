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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSMS> = AWSSMS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SMS {
  private constructor(private readonly client: AWSSMS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sms' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["getConnectors","getReplicationJobs","getServers"] as const;
  
  createApp: (params: RawParamsFrom<'createApp'>) => Promise<ReturnTypeFrom<'createApp'>>  = async params => {
  // undefined
    return this.client.createApp(params as any).promise();
  }

  createReplicationJob: (params: RawParamsFrom<'createReplicationJob'>) => Promise<ReturnTypeFrom<'createReplicationJob'>>  = async params => {
  // undefined
    return this.client.createReplicationJob(params as any).promise();
  }

  deleteApp: (params: RawParamsFrom<'deleteApp'>) => Promise<ReturnTypeFrom<'deleteApp'>>  = async params => {
  // undefined
    return this.client.deleteApp(params as any).promise();
  }

  deleteAppLaunchConfiguration: (params: RawParamsFrom<'deleteAppLaunchConfiguration'>) => Promise<ReturnTypeFrom<'deleteAppLaunchConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteAppLaunchConfiguration(params as any).promise();
  }

  deleteAppReplicationConfiguration: (params: RawParamsFrom<'deleteAppReplicationConfiguration'>) => Promise<ReturnTypeFrom<'deleteAppReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteAppReplicationConfiguration(params as any).promise();
  }

  deleteAppValidationConfiguration: (params: RawParamsFrom<'deleteAppValidationConfiguration'>) => Promise<ReturnTypeFrom<'deleteAppValidationConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteAppValidationConfiguration(params as any).promise();
  }

  deleteReplicationJob: (params: RawParamsFrom<'deleteReplicationJob'>) => Promise<ReturnTypeFrom<'deleteReplicationJob'>>  = async params => {
  // undefined
    return this.client.deleteReplicationJob(params as any).promise();
  }

  deleteServerCatalog: (params: RawParamsFrom<'deleteServerCatalog'>) => Promise<ReturnTypeFrom<'deleteServerCatalog'>>  = async params => {
  // undefined
    return this.client.deleteServerCatalog(params as any).promise();
  }

  disassociateConnector: (params: RawParamsFrom<'disassociateConnector'>) => Promise<ReturnTypeFrom<'disassociateConnector'>>  = async params => {
  // undefined
    return this.client.disassociateConnector(params as any).promise();
  }

  generateChangeSet: (params: RawParamsFrom<'generateChangeSet'>) => Promise<ReturnTypeFrom<'generateChangeSet'>>  = async params => {
  // undefined
    return this.client.generateChangeSet(params as any).promise();
  }

  generateTemplate: (params: RawParamsFrom<'generateTemplate'>) => Promise<ReturnTypeFrom<'generateTemplate'>>  = async params => {
  // undefined
    return this.client.generateTemplate(params as any).promise();
  }

  getApp: (params: RawParamsFrom<'getApp'>) => Promise<ReturnTypeFrom<'getApp'>>  = async params => {
  // undefined
    return this.client.getApp(params as any).promise();
  }

  getAppLaunchConfiguration: (params: RawParamsFrom<'getAppLaunchConfiguration'>) => Promise<ReturnTypeFrom<'getAppLaunchConfiguration'>>  = async params => {
  // undefined
    return this.client.getAppLaunchConfiguration(params as any).promise();
  }

  getAppReplicationConfiguration: (params: RawParamsFrom<'getAppReplicationConfiguration'>) => Promise<ReturnTypeFrom<'getAppReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.getAppReplicationConfiguration(params as any).promise();
  }

  getAppValidationConfiguration: (params: RawParamsFrom<'getAppValidationConfiguration'>) => Promise<ReturnTypeFrom<'getAppValidationConfiguration'>>  = async params => {
  // undefined
    return this.client.getAppValidationConfiguration(params as any).promise();
  }

  getAppValidationOutput: (params: RawParamsFrom<'getAppValidationOutput'>) => Promise<ReturnTypeFrom<'getAppValidationOutput'>>  = async params => {
  // undefined
    return this.client.getAppValidationOutput(params as any).promise();
  }

  async getConnectors(params: { [K in keyof ParamsFrom<'getConnectors', { next?: string, limit?: number }>]: ParamsFrom<'getConnectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getConnectors'>]-?: ReturnTypeFrom<'getConnectors'>[K]}['connectorList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"connectorList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getConnectors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.connectorList ?? []) ? (result.connectorList ?? []) : [result.connectorList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async getReplicationJobs(params: { [K in keyof ParamsFrom<'getReplicationJobs', { next?: string, limit?: number }>]: ParamsFrom<'getReplicationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getReplicationJobs'>]-?: ReturnTypeFrom<'getReplicationJobs'>[K]}['replicationJobList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"replicationJobList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getReplicationJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.replicationJobList ?? []) ? (result.replicationJobList ?? []) : [result.replicationJobList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async getReplicationRuns(params: { [K in keyof ParamsFrom<'getReplicationRuns', { next?: string, limit?: number }>]: ParamsFrom<'getReplicationRuns', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getReplicationRuns'>]-?: ReturnTypeFrom<'getReplicationRuns'>[K]}['replicationRunList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"replicationRunList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getReplicationRuns({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.replicationRunList ?? []) ? (result.replicationRunList ?? []) : [result.replicationRunList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async getServers(params: { [K in keyof ParamsFrom<'getServers', { next?: string, limit?: number }>]: ParamsFrom<'getServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getServers'>]-?: ReturnTypeFrom<'getServers'>[K]}['serverList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"serverList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.serverList ?? []) ? (result.serverList ?? []) : [result.serverList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  importAppCatalog: (params: RawParamsFrom<'importAppCatalog'>) => Promise<ReturnTypeFrom<'importAppCatalog'>>  = async params => {
  // undefined
    return this.client.importAppCatalog(params as any).promise();
  }

  importServerCatalog: (params: RawParamsFrom<'importServerCatalog'>) => Promise<ReturnTypeFrom<'importServerCatalog'>>  = async params => {
  // undefined
    return this.client.importServerCatalog(params as any).promise();
  }

  launchApp: (params: RawParamsFrom<'launchApp'>) => Promise<ReturnTypeFrom<'launchApp'>>  = async params => {
  // undefined
    return this.client.launchApp(params as any).promise();
  }

  listApps: (params: RawParamsFrom<'listApps'>) => Promise<ReturnTypeFrom<'listApps'>>  = async params => {
  // undefined
    return this.client.listApps(params as any).promise();
  }

  notifyAppValidationOutput: (params: RawParamsFrom<'notifyAppValidationOutput'>) => Promise<ReturnTypeFrom<'notifyAppValidationOutput'>>  = async params => {
  // undefined
    return this.client.notifyAppValidationOutput(params as any).promise();
  }

  putAppLaunchConfiguration: (params: RawParamsFrom<'putAppLaunchConfiguration'>) => Promise<ReturnTypeFrom<'putAppLaunchConfiguration'>>  = async params => {
  // undefined
    return this.client.putAppLaunchConfiguration(params as any).promise();
  }

  putAppReplicationConfiguration: (params: RawParamsFrom<'putAppReplicationConfiguration'>) => Promise<ReturnTypeFrom<'putAppReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.putAppReplicationConfiguration(params as any).promise();
  }

  putAppValidationConfiguration: (params: RawParamsFrom<'putAppValidationConfiguration'>) => Promise<ReturnTypeFrom<'putAppValidationConfiguration'>>  = async params => {
  // undefined
    return this.client.putAppValidationConfiguration(params as any).promise();
  }

  startAppReplication: (params: RawParamsFrom<'startAppReplication'>) => Promise<ReturnTypeFrom<'startAppReplication'>>  = async params => {
  // undefined
    return this.client.startAppReplication(params as any).promise();
  }

  startOnDemandAppReplication: (params: RawParamsFrom<'startOnDemandAppReplication'>) => Promise<ReturnTypeFrom<'startOnDemandAppReplication'>>  = async params => {
  // undefined
    return this.client.startOnDemandAppReplication(params as any).promise();
  }

  startOnDemandReplicationRun: (params: RawParamsFrom<'startOnDemandReplicationRun'>) => Promise<ReturnTypeFrom<'startOnDemandReplicationRun'>>  = async params => {
  // undefined
    return this.client.startOnDemandReplicationRun(params as any).promise();
  }

  stopAppReplication: (params: RawParamsFrom<'stopAppReplication'>) => Promise<ReturnTypeFrom<'stopAppReplication'>>  = async params => {
  // undefined
    return this.client.stopAppReplication(params as any).promise();
  }

  terminateApp: (params: RawParamsFrom<'terminateApp'>) => Promise<ReturnTypeFrom<'terminateApp'>>  = async params => {
  // undefined
    return this.client.terminateApp(params as any).promise();
  }

  updateApp: (params: RawParamsFrom<'updateApp'>) => Promise<ReturnTypeFrom<'updateApp'>>  = async params => {
  // undefined
    return this.client.updateApp(params as any).promise();
  }

  updateReplicationJob: (params: RawParamsFrom<'updateReplicationJob'>) => Promise<ReturnTypeFrom<'updateReplicationJob'>>  = async params => {
  // undefined
    return this.client.updateReplicationJob(params as any).promise();
  }
  
  static fromClient(client: AWSSMS): SMS {
    return new SMS(client) as any;
  }
  
  static client(options?: AWSSMS.Types.ClientConfiguration): SMS {
    return new SMS(new AWSSMS(options)) as any;
  }
}  
