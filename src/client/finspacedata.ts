import { Request, Finspacedata as AWSFinspacedata } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSFinspacedata> = AWSFinspacedata[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSFinspacedata> = AWSFinspacedata[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSFinspacedata[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSFinspacedata, Extras> = AWSFinspacedata[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSFinspacedata> = AWSFinspacedata[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Finspacedata {
  private constructor(private readonly client: AWSFinspacedata) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'finspace-api' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listDatasets"] as const;
  
  associateUserToPermissionGroup: (params: RawParamsFrom<'associateUserToPermissionGroup'>) => Promise<ReturnTypeFrom<'associateUserToPermissionGroup'>>  = async params => {
  // undefined
    return this.client.associateUserToPermissionGroup(params as any).promise();
  }

  createChangeset: (params: RawParamsFrom<'createChangeset'>) => Promise<ReturnTypeFrom<'createChangeset'>>  = async params => {
  // undefined
    return this.client.createChangeset(params as any).promise();
  }

  createDataView: (params: RawParamsFrom<'createDataView'>) => Promise<ReturnTypeFrom<'createDataView'>>  = async params => {
  // undefined
    return this.client.createDataView(params as any).promise();
  }

  createDataset: (params: RawParamsFrom<'createDataset'>) => Promise<ReturnTypeFrom<'createDataset'>>  = async params => {
  // undefined
    return this.client.createDataset(params as any).promise();
  }

  createPermissionGroup: (params: RawParamsFrom<'createPermissionGroup'>) => Promise<ReturnTypeFrom<'createPermissionGroup'>>  = async params => {
  // undefined
    return this.client.createPermissionGroup(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  deletePermissionGroup: (params: RawParamsFrom<'deletePermissionGroup'>) => Promise<ReturnTypeFrom<'deletePermissionGroup'>>  = async params => {
  // undefined
    return this.client.deletePermissionGroup(params as any).promise();
  }

  disableUser: (params: RawParamsFrom<'disableUser'>) => Promise<ReturnTypeFrom<'disableUser'>>  = async params => {
  // undefined
    return this.client.disableUser(params as any).promise();
  }

  disassociateUserFromPermissionGroup: (params: RawParamsFrom<'disassociateUserFromPermissionGroup'>) => Promise<ReturnTypeFrom<'disassociateUserFromPermissionGroup'>>  = async params => {
  // undefined
    return this.client.disassociateUserFromPermissionGroup(params as any).promise();
  }

  enableUser: (params: RawParamsFrom<'enableUser'>) => Promise<ReturnTypeFrom<'enableUser'>>  = async params => {
  // undefined
    return this.client.enableUser(params as any).promise();
  }

  getChangeset: (params: RawParamsFrom<'getChangeset'>) => Promise<ReturnTypeFrom<'getChangeset'>>  = async params => {
  // undefined
    return this.client.getChangeset(params as any).promise();
  }

  getDataView: (params: RawParamsFrom<'getDataView'>) => Promise<ReturnTypeFrom<'getDataView'>>  = async params => {
  // undefined
    return this.client.getDataView(params as any).promise();
  }

  getDataset: (params: RawParamsFrom<'getDataset'>) => Promise<ReturnTypeFrom<'getDataset'>>  = async params => {
  // undefined
    return this.client.getDataset(params as any).promise();
  }

  getExternalDataViewAccessDetails: (params: RawParamsFrom<'getExternalDataViewAccessDetails'>) => Promise<ReturnTypeFrom<'getExternalDataViewAccessDetails'>>  = async params => {
  // undefined
    return this.client.getExternalDataViewAccessDetails(params as any).promise();
  }

  getPermissionGroup: (params: RawParamsFrom<'getPermissionGroup'>) => Promise<ReturnTypeFrom<'getPermissionGroup'>>  = async params => {
  // undefined
    return this.client.getPermissionGroup(params as any).promise();
  }

  getProgrammaticAccessCredentials: (params: RawParamsFrom<'getProgrammaticAccessCredentials'>) => Promise<ReturnTypeFrom<'getProgrammaticAccessCredentials'>>  = async params => {
  // undefined
    return this.client.getProgrammaticAccessCredentials(params as any).promise();
  }

  getUser: (params: RawParamsFrom<'getUser'>) => Promise<ReturnTypeFrom<'getUser'>>  = async params => {
  // undefined
    return this.client.getUser(params as any).promise();
  }

  getWorkingLocation: (params: RawParamsFrom<'getWorkingLocation'>) => Promise<ReturnTypeFrom<'getWorkingLocation'>>  = async params => {
  // undefined
    return this.client.getWorkingLocation(params as any).promise();
  }

  async listChangesets(params: { [K in keyof ParamsFrom<'listChangesets', { next?: string, limit?: number }>]: ParamsFrom<'listChangesets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listChangesets'>]-?: ReturnTypeFrom<'listChangesets'>[K]}['changesets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"changesets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listChangesets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listChangesets' })).toString('base64');
    const member = (Array.isArray(result.changesets ?? []) ? (result.changesets ?? []) : [result.changesets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataViews(params: { [K in keyof ParamsFrom<'listDataViews', { next?: string, limit?: number }>]: ParamsFrom<'listDataViews', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataViews'>]-?: ReturnTypeFrom<'listDataViews'>[K]}['dataViews'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dataViews"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDataViews({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDataViews' })).toString('base64');
    const member = (Array.isArray(result.dataViews ?? []) ? (result.dataViews ?? []) : [result.dataViews]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasets(params: { [K in keyof ParamsFrom<'listDatasets', { next?: string, limit?: number }>]: ParamsFrom<'listDatasets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['datasets'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listDatasets' })).toString('base64');
    const member = (Array.isArray(result.datasets ?? []) ? (result.datasets ?? []) : [result.datasets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionGroups(params: { [K in keyof ParamsFrom<'listPermissionGroups', { next?: string, limit?: number }>]: ParamsFrom<'listPermissionGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPermissionGroups'>]-?: ReturnTypeFrom<'listPermissionGroups'>[K]}['permissionGroups'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"permissionGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPermissionGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listPermissionGroups' })).toString('base64');
    const member = (Array.isArray(result.permissionGroups ?? []) ? (result.permissionGroups ?? []) : [result.permissionGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listPermissionGroupsByUser: (params: RawParamsFrom<'listPermissionGroupsByUser'>) => Promise<ReturnTypeFrom<'listPermissionGroupsByUser'>>  = async params => {
  // undefined
    return this.client.listPermissionGroupsByUser(params as any).promise();
  }

  async listUsers(params: { [K in keyof ParamsFrom<'listUsers', { next?: string, limit?: number }>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['users'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listUsers' })).toString('base64');
    const member = (Array.isArray(result.users ?? []) ? (result.users ?? []) : [result.users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listUsersByPermissionGroup: (params: RawParamsFrom<'listUsersByPermissionGroup'>) => Promise<ReturnTypeFrom<'listUsersByPermissionGroup'>>  = async params => {
  // undefined
    return this.client.listUsersByPermissionGroup(params as any).promise();
  }

  resetUserPassword: (params: RawParamsFrom<'resetUserPassword'>) => Promise<ReturnTypeFrom<'resetUserPassword'>>  = async params => {
  // undefined
    return this.client.resetUserPassword(params as any).promise();
  }

  updateChangeset: (params: RawParamsFrom<'updateChangeset'>) => Promise<ReturnTypeFrom<'updateChangeset'>>  = async params => {
  // undefined
    return this.client.updateChangeset(params as any).promise();
  }

  updateDataset: (params: RawParamsFrom<'updateDataset'>) => Promise<ReturnTypeFrom<'updateDataset'>>  = async params => {
  // undefined
    return this.client.updateDataset(params as any).promise();
  }

  updatePermissionGroup: (params: RawParamsFrom<'updatePermissionGroup'>) => Promise<ReturnTypeFrom<'updatePermissionGroup'>>  = async params => {
  // undefined
    return this.client.updatePermissionGroup(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }
  
  static fromClient(client: AWSFinspacedata): Finspacedata {
    return new Finspacedata(client) as any;
  }
  
  static client(options?: AWSFinspacedata.Types.ClientConfiguration): Finspacedata {
    return new Finspacedata(new AWSFinspacedata(options)) as any;
  }
}  
