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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'finspace-api';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listDatasets"];
    
  associateUserToPermissionGroup: FunctionTypeFrom<'associateUserToPermissionGroup'>;

  createChangeset: FunctionTypeFrom<'createChangeset'>;

  createDataView: FunctionTypeFrom<'createDataView'>;

  createDataset: FunctionTypeFrom<'createDataset'>;

  createPermissionGroup: FunctionTypeFrom<'createPermissionGroup'>;

  createUser: FunctionTypeFrom<'createUser'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  deletePermissionGroup: FunctionTypeFrom<'deletePermissionGroup'>;

  disableUser: FunctionTypeFrom<'disableUser'>;

  disassociateUserFromPermissionGroup: FunctionTypeFrom<'disassociateUserFromPermissionGroup'>;

  enableUser: FunctionTypeFrom<'enableUser'>;

  getChangeset: FunctionTypeFrom<'getChangeset'>;

  getDataView: FunctionTypeFrom<'getDataView'>;

  getDataset: FunctionTypeFrom<'getDataset'>;

  getExternalDataViewAccessDetails: FunctionTypeFrom<'getExternalDataViewAccessDetails'>;

  getPermissionGroup: FunctionTypeFrom<'getPermissionGroup'>;

  getProgrammaticAccessCredentials: FunctionTypeFrom<'getProgrammaticAccessCredentials'>;

  getUser: FunctionTypeFrom<'getUser'>;

  getWorkingLocation: FunctionTypeFrom<'getWorkingLocation'>;

  listChangesets(params: { [K in keyof Omit<ParamsFrom<'listChangesets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listChangesets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listChangesets'>]-?: ReturnTypeFrom<'listChangesets'>[K]}['changesets'] }>
  ;

  listDataViews(params: { [K in keyof Omit<ParamsFrom<'listDataViews', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDataViews', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataViews'>]-?: ReturnTypeFrom<'listDataViews'>[K]}['dataViews'] }>
  ;

  listDatasets(params: { [K in keyof Omit<ParamsFrom<'listDatasets', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listDatasets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['datasets'] }>
  listDatasets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasets'>]-?: ReturnTypeFrom<'listDatasets'>[K]}['datasets'] }>;

  listPermissionGroups(params: { [K in keyof Omit<ParamsFrom<'listPermissionGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPermissionGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPermissionGroups'>]-?: ReturnTypeFrom<'listPermissionGroups'>[K]}['permissionGroups'] }>
  ;

  listPermissionGroupsByUser: FunctionTypeFrom<'listPermissionGroupsByUser'>;

  listUsers(params: { [K in keyof Omit<ParamsFrom<'listUsers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['users'] }>
  ;

  listUsersByPermissionGroup: FunctionTypeFrom<'listUsersByPermissionGroup'>;

  resetUserPassword: FunctionTypeFrom<'resetUserPassword'>;

  updateChangeset: FunctionTypeFrom<'updateChangeset'>;

  updateDataset: FunctionTypeFrom<'updateDataset'>;

  updatePermissionGroup: FunctionTypeFrom<'updatePermissionGroup'>;

  updateUser: FunctionTypeFrom<'updateUser'>
}
 
export class Finspacedata implements ClientType {
  private constructor(private readonly client: AWSFinspacedata) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'finspace-api';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listDatasets"] as const;
  
  async associateUserToPermissionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.associateUserToPermissionGroup(...args).promise()
  }

  async createChangeset(...args: any): Promise<any> {
  // undefined
    return this.client.createChangeset(...args).promise()
  }

  async createDataView(...args: any): Promise<any> {
  // undefined
    return this.client.createDataView(...args).promise()
  }

  async createDataset(...args: any): Promise<any> {
  // undefined
    return this.client.createDataset(...args).promise()
  }

  async createPermissionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createPermissionGroup(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async deletePermissionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deletePermissionGroup(...args).promise()
  }

  async disableUser(...args: any): Promise<any> {
  // undefined
    return this.client.disableUser(...args).promise()
  }

  async disassociateUserFromPermissionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateUserFromPermissionGroup(...args).promise()
  }

  async enableUser(...args: any): Promise<any> {
  // undefined
    return this.client.enableUser(...args).promise()
  }

  async getChangeset(...args: any): Promise<any> {
  // undefined
    return this.client.getChangeset(...args).promise()
  }

  async getDataView(...args: any): Promise<any> {
  // undefined
    return this.client.getDataView(...args).promise()
  }

  async getDataset(...args: any): Promise<any> {
  // undefined
    return this.client.getDataset(...args).promise()
  }

  async getExternalDataViewAccessDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getExternalDataViewAccessDetails(...args).promise()
  }

  async getPermissionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getPermissionGroup(...args).promise()
  }

  async getProgrammaticAccessCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.getProgrammaticAccessCredentials(...args).promise()
  }

  async getUser(...args: any): Promise<any> {
  // undefined
    return this.client.getUser(...args).promise()
  }

  async getWorkingLocation(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkingLocation(...args).promise()
  }

  async listChangesets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"changesets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listChangesets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.changesets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataViews(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"dataViews"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDataViews(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.dataViews ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasets(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"datasets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listDatasets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.datasets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"permissionGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPermissionGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.permissionGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionGroupsByUser(...args: any): Promise<any> {
  // undefined
    return this.client.listPermissionGroupsByUser(...args).promise()
  }

  async listUsers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsersByPermissionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.listUsersByPermissionGroup(...args).promise()
  }

  async resetUserPassword(...args: any): Promise<any> {
  // undefined
    return this.client.resetUserPassword(...args).promise()
  }

  async updateChangeset(...args: any): Promise<any> {
  // undefined
    return this.client.updateChangeset(...args).promise()
  }

  async updateDataset(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataset(...args).promise()
  }

  async updatePermissionGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updatePermissionGroup(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }
  
  static fromClient(client: AWSFinspacedata): ClientType {
    return new Finspacedata(client) as any;
  }
  
  static client(options?: AWSFinspacedata.Types.ClientConfiguration): ClientType {
    return new Finspacedata(new AWSFinspacedata(options)) as any;
  }
}  
