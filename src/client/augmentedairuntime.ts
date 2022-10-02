import { Request, AugmentedAIRuntime as AWSAugmentedAIRuntime } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSAugmentedAIRuntime> = AWSAugmentedAIRuntime[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSAugmentedAIRuntime> = AWSAugmentedAIRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSAugmentedAIRuntime[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSAugmentedAIRuntime, Extras> = AWSAugmentedAIRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'a2i-runtime';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  deleteHumanLoop: FunctionTypeFrom<'deleteHumanLoop'>;

  describeHumanLoop: FunctionTypeFrom<'describeHumanLoop'>;

  listHumanLoops(params: { [K in keyof Omit<ParamsFrom<'listHumanLoops', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listHumanLoops', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listHumanLoops'>]-?: ReturnTypeFrom<'listHumanLoops'>[K]}['HumanLoopSummaries'] }>
  ;

  startHumanLoop: FunctionTypeFrom<'startHumanLoop'>;

  stopHumanLoop: FunctionTypeFrom<'stopHumanLoop'>
}
 
export class AugmentedAIRuntime implements ClientType {
  private constructor(private readonly client: AWSAugmentedAIRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'a2i-runtime';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async deleteHumanLoop(...args: any): Promise<any> {
  // undefined
    return this.client.deleteHumanLoop(...args).promise()
  }

  async describeHumanLoop(...args: any): Promise<any> {
  // undefined
    return this.client.describeHumanLoop(...args).promise()
  }

  async listHumanLoops(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HumanLoopSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHumanLoops(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.HumanLoopSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async startHumanLoop(...args: any): Promise<any> {
  // undefined
    return this.client.startHumanLoop(...args).promise()
  }

  async stopHumanLoop(...args: any): Promise<any> {
  // undefined
    return this.client.stopHumanLoop(...args).promise()
  }
  
  static fromClient(client: AWSAugmentedAIRuntime): ClientType {
    return new AugmentedAIRuntime(client) as any;
  }
  
  static client(options?: AWSAugmentedAIRuntime.Types.ClientConfiguration): ClientType {
    return new AugmentedAIRuntime(new AWSAugmentedAIRuntime(options)) as any;
  }
}  
