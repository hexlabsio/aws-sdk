import { Request, CloudFormation as AWSCloudFormation } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudFormation> = AWSCloudFormation[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudFormation> = AWSCloudFormation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudFormation[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudFormation, Extras> = AWSCloudFormation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cloudformation';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["describeAccountLimits","describeStackEvents","describeStackResources","describeStacks","listExports","listStackSets","listStacks","listTypeRegistrations","listTypeVersions","listTypes"];
    
  activateType: FunctionTypeFrom<'activateType'>;

  batchDescribeTypeConfigurations: FunctionTypeFrom<'batchDescribeTypeConfigurations'>;

  cancelUpdateStack: FunctionTypeFrom<'cancelUpdateStack'>;

  continueUpdateRollback: FunctionTypeFrom<'continueUpdateRollback'>;

  createChangeSet: FunctionTypeFrom<'createChangeSet'>;

  createStack: FunctionTypeFrom<'createStack'>;

  createStackInstances: FunctionTypeFrom<'createStackInstances'>;

  createStackSet: FunctionTypeFrom<'createStackSet'>;

  deactivateType: FunctionTypeFrom<'deactivateType'>;

  deleteChangeSet: FunctionTypeFrom<'deleteChangeSet'>;

  deleteStack: FunctionTypeFrom<'deleteStack'>;

  deleteStackInstances: FunctionTypeFrom<'deleteStackInstances'>;

  deleteStackSet: FunctionTypeFrom<'deleteStackSet'>;

  deregisterType: FunctionTypeFrom<'deregisterType'>;

  describeAccountLimits(params: { [K in keyof Omit<ParamsFrom<'describeAccountLimits', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeAccountLimits', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAccountLimits'>]-?: ReturnTypeFrom<'describeAccountLimits'>[K]}['AccountLimits'] }>
  describeAccountLimits(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeAccountLimits'>]-?: ReturnTypeFrom<'describeAccountLimits'>[K]}['AccountLimits'] }>;

  describeChangeSet: FunctionTypeFrom<'describeChangeSet'>;

  describeChangeSetHooks: FunctionTypeFrom<'describeChangeSetHooks'>;

  describePublisher: FunctionTypeFrom<'describePublisher'>;

  describeStackDriftDetectionStatus: FunctionTypeFrom<'describeStackDriftDetectionStatus'>;

  describeStackEvents(params: { [K in keyof Omit<ParamsFrom<'describeStackEvents', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeStackEvents', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStackEvents'>]-?: ReturnTypeFrom<'describeStackEvents'>[K]}['StackEvents'] }>
  describeStackEvents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStackEvents'>]-?: ReturnTypeFrom<'describeStackEvents'>[K]}['StackEvents'] }>;

  describeStackInstance: FunctionTypeFrom<'describeStackInstance'>;

  describeStackResource: FunctionTypeFrom<'describeStackResource'>;

  describeStackResourceDrifts: FunctionTypeFrom<'describeStackResourceDrifts'>;

  describeStackResources: FunctionTypeFrom<'describeStackResources'>;

  describeStackSet: FunctionTypeFrom<'describeStackSet'>;

  describeStackSetOperation: FunctionTypeFrom<'describeStackSetOperation'>;

  describeStacks(params: { [K in keyof Omit<ParamsFrom<'describeStacks', { next?: string }>, 'NextToken'>]: ParamsFrom<'describeStacks', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStacks'>]-?: ReturnTypeFrom<'describeStacks'>[K]}['Stacks'] }>
  describeStacks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeStacks'>]-?: ReturnTypeFrom<'describeStacks'>[K]}['Stacks'] }>;

  describeType: FunctionTypeFrom<'describeType'>;

  describeTypeRegistration: FunctionTypeFrom<'describeTypeRegistration'>;

  detectStackDrift: FunctionTypeFrom<'detectStackDrift'>;

  detectStackResourceDrift: FunctionTypeFrom<'detectStackResourceDrift'>;

  detectStackSetDrift: FunctionTypeFrom<'detectStackSetDrift'>;

  estimateTemplateCost: FunctionTypeFrom<'estimateTemplateCost'>;

  executeChangeSet: FunctionTypeFrom<'executeChangeSet'>;

  getStackPolicy: FunctionTypeFrom<'getStackPolicy'>;

  getTemplate: FunctionTypeFrom<'getTemplate'>;

  getTemplateSummary: FunctionTypeFrom<'getTemplateSummary'>;

  importStacksToStackSet: FunctionTypeFrom<'importStacksToStackSet'>;

  listChangeSets(params: { [K in keyof Omit<ParamsFrom<'listChangeSets', { next?: string }>, 'NextToken'>]: ParamsFrom<'listChangeSets', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listChangeSets'>]-?: ReturnTypeFrom<'listChangeSets'>[K]}['Summaries'] }>
  ;

  listExports(params: { [K in keyof Omit<ParamsFrom<'listExports', { next?: string }>, 'NextToken'>]: ParamsFrom<'listExports', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExports'>]-?: ReturnTypeFrom<'listExports'>[K]}['Exports'] }>
  listExports(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExports'>]-?: ReturnTypeFrom<'listExports'>[K]}['Exports'] }>;

  listImports(params: { [K in keyof Omit<ParamsFrom<'listImports', { next?: string }>, 'NextToken'>]: ParamsFrom<'listImports', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImports'>]-?: ReturnTypeFrom<'listImports'>[K]}['Imports'] }>
  ;

  listStackInstances(params: { [K in keyof Omit<ParamsFrom<'listStackInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStackInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStackInstances'>]-?: ReturnTypeFrom<'listStackInstances'>[K]}['Summaries'] }>
  ;

  listStackResources(params: { [K in keyof Omit<ParamsFrom<'listStackResources', { next?: string }>, 'NextToken'>]: ParamsFrom<'listStackResources', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStackResources'>]-?: ReturnTypeFrom<'listStackResources'>[K]}['StackResourceSummaries'] }>
  ;

  listStackSetOperationResults(params: { [K in keyof Omit<ParamsFrom<'listStackSetOperationResults', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStackSetOperationResults', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStackSetOperationResults'>]-?: ReturnTypeFrom<'listStackSetOperationResults'>[K]}['Summaries'] }>
  ;

  listStackSetOperations(params: { [K in keyof Omit<ParamsFrom<'listStackSetOperations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStackSetOperations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStackSetOperations'>]-?: ReturnTypeFrom<'listStackSetOperations'>[K]}['Summaries'] }>
  ;

  listStackSets(params: { [K in keyof Omit<ParamsFrom<'listStackSets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listStackSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStackSets'>]-?: ReturnTypeFrom<'listStackSets'>[K]}['Summaries'] }>
  listStackSets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStackSets'>]-?: ReturnTypeFrom<'listStackSets'>[K]}['Summaries'] }>;

  listStacks(params: { [K in keyof Omit<ParamsFrom<'listStacks', { next?: string }>, 'NextToken'>]: ParamsFrom<'listStacks', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStacks'>]-?: ReturnTypeFrom<'listStacks'>[K]}['StackSummaries'] }>
  listStacks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listStacks'>]-?: ReturnTypeFrom<'listStacks'>[K]}['StackSummaries'] }>;

  listTypeRegistrations: FunctionTypeFrom<'listTypeRegistrations'>;

  listTypeVersions: FunctionTypeFrom<'listTypeVersions'>;

  listTypes(params: { [K in keyof Omit<ParamsFrom<'listTypes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTypes'>]-?: ReturnTypeFrom<'listTypes'>[K]}['TypeSummaries'] }>
  listTypes(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTypes'>]-?: ReturnTypeFrom<'listTypes'>[K]}['TypeSummaries'] }>;

  publishType: FunctionTypeFrom<'publishType'>;

  recordHandlerProgress: FunctionTypeFrom<'recordHandlerProgress'>;

  registerPublisher: FunctionTypeFrom<'registerPublisher'>;

  registerType: FunctionTypeFrom<'registerType'>;

  rollbackStack: FunctionTypeFrom<'rollbackStack'>;

  setStackPolicy: FunctionTypeFrom<'setStackPolicy'>;

  setTypeConfiguration: FunctionTypeFrom<'setTypeConfiguration'>;

  setTypeDefaultVersion: FunctionTypeFrom<'setTypeDefaultVersion'>;

  signalResource: FunctionTypeFrom<'signalResource'>;

  stopStackSetOperation: FunctionTypeFrom<'stopStackSetOperation'>;

  testType: FunctionTypeFrom<'testType'>;

  updateStack: FunctionTypeFrom<'updateStack'>;

  updateStackInstances: FunctionTypeFrom<'updateStackInstances'>;

  updateStackSet: FunctionTypeFrom<'updateStackSet'>;

  updateTerminationProtection: FunctionTypeFrom<'updateTerminationProtection'>;

  validateTemplate: FunctionTypeFrom<'validateTemplate'>
}
 
export class CloudFormation implements ClientType {
  private constructor(private readonly client: AWSCloudFormation) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudformation';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["describeAccountLimits","describeStackEvents","describeStackResources","describeStacks","listExports","listStackSets","listStacks","listTypeRegistrations","listTypeVersions","listTypes"] as const;
  
  async activateType(...args: any): Promise<any> {
  // undefined
    return this.client.activateType(...args).promise()
  }

  async batchDescribeTypeConfigurations(...args: any): Promise<any> {
  // undefined
    return this.client.batchDescribeTypeConfigurations(...args).promise()
  }

  async cancelUpdateStack(...args: any): Promise<any> {
  // undefined
    return this.client.cancelUpdateStack(...args).promise()
  }

  async continueUpdateRollback(...args: any): Promise<any> {
  // undefined
    return this.client.continueUpdateRollback(...args).promise()
  }

  async createChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.createChangeSet(...args).promise()
  }

  async createStack(...args: any): Promise<any> {
  // undefined
    return this.client.createStack(...args).promise()
  }

  async createStackInstances(...args: any): Promise<any> {
  // undefined
    return this.client.createStackInstances(...args).promise()
  }

  async createStackSet(...args: any): Promise<any> {
  // undefined
    return this.client.createStackSet(...args).promise()
  }

  async deactivateType(...args: any): Promise<any> {
  // undefined
    return this.client.deactivateType(...args).promise()
  }

  async deleteChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteChangeSet(...args).promise()
  }

  async deleteStack(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStack(...args).promise()
  }

  async deleteStackInstances(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStackInstances(...args).promise()
  }

  async deleteStackSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStackSet(...args).promise()
  }

  async deregisterType(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterType(...args).promise()
  }

  async describeAccountLimits(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"AccountLimits"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeAccountLimits(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AccountLimits ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.describeChangeSet(...args).promise()
  }

  async describeChangeSetHooks(...args: any): Promise<any> {
  // undefined
    return this.client.describeChangeSetHooks(...args).promise()
  }

  async describePublisher(...args: any): Promise<any> {
  // undefined
    return this.client.describePublisher(...args).promise()
  }

  async describeStackDriftDetectionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.describeStackDriftDetectionStatus(...args).promise()
  }

  async describeStackEvents(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"StackEvents"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeStackEvents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StackEvents ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStackInstance(...args: any): Promise<any> {
  // undefined
    return this.client.describeStackInstance(...args).promise()
  }

  async describeStackResource(...args: any): Promise<any> {
  // undefined
    return this.client.describeStackResource(...args).promise()
  }

  async describeStackResourceDrifts(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeStackResourceDrifts(...args).promise()
  }

  async describeStackResources(...args: any): Promise<any> {
  // {"resultKey":"StackResources"}
    return this.client.describeStackResources(...args).promise()
  }

  async describeStackSet(...args: any): Promise<any> {
  // undefined
    return this.client.describeStackSet(...args).promise()
  }

  async describeStackSetOperation(...args: any): Promise<any> {
  // undefined
    return this.client.describeStackSetOperation(...args).promise()
  }

  async describeStacks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Stacks"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeStacks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Stacks ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeType(...args: any): Promise<any> {
  // undefined
    return this.client.describeType(...args).promise()
  }

  async describeTypeRegistration(...args: any): Promise<any> {
  // undefined
    return this.client.describeTypeRegistration(...args).promise()
  }

  async detectStackDrift(...args: any): Promise<any> {
  // undefined
    return this.client.detectStackDrift(...args).promise()
  }

  async detectStackResourceDrift(...args: any): Promise<any> {
  // undefined
    return this.client.detectStackResourceDrift(...args).promise()
  }

  async detectStackSetDrift(...args: any): Promise<any> {
  // undefined
    return this.client.detectStackSetDrift(...args).promise()
  }

  async estimateTemplateCost(...args: any): Promise<any> {
  // undefined
    return this.client.estimateTemplateCost(...args).promise()
  }

  async executeChangeSet(...args: any): Promise<any> {
  // undefined
    return this.client.executeChangeSet(...args).promise()
  }

  async getStackPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getStackPolicy(...args).promise()
  }

  async getTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getTemplate(...args).promise()
  }

  async getTemplateSummary(...args: any): Promise<any> {
  // undefined
    return this.client.getTemplateSummary(...args).promise()
  }

  async importStacksToStackSet(...args: any): Promise<any> {
  // undefined
    return this.client.importStacksToStackSet(...args).promise()
  }

  async listChangeSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listChangeSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExports(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Exports"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listExports(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Exports ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImports(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Imports"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listImports(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Imports ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStackInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackResources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"StackResourceSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listStackResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StackResourceSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackSetOperationResults(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStackSetOperationResults(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackSetOperations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStackSetOperations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStackSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStacks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"StackSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listStacks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.StackSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTypeRegistrations(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTypeRegistrations(...args).promise()
  }

  async listTypeVersions(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTypeVersions(...args).promise()
  }

  async listTypes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TypeSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTypes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.TypeSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async publishType(...args: any): Promise<any> {
  // undefined
    return this.client.publishType(...args).promise()
  }

  async recordHandlerProgress(...args: any): Promise<any> {
  // undefined
    return this.client.recordHandlerProgress(...args).promise()
  }

  async registerPublisher(...args: any): Promise<any> {
  // undefined
    return this.client.registerPublisher(...args).promise()
  }

  async registerType(...args: any): Promise<any> {
  // undefined
    return this.client.registerType(...args).promise()
  }

  async rollbackStack(...args: any): Promise<any> {
  // undefined
    return this.client.rollbackStack(...args).promise()
  }

  async setStackPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.setStackPolicy(...args).promise()
  }

  async setTypeConfiguration(...args: any): Promise<any> {
  // undefined
    return this.client.setTypeConfiguration(...args).promise()
  }

  async setTypeDefaultVersion(...args: any): Promise<any> {
  // undefined
    return this.client.setTypeDefaultVersion(...args).promise()
  }

  async signalResource(...args: any): Promise<any> {
  // undefined
    return this.client.signalResource(...args).promise()
  }

  async stopStackSetOperation(...args: any): Promise<any> {
  // undefined
    return this.client.stopStackSetOperation(...args).promise()
  }

  async testType(...args: any): Promise<any> {
  // undefined
    return this.client.testType(...args).promise()
  }

  async updateStack(...args: any): Promise<any> {
  // undefined
    return this.client.updateStack(...args).promise()
  }

  async updateStackInstances(...args: any): Promise<any> {
  // undefined
    return this.client.updateStackInstances(...args).promise()
  }

  async updateStackSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateStackSet(...args).promise()
  }

  async updateTerminationProtection(...args: any): Promise<any> {
  // undefined
    return this.client.updateTerminationProtection(...args).promise()
  }

  async validateTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.validateTemplate(...args).promise()
  }
  
  static fromClient(client: AWSCloudFormation): ClientType {
    return new CloudFormation(client) as any;
  }
  
  static client(options?: AWSCloudFormation.Types.ClientConfiguration): ClientType {
    return new CloudFormation(new AWSCloudFormation(options)) as any;
  }
}  
