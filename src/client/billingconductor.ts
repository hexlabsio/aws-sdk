import { Request, Billingconductor as AWSBillingconductor } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSBillingconductor> = AWSBillingconductor[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSBillingconductor> = AWSBillingconductor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSBillingconductor[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSBillingconductor, Extras> = AWSBillingconductor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'billingconductor';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listAccountAssociations","listBillingGroupCostReports","listBillingGroups","listCustomLineItems","listPricingPlans","listPricingRules"];
    
  associateAccounts: FunctionTypeFrom<'associateAccounts'>;

  associatePricingRules: FunctionTypeFrom<'associatePricingRules'>;

  batchAssociateResourcesToCustomLineItem: FunctionTypeFrom<'batchAssociateResourcesToCustomLineItem'>;

  batchDisassociateResourcesFromCustomLineItem: FunctionTypeFrom<'batchDisassociateResourcesFromCustomLineItem'>;

  createBillingGroup: FunctionTypeFrom<'createBillingGroup'>;

  createCustomLineItem: FunctionTypeFrom<'createCustomLineItem'>;

  createPricingPlan: FunctionTypeFrom<'createPricingPlan'>;

  createPricingRule: FunctionTypeFrom<'createPricingRule'>;

  deleteBillingGroup: FunctionTypeFrom<'deleteBillingGroup'>;

  deleteCustomLineItem: FunctionTypeFrom<'deleteCustomLineItem'>;

  deletePricingPlan: FunctionTypeFrom<'deletePricingPlan'>;

  deletePricingRule: FunctionTypeFrom<'deletePricingRule'>;

  disassociateAccounts: FunctionTypeFrom<'disassociateAccounts'>;

  disassociatePricingRules: FunctionTypeFrom<'disassociatePricingRules'>;

  listAccountAssociations(params: { [K in keyof Omit<ParamsFrom<'listAccountAssociations', { next?: string }>, 'NextToken'>]: ParamsFrom<'listAccountAssociations', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountAssociations'>]-?: ReturnTypeFrom<'listAccountAssociations'>[K]}['LinkedAccounts'] }>
  listAccountAssociations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAccountAssociations'>]-?: ReturnTypeFrom<'listAccountAssociations'>[K]}['LinkedAccounts'] }>;

  listBillingGroupCostReports(params: { [K in keyof Omit<ParamsFrom<'listBillingGroupCostReports', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBillingGroupCostReports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBillingGroupCostReports'>]-?: ReturnTypeFrom<'listBillingGroupCostReports'>[K]}['BillingGroupCostReports'] }>
  listBillingGroupCostReports(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBillingGroupCostReports'>]-?: ReturnTypeFrom<'listBillingGroupCostReports'>[K]}['BillingGroupCostReports'] }>;

  listBillingGroups(params: { [K in keyof Omit<ParamsFrom<'listBillingGroups', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listBillingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBillingGroups'>]-?: ReturnTypeFrom<'listBillingGroups'>[K]}['BillingGroups'] }>
  listBillingGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listBillingGroups'>]-?: ReturnTypeFrom<'listBillingGroups'>[K]}['BillingGroups'] }>;

  listCustomLineItems(params: { [K in keyof Omit<ParamsFrom<'listCustomLineItems', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listCustomLineItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomLineItems'>]-?: ReturnTypeFrom<'listCustomLineItems'>[K]}['CustomLineItems'] }>
  listCustomLineItems(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listCustomLineItems'>]-?: ReturnTypeFrom<'listCustomLineItems'>[K]}['CustomLineItems'] }>;

  listPricingPlans(params: { [K in keyof Omit<ParamsFrom<'listPricingPlans', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPricingPlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPricingPlans'>]-?: ReturnTypeFrom<'listPricingPlans'>[K]}['PricingPlans'] }>
  listPricingPlans(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPricingPlans'>]-?: ReturnTypeFrom<'listPricingPlans'>[K]}['PricingPlans'] }>;

  listPricingPlansAssociatedWithPricingRule(params: { [K in keyof Omit<ParamsFrom<'listPricingPlansAssociatedWithPricingRule', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPricingPlansAssociatedWithPricingRule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPricingPlansAssociatedWithPricingRule'>]-?: ReturnTypeFrom<'listPricingPlansAssociatedWithPricingRule'>[K]}['PricingPlanArns'] }>
  ;

  listPricingRules(params: { [K in keyof Omit<ParamsFrom<'listPricingRules', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPricingRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPricingRules'>]-?: ReturnTypeFrom<'listPricingRules'>[K]}['PricingRules'] }>
  listPricingRules(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPricingRules'>]-?: ReturnTypeFrom<'listPricingRules'>[K]}['PricingRules'] }>;

  listPricingRulesAssociatedToPricingPlan(params: { [K in keyof Omit<ParamsFrom<'listPricingRulesAssociatedToPricingPlan', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listPricingRulesAssociatedToPricingPlan', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPricingRulesAssociatedToPricingPlan'>]-?: ReturnTypeFrom<'listPricingRulesAssociatedToPricingPlan'>[K]}['PricingRuleArns'] }>
  ;

  listResourcesAssociatedToCustomLineItem(params: { [K in keyof Omit<ParamsFrom<'listResourcesAssociatedToCustomLineItem', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listResourcesAssociatedToCustomLineItem', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listResourcesAssociatedToCustomLineItem'>]-?: ReturnTypeFrom<'listResourcesAssociatedToCustomLineItem'>[K]}['AssociatedResources'] }>
  ;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>;

  updateBillingGroup: FunctionTypeFrom<'updateBillingGroup'>;

  updateCustomLineItem: FunctionTypeFrom<'updateCustomLineItem'>;

  updatePricingPlan: FunctionTypeFrom<'updatePricingPlan'>;

  updatePricingRule: FunctionTypeFrom<'updatePricingRule'>
}
 
export class Billingconductor implements ClientType {
  private constructor(private readonly client: AWSBillingconductor) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'billingconductor';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listAccountAssociations","listBillingGroupCostReports","listBillingGroups","listCustomLineItems","listPricingPlans","listPricingRules"] as const;
  
  async associateAccounts(...args: any): Promise<any> {
  // undefined
    return this.client.associateAccounts(...args).promise()
  }

  async associatePricingRules(...args: any): Promise<any> {
  // undefined
    return this.client.associatePricingRules(...args).promise()
  }

  async batchAssociateResourcesToCustomLineItem(...args: any): Promise<any> {
  // undefined
    return this.client.batchAssociateResourcesToCustomLineItem(...args).promise()
  }

  async batchDisassociateResourcesFromCustomLineItem(...args: any): Promise<any> {
  // undefined
    return this.client.batchDisassociateResourcesFromCustomLineItem(...args).promise()
  }

  async createBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createBillingGroup(...args).promise()
  }

  async createCustomLineItem(...args: any): Promise<any> {
  // undefined
    return this.client.createCustomLineItem(...args).promise()
  }

  async createPricingPlan(...args: any): Promise<any> {
  // undefined
    return this.client.createPricingPlan(...args).promise()
  }

  async createPricingRule(...args: any): Promise<any> {
  // undefined
    return this.client.createPricingRule(...args).promise()
  }

  async deleteBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteBillingGroup(...args).promise()
  }

  async deleteCustomLineItem(...args: any): Promise<any> {
  // undefined
    return this.client.deleteCustomLineItem(...args).promise()
  }

  async deletePricingPlan(...args: any): Promise<any> {
  // undefined
    return this.client.deletePricingPlan(...args).promise()
  }

  async deletePricingRule(...args: any): Promise<any> {
  // undefined
    return this.client.deletePricingRule(...args).promise()
  }

  async disassociateAccounts(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateAccounts(...args).promise()
  }

  async disassociatePricingRules(...args: any): Promise<any> {
  // undefined
    return this.client.disassociatePricingRules(...args).promise()
  }

  async listAccountAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"LinkedAccounts"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = {};
    const result = await this.client.listAccountAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.LinkedAccounts ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBillingGroupCostReports(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BillingGroupCostReports"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBillingGroupCostReports(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BillingGroupCostReports ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBillingGroups(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BillingGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBillingGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.BillingGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomLineItems(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CustomLineItems"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomLineItems(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.CustomLineItems ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPricingPlans(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PricingPlans"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPricingPlans(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PricingPlans ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPricingPlansAssociatedWithPricingRule(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PricingPlanArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPricingPlansAssociatedWithPricingRule(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PricingPlanArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPricingRules(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PricingRules"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPricingRules(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PricingRules ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPricingRulesAssociatedToPricingPlan(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PricingRuleArns"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPricingRulesAssociatedToPricingPlan(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.PricingRuleArns ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourcesAssociatedToCustomLineItem(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociatedResources"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourcesAssociatedToCustomLineItem(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.AssociatedResources ?? [];
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

  async updateBillingGroup(...args: any): Promise<any> {
  // undefined
    return this.client.updateBillingGroup(...args).promise()
  }

  async updateCustomLineItem(...args: any): Promise<any> {
  // undefined
    return this.client.updateCustomLineItem(...args).promise()
  }

  async updatePricingPlan(...args: any): Promise<any> {
  // undefined
    return this.client.updatePricingPlan(...args).promise()
  }

  async updatePricingRule(...args: any): Promise<any> {
  // undefined
    return this.client.updatePricingRule(...args).promise()
  }
  
  static fromClient(client: AWSBillingconductor): ClientType {
    return new Billingconductor(client) as any;
  }
  
  static client(options?: AWSBillingconductor.Types.ClientConfiguration): ClientType {
    return new Billingconductor(new AWSBillingconductor(options)) as any;
  }
}  
