import { Request, ELB as AWSELB } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSELB> = AWSELB[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSELB> = AWSELB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSELB[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSELB, Extras> = AWSELB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'elasticloadbalancing';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["describeLoadBalancerPolicies","describeLoadBalancerPolicyTypes","describeLoadBalancers"];
    
  addTags: FunctionTypeFrom<'addTags'>;

  applySecurityGroupsToLoadBalancer: FunctionTypeFrom<'applySecurityGroupsToLoadBalancer'>;

  attachLoadBalancerToSubnets: FunctionTypeFrom<'attachLoadBalancerToSubnets'>;

  configureHealthCheck: FunctionTypeFrom<'configureHealthCheck'>;

  createAppCookieStickinessPolicy: FunctionTypeFrom<'createAppCookieStickinessPolicy'>;

  createLBCookieStickinessPolicy: FunctionTypeFrom<'createLBCookieStickinessPolicy'>;

  createLoadBalancer: FunctionTypeFrom<'createLoadBalancer'>;

  createLoadBalancerListeners: FunctionTypeFrom<'createLoadBalancerListeners'>;

  createLoadBalancerPolicy: FunctionTypeFrom<'createLoadBalancerPolicy'>;

  deleteLoadBalancer: FunctionTypeFrom<'deleteLoadBalancer'>;

  deleteLoadBalancerListeners: FunctionTypeFrom<'deleteLoadBalancerListeners'>;

  deleteLoadBalancerPolicy: FunctionTypeFrom<'deleteLoadBalancerPolicy'>;

  deregisterInstancesFromLoadBalancer: FunctionTypeFrom<'deregisterInstancesFromLoadBalancer'>;

  describeAccountLimits: FunctionTypeFrom<'describeAccountLimits'>;

  describeInstanceHealth: FunctionTypeFrom<'describeInstanceHealth'>;

  describeLoadBalancerAttributes: FunctionTypeFrom<'describeLoadBalancerAttributes'>;

  describeLoadBalancerPolicies: FunctionTypeFrom<'describeLoadBalancerPolicies'>;

  describeLoadBalancerPolicyTypes: FunctionTypeFrom<'describeLoadBalancerPolicyTypes'>;

  describeLoadBalancers(params: { [K in keyof Omit<ParamsFrom<'describeLoadBalancers', { next?: string }>, 'Marker'>]: ParamsFrom<'describeLoadBalancers', { next?: string }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLoadBalancers'>]-?: ReturnTypeFrom<'describeLoadBalancers'>[K]}['LoadBalancerDescriptions'] }>
  describeLoadBalancers(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'describeLoadBalancers'>]-?: ReturnTypeFrom<'describeLoadBalancers'>[K]}['LoadBalancerDescriptions'] }>;

  describeTags: FunctionTypeFrom<'describeTags'>;

  detachLoadBalancerFromSubnets: FunctionTypeFrom<'detachLoadBalancerFromSubnets'>;

  disableAvailabilityZonesForLoadBalancer: FunctionTypeFrom<'disableAvailabilityZonesForLoadBalancer'>;

  enableAvailabilityZonesForLoadBalancer: FunctionTypeFrom<'enableAvailabilityZonesForLoadBalancer'>;

  modifyLoadBalancerAttributes: FunctionTypeFrom<'modifyLoadBalancerAttributes'>;

  registerInstancesWithLoadBalancer: FunctionTypeFrom<'registerInstancesWithLoadBalancer'>;

  removeTags: FunctionTypeFrom<'removeTags'>;

  setLoadBalancerListenerSSLCertificate: FunctionTypeFrom<'setLoadBalancerListenerSSLCertificate'>;

  setLoadBalancerPoliciesForBackendServer: FunctionTypeFrom<'setLoadBalancerPoliciesForBackendServer'>;

  setLoadBalancerPoliciesOfListener: FunctionTypeFrom<'setLoadBalancerPoliciesOfListener'>
}
 
export class ELB implements ClientType {
  private constructor(private readonly client: AWSELB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticloadbalancing';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["describeLoadBalancerPolicies","describeLoadBalancerPolicyTypes","describeLoadBalancers"] as const;
  
  async addTags(...args: any): Promise<any> {
  // undefined
    return this.client.addTags(...args).promise()
  }

  async applySecurityGroupsToLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.applySecurityGroupsToLoadBalancer(...args).promise()
  }

  async attachLoadBalancerToSubnets(...args: any): Promise<any> {
  // undefined
    return this.client.attachLoadBalancerToSubnets(...args).promise()
  }

  async configureHealthCheck(...args: any): Promise<any> {
  // undefined
    return this.client.configureHealthCheck(...args).promise()
  }

  async createAppCookieStickinessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createAppCookieStickinessPolicy(...args).promise()
  }

  async createLBCookieStickinessPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createLBCookieStickinessPolicy(...args).promise()
  }

  async createLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.createLoadBalancer(...args).promise()
  }

  async createLoadBalancerListeners(...args: any): Promise<any> {
  // undefined
    return this.client.createLoadBalancerListeners(...args).promise()
  }

  async createLoadBalancerPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.createLoadBalancerPolicy(...args).promise()
  }

  async deleteLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoadBalancer(...args).promise()
  }

  async deleteLoadBalancerListeners(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoadBalancerListeners(...args).promise()
  }

  async deleteLoadBalancerPolicy(...args: any): Promise<any> {
  // undefined
    return this.client.deleteLoadBalancerPolicy(...args).promise()
  }

  async deregisterInstancesFromLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterInstancesFromLoadBalancer(...args).promise()
  }

  async describeAccountLimits(...args: any): Promise<any> {
  // undefined
    return this.client.describeAccountLimits(...args).promise()
  }

  async describeInstanceHealth(...args: any): Promise<any> {
  // {"resultKey":"InstanceStates"}
    return this.client.describeInstanceHealth(...args).promise()
  }

  async describeLoadBalancerAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.describeLoadBalancerAttributes(...args).promise()
  }

  async describeLoadBalancerPolicies(...args: any): Promise<any> {
  // {"resultKey":"PolicyDescriptions"}
    return this.client.describeLoadBalancerPolicies(...args).promise()
  }

  async describeLoadBalancerPolicyTypes(...args: any): Promise<any> {
  // {"resultKey":"PolicyTypeDescriptions"}
    return this.client.describeLoadBalancerPolicyTypes(...args).promise()
  }

  async describeLoadBalancers(...args: any): Promise<any> {
    // {"inputToken":"Marker","outputToken":"NextMarker","resultKey":"LoadBalancerDescriptions"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = {};
    const result = await this.client.describeLoadBalancers(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextMarker;
    const member = result.LoadBalancerDescriptions ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeTags(...args: any): Promise<any> {
  // undefined
    return this.client.describeTags(...args).promise()
  }

  async detachLoadBalancerFromSubnets(...args: any): Promise<any> {
  // undefined
    return this.client.detachLoadBalancerFromSubnets(...args).promise()
  }

  async disableAvailabilityZonesForLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.disableAvailabilityZonesForLoadBalancer(...args).promise()
  }

  async enableAvailabilityZonesForLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.enableAvailabilityZonesForLoadBalancer(...args).promise()
  }

  async modifyLoadBalancerAttributes(...args: any): Promise<any> {
  // undefined
    return this.client.modifyLoadBalancerAttributes(...args).promise()
  }

  async registerInstancesWithLoadBalancer(...args: any): Promise<any> {
  // undefined
    return this.client.registerInstancesWithLoadBalancer(...args).promise()
  }

  async removeTags(...args: any): Promise<any> {
  // undefined
    return this.client.removeTags(...args).promise()
  }

  async setLoadBalancerListenerSSLCertificate(...args: any): Promise<any> {
  // undefined
    return this.client.setLoadBalancerListenerSSLCertificate(...args).promise()
  }

  async setLoadBalancerPoliciesForBackendServer(...args: any): Promise<any> {
  // undefined
    return this.client.setLoadBalancerPoliciesForBackendServer(...args).promise()
  }

  async setLoadBalancerPoliciesOfListener(...args: any): Promise<any> {
  // undefined
    return this.client.setLoadBalancerPoliciesOfListener(...args).promise()
  }
  
  static fromClient(client: AWSELB): ClientType {
    return new ELB(client) as any;
  }
  
  static client(options?: AWSELB.Types.ClientConfiguration): ClientType {
    return new ELB(new AWSELB(options)) as any;
  }
}  
