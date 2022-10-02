import { Request, ChimeSDKIdentity as AWSChimeSDKIdentity } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSChimeSDKIdentity> = AWSChimeSDKIdentity[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSChimeSDKIdentity> = AWSChimeSDKIdentity[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSChimeSDKIdentity[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSChimeSDKIdentity, Extras> = AWSChimeSDKIdentity[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'identity-chime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listAppInstances"];
    
  createAppInstance: FunctionTypeFrom<'createAppInstance'>;

  createAppInstanceAdmin: FunctionTypeFrom<'createAppInstanceAdmin'>;

  createAppInstanceUser: FunctionTypeFrom<'createAppInstanceUser'>;

  deleteAppInstance: FunctionTypeFrom<'deleteAppInstance'>;

  deleteAppInstanceAdmin: FunctionTypeFrom<'deleteAppInstanceAdmin'>;

  deleteAppInstanceUser: FunctionTypeFrom<'deleteAppInstanceUser'>;

  deregisterAppInstanceUserEndpoint: FunctionTypeFrom<'deregisterAppInstanceUserEndpoint'>;

  describeAppInstance: FunctionTypeFrom<'describeAppInstance'>;

  describeAppInstanceAdmin: FunctionTypeFrom<'describeAppInstanceAdmin'>;

  describeAppInstanceUser: FunctionTypeFrom<'describeAppInstanceUser'>;

  describeAppInstanceUserEndpoint: FunctionTypeFrom<'describeAppInstanceUserEndpoint'>;

  getAppInstanceRetentionSettings: FunctionTypeFrom<'getAppInstanceRetentionSettings'>;

  listAppInstanceAdmins: FunctionTypeFrom<'listAppInstanceAdmins'>;

  listAppInstanceUserEndpoints: FunctionTypeFrom<'listAppInstanceUserEndpoints'>;

  listAppInstanceUsers: FunctionTypeFrom<'listAppInstanceUsers'>;

  listAppInstances: FunctionTypeFrom<'listAppInstances'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putAppInstanceRetentionSettings: FunctionTypeFrom<'putAppInstanceRetentionSettings'>;

  registerAppInstanceUserEndpoint: FunctionTypeFrom<'registerAppInstanceUserEndpoint'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAppInstance: FunctionTypeFrom<'updateAppInstance'>;

  updateAppInstanceUser: FunctionTypeFrom<'updateAppInstanceUser'>;

  updateAppInstanceUserEndpoint: FunctionTypeFrom<'updateAppInstanceUserEndpoint'>
}
 
export class ChimeSDKIdentity implements ClientType {
  private constructor(private readonly client: AWSChimeSDKIdentity) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'identity-chime';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listAppInstances"] as const;
  
  async createAppInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createAppInstance(...args).promise()
  }

  async createAppInstanceAdmin(...args: any): Promise<any> {
  // undefined
    return this.client.createAppInstanceAdmin(...args).promise()
  }

  async createAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.createAppInstanceUser(...args).promise()
  }

  async deleteAppInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppInstance(...args).promise()
  }

  async deleteAppInstanceAdmin(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppInstanceAdmin(...args).promise()
  }

  async deleteAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppInstanceUser(...args).promise()
  }

  async deregisterAppInstanceUserEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterAppInstanceUserEndpoint(...args).promise()
  }

  async describeAppInstance(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppInstance(...args).promise()
  }

  async describeAppInstanceAdmin(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppInstanceAdmin(...args).promise()
  }

  async describeAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppInstanceUser(...args).promise()
  }

  async describeAppInstanceUserEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppInstanceUserEndpoint(...args).promise()
  }

  async getAppInstanceRetentionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.getAppInstanceRetentionSettings(...args).promise()
  }

  async listAppInstanceAdmins(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceAdmins(...args).promise()
  }

  async listAppInstanceUserEndpoints(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceUserEndpoints(...args).promise()
  }

  async listAppInstanceUsers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceUsers(...args).promise()
  }

  async listAppInstances(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstances(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putAppInstanceRetentionSettings(...args: any): Promise<any> {
  // undefined
    return this.client.putAppInstanceRetentionSettings(...args).promise()
  }

  async registerAppInstanceUserEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.registerAppInstanceUserEndpoint(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAppInstance(...args: any): Promise<any> {
  // undefined
    return this.client.updateAppInstance(...args).promise()
  }

  async updateAppInstanceUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateAppInstanceUser(...args).promise()
  }

  async updateAppInstanceUserEndpoint(...args: any): Promise<any> {
  // undefined
    return this.client.updateAppInstanceUserEndpoint(...args).promise()
  }
  
  static fromClient(client: AWSChimeSDKIdentity): ClientType {
    return new ChimeSDKIdentity(client) as any;
  }
  
  static client(options?: AWSChimeSDKIdentity.Types.ClientConfiguration): ClientType {
    return new ChimeSDKIdentity(new AWSChimeSDKIdentity(options)) as any;
  }
}  
