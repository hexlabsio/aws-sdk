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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSQLDB> = AWSQLDB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class QLDB {
  private constructor(private readonly client: AWSQLDB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'qldb' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = ["listJournalS3Exports","listLedgers"] as const;
  
  cancelJournalKinesisStream: (params: RawParamsFrom<'cancelJournalKinesisStream'>) => Promise<ReturnTypeFrom<'cancelJournalKinesisStream'>>  = async params => {
  // undefined
    return this.client.cancelJournalKinesisStream(params as any).promise();
  }

  createLedger: (params: RawParamsFrom<'createLedger'>) => Promise<ReturnTypeFrom<'createLedger'>>  = async params => {
  // undefined
    return this.client.createLedger(params as any).promise();
  }

  deleteLedger: (params: RawParamsFrom<'deleteLedger'>) => Promise<ReturnTypeFrom<'deleteLedger'>>  = async params => {
  // undefined
    return this.client.deleteLedger(params as any).promise();
  }

  describeJournalKinesisStream: (params: RawParamsFrom<'describeJournalKinesisStream'>) => Promise<ReturnTypeFrom<'describeJournalKinesisStream'>>  = async params => {
  // undefined
    return this.client.describeJournalKinesisStream(params as any).promise();
  }

  describeJournalS3Export: (params: RawParamsFrom<'describeJournalS3Export'>) => Promise<ReturnTypeFrom<'describeJournalS3Export'>>  = async params => {
  // undefined
    return this.client.describeJournalS3Export(params as any).promise();
  }

  describeLedger: (params: RawParamsFrom<'describeLedger'>) => Promise<ReturnTypeFrom<'describeLedger'>>  = async params => {
  // undefined
    return this.client.describeLedger(params as any).promise();
  }

  exportJournalToS3: (params: RawParamsFrom<'exportJournalToS3'>) => Promise<ReturnTypeFrom<'exportJournalToS3'>>  = async params => {
  // undefined
    return this.client.exportJournalToS3(params as any).promise();
  }

  getBlock: (params: RawParamsFrom<'getBlock'>) => Promise<ReturnTypeFrom<'getBlock'>>  = async params => {
  // undefined
    return this.client.getBlock(params as any).promise();
  }

  getDigest: (params: RawParamsFrom<'getDigest'>) => Promise<ReturnTypeFrom<'getDigest'>>  = async params => {
  // undefined
    return this.client.getDigest(params as any).promise();
  }

  getRevision: (params: RawParamsFrom<'getRevision'>) => Promise<ReturnTypeFrom<'getRevision'>>  = async params => {
  // undefined
    return this.client.getRevision(params as any).promise();
  }

  listJournalKinesisStreamsForLedger: (params: RawParamsFrom<'listJournalKinesisStreamsForLedger'>) => Promise<ReturnTypeFrom<'listJournalKinesisStreamsForLedger'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJournalKinesisStreamsForLedger(params as any).promise();
  }

  listJournalS3Exports: (params: RawParamsFrom<'listJournalS3Exports'>) => Promise<ReturnTypeFrom<'listJournalS3Exports'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJournalS3Exports(params as any).promise();
  }

  listJournalS3ExportsForLedger: (params: RawParamsFrom<'listJournalS3ExportsForLedger'>) => Promise<ReturnTypeFrom<'listJournalS3ExportsForLedger'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listJournalS3ExportsForLedger(params as any).promise();
  }

  listLedgers: (params: RawParamsFrom<'listLedgers'>) => Promise<ReturnTypeFrom<'listLedgers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listLedgers(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  streamJournalToKinesis: (params: RawParamsFrom<'streamJournalToKinesis'>) => Promise<ReturnTypeFrom<'streamJournalToKinesis'>>  = async params => {
  // undefined
    return this.client.streamJournalToKinesis(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateLedger: (params: RawParamsFrom<'updateLedger'>) => Promise<ReturnTypeFrom<'updateLedger'>>  = async params => {
  // undefined
    return this.client.updateLedger(params as any).promise();
  }

  updateLedgerPermissionsMode: (params: RawParamsFrom<'updateLedgerPermissionsMode'>) => Promise<ReturnTypeFrom<'updateLedgerPermissionsMode'>>  = async params => {
  // undefined
    return this.client.updateLedgerPermissionsMode(params as any).promise();
  }
  
  static fromClient(client: AWSQLDB): QLDB {
    return new QLDB(client) as any;
  }
  
  static client(options?: AWSQLDB.Types.ClientConfiguration): QLDB {
    return new QLDB(new AWSQLDB(options)) as any;
  }
}  
