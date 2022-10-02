import { Request, MigrationHub as AWSMigrationHub } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMigrationHub> = AWSMigrationHub[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMigrationHub> = AWSMigrationHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMigrationHub[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMigrationHub, Extras> = AWSMigrationHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'mgh';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listApplicationStates","listMigrationTasks","listProgressUpdateStreams"];
    
  associateCreatedArtifact: FunctionTypeFrom<'associateCreatedArtifact'>;

  associateDiscoveredResource: FunctionTypeFrom<'associateDiscoveredResource'>;

  createProgressUpdateStream: FunctionTypeFrom<'createProgressUpdateStream'>;

  deleteProgressUpdateStream: FunctionTypeFrom<'deleteProgressUpdateStream'>;

  describeApplicationState: FunctionTypeFrom<'describeApplicationState'>;

  describeMigrationTask: FunctionTypeFrom<'describeMigrationTask'>;

  disassociateCreatedArtifact: FunctionTypeFrom<'disassociateCreatedArtifact'>;

  disassociateDiscoveredResource: FunctionTypeFrom<'disassociateDiscoveredResource'>;

  importMigrationTask: FunctionTypeFrom<'importMigrationTask'>;

  listApplicationStates(params: { [K in keyof Omit<ParamsFrom<'listApplicationStates', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listApplicationStates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplicationStates'>]-?: ReturnTypeFrom<'listApplicationStates'>[K]}['ApplicationStateList'] }>
  listApplicationStates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplicationStates'>]-?: ReturnTypeFrom<'listApplicationStates'>[K]}['ApplicationStateList'] }>;

  listCreatedArtifacts(params: { [K in keyof Omit<ParamsFrom<'listCreatedArtifacts', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCreatedArtifacts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCreatedArtifacts'>]-?: ReturnTypeFrom<'listCreatedArtifacts'>[K]}['CreatedArtifactList'] }>
  ;

  listDiscoveredResources(params: { [K in keyof Omit<ParamsFrom<'listDiscoveredResources', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDiscoveredResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDiscoveredResources'>]-?: ReturnTypeFrom<'listDiscoveredResources'>[K]}['DiscoveredResourceList'] }>
  ;

  listMigrationTasks(params: { [K in keyof Omit<ParamsFrom<'listMigrationTasks', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listMigrationTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMigrationTasks'>]-?: ReturnTypeFrom<'listMigrationTasks'>[K]}['MigrationTaskSummaryList'] }>
  listMigrationTasks(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listMigrationTasks'>]-?: ReturnTypeFrom<'listMigrationTasks'>[K]}['MigrationTaskSummaryList'] }>;

  listProgressUpdateStreams(params: { [K in keyof Omit<ParamsFrom<'listProgressUpdateStreams', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProgressUpdateStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProgressUpdateStreams'>]-?: ReturnTypeFrom<'listProgressUpdateStreams'>[K]}['ProgressUpdateStreamSummaryList'] }>
  listProgressUpdateStreams(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProgressUpdateStreams'>]-?: ReturnTypeFrom<'listProgressUpdateStreams'>[K]}['ProgressUpdateStreamSummaryList'] }>;

  notifyApplicationState: FunctionTypeFrom<'notifyApplicationState'>;

  notifyMigrationTaskState: FunctionTypeFrom<'notifyMigrationTaskState'>;

  putResourceAttributes: FunctionTypeFrom<'putResourceAttributes'>
}
 
export class MigrationHub implements ClientType {
  private constructor(private readonly client: AWSMigrationHub) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mgh';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listApplicationStates","listMigrationTasks","listProgressUpdateStreams"] as const;
  
  async associateCreatedArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.associateCreatedArtifact(...args).promise()
  }

  async associateDiscoveredResource(...args: any): Promise<any> {
  // undefined
    return this.client.associateDiscoveredResource(...args).promise()
  }

  async createProgressUpdateStream(...args: any): Promise<any> {
  // undefined
    return this.client.createProgressUpdateStream(...args).promise()
  }

  async deleteProgressUpdateStream(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProgressUpdateStream(...args).promise()
  }

  async describeApplicationState(...args: any): Promise<any> {
  // undefined
    return this.client.describeApplicationState(...args).promise()
  }

  async describeMigrationTask(...args: any): Promise<any> {
  // undefined
    return this.client.describeMigrationTask(...args).promise()
  }

  async disassociateCreatedArtifact(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateCreatedArtifact(...args).promise()
  }

  async disassociateDiscoveredResource(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateDiscoveredResource(...args).promise()
  }

  async importMigrationTask(...args: any): Promise<any> {
  // undefined
    return this.client.importMigrationTask(...args).promise()
  }

  async listApplicationStates(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ApplicationStateList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApplicationStates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ApplicationStateList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCreatedArtifacts(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CreatedArtifactList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCreatedArtifacts(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CreatedArtifactList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDiscoveredResources(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DiscoveredResourceList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDiscoveredResources(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DiscoveredResourceList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMigrationTasks(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MigrationTaskSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMigrationTasks(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.MigrationTaskSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProgressUpdateStreams(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProgressUpdateStreamSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProgressUpdateStreams(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ProgressUpdateStreamSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async notifyApplicationState(...args: any): Promise<any> {
  // undefined
    return this.client.notifyApplicationState(...args).promise()
  }

  async notifyMigrationTaskState(...args: any): Promise<any> {
  // undefined
    return this.client.notifyMigrationTaskState(...args).promise()
  }

  async putResourceAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.putResourceAttributes(...args).promise()
  }
  
  static fromClient(client: AWSMigrationHub): ClientType {
    return new MigrationHub(client) as any;
  }
  
  static client(options?: AWSMigrationHub.Types.ClientConfiguration): ClientType {
    return new MigrationHub(new AWSMigrationHub(options)) as any;
  }
}  
