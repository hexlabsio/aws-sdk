import { Request, Signer as AWSSigner } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSigner> = AWSSigner[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSigner> = AWSSigner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSigner[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSigner, Extras> = AWSSigner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'signer';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listSigningJobs","listSigningPlatforms","listSigningProfiles"];
    
  addProfilePermission: FunctionTypeFrom<'addProfilePermission'>;

  cancelSigningProfile: FunctionTypeFrom<'cancelSigningProfile'>;

  describeSigningJob: FunctionTypeFrom<'describeSigningJob'>;

  getSigningPlatform: FunctionTypeFrom<'getSigningPlatform'>;

  getSigningProfile: FunctionTypeFrom<'getSigningProfile'>;

  listProfilePermissions: FunctionTypeFrom<'listProfilePermissions'>;

  listSigningJobs: FunctionTypeFrom<'listSigningJobs'>;

  listSigningPlatforms: FunctionTypeFrom<'listSigningPlatforms'>;

  listSigningProfiles: FunctionTypeFrom<'listSigningProfiles'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putSigningProfile: FunctionTypeFrom<'putSigningProfile'>;

  removeProfilePermission: FunctionTypeFrom<'removeProfilePermission'>;

  revokeSignature: FunctionTypeFrom<'revokeSignature'>;

  revokeSigningProfile: FunctionTypeFrom<'revokeSigningProfile'>;

  startSigningJob: FunctionTypeFrom<'startSigningJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class Signer implements ClientType {
  private constructor(private readonly client: AWSSigner) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'signer';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listSigningJobs","listSigningPlatforms","listSigningProfiles"] as const;
  
  async addProfilePermission(...args: any): Promise<any> {
  // undefined
    return this.client.addProfilePermission(...args).promise()
  }

  async cancelSigningProfile(...args: any): Promise<any> {
  // undefined
    return this.client.cancelSigningProfile(...args).promise()
  }

  async describeSigningJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeSigningJob(...args).promise()
  }

  async getSigningPlatform(...args: any): Promise<any> {
  // undefined
    return this.client.getSigningPlatform(...args).promise()
  }

  async getSigningProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getSigningProfile(...args).promise()
  }

  async listProfilePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.listProfilePermissions(...args).promise()
  }

  async listSigningJobs(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSigningJobs(...args).promise()
  }

  async listSigningPlatforms(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSigningPlatforms(...args).promise()
  }

  async listSigningProfiles(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSigningProfiles(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putSigningProfile(...args: any): Promise<any> {
  // undefined
    return this.client.putSigningProfile(...args).promise()
  }

  async removeProfilePermission(...args: any): Promise<any> {
  // undefined
    return this.client.removeProfilePermission(...args).promise()
  }

  async revokeSignature(...args: any): Promise<any> {
  // undefined
    return this.client.revokeSignature(...args).promise()
  }

  async revokeSigningProfile(...args: any): Promise<any> {
  // undefined
    return this.client.revokeSigningProfile(...args).promise()
  }

  async startSigningJob(...args: any): Promise<any> {
  // undefined
    return this.client.startSigningJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSSigner): ClientType {
    return new Signer(client) as any;
  }
  
  static client(options?: AWSSigner.Types.ClientConfiguration): ClientType {
    return new Signer(new AWSSigner(options)) as any;
  }
}  
