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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'iotthingsgraph';
    global: false;
    category: 'Internet of Things'
    topLevelCalls: readonly ["searchFlowTemplates","searchSystemInstances","searchSystemTemplates"];
    
  associateEntityToThing: FunctionTypeFrom<'associateEntityToThing'>;

  createFlowTemplate: FunctionTypeFrom<'createFlowTemplate'>;

  createSystemInstance: FunctionTypeFrom<'createSystemInstance'>;

  createSystemTemplate: FunctionTypeFrom<'createSystemTemplate'>;

  deleteFlowTemplate: FunctionTypeFrom<'deleteFlowTemplate'>;

  deleteNamespace: FunctionTypeFrom<'deleteNamespace'>;

  deleteSystemInstance: FunctionTypeFrom<'deleteSystemInstance'>;

  deleteSystemTemplate: FunctionTypeFrom<'deleteSystemTemplate'>;

  deploySystemInstance: FunctionTypeFrom<'deploySystemInstance'>;

  deprecateFlowTemplate: FunctionTypeFrom<'deprecateFlowTemplate'>;

  deprecateSystemTemplate: FunctionTypeFrom<'deprecateSystemTemplate'>;

  describeNamespace: FunctionTypeFrom<'describeNamespace'>;

  dissociateEntityFromThing: FunctionTypeFrom<'dissociateEntityFromThing'>;

  getEntities: FunctionTypeFrom<'getEntities'>;

  getFlowTemplate: FunctionTypeFrom<'getFlowTemplate'>;

  getFlowTemplateRevisions(params: { [K in keyof Omit<ParamsFrom<'getFlowTemplateRevisions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getFlowTemplateRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getFlowTemplateRevisions'>]-?: ReturnTypeFrom<'getFlowTemplateRevisions'>[K]}['summaries'] }>
  ;

  getNamespaceDeletionStatus: FunctionTypeFrom<'getNamespaceDeletionStatus'>;

  getSystemInstance: FunctionTypeFrom<'getSystemInstance'>;

  getSystemTemplate: FunctionTypeFrom<'getSystemTemplate'>;

  getSystemTemplateRevisions(params: { [K in keyof Omit<ParamsFrom<'getSystemTemplateRevisions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'getSystemTemplateRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getSystemTemplateRevisions'>]-?: ReturnTypeFrom<'getSystemTemplateRevisions'>[K]}['summaries'] }>
  ;

  getUploadStatus: FunctionTypeFrom<'getUploadStatus'>;

  listFlowExecutionMessages(params: { [K in keyof Omit<ParamsFrom<'listFlowExecutionMessages', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFlowExecutionMessages', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFlowExecutionMessages'>]-?: ReturnTypeFrom<'listFlowExecutionMessages'>[K]}['messages'] }>
  ;

  listTagsForResource(params: { [K in keyof Omit<ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listTagsForResource', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listTagsForResource'>]-?: ReturnTypeFrom<'listTagsForResource'>[K]}['tags'] }>
  ;

  searchEntities(params: { [K in keyof Omit<ParamsFrom<'searchEntities', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchEntities', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchEntities'>]-?: ReturnTypeFrom<'searchEntities'>[K]}['descriptions'] }>
  ;

  searchFlowExecutions(params: { [K in keyof Omit<ParamsFrom<'searchFlowExecutions', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchFlowExecutions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchFlowExecutions'>]-?: ReturnTypeFrom<'searchFlowExecutions'>[K]}['summaries'] }>
  ;

  searchFlowTemplates(params: { [K in keyof Omit<ParamsFrom<'searchFlowTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchFlowTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchFlowTemplates'>]-?: ReturnTypeFrom<'searchFlowTemplates'>[K]}['summaries'] }>
  searchFlowTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchFlowTemplates'>]-?: ReturnTypeFrom<'searchFlowTemplates'>[K]}['summaries'] }>;

  searchSystemInstances(params: { [K in keyof Omit<ParamsFrom<'searchSystemInstances', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchSystemInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchSystemInstances'>]-?: ReturnTypeFrom<'searchSystemInstances'>[K]}['summaries'] }>
  searchSystemInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchSystemInstances'>]-?: ReturnTypeFrom<'searchSystemInstances'>[K]}['summaries'] }>;

  searchSystemTemplates(params: { [K in keyof Omit<ParamsFrom<'searchSystemTemplates', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchSystemTemplates', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchSystemTemplates'>]-?: ReturnTypeFrom<'searchSystemTemplates'>[K]}['summaries'] }>
  searchSystemTemplates(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchSystemTemplates'>]-?: ReturnTypeFrom<'searchSystemTemplates'>[K]}['summaries'] }>;

  searchThings(params: { [K in keyof Omit<ParamsFrom<'searchThings', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'searchThings', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'searchThings'>]-?: ReturnTypeFrom<'searchThings'>[K]}['things'] }>
  ;

  tagResource: FunctionTypeFrom<'tagResource'>;

  undeploySystemInstance: FunctionTypeFrom<'undeploySystemInstance'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateFlowTemplate: FunctionTypeFrom<'updateFlowTemplate'>;

  updateSystemTemplate: FunctionTypeFrom<'updateSystemTemplate'>;

  uploadEntityDefinitions: FunctionTypeFrom<'uploadEntityDefinitions'>
}
 
export class IoTThingsGraph implements ClientType {
  private constructor(private readonly client: AWSIoTThingsGraph) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'iotthingsgraph';
  public readonly global = false;
  public readonly category = 'Internet of Things';
  public readonly topLevelCalls = ["searchFlowTemplates","searchSystemInstances","searchSystemTemplates"] as const;
  
  async associateEntityToThing(...args: any): Promise<any> {
  // undefined
    return this.client.associateEntityToThing(...args).promise()
  }

  async createFlowTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createFlowTemplate(...args).promise()
  }

  async createSystemInstance(...args: any): Promise<any> {
  // undefined
    return this.client.createSystemInstance(...args).promise()
  }

  async createSystemTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.createSystemTemplate(...args).promise()
  }

  async deleteFlowTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFlowTemplate(...args).promise()
  }

  async deleteNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.deleteNamespace(...args).promise()
  }

  async deleteSystemInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSystemInstance(...args).promise()
  }

  async deleteSystemTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSystemTemplate(...args).promise()
  }

  async deploySystemInstance(...args: any): Promise<any> {
  // undefined
    return this.client.deploySystemInstance(...args).promise()
  }

  async deprecateFlowTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deprecateFlowTemplate(...args).promise()
  }

  async deprecateSystemTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deprecateSystemTemplate(...args).promise()
  }

  async describeNamespace(...args: any): Promise<any> {
  // undefined
    return this.client.describeNamespace(...args).promise()
  }

  async dissociateEntityFromThing(...args: any): Promise<any> {
  // undefined
    return this.client.dissociateEntityFromThing(...args).promise()
  }

  async getEntities(...args: any): Promise<any> {
  // undefined
    return this.client.getEntities(...args).promise()
  }

  async getFlowTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getFlowTemplate(...args).promise()
  }

  async getFlowTemplateRevisions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getFlowTemplateRevisions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getNamespaceDeletionStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getNamespaceDeletionStatus(...args).promise()
  }

  async getSystemInstance(...args: any): Promise<any> {
  // undefined
    return this.client.getSystemInstance(...args).promise()
  }

  async getSystemTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getSystemTemplate(...args).promise()
  }

  async getSystemTemplateRevisions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.getSystemTemplateRevisions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async getUploadStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getUploadStatus(...args).promise()
  }

  async listFlowExecutionMessages(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"messages"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFlowExecutionMessages(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.messages ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"tags"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listTagsForResource(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.tags ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchEntities(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"descriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchEntities(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.descriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchFlowExecutions(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchFlowExecutions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchFlowTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchFlowTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchSystemInstances(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchSystemInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchSystemTemplates(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"summaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchSystemTemplates(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.summaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async searchThings(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"things"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.searchThings(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.things ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async undeploySystemInstance(...args: any): Promise<any> {
  // undefined
    return this.client.undeploySystemInstance(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateFlowTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateFlowTemplate(...args).promise()
  }

  async updateSystemTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.updateSystemTemplate(...args).promise()
  }

  async uploadEntityDefinitions(...args: any): Promise<any> {
  // undefined
    return this.client.uploadEntityDefinitions(...args).promise()
  }
  
  static fromClient(client: AWSIoTThingsGraph): ClientType {
    return new IoTThingsGraph(client) as any;
  }
  
  static client(options?: AWSIoTThingsGraph.Types.ClientConfiguration): ClientType {
    return new IoTThingsGraph(new AWSIoTThingsGraph(options)) as any;
  }
}  
