import { Request, Macie as AWSMacie } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMacie> = AWSMacie[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMacie> = AWSMacie[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMacie[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMacie, Extras> = AWSMacie[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMacie> = AWSMacie[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Macie {
  private constructor(private readonly client: AWSMacie) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'macie' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["listMemberAccounts","listS3Resources"] as const;
  
  associateMemberAccount: (params: RawParamsFrom<'associateMemberAccount'>) => Promise<ReturnTypeFrom<'associateMemberAccount'>>  = async params => {
  // undefined
    return this.client.associateMemberAccount(params as any).promise();
  }

  associateS3Resources: (params: RawParamsFrom<'associateS3Resources'>) => Promise<ReturnTypeFrom<'associateS3Resources'>>  = async params => {
  // undefined
    return this.client.associateS3Resources(params as any).promise();
  }

  disassociateMemberAccount: (params: RawParamsFrom<'disassociateMemberAccount'>) => Promise<ReturnTypeFrom<'disassociateMemberAccount'>>  = async params => {
  // undefined
    return this.client.disassociateMemberAccount(params as any).promise();
  }

  disassociateS3Resources: (params: RawParamsFrom<'disassociateS3Resources'>) => Promise<ReturnTypeFrom<'disassociateS3Resources'>>  = async params => {
  // undefined
    return this.client.disassociateS3Resources(params as any).promise();
  }

  listMemberAccounts: (params: RawParamsFrom<'listMemberAccounts'>) => Promise<ReturnTypeFrom<'listMemberAccounts'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listMemberAccounts(params as any).promise();
  }

  listS3Resources: (params: RawParamsFrom<'listS3Resources'>) => Promise<ReturnTypeFrom<'listS3Resources'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listS3Resources(params as any).promise();
  }

  updateS3Resources: (params: RawParamsFrom<'updateS3Resources'>) => Promise<ReturnTypeFrom<'updateS3Resources'>>  = async params => {
  // undefined
    return this.client.updateS3Resources(params as any).promise();
  }
  
  static fromClient(client: AWSMacie): Macie {
    return new Macie(client) as any;
  }
  
  static client(options?: AWSMacie.Types.ClientConfiguration): Macie {
    return new Macie(new AWSMacie(options)) as any;
  }
}  
