import { Request, CognitoIdentityServiceProvider as AWSCognitoIdentityServiceProvider } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCognitoIdentityServiceProvider> = AWSCognitoIdentityServiceProvider[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCognitoIdentityServiceProvider> = AWSCognitoIdentityServiceProvider[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCognitoIdentityServiceProvider[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCognitoIdentityServiceProvider, Extras> = AWSCognitoIdentityServiceProvider[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cognito-idp';
    global: false;
    category: 'Security, Identity & Compliance'
    topLevelCalls: readonly [];
    
  addCustomAttributes: FunctionTypeFrom<'addCustomAttributes'>;

  adminAddUserToGroup: FunctionTypeFrom<'adminAddUserToGroup'>;

  adminConfirmSignUp: FunctionTypeFrom<'adminConfirmSignUp'>;

  adminCreateUser: FunctionTypeFrom<'adminCreateUser'>;

  adminDeleteUser: FunctionTypeFrom<'adminDeleteUser'>;

  adminDeleteUserAttributes: FunctionTypeFrom<'adminDeleteUserAttributes'>;

  adminDisableProviderForUser: FunctionTypeFrom<'adminDisableProviderForUser'>;

  adminDisableUser: FunctionTypeFrom<'adminDisableUser'>;

  adminEnableUser: FunctionTypeFrom<'adminEnableUser'>;

  adminForgetDevice: FunctionTypeFrom<'adminForgetDevice'>;

  adminGetDevice: FunctionTypeFrom<'adminGetDevice'>;

  adminGetUser: FunctionTypeFrom<'adminGetUser'>;

  adminInitiateAuth: FunctionTypeFrom<'adminInitiateAuth'>;

  adminLinkProviderForUser: FunctionTypeFrom<'adminLinkProviderForUser'>;

  adminListDevices: FunctionTypeFrom<'adminListDevices'>;

  adminListGroupsForUser(params: { [K in keyof Omit<ParamsFrom<'adminListGroupsForUser', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'adminListGroupsForUser', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'adminListGroupsForUser'>]-?: ReturnTypeFrom<'adminListGroupsForUser'>[K]}['Groups'] }>
  ;

  adminListUserAuthEvents(params: { [K in keyof Omit<ParamsFrom<'adminListUserAuthEvents', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'adminListUserAuthEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'adminListUserAuthEvents'>]-?: ReturnTypeFrom<'adminListUserAuthEvents'>[K]}['AuthEvents'] }>
  ;

  adminRemoveUserFromGroup: FunctionTypeFrom<'adminRemoveUserFromGroup'>;

  adminResetUserPassword: FunctionTypeFrom<'adminResetUserPassword'>;

  adminRespondToAuthChallenge: FunctionTypeFrom<'adminRespondToAuthChallenge'>;

  adminSetUserMFAPreference: FunctionTypeFrom<'adminSetUserMFAPreference'>;

  adminSetUserPassword: FunctionTypeFrom<'adminSetUserPassword'>;

  adminSetUserSettings: FunctionTypeFrom<'adminSetUserSettings'>;

  adminUpdateAuthEventFeedback: FunctionTypeFrom<'adminUpdateAuthEventFeedback'>;

  adminUpdateDeviceStatus: FunctionTypeFrom<'adminUpdateDeviceStatus'>;

  adminUpdateUserAttributes: FunctionTypeFrom<'adminUpdateUserAttributes'>;

  adminUserGlobalSignOut: FunctionTypeFrom<'adminUserGlobalSignOut'>;

  associateSoftwareToken: FunctionTypeFrom<'associateSoftwareToken'>;

  changePassword: FunctionTypeFrom<'changePassword'>;

  confirmDevice: FunctionTypeFrom<'confirmDevice'>;

  confirmForgotPassword: FunctionTypeFrom<'confirmForgotPassword'>;

  confirmSignUp: FunctionTypeFrom<'confirmSignUp'>;

  createGroup: FunctionTypeFrom<'createGroup'>;

  createIdentityProvider: FunctionTypeFrom<'createIdentityProvider'>;

  createResourceServer: FunctionTypeFrom<'createResourceServer'>;

  createUserImportJob: FunctionTypeFrom<'createUserImportJob'>;

  createUserPool: FunctionTypeFrom<'createUserPool'>;

  createUserPoolClient: FunctionTypeFrom<'createUserPoolClient'>;

  createUserPoolDomain: FunctionTypeFrom<'createUserPoolDomain'>;

  deleteGroup: FunctionTypeFrom<'deleteGroup'>;

  deleteIdentityProvider: FunctionTypeFrom<'deleteIdentityProvider'>;

  deleteResourceServer: FunctionTypeFrom<'deleteResourceServer'>;

  deleteUser: FunctionTypeFrom<'deleteUser'>;

  deleteUserAttributes: FunctionTypeFrom<'deleteUserAttributes'>;

  deleteUserPool: FunctionTypeFrom<'deleteUserPool'>;

  deleteUserPoolClient: FunctionTypeFrom<'deleteUserPoolClient'>;

  deleteUserPoolDomain: FunctionTypeFrom<'deleteUserPoolDomain'>;

  describeIdentityProvider: FunctionTypeFrom<'describeIdentityProvider'>;

  describeResourceServer: FunctionTypeFrom<'describeResourceServer'>;

  describeRiskConfiguration: FunctionTypeFrom<'describeRiskConfiguration'>;

  describeUserImportJob: FunctionTypeFrom<'describeUserImportJob'>;

  describeUserPool: FunctionTypeFrom<'describeUserPool'>;

  describeUserPoolClient: FunctionTypeFrom<'describeUserPoolClient'>;

  describeUserPoolDomain: FunctionTypeFrom<'describeUserPoolDomain'>;

  forgetDevice: FunctionTypeFrom<'forgetDevice'>;

  forgotPassword: FunctionTypeFrom<'forgotPassword'>;

  getCSVHeader: FunctionTypeFrom<'getCSVHeader'>;

  getDevice: FunctionTypeFrom<'getDevice'>;

  getGroup: FunctionTypeFrom<'getGroup'>;

  getIdentityProviderByIdentifier: FunctionTypeFrom<'getIdentityProviderByIdentifier'>;

  getSigningCertificate: FunctionTypeFrom<'getSigningCertificate'>;

  getUICustomization: FunctionTypeFrom<'getUICustomization'>;

  getUser: FunctionTypeFrom<'getUser'>;

  getUserAttributeVerificationCode: FunctionTypeFrom<'getUserAttributeVerificationCode'>;

  getUserPoolMfaConfig: FunctionTypeFrom<'getUserPoolMfaConfig'>;

  globalSignOut: FunctionTypeFrom<'globalSignOut'>;

  initiateAuth: FunctionTypeFrom<'initiateAuth'>;

  listDevices: FunctionTypeFrom<'listDevices'>;

  listGroups(params: { [K in keyof Omit<ParamsFrom<'listGroups', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['Groups'] }>
  ;

  listIdentityProviders(params: { [K in keyof Omit<ParamsFrom<'listIdentityProviders', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listIdentityProviders', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIdentityProviders'>]-?: ReturnTypeFrom<'listIdentityProviders'>[K]}['Providers'] }>
  ;

  listResourceServers(params: { [K in keyof Omit<ParamsFrom<'listResourceServers', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResourceServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourceServers'>]-?: ReturnTypeFrom<'listResourceServers'>[K]}['ResourceServers'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listUserImportJobs: FunctionTypeFrom<'listUserImportJobs'>;

  listUserPoolClients(params: { [K in keyof Omit<ParamsFrom<'listUserPoolClients', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUserPoolClients', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUserPoolClients'>]-?: ReturnTypeFrom<'listUserPoolClients'>[K]}['UserPoolClients'] }>
  ;

  listUserPools(params: { [K in keyof Omit<ParamsFrom<'listUserPools', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUserPools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUserPools'>]-?: ReturnTypeFrom<'listUserPools'>[K]}['UserPools'] }>
  ;

  listUsers(params: { [K in keyof Omit<ParamsFrom<'listUsers', { next?: string, limit?: number }>, 'PaginationToken' | 'Limit'>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'] }>
  ;

  listUsersInGroup(params: { [K in keyof Omit<ParamsFrom<'listUsersInGroup', { next?: string, limit?: number }>, 'NextToken' | 'Limit'>]: ParamsFrom<'listUsersInGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUsersInGroup'>]-?: ReturnTypeFrom<'listUsersInGroup'>[K]}['Users'] }>
  ;

  resendConfirmationCode: FunctionTypeFrom<'resendConfirmationCode'>;

  respondToAuthChallenge: FunctionTypeFrom<'respondToAuthChallenge'>;

  revokeToken: FunctionTypeFrom<'revokeToken'>;

  setRiskConfiguration: FunctionTypeFrom<'setRiskConfiguration'>;

  setUICustomization: FunctionTypeFrom<'setUICustomization'>;

  setUserMFAPreference: FunctionTypeFrom<'setUserMFAPreference'>;

  setUserPoolMfaConfig: FunctionTypeFrom<'setUserPoolMfaConfig'>;

  setUserSettings: FunctionTypeFrom<'setUserSettings'>;

  signUp: FunctionTypeFrom<'signUp'>;

  startUserImportJob: FunctionTypeFrom<'startUserImportJob'>;

  stopUserImportJob: FunctionTypeFrom<'stopUserImportJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAuthEventFeedback: FunctionTypeFrom<'updateAuthEventFeedback'>;

  updateDeviceStatus: FunctionTypeFrom<'updateDeviceStatus'>;

  updateGroup: FunctionTypeFrom<'updateGroup'>;

  updateIdentityProvider: FunctionTypeFrom<'updateIdentityProvider'>;

  updateResourceServer: FunctionTypeFrom<'updateResourceServer'>;

  updateUserAttributes: FunctionTypeFrom<'updateUserAttributes'>;

  updateUserPool: FunctionTypeFrom<'updateUserPool'>;

  updateUserPoolClient: FunctionTypeFrom<'updateUserPoolClient'>;

  updateUserPoolDomain: FunctionTypeFrom<'updateUserPoolDomain'>;

  verifySoftwareToken: FunctionTypeFrom<'verifySoftwareToken'>;

  verifyUserAttribute: FunctionTypeFrom<'verifyUserAttribute'>
}
 
export class CognitoIdentityServiceProvider implements ClientType {
  private constructor(private readonly client: AWSCognitoIdentityServiceProvider) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cognito-idp';
  public readonly global = false;
  public readonly category = 'Security, Identity & Compliance';
  public readonly topLevelCalls = [] as const;
  
  async addCustomAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.addCustomAttributes(...args).promise()
  }

  async adminAddUserToGroup(...args: any): Promise<any> {
  // undefined
    return this.client.adminAddUserToGroup(...args).promise()
  }

  async adminConfirmSignUp(...args: any): Promise<any> {
  // undefined
    return this.client.adminConfirmSignUp(...args).promise()
  }

  async adminCreateUser(...args: any): Promise<any> {
  // undefined
    return this.client.adminCreateUser(...args).promise()
  }

  async adminDeleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.adminDeleteUser(...args).promise()
  }

  async adminDeleteUserAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.adminDeleteUserAttributes(...args).promise()
  }

  async adminDisableProviderForUser(...args: any): Promise<any> {
  // undefined
    return this.client.adminDisableProviderForUser(...args).promise()
  }

  async adminDisableUser(...args: any): Promise<any> {
  // undefined
    return this.client.adminDisableUser(...args).promise()
  }

  async adminEnableUser(...args: any): Promise<any> {
  // undefined
    return this.client.adminEnableUser(...args).promise()
  }

  async adminForgetDevice(...args: any): Promise<any> {
  // undefined
    return this.client.adminForgetDevice(...args).promise()
  }

  async adminGetDevice(...args: any): Promise<any> {
  // undefined
    return this.client.adminGetDevice(...args).promise()
  }

  async adminGetUser(...args: any): Promise<any> {
  // undefined
    return this.client.adminGetUser(...args).promise()
  }

  async adminInitiateAuth(...args: any): Promise<any> {
  // undefined
    return this.client.adminInitiateAuth(...args).promise()
  }

  async adminLinkProviderForUser(...args: any): Promise<any> {
  // undefined
    return this.client.adminLinkProviderForUser(...args).promise()
  }

  async adminListDevices(...args: any): Promise<any> {
  // undefined
    return this.client.adminListDevices(...args).promise()
  }

  async adminListGroupsForUser(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Groups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.adminListGroupsForUser(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Groups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async adminListUserAuthEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AuthEvents"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.adminListUserAuthEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AuthEvents ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async adminRemoveUserFromGroup(...args: any): Promise<any> {
  // undefined
    return this.client.adminRemoveUserFromGroup(...args).promise()
  }

  async adminResetUserPassword(...args: any): Promise<any> {
  // undefined
    return this.client.adminResetUserPassword(...args).promise()
  }

  async adminRespondToAuthChallenge(...args: any): Promise<any> {
  // undefined
    return this.client.adminRespondToAuthChallenge(...args).promise()
  }

  async adminSetUserMFAPreference(...args: any): Promise<any> {
  // undefined
    return this.client.adminSetUserMFAPreference(...args).promise()
  }

  async adminSetUserPassword(...args: any): Promise<any> {
  // undefined
    return this.client.adminSetUserPassword(...args).promise()
  }

  async adminSetUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.adminSetUserSettings(...args).promise()
  }

  async adminUpdateAuthEventFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.adminUpdateAuthEventFeedback(...args).promise()
  }

  async adminUpdateDeviceStatus(...args: any): Promise<any> {
  // undefined
    return this.client.adminUpdateDeviceStatus(...args).promise()
  }

  async adminUpdateUserAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.adminUpdateUserAttributes(...args).promise()
  }

  async adminUserGlobalSignOut(...args: any): Promise<any> {
  // undefined
    return this.client.adminUserGlobalSignOut(...args).promise()
  }

  async associateSoftwareToken(...args: any): Promise<any> {
  // undefined
    return this.client.associateSoftwareToken(...args).promise()
  }

  async changePassword(...args: any): Promise<any> {
  // undefined
    return this.client.changePassword(...args).promise()
  }

  async confirmDevice(...args: any): Promise<any> {
  // undefined
    return this.client.confirmDevice(...args).promise()
  }

  async confirmForgotPassword(...args: any): Promise<any> {
  // undefined
    return this.client.confirmForgotPassword(...args).promise()
  }

  async confirmSignUp(...args: any): Promise<any> {
  // undefined
    return this.client.confirmSignUp(...args).promise()
  }

  async createGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createGroup(...args).promise()
  }

  async createIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.createIdentityProvider(...args).promise()
  }

  async createResourceServer(...args: any): Promise<any> {
  // undefined
    return this.client.createResourceServer(...args).promise()
  }

  async createUserImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.createUserImportJob(...args).promise()
  }

  async createUserPool(...args: any): Promise<any> {
  // undefined
    return this.client.createUserPool(...args).promise()
  }

  async createUserPoolClient(...args: any): Promise<any> {
  // undefined
    return this.client.createUserPoolClient(...args).promise()
  }

  async createUserPoolDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createUserPoolDomain(...args).promise()
  }

  async deleteGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteGroup(...args).promise()
  }

  async deleteIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIdentityProvider(...args).promise()
  }

  async deleteResourceServer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourceServer(...args).promise()
  }

  async deleteUser(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUser(...args).promise()
  }

  async deleteUserAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserAttributes(...args).promise()
  }

  async deleteUserPool(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserPool(...args).promise()
  }

  async deleteUserPoolClient(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserPoolClient(...args).promise()
  }

  async deleteUserPoolDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteUserPoolDomain(...args).promise()
  }

  async describeIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.describeIdentityProvider(...args).promise()
  }

  async describeResourceServer(...args: any): Promise<any> {
  // undefined
    return this.client.describeResourceServer(...args).promise()
  }

  async describeRiskConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.describeRiskConfiguration(...args).promise()
  }

  async describeUserImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserImportJob(...args).promise()
  }

  async describeUserPool(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserPool(...args).promise()
  }

  async describeUserPoolClient(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserPoolClient(...args).promise()
  }

  async describeUserPoolDomain(...args: any): Promise<any> {
  // undefined
    return this.client.describeUserPoolDomain(...args).promise()
  }

  async forgetDevice(...args: any): Promise<any> {
  // undefined
    return this.client.forgetDevice(...args).promise()
  }

  async forgotPassword(...args: any): Promise<any> {
  // undefined
    return this.client.forgotPassword(...args).promise()
  }

  async getCSVHeader(...args: any): Promise<any> {
  // undefined
    return this.client.getCSVHeader(...args).promise()
  }

  async getDevice(...args: any): Promise<any> {
  // undefined
    return this.client.getDevice(...args).promise()
  }

  async getGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getGroup(...args).promise()
  }

  async getIdentityProviderByIdentifier(...args: any): Promise<any> {
  // undefined
    return this.client.getIdentityProviderByIdentifier(...args).promise()
  }

  async getSigningCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.getSigningCertificate(...args).promise()
  }

  async getUICustomization(...args: any): Promise<any> {
  // undefined
    return this.client.getUICustomization(...args).promise()
  }

  async getUser(...args: any): Promise<any> {
  // undefined
    return this.client.getUser(...args).promise()
  }

  async getUserAttributeVerificationCode(...args: any): Promise<any> {
  // undefined
    return this.client.getUserAttributeVerificationCode(...args).promise()
  }

  async getUserPoolMfaConfig(...args: any): Promise<any> {
  // undefined
    return this.client.getUserPoolMfaConfig(...args).promise()
  }

  async globalSignOut(...args: any): Promise<any> {
  // undefined
    return this.client.globalSignOut(...args).promise()
  }

  async initiateAuth(...args: any): Promise<any> {
  // undefined
    return this.client.initiateAuth(...args).promise()
  }

  async listDevices(...args: any): Promise<any> {
  // undefined
    return this.client.listDevices(...args).promise()
  }

  async listGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Groups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Groups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIdentityProviders(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Providers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIdentityProviders(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Providers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceServers(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceServers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceServers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ResourceServers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async listUserImportJobs(...args: any): Promise<any> {
  // undefined
    return this.client.listUserImportJobs(...args).promise()
  }

  async listUserPoolClients(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserPoolClients"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserPoolClients(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.UserPoolClients ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserPools(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserPools"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserPools(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.UserPools ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(...args: any): Promise<any> {
    // {"inputToken":"PaginationToken","limitKey":"Limit","outputToken":"PaginationToken","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { PaginationToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listUsers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.PaginationToken;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsersInGroup(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Users"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listUsersInGroup(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Users ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async resendConfirmationCode(...args: any): Promise<any> {
  // undefined
    return this.client.resendConfirmationCode(...args).promise()
  }

  async respondToAuthChallenge(...args: any): Promise<any> {
  // undefined
    return this.client.respondToAuthChallenge(...args).promise()
  }

  async revokeToken(...args: any): Promise<any> {
  // undefined
    return this.client.revokeToken(...args).promise()
  }

  async setRiskConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.setRiskConfiguration(...args).promise()
  }

  async setUICustomization(...args: any): Promise<any> {
  // undefined
    return this.client.setUICustomization(...args).promise()
  }

  async setUserMFAPreference(...args: any): Promise<any> {
  // undefined
    return this.client.setUserMFAPreference(...args).promise()
  }

  async setUserPoolMfaConfig(...args: any): Promise<any> {
  // undefined
    return this.client.setUserPoolMfaConfig(...args).promise()
  }

  async setUserSettings(...args: any): Promise<any> {
  // undefined
    return this.client.setUserSettings(...args).promise()
  }

  async signUp(...args: any): Promise<any> {
  // undefined
    return this.client.signUp(...args).promise()
  }

  async startUserImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.startUserImportJob(...args).promise()
  }

  async stopUserImportJob(...args: any): Promise<any> {
  // undefined
    return this.client.stopUserImportJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAuthEventFeedback(...args: any): Promise<any> {
  // undefined
    return this.client.updateAuthEventFeedback(...args).promise()
  }

  async updateDeviceStatus(...args: any): Promise<any> {
  // undefined
    return this.client.updateDeviceStatus(...args).promise()
  }

  async updateGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateGroup(...args).promise()
  }

  async updateIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.updateIdentityProvider(...args).promise()
  }

  async updateResourceServer(...args: any): Promise<any> {
  // undefined
    return this.client.updateResourceServer(...args).promise()
  }

  async updateUserAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserAttributes(...args).promise()
  }

  async updateUserPool(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserPool(...args).promise()
  }

  async updateUserPoolClient(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserPoolClient(...args).promise()
  }

  async updateUserPoolDomain(...args: any): Promise<any> {
  // undefined
    return this.client.updateUserPoolDomain(...args).promise()
  }

  async verifySoftwareToken(...args: any): Promise<any> {
  // undefined
    return this.client.verifySoftwareToken(...args).promise()
  }

  async verifyUserAttribute(...args: any): Promise<any> {
  // undefined
    return this.client.verifyUserAttribute(...args).promise()
  }
  
  static fromClient(client: AWSCognitoIdentityServiceProvider): ClientType {
    return new CognitoIdentityServiceProvider(client) as any;
  }
  
  static client(options?: AWSCognitoIdentityServiceProvider.Types.ClientConfiguration): ClientType {
    return new CognitoIdentityServiceProvider(new AWSCognitoIdentityServiceProvider(options)) as any;
  }
}  
