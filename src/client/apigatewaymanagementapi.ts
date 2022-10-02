import { Request, ApiGatewayManagementApi as AWSApiGatewayManagementApi } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSApiGatewayManagementApi> = AWSApiGatewayManagementApi[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSApiGatewayManagementApi> = AWSApiGatewayManagementApi[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSApiGatewayManagementApi[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSApiGatewayManagementApi, Extras> = AWSApiGatewayManagementApi[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'execute-api';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  deleteConnection: FunctionTypeFrom<'deleteConnection'>;

  getConnection: FunctionTypeFrom<'getConnection'>;

  postToConnection: FunctionTypeFrom<'postToConnection'>
}
 
export class ApiGatewayManagementApi implements ClientType {
  private constructor(private readonly client: AWSApiGatewayManagementApi) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'execute-api';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async deleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnection(...args).promise()
  }

  async getConnection(...args: any): Promise<any> {
  // undefined
    return this.client.getConnection(...args).promise()
  }

  async postToConnection(...args: any): Promise<any> {
  // undefined
    return this.client.postToConnection(...args).promise()
  }
  
  static fromClient(client: AWSApiGatewayManagementApi): ClientType {
    return new ApiGatewayManagementApi(client) as any;
  }
  
  static client(options?: AWSApiGatewayManagementApi.Types.ClientConfiguration): ClientType {
    return new ApiGatewayManagementApi(new AWSApiGatewayManagementApi(options)) as any;
  }
}  
