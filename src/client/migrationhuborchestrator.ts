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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMigrationHubOrchestrator> = AWSMigrationHubOrchestrator[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MigrationHubOrchestrator {
  private constructor(private readonly client: AWSMigrationHubOrchestrator) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'migrationhub-orchestrator' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listPlugins","listTemplates","listWorkflows"] as const;
  
  createWorkflow: (params: RawParamsFrom<'createWorkflow'>) => Promise<ReturnTypeFrom<'createWorkflow'>>  = async params => {
  // undefined
    return this.client.createWorkflow(params as any).promise();
  }

  createWorkflowStep: (params: RawParamsFrom<'createWorkflowStep'>) => Promise<ReturnTypeFrom<'createWorkflowStep'>>  = async params => {
  // undefined
    return this.client.createWorkflowStep(params as any).promise();
  }

  createWorkflowStepGroup: (params: RawParamsFrom<'createWorkflowStepGroup'>) => Promise<ReturnTypeFrom<'createWorkflowStepGroup'>>  = async params => {
  // undefined
    return this.client.createWorkflowStepGroup(params as any).promise();
  }

  deleteWorkflow: (params: RawParamsFrom<'deleteWorkflow'>) => Promise<ReturnTypeFrom<'deleteWorkflow'>>  = async params => {
  // undefined
    return this.client.deleteWorkflow(params as any).promise();
  }

  deleteWorkflowStep: (params: RawParamsFrom<'deleteWorkflowStep'>) => Promise<ReturnTypeFrom<'deleteWorkflowStep'>>  = async params => {
  // undefined
    return this.client.deleteWorkflowStep(params as any).promise();
  }

  deleteWorkflowStepGroup: (params: RawParamsFrom<'deleteWorkflowStepGroup'>) => Promise<ReturnTypeFrom<'deleteWorkflowStepGroup'>>  = async params => {
  // undefined
    return this.client.deleteWorkflowStepGroup(params as any).promise();
  }

  getTemplate: (params: RawParamsFrom<'getTemplate'>) => Promise<ReturnTypeFrom<'getTemplate'>>  = async params => {
  // undefined
    return this.client.getTemplate(params as any).promise();
  }

  getTemplateStep: (params: RawParamsFrom<'getTemplateStep'>) => Promise<ReturnTypeFrom<'getTemplateStep'>>  = async params => {
  // undefined
    return this.client.getTemplateStep(params as any).promise();
  }

  getTemplateStepGroup: (params: RawParamsFrom<'getTemplateStepGroup'>) => Promise<ReturnTypeFrom<'getTemplateStepGroup'>>  = async params => {
  // undefined
    return this.client.getTemplateStepGroup(params as any).promise();
  }

  getWorkflow: (params: RawParamsFrom<'getWorkflow'>) => Promise<ReturnTypeFrom<'getWorkflow'>>  = async params => {
  // undefined
    return this.client.getWorkflow(params as any).promise();
  }

  getWorkflowStep: (params: RawParamsFrom<'getWorkflowStep'>) => Promise<ReturnTypeFrom<'getWorkflowStep'>>  = async params => {
  // undefined
    return this.client.getWorkflowStep(params as any).promise();
  }

  getWorkflowStepGroup: (params: RawParamsFrom<'getWorkflowStepGroup'>) => Promise<ReturnTypeFrom<'getWorkflowStepGroup'>>  = async params => {
  // undefined
    return this.client.getWorkflowStepGroup(params as any).promise();
  }

  async listPlugins(params: { [K in keyof ParamsFrom<'listPlugins', { next?: string, limit?: number }>]: ParamsFrom<'listPlugins', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPlugins'>]-?: ReturnTypeFrom<'listPlugins'>[K]}['plugins'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"plugins"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listPlugins({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.plugins ?? []) ? (result.plugins ?? []) : [result.plugins]) as any;
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

  async listTemplateStepGroups(params: { [K in keyof ParamsFrom<'listTemplateStepGroups', { next?: string, limit?: number }>]: ParamsFrom<'listTemplateStepGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTemplateStepGroups'>]-?: ReturnTypeFrom<'listTemplateStepGroups'>[K]}['templateStepGroupSummary'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateStepGroupSummary"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTemplateStepGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.templateStepGroupSummary ?? []) ? (result.templateStepGroupSummary ?? []) : [result.templateStepGroupSummary]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTemplateSteps(params: { [K in keyof ParamsFrom<'listTemplateSteps', { next?: string, limit?: number }>]: ParamsFrom<'listTemplateSteps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTemplateSteps'>]-?: ReturnTypeFrom<'listTemplateSteps'>[K]}['templateStepSummaryList'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateStepSummaryList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTemplateSteps({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.templateStepSummaryList ?? []) ? (result.templateStepSummaryList ?? []) : [result.templateStepSummaryList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listTemplates(params: { [K in keyof ParamsFrom<'listTemplates', { next?: string, limit?: number }>]: ParamsFrom<'listTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTemplates'>]-?: ReturnTypeFrom<'listTemplates'>[K]}['templateSummary'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"templateSummary"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.templateSummary ?? []) ? (result.templateSummary ?? []) : [result.templateSummary]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listWorkflowStepGroups(params: { [K in keyof ParamsFrom<'listWorkflowStepGroups', { next?: string, limit?: number }>]: ParamsFrom<'listWorkflowStepGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkflowStepGroups'>]-?: ReturnTypeFrom<'listWorkflowStepGroups'>[K]}['workflowStepGroupsSummary'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workflowStepGroupsSummary"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkflowStepGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.workflowStepGroupsSummary ?? []) ? (result.workflowStepGroupsSummary ?? []) : [result.workflowStepGroupsSummary]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listWorkflowSteps(params: { [K in keyof ParamsFrom<'listWorkflowSteps', { next?: string, limit?: number }>]: ParamsFrom<'listWorkflowSteps', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkflowSteps'>]-?: ReturnTypeFrom<'listWorkflowSteps'>[K]}['workflowStepsSummary'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"workflowStepsSummary"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkflowSteps({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.workflowStepsSummary ?? []) ? (result.workflowStepsSummary ?? []) : [result.workflowStepsSummary]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listWorkflows(params: { [K in keyof ParamsFrom<'listWorkflows', { next?: string, limit?: number }>]: ParamsFrom<'listWorkflows', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listWorkflows'>]-?: ReturnTypeFrom<'listWorkflows'>[K]}['migrationWorkflowSummary'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"migrationWorkflowSummary"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listWorkflows({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ;
    const member = (Array.isArray(result.migrationWorkflowSummary ?? []) ? (result.migrationWorkflowSummary ?? []) : [result.migrationWorkflowSummary]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  retryWorkflowStep: (params: RawParamsFrom<'retryWorkflowStep'>) => Promise<ReturnTypeFrom<'retryWorkflowStep'>>  = async params => {
  // undefined
    return this.client.retryWorkflowStep(params as any).promise();
  }

  startWorkflow: (params: RawParamsFrom<'startWorkflow'>) => Promise<ReturnTypeFrom<'startWorkflow'>>  = async params => {
  // undefined
    return this.client.startWorkflow(params as any).promise();
  }

  stopWorkflow: (params: RawParamsFrom<'stopWorkflow'>) => Promise<ReturnTypeFrom<'stopWorkflow'>>  = async params => {
  // undefined
    return this.client.stopWorkflow(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateWorkflow: (params: RawParamsFrom<'updateWorkflow'>) => Promise<ReturnTypeFrom<'updateWorkflow'>>  = async params => {
  // undefined
    return this.client.updateWorkflow(params as any).promise();
  }

  updateWorkflowStep: (params: RawParamsFrom<'updateWorkflowStep'>) => Promise<ReturnTypeFrom<'updateWorkflowStep'>>  = async params => {
  // undefined
    return this.client.updateWorkflowStep(params as any).promise();
  }

  updateWorkflowStepGroup: (params: RawParamsFrom<'updateWorkflowStepGroup'>) => Promise<ReturnTypeFrom<'updateWorkflowStepGroup'>>  = async params => {
  // undefined
    return this.client.updateWorkflowStepGroup(params as any).promise();
  }
  
  static fromClient(client: AWSMigrationHubOrchestrator): MigrationHubOrchestrator {
    return new MigrationHubOrchestrator(client) as any;
  }
  
  static client(options?: AWSMigrationHubOrchestrator.Types.ClientConfiguration): MigrationHubOrchestrator {
    return new MigrationHubOrchestrator(new AWSMigrationHubOrchestrator(options)) as any;
  }
}  
