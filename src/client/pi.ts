import { Request, PI as AWSPI } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSPI> = AWSPI[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSPI> = AWSPI[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSPI[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSPI, Extras> = AWSPI[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSPI> = AWSPI[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class PI {
  private constructor(private readonly client: AWSPI) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'pi' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  describeDimensionKeys: (params: RawParamsFrom<'describeDimensionKeys'>) => Promise<ReturnTypeFrom<'describeDimensionKeys'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDimensionKeys(params as any).promise();
  }

  getDimensionKeyDetails: (params: RawParamsFrom<'getDimensionKeyDetails'>) => Promise<ReturnTypeFrom<'getDimensionKeyDetails'>>  = async params => {
  // undefined
    return this.client.getDimensionKeyDetails(params as any).promise();
  }

  getResourceMetadata: (params: RawParamsFrom<'getResourceMetadata'>) => Promise<ReturnTypeFrom<'getResourceMetadata'>>  = async params => {
  // undefined
    return this.client.getResourceMetadata(params as any).promise();
  }

  getResourceMetrics: (params: RawParamsFrom<'getResourceMetrics'>) => Promise<ReturnTypeFrom<'getResourceMetrics'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getResourceMetrics(params as any).promise();
  }

  listAvailableResourceDimensions: (params: RawParamsFrom<'listAvailableResourceDimensions'>) => Promise<ReturnTypeFrom<'listAvailableResourceDimensions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAvailableResourceDimensions(params as any).promise();
  }

  listAvailableResourceMetrics: (params: RawParamsFrom<'listAvailableResourceMetrics'>) => Promise<ReturnTypeFrom<'listAvailableResourceMetrics'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAvailableResourceMetrics(params as any).promise();
  }
  
  static fromClient(client: AWSPI): PI {
    return new PI(client) as any;
  }
  
  static client(options?: AWSPI.Types.ClientConfiguration): PI {
    return new PI(new AWSPI(options)) as any;
  }
}  
