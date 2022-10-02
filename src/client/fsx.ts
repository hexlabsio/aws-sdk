import { Request, FSx as AWSFSx } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSFSx> = AWSFSx[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSFSx> = AWSFSx[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSFSx[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSFSx, Extras> = AWSFSx[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'fsx';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly ["describeBackups","describeDataRepositoryAssociations","describeDataRepositoryTasks","describeFileCaches","describeFileSystems","describeSnapshots","describeStorageVirtualMachines","describeVolumes"];
    
  associateFileSystemAliases: FunctionTypeFrom<'associateFileSystemAliases'>;

  cancelDataRepositoryTask: FunctionTypeFrom<'cancelDataRepositoryTask'>;

  copyBackup: FunctionTypeFrom<'copyBackup'>;

  createBackup: FunctionTypeFrom<'createBackup'>;

  createDataRepositoryAssociation: FunctionTypeFrom<'createDataRepositoryAssociation'>;

  createDataRepositoryTask: FunctionTypeFrom<'createDataRepositoryTask'>;

  createFileCache: FunctionTypeFrom<'createFileCache'>;

  createFileSystem: FunctionTypeFrom<'createFileSystem'>;

  createFileSystemFromBackup: FunctionTypeFrom<'createFileSystemFromBackup'>;

  createSnapshot: FunctionTypeFrom<'createSnapshot'>;

  createStorageVirtualMachine: FunctionTypeFrom<'createStorageVirtualMachine'>;

  createVolume: FunctionTypeFrom<'createVolume'>;

  createVolumeFromBackup: FunctionTypeFrom<'createVolumeFromBackup'>;

  deleteBackup: FunctionTypeFrom<'deleteBackup'>;

  deleteDataRepositoryAssociation: FunctionTypeFrom<'deleteDataRepositoryAssociation'>;

  deleteFileCache: FunctionTypeFrom<'deleteFileCache'>;

  deleteFileSystem: FunctionTypeFrom<'deleteFileSystem'>;

  deleteSnapshot: FunctionTypeFrom<'deleteSnapshot'>;

  deleteStorageVirtualMachine: FunctionTypeFrom<'deleteStorageVirtualMachine'>;

  deleteVolume: FunctionTypeFrom<'deleteVolume'>;

  describeBackups: FunctionTypeFrom<'describeBackups'>;

  describeDataRepositoryAssociations: FunctionTypeFrom<'describeDataRepositoryAssociations'>;

  describeDataRepositoryTasks: FunctionTypeFrom<'describeDataRepositoryTasks'>;

  describeFileCaches: FunctionTypeFrom<'describeFileCaches'>;

  describeFileSystemAliases: FunctionTypeFrom<'describeFileSystemAliases'>;

  describeFileSystems: FunctionTypeFrom<'describeFileSystems'>;

  describeSnapshots: FunctionTypeFrom<'describeSnapshots'>;

  describeStorageVirtualMachines(params: { [K in keyof Omit<ParamsFrom<'describeStorageVirtualMachines', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeStorageVirtualMachines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStorageVirtualMachines'>]-?: ReturnTypeFrom<'describeStorageVirtualMachines'>[K]}['StorageVirtualMachines'] }>
  describeStorageVirtualMachines(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStorageVirtualMachines'>]-?: ReturnTypeFrom<'describeStorageVirtualMachines'>[K]}['StorageVirtualMachines'] }>;

  describeVolumes(params: { [K in keyof Omit<ParamsFrom<'describeVolumes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeVolumes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVolumes'>]-?: ReturnTypeFrom<'describeVolumes'>[K]}['Volumes'] }>
  describeVolumes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVolumes'>]-?: ReturnTypeFrom<'describeVolumes'>[K]}['Volumes'] }>;

  disassociateFileSystemAliases: FunctionTypeFrom<'disassociateFileSystemAliases'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  releaseFileSystemNfsV3Locks: FunctionTypeFrom<'releaseFileSystemNfsV3Locks'>;

  restoreVolumeFromSnapshot: FunctionTypeFrom<'restoreVolumeFromSnapshot'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDataRepositoryAssociation: FunctionTypeFrom<'updateDataRepositoryAssociation'>;

  updateFileCache: FunctionTypeFrom<'updateFileCache'>;

  updateFileSystem: FunctionTypeFrom<'updateFileSystem'>;

  updateSnapshot: FunctionTypeFrom<'updateSnapshot'>;

  updateStorageVirtualMachine: FunctionTypeFrom<'updateStorageVirtualMachine'>;

  updateVolume: FunctionTypeFrom<'updateVolume'>
}
 
export class FSx implements ClientType {
  private constructor(private readonly client: AWSFSx) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'fsx';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = ["describeBackups","describeDataRepositoryAssociations","describeDataRepositoryTasks","describeFileCaches","describeFileSystems","describeSnapshots","describeStorageVirtualMachines","describeVolumes"] as const;
  
  async associateFileSystemAliases(...args: any): Promise<any> {
  // undefined
    return this.client.associateFileSystemAliases(...args).promise()
  }

  async cancelDataRepositoryTask(...args: any): Promise<any> {
  // undefined
    return this.client.cancelDataRepositoryTask(...args).promise()
  }

  async copyBackup(...args: any): Promise<any> {
  // undefined
    return this.client.copyBackup(...args).promise()
  }

  async createBackup(...args: any): Promise<any> {
  // undefined
    return this.client.createBackup(...args).promise()
  }

  async createDataRepositoryAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.createDataRepositoryAssociation(...args).promise()
  }

  async createDataRepositoryTask(...args: any): Promise<any> {
  // undefined
    return this.client.createDataRepositoryTask(...args).promise()
  }

  async createFileCache(...args: any): Promise<any> {
  // undefined
    return this.client.createFileCache(...args).promise()
  }

  async createFileSystem(...args: any): Promise<any> {
  // undefined
    return this.client.createFileSystem(...args).promise()
  }

  async createFileSystemFromBackup(...args: any): Promise<any> {
  // undefined
    return this.client.createFileSystemFromBackup(...args).promise()
  }

  async createSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshot(...args).promise()
  }

  async createStorageVirtualMachine(...args: any): Promise<any> {
  // undefined
    return this.client.createStorageVirtualMachine(...args).promise()
  }

  async createVolume(...args: any): Promise<any> {
  // undefined
    return this.client.createVolume(...args).promise()
  }

  async createVolumeFromBackup(...args: any): Promise<any> {
  // undefined
    return this.client.createVolumeFromBackup(...args).promise()
  }

  async deleteBackup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBackup(...args).promise()
  }

  async deleteDataRepositoryAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataRepositoryAssociation(...args).promise()
  }

  async deleteFileCache(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFileCache(...args).promise()
  }

  async deleteFileSystem(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFileSystem(...args).promise()
  }

  async deleteSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshot(...args).promise()
  }

  async deleteStorageVirtualMachine(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStorageVirtualMachine(...args).promise()
  }

  async deleteVolume(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVolume(...args).promise()
  }

  async describeBackups(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeBackups(...args).promise()
  }

  async describeDataRepositoryAssociations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDataRepositoryAssociations(...args).promise()
  }

  async describeDataRepositoryTasks(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDataRepositoryTasks(...args).promise()
  }

  async describeFileCaches(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeFileCaches(...args).promise()
  }

  async describeFileSystemAliases(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeFileSystemAliases(...args).promise()
  }

  async describeFileSystems(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeFileSystems(...args).promise()
  }

  async describeSnapshots(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeSnapshots(...args).promise()
  }

  async describeStorageVirtualMachines(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StorageVirtualMachines"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStorageVirtualMachines(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StorageVirtualMachines ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeVolumes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Volumes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVolumes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Volumes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async disassociateFileSystemAliases(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateFileSystemAliases(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTagsForResource(...args).promise()
  }

  async releaseFileSystemNfsV3Locks(...args: any): Promise<any> {
  // undefined
    return this.client.releaseFileSystemNfsV3Locks(...args).promise()
  }

  async restoreVolumeFromSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.restoreVolumeFromSnapshot(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDataRepositoryAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataRepositoryAssociation(...args).promise()
  }

  async updateFileCache(...args: any): Promise<any> {
  // undefined
    return this.client.updateFileCache(...args).promise()
  }

  async updateFileSystem(...args: any): Promise<any> {
  // undefined
    return this.client.updateFileSystem(...args).promise()
  }

  async updateSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.updateSnapshot(...args).promise()
  }

  async updateStorageVirtualMachine(...args: any): Promise<any> {
  // undefined
    return this.client.updateStorageVirtualMachine(...args).promise()
  }

  async updateVolume(...args: any): Promise<any> {
  // undefined
    return this.client.updateVolume(...args).promise()
  }
  
  static fromClient(client: AWSFSx): ClientType {
    return new FSx(client) as any;
  }
  
  static client(options?: AWSFSx.Types.ClientConfiguration): ClientType {
    return new FSx(new AWSFSx(options)) as any;
  }
}  
