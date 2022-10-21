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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTFleetHub> = AWSIoTFleetHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTFleetHub {
  private constructor(private readonly client: AWSIoTFleetHub) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'fleethub' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplications"] as const;
  
  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  describeApplication: (params: RawParamsFrom<'describeApplication'>) => Promise<ReturnTypeFrom<'describeApplication'>>  = async params => {
  // undefined
    return this.client.describeApplication(params as any).promise();
  }

  async listApplications(params: { [K in keyof ParamsFrom<'listApplications', { next?: string }>]: ParamsFrom<'listApplications', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['applicationSummaries'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"applicationSummaries"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.applicationSummaries ?? []) ? (result.applicationSummaries ?? []) : [result.applicationSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
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

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }
  
  static fromClient(client: AWSIoTFleetHub): IoTFleetHub {
    return new IoTFleetHub(client) as any;
  }
  
  static client(options?: AWSIoTFleetHub.Types.ClientConfiguration): IoTFleetHub {
    return new IoTFleetHub(new AWSIoTFleetHub(options)) as any;
  }
}  
