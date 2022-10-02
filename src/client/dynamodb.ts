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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'dynamodb';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["listContributorInsights","listExports","listImports","listTables"];
    
  batchExecuteStatement: FunctionTypeFrom<'batchExecuteStatement'>;

  batchGetItem: FunctionTypeFrom<'batchGetItem'>;

  batchWriteItem: FunctionTypeFrom<'batchWriteItem'>;

  createBackup: FunctionTypeFrom<'createBackup'>;

  createGlobalTable: FunctionTypeFrom<'createGlobalTable'>;

  createTable: FunctionTypeFrom<'createTable'>;

  deleteBackup: FunctionTypeFrom<'deleteBackup'>;

  deleteItem: FunctionTypeFrom<'deleteItem'>;

  deleteTable: FunctionTypeFrom<'deleteTable'>;

  describeBackup: FunctionTypeFrom<'describeBackup'>;

  describeContinuousBackups: FunctionTypeFrom<'describeContinuousBackups'>;

  describeContributorInsights: FunctionTypeFrom<'describeContributorInsights'>;

  describeEndpoints: FunctionTypeFrom<'describeEndpoints'>;

  describeExport: FunctionTypeFrom<'describeExport'>;

  describeGlobalTable: FunctionTypeFrom<'describeGlobalTable'>;

  describeGlobalTableSettings: FunctionTypeFrom<'describeGlobalTableSettings'>;

  describeImport: FunctionTypeFrom<'describeImport'>;

  describeKinesisStreamingDestination: FunctionTypeFrom<'describeKinesisStreamingDestination'>;

  describeLimits: FunctionTypeFrom<'describeLimits'>;

  describeTable: FunctionTypeFrom<'describeTable'>;

  describeTableReplicaAutoScaling: FunctionTypeFrom<'describeTableReplicaAutoScaling'>;

  describeTimeToLive: FunctionTypeFrom<'describeTimeToLive'>;

  disableKinesisStreamingDestination: FunctionTypeFrom<'disableKinesisStreamingDestination'>;

  enableKinesisStreamingDestination: FunctionTypeFrom<'enableKinesisStreamingDestination'>;

  executeStatement: FunctionTypeFrom<'executeStatement'>;

  executeTransaction: FunctionTypeFrom<'executeTransaction'>;

  exportTableToPointInTime: FunctionTypeFrom<'exportTableToPointInTime'>;

  getItem: FunctionTypeFrom<'getItem'>;

  importTable: FunctionTypeFrom<'importTable'>;

  listBackups: FunctionTypeFrom<'listBackups'>;

  listContributorInsights: FunctionTypeFrom<'listContributorInsights'>;

  listExports: FunctionTypeFrom<'listExports'>;

  listGlobalTables: FunctionTypeFrom<'listGlobalTables'>;

  listImports: FunctionTypeFrom<'listImports'>;

  listTables(params: { [K in keyof Omit<ParamsFrom<'listTables', { next?: string, limit?: number }>, 'ExclusiveStartTableName' | 'Limit'>]: ParamsFrom<'listTables', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['TableNames'] }>
  listTables(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTables'>]-?: ReturnTypeFrom<'listTables'>[K]}['TableNames'] }>;

  listTagsOfResource: FunctionTypeFrom<'listTagsOfResource'>;

  putItem: FunctionTypeFrom<'putItem'>;

  query(params: { [K in keyof Omit<ParamsFrom<'query', { next?: string, limit?: number }>, 'ExclusiveStartKey' | 'Limit'>]: ParamsFrom<'query', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'query'>]-?: ReturnTypeFrom<'query'>[K]}['Items'] }>
  ;

  restoreTableFromBackup: FunctionTypeFrom<'restoreTableFromBackup'>;

  restoreTableToPointInTime: FunctionTypeFrom<'restoreTableToPointInTime'>;

  scan(params: { [K in keyof Omit<ParamsFrom<'scan', { next?: string, limit?: number }>, 'ExclusiveStartKey' | 'Limit'>]: ParamsFrom<'scan', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'scan'>]-?: ReturnTypeFrom<'scan'>[K]}['Items'] }>
  ;

  tagResource: FunctionTypeFrom<'tagResource'>;

  transactGetItems: FunctionTypeFrom<'transactGetItems'>;

  transactWriteItems: FunctionTypeFrom<'transactWriteItems'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateContinuousBackups: FunctionTypeFrom<'updateContinuousBackups'>;

  updateContributorInsights: FunctionTypeFrom<'updateContributorInsights'>;

  updateGlobalTable: FunctionTypeFrom<'updateGlobalTable'>;

  updateGlobalTableSettings: FunctionTypeFrom<'updateGlobalTableSettings'>;

  updateItem: FunctionTypeFrom<'updateItem'>;

  updateTable: FunctionTypeFrom<'updateTable'>;

  updateTableReplicaAutoScaling: FunctionTypeFrom<'updateTableReplicaAutoScaling'>;

  updateTimeToLive: FunctionTypeFrom<'updateTimeToLive'>
}
 
export class DynamoDB implements ClientType {
  private constructor(private readonly client: AWSDynamoDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dynamodb';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["listContributorInsights","listExports","listImports","listTables"] as const;
  
  async batchExecuteStatement(...args: any): Promise<any> {
  // undefined
    return this.client.batchExecuteStatement(...args).promise()
  }

  async batchGetItem(...args: any): Promise<any> {
  // {"inputToken":"RequestItems","outputToken":"UnprocessedKeys"}
    return this.client.batchGetItem(...args).promise()
  }

  async batchWriteItem(...args: any): Promise<any> {
  // undefined
    return this.client.batchWriteItem(...args).promise()
  }

  async createBackup(...args: any): Promise<any> {
  // undefined
    return this.client.createBackup(...args).promise()
  }

  async createGlobalTable(...args: any): Promise<any> {
  // undefined
    return this.client.createGlobalTable(...args).promise()
  }

  async createTable(...args: any): Promise<any> {
  // undefined
    return this.client.createTable(...args).promise()
  }

  async deleteBackup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackup(...args).promise()
  }

  async deleteItem(...args: any): Promise<any> {
  // undefined
    return this.client.deleteItem(...args).promise()
  }

  async deleteTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTable(...args).promise()
  }

  async describeBackup(...args: any): Promise<any> {
  // undefined
    return this.client.describeBackup(...args).promise()
  }

  async describeContinuousBackups(...args: any): Promise<any> {
  // undefined
    return this.client.describeContinuousBackups(...args).promise()
  }

  async describeContributorInsights(...args: any): Promise<any> {
  // undefined
    return this.client.describeContributorInsights(...args).promise()
  }

  async describeEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpoints(...args).promise()
  }

  async describeExport(...args: any): Promise<any> {
  // undefined
    return this.client.describeExport(...args).promise()
  }

  async describeGlobalTable(...args: any): Promise<any> {
  // undefined
    return this.client.describeGlobalTable(...args).promise()
  }

  async describeGlobalTableSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeGlobalTableSettings(...args).promise()
  }

  async describeImport(...args: any): Promise<any> {
  // undefined
    return this.client.describeImport(...args).promise()
  }

  async describeKinesisStreamingDestination(...args: any): Promise<any> {
  // undefined
    return this.client.describeKinesisStreamingDestination(...args).promise()
  }

  async describeLimits(...args: any): Promise<any> {
  // undefined
    return this.client.describeLimits(...args).promise()
  }

  async describeTable(...args: any): Promise<any> {
  // undefined
    return this.client.describeTable(...args).promise()
  }

  async describeTableReplicaAutoScaling(...args: any): Promise<any> {
  // undefined
    return this.client.describeTableReplicaAutoScaling(...args).promise()
  }

  async describeTimeToLive(...args: any): Promise<any> {
  // undefined
    return this.client.describeTimeToLive(...args).promise()
  }

  async disableKinesisStreamingDestination(...args: any): Promise<any> {
  // undefined
    return this.client.disableKinesisStreamingDestination(...args).promise()
  }

  async enableKinesisStreamingDestination(...args: any): Promise<any> {
  // undefined
    return this.client.enableKinesisStreamingDestination(...args).promise()
  }

  async executeStatement(...args: any): Promise<any> {
  // undefined
    return this.client.executeStatement(...args).promise()
  }

  async executeTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.executeTransaction(...args).promise()
  }

  async exportTableToPointInTime(...args: any): Promise<any> {
  // undefined
    return this.client.exportTableToPointInTime(...args).promise()
  }

  async getItem(...args: any): Promise<any> {
  // undefined
    return this.client.getItem(...args).promise()
  }

  async importTable(...args: any): Promise<any> {
  // undefined
    return this.client.importTable(...args).promise()
  }

  async listBackups(...args: any): Promise<any> {
  // undefined
    return this.client.listBackups(...args).promise()
  }

  async listContributorInsights(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listContributorInsights(...args).promise()
  }

  async listExports(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listExports(...args).promise()
  }

  async listGlobalTables(...args: any): Promise<any> {
  // undefined
    return this.client.listGlobalTables(...args).promise()
  }

  async listImports(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"PageSize","outputToken":"NextToken"}
    return this.client.listImports(...args).promise()
  }

  async listTables(...args: any): Promise<any> {
    // {"inputToken":"ExclusiveStartTableName","limitKey":"Limit","outputToken":"LastEvaluatedTableName","resultKey":"TableNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { ExclusiveStartTableName: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTables(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.LastEvaluatedTableName;
    const member = result.TableNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsOfResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsOfResource(...args).promise()
  }

  async putItem(...args: any): Promise<any> {
  // undefined
    return this.client.putItem(...args).promise()
  }

  async query(...args: any): Promise<any> {
    // {"inputToken":"ExclusiveStartKey","limitKey":"Limit","outputToken":"LastEvaluatedKey","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { ExclusiveStartKey: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.query(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.LastEvaluatedKey;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async restoreTableFromBackup(...args: any): Promise<any> {
  // undefined
    return this.client.restoreTableFromBackup(...args).promise()
  }

  async restoreTableToPointInTime(...args: any): Promise<any> {
  // undefined
    return this.client.restoreTableToPointInTime(...args).promise()
  }

  async scan(...args: any): Promise<any> {
    // {"inputToken":"ExclusiveStartKey","limitKey":"Limit","outputToken":"LastEvaluatedKey","resultKey":"Items"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { ExclusiveStartKey: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.scan(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.LastEvaluatedKey;
    const member = result.Items ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async transactGetItems(...args: any): Promise<any> {
  // undefined
    return this.client.transactGetItems(...args).promise()
  }

  async transactWriteItems(...args: any): Promise<any> {
  // undefined
    return this.client.transactWriteItems(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateContinuousBackups(...args: any): Promise<any> {
  // undefined
    return this.client.updateContinuousBackups(...args).promise()
  }

  async updateContributorInsights(...args: any): Promise<any> {
  // undefined
    return this.client.updateContributorInsights(...args).promise()
  }

  async updateGlobalTable(...args: any): Promise<any> {
  // undefined
    return this.client.updateGlobalTable(...args).promise()
  }

  async updateGlobalTableSettings(...args: any): Promise<any> {
  // undefined
    return this.client.updateGlobalTableSettings(...args).promise()
  }

  async updateItem(...args: any): Promise<any> {
  // undefined
    return this.client.updateItem(...args).promise()
  }

  async updateTable(...args: any): Promise<any> {
  // undefined
    return this.client.updateTable(...args).promise()
  }

  async updateTableReplicaAutoScaling(...args: any): Promise<any> {
  // undefined
    return this.client.updateTableReplicaAutoScaling(...args).promise()
  }

  async updateTimeToLive(...args: any): Promise<any> {
  // undefined
    return this.client.updateTimeToLive(...args).promise()
  }
  
  static fromClient(client: AWSDynamoDB): ClientType {
    return new DynamoDB(client) as any;
  }
  
  static client(options?: AWSDynamoDB.Types.ClientConfiguration): ClientType {
    return new DynamoDB(new AWSDynamoDB(options)) as any;
  }
}  
