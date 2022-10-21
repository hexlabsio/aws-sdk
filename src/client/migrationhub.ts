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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMigrationHub> = AWSMigrationHub[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MigrationHub {
  private constructor(private readonly client: AWSMigrationHub) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'mgh' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplicationStates","listMigrationTasks","listProgressUpdateStreams"] as const;
  
  associateCreatedArtifact: (params: RawParamsFrom<'associateCreatedArtifact'>) => Promise<ReturnTypeFrom<'associateCreatedArtifact'>>  = async params => {
  // undefined
    return this.client.associateCreatedArtifact(params as any).promise();
  }

  associateDiscoveredResource: (params: RawParamsFrom<'associateDiscoveredResource'>) => Promise<ReturnTypeFrom<'associateDiscoveredResource'>>  = async params => {
  // undefined
    return this.client.associateDiscoveredResource(params as any).promise();
  }

  createProgressUpdateStream: (params: RawParamsFrom<'createProgressUpdateStream'>) => Promise<ReturnTypeFrom<'createProgressUpdateStream'>>  = async params => {
  // undefined
    return this.client.createProgressUpdateStream(params as any).promise();
  }

  deleteProgressUpdateStream: (params: RawParamsFrom<'deleteProgressUpdateStream'>) => Promise<ReturnTypeFrom<'deleteProgressUpdateStream'>>  = async params => {
  // undefined
    return this.client.deleteProgressUpdateStream(params as any).promise();
  }

  describeApplicationState: (params: RawParamsFrom<'describeApplicationState'>) => Promise<ReturnTypeFrom<'describeApplicationState'>>  = async params => {
  // undefined
    return this.client.describeApplicationState(params as any).promise();
  }

  describeMigrationTask: (params: RawParamsFrom<'describeMigrationTask'>) => Promise<ReturnTypeFrom<'describeMigrationTask'>>  = async params => {
  // undefined
    return this.client.describeMigrationTask(params as any).promise();
  }

  disassociateCreatedArtifact: (params: RawParamsFrom<'disassociateCreatedArtifact'>) => Promise<ReturnTypeFrom<'disassociateCreatedArtifact'>>  = async params => {
  // undefined
    return this.client.disassociateCreatedArtifact(params as any).promise();
  }

  disassociateDiscoveredResource: (params: RawParamsFrom<'disassociateDiscoveredResource'>) => Promise<ReturnTypeFrom<'disassociateDiscoveredResource'>>  = async params => {
  // undefined
    return this.client.disassociateDiscoveredResource(params as any).promise();
  }

  importMigrationTask: (params: RawParamsFrom<'importMigrationTask'>) => Promise<ReturnTypeFrom<'importMigrationTask'>>  = async params => {
  // undefined
    return this.client.importMigrationTask(params as any).promise();
  }

  async listApplicationStates(params: { [K in keyof ParamsFrom<'listApplicationStates', { next?: string, limit?: number }>]: ParamsFrom<'listApplicationStates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplicationStates'>]-?: ReturnTypeFrom<'listApplicationStates'>[K]}['ApplicationStateList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ApplicationStateList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listApplicationStates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listApplicationStates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ApplicationStateList ?? []) ? (result.ApplicationStateList ?? []) : [result.ApplicationStateList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCreatedArtifacts(params: { [K in keyof ParamsFrom<'listCreatedArtifacts', { next?: string, limit?: number }>]: ParamsFrom<'listCreatedArtifacts', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCreatedArtifacts'>]-?: ReturnTypeFrom<'listCreatedArtifacts'>[K]}['CreatedArtifactList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CreatedArtifactList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCreatedArtifacts({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCreatedArtifacts' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CreatedArtifactList ?? []) ? (result.CreatedArtifactList ?? []) : [result.CreatedArtifactList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDiscoveredResources(params: { [K in keyof ParamsFrom<'listDiscoveredResources', { next?: string, limit?: number }>]: ParamsFrom<'listDiscoveredResources', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDiscoveredResources'>]-?: ReturnTypeFrom<'listDiscoveredResources'>[K]}['DiscoveredResourceList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DiscoveredResourceList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDiscoveredResources({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDiscoveredResources' })).toString('base64') : undefined;
    const member = (Array.isArray(result.DiscoveredResourceList ?? []) ? (result.DiscoveredResourceList ?? []) : [result.DiscoveredResourceList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listMigrationTasks(params: { [K in keyof ParamsFrom<'listMigrationTasks', { next?: string, limit?: number }>]: ParamsFrom<'listMigrationTasks', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listMigrationTasks'>]-?: ReturnTypeFrom<'listMigrationTasks'>[K]}['MigrationTaskSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"MigrationTaskSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listMigrationTasks({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listMigrationTasks' })).toString('base64') : undefined;
    const member = (Array.isArray(result.MigrationTaskSummaryList ?? []) ? (result.MigrationTaskSummaryList ?? []) : [result.MigrationTaskSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProgressUpdateStreams(params: { [K in keyof ParamsFrom<'listProgressUpdateStreams', { next?: string, limit?: number }>]: ParamsFrom<'listProgressUpdateStreams', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProgressUpdateStreams'>]-?: ReturnTypeFrom<'listProgressUpdateStreams'>[K]}['ProgressUpdateStreamSummaryList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProgressUpdateStreamSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProgressUpdateStreams({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listProgressUpdateStreams' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ProgressUpdateStreamSummaryList ?? []) ? (result.ProgressUpdateStreamSummaryList ?? []) : [result.ProgressUpdateStreamSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  notifyApplicationState: (params: RawParamsFrom<'notifyApplicationState'>) => Promise<ReturnTypeFrom<'notifyApplicationState'>>  = async params => {
  // undefined
    return this.client.notifyApplicationState(params as any).promise();
  }

  notifyMigrationTaskState: (params: RawParamsFrom<'notifyMigrationTaskState'>) => Promise<ReturnTypeFrom<'notifyMigrationTaskState'>>  = async params => {
  // undefined
    return this.client.notifyMigrationTaskState(params as any).promise();
  }

  putResourceAttributes: (params: RawParamsFrom<'putResourceAttributes'>) => Promise<ReturnTypeFrom<'putResourceAttributes'>>  = async params => {
  // undefined
    return this.client.putResourceAttributes(params as any).promise();
  }
  
  static fromClient(client: AWSMigrationHub): MigrationHub {
    return new MigrationHub(client) as any;
  }
  
  static client(options?: AWSMigrationHub.Types.ClientConfiguration): MigrationHub {
    return new MigrationHub(new AWSMigrationHub(options)) as any;
  }
}  
