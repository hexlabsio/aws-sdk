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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLakeFormation> = AWSLakeFormation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LakeFormation {
  private constructor(private readonly client: AWSLakeFormation) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'lakeformation' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["listDataCellsFilter","listLFTags","listPermissions","listResources","listTransactions"] as const;
  
  addLFTagsToResource: (params: RawParamsFrom<'addLFTagsToResource'>) => Promise<ReturnTypeFrom<'addLFTagsToResource'>>  = async params => {
  // undefined
    return this.client.addLFTagsToResource(params as any).promise();
  }

  assumeDecoratedRoleWithSAML: (params: RawParamsFrom<'assumeDecoratedRoleWithSAML'>) => Promise<ReturnTypeFrom<'assumeDecoratedRoleWithSAML'>>  = async params => {
  // undefined
    return this.client.assumeDecoratedRoleWithSAML(params as any).promise();
  }

  batchGrantPermissions: (params: RawParamsFrom<'batchGrantPermissions'>) => Promise<ReturnTypeFrom<'batchGrantPermissions'>>  = async params => {
  // undefined
    return this.client.batchGrantPermissions(params as any).promise();
  }

  batchRevokePermissions: (params: RawParamsFrom<'batchRevokePermissions'>) => Promise<ReturnTypeFrom<'batchRevokePermissions'>>  = async params => {
  // undefined
    return this.client.batchRevokePermissions(params as any).promise();
  }

  cancelTransaction: (params: RawParamsFrom<'cancelTransaction'>) => Promise<ReturnTypeFrom<'cancelTransaction'>>  = async params => {
  // undefined
    return this.client.cancelTransaction(params as any).promise();
  }

  commitTransaction: (params: RawParamsFrom<'commitTransaction'>) => Promise<ReturnTypeFrom<'commitTransaction'>>  = async params => {
  // undefined
    return this.client.commitTransaction(params as any).promise();
  }

  createDataCellsFilter: (params: RawParamsFrom<'createDataCellsFilter'>) => Promise<ReturnTypeFrom<'createDataCellsFilter'>>  = async params => {
  // undefined
    return this.client.createDataCellsFilter(params as any).promise();
  }

  createLFTag: (params: RawParamsFrom<'createLFTag'>) => Promise<ReturnTypeFrom<'createLFTag'>>  = async params => {
  // undefined
    return this.client.createLFTag(params as any).promise();
  }

  deleteDataCellsFilter: (params: RawParamsFrom<'deleteDataCellsFilter'>) => Promise<ReturnTypeFrom<'deleteDataCellsFilter'>>  = async params => {
  // undefined
    return this.client.deleteDataCellsFilter(params as any).promise();
  }

  deleteLFTag: (params: RawParamsFrom<'deleteLFTag'>) => Promise<ReturnTypeFrom<'deleteLFTag'>>  = async params => {
  // undefined
    return this.client.deleteLFTag(params as any).promise();
  }

  deleteObjectsOnCancel: (params: RawParamsFrom<'deleteObjectsOnCancel'>) => Promise<ReturnTypeFrom<'deleteObjectsOnCancel'>>  = async params => {
  // undefined
    return this.client.deleteObjectsOnCancel(params as any).promise();
  }

  deregisterResource: (params: RawParamsFrom<'deregisterResource'>) => Promise<ReturnTypeFrom<'deregisterResource'>>  = async params => {
  // undefined
    return this.client.deregisterResource(params as any).promise();
  }

  describeResource: (params: RawParamsFrom<'describeResource'>) => Promise<ReturnTypeFrom<'describeResource'>>  = async params => {
  // undefined
    return this.client.describeResource(params as any).promise();
  }

  describeTransaction: (params: RawParamsFrom<'describeTransaction'>) => Promise<ReturnTypeFrom<'describeTransaction'>>  = async params => {
  // undefined
    return this.client.describeTransaction(params as any).promise();
  }

  extendTransaction: (params: RawParamsFrom<'extendTransaction'>) => Promise<ReturnTypeFrom<'extendTransaction'>>  = async params => {
  // undefined
    return this.client.extendTransaction(params as any).promise();
  }

  getDataLakeSettings: (params: RawParamsFrom<'getDataLakeSettings'>) => Promise<ReturnTypeFrom<'getDataLakeSettings'>>  = async params => {
  // undefined
    return this.client.getDataLakeSettings(params as any).promise();
  }

  getEffectivePermissionsForPath: (params: RawParamsFrom<'getEffectivePermissionsForPath'>) => Promise<ReturnTypeFrom<'getEffectivePermissionsForPath'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getEffectivePermissionsForPath(params as any).promise();
  }

  getLFTag: (params: RawParamsFrom<'getLFTag'>) => Promise<ReturnTypeFrom<'getLFTag'>>  = async params => {
  // undefined
    return this.client.getLFTag(params as any).promise();
  }

  getQueryState: (params: RawParamsFrom<'getQueryState'>) => Promise<ReturnTypeFrom<'getQueryState'>>  = async params => {
  // undefined
    return this.client.getQueryState(params as any).promise();
  }

  getQueryStatistics: (params: RawParamsFrom<'getQueryStatistics'>) => Promise<ReturnTypeFrom<'getQueryStatistics'>>  = async params => {
  // undefined
    return this.client.getQueryStatistics(params as any).promise();
  }

  getResourceLFTags: (params: RawParamsFrom<'getResourceLFTags'>) => Promise<ReturnTypeFrom<'getResourceLFTags'>>  = async params => {
  // undefined
    return this.client.getResourceLFTags(params as any).promise();
  }

  getTableObjects: (params: RawParamsFrom<'getTableObjects'>) => Promise<ReturnTypeFrom<'getTableObjects'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTableObjects(params as any).promise();
  }

  getTemporaryGluePartitionCredentials: (params: RawParamsFrom<'getTemporaryGluePartitionCredentials'>) => Promise<ReturnTypeFrom<'getTemporaryGluePartitionCredentials'>>  = async params => {
  // undefined
    return this.client.getTemporaryGluePartitionCredentials(params as any).promise();
  }

  getTemporaryGlueTableCredentials: (params: RawParamsFrom<'getTemporaryGlueTableCredentials'>) => Promise<ReturnTypeFrom<'getTemporaryGlueTableCredentials'>>  = async params => {
  // undefined
    return this.client.getTemporaryGlueTableCredentials(params as any).promise();
  }

  getWorkUnitResults: (params: RawParamsFrom<'getWorkUnitResults'>) => Promise<ReturnTypeFrom<'getWorkUnitResults'>>  = async params => {
  // undefined
    return this.client.getWorkUnitResults(params as any).promise();
  }

  async getWorkUnits(params: { [K in keyof ParamsFrom<'getWorkUnits', { next?: string, limit?: number }>]: ParamsFrom<'getWorkUnits', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getWorkUnits'>]-?: ReturnTypeFrom<'getWorkUnits'>[K]}['WorkUnitRanges'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken","resultKey":"WorkUnitRanges"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { PageSize: limit } : {};
    const result = await this.client.getWorkUnits({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.WorkUnitRanges ?? []) ? (result.WorkUnitRanges ?? []) : [result.WorkUnitRanges]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  grantPermissions: (params: RawParamsFrom<'grantPermissions'>) => Promise<ReturnTypeFrom<'grantPermissions'>>  = async params => {
  // undefined
    return this.client.grantPermissions(params as any).promise();
  }

  async listDataCellsFilter(params: { [K in keyof ParamsFrom<'listDataCellsFilter', { next?: string, limit?: number }>]: ParamsFrom<'listDataCellsFilter', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataCellsFilter'>]-?: ReturnTypeFrom<'listDataCellsFilter'>[K]}['DataCellsFilters'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataCellsFilters"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataCellsFilter({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.DataCellsFilters ?? []) ? (result.DataCellsFilters ?? []) : [result.DataCellsFilters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listLFTags(params: { [K in keyof ParamsFrom<'listLFTags', { next?: string, limit?: number }>]: ParamsFrom<'listLFTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLFTags'>]-?: ReturnTypeFrom<'listLFTags'>[K]}['LFTags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"LFTags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLFTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.LFTags ?? []) ? (result.LFTags ?? []) : [result.LFTags]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listPermissions: (params: RawParamsFrom<'listPermissions'>) => Promise<ReturnTypeFrom<'listPermissions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPermissions(params as any).promise();
  }

  listResources: (params: RawParamsFrom<'listResources'>) => Promise<ReturnTypeFrom<'listResources'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listResources(params as any).promise();
  }

  listTableStorageOptimizers: (params: RawParamsFrom<'listTableStorageOptimizers'>) => Promise<ReturnTypeFrom<'listTableStorageOptimizers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTableStorageOptimizers(params as any).promise();
  }

  listTransactions: (params: RawParamsFrom<'listTransactions'>) => Promise<ReturnTypeFrom<'listTransactions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTransactions(params as any).promise();
  }

  putDataLakeSettings: (params: RawParamsFrom<'putDataLakeSettings'>) => Promise<ReturnTypeFrom<'putDataLakeSettings'>>  = async params => {
  // undefined
    return this.client.putDataLakeSettings(params as any).promise();
  }

  registerResource: (params: RawParamsFrom<'registerResource'>) => Promise<ReturnTypeFrom<'registerResource'>>  = async params => {
  // undefined
    return this.client.registerResource(params as any).promise();
  }

  removeLFTagsFromResource: (params: RawParamsFrom<'removeLFTagsFromResource'>) => Promise<ReturnTypeFrom<'removeLFTagsFromResource'>>  = async params => {
  // undefined
    return this.client.removeLFTagsFromResource(params as any).promise();
  }

  revokePermissions: (params: RawParamsFrom<'revokePermissions'>) => Promise<ReturnTypeFrom<'revokePermissions'>>  = async params => {
  // undefined
    return this.client.revokePermissions(params as any).promise();
  }

  async searchDatabasesByLFTags(params: { [K in keyof ParamsFrom<'searchDatabasesByLFTags', { next?: string, limit?: number }>]: ParamsFrom<'searchDatabasesByLFTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchDatabasesByLFTags'>]-?: ReturnTypeFrom<'searchDatabasesByLFTags'>[K]}['DatabaseList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatabaseList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchDatabasesByLFTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.DatabaseList ?? []) ? (result.DatabaseList ?? []) : [result.DatabaseList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async searchTablesByLFTags(params: { [K in keyof ParamsFrom<'searchTablesByLFTags', { next?: string, limit?: number }>]: ParamsFrom<'searchTablesByLFTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchTablesByLFTags'>]-?: ReturnTypeFrom<'searchTablesByLFTags'>[K]}['TableList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TableList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.searchTablesByLFTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.TableList ?? []) ? (result.TableList ?? []) : [result.TableList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  startQueryPlanning: (params: RawParamsFrom<'startQueryPlanning'>) => Promise<ReturnTypeFrom<'startQueryPlanning'>>  = async params => {
  // undefined
    return this.client.startQueryPlanning(params as any).promise();
  }

  startTransaction: (params: RawParamsFrom<'startTransaction'>) => Promise<ReturnTypeFrom<'startTransaction'>>  = async params => {
  // undefined
    return this.client.startTransaction(params as any).promise();
  }

  updateLFTag: (params: RawParamsFrom<'updateLFTag'>) => Promise<ReturnTypeFrom<'updateLFTag'>>  = async params => {
  // undefined
    return this.client.updateLFTag(params as any).promise();
  }

  updateResource: (params: RawParamsFrom<'updateResource'>) => Promise<ReturnTypeFrom<'updateResource'>>  = async params => {
  // undefined
    return this.client.updateResource(params as any).promise();
  }

  updateTableObjects: (params: RawParamsFrom<'updateTableObjects'>) => Promise<ReturnTypeFrom<'updateTableObjects'>>  = async params => {
  // undefined
    return this.client.updateTableObjects(params as any).promise();
  }

  updateTableStorageOptimizer: (params: RawParamsFrom<'updateTableStorageOptimizer'>) => Promise<ReturnTypeFrom<'updateTableStorageOptimizer'>>  = async params => {
  // undefined
    return this.client.updateTableStorageOptimizer(params as any).promise();
  }
  
  static fromClient(client: AWSLakeFormation): LakeFormation {
    return new LakeFormation(client) as any;
  }
  
  static client(options?: AWSLakeFormation.Types.ClientConfiguration): LakeFormation {
    return new LakeFormation(new AWSLakeFormation(options)) as any;
  }
}  
