import { Request, KendraRanking as AWSKendraRanking } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSKendraRanking> = AWSKendraRanking[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSKendraRanking> = AWSKendraRanking[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSKendraRanking[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSKendraRanking, Extras> = AWSKendraRanking[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSKendraRanking> = AWSKendraRanking[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class KendraRanking {
  private constructor(private readonly client: AWSKendraRanking) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'kendra-ranking' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listRescoreExecutionPlans"] as const;
  
  createRescoreExecutionPlan: (params: RawParamsFrom<'createRescoreExecutionPlan'>) => Promise<ReturnTypeFrom<'createRescoreExecutionPlan'>>  = async params => {
  // undefined
    return this.client.createRescoreExecutionPlan(params as any).promise();
  }

  deleteRescoreExecutionPlan: (params: RawParamsFrom<'deleteRescoreExecutionPlan'>) => Promise<ReturnTypeFrom<'deleteRescoreExecutionPlan'>>  = async params => {
  // undefined
    return this.client.deleteRescoreExecutionPlan(params as any).promise();
  }

  describeRescoreExecutionPlan: (params: RawParamsFrom<'describeRescoreExecutionPlan'>) => Promise<ReturnTypeFrom<'describeRescoreExecutionPlan'>>  = async params => {
  // undefined
    return this.client.describeRescoreExecutionPlan(params as any).promise();
  }

  listRescoreExecutionPlans: (params: RawParamsFrom<'listRescoreExecutionPlans'>) => Promise<ReturnTypeFrom<'listRescoreExecutionPlans'>>  = async params => {
  // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken"}
    return this.client.listRescoreExecutionPlans(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  rescore: (params: RawParamsFrom<'rescore'>) => Promise<ReturnTypeFrom<'rescore'>>  = async params => {
  // undefined
    return this.client.rescore(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateRescoreExecutionPlan: (params: RawParamsFrom<'updateRescoreExecutionPlan'>) => Promise<ReturnTypeFrom<'updateRescoreExecutionPlan'>>  = async params => {
  // undefined
    return this.client.updateRescoreExecutionPlan(params as any).promise();
  }
  
  static fromClient(client: AWSKendraRanking): KendraRanking {
    return new KendraRanking(client) as any;
  }
  
  static client(options?: AWSKendraRanking.Types.ClientConfiguration): KendraRanking {
    return new KendraRanking(new AWSKendraRanking(options)) as any;
  }
}  
