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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSELB> = AWSELB[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ELB {
  private constructor(private readonly client: AWSELB) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'elasticloadbalancing' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["describeLoadBalancerPolicies","describeLoadBalancerPolicyTypes","describeLoadBalancers"] as const;
  
  addTags: (params: RawParamsFrom<'addTags'>) => Promise<ReturnTypeFrom<'addTags'>>  = async params => {
  // undefined
    return this.client.addTags(params as any).promise();
  }

  applySecurityGroupsToLoadBalancer: (params: RawParamsFrom<'applySecurityGroupsToLoadBalancer'>) => Promise<ReturnTypeFrom<'applySecurityGroupsToLoadBalancer'>>  = async params => {
  // undefined
    return this.client.applySecurityGroupsToLoadBalancer(params as any).promise();
  }

  attachLoadBalancerToSubnets: (params: RawParamsFrom<'attachLoadBalancerToSubnets'>) => Promise<ReturnTypeFrom<'attachLoadBalancerToSubnets'>>  = async params => {
  // undefined
    return this.client.attachLoadBalancerToSubnets(params as any).promise();
  }

  configureHealthCheck: (params: RawParamsFrom<'configureHealthCheck'>) => Promise<ReturnTypeFrom<'configureHealthCheck'>>  = async params => {
  // undefined
    return this.client.configureHealthCheck(params as any).promise();
  }

  createAppCookieStickinessPolicy: (params: RawParamsFrom<'createAppCookieStickinessPolicy'>) => Promise<ReturnTypeFrom<'createAppCookieStickinessPolicy'>>  = async params => {
  // undefined
    return this.client.createAppCookieStickinessPolicy(params as any).promise();
  }

  createLBCookieStickinessPolicy: (params: RawParamsFrom<'createLBCookieStickinessPolicy'>) => Promise<ReturnTypeFrom<'createLBCookieStickinessPolicy'>>  = async params => {
  // undefined
    return this.client.createLBCookieStickinessPolicy(params as any).promise();
  }

  createLoadBalancer: (params: RawParamsFrom<'createLoadBalancer'>) => Promise<ReturnTypeFrom<'createLoadBalancer'>>  = async params => {
  // undefined
    return this.client.createLoadBalancer(params as any).promise();
  }

  createLoadBalancerListeners: (params: RawParamsFrom<'createLoadBalancerListeners'>) => Promise<ReturnTypeFrom<'createLoadBalancerListeners'>>  = async params => {
  // undefined
    return this.client.createLoadBalancerListeners(params as any).promise();
  }

  createLoadBalancerPolicy: (params: RawParamsFrom<'createLoadBalancerPolicy'>) => Promise<ReturnTypeFrom<'createLoadBalancerPolicy'>>  = async params => {
  // undefined
    return this.client.createLoadBalancerPolicy(params as any).promise();
  }

  deleteLoadBalancer: (params: RawParamsFrom<'deleteLoadBalancer'>) => Promise<ReturnTypeFrom<'deleteLoadBalancer'>>  = async params => {
  // undefined
    return this.client.deleteLoadBalancer(params as any).promise();
  }

  deleteLoadBalancerListeners: (params: RawParamsFrom<'deleteLoadBalancerListeners'>) => Promise<ReturnTypeFrom<'deleteLoadBalancerListeners'>>  = async params => {
  // undefined
    return this.client.deleteLoadBalancerListeners(params as any).promise();
  }

  deleteLoadBalancerPolicy: (params: RawParamsFrom<'deleteLoadBalancerPolicy'>) => Promise<ReturnTypeFrom<'deleteLoadBalancerPolicy'>>  = async params => {
  // undefined
    return this.client.deleteLoadBalancerPolicy(params as any).promise();
  }

  deregisterInstancesFromLoadBalancer: (params: RawParamsFrom<'deregisterInstancesFromLoadBalancer'>) => Promise<ReturnTypeFrom<'deregisterInstancesFromLoadBalancer'>>  = async params => {
  // undefined
    return this.client.deregisterInstancesFromLoadBalancer(params as any).promise();
  }

  describeAccountLimits: (params: RawParamsFrom<'describeAccountLimits'>) => Promise<ReturnTypeFrom<'describeAccountLimits'>>  = async params => {
  // undefined
    return this.client.describeAccountLimits(params as any).promise();
  }

  async describeInstanceHealth(params: { [K in keyof ParamsFrom<'describeInstanceHealth', {}>]: ParamsFrom<'describeInstanceHealth', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeInstanceHealth'>]-?: ReturnTypeFrom<'describeInstanceHealth'>[K]}['InstanceStates'], undefined>}> {
    // {"resultKey":"InstanceStates"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeInstanceHealth({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.InstanceStates ?? []) ? (result.InstanceStates ?? []) : [result.InstanceStates]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeLoadBalancerAttributes: (params: RawParamsFrom<'describeLoadBalancerAttributes'>) => Promise<ReturnTypeFrom<'describeLoadBalancerAttributes'>>  = async params => {
  // undefined
    return this.client.describeLoadBalancerAttributes(params as any).promise();
  }

  async describeLoadBalancerPolicies(params: { [K in keyof ParamsFrom<'describeLoadBalancerPolicies', {}>]: ParamsFrom<'describeLoadBalancerPolicies', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLoadBalancerPolicies'>]-?: ReturnTypeFrom<'describeLoadBalancerPolicies'>[K]}['PolicyDescriptions'], undefined>}> {
    // {"resultKey":"PolicyDescriptions"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeLoadBalancerPolicies({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.PolicyDescriptions ?? []) ? (result.PolicyDescriptions ?? []) : [result.PolicyDescriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLoadBalancerPolicyTypes(params: { [K in keyof ParamsFrom<'describeLoadBalancerPolicyTypes', {}>]: ParamsFrom<'describeLoadBalancerPolicyTypes', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLoadBalancerPolicyTypes'>]-?: ReturnTypeFrom<'describeLoadBalancerPolicyTypes'>[K]}['PolicyTypeDescriptions'], undefined>}> {
    // {"resultKey":"PolicyTypeDescriptions"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeLoadBalancerPolicyTypes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined;
    const member = (Array.isArray(result.PolicyTypeDescriptions ?? []) ? (result.PolicyTypeDescriptions ?? []) : [result.PolicyTypeDescriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async describeLoadBalancers(params: { [K in keyof ParamsFrom<'describeLoadBalancers', { next?: string }>]: ParamsFrom<'describeLoadBalancers', { next?: string }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeLoadBalancers'>]-?: ReturnTypeFrom<'describeLoadBalancers'>[K]}['LoadBalancerDescriptions'], undefined>}> {
    // {"inputToken":"Marker","outputToken":"NextMarker","resultKey":"LoadBalancerDescriptions"}
    const {next,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = {};
    const result = await this.client.describeLoadBalancers({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextMarker ? Buffer.from(JSON.stringify({ token: result.NextMarker, operation: 'describeLoadBalancers' })).toString('base64') : undefined;
    const member = (Array.isArray(result.LoadBalancerDescriptions ?? []) ? (result.LoadBalancerDescriptions ?? []) : [result.LoadBalancerDescriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  describeTags: (params: RawParamsFrom<'describeTags'>) => Promise<ReturnTypeFrom<'describeTags'>>  = async params => {
  // undefined
    return this.client.describeTags(params as any).promise();
  }

  detachLoadBalancerFromSubnets: (params: RawParamsFrom<'detachLoadBalancerFromSubnets'>) => Promise<ReturnTypeFrom<'detachLoadBalancerFromSubnets'>>  = async params => {
  // undefined
    return this.client.detachLoadBalancerFromSubnets(params as any).promise();
  }

  disableAvailabilityZonesForLoadBalancer: (params: RawParamsFrom<'disableAvailabilityZonesForLoadBalancer'>) => Promise<ReturnTypeFrom<'disableAvailabilityZonesForLoadBalancer'>>  = async params => {
  // undefined
    return this.client.disableAvailabilityZonesForLoadBalancer(params as any).promise();
  }

  enableAvailabilityZonesForLoadBalancer: (params: RawParamsFrom<'enableAvailabilityZonesForLoadBalancer'>) => Promise<ReturnTypeFrom<'enableAvailabilityZonesForLoadBalancer'>>  = async params => {
  // undefined
    return this.client.enableAvailabilityZonesForLoadBalancer(params as any).promise();
  }

  modifyLoadBalancerAttributes: (params: RawParamsFrom<'modifyLoadBalancerAttributes'>) => Promise<ReturnTypeFrom<'modifyLoadBalancerAttributes'>>  = async params => {
  // undefined
    return this.client.modifyLoadBalancerAttributes(params as any).promise();
  }

  registerInstancesWithLoadBalancer: (params: RawParamsFrom<'registerInstancesWithLoadBalancer'>) => Promise<ReturnTypeFrom<'registerInstancesWithLoadBalancer'>>  = async params => {
  // undefined
    return this.client.registerInstancesWithLoadBalancer(params as any).promise();
  }

  removeTags: (params: RawParamsFrom<'removeTags'>) => Promise<ReturnTypeFrom<'removeTags'>>  = async params => {
  // undefined
    return this.client.removeTags(params as any).promise();
  }

  setLoadBalancerListenerSSLCertificate: (params: RawParamsFrom<'setLoadBalancerListenerSSLCertificate'>) => Promise<ReturnTypeFrom<'setLoadBalancerListenerSSLCertificate'>>  = async params => {
  // undefined
    return this.client.setLoadBalancerListenerSSLCertificate(params as any).promise();
  }

  setLoadBalancerPoliciesForBackendServer: (params: RawParamsFrom<'setLoadBalancerPoliciesForBackendServer'>) => Promise<ReturnTypeFrom<'setLoadBalancerPoliciesForBackendServer'>>  = async params => {
  // undefined
    return this.client.setLoadBalancerPoliciesForBackendServer(params as any).promise();
  }

  setLoadBalancerPoliciesOfListener: (params: RawParamsFrom<'setLoadBalancerPoliciesOfListener'>) => Promise<ReturnTypeFrom<'setLoadBalancerPoliciesOfListener'>>  = async params => {
  // undefined
    return this.client.setLoadBalancerPoliciesOfListener(params as any).promise();
  }
  
  static fromClient(client: AWSELB): ELB {
    return new ELB(client) as any;
  }
  
  static client(options?: AWSELB.Types.ClientConfiguration): ELB {
    return new ELB(new AWSELB(options)) as any;
  }
}  
