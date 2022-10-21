import { Request, Mobile as AWSMobile } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMobile> = AWSMobile[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMobile> = AWSMobile[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMobile[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMobile, Extras> = AWSMobile[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMobile> = AWSMobile[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Mobile {
  private constructor(private readonly client: AWSMobile) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mobile' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listBundles","listProjects"] as const;
  
  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  describeBundle: (params: RawParamsFrom<'describeBundle'>) => Promise<ReturnTypeFrom<'describeBundle'>>  = async params => {
  // undefined
    return this.client.describeBundle(params as any).promise();
  }

  describeProject: (params: RawParamsFrom<'describeProject'>) => Promise<ReturnTypeFrom<'describeProject'>>  = async params => {
  // undefined
    return this.client.describeProject(params as any).promise();
  }

  exportBundle: (params: RawParamsFrom<'exportBundle'>) => Promise<ReturnTypeFrom<'exportBundle'>>  = async params => {
  // undefined
    return this.client.exportBundle(params as any).promise();
  }

  exportProject: (params: RawParamsFrom<'exportProject'>) => Promise<ReturnTypeFrom<'exportProject'>>  = async params => {
  // undefined
    return this.client.exportProject(params as any).promise();
  }

  listBundles: (params: RawParamsFrom<'listBundles'>) => Promise<ReturnTypeFrom<'listBundles'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBundles(params as any).promise();
  }

  listProjects: (params: RawParamsFrom<'listProjects'>) => Promise<ReturnTypeFrom<'listProjects'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listProjects(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }
  
  static fromClient(client: AWSMobile): Mobile {
    return new Mobile(client) as any;
  }
  
  static client(options?: AWSMobile.Types.ClientConfiguration): Mobile {
    return new Mobile(new AWSMobile(options)) as any;
  }
}  
