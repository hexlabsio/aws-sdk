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

 interface ClientType {
    signingRegion: string | undefined;
    service: 'cloudsearch';
    global: false;
    category: 'Analytics'
    topLevelCalls: readonly ["describeDomains"];
    
  buildSuggesters: FunctionTypeFrom<'buildSuggesters'>;

  createDomain: FunctionTypeFrom<'createDomain'>;

  defineAnalysisScheme: FunctionTypeFrom<'defineAnalysisScheme'>;

  defineExpression: FunctionTypeFrom<'defineExpression'>;

  defineIndexField: FunctionTypeFrom<'defineIndexField'>;

  defineSuggester: FunctionTypeFrom<'defineSuggester'>;

  deleteAnalysisScheme: FunctionTypeFrom<'deleteAnalysisScheme'>;

  deleteDomain: FunctionTypeFrom<'deleteDomain'>;

  deleteExpression: FunctionTypeFrom<'deleteExpression'>;

  deleteIndexField: FunctionTypeFrom<'deleteIndexField'>;

  deleteSuggester: FunctionTypeFrom<'deleteSuggester'>;

  describeAnalysisSchemes: FunctionTypeFrom<'describeAnalysisSchemes'>;

  describeAvailabilityOptions: FunctionTypeFrom<'describeAvailabilityOptions'>;

  describeDomainEndpointOptions: FunctionTypeFrom<'describeDomainEndpointOptions'>;

  describeDomains: FunctionTypeFrom<'describeDomains'>;

  describeExpressions: FunctionTypeFrom<'describeExpressions'>;

  describeIndexFields: FunctionTypeFrom<'describeIndexFields'>;

  describeScalingParameters: FunctionTypeFrom<'describeScalingParameters'>;

  describeServiceAccessPolicies: FunctionTypeFrom<'describeServiceAccessPolicies'>;

  describeSuggesters: FunctionTypeFrom<'describeSuggesters'>;

  indexDocuments: FunctionTypeFrom<'indexDocuments'>;

  listDomainNames: FunctionTypeFrom<'listDomainNames'>;

  updateAvailabilityOptions: FunctionTypeFrom<'updateAvailabilityOptions'>;

  updateDomainEndpointOptions: FunctionTypeFrom<'updateDomainEndpointOptions'>;

  updateScalingParameters: FunctionTypeFrom<'updateScalingParameters'>;

  updateServiceAccessPolicies: FunctionTypeFrom<'updateServiceAccessPolicies'>
}
 
export class CloudSearch implements ClientType {
  private constructor(private readonly client: AWSCloudSearch) {}
  
  public readonly signingRegion = undefined;
  public readonly service = 'cloudsearch';
  public readonly global = false;
  public readonly category = 'Analytics';
  public readonly topLevelCalls = ["describeDomains"] as const;
  
  async buildSuggesters(...args: any): Promise<any> {
  // undefined
    return this.client.buildSuggesters(...args).promise()
  }

  async createDomain(...args: any): Promise<any> {
  // undefined
    return this.client.createDomain(...args).promise()
  }

  async defineAnalysisScheme(...args: any): Promise<any> {
  // undefined
    return this.client.defineAnalysisScheme(...args).promise()
  }

  async defineExpression(...args: any): Promise<any> {
  // undefined
    return this.client.defineExpression(...args).promise()
  }

  async defineIndexField(...args: any): Promise<any> {
  // undefined
    return this.client.defineIndexField(...args).promise()
  }

  async defineSuggester(...args: any): Promise<any> {
  // undefined
    return this.client.defineSuggester(...args).promise()
  }

  async deleteAnalysisScheme(...args: any): Promise<any> {
  // undefined
    return this.client.deleteAnalysisScheme(...args).promise()
  }

  async deleteDomain(...args: any): Promise<any> {
  // undefined
    return this.client.deleteDomain(...args).promise()
  }

  async deleteExpression(...args: any): Promise<any> {
  // undefined
    return this.client.deleteExpression(...args).promise()
  }

  async deleteIndexField(...args: any): Promise<any> {
  // undefined
    return this.client.deleteIndexField(...args).promise()
  }

  async deleteSuggester(...args: any): Promise<any> {
  // undefined
    return this.client.deleteSuggester(...args).promise()
  }

  async describeAnalysisSchemes(...args: any): Promise<any> {
  // {"resultKey":"AnalysisSchemes"}
    return this.client.describeAnalysisSchemes(...args).promise()
  }

  async describeAvailabilityOptions(...args: any): Promise<any> {
  // undefined
    return this.client.describeAvailabilityOptions(...args).promise()
  }

  async describeDomainEndpointOptions(...args: any): Promise<any> {
  // undefined
    return this.client.describeDomainEndpointOptions(...args).promise()
  }

  async describeDomains(...args: any): Promise<any> {
  // {"resultKey":"DomainStatusList"}
    return this.client.describeDomains(...args).promise()
  }

  async describeExpressions(...args: any): Promise<any> {
  // {"resultKey":"Expressions"}
    return this.client.describeExpressions(...args).promise()
  }

  async describeIndexFields(...args: any): Promise<any> {
  // {"resultKey":"IndexFields"}
    return this.client.describeIndexFields(...args).promise()
  }

  async describeScalingParameters(...args: any): Promise<any> {
  // undefined
    return this.client.describeScalingParameters(...args).promise()
  }

  async describeServiceAccessPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.describeServiceAccessPolicies(...args).promise()
  }

  async describeSuggesters(...args: any): Promise<any> {
  // {"resultKey":"Suggesters"}
    return this.client.describeSuggesters(...args).promise()
  }

  async indexDocuments(...args: any): Promise<any> {
  // undefined
    return this.client.indexDocuments(...args).promise()
  }

  async listDomainNames(...args: any): Promise<any> {
  // undefined
    return this.client.listDomainNames(...args).promise()
  }

  async updateAvailabilityOptions(...args: any): Promise<any> {
  // undefined
    return this.client.updateAvailabilityOptions(...args).promise()
  }

  async updateDomainEndpointOptions(...args: any): Promise<any> {
  // undefined
    return this.client.updateDomainEndpointOptions(...args).promise()
  }

  async updateScalingParameters(...args: any): Promise<any> {
  // undefined
    return this.client.updateScalingParameters(...args).promise()
  }

  async updateServiceAccessPolicies(...args: any): Promise<any> {
  // undefined
    return this.client.updateServiceAccessPolicies(...args).promise()
  }
  
  static fromClient(client: AWSCloudSearch): ClientType {
    return new CloudSearch(client) as any;
  }
  
  static client(options?: AWSCloudSearch.Types.ClientConfiguration): ClientType {
    return new CloudSearch(new AWSCloudSearch(options)) as any;
  }
}  
