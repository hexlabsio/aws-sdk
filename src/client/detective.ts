import { Request, Detective as AWSDetective } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDetective> = AWSDetective[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDetective> = AWSDetective[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDetective[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDetective, Extras> = AWSDetective[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDetective> = AWSDetective[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Detective {
  private constructor(private readonly client: AWSDetective) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'detective' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listGraphs","listInvitations","listOrganizationAdminAccounts"] as const;
  
  acceptInvitation: (params: RawParamsFrom<'acceptInvitation'>) => Promise<ReturnTypeFrom<'acceptInvitation'>>  = async params => {
  // undefined
    return this.client.acceptInvitation(params as any).promise();
  }

  batchGetGraphMemberDatasources: (params: RawParamsFrom<'batchGetGraphMemberDatasources'>) => Promise<ReturnTypeFrom<'batchGetGraphMemberDatasources'>>  = async params => {
  // undefined
    return this.client.batchGetGraphMemberDatasources(params as any).promise();
  }

  batchGetMembershipDatasources: (params: RawParamsFrom<'batchGetMembershipDatasources'>) => Promise<ReturnTypeFrom<'batchGetMembershipDatasources'>>  = async params => {
  // undefined
    return this.client.batchGetMembershipDatasources(params as any).promise();
  }

  createGraph: (params: RawParamsFrom<'createGraph'>) => Promise<ReturnTypeFrom<'createGraph'>>  = async params => {
  // undefined
    return this.client.createGraph(params as any).promise();
  }

  createMembers: (params: RawParamsFrom<'createMembers'>) => Promise<ReturnTypeFrom<'createMembers'>>  = async params => {
  // undefined
    return this.client.createMembers(params as any).promise();
  }

  deleteGraph: (params: RawParamsFrom<'deleteGraph'>) => Promise<ReturnTypeFrom<'deleteGraph'>>  = async params => {
  // undefined
    return this.client.deleteGraph(params as any).promise();
  }

  deleteMembers: (params: RawParamsFrom<'deleteMembers'>) => Promise<ReturnTypeFrom<'deleteMembers'>>  = async params => {
  // undefined
    return this.client.deleteMembers(params as any).promise();
  }

  describeOrganizationConfiguration: (params: RawParamsFrom<'describeOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'describeOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.describeOrganizationConfiguration(params as any).promise();
  }

  disableOrganizationAdminAccount: (params: RawParamsFrom<'disableOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'disableOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.disableOrganizationAdminAccount(params as any).promise();
  }

  disassociateMembership: (params: RawParamsFrom<'disassociateMembership'>) => Promise<ReturnTypeFrom<'disassociateMembership'>>  = async params => {
  // undefined
    return this.client.disassociateMembership(params as any).promise();
  }

  enableOrganizationAdminAccount: (params: RawParamsFrom<'enableOrganizationAdminAccount'>) => Promise<ReturnTypeFrom<'enableOrganizationAdminAccount'>>  = async params => {
  // undefined
    return this.client.enableOrganizationAdminAccount(params as any).promise();
  }

  getMembers: (params: RawParamsFrom<'getMembers'>) => Promise<ReturnTypeFrom<'getMembers'>>  = async params => {
  // undefined
    return this.client.getMembers(params as any).promise();
  }

  listDatasourcePackages: (params: RawParamsFrom<'listDatasourcePackages'>) => Promise<ReturnTypeFrom<'listDatasourcePackages'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDatasourcePackages(params as any).promise();
  }

  listGraphs: (params: RawParamsFrom<'listGraphs'>) => Promise<ReturnTypeFrom<'listGraphs'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGraphs(params as any).promise();
  }

  listInvitations: (params: RawParamsFrom<'listInvitations'>) => Promise<ReturnTypeFrom<'listInvitations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInvitations(params as any).promise();
  }

  listMembers: (params: RawParamsFrom<'listMembers'>) => Promise<ReturnTypeFrom<'listMembers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMembers(params as any).promise();
  }

  listOrganizationAdminAccounts: (params: RawParamsFrom<'listOrganizationAdminAccounts'>) => Promise<ReturnTypeFrom<'listOrganizationAdminAccounts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOrganizationAdminAccounts(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  rejectInvitation: (params: RawParamsFrom<'rejectInvitation'>) => Promise<ReturnTypeFrom<'rejectInvitation'>>  = async params => {
  // undefined
    return this.client.rejectInvitation(params as any).promise();
  }

  startMonitoringMember: (params: RawParamsFrom<'startMonitoringMember'>) => Promise<ReturnTypeFrom<'startMonitoringMember'>>  = async params => {
  // undefined
    return this.client.startMonitoringMember(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDatasourcePackages: (params: RawParamsFrom<'updateDatasourcePackages'>) => Promise<ReturnTypeFrom<'updateDatasourcePackages'>>  = async params => {
  // undefined
    return this.client.updateDatasourcePackages(params as any).promise();
  }

  updateOrganizationConfiguration: (params: RawParamsFrom<'updateOrganizationConfiguration'>) => Promise<ReturnTypeFrom<'updateOrganizationConfiguration'>>  = async params => {
  // undefined
    return this.client.updateOrganizationConfiguration(params as any).promise();
  }
  
  static fromClient(client: AWSDetective): Detective {
    return new Detective(client) as any;
  }
  
  static client(options?: AWSDetective.Types.ClientConfiguration): Detective {
    return new Detective(new AWSDetective(options)) as any;
  }
}  
