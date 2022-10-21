import { Request, MigrationHubRefactorSpaces as AWSMigrationHubRefactorSpaces } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMigrationHubRefactorSpaces> = AWSMigrationHubRefactorSpaces[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMigrationHubRefactorSpaces> = AWSMigrationHubRefactorSpaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMigrationHubRefactorSpaces[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMigrationHubRefactorSpaces, Extras> = AWSMigrationHubRefactorSpaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMigrationHubRefactorSpaces> = AWSMigrationHubRefactorSpaces[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MigrationHubRefactorSpaces {
  private constructor(private readonly client: AWSMigrationHubRefactorSpaces) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'refactor-spaces' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listEnvironments"] as const;
  
  createApplication: (params: RawParamsFrom<'createApplication'>) => Promise<ReturnTypeFrom<'createApplication'>>  = async params => {
  // undefined
    return this.client.createApplication(params as any).promise();
  }

  createEnvironment: (params: RawParamsFrom<'createEnvironment'>) => Promise<ReturnTypeFrom<'createEnvironment'>>  = async params => {
  // undefined
    return this.client.createEnvironment(params as any).promise();
  }

  createRoute: (params: RawParamsFrom<'createRoute'>) => Promise<ReturnTypeFrom<'createRoute'>>  = async params => {
  // undefined
    return this.client.createRoute(params as any).promise();
  }

  createService: (params: RawParamsFrom<'createService'>) => Promise<ReturnTypeFrom<'createService'>>  = async params => {
  // undefined
    return this.client.createService(params as any).promise();
  }

  deleteApplication: (params: RawParamsFrom<'deleteApplication'>) => Promise<ReturnTypeFrom<'deleteApplication'>>  = async params => {
  // undefined
    return this.client.deleteApplication(params as any).promise();
  }

  deleteEnvironment: (params: RawParamsFrom<'deleteEnvironment'>) => Promise<ReturnTypeFrom<'deleteEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteEnvironment(params as any).promise();
  }

  deleteResourcePolicy: (params: RawParamsFrom<'deleteResourcePolicy'>) => Promise<ReturnTypeFrom<'deleteResourcePolicy'>>  = async params => {
  // undefined
    return this.client.deleteResourcePolicy(params as any).promise();
  }

  deleteRoute: (params: RawParamsFrom<'deleteRoute'>) => Promise<ReturnTypeFrom<'deleteRoute'>>  = async params => {
  // undefined
    return this.client.deleteRoute(params as any).promise();
  }

  deleteService: (params: RawParamsFrom<'deleteService'>) => Promise<ReturnTypeFrom<'deleteService'>>  = async params => {
  // undefined
    return this.client.deleteService(params as any).promise();
  }

  getApplication: (params: RawParamsFrom<'getApplication'>) => Promise<ReturnTypeFrom<'getApplication'>>  = async params => {
  // undefined
    return this.client.getApplication(params as any).promise();
  }

  getEnvironment: (params: RawParamsFrom<'getEnvironment'>) => Promise<ReturnTypeFrom<'getEnvironment'>>  = async params => {
  // undefined
    return this.client.getEnvironment(params as any).promise();
  }

  getResourcePolicy: (params: RawParamsFrom<'getResourcePolicy'>) => Promise<ReturnTypeFrom<'getResourcePolicy'>>  = async params => {
  // undefined
    return this.client.getResourcePolicy(params as any).promise();
  }

  getRoute: (params: RawParamsFrom<'getRoute'>) => Promise<ReturnTypeFrom<'getRoute'>>  = async params => {
  // undefined
    return this.client.getRoute(params as any).promise();
  }

  getService: (params: RawParamsFrom<'getService'>) => Promise<ReturnTypeFrom<'getService'>>  = async params => {
  // undefined
    return this.client.getService(params as any).promise();
  }

  async listApplications(params: { [K in keyof ParamsFrom<'listApplications', { next?: string, limit?: number }>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['ApplicationSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ApplicationSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApplications({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ApplicationSummaryList ?? []) ? (result.ApplicationSummaryList ?? []) : [result.ApplicationSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listEnvironmentVpcs(params: { [K in keyof ParamsFrom<'listEnvironmentVpcs', { next?: string, limit?: number }>]: ParamsFrom<'listEnvironmentVpcs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironmentVpcs'>]-?: ReturnTypeFrom<'listEnvironmentVpcs'>[K]}['EnvironmentVpcList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EnvironmentVpcList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEnvironmentVpcs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.EnvironmentVpcList ?? []) ? (result.EnvironmentVpcList ?? []) : [result.EnvironmentVpcList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listEnvironments(params: { [K in keyof ParamsFrom<'listEnvironments', { next?: string, limit?: number }>]: ParamsFrom<'listEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['EnvironmentSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EnvironmentSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEnvironments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.EnvironmentSummaryList ?? []) ? (result.EnvironmentSummaryList ?? []) : [result.EnvironmentSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRoutes(params: { [K in keyof ParamsFrom<'listRoutes', { next?: string, limit?: number }>]: ParamsFrom<'listRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRoutes'>]-?: ReturnTypeFrom<'listRoutes'>[K]}['RouteSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RouteSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRoutes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.RouteSummaryList ?? []) ? (result.RouteSummaryList ?? []) : [result.RouteSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listServices(params: { [K in keyof ParamsFrom<'listServices', { next?: string, limit?: number }>]: ParamsFrom<'listServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['ServiceSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServiceSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.ServiceSummaryList ?? []) ? (result.ServiceSummaryList ?? []) : [result.ServiceSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putResourcePolicy: (params: RawParamsFrom<'putResourcePolicy'>) => Promise<ReturnTypeFrom<'putResourcePolicy'>>  = async params => {
  // undefined
    return this.client.putResourcePolicy(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateRoute: (params: RawParamsFrom<'updateRoute'>) => Promise<ReturnTypeFrom<'updateRoute'>>  = async params => {
  // undefined
    return this.client.updateRoute(params as any).promise();
  }
  
  static fromClient(client: AWSMigrationHubRefactorSpaces): MigrationHubRefactorSpaces {
    return new MigrationHubRefactorSpaces(client) as any;
  }
  
  static client(options?: AWSMigrationHubRefactorSpaces.Types.ClientConfiguration): MigrationHubRefactorSpaces {
    return new MigrationHubRefactorSpaces(new AWSMigrationHubRefactorSpaces(options)) as any;
  }
}  
