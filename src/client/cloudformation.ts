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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudFormation> = AWSCloudFormation[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudFormation {
  private constructor(private readonly client: AWSCloudFormation) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudformation' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["describeAccountLimits","describeStackEvents","describeStackResources","describeStacks","listExports","listStackSets","listStacks","listTypeRegistrations","listTypeVersions","listTypes"] as const;
  
  activateType: (params: RawParamsFrom<'activateType'>) => Promise<ReturnTypeFrom<'activateType'>>  = async params => {
  // undefined
    return this.client.activateType(params as any).promise();
  }

  batchDescribeTypeConfigurations: (params: RawParamsFrom<'batchDescribeTypeConfigurations'>) => Promise<ReturnTypeFrom<'batchDescribeTypeConfigurations'>>  = async params => {
  // undefined
    return this.client.batchDescribeTypeConfigurations(params as any).promise();
  }

  cancelUpdateStack: (params: RawParamsFrom<'cancelUpdateStack'>) => Promise<ReturnTypeFrom<'cancelUpdateStack'>>  = async params => {
  // undefined
    return this.client.cancelUpdateStack(params as any).promise();
  }

  continueUpdateRollback: (params: RawParamsFrom<'continueUpdateRollback'>) => Promise<ReturnTypeFrom<'continueUpdateRollback'>>  = async params => {
  // undefined
    return this.client.continueUpdateRollback(params as any).promise();
  }

  createChangeSet: (params: RawParamsFrom<'createChangeSet'>) => Promise<ReturnTypeFrom<'createChangeSet'>>  = async params => {
  // undefined
    return this.client.createChangeSet(params as any).promise();
  }

  createStack: (params: RawParamsFrom<'createStack'>) => Promise<ReturnTypeFrom<'createStack'>>  = async params => {
  // undefined
    return this.client.createStack(params as any).promise();
  }

  createStackInstances: (params: RawParamsFrom<'createStackInstances'>) => Promise<ReturnTypeFrom<'createStackInstances'>>  = async params => {
  // undefined
    return this.client.createStackInstances(params as any).promise();
  }

  createStackSet: (params: RawParamsFrom<'createStackSet'>) => Promise<ReturnTypeFrom<'createStackSet'>>  = async params => {
  // undefined
    return this.client.createStackSet(params as any).promise();
  }

  deactivateType: (params: RawParamsFrom<'deactivateType'>) => Promise<ReturnTypeFrom<'deactivateType'>>  = async params => {
  // undefined
    return this.client.deactivateType(params as any).promise();
  }

  deleteChangeSet: (params: RawParamsFrom<'deleteChangeSet'>) => Promise<ReturnTypeFrom<'deleteChangeSet'>>  = async params => {
  // undefined
    return this.client.deleteChangeSet(params as any).promise();
  }

  deleteStack: (params: RawParamsFrom<'deleteStack'>) => Promise<ReturnTypeFrom<'deleteStack'>>  = async params => {
  // undefined
    return this.client.deleteStack(params as any).promise();
  }

  deleteStackInstances: (params: RawParamsFrom<'deleteStackInstances'>) => Promise<ReturnTypeFrom<'deleteStackInstances'>>  = async params => {
  // undefined
    return this.client.deleteStackInstances(params as any).promise();
  }

  deleteStackSet: (params: RawParamsFrom<'deleteStackSet'>) => Promise<ReturnTypeFrom<'deleteStackSet'>>  = async params => {
  // undefined
    return this.client.deleteStackSet(params as any).promise();
  }

  deregisterType: (params: RawParamsFrom<'deregisterType'>) => Promise<ReturnTypeFrom<'deregisterType'>>  = async params => {
  // undefined
    return this.client.deregisterType(params as any).promise();
  }

  async describeAccountLimits(params: { [K in keyof ParamsFrom<'describeAccountLimits', { next?: string }>]: ParamsFrom<'describeAccountLimits', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAccountLimits'>]-?: ReturnTypeFrom<'describeAccountLimits'>[K]}['AccountLimits'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"AccountLimits"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeAccountLimits({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeAccountLimits' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AccountLimits ?? []) ? (result.AccountLimits ?? []) : [result.AccountLimits]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeChangeSet: (params: RawParamsFrom<'describeChangeSet'>) => Promise<ReturnTypeFrom<'describeChangeSet'>>  = async params => {
  // undefined
    return this.client.describeChangeSet(params as any).promise();
  }

  describeChangeSetHooks: (params: RawParamsFrom<'describeChangeSetHooks'>) => Promise<ReturnTypeFrom<'describeChangeSetHooks'>>  = async params => {
  // undefined
    return this.client.describeChangeSetHooks(params as any).promise();
  }

  describePublisher: (params: RawParamsFrom<'describePublisher'>) => Promise<ReturnTypeFrom<'describePublisher'>>  = async params => {
  // undefined
    return this.client.describePublisher(params as any).promise();
  }

  describeStackDriftDetectionStatus: (params: RawParamsFrom<'describeStackDriftDetectionStatus'>) => Promise<ReturnTypeFrom<'describeStackDriftDetectionStatus'>>  = async params => {
  // undefined
    return this.client.describeStackDriftDetectionStatus(params as any).promise();
  }

  async describeStackEvents(params: { [K in keyof ParamsFrom<'describeStackEvents', { next?: string }>]: ParamsFrom<'describeStackEvents', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStackEvents'>]-?: ReturnTypeFrom<'describeStackEvents'>[K]}['StackEvents'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"StackEvents"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeStackEvents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeStackEvents' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StackEvents ?? []) ? (result.StackEvents ?? []) : [result.StackEvents]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeStackInstance: (params: RawParamsFrom<'describeStackInstance'>) => Promise<ReturnTypeFrom<'describeStackInstance'>>  = async params => {
  // undefined
    return this.client.describeStackInstance(params as any).promise();
  }

  describeStackResource: (params: RawParamsFrom<'describeStackResource'>) => Promise<ReturnTypeFrom<'describeStackResource'>>  = async params => {
  // undefined
    return this.client.describeStackResource(params as any).promise();
  }

  describeStackResourceDrifts: (params: RawParamsFrom<'describeStackResourceDrifts'>) => Promise<ReturnTypeFrom<'describeStackResourceDrifts'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.describeStackResourceDrifts(params as any).promise();
  }

  async describeStackResources(params: { [K in keyof ParamsFrom<'describeStackResources', {}>]: ParamsFrom<'describeStackResources', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStackResources'>]-?: ReturnTypeFrom<'describeStackResources'>[K]}['StackResources'], undefined>}> {
    // {"resultKey":"StackResources"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeStackResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.StackResources ?? []) ? (result.StackResources ?? []) : [result.StackResources]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeStackSet: (params: RawParamsFrom<'describeStackSet'>) => Promise<ReturnTypeFrom<'describeStackSet'>>  = async params => {
  // undefined
    return this.client.describeStackSet(params as any).promise();
  }

  describeStackSetOperation: (params: RawParamsFrom<'describeStackSetOperation'>) => Promise<ReturnTypeFrom<'describeStackSetOperation'>>  = async params => {
  // undefined
    return this.client.describeStackSetOperation(params as any).promise();
  }

  async describeStacks(params: { [K in keyof ParamsFrom<'describeStacks', { next?: string }>]: ParamsFrom<'describeStacks', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeStacks'>]-?: ReturnTypeFrom<'describeStacks'>[K]}['Stacks'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Stacks"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeStacks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeStacks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Stacks ?? []) ? (result.Stacks ?? []) : [result.Stacks]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeType: (params: RawParamsFrom<'describeType'>) => Promise<ReturnTypeFrom<'describeType'>>  = async params => {
  // undefined
    return this.client.describeType(params as any).promise();
  }

  describeTypeRegistration: (params: RawParamsFrom<'describeTypeRegistration'>) => Promise<ReturnTypeFrom<'describeTypeRegistration'>>  = async params => {
  // undefined
    return this.client.describeTypeRegistration(params as any).promise();
  }

  detectStackDrift: (params: RawParamsFrom<'detectStackDrift'>) => Promise<ReturnTypeFrom<'detectStackDrift'>>  = async params => {
  // undefined
    return this.client.detectStackDrift(params as any).promise();
  }

  detectStackResourceDrift: (params: RawParamsFrom<'detectStackResourceDrift'>) => Promise<ReturnTypeFrom<'detectStackResourceDrift'>>  = async params => {
  // undefined
    return this.client.detectStackResourceDrift(params as any).promise();
  }

  detectStackSetDrift: (params: RawParamsFrom<'detectStackSetDrift'>) => Promise<ReturnTypeFrom<'detectStackSetDrift'>>  = async params => {
  // undefined
    return this.client.detectStackSetDrift(params as any).promise();
  }

  estimateTemplateCost: (params: RawParamsFrom<'estimateTemplateCost'>) => Promise<ReturnTypeFrom<'estimateTemplateCost'>>  = async params => {
  // undefined
    return this.client.estimateTemplateCost(params as any).promise();
  }

  executeChangeSet: (params: RawParamsFrom<'executeChangeSet'>) => Promise<ReturnTypeFrom<'executeChangeSet'>>  = async params => {
  // undefined
    return this.client.executeChangeSet(params as any).promise();
  }

  getStackPolicy: (params: RawParamsFrom<'getStackPolicy'>) => Promise<ReturnTypeFrom<'getStackPolicy'>>  = async params => {
  // undefined
    return this.client.getStackPolicy(params as any).promise();
  }

  getTemplate: (params: RawParamsFrom<'getTemplate'>) => Promise<ReturnTypeFrom<'getTemplate'>>  = async params => {
  // undefined
    return this.client.getTemplate(params as any).promise();
  }

  getTemplateSummary: (params: RawParamsFrom<'getTemplateSummary'>) => Promise<ReturnTypeFrom<'getTemplateSummary'>>  = async params => {
  // undefined
    return this.client.getTemplateSummary(params as any).promise();
  }

  importStacksToStackSet: (params: RawParamsFrom<'importStacksToStackSet'>) => Promise<ReturnTypeFrom<'importStacksToStackSet'>>  = async params => {
  // undefined
    return this.client.importStacksToStackSet(params as any).promise();
  }

  async listChangeSets(params: { [K in keyof ParamsFrom<'listChangeSets', { next?: string }>]: ParamsFrom<'listChangeSets', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listChangeSets'>]-?: ReturnTypeFrom<'listChangeSets'>[K]}['Summaries'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Summaries"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listChangeSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listChangeSets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Summaries ?? []) ? (result.Summaries ?? []) : [result.Summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listExports(params: { [K in keyof ParamsFrom<'listExports', { next?: string }>]: ParamsFrom<'listExports', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExports'>]-?: ReturnTypeFrom<'listExports'>[K]}['Exports'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Exports"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listExports({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listExports' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Exports ?? []) ? (result.Exports ?? []) : [result.Exports]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImports(params: { [K in keyof ParamsFrom<'listImports', { next?: string }>]: ParamsFrom<'listImports', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImports'>]-?: ReturnTypeFrom<'listImports'>[K]}['Imports'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"Imports"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listImports({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listImports' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Imports ?? []) ? (result.Imports ?? []) : [result.Imports]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackInstances(params: { [K in keyof ParamsFrom<'listStackInstances', { next?: string, limit?: number }>]: ParamsFrom<'listStackInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStackInstances'>]-?: ReturnTypeFrom<'listStackInstances'>[K]}['Summaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStackInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStackInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Summaries ?? []) ? (result.Summaries ?? []) : [result.Summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackResources(params: { [K in keyof ParamsFrom<'listStackResources', { next?: string }>]: ParamsFrom<'listStackResources', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStackResources'>]-?: ReturnTypeFrom<'listStackResources'>[K]}['StackResourceSummaries'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"StackResourceSummaries"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listStackResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStackResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StackResourceSummaries ?? []) ? (result.StackResourceSummaries ?? []) : [result.StackResourceSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackSetOperationResults(params: { [K in keyof ParamsFrom<'listStackSetOperationResults', { next?: string, limit?: number }>]: ParamsFrom<'listStackSetOperationResults', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStackSetOperationResults'>]-?: ReturnTypeFrom<'listStackSetOperationResults'>[K]}['Summaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStackSetOperationResults({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStackSetOperationResults' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Summaries ?? []) ? (result.Summaries ?? []) : [result.Summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackSetOperations(params: { [K in keyof ParamsFrom<'listStackSetOperations', { next?: string, limit?: number }>]: ParamsFrom<'listStackSetOperations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStackSetOperations'>]-?: ReturnTypeFrom<'listStackSetOperations'>[K]}['Summaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStackSetOperations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStackSetOperations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Summaries ?? []) ? (result.Summaries ?? []) : [result.Summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStackSets(params: { [K in keyof ParamsFrom<'listStackSets', { next?: string, limit?: number }>]: ParamsFrom<'listStackSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStackSets'>]-?: ReturnTypeFrom<'listStackSets'>[K]}['Summaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listStackSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStackSets' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Summaries ?? []) ? (result.Summaries ?? []) : [result.Summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStacks(params: { [K in keyof ParamsFrom<'listStacks', { next?: string }>]: ParamsFrom<'listStacks', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listStacks'>]-?: ReturnTypeFrom<'listStacks'>[K]}['StackSummaries'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"StackSummaries"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listStacks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listStacks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.StackSummaries ?? []) ? (result.StackSummaries ?? []) : [result.StackSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTypeRegistrations: (params: RawParamsFrom<'listTypeRegistrations'>) => Promise<ReturnTypeFrom<'listTypeRegistrations'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTypeRegistrations(params as any).promise();
  }

  listTypeVersions: (params: RawParamsFrom<'listTypeVersions'>) => Promise<ReturnTypeFrom<'listTypeVersions'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listTypeVersions(params as any).promise();
  }

  async listTypes(params: { [K in keyof ParamsFrom<'listTypes', { next?: string, limit?: number }>]: ParamsFrom<'listTypes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTypes'>]-?: ReturnTypeFrom<'listTypes'>[K]}['TypeSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"TypeSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listTypes' })).toString('base64') : undefined;
    const member = (Array.isArray(result.TypeSummaries ?? []) ? (result.TypeSummaries ?? []) : [result.TypeSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  publishType: (params: RawParamsFrom<'publishType'>) => Promise<ReturnTypeFrom<'publishType'>>  = async params => {
  // undefined
    return this.client.publishType(params as any).promise();
  }

  recordHandlerProgress: (params: RawParamsFrom<'recordHandlerProgress'>) => Promise<ReturnTypeFrom<'recordHandlerProgress'>>  = async params => {
  // undefined
    return this.client.recordHandlerProgress(params as any).promise();
  }

  registerPublisher: (params: RawParamsFrom<'registerPublisher'>) => Promise<ReturnTypeFrom<'registerPublisher'>>  = async params => {
  // undefined
    return this.client.registerPublisher(params as any).promise();
  }

  registerType: (params: RawParamsFrom<'registerType'>) => Promise<ReturnTypeFrom<'registerType'>>  = async params => {
  // undefined
    return this.client.registerType(params as any).promise();
  }

  rollbackStack: (params: RawParamsFrom<'rollbackStack'>) => Promise<ReturnTypeFrom<'rollbackStack'>>  = async params => {
  // undefined
    return this.client.rollbackStack(params as any).promise();
  }

  setStackPolicy: (params: RawParamsFrom<'setStackPolicy'>) => Promise<ReturnTypeFrom<'setStackPolicy'>>  = async params => {
  // undefined
    return this.client.setStackPolicy(params as any).promise();
  }

  setTypeConfiguration: (params: RawParamsFrom<'setTypeConfiguration'>) => Promise<ReturnTypeFrom<'setTypeConfiguration'>>  = async params => {
  // undefined
    return this.client.setTypeConfiguration(params as any).promise();
  }

  setTypeDefaultVersion: (params: RawParamsFrom<'setTypeDefaultVersion'>) => Promise<ReturnTypeFrom<'setTypeDefaultVersion'>>  = async params => {
  // undefined
    return this.client.setTypeDefaultVersion(params as any).promise();
  }

  signalResource: (params: RawParamsFrom<'signalResource'>) => Promise<ReturnTypeFrom<'signalResource'>>  = async params => {
  // undefined
    return this.client.signalResource(params as any).promise();
  }

  stopStackSetOperation: (params: RawParamsFrom<'stopStackSetOperation'>) => Promise<ReturnTypeFrom<'stopStackSetOperation'>>  = async params => {
  // undefined
    return this.client.stopStackSetOperation(params as any).promise();
  }

  testType: (params: RawParamsFrom<'testType'>) => Promise<ReturnTypeFrom<'testType'>>  = async params => {
  // undefined
    return this.client.testType(params as any).promise();
  }

  updateStack: (params: RawParamsFrom<'updateStack'>) => Promise<ReturnTypeFrom<'updateStack'>>  = async params => {
  // undefined
    return this.client.updateStack(params as any).promise();
  }

  updateStackInstances: (params: RawParamsFrom<'updateStackInstances'>) => Promise<ReturnTypeFrom<'updateStackInstances'>>  = async params => {
  // undefined
    return this.client.updateStackInstances(params as any).promise();
  }

  updateStackSet: (params: RawParamsFrom<'updateStackSet'>) => Promise<ReturnTypeFrom<'updateStackSet'>>  = async params => {
  // undefined
    return this.client.updateStackSet(params as any).promise();
  }

  updateTerminationProtection: (params: RawParamsFrom<'updateTerminationProtection'>) => Promise<ReturnTypeFrom<'updateTerminationProtection'>>  = async params => {
  // undefined
    return this.client.updateTerminationProtection(params as any).promise();
  }

  validateTemplate: (params: RawParamsFrom<'validateTemplate'>) => Promise<ReturnTypeFrom<'validateTemplate'>>  = async params => {
  // undefined
    return this.client.validateTemplate(params as any).promise();
  }
  
  static fromClient(client: AWSCloudFormation): CloudFormation {
    return new CloudFormation(client) as any;
  }
  
  static client(options?: AWSCloudFormation.Types.ClientConfiguration): CloudFormation {
    return new CloudFormation(new AWSCloudFormation(options)) as any;
  }
}  
