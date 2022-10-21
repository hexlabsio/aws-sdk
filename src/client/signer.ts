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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSigner> = AWSSigner[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Signer {
  private constructor(private readonly client: AWSSigner) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'signer' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listSigningJobs","listSigningPlatforms","listSigningProfiles"] as const;
  
  addProfilePermission: (params: RawParamsFrom<'addProfilePermission'>) => Promise<ReturnTypeFrom<'addProfilePermission'>>  = async params => {
  // undefined
    return this.client.addProfilePermission(params as any).promise();
  }

  cancelSigningProfile: (params: RawParamsFrom<'cancelSigningProfile'>) => Promise<ReturnTypeFrom<'cancelSigningProfile'>>  = async params => {
  // undefined
    return this.client.cancelSigningProfile(params as any).promise();
  }

  describeSigningJob: (params: RawParamsFrom<'describeSigningJob'>) => Promise<ReturnTypeFrom<'describeSigningJob'>>  = async params => {
  // undefined
    return this.client.describeSigningJob(params as any).promise();
  }

  getSigningPlatform: (params: RawParamsFrom<'getSigningPlatform'>) => Promise<ReturnTypeFrom<'getSigningPlatform'>>  = async params => {
  // undefined
    return this.client.getSigningPlatform(params as any).promise();
  }

  getSigningProfile: (params: RawParamsFrom<'getSigningProfile'>) => Promise<ReturnTypeFrom<'getSigningProfile'>>  = async params => {
  // undefined
    return this.client.getSigningProfile(params as any).promise();
  }

  listProfilePermissions: (params: RawParamsFrom<'listProfilePermissions'>) => Promise<ReturnTypeFrom<'listProfilePermissions'>>  = async params => {
  // undefined
    return this.client.listProfilePermissions(params as any).promise();
  }

  listSigningJobs: (params: RawParamsFrom<'listSigningJobs'>) => Promise<ReturnTypeFrom<'listSigningJobs'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSigningJobs(params as any).promise();
  }

  listSigningPlatforms: (params: RawParamsFrom<'listSigningPlatforms'>) => Promise<ReturnTypeFrom<'listSigningPlatforms'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSigningPlatforms(params as any).promise();
  }

  listSigningProfiles: (params: RawParamsFrom<'listSigningProfiles'>) => Promise<ReturnTypeFrom<'listSigningProfiles'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listSigningProfiles(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putSigningProfile: (params: RawParamsFrom<'putSigningProfile'>) => Promise<ReturnTypeFrom<'putSigningProfile'>>  = async params => {
  // undefined
    return this.client.putSigningProfile(params as any).promise();
  }

  removeProfilePermission: (params: RawParamsFrom<'removeProfilePermission'>) => Promise<ReturnTypeFrom<'removeProfilePermission'>>  = async params => {
  // undefined
    return this.client.removeProfilePermission(params as any).promise();
  }

  revokeSignature: (params: RawParamsFrom<'revokeSignature'>) => Promise<ReturnTypeFrom<'revokeSignature'>>  = async params => {
  // undefined
    return this.client.revokeSignature(params as any).promise();
  }

  revokeSigningProfile: (params: RawParamsFrom<'revokeSigningProfile'>) => Promise<ReturnTypeFrom<'revokeSigningProfile'>>  = async params => {
  // undefined
    return this.client.revokeSigningProfile(params as any).promise();
  }

  startSigningJob: (params: RawParamsFrom<'startSigningJob'>) => Promise<ReturnTypeFrom<'startSigningJob'>>  = async params => {
  // undefined
    return this.client.startSigningJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSSigner): Signer {
    return new Signer(client) as any;
  }
  
  static client(options?: AWSSigner.Types.ClientConfiguration): Signer {
    return new Signer(new AWSSigner(options)) as any;
  }
}  
