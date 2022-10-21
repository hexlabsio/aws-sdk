import { Request, DynamoDB as AWSDynamoDB } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDynamoDB> = AWSDynamoDB[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDynamoDB> = AWSDynamoDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDynamoDB[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDynamoDB, Extras> = AWSDynamoDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDynamoDB> = AWSDynamoDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DynamoDB {
  private constructor(private readonly client: AWSDynamoDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dynamodb' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["listContributorInsights","listExports","listImports","listTables"] as const;
  
  batchExecuteStatement: (params: RawParamsFrom<'batchExecuteStatement'>) => Promise<ReturnTypeFrom<'batchExecuteStatement'>>  = async params => {
  // undefined
    return this.client.batchExecuteStatement(params as any).promise();
  }

  batchGetItem: (params: RawParamsFrom<'batchGetItem'>) => Promise<ReturnTypeFrom<'batchGetItem'>>  = async params => {
  // {"inputToken":"RequestItems","outputToken":"UnprocessedKeys"}
    return this.client.batchGetItem(params as any).promise();
  }

  batchWriteItem: (params: RawParamsFrom<'batchWriteItem'>) => Promise<ReturnTypeFrom<'batchWriteItem'>>  = async params => {
  // undefined
    return this.client.batchWriteItem(params as any).promise();
  }

  createBackup: (params: RawParamsFrom<'createBackup'>) => Promise<ReturnTypeFrom<'createBackup'>>  = async params => {
  // undefined
    return this.client.createBackup(params as any).promise();
  }

  createGlobalTable: (params: RawParamsFrom<'createGlobalTable'>) => Promise<ReturnTypeFrom<'createGlobalTable'>>  = async params => {
  // undefined
    return this.client.createGlobalTable(params as any).promise();
  }

  createTable: (params: RawParamsFrom<'createTable'>) => Promise<ReturnTypeFrom<'createTable'>>  = async params => {
  // undefined
    return this.client.createTable(params as any).promise();
  }

  deleteBackup: (params: RawParamsFrom<'deleteBackup'>) => Promise<ReturnTypeFrom<'deleteBackup'>>  = async params => {
  // undefined
    return this.client.deleteBackup(params as any).promise();
  }

  deleteItem: (params: RawParamsFrom<'deleteItem'>) => Promise<ReturnTypeFrom<'deleteItem'>>  = async params => {
  // undefined
    return this.client.deleteItem(params as any).promise();
  }

  deleteTable: (params: RawParamsFrom<'deleteTable'>) => Promise<ReturnTypeFrom<'deleteTable'>>  = async params => {
  // undefined
    return this.client.deleteTable(params as any).promise();
  }

  describeBackup: (params: RawParamsFrom<'describeBackup'>) => Promise<ReturnTypeFrom<'describeBackup'>>  = async params => {
  // undefined
    return this.client.describeBackup(params as any).promise();
  }

  describeContinuousBackups: (params: RawParamsFrom<'describeContinuousBackups'>) => Promise<ReturnTypeFrom<'describeContinuousBackups'>>  = async params => {
  // undefined
    return this.client.describeContinuousBackups(params as any).promise();
  }

  describeContributorInsights: (params: RawParamsFrom<'describeContributorInsights'>) => Promise<ReturnTypeFrom<'describeContributorInsights'>>  = async params => {
  // undefined
    return this.client.describeContributorInsights(params as any).promise();
  }

  describeEndpoints: (params: RawParamsFrom<'describeEndpoints'>) => Promise<ReturnTypeFrom<'describeEndpoints'>>  = async params => {
  // undefined
    return this.client.describeEndpoints(params as any).promise();
  }

  describeExport: (params: RawParamsFrom<'describeExport'>) => Promise<ReturnTypeFrom<'describeExport'>>  = async params => {
  // undefined
    return this.client.describeExport(params as any).promise();
  }

  describeGlobalTable: (params: RawParamsFrom<'describeGlobalTable'>) => Promise<ReturnTypeFrom<'describeGlobalTable'>>  = async params => {
  // undefined
    return this.client.describeGlobalTable(params as any).promise();
  }

  describeGlobalTableSettings: (params: RawParamsFrom<'describeGlobalTableSettings'>) => Promise<ReturnTypeFrom<'describeGlobalTableSettings'>>  = async params => {
  // undefined
    return this.client.describeGlobalTableSettings(params as any).promise();
  }

  describeImport: (params: RawParamsFrom<'describeImport'>) => Promise<ReturnTypeFrom<'describeImport'>>  = async params => {
  // undefined
    return this.client.describeImport(params as any).promise();
  }

  describeKinesisStreamingDestination: (params: RawParamsFrom<'describeKinesisStreamingDestination'>) => Promise<ReturnTypeFrom<'describeKinesisStreamingDestination'>>  = async params => {
  // undefined
    return this.client.describeKinesisStreamingDestination(params as any).promise();
  }

  describeLimits: (params: RawParamsFrom<'describeLimits'>) => Promise<ReturnTypeFrom<'describeLimits'>>  = async params => {
  // undefined
    return this.client.describeLimits(params as any).promise();
  }

  describeTable: (params: RawParamsFrom<'describeTable'>) => Promise<ReturnTypeFrom<'describeTable'>>  = async params => {
  // undefined
    return this.client.describeTable(params as any).promise();
  }

  describeTableReplicaAutoScaling: (params: RawParamsFrom<'describeTableReplicaAutoScaling'>) => Promise<ReturnTypeFrom<'describeTableReplicaAutoScaling'>>  = async params => {
  // undefined
    return this.client.describeTableReplicaAutoScaling(params as any).promise();
  }

  describeTimeToLive: (params: RawParamsFrom<'describeTimeToLive'>) => Promise<ReturnTypeFrom<'describeTimeToLive'>>  = async params => {
  // undefined
    return this.client.describeTimeToLive(params as any).promise();
  }

  disableKinesisStreamingDestination: (params: RawParamsFrom<'disableKinesisStreamingDestination'>) => Promise<ReturnTypeFrom<'disableKinesisStreamingDestination'>>  = async params => {
  // undefined
    return this.client.disableKinesisStreamingDestination(params as any).promise();
  }

  enableKinesisStreamingDestination: (params: RawParamsFrom<'enableKinesisStreamingDestination'>) => Promise<ReturnTypeFrom<'enableKinesisStreamingDestination'>>  = async params => {
  // undefined
    return this.client.enableKinesisStreamingDestination(params as any).promise();
  }

  executeStatement: (params: RawParamsFrom<'executeStatement'>) => Promise<ReturnTypeFrom<'executeStatement'>>  = async params => {
  // undefined
    return this.client.executeStatement(params as any).promise();
  }

  executeTransaction: (params: RawParamsFrom<'executeTransaction'>) => Promise<ReturnTypeFrom<'executeTransaction'>>  = async params => {
  // undefined
    return this.client.executeTransaction(params as any).promise();
  }

  exportTableToPointInTime: (params: RawParamsFrom<'exportTableToPointInTime'>) => Promise<ReturnTypeFrom<'exportTableToPointInTime'>>  = async params => {
  // undefined
    return this.client.exportTableToPointInTime(params as any).promise();
  }

  getItem: (params: RawParamsFrom<'getItem'>) => Promise<ReturnTypeFrom<'getItem'>>  = async params => {
  // undefined
    return this.client.getItem(params as any).promise();
  }

  importTable: (params: RawParamsFrom<'importTable'>) => Promise<ReturnTypeFrom<'importTable'>>  = async params => {
  // undefined
    return this.client.importTable(params as any).promise();
  }

  listBackups: (params: RawParamsFrom<'listBackups'>) => Promise<ReturnTypeFrom<'listBackups'>>  = async params => {
  // undefined
    return this.client.listBackups(params as any).promise();
  }

  listContributorInsights: (params: RawParamsFrom<'listContributorInsights'>) => Promise<ReturnTypeFrom<'listContributorInsights'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listContributorInsights(params as any).promise();
  }

  listExports: (params: RawParamsFrom<'listExports'>) => Promise<ReturnTypeFrom<'listExports'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExports(params as any).promise();
  }

  listGlobalTables: (params: RawParamsFrom<'listGlobalTables'>) => Promise<ReturnTypeFrom<'listGlobalTables'>>  = async params => {
  // undefined
    return this.client.listGlobalTables(params as any).promise();
  }

  listImports: (params: RawParamsFrom<'listImports'>) => Promise<ReturnTypeFrom<'listImports'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listImports(params as any).promise();
  }

  async listTables(params: { [K in keyof ParamsFrom<'listTables', { next?: string, limit?: number }>]: ParamsFrom<'listTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['TableNames'], undefined>}> {
    // {"inputToken":"ExclusiveStartTableName","limitKey":"Limit","outputToken":"LastEvaluatedTableName","resultKey":"TableNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { ExclusiveStartTableName: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTables({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.LastEvaluatedTableName, operation: 'listTables' })).toString('base64');
    const member = (Array.isArray(result.TableNames ?? []) ? (result.TableNames ?? []) : [result.TableNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsOfResource: (params: RawParamsFrom<'listTagsOfResource'>) => Promise<ReturnTypeFrom<'listTagsOfResource'>>  = async params => {
  // undefined
    return this.client.listTagsOfResource(params as any).promise();
  }

  putItem: (params: RawParamsFrom<'putItem'>) => Promise<ReturnTypeFrom<'putItem'>>  = async params => {
  // undefined
    return this.client.putItem(params as any).promise();
  }

  async query(params: { [K in keyof ParamsFrom<'query', { next?: string, limit?: number }>]: ParamsFrom<'query', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'query'>]-?: ReturnTypeFrom<'query'>[K]}['Items'], undefined>}> {
    // {"inputToken":"ExclusiveStartKey","limitKey":"Limit","outputToken":"LastEvaluatedKey","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { ExclusiveStartKey: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.query({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.LastEvaluatedKey, operation: 'query' })).toString('base64');
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  restoreTableFromBackup: (params: RawParamsFrom<'restoreTableFromBackup'>) => Promise<ReturnTypeFrom<'restoreTableFromBackup'>>  = async params => {
  // undefined
    return this.client.restoreTableFromBackup(params as any).promise();
  }

  restoreTableToPointInTime: (params: RawParamsFrom<'restoreTableToPointInTime'>) => Promise<ReturnTypeFrom<'restoreTableToPointInTime'>>  = async params => {
  // undefined
    return this.client.restoreTableToPointInTime(params as any).promise();
  }

  async scan(params: { [K in keyof ParamsFrom<'scan', { next?: string, limit?: number }>]: ParamsFrom<'scan', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'scan'>]-?: ReturnTypeFrom<'scan'>[K]}['Items'], undefined>}> {
    // {"inputToken":"ExclusiveStartKey","limitKey":"Limit","outputToken":"LastEvaluatedKey","resultKey":"Items"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { ExclusiveStartKey: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.scan({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.LastEvaluatedKey, operation: 'scan' })).toString('base64');
    const member = (Array.isArray(result.Items ?? []) ? (result.Items ?? []) : [result.Items]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  transactGetItems: (params: RawParamsFrom<'transactGetItems'>) => Promise<ReturnTypeFrom<'transactGetItems'>>  = async params => {
  // undefined
    return this.client.transactGetItems(params as any).promise();
  }

  transactWriteItems: (params: RawParamsFrom<'transactWriteItems'>) => Promise<ReturnTypeFrom<'transactWriteItems'>>  = async params => {
  // undefined
    return this.client.transactWriteItems(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateContinuousBackups: (params: RawParamsFrom<'updateContinuousBackups'>) => Promise<ReturnTypeFrom<'updateContinuousBackups'>>  = async params => {
  // undefined
    return this.client.updateContinuousBackups(params as any).promise();
  }

  updateContributorInsights: (params: RawParamsFrom<'updateContributorInsights'>) => Promise<ReturnTypeFrom<'updateContributorInsights'>>  = async params => {
  // undefined
    return this.client.updateContributorInsights(params as any).promise();
  }

  updateGlobalTable: (params: RawParamsFrom<'updateGlobalTable'>) => Promise<ReturnTypeFrom<'updateGlobalTable'>>  = async params => {
  // undefined
    return this.client.updateGlobalTable(params as any).promise();
  }

  updateGlobalTableSettings: (params: RawParamsFrom<'updateGlobalTableSettings'>) => Promise<ReturnTypeFrom<'updateGlobalTableSettings'>>  = async params => {
  // undefined
    return this.client.updateGlobalTableSettings(params as any).promise();
  }

  updateItem: (params: RawParamsFrom<'updateItem'>) => Promise<ReturnTypeFrom<'updateItem'>>  = async params => {
  // undefined
    return this.client.updateItem(params as any).promise();
  }

  updateTable: (params: RawParamsFrom<'updateTable'>) => Promise<ReturnTypeFrom<'updateTable'>>  = async params => {
  // undefined
    return this.client.updateTable(params as any).promise();
  }

  updateTableReplicaAutoScaling: (params: RawParamsFrom<'updateTableReplicaAutoScaling'>) => Promise<ReturnTypeFrom<'updateTableReplicaAutoScaling'>>  = async params => {
  // undefined
    return this.client.updateTableReplicaAutoScaling(params as any).promise();
  }

  updateTimeToLive: (params: RawParamsFrom<'updateTimeToLive'>) => Promise<ReturnTypeFrom<'updateTimeToLive'>>  = async params => {
  // undefined
    return this.client.updateTimeToLive(params as any).promise();
  }
  
  static fromClient(client: AWSDynamoDB): DynamoDB {
    return new DynamoDB(client) as any;
  }
  
  static client(options?: AWSDynamoDB.Types.ClientConfiguration): DynamoDB {
    return new DynamoDB(new AWSDynamoDB(options)) as any;
  }
}  
