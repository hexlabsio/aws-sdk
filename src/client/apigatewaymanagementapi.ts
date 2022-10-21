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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSApiGatewayManagementApi> = AWSApiGatewayManagementApi[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ApiGatewayManagementApi {
  private constructor(private readonly client: AWSApiGatewayManagementApi) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'execute-api' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  deleteConnection: (params: RawParamsFrom<'deleteConnection'>) => Promise<ReturnTypeFrom<'deleteConnection'>>  = async params => {
  // undefined
    return this.client.deleteConnection(params as any).promise();
  }

  getConnection: (params: RawParamsFrom<'getConnection'>) => Promise<ReturnTypeFrom<'getConnection'>>  = async params => {
  // undefined
    return this.client.getConnection(params as any).promise();
  }

  postToConnection: (params: RawParamsFrom<'postToConnection'>) => Promise<ReturnTypeFrom<'postToConnection'>>  = async params => {
  // undefined
    return this.client.postToConnection(params as any).promise();
  }
  
  static fromClient(client: AWSApiGatewayManagementApi): ApiGatewayManagementApi {
    return new ApiGatewayManagementApi(client) as any;
  }
  
  static client(options?: AWSApiGatewayManagementApi.Types.ClientConfiguration): ApiGatewayManagementApi {
    return new ApiGatewayManagementApi(new AWSApiGatewayManagementApi(options)) as any;
  }
}  
