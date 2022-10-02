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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'macie';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["listMemberAccounts","listS3Resources"];
    
  associateMemberAccount: FunctionTypeFrom<'associateMemberAccount'>;

  associateS3Resources: FunctionTypeFrom<'associateS3Resources'>;

  disassociateMemberAccount: FunctionTypeFrom<'disassociateMemberAccount'>;

  disassociateS3Resources: FunctionTypeFrom<'disassociateS3Resources'>;

  listMemberAccounts: FunctionTypeFrom<'listMemberAccounts'>;

  listS3Resources: FunctionTypeFrom<'listS3Resources'>;

  updateS3Resources: FunctionTypeFrom<'updateS3Resources'>
}
 
export class Macie implements ClientType {
  private constructor(private readonly client: AWSMacie) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'macie';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["listMemberAccounts","listS3Resources"] as const;
  
  async associateMemberAccount(...args: any): Promise<any> {
  // undefined
    return this.client.associateMemberAccount(...args).promise()
  }

  async associateS3Resources(...args: any): Promise<any> {
  // undefined
    return this.client.associateS3Resources(...args).promise()
  }

  async disassociateMemberAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateMemberAccount(...args).promise()
  }

  async disassociateS3Resources(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateS3Resources(...args).promise()
  }

  async listMemberAccounts(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listMemberAccounts(...args).promise()
  }

  async listS3Resources(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listS3Resources(...args).promise()
  }

  async updateS3Resources(...args: any): Promise<any> {
  // undefined
    return this.client.updateS3Resources(...args).promise()
  }
  
  static fromClient(client: AWSMacie): ClientType {
    return new Macie(client) as any;
  }
  
  static client(options?: AWSMacie.Types.ClientConfiguration): ClientType {
    return new Macie(new AWSMacie(options)) as any;
  }
}  
