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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSBackupStorage> = AWSBackupStorage[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class BackupStorage {
  private constructor(private readonly client: AWSBackupStorage) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'backupstorage' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  deleteObject: (params: RawParamsFrom<'deleteObject'>) => Promise<ReturnTypeFrom<'deleteObject'>>  = async params => {
  // undefined
    return this.client.deleteObject(params as any).promise();
  }

  getChunk: (params: RawParamsFrom<'getChunk'>) => Promise<ReturnTypeFrom<'getChunk'>>  = async params => {
  // undefined
    return this.client.getChunk(params as any).promise();
  }

  getObjectMetadata: (params: RawParamsFrom<'getObjectMetadata'>) => Promise<ReturnTypeFrom<'getObjectMetadata'>>  = async params => {
  // undefined
    return this.client.getObjectMetadata(params as any).promise();
  }

  listChunks: (params: RawParamsFrom<'listChunks'>) => Promise<ReturnTypeFrom<'listChunks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChunks(params as any).promise();
  }

  listObjects: (params: RawParamsFrom<'listObjects'>) => Promise<ReturnTypeFrom<'listObjects'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listObjects(params as any).promise();
  }

  notifyObjectComplete: (params: RawParamsFrom<'notifyObjectComplete'>) => Promise<ReturnTypeFrom<'notifyObjectComplete'>>  = async params => {
  // undefined
    return this.client.notifyObjectComplete(params as any).promise();
  }

  putChunk: (params: RawParamsFrom<'putChunk'>) => Promise<ReturnTypeFrom<'putChunk'>>  = async params => {
  // undefined
    return this.client.putChunk(params as any).promise();
  }

  putObject: (params: RawParamsFrom<'putObject'>) => Promise<ReturnTypeFrom<'putObject'>>  = async params => {
  // undefined
    return this.client.putObject(params as any).promise();
  }

  startObject: (params: RawParamsFrom<'startObject'>) => Promise<ReturnTypeFrom<'startObject'>>  = async params => {
  // undefined
    return this.client.startObject(params as any).promise();
  }
  
  static fromClient(client: AWSBackupStorage): BackupStorage {
    return new BackupStorage(client) as any;
  }
  
  static client(options?: AWSBackupStorage.Types.ClientConfiguration): BackupStorage {
    return new BackupStorage(new AWSBackupStorage(options)) as any;
  }
}  
