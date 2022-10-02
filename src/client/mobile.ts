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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mobile';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listBundles","listProjects"];
    
  createProject: FunctionTypeFrom<'createProject'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  describeBundle: FunctionTypeFrom<'describeBundle'>;

  describeProject: FunctionTypeFrom<'describeProject'>;

  exportBundle: FunctionTypeFrom<'exportBundle'>;

  exportProject: FunctionTypeFrom<'exportProject'>;

  listBundles: FunctionTypeFrom<'listBundles'>;

  listProjects: FunctionTypeFrom<'listProjects'>;

  updateProject: FunctionTypeFrom<'updateProject'>
}
 
export class Mobile implements ClientType {
  private constructor(private readonly client: AWSMobile) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mobile';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listBundles","listProjects"] as const;
  
  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async describeBundle(...args: any): Promise<any> {
  // undefined
    return this.client.describeBundle(...args).promise()
  }

  async describeProject(...args: any): Promise<any> {
  // undefined
    return this.client.describeProject(...args).promise()
  }

  async exportBundle(...args: any): Promise<any> {
  // undefined
    return this.client.exportBundle(...args).promise()
  }

  async exportProject(...args: any): Promise<any> {
  // undefined
    return this.client.exportProject(...args).promise()
  }

  async listBundles(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listBundles(...args).promise()
  }

  async listProjects(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listProjects(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }
  
  static fromClient(client: AWSMobile): ClientType {
    return new Mobile(client) as any;
  }
  
  static client(options?: AWSMobile.Types.ClientConfiguration): ClientType {
    return new Mobile(new AWSMobile(options)) as any;
  }
}  
