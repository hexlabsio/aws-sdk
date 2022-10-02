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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'elasticbeanstalk';
    global: false;
    category: 'Compute'
    topLevelCalls: readonly ["describeApplicationVersions","describeApplications","describeConfigurationOptions","describeEnvironmentManagedActionHistory","describeEnvironments","describeEvents","listAvailableSolutionStacks","listPlatformBranches","listPlatformVersions"];
    
  abortEnvironmentUpdate: FunctionTypeFrom<'abortEnvironmentUpdate'>;

  applyEnvironmentManagedAction: FunctionTypeFrom<'applyEnvironmentManagedAction'>;

  associateEnvironmentOperationsRole: FunctionTypeFrom<'associateEnvironmentOperationsRole'>;

  checkDNSAvailability: FunctionTypeFrom<'checkDNSAvailability'>;

  composeEnvironments: FunctionTypeFrom<'composeEnvironments'>;

  createApplication: FunctionTypeFrom<'createApplication'>;

  createApplicationVersion: FunctionTypeFrom<'createApplicationVersion'>;

  createConfigurationTemplate: FunctionTypeFrom<'createConfigurationTemplate'>;

  createEnvironment: FunctionTypeFrom<'createEnvironment'>;

  createPlatformVersion: FunctionTypeFrom<'createPlatformVersion'>;

  createStorageLocation: FunctionTypeFrom<'createStorageLocation'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteApplicationVersion: FunctionTypeFrom<'deleteApplicationVersion'>;

  deleteConfigurationTemplate: FunctionTypeFrom<'deleteConfigurationTemplate'>;

  deleteEnvironmentConfiguration: FunctionTypeFrom<'deleteEnvironmentConfiguration'>;

  deletePlatformVersion: FunctionTypeFrom<'deletePlatformVersion'>;

  describeAccountAttributes: FunctionTypeFrom<'describeAccountAttributes'>;

  describeApplicationVersions: FunctionTypeFrom<'describeApplicationVersions'>;

  describeApplications: FunctionTypeFrom<'describeApplications'>;

  describeConfigurationOptions: FunctionTypeFrom<'describeConfigurationOptions'>;

  describeConfigurationSettings: FunctionTypeFrom<'describeConfigurationSettings'>;

  describeEnvironmentHealth: FunctionTypeFrom<'describeEnvironmentHealth'>;

  describeEnvironmentManagedActionHistory(params: { [K in keyof Omit<ParamsFrom<'describeEnvironmentManagedActionHistory', { next?: string, limit?: number }>, 'NextToken' | 'MaxItems'>]: ParamsFrom<'describeEnvironmentManagedActionHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEnvironmentManagedActionHistory'>]-?: ReturnTypeFrom<'describeEnvironmentManagedActionHistory'>[K]}['ManagedActionHistoryItems'] }>
  describeEnvironmentManagedActionHistory(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEnvironmentManagedActionHistory'>]-?: ReturnTypeFrom<'describeEnvironmentManagedActionHistory'>[K]}['ManagedActionHistoryItems'] }>;

  describeEnvironmentManagedActions: FunctionTypeFrom<'describeEnvironmentManagedActions'>;

  describeEnvironmentResources: FunctionTypeFrom<'describeEnvironmentResources'>;

  describeEnvironments: FunctionTypeFrom<'describeEnvironments'>;

  describeEvents(params: { [K in keyof Omit<ParamsFrom<'describeEvents', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'describeEvents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>
  describeEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeEvents'>]-?: ReturnTypeFrom<'describeEvents'>[K]}['Events'] }>;

  describeInstancesHealth: FunctionTypeFrom<'describeInstancesHealth'>;

  describePlatformVersion: FunctionTypeFrom<'describePlatformVersion'>;

  disassociateEnvironmentOperationsRole: FunctionTypeFrom<'disassociateEnvironmentOperationsRole'>;

  listAvailableSolutionStacks: FunctionTypeFrom<'listAvailableSolutionStacks'>;

  listPlatformBranches: FunctionTypeFrom<'listPlatformBranches'>;

  listPlatformVersions(params: { [K in keyof Omit<ParamsFrom<'listPlatformVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxRecords'>]: ParamsFrom<'listPlatformVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlatformVersions'>]-?: ReturnTypeFrom<'listPlatformVersions'>[K]}['PlatformSummaryList'] }>
  listPlatformVersions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlatformVersions'>]-?: ReturnTypeFrom<'listPlatformVersions'>[K]}['PlatformSummaryList'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  rebuildEnvironment: FunctionTypeFrom<'rebuildEnvironment'>;

  requestEnvironmentInfo: FunctionTypeFrom<'requestEnvironmentInfo'>;

  restartAppServer: FunctionTypeFrom<'restartAppServer'>;

  retrieveEnvironmentInfo: FunctionTypeFrom<'retrieveEnvironmentInfo'>;

  swapEnvironmentCNAMEs: FunctionTypeFrom<'swapEnvironmentCNAMEs'>;

  terminateEnvironment: FunctionTypeFrom<'terminateEnvironment'>;

  updateApplication: FunctionTypeFrom<'updateApplication'>;

  updateApplicationResourceLifecycle: FunctionTypeFrom<'updateApplicationResourceLifecycle'>;

  updateApplicationVersion: FunctionTypeFrom<'updateApplicationVersion'>;

  updateConfigurationTemplate: FunctionTypeFrom<'updateConfigurationTemplate'>;

  updateEnvironment: FunctionTypeFrom<'updateEnvironment'>;

  updateTagsForResource: FunctionTypeFrom<'updateTagsForResource'>;

  validateConfigurationSettings: FunctionTypeFrom<'validateConfigurationSettings'>
}
 
export class ElasticBeanstalk implements ClientType {
  private constructor(private readonly client: AWSElasticBeanstalk) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticbeanstalk';
  public readonly global = false;
  public readonly category = 'Compute';
  public readonly topLevelCalls = ["describeApplicationVersions","describeApplications","describeConfigurationOptions","describeEnvironmentManagedActionHistory","describeEnvironments","describeEvents","listAvailableSolutionStacks","listPlatformBranches","listPlatformVersions"] as const;
  
  async abortEnvironmentUpdate(...args: any): Promise<any> {
  // undefined
    return this.client.abortEnvironmentUpdate(...args).promise()
  }

  async applyEnvironmentManagedAction(...args: any): Promise<any> {
  // undefined
    return this.client.applyEnvironmentManagedAction(...args).promise()
  }

  async associateEnvironmentOperationsRole(...args: any): Promise<any> {
  // undefined
    return this.client.associateEnvironmentOperationsRole(...args).promise()
  }

  async checkDNSAvailability(...args: any): Promise<any> {
  // undefined
    return this.client.checkDNSAvailability(...args).promise()
  }

  async composeEnvironments(...args: any): Promise<any> {
  // undefined
    return this.client.composeEnvironments(...args).promise()
  }

  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createApplicationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createApplicationVersion(...args).promise()
  }

  async createConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createConfigurationTemplate(...args).promise()
  }

  async createEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironment(...args).promise()
  }

  async createPlatformVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createPlatformVersion(...args).promise()
  }

  async createStorageLocation(...args: any): Promise<any> {
  // undefined
    return this.client.createStorageLocation(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteApplicationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplicationVersion(...args).promise()
  }

  async deleteConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteConfigurationTemplate(...args).promise()
  }

  async deleteEnvironmentConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironmentConfiguration(...args).promise()
  }

  async deletePlatformVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deletePlatformVersion(...args).promise()
  }

  async describeAccountAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountAttributes(...args).promise()
  }

  async describeApplicationVersions(...args: any): Promise<any> {
  // {"resultKey":"ApplicationVersions"}
    return this.client.describeApplicationVersions(...args).promise()
  }

  async describeApplications(...args: any): Promise<any> {
  // {"resultKey":"Applications"}
    return this.client.describeApplications(...args).promise()
  }

  async describeConfigurationOptions(...args: any): Promise<any> {
  // {"resultKey":"Options"}
    return this.client.describeConfigurationOptions(...args).promise()
  }

  async describeConfigurationSettings(...args: any): Promise<any> {
  // undefined
    return this.client.describeConfigurationSettings(...args).promise()
  }

  async describeEnvironmentHealth(...args: any): Promise<any> {
  // undefined
    return this.client.describeEnvironmentHealth(...args).promise()
  }

  async describeEnvironmentManagedActionHistory(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxItems","outputToken":"NextToken","resultKey":"ManagedActionHistoryItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.describeEnvironmentManagedActionHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ManagedActionHistoryItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeEnvironmentManagedActions(...args: any): Promise<any> {
  // undefined
    return this.client.describeEnvironmentManagedActions(...args).promise()
  }

  async describeEnvironmentResources(...args: any): Promise<any> {
  // undefined
    return this.client.describeEnvironmentResources(...args).promise()
  }

  async describeEnvironments(...args: any): Promise<any> {
  // {"resultKey":"Environments"}
    return this.client.describeEnvironments(...args).promise()
  }

  async describeEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"Events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.describeEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeInstancesHealth(...args: any): Promise<any> {
  // undefined
    return this.client.describeInstancesHealth(...args).promise()
  }

  async describePlatformVersion(...args: any): Promise<any> {
  // undefined
    return this.client.describePlatformVersion(...args).promise()
  }

  async disassociateEnvironmentOperationsRole(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateEnvironmentOperationsRole(...args).promise()
  }

  async listAvailableSolutionStacks(...args: any): Promise<any> {
  // {"resultKey":"SolutionStacks"}
    return this.client.listAvailableSolutionStacks(...args).promise()
  }

  async listPlatformBranches(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken"}
    return this.client.listPlatformBranches(...args).promise()
  }

  async listPlatformVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxRecords","outputToken":"NextToken","resultKey":"PlatformSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxRecords: limit } : {};
    const result = await this.client.listPlatformVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PlatformSummaryList ?? [];
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

  async rebuildEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.rebuildEnvironment(...args).promise()
  }

  async requestEnvironmentInfo(...args: any): Promise<any> {
  // undefined
    return this.client.requestEnvironmentInfo(...args).promise()
  }

  async restartAppServer(...args: any): Promise<any> {
  // undefined
    return this.client.restartAppServer(...args).promise()
  }

  async retrieveEnvironmentInfo(...args: any): Promise<any> {
  // undefined
    return this.client.retrieveEnvironmentInfo(...args).promise()
  }

  async swapEnvironmentCNAMEs(...args: any): Promise<any> {
  // undefined
    return this.client.swapEnvironmentCNAMEs(...args).promise()
  }

  async terminateEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.terminateEnvironment(...args).promise()
  }

  async updateApplication(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplication(...args).promise()
  }

  async updateApplicationResourceLifecycle(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplicationResourceLifecycle(...args).promise()
  }

  async updateApplicationVersion(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplicationVersion(...args).promise()
  }

  async updateConfigurationTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateConfigurationTemplate(...args).promise()
  }

  async updateEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironment(...args).promise()
  }

  async updateTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.updateTagsForResource(...args).promise()
  }

  async validateConfigurationSettings(...args: any): Promise<any> {
  // undefined
    return this.client.validateConfigurationSettings(...args).promise()
  }
  
  static fromClient(client: AWSElasticBeanstalk): ClientType {
    return new ElasticBeanstalk(client) as any;
  }
  
  static client(options?: AWSElasticBeanstalk.Types.ClientConfiguration): ClientType {
    return new ElasticBeanstalk(new AWSElasticBeanstalk(options)) as any;
  }
}  
