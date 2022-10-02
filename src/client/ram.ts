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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'ram';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["getResourceShareInvitations","listPermissions","listResourceTypes"];
    
  acceptResourceShareInvitation: FunctionTypeFrom<'acceptResourceShareInvitation'>;

  associateResourceShare: FunctionTypeFrom<'associateResourceShare'>;

  associateResourceSharePermission: FunctionTypeFrom<'associateResourceSharePermission'>;

  createResourceShare: FunctionTypeFrom<'createResourceShare'>;

  deleteResourceShare: FunctionTypeFrom<'deleteResourceShare'>;

  disassociateResourceShare: FunctionTypeFrom<'disassociateResourceShare'>;

  disassociateResourceSharePermission: FunctionTypeFrom<'disassociateResourceSharePermission'>;

  enableSharingWithAwsOrganization: FunctionTypeFrom<'enableSharingWithAwsOrganization'>;

  getPermission: FunctionTypeFrom<'getPermission'>;

  getResourcePolicies: FunctionTypeFrom<'getResourcePolicies'>;

  getResourceShareAssociations: FunctionTypeFrom<'getResourceShareAssociations'>;

  getResourceShareInvitations: FunctionTypeFrom<'getResourceShareInvitations'>;

  getResourceShares: FunctionTypeFrom<'getResourceShares'>;

  listPendingInvitationResources: FunctionTypeFrom<'listPendingInvitationResources'>;

  listPermissionVersions: FunctionTypeFrom<'listPermissionVersions'>;

  listPermissions: FunctionTypeFrom<'listPermissions'>;

  listPrincipals: FunctionTypeFrom<'listPrincipals'>;

  listResourceSharePermissions: FunctionTypeFrom<'listResourceSharePermissions'>;

  listResourceTypes: FunctionTypeFrom<'listResourceTypes'>;

  listResources: FunctionTypeFrom<'listResources'>;

  promoteResourceShareCreatedFromPolicy: FunctionTypeFrom<'promoteResourceShareCreatedFromPolicy'>;

  rejectResourceShareInvitation: FunctionTypeFrom<'rejectResourceShareInvitation'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateResourceShare: FunctionTypeFrom<'updateResourceShare'>
}
 
export class RAM implements ClientType {
  private constructor(private readonly client: AWSRAM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ram';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["getResourceShareInvitations","listPermissions","listResourceTypes"] as const;
  
  async acceptResourceShareInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.acceptResourceShareInvitation(...args).promise()
  }

  async associateResourceShare(...args: any): Promise<any> {
  // undefined
    return this.client.associateResourceShare(...args).promise()
  }

  async associateResourceSharePermission(...args: any): Promise<any> {
  // undefined
    return this.client.associateResourceSharePermission(...args).promise()
  }

  async createResourceShare(...args: any): Promise<any> {
  // undefined
    return this.client.createResourceShare(...args).promise()
  }

  async deleteResourceShare(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourceShare(...args).promise()
  }

  async disassociateResourceShare(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateResourceShare(...args).promise()
  }

  async disassociateResourceSharePermission(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateResourceSharePermission(...args).promise()
  }

  async enableSharingWithAwsOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.enableSharingWithAwsOrganization(...args).promise()
  }

  async getPermission(...args: any): Promise<any> {
  // undefined
    return this.client.getPermission(...args).promise()
  }

  async getResourcePolicies(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getResourcePolicies(...args).promise()
  }

  async getResourceShareAssociations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getResourceShareAssociations(...args).promise()
  }

  async getResourceShareInvitations(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getResourceShareInvitations(...args).promise()
  }

  async getResourceShares(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.getResourceShares(...args).promise()
  }

  async listPendingInvitationResources(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPendingInvitationResources(...args).promise()
  }

  async listPermissionVersions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPermissionVersions(...args).promise()
  }

  async listPermissions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPermissions(...args).promise()
  }

  async listPrincipals(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listPrincipals(...args).promise()
  }

  async listResourceSharePermissions(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listResourceSharePermissions(...args).promise()
  }

  async listResourceTypes(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listResourceTypes(...args).promise()
  }

  async listResources(...args: any): Promise<any> {
  // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken"}
    return this.client.listResources(...args).promise()
  }

  async promoteResourceShareCreatedFromPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.promoteResourceShareCreatedFromPolicy(...args).promise()
  }

  async rejectResourceShareInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.rejectResourceShareInvitation(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateResourceShare(...args: any): Promise<any> {
  // undefined
    return this.client.updateResourceShare(...args).promise()
  }
  
  static fromClient(client: AWSRAM): ClientType {
    return new RAM(client) as any;
  }
  
  static client(options?: AWSRAM.Types.ClientConfiguration): ClientType {
    return new RAM(new AWSRAM(options)) as any;
  }
}  
