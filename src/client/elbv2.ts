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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'elasticloadbalancing';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["describeListeners","describeLoadBalancers","describeTargetGroups"];
    
  addListenerCertificates: FunctionTypeFrom<'addListenerCertificates'>;

  addTags: FunctionTypeFrom<'addTags'>;

  createListener: FunctionTypeFrom<'createListener'>;

  createLoadBalancer: FunctionTypeFrom<'createLoadBalancer'>;

  createRule: FunctionTypeFrom<'createRule'>;

  createTargetGroup: FunctionTypeFrom<'createTargetGroup'>;

  deleteListener: FunctionTypeFrom<'deleteListener'>;

  deleteLoadBalancer: FunctionTypeFrom<'deleteLoadBalancer'>;

  deleteRule: FunctionTypeFrom<'deleteRule'>;

  deleteTargetGroup: FunctionTypeFrom<'deleteTargetGroup'>;

  deregisterTargets: FunctionTypeFrom<'deregisterTargets'>;

  describeAccountLimits: FunctionTypeFrom<'describeAccountLimits'>;

  describeListenerCertificates: FunctionTypeFrom<'describeListenerCertificates'>;

  describeListeners(params: { [K in keyof Omit<ParamsFrom<'describeListeners', { next?: string }>, 'Marker'>]: ParamsFrom<'describeListeners', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeListeners'>]-?: ReturnTypeFrom<'describeListeners'>[K]}['Listeners'] }>
  describeListeners(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeListeners'>]-?: ReturnTypeFrom<'describeListeners'>[K]}['Listeners'] }>;

  describeLoadBalancerAttributes: FunctionTypeFrom<'describeLoadBalancerAttributes'>;

  describeLoadBalancers(params: { [K in keyof Omit<ParamsFrom<'describeLoadBalancers', { next?: string }>, 'Marker'>]: ParamsFrom<'describeLoadBalancers', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLoadBalancers'>]-?: ReturnTypeFrom<'describeLoadBalancers'>[K]}['LoadBalancers'] }>
  describeLoadBalancers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLoadBalancers'>]-?: ReturnTypeFrom<'describeLoadBalancers'>[K]}['LoadBalancers'] }>;

  describeRules: FunctionTypeFrom<'describeRules'>;

  describeSSLPolicies: FunctionTypeFrom<'describeSSLPolicies'>;

  describeTags: FunctionTypeFrom<'describeTags'>;

  describeTargetGroupAttributes: FunctionTypeFrom<'describeTargetGroupAttributes'>;

  describeTargetGroups(params: { [K in keyof Omit<ParamsFrom<'describeTargetGroups', { next?: string }>, 'Marker'>]: ParamsFrom<'describeTargetGroups', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTargetGroups'>]-?: ReturnTypeFrom<'describeTargetGroups'>[K]}['TargetGroups'] }>
  describeTargetGroups(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeTargetGroups'>]-?: ReturnTypeFrom<'describeTargetGroups'>[K]}['TargetGroups'] }>;

  describeTargetHealth: FunctionTypeFrom<'describeTargetHealth'>;

  modifyListener: FunctionTypeFrom<'modifyListener'>;

  modifyLoadBalancerAttributes: FunctionTypeFrom<'modifyLoadBalancerAttributes'>;

  modifyRule: FunctionTypeFrom<'modifyRule'>;

  modifyTargetGroup: FunctionTypeFrom<'modifyTargetGroup'>;

  modifyTargetGroupAttributes: FunctionTypeFrom<'modifyTargetGroupAttributes'>;

  registerTargets: FunctionTypeFrom<'registerTargets'>;

  removeListenerCertificates: FunctionTypeFrom<'removeListenerCertificates'>;

  removeTags: FunctionTypeFrom<'removeTags'>;

  setIpAddressType: FunctionTypeFrom<'setIpAddressType'>;

  setRulePriorities: FunctionTypeFrom<'setRulePriorities'>;

  setSecurityGroups: FunctionTypeFrom<'setSecurityGroups'>;

  setSubnets: FunctionTypeFrom<'setSubnets'>
}
 
export class ELBv2 implements ClientType {
  private constructor(private readonly client: AWSELBv2) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticloadbalancing';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["describeListeners","describeLoadBalancers","describeTargetGroups"] as const;
  
  async addListenerCertificates(...args: any): Promise<any> {
  // undefined
    return this.client.addListenerCertificates(...args).promise()
  }

  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async createListener(...args: any): Promise<any> {
  // undefined
    return this.client.createListener(...args).promise()
  }

  async createLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.createLoadBalancer(...args).promise()
  }

  async createRule(...args: any): Promise<any> {
  // undefined
    return this.client.createRule(...args).promise()
  }

  async createTargetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.createTargetGroup(...args).promise()
  }

  async deleteListener(...args: any): Promise<any> {
  // undefined
    return this.client.deleteListener(...args).promise()
  }

  async deleteLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoadBalancer(...args).promise()
  }

  async deleteRule(...args: any): Promise<any> {
  // undefined
    return this.client.deleteRule(...args).promise()
  }

  async deleteTargetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTargetGroup(...args).promise()
  }

  async deregisterTargets(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterTargets(...args).promise()
  }

  async describeAccountLimits(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountLimits(...args).promise()
  }

  async describeListenerCertificates(...args: any): Promise<any> {
  // undefined
    return this.client.describeListenerCertificates(...args).promise()
  }

  async describeListeners(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"NextMarker","resultKey":"Listeners"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeListeners(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.Listeners ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLoadBalancerAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoadBalancerAttributes(...args).promise()
  }

  async describeLoadBalancers(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"NextMarker","resultKey":"LoadBalancers"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeLoadBalancers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.LoadBalancers ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeRules(...args: any): Promise<any> {
  // undefined
    return this.client.describeRules(...args).promise()
  }

  async describeSSLPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.describeSSLPolicies(...args).promise()
  }

  async describeTags(...args: any): Promise<any> {
  // undefined
    return this.client.describeTags(...args).promise()
  }

  async describeTargetGroupAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeTargetGroupAttributes(...args).promise()
  }

  async describeTargetGroups(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"NextMarker","resultKey":"TargetGroups"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeTargetGroups(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.TargetGroups ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTargetHealth(...args: any): Promise<any> {
  // undefined
    return this.client.describeTargetHealth(...args).promise()
  }

  async modifyListener(...args: any): Promise<any> {
  // undefined
    return this.client.modifyListener(...args).promise()
  }

  async modifyLoadBalancerAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.modifyLoadBalancerAttributes(...args).promise()
  }

  async modifyRule(...args: any): Promise<any> {
  // undefined
    return this.client.modifyRule(...args).promise()
  }

  async modifyTargetGroup(...args: any): Promise<any> {
  // undefined
    return this.client.modifyTargetGroup(...args).promise()
  }

  async modifyTargetGroupAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.modifyTargetGroupAttributes(...args).promise()
  }

  async registerTargets(...args: any): Promise<any> {
  // undefined
    return this.client.registerTargets(...args).promise()
  }

  async removeListenerCertificates(...args: any): Promise<any> {
  // undefined
    return this.client.removeListenerCertificates(...args).promise()
  }

  async removeTags(...args: any): Promise<any> {
  // undefined
    return this.client.removeTags(...args).promise()
  }

  async setIpAddressType(...args: any): Promise<any> {
  // undefined
    return this.client.setIpAddressType(...args).promise()
  }

  async setRulePriorities(...args: any): Promise<any> {
  // undefined
    return this.client.setRulePriorities(...args).promise()
  }

  async setSecurityGroups(...args: any): Promise<any> {
  // undefined
    return this.client.setSecurityGroups(...args).promise()
  }

  async setSubnets(...args: any): Promise<any> {
  // undefined
    return this.client.setSubnets(...args).promise()
  }
  
  static fromClient(client: AWSELBv2): ClientType {
    return new ELBv2(client) as any;
  }
  
  static client(options?: AWSELBv2.Types.ClientConfiguration): ClientType {
    return new ELBv2(new AWSELBv2(options)) as any;
  }
}  
