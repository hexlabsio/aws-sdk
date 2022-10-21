import { Request, MediaStoreData as AWSMediaStoreData } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMediaStoreData> = AWSMediaStoreData[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMediaStoreData> = AWSMediaStoreData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMediaStoreData[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMediaStoreData, Extras> = AWSMediaStoreData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMediaStoreData> = AWSMediaStoreData[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MediaStoreData {
  private constructor(private readonly client: AWSMediaStoreData) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'data' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listItems"] as const;
  
  deleteObject: (params: RawParamsFrom<'deleteObject'>) => Promise<ReturnTypeFrom<'deleteObject'>>  = async params => {
  // undefined
    return this.client.deleteObject(params as any).promise();
  }

  describeObject: (params: RawParamsFrom<'describeObject'>) => Promise<ReturnTypeFrom<'describeObject'>>  = async params => {
  // undefined
    return this.client.describeObject(params as any).promise();
  }

  getObject: (params: RawParamsFrom<'getObject'>) => Promise<ReturnTypeFrom<'getObject'>>  = async params => {
  // undefined
    return this.client.getObject(params as any).promise();
  }

  listItems: (params: RawParamsFrom<'listItems'>) => Promise<ReturnTypeFrom<'listItems'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listItems(params as any).promise();
  }

  putObject: (params: RawParamsFrom<'putObject'>) => Promise<ReturnTypeFrom<'putObject'>>  = async params => {
  // undefined
    return this.client.putObject(params as any).promise();
  }
  
  static fromClient(client: AWSMediaStoreData): MediaStoreData {
    return new MediaStoreData(client) as any;
  }
  
  static client(options?: AWSMediaStoreData.Types.ClientConfiguration): MediaStoreData {
    return new MediaStoreData(new AWSMediaStoreData(options)) as any;
  }
}  
