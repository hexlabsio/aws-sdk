import { Request, MWAA as AWSMWAA } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSMWAA> = AWSMWAA[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSMWAA> = AWSMWAA[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSMWAA[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSMWAA, Extras> = AWSMWAA[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'airflow';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listEnvironments"];
    
  createCliToken: FunctionTypeFrom<'createCliToken'>;

  createEnvironment: FunctionTypeFrom<'createEnvironment'>;

  createWebLoginToken: FunctionTypeFrom<'createWebLoginToken'>;

  deleteEnvironment: FunctionTypeFrom<'deleteEnvironment'>;

  getEnvironment: FunctionTypeFrom<'getEnvironment'>;

  listEnvironments(params: { [K in keyof Omit<ParamsFrom<'listEnvironments', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['Environments'] }>
  listEnvironments(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['Environments'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  publishMetrics: FunctionTypeFrom<'publishMetrics'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateEnvironment: FunctionTypeFrom<'updateEnvironment'>
}
 
export class MWAA implements ClientType {
  private constructor(private readonly client: AWSMWAA) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'airflow';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listEnvironments"] as const;
  
  async createCliToken(...args: any): Promise<any> {
  // undefined
    return this.client.createCliToken(...args).promise()
  }

  async createEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.createEnvironment(...args).promise()
  }

  async createWebLoginToken(...args: any): Promise<any> {
  // undefined
    return this.client.createWebLoginToken(...args).promise()
  }

  async deleteEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.deleteEnvironment(...args).promise()
  }

  async getEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.getEnvironment(...args).promise()
  }

  async listEnvironments(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Environments"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEnvironments(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Environments ?? [];
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

  async publishMetrics(...args: any): Promise<any> {
  // undefined
    return this.client.publishMetrics(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateEnvironment(...args: any): Promise<any> {
  // undefined
    return this.client.updateEnvironment(...args).promise()
  }
  
  static fromClient(client: AWSMWAA): ClientType {
    return new MWAA(client) as any;
  }
  
  static client(options?: AWSMWAA.Types.ClientConfiguration): ClientType {
    return new MWAA(new AWSMWAA(options)) as any;
  }
}  
