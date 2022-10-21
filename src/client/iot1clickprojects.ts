import { Request, IoT1ClickProjects as AWSIoT1ClickProjects } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoT1ClickProjects> = AWSIoT1ClickProjects[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoT1ClickProjects> = AWSIoT1ClickProjects[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoT1ClickProjects[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoT1ClickProjects, Extras> = AWSIoT1ClickProjects[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoT1ClickProjects> = AWSIoT1ClickProjects[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoT1ClickProjects {
  private constructor(private readonly client: AWSIoT1ClickProjects) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'projects' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listProjects"] as const;
  
  associateDeviceWithPlacement: (params: RawParamsFrom<'associateDeviceWithPlacement'>) => Promise<ReturnTypeFrom<'associateDeviceWithPlacement'>>  = async params => {
  // undefined
    return this.client.associateDeviceWithPlacement(params as any).promise();
  }

  createPlacement: (params: RawParamsFrom<'createPlacement'>) => Promise<ReturnTypeFrom<'createPlacement'>>  = async params => {
  // undefined
    return this.client.createPlacement(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  deletePlacement: (params: RawParamsFrom<'deletePlacement'>) => Promise<ReturnTypeFrom<'deletePlacement'>>  = async params => {
  // undefined
    return this.client.deletePlacement(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  describePlacement: (params: RawParamsFrom<'describePlacement'>) => Promise<ReturnTypeFrom<'describePlacement'>>  = async params => {
  // undefined
    return this.client.describePlacement(params as any).promise();
  }

  describeProject: (params: RawParamsFrom<'describeProject'>) => Promise<ReturnTypeFrom<'describeProject'>>  = async params => {
  // undefined
    return this.client.describeProject(params as any).promise();
  }

  disassociateDeviceFromPlacement: (params: RawParamsFrom<'disassociateDeviceFromPlacement'>) => Promise<ReturnTypeFrom<'disassociateDeviceFromPlacement'>>  = async params => {
  // undefined
    return this.client.disassociateDeviceFromPlacement(params as any).promise();
  }

  getDevicesInPlacement: (params: RawParamsFrom<'getDevicesInPlacement'>) => Promise<ReturnTypeFrom<'getDevicesInPlacement'>>  = async params => {
  // undefined
    return this.client.getDevicesInPlacement(params as any).promise();
  }

  async listPlacements(params: { [K in keyof ParamsFrom<'listPlacements', { next?: string, limit?: number }>]: ParamsFrom<'listPlacements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPlacements'>]-?: ReturnTypeFrom<'listPlacements'>[K]}['placements'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"placements"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPlacements({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPlacements' })).toString('base64') : undefined;
    const member = (Array.isArray(result.placements ?? []) ? (result.placements ?? []) : [result.placements]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(params: { [K in keyof ParamsFrom<'listProjects', { next?: string, limit?: number }>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"projects"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProjects' })).toString('base64') : undefined;
    const member = (Array.isArray(result.projects ?? []) ? (result.projects ?? []) : [result.projects]) as any;
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

  updatePlacement: (params: RawParamsFrom<'updatePlacement'>) => Promise<ReturnTypeFrom<'updatePlacement'>>  = async params => {
  // undefined
    return this.client.updatePlacement(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }
  
  static fromClient(client: AWSIoT1ClickProjects): IoT1ClickProjects {
    return new IoT1ClickProjects(client) as any;
  }
  
  static client(options?: AWSIoT1ClickProjects.Types.ClientConfiguration): IoT1ClickProjects {
    return new IoT1ClickProjects(new AWSIoT1ClickProjects(options)) as any;
  }
}  
