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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'braket';
    global: false;
    category: 'Quantum Technologies'
    topLevelCalls: readonly [];
    
  cancelJob: FunctionTypeFrom<'cancelJob'>;

  cancelQuantumTask: FunctionTypeFrom<'cancelQuantumTask'>;

  createJob: FunctionTypeFrom<'createJob'>;

  createQuantumTask: FunctionTypeFrom<'createQuantumTask'>;

  getDevice: FunctionTypeFrom<'getDevice'>;

  getJob: FunctionTypeFrom<'getJob'>;

  getQuantumTask: FunctionTypeFrom<'getQuantumTask'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  searchDevices(params: { [K in keyof Omit<ParamsFrom<'searchDevices', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchDevices'>]-?: ReturnTypeFrom<'searchDevices'>[K]}['devices'] }>
  ;

  searchJobs(params: { [K in keyof Omit<ParamsFrom<'searchJobs', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchJobs'>]-?: ReturnTypeFrom<'searchJobs'>[K]}['jobs'] }>
  ;

  searchQuantumTasks(params: { [K in keyof Omit<ParamsFrom<'searchQuantumTasks', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchQuantumTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchQuantumTasks'>]-?: ReturnTypeFrom<'searchQuantumTasks'>[K]}['quantumTasks'] }>
  ;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class Braket implements ClientType {
  private constructor(private readonly client: AWSBraket) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'braket';
  public readonly global = false;
  public readonly category = 'Quantum Technologies';
  public readonly topLevelCalls = [] as const;
  
  async cancelJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJob(...args).promise()
  }

  async cancelQuantumTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelQuantumTask(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async createQuantumTask(...args: any): Promise<any> {
  // undefined
    return this.client.createQuantumTask(...args).promise()
  }

  async getDevice(...args: any): Promise<any> {
  // undefined
    return this.client.getDevice(...args).promise()
  }

  async getJob(...args: any): Promise<any> {
  // undefined
    return this.client.getJob(...args).promise()
  }

  async getQuantumTask(...args: any): Promise<any> {
  // undefined
    return this.client.getQuantumTask(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async searchDevices(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"devices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.devices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchJobs(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchQuantumTasks(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"quantumTasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchQuantumTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.quantumTasks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSBraket): ClientType {
    return new Braket(client) as any;
  }
  
  static client(options?: AWSBraket.Types.ClientConfiguration): ClientType {
    return new Braket(new AWSBraket(options)) as any;
  }
}  
