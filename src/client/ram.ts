import { Request, RAM as AWSRAM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRAM> = AWSRAM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRAM> = AWSRAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRAM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRAM, Extras> = AWSRAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRAM> = AWSRAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class RAM {
  private constructor(private readonly client: AWSRAM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ram' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["getResourceShareInvitations","listPermissions","listResourceTypes"] as const;
  
  acceptResourceShareInvitation: (params: RawParamsFrom<'acceptResourceShareInvitation'>) => Promise<ReturnTypeFrom<'acceptResourceShareInvitation'>>  = async params => {
  // undefined
    return this.client.acceptResourceShareInvitation(params as any).promise();
  }

  associateResourceShare: (params: RawParamsFrom<'associateResourceShare'>) => Promise<ReturnTypeFrom<'associateResourceShare'>>  = async params => {
  // undefined
    return this.client.associateResourceShare(params as any).promise();
  }

  associateResourceSharePermission: (params: RawParamsFrom<'associateResourceSharePermission'>) => Promise<ReturnTypeFrom<'associateResourceSharePermission'>>  = async params => {
  // undefined
    return this.client.associateResourceSharePermission(params as any).promise();
  }

  createResourceShare: (params: RawParamsFrom<'createResourceShare'>) => Promise<ReturnTypeFrom<'createResourceShare'>>  = async params => {
  // undefined
    return this.client.createResourceShare(params as any).promise();
  }

  deleteResourceShare: (params: RawParamsFrom<'deleteResourceShare'>) => Promise<ReturnTypeFrom<'deleteResourceShare'>>  = async params => {
  // undefined
    return this.client.deleteResourceShare(params as any).promise();
  }

  disassociateResourceShare: (params: RawParamsFrom<'disassociateResourceShare'>) => Promise<ReturnTypeFrom<'disassociateResourceShare'>>  = async params => {
  // undefined
    return this.client.disassociateResourceShare(params as any).promise();
  }

  disassociateResourceSharePermission: (params: RawParamsFrom<'disassociateResourceSharePermission'>) => Promise<ReturnTypeFrom<'disassociateResourceSharePermission'>>  = async params => {
  // undefined
    return this.client.disassociateResourceSharePermission(params as any).promise();
  }

  enableSharingWithAwsOrganization: (params: RawParamsFrom<'enableSharingWithAwsOrganization'>) => Promise<ReturnTypeFrom<'enableSharingWithAwsOrganization'>>  = async params => {
  // undefined
    return this.client.enableSharingWithAwsOrganization(params as any).promise();
  }

  getPermission: (params: RawParamsFrom<'getPermission'>) => Promise<ReturnTypeFrom<'getPermission'>>  = async params => {
  // undefined
    return this.client.getPermission(params as any).promise();
  }

  getResourcePolicies: (params: RawParamsFrom<'getResourcePolicies'>) => Promise<ReturnTypeFrom<'getResourcePolicies'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getResourcePolicies(params as any).promise();
  }

  getResourceShareAssociations: (params: RawParamsFrom<'getResourceShareAssociations'>) => Promise<ReturnTypeFrom<'getResourceShareAssociations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getResourceShareAssociations(params as any).promise();
  }

  getResourceShareInvitations: (params: RawParamsFrom<'getResourceShareInvitations'>) => Promise<ReturnTypeFrom<'getResourceShareInvitations'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getResourceShareInvitations(params as any).promise();
  }

  getResourceShares: (params: RawParamsFrom<'getResourceShares'>) => Promise<ReturnTypeFrom<'getResourceShares'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getResourceShares(params as any).promise();
  }

  listPendingInvitationResources: (params: RawParamsFrom<'listPendingInvitationResources'>) => Promise<ReturnTypeFrom<'listPendingInvitationResources'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPendingInvitationResources(params as any).promise();
  }

  listPermissionVersions: (params: RawParamsFrom<'listPermissionVersions'>) => Promise<ReturnTypeFrom<'listPermissionVersions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPermissionVersions(params as any).promise();
  }

  listPermissions: (params: RawParamsFrom<'listPermissions'>) => Promise<ReturnTypeFrom<'listPermissions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPermissions(params as any).promise();
  }

  listPrincipals: (params: RawParamsFrom<'listPrincipals'>) => Promise<ReturnTypeFrom<'listPrincipals'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPrincipals(params as any).promise();
  }

  listResourceSharePermissions: (params: RawParamsFrom<'listResourceSharePermissions'>) => Promise<ReturnTypeFrom<'listResourceSharePermissions'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listResourceSharePermissions(params as any).promise();
  }

  listResourceTypes: (params: RawParamsFrom<'listResourceTypes'>) => Promise<ReturnTypeFrom<'listResourceTypes'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listResourceTypes(params as any).promise();
  }

  listResources: (params: RawParamsFrom<'listResources'>) => Promise<ReturnTypeFrom<'listResources'>>  = async params => {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listResources(params as any).promise();
  }

  promoteResourceShareCreatedFromPolicy: (params: RawParamsFrom<'promoteResourceShareCreatedFromPolicy'>) => Promise<ReturnTypeFrom<'promoteResourceShareCreatedFromPolicy'>>  = async params => {
  // undefined
    return this.client.promoteResourceShareCreatedFromPolicy(params as any).promise();
  }

  rejectResourceShareInvitation: (params: RawParamsFrom<'rejectResourceShareInvitation'>) => Promise<ReturnTypeFrom<'rejectResourceShareInvitation'>>  = async params => {
  // undefined
    return this.client.rejectResourceShareInvitation(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateResourceShare: (params: RawParamsFrom<'updateResourceShare'>) => Promise<ReturnTypeFrom<'updateResourceShare'>>  = async params => {
  // undefined
    return this.client.updateResourceShare(params as any).promise();
  }
  
  static fromClient(client: AWSRAM): RAM {
    return new RAM(client) as any;
  }
  
  static client(options?: AWSRAM.Types.ClientConfiguration): RAM {
    return new RAM(new AWSRAM(options)) as any;
  }
}  
