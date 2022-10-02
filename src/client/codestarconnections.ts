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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'codestar-connections';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listConnections","listHosts"];
    
  createConnection: FunctionTypeFrom<'createConnection'>;

  createHost: FunctionTypeFrom<'createHost'>;

  deleteConnection: FunctionTypeFrom<'deleteConnection'>;

  deleteHost: FunctionTypeFrom<'deleteHost'>;

  getConnection: FunctionTypeFrom<'getConnection'>;

  getHost: FunctionTypeFrom<'getHost'>;

  listConnections: FunctionTypeFrom<'listConnections'>;

  listHosts: FunctionTypeFrom<'listHosts'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateHost: FunctionTypeFrom<'updateHost'>
}
 
export class CodeStarconnections implements ClientType {
  private constructor(private readonly client: AWSCodeStarconnections) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'codestar-connections';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listConnections","listHosts"] as const;
  
  async createConnection(...args: any): Promise<any> {
  // undefined
    return this.client.createConnection(...args).promise()
  }

  async createHost(...args: any): Promise<any> {
  // undefined
    return this.client.createHost(...args).promise()
  }

  async deleteConnection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConnection(...args).promise()
  }

  async deleteHost(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHost(...args).promise()
  }

  async getConnection(...args: any): Promise<any> {
  // undefined
    return this.client.getConnection(...args).promise()
  }

  async getHost(...args: any): Promise<any> {
  // undefined
    return this.client.getHost(...args).promise()
  }

  async listConnections(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listConnections(...args).promise()
  }

  async listHosts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHosts(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateHost(...args: any): Promise<any> {
  // undefined
    return this.client.updateHost(...args).promise()
  }
  
  static fromClient(client: AWSCodeStarconnections): ClientType {
    return new CodeStarconnections(client) as any;
  }
  
  static client(options?: AWSCodeStarconnections.Types.ClientConfiguration): ClientType {
    return new CodeStarconnections(new AWSCodeStarconnections(options)) as any;
  }
}  
