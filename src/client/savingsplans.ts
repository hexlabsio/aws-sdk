import { Request, SavingsPlans as AWSSavingsPlans } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSSavingsPlans> = AWSSavingsPlans[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSSavingsPlans> = AWSSavingsPlans[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSSavingsPlans[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSSavingsPlans, Extras> = AWSSavingsPlans[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSSavingsPlans> = AWSSavingsPlans[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class SavingsPlans {
  private constructor(private readonly client: AWSSavingsPlans) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'savingsplans' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = [] as const;
  
  createSavingsPlan: (params: RawParamsFrom<'createSavingsPlan'>) => Promise<ReturnTypeFrom<'createSavingsPlan'>>  = async params => {
  // undefined
    return this.client.createSavingsPlan(params as any).promise();
  }

  deleteQueuedSavingsPlan: (params: RawParamsFrom<'deleteQueuedSavingsPlan'>) => Promise<ReturnTypeFrom<'deleteQueuedSavingsPlan'>>  = async params => {
  // undefined
    return this.client.deleteQueuedSavingsPlan(params as any).promise();
  }

  describeSavingsPlanRates: (params: RawParamsFrom<'describeSavingsPlanRates'>) => Promise<ReturnTypeFrom<'describeSavingsPlanRates'>>  = async params => {
  // undefined
    return this.client.describeSavingsPlanRates(params as any).promise();
  }

  describeSavingsPlans: (params: RawParamsFrom<'describeSavingsPlans'>) => Promise<ReturnTypeFrom<'describeSavingsPlans'>>  = async params => {
  // undefined
    return this.client.describeSavingsPlans(params as any).promise();
  }

  describeSavingsPlansOfferingRates: (params: RawParamsFrom<'describeSavingsPlansOfferingRates'>) => Promise<ReturnTypeFrom<'describeSavingsPlansOfferingRates'>>  = async params => {
  // undefined
    return this.client.describeSavingsPlansOfferingRates(params as any).promise();
  }

  describeSavingsPlansOfferings: (params: RawParamsFrom<'describeSavingsPlansOfferings'>) => Promise<ReturnTypeFrom<'describeSavingsPlansOfferings'>>  = async params => {
  // undefined
    return this.client.describeSavingsPlansOfferings(params as any).promise();
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSSavingsPlans): SavingsPlans {
    return new SavingsPlans(client) as any;
  }
  
  static client(options?: AWSSavingsPlans.Types.ClientConfiguration): SavingsPlans {
    return new SavingsPlans(new AWSSavingsPlans(options)) as any;
  }
}  
