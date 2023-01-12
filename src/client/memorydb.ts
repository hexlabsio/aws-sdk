import { Request, MemoryDB as AWSMemoryDB } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMemoryDB> = AWSMemoryDB[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMemoryDB> = AWSMemoryDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMemoryDB[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMemoryDB, Extras> = AWSMemoryDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMemoryDB> = AWSMemoryDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MemoryDB {
  private constructor(private readonly client: AWSMemoryDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'memory-db' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["describeACLs","describeClusters","describeEngineVersions","describeEvents","describeParameterGroups","describeReservedNodes","describeReservedNodesOfferings","describeServiceUpdates","describeSnapshots","describeSubnetGroups","describeUsers"] as const;
  
  batchUpdateCluster: (params: RawParamsFrom<'batchUpdateCluster'>) => Promise<ReturnTypeFrom<'batchUpdateCluster'>>  = async params => {
  // undefined
    return this.client.batchUpdateCluster(params as any).promise();
  }

  copySnapshot: (params: RawParamsFrom<'copySnapshot'>) => Promise<ReturnTypeFrom<'copySnapshot'>>  = async params => {
  // undefined
    return this.client.copySnapshot(params as any).promise();
  }

  createACL: (params: RawParamsFrom<'createACL'>) => Promise<ReturnTypeFrom<'createACL'>>  = async params => {
  // undefined
    return this.client.createACL(params as any).promise();
  }

  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createParameterGroup: (params: RawParamsFrom<'createParameterGroup'>) => Promise<ReturnTypeFrom<'createParameterGroup'>>  = async params => {
  // undefined
    return this.client.createParameterGroup(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createSubnetGroup: (params: RawParamsFrom<'createSubnetGroup'>) => Promise<ReturnTypeFrom<'createSubnetGroup'>>  = async params => {
  // undefined
    return this.client.createSubnetGroup(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deleteACL: (params: RawParamsFrom<'deleteACL'>) => Promise<ReturnTypeFrom<'deleteACL'>>  = async params => {
  // undefined
    return this.client.deleteACL(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteParameterGroup: (params: RawParamsFrom<'deleteParameterGroup'>) => Promise<ReturnTypeFrom<'deleteParameterGroup'>>  = async params => {
  // undefined
    return this.client.deleteParameterGroup(params as any).promise();
  }

  deleteSnapshot: (params: RawParamsFrom<'deleteSnapshot'>) => Promise<ReturnTypeFrom<'deleteSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteSnapshot(params as any).promise();
  }

  deleteSubnetGroup: (params: RawParamsFrom<'deleteSubnetGroup'>) => Promise<ReturnTypeFrom<'deleteSubnetGroup'>>  = async params => {
  // undefined
    return this.client.deleteSubnetGroup(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  async describeACLs(params: { [K in keyof ParamsFrom<'describeACLs', { next?: string, limit?: number }>]: ParamsFrom<'describeACLs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeACLs'>]-?: ReturnTypeFrom<'describeACLs'>[K]}['ACLs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ACLs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeACLs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeACLs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ACLs ?? []) ? (result.ACLs ?? []) : [result.ACLs]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeClusters(params: { [K in keyof ParamsFrom<'describeClusters', { next?: string, limit?: number }>]: ParamsFrom<'describeClusters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClusters'>]-?: ReturnTypeFrom<'describeClusters'>[K]}['Clusters'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Clusters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeClusters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeClusters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Clusters ?? []) ? (result.Clusters ?? []) : [result.Clusters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEngineVersions(params: { [K in keyof ParamsFrom<'describeEngineVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeEngineVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEngineVersions'>]-?: ReturnTypeFrom<'describeEngineVersions'>[K]}['EngineVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EngineVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEngineVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEngineVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EngineVersions ?? []) ? (result.EngineVersions ?? []) : [result.EngineVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvents(params: { [K in keyof ParamsFrom<'describeEvents', { next?: string, limit?: number }>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEvents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeParameterGroups(params: { [K in keyof ParamsFrom<'describeParameterGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeParameterGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeParameterGroups'>]-?: ReturnTypeFrom<'describeParameterGroups'>[K]}['ParameterGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ParameterGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeParameterGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeParameterGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ParameterGroups ?? []) ? (result.ParameterGroups ?? []) : [result.ParameterGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeParameters(params: { [K in keyof ParamsFrom<'describeParameters', { next?: string, limit?: number }>]: ParamsFrom<'describeParameters', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeParameters'>]-?: ReturnTypeFrom<'describeParameters'>[K]}['Parameters'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Parameters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeParameters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeParameters' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Parameters ?? []) ? (result.Parameters ?? []) : [result.Parameters]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedNodes(params: { [K in keyof ParamsFrom<'describeReservedNodes', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedNodes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedNodes'>]-?: ReturnTypeFrom<'describeReservedNodes'>[K]}['ReservedNodes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReservedNodes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeReservedNodes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeReservedNodes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedNodes ?? []) ? (result.ReservedNodes ?? []) : [result.ReservedNodes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeReservedNodesOfferings(params: { [K in keyof ParamsFrom<'describeReservedNodesOfferings', { next?: string, limit?: number }>]: ParamsFrom<'describeReservedNodesOfferings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeReservedNodesOfferings'>]-?: ReturnTypeFrom<'describeReservedNodesOfferings'>[K]}['ReservedNodesOfferings'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ReservedNodesOfferings"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeReservedNodesOfferings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeReservedNodesOfferings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ReservedNodesOfferings ?? []) ? (result.ReservedNodesOfferings ?? []) : [result.ReservedNodesOfferings]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeServiceUpdates(params: { [K in keyof ParamsFrom<'describeServiceUpdates', { next?: string, limit?: number }>]: ParamsFrom<'describeServiceUpdates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeServiceUpdates'>]-?: ReturnTypeFrom<'describeServiceUpdates'>[K]}['ServiceUpdates'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServiceUpdates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeServiceUpdates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeServiceUpdates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ServiceUpdates ?? []) ? (result.ServiceUpdates ?? []) : [result.ServiceUpdates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshots(params: { [K in keyof ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSnapshots'>]-?: ReturnTypeFrom<'describeSnapshots'>[K]}['Snapshots'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSnapshots' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Snapshots ?? []) ? (result.Snapshots ?? []) : [result.Snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSubnetGroups(params: { [K in keyof ParamsFrom<'describeSubnetGroups', { next?: string, limit?: number }>]: ParamsFrom<'describeSubnetGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSubnetGroups'>]-?: ReturnTypeFrom<'describeSubnetGroups'>[K]}['SubnetGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"SubnetGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeSubnetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSubnetGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SubnetGroups ?? []) ? (result.SubnetGroups ?? []) : [result.SubnetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUsers(params: { [K in keyof ParamsFrom<'describeUsers', { next?: string, limit?: number }>]: ParamsFrom<'describeUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeUsers'>]-?: ReturnTypeFrom<'describeUsers'>[K]}['Users'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeUsers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  failoverShard: (params: RawParamsFrom<'failoverShard'>) => Promise<ReturnTypeFrom<'failoverShard'>>  = async params => {
  // undefined
    return this.client.failoverShard(params as any).promise();
  }

  listAllowedNodeTypeUpdates: (params: RawParamsFrom<'listAllowedNodeTypeUpdates'>) => Promise<ReturnTypeFrom<'listAllowedNodeTypeUpdates'>>  = async params => {
  // undefined
    return this.client.listAllowedNodeTypeUpdates(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // undefined
    return this.client.listTags(params as any).promise();
  }

  purchaseReservedNodesOffering: (params: RawParamsFrom<'purchaseReservedNodesOffering'>) => Promise<ReturnTypeFrom<'purchaseReservedNodesOffering'>>  = async params => {
  // undefined
    return this.client.purchaseReservedNodesOffering(params as any).promise();
  }

  resetParameterGroup: (params: RawParamsFrom<'resetParameterGroup'>) => Promise<ReturnTypeFrom<'resetParameterGroup'>>  = async params => {
  // undefined
    return this.client.resetParameterGroup(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateACL: (params: RawParamsFrom<'updateACL'>) => Promise<ReturnTypeFrom<'updateACL'>>  = async params => {
  // undefined
    return this.client.updateACL(params as any).promise();
  }

  updateCluster: (params: RawParamsFrom<'updateCluster'>) => Promise<ReturnTypeFrom<'updateCluster'>>  = async params => {
  // undefined
    return this.client.updateCluster(params as any).promise();
  }

  updateParameterGroup: (params: RawParamsFrom<'updateParameterGroup'>) => Promise<ReturnTypeFrom<'updateParameterGroup'>>  = async params => {
  // undefined
    return this.client.updateParameterGroup(params as any).promise();
  }

  updateSubnetGroup: (params: RawParamsFrom<'updateSubnetGroup'>) => Promise<ReturnTypeFrom<'updateSubnetGroup'>>  = async params => {
  // undefined
    return this.client.updateSubnetGroup(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }
  
  static fromClient(client: AWSMemoryDB): MemoryDB {
    return new MemoryDB(client) as any;
  }
  
  static client(options?: AWSMemoryDB.Types.ClientConfiguration): MemoryDB {
    return new MemoryDB(new AWSMemoryDB(options)) as any;
  }
}  
