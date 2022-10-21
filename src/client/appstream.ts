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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAppStream> = AWSAppStream[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AppStream {
  private constructor(private readonly client: AWSAppStream) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'appstream2' as const;
  public readonly global = false as const;
  public readonly category = 'End User Computing' as const;
  public readonly topLevelCalls = ["describeImages"] as const;
  
  associateApplicationFleet: (params: RawParamsFrom<'associateApplicationFleet'>) => Promise<ReturnTypeFrom<'associateApplicationFleet'>>  = async params => {
  // undefined
    return this.client.associateApplicationFleet(params as any).promise();
  }

  associateApplicationToEntitlement: (params: RawParamsFrom<'associateApplicationToEntitlement'>) => Promise<ReturnTypeFrom<'associateApplicationToEntitlement'>>  = async params => {
  // undefined
    return this.client.associateApplicationToEntitlement(params as any).promise();
  }

  associateFleet: (params: RawParamsFrom<'associateFleet'>) => Promise<ReturnTypeFrom<'associateFleet'>>  = async params => {
  // undefined
    return this.client.associateFleet(params as any).promise();
  }

  batchAssociateUserStack: (params: RawParamsFrom<'batchAssociateUserStack'>) => Promise<ReturnTypeFrom<'batchAssociateUserStack'>>  = async params => {
  // undefined
    return this.client.batchAssociateUserStack(params as any).promise();
  }

  batchDisassociateUserStack: (params: RawParamsFrom<'batchDisassociateUserStack'>) => Promise<ReturnTypeFrom<'batchDisassociateUserStack'>>  = async params => {
  // undefined
    return this.client.batchDisassociateUserStack(params as any).promise();
  }

  copyImage: (params: RawParamsFrom<'copyImage'>) => Promise<ReturnTypeFrom<'copyImage'>>  = async params => {
  // undefined
    return this.client.copyImage(params as any).promise();
  }

  createAppBlock: (params: RawParamsFrom<'createAppBlock'>) => Promise<ReturnTypeFrom<'createAppBlock'>>  = async params => {
  // undefined
    return this.client.createAppBlock(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createDirectoryConfig: (params: RawParamsFrom<'createDirectoryConfig'>) => Promise<ReturnTypeFrom<'createDirectoryConfig'>>  = async params => {
  // undefined
    return this.client.createDirectoryConfig(params as any).promise();
  }

  createEntitlement: (params: RawParamsFrom<'createEntitlement'>) => Promise<ReturnTypeFrom<'createEntitlement'>>  = async params => {
  // undefined
    return this.client.createEntitlement(params as any).promise();
  }

  createFleet: (params: RawParamsFrom<'createFleet'>) => Promise<ReturnTypeFrom<'createFleet'>>  = async params => {
  // undefined
    return this.client.createFleet(params as any).promise();
  }

  createImageBuilder: (params: RawParamsFrom<'createImageBuilder'>) => Promise<ReturnTypeFrom<'createImageBuilder'>>  = async params => {
  // undefined
    return this.client.createImageBuilder(params as any).promise();
  }

  createImageBuilderStreamingURL: (params: RawParamsFrom<'createImageBuilderStreamingURL'>) => Promise<ReturnTypeFrom<'createImageBuilderStreamingURL'>>  = async params => {
  // undefined
    return this.client.createImageBuilderStreamingURL(params as any).promise();
  }

  createStack: (params: RawParamsFrom<'createStack'>) => Promise<ReturnTypeFrom<'createStack'>>  = async params => {
  // undefined
    return this.client.createStack(params as any).promise();
  }

  createStreamingURL: (params: RawParamsFrom<'createStreamingURL'>) => Promise<ReturnTypeFrom<'createStreamingURL'>>  = async params => {
  // undefined
    return this.client.createStreamingURL(params as any).promise();
  }

  createUpdatedImage: (params: RawParamsFrom<'createUpdatedImage'>) => Promise<ReturnTypeFrom<'createUpdatedImage'>>  = async params => {
  // undefined
    return this.client.createUpdatedImage(params as any).promise();
  }

  createUsageReportSubscription: (params: RawParamsFrom<'createUsageReportSubscription'>) => Promise<ReturnTypeFrom<'createUsageReportSubscription'>>  = async params => {
  // undefined
    return this.client.createUsageReportSubscription(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  deleteAppBlock: (params: RawParamsFrom<'deleteAppBlock'>) => Promise<ReturnTypeFrom<'deleteAppBlock'>>  = async params => {
  // undefined
    return this.client.deleteAppBlock(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteDirectoryConfig: (params: RawParamsFrom<'deleteDirectoryConfig'>) => Promise<ReturnTypeFrom<'deleteDirectoryConfig'>>  = async params => {
  // undefined
    return this.client.deleteDirectoryConfig(params as any).promise();
  }

  deleteEntitlement: (params: RawParamsFrom<'deleteEntitlement'>) => Promise<ReturnTypeFrom<'deleteEntitlement'>>  = async params => {
  // undefined
    return this.client.deleteEntitlement(params as any).promise();
  }

  deleteFleet: (params: RawParamsFrom<'deleteFleet'>) => Promise<ReturnTypeFrom<'deleteFleet'>>  = async params => {
  // undefined
    return this.client.deleteFleet(params as any).promise();
  }

  deleteImage: (params: RawParamsFrom<'deleteImage'>) => Promise<ReturnTypeFrom<'deleteImage'>>  = async params => {
  // undefined
    return this.client.deleteImage(params as any).promise();
  }

  deleteImageBuilder: (params: RawParamsFrom<'deleteImageBuilder'>) => Promise<ReturnTypeFrom<'deleteImageBuilder'>>  = async params => {
  // undefined
    return this.client.deleteImageBuilder(params as any).promise();
  }

  deleteImagePermissions: (params: RawParamsFrom<'deleteImagePermissions'>) => Promise<ReturnTypeFrom<'deleteImagePermissions'>>  = async params => {
  // undefined
    return this.client.deleteImagePermissions(params as any).promise();
  }

  deleteStack: (params: RawParamsFrom<'deleteStack'>) => Promise<ReturnTypeFrom<'deleteStack'>>  = async params => {
  // undefined
    return this.client.deleteStack(params as any).promise();
  }

  deleteUsageReportSubscription: (params: RawParamsFrom<'deleteUsageReportSubscription'>) => Promise<ReturnTypeFrom<'deleteUsageReportSubscription'>>  = async params => {
  // undefined
    return this.client.deleteUsageReportSubscription(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  describeAppBlocks: (params: RawParamsFrom<'describeAppBlocks'>) => Promise<ReturnTypeFrom<'describeAppBlocks'>>  = async params => {
  // undefined
    return this.client.describeAppBlocks(params as any).promise();
  }

  describeApplicationFleetAssociations: (params: RawParamsFrom<'describeApplicationFleetAssociations'>) => Promise<ReturnTypeFrom<'describeApplicationFleetAssociations'>>  = async params => {
  // undefined
    return this.client.describeApplicationFleetAssociations(params as any).promise();
  }

  describeApplications: (params: RawParamsFrom<'describeApplications'>) => Promise<ReturnTypeFrom<'describeApplications'>>  = async params => {
  // undefined
    return this.client.describeApplications(params as any).promise();
  }

  describeDirectoryConfigs: (params: RawParamsFrom<'describeDirectoryConfigs'>) => Promise<ReturnTypeFrom<'describeDirectoryConfigs'>>  = async params => {
  // undefined
    return this.client.describeDirectoryConfigs(params as any).promise();
  }

  describeEntitlements: (params: RawParamsFrom<'describeEntitlements'>) => Promise<ReturnTypeFrom<'describeEntitlements'>>  = async params => {
  // undefined
    return this.client.describeEntitlements(params as any).promise();
  }

  describeFleets: (params: RawParamsFrom<'describeFleets'>) => Promise<ReturnTypeFrom<'describeFleets'>>  = async params => {
  // undefined
    return this.client.describeFleets(params as any).promise();
  }

  describeImageBuilders: (params: RawParamsFrom<'describeImageBuilders'>) => Promise<ReturnTypeFrom<'describeImageBuilders'>>  = async params => {
  // undefined
    return this.client.describeImageBuilders(params as any).promise();
  }

  describeImagePermissions: (params: RawParamsFrom<'describeImagePermissions'>) => Promise<ReturnTypeFrom<'describeImagePermissions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeImagePermissions(params as any).promise();
  }

  describeImages: (params: RawParamsFrom<'describeImages'>) => Promise<ReturnTypeFrom<'describeImages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeImages(params as any).promise();
  }

  describeSessions: (params: RawParamsFrom<'describeSessions'>) => Promise<ReturnTypeFrom<'describeSessions'>>  = async params => {
  // undefined
    return this.client.describeSessions(params as any).promise();
  }

  describeStacks: (params: RawParamsFrom<'describeStacks'>) => Promise<ReturnTypeFrom<'describeStacks'>>  = async params => {
  // undefined
    return this.client.describeStacks(params as any).promise();
  }

  describeUsageReportSubscriptions: (params: RawParamsFrom<'describeUsageReportSubscriptions'>) => Promise<ReturnTypeFrom<'describeUsageReportSubscriptions'>>  = async params => {
  // undefined
    return this.client.describeUsageReportSubscriptions(params as any).promise();
  }

  describeUserStackAssociations: (params: RawParamsFrom<'describeUserStackAssociations'>) => Promise<ReturnTypeFrom<'describeUserStackAssociations'>>  = async params => {
  // undefined
    return this.client.describeUserStackAssociations(params as any).promise();
  }

  describeUsers: (params: RawParamsFrom<'describeUsers'>) => Promise<ReturnTypeFrom<'describeUsers'>>  = async params => {
  // undefined
    return this.client.describeUsers(params as any).promise();
  }

  disableUser: (params: RawParamsFrom<'disableUser'>) => Promise<ReturnTypeFrom<'disableUser'>>  = async params => {
  // undefined
    return this.client.disableUser(params as any).promise();
  }

  disassociateApplicationFleet: (params: RawParamsFrom<'disassociateApplicationFleet'>) => Promise<ReturnTypeFrom<'disassociateApplicationFleet'>>  = async params => {
  // undefined
    return this.client.disassociateApplicationFleet(params as any).promise();
  }

  disassociateApplicationFromEntitlement: (params: RawParamsFrom<'disassociateApplicationFromEntitlement'>) => Promise<ReturnTypeFrom<'disassociateApplicationFromEntitlement'>>  = async params => {
  // undefined
    return this.client.disassociateApplicationFromEntitlement(params as any).promise();
  }

  disassociateFleet: (params: RawParamsFrom<'disassociateFleet'>) => Promise<ReturnTypeFrom<'disassociateFleet'>>  = async params => {
  // undefined
    return this.client.disassociateFleet(params as any).promise();
  }

  enableUser: (params: RawParamsFrom<'enableUser'>) => Promise<ReturnTypeFrom<'enableUser'>>  = async params => {
  // undefined
    return this.client.enableUser(params as any).promise();
  }

  expireSession: (params: RawParamsFrom<'expireSession'>) => Promise<ReturnTypeFrom<'expireSession'>>  = async params => {
  // undefined
    return this.client.expireSession(params as any).promise();
  }

  listAssociatedFleets: (params: RawParamsFrom<'listAssociatedFleets'>) => Promise<ReturnTypeFrom<'listAssociatedFleets'>>  = async params => {
  // undefined
    return this.client.listAssociatedFleets(params as any).promise();
  }

  listAssociatedStacks: (params: RawParamsFrom<'listAssociatedStacks'>) => Promise<ReturnTypeFrom<'listAssociatedStacks'>>  = async params => {
  // undefined
    return this.client.listAssociatedStacks(params as any).promise();
  }

  listEntitledApplications: (params: RawParamsFrom<'listEntitledApplications'>) => Promise<ReturnTypeFrom<'listEntitledApplications'>>  = async params => {
  // undefined
    return this.client.listEntitledApplications(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  startFleet: (params: RawParamsFrom<'startFleet'>) => Promise<ReturnTypeFrom<'startFleet'>>  = async params => {
  // undefined
    return this.client.startFleet(params as any).promise();
  }

  startImageBuilder: (params: RawParamsFrom<'startImageBuilder'>) => Promise<ReturnTypeFrom<'startImageBuilder'>>  = async params => {
  // undefined
    return this.client.startImageBuilder(params as any).promise();
  }

  stopFleet: (params: RawParamsFrom<'stopFleet'>) => Promise<ReturnTypeFrom<'stopFleet'>>  = async params => {
  // undefined
    return this.client.stopFleet(params as any).promise();
  }

  stopImageBuilder: (params: RawParamsFrom<'stopImageBuilder'>) => Promise<ReturnTypeFrom<'stopImageBuilder'>>  = async params => {
  // undefined
    return this.client.stopImageBuilder(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }

  updateDirectoryConfig: (params: RawParamsFrom<'updateDirectoryConfig'>) => Promise<ReturnTypeFrom<'updateDirectoryConfig'>>  = async params => {
  // undefined
    return this.client.updateDirectoryConfig(params as any).promise();
  }

  updateEntitlement: (params: RawParamsFrom<'updateEntitlement'>) => Promise<ReturnTypeFrom<'updateEntitlement'>>  = async params => {
  // undefined
    return this.client.updateEntitlement(params as any).promise();
  }

  updateFleet: (params: RawParamsFrom<'updateFleet'>) => Promise<ReturnTypeFrom<'updateFleet'>>  = async params => {
  // undefined
    return this.client.updateFleet(params as any).promise();
  }

  updateImagePermissions: (params: RawParamsFrom<'updateImagePermissions'>) => Promise<ReturnTypeFrom<'updateImagePermissions'>>  = async params => {
  // undefined
    return this.client.updateImagePermissions(params as any).promise();
  }

  updateStack: (params: RawParamsFrom<'updateStack'>) => Promise<ReturnTypeFrom<'updateStack'>>  = async params => {
  // undefined
    return this.client.updateStack(params as any).promise();
  }
  
  static fromClient(client: AWSAppStream): AppStream {
    return new AppStream(client) as any;
  }
  
  static client(options?: AWSAppStream.Types.ClientConfiguration): AppStream {
    return new AppStream(new AWSAppStream(options)) as any;
  }
}  
