import { Request, DataExchange as AWSDataExchange } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSDataExchange> = AWSDataExchange[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSDataExchange> = AWSDataExchange[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSDataExchange[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSDataExchange, Extras> = AWSDataExchange[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSDataExchange> = AWSDataExchange[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class DataExchange {
  private constructor(private readonly client: AWSDataExchange) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dataexchange' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["listDataSets","listEventActions","listJobs"] as const;
  
  cancelJob: (params: RawParamsFrom<'cancelJob'>) => Promise<ReturnTypeFrom<'cancelJob'>>  = async params => {
  // undefined
    return this.client.cancelJob(params as any).promise();
  }

  createDataSet: (params: RawParamsFrom<'createDataSet'>) => Promise<ReturnTypeFrom<'createDataSet'>>  = async params => {
  // undefined
    return this.client.createDataSet(params as any).promise();
  }

  createEventAction: (params: RawParamsFrom<'createEventAction'>) => Promise<ReturnTypeFrom<'createEventAction'>>  = async params => {
  // undefined
    return this.client.createEventAction(params as any).promise();
  }

  createJob: (params: RawParamsFrom<'createJob'>) => Promise<ReturnTypeFrom<'createJob'>>  = async params => {
  // undefined
    return this.client.createJob(params as any).promise();
  }

  createRevision: (params: RawParamsFrom<'createRevision'>) => Promise<ReturnTypeFrom<'createRevision'>>  = async params => {
  // undefined
    return this.client.createRevision(params as any).promise();
  }

  deleteAsset: (params: RawParamsFrom<'deleteAsset'>) => Promise<ReturnTypeFrom<'deleteAsset'>>  = async params => {
  // undefined
    return this.client.deleteAsset(params as any).promise();
  }

  deleteDataSet: (params: RawParamsFrom<'deleteDataSet'>) => Promise<ReturnTypeFrom<'deleteDataSet'>>  = async params => {
  // undefined
    return this.client.deleteDataSet(params as any).promise();
  }

  deleteEventAction: (params: RawParamsFrom<'deleteEventAction'>) => Promise<ReturnTypeFrom<'deleteEventAction'>>  = async params => {
  // undefined
    return this.client.deleteEventAction(params as any).promise();
  }

  deleteRevision: (params: RawParamsFrom<'deleteRevision'>) => Promise<ReturnTypeFrom<'deleteRevision'>>  = async params => {
  // undefined
    return this.client.deleteRevision(params as any).promise();
  }

  getAsset: (params: RawParamsFrom<'getAsset'>) => Promise<ReturnTypeFrom<'getAsset'>>  = async params => {
  // undefined
    return this.client.getAsset(params as any).promise();
  }

  getDataSet: (params: RawParamsFrom<'getDataSet'>) => Promise<ReturnTypeFrom<'getDataSet'>>  = async params => {
  // undefined
    return this.client.getDataSet(params as any).promise();
  }

  getEventAction: (params: RawParamsFrom<'getEventAction'>) => Promise<ReturnTypeFrom<'getEventAction'>>  = async params => {
  // undefined
    return this.client.getEventAction(params as any).promise();
  }

  getJob: (params: RawParamsFrom<'getJob'>) => Promise<ReturnTypeFrom<'getJob'>>  = async params => {
  // undefined
    return this.client.getJob(params as any).promise();
  }

  getRevision: (params: RawParamsFrom<'getRevision'>) => Promise<ReturnTypeFrom<'getRevision'>>  = async params => {
  // undefined
    return this.client.getRevision(params as any).promise();
  }

  async listDataSetRevisions(params: { [K in keyof ParamsFrom<'listDataSetRevisions', { next?: string, limit?: number }>]: ParamsFrom<'listDataSetRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataSetRevisions'>]-?: ReturnTypeFrom<'listDataSetRevisions'>[K]}['Revisions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Revisions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataSetRevisions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Revisions ?? []) ? (result.Revisions ?? []) : [result.Revisions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listDataSets(params: { [K in keyof ParamsFrom<'listDataSets', { next?: string, limit?: number }>]: ParamsFrom<'listDataSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDataSets'>]-?: ReturnTypeFrom<'listDataSets'>[K]}['DataSets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataSets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataSets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.DataSets ?? []) ? (result.DataSets ?? []) : [result.DataSets]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listEventActions(params: { [K in keyof ParamsFrom<'listEventActions', { next?: string, limit?: number }>]: ParamsFrom<'listEventActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEventActions'>]-?: ReturnTypeFrom<'listEventActions'>[K]}['EventActions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EventActions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEventActions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.EventActions ?? []) ? (result.EventActions ?? []) : [result.EventActions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listJobs(params: { [K in keyof ParamsFrom<'listJobs', { next?: string, limit?: number }>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Jobs"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobs({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Jobs ?? []) ? (result.Jobs ?? []) : [result.Jobs]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listRevisionAssets(params: { [K in keyof ParamsFrom<'listRevisionAssets', { next?: string, limit?: number }>]: ParamsFrom<'listRevisionAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRevisionAssets'>]-?: ReturnTypeFrom<'listRevisionAssets'>[K]}['Assets'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Assets"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRevisionAssets({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ;
    const member = (Array.isArray(result.Assets ?? []) ? (result.Assets ?? []) : [result.Assets]) as any;
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

  revokeRevision: (params: RawParamsFrom<'revokeRevision'>) => Promise<ReturnTypeFrom<'revokeRevision'>>  = async params => {
  // undefined
    return this.client.revokeRevision(params as any).promise();
  }

  sendApiAsset: (params: RawParamsFrom<'sendApiAsset'>) => Promise<ReturnTypeFrom<'sendApiAsset'>>  = async params => {
  // undefined
    return this.client.sendApiAsset(params as any).promise();
  }

  startJob: (params: RawParamsFrom<'startJob'>) => Promise<ReturnTypeFrom<'startJob'>>  = async params => {
  // undefined
    return this.client.startJob(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateAsset: (params: RawParamsFrom<'updateAsset'>) => Promise<ReturnTypeFrom<'updateAsset'>>  = async params => {
  // undefined
    return this.client.updateAsset(params as any).promise();
  }

  updateDataSet: (params: RawParamsFrom<'updateDataSet'>) => Promise<ReturnTypeFrom<'updateDataSet'>>  = async params => {
  // undefined
    return this.client.updateDataSet(params as any).promise();
  }

  updateEventAction: (params: RawParamsFrom<'updateEventAction'>) => Promise<ReturnTypeFrom<'updateEventAction'>>  = async params => {
  // undefined
    return this.client.updateEventAction(params as any).promise();
  }

  updateRevision: (params: RawParamsFrom<'updateRevision'>) => Promise<ReturnTypeFrom<'updateRevision'>>  = async params => {
  // undefined
    return this.client.updateRevision(params as any).promise();
  }
  
  static fromClient(client: AWSDataExchange): DataExchange {
    return new DataExchange(client) as any;
  }
  
  static client(options?: AWSDataExchange.Types.ClientConfiguration): DataExchange {
    return new DataExchange(new AWSDataExchange(options)) as any;
  }
}  
