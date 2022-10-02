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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cloudcontrolapi';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listResourceRequests"];
    
  cancelResourceRequest: FunctionTypeFrom<'cancelResourceRequest'>;

  createResource: FunctionTypeFrom<'createResource'>;

  deleteResource: FunctionTypeFrom<'deleteResource'>;

  getResource: FunctionTypeFrom<'getResource'>;

  getResourceRequestStatus: FunctionTypeFrom<'getResourceRequestStatus'>;

  listResourceRequests(params: { [K in keyof Omit<ParamsFrom<'listResourceRequests', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResourceRequests', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceRequests'>]-?: ReturnTypeFrom<'listResourceRequests'>[K]}['ResourceRequestStatusSummaries'] }>
  listResourceRequests(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceRequests'>]-?: ReturnTypeFrom<'listResourceRequests'>[K]}['ResourceRequestStatusSummaries'] }>;

  listResources(params: { [K in keyof Omit<ParamsFrom<'listResources', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResources'>]-?: ReturnTypeFrom<'listResources'>[K]}['ResourceDescriptions'] }>
  ;

  updateResource: FunctionTypeFrom<'updateResource'>
}
 
export class CloudControl implements ClientType {
  private constructor(private readonly client: AWSCloudControl) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudcontrolapi';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listResourceRequests"] as const;
  
  async cancelResourceRequest(...args: any): Promise<any> {
  // undefined
    return this.client.cancelResourceRequest(...args).promise()
  }

  async createResource(...args: any): Promise<any> {
  // undefined
    return this.client.createResource(...args).promise()
  }

  async deleteResource(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResource(...args).promise()
  }

  async getResource(...args: any): Promise<any> {
  // undefined
    return this.client.getResource(...args).promise()
  }

  async getResourceRequestStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getResourceRequestStatus(...args).promise()
  }

  async listResourceRequests(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceRequestStatusSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceRequests(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceRequestStatusSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceDescriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceDescriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async updateResource(...args: any): Promise<any> {
  // undefined
    return this.client.updateResource(...args).promise()
  }
  
  static fromClient(client: AWSCloudControl): ClientType {
    return new CloudControl(client) as any;
  }
  
  static client(options?: AWSCloudControl.Types.ClientConfiguration): ClientType {
    return new CloudControl(new AWSCloudControl(options)) as any;
  }
}  
