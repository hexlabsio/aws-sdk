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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'rolesanywhere';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listCrls","listProfiles","listSubjects","listTrustAnchors"];
    
  createProfile: FunctionTypeFrom<'createProfile'>;

  createTrustAnchor: FunctionTypeFrom<'createTrustAnchor'>;

  deleteCrl: FunctionTypeFrom<'deleteCrl'>;

  deleteProfile: FunctionTypeFrom<'deleteProfile'>;

  deleteTrustAnchor: FunctionTypeFrom<'deleteTrustAnchor'>;

  disableCrl: FunctionTypeFrom<'disableCrl'>;

  disableProfile: FunctionTypeFrom<'disableProfile'>;

  disableTrustAnchor: FunctionTypeFrom<'disableTrustAnchor'>;

  enableCrl: FunctionTypeFrom<'enableCrl'>;

  enableProfile: FunctionTypeFrom<'enableProfile'>;

  enableTrustAnchor: FunctionTypeFrom<'enableTrustAnchor'>;

  getCrl: FunctionTypeFrom<'getCrl'>;

  getProfile: FunctionTypeFrom<'getProfile'>;

  getSubject: FunctionTypeFrom<'getSubject'>;

  getTrustAnchor: FunctionTypeFrom<'getTrustAnchor'>;

  importCrl: FunctionTypeFrom<'importCrl'>;

  listCrls(params: { [K in keyof Omit<ParamsFrom<'listCrls', { next?: string }>, 'nextToken'>]: ParamsFrom<'listCrls', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCrls'>]-?: ReturnTypeFrom<'listCrls'>[K]}['crls'] }>
  listCrls(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCrls'>]-?: ReturnTypeFrom<'listCrls'>[K]}['crls'] }>;

  listProfiles(params: { [K in keyof Omit<ParamsFrom<'listProfiles', { next?: string }>, 'nextToken'>]: ParamsFrom<'listProfiles', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProfiles'>]-?: ReturnTypeFrom<'listProfiles'>[K]}['profiles'] }>
  listProfiles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProfiles'>]-?: ReturnTypeFrom<'listProfiles'>[K]}['profiles'] }>;

  listSubjects(params: { [K in keyof Omit<ParamsFrom<'listSubjects', { next?: string }>, 'nextToken'>]: ParamsFrom<'listSubjects', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSubjects'>]-?: ReturnTypeFrom<'listSubjects'>[K]}['subjects'] }>
  listSubjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSubjects'>]-?: ReturnTypeFrom<'listSubjects'>[K]}['subjects'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTrustAnchors(params: { [K in keyof Omit<ParamsFrom<'listTrustAnchors', { next?: string }>, 'nextToken'>]: ParamsFrom<'listTrustAnchors', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrustAnchors'>]-?: ReturnTypeFrom<'listTrustAnchors'>[K]}['trustAnchors'] }>
  listTrustAnchors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTrustAnchors'>]-?: ReturnTypeFrom<'listTrustAnchors'>[K]}['trustAnchors'] }>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateCrl: FunctionTypeFrom<'updateCrl'>;

  updateProfile: FunctionTypeFrom<'updateProfile'>;

  updateTrustAnchor: FunctionTypeFrom<'updateTrustAnchor'>
}
 
export class RolesAnywhere implements ClientType {
  private constructor(private readonly client: AWSRolesAnywhere) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rolesanywhere';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listCrls","listProfiles","listSubjects","listTrustAnchors"] as const;
  
  async createProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createProfile(...args).promise()
  }

  async createTrustAnchor(...args: any): Promise<any> {
  // undefined
    return this.client.createTrustAnchor(...args).promise()
  }

  async deleteCrl(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCrl(...args).promise()
  }

  async deleteProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProfile(...args).promise()
  }

  async deleteTrustAnchor(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTrustAnchor(...args).promise()
  }

  async disableCrl(...args: any): Promise<any> {
  // undefined
    return this.client.disableCrl(...args).promise()
  }

  async disableProfile(...args: any): Promise<any> {
  // undefined
    return this.client.disableProfile(...args).promise()
  }

  async disableTrustAnchor(...args: any): Promise<any> {
  // undefined
    return this.client.disableTrustAnchor(...args).promise()
  }

  async enableCrl(...args: any): Promise<any> {
  // undefined
    return this.client.enableCrl(...args).promise()
  }

  async enableProfile(...args: any): Promise<any> {
  // undefined
    return this.client.enableProfile(...args).promise()
  }

  async enableTrustAnchor(...args: any): Promise<any> {
  // undefined
    return this.client.enableTrustAnchor(...args).promise()
  }

  async getCrl(...args: any): Promise<any> {
  // undefined
    return this.client.getCrl(...args).promise()
  }

  async getProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getProfile(...args).promise()
  }

  async getSubject(...args: any): Promise<any> {
  // undefined
    return this.client.getSubject(...args).promise()
  }

  async getTrustAnchor(...args: any): Promise<any> {
  // undefined
    return this.client.getTrustAnchor(...args).promise()
  }

  async importCrl(...args: any): Promise<any> {
  // undefined
    return this.client.importCrl(...args).promise()
  }

  async listCrls(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"crls"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listCrls(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.crls ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProfiles(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"profiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.profiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSubjects(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"subjects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listSubjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.subjects ?? [];
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

  async listTrustAnchors(...args: any): Promise<any> {
    // {"inputToken":"nextToken","outputToken":"nextToken","resultKey":"trustAnchors"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listTrustAnchors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.trustAnchors ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateCrl(...args: any): Promise<any> {
  // undefined
    return this.client.updateCrl(...args).promise()
  }

  async updateProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateProfile(...args).promise()
  }

  async updateTrustAnchor(...args: any): Promise<any> {
  // undefined
    return this.client.updateTrustAnchor(...args).promise()
  }
  
  static fromClient(client: AWSRolesAnywhere): ClientType {
    return new RolesAnywhere(client) as any;
  }
  
  static client(options?: AWSRolesAnywhere.Types.ClientConfiguration): ClientType {
    return new RolesAnywhere(new AWSRolesAnywhere(options)) as any;
  }
}  
