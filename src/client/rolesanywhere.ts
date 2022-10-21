import { Request, RolesAnywhere as AWSRolesAnywhere } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRolesAnywhere> = AWSRolesAnywhere[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRolesAnywhere> = AWSRolesAnywhere[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRolesAnywhere[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRolesAnywhere, Extras> = AWSRolesAnywhere[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRolesAnywhere> = AWSRolesAnywhere[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class RolesAnywhere {
  private constructor(private readonly client: AWSRolesAnywhere) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rolesanywhere' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listCrls","listProfiles","listSubjects","listTrustAnchors"] as const;
  
  createProfile: (params: RawParamsFrom<'createProfile'>) => Promise<ReturnTypeFrom<'createProfile'>>  = async params => {
  // undefined
    return this.client.createProfile(params as any).promise();
  }

  createTrustAnchor: (params: RawParamsFrom<'createTrustAnchor'>) => Promise<ReturnTypeFrom<'createTrustAnchor'>>  = async params => {
  // undefined
    return this.client.createTrustAnchor(params as any).promise();
  }

  deleteCrl: (params: RawParamsFrom<'deleteCrl'>) => Promise<ReturnTypeFrom<'deleteCrl'>>  = async params => {
  // undefined
    return this.client.deleteCrl(params as any).promise();
  }

  deleteProfile: (params: RawParamsFrom<'deleteProfile'>) => Promise<ReturnTypeFrom<'deleteProfile'>>  = async params => {
  // undefined
    return this.client.deleteProfile(params as any).promise();
  }

  deleteTrustAnchor: (params: RawParamsFrom<'deleteTrustAnchor'>) => Promise<ReturnTypeFrom<'deleteTrustAnchor'>>  = async params => {
  // undefined
    return this.client.deleteTrustAnchor(params as any).promise();
  }

  disableCrl: (params: RawParamsFrom<'disableCrl'>) => Promise<ReturnTypeFrom<'disableCrl'>>  = async params => {
  // undefined
    return this.client.disableCrl(params as any).promise();
  }

  disableProfile: (params: RawParamsFrom<'disableProfile'>) => Promise<ReturnTypeFrom<'disableProfile'>>  = async params => {
  // undefined
    return this.client.disableProfile(params as any).promise();
  }

  disableTrustAnchor: (params: RawParamsFrom<'disableTrustAnchor'>) => Promise<ReturnTypeFrom<'disableTrustAnchor'>>  = async params => {
  // undefined
    return this.client.disableTrustAnchor(params as any).promise();
  }

  enableCrl: (params: RawParamsFrom<'enableCrl'>) => Promise<ReturnTypeFrom<'enableCrl'>>  = async params => {
  // undefined
    return this.client.enableCrl(params as any).promise();
  }

  enableProfile: (params: RawParamsFrom<'enableProfile'>) => Promise<ReturnTypeFrom<'enableProfile'>>  = async params => {
  // undefined
    return this.client.enableProfile(params as any).promise();
  }

  enableTrustAnchor: (params: RawParamsFrom<'enableTrustAnchor'>) => Promise<ReturnTypeFrom<'enableTrustAnchor'>>  = async params => {
  // undefined
    return this.client.enableTrustAnchor(params as any).promise();
  }

  getCrl: (params: RawParamsFrom<'getCrl'>) => Promise<ReturnTypeFrom<'getCrl'>>  = async params => {
  // undefined
    return this.client.getCrl(params as any).promise();
  }

  getProfile: (params: RawParamsFrom<'getProfile'>) => Promise<ReturnTypeFrom<'getProfile'>>  = async params => {
  // undefined
    return this.client.getProfile(params as any).promise();
  }

  getSubject: (params: RawParamsFrom<'getSubject'>) => Promise<ReturnTypeFrom<'getSubject'>>  = async params => {
  // undefined
    return this.client.getSubject(params as any).promise();
  }

  getTrustAnchor: (params: RawParamsFrom<'getTrustAnchor'>) => Promise<ReturnTypeFrom<'getTrustAnchor'>>  = async params => {
  // undefined
    return this.client.getTrustAnchor(params as any).promise();
  }

  importCrl: (params: RawParamsFrom<'importCrl'>) => Promise<ReturnTypeFrom<'importCrl'>>  = async params => {
  // undefined
    return this.client.importCrl(params as any).promise();
  }

  async listCrls(params: { [K in keyof ParamsFrom<'listCrls', { next?: string }>]: ParamsFrom<'listCrls', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCrls'>]-?: ReturnTypeFrom<'listCrls'>[K]}['crls'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"crls"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listCrls({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCrls' })).toString('base64');
    const member = (Array.isArray(result.crls ?? []) ? (result.crls ?? []) : [result.crls]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProfiles(params: { [K in keyof ParamsFrom<'listProfiles', { next?: string }>]: ParamsFrom<'listProfiles', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProfiles'>]-?: ReturnTypeFrom<'listProfiles'>[K]}['profiles'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"profiles"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProfiles' })).toString('base64');
    const member = (Array.isArray(result.profiles ?? []) ? (result.profiles ?? []) : [result.profiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubjects(params: { [K in keyof ParamsFrom<'listSubjects', { next?: string }>]: ParamsFrom<'listSubjects', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSubjects'>]-?: ReturnTypeFrom<'listSubjects'>[K]}['subjects'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"subjects"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listSubjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSubjects' })).toString('base64');
    const member = (Array.isArray(result.subjects ?? []) ? (result.subjects ?? []) : [result.subjects]) as any;
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

  async listTrustAnchors(params: { [K in keyof ParamsFrom<'listTrustAnchors', { next?: string }>]: ParamsFrom<'listTrustAnchors', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTrustAnchors'>]-?: ReturnTypeFrom<'listTrustAnchors'>[K]}['trustAnchors'], undefined>}> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"trustAnchors"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listTrustAnchors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTrustAnchors' })).toString('base64');
    const member = (Array.isArray(result.trustAnchors ?? []) ? (result.trustAnchors ?? []) : [result.trustAnchors]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateCrl: (params: RawParamsFrom<'updateCrl'>) => Promise<ReturnTypeFrom<'updateCrl'>>  = async params => {
  // undefined
    return this.client.updateCrl(params as any).promise();
  }

  updateProfile: (params: RawParamsFrom<'updateProfile'>) => Promise<ReturnTypeFrom<'updateProfile'>>  = async params => {
  // undefined
    return this.client.updateProfile(params as any).promise();
  }

  updateTrustAnchor: (params: RawParamsFrom<'updateTrustAnchor'>) => Promise<ReturnTypeFrom<'updateTrustAnchor'>>  = async params => {
  // undefined
    return this.client.updateTrustAnchor(params as any).promise();
  }
  
  static fromClient(client: AWSRolesAnywhere): RolesAnywhere {
    return new RolesAnywhere(client) as any;
  }
  
  static client(options?: AWSRolesAnywhere.Types.ClientConfiguration): RolesAnywhere {
    return new RolesAnywhere(new AWSRolesAnywhere(options)) as any;
  }
}  
