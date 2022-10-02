import { Request, AppStream as AWSAppStream } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAppStream> = AWSAppStream[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAppStream> = AWSAppStream[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAppStream[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAppStream, Extras> = AWSAppStream[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'appstream2';
    global: false;
    category: 'End User Computing'
    topLevelCalls: readonly ["describeImages"];
    
  associateApplicationFleet: FunctionTypeFrom<'associateApplicationFleet'>;

  associateApplicationToEntitlement: FunctionTypeFrom<'associateApplicationToEntitlement'>;

  associateFleet: FunctionTypeFrom<'associateFleet'>;

  batchAssociateUserStack: FunctionTypeFrom<'batchAssociateUserStack'>;

  batchDisassociateUserStack: FunctionTypeFrom<'batchDisassociateUserStack'>;

  copyImage: FunctionTypeFrom<'copyImage'>;

  createAppBlock: FunctionTypeFrom<'createAppBlock'>;

  createApplication: FunctionTypeFrom<'createApplication'>;

  createDirectoryConfig: FunctionTypeFrom<'createDirectoryConfig'>;

  createEntitlement: FunctionTypeFrom<'createEntitlement'>;

  createFleet: FunctionTypeFrom<'createFleet'>;

  createImageBuilder: FunctionTypeFrom<'createImageBuilder'>;

  createImageBuilderStreamingURL: FunctionTypeFrom<'createImageBuilderStreamingURL'>;

  createStack: FunctionTypeFrom<'createStack'>;

  createStreamingURL: FunctionTypeFrom<'createStreamingURL'>;

  createUpdatedImage: FunctionTypeFrom<'createUpdatedImage'>;

  createUsageReportSubscription: FunctionTypeFrom<'createUsageReportSubscription'>;

  createUser: FunctionTypeFrom<'createUser'>;

  deleteAppBlock: FunctionTypeFrom<'deleteAppBlock'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteDirectoryConfig: FunctionTypeFrom<'deleteDirectoryConfig'>;

  deleteEntitlement: FunctionTypeFrom<'deleteEntitlement'>;

  deleteFleet: FunctionTypeFrom<'deleteFleet'>;

  deleteImage: FunctionTypeFrom<'deleteImage'>;

  deleteImageBuilder: FunctionTypeFrom<'deleteImageBuilder'>;

  deleteImagePermissions: FunctionTypeFrom<'deleteImagePermissions'>;

  deleteStack: FunctionTypeFrom<'deleteStack'>;

  deleteUsageReportSubscription: FunctionTypeFrom<'deleteUsageReportSubscription'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  describeAppBlocks: FunctionTypeFrom<'describeAppBlocks'>;

  describeApplicationFleetAssociations: FunctionTypeFrom<'describeApplicationFleetAssociations'>;

  describeApplications: FunctionTypeFrom<'describeApplications'>;

  describeDirectoryConfigs: FunctionTypeFrom<'describeDirectoryConfigs'>;

  describeEntitlements: FunctionTypeFrom<'describeEntitlements'>;

  describeFleets: FunctionTypeFrom<'describeFleets'>;

  describeImageBuilders: FunctionTypeFrom<'describeImageBuilders'>;

  describeImagePermissions: FunctionTypeFrom<'describeImagePermissions'>;

  describeImages: FunctionTypeFrom<'describeImages'>;

  describeSessions: FunctionTypeFrom<'describeSessions'>;

  describeStacks: FunctionTypeFrom<'describeStacks'>;

  describeUsageReportSubscriptions: FunctionTypeFrom<'describeUsageReportSubscriptions'>;

  describeUserStackAssociations: FunctionTypeFrom<'describeUserStackAssociations'>;

  describeUsers: FunctionTypeFrom<'describeUsers'>;

  disableUser: FunctionTypeFrom<'disableUser'>;

  disassociateApplicationFleet: FunctionTypeFrom<'disassociateApplicationFleet'>;

  disassociateApplicationFromEntitlement: FunctionTypeFrom<'disassociateApplicationFromEntitlement'>;

  disassociateFleet: FunctionTypeFrom<'disassociateFleet'>;

  enableUser: FunctionTypeFrom<'enableUser'>;

  expireSession: FunctionTypeFrom<'expireSession'>;

  listAssociatedFleets: FunctionTypeFrom<'listAssociatedFleets'>;

  listAssociatedStacks: FunctionTypeFrom<'listAssociatedStacks'>;

  listEntitledApplications: FunctionTypeFrom<'listEntitledApplications'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  startFleet: FunctionTypeFrom<'startFleet'>;

  startImageBuilder: FunctionTypeFrom<'startImageBuilder'>;

  stopFleet: FunctionTypeFrom<'stopFleet'>;

  stopImageBuilder: FunctionTypeFrom<'stopImageBuilder'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>;

  updateDirectoryConfig: FunctionTypeFrom<'updateDirectoryConfig'>;

  updateEntitlement: FunctionTypeFrom<'updateEntitlement'>;

  updateFleet: FunctionTypeFrom<'updateFleet'>;

  updateImagePermissions: FunctionTypeFrom<'updateImagePermissions'>;

  updateStack: FunctionTypeFrom<'updateStack'>
}
 
export class AppStream implements ClientType {
  private constructor(private readonly client: AWSAppStream) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appstream2';
  public readonly global = false;
  public readonly category = 'End User Computing';
  public readonly topLevelCalls = ["describeImages"] as const;
  
  async associateApplicationFleet(...args: any): Promise<any> {
  // undefined
    return this.client.associateApplicationFleet(...args).promise()
  }

  async associateApplicationToEntitlement(...args: any): Promise<any> {
  // undefined
    return this.client.associateApplicationToEntitlement(...args).promise()
  }

  async associateFleet(...args: any): Promise<any> {
  // undefined
    return this.client.associateFleet(...args).promise()
  }

  async batchAssociateUserStack(...args: any): Promise<any> {
  // undefined
    return this.client.batchAssociateUserStack(...args).promise()
  }

  async batchDisassociateUserStack(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisassociateUserStack(...args).promise()
  }

  async copyImage(...args: any): Promise<any> {
  // undefined
    return this.client.copyImage(...args).promise()
  }

  async createAppBlock(...args: any): Promise<any> {
  // undefined
    return this.client.createAppBlock(...args).promise()
  }

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createDirectoryConfig(...args: any): Promise<any> {
  // undefined
    return this.client.createDirectoryConfig(...args).promise()
  }

  async createEntitlement(...args: any): Promise<any> {
  // undefined
    return this.client.createEntitlement(...args).promise()
  }

  async createFleet(...args: any): Promise<any> {
  // undefined
    return this.client.createFleet(...args).promise()
  }

  async createImageBuilder(...args: any): Promise<any> {
  // undefined
    return this.client.createImageBuilder(...args).promise()
  }

  async createImageBuilderStreamingURL(...args: any): Promise<any> {
  // undefined
    return this.client.createImageBuilderStreamingURL(...args).promise()
  }

  async createStack(...args: any): Promise<any> {
  // undefined
    return this.client.createStack(...args).promise()
  }

  async createStreamingURL(...args: any): Promise<any> {
  // undefined
    return this.client.createStreamingURL(...args).promise()
  }

  async createUpdatedImage(...args: any): Promise<any> {
  // undefined
    return this.client.createUpdatedImage(...args).promise()
  }

  async createUsageReportSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.createUsageReportSubscription(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async deleteAppBlock(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppBlock(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteDirectoryConfig(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDirectoryConfig(...args).promise()
  }

  async deleteEntitlement(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEntitlement(...args).promise()
  }

  async deleteFleet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFleet(...args).promise()
  }

  async deleteImage(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImage(...args).promise()
  }

  async deleteImageBuilder(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImageBuilder(...args).promise()
  }

  async deleteImagePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.deleteImagePermissions(...args).promise()
  }

  async deleteStack(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStack(...args).promise()
  }

  async deleteUsageReportSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUsageReportSubscription(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async describeAppBlocks(...args: any): Promise<any> {
  // undefined
    return this.client.describeAppBlocks(...args).promise()
  }

  async describeApplicationFleetAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplicationFleetAssociations(...args).promise()
  }

  async describeApplications(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplications(...args).promise()
  }

  async describeDirectoryConfigs(...args: any): Promise<any> {
  // undefined
    return this.client.describeDirectoryConfigs(...args).promise()
  }

  async describeEntitlements(...args: any): Promise<any> {
  // undefined
    return this.client.describeEntitlements(...args).promise()
  }

  async describeFleets(...args: any): Promise<any> {
  // undefined
    return this.client.describeFleets(...args).promise()
  }

  async describeImageBuilders(...args: any): Promise<any> {
  // undefined
    return this.client.describeImageBuilders(...args).promise()
  }

  async describeImagePermissions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeImagePermissions(...args).promise()
  }

  async describeImages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeImages(...args).promise()
  }

  async describeSessions(...args: any): Promise<any> {
  // undefined
    return this.client.describeSessions(...args).promise()
  }

  async describeStacks(...args: any): Promise<any> {
  // undefined
    return this.client.describeStacks(...args).promise()
  }

  async describeUsageReportSubscriptions(...args: any): Promise<any> {
  // undefined
    return this.client.describeUsageReportSubscriptions(...args).promise()
  }

  async describeUserStackAssociations(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserStackAssociations(...args).promise()
  }

  async describeUsers(...args: any): Promise<any> {
  // undefined
    return this.client.describeUsers(...args).promise()
  }

  async disableUser(...args: any): Promise<any> {
  // undefined
    return this.client.disableUser(...args).promise()
  }

  async disassociateApplicationFleet(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateApplicationFleet(...args).promise()
  }

  async disassociateApplicationFromEntitlement(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateApplicationFromEntitlement(...args).promise()
  }

  async disassociateFleet(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateFleet(...args).promise()
  }

  async enableUser(...args: any): Promise<any> {
  // undefined
    return this.client.enableUser(...args).promise()
  }

  async expireSession(...args: any): Promise<any> {
  // undefined
    return this.client.expireSession(...args).promise()
  }

  async listAssociatedFleets(...args: any): Promise<any> {
  // undefined
    return this.client.listAssociatedFleets(...args).promise()
  }

  async listAssociatedStacks(...args: any): Promise<any> {
  // undefined
    return this.client.listAssociatedStacks(...args).promise()
  }

  async listEntitledApplications(...args: any): Promise<any> {
  // undefined
    return this.client.listEntitledApplications(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async startFleet(...args: any): Promise<any> {
  // undefined
    return this.client.startFleet(...args).promise()
  }

  async startImageBuilder(...args: any): Promise<any> {
  // undefined
    return this.client.startImageBuilder(...args).promise()
  }

  async stopFleet(...args: any): Promise<any> {
  // undefined
    return this.client.stopFleet(...args).promise()
  }

  async stopImageBuilder(...args: any): Promise<any> {
  // undefined
    return this.client.stopImageBuilder(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }

  async updateDirectoryConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateDirectoryConfig(...args).promise()
  }

  async updateEntitlement(...args: any): Promise<any> {
  // undefined
    return this.client.updateEntitlement(...args).promise()
  }

  async updateFleet(...args: any): Promise<any> {
  // undefined
    return this.client.updateFleet(...args).promise()
  }

  async updateImagePermissions(...args: any): Promise<any> {
  // undefined
    return this.client.updateImagePermissions(...args).promise()
  }

  async updateStack(...args: any): Promise<any> {
  // undefined
    return this.client.updateStack(...args).promise()
  }
  
  static fromClient(client: AWSAppStream): ClientType {
    return new AppStream(client) as any;
  }
  
  static client(options?: AWSAppStream.Types.ClientConfiguration): ClientType {
    return new AppStream(new AWSAppStream(options)) as any;
  }
}  
