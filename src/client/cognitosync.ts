import { Request, CognitoSync as AWSCognitoSync } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCognitoSync> = AWSCognitoSync[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCognitoSync> = AWSCognitoSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCognitoSync[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCognitoSync, Extras> = AWSCognitoSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCognitoSync> = AWSCognitoSync[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CognitoSync {
  private constructor(private readonly client: AWSCognitoSync) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cognito-sync' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = [] as const;
  
  bulkPublish: (params: RawParamsFrom<'bulkPublish'>) => Promise<ReturnTypeFrom<'bulkPublish'>>  = async params => {
  // undefined
    return this.client.bulkPublish(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  describeDataset: (params: RawParamsFrom<'describeDataset'>) => Promise<ReturnTypeFrom<'describeDataset'>>  = async params => {
  // undefined
    return this.client.describeDataset(params as any).promise();
  }

  describeIdentityPoolUsage: (params: RawParamsFrom<'describeIdentityPoolUsage'>) => Promise<ReturnTypeFrom<'describeIdentityPoolUsage'>>  = async params => {
  // undefined
    return this.client.describeIdentityPoolUsage(params as any).promise();
  }

  describeIdentityUsage: (params: RawParamsFrom<'describeIdentityUsage'>) => Promise<ReturnTypeFrom<'describeIdentityUsage'>>  = async params => {
  // undefined
    return this.client.describeIdentityUsage(params as any).promise();
  }

  getBulkPublishDetails: (params: RawParamsFrom<'getBulkPublishDetails'>) => Promise<ReturnTypeFrom<'getBulkPublishDetails'>>  = async params => {
  // undefined
    return this.client.getBulkPublishDetails(params as any).promise();
  }

  getCognitoEvents: (params: RawParamsFrom<'getCognitoEvents'>) => Promise<ReturnTypeFrom<'getCognitoEvents'>>  = async params => {
  // undefined
    return this.client.getCognitoEvents(params as any).promise();
  }

  getIdentityPoolConfiguration: (params: RawParamsFrom<'getIdentityPoolConfiguration'>) => Promise<ReturnTypeFrom<'getIdentityPoolConfiguration'>>  = async params => {
  // undefined
    return this.client.getIdentityPoolConfiguration(params as any).promise();
  }

  listDatasets: (params: RawParamsFrom<'listDatasets'>) => Promise<ReturnTypeFrom<'listDatasets'>>  = async params => {
  // undefined
    return this.client.listDatasets(params as any).promise();
  }

  listIdentityPoolUsage: (params: RawParamsFrom<'listIdentityPoolUsage'>) => Promise<ReturnTypeFrom<'listIdentityPoolUsage'>>  = async params => {
  // undefined
    return this.client.listIdentityPoolUsage(params as any).promise();
  }

  listRecords: (params: RawParamsFrom<'listRecords'>) => Promise<ReturnTypeFrom<'listRecords'>>  = async params => {
  // undefined
    return this.client.listRecords(params as any).promise();
  }

  registerDevice: (params: RawParamsFrom<'registerDevice'>) => Promise<ReturnTypeFrom<'registerDevice'>>  = async params => {
  // undefined
    return this.client.registerDevice(params as any).promise();
  }

  setCognitoEvents: (params: RawParamsFrom<'setCognitoEvents'>) => Promise<ReturnTypeFrom<'setCognitoEvents'>>  = async params => {
  // undefined
    return this.client.setCognitoEvents(params as any).promise();
  }

  setIdentityPoolConfiguration: (params: RawParamsFrom<'setIdentityPoolConfiguration'>) => Promise<ReturnTypeFrom<'setIdentityPoolConfiguration'>>  = async params => {
  // undefined
    return this.client.setIdentityPoolConfiguration(params as any).promise();
  }

  subscribeToDataset: (params: RawParamsFrom<'subscribeToDataset'>) => Promise<ReturnTypeFrom<'subscribeToDataset'>>  = async params => {
  // undefined
    return this.client.subscribeToDataset(params as any).promise();
  }

  unsubscribeFromDataset: (params: RawParamsFrom<'unsubscribeFromDataset'>) => Promise<ReturnTypeFrom<'unsubscribeFromDataset'>>  = async params => {
  // undefined
    return this.client.unsubscribeFromDataset(params as any).promise();
  }

  updateRecords: (params: RawParamsFrom<'updateRecords'>) => Promise<ReturnTypeFrom<'updateRecords'>>  = async params => {
  // undefined
    return this.client.updateRecords(params as any).promise();
  }
  
  static fromClient(client: AWSCognitoSync): CognitoSync {
    return new CognitoSync(client) as any;
  }
  
  static client(options?: AWSCognitoSync.Types.ClientConfiguration): CognitoSync {
    return new CognitoSync(new AWSCognitoSync(options)) as any;
  }
}  
