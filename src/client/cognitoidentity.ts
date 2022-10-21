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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCognitoIdentity> = AWSCognitoIdentity[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CognitoIdentity {
  private constructor(private readonly client: AWSCognitoIdentity) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cognito-identity' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = [] as const;
  
  createIdentityPool: (params: RawParamsFrom<'createIdentityPool'>) => Promise<ReturnTypeFrom<'createIdentityPool'>>  = async params => {
  // undefined
    return this.client.createIdentityPool(params as any).promise();
  }

  deleteIdentities: (params: RawParamsFrom<'deleteIdentities'>) => Promise<ReturnTypeFrom<'deleteIdentities'>>  = async params => {
  // undefined
    return this.client.deleteIdentities(params as any).promise();
  }

  deleteIdentityPool: (params: RawParamsFrom<'deleteIdentityPool'>) => Promise<ReturnTypeFrom<'deleteIdentityPool'>>  = async params => {
  // undefined
    return this.client.deleteIdentityPool(params as any).promise();
  }

  describeIdentity: (params: RawParamsFrom<'describeIdentity'>) => Promise<ReturnTypeFrom<'describeIdentity'>>  = async params => {
  // undefined
    return this.client.describeIdentity(params as any).promise();
  }

  describeIdentityPool: (params: RawParamsFrom<'describeIdentityPool'>) => Promise<ReturnTypeFrom<'describeIdentityPool'>>  = async params => {
  // undefined
    return this.client.describeIdentityPool(params as any).promise();
  }

  getCredentialsForIdentity: (params: RawParamsFrom<'getCredentialsForIdentity'>) => Promise<ReturnTypeFrom<'getCredentialsForIdentity'>>  = async params => {
  // undefined
    return this.client.getCredentialsForIdentity(params as any).promise();
  }

  getId: (params: RawParamsFrom<'getId'>) => Promise<ReturnTypeFrom<'getId'>>  = async params => {
  // undefined
    return this.client.getId(params as any).promise();
  }

  getIdentityPoolRoles: (params: RawParamsFrom<'getIdentityPoolRoles'>) => Promise<ReturnTypeFrom<'getIdentityPoolRoles'>>  = async params => {
  // undefined
    return this.client.getIdentityPoolRoles(params as any).promise();
  }

  getOpenIdToken: (params: RawParamsFrom<'getOpenIdToken'>) => Promise<ReturnTypeFrom<'getOpenIdToken'>>  = async params => {
  // undefined
    return this.client.getOpenIdToken(params as any).promise();
  }

  getOpenIdTokenForDeveloperIdentity: (params: RawParamsFrom<'getOpenIdTokenForDeveloperIdentity'>) => Promise<ReturnTypeFrom<'getOpenIdTokenForDeveloperIdentity'>>  = async params => {
  // undefined
    return this.client.getOpenIdTokenForDeveloperIdentity(params as any).promise();
  }

  getPrincipalTagAttributeMap: (params: RawParamsFrom<'getPrincipalTagAttributeMap'>) => Promise<ReturnTypeFrom<'getPrincipalTagAttributeMap'>>  = async params => {
  // undefined
    return this.client.getPrincipalTagAttributeMap(params as any).promise();
  }

  listIdentities: (params: RawParamsFrom<'listIdentities'>) => Promise<ReturnTypeFrom<'listIdentities'>>  = async params => {
  // undefined
    return this.client.listIdentities(params as any).promise();
  }

  async listIdentityPools(params: { [K in keyof ParamsFrom<'listIdentityPools', { next?: string, limit?: number }>]: ParamsFrom<'listIdentityPools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIdentityPools'>]-?: ReturnTypeFrom<'listIdentityPools'>[K]}['IdentityPools'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IdentityPools"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIdentityPools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listIdentityPools' })).toString('base64');
    const member = (Array.isArray(result.IdentityPools ?? []) ? (result.IdentityPools ?? []) : [result.IdentityPools]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  lookupDeveloperIdentity: (params: RawParamsFrom<'lookupDeveloperIdentity'>) => Promise<ReturnTypeFrom<'lookupDeveloperIdentity'>>  = async params => {
  // undefined
    return this.client.lookupDeveloperIdentity(params as any).promise();
  }

  mergeDeveloperIdentities: (params: RawParamsFrom<'mergeDeveloperIdentities'>) => Promise<ReturnTypeFrom<'mergeDeveloperIdentities'>>  = async params => {
  // undefined
    return this.client.mergeDeveloperIdentities(params as any).promise();
  }

  setIdentityPoolRoles: (params: RawParamsFrom<'setIdentityPoolRoles'>) => Promise<ReturnTypeFrom<'setIdentityPoolRoles'>>  = async params => {
  // undefined
    return this.client.setIdentityPoolRoles(params as any).promise();
  }

  setPrincipalTagAttributeMap: (params: RawParamsFrom<'setPrincipalTagAttributeMap'>) => Promise<ReturnTypeFrom<'setPrincipalTagAttributeMap'>>  = async params => {
  // undefined
    return this.client.setPrincipalTagAttributeMap(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  unlinkDeveloperIdentity: (params: RawParamsFrom<'unlinkDeveloperIdentity'>) => Promise<ReturnTypeFrom<'unlinkDeveloperIdentity'>>  = async params => {
  // undefined
    return this.client.unlinkDeveloperIdentity(params as any).promise();
  }

  unlinkIdentity: (params: RawParamsFrom<'unlinkIdentity'>) => Promise<ReturnTypeFrom<'unlinkIdentity'>>  = async params => {
  // undefined
    return this.client.unlinkIdentity(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateIdentityPool: (params: RawParamsFrom<'updateIdentityPool'>) => Promise<ReturnTypeFrom<'updateIdentityPool'>>  = async params => {
  // undefined
    return this.client.updateIdentityPool(params as any).promise();
  }
  
  static fromClient(client: AWSCognitoIdentity): CognitoIdentity {
    return new CognitoIdentity(client) as any;
  }
  
  static client(options?: AWSCognitoIdentity.Types.ClientConfiguration): CognitoIdentity {
    return new CognitoIdentity(new AWSCognitoIdentity(options)) as any;
  }
}  
