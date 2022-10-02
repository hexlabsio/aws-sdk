import { Request, CloudHSMV2 as AWSCloudHSMV2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudHSMV2> = AWSCloudHSMV2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudHSMV2> = AWSCloudHSMV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudHSMV2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudHSMV2, Extras> = AWSCloudHSMV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cloudhsmv2';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["describeBackups","describeClusters"];
    
  copyBackupToRegion: FunctionTypeFrom<'copyBackupToRegion'>;

  createCluster: FunctionTypeFrom<'createCluster'>;

  createHsm: FunctionTypeFrom<'createHsm'>;

  deleteBackup: FunctionTypeFrom<'deleteBackup'>;

  deleteCluster: FunctionTypeFrom<'deleteCluster'>;

  deleteHsm: FunctionTypeFrom<'deleteHsm'>;

  describeBackups: FunctionTypeFrom<'describeBackups'>;

  describeClusters: FunctionTypeFrom<'describeClusters'>;

  initializeCluster: FunctionTypeFrom<'initializeCluster'>;

  listTags: FunctionTypeFrom<'listTags'>;

  modifyBackupAttributes: FunctionTypeFrom<'modifyBackupAttributes'>;

  modifyCluster: FunctionTypeFrom<'modifyCluster'>;

  restoreBackup: FunctionTypeFrom<'restoreBackup'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class CloudHSMV2 implements ClientType {
  private constructor(private readonly client: AWSCloudHSMV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudhsmv2';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["describeBackups","describeClusters"] as const;
  
  async copyBackupToRegion(...args: any): Promise<any> {
  // undefined
    return this.client.copyBackupToRegion(...args).promise()
  }

  async createCluster(...args: any): Promise<any> {
  // undefined
    return this.client.createCluster(...args).promise()
  }

  async createHsm(...args: any): Promise<any> {
  // undefined
    return this.client.createHsm(...args).promise()
  }

  async deleteBackup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackup(...args).promise()
  }

  async deleteCluster(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCluster(...args).promise()
  }

  async deleteHsm(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHsm(...args).promise()
  }

  async describeBackups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeBackups(...args).promise()
  }

  async describeClusters(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeClusters(...args).promise()
  }

  async initializeCluster(...args: any): Promise<any> {
  // undefined
    return this.client.initializeCluster(...args).promise()
  }

  async listTags(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTags(...args).promise()
  }

  async modifyBackupAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.modifyBackupAttributes(...args).promise()
  }

  async modifyCluster(...args: any): Promise<any> {
  // undefined
    return this.client.modifyCluster(...args).promise()
  }

  async restoreBackup(...args: any): Promise<any> {
  // undefined
    return this.client.restoreBackup(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSCloudHSMV2): ClientType {
    return new CloudHSMV2(client) as any;
  }
  
  static client(options?: AWSCloudHSMV2.Types.ClientConfiguration): ClientType {
    return new CloudHSMV2(new AWSCloudHSMV2(options)) as any;
  }
}  
