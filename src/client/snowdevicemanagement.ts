import { Request, SnowDeviceManagement as AWSSnowDeviceManagement } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSnowDeviceManagement> = AWSSnowDeviceManagement[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSnowDeviceManagement> = AWSSnowDeviceManagement[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSnowDeviceManagement[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSnowDeviceManagement, Extras> = AWSSnowDeviceManagement[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'snow-device-management';
    global: false;
    category: 'Migration and Transfer'
    topLevelCalls: readonly ["listDevices","listTasks"];
    
  cancelTask: FunctionTypeFrom<'cancelTask'>;

  createTask: FunctionTypeFrom<'createTask'>;

  describeDevice: FunctionTypeFrom<'describeDevice'>;

  describeDeviceEc2Instances: FunctionTypeFrom<'describeDeviceEc2Instances'>;

  describeExecution: FunctionTypeFrom<'describeExecution'>;

  describeTask: FunctionTypeFrom<'describeTask'>;

  listDeviceResources(params: { [K in keyof Omit<ParamsFrom<'listDeviceResources', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDeviceResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDeviceResources'>]-?: ReturnTypeFrom<'listDeviceResources'>[K]}['resources'] }>
  ;

  listDevices(params: { [K in keyof Omit<ParamsFrom<'listDevices', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['devices'] }>
  listDevices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['devices'] }>;

  listExecutions(params: { [K in keyof Omit<ParamsFrom<'listExecutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExecutions'>]-?: ReturnTypeFrom<'listExecutions'>[K]}['executions'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTasks(params: { [K in keyof Omit<ParamsFrom<'listTasks', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['tasks'] }>
  listTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['tasks'] }>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class SnowDeviceManagement implements ClientType {
  private constructor(private readonly client: AWSSnowDeviceManagement) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'snow-device-management';
  public readonly global = false;
  public readonly category = 'Migration and Transfer';
  public readonly topLevelCalls = ["listDevices","listTasks"] as const;
  
  async cancelTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelTask(...args).promise()
  }

  async createTask(...args: any): Promise<any> {
  // undefined
    return this.client.createTask(...args).promise()
  }

  async describeDevice(...args: any): Promise<any> {
  // undefined
    return this.client.describeDevice(...args).promise()
  }

  async describeDeviceEc2Instances(...args: any): Promise<any> {
  // undefined
    return this.client.describeDeviceEc2Instances(...args).promise()
  }

  async describeExecution(...args: any): Promise<any> {
  // undefined
    return this.client.describeExecution(...args).promise()
  }

  async describeTask(...args: any): Promise<any> {
  // undefined
    return this.client.describeTask(...args).promise()
  }

  async listDeviceResources(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"resources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeviceResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.resources ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDevices(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"devices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.devices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"executions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.executions ?? [];
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

  async listTasks(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tasks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tasks ?? [];
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
  
  static fromClient(client: AWSSnowDeviceManagement): ClientType {
    return new SnowDeviceManagement(client) as any;
  }
  
  static client(options?: AWSSnowDeviceManagement.Types.ClientConfiguration): ClientType {
    return new SnowDeviceManagement(new AWSSnowDeviceManagement(options)) as any;
  }
}  
