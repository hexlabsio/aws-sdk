import { Request, RoboMaker as AWSRoboMaker } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRoboMaker> = AWSRoboMaker[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRoboMaker> = AWSRoboMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRoboMaker[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRoboMaker, Extras> = AWSRoboMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'robomaker';
    global: false;
    category: 'Robotics'
    topLevelCalls: readonly ["listDeploymentJobs","listFleets","listRobotApplications","listRobots","listSimulationApplications","listSimulationJobBatches","listSimulationJobs","listWorldExportJobs","listWorldGenerationJobs","listWorldTemplates","listWorlds"];
    
  batchDeleteWorlds: FunctionTypeFrom<'batchDeleteWorlds'>;

  batchDescribeSimulationJob: FunctionTypeFrom<'batchDescribeSimulationJob'>;

  cancelDeploymentJob: FunctionTypeFrom<'cancelDeploymentJob'>;

  cancelSimulationJob: FunctionTypeFrom<'cancelSimulationJob'>;

  cancelSimulationJobBatch: FunctionTypeFrom<'cancelSimulationJobBatch'>;

  cancelWorldExportJob: FunctionTypeFrom<'cancelWorldExportJob'>;

  cancelWorldGenerationJob: FunctionTypeFrom<'cancelWorldGenerationJob'>;

  createDeploymentJob: FunctionTypeFrom<'createDeploymentJob'>;

  createFleet: FunctionTypeFrom<'createFleet'>;

  createRobot: FunctionTypeFrom<'createRobot'>;

  createRobotApplication: FunctionTypeFrom<'createRobotApplication'>;

  createRobotApplicationVersion: FunctionTypeFrom<'createRobotApplicationVersion'>;

  createSimulationApplication: FunctionTypeFrom<'createSimulationApplication'>;

  createSimulationApplicationVersion: FunctionTypeFrom<'createSimulationApplicationVersion'>;

  createSimulationJob: FunctionTypeFrom<'createSimulationJob'>;

  createWorldExportJob: FunctionTypeFrom<'createWorldExportJob'>;

  createWorldGenerationJob: FunctionTypeFrom<'createWorldGenerationJob'>;

  createWorldTemplate: FunctionTypeFrom<'createWorldTemplate'>;

  deleteFleet: FunctionTypeFrom<'deleteFleet'>;

  deleteRobot: FunctionTypeFrom<'deleteRobot'>;

  deleteRobotApplication: FunctionTypeFrom<'deleteRobotApplication'>;

  deleteSimulationApplication: FunctionTypeFrom<'deleteSimulationApplication'>;

  deleteWorldTemplate: FunctionTypeFrom<'deleteWorldTemplate'>;

  deregisterRobot: FunctionTypeFrom<'deregisterRobot'>;

  describeDeploymentJob: FunctionTypeFrom<'describeDeploymentJob'>;

  describeFleet: FunctionTypeFrom<'describeFleet'>;

  describeRobot: FunctionTypeFrom<'describeRobot'>;

  describeRobotApplication: FunctionTypeFrom<'describeRobotApplication'>;

  describeSimulationApplication: FunctionTypeFrom<'describeSimulationApplication'>;

  describeSimulationJob: FunctionTypeFrom<'describeSimulationJob'>;

  describeSimulationJobBatch: FunctionTypeFrom<'describeSimulationJobBatch'>;

  describeWorld: FunctionTypeFrom<'describeWorld'>;

  describeWorldExportJob: FunctionTypeFrom<'describeWorldExportJob'>;

  describeWorldGenerationJob: FunctionTypeFrom<'describeWorldGenerationJob'>;

  describeWorldTemplate: FunctionTypeFrom<'describeWorldTemplate'>;

  getWorldTemplateBody: FunctionTypeFrom<'getWorldTemplateBody'>;

  listDeploymentJobs(params: { [K in keyof Omit<ParamsFrom<'listDeploymentJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDeploymentJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeploymentJobs'>]-?: ReturnTypeFrom<'listDeploymentJobs'>[K]}['deploymentJobs'] }>
  listDeploymentJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeploymentJobs'>]-?: ReturnTypeFrom<'listDeploymentJobs'>[K]}['deploymentJobs'] }>;

  listFleets(params: { [K in keyof Omit<ParamsFrom<'listFleets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['fleetDetails'] }>
  listFleets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['fleetDetails'] }>;

  listRobotApplications(params: { [K in keyof Omit<ParamsFrom<'listRobotApplications', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRobotApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRobotApplications'>]-?: ReturnTypeFrom<'listRobotApplications'>[K]}['robotApplicationSummaries'] }>
  listRobotApplications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRobotApplications'>]-?: ReturnTypeFrom<'listRobotApplications'>[K]}['robotApplicationSummaries'] }>;

  listRobots(params: { [K in keyof Omit<ParamsFrom<'listRobots', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listRobots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRobots'>]-?: ReturnTypeFrom<'listRobots'>[K]}['robots'] }>
  listRobots(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRobots'>]-?: ReturnTypeFrom<'listRobots'>[K]}['robots'] }>;

  listSimulationApplications(params: { [K in keyof Omit<ParamsFrom<'listSimulationApplications', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSimulationApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSimulationApplications'>]-?: ReturnTypeFrom<'listSimulationApplications'>[K]}['simulationApplicationSummaries'] }>
  listSimulationApplications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSimulationApplications'>]-?: ReturnTypeFrom<'listSimulationApplications'>[K]}['simulationApplicationSummaries'] }>;

  listSimulationJobBatches(params: { [K in keyof Omit<ParamsFrom<'listSimulationJobBatches', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSimulationJobBatches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSimulationJobBatches'>]-?: ReturnTypeFrom<'listSimulationJobBatches'>[K]}['simulationJobBatchSummaries'] }>
  listSimulationJobBatches(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSimulationJobBatches'>]-?: ReturnTypeFrom<'listSimulationJobBatches'>[K]}['simulationJobBatchSummaries'] }>;

  listSimulationJobs(params: { [K in keyof Omit<ParamsFrom<'listSimulationJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSimulationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSimulationJobs'>]-?: ReturnTypeFrom<'listSimulationJobs'>[K]}['simulationJobSummaries'] }>
  listSimulationJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSimulationJobs'>]-?: ReturnTypeFrom<'listSimulationJobs'>[K]}['simulationJobSummaries'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listWorldExportJobs(params: { [K in keyof Omit<ParamsFrom<'listWorldExportJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorldExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorldExportJobs'>]-?: ReturnTypeFrom<'listWorldExportJobs'>[K]}['worldExportJobSummaries'] }>
  listWorldExportJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorldExportJobs'>]-?: ReturnTypeFrom<'listWorldExportJobs'>[K]}['worldExportJobSummaries'] }>;

  listWorldGenerationJobs(params: { [K in keyof Omit<ParamsFrom<'listWorldGenerationJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorldGenerationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorldGenerationJobs'>]-?: ReturnTypeFrom<'listWorldGenerationJobs'>[K]}['worldGenerationJobSummaries'] }>
  listWorldGenerationJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorldGenerationJobs'>]-?: ReturnTypeFrom<'listWorldGenerationJobs'>[K]}['worldGenerationJobSummaries'] }>;

  listWorldTemplates(params: { [K in keyof Omit<ParamsFrom<'listWorldTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorldTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorldTemplates'>]-?: ReturnTypeFrom<'listWorldTemplates'>[K]}['templateSummaries'] }>
  listWorldTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorldTemplates'>]-?: ReturnTypeFrom<'listWorldTemplates'>[K]}['templateSummaries'] }>;

  listWorlds(params: { [K in keyof Omit<ParamsFrom<'listWorlds', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorlds', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorlds'>]-?: ReturnTypeFrom<'listWorlds'>[K]}['worldSummaries'] }>
  listWorlds(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorlds'>]-?: ReturnTypeFrom<'listWorlds'>[K]}['worldSummaries'] }>;

  registerRobot: FunctionTypeFrom<'registerRobot'>;

  restartSimulationJob: FunctionTypeFrom<'restartSimulationJob'>;

  startSimulationJobBatch: FunctionTypeFrom<'startSimulationJobBatch'>;

  syncDeploymentJob: FunctionTypeFrom<'syncDeploymentJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateRobotApplication: FunctionTypeFrom<'updateRobotApplication'>;

  updateSimulationApplication: FunctionTypeFrom<'updateSimulationApplication'>;

  updateWorldTemplate: FunctionTypeFrom<'updateWorldTemplate'>
}
 
export class RoboMaker implements ClientType {
  private constructor(private readonly client: AWSRoboMaker) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'robomaker';
  public readonly global = false;
  public readonly category = 'Robotics';
  public readonly topLevelCalls = ["listDeploymentJobs","listFleets","listRobotApplications","listRobots","listSimulationApplications","listSimulationJobBatches","listSimulationJobs","listWorldExportJobs","listWorldGenerationJobs","listWorldTemplates","listWorlds"] as const;
  
  async batchDeleteWorlds(...args: any): Promise<any> {
  // undefined
    return this.client.batchDeleteWorlds(...args).promise()
  }

  async batchDescribeSimulationJob(...args: any): Promise<any> {
  // undefined
    return this.client.batchDescribeSimulationJob(...args).promise()
  }

  async cancelDeploymentJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelDeploymentJob(...args).promise()
  }

  async cancelSimulationJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelSimulationJob(...args).promise()
  }

  async cancelSimulationJobBatch(...args: any): Promise<any> {
  // undefined
    return this.client.cancelSimulationJobBatch(...args).promise()
  }

  async cancelWorldExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelWorldExportJob(...args).promise()
  }

  async cancelWorldGenerationJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelWorldGenerationJob(...args).promise()
  }

  async createDeploymentJob(...args: any): Promise<any> {
  // undefined
    return this.client.createDeploymentJob(...args).promise()
  }

  async createFleet(...args: any): Promise<any> {
  // undefined
    return this.client.createFleet(...args).promise()
  }

  async createRobot(...args: any): Promise<any> {
  // undefined
    return this.client.createRobot(...args).promise()
  }

  async createRobotApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createRobotApplication(...args).promise()
  }

  async createRobotApplicationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createRobotApplicationVersion(...args).promise()
  }

  async createSimulationApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createSimulationApplication(...args).promise()
  }

  async createSimulationApplicationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createSimulationApplicationVersion(...args).promise()
  }

  async createSimulationJob(...args: any): Promise<any> {
  // undefined
    return this.client.createSimulationJob(...args).promise()
  }

  async createWorldExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createWorldExportJob(...args).promise()
  }

  async createWorldGenerationJob(...args: any): Promise<any> {
  // undefined
    return this.client.createWorldGenerationJob(...args).promise()
  }

  async createWorldTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createWorldTemplate(...args).promise()
  }

  async deleteFleet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleet(...args).promise()
  }

  async deleteRobot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRobot(...args).promise()
  }

  async deleteRobotApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRobotApplication(...args).promise()
  }

  async deleteSimulationApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSimulationApplication(...args).promise()
  }

  async deleteWorldTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorldTemplate(...args).promise()
  }

  async deregisterRobot(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterRobot(...args).promise()
  }

  async describeDeploymentJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeDeploymentJob(...args).promise()
  }

  async describeFleet(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleet(...args).promise()
  }

  async describeRobot(...args: any): Promise<any> {
  // undefined
    return this.client.describeRobot(...args).promise()
  }

  async describeRobotApplication(...args: any): Promise<any> {
  // undefined
    return this.client.describeRobotApplication(...args).promise()
  }

  async describeSimulationApplication(...args: any): Promise<any> {
  // undefined
    return this.client.describeSimulationApplication(...args).promise()
  }

  async describeSimulationJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeSimulationJob(...args).promise()
  }

  async describeSimulationJobBatch(...args: any): Promise<any> {
  // undefined
    return this.client.describeSimulationJobBatch(...args).promise()
  }

  async describeWorld(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorld(...args).promise()
  }

  async describeWorldExportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorldExportJob(...args).promise()
  }

  async describeWorldGenerationJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorldGenerationJob(...args).promise()
  }

  async describeWorldTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorldTemplate(...args).promise()
  }

  async getWorldTemplateBody(...args: any): Promise<any> {
  // undefined
    return this.client.getWorldTemplateBody(...args).promise()
  }

  async listDeploymentJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"deploymentJobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeploymentJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.deploymentJobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFleets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fleetDetails"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFleets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.fleetDetails ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRobotApplications(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"robotApplicationSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRobotApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.robotApplicationSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRobots(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"robots"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRobots(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.robots ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSimulationApplications(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"simulationApplicationSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSimulationApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.simulationApplicationSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSimulationJobBatches(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"simulationJobBatchSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSimulationJobBatches(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.simulationJobBatchSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSimulationJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"simulationJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSimulationJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.simulationJobSummaries ?? [];
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

  async listWorldExportJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"worldExportJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorldExportJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.worldExportJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorldGenerationJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"worldGenerationJobSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorldGenerationJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.worldGenerationJobSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorldTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorldTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templateSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorlds(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"worldSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorlds(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.worldSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async registerRobot(...args: any): Promise<any> {
  // undefined
    return this.client.registerRobot(...args).promise()
  }

  async restartSimulationJob(...args: any): Promise<any> {
  // undefined
    return this.client.restartSimulationJob(...args).promise()
  }

  async startSimulationJobBatch(...args: any): Promise<any> {
  // undefined
    return this.client.startSimulationJobBatch(...args).promise()
  }

  async syncDeploymentJob(...args: any): Promise<any> {
  // undefined
    return this.client.syncDeploymentJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateRobotApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateRobotApplication(...args).promise()
  }

  async updateSimulationApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateSimulationApplication(...args).promise()
  }

  async updateWorldTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorldTemplate(...args).promise()
  }
  
  static fromClient(client: AWSRoboMaker): ClientType {
    return new RoboMaker(client) as any;
  }
  
  static client(options?: AWSRoboMaker.Types.ClientConfiguration): ClientType {
    return new RoboMaker(new AWSRoboMaker(options)) as any;
  }
}  
