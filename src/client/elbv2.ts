import { Request, ELBv2 as AWSELBv2 } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSELBv2> = AWSELBv2[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSELBv2> = AWSELBv2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSELBv2[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSELBv2, Extras> = AWSELBv2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSELBv2> = AWSELBv2[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ELBv2 {
  private constructor(private readonly client: AWSELBv2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticloadbalancing' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["describeListeners","describeLoadBalancers","describeTargetGroups"] as const;
  
  addListenerCertificates: (params: RawParamsFrom<'addListenerCertificates'>) => Promise<ReturnTypeFrom<'addListenerCertificates'>>  = async params => {
  // undefined
    return this.client.addListenerCertificates(params as any).promise();
  }

  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  createListener: (params: RawParamsFrom<'createListener'>) => Promise<ReturnTypeFrom<'createListener'>>  = async params => {
  // undefined
    return this.client.createListener(params as any).promise();
  }

  createLoadBalancer: (params: RawParamsFrom<'createLoadBalancer'>) => Promise<ReturnTypeFrom<'createLoadBalancer'>>  = async params => {
  // undefined
    return this.client.createLoadBalancer(params as any).promise();
  }

  createRule: (params: RawParamsFrom<'createRule'>) => Promise<ReturnTypeFrom<'createRule'>>  = async params => {
  // undefined
    return this.client.createRule(params as any).promise();
  }

  createTargetGroup: (params: RawParamsFrom<'createTargetGroup'>) => Promise<ReturnTypeFrom<'createTargetGroup'>>  = async params => {
  // undefined
    return this.client.createTargetGroup(params as any).promise();
  }

  deleteListener: (params: RawParamsFrom<'deleteListener'>) => Promise<ReturnTypeFrom<'deleteListener'>>  = async params => {
  // undefined
    return this.client.deleteListener(params as any).promise();
  }

  deleteLoadBalancer: (params: RawParamsFrom<'deleteLoadBalancer'>) => Promise<ReturnTypeFrom<'deleteLoadBalancer'>>  = async params => {
  // undefined
    return this.client.deleteLoadBalancer(params as any).promise();
  }

  deleteRule: (params: RawParamsFrom<'deleteRule'>) => Promise<ReturnTypeFrom<'deleteRule'>>  = async params => {
  // undefined
    return this.client.deleteRule(params as any).promise();
  }

  deleteTargetGroup: (params: RawParamsFrom<'deleteTargetGroup'>) => Promise<ReturnTypeFrom<'deleteTargetGroup'>>  = async params => {
  // undefined
    return this.client.deleteTargetGroup(params as any).promise();
  }

  deregisterTargets: (params: RawParamsFrom<'deregisterTargets'>) => Promise<ReturnTypeFrom<'deregisterTargets'>>  = async params => {
  // undefined
    return this.client.deregisterTargets(params as any).promise();
  }

  describeAccountLimits: (params: RawParamsFrom<'describeAccountLimits'>) => Promise<ReturnTypeFrom<'describeAccountLimits'>>  = async params => {
  // undefined
    return this.client.describeAccountLimits(params as any).promise();
  }

  describeListenerCertificates: (params: RawParamsFrom<'describeListenerCertificates'>) => Promise<ReturnTypeFrom<'describeListenerCertificates'>>  = async params => {
  // undefined
    return this.client.describeListenerCertificates(params as any).promise();
  }

  async describeListeners(params: { [K in keyof ParamsFrom<'describeListeners', { next?: string }>]: ParamsFrom<'describeListeners', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeListeners'>]-?: ReturnTypeFrom<'describeListeners'>[K]}['Listeners'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"NextMarker","resultKey":"Listeners"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.describeListeners({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ;
    const member = (Array.isArray(result.Listeners ?? []) ? (result.Listeners ?? []) : [result.Listeners]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeLoadBalancerAttributes: (params: RawParamsFrom<'describeLoadBalancerAttributes'>) => Promise<ReturnTypeFrom<'describeLoadBalancerAttributes'>>  = async params => {
  // undefined
    return this.client.describeLoadBalancerAttributes(params as any).promise();
  }

  async describeLoadBalancers(params: { [K in keyof ParamsFrom<'describeLoadBalancers', { next?: string }>]: ParamsFrom<'describeLoadBalancers', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLoadBalancers'>]-?: ReturnTypeFrom<'describeLoadBalancers'>[K]}['LoadBalancers'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"NextMarker","resultKey":"LoadBalancers"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.describeLoadBalancers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ;
    const member = (Array.isArray(result.LoadBalancers ?? []) ? (result.LoadBalancers ?? []) : [result.LoadBalancers]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeRules: (params: RawParamsFrom<'describeRules'>) => Promise<ReturnTypeFrom<'describeRules'>>  = async params => {
  // undefined
    return this.client.describeRules(params as any).promise();
  }

  describeSSLPolicies: (params: RawParamsFrom<'describeSSLPolicies'>) => Promise<ReturnTypeFrom<'describeSSLPolicies'>>  = async params => {
  // undefined
    return this.client.describeSSLPolicies(params as any).promise();
  }

  describeTags: (params: RawParamsFrom<'describeTags'>) => Promise<ReturnTypeFrom<'describeTags'>>  = async params => {
  // undefined
    return this.client.describeTags(params as any).promise();
  }

  describeTargetGroupAttributes: (params: RawParamsFrom<'describeTargetGroupAttributes'>) => Promise<ReturnTypeFrom<'describeTargetGroupAttributes'>>  = async params => {
  // undefined
    return this.client.describeTargetGroupAttributes(params as any).promise();
  }

  async describeTargetGroups(params: { [K in keyof ParamsFrom<'describeTargetGroups', { next?: string }>]: ParamsFrom<'describeTargetGroups', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeTargetGroups'>]-?: ReturnTypeFrom<'describeTargetGroups'>[K]}['TargetGroups'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"NextMarker","resultKey":"TargetGroups"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = {};
    const result = await this.client.describeTargetGroups({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ;
    const member = (Array.isArray(result.TargetGroups ?? []) ? (result.TargetGroups ?? []) : [result.TargetGroups]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeTargetHealth: (params: RawParamsFrom<'describeTargetHealth'>) => Promise<ReturnTypeFrom<'describeTargetHealth'>>  = async params => {
  // undefined
    return this.client.describeTargetHealth(params as any).promise();
  }

  modifyListener: (params: RawParamsFrom<'modifyListener'>) => Promise<ReturnTypeFrom<'modifyListener'>>  = async params => {
  // undefined
    return this.client.modifyListener(params as any).promise();
  }

  modifyLoadBalancerAttributes: (params: RawParamsFrom<'modifyLoadBalancerAttributes'>) => Promise<ReturnTypeFrom<'modifyLoadBalancerAttributes'>>  = async params => {
  // undefined
    return this.client.modifyLoadBalancerAttributes(params as any).promise();
  }

  modifyRule: (params: RawParamsFrom<'modifyRule'>) => Promise<ReturnTypeFrom<'modifyRule'>>  = async params => {
  // undefined
    return this.client.modifyRule(params as any).promise();
  }

  modifyTargetGroup: (params: RawParamsFrom<'modifyTargetGroup'>) => Promise<ReturnTypeFrom<'modifyTargetGroup'>>  = async params => {
  // undefined
    return this.client.modifyTargetGroup(params as any).promise();
  }

  modifyTargetGroupAttributes: (params: RawParamsFrom<'modifyTargetGroupAttributes'>) => Promise<ReturnTypeFrom<'modifyTargetGroupAttributes'>>  = async params => {
  // undefined
    return this.client.modifyTargetGroupAttributes(params as any).promise();
  }

  registerTargets: (params: RawParamsFrom<'registerTargets'>) => Promise<ReturnTypeFrom<'registerTargets'>>  = async params => {
  // undefined
    return this.client.registerTargets(params as any).promise();
  }

  removeListenerCertificates: (params: RawParamsFrom<'removeListenerCertificates'>) => Promise<ReturnTypeFrom<'removeListenerCertificates'>>  = async params => {
  // undefined
    return this.client.removeListenerCertificates(params as any).promise();
  }

  removeTags: (params: RawParamsFrom<'removeTags'>) => Promise<ReturnTypeFrom<'removeTags'>>  = async params => {
  // undefined
    return this.client.removeTags(params as any).promise();
  }

  setIpAddressType: (params: RawParamsFrom<'setIpAddressType'>) => Promise<ReturnTypeFrom<'setIpAddressType'>>  = async params => {
  // undefined
    return this.client.setIpAddressType(params as any).promise();
  }

  setRulePriorities: (params: RawParamsFrom<'setRulePriorities'>) => Promise<ReturnTypeFrom<'setRulePriorities'>>  = async params => {
  // undefined
    return this.client.setRulePriorities(params as any).promise();
  }

  setSecurityGroups: (params: RawParamsFrom<'setSecurityGroups'>) => Promise<ReturnTypeFrom<'setSecurityGroups'>>  = async params => {
  // undefined
    return this.client.setSecurityGroups(params as any).promise();
  }

  setSubnets: (params: RawParamsFrom<'setSubnets'>) => Promise<ReturnTypeFrom<'setSubnets'>>  = async params => {
  // undefined
    return this.client.setSubnets(params as any).promise();
  }
  
  static fromClient(client: AWSELBv2): ELBv2 {
    return new ELBv2(client) as any;
  }
  
  static client(options?: AWSELBv2.Types.ClientConfiguration): ELBv2 {
    return new ELBv2(new AWSELBv2(options)) as any;
  }
}  
