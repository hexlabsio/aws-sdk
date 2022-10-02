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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'account';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  deleteAlternateContact: FunctionTypeFrom<'deleteAlternateContact'>;

  getAlternateContact: FunctionTypeFrom<'getAlternateContact'>;

  getContactInformation: FunctionTypeFrom<'getContactInformation'>;

  putAlternateContact: FunctionTypeFrom<'putAlternateContact'>;

  putContactInformation: FunctionTypeFrom<'putContactInformation'>
}
 
export class Account implements ClientType {
  private constructor(private readonly client: AWSAccount) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'account';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async deleteAlternateContact(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAlternateContact(...args).promise()
  }

  async getAlternateContact(...args: any): Promise<any> {
  // undefined
    return this.client.getAlternateContact(...args).promise()
  }

  async getContactInformation(...args: any): Promise<any> {
  // undefined
    return this.client.getContactInformation(...args).promise()
  }

  async putAlternateContact(...args: any): Promise<any> {
  // undefined
    return this.client.putAlternateContact(...args).promise()
  }

  async putContactInformation(...args: any): Promise<any> {
  // undefined
    return this.client.putContactInformation(...args).promise()
  }
  
  static fromClient(client: AWSAccount): ClientType {
    return new Account(client) as any;
  }
  
  static client(options?: AWSAccount.Types.ClientConfiguration): ClientType {
    return new Account(new AWSAccount(options)) as any;
  }
}  
