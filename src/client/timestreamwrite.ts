import { Request, TimestreamWrite as AWSTimestreamWrite } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSTimestreamWrite> = AWSTimestreamWrite[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSTimestreamWrite> = AWSTimestreamWrite[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSTimestreamWrite[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSTimestreamWrite, Extras> = AWSTimestreamWrite[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSTimestreamWrite> = AWSTimestreamWrite[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class TimestreamWrite {
  private constructor(private readonly client: AWSTimestreamWrite) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ingest' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listDatabases","listTables"] as const;
  
  createDatabase: (params: RawParamsFrom<'createDatabase'>) => Promise<ReturnTypeFrom<'createDatabase'>>  = async params => {
  // undefined
    return this.client.createDatabase(params as any).promise();
  }

  createTable: (params: RawParamsFrom<'createTable'>) => Promise<ReturnTypeFrom<'createTable'>>  = async params => {
  // undefined
    return this.client.createTable(params as any).promise();
  }

  deleteDatabase: (params: RawParamsFrom<'deleteDatabase'>) => Promise<ReturnTypeFrom<'deleteDatabase'>>  = async params => {
  // undefined
    return this.client.deleteDatabase(params as any).promise();
  }

  deleteTable: (params: RawParamsFrom<'deleteTable'>) => Promise<ReturnTypeFrom<'deleteTable'>>  = async params => {
  // undefined
    return this.client.deleteTable(params as any).promise();
  }

  describeDatabase: (params: RawParamsFrom<'describeDatabase'>) => Promise<ReturnTypeFrom<'describeDatabase'>>  = async params => {
  // undefined
    return this.client.describeDatabase(params as any).promise();
  }

  describeEndpoints: (params: RawParamsFrom<'describeEndpoints'>) => Promise<ReturnTypeFrom<'describeEndpoints'>>  = async params => {
  // undefined
    return this.client.describeEndpoints(params as any).promise();
  }

  describeTable: (params: RawParamsFrom<'describeTable'>) => Promise<ReturnTypeFrom<'describeTable'>>  = async params => {
  // undefined
    return this.client.describeTable(params as any).promise();
  }

  listDatabases: (params: RawParamsFrom<'listDatabases'>) => Promise<ReturnTypeFrom<'listDatabases'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDatabases(params as any).promise();
  }

  listTables: (params: RawParamsFrom<'listTables'>) => Promise<ReturnTypeFrom<'listTables'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTables(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDatabase: (params: RawParamsFrom<'updateDatabase'>) => Promise<ReturnTypeFrom<'updateDatabase'>>  = async params => {
  // undefined
    return this.client.updateDatabase(params as any).promise();
  }

  updateTable: (params: RawParamsFrom<'updateTable'>) => Promise<ReturnTypeFrom<'updateTable'>>  = async params => {
  // undefined
    return this.client.updateTable(params as any).promise();
  }

  writeRecords: (params: RawParamsFrom<'writeRecords'>) => Promise<ReturnTypeFrom<'writeRecords'>>  = async params => {
  // undefined
    return this.client.writeRecords(params as any).promise();
  }
  
  static fromClient(client: AWSTimestreamWrite): TimestreamWrite {
    return new TimestreamWrite(client) as any;
  }
  
  static client(options?: AWSTimestreamWrite.Types.ClientConfiguration): TimestreamWrite {
    return new TimestreamWrite(new AWSTimestreamWrite(options)) as any;
  }
}  
