import { Request, MigrationHubOrchestrator as AWSMigrationHubOrchestrator } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMigrationHubOrchestrator> = AWSMigrationHubOrchestrator[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMigrationHubOrchestrator> = AWSMigrationHubOrchestrator[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMigrationHubOrchestrator[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMigrationHubOrchestrator, Extras> = AWSMigrationHubOrchestrator[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'migrationhub-orchestrator';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listPlugins","listTemplates","listWorkflows"];
    
  createWorkflow: FunctionTypeFrom<'createWorkflow'>;

  createWorkflowStep: FunctionTypeFrom<'createWorkflowStep'>;

  createWorkflowStepGroup: FunctionTypeFrom<'createWorkflowStepGroup'>;

  deleteWorkflow: FunctionTypeFrom<'deleteWorkflow'>;

  deleteWorkflowStep: FunctionTypeFrom<'deleteWorkflowStep'>;

  deleteWorkflowStepGroup: FunctionTypeFrom<'deleteWorkflowStepGroup'>;

  getTemplate: FunctionTypeFrom<'getTemplate'>;

  getTemplateStep: FunctionTypeFrom<'getTemplateStep'>;

  getTemplateStepGroup: FunctionTypeFrom<'getTemplateStepGroup'>;

  getWorkflow: FunctionTypeFrom<'getWorkflow'>;

  getWorkflowStep: FunctionTypeFrom<'getWorkflowStep'>;

  getWorkflowStepGroup: FunctionTypeFrom<'getWorkflowStepGroup'>;

  listPlugins(params: { [K in keyof Omit<ParamsFrom<'listPlugins', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listPlugins', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlugins'>]-?: ReturnTypeFrom<'listPlugins'>[K]}['plugins'] }>
  listPlugins(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPlugins'>]-?: ReturnTypeFrom<'listPlugins'>[K]}['plugins'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  listTemplateStepGroups(params: { [K in keyof Omit<ParamsFrom<'listTemplateStepGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTemplateStepGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTemplateStepGroups'>]-?: ReturnTypeFrom<'listTemplateStepGroups'>[K]}['templateStepGroupSummary'] }>
  ;

  listTemplateSteps(params: { [K in keyof Omit<ParamsFrom<'listTemplateSteps', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTemplateSteps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTemplateSteps'>]-?: ReturnTypeFrom<'listTemplateSteps'>[K]}['templateStepSummaryList'] }>
  ;

  listTemplates(params: { [K in keyof Omit<ParamsFrom<'listTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTemplates'>]-?: ReturnTypeFrom<'listTemplates'>[K]}['templateSummary'] }>
  listTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTemplates'>]-?: ReturnTypeFrom<'listTemplates'>[K]}['templateSummary'] }>;

  listWorkflowStepGroups(params: { [K in keyof Omit<ParamsFrom<'listWorkflowStepGroups', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorkflowStepGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkflowStepGroups'>]-?: ReturnTypeFrom<'listWorkflowStepGroups'>[K]}['workflowStepGroupsSummary'] }>
  ;

  listWorkflowSteps(params: { [K in keyof Omit<ParamsFrom<'listWorkflowSteps', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorkflowSteps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkflowSteps'>]-?: ReturnTypeFrom<'listWorkflowSteps'>[K]}['workflowStepsSummary'] }>
  ;

  listWorkflows(params: { [K in keyof Omit<ParamsFrom<'listWorkflows', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listWorkflows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkflows'>]-?: ReturnTypeFrom<'listWorkflows'>[K]}['migrationWorkflowSummary'] }>
  listWorkflows(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listWorkflows'>]-?: ReturnTypeFrom<'listWorkflows'>[K]}['migrationWorkflowSummary'] }>;

  retryWorkflowStep: FunctionTypeFrom<'retryWorkflowStep'>;

  startWorkflow: FunctionTypeFrom<'startWorkflow'>;

  stopWorkflow: FunctionTypeFrom<'stopWorkflow'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateWorkflow: FunctionTypeFrom<'updateWorkflow'>;

  updateWorkflowStep: FunctionTypeFrom<'updateWorkflowStep'>;

  updateWorkflowStepGroup: FunctionTypeFrom<'updateWorkflowStepGroup'>
}
 
export class MigrationHubOrchestrator implements ClientType {
  private constructor(private readonly client: AWSMigrationHubOrchestrator) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'migrationhub-orchestrator';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listPlugins","listTemplates","listWorkflows"] as const;
  
  async createWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkflow(...args).promise()
  }

  async createWorkflowStep(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkflowStep(...args).promise()
  }

  async createWorkflowStepGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createWorkflowStepGroup(...args).promise()
  }

  async deleteWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkflow(...args).promise()
  }

  async deleteWorkflowStep(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkflowStep(...args).promise()
  }

  async deleteWorkflowStepGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteWorkflowStepGroup(...args).promise()
  }

  async getTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getTemplate(...args).promise()
  }

  async getTemplateStep(...args: any): Promise<any> {
  // undefined
    return this.client.getTemplateStep(...args).promise()
  }

  async getTemplateStepGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getTemplateStepGroup(...args).promise()
  }

  async getWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkflow(...args).promise()
  }

  async getWorkflowStep(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkflowStep(...args).promise()
  }

  async getWorkflowStepGroup(...args: any): Promise<any> {
  // undefined
    return this.client.getWorkflowStepGroup(...args).promise()
  }

  async listPlugins(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"plugins"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPlugins(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.plugins ?? [];
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

  async listTemplateStepGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateStepGroupSummary"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTemplateStepGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templateStepGroupSummary ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTemplateSteps(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateStepSummaryList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTemplateSteps(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templateStepSummaryList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateSummary"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.templateSummary ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkflowStepGroups(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workflowStepGroupsSummary"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkflowStepGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.workflowStepGroupsSummary ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkflowSteps(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workflowStepsSummary"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkflowSteps(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.workflowStepsSummary ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listWorkflows(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"migrationWorkflowSummary"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkflows(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.migrationWorkflowSummary ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async retryWorkflowStep(...args: any): Promise<any> {
  // undefined
    return this.client.retryWorkflowStep(...args).promise()
  }

  async startWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.startWorkflow(...args).promise()
  }

  async stopWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.stopWorkflow(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateWorkflow(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkflow(...args).promise()
  }

  async updateWorkflowStep(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkflowStep(...args).promise()
  }

  async updateWorkflowStepGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateWorkflowStepGroup(...args).promise()
  }
  
  static fromClient(client: AWSMigrationHubOrchestrator): ClientType {
    return new MigrationHubOrchestrator(client) as any;
  }
  
  static client(options?: AWSMigrationHubOrchestrator.Types.ClientConfiguration): ClientType {
    return new MigrationHubOrchestrator(new AWSMigrationHubOrchestrator(options)) as any;
  }
}  
