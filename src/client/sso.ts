import { Request, SSO as AWSSSO } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSSO> = AWSSSO[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSSO> = AWSSSO[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSSO[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSSO, Extras> = AWSSSO[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'portal';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  getRoleCredentials: FunctionTypeFrom<'getRoleCredentials'>;

  listAccountRoles(params: { [K in keyof Omit<ParamsFrom<'listAccountRoles', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAccountRoles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountRoles'>]-?: ReturnTypeFrom<'listAccountRoles'>[K]}['roleList'] }>
  ;

  listAccounts(params: { [K in keyof Omit<ParamsFrom<'listAccounts', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccounts'>]-?: ReturnTypeFrom<'listAccounts'>[K]}['accountList'] }>
  ;

  logout: FunctionTypeFrom<'logout'>
}
 
export class SSO implements ClientType {
  private constructor(private readonly client: AWSSSO) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'portal';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async getRoleCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.getRoleCredentials(...args).promise()
  }

  async listAccountRoles(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"roleList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccountRoles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.roleList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccounts(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accountList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccounts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.accountList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async logout(...args: any): Promise<any> {
  // undefined
    return this.client.logout(...args).promise()
  }
  
  static fromClient(client: AWSSSO): ClientType {
    return new SSO(client) as any;
  }
  
  static client(options?: AWSSSO.Types.ClientConfiguration): ClientType {
    return new SSO(new AWSSSO(options)) as any;
  }
}  
