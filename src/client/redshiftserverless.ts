import { Request, RedshiftServerless as AWSRedshiftServerless } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRedshiftServerless> = AWSRedshiftServerless[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRedshiftServerless> = AWSRedshiftServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRedshiftServerless[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRedshiftServerless, Extras> = AWSRedshiftServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRedshiftServerless> = AWSRedshiftServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class RedshiftServerless {
  private constructor(private readonly client: AWSRedshiftServerless) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'redshift-serverless' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listEndpointAccess","listNamespaces","listRecoveryPoints","listSnapshots","listUsageLimits","listWorkgroups"] as const;
  
  convertRecoveryPointToSnapshot: (params: RawParamsFrom<'convertRecoveryPointToSnapshot'>) => Promise<ReturnTypeFrom<'convertRecoveryPointToSnapshot'>>  = async params => {
  // undefined
    return this.client.convertRecoveryPointToSnapshot(params as any).promise();
  }

  createEndpointAccess: (params: RawParamsFrom<'createEndpointAccess'>) => Promise<ReturnTypeFrom<'createEndpointAccess'>>  = async params => {
  // undefined
    return this.client.createEndpointAccess(params as any).promise();
  }

  createNamespace: (params: RawParamsFrom<'createNamespace'>) => Promise<ReturnTypeFrom<'createNamespace'>>  = async params => {
  // undefined
    return this.client.createNamespace(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createUsageLimit: (params: RawParamsFrom<'createUsageLimit'>) => Promise<ReturnTypeFrom<'createUsageLimit'>>  = async params => {
  // undefined
    return this.client.createUsageLimit(params as any).promise();
  }

  createWorkgroup: (params: RawParamsFrom<'createWorkgroup'>) => Promise<ReturnTypeFrom<'createWorkgroup'>>  = async params => {
  // undefined
    return this.client.createWorkgroup(params as any).promise();
  }

  deleteEndpointAccess: (params: RawParamsFrom<'deleteEndpointAccess'>) => Promise<ReturnTypeFrom<'deleteEndpointAccess'>>  = async params => {
  // undefined
    return this.client.deleteEndpointAccess(params as any).promise();
  }

  deleteNamespace: (params: RawParamsFrom<'deleteNamespace'>) => Promise<ReturnTypeFrom<'deleteNamespace'>>  = async params => {
  // undefined
    return this.client.deleteNamespace(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteSnapshot: (params: RawParamsFrom<'deleteSnapshot'>) => Promise<ReturnTypeFrom<'deleteSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteSnapshot(params as any).promise();
  }

  deleteUsageLimit: (params: RawParamsFrom<'deleteUsageLimit'>) => Promise<ReturnTypeFrom<'deleteUsageLimit'>>  = async params => {
  // undefined
    return this.client.deleteUsageLimit(params as any).promise();
  }

  deleteWorkgroup: (params: RawParamsFrom<'deleteWorkgroup'>) => Promise<ReturnTypeFrom<'deleteWorkgroup'>>  = async params => {
  // undefined
    return this.client.deleteWorkgroup(params as any).promise();
  }

  getCredentials: (params: RawParamsFrom<'getCredentials'>) => Promise<ReturnTypeFrom<'getCredentials'>>  = async params => {
  // undefined
    return this.client.getCredentials(params as any).promise();
  }

  getEndpointAccess: (params: RawParamsFrom<'getEndpointAccess'>) => Promise<ReturnTypeFrom<'getEndpointAccess'>>  = async params => {
  // undefined
    return this.client.getEndpointAccess(params as any).promise();
  }

  getNamespace: (params: RawParamsFrom<'getNamespace'>) => Promise<ReturnTypeFrom<'getNamespace'>>  = async params => {
  // undefined
    return this.client.getNamespace(params as any).promise();
  }

  getRecoveryPoint: (params: RawParamsFrom<'getRecoveryPoint'>) => Promise<ReturnTypeFrom<'getRecoveryPoint'>>  = async params => {
  // undefined
    return this.client.getRecoveryPoint(params as any).promise();
  }

  getResourcePolicy: (params: RawParamsFrom<'getResourcePolicy'>) => Promise<ReturnTypeFrom<'getResourcePolicy'>>  = async params => {
  // undefined
    return this.client.getResourcePolicy(params as any).promise();
  }

  getSnapshot: (params: RawParamsFrom<'getSnapshot'>) => Promise<ReturnTypeFrom<'getSnapshot'>>  = async params => {
  // undefined
    return this.client.getSnapshot(params as any).promise();
  }

  getUsageLimit: (params: RawParamsFrom<'getUsageLimit'>) => Promise<ReturnTypeFrom<'getUsageLimit'>>  = async params => {
  // undefined
    return this.client.getUsageLimit(params as any).promise();
  }

  getWorkgroup: (params: RawParamsFrom<'getWorkgroup'>) => Promise<ReturnTypeFrom<'getWorkgroup'>>  = async params => {
  // undefined
    return this.client.getWorkgroup(params as any).promise();
  }

  async listEndpointAccess(params: { [K in keyof ParamsFrom<'listEndpointAccess', { next?: string, limit?: number }>]: ParamsFrom<'listEndpointAccess', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEndpointAccess'>]-?: ReturnTypeFrom<'listEndpointAccess'>[K]}['endpoints'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"endpoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listEndpointAccess({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listEndpointAccess' })).toString('base64') : undefined;
    const member = (Array.isArray(result.endpoints ?? []) ? (result.endpoints ?? []) : [result.endpoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listNamespaces(params: { [K in keyof ParamsFrom<'listNamespaces', { next?: string, limit?: number }>]: ParamsFrom<'listNamespaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listNamespaces'>]-?: ReturnTypeFrom<'listNamespaces'>[K]}['namespaces'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"namespaces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listNamespaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listNamespaces' })).toString('base64') : undefined;
    const member = (Array.isArray(result.namespaces ?? []) ? (result.namespaces ?? []) : [result.namespaces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRecoveryPoints(params: { [K in keyof ParamsFrom<'listRecoveryPoints', { next?: string, limit?: number }>]: ParamsFrom<'listRecoveryPoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRecoveryPoints'>]-?: ReturnTypeFrom<'listRecoveryPoints'>[K]}['recoveryPoints'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"recoveryPoints"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listRecoveryPoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listRecoveryPoints' })).toString('base64') : undefined;
    const member = (Array.isArray(result.recoveryPoints ?? []) ? (result.recoveryPoints ?? []) : [result.recoveryPoints]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSnapshots(params: { [K in keyof ParamsFrom<'listSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'listSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSnapshots'>]-?: ReturnTypeFrom<'listSnapshots'>[K]}['snapshots'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSnapshots' })).toString('base64') : undefined;
    const member = (Array.isArray(result.snapshots ?? []) ? (result.snapshots ?? []) : [result.snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  async listUsageLimits(params: { [K in keyof ParamsFrom<'listUsageLimits', { next?: string, limit?: number }>]: ParamsFrom<'listUsageLimits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsageLimits'>]-?: ReturnTypeFrom<'listUsageLimits'>[K]}['usageLimits'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"usageLimits"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listUsageLimits({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listUsageLimits' })).toString('base64') : undefined;
    const member = (Array.isArray(result.usageLimits ?? []) ? (result.usageLimits ?? []) : [result.usageLimits]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkgroups(params: { [K in keyof ParamsFrom<'listWorkgroups', { next?: string, limit?: number }>]: ParamsFrom<'listWorkgroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkgroups'>]-?: ReturnTypeFrom<'listWorkgroups'>[K]}['workgroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workgroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkgroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listWorkgroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.workgroups ?? []) ? (result.workgroups ?? []) : [result.workgroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  restoreFromRecoveryPoint: (params: RawParamsFrom<'restoreFromRecoveryPoint'>) => Promise<ReturnTypeFrom<'restoreFromRecoveryPoint'>>  = async params => {
  // undefined
    return this.client.restoreFromRecoveryPoint(params as any).promise();
  }

  restoreFromSnapshot: (params: RawParamsFrom<'restoreFromSnapshot'>) => Promise<ReturnTypeFrom<'restoreFromSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreFromSnapshot(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateEndpointAccess: (params: RawParamsFrom<'updateEndpointAccess'>) => Promise<ReturnTypeFrom<'updateEndpointAccess'>>  = async params => {
  // undefined
    return this.client.updateEndpointAccess(params as any).promise();
  }

  updateNamespace: (params: RawParamsFrom<'updateNamespace'>) => Promise<ReturnTypeFrom<'updateNamespace'>>  = async params => {
  // undefined
    return this.client.updateNamespace(params as any).promise();
  }

  updateSnapshot: (params: RawParamsFrom<'updateSnapshot'>) => Promise<ReturnTypeFrom<'updateSnapshot'>>  = async params => {
  // undefined
    return this.client.updateSnapshot(params as any).promise();
  }

  updateUsageLimit: (params: RawParamsFrom<'updateUsageLimit'>) => Promise<ReturnTypeFrom<'updateUsageLimit'>>  = async params => {
  // undefined
    return this.client.updateUsageLimit(params as any).promise();
  }

  updateWorkgroup: (params: RawParamsFrom<'updateWorkgroup'>) => Promise<ReturnTypeFrom<'updateWorkgroup'>>  = async params => {
  // undefined
    return this.client.updateWorkgroup(params as any).promise();
  }
  
  static fromClient(client: AWSRedshiftServerless): RedshiftServerless {
    return new RedshiftServerless(client) as any;
  }
  
  static client(options?: AWSRedshiftServerless.Types.ClientConfiguration): RedshiftServerless {
    return new RedshiftServerless(new AWSRedshiftServerless(options)) as any;
  }
}  
