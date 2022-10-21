import { Request, CloudHSM as AWSCloudHSM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudHSM> = AWSCloudHSM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudHSM> = AWSCloudHSM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudHSM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudHSM, Extras> = AWSCloudHSM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudHSM> = AWSCloudHSM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudHSM {
  private constructor(private readonly client: AWSCloudHSM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudhsm' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = [] as const;
  
  addTagsToResource: (params: RawParamsFrom<'addTagsToResource'>) => Promise<ReturnTypeFrom<'addTagsToResource'>>  = async params => {
  // undefined
    return this.client.addTagsToResource(params as any).promise();
  }

  createHapg: (params: RawParamsFrom<'createHapg'>) => Promise<ReturnTypeFrom<'createHapg'>>  = async params => {
  // undefined
    return this.client.createHapg(params as any).promise();
  }

  createHsm: (params: RawParamsFrom<'createHsm'>) => Promise<ReturnTypeFrom<'createHsm'>>  = async params => {
  // undefined
    return this.client.createHsm(params as any).promise();
  }

  createLunaClient: (params: RawParamsFrom<'createLunaClient'>) => Promise<ReturnTypeFrom<'createLunaClient'>>  = async params => {
  // undefined
    return this.client.createLunaClient(params as any).promise();
  }

  deleteHapg: (params: RawParamsFrom<'deleteHapg'>) => Promise<ReturnTypeFrom<'deleteHapg'>>  = async params => {
  // undefined
    return this.client.deleteHapg(params as any).promise();
  }

  deleteHsm: (params: RawParamsFrom<'deleteHsm'>) => Promise<ReturnTypeFrom<'deleteHsm'>>  = async params => {
  // undefined
    return this.client.deleteHsm(params as any).promise();
  }

  deleteLunaClient: (params: RawParamsFrom<'deleteLunaClient'>) => Promise<ReturnTypeFrom<'deleteLunaClient'>>  = async params => {
  // undefined
    return this.client.deleteLunaClient(params as any).promise();
  }

  describeHapg: (params: RawParamsFrom<'describeHapg'>) => Promise<ReturnTypeFrom<'describeHapg'>>  = async params => {
  // undefined
    return this.client.describeHapg(params as any).promise();
  }

  describeHsm: (params: RawParamsFrom<'describeHsm'>) => Promise<ReturnTypeFrom<'describeHsm'>>  = async params => {
  // undefined
    return this.client.describeHsm(params as any).promise();
  }

  describeLunaClient: (params: RawParamsFrom<'describeLunaClient'>) => Promise<ReturnTypeFrom<'describeLunaClient'>>  = async params => {
  // undefined
    return this.client.describeLunaClient(params as any).promise();
  }

  getConfig: (params: RawParamsFrom<'getConfig'>) => Promise<ReturnTypeFrom<'getConfig'>>  = async params => {
  // undefined
    return this.client.getConfig(params as any).promise();
  }

  listAvailableZones: (params: RawParamsFrom<'listAvailableZones'>) => Promise<ReturnTypeFrom<'listAvailableZones'>>  = async params => {
  // undefined
    return this.client.listAvailableZones(params as any).promise();
  }

  listHapgs: (params: RawParamsFrom<'listHapgs'>) => Promise<ReturnTypeFrom<'listHapgs'>>  = async params => {
  // undefined
    return this.client.listHapgs(params as any).promise();
  }

  listHsms: (params: RawParamsFrom<'listHsms'>) => Promise<ReturnTypeFrom<'listHsms'>>  = async params => {
  // undefined
    return this.client.listHsms(params as any).promise();
  }

  listLunaClients: (params: RawParamsFrom<'listLunaClients'>) => Promise<ReturnTypeFrom<'listLunaClients'>>  = async params => {
  // undefined
    return this.client.listLunaClients(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  modifyHapg: (params: RawParamsFrom<'modifyHapg'>) => Promise<ReturnTypeFrom<'modifyHapg'>>  = async params => {
  // undefined
    return this.client.modifyHapg(params as any).promise();
  }

  modifyHsm: (params: RawParamsFrom<'modifyHsm'>) => Promise<ReturnTypeFrom<'modifyHsm'>>  = async params => {
  // undefined
    return this.client.modifyHsm(params as any).promise();
  }

  modifyLunaClient: (params: RawParamsFrom<'modifyLunaClient'>) => Promise<ReturnTypeFrom<'modifyLunaClient'>>  = async params => {
  // undefined
    return this.client.modifyLunaClient(params as any).promise();
  }

  removeTagsFromResource: (params: RawParamsFrom<'removeTagsFromResource'>) => Promise<ReturnTypeFrom<'removeTagsFromResource'>>  = async params => {
  // undefined
    return this.client.removeTagsFromResource(params as any).promise();
  }
  
  static fromClient(client: AWSCloudHSM): CloudHSM {
    return new CloudHSM(client) as any;
  }
  
  static client(options?: AWSCloudHSM.Types.ClientConfiguration): CloudHSM {
    return new CloudHSM(new AWSCloudHSM(options)) as any;
  }
}  
