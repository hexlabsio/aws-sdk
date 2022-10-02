import { Request, IoTFleetHub as AWSIoTFleetHub } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTFleetHub> = AWSIoTFleetHub[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTFleetHub> = AWSIoTFleetHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTFleetHub[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTFleetHub, Extras> = AWSIoTFleetHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'fleethub';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listApplications"];
    
  createApplication: FunctionTypeFrom<'createApplication'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  describeApplication: FunctionTypeFrom<'describeApplication'>;

  listApplications(params: { [K in keyof Omit<ParamsFrom<'listApplications', { next?: string }>, 'nextToken'>]: ParamsFrom<'listApplications', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applicationSummaries'] }>
  listApplications(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applicationSummaries'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>
}
 
export class IoTFleetHub implements ClientType {
  private constructor(private readonly client: AWSIoTFleetHub) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'fleethub';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listApplications"] as const;
  
  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async describeApplication(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplication(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"applicationSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.applicationSummaries ?? [];
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

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }
  
  static fromClient(client: AWSIoTFleetHub): ClientType {
    return new IoTFleetHub(client) as any;
  }
  
  static client(options?: AWSIoTFleetHub.Types.ClientConfiguration): ClientType {
    return new IoTFleetHub(new AWSIoTFleetHub(options)) as any;
  }
}  
