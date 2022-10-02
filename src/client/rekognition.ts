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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'rekognition';
    global: false;
    category: 'Machine Learning'
    topLevelCalls: readonly ["describeProjects","listCollections","listStreamProcessors"];
    
  compareFaces: FunctionTypeFrom<'compareFaces'>;

  copyProjectVersion: FunctionTypeFrom<'copyProjectVersion'>;

  createCollection: FunctionTypeFrom<'createCollection'>;

  createDataset: FunctionTypeFrom<'createDataset'>;

  createProject: FunctionTypeFrom<'createProject'>;

  createProjectVersion: FunctionTypeFrom<'createProjectVersion'>;

  createStreamProcessor: FunctionTypeFrom<'createStreamProcessor'>;

  deleteCollection: FunctionTypeFrom<'deleteCollection'>;

  deleteDataset: FunctionTypeFrom<'deleteDataset'>;

  deleteFaces: FunctionTypeFrom<'deleteFaces'>;

  deleteProject: FunctionTypeFrom<'deleteProject'>;

  deleteProjectPolicy: FunctionTypeFrom<'deleteProjectPolicy'>;

  deleteProjectVersion: FunctionTypeFrom<'deleteProjectVersion'>;

  deleteStreamProcessor: FunctionTypeFrom<'deleteStreamProcessor'>;

  describeCollection: FunctionTypeFrom<'describeCollection'>;

  describeDataset: FunctionTypeFrom<'describeDataset'>;

  describeProjectVersions(params: { [K in keyof Omit<ParamsFrom<'describeProjectVersions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeProjectVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeProjectVersions'>]-?: ReturnTypeFrom<'describeProjectVersions'>[K]}['ProjectVersionDescriptions'] }>
  ;

  describeProjects(params: { [K in keyof Omit<ParamsFrom<'describeProjects', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'describeProjects', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeProjects'>]-?: ReturnTypeFrom<'describeProjects'>[K]}['ProjectDescriptions'] }>
  describeProjects(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeProjects'>]-?: ReturnTypeFrom<'describeProjects'>[K]}['ProjectDescriptions'] }>;

  describeStreamProcessor: FunctionTypeFrom<'describeStreamProcessor'>;

  detectCustomLabels: FunctionTypeFrom<'detectCustomLabels'>;

  detectFaces: FunctionTypeFrom<'detectFaces'>;

  detectLabels: FunctionTypeFrom<'detectLabels'>;

  detectModerationLabels: FunctionTypeFrom<'detectModerationLabels'>;

  detectProtectiveEquipment: FunctionTypeFrom<'detectProtectiveEquipment'>;

  detectText: FunctionTypeFrom<'detectText'>;

  distributeDatasetEntries: FunctionTypeFrom<'distributeDatasetEntries'>;

  getCelebrityInfo: FunctionTypeFrom<'getCelebrityInfo'>;

  getCelebrityRecognition: FunctionTypeFrom<'getCelebrityRecognition'>;

  getContentModeration: FunctionTypeFrom<'getContentModeration'>;

  getFaceDetection: FunctionTypeFrom<'getFaceDetection'>;

  getFaceSearch: FunctionTypeFrom<'getFaceSearch'>;

  getLabelDetection: FunctionTypeFrom<'getLabelDetection'>;

  getPersonTracking: FunctionTypeFrom<'getPersonTracking'>;

  getSegmentDetection: FunctionTypeFrom<'getSegmentDetection'>;

  getTextDetection: FunctionTypeFrom<'getTextDetection'>;

  indexFaces: FunctionTypeFrom<'indexFaces'>;

  listCollections(params: { [K in keyof Omit<ParamsFrom<'listCollections', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCollections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCollections'>]-?: ReturnTypeFrom<'listCollections'>[K]}['CollectionIds'] }>
  listCollections(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCollections'>]-?: ReturnTypeFrom<'listCollections'>[K]}['CollectionIds'] }>;

  listDatasetEntries(params: { [K in keyof Omit<ParamsFrom<'listDatasetEntries', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatasetEntries', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetEntries'>]-?: ReturnTypeFrom<'listDatasetEntries'>[K]}['DatasetEntries'] }>
  ;

  listDatasetLabels(params: { [K in keyof Omit<ParamsFrom<'listDatasetLabels', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDatasetLabels', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDatasetLabels'>]-?: ReturnTypeFrom<'listDatasetLabels'>[K]}['DatasetLabelDescriptions'] }>
  ;

  listFaces(params: { [K in keyof Omit<ParamsFrom<'listFaces', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listFaces', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listFaces'>]-?: ReturnTypeFrom<'listFaces'>[K]}['Faces'] }>
  ;

  listProjectPolicies(params: { [K in keyof Omit<ParamsFrom<'listProjectPolicies', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProjectPolicies', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProjectPolicies'>]-?: ReturnTypeFrom<'listProjectPolicies'>[K]}['ProjectPolicies'] }>
  ;

  listStreamProcessors: FunctionTypeFrom<'listStreamProcessors'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putProjectPolicy: FunctionTypeFrom<'putProjectPolicy'>;

  recognizeCelebrities: FunctionTypeFrom<'recognizeCelebrities'>;

  searchFaces: FunctionTypeFrom<'searchFaces'>;

  searchFacesByImage: FunctionTypeFrom<'searchFacesByImage'>;

  startCelebrityRecognition: FunctionTypeFrom<'startCelebrityRecognition'>;

  startContentModeration: FunctionTypeFrom<'startContentModeration'>;

  startFaceDetection: FunctionTypeFrom<'startFaceDetection'>;

  startFaceSearch: FunctionTypeFrom<'startFaceSearch'>;

  startLabelDetection: FunctionTypeFrom<'startLabelDetection'>;

  startPersonTracking: FunctionTypeFrom<'startPersonTracking'>;

  startProjectVersion: FunctionTypeFrom<'startProjectVersion'>;

  startSegmentDetection: FunctionTypeFrom<'startSegmentDetection'>;

  startStreamProcessor: FunctionTypeFrom<'startStreamProcessor'>;

  startTextDetection: FunctionTypeFrom<'startTextDetection'>;

  stopProjectVersion: FunctionTypeFrom<'stopProjectVersion'>;

  stopStreamProcessor: FunctionTypeFrom<'stopStreamProcessor'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateDatasetEntries: FunctionTypeFrom<'updateDatasetEntries'>;

  updateStreamProcessor: FunctionTypeFrom<'updateStreamProcessor'>
}
 
export class Rekognition implements ClientType {
  private constructor(private readonly client: AWSRekognition) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rekognition';
  public readonly global = false;
  public readonly category = 'Machine Learning';
  public readonly topLevelCalls = ["describeProjects","listCollections","listStreamProcessors"] as const;
  
  async compareFaces(...args: any): Promise<any> {
  // undefined
    return this.client.compareFaces(...args).promise()
  }

  async copyProjectVersion(...args: any): Promise<any> {
  // undefined
    return this.client.copyProjectVersion(...args).promise()
  }

  async createCollection(...args: any): Promise<any> {
  // undefined
    return this.client.createCollection(...args).promise()
  }

  async createDataset(...args: any): Promise<any> {
  // undefined
    return this.client.createDataset(...args).promise()
  }

  async createProject(...args: any): Promise<any> {
  // undefined
    return this.client.createProject(...args).promise()
  }

  async createProjectVersion(...args: any): Promise<any> {
  // undefined
    return this.client.createProjectVersion(...args).promise()
  }

  async createStreamProcessor(...args: any): Promise<any> {
  // undefined
    return this.client.createStreamProcessor(...args).promise()
  }

  async deleteCollection(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCollection(...args).promise()
  }

  async deleteDataset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataset(...args).promise()
  }

  async deleteFaces(...args: any): Promise<any> {
  // undefined
    return this.client.deleteFaces(...args).promise()
  }

  async deleteProject(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProject(...args).promise()
  }

  async deleteProjectPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProjectPolicy(...args).promise()
  }

  async deleteProjectVersion(...args: any): Promise<any> {
  // undefined
    return this.client.deleteProjectVersion(...args).promise()
  }

  async deleteStreamProcessor(...args: any): Promise<any> {
  // undefined
    return this.client.deleteStreamProcessor(...args).promise()
  }

  async describeCollection(...args: any): Promise<any> {
  // undefined
    return this.client.describeCollection(...args).promise()
  }

  async describeDataset(...args: any): Promise<any> {
  // undefined
    return this.client.describeDataset(...args).promise()
  }

  async describeProjectVersions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProjectVersionDescriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeProjectVersions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ProjectVersionDescriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeProjects(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProjectDescriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.describeProjects(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ProjectDescriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeStreamProcessor(...args: any): Promise<any> {
  // undefined
    return this.client.describeStreamProcessor(...args).promise()
  }

  async detectCustomLabels(...args: any): Promise<any> {
  // undefined
    return this.client.detectCustomLabels(...args).promise()
  }

  async detectFaces(...args: any): Promise<any> {
  // undefined
    return this.client.detectFaces(...args).promise()
  }

  async detectLabels(...args: any): Promise<any> {
  // undefined
    return this.client.detectLabels(...args).promise()
  }

  async detectModerationLabels(...args: any): Promise<any> {
  // undefined
    return this.client.detectModerationLabels(...args).promise()
  }

  async detectProtectiveEquipment(...args: any): Promise<any> {
  // undefined
    return this.client.detectProtectiveEquipment(...args).promise()
  }

  async detectText(...args: any): Promise<any> {
  // undefined
    return this.client.detectText(...args).promise()
  }

  async distributeDatasetEntries(...args: any): Promise<any> {
  // undefined
    return this.client.distributeDatasetEntries(...args).promise()
  }

  async getCelebrityInfo(...args: any): Promise<any> {
  // undefined
    return this.client.getCelebrityInfo(...args).promise()
  }

  async getCelebrityRecognition(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getCelebrityRecognition(...args).promise()
  }

  async getContentModeration(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getContentModeration(...args).promise()
  }

  async getFaceDetection(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getFaceDetection(...args).promise()
  }

  async getFaceSearch(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getFaceSearch(...args).promise()
  }

  async getLabelDetection(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getLabelDetection(...args).promise()
  }

  async getPersonTracking(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getPersonTracking(...args).promise()
  }

  async getSegmentDetection(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getSegmentDetection(...args).promise()
  }

  async getTextDetection(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.getTextDetection(...args).promise()
  }

  async indexFaces(...args: any): Promise<any> {
  // undefined
    return this.client.indexFaces(...args).promise()
  }

  async listCollections(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CollectionIds"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCollections(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CollectionIds ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasetEntries(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetEntries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetEntries(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DatasetEntries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDatasetLabels(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DatasetLabelDescriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDatasetLabels(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DatasetLabelDescriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listFaces(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Faces"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listFaces(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Faces ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProjectPolicies(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProjectPolicies"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProjectPolicies(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ProjectPolicies ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listStreamProcessors(...args: any): Promise<any> {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listStreamProcessors(...args).promise()
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putProjectPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.putProjectPolicy(...args).promise()
  }

  async recognizeCelebrities(...args: any): Promise<any> {
  // undefined
    return this.client.recognizeCelebrities(...args).promise()
  }

  async searchFaces(...args: any): Promise<any> {
  // undefined
    return this.client.searchFaces(...args).promise()
  }

  async searchFacesByImage(...args: any): Promise<any> {
  // undefined
    return this.client.searchFacesByImage(...args).promise()
  }

  async startCelebrityRecognition(...args: any): Promise<any> {
  // undefined
    return this.client.startCelebrityRecognition(...args).promise()
  }

  async startContentModeration(...args: any): Promise<any> {
  // undefined
    return this.client.startContentModeration(...args).promise()
  }

  async startFaceDetection(...args: any): Promise<any> {
  // undefined
    return this.client.startFaceDetection(...args).promise()
  }

  async startFaceSearch(...args: any): Promise<any> {
  // undefined
    return this.client.startFaceSearch(...args).promise()
  }

  async startLabelDetection(...args: any): Promise<any> {
  // undefined
    return this.client.startLabelDetection(...args).promise()
  }

  async startPersonTracking(...args: any): Promise<any> {
  // undefined
    return this.client.startPersonTracking(...args).promise()
  }

  async startProjectVersion(...args: any): Promise<any> {
  // undefined
    return this.client.startProjectVersion(...args).promise()
  }

  async startSegmentDetection(...args: any): Promise<any> {
  // undefined
    return this.client.startSegmentDetection(...args).promise()
  }

  async startStreamProcessor(...args: any): Promise<any> {
  // undefined
    return this.client.startStreamProcessor(...args).promise()
  }

  async startTextDetection(...args: any): Promise<any> {
  // undefined
    return this.client.startTextDetection(...args).promise()
  }

  async stopProjectVersion(...args: any): Promise<any> {
  // undefined
    return this.client.stopProjectVersion(...args).promise()
  }

  async stopStreamProcessor(...args: any): Promise<any> {
  // undefined
    return this.client.stopStreamProcessor(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateDatasetEntries(...args: any): Promise<any> {
  // undefined
    return this.client.updateDatasetEntries(...args).promise()
  }

  async updateStreamProcessor(...args: any): Promise<any> {
  // undefined
    return this.client.updateStreamProcessor(...args).promise()
  }
  
  static fromClient(client: AWSRekognition): ClientType {
    return new Rekognition(client) as any;
  }
  
  static client(options?: AWSRekognition.Types.ClientConfiguration): ClientType {
    return new Rekognition(new AWSRekognition(options)) as any;
  }
}  
