import { Request, LicenseManagerLinuxSubscriptions as AWSLicenseManagerLinuxSubscriptions } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSLicenseManagerLinuxSubscriptions> = AWSLicenseManagerLinuxSubscriptions[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSLicenseManagerLinuxSubscriptions> = AWSLicenseManagerLinuxSubscriptions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSLicenseManagerLinuxSubscriptions[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSLicenseManagerLinuxSubscriptions, Extras> = AWSLicenseManagerLinuxSubscriptions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSLicenseManagerLinuxSubscriptions> = AWSLicenseManagerLinuxSubscriptions[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class LicenseManagerLinuxSubscriptions {
  private constructor(private readonly client: AWSLicenseManagerLinuxSubscriptions) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'license-manager-linux-subscriptions' as const;
  public readonly global = false as const;
  public readonly category = 'Other' as const;
  public readonly topLevelCalls = ["listLinuxSubscriptionInstances","listLinuxSubscriptions"] as const;
  
  getServiceSettings: (params: RawParamsFrom<'getServiceSettings'>) => Promise<ReturnTypeFrom<'getServiceSettings'>>  = async params => {
  // undefined
    return this.client.getServiceSettings(params as any).promise();
  }

  async listLinuxSubscriptionInstances(params: { [K in keyof ParamsFrom<'listLinuxSubscriptionInstances', { next?: string, limit?: number }>]: ParamsFrom<'listLinuxSubscriptionInstances', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLinuxSubscriptionInstances'>]-?: ReturnTypeFrom<'listLinuxSubscriptionInstances'>[K]}['Instances'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Instances"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLinuxSubscriptionInstances({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLinuxSubscriptionInstances' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Instances ?? []) ? (result.Instances ?? []) : [result.Instances]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listLinuxSubscriptions(params: { [K in keyof ParamsFrom<'listLinuxSubscriptions', { next?: string, limit?: number }>]: ParamsFrom<'listLinuxSubscriptions', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listLinuxSubscriptions'>]-?: ReturnTypeFrom<'listLinuxSubscriptions'>[K]}['Subscriptions'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Subscriptions"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listLinuxSubscriptions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextToken ? Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listLinuxSubscriptions' })).toString('base64') : undefined;
    const member = (Array.isArray(result.Subscriptions ?? []) ? (result.Subscriptions ?? []) : [result.Subscriptions]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  updateServiceSettings: (params: RawParamsFrom<'updateServiceSettings'>) => Promise<ReturnTypeFrom<'updateServiceSettings'>>  = async params => {
  // undefined
    return this.client.updateServiceSettings(params as any).promise();
  }
  
  static fromClient(client: AWSLicenseManagerLinuxSubscriptions): LicenseManagerLinuxSubscriptions {
    return new LicenseManagerLinuxSubscriptions(client) as any;
  }
  
  static client(options?: AWSLicenseManagerLinuxSubscriptions.Types.ClientConfiguration): LicenseManagerLinuxSubscriptions {
    return new LicenseManagerLinuxSubscriptions(new AWSLicenseManagerLinuxSubscriptions(options)) as any;
  }
}  
