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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'firehose';
    global: false;
    category: 'Application Integration'
    topLevelCalls: readonly [];
    
  createDeliveryStream: FunctionTypeFrom<'createDeliveryStream'>;

  deleteDeliveryStream: FunctionTypeFrom<'deleteDeliveryStream'>;

  describeDeliveryStream: FunctionTypeFrom<'describeDeliveryStream'>;

  listDeliveryStreams: FunctionTypeFrom<'listDeliveryStreams'>;

  listTagsForDeliveryStream: FunctionTypeFrom<'listTagsForDeliveryStream'>;

  putRecord: FunctionTypeFrom<'putRecord'>;

  putRecordBatch: FunctionTypeFrom<'putRecordBatch'>;

  startDeliveryStreamEncryption: FunctionTypeFrom<'startDeliveryStreamEncryption'>;

  stopDeliveryStreamEncryption: FunctionTypeFrom<'stopDeliveryStreamEncryption'>;

  tagDeliveryStream: FunctionTypeFrom<'tagDeliveryStream'>;

  untagDeliveryStream: FunctionTypeFrom<'untagDeliveryStream'>;

  updateDestination: FunctionTypeFrom<'updateDestination'>
}
 
export class Firehose implements ClientType {
  private constructor(private readonly client: AWSFirehose) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'firehose';
  public readonly global = false;
  public readonly category = 'Application Integration';
  public readonly topLevelCalls = [] as const;
  
  async createDeliveryStream(...args: any): Promise<any> {
  // undefined
    return this.client.createDeliveryStream(...args).promise()
  }

  async deleteDeliveryStream(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDeliveryStream(...args).promise()
  }

  async describeDeliveryStream(...args: any): Promise<any> {
  // undefined
    return this.client.describeDeliveryStream(...args).promise()
  }

  async listDeliveryStreams(...args: any): Promise<any> {
  // undefined
    return this.client.listDeliveryStreams(...args).promise()
  }

  async listTagsForDeliveryStream(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForDeliveryStream(...args).promise()
  }

  async putRecord(...args: any): Promise<any> {
  // undefined
    return this.client.putRecord(...args).promise()
  }

  async putRecordBatch(...args: any): Promise<any> {
  // undefined
    return this.client.putRecordBatch(...args).promise()
  }

  async startDeliveryStreamEncryption(...args: any): Promise<any> {
  // undefined
    return this.client.startDeliveryStreamEncryption(...args).promise()
  }

  async stopDeliveryStreamEncryption(...args: any): Promise<any> {
  // undefined
    return this.client.stopDeliveryStreamEncryption(...args).promise()
  }

  async tagDeliveryStream(...args: any): Promise<any> {
  // undefined
    return this.client.tagDeliveryStream(...args).promise()
  }

  async untagDeliveryStream(...args: any): Promise<any> {
  // undefined
    return this.client.untagDeliveryStream(...args).promise()
  }

  async updateDestination(...args: any): Promise<any> {
  // undefined
    return this.client.updateDestination(...args).promise()
  }
  
  static fromClient(client: AWSFirehose): ClientType {
    return new Firehose(client) as any;
  }
  
  static client(options?: AWSFirehose.Types.ClientConfiguration): ClientType {
    return new Firehose(new AWSFirehose(options)) as any;
  }
}  
