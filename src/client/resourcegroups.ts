import { Request, ResourceGroups as AWSResourceGroups } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSResourceGroups> = AWSResourceGroups[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSResourceGroups> = AWSResourceGroups[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSResourceGroups[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSResourceGroups, Extras> = AWSResourceGroups[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'resource-groups';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listGroupResources","listGroups"];
    
  createGroup: FunctionTypeFrom<'createGroup'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  getGroup: FunctionTypeFrom<'getGroup'>;

  getGroupConfiguration: FunctionTypeFrom<'getGroupConfiguration'>;

  getGroupQuery: FunctionTypeFrom<'getGroupQuery'>;

  getTags: FunctionTypeFrom<'getTags'>;

  groupResources: FunctionTypeFrom<'groupResources'>;

  listGroupResources: FunctionTypeFrom<'listGroupResources'>;

  listGroups(params: { [K in keyof Omit<ParamsFrom<'listGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['GroupIdentifiers'] }>
  listGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['GroupIdentifiers'] }>;

  putGroupConfiguration: FunctionTypeFrom<'putGroupConfiguration'>;

  searchResources(params: { [K in keyof Omit<ParamsFrom<'searchResources', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchResources'>]-?: ReturnTypeFrom<'searchResources'>[K]}['ResourceIdentifiers'] }>
  ;

  tag: FunctionTypeFrom<'tag'>;

  ungroupResources: FunctionTypeFrom<'ungroupResources'>;

  untag: FunctionTypeFrom<'untag'>;

  updateGroup: FunctionTypeFrom<'updateGroup'>;

  updateGroupQuery: FunctionTypeFrom<'updateGroupQuery'>
}
 
export class ResourceGroups implements ClientType {
  private constructor(private readonly client: AWSResourceGroups) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'resource-groups';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listGroupResources","listGroups"] as const;
  
  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async getGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getGroup(...args).promise()
  }

  async getGroupConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getGroupConfiguration(...args).promise()
  }

  async getGroupQuery(...args: any): Promise<any> {
  // undefined
    return this.client.getGroupQuery(...args).promise()
  }

  async getTags(...args: any): Promise<any> {
  // undefined
    return this.client.getTags(...args).promise()
  }

  async groupResources(...args: any): Promise<any> {
  // undefined
    return this.client.groupResources(...args).promise()
  }

  async listGroupResources(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ResourceIdentifiers","Resources"]}
    return this.client.listGroupResources(...args).promise()
  }

  async listGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GroupIdentifiers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GroupIdentifiers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putGroupConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putGroupConfiguration(...args).promise()
  }

  async searchResources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceIdentifiers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceIdentifiers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tag(...args: any): Promise<any> {
  // undefined
    return this.client.tag(...args).promise()
  }

  async ungroupResources(...args: any): Promise<any> {
  // undefined
    return this.client.ungroupResources(...args).promise()
  }

  async untag(...args: any): Promise<any> {
  // undefined
    return this.client.untag(...args).promise()
  }

  async updateGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroup(...args).promise()
  }

  async updateGroupQuery(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroupQuery(...args).promise()
  }
  
  static fromClient(client: AWSResourceGroups): ClientType {
    return new ResourceGroups(client) as any;
  }
  
  static client(options?: AWSResourceGroups.Types.ClientConfiguration): ClientType {
    return new ResourceGroups(new AWSResourceGroups(options)) as any;
  }
}  
