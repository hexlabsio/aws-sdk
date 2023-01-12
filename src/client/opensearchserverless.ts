import { Request, OpenSearchServerless as AWSOpenSearchServerless } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSOpenSearchServerless> = AWSOpenSearchServerless[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSOpenSearchServerless> = AWSOpenSearchServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSOpenSearchServerless[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSOpenSearchServerless, Extras> = AWSOpenSearchServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSOpenSearchServerless> = AWSOpenSearchServerless[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class OpenSearchServerless {
  private constructor(private readonly client: AWSOpenSearchServerless) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'aoss' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listCollections","listVpcEndpoints"] as const;
  
  batchGetCollection: (params: RawParamsFrom<'batchGetCollection'>) => Promise<ReturnTypeFrom<'batchGetCollection'>>  = async params => {
  // undefined
    return this.client.batchGetCollection(params as any).promise();
  }

  batchGetVpcEndpoint: (params: RawParamsFrom<'batchGetVpcEndpoint'>) => Promise<ReturnTypeFrom<'batchGetVpcEndpoint'>>  = async params => {
  // undefined
    return this.client.batchGetVpcEndpoint(params as any).promise();
  }

  createAccessPolicy: (params: RawParamsFrom<'createAccessPolicy'>) => Promise<ReturnTypeFrom<'createAccessPolicy'>>  = async params => {
  // undefined
    return this.client.createAccessPolicy(params as any).promise();
  }

  createCollection: (params: RawParamsFrom<'createCollection'>) => Promise<ReturnTypeFrom<'createCollection'>>  = async params => {
  // undefined
    return this.client.createCollection(params as any).promise();
  }

  createSecurityConfig: (params: RawParamsFrom<'createSecurityConfig'>) => Promise<ReturnTypeFrom<'createSecurityConfig'>>  = async params => {
  // undefined
    return this.client.createSecurityConfig(params as any).promise();
  }

  createSecurityPolicy: (params: RawParamsFrom<'createSecurityPolicy'>) => Promise<ReturnTypeFrom<'createSecurityPolicy'>>  = async params => {
  // undefined
    return this.client.createSecurityPolicy(params as any).promise();
  }

  createVpcEndpoint: (params: RawParamsFrom<'createVpcEndpoint'>) => Promise<ReturnTypeFrom<'createVpcEndpoint'>>  = async params => {
  // undefined
    return this.client.createVpcEndpoint(params as any).promise();
  }

  deleteAccessPolicy: (params: RawParamsFrom<'deleteAccessPolicy'>) => Promise<ReturnTypeFrom<'deleteAccessPolicy'>>  = async params => {
  // undefined
    return this.client.deleteAccessPolicy(params as any).promise();
  }

  deleteCollection: (params: RawParamsFrom<'deleteCollection'>) => Promise<ReturnTypeFrom<'deleteCollection'>>  = async params => {
  // undefined
    return this.client.deleteCollection(params as any).promise();
  }

  deleteSecurityConfig: (params: RawParamsFrom<'deleteSecurityConfig'>) => Promise<ReturnTypeFrom<'deleteSecurityConfig'>>  = async params => {
  // undefined
    return this.client.deleteSecurityConfig(params as any).promise();
  }

  deleteSecurityPolicy: (params: RawParamsFrom<'deleteSecurityPolicy'>) => Promise<ReturnTypeFrom<'deleteSecurityPolicy'>>  = async params => {
  // undefined
    return this.client.deleteSecurityPolicy(params as any).promise();
  }

  deleteVpcEndpoint: (params: RawParamsFrom<'deleteVpcEndpoint'>) => Promise<ReturnTypeFrom<'deleteVpcEndpoint'>>  = async params => {
  // undefined
    return this.client.deleteVpcEndpoint(params as any).promise();
  }

  getAccessPolicy: (params: RawParamsFrom<'getAccessPolicy'>) => Promise<ReturnTypeFrom<'getAccessPolicy'>>  = async params => {
  // undefined
    return this.client.getAccessPolicy(params as any).promise();
  }

  getAccountSettings: (params: RawParamsFrom<'getAccountSettings'>) => Promise<ReturnTypeFrom<'getAccountSettings'>>  = async params => {
  // undefined
    return this.client.getAccountSettings(params as any).promise();
  }

  getPoliciesStats: (params: RawParamsFrom<'getPoliciesStats'>) => Promise<ReturnTypeFrom<'getPoliciesStats'>>  = async params => {
  // undefined
    return this.client.getPoliciesStats(params as any).promise();
  }

  getSecurityConfig: (params: RawParamsFrom<'getSecurityConfig'>) => Promise<ReturnTypeFrom<'getSecurityConfig'>>  = async params => {
  // undefined
    return this.client.getSecurityConfig(params as any).promise();
  }

  getSecurityPolicy: (params: RawParamsFrom<'getSecurityPolicy'>) => Promise<ReturnTypeFrom<'getSecurityPolicy'>>  = async params => {
  // undefined
    return this.client.getSecurityPolicy(params as any).promise();
  }

  listAccessPolicies: (params: RawParamsFrom<'listAccessPolicies'>) => Promise<ReturnTypeFrom<'listAccessPolicies'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listAccessPolicies(params as any).promise();
  }

  listCollections: (params: RawParamsFrom<'listCollections'>) => Promise<ReturnTypeFrom<'listCollections'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listCollections(params as any).promise();
  }

  listSecurityConfigs: (params: RawParamsFrom<'listSecurityConfigs'>) => Promise<ReturnTypeFrom<'listSecurityConfigs'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSecurityConfigs(params as any).promise();
  }

  listSecurityPolicies: (params: RawParamsFrom<'listSecurityPolicies'>) => Promise<ReturnTypeFrom<'listSecurityPolicies'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSecurityPolicies(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listVpcEndpoints: (params: RawParamsFrom<'listVpcEndpoints'>) => Promise<ReturnTypeFrom<'listVpcEndpoints'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listVpcEndpoints(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAccessPolicy: (params: RawParamsFrom<'updateAccessPolicy'>) => Promise<ReturnTypeFrom<'updateAccessPolicy'>>  = async params => {
  // undefined
    return this.client.updateAccessPolicy(params as any).promise();
  }

  updateAccountSettings: (params: RawParamsFrom<'updateAccountSettings'>) => Promise<ReturnTypeFrom<'updateAccountSettings'>>  = async params => {
  // undefined
    return this.client.updateAccountSettings(params as any).promise();
  }

  updateCollection: (params: RawParamsFrom<'updateCollection'>) => Promise<ReturnTypeFrom<'updateCollection'>>  = async params => {
  // undefined
    return this.client.updateCollection(params as any).promise();
  }

  updateSecurityConfig: (params: RawParamsFrom<'updateSecurityConfig'>) => Promise<ReturnTypeFrom<'updateSecurityConfig'>>  = async params => {
  // undefined
    return this.client.updateSecurityConfig(params as any).promise();
  }

  updateSecurityPolicy: (params: RawParamsFrom<'updateSecurityPolicy'>) => Promise<ReturnTypeFrom<'updateSecurityPolicy'>>  = async params => {
  // undefined
    return this.client.updateSecurityPolicy(params as any).promise();
  }

  updateVpcEndpoint: (params: RawParamsFrom<'updateVpcEndpoint'>) => Promise<ReturnTypeFrom<'updateVpcEndpoint'>>  = async params => {
  // undefined
    return this.client.updateVpcEndpoint(params as any).promise();
  }
  
  static fromClient(client: AWSOpenSearchServerless): OpenSearchServerless {
    return new OpenSearchServerless(client) as any;
  }
  
  static client(options?: AWSOpenSearchServerless.Types.ClientConfiguration): OpenSearchServerless {
    return new OpenSearchServerless(new AWSOpenSearchServerless(options)) as any;
  }
}  
