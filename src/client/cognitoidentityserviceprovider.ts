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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCognitoIdentityServiceProvider> = AWSCognitoIdentityServiceProvider[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CognitoIdentityServiceProvider {
  private constructor(private readonly client: AWSCognitoIdentityServiceProvider) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cognito-idp' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = [] as const;
  
  addCustomAttributes: (params: RawParamsFrom<'addCustomAttributes'>) => Promise<ReturnTypeFrom<'addCustomAttributes'>>  = async params => {
  // undefined
    return this.client.addCustomAttributes(params as any).promise();
  }

  adminAddUserToGroup: (params: RawParamsFrom<'adminAddUserToGroup'>) => Promise<ReturnTypeFrom<'adminAddUserToGroup'>>  = async params => {
  // undefined
    return this.client.adminAddUserToGroup(params as any).promise();
  }

  adminConfirmSignUp: (params: RawParamsFrom<'adminConfirmSignUp'>) => Promise<ReturnTypeFrom<'adminConfirmSignUp'>>  = async params => {
  // undefined
    return this.client.adminConfirmSignUp(params as any).promise();
  }

  adminCreateUser: (params: RawParamsFrom<'adminCreateUser'>) => Promise<ReturnTypeFrom<'adminCreateUser'>>  = async params => {
  // undefined
    return this.client.adminCreateUser(params as any).promise();
  }

  adminDeleteUser: (params: RawParamsFrom<'adminDeleteUser'>) => Promise<ReturnTypeFrom<'adminDeleteUser'>>  = async params => {
  // undefined
    return this.client.adminDeleteUser(params as any).promise();
  }

  adminDeleteUserAttributes: (params: RawParamsFrom<'adminDeleteUserAttributes'>) => Promise<ReturnTypeFrom<'adminDeleteUserAttributes'>>  = async params => {
  // undefined
    return this.client.adminDeleteUserAttributes(params as any).promise();
  }

  adminDisableProviderForUser: (params: RawParamsFrom<'adminDisableProviderForUser'>) => Promise<ReturnTypeFrom<'adminDisableProviderForUser'>>  = async params => {
  // undefined
    return this.client.adminDisableProviderForUser(params as any).promise();
  }

  adminDisableUser: (params: RawParamsFrom<'adminDisableUser'>) => Promise<ReturnTypeFrom<'adminDisableUser'>>  = async params => {
  // undefined
    return this.client.adminDisableUser(params as any).promise();
  }

  adminEnableUser: (params: RawParamsFrom<'adminEnableUser'>) => Promise<ReturnTypeFrom<'adminEnableUser'>>  = async params => {
  // undefined
    return this.client.adminEnableUser(params as any).promise();
  }

  adminForgetDevice: (params: RawParamsFrom<'adminForgetDevice'>) => Promise<ReturnTypeFrom<'adminForgetDevice'>>  = async params => {
  // undefined
    return this.client.adminForgetDevice(params as any).promise();
  }

  adminGetDevice: (params: RawParamsFrom<'adminGetDevice'>) => Promise<ReturnTypeFrom<'adminGetDevice'>>  = async params => {
  // undefined
    return this.client.adminGetDevice(params as any).promise();
  }

  adminGetUser: (params: RawParamsFrom<'adminGetUser'>) => Promise<ReturnTypeFrom<'adminGetUser'>>  = async params => {
  // undefined
    return this.client.adminGetUser(params as any).promise();
  }

  adminInitiateAuth: (params: RawParamsFrom<'adminInitiateAuth'>) => Promise<ReturnTypeFrom<'adminInitiateAuth'>>  = async params => {
  // undefined
    return this.client.adminInitiateAuth(params as any).promise();
  }

  adminLinkProviderForUser: (params: RawParamsFrom<'adminLinkProviderForUser'>) => Promise<ReturnTypeFrom<'adminLinkProviderForUser'>>  = async params => {
  // undefined
    return this.client.adminLinkProviderForUser(params as any).promise();
  }

  adminListDevices: (params: RawParamsFrom<'adminListDevices'>) => Promise<ReturnTypeFrom<'adminListDevices'>>  = async params => {
  // undefined
    return this.client.adminListDevices(params as any).promise();
  }

  async adminListGroupsForUser(params: { [K in keyof ParamsFrom<'adminListGroupsForUser', { next?: string, limit?: number }>]: ParamsFrom<'adminListGroupsForUser', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'adminListGroupsForUser'>]-?: ReturnTypeFrom<'adminListGroupsForUser'>[K]}['Groups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Groups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.adminListGroupsForUser({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'adminListGroupsForUser' })).toString('base64');
    const member = (Array.isArray(result.Groups ?? []) ? (result.Groups ?? []) : [result.Groups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async adminListUserAuthEvents(params: { [K in keyof ParamsFrom<'adminListUserAuthEvents', { next?: string, limit?: number }>]: ParamsFrom<'adminListUserAuthEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'adminListUserAuthEvents'>]-?: ReturnTypeFrom<'adminListUserAuthEvents'>[K]}['AuthEvents'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AuthEvents"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.adminListUserAuthEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'adminListUserAuthEvents' })).toString('base64');
    const member = (Array.isArray(result.AuthEvents ?? []) ? (result.AuthEvents ?? []) : [result.AuthEvents]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  adminRemoveUserFromGroup: (params: RawParamsFrom<'adminRemoveUserFromGroup'>) => Promise<ReturnTypeFrom<'adminRemoveUserFromGroup'>>  = async params => {
  // undefined
    return this.client.adminRemoveUserFromGroup(params as any).promise();
  }

  adminResetUserPassword: (params: RawParamsFrom<'adminResetUserPassword'>) => Promise<ReturnTypeFrom<'adminResetUserPassword'>>  = async params => {
  // undefined
    return this.client.adminResetUserPassword(params as any).promise();
  }

  adminRespondToAuthChallenge: (params: RawParamsFrom<'adminRespondToAuthChallenge'>) => Promise<ReturnTypeFrom<'adminRespondToAuthChallenge'>>  = async params => {
  // undefined
    return this.client.adminRespondToAuthChallenge(params as any).promise();
  }

  adminSetUserMFAPreference: (params: RawParamsFrom<'adminSetUserMFAPreference'>) => Promise<ReturnTypeFrom<'adminSetUserMFAPreference'>>  = async params => {
  // undefined
    return this.client.adminSetUserMFAPreference(params as any).promise();
  }

  adminSetUserPassword: (params: RawParamsFrom<'adminSetUserPassword'>) => Promise<ReturnTypeFrom<'adminSetUserPassword'>>  = async params => {
  // undefined
    return this.client.adminSetUserPassword(params as any).promise();
  }

  adminSetUserSettings: (params: RawParamsFrom<'adminSetUserSettings'>) => Promise<ReturnTypeFrom<'adminSetUserSettings'>>  = async params => {
  // undefined
    return this.client.adminSetUserSettings(params as any).promise();
  }

  adminUpdateAuthEventFeedback: (params: RawParamsFrom<'adminUpdateAuthEventFeedback'>) => Promise<ReturnTypeFrom<'adminUpdateAuthEventFeedback'>>  = async params => {
  // undefined
    return this.client.adminUpdateAuthEventFeedback(params as any).promise();
  }

  adminUpdateDeviceStatus: (params: RawParamsFrom<'adminUpdateDeviceStatus'>) => Promise<ReturnTypeFrom<'adminUpdateDeviceStatus'>>  = async params => {
  // undefined
    return this.client.adminUpdateDeviceStatus(params as any).promise();
  }

  adminUpdateUserAttributes: (params: RawParamsFrom<'adminUpdateUserAttributes'>) => Promise<ReturnTypeFrom<'adminUpdateUserAttributes'>>  = async params => {
  // undefined
    return this.client.adminUpdateUserAttributes(params as any).promise();
  }

  adminUserGlobalSignOut: (params: RawParamsFrom<'adminUserGlobalSignOut'>) => Promise<ReturnTypeFrom<'adminUserGlobalSignOut'>>  = async params => {
  // undefined
    return this.client.adminUserGlobalSignOut(params as any).promise();
  }

  associateSoftwareToken: (params: RawParamsFrom<'associateSoftwareToken'>) => Promise<ReturnTypeFrom<'associateSoftwareToken'>>  = async params => {
  // undefined
    return this.client.associateSoftwareToken(params as any).promise();
  }

  changePassword: (params: RawParamsFrom<'changePassword'>) => Promise<ReturnTypeFrom<'changePassword'>>  = async params => {
  // undefined
    return this.client.changePassword(params as any).promise();
  }

  confirmDevice: (params: RawParamsFrom<'confirmDevice'>) => Promise<ReturnTypeFrom<'confirmDevice'>>  = async params => {
  // undefined
    return this.client.confirmDevice(params as any).promise();
  }

  confirmForgotPassword: (params: RawParamsFrom<'confirmForgotPassword'>) => Promise<ReturnTypeFrom<'confirmForgotPassword'>>  = async params => {
  // undefined
    return this.client.confirmForgotPassword(params as any).promise();
  }

  confirmSignUp: (params: RawParamsFrom<'confirmSignUp'>) => Promise<ReturnTypeFrom<'confirmSignUp'>>  = async params => {
  // undefined
    return this.client.confirmSignUp(params as any).promise();
  }

  createGroup: (params: RawParamsFrom<'createGroup'>) => Promise<ReturnTypeFrom<'createGroup'>>  = async params => {
  // undefined
    return this.client.createGroup(params as any).promise();
  }

  createIdentityProvider: (params: RawParamsFrom<'createIdentityProvider'>) => Promise<ReturnTypeFrom<'createIdentityProvider'>>  = async params => {
  // undefined
    return this.client.createIdentityProvider(params as any).promise();
  }

  createResourceServer: (params: RawParamsFrom<'createResourceServer'>) => Promise<ReturnTypeFrom<'createResourceServer'>>  = async params => {
  // undefined
    return this.client.createResourceServer(params as any).promise();
  }

  createUserImportJob: (params: RawParamsFrom<'createUserImportJob'>) => Promise<ReturnTypeFrom<'createUserImportJob'>>  = async params => {
  // undefined
    return this.client.createUserImportJob(params as any).promise();
  }

  createUserPool: (params: RawParamsFrom<'createUserPool'>) => Promise<ReturnTypeFrom<'createUserPool'>>  = async params => {
  // undefined
    return this.client.createUserPool(params as any).promise();
  }

  createUserPoolClient: (params: RawParamsFrom<'createUserPoolClient'>) => Promise<ReturnTypeFrom<'createUserPoolClient'>>  = async params => {
  // undefined
    return this.client.createUserPoolClient(params as any).promise();
  }

  createUserPoolDomain: (params: RawParamsFrom<'createUserPoolDomain'>) => Promise<ReturnTypeFrom<'createUserPoolDomain'>>  = async params => {
  // undefined
    return this.client.createUserPoolDomain(params as any).promise();
  }

  deleteGroup: (params: RawParamsFrom<'deleteGroup'>) => Promise<ReturnTypeFrom<'deleteGroup'>>  = async params => {
  // undefined
    return this.client.deleteGroup(params as any).promise();
  }

  deleteIdentityProvider: (params: RawParamsFrom<'deleteIdentityProvider'>) => Promise<ReturnTypeFrom<'deleteIdentityProvider'>>  = async params => {
  // undefined
    return this.client.deleteIdentityProvider(params as any).promise();
  }

  deleteResourceServer: (params: RawParamsFrom<'deleteResourceServer'>) => Promise<ReturnTypeFrom<'deleteResourceServer'>>  = async params => {
  // undefined
    return this.client.deleteResourceServer(params as any).promise();
  }

  deleteUser: (params: RawParamsFrom<'deleteUser'>) => Promise<ReturnTypeFrom<'deleteUser'>>  = async params => {
  // undefined
    return this.client.deleteUser(params as any).promise();
  }

  deleteUserAttributes: (params: RawParamsFrom<'deleteUserAttributes'>) => Promise<ReturnTypeFrom<'deleteUserAttributes'>>  = async params => {
  // undefined
    return this.client.deleteUserAttributes(params as any).promise();
  }

  deleteUserPool: (params: RawParamsFrom<'deleteUserPool'>) => Promise<ReturnTypeFrom<'deleteUserPool'>>  = async params => {
  // undefined
    return this.client.deleteUserPool(params as any).promise();
  }

  deleteUserPoolClient: (params: RawParamsFrom<'deleteUserPoolClient'>) => Promise<ReturnTypeFrom<'deleteUserPoolClient'>>  = async params => {
  // undefined
    return this.client.deleteUserPoolClient(params as any).promise();
  }

  deleteUserPoolDomain: (params: RawParamsFrom<'deleteUserPoolDomain'>) => Promise<ReturnTypeFrom<'deleteUserPoolDomain'>>  = async params => {
  // undefined
    return this.client.deleteUserPoolDomain(params as any).promise();
  }

  describeIdentityProvider: (params: RawParamsFrom<'describeIdentityProvider'>) => Promise<ReturnTypeFrom<'describeIdentityProvider'>>  = async params => {
  // undefined
    return this.client.describeIdentityProvider(params as any).promise();
  }

  describeResourceServer: (params: RawParamsFrom<'describeResourceServer'>) => Promise<ReturnTypeFrom<'describeResourceServer'>>  = async params => {
  // undefined
    return this.client.describeResourceServer(params as any).promise();
  }

  describeRiskConfiguration: (params: RawParamsFrom<'describeRiskConfiguration'>) => Promise<ReturnTypeFrom<'describeRiskConfiguration'>>  = async params => {
  // undefined
    return this.client.describeRiskConfiguration(params as any).promise();
  }

  describeUserImportJob: (params: RawParamsFrom<'describeUserImportJob'>) => Promise<ReturnTypeFrom<'describeUserImportJob'>>  = async params => {
  // undefined
    return this.client.describeUserImportJob(params as any).promise();
  }

  describeUserPool: (params: RawParamsFrom<'describeUserPool'>) => Promise<ReturnTypeFrom<'describeUserPool'>>  = async params => {
  // undefined
    return this.client.describeUserPool(params as any).promise();
  }

  describeUserPoolClient: (params: RawParamsFrom<'describeUserPoolClient'>) => Promise<ReturnTypeFrom<'describeUserPoolClient'>>  = async params => {
  // undefined
    return this.client.describeUserPoolClient(params as any).promise();
  }

  describeUserPoolDomain: (params: RawParamsFrom<'describeUserPoolDomain'>) => Promise<ReturnTypeFrom<'describeUserPoolDomain'>>  = async params => {
  // undefined
    return this.client.describeUserPoolDomain(params as any).promise();
  }

  forgetDevice: (params: RawParamsFrom<'forgetDevice'>) => Promise<ReturnTypeFrom<'forgetDevice'>>  = async params => {
  // undefined
    return this.client.forgetDevice(params as any).promise();
  }

  forgotPassword: (params: RawParamsFrom<'forgotPassword'>) => Promise<ReturnTypeFrom<'forgotPassword'>>  = async params => {
  // undefined
    return this.client.forgotPassword(params as any).promise();
  }

  getCSVHeader: (params: RawParamsFrom<'getCSVHeader'>) => Promise<ReturnTypeFrom<'getCSVHeader'>>  = async params => {
  // undefined
    return this.client.getCSVHeader(params as any).promise();
  }

  getDevice: (params: RawParamsFrom<'getDevice'>) => Promise<ReturnTypeFrom<'getDevice'>>  = async params => {
  // undefined
    return this.client.getDevice(params as any).promise();
  }

  getGroup: (params: RawParamsFrom<'getGroup'>) => Promise<ReturnTypeFrom<'getGroup'>>  = async params => {
  // undefined
    return this.client.getGroup(params as any).promise();
  }

  getIdentityProviderByIdentifier: (params: RawParamsFrom<'getIdentityProviderByIdentifier'>) => Promise<ReturnTypeFrom<'getIdentityProviderByIdentifier'>>  = async params => {
  // undefined
    return this.client.getIdentityProviderByIdentifier(params as any).promise();
  }

  getSigningCertificate: (params: RawParamsFrom<'getSigningCertificate'>) => Promise<ReturnTypeFrom<'getSigningCertificate'>>  = async params => {
  // undefined
    return this.client.getSigningCertificate(params as any).promise();
  }

  getUICustomization: (params: RawParamsFrom<'getUICustomization'>) => Promise<ReturnTypeFrom<'getUICustomization'>>  = async params => {
  // undefined
    return this.client.getUICustomization(params as any).promise();
  }

  getUser: (params: RawParamsFrom<'getUser'>) => Promise<ReturnTypeFrom<'getUser'>>  = async params => {
  // undefined
    return this.client.getUser(params as any).promise();
  }

  getUserAttributeVerificationCode: (params: RawParamsFrom<'getUserAttributeVerificationCode'>) => Promise<ReturnTypeFrom<'getUserAttributeVerificationCode'>>  = async params => {
  // undefined
    return this.client.getUserAttributeVerificationCode(params as any).promise();
  }

  getUserPoolMfaConfig: (params: RawParamsFrom<'getUserPoolMfaConfig'>) => Promise<ReturnTypeFrom<'getUserPoolMfaConfig'>>  = async params => {
  // undefined
    return this.client.getUserPoolMfaConfig(params as any).promise();
  }

  globalSignOut: (params: RawParamsFrom<'globalSignOut'>) => Promise<ReturnTypeFrom<'globalSignOut'>>  = async params => {
  // undefined
    return this.client.globalSignOut(params as any).promise();
  }

  initiateAuth: (params: RawParamsFrom<'initiateAuth'>) => Promise<ReturnTypeFrom<'initiateAuth'>>  = async params => {
  // undefined
    return this.client.initiateAuth(params as any).promise();
  }

  listDevices: (params: RawParamsFrom<'listDevices'>) => Promise<ReturnTypeFrom<'listDevices'>>  = async params => {
  // undefined
    return this.client.listDevices(params as any).promise();
  }

  async listGroups(params: { [K in keyof ParamsFrom<'listGroups', { next?: string, limit?: number }>]: ParamsFrom<'listGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listGroups'>]-?: ReturnTypeFrom<'listGroups'>[K]}['Groups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Groups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listGroups' })).toString('base64');
    const member = (Array.isArray(result.Groups ?? []) ? (result.Groups ?? []) : [result.Groups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIdentityProviders(params: { [K in keyof ParamsFrom<'listIdentityProviders', { next?: string, limit?: number }>]: ParamsFrom<'listIdentityProviders', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIdentityProviders'>]-?: ReturnTypeFrom<'listIdentityProviders'>[K]}['Providers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Providers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIdentityProviders({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listIdentityProviders' })).toString('base64');
    const member = (Array.isArray(result.Providers ?? []) ? (result.Providers ?? []) : [result.Providers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourceServers(params: { [K in keyof ParamsFrom<'listResourceServers', { next?: string, limit?: number }>]: ParamsFrom<'listResourceServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourceServers'>]-?: ReturnTypeFrom<'listResourceServers'>[K]}['ResourceServers'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ResourceServers"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourceServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResourceServers' })).toString('base64');
    const member = (Array.isArray(result.ResourceServers ?? []) ? (result.ResourceServers ?? []) : [result.ResourceServers]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  listUserImportJobs: (params: RawParamsFrom<'listUserImportJobs'>) => Promise<ReturnTypeFrom<'listUserImportJobs'>>  = async params => {
  // undefined
    return this.client.listUserImportJobs(params as any).promise();
  }

  async listUserPoolClients(params: { [K in keyof ParamsFrom<'listUserPoolClients', { next?: string, limit?: number }>]: ParamsFrom<'listUserPoolClients', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUserPoolClients'>]-?: ReturnTypeFrom<'listUserPoolClients'>[K]}['UserPoolClients'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserPoolClients"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserPoolClients({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listUserPoolClients' })).toString('base64');
    const member = (Array.isArray(result.UserPoolClients ?? []) ? (result.UserPoolClients ?? []) : [result.UserPoolClients]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserPools(params: { [K in keyof ParamsFrom<'listUserPools', { next?: string, limit?: number }>]: ParamsFrom<'listUserPools', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUserPools'>]-?: ReturnTypeFrom<'listUserPools'>[K]}['UserPools'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"UserPools"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserPools({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listUserPools' })).toString('base64');
    const member = (Array.isArray(result.UserPools ?? []) ? (result.UserPools ?? []) : [result.UserPools]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsers(params: { [K in keyof ParamsFrom<'listUsers', { next?: string, limit?: number }>]: ParamsFrom<'listUsers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsers'>]-?: ReturnTypeFrom<'listUsers'>[K]}['Users'], undefined>}> {
    // {"inputToken":"PaginationToken","limitKey":"Limit","outputToken":"PaginationToken","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { PaginationToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listUsers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.PaginationToken, operation: 'listUsers' })).toString('base64');
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUsersInGroup(params: { [K in keyof ParamsFrom<'listUsersInGroup', { next?: string, limit?: number }>]: ParamsFrom<'listUsersInGroup', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUsersInGroup'>]-?: ReturnTypeFrom<'listUsersInGroup'>[K]}['Users'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Users"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listUsersInGroup({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listUsersInGroup' })).toString('base64');
    const member = (Array.isArray(result.Users ?? []) ? (result.Users ?? []) : [result.Users]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  resendConfirmationCode: (params: RawParamsFrom<'resendConfirmationCode'>) => Promise<ReturnTypeFrom<'resendConfirmationCode'>>  = async params => {
  // undefined
    return this.client.resendConfirmationCode(params as any).promise();
  }

  respondToAuthChallenge: (params: RawParamsFrom<'respondToAuthChallenge'>) => Promise<ReturnTypeFrom<'respondToAuthChallenge'>>  = async params => {
  // undefined
    return this.client.respondToAuthChallenge(params as any).promise();
  }

  revokeToken: (params: RawParamsFrom<'revokeToken'>) => Promise<ReturnTypeFrom<'revokeToken'>>  = async params => {
  // undefined
    return this.client.revokeToken(params as any).promise();
  }

  setRiskConfiguration: (params: RawParamsFrom<'setRiskConfiguration'>) => Promise<ReturnTypeFrom<'setRiskConfiguration'>>  = async params => {
  // undefined
    return this.client.setRiskConfiguration(params as any).promise();
  }

  setUICustomization: (params: RawParamsFrom<'setUICustomization'>) => Promise<ReturnTypeFrom<'setUICustomization'>>  = async params => {
  // undefined
    return this.client.setUICustomization(params as any).promise();
  }

  setUserMFAPreference: (params: RawParamsFrom<'setUserMFAPreference'>) => Promise<ReturnTypeFrom<'setUserMFAPreference'>>  = async params => {
  // undefined
    return this.client.setUserMFAPreference(params as any).promise();
  }

  setUserPoolMfaConfig: (params: RawParamsFrom<'setUserPoolMfaConfig'>) => Promise<ReturnTypeFrom<'setUserPoolMfaConfig'>>  = async params => {
  // undefined
    return this.client.setUserPoolMfaConfig(params as any).promise();
  }

  setUserSettings: (params: RawParamsFrom<'setUserSettings'>) => Promise<ReturnTypeFrom<'setUserSettings'>>  = async params => {
  // undefined
    return this.client.setUserSettings(params as any).promise();
  }

  signUp: (params: RawParamsFrom<'signUp'>) => Promise<ReturnTypeFrom<'signUp'>>  = async params => {
  // undefined
    return this.client.signUp(params as any).promise();
  }

  startUserImportJob: (params: RawParamsFrom<'startUserImportJob'>) => Promise<ReturnTypeFrom<'startUserImportJob'>>  = async params => {
  // undefined
    return this.client.startUserImportJob(params as any).promise();
  }

  stopUserImportJob: (params: RawParamsFrom<'stopUserImportJob'>) => Promise<ReturnTypeFrom<'stopUserImportJob'>>  = async params => {
  // undefined
    return this.client.stopUserImportJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAuthEventFeedback: (params: RawParamsFrom<'updateAuthEventFeedback'>) => Promise<ReturnTypeFrom<'updateAuthEventFeedback'>>  = async params => {
  // undefined
    return this.client.updateAuthEventFeedback(params as any).promise();
  }

  updateDeviceStatus: (params: RawParamsFrom<'updateDeviceStatus'>) => Promise<ReturnTypeFrom<'updateDeviceStatus'>>  = async params => {
  // undefined
    return this.client.updateDeviceStatus(params as any).promise();
  }

  updateGroup: (params: RawParamsFrom<'updateGroup'>) => Promise<ReturnTypeFrom<'updateGroup'>>  = async params => {
  // undefined
    return this.client.updateGroup(params as any).promise();
  }

  updateIdentityProvider: (params: RawParamsFrom<'updateIdentityProvider'>) => Promise<ReturnTypeFrom<'updateIdentityProvider'>>  = async params => {
  // undefined
    return this.client.updateIdentityProvider(params as any).promise();
  }

  updateResourceServer: (params: RawParamsFrom<'updateResourceServer'>) => Promise<ReturnTypeFrom<'updateResourceServer'>>  = async params => {
  // undefined
    return this.client.updateResourceServer(params as any).promise();
  }

  updateUserAttributes: (params: RawParamsFrom<'updateUserAttributes'>) => Promise<ReturnTypeFrom<'updateUserAttributes'>>  = async params => {
  // undefined
    return this.client.updateUserAttributes(params as any).promise();
  }

  updateUserPool: (params: RawParamsFrom<'updateUserPool'>) => Promise<ReturnTypeFrom<'updateUserPool'>>  = async params => {
  // undefined
    return this.client.updateUserPool(params as any).promise();
  }

  updateUserPoolClient: (params: RawParamsFrom<'updateUserPoolClient'>) => Promise<ReturnTypeFrom<'updateUserPoolClient'>>  = async params => {
  // undefined
    return this.client.updateUserPoolClient(params as any).promise();
  }

  updateUserPoolDomain: (params: RawParamsFrom<'updateUserPoolDomain'>) => Promise<ReturnTypeFrom<'updateUserPoolDomain'>>  = async params => {
  // undefined
    return this.client.updateUserPoolDomain(params as any).promise();
  }

  verifySoftwareToken: (params: RawParamsFrom<'verifySoftwareToken'>) => Promise<ReturnTypeFrom<'verifySoftwareToken'>>  = async params => {
  // undefined
    return this.client.verifySoftwareToken(params as any).promise();
  }

  verifyUserAttribute: (params: RawParamsFrom<'verifyUserAttribute'>) => Promise<ReturnTypeFrom<'verifyUserAttribute'>>  = async params => {
  // undefined
    return this.client.verifyUserAttribute(params as any).promise();
  }
  
  static fromClient(client: AWSCognitoIdentityServiceProvider): CognitoIdentityServiceProvider {
    return new CognitoIdentityServiceProvider(client) as any;
  }
  
  static client(options?: AWSCognitoIdentityServiceProvider.Types.ClientConfiguration): CognitoIdentityServiceProvider {
    return new CognitoIdentityServiceProvider(new AWSCognitoIdentityServiceProvider(options)) as any;
  }
}  
