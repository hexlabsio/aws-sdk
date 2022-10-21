import { Request, Rekognition as AWSRekognition } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRekognition> = AWSRekognition[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRekognition> = AWSRekognition[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRekognition[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRekognition, Extras> = AWSRekognition[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRekognition> = AWSRekognition[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Rekognition {
  private constructor(private readonly client: AWSRekognition) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rekognition' as const;
  public readonly global = false as const;
  public readonly category = 'Machine Learning' as const;
  public readonly topLevelCalls = ["describeProjects","listCollections","listStreamProcessors"] as const;
  
  compareFaces: (params: RawParamsFrom<'compareFaces'>) => Promise<ReturnTypeFrom<'compareFaces'>>  = async params => {
  // undefined
    return this.client.compareFaces(params as any).promise();
  }

  copyProjectVersion: (params: RawParamsFrom<'copyProjectVersion'>) => Promise<ReturnTypeFrom<'copyProjectVersion'>>  = async params => {
  // undefined
    return this.client.copyProjectVersion(params as any).promise();
  }

  createCollection: (params: RawParamsFrom<'createCollection'>) => Promise<ReturnTypeFrom<'createCollection'>>  = async params => {
  // undefined
    return this.client.createCollection(params as any).promise();
  }

  createDataset: (params: RawParamsFrom<'createDataset'>) => Promise<ReturnTypeFrom<'createDataset'>>  = async params => {
  // undefined
    return this.client.createDataset(params as any).promise();
  }

  createProject: (params: RawParamsFrom<'createProject'>) => Promise<ReturnTypeFrom<'createProject'>>  = async params => {
  // undefined
    return this.client.createProject(params as any).promise();
  }

  createProjectVersion: (params: RawParamsFrom<'createProjectVersion'>) => Promise<ReturnTypeFrom<'createProjectVersion'>>  = async params => {
  // undefined
    return this.client.createProjectVersion(params as any).promise();
  }

  createStreamProcessor: (params: RawParamsFrom<'createStreamProcessor'>) => Promise<ReturnTypeFrom<'createStreamProcessor'>>  = async params => {
  // undefined
    return this.client.createStreamProcessor(params as any).promise();
  }

  deleteCollection: (params: RawParamsFrom<'deleteCollection'>) => Promise<ReturnTypeFrom<'deleteCollection'>>  = async params => {
  // undefined
    return this.client.deleteCollection(params as any).promise();
  }

  deleteDataset: (params: RawParamsFrom<'deleteDataset'>) => Promise<ReturnTypeFrom<'deleteDataset'>>  = async params => {
  // undefined
    return this.client.deleteDataset(params as any).promise();
  }

  deleteFaces: (params: RawParamsFrom<'deleteFaces'>) => Promise<ReturnTypeFrom<'deleteFaces'>>  = async params => {
  // undefined
    return this.client.deleteFaces(params as any).promise();
  }

  deleteProject: (params: RawParamsFrom<'deleteProject'>) => Promise<ReturnTypeFrom<'deleteProject'>>  = async params => {
  // undefined
    return this.client.deleteProject(params as any).promise();
  }

  deleteProjectPolicy: (params: RawParamsFrom<'deleteProjectPolicy'>) => Promise<ReturnTypeFrom<'deleteProjectPolicy'>>  = async params => {
  // undefined
    return this.client.deleteProjectPolicy(params as any).promise();
  }

  deleteProjectVersion: (params: RawParamsFrom<'deleteProjectVersion'>) => Promise<ReturnTypeFrom<'deleteProjectVersion'>>  = async params => {
  // undefined
    return this.client.deleteProjectVersion(params as any).promise();
  }

  deleteStreamProcessor: (params: RawParamsFrom<'deleteStreamProcessor'>) => Promise<ReturnTypeFrom<'deleteStreamProcessor'>>  = async params => {
  // undefined
    return this.client.deleteStreamProcessor(params as any).promise();
  }

  describeCollection: (params: RawParamsFrom<'describeCollection'>) => Promise<ReturnTypeFrom<'describeCollection'>>  = async params => {
  // undefined
    return this.client.describeCollection(params as any).promise();
  }

  describeDataset: (params: RawParamsFrom<'describeDataset'>) => Promise<ReturnTypeFrom<'describeDataset'>>  = async params => {
  // undefined
    return this.client.describeDataset(params as any).promise();
  }

  async describeProjectVersions(params: { [K in keyof ParamsFrom<'describeProjectVersions', { next?: string, limit?: number }>]: ParamsFrom<'describeProjectVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeProjectVersions'>]-?: ReturnTypeFrom<'describeProjectVersions'>[K]}['ProjectVersionDescriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProjectVersionDescriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeProjectVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeProjectVersions' })).toString('base64');
    const member = (Array.isArray(result.ProjectVersionDescriptions ?? []) ? (result.ProjectVersionDescriptions ?? []) : [result.ProjectVersionDescriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeProjects(params: { [K in keyof ParamsFrom<'describeProjects', { next?: string, limit?: number }>]: ParamsFrom<'describeProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeProjects'>]-?: ReturnTypeFrom<'describeProjects'>[K]}['ProjectDescriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProjectDescriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeProjects({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'describeProjects' })).toString('base64');
    const member = (Array.isArray(result.ProjectDescriptions ?? []) ? (result.ProjectDescriptions ?? []) : [result.ProjectDescriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeStreamProcessor: (params: RawParamsFrom<'describeStreamProcessor'>) => Promise<ReturnTypeFrom<'describeStreamProcessor'>>  = async params => {
  // undefined
    return this.client.describeStreamProcessor(params as any).promise();
  }

  detectCustomLabels: (params: RawParamsFrom<'detectCustomLabels'>) => Promise<ReturnTypeFrom<'detectCustomLabels'>>  = async params => {
  // undefined
    return this.client.detectCustomLabels(params as any).promise();
  }

  detectFaces: (params: RawParamsFrom<'detectFaces'>) => Promise<ReturnTypeFrom<'detectFaces'>>  = async params => {
  // undefined
    return this.client.detectFaces(params as any).promise();
  }

  detectLabels: (params: RawParamsFrom<'detectLabels'>) => Promise<ReturnTypeFrom<'detectLabels'>>  = async params => {
  // undefined
    return this.client.detectLabels(params as any).promise();
  }

  detectModerationLabels: (params: RawParamsFrom<'detectModerationLabels'>) => Promise<ReturnTypeFrom<'detectModerationLabels'>>  = async params => {
  // undefined
    return this.client.detectModerationLabels(params as any).promise();
  }

  detectProtectiveEquipment: (params: RawParamsFrom<'detectProtectiveEquipment'>) => Promise<ReturnTypeFrom<'detectProtectiveEquipment'>>  = async params => {
  // undefined
    return this.client.detectProtectiveEquipment(params as any).promise();
  }

  detectText: (params: RawParamsFrom<'detectText'>) => Promise<ReturnTypeFrom<'detectText'>>  = async params => {
  // undefined
    return this.client.detectText(params as any).promise();
  }

  distributeDatasetEntries: (params: RawParamsFrom<'distributeDatasetEntries'>) => Promise<ReturnTypeFrom<'distributeDatasetEntries'>>  = async params => {
  // undefined
    return this.client.distributeDatasetEntries(params as any).promise();
  }

  getCelebrityInfo: (params: RawParamsFrom<'getCelebrityInfo'>) => Promise<ReturnTypeFrom<'getCelebrityInfo'>>  = async params => {
  // undefined
    return this.client.getCelebrityInfo(params as any).promise();
  }

  getCelebrityRecognition: (params: RawParamsFrom<'getCelebrityRecognition'>) => Promise<ReturnTypeFrom<'getCelebrityRecognition'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCelebrityRecognition(params as any).promise();
  }

  getContentModeration: (params: RawParamsFrom<'getContentModeration'>) => Promise<ReturnTypeFrom<'getContentModeration'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getContentModeration(params as any).promise();
  }

  getFaceDetection: (params: RawParamsFrom<'getFaceDetection'>) => Promise<ReturnTypeFrom<'getFaceDetection'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getFaceDetection(params as any).promise();
  }

  getFaceSearch: (params: RawParamsFrom<'getFaceSearch'>) => Promise<ReturnTypeFrom<'getFaceSearch'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getFaceSearch(params as any).promise();
  }

  getLabelDetection: (params: RawParamsFrom<'getLabelDetection'>) => Promise<ReturnTypeFrom<'getLabelDetection'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getLabelDetection(params as any).promise();
  }

  getPersonTracking: (params: RawParamsFrom<'getPersonTracking'>) => Promise<ReturnTypeFrom<'getPersonTracking'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getPersonTracking(params as any).promise();
  }

  getSegmentDetection: (params: RawParamsFrom<'getSegmentDetection'>) => Promise<ReturnTypeFrom<'getSegmentDetection'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getSegmentDetection(params as any).promise();
  }

  getTextDetection: (params: RawParamsFrom<'getTextDetection'>) => Promise<ReturnTypeFrom<'getTextDetection'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTextDetection(params as any).promise();
  }

  indexFaces: (params: RawParamsFrom<'indexFaces'>) => Promise<ReturnTypeFrom<'indexFaces'>>  = async params => {
  // undefined
    return this.client.indexFaces(params as any).promise();
  }

  async listCollections(params: { [K in keyof ParamsFrom<'listCollections', { next?: string, limit?: number }>]: ParamsFrom<'listCollections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCollections'>]-?: ReturnTypeFrom<'listCollections'>[K]}['CollectionIds'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CollectionIds"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCollections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCollections' })).toString('base64');
    const member = (Array.isArray(result.CollectionIds ?? []) ? (result.CollectionIds ?? []) : [result.CollectionIds]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasetEntries(params: { [K in keyof ParamsFrom<'listDatasetEntries', { next?: string, limit?: number }>]: ParamsFrom<'listDatasetEntries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasetEntries'>]-?: ReturnTypeFrom<'listDatasetEntries'>[K]}['DatasetEntries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetEntries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetEntries({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDatasetEntries' })).toString('base64');
    const member = (Array.isArray(result.DatasetEntries ?? []) ? (result.DatasetEntries ?? []) : [result.DatasetEntries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasetLabels(params: { [K in keyof ParamsFrom<'listDatasetLabels', { next?: string, limit?: number }>]: ParamsFrom<'listDatasetLabels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDatasetLabels'>]-?: ReturnTypeFrom<'listDatasetLabels'>[K]}['DatasetLabelDescriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetLabelDescriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetLabels({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listDatasetLabels' })).toString('base64');
    const member = (Array.isArray(result.DatasetLabelDescriptions ?? []) ? (result.DatasetLabelDescriptions ?? []) : [result.DatasetLabelDescriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFaces(params: { [K in keyof ParamsFrom<'listFaces', { next?: string, limit?: number }>]: ParamsFrom<'listFaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listFaces'>]-?: ReturnTypeFrom<'listFaces'>[K]}['Faces'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Faces"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFaces({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listFaces' })).toString('base64');
    const member = (Array.isArray(result.Faces ?? []) ? (result.Faces ?? []) : [result.Faces]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjectPolicies(params: { [K in keyof ParamsFrom<'listProjectPolicies', { next?: string, limit?: number }>]: ParamsFrom<'listProjectPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProjectPolicies'>]-?: ReturnTypeFrom<'listProjectPolicies'>[K]}['ProjectPolicies'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProjectPolicies"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProjectPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listProjectPolicies' })).toString('base64');
    const member = (Array.isArray(result.ProjectPolicies ?? []) ? (result.ProjectPolicies ?? []) : [result.ProjectPolicies]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listStreamProcessors: (params: RawParamsFrom<'listStreamProcessors'>) => Promise<ReturnTypeFrom<'listStreamProcessors'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listStreamProcessors(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putProjectPolicy: (params: RawParamsFrom<'putProjectPolicy'>) => Promise<ReturnTypeFrom<'putProjectPolicy'>>  = async params => {
  // undefined
    return this.client.putProjectPolicy(params as any).promise();
  }

  recognizeCelebrities: (params: RawParamsFrom<'recognizeCelebrities'>) => Promise<ReturnTypeFrom<'recognizeCelebrities'>>  = async params => {
  // undefined
    return this.client.recognizeCelebrities(params as any).promise();
  }

  searchFaces: (params: RawParamsFrom<'searchFaces'>) => Promise<ReturnTypeFrom<'searchFaces'>>  = async params => {
  // undefined
    return this.client.searchFaces(params as any).promise();
  }

  searchFacesByImage: (params: RawParamsFrom<'searchFacesByImage'>) => Promise<ReturnTypeFrom<'searchFacesByImage'>>  = async params => {
  // undefined
    return this.client.searchFacesByImage(params as any).promise();
  }

  startCelebrityRecognition: (params: RawParamsFrom<'startCelebrityRecognition'>) => Promise<ReturnTypeFrom<'startCelebrityRecognition'>>  = async params => {
  // undefined
    return this.client.startCelebrityRecognition(params as any).promise();
  }

  startContentModeration: (params: RawParamsFrom<'startContentModeration'>) => Promise<ReturnTypeFrom<'startContentModeration'>>  = async params => {
  // undefined
    return this.client.startContentModeration(params as any).promise();
  }

  startFaceDetection: (params: RawParamsFrom<'startFaceDetection'>) => Promise<ReturnTypeFrom<'startFaceDetection'>>  = async params => {
  // undefined
    return this.client.startFaceDetection(params as any).promise();
  }

  startFaceSearch: (params: RawParamsFrom<'startFaceSearch'>) => Promise<ReturnTypeFrom<'startFaceSearch'>>  = async params => {
  // undefined
    return this.client.startFaceSearch(params as any).promise();
  }

  startLabelDetection: (params: RawParamsFrom<'startLabelDetection'>) => Promise<ReturnTypeFrom<'startLabelDetection'>>  = async params => {
  // undefined
    return this.client.startLabelDetection(params as any).promise();
  }

  startPersonTracking: (params: RawParamsFrom<'startPersonTracking'>) => Promise<ReturnTypeFrom<'startPersonTracking'>>  = async params => {
  // undefined
    return this.client.startPersonTracking(params as any).promise();
  }

  startProjectVersion: (params: RawParamsFrom<'startProjectVersion'>) => Promise<ReturnTypeFrom<'startProjectVersion'>>  = async params => {
  // undefined
    return this.client.startProjectVersion(params as any).promise();
  }

  startSegmentDetection: (params: RawParamsFrom<'startSegmentDetection'>) => Promise<ReturnTypeFrom<'startSegmentDetection'>>  = async params => {
  // undefined
    return this.client.startSegmentDetection(params as any).promise();
  }

  startStreamProcessor: (params: RawParamsFrom<'startStreamProcessor'>) => Promise<ReturnTypeFrom<'startStreamProcessor'>>  = async params => {
  // undefined
    return this.client.startStreamProcessor(params as any).promise();
  }

  startTextDetection: (params: RawParamsFrom<'startTextDetection'>) => Promise<ReturnTypeFrom<'startTextDetection'>>  = async params => {
  // undefined
    return this.client.startTextDetection(params as any).promise();
  }

  stopProjectVersion: (params: RawParamsFrom<'stopProjectVersion'>) => Promise<ReturnTypeFrom<'stopProjectVersion'>>  = async params => {
  // undefined
    return this.client.stopProjectVersion(params as any).promise();
  }

  stopStreamProcessor: (params: RawParamsFrom<'stopStreamProcessor'>) => Promise<ReturnTypeFrom<'stopStreamProcessor'>>  = async params => {
  // undefined
    return this.client.stopStreamProcessor(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateDatasetEntries: (params: RawParamsFrom<'updateDatasetEntries'>) => Promise<ReturnTypeFrom<'updateDatasetEntries'>>  = async params => {
  // undefined
    return this.client.updateDatasetEntries(params as any).promise();
  }

  updateStreamProcessor: (params: RawParamsFrom<'updateStreamProcessor'>) => Promise<ReturnTypeFrom<'updateStreamProcessor'>>  = async params => {
  // undefined
    return this.client.updateStreamProcessor(params as any).promise();
  }
  
  static fromClient(client: AWSRekognition): Rekognition {
    return new Rekognition(client) as any;
  }
  
  static client(options?: AWSRekognition.Types.ClientConfiguration): Rekognition {
    return new Rekognition(new AWSRekognition(options)) as any;
  }
}  
