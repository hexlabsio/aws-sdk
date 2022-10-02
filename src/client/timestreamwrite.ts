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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ingest';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listDatabases","listTables"];
    
  createDatabase: FunctionTypeFrom<'createDatabase'>;

  createTable: FunctionTypeFrom<'createTable'>;

  deleteDatabase: FunctionTypeFrom<'deleteDatabase'>;

  deleteTable: FunctionTypeFrom<'deleteTable'>;

  describeDatabase: FunctionTypeFrom<'describeDatabase'>;

  describeEndpoints: FunctionTypeFrom<'describeEndpoints'>;

  describeTable: FunctionTypeFrom<'describeTable'>;

  listDatabases: FunctionTypeFrom<'listDatabases'>;

  listTables: FunctionTypeFrom<'listTables'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDatabase: FunctionTypeFrom<'updateDatabase'>;

  updateTable: FunctionTypeFrom<'updateTable'>;

  writeRecords: FunctionTypeFrom<'writeRecords'>
}
 
export class TimestreamWrite implements ClientType {
  private constructor(private readonly client: AWSTimestreamWrite) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ingest';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listDatabases","listTables"] as const;
  
  async createDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.createDatabase(...args).promise()
  }

  async createTable(...args: any): Promise<any> {
  // undefined
    return this.client.createTable(...args).promise()
  }

  async deleteDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDatabase(...args).promise()
  }

  async deleteTable(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTable(...args).promise()
  }

  async describeDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.describeDatabase(...args).promise()
  }

  async describeEndpoints(...args: any): Promise<any> {
  // undefined
    return this.client.describeEndpoints(...args).promise()
  }

  async describeTable(...args: any): Promise<any> {
  // undefined
    return this.client.describeTable(...args).promise()
  }

  async listDatabases(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDatabases(...args).promise()
  }

  async listTables(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTables(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDatabase(...args: any): Promise<any> {
  // undefined
    return this.client.updateDatabase(...args).promise()
  }

  async updateTable(...args: any): Promise<any> {
  // undefined
    return this.client.updateTable(...args).promise()
  }

  async writeRecords(...args: any): Promise<any> {
  // undefined
    return this.client.writeRecords(...args).promise()
  }
  
  static fromClient(client: AWSTimestreamWrite): ClientType {
    return new TimestreamWrite(client) as any;
  }
  
  static client(options?: AWSTimestreamWrite.Types.ClientConfiguration): ClientType {
    return new TimestreamWrite(new AWSTimestreamWrite(options)) as any;
  }
}  
