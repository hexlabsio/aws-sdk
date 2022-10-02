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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'elasticfilesystem';
    global: false;
    category: 'Storage'
    topLevelCalls: readonly ["describeAccessPoints","describeFileSystems"];
    
  createAccessPoint: FunctionTypeFrom<'createAccessPoint'>;

  createFileSystem: FunctionTypeFrom<'createFileSystem'>;

  createMountTarget: FunctionTypeFrom<'createMountTarget'>;

  createReplicationConfiguration: FunctionTypeFrom<'createReplicationConfiguration'>;

  createTags: FunctionTypeFrom<'createTags'>;

  deleteAccessPoint: FunctionTypeFrom<'deleteAccessPoint'>;

  deleteFileSystem: FunctionTypeFrom<'deleteFileSystem'>;

  deleteFileSystemPolicy: FunctionTypeFrom<'deleteFileSystemPolicy'>;

  deleteMountTarget: FunctionTypeFrom<'deleteMountTarget'>;

  deleteReplicationConfiguration: FunctionTypeFrom<'deleteReplicationConfiguration'>;

  deleteTags: FunctionTypeFrom<'deleteTags'>;

  describeAccessPoints: FunctionTypeFrom<'describeAccessPoints'>;

  describeAccountPreferences: FunctionTypeFrom<'describeAccountPreferences'>;

  describeBackupPolicy: FunctionTypeFrom<'describeBackupPolicy'>;

  describeFileSystemPolicy: FunctionTypeFrom<'describeFileSystemPolicy'>;

  describeFileSystems: FunctionTypeFrom<'describeFileSystems'>;

  describeLifecycleConfiguration: FunctionTypeFrom<'describeLifecycleConfiguration'>;

  describeMountTargetSecurityGroups: FunctionTypeFrom<'describeMountTargetSecurityGroups'>;

  describeMountTargets: FunctionTypeFrom<'describeMountTargets'>;

  describeReplicationConfigurations: FunctionTypeFrom<'describeReplicationConfigurations'>;

  describeTags: FunctionTypeFrom<'describeTags'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  modifyMountTargetSecurityGroups: FunctionTypeFrom<'modifyMountTargetSecurityGroups'>;

  putAccountPreferences: FunctionTypeFrom<'putAccountPreferences'>;

  putBackupPolicy: FunctionTypeFrom<'putBackupPolicy'>;

  putFileSystemPolicy: FunctionTypeFrom<'putFileSystemPolicy'>;

  putLifecycleConfiguration: FunctionTypeFrom<'putLifecycleConfiguration'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateFileSystem: FunctionTypeFrom<'updateFileSystem'>
}
 
export class EFS implements ClientType {
  private constructor(private readonly client: AWSEFS) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticfilesystem';
  public readonly global = false;
  public readonly category = 'Storage';
  public readonly topLevelCalls = ["describeAccessPoints","describeFileSystems"] as const;
  
  async createAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.createAccessPoint(...args).promise()
  }

  async createFileSystem(...args: any): Promise<any> {
  // undefined
    return this.client.createFileSystem(...args).promise()
  }

  async createMountTarget(...args: any): Promise<any> {
  // undefined
    return this.client.createMountTarget(...args).promise()
  }

  async createReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createReplicationConfiguration(...args).promise()
  }

  async createTags(...args: any): Promise<any> {
  // undefined
    return this.client.createTags(...args).promise()
  }

  async deleteAccessPoint(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessPoint(...args).promise()
  }

  async deleteFileSystem(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFileSystem(...args).promise()
  }

  async deleteFileSystemPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFileSystemPolicy(...args).promise()
  }

  async deleteMountTarget(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMountTarget(...args).promise()
  }

  async deleteReplicationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteReplicationConfiguration(...args).promise()
  }

  async deleteTags(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTags(...args).promise()
  }

  async describeAccessPoints(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeAccessPoints(...args).promise()
  }

  async describeAccountPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountPreferences(...args).promise()
  }

  async describeBackupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeBackupPolicy(...args).promise()
  }

  async describeFileSystemPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeFileSystemPolicy(...args).promise()
  }

  async describeFileSystems(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker"}
    return this.client.describeFileSystems(...args).promise()
  }

  async describeLifecycleConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeLifecycleConfiguration(...args).promise()
  }

  async describeMountTargetSecurityGroups(...args: any): Promise<any> {
  // undefined
    return this.client.describeMountTargetSecurityGroups(...args).promise()
  }

  async describeMountTargets(...args: any): Promise<any> {
  // undefined
    return this.client.describeMountTargets(...args).promise()
  }

  async describeReplicationConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.describeReplicationConfigurations(...args).promise()
  }

  async describeTags(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextMarker"}
    return this.client.describeTags(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTagsForResource(...args).promise()
  }

  async modifyMountTargetSecurityGroups(...args: any): Promise<any> {
  // undefined
    return this.client.modifyMountTargetSecurityGroups(...args).promise()
  }

  async putAccountPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.putAccountPreferences(...args).promise()
  }

  async putBackupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putBackupPolicy(...args).promise()
  }

  async putFileSystemPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putFileSystemPolicy(...args).promise()
  }

  async putLifecycleConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.putLifecycleConfiguration(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateFileSystem(...args: any): Promise<any> {
  // undefined
    return this.client.updateFileSystem(...args).promise()
  }
  
  static fromClient(client: AWSEFS): ClientType {
    return new EFS(client) as any;
  }
  
  static client(options?: AWSEFS.Types.ClientConfiguration): ClientType {
    return new EFS(new AWSEFS(options)) as any;
  }
}  
