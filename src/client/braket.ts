import { Request, Braket as AWSBraket } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSBraket> = AWSBraket[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSBraket> = AWSBraket[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSBraket[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSBraket, Extras> = AWSBraket[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSBraket> = AWSBraket[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Braket {
  private constructor(private readonly client: AWSBraket) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'braket' as const;
  public readonly global = false as const;
  public readonly category = 'Quantum Technologies' as const;
  public readonly topLevelCalls = [] as const;
  
  cancelJob: (params: RawParamsFrom<'cancelJob'>) => Promise<ReturnTypeFrom<'cancelJob'>>  = async params => {
  // undefined
    return this.client.cancelJob(params as any).promise();
  }

  cancelQuantumTask: (params: RawParamsFrom<'cancelQuantumTask'>) => Promise<ReturnTypeFrom<'cancelQuantumTask'>>  = async params => {
  // undefined
    return this.client.cancelQuantumTask(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  createQuantumTask: (params: RawParamsFrom<'createQuantumTask'>) => Promise<ReturnTypeFrom<'createQuantumTask'>>  = async params => {
  // undefined
    return this.client.createQuantumTask(params as any).promise();
  }

  getDevice: (params: RawParamsFrom<'getDevice'>) => Promise<ReturnTypeFrom<'getDevice'>>  = async params => {
  // undefined
    return this.client.getDevice(params as any).promise();
  }

  getJob: (params: RawParamsFrom<'getJob'>) => Promise<ReturnTypeFrom<'getJob'>>  = async params => {
  // undefined
    return this.client.getJob(params as any).promise();
  }

  getQuantumTask: (params: RawParamsFrom<'getQuantumTask'>) => Promise<ReturnTypeFrom<'getQuantumTask'>>  = async params => {
  // undefined
    return this.client.getQuantumTask(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async searchDevices(params: { [K in keyof ParamsFrom<'searchDevices', { next?: string, limit?: number }>]: ParamsFrom<'searchDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchDevices'>]-?: ReturnTypeFrom<'searchDevices'>[K]}['devices'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"devices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchDevices' })).toString('base64');
    const member = (Array.isArray(result.devices ?? []) ? (result.devices ?? []) : [result.devices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchJobs(params: { [K in keyof ParamsFrom<'searchJobs', { next?: string, limit?: number }>]: ParamsFrom<'searchJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchJobs'>]-?: ReturnTypeFrom<'searchJobs'>[K]}['jobs'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchJobs' })).toString('base64');
    const member = (Array.isArray(result.jobs ?? []) ? (result.jobs ?? []) : [result.jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchQuantumTasks(params: { [K in keyof ParamsFrom<'searchQuantumTasks', { next?: string, limit?: number }>]: ParamsFrom<'searchQuantumTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchQuantumTasks'>]-?: ReturnTypeFrom<'searchQuantumTasks'>[K]}['quantumTasks'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"quantumTasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchQuantumTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchQuantumTasks' })).toString('base64');
    const member = (Array.isArray(result.quantumTasks ?? []) ? (result.quantumTasks ?? []) : [result.quantumTasks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSBraket): Braket {
    return new Braket(client) as any;
  }
  
  static client(options?: AWSBraket.Types.ClientConfiguration): Braket {
    return new Braket(new AWSBraket(options)) as any;
  }
}  
