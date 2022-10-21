import { Request, RDSDataService as AWSRDSDataService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRDSDataService> = AWSRDSDataService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRDSDataService> = AWSRDSDataService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRDSDataService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRDSDataService, Extras> = AWSRDSDataService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRDSDataService> = AWSRDSDataService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class RDSDataService {
  private constructor(private readonly client: AWSRDSDataService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rds-data' as const;
  public readonly global = false as const;
  public readonly category = 'Database' as const;
  public readonly topLevelCalls = [] as const;
  
  batchExecuteStatement: (params: RawParamsFrom<'batchExecuteStatement'>) => Promise<ReturnTypeFrom<'batchExecuteStatement'>>  = async params => {
  // undefined
    return this.client.batchExecuteStatement(params as any).promise();
  }

  beginTransaction: (params: RawParamsFrom<'beginTransaction'>) => Promise<ReturnTypeFrom<'beginTransaction'>>  = async params => {
  // undefined
    return this.client.beginTransaction(params as any).promise();
  }

  commitTransaction: (params: RawParamsFrom<'commitTransaction'>) => Promise<ReturnTypeFrom<'commitTransaction'>>  = async params => {
  // undefined
    return this.client.commitTransaction(params as any).promise();
  }

  executeSql: (params: RawParamsFrom<'executeSql'>) => Promise<ReturnTypeFrom<'executeSql'>>  = async params => {
  // undefined
    return this.client.executeSql(params as any).promise();
  }

  executeStatement: (params: RawParamsFrom<'executeStatement'>) => Promise<ReturnTypeFrom<'executeStatement'>>  = async params => {
  // undefined
    return this.client.executeStatement(params as any).promise();
  }

  rollbackTransaction: (params: RawParamsFrom<'rollbackTransaction'>) => Promise<ReturnTypeFrom<'rollbackTransaction'>>  = async params => {
  // undefined
    return this.client.rollbackTransaction(params as any).promise();
  }
  
  static fromClient(client: AWSRDSDataService): RDSDataService {
    return new RDSDataService(client) as any;
  }
  
  static client(options?: AWSRDSDataService.Types.ClientConfiguration): RDSDataService {
    return new RDSDataService(new AWSRDSDataService(options)) as any;
  }
}  
