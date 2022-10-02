import { Request, QLDB as AWSQLDB } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSQLDB> = AWSQLDB[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSQLDB> = AWSQLDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSQLDB[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSQLDB, Extras> = AWSQLDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'qldb';
    global: false;
    category: 'Database'
    topLevelCalls: readonly ["listJournalS3Exports","listLedgers"];
    
  cancelJournalKinesisStream: FunctionTypeFrom<'cancelJournalKinesisStream'>;

  createLedger: FunctionTypeFrom<'createLedger'>;

  deleteLedger: FunctionTypeFrom<'deleteLedger'>;

  describeJournalKinesisStream: FunctionTypeFrom<'describeJournalKinesisStream'>;

  describeJournalS3Export: FunctionTypeFrom<'describeJournalS3Export'>;

  describeLedger: FunctionTypeFrom<'describeLedger'>;

  exportJournalToS3: FunctionTypeFrom<'exportJournalToS3'>;

  getBlock: FunctionTypeFrom<'getBlock'>;

  getDigest: FunctionTypeFrom<'getDigest'>;

  getRevision: FunctionTypeFrom<'getRevision'>;

  listJournalKinesisStreamsForLedger: FunctionTypeFrom<'listJournalKinesisStreamsForLedger'>;

  listJournalS3Exports: FunctionTypeFrom<'listJournalS3Exports'>;

  listJournalS3ExportsForLedger: FunctionTypeFrom<'listJournalS3ExportsForLedger'>;

  listLedgers: FunctionTypeFrom<'listLedgers'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  streamJournalToKinesis: FunctionTypeFrom<'streamJournalToKinesis'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateLedger: FunctionTypeFrom<'updateLedger'>;

  updateLedgerPermissionsMode: FunctionTypeFrom<'updateLedgerPermissionsMode'>
}
 
export class QLDB implements ClientType {
  private constructor(private readonly client: AWSQLDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'qldb';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = ["listJournalS3Exports","listLedgers"] as const;
  
  async cancelJournalKinesisStream(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJournalKinesisStream(...args).promise()
  }

  async createLedger(...args: any): Promise<any> {
  // undefined
    return this.client.createLedger(...args).promise()
  }

  async deleteLedger(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLedger(...args).promise()
  }

  async describeJournalKinesisStream(...args: any): Promise<any> {
  // undefined
    return this.client.describeJournalKinesisStream(...args).promise()
  }

  async describeJournalS3Export(...args: any): Promise<any> {
  // undefined
    return this.client.describeJournalS3Export(...args).promise()
  }

  async describeLedger(...args: any): Promise<any> {
  // undefined
    return this.client.describeLedger(...args).promise()
  }

  async exportJournalToS3(...args: any): Promise<any> {
  // undefined
    return this.client.exportJournalToS3(...args).promise()
  }

  async getBlock(...args: any): Promise<any> {
  // undefined
    return this.client.getBlock(...args).promise()
  }

  async getDigest(...args: any): Promise<any> {
  // undefined
    return this.client.getDigest(...args).promise()
  }

  async getRevision(...args: any): Promise<any> {
  // undefined
    return this.client.getRevision(...args).promise()
  }

  async listJournalKinesisStreamsForLedger(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJournalKinesisStreamsForLedger(...args).promise()
  }

  async listJournalS3Exports(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJournalS3Exports(...args).promise()
  }

  async listJournalS3ExportsForLedger(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJournalS3ExportsForLedger(...args).promise()
  }

  async listLedgers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLedgers(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async streamJournalToKinesis(...args: any): Promise<any> {
  // undefined
    return this.client.streamJournalToKinesis(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateLedger(...args: any): Promise<any> {
  // undefined
    return this.client.updateLedger(...args).promise()
  }

  async updateLedgerPermissionsMode(...args: any): Promise<any> {
  // undefined
    return this.client.updateLedgerPermissionsMode(...args).promise()
  }
  
  static fromClient(client: AWSQLDB): ClientType {
    return new QLDB(client) as any;
  }
  
  static client(options?: AWSQLDB.Types.ClientConfiguration): ClientType {
    return new QLDB(new AWSQLDB(options)) as any;
  }
}  
