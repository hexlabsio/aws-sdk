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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSResourceGroups> = AWSResourceGroups[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ResourceGroups {
  private constructor(private readonly client: AWSResourceGroups) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'resource-groups' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listGroupResources","listGroups"] as const;
  
  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  getGroup: (params: RawParamsFrom<'getGroup'>) => Promise<ReturnTypeFrom<'getGroup'>>  = async params => {
  // undefined
    return this.client.getGroup(params as any).promise();
  }

  getGroupConfiguration: (params: RawParamsFrom<'getGroupConfiguration'>) => Promise<ReturnTypeFrom<'getGroupConfiguration'>>  = async params => {
  // undefined
    return this.client.getGroupConfiguration(params as any).promise();
  }

  getGroupQuery: (params: RawParamsFrom<'getGroupQuery'>) => Promise<ReturnTypeFrom<'getGroupQuery'>>  = async params => {
  // undefined
    return this.client.getGroupQuery(params as any).promise();
  }

  getTags: (params: RawParamsFrom<'getTags'>) => Promise<ReturnTypeFrom<'getTags'>>  = async params => {
  // undefined
    return this.client.getTags(params as any).promise();
  }

  groupResources: (params: RawParamsFrom<'groupResources'>) => Promise<ReturnTypeFrom<'groupResources'>>  = async params => {
  // undefined
    return this.client.groupResources(params as any).promise();
  }

  listGroupResources: (params: RawParamsFrom<'listGroupResources'>) => Promise<ReturnTypeFrom<'listGroupResources'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":["ResourceIdentifiers","Resources"]}
    return this.client.listGroupResources(params as any).promise();
  }

  async listGroups(params: { [K in keyof ParamsFrom<'listGroups', { next?: string, limit?: number }>]: ParamsFrom<'listGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['GroupIdentifiers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GroupIdentifiers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.GroupIdentifiers ?? []) ? (result.GroupIdentifiers ?? []) : [result.GroupIdentifiers]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  putGroupConfiguration: (params: RawParamsFrom<'putGroupConfiguration'>) => Promise<ReturnTypeFrom<'putGroupConfiguration'>>  = async params => {
  // undefined
    return this.client.putGroupConfiguration(params as any).promise();
  }

  async searchResources(params: { [K in keyof ParamsFrom<'searchResources', { next?: string, limit?: number }>]: ParamsFrom<'searchResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchResources'>]-?: ReturnTypeFrom<'searchResources'>[K]}['ResourceIdentifiers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceIdentifiers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ResourceIdentifiers ?? []) ? (result.ResourceIdentifiers ?? []) : [result.ResourceIdentifiers]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  tag: (params: RawParamsFrom<'tag'>) => Promise<ReturnTypeFrom<'tag'>>  = async params => {
  // undefined
    return this.client.tag(params as any).promise();
  }

  ungroupResources: (params: RawParamsFrom<'ungroupResources'>) => Promise<ReturnTypeFrom<'ungroupResources'>>  = async params => {
  // undefined
    return this.client.ungroupResources(params as any).promise();
  }

  untag: (params: RawParamsFrom<'untag'>) => Promise<ReturnTypeFrom<'untag'>>  = async params => {
  // undefined
    return this.client.untag(params as any).promise();
  }

  updateGroup: (params: RawParamsFrom<'updateGroup'>) => Promise<ReturnTypeFrom<'updateGroup'>>  = async params => {
  // undefined
    return this.client.updateGroup(params as any).promise();
  }

  updateGroupQuery: (params: RawParamsFrom<'updateGroupQuery'>) => Promise<ReturnTypeFrom<'updateGroupQuery'>>  = async params => {
  // undefined
    return this.client.updateGroupQuery(params as any).promise();
  }
  
  static fromClient(client: AWSResourceGroups): ResourceGroups {
    return new ResourceGroups(client) as any;
  }
  
  static client(options?: AWSResourceGroups.Types.ClientConfiguration): ResourceGroups {
    return new ResourceGroups(new AWSResourceGroups(options)) as any;
  }
}  
