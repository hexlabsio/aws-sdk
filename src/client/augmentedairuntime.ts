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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSAugmentedAIRuntime> = AWSAugmentedAIRuntime[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class AugmentedAIRuntime {
  private constructor(private readonly client: AWSAugmentedAIRuntime) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'a2i-runtime' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  deleteHumanLoop: (params: RawParamsFrom<'deleteHumanLoop'>) => Promise<ReturnTypeFrom<'deleteHumanLoop'>>  = async params => {
  // undefined
    return this.client.deleteHumanLoop(params as any).promise();
  }

  describeHumanLoop: (params: RawParamsFrom<'describeHumanLoop'>) => Promise<ReturnTypeFrom<'describeHumanLoop'>>  = async params => {
  // undefined
    return this.client.describeHumanLoop(params as any).promise();
  }

  async listHumanLoops(params: { [K in keyof ParamsFrom<'listHumanLoops', { next?: string, limit?: number }>]: ParamsFrom<'listHumanLoops', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listHumanLoops'>]-?: ReturnTypeFrom<'listHumanLoops'>[K]}['HumanLoopSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"HumanLoopSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listHumanLoops({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listHumanLoops' })).toString('base64') : undefined;
    const member = (Array.isArray(result.HumanLoopSummaries ?? []) ? (result.HumanLoopSummaries ?? []) : [result.HumanLoopSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  startHumanLoop: (params: RawParamsFrom<'startHumanLoop'>) => Promise<ReturnTypeFrom<'startHumanLoop'>>  = async params => {
  // undefined
    return this.client.startHumanLoop(params as any).promise();
  }

  stopHumanLoop: (params: RawParamsFrom<'stopHumanLoop'>) => Promise<ReturnTypeFrom<'stopHumanLoop'>>  = async params => {
  // undefined
    return this.client.stopHumanLoop(params as any).promise();
  }
  
  static fromClient(client: AWSAugmentedAIRuntime): AugmentedAIRuntime {
    return new AugmentedAIRuntime(client) as any;
  }
  
  static client(options?: AWSAugmentedAIRuntime.Types.ClientConfiguration): AugmentedAIRuntime {
    return new AugmentedAIRuntime(new AWSAugmentedAIRuntime(options)) as any;
  }
}  
