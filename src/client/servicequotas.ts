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
// @ts-ignore
type RawParamsFrom<K extends keyof AWSServiceQuotas> = AWSServiceQuotas[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class ServiceQuotas {
  private constructor(private readonly client: AWSServiceQuotas) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'servicequotas' as const;
  public readonly global = false as const;
  public readonly category = 'Management and Governance' as const;
  public readonly topLevelCalls = ["listRequestedServiceQuotaChangeHistory","listServiceQuotaIncreaseRequestsInTemplate","listServices"] as const;
  
  associateServiceQuotaTemplate: (params: RawParamsFrom<'associateServiceQuotaTemplate'>) => Promise<ReturnTypeFrom<'associateServiceQuotaTemplate'>>  = async params => {
  // undefined
    return this.client.associateServiceQuotaTemplate(params as any).promise();
  }

  deleteServiceQuotaIncreaseRequestFromTemplate: (params: RawParamsFrom<'deleteServiceQuotaIncreaseRequestFromTemplate'>) => Promise<ReturnTypeFrom<'deleteServiceQuotaIncreaseRequestFromTemplate'>>  = async params => {
  // undefined
    return this.client.deleteServiceQuotaIncreaseRequestFromTemplate(params as any).promise();
  }

  disassociateServiceQuotaTemplate: (params: RawParamsFrom<'disassociateServiceQuotaTemplate'>) => Promise<ReturnTypeFrom<'disassociateServiceQuotaTemplate'>>  = async params => {
  // undefined
    return this.client.disassociateServiceQuotaTemplate(params as any).promise();
  }

  getAWSDefaultServiceQuota: (params: RawParamsFrom<'getAWSDefaultServiceQuota'>) => Promise<ReturnTypeFrom<'getAWSDefaultServiceQuota'>>  = async params => {
  // undefined
    return this.client.getAWSDefaultServiceQuota(params as any).promise();
  }

  getAssociationForServiceQuotaTemplate: (params: RawParamsFrom<'getAssociationForServiceQuotaTemplate'>) => Promise<ReturnTypeFrom<'getAssociationForServiceQuotaTemplate'>>  = async params => {
  // undefined
    return this.client.getAssociationForServiceQuotaTemplate(params as any).promise();
  }

  getRequestedServiceQuotaChange: (params: RawParamsFrom<'getRequestedServiceQuotaChange'>) => Promise<ReturnTypeFrom<'getRequestedServiceQuotaChange'>>  = async params => {
  // undefined
    return this.client.getRequestedServiceQuotaChange(params as any).promise();
  }

  getServiceQuota: (params: RawParamsFrom<'getServiceQuota'>) => Promise<ReturnTypeFrom<'getServiceQuota'>>  = async params => {
  // undefined
    return this.client.getServiceQuota(params as any).promise();
  }

  getServiceQuotaIncreaseRequestFromTemplate: (params: RawParamsFrom<'getServiceQuotaIncreaseRequestFromTemplate'>) => Promise<ReturnTypeFrom<'getServiceQuotaIncreaseRequestFromTemplate'>>  = async params => {
  // undefined
    return this.client.getServiceQuotaIncreaseRequestFromTemplate(params as any).promise();
  }

  async listAWSDefaultServiceQuotas(params: { [K in keyof ParamsFrom<'listAWSDefaultServiceQuotas', { next?: string, limit?: number }>]: ParamsFrom<'listAWSDefaultServiceQuotas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listAWSDefaultServiceQuotas'>]-?: ReturnTypeFrom<'listAWSDefaultServiceQuotas'>[K]}['Quotas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Quotas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listAWSDefaultServiceQuotas({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listAWSDefaultServiceQuotas' })).toString('base64');
    const member = (Array.isArray(result.Quotas ?? []) ? (result.Quotas ?? []) : [result.Quotas]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRequestedServiceQuotaChangeHistory(params: { [K in keyof ParamsFrom<'listRequestedServiceQuotaChangeHistory', { next?: string, limit?: number }>]: ParamsFrom<'listRequestedServiceQuotaChangeHistory', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRequestedServiceQuotaChangeHistory'>]-?: ReturnTypeFrom<'listRequestedServiceQuotaChangeHistory'>[K]}['RequestedQuotas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RequestedQuotas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRequestedServiceQuotaChangeHistory({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRequestedServiceQuotaChangeHistory' })).toString('base64');
    const member = (Array.isArray(result.RequestedQuotas ?? []) ? (result.RequestedQuotas ?? []) : [result.RequestedQuotas]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listRequestedServiceQuotaChangeHistoryByQuota(params: { [K in keyof ParamsFrom<'listRequestedServiceQuotaChangeHistoryByQuota', { next?: string, limit?: number }>]: ParamsFrom<'listRequestedServiceQuotaChangeHistoryByQuota', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listRequestedServiceQuotaChangeHistoryByQuota'>]-?: ReturnTypeFrom<'listRequestedServiceQuotaChangeHistoryByQuota'>[K]}['RequestedQuotas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"RequestedQuotas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listRequestedServiceQuotaChangeHistoryByQuota({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listRequestedServiceQuotaChangeHistoryByQuota' })).toString('base64');
    const member = (Array.isArray(result.RequestedQuotas ?? []) ? (result.RequestedQuotas ?? []) : [result.RequestedQuotas]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceQuotaIncreaseRequestsInTemplate(params: { [K in keyof ParamsFrom<'listServiceQuotaIncreaseRequestsInTemplate', { next?: string, limit?: number }>]: ParamsFrom<'listServiceQuotaIncreaseRequestsInTemplate', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServiceQuotaIncreaseRequestsInTemplate'>]-?: ReturnTypeFrom<'listServiceQuotaIncreaseRequestsInTemplate'>[K]}['ServiceQuotaIncreaseRequestInTemplateList'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"ServiceQuotaIncreaseRequestInTemplateList"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServiceQuotaIncreaseRequestsInTemplate({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listServiceQuotaIncreaseRequestsInTemplate' })).toString('base64');
    const member = (Array.isArray(result.ServiceQuotaIncreaseRequestInTemplateList ?? []) ? (result.ServiceQuotaIncreaseRequestInTemplateList ?? []) : [result.ServiceQuotaIncreaseRequestInTemplateList]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServiceQuotas(params: { [K in keyof ParamsFrom<'listServiceQuotas', { next?: string, limit?: number }>]: ParamsFrom<'listServiceQuotas', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServiceQuotas'>]-?: ReturnTypeFrom<'listServiceQuotas'>[K]}['Quotas'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Quotas"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServiceQuotas({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listServiceQuotas' })).toString('base64');
    const member = (Array.isArray(result.Quotas ?? []) ? (result.Quotas ?? []) : [result.Quotas]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  async listServices(params: { [K in keyof ParamsFrom<'listServices', { next?: string, limit?: number }>]: ParamsFrom<'listServices', { next?: string, limit?: number }>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'listServices'>]-?: ReturnTypeFrom<'listServices'>[K]}['Services'], undefined>}> {
    // {"inputToken":"NextToken","limitKey":"MaxResults","outputToken":"NextToken","resultKey":"Services"}
    const {next, limit,  ...otherParams} = params ?? {};
    const nextTokenPart = next ? { NextToken: JSON.parse(Buffer.from(next, 'base64').toString('ascii')).token } : {};
    const limitTokenPart = limit ? { MaxResults: limit } : {};
    const result = await this.client.listServices({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = Buffer.from(JSON.stringify({ token: result.NextToken, operation: 'listServices' })).toString('base64');
    const member = (Array.isArray(result.Services ?? []) ? (result.Services ?? []) : [result.Services]) as any;
    return {
      totalItems: member.length,
      member,
      next: nextToken
    }
  }

  listTagsForResource: (params: RawParamsFrom<'listTagsForResource'>) => Promise<ReturnTypeFrom<'listTagsForResource'>>  = async params => {
  // undefined
    return this.client.listTagsForResource(params as any).promise();
  }

  putServiceQuotaIncreaseRequestIntoTemplate: (params: RawParamsFrom<'putServiceQuotaIncreaseRequestIntoTemplate'>) => Promise<ReturnTypeFrom<'putServiceQuotaIncreaseRequestIntoTemplate'>>  = async params => {
  // undefined
    return this.client.putServiceQuotaIncreaseRequestIntoTemplate(params as any).promise();
  }

  requestServiceQuotaIncrease: (params: RawParamsFrom<'requestServiceQuotaIncrease'>) => Promise<ReturnTypeFrom<'requestServiceQuotaIncrease'>>  = async params => {
  // undefined
    return this.client.requestServiceQuotaIncrease(params as any).promise();
  }

  tagResource: (params: RawParamsFrom<'tagResource'>) => Promise<ReturnTypeFrom<'tagResource'>>  = async params => {
  // undefined
    return this.client.tagResource(params as any).promise();
  }

  untagResource: (params: RawParamsFrom<'untagResource'>) => Promise<ReturnTypeFrom<'untagResource'>>  = async params => {
  // undefined
    return this.client.untagResource(params as any).promise();
  }
  
  static fromClient(client: AWSServiceQuotas): ServiceQuotas {
    return new ServiceQuotas(client) as any;
  }
  
  static client(options?: AWSServiceQuotas.Types.ClientConfiguration): ServiceQuotas {
    return new ServiceQuotas(new AWSServiceQuotas(options)) as any;
  }
}  
