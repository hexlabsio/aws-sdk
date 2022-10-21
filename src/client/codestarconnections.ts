import { Request, CodeStarconnections as AWSCodeStarconnections } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCodeStarconnections> = AWSCodeStarconnections[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCodeStarconnections> = AWSCodeStarconnections[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCodeStarconnections[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCodeStarconnections, Extras> = AWSCodeStarconnections[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCodeStarconnections> = AWSCodeStarconnections[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CodeStarconnections {
  private constructor(private readonly client: AWSCodeStarconnections) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codestar-connections' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listConnections","listHosts"] as const;
  
  createConnection: (params: RawParamsFrom<'createConnection'>) => Promise<ReturnTypeFrom<'createConnection'>>  = async params => {
  // undefined
    return this.client.createConnection(params as any).promise();
  }

  createHost: (params: RawParamsFrom<'createHost'>) => Promise<ReturnTypeFrom<'createHost'>>  = async params => {
  // undefined
    return this.client.createHost(params as any).promise();
  }

  deleteConnection: (params: RawParamsFrom<'deleteConnection'>) => Promise<ReturnTypeFrom<'deleteConnection'>>  = async params => {
  // undefined
    return this.client.deleteConnection(params as any).promise();
  }

  deleteHost: (params: RawParamsFrom<'deleteHost'>) => Promise<ReturnTypeFrom<'deleteHost'>>  = async params => {
  // undefined
    return this.client.deleteHost(params as any).promise();
  }

  getConnection: (params: RawParamsFrom<'getConnection'>) => Promise<ReturnTypeFrom<'getConnection'>>  = async params => {
  // undefined
    return this.client.getConnection(params as any).promise();
  }

  getHost: (params: RawParamsFrom<'getHost'>) => Promise<ReturnTypeFrom<'getHost'>>  = async params => {
  // undefined
    return this.client.getHost(params as any).promise();
  }

  listConnections: (params: RawParamsFrom<'listConnections'>) => Promise<ReturnTypeFrom<'listConnections'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConnections(params as any).promise();
  }

  listHosts: (params: RawParamsFrom<'listHosts'>) => Promise<ReturnTypeFrom<'listHosts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHosts(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateHost: (params: RawParamsFrom<'updateHost'>) => Promise<ReturnTypeFrom<'updateHost'>>  = async params => {
  // undefined
    return this.client.updateHost(params as any).promise();
  }
  
  static fromClient(client: AWSCodeStarconnections): CodeStarconnections {
    return new CodeStarconnections(client) as any;
  }
  
  static client(options?: AWSCodeStarconnections.Types.ClientConfiguration): CodeStarconnections {
    return new CodeStarconnections(new AWSCodeStarconnections(options)) as any;
  }
}  
