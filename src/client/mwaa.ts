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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSMWAA> = AWSMWAA[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class MWAA {
  private constructor(private readonly client: AWSMWAA) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'airflow' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listEnvironments"] as const;
  
  createCliToken: (params: RawParamsFrom<'createCliToken'>) => Promise<ReturnTypeFrom<'createCliToken'>>  = async params => {
  // undefined
    return this.client.createCliToken(params as any).promise();
  }

  createEnvironment: (params: RawParamsFrom<'createEnvironment'>) => Promise<ReturnTypeFrom<'createEnvironment'>>  = async params => {
  // undefined
    return this.client.createEnvironment(params as any).promise();
  }

  createWebLoginToken: (params: RawParamsFrom<'createWebLoginToken'>) => Promise<ReturnTypeFrom<'createWebLoginToken'>>  = async params => {
  // undefined
    return this.client.createWebLoginToken(params as any).promise();
  }

  deleteEnvironment: (params: RawParamsFrom<'deleteEnvironment'>) => Promise<ReturnTypeFrom<'deleteEnvironment'>>  = async params => {
  // undefined
    return this.client.deleteEnvironment(params as any).promise();
  }

  getEnvironment: (params: RawParamsFrom<'getEnvironment'>) => Promise<ReturnTypeFrom<'getEnvironment'>>  = async params => {
  // undefined
    return this.client.getEnvironment(params as any).promise();
  }

  async listEnvironments(params: { [K in keyof ParamsFrom<'listEnvironments', { next?: string, limit?: number }>]: ParamsFrom<'listEnvironments', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listEnvironments'>]-?: ReturnTypeFrom<'listEnvironments'>[K]}['Environments'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Environments"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listEnvironments({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listEnvironments' })).toString('base64');
    const member = (Array.isArray(result.Environments ?? []) ? (result.Environments ?? []) : [result.Environments]) as any;
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

  publishMetrics: (params: RawParamsFrom<'publishMetrics'>) => Promise<ReturnTypeFrom<'publishMetrics'>>  = async params => {
  // undefined
    return this.client.publishMetrics(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateEnvironment: (params: RawParamsFrom<'updateEnvironment'>) => Promise<ReturnTypeFrom<'updateEnvironment'>>  = async params => {
  // undefined
    return this.client.updateEnvironment(params as any).promise();
  }
  
  static fromClient(client: AWSMWAA): MWAA {
    return new MWAA(client) as any;
  }
  
  static client(options?: AWSMWAA.Types.ClientConfiguration): MWAA {
    return new MWAA(new AWSMWAA(options)) as any;
  }
}  
