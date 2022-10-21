import { Request, EFS as AWSEFS } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEFS> = AWSEFS[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEFS> = AWSEFS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEFS[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEFS, Extras> = AWSEFS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEFS> = AWSEFS[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class EFS {
  private constructor(private readonly client: AWSEFS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticfilesystem' as const;
  public readonly global = false as const;
  public readonly category = 'Storage' as const;
  public readonly topLevelCalls = ["describeAccessPoints","describeFileSystems"] as const;
  
  createAccessPoint: (params: RawParamsFrom<'createAccessPoint'>) => Promise<ReturnTypeFrom<'createAccessPoint'>>  = async params => {
  // undefined
    return this.client.createAccessPoint(params as any).promise();
  }

  createFileSystem: (params: RawParamsFrom<'createFileSystem'>) => Promise<ReturnTypeFrom<'createFileSystem'>>  = async params => {
  // undefined
    return this.client.createFileSystem(params as any).promise();
  }

  createMountTarget: (params: RawParamsFrom<'createMountTarget'>) => Promise<ReturnTypeFrom<'createMountTarget'>>  = async params => {
  // undefined
    return this.client.createMountTarget(params as any).promise();
  }

  createReplicationConfiguration: (params: RawParamsFrom<'createReplicationConfiguration'>) => Promise<ReturnTypeFrom<'createReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.createReplicationConfiguration(params as any).promise();
  }

  createTags: (params: RawParamsFrom<'createTags'>) => Promise<ReturnTypeFrom<'createTags'>>  = async params => {
  // undefined
    return this.client.createTags(params as any).promise();
  }

  deleteAccessPoint: (params: RawParamsFrom<'deleteAccessPoint'>) => Promise<ReturnTypeFrom<'deleteAccessPoint'>>  = async params => {
  // undefined
    return this.client.deleteAccessPoint(params as any).promise();
  }

  deleteFileSystem: (params: RawParamsFrom<'deleteFileSystem'>) => Promise<ReturnTypeFrom<'deleteFileSystem'>>  = async params => {
  // undefined
    return this.client.deleteFileSystem(params as any).promise();
  }

  deleteFileSystemPolicy: (params: RawParamsFrom<'deleteFileSystemPolicy'>) => Promise<ReturnTypeFrom<'deleteFileSystemPolicy'>>  = async params => {
  // undefined
    return this.client.deleteFileSystemPolicy(params as any).promise();
  }

  deleteMountTarget: (params: RawParamsFrom<'deleteMountTarget'>) => Promise<ReturnTypeFrom<'deleteMountTarget'>>  = async params => {
  // undefined
    return this.client.deleteMountTarget(params as any).promise();
  }

  deleteReplicationConfiguration: (params: RawParamsFrom<'deleteReplicationConfiguration'>) => Promise<ReturnTypeFrom<'deleteReplicationConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteReplicationConfiguration(params as any).promise();
  }

  deleteTags: (params: RawParamsFrom<'deleteTags'>) => Promise<ReturnTypeFrom<'deleteTags'>>  = async params => {
  // undefined
    return this.client.deleteTags(params as any).promise();
  }

  describeAccessPoints: (params: RawParamsFrom<'describeAccessPoints'>) => Promise<ReturnTypeFrom<'describeAccessPoints'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeAccessPoints(params as any).promise();
  }

  describeAccountPreferences: (params: RawParamsFrom<'describeAccountPreferences'>) => Promise<ReturnTypeFrom<'describeAccountPreferences'>>  = async params => {
  // undefined
    return this.client.describeAccountPreferences(params as any).promise();
  }

  describeBackupPolicy: (params: RawParamsFrom<'describeBackupPolicy'>) => Promise<ReturnTypeFrom<'describeBackupPolicy'>>  = async params => {
  // undefined
    return this.client.describeBackupPolicy(params as any).promise();
  }

  describeFileSystemPolicy: (params: RawParamsFrom<'describeFileSystemPolicy'>) => Promise<ReturnTypeFrom<'describeFileSystemPolicy'>>  = async params => {
  // undefined
    return this.client.describeFileSystemPolicy(params as any).promise();
  }

  describeFileSystems: (params: RawParamsFrom<'describeFileSystems'>) => Promise<ReturnTypeFrom<'describeFileSystems'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker"}
    return this.client.describeFileSystems(params as any).promise();
  }

  describeLifecycleConfiguration: (params: RawParamsFrom<'describeLifecycleConfiguration'>) => Promise<ReturnTypeFrom<'describeLifecycleConfiguration'>>  = async params => {
  // undefined
    return this.client.describeLifecycleConfiguration(params as any).promise();
  }

  describeMountTargetSecurityGroups: (params: RawParamsFrom<'describeMountTargetSecurityGroups'>) => Promise<ReturnTypeFrom<'describeMountTargetSecurityGroups'>>  = async params => {
  // undefined
    return this.client.describeMountTargetSecurityGroups(params as any).promise();
  }

  describeMountTargets: (params: RawParamsFrom<'describeMountTargets'>) => Promise<ReturnTypeFrom<'describeMountTargets'>>  = async params => {
  // undefined
    return this.client.describeMountTargets(params as any).promise();
  }

  describeReplicationConfigurations: (params: RawParamsFrom<'describeReplicationConfigurations'>) => Promise<ReturnTypeFrom<'describeReplicationConfigurations'>>  = async params => {
  // undefined
    return this.client.describeReplicationConfigurations(params as any).promise();
  }

  describeTags: (params: RawParamsFrom<'describeTags'>) => Promise<ReturnTypeFrom<'describeTags'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker"}
    return this.client.describeTags(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTagsForResource(params as any).promise();
  }

  modifyMountTargetSecurityGroups: (params: RawParamsFrom<'modifyMountTargetSecurityGroups'>) => Promise<ReturnTypeFrom<'modifyMountTargetSecurityGroups'>>  = async params => {
  // undefined
    return this.client.modifyMountTargetSecurityGroups(params as any).promise();
  }

  putAccountPreferences: (params: RawParamsFrom<'putAccountPreferences'>) => Promise<ReturnTypeFrom<'putAccountPreferences'>>  = async params => {
  // undefined
    return this.client.putAccountPreferences(params as any).promise();
  }

  putBackupPolicy: (params: RawParamsFrom<'putBackupPolicy'>) => Promise<ReturnTypeFrom<'putBackupPolicy'>>  = async params => {
  // undefined
    return this.client.putBackupPolicy(params as any).promise();
  }

  putFileSystemPolicy: (params: RawParamsFrom<'putFileSystemPolicy'>) => Promise<ReturnTypeFrom<'putFileSystemPolicy'>>  = async params => {
  // undefined
    return this.client.putFileSystemPolicy(params as any).promise();
  }

  putLifecycleConfiguration: (params: RawParamsFrom<'putLifecycleConfiguration'>) => Promise<ReturnTypeFrom<'putLifecycleConfiguration'>>  = async params => {
  // undefined
    return this.client.putLifecycleConfiguration(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateFileSystem: (params: RawParamsFrom<'updateFileSystem'>) => Promise<ReturnTypeFrom<'updateFileSystem'>>  = async params => {
  // undefined
    return this.client.updateFileSystem(params as any).promise();
  }
  
  static fromClient(client: AWSEFS): EFS {
    return new EFS(client) as any;
  }
  
  static client(options?: AWSEFS.Types.ClientConfiguration): EFS {
    return new EFS(new AWSEFS(options)) as any;
  }
}  
