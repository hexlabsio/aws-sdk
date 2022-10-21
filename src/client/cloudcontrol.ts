import { Request, CloudControl as AWSCloudControl } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudControl> = AWSCloudControl[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudControl> = AWSCloudControl[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudControl[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudControl, Extras> = AWSCloudControl[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudControl> = AWSCloudControl[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudControl {
  private constructor(private readonly client: AWSCloudControl) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudcontrolapi' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listResourceRequests"] as const;
  
  cancelResourceRequest: (params: RawParamsFrom<'cancelResourceRequest'>) => Promise<ReturnTypeFrom<'cancelResourceRequest'>>  = async params => {
  // undefined
    return this.client.cancelResourceRequest(params as any).promise();
  }

  createResource: (params: RawParamsFrom<'createResource'>) => Promise<ReturnTypeFrom<'createResource'>>  = async params => {
  // undefined
    return this.client.createResource(params as any).promise();
  }

  deleteResource: (params: RawParamsFrom<'deleteResource'>) => Promise<ReturnTypeFrom<'deleteResource'>>  = async params => {
  // undefined
    return this.client.deleteResource(params as any).promise();
  }

  getResource: (params: RawParamsFrom<'getResource'>) => Promise<ReturnTypeFrom<'getResource'>>  = async params => {
  // undefined
    return this.client.getResource(params as any).promise();
  }

  getResourceRequestStatus: (params: RawParamsFrom<'getResourceRequestStatus'>) => Promise<ReturnTypeFrom<'getResourceRequestStatus'>>  = async params => {
  // undefined
    return this.client.getResourceRequestStatus(params as any).promise();
  }

  async listResourceRequests(params: { [K in keyof ParamsFrom<'listResourceRequests', { next?: string, limit?: number }>]: ParamsFrom<'listResourceRequests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceRequests'>]-?: ReturnTypeFrom<'listResourceRequests'>[K]}['ResourceRequestStatusSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceRequestStatusSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceRequests({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ResourceRequestStatusSummaries ?? []) ? (result.ResourceRequestStatusSummaries ?? []) : [result.ResourceRequestStatusSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listResources(params: { [K in keyof ParamsFrom<'listResources', { next?: string, limit?: number }>]: ParamsFrom<'listResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResources'>]-?: ReturnTypeFrom<'listResources'>[K]}['ResourceDescriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceDescriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ResourceDescriptions ?? []) ? (result.ResourceDescriptions ?? []) : [result.ResourceDescriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  updateResource: (params: RawParamsFrom<'updateResource'>) => Promise<ReturnTypeFrom<'updateResource'>>  = async params => {
  // undefined
    return this.client.updateResource(params as any).promise();
  }
  
  static fromClient(client: AWSCloudControl): CloudControl {
    return new CloudControl(client) as any;
  }
  
  static client(options?: AWSCloudControl.Types.ClientConfiguration): CloudControl {
    return new CloudControl(new AWSCloudControl(options)) as any;
  }
}  
