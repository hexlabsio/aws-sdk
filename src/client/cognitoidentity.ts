import { Request, CognitoIdentity as AWSCognitoIdentity } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCognitoIdentity> = AWSCognitoIdentity[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCognitoIdentity> = AWSCognitoIdentity[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCognitoIdentity[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCognitoIdentity, Extras> = AWSCognitoIdentity[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cognito-identity';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly [];
    
  createIdentityPool: FunctionTypeFrom<'createIdentityPool'>;

  deleteIdentities: FunctionTypeFrom<'deleteIdentities'>;

  deleteIdentityPool: FunctionTypeFrom<'deleteIdentityPool'>;

  describeIdentity: FunctionTypeFrom<'describeIdentity'>;

  describeIdentityPool: FunctionTypeFrom<'describeIdentityPool'>;

  getCredentialsForIdentity: FunctionTypeFrom<'getCredentialsForIdentity'>;

  getId: FunctionTypeFrom<'getId'>;

  getIdentityPoolRoles: FunctionTypeFrom<'getIdentityPoolRoles'>;

  getOpenIdToken: FunctionTypeFrom<'getOpenIdToken'>;

  getOpenIdTokenForDeveloperIdentity: FunctionTypeFrom<'getOpenIdTokenForDeveloperIdentity'>;

  getPrincipalTagAttributeMap: FunctionTypeFrom<'getPrincipalTagAttributeMap'>;

  listIdentities: FunctionTypeFrom<'listIdentities'>;

  listIdentityPools(params: { [K in keyof Omit<ParamsFrom<'listIdentityPools', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listIdentityPools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIdentityPools'>]-?: ReturnTypeFrom<'listIdentityPools'>[K]}['IdentityPools'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  lookupDeveloperIdentity: FunctionTypeFrom<'lookupDeveloperIdentity'>;

  mergeDeveloperIdentities: FunctionTypeFrom<'mergeDeveloperIdentities'>;

  setIdentityPoolRoles: FunctionTypeFrom<'setIdentityPoolRoles'>;

  setPrincipalTagAttributeMap: FunctionTypeFrom<'setPrincipalTagAttributeMap'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  unlinkDeveloperIdentity: FunctionTypeFrom<'unlinkDeveloperIdentity'>;

  unlinkIdentity: FunctionTypeFrom<'unlinkIdentity'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateIdentityPool: FunctionTypeFrom<'updateIdentityPool'>
}
 
export class CognitoIdentity implements ClientType {
  private constructor(private readonly client: AWSCognitoIdentity) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cognito-identity';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = [] as const;
  
  async createIdentityPool(...args: any): Promise<any> {
  // undefined
    return this.client.createIdentityPool(...args).promise()
  }

  async deleteIdentities(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIdentities(...args).promise()
  }

  async deleteIdentityPool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIdentityPool(...args).promise()
  }

  async describeIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdentity(...args).promise()
  }

  async describeIdentityPool(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdentityPool(...args).promise()
  }

  async getCredentialsForIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.getCredentialsForIdentity(...args).promise()
  }

  async getId(...args: any): Promise<any> {
  // undefined
    return this.client.getId(...args).promise()
  }

  async getIdentityPoolRoles(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityPoolRoles(...args).promise()
  }

  async getOpenIdToken(...args: any): Promise<any> {
  // undefined
    return this.client.getOpenIdToken(...args).promise()
  }

  async getOpenIdTokenForDeveloperIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.getOpenIdTokenForDeveloperIdentity(...args).promise()
  }

  async getPrincipalTagAttributeMap(...args: any): Promise<any> {
  // undefined
    return this.client.getPrincipalTagAttributeMap(...args).promise()
  }

  async listIdentities(...args: any): Promise<any> {
  // undefined
    return this.client.listIdentities(...args).promise()
  }

  async listIdentityPools(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IdentityPools"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIdentityPools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IdentityPools ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async lookupDeveloperIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.lookupDeveloperIdentity(...args).promise()
  }

  async mergeDeveloperIdentities(...args: any): Promise<any> {
  // undefined
    return this.client.mergeDeveloperIdentities(...args).promise()
  }

  async setIdentityPoolRoles(...args: any): Promise<any> {
  // undefined
    return this.client.setIdentityPoolRoles(...args).promise()
  }

  async setPrincipalTagAttributeMap(...args: any): Promise<any> {
  // undefined
    return this.client.setPrincipalTagAttributeMap(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async unlinkDeveloperIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.unlinkDeveloperIdentity(...args).promise()
  }

  async unlinkIdentity(...args: any): Promise<any> {
  // undefined
    return this.client.unlinkIdentity(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateIdentityPool(...args: any): Promise<any> {
  // undefined
    return this.client.updateIdentityPool(...args).promise()
  }
  
  static fromClient(client: AWSCognitoIdentity): ClientType {
    return new CognitoIdentity(client) as any;
  }
  
  static client(options?: AWSCognitoIdentity.Types.ClientConfiguration): ClientType {
    return new CognitoIdentity(new AWSCognitoIdentity(options)) as any;
  }
}  
