import { Request, DataSync as AWSDataSync } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDataSync> = AWSDataSync[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDataSync> = AWSDataSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDataSync[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDataSync, Extras> = AWSDataSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDataSync> = AWSDataSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DataSync {
  private constructor(private readonly client: AWSDataSync) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'datasync' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["listAgents","listLocations","listTaskExecutions","listTasks"] as const;
  
  cancelTaskExecution: (params: RawParamsFrom<'cancelTaskExecution'>) => Promise<ReturnTypeFrom<'cancelTaskExecution'>>  = async params => {
  // undefined
    return this.client.cancelTaskExecution(params as any).promise();
  }

  createAgent: (params: RawParamsFrom<'createAgent'>) => Promise<ReturnTypeFrom<'createAgent'>>  = async params => {
  // undefined
    return this.client.createAgent(params as any).promise();
  }

  createLocationEfs: (params: RawParamsFrom<'createLocationEfs'>) => Promise<ReturnTypeFrom<'createLocationEfs'>>  = async params => {
  // undefined
    return this.client.createLocationEfs(params as any).promise();
  }

  createLocationFsxLustre: (params: RawParamsFrom<'createLocationFsxLustre'>) => Promise<ReturnTypeFrom<'createLocationFsxLustre'>>  = async params => {
  // undefined
    return this.client.createLocationFsxLustre(params as any).promise();
  }

  createLocationFsxOntap: (params: RawParamsFrom<'createLocationFsxOntap'>) => Promise<ReturnTypeFrom<'createLocationFsxOntap'>>  = async params => {
  // undefined
    return this.client.createLocationFsxOntap(params as any).promise();
  }

  createLocationFsxOpenZfs: (params: RawParamsFrom<'createLocationFsxOpenZfs'>) => Promise<ReturnTypeFrom<'createLocationFsxOpenZfs'>>  = async params => {
  // undefined
    return this.client.createLocationFsxOpenZfs(params as any).promise();
  }

  createLocationFsxWindows: (params: RawParamsFrom<'createLocationFsxWindows'>) => Promise<ReturnTypeFrom<'createLocationFsxWindows'>>  = async params => {
  // undefined
    return this.client.createLocationFsxWindows(params as any).promise();
  }

  createLocationHdfs: (params: RawParamsFrom<'createLocationHdfs'>) => Promise<ReturnTypeFrom<'createLocationHdfs'>>  = async params => {
  // undefined
    return this.client.createLocationHdfs(params as any).promise();
  }

  createLocationNfs: (params: RawParamsFrom<'createLocationNfs'>) => Promise<ReturnTypeFrom<'createLocationNfs'>>  = async params => {
  // undefined
    return this.client.createLocationNfs(params as any).promise();
  }

  createLocationObjectStorage: (params: RawParamsFrom<'createLocationObjectStorage'>) => Promise<ReturnTypeFrom<'createLocationObjectStorage'>>  = async params => {
  // undefined
    return this.client.createLocationObjectStorage(params as any).promise();
  }

  createLocationS3: (params: RawParamsFrom<'createLocationS3'>) => Promise<ReturnTypeFrom<'createLocationS3'>>  = async params => {
  // undefined
    return this.client.createLocationS3(params as any).promise();
  }

  createLocationSmb: (params: RawParamsFrom<'createLocationSmb'>) => Promise<ReturnTypeFrom<'createLocationSmb'>>  = async params => {
  // undefined
    return this.client.createLocationSmb(params as any).promise();
  }

  createTask: (params: RawParamsFrom<'createTask'>) => Promise<ReturnTypeFrom<'createTask'>>  = async params => {
  // undefined
    return this.client.createTask(params as any).promise();
  }

  deleteAgent: (params: RawParamsFrom<'deleteAgent'>) => Promise<ReturnTypeFrom<'deleteAgent'>>  = async params => {
  // undefined
    return this.client.deleteAgent(params as any).promise();
  }

  deleteLocation: (params: RawParamsFrom<'deleteLocation'>) => Promise<ReturnTypeFrom<'deleteLocation'>>  = async params => {
  // undefined
    return this.client.deleteLocation(params as any).promise();
  }

  deleteTask: (params: RawParamsFrom<'deleteTask'>) => Promise<ReturnTypeFrom<'deleteTask'>>  = async params => {
  // undefined
    return this.client.deleteTask(params as any).promise();
  }

  describeAgent: (params: RawParamsFrom<'describeAgent'>) => Promise<ReturnTypeFrom<'describeAgent'>>  = async params => {
  // undefined
    return this.client.describeAgent(params as any).promise();
  }

  describeLocationEfs: (params: RawParamsFrom<'describeLocationEfs'>) => Promise<ReturnTypeFrom<'describeLocationEfs'>>  = async params => {
  // undefined
    return this.client.describeLocationEfs(params as any).promise();
  }

  describeLocationFsxLustre: (params: RawParamsFrom<'describeLocationFsxLustre'>) => Promise<ReturnTypeFrom<'describeLocationFsxLustre'>>  = async params => {
  // undefined
    return this.client.describeLocationFsxLustre(params as any).promise();
  }

  describeLocationFsxOntap: (params: RawParamsFrom<'describeLocationFsxOntap'>) => Promise<ReturnTypeFrom<'describeLocationFsxOntap'>>  = async params => {
  // undefined
    return this.client.describeLocationFsxOntap(params as any).promise();
  }

  describeLocationFsxOpenZfs: (params: RawParamsFrom<'describeLocationFsxOpenZfs'>) => Promise<ReturnTypeFrom<'describeLocationFsxOpenZfs'>>  = async params => {
  // undefined
    return this.client.describeLocationFsxOpenZfs(params as any).promise();
  }

  describeLocationFsxWindows: (params: RawParamsFrom<'describeLocationFsxWindows'>) => Promise<ReturnTypeFrom<'describeLocationFsxWindows'>>  = async params => {
  // undefined
    return this.client.describeLocationFsxWindows(params as any).promise();
  }

  describeLocationHdfs: (params: RawParamsFrom<'describeLocationHdfs'>) => Promise<ReturnTypeFrom<'describeLocationHdfs'>>  = async params => {
  // undefined
    return this.client.describeLocationHdfs(params as any).promise();
  }

  describeLocationNfs: (params: RawParamsFrom<'describeLocationNfs'>) => Promise<ReturnTypeFrom<'describeLocationNfs'>>  = async params => {
  // undefined
    return this.client.describeLocationNfs(params as any).promise();
  }

  describeLocationObjectStorage: (params: RawParamsFrom<'describeLocationObjectStorage'>) => Promise<ReturnTypeFrom<'describeLocationObjectStorage'>>  = async params => {
  // undefined
    return this.client.describeLocationObjectStorage(params as any).promise();
  }

  describeLocationS3: (params: RawParamsFrom<'describeLocationS3'>) => Promise<ReturnTypeFrom<'describeLocationS3'>>  = async params => {
  // undefined
    return this.client.describeLocationS3(params as any).promise();
  }

  describeLocationSmb: (params: RawParamsFrom<'describeLocationSmb'>) => Promise<ReturnTypeFrom<'describeLocationSmb'>>  = async params => {
  // undefined
    return this.client.describeLocationSmb(params as any).promise();
  }

  describeTask: (params: RawParamsFrom<'describeTask'>) => Promise<ReturnTypeFrom<'describeTask'>>  = async params => {
  // undefined
    return this.client.describeTask(params as any).promise();
  }

  describeTaskExecution: (params: RawParamsFrom<'describeTaskExecution'>) => Promise<ReturnTypeFrom<'describeTaskExecution'>>  = async params => {
  // undefined
    return this.client.describeTaskExecution(params as any).promise();
  }

  async listAgents(params: { [K in keyof ParamsFrom<'listAgents', { next?: string, limit?: number }>]: ParamsFrom<'listAgents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAgents'>]-?: ReturnTypeFrom<'listAgents'>[K]}['Agents'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Agents"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAgents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Agents ?? []) ? (result.Agents ?? []) : [result.Agents]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listLocations(params: { [K in keyof ParamsFrom<'listLocations', { next?: string, limit?: number }>]: ParamsFrom<'listLocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLocations'>]-?: ReturnTypeFrom<'listLocations'>[K]}['Locations'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Locations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLocations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Locations ?? []) ? (result.Locations ?? []) : [result.Locations]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTaskExecutions(params: { [K in keyof ParamsFrom<'listTaskExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listTaskExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTaskExecutions'>]-?: ReturnTypeFrom<'listTaskExecutions'>[K]}['TaskExecutions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TaskExecutions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTaskExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.TaskExecutions ?? []) ? (result.TaskExecutions ?? []) : [result.TaskExecutions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTasks(params: { [K in keyof ParamsFrom<'listTasks', { next?: string, limit?: number }>]: ParamsFrom<'listTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['Tasks'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Tasks ?? []) ? (result.Tasks ?? []) : [result.Tasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  startTaskExecution: (params: RawParamsFrom<'startTaskExecution'>) => Promise<ReturnTypeFrom<'startTaskExecution'>>  = async params => {
  // undefined
    return this.client.startTaskExecution(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAgent: (params: RawParamsFrom<'updateAgent'>) => Promise<ReturnTypeFrom<'updateAgent'>>  = async params => {
  // undefined
    return this.client.updateAgent(params as any).promise();
  }

  updateLocationHdfs: (params: RawParamsFrom<'updateLocationHdfs'>) => Promise<ReturnTypeFrom<'updateLocationHdfs'>>  = async params => {
  // undefined
    return this.client.updateLocationHdfs(params as any).promise();
  }

  updateLocationNfs: (params: RawParamsFrom<'updateLocationNfs'>) => Promise<ReturnTypeFrom<'updateLocationNfs'>>  = async params => {
  // undefined
    return this.client.updateLocationNfs(params as any).promise();
  }

  updateLocationObjectStorage: (params: RawParamsFrom<'updateLocationObjectStorage'>) => Promise<ReturnTypeFrom<'updateLocationObjectStorage'>>  = async params => {
  // undefined
    return this.client.updateLocationObjectStorage(params as any).promise();
  }

  updateLocationSmb: (params: RawParamsFrom<'updateLocationSmb'>) => Promise<ReturnTypeFrom<'updateLocationSmb'>>  = async params => {
  // undefined
    return this.client.updateLocationSmb(params as any).promise();
  }

  updateTask: (params: RawParamsFrom<'updateTask'>) => Promise<ReturnTypeFrom<'updateTask'>>  = async params => {
  // undefined
    return this.client.updateTask(params as any).promise();
  }

  updateTaskExecution: (params: RawParamsFrom<'updateTaskExecution'>) => Promise<ReturnTypeFrom<'updateTaskExecution'>>  = async params => {
  // undefined
    return this.client.updateTaskExecution(params as any).promise();
  }
  
  static fromClient(client: AWSDataSync): DataSync {
    return new DataSync(client) as any;
  }
  
  static client(options?: AWSDataSync.Types.ClientConfiguration): DataSync {
    return new DataSync(new AWSDataSync(options)) as any;
  }
}  
