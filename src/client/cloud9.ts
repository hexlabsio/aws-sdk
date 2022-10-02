import { Request, Cloud9 as AWSCloud9 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloud9> = AWSCloud9[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloud9> = AWSCloud9[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloud9[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloud9, Extras> = AWSCloud9[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cloud9';
    global: false;
    category: 'Developer Tools'
    topLevelCalls: readonly ["describeEnvironmentMemberships","listEnvironments"];
    
  createEnvironmentEC2: FunctionTypeFrom<'createEnvironmentEC2'>;

  createEnvironmentMembership: FunctionTypeFrom<'createEnvironmentMembership'>;

  deleteEnvironment: FunctionTypeFrom<'deleteEnvironment'>;

  deleteEnvironmentMembership: FunctionTypeFrom<'deleteEnvironmentMembership'>;

  describeEnvironmentMemberships: FunctionTypeFrom<'describeEnvironmentMemberships'>;

  describeEnvironmentStatus: FunctionTypeFrom<'describeEnvironmentStatus'>;

  describeEnvironments: FunctionTypeFrom<'describeEnvironments'>;

  listEnvironments: FunctionTypeFrom<'listEnvironments'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateEnvironment: FunctionTypeFrom<'updateEnvironment'>;

  updateEnvironmentMembership: FunctionTypeFrom<'updateEnvironmentMembership'>
}
 
export class Cloud9 implements ClientType {
  private constructor(private readonly client: AWSCloud9) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloud9';
  public readonly global = false;
  public readonly category = 'Developer Tools';
  public readonly topLevelCalls = ["describeEnvironmentMemberships","listEnvironments"] as const;
  
  async createEnvironmentEC2(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironmentEC2(...args).promise()
  }

  async createEnvironmentMembership(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironmentMembership(...args).promise()
  }

  async deleteEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironment(...args).promise()
  }

  async deleteEnvironmentMembership(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironmentMembership(...args).promise()
  }

  async describeEnvironmentMemberships(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeEnvironmentMemberships(...args).promise()
  }

  async describeEnvironmentStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeEnvironmentStatus(...args).promise()
  }

  async describeEnvironments(...args: any): Promise<any> {
  // undefined
    return this.client.describeEnvironments(...args).promise()
  }

  async listEnvironments(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listEnvironments(...args).promise()
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

  async updateEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironment(...args).promise()
  }

  async updateEnvironmentMembership(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironmentMembership(...args).promise()
  }
  
  static fromClient(client: AWSCloud9): ClientType {
    return new Cloud9(client) as any;
  }
  
  static client(options?: AWSCloud9.Types.ClientConfiguration): ClientType {
    return new Cloud9(new AWSCloud9(options)) as any;
  }
}  
