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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'glacier';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly ["listVaults"];
    
  abortMultipartUpload: FunctionTypeFrom<'abortMultipartUpload'>;

  abortVaultLock: FunctionTypeFrom<'abortVaultLock'>;

  addTagsToVault: FunctionTypeFrom<'addTagsToVault'>;

  completeMultipartUpload: FunctionTypeFrom<'completeMultipartUpload'>;

  completeVaultLock: FunctionTypeFrom<'completeVaultLock'>;

  createVault: FunctionTypeFrom<'createVault'>;

  deleteArchive: FunctionTypeFrom<'deleteArchive'>;

  deleteVault: FunctionTypeFrom<'deleteVault'>;

  deleteVaultAccessPolicy: FunctionTypeFrom<'deleteVaultAccessPolicy'>;

  deleteVaultNotifications: FunctionTypeFrom<'deleteVaultNotifications'>;

  describeJob: FunctionTypeFrom<'describeJob'>;

  describeVault: FunctionTypeFrom<'describeVault'>;

  getDataRetrievalPolicy: FunctionTypeFrom<'getDataRetrievalPolicy'>;

  getJobOutput: FunctionTypeFrom<'getJobOutput'>;

  getVaultAccessPolicy: FunctionTypeFrom<'getVaultAccessPolicy'>;

  getVaultLock: FunctionTypeFrom<'getVaultLock'>;

  getVaultNotifications: FunctionTypeFrom<'getVaultNotifications'>;

  initiateJob: FunctionTypeFrom<'initiateJob'>;

  initiateMultipartUpload: FunctionTypeFrom<'initiateMultipartUpload'>;

  initiateVaultLock: FunctionTypeFrom<'initiateVaultLock'>;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string, limit?: number }>, 'marker' | 'limit'>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['JobList'] }>
  ;

  listMultipartUploads(params: { [K in keyof Omit<ParamsFrom<'listMultipartUploads', { next?: string, limit?: number }>, 'marker' | 'limit'>]: ParamsFrom<'listMultipartUploads', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMultipartUploads'>]-?: ReturnTypeFrom<'listMultipartUploads'>[K]}['UploadsList'] }>
  ;

  listParts(params: { [K in keyof Omit<ParamsFrom<'listParts', { next?: string, limit?: number }>, 'marker' | 'limit'>]: ParamsFrom<'listParts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listParts'>]-?: ReturnTypeFrom<'listParts'>[K]}['Parts'] }>
  ;

  listProvisionedCapacity: FunctionTypeFrom<'listProvisionedCapacity'>;

  listTagsForVault: FunctionTypeFrom<'listTagsForVault'>;

  listVaults(params: { [K in keyof Omit<ParamsFrom<'listVaults', { next?: string, limit?: number }>, 'marker' | 'limit'>]: ParamsFrom<'listVaults', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVaults'>]-?: ReturnTypeFrom<'listVaults'>[K]}['VaultList'] }>
  listVaults(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVaults'>]-?: ReturnTypeFrom<'listVaults'>[K]}['VaultList'] }>;

  purchaseProvisionedCapacity: FunctionTypeFrom<'purchaseProvisionedCapacity'>;

  removeTagsFromVault: FunctionTypeFrom<'removeTagsFromVault'>;

  setDataRetrievalPolicy: FunctionTypeFrom<'setDataRetrievalPolicy'>;

  setVaultAccessPolicy: FunctionTypeFrom<'setVaultAccessPolicy'>;

  setVaultNotifications: FunctionTypeFrom<'setVaultNotifications'>;

  uploadArchive: FunctionTypeFrom<'uploadArchive'>;

  uploadMultipartPart: FunctionTypeFrom<'uploadMultipartPart'>
}
 
export class Glacier implements ClientType {
  private constructor(private readonly client: AWSGlacier) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'glacier';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = ["listVaults"] as const;
  
  async abortMultipartUpload(...args: any): Promise<any> {
  // undefined
    return this.client.abortMultipartUpload(...args).promise()
  }

  async abortVaultLock(...args: any): Promise<any> {
  // undefined
    return this.client.abortVaultLock(...args).promise()
  }

  async addTagsToVault(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToVault(...args).promise()
  }

  async completeMultipartUpload(...args: any): Promise<any> {
  // undefined
    return this.client.completeMultipartUpload(...args).promise()
  }

  async completeVaultLock(...args: any): Promise<any> {
  // undefined
    return this.client.completeVaultLock(...args).promise()
  }

  async createVault(...args: any): Promise<any> {
  // undefined
    return this.client.createVault(...args).promise()
  }

  async deleteArchive(...args: any): Promise<any> {
  // undefined
    return this.client.deleteArchive(...args).promise()
  }

  async deleteVault(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVault(...args).promise()
  }

  async deleteVaultAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVaultAccessPolicy(...args).promise()
  }

  async deleteVaultNotifications(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVaultNotifications(...args).promise()
  }

  async describeJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeJob(...args).promise()
  }

  async describeVault(...args: any): Promise<any> {
  // undefined
    return this.client.describeVault(...args).promise()
  }

  async getDataRetrievalPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getDataRetrievalPolicy(...args).promise()
  }

  async getJobOutput(...args: any): Promise<any> {
  // undefined
    return this.client.getJobOutput(...args).promise()
  }

  async getVaultAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getVaultAccessPolicy(...args).promise()
  }

  async getVaultLock(...args: any): Promise<any> {
  // undefined
    return this.client.getVaultLock(...args).promise()
  }

  async getVaultNotifications(...args: any): Promise<any> {
  // undefined
    return this.client.getVaultNotifications(...args).promise()
  }

  async initiateJob(...args: any): Promise<any> {
  // undefined
    return this.client.initiateJob(...args).promise()
  }

  async initiateMultipartUpload(...args: any): Promise<any> {
  // undefined
    return this.client.initiateMultipartUpload(...args).promise()
  }

  async initiateVaultLock(...args: any): Promise<any> {
  // undefined
    return this.client.initiateVaultLock(...args).promise()
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"limit","outputToken":"Marker","resultKey":"JobList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.JobList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMultipartUploads(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"limit","outputToken":"Marker","resultKey":"UploadsList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listMultipartUploads(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.UploadsList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listParts(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"limit","outputToken":"Marker","resultKey":"Parts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listParts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Parts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProvisionedCapacity(...args: any): Promise<any> {
  // undefined
    return this.client.listProvisionedCapacity(...args).promise()
  }

  async listTagsForVault(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForVault(...args).promise()
  }

  async listVaults(...args: any): Promise<any> {
    // {"inputToken":"marker","limitKey":"limit","outputToken":"Marker","resultKey":"VaultList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { marker: next } : {};
    const limitTokenPart = limit ? { limit: limit } : {};
    const result = await this.client.listVaults(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.VaultList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async purchaseProvisionedCapacity(...args: any): Promise<any> {
  // undefined
    return this.client.purchaseProvisionedCapacity(...args).promise()
  }

  async removeTagsFromVault(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromVault(...args).promise()
  }

  async setDataRetrievalPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.setDataRetrievalPolicy(...args).promise()
  }

  async setVaultAccessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.setVaultAccessPolicy(...args).promise()
  }

  async setVaultNotifications(...args: any): Promise<any> {
  // undefined
    return this.client.setVaultNotifications(...args).promise()
  }

  async uploadArchive(...args: any): Promise<any> {
  // undefined
    return this.client.uploadArchive(...args).promise()
  }

  async uploadMultipartPart(...args: any): Promise<any> {
  // undefined
    return this.client.uploadMultipartPart(...args).promise()
  }
  
  static fromClient(client: AWSGlacier): ClientType {
    return new Glacier(client) as any;
  }
  
  static client(options?: AWSGlacier.Types.ClientConfiguration): ClientType {
    return new Glacier(new AWSGlacier(options)) as any;
  }
}  
