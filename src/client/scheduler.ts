import { Request, Scheduler as AWSScheduler } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSScheduler> = AWSScheduler[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSScheduler> = AWSScheduler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSScheduler[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSScheduler, Extras> = AWSScheduler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSScheduler> = AWSScheduler[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Scheduler {
  private constructor(private readonly client: AWSScheduler) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'scheduler' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listScheduleGroups","listSchedules"] as const;
  
  createSchedule: (params: RawParamsFrom<'createSchedule'>) => Promise<ReturnTypeFrom<'createSchedule'>>  = async params => {
  // undefined
    return this.client.createSchedule(params as any).promise();
  }

  createScheduleGroup: (params: RawParamsFrom<'createScheduleGroup'>) => Promise<ReturnTypeFrom<'createScheduleGroup'>>  = async params => {
  // undefined
    return this.client.createScheduleGroup(params as any).promise();
  }

  deleteSchedule: (params: RawParamsFrom<'deleteSchedule'>) => Promise<ReturnTypeFrom<'deleteSchedule'>>  = async params => {
  // undefined
    return this.client.deleteSchedule(params as any).promise();
  }

  deleteScheduleGroup: (params: RawParamsFrom<'deleteScheduleGroup'>) => Promise<ReturnTypeFrom<'deleteScheduleGroup'>>  = async params => {
  // undefined
    return this.client.deleteScheduleGroup(params as any).promise();
  }

  getSchedule: (params: RawParamsFrom<'getSchedule'>) => Promise<ReturnTypeFrom<'getSchedule'>>  = async params => {
  // undefined
    return this.client.getSchedule(params as any).promise();
  }

  getScheduleGroup: (params: RawParamsFrom<'getScheduleGroup'>) => Promise<ReturnTypeFrom<'getScheduleGroup'>>  = async params => {
  // undefined
    return this.client.getScheduleGroup(params as any).promise();
  }

  async listScheduleGroups(params: { [K in keyof ParamsFrom<'listScheduleGroups', { next?: string, limit?: number }>]: ParamsFrom<'listScheduleGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listScheduleGroups'>]-?: ReturnTypeFrom<'listScheduleGroups'>[K]}['ScheduleGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ScheduleGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listScheduleGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listScheduleGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ScheduleGroups ?? []) ? (result.ScheduleGroups ?? []) : [result.ScheduleGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchedules(params: { [K in keyof ParamsFrom<'listSchedules', { next?: string, limit?: number }>]: ParamsFrom<'listSchedules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchedules'>]-?: ReturnTypeFrom<'listSchedules'>[K]}['Schedules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Schedules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listSchedules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSchedules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Schedules ?? []) ? (result.Schedules ?? []) : [result.Schedules]) as any;
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

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateSchedule: (params: RawParamsFrom<'updateSchedule'>) => Promise<ReturnTypeFrom<'updateSchedule'>>  = async params => {
  // undefined
    return this.client.updateSchedule(params as any).promise();
  }
  
  static fromClient(client: AWSScheduler): Scheduler {
    return new Scheduler(client) as any;
  }
  
  static client(options?: AWSScheduler.Types.ClientConfiguration): Scheduler {
    return new Scheduler(new AWSScheduler(options)) as any;
  }
}  
