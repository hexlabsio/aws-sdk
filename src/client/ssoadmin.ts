import { Request, SSOAdmin as AWSSSOAdmin } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSSOAdmin> = AWSSSOAdmin[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSSOAdmin> = AWSSSOAdmin[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSSOAdmin[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSSOAdmin, Extras> = AWSSSOAdmin[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'sso';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["listInstances"];
    
  attachCustomerManagedPolicyReferenceToPermissionSet: FunctionTypeFrom<'attachCustomerManagedPolicyReferenceToPermissionSet'>;

  attachManagedPolicyToPermissionSet: FunctionTypeFrom<'attachManagedPolicyToPermissionSet'>;

  createAccountAssignment: FunctionTypeFrom<'createAccountAssignment'>;

  createInstanceAccessControlAttributeConfiguration: FunctionTypeFrom<'createInstanceAccessControlAttributeConfiguration'>;

  createPermissionSet: FunctionTypeFrom<'createPermissionSet'>;

  deleteAccountAssignment: FunctionTypeFrom<'deleteAccountAssignment'>;

  deleteInlinePolicyFromPermissionSet: FunctionTypeFrom<'deleteInlinePolicyFromPermissionSet'>;

  deleteInstanceAccessControlAttributeConfiguration: FunctionTypeFrom<'deleteInstanceAccessControlAttributeConfiguration'>;

  deletePermissionSet: FunctionTypeFrom<'deletePermissionSet'>;

  deletePermissionsBoundaryFromPermissionSet: FunctionTypeFrom<'deletePermissionsBoundaryFromPermissionSet'>;

  describeAccountAssignmentCreationStatus: FunctionTypeFrom<'describeAccountAssignmentCreationStatus'>;

  describeAccountAssignmentDeletionStatus: FunctionTypeFrom<'describeAccountAssignmentDeletionStatus'>;

  describeInstanceAccessControlAttributeConfiguration: FunctionTypeFrom<'describeInstanceAccessControlAttributeConfiguration'>;

  describePermissionSet: FunctionTypeFrom<'describePermissionSet'>;

  describePermissionSetProvisioningStatus: FunctionTypeFrom<'describePermissionSetProvisioningStatus'>;

  detachCustomerManagedPolicyReferenceFromPermissionSet: FunctionTypeFrom<'detachCustomerManagedPolicyReferenceFromPermissionSet'>;

  detachManagedPolicyFromPermissionSet: FunctionTypeFrom<'detachManagedPolicyFromPermissionSet'>;

  getInlinePolicyForPermissionSet: FunctionTypeFrom<'getInlinePolicyForPermissionSet'>;

  getPermissionsBoundaryForPermissionSet: FunctionTypeFrom<'getPermissionsBoundaryForPermissionSet'>;

  listAccountAssignmentCreationStatus(params: { [K in keyof Omit<ParamsFrom<'listAccountAssignmentCreationStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAccountAssignmentCreationStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountAssignmentCreationStatus'>]-?: ReturnTypeFrom<'listAccountAssignmentCreationStatus'>[K]}['AccountAssignmentsCreationStatus'] }>
  ;

  listAccountAssignmentDeletionStatus(params: { [K in keyof Omit<ParamsFrom<'listAccountAssignmentDeletionStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAccountAssignmentDeletionStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountAssignmentDeletionStatus'>]-?: ReturnTypeFrom<'listAccountAssignmentDeletionStatus'>[K]}['AccountAssignmentsDeletionStatus'] }>
  ;

  listAccountAssignments(params: { [K in keyof Omit<ParamsFrom<'listAccountAssignments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAccountAssignments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountAssignments'>]-?: ReturnTypeFrom<'listAccountAssignments'>[K]}['AccountAssignments'] }>
  ;

  listAccountsForProvisionedPermissionSet(params: { [K in keyof Omit<ParamsFrom<'listAccountsForProvisionedPermissionSet', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAccountsForProvisionedPermissionSet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountsForProvisionedPermissionSet'>]-?: ReturnTypeFrom<'listAccountsForProvisionedPermissionSet'>[K]}['AccountIds'] }>
  ;

  listCustomerManagedPolicyReferencesInPermissionSet(params: { [K in keyof Omit<ParamsFrom<'listCustomerManagedPolicyReferencesInPermissionSet', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCustomerManagedPolicyReferencesInPermissionSet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomerManagedPolicyReferencesInPermissionSet'>]-?: ReturnTypeFrom<'listCustomerManagedPolicyReferencesInPermissionSet'>[K]}['CustomerManagedPolicyReferences'] }>
  ;

  listInstances(params: { [K in keyof Omit<ParamsFrom<'listInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['Instances'] }>
  listInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['Instances'] }>;

  listManagedPoliciesInPermissionSet(params: { [K in keyof Omit<ParamsFrom<'listManagedPoliciesInPermissionSet', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listManagedPoliciesInPermissionSet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listManagedPoliciesInPermissionSet'>]-?: ReturnTypeFrom<'listManagedPoliciesInPermissionSet'>[K]}['AttachedManagedPolicies'] }>
  ;

  listPermissionSetProvisioningStatus(params: { [K in keyof Omit<ParamsFrom<'listPermissionSetProvisioningStatus', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPermissionSetProvisioningStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPermissionSetProvisioningStatus'>]-?: ReturnTypeFrom<'listPermissionSetProvisioningStatus'>[K]}['PermissionSetsProvisioningStatus'] }>
  ;

  listPermissionSets(params: { [K in keyof Omit<ParamsFrom<'listPermissionSets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPermissionSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPermissionSets'>]-?: ReturnTypeFrom<'listPermissionSets'>[K]}['PermissionSets'] }>
  ;

  listPermissionSetsProvisionedToAccount(params: { [K in keyof Omit<ParamsFrom<'listPermissionSetsProvisionedToAccount', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPermissionSetsProvisionedToAccount', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPermissionSetsProvisionedToAccount'>]-?: ReturnTypeFrom<'listPermissionSetsProvisionedToAccount'>[K]}['PermissionSets'] }>
  ;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string }>, 'NextToken'>]: ParamsFrom<'listTagsForResource', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'] }>
  ;

  provisionPermissionSet: FunctionTypeFrom<'provisionPermissionSet'>;

  putInlinePolicyToPermissionSet: FunctionTypeFrom<'putInlinePolicyToPermissionSet'>;

  putPermissionsBoundaryToPermissionSet: FunctionTypeFrom<'putPermissionsBoundaryToPermissionSet'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateInstanceAccessControlAttributeConfiguration: FunctionTypeFrom<'updateInstanceAccessControlAttributeConfiguration'>;

  updatePermissionSet: FunctionTypeFrom<'updatePermissionSet'>
}
 
export class SSOAdmin implements ClientType {
  private constructor(private readonly client: AWSSSOAdmin) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sso';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["listInstances"] as const;
  
  async attachCustomerManagedPolicyReferenceToPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.attachCustomerManagedPolicyReferenceToPermissionSet(...args).promise()
  }

  async attachManagedPolicyToPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.attachManagedPolicyToPermissionSet(...args).promise()
  }

  async createAccountAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.createAccountAssignment(...args).promise()
  }

  async createInstanceAccessControlAttributeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.createInstanceAccessControlAttributeConfiguration(...args).promise()
  }

  async createPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.createPermissionSet(...args).promise()
  }

  async deleteAccountAssignment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccountAssignment(...args).promise()
  }

  async deleteInlinePolicyFromPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInlinePolicyFromPermissionSet(...args).promise()
  }

  async deleteInstanceAccessControlAttributeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstanceAccessControlAttributeConfiguration(...args).promise()
  }

  async deletePermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.deletePermissionSet(...args).promise()
  }

  async deletePermissionsBoundaryFromPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.deletePermissionsBoundaryFromPermissionSet(...args).promise()
  }

  async describeAccountAssignmentCreationStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountAssignmentCreationStatus(...args).promise()
  }

  async describeAccountAssignmentDeletionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountAssignmentDeletionStatus(...args).promise()
  }

  async describeInstanceAccessControlAttributeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstanceAccessControlAttributeConfiguration(...args).promise()
  }

  async describePermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.describePermissionSet(...args).promise()
  }

  async describePermissionSetProvisioningStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describePermissionSetProvisioningStatus(...args).promise()
  }

  async detachCustomerManagedPolicyReferenceFromPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.detachCustomerManagedPolicyReferenceFromPermissionSet(...args).promise()
  }

  async detachManagedPolicyFromPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.detachManagedPolicyFromPermissionSet(...args).promise()
  }

  async getInlinePolicyForPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.getInlinePolicyForPermissionSet(...args).promise()
  }

  async getPermissionsBoundaryForPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.getPermissionsBoundaryForPermissionSet(...args).promise()
  }

  async listAccountAssignmentCreationStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountAssignmentsCreationStatus"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccountAssignmentCreationStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AccountAssignmentsCreationStatus ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccountAssignmentDeletionStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountAssignmentsDeletionStatus"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccountAssignmentDeletionStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AccountAssignmentsDeletionStatus ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccountAssignments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountAssignments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccountAssignments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AccountAssignments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccountsForProvisionedPermissionSet(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccountsForProvisionedPermissionSet(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AccountIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomerManagedPolicyReferencesInPermissionSet(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CustomerManagedPolicyReferences"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomerManagedPolicyReferencesInPermissionSet(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CustomerManagedPolicyReferences ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Instances"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Instances ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listManagedPoliciesInPermissionSet(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AttachedManagedPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listManagedPoliciesInPermissionSet(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AttachedManagedPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionSetProvisioningStatus(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PermissionSetsProvisioningStatus"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPermissionSetProvisioningStatus(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PermissionSetsProvisioningStatus ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PermissionSets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPermissionSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PermissionSets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionSetsProvisionedToAccount(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PermissionSets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPermissionSetsProvisionedToAccount(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PermissionSets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
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

  async provisionPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.provisionPermissionSet(...args).promise()
  }

  async putInlinePolicyToPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.putInlinePolicyToPermissionSet(...args).promise()
  }

  async putPermissionsBoundaryToPermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.putPermissionsBoundaryToPermissionSet(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateInstanceAccessControlAttributeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.updateInstanceAccessControlAttributeConfiguration(...args).promise()
  }

  async updatePermissionSet(...args: any): Promise<any> {
  // undefined
    return this.client.updatePermissionSet(...args).promise()
  }
  
  static fromClient(client: AWSSSOAdmin): ClientType {
    return new SSOAdmin(client) as any;
  }
  
  static client(options?: AWSSSOAdmin.Types.ClientConfiguration): ClientType {
    return new SSOAdmin(new AWSSSOAdmin(options)) as any;
  }
}  
