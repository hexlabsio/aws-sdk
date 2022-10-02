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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'route53domains';
    global: false;
    category: 'Networking and Content Delivery'
    topLevelCalls: readonly ["listDomains","listOperations","listPrices","viewBilling"];
    
  acceptDomainTransferFromAnotherAwsAccount: FunctionTypeFrom<'acceptDomainTransferFromAnotherAwsAccount'>;

  cancelDomainTransferToAnotherAwsAccount: FunctionTypeFrom<'cancelDomainTransferToAnotherAwsAccount'>;

  checkDomainAvailability: FunctionTypeFrom<'checkDomainAvailability'>;

  checkDomainTransferability: FunctionTypeFrom<'checkDomainTransferability'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  deleteTagsForDomain: FunctionTypeFrom<'deleteTagsForDomain'>;

  disableDomainAutoRenew: FunctionTypeFrom<'disableDomainAutoRenew'>;

  disableDomainTransferLock: FunctionTypeFrom<'disableDomainTransferLock'>;

  enableDomainAutoRenew: FunctionTypeFrom<'enableDomainAutoRenew'>;

  enableDomainTransferLock: FunctionTypeFrom<'enableDomainTransferLock'>;

  getContactReachabilityStatus: FunctionTypeFrom<'getContactReachabilityStatus'>;

  getDomainDetail: FunctionTypeFrom<'getDomainDetail'>;

  getDomainSuggestions: FunctionTypeFrom<'getDomainSuggestions'>;

  getOperationDetail: FunctionTypeFrom<'getOperationDetail'>;

  listDomains(params: { [K in keyof Omit<ParamsFrom<'listDomains', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listDomains', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['Domains'] }>
  listDomains(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listDomains'>]-?: ReturnTypeFrom<'listDomains'>[K]}['Domains'] }>;

  listOperations(params: { [K in keyof Omit<ParamsFrom<'listOperations', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listOperations', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOperations'>]-?: ReturnTypeFrom<'listOperations'>[K]}['Operations'] }>
  listOperations(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listOperations'>]-?: ReturnTypeFrom<'listOperations'>[K]}['Operations'] }>;

  listPrices(params: { [K in keyof Omit<ParamsFrom<'listPrices', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'listPrices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPrices'>]-?: ReturnTypeFrom<'listPrices'>[K]}['Prices'] }>
  listPrices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listPrices'>]-?: ReturnTypeFrom<'listPrices'>[K]}['Prices'] }>;

  listTagsForDomain: FunctionTypeFrom<'listTagsForDomain'>;

  registerDomain: FunctionTypeFrom<'registerDomain'>;

  rejectDomainTransferFromAnotherAwsAccount: FunctionTypeFrom<'rejectDomainTransferFromAnotherAwsAccount'>;

  renewDomain: FunctionTypeFrom<'renewDomain'>;

  resendContactReachabilityEmail: FunctionTypeFrom<'resendContactReachabilityEmail'>;

  retrieveDomainAuthCode: FunctionTypeFrom<'retrieveDomainAuthCode'>;

  transferDomain: FunctionTypeFrom<'transferDomain'>;

  transferDomainToAnotherAwsAccount: FunctionTypeFrom<'transferDomainToAnotherAwsAccount'>;

  updateDomainContact: FunctionTypeFrom<'updateDomainContact'>;

  updateDomainContactPrivacy: FunctionTypeFrom<'updateDomainContactPrivacy'>;

  updateDomainNameservers: FunctionTypeFrom<'updateDomainNameservers'>;

  updateTagsForDomain: FunctionTypeFrom<'updateTagsForDomain'>;

  viewBilling(params: { [K in keyof Omit<ParamsFrom<'viewBilling', { next?: string, limit?: number }>, 'Marker' | 'MaxItems'>]: ParamsFrom<'viewBilling', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'viewBilling'>]-?: ReturnTypeFrom<'viewBilling'>[K]}['BillingRecords'] }>
  viewBilling(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'viewBilling'>]-?: ReturnTypeFrom<'viewBilling'>[K]}['BillingRecords'] }>
}
 
export class Route53Domains implements ClientType {
  private constructor(private readonly client: AWSRoute53Domains) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'route53domains';
  public readonly global = false;
  public readonly category = 'Networking and Content Delivery';
  public readonly topLevelCalls = ["listDomains","listOperations","listPrices","viewBilling"] as const;
  
  async acceptDomainTransferFromAnotherAwsAccount(...args: any): Promise<any> {
  // undefined
    return this.client.acceptDomainTransferFromAnotherAwsAccount(...args).promise()
  }

  async cancelDomainTransferToAnotherAwsAccount(...args: any): Promise<any> {
  // undefined
    return this.client.cancelDomainTransferToAnotherAwsAccount(...args).promise()
  }

  async checkDomainAvailability(...args: any): Promise<any> {
  // undefined
    return this.client.checkDomainAvailability(...args).promise()
  }

  async checkDomainTransferability(...args: any): Promise<any> {
  // undefined
    return this.client.checkDomainTransferability(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async deleteTagsForDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteTagsForDomain(...args).promise()
  }

  async disableDomainAutoRenew(...args: any): Promise<any> {
  // undefined
    return this.client.disableDomainAutoRenew(...args).promise()
  }

  async disableDomainTransferLock(...args: any): Promise<any> {
  // undefined
    return this.client.disableDomainTransferLock(...args).promise()
  }

  async enableDomainAutoRenew(...args: any): Promise<any> {
  // undefined
    return this.client.enableDomainAutoRenew(...args).promise()
  }

  async enableDomainTransferLock(...args: any): Promise<any> {
  // undefined
    return this.client.enableDomainTransferLock(...args).promise()
  }

  async getContactReachabilityStatus(...args: any): Promise<any> {
  // undefined
    return this.client.getContactReachabilityStatus(...args).promise()
  }

  async getDomainDetail(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainDetail(...args).promise()
  }

  async getDomainSuggestions(...args: any): Promise<any> {
  // undefined
    return this.client.getDomainSuggestions(...args).promise()
  }

  async getOperationDetail(...args: any): Promise<any> {
  // undefined
    return this.client.getOperationDetail(...args).promise()
  }

  async listDomains(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextPageMarker","resultKey":"Domains"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listDomains(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPageMarker;
    const member = result.Domains ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listOperations(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextPageMarker","resultKey":"Operations"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listOperations(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPageMarker;
    const member = result.Operations ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listPrices(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextPageMarker","resultKey":"Prices"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.listPrices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPageMarker;
    const member = result.Prices ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForDomain(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForDomain(...args).promise()
  }

  async registerDomain(...args: any): Promise<any> {
  // undefined
    return this.client.registerDomain(...args).promise()
  }

  async rejectDomainTransferFromAnotherAwsAccount(...args: any): Promise<any> {
  // undefined
    return this.client.rejectDomainTransferFromAnotherAwsAccount(...args).promise()
  }

  async renewDomain(...args: any): Promise<any> {
  // undefined
    return this.client.renewDomain(...args).promise()
  }

  async resendContactReachabilityEmail(...args: any): Promise<any> {
  // undefined
    return this.client.resendContactReachabilityEmail(...args).promise()
  }

  async retrieveDomainAuthCode(...args: any): Promise<any> {
  // undefined
    return this.client.retrieveDomainAuthCode(...args).promise()
  }

  async transferDomain(...args: any): Promise<any> {
  // undefined
    return this.client.transferDomain(...args).promise()
  }

  async transferDomainToAnotherAwsAccount(...args: any): Promise<any> {
  // undefined
    return this.client.transferDomainToAnotherAwsAccount(...args).promise()
  }

  async updateDomainContact(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainContact(...args).promise()
  }

  async updateDomainContactPrivacy(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainContactPrivacy(...args).promise()
  }

  async updateDomainNameservers(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainNameservers(...args).promise()
  }

  async updateTagsForDomain(...args: any): Promise<any> {
  // undefined
    return this.client.updateTagsForDomain(...args).promise()
  }

  async viewBilling(...args: any): Promise<any> {
    // {"inputToken":"Marker","limitKey":"MaxItems","outputToken":"NextPageMarker","resultKey":"BillingRecords"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { Marker: next } : {};
    const limitTokenPart = limit ? { MaxItems: limit } : {};
    const result = await this.client.viewBilling(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextPageMarker;
    const member = result.BillingRecords ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }
  
  static fromClient(client: AWSRoute53Domains): ClientType {
    return new Route53Domains(client) as any;
  }
  
  static client(options?: AWSRoute53Domains.Types.ClientConfiguration): ClientType {
    return new Route53Domains(new AWSRoute53Domains(options)) as any;
  }
}  
