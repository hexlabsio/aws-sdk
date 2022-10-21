import { Request, CloudSearch as AWSCloudSearch } from 'aws-sdk';
// @ts-ignore
type ReturnTypeFrom<K extends keyof AWSCloudSearch> = AWSCloudSearch[K] extends (...args: any) => Request<infer R, any> ? R : never;
// @ts-ignore
type FunctionTypeFrom<K extends keyof AWSCloudSearch> = AWSCloudSearch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? (params?: P) => Promise<R> : AWSCloudSearch[K] extends {
  (callback: (...args: any) => void): Request<infer R, any>;
} ? () => Promise<R> : never;
// @ts-ignore
type ParamsFrom<K extends keyof AWSCloudSearch, Extras> = AWSCloudSearch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P & Extras: never;
// @ts-ignore
type RawParamsFrom<K extends keyof AWSCloudSearch> = AWSCloudSearch[K] extends {
  (param: infer P, callback: (...args: any) => void): Request<infer R, any>;
  (callback: (...args: any) => void): any;
} ? P: never;
 
export class CloudSearch {
  private constructor(private readonly client: AWSCloudSearch) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudsearch' as const;
  public readonly global = false as const;
  public readonly category = 'Analytics' as const;
  public readonly topLevelCalls = ["describeDomains"] as const;
  
  buildSuggesters: (params: RawParamsFrom<'buildSuggesters'>) => Promise<ReturnTypeFrom<'buildSuggesters'>>  = async params => {
  // undefined
    return this.client.buildSuggesters(params as any).promise();
  }

  createDomain: (params: RawParamsFrom<'createDomain'>) => Promise<ReturnTypeFrom<'createDomain'>>  = async params => {
  // undefined
    return this.client.createDomain(params as any).promise();
  }

  defineAnalysisScheme: (params: RawParamsFrom<'defineAnalysisScheme'>) => Promise<ReturnTypeFrom<'defineAnalysisScheme'>>  = async params => {
  // undefined
    return this.client.defineAnalysisScheme(params as any).promise();
  }

  defineExpression: (params: RawParamsFrom<'defineExpression'>) => Promise<ReturnTypeFrom<'defineExpression'>>  = async params => {
  // undefined
    return this.client.defineExpression(params as any).promise();
  }

  defineIndexField: (params: RawParamsFrom<'defineIndexField'>) => Promise<ReturnTypeFrom<'defineIndexField'>>  = async params => {
  // undefined
    return this.client.defineIndexField(params as any).promise();
  }

  defineSuggester: (params: RawParamsFrom<'defineSuggester'>) => Promise<ReturnTypeFrom<'defineSuggester'>>  = async params => {
  // undefined
    return this.client.defineSuggester(params as any).promise();
  }

  deleteAnalysisScheme: (params: RawParamsFrom<'deleteAnalysisScheme'>) => Promise<ReturnTypeFrom<'deleteAnalysisScheme'>>  = async params => {
  // undefined
    return this.client.deleteAnalysisScheme(params as any).promise();
  }

  deleteDomain: (params: RawParamsFrom<'deleteDomain'>) => Promise<ReturnTypeFrom<'deleteDomain'>>  = async params => {
  // undefined
    return this.client.deleteDomain(params as any).promise();
  }

  deleteExpression: (params: RawParamsFrom<'deleteExpression'>) => Promise<ReturnTypeFrom<'deleteExpression'>>  = async params => {
  // undefined
    return this.client.deleteExpression(params as any).promise();
  }

  deleteIndexField: (params: RawParamsFrom<'deleteIndexField'>) => Promise<ReturnTypeFrom<'deleteIndexField'>>  = async params => {
  // undefined
    return this.client.deleteIndexField(params as any).promise();
  }

  deleteSuggester: (params: RawParamsFrom<'deleteSuggester'>) => Promise<ReturnTypeFrom<'deleteSuggester'>>  = async params => {
  // undefined
    return this.client.deleteSuggester(params as any).promise();
  }

  async describeAnalysisSchemes(params: { [K in keyof ParamsFrom<'describeAnalysisSchemes', {}>]: ParamsFrom<'describeAnalysisSchemes', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeAnalysisSchemes'>]-?: ReturnTypeFrom<'describeAnalysisSchemes'>[K]}['AnalysisSchemes'], undefined>}> {
    // {"resultKey":"AnalysisSchemes"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeAnalysisSchemes({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.AnalysisSchemes ?? []) ? (result.AnalysisSchemes ?? []) : [result.AnalysisSchemes]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeAvailabilityOptions: (params: RawParamsFrom<'describeAvailabilityOptions'>) => Promise<ReturnTypeFrom<'describeAvailabilityOptions'>>  = async params => {
  // undefined
    return this.client.describeAvailabilityOptions(params as any).promise();
  }

  describeDomainEndpointOptions: (params: RawParamsFrom<'describeDomainEndpointOptions'>) => Promise<ReturnTypeFrom<'describeDomainEndpointOptions'>>  = async params => {
  // undefined
    return this.client.describeDomainEndpointOptions(params as any).promise();
  }

  async describeDomains(params: { [K in keyof ParamsFrom<'describeDomains', {}>]: ParamsFrom<'describeDomains', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeDomains'>]-?: ReturnTypeFrom<'describeDomains'>[K]}['DomainStatusList'], undefined>}> {
    // {"resultKey":"DomainStatusList"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeDomains({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.DomainStatusList ?? []) ? (result.DomainStatusList ?? []) : [result.DomainStatusList]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeExpressions(params: { [K in keyof ParamsFrom<'describeExpressions', {}>]: ParamsFrom<'describeExpressions', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeExpressions'>]-?: ReturnTypeFrom<'describeExpressions'>[K]}['Expressions'], undefined>}> {
    // {"resultKey":"Expressions"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeExpressions({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Expressions ?? []) ? (result.Expressions ?? []) : [result.Expressions]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  async describeIndexFields(params: { [K in keyof ParamsFrom<'describeIndexFields', {}>]: ParamsFrom<'describeIndexFields', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeIndexFields'>]-?: ReturnTypeFrom<'describeIndexFields'>[K]}['IndexFields'], undefined>}> {
    // {"resultKey":"IndexFields"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeIndexFields({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.IndexFields ?? []) ? (result.IndexFields ?? []) : [result.IndexFields]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  describeScalingParameters: (params: RawParamsFrom<'describeScalingParameters'>) => Promise<ReturnTypeFrom<'describeScalingParameters'>>  = async params => {
  // undefined
    return this.client.describeScalingParameters(params as any).promise();
  }

  describeServiceAccessPolicies: (params: RawParamsFrom<'describeServiceAccessPolicies'>) => Promise<ReturnTypeFrom<'describeServiceAccessPolicies'>>  = async params => {
  // undefined
    return this.client.describeServiceAccessPolicies(params as any).promise();
  }

  async describeSuggesters(params: { [K in keyof ParamsFrom<'describeSuggesters', {}>]: ParamsFrom<'describeSuggesters', {}>[K]}): Promise<{ next?: string | number; totalItems: number; member: Exclude<{ [K in keyof ReturnTypeFrom<'describeSuggesters'>]-?: ReturnTypeFrom<'describeSuggesters'>[K]}['Suggesters'], undefined>}> {
    // {"resultKey":"Suggesters"}
    const { ...otherParams} = params ?? {};
    const nextTokenPart = {};
    const limitTokenPart = {};
    const result = await this.client.describeSuggesters({...nextTokenPart, ...limitTokenPart, ...otherParams} as any).promise();
    const nextToken = undefined ;
    const member = (Array.isArray(result.Suggesters ?? []) ? (result.Suggesters ?? []) : [result.Suggesters]) as any;
    return {
      totalItems: member.length,
      member,
      next: JSON.stringify(nextToken)
    }
  }

  indexDocuments: (params: RawParamsFrom<'indexDocuments'>) => Promise<ReturnTypeFrom<'indexDocuments'>>  = async params => {
  // undefined
    return this.client.indexDocuments(params as any).promise();
  }

  listDomainNames: (params: RawParamsFrom<'listDomainNames'>) => Promise<ReturnTypeFrom<'listDomainNames'>>  = async params => {
  // undefined
    return this.client.listDomainNames(params as any).promise();
  }

  updateAvailabilityOptions: (params: RawParamsFrom<'updateAvailabilityOptions'>) => Promise<ReturnTypeFrom<'updateAvailabilityOptions'>>  = async params => {
  // undefined
    return this.client.updateAvailabilityOptions(params as any).promise();
  }

  updateDomainEndpointOptions: (params: RawParamsFrom<'updateDomainEndpointOptions'>) => Promise<ReturnTypeFrom<'updateDomainEndpointOptions'>>  = async params => {
  // undefined
    return this.client.updateDomainEndpointOptions(params as any).promise();
  }

  updateScalingParameters: (params: RawParamsFrom<'updateScalingParameters'>) => Promise<ReturnTypeFrom<'updateScalingParameters'>>  = async params => {
  // undefined
    return this.client.updateScalingParameters(params as any).promise();
  }

  updateServiceAccessPolicies: (params: RawParamsFrom<'updateServiceAccessPolicies'>) => Promise<ReturnTypeFrom<'updateServiceAccessPolicies'>>  = async params => {
  // undefined
    return this.client.updateServiceAccessPolicies(params as any).promise();
  }
  
  static fromClient(client: AWSCloudSearch): CloudSearch {
    return new CloudSearch(client) as any;
  }
  
  static client(options?: AWSCloudSearch.Types.ClientConfiguration): CloudSearch {
    return new CloudSearch(new AWSCloudSearch(options)) as any;
  }
}  
