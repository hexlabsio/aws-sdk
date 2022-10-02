import { Request, IdentityStore as AWSIdentityStore } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIdentityStore> = AWSIdentityStore[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIdentityStore> = AWSIdentityStore[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIdentityStore[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIdentityStore, Extras> = AWSIdentityStore[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'identitystore';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  createGroup: FunctionTypeFrom<'createGroup'>;

  createGroupMembership: FunctionTypeFrom<'createGroupMembership'>;

  createUser: FunctionTypeFrom<'createUser'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  deleteGroupMembership: FunctionTypeFrom<'deleteGroupMembership'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  describeGroup: FunctionTypeFrom<'describeGroup'>;

  describeGroupMembership: FunctionTypeFrom<'describeGroupMembership'>;

  describeUser: FunctionTypeFrom<'describeUser'>;

  getGroupId: FunctionTypeFrom<'getGroupId'>;

  getGroupMembershipId: FunctionTypeFrom<'getGroupMembershipId'>;

  getUserId: FunctionTypeFrom<'getUserId'>;

  isMemberInGroups: FunctionTypeFrom<'isMemberInGroups'>;

  listGroupMemberships(params: { [K in keyof Omit<ParamsFrom<'listGroupMemberships', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGroupMemberships', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroupMemberships'>]-?: ReturnTypeFrom<'listGroupMemberships'>[K]}['GroupMemberships'] }>
  ;

  listGroupMembershipsForMember(params: { [K in keyof Omit<ParamsFrom<'listGroupMembershipsForMember', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGroupMembershipsForMember', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroupMembershipsForMember'>]-?: ReturnTypeFrom<'listGroupMembershipsForMember'>[K]}['GroupMemberships'] }>
  ;

  listGroups(params: { [K in keyof Omit<ParamsFrom<'listGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['Groups'] }>
  ;

  listUsers(params: { [K in keyof Omit<ParamsFrom<'listUsers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'] }>
  ;

  updateGroup: FunctionTypeFrom<'updateGroup'>;

  updateUser: FunctionTypeFrom<'updateUser'>
}
 
export class IdentityStore implements ClientType {
  private constructor(private readonly client: AWSIdentityStore) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'identitystore';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async createGroupMembership(...args: any): Promise<any> {
  // undefined
    return this.client.createGroupMembership(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async deleteGroupMembership(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroupMembership(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async describeGroup(...args: any): Promise<any> {
  // undefined
    return this.client.describeGroup(...args).promise()
  }

  async describeGroupMembership(...args: any): Promise<any> {
  // undefined
    return this.client.describeGroupMembership(...args).promise()
  }

  async describeUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeUser(...args).promise()
  }

  async getGroupId(...args: any): Promise<any> {
  // undefined
    return this.client.getGroupId(...args).promise()
  }

  async getGroupMembershipId(...args: any): Promise<any> {
  // undefined
    return this.client.getGroupMembershipId(...args).promise()
  }

  async getUserId(...args: any): Promise<any> {
  // undefined
    return this.client.getUserId(...args).promise()
  }

  async isMemberInGroups(...args: any): Promise<any> {
  // undefined
    return this.client.isMemberInGroups(...args).promise()
  }

  async listGroupMemberships(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GroupMemberships"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGroupMemberships(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GroupMemberships ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroupMembershipsForMember(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GroupMemberships"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGroupMembershipsForMember(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.GroupMemberships ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Groups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Groups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async updateGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroup(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }
  
  static fromClient(client: AWSIdentityStore): ClientType {
    return new IdentityStore(client) as any;
  }
  
  static client(options?: AWSIdentityStore.Types.ClientConfiguration): ClientType {
    return new IdentityStore(new AWSIdentityStore(options)) as any;
  }
}  
