import { Request, Evidently as AWSEvidently } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSEvidently> = AWSEvidently[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSEvidently> = AWSEvidently[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSEvidently[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSEvidently, Extras> = AWSEvidently[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'evidently';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listProjects","listSegments"];
    
  batchEvaluateFeature: FunctionTypeFrom<'batchEvaluateFeature'>;

  createExperiment: FunctionTypeFrom<'createExperiment'>;

  createFeature: FunctionTypeFrom<'createFeature'>;

  createLaunch: FunctionTypeFrom<'createLaunch'>;

  createProject: FunctionTypeFrom<'createProject'>;

  createSegment: FunctionTypeFrom<'createSegment'>;

  deleteExperiment: FunctionTypeFrom<'deleteExperiment'>;

  deleteFeature: FunctionTypeFrom<'deleteFeature'>;

  deleteLaunch: FunctionTypeFrom<'deleteLaunch'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  deleteSegment: FunctionTypeFrom<'deleteSegment'>;

  evaluateFeature: FunctionTypeFrom<'evaluateFeature'>;

  getExperiment: FunctionTypeFrom<'getExperiment'>;

  getExperimentResults: FunctionTypeFrom<'getExperimentResults'>;

  getFeature: FunctionTypeFrom<'getFeature'>;

  getLaunch: FunctionTypeFrom<'getLaunch'>;

  getProject: FunctionTypeFrom<'getProject'>;

  getSegment: FunctionTypeFrom<'getSegment'>;

  listExperiments(params: { [K in keyof Omit<ParamsFrom<'listExperiments', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listExperiments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listExperiments'>]-?: ReturnTypeFrom<'listExperiments'>[K]}['experiments'] }>
  ;

  listFeatures(params: { [K in keyof Omit<ParamsFrom<'listFeatures', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listFeatures', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFeatures'>]-?: ReturnTypeFrom<'listFeatures'>[K]}['features'] }>
  ;

  listLaunches(params: { [K in keyof Omit<ParamsFrom<'listLaunches', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listLaunches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listLaunches'>]-?: ReturnTypeFrom<'listLaunches'>[K]}['launches'] }>
  ;

  listProjects(params: { [K in keyof Omit<ParamsFrom<'listProjects', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'] }>
  listProjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'] }>;

  listSegmentReferences(params: { [K in keyof Omit<ParamsFrom<'listSegmentReferences', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSegmentReferences', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSegmentReferences'>]-?: ReturnTypeFrom<'listSegmentReferences'>[K]}['referencedBy'] }>
  ;

  listSegments(params: { [K in keyof Omit<ParamsFrom<'listSegments', { next?: string, limit?: number }>, 'nextToken' | 'maxResults'>]: ParamsFrom<'listSegments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSegments'>]-?: ReturnTypeFrom<'listSegments'>[K]}['segments'] }>
  listSegments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listSegments'>]-?: ReturnTypeFrom<'listSegments'>[K]}['segments'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putProjectEvents: FunctionTypeFrom<'putProjectEvents'>;

  startExperiment: FunctionTypeFrom<'startExperiment'>;

  startLaunch: FunctionTypeFrom<'startLaunch'>;

  stopExperiment: FunctionTypeFrom<'stopExperiment'>;

  stopLaunch: FunctionTypeFrom<'stopLaunch'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  testSegmentPattern: FunctionTypeFrom<'testSegmentPattern'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateExperiment: FunctionTypeFrom<'updateExperiment'>;

  updateFeature: FunctionTypeFrom<'updateFeature'>;

  updateLaunch: FunctionTypeFrom<'updateLaunch'>;

  updateProject: FunctionTypeFrom<'updateProject'>;

  updateProjectDataDelivery: FunctionTypeFrom<'updateProjectDataDelivery'>
}
 
export class Evidently implements ClientType {
  private constructor(private readonly client: AWSEvidently) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'evidently';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listProjects","listSegments"] as const;
  
  async batchEvaluateFeature(...args: any): Promise<any> {
  // undefined
    return this.client.batchEvaluateFeature(...args).promise()
  }

  async createExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.createExperiment(...args).promise()
  }

  async createFeature(...args: any): Promise<any> {
  // undefined
    return this.client.createFeature(...args).promise()
  }

  async createLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.createLaunch(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async createSegment(...args: any): Promise<any> {
  // undefined
    return this.client.createSegment(...args).promise()
  }

  async deleteExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExperiment(...args).promise()
  }

  async deleteFeature(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFeature(...args).promise()
  }

  async deleteLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLaunch(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async deleteSegment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSegment(...args).promise()
  }

  async evaluateFeature(...args: any): Promise<any> {
  // undefined
    return this.client.evaluateFeature(...args).promise()
  }

  async getExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.getExperiment(...args).promise()
  }

  async getExperimentResults(...args: any): Promise<any> {
  // undefined
    return this.client.getExperimentResults(...args).promise()
  }

  async getFeature(...args: any): Promise<any> {
  // undefined
    return this.client.getFeature(...args).promise()
  }

  async getLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.getLaunch(...args).promise()
  }

  async getProject(...args: any): Promise<any> {
  // undefined
    return this.client.getProject(...args).promise()
  }

  async getSegment(...args: any): Promise<any> {
  // undefined
    return this.client.getSegment(...args).promise()
  }

  async listExperiments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"experiments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listExperiments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.experiments ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFeatures(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"features"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFeatures(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.features ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLaunches(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"launches"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listLaunches(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.launches ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"projects"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.projects ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSegmentReferences(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"referencedBy"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSegmentReferences(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.referencedBy ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSegments(...args: any): Promise<any> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"segments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { nextToken: next } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSegments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.nextToken;
    const member = result.segments ?? [];
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

  async putProjectEvents(...args: any): Promise<any> {
  // undefined
    return this.client.putProjectEvents(...args).promise()
  }

  async startExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.startExperiment(...args).promise()
  }

  async startLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.startLaunch(...args).promise()
  }

  async stopExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.stopExperiment(...args).promise()
  }

  async stopLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.stopLaunch(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async testSegmentPattern(...args: any): Promise<any> {
  // undefined
    return this.client.testSegmentPattern(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateExperiment(...args: any): Promise<any> {
  // undefined
    return this.client.updateExperiment(...args).promise()
  }

  async updateFeature(...args: any): Promise<any> {
  // undefined
    return this.client.updateFeature(...args).promise()
  }

  async updateLaunch(...args: any): Promise<any> {
  // undefined
    return this.client.updateLaunch(...args).promise()
  }

  async updateProject(...args: any): Promise<any> {
  // undefined
    return this.client.updateProject(...args).promise()
  }

  async updateProjectDataDelivery(...args: any): Promise<any> {
  // undefined
    return this.client.updateProjectDataDelivery(...args).promise()
  }
  
  static fromClient(client: AWSEvidently): ClientType {
    return new Evidently(client) as any;
  }
  
  static client(options?: AWSEvidently.Types.ClientConfiguration): ClientType {
    return new Evidently(new AWSEvidently(options)) as any;
  }
}  
