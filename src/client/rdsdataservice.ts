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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'rds-data';
    global: false;
    category: 'Database'
    topLevelCalls: readonly [];
    
  batchExecuteStatement: FunctionTypeFrom<'batchExecuteStatement'>;

  beginTransaction: FunctionTypeFrom<'beginTransaction'>;

  commitTransaction: FunctionTypeFrom<'commitTransaction'>;

  executeSql: FunctionTypeFrom<'executeSql'>;

  executeStatement: FunctionTypeFrom<'executeStatement'>;

  rollbackTransaction: FunctionTypeFrom<'rollbackTransaction'>
}
 
export class RDSDataService implements ClientType {
  private constructor(private readonly client: AWSRDSDataService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rds-data';
  public readonly global = false;
  public readonly category = 'Database';
  public readonly topLevelCalls = [] as const;
  
  async batchExecuteStatement(...args: any): Promise<any> {
  // undefined
    return this.client.batchExecuteStatement(...args).promise()
  }

  async beginTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.beginTransaction(...args).promise()
  }

  async commitTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.commitTransaction(...args).promise()
  }

  async executeSql(...args: any): Promise<any> {
  // undefined
    return this.client.executeSql(...args).promise()
  }

  async executeStatement(...args: any): Promise<any> {
  // undefined
    return this.client.executeStatement(...args).promise()
  }

  async rollbackTransaction(...args: any): Promise<any> {
  // undefined
    return this.client.rollbackTransaction(...args).promise()
  }
  
  static fromClient(client: AWSRDSDataService): ClientType {
    return new RDSDataService(client) as any;
  }
  
  static client(options?: AWSRDSDataService.Types.ClientConfiguration): ClientType {
    return new RDSDataService(new AWSRDSDataService(options)) as any;
  }
}  
