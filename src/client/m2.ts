import { Request, M2 as AWSM2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSM2> = AWSM2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSM2> = AWSM2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSM2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSM2, Extras> = AWSM2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSM2> = AWSM2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class M2 {
  private constructor(private readonly client: AWSM2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'm2' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplications","listEngineVersions","listEnvironments"] as const;
  
  cancelBatchJobExecution: (params: RawParamsFrom<'cancelBatchJobExecution'>) => Promise<ReturnTypeFrom<'cancelBatchJobExecution'>>  = async params => {
  // undefined
    return this.client.cancelBatchJobExecution(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createDataSetImportTask: (params: RawParamsFrom<'createDataSetImportTask'>) => Promise<ReturnTypeFrom<'createDataSetImportTask'>>  = async params => {
  // undefined
    return this.client.createDataSetImportTask(params as any).promise();
  }

  createDeployment: (params: RawParamsFrom<'createDeployment'>) => Promise<ReturnTypeFrom<'createDeployment'>>  = async params => {
  // undefined
    return this.client.createDeployment(params as any).promise();
  }

  createEnvironment: (params: RawParamsFrom<'createEnvironment'>) => Promise<ReturnTypeFrom<'createEnvironment'>>  = async params => {
  // undefined
    return this.client.createEnvironment(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteApplicationFromEnvironment: (params: RawParamsFrom<'deleteApplicationFromEnvironment'>) => Promise<ReturnTypeFrom<'deleteApplicationFromEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteApplicationFromEnvironment(params as any).promise();
  }

  deleteEnvironment: (params: RawParamsFrom<'deleteEnvironment'>) => Promise<ReturnTypeFrom<'deleteEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteEnvironment(params as any).promise();
  }

  getApplication: (params: RawParamsFrom<'getApplication'>) => Promise<ReturnTypeFrom<'getApplication'>>  = async params => {
  // undefined
    return this.client.getApplication(params as any).promise();
  }

  getApplicationVersion: (params: RawParamsFrom<'getApplicationVersion'>) => Promise<ReturnTypeFrom<'getApplicationVersion'>>  = async params => {
  // undefined
    return this.client.getApplicationVersion(params as any).promise();
  }

  getBatchJobExecution: (params: RawParamsFrom<'getBatchJobExecution'>) => Promise<ReturnTypeFrom<'getBatchJobExecution'>>  = async params => {
  // undefined
    return this.client.getBatchJobExecution(params as any).promise();
  }

  getDataSetDetails: (params: RawParamsFrom<'getDataSetDetails'>) => Promise<ReturnTypeFrom<'getDataSetDetails'>>  = async params => {
  // undefined
    return this.client.getDataSetDetails(params as any).promise();
  }

  getDataSetImportTask: (params: RawParamsFrom<'getDataSetImportTask'>) => Promise<ReturnTypeFrom<'getDataSetImportTask'>>  = async params => {
  // undefined
    return this.client.getDataSetImportTask(params as any).promise();
  }

  getDeployment: (params: RawParamsFrom<'getDeployment'>) => Promise<ReturnTypeFrom<'getDeployment'>>  = async params => {
  // undefined
    return this.client.getDeployment(params as any).promise();
  }

  getEnvironment: (params: RawParamsFrom<'getEnvironment'>) => Promise<ReturnTypeFrom<'getEnvironment'>>  = async params => {
  // undefined
    return this.client.getEnvironment(params as any).promise();
  }

  async listApplicationVersions(params: { [K in keyof ParamsFrom<'listApplicationVersions', { next?: string, limit?: number }>]: ParamsFrom<'listApplicationVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplicationVersions'>]-?: ReturnTypeFrom<'listApplicationVersions'>[K]}['applicationVersions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applicationVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplicationVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listApplicationVersions' })).toString('base64');
    const member = (Array.isArray(result.applicationVersions ?? []) ? (result.applicationVersions ?? []) : [result.applicationVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listApplications(params: { [K in keyof ParamsFrom<'listApplications', { next?: string, limit?: number }>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listApplications' })).toString('base64');
    const member = (Array.isArray(result.applications ?? []) ? (result.applications ?? []) : [result.applications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBatchJobDefinitions(params: { [K in keyof ParamsFrom<'listBatchJobDefinitions', { next?: string, limit?: number }>]: ParamsFrom<'listBatchJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBatchJobDefinitions'>]-?: ReturnTypeFrom<'listBatchJobDefinitions'>[K]}['batchJobDefinitions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"batchJobDefinitions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBatchJobDefinitions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listBatchJobDefinitions' })).toString('base64');
    const member = (Array.isArray(result.batchJobDefinitions ?? []) ? (result.batchJobDefinitions ?? []) : [result.batchJobDefinitions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBatchJobExecutions(params: { [K in keyof ParamsFrom<'listBatchJobExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listBatchJobExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBatchJobExecutions'>]-?: ReturnTypeFrom<'listBatchJobExecutions'>[K]}['batchJobExecutions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"batchJobExecutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBatchJobExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listBatchJobExecutions' })).toString('base64');
    const member = (Array.isArray(result.batchJobExecutions ?? []) ? (result.batchJobExecutions ?? []) : [result.batchJobExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSetImportHistory(params: { [K in keyof ParamsFrom<'listDataSetImportHistory', { next?: string, limit?: number }>]: ParamsFrom<'listDataSetImportHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataSetImportHistory'>]-?: ReturnTypeFrom<'listDataSetImportHistory'>[K]}['dataSetImportTasks'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dataSetImportTasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDataSetImportHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDataSetImportHistory' })).toString('base64');
    const member = (Array.isArray(result.dataSetImportTasks ?? []) ? (result.dataSetImportTasks ?? []) : [result.dataSetImportTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSets(params: { [K in keyof ParamsFrom<'listDataSets', { next?: string, limit?: number }>]: ParamsFrom<'listDataSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataSets'>]-?: ReturnTypeFrom<'listDataSets'>[K]}['dataSets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dataSets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDataSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDataSets' })).toString('base64');
    const member = (Array.isArray(result.dataSets ?? []) ? (result.dataSets ?? []) : [result.dataSets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeployments(params: { [K in keyof ParamsFrom<'listDeployments', { next?: string, limit?: number }>]: ParamsFrom<'listDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeployments'>]-?: ReturnTypeFrom<'listDeployments'>[K]}['deployments'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"deployments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeployments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDeployments' })).toString('base64');
    const member = (Array.isArray(result.deployments ?? []) ? (result.deployments ?? []) : [result.deployments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEngineVersions(params: { [K in keyof ParamsFrom<'listEngineVersions', { next?: string, limit?: number }>]: ParamsFrom<'listEngineVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEngineVersions'>]-?: ReturnTypeFrom<'listEngineVersions'>[K]}['engineVersions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"engineVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEngineVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEngineVersions' })).toString('base64');
    const member = (Array.isArray(result.engineVersions ?? []) ? (result.engineVersions ?? []) : [result.engineVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironments(params: { [K in keyof ParamsFrom<'listEnvironments', { next?: string, limit?: number }>]: ParamsFrom<'listEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['environments'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"environments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEnvironments' })).toString('base64');
    const member = (Array.isArray(result.environments ?? []) ? (result.environments ?? []) : [result.environments]) as any;
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

  startApplication: (params: RawParamsFrom<'startApplication'>) => Promise<ReturnTypeFrom<'startApplication'>>  = async params => {
  // undefined
    return this.client.startApplication(params as any).promise();
  }

  startBatchJob: (params: RawParamsFrom<'startBatchJob'>) => Promise<ReturnTypeFrom<'startBatchJob'>>  = async params => {
  // undefined
    return this.client.startBatchJob(params as any).promise();
  }

  stopApplication: (params: RawParamsFrom<'stopApplication'>) => Promise<ReturnTypeFrom<'stopApplication'>>  = async params => {
  // undefined
    return this.client.stopApplication(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }

  updateEnvironment: (params: RawParamsFrom<'updateEnvironment'>) => Promise<ReturnTypeFrom<'updateEnvironment'>>  = async params => {
  // undefined
    return this.client.updateEnvironment(params as any).promise();
  }
  
  static fromClient(client: AWSM2): M2 {
    return new M2(client) as any;
  }
  
  static client(options?: AWSM2.Types.ClientConfiguration): M2 {
    return new M2(new AWSM2(options)) as any;
  }
}  
