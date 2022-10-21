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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIdentityStore> = AWSIdentityStore[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IdentityStore {
  private constructor(private readonly client: AWSIdentityStore) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'identitystore' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  createGroupMembership: (params: RawParamsFrom<'createGroupMembership'>) => Promise<ReturnTypeFrom<'createGroupMembership'>>  = async params => {
  // undefined
    return this.client.createGroupMembership(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  deleteGroupMembership: (params: RawParamsFrom<'deleteGroupMembership'>) => Promise<ReturnTypeFrom<'deleteGroupMembership'>>  = async params => {
  // undefined
    return this.client.deleteGroupMembership(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  describeGroup: (params: RawParamsFrom<'describeGroup'>) => Promise<ReturnTypeFrom<'describeGroup'>>  = async params => {
  // undefined
    return this.client.describeGroup(params as any).promise();
  }

  describeGroupMembership: (params: RawParamsFrom<'describeGroupMembership'>) => Promise<ReturnTypeFrom<'describeGroupMembership'>>  = async params => {
  // undefined
    return this.client.describeGroupMembership(params as any).promise();
  }

  describeUser: (params: RawParamsFrom<'describeUser'>) => Promise<ReturnTypeFrom<'describeUser'>>  = async params => {
  // undefined
    return this.client.describeUser(params as any).promise();
  }

  getGroupId: (params: RawParamsFrom<'getGroupId'>) => Promise<ReturnTypeFrom<'getGroupId'>>  = async params => {
  // undefined
    return this.client.getGroupId(params as any).promise();
  }

  getGroupMembershipId: (params: RawParamsFrom<'getGroupMembershipId'>) => Promise<ReturnTypeFrom<'getGroupMembershipId'>>  = async params => {
  // undefined
    return this.client.getGroupMembershipId(params as any).promise();
  }

  getUserId: (params: RawParamsFrom<'getUserId'>) => Promise<ReturnTypeFrom<'getUserId'>>  = async params => {
  // undefined
    return this.client.getUserId(params as any).promise();
  }

  isMemberInGroups: (params: RawParamsFrom<'isMemberInGroups'>) => Promise<ReturnTypeFrom<'isMemberInGroups'>>  = async params => {
  // undefined
    return this.client.isMemberInGroups(params as any).promise();
  }

  async listGroupMemberships(params: { [K in keyof ParamsFrom<'listGroupMemberships', { next?: string, limit?: number }>]: ParamsFrom<'listGroupMemberships', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroupMemberships'>]-?: ReturnTypeFrom<'listGroupMemberships'>[K]}['GroupMemberships'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GroupMemberships"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGroupMemberships({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGroupMemberships' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GroupMemberships ?? []) ? (result.GroupMemberships ?? []) : [result.GroupMemberships]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroupMembershipsForMember(params: { [K in keyof ParamsFrom<'listGroupMembershipsForMember', { next?: string, limit?: number }>]: ParamsFrom<'listGroupMembershipsForMember', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroupMembershipsForMember'>]-?: ReturnTypeFrom<'listGroupMembershipsForMember'>[K]}['GroupMemberships'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"GroupMemberships"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGroupMembershipsForMember({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGroupMembershipsForMember' })).toString('base64') : undefined;
    const member = (Array.isArray(result.GroupMemberships ?? []) ? (result.GroupMemberships ?? []) : [result.GroupMemberships]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroups(params: { [K in keyof ParamsFrom<'listGroups', { next?: string, limit?: number }>]: ParamsFrom<'listGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['Groups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Groups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Groups ?? []) ? (result.Groups ?? []) : [result.Groups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(params: { [K in keyof ParamsFrom<'listUsers', { next?: string, limit?: number }>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listUsers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  updateGroup: (params: RawParamsFrom<'updateGroup'>) => Promise<ReturnTypeFrom<'updateGroup'>>  = async params => {
  // undefined
    return this.client.updateGroup(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }
  
  static fromClient(client: AWSIdentityStore): IdentityStore {
    return new IdentityStore(client) as any;
  }
  
  static client(options?: AWSIdentityStore.Types.ClientConfiguration): IdentityStore {
    return new IdentityStore(new AWSIdentityStore(options)) as any;
  }
}  
