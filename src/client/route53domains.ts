import { Request, Route53Domains as AWSRoute53Domains } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSRoute53Domains> = AWSRoute53Domains[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSRoute53Domains> = AWSRoute53Domains[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSRoute53Domains[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSRoute53Domains, Extras> = AWSRoute53Domains[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSRoute53Domains> = AWSRoute53Domains[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class Route53Domains {
  private constructor(private readonly client: AWSRoute53Domains) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53domains' as const;
  public readonly global = false as const;
  public readonly category = 'Networking and Content Delivery' as const;
  public readonly topLevelCalls = ["listDomains","listOperations","listPrices","viewBilling"] as const;
  
  acceptDomainTransferFromAnotherAwsAccount: (params: RawParamsFrom<'acceptDomainTransferFromAnotherAwsAccount'>) => Promise<ReturnTypeFrom<'acceptDomainTransferFromAnotherAwsAccount'>>  = async params => {
  // undefined
    return this.client.acceptDomainTransferFromAnotherAwsAccount(params as any).promise();
  }

  cancelDomainTransferToAnotherAwsAccount: (params: RawParamsFrom<'cancelDomainTransferToAnotherAwsAccount'>) => Promise<ReturnTypeFrom<'cancelDomainTransferToAnotherAwsAccount'>>  = async params => {
  // undefined
    return this.client.cancelDomainTransferToAnotherAwsAccount(params as any).promise();
  }

  checkDomainAvailability: (params: RawParamsFrom<'checkDomainAvailability'>) => Promise<ReturnTypeFrom<'checkDomainAvailability'>>  = async params => {
  // undefined
    return this.client.checkDomainAvailability(params as any).promise();
  }

  checkDomainTransferability: (params: RawParamsFrom<'checkDomainTransferability'>) => Promise<ReturnTypeFrom<'checkDomainTransferability'>>  = async params => {
  // undefined
    return this.client.checkDomainTransferability(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  deleteTagsForDomain: (params: RawParamsFrom<'deleteTagsForDomain'>) => Promise<ReturnTypeFrom<'deleteTagsForDomain'>>  = async params => {
  // undefined
    return this.client.deleteTagsForDomain(params as any).promise();
  }

  disableDomainAutoRenew: (params: RawParamsFrom<'disableDomainAutoRenew'>) => Promise<ReturnTypeFrom<'disableDomainAutoRenew'>>  = async params => {
  // undefined
    return this.client.disableDomainAutoRenew(params as any).promise();
  }

  disableDomainTransferLock: (params: RawParamsFrom<'disableDomainTransferLock'>) => Promise<ReturnTypeFrom<'disableDomainTransferLock'>>  = async params => {
  // undefined
    return this.client.disableDomainTransferLock(params as any).promise();
  }

  enableDomainAutoRenew: (params: RawParamsFrom<'enableDomainAutoRenew'>) => Promise<ReturnTypeFrom<'enableDomainAutoRenew'>>  = async params => {
  // undefined
    return this.client.enableDomainAutoRenew(params as any).promise();
  }

  enableDomainTransferLock: (params: RawParamsFrom<'enableDomainTransferLock'>) => Promise<ReturnTypeFrom<'enableDomainTransferLock'>>  = async params => {
  // undefined
    return this.client.enableDomainTransferLock(params as any).promise();
  }

  getContactReachabilityStatus: (params: RawParamsFrom<'getContactReachabilityStatus'>) => Promise<ReturnTypeFrom<'getContactReachabilityStatus'>>  = async params => {
  // undefined
    return this.client.getContactReachabilityStatus(params as any).promise();
  }

  getDomainDetail: (params: RawParamsFrom<'getDomainDetail'>) => Promise<ReturnTypeFrom<'getDomainDetail'>>  = async params => {
  // undefined
    return this.client.getDomainDetail(params as any).promise();
  }

  getDomainSuggestions: (params: RawParamsFrom<'getDomainSuggestions'>) => Promise<ReturnTypeFrom<'getDomainSuggestions'>>  = async params => {
  // undefined
    return this.client.getDomainSuggestions(params as any).promise();
  }

  getOperationDetail: (params: RawParamsFrom<'getOperationDetail'>) => Promise<ReturnTypeFrom<'getOperationDetail'>>  = async params => {
  // undefined
    return this.client.getOperationDetail(params as any).promise();
  }

  async listDomains(params: { [K in keyof ParamsFrom<'listDomains', { next?: string, limit?: number }>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['Domains'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextPageMarker","resultKey":"Domains"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPageMarker ;
    const member = (Array.isArray(result.Domains ?? []) ? (result.Domains ?? []) : [result.Domains]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listOperations(params: { [K in keyof ParamsFrom<'listOperations', { next?: string, limit?: number }>]: ParamsFrom<'listOperations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listOperations'>]-?: ReturnTypeFrom<'listOperations'>[K]}['Operations'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextPageMarker","resultKey":"Operations"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listOperations({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPageMarker ;
    const member = (Array.isArray(result.Operations ?? []) ? (result.Operations ?? []) : [result.Operations]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async listPrices(params: { [K in keyof ParamsFrom<'listPrices', { next?: string, limit?: number }>]: ParamsFrom<'listPrices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listPrices'>]-?: ReturnTypeFrom<'listPrices'>[K]}['Prices'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextPageMarker","resultKey":"Prices"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listPrices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPageMarker ;
    const member = (Array.isArray(result.Prices ?? []) ? (result.Prices ?? []) : [result.Prices]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  listTagsForDomain: (params: RawParamsFrom<'listTagsForDomain'>) => Promise<ReturnTypeFrom<'listTagsForDomain'>>  = async params => {
  // undefined
    return this.client.listTagsForDomain(params as any).promise();
  }

  registerDomain: (params: RawParamsFrom<'registerDomain'>) => Promise<ReturnTypeFrom<'registerDomain'>>  = async params => {
  // undefined
    return this.client.registerDomain(params as any).promise();
  }

  rejectDomainTransferFromAnotherAwsAccount: (params: RawParamsFrom<'rejectDomainTransferFromAnotherAwsAccount'>) => Promise<ReturnTypeFrom<'rejectDomainTransferFromAnotherAwsAccount'>>  = async params => {
  // undefined
    return this.client.rejectDomainTransferFromAnotherAwsAccount(params as any).promise();
  }

  renewDomain: (params: RawParamsFrom<'renewDomain'>) => Promise<ReturnTypeFrom<'renewDomain'>>  = async params => {
  // undefined
    return this.client.renewDomain(params as any).promise();
  }

  resendContactReachabilityEmail: (params: RawParamsFrom<'resendContactReachabilityEmail'>) => Promise<ReturnTypeFrom<'resendContactReachabilityEmail'>>  = async params => {
  // undefined
    return this.client.resendContactReachabilityEmail(params as any).promise();
  }

  retrieveDomainAuthCode: (params: RawParamsFrom<'retrieveDomainAuthCode'>) => Promise<ReturnTypeFrom<'retrieveDomainAuthCode'>>  = async params => {
  // undefined
    return this.client.retrieveDomainAuthCode(params as any).promise();
  }

  transferDomain: (params: RawParamsFrom<'transferDomain'>) => Promise<ReturnTypeFrom<'transferDomain'>>  = async params => {
  // undefined
    return this.client.transferDomain(params as any).promise();
  }

  transferDomainToAnotherAwsAccount: (params: RawParamsFrom<'transferDomainToAnotherAwsAccount'>) => Promise<ReturnTypeFrom<'transferDomainToAnotherAwsAccount'>>  = async params => {
  // undefined
    return this.client.transferDomainToAnotherAwsAccount(params as any).promise();
  }

  updateDomainContact: (params: RawParamsFrom<'updateDomainContact'>) => Promise<ReturnTypeFrom<'updateDomainContact'>>  = async params => {
  // undefined
    return this.client.updateDomainContact(params as any).promise();
  }

  updateDomainContactPrivacy: (params: RawParamsFrom<'updateDomainContactPrivacy'>) => Promise<ReturnTypeFrom<'updateDomainContactPrivacy'>>  = async params => {
  // undefined
    return this.client.updateDomainContactPrivacy(params as any).promise();
  }

  updateDomainNameservers: (params: RawParamsFrom<'updateDomainNameservers'>) => Promise<ReturnTypeFrom<'updateDomainNameservers'>>  = async params => {
  // undefined
    return this.client.updateDomainNameservers(params as any).promise();
  }

  updateTagsForDomain: (params: RawParamsFrom<'updateTagsForDomain'>) => Promise<ReturnTypeFrom<'updateTagsForDomain'>>  = async params => {
  // undefined
    return this.client.updateTagsForDomain(params as any).promise();
  }

  async viewBilling(params: { [K in keyof ParamsFrom<'viewBilling', { next?: string, limit?: number }>]: ParamsFrom<'viewBilling', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'viewBilling'>]-?: ReturnTypeFrom<'viewBilling'>[K]}['BillingRecords'], undefined>}> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextPageMarker","resultKey":"BillingRecords"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { Marker: JSON.parse(next) } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.viewBilling({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = result.NextPageMarker ;
    const member = (Array.isArray(result.BillingRecords ?? []) ? (result.BillingRecords ?? []) : [result.BillingRecords]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }
  
  static fromClient(client: AWSRoute53Domains): Route53Domains {
    return new Route53Domains(client) as any;
  }
  
  static client(options?: AWSRoute53Domains.Types.ClientConfiguration): Route53Domains {
    return new Route53Domains(new AWSRoute53Domains(options)) as any;
  }
}  
