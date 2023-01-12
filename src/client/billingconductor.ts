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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSBillingconductor> = AWSBillingconductor[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Billingconductor {
  private constructor(private readonly client: AWSBillingconductor) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'billingconductor' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listAccountAssociations","listBillingGroupCostReports","listBillingGroups","listCustomLineItems","listPricingPlans","listPricingRules"] as const;
  
  associateAccounts: (params: RawParamsFrom<'associateAccounts'>) => Promise<ReturnTypeFrom<'associateAccounts'>>  = async params => {
  // undefined
    return this.client.associateAccounts(params as any).promise();
  }

  associatePricingRules: (params: RawParamsFrom<'associatePricingRules'>) => Promise<ReturnTypeFrom<'associatePricingRules'>>  = async params => {
  // undefined
    return this.client.associatePricingRules(params as any).promise();
  }

  batchAssociateResourcesToCustomLineItem: (params: RawParamsFrom<'batchAssociateResourcesToCustomLineItem'>) => Promise<ReturnTypeFrom<'batchAssociateResourcesToCustomLineItem'>>  = async params => {
  // undefined
    return this.client.batchAssociateResourcesToCustomLineItem(params as any).promise();
  }

  batchDisassociateResourcesFromCustomLineItem: (params: RawParamsFrom<'batchDisassociateResourcesFromCustomLineItem'>) => Promise<ReturnTypeFrom<'batchDisassociateResourcesFromCustomLineItem'>>  = async params => {
  // undefined
    return this.client.batchDisassociateResourcesFromCustomLineItem(params as any).promise();
  }

  createBillingGroup: (params: RawParamsFrom<'createBillingGroup'>) => Promise<ReturnTypeFrom<'createBillingGroup'>>  = async params => {
  // undefined
    return this.client.createBillingGroup(params as any).promise();
  }

  createCustomLineItem: (params: RawParamsFrom<'createCustomLineItem'>) => Promise<ReturnTypeFrom<'createCustomLineItem'>>  = async params => {
  // undefined
    return this.client.createCustomLineItem(params as any).promise();
  }

  createPricingPlan: (params: RawParamsFrom<'createPricingPlan'>) => Promise<ReturnTypeFrom<'createPricingPlan'>>  = async params => {
  // undefined
    return this.client.createPricingPlan(params as any).promise();
  }

  createPricingRule: (params: RawParamsFrom<'createPricingRule'>) => Promise<ReturnTypeFrom<'createPricingRule'>>  = async params => {
  // undefined
    return this.client.createPricingRule(params as any).promise();
  }

  deleteBillingGroup: (params: RawParamsFrom<'deleteBillingGroup'>) => Promise<ReturnTypeFrom<'deleteBillingGroup'>>  = async params => {
  // undefined
    return this.client.deleteBillingGroup(params as any).promise();
  }

  deleteCustomLineItem: (params: RawParamsFrom<'deleteCustomLineItem'>) => Promise<ReturnTypeFrom<'deleteCustomLineItem'>>  = async params => {
  // undefined
    return this.client.deleteCustomLineItem(params as any).promise();
  }

  deletePricingPlan: (params: RawParamsFrom<'deletePricingPlan'>) => Promise<ReturnTypeFrom<'deletePricingPlan'>>  = async params => {
  // undefined
    return this.client.deletePricingPlan(params as any).promise();
  }

  deletePricingRule: (params: RawParamsFrom<'deletePricingRule'>) => Promise<ReturnTypeFrom<'deletePricingRule'>>  = async params => {
  // undefined
    return this.client.deletePricingRule(params as any).promise();
  }

  disassociateAccounts: (params: RawParamsFrom<'disassociateAccounts'>) => Promise<ReturnTypeFrom<'disassociateAccounts'>>  = async params => {
  // undefined
    return this.client.disassociateAccounts(params as any).promise();
  }

  disassociatePricingRules: (params: RawParamsFrom<'disassociatePricingRules'>) => Promise<ReturnTypeFrom<'disassociatePricingRules'>>  = async params => {
  // undefined
    return this.client.disassociatePricingRules(params as any).promise();
  }

  async listAccountAssociations(params: { [K in keyof ParamsFrom<'listAccountAssociations', { next?: string }>]: ParamsFrom<'listAccountAssociations', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAccountAssociations'>]-?: ReturnTypeFrom<'listAccountAssociations'>[K]}['LinkedAccounts'], undefined>}> {
    // {"inputToken":"NextToken","outputToken":"NextToken","resultKey":"LinkedAccounts"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.listAccountAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAccountAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LinkedAccounts ?? []) ? (result.LinkedAccounts ?? []) : [result.LinkedAccounts]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBillingGroupCostReports(params: { [K in keyof ParamsFrom<'listBillingGroupCostReports', { next?: string, limit?: number }>]: ParamsFrom<'listBillingGroupCostReports', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBillingGroupCostReports'>]-?: ReturnTypeFrom<'listBillingGroupCostReports'>[K]}['BillingGroupCostReports'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BillingGroupCostReports"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBillingGroupCostReports({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBillingGroupCostReports' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BillingGroupCostReports ?? []) ? (result.BillingGroupCostReports ?? []) : [result.BillingGroupCostReports]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listBillingGroups(params: { [K in keyof ParamsFrom<'listBillingGroups', { next?: string, limit?: number }>]: ParamsFrom<'listBillingGroups', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listBillingGroups'>]-?: ReturnTypeFrom<'listBillingGroups'>[K]}['BillingGroups'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"BillingGroups"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listBillingGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listBillingGroups' })).toString('base64') : undefined;
    const member = (Array.isArray(result.BillingGroups ?? []) ? (result.BillingGroups ?? []) : [result.BillingGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomLineItemVersions(params: { [K in keyof ParamsFrom<'listCustomLineItemVersions', { next?: string, limit?: number }>]: ParamsFrom<'listCustomLineItemVersions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomLineItemVersions'>]-?: ReturnTypeFrom<'listCustomLineItemVersions'>[K]}['CustomLineItemVersions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CustomLineItemVersions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomLineItemVersions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCustomLineItemVersions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CustomLineItemVersions ?? []) ? (result.CustomLineItemVersions ?? []) : [result.CustomLineItemVersions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listCustomLineItems(params: { [K in keyof ParamsFrom<'listCustomLineItems', { next?: string, limit?: number }>]: ParamsFrom<'listCustomLineItems', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listCustomLineItems'>]-?: ReturnTypeFrom<'listCustomLineItems'>[K]}['CustomLineItems'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"CustomLineItems"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listCustomLineItems({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listCustomLineItems' })).toString('base64') : undefined;
    const member = (Array.isArray(result.CustomLineItems ?? []) ? (result.CustomLineItems ?? []) : [result.CustomLineItems]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPricingPlans(params: { [K in keyof ParamsFrom<'listPricingPlans', { next?: string, limit?: number }>]: ParamsFrom<'listPricingPlans', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPricingPlans'>]-?: ReturnTypeFrom<'listPricingPlans'>[K]}['PricingPlans'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PricingPlans"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPricingPlans({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPricingPlans' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PricingPlans ?? []) ? (result.PricingPlans ?? []) : [result.PricingPlans]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPricingPlansAssociatedWithPricingRule(params: { [K in keyof ParamsFrom<'listPricingPlansAssociatedWithPricingRule', { next?: string, limit?: number }>]: ParamsFrom<'listPricingPlansAssociatedWithPricingRule', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPricingPlansAssociatedWithPricingRule'>]-?: ReturnTypeFrom<'listPricingPlansAssociatedWithPricingRule'>[K]}['PricingPlanArns'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PricingPlanArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPricingPlansAssociatedWithPricingRule({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPricingPlansAssociatedWithPricingRule' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PricingPlanArns ?? []) ? (result.PricingPlanArns ?? []) : [result.PricingPlanArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPricingRules(params: { [K in keyof ParamsFrom<'listPricingRules', { next?: string, limit?: number }>]: ParamsFrom<'listPricingRules', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPricingRules'>]-?: ReturnTypeFrom<'listPricingRules'>[K]}['PricingRules'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PricingRules"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPricingRules({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPricingRules' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PricingRules ?? []) ? (result.PricingRules ?? []) : [result.PricingRules]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPricingRulesAssociatedToPricingPlan(params: { [K in keyof ParamsFrom<'listPricingRulesAssociatedToPricingPlan', { next?: string, limit?: number }>]: ParamsFrom<'listPricingRulesAssociatedToPricingPlan', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPricingRulesAssociatedToPricingPlan'>]-?: ReturnTypeFrom<'listPricingRulesAssociatedToPricingPlan'>[K]}['PricingRuleArns'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"PricingRuleArns"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listPricingRulesAssociatedToPricingPlan({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listPricingRulesAssociatedToPricingPlan' })).toString('base64') : undefined;
    const member = (Array.isArray(result.PricingRuleArns ?? []) ? (result.PricingRuleArns ?? []) : [result.PricingRuleArns]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listResourcesAssociatedToCustomLineItem(params: { [K in keyof ParamsFrom<'listResourcesAssociatedToCustomLineItem', { next?: string, limit?: number }>]: ParamsFrom<'listResourcesAssociatedToCustomLineItem', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listResourcesAssociatedToCustomLineItem'>]-?: ReturnTypeFrom<'listResourcesAssociatedToCustomLineItem'>[K]}['AssociatedResources'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"AssociatedResources"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listResourcesAssociatedToCustomLineItem({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listResourcesAssociatedToCustomLineItem' })).toString('base64') : undefined;
    const member = (Array.isArray(result.AssociatedResources ?? []) ? (result.AssociatedResources ?? []) : [result.AssociatedResources]) as any;
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

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }

  updateBillingGroup: (params: RawParamsFrom<'updateBillingGroup'>) => Promise<ReturnTypeFrom<'updateBillingGroup'>>  = async params => {
  // undefined
    return this.client.updateBillingGroup(params as any).promise();
  }

  updateCustomLineItem: (params: RawParamsFrom<'updateCustomLineItem'>) => Promise<ReturnTypeFrom<'updateCustomLineItem'>>  = async params => {
  // undefined
    return this.client.updateCustomLineItem(params as any).promise();
  }

  updatePricingPlan: (params: RawParamsFrom<'updatePricingPlan'>) => Promise<ReturnTypeFrom<'updatePricingPlan'>>  = async params => {
  // undefined
    return this.client.updatePricingPlan(params as any).promise();
  }

  updatePricingRule: (params: RawParamsFrom<'updatePricingRule'>) => Promise<ReturnTypeFrom<'updatePricingRule'>>  = async params => {
  // undefined
    return this.client.updatePricingRule(params as any).promise();
  }
  
  static fromClient(client: AWSBillingconductor): Billingconductor {
    return new Billingconductor(client) as any;
  }
  
  static client(options?: AWSBillingconductor.Types.ClientConfiguration): Billingconductor {
    return new Billingconductor(new AWSBillingconductor(options)) as any;
  }
}  
