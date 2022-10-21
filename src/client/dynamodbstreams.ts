import { Request, DynamoDBStreams as AWSDynamoDBStreams } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDynamoDBStreams> = AWSDynamoDBStreams[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDynamoDBStreams> = AWSDynamoDBStreams[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDynamoDBStreams[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDynamoDBStreams, Extras> = AWSDynamoDBStreams[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDynamoDBStreams> = AWSDynamoDBStreams[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DynamoDBStreams {
  private constructor(private readonly client: AWSDynamoDBStreams) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'streams' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = [] as const;
  
  describeStream: (params: RawParamsFrom<'describeStream'>) => Promise<ReturnTypeFrom<'describeStream'>>  = async params => {
  // undefined
    return this.client.describeStream(params as any).promise();
  }

  getRecords: (params: RawParamsFrom<'getRecords'>) => Promise<ReturnTypeFrom<'getRecords'>>  = async params => {
  // undefined
    return this.client.getRecords(params as any).promise();
  }

  getShardIterator: (params: RawParamsFrom<'getShardIterator'>) => Promise<ReturnTypeFrom<'getShardIterator'>>  = async params => {
  // undefined
    return this.client.getShardIterator(params as any).promise();
  }

  listStreams: (params: RawParamsFrom<'listStreams'>) => Promise<ReturnTypeFrom<'listStreams'>>  = async params => {
  // undefined
    return this.client.listStreams(params as any).promise();
  }
  
  static fromClient(client: AWSDynamoDBStreams): DynamoDBStreams {
    return new DynamoDBStreams(client) as any;
  }
  
  static client(options?: AWSDynamoDBStreams.Types.ClientConfiguration): DynamoDBStreams {
    return new DynamoDBStreams(new AWSDynamoDBStreams(options)) as any;
  }
}  
