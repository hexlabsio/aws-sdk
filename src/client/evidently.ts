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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSEvidently> = AWSEvidently[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Evidently {
  private constructor(private readonly client: AWSEvidently) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'evidently' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listProjects","listSegments"] as const;
  
  batchEvaluateFeature: (params: RawParamsFrom<'batchEvaluateFeature'>) => Promise<ReturnTypeFrom<'batchEvaluateFeature'>>  = async params => {
  // undefined
    return this.client.batchEvaluateFeature(params as any).promise();
  }

  createExperiment: (params: RawParamsFrom<'createExperiment'>) => Promise<ReturnTypeFrom<'createExperiment'>>  = async params => {
  // undefined
    return this.client.createExperiment(params as any).promise();
  }

  createFeature: (params: RawParamsFrom<'createFeature'>) => Promise<ReturnTypeFrom<'createFeature'>>  = async params => {
  // undefined
    return this.client.createFeature(params as any).promise();
  }

  createLaunch: (params: RawParamsFrom<'createLaunch'>) => Promise<ReturnTypeFrom<'createLaunch'>>  = async params => {
  // undefined
    return this.client.createLaunch(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  createSegment: (params: RawParamsFrom<'createSegment'>) => Promise<ReturnTypeFrom<'createSegment'>>  = async params => {
  // undefined
    return this.client.createSegment(params as any).promise();
  }

  deleteExperiment: (params: RawParamsFrom<'deleteExperiment'>) => Promise<ReturnTypeFrom<'deleteExperiment'>>  = async params => {
  // undefined
    return this.client.deleteExperiment(params as any).promise();
  }

  deleteFeature: (params: RawParamsFrom<'deleteFeature'>) => Promise<ReturnTypeFrom<'deleteFeature'>>  = async params => {
  // undefined
    return this.client.deleteFeature(params as any).promise();
  }

  deleteLaunch: (params: RawParamsFrom<'deleteLaunch'>) => Promise<ReturnTypeFrom<'deleteLaunch'>>  = async params => {
  // undefined
    return this.client.deleteLaunch(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  deleteSegment: (params: RawParamsFrom<'deleteSegment'>) => Promise<ReturnTypeFrom<'deleteSegment'>>  = async params => {
  // undefined
    return this.client.deleteSegment(params as any).promise();
  }

  evaluateFeature: (params: RawParamsFrom<'evaluateFeature'>) => Promise<ReturnTypeFrom<'evaluateFeature'>>  = async params => {
  // undefined
    return this.client.evaluateFeature(params as any).promise();
  }

  getExperiment: (params: RawParamsFrom<'getExperiment'>) => Promise<ReturnTypeFrom<'getExperiment'>>  = async params => {
  // undefined
    return this.client.getExperiment(params as any).promise();
  }

  getExperimentResults: (params: RawParamsFrom<'getExperimentResults'>) => Promise<ReturnTypeFrom<'getExperimentResults'>>  = async params => {
  // undefined
    return this.client.getExperimentResults(params as any).promise();
  }

  getFeature: (params: RawParamsFrom<'getFeature'>) => Promise<ReturnTypeFrom<'getFeature'>>  = async params => {
  // undefined
    return this.client.getFeature(params as any).promise();
  }

  getLaunch: (params: RawParamsFrom<'getLaunch'>) => Promise<ReturnTypeFrom<'getLaunch'>>  = async params => {
  // undefined
    return this.client.getLaunch(params as any).promise();
  }

  getProject: (params: RawParamsFrom<'getProject'>) => Promise<ReturnTypeFrom<'getProject'>>  = async params => {
  // undefined
    return this.client.getProject(params as any).promise();
  }

  getSegment: (params: RawParamsFrom<'getSegment'>) => Promise<ReturnTypeFrom<'getSegment'>>  = async params => {
  // undefined
    return this.client.getSegment(params as any).promise();
  }

  async listExperiments(params: { [K in keyof ParamsFrom<'listExperiments', { next?: string, limit?: number }>]: ParamsFrom<'listExperiments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listExperiments'>]-?: ReturnTypeFrom<'listExperiments'>[K]}['experiments'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"experiments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listExperiments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listExperiments' })).toString('base64');
    const member = (Array.isArray(result.experiments ?? []) ? (result.experiments ?? []) : [result.experiments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFeatures(params: { [K in keyof ParamsFrom<'listFeatures', { next?: string, limit?: number }>]: ParamsFrom<'listFeatures', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFeatures'>]-?: ReturnTypeFrom<'listFeatures'>[K]}['features'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"features"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listFeatures({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listFeatures' })).toString('base64');
    const member = (Array.isArray(result.features ?? []) ? (result.features ?? []) : [result.features]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLaunches(params: { [K in keyof ParamsFrom<'listLaunches', { next?: string, limit?: number }>]: ParamsFrom<'listLaunches', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLaunches'>]-?: ReturnTypeFrom<'listLaunches'>[K]}['launches'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"launches"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listLaunches({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listLaunches' })).toString('base64');
    const member = (Array.isArray(result.launches ?? []) ? (result.launches ?? []) : [result.launches]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjects(params: { [K in keyof ParamsFrom<'listProjects', { next?: string, limit?: number }>]: ParamsFrom<'listProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjects'>]-?: ReturnTypeFrom<'listProjects'>[K]}['projects'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"projects"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listProjects' })).toString('base64');
    const member = (Array.isArray(result.projects ?? []) ? (result.projects ?? []) : [result.projects]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSegmentReferences(params: { [K in keyof ParamsFrom<'listSegmentReferences', { next?: string, limit?: number }>]: ParamsFrom<'listSegmentReferences', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSegmentReferences'>]-?: ReturnTypeFrom<'listSegmentReferences'>[K]}['referencedBy'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"referencedBy"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSegmentReferences({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSegmentReferences' })).toString('base64');
    const member = (Array.isArray(result.referencedBy ?? []) ? (result.referencedBy ?? []) : [result.referencedBy]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listSegments(params: { [K in keyof ParamsFrom<'listSegments', { next?: string, limit?: number }>]: ParamsFrom<'listSegments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listSegments'>]-?: ReturnTypeFrom<'listSegments'>[K]}['segments'], undefined>}> {
    // {"inputToken":"nextToken","limitKey":"maxResults","outputToken":"nextToken","resultKey":"segments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { nextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { maxResults: limit } : {};
    const result = await this.client.listSegments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.nextToken, operation: 'listSegments' })).toString('base64');
    const member = (Array.isArray(result.segments ?? []) ? (result.segments ?? []) : [result.segments]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putProjectEvents: (params: RawParamsFrom<'putProjectEvents'>) => Promise<ReturnTypeFrom<'putProjectEvents'>>  = async params => {
  // undefined
    return this.client.putProjectEvents(params as any).promise();
  }

  startExperiment: (params: RawParamsFrom<'startExperiment'>) => Promise<ReturnTypeFrom<'startExperiment'>>  = async params => {
  // undefined
    return this.client.startExperiment(params as any).promise();
  }

  startLaunch: (params: RawParamsFrom<'startLaunch'>) => Promise<ReturnTypeFrom<'startLaunch'>>  = async params => {
  // undefined
    return this.client.startLaunch(params as any).promise();
  }

  stopExperiment: (params: RawParamsFrom<'stopExperiment'>) => Promise<ReturnTypeFrom<'stopExperiment'>>  = async params => {
  // undefined
    return this.client.stopExperiment(params as any).promise();
  }

  stopLaunch: (params: RawParamsFrom<'stopLaunch'>) => Promise<ReturnTypeFrom<'stopLaunch'>>  = async params => {
  // undefined
    return this.client.stopLaunch(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  testSegmentPattern: (params: RawParamsFrom<'testSegmentPattern'>) => Promise<ReturnTypeFrom<'testSegmentPattern'>>  = async params => {
  // undefined
    return this.client.testSegmentPattern(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateExperiment: (params: RawParamsFrom<'updateExperiment'>) => Promise<ReturnTypeFrom<'updateExperiment'>>  = async params => {
  // undefined
    return this.client.updateExperiment(params as any).promise();
  }

  updateFeature: (params: RawParamsFrom<'updateFeature'>) => Promise<ReturnTypeFrom<'updateFeature'>>  = async params => {
  // undefined
    return this.client.updateFeature(params as any).promise();
  }

  updateLaunch: (params: RawParamsFrom<'updateLaunch'>) => Promise<ReturnTypeFrom<'updateLaunch'>>  = async params => {
  // undefined
    return this.client.updateLaunch(params as any).promise();
  }

  updateProject: (params: RawParamsFrom<'updateProject'>) => Promise<ReturnTypeFrom<'updateProject'>>  = async params => {
  // undefined
    return this.client.updateProject(params as any).promise();
  }

  updateProjectDataDelivery: (params: RawParamsFrom<'updateProjectDataDelivery'>) => Promise<ReturnTypeFrom<'updateProjectDataDelivery'>>  = async params => {
  // undefined
    return this.client.updateProjectDataDelivery(params as any).promise();
  }
  
  static fromClient(client: AWSEvidently): Evidently {
    return new Evidently(client) as any;
  }
  
  static client(options?: AWSEvidently.Types.ClientConfiguration): Evidently {
    return new Evidently(new AWSEvidently(options)) as any;
  }
}  
