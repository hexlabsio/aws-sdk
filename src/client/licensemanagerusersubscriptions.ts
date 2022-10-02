import { Request, LicenseManagerUserSubscriptions as AWSLicenseManagerUserSubscriptions } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLicenseManagerUserSubscriptions> = AWSLicenseManagerUserSubscriptions[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLicenseManagerUserSubscriptions> = AWSLicenseManagerUserSubscriptions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLicenseManagerUserSubscriptions[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLicenseManagerUserSubscriptions, Extras> = AWSLicenseManagerUserSubscriptions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'license-manager-user-subscriptions';
    global: false;
    category: 'Other'
    topLevelCalls: readonly ["listIdentityProviders","listInstances"];
    
  associateUser: FunctionTypeFrom<'associateUser'>;

  deregisterIdentityProvider: FunctionTypeFrom<'deregisterIdentityProvider'>;

  disassociateUser: FunctionTypeFrom<'disassociateUser'>;

  listIdentityProviders(params: { [K in keyof Omit<ParamsFrom<'listIdentityProviders', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listIdentityProviders', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIdentityProviders'>]-?: ReturnTypeFrom<'listIdentityProviders'>[K]}['IdentityProviderSummaries'] }>
  listIdentityProviders(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listIdentityProviders'>]-?: ReturnTypeFrom<'listIdentityProviders'>[K]}['IdentityProviderSummaries'] }>;

  listInstances(params: { [K in keyof Omit<ParamsFrom<'listInstances', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['InstanceSummaries'] }>
  listInstances(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['InstanceSummaries'] }>;

  listProductSubscriptions(params: { [K in keyof Omit<ParamsFrom<'listProductSubscriptions', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listProductSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listProductSubscriptions'>]-?: ReturnTypeFrom<'listProductSubscriptions'>[K]}['ProductUserSummaries'] }>
  ;

  listUserAssociations(params: { [K in keyof Omit<ParamsFrom<'listUserAssociations', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listUserAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listUserAssociations'>]-?: ReturnTypeFrom<'listUserAssociations'>[K]}['InstanceUserSummaries'] }>
  ;

  registerIdentityProvider: FunctionTypeFrom<'registerIdentityProvider'>;

  startProductSubscription: FunctionTypeFrom<'startProductSubscription'>;

  stopProductSubscription: FunctionTypeFrom<'stopProductSubscription'>
}
 
export class LicenseManagerUserSubscriptions implements ClientType {
  private constructor(private readonly client: AWSLicenseManagerUserSubscriptions) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'license-manager-user-subscriptions';
  public readonly global = false;
  public readonly category = 'Other';
  public readonly topLevelCalls = ["listIdentityProviders","listInstances"] as const;
  
  async associateUser(...args: any): Promise<any> {
  // undefined
    return this.client.associateUser(...args).promise()
  }

  async deregisterIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.deregisterIdentityProvider(...args).promise()
  }

  async disassociateUser(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateUser(...args).promise()
  }

  async listIdentityProviders(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IdentityProviderSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIdentityProviders(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.IdentityProviderSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstances(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstances(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProductSubscriptions(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProductUserSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProductSubscriptions(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ProductUserSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserAssociations(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceUserSummaries"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserAssociations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.InstanceUserSummaries ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async registerIdentityProvider(...args: any): Promise<any> {
  // undefined
    return this.client.registerIdentityProvider(...args).promise()
  }

  async startProductSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.startProductSubscription(...args).promise()
  }

  async stopProductSubscription(...args: any): Promise<any> {
  // undefined
    return this.client.stopProductSubscription(...args).promise()
  }
  
  static fromClient(client: AWSLicenseManagerUserSubscriptions): ClientType {
    return new LicenseManagerUserSubscriptions(client) as any;
  }
  
  static client(options?: AWSLicenseManagerUserSubscriptions.Types.ClientConfiguration): ClientType {
    return new LicenseManagerUserSubscriptions(new AWSLicenseManagerUserSubscriptions(options)) as any;
  }
}  
