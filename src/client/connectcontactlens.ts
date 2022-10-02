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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'contact-lens';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  listRealtimeContactAnalysisSegments: FunctionTypeFrom<'listRealtimeContactAnalysisSegments'>
}
 
export class ConnectContactLens implements ClientType {
  private constructor(private readonly client: AWSConnectContactLens) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'contact-lens';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async listRealtimeContactAnalysisSegments(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRealtimeContactAnalysisSegments(...args).promise()
  }
  
  static fromClient(client: AWSConnectContactLens): ClientType {
    return new ConnectContactLens(client) as any;
  }
  
  static client(options?: AWSConnectContactLens.Types.ClientConfiguration): ClientType {
    return new ConnectContactLens(new AWSConnectContactLens(options)) as any;
  }
}  
