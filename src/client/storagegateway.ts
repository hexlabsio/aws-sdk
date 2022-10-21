import { Request, StorageGateway as AWSStorageGateway } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSStorageGateway> = AWSStorageGateway[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSStorageGateway> = AWSStorageGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSStorageGateway[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSStorageGateway, Extras> = AWSStorageGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSStorageGateway> = AWSStorageGateway[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class StorageGateway {
  private constructor(private readonly client: AWSStorageGateway) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'storagegateway' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = ["describeTapeArchives","listFileShares","listFileSystemAssociations","listGateways","listTapePools","listTapes","listVolumes"] as const;
  
  activateGateway: (params: RawParamsFrom<'activateGateway'>) => Promise<ReturnTypeFrom<'activateGateway'>>  = async params => {
  // undefined
    return this.client.activateGateway(params as any).promise();
  }

  addCache: (params: RawParamsFrom<'addCache'>) => Promise<ReturnTypeFrom<'addCache'>>  = async params => {
  // undefined
    return this.client.addCache(params as any).promise();
  }

  addTagsToResource: (params: RawParamsFrom<'addTagsToResource'>) => Promise<ReturnTypeFrom<'addTagsToResource'>>  = async params => {
  // undefined
    return this.client.addTagsToResource(params as any).promise();
  }

  addUploadBuffer: (params: RawParamsFrom<'addUploadBuffer'>) => Promise<ReturnTypeFrom<'addUploadBuffer'>>  = async params => {
  // undefined
    return this.client.addUploadBuffer(params as any).promise();
  }

  addWorkingStorage: (params: RawParamsFrom<'addWorkingStorage'>) => Promise<ReturnTypeFrom<'addWorkingStorage'>>  = async params => {
  // undefined
    return this.client.addWorkingStorage(params as any).promise();
  }

  assignTapePool: (params: RawParamsFrom<'assignTapePool'>) => Promise<ReturnTypeFrom<'assignTapePool'>>  = async params => {
  // undefined
    return this.client.assignTapePool(params as any).promise();
  }

  associateFileSystem: (params: RawParamsFrom<'associateFileSystem'>) => Promise<ReturnTypeFrom<'associateFileSystem'>>  = async params => {
  // undefined
    return this.client.associateFileSystem(params as any).promise();
  }

  attachVolume: (params: RawParamsFrom<'attachVolume'>) => Promise<ReturnTypeFrom<'attachVolume'>>  = async params => {
  // undefined
    return this.client.attachVolume(params as any).promise();
  }

  cancelArchival: (params: RawParamsFrom<'cancelArchival'>) => Promise<ReturnTypeFrom<'cancelArchival'>>  = async params => {
  // undefined
    return this.client.cancelArchival(params as any).promise();
  }

  cancelRetrieval: (params: RawParamsFrom<'cancelRetrieval'>) => Promise<ReturnTypeFrom<'cancelRetrieval'>>  = async params => {
  // undefined
    return this.client.cancelRetrieval(params as any).promise();
  }

  createCachediSCSIVolume: (params: RawParamsFrom<'createCachediSCSIVolume'>) => Promise<ReturnTypeFrom<'createCachediSCSIVolume'>>  = async params => {
  // undefined
    return this.client.createCachediSCSIVolume(params as any).promise();
  }

  createNFSFileShare: (params: RawParamsFrom<'createNFSFileShare'>) => Promise<ReturnTypeFrom<'createNFSFileShare'>>  = async params => {
  // undefined
    return this.client.createNFSFileShare(params as any).promise();
  }

  createSMBFileShare: (params: RawParamsFrom<'createSMBFileShare'>) => Promise<ReturnTypeFrom<'createSMBFileShare'>>  = async params => {
  // undefined
    return this.client.createSMBFileShare(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createSnapshotFromVolumeRecoveryPoint: (params: RawParamsFrom<'createSnapshotFromVolumeRecoveryPoint'>) => Promise<ReturnTypeFrom<'createSnapshotFromVolumeRecoveryPoint'>>  = async params => {
  // undefined
    return this.client.createSnapshotFromVolumeRecoveryPoint(params as any).promise();
  }

  createStorediSCSIVolume: (params: RawParamsFrom<'createStorediSCSIVolume'>) => Promise<ReturnTypeFrom<'createStorediSCSIVolume'>>  = async params => {
  // undefined
    return this.client.createStorediSCSIVolume(params as any).promise();
  }

  createTapePool: (params: RawParamsFrom<'createTapePool'>) => Promise<ReturnTypeFrom<'createTapePool'>>  = async params => {
  // undefined
    return this.client.createTapePool(params as any).promise();
  }

  createTapeWithBarcode: (params: RawParamsFrom<'createTapeWithBarcode'>) => Promise<ReturnTypeFrom<'createTapeWithBarcode'>>  = async params => {
  // undefined
    return this.client.createTapeWithBarcode(params as any).promise();
  }

  createTapes: (params: RawParamsFrom<'createTapes'>) => Promise<ReturnTypeFrom<'createTapes'>>  = async params => {
  // undefined
    return this.client.createTapes(params as any).promise();
  }

  deleteAutomaticTapeCreationPolicy: (params: RawParamsFrom<'deleteAutomaticTapeCreationPolicy'>) => Promise<ReturnTypeFrom<'deleteAutomaticTapeCreationPolicy'>>  = async params => {
  // undefined
    return this.client.deleteAutomaticTapeCreationPolicy(params as any).promise();
  }

  deleteBandwidthRateLimit: (params: RawParamsFrom<'deleteBandwidthRateLimit'>) => Promise<ReturnTypeFrom<'deleteBandwidthRateLimit'>>  = async params => {
  // undefined
    return this.client.deleteBandwidthRateLimit(params as any).promise();
  }

  deleteChapCredentials: (params: RawParamsFrom<'deleteChapCredentials'>) => Promise<ReturnTypeFrom<'deleteChapCredentials'>>  = async params => {
  // undefined
    return this.client.deleteChapCredentials(params as any).promise();
  }

  deleteFileShare: (params: RawParamsFrom<'deleteFileShare'>) => Promise<ReturnTypeFrom<'deleteFileShare'>>  = async params => {
  // undefined
    return this.client.deleteFileShare(params as any).promise();
  }

  deleteGateway: (params: RawParamsFrom<'deleteGateway'>) => Promise<ReturnTypeFrom<'deleteGateway'>>  = async params => {
  // undefined
    return this.client.deleteGateway(params as any).promise();
  }

  deleteSnapshotSchedule: (params: RawParamsFrom<'deleteSnapshotSchedule'>) => Promise<ReturnTypeFrom<'deleteSnapshotSchedule'>>  = async params => {
  // undefined
    return this.client.deleteSnapshotSchedule(params as any).promise();
  }

  deleteTape: (params: RawParamsFrom<'deleteTape'>) => Promise<ReturnTypeFrom<'deleteTape'>>  = async params => {
  // undefined
    return this.client.deleteTape(params as any).promise();
  }

  deleteTapeArchive: (params: RawParamsFrom<'deleteTapeArchive'>) => Promise<ReturnTypeFrom<'deleteTapeArchive'>>  = async params => {
  // undefined
    return this.client.deleteTapeArchive(params as any).promise();
  }

  deleteTapePool: (params: RawParamsFrom<'deleteTapePool'>) => Promise<ReturnTypeFrom<'deleteTapePool'>>  = async params => {
  // undefined
    return this.client.deleteTapePool(params as any).promise();
  }

  deleteVolume: (params: RawParamsFrom<'deleteVolume'>) => Promise<ReturnTypeFrom<'deleteVolume'>>  = async params => {
  // undefined
    return this.client.deleteVolume(params as any).promise();
  }

  describeAvailabilityMonitorTest: (params: RawParamsFrom<'describeAvailabilityMonitorTest'>) => Promise<ReturnTypeFrom<'describeAvailabilityMonitorTest'>>  = async params => {
  // undefined
    return this.client.describeAvailabilityMonitorTest(params as any).promise();
  }

  describeBandwidthRateLimit: (params: RawParamsFrom<'describeBandwidthRateLimit'>) => Promise<ReturnTypeFrom<'describeBandwidthRateLimit'>>  = async params => {
  // undefined
    return this.client.describeBandwidthRateLimit(params as any).promise();
  }

  describeBandwidthRateLimitSchedule: (params: RawParamsFrom<'describeBandwidthRateLimitSchedule'>) => Promise<ReturnTypeFrom<'describeBandwidthRateLimitSchedule'>>  = async params => {
  // undefined
    return this.client.describeBandwidthRateLimitSchedule(params as any).promise();
  }

  describeCache: (params: RawParamsFrom<'describeCache'>) => Promise<ReturnTypeFrom<'describeCache'>>  = async params => {
  // undefined
    return this.client.describeCache(params as any).promise();
  }

  async describeCachediSCSIVolumes(params: { [K in keyof ParamsFrom<'describeCachediSCSIVolumes', {}>]: ParamsFrom<'describeCachediSCSIVolumes', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeCachediSCSIVolumes'>]-?: ReturnTypeFrom<'describeCachediSCSIVolumes'>[K]}['CachediSCSIVolumes'], undefined>}> {
    // {"resultKey":"CachediSCSIVolumes"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeCachediSCSIVolumes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.CachediSCSIVolumes ?? []) ? (result.CachediSCSIVolumes ?? []) : [result.CachediSCSIVolumes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeChapCredentials: (params: RawParamsFrom<'describeChapCredentials'>) => Promise<ReturnTypeFrom<'describeChapCredentials'>>  = async params => {
  // undefined
    return this.client.describeChapCredentials(params as any).promise();
  }

  describeFileSystemAssociations: (params: RawParamsFrom<'describeFileSystemAssociations'>) => Promise<ReturnTypeFrom<'describeFileSystemAssociations'>>  = async params => {
  // undefined
    return this.client.describeFileSystemAssociations(params as any).promise();
  }

  describeGatewayInformation: (params: RawParamsFrom<'describeGatewayInformation'>) => Promise<ReturnTypeFrom<'describeGatewayInformation'>>  = async params => {
  // undefined
    return this.client.describeGatewayInformation(params as any).promise();
  }

  describeMaintenanceStartTime: (params: RawParamsFrom<'describeMaintenanceStartTime'>) => Promise<ReturnTypeFrom<'describeMaintenanceStartTime'>>  = async params => {
  // undefined
    return this.client.describeMaintenanceStartTime(params as any).promise();
  }

  describeNFSFileShares: (params: RawParamsFrom<'describeNFSFileShares'>) => Promise<ReturnTypeFrom<'describeNFSFileShares'>>  = async params => {
  // undefined
    return this.client.describeNFSFileShares(params as any).promise();
  }

  describeSMBFileShares: (params: RawParamsFrom<'describeSMBFileShares'>) => Promise<ReturnTypeFrom<'describeSMBFileShares'>>  = async params => {
  // undefined
    return this.client.describeSMBFileShares(params as any).promise();
  }

  describeSMBSettings: (params: RawParamsFrom<'describeSMBSettings'>) => Promise<ReturnTypeFrom<'describeSMBSettings'>>  = async params => {
  // undefined
    return this.client.describeSMBSettings(params as any).promise();
  }

  describeSnapshotSchedule: (params: RawParamsFrom<'describeSnapshotSchedule'>) => Promise<ReturnTypeFrom<'describeSnapshotSchedule'>>  = async params => {
  // undefined
    return this.client.describeSnapshotSchedule(params as any).promise();
  }

  async describeStorediSCSIVolumes(params: { [K in keyof ParamsFrom<'describeStorediSCSIVolumes', {}>]: ParamsFrom<'describeStorediSCSIVolumes', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStorediSCSIVolumes'>]-?: ReturnTypeFrom<'describeStorediSCSIVolumes'>[K]}['StorediSCSIVolumes'], undefined>}> {
    // {"resultKey":"StorediSCSIVolumes"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeStorediSCSIVolumes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.StorediSCSIVolumes ?? []) ? (result.StorediSCSIVolumes ?? []) : [result.StorediSCSIVolumes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTapeArchives(params: { [K in keyof ParamsFrom<'describeTapeArchives', { next?: string, limit?: number }>]: ParamsFrom<'describeTapeArchives', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTapeArchives'>]-?: ReturnTypeFrom<'describeTapeArchives'>[K]}['TapeArchives'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"TapeArchives"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeTapeArchives({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeTapeArchives' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TapeArchives ?? []) ? (result.TapeArchives ?? []) : [result.TapeArchives]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTapeRecoveryPoints(params: { [K in keyof ParamsFrom<'describeTapeRecoveryPoints', { next?: string, limit?: number }>]: ParamsFrom<'describeTapeRecoveryPoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTapeRecoveryPoints'>]-?: ReturnTypeFrom<'describeTapeRecoveryPoints'>[K]}['TapeRecoveryPointInfos'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"TapeRecoveryPointInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeTapeRecoveryPoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeTapeRecoveryPoints' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TapeRecoveryPointInfos ?? []) ? (result.TapeRecoveryPointInfos ?? []) : [result.TapeRecoveryPointInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTapes(params: { [K in keyof ParamsFrom<'describeTapes', { next?: string, limit?: number }>]: ParamsFrom<'describeTapes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTapes'>]-?: ReturnTypeFrom<'describeTapes'>[K]}['Tapes'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"Tapes"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeTapes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeTapes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tapes ?? []) ? (result.Tapes ?? []) : [result.Tapes]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeUploadBuffer: (params: RawParamsFrom<'describeUploadBuffer'>) => Promise<ReturnTypeFrom<'describeUploadBuffer'>>  = async params => {
  // undefined
    return this.client.describeUploadBuffer(params as any).promise();
  }

  async describeVTLDevices(params: { [K in keyof ParamsFrom<'describeVTLDevices', { next?: string, limit?: number }>]: ParamsFrom<'describeVTLDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeVTLDevices'>]-?: ReturnTypeFrom<'describeVTLDevices'>[K]}['VTLDevices'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"VTLDevices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeVTLDevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'describeVTLDevices' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VTLDevices ?? []) ? (result.VTLDevices ?? []) : [result.VTLDevices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeWorkingStorage: (params: RawParamsFrom<'describeWorkingStorage'>) => Promise<ReturnTypeFrom<'describeWorkingStorage'>>  = async params => {
  // undefined
    return this.client.describeWorkingStorage(params as any).promise();
  }

  detachVolume: (params: RawParamsFrom<'detachVolume'>) => Promise<ReturnTypeFrom<'detachVolume'>>  = async params => {
  // undefined
    return this.client.detachVolume(params as any).promise();
  }

  disableGateway: (params: RawParamsFrom<'disableGateway'>) => Promise<ReturnTypeFrom<'disableGateway'>>  = async params => {
  // undefined
    return this.client.disableGateway(params as any).promise();
  }

  disassociateFileSystem: (params: RawParamsFrom<'disassociateFileSystem'>) => Promise<ReturnTypeFrom<'disassociateFileSystem'>>  = async params => {
  // undefined
    return this.client.disassociateFileSystem(params as any).promise();
  }

  joinDomain: (params: RawParamsFrom<'joinDomain'>) => Promise<ReturnTypeFrom<'joinDomain'>>  = async params => {
  // undefined
    return this.client.joinDomain(params as any).promise();
  }

  listAutomaticTapeCreationPolicies: (params: RawParamsFrom<'listAutomaticTapeCreationPolicies'>) => Promise<ReturnTypeFrom<'listAutomaticTapeCreationPolicies'>>  = async params => {
  // undefined
    return this.client.listAutomaticTapeCreationPolicies(params as any).promise();
  }

  async listFileShares(params: { [K in keyof ParamsFrom<'listFileShares', { next?: string, limit?: number }>]: ParamsFrom<'listFileShares', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFileShares'>]-?: ReturnTypeFrom<'listFileShares'>[K]}['FileShareInfoList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"NextMarker","resultKey":"FileShareInfoList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listFileShares({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listFileShares' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FileShareInfoList ?? []) ? (result.FileShareInfoList ?? []) : [result.FileShareInfoList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFileSystemAssociations(params: { [K in keyof ParamsFrom<'listFileSystemAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listFileSystemAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFileSystemAssociations'>]-?: ReturnTypeFrom<'listFileSystemAssociations'>[K]}['FileSystemAssociationSummaryList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"NextMarker","resultKey":"FileSystemAssociationSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listFileSystemAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'listFileSystemAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.FileSystemAssociationSummaryList ?? []) ? (result.FileSystemAssociationSummaryList ?? []) : [result.FileSystemAssociationSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGateways(params: { [K in keyof ParamsFrom<'listGateways', { next?: string, limit?: number }>]: ParamsFrom<'listGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['Gateways'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"Gateways"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGateways({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listGateways' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Gateways ?? []) ? (result.Gateways ?? []) : [result.Gateways]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLocalDisks(params: { [K in keyof ParamsFrom<'listLocalDisks', {}>]: ParamsFrom<'listLocalDisks', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLocalDisks'>]-?: ReturnTypeFrom<'listLocalDisks'>[K]}['Disks'], undefined>}> {
    // {"resultKey":"Disks"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.listLocalDisks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.Disks ?? []) ? (result.Disks ?? []) : [result.Disks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTapePools(params: { [K in keyof ParamsFrom<'listTapePools', { next?: string, limit?: number }>]: ParamsFrom<'listTapePools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTapePools'>]-?: ReturnTypeFrom<'listTapePools'>[K]}['PoolInfos'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"PoolInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTapePools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listTapePools' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PoolInfos ?? []) ? (result.PoolInfos ?? []) : [result.PoolInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTapes(params: { [K in keyof ParamsFrom<'listTapes', { next?: string, limit?: number }>]: ParamsFrom<'listTapes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTapes'>]-?: ReturnTypeFrom<'listTapes'>[K]}['TapeInfos'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"TapeInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTapes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listTapes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TapeInfos ?? []) ? (result.TapeInfos ?? []) : [result.TapeInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listVolumeInitiators: (params: RawParamsFrom<'listVolumeInitiators'>) => Promise<ReturnTypeFrom<'listVolumeInitiators'>>  = async params => {
  // undefined
    return this.client.listVolumeInitiators(params as any).promise();
  }

  async listVolumeRecoveryPoints(params: { [K in keyof ParamsFrom<'listVolumeRecoveryPoints', {}>]: ParamsFrom<'listVolumeRecoveryPoints', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVolumeRecoveryPoints'>]-?: ReturnTypeFrom<'listVolumeRecoveryPoints'>[K]}['VolumeRecoveryPointInfos'], undefined>}> {
    // {"resultKey":"VolumeRecoveryPointInfos"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.listVolumeRecoveryPoints({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.VolumeRecoveryPointInfos ?? []) ? (result.VolumeRecoveryPointInfos ?? []) : [result.VolumeRecoveryPointInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVolumes(params: { [K in keyof ParamsFrom<'listVolumes', { next?: string, limit?: number }>]: ParamsFrom<'listVolumes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVolumes'>]-?: ReturnTypeFrom<'listVolumes'>[K]}['VolumeInfos'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"VolumeInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listVolumes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.Marker ? Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listVolumes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VolumeInfos ?? []) ? (result.VolumeInfos ?? []) : [result.VolumeInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  notifyWhenUploaded: (params: RawParamsFrom<'notifyWhenUploaded'>) => Promise<ReturnTypeFrom<'notifyWhenUploaded'>>  = async params => {
  // undefined
    return this.client.notifyWhenUploaded(params as any).promise();
  }

  refreshCache: (params: RawParamsFrom<'refreshCache'>) => Promise<ReturnTypeFrom<'refreshCache'>>  = async params => {
  // undefined
    return this.client.refreshCache(params as any).promise();
  }

  removeTagsFromResource: (params: RawParamsFrom<'removeTagsFromResource'>) => Promise<ReturnTypeFrom<'removeTagsFromResource'>>  = async params => {
  // undefined
    return this.client.removeTagsFromResource(params as any).promise();
  }

  resetCache: (params: RawParamsFrom<'resetCache'>) => Promise<ReturnTypeFrom<'resetCache'>>  = async params => {
  // undefined
    return this.client.resetCache(params as any).promise();
  }

  retrieveTapeArchive: (params: RawParamsFrom<'retrieveTapeArchive'>) => Promise<ReturnTypeFrom<'retrieveTapeArchive'>>  = async params => {
  // undefined
    return this.client.retrieveTapeArchive(params as any).promise();
  }

  retrieveTapeRecoveryPoint: (params: RawParamsFrom<'retrieveTapeRecoveryPoint'>) => Promise<ReturnTypeFrom<'retrieveTapeRecoveryPoint'>>  = async params => {
  // undefined
    return this.client.retrieveTapeRecoveryPoint(params as any).promise();
  }

  setLocalConsolePassword: (params: RawParamsFrom<'setLocalConsolePassword'>) => Promise<ReturnTypeFrom<'setLocalConsolePassword'>>  = async params => {
  // undefined
    return this.client.setLocalConsolePassword(params as any).promise();
  }

  setSMBGuestPassword: (params: RawParamsFrom<'setSMBGuestPassword'>) => Promise<ReturnTypeFrom<'setSMBGuestPassword'>>  = async params => {
  // undefined
    return this.client.setSMBGuestPassword(params as any).promise();
  }

  shutdownGateway: (params: RawParamsFrom<'shutdownGateway'>) => Promise<ReturnTypeFrom<'shutdownGateway'>>  = async params => {
  // undefined
    return this.client.shutdownGateway(params as any).promise();
  }

  startAvailabilityMonitorTest: (params: RawParamsFrom<'startAvailabilityMonitorTest'>) => Promise<ReturnTypeFrom<'startAvailabilityMonitorTest'>>  = async params => {
  // undefined
    return this.client.startAvailabilityMonitorTest(params as any).promise();
  }

  startGateway: (params: RawParamsFrom<'startGateway'>) => Promise<ReturnTypeFrom<'startGateway'>>  = async params => {
  // undefined
    return this.client.startGateway(params as any).promise();
  }

  updateAutomaticTapeCreationPolicy: (params: RawParamsFrom<'updateAutomaticTapeCreationPolicy'>) => Promise<ReturnTypeFrom<'updateAutomaticTapeCreationPolicy'>>  = async params => {
  // undefined
    return this.client.updateAutomaticTapeCreationPolicy(params as any).promise();
  }

  updateBandwidthRateLimit: (params: RawParamsFrom<'updateBandwidthRateLimit'>) => Promise<ReturnTypeFrom<'updateBandwidthRateLimit'>>  = async params => {
  // undefined
    return this.client.updateBandwidthRateLimit(params as any).promise();
  }

  updateBandwidthRateLimitSchedule: (params: RawParamsFrom<'updateBandwidthRateLimitSchedule'>) => Promise<ReturnTypeFrom<'updateBandwidthRateLimitSchedule'>>  = async params => {
  // undefined
    return this.client.updateBandwidthRateLimitSchedule(params as any).promise();
  }

  updateChapCredentials: (params: RawParamsFrom<'updateChapCredentials'>) => Promise<ReturnTypeFrom<'updateChapCredentials'>>  = async params => {
  // undefined
    return this.client.updateChapCredentials(params as any).promise();
  }

  updateFileSystemAssociation: (params: RawParamsFrom<'updateFileSystemAssociation'>) => Promise<ReturnTypeFrom<'updateFileSystemAssociation'>>  = async params => {
  // undefined
    return this.client.updateFileSystemAssociation(params as any).promise();
  }

  updateGatewayInformation: (params: RawParamsFrom<'updateGatewayInformation'>) => Promise<ReturnTypeFrom<'updateGatewayInformation'>>  = async params => {
  // undefined
    return this.client.updateGatewayInformation(params as any).promise();
  }

  updateGatewaySoftwareNow: (params: RawParamsFrom<'updateGatewaySoftwareNow'>) => Promise<ReturnTypeFrom<'updateGatewaySoftwareNow'>>  = async params => {
  // undefined
    return this.client.updateGatewaySoftwareNow(params as any).promise();
  }

  updateMaintenanceStartTime: (params: RawParamsFrom<'updateMaintenanceStartTime'>) => Promise<ReturnTypeFrom<'updateMaintenanceStartTime'>>  = async params => {
  // undefined
    return this.client.updateMaintenanceStartTime(params as any).promise();
  }

  updateNFSFileShare: (params: RawParamsFrom<'updateNFSFileShare'>) => Promise<ReturnTypeFrom<'updateNFSFileShare'>>  = async params => {
  // undefined
    return this.client.updateNFSFileShare(params as any).promise();
  }

  updateSMBFileShare: (params: RawParamsFrom<'updateSMBFileShare'>) => Promise<ReturnTypeFrom<'updateSMBFileShare'>>  = async params => {
  // undefined
    return this.client.updateSMBFileShare(params as any).promise();
  }

  updateSMBFileShareVisibility: (params: RawParamsFrom<'updateSMBFileShareVisibility'>) => Promise<ReturnTypeFrom<'updateSMBFileShareVisibility'>>  = async params => {
  // undefined
    return this.client.updateSMBFileShareVisibility(params as any).promise();
  }

  updateSMBLocalGroups: (params: RawParamsFrom<'updateSMBLocalGroups'>) => Promise<ReturnTypeFrom<'updateSMBLocalGroups'>>  = async params => {
  // undefined
    return this.client.updateSMBLocalGroups(params as any).promise();
  }

  updateSMBSecurityStrategy: (params: RawParamsFrom<'updateSMBSecurityStrategy'>) => Promise<ReturnTypeFrom<'updateSMBSecurityStrategy'>>  = async params => {
  // undefined
    return this.client.updateSMBSecurityStrategy(params as any).promise();
  }

  updateSnapshotSchedule: (params: RawParamsFrom<'updateSnapshotSchedule'>) => Promise<ReturnTypeFrom<'updateSnapshotSchedule'>>  = async params => {
  // undefined
    return this.client.updateSnapshotSchedule(params as any).promise();
  }

  updateVTLDeviceType: (params: RawParamsFrom<'updateVTLDeviceType'>) => Promise<ReturnTypeFrom<'updateVTLDeviceType'>>  = async params => {
  // undefined
    return this.client.updateVTLDeviceType(params as any).promise();
  }
  
  static fromClient(client: AWSStorageGateway): StorageGateway {
    return new StorageGateway(client) as any;
  }
  
  static client(options?: AWSStorageGateway.Types.ClientConfiguration): StorageGateway {
    return new StorageGateway(new AWSStorageGateway(options)) as any;
  }
}  
