import { Request, Organizations as AWSOrganizations } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSOrganizations> = AWSOrganizations[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSOrganizations> = AWSOrganizations[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSOrganizations[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSOrganizations, Extras> = AWSOrganizations[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'organizations';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listAWSServiceAccessForOrganization","listAccounts","listCreateAccountStatus","listDelegatedAdministrators","listHandshakesForAccount","listHandshakesForOrganization","listRoots"];
    
  acceptHandshake: FunctionTypeFrom<'acceptHandshake'>;

  attachPolicy: FunctionTypeFrom<'attachPolicy'>;

  cancelHandshake: FunctionTypeFrom<'cancelHandshake'>;

  closeAccount: FunctionTypeFrom<'closeAccount'>;

  createAccount: FunctionTypeFrom<'createAccount'>;

  createGovCloudAccount: FunctionTypeFrom<'createGovCloudAccount'>;

  createOrganization: FunctionTypeFrom<'createOrganization'>;

  createOrganizationalUnit: FunctionTypeFrom<'createOrganizationalUnit'>;

  createPolicy: FunctionTypeFrom<'createPolicy'>;

  declineHandshake: FunctionTypeFrom<'declineHandshake'>;

  deleteOrganization: FunctionTypeFrom<'deleteOrganization'>;

  deleteOrganizationalUnit: FunctionTypeFrom<'deleteOrganizationalUnit'>;

  deletePolicy: FunctionTypeFrom<'deletePolicy'>;

  deregisterDelegatedAdministrator: FunctionTypeFrom<'deregisterDelegatedAdministrator'>;

  describeAccount: FunctionTypeFrom<'describeAccount'>;

  describeCreateAccountStatus: FunctionTypeFrom<'describeCreateAccountStatus'>;

  describeEffectivePolicy: FunctionTypeFrom<'describeEffectivePolicy'>;

  describeHandshake: FunctionTypeFrom<'describeHandshake'>;

  describeOrganization: FunctionTypeFrom<'describeOrganization'>;

  describeOrganizationalUnit: FunctionTypeFrom<'describeOrganizationalUnit'>;

  describePolicy: FunctionTypeFrom<'describePolicy'>;

  detachPolicy: FunctionTypeFrom<'detachPolicy'>;

  disableAWSServiceAccess: FunctionTypeFrom<'disableAWSServiceAccess'>;

  disablePolicyType: FunctionTypeFrom<'disablePolicyType'>;

  enableAWSServiceAccess: FunctionTypeFrom<'enableAWSServiceAccess'>;

  enableAllFeatures: FunctionTypeFrom<'enableAllFeatures'>;

  enablePolicyType: FunctionTypeFrom<'enablePolicyType'>;

  inviteAccountToOrganization: FunctionTypeFrom<'inviteAccountToOrganization'>;

  leaveOrganization: FunctionTypeFrom<'leaveOrganization'>;

  listAWSServiceAccessForOrganization: FunctionTypeFrom<'listAWSServiceAccessForOrganization'>;

  listAccounts: FunctionTypeFrom<'listAccounts'>;

  listAccountsForParent: FunctionTypeFrom<'listAccountsForParent'>;

  listChildren: FunctionTypeFrom<'listChildren'>;

  listCreateAccountStatus: FunctionTypeFrom<'listCreateAccountStatus'>;

  listDelegatedAdministrators(params: { [K in keyof Omit<ParamsFrom<'listDelegatedAdministrators', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDelegatedAdministrators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDelegatedAdministrators'>]-?: ReturnTypeFrom<'listDelegatedAdministrators'>[K]}['DelegatedAdministrators'] }>
  listDelegatedAdministrators(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDelegatedAdministrators'>]-?: ReturnTypeFrom<'listDelegatedAdministrators'>[K]}['DelegatedAdministrators'] }>;

  listDelegatedServicesForAccount(params: { [K in keyof Omit<ParamsFrom<'listDelegatedServicesForAccount', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDelegatedServicesForAccount', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDelegatedServicesForAccount'>]-?: ReturnTypeFrom<'listDelegatedServicesForAccount'>[K]}['DelegatedServices'] }>
  ;

  listHandshakesForAccount: FunctionTypeFrom<'listHandshakesForAccount'>;

  listHandshakesForOrganization: FunctionTypeFrom<'listHandshakesForOrganization'>;

  listOrganizationalUnitsForParent: FunctionTypeFrom<'listOrganizationalUnitsForParent'>;

  listParents: FunctionTypeFrom<'listParents'>;

  listPolicies: FunctionTypeFrom<'listPolicies'>;

  listPoliciesForTarget: FunctionTypeFrom<'listPoliciesForTarget'>;

  listRoots: FunctionTypeFrom<'listRoots'>;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string }>, 'NextToken'>]: ParamsFrom<'listTagsForResource', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  listTargetsForPolicy: FunctionTypeFrom<'listTargetsForPolicy'>;

  moveAccount: FunctionTypeFrom<'moveAccount'>;

  registerDelegatedAdministrator: FunctionTypeFrom<'registerDelegatedAdministrator'>;

  removeAccountFromOrganization: FunctionTypeFrom<'removeAccountFromOrganization'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateOrganizationalUnit: FunctionTypeFrom<'updateOrganizationalUnit'>;

  updatePolicy: FunctionTypeFrom<'updatePolicy'>
}
 
export class Organizations implements ClientType {
  private constructor(private readonly client: AWSOrganizations) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'organizations';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listAWSServiceAccessForOrganization","listAccounts","listCreateAccountStatus","listDelegatedAdministrators","listHandshakesForAccount","listHandshakesForOrganization","listRoots"] as const;
  
  async acceptHandshake(...args: any): Promise<any> {
  // undefined
    return this.client.acceptHandshake(...args).promise()
  }

  async attachPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.attachPolicy(...args).promise()
  }

  async cancelHandshake(...args: any): Promise<any> {
  // undefined
    return this.client.cancelHandshake(...args).promise()
  }

  async closeAccount(...args: any): Promise<any> {
  // undefined
    return this.client.closeAccount(...args).promise()
  }

  async createAccount(...args: any): Promise<any> {
  // undefined
    return this.client.createAccount(...args).promise()
  }

  async createGovCloudAccount(...args: any): Promise<any> {
  // undefined
    return this.client.createGovCloudAccount(...args).promise()
  }

  async createOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.createOrganization(...args).promise()
  }

  async createOrganizationalUnit(...args: any): Promise<any> {
  // undefined
    return this.client.createOrganizationalUnit(...args).promise()
  }

  async createPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createPolicy(...args).promise()
  }

  async declineHandshake(...args: any): Promise<any> {
  // undefined
    return this.client.declineHandshake(...args).promise()
  }

  async deleteOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOrganization(...args).promise()
  }

  async deleteOrganizationalUnit(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOrganizationalUnit(...args).promise()
  }

  async deletePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicy(...args).promise()
  }

  async deregisterDelegatedAdministrator(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterDelegatedAdministrator(...args).promise()
  }

  async describeAccount(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccount(...args).promise()
  }

  async describeCreateAccountStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeCreateAccountStatus(...args).promise()
  }

  async describeEffectivePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describeEffectivePolicy(...args).promise()
  }

  async describeHandshake(...args: any): Promise<any> {
  // undefined
    return this.client.describeHandshake(...args).promise()
  }

  async describeOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganization(...args).promise()
  }

  async describeOrganizationalUnit(...args: any): Promise<any> {
  // undefined
    return this.client.describeOrganizationalUnit(...args).promise()
  }

  async describePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.describePolicy(...args).promise()
  }

  async detachPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.detachPolicy(...args).promise()
  }

  async disableAWSServiceAccess(...args: any): Promise<any> {
  // undefined
    return this.client.disableAWSServiceAccess(...args).promise()
  }

  async disablePolicyType(...args: any): Promise<any> {
  // undefined
    return this.client.disablePolicyType(...args).promise()
  }

  async enableAWSServiceAccess(...args: any): Promise<any> {
  // undefined
    return this.client.enableAWSServiceAccess(...args).promise()
  }

  async enableAllFeatures(...args: any): Promise<any> {
  // undefined
    return this.client.enableAllFeatures(...args).promise()
  }

  async enablePolicyType(...args: any): Promise<any> {
  // undefined
    return this.client.enablePolicyType(...args).promise()
  }

  async inviteAccountToOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.inviteAccountToOrganization(...args).promise()
  }

  async leaveOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.leaveOrganization(...args).promise()
  }

  async listAWSServiceAccessForOrganization(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAWSServiceAccessForOrganization(...args).promise()
  }

  async listAccounts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccounts(...args).promise()
  }

  async listAccountsForParent(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccountsForParent(...args).promise()
  }

  async listChildren(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChildren(...args).promise()
  }

  async listCreateAccountStatus(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCreateAccountStatus(...args).promise()
  }

  async listDelegatedAdministrators(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DelegatedAdministrators"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDelegatedAdministrators(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DelegatedAdministrators ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDelegatedServicesForAccount(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DelegatedServices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDelegatedServicesForAccount(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DelegatedServices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listHandshakesForAccount(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHandshakesForAccount(...args).promise()
  }

  async listHandshakesForOrganization(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHandshakesForOrganization(...args).promise()
  }

  async listOrganizationalUnitsForParent(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOrganizationalUnitsForParent(...args).promise()
  }

  async listParents(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listParents(...args).promise()
  }

  async listPolicies(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPolicies(...args).promise()
  }

  async listPoliciesForTarget(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPoliciesForTarget(...args).promise()
  }

  async listRoots(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRoots(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTargetsForPolicy(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTargetsForPolicy(...args).promise()
  }

  async moveAccount(...args: any): Promise<any> {
  // undefined
    return this.client.moveAccount(...args).promise()
  }

  async registerDelegatedAdministrator(...args: any): Promise<any> {
  // undefined
    return this.client.registerDelegatedAdministrator(...args).promise()
  }

  async removeAccountFromOrganization(...args: any): Promise<any> {
  // undefined
    return this.client.removeAccountFromOrganization(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateOrganizationalUnit(...args: any): Promise<any> {
  // undefined
    return this.client.updateOrganizationalUnit(...args).promise()
  }

  async updatePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updatePolicy(...args).promise()
  }
  
  static fromClient(client: AWSOrganizations): ClientType {
    return new Organizations(client) as any;
  }
  
  static client(options?: AWSOrganizations.Types.ClientConfiguration): ClientType {
    return new Organizations(new AWSOrganizations(options)) as any;
  }
}  
