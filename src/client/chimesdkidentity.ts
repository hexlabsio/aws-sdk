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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSChimeSDKIdentity> = AWSChimeSDKIdentity[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ChimeSDKIdentity {
  private constructor(private readonly client: AWSChimeSDKIdentity) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'identity-chime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAppInstances"] as const;
  
  createAppInstance: (params: RawParamsFrom<'createAppInstance'>) => Promise<ReturnTypeFrom<'createAppInstance'>>  = async params => {
  // undefined
    return this.client.createAppInstance(params as any).promise();
  }

  createAppInstanceAdmin: (params: RawParamsFrom<'createAppInstanceAdmin'>) => Promise<ReturnTypeFrom<'createAppInstanceAdmin'>>  = async params => {
  // undefined
    return this.client.createAppInstanceAdmin(params as any).promise();
  }

  createAppInstanceUser: (params: RawParamsFrom<'createAppInstanceUser'>) => Promise<ReturnTypeFrom<'createAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.createAppInstanceUser(params as any).promise();
  }

  deleteAppInstance: (params: RawParamsFrom<'deleteAppInstance'>) => Promise<ReturnTypeFrom<'deleteAppInstance'>>  = async params => {
  // undefined
    return this.client.deleteAppInstance(params as any).promise();
  }

  deleteAppInstanceAdmin: (params: RawParamsFrom<'deleteAppInstanceAdmin'>) => Promise<ReturnTypeFrom<'deleteAppInstanceAdmin'>>  = async params => {
  // undefined
    return this.client.deleteAppInstanceAdmin(params as any).promise();
  }

  deleteAppInstanceUser: (params: RawParamsFrom<'deleteAppInstanceUser'>) => Promise<ReturnTypeFrom<'deleteAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.deleteAppInstanceUser(params as any).promise();
  }

  deregisterAppInstanceUserEndpoint: (params: RawParamsFrom<'deregisterAppInstanceUserEndpoint'>) => Promise<ReturnTypeFrom<'deregisterAppInstanceUserEndpoint'>>  = async params => {
  // undefined
    return this.client.deregisterAppInstanceUserEndpoint(params as any).promise();
  }

  describeAppInstance: (params: RawParamsFrom<'describeAppInstance'>) => Promise<ReturnTypeFrom<'describeAppInstance'>>  = async params => {
  // undefined
    return this.client.describeAppInstance(params as any).promise();
  }

  describeAppInstanceAdmin: (params: RawParamsFrom<'describeAppInstanceAdmin'>) => Promise<ReturnTypeFrom<'describeAppInstanceAdmin'>>  = async params => {
  // undefined
    return this.client.describeAppInstanceAdmin(params as any).promise();
  }

  describeAppInstanceUser: (params: RawParamsFrom<'describeAppInstanceUser'>) => Promise<ReturnTypeFrom<'describeAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.describeAppInstanceUser(params as any).promise();
  }

  describeAppInstanceUserEndpoint: (params: RawParamsFrom<'describeAppInstanceUserEndpoint'>) => Promise<ReturnTypeFrom<'describeAppInstanceUserEndpoint'>>  = async params => {
  // undefined
    return this.client.describeAppInstanceUserEndpoint(params as any).promise();
  }

  getAppInstanceRetentionSettings: (params: RawParamsFrom<'getAppInstanceRetentionSettings'>) => Promise<ReturnTypeFrom<'getAppInstanceRetentionSettings'>>  = async params => {
  // undefined
    return this.client.getAppInstanceRetentionSettings(params as any).promise();
  }

  listAppInstanceAdmins: (params: RawParamsFrom<'listAppInstanceAdmins'>) => Promise<ReturnTypeFrom<'listAppInstanceAdmins'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceAdmins(params as any).promise();
  }

  listAppInstanceUserEndpoints: (params: RawParamsFrom<'listAppInstanceUserEndpoints'>) => Promise<ReturnTypeFrom<'listAppInstanceUserEndpoints'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceUserEndpoints(params as any).promise();
  }

  listAppInstanceUsers: (params: RawParamsFrom<'listAppInstanceUsers'>) => Promise<ReturnTypeFrom<'listAppInstanceUsers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstanceUsers(params as any).promise();
  }

  listAppInstances: (params: RawParamsFrom<'listAppInstances'>) => Promise<ReturnTypeFrom<'listAppInstances'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAppInstances(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putAppInstanceRetentionSettings: (params: RawParamsFrom<'putAppInstanceRetentionSettings'>) => Promise<ReturnTypeFrom<'putAppInstanceRetentionSettings'>>  = async params => {
  // undefined
    return this.client.putAppInstanceRetentionSettings(params as any).promise();
  }

  registerAppInstanceUserEndpoint: (params: RawParamsFrom<'registerAppInstanceUserEndpoint'>) => Promise<ReturnTypeFrom<'registerAppInstanceUserEndpoint'>>  = async params => {
  // undefined
    return this.client.registerAppInstanceUserEndpoint(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAppInstance: (params: RawParamsFrom<'updateAppInstance'>) => Promise<ReturnTypeFrom<'updateAppInstance'>>  = async params => {
  // undefined
    return this.client.updateAppInstance(params as any).promise();
  }

  updateAppInstanceUser: (params: RawParamsFrom<'updateAppInstanceUser'>) => Promise<ReturnTypeFrom<'updateAppInstanceUser'>>  = async params => {
  // undefined
    return this.client.updateAppInstanceUser(params as any).promise();
  }

  updateAppInstanceUserEndpoint: (params: RawParamsFrom<'updateAppInstanceUserEndpoint'>) => Promise<ReturnTypeFrom<'updateAppInstanceUserEndpoint'>>  = async params => {
  // undefined
    return this.client.updateAppInstanceUserEndpoint(params as any).promise();
  }
  
  static fromClient(client: AWSChimeSDKIdentity): ChimeSDKIdentity {
    return new ChimeSDKIdentity(client) as any;
  }
  
  static client(options?: AWSChimeSDKIdentity.Types.ClientConfiguration): ChimeSDKIdentity {
    return new ChimeSDKIdentity(new AWSChimeSDKIdentity(options)) as any;
  }
}  
