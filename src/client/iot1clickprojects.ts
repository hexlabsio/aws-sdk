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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'projects';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listProjects"];
    
  associateDeviceWithPlacement: FunctionTypeFrom<'associateDeviceWithPlacement'>;

  createPlacement: FunctionTypeFrom<'createPlacement'>;

  createProject: FunctionTypeFrom<'createProject'>;

  deletePlacement: FunctionTypeFrom<'deletePlacement'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  describePlacement: FunctionTypeFrom<'describePlacement'>;

  describeProject: FunctionTypeFrom<'describeProject'>;

  disassociateDeviceFromPlacement: FunctionTypeFrom<'disassociateDeviceFromPlacement'>;

  getDevicesInPlacement: FunctionTypeFrom<'getDevicesInPlacement'>;

  listPlacements(params: { [K in keyof Omit<ParamsFrom<'listPlacements', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPlacements', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlacements'>]-?: ReturnTypeFrom<'listPlacements'>[K]}['placements'] }>
  ;

  listProjects(params: { [K in keyof Omit<ParamsFrom<'listProjects', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'] }>
  listProjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updatePlacement: FunctionTypeFrom<'updatePlacement'>;

  updateProject: FunctionTypeFrom<'updateProject'>
}
 
export class IoT1ClickProjects implements ClientType {
  private constructor(private readonly client: AWSIoT1ClickProjects) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'projects';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listProjects"] as const;
  
  async associateDeviceWithPlacement(...args: any): Promise<any> {
  // undefined
    return this.client.associateDeviceWithPlacement(...args).promise()
  }

  async createPlacement(...args: any): Promise<any> {
  // undefined
    return this.client.createPlacement(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async deletePlacement(...args: any): Promise<any> {
  // undefined
    return this.client.deletePlacement(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async describePlacement(...args: any): Promise<any> {
  // undefined
    return this.client.describePlacement(...args).promise()
  }

  async describeProject(...args: any): Promise<any> {
  // undefined
    return this.client.describeProject(...args).promise()
  }

  async disassociateDeviceFromPlacement(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateDeviceFromPlacement(...args).promise()
  }

  async getDevicesInPlacement(...args: any): Promise<any> {
  // undefined
    return this.client.getDevicesInPlacement(...args).promise()
  }

  async listPlacements(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"placements"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPlacements(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.placements ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"projects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.projects ?? [];
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

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updatePlacement(...args: any): Promise<any> {
  // undefined
    return this.client.updatePlacement(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }
  
  static fromClient(client: AWSIoT1ClickProjects): ClientType {
    return new IoT1ClickProjects(client) as any;
  }
  
  static client(options?: AWSIoT1ClickProjects.Types.ClientConfiguration): ClientType {
    return new IoT1ClickProjects(new AWSIoT1ClickProjects(options)) as any;
  }
}  
