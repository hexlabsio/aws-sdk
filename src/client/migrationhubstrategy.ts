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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'migrationhub-strategy';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listApplicationComponents","listCollectors","listImportFileTask","listServers"];
    
  getApplicationComponentDetails: FunctionTypeFrom<'getApplicationComponentDetails'>;

  getApplicationComponentStrategies: FunctionTypeFrom<'getApplicationComponentStrategies'>;

  getAssessment: FunctionTypeFrom<'getAssessment'>;

  getImportFileTask: FunctionTypeFrom<'getImportFileTask'>;

  getPortfolioPreferences: FunctionTypeFrom<'getPortfolioPreferences'>;

  getPortfolioSummary: FunctionTypeFrom<'getPortfolioSummary'>;

  getRecommendationReportDetails: FunctionTypeFrom<'getRecommendationReportDetails'>;

  getServerDetails(params: { [K in keyof Omit<ParamsFrom<'getServerDetails', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getServerDetails', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getServerDetails'>]-?: ReturnTypeFrom<'getServerDetails'>[K]}['associatedApplications'] }>
  ;

  getServerStrategies: FunctionTypeFrom<'getServerStrategies'>;

  listApplicationComponents(params: { [K in keyof Omit<ParamsFrom<'listApplicationComponents', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listApplicationComponents', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplicationComponents'>]-?: ReturnTypeFrom<'listApplicationComponents'>[K]}['applicationComponentInfos'] }>
  listApplicationComponents(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listApplicationComponents'>]-?: ReturnTypeFrom<'listApplicationComponents'>[K]}['applicationComponentInfos'] }>;

  listCollectors(params: { [K in keyof Omit<ParamsFrom<'listCollectors', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listCollectors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCollectors'>]-?: ReturnTypeFrom<'listCollectors'>[K]}['Collectors'] }>
  listCollectors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCollectors'>]-?: ReturnTypeFrom<'listCollectors'>[K]}['Collectors'] }>;

  listImportFileTask(params: { [K in keyof Omit<ParamsFrom<'listImportFileTask', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listImportFileTask', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImportFileTask'>]-?: ReturnTypeFrom<'listImportFileTask'>[K]}['taskInfos'] }>
  listImportFileTask(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listImportFileTask'>]-?: ReturnTypeFrom<'listImportFileTask'>[K]}['taskInfos'] }>;

  listServers(params: { [K in keyof Omit<ParamsFrom<'listServers', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listServers', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServers'>]-?: ReturnTypeFrom<'listServers'>[K]}['serverInfos'] }>
  listServers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServers'>]-?: ReturnTypeFrom<'listServers'>[K]}['serverInfos'] }>;

  putPortfolioPreferences: FunctionTypeFrom<'putPortfolioPreferences'>;

  startAssessment: FunctionTypeFrom<'startAssessment'>;

  startImportFileTask: FunctionTypeFrom<'startImportFileTask'>;

  startRecommendationReportGeneration: FunctionTypeFrom<'startRecommendationReportGeneration'>;

  stopAssessment: FunctionTypeFrom<'stopAssessment'>;

  updateApplicationComponentConfig: FunctionTypeFrom<'updateApplicationComponentConfig'>;

  updateServerConfig: FunctionTypeFrom<'updateServerConfig'>
}
 
export class MigrationHubStrategy implements ClientType {
  private constructor(private readonly client: AWSMigrationHubStrategy) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'migrationhub-strategy';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listApplicationComponents","listCollectors","listImportFileTask","listServers"] as const;
  
  async getApplicationComponentDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getApplicationComponentDetails(...args).promise()
  }

  async getApplicationComponentStrategies(...args: any): Promise<any> {
  // undefined
    return this.client.getApplicationComponentStrategies(...args).promise()
  }

  async getAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.getAssessment(...args).promise()
  }

  async getImportFileTask(...args: any): Promise<any> {
  // undefined
    return this.client.getImportFileTask(...args).promise()
  }

  async getPortfolioPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.getPortfolioPreferences(...args).promise()
  }

  async getPortfolioSummary(...args: any): Promise<any> {
  // undefined
    return this.client.getPortfolioSummary(...args).promise()
  }

  async getRecommendationReportDetails(...args: any): Promise<any> {
  // undefined
    return this.client.getRecommendationReportDetails(...args).promise()
  }

  async getServerDetails(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"associatedApplications"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getServerDetails(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.associatedApplications ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getServerStrategies(...args: any): Promise<any> {
  // undefined
    return this.client.getServerStrategies(...args).promise()
  }

  async listApplicationComponents(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"applicationComponentInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listApplicationComponents(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.applicationComponentInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCollectors(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"Collectors"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listCollectors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.Collectors ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listImportFileTask(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"taskInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listImportFileTask(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.taskInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServers(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"serverInfos"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listServers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.serverInfos ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async putPortfolioPreferences(...args: any): Promise<any> {
  // undefined
    return this.client.putPortfolioPreferences(...args).promise()
  }

  async startAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.startAssessment(...args).promise()
  }

  async startImportFileTask(...args: any): Promise<any> {
  // undefined
    return this.client.startImportFileTask(...args).promise()
  }

  async startRecommendationReportGeneration(...args: any): Promise<any> {
  // undefined
    return this.client.startRecommendationReportGeneration(...args).promise()
  }

  async stopAssessment(...args: any): Promise<any> {
  // undefined
    return this.client.stopAssessment(...args).promise()
  }

  async updateApplicationComponentConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateApplicationComponentConfig(...args).promise()
  }

  async updateServerConfig(...args: any): Promise<any> {
  // undefined
    return this.client.updateServerConfig(...args).promise()
  }
  
  static fromClient(client: AWSMigrationHubStrategy): ClientType {
    return new MigrationHubStrategy(client) as any;
  }
  
  static client(options?: AWSMigrationHubStrategy.Types.ClientConfiguration): ClientType {
    return new MigrationHubStrategy(new AWSMigrationHubStrategy(options)) as any;
  }
}  
