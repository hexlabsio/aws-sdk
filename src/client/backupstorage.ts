import { Request, BackupStorage as AWSBackupStorage } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSBackupStorage> = AWSBackupStorage[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSBackupStorage> = AWSBackupStorage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSBackupStorage[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSBackupStorage, Extras> = AWSBackupStorage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'backupstorage';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  deleteObject: FunctionTypeFrom<'deleteObject'>;

  getChunk: FunctionTypeFrom<'getChunk'>;

  getObjectMetadata: FunctionTypeFrom<'getObjectMetadata'>;

  listChunks: FunctionTypeFrom<'listChunks'>;

  listObjects: FunctionTypeFrom<'listObjects'>;

  notifyObjectComplete: FunctionTypeFrom<'notifyObjectComplete'>;

  putChunk: FunctionTypeFrom<'putChunk'>;

  putObject: FunctionTypeFrom<'putObject'>;

  startObject: FunctionTypeFrom<'startObject'>
}
 
export class BackupStorage implements ClientType {
  private constructor(private readonly client: AWSBackupStorage) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'backupstorage';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async deleteObject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteObject(...args).promise()
  }

  async getChunk(...args: any): Promise<any> {
  // undefined
    return this.client.getChunk(...args).promise()
  }

  async getObjectMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getObjectMetadata(...args).promise()
  }

  async listChunks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChunks(...args).promise()
  }

  async listObjects(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjects(...args).promise()
  }

  async notifyObjectComplete(...args: any): Promise<any> {
  // undefined
    return this.client.notifyObjectComplete(...args).promise()
  }

  async putChunk(...args: any): Promise<any> {
  // undefined
    return this.client.putChunk(...args).promise()
  }

  async putObject(...args: any): Promise<any> {
  // undefined
    return this.client.putObject(...args).promise()
  }

  async startObject(...args: any): Promise<any> {
  // undefined
    return this.client.startObject(...args).promise()
  }
  
  static fromClient(client: AWSBackupStorage): ClientType {
    return new BackupStorage(client) as any;
  }
  
  static client(options?: AWSBackupStorage.Types.ClientConfiguration): ClientType {
    return new BackupStorage(new AWSBackupStorage(options)) as any;
  }
}  
