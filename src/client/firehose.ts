import { Request, Firehose as AWSFirehose } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSFirehose> = AWSFirehose[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSFirehose> = AWSFirehose[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSFirehose[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSFirehose, Extras> = AWSFirehose[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSFirehose> = AWSFirehose[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Firehose {
  private constructor(private readonly client: AWSFirehose) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'firehose' as const;
  public readonly global = false as const;
  public readonly category = 'Application Integration' as const;
  public readonly topLevelCalls = [] as const;
  
  createDeliveryStream: (params: RawParamsFrom<'createDeliveryStream'>) => Promise<ReturnTypeFrom<'createDeliveryStream'>>  = async params => {
  // undefined
    return this.client.createDeliveryStream(params as any).promise();
  }

  deleteDeliveryStream: (params: RawParamsFrom<'deleteDeliveryStream'>) => Promise<ReturnTypeFrom<'deleteDeliveryStream'>>  = async params => {
  // undefined
    return this.client.deleteDeliveryStream(params as any).promise();
  }

  describeDeliveryStream: (params: RawParamsFrom<'describeDeliveryStream'>) => Promise<ReturnTypeFrom<'describeDeliveryStream'>>  = async params => {
  // undefined
    return this.client.describeDeliveryStream(params as any).promise();
  }

  listDeliveryStreams: (params: RawParamsFrom<'listDeliveryStreams'>) => Promise<ReturnTypeFrom<'listDeliveryStreams'>>  = async params => {
  // undefined
    return this.client.listDeliveryStreams(params as any).promise();
  }

  listTagsForDeliveryStream: (params: RawParamsFrom<'listTagsForDeliveryStream'>) => Promise<ReturnTypeFrom<'listTagsForDeliveryStream'>>  = async params => {
  // undefined
    return this.client.listTagsForDeliveryStream(params as any).promise();
  }

  putRecord: (params: RawParamsFrom<'putRecord'>) => Promise<ReturnTypeFrom<'putRecord'>>  = async params => {
  // undefined
    return this.client.putRecord(params as any).promise();
  }

  putRecordBatch: (params: RawParamsFrom<'putRecordBatch'>) => Promise<ReturnTypeFrom<'putRecordBatch'>>  = async params => {
  // undefined
    return this.client.putRecordBatch(params as any).promise();
  }

  startDeliveryStreamEncryption: (params: RawParamsFrom<'startDeliveryStreamEncryption'>) => Promise<ReturnTypeFrom<'startDeliveryStreamEncryption'>>  = async params => {
  // undefined
    return this.client.startDeliveryStreamEncryption(params as any).promise();
  }

  stopDeliveryStreamEncryption: (params: RawParamsFrom<'stopDeliveryStreamEncryption'>) => Promise<ReturnTypeFrom<'stopDeliveryStreamEncryption'>>  = async params => {
  // undefined
    return this.client.stopDeliveryStreamEncryption(params as any).promise();
  }

  tagDeliveryStream: (params: RawParamsFrom<'tagDeliveryStream'>) => Promise<ReturnTypeFrom<'tagDeliveryStream'>>  = async params => {
  // undefined
    return this.client.tagDeliveryStream(params as any).promise();
  }

  untagDeliveryStream: (params: RawParamsFrom<'untagDeliveryStream'>) => Promise<ReturnTypeFrom<'untagDeliveryStream'>>  = async params => {
  // undefined
    return this.client.untagDeliveryStream(params as any).promise();
  }

  updateDestination: (params: RawParamsFrom<'updateDestination'>) => Promise<ReturnTypeFrom<'updateDestination'>>  = async params => {
  // undefined
    return this.client.updateDestination(params as any).promise();
  }
  
  static fromClient(client: AWSFirehose): Firehose {
    return new Firehose(client) as any;
  }
  
  static client(options?: AWSFirehose.Types.ClientConfiguration): Firehose {
    return new Firehose(new AWSFirehose(options)) as any;
  }
}  
