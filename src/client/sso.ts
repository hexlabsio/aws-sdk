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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSSO> = AWSSSO[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SSO {
  private constructor(private readonly client: AWSSSO) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'portal' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  getRoleCredentials: (params: RawParamsFrom<'getRoleCredentials'>) => Promise<ReturnTypeFrom<'getRoleCredentials'>>  = async params => {
  // undefined
    return this.client.getRoleCredentials(params as any).promise();
  }

  async listAccountRoles(params: { [K in keyof ParamsFrom<'listAccountRoles', { next?: string, limit?: number }>]: ParamsFrom<'listAccountRoles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountRoles'>]-?: ReturnTypeFrom<'listAccountRoles'>[K]}['roleList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"roleList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccountRoles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAccountRoles' })).toString('base64') : undefined;
    const member = (Array.isArray(result.roleList ?? []) ? (result.roleList ?? []) : [result.roleList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccounts(params: { [K in keyof ParamsFrom<'listAccounts', { next?: string, limit?: number }>]: ParamsFrom<'listAccounts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccounts'>]-?: ReturnTypeFrom<'listAccounts'>[K]}['accountList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"accountList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listAccounts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listAccounts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.accountList ?? []) ? (result.accountList ?? []) : [result.accountList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  logout: (params: RawParamsFrom<'logout'>) => Promise<ReturnTypeFrom<'logout'>>  = async params => {
  // undefined
    return this.client.logout(params as any).promise();
  }
  
  static fromClient(client: AWSSSO): SSO {
    return new SSO(client) as any;
  }
  
  static client(options?: AWSSSO.Types.ClientConfiguration): SSO {
    return new SSO(new AWSSSO(options)) as any;
  }
}  
