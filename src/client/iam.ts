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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iam';
    global: true;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly ["getAccountAuthorizationDetails","listAccessKeys","listAccountAliases","listGroups","listInstanceProfiles","listMFADevices","listPolicies","listRoles","listSAMLProviders","listSSHPublicKeys","listServerCertificates","listSigningCertificates","listUsers","listVirtualMFADevices"];
    
  addClientIDToOpenIDConnectProvider: FunctionTypeFrom<'addClientIDToOpenIDConnectProvider'>;

  addRoleToInstanceProfile: FunctionTypeFrom<'addRoleToInstanceProfile'>;

  addUserToGroup: FunctionTypeFrom<'addUserToGroup'>;

  attachGroupPolicy: FunctionTypeFrom<'attachGroupPolicy'>;

  attachRolePolicy: FunctionTypeFrom<'attachRolePolicy'>;

  attachUserPolicy: FunctionTypeFrom<'attachUserPolicy'>;

  changePassword: FunctionTypeFrom<'changePassword'>;

  createAccessKey: FunctionTypeFrom<'createAccessKey'>;

  createAccountAlias: FunctionTypeFrom<'createAccountAlias'>;

  createGroup: FunctionTypeFrom<'createGroup'>;

  createInstanceProfile: FunctionTypeFrom<'createInstanceProfile'>;

  createLoginProfile: FunctionTypeFrom<'createLoginProfile'>;

  createOpenIDConnectProvider: FunctionTypeFrom<'createOpenIDConnectProvider'>;

  createPolicy: FunctionTypeFrom<'createPolicy'>;

  createPolicyVersion: FunctionTypeFrom<'createPolicyVersion'>;

  createRole: FunctionTypeFrom<'createRole'>;

  createSAMLProvider: FunctionTypeFrom<'createSAMLProvider'>;

  createServiceLinkedRole: FunctionTypeFrom<'createServiceLinkedRole'>;

  createServiceSpecificCredential: FunctionTypeFrom<'createServiceSpecificCredential'>;

  createUser: FunctionTypeFrom<'createUser'>;

  createVirtualMFADevice: FunctionTypeFrom<'createVirtualMFADevice'>;

  deactivateMFADevice: FunctionTypeFrom<'deactivateMFADevice'>;

  deleteAccessKey: FunctionTypeFrom<'deleteAccessKey'>;

  deleteAccountAlias: FunctionTypeFrom<'deleteAccountAlias'>;

  deleteAccountPasswordPolicy: FunctionTypeFrom<'deleteAccountPasswordPolicy'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  deleteGroupPolicy: FunctionTypeFrom<'deleteGroupPolicy'>;

  deleteInstanceProfile: FunctionTypeFrom<'deleteInstanceProfile'>;

  deleteLoginProfile: FunctionTypeFrom<'deleteLoginProfile'>;

  deleteOpenIDConnectProvider: FunctionTypeFrom<'deleteOpenIDConnectProvider'>;

  deletePolicy: FunctionTypeFrom<'deletePolicy'>;

  deletePolicyVersion: FunctionTypeFrom<'deletePolicyVersion'>;

  deleteRole: FunctionTypeFrom<'deleteRole'>;

  deleteRolePermissionsBoundary: FunctionTypeFrom<'deleteRolePermissionsBoundary'>;

  deleteRolePolicy: FunctionTypeFrom<'deleteRolePolicy'>;

  deleteSAMLProvider: FunctionTypeFrom<'deleteSAMLProvider'>;

  deleteSSHPublicKey: FunctionTypeFrom<'deleteSSHPublicKey'>;

  deleteServerCertificate: FunctionTypeFrom<'deleteServerCertificate'>;

  deleteServiceLinkedRole: FunctionTypeFrom<'deleteServiceLinkedRole'>;

  deleteServiceSpecificCredential: FunctionTypeFrom<'deleteServiceSpecificCredential'>;

  deleteSigningCertificate: FunctionTypeFrom<'deleteSigningCertificate'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  deleteUserPermissionsBoundary: FunctionTypeFrom<'deleteUserPermissionsBoundary'>;

  deleteUserPolicy: FunctionTypeFrom<'deleteUserPolicy'>;

  deleteVirtualMFADevice: FunctionTypeFrom<'deleteVirtualMFADevice'>;

  detachGroupPolicy: FunctionTypeFrom<'detachGroupPolicy'>;

  detachRolePolicy: FunctionTypeFrom<'detachRolePolicy'>;

  detachUserPolicy: FunctionTypeFrom<'detachUserPolicy'>;

  enableMFADevice: FunctionTypeFrom<'enableMFADevice'>;

  generateCredentialReport: FunctionTypeFrom<'generateCredentialReport'>;

  generateOrganizationsAccessReport: FunctionTypeFrom<'generateOrganizationsAccessReport'>;

  generateServiceLastAccessedDetails: FunctionTypeFrom<'generateServiceLastAccessedDetails'>;

  getAccessKeyLastUsed: FunctionTypeFrom<'getAccessKeyLastUsed'>;

  getAccountAuthorizationDetails: FunctionTypeFrom<'getAccountAuthorizationDetails'>;

  getAccountPasswordPolicy: FunctionTypeFrom<'getAccountPasswordPolicy'>;

  getAccountSummary: FunctionTypeFrom<'getAccountSummary'>;

  getContextKeysForCustomPolicy: FunctionTypeFrom<'getContextKeysForCustomPolicy'>;

  getContextKeysForPrincipalPolicy: FunctionTypeFrom<'getContextKeysForPrincipalPolicy'>;

  getCredentialReport: FunctionTypeFrom<'getCredentialReport'>;

  getGroup(params: { [K in keyof Omit<ParamsFrom<'getGroup', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'getGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getGroup'>]-?: ReturnTypeFrom<'getGroup'>[K]}['Users'] }>
  ;

  getGroupPolicy: FunctionTypeFrom<'getGroupPolicy'>;

  getInstanceProfile: FunctionTypeFrom<'getInstanceProfile'>;

  getLoginProfile: FunctionTypeFrom<'getLoginProfile'>;

  getOpenIDConnectProvider: FunctionTypeFrom<'getOpenIDConnectProvider'>;

  getOrganizationsAccessReport: FunctionTypeFrom<'getOrganizationsAccessReport'>;

  getPolicy: FunctionTypeFrom<'getPolicy'>;

  getPolicyVersion: FunctionTypeFrom<'getPolicyVersion'>;

  getRole: FunctionTypeFrom<'getRole'>;

  getRolePolicy: FunctionTypeFrom<'getRolePolicy'>;

  getSAMLProvider: FunctionTypeFrom<'getSAMLProvider'>;

  getSSHPublicKey: FunctionTypeFrom<'getSSHPublicKey'>;

  getServerCertificate: FunctionTypeFrom<'getServerCertificate'>;

  getServiceLastAccessedDetails: FunctionTypeFrom<'getServiceLastAccessedDetails'>;

  getServiceLastAccessedDetailsWithEntities: FunctionTypeFrom<'getServiceLastAccessedDetailsWithEntities'>;

  getServiceLinkedRoleDeletionStatus: FunctionTypeFrom<'getServiceLinkedRoleDeletionStatus'>;

  getUser: FunctionTypeFrom<'getUser'>;

  getUserPolicy: FunctionTypeFrom<'getUserPolicy'>;

  listAccessKeys(params: { [K in keyof Omit<ParamsFrom<'listAccessKeys', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listAccessKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccessKeys'>]-?: ReturnTypeFrom<'listAccessKeys'>[K]}['AccessKeyMetadata'] }>
  listAccessKeys(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccessKeys'>]-?: ReturnTypeFrom<'listAccessKeys'>[K]}['AccessKeyMetadata'] }>;

  listAccountAliases(params: { [K in keyof Omit<ParamsFrom<'listAccountAliases', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listAccountAliases', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountAliases'>]-?: ReturnTypeFrom<'listAccountAliases'>[K]}['AccountAliases'] }>
  listAccountAliases(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountAliases'>]-?: ReturnTypeFrom<'listAccountAliases'>[K]}['AccountAliases'] }>;

  listAttachedGroupPolicies(params: { [K in keyof Omit<ParamsFrom<'listAttachedGroupPolicies', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listAttachedGroupPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttachedGroupPolicies'>]-?: ReturnTypeFrom<'listAttachedGroupPolicies'>[K]}['AttachedPolicies'] }>
  ;

  listAttachedRolePolicies(params: { [K in keyof Omit<ParamsFrom<'listAttachedRolePolicies', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listAttachedRolePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttachedRolePolicies'>]-?: ReturnTypeFrom<'listAttachedRolePolicies'>[K]}['AttachedPolicies'] }>
  ;

  listAttachedUserPolicies(params: { [K in keyof Omit<ParamsFrom<'listAttachedUserPolicies', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listAttachedUserPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAttachedUserPolicies'>]-?: ReturnTypeFrom<'listAttachedUserPolicies'>[K]}['AttachedPolicies'] }>
  ;

  listEntitiesForPolicy: FunctionTypeFrom<'listEntitiesForPolicy'>;

  listGroupPolicies(params: { [K in keyof Omit<ParamsFrom<'listGroupPolicies', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listGroupPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroupPolicies'>]-?: ReturnTypeFrom<'listGroupPolicies'>[K]}['PolicyNames'] }>
  ;

  listGroups(params: { [K in keyof Omit<ParamsFrom<'listGroups', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['Groups'] }>
  listGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['Groups'] }>;

  listGroupsForUser(params: { [K in keyof Omit<ParamsFrom<'listGroupsForUser', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listGroupsForUser', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroupsForUser'>]-?: ReturnTypeFrom<'listGroupsForUser'>[K]}['Groups'] }>
  ;

  listInstanceProfileTags: FunctionTypeFrom<'listInstanceProfileTags'>;

  listInstanceProfiles(params: { [K in keyof Omit<ParamsFrom<'listInstanceProfiles', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listInstanceProfiles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstanceProfiles'>]-?: ReturnTypeFrom<'listInstanceProfiles'>[K]}['InstanceProfiles'] }>
  listInstanceProfiles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstanceProfiles'>]-?: ReturnTypeFrom<'listInstanceProfiles'>[K]}['InstanceProfiles'] }>;

  listInstanceProfilesForRole(params: { [K in keyof Omit<ParamsFrom<'listInstanceProfilesForRole', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listInstanceProfilesForRole', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstanceProfilesForRole'>]-?: ReturnTypeFrom<'listInstanceProfilesForRole'>[K]}['InstanceProfiles'] }>
  ;

  listMFADeviceTags: FunctionTypeFrom<'listMFADeviceTags'>;

  listMFADevices(params: { [K in keyof Omit<ParamsFrom<'listMFADevices', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listMFADevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMFADevices'>]-?: ReturnTypeFrom<'listMFADevices'>[K]}['MFADevices'] }>
  listMFADevices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMFADevices'>]-?: ReturnTypeFrom<'listMFADevices'>[K]}['MFADevices'] }>;

  listOpenIDConnectProviderTags: FunctionTypeFrom<'listOpenIDConnectProviderTags'>;

  listOpenIDConnectProviders: FunctionTypeFrom<'listOpenIDConnectProviders'>;

  listPolicies(params: { [K in keyof Omit<ParamsFrom<'listPolicies', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['Policies'] }>
  listPolicies(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicies'>]-?: ReturnTypeFrom<'listPolicies'>[K]}['Policies'] }>;

  listPoliciesGrantingServiceAccess: FunctionTypeFrom<'listPoliciesGrantingServiceAccess'>;

  listPolicyTags: FunctionTypeFrom<'listPolicyTags'>;

  listPolicyVersions(params: { [K in keyof Omit<ParamsFrom<'listPolicyVersions', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listPolicyVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPolicyVersions'>]-?: ReturnTypeFrom<'listPolicyVersions'>[K]}['Versions'] }>
  ;

  listRolePolicies(params: { [K in keyof Omit<ParamsFrom<'listRolePolicies', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listRolePolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRolePolicies'>]-?: ReturnTypeFrom<'listRolePolicies'>[K]}['PolicyNames'] }>
  ;

  listRoleTags: FunctionTypeFrom<'listRoleTags'>;

  listRoles(params: { [K in keyof Omit<ParamsFrom<'listRoles', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listRoles', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoles'>]-?: ReturnTypeFrom<'listRoles'>[K]}['Roles'] }>
  listRoles(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoles'>]-?: ReturnTypeFrom<'listRoles'>[K]}['Roles'] }>;

  listSAMLProviderTags: FunctionTypeFrom<'listSAMLProviderTags'>;

  listSAMLProviders: FunctionTypeFrom<'listSAMLProviders'>;

  listSSHPublicKeys(params: { [K in keyof Omit<ParamsFrom<'listSSHPublicKeys', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listSSHPublicKeys', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSSHPublicKeys'>]-?: ReturnTypeFrom<'listSSHPublicKeys'>[K]}['SSHPublicKeys'] }>
  listSSHPublicKeys(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSSHPublicKeys'>]-?: ReturnTypeFrom<'listSSHPublicKeys'>[K]}['SSHPublicKeys'] }>;

  listServerCertificateTags: FunctionTypeFrom<'listServerCertificateTags'>;

  listServerCertificates(params: { [K in keyof Omit<ParamsFrom<'listServerCertificates', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listServerCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServerCertificates'>]-?: ReturnTypeFrom<'listServerCertificates'>[K]}['ServerCertificateMetadataList'] }>
  listServerCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServerCertificates'>]-?: ReturnTypeFrom<'listServerCertificates'>[K]}['ServerCertificateMetadataList'] }>;

  listServiceSpecificCredentials: FunctionTypeFrom<'listServiceSpecificCredentials'>;

  listSigningCertificates(params: { [K in keyof Omit<ParamsFrom<'listSigningCertificates', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listSigningCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSigningCertificates'>]-?: ReturnTypeFrom<'listSigningCertificates'>[K]}['Certificates'] }>
  listSigningCertificates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSigningCertificates'>]-?: ReturnTypeFrom<'listSigningCertificates'>[K]}['Certificates'] }>;

  listUserPolicies(params: { [K in keyof Omit<ParamsFrom<'listUserPolicies', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listUserPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUserPolicies'>]-?: ReturnTypeFrom<'listUserPolicies'>[K]}['PolicyNames'] }>
  ;

  listUserTags(params: { [K in keyof Omit<ParamsFrom<'listUserTags', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listUserTags', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUserTags'>]-?: ReturnTypeFrom<'listUserTags'>[K]}['Tags'] }>
  ;

  listUsers(params: { [K in keyof Omit<ParamsFrom<'listUsers', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'] }>
  listUsers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'] }>;

  listVirtualMFADevices(params: { [K in keyof Omit<ParamsFrom<'listVirtualMFADevices', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listVirtualMFADevices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualMFADevices'>]-?: ReturnTypeFrom<'listVirtualMFADevices'>[K]}['VirtualMFADevices'] }>
  listVirtualMFADevices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listVirtualMFADevices'>]-?: ReturnTypeFrom<'listVirtualMFADevices'>[K]}['VirtualMFADevices'] }>;

  putGroupPolicy: FunctionTypeFrom<'putGroupPolicy'>;

  putRolePermissionsBoundary: FunctionTypeFrom<'putRolePermissionsBoundary'>;

  putRolePolicy: FunctionTypeFrom<'putRolePolicy'>;

  putUserPermissionsBoundary: FunctionTypeFrom<'putUserPermissionsBoundary'>;

  putUserPolicy: FunctionTypeFrom<'putUserPolicy'>;

  removeClientIDFromOpenIDConnectProvider: FunctionTypeFrom<'removeClientIDFromOpenIDConnectProvider'>;

  removeRoleFromInstanceProfile: FunctionTypeFrom<'removeRoleFromInstanceProfile'>;

  removeUserFromGroup: FunctionTypeFrom<'removeUserFromGroup'>;

  resetServiceSpecificCredential: FunctionTypeFrom<'resetServiceSpecificCredential'>;

  resyncMFADevice: FunctionTypeFrom<'resyncMFADevice'>;

  setDefaultPolicyVersion: FunctionTypeFrom<'setDefaultPolicyVersion'>;

  setSecurityTokenServicePreferences: FunctionTypeFrom<'setSecurityTokenServicePreferences'>;

  simulateCustomPolicy(params: { [K in keyof Omit<ParamsFrom<'simulateCustomPolicy', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'simulateCustomPolicy', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'simulateCustomPolicy'>]-?: ReturnTypeFrom<'simulateCustomPolicy'>[K]}['EvaluationResults'] }>
  ;

  simulatePrincipalPolicy(params: { [K in keyof Omit<ParamsFrom<'simulatePrincipalPolicy', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'simulatePrincipalPolicy', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'simulatePrincipalPolicy'>]-?: ReturnTypeFrom<'simulatePrincipalPolicy'>[K]}['EvaluationResults'] }>
  ;

  tagInstanceProfile: FunctionTypeFrom<'tagInstanceProfile'>;

  tagMFADevice: FunctionTypeFrom<'tagMFADevice'>;

  tagOpenIDConnectProvider: FunctionTypeFrom<'tagOpenIDConnectProvider'>;

  tagPolicy: FunctionTypeFrom<'tagPolicy'>;

  tagRole: FunctionTypeFrom<'tagRole'>;

  tagSAMLProvider: FunctionTypeFrom<'tagSAMLProvider'>;

  tagServerCertificate: FunctionTypeFrom<'tagServerCertificate'>;

  tagUser: FunctionTypeFrom<'tagUser'>;

  untagInstanceProfile: FunctionTypeFrom<'untagInstanceProfile'>;

  untagMFADevice: FunctionTypeFrom<'untagMFADevice'>;

  untagOpenIDConnectProvider: FunctionTypeFrom<'untagOpenIDConnectProvider'>;

  untagPolicy: FunctionTypeFrom<'untagPolicy'>;

  untagRole: FunctionTypeFrom<'untagRole'>;

  untagSAMLProvider: FunctionTypeFrom<'untagSAMLProvider'>;

  untagServerCertificate: FunctionTypeFrom<'untagServerCertificate'>;

  untagUser: FunctionTypeFrom<'untagUser'>;

  updateAccessKey: FunctionTypeFrom<'updateAccessKey'>;

  updateAccountPasswordPolicy: FunctionTypeFrom<'updateAccountPasswordPolicy'>;

  updateAssumeRolePolicy: FunctionTypeFrom<'updateAssumeRolePolicy'>;

  updateGroup: FunctionTypeFrom<'updateGroup'>;

  updateLoginProfile: FunctionTypeFrom<'updateLoginProfile'>;

  updateOpenIDConnectProviderThumbprint: FunctionTypeFrom<'updateOpenIDConnectProviderThumbprint'>;

  updateRole: FunctionTypeFrom<'updateRole'>;

  updateRoleDescription: FunctionTypeFrom<'updateRoleDescription'>;

  updateSAMLProvider: FunctionTypeFrom<'updateSAMLProvider'>;

  updateSSHPublicKey: FunctionTypeFrom<'updateSSHPublicKey'>;

  updateServerCertificate: FunctionTypeFrom<'updateServerCertificate'>;

  updateServiceSpecificCredential: FunctionTypeFrom<'updateServiceSpecificCredential'>;

  updateSigningCertificate: FunctionTypeFrom<'updateSigningCertificate'>;

  updateUser: FunctionTypeFrom<'updateUser'>;

  uploadSSHPublicKey: FunctionTypeFrom<'uploadSSHPublicKey'>;

  uploadServerCertificate: FunctionTypeFrom<'uploadServerCertificate'>;

  uploadSigningCertificate: FunctionTypeFrom<'uploadSigningCertificate'>
}
 
export class IAM implements ClientType {
  private constructor(private readonly client: AWSIAM) {}
  
  public readonly signingRegion = 'us-east-1';
  public readonly service = 'iam';
  public readonly global = true;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = ["getAccountAuthorizationDetails","listAccessKeys","listAccountAliases","listGroups","listInstanceProfiles","listMFADevices","listPolicies","listRoles","listSAMLProviders","listSSHPublicKeys","listServerCertificates","listSigningCertificates","listUsers","listVirtualMFADevices"] as const;
  
  async addClientIDToOpenIDConnectProvider(...args: any): Promise<any> {
  // undefined
    return this.client.addClientIDToOpenIDConnectProvider(...args).promise()
  }

  async addRoleToInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.addRoleToInstanceProfile(...args).promise()
  }

  async addUserToGroup(...args: any): Promise<any> {
  // undefined
    return this.client.addUserToGroup(...args).promise()
  }

  async attachGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.attachGroupPolicy(...args).promise()
  }

  async attachRolePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.attachRolePolicy(...args).promise()
  }

  async attachUserPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.attachUserPolicy(...args).promise()
  }

  async changePassword(...args: any): Promise<any> {
  // undefined
    return this.client.changePassword(...args).promise()
  }

  async createAccessKey(...args: any): Promise<any> {
  // undefined
    return this.client.createAccessKey(...args).promise()
  }

  async createAccountAlias(...args: any): Promise<any> {
  // undefined
    return this.client.createAccountAlias(...args).promise()
  }

  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async createInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createInstanceProfile(...args).promise()
  }

  async createLoginProfile(...args: any): Promise<any> {
  // undefined
    return this.client.createLoginProfile(...args).promise()
  }

  async createOpenIDConnectProvider(...args: any): Promise<any> {
  // undefined
    return this.client.createOpenIDConnectProvider(...args).promise()
  }

  async createPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createPolicy(...args).promise()
  }

  async createPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createPolicyVersion(...args).promise()
  }

  async createRole(...args: any): Promise<any> {
  // undefined
    return this.client.createRole(...args).promise()
  }

  async createSAMLProvider(...args: any): Promise<any> {
  // undefined
    return this.client.createSAMLProvider(...args).promise()
  }

  async createServiceLinkedRole(...args: any): Promise<any> {
  // undefined
    return this.client.createServiceLinkedRole(...args).promise()
  }

  async createServiceSpecificCredential(...args: any): Promise<any> {
  // undefined
    return this.client.createServiceSpecificCredential(...args).promise()
  }

  async createUser(...args: any): Promise<any> {
  // undefined
    return this.client.createUser(...args).promise()
  }

  async createVirtualMFADevice(...args: any): Promise<any> {
  // undefined
    return this.client.createVirtualMFADevice(...args).promise()
  }

  async deactivateMFADevice(...args: any): Promise<any> {
  // undefined
    return this.client.deactivateMFADevice(...args).promise()
  }

  async deleteAccessKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccessKey(...args).promise()
  }

  async deleteAccountAlias(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccountAlias(...args).promise()
  }

  async deleteAccountPasswordPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAccountPasswordPolicy(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async deleteGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroupPolicy(...args).promise()
  }

  async deleteInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteInstanceProfile(...args).promise()
  }

  async deleteLoginProfile(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoginProfile(...args).promise()
  }

  async deleteOpenIDConnectProvider(...args: any): Promise<any> {
  // undefined
    return this.client.deleteOpenIDConnectProvider(...args).promise()
  }

  async deletePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicy(...args).promise()
  }

  async deletePolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deletePolicyVersion(...args).promise()
  }

  async deleteRole(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRole(...args).promise()
  }

  async deleteRolePermissionsBoundary(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRolePermissionsBoundary(...args).promise()
  }

  async deleteRolePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRolePolicy(...args).promise()
  }

  async deleteSAMLProvider(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSAMLProvider(...args).promise()
  }

  async deleteSSHPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSSHPublicKey(...args).promise()
  }

  async deleteServerCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServerCertificate(...args).promise()
  }

  async deleteServiceLinkedRole(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServiceLinkedRole(...args).promise()
  }

  async deleteServiceSpecificCredential(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServiceSpecificCredential(...args).promise()
  }

  async deleteSigningCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSigningCertificate(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async deleteUserPermissionsBoundary(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserPermissionsBoundary(...args).promise()
  }

  async deleteUserPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserPolicy(...args).promise()
  }

  async deleteVirtualMFADevice(...args: any): Promise<any> {
  // undefined
    return this.client.deleteVirtualMFADevice(...args).promise()
  }

  async detachGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.detachGroupPolicy(...args).promise()
  }

  async detachRolePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.detachRolePolicy(...args).promise()
  }

  async detachUserPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.detachUserPolicy(...args).promise()
  }

  async enableMFADevice(...args: any): Promise<any> {
  // undefined
    return this.client.enableMFADevice(...args).promise()
  }

  async generateCredentialReport(...args: any): Promise<any> {
  // undefined
    return this.client.generateCredentialReport(...args).promise()
  }

  async generateOrganizationsAccessReport(...args: any): Promise<any> {
  // undefined
    return this.client.generateOrganizationsAccessReport(...args).promise()
  }

  async generateServiceLastAccessedDetails(...args: any): Promise<any> {
  // undefined
    return this.client.generateServiceLastAccessedDetails(...args).promise()
  }

  async getAccessKeyLastUsed(...args: any): Promise<any> {
  // undefined
    return this.client.getAccessKeyLastUsed(...args).promise()
  }

  async getAccountAuthorizationDetails(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":["UserDetailList","GroupDetailList","RoleDetailList","Policies"]}
    return this.client.getAccountAuthorizationDetails(...args).promise()
  }

  async getAccountPasswordPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountPasswordPolicy(...args).promise()
  }

  async getAccountSummary(...args: any): Promise<any> {
  // undefined
    return this.client.getAccountSummary(...args).promise()
  }

  async getContextKeysForCustomPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getContextKeysForCustomPolicy(...args).promise()
  }

  async getContextKeysForPrincipalPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getContextKeysForPrincipalPolicy(...args).promise()
  }

  async getCredentialReport(...args: any): Promise<any> {
  // undefined
    return this.client.getCredentialReport(...args).promise()
  }

  async getGroup(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.getGroup(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getGroupPolicy(...args).promise()
  }

  async getInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getInstanceProfile(...args).promise()
  }

  async getLoginProfile(...args: any): Promise<any> {
  // undefined
    return this.client.getLoginProfile(...args).promise()
  }

  async getOpenIDConnectProvider(...args: any): Promise<any> {
  // undefined
    return this.client.getOpenIDConnectProvider(...args).promise()
  }

  async getOrganizationsAccessReport(...args: any): Promise<any> {
  // undefined
    return this.client.getOrganizationsAccessReport(...args).promise()
  }

  async getPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicy(...args).promise()
  }

  async getPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.getPolicyVersion(...args).promise()
  }

  async getRole(...args: any): Promise<any> {
  // undefined
    return this.client.getRole(...args).promise()
  }

  async getRolePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getRolePolicy(...args).promise()
  }

  async getSAMLProvider(...args: any): Promise<any> {
  // undefined
    return this.client.getSAMLProvider(...args).promise()
  }

  async getSSHPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.getSSHPublicKey(...args).promise()
  }

  async getServerCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.getServerCertificate(...args).promise()
  }

  async getServiceLastAccessedDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceLastAccessedDetails(...args).promise()
  }

  async getServiceLastAccessedDetailsWithEntities(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceLastAccessedDetailsWithEntities(...args).promise()
  }

  async getServiceLinkedRoleDeletionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceLinkedRoleDeletionStatus(...args).promise()
  }

  async getUser(...args: any): Promise<any> {
  // undefined
    return this.client.getUser(...args).promise()
  }

  async getUserPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getUserPolicy(...args).promise()
  }

  async listAccessKeys(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AccessKeyMetadata"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAccessKeys(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.AccessKeyMetadata ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAccountAliases(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AccountAliases"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAccountAliases(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.AccountAliases ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttachedGroupPolicies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AttachedPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAttachedGroupPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.AttachedPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttachedRolePolicies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AttachedPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAttachedRolePolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.AttachedPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAttachedUserPolicies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"AttachedPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listAttachedUserPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.AttachedPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEntitiesForPolicy(...args: any): Promise<any> {
  // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":["PolicyGroups","PolicyUsers","PolicyRoles"]}
    return this.client.listEntitiesForPolicy(...args).promise()
  }

  async listGroupPolicies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"PolicyNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listGroupPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.PolicyNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Groups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Groups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listGroupsForUser(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Groups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listGroupsForUser(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Groups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceProfileTags(...args: any): Promise<any> {
  // undefined
    return this.client.listInstanceProfileTags(...args).promise()
  }

  async listInstanceProfiles(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"InstanceProfiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listInstanceProfiles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.InstanceProfiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstanceProfilesForRole(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"InstanceProfiles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listInstanceProfilesForRole(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.InstanceProfiles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMFADeviceTags(...args: any): Promise<any> {
  // undefined
    return this.client.listMFADeviceTags(...args).promise()
  }

  async listMFADevices(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"MFADevices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listMFADevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.MFADevices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOpenIDConnectProviderTags(...args: any): Promise<any> {
  // undefined
    return this.client.listOpenIDConnectProviderTags(...args).promise()
  }

  async listOpenIDConnectProviders(...args: any): Promise<any> {
  // undefined
    return this.client.listOpenIDConnectProviders(...args).promise()
  }

  async listPolicies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Policies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Policies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPoliciesGrantingServiceAccess(...args: any): Promise<any> {
  // undefined
    return this.client.listPoliciesGrantingServiceAccess(...args).promise()
  }

  async listPolicyTags(...args: any): Promise<any> {
  // undefined
    return this.client.listPolicyTags(...args).promise()
  }

  async listPolicyVersions(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Versions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listPolicyVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Versions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRolePolicies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"PolicyNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listRolePolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.PolicyNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoleTags(...args: any): Promise<any> {
  // undefined
    return this.client.listRoleTags(...args).promise()
  }

  async listRoles(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Roles"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listRoles(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Roles ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSAMLProviderTags(...args: any): Promise<any> {
  // undefined
    return this.client.listSAMLProviderTags(...args).promise()
  }

  async listSAMLProviders(...args: any): Promise<any> {
  // {"resultKey":"SAMLProviderList"}
    return this.client.listSAMLProviders(...args).promise()
  }

  async listSSHPublicKeys(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"SSHPublicKeys"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listSSHPublicKeys(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.SSHPublicKeys ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServerCertificateTags(...args: any): Promise<any> {
  // undefined
    return this.client.listServerCertificateTags(...args).promise()
  }

  async listServerCertificates(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"ServerCertificateMetadataList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listServerCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.ServerCertificateMetadataList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceSpecificCredentials(...args: any): Promise<any> {
  // undefined
    return this.client.listServiceSpecificCredentials(...args).promise()
  }

  async listSigningCertificates(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Certificates"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listSigningCertificates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Certificates ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserPolicies(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"PolicyNames"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listUserPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.PolicyNames ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserTags(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listUserTags(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listVirtualMFADevices(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"VirtualMFADevices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listVirtualMFADevices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.VirtualMFADevices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putGroupPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putGroupPolicy(...args).promise()
  }

  async putRolePermissionsBoundary(...args: any): Promise<any> {
  // undefined
    return this.client.putRolePermissionsBoundary(...args).promise()
  }

  async putRolePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putRolePolicy(...args).promise()
  }

  async putUserPermissionsBoundary(...args: any): Promise<any> {
  // undefined
    return this.client.putUserPermissionsBoundary(...args).promise()
  }

  async putUserPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putUserPolicy(...args).promise()
  }

  async removeClientIDFromOpenIDConnectProvider(...args: any): Promise<any> {
  // undefined
    return this.client.removeClientIDFromOpenIDConnectProvider(...args).promise()
  }

  async removeRoleFromInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.removeRoleFromInstanceProfile(...args).promise()
  }

  async removeUserFromGroup(...args: any): Promise<any> {
  // undefined
    return this.client.removeUserFromGroup(...args).promise()
  }

  async resetServiceSpecificCredential(...args: any): Promise<any> {
  // undefined
    return this.client.resetServiceSpecificCredential(...args).promise()
  }

  async resyncMFADevice(...args: any): Promise<any> {
  // undefined
    return this.client.resyncMFADevice(...args).promise()
  }

  async setDefaultPolicyVersion(...args: any): Promise<any> {
  // undefined
    return this.client.setDefaultPolicyVersion(...args).promise()
  }

  async setSecurityTokenServicePreferences(...args: any): Promise<any> {
  // undefined
    return this.client.setSecurityTokenServicePreferences(...args).promise()
  }

  async simulateCustomPolicy(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"EvaluationResults"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.simulateCustomPolicy(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.EvaluationResults ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async simulatePrincipalPolicy(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","moreResults":"IsTruncated","outputToken":"Marker","resultKey":"EvaluationResults"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.simulatePrincipalPolicy(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.Marker;
    const member = result.EvaluationResults ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.tagInstanceProfile(...args).promise()
  }

  async tagMFADevice(...args: any): Promise<any> {
  // undefined
    return this.client.tagMFADevice(...args).promise()
  }

  async tagOpenIDConnectProvider(...args: any): Promise<any> {
  // undefined
    return this.client.tagOpenIDConnectProvider(...args).promise()
  }

  async tagPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.tagPolicy(...args).promise()
  }

  async tagRole(...args: any): Promise<any> {
  // undefined
    return this.client.tagRole(...args).promise()
  }

  async tagSAMLProvider(...args: any): Promise<any> {
  // undefined
    return this.client.tagSAMLProvider(...args).promise()
  }

  async tagServerCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.tagServerCertificate(...args).promise()
  }

  async tagUser(...args: any): Promise<any> {
  // undefined
    return this.client.tagUser(...args).promise()
  }

  async untagInstanceProfile(...args: any): Promise<any> {
  // undefined
    return this.client.untagInstanceProfile(...args).promise()
  }

  async untagMFADevice(...args: any): Promise<any> {
  // undefined
    return this.client.untagMFADevice(...args).promise()
  }

  async untagOpenIDConnectProvider(...args: any): Promise<any> {
  // undefined
    return this.client.untagOpenIDConnectProvider(...args).promise()
  }

  async untagPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.untagPolicy(...args).promise()
  }

  async untagRole(...args: any): Promise<any> {
  // undefined
    return this.client.untagRole(...args).promise()
  }

  async untagSAMLProvider(...args: any): Promise<any> {
  // undefined
    return this.client.untagSAMLProvider(...args).promise()
  }

  async untagServerCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.untagServerCertificate(...args).promise()
  }

  async untagUser(...args: any): Promise<any> {
  // undefined
    return this.client.untagUser(...args).promise()
  }

  async updateAccessKey(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccessKey(...args).promise()
  }

  async updateAccountPasswordPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateAccountPasswordPolicy(...args).promise()
  }

  async updateAssumeRolePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.updateAssumeRolePolicy(...args).promise()
  }

  async updateGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroup(...args).promise()
  }

  async updateLoginProfile(...args: any): Promise<any> {
  // undefined
    return this.client.updateLoginProfile(...args).promise()
  }

  async updateOpenIDConnectProviderThumbprint(...args: any): Promise<any> {
  // undefined
    return this.client.updateOpenIDConnectProviderThumbprint(...args).promise()
  }

  async updateRole(...args: any): Promise<any> {
  // undefined
    return this.client.updateRole(...args).promise()
  }

  async updateRoleDescription(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoleDescription(...args).promise()
  }

  async updateSAMLProvider(...args: any): Promise<any> {
  // undefined
    return this.client.updateSAMLProvider(...args).promise()
  }

  async updateSSHPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.updateSSHPublicKey(...args).promise()
  }

  async updateServerCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.updateServerCertificate(...args).promise()
  }

  async updateServiceSpecificCredential(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceSpecificCredential(...args).promise()
  }

  async updateSigningCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.updateSigningCertificate(...args).promise()
  }

  async updateUser(...args: any): Promise<any> {
  // undefined
    return this.client.updateUser(...args).promise()
  }

  async uploadSSHPublicKey(...args: any): Promise<any> {
  // undefined
    return this.client.uploadSSHPublicKey(...args).promise()
  }

  async uploadServerCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.uploadServerCertificate(...args).promise()
  }

  async uploadSigningCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.uploadSigningCertificate(...args).promise()
  }
  
  static fromClient(client: AWSIAM): ClientType {
    return new IAM(client) as any;
  }
  
  static client(options?: AWSIAM.Types.ClientConfiguration): ClientType {
    return new IAM(new AWSIAM(options)) as any;
  }
}  
