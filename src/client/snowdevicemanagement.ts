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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSnowDeviceManagement> = AWSSnowDeviceManagement[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SnowDeviceManagement {
  private constructor(private readonly client: AWSSnowDeviceManagement) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'snow-device-management' as const;
  public readonly global = false as const;
  public readonly category = 'Migration and Transfer' as const;
  public readonly topLevelCalls = ["listDevices","listTasks"] as const;
  
  cancelTask: (params: RawParamsFrom<'cancelTask'>) => Promise<ReturnTypeFrom<'cancelTask'>>  = async params => {
  // undefined
    return this.client.cancelTask(params as any).promise();
  }

  createTask: (params: RawParamsFrom<'createTask'>) => Promise<ReturnTypeFrom<'createTask'>>  = async params => {
  // undefined
    return this.client.createTask(params as any).promise();
  }

  describeDevice: (params: RawParamsFrom<'describeDevice'>) => Promise<ReturnTypeFrom<'describeDevice'>>  = async params => {
  // undefined
    return this.client.describeDevice(params as any).promise();
  }

  describeDeviceEc2Instances: (params: RawParamsFrom<'describeDeviceEc2Instances'>) => Promise<ReturnTypeFrom<'describeDeviceEc2Instances'>>  = async params => {
  // undefined
    return this.client.describeDeviceEc2Instances(params as any).promise();
  }

  describeExecution: (params: RawParamsFrom<'describeExecution'>) => Promise<ReturnTypeFrom<'describeExecution'>>  = async params => {
  // undefined
    return this.client.describeExecution(params as any).promise();
  }

  describeTask: (params: RawParamsFrom<'describeTask'>) => Promise<ReturnTypeFrom<'describeTask'>>  = async params => {
  // undefined
    return this.client.describeTask(params as any).promise();
  }

  async listDeviceResources(params: { [K in keyof ParamsFrom<'listDeviceResources', { next?: string, limit?: number }>]: ParamsFrom<'listDeviceResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDeviceResources'>]-?: ReturnTypeFrom<'listDeviceResources'>[K]}['resources'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"resources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDeviceResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDeviceResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.resources ?? []) ? (result.resources ?? []) : [result.resources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDevices(params: { [K in keyof ParamsFrom<'listDevices', { next?: string, limit?: number }>]: ParamsFrom<'listDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDevices'>]-?: ReturnTypeFrom<'listDevices'>[K]}['devices'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"devices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDevices' })).toString('base64') : undefined;
    const member = (Array.isArray(result.devices ?? []) ? (result.devices ?? []) : [result.devices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExecutions(params: { [K in keyof ParamsFrom<'listExecutions', { next?: string, limit?: number }>]: ParamsFrom<'listExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExecutions'>]-?: ReturnTypeFrom<'listExecutions'>[K]}['executions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"executions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.executions ?? []) ? (result.executions ?? []) : [result.executions]) as any;
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

  async listTasks(params: { [K in keyof ParamsFrom<'listTasks', { next?: string, limit?: number }>]: ParamsFrom<'listTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTasks'>]-?: ReturnTypeFrom<'listTasks'>[K]}['tasks'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tasks"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tasks ?? []) ? (result.tasks ?? []) : [result.tasks]) as any;
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
  
  static fromClient(client: AWSSnowDeviceManagement): SnowDeviceManagement {
    return new SnowDeviceManagement(client) as any;
  }
  
  static client(options?: AWSSnowDeviceManagement.Types.ClientConfiguration): SnowDeviceManagement {
    return new SnowDeviceManagement(new AWSSnowDeviceManagement(options)) as any;
  }
}  
