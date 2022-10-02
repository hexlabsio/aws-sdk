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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'streams';
    global: false;
    category: 'Database'
    topLevelCalls: readonly [];
    
  describeStream: FunctionTypeFrom<'describeStream'>;

  getRecords: FunctionTypeFrom<'getRecords'>;

  getShardIterator: FunctionTypeFrom<'getShardIterator'>;

  listStreams: FunctionTypeFrom<'listStreams'>
}
 
export class DynamoDBStreams implements ClientType {
  private constructor(private readonly client: AWSDynamoDBStreams) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'streams';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = [] as const;
  
  async describeStream(...args: any): Promise<any> {
  // undefined
    return this.client.describeStream(...args).promise()
  }

  async getRecords(...args: any): Promise<any> {
  // undefined
    return this.client.getRecords(...args).promise()
  }

  async getShardIterator(...args: any): Promise<any> {
  // undefined
    return this.client.getShardIterator(...args).promise()
  }

  async listStreams(...args: any): Promise<any> {
  // undefined
    return this.client.listStreams(...args).promise()
  }
  
  static fromClient(client: AWSDynamoDBStreams): ClientType {
    return new DynamoDBStreams(client) as any;
  }
  
  static client(options?: AWSDynamoDBStreams.Types.ClientConfiguration): ClientType {
    return new DynamoDBStreams(new AWSDynamoDBStreams(options)) as any;
  }
}  
