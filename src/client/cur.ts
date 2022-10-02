import { Request, CUR as AWSCUR } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCUR> = AWSCUR[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCUR> = AWSCUR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCUR[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCUR, Extras> = AWSCUR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cur';
    global: false;
    category: 'Cloud Financial Management'
    topLevelCalls: readonly ["describeReportDefinitions"];
    
  deleteReportDefinition: FunctionTypeFrom<'deleteReportDefinition'>;

  describeReportDefinitions: FunctionTypeFrom<'describeReportDefinitions'>;

  modifyReportDefinition: FunctionTypeFrom<'modifyReportDefinition'>;

  putReportDefinition: FunctionTypeFrom<'putReportDefinition'>
}
 
export class CUR implements ClientType {
  private constructor(private readonly client: AWSCUR) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cur';
  public readonly global = false;
  public readonly category = 'Cloud Financial Management';
  public readonly topLevelCalls = ["describeReportDefinitions"] as const;
  
  async deleteReportDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReportDefinition(...args).promise()
  }

  async describeReportDefinitions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReportDefinitions(...args).promise()
  }

  async modifyReportDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.modifyReportDefinition(...args).promise()
  }

  async putReportDefinition(...args: any): Promise<any> {
  // undefined
    return this.client.putReportDefinition(...args).promise()
  }
  
  static fromClient(client: AWSCUR): ClientType {
    return new CUR(client) as any;
  }
  
  static client(options?: AWSCUR.Types.ClientConfiguration): ClientType {
    return new CUR(new AWSCUR(options)) as any;
  }
}  
