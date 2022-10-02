import { Request, LakeFormation as AWSLakeFormation } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLakeFormation> = AWSLakeFormation[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLakeFormation> = AWSLakeFormation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLakeFormation[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLakeFormation, Extras> = AWSLakeFormation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'lakeformation';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["listDataCellsFilter","listLFTags","listPermissions","listResources","listTransactions"];
    
  addLFTagsToResource: FunctionTypeFrom<'addLFTagsToResource'>;

  assumeDecoratedRoleWithSAML: FunctionTypeFrom<'assumeDecoratedRoleWithSAML'>;

  batchGrantPermissions: FunctionTypeFrom<'batchGrantPermissions'>;

  batchRevokePermissions: FunctionTypeFrom<'batchRevokePermissions'>;

  cancelTransaction: FunctionTypeFrom<'cancelTransaction'>;

  commitTransaction: FunctionTypeFrom<'commitTransaction'>;

  createDataCellsFilter: FunctionTypeFrom<'createDataCellsFilter'>;

  createLFTag: FunctionTypeFrom<'createLFTag'>;

  deleteDataCellsFilter: FunctionTypeFrom<'deleteDataCellsFilter'>;

  deleteLFTag: FunctionTypeFrom<'deleteLFTag'>;

  deleteObjectsOnCancel: FunctionTypeFrom<'deleteObjectsOnCancel'>;

  deregisterResource: FunctionTypeFrom<'deregisterResource'>;

  describeResource: FunctionTypeFrom<'describeResource'>;

  describeTransaction: FunctionTypeFrom<'describeTransaction'>;

  extendTransaction: FunctionTypeFrom<'extendTransaction'>;

  getDataLakeSettings: FunctionTypeFrom<'getDataLakeSettings'>;

  getEffectivePermissionsForPath: FunctionTypeFrom<'getEffectivePermissionsForPath'>;

  getLFTag: FunctionTypeFrom<'getLFTag'>;

  getQueryState: FunctionTypeFrom<'getQueryState'>;

  getQueryStatistics: FunctionTypeFrom<'getQueryStatistics'>;

  getResourceLFTags: FunctionTypeFrom<'getResourceLFTags'>;

  getTableObjects: FunctionTypeFrom<'getTableObjects'>;

  getTemporaryGluePartitionCredentials: FunctionTypeFrom<'getTemporaryGluePartitionCredentials'>;

  getTemporaryGlueTableCredentials: FunctionTypeFrom<'getTemporaryGlueTableCredentials'>;

  getWorkUnitResults: FunctionTypeFrom<'getWorkUnitResults'>;

  getWorkUnits(params: { [K in keyof Omit<ParamsFrom<'getWorkUnits', { next?: string, limit?: number }>, 'NextToken' | 'PageSize'>]: ParamsFrom<'getWorkUnits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getWorkUnits'>]-?: ReturnTypeFrom<'getWorkUnits'>[K]}['WorkUnitRanges'] }>
  ;

  grantPermissions: FunctionTypeFrom<'grantPermissions'>;

  listDataCellsFilter(params: { [K in keyof Omit<ParamsFrom<'listDataCellsFilter', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDataCellsFilter', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataCellsFilter'>]-?: ReturnTypeFrom<'listDataCellsFilter'>[K]}['DataCellsFilters'] }>
  listDataCellsFilter(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataCellsFilter'>]-?: ReturnTypeFrom<'listDataCellsFilter'>[K]}['DataCellsFilters'] }>;

  listLFTags(params: { [K in keyof Omit<ParamsFrom<'listLFTags', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listLFTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLFTags'>]-?: ReturnTypeFrom<'listLFTags'>[K]}['LFTags'] }>
  listLFTags(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLFTags'>]-?: ReturnTypeFrom<'listLFTags'>[K]}['LFTags'] }>;

  listPermissions: FunctionTypeFrom<'listPermissions'>;

  listResources: FunctionTypeFrom<'listResources'>;

  listTableStorageOptimizers: FunctionTypeFrom<'listTableStorageOptimizers'>;

  listTransactions: FunctionTypeFrom<'listTransactions'>;

  putDataLakeSettings: FunctionTypeFrom<'putDataLakeSettings'>;

  registerResource: FunctionTypeFrom<'registerResource'>;

  removeLFTagsFromResource: FunctionTypeFrom<'removeLFTagsFromResource'>;

  revokePermissions: FunctionTypeFrom<'revokePermissions'>;

  searchDatabasesByLFTags(params: { [K in keyof Omit<ParamsFrom<'searchDatabasesByLFTags', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchDatabasesByLFTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchDatabasesByLFTags'>]-?: ReturnTypeFrom<'searchDatabasesByLFTags'>[K]}['DatabaseList'] }>
  ;

  searchTablesByLFTags(params: { [K in keyof Omit<ParamsFrom<'searchTablesByLFTags', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'searchTablesByLFTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchTablesByLFTags'>]-?: ReturnTypeFrom<'searchTablesByLFTags'>[K]}['TableList'] }>
  ;

  startQueryPlanning: FunctionTypeFrom<'startQueryPlanning'>;

  startTransaction: FunctionTypeFrom<'startTransaction'>;

  updateLFTag: FunctionTypeFrom<'updateLFTag'>;

  updateResource: FunctionTypeFrom<'updateResource'>;

  updateTableObjects: FunctionTypeFrom<'updateTableObjects'>;

  updateTableStorageOptimizer: FunctionTypeFrom<'updateTableStorageOptimizer'>
}
 
export class LakeFormation implements ClientType {
  private constructor(private readonly client: AWSLakeFormation) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lakeformation';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["listDataCellsFilter","listLFTags","listPermissions","listResources","listTransactions"] as const;
  
  async addLFTagsToResource(...args: any): Promise<any> {
  // undefined
    return this.client.addLFTagsToResource(...args).promise()
  }

  async assumeDecoratedRoleWithSAML(...args: any): Promise<any> {
  // undefined
    return this.client.assumeDecoratedRoleWithSAML(...args).promise()
  }

  async batchGrantPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.batchGrantPermissions(...args).promise()
  }

  async batchRevokePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.batchRevokePermissions(...args).promise()
  }

  async cancelTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.cancelTransaction(...args).promise()
  }

  async commitTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.commitTransaction(...args).promise()
  }

  async createDataCellsFilter(...args: any): Promise<any> {
  // undefined
    return this.client.createDataCellsFilter(...args).promise()
  }

  async createLFTag(...args: any): Promise<any> {
  // undefined
    return this.client.createLFTag(...args).promise()
  }

  async deleteDataCellsFilter(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataCellsFilter(...args).promise()
  }

  async deleteLFTag(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLFTag(...args).promise()
  }

  async deleteObjectsOnCancel(...args: any): Promise<any> {
  // undefined
    return this.client.deleteObjectsOnCancel(...args).promise()
  }

  async deregisterResource(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterResource(...args).promise()
  }

  async describeResource(...args: any): Promise<any> {
  // undefined
    return this.client.describeResource(...args).promise()
  }

  async describeTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.describeTransaction(...args).promise()
  }

  async extendTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.extendTransaction(...args).promise()
  }

  async getDataLakeSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getDataLakeSettings(...args).promise()
  }

  async getEffectivePermissionsForPath(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getEffectivePermissionsForPath(...args).promise()
  }

  async getLFTag(...args: any): Promise<any> {
  // undefined
    return this.client.getLFTag(...args).promise()
  }

  async getQueryState(...args: any): Promise<any> {
  // undefined
    return this.client.getQueryState(...args).promise()
  }

  async getQueryStatistics(...args: any): Promise<any> {
  // undefined
    return this.client.getQueryStatistics(...args).promise()
  }

  async getResourceLFTags(...args: any): Promise<any> {
  // undefined
    return this.client.getResourceLFTags(...args).promise()
  }

  async getTableObjects(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTableObjects(...args).promise()
  }

  async getTemporaryGluePartitionCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.getTemporaryGluePartitionCredentials(...args).promise()
  }

  async getTemporaryGlueTableCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.getTemporaryGlueTableCredentials(...args).promise()
  }

  async getWorkUnitResults(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkUnitResults(...args).promise()
  }

  async getWorkUnits(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken","resultKey":"WorkUnitRanges"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { PageSize: limit } : {};
    const result = await this.client.getWorkUnits(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.WorkUnitRanges ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async grantPermissions(...args: any): Promise<any> {
  // undefined
    return this.client.grantPermissions(...args).promise()
  }

  async listDataCellsFilter(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataCellsFilters"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataCellsFilter(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DataCellsFilters ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLFTags(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LFTags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLFTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LFTags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPermissions(...args).promise()
  }

  async listResources(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listResources(...args).promise()
  }

  async listTableStorageOptimizers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTableStorageOptimizers(...args).promise()
  }

  async listTransactions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTransactions(...args).promise()
  }

  async putDataLakeSettings(...args: any): Promise<any> {
  // undefined
    return this.client.putDataLakeSettings(...args).promise()
  }

  async registerResource(...args: any): Promise<any> {
  // undefined
    return this.client.registerResource(...args).promise()
  }

  async removeLFTagsFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.removeLFTagsFromResource(...args).promise()
  }

  async revokePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.revokePermissions(...args).promise()
  }

  async searchDatabasesByLFTags(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatabaseList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchDatabasesByLFTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DatabaseList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchTablesByLFTags(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TableList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchTablesByLFTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TableList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startQueryPlanning(...args: any): Promise<any> {
  // undefined
    return this.client.startQueryPlanning(...args).promise()
  }

  async startTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.startTransaction(...args).promise()
  }

  async updateLFTag(...args: any): Promise<any> {
  // undefined
    return this.client.updateLFTag(...args).promise()
  }

  async updateResource(...args: any): Promise<any> {
  // undefined
    return this.client.updateResource(...args).promise()
  }

  async updateTableObjects(...args: any): Promise<any> {
  // undefined
    return this.client.updateTableObjects(...args).promise()
  }

  async updateTableStorageOptimizer(...args: any): Promise<any> {
  // undefined
    return this.client.updateTableStorageOptimizer(...args).promise()
  }
  
  static fromClient(client: AWSLakeFormation): ClientType {
    return new LakeFormation(client) as any;
  }
  
  static client(options?: AWSLakeFormation.Types.ClientConfiguration): ClientType {
    return new LakeFormation(new AWSLakeFormation(options)) as any;
  }
}  
