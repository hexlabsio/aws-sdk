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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'refactor-spaces';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listEnvironments"];
    
  createApplication: FunctionTypeFrom<'createApplication'>;

  createEnvironment: FunctionTypeFrom<'createEnvironment'>;

  createRoute: FunctionTypeFrom<'createRoute'>;

  createService: FunctionTypeFrom<'createService'>;

  deleteApplication: FunctionTypeFrom<'deleteApplication'>;

  deleteEnvironment: FunctionTypeFrom<'deleteEnvironment'>;

  deleteResourcePolicy: FunctionTypeFrom<'deleteResourcePolicy'>;

  deleteRoute: FunctionTypeFrom<'deleteRoute'>;

  deleteService: FunctionTypeFrom<'deleteService'>;

  getApplication: FunctionTypeFrom<'getApplication'>;

  getEnvironment: FunctionTypeFrom<'getEnvironment'>;

  getResourcePolicy: FunctionTypeFrom<'getResourcePolicy'>;

  getRoute: FunctionTypeFrom<'getRoute'>;

  getService: FunctionTypeFrom<'getService'>;

  listApplications(params: { [K in keyof Omit<ParamsFrom<'listApplications', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listApplications', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplications'>]-?: ReturnTypeFrom<'listApplications'>[K]}['ApplicationSummaryList'] }>
  ;

  listEnvironmentVpcs(params: { [K in keyof Omit<ParamsFrom<'listEnvironmentVpcs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEnvironmentVpcs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironmentVpcs'>]-?: ReturnTypeFrom<'listEnvironmentVpcs'>[K]}['EnvironmentVpcList'] }>
  ;

  listEnvironments(params: { [K in keyof Omit<ParamsFrom<'listEnvironments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['EnvironmentSummaryList'] }>
  listEnvironments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['EnvironmentSummaryList'] }>;

  listRoutes(params: { [K in keyof Omit<ParamsFrom<'listRoutes', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRoutes', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRoutes'>]-?: ReturnTypeFrom<'listRoutes'>[K]}['RouteSummaryList'] }>
  ;

  listServices(params: { [K in keyof Omit<ParamsFrom<'listServices', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['ServiceSummaryList'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putResourcePolicy: FunctionTypeFrom<'putResourcePolicy'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateRoute: FunctionTypeFrom<'updateRoute'>
}
 
export class MigrationHubRefactorSpaces implements ClientType {
  private constructor(private readonly client: AWSMigrationHubRefactorSpaces) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'refactor-spaces';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listEnvironments"] as const;
  
  async createApplication(...args: any): Promise<any> {
  // undefined
    return this.client.createApplication(...args).promise()
  }

  async createEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironment(...args).promise()
  }

  async createRoute(...args: any): Promise<any> {
  // undefined
    return this.client.createRoute(...args).promise()
  }

  async createService(...args: any): Promise<any> {
  // undefined
    return this.client.createService(...args).promise()
  }

  async deleteApplication(...args: any): Promise<any> {
  // undefined
    return this.client.deleteApplication(...args).promise()
  }

  async deleteEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironment(...args).promise()
  }

  async deleteResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteResourcePolicy(...args).promise()
  }

  async deleteRoute(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRoute(...args).promise()
  }

  async deleteService(...args: any): Promise<any> {
  // undefined
    return this.client.deleteService(...args).promise()
  }

  async getApplication(...args: any): Promise<any> {
  // undefined
    return this.client.getApplication(...args).promise()
  }

  async getEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironment(...args).promise()
  }

  async getResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.getResourcePolicy(...args).promise()
  }

  async getRoute(...args: any): Promise<any> {
  // undefined
    return this.client.getRoute(...args).promise()
  }

  async getService(...args: any): Promise<any> {
  // undefined
    return this.client.getService(...args).promise()
  }

  async listApplications(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ApplicationSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApplications(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ApplicationSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironmentVpcs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EnvironmentVpcList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEnvironmentVpcs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EnvironmentVpcList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEnvironments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EnvironmentSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEnvironments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EnvironmentSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRoutes(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RouteSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRoutes(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RouteSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServices(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServiceSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ServiceSummaryList ?? [];
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

  async putResourcePolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putResourcePolicy(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateRoute(...args: any): Promise<any> {
  // undefined
    return this.client.updateRoute(...args).promise()
  }
  
  static fromClient(client: AWSMigrationHubRefactorSpaces): ClientType {
    return new MigrationHubRefactorSpaces(client) as any;
  }
  
  static client(options?: AWSMigrationHubRefactorSpaces.Types.ClientConfiguration): ClientType {
    return new MigrationHubRefactorSpaces(new AWSMigrationHubRefactorSpaces(options)) as any;
  }
}  
