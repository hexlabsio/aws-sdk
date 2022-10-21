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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCUR> = AWSCUR[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CUR {
  private constructor(private readonly client: AWSCUR) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cur' as const;
  public readonly global = false as const;
  public readonly category = 'Cloud Financial Management' as const;
  public readonly topLevelCalls = ["describeReportDefinitions"] as const;
  
  deleteReportDefinition: (params: RawParamsFrom<'deleteReportDefinition'>) => Promise<ReturnTypeFrom<'deleteReportDefinition'>>  = async params => {
  // undefined
    return this.client.deleteReportDefinition(params as any).promise();
  }

  describeReportDefinitions: (params: RawParamsFrom<'describeReportDefinitions'>) => Promise<ReturnTypeFrom<'describeReportDefinitions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeReportDefinitions(params as any).promise();
  }

  modifyReportDefinition: (params: RawParamsFrom<'modifyReportDefinition'>) => Promise<ReturnTypeFrom<'modifyReportDefinition'>>  = async params => {
  // undefined
    return this.client.modifyReportDefinition(params as any).promise();
  }

  putReportDefinition: (params: RawParamsFrom<'putReportDefinition'>) => Promise<ReturnTypeFrom<'putReportDefinition'>>  = async params => {
  // undefined
    return this.client.putReportDefinition(params as any).promise();
  }
  
  static fromClient(client: AWSCUR): CUR {
    return new CUR(client) as any;
  }
  
  static client(options?: AWSCUR.Types.ClientConfiguration): CUR {
    return new CUR(new AWSCUR(options)) as any;
  }
}  
