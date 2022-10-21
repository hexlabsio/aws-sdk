import { Request, IAM as AWSIAM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIAM> = AWSIAM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIAM> = AWSIAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIAM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIAM, Extras> = AWSIAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIAM> = AWSIAM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IAM {
  private constructor(private readonly client: AWSIAM) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'iam' as const;
  public readonly global = true as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["getAccountAuthorizationDetails","listAccessKeys","listAccountAliases","listGroups","listInstanceProfiles","listMFADevices","listPolicies","listRoles","listSAMLProviders","listSSHPublicKeys","listServerCertificates","listSigningCertificates","listUsers","listVirtualMFADevices"] as const;
  
  addClientIDToOpenIDConnectProvider: (params: RawParamsFrom<'addClientIDToOpenIDConnectProvider'>) => Promise<ReturnTypeFrom<'addClientIDToOpenIDConnectProvider'>>  = async params => {
  // undefined
    return this.client.addClientIDToOpenIDConnectProvider(params as any).promise();
  }

  addRoleToInstanceProfile: (params: RawParamsFrom<'addRoleToInstanceProfile'>) => Promise<ReturnTypeFrom<'addRoleToInstanceProfile'>>  = async params => {
  // undefined
    return this.client.addRoleToInstanceProfile(params as any).promise();
  }

  addUserToGroup: (params: RawParamsFrom<'addUserToGroup'>) => Promise<ReturnTypeFrom<'addUserToGroup'>>  = async params => {
  // undefined
    return this.client.addUserToGroup(params as any).promise();
  }

  attachGroupPolicy: (params: RawParamsFrom<'attachGroupPolicy'>) => Promise<ReturnTypeFrom<'attachGroupPolicy'>>  = async params => {
  // undefined
    return this.client.attachGroupPolicy(params as any).promise();
  }

  attachRolePolicy: (params: RawParamsFrom<'attachRolePolicy'>) => Promise<ReturnTypeFrom<'attachRolePolicy'>>  = async params => {
  // undefined
    return this.client.attachRolePolicy(params as any).promise();
  }

  attachUserPolicy: (params: RawParamsFrom<'attachUserPolicy'>) => Promise<ReturnTypeFrom<'attachUserPolicy'>>  = async params => {
  // undefined
    return this.client.attachUserPolicy(params as any).promise();
  }

  changePassword: (params: RawParamsFrom<'changePassword'>) => Promise<ReturnTypeFrom<'changePassword'>>  = async params => {
  // undefined
    return this.client.changePassword(params as any).promise();
  }

  createAccessKey: (params: RawParamsFrom<'createAccessKey'>) => Promise<ReturnTypeFrom<'createAccessKey'>>  = async params => {
  // undefined
    return this.client.createAccessKey(params as any).promise();
  }

  createAccountAlias: (params: RawParamsFrom<'createAccountAlias'>) => Promise<ReturnTypeFrom<'createAccountAlias'>>  = async params => {
  // undefined
    return this.client.createAccountAlias(params as any).promise();
  }

  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  createInstanceProfile: (params: RawParamsFrom<'createInstanceProfile'>) => Promise<ReturnTypeFrom<'createInstanceProfile'>>  = async params => {
  // undefined
    return this.client.createInstanceProfile(params as any).promise();
  }

  createLoginProfile: (params: RawParamsFrom<'createLoginProfile'>) => Promise<ReturnTypeFrom<'createLoginProfile'>>  = async params => {
  // undefined
    return this.client.createLoginProfile(params as any).promise();
  }

  createOpenIDConnectProvider: (params: RawParamsFrom<'createOpenIDConnectProvider'>) => Promise<ReturnTypeFrom<'createOpenIDConnectProvider'>>  = async params => {
  // undefined
    return this.client.createOpenIDConnectProvider(params as any).promise();
  }

  createPolicy: (params: RawParamsFrom<'createPolicy'>) => Promise<ReturnTypeFrom<'createPolicy'>>  = async params => {
  // undefined
    return this.client.createPolicy(params as any).promise();
  }

  createPolicyVersion: (params: RawParamsFrom<'createPolicyVersion'>) => Promise<ReturnTypeFrom<'createPolicyVersion'>>  = async params => {
  // undefined
    return this.client.createPolicyVersion(params as any).promise();
  }

  createRole: (params: RawParamsFrom<'createRole'>) => Promise<ReturnTypeFrom<'createRole'>>  = async params => {
  // undefined
    return this.client.createRole(params as any).promise();
  }

  createSAMLProvider: (params: RawParamsFrom<'createSAMLProvider'>) => Promise<ReturnTypeFrom<'createSAMLProvider'>>  = async params => {
  // undefined
    return this.client.createSAMLProvider(params as any).promise();
  }

  createServiceLinkedRole: (params: RawParamsFrom<'createServiceLinkedRole'>) => Promise<ReturnTypeFrom<'createServiceLinkedRole'>>  = async params => {
  // undefined
    return this.client.createServiceLinkedRole(params as any).promise();
  }

  createServiceSpecificCredential: (params: RawParamsFrom<'createServiceSpecificCredential'>) => Promise<ReturnTypeFrom<'createServiceSpecificCredential'>>  = async params => {
  // undefined
    return this.client.createServiceSpecificCredential(params as any).promise();
  }

  createUser: (params: RawParamsFrom<'createUser'>) => Promise<ReturnTypeFrom<'createUser'>>  = async params => {
  // undefined
    return this.client.createUser(params as any).promise();
  }

  createVirtualMFADevice: (params: RawParamsFrom<'createVirtualMFADevice'>) => Promise<ReturnTypeFrom<'createVirtualMFADevice'>>  = async params => {
  // undefined
    return this.client.createVirtualMFADevice(params as any).promise();
  }

  deactivateMFADevice: (params: RawParamsFrom<'deactivateMFADevice'>) => Promise<ReturnTypeFrom<'deactivateMFADevice'>>  = async params => {
  // undefined
    return this.client.deactivateMFADevice(params as any).promise();
  }

  deleteAccessKey: (params: RawParamsFrom<'deleteAccessKey'>) => Promise<ReturnTypeFrom<'deleteAccessKey'>>  = async params => {
  // undefined
    return this.client.deleteAccessKey(params as any).promise();
  }

  deleteAccountAlias: (params: RawParamsFrom<'deleteAccountAlias'>) => Promise<ReturnTypeFrom<'deleteAccountAlias'>>  = async params => {
  // undefined
    return this.client.deleteAccountAlias(params as any).promise();
  }

  deleteAccountPasswordPolicy: (params: RawParamsFrom<'deleteAccountPasswordPolicy'>) => Promise<ReturnTypeFrom<'deleteAccountPasswordPolicy'>>  = async params => {
  // undefined
    return this.client.deleteAccountPasswordPolicy(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  deleteGroupPolicy: (params: RawParamsFrom<'deleteGroupPolicy'>) => Promise<ReturnTypeFrom<'deleteGroupPolicy'>>  = async params => {
  // undefined
    return this.client.deleteGroupPolicy(params as any).promise();
  }

  deleteInstanceProfile: (params: RawParamsFrom<'deleteInstanceProfile'>) => Promise<ReturnTypeFrom<'deleteInstanceProfile'>>  = async params => {
  // undefined
    return this.client.deleteInstanceProfile(params as any).promise();
  }

  deleteLoginProfile: (params: RawParamsFrom<'deleteLoginProfile'>) => Promise<ReturnTypeFrom<'deleteLoginProfile'>>  = async params => {
  // undefined
    return this.client.deleteLoginProfile(params as any).promise();
  }

  deleteOpenIDConnectProvider: (params: RawParamsFrom<'deleteOpenIDConnectProvider'>) => Promise<ReturnTypeFrom<'deleteOpenIDConnectProvider'>>  = async params => {
  // undefined
    return this.client.deleteOpenIDConnectProvider(params as any).promise();
  }

  deletePolicy: (params: RawParamsFrom<'deletePolicy'>) => Promise<ReturnTypeFrom<'deletePolicy'>>  = async params => {
  // undefined
    return this.client.deletePolicy(params as any).promise();
  }

  deletePolicyVersion: (params: RawParamsFrom<'deletePolicyVersion'>) => Promise<ReturnTypeFrom<'deletePolicyVersion'>>  = async params => {
  // undefined
    return this.client.deletePolicyVersion(params as any).promise();
  }

  deleteRole: (params: RawParamsFrom<'deleteRole'>) => Promise<ReturnTypeFrom<'deleteRole'>>  = async params => {
  // undefined
    return this.client.deleteRole(params as any).promise();
  }

  deleteRolePermissionsBoundary: (params: RawParamsFrom<'deleteRolePermissionsBoundary'>) => Promise<ReturnTypeFrom<'deleteRolePermissionsBoundary'>>  = async params => {
  // undefined
    return this.client.deleteRolePermissionsBoundary(params as any).promise();
  }

  deleteRolePolicy: (params: RawParamsFrom<'deleteRolePolicy'>) => Promise<ReturnTypeFrom<'deleteRolePolicy'>>  = async params => {
  // undefined
    return this.client.deleteRolePolicy(params as any).promise();
  }

  deleteSAMLProvider: (params: RawParamsFrom<'deleteSAMLProvider'>) => Promise<ReturnTypeFrom<'deleteSAMLProvider'>>  = async params => {
  // undefined
    return this.client.deleteSAMLProvider(params as any).promise();
  }

  deleteSSHPublicKey: (params: RawParamsFrom<'deleteSSHPublicKey'>) => Promise<ReturnTypeFrom<'deleteSSHPublicKey'>>  = async params => {
  // undefined
    return this.client.deleteSSHPublicKey(params as any).promise();
  }

  deleteServerCertificate: (params: RawParamsFrom<'deleteServerCertificate'>) => Promise<ReturnTypeFrom<'deleteServerCertificate'>>  = async params => {
  // undefined
    return this.client.deleteServerCertificate(params as any).promise();
  }

  deleteServiceLinkedRole: (params: RawParamsFrom<'deleteServiceLinkedRole'>) => Promise<ReturnTypeFrom<'deleteServiceLinkedRole'>>  = async params => {
  // undefined
    return this.client.deleteServiceLinkedRole(params as any).promise();
  }

  deleteServiceSpecificCredential: (params: RawParamsFrom<'deleteServiceSpecificCredential'>) => Promise<ReturnTypeFrom<'deleteServiceSpecificCredential'>>  = async params => {
  // undefined
    return this.client.deleteServiceSpecificCredential(params as any).promise();
  }

  deleteSigningCertificate: (params: RawParamsFrom<'deleteSigningCertificate'>) => Promise<ReturnTypeFrom<'deleteSigningCertificate'>>  = async params => {
  // undefined
    return this.client.deleteSigningCertificate(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  deleteUserPermissionsBoundary: (params: RawParamsFrom<'deleteUserPermissionsBoundary'>) => Promise<ReturnTypeFrom<'deleteUserPermissionsBoundary'>>  = async params => {
  // undefined
    return this.client.deleteUserPermissionsBoundary(params as any).promise();
  }

  deleteUserPolicy: (params: RawParamsFrom<'deleteUserPolicy'>) => Promise<ReturnTypeFrom<'deleteUserPolicy'>>  = async params => {
  // undefined
    return this.client.deleteUserPolicy(params as any).promise();
  }

  deleteVirtualMFADevice: (params: RawParamsFrom<'deleteVirtualMFADevice'>) => Promise<ReturnTypeFrom<'deleteVirtualMFADevice'>>  = async params => {
  // undefined
    return this.client.deleteVirtualMFADevice(params as any).promise();
  }

  detachGroupPolicy: (params: RawParamsFrom<'detachGroupPolicy'>) => Promise<ReturnTypeFrom<'detachGroupPolicy'>>  = async params => {
  // undefined
    return this.client.detachGroupPolicy(params as any).promise();
  }

  detachRolePolicy: (params: RawParamsFrom<'detachRolePolicy'>) => Promise<ReturnTypeFrom<'detachRolePolicy'>>  = async params => {
  // undefined
    return this.client.detachRolePolicy(params as any).promise();
  }

  detachUserPolicy: (params: RawParamsFrom<'detachUserPolicy'>) => Promise<ReturnTypeFrom<'detachUserPolicy'>>  = async params => {
  // undefined
    return this.client.detachUserPolicy(params as any).promise();
  }

  enableMFADevice: (params: RawParamsFrom<'enableMFADevice'>) => Promise<ReturnTypeFrom<'enableMFADevice'>>  = async params => {
  // undefined
    return this.client.enableMFADevice(params as any).promise();
  }

  generateCredentialReport: (params: RawParamsFrom<'generateCredentialReport'>) => Promise<ReturnTypeFrom<'generateCredentialReport'>>  = async params => {
  // undefined
    return this.client.generateCredentialReport(params as any).promise();
  }

  generateOrganizationsAccessReport: (params: RawParamsFrom<'generateOrganizationsAccessReport'>) => Promise<ReturnTypeFrom<'generateOrganizationsAccessReport'>>  = async params => {
  // undefined
    return this.client.generateOrganizationsAccessReport(params as any).promise();
  }

  generateServiceLastAccessedDetails: (params: RawParamsFrom<'generateServiceLastAccessedDetails'>) => Promise<ReturnTypeFrom<'generateServiceLastAccessedDetails'>>  = async params => {
  // undefined
    return this.client.generateServiceLastAccessedDetails(params as any).promise();
  }

  getAccessKeyLastUsed: (params: RawParamsFrom<'getAccessKeyLastUsed'>) => Promise<ReturnTypeFrom<'getAccessKeyLastUsed'>>  = async params => {
  // undefined
    return this.client.getAccessKeyLastUsed(params as any).promise();
  }

  getAccountAuthorizationDetails: (params: RawParamsFrom<'getAccountAuthorizationDetails'>) => Promise<ReturnTypeFrom<'getAccountAuthorizationDetails'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":["UserDetailList","GroupDetailList","RoleDetailList","Policies"]}
    return this.client.getAccountAuthorizationDetails(params as any).promise();
  }

  getAccountPasswordPolicy: (params: RawParamsFrom<'getAccountPasswordPolicy'>) => Promise<ReturnTypeFrom<'getAccountPasswordPolicy'>>  = async params => {
  // undefined
    return this.client.getAccountPasswordPolicy(params as any).promise();
  }

  getAccountSummary: (params: RawParamsFrom<'getAccountSummary'>) => Promise<ReturnTypeFrom<'getAccountSummary'>>  = async params => {
  // undefined
    return this.client.getAccountSummary(params as any).promise();
  }

  getContextKeysForCustomPolicy: (params: RawParamsFrom<'getContextKeysForCustomPolicy'>) => Promise<ReturnTypeFrom<'getContextKeysForCustomPolicy'>>  = async params => {
  // undefined
    return this.client.getContextKeysForCustomPolicy(params as any).promise();
  }

  getContextKeysForPrincipalPolicy: (params: RawParamsFrom<'getContextKeysForPrincipalPolicy'>) => Promise<ReturnTypeFrom<'getContextKeysForPrincipalPolicy'>>  = async params => {
  // undefined
    return this.client.getContextKeysForPrincipalPolicy(params as any).promise();
  }

  getCredentialReport: (params: RawParamsFrom<'getCredentialReport'>) => Promise<ReturnTypeFrom<'getCredentialReport'>>  = async params => {
  // undefined
    return this.client.getCredentialReport(params as any).promise();
  }

  async getGroup(params: { [K in keyof ParamsFrom<'getGroup', { next?: string, limit?: number }>]: ParamsFrom<'getGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getGroup'>]-?: ReturnTypeFrom<'getGroup'>[K]}['Users'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.getGroup({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'getGroup' })).toString('base64');
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getGroupPolicy: (params: RawParamsFrom<'getGroupPolicy'>) => Promise<ReturnTypeFrom<'getGroupPolicy'>>  = async params => {
  // undefined
    return this.client.getGroupPolicy(params as any).promise();
  }

  getInstanceProfile: (params: RawParamsFrom<'getInstanceProfile'>) => Promise<ReturnTypeFrom<'getInstanceProfile'>>  = async params => {
  // undefined
    return this.client.getInstanceProfile(params as any).promise();
  }

  getLoginProfile: (params: RawParamsFrom<'getLoginProfile'>) => Promise<ReturnTypeFrom<'getLoginProfile'>>  = async params => {
  // undefined
    return this.client.getLoginProfile(params as any).promise();
  }

  getOpenIDConnectProvider: (params: RawParamsFrom<'getOpenIDConnectProvider'>) => Promise<ReturnTypeFrom<'getOpenIDConnectProvider'>>  = async params => {
  // undefined
    return this.client.getOpenIDConnectProvider(params as any).promise();
  }

  getOrganizationsAccessReport: (params: RawParamsFrom<'getOrganizationsAccessReport'>) => Promise<ReturnTypeFrom<'getOrganizationsAccessReport'>>  = async params => {
  // undefined
    return this.client.getOrganizationsAccessReport(params as any).promise();
  }

  getPolicy: (params: RawParamsFrom<'getPolicy'>) => Promise<ReturnTypeFrom<'getPolicy'>>  = async params => {
  // undefined
    return this.client.getPolicy(params as any).promise();
  }

  getPolicyVersion: (params: RawParamsFrom<'getPolicyVersion'>) => Promise<ReturnTypeFrom<'getPolicyVersion'>>  = async params => {
  // undefined
    return this.client.getPolicyVersion(params as any).promise();
  }

  getRole: (params: RawParamsFrom<'getRole'>) => Promise<ReturnTypeFrom<'getRole'>>  = async params => {
  // undefined
    return this.client.getRole(params as any).promise();
  }

  getRolePolicy: (params: RawParamsFrom<'getRolePolicy'>) => Promise<ReturnTypeFrom<'getRolePolicy'>>  = async params => {
  // undefined
    return this.client.getRolePolicy(params as any).promise();
  }

  getSAMLProvider: (params: RawParamsFrom<'getSAMLProvider'>) => Promise<ReturnTypeFrom<'getSAMLProvider'>>  = async params => {
  // undefined
    return this.client.getSAMLProvider(params as any).promise();
  }

  getSSHPublicKey: (params: RawParamsFrom<'getSSHPublicKey'>) => Promise<ReturnTypeFrom<'getSSHPublicKey'>>  = async params => {
  // undefined
    return this.client.getSSHPublicKey(params as any).promise();
  }

  getServerCertificate: (params: RawParamsFrom<'getServerCertificate'>) => Promise<ReturnTypeFrom<'getServerCertificate'>>  = async params => {
  // undefined
    return this.client.getServerCertificate(params as any).promise();
  }

  getServiceLastAccessedDetails: (params: RawParamsFrom<'getServiceLastAccessedDetails'>) => Promise<ReturnTypeFrom<'getServiceLastAccessedDetails'>>  = async params => {
  // undefined
    return this.client.getServiceLastAccessedDetails(params as any).promise();
  }

  getServiceLastAccessedDetailsWithEntities: (params: RawParamsFrom<'getServiceLastAccessedDetailsWithEntities'>) => Promise<ReturnTypeFrom<'getServiceLastAccessedDetailsWithEntities'>>  = async params => {
  // undefined
    return this.client.getServiceLastAccessedDetailsWithEntities(params as any).promise();
  }

  getServiceLinkedRoleDeletionStatus: (params: RawParamsFrom<'getServiceLinkedRoleDeletionStatus'>) => Promise<ReturnTypeFrom<'getServiceLinkedRoleDeletionStatus'>>  = async params => {
  // undefined
    return this.client.getServiceLinkedRoleDeletionStatus(params as any).promise();
  }

  getUser: (params: RawParamsFrom<'getUser'>) => Promise<ReturnTypeFrom<'getUser'>>  = async params => {
  // undefined
    return this.client.getUser(params as any).promise();
  }

  getUserPolicy: (params: RawParamsFrom<'getUserPolicy'>) => Promise<ReturnTypeFrom<'getUserPolicy'>>  = async params => {
  // undefined
    return this.client.getUserPolicy(params as any).promise();
  }

  async listAccessKeys(params: { [K in keyof ParamsFrom<'listAccessKeys', { next?: string, limit?: number }>]: ParamsFrom<'listAccessKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccessKeys'>]-?: ReturnTypeFrom<'listAccessKeys'>[K]}['AccessKeyMetadata'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AccessKeyMetadata"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAccessKeys({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listAccessKeys' })).toString('base64');
    const member = (Array.isArray(result.AccessKeyMetadata ?? []) ? (result.AccessKeyMetadata ?? []) : [result.AccessKeyMetadata]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccountAliases(params: { [K in keyof ParamsFrom<'listAccountAliases', { next?: string, limit?: number }>]: ParamsFrom<'listAccountAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountAliases'>]-?: ReturnTypeFrom<'listAccountAliases'>[K]}['AccountAliases'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AccountAliases"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAccountAliases({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listAccountAliases' })).toString('base64');
    const member = (Array.isArray(result.AccountAliases ?? []) ? (result.AccountAliases ?? []) : [result.AccountAliases]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttachedGroupPolicies(params: { [K in keyof ParamsFrom<'listAttachedGroupPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listAttachedGroupPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttachedGroupPolicies'>]-?: ReturnTypeFrom<'listAttachedGroupPolicies'>[K]}['AttachedPolicies'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AttachedPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAttachedGroupPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listAttachedGroupPolicies' })).toString('base64');
    const member = (Array.isArray(result.AttachedPolicies ?? []) ? (result.AttachedPolicies ?? []) : [result.AttachedPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttachedRolePolicies(params: { [K in keyof ParamsFrom<'listAttachedRolePolicies', { next?: string, limit?: number }>]: ParamsFrom<'listAttachedRolePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttachedRolePolicies'>]-?: ReturnTypeFrom<'listAttachedRolePolicies'>[K]}['AttachedPolicies'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AttachedPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAttachedRolePolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listAttachedRolePolicies' })).toString('base64');
    const member = (Array.isArray(result.AttachedPolicies ?? []) ? (result.AttachedPolicies ?? []) : [result.AttachedPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttachedUserPolicies(params: { [K in keyof ParamsFrom<'listAttachedUserPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listAttachedUserPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAttachedUserPolicies'>]-?: ReturnTypeFrom<'listAttachedUserPolicies'>[K]}['AttachedPolicies'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AttachedPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAttachedUserPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listAttachedUserPolicies' })).toString('base64');
    const member = (Array.isArray(result.AttachedPolicies ?? []) ? (result.AttachedPolicies ?? []) : [result.AttachedPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listEntitiesForPolicy: (params: RawParamsFrom<'listEntitiesForPolicy'>) => Promise<ReturnTypeFrom<'listEntitiesForPolicy'>>  = async params => {
  // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":["PolicyGroups","PolicyUsers","PolicyRoles"]}
    return this.client.listEntitiesForPolicy(params as any).promise();
  }

  async listGroupPolicies(params: { [K in keyof ParamsFrom<'listGroupPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listGroupPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroupPolicies'>]-?: ReturnTypeFrom<'listGroupPolicies'>[K]}['PolicyNames'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"PolicyNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listGroupPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listGroupPolicies' })).toString('base64');
    const member = (Array.isArray(result.PolicyNames ?? []) ? (result.PolicyNames ?? []) : [result.PolicyNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroups(params: { [K in keyof ParamsFrom<'listGroups', { next?: string, limit?: number }>]: ParamsFrom<'listGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['Groups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Groups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listGroups' })).toString('base64');
    const member = (Array.isArray(result.Groups ?? []) ? (result.Groups ?? []) : [result.Groups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroupsForUser(params: { [K in keyof ParamsFrom<'listGroupsForUser', { next?: string, limit?: number }>]: ParamsFrom<'listGroupsForUser', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroupsForUser'>]-?: ReturnTypeFrom<'listGroupsForUser'>[K]}['Groups'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Groups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listGroupsForUser({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listGroupsForUser' })).toString('base64');
    const member = (Array.isArray(result.Groups ?? []) ? (result.Groups ?? []) : [result.Groups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listInstanceProfileTags: (params: RawParamsFrom<'listInstanceProfileTags'>) => Promise<ReturnTypeFrom<'listInstanceProfileTags'>>  = async params => {
  // undefined
    return this.client.listInstanceProfileTags(params as any).promise();
  }

  async listInstanceProfiles(params: { [K in keyof ParamsFrom<'listInstanceProfiles', { next?: string, limit?: number }>]: ParamsFrom<'listInstanceProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstanceProfiles'>]-?: ReturnTypeFrom<'listInstanceProfiles'>[K]}['InstanceProfiles'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"InstanceProfiles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listInstanceProfiles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listInstanceProfiles' })).toString('base64');
    const member = (Array.isArray(result.InstanceProfiles ?? []) ? (result.InstanceProfiles ?? []) : [result.InstanceProfiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceProfilesForRole(params: { [K in keyof ParamsFrom<'listInstanceProfilesForRole', { next?: string, limit?: number }>]: ParamsFrom<'listInstanceProfilesForRole', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstanceProfilesForRole'>]-?: ReturnTypeFrom<'listInstanceProfilesForRole'>[K]}['InstanceProfiles'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"InstanceProfiles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listInstanceProfilesForRole({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listInstanceProfilesForRole' })).toString('base64');
    const member = (Array.isArray(result.InstanceProfiles ?? []) ? (result.InstanceProfiles ?? []) : [result.InstanceProfiles]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listMFADeviceTags: (params: RawParamsFrom<'listMFADeviceTags'>) => Promise<ReturnTypeFrom<'listMFADeviceTags'>>  = async params => {
  // undefined
    return this.client.listMFADeviceTags(params as any).promise();
  }

  async listMFADevices(params: { [K in keyof ParamsFrom<'listMFADevices', { next?: string, limit?: number }>]: ParamsFrom<'listMFADevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMFADevices'>]-?: ReturnTypeFrom<'listMFADevices'>[K]}['MFADevices'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"MFADevices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listMFADevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listMFADevices' })).toString('base64');
    const member = (Array.isArray(result.MFADevices ?? []) ? (result.MFADevices ?? []) : [result.MFADevices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listOpenIDConnectProviderTags: (params: RawParamsFrom<'listOpenIDConnectProviderTags'>) => Promise<ReturnTypeFrom<'listOpenIDConnectProviderTags'>>  = async params => {
  // undefined
    return this.client.listOpenIDConnectProviderTags(params as any).promise();
  }

  listOpenIDConnectProviders: (params: RawParamsFrom<'listOpenIDConnectProviders'>) => Promise<ReturnTypeFrom<'listOpenIDConnectProviders'>>  = async params => {
  // undefined
    return this.client.listOpenIDConnectProviders(params as any).promise();
  }

  async listPolicies(params: { [K in keyof ParamsFrom<'listPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['Policies'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Policies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listPolicies' })).toString('base64');
    const member = (Array.isArray(result.Policies ?? []) ? (result.Policies ?? []) : [result.Policies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listPoliciesGrantingServiceAccess: (params: RawParamsFrom<'listPoliciesGrantingServiceAccess'>) => Promise<ReturnTypeFrom<'listPoliciesGrantingServiceAccess'>>  = async params => {
  // undefined
    return this.client.listPoliciesGrantingServiceAccess(params as any).promise();
  }

  listPolicyTags: (params: RawParamsFrom<'listPolicyTags'>) => Promise<ReturnTypeFrom<'listPolicyTags'>>  = async params => {
  // undefined
    return this.client.listPolicyTags(params as any).promise();
  }

  async listPolicyVersions(params: { [K in keyof ParamsFrom<'listPolicyVersions', { next?: string, limit?: number }>]: ParamsFrom<'listPolicyVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPolicyVersions'>]-?: ReturnTypeFrom<'listPolicyVersions'>[K]}['Versions'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Versions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listPolicyVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listPolicyVersions' })).toString('base64');
    const member = (Array.isArray(result.Versions ?? []) ? (result.Versions ?? []) : [result.Versions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRolePolicies(params: { [K in keyof ParamsFrom<'listRolePolicies', { next?: string, limit?: number }>]: ParamsFrom<'listRolePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRolePolicies'>]-?: ReturnTypeFrom<'listRolePolicies'>[K]}['PolicyNames'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"PolicyNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listRolePolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listRolePolicies' })).toString('base64');
    const member = (Array.isArray(result.PolicyNames ?? []) ? (result.PolicyNames ?? []) : [result.PolicyNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listRoleTags: (params: RawParamsFrom<'listRoleTags'>) => Promise<ReturnTypeFrom<'listRoleTags'>>  = async params => {
  // undefined
    return this.client.listRoleTags(params as any).promise();
  }

  async listRoles(params: { [K in keyof ParamsFrom<'listRoles', { next?: string, limit?: number }>]: ParamsFrom<'listRoles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRoles'>]-?: ReturnTypeFrom<'listRoles'>[K]}['Roles'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Roles"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listRoles({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listRoles' })).toString('base64');
    const member = (Array.isArray(result.Roles ?? []) ? (result.Roles ?? []) : [result.Roles]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listSAMLProviderTags: (params: RawParamsFrom<'listSAMLProviderTags'>) => Promise<ReturnTypeFrom<'listSAMLProviderTags'>>  = async params => {
  // undefined
    return this.client.listSAMLProviderTags(params as any).promise();
  }

  async listSAMLProviders(params: { [K in keyof ParamsFrom<'listSAMLProviders', {}>]: ParamsFrom<'listSAMLProviders', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSAMLProviders'>]-?: ReturnTypeFrom<'listSAMLProviders'>[K]}['SAMLProviderList'], undefined>}> {
    // {"resultKey":"SAMLProviderList"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.listSAMLProviders({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.SAMLProviderList ?? []) ? (result.SAMLProviderList ?? []) : [result.SAMLProviderList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSSHPublicKeys(params: { [K in keyof ParamsFrom<'listSSHPublicKeys', { next?: string, limit?: number }>]: ParamsFrom<'listSSHPublicKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSSHPublicKeys'>]-?: ReturnTypeFrom<'listSSHPublicKeys'>[K]}['SSHPublicKeys'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"SSHPublicKeys"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listSSHPublicKeys({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listSSHPublicKeys' })).toString('base64');
    const member = (Array.isArray(result.SSHPublicKeys ?? []) ? (result.SSHPublicKeys ?? []) : [result.SSHPublicKeys]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listServerCertificateTags: (params: RawParamsFrom<'listServerCertificateTags'>) => Promise<ReturnTypeFrom<'listServerCertificateTags'>>  = async params => {
  // undefined
    return this.client.listServerCertificateTags(params as any).promise();
  }

  async listServerCertificates(params: { [K in keyof ParamsFrom<'listServerCertificates', { next?: string, limit?: number }>]: ParamsFrom<'listServerCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServerCertificates'>]-?: ReturnTypeFrom<'listServerCertificates'>[K]}['ServerCertificateMetadataList'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"ServerCertificateMetadataList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listServerCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listServerCertificates' })).toString('base64');
    const member = (Array.isArray(result.ServerCertificateMetadataList ?? []) ? (result.ServerCertificateMetadataList ?? []) : [result.ServerCertificateMetadataList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listServiceSpecificCredentials: (params: RawParamsFrom<'listServiceSpecificCredentials'>) => Promise<ReturnTypeFrom<'listServiceSpecificCredentials'>>  = async params => {
  // undefined
    return this.client.listServiceSpecificCredentials(params as any).promise();
  }

  async listSigningCertificates(params: { [K in keyof ParamsFrom<'listSigningCertificates', { next?: string, limit?: number }>]: ParamsFrom<'listSigningCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSigningCertificates'>]-?: ReturnTypeFrom<'listSigningCertificates'>[K]}['Certificates'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Certificates"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listSigningCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listSigningCertificates' })).toString('base64');
    const member = (Array.isArray(result.Certificates ?? []) ? (result.Certificates ?? []) : [result.Certificates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserPolicies(params: { [K in keyof ParamsFrom<'listUserPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listUserPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUserPolicies'>]-?: ReturnTypeFrom<'listUserPolicies'>[K]}['PolicyNames'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"PolicyNames"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listUserPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listUserPolicies' })).toString('base64');
    const member = (Array.isArray(result.PolicyNames ?? []) ? (result.PolicyNames ?? []) : [result.PolicyNames]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserTags(params: { [K in keyof ParamsFrom<'listUserTags', { next?: string, limit?: number }>]: ParamsFrom<'listUserTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUserTags'>]-?: ReturnTypeFrom<'listUserTags'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listUserTags({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listUserTags' })).toString('base64');
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(params: { [K in keyof ParamsFrom<'listUsers', { next?: string, limit?: number }>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listUsers' })).toString('base64');
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualMFADevices(params: { [K in keyof ParamsFrom<'listVirtualMFADevices', { next?: string, limit?: number }>]: ParamsFrom<'listVirtualMFADevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVirtualMFADevices'>]-?: ReturnTypeFrom<'listVirtualMFADevices'>[K]}['VirtualMFADevices'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"VirtualMFADevices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listVirtualMFADevices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'listVirtualMFADevices' })).toString('base64');
    const member = (Array.isArray(result.VirtualMFADevices ?? []) ? (result.VirtualMFADevices ?? []) : [result.VirtualMFADevices]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putGroupPolicy: (params: RawParamsFrom<'putGroupPolicy'>) => Promise<ReturnTypeFrom<'putGroupPolicy'>>  = async params => {
  // undefined
    return this.client.putGroupPolicy(params as any).promise();
  }

  putRolePermissionsBoundary: (params: RawParamsFrom<'putRolePermissionsBoundary'>) => Promise<ReturnTypeFrom<'putRolePermissionsBoundary'>>  = async params => {
  // undefined
    return this.client.putRolePermissionsBoundary(params as any).promise();
  }

  putRolePolicy: (params: RawParamsFrom<'putRolePolicy'>) => Promise<ReturnTypeFrom<'putRolePolicy'>>  = async params => {
  // undefined
    return this.client.putRolePolicy(params as any).promise();
  }

  putUserPermissionsBoundary: (params: RawParamsFrom<'putUserPermissionsBoundary'>) => Promise<ReturnTypeFrom<'putUserPermissionsBoundary'>>  = async params => {
  // undefined
    return this.client.putUserPermissionsBoundary(params as any).promise();
  }

  putUserPolicy: (params: RawParamsFrom<'putUserPolicy'>) => Promise<ReturnTypeFrom<'putUserPolicy'>>  = async params => {
  // undefined
    return this.client.putUserPolicy(params as any).promise();
  }

  removeClientIDFromOpenIDConnectProvider: (params: RawParamsFrom<'removeClientIDFromOpenIDConnectProvider'>) => Promise<ReturnTypeFrom<'removeClientIDFromOpenIDConnectProvider'>>  = async params => {
  // undefined
    return this.client.removeClientIDFromOpenIDConnectProvider(params as any).promise();
  }

  removeRoleFromInstanceProfile: (params: RawParamsFrom<'removeRoleFromInstanceProfile'>) => Promise<ReturnTypeFrom<'removeRoleFromInstanceProfile'>>  = async params => {
  // undefined
    return this.client.removeRoleFromInstanceProfile(params as any).promise();
  }

  removeUserFromGroup: (params: RawParamsFrom<'removeUserFromGroup'>) => Promise<ReturnTypeFrom<'removeUserFromGroup'>>  = async params => {
  // undefined
    return this.client.removeUserFromGroup(params as any).promise();
  }

  resetServiceSpecificCredential: (params: RawParamsFrom<'resetServiceSpecificCredential'>) => Promise<ReturnTypeFrom<'resetServiceSpecificCredential'>>  = async params => {
  // undefined
    return this.client.resetServiceSpecificCredential(params as any).promise();
  }

  resyncMFADevice: (params: RawParamsFrom<'resyncMFADevice'>) => Promise<ReturnTypeFrom<'resyncMFADevice'>>  = async params => {
  // undefined
    return this.client.resyncMFADevice(params as any).promise();
  }

  setDefaultPolicyVersion: (params: RawParamsFrom<'setDefaultPolicyVersion'>) => Promise<ReturnTypeFrom<'setDefaultPolicyVersion'>>  = async params => {
  // undefined
    return this.client.setDefaultPolicyVersion(params as any).promise();
  }

  setSecurityTokenServicePreferences: (params: RawParamsFrom<'setSecurityTokenServicePreferences'>) => Promise<ReturnTypeFrom<'setSecurityTokenServicePreferences'>>  = async params => {
  // undefined
    return this.client.setSecurityTokenServicePreferences(params as any).promise();
  }

  async simulateCustomPolicy(params: { [K in keyof ParamsFrom<'simulateCustomPolicy', { next?: string, limit?: number }>]: ParamsFrom<'simulateCustomPolicy', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'simulateCustomPolicy'>]-?: ReturnTypeFrom<'simulateCustomPolicy'>[K]}['EvaluationResults'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"EvaluationResults"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.simulateCustomPolicy({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'simulateCustomPolicy' })).toString('base64');
    const member = (Array.isArray(result.EvaluationResults ?? []) ? (result.EvaluationResults ?? []) : [result.EvaluationResults]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async simulatePrincipalPolicy(params: { [K in keyof ParamsFrom<'simulatePrincipalPolicy', { next?: string, limit?: number }>]: ParamsFrom<'simulatePrincipalPolicy', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'simulatePrincipalPolicy'>]-?: ReturnTypeFrom<'simulatePrincipalPolicy'>[K]}['EvaluationResults'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"EvaluationResults"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.simulatePrincipalPolicy({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.Marker, operation: 'simulatePrincipalPolicy' })).toString('base64');
    const member = (Array.isArray(result.EvaluationResults ?? []) ? (result.EvaluationResults ?? []) : [result.EvaluationResults]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagInstanceProfile: (params: RawParamsFrom<'tagInstanceProfile'>) => Promise<ReturnTypeFrom<'tagInstanceProfile'>>  = async params => {
  // undefined
    return this.client.tagInstanceProfile(params as any).promise();
  }

  tagMFADevice: (params: RawParamsFrom<'tagMFADevice'>) => Promise<ReturnTypeFrom<'tagMFADevice'>>  = async params => {
  // undefined
    return this.client.tagMFADevice(params as any).promise();
  }

  tagOpenIDConnectProvider: (params: RawParamsFrom<'tagOpenIDConnectProvider'>) => Promise<ReturnTypeFrom<'tagOpenIDConnectProvider'>>  = async params => {
  // undefined
    return this.client.tagOpenIDConnectProvider(params as any).promise();
  }

  tagPolicy: (params: RawParamsFrom<'tagPolicy'>) => Promise<ReturnTypeFrom<'tagPolicy'>>  = async params => {
  // undefined
    return this.client.tagPolicy(params as any).promise();
  }

  tagRole: (params: RawParamsFrom<'tagRole'>) => Promise<ReturnTypeFrom<'tagRole'>>  = async params => {
  // undefined
    return this.client.tagRole(params as any).promise();
  }

  tagSAMLProvider: (params: RawParamsFrom<'tagSAMLProvider'>) => Promise<ReturnTypeFrom<'tagSAMLProvider'>>  = async params => {
  // undefined
    return this.client.tagSAMLProvider(params as any).promise();
  }

  tagServerCertificate: (params: RawParamsFrom<'tagServerCertificate'>) => Promise<ReturnTypeFrom<'tagServerCertificate'>>  = async params => {
  // undefined
    return this.client.tagServerCertificate(params as any).promise();
  }

  tagUser: (params: RawParamsFrom<'tagUser'>) => Promise<ReturnTypeFrom<'tagUser'>>  = async params => {
  // undefined
    return this.client.tagUser(params as any).promise();
  }

  untagInstanceProfile: (params: RawParamsFrom<'untagInstanceProfile'>) => Promise<ReturnTypeFrom<'untagInstanceProfile'>>  = async params => {
  // undefined
    return this.client.untagInstanceProfile(params as any).promise();
  }

  untagMFADevice: (params: RawParamsFrom<'untagMFADevice'>) => Promise<ReturnTypeFrom<'untagMFADevice'>>  = async params => {
  // undefined
    return this.client.untagMFADevice(params as any).promise();
  }

  untagOpenIDConnectProvider: (params: RawParamsFrom<'untagOpenIDConnectProvider'>) => Promise<ReturnTypeFrom<'untagOpenIDConnectProvider'>>  = async params => {
  // undefined
    return this.client.untagOpenIDConnectProvider(params as any).promise();
  }

  untagPolicy: (params: RawParamsFrom<'untagPolicy'>) => Promise<ReturnTypeFrom<'untagPolicy'>>  = async params => {
  // undefined
    return this.client.untagPolicy(params as any).promise();
  }

  untagRole: (params: RawParamsFrom<'untagRole'>) => Promise<ReturnTypeFrom<'untagRole'>>  = async params => {
  // undefined
    return this.client.untagRole(params as any).promise();
  }

  untagSAMLProvider: (params: RawParamsFrom<'untagSAMLProvider'>) => Promise<ReturnTypeFrom<'untagSAMLProvider'>>  = async params => {
  // undefined
    return this.client.untagSAMLProvider(params as any).promise();
  }

  untagServerCertificate: (params: RawParamsFrom<'untagServerCertificate'>) => Promise<ReturnTypeFrom<'untagServerCertificate'>>  = async params => {
  // undefined
    return this.client.untagServerCertificate(params as any).promise();
  }

  untagUser: (params: RawParamsFrom<'untagUser'>) => Promise<ReturnTypeFrom<'untagUser'>>  = async params => {
  // undefined
    return this.client.untagUser(params as any).promise();
  }

  updateAccessKey: (params: RawParamsFrom<'updateAccessKey'>) => Promise<ReturnTypeFrom<'updateAccessKey'>>  = async params => {
  // undefined
    return this.client.updateAccessKey(params as any).promise();
  }

  updateAccountPasswordPolicy: (params: RawParamsFrom<'updateAccountPasswordPolicy'>) => Promise<ReturnTypeFrom<'updateAccountPasswordPolicy'>>  = async params => {
  // undefined
    return this.client.updateAccountPasswordPolicy(params as any).promise();
  }

  updateAssumeRolePolicy: (params: RawParamsFrom<'updateAssumeRolePolicy'>) => Promise<ReturnTypeFrom<'updateAssumeRolePolicy'>>  = async params => {
  // undefined
    return this.client.updateAssumeRolePolicy(params as any).promise();
  }

  updateGroup: (params: RawParamsFrom<'updateGroup'>) => Promise<ReturnTypeFrom<'updateGroup'>>  = async params => {
  // undefined
    return this.client.updateGroup(params as any).promise();
  }

  updateLoginProfile: (params: RawParamsFrom<'updateLoginProfile'>) => Promise<ReturnTypeFrom<'updateLoginProfile'>>  = async params => {
  // undefined
    return this.client.updateLoginProfile(params as any).promise();
  }

  updateOpenIDConnectProviderThumbprint: (params: RawParamsFrom<'updateOpenIDConnectProviderThumbprint'>) => Promise<ReturnTypeFrom<'updateOpenIDConnectProviderThumbprint'>>  = async params => {
  // undefined
    return this.client.updateOpenIDConnectProviderThumbprint(params as any).promise();
  }

  updateRole: (params: RawParamsFrom<'updateRole'>) => Promise<ReturnTypeFrom<'updateRole'>>  = async params => {
  // undefined
    return this.client.updateRole(params as any).promise();
  }

  updateRoleDescription: (params: RawParamsFrom<'updateRoleDescription'>) => Promise<ReturnTypeFrom<'updateRoleDescription'>>  = async params => {
  // undefined
    return this.client.updateRoleDescription(params as any).promise();
  }

  updateSAMLProvider: (params: RawParamsFrom<'updateSAMLProvider'>) => Promise<ReturnTypeFrom<'updateSAMLProvider'>>  = async params => {
  // undefined
    return this.client.updateSAMLProvider(params as any).promise();
  }

  updateSSHPublicKey: (params: RawParamsFrom<'updateSSHPublicKey'>) => Promise<ReturnTypeFrom<'updateSSHPublicKey'>>  = async params => {
  // undefined
    return this.client.updateSSHPublicKey(params as any).promise();
  }

  updateServerCertificate: (params: RawParamsFrom<'updateServerCertificate'>) => Promise<ReturnTypeFrom<'updateServerCertificate'>>  = async params => {
  // undefined
    return this.client.updateServerCertificate(params as any).promise();
  }

  updateServiceSpecificCredential: (params: RawParamsFrom<'updateServiceSpecificCredential'>) => Promise<ReturnTypeFrom<'updateServiceSpecificCredential'>>  = async params => {
  // undefined
    return this.client.updateServiceSpecificCredential(params as any).promise();
  }

  updateSigningCertificate: (params: RawParamsFrom<'updateSigningCertificate'>) => Promise<ReturnTypeFrom<'updateSigningCertificate'>>  = async params => {
  // undefined
    return this.client.updateSigningCertificate(params as any).promise();
  }

  updateUser: (params: RawParamsFrom<'updateUser'>) => Promise<ReturnTypeFrom<'updateUser'>>  = async params => {
  // undefined
    return this.client.updateUser(params as any).promise();
  }

  uploadSSHPublicKey: (params: RawParamsFrom<'uploadSSHPublicKey'>) => Promise<ReturnTypeFrom<'uploadSSHPublicKey'>>  = async params => {
  // undefined
    return this.client.uploadSSHPublicKey(params as any).promise();
  }

  uploadServerCertificate: (params: RawParamsFrom<'uploadServerCertificate'>) => Promise<ReturnTypeFrom<'uploadServerCertificate'>>  = async params => {
  // undefined
    return this.client.uploadServerCertificate(params as any).promise();
  }

  uploadSigningCertificate: (params: RawParamsFrom<'uploadSigningCertificate'>) => Promise<ReturnTypeFrom<'uploadSigningCertificate'>>  = async params => {
  // undefined
    return this.client.uploadSigningCertificate(params as any).promise();
  }
  
  static fromClient(client: AWSIAM): IAM {
    return new IAM(client) as any;
  }
  
  static client(options?: AWSIAM.Types.ClientConfiguration): IAM {
    return new IAM(new AWSIAM(options)) as any;
  }
}  
