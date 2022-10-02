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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'savingsplans';
    global: false;
    category: 'Other'
    topLevelCalls: readonly [];
    
  createSavingsPlan: FunctionTypeFrom<'createSavingsPlan'>;

  deleteQueuedSavingsPlan: FunctionTypeFrom<'deleteQueuedSavingsPlan'>;

  describeSavingsPlanRates: FunctionTypeFrom<'describeSavingsPlanRates'>;

  describeSavingsPlans: FunctionTypeFrom<'describeSavingsPlans'>;

  describeSavingsPlansOfferingRates: FunctionTypeFrom<'describeSavingsPlansOfferingRates'>;

  describeSavingsPlansOfferings: FunctionTypeFrom<'describeSavingsPlansOfferings'>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class SavingsPlans implements ClientType {
  private constructor(private readonly client: AWSSavingsPlans) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'savingsplans';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = [] as const;
  
  async createSavingsPlan(...args: any): Promise<any> {
  // undefined
    return this.client.createSavingsPlan(...args).promise()
  }

  async deleteQueuedSavingsPlan(...args: any): Promise<any> {
  // undefined
    return this.client.deleteQueuedSavingsPlan(...args).promise()
  }

  async describeSavingsPlanRates(...args: any): Promise<any> {
  // undefined
    return this.client.describeSavingsPlanRates(...args).promise()
  }

  async describeSavingsPlans(...args: any): Promise<any> {
  // undefined
    return this.client.describeSavingsPlans(...args).promise()
  }

  async describeSavingsPlansOfferingRates(...args: any): Promise<any> {
  // undefined
    return this.client.describeSavingsPlansOfferingRates(...args).promise()
  }

  async describeSavingsPlansOfferings(...args: any): Promise<any> {
  // undefined
    return this.client.describeSavingsPlansOfferings(...args).promise()
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
  
  static fromClient(client: AWSSavingsPlans): ClientType {
    return new SavingsPlans(client) as any;
  }
  
  static client(options?: AWSSavingsPlans.Types.ClientConfiguration): ClientType {
    return new SavingsPlans(new AWSSavingsPlans(options)) as any;
  }
}  
