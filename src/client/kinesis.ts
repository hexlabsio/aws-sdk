import { Request, Kinesis as AWSKinesis } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKinesis> = AWSKinesis[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKinesis> = AWSKinesis[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKinesis[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKinesis, Extras> = AWSKinesis[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'kinesis';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["listStreams"];
    
  addTagsToStream: FunctionTypeFrom<'addTagsToStream'>;

  createStream: FunctionTypeFrom<'createStream'>;

  decreaseStreamRetentionPeriod: FunctionTypeFrom<'decreaseStreamRetentionPeriod'>;

  deleteStream: FunctionTypeFrom<'deleteStream'>;

  deregisterStreamConsumer: FunctionTypeFrom<'deregisterStreamConsumer'>;

  describeLimits: FunctionTypeFrom<'describeLimits'>;

  describeStream(params: { [K in keyof Omit<ParamsFrom<'describeStream', { next?: string, limit?: number }>, 'ExclusiveStartShardId' | 'Limit'>]: ParamsFrom<'describeStream', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStream'>]-?: ReturnTypeFrom<'describeStream'>[K]}['StreamDescription']['Shards'] }>
  ;

  describeStreamConsumer: FunctionTypeFrom<'describeStreamConsumer'>;

  describeStreamSummary: FunctionTypeFrom<'describeStreamSummary'>;

  disableEnhancedMonitoring: FunctionTypeFrom<'disableEnhancedMonitoring'>;

  enableEnhancedMonitoring: FunctionTypeFrom<'enableEnhancedMonitoring'>;

  getRecords: FunctionTypeFrom<'getRecords'>;

  getShardIterator: FunctionTypeFrom<'getShardIterator'>;

  increaseStreamRetentionPeriod: FunctionTypeFrom<'increaseStreamRetentionPeriod'>;

  listShards: FunctionTypeFrom<'listShards'>;

  listStreamConsumers: FunctionTypeFrom<'listStreamConsumers'>;

  listStreams(params: { [K in keyof Omit<ParamsFrom<'listStreams', { next?: string, limit?: number }>, 'ExclusiveStartStreamName' | 'Limit'>]: ParamsFrom<'listStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['StreamNames'] }>
  listStreams(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['StreamNames'] }>;

  listTagsForStream: FunctionTypeFrom<'listTagsForStream'>;

  mergeShards: FunctionTypeFrom<'mergeShards'>;

  putRecord: FunctionTypeFrom<'putRecord'>;

  putRecords: FunctionTypeFrom<'putRecords'>;

  registerStreamConsumer: FunctionTypeFrom<'registerStreamConsumer'>;

  removeTagsFromStream: FunctionTypeFrom<'removeTagsFromStream'>;

  splitShard: FunctionTypeFrom<'splitShard'>;

  startStreamEncryption: FunctionTypeFrom<'startStreamEncryption'>;

  stopStreamEncryption: FunctionTypeFrom<'stopStreamEncryption'>;

  updateShardCount: FunctionTypeFrom<'updateShardCount'>;

  updateStreamMode: FunctionTypeFrom<'updateStreamMode'>
}
 
export class Kinesis implements ClientType {
  private constructor(private readonly client: AWSKinesis) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesis';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["listStreams"] as const;
  
  async addTagsToStream(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToStream(...args).promise()
  }

  async createStream(...args: any): Promise<any> {
  // undefined
    return this.client.createStream(...args).promise()
  }

  async decreaseStreamRetentionPeriod(...args: any): Promise<any> {
  // undefined
    return this.client.decreaseStreamRetentionPeriod(...args).promise()
  }

  async deleteStream(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStream(...args).promise()
  }

  async deregisterStreamConsumer(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterStreamConsumer(...args).promise()
  }

  async describeLimits(...args: any): Promise<any> {
  // undefined
    return this.client.describeLimits(...args).promise()
  }

  async describeStream(...args: any): Promise<any> {
    // {"inputToken":"ExclusiveStartShardId","limitKey":"Limit","moreResults":"StreamDescription.HasMoreShards","outputToken":"StreamDescription.Shards[-1].ShardId","resultKey":"StreamDescription.Shards"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { ExclusiveStartShardId: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeStream(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.StreamDescription?.Shards?.[result.StreamDescription?.Shards?.length - 1]?.ShardId;
    const member = result.StreamDescription?.Shards ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStreamConsumer(...args: any): Promise<any> {
  // undefined
    return this.client.describeStreamConsumer(...args).promise()
  }

  async describeStreamSummary(...args: any): Promise<any> {
  // undefined
    return this.client.describeStreamSummary(...args).promise()
  }

  async disableEnhancedMonitoring(...args: any): Promise<any> {
  // undefined
    return this.client.disableEnhancedMonitoring(...args).promise()
  }

  async enableEnhancedMonitoring(...args: any): Promise<any> {
  // undefined
    return this.client.enableEnhancedMonitoring(...args).promise()
  }

  async getRecords(...args: any): Promise<any> {
  // undefined
    return this.client.getRecords(...args).promise()
  }

  async getShardIterator(...args: any): Promise<any> {
  // undefined
    return this.client.getShardIterator(...args).promise()
  }

  async increaseStreamRetentionPeriod(...args: any): Promise<any> {
  // undefined
    return this.client.increaseStreamRetentionPeriod(...args).promise()
  }

  async listShards(...args: any): Promise<any> {
  // undefined
    return this.client.listShards(...args).promise()
  }

  async listStreamConsumers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listStreamConsumers(...args).promise()
  }

  async listStreams(...args: any): Promise<any> {
    // {"inputToken":"ExclusiveStartStreamName","limitKey":"Limit","moreResults":"HasMoreStreams","outputToken":"StreamNames[-1]","resultKey":"StreamNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { ExclusiveStartStreamName: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listStreams(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.StreamNames?.[result.StreamNames?.length - 1];
    const member = result.StreamNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForStream(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForStream(...args).promise()
  }

  async mergeShards(...args: any): Promise<any> {
  // undefined
    return this.client.mergeShards(...args).promise()
  }

  async putRecord(...args: any): Promise<any> {
  // undefined
    return this.client.putRecord(...args).promise()
  }

  async putRecords(...args: any): Promise<any> {
  // undefined
    return this.client.putRecords(...args).promise()
  }

  async registerStreamConsumer(...args: any): Promise<any> {
  // undefined
    return this.client.registerStreamConsumer(...args).promise()
  }

  async removeTagsFromStream(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromStream(...args).promise()
  }

  async splitShard(...args: any): Promise<any> {
  // undefined
    return this.client.splitShard(...args).promise()
  }

  async startStreamEncryption(...args: any): Promise<any> {
  // undefined
    return this.client.startStreamEncryption(...args).promise()
  }

  async stopStreamEncryption(...args: any): Promise<any> {
  // undefined
    return this.client.stopStreamEncryption(...args).promise()
  }

  async updateShardCount(...args: any): Promise<any> {
  // undefined
    return this.client.updateShardCount(...args).promise()
  }

  async updateStreamMode(...args: any): Promise<any> {
  // undefined
    return this.client.updateStreamMode(...args).promise()
  }
  
  static fromClient(client: AWSKinesis): ClientType {
    return new Kinesis(client) as any;
  }
  
  static client(options?: AWSKinesis.Types.ClientConfiguration): ClientType {
    return new Kinesis(new AWSKinesis(options)) as any;
  }
}  
