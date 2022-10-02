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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'detective';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listGraphs","listInvitations","listOrganizationAdminAccounts"];
    
  acceptInvitation: FunctionTypeFrom<'acceptInvitation'>;

  batchGetGraphMemberDatasources: FunctionTypeFrom<'batchGetGraphMemberDatasources'>;

  batchGetMembershipDatasources: FunctionTypeFrom<'batchGetMembershipDatasources'>;

  createGraph: FunctionTypeFrom<'createGraph'>;

  createMembers: FunctionTypeFrom<'createMembers'>;

  deleteGraph: FunctionTypeFrom<'deleteGraph'>;

  deleteMembers: FunctionTypeFrom<'deleteMembers'>;

  describeOrganizationConfiguration: FunctionTypeFrom<'describeOrganizationConfiguration'>;

  disableOrganizationAdminAccount: FunctionTypeFrom<'disableOrganizationAdminAccount'>;

  disassociateMembership: FunctionTypeFrom<'disassociateMembership'>;

  enableOrganizationAdminAccount: FunctionTypeFrom<'enableOrganizationAdminAccount'>;

  getMembers: FunctionTypeFrom<'getMembers'>;

  listDatasourcePackages: FunctionTypeFrom<'listDatasourcePackages'>;

  listGraphs: FunctionTypeFrom<'listGraphs'>;

  listInvitations: FunctionTypeFrom<'listInvitations'>;

  listMembers: FunctionTypeFrom<'listMembers'>;

  listOrganizationAdminAccounts: FunctionTypeFrom<'listOrganizationAdminAccounts'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  rejectInvitation: FunctionTypeFrom<'rejectInvitation'>;

  startMonitoringMember: FunctionTypeFrom<'startMonitoringMember'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDatasourcePackages: FunctionTypeFrom<'updateDatasourcePackages'>;

  updateOrganizationConfiguration: FunctionTypeFrom<'updateOrganizationConfiguration'>
}
 
export class Detective implements ClientType {
  private constructor(private readonly client: AWSDetective) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'detective';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listGraphs","listInvitations","listOrganizationAdminAccounts"] as const;
  
  async acceptInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.acceptInvitation(...args).promise()
  }

  async batchGetGraphMemberDatasources(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetGraphMemberDatasources(...args).promise()
  }

  async batchGetMembershipDatasources(...args: any): Promise<any> {
  // undefined
    return this.client.batchGetMembershipDatasources(...args).promise()
  }

  async createGraph(...args: any): Promise<any> {
  // undefined
    return this.client.createGraph(...args).promise()
  }

  async createMembers(...args: any): Promise<any> {
  // undefined
    return this.client.createMembers(...args).promise()
  }

  async deleteGraph(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGraph(...args).promise()
  }

  async deleteMembers(...args: any): Promise<any> {
  // undefined
    return this.client.deleteMembers(...args).promise()
  }

  async describeOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganizationConfiguration(...args).promise()
  }

  async disableOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.disableOrganizationAdminAccount(...args).promise()
  }

  async disassociateMembership(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateMembership(...args).promise()
  }

  async enableOrganizationAdminAccount(...args: any): Promise<any> {
  // undefined
    return this.client.enableOrganizationAdminAccount(...args).promise()
  }

  async getMembers(...args: any): Promise<any> {
  // undefined
    return this.client.getMembers(...args).promise()
  }

  async listDatasourcePackages(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listDatasourcePackages(...args).promise()
  }

  async listGraphs(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listGraphs(...args).promise()
  }

  async listInvitations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listInvitations(...args).promise()
  }

  async listMembers(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listMembers(...args).promise()
  }

  async listOrganizationAdminAccounts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOrganizationAdminAccounts(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async rejectInvitation(...args: any): Promise<any> {
  // undefined
    return this.client.rejectInvitation(...args).promise()
  }

  async startMonitoringMember(...args: any): Promise<any> {
  // undefined
    return this.client.startMonitoringMember(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDatasourcePackages(...args: any): Promise<any> {
  // undefined
    return this.client.updateDatasourcePackages(...args).promise()
  }

  async updateOrganizationConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateOrganizationConfiguration(...args).promise()
  }
  
  static fromClient(client: AWSDetective): ClientType {
    return new Detective(client) as any;
  }
  
  static client(options?: AWSDetective.Types.ClientConfiguration): ClientType {
    return new Detective(new AWSDetective(options)) as any;
  }
}  
