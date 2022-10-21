import { Request, MigrationHubStrategy as AWSMigrationHubStrategy } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMigrationHubStrategy> = AWSMigrationHubStrategy[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMigrationHubStrategy> = AWSMigrationHubStrategy[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMigrationHubStrategy[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMigrationHubStrategy, Extras> = AWSMigrationHubStrategy[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMigrationHubStrategy> = AWSMigrationHubStrategy[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MigrationHubStrategy {
  private constructor(private readonly client: AWSMigrationHubStrategy) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'migrationhub-strategy' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listApplicationComponents","listCollectors","listImportFileTask","listServers"] as const;
  
  getApplicationComponentDetails: (params: RawParamsFrom<'getApplicationComponentDetails'>) => Promise<ReturnTypeFrom<'getApplicationComponentDetails'>>  = async params => {
  // undefined
    return this.client.getApplicationComponentDetails(params as any).promise();
  }

  getApplicationComponentStrategies: (params: RawParamsFrom<'getApplicationComponentStrategies'>) => Promise<ReturnTypeFrom<'getApplicationComponentStrategies'>>  = async params => {
  // undefined
    return this.client.getApplicationComponentStrategies(params as any).promise();
  }

  getAssessment: (params: RawParamsFrom<'getAssessment'>) => Promise<ReturnTypeFrom<'getAssessment'>>  = async params => {
  // undefined
    return this.client.getAssessment(params as any).promise();
  }

  getImportFileTask: (params: RawParamsFrom<'getImportFileTask'>) => Promise<ReturnTypeFrom<'getImportFileTask'>>  = async params => {
  // undefined
    return this.client.getImportFileTask(params as any).promise();
  }

  getPortfolioPreferences: (params: RawParamsFrom<'getPortfolioPreferences'>) => Promise<ReturnTypeFrom<'getPortfolioPreferences'>>  = async params => {
  // undefined
    return this.client.getPortfolioPreferences(params as any).promise();
  }

  getPortfolioSummary: (params: RawParamsFrom<'getPortfolioSummary'>) => Promise<ReturnTypeFrom<'getPortfolioSummary'>>  = async params => {
  // undefined
    return this.client.getPortfolioSummary(params as any).promise();
  }

  getRecommendationReportDetails: (params: RawParamsFrom<'getRecommendationReportDetails'>) => Promise<ReturnTypeFrom<'getRecommendationReportDetails'>>  = async params => {
  // undefined
    return this.client.getRecommendationReportDetails(params as any).promise();
  }

  async getServerDetails(params: { [K in keyof ParamsFrom<'getServerDetails', { next?: string, limit?: number }>]: ParamsFrom<'getServerDetails', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getServerDetails'>]-?: ReturnTypeFrom<'getServerDetails'>[K]}['associatedApplications'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"associatedApplications"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getServerDetails({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getServerDetails' })).toString('base64');
    const member = (Array.isArray(result.associatedApplications ?? []) ? (result.associatedApplications ?? []) : [result.associatedApplications]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getServerStrategies: (params: RawParamsFrom<'getServerStrategies'>) => Promise<ReturnTypeFrom<'getServerStrategies'>>  = async params => {
  // undefined
    return this.client.getServerStrategies(params as any).promise();
  }

  async listApplicationComponents(params: { [K in keyof ParamsFrom<'listApplicationComponents', { next?: string, limit?: number }>]: ParamsFrom<'listApplicationComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listApplicationComponents'>]-?: ReturnTypeFrom<'listApplicationComponents'>[K]}['applicationComponentInfos'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applicationComponentInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplicationComponents({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listApplicationComponents' })).toString('base64');
    const member = (Array.isArray(result.applicationComponentInfos ?? []) ? (result.applicationComponentInfos ?? []) : [result.applicationComponentInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCollectors(params: { [K in keyof ParamsFrom<'listCollectors', { next?: string, limit?: number }>]: ParamsFrom<'listCollectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCollectors'>]-?: ReturnTypeFrom<'listCollectors'>[K]}['Collectors'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"Collectors"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCollectors({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listCollectors' })).toString('base64');
    const member = (Array.isArray(result.Collectors ?? []) ? (result.Collectors ?? []) : [result.Collectors]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImportFileTask(params: { [K in keyof ParamsFrom<'listImportFileTask', { next?: string, limit?: number }>]: ParamsFrom<'listImportFileTask', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listImportFileTask'>]-?: ReturnTypeFrom<'listImportFileTask'>[K]}['taskInfos'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"taskInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImportFileTask({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listImportFileTask' })).toString('base64');
    const member = (Array.isArray(result.taskInfos ?? []) ? (result.taskInfos ?? []) : [result.taskInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServers(params: { [K in keyof ParamsFrom<'listServers', { next?: string, limit?: number }>]: ParamsFrom<'listServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServers'>]-?: ReturnTypeFrom<'listServers'>[K]}['serverInfos'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"serverInfos"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listServers' })).toString('base64');
    const member = (Array.isArray(result.serverInfos ?? []) ? (result.serverInfos ?? []) : [result.serverInfos]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  putPortfolioPreferences: (params: RawParamsFrom<'putPortfolioPreferences'>) => Promise<ReturnTypeFrom<'putPortfolioPreferences'>>  = async params => {
  // undefined
    return this.client.putPortfolioPreferences(params as any).promise();
  }

  startAssessment: (params: RawParamsFrom<'startAssessment'>) => Promise<ReturnTypeFrom<'startAssessment'>>  = async params => {
  // undefined
    return this.client.startAssessment(params as any).promise();
  }

  startImportFileTask: (params: RawParamsFrom<'startImportFileTask'>) => Promise<ReturnTypeFrom<'startImportFileTask'>>  = async params => {
  // undefined
    return this.client.startImportFileTask(params as any).promise();
  }

  startRecommendationReportGeneration: (params: RawParamsFrom<'startRecommendationReportGeneration'>) => Promise<ReturnTypeFrom<'startRecommendationReportGeneration'>>  = async params => {
  // undefined
    return this.client.startRecommendationReportGeneration(params as any).promise();
  }

  stopAssessment: (params: RawParamsFrom<'stopAssessment'>) => Promise<ReturnTypeFrom<'stopAssessment'>>  = async params => {
  // undefined
    return this.client.stopAssessment(params as any).promise();
  }

  updateApplicationComponentConfig: (params: RawParamsFrom<'updateApplicationComponentConfig'>) => Promise<ReturnTypeFrom<'updateApplicationComponentConfig'>>  = async params => {
  // undefined
    return this.client.updateApplicationComponentConfig(params as any).promise();
  }

  updateServerConfig: (params: RawParamsFrom<'updateServerConfig'>) => Promise<ReturnTypeFrom<'updateServerConfig'>>  = async params => {
  // undefined
    return this.client.updateServerConfig(params as any).promise();
  }
  
  static fromClient(client: AWSMigrationHubStrategy): MigrationHubStrategy {
    return new MigrationHubStrategy(client) as any;
  }
  
  static client(options?: AWSMigrationHubStrategy.Types.ClientConfiguration): MigrationHubStrategy {
    return new MigrationHubStrategy(new AWSMigrationHubStrategy(options)) as any;
  }
}  
