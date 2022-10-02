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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'datasync';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["listAgents","listLocations","listTaskExecutions","listTasks"];
    
  cancelTaskExecution: FunctionTypeFrom<'cancelTaskExecution'>;

  createAgent: FunctionTypeFrom<'createAgent'>;

  createLocationEfs: FunctionTypeFrom<'createLocationEfs'>;

  createLocationFsxLustre: FunctionTypeFrom<'createLocationFsxLustre'>;

  createLocationFsxOntap: FunctionTypeFrom<'createLocationFsxOntap'>;

  createLocationFsxOpenZfs: FunctionTypeFrom<'createLocationFsxOpenZfs'>;

  createLocationFsxWindows: FunctionTypeFrom<'createLocationFsxWindows'>;

  createLocationHdfs: FunctionTypeFrom<'createLocationHdfs'>;

  createLocationNfs: FunctionTypeFrom<'createLocationNfs'>;

  createLocationObjectStorage: FunctionTypeFrom<'createLocationObjectStorage'>;

  createLocationS3: FunctionTypeFrom<'createLocationS3'>;

  createLocationSmb: FunctionTypeFrom<'createLocationSmb'>;

  createTask: FunctionTypeFrom<'createTask'>;

  deleteAgent: FunctionTypeFrom<'deleteAgent'>;

  deleteLocation: FunctionTypeFrom<'deleteLocation'>;

  deleteTask: FunctionTypeFrom<'deleteTask'>;

  describeAgent: FunctionTypeFrom<'describeAgent'>;

  describeLocationEfs: FunctionTypeFrom<'describeLocationEfs'>;

  describeLocationFsxLustre: FunctionTypeFrom<'describeLocationFsxLustre'>;

  describeLocationFsxOntap: FunctionTypeFrom<'describeLocationFsxOntap'>;

  describeLocationFsxOpenZfs: FunctionTypeFrom<'describeLocationFsxOpenZfs'>;

  describeLocationFsxWindows: FunctionTypeFrom<'describeLocationFsxWindows'>;

  describeLocationHdfs: FunctionTypeFrom<'describeLocationHdfs'>;

  describeLocationNfs: FunctionTypeFrom<'describeLocationNfs'>;

  describeLocationObjectStorage: FunctionTypeFrom<'describeLocationObjectStorage'>;

  describeLocationS3: FunctionTypeFrom<'describeLocationS3'>;

  describeLocationSmb: FunctionTypeFrom<'describeLocationSmb'>;

  describeTask: FunctionTypeFrom<'describeTask'>;

  describeTaskExecution: FunctionTypeFrom<'describeTaskExecution'>;

  listAgents(params: { [K in keyof Omit<ParamsFrom<'listAgents', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAgents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAgents'>]-?: ReturnTypeFrom<'listAgents'>[K]}['Agents'] }>
  listAgents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAgents'>]-?: ReturnTypeFrom<'listAgents'>[K]}['Agents'] }>;

  listLocations(params: { [K in keyof Omit<ParamsFrom<'listLocations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listLocations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLocations'>]-?: ReturnTypeFrom<'listLocations'>[K]}['Locations'] }>
  listLocations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLocations'>]-?: ReturnTypeFrom<'listLocations'>[K]}['Locations'] }>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  listTaskExecutions(params: { [K in keyof Omit<ParamsFrom<'listTaskExecutions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTaskExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTaskExecutions'>]-?: ReturnTypeFrom<'listTaskExecutions'>[K]}['TaskExecutions'] }>
  listTaskExecutions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTaskExecutions'>]-?: ReturnTypeFrom<'listTaskExecutions'>[K]}['TaskExecutions'] }>;

  listTasks(params: { [K in keyof Omit<ParamsFrom<'listTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['Tasks'] }>
  listTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['Tasks'] }>;

  startTaskExecution: FunctionTypeFrom<'startTaskExecution'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAgent: FunctionTypeFrom<'updateAgent'>;

  updateLocationHdfs: FunctionTypeFrom<'updateLocationHdfs'>;

  updateLocationNfs: FunctionTypeFrom<'updateLocationNfs'>;

  updateLocationObjectStorage: FunctionTypeFrom<'updateLocationObjectStorage'>;

  updateLocationSmb: FunctionTypeFrom<'updateLocationSmb'>;

  updateTask: FunctionTypeFrom<'updateTask'>;

  updateTaskExecution: FunctionTypeFrom<'updateTaskExecution'>
}
 
export class DataSync implements ClientType {
  private constructor(private readonly client: AWSDataSync) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'datasync';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["listAgents","listLocations","listTaskExecutions","listTasks"] as const;
  
  async cancelTaskExecution(...args: any): Promise<any> {
  // undefined
    return this.client.cancelTaskExecution(...args).promise()
  }

  async createAgent(...args: any): Promise<any> {
  // undefined
    return this.client.createAgent(...args).promise()
  }

  async createLocationEfs(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationEfs(...args).promise()
  }

  async createLocationFsxLustre(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationFsxLustre(...args).promise()
  }

  async createLocationFsxOntap(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationFsxOntap(...args).promise()
  }

  async createLocationFsxOpenZfs(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationFsxOpenZfs(...args).promise()
  }

  async createLocationFsxWindows(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationFsxWindows(...args).promise()
  }

  async createLocationHdfs(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationHdfs(...args).promise()
  }

  async createLocationNfs(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationNfs(...args).promise()
  }

  async createLocationObjectStorage(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationObjectStorage(...args).promise()
  }

  async createLocationS3(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationS3(...args).promise()
  }

  async createLocationSmb(...args: any): Promise<any> {
  // undefined
    return this.client.createLocationSmb(...args).promise()
  }

  async createTask(...args: any): Promise<any> {
  // undefined
    return this.client.createTask(...args).promise()
  }

  async deleteAgent(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAgent(...args).promise()
  }

  async deleteLocation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLocation(...args).promise()
  }

  async deleteTask(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTask(...args).promise()
  }

  async describeAgent(...args: any): Promise<any> {
  // undefined
    return this.client.describeAgent(...args).promise()
  }

  async describeLocationEfs(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationEfs(...args).promise()
  }

  async describeLocationFsxLustre(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationFsxLustre(...args).promise()
  }

  async describeLocationFsxOntap(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationFsxOntap(...args).promise()
  }

  async describeLocationFsxOpenZfs(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationFsxOpenZfs(...args).promise()
  }

  async describeLocationFsxWindows(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationFsxWindows(...args).promise()
  }

  async describeLocationHdfs(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationHdfs(...args).promise()
  }

  async describeLocationNfs(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationNfs(...args).promise()
  }

  async describeLocationObjectStorage(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationObjectStorage(...args).promise()
  }

  async describeLocationS3(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationS3(...args).promise()
  }

  async describeLocationSmb(...args: any): Promise<any> {
  // undefined
    return this.client.describeLocationSmb(...args).promise()
  }

  async describeTask(...args: any): Promise<any> {
  // undefined
    return this.client.describeTask(...args).promise()
  }

  async describeTaskExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeTaskExecution(...args).promise()
  }

  async listAgents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Agents"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAgents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Agents ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLocations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Locations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLocations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Locations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTaskExecutions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TaskExecutions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTaskExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TaskExecutions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Tasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startTaskExecution(...args: any): Promise<any> {
  // undefined
    return this.client.startTaskExecution(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAgent(...args: any): Promise<any> {
  // undefined
    return this.client.updateAgent(...args).promise()
  }

  async updateLocationHdfs(...args: any): Promise<any> {
  // undefined
    return this.client.updateLocationHdfs(...args).promise()
  }

  async updateLocationNfs(...args: any): Promise<any> {
  // undefined
    return this.client.updateLocationNfs(...args).promise()
  }

  async updateLocationObjectStorage(...args: any): Promise<any> {
  // undefined
    return this.client.updateLocationObjectStorage(...args).promise()
  }

  async updateLocationSmb(...args: any): Promise<any> {
  // undefined
    return this.client.updateLocationSmb(...args).promise()
  }

  async updateTask(...args: any): Promise<any> {
  // undefined
    return this.client.updateTask(...args).promise()
  }

  async updateTaskExecution(...args: any): Promise<any> {
  // undefined
    return this.client.updateTaskExecution(...args).promise()
  }
  
  static fromClient(client: AWSDataSync): ClientType {
    return new DataSync(client) as any;
  }
  
  static client(options?: AWSDataSync.Types.ClientConfiguration): ClientType {
    return new DataSync(new AWSDataSync(options)) as any;
  }
}  
