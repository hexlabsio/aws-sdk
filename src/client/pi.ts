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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'pi';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  describeDimensionKeys: FunctionTypeFrom<'describeDimensionKeys'>;

  getDimensionKeyDetails: FunctionTypeFrom<'getDimensionKeyDetails'>;

  getResourceMetadata: FunctionTypeFrom<'getResourceMetadata'>;

  getResourceMetrics: FunctionTypeFrom<'getResourceMetrics'>;

  listAvailableResourceDimensions: FunctionTypeFrom<'listAvailableResourceDimensions'>;

  listAvailableResourceMetrics: FunctionTypeFrom<'listAvailableResourceMetrics'>
}
 
export class PI implements ClientType {
  private constructor(private readonly client: AWSPI) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'pi';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async describeDimensionKeys(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDimensionKeys(...args).promise()
  }

  async getDimensionKeyDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getDimensionKeyDetails(...args).promise()
  }

  async getResourceMetadata(...args: any): Promise<any> {
  // undefined
    return this.client.getResourceMetadata(...args).promise()
  }

  async getResourceMetrics(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getResourceMetrics(...args).promise()
  }

  async listAvailableResourceDimensions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAvailableResourceDimensions(...args).promise()
  }

  async listAvailableResourceMetrics(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAvailableResourceMetrics(...args).promise()
  }
  
  static fromClient(client: AWSPI): ClientType {
    return new PI(client) as any;
  }
  
  static client(options?: AWSPI.Types.ClientConfiguration): ClientType {
    return new PI(new AWSPI(options)) as any;
  }
}  
