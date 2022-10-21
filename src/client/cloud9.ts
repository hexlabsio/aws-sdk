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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloud9> = AWSCloud9[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Cloud9 {
  private constructor(private readonly client: AWSCloud9) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloud9' as const;
  public readonly global = false as const;
  public readonly category = 'Developer Tools' as const;
  public readonly topLevelCalls = ["describeEnvironmentMemberships","listEnvironments"] as const;
  
  createEnvironmentEC2: (params: RawParamsFrom<'createEnvironmentEC2'>) => Promise<ReturnTypeFrom<'createEnvironmentEC2'>>  = async params => {
  // undefined
    return this.client.createEnvironmentEC2(params as any).promise();
  }

  createEnvironmentMembership: (params: RawParamsFrom<'createEnvironmentMembership'>) => Promise<ReturnTypeFrom<'createEnvironmentMembership'>>  = async params => {
  // undefined
    return this.client.createEnvironmentMembership(params as any).promise();
  }

  deleteEnvironment: (params: RawParamsFrom<'deleteEnvironment'>) => Promise<ReturnTypeFrom<'deleteEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteEnvironment(params as any).promise();
  }

  deleteEnvironmentMembership: (params: RawParamsFrom<'deleteEnvironmentMembership'>) => Promise<ReturnTypeFrom<'deleteEnvironmentMembership'>>  = async params => {
  // undefined
    return this.client.deleteEnvironmentMembership(params as any).promise();
  }

  describeEnvironmentMemberships: (params: RawParamsFrom<'describeEnvironmentMemberships'>) => Promise<ReturnTypeFrom<'describeEnvironmentMemberships'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.describeEnvironmentMemberships(params as any).promise();
  }

  describeEnvironmentStatus: (params: RawParamsFrom<'describeEnvironmentStatus'>) => Promise<ReturnTypeFrom<'describeEnvironmentStatus'>>  = async params => {
  // undefined
    return this.client.describeEnvironmentStatus(params as any).promise();
  }

  describeEnvironments: (params: RawParamsFrom<'describeEnvironments'>) => Promise<ReturnTypeFrom<'describeEnvironments'>>  = async params => {
  // undefined
    return this.client.describeEnvironments(params as any).promise();
  }

  listEnvironments: (params: RawParamsFrom<'listEnvironments'>) => Promise<ReturnTypeFrom<'listEnvironments'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listEnvironments(params as any).promise();
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

  updateEnvironment: (params: RawParamsFrom<'updateEnvironment'>) => Promise<ReturnTypeFrom<'updateEnvironment'>>  = async params => {
  // undefined
    return this.client.updateEnvironment(params as any).promise();
  }

  updateEnvironmentMembership: (params: RawParamsFrom<'updateEnvironmentMembership'>) => Promise<ReturnTypeFrom<'updateEnvironmentMembership'>>  = async params => {
  // undefined
    return this.client.updateEnvironmentMembership(params as any).promise();
  }
  
  static fromClient(client: AWSCloud9): Cloud9 {
    return new Cloud9(client) as any;
  }
  
  static client(options?: AWSCloud9.Types.ClientConfiguration): Cloud9 {
    return new Cloud9(new AWSCloud9(options)) as any;
  }
}  
