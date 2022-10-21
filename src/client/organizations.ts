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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSOrganizations> = AWSOrganizations[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Organizations {
  private constructor(private readonly client: AWSOrganizations) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'organizations' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listAWSServiceAccessForOrganization","listAccounts","listCreateAccountStatus","listDelegatedAdministrators","listHandshakesForAccount","listHandshakesForOrganization","listRoots"] as const;
  
  acceptHandshake: (params: RawParamsFrom<'acceptHandshake'>) => Promise<ReturnTypeFrom<'acceptHandshake'>>  = async params => {
  // undefined
    return this.client.acceptHandshake(params as any).promise();
  }

  attachPolicy: (params: RawParamsFrom<'attachPolicy'>) => Promise<ReturnTypeFrom<'attachPolicy'>>  = async params => {
  // undefined
    return this.client.attachPolicy(params as any).promise();
  }

  cancelHandshake: (params: RawParamsFrom<'cancelHandshake'>) => Promise<ReturnTypeFrom<'cancelHandshake'>>  = async params => {
  // undefined
    return this.client.cancelHandshake(params as any).promise();
  }

  closeAccount: (params: RawParamsFrom<'closeAccount'>) => Promise<ReturnTypeFrom<'closeAccount'>>  = async params => {
  // undefined
    return this.client.closeAccount(params as any).promise();
  }

  createAccount: (params: RawParamsFrom<'createAccount'>) => Promise<ReturnTypeFrom<'createAccount'>>  = async params => {
  // undefined
    return this.client.createAccount(params as any).promise();
  }

  createGovCloudAccount: (params: RawParamsFrom<'createGovCloudAccount'>) => Promise<ReturnTypeFrom<'createGovCloudAccount'>>  = async params => {
  // undefined
    return this.client.createGovCloudAccount(params as any).promise();
  }

  createOrganization: (params: RawParamsFrom<'createOrganization'>) => Promise<ReturnTypeFrom<'createOrganization'>>  = async params => {
  // undefined
    return this.client.createOrganization(params as any).promise();
  }

  createOrganizationalUnit: (params: RawParamsFrom<'createOrganizationalUnit'>) => Promise<ReturnTypeFrom<'createOrganizationalUnit'>>  = async params => {
  // undefined
    return this.client.createOrganizationalUnit(params as any).promise();
  }

  createPolicy: (params: RawParamsFrom<'createPolicy'>) => Promise<ReturnTypeFrom<'createPolicy'>>  = async params => {
  // undefined
    return this.client.createPolicy(params as any).promise();
  }

  declineHandshake: (params: RawParamsFrom<'declineHandshake'>) => Promise<ReturnTypeFrom<'declineHandshake'>>  = async params => {
  // undefined
    return this.client.declineHandshake(params as any).promise();
  }

  deleteOrganization: (params: RawParamsFrom<'deleteOrganization'>) => Promise<ReturnTypeFrom<'deleteOrganization'>>  = async params => {
  // undefined
    return this.client.deleteOrganization(params as any).promise();
  }

  deleteOrganizationalUnit: (params: RawParamsFrom<'deleteOrganizationalUnit'>) => Promise<ReturnTypeFrom<'deleteOrganizationalUnit'>>  = async params => {
  // undefined
    return this.client.deleteOrganizationalUnit(params as any).promise();
  }

  deletePolicy: (params: RawParamsFrom<'deletePolicy'>) => Promise<ReturnTypeFrom<'deletePolicy'>>  = async params => {
  // undefined
    return this.client.deletePolicy(params as any).promise();
  }

  deregisterDelegatedAdministrator: (params: RawParamsFrom<'deregisterDelegatedAdministrator'>) => Promise<ReturnTypeFrom<'deregisterDelegatedAdministrator'>>  = async params => {
  // undefined
    return this.client.deregisterDelegatedAdministrator(params as any).promise();
  }

  describeAccount: (params: RawParamsFrom<'describeAccount'>) => Promise<ReturnTypeFrom<'describeAccount'>>  = async params => {
  // undefined
    return this.client.describeAccount(params as any).promise();
  }

  describeCreateAccountStatus: (params: RawParamsFrom<'describeCreateAccountStatus'>) => Promise<ReturnTypeFrom<'describeCreateAccountStatus'>>  = async params => {
  // undefined
    return this.client.describeCreateAccountStatus(params as any).promise();
  }

  describeEffectivePolicy: (params: RawParamsFrom<'describeEffectivePolicy'>) => Promise<ReturnTypeFrom<'describeEffectivePolicy'>>  = async params => {
  // undefined
    return this.client.describeEffectivePolicy(params as any).promise();
  }

  describeHandshake: (params: RawParamsFrom<'describeHandshake'>) => Promise<ReturnTypeFrom<'describeHandshake'>>  = async params => {
  // undefined
    return this.client.describeHandshake(params as any).promise();
  }

  describeOrganization: (params: RawParamsFrom<'describeOrganization'>) => Promise<ReturnTypeFrom<'describeOrganization'>>  = async params => {
  // undefined
    return this.client.describeOrganization(params as any).promise();
  }

  describeOrganizationalUnit: (params: RawParamsFrom<'describeOrganizationalUnit'>) => Promise<ReturnTypeFrom<'describeOrganizationalUnit'>>  = async params => {
  // undefined
    return this.client.describeOrganizationalUnit(params as any).promise();
  }

  describePolicy: (params: RawParamsFrom<'describePolicy'>) => Promise<ReturnTypeFrom<'describePolicy'>>  = async params => {
  // undefined
    return this.client.describePolicy(params as any).promise();
  }

  detachPolicy: (params: RawParamsFrom<'detachPolicy'>) => Promise<ReturnTypeFrom<'detachPolicy'>>  = async params => {
  // undefined
    return this.client.detachPolicy(params as any).promise();
  }

  disableAWSServiceAccess: (params: RawParamsFrom<'disableAWSServiceAccess'>) => Promise<ReturnTypeFrom<'disableAWSServiceAccess'>>  = async params => {
  // undefined
    return this.client.disableAWSServiceAccess(params as any).promise();
  }

  disablePolicyType: (params: RawParamsFrom<'disablePolicyType'>) => Promise<ReturnTypeFrom<'disablePolicyType'>>  = async params => {
  // undefined
    return this.client.disablePolicyType(params as any).promise();
  }

  enableAWSServiceAccess: (params: RawParamsFrom<'enableAWSServiceAccess'>) => Promise<ReturnTypeFrom<'enableAWSServiceAccess'>>  = async params => {
  // undefined
    return this.client.enableAWSServiceAccess(params as any).promise();
  }

  enableAllFeatures: (params: RawParamsFrom<'enableAllFeatures'>) => Promise<ReturnTypeFrom<'enableAllFeatures'>>  = async params => {
  // undefined
    return this.client.enableAllFeatures(params as any).promise();
  }

  enablePolicyType: (params: RawParamsFrom<'enablePolicyType'>) => Promise<ReturnTypeFrom<'enablePolicyType'>>  = async params => {
  // undefined
    return this.client.enablePolicyType(params as any).promise();
  }

  inviteAccountToOrganization: (params: RawParamsFrom<'inviteAccountToOrganization'>) => Promise<ReturnTypeFrom<'inviteAccountToOrganization'>>  = async params => {
  // undefined
    return this.client.inviteAccountToOrganization(params as any).promise();
  }

  leaveOrganization: (params: RawParamsFrom<'leaveOrganization'>) => Promise<ReturnTypeFrom<'leaveOrganization'>>  = async params => {
  // undefined
    return this.client.leaveOrganization(params as any).promise();
  }

  listAWSServiceAccessForOrganization: (params: RawParamsFrom<'listAWSServiceAccessForOrganization'>) => Promise<ReturnTypeFrom<'listAWSServiceAccessForOrganization'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAWSServiceAccessForOrganization(params as any).promise();
  }

  listAccounts: (params: RawParamsFrom<'listAccounts'>) => Promise<ReturnTypeFrom<'listAccounts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccounts(params as any).promise();
  }

  listAccountsForParent: (params: RawParamsFrom<'listAccountsForParent'>) => Promise<ReturnTypeFrom<'listAccountsForParent'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listAccountsForParent(params as any).promise();
  }

  listChildren: (params: RawParamsFrom<'listChildren'>) => Promise<ReturnTypeFrom<'listChildren'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listChildren(params as any).promise();
  }

  listCreateAccountStatus: (params: RawParamsFrom<'listCreateAccountStatus'>) => Promise<ReturnTypeFrom<'listCreateAccountStatus'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listCreateAccountStatus(params as any).promise();
  }

  async listDelegatedAdministrators(params: { [K in keyof ParamsFrom<'listDelegatedAdministrators', { next?: string, limit?: number }>]: ParamsFrom<'listDelegatedAdministrators', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDelegatedAdministrators'>]-?: ReturnTypeFrom<'listDelegatedAdministrators'>[K]}['DelegatedAdministrators'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DelegatedAdministrators"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDelegatedAdministrators({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.DelegatedAdministrators ?? []) ? (result.DelegatedAdministrators ?? []) : [result.DelegatedAdministrators]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDelegatedServicesForAccount(params: { [K in keyof ParamsFrom<'listDelegatedServicesForAccount', { next?: string, limit?: number }>]: ParamsFrom<'listDelegatedServicesForAccount', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDelegatedServicesForAccount'>]-?: ReturnTypeFrom<'listDelegatedServicesForAccount'>[K]}['DelegatedServices'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DelegatedServices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDelegatedServicesForAccount({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.DelegatedServices ?? []) ? (result.DelegatedServices ?? []) : [result.DelegatedServices]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listHandshakesForAccount: (params: RawParamsFrom<'listHandshakesForAccount'>) => Promise<ReturnTypeFrom<'listHandshakesForAccount'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHandshakesForAccount(params as any).promise();
  }

  listHandshakesForOrganization: (params: RawParamsFrom<'listHandshakesForOrganization'>) => Promise<ReturnTypeFrom<'listHandshakesForOrganization'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listHandshakesForOrganization(params as any).promise();
  }

  listOrganizationalUnitsForParent: (params: RawParamsFrom<'listOrganizationalUnitsForParent'>) => Promise<ReturnTypeFrom<'listOrganizationalUnitsForParent'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listOrganizationalUnitsForParent(params as any).promise();
  }

  listParents: (params: RawParamsFrom<'listParents'>) => Promise<ReturnTypeFrom<'listParents'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listParents(params as any).promise();
  }

  listPolicies: (params: RawParamsFrom<'listPolicies'>) => Promise<ReturnTypeFrom<'listPolicies'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPolicies(params as any).promise();
  }

  listPoliciesForTarget: (params: RawParamsFrom<'listPoliciesForTarget'>) => Promise<ReturnTypeFrom<'listPoliciesForTarget'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listPoliciesForTarget(params as any).promise();
  }

  listRoots: (params: RawParamsFrom<'listRoots'>) => Promise<ReturnTypeFrom<'listRoots'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRoots(params as any).promise();
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string }>]: ParamsFrom<'listTagsForResource', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Tags"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTargetsForPolicy: (params: RawParamsFrom<'listTargetsForPolicy'>) => Promise<ReturnTypeFrom<'listTargetsForPolicy'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTargetsForPolicy(params as any).promise();
  }

  moveAccount: (params: RawParamsFrom<'moveAccount'>) => Promise<ReturnTypeFrom<'moveAccount'>>  = async params => {
  // undefined
    return this.client.moveAccount(params as any).promise();
  }

  registerDelegatedAdministrator: (params: RawParamsFrom<'registerDelegatedAdministrator'>) => Promise<ReturnTypeFrom<'registerDelegatedAdministrator'>>  = async params => {
  // undefined
    return this.client.registerDelegatedAdministrator(params as any).promise();
  }

  removeAccountFromOrganization: (params: RawParamsFrom<'removeAccountFromOrganization'>) => Promise<ReturnTypeFrom<'removeAccountFromOrganization'>>  = async params => {
  // undefined
    return this.client.removeAccountFromOrganization(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateOrganizationalUnit: (params: RawParamsFrom<'updateOrganizationalUnit'>) => Promise<ReturnTypeFrom<'updateOrganizationalUnit'>>  = async params => {
  // undefined
    return this.client.updateOrganizationalUnit(params as any).promise();
  }

  updatePolicy: (params: RawParamsFrom<'updatePolicy'>) => Promise<ReturnTypeFrom<'updatePolicy'>>  = async params => {
  // undefined
    return this.client.updatePolicy(params as any).promise();
  }
  
  static fromClient(client: AWSOrganizations): Organizations {
    return new Organizations(client) as any;
  }
  
  static client(options?: AWSOrganizations.Types.ClientConfiguration): Organizations {
    return new Organizations(new AWSOrganizations(options)) as any;
  }
}  
