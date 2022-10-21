import { Request, ElasticBeanstalk as AWSElasticBeanstalk } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSElasticBeanstalk> = AWSElasticBeanstalk[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSElasticBeanstalk> = AWSElasticBeanstalk[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSElasticBeanstalk[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSElasticBeanstalk, Extras> = AWSElasticBeanstalk[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSElasticBeanstalk> = AWSElasticBeanstalk[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ElasticBeanstalk {
  private constructor(private readonly client: AWSElasticBeanstalk) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticbeanstalk' as const;
  public readonly global = false as const;
  public readonly category = 'Compute' as const;
  public readonly topLevelCalls = ["describeApplicationVersions","describeApplications","describeConfigurationOptions","describeEnvironmentManagedActionHistory","describeEnvironments","describeEvents","listAvailableSolutionStacks","listPlatformBranches","listPlatformVersions"] as const;
  
  abortEnvironmentUpdate: (params: RawParamsFrom<'abortEnvironmentUpdate'>) => Promise<ReturnTypeFrom<'abortEnvironmentUpdate'>>  = async params => {
  // undefined
    return this.client.abortEnvironmentUpdate(params as any).promise();
  }

  applyEnvironmentManagedAction: (params: RawParamsFrom<'applyEnvironmentManagedAction'>) => Promise<ReturnTypeFrom<'applyEnvironmentManagedAction'>>  = async params => {
  // undefined
    return this.client.applyEnvironmentManagedAction(params as any).promise();
  }

  associateEnvironmentOperationsRole: (params: RawParamsFrom<'associateEnvironmentOperationsRole'>) => Promise<ReturnTypeFrom<'associateEnvironmentOperationsRole'>>  = async params => {
  // undefined
    return this.client.associateEnvironmentOperationsRole(params as any).promise();
  }

  checkDNSAvailability: (params: RawParamsFrom<'checkDNSAvailability'>) => Promise<ReturnTypeFrom<'checkDNSAvailability'>>  = async params => {
  // undefined
    return this.client.checkDNSAvailability(params as any).promise();
  }

  composeEnvironments: (params: RawParamsFrom<'composeEnvironments'>) => Promise<ReturnTypeFrom<'composeEnvironments'>>  = async params => {
  // undefined
    return this.client.composeEnvironments(params as any).promise();
  }

  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createApplicationVersion: (params: RawParamsFrom<'createApplicationVersion'>) => Promise<ReturnTypeFrom<'createApplicationVersion'>>  = async params => {
  // undefined
    return this.client.createApplicationVersion(params as any).promise();
  }

  createConfigurationTemplate: (params: RawParamsFrom<'createConfigurationTemplate'>) => Promise<ReturnTypeFrom<'createConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.createConfigurationTemplate(params as any).promise();
  }

  createEnvironment: (params: RawParamsFrom<'createEnvironment'>) => Promise<ReturnTypeFrom<'createEnvironment'>>  = async params => {
  // undefined
    return this.client.createEnvironment(params as any).promise();
  }

  createPlatformVersion: (params: RawParamsFrom<'createPlatformVersion'>) => Promise<ReturnTypeFrom<'createPlatformVersion'>>  = async params => {
  // undefined
    return this.client.createPlatformVersion(params as any).promise();
  }

  createStorageLocation: (params: RawParamsFrom<'createStorageLocation'>) => Promise<ReturnTypeFrom<'createStorageLocation'>>  = async params => {
  // undefined
    return this.client.createStorageLocation(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteApplicationVersion: (params: RawParamsFrom<'deleteApplicationVersion'>) => Promise<ReturnTypeFrom<'deleteApplicationVersion'>>  = async params => {
  // undefined
    return this.client.deleteApplicationVersion(params as any).promise();
  }

  deleteConfigurationTemplate: (params: RawParamsFrom<'deleteConfigurationTemplate'>) => Promise<ReturnTypeFrom<'deleteConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.deleteConfigurationTemplate(params as any).promise();
  }

  deleteEnvironmentConfiguration: (params: RawParamsFrom<'deleteEnvironmentConfiguration'>) => Promise<ReturnTypeFrom<'deleteEnvironmentConfiguration'>>  = async params => {
  // undefined
    return this.client.deleteEnvironmentConfiguration(params as any).promise();
  }

  deletePlatformVersion: (params: RawParamsFrom<'deletePlatformVersion'>) => Promise<ReturnTypeFrom<'deletePlatformVersion'>>  = async params => {
  // undefined
    return this.client.deletePlatformVersion(params as any).promise();
  }

  describeAccountAttributes: (params: RawParamsFrom<'describeAccountAttributes'>) => Promise<ReturnTypeFrom<'describeAccountAttributes'>>  = async params => {
  // undefined
    return this.client.describeAccountAttributes(params as any).promise();
  }

  async describeApplicationVersions(params: { [K in keyof ParamsFrom<'describeApplicationVersions', {}>]: ParamsFrom<'describeApplicationVersions', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeApplicationVersions'>]-?: ReturnTypeFrom<'describeApplicationVersions'>[K]}['ApplicationVersions'], undefined>}> {
    // {"resultKey":"ApplicationVersions"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeApplicationVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.ApplicationVersions ?? []) ? (result.ApplicationVersions ?? []) : [result.ApplicationVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeApplications(params: { [K in keyof ParamsFrom<'describeApplications', {}>]: ParamsFrom<'describeApplications', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeApplications'>]-?: ReturnTypeFrom<'describeApplications'>[K]}['Applications'], undefined>}> {
    // {"resultKey":"Applications"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.Applications ?? []) ? (result.Applications ?? []) : [result.Applications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeConfigurationOptions(params: { [K in keyof ParamsFrom<'describeConfigurationOptions', {}>]: ParamsFrom<'describeConfigurationOptions', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeConfigurationOptions'>]-?: ReturnTypeFrom<'describeConfigurationOptions'>[K]}['Options'], undefined>}> {
    // {"resultKey":"Options"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeConfigurationOptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.Options ?? []) ? (result.Options ?? []) : [result.Options]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeConfigurationSettings: (params: RawParamsFrom<'describeConfigurationSettings'>) => Promise<ReturnTypeFrom<'describeConfigurationSettings'>>  = async params => {
  // undefined
    return this.client.describeConfigurationSettings(params as any).promise();
  }

  describeEnvironmentHealth: (params: RawParamsFrom<'describeEnvironmentHealth'>) => Promise<ReturnTypeFrom<'describeEnvironmentHealth'>>  = async params => {
  // undefined
    return this.client.describeEnvironmentHealth(params as any).promise();
  }

  async describeEnvironmentManagedActionHistory(params: { [K in keyof ParamsFrom<'describeEnvironmentManagedActionHistory', { next?: string, limit?: number }>]: ParamsFrom<'describeEnvironmentManagedActionHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEnvironmentManagedActionHistory'>]-?: ReturnTypeFrom<'describeEnvironmentManagedActionHistory'>[K]}['ManagedActionHistoryItems'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken","resultKey":"ManagedActionHistoryItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.describeEnvironmentManagedActionHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEnvironmentManagedActionHistory' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ManagedActionHistoryItems ?? []) ? (result.ManagedActionHistoryItems ?? []) : [result.ManagedActionHistoryItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeEnvironmentManagedActions: (params: RawParamsFrom<'describeEnvironmentManagedActions'>) => Promise<ReturnTypeFrom<'describeEnvironmentManagedActions'>>  = async params => {
  // undefined
    return this.client.describeEnvironmentManagedActions(params as any).promise();
  }

  describeEnvironmentResources: (params: RawParamsFrom<'describeEnvironmentResources'>) => Promise<ReturnTypeFrom<'describeEnvironmentResources'>>  = async params => {
  // undefined
    return this.client.describeEnvironmentResources(params as any).promise();
  }

  async describeEnvironments(params: { [K in keyof ParamsFrom<'describeEnvironments', {}>]: ParamsFrom<'describeEnvironments', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEnvironments'>]-?: ReturnTypeFrom<'describeEnvironments'>[K]}['Environments'], undefined>}> {
    // {"resultKey":"Environments"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeEnvironments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.Environments ?? []) ? (result.Environments ?? []) : [result.Environments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEvents(params: { [K in keyof ParamsFrom<'describeEvents', { next?: string, limit?: number }>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"Events"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeEvents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Events ?? []) ? (result.Events ?? []) : [result.Events]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeInstancesHealth: (params: RawParamsFrom<'describeInstancesHealth'>) => Promise<ReturnTypeFrom<'describeInstancesHealth'>>  = async params => {
  // undefined
    return this.client.describeInstancesHealth(params as any).promise();
  }

  describePlatformVersion: (params: RawParamsFrom<'describePlatformVersion'>) => Promise<ReturnTypeFrom<'describePlatformVersion'>>  = async params => {
  // undefined
    return this.client.describePlatformVersion(params as any).promise();
  }

  disassociateEnvironmentOperationsRole: (params: RawParamsFrom<'disassociateEnvironmentOperationsRole'>) => Promise<ReturnTypeFrom<'disassociateEnvironmentOperationsRole'>>  = async params => {
  // undefined
    return this.client.disassociateEnvironmentOperationsRole(params as any).promise();
  }

  async listAvailableSolutionStacks(params: { [K in keyof ParamsFrom<'listAvailableSolutionStacks', {}>]: ParamsFrom<'listAvailableSolutionStacks', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAvailableSolutionStacks'>]-?: ReturnTypeFrom<'listAvailableSolutionStacks'>[K]}['SolutionStacks'], undefined>}> {
    // {"resultKey":"SolutionStacks"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.listAvailableSolutionStacks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.SolutionStacks ?? []) ? (result.SolutionStacks ?? []) : [result.SolutionStacks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listPlatformBranches: (params: RawParamsFrom<'listPlatformBranches'>) => Promise<ReturnTypeFrom<'listPlatformBranches'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.listPlatformBranches(params as any).promise();
  }

  async listPlatformVersions(params: { [K in keyof ParamsFrom<'listPlatformVersions', { next?: string, limit?: number }>]: ParamsFrom<'listPlatformVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPlatformVersions'>]-?: ReturnTypeFrom<'listPlatformVersions'>[K]}['PlatformSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"PlatformSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.listPlatformVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPlatformVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PlatformSummaryList ?? []) ? (result.PlatformSummaryList ?? []) : [result.PlatformSummaryList]) as any;
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

  rebuildEnvironment: (params: RawParamsFrom<'rebuildEnvironment'>) => Promise<ReturnTypeFrom<'rebuildEnvironment'>>  = async params => {
  // undefined
    return this.client.rebuildEnvironment(params as any).promise();
  }

  requestEnvironmentInfo: (params: RawParamsFrom<'requestEnvironmentInfo'>) => Promise<ReturnTypeFrom<'requestEnvironmentInfo'>>  = async params => {
  // undefined
    return this.client.requestEnvironmentInfo(params as any).promise();
  }

  restartAppServer: (params: RawParamsFrom<'restartAppServer'>) => Promise<ReturnTypeFrom<'restartAppServer'>>  = async params => {
  // undefined
    return this.client.restartAppServer(params as any).promise();
  }

  retrieveEnvironmentInfo: (params: RawParamsFrom<'retrieveEnvironmentInfo'>) => Promise<ReturnTypeFrom<'retrieveEnvironmentInfo'>>  = async params => {
  // undefined
    return this.client.retrieveEnvironmentInfo(params as any).promise();
  }

  swapEnvironmentCNAMEs: (params: RawParamsFrom<'swapEnvironmentCNAMEs'>) => Promise<ReturnTypeFrom<'swapEnvironmentCNAMEs'>>  = async params => {
  // undefined
    return this.client.swapEnvironmentCNAMEs(params as any).promise();
  }

  terminateEnvironment: (params: RawParamsFrom<'terminateEnvironment'>) => Promise<ReturnTypeFrom<'terminateEnvironment'>>  = async params => {
  // undefined
    return this.client.terminateEnvironment(params as any).promise();
  }

  updateApplication: (params: RawParamsFrom<'updateApplication'>) => Promise<ReturnTypeFrom<'updateApplication'>>  = async params => {
  // undefined
    return this.client.updateApplication(params as any).promise();
  }

  updateApplicationResourceLifecycle: (params: RawParamsFrom<'updateApplicationResourceLifecycle'>) => Promise<ReturnTypeFrom<'updateApplicationResourceLifecycle'>>  = async params => {
  // undefined
    return this.client.updateApplicationResourceLifecycle(params as any).promise();
  }

  updateApplicationVersion: (params: RawParamsFrom<'updateApplicationVersion'>) => Promise<ReturnTypeFrom<'updateApplicationVersion'>>  = async params => {
  // undefined
    return this.client.updateApplicationVersion(params as any).promise();
  }

  updateConfigurationTemplate: (params: RawParamsFrom<'updateConfigurationTemplate'>) => Promise<ReturnTypeFrom<'updateConfigurationTemplate'>>  = async params => {
  // undefined
    return this.client.updateConfigurationTemplate(params as any).promise();
  }

  updateEnvironment: (params: RawParamsFrom<'updateEnvironment'>) => Promise<ReturnTypeFrom<'updateEnvironment'>>  = async params => {
  // undefined
    return this.client.updateEnvironment(params as any).promise();
  }

  updateTagsForResource: (params: RawParamsFrom<'updateTagsForResource'>) => Promise<ReturnTypeFrom<'updateTagsForResource'>>  = async params => {
  // undefined
    return this.client.updateTagsForResource(params as any).promise();
  }

  validateConfigurationSettings: (params: RawParamsFrom<'validateConfigurationSettings'>) => Promise<ReturnTypeFrom<'validateConfigurationSettings'>>  = async params => {
  // undefined
    return this.client.validateConfigurationSettings(params as any).promise();
  }
  
  static fromClient(client: AWSElasticBeanstalk): ElasticBeanstalk {
    return new ElasticBeanstalk(client) as any;
  }
  
  static client(options?: AWSElasticBeanstalk.Types.ClientConfiguration): ElasticBeanstalk {
    return new ElasticBeanstalk(new AWSElasticBeanstalk(options)) as any;
  }
}  
