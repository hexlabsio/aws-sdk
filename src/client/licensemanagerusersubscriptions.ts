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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLicenseManagerUserSubscriptions> = AWSLicenseManagerUserSubscriptions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LicenseManagerUserSubscriptions {
  private constructor(private readonly client: AWSLicenseManagerUserSubscriptions) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'license-manager-user-subscriptions' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listIdentityProviders","listInstances"] as const;
  
  associateUser: (params: RawParamsFrom<'associateUser'>) => Promise<ReturnTypeFrom<'associateUser'>>  = async params => {
  // undefined
    return this.client.associateUser(params as any).promise();
  }

  deregisterIdentityProvider: (params: RawParamsFrom<'deregisterIdentityProvider'>) => Promise<ReturnTypeFrom<'deregisterIdentityProvider'>>  = async params => {
  // undefined
    return this.client.deregisterIdentityProvider(params as any).promise();
  }

  disassociateUser: (params: RawParamsFrom<'disassociateUser'>) => Promise<ReturnTypeFrom<'disassociateUser'>>  = async params => {
  // undefined
    return this.client.disassociateUser(params as any).promise();
  }

  async listIdentityProviders(params: { [K in keyof ParamsFrom<'listIdentityProviders', { next?: string, limit?: number }>]: ParamsFrom<'listIdentityProviders', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listIdentityProviders'>]-?: ReturnTypeFrom<'listIdentityProviders'>[K]}['IdentityProviderSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"IdentityProviderSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listIdentityProviders({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listIdentityProviders' })).toString('base64') : undefined;
    const member = (Array.isArray(result.IdentityProviderSummaries ?? []) ? (result.IdentityProviderSummaries ?? []) : [result.IdentityProviderSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listInstances(params: { [K in keyof ParamsFrom<'listInstances', { next?: string, limit?: number }>]: ParamsFrom<'listInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listInstances'>]-?: ReturnTypeFrom<'listInstances'>[K]}['InstanceSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceSummaries ?? []) ? (result.InstanceSummaries ?? []) : [result.InstanceSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listProductSubscriptions(params: { [K in keyof ParamsFrom<'listProductSubscriptions', { next?: string, limit?: number }>]: ParamsFrom<'listProductSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listProductSubscriptions'>]-?: ReturnTypeFrom<'listProductSubscriptions'>[K]}['ProductUserSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ProductUserSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listProductSubscriptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listProductSubscriptions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.ProductUserSummaries ?? []) ? (result.ProductUserSummaries ?? []) : [result.ProductUserSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listUserAssociations(params: { [K in keyof ParamsFrom<'listUserAssociations', { next?: string, limit?: number }>]: ParamsFrom<'listUserAssociations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listUserAssociations'>]-?: ReturnTypeFrom<'listUserAssociations'>[K]}['InstanceUserSummaries'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"InstanceUserSummaries"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listUserAssociations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listUserAssociations' })).toString('base64') : undefined;
    const member = (Array.isArray(result.InstanceUserSummaries ?? []) ? (result.InstanceUserSummaries ?? []) : [result.InstanceUserSummaries]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  registerIdentityProvider: (params: RawParamsFrom<'registerIdentityProvider'>) => Promise<ReturnTypeFrom<'registerIdentityProvider'>>  = async params => {
  // undefined
    return this.client.registerIdentityProvider(params as any).promise();
  }

  startProductSubscription: (params: RawParamsFrom<'startProductSubscription'>) => Promise<ReturnTypeFrom<'startProductSubscription'>>  = async params => {
  // undefined
    return this.client.startProductSubscription(params as any).promise();
  }

  stopProductSubscription: (params: RawParamsFrom<'stopProductSubscription'>) => Promise<ReturnTypeFrom<'stopProductSubscription'>>  = async params => {
  // undefined
    return this.client.stopProductSubscription(params as any).promise();
  }

  updateIdentityProviderSettings: (params: RawParamsFrom<'updateIdentityProviderSettings'>) => Promise<ReturnTypeFrom<'updateIdentityProviderSettings'>>  = async params => {
  // undefined
    return this.client.updateIdentityProviderSettings(params as any).promise();
  }
  
  static fromClient(client: AWSLicenseManagerUserSubscriptions): LicenseManagerUserSubscriptions {
    return new LicenseManagerUserSubscriptions(client) as any;
  }
  
  static client(options?: AWSLicenseManagerUserSubscriptions.Types.ClientConfiguration): LicenseManagerUserSubscriptions {
    return new LicenseManagerUserSubscriptions(new AWSLicenseManagerUserSubscriptions(options)) as any;
  }
}  
