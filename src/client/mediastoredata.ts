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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'data';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listItems"];
    
  deleteObject: FunctionTypeFrom<'deleteObject'>;

  describeObject: FunctionTypeFrom<'describeObject'>;

  getObject: FunctionTypeFrom<'getObject'>;

  listItems: FunctionTypeFrom<'listItems'>;

  putObject: FunctionTypeFrom<'putObject'>
}
 
export class MediaStoreData implements ClientType {
  private constructor(private readonly client: AWSMediaStoreData) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'data';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listItems"] as const;
  
  async deleteObject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteObject(...args).promise()
  }

  async describeObject(...args: any): Promise<any> {
  // undefined
    return this.client.describeObject(...args).promise()
  }

  async getObject(...args: any): Promise<any> {
  // undefined
    return this.client.getObject(...args).promise()
  }

  async listItems(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listItems(...args).promise()
  }

  async putObject(...args: any): Promise<any> {
  // undefined
    return this.client.putObject(...args).promise()
  }
  
  static fromClient(client: AWSMediaStoreData): ClientType {
    return new MediaStoreData(client) as any;
  }
  
  static client(options?: AWSMediaStoreData.Types.ClientConfiguration): ClientType {
    return new MediaStoreData(new AWSMediaStoreData(options)) as any;
  }
}  
