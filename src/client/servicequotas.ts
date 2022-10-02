import { Request, ServiceQuotas as AWSServiceQuotas } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSServiceQuotas> = AWSServiceQuotas[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSServiceQuotas> = AWSServiceQuotas[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSServiceQuotas[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSServiceQuotas, Extras> = AWSServiceQuotas[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;

 interface ClientType {
    signingRegion: string | undefined;
    service: 'servicequotas';
    global: false;
    category: 'Management and Governance'
    topLevelCalls: readonly ["listRequestedServiceQuotaChangeHistory","listServiceQuotaIncreaseRequestsInTemplate","listServices"];
    
  associateServiceQuotaTemplate: FunctionTypeFrom<'associateServiceQuotaTemplate'>;

  deleteServiceQuotaIncreaseRequestFromTemplate: FunctionTypeFrom<'deleteServiceQuotaIncreaseRequestFromTemplate'>;

  disassociateServiceQuotaTemplate: FunctionTypeFrom<'disassociateServiceQuotaTemplate'>;

  getAWSDefaultServiceQuota: FunctionTypeFrom<'getAWSDefaultServiceQuota'>;

  getAssociationForServiceQuotaTemplate: FunctionTypeFrom<'getAssociationForServiceQuotaTemplate'>;

  getRequestedServiceQuotaChange: FunctionTypeFrom<'getRequestedServiceQuotaChange'>;

  getServiceQuota: FunctionTypeFrom<'getServiceQuota'>;

  getServiceQuotaIncreaseRequestFromTemplate: FunctionTypeFrom<'getServiceQuotaIncreaseRequestFromTemplate'>;

  listAWSDefaultServiceQuotas(params: { [K in keyof Omit<ParamsFrom<'listAWSDefaultServiceQuotas', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listAWSDefaultServiceQuotas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listAWSDefaultServiceQuotas'>]-?: ReturnTypeFrom<'listAWSDefaultServiceQuotas'>[K]}['Quotas'] }>
  ;

  listRequestedServiceQuotaChangeHistory(params: { [K in keyof Omit<ParamsFrom<'listRequestedServiceQuotaChangeHistory', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRequestedServiceQuotaChangeHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRequestedServiceQuotaChangeHistory'>]-?: ReturnTypeFrom<'listRequestedServiceQuotaChangeHistory'>[K]}['RequestedQuotas'] }>
  listRequestedServiceQuotaChangeHistory(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRequestedServiceQuotaChangeHistory'>]-?: ReturnTypeFrom<'listRequestedServiceQuotaChangeHistory'>[K]}['RequestedQuotas'] }>;

  listRequestedServiceQuotaChangeHistoryByQuota(params: { [K in keyof Omit<ParamsFrom<'listRequestedServiceQuotaChangeHistoryByQuota', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listRequestedServiceQuotaChangeHistoryByQuota', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listRequestedServiceQuotaChangeHistoryByQuota'>]-?: ReturnTypeFrom<'listRequestedServiceQuotaChangeHistoryByQuota'>[K]}['RequestedQuotas'] }>
  ;

  listServiceQuotaIncreaseRequestsInTemplate(params: { [K in keyof Omit<ParamsFrom<'listServiceQuotaIncreaseRequestsInTemplate', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listServiceQuotaIncreaseRequestsInTemplate', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceQuotaIncreaseRequestsInTemplate'>]-?: ReturnTypeFrom<'listServiceQuotaIncreaseRequestsInTemplate'>[K]}['ServiceQuotaIncreaseRequestInTemplateList'] }>
  listServiceQuotaIncreaseRequestsInTemplate(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceQuotaIncreaseRequestsInTemplate'>]-?: ReturnTypeFrom<'listServiceQuotaIncreaseRequestsInTemplate'>[K]}['ServiceQuotaIncreaseRequestInTemplateList'] }>;

  listServiceQuotas(params: { [K in keyof Omit<ParamsFrom<'listServiceQuotas', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listServiceQuotas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServiceQuotas'>]-?: ReturnTypeFrom<'listServiceQuotas'>[K]}['Quotas'] }>
  ;

  listServices(params: { [K in keyof Omit<ParamsFrom<'listServices', { next?: string, limit?: number }>, 'NextToken' | 'MaxResults'>]: ParamsFrom<'listServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['Services'] }>
  listServices(): Promise<{ next?: string; totalItems: number; member: { [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['Services'] }>;

  listTagsForResource: FunctionTypeFrom<'listTagsForResource'>;

  putServiceQuotaIncreaseRequestIntoTemplate: FunctionTypeFrom<'putServiceQuotaIncreaseRequestIntoTemplate'>;

  requestServiceQuotaIncrease: FunctionTypeFrom<'requestServiceQuotaIncrease'>;

  tagResource: FunctionTypeFrom<'tagResource'>;

  untagResource: FunctionTypeFrom<'untagResource'>
}
 
export class ServiceQuotas implements ClientType {
  private constructor(private readonly client: AWSServiceQuotas) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'servicequotas';
  public readonly global = false;
  public readonly category = 'Management and Governance';
  public readonly topLevelCalls = ["listRequestedServiceQuotaChangeHistory","listServiceQuotaIncreaseRequestsInTemplate","listServices"] as const;
  
  async associateServiceQuotaTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.associateServiceQuotaTemplate(...args).promise()
  }

  async deleteServiceQuotaIncreaseRequestFromTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.deleteServiceQuotaIncreaseRequestFromTemplate(...args).promise()
  }

  async disassociateServiceQuotaTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.disassociateServiceQuotaTemplate(...args).promise()
  }

  async getAWSDefaultServiceQuota(...args: any): Promise<any> {
  // undefined
    return this.client.getAWSDefaultServiceQuota(...args).promise()
  }

  async getAssociationForServiceQuotaTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getAssociationForServiceQuotaTemplate(...args).promise()
  }

  async getRequestedServiceQuotaChange(...args: any): Promise<any> {
  // undefined
    return this.client.getRequestedServiceQuotaChange(...args).promise()
  }

  async getServiceQuota(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceQuota(...args).promise()
  }

  async getServiceQuotaIncreaseRequestFromTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.getServiceQuotaIncreaseRequestFromTemplate(...args).promise()
  }

  async listAWSDefaultServiceQuotas(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Quotas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAWSDefaultServiceQuotas(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Quotas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRequestedServiceQuotaChangeHistory(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RequestedQuotas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRequestedServiceQuotaChangeHistory(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RequestedQuotas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRequestedServiceQuotaChangeHistoryByQuota(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RequestedQuotas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRequestedServiceQuotaChangeHistoryByQuota(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.RequestedQuotas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceQuotaIncreaseRequestsInTemplate(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServiceQuotaIncreaseRequestInTemplateList"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServiceQuotaIncreaseRequestsInTemplate(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.ServiceQuotaIncreaseRequestInTemplateList ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceQuotas(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Quotas"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServiceQuotas(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Quotas ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServices(...args: any): Promise<any> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Services"}
    const [initialParams, ...restArgs] = args ?? [];
    const {next, limit, ...otherParams} = initialParams ?? {};
    const nextTokenPart = next ? { NextToken: next } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServices(...(args?.length ? [{...nextTokenPart, ...limitTokenPart, ...otherParams}, ...restArgs] : [])).promise();
    const nextToken = result.NextToken;
    const member = result.Services ?? [];
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listTagsForResource(...args: any): Promise<any> {
  // undefined
    return this.client.listTagsForResource(...args).promise()
  }

  async putServiceQuotaIncreaseRequestIntoTemplate(...args: any): Promise<any> {
  // undefined
    return this.client.putServiceQuotaIncreaseRequestIntoTemplate(...args).promise()
  }

  async requestServiceQuotaIncrease(...args: any): Promise<any> {
  // undefined
    return this.client.requestServiceQuotaIncrease(...args).promise()
  }

  async tagResource(...args: any): Promise<any> {
  // undefined
    return this.client.tagResource(...args).promise()
  }

  async untagResource(...args: any): Promise<any> {
  // undefined
    return this.client.untagResource(...args).promise()
  }
  
  static fromClient(client: AWSServiceQuotas): ClientType {
    return new ServiceQuotas(client) as any;
  }
  
  static client(options?: AWSServiceQuotas.Types.ClientConfiguration): ClientType {
    return new ServiceQuotas(new AWSServiceQuotas(options)) as any;
  }
}  
