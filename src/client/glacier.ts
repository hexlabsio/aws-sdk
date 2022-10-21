import { Request, Glacier as AWSGlacier } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSGlacier> = AWSGlacier[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSGlacier> = AWSGlacier[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSGlacier[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSGlacier, Extras> = AWSGlacier[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSGlacier> = AWSGlacier[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Glacier {
  private constructor(private readonly client: AWSGlacier) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'glacier' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = ["listVaults"] as const;
  
  abortMultipartUpload: (params: RawParamsFrom<'abortMultipartUpload'>) => Promise<ReturnTypeFrom<'abortMultipartUpload'>>  = async params => {
  // undefined
    return this.client.abortMultipartUpload(params as any).promise();
  }

  abortVaultLock: (params: RawParamsFrom<'abortVaultLock'>) => Promise<ReturnTypeFrom<'abortVaultLock'>>  = async params => {
  // undefined
    return this.client.abortVaultLock(params as any).promise();
  }

  addTagsToVault: (params: RawParamsFrom<'addTagsToVault'>) => Promise<ReturnTypeFrom<'addTagsToVault'>>  = async params => {
  // undefined
    return this.client.addTagsToVault(params as any).promise();
  }

  completeMultipartUpload: (params: RawParamsFrom<'completeMultipartUpload'>) => Promise<ReturnTypeFrom<'completeMultipartUpload'>>  = async params => {
  // undefined
    return this.client.completeMultipartUpload(params as any).promise();
  }

  completeVaultLock: (params: RawParamsFrom<'completeVaultLock'>) => Promise<ReturnTypeFrom<'completeVaultLock'>>  = async params => {
  // undefined
    return this.client.completeVaultLock(params as any).promise();
  }

  createVault: (params: RawParamsFrom<'createVault'>) => Promise<ReturnTypeFrom<'createVault'>>  = async params => {
  // undefined
    return this.client.createVault(params as any).promise();
  }

  deleteArchive: (params: RawParamsFrom<'deleteArchive'>) => Promise<ReturnTypeFrom<'deleteArchive'>>  = async params => {
  // undefined
    return this.client.deleteArchive(params as any).promise();
  }

  deleteVault: (params: RawParamsFrom<'deleteVault'>) => Promise<ReturnTypeFrom<'deleteVault'>>  = async params => {
  // undefined
    return this.client.deleteVault(params as any).promise();
  }

  deleteVaultAccessPolicy: (params: RawParamsFrom<'deleteVaultAccessPolicy'>) => Promise<ReturnTypeFrom<'deleteVaultAccessPolicy'>>  = async params => {
  // undefined
    return this.client.deleteVaultAccessPolicy(params as any).promise();
  }

  deleteVaultNotifications: (params: RawParamsFrom<'deleteVaultNotifications'>) => Promise<ReturnTypeFrom<'deleteVaultNotifications'>>  = async params => {
  // undefined
    return this.client.deleteVaultNotifications(params as any).promise();
  }

  describeJob: (params: RawParamsFrom<'describeJob'>) => Promise<ReturnTypeFrom<'describeJob'>>  = async params => {
  // undefined
    return this.client.describeJob(params as any).promise();
  }

  describeVault: (params: RawParamsFrom<'describeVault'>) => Promise<ReturnTypeFrom<'describeVault'>>  = async params => {
  // undefined
    return this.client.describeVault(params as any).promise();
  }

  getDataRetrievalPolicy: (params: RawParamsFrom<'getDataRetrievalPolicy'>) => Promise<ReturnTypeFrom<'getDataRetrievalPolicy'>>  = async params => {
  // undefined
    return this.client.getDataRetrievalPolicy(params as any).promise();
  }

  getJobOutput: (params: RawParamsFrom<'getJobOutput'>) => Promise<ReturnTypeFrom<'getJobOutput'>>  = async params => {
  // undefined
    return this.client.getJobOutput(params as any).promise();
  }

  getVaultAccessPolicy: (params: RawParamsFrom<'getVaultAccessPolicy'>) => Promise<ReturnTypeFrom<'getVaultAccessPolicy'>>  = async params => {
  // undefined
    return this.client.getVaultAccessPolicy(params as any).promise();
  }

  getVaultLock: (params: RawParamsFrom<'getVaultLock'>) => Promise<ReturnTypeFrom<'getVaultLock'>>  = async params => {
  // undefined
    return this.client.getVaultLock(params as any).promise();
  }

  getVaultNotifications: (params: RawParamsFrom<'getVaultNotifications'>) => Promise<ReturnTypeFrom<'getVaultNotifications'>>  = async params => {
  // undefined
    return this.client.getVaultNotifications(params as any).promise();
  }

  initiateJob: (params: RawParamsFrom<'initiateJob'>) => Promise<ReturnTypeFrom<'initiateJob'>>  = async params => {
  // undefined
    return this.client.initiateJob(params as any).promise();
  }

  initiateMultipartUpload: (params: RawParamsFrom<'initiateMultipartUpload'>) => Promise<ReturnTypeFrom<'initiateMultipartUpload'>>  = async params => {
  // undefined
    return this.client.initiateMultipartUpload(params as any).promise();
  }

  initiateVaultLock: (params: RawParamsFrom<'initiateVaultLock'>) => Promise<ReturnTypeFrom<'initiateVaultLock'>>  = async params => {
  // undefined
    return this.client.initiateVaultLock(params as any).promise();
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string, limit?: number }>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['JobList'], undefined>}> {
    // {"inputToken":"marker","limitKey":"limit","outputToken":"Marker","resultKey":"JobList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.JobList ?? []) ? (result.JobList ?? []) : [result.JobList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listMultipartUploads(params: { [K in keyof ParamsFrom<'listMultipartUploads', { next?: string, limit?: number }>]: ParamsFrom<'listMultipartUploads', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMultipartUploads'>]-?: ReturnTypeFrom<'listMultipartUploads'>[K]}['UploadsList'], undefined>}> {
    // {"inputToken":"marker","limitKey":"limit","outputToken":"Marker","resultKey":"UploadsList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listMultipartUploads({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.UploadsList ?? []) ? (result.UploadsList ?? []) : [result.UploadsList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listParts(params: { [K in keyof ParamsFrom<'listParts', { next?: string, limit?: number }>]: ParamsFrom<'listParts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listParts'>]-?: ReturnTypeFrom<'listParts'>[K]}['Parts'], undefined>}> {
    // {"inputToken":"marker","limitKey":"limit","outputToken":"Marker","resultKey":"Parts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listParts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.Parts ?? []) ? (result.Parts ?? []) : [result.Parts]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listProvisionedCapacity: (params: RawParamsFrom<'listProvisionedCapacity'>) => Promise<ReturnTypeFrom<'listProvisionedCapacity'>>  = async params => {
  // undefined
    return this.client.listProvisionedCapacity(params as any).promise();
  }

  listTagsForVault: (params: RawParamsFrom<'listTagsForVault'>) => Promise<ReturnTypeFrom<'listTagsForVault'>>  = async params => {
  // undefined
    return this.client.listTagsForVault(params as any).promise();
  }

  async listVaults(params: { [K in keyof ParamsFrom<'listVaults', { next?: string, limit?: number }>]: ParamsFrom<'listVaults', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVaults'>]-?: ReturnTypeFrom<'listVaults'>[K]}['VaultList'], undefined>}> {
    // {"inputToken":"marker","limitKey":"limit","outputToken":"Marker","resultKey":"VaultList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVaults({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ;
    const member = (Array.isArray(result.VaultList ?? []) ? (result.VaultList ?? []) : [result.VaultList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  purchaseProvisionedCapacity: (params: RawParamsFrom<'purchaseProvisionedCapacity'>) => Promise<ReturnTypeFrom<'purchaseProvisionedCapacity'>>  = async params => {
  // undefined
    return this.client.purchaseProvisionedCapacity(params as any).promise();
  }

  removeTagsFromVault: (params: RawParamsFrom<'removeTagsFromVault'>) => Promise<ReturnTypeFrom<'removeTagsFromVault'>>  = async params => {
  // undefined
    return this.client.removeTagsFromVault(params as any).promise();
  }

  setDataRetrievalPolicy: (params: RawParamsFrom<'setDataRetrievalPolicy'>) => Promise<ReturnTypeFrom<'setDataRetrievalPolicy'>>  = async params => {
  // undefined
    return this.client.setDataRetrievalPolicy(params as any).promise();
  }

  setVaultAccessPolicy: (params: RawParamsFrom<'setVaultAccessPolicy'>) => Promise<ReturnTypeFrom<'setVaultAccessPolicy'>>  = async params => {
  // undefined
    return this.client.setVaultAccessPolicy(params as any).promise();
  }

  setVaultNotifications: (params: RawParamsFrom<'setVaultNotifications'>) => Promise<ReturnTypeFrom<'setVaultNotifications'>>  = async params => {
  // undefined
    return this.client.setVaultNotifications(params as any).promise();
  }

  uploadArchive: (params: RawParamsFrom<'uploadArchive'>) => Promise<ReturnTypeFrom<'uploadArchive'>>  = async params => {
  // undefined
    return this.client.uploadArchive(params as any).promise();
  }

  uploadMultipartPart: (params: RawParamsFrom<'uploadMultipartPart'>) => Promise<ReturnTypeFrom<'uploadMultipartPart'>>  = async params => {
  // undefined
    return this.client.uploadMultipartPart(params as any).promise();
  }
  
  static fromClient(client: AWSGlacier): Glacier {
    return new Glacier(client) as any;
  }
  
  static client(options?: AWSGlacier.Types.ClientConfiguration): Glacier {
    return new Glacier(new AWSGlacier(options)) as any;
  }
}  
