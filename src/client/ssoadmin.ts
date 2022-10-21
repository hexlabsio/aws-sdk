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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSSOAdmin> = AWSSSOAdmin[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SSOAdmin {
  private constructor(private readonly client: AWSSSOAdmin) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sso' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["listInstances"] as const;
  
  attachCustomerManagedPolicyReferenceToPermissionSet: (params: RawParamsFrom<'attachCustomerManagedPolicyReferenceToPermissionSet'>) => Promise<ReturnTypeFrom<'attachCustomerManagedPolicyReferenceToPermissionSet'>>  = async params => {
  // undefined
    return this.client.attachCustomerManagedPolicyReferenceToPermissionSet(params as any).promise();
  }

  attachManagedPolicyToPermissionSet: (params: RawParamsFrom<'attachManagedPolicyToPermissionSet'>) => Promise<ReturnTypeFrom<'attachManagedPolicyToPermissionSet'>>  = async params => {
  // undefined
    return this.client.attachManagedPolicyToPermissionSet(params as any).promise();
  }

  createAccountAssignment: (params: RawParamsFrom<'createAccountAssignment'>) => Promise<ReturnTypeFrom<'createAccountAssignment'>>  = async params => {
  // undefined
    return this.client.createAccountAssignment(params as any).promise();
  }

  createInstanceAccessControlAttributeConfiguration: (params: RawParamsFrom<'createInstanceAccessControlAttributeConfiguration'>) => Promise<ReturnTypeFrom<'createInstanceAccessControlAttributeConfiguration'>>  = async params => {
  // undefined
    return this.client.createInstanceAccessControlAttributeConfiguration(params as any).promise();
  }

  createPermissionSet: (params: RawParamsFrom<'createPermissionSet'>) => Promise<ReturnTypeFrom<'createPermissionSet'>>  = async params => {
  // undefined
    return this.client.createPermissionSet(params as any).promise();
  }

  deleteAccountAssignment: (params: RawParamsFrom<'deleteAccountAssignment'>) => Promise<ReturnTypeFrom<'deleteAccountAssignment'>>  = async params => {
  // undefined
    return this.client.deleteAccountAssignment(params as any).promise();
  }

  deleteInlinePolicyFromPermissionSet: (params: RawParamsFrom<'deleteInlinePolicyFromPermissionSet'>) => Promise<ReturnTypeFrom<'deleteInlinePolicyFromPermissionSet'>>  = async params => {
  // undefined
    return this.client.deleteInlinePolicyFromPermissionSet(params as any).promise();
  }

  deleteInstanceAccessControlAttributeConfiguration: (params: RawParamsFrom<'deleteInstanceAccessControlAttributeConfiguration'>) => Promise<ReturnTypeFrom<'deleteInstanceAccessControlAttributeConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteInstanceAccessControlAttributeConfiguration(params as any).promise();
  }

  deletePermissionSet: (params: RawParamsFrom<'deletePermissionSet'>) => Promise<ReturnTypeFrom<'deletePermissionSet'>>  = async params => {
  // undefined
    return this.client.deletePermissionSet(params as any).promise();
  }

  deletePermissionsBoundaryFromPermissionSet: (params: RawParamsFrom<'deletePermissionsBoundaryFromPermissionSet'>) => Promise<ReturnTypeFrom<'deletePermissionsBoundaryFromPermissionSet'>>  = async params => {
  // undefined
    return this.client.deletePermissionsBoundaryFromPermissionSet(params as any).promise();
  }

  describeAccountAssignmentCreationStatus: (params: RawParamsFrom<'describeAccountAssignmentCreationStatus'>) => Promise<ReturnTypeFrom<'describeAccountAssignmentCreationStatus'>>  = async params => {
  // undefined
    return this.client.describeAccountAssignmentCreationStatus(params as any).promise();
  }

  describeAccountAssignmentDeletionStatus: (params: RawParamsFrom<'describeAccountAssignmentDeletionStatus'>) => Promise<ReturnTypeFrom<'describeAccountAssignmentDeletionStatus'>>  = async params => {
  // undefined
    return this.client.describeAccountAssignmentDeletionStatus(params as any).promise();
  }

  describeInstanceAccessControlAttributeConfiguration: (params: RawParamsFrom<'describeInstanceAccessControlAttributeConfiguration'>) => Promise<ReturnTypeFrom<'describeInstanceAccessControlAttributeConfiguration'>>  = async params => {
  // undefined
    return this.client.describeInstanceAccessControlAttributeConfiguration(params as any).promise();
  }

  describePermissionSet: (params: RawParamsFrom<'describePermissionSet'>) => Promise<ReturnTypeFrom<'describePermissionSet'>>  = async params => {
  // undefined
    return this.client.describePermissionSet(params as any).promise();
  }

  describePermissionSetProvisioningStatus: (params: RawParamsFrom<'describePermissionSetProvisioningStatus'>) => Promise<ReturnTypeFrom<'describePermissionSetProvisioningStatus'>>  = async params => {
  // undefined
    return this.client.describePermissionSetProvisioningStatus(params as any).promise();
  }

  detachCustomerManagedPolicyReferenceFromPermissionSet: (params: RawParamsFrom<'detachCustomerManagedPolicyReferenceFromPermissionSet'>) => Promise<ReturnTypeFrom<'detachCustomerManagedPolicyReferenceFromPermissionSet'>>  = async params => {
  // undefined
    return this.client.detachCustomerManagedPolicyReferenceFromPermissionSet(params as any).promise();
  }

  detachManagedPolicyFromPermissionSet: (params: RawParamsFrom<'detachManagedPolicyFromPermissionSet'>) => Promise<ReturnTypeFrom<'detachManagedPolicyFromPermissionSet'>>  = async params => {
  // undefined
    return this.client.detachManagedPolicyFromPermissionSet(params as any).promise();
  }

  getInlinePolicyForPermissionSet: (params: RawParamsFrom<'getInlinePolicyForPermissionSet'>) => Promise<ReturnTypeFrom<'getInlinePolicyForPermissionSet'>>  = async params => {
  // undefined
    return this.client.getInlinePolicyForPermissionSet(params as any).promise();
  }

  getPermissionsBoundaryForPermissionSet: (params: RawParamsFrom<'getPermissionsBoundaryForPermissionSet'>) => Promise<ReturnTypeFrom<'getPermissionsBoundaryForPermissionSet'>>  = async params => {
  // undefined
    return this.client.getPermissionsBoundaryForPermissionSet(params as any).promise();
  }

  async listAccountAssignmentCreationStatus(params: { [K in keyof ParamsFrom<'listAccountAssignmentCreationStatus', { next?: string, limit?: number }>]: ParamsFrom<'listAccountAssignmentCreationStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountAssignmentCreationStatus'>]-?: ReturnTypeFrom<'listAccountAssignmentCreationStatus'>[K]}['AccountAssignmentsCreationStatus'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountAssignmentsCreationStatus"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccountAssignmentCreationStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAccountAssignmentCreationStatus' })).toString('base64');
    const member = (Array.isArray(result.AccountAssignmentsCreationStatus ?? []) ? (result.AccountAssignmentsCreationStatus ?? []) : [result.AccountAssignmentsCreationStatus]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccountAssignmentDeletionStatus(params: { [K in keyof ParamsFrom<'listAccountAssignmentDeletionStatus', { next?: string, limit?: number }>]: ParamsFrom<'listAccountAssignmentDeletionStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountAssignmentDeletionStatus'>]-?: ReturnTypeFrom<'listAccountAssignmentDeletionStatus'>[K]}['AccountAssignmentsDeletionStatus'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountAssignmentsDeletionStatus"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccountAssignmentDeletionStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAccountAssignmentDeletionStatus' })).toString('base64');
    const member = (Array.isArray(result.AccountAssignmentsDeletionStatus ?? []) ? (result.AccountAssignmentsDeletionStatus ?? []) : [result.AccountAssignmentsDeletionStatus]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccountAssignments(params: { [K in keyof ParamsFrom<'listAccountAssignments', { next?: string, limit?: number }>]: ParamsFrom<'listAccountAssignments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountAssignments'>]-?: ReturnTypeFrom<'listAccountAssignments'>[K]}['AccountAssignments'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountAssignments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccountAssignments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAccountAssignments' })).toString('base64');
    const member = (Array.isArray(result.AccountAssignments ?? []) ? (result.AccountAssignments ?? []) : [result.AccountAssignments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccountsForProvisionedPermissionSet(params: { [K in keyof ParamsFrom<'listAccountsForProvisionedPermissionSet', { next?: string, limit?: number }>]: ParamsFrom<'listAccountsForProvisionedPermissionSet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountsForProvisionedPermissionSet'>]-?: ReturnTypeFrom<'listAccountsForProvisionedPermissionSet'>[K]}['AccountIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AccountIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAccountsForProvisionedPermissionSet({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAccountsForProvisionedPermissionSet' })).toString('base64');
    const member = (Array.isArray(result.AccountIds ?? []) ? (result.AccountIds ?? []) : [result.AccountIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomerManagedPolicyReferencesInPermissionSet(params: { [K in keyof ParamsFrom<'listCustomerManagedPolicyReferencesInPermissionSet', { next?: string, limit?: number }>]: ParamsFrom<'listCustomerManagedPolicyReferencesInPermissionSet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomerManagedPolicyReferencesInPermissionSet'>]-?: ReturnTypeFrom<'listCustomerManagedPolicyReferencesInPermissionSet'>[K]}['CustomerManagedPolicyReferences'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CustomerManagedPolicyReferences"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomerManagedPolicyReferencesInPermissionSet({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCustomerManagedPolicyReferencesInPermissionSet' })).toString('base64');
    const member = (Array.isArray(result.CustomerManagedPolicyReferences ?? []) ? (result.CustomerManagedPolicyReferences ?? []) : [result.CustomerManagedPolicyReferences]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstances(params: { [K in keyof ParamsFrom<'listInstances', { next?: string, limit?: number }>]: ParamsFrom<'listInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['Instances'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Instances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInstances' })).toString('base64');
    const member = (Array.isArray(result.Instances ?? []) ? (result.Instances ?? []) : [result.Instances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listManagedPoliciesInPermissionSet(params: { [K in keyof ParamsFrom<'listManagedPoliciesInPermissionSet', { next?: string, limit?: number }>]: ParamsFrom<'listManagedPoliciesInPermissionSet', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listManagedPoliciesInPermissionSet'>]-?: ReturnTypeFrom<'listManagedPoliciesInPermissionSet'>[K]}['AttachedManagedPolicies'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AttachedManagedPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listManagedPoliciesInPermissionSet({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listManagedPoliciesInPermissionSet' })).toString('base64');
    const member = (Array.isArray(result.AttachedManagedPolicies ?? []) ? (result.AttachedManagedPolicies ?? []) : [result.AttachedManagedPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionSetProvisioningStatus(params: { [K in keyof ParamsFrom<'listPermissionSetProvisioningStatus', { next?: string, limit?: number }>]: ParamsFrom<'listPermissionSetProvisioningStatus', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPermissionSetProvisioningStatus'>]-?: ReturnTypeFrom<'listPermissionSetProvisioningStatus'>[K]}['PermissionSetsProvisioningStatus'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PermissionSetsProvisioningStatus"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPermissionSetProvisioningStatus({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPermissionSetProvisioningStatus' })).toString('base64');
    const member = (Array.isArray(result.PermissionSetsProvisioningStatus ?? []) ? (result.PermissionSetsProvisioningStatus ?? []) : [result.PermissionSetsProvisioningStatus]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionSets(params: { [K in keyof ParamsFrom<'listPermissionSets', { next?: string, limit?: number }>]: ParamsFrom<'listPermissionSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPermissionSets'>]-?: ReturnTypeFrom<'listPermissionSets'>[K]}['PermissionSets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PermissionSets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPermissionSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPermissionSets' })).toString('base64');
    const member = (Array.isArray(result.PermissionSets ?? []) ? (result.PermissionSets ?? []) : [result.PermissionSets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPermissionSetsProvisionedToAccount(params: { [K in keyof ParamsFrom<'listPermissionSetsProvisionedToAccount', { next?: string, limit?: number }>]: ParamsFrom<'listPermissionSetsProvisionedToAccount', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPermissionSetsProvisionedToAccount'>]-?: ReturnTypeFrom<'listPermissionSetsProvisionedToAccount'>[K]}['PermissionSets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PermissionSets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPermissionSetsProvisionedToAccount({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPermissionSetsProvisionedToAccount' })).toString('base64');
    const member = (Array.isArray(result.PermissionSets ?? []) ? (result.PermissionSets ?? []) : [result.PermissionSets]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string }>]: ParamsFrom<'listTagsForResource', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Tags"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTagsForResource' })).toString('base64');
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  provisionPermissionSet: (params: RawParamsFrom<'provisionPermissionSet'>) => Promise<ReturnTypeFrom<'provisionPermissionSet'>>  = async params => {
  // undefined
    return this.client.provisionPermissionSet(params as any).promise();
  }

  putInlinePolicyToPermissionSet: (params: RawParamsFrom<'putInlinePolicyToPermissionSet'>) => Promise<ReturnTypeFrom<'putInlinePolicyToPermissionSet'>>  = async params => {
  // undefined
    return this.client.putInlinePolicyToPermissionSet(params as any).promise();
  }

  putPermissionsBoundaryToPermissionSet: (params: RawParamsFrom<'putPermissionsBoundaryToPermissionSet'>) => Promise<ReturnTypeFrom<'putPermissionsBoundaryToPermissionSet'>>  = async params => {
  // undefined
    return this.client.putPermissionsBoundaryToPermissionSet(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateInstanceAccessControlAttributeConfiguration: (params: RawParamsFrom<'updateInstanceAccessControlAttributeConfiguration'>) => Promise<ReturnTypeFrom<'updateInstanceAccessControlAttributeConfiguration'>>  = async params => {
  // undefined
    return this.client.updateInstanceAccessControlAttributeConfiguration(params as any).promise();
  }

  updatePermissionSet: (params: RawParamsFrom<'updatePermissionSet'>) => Promise<ReturnTypeFrom<'updatePermissionSet'>>  = async params => {
  // undefined
    return this.client.updatePermissionSet(params as any).promise();
  }
  
  static fromClient(client: AWSSSOAdmin): SSOAdmin {
    return new SSOAdmin(client) as any;
  }
  
  static client(options?: AWSSSOAdmin.Types.ClientConfiguration): SSOAdmin {
    return new SSOAdmin(new AWSSSOAdmin(options)) as any;
  }
}  
