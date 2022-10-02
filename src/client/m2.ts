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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'm2';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listApplications","listEngineVersions","listEnvironments"];
    
  cancelBatchJobExecution: FunctionTypeFrom<'cancelBatchJobExecution'>;

  createApplication: FunctionTypeFrom<'createApplication'>;

  createDataSetImportTask: FunctionTypeFrom<'createDataSetImportTask'>;

  createDeployment: FunctionTypeFrom<'createDeployment'>;

  createEnvironment: FunctionTypeFrom<'createEnvironment'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteApplicationFromEnvironment: FunctionTypeFrom<'deleteApplicationFromEnvironment'>;

  deleteEnvironment: FunctionTypeFrom<'deleteEnvironment'>;

  getApplication: FunctionTypeFrom<'getApplication'>;

  getApplicationVersion: FunctionTypeFrom<'getApplicationVersion'>;

  getBatchJobExecution: FunctionTypeFrom<'getBatchJobExecution'>;

  getDataSetDetails: FunctionTypeFrom<'getDataSetDetails'>;

  getDataSetImportTask: FunctionTypeFrom<'getDataSetImportTask'>;

  getDeployment: FunctionTypeFrom<'getDeployment'>;

  getEnvironment: FunctionTypeFrom<'getEnvironment'>;

  listApplicationVersions(params: { [K in keyof Omit<ParamsFrom<'listApplicationVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listApplicationVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplicationVersions'>]-?: ReturnTypeFrom<'listApplicationVersions'>[K]}['applicationVersions'] }>
  ;

  listApplications(params: { [K in keyof Omit<ParamsFrom<'listApplications', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'] }>
  listApplications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applications'] }>;

  listBatchJobDefinitions(params: { [K in keyof Omit<ParamsFrom<'listBatchJobDefinitions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listBatchJobDefinitions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBatchJobDefinitions'>]-?: ReturnTypeFrom<'listBatchJobDefinitions'>[K]}['batchJobDefinitions'] }>
  ;

  listBatchJobExecutions(params: { [K in keyof Omit<ParamsFrom<'listBatchJobExecutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listBatchJobExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBatchJobExecutions'>]-?: ReturnTypeFrom<'listBatchJobExecutions'>[K]}['batchJobExecutions'] }>
  ;

  listDataSetImportHistory(params: { [K in keyof Omit<ParamsFrom<'listDataSetImportHistory', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDataSetImportHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataSetImportHistory'>]-?: ReturnTypeFrom<'listDataSetImportHistory'>[K]}['dataSetImportTasks'] }>
  ;

  listDataSets(params: { [K in keyof Omit<ParamsFrom<'listDataSets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDataSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataSets'>]-?: ReturnTypeFrom<'listDataSets'>[K]}['dataSets'] }>
  ;

  listDeployments(params: { [K in keyof Omit<ParamsFrom<'listDeployments', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDeployments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeployments'>]-?: ReturnTypeFrom<'listDeployments'>[K]}['deployments'] }>
  ;

  listEngineVersions(params: { [K in keyof Omit<ParamsFrom<'listEngineVersions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEngineVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEngineVersions'>]-?: ReturnTypeFrom<'listEngineVersions'>[K]}['engineVersions'] }>
  listEngineVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEngineVersions'>]-?: ReturnTypeFrom<'listEngineVersions'>[K]}['engineVersions'] }>;

  listEnvironments(params: { [K in keyof Omit<ParamsFrom<'listEnvironments', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['environments'] }>
  listEnvironments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['environments'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startApplication: FunctionTypeFrom<'startApplication'>;

  startBatchJob: FunctionTypeFrom<'startBatchJob'>;

  stopApplication: FunctionTypeFrom<'stopApplication'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>;

  updateEnvironment: FunctionTypeFrom<'updateEnvironment'>
}
 
export class M2 implements ClientType {
  private constructor(private readonly client: AWSM2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'm2';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listApplications","listEngineVersions","listEnvironments"] as const;
  
  async cancelBatchJobExecution(...args: any): Promise<any> {
  // undefined
    return this.client.cancelBatchJobExecution(...args).promise()
  }

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createDataSetImportTask(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSetImportTask(...args).promise()
  }

  async createDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.createDeployment(...args).promise()
  }

  async createEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironment(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteApplicationFromEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplicationFromEnvironment(...args).promise()
  }

  async deleteEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironment(...args).promise()
  }

  async getApplication(...args: any): Promise<any> {
  // undefined
    return this.client.getApplication(...args).promise()
  }

  async getApplicationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getApplicationVersion(...args).promise()
  }

  async getBatchJobExecution(...args: any): Promise<any> {
  // undefined
    return this.client.getBatchJobExecution(...args).promise()
  }

  async getDataSetDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getDataSetDetails(...args).promise()
  }

  async getDataSetImportTask(...args: any): Promise<any> {
  // undefined
    return this.client.getDataSetImportTask(...args).promise()
  }

  async getDeployment(...args: any): Promise<any> {
  // undefined
    return this.client.getDeployment(...args).promise()
  }

  async getEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironment(...args).promise()
  }

  async listApplicationVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applicationVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplicationVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.applicationVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listApplications(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.applications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBatchJobDefinitions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"batchJobDefinitions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBatchJobDefinitions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.batchJobDefinitions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBatchJobExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"batchJobExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listBatchJobExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.batchJobExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSetImportHistory(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dataSetImportTasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDataSetImportHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.dataSetImportTasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dataSets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDataSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.dataSets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDeployments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"deployments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeployments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.deployments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEngineVersions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"engineVersions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEngineVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.engineVersions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"environments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEnvironments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.environments ?? [];
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

  async startApplication(...args: any): Promise<any> {
  // undefined
    return this.client.startApplication(...args).promise()
  }

  async startBatchJob(...args: any): Promise<any> {
  // undefined
    return this.client.startBatchJob(...args).promise()
  }

  async stopApplication(...args: any): Promise<any> {
  // undefined
    return this.client.stopApplication(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }

  async updateEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironment(...args).promise()
  }
  
  static fromClient(client: AWSM2): ClientType {
    return new M2(client) as any;
  }
  
  static client(options?: AWSM2.Types.ClientConfiguration): ClientType {
    return new M2(new AWSM2(options)) as any;
  }
}  
