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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRoboMaker> = AWSRoboMaker[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class RoboMaker {
  private constructor(private readonly client: AWSRoboMaker) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'robomaker' as const;
  public readonly global = false as const;
  public readonly category = 'Robotics' as const;
  public readonly topLevelCalls = ["listDeploymentJobs","listFleets","listRobotApplications","listRobots","listSimulationApplications","listSimulationJobBatches","listSimulationJobs","listWorldExportJobs","listWorldGenerationJobs","listWorldTemplates","listWorlds"] as const;
  
  batchDeleteWorlds: (params: RawParamsFrom<'batchDeleteWorlds'>) => Promise<ReturnTypeFrom<'batchDeleteWorlds'>>  = async params => {
  // undefined
    return this.client.batchDeleteWorlds(params as any).promise();
  }

  batchDescribeSimulationJob: (params: RawParamsFrom<'batchDescribeSimulationJob'>) => Promise<ReturnTypeFrom<'batchDescribeSimulationJob'>>  = async params => {
  // undefined
    return this.client.batchDescribeSimulationJob(params as any).promise();
  }

  cancelDeploymentJob: (params: RawParamsFrom<'cancelDeploymentJob'>) => Promise<ReturnTypeFrom<'cancelDeploymentJob'>>  = async params => {
  // undefined
    return this.client.cancelDeploymentJob(params as any).promise();
  }

  cancelSimulationJob: (params: RawParamsFrom<'cancelSimulationJob'>) => Promise<ReturnTypeFrom<'cancelSimulationJob'>>  = async params => {
  // undefined
    return this.client.cancelSimulationJob(params as any).promise();
  }

  cancelSimulationJobBatch: (params: RawParamsFrom<'cancelSimulationJobBatch'>) => Promise<ReturnTypeFrom<'cancelSimulationJobBatch'>>  = async params => {
  // undefined
    return this.client.cancelSimulationJobBatch(params as any).promise();
  }

  cancelWorldExportJob: (params: RawParamsFrom<'cancelWorldExportJob'>) => Promise<ReturnTypeFrom<'cancelWorldExportJob'>>  = async params => {
  // undefined
    return this.client.cancelWorldExportJob(params as any).promise();
  }

  cancelWorldGenerationJob: (params: RawParamsFrom<'cancelWorldGenerationJob'>) => Promise<ReturnTypeFrom<'cancelWorldGenerationJob'>>  = async params => {
  // undefined
    return this.client.cancelWorldGenerationJob(params as any).promise();
  }

  createDeploymentJob: (params: RawParamsFrom<'createDeploymentJob'>) => Promise<ReturnTypeFrom<'createDeploymentJob'>>  = async params => {
  // undefined
    return this.client.createDeploymentJob(params as any).promise();
  }

  createFleet: (params: RawParamsFrom<'createFleet'>) => Promise<ReturnTypeFrom<'createFleet'>>  = async params => {
  // undefined
    return this.client.createFleet(params as any).promise();
  }

  createRobot: (params: RawParamsFrom<'createRobot'>) => Promise<ReturnTypeFrom<'createRobot'>>  = async params => {
  // undefined
    return this.client.createRobot(params as any).promise();
  }

  createRobotApplication: (params: RawParamsFrom<'createRobotApplication'>) => Promise<ReturnTypeFrom<'createRobotApplication'>>  = async params => {
  // undefined
    return this.client.createRobotApplication(params as any).promise();
  }

  createRobotApplicationVersion: (params: RawParamsFrom<'createRobotApplicationVersion'>) => Promise<ReturnTypeFrom<'createRobotApplicationVersion'>>  = async params => {
  // undefined
    return this.client.createRobotApplicationVersion(params as any).promise();
  }

  createSimulationApplication: (params: RawParamsFrom<'createSimulationApplication'>) => Promise<ReturnTypeFrom<'createSimulationApplication'>>  = async params => {
  // undefined
    return this.client.createSimulationApplication(params as any).promise();
  }

  createSimulationApplicationVersion: (params: RawParamsFrom<'createSimulationApplicationVersion'>) => Promise<ReturnTypeFrom<'createSimulationApplicationVersion'>>  = async params => {
  // undefined
    return this.client.createSimulationApplicationVersion(params as any).promise();
  }

  createSimulationJob: (params: RawParamsFrom<'createSimulationJob'>) => Promise<ReturnTypeFrom<'createSimulationJob'>>  = async params => {
  // undefined
    return this.client.createSimulationJob(params as any).promise();
  }

  createWorldExportJob: (params: RawParamsFrom<'createWorldExportJob'>) => Promise<ReturnTypeFrom<'createWorldExportJob'>>  = async params => {
  // undefined
    return this.client.createWorldExportJob(params as any).promise();
  }

  createWorldGenerationJob: (params: RawParamsFrom<'createWorldGenerationJob'>) => Promise<ReturnTypeFrom<'createWorldGenerationJob'>>  = async params => {
  // undefined
    return this.client.createWorldGenerationJob(params as any).promise();
  }

  createWorldTemplate: (params: RawParamsFrom<'createWorldTemplate'>) => Promise<ReturnTypeFrom<'createWorldTemplate'>>  = async params => {
  // undefined
    return this.client.createWorldTemplate(params as any).promise();
  }

  deleteFleet: (params: RawParamsFrom<'deleteFleet'>) => Promise<ReturnTypeFrom<'deleteFleet'>>  = async params => {
  // undefined
    return this.client.deleteFleet(params as any).promise();
  }

  deleteRobot: (params: RawParamsFrom<'deleteRobot'>) => Promise<ReturnTypeFrom<'deleteRobot'>>  = async params => {
  // undefined
    return this.client.deleteRobot(params as any).promise();
  }

  deleteRobotApplication: (params: RawParamsFrom<'deleteRobotApplication'>) => Promise<ReturnTypeFrom<'deleteRobotApplication'>>  = async params => {
  // undefined
    return this.client.deleteRobotApplication(params as any).promise();
  }

  deleteSimulationApplication: (params: RawParamsFrom<'deleteSimulationApplication'>) => Promise<ReturnTypeFrom<'deleteSimulationApplication'>>  = async params => {
  // undefined
    return this.client.deleteSimulationApplication(params as any).promise();
  }

  deleteWorldTemplate: (params: RawParamsFrom<'deleteWorldTemplate'>) => Promise<ReturnTypeFrom<'deleteWorldTemplate'>>  = async params => {
  // undefined
    return this.client.deleteWorldTemplate(params as any).promise();
  }

  deregisterRobot: (params: RawParamsFrom<'deregisterRobot'>) => Promise<ReturnTypeFrom<'deregisterRobot'>>  = async params => {
  // undefined
    return this.client.deregisterRobot(params as any).promise();
  }

  describeDeploymentJob: (params: RawParamsFrom<'describeDeploymentJob'>) => Promise<ReturnTypeFrom<'describeDeploymentJob'>>  = async params => {
  // undefined
    return this.client.describeDeploymentJob(params as any).promise();
  }

  describeFleet: (params: RawParamsFrom<'describeFleet'>) => Promise<ReturnTypeFrom<'describeFleet'>>  = async params => {
  // undefined
    return this.client.describeFleet(params as any).promise();
  }

  describeRobot: (params: RawParamsFrom<'describeRobot'>) => Promise<ReturnTypeFrom<'describeRobot'>>  = async params => {
  // undefined
    return this.client.describeRobot(params as any).promise();
  }

  describeRobotApplication: (params: RawParamsFrom<'describeRobotApplication'>) => Promise<ReturnTypeFrom<'describeRobotApplication'>>  = async params => {
  // undefined
    return this.client.describeRobotApplication(params as any).promise();
  }

  describeSimulationApplication: (params: RawParamsFrom<'describeSimulationApplication'>) => Promise<ReturnTypeFrom<'describeSimulationApplication'>>  = async params => {
  // undefined
    return this.client.describeSimulationApplication(params as any).promise();
  }

  describeSimulationJob: (params: RawParamsFrom<'describeSimulationJob'>) => Promise<ReturnTypeFrom<'describeSimulationJob'>>  = async params => {
  // undefined
    return this.client.describeSimulationJob(params as any).promise();
  }

  describeSimulationJobBatch: (params: RawParamsFrom<'describeSimulationJobBatch'>) => Promise<ReturnTypeFrom<'describeSimulationJobBatch'>>  = async params => {
  // undefined
    return this.client.describeSimulationJobBatch(params as any).promise();
  }

  describeWorld: (params: RawParamsFrom<'describeWorld'>) => Promise<ReturnTypeFrom<'describeWorld'>>  = async params => {
  // undefined
    return this.client.describeWorld(params as any).promise();
  }

  describeWorldExportJob: (params: RawParamsFrom<'describeWorldExportJob'>) => Promise<ReturnTypeFrom<'describeWorldExportJob'>>  = async params => {
  // undefined
    return this.client.describeWorldExportJob(params as any).promise();
  }

  describeWorldGenerationJob: (params: RawParamsFrom<'describeWorldGenerationJob'>) => Promise<ReturnTypeFrom<'describeWorldGenerationJob'>>  = async params => {
  // undefined
    return this.client.describeWorldGenerationJob(params as any).promise();
  }

  describeWorldTemplate: (params: RawParamsFrom<'describeWorldTemplate'>) => Promise<ReturnTypeFrom<'describeWorldTemplate'>>  = async params => {
  // undefined
    return this.client.describeWorldTemplate(params as any).promise();
  }

  getWorldTemplateBody: (params: RawParamsFrom<'getWorldTemplateBody'>) => Promise<ReturnTypeFrom<'getWorldTemplateBody'>>  = async params => {
  // undefined
    return this.client.getWorldTemplateBody(params as any).promise();
  }

  async listDeploymentJobs(params: { [K in keyof ParamsFrom<'listDeploymentJobs', { next?: string, limit?: number }>]: ParamsFrom<'listDeploymentJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeploymentJobs'>]-?: ReturnTypeFrom<'listDeploymentJobs'>[K]}['deploymentJobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"deploymentJobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeploymentJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.deploymentJobs ?? []) ? (result.deploymentJobs ?? []) : [result.deploymentJobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listFleets(params: { [K in keyof ParamsFrom<'listFleets', { next?: string, limit?: number }>]: ParamsFrom<'listFleets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFleets'>]-?: ReturnTypeFrom<'listFleets'>[K]}['fleetDetails'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"fleetDetails"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFleets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.fleetDetails ?? []) ? (result.fleetDetails ?? []) : [result.fleetDetails]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRobotApplications(params: { [K in keyof ParamsFrom<'listRobotApplications', { next?: string, limit?: number }>]: ParamsFrom<'listRobotApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRobotApplications'>]-?: ReturnTypeFrom<'listRobotApplications'>[K]}['robotApplicationSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"robotApplicationSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRobotApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.robotApplicationSummaries ?? []) ? (result.robotApplicationSummaries ?? []) : [result.robotApplicationSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRobots(params: { [K in keyof ParamsFrom<'listRobots', { next?: string, limit?: number }>]: ParamsFrom<'listRobots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRobots'>]-?: ReturnTypeFrom<'listRobots'>[K]}['robots'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"robots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRobots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.robots ?? []) ? (result.robots ?? []) : [result.robots]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSimulationApplications(params: { [K in keyof ParamsFrom<'listSimulationApplications', { next?: string, limit?: number }>]: ParamsFrom<'listSimulationApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSimulationApplications'>]-?: ReturnTypeFrom<'listSimulationApplications'>[K]}['simulationApplicationSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"simulationApplicationSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSimulationApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.simulationApplicationSummaries ?? []) ? (result.simulationApplicationSummaries ?? []) : [result.simulationApplicationSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSimulationJobBatches(params: { [K in keyof ParamsFrom<'listSimulationJobBatches', { next?: string, limit?: number }>]: ParamsFrom<'listSimulationJobBatches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSimulationJobBatches'>]-?: ReturnTypeFrom<'listSimulationJobBatches'>[K]}['simulationJobBatchSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"simulationJobBatchSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSimulationJobBatches({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.simulationJobBatchSummaries ?? []) ? (result.simulationJobBatchSummaries ?? []) : [result.simulationJobBatchSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listSimulationJobs(params: { [K in keyof ParamsFrom<'listSimulationJobs', { next?: string, limit?: number }>]: ParamsFrom<'listSimulationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSimulationJobs'>]-?: ReturnTypeFrom<'listSimulationJobs'>[K]}['simulationJobSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"simulationJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSimulationJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.simulationJobSummaries ?? []) ? (result.simulationJobSummaries ?? []) : [result.simulationJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listWorldExportJobs(params: { [K in keyof ParamsFrom<'listWorldExportJobs', { next?: string, limit?: number }>]: ParamsFrom<'listWorldExportJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorldExportJobs'>]-?: ReturnTypeFrom<'listWorldExportJobs'>[K]}['worldExportJobSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"worldExportJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorldExportJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.worldExportJobSummaries ?? []) ? (result.worldExportJobSummaries ?? []) : [result.worldExportJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listWorldGenerationJobs(params: { [K in keyof ParamsFrom<'listWorldGenerationJobs', { next?: string, limit?: number }>]: ParamsFrom<'listWorldGenerationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorldGenerationJobs'>]-?: ReturnTypeFrom<'listWorldGenerationJobs'>[K]}['worldGenerationJobSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"worldGenerationJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorldGenerationJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.worldGenerationJobSummaries ?? []) ? (result.worldGenerationJobSummaries ?? []) : [result.worldGenerationJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listWorldTemplates(params: { [K in keyof ParamsFrom<'listWorldTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listWorldTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorldTemplates'>]-?: ReturnTypeFrom<'listWorldTemplates'>[K]}['templateSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorldTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.templateSummaries ?? []) ? (result.templateSummaries ?? []) : [result.templateSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listWorlds(params: { [K in keyof ParamsFrom<'listWorlds', { next?: string, limit?: number }>]: ParamsFrom<'listWorlds', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorlds'>]-?: ReturnTypeFrom<'listWorlds'>[K]}['worldSummaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"worldSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorlds({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.worldSummaries ?? []) ? (result.worldSummaries ?? []) : [result.worldSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  registerRobot: (params: RawParamsFrom<'registerRobot'>) => Promise<ReturnTypeFrom<'registerRobot'>>  = async params => {
  // undefined
    return this.client.registerRobot(params as any).promise();
  }

  restartSimulationJob: (params: RawParamsFrom<'restartSimulationJob'>) => Promise<ReturnTypeFrom<'restartSimulationJob'>>  = async params => {
  // undefined
    return this.client.restartSimulationJob(params as any).promise();
  }

  startSimulationJobBatch: (params: RawParamsFrom<'startSimulationJobBatch'>) => Promise<ReturnTypeFrom<'startSimulationJobBatch'>>  = async params => {
  // undefined
    return this.client.startSimulationJobBatch(params as any).promise();
  }

  syncDeploymentJob: (params: RawParamsFrom<'syncDeploymentJob'>) => Promise<ReturnTypeFrom<'syncDeploymentJob'>>  = async params => {
  // undefined
    return this.client.syncDeploymentJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateRobotApplication: (params: RawParamsFrom<'updateRobotApplication'>) => Promise<ReturnTypeFrom<'updateRobotApplication'>>  = async params => {
  // undefined
    return this.client.updateRobotApplication(params as any).promise();
  }

  updateSimulationApplication: (params: RawParamsFrom<'updateSimulationApplication'>) => Promise<ReturnTypeFrom<'updateSimulationApplication'>>  = async params => {
  // undefined
    return this.client.updateSimulationApplication(params as any).promise();
  }

  updateWorldTemplate: (params: RawParamsFrom<'updateWorldTemplate'>) => Promise<ReturnTypeFrom<'updateWorldTemplate'>>  = async params => {
  // undefined
    return this.client.updateWorldTemplate(params as any).promise();
  }
  
  static fromClient(client: AWSRoboMaker): RoboMaker {
    return new RoboMaker(client) as any;
  }
  
  static client(options?: AWSRoboMaker.Types.ClientConfiguration): RoboMaker {
    return new RoboMaker(new AWSRoboMaker(options)) as any;
  }
}  
