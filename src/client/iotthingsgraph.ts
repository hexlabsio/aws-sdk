import { Request, IoTThingsGraph as AWSIoTThingsGraph } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSIoTThingsGraph> = AWSIoTThingsGraph[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSIoTThingsGraph> = AWSIoTThingsGraph[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSIoTThingsGraph[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSIoTThingsGraph, Extras> = AWSIoTThingsGraph[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSIoTThingsGraph> = AWSIoTThingsGraph[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class IoTThingsGraph {
  private constructor(private readonly client: AWSIoTThingsGraph) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotthingsgraph' as const;
  public readonly global = false as const;
  public readonly category = 'Internet of Things' as const;
  public readonly topLevelCalls = ["searchFlowTemplates","searchSystemInstances","searchSystemTemplates"] as const;
  
  associateEntityToThing: (params: RawParamsFrom<'associateEntityToThing'>) => Promise<ReturnTypeFrom<'associateEntityToThing'>>  = async params => {
  // undefined
    return this.client.associateEntityToThing(params as any).promise();
  }

  createFlowTemplate: (params: RawParamsFrom<'createFlowTemplate'>) => Promise<ReturnTypeFrom<'createFlowTemplate'>>  = async params => {
  // undefined
    return this.client.createFlowTemplate(params as any).promise();
  }

  createSystemInstance: (params: RawParamsFrom<'createSystemInstance'>) => Promise<ReturnTypeFrom<'createSystemInstance'>>  = async params => {
  // undefined
    return this.client.createSystemInstance(params as any).promise();
  }

  createSystemTemplate: (params: RawParamsFrom<'createSystemTemplate'>) => Promise<ReturnTypeFrom<'createSystemTemplate'>>  = async params => {
  // undefined
    return this.client.createSystemTemplate(params as any).promise();
  }

  deleteFlowTemplate: (params: RawParamsFrom<'deleteFlowTemplate'>) => Promise<ReturnTypeFrom<'deleteFlowTemplate'>>  = async params => {
  // undefined
    return this.client.deleteFlowTemplate(params as any).promise();
  }

  deleteNamespace: (params: RawParamsFrom<'deleteNamespace'>) => Promise<ReturnTypeFrom<'deleteNamespace'>>  = async params => {
  // undefined
    return this.client.deleteNamespace(params as any).promise();
  }

  deleteSystemInstance: (params: RawParamsFrom<'deleteSystemInstance'>) => Promise<ReturnTypeFrom<'deleteSystemInstance'>>  = async params => {
  // undefined
    return this.client.deleteSystemInstance(params as any).promise();
  }

  deleteSystemTemplate: (params: RawParamsFrom<'deleteSystemTemplate'>) => Promise<ReturnTypeFrom<'deleteSystemTemplate'>>  = async params => {
  // undefined
    return this.client.deleteSystemTemplate(params as any).promise();
  }

  deploySystemInstance: (params: RawParamsFrom<'deploySystemInstance'>) => Promise<ReturnTypeFrom<'deploySystemInstance'>>  = async params => {
  // undefined
    return this.client.deploySystemInstance(params as any).promise();
  }

  deprecateFlowTemplate: (params: RawParamsFrom<'deprecateFlowTemplate'>) => Promise<ReturnTypeFrom<'deprecateFlowTemplate'>>  = async params => {
  // undefined
    return this.client.deprecateFlowTemplate(params as any).promise();
  }

  deprecateSystemTemplate: (params: RawParamsFrom<'deprecateSystemTemplate'>) => Promise<ReturnTypeFrom<'deprecateSystemTemplate'>>  = async params => {
  // undefined
    return this.client.deprecateSystemTemplate(params as any).promise();
  }

  describeNamespace: (params: RawParamsFrom<'describeNamespace'>) => Promise<ReturnTypeFrom<'describeNamespace'>>  = async params => {
  // undefined
    return this.client.describeNamespace(params as any).promise();
  }

  dissociateEntityFromThing: (params: RawParamsFrom<'dissociateEntityFromThing'>) => Promise<ReturnTypeFrom<'dissociateEntityFromThing'>>  = async params => {
  // undefined
    return this.client.dissociateEntityFromThing(params as any).promise();
  }

  getEntities: (params: RawParamsFrom<'getEntities'>) => Promise<ReturnTypeFrom<'getEntities'>>  = async params => {
  // undefined
    return this.client.getEntities(params as any).promise();
  }

  getFlowTemplate: (params: RawParamsFrom<'getFlowTemplate'>) => Promise<ReturnTypeFrom<'getFlowTemplate'>>  = async params => {
  // undefined
    return this.client.getFlowTemplate(params as any).promise();
  }

  async getFlowTemplateRevisions(params: { [K in keyof ParamsFrom<'getFlowTemplateRevisions', { next?: string, limit?: number }>]: ParamsFrom<'getFlowTemplateRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getFlowTemplateRevisions'>]-?: ReturnTypeFrom<'getFlowTemplateRevisions'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getFlowTemplateRevisions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getFlowTemplateRevisions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getNamespaceDeletionStatus: (params: RawParamsFrom<'getNamespaceDeletionStatus'>) => Promise<ReturnTypeFrom<'getNamespaceDeletionStatus'>>  = async params => {
  // undefined
    return this.client.getNamespaceDeletionStatus(params as any).promise();
  }

  getSystemInstance: (params: RawParamsFrom<'getSystemInstance'>) => Promise<ReturnTypeFrom<'getSystemInstance'>>  = async params => {
  // undefined
    return this.client.getSystemInstance(params as any).promise();
  }

  getSystemTemplate: (params: RawParamsFrom<'getSystemTemplate'>) => Promise<ReturnTypeFrom<'getSystemTemplate'>>  = async params => {
  // undefined
    return this.client.getSystemTemplate(params as any).promise();
  }

  async getSystemTemplateRevisions(params: { [K in keyof ParamsFrom<'getSystemTemplateRevisions', { next?: string, limit?: number }>]: ParamsFrom<'getSystemTemplateRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'getSystemTemplateRevisions'>]-?: ReturnTypeFrom<'getSystemTemplateRevisions'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getSystemTemplateRevisions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'getSystemTemplateRevisions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  getUploadStatus: (params: RawParamsFrom<'getUploadStatus'>) => Promise<ReturnTypeFrom<'getUploadStatus'>>  = async params => {
  // undefined
    return this.client.getUploadStatus(params as any).promise();
  }

  async listFlowExecutionMessages(params: { [K in keyof ParamsFrom<'listFlowExecutionMessages', { next?: string, limit?: number }>]: ParamsFrom<'listFlowExecutionMessages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFlowExecutionMessages'>]-?: ReturnTypeFrom<'listFlowExecutionMessages'>[K]}['messages'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"messages"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFlowExecutionMessages({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFlowExecutionMessages' })).toString('base64') : undefined;
    const member = (Array.isArray(result.messages ?? []) ? (result.messages ?? []) : [result.messages]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(params: { [K in keyof ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tags"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTagsForResource({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listTagsForResource' })).toString('base64') : undefined;
    const member = (Array.isArray(result.tags ?? []) ? (result.tags ?? []) : [result.tags]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchEntities(params: { [K in keyof ParamsFrom<'searchEntities', { next?: string, limit?: number }>]: ParamsFrom<'searchEntities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchEntities'>]-?: ReturnTypeFrom<'searchEntities'>[K]}['descriptions'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"descriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchEntities({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchEntities' })).toString('base64') : undefined;
    const member = (Array.isArray(result.descriptions ?? []) ? (result.descriptions ?? []) : [result.descriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchFlowExecutions(params: { [K in keyof ParamsFrom<'searchFlowExecutions', { next?: string, limit?: number }>]: ParamsFrom<'searchFlowExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchFlowExecutions'>]-?: ReturnTypeFrom<'searchFlowExecutions'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchFlowExecutions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchFlowExecutions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchFlowTemplates(params: { [K in keyof ParamsFrom<'searchFlowTemplates', { next?: string, limit?: number }>]: ParamsFrom<'searchFlowTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchFlowTemplates'>]-?: ReturnTypeFrom<'searchFlowTemplates'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchFlowTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchFlowTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchSystemInstances(params: { [K in keyof ParamsFrom<'searchSystemInstances', { next?: string, limit?: number }>]: ParamsFrom<'searchSystemInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchSystemInstances'>]-?: ReturnTypeFrom<'searchSystemInstances'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchSystemInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchSystemInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchSystemTemplates(params: { [K in keyof ParamsFrom<'searchSystemTemplates', { next?: string, limit?: number }>]: ParamsFrom<'searchSystemTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchSystemTemplates'>]-?: ReturnTypeFrom<'searchSystemTemplates'>[K]}['summaries'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchSystemTemplates({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchSystemTemplates' })).toString('base64') : undefined;
    const member = (Array.isArray(result.summaries ?? []) ? (result.summaries ?? []) : [result.summaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchThings(params: { [K in keyof ParamsFrom<'searchThings', { next?: string, limit?: number }>]: ParamsFrom<'searchThings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'searchThings'>]-?: ReturnTypeFrom<'searchThings'>[K]}['things'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchThings({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.nextToken ? Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'searchThings' })).toString('base64') : undefined;
    const member = (Array.isArray(result.things ?? []) ? (result.things ?? []) : [result.things]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  undeploySystemInstance: (params: RawParamsFrom<'undeploySystemInstance'>) => Promise<ReturnTypeFrom<'undeploySystemInstance'>>  = async params => {
  // undefined
    return this.client.undeploySystemInstance(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateFlowTemplate: (params: RawParamsFrom<'updateFlowTemplate'>) => Promise<ReturnTypeFrom<'updateFlowTemplate'>>  = async params => {
  // undefined
    return this.client.updateFlowTemplate(params as any).promise();
  }

  updateSystemTemplate: (params: RawParamsFrom<'updateSystemTemplate'>) => Promise<ReturnTypeFrom<'updateSystemTemplate'>>  = async params => {
  // undefined
    return this.client.updateSystemTemplate(params as any).promise();
  }

  uploadEntityDefinitions: (params: RawParamsFrom<'uploadEntityDefinitions'>) => Promise<ReturnTypeFrom<'uploadEntityDefinitions'>>  = async params => {
  // undefined
    return this.client.uploadEntityDefinitions(params as any).promise();
  }
  
  static fromClient(client: AWSIoTThingsGraph): IoTThingsGraph {
    return new IoTThingsGraph(client) as any;
  }
  
  static client(options?: AWSIoTThingsGraph.Types.ClientConfiguration): IoTThingsGraph {
    return new IoTThingsGraph(new AWSIoTThingsGraph(options)) as any;
  }
}  
