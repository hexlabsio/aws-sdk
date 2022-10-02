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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'storagegateway';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly ["describeTapeArchives","listFileShares","listFileSystemAssociations","listGateways","listTapePools","listTapes","listVolumes"];
    
  activateGateway: FunctionTypeFrom<'activateGateway'>;

  addCache: FunctionTypeFrom<'addCache'>;

  addTagsToResource: FunctionTypeFrom<'addTagsToResource'>;

  addUploadBuffer: FunctionTypeFrom<'addUploadBuffer'>;

  addWorkingStorage: FunctionTypeFrom<'addWorkingStorage'>;

  assignTapePool: FunctionTypeFrom<'assignTapePool'>;

  associateFileSystem: FunctionTypeFrom<'associateFileSystem'>;

  attachVolume: FunctionTypeFrom<'attachVolume'>;

  cancelArchival: FunctionTypeFrom<'cancelArchival'>;

  cancelRetrieval: FunctionTypeFrom<'cancelRetrieval'>;

  createCachediSCSIVolume: FunctionTypeFrom<'createCachediSCSIVolume'>;

  createNFSFileShare: FunctionTypeFrom<'createNFSFileShare'>;

  createSMBFileShare: FunctionTypeFrom<'createSMBFileShare'>;

  createSnapshot: FunctionTypeFrom<'createSnapshot'>;

  createSnapshotFromVolumeRecoveryPoint: FunctionTypeFrom<'createSnapshotFromVolumeRecoveryPoint'>;

  createStorediSCSIVolume: FunctionTypeFrom<'createStorediSCSIVolume'>;

  createTapePool: FunctionTypeFrom<'createTapePool'>;

  createTapeWithBarcode: FunctionTypeFrom<'createTapeWithBarcode'>;

  createTapes: FunctionTypeFrom<'createTapes'>;

  deleteAutomaticTapeCreationPolicy: FunctionTypeFrom<'deleteAutomaticTapeCreationPolicy'>;

  deleteBandwidthRateLimit: FunctionTypeFrom<'deleteBandwidthRateLimit'>;

  deleteChapCredentials: FunctionTypeFrom<'deleteChapCredentials'>;

  deleteFileShare: FunctionTypeFrom<'deleteFileShare'>;

  deleteGateway: FunctionTypeFrom<'deleteGateway'>;

  deleteSnapshotSchedule: FunctionTypeFrom<'deleteSnapshotSchedule'>;

  deleteTape: FunctionTypeFrom<'deleteTape'>;

  deleteTapeArchive: FunctionTypeFrom<'deleteTapeArchive'>;

  deleteTapePool: FunctionTypeFrom<'deleteTapePool'>;

  deleteVolume: FunctionTypeFrom<'deleteVolume'>;

  describeAvailabilityMonitorTest: FunctionTypeFrom<'describeAvailabilityMonitorTest'>;

  describeBandwidthRateLimit: FunctionTypeFrom<'describeBandwidthRateLimit'>;

  describeBandwidthRateLimitSchedule: FunctionTypeFrom<'describeBandwidthRateLimitSchedule'>;

  describeCache: FunctionTypeFrom<'describeCache'>;

  describeCachediSCSIVolumes: FunctionTypeFrom<'describeCachediSCSIVolumes'>;

  describeChapCredentials: FunctionTypeFrom<'describeChapCredentials'>;

  describeFileSystemAssociations: FunctionTypeFrom<'describeFileSystemAssociations'>;

  describeGatewayInformation: FunctionTypeFrom<'describeGatewayInformation'>;

  describeMaintenanceStartTime: FunctionTypeFrom<'describeMaintenanceStartTime'>;

  describeNFSFileShares: FunctionTypeFrom<'describeNFSFileShares'>;

  describeSMBFileShares: FunctionTypeFrom<'describeSMBFileShares'>;

  describeSMBSettings: FunctionTypeFrom<'describeSMBSettings'>;

  describeSnapshotSchedule: FunctionTypeFrom<'describeSnapshotSchedule'>;

  describeStorediSCSIVolumes: FunctionTypeFrom<'describeStorediSCSIVolumes'>;

  describeTapeArchives(params: { [K in keyof Omit<ParamsFrom<'describeTapeArchives', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'describeTapeArchives', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTapeArchives'>]-?: ReturnTypeFrom<'describeTapeArchives'>[K]}['TapeArchives'] }>
  describeTapeArchives(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTapeArchives'>]-?: ReturnTypeFrom<'describeTapeArchives'>[K]}['TapeArchives'] }>;

  describeTapeRecoveryPoints(params: { [K in keyof Omit<ParamsFrom<'describeTapeRecoveryPoints', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'describeTapeRecoveryPoints', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTapeRecoveryPoints'>]-?: ReturnTypeFrom<'describeTapeRecoveryPoints'>[K]}['TapeRecoveryPointInfos'] }>
  ;

  describeTapes(params: { [K in keyof Omit<ParamsFrom<'describeTapes', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'describeTapes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTapes'>]-?: ReturnTypeFrom<'describeTapes'>[K]}['Tapes'] }>
  ;

  describeUploadBuffer: FunctionTypeFrom<'describeUploadBuffer'>;

  describeVTLDevices(params: { [K in keyof Omit<ParamsFrom<'describeVTLDevices', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'describeVTLDevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeVTLDevices'>]-?: ReturnTypeFrom<'describeVTLDevices'>[K]}['VTLDevices'] }>
  ;

  describeWorkingStorage: FunctionTypeFrom<'describeWorkingStorage'>;

  detachVolume: FunctionTypeFrom<'detachVolume'>;

  disableGateway: FunctionTypeFrom<'disableGateway'>;

  disassociateFileSystem: FunctionTypeFrom<'disassociateFileSystem'>;

  joinDomain: FunctionTypeFrom<'joinDomain'>;

  listAutomaticTapeCreationPolicies: FunctionTypeFrom<'listAutomaticTapeCreationPolicies'>;

  listFileShares(params: { [K in keyof Omit<ParamsFrom<'listFileShares', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listFileShares', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFileShares'>]-?: ReturnTypeFrom<'listFileShares'>[K]}['FileShareInfoList'] }>
  listFileShares(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFileShares'>]-?: ReturnTypeFrom<'listFileShares'>[K]}['FileShareInfoList'] }>;

  listFileSystemAssociations(params: { [K in keyof Omit<ParamsFrom<'listFileSystemAssociations', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listFileSystemAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFileSystemAssociations'>]-?: ReturnTypeFrom<'listFileSystemAssociations'>[K]}['FileSystemAssociationSummaryList'] }>
  listFileSystemAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFileSystemAssociations'>]-?: ReturnTypeFrom<'listFileSystemAssociations'>[K]}['FileSystemAssociationSummaryList'] }>;

  listGateways(params: { [K in keyof Omit<ParamsFrom<'listGateways', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listGateways', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['Gateways'] }>
  listGateways(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGateways'>]-?: ReturnTypeFrom<'listGateways'>[K]}['Gateways'] }>;

  listLocalDisks: FunctionTypeFrom<'listLocalDisks'>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  listTapePools(params: { [K in keyof Omit<ParamsFrom<'listTapePools', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listTapePools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTapePools'>]-?: ReturnTypeFrom<'listTapePools'>[K]}['PoolInfos'] }>
  listTapePools(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTapePools'>]-?: ReturnTypeFrom<'listTapePools'>[K]}['PoolInfos'] }>;

  listTapes(params: { [K in keyof Omit<ParamsFrom<'listTapes', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listTapes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTapes'>]-?: ReturnTypeFrom<'listTapes'>[K]}['TapeInfos'] }>
  listTapes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTapes'>]-?: ReturnTypeFrom<'listTapes'>[K]}['TapeInfos'] }>;

  listVolumeInitiators: FunctionTypeFrom<'listVolumeInitiators'>;

  listVolumeRecoveryPoints: FunctionTypeFrom<'listVolumeRecoveryPoints'>;

  listVolumes(params: { [K in keyof Omit<ParamsFrom<'listVolumes', { next?: string, limit?: number }>, 'Marker' | 'Limit'>]: ParamsFrom<'listVolumes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVolumes'>]-?: ReturnTypeFrom<'listVolumes'>[K]}['VolumeInfos'] }>
  listVolumes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVolumes'>]-?: ReturnTypeFrom<'listVolumes'>[K]}['VolumeInfos'] }>;

  notifyWhenUploaded: FunctionTypeFrom<'notifyWhenUploaded'>;

  refreshCache: FunctionTypeFrom<'refreshCache'>;

  removeTagsFromResource: FunctionTypeFrom<'removeTagsFromResource'>;

  resetCache: FunctionTypeFrom<'resetCache'>;

  retrieveTapeArchive: FunctionTypeFrom<'retrieveTapeArchive'>;

  retrieveTapeRecoveryPoint: FunctionTypeFrom<'retrieveTapeRecoveryPoint'>;

  setLocalConsolePassword: FunctionTypeFrom<'setLocalConsolePassword'>;

  setSMBGuestPassword: FunctionTypeFrom<'setSMBGuestPassword'>;

  shutdownGateway: FunctionTypeFrom<'shutdownGateway'>;

  startAvailabilityMonitorTest: FunctionTypeFrom<'startAvailabilityMonitorTest'>;

  startGateway: FunctionTypeFrom<'startGateway'>;

  updateAutomaticTapeCreationPolicy: FunctionTypeFrom<'updateAutomaticTapeCreationPolicy'>;

  updateBandwidthRateLimit: FunctionTypeFrom<'updateBandwidthRateLimit'>;

  updateBandwidthRateLimitSchedule: FunctionTypeFrom<'updateBandwidthRateLimitSchedule'>;

  updateChapCredentials: FunctionTypeFrom<'updateChapCredentials'>;

  updateFileSystemAssociation: FunctionTypeFrom<'updateFileSystemAssociation'>;

  updateGatewayInformation: FunctionTypeFrom<'updateGatewayInformation'>;

  updateGatewaySoftwareNow: FunctionTypeFrom<'updateGatewaySoftwareNow'>;

  updateMaintenanceStartTime: FunctionTypeFrom<'updateMaintenanceStartTime'>;

  updateNFSFileShare: FunctionTypeFrom<'updateNFSFileShare'>;

  updateSMBFileShare: FunctionTypeFrom<'updateSMBFileShare'>;

  updateSMBFileShareVisibility: FunctionTypeFrom<'updateSMBFileShareVisibility'>;

  updateSMBLocalGroups: FunctionTypeFrom<'updateSMBLocalGroups'>;

  updateSMBSecurityStrategy: FunctionTypeFrom<'updateSMBSecurityStrategy'>;

  updateSnapshotSchedule: FunctionTypeFrom<'updateSnapshotSchedule'>;

  updateVTLDeviceType: FunctionTypeFrom<'updateVTLDeviceType'>
}
 
export class StorageGateway implements ClientType {
  private constructor(private readonly client: AWSStorageGateway) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'storagegateway';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = ["describeTapeArchives","listFileShares","listFileSystemAssociations","listGateways","listTapePools","listTapes","listVolumes"] as const;
  
  async activateGateway(...args: any): Promise<any> {
  // undefined
    return this.client.activateGateway(...args).promise()
  }

  async addCache(...args: any): Promise<any> {
  // undefined
    return this.client.addCache(...args).promise()
  }

  async addTagsToResource(...args: any): Promise<any> {
  // undefined
    return this.client.addTagsToResource(...args).promise()
  }

  async addUploadBuffer(...args: any): Promise<any> {
  // undefined
    return this.client.addUploadBuffer(...args).promise()
  }

  async addWorkingStorage(...args: any): Promise<any> {
  // undefined
    return this.client.addWorkingStorage(...args).promise()
  }

  async assignTapePool(...args: any): Promise<any> {
  // undefined
    return this.client.assignTapePool(...args).promise()
  }

  async associateFileSystem(...args: any): Promise<any> {
  // undefined
    return this.client.associateFileSystem(...args).promise()
  }

  async attachVolume(...args: any): Promise<any> {
  // undefined
    return this.client.attachVolume(...args).promise()
  }

  async cancelArchival(...args: any): Promise<any> {
  // undefined
    return this.client.cancelArchival(...args).promise()
  }

  async cancelRetrieval(...args: any): Promise<any> {
  // undefined
    return this.client.cancelRetrieval(...args).promise()
  }

  async createCachediSCSIVolume(...args: any): Promise<any> {
  // undefined
    return this.client.createCachediSCSIVolume(...args).promise()
  }

  async createNFSFileShare(...args: any): Promise<any> {
  // undefined
    return this.client.createNFSFileShare(...args).promise()
  }

  async createSMBFileShare(...args: any): Promise<any> {
  // undefined
    return this.client.createSMBFileShare(...args).promise()
  }

  async createSnapshot(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshot(...args).promise()
  }

  async createSnapshotFromVolumeRecoveryPoint(...args: any): Promise<any> {
  // undefined
    return this.client.createSnapshotFromVolumeRecoveryPoint(...args).promise()
  }

  async createStorediSCSIVolume(...args: any): Promise<any> {
  // undefined
    return this.client.createStorediSCSIVolume(...args).promise()
  }

  async createTapePool(...args: any): Promise<any> {
  // undefined
    return this.client.createTapePool(...args).promise()
  }

  async createTapeWithBarcode(...args: any): Promise<any> {
  // undefined
    return this.client.createTapeWithBarcode(...args).promise()
  }

  async createTapes(...args: any): Promise<any> {
  // undefined
    return this.client.createTapes(...args).promise()
  }

  async deleteAutomaticTapeCreationPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAutomaticTapeCreationPolicy(...args).promise()
  }

  async deleteBandwidthRateLimit(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBandwidthRateLimit(...args).promise()
  }

  async deleteChapCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChapCredentials(...args).promise()
  }

  async deleteFileShare(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFileShare(...args).promise()
  }

  async deleteGateway(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGateway(...args).promise()
  }

  async deleteSnapshotSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSnapshotSchedule(...args).promise()
  }

  async deleteTape(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTape(...args).promise()
  }

  async deleteTapeArchive(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTapeArchive(...args).promise()
  }

  async deleteTapePool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTapePool(...args).promise()
  }

  async deleteVolume(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVolume(...args).promise()
  }

  async describeAvailabilityMonitorTest(...args: any): Promise<any> {
  // undefined
    return this.client.describeAvailabilityMonitorTest(...args).promise()
  }

  async describeBandwidthRateLimit(...args: any): Promise<any> {
  // undefined
    return this.client.describeBandwidthRateLimit(...args).promise()
  }

  async describeBandwidthRateLimitSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.describeBandwidthRateLimitSchedule(...args).promise()
  }

  async describeCache(...args: any): Promise<any> {
  // undefined
    return this.client.describeCache(...args).promise()
  }

  async describeCachediSCSIVolumes(...args: any): Promise<any> {
  // {"resultKey":"CachediSCSIVolumes"}
    return this.client.describeCachediSCSIVolumes(...args).promise()
  }

  async describeChapCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.describeChapCredentials(...args).promise()
  }

  async describeFileSystemAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.describeFileSystemAssociations(...args).promise()
  }

  async describeGatewayInformation(...args: any): Promise<any> {
  // undefined
    return this.client.describeGatewayInformation(...args).promise()
  }

  async describeMaintenanceStartTime(...args: any): Promise<any> {
  // undefined
    return this.client.describeMaintenanceStartTime(...args).promise()
  }

  async describeNFSFileShares(...args: any): Promise<any> {
  // undefined
    return this.client.describeNFSFileShares(...args).promise()
  }

  async describeSMBFileShares(...args: any): Promise<any> {
  // undefined
    return this.client.describeSMBFileShares(...args).promise()
  }

  async describeSMBSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeSMBSettings(...args).promise()
  }

  async describeSnapshotSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.describeSnapshotSchedule(...args).promise()
  }

  async describeStorediSCSIVolumes(...args: any): Promise<any> {
  // {"resultKey":"StorediSCSIVolumes"}
    return this.client.describeStorediSCSIVolumes(...args).promise()
  }

  async describeTapeArchives(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"TapeArchives"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeTapeArchives(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.TapeArchives ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTapeRecoveryPoints(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"TapeRecoveryPointInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeTapeRecoveryPoints(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.TapeRecoveryPointInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTapes(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"Tapes"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeTapes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Tapes ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUploadBuffer(...args: any): Promise<any> {
  // undefined
    return this.client.describeUploadBuffer(...args).promise()
  }

  async describeVTLDevices(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"VTLDevices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeVTLDevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.VTLDevices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeWorkingStorage(...args: any): Promise<any> {
  // undefined
    return this.client.describeWorkingStorage(...args).promise()
  }

  async detachVolume(...args: any): Promise<any> {
  // undefined
    return this.client.detachVolume(...args).promise()
  }

  async disableGateway(...args: any): Promise<any> {
  // undefined
    return this.client.disableGateway(...args).promise()
  }

  async disassociateFileSystem(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateFileSystem(...args).promise()
  }

  async joinDomain(...args: any): Promise<any> {
  // undefined
    return this.client.joinDomain(...args).promise()
  }

  async listAutomaticTapeCreationPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.listAutomaticTapeCreationPolicies(...args).promise()
  }

  async listFileShares(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"NextMarker","resultKey":"FileShareInfoList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listFileShares(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.FileShareInfoList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFileSystemAssociations(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"NextMarker","resultKey":"FileSystemAssociationSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listFileSystemAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.FileSystemAssociationSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGateways(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"Gateways"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGateways(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Gateways ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLocalDisks(...args: any): Promise<any> {
  // {"resultKey":"Disks"}
    return this.client.listLocalDisks(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTapePools(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"PoolInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTapePools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.PoolInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTapes(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"TapeInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTapes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.TapeInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVolumeInitiators(...args: any): Promise<any> {
  // undefined
    return this.client.listVolumeInitiators(...args).promise()
  }

  async listVolumeRecoveryPoints(...args: any): Promise<any> {
  // {"resultKey":"VolumeRecoveryPointInfos"}
    return this.client.listVolumeRecoveryPoints(...args).promise()
  }

  async listVolumes(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"Limit","outputToken":"Marker","resultKey":"VolumeInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listVolumes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.VolumeInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async notifyWhenUploaded(...args: any): Promise<any> {
  // undefined
    return this.client.notifyWhenUploaded(...args).promise()
  }

  async refreshCache(...args: any): Promise<any> {
  // undefined
    return this.client.refreshCache(...args).promise()
  }

  async removeTagsFromResource(...args: any): Promise<any> {
  // undefined
    return this.client.removeTagsFromResource(...args).promise()
  }

  async resetCache(...args: any): Promise<any> {
  // undefined
    return this.client.resetCache(...args).promise()
  }

  async retrieveTapeArchive(...args: any): Promise<any> {
  // undefined
    return this.client.retrieveTapeArchive(...args).promise()
  }

  async retrieveTapeRecoveryPoint(...args: any): Promise<any> {
  // undefined
    return this.client.retrieveTapeRecoveryPoint(...args).promise()
  }

  async setLocalConsolePassword(...args: any): Promise<any> {
  // undefined
    return this.client.setLocalConsolePassword(...args).promise()
  }

  async setSMBGuestPassword(...args: any): Promise<any> {
  // undefined
    return this.client.setSMBGuestPassword(...args).promise()
  }

  async shutdownGateway(...args: any): Promise<any> {
  // undefined
    return this.client.shutdownGateway(...args).promise()
  }

  async startAvailabilityMonitorTest(...args: any): Promise<any> {
  // undefined
    return this.client.startAvailabilityMonitorTest(...args).promise()
  }

  async startGateway(...args: any): Promise<any> {
  // undefined
    return this.client.startGateway(...args).promise()
  }

  async updateAutomaticTapeCreationPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateAutomaticTapeCreationPolicy(...args).promise()
  }

  async updateBandwidthRateLimit(...args: any): Promise<any> {
  // undefined
    return this.client.updateBandwidthRateLimit(...args).promise()
  }

  async updateBandwidthRateLimitSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.updateBandwidthRateLimitSchedule(...args).promise()
  }

  async updateChapCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.updateChapCredentials(...args).promise()
  }

  async updateFileSystemAssociation(...args: any): Promise<any> {
  // undefined
    return this.client.updateFileSystemAssociation(...args).promise()
  }

  async updateGatewayInformation(...args: any): Promise<any> {
  // undefined
    return this.client.updateGatewayInformation(...args).promise()
  }

  async updateGatewaySoftwareNow(...args: any): Promise<any> {
  // undefined
    return this.client.updateGatewaySoftwareNow(...args).promise()
  }

  async updateMaintenanceStartTime(...args: any): Promise<any> {
  // undefined
    return this.client.updateMaintenanceStartTime(...args).promise()
  }

  async updateNFSFileShare(...args: any): Promise<any> {
  // undefined
    return this.client.updateNFSFileShare(...args).promise()
  }

  async updateSMBFileShare(...args: any): Promise<any> {
  // undefined
    return this.client.updateSMBFileShare(...args).promise()
  }

  async updateSMBFileShareVisibility(...args: any): Promise<any> {
  // undefined
    return this.client.updateSMBFileShareVisibility(...args).promise()
  }

  async updateSMBLocalGroups(...args: any): Promise<any> {
  // undefined
    return this.client.updateSMBLocalGroups(...args).promise()
  }

  async updateSMBSecurityStrategy(...args: any): Promise<any> {
  // undefined
    return this.client.updateSMBSecurityStrategy(...args).promise()
  }

  async updateSnapshotSchedule(...args: any): Promise<any> {
  // undefined
    return this.client.updateSnapshotSchedule(...args).promise()
  }

  async updateVTLDeviceType(...args: any): Promise<any> {
  // undefined
    return this.client.updateVTLDeviceType(...args).promise()
  }
  
  static fromClient(client: AWSStorageGateway): ClientType {
    return new StorageGateway(client) as any;
  }
  
  static client(options?: AWSStorageGateway.Types.ClientConfiguration): ClientType {
    return new StorageGateway(new AWSStorageGateway(options)) as any;
  }
}  
