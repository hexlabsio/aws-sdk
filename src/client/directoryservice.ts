import { Request, DirectoryService as AWSDirectoryService } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDirectoryService> = AWSDirectoryService[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDirectoryService> = AWSDirectoryService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDirectoryService[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDirectoryService, Extras> = AWSDirectoryService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDirectoryService> = AWSDirectoryService[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DirectoryService {
  private constructor(private readonly client: AWSDirectoryService) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'ds' as const;
  public readonly global = false as const;
  public readonly category = 'Security, Identity & Compliance' as const;
  public readonly topLevelCalls = ["describeDirectories","describeSnapshots","describeTrusts","listLogSubscriptions"] as const;
  
  acceptSharedDirectory: (params: RawParamsFrom<'acceptSharedDirectory'>) => Promise<ReturnTypeFrom<'acceptSharedDirectory'>>  = async params => {
  // undefined
    return this.client.acceptSharedDirectory(params as any).promise();
  }

  addIpRoutes: (params: RawParamsFrom<'addIpRoutes'>) => Promise<ReturnTypeFrom<'addIpRoutes'>>  = async params => {
  // undefined
    return this.client.addIpRoutes(params as any).promise();
  }

  addRegion: (params: RawParamsFrom<'addRegion'>) => Promise<ReturnTypeFrom<'addRegion'>>  = async params => {
  // undefined
    return this.client.addRegion(params as any).promise();
  }

  addTagsToResource: (params: RawParamsFrom<'addTagsToResource'>) => Promise<ReturnTypeFrom<'addTagsToResource'>>  = async params => {
  // undefined
    return this.client.addTagsToResource(params as any).promise();
  }

  cancelSchemaExtension: (params: RawParamsFrom<'cancelSchemaExtension'>) => Promise<ReturnTypeFrom<'cancelSchemaExtension'>>  = async params => {
  // undefined
    return this.client.cancelSchemaExtension(params as any).promise();
  }

  connectDirectory: (params: RawParamsFrom<'connectDirectory'>) => Promise<ReturnTypeFrom<'connectDirectory'>>  = async params => {
  // undefined
    return this.client.connectDirectory(params as any).promise();
  }

  createAlias: (params: RawParamsFrom<'createAlias'>) => Promise<ReturnTypeFrom<'createAlias'>>  = async params => {
  // undefined
    return this.client.createAlias(params as any).promise();
  }

  createComputer: (params: RawParamsFrom<'createComputer'>) => Promise<ReturnTypeFrom<'createComputer'>>  = async params => {
  // undefined
    return this.client.createComputer(params as any).promise();
  }

  createConditionalForwarder: (params: RawParamsFrom<'createConditionalForwarder'>) => Promise<ReturnTypeFrom<'createConditionalForwarder'>>  = async params => {
  // undefined
    return this.client.createConditionalForwarder(params as any).promise();
  }

  createDirectory: (params: RawParamsFrom<'createDirectory'>) => Promise<ReturnTypeFrom<'createDirectory'>>  = async params => {
  // undefined
    return this.client.createDirectory(params as any).promise();
  }

  createLogSubscription: (params: RawParamsFrom<'createLogSubscription'>) => Promise<ReturnTypeFrom<'createLogSubscription'>>  = async params => {
  // undefined
    return this.client.createLogSubscription(params as any).promise();
  }

  createMicrosoftAD: (params: RawParamsFrom<'createMicrosoftAD'>) => Promise<ReturnTypeFrom<'createMicrosoftAD'>>  = async params => {
  // undefined
    return this.client.createMicrosoftAD(params as any).promise();
  }

  createSnapshot: (params: RawParamsFrom<'createSnapshot'>) => Promise<ReturnTypeFrom<'createSnapshot'>>  = async params => {
  // undefined
    return this.client.createSnapshot(params as any).promise();
  }

  createTrust: (params: RawParamsFrom<'createTrust'>) => Promise<ReturnTypeFrom<'createTrust'>>  = async params => {
  // undefined
    return this.client.createTrust(params as any).promise();
  }

  deleteConditionalForwarder: (params: RawParamsFrom<'deleteConditionalForwarder'>) => Promise<ReturnTypeFrom<'deleteConditionalForwarder'>>  = async params => {
  // undefined
    return this.client.deleteConditionalForwarder(params as any).promise();
  }

  deleteDirectory: (params: RawParamsFrom<'deleteDirectory'>) => Promise<ReturnTypeFrom<'deleteDirectory'>>  = async params => {
  // undefined
    return this.client.deleteDirectory(params as any).promise();
  }

  deleteLogSubscription: (params: RawParamsFrom<'deleteLogSubscription'>) => Promise<ReturnTypeFrom<'deleteLogSubscription'>>  = async params => {
  // undefined
    return this.client.deleteLogSubscription(params as any).promise();
  }

  deleteSnapshot: (params: RawParamsFrom<'deleteSnapshot'>) => Promise<ReturnTypeFrom<'deleteSnapshot'>>  = async params => {
  // undefined
    return this.client.deleteSnapshot(params as any).promise();
  }

  deleteTrust: (params: RawParamsFrom<'deleteTrust'>) => Promise<ReturnTypeFrom<'deleteTrust'>>  = async params => {
  // undefined
    return this.client.deleteTrust(params as any).promise();
  }

  deregisterCertificate: (params: RawParamsFrom<'deregisterCertificate'>) => Promise<ReturnTypeFrom<'deregisterCertificate'>>  = async params => {
  // undefined
    return this.client.deregisterCertificate(params as any).promise();
  }

  deregisterEventTopic: (params: RawParamsFrom<'deregisterEventTopic'>) => Promise<ReturnTypeFrom<'deregisterEventTopic'>>  = async params => {
  // undefined
    return this.client.deregisterEventTopic(params as any).promise();
  }

  describeCertificate: (params: RawParamsFrom<'describeCertificate'>) => Promise<ReturnTypeFrom<'describeCertificate'>>  = async params => {
  // undefined
    return this.client.describeCertificate(params as any).promise();
  }

  async describeClientAuthenticationSettings(params: { [K in keyof ParamsFrom<'describeClientAuthenticationSettings', { next?: string, limit?: number }>]: ParamsFrom<'describeClientAuthenticationSettings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeClientAuthenticationSettings'>]-?: ReturnTypeFrom<'describeClientAuthenticationSettings'>[K]}['ClientAuthenticationSettingsInfo'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"ClientAuthenticationSettingsInfo"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeClientAuthenticationSettings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeClientAuthenticationSettings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ClientAuthenticationSettingsInfo ?? []) ? (result.ClientAuthenticationSettingsInfo ?? []) : [result.ClientAuthenticationSettingsInfo]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeConditionalForwarders: (params: RawParamsFrom<'describeConditionalForwarders'>) => Promise<ReturnTypeFrom<'describeConditionalForwarders'>>  = async params => {
  // undefined
    return this.client.describeConditionalForwarders(params as any).promise();
  }

  async describeDirectories(params: { [K in keyof ParamsFrom<'describeDirectories', { next?: string, limit?: number }>]: ParamsFrom<'describeDirectories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDirectories'>]-?: ReturnTypeFrom<'describeDirectories'>[K]}['DirectoryDescriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"DirectoryDescriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeDirectories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeDirectories' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DirectoryDescriptions ?? []) ? (result.DirectoryDescriptions ?? []) : [result.DirectoryDescriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeDomainControllers: (params: RawParamsFrom<'describeDomainControllers'>) => Promise<ReturnTypeFrom<'describeDomainControllers'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken"}
    return this.client.describeDomainControllers(params as any).promise();
  }

  describeEventTopics: (params: RawParamsFrom<'describeEventTopics'>) => Promise<ReturnTypeFrom<'describeEventTopics'>>  = async params => {
  // undefined
    return this.client.describeEventTopics(params as any).promise();
  }

  async describeLDAPSSettings(params: { [K in keyof ParamsFrom<'describeLDAPSSettings', { next?: string, limit?: number }>]: ParamsFrom<'describeLDAPSSettings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLDAPSSettings'>]-?: ReturnTypeFrom<'describeLDAPSSettings'>[K]}['LDAPSSettingsInfo'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"LDAPSSettingsInfo"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeLDAPSSettings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeLDAPSSettings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LDAPSSettingsInfo ?? []) ? (result.LDAPSSettingsInfo ?? []) : [result.LDAPSSettingsInfo]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRegions(params: { [K in keyof ParamsFrom<'describeRegions', { next?: string }>]: ParamsFrom<'describeRegions', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeRegions'>]-?: ReturnTypeFrom<'describeRegions'>[K]}['RegionsDescription'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"RegionsDescription"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeRegions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeRegions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RegionsDescription ?? []) ? (result.RegionsDescription ?? []) : [result.RegionsDescription]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeSettings: (params: RawParamsFrom<'describeSettings'>) => Promise<ReturnTypeFrom<'describeSettings'>>  = async params => {
  // undefined
    return this.client.describeSettings(params as any).promise();
  }

  async describeSharedDirectories(params: { [K in keyof ParamsFrom<'describeSharedDirectories', { next?: string, limit?: number }>]: ParamsFrom<'describeSharedDirectories', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSharedDirectories'>]-?: ReturnTypeFrom<'describeSharedDirectories'>[K]}['SharedDirectories'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"SharedDirectories"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeSharedDirectories({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSharedDirectories' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SharedDirectories ?? []) ? (result.SharedDirectories ?? []) : [result.SharedDirectories]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeSnapshots(params: { [K in keyof ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>]: ParamsFrom<'describeSnapshots', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSnapshots'>]-?: ReturnTypeFrom<'describeSnapshots'>[K]}['Snapshots'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Snapshots"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeSnapshots({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeSnapshots' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Snapshots ?? []) ? (result.Snapshots ?? []) : [result.Snapshots]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTrusts(params: { [K in keyof ParamsFrom<'describeTrusts', { next?: string, limit?: number }>]: ParamsFrom<'describeTrusts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTrusts'>]-?: ReturnTypeFrom<'describeTrusts'>[K]}['Trusts'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Trusts"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.describeTrusts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeTrusts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Trusts ?? []) ? (result.Trusts ?? []) : [result.Trusts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeUpdateDirectory(params: { [K in keyof ParamsFrom<'describeUpdateDirectory', { next?: string }>]: ParamsFrom<'describeUpdateDirectory', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeUpdateDirectory'>]-?: ReturnTypeFrom<'describeUpdateDirectory'>[K]}['UpdateActivities'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"UpdateActivities"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeUpdateDirectory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeUpdateDirectory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.UpdateActivities ?? []) ? (result.UpdateActivities ?? []) : [result.UpdateActivities]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  disableClientAuthentication: (params: RawParamsFrom<'disableClientAuthentication'>) => Promise<ReturnTypeFrom<'disableClientAuthentication'>>  = async params => {
  // undefined
    return this.client.disableClientAuthentication(params as any).promise();
  }

  disableLDAPS: (params: RawParamsFrom<'disableLDAPS'>) => Promise<ReturnTypeFrom<'disableLDAPS'>>  = async params => {
  // undefined
    return this.client.disableLDAPS(params as any).promise();
  }

  disableRadius: (params: RawParamsFrom<'disableRadius'>) => Promise<ReturnTypeFrom<'disableRadius'>>  = async params => {
  // undefined
    return this.client.disableRadius(params as any).promise();
  }

  disableSso: (params: RawParamsFrom<'disableSso'>) => Promise<ReturnTypeFrom<'disableSso'>>  = async params => {
  // undefined
    return this.client.disableSso(params as any).promise();
  }

  enableClientAuthentication: (params: RawParamsFrom<'enableClientAuthentication'>) => Promise<ReturnTypeFrom<'enableClientAuthentication'>>  = async params => {
  // undefined
    return this.client.enableClientAuthentication(params as any).promise();
  }

  enableLDAPS: (params: RawParamsFrom<'enableLDAPS'>) => Promise<ReturnTypeFrom<'enableLDAPS'>>  = async params => {
  // undefined
    return this.client.enableLDAPS(params as any).promise();
  }

  enableRadius: (params: RawParamsFrom<'enableRadius'>) => Promise<ReturnTypeFrom<'enableRadius'>>  = async params => {
  // undefined
    return this.client.enableRadius(params as any).promise();
  }

  enableSso: (params: RawParamsFrom<'enableSso'>) => Promise<ReturnTypeFrom<'enableSso'>>  = async params => {
  // undefined
    return this.client.enableSso(params as any).promise();
  }

  getDirectoryLimits: (params: RawParamsFrom<'getDirectoryLimits'>) => Promise<ReturnTypeFrom<'getDirectoryLimits'>>  = async params => {
  // undefined
    return this.client.getDirectoryLimits(params as any).promise();
  }

  getSnapshotLimits: (params: RawParamsFrom<'getSnapshotLimits'>) => Promise<ReturnTypeFrom<'getSnapshotLimits'>>  = async params => {
  // undefined
    return this.client.getSnapshotLimits(params as any).promise();
  }

  async listCertificates(params: { [K in keyof ParamsFrom<'listCertificates', { next?: string, limit?: number }>]: ParamsFrom<'listCertificates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCertificates'>]-?: ReturnTypeFrom<'listCertificates'>[K]}['CertificatesInfo'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"CertificatesInfo"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listCertificates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCertificates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CertificatesInfo ?? []) ? (result.CertificatesInfo ?? []) : [result.CertificatesInfo]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listIpRoutes(params: { [K in keyof ParamsFrom<'listIpRoutes', { next?: string, limit?: number }>]: ParamsFrom<'listIpRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIpRoutes'>]-?: ReturnTypeFrom<'listIpRoutes'>[K]}['IpRoutesInfo'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"IpRoutesInfo"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listIpRoutes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listIpRoutes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.IpRoutesInfo ?? []) ? (result.IpRoutesInfo ?? []) : [result.IpRoutesInfo]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLogSubscriptions(params: { [K in keyof ParamsFrom<'listLogSubscriptions', { next?: string, limit?: number }>]: ParamsFrom<'listLogSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLogSubscriptions'>]-?: ReturnTypeFrom<'listLogSubscriptions'>[K]}['LogSubscriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"LogSubscriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listLogSubscriptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLogSubscriptions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LogSubscriptions ?? []) ? (result.LogSubscriptions ?? []) : [result.LogSubscriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSchemaExtensions(params: { [K in keyof ParamsFrom<'listSchemaExtensions', { next?: string, limit?: number }>]: ParamsFrom<'listSchemaExtensions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSchemaExtensions'>]-?: ReturnTypeFrom<'listSchemaExtensions'>[K]}['SchemaExtensionsInfo'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"SchemaExtensionsInfo"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listSchemaExtensions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listSchemaExtensions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.SchemaExtensionsInfo ?? []) ? (result.SchemaExtensionsInfo ?? []) : [result.SchemaExtensionsInfo]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['Tags'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"Limit","outputToken":"NextToken","resultKey":"Tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { Limit: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Tags ?? []) ? (result.Tags ?? []) : [result.Tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  registerCertificate: (params: RawParamsFrom<'registerCertificate'>) => Promise<ReturnTypeFrom<'registerCertificate'>>  = async params => {
  // undefined
    return this.client.registerCertificate(params as any).promise();
  }

  registerEventTopic: (params: RawParamsFrom<'registerEventTopic'>) => Promise<ReturnTypeFrom<'registerEventTopic'>>  = async params => {
  // undefined
    return this.client.registerEventTopic(params as any).promise();
  }

  rejectSharedDirectory: (params: RawParamsFrom<'rejectSharedDirectory'>) => Promise<ReturnTypeFrom<'rejectSharedDirectory'>>  = async params => {
  // undefined
    return this.client.rejectSharedDirectory(params as any).promise();
  }

  removeIpRoutes: (params: RawParamsFrom<'removeIpRoutes'>) => Promise<ReturnTypeFrom<'removeIpRoutes'>>  = async params => {
  // undefined
    return this.client.removeIpRoutes(params as any).promise();
  }

  removeRegion: (params: RawParamsFrom<'removeRegion'>) => Promise<ReturnTypeFrom<'removeRegion'>>  = async params => {
  // undefined
    return this.client.removeRegion(params as any).promise();
  }

  removeTagsFromResource: (params: RawParamsFrom<'removeTagsFromResource'>) => Promise<ReturnTypeFrom<'removeTagsFromResource'>>  = async params => {
  // undefined
    return this.client.removeTagsFromResource(params as any).promise();
  }

  resetUserPassword: (params: RawParamsFrom<'resetUserPassword'>) => Promise<ReturnTypeFrom<'resetUserPassword'>>  = async params => {
  // undefined
    return this.client.resetUserPassword(params as any).promise();
  }

  restoreFromSnapshot: (params: RawParamsFrom<'restoreFromSnapshot'>) => Promise<ReturnTypeFrom<'restoreFromSnapshot'>>  = async params => {
  // undefined
    return this.client.restoreFromSnapshot(params as any).promise();
  }

  shareDirectory: (params: RawParamsFrom<'shareDirectory'>) => Promise<ReturnTypeFrom<'shareDirectory'>>  = async params => {
  // undefined
    return this.client.shareDirectory(params as any).promise();
  }

  startSchemaExtension: (params: RawParamsFrom<'startSchemaExtension'>) => Promise<ReturnTypeFrom<'startSchemaExtension'>>  = async params => {
  // undefined
    return this.client.startSchemaExtension(params as any).promise();
  }

  unshareDirectory: (params: RawParamsFrom<'unshareDirectory'>) => Promise<ReturnTypeFrom<'unshareDirectory'>>  = async params => {
  // undefined
    return this.client.unshareDirectory(params as any).promise();
  }

  updateConditionalForwarder: (params: RawParamsFrom<'updateConditionalForwarder'>) => Promise<ReturnTypeFrom<'updateConditionalForwarder'>>  = async params => {
  // undefined
    return this.client.updateConditionalForwarder(params as any).promise();
  }

  updateDirectorySetup: (params: RawParamsFrom<'updateDirectorySetup'>) => Promise<ReturnTypeFrom<'updateDirectorySetup'>>  = async params => {
  // undefined
    return this.client.updateDirectorySetup(params as any).promise();
  }

  updateNumberOfDomainControllers: (params: RawParamsFrom<'updateNumberOfDomainControllers'>) => Promise<ReturnTypeFrom<'updateNumberOfDomainControllers'>>  = async params => {
  // undefined
    return this.client.updateNumberOfDomainControllers(params as any).promise();
  }

  updateRadius: (params: RawParamsFrom<'updateRadius'>) => Promise<ReturnTypeFrom<'updateRadius'>>  = async params => {
  // undefined
    return this.client.updateRadius(params as any).promise();
  }

  updateSettings: (params: RawParamsFrom<'updateSettings'>) => Promise<ReturnTypeFrom<'updateSettings'>>  = async params => {
  // undefined
    return this.client.updateSettings(params as any).promise();
  }

  updateTrust: (params: RawParamsFrom<'updateTrust'>) => Promise<ReturnTypeFrom<'updateTrust'>>  = async params => {
  // undefined
    return this.client.updateTrust(params as any).promise();
  }

  verifyTrust: (params: RawParamsFrom<'verifyTrust'>) => Promise<ReturnTypeFrom<'verifyTrust'>>  = async params => {
  // undefined
    return this.client.verifyTrust(params as any).promise();
  }
  
  static fromClient(client: AWSDirectoryService): DirectoryService {
    return new DirectoryService(client) as any;
  }
  
  static client(options?: AWSDirectoryService.Types.ClientConfiguration): DirectoryService {
    return new DirectoryService(new AWSDirectoryService(options)) as any;
  }
}  
