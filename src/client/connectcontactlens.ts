import { Request, ConnectContactLens as AWSConnectContactLens } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSConnectContactLens> = AWSConnectContactLens[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSConnectContactLens> = AWSConnectContactLens[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSConnectContactLens[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSConnectContactLens, Extras> = AWSConnectContactLens[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSConnectContactLens> = AWSConnectContactLens[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ConnectContactLens {
  private constructor(private readonly client: AWSConnectContactLens) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'contact-lens' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  listRealtimeContactAnalysisSegments: (params: RawParamsFrom<'listRealtimeContactAnalysisSegments'>) => Promise<ReturnTypeFrom<'listRealtimeContactAnalysisSegments'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRealtimeContactAnalysisSegments(params as any).promise();
  }
  
  static fromClient(client: AWSConnectContactLens): ConnectContactLens {
    return new ConnectContactLens(client) as any;
  }
  
  static client(options?: AWSConnectContactLens.Types.ClientConfiguration): ConnectContactLens {
    return new ConnectContactLens(new AWSConnectContactLens(options)) as any;
  }
}  
