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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cloudhsm';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly [];
    
  addTagsToResource: FunctionTypeFrom<'addTagsToResource'>;

  createHapg: FunctionTypeFrom<'createHapg'>;

  createHsm: FunctionTypeFrom<'createHsm'>;

  createLunaClient: FunctionTypeFrom<'createLunaClient'>;

  deleteHapg: FunctionTypeFrom<'deleteHapg'>;

  deleteHsm: FunctionTypeFrom<'deleteHsm'>;

  deleteLunaClient: FunctionTypeFrom<'deleteLunaClient'>;

  describeHapg: FunctionTypeFrom<'describeHapg'>;

  describeHsm: FunctionTypeFrom<'describeHsm'>;

  describeLunaClient: FunctionTypeFrom<'describeLunaClient'>;

  getConfig: FunctionTypeFrom<'getConfig'>;

  listAvailableZones: FunctionTypeFrom<'listAvailableZones'>;

  listHapgs: FunctionTypeFrom<'listHapgs'>;

  listHsms: FunctionTypeFrom<'listHsms'>;

  listLunaClients: FunctionTypeFrom<'listLunaClients'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  modifyHapg: FunctionTypeFrom<'modifyHapg'>;

  modifyHsm: FunctionTypeFrom<'modifyHsm'>;

  modifyLunaClient: FunctionTypeFrom<'modifyLunaClient'>;

  removeTagsFromResource: FunctionTypeFrom<'removeTagsFromResource'>
}
 
export class CloudHSM implements ClientType {
  private constructor(private readonly client: AWSCloudHSM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudhsm';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = [] as const;
  
  async addTagsToResource(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToResource(...args).promise()
  }

  async createHapg(...args: any): Promise<any> {
  // undefined
    return this.client.createHapg(...args).promise()
  }

  async createHsm(...args: any): Promise<any> {
  // undefined
    return this.client.createHsm(...args).promise()
  }

  async createLunaClient(...args: any): Promise<any> {
  // undefined
    return this.client.createLunaClient(...args).promise()
  }

  async deleteHapg(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHapg(...args).promise()
  }

  async deleteHsm(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHsm(...args).promise()
  }

  async deleteLunaClient(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLunaClient(...args).promise()
  }

  async describeHapg(...args: any): Promise<any> {
  // undefined
    return this.client.describeHapg(...args).promise()
  }

  async describeHsm(...args: any): Promise<any> {
  // undefined
    return this.client.describeHsm(...args).promise()
  }

  async describeLunaClient(...args: any): Promise<any> {
  // undefined
    return this.client.describeLunaClient(...args).promise()
  }

  async getConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getConfig(...args).promise()
  }

  async listAvailableZones(...args: any): Promise<any> {
  // undefined
    return this.client.listAvailableZones(...args).promise()
  }

  async listHapgs(...args: any): Promise<any> {
  // undefined
    return this.client.listHapgs(...args).promise()
  }

  async listHsms(...args: any): Promise<any> {
  // undefined
    return this.client.listHsms(...args).promise()
  }

  async listLunaClients(...args: any): Promise<any> {
  // undefined
    return this.client.listLunaClients(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async modifyHapg(...args: any): Promise<any> {
  // undefined
    return this.client.modifyHapg(...args).promise()
  }

  async modifyHsm(...args: any): Promise<any> {
  // undefined
    return this.client.modifyHsm(...args).promise()
  }

  async modifyLunaClient(...args: any): Promise<any> {
  // undefined
    return this.client.modifyLunaClient(...args).promise()
  }

  async removeTagsFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromResource(...args).promise()
  }
  
  static fromClient(client: AWSCloudHSM): ClientType {
    return new CloudHSM(client) as any;
  }
  
  static client(options?: AWSCloudHSM.Types.ClientConfiguration): ClientType {
    return new CloudHSM(new AWSCloudHSM(options)) as any;
  }
}  
