import { Request, SageMakerGeospatial as AWSSageMakerGeospatial } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSageMakerGeospatial> = AWSSageMakerGeospatial[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSageMakerGeospatial> = AWSSageMakerGeospatial[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSageMakerGeospatial[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSageMakerGeospatial, Extras> = AWSSageMakerGeospatial[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSageMakerGeospatial> = AWSSageMakerGeospatial[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SageMakerGeospatial {
  private constructor(private readonly client: AWSSageMakerGeospatial) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'sagemaker-geospatial' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listEarthObservationJobs","listRasterDataCollections","listVectorEnrichmentJobs"] as const;
  
  deleteEarthObservationJob: (params: RawParamsFrom<'deleteEarthObservationJob'>) => Promise<ReturnTypeFrom<'deleteEarthObservationJob'>>  = async params => {
  // undefined
    return this.client.deleteEarthObservationJob(params as any).promise();
  }

  deleteVectorEnrichmentJob: (params: RawParamsFrom<'deleteVectorEnrichmentJob'>) => Promise<ReturnTypeFrom<'deleteVectorEnrichmentJob'>>  = async params => {
  // undefined
    return this.client.deleteVectorEnrichmentJob(params as any).promise();
  }

  exportEarthObservationJob: (params: RawParamsFrom<'exportEarthObservationJob'>) => Promise<ReturnTypeFrom<'exportEarthObservationJob'>>  = async params => {
  // undefined
    return this.client.exportEarthObservationJob(params as any).promise();
  }

  exportVectorEnrichmentJob: (params: RawParamsFrom<'exportVectorEnrichmentJob'>) => Promise<ReturnTypeFrom<'exportVectorEnrichmentJob'>>  = async params => {
  // undefined
    return this.client.exportVectorEnrichmentJob(params as any).promise();
  }

  getEarthObservationJob: (params: RawParamsFrom<'getEarthObservationJob'>) => Promise<ReturnTypeFrom<'getEarthObservationJob'>>  = async params => {
  // undefined
    return this.client.getEarthObservationJob(params as any).promise();
  }

  getRasterDataCollection: (params: RawParamsFrom<'getRasterDataCollection'>) => Promise<ReturnTypeFrom<'getRasterDataCollection'>>  = async params => {
  // undefined
    return this.client.getRasterDataCollection(params as any).promise();
  }

  getTile: (params: RawParamsFrom<'getTile'>) => Promise<ReturnTypeFrom<'getTile'>>  = async params => {
  // undefined
    return this.client.getTile(params as any).promise();
  }

  getVectorEnrichmentJob: (params: RawParamsFrom<'getVectorEnrichmentJob'>) => Promise<ReturnTypeFrom<'getVectorEnrichmentJob'>>  = async params => {
  // undefined
    return this.client.getVectorEnrichmentJob(params as any).promise();
  }

  async listEarthObservationJobs(params: { [K in keyof ParamsFrom<'listEarthObservationJobs', { next?: string, limit?: number }>]: ParamsFrom<'listEarthObservationJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEarthObservationJobs'>]-?: ReturnTypeFrom<'listEarthObservationJobs'>[K]}['EarthObservationJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EarthObservationJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEarthObservationJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEarthObservationJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.EarthObservationJobSummaries ?? []) ? (result.EarthObservationJobSummaries ?? []) : [result.EarthObservationJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRasterDataCollections(params: { [K in keyof ParamsFrom<'listRasterDataCollections', { next?: string, limit?: number }>]: ParamsFrom<'listRasterDataCollections', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRasterDataCollections'>]-?: ReturnTypeFrom<'listRasterDataCollections'>[K]}['RasterDataCollectionSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RasterDataCollectionSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRasterDataCollections({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRasterDataCollections' })).toString('base64') : undefined;
    const member = (Array.isArray(result.RasterDataCollectionSummaries ?? []) ? (result.RasterDataCollectionSummaries ?? []) : [result.RasterDataCollectionSummaries]) as any;
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

  async listVectorEnrichmentJobs(params: { [K in keyof ParamsFrom<'listVectorEnrichmentJobs', { next?: string, limit?: number }>]: ParamsFrom<'listVectorEnrichmentJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listVectorEnrichmentJobs'>]-?: ReturnTypeFrom<'listVectorEnrichmentJobs'>[K]}['VectorEnrichmentJobSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"VectorEnrichmentJobSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listVectorEnrichmentJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listVectorEnrichmentJobs' })).toString('base64') : undefined;
    const member = (Array.isArray(result.VectorEnrichmentJobSummaries ?? []) ? (result.VectorEnrichmentJobSummaries ?? []) : [result.VectorEnrichmentJobSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  searchRasterDataCollection: (params: RawParamsFrom<'searchRasterDataCollection'>) => Promise<ReturnTypeFrom<'searchRasterDataCollection'>>  = async params => {
  // {"inputToken":"NextToken","outputToken":"NextToken"}
    return this.client.searchRasterDataCollection(params as any).promise();
  }

  startEarthObservationJob: (params: RawParamsFrom<'startEarthObservationJob'>) => Promise<ReturnTypeFrom<'startEarthObservationJob'>>  = async params => {
  // undefined
    return this.client.startEarthObservationJob(params as any).promise();
  }

  startVectorEnrichmentJob: (params: RawParamsFrom<'startVectorEnrichmentJob'>) => Promise<ReturnTypeFrom<'startVectorEnrichmentJob'>>  = async params => {
  // undefined
    return this.client.startVectorEnrichmentJob(params as any).promise();
  }

  stopEarthObservationJob: (params: RawParamsFrom<'stopEarthObservationJob'>) => Promise<ReturnTypeFrom<'stopEarthObservationJob'>>  = async params => {
  // undefined
    return this.client.stopEarthObservationJob(params as any).promise();
  }

  stopVectorEnrichmentJob: (params: RawParamsFrom<'stopVectorEnrichmentJob'>) => Promise<ReturnTypeFrom<'stopVectorEnrichmentJob'>>  = async params => {
  // undefined
    return this.client.stopVectorEnrichmentJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSSageMakerGeospatial): SageMakerGeospatial {
    return new SageMakerGeospatial(client) as any;
  }
  
  static client(options?: AWSSageMakerGeospatial.Types.ClientConfiguration): SageMakerGeospatial {
    return new SageMakerGeospatial(new AWSSageMakerGeospatial(options)) as any;
  }
}  
