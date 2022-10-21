import { Request, Account as AWSAccount } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAccount> = AWSAccount[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAccount> = AWSAccount[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAccount[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAccount, Extras> = AWSAccount[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAccount> = AWSAccount[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Account {
  private constructor(private readonly client: AWSAccount) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'account' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  deleteAlternateContact: (params: RawParamsFrom<'deleteAlternateContact'>) => Promise<ReturnTypeFrom<'deleteAlternateContact'>>  = async params => {
  // undefined
    return this.client.deleteAlternateContact(params as any).promise();
  }

  getAlternateContact: (params: RawParamsFrom<'getAlternateContact'>) => Promise<ReturnTypeFrom<'getAlternateContact'>>  = async params => {
  // undefined
    return this.client.getAlternateContact(params as any).promise();
  }

  getContactInformation: (params: RawParamsFrom<'getContactInformation'>) => Promise<ReturnTypeFrom<'getContactInformation'>>  = async params => {
  // undefined
    return this.client.getContactInformation(params as any).promise();
  }

  putAlternateContact: (params: RawParamsFrom<'putAlternateContact'>) => Promise<ReturnTypeFrom<'putAlternateContact'>>  = async params => {
  // undefined
    return this.client.putAlternateContact(params as any).promise();
  }

  putContactInformation: (params: RawParamsFrom<'putContactInformation'>) => Promise<ReturnTypeFrom<'putContactInformation'>>  = async params => {
  // undefined
    return this.client.putContactInformation(params as any).promise();
  }
  
  static fromClient(client: AWSAccount): Account {
    return new Account(client) as any;
  }
  
  static client(options?: AWSAccount.Types.ClientConfiguration): Account {
    return new Account(new AWSAccount(options)) as any;
  }
}  
