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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSFSx> = AWSFSx[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class FSx {
  private constructor(private readonly client: AWSFSx) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'fsx' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = ["describeBackups","describeDataRepositoryAssociations","describeDataRepositoryTasks","describeFileCaches","describeFileSystems","describeSnapshots","describeStorageVirtualMachines","describeVolumes"] as const;
  
  associateFileSystemAliases: (params: RawParamsFrom<'associateFileSystemAliases'>) => Promise<ReturnTypeFrom<'associateFileSystemAliases'>>  = async params => {
  // undefined
    return this.client.associateFileSystemAliases(params as any).promise();
  }

  cancelDataRepositoryTask: (params: RawParamsFrom<'cancelDataRepositoryTask'>) => Promise<ReturnTypeFrom<'cancelDataRepositoryTask'>>  = async params => {
  // undefined
    return this.client.cancelDataRepositoryTask(params as any).promise();
  }

  copyBackup: (params: RawParamsFrom<'copyBackup'>) => Promise<ReturnTypeFrom<'copyBackup'>>  = async params => {
  // undefined
    return this.client.copyBackup(params as any).promise();
  }

  createBackup: (params: RawParamsFrom<'createBackup'>) => Promise<ReturnTypeFrom<'createBackup'>>  = async params => {
  // undefined
    return this.client.createBackup(params as any).promise();
  }

  createDataRepositoryAssociation: (params: RawParamsFrom<'createDataRepositoryAssociation'>) => Promise<ReturnTypeFrom<'createDataRepositoryAssociation'>>  = async params => {
  // undefined
    return this.client.createDataRepositoryAssociation(params as any).promise();
  }

  createDataRepositoryTask: (params: RawParamsFrom<'createDataRepositoryTask'>) => Promise<ReturnTypeFrom<'createDataRepositoryTask'>>  = async params => {
  // undefined
    return this.client.createDataRepositoryTask(params as any).promise();
  }

  createFileCache: (params: RawParamsFrom<'createFileCache'>) => Promise<ReturnTypeFrom<'createFileCache'>>  = async params => {
  // undefined
    return this.client.createFileCache(params as any).promise();
  }

  createFileSystem: (params: RawParamsFrom<'createFileSystem'>) => Promise<ReturnTypeFrom<'createFileSystem'>>  = async params => {
  // undefined
    return this.client.createFileSystem(params as any).promise();
  }

  createFileSystemFromBackup: (params: RawParamsFrom<'createFileSystemFromBackup'>) => Promise<ReturnTypeFrom<'createFileSystemFromBackup'>>  = async params => {
  // undefined
    return this.client.createFileSystemFromBackup(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createStorageVirtualMachine: (params: RawParamsFrom<'createStorageVirtualMachine'>) => Promise<ReturnTypeFrom<'createStorageVirtualMachine'>>  = async params => {
  // undefined
    return this.client.createStorageVirtualMachine(params as any).promise();
  }

  createVolume: (params: RawParamsFrom<'createVolume'>) => Promise<ReturnTypeFrom<'createVolume'>>  = async params => {
  // undefined
    return this.client.createVolume(params as any).promise();
  }

  createVolumeFromBackup: (params: RawParamsFrom<'createVolumeFromBackup'>) => Promise<ReturnTypeFrom<'createVolumeFromBackup'>>  = async params => {
  // undefined
    return this.client.createVolumeFromBackup(params as any).promise();
  }

  deleteBackup: (params: RawParamsFrom<'deleteBackup'>) => Promise<ReturnTypeFrom<'deleteBackup'>>  = async params => {
  // undefined
    return this.client.deleteBackup(params as any).promise();
  }

  deleteDataRepositoryAssociation: (params: RawParamsFrom<'deleteDataRepositoryAssociation'>) => Promise<ReturnTypeFrom<'deleteDataRepositoryAssociation'>>  = async params => {
  // undefined
    return this.client.deleteDataRepositoryAssociation(params as any).promise();
  }

  deleteFileCache: (params: RawParamsFrom<'deleteFileCache'>) => Promise<ReturnTypeFrom<'deleteFileCache'>>  = async params => {
  // undefined
    return this.client.deleteFileCache(params as any).promise();
  }

  deleteFileSystem: (params: RawParamsFrom<'deleteFileSystem'>) => Promise<ReturnTypeFrom<'deleteFileSystem'>>  = async params => {
  // undefined
    return this.client.deleteFileSystem(params as any).promise();
  }

  deleteSnapshot: (params: RawParamsFrom<'deleteSnapshot'>) => Promise<ReturnTypeFrom<'deleteSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteSnapshot(params as any).promise();
  }

  deleteStorageVirtualMachine: (params: RawParamsFrom<'deleteStorageVirtualMachine'>) => Promise<ReturnTypeFrom<'deleteStorageVirtualMachine'>>  = async params => {
  // undefined
    return this.client.deleteStorageVirtualMachine(params as any).promise();
  }

  deleteVolume: (params: RawParamsFrom<'deleteVolume'>) => Promise<ReturnTypeFrom<'deleteVolume'>>  = async params => {
  // undefined
    return this.client.deleteVolume(params as any).promise();
  }

  describeBackups: (params: RawParamsFrom<'describeBackups'>) => Promise<ReturnTypeFrom<'describeBackups'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeBackups(params as any).promise();
  }

  describeDataRepositoryAssociations: (params: RawParamsFrom<'describeDataRepositoryAssociations'>) => Promise<ReturnTypeFrom<'describeDataRepositoryAssociations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDataRepositoryAssociations(params as any).promise();
  }

  describeDataRepositoryTasks: (params: RawParamsFrom<'describeDataRepositoryTasks'>) => Promise<ReturnTypeFrom<'describeDataRepositoryTasks'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeDataRepositoryTasks(params as any).promise();
  }

  describeFileCaches: (params: RawParamsFrom<'describeFileCaches'>) => Promise<ReturnTypeFrom<'describeFileCaches'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeFileCaches(params as any).promise();
  }

  describeFileSystemAliases: (params: RawParamsFrom<'describeFileSystemAliases'>) => Promise<ReturnTypeFrom<'describeFileSystemAliases'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeFileSystemAliases(params as any).promise();
  }

  describeFileSystems: (params: RawParamsFrom<'describeFileSystems'>) => Promise<ReturnTypeFrom<'describeFileSystems'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeFileSystems(params as any).promise();
  }

  describeSnapshots: (params: RawParamsFrom<'describeSnapshots'>) => Promise<ReturnTypeFrom<'describeSnapshots'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeSnapshots(params as any).promise();
  }

  async describeStorageVirtualMachines(params: { [K in keyof ParamsFrom<'describeStorageVirtualMachines', { next?: string, limit?: number }>]: ParamsFrom<'describeStorageVirtualMachines', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStorageVirtualMachines'>]-?: ReturnTypeFrom<'describeStorageVirtualMachines'>[K]}['StorageVirtualMachines'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"StorageVirtualMachines"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeStorageVirtualMachines({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.StorageVirtualMachines ?? []) ? (result.StorageVirtualMachines ?? []) : [result.StorageVirtualMachines]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeVolumes(params: { [K in keyof ParamsFrom<'describeVolumes', { next?: string, limit?: number }>]: ParamsFrom<'describeVolumes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVolumes'>]-?: ReturnTypeFrom<'describeVolumes'>[K]}['Volumes'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Volumes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeVolumes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Volumes ?? []) ? (result.Volumes ?? []) : [result.Volumes]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  disassociateFileSystemAliases: (params: RawParamsFrom<'disassociateFileSystemAliases'>) => Promise<ReturnTypeFrom<'disassociateFileSystemAliases'>>  = async params => {
  // undefined
    return this.client.disassociateFileSystemAliases(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTagsForResource(params as any).promise();
  }

  releaseFileSystemNfsV3Locks: (params: RawParamsFrom<'releaseFileSystemNfsV3Locks'>) => Promise<ReturnTypeFrom<'releaseFileSystemNfsV3Locks'>>  = async params => {
  // undefined
    return this.client.releaseFileSystemNfsV3Locks(params as any).promise();
  }

  restoreVolumeFromSnapshot: (params: RawParamsFrom<'restoreVolumeFromSnapshot'>) => Promise<ReturnTypeFrom<'restoreVolumeFromSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreVolumeFromSnapshot(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDataRepositoryAssociation: (params: RawParamsFrom<'updateDataRepositoryAssociation'>) => Promise<ReturnTypeFrom<'updateDataRepositoryAssociation'>>  = async params => {
  // undefined
    return this.client.updateDataRepositoryAssociation(params as any).promise();
  }

  updateFileCache: (params: RawParamsFrom<'updateFileCache'>) => Promise<ReturnTypeFrom<'updateFileCache'>>  = async params => {
  // undefined
    return this.client.updateFileCache(params as any).promise();
  }

  updateFileSystem: (params: RawParamsFrom<'updateFileSystem'>) => Promise<ReturnTypeFrom<'updateFileSystem'>>  = async params => {
  // undefined
    return this.client.updateFileSystem(params as any).promise();
  }

  updateSnapshot: (params: RawParamsFrom<'updateSnapshot'>) => Promise<ReturnTypeFrom<'updateSnapshot'>>  = async params => {
  // undefined
    return this.client.updateSnapshot(params as any).promise();
  }

  updateStorageVirtualMachine: (params: RawParamsFrom<'updateStorageVirtualMachine'>) => Promise<ReturnTypeFrom<'updateStorageVirtualMachine'>>  = async params => {
  // undefined
    return this.client.updateStorageVirtualMachine(params as any).promise();
  }

  updateVolume: (params: RawParamsFrom<'updateVolume'>) => Promise<ReturnTypeFrom<'updateVolume'>>  = async params => {
  // undefined
    return this.client.updateVolume(params as any).promise();
  }
  
  static fromClient(client: AWSFSx): FSx {
    return new FSx(client) as any;
  }
  
  static client(options?: AWSFSx.Types.ClientConfiguration): FSx {
    return new FSx(new AWSFSx(options)) as any;
  }
}  
