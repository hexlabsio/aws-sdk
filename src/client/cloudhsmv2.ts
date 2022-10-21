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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudHSMV2> = AWSCloudHSMV2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudHSMV2 {
  private constructor(private readonly client: AWSCloudHSMV2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudhsmv2' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["describeBackups","describeClusters"] as const;
  
  copyBackupToRegion: (params: RawParamsFrom<'copyBackupToRegion'>) => Promise<ReturnTypeFrom<'copyBackupToRegion'>>  = async params => {
  // undefined
    return this.client.copyBackupToRegion(params as any).promise();
  }

  createCluster: (params: RawParamsFrom<'createCluster'>) => Promise<ReturnTypeFrom<'createCluster'>>  = async params => {
  // undefined
    return this.client.createCluster(params as any).promise();
  }

  createHsm: (params: RawParamsFrom<'createHsm'>) => Promise<ReturnTypeFrom<'createHsm'>>  = async params => {
  // undefined
    return this.client.createHsm(params as any).promise();
  }

  deleteBackup: (params: RawParamsFrom<'deleteBackup'>) => Promise<ReturnTypeFrom<'deleteBackup'>>  = async params => {
  // undefined
    return this.client.deleteBackup(params as any).promise();
  }

  deleteCluster: (params: RawParamsFrom<'deleteCluster'>) => Promise<ReturnTypeFrom<'deleteCluster'>>  = async params => {
  // undefined
    return this.client.deleteCluster(params as any).promise();
  }

  deleteHsm: (params: RawParamsFrom<'deleteHsm'>) => Promise<ReturnTypeFrom<'deleteHsm'>>  = async params => {
  // undefined
    return this.client.deleteHsm(params as any).promise();
  }

  describeBackups: (params: RawParamsFrom<'describeBackups'>) => Promise<ReturnTypeFrom<'describeBackups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeBackups(params as any).promise();
  }

  describeClusters: (params: RawParamsFrom<'describeClusters'>) => Promise<ReturnTypeFrom<'describeClusters'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeClusters(params as any).promise();
  }

  initializeCluster: (params: RawParamsFrom<'initializeCluster'>) => Promise<ReturnTypeFrom<'initializeCluster'>>  = async params => {
  // undefined
    return this.client.initializeCluster(params as any).promise();
  }

  listTags: (params: RawParamsFrom<'listTags'>) => Promise<ReturnTypeFrom<'listTags'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTags(params as any).promise();
  }

  modifyBackupAttributes: (params: RawParamsFrom<'modifyBackupAttributes'>) => Promise<ReturnTypeFrom<'modifyBackupAttributes'>>  = async params => {
  // undefined
    return this.client.modifyBackupAttributes(params as any).promise();
  }

  modifyCluster: (params: RawParamsFrom<'modifyCluster'>) => Promise<ReturnTypeFrom<'modifyCluster'>>  = async params => {
  // undefined
    return this.client.modifyCluster(params as any).promise();
  }

  restoreBackup: (params: RawParamsFrom<'restoreBackup'>) => Promise<ReturnTypeFrom<'restoreBackup'>>  = async params => {
  // undefined
    return this.client.restoreBackup(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSCloudHSMV2): CloudHSMV2 {
    return new CloudHSMV2(client) as any;
  }
  
  static client(options?: AWSCloudHSMV2.Types.ClientConfiguration): CloudHSMV2 {
    return new CloudHSMV2(new AWSCloudHSMV2(options)) as any;
  }
}  
