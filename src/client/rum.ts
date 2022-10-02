import { Request, RUM as AWSRUM } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRUM> = AWSRUM[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRUM> = AWSRUM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRUM[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRUM, Extras> = AWSRUM[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'rum';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listAppMonitors"];
    
  createAppMonitor: FunctionTypeFrom<'createAppMonitor'>;

  deleteAppMonitor: FunctionTypeFrom<'deleteAppMonitor'>;

  getAppMonitor: FunctionTypeFrom<'getAppMonitor'>;

  getAppMonitorData(params: { [K in keyof Omit<ParamsFrom<'getAppMonitorData', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'getAppMonitorData', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'getAppMonitorData'>]-?: ReturnTypeFrom<'getAppMonitorData'>[K]}['Events'] }>
  ;

  listAppMonitors(params: { [K in keyof Omit<ParamsFrom<'listAppMonitors', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAppMonitors', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAppMonitors'>]-?: ReturnTypeFrom<'listAppMonitors'>[K]}['AppMonitorSummaries'] }>
  listAppMonitors(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAppMonitors'>]-?: ReturnTypeFrom<'listAppMonitors'>[K]}['AppMonitorSummaries'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putRumEvents: FunctionTypeFrom<'putRumEvents'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateAppMonitor: FunctionTypeFrom<'updateAppMonitor'>
}
 
export class RUM implements ClientType {
  private constructor(private readonly client: AWSRUM) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rum';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listAppMonitors"] as const;
  
  async createAppMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.createAppMonitor(...args).promise()
  }

  async deleteAppMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAppMonitor(...args).promise()
  }

  async getAppMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.getAppMonitor(...args).promise()
  }

  async getAppMonitorData(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Events"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.getAppMonitorData(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Events ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listAppMonitors(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AppMonitorSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAppMonitors(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AppMonitorSummaries ?? [];
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

  async putRumEvents(...args: any): Promise<any> {
  // undefined
    return this.client.putRumEvents(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateAppMonitor(...args: any): Promise<any> {
  // undefined
    return this.client.updateAppMonitor(...args).promise()
  }
  
  static fromClient(client: AWSRUM): ClientType {
    return new RUM(client) as any;
  }
  
  static client(options?: AWSRUM.Types.ClientConfiguration): ClientType {
    return new RUM(new AWSRUM(options)) as any;
  }
}  
