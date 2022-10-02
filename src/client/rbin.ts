import { Request, Rbin as AWSRbin } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRbin> = AWSRbin[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRbin> = AWSRbin[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRbin[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRbin, Extras> = AWSRbin[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'rbin';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  createRule: FunctionTypeFrom<'createRule'>;

  deleteRule: FunctionTypeFrom<'deleteRule'>;

  getRule: FunctionTypeFrom<'getRule'>;

  listRules(params: { [K in keyof Omit<ParamsFrom<'listRules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRules'>]-?: ReturnTypeFrom<'listRules'>[K]}['Rules'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateRule: FunctionTypeFrom<'updateRule'>
}
 
export class Rbin implements ClientType {
  private constructor(private readonly client: AWSRbin) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'rbin';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async createRule(...args: any): Promise<any> {
  // undefined
    return this.client.createRule(...args).promise()
  }

  async deleteRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRule(...args).promise()
  }

  async getRule(...args: any): Promise<any> {
  // undefined
    return this.client.getRule(...args).promise()
  }

  async listRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Rules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Rules ?? [];
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

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }

  async updateRule(...args: any): Promise<any> {
  // undefined
    return this.client.updateRule(...args).promise()
  }
  
  static fromClient(client: AWSRbin): ClientType {
    return new Rbin(client) as any;
  }
  
  static client(options?: AWSRbin.Types.ClientConfiguration): ClientType {
    return new Rbin(new AWSRbin(options)) as any;
  }
}  
