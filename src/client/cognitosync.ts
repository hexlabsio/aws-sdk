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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cognito-sync';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly [];
    
  bulkPublish: FunctionTypeFrom<'bulkPublish'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  describeDataset: FunctionTypeFrom<'describeDataset'>;

  describeIdentityPoolUsage: FunctionTypeFrom<'describeIdentityPoolUsage'>;

  describeIdentityUsage: FunctionTypeFrom<'describeIdentityUsage'>;

  getBulkPublishDetails: FunctionTypeFrom<'getBulkPublishDetails'>;

  getCognitoEvents: FunctionTypeFrom<'getCognitoEvents'>;

  getIdentityPoolConfiguration: FunctionTypeFrom<'getIdentityPoolConfiguration'>;

  listDatasets: FunctionTypeFrom<'listDatasets'>;

  listIdentityPoolUsage: FunctionTypeFrom<'listIdentityPoolUsage'>;

  listRecords: FunctionTypeFrom<'listRecords'>;

  registerDevice: FunctionTypeFrom<'registerDevice'>;

  setCognitoEvents: FunctionTypeFrom<'setCognitoEvents'>;

  setIdentityPoolConfiguration: FunctionTypeFrom<'setIdentityPoolConfiguration'>;

  subscribeToDataset: FunctionTypeFrom<'subscribeToDataset'>;

  unsubscribeFromDataset: FunctionTypeFrom<'unsubscribeFromDataset'>;

  updateRecords: FunctionTypeFrom<'updateRecords'>
}
 
export class CognitoSync implements ClientType {
  private constructor(private readonly client: AWSCognitoSync) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cognito-sync';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = [] as const;
  
  async bulkPublish(...args: any): Promise<any> {
  // undefined
    return this.client.bulkPublish(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async describeDataset(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataset(...args).promise()
  }

  async describeIdentityPoolUsage(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdentityPoolUsage(...args).promise()
  }

  async describeIdentityUsage(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdentityUsage(...args).promise()
  }

  async getBulkPublishDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getBulkPublishDetails(...args).promise()
  }

  async getCognitoEvents(...args: any): Promise<any> {
  // undefined
    return this.client.getCognitoEvents(...args).promise()
  }

  async getIdentityPoolConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityPoolConfiguration(...args).promise()
  }

  async listDatasets(...args: any): Promise<any> {
  // undefined
    return this.client.listDatasets(...args).promise()
  }

  async listIdentityPoolUsage(...args: any): Promise<any> {
  // undefined
    return this.client.listIdentityPoolUsage(...args).promise()
  }

  async listRecords(...args: any): Promise<any> {
  // undefined
    return this.client.listRecords(...args).promise()
  }

  async registerDevice(...args: any): Promise<any> {
  // undefined
    return this.client.registerDevice(...args).promise()
  }

  async setCognitoEvents(...args: any): Promise<any> {
  // undefined
    return this.client.setCognitoEvents(...args).promise()
  }

  async setIdentityPoolConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.setIdentityPoolConfiguration(...args).promise()
  }

  async subscribeToDataset(...args: any): Promise<any> {
  // undefined
    return this.client.subscribeToDataset(...args).promise()
  }

  async unsubscribeFromDataset(...args: any): Promise<any> {
  // undefined
    return this.client.unsubscribeFromDataset(...args).promise()
  }

  async updateRecords(...args: any): Promise<any> {
  // undefined
    return this.client.updateRecords(...args).promise()
  }
  
  static fromClient(client: AWSCognitoSync): ClientType {
    return new CognitoSync(client) as any;
  }
  
  static client(options?: AWSCognitoSync.Types.ClientConfiguration): ClientType {
    return new CognitoSync(new AWSCognitoSync(options)) as any;
  }
}  
