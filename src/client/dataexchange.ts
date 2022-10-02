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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'dataexchange';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["listDataSets","listEventActions","listJobs"];
    
  cancelJob: FunctionTypeFrom<'cancelJob'>;

  createDataSet: FunctionTypeFrom<'createDataSet'>;

  createEventAction: FunctionTypeFrom<'createEventAction'>;

  createJob: FunctionTypeFrom<'createJob'>;

  createRevision: FunctionTypeFrom<'createRevision'>;

  deleteAsset: FunctionTypeFrom<'deleteAsset'>;

  deleteDataSet: FunctionTypeFrom<'deleteDataSet'>;

  deleteEventAction: FunctionTypeFrom<'deleteEventAction'>;

  deleteRevision: FunctionTypeFrom<'deleteRevision'>;

  getAsset: FunctionTypeFrom<'getAsset'>;

  getDataSet: FunctionTypeFrom<'getDataSet'>;

  getEventAction: FunctionTypeFrom<'getEventAction'>;

  getJob: FunctionTypeFrom<'getJob'>;

  getRevision: FunctionTypeFrom<'getRevision'>;

  listDataSetRevisions(params: { [K in keyof Omit<ParamsFrom<'listDataSetRevisions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDataSetRevisions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataSetRevisions'>]-?: ReturnTypeFrom<'listDataSetRevisions'>[K]}['Revisions'] }>
  ;

  listDataSets(params: { [K in keyof Omit<ParamsFrom<'listDataSets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listDataSets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataSets'>]-?: ReturnTypeFrom<'listDataSets'>[K]}['DataSets'] }>
  listDataSets(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDataSets'>]-?: ReturnTypeFrom<'listDataSets'>[K]}['DataSets'] }>;

  listEventActions(params: { [K in keyof Omit<ParamsFrom<'listEventActions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEventActions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEventActions'>]-?: ReturnTypeFrom<'listEventActions'>[K]}['EventActions'] }>
  listEventActions(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEventActions'>]-?: ReturnTypeFrom<'listEventActions'>[K]}['EventActions'] }>;

  listJobs(params: { [K in keyof Omit<ParamsFrom<'listJobs', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listJobs', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'] }>
  listJobs(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listJobs'>]-?: ReturnTypeFrom<'listJobs'>[K]}['Jobs'] }>;

  listRevisionAssets(params: { [K in keyof Omit<ParamsFrom<'listRevisionAssets', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRevisionAssets', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRevisionAssets'>]-?: ReturnTypeFrom<'listRevisionAssets'>[K]}['Assets'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  revokeRevision: FunctionTypeFrom<'revokeRevision'>;

  sendApiAsset: FunctionTypeFrom<'sendApiAsset'>;

  startJob: FunctionTypeFrom<'startJob'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAsset: FunctionTypeFrom<'updateAsset'>;

  updateDataSet: FunctionTypeFrom<'updateDataSet'>;

  updateEventAction: FunctionTypeFrom<'updateEventAction'>;

  updateRevision: FunctionTypeFrom<'updateRevision'>
}
 
export class DataExchange implements ClientType {
  private constructor(private readonly client: AWSDataExchange) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'dataexchange';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["listDataSets","listEventActions","listJobs"] as const;
  
  async cancelJob(...args: any): Promise<any> {
  // undefined
    return this.client.cancelJob(...args).promise()
  }

  async createDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.createDataSet(...args).promise()
  }

  async createEventAction(...args: any): Promise<any> {
  // undefined
    return this.client.createEventAction(...args).promise()
  }

  async createJob(...args: any): Promise<any> {
  // undefined
    return this.client.createJob(...args).promise()
  }

  async createRevision(...args: any): Promise<any> {
  // undefined
    return this.client.createRevision(...args).promise()
  }

  async deleteAsset(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAsset(...args).promise()
  }

  async deleteDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDataSet(...args).promise()
  }

  async deleteEventAction(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEventAction(...args).promise()
  }

  async deleteRevision(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRevision(...args).promise()
  }

  async getAsset(...args: any): Promise<any> {
  // undefined
    return this.client.getAsset(...args).promise()
  }

  async getDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.getDataSet(...args).promise()
  }

  async getEventAction(...args: any): Promise<any> {
  // undefined
    return this.client.getEventAction(...args).promise()
  }

  async getJob(...args: any): Promise<any> {
  // undefined
    return this.client.getJob(...args).promise()
  }

  async getRevision(...args: any): Promise<any> {
  // undefined
    return this.client.getRevision(...args).promise()
  }

  async listDataSetRevisions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Revisions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataSetRevisions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Revisions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listDataSets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"DataSets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listDataSets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.DataSets ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listEventActions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"EventActions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEventActions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.EventActions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listJobs(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Jobs"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listJobs(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Jobs ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRevisionAssets(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Assets"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRevisionAssets(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Assets ?? [];
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

  async revokeRevision(...args: any): Promise<any> {
  // undefined
    return this.client.revokeRevision(...args).promise()
  }

  async sendApiAsset(...args: any): Promise<any> {
  // undefined
    return this.client.sendApiAsset(...args).promise()
  }

  async startJob(...args: any): Promise<any> {
  // undefined
    return this.client.startJob(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAsset(...args: any): Promise<any> {
  // undefined
    return this.client.updateAsset(...args).promise()
  }

  async updateDataSet(...args: any): Promise<any> {
  // undefined
    return this.client.updateDataSet(...args).promise()
  }

  async updateEventAction(...args: any): Promise<any> {
  // undefined
    return this.client.updateEventAction(...args).promise()
  }

  async updateRevision(...args: any): Promise<any> {
  // undefined
    return this.client.updateRevision(...args).promise()
  }
  
  static fromClient(client: AWSDataExchange): ClientType {
    return new DataExchange(client) as any;
  }
  
  static client(options?: AWSDataExchange.Types.ClientConfiguration): ClientType {
    return new DataExchange(new AWSDataExchange(options)) as any;
  }
}  
