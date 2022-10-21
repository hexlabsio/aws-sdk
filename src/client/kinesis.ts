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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKinesis> = AWSKinesis[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Kinesis {
  private constructor(private readonly client: AWSKinesis) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kinesis' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["listStreams"] as const;
  
  addTagsToStream: (params: RawParamsFrom<'addTagsToStream'>) => Promise<ReturnTypeFrom<'addTagsToStream'>>  = async params => {
  // undefined
    return this.client.addTagsToStream(params as any).promise();
  }

  createStream: (params: RawParamsFrom<'createStream'>) => Promise<ReturnTypeFrom<'createStream'>>  = async params => {
  // undefined
    return this.client.createStream(params as any).promise();
  }

  decreaseStreamRetentionPeriod: (params: RawParamsFrom<'decreaseStreamRetentionPeriod'>) => Promise<ReturnTypeFrom<'decreaseStreamRetentionPeriod'>>  = async params => {
  // undefined
    return this.client.decreaseStreamRetentionPeriod(params as any).promise();
  }

  deleteStream: (params: RawParamsFrom<'deleteStream'>) => Promise<ReturnTypeFrom<'deleteStream'>>  = async params => {
  // undefined
    return this.client.deleteStream(params as any).promise();
  }

  deregisterStreamConsumer: (params: RawParamsFrom<'deregisterStreamConsumer'>) => Promise<ReturnTypeFrom<'deregisterStreamConsumer'>>  = async params => {
  // undefined
    return this.client.deregisterStreamConsumer(params as any).promise();
  }

  describeLimits: (params: RawParamsFrom<'describeLimits'>) => Promise<ReturnTypeFrom<'describeLimits'>>  = async params => {
  // undefined
    return this.client.describeLimits(params as any).promise();
  }

  async describeStream(params: { [K in keyof ParamsFrom<'describeStream', { next?: string, limit?: number }>]: ParamsFrom<'describeStream', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStream'>]-?: ReturnTypeFrom<'describeStream'>[K]}['StreamDescription']['Shards'], undefined>}> {
    // {"inputToken":"ExclusiveStartShardId","limitKey":"Limit","moreResults":"StreamDescription.HasMoreShards","outputToken":"StreamDescription.Shards[-1].ShardId","resultKey":"StreamDescription.Shards"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { ExclusiveStartShardId: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeStream({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.StreamDescription?.Shards?.[result.StreamDescription?.Shards?.length - 1]?.ShardId, operation: 'describeStream' })).toString('base64');
    const member = (Array.isArray(result.StreamDescription?.Shards ?? []) ? (result.StreamDescription?.Shards ?? []) : [result.StreamDescription?.Shards]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeStreamConsumer: (params: RawParamsFrom<'describeStreamConsumer'>) => Promise<ReturnTypeFrom<'describeStreamConsumer'>>  = async params => {
  // undefined
    return this.client.describeStreamConsumer(params as any).promise();
  }

  describeStreamSummary: (params: RawParamsFrom<'describeStreamSummary'>) => Promise<ReturnTypeFrom<'describeStreamSummary'>>  = async params => {
  // undefined
    return this.client.describeStreamSummary(params as any).promise();
  }

  disableEnhancedMonitoring: (params: RawParamsFrom<'disableEnhancedMonitoring'>) => Promise<ReturnTypeFrom<'disableEnhancedMonitoring'>>  = async params => {
  // undefined
    return this.client.disableEnhancedMonitoring(params as any).promise();
  }

  enableEnhancedMonitoring: (params: RawParamsFrom<'enableEnhancedMonitoring'>) => Promise<ReturnTypeFrom<'enableEnhancedMonitoring'>>  = async params => {
  // undefined
    return this.client.enableEnhancedMonitoring(params as any).promise();
  }

  getRecords: (params: RawParamsFrom<'getRecords'>) => Promise<ReturnTypeFrom<'getRecords'>>  = async params => {
  // undefined
    return this.client.getRecords(params as any).promise();
  }

  getShardIterator: (params: RawParamsFrom<'getShardIterator'>) => Promise<ReturnTypeFrom<'getShardIterator'>>  = async params => {
  // undefined
    return this.client.getShardIterator(params as any).promise();
  }

  increaseStreamRetentionPeriod: (params: RawParamsFrom<'increaseStreamRetentionPeriod'>) => Promise<ReturnTypeFrom<'increaseStreamRetentionPeriod'>>  = async params => {
  // undefined
    return this.client.increaseStreamRetentionPeriod(params as any).promise();
  }

  listShards: (params: RawParamsFrom<'listShards'>) => Promise<ReturnTypeFrom<'listShards'>>  = async params => {
  // undefined
    return this.client.listShards(params as any).promise();
  }

  listStreamConsumers: (params: RawParamsFrom<'listStreamConsumers'>) => Promise<ReturnTypeFrom<'listStreamConsumers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listStreamConsumers(params as any).promise();
  }

  async listStreams(params: { [K in keyof ParamsFrom<'listStreams', { next?: string, limit?: number }>]: ParamsFrom<'listStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStreams'>]-?: ReturnTypeFrom<'listStreams'>[K]}['StreamNames'], undefined>}> {
    // {"inputToken":"ExclusiveStartStreamName","limitKey":"Limit","moreResults":"HasMoreStreams","outputToken":"StreamNames[-1]","resultKey":"StreamNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { ExclusiveStartStreamName: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listStreams({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.StreamNames?.[result.StreamNames?.length - 1], operation: 'listStreams' })).toString('base64');
    const member = (Array.isArray(result.StreamNames ?? []) ? (result.StreamNames ?? []) : [result.StreamNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForStream: (params: RawParamsFrom<'listTagsForStream'>) => Promise<ReturnTypeFrom<'listTagsForStream'>>  = async params => {
  // undefined
    return this.client.listTagsForStream(params as any).promise();
  }

  mergeShards: (params: RawParamsFrom<'mergeShards'>) => Promise<ReturnTypeFrom<'mergeShards'>>  = async params => {
  // undefined
    return this.client.mergeShards(params as any).promise();
  }

  putRecord: (params: RawParamsFrom<'putRecord'>) => Promise<ReturnTypeFrom<'putRecord'>>  = async params => {
  // undefined
    return this.client.putRecord(params as any).promise();
  }

  putRecords: (params: RawParamsFrom<'putRecords'>) => Promise<ReturnTypeFrom<'putRecords'>>  = async params => {
  // undefined
    return this.client.putRecords(params as any).promise();
  }

  registerStreamConsumer: (params: RawParamsFrom<'registerStreamConsumer'>) => Promise<ReturnTypeFrom<'registerStreamConsumer'>>  = async params => {
  // undefined
    return this.client.registerStreamConsumer(params as any).promise();
  }

  removeTagsFromStream: (params: RawParamsFrom<'removeTagsFromStream'>) => Promise<ReturnTypeFrom<'removeTagsFromStream'>>  = async params => {
  // undefined
    return this.client.removeTagsFromStream(params as any).promise();
  }

  splitShard: (params: RawParamsFrom<'splitShard'>) => Promise<ReturnTypeFrom<'splitShard'>>  = async params => {
  // undefined
    return this.client.splitShard(params as any).promise();
  }

  startStreamEncryption: (params: RawParamsFrom<'startStreamEncryption'>) => Promise<ReturnTypeFrom<'startStreamEncryption'>>  = async params => {
  // undefined
    return this.client.startStreamEncryption(params as any).promise();
  }

  stopStreamEncryption: (params: RawParamsFrom<'stopStreamEncryption'>) => Promise<ReturnTypeFrom<'stopStreamEncryption'>>  = async params => {
  // undefined
    return this.client.stopStreamEncryption(params as any).promise();
  }

  updateShardCount: (params: RawParamsFrom<'updateShardCount'>) => Promise<ReturnTypeFrom<'updateShardCount'>>  = async params => {
  // undefined
    return this.client.updateShardCount(params as any).promise();
  }

  updateStreamMode: (params: RawParamsFrom<'updateStreamMode'>) => Promise<ReturnTypeFrom<'updateStreamMode'>>  = async params => {
  // undefined
    return this.client.updateStreamMode(params as any).promise();
  }
  
  static fromClient(client: AWSKinesis): Kinesis {
    return new Kinesis(client) as any;
  }
  
  static client(options?: AWSKinesis.Types.ClientConfiguration): Kinesis {
    return new Kinesis(new AWSKinesis(options)) as any;
  }
}  
